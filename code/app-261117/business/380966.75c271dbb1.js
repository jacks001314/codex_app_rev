export const __rspack_esm_ids = [380966]
export const __webpack_modules__ = {
  OXR4(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      l = s("on57"),
      r = s("GCsp"),
      i = s("aBXq")
    s.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            s,
            o,
            d,
            c,
            u,
            m,
            f,
            h = (0, n.c)(29),
            {
              actions: g,
              children: p,
              collapsible: x,
              defaultOpen: y,
              disableContentInlineInset: _,
              count: j,
              id: b,
              onOpenChange: S,
              showDivider: v,
              title: A,
            } = e,
            w = void 0 === y || y,
            N = void 0 === v || v
          h[0] !== g || h[1] !== x
            ? ((t =
                null == g
                  ? null
                  : (0, a.jsx)("span", {
                      className: "flex items-center gap-2",
                      role: "presentation",
                      onClick: (e) => {
                        x && (e.preventDefault(), e.stopPropagation())
                      },
                      onKeyDown: (e) => {
                        x && e.stopPropagation()
                      },
                      children: g,
                    })),
              (h[0] = g),
              (h[1] = x),
              (h[2] = t))
            : (t = h[2])
          let M = t
          ;(h[3] !== x
            ? ((s = x
                ? (0, a.jsx)(r.A, {
                    className:
                      "icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none",
                  })
                : null),
              (h[3] = x),
              (h[4] = s))
            : (s = h[4]),
            h[5] !== s || h[6] !== A
              ? ((o = (0, a.jsxs)(a.Fragment, { children: [A, s] })), (h[5] = s), (h[6] = A), (h[7] = o))
              : (o = h[7]))
          let C = o,
            R = x ? "details" : "section"
          h[8] !== x || h[9] !== w || h[10] !== S
            ? ((d = x
                ? {
                    open: w,
                    onToggle: (e) => {
                      S?.(e.currentTarget.open)
                    },
                  }
                : {}),
              (h[8] = x),
              (h[9] = w),
              (h[10] = S),
              (h[11] = d))
            : (d = h[11])
          let k = d,
            T = x ? "summary" : "div"
          h[12] !== M || h[13] !== j || h[14] !== C || h[15] !== N || h[16] !== T
            ? ((c = (0, a.jsx)(i.u, { action: M, as: T, count: j, showDivider: N, title: C })),
              (h[12] = M),
              (h[13] = j),
              (h[14] = C),
              (h[15] = N),
              (h[16] = T),
              (h[17] = c))
            : (c = h[17])
          let I = !(void 0 !== _ && _) && "px-[var(--detail-page-inline-inset,0px)]"
          return (
            h[18] !== I ? ((u = (0, l.A)("flex flex-col gap-1", I)), (h[18] = I), (h[19] = u)) : (u = h[19]),
            h[20] !== p || h[21] !== u
              ? ((m = (0, a.jsx)("div", { className: u, children: p })), (h[20] = p), (h[21] = u), (h[22] = m))
              : (m = h[22]),
            h[23] !== R || h[24] !== b || h[25] !== k || h[26] !== m || h[27] !== c
              ? ((f = (0, a.jsxs)(R, {
                  ...k,
                  id: b,
                  className:
                    "group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]",
                  children: [c, m],
                })),
                (h[23] = R),
                (h[24] = b),
                (h[25] = k),
                (h[26] = m),
                (h[27] = c),
                (h[28] = f))
              : (f = h[28]),
            f
          )
        },
      },
    )
  },
  aBXq(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      l = s("on57")
    s.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            s,
            r,
            i,
            o,
            d,
            c,
            u = (0, n.c)(24),
            { action: m, as: f, count: h, size: g, showDivider: p, sticky: x, title: y } = e,
            _ = void 0 === f ? "div" : f,
            j = void 0 === g ? "default" : g,
            b = "summary" === _ && "cursor-interaction list-none marker:hidden",
            S =
              x &&
              "relative sticky top-0 z-10 bg-surface after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-surface after:content-['']",
            v = (void 0 === p || p) && "border-b border-subtle"
          u[0] !== b || u[1] !== S || u[2] !== v
            ? ((t = (0, l.A)(
                "flex items-center justify-between gap-3 pe-0.5 pb-2 text-default [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
                b,
                S,
                v,
              )),
              (u[0] = b),
              (u[1] = S),
              (u[2] = v),
              (u[3] = t))
            : (t = u[3])
          let A = t
          ;(u[4] !== h || u[5] !== j
            ? ((s =
                null == h
                  ? null
                  : (0, a.jsx)("span", {
                      className: (0, l.A)("text-tertiary", "compact" === j && "text-sm"),
                      children: h,
                    })),
              (u[4] = h),
              (u[5] = j),
              (u[6] = s))
            : (s = u[6]),
            u[7] !== s || u[8] !== y
              ? ((r = (0, a.jsxs)(a.Fragment, { children: [y, s] })), (u[7] = s), (u[8] = y), (u[9] = r))
              : (r = u[9]))
          let w = r,
            N = "summary" === _ ? "span" : "h2",
            M = "summary" === _ ? "span" : "div",
            C = "compact" === j ? "text-base" : "text-lg"
          return (
            u[10] !== C
              ? ((i = (0, l.A)("flex min-h-7 items-center gap-1.5 leading-6 font-medium", C)), (u[10] = C), (u[11] = i))
              : (i = u[11]),
            u[12] !== N || u[13] !== w || u[14] !== i
              ? ((o = (0, a.jsx)(N, { className: i, children: w })), (u[12] = N), (u[13] = w), (u[14] = i), (u[15] = o))
              : (o = u[15]),
            u[16] !== M || u[17] !== m
              ? ((d = null == m ? null : (0, a.jsx)(M, { className: "shrink-0", children: m })),
                (u[16] = M),
                (u[17] = m),
                (u[18] = d))
              : (d = u[18]),
            u[19] !== _ || u[20] !== A || u[21] !== o || u[22] !== d
              ? ((c = (0, a.jsxs)(_, { className: A, "data-slot": "section-header", children: [o, d] })),
                (u[19] = _),
                (u[20] = A),
                (u[21] = o),
                (u[22] = d),
                (u[23] = c))
              : (c = u[23]),
            c
          )
        },
      },
    )
  },
  BrP7(e, t, s) {
    s.d(t, { t: () => S })
    var a = s("ABep"),
      n = s("QosV"),
      l = s("i1uX"),
      r = s("on57"),
      i = s("IjbW"),
      o = s("K4Cx"),
      d = s("zd8w"),
      c = s("UxN3"),
      u = s("SziE"),
      m = s("hZax"),
      f = s("Sm6l")
    let h = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function g(e) {
      let t,
        s,
        l,
        i,
        o,
        d,
        c,
        u,
        m,
        g,
        p,
        x,
        y = (0, n.c)(26)
      y[0] !== e
        ? (({ children: t, icon: s, size: i, surface: o, labelVisibility: d, ...l } = e),
          (y[0] = e),
          (y[1] = t),
          (y[2] = s),
          (y[3] = l),
          (y[4] = i),
          (y[5] = o),
          (y[6] = d))
        : ((t = y[1]), (s = y[2]), (l = y[3]), (i = y[4]), (o = y[5]), (d = y[6]))
      let _ = void 0 === o ? "elevated" : o,
        j = void 0 === d ? "visible" : d,
        b = "large" === i && "visible" === j && "pb-1.5"
      y[7] !== b ? ((c = (0, r.A)("group/labeled-icon flex-col gap-1.5", b)), (y[7] = b), (y[8] = c)) : (c = y[8])
      let S = "elevated" === _ ? "border shadow-xs" : "border-hairline",
        v = h[i]
      ;(y[9] !== S || y[10] !== v.icon
        ? ((u = (0, r.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            S,
            v.icon,
          )),
          (y[9] = S),
          (y[10] = v.icon),
          (y[11] = u))
        : (u = y[11]),
        y[12] !== s || y[13] !== u
          ? ((m = (0, a.jsx)("span", { className: u, children: s })), (y[12] = s), (y[13] = u), (y[14] = m))
          : (m = y[14]))
      let A = "hidden" === j ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        w = "visible" === j && h[i].caption
      return (
        y[15] !== w || y[16] !== A ? ((g = (0, r.A)(A, w)), (y[15] = w), (y[16] = A), (y[17] = g)) : (g = y[17]),
        y[18] !== t || y[19] !== g
          ? ((p = (0, a.jsx)("span", { className: g, children: t })), (y[18] = t), (y[19] = g), (y[20] = p))
          : (p = y[20]),
        y[21] !== l || y[22] !== p || y[23] !== c || y[24] !== m
          ? ((x = (0, a.jsxs)(f.$, {
              ...l,
              className: c,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [m, p],
            })),
            (y[21] = l),
            (y[22] = p),
            (y[23] = c),
            (y[24] = m),
            (y[25] = x))
          : (x = y[25]),
        x
      )
    }
    let p = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      x = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${p} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      y = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      _ = {
        ...x,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${y} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      j = {
        ...x,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      b = {
        text: {
          ...x,
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
        toolbar: x,
        settings: { ...x, tabButtonClassName: `${p} button-toolbar` },
        search: {
          ...x,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...x,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...x,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${x.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...x,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...x, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: _,
        sectionFilter: {
          ..._,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${y} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ..._,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${y} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ...x,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...x,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...x,
          listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        segmentedPill: j,
        segmentedPillMuted: {
          ...j,
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default dark:text-text/50",
        },
        profile: {
          ...x,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...x, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
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
    function S(e) {
      let t,
        s = (0, n.c)(39),
        {
          tabs: i,
          selectedKey: o,
          onSelect: h,
          onTabClick: p,
          onTabHover: x,
          className: y,
          fill: _,
          scrollable: j,
          tabListRef: S,
          variant: w,
          ariaLabel: N,
          ariaLabelledBy: M,
          activationMode: C,
          animateSelection: R,
          dividerBefore: k,
        } = e,
        T = void 0 !== _ && _,
        I = void 0 !== j && j,
        P = void 0 === w ? "segmented" : w,
        D = void 0 === C ? "automatic" : C,
        F = (0, d.useId)(),
        U = b[P],
        E = "inset" === P || "choice" === P,
        L = (0, m.Zj)(!E && "icon" !== P && "text-secondary" === U.unselectedTextClassName && "1244723012"),
        q = void 0 !== R && R && ("segmentedPill" === P || "segmentedPillMuted" === P),
        B = q ? "text-default font-medium" : U.selectedClassName
      if (
        s[0] !== D ||
        s[1] !== q ||
        s[2] !== N ||
        s[3] !== M ||
        s[4] !== y ||
        s[5] !== k ||
        s[6] !== T ||
        s[7] !== h ||
        s[8] !== p ||
        s[9] !== x ||
        s[10] !== U.closeButtonClassName ||
        s[11] !== U.itemClassName ||
        s[12] !== U.listClassName ||
        s[13] !== U.segmentedEdges ||
        s[14] !== U.selectionIndicator ||
        s[15] !== U.tabButtonClassName ||
        s[16] !== U.textSizeClassName ||
        s[17] !== U.unselectedClassName ||
        s[18] !== U.unselectedTextClassName ||
        s[19] !== I ||
        s[20] !== B ||
        s[21] !== o ||
        s[22] !== F ||
        s[23] !== S ||
        s[24] !== i ||
        s[25] !== L ||
        s[26] !== E ||
        s[27] !== P
      ) {
        let e,
          n,
          d = (0, r.A)(L ? "text-tertiary" : U.unselectedTextClassName, U.unselectedClassName),
          m = E ? f.$ : "button",
          _ = T && "w-full",
          j = I && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(s[29] !== y || s[30] !== U.listClassName || s[31] !== _ || s[32] !== j
          ? ((e = (0, r.A)(U.listClassName, _, j, y)),
            (s[29] = y),
            (s[30] = U.listClassName),
            (s[31] = _),
            (s[32] = j),
            (s[33] = e))
          : (e = s[33]),
          s[34] !== D || s[35] !== h || s[36] !== I || s[37] !== i
            ? ((n = (e) => {
                let t
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let s = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  a = s.findIndex((t) => t === e.target)
                if (a < 0 || 0 === s.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let n = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? s.length - 1
                      : (a + (e.key === (n ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + s.length) % s.length),
                  s[t]?.focus(),
                  I && s[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let l = i[t]
                null != l && "automatic" === D && h(l.key, e.timeStamp)
              }),
              (s[34] = D),
              (s[35] = h),
              (s[36] = I),
              (s[37] = i),
              (s[38] = n))
            : (n = s[38]),
          (t = (0, a.jsx)("div", {
            ref: S,
            role: "tablist",
            tabIndex: -1,
            "aria-label": N,
            "aria-labelledby": M,
            className: e,
            onWheel: I ? v : void 0,
            onKeyDown: n,
            children: i.map((e, t) => {
              let s,
                n,
                f = e.key === o,
                y = f ? B : d,
                _ = 0 === t,
                j = t === i.length - 1,
                b = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": f,
                  tabIndex: f ? 0 : -1,
                  onPointerEnter: null == x ? void 0 : () => x(e.key),
                  onClick: (t) => {
                    ;((f && "manual" !== D) || h(e.key, t.timeStamp), p?.(e.key))
                  },
                }
              return (
                "inset" === P
                  ? ((s = f ? "segmentedInsetSelected" : "ghost"), (n = "compact"))
                  : "choice" === P && ((s = f ? "choiceSelected" : "outlineGhost"), (n = "dialogAction")),
                (0, a.jsxs)(
                  "div",
                  {
                    className: (0, r.A)(
                      "relative flex min-w-0 items-center",
                      U.itemClassName,
                      T && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      _ || e.key !== k
                        ? null
                        : (0, a.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === P
                        ? (0, a.jsx)(g, { ...b, icon: e.icon, size: "large", children: e.name })
                        : (0, a.jsxs)(m, {
                            ...b,
                            className: (0, r.A)(
                              T && "min-w-0 flex-1 justify-center",
                              q && "relative isolate",
                              !E && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                U.textSizeClassName ?? "text-sm",
                                U.tabButtonClassName,
                                I && "ring-inset",
                                U.segmentedEdges && _ && "rounded-l-md",
                                U.segmentedEdges && j && "rounded-r-md",
                                "browse" === P && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", f && "ring-1 ring-border-strong"]
                                  : y,
                              ],
                            ),
                            color: s,
                            radius: "choice" === P ? "full" : void 0,
                            size: n,
                            children: [
                              q && f ? (0, a.jsx)(A, { layoutId: F }) : null,
                              null != e.icon
                                ? (0, a.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              T ? (0, a.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === U.selectionIndicator && f
                        ? (0, a.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, a.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, r.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              U.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, a.jsx)(c.bF, {
                              "aria-hidden": !1,
                              asset16: l.Q,
                              legacyIcon: u.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      U.segmentedEdges && !j
                        ? (0, a.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (s[0] = D),
          (s[1] = q),
          (s[2] = N),
          (s[3] = M),
          (s[4] = y),
          (s[5] = k),
          (s[6] = T),
          (s[7] = h),
          (s[8] = p),
          (s[9] = x),
          (s[10] = U.closeButtonClassName),
          (s[11] = U.itemClassName),
          (s[12] = U.listClassName),
          (s[13] = U.segmentedEdges),
          (s[14] = U.selectionIndicator),
          (s[15] = U.tabButtonClassName),
          (s[16] = U.textSizeClassName),
          (s[17] = U.unselectedClassName),
          (s[18] = U.unselectedTextClassName),
          (s[19] = I),
          (s[20] = B),
          (s[21] = o),
          (s[22] = F),
          (s[23] = S),
          (s[24] = i),
          (s[25] = L),
          (s[26] = E),
          (s[27] = P),
          (s[28] = t))
      } else t = s[28]
      return t
    }
    function v(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function A(e) {
      let t,
        s,
        l = (0, n.c)(5),
        { layoutId: r } = e,
        d = 0.25 * !(0, i.I)()
      return (
        l[0] !== d ? ((t = { type: "spring", duration: d, bounce: 0 }), (l[0] = d), (l[1] = t)) : (t = l[1]),
        l[2] !== r || l[3] !== t
          ? ((s = (0, a.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: r,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (l[2] = r),
            (l[3] = t),
            (l[4] = s))
          : (s = l[4]),
        s
      )
    }
  },
  GlQn(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      l = s("oyxz")
    function r(e) {
      let t,
        s = (0, n.c)(6),
        { reason: r, field: i, part: o, showLabel: d, endWithPeriod: c } = e,
        u = void 0 === d || d,
        m = void 0 !== c && c,
        f = r ?? "unknown"
      return (
        "invalid_url" === r &&
          ["image_url", "image_link", "additional_image_urls", "additional_image_link"].includes(i.split(".")[0]) &&
          (f = "unsupported_image_url"),
        "currency_mismatch" === r &&
          ["price", "price_currency", "currency", "shop_currency"].includes(i) &&
          (f = "processing_currency_mismatch"),
        "type" === r &&
          (["title", "name", "brand", "description", "seller_name"].includes(i)
            ? (f = "text_type")
            : ["price", "sale_price", "shipping_price"].includes(i)
              ? (f = "price_type")
              : "item_id" === i && (f = "identifier_type")),
        "unsupported_value" === r && "availability" === i && (f = "gmc_availability"),
        "too_long" === r &&
          ["title", "description"].includes(i) &&
          (f = "title" === i ? "title_too_long" : "description_too_long"),
        s[0] !== m || s[1] !== i || s[2] !== f || s[3] !== o || s[4] !== u
          ? ((t =
              "cause" === o
                ? (0, a.jsx)(l.A, {
                    id: "businessProfiles.activity.examples.reasonCausePunctuation",
                    defaultMessage:
                      "<strong>Why:</strong> {reason, select, unverified_product_domain {The domain in {field} was not verified for this profile when this row was checked} product_domain_outside_profile {The domain in {field} was outside this profile's allowed domains when this row was checked} invalid_landing_page_url {{field} is not a valid product page URL} invalid_url {{field} is not a valid URL} unsupported_image_url {{field} contains an invalid or unsupported image URL} missing {A required value for {field} is missing} none {{field} has no value} text_type {{field} must contain text} price_type {{field} has the wrong data type for a price} identifier_type {{field} has the wrong data type for a product identifier} type {{field} has the wrong data type} gmc_availability {{field} is not a supported Google Merchant Center availability value} unsupported_value {{field} contains a value that is not supported} invalid_condition {{field} is not a supported product condition} invalid_price {{field} is not a valid price} invalid_availability {{field} is not a supported availability value} invalid_bool {{field} is not a valid true/false value} expected_price_with_currency {{field} is missing a valid amount or currency} expected_google_iso_8601 {{field} is not a supported date and time} expected_iso_8601 {{field} contains an invalid date or time} expected_start_end_range {{field} must contain both a start and an end date} start_must_precede_end {The start date in {field} is not earlier than the end date} requires_sale_price {{field} was supplied without a sale_price} required_for_preorder_or_backorder {{field} is required for products on preorder or backorder} requires_gtin_or_mpn {A product identifier is required because identifier_exists is not false} invalid_dimensions {{field} does not match the required dimensions structure} title_too_long {{field} exceeds the 150-character limit} description_too_long {{field} exceeds the 5,000-character limit} too_long {{field} exceeds its character limit} invalid_amount {{field} contains an invalid price amount} non_positive_amount {{field} contains a price amount that is zero or negative} currency_mismatch {{field} uses a different currency from the regular price} must_be_less_than_price {{field} is equal to or higher than the regular price} conflicting_alias {Multiple fields provide conflicting values for {field}} conflicting_target_country {target_country is not included in target_countries} userinfo_not_allowed {{field} contains a URL with a username or password} invalid_country {{field} contains an invalid country code} invalid_country_list {{field} does not contain a supported list of country codes} unsupported_country {Product targeting does not match the countries allowed for this feed} processing_currency_mismatch {{field} uses a currency that is not allowed for this feed} no_eligible_products {No eligible products could be read from this row} skip_file {This product sample could not be processed} invalid {{field} failed validation, but no more specific reason was saved} other {No specific validation reason was saved for {field}}}{endWithPeriod, select, yes {. } other {}}",
                    values: {
                      endWithPeriod: m ? "yes" : "no",
                      reason: f,
                      field: i,
                      strong: (e) => (u ? (0, a.jsx)("strong", { children: e }, "strong") : null),
                    },
                  })
                : (0, a.jsx)(l.A, {
                    id: "businessProfiles.activity.examples.reasonAction",
                    defaultMessage:
                      '<strong>How to fix:</strong> {reason, select, unverified_product_domain {Review the selected profile and its website. If they match your product URLs, contact support to resolve domain verification before trying again} product_domain_outside_profile {Use product URLs belonging to the selected profile, or upload to the matching profile} invalid_landing_page_url {Use a complete HTTP or HTTPS product page URL without credentials, spaces or invalid characters} invalid_url {Use a complete URL such as https://example.com/products/item. Replace spaces with %20} unsupported_image_url {Use a direct HTTP or HTTPS image URL, such as https://example.com/images/item%201.jpg. Replace spaces with %20} missing {Supply a value for {field}} none {Supply a non-empty value for {field}} text_type {Use text for {field}. In JSONL, put the text in a quoted string instead of an object or array} price_type {Use an amount with a currency, such as 12.99 USD. In JSONL, write it as a quoted string} identifier_type {Use a product identifier such as SKU-123. In JSONL, put a text identifier in a quoted string} type {Use the data type specified for {field} in the file requirements} gmc_availability {Use in_stock, out_of_stock, preorder or backorder for Google Merchant Center feeds} unsupported_value {Choose one of the allowed values for {field} in the file requirements} invalid_condition {Use new, refurbished or used} invalid_price {Enter an amount and currency, such as 12.99 USD} invalid_availability {Use in_stock, out_of_stock, pre_order, backorder or unknown} invalid_bool {Use true or false} expected_price_with_currency {Enter an amount and currency, such as 12.99 USD} expected_google_iso_8601 {Use an ISO 8601 date and time with a timezone, such as 2026-10-06T12:00:00Z} expected_iso_8601 {Use a valid ISO 8601 date and time, such as 2026-10-06T12:00:00Z} expected_start_end_range {Separate the start and end with a slash, such as 2026-10-06T12:00:00Z/2026-10-07T12:00:00Z} start_must_precede_end {Set the end date later than the start date} requires_sale_price {Add a valid sale_price, or remove sale_price_effective_date} required_for_preorder_or_backorder {Add availability_date with the expected availability date, such as 2026-10-06T12:00:00Z} requires_gtin_or_mpn {Supply a valid gtin or mpn. Set identifier_exists to false only if the product has neither identifier} invalid_dimensions {Supply at least two positive numeric dimensions: length, width or height. Set unit to in, cm, ft, m or mm, and remove extra keys} title_too_long {Shorten title to 150 characters or fewer} description_too_long {Shorten description to 5,000 characters or fewer} too_long {Shorten {field} to the character limit in the field requirements} invalid_amount {Enter a finite numeric amount, such as 12.99} non_positive_amount {Enter a price amount greater than zero} currency_mismatch {Use the same currency for the sale price and regular price} must_be_less_than_price {Set the sale price below the regular price} conflicting_alias {Keep one field name, or give the alias fields the same value} conflicting_target_country {Set target_country to a country listed in target_countries, or remove target_country to use the declared list. Use only countries allowed by this feed} userinfo_not_allowed {Remove the username and password from the URL} invalid_country {Use an uppercase two-letter country code supported by this feed, such as CA or GB. Use GB, not UK, for the United Kingdom} invalid_country_list {Use an array such as ["CA", "GB"] in JSONL, or CA,GB in a quoted CSV cell. Use only country codes supported by this feed} unsupported_country {Check target_countries and any overriding target_country against this feed\u2019s allowed countries. Use the intended market, for example CA for Canada. If they already match, ask OpenAI to check the feed configuration} processing_currency_mismatch {Use a currency allowed by this feed. If you change currencies, convert the amount too. If the source currency is correct, ask OpenAI to verify the feed configuration} no_eligible_products {Check the required fields and format. If they are correct, contact OpenAI to check the feed configuration} skip_file {Check the file format and required fields, then validate again} other {Check {field} against the linked file requirements. If its value is already valid, share the available feed details with OpenAI support}}',
                    values: {
                      reason: f,
                      field: i,
                      strong: (e) => (u ? (0, a.jsx)("strong", { children: e }, "strong") : null),
                    },
                  })),
            (s[0] = m),
            (s[1] = i),
            (s[2] = f),
            (s[3] = o),
            (s[4] = u),
            (s[5] = t))
          : (t = s[5]),
        t
      )
    }
    s.d(
      t,
      {},
      {
        P: r,
        s: function (e) {
          let t,
            s = (0, n.c)(2)
          return (
            s[0] !== e
              ? ((t = (0, a.jsxs)("ul", {
                  className: "flex list-disc flex-col gap-2 ps-5 text-sm text-secondary select-text",
                  children: [
                    (0, a.jsx)("li", { children: (0, a.jsx)(r, { ...e, part: "cause" }) }),
                    (0, a.jsx)("li", { children: (0, a.jsx)(r, { ...e, part: "action" }) }),
                  ],
                })),
                (s[0] = e),
                (s[1] = t))
              : (t = s[1]),
            t
          )
        },
      },
    )
  },
  Qrjj(e, t, s) {
    s.d(
      t,
      {},
      {
        D: [
          "AF",
          "AL",
          "DZ",
          "AS",
          "AD",
          "AO",
          "AI",
          "AQ",
          "AG",
          "AR",
          "AM",
          "AW",
          "AU",
          "AT",
          "AZ",
          "BS",
          "BH",
          "BD",
          "BB",
          "BY",
          "BE",
          "BZ",
          "BJ",
          "BM",
          "BT",
          "BO",
          "BQ",
          "BA",
          "BW",
          "BV",
          "BR",
          "IO",
          "BN",
          "BG",
          "BF",
          "BI",
          "CV",
          "KH",
          "CM",
          "CA",
          "KY",
          "CF",
          "TD",
          "CL",
          "CN",
          "CX",
          "CC",
          "CO",
          "KM",
          "CG",
          "CD",
          "CK",
          "CR",
          "HR",
          "CU",
          "CW",
          "CY",
          "CZ",
          "CI",
          "DK",
          "DJ",
          "DM",
          "DO",
          "EC",
          "EG",
          "SV",
          "GQ",
          "ER",
          "EE",
          "SZ",
          "ET",
          "FK",
          "FO",
          "FJ",
          "FI",
          "FR",
          "GF",
          "PF",
          "TF",
          "GA",
          "GM",
          "GE",
          "DE",
          "GH",
          "GI",
          "GR",
          "GL",
          "GD",
          "GP",
          "GU",
          "GT",
          "GG",
          "GN",
          "GW",
          "GY",
          "HT",
          "HM",
          "VA",
          "HN",
          "HK",
          "HU",
          "IS",
          "IN",
          "ID",
          "IR",
          "IQ",
          "IE",
          "IM",
          "IL",
          "IT",
          "JM",
          "JP",
          "JE",
          "JO",
          "KZ",
          "KE",
          "KI",
          "KP",
          "KR",
          "KW",
          "KG",
          "LA",
          "LV",
          "LB",
          "LS",
          "LR",
          "LY",
          "LI",
          "LT",
          "LU",
          "MO",
          "MG",
          "MW",
          "MY",
          "MV",
          "ML",
          "MT",
          "MH",
          "MQ",
          "MR",
          "MU",
          "YT",
          "MX",
          "FM",
          "MD",
          "MC",
          "MN",
          "ME",
          "MS",
          "MA",
          "MZ",
          "MM",
          "NA",
          "NR",
          "NP",
          "NL",
          "NC",
          "NZ",
          "NI",
          "NE",
          "NG",
          "NU",
          "NF",
          "MK",
          "MP",
          "NO",
          "OM",
          "PK",
          "PW",
          "PS",
          "PA",
          "PG",
          "PY",
          "PE",
          "PH",
          "PN",
          "PL",
          "PT",
          "PR",
          "QA",
          "RO",
          "RU",
          "RW",
          "RE",
          "BL",
          "SH",
          "KN",
          "LC",
          "MF",
          "PM",
          "VC",
          "WS",
          "SM",
          "ST",
          "SA",
          "SN",
          "RS",
          "SC",
          "SL",
          "SG",
          "SX",
          "SK",
          "SI",
          "SB",
          "SO",
          "ZA",
          "GS",
          "SS",
          "ES",
          "LK",
          "SD",
          "SR",
          "SJ",
          "SE",
          "CH",
          "SY",
          "TW",
          "TJ",
          "TZ",
          "TH",
          "TL",
          "TG",
          "TK",
          "TO",
          "TT",
          "TN",
          "TM",
          "TC",
          "TV",
          "TR",
          "UG",
          "UA",
          "AE",
          "GB",
          "US",
          "UM",
          "UY",
          "UZ",
          "VU",
          "VE",
          "VN",
          "VG",
          "VI",
          "WF",
          "EH",
          "YE",
          "ZM",
          "ZW",
          "AX",
        ],
        I: [
          "AED",
          "AFN",
          "ALL",
          "AMD",
          "AOA",
          "ARS",
          "AUD",
          "AWG",
          "AZN",
          "BAM",
          "BBD",
          "BDT",
          "BHD",
          "BIF",
          "BMD",
          "BND",
          "BOB",
          "BRL",
          "BSD",
          "BTN",
          "BWP",
          "BYN",
          "BZD",
          "CAD",
          "CDF",
          "CHF",
          "CLP",
          "CNY",
          "COP",
          "CRC",
          "CUP",
          "CVE",
          "CZK",
          "DJF",
          "DKK",
          "DOP",
          "DZD",
          "EGP",
          "ERN",
          "ETB",
          "EUR",
          "FJD",
          "FKP",
          "GBP",
          "GEL",
          "GHS",
          "GIP",
          "GMD",
          "GNF",
          "GTQ",
          "GYD",
          "HKD",
          "HNL",
          "HTG",
          "HUF",
          "IDR",
          "ILS",
          "INR",
          "IQD",
          "IRR",
          "ISK",
          "JMD",
          "JOD",
          "JPY",
          "KES",
          "KGS",
          "KHR",
          "KMF",
          "KPW",
          "KRW",
          "KWD",
          "KYD",
          "KZT",
          "LAK",
          "LBP",
          "LKR",
          "LRD",
          "LSL",
          "LYD",
          "MAD",
          "MDL",
          "MGA",
          "MKD",
          "MMK",
          "MNT",
          "MOP",
          "MRU",
          "MUR",
          "MVR",
          "MWK",
          "MXN",
          "MYR",
          "MZN",
          "NAD",
          "NGN",
          "NIO",
          "NOK",
          "NPR",
          "NZD",
          "OMR",
          "PAB",
          "PEN",
          "PGK",
          "PHP",
          "PKR",
          "PLN",
          "PYG",
          "QAR",
          "RON",
          "RSD",
          "RUB",
          "RWF",
          "SAR",
          "SBD",
          "SCR",
          "SDG",
          "SEK",
          "SGD",
          "SHP",
          "SLE",
          "SOS",
          "SRD",
          "SSP",
          "STN",
          "SVC",
          "SYP",
          "SZL",
          "THB",
          "TJS",
          "TMT",
          "TND",
          "TOP",
          "TRY",
          "TTD",
          "TWD",
          "TZS",
          "UAH",
          "UGX",
          "USD",
          "UYU",
          "UZS",
          "VED",
          "VES",
          "VND",
          "VUV",
          "WST",
          "XAF",
          "XCD",
          "XCG",
          "XOF",
          "XPF",
          "YER",
          "ZAR",
          "ZMW",
          "ZWG",
        ],
      },
    )
  },
  NoEg(e, t, s) {
    s.d(t, { FeedValidationError: () => w, R: () => j, FeedValidationReport: () => _ })
    var a = s("ABep"),
      n = s("QosV"),
      l = s("oyxz"),
      r = s("ASxG"),
      i = s("MM0V"),
      o = s("ZtSy"),
      d = s("GlQn"),
      c = s("eShZ")
    let u = r.Ikc({
      field: r.YjP().optional(),
      issue: r.YjP().optional(),
      item_countries: r.YOg(r.YjP()).optional(),
      supported_countries: r.YOg(r.YjP()).optional(),
      kept_countries: r.YOg(r.YjP()).optional(),
      excluded_countries: r.YOg(r.YjP()).optional(),
      actual_currency: r.YjP().nullable().optional(),
      expected_currency: r.YjP().optional(),
      expected_currencies: r.YOg(r.YjP()).optional(),
    })
    function m(e) {
      let t,
        s = (0, n.c)(4),
        { detail: r } = e
      if (s[0] !== r) {
        t = Symbol.for("react.early_return_sentinel")
        e: {
          let e = u.safeParse(r)
          if (!e.success) {
            t = null
            break e
          }
          let n = e.data
          if (null != n.item_countries && null != n.supported_countries) {
            t = (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validation.countryComparison",
                defaultMessage: "Product countries: {actual}. Countries allowed for this feed: {expected}",
                values: { actual: n.item_countries.join(", "), expected: n.supported_countries.join(", ") },
              }),
            })
            break e
          }
          let i = n.expected_currencies ?? (null == n.expected_currency ? [] : [n.expected_currency])
          if (null != n.actual_currency && i.length > 0) {
            let e,
              r = { actual: n.actual_currency, expected: i.join(", ") }
            ;(s[2] !== r
              ? ((e = (0, a.jsx)("p", {
                  className: "text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "merchantSettings.validation.currencyComparison",
                    defaultMessage: "Product currency: {actual}. Currencies allowed for this feed: {expected}",
                    values: r,
                  }),
                })),
                (s[2] = r),
                (s[3] = e))
              : (e = s[3]),
              (t = e))
            break e
          }
        }
        ;((s[0] = r), (s[1] = t))
      } else t = s[1]
      return t !== Symbol.for("react.early_return_sentinel") ? t : null
    }
    function f(e) {
      let t,
        s,
        r,
        o,
        d,
        c,
        u = (0, n.c)(21),
        { report: m } = e,
        f = m.eligible_sampled_rows ?? 0,
        g = m.filtered_sampled_rows ?? 0,
        p = m.filter_counts?.defaulted_target_country ?? 0
      return (
        u[0] !== m.supported_countries
          ? ((t = m.supported_countries.join(", ")), (u[0] = m.supported_countries), (u[1] = t))
          : (t = u[1]),
        u[2] !== t
          ? ((s = (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validation.configuredMarkets",
                defaultMessage: "Countries allowed for this feed: {countries}",
                values: { countries: t },
              }),
            })),
            (u[2] = t),
            (u[3] = s))
          : (s = u[3]),
        u[4] !== p || u[5] !== m.supported_countries[0] || u[6] !== m.supported_countries.length
          ? ((r =
              p > 0 &&
              1 === m.supported_countries.length &&
              (0, a.jsx)("p", {
                className: "text-secondary",
                children: (0, a.jsx)(l.A, {
                  id: "merchantSettings.validation.defaultedTargetCountry",
                  defaultMessage:
                    "Used {country} for {count, plural, one {# sampled product} other {# sampled products}} missing target_countries.",
                  values: { count: p, country: m.supported_countries[0] },
                }),
              })),
            (u[4] = p),
            (u[5] = m.supported_countries[0]),
            (u[6] = m.supported_countries.length),
            (u[7] = r))
          : (r = u[7]),
        u[8] !== m.filter_counts?.unsupported_country || u[9] !== m.legacy_country_parsing
          ? ((o =
              m.legacy_country_parsing &&
              (m.filter_counts?.unsupported_country ?? 0) > 0 &&
              (0, a.jsx)(i.l, {
                variant: "callout",
                layout: "vertical",
                type: "caution",
                content: (0, a.jsx)(l.A, {
                  id: "merchantSettings.validation.legacyCountryAction",
                  defaultMessage:
                    "OpenAI needs to check this feed\u2019s country configuration. If your product countries are correct, contact support before changing your file.",
                }),
              })),
            (u[8] = m.filter_counts?.unsupported_country),
            (u[9] = m.legacy_country_parsing),
            (u[10] = o))
          : (o = u[10]),
        u[11] !== f || u[12] !== g || u[13] !== m.filter_counts?.partial_country_match || u[14] !== m.filter_samples
          ? ((d =
              f > 0 &&
              (g > 0 || (m.filter_counts?.partial_country_match ?? 0) > 0) &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  g > 0 &&
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(l.A, {
                        id: "merchantSettings.validation.partialFilterAction",
                        defaultMessage:
                          "Some sampled products are outside this feed\u2019s allowed countries or currencies. Check these examples if the exclusions are unexpected",
                      }),
                    }),
                  (0, a.jsx)("ul", { className: "flex flex-col gap-3", children: m.filter_samples?.map(h) }),
                ],
              })),
            (u[11] = f),
            (u[12] = g),
            (u[13] = m.filter_counts?.partial_country_match),
            (u[14] = m.filter_samples),
            (u[15] = d))
          : (d = u[15]),
        u[16] !== s || u[17] !== r || u[18] !== o || u[19] !== d
          ? ((c = (0, a.jsxs)("section", { className: "flex flex-col gap-3", children: [s, r, o, d] })),
            (u[16] = s),
            (u[17] = r),
            (u[18] = o),
            (u[19] = d),
            (u[20] = c))
          : (c = u[20]),
        c
      )
    }
    function h(e, t) {
      if ("partial_country_match" === e.error_type) {
        let t = u.safeParse(e.details?.[0])
        if (t.success && t.data.kept_countries?.length && t.data.excluded_countries?.length)
          return (0, a.jsx)(
            "li",
            {
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validation.partialCountrySample",
                defaultMessage: "Sample {number} can continue in {kept}. It will be excluded from {excluded}.",
                values: {
                  number: e.row_index + 1,
                  kept: t.data.kept_countries.join(", "),
                  excluded: t.data.excluded_countries.join(", "),
                },
              }),
            },
            e.row_index,
          )
      }
      return (0, a.jsxs)(
        "li",
        {
          children: [
            (0, a.jsx)("p", {
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validation.filteredSample",
                defaultMessage: "Excluded sample {number}",
                values: { number: e.row_index + 1 },
              }),
            }),
            e.details?.map((t, s) => {
              let n = u.safeParse(t)
              return (0, a.jsxs)(
                "div",
                {
                  children: [
                    (0, a.jsx)(d.s, {
                      field: n.success ? (n.data.field ?? "product") : "product",
                      reason: e.error_type,
                    }),
                    (0, a.jsx)(m, { detail: t }),
                  ],
                },
                s,
              )
            }),
          ],
        },
        `${e.row_index}:${t}`,
      )
    }
    var g = s("iSMw"),
      p = s("U5No")
    let x = " [Validation diagnostics truncated to fit the report size limit.]",
      y = r.Ikc({
        field: r.YjP().optional(),
        issue: r.YjP().optional(),
        loc: r.KCZ([r.YjP(), r.YOg(r.KCZ([r.YjP(), r.aig()]))]).optional(),
        type: r.YjP().optional(),
      })
    function _(e) {
      let t,
        s,
        r,
        d,
        c,
        u,
        m,
        h,
        g,
        x,
        y,
        _,
        b,
        S,
        v = (0, n.c)(37),
        { report: A, businessProfileId: w } = e,
        N = 0 === A.sampled_count,
        M = A.invalid_count > 0
      v[0] !== w || v[1] !== A ? ((t = (0, p.p)(A, w)), (v[0] = w), (v[1] = A), (v[2] = t)) : (t = v[2])
      let C = t
      v[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            invalid: "error",
            empty: "caution",
            incomplete: "error",
            ineligible: "error",
            filtered: "caution",
            valid: "success",
          }),
          (v[3] = s))
        : (s = v[3])
      let R = s[C],
        k = "valid" === C || "filtered" === C ? "status" : "alert"
      return (
        v[4] !== A.processing?.filter_counts?.partial_country_match || v[5] !== C
          ? ((r =
              "filtered" === C && (A.processing?.filter_counts?.partial_country_match ?? 0) > 0
                ? (0, a.jsx)(l.A, {
                    id: "merchantSettings.validationReport.partialCountryTitle",
                    defaultMessage: "Some target countries will be excluded",
                  })
                : (0, a.jsx)(l.A, {
                    id: "merchantSettings.validationReport.status",
                    defaultMessage:
                      "{state, select, invalid {Validation errors} empty {No products could be checked} incomplete {Validation is incomplete} ineligible {No sampled products can be accepted} filtered {Some products will be excluded} other {No errors found in the sample}}",
                    values: { state: C },
                  })),
            (v[4] = A.processing?.filter_counts?.partial_country_match),
            (v[5] = C),
            (v[6] = r))
          : (r = v[6]),
        v[7] !== A.invalid_count || v[8] !== A.sampled_count
          ? ((d = (0, a.jsx)("p", {
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.checkedRows",
                defaultMessage: "Checked {sampled} sample rows; {invalid} rows have errors",
                values: { sampled: A.sampled_count, invalid: A.invalid_count },
              }),
            })),
            (v[7] = A.invalid_count),
            (v[8] = A.sampled_count),
            (v[9] = d))
          : (d = v[9]),
        v[10] !== N || v[11] !== M
          ? ((c =
              (M || N) &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(l.A, {
                  id: "merchantSettings.validationReport.nextStep",
                  defaultMessage:
                    "{empty, select, yes {Check that the feed contains product records, then validate again before submitting} other {Resolve the reported issues, then validate again before submitting}}",
                  values: { empty: N ? "yes" : "no" },
                }),
              })),
            (v[10] = N),
            (v[11] = M),
            (v[12] = c))
          : (c = v[12]),
        v[13] !== C
          ? ((u =
              "incomplete" === C &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(l.A, {
                  id: "merchantSettings.validationReport.incompleteEligibility",
                  defaultMessage:
                    "The required feed checks did not complete. Validate again before submitting. If this continues, contact OpenAI support",
                }),
              })),
            (v[13] = C),
            (v[14] = u))
          : (u = v[14]),
        v[15] !== C
          ? ((m =
              "ineligible" === C &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(l.A, {
                  id: "merchantSettings.validationReport.noEligibleProducts",
                  defaultMessage:
                    "Check the sample errors and this feed\u2019s country and currency settings, then validate again. If your product values already match, contact OpenAI support",
                }),
              })),
            (v[15] = C),
            (v[16] = m))
          : (m = v[16]),
        v[17] !== d || v[18] !== c || v[19] !== u || v[20] !== m
          ? ((h = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [d, c, u, m] })),
            (v[17] = d),
            (v[18] = c),
            (v[19] = u),
            (v[20] = m),
            (v[21] = h))
          : (h = v[21]),
        v[22] !== h || v[23] !== R || v[24] !== k || v[25] !== r
          ? ((g = (0, a.jsx)(i.l, { variant: "callout", layout: "vertical", type: R, role: k, title: r, content: h })),
            (v[22] = h),
            (v[23] = R),
            (v[24] = k),
            (v[25] = r),
            (v[26] = g))
          : (g = v[26]),
        v[27] !== A.processing
          ? ((x = null != A.processing && (0, a.jsx)(f, { report: A.processing })), (v[27] = A.processing), (v[28] = x))
          : (x = v[28]),
        v[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.sampleScope",
                defaultMessage:
                  "Only a sample was checked. Processing the full feed and downloading images can reveal additional issues.",
              }),
            })),
            (v[29] = y))
          : (y = v[29]),
        v[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(o.G, {
              href: "https://developers.openai.com/commerce/specs/file-upload/products",
              initiator: "open_in_browser_bridge",
              underline: "always",
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.feedFormats.specifications",
                defaultMessage: "Feed specifications",
              }),
            })),
            (v[30] = _))
          : (_ = v[30]),
        v[31] !== A.error_samples
          ? ((b =
              A.error_samples.length > 0 &&
              (0, a.jsxs)("section", {
                className: "flex flex-col gap-3",
                children: [
                  (0, a.jsx)("h3", {
                    className: "font-semibold",
                    children: (0, a.jsx)(l.A, {
                      id: "merchantSettings.validationReport.examples",
                      defaultMessage: "What to fix",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(l.A, {
                      id: "merchantSettings.validationReport.sampleNumbers",
                      defaultMessage:
                        "Sample numbers are not source line numbers. Examples may not cover every error in the feed.",
                    }),
                  }),
                  (0, a.jsx)(j, { samples: A.error_samples }),
                ],
              })),
            (v[31] = A.error_samples),
            (v[32] = b))
          : (b = v[32]),
        v[33] !== g || v[34] !== x || v[35] !== b
          ? ((S = (0, a.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4 text-sm select-text",
              children: [g, x, y, _, b],
            })),
            (v[33] = g),
            (v[34] = x),
            (v[35] = b),
            (v[36] = S))
          : (S = v[36]),
        S
      )
    }
    function j(e) {
      let t,
        s,
        l = (0, n.c)(4),
        { samples: r } = e
      return (
        l[0] !== r ? ((t = r.map(b)), (l[0] = r), (l[1] = t)) : (t = l[1]),
        l[2] !== t
          ? ((s = (0, a.jsx)("ul", { className: "flex flex-col gap-3", children: t })), (l[2] = t), (l[3] = s))
          : (s = l[3]),
        s
      )
    }
    function b(e, t) {
      return (0, a.jsxs)(
        "li",
        {
          className: "flex flex-col gap-2 border-b border-subtle py-3",
          children: [
            (0, a.jsx)("p", {
              className: "font-medium break-words",
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.samplePosition",
                defaultMessage: "Sample {number}",
                values: { number: e.row_index + 1 },
              }),
            }),
            !e.details?.some(v) && (0, a.jsx)(A, { message: e.message }),
            e.details?.map(S),
          ],
        },
        `${e.row_index}:${t}`,
      )
    }
    function S(e, t) {
      let s = y.safeParse(e)
      if (!s.success) return null
      let { field: n, loc: l, issue: r, type: i } = s.data,
        o = n ?? (Array.isArray(l) ? l.join(".") : l)
      return o
        ? (0, a.jsxs)(
            "div",
            { children: [(0, a.jsx)(d.s, { field: o, reason: r ?? i ?? null }), (0, a.jsx)(m, { detail: e })] },
            t,
          )
        : null
    }
    function v(e) {
      let t = y.safeParse(e)
      if (!t.success) return !1
      let { field: s, loc: a } = t.data
      return !!(s ?? (Array.isArray(a) ? a.join(".") : a))
    }
    function A(e) {
      let t,
        s,
        r = (0, n.c)(4),
        { message: i } = e
      return (
        r[0] !== i
          ? ((t = i.endsWith(x)
              ? (0, a.jsx)(l.A, {
                  id: "merchantSettings.validationReport.truncatedSample",
                  defaultMessage: "{diagnostic} [Validation diagnostics truncated to fit the report size limit.]",
                  values: { diagnostic: i.slice(0, -x.length) },
                })
              : i),
            (r[0] = i),
            (r[1] = t))
          : (t = r[1]),
        r[2] !== t ? ((s = (0, a.jsx)("p", { children: t })), (r[2] = t), (r[3] = s)) : (s = r[3]),
        s
      )
    }
    function w(e) {
      let t,
        s,
        o,
        d,
        u,
        m,
        f = (0, n.c)(24),
        { error: h, source: p, renderDetail: x } = e,
        y = h instanceof c.FetchError ? h.status : null
      if (f[0] !== h || f[1] !== x || f[2] !== p || f[3] !== y) {
        let e = (function (e) {
          if (!(e instanceof c.FetchError) || 400 !== e.status) return null
          try {
            return r.Ikc({ detail: r.YjP() }).safeParse(JSON.parse(e.message)).data?.detail ?? null
          } catch {
            return null
          }
        })(h)
        if (h instanceof g.Hh) {
          let e
          ;(f[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.invalidDelimited",
                defaultMessage:
                  "The feed has mismatched columns or quotes. Give every record the same number of columns as the header. Quote cells containing delimiters or newlines, and double any quotes inside a quoted cell.",
              })),
              (f[5] = e))
            : (e = f[5]),
            (t = e))
        } else if (h instanceof g.pe) {
          let e
          ;(f[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.invalidEncoding",
                defaultMessage:
                  "The file is not valid UTF-8 text. Export it with UTF-8 encoding, gzip it, then validate again.",
              })),
              (f[6] = e))
            : (e = f[6]),
            (t = e))
        } else if (h instanceof g.Mz) {
          let e
          ;(f[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.invalidGzip",
                defaultMessage:
                  "This file is not gzip-compressed. Compress the CSV or JSONL file with gzip, then select it and validate again. Renaming a file to .gz does not compress it.",
              })),
              (f[7] = e))
            : (e = f[7]),
            (t = e))
        } else if (h instanceof g.tx) {
          let e
          ;(f[8] !== h.lineNumber
            ? ((e = (0, a.jsx)(l.A, {
                id: "merchantSettings.validationInvalidJsonlRecord",
                defaultMessage: "Invalid JSONL record on line {line}. Use one JSON object per line.",
                values: { line: h.lineNumber },
              })),
              (f[8] = h.lineNumber),
              (f[9] = e))
            : (e = f[9]),
            (t = e))
        } else if (null != e && ("hosted_url" !== p || "Invalid Business Profile feed request." !== e)) t = x?.(e) ?? e
        else if (null == y && "file" === p) {
          let e
          ;(f[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.fileUnavailable",
                defaultMessage:
                  "The file could not be read or validated. Check that it decompresses and contains product records, then retry.",
              })),
              (f[10] = e))
            : (e = f[10]),
            (t = e))
        } else if ("file" === p && (413 === y || 502 === y || 504 === y)) {
          let e
          ;(f[11] !== y
            ? ((e = (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.fileRequestAction",
                defaultMessage:
                  "{status, select, 413 {The validation sample exceeds the request size limit. Check record sizes against the feed specifications, then try again.} 504 {Validation timed out. Retry; if it keeps failing, contact OpenAI support with your feed ID.} other {The validation service could not complete the request. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
                values: { status: y },
              })),
              (f[11] = y),
              (f[12] = e))
            : (e = f[12]),
            (t = e))
        } else {
          let e,
            s = y ?? "unknown"
          ;(f[13] !== s
            ? ((e = (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.requestAction",
                defaultMessage:
                  "{status, select, 400 {Check the source format and request settings, then retry validation} 401 {Sign in again, then retry validation} 403 {This account does not have access to validate this merchant feed. Ask a workspace administrator to check your access.} 413 {This feed exceeds the hosted validation size limit. Download the feed and validate it using Manual upload.} 429 {Too many validation requests. Wait a moment, then try again.} 502 {The hosted feed could not be fetched or validated. Check that the URL and HTTP headers allow access, then retry.} 504 {Validation timed out. Retry, or download the feed and validate it using Manual upload.} other {Validation is unavailable or was interrupted. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
                values: { status: s },
              })),
              (f[13] = s),
              (f[14] = e))
            : (e = f[14]),
            (t = e))
        }
        ;((f[0] = h), (f[1] = x), (f[2] = p), (f[3] = y), (f[4] = t))
      } else t = f[4]
      let _ = h instanceof g.Mz || h instanceof g.tx || 400 === y ? "error" : "caution"
      return (
        f[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(l.A, {
              id: "merchantSettings.validationReport.incomplete",
              defaultMessage: "Validation could not complete",
            })),
            (f[15] = s))
          : (s = f[15]),
        f[16] !== t ? ((o = (0, a.jsx)("p", { children: t })), (f[16] = t), (f[17] = o)) : (o = f[17]),
        f[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)("p", {
              children: (0, a.jsx)(l.A, {
                id: "merchantSettings.validationReport.retryBeforeSubmit",
                defaultMessage: "Validate again before submitting; no passing result is available",
              }),
            })),
            (f[18] = d))
          : (d = f[18]),
        f[19] !== o
          ? ((u = (0, a.jsxs)("div", { className: "flex flex-col gap-2 select-text", children: [o, d] })),
            (f[19] = o),
            (f[20] = u))
          : (u = f[20]),
        f[21] !== _ || f[22] !== u
          ? ((m = (0, a.jsx)(i.l, {
              variant: "callout",
              type: _,
              layout: "vertical",
              role: "alert",
              title: s,
              content: u,
            })),
            (f[21] = _),
            (f[22] = u),
            (f[23] = m))
          : (m = f[23]),
        m
      )
    }
  },
  iSMw(e, t, s) {
    var a = s("ASxG")
    let n = a.g1P(a.YjP(), a.L5J())
    class l extends Error {
      lineNumber
      constructor(e) {
        ;(super("Invalid JSONL record"), (this.lineNumber = e))
      }
    }
    class r extends Error {
      constructor() {
        super("The CSV has mismatched columns or quotes")
      }
    }
    class i extends Error {
      constructor() {
        super("The file is not valid UTF-8 text")
      }
    }
    class o extends Error {
      constructor() {
        super("The file does not have a gzip header.")
      }
    }
    function d(e, t) {
      try {
        return n.parse(JSON.parse(e))
      } catch {
        throw new l(t)
      }
    }
    function c(e) {
      let t = [],
        s = new Set()
      return (
        e.forEach((e, a) => {
          let n = e.trim() || `column_${a}`,
            l = n,
            r = 1
          for (; s.has(l);) ((l = `${n}_${r}`), (r += 1))
          ;(s.add(l), t.push(l))
        }),
        t
      )
    }
    function u(e, t, s, a, n) {
      if (a <= t) return void e.push(s)
      let l = Math.floor(n() * a)
      l < t && (e[l] = s)
    }
    async function m(e) {
      if ("function" == typeof e.arrayBuffer) return new Uint8Array(await e.arrayBuffer())
      if ("u" > typeof FileReader)
        return new Promise((t, s) => {
          let a = new FileReader()
          ;((a.onerror = () => {
            s(Error("Unable to read the selected file."))
          }),
            (a.onload = () => {
              let { result: e } = a
              e instanceof ArrayBuffer
                ? t(new Uint8Array(e))
                : "string" == typeof e
                  ? t(new TextEncoder().encode(e))
                  : s(Error("Unable to read the selected file."))
            }),
            a.readAsArrayBuffer(e))
        })
      if ("function" == typeof e.text) {
        let t = await e.text()
        return new TextEncoder().encode(t)
      }
      throw Error("Unable to read the selected file in this browser.")
    }
    s.d(
      t,
      {},
      {
        Hh: r,
        Mz: o,
        gN: async function (e, t = 100, f = Math.random, h) {
          let g, p
          h?.throwIfAborted()
          let x = await m(e.slice(0, 2))
          if ((h?.throwIfAborted(), !(x.length >= 2 && 31 === x[0] && 139 === x[1]))) throw new o()
          let y = (p = e.name.toLowerCase()).endsWith(".jsonl.gz")
              ? "jsonl"
              : /\.(tsv|txt)\.gz$/.test(p)
                ? "tsv"
                : "csv",
            _ = "tsv" === y ? "	" : ","
          try {
            h?.throwIfAborted()
            let s = e
              .stream()
              .pipeThrough(new DecompressionStream("gzip"), { signal: h })
              .pipeThrough(new TextDecoderStream("utf-8", { fatal: !0 }), { signal: h })
            g =
              "jsonl" === y
                ? await (async function (e, t, s) {
                    let a = e.getReader(),
                      n = [],
                      l = "",
                      r = 0,
                      i = 0
                    try {
                      for (; r < 1e3;) {
                        let { value: e, done: o } = await a.read()
                        if (o) break
                        let c = (l += e).split(/\r?\n/)
                        for (let e of ((l = c.pop() ?? ""), c)) {
                          if (((i += 1), !e.trim())) continue
                          let a = d(e, i)
                          if (((r += 1), u(n, t, a, r, s), r >= 1e3)) break
                        }
                      }
                      if (l.trim() && r < 1e3) {
                        let e = d(l, i + 1)
                        ;((r += 1), u(n, t, e, r, s))
                      }
                    } finally {
                      await a.cancel()
                    }
                    if (0 === n.length) throw Error("Unable to parse any JSONL records from the selected file.")
                    return n
                  })(s, t, f)
                : await (async function (e, t, s, a) {
                    let n = e.getReader(),
                      l = [],
                      i = 0,
                      o = 0,
                      d = null,
                      m = [],
                      f = "",
                      h = !1,
                      g = !1,
                      p = !1,
                      x = !1,
                      y = () => {
                        let e = [...m, f]
                        if (((m = []), (f = ""), e.every((e) => "" === e))) return
                        if (!d) {
                          d = c(e)
                          return
                        }
                        if (e.length !== d.length) throw new r()
                        let a = {}
                        ;(d.forEach((t, s) => {
                          a[t] = e[s] ?? ""
                        }),
                          (i += 1),
                          (o += 1),
                          u(l, t, a, i, s))
                      },
                      _ = (e) => {
                        for (let t = 0; t < e.length; t += 1) {
                          let s = e[t]
                          if (g) {
                            if (((g = !1), '"' === s)) {
                              f += '"'
                              continue
                            }
                            ;((h = !1), (p = !0))
                          }
                          if (p) {
                            if (s !== a && (" " === s || "	" === s)) continue
                            if (s !== a && "\r" !== s && "\n" !== s) throw new r()
                            p = !1
                          }
                          if (!x || ((x = !1), "\n" !== s)) {
                            if (h) {
                              if ('"' === s) {
                                g = !0
                                continue
                              }
                              f += s
                              continue
                            }
                            if ('"' === s) {
                              if ("" !== f.trim()) throw new r()
                              ;((f = ""), (h = !0))
                              continue
                            }
                            if (s === a) {
                              ;(m.push(f), (f = ""))
                              continue
                            }
                            if ("\n" === s || "\r" === s) {
                              if (
                                ("\r" === s && "\n" === e[t + 1]
                                  ? (t += 1)
                                  : "\r" === s && t === e.length - 1 && (x = !0),
                                y(),
                                o >= 1e3)
                              )
                                return
                              continue
                            }
                            f += s
                          }
                        }
                      }
                    try {
                      for (;;) {
                        let { value: e, done: t } = await n.read()
                        if (t || (_(e), o >= 1e3)) break
                      }
                      if (o < 1e3 && h && !g) throw new r()
                    } finally {
                      await n.cancel()
                    }
                    if ((o < 1e3 && (f || m.length > 0) && y(), !d || 0 === l.length))
                      throw Error("Unable to parse any CSV records from the selected file.")
                    return l
                  })(s, t, f, _)
          } catch (u) {
            if (u instanceof l || u instanceof r) throw u
            h?.throwIfAborted()
            let o = await (async function (e) {
              let [t, { ungzip: a }] = await Promise.all([m(e), s.e(463014).then(s.bind(s, "TUql"))])
              var n = a(t)
              try {
                return new TextDecoder("utf-8", { fatal: !0 }).decode(n)
              } catch {
                throw new i()
              }
            })(e)
            ;(h?.throwIfAborted(),
              (g = (function (e, t, s) {
                if (e.length <= t) return e.slice()
                let a = e.slice(0, t)
                for (let n = t; n < e.length; n += 1) {
                  let l = Math.floor(s() * (n + 1))
                  l < t && (a[l] = e[n])
                }
                return a
              })(
                "jsonl" === y
                  ? (function (e) {
                      let t = []
                      for (let [s, a] of e.split(/\r?\n/).entries())
                        if (a.trim() && (t.push(d(a, s + 1)), t.length >= 1e3)) break
                      if (0 === t.length) throw Error("Unable to parse any JSONL records from the selected file.")
                      return t
                    })(o)
                  : await (async function (e, t) {
                      let l,
                        { parse: i } = await s.e(749940).then(s.bind(s, "otI6"))
                      try {
                        l = i(e, { delimiter: t, columns: c, skip_empty_lines: !0, bom: !0, trim: !0, to: 1e3 })
                      } catch {
                        throw new r()
                      }
                      if (!Array.isArray(l) || 0 === l.length)
                        throw Error("Unable to parse any CSV records from the selected file.")
                      return a.YOg(n).parse(l)
                    })(o, _),
                t,
                f,
              )))
          }
          return { sampleRows: g, fileFormatHint: y }
        },
        pe: i,
        tx: l,
      },
    )
  },
  U5No(e, t, s) {
    function a(e, t) {
      return e.invalid_count > 0
        ? "invalid"
        : 0 === e.sampled_count
          ? "empty"
          : null == e.processing || (null != t && e.processing.business_profile_id !== t)
            ? "incomplete"
            : (e.processing.eligible_sampled_rows ?? 0) === 0
              ? "ineligible"
              : (e.processing.filtered_sampled_rows ?? 0) > 0 ||
                  (e.processing.filter_counts?.partial_country_match ?? 0) > 0
                ? "filtered"
                : "valid"
    }
    s.d(
      t,
      {},
      {
        i: function (e, t) {
          let s = a(e, t)
          return "valid" === s || "filtered" === s
        },
        p: a,
      },
    )
  },
  jqO9(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      l = s("Wf1j"),
      r = s("oyxz"),
      i = s("fVs5"),
      o = s("G8V1"),
      d = s("Sm6l"),
      c = s("ZtSy")
    s.d(
      t,
      {},
      {
        MerchantAgreementForm: function (e) {
          let t,
            s,
            u,
            m,
            f,
            h,
            g,
            p,
            x,
            y,
            _ = (0, n.c)(28),
            { openTarget: j, submitButton: b, submitting: S, onSubmit: v, onBack: A } = e,
            w = (0, l.A)(),
            N = b ?? d.$
          ;(_[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (_[0] = t)) : (t = _[0]),
            _[1] !== j
              ? ((s = (0, a.jsx)("p", {
                  id: "merchant-acceptance-notice",
                  children: (0, a.jsx)(r.A, {
                    id: "merchantSettings.agreement.nextAcceptanceWithCommercePoliciesStatement",
                    defaultMessage:
                      "By clicking Next, you electronically accept the <terms>OpenAI Merchant Feed Terms of Service</terms> and <policies>OpenAI Commerce Policies</policies> on behalf of your organization, represent that you have the authority to bind your organization to those terms, and agree that this acceptance is legally binding.",
                    values: {
                      terms: (e) =>
                        (0, a.jsx)(c.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/merchant-feed-terms-of-service/",
                          initiator: "open_in_browser_bridge",
                          openTarget: j,
                          underline: "always",
                          children: e,
                        }),
                      policies: (e) =>
                        (0, a.jsx)(c.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/commerce-policies/",
                          initiator: "open_in_browser_bridge",
                          openTarget: j,
                          underline: "always",
                          children: e,
                        }),
                    },
                  }),
                })),
                (_[1] = j),
                (_[2] = s))
              : (s = _[2]),
            _[3] !== j
              ? ((u = (0, a.jsx)("p", {
                  children: (0, a.jsx)(r.A, {
                    id: "merchantSettings.agreement.privacyStatement",
                    defaultMessage:
                      "You further acknowledge OpenAI\u2019s <privacy>Privacy Policy</privacy> and consent to receive OpenAI Merchant Program updates. You may unsubscribe at any time.",
                    values: {
                      privacy: (e) =>
                        (0, a.jsx)(c.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/privacy-policy/",
                          initiator: "open_in_browser_bridge",
                          openTarget: j,
                          underline: "always",
                          children: e,
                        }),
                    },
                  }),
                })),
                (_[3] = j),
                (_[4] = u))
              : (u = _[4]),
            _[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, a.jsx)(r.A, { id: "merchantSettings.agreement.back", defaultMessage: "Back" })), (_[5] = m))
              : (m = _[5]),
            _[6] !== w ? ((f = (0, a.jsx)(i.Kq, { value: w, children: m })), (_[6] = w), (_[7] = f)) : (f = _[7]),
            _[8] !== w.locale || _[9] !== A || _[10] !== f
              ? ((h = (0, a.jsx)(d.$, {
                  type: "button",
                  color: "secondary",
                  size: "large",
                  radius: "full",
                  lang: w.locale,
                  onClick: A,
                  children: f,
                })),
                (_[8] = w.locale),
                (_[9] = A),
                (_[10] = f),
                (_[11] = h))
              : (h = _[11]))
          let M = null != b && S
          return (
            _[12] !== b || _[13] !== S
              ? ((g =
                  S && null == b
                    ? (0, a.jsx)(r.A, {
                        id: "merchantSettings.agreement.submitting",
                        defaultMessage: "Submitting\u2026",
                      })
                    : (0, a.jsx)(r.A, { id: "merchantSettings.agreement.next", defaultMessage: "Next" })),
                (_[12] = b),
                (_[13] = S),
                (_[14] = g))
              : (g = _[14]),
            _[15] !== N || _[16] !== S || _[17] !== M || _[18] !== g
              ? ((p = (0, a.jsx)(N, {
                  type: "submit",
                  color: "primary",
                  size: "large",
                  radius: "full",
                  disabled: S,
                  loading: M,
                  "aria-describedby": "merchant-acceptance-notice",
                  children: g,
                })),
                (_[15] = N),
                (_[16] = S),
                (_[17] = M),
                (_[18] = g),
                (_[19] = p))
              : (p = _[19]),
            _[20] !== h || _[21] !== p
              ? ((x = (0, a.jsxs)("div", { className: "flex gap-4", children: [h, p] })),
                (_[20] = h),
                (_[21] = p),
                (_[22] = x))
              : (x = _[22]),
            _[23] !== v || _[24] !== x || _[25] !== s || _[26] !== u
              ? ((y = (0, a.jsx)(o.A, {
                  locale: "en-US",
                  defaultLocale: "en-US",
                  messages: t,
                  children: (0, a.jsxs)("form", {
                    onSubmit: v,
                    className: "flex flex-col gap-8 text-base leading-relaxed text-default",
                    lang: "en-US",
                    children: [s, u, x],
                  }),
                })),
                (_[23] = v),
                (_[24] = x),
                (_[25] = s),
                (_[26] = u),
                (_[27] = y))
              : (y = _[27]),
            y
          )
        },
      },
    )
  },
  HFjV(e, t, s) {
    s.d(t, { MerchantSettingsPage: () => eU })
    var a = s("ABep"),
      n = s("QosV"),
      l = s("irkb"),
      r = s("T0Rc"),
      i = s("xSOA"),
      o = s("qmMi"),
      d = s("zd8w"),
      c = s("Wf1j"),
      u = s("oyxz"),
      m = s("Ywss"),
      f = s("UOa8"),
      h = s("Kwur"),
      g = s("w5lF"),
      p = s("MM0V"),
      x = s("Sm6l"),
      y = s("ZtSy"),
      _ = s("bVeK"),
      j = s("BrP7"),
      b = s("zLIa"),
      S = s("Qrjj"),
      v = s("OMIV"),
      A = s("eShZ"),
      w = s("XHnB"),
      N = s("RNul"),
      M = s("jqO9")
    let C = new Map()
    function R(e, t, s) {
      if (null == e.accountId || null == e.userId) return
      let { accountId: a, userId: n, feedId: l } = e,
        r = JSON.stringify([a, n, l, t]),
        i = async () => {
          await h.Request.safePost("/shopping/onboarding/observations", {
            expectedIdentity: { accountId: a, userId: n },
            requestBody: {
              operation: t,
              outcome: null == s ? "succeeded" : "failed",
              ...(null == s ? {} : { reason: s }),
              ...(l ? { feed_id: l } : {}),
            },
            retry: "never",
            isExpectedError: () => !0,
            signal: AbortSignal.timeout(5e3),
          }).catch(() => {})
        },
        o = C.get(r),
        d = null == o ? i() : o.then(i)
      ;(C.set(r, d),
        d.finally(() => {
          C.get(r) === d && C.delete(r)
        }))
    }
    function k(e, t, s) {
      s instanceof A.FetchError && "network" === s.errorKind && null == s.responseStatus && R(e, t, "network")
    }
    function T(e, t, s) {
      return (a) => {
        throw (s.aborted || k(e, t, a), a)
      }
    }
    function I(e) {
      let t,
        s,
        l,
        o,
        c,
        f,
        g,
        p,
        y,
        _,
        j,
        b,
        S,
        v,
        A = (0, n.c)(50),
        { accountId: w, userId: C, children: k } = e,
        I = (0, m.Zp)(),
        D = (0, d.useRef)(null)
      ;(A[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => D.current?.abort()), (s = []), (A[0] = t), (A[1] = s))
        : ((t = A[0]), (s = A[1])),
        (0, d.useEffect)(t, s),
        A[2] !== w || A[3] !== C
          ? ((l = ["merchant-agreement", C, w]), (A[2] = w), (A[3] = C), (A[4] = l))
          : (l = A[4]))
      let F = null != C && null != w
      ;(A[5] !== w || A[6] !== C
        ? ((o = async (e) => {
            let { signal: t } = e
            if (null == w || null == C) throw Error("Merchant identity unavailable")
            let s = await h.Request.safeGet("/shopping/merchant-agreement/status", {
              expectedIdentity: { accountId: w, userId: C },
              signal: t,
              retry: !1,
              expectedErrorStatuses: [403, 503],
            }).catch(T({ accountId: w, userId: C }, "agreement_status", t))
            if (
              s.user_id !== C ||
              (s.account_id ?? s.workspace_id) !== w ||
              (null != s.workspace_id && s.workspace_id !== w)
            )
              throw Error("Merchant access identity changed")
            return (
              t.aborted ||
                "agreement_required" !== s.access ||
                R({ accountId: w, userId: C }, "agreement_version", P(s) ? null : "agreement_version"),
              s
            )
          }),
          (A[5] = w),
          (A[6] = C),
          (A[7] = o))
        : (o = A[7]),
        A[8] !== l || A[9] !== F || A[10] !== o
          ? ((c = {
              queryKey: l,
              enabled: F,
              queryFn: o,
              staleTime: 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: "always",
            }),
            (A[8] = l),
            (A[9] = F),
            (A[10] = o),
            (A[11] = c))
          : (c = A[11]))
      let { data: U, isPending: E, isError: L, refetch: q } = (0, r.I)(c)
      A[12] !== w || A[13] !== U
        ? ((f = U?.access === "agreement_required" && (U.account_id ?? U.workspace_id) === w && P(U)),
          (A[12] = w),
          (A[13] = U),
          (A[14] = f))
        : (f = A[14])
      let B = f
      A[15] !== w || A[16] !== B || A[17] !== q || A[18] !== C
        ? ((g = {
            mutationFn: async () => {
              if (null == w || null == C || !B || D.current) return
              let e = new AbortController()
              return (
                (D.current = e),
                h.Request.safePost("/shopping/merchant-agreement/domain/accept", {
                  expectedIdentity: { accountId: w, userId: C },
                  signal: e.signal,
                  retry: "never",
                  expectedErrorStatuses: [403, 409, 422, 503],
                  requestBody: {
                    agreement_version: "2026-06-15",
                    consent_version: "2026-10-14-commerce-policies",
                    accepted_terms: !0,
                  },
                })
                  .catch(T({ accountId: w, userId: C }, "agreement_accept", e.signal))
                  .then(async (t) => {
                    if (
                      (e.signal.throwIfAborted(),
                      (t.account_id ?? t.workspace_id) !== w ||
                        (null != t.workspace_id && t.workspace_id !== w) ||
                        t.user_id !== C)
                    )
                      throw Error("Merchant acceptance identity changed")
                    await q()
                  })
                  .finally(() => {
                    D.current === e && (D.current = null)
                  })
              )
            },
            retry: !1,
            gcTime: 0,
          }),
          (A[15] = w),
          (A[16] = B),
          (A[17] = q),
          (A[18] = C),
          (A[19] = g))
        : (g = A[19])
      let { mutate: z, isPending: O, isError: G } = (0, i.n)(g)
      if (E) {
        let e
        return (
          A[20] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(N.y, {})), (A[20] = e)) : (e = A[20]),
          e
        )
      }
      if (!L && U?.access === "allowed") {
        let e
        return (
          A[21] !== k ? ((e = (0, a.jsx)(a.Fragment, { children: k })), (A[21] = k), (A[22] = e)) : (e = A[22]),
          e
        )
      }
      return (
        A[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("h1", {
              className: "text-2xl font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.agreement.title",
                defaultMessage: "Set up merchant access",
              }),
            })),
            (A[23] = p))
          : (p = A[23]),
        A[24] !== L || A[25] !== G
          ? ((y =
              (L || G) &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.error",
                  defaultMessage: "We couldn\u2019t complete that request. Please try again.",
                }),
              })),
            (A[24] = L),
            (A[25] = G),
            (A[26] = y))
          : (y = A[26]),
        A[27] !== U?.access || A[28] !== L
          ? ((_ =
              !L &&
              U?.access === "denied" &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.accountDenied",
                  defaultMessage: "Merchant settings aren\u2019t available for this account",
                }),
              })),
            (A[27] = U?.access),
            (A[28] = L),
            (A[29] = _))
          : (_ = A[29]),
        A[30] !== B || A[31] !== U?.access || A[32] !== L
          ? ((j =
              !L &&
              U?.access === "agreement_required" &&
              !B &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.unavailable",
                  defaultMessage:
                    "Agreement acceptance isn\u2019t available right now. Please refresh or contact support.",
                }),
              })),
            (A[30] = B),
            (A[31] = U?.access),
            (A[32] = L),
            (A[33] = j))
          : (j = A[33]),
        A[34] !== B || A[35] !== L || A[36] !== z || A[37] !== I || A[38] !== O
          ? ((b =
              !L &&
              B &&
              (0, a.jsx)(M.MerchantAgreementForm, {
                submitting: O,
                onSubmit: (e) => {
                  ;(e.preventDefault(), O || D.current || z())
                },
                onBack: () => void I("/"),
              })),
            (A[34] = B),
            (A[35] = L),
            (A[36] = z),
            (A[37] = I),
            (A[38] = O),
            (A[39] = b))
          : (b = A[39]),
        A[40] !== B || A[41] !== L || A[42] !== q
          ? ((S =
              (L || !B) &&
              (0, a.jsx)(x.$, {
                className: "self-start",
                color: "secondary",
                onClick: () => void q(),
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.refresh",
                  defaultMessage: "Refresh status",
                }),
              })),
            (A[40] = B),
            (A[41] = L),
            (A[42] = q),
            (A[43] = S))
          : (S = A[43]),
        A[44] !== y || A[45] !== _ || A[46] !== j || A[47] !== b || A[48] !== S
          ? ((v = (0, a.jsx)("main", {
              className: "h-full overflow-y-auto bg-surface px-6 py-8 text-default",
              children: (0, a.jsxs)("div", {
                className: "mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center gap-8",
                children: [p, y, _, j, b, S],
              }),
            })),
            (A[44] = y),
            (A[45] = _),
            (A[46] = j),
            (A[47] = b),
            (A[48] = S),
            (A[49] = v))
          : (v = A[49]),
        v
      )
    }
    function P(e) {
      return "2026-06-15" === e.agreement_version && "2026-10-14-commerce-policies" === e.consent_version
    }
    var D = s("on57")
    function F(e) {
      let t,
        s,
        l,
        r,
        i = (0, n.c)(8)
      return (
        i[0] !== e ? (({ className: t, ...s } = e), (i[0] = e), (i[1] = t), (i[2] = s)) : ((t = i[1]), (s = i[2])),
        i[3] !== t
          ? ((l = (0, D.A)("bg-black! text-white! disabled:opacity-100! aria-disabled:opacity-100!", t)),
            (i[3] = t),
            (i[4] = l))
          : (l = i[4]),
        i[5] !== s || i[6] !== l
          ? ((r = (0, a.jsx)(x.$, { ...s, className: l, color: "primary" })), (i[5] = s), (i[6] = l), (i[7] = r))
          : (r = i[7]),
        r
      )
    }
    var U = s("D7Ms"),
      E = s("BSnr"),
      L = s("Qgfj"),
      q = s("JNtf"),
      B = s("mUDD"),
      z = s("GlQn")
    function O(e) {
      let t,
        s,
        l,
        i,
        o,
        d,
        c,
        m,
        g,
        y,
        _ = (0, n.c)(43),
        { feedId: j, uploadId: b, code: S, onAccessDenied: v } = e,
        w = void 0 === S ? "invalid_value" : S,
        { userId: N, accountId: M } = (0, f.As)()
      ;(_[0] !== M || _[1] !== w || _[2] !== j || _[3] !== b || _[4] !== N
        ? ((t = ["merchant-issue-reasons", N, M, j, b, w]),
          (_[0] = M),
          (_[1] = w),
          (_[2] = j),
          (_[3] = b),
          (_[4] = N),
          (_[5] = t))
        : (t = _[5]),
        _[6] !== w || _[7] !== j || _[8] !== v || _[9] !== b
          ? ((s = async (e) => {
              let { signal: t } = e
              try {
                return await h.Request.safeGet("/shopping/feeds/{feed_id}/uploads/{upload_id}/diagnostics", {
                  parameters: { path: { feed_id: j, upload_id: b }, query: { code: w } },
                  signal: t,
                  expectedErrorStatuses: [400, 401, 403, 404, 409, 410, 429, 503],
                })
              } catch (e) {
                throw (e instanceof A.FetchError && [401, 403].includes(e.status) && v?.(), e)
              }
            }),
            (_[6] = w),
            (_[7] = j),
            (_[8] = v),
            (_[9] = b),
            (_[10] = s))
          : (s = _[10]),
        _[11] !== t || _[12] !== s
          ? ((l = { queryKey: t, queryFn: s, staleTime: 0, gcTime: 0, retry: !1 }),
            (_[11] = t),
            (_[12] = s),
            (_[13] = l))
          : (l = _[13]))
      let { data: C, isFetching: R, isError: k, error: T, refetch: I } = (0, r.I)(l)
      if (R) {
        let e
        return (
          _[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.loading",
                  defaultMessage: "Loading specific error reasons\u2026",
                }),
              })),
              (_[14] = e))
            : (e = _[14]),
          e
        )
      }
      if (k) {
        let e,
          t,
          s,
          n,
          l,
          r,
          i = T instanceof A.FetchError && [404, 409, 410].includes(T.status)
        if (T instanceof A.FetchError && [401, 403].includes(T.status)) {
          let t
          ;(_[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.accessDenied",
                defaultMessage:
                  "You no longer have access to these saved reasons. Check the selected account or ask an administrator for access",
              })),
              (_[15] = t))
            : (t = _[15]),
            (e = t))
        } else if (i) {
          let t
          ;(_[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.evidenceUnavailable",
                defaultMessage:
                  "Saved reasons are unavailable for this upload. Share the Feed ID and Upload ID with OpenAI support so they can investigate",
              })),
              (_[16] = t))
            : (t = _[16]),
            (e = t))
        } else {
          let t
          ;(_[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.error",
                defaultMessage: "Specific error reasons could not be loaded",
              })),
              (_[17] = t))
            : (t = _[17]),
            (e = t))
        }
        return (
          _[18] !== e
            ? ((t = (0, a.jsx)(p.l, { variant: "callout", type: "caution", role: "alert", content: e })),
              (_[18] = e),
              (_[19] = t))
            : (t = _[19]),
          _[20] !== I ? ((s = () => void I()), (_[20] = I), (_[21] = s)) : (s = _[21]),
          _[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(u.A, { id: "merchantSettings.issueReasons.retry", defaultMessage: "Retry" })),
              (_[22] = n))
            : (n = _[22]),
          _[23] !== s
            ? ((l = (0, a.jsx)(x.$, { color: "ghost", size: "compact", onClick: s, children: n })),
              (_[23] = s),
              (_[24] = l))
            : (l = _[24]),
          _[25] !== t || _[26] !== l
            ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [t, l] })),
              (_[25] = t),
              (_[26] = l),
              (_[27] = r))
            : (r = _[27]),
          r
        )
      }
      if (null == C) return null
      _[28] !== C.examples ? ((i = C.examples ?? []), (_[28] = C.examples), (_[29] = i)) : (i = _[29])
      let P = i
      return (
        _[30] !== w
          ? ((o = (0, a.jsx)("h3", {
              className: "font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.examplesByCode",
                defaultMessage:
                  "{code, select, missing_required_column {Missing column examples} other {Rejected value examples}}",
                values: { code: w },
              }),
            })),
            (_[30] = w),
            (_[31] = o))
          : (o = _[31]),
        _[32] !== P
          ? ((d =
              0 === P.length
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueReasons.unavailable",
                      defaultMessage: "Specific reasons were not saved or are no longer available for this upload",
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      P.map(G),
                      (0, a.jsx)("p", {
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.issueReasons.sampleLimit",
                          defaultMessage:
                            "Reasons come from up to 5 saved examples per field and may not cover every rejected row",
                        }),
                      }),
                    ],
                  })),
            (_[32] = P),
            (_[33] = d))
          : (d = _[33]),
        _[34] !== I ? ((c = () => void I()), (_[34] = I), (_[35] = c)) : (c = _[35]),
        _[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(u.A, { id: "merchantSettings.issueReasons.refresh", defaultMessage: "Refresh examples" })),
            (_[36] = m))
          : (m = _[36]),
        _[37] !== c
          ? ((g = (0, a.jsx)(x.$, { color: "ghost", size: "compact", onClick: c, children: m })),
            (_[37] = c),
            (_[38] = g))
          : (g = _[38]),
        _[39] !== g || _[40] !== o || _[41] !== d
          ? ((y = (0, a.jsxs)("div", { className: "flex flex-col gap-3 text-sm select-text", children: [o, d, g] })),
            (_[39] = g),
            (_[40] = o),
            (_[41] = d),
            (_[42] = y))
          : (y = _[42]),
        y
      )
    }
    function G(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-3",
          children: [
            (0, a.jsx)("p", {
              className: "text-xs",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.position",
                defaultMessage: "{file} \xb7 Record {row, number}",
                values: { file: e.source_file, row: e.row_number },
              }),
            }),
            null != e.product_id &&
              (0, a.jsx)("p", {
                className: "text-sm break-all select-text",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.productId",
                  defaultMessage: "Product ID: {id}",
                  values: { id: e.product_id },
                }),
              }),
            (0, a.jsx)("div", {
              className: "text-sm break-all whitespace-pre-wrap select-text",
              children: (0, a.jsx)(H, { example: e }),
            }),
            e.value_truncated &&
              (0, a.jsx)("p", {
                className: "text-xs",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.truncatedValue",
                  defaultMessage: "This long value has been shortened",
                }),
              }),
            (0, a.jsx)(z.s, { field: e.field, reason: e.reason }),
          ],
        },
        t,
      )
    }
    function H(e) {
      let t,
        s,
        l = (0, n.c)(6),
        { example: r } = e
      if (r.value_redacted) {
        let e
        return (
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.redactedValue",
                defaultMessage: "Value hidden because the URL contains credentials",
              })),
              (l[0] = e))
            : (e = l[0]),
          e
        )
      }
      if (null == r.failed_value) {
        let e
        return (
          l[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.valueUnavailable",
                defaultMessage: "Value not available",
              })),
              (l[1] = e))
            : (e = l[1]),
          e
        )
      }
      return (
        l[2] !== r.failed_value
          ? ((t = JSON.stringify(r.failed_value)), (l[2] = r.failed_value), (l[3] = t))
          : (t = l[3]),
        l[4] !== t
          ? ((s = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueReasons.rejectedValue",
              defaultMessage: "Rejected value: {value}",
              values: { value: t },
            })),
            (l[4] = t),
            (l[5] = s))
          : (s = l[5]),
        s
      )
    }
    function K(e) {
      let t,
        s = (0, n.c)(2),
        { code: l } = e,
        r = l ?? "unclassified"
      return (
        s[0] !== r
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.issueTitle",
              defaultMessage:
                "{code, select, missing_required_column {Missing required column} invalid_value {Invalid value} invalid_gzip {Invalid gzip file} unsupported_file_type {Unsupported file type} invalid_sftp_directory_layout {SFTP directory layout} other {Unclassified issue}}",
              values: { code: r },
            })),
            (s[0] = r),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function V(e) {
      let t,
        s,
        l,
        r,
        i,
        o,
        d,
        c,
        m,
        f,
        h,
        g,
        x,
        _,
        j,
        b,
        S,
        v,
        A,
        w,
        N,
        M,
        C,
        R,
        k,
        T,
        I,
        P,
        D,
        F,
        U,
        E,
        z,
        G,
        H,
        K = (0, n.c)(74),
        { feedId: V, upload: Q, onClose: X, onRestoreFocus: ee, onAccessDenied: et } = e
      ;(K[0] !== X
        ? ((t = (e) => {
            e || X()
          }),
          (K[0] = X),
          (K[1] = t))
        : (t = K[1]),
        K[2] !== ee
          ? ((s = {
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), ee())
              },
            }),
            (K[2] = ee),
            (K[3] = s))
          : (s = K[3]),
        K[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(q.L3, {
              children: (0, a.jsx)(u.A, { id: "merchantSettings.issueDetails.title", defaultMessage: "Error details" }),
            })),
            (K[4] = l))
          : (l = K[4]),
        K[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(B.c7, {
              titleSize: "base",
              title: l,
              subtitle: (0, a.jsx)(q.rr, {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueDetails.description",
                  defaultMessage:
                    "Review what was recorded for this upload and the next steps supported by that evidence",
                }),
              }),
            })),
            (K[5] = r))
          : (r = K[5]))
      let es = "failed" === Q.status ? "error" : "caution"
      return (
        K[6] !== Q.status ? ((i = (0, a.jsx)(W, { status: Q.status })), (K[6] = Q.status), (K[7] = i)) : (i = K[7]),
        K[8] !== Q.status
          ? ((o = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.statusSummary",
              defaultMessage:
                "{status, select, failed {This upload did not complete successfully. Review the recorded issues below to identify the next step} completed_with_errors {Processing finished with errors. Use the recorded counts and saved examples to identify affected products} other {Use the recorded issues and examples below to identify the next step}}",
              values: { status: Q.status },
            })),
            (K[8] = Q.status),
            (K[9] = o))
          : (o = K[9]),
        K[10] !== es || K[11] !== i || K[12] !== o
          ? ((d = (0, a.jsx)(p.l, { variant: "callout", type: es, title: i, content: o })),
            (K[10] = es),
            (K[11] = i),
            (K[12] = o),
            (K[13] = d))
          : (d = K[13]),
        K[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.accepted",
                defaultMessage: "Accepted rows",
              }),
            })),
            (K[14] = c))
          : (c = K[14]),
        K[15] !== Q.rows_accepted
          ? ((m = (0, a.jsx)("dd", { children: (0, a.jsx)(J, { value: Q.rows_accepted }) })),
            (K[15] = Q.rows_accepted),
            (K[16] = m))
          : (m = K[16]),
        K[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.rejectedCount",
                defaultMessage: "Rejected rows",
              }),
            })),
            (K[17] = f))
          : (f = K[17]),
        K[18] !== Q.rows_rejected
          ? ((h = (0, a.jsx)("dd", { children: (0, a.jsx)(J, { value: Q.rows_rejected }) })),
            (K[18] = Q.rows_rejected),
            (K[19] = h))
          : (h = K[19]),
        K[20] !== m || K[21] !== h
          ? ((g = (0, a.jsxs)("dl", { className: "grid grid-cols-2 gap-3 text-sm", children: [c, m, f, h] })),
            (K[20] = m),
            (K[21] = h),
            (K[22] = g))
          : (g = K[22]),
        K[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.fields",
                defaultMessage: "Recorded issues",
              }),
            })),
            (K[23] = x))
          : (x = K[23]),
        K[24] !== Q.diagnostics
          ? ((_ = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3",
              children: [
                x,
                Q.diagnostics?.length
                  ? (0, a.jsx)("dl", { className: "text-sm", children: Q.diagnostics.map(Z) })
                  : (0, a.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.issueDetails.noDiagnostics",
                        defaultMessage: "No structured issue details were recorded for this run",
                      }),
                    }),
              ],
            })),
            (j =
              null != Q.diagnostics &&
              Q.diagnostics.length > 1 &&
              (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueDetails.overlappingCounts",
                  defaultMessage: "A row can have more than one issue, so these counts may overlap",
                }),
              })),
            (K[24] = Q.diagnostics),
            (K[25] = _),
            (K[26] = j))
          : ((_ = K[25]), (j = K[26])),
        K[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.issueDetails.fix", defaultMessage: "Next steps" }),
            })),
            (K[27] = b))
          : (b = K[27]),
        K[28] !== Q.diagnostics
          ? ((S = new Set(Q.diagnostics?.length ? Q.diagnostics.map(Y) : ["unclassified"])),
            (K[28] = Q.diagnostics),
            (K[29] = S))
          : (S = K[29]),
        K[30] !== S ? ((v = [...S].map($)), (K[30] = S), (K[31] = v)) : (v = K[31]),
        K[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsx)(y.G, {
              href: "https://developers.openai.com/commerce/specs/file-upload/products",
              initiator: "open_in_browser_bridge",
              underline: "always",
              openTarget: "external-browser",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedFormats.specifications",
                defaultMessage: "Feed specifications",
              }),
            })),
            (K[32] = A))
          : (A = K[32]),
        K[33] !== v
          ? ((w = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3 border-t border-subtle pt-6",
              children: [b, v, A],
            })),
            (K[33] = v),
            (K[34] = w))
          : (w = K[34]),
        K[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = ["missing_required_column", "invalid_value"]), (K[35] = N))
          : (N = K[35]),
        K[36] !== V || K[37] !== et || K[38] !== Q.diagnostics || K[39] !== Q.upload_id
          ? ((M = N.map((e) =>
              Q.diagnostics?.some((t) => t.code === e)
                ? (0, a.jsx)(O, { feedId: V, uploadId: Q.upload_id, code: e, onAccessDenied: et }, e)
                : null,
            )),
            (K[36] = V),
            (K[37] = et),
            (K[38] = Q.diagnostics),
            (K[39] = Q.upload_id),
            (K[40] = M))
          : (M = K[40]),
        K[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.upload",
                defaultMessage: "Upload details",
              }),
            })),
            (K[41] = C))
          : (C = K[41]),
        K[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.issueDetails.feed", defaultMessage: "Feed ID" }),
            })),
            (K[42] = R))
          : (R = K[42]),
        K[43] !== V
          ? ((k = (0, a.jsx)("dd", { className: "break-all select-text", children: V })), (K[43] = V), (K[44] = k))
          : (k = K[44]),
        K[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.issueDetails.run", defaultMessage: "Upload ID" }),
            })),
            (K[45] = T))
          : (T = K[45]),
        K[46] !== Q.upload_id
          ? ((I = (0, a.jsx)("dd", { className: "break-all select-text", children: Q.upload_id })),
            (K[46] = Q.upload_id),
            (K[47] = I))
          : (I = K[47]),
        K[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.issueList.source", defaultMessage: "Source" }),
            })),
            (K[48] = P))
          : (P = K[48]),
        K[49] !== Q.source
          ? ((D = (0, a.jsx)("dd", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueList.sourceName",
                defaultMessage:
                  "{source, select, file_upload {File upload} hosted_url {Hosted URL} sftp {SFTP} other {Unknown source}}",
                values: { source: Q.source },
              }),
            })),
            (K[49] = Q.source),
            (K[50] = D))
          : (D = K[50]),
        K[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.issueDetails.uploaded", defaultMessage: "Uploaded" }),
            })),
            (K[51] = F))
          : (F = K[51]),
        K[52] !== Q.uploaded_at
          ? ((U = (0, a.jsx)("dd", {
              children: (0, a.jsx)(L.XU, { value: Q.uploaded_at, dateStyle: "medium", timeStyle: "short" }),
            })),
            (K[52] = Q.uploaded_at),
            (K[53] = U))
          : (U = K[53]),
        K[54] !== Q.completed_at
          ? ((E =
              null != Q.completed_at &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("dt", {
                    className: "text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueDetails.completed",
                      defaultMessage: "Processing ended",
                    }),
                  }),
                  (0, a.jsx)("dd", {
                    children: (0, a.jsx)(L.XU, { value: Q.completed_at, dateStyle: "medium", timeStyle: "short" }),
                  }),
                ],
              })),
            (K[54] = Q.completed_at),
            (K[55] = E))
          : (E = K[55]),
        K[56] !== k || K[57] !== I || K[58] !== D || K[59] !== U || K[60] !== E
          ? ((z = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3 border-t border-subtle pt-6",
              children: [
                C,
                (0, a.jsxs)("dl", {
                  className: "grid grid-cols-2 gap-3 text-sm",
                  children: [R, k, T, I, P, D, F, U, E],
                }),
              ],
            })),
            (K[56] = k),
            (K[57] = I),
            (K[58] = D),
            (K[59] = U),
            (K[60] = E),
            (K[61] = z))
          : (z = K[61]),
        K[62] !== g || K[63] !== _ || K[64] !== j || K[65] !== w || K[66] !== M || K[67] !== z || K[68] !== d
          ? ((G = (0, a.jsx)(B.R4, {
              size: "viewport",
              children: (0, a.jsxs)("div", { className: "flex flex-col gap-6", children: [r, d, g, _, j, w, M, z] }),
            })),
            (K[62] = g),
            (K[63] = _),
            (K[64] = j),
            (K[65] = w),
            (K[66] = M),
            (K[67] = z),
            (K[68] = d),
            (K[69] = G))
          : (G = K[69]),
        K[70] !== t || K[71] !== s || K[72] !== G
          ? ((H = (0, a.jsx)(q.lG, {
              open: !0,
              onOpenChange: t,
              contentProps: s,
              variant: "chatgpt",
              size: "feature",
              contentPosition: "anchored",
              contentClassName: "inset-y-4 right-4 flex flex-col",
              children: G,
            })),
            (K[70] = t),
            (K[71] = s),
            (K[72] = G),
            (K[73] = H))
          : (H = K[73]),
        H
      )
    }
    function $(e) {
      return (0, a.jsx)(
        "p",
        {
          className: "text-sm text-secondary",
          children: (0, a.jsx)(u.A, {
            id: "merchantSettings.issueDetails.fixDescription",
            defaultMessage:
              "{code, select, missing_required_column {Check the recorded field names and add the missing required columns before uploading again. If the columns are already present, share the Feed ID and Upload ID with OpenAI support} invalid_value {Review the saved reason for each rejected value before changing the feed. If the reason is unavailable or the value already meets the requirements, share the Feed ID and Upload ID with OpenAI support} invalid_gzip {Recreate the gzip file and verify that it decompresses, then upload it again} unsupported_file_type {Convert the feed to a supported file format, then upload it again} invalid_sftp_directory_layout {Upload the feed files directly to the SFTP root instead of a subfolder} other {These diagnostics do not identify a specific cause, so a source-file change cannot be recommended yet. Share the Feed ID and Upload ID below with OpenAI support so they can investigate}}",
            values: { code: e },
          }),
        },
        e,
      )
    }
    function Y(e) {
      return e.code
    }
    function Z(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex items-start justify-between gap-4 border-b border-subtle py-3",
          children: [
            (0, a.jsxs)("dt", {
              className: "break-all select-text",
              children: [
                (0, a.jsx)(K, { code: e.code }),
                e.field
                  ? (0, a.jsx)("p", { className: "text-xs text-secondary", children: e.field })
                  : (0, a.jsx)("p", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.issueDetails.noField",
                        defaultMessage: "No field recorded",
                      }),
                    }),
              ],
            }),
            (0, a.jsx)("dd", {
              className: "shrink-0 text-secondary",
              children:
                null == e.rows_affected
                  ? (0, a.jsx)(J, { value: e.rows_affected })
                  : (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueDetails.affectedRows",
                      defaultMessage: "{count, plural, one {# row} other {# rows}}",
                      values: { count: e.rows_affected },
                    }),
            }),
          ],
        },
        t,
      )
    }
    function W(e) {
      let t,
        s = (0, n.c)(2),
        { status: l } = e
      return (
        s[0] !== l
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.status",
              defaultMessage:
                "{status, select, failed {Upload failed} completed_with_errors {Completed with errors} other {Status unavailable}}",
              values: { status: l },
            })),
            (s[0] = l),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function J(e) {
      let t,
        s = (0, n.c)(2),
        { value: l } = e
      return (
        s[0] !== l
          ? ((t =
              null == l
                ? (0, a.jsx)(u.A, {
                    id: "merchantSettings.issueDetails.countNotRecorded",
                    defaultMessage: "Not recorded",
                  })
                : (0, a.jsx)(L.Gr, { value: l })),
            (s[0] = l),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function Q(e) {
      let t,
        s,
        l,
        r,
        i,
        o,
        d,
        m,
        f,
        h,
        g,
        p = (0, n.c)(31),
        { page: y, total: _, onPageChange: j } = e,
        b = (0, c.A)(),
        S = Math.ceil(_ / 10)
      if (S <= 1) return null
      p[0] !== b
        ? ((t = b.formatMessage({
            id: "merchantSettings.activity.pagination.label",
            defaultMessage: "Feed activity pagination",
          })),
          (p[0] = b),
          (p[1] = t))
        : (t = p[1])
      let v = 10 * y + 1,
        A = Math.min((y + 1) * 10, _)
      p[2] !== v || p[3] !== A || p[4] !== _
        ? ((s = (0, a.jsx)("span", {
            "aria-live": "polite",
            children: (0, a.jsx)(u.A, {
              id: "merchantSettings.activity.pagination.range",
              defaultMessage: "Showing {start, number}\u2013{end, number} of {total, number}",
              values: { start: v, end: A, total: _ },
            }),
          })),
          (p[2] = v),
          (p[3] = A),
          (p[4] = _),
          (p[5] = s))
        : (s = p[5])
      let w = 0 === y
      ;(p[6] !== j || p[7] !== y ? ((l = () => j(y - 1)), (p[6] = j), (p[7] = y), (p[8] = l)) : (l = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(u.A, { id: "merchantSettings.activity.pagination.previous", defaultMessage: "Previous" })),
            (p[9] = r))
          : (r = p[9]),
        p[10] !== w || p[11] !== l
          ? ((i = (0, a.jsx)(x.$, {
              type: "button",
              color: "outlineCard",
              size: "actionSm",
              disabled: w,
              onClick: l,
              children: r,
            })),
            (p[10] = w),
            (p[11] = l),
            (p[12] = i))
          : (i = p[12]))
      let N = y + 1
      p[13] !== S || p[14] !== N
        ? ((o = (0, a.jsx)(u.A, {
            id: "merchantSettings.activity.pagination.page",
            defaultMessage: "Page {page, number} of {count, number}",
            values: { page: N, count: S },
          })),
          (p[13] = S),
          (p[14] = N),
          (p[15] = o))
        : (o = p[15])
      let M = y + 1 >= S
      return (
        p[16] !== j || p[17] !== y ? ((d = () => j(y + 1)), (p[16] = j), (p[17] = y), (p[18] = d)) : (d = p[18]),
        p[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(u.A, { id: "merchantSettings.activity.pagination.next", defaultMessage: "Next" })),
            (p[19] = m))
          : (m = p[19]),
        p[20] !== M || p[21] !== d
          ? ((f = (0, a.jsx)(x.$, {
              type: "button",
              color: "outlineCard",
              size: "actionSm",
              disabled: M,
              onClick: d,
              children: m,
            })),
            (p[20] = M),
            (p[21] = d),
            (p[22] = f))
          : (f = p[22]),
        p[23] !== o || p[24] !== f || p[25] !== i
          ? ((h = (0, a.jsxs)("div", { className: "flex items-center gap-3", children: [i, o, f] })),
            (p[23] = o),
            (p[24] = f),
            (p[25] = i),
            (p[26] = h))
          : (h = p[26]),
        p[27] !== t || p[28] !== h || p[29] !== s
          ? ((g = (0, a.jsxs)("nav", {
              className: "flex flex-wrap items-center justify-between gap-3 text-xs",
              "aria-label": t,
              children: [s, h],
            })),
            (p[27] = t),
            (p[28] = h),
            (p[29] = s),
            (p[30] = g))
          : (g = p[30]),
        g
      )
    }
    var X = s("bqtn")
    function ee(e) {
      let t,
        s,
        l,
        r,
        i,
        o,
        d,
        c,
        u,
        m,
        f = (0, n.c)(32),
        { label: h, value: g, options: p, onChange: y, disabled: j, showLabel: b, size: S } = e,
        v = void 0 !== b && b,
        A = void 0 === S ? "compact" : S,
        w = "field" === A ? "gap-1.5" : "gap-1"
      ;(f[0] !== w ? ((t = (0, D.A)("flex min-w-0 flex-col", w)), (f[0] = w), (f[1] = t)) : (t = f[1]),
        f[2] !== h || f[3] !== v || f[4] !== A
          ? ((s =
              v &&
              (0, a.jsx)("span", {
                className: (0, D.A)("font-medium", "field" === A ? "text-sm text-secondary" : "text-xs"),
                children: h,
              })),
            (f[2] = h),
            (f[3] = v),
            (f[4] = A),
            (f[5] = s))
          : (s = f[5]))
      let N = "field" === A ? "inputControl" : "settingsSelect"
      ;(f[6] !== p || f[7] !== g
        ? ((l = p.find((e) => e.value === g)?.label), (f[6] = p), (f[7] = g), (f[8] = l))
        : (l = f[8]),
        f[9] !== l
          ? ((r = (0, a.jsx)("span", { className: "truncate", children: l })), (f[9] = l), (f[10] = r))
          : (r = f[10]),
        f[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(_.Aq_, { className: "text-tertiary" })), (f[11] = i))
          : (i = f[11]),
        f[12] !== j || f[13] !== h || f[14] !== N || f[15] !== r
          ? ((o = (0, a.jsxs)(x.$, {
              className: "w-full min-w-0 justify-between",
              "aria-label": h,
              color: "outlineCard",
              size: N,
              radius: "small",
              disabled: j,
              children: [r, i],
            })),
            (f[12] = j),
            (f[13] = h),
            (f[14] = N),
            (f[15] = r),
            (f[16] = o))
          : (o = f[16]))
      let M = String(g)
      if (f[17] !== y || f[18] !== p) {
        let e
        ;(f[20] !== y
          ? ((e = (e) =>
              (0, a.jsx)(
                X.ms.RadioItem,
                { value: String(e.value), onSelect: () => y(e.value), children: e.label },
                String(e.value),
              )),
            (f[20] = y),
            (f[21] = e))
          : (e = f[21]),
          (d = p.map(e)),
          (f[17] = y),
          (f[18] = p),
          (f[19] = d))
      } else d = f[19]
      return (
        f[22] !== M || f[23] !== d
          ? ((c = (0, a.jsx)(X.ms.RadioGroup, { value: M, children: d })), (f[22] = M), (f[23] = d), (f[24] = c))
          : (c = f[24]),
        f[25] !== o || f[26] !== c
          ? ((u = (0, a.jsx)(X.Ab, { contentWidth: "menuWide", triggerButton: o, children: c })),
            (f[25] = o),
            (f[26] = c),
            (f[27] = u))
          : (u = f[27]),
        f[28] !== u || f[29] !== t || f[30] !== s
          ? ((m = (0, a.jsxs)("div", { className: t, children: [s, u] })),
            (f[28] = u),
            (f[29] = t),
            (f[30] = s),
            (f[31] = m))
          : (m = f[31]),
        m
      )
    }
    function et(e) {
      let t,
        s,
        i,
        o,
        m,
        g,
        y,
        j,
        b,
        S,
        v,
        w,
        N,
        M,
        C,
        R,
        k,
        T,
        I,
        P,
        D,
        L,
        q = (0, n.c)(127),
        { feedId: B } = e,
        z = (0, c.A)(),
        O = (0, l.jE)(),
        G = (0, d.useRef)(null),
        [H, $] = (0, d.useState)(0),
        { userId: Y, accountId: Z } = (0, f.As)()
      q[0] !== Z || q[1] !== B || q[2] !== Y
        ? ((t = JSON.stringify([Y, Z, B])), (q[0] = Z), (q[1] = B), (q[2] = Y), (q[3] = t))
        : (t = q[3])
      let J = t,
        [X, et] = (0, d.useState)(null),
        [el, er] = (0, d.useState)(null),
        [ei, eo] = (0, d.useState)(7),
        [ed, ec] = (0, d.useState)("all"),
        [eu, em] = (0, d.useState)("newest")
      q[4] !== Z || q[5] !== J || q[6] !== B || q[7] !== O || q[8] !== Y
        ? ((s = function () {
            ;(et(J),
              er(null),
              O.removeQueries({ queryKey: ["merchant-issues", Y, Z, B] }),
              O.removeQueries({ queryKey: ["merchant-issue-reasons", Y, Z, B] }))
          }),
          (q[4] = Z),
          (q[5] = J),
          (q[6] = B),
          (q[7] = O),
          (q[8] = Y),
          (q[9] = s))
        : (s = q[9])
      let ef = s
      ;(q[10] !== Z || q[11] !== ei || q[12] !== B || q[13] !== Y
        ? ((i = ["merchant-issues", Y, Z, B, ei]), (q[10] = Z), (q[11] = ei), (q[12] = B), (q[13] = Y), (q[14] = i))
        : (i = q[14]),
        q[15] !== J || q[16] !== ei || q[17] !== B || q[18] !== ef
          ? ((o =
              null == B
                ? U.hT
                : async (e) => {
                    let { signal: t } = e
                    try {
                      let e = await h.Request.safeGet("/shopping/feeds/{feed_id}/uploads", {
                        parameters: { path: { feed_id: B }, query: { lookback_days: ei ?? void 0, errors_only: !0 } },
                        signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                        expectedErrorStatuses: [400, 401, 403, 404, 429, 503],
                      })
                      return (t.throwIfAborted(), et((e) => (e === J ? null : e)), e)
                    } catch (e) {
                      throw (e instanceof A.FetchError && [401, 403].includes(e.status) && ef(), e)
                    }
                  }),
            (q[15] = J),
            (q[16] = ei),
            (q[17] = B),
            (q[18] = ef),
            (q[19] = o))
          : (o = q[19]))
      let eh = null != B && X !== J
      q[20] !== i || q[21] !== o || q[22] !== eh
        ? ((m = { queryKey: i, queryFn: o, enabled: eh, retry: !1, staleTime: 3e4 }),
          (q[20] = i),
          (q[21] = o),
          (q[22] = eh),
          (q[23] = m))
        : (m = q[23])
      let { data: eg, isPending: ep, isFetching: ex, isError: ey, error: e_, refetch: ej } = (0, r.I)(m)
      q[24] !== J || q[25] !== X || q[26] !== e_
        ? ((g = X === J || (e_ instanceof A.FetchError && [401, 403].includes(e_.status))),
          (q[24] = J),
          (q[25] = X),
          (q[26] = e_),
          (q[27] = g))
        : (g = q[27])
      let eb = g
      ;(eb && null != el && er(null),
        q[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(u.A, { id: "merchantSettings.refreshIssues", defaultMessage: "Refresh" })), (q[28] = y))
          : (y = q[28]))
      let eS = y
      if (
        q[29] !== eb ||
        q[30] !== eg ||
        q[31] !== ei ||
        q[32] !== el ||
        q[33] !== B ||
        q[34] !== z ||
        q[35] !== ey ||
        q[36] !== ex ||
        q[37] !== ep ||
        q[38] !== ed ||
        q[39] !== eu ||
        q[40] !== H ||
        q[41] !== ej
      ) {
        let e,
          t,
          s,
          n,
          l,
          r,
          i,
          o,
          d,
          c,
          m,
          f,
          h,
          g,
          y,
          A,
          P,
          D,
          U,
          L,
          O,
          V,
          Y,
          Z = eb
            ? void 0
            : eg?.uploads
                .filter(
                  (e) =>
                    ("failed" === e.status || "completed_with_errors" === e.status) &&
                    ("all" === ed ||
                      ("unclassified" === ed ? !e.diagnostics?.length : e.diagnostics?.some((e) => e.code === ed))),
                )
                .sort((e, t) => (Date.parse(e.uploaded_at) - Date.parse(t.uploaded_at)) * ("oldest" === eu ? 1 : -1)),
          J = Math.min(H, Math.max(1, Math.ceil((Z?.length ?? 0) / 10)) - 1)
        null == Z || ey || H === J || $(J)
        let X = Z?.slice(10 * J, (J + 1) * 10)
        ;((S = X?.find((e) => e.upload_id === el)),
          (b = E.X),
          (j = E.X.Content),
          (I = "gap-4"),
          q[54] !== z
            ? ((e = z.formatMessage({ id: "merchantSettings.issueRange", defaultMessage: "Time range" })),
              (q[54] = z),
              (q[55] = e))
            : (e = q[55]),
          q[56] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => {
                ;(eo(e), $(0), er(null))
              }),
              (s = [1, 3, 7, 30, 90]),
              (q[56] = t),
              (q[57] = s))
            : ((t = q[56]), (s = q[57])),
          q[58] === Symbol.for("react.memo_cache_sentinel") ? ((n = s.map(en)), (q[58] = n)) : (n = q[58]),
          q[59] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = [
                ...n,
                {
                  value: null,
                  label: (0, a.jsx)(u.A, {
                    id: "merchantSettings.recordedHistoryAllTime",
                    defaultMessage: "All time (recorded uploads)",
                  }),
                },
              ]),
              (q[59] = l))
            : (l = q[59]),
          q[60] !== ei || q[61] !== e
            ? ((r = (0, a.jsx)(ee, { size: "field", showLabel: !0, label: e, value: ei, onChange: t, options: l })),
              (q[60] = ei),
              (q[61] = e),
              (q[62] = r))
            : (r = q[62]),
          q[63] !== z
            ? ((i = z.formatMessage({ id: "merchantSettings.issueType", defaultMessage: "Issue type" })),
              (q[63] = z),
              (q[64] = i))
            : (i = q[64]),
          q[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (e) => {
                ;(ec(e), $(0), er(null))
              }),
              (q[65] = o))
            : (o = q[65]),
          q[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = {
                value: "all",
                label: (0, a.jsx)(u.A, { id: "merchantSettings.allIssues", defaultMessage: "All issue types" }),
              }),
              (q[66] = d))
            : (d = q[66]),
          q[67] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = {
                value: "missing_required_column",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.missingColumn",
                  defaultMessage: "Missing required column",
                }),
              }),
              (q[67] = c))
            : (c = q[67]),
          q[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = {
                value: "invalid_value",
                label: (0, a.jsx)(u.A, { id: "merchantSettings.invalidValue", defaultMessage: "Invalid value" }),
              }),
              (q[68] = m))
            : (m = q[68]),
          q[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = {
                value: "invalid_gzip",
                label: (0, a.jsx)(u.A, { id: "merchantSettings.invalidGzip", defaultMessage: "Invalid gzip file" }),
              }),
              (q[69] = f))
            : (f = q[69]),
          q[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = {
                value: "unsupported_file_type",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.unsupportedType",
                  defaultMessage: "Unsupported file type",
                }),
              }),
              (q[70] = h))
            : (h = q[70]),
          q[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = {
                value: "invalid_sftp_directory_layout",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.invalidLayout",
                  defaultMessage: "SFTP directory layout",
                }),
              }),
              (q[71] = g))
            : (g = q[71]),
          q[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = [
                d,
                c,
                m,
                f,
                h,
                g,
                {
                  value: "unclassified",
                  label: (0, a.jsx)(u.A, { id: "merchantSettings.unclassified", defaultMessage: "Unclassified" }),
                },
              ]),
              (q[72] = y))
            : (y = q[72]),
          q[73] !== ed || q[74] !== i
            ? ((A = (0, a.jsx)(ee, { size: "field", showLabel: !0, label: i, value: ed, onChange: o, options: y })),
              (q[73] = ed),
              (q[74] = i),
              (q[75] = A))
            : (A = q[75]),
          q[76] !== z
            ? ((P = z.formatMessage({ id: "merchantSettings.issueOrder", defaultMessage: "Sort by" })),
              (q[76] = z),
              (q[77] = P))
            : (P = q[77]),
          q[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = (e) => {
                ;(em(e), $(0), er(null))
              }),
              (q[78] = D))
            : (D = q[78]),
          q[79] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = {
                value: "newest",
                label: (0, a.jsx)(u.A, { id: "merchantSettings.latestFirst", defaultMessage: "Most recent" }),
              }),
              (q[79] = U))
            : (U = q[79]),
          q[80] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = [
                U,
                {
                  value: "oldest",
                  label: (0, a.jsx)(u.A, { id: "merchantSettings.earliestFirst", defaultMessage: "Oldest" }),
                },
              ]),
              (q[80] = L))
            : (L = q[80]),
          q[81] !== eu || q[82] !== P
            ? ((O = (0, a.jsx)(ee, { size: "field", showLabel: !0, label: P, value: eu, onChange: D, options: L })),
              (q[81] = eu),
              (q[82] = P),
              (q[83] = O))
            : (O = q[83]))
        let et = null == B || ex
        ;(q[84] !== ej ? ((V = () => void ej()), (q[84] = ej), (q[85] = V)) : (V = q[85]),
          q[86] !== ex || q[87] !== et || q[88] !== V
            ? ((Y = (0, a.jsx)(F, {
                className: "self-end justify-self-end",
                size: "dialog",
                disabled: et,
                loading: ex,
                sizingLabels: eS,
                onClick: V,
                children: eS,
              })),
              (q[86] = ex),
              (q[87] = et),
              (q[88] = V),
              (q[89] = Y))
            : (Y = q[89]),
          q[90] !== r || q[91] !== A || q[92] !== O || q[93] !== Y
            ? ((v = (0, a.jsxs)("div", {
                className: "grid grid-cols-1 items-end gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1.3fr_1fr_auto]",
                children: [r, A, O, Y],
              })),
              (q[90] = r),
              (q[91] = A),
              (q[92] = O),
              (q[93] = Y),
              (q[94] = v))
            : (v = q[94]),
          q[95] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.recordedIssueScope",
                  defaultMessage:
                    "Showing issues from recorded uploads in the selected time range. Earlier uploads may not be included.",
                }),
              })),
              (q[95] = w))
            : (w = q[95]),
          q[96] !== B
            ? ((N =
                null == B &&
                (0, a.jsx)("p", {
                  className:
                    "rounded-lg bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.selectForIssues",
                    defaultMessage: "Select a merchant above to check for issues.",
                  }),
                })),
              (q[96] = B),
              (q[97] = N))
            : (N = q[97]),
          q[98] !== eb || q[99] !== B || q[100] !== ep
            ? ((M =
                null != B &&
                !eb &&
                ep &&
                (0, a.jsx)("p", {
                  role: "status",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.issuesLoading",
                    defaultMessage: "Loading feed issues\u2026",
                  }),
                })),
              (q[98] = eb),
              (q[99] = B),
              (q[100] = ep),
              (q[101] = M))
            : (M = q[101]),
          q[102] !== eb || q[103] !== ey
            ? ((C = eb
                ? (0, a.jsx)(p.l, {
                    variant: "callout",
                    type: "caution",
                    role: "alert",
                    content: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issuesAccessDenied",
                      defaultMessage:
                        "You no longer have access to this merchant's issues. Check the selected account or ask an administrator for access",
                    }),
                  })
                : ey &&
                  (0, a.jsx)(p.l, {
                    variant: "callout",
                    type: "caution",
                    role: "alert",
                    content: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issuesStatusUnavailable",
                      defaultMessage: "Status unavailable. Feed issues could not be loaded. Try refreshing.",
                    }),
                  })),
              (q[102] = eb),
              (q[103] = ey),
              (q[104] = C))
            : (C = q[104]),
          q[105] !== eb || q[106] !== eg?.truncated
            ? ((R =
                !eb &&
                eg?.truncated &&
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.partialIssueHistory",
                    defaultMessage: "Some upload history could not be checked. Results may be incomplete.",
                  }),
                })),
              (q[105] = eb),
              (q[106] = eg?.truncated),
              (q[107] = R))
            : (R = q[107]),
          (k =
            !ey &&
            Z?.length === 0 &&
            (0, a.jsx)("p", {
              children: eg?.truncated
                ? (0, a.jsx)(u.A, {
                    id: "merchantSettings.noIssuesInPartialHistory",
                    defaultMessage: "No issues found in the loaded upload history. Additional issues may exist.",
                  })
                : (0, a.jsx)(u.A, {
                    id: "merchantSettings.noRecordedIssues",
                    defaultMessage: "No matching issues in the loaded upload history",
                  }),
            })),
          (T =
            null != X &&
            X.length > 0 &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("table", {
                  className: "w-full text-start text-sm",
                  children: [
                    (0, a.jsx)("thead", {
                      children: (0, a.jsxs)("tr", {
                        className: "text-xs text-secondary",
                        children: [
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.issue",
                              defaultMessage: "Issue",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.source",
                              defaultMessage: "Source",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.time",
                              defaultMessage: "Time",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            children: (0, a.jsx)("span", {
                              className: "sr-only",
                              children: (0, a.jsx)(u.A, {
                                id: "merchantSettings.issueList.details",
                                defaultMessage: "Details",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("tbody", {
                      children: X.map((e) =>
                        (0, a.jsxs)(
                          "tr",
                          {
                            className: "border-t border-subtle",
                            children: [
                              (0, a.jsxs)("td", {
                                className: "py-4 pe-4",
                                children: [
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: "cursor-interaction text-start text-default hover:underline",
                                    onClick: (t) => {
                                      ;((G.current = t.currentTarget), er(e.upload_id))
                                    },
                                    children: (0, a.jsx)("span", {
                                      className: "flex flex-col gap-1",
                                      children: e.diagnostics?.length
                                        ? [...new Set(e.diagnostics.map(ea))].map(es)
                                        : (0, a.jsx)(K, { code: void 0 }),
                                    }),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-secondary",
                                    children: (0, a.jsx)(W, { status: e.status }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 pe-4 text-secondary",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.issueList.sourceName",
                                  defaultMessage:
                                    "{source, select, file_upload {File upload} hosted_url {Hosted URL} sftp {SFTP} other {Unknown source}}",
                                  values: { source: e.source },
                                }),
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 text-xs text-secondary",
                                children: z.formatDate(e.uploaded_at, { dateStyle: "medium", timeStyle: "short" }),
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 text-end",
                                children: (0, a.jsx)(x.$, {
                                  type: "button",
                                  color: "ghost",
                                  size: "compact",
                                  uniform: !0,
                                  "aria-label": z.formatMessage({
                                    id: "merchantSettings.issueList.viewDetails",
                                    defaultMessage: "View error details",
                                  }),
                                  onClick: (t) => {
                                    ;((G.current = t.currentTarget), er(e.upload_id))
                                  },
                                  children: (0, a.jsx)(_.j1b, {}),
                                }),
                              }),
                            ],
                          },
                          e.upload_id,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(Q, {
                  page: J,
                  total: Z?.length ?? 0,
                  onPageChange: (e) => {
                    ;($(e), er(null))
                  },
                }),
              ],
            })),
          (q[29] = eb),
          (q[30] = eg),
          (q[31] = ei),
          (q[32] = el),
          (q[33] = B),
          (q[34] = z),
          (q[35] = ey),
          (q[36] = ex),
          (q[37] = ep),
          (q[38] = ed),
          (q[39] = eu),
          (q[40] = H),
          (q[41] = ej),
          (q[42] = j),
          (q[43] = b),
          (q[44] = S),
          (q[45] = v),
          (q[46] = w),
          (q[47] = N),
          (q[48] = M),
          (q[49] = C),
          (q[50] = R),
          (q[51] = k),
          (q[52] = T),
          (q[53] = I))
      } else
        ((j = q[42]),
          (b = q[43]),
          (S = q[44]),
          (v = q[45]),
          (w = q[46]),
          (N = q[47]),
          (M = q[48]),
          (C = q[49]),
          (R = q[50]),
          (k = q[51]),
          (T = q[52]),
          (I = q[53]))
      return (
        q[108] !== B || q[109] !== ef || q[110] !== S
          ? ((P =
              null != S &&
              null != B &&
              (0, a.jsx)(
                V,
                {
                  feedId: B,
                  upload: S,
                  onClose: () => er(null),
                  onRestoreFocus: () => G.current?.focus(),
                  onAccessDenied: ef,
                },
                S.upload_id,
              )),
            (q[108] = B),
            (q[109] = ef),
            (q[110] = S),
            (q[111] = P))
          : (P = q[111]),
        q[112] !== j ||
        q[113] !== v ||
        q[114] !== w ||
        q[115] !== N ||
        q[116] !== M ||
        q[117] !== C ||
        q[118] !== R ||
        q[119] !== k ||
        q[120] !== T ||
        q[121] !== P ||
        q[122] !== I
          ? ((D = (0, a.jsxs)(j, { className: I, children: [v, w, N, M, C, R, k, T, P] })),
            (q[112] = j),
            (q[113] = v),
            (q[114] = w),
            (q[115] = N),
            (q[116] = M),
            (q[117] = C),
            (q[118] = R),
            (q[119] = k),
            (q[120] = T),
            (q[121] = P),
            (q[122] = I),
            (q[123] = D))
          : (D = q[123]),
        q[124] !== b || q[125] !== D
          ? ((L = (0, a.jsx)(b, { children: D })), (q[124] = b), (q[125] = D), (q[126] = L))
          : (L = q[126]),
        L
      )
    }
    function es(e) {
      return (0, a.jsx)(K, { code: e }, e)
    }
    function ea(e) {
      return e.code
    }
    function en(e) {
      return {
        value: e,
        label:
          90 === e
            ? (0, a.jsx)(u.A, { id: "merchantSettings.threeMonths", defaultMessage: "3 months" })
            : (0, a.jsx)(u.A, {
                id: "merchantSettings.lastDays",
                defaultMessage: "{days, plural, one {# day} other {# days}}",
                values: { days: e },
              }),
      }
    }
    var el = s("ZZgR")
    function er(e) {
      let t,
        s,
        l,
        r,
        i,
        o,
        m,
        f,
        h,
        g,
        p,
        y,
        j,
        b,
        S,
        v,
        A,
        w,
        N,
        M,
        C,
        R,
        k,
        T,
        I,
        P,
        D = (0, n.c)(90),
        { label: F, codes: U, type: E, value: L, onChange: q, disabled: B, invalid: z, describedBy: O, onBlur: G } = e,
        H = (0, c.A)(),
        K = (0, d.useId)()
      D[0] !== H
        ? ((t = H.formatMessage({
            id: "merchantSettings.marketSelect.search",
            defaultMessage: "Search by name or code",
          })),
          (D[0] = H),
          (D[1] = t))
        : (t = D[1])
      let V = t,
        [$, Y] = (0, d.useState)(!1),
        [Z, W] = (0, d.useState)("")
      if (
        D[2] !== U ||
        D[3] !== O ||
        D[4] !== B ||
        D[5] !== K ||
        D[6] !== H.locale ||
        D[7] !== z ||
        D[8] !== F ||
        D[9] !== G ||
        D[10] !== q ||
        D[11] !== $ ||
        D[12] !== Z ||
        D[13] !== V ||
        D[14] !== E ||
        D[15] !== L
      ) {
        let e,
          t,
          n,
          d = new Intl.DisplayNames([H.locale], { type: E }),
          c = U.map((e) => ({ code: e, name: d.of(e) ?? e })),
          M = Z.trim().toLocaleLowerCase(H.locale)
        ;((i = c.filter((e) => {
          let { code: t, name: s } = e
          return t.toLocaleLowerCase(H.locale).includes(M) || s.toLocaleLowerCase(H.locale).includes(M)
        })),
          (g = "flex min-w-0 flex-col gap-1 text-sm"),
          D[34] !== K || D[35] !== F
            ? ((p = (0, a.jsx)("label", { htmlFor: K, className: "font-medium select-none", children: F })),
              (D[34] = K),
              (D[35] = F),
              (D[36] = p))
            : (p = D[36]),
          (r = el.A),
          (A = $),
          (w = B),
          D[37] !== G
            ? ((N = (e) => {
                ;(Y(e), e || (W(""), G?.()))
              }),
              (D[37] = G),
              (D[38] = N))
            : (N = D[38]),
          (o = "form"),
          (m = "anchor"),
          (f = "list"),
          D[39] !== L.length
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.marketSelect.choose",
                defaultMessage: "Select codes ({count} selected)",
                values: { count: L.length },
              })),
              (D[39] = L.length),
              (D[40] = e))
            : (e = D[40]),
          D[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(_.Aq_, { className: "text-tertiary" })), (D[41] = t))
            : (t = D[41]),
          D[42] !== O || D[43] !== B || D[44] !== K || D[45] !== z || D[46] !== e
            ? ((h = (0, a.jsxs)(x.$, {
                id: K,
                type: "button",
                className: "w-full min-w-0 justify-between",
                color: "outlineCard",
                size: "inputControl",
                radius: "small",
                disabled: B,
                "aria-invalid": z,
                "aria-describedby": O,
                children: [e, t],
              })),
              (D[42] = O),
              (D[43] = B),
              (D[44] = K),
              (D[45] = z),
              (D[46] = e),
              (D[47] = h))
            : (h = D[47]),
          (l = el.G.Root),
          (b = F),
          (S = !0),
          D[48] !== Z || D[49] !== V
            ? ((v = (0, a.jsx)(el.G.Input, {
                presentation: "form",
                value: Z,
                onValueChange: W,
                "aria-label": V,
                placeholder: V,
              })),
              (D[48] = Z),
              (D[49] = V),
              (D[50] = v))
            : (v = D[50]),
          (s = el.G.List),
          (y = !0),
          D[51] !== q || D[52] !== L
            ? ((n = (e) => {
                let { code: t, name: s } = e,
                  n = (0, a.jsx)(u.A, {
                    id: "merchantSettings.marketSelect.option",
                    defaultMessage: "{name} ({code})",
                    values: { name: s, code: t },
                  })
                return (0, a.jsx)(
                  el.G.Item,
                  {
                    value: t,
                    checked: L.includes(t),
                    onSelect: () => q(L.includes(t) ? L.filter((e) => e !== t) : [...L, t]),
                    tooltipText: n,
                    tooltipOpenWhen: "trigger-overflows",
                    children: n,
                  },
                  t,
                )
              }),
              (D[51] = q),
              (D[52] = L),
              (D[53] = n))
            : (n = D[53]),
          (j = i.map(n)),
          (D[2] = U),
          (D[3] = O),
          (D[4] = B),
          (D[5] = K),
          (D[6] = H.locale),
          (D[7] = z),
          (D[8] = F),
          (D[9] = G),
          (D[10] = q),
          (D[11] = $),
          (D[12] = Z),
          (D[13] = V),
          (D[14] = E),
          (D[15] = L),
          (D[16] = s),
          (D[17] = l),
          (D[18] = r),
          (D[19] = i),
          (D[20] = o),
          (D[21] = m),
          (D[22] = f),
          (D[23] = h),
          (D[24] = g),
          (D[25] = p),
          (D[26] = y),
          (D[27] = j),
          (D[28] = b),
          (D[29] = S),
          (D[30] = v),
          (D[31] = A),
          (D[32] = w),
          (D[33] = N))
      } else
        ((s = D[16]),
          (l = D[17]),
          (r = D[18]),
          (i = D[19]),
          (o = D[20]),
          (m = D[21]),
          (f = D[22]),
          (h = D[23]),
          (g = D[24]),
          (p = D[25]),
          (y = D[26]),
          (j = D[27]),
          (b = D[28]),
          (S = D[29]),
          (v = D[30]),
          (A = D[31]),
          (w = D[32]),
          (N = D[33]))
      return (
        D[54] !== s || D[55] !== y || D[56] !== j
          ? ((M = (0, a.jsx)(s, { scrollable: y, children: j })), (D[54] = s), (D[55] = y), (D[56] = j), (D[57] = M))
          : (M = D[57]),
        D[58] !== i.length
          ? ((C =
              0 === i.length &&
              (0, a.jsx)("p", {
                role: "status",
                className: "px-row-x py-row-y text-sm text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.marketSelect.noMatches",
                  defaultMessage: "No matching code in the reference. Choose a listed option",
                }),
              })),
            (D[58] = i.length),
            (D[59] = C))
          : (C = D[59]),
        D[60] !== l || D[61] !== M || D[62] !== C || D[63] !== b || D[64] !== S || D[65] !== v
          ? ((R = (0, a.jsxs)(l, { label: b, scrollable: S, children: [v, M, C] })),
            (D[60] = l),
            (D[61] = M),
            (D[62] = C),
            (D[63] = b),
            (D[64] = S),
            (D[65] = v),
            (D[66] = R))
          : (R = D[66]),
        D[67] !== r ||
        D[68] !== o ||
        D[69] !== m ||
        D[70] !== f ||
        D[71] !== h ||
        D[72] !== R ||
        D[73] !== A ||
        D[74] !== w ||
        D[75] !== N
          ? ((k = (0, a.jsx)(r, {
              open: A,
              disabled: w,
              onOpenChange: N,
              presentation: o,
              contentWidth: m,
              contentMaxHeight: f,
              triggerButton: h,
              children: R,
            })),
            (D[67] = r),
            (D[68] = o),
            (D[69] = m),
            (D[70] = f),
            (D[71] = h),
            (D[72] = R),
            (D[73] = A),
            (D[74] = w),
            (D[75] = N),
            (D[76] = k))
          : (k = D[76]),
        D[77] !== B || D[78] !== H || D[79] !== G || D[80] !== q || D[81] !== L
          ? ((T = L.map((e) =>
              (0, a.jsxs)(
                x.$,
                {
                  type: "button",
                  color: "secondary",
                  size: "compact",
                  disabled: B,
                  "aria-label": H.formatMessage(
                    { id: "merchantSettings.marketSelect.remove", defaultMessage: "Remove {code}" },
                    { code: e },
                  ),
                  onClick: () => q(L.filter((t) => t !== e)),
                  onBlur: G,
                  children: [e, (0, a.jsx)(_.Gmf, {})],
                },
                e,
              ),
            )),
            (D[77] = B),
            (D[78] = H),
            (D[79] = G),
            (D[80] = q),
            (D[81] = L),
            (D[82] = T))
          : (T = D[82]),
        D[83] !== T
          ? ((I = (0, a.jsx)("div", { className: "flex flex-wrap gap-1", children: T })), (D[83] = T), (D[84] = I))
          : (I = D[84]),
        D[85] !== g || D[86] !== p || D[87] !== k || D[88] !== I
          ? ((P = (0, a.jsxs)("div", { className: g, children: [p, k, I] })),
            (D[85] = g),
            (D[86] = p),
            (D[87] = k),
            (D[88] = I),
            (D[89] = P))
          : (P = D[89]),
        P
      )
    }
    var ei = s("KIKs")
    function eo(e) {
      let t = e.trim()
      if (!/^\d{4}-\d{2}-\d{2}T/.test(t)) return t
      let s = Date.parse(t)
      return Number.isNaN(s) ? t : new Date(s).toISOString().replace(/[-:.]/g, "")
    }
    function ed(e) {
      if (!e) return null
      let t = Date.parse(
        e.replace(
          /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(\d{3,6})Z$/,
          (e, t, s, a, n, l, r, i) => `${t}-${s}-${a}T${n}:${l}:${r}.${i.slice(0, 3)}Z`,
        ),
      )
      return Number.isFinite(t) ? t : null
    }
    function ec(e) {
      let t,
        s,
        l,
        i,
        o,
        m,
        g,
        p,
        y,
        _,
        j,
        b,
        S,
        v,
        A,
        w,
        N,
        M,
        C,
        R,
        k,
        T,
        I,
        P,
        D = (0, n.c)(78),
        { feedId: L } = e,
        q = (0, c.A)(),
        { userId: B, accountId: z } = (0, f.As)(),
        [O, G] = (0, d.useState)(null),
        [H, K] = (0, d.useState)("all"),
        [V, $] = (0, d.useState)(0)
      ;(D[0] !== z || D[1] !== L || D[2] !== B
        ? ((t = ["merchant-runs", B, z, L]), (D[0] = z), (D[1] = L), (D[2] = B), (D[3] = t))
        : (t = D[3]),
        D[4] !== L
          ? ((s =
              null == L
                ? U.hT
                : (e) => {
                    let { signal: t } = e
                    return h.Request.safeGet("/shopping/feeds/{feed_id}/runs", {
                      parameters: { path: { feed_id: L } },
                      signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                    })
                  }),
            (D[4] = L),
            (D[5] = s))
          : (s = D[5]),
        D[6] !== t || D[7] !== s
          ? ((l = { queryKey: t, queryFn: s, retry: !1, staleTime: 1e4, refetchInterval: 15e3 }),
            (D[6] = t),
            (D[7] = s),
            (D[8] = l))
          : (l = D[8]))
      let { data: Y, isPending: Z, isFetching: W, isError: J, refetch: X } = (0, r.I)(l)
      ;(D[9] !== z || D[10] !== L || D[11] !== B
        ? ((i = ["merchant-run-history", B, z, L]), (D[9] = z), (D[10] = L), (D[11] = B), (D[12] = i))
        : (i = D[12]),
        D[13] !== L
          ? ((o =
              null == L
                ? U.hT
                : (e) => {
                    let { signal: t } = e
                    return h.Request.safeGet("/shopping/feeds/{feed_id}/uploads", {
                      parameters: { path: { feed_id: L }, query: { lookback_days: 90, errors_only: !1 } },
                      signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                    })
                  }),
            (D[13] = L),
            (D[14] = o))
          : (o = D[14]),
        D[15] !== i || D[16] !== o
          ? ((m = { queryKey: i, queryFn: o, retry: !1, staleTime: 3e4 }), (D[15] = i), (D[16] = o), (D[17] = m))
          : (m = D[17]))
      let { data: et, isPending: es, isFetching: ea, isError: en, refetch: el } = (0, r.I)(m)
      if (
        D[18] !== Y ||
        D[19] !== L ||
        D[20] !== q ||
        D[21] !== J ||
        D[22] !== V ||
        D[23] !== et ||
        D[24] !== O ||
        D[25] !== H
      ) {
        ;((p =
          null == Y
            ? void 0
            : [
                ...new Map(
                  [
                    ...(et?.uploads.map((e) => {
                      var t, s, a
                      let n, l, r
                      return (
                        (t = e),
                        (s = L ?? ""),
                        (a = Y.merchant_name),
                        (l = -1 === (n = t.upload_id.indexOf("_")) ? "unknown" : t.upload_id.slice(0, n)),
                        (r = t.upload_id.slice(n + 1)),
                        {
                          merchant_name: a,
                          feed_id: s,
                          feed_type: l,
                          feed_key: `${s}/${l}/${r}`,
                          run_id: r,
                          timestamp: t.uploaded_at,
                          source: t.source,
                          status: "scanning" === t.status ? "received" : t.status,
                          started_at: t.uploaded_at,
                          completed_at: t.completed_at,
                          updated_at: t.completed_at ?? t.uploaded_at,
                          dimensions: { file_count: null, failed_file_count: null },
                          metrics: {
                            records_succeeded: t.rows_accepted ?? null,
                            records_failed: t.rows_rejected ?? null,
                          },
                        }
                      )
                    }) ?? []),
                    ...Y.runs,
                  ].map(eh),
                ).values(),
              ]
                .toSorted(ef)
                .slice(0, 100)),
          (g = !!(Y?.truncated || et?.truncated)))
        let e = p?.filter((e) => "all" === H || (e.source ?? "unknown") === H),
          t = Math.min(V, Math.max(1, Math.ceil((e?.length ?? 0) / 10)) - 1)
        null == e || J || V === t || $(t)
        let s = e?.slice(10 * t, (t + 1) * 10),
          n = s?.find((e) => e.feed_key === O),
          l = p?.find(em),
          r = n?.feed_type === "snapshot" || n?.feed_type === "incremental" ? n.feed_type : null
        ;((y =
          null != p &&
          p.length > 0 &&
          (0, a.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, a.jsx)("h3", {
                className: "sr-only",
                children: (0, a.jsx)(u.A, { id: "merchantSettings.runsHeading", defaultMessage: "Runs" }),
              }),
              (0, a.jsx)(ee, {
                label: q.formatMessage({ id: "merchantSettings.sourceFilter", defaultMessage: "Filter by source" }),
                value: H,
                onChange: (e) => {
                  ;(K(e), $(0), G(null))
                },
                options: ["all", "file_upload", "hosted_url", "sftp", "unknown"].map(eu),
              }),
              e?.length === 0 &&
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.noLoadedSourceRuns",
                    defaultMessage: "No loaded runs for this source",
                  }),
                }),
              (0, a.jsx)("ol", {
                className: "flex flex-col gap-3",
                children: s?.map((e) => {
                  let t = ed(e.timestamp)
                  return (0, a.jsxs)(
                    "li",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-t border-subtle pt-3 text-sm",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-1",
                          children: [
                            (0, a.jsx)("p", {
                              className: "font-medium",
                              children: (0, a.jsx)(u.A, { ...ep[e.status] }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-xs text-secondary",
                              children: (0, a.jsx)(u.A, { ...ep[e.source ?? "unknown"] }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-xs text-secondary",
                              children:
                                null == t
                                  ? (0, a.jsx)(u.A, { ...ep.unavailable })
                                  : q.formatDate(t, { dateStyle: "medium", timeStyle: "short" }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(x.$, {
                          color: "ghostActive",
                          size: "actionSm",
                          "aria-expanded": e.feed_key === O,
                          onClick: () => G(e.feed_key === O ? null : e.feed_key),
                          children:
                            e.feed_key === O
                              ? (0, a.jsx)(u.A, {
                                  id: "merchantSettings.hideRunDetails",
                                  defaultMessage: "Hide details",
                                })
                              : (0, a.jsx)(u.A, {
                                  id: "merchantSettings.viewRunDetails",
                                  defaultMessage: "View details",
                                }),
                        }),
                        e.feed_key === O &&
                          (0, a.jsx)("div", {
                            className: "w-full rounded-lg bg-surface-secondary",
                            children:
                              n && (0, a.jsx)(eg, { run: n, feedType: r, lastSuccessAt: l?.completed_at }, n.feed_key),
                          }),
                      ],
                    },
                    e.feed_key,
                  )
                }),
              }),
              (0, a.jsx)(Q, {
                page: t,
                total: e?.length ?? 0,
                onPageChange: (e) => {
                  ;($(e), G(null))
                },
              }),
            ],
          })),
          (D[18] = Y),
          (D[19] = L),
          (D[20] = q),
          (D[21] = J),
          (D[22] = V),
          (D[23] = et),
          (D[24] = O),
          (D[25] = H),
          (D[26] = g),
          (D[27] = p),
          (D[28] = y))
      } else ((g = D[26]), (p = D[27]), (y = D[28]))
      D[29] !== y ? ((_ = (0, a.jsx)(a.Fragment, { children: y })), (D[29] = y), (D[30] = _)) : (_ = D[30])
      let er = _
      D[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, a.jsx)("h3", {
            className: "sr-only",
            children: (0, a.jsx)(u.A, { id: "merchantSettings.runs", defaultMessage: "Ingestion metrics" }),
          })),
          (D[31] = j))
        : (j = D[31])
      let ei = null == L || W || ea,
        eo = W || ea
      return (
        D[32] !== X || D[33] !== el
          ? ((b = () => {
              ;(X(), el())
            }),
            (D[32] = X),
            (D[33] = el),
            (D[34] = b))
          : (b = D[34]),
        D[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)(u.A, { id: "merchantSettings.refresh", defaultMessage: "Refresh runs" })), (D[35] = S))
          : (S = D[35]),
        D[36] !== ei || D[37] !== eo || D[38] !== b
          ? ((v = (0, a.jsxs)("div", {
              className: "mb-4 flex justify-end",
              children: [j, (0, a.jsx)(F, { size: "dialog", disabled: ei, loading: eo, onClick: b, children: S })],
            })),
            (D[36] = ei),
            (D[37] = eo),
            (D[38] = b),
            (D[39] = v))
          : (v = D[39]),
        D[40] !== L
          ? ((A =
              null == L &&
              (0, a.jsx)("p", {
                className:
                  "rounded-lg border border-subtle bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.selectMerchantForRuns",
                  defaultMessage: "Select a merchant above to view runs",
                }),
              })),
            (D[40] = L),
            (D[41] = A))
          : (A = D[41]),
        D[42] !== L || D[43] !== Z
          ? ((w =
              null != L &&
              Z &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsLoading",
                  defaultMessage: "Loading ingestion runs\u2026",
                }),
              })),
            (D[42] = L),
            (D[43] = Z),
            (D[44] = w))
          : (w = D[44]),
        D[45] !== J
          ? ((N =
              J &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsStatusUnavailable",
                  defaultMessage: "Status unavailable. Runs could not be loaded. Try refreshing.",
                }),
              })),
            (D[45] = J),
            (D[46] = N))
          : (N = D[46]),
        D[47] !== en || D[48] !== es || D[49] !== J || D[50] !== g || D[51] !== p?.length
          ? ((M =
              !J &&
              !es &&
              !en &&
              p?.length === 0 &&
              (0, a.jsx)("p", {
                className:
                  "rounded-lg border border-subtle bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                children: g
                  ? (0, a.jsx)(u.A, {
                      id: "merchantSettings.noRunsInPartialHistory",
                      defaultMessage: "No runs found in the loaded history. Additional runs may exist.",
                    })
                  : (0, a.jsx)(u.A, {
                      id: "merchantSettings.noRecordedRuns",
                      defaultMessage: "No runs found in the loaded history",
                    }),
              })),
            (D[47] = en),
            (D[48] = es),
            (D[49] = J),
            (D[50] = g),
            (D[51] = p?.length),
            (D[52] = M))
          : (M = D[52]),
        D[53] !== L || D[54] !== es || D[55] !== Z
          ? ((C =
              null != L &&
              es &&
              !Z &&
              (0, a.jsx)("p", {
                role: "status",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.loading",
                  defaultMessage: "Loading more run history\u2026",
                }),
              })),
            (D[53] = L),
            (D[54] = es),
            (D[55] = Z),
            (D[56] = C))
          : (C = D[56]),
        D[57] !== L || D[58] !== en
          ? ((R =
              null != L &&
              en &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.error",
                  defaultMessage: "Older run history could not be loaded. Refresh to try again.",
                }),
              })),
            (D[57] = L),
            (D[58] = en),
            (D[59] = R))
          : (R = D[59]),
        D[60] !== en || D[61] !== es
          ? ((k =
              !es &&
              !en &&
              (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.recordedScope",
                  defaultMessage: "Up to 100 recorded runs, including uploads from the past 90 days",
                }),
              })),
            (D[60] = en),
            (D[61] = es),
            (D[62] = k))
          : (k = D[62]),
        D[63] !== g
          ? ((T =
              g &&
              (0, a.jsx)("p", {
                role: "status",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.partial",
                  defaultMessage: "Some run history could not be checked. Results may be incomplete.",
                }),
              })),
            (D[63] = g),
            (D[64] = T))
          : (T = D[64]),
        D[65] !== er ||
        D[66] !== A ||
        D[67] !== w ||
        D[68] !== N ||
        D[69] !== M ||
        D[70] !== C ||
        D[71] !== R ||
        D[72] !== k ||
        D[73] !== T
          ? ((I = (0, a.jsxs)(E.X.Content, { children: [A, w, N, M, C, R, k, T, er] })),
            (D[65] = er),
            (D[66] = A),
            (D[67] = w),
            (D[68] = N),
            (D[69] = M),
            (D[70] = C),
            (D[71] = R),
            (D[72] = k),
            (D[73] = T),
            (D[74] = I))
          : (I = D[74]),
        D[75] !== v || D[76] !== I
          ? ((P = (0, a.jsxs)(E.X, { children: [v, I] })), (D[75] = v), (D[76] = I), (D[77] = P))
          : (P = D[77]),
        P
      )
    }
    function eu(e) {
      return { value: e, label: (0, a.jsx)(u.A, { ...ep[e] }) }
    }
    function em(e) {
      return ("completed" === e.status || "completed_with_errors" === e.status) && e.completed_at
    }
    function ef(e, t) {
      return (ed(t.timestamp) ?? 0) - (ed(e.timestamp) ?? 0)
    }
    function eh(e) {
      return [e.feed_key, e]
    }
    function eg(e) {
      let t,
        s,
        l,
        i,
        o,
        d,
        m,
        g,
        p,
        x,
        y,
        _,
        j,
        b,
        S,
        v,
        A,
        w,
        N,
        M,
        C,
        R,
        k,
        T,
        I,
        P,
        D,
        E,
        L,
        q,
        B,
        z,
        O,
        G = (0, n.c)(115),
        { run: H, feedType: K, lastSuccessAt: V } = e,
        $ = (0, c.A)(),
        Y = (0, ei.wv)(),
        { userId: Z, accountId: W } = (0, f.As)()
      if (G[0] !== W || G[1] !== K || G[2] !== H.feed_id || G[3] !== H.feed_type || G[4] !== H.run_id || G[5] !== Z) {
        let e = eo(H.run_id)
        ;((l = r.I),
          G[9] !== W || G[10] !== H.feed_id || G[11] !== H.feed_type || G[12] !== H.run_id || G[13] !== Z
            ? ((t = ["merchant-run-status", Z, W, H.feed_id, H.run_id, H.feed_type]),
              (G[9] = W),
              (G[10] = H.feed_id),
              (G[11] = H.feed_type),
              (G[12] = H.run_id),
              (G[13] = Z),
              (G[14] = t))
            : (t = G[14]),
          (s =
            null != K && /^\d{8}T\d{9}Z$/.test(e)
              ? (t) => {
                  let { signal: s } = t
                  return h.Request.safeGet("/shopping/feeds/{feed_id}/runs/{run_id}", {
                    parameters: { path: { feed_id: H.feed_id, run_id: e }, query: { feed_type: K } },
                    signal: s,
                  })
                }
              : U.hT),
          (G[0] = W),
          (G[1] = K),
          (G[2] = H.feed_id),
          (G[3] = H.feed_type),
          (G[4] = H.run_id),
          (G[5] = Z),
          (G[6] = t),
          (G[7] = s),
          (G[8] = l))
      } else ((t = G[6]), (s = G[7]), (l = G[8]))
      ;(G[15] !== H.status
        ? ((i = (e) => {
            let t = e.state.data?.status ?? H.status
            return ("received" === t || "processing" === t) && 15e3
          }),
          (G[15] = H.status),
          (G[16] = i))
        : (i = G[16]),
        G[17] !== t || G[18] !== s || G[19] !== i
          ? ((o = { queryKey: t, queryFn: s, staleTime: 1e4, refetchInterval: i }),
            (G[17] = t),
            (G[18] = s),
            (G[19] = i),
            (G[20] = o))
          : (o = G[20]))
      let { data: J, isError: Q, refetch: X } = l(o),
        ee = J?.metrics ?? H.metrics,
        et = J?.status_phase ?? H.status_phase ?? "unknown"
      if (
        G[21] !== $ ||
        G[22] !== V ||
        G[23] !== Y ||
        G[24] !== et ||
        G[25] !== X ||
        G[26] !== H.completed_at ||
        G[27] !== H.source ||
        G[28] !== H.started_at ||
        G[29] !== H.status ||
        G[30] !== H.timestamp ||
        G[31] !== J?.completed_at ||
        G[32] !== J?.status ||
        G[33] !== Q
      ) {
        j = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            s,
            n,
            l = ed(H.started_at ?? H.timestamp),
            r = ed(J?.completed_at ?? H.completed_at),
            i = ed(V)
          if (
            ((m = null != l && null != r && r >= l ? r - l : null),
            (d = null != i && Y.getTime() >= i ? Y.getTime() - i : null),
            Q)
          ) {
            let e, t, s, n
            ;(G[46] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.A, {
                  id: "merchantSettings.runStatusUnavailable",
                  defaultMessage: "Status unavailable",
                })),
                (G[46] = e))
              : (e = G[46]),
              G[47] !== X ? ((t = () => void X()), (G[47] = X), (G[48] = t)) : (t = G[48]),
              G[49] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, a.jsx)(u.A, { id: "merchantSettings.retryRunStatus", defaultMessage: "Try again" })),
                  (G[49] = s))
                : (s = G[49]),
              G[50] !== t
                ? ((n = (0, a.jsxs)("div", {
                    role: "alert",
                    children: [e, (0, a.jsx)(F, { onClick: t, children: s })],
                  })),
                  (G[50] = t),
                  (G[51] = n))
                : (n = G[51]),
              (j = n))
            break e
          }
          ;((_ = "flex flex-col gap-3"),
            (x = "rounded-lg border border-subtle p-4"),
            G[52] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, a.jsx)("h3", {
                  className: "text-sm font-semibold",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.identityTiming",
                    defaultMessage: "Run identity & timing",
                  }),
                })),
                (G[52] = y))
              : (y = G[52]),
            (b = "mt-3 grid gap-3 text-sm sm:grid-cols-2"),
            G[53] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, { id: "merchantSettings.status", defaultMessage: "Status" }),
                })),
                (G[53] = e))
              : (e = G[53]))
          let o = ep[J?.status ?? H.status]
          ;(G[54] !== o
            ? ((S = (0, a.jsxs)("div", { children: [e, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...o }) })] })),
              (G[54] = o),
              (G[55] = S))
            : (S = G[55]),
            G[56] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, { id: "merchantSettings.phase", defaultMessage: "Phase" }),
                })),
                (G[56] = t))
              : (t = G[56]))
          let c = ep["unknown" === et ? "unavailable" : et]
          ;(G[57] !== c
            ? ((v = (0, a.jsxs)("div", { children: [t, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...c }) })] })),
              (G[57] = c),
              (G[58] = v))
            : (v = G[58]),
            G[59] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, { id: "merchantSettings.source", defaultMessage: "Source" }),
                })),
                (G[59] = s))
              : (s = G[59]))
          let f = ep[H.source ?? "unknown"]
          ;(G[60] !== f
            ? ((A = (0, a.jsxs)("div", { children: [s, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...f }) })] })),
              (G[60] = f),
              (G[61] = A))
            : (A = G[61]),
            G[62] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, { id: "merchantSettings.started", defaultMessage: "Started" }),
                })),
                (G[62] = n))
              : (n = G[62]))
          let h =
            null == l
              ? (0, a.jsx)(u.A, { ...ep.unavailable })
              : $.formatDate(l, { dateStyle: "medium", timeStyle: "short" })
          ;(G[63] !== h
            ? ((g = (0, a.jsxs)("div", { children: [n, (0, a.jsx)("dd", { children: h })] })), (G[63] = h), (G[64] = g))
            : (g = G[64]),
            (p =
              null != r &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("dt", {
                    children: (0, a.jsx)(u.A, { id: "merchantSettings.completed", defaultMessage: "Completed" }),
                  }),
                  (0, a.jsx)("dd", { children: $.formatDate(r, { dateStyle: "medium", timeStyle: "short" }) }),
                ],
              })))
        }
        ;((G[21] = $),
          (G[22] = V),
          (G[23] = Y),
          (G[24] = et),
          (G[25] = X),
          (G[26] = H.completed_at),
          (G[27] = H.source),
          (G[28] = H.started_at),
          (G[29] = H.status),
          (G[30] = H.timestamp),
          (G[31] = J?.completed_at),
          (G[32] = J?.status),
          (G[33] = Q),
          (G[34] = d),
          (G[35] = m),
          (G[36] = g),
          (G[37] = p),
          (G[38] = x),
          (G[39] = y),
          (G[40] = _),
          (G[41] = j),
          (G[42] = b),
          (G[43] = S),
          (G[44] = v),
          (G[45] = A))
      } else
        ((d = G[34]),
          (m = G[35]),
          (g = G[36]),
          (p = G[37]),
          (x = G[38]),
          (y = G[39]),
          (_ = G[40]),
          (j = G[41]),
          (b = G[42]),
          (S = G[43]),
          (v = G[44]),
          (A = G[45]))
      if (j !== Symbol.for("react.early_return_sentinel")) return j
      ;(G[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (0, a.jsx)("dt", {
            children: (0, a.jsx)(u.A, { id: "merchantSettings.latency", defaultMessage: "End-to-end latency" }),
          })),
          (G[65] = w))
        : (w = G[65]),
        G[66] !== $ || G[67] !== m
          ? ((N =
              null == m
                ? (0, a.jsx)(u.A, { ...ep.unavailable })
                : $.formatNumber(m / 1e3, { style: "unit", unit: "second", maximumFractionDigits: 1 })),
            (G[66] = $),
            (G[67] = m),
            (G[68] = N))
          : (N = G[68]),
        G[69] !== N
          ? ((M = (0, a.jsxs)("div", { children: [w, (0, a.jsx)("dd", { children: N })] })), (G[69] = N), (G[70] = M))
          : (M = G[70]),
        G[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)("dt", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.freshness",
                defaultMessage: "Freshness since last success",
              }),
            })),
            (G[71] = C))
          : (C = G[71]),
        G[72] !== d || G[73] !== $
          ? ((R =
              null == d
                ? (0, a.jsx)(u.A, { ...ep.unavailable })
                : $.formatNumber(d / 1e3, { style: "unit", unit: "second", maximumFractionDigits: 0 })),
            (G[72] = d),
            (G[73] = $),
            (G[74] = R))
          : (R = G[74]),
        G[75] !== R
          ? ((k = (0, a.jsxs)("div", { children: [C, (0, a.jsx)("dd", { children: R })] })), (G[75] = R), (G[76] = k))
          : (k = G[76]),
        G[77] !== g ||
        G[78] !== p ||
        G[79] !== M ||
        G[80] !== k ||
        G[81] !== b ||
        G[82] !== S ||
        G[83] !== v ||
        G[84] !== A
          ? ((T = (0, a.jsxs)("dl", { className: b, children: [S, v, A, g, p, M, k] })),
            (G[77] = g),
            (G[78] = p),
            (G[79] = M),
            (G[80] = k),
            (G[81] = b),
            (G[82] = S),
            (G[83] = v),
            (G[84] = A),
            (G[85] = T))
          : (T = G[85]),
        G[86] !== x || G[87] !== y || G[88] !== T
          ? ((I = (0, a.jsxs)("div", { className: x, children: [y, T] })),
            (G[86] = x),
            (G[87] = y),
            (G[88] = T),
            (G[89] = I))
          : (I = G[89]))
      let es = J?.status_message ?? H.status_message ?? H.message ?? H.detail
      return (
        G[90] !== es
          ? ((P = (0, a.jsx)("p", { className: "text-sm text-secondary", children: es })), (G[90] = es), (G[91] = P))
          : (P = G[91]),
        G[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, a.jsx)("summary", {
              className: "cursor-interaction text-sm font-semibold",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.runIdentifiers", defaultMessage: "Identifiers" }),
            })),
            (G[92] = D))
          : (D = G[92]),
        G[93] !== H.detail ||
        G[94] !== H.dimensions ||
        G[95] !== H.feed_id ||
        G[96] !== H.feed_key ||
        G[97] !== H.run_id ||
        G[98] !== H.temporal ||
        G[99] !== J?.detail ||
        G[100] !== J?.temporal
          ? ((E = JSON.stringify(
              {
                feed_id: H.feed_id,
                run_id: H.run_id,
                feed_key: H.feed_key,
                dimensions: H.dimensions,
                temporal: J?.temporal ?? H.temporal,
                detail: J?.detail ?? H.detail,
              },
              null,
              2,
            )),
            (G[93] = H.detail),
            (G[94] = H.dimensions),
            (G[95] = H.feed_id),
            (G[96] = H.feed_key),
            (G[97] = H.run_id),
            (G[98] = H.temporal),
            (G[99] = J?.detail),
            (G[100] = J?.temporal),
            (G[101] = E))
          : (E = G[101]),
        G[102] !== E
          ? ((L = (0, a.jsxs)("details", {
              className: "rounded-lg border border-subtle p-4",
              children: [D, (0, a.jsx)("pre", { className: "overflow-x-auto text-sm", children: E })],
            })),
            (G[102] = E),
            (G[103] = L))
          : (L = G[103]),
        G[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, a.jsx)("h3", {
              className: "text-sm font-semibold",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.volumeOutcome", defaultMessage: "Volume & outcome" }),
            })),
            (G[104] = q))
          : (q = G[104]),
        G[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = [
              "records_received",
              "records_processed",
              "records_succeeded",
              "records_failed",
              "error_rate",
              "retry_count",
            ]),
            (G[105] = B))
          : (B = G[105]),
        G[106] !== $ || G[107] !== ee
          ? ((z = (0, a.jsxs)("div", {
              className: "rounded-lg border border-subtle p-4",
              children: [
                q,
                (0, a.jsx)("dl", {
                  className: "mt-3 grid gap-3 text-sm sm:grid-cols-2",
                  children: B.map((e) => {
                    let t = ep[e],
                      s = ee?.[e]
                    if ("error_rate" === e && null == s) {
                      let e = ee?.records_processed ?? ee?.records_received
                      s = e && e > 0 && ee?.records_failed != null ? ee.records_failed / e : null
                    }
                    return (0, a.jsxs)(
                      "div",
                      {
                        children: [
                          (0, a.jsx)("dt", { children: (0, a.jsx)(u.A, { ...t }) }),
                          (0, a.jsx)("dd", {
                            children:
                              null != s && Number.isFinite(s)
                                ? $.formatNumber(
                                    s,
                                    "error_rate" === e ? { style: "percent", maximumFractionDigits: 1 } : void 0,
                                  )
                                : (0, a.jsx)(u.A, {
                                    id: "merchantSettings.unavailable",
                                    defaultMessage: "Unavailable",
                                  }),
                          }),
                        ],
                      },
                      e,
                    )
                  }),
                }),
              ],
            })),
            (G[106] = $),
            (G[107] = ee),
            (G[108] = z))
          : (z = G[108]),
        G[109] !== _ || G[110] !== I || G[111] !== P || G[112] !== L || G[113] !== z
          ? ((O = (0, a.jsxs)("div", { className: _, children: [I, P, L, z] })),
            (G[109] = _),
            (G[110] = I),
            (G[111] = P),
            (G[112] = L),
            (G[113] = z),
            (G[114] = O))
          : (O = G[114]),
        O
      )
    }
    let ep = (0, L.YK)({
      received: { id: "merchantSettings.runReceived", defaultMessage: "Received" },
      processing: { id: "merchantSettings.runProcessing", defaultMessage: "Processing" },
      completed: { id: "merchantSettings.runCompleted", defaultMessage: "Completed" },
      completed_with_errors: { id: "merchantSettings.runCompletedWithErrors", defaultMessage: "Completed with errors" },
      skipped: { id: "merchantSettings.runSkipped", defaultMessage: "Skipped" },
      failed: { id: "merchantSettings.runFailed", defaultMessage: "Failed" },
      ingesting: { id: "merchantSettings.runIngesting", defaultMessage: "Ingesting" },
      ingestion_error: { id: "merchantSettings.runIngestionError", defaultMessage: "Ingestion error" },
      processing_error: { id: "merchantSettings.runProcessingError", defaultMessage: "Processing error" },
      success: { id: "merchantSettings.runSuccess", defaultMessage: "Success" },
      records_received: { id: "merchantSettings.receivedRows", defaultMessage: "Records received" },
      records_processed: { id: "merchantSettings.processedRows", defaultMessage: "Records processed" },
      records_succeeded: { id: "merchantSettings.succeededRows", defaultMessage: "Records succeeded" },
      records_failed: { id: "merchantSettings.failedRows", defaultMessage: "Records failed" },
      error_rate: { id: "merchantSettings.errorRate", defaultMessage: "Error rate" },
      retry_count: { id: "merchantSettings.retryCount", defaultMessage: "Retry count" },
      all: { id: "merchantSettings.allSources", defaultMessage: "All sources" },
      file_upload: { id: "merchantSettings.fileSource", defaultMessage: "Uploaded file" },
      hosted_url: { id: "merchantSettings.urlSource", defaultMessage: "Hosted URL" },
      sftp: { id: "merchantSettings.sftpSource", defaultMessage: "SFTP" },
      unknown: { id: "merchantSettings.unknownSource", defaultMessage: "Unknown source" },
      unavailable: { id: "merchantSettings.unavailable", defaultMessage: "Unavailable" },
    })
    var ex = s("uuN8"),
      ey = s("EShr"),
      e_ = s("aepO")
    function ej(e) {
      let t,
        s,
        l,
        r,
        i,
        o,
        d = (0, n.c)(18),
        { title: c, description: u, children: m, compact: f, activity: h } = e,
        g = void 0 !== f && f,
        p = void 0 !== h && h,
        x = null == u && "mb-6",
        y = null != u && (g ? "mb-3" : "mb-4")
      ;(d[0] !== x || d[1] !== y ? ((t = (0, D.A)(x, y)), (d[0] = x), (d[1] = y), (d[2] = t)) : (t = d[2]),
        d[3] !== c
          ? ((s = (0, a.jsx)("h2", { className: "text-lg font-semibold", children: c })), (d[3] = c), (d[4] = s))
          : (s = d[4]),
        d[5] !== p || d[6] !== u
          ? ((l =
              null != u &&
              (0, a.jsx)("p", {
                className: p ? "mt-1 text-sm text-secondary" : "mt-2 text-sm text-secondary",
                children: u,
              })),
            (d[5] = p),
            (d[6] = u),
            (d[7] = l))
          : (l = d[7]),
        d[8] !== t || d[9] !== s || d[10] !== l
          ? ((r = (0, a.jsxs)("div", { className: t, children: [s, l] })),
            (d[8] = t),
            (d[9] = s),
            (d[10] = l),
            (d[11] = r))
          : (r = d[11]))
      let _ = g ? "flex flex-col gap-3" : "flex flex-col gap-4"
      return (
        d[12] !== m || d[13] !== _
          ? ((i = (0, a.jsx)("div", { className: _, children: m })), (d[12] = m), (d[13] = _), (d[14] = i))
          : (i = d[14]),
        d[15] !== i || d[16] !== r
          ? ((o = (0, a.jsxs)("section", {
              className: "min-w-0 rounded-lg border border-subtle bg-surface-card p-5 shadow-sm",
              children: [r, i],
            })),
            (d[15] = i),
            (d[16] = r),
            (d[17] = o))
          : (o = d[17]),
        o
      )
    }
    function eb(e) {
      let t,
        s,
        l,
        r = (0, n.c)(5),
        { feedId: i, configured: o } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(u.A, { id: "merchantSettings.sftp", defaultMessage: "SFTP" })),
            (s = (0, a.jsx)(u.A, {
              id: "merchantSettings.sftpDescription",
              defaultMessage:
                "Use SFTP for large feeds or multiple files. Connection details appear once access is enabled.",
            })),
            (r[0] = t),
            (r[1] = s))
          : ((t = r[0]), (s = r[1])),
        r[2] !== o || r[3] !== i
          ? ((l = (0, a.jsx)(ej, {
              compact: !0,
              title: t,
              description: s,
              children: (0, a.jsx)(eS, { feedId: i, configured: o }),
            })),
            (r[2] = o),
            (r[3] = i),
            (r[4] = l))
          : (l = r[4]),
        l
      )
    }
    function eS(e) {
      let t,
        s,
        l,
        o,
        m,
        g,
        p,
        x,
        y,
        j,
        S,
        v,
        w,
        N,
        M,
        C,
        R,
        I,
        P,
        D,
        E,
        L,
        q,
        B,
        z,
        O = (0, n.c)(88),
        { feedId: G, configured: H } = e,
        K = (0, c.A)(),
        { accountId: V, userId: $ } = (0, f.As)()
      O[0] !== V || O[1] !== G || O[2] !== $
        ? ((t = { accountId: V, userId: $, feedId: G }), (O[0] = V), (O[1] = G), (O[2] = $), (O[3] = t))
        : (t = O[3])
      let Y = t,
        [Z, W] = (0, d.useState)(!1),
        [J, Q] = (0, d.useState)(""),
        [X, ee] = (0, d.useState)(null),
        [et, es] = (0, d.useState)("idle")
      ;(O[4] !== V || O[5] !== G || O[6] !== $
        ? ((s = ["merchant-sftp", $, V, G]), (O[4] = V), (O[5] = G), (O[6] = $), (O[7] = s))
        : (s = O[7]),
        O[8] !== G || O[9] !== Y
          ? ((l =
              null == G
                ? U.hT
                : (e) => {
                    let { signal: t } = e
                    return h.Request.safeGet("/shopping/feeds/{feed_id}/sftp-access", {
                      parameters: { path: { feed_id: G } },
                      signal: t,
                      expectedErrorStatuses: [403],
                    }).catch(T(Y, "sftp_details", t))
                  }),
            (O[8] = G),
            (O[9] = Y),
            (O[10] = l))
          : (l = O[10]),
        O[11] !== H || O[12] !== s || O[13] !== l
          ? ((o = { queryKey: s, queryFn: l, enabled: H, staleTime: 3e4, gcTime: 0, retry: !1 }),
            (O[11] = H),
            (O[12] = s),
            (O[13] = l),
            (O[14] = o))
          : (o = O[14]))
      let { data: ea, isFetching: en, error: el, refetch: er } = (0, r.I)(o)
      O[15] !== G
        ? ((m = {
            mutationFn: () => {
              if (null == G) throw Error("No merchant selected")
              return h.Request.safePost("/shopping/feeds/{feed_id}/sftp-access/password-reset", {
                parameters: { path: { feed_id: G } },
              })
            },
            gcTime: 0,
          }),
          (O[15] = G),
          (O[16] = m))
        : (m = O[16])
      let ei = (0, i.n)(m)
      O[17] !== G || O[18] !== J
        ? ((g = {
            mutationFn: () => {
              if (null == G) throw Error("No merchant selected")
              return h.Request.safePost("/shopping/feeds/{feed_id}/sftp-access/ssh-key", {
                parameters: { path: { feed_id: G } },
                requestBody: { ssh_public_key: J.trim() },
              })
            },
          }),
          (O[17] = G),
          (O[18] = J),
          (O[19] = g))
        : (g = O[19])
      let eo = (0, i.n)(g),
        ed = ei.error ?? eo.error ?? el,
        ec = ed instanceof A.FetchError && 403 === ed.status
      O[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = async function (e) {
            let t = await (0, e_.lW)(e)
            return (es(t ? "copied" : "failed"), t)
          }),
          (O[20] = p))
        : (p = O[20])
      let eu = p
      ;(O[21] !== ea ||
      O[22] !== ec ||
      O[23] !== el ||
      O[24] !== G ||
      O[25] !== K ||
      O[26] !== en ||
      O[27] !== er ||
      O[28] !== ed
        ? ((x =
            (en || null != ed || null != ea || null == G) &&
            (0, a.jsxs)("div", {
              className: "rounded-lg border border-subtle px-4 py-2 text-sm",
              children: [
                null == G &&
                  (0, a.jsx)("p", {
                    className: "py-3 text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpSelection",
                      defaultMessage: "Select a merchant above to load SFTP details.",
                    }),
                  }),
                null != G &&
                  en &&
                  (0, a.jsx)("p", {
                    className: "py-3 text-secondary",
                    role: "status",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpLoading",
                      defaultMessage: "Loading SFTP details\u2026",
                    }),
                  }),
                null != ed &&
                  (0, a.jsxs)("div", {
                    role: "alert",
                    children: [
                      ec
                        ? (0, a.jsx)(u.A, {
                            id: "merchantSettings.sftpDenied",
                            defaultMessage: "A workspace owner or admin must manage SFTP access",
                          })
                        : (0, a.jsx)(u.A, {
                            id: "merchantSettings.sftpUnavailable",
                            defaultMessage:
                              "SFTP is currently unavailable. Your merchant is saved, and you can still upload files or use a hosted URL. Try again later.",
                          }),
                      !ec &&
                        null != el &&
                        (0, a.jsx)(F, {
                          onClick: () => void er(),
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.retrySftpDetails",
                            defaultMessage: "Try again",
                          }),
                        }),
                    ],
                  }),
                null != ea &&
                  null == el &&
                  (0, a.jsx)("dl", {
                    className: "divide-y divide-border-subtle",
                    children: ["host", "username", "root_path", "port"].map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "flex items-center justify-between gap-4 py-3",
                          children: [
                            (0, a.jsx)("dt", { className: "text-secondary", children: (0, a.jsx)(u.A, { ...eA[e] }) }),
                            (0, a.jsxs)("dd", {
                              className: "flex min-w-0 items-center gap-3",
                              children: [
                                (0, a.jsx)("span", { className: "font-medium break-all select-text", children: ea[e] }),
                                "port" !== e &&
                                  (0, a.jsx)(ex.i, {
                                    iconOnly: !0,
                                    showTooltip: !1,
                                    ariaLabel: K.formatMessage({ id: "merchantSettings.copy", defaultMessage: "Copy" }),
                                    onCopy: () => eu(ea[e]),
                                    icons: { copy: (0, a.jsx)(_.yDG, {}), copied: (0, a.jsx)(_.ALZ, {}) },
                                    renderButton: ev,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
              ],
            })),
          (O[21] = ea),
          (O[22] = ec),
          (O[23] = el),
          (O[24] = G),
          (O[25] = K),
          (O[26] = en),
          (O[27] = er),
          (O[28] = ed),
          (O[29] = x))
        : (x = O[29]),
        O[30] !== ea || O[31] !== el
          ? ((y =
              null != ea &&
              null == el &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpIsolation",
                      defaultMessage:
                        "Access is scoped to your dedicated SFTP container. You can only read or write files within it.",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpGuidance",
                      defaultMessage: "Upload files to your SFTP root folder, without subfolders",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col gap-2 rounded-lg border border-subtle bg-(--color-background-secondary-soft)/40 px-3 py-2 text-xs",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "font-semibold",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sftpSteps",
                          defaultMessage: "Connect in three steps",
                        }),
                      }),
                      (0, a.jsxs)("ol", {
                        className: "flex list-decimal flex-col gap-1 ps-4 text-secondary",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep1",
                              defaultMessage: "Copy the host, username, and root path shown here",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep2",
                              defaultMessage: "Generate a password here, then save it in your SFTP client",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep3",
                              defaultMessage: "Connect and upload to the root path using a flat folder structure",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })),
            (O[30] = ea),
            (O[31] = el),
            (O[32] = y))
          : (y = O[32]),
        O[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)("h4", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.authentication", defaultMessage: "SFTP login method" }),
            })),
            (O[33] = j))
          : (j = O[33]),
        O[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.authenticationHelp",
                defaultMessage: "Choose how this merchant will authenticate when uploading feed files",
              }),
            })),
            (O[34] = S))
          : (S = O[34]))
      let em = Z ? "ssh" : "password"
      ;(O[35] === Symbol.for("react.memo_cache_sentinel") ? ((v = (e) => W("ssh" === e)), (O[35] = v)) : (v = O[35]),
        O[36] !== K
          ? ((w = K.formatMessage({
              id: "merchantSettings.authenticationChoice",
              defaultMessage: "SFTP login method",
            })),
            (O[36] = K),
            (O[37] = w))
          : (w = O[37]))
      let ef = ei.isPending || eo.isPending
      ;(O[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (0, a.jsx)(u.A, { id: "merchantSettings.passwordMethod", defaultMessage: "Username/password" })),
          (O[38] = N))
        : (N = O[38]),
        O[39] !== ef ? ((M = { id: "password", disabled: ef, label: N }), (O[39] = ef), (O[40] = M)) : (M = O[40]))
      let eh = ei.isPending || eo.isPending
      return (
        O[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(u.A, { id: "merchantSettings.sshMethod", defaultMessage: "SSH key" })), (O[41] = C))
          : (C = O[41]),
        O[42] !== eh ? ((R = { id: "ssh", disabled: eh, label: C }), (O[42] = eh), (O[43] = R)) : (R = O[43]),
        O[44] !== M || O[45] !== R ? ((I = [M, R]), (O[44] = M), (O[45] = R), (O[46] = I)) : (I = O[46]),
        O[47] !== em || O[48] !== w || O[49] !== I
          ? ((P = (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                j,
                S,
                (0, a.jsx)(ey.T, {
                  size: "dialog",
                  selectedColor: "primary",
                  unselectedColor: "ghostActive",
                  selectedId: em,
                  onSelect: v,
                  ariaLabel: w,
                  options: I,
                }),
              ],
            })),
            (O[47] = em),
            (O[48] = w),
            (O[49] = I),
            (O[50] = P))
          : (P = O[50]),
        O[51] !== ec ||
        O[52] !== G ||
        O[53] !== K ||
        O[54] !== en ||
        O[55] !== X ||
        O[56] !== er ||
        O[57] !== ei ||
        O[58] !== Y ||
        O[59] !== Z ||
        O[60] !== eo
          ? ((D =
              !Z &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpPasswordNote",
                      defaultMessage: "Passwords are shown once when generated. Copy them immediately.",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-1 flex flex-col items-start gap-4 border-t border-subtle pt-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-sm font-semibold",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.passwordTitle",
                              defaultMessage: "Generate password",
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xs text-secondary",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.passwordDescription",
                              defaultMessage: "Generate a password for SFTP access. You will only see it once.",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(F, {
                        size: "dialog",
                        loading: ei.isPending,
                        disabled: null == G || en || ec || eo.isPending,
                        onClick: () => {
                          ;(ee(null),
                            es("idle"),
                            eo.reset(),
                            ei.mutate(void 0, {
                              onError: (e) => k(Y, "sftp_password", e),
                              onSuccess: (e) => {
                                ;(ee(e.password), er())
                              },
                            }))
                        },
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.resetPassword",
                          defaultMessage: "Generate password",
                        }),
                      }),
                      null != X &&
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, a.jsx)("code", { className: "break-all select-text", children: X }),
                            (0, a.jsx)(ex.i, {
                              variant: "secondaryAction",
                              ariaLabel: K.formatMessage(eA.copyPassword),
                              buttonText: K.formatMessage(eA.copyPassword),
                              onCopy: () => eu(X),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              })),
            (O[51] = ec),
            (O[52] = G),
            (O[53] = K),
            (O[54] = en),
            (O[55] = X),
            (O[56] = er),
            (O[57] = ei),
            (O[58] = Y),
            (O[59] = Z),
            (O[60] = eo),
            (O[61] = D))
          : (D = O[61]),
        O[62] !== ec ||
        O[63] !== G ||
        O[64] !== K ||
        O[65] !== en ||
        O[66] !== J ||
        O[67] !== er ||
        O[68] !== ei ||
        O[69] !== Y ||
        O[70] !== Z ||
        O[71] !== eo
          ? ((E =
              Z &&
              (0, a.jsxs)("form", {
                className: "mt-1 flex flex-col items-start gap-3 border-t border-subtle pt-4",
                onSubmit: (e) => {
                  ;(e.preventDefault(),
                    ei.reset(),
                    eo.mutate(void 0, {
                      onError: (e) => k(Y, "sftp_ssh_key", e),
                      onSuccess: () => {
                        ;(ee(null), Q(""), er())
                      },
                    }))
                },
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-sm font-semibold",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysTitle",
                          defaultMessage: "Set SSH public keys",
                        }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs text-secondary",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysReplacementDescription",
                          defaultMessage:
                            "Paste up to 10 OpenSSH public keys, one per line. Saving replaces all existing keys and disables password authentication. Include every key that should retain access.",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("label", {
                    className: "flex w-full flex-col gap-1 text-sm font-medium",
                    children: [
                      (0, a.jsx)(u.A, { id: "merchantSettings.sshKeys", defaultMessage: "SSH public keys" }),
                      (0, a.jsx)(b.TM, {
                        variant: "code",
                        name: "sftp-public-key",
                        disabled: null == G || en || ec || eo.isPending || ei.isPending,
                        placeholder: K.formatMessage({
                          id: "merchantSettings.sshKeyPlaceholder",
                          defaultMessage: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ...",
                        }),
                        value: J,
                        required: !0,
                        onChange: (e) => {
                          ;(Q(e.target.value), eo.reset())
                        },
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-1.5 text-xs font-normal text-secondary",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysHelp",
                          defaultMessage:
                            "Paste up to 10 public keys, one per line. Keep the matching private keys in your SFTP clients.",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(F, {
                    type: "submit",
                    size: "dialog",
                    loading: eo.isPending,
                    disabled: null == G || en || ec || !J.trim() || ei.isPending,
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.replaceKeys",
                      defaultMessage: "Replace SSH keys",
                    }),
                  }),
                ],
              })),
            (O[62] = ec),
            (O[63] = G),
            (O[64] = K),
            (O[65] = en),
            (O[66] = J),
            (O[67] = er),
            (O[68] = ei),
            (O[69] = Y),
            (O[70] = Z),
            (O[71] = eo),
            (O[72] = E))
          : (E = O[72]),
        O[73] !== eo.isSuccess
          ? ((L =
              eo.isSuccess &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.keysSaved",
                  defaultMessage: "SSH public keys saved",
                }),
              })),
            (O[73] = eo.isSuccess),
            (O[74] = L))
          : (L = O[74]),
        O[75] !== et
          ? ((q =
              "copied" === et &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, { id: "merchantSettings.copied", defaultMessage: "Copied" }),
              })),
            (O[75] = et),
            (O[76] = q))
          : (q = O[76]),
        O[77] !== et
          ? ((B =
              "failed" === et &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.copyError",
                  defaultMessage: "Couldn\u2019t copy. Select and copy the value manually.",
                }),
              })),
            (O[77] = et),
            (O[78] = B))
          : (B = O[78]),
        O[79] !== P ||
        O[80] !== D ||
        O[81] !== E ||
        O[82] !== L ||
        O[83] !== q ||
        O[84] !== B ||
        O[85] !== x ||
        O[86] !== y
          ? ((z = (0, a.jsxs)(a.Fragment, { children: [x, y, P, D, E, L, q, B] })),
            (O[79] = P),
            (O[80] = D),
            (O[81] = E),
            (O[82] = L),
            (O[83] = q),
            (O[84] = B),
            (O[85] = x),
            (O[86] = y),
            (O[87] = z))
          : (z = O[87]),
        z
      )
    }
    function ev(e) {
      return (0, a.jsx)(x.$, { ...e, color: "ghostActive", size: "iconCircleSm" })
    }
    let eA = (0, L.YK)({
      copyPassword: { id: "merchantSettings.copyPassword", defaultMessage: "Copy password" },
      host: { id: "merchantSettings.host", defaultMessage: "Host" },
      username: { id: "merchantSettings.username", defaultMessage: "Username" },
      root_path: { id: "merchantSettings.root", defaultMessage: "Upload path" },
      port: { id: "merchantSettings.port", defaultMessage: "Port" },
    })
    var ew = s("vn1h"),
      eN = s("Sezd"),
      eM = s("OXR4"),
      eC = s("NoEg"),
      eR = s("iSMw"),
      ek = s("U5No")
    function eT(e) {
      let t,
        s,
        r,
        o,
        m,
        g,
        p,
        y,
        _,
        j,
        S,
        v,
        A,
        w,
        N,
        M,
        C,
        k,
        I = (0, n.c)(166),
        { feedId: P } = e,
        D = (0, c.A)(),
        { accountId: F, userId: U } = (0, f.As)(),
        E = (0, l.jE)()
      I[0] !== F || I[1] !== P || I[2] !== U
        ? ((t = { accountId: F, userId: U, feedId: P }), (I[0] = F), (I[1] = P), (I[2] = U), (I[3] = t))
        : (t = I[3])
      let L = t,
        q = (0, d.useRef)(!1),
        [B, z] = (0, d.useState)(null),
        [O, G] = (0, d.useState)(""),
        [H, K] = (0, d.useState)("once")
      I[4] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (I[4] = s)) : (s = I[4])
      let [V, $] = (0, d.useState)(s),
        [Y, Z] = (0, d.useState)(!1),
        [W, J] = (0, d.useState)("csv.gz"),
        [Q, X] = (0, d.useState)(!1),
        et = (0, d.useRef)(null),
        es = (0, d.useRef)(null)
      ;(I[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = () => () => es.current?.abort()), (o = []), (I[5] = r), (I[6] = o))
        : ((r = I[5]), (o = I[6])),
        (0, d.useEffect)(r, o),
        I[7] !== O
          ? ((g = O.trim()),
            (m = URL.canParse(g) && "https:" === new URL(g).protocol),
            (I[7] = O),
            (I[8] = m),
            (I[9] = g))
          : ((m = I[8]), (g = I[9])))
      let ea = m
      I[10] !== V ? ((p = Object.fromEntries(V.filter(eD).map(eP))), (I[10] = V), (I[11] = p)) : (p = I[11])
      let en = p
      I[12] !== Y || I[13] !== P || I[14] !== B || I[15] !== W || I[16] !== en || I[17] !== L || I[18] !== g
        ? ((y = {
            mutationFn: async () => {
              if (null == P) throw Error("No merchant selected")
              es.current = new AbortController()
              let e = es.current.signal,
                t =
                  null == B
                    ? null
                    : await (0, eR.gN)(B, void 0, void 0, e).catch((t) => {
                        throw (
                          e.aborted || R(L, "file_validate", t instanceof eR.tx ? "invalid_jsonl" : "invalid_input"),
                          t
                        )
                      })
              return (
                e.throwIfAborted(),
                h.Request.safePost("/shopping/feeds/{feed_id}/validate", {
                  parameters: { path: { feed_id: P } },
                  signal: e,
                  requestBody: {
                    source: null == B ? "hosted_url" : "file_upload",
                    source_url: null == B ? g : void 0,
                    file_name: B?.name,
                    sample_rows: t?.sampleRows,
                    file_format_hint: t?.fileFormatHint ?? (Y ? W : void 0),
                    sample_limit: 100,
                    headers: null == B ? en : void 0,
                    require_supported_filename: null != B || !Y,
                  },
                }).catch(T(L, null == B ? "hosted_validate" : "file_validate", e))
              )
            },
            gcTime: 0,
          }),
          (I[12] = Y),
          (I[13] = P),
          (I[14] = B),
          (I[15] = W),
          (I[16] = en),
          (I[17] = L),
          (I[18] = g),
          (I[19] = y))
        : (y = I[19])
      let el = (0, i.n)(y)
      I[20] !== el.data || I[21] !== el.isSuccess
        ? ((_ = el.isSuccess && (0, ek.i)(el.data)), (I[20] = el.data), (I[21] = el.isSuccess), (I[22] = _))
        : (_ = I[22])
      let er = _
      I[23] !== F ||
      I[24] !== Y ||
      I[25] !== P ||
      I[26] !== B ||
      I[27] !== H ||
      I[28] !== E ||
      I[29] !== en ||
      I[30] !== L ||
      I[31] !== g ||
      I[32] !== U ||
      I[33] !== er
        ? ((j = {
            mutationFn: async () => {
              if (null == P) throw Error("No merchant selected")
              if (!er) throw Error("Validate the selected source before submitting")
              es.current = new AbortController()
              let e = es.current.signal
              if (null == B && "once" !== H)
                return (
                  await h.Request.safePost("/shopping/feeds/{feed_id}/schedule", {
                    parameters: { path: { feed_id: P } },
                    requestBody: { frequency: H, feed_type: "snapshot", source_url: g, headers: en, enabled: !0 },
                    signal: e,
                  }).catch(T(L, "hosted_schedule", e)),
                  "scheduled"
                )
              let t = await h.Request.safePost("/shopping/feeds/{feed_id}/runs", {
                parameters: { path: { feed_id: P } },
                requestBody: {
                  source: null == B ? "hosted_url" : "file_upload",
                  feed_type: "snapshot",
                  file_name: B?.name,
                  source_url: null == B ? g : void 0,
                  headers: null == B ? en : void 0,
                  require_supported_filename: null != B || !Y,
                },
                signal: e,
              }).catch(T(L, null == B ? "hosted_run_create" : "file_run_create", e))
              if ((e.throwIfAborted(), null != B)) {
                if (!t.upload_url)
                  throw (R(L, "file_transfer", "service_unavailable"), Error("Missing feed upload URL"))
                let s = B.size >= 0x40000000 ? 0x2000000 : 8388608
                try {
                  await new ew.wG(t.upload_url).uploadData(B, {
                    blockSize: s,
                    maxSingleShotSize: s,
                    concurrency: 4,
                    abortSignal: e,
                    blobHTTPHeaders: B.type ? { blobContentType: B.type } : void 0,
                  })
                } catch (t) {
                  throw (
                    e.aborted ||
                      (t instanceof Error && "AbortError" === t.name) ||
                      R(
                        L,
                        "file_transfer",
                        (function (e) {
                          if ("object" != typeof e || null == e) return "request_failed"
                          if ("statusCode" in e && "number" == typeof e.statusCode && e.statusCode >= 100) {
                            let t = e.statusCode
                            return 401 === t || 403 === t
                              ? "access_denied"
                              : 429 === t
                                ? "rate_limited"
                                : t >= 500 && t < 600
                                  ? "service_unavailable"
                                  : "request_failed"
                          }
                          return "code" in e &&
                            "string" == typeof e.code &&
                            [
                              "REQUEST_SEND_ERROR",
                              "ECONNRESET",
                              "ECONNREFUSED",
                              "ENETUNREACH",
                              "ENOTFOUND",
                              "ETIMEDOUT",
                              "EAI_AGAIN",
                              "EHOSTUNREACH",
                            ].includes(e.code)
                            ? "network"
                            : "request_failed"
                        })(t),
                      ),
                    t
                  )
                }
                ;(e.throwIfAborted(), R(L, "file_transfer", null))
              }
              return (
                e.throwIfAborted(),
                await h.Request.safePost("/shopping/feeds/{feed_id}/runs/{run_id}/submit", {
                  parameters: { path: { feed_id: P, run_id: eo(t.run_id) }, query: { feed_type: "snapshot" } },
                  signal: e,
                }).catch(T(L, "feed_submit", e)),
                await E.invalidateQueries({ queryKey: ["merchant-runs", U, F, P] }),
                "submitted"
              )
            },
            gcTime: 0,
          }),
          (I[23] = F),
          (I[24] = Y),
          (I[25] = P),
          (I[26] = B),
          (I[27] = H),
          (I[28] = E),
          (I[29] = en),
          (I[30] = L),
          (I[31] = g),
          (I[32] = U),
          (I[33] = er),
          (I[34] = j))
        : (j = I[34])
      let ei = (0, i.n)(j),
        ed = ei.isPending || el.isPending
      if (
        I[35] !== Y ||
        I[36] !== ed ||
        I[37] !== P ||
        I[38] !== B ||
        I[39] !== Q ||
        I[40] !== H ||
        I[41] !== V ||
        I[42] !== W ||
        I[43] !== D ||
        I[44] !== L ||
        I[45] !== ei ||
        I[46] !== g ||
        I[47] !== O ||
        I[48] !== ea ||
        I[49] !== el ||
        I[50] !== er
      ) {
        let e,
          t,
          s,
          n,
          l,
          r,
          i,
          o,
          d,
          c,
          m,
          f,
          h,
          p,
          y,
          _,
          j,
          C,
          k,
          T,
          F,
          U,
          E,
          en,
          eo,
          ec,
          eu,
          em,
          ef,
          eh,
          eg,
          ep,
          ex,
          e_,
          eb,
          eS,
          ev,
          eA,
          ew,
          eR = function (e) {
            let t = "file" === e ? null != B : null == B,
              s = "file" === e ? null != B : ea
            return (0, a.jsxs)("div", {
              className: "flex flex-col gap-4",
              role: "group",
              "aria-label":
                "file" === e
                  ? D.formatMessage({ id: "merchantSettings.submitTitle", defaultMessage: "Manual upload" })
                  : D.formatMessage({ id: "merchantSettings.hostedUrlTitle", defaultMessage: "Hosted URL" }),
              children: [
                null == P &&
                  (0, a.jsx)("p", {
                    className: "text-sm text-caution select-none",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.selectBeforeSubmit",
                      defaultMessage: "Select a merchant above before validating or submitting a feed",
                    }),
                  }),
                t &&
                  s &&
                  el.isIdle &&
                  (0, a.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.validationRequired",
                      defaultMessage:
                        "Validate this source before submitting or scheduling it. Fix any reported errors, then validate again.",
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    (0, a.jsx)(x.$, {
                      color: "primary",
                      size: "dialog",
                      loading: t && ei.isPending,
                      disabled: null == P || !t || !s || ed || !er,
                      onClick: () => ei.mutate(),
                      children: (0, a.jsx)(u.A, { id: "merchantSettings.submit", defaultMessage: "Submit feed" }),
                    }),
                    (0, a.jsx)(x.$, {
                      color: "outlineCard",
                      size: "dialog",
                      loading: t && el.isPending,
                      disabled: null == P || !t || !s || ed,
                      onClick: () => el.mutate(),
                      children: (0, a.jsx)(u.A, { id: "merchantSettings.validate", defaultMessage: "Validate" }),
                    }),
                    t &&
                      ed &&
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        onClick: () => es.current?.abort(),
                        children: (0, a.jsx)(u.A, { id: "merchantSettings.cancel", defaultMessage: "Cancel" }),
                      }),
                  ],
                }),
                t &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      ei.isSuccess &&
                        (0, a.jsx)("p", {
                          role: "status",
                          children:
                            "scheduled" === ei.data
                              ? (0, a.jsx)(u.A, {
                                  id: "merchantSettings.scheduled",
                                  defaultMessage: "Feed schedule saved",
                                })
                              : (0, a.jsx)(u.A, {
                                  id: "merchantSettings.submitted",
                                  defaultMessage: "Submission received. Processing will begin shortly.",
                                }),
                        }),
                      ei.isError &&
                        (0, a.jsx)("p", {
                          className: "text-danger",
                          role: "alert",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.submissionError",
                            defaultMessage: "The feed request did not complete. Check your input and try again.",
                          }),
                        }),
                      el.isError && (0, a.jsx)(eC.FeedValidationError, { error: el.error, source: e }),
                      el.data && (0, a.jsx)(eC.FeedValidationReport, { report: el.data }),
                    ],
                  }),
              ],
            })
          }
        ;((N = "flex min-w-0 flex-col gap-5"),
          I[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, { id: "merchantSettings.submitTitle", defaultMessage: "Manual upload" })),
              (I[57] = e))
            : (e = I[57]),
          I[58] !== ei || I[59] !== el
            ? ((t = () => {
                ;(el.reset(), ei.reset())
              }),
              (I[58] = ei),
              (I[59] = el),
              (I[60] = t))
            : (t = I[60]),
          I[61] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(u.A, { id: "merchantSettings.file", defaultMessage: "Upload a file" })), (I[61] = s))
            : (s = I[61]),
          I[62] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsxs)("span", {
                className: "flex flex-col gap-1",
                children: [
                  s,
                  (0, a.jsx)("span", {
                    className: "text-xs font-normal text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.fileHelp",
                      defaultMessage: "Upload a compressed feed file from your device.",
                    }),
                  }),
                ],
              })),
              (I[62] = n))
            : (n = I[62]),
          I[63] !== D
            ? ((l = D.formatMessage({ id: "merchantSettings.file", defaultMessage: "Upload a file" })),
              (I[63] = D),
              (I[64] = l))
            : (l = I[64]),
          I[65] !== L
            ? ((r = (e) => {
                let t = e.target.files?.[0] ?? null,
                  s = null != t && t.size > 0x200000000 ? "file_too_large" : null,
                  a = null == t || /\.(csv|jsonl)\.gz$/i.test(t.name) ? s : "unsupported_file_type",
                  n = null != a
                ;(null != t && R(L, "file_select", a),
                  X(n),
                  z(n ? null : t),
                  n ? (e.target.value = "") : null != t && G(""))
              }),
              (I[65] = L),
              (I[66] = r))
            : (r = I[66]),
          I[67] !== l || I[68] !== r
            ? ((i = (0, a.jsxs)("label", {
                className: "flex flex-col gap-6 text-sm font-semibold",
                children: [
                  n,
                  (0, a.jsx)("input", {
                    ref: et,
                    className:
                      "w-full rounded-md border border-subtle bg-surface-card px-3 py-2 text-sm font-normal file:me-4 file:rounded-md file:border-0 file:bg-secondary-soft file:px-3 file:py-2 file:text-sm file:font-medium file:text-default",
                    name: "feed-file",
                    "aria-label": l,
                    type: "file",
                    accept: ".csv.gz,.jsonl.gz",
                    onChange: r,
                  }),
                ],
              })),
              (I[67] = l),
              (I[68] = r),
              (I[69] = i))
            : (i = I[69]),
          I[70] !== Q
            ? ((o =
                Q &&
                (0, a.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.fileError",
                    defaultMessage: "Choose a supported compressed feed file no larger than 8 GB",
                  }),
                })),
              (I[70] = Q),
              (I[71] = o))
            : (o = I[71]),
          I[72] !== ed || I[73] !== t || I[74] !== i || I[75] !== o
            ? ((d = (0, a.jsxs)("fieldset", {
                disabled: ed,
                className: "flex flex-col gap-4",
                onChange: t,
                children: [i, o],
              })),
              (I[72] = ed),
              (I[73] = t),
              (I[74] = i),
              (I[75] = o),
              (I[76] = d))
            : (d = I[76]),
          (M = (0, a.jsxs)(ej, { title: e, children: [d, eR("file")] })),
          (S = ej),
          I[77] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, a.jsx)(u.A, { id: "merchantSettings.hostedUrlTitle", defaultMessage: "Hosted URL" })),
              (I[77] = v))
            : (v = I[77]),
          I[78] !== ei || I[79] !== el
            ? ((c = () => {
                ;(el.reset(), ei.reset())
              }),
              (I[78] = ei),
              (I[79] = el),
              (I[80] = c))
            : (c = I[80]),
          I[81] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, a.jsx)(u.A, { id: "merchantSettings.url", defaultMessage: "Provide a hosted URL" })),
              (I[81] = m))
            : (m = I[81]),
          I[82] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (0, a.jsxs)("span", {
                className: "flex flex-col gap-1",
                children: [
                  m,
                  (0, a.jsx)("span", {
                    className: "text-xs font-normal text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.urlHelp",
                      defaultMessage: "Use this if your feed is already hosted online.",
                    }),
                  }),
                ],
              })),
              (I[82] = f))
            : (f = I[82]),
          I[83] !== D
            ? ((h = D.formatMessage({ id: "merchantSettings.hostedUrlLabel", defaultMessage: "Hosted URL" })),
              (I[83] = D),
              (I[84] = h))
            : (h = I[84]),
          I[85] !== D
            ? ((p = D.formatMessage({
                id: "merchantSettings.urlPlaceholder",
                defaultMessage: "https://example.com/catalog.jsonl.gz",
              })),
              (I[85] = D),
              (I[86] = p))
            : (p = I[86]),
          I[87] !== L || I[88] !== g || I[89] !== ea
            ? ((y = () => {
                ;(q.current && g && R(L, "hosted_url", ea ? null : "invalid_url"), (q.current = !1))
              }),
              (I[87] = L),
              (I[88] = g),
              (I[89] = ea),
              (I[90] = y))
            : (y = I[90]),
          I[91] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = (e) => {
                ;((q.current = !0), G(e.target.value), z(null), et.current && (et.current.value = ""), X(!1))
              }),
              (I[91] = _))
            : (_ = I[91]),
          I[92] !== h || I[93] !== p || I[94] !== y || I[95] !== O
            ? ((j = (0, a.jsxs)("label", {
                className: "flex flex-col gap-6 text-sm font-semibold",
                children: [
                  f,
                  (0, a.jsx)(b.pd, {
                    variant: "default",
                    name: "feed-url",
                    "aria-label": h,
                    placeholder: p,
                    type: "url",
                    value: O,
                    onBlur: y,
                    onChange: _,
                  }),
                ],
              })),
              (I[92] = h),
              (I[93] = p),
              (I[94] = y),
              (I[95] = O),
              (I[96] = j))
            : (j = I[96]),
          I[97] !== g || I[98] !== ea
            ? ((C =
                g &&
                !ea &&
                (0, a.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.https",
                    defaultMessage: "Hosted URL must use HTTPS",
                  }),
                })),
              (I[97] = g),
              (I[98] = ea),
              (I[99] = C))
            : (C = I[99]),
          I[100] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (0, a.jsx)("h4", {
                className: "text-xs font-semibold uppercase",
                children: (0, a.jsx)(u.A, { id: "merchantSettings.frequency", defaultMessage: "Run frequency" }),
              })),
              (I[100] = k))
            : (k = I[100]),
          I[101] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.frequencyHelp",
                  defaultMessage: "Choose whether this hosted URL should run once or on a recurring schedule.",
                }),
              })),
              (I[101] = T))
            : (T = I[101]),
          I[102] !== D
            ? ((F = D.formatMessage({ id: "merchantSettings.frequency", defaultMessage: "Run frequency" })),
              (I[102] = D),
              (I[103] = F))
            : (F = I[103]),
          I[104] !== ei || I[105] !== el
            ? ((U = (e) => {
                ;(K(e), "once" !== e && Z(!1), el.reset(), ei.reset())
              }),
              (I[104] = ei),
              (I[105] = el),
              (I[106] = U))
            : (U = I[106]))
        let ek = ed || null != B
        ;(I[107] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)(u.A, { id: "merchantSettings.once", defaultMessage: "Once" })), (I[107] = E))
          : (E = I[107]),
          I[108] !== ek ? ((en = { id: "once", disabled: ek, label: E }), (I[108] = ek), (I[109] = en)) : (en = I[109]))
        let eT = ed || null != B
        ;(I[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (0, a.jsx)(u.A, { id: "merchantSettings.hourly", defaultMessage: "Hourly" })), (I[110] = eo))
          : (eo = I[110]),
          I[111] !== eT
            ? ((ec = { id: "hourly", disabled: eT, label: eo }), (I[111] = eT), (I[112] = ec))
            : (ec = I[112]))
        let eP = ed || null != B
        ;(I[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = (0, a.jsx)(u.A, { id: "merchantSettings.daily", defaultMessage: "Daily" })), (I[113] = eu))
          : (eu = I[113]),
          I[114] !== eP
            ? ((em = { id: "daily", disabled: eP, label: eu }), (I[114] = eP), (I[115] = em))
            : (em = I[115]),
          I[116] !== en || I[117] !== ec || I[118] !== em
            ? ((ef = [en, ec, em]), (I[116] = en), (I[117] = ec), (I[118] = em), (I[119] = ef))
            : (ef = I[119]),
          I[120] !== H || I[121] !== F || I[122] !== U || I[123] !== ef
            ? ((eh = (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  k,
                  T,
                  (0, a.jsx)(ey.T, {
                    className: "gap-2",
                    size: "actionSm",
                    selectedColor: "segmentedSelected",
                    unselectedColor: "outlineCard",
                    ariaLabel: F,
                    selectedId: H,
                    onSelect: U,
                    options: ef,
                  }),
                ],
              })),
              (I[120] = H),
              (I[121] = F),
              (I[122] = U),
              (I[123] = ef),
              (I[124] = eh))
            : (eh = I[124]),
          I[125] === Symbol.for("react.memo_cache_sentinel")
            ? ((eg = (0, a.jsx)(u.A, {
                id: "merchantSettings.httpHeadersTitle",
                defaultMessage: "Advanced: HTTP headers (optional)",
              })),
              (I[125] = eg))
            : (eg = I[125]),
          I[126] === Symbol.for("react.memo_cache_sentinel")
            ? ((ep = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.httpHeadersHelp",
                  defaultMessage:
                    "Leave this blank for a public feed URL. If your feed provider requires headers for access, enter them here, for example Authorization: Bearer YOUR_TOKEN. These are HTTP request headers, not column names in your feed.",
                }),
              })),
              (I[126] = ep))
            : (ep = I[126]),
          I[127] !== V
            ? ((ex = () => $([...V, { id: crypto.randomUUID(), name: "", value: "" }])), (I[127] = V), (I[128] = ex))
            : (ex = I[128]),
          I[129] === Symbol.for("react.memo_cache_sentinel")
            ? ((e_ = (0, a.jsx)(u.A, { id: "merchantSettings.addHeader", defaultMessage: "Add header" })),
              (I[129] = e_))
            : (e_ = I[129]),
          I[130] !== ex
            ? ((eb = (0, a.jsx)("div", {
                children: (0, a.jsx)(x.$, { color: "outlineCard", size: "actionSm", onClick: ex, children: e_ }),
              })),
              (I[130] = ex),
              (I[131] = eb))
            : (eb = I[131]),
          I[132] !== V || I[133] !== ei || I[134] !== el
            ? ((eS = V.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "flex items-end gap-2",
                    children: [
                      (0, a.jsxs)("label", {
                        children: [
                          (0, a.jsx)(u.A, { id: "merchantSettings.header", defaultMessage: "Header" }),
                          (0, a.jsx)(b.pd, {
                            variant: "default",
                            name: `header-${e.id}`,
                            value: e.name,
                            onChange: (t) => $(V.map((s) => (s.id === e.id ? { ...s, name: t.target.value } : s))),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("label", {
                        children: [
                          (0, a.jsx)(u.A, { id: "merchantSettings.headerValue", defaultMessage: "Value" }),
                          (0, a.jsx)(b.pd, {
                            variant: "default",
                            name: `value-${e.id}`,
                            type: "password",
                            autoComplete: "off",
                            value: e.value,
                            onChange: (t) => $(V.map((s) => (s.id === e.id ? { ...s, value: t.target.value } : s))),
                          }),
                        ],
                      }),
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        onClick: () => {
                          ;($(V.filter((t) => t.id !== e.id)), el.reset(), ei.reset())
                        },
                        children: (0, a.jsx)(u.A, { id: "merchantSettings.remove", defaultMessage: "Remove" }),
                      }),
                    ],
                  },
                  e.id,
                ),
              )),
              (I[132] = V),
              (I[133] = ei),
              (I[134] = el),
              (I[135] = eS))
            : (eS = I[135]),
          I[136] !== eb || I[137] !== eS
            ? ((ev = (0, a.jsxs)(eM.J, {
                collapsible: !0,
                defaultOpen: !1,
                showDivider: !1,
                title: eg,
                children: [ep, eb, eS],
              })),
              (I[136] = eb),
              (I[137] = eS),
              (I[138] = ev))
            : (ev = I[138]),
          I[139] !== Y ||
          I[140] !== ed ||
          I[141] !== H ||
          I[142] !== W ||
          I[143] !== D ||
          I[144] !== ei ||
          I[145] !== el
            ? ((eA =
                "once" === H &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative flex items-center gap-2 text-sm",
                      children: [
                        (0, a.jsx)(eN.S, {
                          id: "allow-without-filename",
                          checked: Y,
                          onCheckedChange: (e) => {
                            ;(Z(e), el.reset(), ei.reset())
                          },
                          disabled: ed,
                        }),
                        (0, a.jsx)("label", {
                          htmlFor: "allow-without-filename",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.allowFilename",
                            defaultMessage: "Allow URL without supported filename",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.allowFilenameHelp",
                        defaultMessage:
                          "Only applies to one-time runs and allows URLs without a supported file extension.",
                      }),
                    }),
                    Y &&
                      (0, a.jsx)(ee, {
                        size: "field",
                        showLabel: !0,
                        label: D.formatMessage({
                          id: "merchantSettings.validationFormat",
                          defaultMessage: "Feed file format",
                        }),
                        value: W,
                        disabled: ed,
                        onChange: (e) => {
                          ;(J(e), el.reset(), ei.reset())
                        },
                        options: ["csv.gz", "jsonl.gz", "tsv.gz", "csv", "parquet.gz", "tsv", "parquet"].map(eI),
                      }),
                  ],
                })),
              (I[139] = Y),
              (I[140] = ed),
              (I[141] = H),
              (I[142] = W),
              (I[143] = D),
              (I[144] = ei),
              (I[145] = el),
              (I[146] = eA))
            : (eA = I[146]),
          I[147] !== eh || I[148] !== ev || I[149] !== eA
            ? ((ew = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [eh, ev, eA] })),
              (I[147] = eh),
              (I[148] = ev),
              (I[149] = eA),
              (I[150] = ew))
            : (ew = I[150]),
          I[151] !== ed || I[152] !== c || I[153] !== j || I[154] !== C || I[155] !== ew
            ? ((A = (0, a.jsxs)("fieldset", {
                disabled: ed,
                className: "flex flex-col gap-4",
                onChange: c,
                children: [j, C, ew],
              })),
              (I[151] = ed),
              (I[152] = c),
              (I[153] = j),
              (I[154] = C),
              (I[155] = ew),
              (I[156] = A))
            : (A = I[156]),
          (w = eR("hosted_url")),
          (I[35] = Y),
          (I[36] = ed),
          (I[37] = P),
          (I[38] = B),
          (I[39] = Q),
          (I[40] = H),
          (I[41] = V),
          (I[42] = W),
          (I[43] = D),
          (I[44] = L),
          (I[45] = ei),
          (I[46] = g),
          (I[47] = O),
          (I[48] = ea),
          (I[49] = el),
          (I[50] = er),
          (I[51] = S),
          (I[52] = v),
          (I[53] = A),
          (I[54] = w),
          (I[55] = N),
          (I[56] = M))
      } else ((S = I[51]), (v = I[52]), (A = I[53]), (w = I[54]), (N = I[55]), (M = I[56]))
      return (
        I[157] !== S || I[158] !== v || I[159] !== A || I[160] !== w
          ? ((C = (0, a.jsxs)(S, { title: v, children: [A, w] })),
            (I[157] = S),
            (I[158] = v),
            (I[159] = A),
            (I[160] = w),
            (I[161] = C))
          : (C = I[161]),
        I[162] !== N || I[163] !== M || I[164] !== C
          ? ((k = (0, a.jsxs)("div", { className: N, children: [M, C] })),
            (I[162] = N),
            (I[163] = M),
            (I[164] = C),
            (I[165] = k))
          : (k = I[165]),
        k
      )
    }
    function eI(e) {
      return { value: e, label: e }
    }
    function eP(e) {
      return [e.name.trim(), e.value]
    }
    function eD(e) {
      return e.name.trim()
    }
    let eF = "https://cdn.openai.com/pdf/e5631ed2-f18b-4712-a73f-1410ae280f77/Merchant-Country-Currency-Reference.pdf"
    function eU() {
      let e,
        t,
        s = (0, n.c)(12),
        { accountId: l, userId: r } = (0, f.As)()
      if ((0, o._U)(v.JW, w.p)) {
        let e,
          t = `${r}:${l}`
        return (
          s[0] !== l || s[1] !== t || s[2] !== r
            ? ((e = (0, a.jsx)(eE, { accountId: l, userId: r }, t)), (s[0] = l), (s[1] = t), (s[2] = r), (s[3] = e))
            : (e = s[3]),
          e
        )
      }
      let i = `${r}:${l}`
      return (
        s[4] !== l || s[5] !== r
          ? ((e = (0, a.jsx)(eE, { accountId: l, userId: r })), (s[4] = l), (s[5] = r), (s[6] = e))
          : (e = s[6]),
        s[7] !== l || s[8] !== i || s[9] !== e || s[10] !== r
          ? ((t = (0, a.jsx)(I, { accountId: l, userId: r, children: e }, i)),
            (s[7] = l),
            (s[8] = i),
            (s[9] = e),
            (s[10] = r),
            (s[11] = t))
          : (t = s[11]),
        t
      )
    }
    function eE(e) {
      let t,
        s,
        i,
        o,
        f,
        h,
        g,
        S,
        v,
        w,
        N,
        M,
        C,
        R,
        T,
        I,
        P,
        D,
        U,
        E,
        L,
        q,
        B,
        z,
        O,
        G,
        H,
        K,
        V,
        $,
        Y,
        Z,
        W,
        J,
        Q,
        X,
        es,
        ea = (0, n.c)(128),
        { accountId: en, userId: el } = e,
        er = (0, c.A)(),
        [ei, eo] = (0, d.useState)("runs")
      ea[0] !== er
        ? ((t = er.formatMessage({ id: "merchantSettings.recentRunsTab", defaultMessage: "Recent runs" })),
          (ea[0] = er),
          (ea[1] = t))
        : (t = ea[1])
      let ed = t
      ea[2] !== er
        ? ((s = er.formatMessage({ id: "merchantSettings.issuesTab", defaultMessage: "Issues" })),
          (ea[2] = er),
          (ea[3] = s))
        : (s = ea[3])
      let eu = s,
        [em, ef] = (0, m.ok)(),
        [eh, eg] = (0, d.useState)(""),
        [ep, ex] = (0, d.useState)("newest"),
        [ey, e_] = (0, d.useState)(0),
        [eS, ev] = (0, d.useState)(!1),
        eA = (0, l.jE)()
      ea[4] !== en || ea[5] !== el
        ? ((i = ["merchant-feeds", el, en]), (ea[4] = en), (ea[5] = el), (ea[6] = i))
        : (i = ea[6])
      let ew = i
      ea[7] !== ew ? ((o = { queryKey: ew, queryFn: ez, staleTime: 3e4 }), (ea[7] = ew), (ea[8] = o)) : (o = ea[8])
      let {
          data: eN,
          isPending: eM,
          isError: eC,
          error: eR,
          errorUpdatedAt: ek,
          isFetchedAfterMount: eI,
          refetch: eP,
        } = (0, r.I)(o),
        eD = (0, d.useRef)(0)
      ;(ea[9] !== en || ea[10] !== eR || ea[11] !== ek || ea[12] !== eC || ea[13] !== eI || ea[14] !== el
        ? ((f = () => {
            eC && eI && ek !== eD.current && ((eD.current = ek), k({ accountId: en, userId: el }, "merchant_list", eR))
          }),
          (h = [en, el, eR, ek, eC, eI]),
          (ea[9] = en),
          (ea[10] = eR),
          (ea[11] = ek),
          (ea[12] = eC),
          (ea[13] = eI),
          (ea[14] = el),
          (ea[15] = f),
          (ea[16] = h))
        : ((f = ea[15]), (h = ea[16])),
        (0, d.useEffect)(f, h),
        ea[17] !== eN?.feeds || ea[18] !== eN?.feeds.find || ea[19] !== em
          ? ((g = eN?.feeds.find((e) => e.feed_id === em.get("feed_id"))),
            (ea[17] = eN?.feeds),
            (ea[18] = eN?.feeds.find),
            (ea[19] = em),
            (ea[20] = g))
          : (g = ea[20]))
      let eF = g
      if (
        ea[21] !== eN ||
        ea[22] !== eR ||
        ea[23] !== er ||
        ea[24] !== eC ||
        ea[25] !== eM ||
        ea[26] !== ey ||
        ea[27] !== eP ||
        ea[28] !== eh ||
        ea[29] !== eF?.feed_id ||
        ea[30] !== ef ||
        ea[31] !== ep
      ) {
        let e,
          t,
          s,
          n,
          l,
          r,
          i,
          o,
          d = eN?.feeds
            .filter((e) =>
              [e.merchant_name, e.merchant_slug, e.feed_id].some((e) =>
                e.toLowerCase().includes(eh.trim().toLowerCase()),
              ),
            )
            .sort((e, t) =>
              "name" === ep || "name-desc" === ep
                ? e.merchant_name.localeCompare(t.merchant_name) * ("name" === ep ? 1 : -1)
                : "id" === ep || "id-desc" === ep
                  ? e.feed_id.localeCompare(t.feed_id) * ("id" === ep ? 1 : -1)
                  : (Date.parse(e.created_at) - Date.parse(t.created_at)) * ("oldest" === ep ? 1 : -1),
            ),
          c = Math.max(1, Math.ceil((d?.length ?? 0) / 10)),
          m = Math.min(ey, c - 1)
        ;(ea[43] !== ef
          ? ((e = function (e) {
              ef((t) => {
                let s = new URLSearchParams(t)
                return (null == e ? s.delete("feed_id") : s.set("feed_id", e), s)
              })
            }),
            (ea[43] = ef),
            (ea[44] = e))
          : (e = ea[44]),
          (v = e),
          (I = "h-full overflow-y-auto bg-surface px-6 py-8 text-default"),
          (C = "mx-auto flex w-full max-w-5xl flex-col gap-5"),
          ea[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)("h1", {
                className: "text-2xl font-semibold select-none",
                children: (0, a.jsx)(u.A, { id: "merchantSettings.title", defaultMessage: "Product feed" }),
              })),
              (ea[45] = t))
            : (t = ea[45]),
          ea[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = (0, a.jsxs)("header", {
                className: "flex flex-col gap-2",
                children: [
                  t,
                  (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedSubmissionSubtitle",
                      defaultMessage: "Submit a product feed to keep your catalog up to date",
                    }),
                  }),
                ],
              })),
              (ea[46] = R))
            : (R = ea[46]),
          ea[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(u.A, { id: "merchantSettings.feedFormats.title", defaultMessage: "Supported formats" })),
              (ea[47] = s))
            : (s = ea[47]),
          ea[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("li", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.manual",
                  defaultMessage: "<method>Manual upload</method>: .jsonl.gz or .csv.gz",
                  values: { method: eB },
                }),
              })),
              (ea[48] = n))
            : (n = ea[48]),
          ea[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsx)("li", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.hosted",
                  defaultMessage: "<method>Hosted URL</method>: gzipped JSONL; CSV, TSV or Parquet (gzip optional)",
                  values: { method: eq },
                }),
              })),
              (ea[49] = l))
            : (l = ea[49]),
          ea[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsxs)("ul", {
                className: "flex flex-col gap-1",
                children: [
                  n,
                  l,
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.sftp",
                      defaultMessage: "<method>SFTP</method>: gzipped JSONL; CSV or TSV (gzip optional); Parquet",
                      values: { method: eL },
                    }),
                  }),
                ],
              })),
              (ea[50] = r))
            : (r = ea[50]),
          ea[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.parquet",
                      defaultMessage: "Parquet with internal ZSTD compression keeps the .parquet extension",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.sftpSize",
                      defaultMessage:
                        "For SFTP, we recommend splitting large feeds into files of up to 500,000 records and under 500 MB each",
                    }),
                  }),
                ],
              })),
              (ea[51] = i))
            : (i = ea[51]),
          ea[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsx)(y.G, {
                href: "https://developers.openai.com/commerce/specs/file-upload/products",
                initiator: "open_in_browser_bridge",
                underline: "always",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.specifications",
                  defaultMessage: "Feed specifications",
                }),
              })),
              (ea[52] = o))
            : (o = ea[52]),
          ea[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = (0, a.jsx)(p.l, {
                variant: "callout",
                layout: "vertical",
                title: s,
                content: (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    r,
                    i,
                    (0, a.jsxs)("div", {
                      className: "flex flex-wrap gap-3",
                      children: [
                        o,
                        (0, a.jsx)(y.G, {
                          href: "https://developers.openai.com/commerce/specs/file-upload/overview",
                          initiator: "open_in_browser_bridge",
                          underline: "always",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.feedFormats.uploadGuide",
                            defaultMessage: "Upload guide",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              })),
              (ea[53] = T))
            : (T = ea[53]),
          (S = ej),
          ea[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, a.jsx)(u.A, { id: "merchantSettings.merchants", defaultMessage: "Merchants" })),
              (D = (0, a.jsx)(u.A, {
                id: "merchantSettings.merchantsDescription",
                defaultMessage: "Add a merchant, then select it to configure SFTP access and feed uploads below.",
              })),
              (ea[54] = P),
              (ea[55] = D))
            : ((P = ea[54]), (D = ea[55])),
          ea[56] !== eM
            ? ((w =
                eM &&
                (0, a.jsx)("p", {
                  role: "status",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.loading",
                    defaultMessage: "Loading merchants\u2026",
                  }),
                })),
              (ea[56] = eM),
              (ea[57] = w))
            : (w = ea[57]),
          ea[58] !== eR || ea[59] !== eC || ea[60] !== eP
            ? ((N =
                eC &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-start gap-3 text-sm text-danger",
                  role: "alert",
                  children: [
                    eR instanceof A.FetchError && 403 === eR.status
                      ? (0, a.jsx)(u.A, {
                          id: "merchantSettings.workspaceAccessError",
                          defaultMessage:
                            "Merchant settings are unavailable in this workspace. Switch to an eligible workspace using your profile menu, then try again.",
                        })
                      : (0, a.jsx)(u.A, {
                          id: "merchantSettings.loadError",
                          defaultMessage: "Couldn\u2019t load merchants",
                        }),
                    (0, a.jsx)(x.$, {
                      color: "outlineCard",
                      size: "actionSm",
                      onClick: () => void eP(),
                      children: (0, a.jsx)(u.A, { id: "merchantSettings.retry", defaultMessage: "Try again" }),
                    }),
                  ],
                })),
              (ea[58] = eR),
              (ea[59] = eC),
              (ea[60] = eP),
              (ea[61] = N))
            : (N = ea[61]),
          (M =
            !eM &&
            !eC &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        (0, a.jsx)("h3", {
                          className: "text-sm font-medium",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.saved",
                            defaultMessage: "Saved merchants",
                          }),
                        }),
                        null != d &&
                          d.length > 0 &&
                          (0, a.jsx)("p", {
                            className: "mt-1 text-xs text-secondary",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.resultRange",
                              defaultMessage:
                                "Showing {first}-{last} of {count, plural, one {# merchant} other {# merchants}}",
                              values: { first: 10 * m + 1, last: Math.min((m + 1) * 10, d.length), count: d.length },
                            }),
                          }),
                      ],
                    }),
                    null != eN &&
                      eN.feeds.length > 0 &&
                      (0, a.jsxs)("div", {
                        className: "grid min-w-0 gap-2 sm:w-2/3 sm:grid-cols-[minmax(0,1fr)_12rem]",
                        children: [
                          (0, a.jsxs)("label", {
                            className: "flex min-w-0 flex-col gap-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-xs font-medium",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.searchLabel",
                                  defaultMessage: "Search merchants",
                                }),
                              }),
                              (0, a.jsx)(b.pd, {
                                variant: "default",
                                leadingControl: (0, a.jsx)(_.QmT, { className: "text-tertiary" }),
                                type: "search",
                                name: "merchant-search",
                                value: eh,
                                onChange: (e) => {
                                  ;(eg(e.target.value), e_(0))
                                },
                                placeholder: er.formatMessage({
                                  id: "merchantSettings.search",
                                  defaultMessage: "Search by merchant or feed ID",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-xs font-medium",
                                children: (0, a.jsx)(u.A, { id: "merchantSettings.sort", defaultMessage: "Sort" }),
                              }),
                              (0, a.jsx)(ee, {
                                label: er.formatMessage({ id: "merchantSettings.sort", defaultMessage: "Sort" }),
                                value: ep,
                                onChange: (e) => {
                                  ;(ex(e), e_(0))
                                },
                                options: [
                                  {
                                    value: "newest",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.newest",
                                      defaultMessage: "Newest created",
                                    }),
                                  },
                                  {
                                    value: "oldest",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.oldest",
                                      defaultMessage: "Oldest created",
                                    }),
                                  },
                                  {
                                    value: "name",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.nameAsc",
                                      defaultMessage: "Merchant A\u2013Z",
                                    }),
                                  },
                                  {
                                    value: "name-desc",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.nameDesc",
                                      defaultMessage: "Merchant Z\u2013A",
                                    }),
                                  },
                                  {
                                    value: "id",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.idAsc",
                                      defaultMessage: "Feed ID A\u2013Z",
                                    }),
                                  },
                                  {
                                    value: "id-desc",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.idDesc",
                                      defaultMessage: "Feed ID Z\u2013A",
                                    }),
                                  },
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                d?.length === 0 &&
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col gap-1 rounded-md border border-subtle bg-(--color-background-secondary-soft)/40 px-3 py-3 text-sm",
                    children: [
                      (0, a.jsx)("p", {
                        className: "font-medium",
                        children:
                          eN?.feeds.length === 0
                            ? (0, a.jsx)(u.A, {
                                id: "merchantSettings.noMerchants",
                                defaultMessage: "No merchants yet",
                              })
                            : (0, a.jsx)(u.A, {
                                id: "merchantSettings.noSearchResults",
                                defaultMessage: "No merchants match your search",
                              }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs text-secondary",
                        children:
                          eN?.feeds.length === 0
                            ? (0, a.jsx)(u.A, {
                                id: "merchantSettings.noMerchantsHelpWithoutSftp",
                                defaultMessage:
                                  "Add your first merchant to start uploading feeds. You can set up SFTP separately if needed.",
                              })
                            : (0, a.jsx)(u.A, {
                                id: "merchantSettings.noSearchResultsHelp",
                                defaultMessage: "Try a merchant name or feed ID",
                              }),
                      }),
                    ],
                  }),
                null != d &&
                  d.length > 0 &&
                  (0, a.jsxs)("div", {
                    className: "overflow-hidden rounded-lg border border-subtle",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_10rem_auto] gap-3 bg-(--color-background-secondary-soft)/40 px-3 py-2 text-xs font-medium text-secondary sm:grid",
                        children: [
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.merchantColumn",
                              defaultMessage: "Merchant",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, { id: "merchantSettings.feedColumn", defaultMessage: "Feed ID" }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.createdColumn",
                              defaultMessage: "Created",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "text-end",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.actionColumn",
                              defaultMessage: "Action",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("ul", {
                        className: "divide-y divide-border-subtle",
                        children: d
                          ?.slice(10 * m, (m + 1) * 10)
                          .map((e) =>
                            (0, a.jsxs)(
                              "li",
                              {
                                className:
                                  "grid gap-3 px-3 py-3 text-sm sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_10rem_auto] sm:items-center",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "min-w-0",
                                    children: (0, a.jsx)("p", {
                                      className: "truncate font-medium",
                                      children: e.merchant_name,
                                    }),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "font-mono text-xs break-all text-secondary",
                                    children: e.feed_id,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-secondary",
                                    children: er.formatDate(e.created_at, { dateStyle: "medium", timeStyle: "short" }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex sm:justify-end",
                                    children: (0, a.jsx)(x.$, {
                                      size: "actionSm",
                                      color: "ghostActive",
                                      "aria-pressed": eF?.feed_id === e.feed_id,
                                      onClick: () => v(eF?.feed_id === e.feed_id ? null : e.feed_id),
                                      children:
                                        eF?.feed_id === e.feed_id
                                          ? (0, a.jsx)(u.A, {
                                              id: "merchantSettings.selected",
                                              defaultMessage: "Selected",
                                            })
                                          : (0, a.jsx)(u.A, {
                                              id: "merchantSettings.select",
                                              defaultMessage: "Select",
                                            }),
                                    }),
                                  }),
                                ],
                              },
                              e.feed_id,
                            ),
                          ),
                      }),
                    ],
                  }),
                c > 1 &&
                  (0, a.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-end gap-3 text-xs",
                    children: [
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        disabled: 0 === m,
                        onClick: () => e_(m - 1),
                        children: (0, a.jsx)(u.A, { id: "merchantSettings.previous", defaultMessage: "Previous" }),
                      }),
                      (0, a.jsx)(u.A, {
                        id: "merchantSettings.page",
                        defaultMessage: "Page {page} of {count}",
                        values: { page: m + 1, count: c },
                      }),
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        disabled: m + 1 >= c,
                        onClick: () => e_(m + 1),
                        children: (0, a.jsx)(u.A, { id: "merchantSettings.next", defaultMessage: "Next" }),
                      }),
                    ],
                  }),
              ],
            })),
          (ea[21] = eN),
          (ea[22] = eR),
          (ea[23] = er),
          (ea[24] = eC),
          (ea[25] = eM),
          (ea[26] = ey),
          (ea[27] = eP),
          (ea[28] = eh),
          (ea[29] = eF?.feed_id),
          (ea[30] = ef),
          (ea[31] = ep),
          (ea[32] = S),
          (ea[33] = v),
          (ea[34] = w),
          (ea[35] = N),
          (ea[36] = M),
          (ea[37] = C),
          (ea[38] = R),
          (ea[39] = T),
          (ea[40] = I),
          (ea[41] = P),
          (ea[42] = D))
      } else
        ((S = ea[32]),
          (v = ea[33]),
          (w = ea[34]),
          (N = ea[35]),
          (M = ea[36]),
          (C = ea[37]),
          (R = ea[38]),
          (T = ea[39]),
          (I = ea[40]),
          (P = ea[41]),
          (D = ea[42]))
      ;(ea[62] !== eS || ea[63] !== ew || ea[64] !== eA || ea[65] !== v
        ? ((U =
            eS &&
            (0, a.jsx)(eO, {
              onClose: () => ev(!1),
              onCreated: async (e) => {
                ;(eA.setQueryData(ew, (t) => ({ feeds: [...(t?.feeds ?? []), e] })),
                  v(e.feed_id),
                  ev(!1),
                  await eA.invalidateQueries({ queryKey: ew }))
              },
            })),
          (ea[62] = eS),
          (ea[63] = ew),
          (ea[64] = eA),
          (ea[65] = v),
          (ea[66] = U))
        : (U = ea[66]),
        ea[67] !== eS
          ? ((E =
              !eS &&
              (0, a.jsx)("div", {
                children: (0, a.jsx)(F, {
                  size: "dialog",
                  onClick: () => ev(!0),
                  children: (0, a.jsx)(u.A, { id: "merchantSettings.add", defaultMessage: "Add merchant" }),
                }),
              })),
            (ea[67] = eS),
            (ea[68] = E))
          : (E = ea[68]),
        ea[69] !== S ||
        ea[70] !== w ||
        ea[71] !== N ||
        ea[72] !== M ||
        ea[73] !== U ||
        ea[74] !== E ||
        ea[75] !== P ||
        ea[76] !== D
          ? ((L = (0, a.jsxs)(S, { title: P, description: D, children: [w, N, M, U, E] })),
            (ea[69] = S),
            (ea[70] = w),
            (ea[71] = N),
            (ea[72] = M),
            (ea[73] = U),
            (ea[74] = E),
            (ea[75] = P),
            (ea[76] = D),
            (ea[77] = L))
          : (L = ea[77]),
        ea[78] !== eC || ea[79] !== eM || ea[80] !== em || ea[81] !== eF
          ? ((q =
              !eM &&
              !eC &&
              em.has("feed_id") &&
              !eF &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.unavailableMerchant",
                  defaultMessage:
                    "This merchant is unavailable in the current workspace. Select a merchant from the list.",
                }),
              })),
            (ea[78] = eC),
            (ea[79] = eM),
            (ea[80] = em),
            (ea[81] = eF),
            (ea[82] = q))
          : (q = ea[82]))
      let eU = eF?.feed_id ?? "unselected",
        eE = eF?.feed_id ?? null,
        eG = eF?.sftp_created_at != null
      ea[83] !== eE || ea[84] !== eG
        ? ((B = (0, a.jsx)(eb, { feedId: eE, configured: eG })), (ea[83] = eE), (ea[84] = eG), (ea[85] = B))
        : (B = ea[85])
      let eH = eF?.feed_id ?? null
      ;(ea[86] !== eH ? ((z = (0, a.jsx)(eT, { feedId: eH })), (ea[86] = eH), (ea[87] = z)) : (z = ea[87]),
        ea[88] !== eU || ea[89] !== B || ea[90] !== z
          ? ((O = (0, a.jsxs)(
              "div",
              {
                className: "grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start",
                children: [B, z],
              },
              eU,
            )),
            (ea[88] = eU),
            (ea[89] = B),
            (ea[90] = z),
            (ea[91] = O))
          : (O = ea[91]),
        ea[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, a.jsx)(u.A, { id: "merchantSettings.activity", defaultMessage: "Feed activity" })),
            (H = (0, a.jsx)(u.A, {
              id: "merchantSettings.activityDescription",
              defaultMessage: "Track processing progress, review results, and resolve feed issues.",
            })),
            (ea[92] = G),
            (ea[93] = H))
          : ((G = ea[92]), (H = ea[93])),
        ea[94] !== er
          ? ((K = er.formatMessage({ id: "merchantSettings.activityNavigation", defaultMessage: "Feed activity" })),
            (ea[94] = er),
            (ea[95] = K))
          : (K = ea[95]),
        ea[96] !== ed
          ? ((V = { key: "runs", name: ed, panelId: "merchant-feed-runs-panel" }), (ea[96] = ed), (ea[97] = V))
          : (V = ea[97]),
        ea[98] !== eu
          ? (($ = { key: "issues", name: eu, panelId: "merchant-feed-issues-panel" }), (ea[98] = eu), (ea[99] = $))
          : ($ = ea[99]),
        ea[100] !== V || ea[101] !== $ ? ((Y = [V, $]), (ea[100] = V), (ea[101] = $), (ea[102] = Y)) : (Y = ea[102]),
        ea[103] !== ei || ea[104] !== K || ea[105] !== Y
          ? ((Z = (0, a.jsx)(j.t, { variant: "browse", ariaLabel: K, tabs: Y, selectedKey: ei, onSelect: eo })),
            (ea[103] = ei),
            (ea[104] = K),
            (ea[105] = Y),
            (ea[106] = Z))
          : (Z = ea[106]))
      let eK = "runs" === ei ? "merchant-feed-runs-panel" : "merchant-feed-issues-panel",
        eV = "runs" === ei ? "merchant-feed-runs-panel-tab" : "merchant-feed-issues-panel-tab"
      return (
        ea[107] !== ei || ea[108] !== eF?.feed_id
          ? ((W =
              "runs" === ei
                ? (0, a.jsx)(ec, { feedId: eF?.feed_id ?? null }, eF?.feed_id ?? "unselected")
                : (0, a.jsx)(et, { feedId: eF?.feed_id ?? null }, eF?.feed_id ?? "unselected")),
            (ea[107] = ei),
            (ea[108] = eF?.feed_id),
            (ea[109] = W))
          : (W = ea[109]),
        ea[110] !== eK || ea[111] !== eV || ea[112] !== W
          ? ((J = (0, a.jsx)("div", {
              id: eK,
              role: "tabpanel",
              "aria-labelledby": eV,
              className: "pt-4",
              children: W,
            })),
            (ea[110] = eK),
            (ea[111] = eV),
            (ea[112] = W),
            (ea[113] = J))
          : (J = ea[113]),
        ea[114] !== Z || ea[115] !== J
          ? ((Q = (0, a.jsxs)(ej, { activity: !0, title: G, description: H, children: [Z, J] })),
            (ea[114] = Z),
            (ea[115] = J),
            (ea[116] = Q))
          : (Q = ea[116]),
        ea[117] !== C ||
        ea[118] !== R ||
        ea[119] !== T ||
        ea[120] !== L ||
        ea[121] !== q ||
        ea[122] !== O ||
        ea[123] !== Q
          ? ((X = (0, a.jsxs)("div", { className: C, children: [R, T, L, q, O, Q] })),
            (ea[117] = C),
            (ea[118] = R),
            (ea[119] = T),
            (ea[120] = L),
            (ea[121] = q),
            (ea[122] = O),
            (ea[123] = Q),
            (ea[124] = X))
          : (X = ea[124]),
        ea[125] !== I || ea[126] !== X
          ? ((es = (0, a.jsx)("div", { className: I, children: X })), (ea[125] = I), (ea[126] = X), (ea[127] = es))
          : (es = ea[127]),
        es
      )
    }
    function eL(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function eq(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function eB(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function ez(e) {
      let { signal: t } = e
      return h.Request.safeGet("/shopping/feeds", { signal: t, expectedErrorStatuses: [403] })
    }
    function eO(e) {
      let t,
        s,
        l,
        r,
        o,
        m,
        p,
        y,
        _,
        j,
        v,
        w,
        N,
        M,
        C,
        T,
        I,
        P,
        D,
        U,
        E,
        L,
        q,
        B,
        z,
        O,
        G,
        H,
        K,
        V,
        $,
        Y,
        Z,
        W,
        J,
        Q = (0, n.c)(95),
        { onCreated: X, onClose: ee } = e,
        et = (0, c.A)(),
        { accountId: es, userId: ea } = (0, f.As)(),
        en = (0, d.useRef)(!1),
        [el, ei] = (0, d.useState)("")
      Q[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["US"]), (Q[0] = t)) : (t = Q[0])
      let [eo, ed] = (0, d.useState)(t)
      Q[1] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (Q[1] = s)) : (s = Q[1])
      let [ec, eu] = (0, d.useState)(s),
        em = eo.filter(eV),
        ef = ec.filter(eK),
        eh = em.length > 0 ? "country_invalid" : null,
        eg = 0 === eo.length ? "country_required" : eh,
        ep = null != eg,
        ex = ef.length > 0
      Q[2] !== ep || Q[3] !== ex || Q[4] !== el
        ? ((l = "" !== el.trim() && !ep && !ex), (Q[2] = ep), (Q[3] = ex), (Q[4] = el), (Q[5] = l))
        : (l = Q[5])
      let ey = l
      Q[6] !== eo || Q[7] !== ec || Q[8] !== el
        ? ((r = {
            mutationFn: () =>
              h.Request.safePost("/shopping/feeds", {
                requestBody: { merchant_name: el.trim(), supported_countries: eo, supported_currencies: ec },
              }),
          }),
          (Q[6] = eo),
          (Q[7] = ec),
          (Q[8] = el),
          (Q[9] = r))
        : (r = Q[9])
      let { mutate: e_, isPending: ej, isError: eb, error: eS, reset: ev } = (0, i.n)(r)
      ;(Q[10] !== ev ? ((o = () => ev()), (Q[10] = ev), (Q[11] = o)) : (o = Q[11]),
        Q[12] !== es || Q[13] !== ey || Q[14] !== e_ || Q[15] !== X || Q[16] !== ea
          ? ((m = (e) => {
              ;(e.preventDefault(),
                ey &&
                  e_(void 0, {
                    onSuccess: (e) => void X(e),
                    onError: (e) => k({ accountId: es, userId: ea }, "merchant_create", e),
                  }))
            }),
            (Q[12] = es),
            (Q[13] = ey),
            (Q[14] = e_),
            (Q[15] = X),
            (Q[16] = ea),
            (Q[17] = m))
          : (m = Q[17]),
        Q[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.newMerchant", defaultMessage: "Add merchant" }),
            })),
            (Q[18] = p))
          : (p = Q[18]),
        Q[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(u.A, { id: "merchantSettings.hideAdd", defaultMessage: "Hide" })), (Q[19] = y))
          : (y = Q[19]),
        Q[20] !== ej || Q[21] !== ee
          ? ((_ = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                p,
                (0, a.jsx)(x.$, { color: "ghostActive", size: "actionSm", disabled: ej, onClick: ee, children: y }),
              ],
            })),
            (Q[20] = ej),
            (Q[21] = ee),
            (Q[22] = _))
          : (_ = Q[22]),
        Q[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(u.A, { id: "merchantSettings.requiredName", defaultMessage: "Merchant name *" })),
            (Q[23] = j))
          : (j = Q[23]),
        Q[24] !== et
          ? ((v = et.formatMessage({ id: "merchantSettings.namePlaceholder", defaultMessage: "Acme Hardware" })),
            (Q[24] = et),
            (Q[25] = v))
          : (v = Q[25]),
        Q[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => ei(e.target.value)), (Q[26] = w))
          : (w = Q[26]),
        Q[27] !== el || Q[28] !== v
          ? ((N = (0, a.jsxs)("label", {
              className: "flex flex-col gap-3 text-sm font-medium",
              children: [
                j,
                (0, a.jsx)(b.pd, {
                  variant: "default",
                  name: "merchant-name",
                  placeholder: v,
                  required: !0,
                  value: el,
                  onChange: w,
                }),
              ],
            })),
            (Q[27] = el),
            (Q[28] = v),
            (Q[29] = N))
          : (N = Q[29]),
        Q[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, a.jsx)("h4", {
              className: "text-sm font-semibold",
              children: (0, a.jsx)(u.A, { id: "merchantSettings.feedTargets", defaultMessage: "Feed targets" }),
            })),
            (Q[30] = M))
          : (M = Q[30]),
        Q[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedMarketsReferenceHelp",
                defaultMessage:
                  "Choose target countries and price currencies for this feed. Listed codes do not establish market availability",
              }),
            })),
            (Q[31] = C))
          : (C = Q[31]),
        Q[32] !== et
          ? ((T = et.formatMessage({ id: "merchantSettings.countries", defaultMessage: "Target countries" })),
            (Q[32] = et),
            (Q[33] = T))
          : (T = Q[33]),
        Q[34] !== ev
          ? ((I = (e) => {
              ;((en.current = !0), ed(e), ev())
            }),
            (Q[34] = ev),
            (Q[35] = I))
          : (I = Q[35]),
        Q[36] !== es || Q[37] !== eg || Q[38] !== ea
          ? ((P = () => {
              en.current && (R({ accountId: es, userId: ea }, "merchant_country", eg), (en.current = !1))
            }),
            (Q[36] = es),
            (Q[37] = eg),
            (Q[38] = ea),
            (Q[39] = P))
          : (P = Q[39]),
        Q[40] !== eo || Q[41] !== ep || Q[42] !== ej || Q[43] !== T || Q[44] !== I || Q[45] !== P
          ? ((D = (0, a.jsx)(er, {
              label: T,
              codes: S.D,
              type: "region",
              value: eo,
              disabled: ej,
              invalid: ep,
              describedBy: "merchant-country-help",
              onChange: I,
              onBlur: P,
            })),
            (Q[40] = eo),
            (Q[41] = ep),
            (Q[42] = ej),
            (Q[43] = T),
            (Q[44] = I),
            (Q[45] = P),
            (Q[46] = D))
          : (D = Q[46]),
        Q[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, a.jsx)("strong", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.countriesReference",
                defaultMessage: "Select one or more country codes from the <reference>reference list</reference>",
                values: { reference: eH },
              }),
            })),
            (Q[47] = U))
          : (U = Q[47]))
      let eA =
        ep &&
        (0, a.jsx)("p", {
          role: "alert",
          className: "text-danger",
          children:
            0 === eo.length
              ? (0, a.jsx)(u.A, {
                  id: "merchantSettings.countriesSelectionRequired",
                  defaultMessage: "Select at least one target country",
                })
              : (0, a.jsx)(u.A, {
                  id: "merchantSettings.countriesOutsideReference",
                  defaultMessage: "Countries outside the reference: {codes}",
                  values: { codes: em.join(", ") },
                }),
        })
      ;(Q[48] !== eA
        ? ((E = (0, a.jsxs)("div", {
            id: "merchant-country-help",
            className: "text-xs text-secondary",
            children: [U, eA],
          })),
          (Q[48] = eA),
          (Q[49] = E))
        : (E = Q[49]),
        Q[50] !== D || Q[51] !== E
          ? ((L = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [D, E] })),
            (Q[50] = D),
            (Q[51] = E),
            (Q[52] = L))
          : (L = Q[52]),
        Q[53] !== et
          ? ((q = et.formatMessage({ id: "merchantSettings.currencies", defaultMessage: "Supported currencies" })),
            (Q[53] = et),
            (Q[54] = q))
          : (q = Q[54]),
        Q[55] !== ev
          ? ((B = (e) => {
              ;(eu(e), ev())
            }),
            (Q[55] = ev),
            (Q[56] = B))
          : (B = Q[56]),
        Q[57] !== ec || Q[58] !== ex || Q[59] !== ej || Q[60] !== q || Q[61] !== B
          ? ((z = (0, a.jsx)(er, {
              label: q,
              codes: S.I,
              type: "currency",
              value: ec,
              disabled: ej,
              invalid: ex,
              describedBy: "merchant-currency-help",
              onChange: B,
            })),
            (Q[57] = ec),
            (Q[58] = ex),
            (Q[59] = ej),
            (Q[60] = q),
            (Q[61] = B),
            (Q[62] = z))
          : (z = Q[62]),
        Q[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, a.jsx)("strong", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.currenciesReference",
                defaultMessage:
                  "Optional. Select currencies from the <reference>reference list</reference>, independently of countries",
                values: { reference: eG },
              }),
            })),
            (Q[63] = O))
          : (O = Q[63]))
      let ew =
        ex &&
        (0, a.jsx)("p", {
          role: "alert",
          className: "text-danger",
          children: (0, a.jsx)(u.A, {
            id: "merchantSettings.currenciesOutsideReference",
            defaultMessage: "Currencies outside the reference: {codes}",
            values: { codes: ef.join(", ") },
          }),
        })
      ;(Q[64] !== O || Q[65] !== ew
        ? ((G = (0, a.jsxs)("div", {
            id: "merchant-currency-help",
            className: "text-xs text-secondary",
            children: [O, ew],
          })),
          (Q[64] = O),
          (Q[65] = ew),
          (Q[66] = G))
        : (G = Q[66]),
        Q[67] !== z || Q[68] !== G
          ? ((H = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [z, G] })),
            (Q[67] = z),
            (Q[68] = G),
            (Q[69] = H))
          : (H = Q[69]),
        Q[70] !== L || Q[71] !== H
          ? ((K = (0, a.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [L, H] })),
            (Q[70] = L),
            (Q[71] = H),
            (Q[72] = K))
          : (K = Q[72]),
        Q[73] !== M || Q[74] !== C || Q[75] !== K
          ? ((V = (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 border-t border-subtle pt-4",
              children: [M, C, K],
            })),
            (Q[73] = M),
            (Q[74] = C),
            (Q[75] = K),
            (Q[76] = V))
          : (V = Q[76]),
        Q[77] !== eS || Q[78] !== eb
          ? (($ =
              eb &&
              (0, a.jsx)("p", {
                role: "alert",
                children:
                  eS instanceof A.FetchError &&
                  eS.diagnosticError instanceof g.rX &&
                  "merchant_workspace_analytics_viewer" === eS.diagnosticError.code
                    ? (0, a.jsx)(u.A, {
                        id: "merchantSettings.workspaceAnalyticsViewer",
                        defaultMessage:
                          "To add a merchant, your role in the selected workspace must be standard-user, account-admin, or account-owner. The analytics-viewer role cannot add merchants. Ask a workspace owner or admin to check your role.",
                      })
                    : (0, a.jsx)(u.A, {
                        id: "merchantSettings.createError",
                        defaultMessage: "Couldn\u2019t add the merchant. Check the details and try again.",
                      }),
              })),
            (Q[77] = eS),
            (Q[78] = eb),
            (Q[79] = $))
          : ($ = Q[79]))
      let eN = !ey
      return (
        Q[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, a.jsx)(u.A, { id: "merchantSettings.createMerchant", defaultMessage: "Add merchant" })),
            (Q[80] = Y))
          : (Y = Q[80]),
        Q[81] !== ej || Q[82] !== eN
          ? ((Z = (0, a.jsx)(F, {
              className: "self-start",
              type: "submit",
              size: "dialog",
              loading: ej,
              disabled: eN,
              children: Y,
            })),
            (Q[81] = ej),
            (Q[82] = eN),
            (Q[83] = Z))
          : (Z = Q[83]),
        Q[84] !== ej || Q[85] !== N || Q[86] !== V || Q[87] !== $ || Q[88] !== Z
          ? ((W = (0, a.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3",
              disabled: ej,
              children: [N, V, $, Z],
            })),
            (Q[84] = ej),
            (Q[85] = N),
            (Q[86] = V),
            (Q[87] = $),
            (Q[88] = Z),
            (Q[89] = W))
          : (W = Q[89]),
        Q[90] !== _ || Q[91] !== W || Q[92] !== o || Q[93] !== m
          ? ((J = (0, a.jsxs)("form", {
              className: "flex flex-col gap-3 rounded-md border border-subtle p-3",
              onChange: o,
              onSubmit: m,
              children: [_, W],
            })),
            (Q[90] = _),
            (Q[91] = W),
            (Q[92] = o),
            (Q[93] = m),
            (Q[94] = J))
          : (J = Q[94]),
        J
      )
    }
    function eG(e) {
      return (0, a.jsx)(
        y.G,
        { href: eF, initiator: "open_in_browser_bridge", underline: "always", children: e },
        "reference",
      )
    }
    function eH(e) {
      return (0, a.jsx)(
        y.G,
        { href: eF, initiator: "open_in_browser_bridge", underline: "always", children: e },
        "reference",
      )
    }
    function eK(e) {
      return !S.I.includes(e)
    }
    function eV(e) {
      return !S.D.includes(e)
    }
  },
  XHnB(e, t, s) {
    s.d(t, {}, { B: "/merchants/settings", p: "4201948282" })
  },
}
//# sourceMappingURL=380966.75c271dbb1.js.map
