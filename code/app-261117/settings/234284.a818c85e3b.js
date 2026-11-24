export const __rspack_esm_ids = [234284]
export const __webpack_modules__ = {
  wYt7(e, t, s) {
    var n = s("ABep")
    ;(s("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 40,
          height: 48,
          fill: "none",
          viewBox: "0 0 40 48",
          ...e,
          children: (0, n.jsx)("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.67,
            d: "m38.963 18.927-3.072-5.963m3.072 5.963L33 22m5.963-3.073C24.132 13.427 10.5 15.5 1.11 22.47",
            opacity: 0.2,
          }),
        })))
  },
  ZYH5(e, t, s) {
    var n = s("ABep")
    ;(s("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M9.995 12.315c.489 0 .875.37.875.842 0 .473-.386.843-.875.843-.488 0-.875-.37-.875-.843 0-.472.387-.842.875-.842ZM10.001 6c.478 0 .778.295.778.79 0 .042 0 .107-.006.16l-.08 3.716c-.016.456-.252.725-.698.725-.445 0-.681-.269-.692-.725L9.217 6.95c0-.053-.006-.118-.006-.16 0-.495.307-.79.79-.79Z",
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Zm0 1.33a6.585 6.585 0 1 0 0 13.17 6.585 6.585 0 0 0 0-13.17Z",
              clipRule: "evenodd",
            }),
          ],
        })))
  },
  VVkm(e, t, s) {
    var n = s("QosV"),
      r = s("T0Rc"),
      l = s("GaA7"),
      i = s("rvFo")
    function a(e) {
      return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
    }
    s.d(
      t,
      {},
      {
        T9: a,
        b4: function ({
          canUsePersonalizedSuggestions: e,
          generatedSuggestionsEnabled: t,
          hasGeneratedSuggestionsReadSettled: s,
          shouldUseCuratedNewChatPageSuggestions: n,
        }) {
          return !!n || !t || !e || s
        },
        fy: function (e) {
          var t, s
          let o,
            d,
            u,
            c = (0, n.c)(9),
            { accountId: m, enabled: p, hostId: g } = e
          return (
            c[0] !== m || c[1] !== g
              ? ((t = g), (s = m), (o = [...a(t), s]), (c[0] = m), (c[1] = g), (c[2] = o))
              : (o = c[2]),
            c[3] !== g
              ? ((d = async () =>
                  (await l.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId: g })) ?? !1),
                (c[3] = g),
                (c[4] = d))
              : (d = c[4]),
            c[5] !== p || c[6] !== o || c[7] !== d
              ? ((u = { queryKey: o, queryFn: d, enabled: p, retry: !1, staleTime: i.D.FIVE_MINUTES }),
                (c[5] = p),
                (c[6] = o),
                (c[7] = d),
                (c[8] = u))
              : (u = c[8]),
            (0, r.I)(u)
          )
        },
        o1: function ({ debugOverride: e, experimentEligible: t, personalized: s }) {
          return e ?? (t && s ? "generated" : "curated")
        },
        qH: function ({
          areNewChatPageSuggestionsLoading: e,
          hasProjectRoot: t,
          shouldShowHomeSuggestions: s,
          shouldUseCuratedNewChatPageSuggestions: n,
        }) {
          return !e && (!!n || (t && s))
        },
      },
    )
  },
  zvpH(e, t, s) {
    var n = s("GaA7"),
      r = s("q77y")
    let l = ["vscode", "ambient-suggestions"],
      i = ["vscode", "ambient-suggestions-refresh"]
    s.d(
      t,
      {},
      {
        Kd: function (e) {
          return [...i, JSON.stringify(e)]
        },
        SF: l,
        cM: i,
        tO: function (e) {
          return [...l, JSON.stringify(e)]
        },
        ty: async function (e, t) {
          let s = n.appServices?.ambientSuggestions
          null != s && (await (0, r.P)(s.refresh(e), t))
        },
      },
    )
  },
  AnoK(e, t, s) {
    var n = s("DBCl")
    s.d(
      t,
      {},
      {
        l: function (e) {
          return !0 !== e.ephemeral && e.threadSource !== n.ONi
        },
      },
    )
  },
  oxjR(e, t, s) {
    var n = s("DBCl"),
      r = s("VVkm"),
      l = s("zvpH"),
      i = s("sLlu"),
      a = s("rGp2")
    let o = [null, "science"]
    function d(e) {
      return e.isAccessible && e.isEnabled
    }
    s.d(
      t,
      {},
      {
        U: async function ({ hostId: e, queryClient: t, refreshAppsList: s }) {
          let u = t.getQueriesData({ queryKey: ["apps", "list", e] }),
            c = u.some(([, e]) => null != e) ? u.flatMap(([, e]) => e ?? []) : void 0,
            [m] = await Promise.all([s(), (0, i.y)(t, a.hH)])
          return (
            !(function ({ previousApps: e, nextApps: t }) {
              return null != e && !e.some(d) && t.some(d)
            })({ previousApps: c, nextApps: m }) ||
              (await (0, i.y)(t, (0, r.T9)(e)),
              await Promise.all(
                o.map((t) =>
                  (0, l.ty)({ domain: t, hostId: e, projectRoot: (0, n.DIv)(n.m20), mode: "first-plugin-connect" }),
                ),
              ),
              await Promise.all([t.invalidateQueries({ queryKey: l.SF }), t.invalidateQueries({ queryKey: l.cM })])),
            m
          )
        },
      },
    )
  },
  wqAy(e, t, s) {
    var n = s("ABep"),
      r = s("QosV"),
      l = s("on57"),
      i = s("bVeK"),
      a = s("f26W")
    s.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            s,
            o,
            d,
            u,
            c,
            m,
            p = (0, r.c)(23),
            { className: g, label: f, onClick: h, show: y, showWorkingDots: x } = e,
            C = void 0 !== x && x,
            j = C ? "w-10" : "w-8",
            v = y ? "opacity-100" : "pointer-events-none opacity-0"
          p[0] !== g || p[1] !== j || p[2] !== v
            ? ((t = (0, l.A)(
                "group/scroll-to-bottom cursor-interaction absolute z-30 flex h-8 translate-x-1/2 items-center justify-center rounded-full text-secondary transition-[width,opacity] duration-120 ease-out motion-reduce:transition-none end-1/2 print:hidden",
                j,
                v,
                g,
              )),
              (p[0] = g),
              (p[1] = j),
              (p[2] = v),
              (p[3] = t))
            : (t = p[3])
          let b = !y,
            S = y ? void 0 : -1,
            w = y ? h : void 0,
            I = C ? "w-10 group-hover/scroll-to-bottom:w-8" : "w-8"
          ;(p[4] !== I
            ? ((s = (0, l.A)(
                "pointer-events-none flex h-full shrink-0 items-center justify-center rounded-full border border-default bg-surface bg-clip-padding shadow-md transition-[width] duration-120 ease-out motion-reduce:transition-none",
                I,
              )),
              (p[4] = I),
              (p[5] = s))
            : (s = p[5]),
            p[6] !== C
              ? ((o =
                  C &&
                  (0, n.jsx)("span", {
                    className: "group-hover/scroll-to-bottom:hidden",
                    children: (0, n.jsx)(a.V, {}),
                  })),
                (p[6] = C),
                (p[7] = o))
              : (o = p[7]))
          let N = C && "hidden group-hover/scroll-to-bottom:block"
          return (
            p[8] !== N ? ((d = (0, l.A)("text-default", N)), (p[8] = N), (p[9] = d)) : (d = p[9]),
            p[10] !== d ? ((u = (0, n.jsx)(i.b$U, { className: d })), (p[10] = d), (p[11] = u)) : (u = p[11]),
            p[12] !== o || p[13] !== u || p[14] !== s
              ? ((c = (0, n.jsxs)("span", { className: s, children: [o, u] })),
                (p[12] = o),
                (p[13] = u),
                (p[14] = s),
                (p[15] = c))
              : (c = p[15]),
            p[16] !== f || p[17] !== c || p[18] !== t || p[19] !== b || p[20] !== S || p[21] !== w
              ? ((m = (0, n.jsx)("button", {
                  className: t,
                  "aria-hidden": b,
                  "aria-label": f,
                  tabIndex: S,
                  type: "button",
                  onClick: w,
                  children: c,
                })),
                (p[16] = f),
                (p[17] = c),
                (p[18] = t),
                (p[19] = b),
                (p[20] = S),
                (p[21] = w),
                (p[22] = m))
              : (m = p[22]),
            m
          )
        },
      },
    )
  },
  BrP7(e, t, s) {
    s.d(t, { t: () => b })
    var n = s("ABep"),
      r = s("QosV"),
      l = s("i1uX"),
      i = s("on57"),
      a = s("IjbW"),
      o = s("K4Cx"),
      d = s("zd8w"),
      u = s("UxN3"),
      c = s("SziE"),
      m = s("hZax"),
      p = s("Sm6l")
    let g = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function f(e) {
      let t,
        s,
        l,
        a,
        o,
        d,
        u,
        c,
        m,
        f,
        h,
        y,
        x = (0, r.c)(26)
      x[0] !== e
        ? (({ children: t, icon: s, size: a, surface: o, labelVisibility: d, ...l } = e),
          (x[0] = e),
          (x[1] = t),
          (x[2] = s),
          (x[3] = l),
          (x[4] = a),
          (x[5] = o),
          (x[6] = d))
        : ((t = x[1]), (s = x[2]), (l = x[3]), (a = x[4]), (o = x[5]), (d = x[6]))
      let C = void 0 === o ? "elevated" : o,
        j = void 0 === d ? "visible" : d,
        v = "large" === a && "visible" === j && "pb-1.5"
      x[7] !== v ? ((u = (0, i.A)("group/labeled-icon flex-col gap-1.5", v)), (x[7] = v), (x[8] = u)) : (u = x[8])
      let b = "elevated" === C ? "border shadow-xs" : "border-hairline",
        S = g[a]
      ;(x[9] !== b || x[10] !== S.icon
        ? ((c = (0, i.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            b,
            S.icon,
          )),
          (x[9] = b),
          (x[10] = S.icon),
          (x[11] = c))
        : (c = x[11]),
        x[12] !== s || x[13] !== c
          ? ((m = (0, n.jsx)("span", { className: c, children: s })), (x[12] = s), (x[13] = c), (x[14] = m))
          : (m = x[14]))
      let w = "hidden" === j ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        I = "visible" === j && g[a].caption
      return (
        x[15] !== I || x[16] !== w ? ((f = (0, i.A)(w, I)), (x[15] = I), (x[16] = w), (x[17] = f)) : (f = x[17]),
        x[18] !== t || x[19] !== f
          ? ((h = (0, n.jsx)("span", { className: f, children: t })), (x[18] = t), (x[19] = f), (x[20] = h))
          : (h = x[20]),
        x[21] !== l || x[22] !== h || x[23] !== u || x[24] !== m
          ? ((y = (0, n.jsxs)(p.$, {
              ...l,
              className: u,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [m, h],
            })),
            (x[21] = l),
            (x[22] = h),
            (x[23] = u),
            (x[24] = m),
            (x[25] = y))
          : (y = x[25]),
        y
      )
    }
    let h = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      y = {
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
      x = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      C = {
        ...y,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${x} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      j = {
        ...y,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      v = {
        text: {
          ...y,
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
        toolbar: y,
        settings: { ...y, tabButtonClassName: `${h} button-toolbar` },
        search: {
          ...y,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...y,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...y,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${y.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...y,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...y, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: C,
        sectionFilter: {
          ...C,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${x} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ...C,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${x} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ...y,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...y,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...y,
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
          ...y,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...y, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
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
    function b(e) {
      let t,
        s = (0, r.c)(39),
        {
          tabs: a,
          selectedKey: o,
          onSelect: g,
          onTabClick: h,
          onTabHover: y,
          className: x,
          fill: C,
          scrollable: j,
          tabListRef: b,
          variant: I,
          ariaLabel: N,
          ariaLabelledBy: M,
          activationMode: A,
          animateSelection: k,
          dividerBefore: T,
        } = e,
        _ = void 0 !== C && C,
        O = void 0 !== j && j,
        E = void 0 === I ? "segmented" : I,
        R = void 0 === A ? "automatic" : A,
        P = (0, d.useId)(),
        F = v[E],
        L = "inset" === E || "choice" === E,
        z = (0, m.Zj)(!L && "icon" !== E && "text-secondary" === F.unselectedTextClassName && "1244723012"),
        U = void 0 !== k && k && ("segmentedPill" === E || "segmentedPillMuted" === E),
        D = U ? "text-default font-medium" : F.selectedClassName
      if (
        s[0] !== R ||
        s[1] !== U ||
        s[2] !== N ||
        s[3] !== M ||
        s[4] !== x ||
        s[5] !== T ||
        s[6] !== _ ||
        s[7] !== g ||
        s[8] !== h ||
        s[9] !== y ||
        s[10] !== F.closeButtonClassName ||
        s[11] !== F.itemClassName ||
        s[12] !== F.listClassName ||
        s[13] !== F.segmentedEdges ||
        s[14] !== F.selectionIndicator ||
        s[15] !== F.tabButtonClassName ||
        s[16] !== F.textSizeClassName ||
        s[17] !== F.unselectedClassName ||
        s[18] !== F.unselectedTextClassName ||
        s[19] !== O ||
        s[20] !== D ||
        s[21] !== o ||
        s[22] !== P ||
        s[23] !== b ||
        s[24] !== a ||
        s[25] !== z ||
        s[26] !== L ||
        s[27] !== E
      ) {
        let e,
          r,
          d = (0, i.A)(z ? "text-tertiary" : F.unselectedTextClassName, F.unselectedClassName),
          m = L ? p.$ : "button",
          C = _ && "w-full",
          j = O && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(s[29] !== x || s[30] !== F.listClassName || s[31] !== C || s[32] !== j
          ? ((e = (0, i.A)(F.listClassName, C, j, x)),
            (s[29] = x),
            (s[30] = F.listClassName),
            (s[31] = C),
            (s[32] = j),
            (s[33] = e))
          : (e = s[33]),
          s[34] !== R || s[35] !== g || s[36] !== O || s[37] !== a
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
                let s = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  n = s.findIndex((t) => t === e.target)
                if (n < 0 || 0 === s.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let r = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? s.length - 1
                      : (n + (e.key === (r ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + s.length) % s.length),
                  s[t]?.focus(),
                  O && s[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let l = a[t]
                null != l && "automatic" === R && g(l.key, e.timeStamp)
              }),
              (s[34] = R),
              (s[35] = g),
              (s[36] = O),
              (s[37] = a),
              (s[38] = r))
            : (r = s[38]),
          (t = (0, n.jsx)("div", {
            ref: b,
            role: "tablist",
            tabIndex: -1,
            "aria-label": N,
            "aria-labelledby": M,
            className: e,
            onWheel: O ? S : void 0,
            onKeyDown: r,
            children: a.map((e, t) => {
              let s,
                r,
                p = e.key === o,
                x = p ? D : d,
                C = 0 === t,
                j = t === a.length - 1,
                v = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": p,
                  tabIndex: p ? 0 : -1,
                  onPointerEnter: null == y ? void 0 : () => y(e.key),
                  onClick: (t) => {
                    ;((p && "manual" !== R) || g(e.key, t.timeStamp), h?.(e.key))
                  },
                }
              return (
                "inset" === E
                  ? ((s = p ? "segmentedInsetSelected" : "ghost"), (r = "compact"))
                  : "choice" === E && ((s = p ? "choiceSelected" : "outlineGhost"), (r = "dialogAction")),
                (0, n.jsxs)(
                  "div",
                  {
                    className: (0, i.A)(
                      "relative flex min-w-0 items-center",
                      F.itemClassName,
                      _ && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      C || e.key !== T
                        ? null
                        : (0, n.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === E
                        ? (0, n.jsx)(f, { ...v, icon: e.icon, size: "large", children: e.name })
                        : (0, n.jsxs)(m, {
                            ...v,
                            className: (0, i.A)(
                              _ && "min-w-0 flex-1 justify-center",
                              U && "relative isolate",
                              !L && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                F.textSizeClassName ?? "text-sm",
                                F.tabButtonClassName,
                                O && "ring-inset",
                                F.segmentedEdges && C && "rounded-l-md",
                                F.segmentedEdges && j && "rounded-r-md",
                                "browse" === E && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", p && "ring-1 ring-border-strong"]
                                  : x,
                              ],
                            ),
                            color: s,
                            radius: "choice" === E ? "full" : void 0,
                            size: r,
                            children: [
                              U && p ? (0, n.jsx)(w, { layoutId: P }) : null,
                              null != e.icon
                                ? (0, n.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              _ ? (0, n.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === F.selectionIndicator && p
                        ? (0, n.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, n.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, i.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              F.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, n.jsx)(u.bF, {
                              "aria-hidden": !1,
                              asset16: l.Q,
                              legacyIcon: c.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      F.segmentedEdges && !j
                        ? (0, n.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (s[0] = R),
          (s[1] = U),
          (s[2] = N),
          (s[3] = M),
          (s[4] = x),
          (s[5] = T),
          (s[6] = _),
          (s[7] = g),
          (s[8] = h),
          (s[9] = y),
          (s[10] = F.closeButtonClassName),
          (s[11] = F.itemClassName),
          (s[12] = F.listClassName),
          (s[13] = F.segmentedEdges),
          (s[14] = F.selectionIndicator),
          (s[15] = F.tabButtonClassName),
          (s[16] = F.textSizeClassName),
          (s[17] = F.unselectedClassName),
          (s[18] = F.unselectedTextClassName),
          (s[19] = O),
          (s[20] = D),
          (s[21] = o),
          (s[22] = P),
          (s[23] = b),
          (s[24] = a),
          (s[25] = z),
          (s[26] = L),
          (s[27] = E),
          (s[28] = t))
      } else t = s[28]
      return t
    }
    function S(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function w(e) {
      let t,
        s,
        l = (0, r.c)(5),
        { layoutId: i } = e,
        d = 0.25 * !(0, a.I)()
      return (
        l[0] !== d ? ((t = { type: "spring", duration: d, bounce: 0 }), (l[0] = d), (l[1] = t)) : (t = l[1]),
        l[2] !== i || l[3] !== t
          ? ((s = (0, n.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: i,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (l[2] = i),
            (l[3] = t),
            (l[4] = s))
          : (s = l[4]),
        s
      )
    }
  },
  f26W(e, t, s) {
    s.d(t, { V: () => a })
    var n = s("ABep"),
      r = s("QosV"),
      l = s("on57"),
      i = s("aqd9")
    function a(e) {
      let t,
        s,
        a,
        o,
        d = (0, r.c)(8),
        { variant: u, paused: c } = e,
        m = void 0 === u ? "wave" : u,
        p = void 0 !== c && c && "paused-rkSVW2"
      return (
        d[0] !== p ? ((t = (0, l.A)("flex items-center justify-center gap-1", p)), (d[0] = p), (d[1] = t)) : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel") ? ((s = [0, 1, 2]), (d[2] = s)) : (s = d[2]),
        d[3] !== m
          ? ((a = s.map((e) =>
              (0, n.jsx)(
                "span",
                {
                  className: (0, l.A)(
                    "h-1 w-1 rounded-full",
                    "gentle" === m ? ["bg-current", "gentleDot-qSvDKz"] : ["bg-text/70", "waveDot-qgKugp"],
                  ),
                },
                e,
              ),
            )),
            (d[3] = m),
            (d[4] = a))
          : (a = d[4]),
        d[5] !== t || d[6] !== a
          ? ((o = (0, n.jsx)("span", { ref: i.d, className: t, "aria-hidden": !0, children: a })),
            (d[5] = t),
            (d[6] = a),
            (d[7] = o))
          : (o = d[7]),
        o
      )
    }
  },
  oeej(e, t, s) {
    var n = s("D7Ms"),
      r = s("qmMi"),
      l = s("Dgwo"),
      i = s("GaA7"),
      a = s("q77y"),
      o = s("OWtl"),
      d = s("rvFo"),
      u = s("Igx9"),
      c = s("zsK1")
    let m = (0, r.vP)(o.u, null),
      p = (0, r.vU)(o.u, (e, { scope: t }) => ({
        queryKey: [...u.bX, e],
        queryFn: () => (0, l.V)(t, e).sendRequest("externalAgentConfig/import/readHistories", void 0),
        select: (e) => [...e.data].sort((e, t) => Number(t.completedAtMs) - Number(e.completedAtMs)),
        refetchOnMount: "always",
        staleTime: d.D.FIVE_MINUTES,
      })),
      g = (0, r.vU)(o.u, (e, { scope: t }) => ({
        queryKey: [...u.bX, e],
        queryFn: () => (0, l.V)(t, e).sendRequest("externalAgentConfig/import/readHistories", void 0),
        select: (e) => e.connectors?.map((e) => ({ codexAppId: null, ...e })) ?? [],
        refetchOnMount: "always",
        staleTime: d.D.FIVE_MINUTES,
      })),
      f = (0, r.vU)(o.u, (e, { scope: t }) => ({
        queryKey: [...u.bX, "checklist", e],
        queryFn: () => (0, l.V)(t, e).sendRequest("externalAgentConfig/import/readHistories", void 0),
        select: (e) => e.data,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        retry: !1,
        staleTime: d.D.FIVE_MINUTES,
      })),
      h = (0, r.vU)(o.u, (e) => {
        let t = i.appServices?.externalAgentImport
        return {
          queryKey: [...u.EF, e],
          queryFn: null == t ? n.hT : ({ signal: s }) => (0, a.P)(t.readStatus(e), s),
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
          retry: !1,
          staleTime: d.D.FIVE_MINUTES,
        }
      })
    function y(e) {
      return e.some((e) => e.successes.some((e) => "MCP_SERVER_CONFIG" === e.itemType && null != e.target))
    }
    s.d(
      t,
      {},
      {
        Al: function (e) {
          let t = e.find((e) => "completed" === e.kind)
          if (null == t) return e
          let s = Number(t.history.completedAtMs)
          return e.filter((e) => "running" === e.kind || s - Number(e.history.completedAtMs) <= 6e4)
        },
        NP: function (e) {
          return [...new Set(e.map((e) => e.itemType))].filter(c.KE).sort((e, t) => (0, c.Ud)(e) - (0, c.Ud)(t))
        },
        On: function ({ histories: e, importStatus: t }) {
          return (
            (t?.importedSessionCount ?? 0) > 0 ||
            t?.latestImportedAtMs != null ||
            e?.some((e) => e.successes.length > 0) === !0
          )
        },
        U6: f,
        Vh: g,
        W$: function ({ histories: e, mcpServerStatuses: t }) {
          let s = new Set(
            e.flatMap((e) =>
              e.successes.flatMap((e) => ("MCP_SERVER_CONFIG" === e.itemType && null != e.target ? [e.target] : [])),
            ),
          )
          return t.flatMap((e) => ("notLoggedIn" === e.authStatus && s.has(e.name) ? [e.name] : []))
        },
        Wp: function (e) {
          let t = new Map()
          for (let s of e.successes) {
            if (!(0, c.KE)(s.itemType)) continue
            let e = t.get(s.itemType) ?? { failedCount: 0, importedCount: 0, itemType: s.itemType }
            ;((e.importedCount += 1), t.set(s.itemType, e))
          }
          for (let s of e.failures) {
            if (!(0, c.KE)(s.itemType)) continue
            let e = t.get(s.itemType) ?? { failedCount: 0, importedCount: 0, itemType: s.itemType }
            ;((e.failedCount += 1), t.set(s.itemType, e))
          }
          return [...t.values()].sort((e, t) => (0, c.Ud)(e.itemType) - (0, c.Ud)(t.itemType))
        },
        Yu: function ({ histories: e, runningImport: t }) {
          let s = []
          for (let n of (null != t && s.push({ kind: "running", runningImport: t }), e))
            s.push({ history: n, kind: "completed" })
          return s
        },
        eB: y,
        ej: p,
        hL: h,
        iy: function ({ histories: e, historiesError: t, mcpServerStatuses: s, mcpServerStatusesError: n }) {
          return null == e
            ? null == t
              ? "loading"
              : "error"
            : y(e) && null == s
              ? null == n
                ? "loading"
                : "error"
              : "ready"
        },
        rz: m,
        uD: function (e) {
          return e.some((e) => e.successes.some((e) => "HOOKS" === e.itemType))
        },
      },
    )
  },
  ZgQ4(e, t, s) {
    var n = s("DBCl"),
      r = s("zsK1")
    function l({ homeItems: e, projectItems: t }) {
      let s = e.filter((e) => null == e.cwd || "" === e.cwd),
        n = e.filter((e) => null != e.cwd && "" !== e.cwd),
        i = (0, r.DA)((0, r.Jd)(s)),
        a = (0, r.DA)((0, r.Jd)([...n, ...t])),
        o = s.filter((e) => "SESSIONS" === e.itemType)
      return 0 === i.length && 0 === a.length && 0 === o.length
        ? null
        : { projectItems: a, sessionItems: o, toolsAndSetupItems: i }
    }
    function i({ detectedItems: e, providerIds: t }) {
      let s = e.filter((e) => t.includes(e.providerId))
      return l({
        homeItems: s.filter((e) => null == e.cwd || "" === e.cwd),
        projectItems: s.filter((e) => null != e.cwd && "" !== e.cwd),
      })
    }
    function a(e, t = []) {
      let s = new Set(t.map(n.XHz)),
        r = (0, n.jJJ)(e.sessionItems).filter((e) => !s.has((0, n.XHz)(e))),
        l = (0, n.jJJ)(e.projectItems),
        i = [...new Set([...r, ...l])].sort((e, t) => e.localeCompare(t))
      return [
        ...(function (e) {
          let t = new Map()
          for (let s of e) {
            let e =
                "claude-cowork" === s.providerId && (null == s.cwd || "" === s.cwd)
                  ? `${s.itemType}:${s.providerId}:home`
                  : u(s),
              n = t.get(e)
            if (null == n) {
              t.set(e, [s])
              continue
            }
            n.push(s)
          }
          return [...t].flatMap(([e, t]) => {
            let s = t[0]
            return null == s
              ? []
              : [
                  {
                    key: e,
                    kind: "migrationItem",
                    item: (function (e, t) {
                      var s
                      let n
                      if (1 === t.length) return e
                      let r = t.flatMap((e) => (null == e.details ? [] : [e.details]))
                      if (0 === r.length) return e
                      let l = r.flatMap((e) => e.memory ?? [])
                      return {
                        ...e,
                        details: {
                          commands: r.flatMap((e) => e.commands),
                          hooks: r.flatMap((e) => e.hooks),
                          mcpServers: r.flatMap((e) => e.mcpServers),
                          plugins:
                            ((s = r),
                            (n = new Set()),
                            s.flatMap((e) =>
                              e.plugins.flatMap((e) => {
                                let t = e.pluginNames.filter((e) => !n.has(e) && (n.add(e), !0))
                                return 0 === t.length ? [] : [{ ...e, pluginNames: t }]
                              }),
                            )),
                          sessions: r.flatMap((e) => e.sessions),
                          skills: r.flatMap((e) => e.skills),
                          subagents: r.flatMap((e) => e.subagents),
                          ...(0 === l.length ? {} : { memory: l }),
                        },
                      }
                    })(s, t),
                    items: t,
                  },
                ]
          })
        })(e.toolsAndSetupItems),
        ...(e.projectItems.length > 0 || i.length > 0
          ? [{ key: "projects", kind: "projects", count: i.length, projectRoots: i, items: e.projectItems }]
          : []),
        ...(e.sessionItems.length > 0
          ? [
              {
                key: "chats",
                kind: "chats",
                count: e.sessionItems.reduce((e, t) => e + (t.details?.sessions.length ?? 0), 0),
                items: e.sessionItems,
              },
            ]
          : []),
      ]
    }
    function o({ model: e, selection: t }) {
      let s = e.projectItems.some((e) => Object.prototype.hasOwnProperty.call(t, d(e))),
        n = a(e).filter((e) => {
          var s, n
          return (
            (s = e),
            (n = t),
            Object.prototype.hasOwnProperty.call(n, s.key)
              ? (n[s.key] ?? !1)
              : "migrationItem" === s.kind && s.items.some((e) => n[u(e)] ?? !1)
          )
        })
      return [
        ...n
          .filter((e) => "chats" !== e.kind)
          .flatMap((e) => {
            var n, r
            return "migrationItem" === e.kind
              ? ((n = e),
                (r = t),
                Object.prototype.hasOwnProperty.call(r, n.key)
                  ? r[n.key]
                    ? n.items
                    : []
                  : n.items.filter((e) => r[u(e)] ?? !1))
              : "projects" === e.kind && s
                ? e.items.filter((e) => t[d(e)] ?? !1)
                : e.items
          }),
        ...n.filter((e) => "chats" === e.kind).flatMap((e) => e.items),
      ]
    }
    function d(e) {
      return `projects:${u(e)}`
    }
    function u(e) {
      return `${e.itemType}:${e.providerId}:${e.cwd ?? "home"}:${e.description}`
    }
    s.d(
      t,
      {},
      {
        Li: o,
        Wk: function ({ detectedItems: e, providerIds: t, selection: s }) {
          let n = i({ detectedItems: e, providerIds: t })
          return null == n ? [] : o({ model: n, selection: s })
        },
        cN: i,
        pH: l,
        w_: a,
      },
    )
  },
  RIh2(e, t, s) {
    var n = s("DBCl"),
      r = s("Dgwo"),
      l = s("l00C"),
      i = s("tl5a"),
      a = s("Qtkb"),
      o = s("AnoK"),
      d = s("eFn4"),
      u = s("GaA7"),
      c = s("q77y"),
      m = s("WFY2"),
      p = s("kpIY"),
      g = s("Igx9"),
      f = s("N34f")
    let h = "external-agent-import-discovery:",
      y = null,
      x = 0
    function C() {
      ;((x += 1), (0, p.zm)(h))
    }
    s.d(
      t,
      {},
      {
        EA: function ({ hostId: e, providers: t, sessionLimits: s, workspaceRoots: n }) {
          return [...g.yF, e, t, n, s?.maxSessionAgeMs, s?.maxSessionsPerSpace]
        },
        Sq: async function ({
          cache: e = !1,
          hostId: t,
          includeHome: s,
          providers: n,
          sessionLimits: r,
          workspaceRoots: l,
        }) {
          let i = s || null == l || 0 === l.length ? void 0 : l,
            a = { hostId: t, includeHome: s, providers: n, sessionLimits: r, workspaceRoots: i },
            o = h + n.join(","),
            d = JSON.stringify(a)
          if (e) {
            await (0, p.Uz)()
            let t = (0, p.TB)(o, void 0)
            if ("refresh" !== e && t?.requestKey === d && Date.now() - t.detectedAtMs < 432e5) return t.result
          }
          "refresh" === e && (x += 1)
          let m = x,
            g = u.appServices?.externalAgentImport
          if (null == g) throw Error("External agent import is not supported by this host")
          let f = await (0, c.P)(g.detect(a))
          return (e && m === x && (0, p.jx)(o, { requestKey: d, result: f, detectedAtMs: Date.now() }), f)
        },
        gu: async function (
          e,
          { hostId: t, importAttemptId: s, items: p, projectId: g, sessionLimits: h, source: x = "settings" },
        ) {
          if (0 === p.length || !0 === e.get(f.I))
            return { importedProjectIds: [], importedSessionThreadIds: [], projectRoots: [] }
          if (null != y) throw Error("External agent import already in progress")
          C()
          let j = Promise.resolve().then(async () => {
            let f =
                "first_time_onboarding" !== x &&
                "onboarding_checklist" !== x &&
                p.some((e) => "SESSIONS" === e.itemType)
                  ? await (async function (e, t) {
                      let s = e.get(l.u$, t),
                        n = e.get(d.VJ)
                      if (null == s || "allowed" !== n.status || !("accountId" in n)) return null
                      try {
                        for (let l of [!1, !0])
                          if (
                            (
                              await (0, r.V)(e, t).sendRequest(
                                "thread/list",
                                {
                                  archived: l,
                                  cursor: null,
                                  limit: 50,
                                  modelProviders: null,
                                  sortKey: "updated_at",
                                  useStateDbOnly: !0,
                                },
                                { priority: "background", source: "thread_list" },
                              )
                            ).data.some(o.l)
                          )
                            return { accountId: n.accountId, client: s }
                      } catch {}
                      return null
                    })(e, t)
                  : null,
              y = u.appServices?.externalAgentImport
            if (null == y) throw Error("External agent import is not supported by this host")
            let C = await (0, c.P)(
              y.import({ hostId: t, importAttemptId: s, items: p, projectId: g, sessionLimits: h }),
            )
            return (
              null != f &&
                (await (async function (e, t, s, o) {
                  let u = await a.OX.readWhenReady()
                  if (null == u || e.get(l.u$, t) !== o.client) return
                  let c = e.get(d.VJ)
                  if ("allowed" !== c.status || !("accountId" in c) || c.accountId !== o.accountId) return
                  let p = new Set(u[t]),
                    g = [...new Set(s.importedSessionThreadIds)].filter(
                      (s) => "" !== s && !p.has(s) && (0, i.bJ)(e.get, (0, n.JXB)(s)) !== t,
                    ),
                    f = (
                      await Promise.allSettled(g.map((s) => (0, r.V)(e, t).markConversationAsUnread((0, n.JXB)(s))))
                    ).filter((e) => "rejected" === e.status)
                  f.length > 0 &&
                    m.v.warning("Failed to mark some imported threads unread", {
                      safe: { failedThreadCount: f.length, totalThreadCount: g.length },
                      sensitive: { errors: f.map((e) => e.reason), hostId: t },
                    })
                })(e, t, C, f)),
              C
            )
          })
          y = j
          try {
            return await j
          } finally {
            ;(C(), y === j && (y = null))
          }
        },
        lH: function () {
          return null != y
        },
        tV: function () {
          return x
        },
      },
    )
  },
  zsK1(e, t, s) {
    var n = s("KUdL"),
      r = s.n(n)
    let l = {
      CONFIG: 0,
      AGENTS_MD: 1,
      SKILLS: 2,
      COMMANDS: 3,
      SUBAGENTS: 4,
      HOOKS: 5,
      PLUGINS: 6,
      MCP_SERVER_CONFIG: 7,
      MEMORY: 8,
      SESSIONS: 9,
    }
    function i(e, t) {
      switch (t) {
        case "AGENTS_MD":
          return e.formatMessage({ id: "externalAgentConfig.itemType.agentsMd", defaultMessage: "Instructions" })
        case "CONFIG":
          return e.formatMessage({ id: "externalAgentConfig.itemType.config", defaultMessage: "Settings" })
        case "SKILLS":
          return e.formatMessage({ id: "externalAgentConfig.itemType.skills", defaultMessage: "Skills" })
        case "PLUGINS":
          return e.formatMessage({ id: "externalAgentConfig.itemType.plugins", defaultMessage: "Plugins" })
        case "SUBAGENTS":
          return e.formatMessage({ id: "externalAgentConfig.itemType.subagents", defaultMessage: "Agents" })
        case "HOOKS":
          return e.formatMessage({ id: "externalAgentConfig.itemType.hooks", defaultMessage: "Hooks" })
        case "COMMANDS":
          return e.formatMessage({ id: "externalAgentConfig.itemType.commands", defaultMessage: "Commands" })
        case "SESSIONS":
          return e.formatMessage({ id: "externalAgentConfig.itemType.sessions", defaultMessage: "Sessions" })
        case "MCP_SERVER_CONFIG":
          return e.formatMessage({ id: "externalAgentConfig.itemType.mcpServerConfig", defaultMessage: "MCP servers" })
        case "MEMORY":
          return e.formatMessage({ id: "externalAgentConfig.itemType.memory", defaultMessage: "Memory" })
      }
    }
    function a(e) {
      return d(e.itemType) && "SESSIONS" !== e.itemType
    }
    function o(e) {
      return l[e] ?? 1 / 0
    }
    function d(e) {
      return Object.hasOwn(l, e)
    }
    s.d(
      t,
      {},
      {
        DA: function (e) {
          return r()(e, ({ itemType: e }) => o(e))
        },
        Jd: function (e) {
          return e.filter(a)
        },
        KE: d,
        UY: i,
        Ud: o,
        al: function (e, t) {
          return i(e, t.itemType)
        },
        du: function (e, t) {
          switch (t) {
            case "claude-code":
              return e.formatMessage({
                id: "electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCode",
                defaultMessage: "Claude Code",
              })
            case "claude-cowork":
              return e.formatMessage({
                id: "electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCowork",
                defaultMessage: "Claude Cowork",
              })
            case "cursor":
              return e.formatMessage({
                id: "electron.onboarding.welcomeV2.externalAgentImport.provider.cursor",
                defaultMessage: "Cursor",
              })
          }
        },
      },
    )
  },
  cCJy(e, t, s) {
    s.d(t, { i: () => d })
    var n = s("ABep"),
      r = s("QosV"),
      l = s("on57"),
      i = s("wYt7")
    s("zd8w")
    var a = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "none",
          viewBox: "0 0 20 20",
          ...e,
          children: (0, n.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "m7.584 2.874.251.026c.58.085 1.125.338 1.565.73l.244.238c.111.113.15.15.186.183l.112.093q.138.102.291.175l2.09-.443.226-.037c.7-.076 1.373.182 1.844.66q.369.005.668.028c.436.036.821.112 1.18.294l.206.116c.471.288.855.703 1.107 1.198l.063.136c.137.319.2.662.23 1.042.036.428.035.957.035 1.612V12.7c0 .655 0 1.184-.034 1.612-.031.38-.094.723-.23 1.043l-.064.135c-.252.495-.636.91-1.107 1.199l-.207.115c-.358.182-.743.258-1.178.294-.428.035-.957.034-1.612.034h-6.9c-.655 0-1.184 0-1.612-.034-.38-.031-.723-.094-1.042-.23l-.136-.064a3 3 0 0 1-1.198-1.107l-.116-.207c-.182-.358-.258-.743-.294-1.178-.035-.428-.034-.957-.034-1.612V7.3c0-.655 0-1.184.034-1.612.036-.435.112-.82.294-1.178l.116-.207A3 3 0 0 1 3.76 3.196l.136-.063c.319-.137.662-.2 1.042-.23.428-.036.957-.035 1.612-.035h.695c.144 0 .242 0 .339.006M3.382 12.7c0 .675 0 1.144.03 1.508.03.357.083.558.16.708l.067.12c.167.273.408.496.695.643l.123.052c.137.05.317.085.585.107.364.03.833.03 1.508.03h6.9c.675 0 1.144 0 1.508-.03.357-.03.558-.083.708-.16l.12-.067c.273-.167.496-.408.643-.695l.052-.123c.05-.137.085-.317.107-.585.03-.364.03-.833.03-1.508V9.332H3.382zm12.132-4.632h1.1a10 10 0 0 0-.026-.651 2.3 2.3 0 0 0-.107-.585l-.052-.123a1.75 1.75 0 0 0-.643-.695l-.12-.068c-.14-.07-.324-.12-.636-.151zM12.69 5.162l-.092.015-6.204 1.318a.92.92 0 0 0-.71 1.092l.103.481h8.366l-.464-2.182a.92.92 0 0 0-.999-.724M6.55 4.132c-.675 0-1.144 0-1.508.03a2.3 2.3 0 0 0-.585.107l-.123.052c-.287.147-.528.37-.695.643l-.068.12c-.076.15-.13.351-.159.708-.03.364-.03.833-.03 1.508v.768h1.047l-.044-.205a2.25 2.25 0 0 1 1.733-2.669l2.527-.537-.085-.083a1.75 1.75 0 0 0-.909-.424l-.144-.015c-.05-.003-.103-.003-.262-.003z",
            clipRule: "evenodd",
          }),
        }),
      o = s("afqi")
    function d(e) {
      let t,
        s,
        d,
        u,
        c,
        m,
        p,
        g,
        f = (0, r.c)(21),
        { compact: h, sourceIconVariant: y } = e,
        x = void 0 !== h && h,
        C = x ? "gap-0.5" : "gap-4"
      f[0] !== C ? ((t = (0, l.A)("flex items-center", C)), (f[0] = C), (f[1] = t)) : (t = f[1])
      let j = x ? "size-4 rounded-md" : "size-12 rounded-xl",
        v = "orange" === y ? "bg-chart-orange text-inverse" : "bg-text/5 text-secondary"
      f[2] !== j || f[3] !== v
        ? ((s = (0, l.A)("flex shrink-0 items-center justify-center", j, v)), (f[2] = j), (f[3] = v), (f[4] = s))
        : (s = f[4])
      let b = x ? "size-2.5" : "size-6"
      ;(f[5] !== b ? ((d = (0, n.jsx)(a, { className: b })), (f[5] = b), (f[6] = d)) : (d = f[6]),
        f[7] !== s || f[8] !== d
          ? ((u = (0, n.jsx)("div", { className: s, children: d })), (f[7] = s), (f[8] = d), (f[9] = u))
          : (u = f[9]))
      let S = x ? "h-4 w-3" : "h-12 w-10"
      ;(f[10] !== S ? ((c = (0, l.A)("text-default", S)), (f[10] = S), (f[11] = c)) : (c = f[11]),
        f[12] !== c ? ((m = (0, n.jsx)(i.A, { className: c })), (f[12] = c), (f[13] = m)) : (m = f[13]))
      let w = x ? "size-4" : "size-12"
      return (
        f[14] !== w ? ((p = (0, n.jsx)(o.A, { className: w })), (f[14] = w), (f[15] = p)) : (p = f[15]),
        f[16] !== m || f[17] !== p || f[18] !== t || f[19] !== u
          ? ((g = (0, n.jsxs)("div", { className: t, "aria-hidden": "true", children: [u, m, p] })),
            (f[16] = m),
            (f[17] = p),
            (f[18] = t),
            (f[19] = u),
            (f[20] = g))
          : (g = f[20]),
        g
      )
    }
  },
  j6in(e, t, s) {
    let n = ["claude-code", "claude-cowork", "cursor"],
      r = n.slice(0, -1),
      l = [...n]
    s.d(
      t,
      {},
      {
        Pc: "3203613120",
        lM: function (e) {
          return e ? l : r
        },
        t_: n,
      },
    )
  },
  RBjS(e, t, s) {
    var n = s("QosV"),
      r = s("ASxG"),
      l = s("hZax")
    let i = "1094490005",
      a = r
        .aig()
        .int()
        .positive()
        .optional()
        .catch(void 0),
      o = r.Ikc({ max_session_age_days: a, max_sessions_per_space: a })
    function d(e) {
      let t = o.parse(e)
      if (null != t.max_session_age_days || null != t.max_sessions_per_space)
        return {
          maxSessionAgeMs: null == t.max_session_age_days ? void 0 : 864e5 * t.max_session_age_days,
          maxSessionsPerSpace: t.max_sessions_per_space,
        }
    }
    s.d(
      t,
      {},
      {
        Y9: function (e) {
          return d(e?.getDynamicConfig(i).value ?? {})
        },
        bG: function () {
          let e,
            t = (0, n.c)(2),
            { value: s } = (0, l.Fj)(i)
          return (t[0] !== s ? ((e = d(s)), (t[0] = s), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
  ltay(e, t, s) {
    var n = s("D7Ms"),
      r = s("qmMi"),
      l = s("GaA7"),
      i = s("q77y"),
      a = s("OWtl"),
      o = s("rvFo"),
      d = s("Igx9")
    let u = (0, r.vU)(a.u, (e) => {
      let t = l.appServices?.externalAgentImport
      return {
        queryKey: [d.Tt, e],
        queryFn:
          null == t
            ? n.hT
            : ({ signal: s }) => (0, i.P)(t.readImportedConnectors({ hostId: e, providers: ["claude-cowork"] }), s),
        retry: !1,
        staleTime: o.D.FIVE_MINUTES,
      }
    })
    s.d(
      t,
      {},
      {
        M: u,
        p: function ({ apps: e, candidates: t }) {
          let s = new Map(e.map((e) => [e.id, e])),
            n = new Map()
          for (let t of e) {
            let e = t.name.trim().toLowerCase()
            n.set(e, [...(n.get(e) ?? []), t])
          }
          let r = new Map()
          for (let e of t) {
            if (null == e.codexAppId) continue
            let t = s.get(e.codexAppId)
            null != t && r.set(e.name.trim().toLowerCase(), t)
          }
          let l = [],
            i = new Set()
          for (let e of t) {
            let t = e.name.trim().toLowerCase(),
              a = null == e.codexAppId ? void 0 : s.get(e.codexAppId),
              o = n.get(t) ?? [],
              d = a ?? r.get(t) ?? o.find((e) => null != e.logoUrl || null != e.logoUrlDark) ?? o[0]
            null == d || i.has(d.id) || (i.add(d.id), l.push(d))
          }
          return l
        },
      },
    )
  },
  U2Lm(e, t, s) {
    var n = s("hOO0"),
      r = s("C3Kr"),
      l = s("ueue"),
      i = s("ltay")
    function a(e, t) {
      return (
        (0, l._s)(t.marketplaceName) &&
        (null != t.canonicalAppId ? (0, n.$)(t.canonicalAppId) === (0, n.$)(e.id) : (0, r.Y)(e, t.plugin))
      )
    }
    s.d(
      t,
      {},
      {
        R: function ({ candidates: e, directoryApps: t, plugins: s, runtimeApps: n, useCanonicalAppIds: o = !1 }) {
          let d = [],
            u = [],
            c = new Map(n.map((e) => [e.id, e])),
            m = new Set()
          for (let n of (0, i.p)({ apps: t, candidates: e })) {
            let e = s.filter((e) => (o ? a(n, e) : (0, l._s)(e.marketplaceName) && (0, r.Y)(n, e.plugin)))
            if (0 === e.length || e.some((e) => e.plugin.installed)) {
              c.get(n.id)?.isAccessible || d.push(n)
              continue
            }
            let t = e[0]
            null == t || m.has(t.plugin.id) || (m.add(t.plugin.id), u.push({ app: n, plugin: t }))
          }
          return { appsRequiringConnection: d, importedPlugins: u }
        },
        k: a,
      },
    )
  },
  agQ0(e, t, s) {
    s.d(t, { O: () => T, u: () => k })
    var n = s("qmMi"),
      r = s("HUHI"),
      l = s("OiCI"),
      i = s("cLdu"),
      a = s("Gg2s"),
      o = s("OWtl"),
      d = s("kfGJ"),
      u = s("oeej"),
      c = s("ltay"),
      m = s("CpsU"),
      p = s.n(m),
      g = s("i5ac"),
      f = s.n(g),
      h = s("hOO0"),
      y = s("eFn4"),
      x = s("ygu7"),
      C = s("EEop"),
      j = s("Buqh"),
      v = s("mq2k"),
      b = s("ueue"),
      S = s("ndjw"),
      w = s("rvFo"),
      I = s("U2Lm")
    let N = (0, n.i1)(o.u, ({ hostId: e, apps: t }, { get: s }) => {
        let n = (0, i.hE)(e),
          r = s(l.tT),
          a = !!n || s(v.Y, e)
        if (null == a || (n && null == r) || (!n && e === d.fI && s(y.$S).authLoading))
          return { status: "loading", data: void 0 }
        let o = n ? null : s(S.FM, { hostId: e }),
          u = n ? null : s(S.lE, { hostId: e })
        if (o?.error != null || u?.error != null)
          return {
            status: "error",
            data: void 0,
            retry: () => {
              ;(o?.refetch(), u?.refetch())
            },
          }
        if (!n && (o?.data == null || u?.data == null)) return { status: "loading", data: void 0 }
        let c = n ? void 0 : (0, b.vZ)({ hostId: e, workspaceRoots: o?.data?.roots, codexHome: u?.data?.codexHome }),
          m = s(i.qF, { accountId: n ? r : null, hostId: e, roots: c }),
          p = n ? null : s(j.M, e),
          g = [o, u, m, p]
        if (g.some((e) => e?.error != null))
          return {
            status: "error",
            data: void 0,
            retry: () => {
              for (let e of g) e?.refetch()
            },
          }
        if (g.some((e) => null != e && null == e.data)) return { status: "loading", data: void 0 }
        let x = f()([...(m.data ?? []), ...(p?.data?.plugins ?? [])], ({ plugin: e }) => e.id),
          C = t.filter((e) => !x.some((t) => (0, I.k)(e, t))),
          w =
            a && null != r && C.length > 0 ? s(M, { hostId: e, appIds: C.map((e) => (0, h.$)(e.id)), roots: c }) : null
        if (w?.error != null)
          return {
            status: "error",
            data: void 0,
            retry: () => {
              w.refetch()
            },
          }
        if (null != w && null == w.data) return { status: "loading", data: void 0 }
        let N = new Map(x.map((e) => [e.plugin.id, e]))
        for (let e of w?.data ?? []) {
          let t = N.get(e.plugin.id)
          N.set(
            e.plugin.id,
            t?.plugin.installed
              ? {
                  ...e,
                  plugin: {
                    ...e.plugin,
                    installed: !0,
                    installedAt: t.plugin.installedAt,
                    enabled: t.plugin.enabled,
                    installPolicy: t.plugin.installPolicy,
                    installPolicySource: t.plugin.installPolicySource,
                    localVersion: t.plugin.localVersion,
                    remotePluginId: e.plugin.remotePluginId ?? t.plugin.remotePluginId,
                  },
                }
              : e,
          )
        }
        return {
          status: "ready",
          data: { plugins: Array.from(N.values()), isFetching: g.some((e) => e?.isFetching) || w?.isFetching === !0 },
        }
      }),
      M = (0, n.vU)(o.u, ({ hostId: e, appIds: t, roots: s }, { get: n, scope: r }) => {
        let i = n(l.tT)
        return {
          queryKey: ["plugins", "imported-details", e, i, t, s],
          queryFn: async ({ signal: n }) => {
            let l = []
            for (let a of p()(t, 4)) {
              n.throwIfAborted()
              let t = await Promise.all(
                a.map(async (t) => {
                  let { plugin_id: l } = await r.queryClient.fetchQuery((0, x.cO)(t, i))
                  if (null == l) return null
                  n.throwIfAborted()
                  let a = await r.queryClient.fetchQuery({
                    ...r.query.getOptions(C.Pc, (0, C.N$)({ hostId: e, pluginId: l, remotePluginId: l, roots: s })),
                    retry: !1,
                  })
                  return { ...(0, b.qA)(a), canonicalAppId: t }
                }),
              )
              l.push(...t.filter((e) => null != e))
            }
            return (n.throwIfAborted(), l)
          },
          retry: !1,
          staleTime: w.D.ONE_MINUTE,
        }
      }),
      A = (0, n.vU)(o.u, (e, { get: t, scope: s }) => (0, r.bK)(s, e, void 0)),
      k = (0, n.i1)(o.u, (e, { get: t }) => {
        let s = e === d.fI,
          n = s ? t(c.M, e) : null,
          l = t(u.Vh, e),
          o = s ? n?.data?.connectors : [],
          m = l.data
        if (null == m || (null == o && (n?.error != null || 0 === m.length)))
          return n?.error != null || null != l.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  ;(n?.refetch(), l.refetch())
                },
              }
            : { data: void 0, status: "loading" }
        let p = [...(o ?? []), ...m]
        if (0 === p.length)
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let g = t(a.u9, e),
          f = g.data
        if (null == f)
          return null != g.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  g.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        if (!f.some((e) => "apps" === e.name && e.enabled))
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let h = t(A, e),
          y = h.data
        if (null == y)
          return null != h.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  h.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        let x = (0, c.p)({ apps: y, candidates: p })
        if (0 === x.length)
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let C = t(r.lb, e),
          j = C.data
        if (null == j)
          return null != C.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  C.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        if (f.find((e) => "plugins" === e.name)?.enabled === !1) {
          let e = new Map(j.map((e) => [e.id, e]))
          return {
            data: {
              kind: "complete",
              setup: { appsRequiringConnection: x.filter((t) => !e.get(t.id)?.isAccessible), importedPlugins: [] },
            },
            status: "ready",
          }
        }
        if (e === d.fI || (0, i.hE)(e)) {
          let s = t(N, { hostId: e, apps: x })
          return "ready" !== s.status
            ? s
            : {
                status: "ready",
                data: {
                  kind: "targeted-plugins",
                  ...s.data,
                  setup: (0, I.R)({
                    candidates: p,
                    directoryApps: y,
                    plugins: s.data.plugins,
                    runtimeApps: j,
                    useCanonicalAppIds: !0,
                  }),
                },
              }
        }
        return { data: { candidates: p, directoryApps: y, kind: "plugin-directory", runtimeApps: j }, status: "ready" }
      })
    function T({ inputsResult: e, pluginDirectory: t }) {
      return "ready" !== e.status
        ? e
        : "plugin-directory" !== e.data.kind
          ? { data: e.data.setup, status: "ready" }
          : null != t.errorMessage
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  t.refetch()
                },
              }
            : t.isLoading
              ? { data: void 0, status: "loading" }
              : {
                  data: (0, I.R)({
                    candidates: e.data.candidates,
                    directoryApps: e.data.directoryApps,
                    plugins: t.plugins,
                    runtimeApps: e.data.runtimeApps,
                  }),
                  status: "ready",
                }
    }
  },
  rxTW(e, t, s) {
    var n = s("QosV"),
      r = s("irkb"),
      l = s("T0Rc"),
      i = s("xSOA"),
      a = s("qmMi"),
      o = s("OWtl"),
      d = s("ndjw"),
      u = s("kfGJ"),
      c = s("ZgQ4"),
      m = s("RIh2"),
      p = s("obo5"),
      g = s("N34f")
    let f = [],
      h = []
    function y(e) {
      return null != e.cwd && "" !== e.cwd
    }
    function x(e) {
      return null == e.cwd || "" === e.cwd
    }
    s.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            s,
            C,
            j,
            v,
            b,
            S,
            w,
            I,
            N,
            M,
            A,
            k,
            T,
            _,
            O,
            E,
            R,
            P,
            F = (0, n.c)(78),
            {
              cacheDiscovery: L,
              detectedItems: z,
              enabled: U,
              hostId: D,
              providers: q,
              refetchOnWindowFocus: B,
              retry: V,
              sessionLimits: H,
              source: K,
              workspaceRoots: $,
            } = e,
            G = void 0 !== L && L,
            W = void 0 === D ? u.fI : D,
            Z = void 0 === K ? "settings" : K,
            Y = (0, a.gh)(o.u),
            X = (0, a.Ul)(g.I),
            J = (0, r.jE)()
          F[0] !== W ? ((t = { hostId: W }), (F[0] = W), (F[1] = t)) : (t = F[1])
          let Q = U && !X
          F[2] !== Q ? ((s = { enabled: Q }), (F[2] = Q), (F[3] = s)) : (s = F[3])
          let { data: ee } = (0, a._U)(d.FM, t, s),
            et = ee?.roots
          if (F[4] !== G || F[5] !== W || F[6] !== q || F[7] !== H || F[8] !== $) {
            let e = (0, m.EA)({ hostId: W, providers: q, sessionLimits: H, workspaceRoots: $ })
            ;((j = l.I),
              (C = G ? [...e, "cached"] : e),
              (F[4] = G),
              (F[5] = W),
              (F[6] = q),
              (F[7] = H),
              (F[8] = $),
              (F[9] = C),
              (F[10] = j))
          } else ((C = F[9]), (j = F[10]))
          let es = !!G || "always",
            en = !X && U && null == z,
            er = !0 === B ? "always" : B
          ;(F[11] !== V ? ((v = null == V ? {} : { retry: V }), (F[11] = V), (F[12] = v)) : (v = F[12]),
            F[13] !== G || F[14] !== W || F[15] !== X || F[16] !== q || F[17] !== H || F[18] !== $
              ? ((b = async () =>
                  X
                    ? { items: [], unsupportedProjects: [] }
                    : (0, m.Sq)({
                        cache: G,
                        hostId: W,
                        includeHome: !0,
                        providers: q,
                        sessionLimits: H,
                        workspaceRoots: $,
                      })),
                (F[13] = G),
                (F[14] = W),
                (F[15] = X),
                (F[16] = q),
                (F[17] = H),
                (F[18] = $),
                (F[19] = b))
              : (b = F[19]),
            F[20] !== en || F[21] !== er || F[22] !== v || F[23] !== b || F[24] !== C || F[25] !== es
              ? ((S = {
                  queryKey: C,
                  staleTime: 6e4,
                  refetchOnMount: es,
                  enabled: en,
                  refetchOnWindowFocus: er,
                  ...v,
                  queryFn: b,
                }),
                (F[20] = en),
                (F[21] = er),
                (F[22] = v),
                (F[23] = b),
                (F[24] = C),
                (F[25] = es),
                (F[26] = S))
              : (S = F[26]))
          let { data: el, isError: ei, isFetching: ea, refetch: eo } = j(S),
            ed = X ? f : (z ?? el?.items ?? f)
          F[27] !== ed || F[28] !== q
            ? ((w = ed.every((e) => q.includes(e.providerId)) ? ed : ed.filter((e) => q.includes(e.providerId))),
              (F[27] = ed),
              (F[28] = q),
              (F[29] = w))
            : (w = F[29])
          let eu = w,
            ec = X || null != z ? h : (el?.unsupportedProjects ?? h)
          F[30] !== eu ? ((I = eu.filter(x)), (F[30] = eu), (F[31] = I)) : (I = F[31])
          let em = I
          F[32] !== eu ? ((N = eu.filter(y)), (F[32] = eu), (F[33] = N)) : (N = F[33])
          let ep = N
          F[34] !== em || F[35] !== ep
            ? ((M = (0, c.pH)({ homeItems: em, projectItems: ep })), (F[34] = em), (F[35] = ep), (F[36] = M))
            : (M = F[36])
          let eg = M
          F[37] !== et || F[38] !== eg
            ? ((A = null == eg ? [] : (0, c.w_)(eg, et)), (F[37] = et), (F[38] = eg), (F[39] = A))
            : (A = F[39])
          let ef = A
          F[40] !== eg
            ? ((k = (e) => (null == eg ? [] : (0, c.Li)({ model: eg, selection: e }))), (F[40] = eg), (F[41] = k))
            : (k = F[41])
          let eh = k
          F[42] !== W || F[43] !== q || F[44] !== Y || F[45] !== H || F[46] !== Z
            ? ((T = {
                mutationFn: (e) => {
                  let { importAttemptId: t, items: s } = e
                  return (0, m.gu)(Y, {
                    hostId: W,
                    importAttemptId: t,
                    items: s.filter((e) => q.includes(e.providerId)),
                    sessionLimits: H,
                    source: Z,
                  })
                },
              }),
              (F[42] = W),
              (F[43] = q),
              (F[44] = Y),
              (F[45] = H),
              (F[46] = Z),
              (F[47] = T))
            : (T = F[47])
          let ey = (0, i.n)(T),
            ex = null != eg || ec.length > 0,
            eC = null != eg
          ;(F[48] !== eh || F[49] !== ey
            ? ((_ = (e, t) => ey.mutateAsync({ importAttemptId: t, items: eh(e) })),
              (F[48] = eh),
              (F[49] = ey),
              (F[50] = _))
            : (_ = F[50]),
            F[51] !== ey
              ? ((O = (e, t) => ey.mutateAsync({ importAttemptId: t, items: e })), (F[51] = ey), (F[52] = O))
              : (O = F[52]))
          let ej = !X && U && null == z && ea && null == eg,
            ev = !X && U && null == z && ea,
            eb = !X && null == z && ei && null == eg,
            eS = !X && null == z && ei
          return (
            F[53] !== X || F[54] !== eo
              ? ((E = async () => {
                  if (X) return f
                  let e = await eo()
                  return e.data?.items ?? f
                }),
                (F[53] = X),
                (F[54] = eo),
                (F[55] = E))
              : (E = F[55]),
            F[56] !== X || F[57] !== z || F[58] !== J || F[59] !== eo
              ? ((R = async () => {
                  if (X) return f
                  if (null != z) return z
                  ;(0, p.c)(J)
                  let e = await eo()
                  return e.data?.items ?? f
                }),
                (F[56] = X),
                (F[57] = z),
                (F[58] = J),
                (F[59] = eo),
                (F[60] = R))
              : (R = F[60]),
            F[61] !== ef ||
            F[62] !== eu ||
            F[63] !== et ||
            F[64] !== eh ||
            F[65] !== ey.isPending ||
            F[66] !== ex ||
            F[67] !== eC ||
            F[68] !== _ ||
            F[69] !== O ||
            F[70] !== ej ||
            F[71] !== ev ||
            F[72] !== eb ||
            F[73] !== eS ||
            F[74] !== E ||
            F[75] !== R ||
            F[76] !== ec
              ? ((P = {
                  choices: ef,
                  detectedItems: eu,
                  existingProjectRoots: et,
                  unsupportedProjects: ec,
                  getSelectedItems: eh,
                  hasDetectedItems: ex,
                  hasImportableItems: eC,
                  importSelected: _,
                  importItems: O,
                  isDetecting: ej,
                  isDetectionFetching: ev,
                  isDetectionError: eb,
                  hasDetectionRefreshError: eS,
                  isImporting: ey.isPending,
                  refetchDetectedItems: E,
                  refreshDetectedItemsAfterImport: R,
                }),
                (F[61] = ef),
                (F[62] = eu),
                (F[63] = et),
                (F[64] = eh),
                (F[65] = ey.isPending),
                (F[66] = ex),
                (F[67] = eC),
                (F[68] = _),
                (F[69] = O),
                (F[70] = ej),
                (F[71] = ev),
                (F[72] = eb),
                (F[73] = eS),
                (F[74] = E),
                (F[75] = R),
                (F[76] = ec),
                (F[77] = P))
              : (P = F[77]),
            P
          )
        },
      },
    )
  },
  oFmV(e, t, s) {
    let n = (0, s("zd8w").createContext)(null)
    s.d(t, {}, { S: n })
  },
  vNmV(e, t, s) {
    let n = ["plugin", "user", "admin", "project", "sessionFlags", "unknown"],
      r = "__unknown__"
    function l(e, t, s) {
      let n = new Set(t),
        r = [
          ...n,
          ...Array.from(new Set(e))
            .filter((e) => !n.has(e))
            .sort((e, t) => e.localeCompare(t)),
        ]
      return (null == s || r.includes(s) || r.push(s), r)
    }
    function i(e) {
      return "untrusted" === e.trustStatus || "modified" === e.trustStatus
    }
    function a(e) {
      switch (e) {
        case "plugin":
          return "plugin"
        case "user":
          return "user"
        case "system":
        case "mdm":
        case "cloudRequirements":
        case "cloudManagedConfig":
        case "legacyManagedConfigFile":
        case "legacyManagedConfigMdm":
          return "admin"
        case "project":
          return "project"
        case "sessionFlags":
          return "sessionFlags"
        case "unknown":
          return "unknown"
      }
    }
    function o(e) {
      let t = e.hooks.filter((e) => "project" === a(e.source))
      return 0 === t.length ? null : { ...e, hooks: t }
    }
    function d(e, t) {
      let s = e.flatMap((e) => e.hooks.filter((e) => a(e.source) === t)),
        n = "unknown" === t ? e.filter(m) : []
      return 0 === s.length && 0 === n.length ? null : u(e, s, n)
    }
    function u(e, t, s = []) {
      let n = c(t),
        r = new Set(n.map((e) => e.key)),
        l = [...e.filter((e) => e.hooks.some((e) => r.has(e.key))), ...s]
      return {
        cwd: "",
        hooks: n,
        warnings: Array.from(new Set(l.flatMap((e) => e.warnings))),
        errors: (function (e) {
          let t = new Map()
          for (let s of e) t.set(`${s.path}:${s.message}`, s)
          return Array.from(t.values())
        })(l.flatMap((e) => e.errors)),
      }
    }
    function c(e) {
      let t = new Map()
      for (let s of e) t.has(s.key) || t.set(s.key, s)
      return Array.from(t.values())
    }
    function m(e) {
      return 0 === e.hooks.length && (e.warnings.length > 0 || e.errors.length > 0)
    }
    function p(e) {
      return "managed" === e.trustStatus || (e.enabled && "trusted" === e.trustStatus)
    }
    s.d(
      t,
      {},
      {
        Ab: function (e, t) {
          if (null == t) return []
          let s = new Set(t.hooks.map((e) => e.key))
          return c(
            e?.flatMap((e) =>
              e.hooks.filter((e) => "plugin" === e.source && e.pluginId === t.summary.id && s.has(e.key) && i(e)),
            ) ?? [],
          )
        },
        ED: function (e, t) {
          return e
            .filter((e) => e.eventName === t)
            .sort((e, t) => (e.displayOrder < t.displayOrder ? -1 : +(e.displayOrder > t.displayOrder)))
        },
        LX: function (e) {
          if (0 === e.length) return null
          let t = new Set(e.map(a))
          return 1 !== t.size ? null : (t.values().next().value ?? null)
        },
        ON: function (e) {
          return { issueCount: e.warnings.length + e.errors.length, needsReview: e.hooks.filter(i).length }
        },
        Pf: r,
        RS: function (e, t, s) {
          if (null == e || !e.summary.installed || 0 === e.hooks.length) return
          let n = l(t, s, null)
          return 0 === n.length ? void 0 : n
        },
        Y8: i,
        nh: function (e) {
          let t = []
          for (let s of n) {
            let n = (function (e, t) {
              switch (t) {
                case "project": {
                  let s = e.map(o).filter((e) => null != e)
                  if (0 === s.length) return null
                  return { id: t, projectEntries: s }
                }
                case "plugin": {
                  let s = d(e, t),
                    n = (function (e) {
                      let t = new Map()
                      for (let s of e)
                        for (let e of s.hooks) {
                          if ("plugin" !== a(e.source)) continue
                          let s = t.get(e.pluginId)
                          null == s ? t.set(e.pluginId, [e]) : s.push(e)
                        }
                      return Array.from(t.entries())
                        .sort(([e], [t]) => (null == e ? 1 : null == t ? -1 : e.localeCompare(t)))
                        .map(([t, s]) => ({ pluginId: t, entry: u(e, s) }))
                    })(e)
                  if (null == s || 0 === n.length) return null
                  return { id: t, entry: s, pluginEntries: n }
                }
                case "user":
                case "admin":
                case "sessionFlags":
                case "unknown": {
                  let s = d(e, t)
                  if (null == s) return null
                  return { id: t, entry: s }
                }
              }
            })(e, s)
            null != n && t.push(n)
          }
          return t
        },
        ni: l,
        p4: function (e, t) {
          if (null == t) return null
          let s = e.find((e) => e.id === t.source)
          return null == s
            ? null
            : "project" === t.source
              ? "project" !== s.id
                ? null
                : (s.projectEntries.find((e) => e.cwd === t.projectRoot) ?? null)
              : "plugin" === t.source
                ? "plugin" !== s.id
                  ? null
                  : void 0 === t.pluginId
                    ? s.entry
                    : (s.pluginEntries.find((e) => e.pluginId === t.pluginId)?.entry ?? null)
                : s.id !== t.source
                  ? null
                  : s.entry
        },
        rb: function (e) {
          return Array.from(new Set(e.map((e) => e.eventName)), (t) => {
            let s = e.filter((e) => e.eventName === t)
            return { eventName: t, active: s.filter(p).length, installed: s.length, needsReview: s.filter(i).length }
          })
        },
        vf: a,
        zC: function ({ pluginId: e, source: t, projectRoot: s, projectRoots: n }) {
          let l = (function (e) {
            switch (e) {
              case "plugin":
              case "user":
              case "admin":
              case "project":
              case "sessionFlags":
              case "unknown":
                return e
              default:
                return null
            }
          })(t)
          return ("project" === l || (null == l && null == t)) && null != s && n?.includes(s) === !0
            ? { source: "project", projectRoot: s }
            : null == l || "project" === l
              ? null
              : "plugin" === l
                ? null == e
                  ? { source: "plugin" }
                  : e === r
                    ? { source: "plugin", pluginId: null }
                    : { source: "plugin", pluginId: e }
                : { source: l }
        },
      },
    )
  },
  AN2V(e, t, s) {
    var n = s("vNmV")
    let r = "hooks-settings"
    function l({ hostId: e, pluginId: t, projectRoot: s, source: i }) {
      let a = new URLSearchParams()
      ;(null != e && a.set("hostId", e),
        null != i && a.set("source", i),
        null != i && null != s && a.set("projectRoot", s),
        "plugin" === i && void 0 !== t && a.set("pluginId", t ?? n.Pf))
      let o = a.toString()
      return "" === o ? r : `${r}?${o}`
    }
    s.d(
      t,
      {},
      {
        NZ: function ({ hostId: e, pluginId: t, projectRoot: s, source: n }) {
          return `/settings/${l({ hostId: e, pluginId: t, projectRoot: s, source: n })}`
        },
        Rf: l,
        mW: function (e, t, s) {
          if ((e.delete("hostId"), e.delete("pluginId"), e.delete("projectRoot"), e.delete("source"), null != s)) {
            if ((e.set("hostId", t), e.set("source", s.source), "project" === s.source))
              return void e.set("projectRoot", s.projectRoot)
            "plugin" === s.source && void 0 !== s.pluginId && e.set("pluginId", s.pluginId ?? n.Pf)
          }
        },
      },
    )
  },
  KQ17(e, t, s) {
    s.d(t, { ImportSettings: () => ez })
    var n = s("ABep"),
      r = s("QosV"),
      l = s("qmMi"),
      i = s("zd8w"),
      a = s("oyxz"),
      o = s("CTWI"),
      d = s("HUHI"),
      u = s("Sm6l"),
      c = s("oeej"),
      m = s("s0I4"),
      p = s("ltay"),
      g = s("agQ0"),
      f = s("Vmbu"),
      h = s("ueue"),
      y = s("B81s"),
      x = s("ndjw"),
      C = s("jxU8"),
      j = s("ecE5"),
      v = s("BSnr"),
      b = s("I7Ou"),
      S = s("AWNZ"),
      w = s("QyE3"),
      I = s("ZEx5"),
      N = s("kfGJ"),
      M = s("iRMi"),
      A = s("on57"),
      k = s("Wf1j"),
      T = s("Qgfj"),
      _ = s("xs0e"),
      O = s("RNul"),
      E = s("Hcqt"),
      R = s("ASgY"),
      P = s("zsK1"),
      F = s("j6in"),
      L = s("RBjS"),
      z = s("rxTW"),
      U = s("XJZz"),
      D = s("tfMT"),
      q = s("wqb0"),
      B = s("ZYH5"),
      V = s("p1ic"),
      H = s("yGJW"),
      K = s("OWtl"),
      $ = s("pO0d"),
      G = s("hZax"),
      W = s("J2FN")
    let Z = { "claude-code": U.A, "claude-cowork": D.A, cursor: q.A }
    function Y(e) {
      let t,
        s,
        i,
        d,
        m,
        p,
        g,
        f,
        h,
        y,
        x,
        C,
        j,
        b = (0, r.c)(46),
        { isImportContextLoading: w, latestSuccessfulImportAtMs: U, workspaceRoots: D } = e,
        q = (0, l.gh)(K.u),
        Y = (0, k.A)(),
        Q = (0, l.Ul)(c.rz),
        ee = (0, G.Zj)(F.Pc)
      b[0] !== ee ? ((t = (0, F.lM)(ee)), (b[0] = ee), (b[1] = t)) : (t = b[1])
      let et = t,
        es = (0, L.bG)()
      b[2] !== et || b[3] !== es || b[4] !== D
        ? ((s = { enabled: !0, hostId: N.fI, providers: et, sessionLimits: es, workspaceRoots: D }),
          (b[2] = et),
          (b[3] = es),
          (b[4] = D),
          (b[5] = s))
        : (s = b[5])
      let {
        detectedItems: en,
        existingProjectRoots: er,
        isDetecting: el,
        isDetectionError: ei,
        refetchDetectedItems: ea,
        unsupportedProjects: eo,
      } = (0, z.e)(s)
      if (
        b[6] !== en ||
        b[7] !== er ||
        b[8] !== Y ||
        b[9] !== el ||
        b[10] !== ei ||
        b[11] !== w ||
        b[12] !== U ||
        b[13] !== ea ||
        b[14] !== Q ||
        b[15] !== q ||
        b[16] !== es ||
        b[17] !== eo
      ) {
        let e,
          t,
          s = (0, V.R)(en),
          r = Q?.hostId === N.fI,
          l =
            r && null != Q
              ? (0, V.gp)({ detectedItems: Q.items, existingProjectRoots: er, intl: Y, providerIds: (0, V.R)(Q.items) })
              : null
        ;((p = el || w),
          b[25] !== ea
            ? ((e = () => {
                ea()
              }),
              (b[25] = ea),
              (b[26] = e))
            : (e = b[26]))
        let c = e
        ;((m = v.X),
          (f = R.q),
          b[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(a.A, { ...W.Hc.detection.title })), (b[27] = t))
            : (t = b[27]))
        let y =
          0 === s.length
            ? null
            : (0, n.jsx)(a.A, {
                id: "settings.agent.importSettings.sectionDescription",
                defaultMessage: "Detected setup that can be added to {appName}",
                values: { appName: o.C },
              })
        ;(b[28] !== y
          ? ((h = (0, n.jsx)($.ek, {
              entry: W.Hc.detection,
              children: (0, n.jsx)(v.X.Header, { title: t, subtitle: y }),
            })),
            (b[28] = y),
            (b[29] = h))
          : (h = b[29]),
          (d = v.X.Content),
          (i = I.t),
          (g = r
            ? (0, n.jsx)(S.ic, {
                label: (0, n.jsx)(a.A, {
                  id: "settings.agent.importSettings.importingLabel",
                  defaultMessage: "Import in progress",
                }),
                description: null == l ? null : (0, n.jsx)(T.dT, { type: "unit", value: l.customizeItems.map(J) }),
                control: (0, n.jsx)(O.y, { className: "icon-xs" }),
              })
            : p
              ? (0, n.jsx)(S.ic, {
                  label: (0, n.jsx)(a.A, {
                    id: "settings.agent.importSettings.loadingLabel.v2",
                    defaultMessage: "Checking for imports",
                  }),
                  description: (0, n.jsx)(a.A, {
                    id: "settings.agent.importSettings.detectingDescription.v2",
                    defaultMessage: "Looking for compatible setup, projects, and recent chats",
                  }),
                  control: (0, n.jsx)(O.y, { className: "icon-xs" }),
                })
              : ei
                ? (0, n.jsx)(S.ic, {
                    label: (0, n.jsx)(a.A, {
                      id: "settings.import.error.label",
                      defaultMessage: "Couldn't check for imports",
                    }),
                    description: (0, n.jsx)(a.A, {
                      id: "settings.import.error.description",
                      defaultMessage: "Try again to look for compatible setup, projects, and recent chats",
                    }),
                    control: (0, n.jsx)(u.$, {
                      color: "secondary",
                      size: "toolbar",
                      onClick: c,
                      children: (0, n.jsx)(a.A, { id: "settings.import.error.retry", defaultMessage: "Retry" }),
                    }),
                  })
                : 0 === s.length && 0 === eo.length && null == U
                  ? (0, n.jsx)(S.ic, {
                      label: (0, n.jsx)(a.A, {
                        id: "settings.import.empty.label",
                        defaultMessage: "Import from other AI apps",
                      }),
                      description: (0, n.jsx)(a.A, {
                        id: "settings.import.empty.description",
                        defaultMessage: "No importable setup found",
                      }),
                      control: (0, n.jsx)(u.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: !0,
                        children: (0, n.jsx)(a.A, { id: "settings.import.empty.button", defaultMessage: "Import" }),
                      }),
                    })
                  : 0 === s.length && 0 === eo.length
                    ? (0, n.jsx)(S.ic, {
                        label: (0, n.jsx)(a.A, {
                          id: "settings.import.empty.noNewItems",
                          defaultMessage: "No new items found",
                        }),
                        description:
                          null != U
                            ? (0, n.jsx)(a.A, {
                                id: "settings.import.empty.lastImported",
                                defaultMessage: "Last imported {relativeTime} ago",
                                values: {
                                  relativeTime: (0, n.jsx)(
                                    _.A,
                                    { dateString: new Date(U).toISOString() },
                                    "last-imported-at",
                                  ),
                                },
                              })
                            : null,
                        control: (0, n.jsx)(u.$, {
                          color: "secondary",
                          size: "toolbar",
                          onClick: c,
                          children: (0, n.jsx)(a.A, {
                            id: "settings.import.empty.checkAgain",
                            defaultMessage: "Check again",
                          }),
                        }),
                      })
                    : s.map((e) => {
                        let t = Z[e],
                          r = (0, P.du)(Y, e)
                        return (0, n.jsx)(
                          S.ic,
                          {
                            icon: (0, n.jsx)("div", {
                              "aria-hidden": !0,
                              className: (0, A.A)(
                                "flex size-10 shrink-0 items-center justify-center rounded-xl",
                                "cursor" === e ? "text-default" : "bg-chart-orange text-inverse",
                              ),
                              children: (0, n.jsx)(t, { className: "size-10" }),
                            }),
                            label: r,
                            description: (0, n.jsx)(a.A, {
                              id: "settings.import.provider.help",
                              defaultMessage: "Review available items before importing",
                            }),
                            control: (0, n.jsx)(u.$, {
                              "aria-label": Y.formatMessage(
                                {
                                  id: "settings.agent.importSettings.importProviderAriaLabel",
                                  defaultMessage: "Import from {provider}",
                                },
                                { provider: r },
                              ),
                              color: "secondary",
                              size: "toolbar",
                              onClick: (t) => {
                                let n,
                                  r = t.currentTarget
                                null !=
                                  (n = (0, V.gp)({
                                    detectedItems: en,
                                    existingProjectRoots: er,
                                    intl: Y,
                                    providerIds: [e],
                                  })) &&
                                  ((0, H.yy)(q, M.CodexOnboardingExternalAgentImportEvent, {
                                    source: "settings",
                                    action: "shown",
                                    ...(0, V.EJ)(n, (0, V.O9)(n), s),
                                  }),
                                  (0, E.openExternalAgentImport)(q, {
                                    hostId: N.fI,
                                    items: en,
                                    preselectedProviderIds: [e],
                                    restoreFocus: () => r.focus(),
                                    sessionLimits: es,
                                    source: "settings",
                                  }))
                              },
                              children: (0, n.jsx)(a.A, {
                                id: "settings.agent.importSettings.importProvider",
                                defaultMessage: "Import",
                              }),
                            }),
                          },
                          e,
                        )
                      })),
          (b[6] = en),
          (b[7] = er),
          (b[8] = Y),
          (b[9] = el),
          (b[10] = ei),
          (b[11] = w),
          (b[12] = U),
          (b[13] = ea),
          (b[14] = Q),
          (b[15] = q),
          (b[16] = es),
          (b[17] = eo),
          (b[18] = i),
          (b[19] = d),
          (b[20] = m),
          (b[21] = p),
          (b[22] = g),
          (b[23] = f),
          (b[24] = h))
      } else ((i = b[18]), (d = b[19]), (m = b[20]), (p = b[21]), (g = b[22]), (f = b[23]), (h = b[24]))
      return (
        b[30] !== p || b[31] !== ei || b[32] !== eo
          ? ((y =
              p || ei || !(eo.length > 0)
                ? null
                : (0, n.jsx)(S.ic, {
                    icon: (0, n.jsx)(B.A, { className: "icon-2xs shrink-0 text-warning" }),
                    label: (0, n.jsx)(a.A, {
                      id: "settings.import.unsupportedProjects.label",
                      defaultMessage:
                        "{count, plural, one {# project can't be imported} other {# projects can't be imported}}",
                      values: { count: eo.length },
                    }),
                    description: (0, n.jsx)(a.A, {
                      id: "settings.import.unsupportedProjects.description",
                      defaultMessage:
                        "{projects} {count, plural, one {uses} other {use}} an unsupported project configuration",
                      values: {
                        count: eo.length,
                        projects: (0, n.jsx)(T.dT, { type: "conjunction", value: eo.map(X) }, "unsupported-projects"),
                      },
                    }),
                    control: null,
                  })),
            (b[30] = p),
            (b[31] = ei),
            (b[32] = eo),
            (b[33] = y))
          : (y = b[33]),
        b[34] !== i || b[35] !== g || b[36] !== y
          ? ((x = (0, n.jsxs)(i, { children: [g, y] })), (b[34] = i), (b[35] = g), (b[36] = y), (b[37] = x))
          : (x = b[37]),
        b[38] !== d || b[39] !== x
          ? ((C = (0, n.jsx)(d, { children: x })), (b[38] = d), (b[39] = x), (b[40] = C))
          : (C = b[40]),
        b[41] !== m || b[42] !== f || b[43] !== h || b[44] !== C
          ? ((j = (0, n.jsxs)(m, { id: f, children: [h, C] })),
            (b[41] = m),
            (b[42] = f),
            (b[43] = h),
            (b[44] = C),
            (b[45] = j))
          : (j = b[45]),
        j
      )
    }
    function X(e) {
      return e.name
    }
    function J(e) {
      return e.title
    }
    var Q = s("yX0s"),
      ee = s("UxN3"),
      et = s("lCMb"),
      es = s("GCsp"),
      en = s("g1IH"),
      er = s("EjYe"),
      el = s("NhqU"),
      ei = s("DBCl"),
      ea = s("Ywss"),
      eo = s("tl5a"),
      ed = s("AN2V")
    function eu(e) {
      let t,
        s,
        l,
        i,
        o = (0, r.c)(20),
        { category: d, history: c } = e,
        m = (0, ea.Zp)()
      if (o[0] !== d.itemType || o[1] !== c.failures || o[2] !== c.successes) {
        let e, r, l, i
        o[5] !== d.itemType ? ((e = (e) => e.itemType === d.itemType), (o[5] = d.itemType), (o[6] = e)) : (e = o[6])
        let a = c.successes.filter(e)
        o[7] !== d.itemType ? ((r = (e) => e.itemType === d.itemType), (o[7] = d.itemType), (o[8] = r)) : (r = o[8])
        let u = c.failures.filter(r)
        ;(o[9] !== d.itemType
          ? ((l = (e, t) =>
              "SESSIONS" === d.itemType
                ? (0, n.jsx)(ec, { status: "success", target: e.target }, `success-${t}`)
                : (0, n.jsx)(
                    em,
                    { itemType: d.itemType, label: e.source, status: "success", target: e.target },
                    `success-${t}`,
                  )),
            (o[9] = d.itemType),
            (o[10] = l))
          : (l = o[10]),
          (t = a.map(l)),
          o[11] !== d.itemType
            ? ((i = (e, t) =>
                "SESSIONS" === d.itemType
                  ? (0, n.jsx)(ec, { failureMessage: e.message, status: "error" }, `failure-${t}`)
                  : (0, n.jsx)(
                      em,
                      { itemType: d.itemType, failureMessage: e.message, label: e.source, status: "error" },
                      `failure-${t}`,
                    )),
              (o[11] = d.itemType),
              (o[12] = i))
            : (i = o[12]),
          (s = u.map(i)),
          (o[0] = d.itemType),
          (o[1] = c.failures),
          (o[2] = c.successes),
          (o[3] = t),
          (o[4] = s))
      } else ((t = o[3]), (s = o[4]))
      return (
        o[13] !== d.itemType || o[14] !== m
          ? ((l =
              "HOOKS" === d.itemType
                ? (0, n.jsx)(S.ic, {
                    variant: "nested",
                    label: (0, n.jsx)(a.A, {
                      id: "settings.import.history.details.reviewHooks",
                      defaultMessage: "Manage imported hooks",
                    }),
                    control: (0, n.jsx)(u.$, {
                      color: "ghost",
                      onClick: () => {
                        m((0, ed.NZ)({ hostId: N.fI }))
                      },
                      children: (0, n.jsx)(a.A, {
                        id: "settings.import.history.details.openHooks",
                        defaultMessage: "Open hooks settings",
                      }),
                    }),
                  })
                : null),
            (o[13] = d.itemType),
            (o[14] = m),
            (o[15] = l))
          : (l = o[15]),
        o[16] !== t || o[17] !== s || o[18] !== l
          ? ((i = (0, n.jsxs)(n.Fragment, { children: [t, s, l] })), (o[16] = t), (o[17] = s), (o[18] = l), (o[19] = i))
          : (i = o[19]),
        i
      )
    }
    function ec(e) {
      let t,
        s,
        i,
        o,
        d,
        c,
        m,
        p = (0, r.c)(21),
        g = (0, k.A)(),
        f = (0, ea.Zp)()
      p[0] !== e.status || p[1] !== e.target
        ? ((t = "success" === e.status && null != e.target ? (0, ei.JXB)(e.target) : null),
          (p[0] = e.status),
          (p[1] = e.target),
          (p[2] = t))
        : (t = p[2])
      let h = t
      p[3] !== h ? ((s = null == h ? null : { hostId: N.fI, threadId: h }), (p[3] = h), (p[4] = s)) : (s = p[4])
      let y = (0, l._U)(eo.HX, s)
      p[5] !== h ? ((i = null == h ? null : { hostId: N.fI, threadId: h }), (p[5] = h), (p[6] = i)) : (i = p[6])
      let x = (0, l._U)(eo.Nb, i),
        C = y ?? x?.title
      ;(p[7] !== e.status
        ? ((o =
            "error" === e.status
              ? (0, n.jsx)(ee.bF, {
                  className: "shrink-0 text-danger",
                  "aria-hidden": !1,
                  legacyIcon: B.A,
                  asset16: el.c,
                  legacyClassName: "icon-2xs",
                })
              : null),
          (p[7] = e.status),
          (p[8] = o))
        : (o = p[8]),
        p[9] !== C
          ? ((d =
              C ??
              (0, n.jsx)(a.A, { id: "settings.import.history.details.untitledChat", defaultMessage: "Untitled chat" })),
            (p[9] = C),
            (p[10] = d))
          : (d = p[10]))
      let j = "error" === e.status ? e.failureMessage : null
      return (
        p[11] !== h || p[12] !== g || p[13] !== f || p[14] !== C
          ? ((c =
              null == h
                ? null
                : (0, n.jsx)(u.$, {
                    "aria-label":
                      null == C
                        ? g.formatMessage({
                            id: "settings.import.history.details.openUntitledChat",
                            defaultMessage: "Open untitled chat",
                          })
                        : g.formatMessage(
                            { id: "settings.import.history.details.openNamedChat", defaultMessage: "Open {title}" },
                            { title: C },
                          ),
                    color: "ghost",
                    onClick: () => {
                      f((0, ei._RT)(h))
                    },
                    children: (0, n.jsx)(a.A, {
                      id: "settings.import.history.details.openChat",
                      defaultMessage: "Open chat",
                    }),
                  })),
            (p[11] = h),
            (p[12] = g),
            (p[13] = f),
            (p[14] = C),
            (p[15] = c))
          : (c = p[15]),
        p[16] !== o || p[17] !== d || p[18] !== j || p[19] !== c
          ? ((m = (0, n.jsx)(S.ic, { variant: "nested", icon: o, label: d, description: j, control: c })),
            (p[16] = o),
            (p[17] = d),
            (p[18] = j),
            (p[19] = c),
            (p[20] = m))
          : (m = p[20]),
        m
      )
    }
    function em(e) {
      let t,
        s,
        l,
        i,
        o,
        d = (0, r.c)(21),
        c = (0, k.A)(),
        m = (0, ea.Zp)(),
        p = null
      if ("error" === e.status) p = e.failureMessage
      else if (null == e.target) {
        let e
        ;(d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(a.A, { id: "settings.import.history.details.imported", defaultMessage: "Imported" })),
            (d[0] = e))
          : (e = d[0]),
          (p = e))
      } else e.target !== e.label && (p = e.target)
      if (d[1] !== e.itemType || d[2] !== e.label || d[3] !== e.status || d[4] !== e.target) {
        var g, f, h
        ;((t =
          "success" === e.status && null != e.label
            ? ((g = e.itemType),
              (f = e.label),
              (h = e.target),
              "SKILLS" === g || "COMMANDS" === g || "MCP_SERVER_CONFIG" === g
                ? `${"MCP_SERVER_CONFIG" === g ? "/settings/mcp-settings" : "/skills"}?search=${encodeURIComponent(h ?? f)}`
                : "PLUGINS" === g
                  ? (0, ei.xXQ)({ hostId: "local", pluginId: h ?? f })
                  : null)
            : null),
          (d[1] = e.itemType),
          (d[2] = e.label),
          (d[3] = e.status),
          (d[4] = e.target),
          (d[5] = t))
      } else t = d[5]
      let y = t
      d[6] !== e.label
        ? ((s =
            e.label ??
            (0, n.jsx)(a.A, { id: "settings.import.history.details.unknownItem", defaultMessage: "Imported item" })),
          (d[6] = e.label),
          (d[7] = s))
        : (s = d[7])
      let x = s
      return (
        d[8] !== e.status
          ? ((l =
              "error" === e.status
                ? (0, n.jsx)(ee.bF, {
                    className: "shrink-0 text-danger",
                    "aria-hidden": !1,
                    legacyIcon: B.A,
                    asset16: el.c,
                    legacyClassName: "icon-2xs",
                  })
                : null),
            (d[8] = e.status),
            (d[9] = l))
          : (l = d[9]),
        d[10] !== c || d[11] !== m || d[12] !== y || d[13] !== e.itemType || d[14] !== e.label
          ? ((i =
              null == y
                ? null
                : (0, n.jsx)(u.$, {
                    "aria-label": c.formatMessage(
                      { id: "settings.import.history.details.openItem", defaultMessage: "Open {item}" },
                      { item: e.label },
                    ),
                    color: "ghost",
                    onClick: () => {
                      m(y, {
                        state:
                          "SKILLS" === e.itemType || "COMMANDS" === e.itemType
                            ? { initialHostId: N.fI, initialTab: "skills" }
                            : void 0,
                      })
                    },
                    children:
                      "SKILLS" === e.itemType || "COMMANDS" === e.itemType
                        ? (0, n.jsx)(a.A, {
                            id: "settings.import.history.details.openInSkills",
                            defaultMessage: "Open in Skills",
                          })
                        : "MCP_SERVER_CONFIG" === e.itemType
                          ? (0, n.jsx)(a.A, {
                              id: "settings.import.history.details.openMcpSettings",
                              defaultMessage: "Open MCP settings",
                            })
                          : (0, n.jsx)(a.A, {
                              id: "settings.import.history.details.openPlugin",
                              defaultMessage: "Open plugin",
                            }),
                  })),
            (d[10] = c),
            (d[11] = m),
            (d[12] = y),
            (d[13] = e.itemType),
            (d[14] = e.label),
            (d[15] = i))
          : (i = d[15]),
        d[16] !== p || d[17] !== x || d[18] !== l || d[19] !== i
          ? ((o = (0, n.jsx)(S.ic, { variant: "nested", icon: l, label: x, description: p, control: i })),
            (d[16] = p),
            (d[17] = x),
            (d[18] = l),
            (d[19] = i),
            (d[20] = o))
          : (o = d[20]),
        o
      )
    }
    function ep(e) {
      let t,
        s = (0, r.c)(6),
        { defaultExpanded: l, entry: i, mcpServerStatuses: a } = e,
        o = void 0 !== l && l
      if ("running" === i.kind) {
        let e
        return (
          s[0] !== i.runningImport
            ? ((e = (0, n.jsx)(eg, { runningImport: i.runningImport })), (s[0] = i.runningImport), (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] !== o || s[3] !== i.history || s[4] !== a
          ? ((t = (0, n.jsx)(ef, { defaultExpanded: o, history: i.history, mcpServerStatuses: a })),
            (s[2] = o),
            (s[3] = i.history),
            (s[4] = a),
            (s[5] = t))
          : (t = s[5]),
        t
      )
    }
    function eg(e) {
      let t,
        s = (0, r.c)(6),
        { runningImport: l } = e,
        i = (0, k.A)()
      if (s[0] !== i || s[1] !== l.items) {
        let e,
          r,
          o = (0, c.NP)(l.items)
        ;(s[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(S.ic, {
              label: (0, n.jsx)(a.A, { id: "settings.import.history.running", defaultMessage: "Importing now" }),
              control: (0, n.jsx)(O.y, { className: "icon-xs shrink-0 text-secondary" }),
            })),
            (s[3] = e))
          : (e = s[3]),
          s[4] !== i
            ? ((r = (e) =>
                (0, n.jsx)(
                  S.ic,
                  {
                    variant: "nested",
                    label: (0, P.UY)(i, e),
                    control: (0, n.jsx)("span", {
                      className: "text-xs text-secondary",
                      children: (0, n.jsx)(a.A, {
                        id: "settings.import.history.runningBadge",
                        defaultMessage: "Importing",
                      }),
                    }),
                  },
                  e,
                )),
              (s[4] = i),
              (s[5] = r))
            : (r = s[5]),
          (t = (0, n.jsxs)(I.t, { children: [e, o.map(r)] })),
          (s[0] = i),
          (s[1] = l.items),
          (s[2] = t))
      } else t = s[2]
      return t
    }
    function ef(e) {
      let t,
        s,
        l,
        o,
        d,
        u,
        m,
        p,
        g,
        f,
        h,
        y,
        x,
        C,
        j = (0, r.c)(39),
        { defaultExpanded: v, history: b, mcpServerStatuses: w } = e,
        N = (0, c.Wp)(b),
        M = N.reduce(eC, 0),
        k = N.reduce(ex, 0)
      j[0] !== b || j[1] !== w
        ? ((t = (0, c.W$)({ histories: [b], mcpServerStatuses: w })), (j[0] = b), (j[1] = w), (j[2] = t))
        : (t = j[2])
      let _ = t.length
      j[3] !== b.successes ? ((s = b.successes.filter(ey)), (j[3] = b.successes), (j[4] = s)) : (s = j[4])
      let O = _ + s.length,
        [E, R] = (0, i.useState)(v),
        [P, F] = (0, i.useState)(null),
        L = `import-history-${b.importId}`
      l =
        k > 0 && O > 0
          ? (0, n.jsx)(a.A, {
              id: "settings.import.history.summaryWithFailuresAndWarnings",
              defaultMessage:
                "{importedCount} imported \xb7 {failedCount} did not import \xb7 {warningCount} need review",
              values: { importedCount: M, failedCount: k, warningCount: O },
            })
          : k > 0
            ? (0, n.jsx)(a.A, {
                id: "settings.import.history.summaryWithFailures",
                defaultMessage: "{importedCount} imported \xb7 {failedCount} did not import",
                values: { importedCount: M, failedCount: k },
              })
            : O > 0
              ? (0, n.jsx)(a.A, {
                  id: "settings.import.history.summaryWithWarnings",
                  defaultMessage: "{importedCount} imported \xb7 {warningCount} need review",
                  values: { importedCount: M, warningCount: O },
                })
              : (0, n.jsx)(a.A, {
                  id: "settings.import.history.summary",
                  defaultMessage: "{importedCount} imported",
                  values: { importedCount: M },
                })
      let z = I.t,
        U = er.H,
        D =
          0 === N.length
            ? (0, n.jsx)(S.ic, {
                variant: "nested",
                label: (0, n.jsx)(a.A, {
                  id: "settings.import.history.noResults",
                  defaultMessage: "No results recorded",
                }),
                control: null,
              })
            : N.map((e) => {
                let t = `${L}-${e.itemType}`,
                  s = P === e.itemType
                return (0, n.jsx)(
                  er.H,
                  {
                    content: (0, n.jsx)(eu, { category: e, history: b }),
                    contentId: t,
                    expanded: s,
                    children: (0, n.jsx)(eb, {
                      category: e,
                      contentId: t,
                      expanded: s,
                      history: b,
                      mcpServerStatuses: w,
                      onToggleExpanded: () => {
                        F(s ? null : e.itemType)
                      },
                    }),
                  },
                  e.itemType,
                )
              })
      j[5] !== b.providerId
        ? ((o = (0, n.jsx)(ej, { providerId: b.providerId })), (j[5] = b.providerId), (j[6] = o))
        : (o = j[6])
      let q = Number(b.completedAtMs)
      ;(j[7] !== q
        ? ((d = (0, n.jsx)(T.XU, { value: q, dateStyle: "medium", timeStyle: "short" })), (j[7] = q), (j[8] = d))
        : (d = j[8]),
        j[9] !== l ? ((u = (0, n.jsx)("span", { children: l })), (j[9] = l), (j[10] = u)) : (u = j[10]),
        j[11] !== d || j[12] !== u
          ? ((m = (0, n.jsxs)("span", { className: "flex flex-wrap items-center gap-x-2", children: [d, u] })),
            (j[11] = d),
            (j[12] = u),
            (j[13] = m))
          : (m = j[13]),
        j[14] !== b.providerId
          ? ((p = (0, n.jsx)(ev, { providerId: b.providerId })), (j[14] = b.providerId), (j[15] = p))
          : (p = j[15]))
      let B = E && "rotate-180"
      return (
        j[16] !== B
          ? ((g = (0, A.A)("icon-2xs text-tertiary transition-transform", B)), (j[16] = B), (j[17] = g))
          : (g = j[17]),
        j[18] !== g
          ? ((f = (0, n.jsx)(es.A, { "aria-hidden": !0, className: g })), (j[18] = g), (j[19] = f))
          : (f = j[19]),
        j[20] !== R
          ? ((h = () => {
              R(eh)
            }),
            (j[20] = R),
            (j[21] = h))
          : (h = j[21]),
        j[22] !== L || j[23] !== E || j[24] !== p || j[25] !== f || j[26] !== h || j[27] !== o || j[28] !== m
          ? ((y = (0, n.jsx)(ew, {
              contentId: L,
              expanded: E,
              label: o,
              description: m,
              icon: p,
              control: f,
              onClick: h,
            })),
            (j[22] = L),
            (j[23] = E),
            (j[24] = p),
            (j[25] = f),
            (j[26] = h),
            (j[27] = o),
            (j[28] = m),
            (j[29] = y))
          : (y = j[29]),
        j[30] !== U || j[31] !== L || j[32] !== E || j[33] !== y || j[34] !== D
          ? ((x = (0, n.jsx)(U, { contentId: L, expanded: E, content: D, children: y })),
            (j[30] = U),
            (j[31] = L),
            (j[32] = E),
            (j[33] = y),
            (j[34] = D),
            (j[35] = x))
          : (x = j[35]),
        j[36] !== z || j[37] !== x
          ? ((C = (0, n.jsx)(z, { children: x })), (j[36] = z), (j[37] = x), (j[38] = C))
          : (C = j[38]),
        C
      )
    }
    function eh(e) {
      return !e
    }
    function ey(e) {
      return "HOOKS" === e.itemType
    }
    function ex(e, t) {
      return e + t.failedCount
    }
    function eC(e, t) {
      return e + t.importedCount
    }
    function ej(e) {
      let t = (0, r.c)(6),
        { providerId: s } = e,
        l = (0, k.A)()
      switch (s) {
        case "claude-code":
        case "claude-cowork":
        case "cursor": {
          let e, r
          return (
            t[0] !== l || t[1] !== s ? ((e = (0, P.du)(l, s)), (t[0] = l), (t[1] = s), (t[2] = e)) : (e = t[2]),
            t[3] !== e
              ? ((r = (0, n.jsx)(a.A, {
                  id: "settings.import.history.entryTitle.fromProvider",
                  defaultMessage: "Imported from {provider}",
                  values: { provider: e },
                })),
                (t[3] = e),
                (t[4] = r))
              : (r = t[4]),
            r
          )
        }
        default: {
          let e
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(a.A, { id: "settings.import.history.entryTitle", defaultMessage: "Import" })),
                (t[5] = e))
              : (e = t[5]),
            e
          )
        }
      }
    }
    function ev(e) {
      let t = (0, r.c)(4),
        { providerId: s } = e
      switch (s) {
        case "claude-code":
        case "claude-cowork": {
          let e,
            r = "claude-code" === s ? U.A : D.A
          return (
            t[0] !== r
              ? ((e = (0, n.jsx)("div", {
                  "aria-hidden": !0,
                  className:
                    "flex size-10 shrink-0 items-center justify-center rounded-lg bg-chart-orange text-inverse",
                  children: (0, n.jsx)(r, { className: "size-10" }),
                })),
                (t[0] = r),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "cursor": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)("div", {
                  "aria-hidden": !0,
                  className: "flex size-10 shrink-0 items-center justify-center rounded-lg text-default",
                  children: (0, n.jsx)(q.A, { className: "size-10" }),
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        default: {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)("div", {
                  "aria-hidden": !0,
                  className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-text/5 text-secondary",
                  children: (0, n.jsx)(en.A, { className: "icon-sm" }),
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
      }
    }
    function eb(e) {
      let t,
        s,
        l,
        i,
        o,
        d,
        u,
        m,
        p = (0, r.c)(28),
        { category: g, contentId: f, expanded: h, history: y, mcpServerStatuses: x, onToggleExpanded: C } = e,
        j = (0, k.A)()
      p[0] !== g.itemType || p[1] !== y || p[2] !== x
        ? ((t = "MCP_SERVER_CONFIG" === g.itemType ? (0, c.W$)({ histories: [y], mcpServerStatuses: x }).length : 0),
          (p[0] = g.itemType),
          (p[1] = y),
          (p[2] = x),
          (p[3] = t))
        : (t = p[3])
      let v = t
      ;(p[4] !== g.itemType || p[5] !== j
        ? ((s = (0, P.UY)(j, g.itemType)), (p[4] = g.itemType), (p[5] = j), (p[6] = s))
        : (s = p[6]),
        p[7] !== v || p[8] !== g.importedCount || p[9] !== g.itemType
          ? ((l =
              "COMMANDS" === g.itemType
                ? (0, n.jsx)(a.A, {
                    id: "settings.import.history.destination.commands",
                    defaultMessage: "Converted into skills",
                  })
                : "HOOKS" === g.itemType && g.importedCount > 0
                  ? (0, n.jsx)(a.A, {
                      id: "settings.import.history.manageHooks",
                      defaultMessage: "Manage imported hooks in Hooks settings",
                    })
                  : v > 0
                    ? (0, n.jsx)(a.A, {
                        id: "settings.import.history.authRequiredCount.v2",
                        defaultMessage:
                          "{count, plural, one {# server needs authentication} other {# servers need authentication}}",
                        values: { count: v },
                      })
                    : null),
            (p[7] = v),
            (p[8] = g.importedCount),
            (p[9] = g.itemType),
            (p[10] = l))
          : (l = p[10]),
        p[11] !== v || p[12] !== g
          ? ((i = (0, n.jsx)(eS, { authRequiredCount: v, category: g })), (p[11] = v), (p[12] = g), (p[13] = i))
          : (i = p[13]))
      let b = h && "rotate-90"
      return (
        p[14] !== b
          ? ((o = (0, A.A)("shrink-0 text-tertiary transition-transform", b)), (p[14] = b), (p[15] = o))
          : (o = p[15]),
        p[16] !== o
          ? ((d = (0, n.jsx)(ee.bF, {
              className: o,
              "aria-hidden": !1,
              asset16: Q.q,
              legacyIcon: et.A,
              legacyClassName: "icon-2xs",
            })),
            (p[16] = o),
            (p[17] = d))
          : (d = p[17]),
        p[18] !== i || p[19] !== d
          ? ((u = (0, n.jsxs)("div", {
              className: "flex shrink-0 items-center gap-3 whitespace-nowrap",
              children: [i, d],
            })),
            (p[18] = i),
            (p[19] = d),
            (p[20] = u))
          : (u = p[20]),
        p[21] !== f || p[22] !== h || p[23] !== C || p[24] !== s || p[25] !== l || p[26] !== u
          ? ((m = (0, n.jsx)(ew, {
              contentId: f,
              expanded: h,
              variant: "nested",
              label: s,
              description: l,
              control: u,
              onClick: C,
            })),
            (p[21] = f),
            (p[22] = h),
            (p[23] = C),
            (p[24] = s),
            (p[25] = l),
            (p[26] = u),
            (p[27] = m))
          : (m = p[27]),
        m
      )
    }
    function eS(e) {
      let t,
        s,
        l = (0, r.c)(11),
        { authRequiredCount: i, category: o } = e
      if (o.failedCount > 0) {
        let e, t
        return (
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", { className: "size-2 shrink-0 rounded-full bg-chart-red" })), (l[0] = e))
            : (e = l[0]),
          l[1] !== o.failedCount || l[2] !== o.importedCount
            ? ((t = (0, n.jsxs)("span", {
                className:
                  "inline-flex items-center gap-2 rounded-lg bg-chart-red/10 px-2 py-1 text-xs font-medium text-chart-red",
                children: [
                  e,
                  (0, n.jsx)(a.A, {
                    id: "settings.import.history.categorySummaryWithFailures",
                    defaultMessage: "{importedCount} imported \xb7 {failedCount} did not import",
                    values: { importedCount: o.importedCount, failedCount: o.failedCount },
                  }),
                ],
              })),
              (l[1] = o.failedCount),
              (l[2] = o.importedCount),
              (l[3] = t))
            : (t = l[3]),
          t
        )
      }
      if (i > 0 || ("HOOKS" === o.itemType && o.importedCount > 0)) {
        let e, t
        return (
          l[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", { className: "size-2 shrink-0 rounded-full bg-text-warning" })), (l[4] = e))
            : (e = l[4]),
          l[5] !== i || l[6] !== o.importedCount
            ? ((t = (0, n.jsxs)("span", {
                className: "inline-flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-medium text-warning",
                children: [
                  e,
                  i > 0
                    ? (0, n.jsx)(a.A, {
                        id: "settings.import.history.categorySummaryWithAuthentication",
                        defaultMessage:
                          "{importedCount} imported \xb7 {authRequiredCount, plural, one {# needs authentication} other {# need authentication}}",
                        values: { authRequiredCount: i, importedCount: o.importedCount },
                      })
                    : (0, n.jsx)(a.A, {
                        id: "settings.import.history.categorySummaryNeedsReview",
                        defaultMessage: "{importedCount} imported \xb7 Needs review",
                        values: { importedCount: o.importedCount },
                      }),
                ],
              })),
              (l[5] = i),
              (l[6] = o.importedCount),
              (l[7] = t))
            : (t = l[7]),
          t
        )
      }
      return (
        l[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("span", { className: "size-2 shrink-0 rounded-full bg-chart-green" })), (l[8] = t))
          : (t = l[8]),
        l[9] !== o.importedCount
          ? ((s = (0, n.jsxs)("span", {
              className: "inline-flex items-center gap-2 text-xs font-medium text-default",
              children: [
                t,
                (0, n.jsx)(a.A, {
                  id: "settings.import.history.categorySummary",
                  defaultMessage: "{importedCount} imported",
                  values: { importedCount: o.importedCount },
                }),
              ],
            })),
            (l[9] = o.importedCount),
            (l[10] = s))
          : (s = l[10]),
        s
      )
    }
    function ew(e) {
      let t,
        s,
        l = (0, r.c)(11),
        { contentId: i, control: a, description: o, expanded: d, icon: u, label: c, onClick: m, variant: p } = e
      return (
        l[0] !== a || l[1] !== o || l[2] !== u || l[3] !== c || l[4] !== p
          ? ((t = (0, n.jsx)(S.ic, { variant: p, label: c, description: o, icon: u, control: a })),
            (l[0] = a),
            (l[1] = o),
            (l[2] = u),
            (l[3] = c),
            (l[4] = p),
            (l[5] = t))
          : (t = l[5]),
        l[6] !== i || l[7] !== d || l[8] !== m || l[9] !== t
          ? ((s = (0, n.jsx)("button", {
              "aria-controls": i,
              "aria-expanded": d,
              className:
                "w-full cursor-interaction text-start hover:bg-secondary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
              onClick: m,
              type: "button",
              children: t,
            })),
            (l[6] = i),
            (l[7] = d),
            (l[8] = m),
            (l[9] = t),
            (l[10] = s))
          : (s = l[10]),
        s
      )
    }
    var eI = s("JNtf"),
      eN = s("F0xz"),
      eM = s("S1bN"),
      eA = s("fk2y"),
      ek = s("RxZZ"),
      eT = s("Sezd"),
      e_ = s("mUDD"),
      eO = s("bVeK"),
      eE = s("yi3U")
    let eR = {
      SESSIONS: (0, n.jsx)(eO.oMj, {}),
      AGENTS_MD: (0, n.jsx)(eO.o_G, {}),
      CONFIG: (0, n.jsx)(eO.zC5, {}),
      SKILLS: (0, n.jsx)(eO.IW0, {}),
      PLUGINS: (0, n.jsx)(eO.wdY, {}),
      MCP_SERVER_CONFIG: (0, n.jsx)(eO.zC5, {}),
      SUBAGENTS: (0, n.jsx)(eO.CVn, {}),
      HOOKS: (0, n.jsx)(eO.o1J, {}),
      COMMANDS: (0, n.jsx)(eO.h3q, {}),
      MEMORY: (0, n.jsx)(eO.o_G, {}),
    }
    function eP(e) {
      let t,
        s,
        l,
        d,
        c,
        m,
        p,
        g,
        f,
        h,
        y,
        x,
        C,
        j,
        v,
        b,
        w,
        N,
        M,
        A,
        k,
        T = (0, r.c)(68),
        { itemTypes: _, initialPreferences: O, isSaving: E, syncState: R, onCancel: P, onSave: F } = e,
        L = (0, i.useId)(),
        [z, U] = (0, i.useState)(O),
        [D, q] = (0, i.useState)(!1),
        [B, V] = (0, i.useState)(!1),
        H = B ? eA.lV : _,
        K = "all" === z ? H : _
      T[0] !== z || T[1] !== R || T[2] !== K
        ? ((t = (0, eA.Ww)({ preferences: z, syncState: R, itemTypes: K })),
          (T[0] = z),
          (T[1] = R),
          (T[2] = K),
          (T[3] = t))
        : (t = T[3])
      let $ = t
      T[4] !== _ || T[5] !== z || T[6] !== R
        ? ((s = eA.lV.some((e) => !1 !== (0, eA.Lj)({ preferences: z, syncState: R, itemType: e, itemTypes: _ }))),
          (T[4] = _),
          (T[5] = z),
          (T[6] = R),
          (T[7] = s))
        : (s = T[7])
      let G = s
      if (
        (T[8] !== G || T[9] !== E || T[10] !== F || T[11] !== z
          ? ((l = (e) => {
              ;(e.preventDefault(),
                G &&
                  !E &&
                  (q(!1),
                  F(z).catch(() => {
                    q(!0)
                  })))
            }),
            (T[8] = G),
            (T[9] = E),
            (T[10] = F),
            (T[11] = z),
            (T[12] = l))
          : (l = T[12]),
        T[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(eI.L3, { children: (0, n.jsx)(a.A, { ...eE.TO.content }) })), (T[13] = d))
          : (d = T[13]),
        T[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)(e_.OO, {
              className: "shrink-0",
              children: (0, n.jsx)(e_.c7, {
                title: d,
                subtitle: (0, n.jsx)(eI.rr, {
                  children: (0, n.jsx)(a.A, {
                    id: "settings.import.autosync.customizeDescription",
                    defaultMessage: "Applies to all connected sources and projects",
                  }),
                }),
              }),
            })),
            (T[14] = c))
          : (c = T[14]),
        T[15] !== $ || T[16] !== L || T[17] !== E || T[18] !== _ || T[19] !== z || T[20] !== R || T[21] !== H)
      ) {
        let e
        ;(T[23] !== $ || T[24] !== L || T[25] !== E || T[26] !== _ || T[27] !== z || T[28] !== R
          ? ((e = (e) => {
              let t = "CONFIG" !== e || R?.providerIds.includes("claude-cowork") ? eE.eS[e] : void 0,
                s = `${L}-${e}`
              return (0, n.jsx)(
                "label",
                {
                  className: E ? void 0 : "cursor-interaction",
                  htmlFor: s,
                  children: (0, n.jsx)(S.ic, {
                    control: (t) =>
                      (0, n.jsx)("div", {
                        className: "relative",
                        children: (0, n.jsx)(eT.S, {
                          id: s,
                          ...t,
                          checked: (0, eA.Lj)({ preferences: z, syncState: R, itemType: e, itemTypes: _ }),
                          disabled: E,
                          onCheckedChange: (t) => {
                            ;(U({ ...$, [e]: t }), q(!1))
                          },
                        }),
                      }),
                    description: null == t ? void 0 : (0, n.jsx)(a.A, { ...t }),
                    icon: eR[e],
                    label: (0, n.jsx)(a.A, { ...eE.L_[e] }),
                  }),
                },
                e,
              )
            }),
            (T[23] = $),
            (T[24] = L),
            (T[25] = E),
            (T[26] = _),
            (T[27] = z),
            (T[28] = R),
            (T[29] = e))
          : (e = T[29]),
          (m = H.map(e)),
          (T[15] = $),
          (T[16] = L),
          (T[17] = E),
          (T[18] = _),
          (T[19] = z),
          (T[20] = R),
          (T[21] = H),
          (T[22] = m))
      } else m = T[22]
      ;(T[30] !== m
        ? ((p = (0, n.jsx)(e_.OO, {
            className: "min-h-0 overflow-y-auto",
            children: (0, n.jsx)(I.t, { children: m }),
          })),
          (T[30] = m),
          (T[31] = p))
        : (p = T[31]),
        T[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(a.A, {
              id: "settings.import.autosync.allCategories",
              defaultMessage: "Sync all categories",
            })),
            (g = (0, n.jsx)(a.A, {
              id: "settings.import.autosync.allCategoriesDescription",
              defaultMessage: "Include categories found in the future",
            })),
            (T[32] = g),
            (T[33] = f))
          : ((g = T[32]), (f = T[33])),
        T[34] !== $ || T[35] !== E || T[36] !== z
          ? ((h = (0, n.jsx)(S.ic, {
              label: f,
              description: g,
              control: (e) =>
                (0, n.jsx)(eN.l, {
                  ...e,
                  checked: "all" === z,
                  disabled: E,
                  onChange: (e) => {
                    ;(U(e ? "all" : $), q(!1))
                  },
                }),
            })),
            (T[34] = $),
            (T[35] = E),
            (T[36] = z),
            (T[37] = h))
          : (h = T[37]),
        T[38] !== E || T[39] !== _.length || T[40] !== B
          ? ((y =
              _.length < eA.lV.length
                ? (0, n.jsx)(S.ic, {
                    label: (0, n.jsx)(a.A, {
                      id: "settings.import.autosync.showAllCategories",
                      defaultMessage: "Show all categories",
                    }),
                    description: (0, n.jsx)(a.A, {
                      id: "settings.import.autosync.showAllCategoriesDescription",
                      defaultMessage: "Choose what to sync when new categories become available",
                    }),
                    control: (e) => (0, n.jsx)(eN.l, { ...e, checked: B, disabled: E, onChange: V }),
                  })
                : null),
            (T[38] = E),
            (T[39] = _.length),
            (T[40] = B),
            (T[41] = y))
          : (y = T[41]),
        T[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)("p", {
              className: "text-sm leading-4 text-secondary",
              children: (0, n.jsx)(a.A, {
                id: "settings.import.autosync.futureSyncs.v2",
                defaultMessage: "Changes apply to future syncs. Content already imported stays in {appName}",
                values: { appName: o.C },
              }),
            })),
            (T[42] = x))
          : (x = T[42]),
        T[43] !== G
          ? ((C = G
              ? null
              : (0, n.jsx)("p", {
                  className: "text-sm leading-4 text-secondary",
                  role: "alert",
                  children: (0, n.jsx)(a.A, {
                    id: "settings.import.autosync.noCategories",
                    defaultMessage:
                      "Select at least one category. To stop syncing, turn off \u201CKeep imports in sync\u201D",
                  }),
                })),
            (T[43] = G),
            (T[44] = C))
          : (C = T[44]),
        T[45] !== D
          ? ((j = D
              ? (0, n.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, n.jsx)(a.A, {
                    id: "settings.import.autosync.saveError",
                    defaultMessage: "Couldn\u2019t save sync preferences. Try again",
                  }),
                })
              : null),
            (T[45] = D),
            (T[46] = j))
          : (j = T[46]),
        T[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, n.jsx)(a.A, { id: "settings.import.autosync.cancel", defaultMessage: "Cancel" })), (T[47] = v))
          : (v = T[47]),
        T[48] !== E || T[49] !== P
          ? ((b = (0, n.jsx)(u.$, { type: "button", color: "outline", disabled: E, onClick: P, children: v })),
            (T[48] = E),
            (T[49] = P),
            (T[50] = b))
          : (b = T[50]))
      let W = !G || E
      return (
        T[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)(a.A, { id: "settings.import.autosync.save", defaultMessage: "Save" })), (T[51] = w))
          : (w = T[51]),
        T[52] !== E || T[53] !== W
          ? ((N = (0, n.jsx)(u.$, { type: "submit", color: "primary", disabled: W, loading: E, children: w })),
            (T[52] = E),
            (T[53] = W),
            (T[54] = N))
          : (N = T[54]),
        T[55] !== b || T[56] !== N
          ? ((M = (0, n.jsxs)(e_.Es, { children: [b, N] })), (T[55] = b), (T[56] = N), (T[57] = M))
          : (M = T[57]),
        T[58] !== h || T[59] !== y || T[60] !== C || T[61] !== j || T[62] !== M
          ? ((A = (0, n.jsx)(e_.OO, {
              className: "shrink-0",
              children: (0, n.jsxs)(e_.RW, { children: [h, y, x, C, j, M] }),
            })),
            (T[58] = h),
            (T[59] = y),
            (T[60] = C),
            (T[61] = j),
            (T[62] = M),
            (T[63] = A))
          : (A = T[63]),
        T[64] !== A || T[65] !== l || T[66] !== p
          ? ((k = (0, n.jsxs)(e_.R4, {
              as: "form",
              className: "max-h-[min(720px,calc(100vh-64px))] overflow-hidden select-none",
              onSubmit: l,
              children: [c, p, A],
            })),
            (T[64] = A),
            (T[65] = l),
            (T[66] = p),
            (T[67] = k))
          : (k = T[67]),
        k
      )
    }
    function eF(e) {
      let t,
        s,
        o,
        d,
        m,
        p,
        g,
        f,
        h,
        y,
        x,
        C,
        j,
        b,
        S,
        w,
        M,
        A = (0, r.c)(61),
        { workspaceRoots: k } = e,
        _ = (0, l.gh)(K.u),
        O = (0, ek.iK)(ei.Hiz.syncEnabled),
        E = (0, ek.iK)(ei.Hiz.syncItemTypes),
        R = (0, l.Ul)(ek.dW),
        P = (0, l.Ul)(eM.wE),
        U = (0, G.Zj)(F.Pc)
      A[0] !== U ? ((t = (0, F.lM)(U)), (A[0] = U), (A[1] = t)) : (t = A[1])
      let D = t,
        q = (0, L.bG)(),
        B = null != P
      A[2] !== D || A[3] !== q || A[4] !== B || A[5] !== k
        ? ((s = { enabled: B, hostId: N.fI, providers: D, sessionLimits: q, workspaceRoots: k }),
          (A[2] = D),
          (A[3] = q),
          (A[4] = B),
          (A[5] = k),
          (A[6] = s))
        : (s = A[6])
      let { detectedItems: V } = (0, z.e)(s),
        { data: H } = (0, l._U)(c.ej, N.fI),
        Z = (0, eA.oN)({ syncState: P, detectedItems: V, histories: H }),
        [Y, X] = (0, i.useState)(!1),
        [J, Q] = (0, i.useState)(!1),
        [ee, et] = (0, i.useState)(!1),
        es = eA.lV.filter((e) => !1 !== (0, eA.Lj)({ preferences: E, syncState: P, itemType: e, itemTypes: Z })),
        en = R && P?.version === 1 && P.providerIds.length > 0,
        er = T.dT,
        el = es.map(eL)
      A[7] !== er || A[8] !== el
        ? ((o = (0, n.jsx)(er, { type: "conjunction", value: el })), (A[7] = er), (A[8] = el), (A[9] = o))
        : (o = A[9])
      let ea = o
      if ("all" === E) {
        let e
        ;(A[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(a.A, {
              id: "settings.import.autosync.allCategoriesSummary",
              defaultMessage: "All categories, including new ones",
            })),
            (A[10] = e))
          : (e = A[10]),
          (ea = e))
      } else if (0 === es.length) {
        let e
        ;(A[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(a.A, {
              id: "settings.import.autosync.noneSelected",
              defaultMessage: "No content selected",
            })),
            (A[11] = e))
          : (e = A[11]),
          (ea = e))
      } else if (1 === es.length && "SESSIONS" === es[0]) {
        let e
        ;(A[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(a.A, { id: "settings.import.autosync.chatsOnly", defaultMessage: "Chats only" })),
            (A[12] = e))
          : (e = A[12]),
          (ea = e))
      } else if (es.length > 3) {
        let e
        ;(A[13] !== es.length
          ? ((e = (0, n.jsx)(a.A, {
              id: "settings.import.autosync.selectedCount",
              defaultMessage: "{count} categories selected",
              values: { count: es.length },
            })),
            (A[13] = es.length),
            (A[14] = e))
          : (e = A[14]),
          (ea = e))
      }
      ;(A[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, n.jsx)(v.X.Header, { title: (0, n.jsx)(a.A, { ...W.fj.syncTitle }) })), (A[15] = d))
        : (d = A[15]),
        A[16] !== O
          ? ((m = O
              ? (0, n.jsx)(a.A, { ...W.fj.syncDescription })
              : (0, n.jsx)(a.A, {
                  id: "settings.import.autosync.paused",
                  defaultMessage: "Sync paused. Your content selections are saved",
                })),
            (A[16] = O),
            (A[17] = m))
          : (m = A[17]),
        A[18] !== _ || A[19] !== et || A[20] !== R || A[21] !== O
          ? ((p = (e) =>
              (0, n.jsx)(eN.l, {
                ...e,
                checked: O,
                disabled: !R,
                onChange: (e) => {
                  ;(et(!1),
                    (0, ek.gc)(_, ei.Hiz.syncEnabled, e).catch(() => {
                      et(!0)
                    }))
                },
              })),
            (A[18] = _),
            (A[19] = et),
            (A[20] = R),
            (A[21] = O),
            (A[22] = p))
          : (p = A[22]),
        A[23] !== p || A[24] !== m
          ? ((g = (0, n.jsx)($.GC, { entry: W.Hc.sync, description: m, control: p })),
            (A[23] = p),
            (A[24] = m),
            (A[25] = g))
          : (g = A[25]),
        A[26] !== ea || A[27] !== P
          ? ((f =
              null == P || 0 === P.providerIds.length
                ? (0, n.jsx)(a.A, {
                    id: "settings.import.autosync.afterImport",
                    defaultMessage: "Available after your first import",
                  })
                : ea),
            (A[26] = ea),
            (A[27] = P),
            (A[28] = f))
          : (f = A[28]),
        A[29] !== J || A[30] !== X
          ? ((h = (e) => {
              J || X(e)
            }),
            (A[29] = J),
            (A[30] = X),
            (A[31] = h))
          : (h = A[31]))
      let eo = !en
      return (
        A[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)(a.A, { id: "settings.import.autosync.customize", defaultMessage: "Customize" })),
            (A[32] = y))
          : (y = A[32]),
        A[33] !== eo
          ? ((x = (0, n.jsx)(u.$, { color: "secondary", size: "toolbar", disabled: eo, children: y })),
            (A[33] = eo),
            (A[34] = x))
          : (x = A[34]),
        A[35] !== Y ||
        A[36] !== J ||
        A[37] !== Z ||
        A[38] !== E ||
        A[39] !== _ ||
        A[40] !== X ||
        A[41] !== Q ||
        A[42] !== P
          ? ((C = Y
              ? (0, n.jsx)(eP, {
                  itemTypes: Z,
                  initialPreferences: E,
                  isSaving: J,
                  syncState: P,
                  onCancel: () => X(!1),
                  onSave: (e) => (
                    Q(!0),
                    (0, ek.gc)(_, ei.Hiz.syncItemTypes, e)
                      .then(() => {
                        X(!1)
                      })
                      .finally(() => {
                        Q(!1)
                      })
                  ),
                })
              : null),
            (A[35] = Y),
            (A[36] = J),
            (A[37] = Z),
            (A[38] = E),
            (A[39] = _),
            (A[40] = X),
            (A[41] = Q),
            (A[42] = P),
            (A[43] = C))
          : (C = A[43]),
        A[44] !== Y || A[45] !== J || A[46] !== h || A[47] !== x || A[48] !== C
          ? ((j = (0, n.jsx)(eI.lG, {
              open: Y,
              onOpenChange: h,
              shouldIgnoreClickOutside: J,
              showDialogClose: !1,
              size: "xwide",
              triggerContent: x,
              children: C,
            })),
            (A[44] = Y),
            (A[45] = J),
            (A[46] = h),
            (A[47] = x),
            (A[48] = C),
            (A[49] = j))
          : (j = A[49]),
        A[50] !== f || A[51] !== j
          ? ((b = (0, n.jsx)($.GC, { entry: W.Hc.syncContent, description: f, control: j })),
            (A[50] = f),
            (A[51] = j),
            (A[52] = b))
          : (b = A[52]),
        A[53] !== g || A[54] !== b
          ? ((S = (0, n.jsx)(v.X.Content, { children: (0, n.jsxs)(I.t, { children: [g, b] }) })),
            (A[53] = g),
            (A[54] = b),
            (A[55] = S))
          : (S = A[55]),
        A[56] !== ee
          ? ((w = ee
              ? (0, n.jsx)(v.X.Footer, {
                  children: (0, n.jsx)("span", {
                    className: "text-danger",
                    role: "alert",
                    children: (0, n.jsx)(a.A, {
                      id: "settings.import.autosync.toggleError",
                      defaultMessage: "Couldn\u2019t change automatic sync. Try again",
                    }),
                  }),
                })
              : null),
            (A[56] = ee),
            (A[57] = w))
          : (w = A[57]),
        A[58] !== S || A[59] !== w
          ? ((M = (0, n.jsxs)(v.X, { className: "select-none", children: [d, S, w] })),
            (A[58] = S),
            (A[59] = w),
            (A[60] = M))
          : (M = A[60]),
        M
      )
    }
    function eL(e) {
      return (0, n.jsx)(a.A, { ...eE.L_[e] }, e)
    }
    function ez() {
      let e,
        t,
        s,
        m,
        f,
        j,
        M,
        A,
        k,
        T,
        _,
        O,
        E,
        R,
        P,
        F,
        L,
        z,
        U,
        D,
        q,
        B,
        V,
        H,
        K = (0, r.c)(82),
        $ = (0, l.Ul)(W.n8),
        G = (0, l.Ul)(x.c_),
        Z = null == G,
        X = (0, l.Ul)(x.Gt),
        J = (0, l.Ul)(x.Gv)
      K[0] !== J || K[1] !== X
        ? ((e = X?.type === "local" ? (J[X.projectId]?.rootPaths ?? []) : []), (K[0] = J), (K[1] = X), (K[2] = e))
        : (e = K[2])
      let Q = e,
        ee = (0, l.Ul)(x.Qd),
        et = (0, l.Ul)(c.rz),
        { data: es, error: en, isLoading: er, refetch: el } = (0, l._U)(c.ej, N.fI)
      K[3] !== es ? ((t = es?.some(eq) ?? !1), (K[3] = es), (K[4] = t)) : (t = K[4])
      let ei = t
      ;(K[5] !== es ? ((s = es ?? []), (K[5] = es), (K[6] = s)) : (s = K[6]),
        K[7] !== s ? ((m = (0, c.eB)(s)), (K[7] = s), (K[8] = m)) : (m = K[8]))
      let ea = m,
        { data: eo } = (0, l._U)(p.M, N.fI),
        { data: ed } = (0, l._U)(c.Vh, N.fI)
      K[9] !== ed || K[10] !== eo?.connectors
        ? ((f = eo?.connectors == null && null == ed ? void 0 : [...(eo?.connectors ?? []), ...(ed ?? [])]),
          (K[9] = ed),
          (K[10] = eo?.connectors),
          (K[11] = f))
        : (f = K[11])
      let eu = f,
        ec = (eu?.length ?? 0) > 0
      K[12] !== ec ? ((j = { enabled: ec, hostId: N.fI }), (K[12] = ec), (K[13] = j)) : (j = K[13])
      let { hardRefetchAppsList: em, loadError: eg } = (0, d.Ad)(j),
        ef = (0, l._U)(g.u, N.fI),
        eh = "ready" === ef.status && "plugin-directory" === ef.data.kind
      K[14] !== eh ? ((M = { enabled: eh }), (K[14] = eh), (K[15] = M)) : (M = K[15])
      let { availablePlugins: ey, errorMessage: ex, isLoading: eC, refetch: ej } = (0, h.Z_)(N.fI, void 0, M)
      K[16] !== ey || K[17] !== ef || K[18] !== eC || K[19] !== ex || K[20] !== ej
        ? ((A = (0, g.O)({
            inputsResult: ef,
            pluginDirectory: { errorMessage: ex, isLoading: eC, plugins: ey, refetch: ej },
          })),
          (K[16] = ey),
          (K[17] = ef),
          (K[18] = eC),
          (K[19] = ex),
          (K[20] = ej),
          (K[21] = A))
        : (A = K[21])
      let ev = A,
        eb = ev.data
      K[22] !== ea ? ((k = { enabled: ea }), (K[22] = ea), (K[23] = k)) : (k = K[23])
      let { data: eS, error: ew, refetch: eI } = (0, l._U)(y.lt, N.fI, k)
      K[24] !== es ? ((T = es ?? []), (K[24] = es), (K[25] = T)) : (T = K[25])
      let eN = (0, c.Yu)({ histories: T, runningImport: et?.hostId === N.fI ? et : null }),
        eM = (0, c.Al)(eN),
        [eA, ek] = (0, i.useState)(!1),
        [eT, e_] = (0, i.useState)(!1),
        eO = eT ? eN : eM
      K[26] !== es ? ((_ = es?.find(eD)), (K[26] = es), (K[27] = _)) : (_ = K[27])
      let eE = _
      K[28] !== eb?.appsRequiringConnection
        ? ((O = eb?.appsRequiringConnection ?? []), (K[28] = eb?.appsRequiringConnection), (K[29] = O))
        : (O = K[29])
      let eR = O,
        eP = null == eg ? ev.status : "error"
      ;(K[30] !== es ? ((E = es ?? []), (K[30] = es), (K[31] = E)) : (E = K[31]),
        K[32] !== eS?.data ? ((R = eS?.data ?? []), (K[32] = eS?.data), (K[33] = R)) : (R = K[33]),
        K[34] !== E || K[35] !== R
          ? ((P = (0, c.W$)({ histories: E, mcpServerStatuses: R })), (K[34] = E), (K[35] = R), (K[36] = P))
          : (P = K[36]))
      let eL = P
      ;(K[37] !== es ? ((F = es ?? []), (K[37] = es), (K[38] = F)) : (F = K[38]),
        K[39] !== F ? ((L = (0, c.uD)(F)), (K[39] = F), (K[40] = L)) : (L = K[40]))
      let ez = L,
        eV = eS?.data
      K[41] !== es || K[42] !== en || K[43] !== ew || K[44] !== eV
        ? ((z = (0, c.iy)({ histories: es, historiesError: en, mcpServerStatuses: eV, mcpServerStatusesError: ew })),
          (K[41] = es),
          (K[42] = en),
          (K[43] = ew),
          (K[44] = eV),
          (K[45] = z))
        : (z = K[45])
      let eH = z,
        eK = (ei || ec) && "ready" !== eP,
        e$ = ea && "ready" !== eH,
        eG = e$ && "error" === eH,
        eW = (eb?.importedPlugins.length ?? 0) > 0 || eR.length > 0 || eK || eL.length > 0 || ez || eG,
        eZ = C.P
      ;(K[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = (0, n.jsx)(w.s, { slug: "import" })), (K[46] = U))
        : (U = K[46]),
        K[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, n.jsx)(a.A, {
              id: "settings.import.subtitle.v2",
              defaultMessage: "Bring setup, projects, and chats from other AI apps into {appName}",
              values: { appName: o.C },
            })),
            (K[47] = D))
          : (D = K[47]),
        K[48] !== Q || K[49] !== G || K[50] !== $
          ? ((q = $ ? (0, n.jsx)(eF, { workspaceRoots: null == G ? void 0 : Q }) : null),
            (K[48] = Q),
            (K[49] = G),
            (K[50] = $),
            (K[51] = q))
          : (q = K[51]))
      let eY = Z || ee || er,
        eX = null == eE ? null : Number(eE.completedAtMs),
        eJ = null == G ? void 0 : Q
      ;(K[52] !== eY || K[53] !== eX || K[54] !== eJ
        ? ((B = (0, n.jsx)(Y, { isImportContextLoading: eY, latestSuccessfulImportAtMs: eX, workspaceRoots: eJ })),
          (K[52] = eY),
          (K[53] = eX),
          (K[54] = eJ),
          (K[55] = B))
        : (B = K[55]),
        K[56] !== eg ||
        K[57] !== eR ||
        K[58] !== em ||
        K[59] !== ez ||
        K[60] !== ea ||
        K[61] !== eA ||
        K[62] !== eP ||
        K[63] !== eL ||
        K[64] !== eH ||
        K[65] !== eb?.importedPlugins ||
        K[66] !== ev ||
        K[67] !== el ||
        K[68] !== eI ||
        K[69] !== eW ||
        K[70] !== eK ||
        K[71] !== eG ||
        K[72] !== e$
          ? ((V =
              eW || eA
                ? (0, n.jsx)(eB, {
                    appsRequiringConnection: eR,
                    hardRefetchAppsList: em,
                    hasImportedHooks: ez,
                    hasImportedMcpServers: ea,
                    importedConnectorDiscoveryStatus: eP,
                    importedMcpServerNamesRequiringAuthentication: eL,
                    importedMcpSetupStatus: eH,
                    importedPlugins: eb?.importedPlugins ?? [],
                    retryImportHistories: () => {
                      el()
                    },
                    retryImportedApps: () => {
                      ;("error" === ev.status && ev.retry(), null != eg && em().catch(eU))
                    },
                    retryMcpServerStatuses: () => {
                      eI()
                    },
                    onSetupStarted: () => {
                      ek(!0)
                    },
                    shouldShowImportedConnectorStatus: eK,
                    shouldShowMcpServerError: eG,
                    shouldShowMcpServerStatus: e$,
                  })
                : null),
            (K[56] = eg),
            (K[57] = eR),
            (K[58] = em),
            (K[59] = ez),
            (K[60] = ea),
            (K[61] = eA),
            (K[62] = eP),
            (K[63] = eL),
            (K[64] = eH),
            (K[65] = eb?.importedPlugins),
            (K[66] = ev),
            (K[67] = el),
            (K[68] = eI),
            (K[69] = eW),
            (K[70] = eK),
            (K[71] = eG),
            (K[72] = e$),
            (K[73] = V))
          : (V = K[73]))
      let eQ =
        eN.length > 0 || er || null != en
          ? (0, n.jsxs)(v.X, {
              children: [
                (0, n.jsx)(v.X.Header, {
                  title: (0, n.jsx)(a.A, {
                    id: "settings.import.history.latestTitle",
                    defaultMessage: "Import history",
                  }),
                }),
                (0, n.jsxs)(v.X.Content, {
                  children: [
                    eO.map((e) =>
                      (0, n.jsx)(
                        ep,
                        {
                          defaultExpanded: "completed" === e.kind && eM.includes(e),
                          entry: e,
                          mcpServerStatuses: eS?.data ?? [],
                        },
                        "running" === e.kind ? `running-${e.runningImport.startedAtMs}` : e.history.importId,
                      ),
                    ),
                    eO.length < eN.length
                      ? (0, n.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, n.jsx)(u.$, {
                            color: "secondary",
                            size: "toolbar",
                            onClick: () => {
                              e_(!0)
                            },
                            children: (0, n.jsx)(a.A, {
                              id: "settings.import.history.viewMore",
                              defaultMessage: "View more",
                            }),
                          }),
                        })
                      : null,
                    er
                      ? (0, n.jsx)(I.t, {
                          children: (0, n.jsx)(b.u, {
                            children: (0, n.jsx)(a.A, {
                              id: "settings.import.history.loading",
                              defaultMessage: "Loading import history",
                            }),
                          }),
                        })
                      : null == es && null != en
                        ? (0, n.jsx)(I.t, {
                            children: (0, n.jsx)(S.ic, {
                              label: (0, n.jsx)(a.A, {
                                id: "settings.import.history.error",
                                defaultMessage: "Couldn't load import history",
                              }),
                              control: (0, n.jsx)(u.$, {
                                color: "secondary",
                                size: "toolbar",
                                onClick: () => {
                                  el()
                                },
                                children: (0, n.jsx)(a.A, {
                                  id: "settings.import.history.retry",
                                  defaultMessage: "Retry",
                                }),
                              }),
                            }),
                          })
                        : null,
                  ],
                }),
              ],
            })
          : null
      return (
        K[74] !== eZ || K[75] !== U || K[76] !== D || K[77] !== q || K[78] !== B || K[79] !== V || K[80] !== eQ
          ? ((H = (0, n.jsxs)(eZ, { title: U, subtitle: D, children: [q, B, V, eQ] })),
            (K[74] = eZ),
            (K[75] = U),
            (K[76] = D),
            (K[77] = q),
            (K[78] = B),
            (K[79] = V),
            (K[80] = eQ),
            (K[81] = H))
          : (H = K[81]),
        H
      )
    }
    function eU() {}
    function eD(e) {
      return e.successes.length > 0
    }
    function eq(e) {
      return e.successes.length > 0
    }
    function eB(e) {
      let t,
        s,
        l,
        o,
        d,
        c,
        p,
        g,
        h,
        y,
        x,
        C = (0, r.c)(46),
        {
          appsRequiringConnection: b,
          hardRefetchAppsList: w,
          hasImportedHooks: M,
          hasImportedMcpServers: A,
          importedConnectorDiscoveryStatus: k,
          importedMcpServerNamesRequiringAuthentication: T,
          importedMcpSetupStatus: _,
          importedPlugins: O,
          retryImportHistories: E,
          retryImportedApps: R,
          retryMcpServerStatuses: P,
          shouldShowImportedConnectorStatus: F,
          shouldShowMcpServerError: L,
          shouldShowMcpServerStatus: z,
          onSetupStarted: U,
        } = e,
        [D, q] = (0, i.useState)("apps")
      C[0] !== w || C[1] !== A || C[2] !== E || C[3] !== R || C[4] !== P
        ? ((t = {
            hardRefetchAppsList: w,
            hasImportedMcpServers: A,
            hostId: N.fI,
            retryImportHistories: E,
            retryImportedApps: R,
            retryMcpServerStatuses: P,
          }),
          (C[0] = w),
          (C[1] = A),
          (C[2] = E),
          (C[3] = R),
          (C[4] = P),
          (C[5] = t))
        : (t = C[5])
      let {
          clearConnectingApp: B,
          connectedApps: V,
          connectingApp: H,
          handleAppConnectOAuthStarted: K,
          handleAppConnected: $,
          handleAuthenticateMcp: G,
          handleConnectApp: W,
          handleInstallPlugin: Z,
          handleOpenHooksSettings: Y,
          handleRetry: X,
          isAppConnectPending: J,
        } = (0, f.L)(t),
        Q = F ? k : "ready",
        ee = z ? _ : "ready"
      C[6] !== Q || C[7] !== ee
        ? ((s = { apps: Q, hooks: "ready", mcps: ee }), (C[6] = Q), (C[7] = ee), (C[8] = s))
        : (s = C[8])
      let et = s
      return (
        C[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(v.X.Header, {
              title: (0, n.jsx)(a.A, { id: "settings.import.attention.title", defaultMessage: "Needs attention" }),
              subtitle: (0, n.jsx)(a.A, {
                id: "settings.import.attention.subtitle",
                defaultMessage: "Finish setting up items from a previous import",
              }),
            })),
            (C[9] = l))
          : (l = C[9]),
        C[10] !== P || C[11] !== L
          ? ((o = L
              ? (0, n.jsx)(S.ic, {
                  label: (0, n.jsx)(a.A, {
                    id: "settings.import.attention.mcps.error",
                    defaultMessage: "Couldn't check imported MCP servers",
                  }),
                  control: (0, n.jsx)(u.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: P,
                    children: (0, n.jsx)(a.A, { id: "settings.import.attention.mcps.retry", defaultMessage: "Retry" }),
                  }),
                })
              : null),
            (C[10] = P),
            (C[11] = L),
            (C[12] = o))
          : (o = C[12]),
        C[13] !== W || C[14] !== U ? ((d = (e) => (U(), W(e))), (C[13] = W), (C[14] = U), (C[15] = d)) : (d = C[15]),
        C[16] !== Z || C[17] !== U
          ? ((c = (e, t) => {
              ;(U(), Z(e, t))
            }),
            (C[16] = Z),
            (C[17] = U),
            (C[18] = c))
          : (c = C[18]),
        C[19] !== b ||
        C[20] !== V ||
        C[21] !== G ||
        C[22] !== Y ||
        C[23] !== X ||
        C[24] !== M ||
        C[25] !== T ||
        C[26] !== O ||
        C[27] !== J ||
        C[28] !== D ||
        C[29] !== d ||
        C[30] !== c ||
        C[31] !== et
          ? ((p = (0, n.jsx)(m.sJ, {
              appsRequiringConnection: b,
              connectedApps: V,
              hasImportedHooks: M,
              importedPlugins: O,
              isAppConnectPending: J,
              mcpServerNamesRequiringAuthentication: T,
              selectedTab: D,
              tabStatus: et,
              variant: "settings",
              onConnectApp: d,
              onInstallPlugin: c,
              onOpenHooksSettings: Y,
              onAuthenticateMcp: G,
              onRetry: X,
              onSelectTab: q,
            })),
            (C[19] = b),
            (C[20] = V),
            (C[21] = G),
            (C[22] = Y),
            (C[23] = X),
            (C[24] = M),
            (C[25] = T),
            (C[26] = O),
            (C[27] = J),
            (C[28] = D),
            (C[29] = d),
            (C[30] = c),
            (C[31] = et),
            (C[32] = p))
          : (p = C[32]),
        C[33] !== o || C[34] !== p
          ? ((g = (0, n.jsxs)(v.X, {
              children: [l, (0, n.jsx)(v.X.Content, { children: (0, n.jsxs)(I.t, { children: [o, p] }) })],
            })),
            (C[33] = o),
            (C[34] = p),
            (C[35] = g))
          : (g = C[35]),
        C[36] !== B
          ? ((h = (e) => {
              e || B()
            }),
            (C[36] = B),
            (C[37] = h))
          : (h = C[37]),
        C[38] !== H || C[39] !== K || C[40] !== $ || C[41] !== h
          ? ((y = (0, n.jsx)(j.Z, {
              oauthReferrer: "imported_plugin",
              app: H,
              hostId: N.fI,
              onOpenChange: h,
              onOAuthStarted: K,
              onConnected: $,
            })),
            (C[38] = H),
            (C[39] = K),
            (C[40] = $),
            (C[41] = h),
            (C[42] = y))
          : (y = C[42]),
        C[43] !== g || C[44] !== y
          ? ((x = (0, n.jsxs)(n.Fragment, { children: [g, y] })), (C[43] = g), (C[44] = y), (C[45] = x))
          : (x = C[45]),
        x
      )
    }
  },
  J2FN(e, t, s) {
    var n = s("qmMi"),
      r = s("Qgfj"),
      l = s("Wj2H"),
      i = s("OWtl"),
      a = s("OMIV"),
      o = s("jBHQ"),
      d = s("yi3U")
    let u = (0, r.YK)({
        detectionTitle: {
          id: "settings.agent.importSettings.sectionTitle.v2",
          defaultMessage: "Import from another AI app",
        },
        syncTitle: { id: "settings.import.autosync.title", defaultMessage: "Automatic sync" },
        syncLabel: { id: "settings.import.autosync.label", defaultMessage: "Keep imports in sync" },
        syncDescription: {
          id: "settings.import.autosync.description",
          defaultMessage: "Automatically sync new and updated content from connected sources",
        },
      }),
      c = {
        detection: { section: "import", id: "import-from-another-app", title: u.detectionTitle },
        sync: {
          section: "import",
          id: "import-automatic-sync",
          title: u.syncLabel,
          keywords: [u.syncTitle, u.syncDescription],
        },
        syncContent: { section: "import", id: "import-sync-content", title: d.TO.content },
      },
      m = (0, n.un)(i.u, ({ get: e }) => e(a.JW, l.o)),
      p = (0, n.un)(i.u, ({ get: e }) => {
        let { detection: t, sync: s, syncContent: n } = c
        return e(o.P, l.o) ? [t, s, n] : [t]
      })
    s.d(t, {}, { Hc: c, fj: u, n8: m, nl: p })
  },
  yi3U(e, t, s) {
    var n = s("Qgfj")
    let r = (0, n.YK)({
        SESSIONS: { id: "settings.import.syncCategory.chats", defaultMessage: "Chats" },
        AGENTS_MD: { id: "settings.import.syncCategory.instructions", defaultMessage: "Instructions" },
        CONFIG: { id: "settings.import.syncCategory.settings", defaultMessage: "Settings" },
        SKILLS: { id: "settings.import.syncCategory.skills", defaultMessage: "Skills" },
        PLUGINS: { id: "settings.import.syncCategory.plugins", defaultMessage: "Plugins" },
        MCP_SERVER_CONFIG: { id: "settings.import.syncCategory.mcpServers", defaultMessage: "MCP servers" },
        SUBAGENTS: { id: "settings.import.syncCategory.agents", defaultMessage: "Agents" },
        HOOKS: { id: "settings.import.syncCategory.hooks", defaultMessage: "Hooks" },
        COMMANDS: { id: "settings.import.syncCategory.commands", defaultMessage: "Commands" },
        MEMORY: { id: "settings.import.syncCategory.memory", defaultMessage: "Memory" },
      }),
      l = (0, n.YK)({
        CONFIG: {
          id: "settings.import.autosync.settingsDescription",
          defaultMessage: "Cowork tools sync together with Settings",
        },
        PLUGINS: {
          id: "settings.import.autosync.pluginsDescription",
          defaultMessage: "Bundled skills and MCP servers sync with their plugin",
        },
        COMMANDS: { id: "settings.import.autosync.commandsDescription", defaultMessage: "Imported as skills" },
      }),
      i = (0, n.YK)({ content: { id: "settings.import.autosync.content", defaultMessage: "Content to sync" } })
    s.d(t, {}, { L_: r, TO: i, eS: l })
  },
  I7Ou(e, t, s) {
    var n = s("ABep"),
      r = s("QosV"),
      l = s("RNul"),
      i = s("AWNZ")
    s.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            s,
            a = (0, r.c)(3),
            { children: o } = e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(l.y, { className: "icon-xs shrink-0 text-secondary" })), (a[0] = t))
              : (t = a[0]),
            a[1] !== o
              ? ((s = (0, n.jsx)("div", {
                  role: "status",
                  children: (0, n.jsx)(i.ic, {
                    label: (0, n.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, n.jsx)("span", { className: "text-balance", children: o })],
                    }),
                    control: null,
                  }),
                })),
                (a[1] = o),
                (a[2] = s))
              : (s = a[2]),
            s
          )
        },
      },
    )
  },
  EjYe(e, t, s) {
    var n = s("ABep"),
      r = s("QosV"),
      l = s("bZug")
    s.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            s,
            i = (0, r.c)(7),
            { children: a, content: o, contentId: d, expanded: u } = e
          return (
            i[0] !== o || i[1] !== d || i[2] !== u
              ? ((t = u ? (0, n.jsx)("div", { id: d, className: l.r, children: o }) : null),
                (i[0] = o),
                (i[1] = d),
                (i[2] = u),
                (i[3] = t))
              : (t = i[3]),
            i[4] !== a || i[5] !== t
              ? ((s = (0, n.jsxs)("div", { className: l.r, children: [a, t] })), (i[4] = a), (i[5] = t), (i[6] = s))
              : (s = i[6]),
            s
          )
        },
      },
    )
  },
  wK45(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "checkmark-lg-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.494995, y: 4.234375, width: 16.984985, height: 15.447021 },
        visualBounds: { x: 3.494995, y: 4.234375, width: 16.984985, height: 15.447021 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.494995, y: 4.234375, width: 16.984985, height: 15.447021 },
        center: { x: 11.987488, y: 11.957886 },
        insets: { top: 4.234375, right: 3.52002, bottom: 4.318604, left: 3.494995 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 11.987488, y: 11.957886 },
          foreground: { x: 11.987488, y: 11.957886 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M19.1131 4.55849C19.3483 4.21765 19.8151 4.13186 20.156 4.36709C20.4966 4.60235 20.5824 5.06924 20.3474 5.41006L10.7703 19.287L10.7713 19.288C10.454 19.7542 9.79157 19.8165 9.39236 19.4188L3.71658 13.788C3.42263 13.4962 3.42096 13.0214 3.71267 12.7274C4.00443 12.4335 4.47921 12.4318 4.77322 12.7235L9.94021 17.8505L19.1131 4.55849Z" fill="currentColor"/>',
    })
    s.d(t, {}, { P: n })
  },
  v8Bs(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "circle-xmark-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        visualBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        center: { x: 12, y: 12 },
        insets: { top: 2.25, right: 2.25, bottom: 2.25, left: 2.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M14.2979 8.6416C14.5907 8.34871 15.0655 8.34871 15.3584 8.6416C15.6512 8.9345 15.6513 9.40928 15.3584 9.70215L13.0605 11.999L15.3594 14.2979C15.652 14.5907 15.6519 15.0655 15.3594 15.3584C15.0665 15.6513 14.5907 15.6513 14.2979 15.3584L12 13.0605L9.70215 15.3584C9.40928 15.6513 8.9345 15.6512 8.6416 15.3584C8.34871 15.0655 8.34871 14.5907 8.6416 14.2979L10.9395 12L8.6416 9.70215C8.34871 9.40926 8.34871 8.93352 8.6416 8.64062C8.93446 8.3481 9.40934 8.34801 9.70215 8.64062L12 10.9385L14.2979 8.6416Z" fill="currentColor"/> <path d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { W: n })
  },
}
//# sourceMappingURL=234284.a818c85e3b.js.map
