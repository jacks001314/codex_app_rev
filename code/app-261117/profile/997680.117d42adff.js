export const __rspack_esm_ids = [997680]
export const __webpack_modules__ = {
  Z4o7(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("bVeK")
    a.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            a = (0, r.c)(2),
            { className: o } = e
          return (
            a[0] !== o
              ? ((t = (0, n.jsxs)(n.Fragment, {
                  children: [null, (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(l.ERJ, { className: o }) })],
                })),
                (a[0] = o),
                (a[1] = t))
              : (t = a[1]),
            t
          )
        },
      },
    )
  },
  BrP7(e, t, a) {
    a.d(t, { t: () => j })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("i1uX"),
      o = a("on57"),
      s = a("IjbW"),
      i = a("K4Cx"),
      d = a("zd8w"),
      c = a("UxN3"),
      u = a("SziE"),
      m = a("hZax"),
      p = a("Sm6l")
    let g = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function f(e) {
      let t,
        a,
        l,
        s,
        i,
        d,
        c,
        u,
        m,
        f,
        h,
        x,
        b = (0, r.c)(26)
      b[0] !== e
        ? (({ children: t, icon: a, size: s, surface: i, labelVisibility: d, ...l } = e),
          (b[0] = e),
          (b[1] = t),
          (b[2] = a),
          (b[3] = l),
          (b[4] = s),
          (b[5] = i),
          (b[6] = d))
        : ((t = b[1]), (a = b[2]), (l = b[3]), (s = b[4]), (i = b[5]), (d = b[6]))
      let y = void 0 === i ? "elevated" : i,
        v = void 0 === d ? "visible" : d,
        w = "large" === s && "visible" === v && "pb-1.5"
      b[7] !== w ? ((c = (0, o.A)("group/labeled-icon flex-col gap-1.5", w)), (b[7] = w), (b[8] = c)) : (c = b[8])
      let j = "elevated" === y ? "border shadow-xs" : "border-hairline",
        C = g[s]
      ;(b[9] !== j || b[10] !== C.icon
        ? ((u = (0, o.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            j,
            C.icon,
          )),
          (b[9] = j),
          (b[10] = C.icon),
          (b[11] = u))
        : (u = b[11]),
        b[12] !== a || b[13] !== u
          ? ((m = (0, n.jsx)("span", { className: u, children: a })), (b[12] = a), (b[13] = u), (b[14] = m))
          : (m = b[14]))
      let N = "hidden" === v ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        k = "visible" === v && g[s].caption
      return (
        b[15] !== k || b[16] !== N ? ((f = (0, o.A)(N, k)), (b[15] = k), (b[16] = N), (b[17] = f)) : (f = b[17]),
        b[18] !== t || b[19] !== f
          ? ((h = (0, n.jsx)("span", { className: f, children: t })), (b[18] = t), (b[19] = f), (b[20] = h))
          : (h = b[20]),
        b[21] !== l || b[22] !== h || b[23] !== c || b[24] !== m
          ? ((x = (0, n.jsxs)(p.$, {
              ...l,
              className: c,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [m, h],
            })),
            (b[21] = l),
            (b[22] = h),
            (b[23] = c),
            (b[24] = m),
            (b[25] = x))
          : (x = b[25]),
        x
      )
    }
    let h = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      x = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${h} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      b = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      y = {
        ...x,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${b} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      v = {
        ...x,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      w = {
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
        settings: { ...x, tabButtonClassName: `${h} button-toolbar` },
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
        filter: y,
        sectionFilter: {
          ...y,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${b} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ...y,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${b} min-h-8 px-3 py-1.5 font-medium`,
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
        segmentedPill: v,
        segmentedPillMuted: {
          ...v,
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
    function j(e) {
      let t,
        a = (0, r.c)(39),
        {
          tabs: s,
          selectedKey: i,
          onSelect: g,
          onTabClick: h,
          onTabHover: x,
          className: b,
          fill: y,
          scrollable: v,
          tabListRef: j,
          variant: k,
          ariaLabel: S,
          ariaLabelledBy: M,
          activationMode: A,
          animateSelection: I,
          dividerBefore: _,
        } = e,
        P = void 0 !== y && y,
        B = void 0 !== v && v,
        z = void 0 === k ? "segmented" : k,
        T = void 0 === A ? "automatic" : A,
        D = (0, d.useId)(),
        R = w[z],
        V = "inset" === z || "choice" === z,
        E = (0, m.Zj)(!V && "icon" !== z && "text-secondary" === R.unselectedTextClassName && "1244723012"),
        L = void 0 !== I && I && ("segmentedPill" === z || "segmentedPillMuted" === z),
        K = L ? "text-default font-medium" : R.selectedClassName
      if (
        a[0] !== T ||
        a[1] !== L ||
        a[2] !== S ||
        a[3] !== M ||
        a[4] !== b ||
        a[5] !== _ ||
        a[6] !== P ||
        a[7] !== g ||
        a[8] !== h ||
        a[9] !== x ||
        a[10] !== R.closeButtonClassName ||
        a[11] !== R.itemClassName ||
        a[12] !== R.listClassName ||
        a[13] !== R.segmentedEdges ||
        a[14] !== R.selectionIndicator ||
        a[15] !== R.tabButtonClassName ||
        a[16] !== R.textSizeClassName ||
        a[17] !== R.unselectedClassName ||
        a[18] !== R.unselectedTextClassName ||
        a[19] !== B ||
        a[20] !== K ||
        a[21] !== i ||
        a[22] !== D ||
        a[23] !== j ||
        a[24] !== s ||
        a[25] !== E ||
        a[26] !== V ||
        a[27] !== z
      ) {
        let e,
          r,
          d = (0, o.A)(E ? "text-tertiary" : R.unselectedTextClassName, R.unselectedClassName),
          m = V ? p.$ : "button",
          y = P && "w-full",
          v = B && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(a[29] !== b || a[30] !== R.listClassName || a[31] !== y || a[32] !== v
          ? ((e = (0, o.A)(R.listClassName, y, v, b)),
            (a[29] = b),
            (a[30] = R.listClassName),
            (a[31] = y),
            (a[32] = v),
            (a[33] = e))
          : (e = a[33]),
          a[34] !== T || a[35] !== g || a[36] !== B || a[37] !== s
            ? ((r = (e) => {
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
                  n = a.findIndex((t) => t === e.target)
                if (n < 0 || 0 === a.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let r = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? a.length - 1
                      : (n + (e.key === (r ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + a.length) % a.length),
                  a[t]?.focus(),
                  B && a[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let l = s[t]
                null != l && "automatic" === T && g(l.key, e.timeStamp)
              }),
              (a[34] = T),
              (a[35] = g),
              (a[36] = B),
              (a[37] = s),
              (a[38] = r))
            : (r = a[38]),
          (t = (0, n.jsx)("div", {
            ref: j,
            role: "tablist",
            tabIndex: -1,
            "aria-label": S,
            "aria-labelledby": M,
            className: e,
            onWheel: B ? C : void 0,
            onKeyDown: r,
            children: s.map((e, t) => {
              let a,
                r,
                p = e.key === i,
                b = p ? K : d,
                y = 0 === t,
                v = t === s.length - 1,
                w = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": p,
                  tabIndex: p ? 0 : -1,
                  onPointerEnter: null == x ? void 0 : () => x(e.key),
                  onClick: (t) => {
                    ;((p && "manual" !== T) || g(e.key, t.timeStamp), h?.(e.key))
                  },
                }
              return (
                "inset" === z
                  ? ((a = p ? "segmentedInsetSelected" : "ghost"), (r = "compact"))
                  : "choice" === z && ((a = p ? "choiceSelected" : "outlineGhost"), (r = "dialogAction")),
                (0, n.jsxs)(
                  "div",
                  {
                    className: (0, o.A)(
                      "relative flex min-w-0 items-center",
                      R.itemClassName,
                      P && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      y || e.key !== _
                        ? null
                        : (0, n.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === z
                        ? (0, n.jsx)(f, { ...w, icon: e.icon, size: "large", children: e.name })
                        : (0, n.jsxs)(m, {
                            ...w,
                            className: (0, o.A)(
                              P && "min-w-0 flex-1 justify-center",
                              L && "relative isolate",
                              !V && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                R.textSizeClassName ?? "text-sm",
                                R.tabButtonClassName,
                                B && "ring-inset",
                                R.segmentedEdges && y && "rounded-l-md",
                                R.segmentedEdges && v && "rounded-r-md",
                                "browse" === z && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", p && "ring-1 ring-border-strong"]
                                  : b,
                              ],
                            ),
                            color: a,
                            radius: "choice" === z ? "full" : void 0,
                            size: r,
                            children: [
                              L && p ? (0, n.jsx)(N, { layoutId: D }) : null,
                              null != e.icon
                                ? (0, n.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              P ? (0, n.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === R.selectionIndicator && p
                        ? (0, n.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, n.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, o.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              R.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, n.jsx)(c.bF, {
                              "aria-hidden": !1,
                              asset16: l.Q,
                              legacyIcon: u.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      R.segmentedEdges && !v
                        ? (0, n.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (a[0] = T),
          (a[1] = L),
          (a[2] = S),
          (a[3] = M),
          (a[4] = b),
          (a[5] = _),
          (a[6] = P),
          (a[7] = g),
          (a[8] = h),
          (a[9] = x),
          (a[10] = R.closeButtonClassName),
          (a[11] = R.itemClassName),
          (a[12] = R.listClassName),
          (a[13] = R.segmentedEdges),
          (a[14] = R.selectionIndicator),
          (a[15] = R.tabButtonClassName),
          (a[16] = R.textSizeClassName),
          (a[17] = R.unselectedClassName),
          (a[18] = R.unselectedTextClassName),
          (a[19] = B),
          (a[20] = K),
          (a[21] = i),
          (a[22] = D),
          (a[23] = j),
          (a[24] = s),
          (a[25] = E),
          (a[26] = V),
          (a[27] = z),
          (a[28] = t))
      } else t = a[28]
      return t
    }
    function C(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function N(e) {
      let t,
        a,
        l = (0, r.c)(5),
        { layoutId: o } = e,
        d = 0.25 * !(0, s.I)()
      return (
        l[0] !== d ? ((t = { type: "spring", duration: d, bounce: 0 }), (l[0] = d), (l[1] = t)) : (t = l[1]),
        l[2] !== o || l[3] !== t
          ? ((a = (0, n.jsx)(i.P.span, {
              "aria-hidden": !0,
              layoutId: o,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (l[2] = o),
            (l[3] = t),
            (l[4] = a))
          : (a = l[4]),
        a
      )
    }
  },
  dLIb(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("slpy"),
      o = a("qmMi"),
      s = a("zd8w"),
      i = a("Wf1j"),
      d = a("oyxz"),
      c = a("bVeK"),
      u = a("pIbZ"),
      m = a("okCa"),
      p = a("PkPj"),
      g = a("DiyT"),
      f = a("khOd"),
      h = a("jU86")
    function x(e) {
      let t,
        a,
        l = (0, r.c)(7),
        { onViewModeChange: s, viewModeControl: i } = e,
        d = (0, o.gh)(h.oD),
        c = (0, o.Ul)(h.iB),
        u = i?.value ?? c
      return (
        l[0] !== s || l[1] !== d || l[2] !== i
          ? ((t = (e) => {
              ;(s?.(e), i ? i.onChange(e) : (0, h.me)(d, { viewMode: e }))
            }),
            (l[0] = s),
            (l[1] = d),
            (l[2] = i),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== u || l[5] !== t
          ? ((a = (0, n.jsx)(b, { value: u, onChange: t })), (l[4] = u), (l[5] = t), (l[6] = a))
          : (a = l[6]),
        a
      )
    }
    function b(e) {
      let t,
        a,
        o,
        s,
        m,
        p,
        g,
        f,
        h,
        x,
        b,
        y = (0, r.c)(29),
        { value: v, onChange: w, disabled: j } = e,
        C = void 0 !== j && j,
        N = (0, i.A)()
      y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(d.A, { id: "libraryNext.view.gridTooltip", defaultMessage: "Grid" })), (y[0] = t))
        : (t = y[0])
      let k = "grid" === v
      y[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { 16: c.TVU, 20: c.MhR }), (y[1] = a)) : (a = y[1])
      let S = "grid" === v
      ;(y[2] !== N
        ? ((o = N.formatMessage({ id: "libraryNext.view.grid", defaultMessage: "Grid view" })), (y[2] = N), (y[3] = o))
        : (o = y[3]),
        y[4] !== w || y[5] !== v
          ? ((s = () => {
              "grid" !== v && w?.("grid")
            }),
            (y[4] = w),
            (y[5] = v),
            (y[6] = s))
          : (s = y[6]),
        y[7] !== C || y[8] !== k || y[9] !== S || y[10] !== o || y[11] !== s
          ? ((m = (0, n.jsx)(l.m, {
              content: t,
              children: (0, n.jsx)(u.p, {
                color: "secondary",
                variant: "ghost",
                uniform: !0,
                disabled: C,
                selected: k,
                icon: a,
                "aria-pressed": S,
                "aria-label": o,
                onClick: s,
              }),
            })),
            (y[7] = C),
            (y[8] = k),
            (y[9] = S),
            (y[10] = o),
            (y[11] = s),
            (y[12] = m))
          : (m = y[12]),
        y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(d.A, { id: "libraryNext.view.listTooltip", defaultMessage: "List" })), (y[13] = p))
          : (p = y[13]))
      let M = "list" === v
      y[14] === Symbol.for("react.memo_cache_sentinel") ? ((g = { 16: c.gYX, 20: c.pXz }), (y[14] = g)) : (g = y[14])
      let A = "list" === v
      return (
        y[15] !== N
          ? ((f = N.formatMessage({ id: "libraryNext.view.list", defaultMessage: "List view" })),
            (y[15] = N),
            (y[16] = f))
          : (f = y[16]),
        y[17] !== w || y[18] !== v
          ? ((h = () => {
              "list" !== v && w?.("list")
            }),
            (y[17] = w),
            (y[18] = v),
            (y[19] = h))
          : (h = y[19]),
        y[20] !== C || y[21] !== M || y[22] !== A || y[23] !== f || y[24] !== h
          ? ((x = (0, n.jsx)(l.m, {
              content: p,
              children: (0, n.jsx)(u.p, {
                color: "secondary",
                variant: "ghost",
                uniform: !0,
                disabled: C,
                selected: M,
                icon: g,
                "aria-pressed": A,
                "aria-label": f,
                onClick: h,
              }),
            })),
            (y[20] = C),
            (y[21] = M),
            (y[22] = A),
            (y[23] = f),
            (y[24] = h),
            (y[25] = x))
          : (x = y[25]),
        y[26] !== x || y[27] !== m
          ? ((b = (0, n.jsxs)("div", {
              className: "flex shrink-0 items-center gap-0.5 [--color-text-secondary-ghost:var(--color-text-tertiary)]",
              children: [m, x],
            })),
            (y[26] = x),
            (y[27] = m),
            (y[28] = b))
          : (b = y[28]),
        b
      )
    }
    a.d(
      t,
      {},
      {
        E2: b,
        Pu: function (e) {
          let t,
            a,
            l,
            o,
            d,
            c,
            u = (0, r.c)(28),
            {
              searchQuery: p,
              onSearchQueryChange: f,
              onSearchFocus: h,
              onViewModeChange: b,
              viewModeControl: y,
              actions: v,
              filters: w,
              filterTags: j,
              settings: C,
              showViewToggle: N,
              showSearch: k,
              searchLabel: S,
              searchPlaceholder: M,
              searchMaxLength: A,
              fixedSearchWidth: I,
            } = e,
            _ = void 0 === N || N,
            P = void 0 === k || k,
            B = (0, i.A)(),
            z = (0, s.useId)()
          u[0] !== B
            ? ((t = B.formatMessage({ id: "libraryNext.search.label", defaultMessage: "Search library" })),
              (u[0] = B),
              (u[1] = t))
            : (t = u[1])
          let T = t
          return (
            u[2] !== b || u[3] !== _ || u[4] !== y
              ? ((a = _ ? (0, n.jsx)(x, { onViewModeChange: b, viewModeControl: y }) : null),
                (u[2] = b),
                (u[3] = _),
                (u[4] = y),
                (u[5] = a))
              : (a = u[5]),
            u[6] !== w || u[7] !== a
              ? ((l = (0, n.jsxs)(n.Fragment, { children: [w, a] })), (u[6] = w), (u[7] = a), (u[8] = l))
              : (l = u[8]),
            u[9] !== T ||
            u[10] !== h ||
            u[11] !== f ||
            u[12] !== z ||
            u[13] !== S ||
            u[14] !== A ||
            u[15] !== M ||
            u[16] !== p ||
            u[17] !== P
              ? ((o = P
                  ? (0, n.jsx)(m.s, {
                      id: `library-search-${z}`,
                      variant: "toolbar-compact",
                      label: S ?? T,
                      placeholder: M ?? S ?? T,
                      searchQuery: p,
                      maxLength: A,
                      onFocus: h,
                      onSearchQueryChange: f,
                    })
                  : void 0),
                (u[9] = T),
                (u[10] = h),
                (u[11] = f),
                (u[12] = z),
                (u[13] = S),
                (u[14] = A),
                (u[15] = M),
                (u[16] = p),
                (u[17] = P),
                (u[18] = o))
              : (o = u[18]),
            u[19] !== v || u[20] !== C
              ? ((d = (0, n.jsxs)(n.Fragment, { children: [v, C] })), (u[19] = v), (u[20] = C), (u[21] = d))
              : (d = u[21]),
            u[22] !== j || u[23] !== I || u[24] !== l || u[25] !== o || u[26] !== d
              ? ((c = (0, n.jsx)(g.Tz, { fixedSearchWidth: I, filterTags: j, controls: l, search: o, actions: d })),
                (u[22] = j),
                (u[23] = I),
                (u[24] = l),
                (u[25] = o),
                (u[26] = d),
                (u[27] = c))
              : (c = u[27]),
            c
          )
        },
        WI: function (e) {
          let t,
            a = (0, r.c)(11),
            {
              title: l,
              subtitle: s,
              banner: i,
              controls: d,
              navigation: c,
              children: u,
              scrollContainerRef: m,
              contentInset: g,
              reserveSelectionGutter: h,
            } = e,
            x = void 0 === g || g,
            b = (0, o.Ul)(f.GB),
            y = b && void 0 !== h && h
          return (
            a[0] !== i ||
            a[1] !== u ||
            a[2] !== x ||
            a[3] !== d ||
            a[4] !== b ||
            a[5] !== c ||
            a[6] !== m ||
            a[7] !== s ||
            a[8] !== y ||
            a[9] !== l
              ? ((t = (0, n.jsx)(p.Ql, {
                  scrollContainerRef: m,
                  contentWidth: "extraWide",
                  horizontalPaddingClassName: "[--page-content-gutter:--spacing(12)] px-(--page-content-gutter)",
                  reserveSelectionGutter: y,
                  contentInset: x,
                  headerVariant: "compact",
                  headerPlacement: "sticky",
                  expandSearchWhenWrapped: b,
                  animateContentLayout: !1,
                  title: l,
                  subtitle: s,
                  banner: i,
                  bannerPlacement: "edge",
                  headerAction: d,
                  navigation: c,
                  children: u,
                })),
                (a[0] = i),
                (a[1] = u),
                (a[2] = x),
                (a[3] = d),
                (a[4] = b),
                (a[5] = c),
                (a[6] = m),
                (a[7] = s),
                (a[8] = y),
                (a[9] = l),
                (a[10] = t))
              : (t = a[10]),
            t
          )
        },
        zK: x,
      },
    )
  },
  r1wd(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      o = a("qmMi"),
      s = a("X3K1"),
      i = a("SCmN"),
      d = a("WP5H"),
      c = a("Ih0z"),
      u = a("tv8P"),
      m = a("kTTh"),
      p = a("OMIV"),
      g = a("fAHU"),
      f = a("i9us"),
      h = a("nkrL"),
      x = a("GhgU"),
      b = a("Jif0"),
      y = a("fQMn")
    function v(e) {
      let t,
        a,
        p,
        f,
        x,
        v,
        j,
        C,
        N,
        k,
        S,
        M,
        A,
        I = (0, r.c)(40),
        { appearance: _, pageId: P, space: B, spaceId: z, title: T, symbol: D } = e
      I[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (I[0] = t)) : (t = I[0])
      let { data: R } = (0, o._U)(u.spaceQuery$, z ?? "", t),
        V = B ?? R,
        E = P ?? V?.root_page_id ?? "",
        L = (0, o._U)(u.loadedSpacePageMetadata$, E)
      I[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { enabled: !1 }), (I[1] = a)) : (a = I[1])
      let K = (0, o._U)(h.GC, E, a),
        U = (0, o._U)(i.AR, E),
        O = V?.id ?? z
      ;(I[2] !== O ? ((p = { spaceId: O }), (I[2] = O), (I[3] = p)) : (p = I[3]),
        I[4] === Symbol.for("react.memo_cache_sentinel") ? ((f = { enabled: !1 }), (I[4] = f)) : (f = I[4]))
      let H = (0, o._U)(c.V_, p, f),
        $ = _ ?? H,
        W = null != V || null != z || null != _,
        F = null == L ? (V?.symbol ?? D ?? null) : (L.symbol ?? null)
      if (W && null == F) {
        let e
        ;(I[5] !== $ ? ((e = (0, c.rL)($)), (I[5] = $), (I[6] = e)) : (e = I[6]), (F = e))
      }
      let Q = void 0 === K ? L?.title : (K ?? ""),
        G = null == V ? (Q ?? T) : (T ?? V.name)
      if (!W && null == F && null != G) {
        let e
        I[7] !== G ? ((e = (0, m.O)(G)), (I[7] = G), (I[8] = e)) : (e = I[8])
        let t = e
        if (((G = t.title), null != t.emoji)) {
          let e
          ;(I[9] !== t.emoji ? ((e = { kind: "emoji", value: t.emoji }), (I[9] = t.emoji), (I[10] = e)) : (e = I[10]),
            (F = e))
        }
      }
      U && !W && null == F && (F = d.x)
      let q = null == G,
        X = V?.id ?? z,
        Y = L?.document_type,
        Z = L?.namespace,
        J = $?.theme
      I[11] !== W || I[12] !== F || I[13] !== Y || I[14] !== Z || I[15] !== J
        ? ((x = (0, n.jsx)(y.S, {
            disabled: !0,
            legacyEmoji: null,
            documentType: Y,
            namespace: Z,
            symbol: F,
            space: W,
            spaceTheme: J,
            onChange: w,
          })),
          (I[11] = W),
          (I[12] = F),
          (I[13] = Y),
          (I[14] = Z),
          (I[15] = J),
          (I[16] = x))
        : (x = I[16])
      let ee = q && "w-64 max-w-full"
      I[17] !== ee ? ((v = (0, l.A)("relative min-w-0", ee)), (I[17] = ee), (I[18] = v)) : (v = I[18])
      let et = q ? "invisible" : void 0,
        ea = q || void 0
      return (
        I[19] !== G || I[20] !== q
          ? ((j = q ? "" : (G ?? "").replace(/[\r\n]+/g, " ")), (I[19] = G), (I[20] = q), (I[21] = j))
          : (j = I[21]),
        I[22] !== j
          ? ((C = (0, n.jsx)(b.G, { disabled: !0, readOnly: !0, value: j })), (I[22] = j), (I[23] = C))
          : (C = I[23]),
        I[24] !== et || I[25] !== ea || I[26] !== C
          ? ((N = (0, n.jsx)("div", { className: et, "aria-hidden": ea, children: C })),
            (I[24] = et),
            (I[25] = ea),
            (I[26] = C),
            (I[27] = N))
          : (N = I[27]),
        I[28] !== q
          ? ((k = q
              ? (0, n.jsx)("div", {
                  className: "absolute inset-0 flex items-center",
                  children: (0, n.jsx)(s.X, { className: "w-full", size: "lg", variant: "chatgpt-project" }),
                })
              : null),
            (I[28] = q),
            (I[29] = k))
          : (k = I[29]),
        I[30] !== v || I[31] !== N || I[32] !== k
          ? ((S = (0, n.jsxs)("div", { className: v, children: [N, k] })),
            (I[30] = v),
            (I[31] = N),
            (I[32] = k),
            (I[33] = S))
          : (S = I[33]),
        I[34] !== x || I[35] !== S
          ? ((M = (0, n.jsxs)("div", {
              className: "relative flex flex-col gap-2",
              "data-page-title": !0,
              children: [x, S],
            })),
            (I[34] = x),
            (I[35] = S),
            (I[36] = M))
          : (M = I[36]),
        I[37] !== M || I[38] !== X
          ? ((A = (0, n.jsx)(g.Z, { rootSpaceId: X, children: M })), (I[37] = M), (I[38] = X), (I[39] = A))
          : (A = I[39]),
        A
      )
    }
    function w() {}
    a.d(
      t,
      {},
      {
        S: v,
        W: function (e) {
          let t,
            a,
            s,
            i,
            d,
            c,
            m,
            g,
            h,
            b = (0, r.c)(29),
            { pageId: y, spaceId: w, title: j, symbol: C, headerOverlay: N, showComposer: k } = e,
            S = void 0 !== k && k
          b[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (b[0] = t)) : (t = b[0])
          let { data: M } = (0, o.Ul)(u.spacesQuery$, t),
            A = (0, o._U)(p.JW, "2163293173")
          b[1] !== y || b[2] !== w || b[3] !== M?.items || b[4] !== M?.items.find
            ? ((a = M?.items.find((e) => (null == y ? e.id === w : e.root_page_id === y))),
              (b[1] = y),
              (b[2] = w),
              (b[3] = M?.items),
              (b[4] = M?.items.find),
              (b[5] = a))
            : (a = b[5])
          let I = a,
            _ = A ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable",
            P = void 0 !== N && N && "viewer-header-scroll-mask pt-[var(--viewer-header-height)]"
          ;(b[6] !== _ || b[7] !== P
            ? ((s = (0, l.A)("min-h-0 flex-1 scrollbar-on-hover overflow-y-auto", _, P)),
              (b[6] = _),
              (b[7] = P),
              (b[8] = s))
            : (s = b[8]),
            b[9] !== y || b[10] !== I || b[11] !== C || b[12] !== j
              ? ((i = (0, n.jsx)(v, { pageId: y, space: I, title: j, symbol: C })),
                (b[9] = y),
                (b[10] = I),
                (b[11] = C),
                (b[12] = j),
                (b[13] = i))
              : (i = b[13]))
          let B = y ?? I?.root_page_id ?? w ?? ""
          return (
            b[14] !== B ? ((d = (0, n.jsx)(x.VI, { pageId: B })), (b[14] = B), (b[15] = d)) : (d = b[15]),
            b[16] !== d || b[17] !== i
              ? ((c = (0, n.jsx)(x.DV, { heading: i, children: d })), (b[16] = d), (b[17] = i), (b[18] = c))
              : (c = b[18]),
            b[19] !== c || b[20] !== s
              ? ((m = (0, n.jsx)("div", { className: s, children: c })), (b[19] = c), (b[20] = s), (b[21] = m))
              : (m = b[21]),
            b[22] !== y || b[23] !== S || b[24] !== I?.root_page_id
              ? ((g = S && (0, n.jsx)(f.O, { pageId: y ?? I?.root_page_id })),
                (b[22] = y),
                (b[23] = S),
                (b[24] = I?.root_page_id),
                (b[25] = g))
              : (g = b[25]),
            b[26] !== m || b[27] !== g
              ? ((h = (0, n.jsxs)(n.Fragment, { children: [m, g] })), (b[26] = m), (b[27] = g), (b[28] = h))
              : (h = b[28]),
            h
          )
        },
      },
    )
  },
  Annu(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      o = a("zd8w"),
      s = a("Wf1j"),
      i = a("oyxz"),
      d = a("Ywss"),
      c = a("SPnB"),
      u = a("Sm6l"),
      m = a("bVeK"),
      p = a("LcBG"),
      g = a("QufO"),
      f = a("FBu8"),
      h = a("tv8P"),
      x = a("OWtl"),
      b = a("FHI1"),
      y = a("r1wd"),
      v = a("i9us"),
      w = a("GhgU"),
      j = a("IcU0"),
      C = a("KuR4")
    let N = (0, l.i1)(x.u, (e, { get: t }) => {
      let a = t(h.spaceAccountId$)
      if (null != e && null != a) {
        if (t(h.pinnedSpaceIds$).includes(e)) {
          let n = t(h.visiblePinnedSpaceItemByKey$, (0, b.SY)(a, e), { enabled: !1 })
          if (n?.kind === "space") return n.name
        }
        return (
          t(h.spaceQuery$, e, { enabled: !1 }).data?.name ??
          t(h.spacesQuery$, { enabled: !1 }).data?.items.find((t) => t.id === e)?.name
        )
      }
    })
    function k() {}
    a.d(
      t,
      {},
      {
        TeamSpaceHomeLoading: function (e) {
          let t,
            a,
            x,
            b,
            v,
            S,
            M,
            A,
            I,
            _,
            P,
            B,
            z = (0, r.c)(41),
            { name: T, appearance: D, spaceId: R, view: V, onSelectView: E, prefetchOverview: L, viewMode: K } = e,
            U = void 0 === K ? "list" : K,
            O = (0, s.A)(),
            H = (0, d.zy)(),
            $ = (0, d.Zp)(),
            { spaceId: W } = (0, d.g)(),
            F = R ?? W,
            Q = (0, l.Ul)(h.spaceAccountId$),
            G = (0, l.Ul)(c.chatGptAuthenticatedUserId$),
            q = (0, l.Ul)(c.Kw)
          z[0] !== Q || z[1] !== q || z[2] !== F || z[3] !== G
            ? ((t = JSON.stringify([G, Q, q, F])), (z[0] = Q), (z[1] = q), (z[2] = F), (z[3] = G), (z[4] = t))
            : (t = z[4])
          let X = t,
            Y = null == E && H.state?.spaceHomeSearch?.identity === X ? H.state.spaceHomeSearch.query : ""
          ;(z[5] !== H || z[6] !== E || z[7] !== V
            ? ((a = V ?? (null == E ? (0, j.D1)(H) : void 0)), (z[5] = H), (z[6] = E), (z[7] = V), (z[8] = a))
            : (a = z[8]),
            z[9] !== Y || z[10] !== a ? ((x = (0, j.Zq)(a, Y)), (z[9] = Y), (z[10] = a), (z[11] = x)) : (x = z[11]))
          let Z = x
          ;(z[12] !== L || z[13] !== Z
            ? ((b = () => {
                "overview" === Z && L?.()
              }),
              (v = [L, Z]),
              (z[12] = L),
              (z[13] = Z),
              (z[14] = b),
              (z[15] = v))
            : ((b = z[14]), (v = z[15])),
            (0, o.useEffect)(b, v))
          let J = null != W && "new" !== W && W === F && null == V && null == E,
            ee = (0, l.Ul)("pages" === Z && "grid" === U && g.sd)
          z[16] === Symbol.for("react.memo_cache_sentinel") ? ((S = { enabled: !1 }), (z[16] = S)) : (S = z[16])
          let et = (0, l._U)(N, F, S),
            ea = T ?? et
          z[17] !== O
            ? ((M = O.formatMessage({ id: "space.list.searchPlaceholder", defaultMessage: "Search" })),
              (z[17] = O),
              (z[18] = M))
            : (M = z[18])
          let en = M
          return (
            z[19] !== J || z[20] !== X || z[21] !== H || z[22] !== $ || z[23] !== E
              ? ((A = E ?? (J ? (e) => (0, j.gW)($, H, X, e) : void 0)),
                (z[19] = J),
                (z[20] = X),
                (z[21] = H),
                (z[22] = $),
                (z[23] = E),
                (z[24] = A))
              : (A = z[24]),
            z[25] !== D || z[26] !== F || z[27] !== ea
              ? ((I = (0, n.jsx)(y.S, { appearance: D, spaceId: F, title: ea })),
                (z[25] = D),
                (z[26] = F),
                (z[27] = ea),
                (z[28] = I))
              : (I = z[28]),
            z[29] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, n.jsxs)(u.$, {
                  color: "primary",
                  size: "pageAction",
                  radius: "full",
                  disabled: !0,
                  children: [
                    (0, n.jsx)(i.A, { id: "space.home.create.new", defaultMessage: "New" }),
                    (0, n.jsx)(m.Aq_, {}),
                  ],
                })),
                (z[29] = _))
              : (_ = z[29]),
            z[30] !== ee || z[31] !== Z || z[32] !== U
              ? ((P = (0, n.jsx)("div", {
                  className:
                    "vertical-scroll-fade-mask-top scrollbar-on-hover min-h-0 flex-1 scrollbar-stable overflow-x-hidden overflow-y-auto",
                  children:
                    "overview" === Z
                      ? (0, n.jsx)("div", {
                          className: "mx-auto w-full max-w-(--page-content-max-width)",
                          children: (0, n.jsx)(w.DV, {
                            heading: null,
                            headingOutside: !0,
                            contentAlignment: "start",
                            children: (0, n.jsx)(w.VI, { pageId: "" }),
                          }),
                        })
                      : (0, n.jsx)("div", {
                          className:
                            "mx-auto flex min-h-0 w-full max-w-(--page-content-max-width) flex-1 flex-col px-14 pt-2 pb-panel",
                          children:
                            "grid" === U
                              ? (0, n.jsx)(p.oH, { square: !0, layout: ee ? "uniform" : void 0 })
                              : (0, n.jsx)(f.bT, { treeDepth: 0 }),
                        }),
                })),
                (z[30] = ee),
                (z[31] = Z),
                (z[32] = U),
                (z[33] = P))
              : (P = z[33]),
            z[34] !== en || z[35] !== I || z[36] !== P || z[37] !== A || z[38] !== Z || z[39] !== U
              ? ((B = (0, n.jsx)("div", {
                  className: "relative flex h-full min-h-0 flex-col overflow-hidden",
                  "aria-busy": !0,
                  children: (0, n.jsx)(C.M, {
                    loading: !0,
                    view: Z,
                    viewMode: U,
                    onSelectView: A,
                    searchQuery: "",
                    searchLabel: en,
                    onSearchQueryChange: k,
                    title: I,
                    actions: _,
                    children: P,
                  }),
                })),
                (z[34] = en),
                (z[35] = I),
                (z[36] = P),
                (z[37] = A),
                (z[38] = Z),
                (z[39] = U),
                (z[40] = B))
              : (B = z[40]),
            B
          )
        },
        m: function (e) {
          let t,
            a,
            l,
            o,
            s,
            i = (0, r.c)(14),
            { space: d, renderContent: c, showComposer: u } = e
          return (
            i[0] !== d.root_page_id
              ? ((t = (0, n.jsx)("div", {
                  "aria-busy": !0,
                  className:
                    "vertical-scroll-fade-mask-top scrollbar-on-hover min-h-0 flex-1 scrollbar-stable overflow-x-hidden overflow-y-auto",
                  children: (0, n.jsx)("div", {
                    className: "mx-auto w-full max-w-(--page-content-max-width)",
                    children: (0, n.jsx)(w.DV, {
                      heading: null,
                      headingOutside: !0,
                      contentAlignment: "start",
                      children: (0, n.jsx)(w.VI, { pageId: d.root_page_id }),
                    }),
                  }),
                })),
                (i[0] = d.root_page_id),
                (i[1] = t))
              : (t = i[1]),
            i[2] !== d
              ? ((a = (0, n.jsx)(y.S, { pageId: d.root_page_id, space: d, title: d.name })), (i[2] = d), (i[3] = a))
              : (a = i[3]),
            i[4] !== c || i[5] !== t || i[6] !== a
              ? ((l = c(t, a)), (i[4] = c), (i[5] = t), (i[6] = a), (i[7] = l))
              : (l = i[7]),
            i[8] !== u || i[9] !== d.root_page_id
              ? ((o = u ? (0, n.jsx)(v.O, { pageId: d.root_page_id }) : null),
                (i[8] = u),
                (i[9] = d.root_page_id),
                (i[10] = o))
              : (o = i[10]),
            i[11] !== l || i[12] !== o
              ? ((s = (0, n.jsxs)("div", {
                  className: "relative flex h-full min-h-0 flex-col overflow-hidden",
                  children: [l, o],
                })),
                (i[11] = l),
                (i[12] = o),
                (i[13] = s))
              : (s = i[13]),
            s
          )
        },
      },
    )
  },
  IcU0(e, t, a) {
    var n = a("Ywss")
    function r(e, t) {
      let a = e.state?.spaceHomeNavigation
      return a?.identity === t && a.href === (0, n.AO)(e) ? a.key : e.key
    }
    a.d(
      t,
      {},
      {
        D1: function (e) {
          let t = new URLSearchParams(e.search).get("view")
          return "pages" === t || "overview" === t ? t : void 0
        },
        Zq: function (e, t) {
          return e ?? ("" !== t.trim() ? "pages" : "overview")
        },
        gW: function (e, t, a, l, o, s) {
          let i = new URLSearchParams(t.search)
          ;(i.set("view", l), void 0 !== s && (null == s ? i.delete("folder") : i.set("folder", s)))
          let d = { pathname: t.pathname, search: i.toString(), hash: t.hash }
          e(d, {
            replace: null != o && void 0 === s,
            preventScrollReset: !0,
            state: {
              ...t.state,
              spaceHomeNavigation: null == o ? { identity: a, href: (0, n.AO)(d), key: r(t, a) } : void 0,
              ...(null == o ? {} : { spaceHomeSearch: { identity: a, query: o } }),
            },
          })
        },
        v5: r,
      },
    )
  },
  KuR4(e, t, a) {
    a.d(t, { M: () => g })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("zd8w"),
      o = a("Wf1j"),
      s = a("va0r"),
      i = a("okCa"),
      d = a("DiyT"),
      c = a("dLIb"),
      u = a("oyxz"),
      m = a("BrP7")
    function p(e) {
      let t,
        a,
        l,
        s,
        i,
        d = (0, r.c)(11),
        { view: c, onSelectView: p } = e,
        g = (0, o.A)()
      return (
        d[0] !== g
          ? ((t = g.formatMessage({ id: "space.views.label", defaultMessage: "Space views" })), (d[0] = g), (d[1] = t))
          : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = {
              key: "overview",
              name: (0, n.jsx)(u.A, { id: "space.views.overview", defaultMessage: "Overview" }),
            }),
            (d[2] = a))
          : (a = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = [
              a,
              { key: "pages", name: (0, n.jsx)(u.A, { id: "space.views.content", defaultMessage: "Content" }) },
            ]),
            (d[3] = l))
          : (l = d[3]),
        d[4] !== p || d[5] !== c
          ? ((s = (e) => {
              e !== c && p(e)
            }),
            (d[4] = p),
            (d[5] = c),
            (d[6] = s))
          : (s = d[6]),
        d[7] !== t || d[8] !== s || d[9] !== c
          ? ((i = (0, n.jsx)(m.t, {
              variant: "browse",
              selectedKey: c,
              activationMode: "manual",
              ariaLabel: t,
              tabs: l,
              onSelect: s,
            })),
            (d[7] = t),
            (d[8] = s),
            (d[9] = c),
            (d[10] = i))
          : (i = d[10]),
        i
      )
    }
    function g(e) {
      let t,
        a,
        u,
        m,
        g,
        h,
        x,
        b,
        y,
        v,
        w = (0, r.c)(38),
        {
          title: j,
          actions: C,
          children: N,
          view: k,
          viewMode: S,
          searchQuery: M,
          searchLabel: A,
          onSearchQueryChange: I,
          onSelectView: _,
          onViewModeChange: P,
          overviewControls: B,
          showTabs: z,
          loading: T,
        } = e,
        D = void 0 === z || z,
        R = void 0 !== T && T,
        V = (0, o.A)(),
        E = (0, l.useId)()
      ;(w[0] !== j
        ? ((t =
            null == j
              ? null
              : (0, n.jsx)("h1", { className: "heading-xl flex min-h-9 items-center text-default", children: j })),
          (w[0] = j),
          (w[1] = t))
        : (t = w[1]),
        w[2] !== V
          ? ((a = V.formatMessage({ id: "space.list.searchPlaceholder", defaultMessage: "Search" })),
            (w[2] = V),
            (w[3] = a))
          : (a = w[3]),
        w[4] !== R || w[5] !== I || w[6] !== E || w[7] !== A || w[8] !== M || w[9] !== a
          ? ((u = (0, n.jsx)(i.s, {
              id: E,
              variant: "toolbar-compact",
              disabled: R,
              label: A,
              placeholder: a,
              searchQuery: M,
              onSearchQueryChange: I,
            })),
            (w[4] = R),
            (w[5] = I),
            (w[6] = E),
            (w[7] = A),
            (w[8] = M),
            (w[9] = a),
            (w[10] = u))
          : (u = w[10]),
        w[11] !== C || w[12] !== u
          ? ((m = (0, n.jsx)(d.Tz, { fixedSearchWidth: !0, search: u, actions: C })),
            (w[11] = C),
            (w[12] = u),
            (w[13] = m))
          : (m = w[13]),
        w[14] !== t || w[15] !== m
          ? ((g = (0, n.jsx)("div", {
              className: "scrollbar-on-hover shrink-0 scrollbar-stable overflow-y-hidden",
              "data-page-edge-region": !0,
              children: (0, n.jsx)(d.gX, {
                className: "max-w-(--page-content-max-width)",
                horizontalPaddingClassName: "px-14",
                collapseOnScroll: !0,
                expandSearchWhenWrapped: !0,
                sticky: !1,
                showDivider: !1,
                title: t,
                actions: m,
              }),
            })),
            (w[14] = t),
            (w[15] = m),
            (w[16] = g))
          : (g = w[16]))
      let L = null == _
      return (
        w[17] !== _ || w[18] !== D || w[19] !== k
          ? ((h = D ? (0, n.jsx)(p, { view: k, onSelectView: _ ?? f }) : null),
            (w[17] = _),
            (w[18] = D),
            (w[19] = k),
            (w[20] = h))
          : (h = w[20]),
        w[21] !== R || w[22] !== P || w[23] !== B || w[24] !== k || w[25] !== S
          ? ((x = "pages" === k ? (0, n.jsx)(c.E2, { value: S, onChange: P, disabled: R }) : B),
            (w[21] = R),
            (w[22] = P),
            (w[23] = B),
            (w[24] = k),
            (w[25] = S),
            (w[26] = x))
          : (x = w[26]),
        w[27] !== R || w[28] !== x
          ? ((b = (0, n.jsx)("div", { className: "ms-auto min-w-0", inert: R, children: x })),
            (w[27] = R),
            (w[28] = x),
            (w[29] = b))
          : (b = w[29]),
        w[30] !== b || w[31] !== L || w[32] !== h
          ? ((y = (0, n.jsx)("div", {
              className: "scrollbar-on-hover shrink-0 scrollbar-stable overflow-y-hidden pt-panel",
              children: (0, n.jsxs)("div", {
                className:
                  "mx-auto flex min-h-15 w-full max-w-(--page-content-max-width) min-w-0 flex-wrap items-center gap-4 px-14",
                inert: L,
                children: [h, b],
              }),
            })),
            (w[30] = b),
            (w[31] = L),
            (w[32] = h),
            (w[33] = y))
          : (y = w[33]),
        w[34] !== N || w[35] !== y || w[36] !== g
          ? ((v = (0, n.jsx)("div", {
              className: "flex min-h-0 flex-1 flex-col [--page-content-max-width:1440px]",
              "data-new-slate-layout": !0,
              children: (0, n.jsxs)(s.bn, { contentInset: "when-present", children: [g, y, N] }),
            })),
            (w[34] = N),
            (w[35] = y),
            (w[36] = g),
            (w[37] = v))
          : (v = w[37]),
        v
      )
    }
    function f() {}
  },
  SVco(e, t, a) {
    a.d(
      t,
      {},
      {
        E: function (e, t) {
          switch (t) {
            case "black":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.black", defaultMessage: "Default" })
            case "blue":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.blue", defaultMessage: "Blue" })
            case "green":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.green", defaultMessage: "Green" })
            case "orange":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.orange", defaultMessage: "Orange" })
            case "pink":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.pink", defaultMessage: "Pink" })
            case "purple":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.purple", defaultMessage: "Purple" })
            case "red":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.red", defaultMessage: "Red" })
            case "yellow":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.yellow", defaultMessage: "Yellow" })
          }
        },
        K: ["black", "red", "orange", "yellow", "green", "blue", "purple", "pink"],
      },
    )
  },
  qlvd(e, t, a) {
    a.d(t, { t: () => i })
    var n = a("DBCl"),
      r = a("Qgfj")
    let l = (0, r.YK)({
      "bar-chart": { id: "codex.projectAppearance.icon.option.bar_chart", defaultMessage: "Bar Chart" },
      book: { id: "codex.projectAppearance.icon.option.book", defaultMessage: "Book" },
      brain: { id: "codex.projectAppearance.icon.option.brain", defaultMessage: "Brain" },
      "currency-dollar": {
        id: "codex.projectAppearance.icon.option.currency_dollar",
        defaultMessage: "Currency Dollar",
      },
      customize: { id: "codex.projectAppearance.icon.option.customize", defaultMessage: "Customize" },
      "desk-globe": { id: "codex.projectAppearance.icon.option.desk_globe", defaultMessage: "Globe Spin" },
      dumbbell: { id: "codex.projectAppearance.icon.option.dumbbell", defaultMessage: "Dumbbell" },
      edit: { id: "codex.projectAppearance.icon.option.edit", defaultMessage: "Pencil" },
      flask: { id: "codex.projectAppearance.icon.option.flask", defaultMessage: "Flask" },
      folder: { id: "codex.projectAppearance.icon.option.folder", defaultMessage: "Folder" },
      function: { id: "codex.projectAppearance.icon.option.function", defaultMessage: "Code Brackets" },
      globe: { id: "codex.projectAppearance.icon.option.globe", defaultMessage: "Globe" },
      "graduation-cap": { id: "codex.projectAppearance.icon.option.graduation_cap", defaultMessage: "Graduation Cap" },
      health: { id: "codex.projectAppearance.icon.option.health", defaultMessage: "Health" },
      heart: { id: "codex.projectAppearance.icon.option.heart", defaultMessage: "Heart" },
      kettlebell: { id: "codex.projectAppearance.icon.option.kettlebell", defaultMessage: "Kettlebell" },
      logs: { id: "codex.projectAppearance.icon.option.logs", defaultMessage: "Logs" },
      lotus: { id: "codex.projectAppearance.icon.option.lotus", defaultMessage: "Lotus" },
      music: { id: "codex.projectAppearance.icon.option.music", defaultMessage: "Music" },
      palette: { id: "codex.projectAppearance.icon.option.palette", defaultMessage: "Palette" },
      paw: { id: "codex.projectAppearance.icon.option.paw", defaultMessage: "Paw" },
      plane: { id: "codex.projectAppearance.icon.option.plane", defaultMessage: "Plane" },
      plant: { id: "codex.projectAppearance.icon.option.plant", defaultMessage: "Plant" },
      popcorn: { id: "codex.projectAppearance.icon.option.popcorn", defaultMessage: "Popcorn" },
      scale: { id: "codex.projectAppearance.icon.option.scale", defaultMessage: "Balancing Scale" },
      stethoscope: { id: "codex.projectAppearance.icon.option.stethoscope", defaultMessage: "Stethoscope" },
      suitcase: { id: "codex.projectAppearance.icon.option.suitcase", defaultMessage: "Suitcase" },
      terminal: { id: "codex.projectAppearance.icon.option.terminal", defaultMessage: "Terminal" },
      wrench: { id: "codex.projectAppearance.icon.option.wrench", defaultMessage: "Wrench" },
      writing: { id: "codex.projectAppearance.icon.option.writing", defaultMessage: "Writing" },
    })
    ;((0, r.zR)({ id: "symbolPicker.icons.category.work", defaultMessage: "Work" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.learning", defaultMessage: "Learning" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.creative", defaultMessage: "Creative" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.wellbeing", defaultMessage: "Health and wellbeing" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.travel", defaultMessage: "Travel and places" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.nature", defaultMessage: "Nature" }))
    let o = {
        folder: { categoryId: "work", keywords: ["files", "documents", "organize", "project", "workspace"] },
        "currency-dollar": {
          categoryId: "work",
          keywords: ["money", "finance", "budget", "bank", "payment", "business"],
        },
        book: { categoryId: "learning", keywords: ["reading", "study", "education", "library", "literature"] },
        "graduation-cap": {
          categoryId: "learning",
          keywords: ["school", "university", "college", "education", "degree", "study"],
        },
        edit: { categoryId: "creative", keywords: ["pencil", "writing", "drawing", "draft", "notes"] },
        writing: { categoryId: "creative", keywords: ["pen", "author", "journal", "essay", "story", "draft"] },
        function: { categoryId: "work", keywords: ["developer", "code", "programming", "software", "math", "formula"] },
        terminal: { categoryId: "work", keywords: ["developer", "code", "command", "console", "shell", "computer"] },
        music: { categoryId: "creative", keywords: ["audio", "sound", "song", "playlist", "instrument"] },
        popcorn: { categoryId: "creative", keywords: ["movie", "film", "cinema", "entertainment", "snack"] },
        customize: { categoryId: "creative", keywords: ["design", "drawing", "art", "tools", "pens", "personalize"] },
        palette: { categoryId: "creative", keywords: ["paint", "color", "art", "design", "drawing"] },
        stethoscope: {
          categoryId: "wellbeing",
          keywords: ["doctor", "medical", "medicine", "hospital", "care", "health"],
        },
        health: { categoryId: "wellbeing", keywords: ["medical", "medicine", "emergency", "ambulance", "care"] },
        lotus: {
          categoryId: "wellbeing",
          keywords: ["meditation", "mindfulness", "yoga", "calm", "relax", "wellness"],
        },
        suitcase: { categoryId: "travel", keywords: ["vacation", "trip", "luggage", "packing", "holiday", "business"] },
        "bar-chart": {
          categoryId: "work",
          keywords: ["analytics", "data", "statistics", "report", "growth", "business"],
        },
        kettlebell: {
          categoryId: "wellbeing",
          keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"],
        },
        dumbbell: {
          categoryId: "wellbeing",
          keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"],
        },
        logs: { categoryId: "work", keywords: ["notebook", "journal", "records", "notes", "list", "tracking"] },
        scale: { categoryId: "work", keywords: ["law", "legal", "justice", "balance", "decision", "weight"] },
        "desk-globe": {
          categoryId: "travel",
          keywords: ["world", "earth", "geography", "map", "countries", "explore"],
        },
        plane: { categoryId: "travel", keywords: ["vacation", "flight", "airport", "trip", "holiday", "airplane"] },
        globe: { categoryId: "travel", keywords: ["world", "earth", "internet", "website", "global", "language"] },
        wrench: {
          categoryId: "work",
          keywords: ["tools", "repair", "build", "maintenance", "settings", "engineering"],
        },
        paw: { categoryId: "nature", keywords: ["pet", "animal", "dog", "cat", "wildlife"] },
        flask: { categoryId: "learning", keywords: ["science", "chemistry", "experiment", "laboratory", "research"] },
        brain: {
          categoryId: "learning",
          keywords: ["thinking", "idea", "knowledge", "intelligence", "psychology", "mind"],
        },
        heart: { categoryId: "wellbeing", keywords: ["love", "care", "favorite", "relationship", "emotion"] },
        plant: { categoryId: "nature", keywords: ["garden", "growth", "leaves", "environment", "ecology", "green"] },
      },
      s = n.K4r.map(function (e) {
        return { id: e, label: l[e], ...o[e] }
      })
    function i(e, t) {
      let a = d(e, t.locale)
      if (0 === a.length) return s
      let n = a.split(" ")
      return s
        .flatMap((e) => {
          let r = d(t.formatMessage(e.label), t.locale),
            l = d(e.id, t.locale)
          return n.every((t) => r.includes(t) || l.includes(t) || e.keywords.some((e) => e.includes(t)))
            ? [{ icon: e, score: +(r !== a && l !== a) }]
            : []
        })
        .sort((e, t) => e.score - t.score)
        .map(({ icon: e }) => e)
    }
    function d(e, t) {
      return e
        .trim()
        .toLocaleLowerCase(t)
        .replace(/[\s_-]+/g, " ")
    }
  },
  duD4(e, t, a) {
    function n(e, [t, a]) {
      return Math.min(a, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(n, "name", { value: "clamp", configurable: !0 }), a.d(t, {}, { q: n }))
  },
  YAOF(e, t, a) {
    a.d(t, { Q6: () => R, bL: () => A, zi: () => O, CC: () => T })
    var n = a("zd8w"),
      r = a("duD4"),
      l = a("kUVq"),
      o = a("lVCP"),
      s = a("zWxU"),
      i = a("Hj0L"),
      d = a("k5JT")
    function c(e) {
      let t = n.useRef({ value: e, previous: e })
      return n.useMemo(
        () => (
          t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
          t.current.previous
        ),
        [e],
      )
    }
    ;(0, Object.defineProperty)(c, "name", { value: "usePrevious", configurable: !0 })
    var u = a("Vuge"),
      m = a("Fc3g"),
      p = a("gMOs"),
      g = a("ABep"),
      f = Object.defineProperty,
      h = (e, t) => f(e, "name", { value: t, configurable: !0 }),
      x = ["PageUp", "PageDown"],
      b = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      y = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      v = "Slider",
      [w, j, C] = (0, p.N)(v),
      [N, k] = (0, s.A)(v, [C]),
      [S, M] = N(v),
      A = n.forwardRef(
        h(function (e, t) {
          let {
              name: a,
              min: s = 0,
              max: d = 100,
              step: c = 1,
              orientation: u = "horizontal",
              disabled: m = !1,
              minStepsBetweenThumbs: p = 0,
              defaultValue: f = [s],
              value: y,
              onValueChange: v = h(() => {}, "onValueChange"),
              onValueCommit: j = h(() => {}, "onValueCommit"),
              inverted: C = !1,
              form: N,
              ...k
            } = e,
            M = n.useRef(new Set()),
            A = n.useRef(0),
            I = n.useRef(!1),
            _ = "horizontal" === u,
            [z, T] = n.useState(null),
            D = (0, o.s)(t, T),
            [R = [], V] = (0, i.i)({
              prop: y,
              defaultProp: f,
              onChange: h((e) => {
                let t = [...M.current]
                ;(t[A.current]?.focus({ preventScroll: !0, focusVisible: I.current }), (I.current = !1), v(e))
              }, "onChange"),
            }),
            E = n.useRef(R),
            L = n.useRef(R)
          function K(e) {
            let t = Q(R, e)
            H(e, t)
          }
          function U(e) {
            H(e, A.current)
          }
          function O() {
            String(R) !== String(E.current) && j(R)
          }
          function H(e, t, { commit: a } = { commit: !1 }) {
            let n = Z(c),
              l = J(Math.round((e - s) / c) * c + s, n),
              o = (0, r.q)(l, [s, d])
            V((e = []) => {
              let n = $(e, o, t)
              if (!X(n, p * c)) return e
              {
                A.current = n.indexOf(o)
                let t = String(n) !== String(e)
                return (t && a && j(n), t ? n : e)
              }
            })
          }
          return (
            n.useEffect(() => {
              let e = N ? z?.ownerDocument.getElementById(N) : z?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = h(() => V(L.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [z, N, V]),
            h(K, "handleSlideStart"),
            h(U, "handleSlideMove"),
            h(O, "handleSlideEnd"),
            h(H, "updateValues"),
            (0, g.jsx)(S, {
              scope: e.__scopeSlider,
              name: a,
              disabled: m,
              min: s,
              max: d,
              valueIndexToChangeRef: A,
              thumbs: M.current,
              values: R,
              orientation: u,
              form: N,
              children: (0, g.jsx)(w.Provider, {
                scope: e.__scopeSlider,
                children: (0, g.jsx)(w.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, g.jsx)(_ ? P : B, {
                    "aria-disabled": m,
                    "data-disabled": m ? "" : void 0,
                    ...k,
                    ref: D,
                    onPointerDown: (0, l.mK)(k.onPointerDown, () => {
                      m || ((E.current = R), (I.current = !1))
                    }),
                    min: s,
                    max: d,
                    inverted: C,
                    onSlideStart: m ? void 0 : K,
                    onSlideMove: m ? void 0 : U,
                    onSlideEnd: m ? void 0 : O,
                    onHomeKeyDown: () => {
                      m || ((I.current = !0), H(s, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      m || ((I.current = !0), H(d, R.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!m) {
                        I.current = !0
                        let a = x.includes(e.key) || (e.shiftKey && b.includes(e.key)),
                          n = A.current
                        H(ee(R[n], { min: s, step: c, direction: t, multiplier: a ? 10 : 1 }), n, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [I, _] = N(v, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      P = n.forwardRef(
        h(function (e, t) {
          let {
              min: a,
              max: r,
              dir: l,
              inverted: s,
              onSlideStart: i,
              onSlideMove: c,
              onSlideEnd: u,
              onStepKeyDown: m,
              ...p
            } = e,
            [f, x] = n.useState(null),
            b = (0, o.s)(t, x),
            v = n.useRef(void 0),
            w = (0, d.useDirection)(l),
            j = "ltr" === w,
            C = (j && !s) || (!j && s)
          function N(e) {
            let t = v.current || f.getBoundingClientRect(),
              n = Y([0, t.width], C ? [a, r] : [r, a])
            return ((v.current = t), n(e - t.left))
          }
          return (
            h(N, "getValueFromPointer"),
            (0, g.jsx)(I, {
              scope: e.__scopeSlider,
              startEdge: C ? "left" : "right",
              endEdge: C ? "right" : "left",
              direction: C ? 1 : -1,
              size: "width",
              children: (0, g.jsx)(z, {
                dir: w,
                "data-orientation": "horizontal",
                ...p,
                ref: b,
                style: { ...p.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = N(e.clientX)
                  i?.(t)
                },
                onSlideMove: (e) => {
                  let t = N(e.clientX)
                  c?.(t)
                },
                onSlideEnd: () => {
                  ;((v.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = y[C ? "from-left" : "from-right"].includes(e.key)
                  m?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderHorizontal"),
      ),
      B = n.forwardRef(
        h(function (e, t) {
          let {
              min: a,
              max: r,
              inverted: l,
              onSlideStart: s,
              onSlideMove: i,
              onSlideEnd: d,
              onStepKeyDown: c,
              ...u
            } = e,
            m = n.useRef(null),
            p = (0, o.s)(t, m),
            f = n.useRef(void 0),
            x = !l
          function b(e) {
            let t = f.current || m.current.getBoundingClientRect(),
              n = Y([0, t.height], x ? [r, a] : [a, r])
            return ((f.current = t), n(e - t.top))
          }
          return (
            h(b, "getValueFromPointer"),
            (0, g.jsx)(I, {
              scope: e.__scopeSlider,
              startEdge: x ? "bottom" : "top",
              endEdge: x ? "top" : "bottom",
              size: "height",
              direction: x ? 1 : -1,
              children: (0, g.jsx)(z, {
                "data-orientation": "vertical",
                ...u,
                ref: p,
                style: { ...u.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = b(e.clientY)
                  s?.(t)
                },
                onSlideMove: (e) => {
                  let t = b(e.clientY)
                  i?.(t)
                },
                onSlideEnd: () => {
                  ;((f.current = void 0), d?.())
                },
                onStepKeyDown: (e) => {
                  let t = y[x ? "from-bottom" : "from-top"].includes(e.key)
                  c?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      z = n.forwardRef(
        h(function (e, t) {
          let {
              __scopeSlider: a,
              onSlideStart: n,
              onSlideMove: r,
              onSlideEnd: o,
              onHomeKeyDown: s,
              onEndKeyDown: i,
              onStepKeyDown: d,
              ...c
            } = e,
            u = M(v, a)
          return (0, g.jsx)(m.sG.span, {
            ...c,
            ref: t,
            onKeyDown: (0, l.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (s(e), e.preventDefault())
                : "End" === e.key
                  ? (i(e), e.preventDefault())
                  : x.concat(b).includes(e.key) && (d(e), e.preventDefault())
            }),
            onPointerDown: (0, l.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                u.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : n(e))
            }),
            onPointerMove: (0, l.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && r(e)
            }),
            onPointerUp: (0, l.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), o(e))
            }),
          })
        }, "SliderImpl"),
      ),
      T = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: a, ...n } = e,
            r = M("SliderTrack", a)
          return (0, g.jsx)(m.sG.span, {
            "data-disabled": r.disabled ? "" : void 0,
            "data-orientation": r.orientation,
            ...n,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      D = "SliderRange",
      R = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: a, ...r } = e,
            l = M(D, a),
            s = _(D, a),
            i = n.useRef(null),
            d = (0, o.s)(t, i),
            c = l.values.length,
            u = l.values.map((e) => W(e, l.min, l.max)),
            p = c > 1 ? Math.min(...u) : 0,
            f = 100 - Math.max(...u)
          return (0, g.jsx)(m.sG.span, {
            "data-orientation": l.orientation,
            "data-disabled": l.disabled ? "" : void 0,
            ...r,
            ref: d,
            style: { ...e.style, [s.startEdge]: p + "%", [s.endEdge]: f + "%" },
          })
        }, "SliderRange"),
      ),
      [V, E] = N("SliderThumb")
    function L(e) {
      let { __scopeSlider: t, name: a, children: r, internal_do_not_use_render: l } = e,
        o = M("SliderThumbProvider", t),
        s = j(t),
        [i, d] = n.useState(null),
        c = n.useMemo(() => (i ? s().findIndex((e) => e.ref.current === i) : -1), [s, i]),
        m = (0, u.X)(i),
        p = !i || !!o.form || !!i.closest("form"),
        f = o.values[c],
        h = a ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0),
        x = void 0 === f ? 0 : W(f, o.min, o.max)
      n.useEffect(() => {
        if (i)
          return (
            o.thumbs.add(i),
            () => {
              o.thumbs.delete(i)
            }
          )
      }, [i, o.thumbs])
      let b = {
        value: f,
        name: h,
        form: o.form,
        isFormControl: p,
        index: c,
        thumb: i,
        onThumbChange: d,
        percent: x,
        size: m,
      }
      return (0, g.jsx)(V, { scope: t, ...b, children: et(l) ? l(b) : r })
    }
    h(L, "SliderThumbProvider")
    var K = "SliderThumbTrigger",
      U = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: a, ...n } = e,
            r = M(K, a),
            s = _(K, a),
            { index: i, value: d, percent: c, size: u, onThumbChange: p } = E(K, a),
            f = (0, o.s)(t, p),
            h = F(i, r.values.length),
            x = u?.[s.size],
            b = x ? G(x, c, s.direction) : 0
          return (0, g.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${c}% + ${b}px)`,
            },
            children: (0, g.jsx)(w.ItemSlot, {
              scope: a,
              children: (0, g.jsx)(m.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || h,
                "aria-valuemin": r.min,
                "aria-valuenow": d,
                "aria-valuemax": r.max,
                "aria-orientation": r.orientation,
                "data-orientation": r.orientation,
                "data-disabled": r.disabled ? "" : void 0,
                tabIndex: r.disabled ? void 0 : 0,
                ...n,
                ref: f,
                style: void 0 === d ? { display: "none" } : e.style,
                onFocus: (0, l.mK)(e.onFocus, () => {
                  r.valueIndexToChangeRef.current = i
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      O = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: a, name: n, ...r } = e
          return (0, g.jsx)(L, {
            __scopeSlider: a,
            name: n,
            internal_do_not_use_render: ({ index: e, isFormControl: n }) =>
              (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsx)(U, { ...r, ref: t, __scopeSlider: a }),
                  n ? (0, g.jsx)(H, { __scopeSlider: a }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      H = n.forwardRef(
        h(function ({ __scopeSlider: e, ...t }, a) {
          let { value: r, name: l, form: s } = E("SliderBubbleInput", e),
            i = n.useRef(null),
            d = (0, o.s)(i, a),
            u = c(r)
          return (
            n.useEffect(() => {
              let e = i.current
              if (!e) return
              let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
              if (u !== r && t) {
                let a = new Event("input", { bubbles: !0 })
                ;(t.call(e, r), e.dispatchEvent(a))
              }
            }, [u, r]),
            (0, g.jsx)(m.sG.input, { style: { display: "none" }, name: l, form: s, ...t, ref: d, defaultValue: r })
          )
        }, "SliderBubbleInput"),
      )
    function $(e = [], t, a) {
      let n = [...e]
      return ((n[a] = t), n.sort((e, t) => e - t))
    }
    function W(e, t, a) {
      return (0, r.q)((100 / (a - t)) * (e - t), [0, 100])
    }
    function F(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function Q(e, t) {
      if (1 === e.length) return 0
      let a = e.map((e) => Math.abs(e - t)),
        n = Math.min(...a)
      return a.indexOf(n)
    }
    function G(e, t, a) {
      let n = e / 2,
        r = Y([0, 50], [0, n])
      return (n - r(t) * a) * a
    }
    function q(e) {
      return e.slice(0, -1).map((t, a) => e[a + 1] - t)
    }
    function X(e, t) {
      return !(t > 0) || Math.min(...q(e)) >= t
    }
    function Y(e, t) {
      return (a) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let n = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + n * (a - e[0])
      }
    }
    function Z(e) {
      if (!Number.isFinite(e)) return 0
      let t = e.toString()
      if (t.includes("e")) {
        let [e, a] = t.split("e"),
          n = e.split(".")[1] || "",
          r = Number(a)
        return Math.max(0, n.length - r)
      }
      let a = t.split(".")[1]
      return a ? a.length : 0
    }
    function J(e, t) {
      let a = Math.pow(10, t)
      return Math.round(e * a) / a
    }
    function ee(e, { min: t, step: a, direction: n, multiplier: r }) {
      let l,
        o = Z(a),
        s = (e - t) / a,
        i = Math.round(s)
      return ((l = J(i * a + t, o) === J(e, o) ? i + r * n : n > 0 ? Math.ceil(s) : Math.floor(s)), J(l * a + t, o))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(h($, "getNextSortedValues"),
      h(W, "convertValueToPercentage"),
      h(F, "getLabel"),
      h(Q, "getClosestValueIndex"),
      h(G, "getThumbInBoundsOffset"),
      h(q, "getStepsBetweenValues"),
      h(X, "hasMinStepsBetweenValues"),
      h(Y, "linearScale"),
      h(Z, "getDecimalCount"),
      h(J, "roundValue"),
      h(ee, "getNextStepValue"),
      h(et, "isFunction"))
  },
}
//# sourceMappingURL=997680.117d42adff.js.map
