export const __rspack_esm_ids = [521872]
export const __webpack_modules__ = {
  xG8A(e, t, n) {
    n.d(t, { WS: () => k, $x: () => I, Oy: () => S })
    var s = n("ABep"),
      a = n("QosV"),
      r = n("qmMi"),
      l = n("DBCl"),
      i = n("IhIa"),
      o = n("Wf1j"),
      d = n("MQPm"),
      c = n("Ko9s"),
      u = n("SGsN"),
      m = n("YYwy"),
      g = n("IIBl"),
      f = n("v9CB"),
      h = n("OWtl"),
      p = n("WFY2"),
      x = n("pZTm"),
      v = n("LH8k")
    let b = "missing_github_connector_link"
    var j = n("TurB"),
      y = n("pjlf")
    function C(e, t) {
      switch ((0, l.Rt_)(e)) {
        case y.JS:
          return t.formatMessage({
            id: "composer.browserTabMentions.contextLimitExceeded",
            defaultMessage:
              "This message includes too much browser tab context. Remove some tab mentions and try again",
          })
        case y.Jg:
          return t.formatMessage(
            {
              id: "composer.browserTabMentions.limitExceeded",
              defaultMessage: "You can mention up to {limit} browser tabs per message",
            },
            { limit: l.s3R },
          )
        default:
          return null
      }
    }
    var _ = n("qle4"),
      w = n("J7aR"),
      M = n("oynk"),
      A = n("IiOi"),
      N = n("Ld2s")
    let E = {
      toastId: "composer_submit_failed",
      operation: "submit_conversation",
      errorCategory: "conversation",
      userFacingError: {
        surface: "CHATGPT_USER_FACING_ERROR_SURFACE_CODEX",
        errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION",
      },
    }
    function S(e) {
      let t,
        n = (0, a.c)(7),
        { composerMode: d, conversationId: j, cwd: y, followUpType: S } = e,
        R = (0, o.A)(),
        $ = (0, r.gh)(h.u)
      return (
        n[0] !== d || n[1] !== j || n[2] !== y || n[3] !== S || n[4] !== R || n[5] !== $
          ? ((t = (e, t, n) => {
              if ((0, g.ym)(e)) return void $.get(u.Id).danger(R.formatMessage(g.Bw.rejected), { errorAnalytics: E })
              if (e instanceof A.m)
                return void $.get(u.Id).danger(
                  R.formatMessage({
                    id: "composer.presentationSuggestionCloudUnsupported",
                    defaultMessage:
                      "Slide suggestions can\u2019t be sent to Cloud. Switch out of Cloud or remove the slide attachment to continue",
                  }),
                  { errorAnalytics: { ...E, toastId: "composer.presentationSuggestionCloudUnsupported" } },
                )
              if (e instanceof M.a || (0, w.DB)(e) || (0, w.zY)(e) || e instanceof f.Kr)
                return void $.get(u.Id).danger(e.message, {
                  errorAnalytics: { ...E, toastId: "composerSubmitError.useComposerSubmitError" },
                })
              if (
                e instanceof c.ChatGptProjectSyncAlreadyReportedError ||
                e instanceof N.e ||
                (e instanceof Error && "AbortError" === e.name)
              )
                return
              p.v.error("[Composer] submit failed", { safe: { mode: d, followUp: S }, sensitive: { cwd: y, error: e } })
              let a =
                "cloud" === d
                  ? void 0
                  : (0, m.t)($, {
                      conversationId: j,
                      surface: "codex",
                      operation: n ?? (null == j ? "startup" : "request_submission"),
                      errorMessage: (0, l.Rt_)(e),
                      occurredAtMs: Date.now(),
                    })
              "worktree" === d
                ? $.get(u.Id).danger(k(e, R), { id: "composer.taskError", primaryAction: a, errorAnalytics: E })
                : $.get(u.Id).danger(
                    (function ({ error: e, composerMode: t, intl: n }) {
                      var a
                      let r = I(e, n)
                      if (null != r) return r
                      let o = C(e, n)
                      if (null != o) return o
                      let d = B(e, n)
                      return null != d
                        ? d
                        : "worktree" === t && P(e)
                          ? n.formatMessage({
                              id: "composer.worktreeSetupFailed",
                              defaultMessage: "Worktree setup failed. Check .codex/environments for a setup script",
                            })
                          : ((a = e), (0, l.Rt_)(a).includes(_.bj))
                            ? n.formatMessage({
                                id: "composer.closedAgentError",
                                defaultMessage: "Ask parent to resume sub-agent to continue conversation",
                              })
                            : "cloud" === t
                              ? (function (e, t) {
                                  if ((0, l.Rt_)(e) === i.lr) return t.formatMessage(x.A.appInput)
                                  let n = e instanceof Error ? (0, v.d)(e) : null
                                  return n?.type === b
                                    ? t.formatMessage({
                                        id: "composer.cloudTaskCreationError.missingGithubConnectorLink",
                                        defaultMessage:
                                          "No GitHub connection. Reconnect your GitHub account in Plugins",
                                      })
                                    : t.formatMessage(
                                        {
                                          id: "composer.cloudTaskCreationError.v2",
                                          defaultMessage: "Error submitting message{br}{error}",
                                        },
                                        {
                                          br: (0, s.jsx)("br", {}, "cloud-task-creation-error-break"),
                                          error: n?.message ?? (0, l.Rt_)(e),
                                        },
                                      )
                                })(e, n)
                              : (function (e, t) {
                                  if ((0, l.Rt_)(e) === i.lr) return t.formatMessage(x.A.appInput)
                                  let n = e instanceof Error ? (0, v.d)(e) : null
                                  return n?.type === b
                                    ? t.formatMessage({
                                        id: "composer.cloudTaskError.missingGithubConnectorLink",
                                        defaultMessage:
                                          "No GitHub connection. Reconnect your GitHub account in Plugins",
                                      })
                                    : t.formatMessage(
                                        {
                                          id: "composer.cloudTaskError.v2",
                                          defaultMessage: "Error submitting message{br}{error}",
                                        },
                                        {
                                          br: (0, s.jsx)("br", {}, "task-creation-error-break"),
                                          error: n?.message ?? (0, l.Rt_)(e),
                                        },
                                      )
                                })(e, n)
                    })({ error: e, composerMode: d, intl: R }),
                    { id: t, primaryAction: a, errorAnalytics: E },
                  )
            }),
            (n[0] = d),
            (n[1] = j),
            (n[2] = y),
            (n[3] = S),
            (n[4] = R),
            (n[5] = $),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function k(e, t) {
      if ((0, l.Rt_)(e) === i.lr) return t.formatMessage(x.A.appInput)
      let n = I(e, t)
      if (null != n) return n
      let a = C(e, t)
      if (null != a) return a
      let r = B(e, t)
      return null != r
        ? r
        : P(e)
          ? t.formatMessage({
              id: "composer.worktreeSetupFailed",
              defaultMessage: "Worktree setup failed. Check .codex/environments for a setup script",
            })
          : t.formatMessage(
              { id: "composer.localTaskError.v2", defaultMessage: "Error starting chat{br}{error}" },
              { br: (0, s.jsx)("br", {}), error: (0, l.Rt_)(e) },
            )
    }
    function I(e, t) {
      return (0, l.Rt_)(e) === d.W
        ? t.formatMessage({
            id: "composer.threadReferences.toolUnavailable",
            defaultMessage: "Chat references aren't available here. Remove them or start a new chat",
          })
        : null
    }
    function P(e) {
      return !!e && "object" == typeof e && e.data?.code === "worktree_init_failed"
    }
    function B(e, t) {
      let n = (0, l.Rt_)(e)
      return n.includes(j.mb)
        ? t.formatMessage({
            id: "composer.submitToast.restorableWorkingDirectory",
            defaultMessage: "Restore the worktree to continue",
          })
        : n.includes(j.fX)
          ? t.formatMessage({
              id: "composer.submitToast.missingWorkingDirectory",
              defaultMessage: "The worktree no longer exists",
            })
          : n.includes(j.V4)
            ? t.formatMessage({
                id: "composer.submitToast.workspaceStatusUnavailable",
                defaultMessage: "Couldn't check worktree status",
              })
            : null
    }
  },
  oynk(e, t, n) {
    n.d(t, {}, { a: class extends Error {} })
  },
  IiOi(e, t, n) {
    n.d(t, {}, { m: class extends Error {} })
  },
  BrP7(e, t, n) {
    n.d(t, { t: () => C })
    var s = n("ABep"),
      a = n("QosV"),
      r = n("i1uX"),
      l = n("on57"),
      i = n("IjbW"),
      o = n("K4Cx"),
      d = n("zd8w"),
      c = n("UxN3"),
      u = n("SziE"),
      m = n("hZax"),
      g = n("Sm6l")
    let f = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function h(e) {
      let t,
        n,
        r,
        i,
        o,
        d,
        c,
        u,
        m,
        h,
        p,
        x,
        v = (0, a.c)(26)
      v[0] !== e
        ? (({ children: t, icon: n, size: i, surface: o, labelVisibility: d, ...r } = e),
          (v[0] = e),
          (v[1] = t),
          (v[2] = n),
          (v[3] = r),
          (v[4] = i),
          (v[5] = o),
          (v[6] = d))
        : ((t = v[1]), (n = v[2]), (r = v[3]), (i = v[4]), (o = v[5]), (d = v[6]))
      let b = void 0 === o ? "elevated" : o,
        j = void 0 === d ? "visible" : d,
        y = "large" === i && "visible" === j && "pb-1.5"
      v[7] !== y ? ((c = (0, l.A)("group/labeled-icon flex-col gap-1.5", y)), (v[7] = y), (v[8] = c)) : (c = v[8])
      let C = "elevated" === b ? "border shadow-xs" : "border-hairline",
        _ = f[i]
      ;(v[9] !== C || v[10] !== _.icon
        ? ((u = (0, l.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            C,
            _.icon,
          )),
          (v[9] = C),
          (v[10] = _.icon),
          (v[11] = u))
        : (u = v[11]),
        v[12] !== n || v[13] !== u
          ? ((m = (0, s.jsx)("span", { className: u, children: n })), (v[12] = n), (v[13] = u), (v[14] = m))
          : (m = v[14]))
      let w = "hidden" === j ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        M = "visible" === j && f[i].caption
      return (
        v[15] !== M || v[16] !== w ? ((h = (0, l.A)(w, M)), (v[15] = M), (v[16] = w), (v[17] = h)) : (h = v[17]),
        v[18] !== t || v[19] !== h
          ? ((p = (0, s.jsx)("span", { className: h, children: t })), (v[18] = t), (v[19] = h), (v[20] = p))
          : (p = v[20]),
        v[21] !== r || v[22] !== p || v[23] !== c || v[24] !== m
          ? ((x = (0, s.jsxs)(g.$, {
              ...r,
              className: c,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [m, p],
            })),
            (v[21] = r),
            (v[22] = p),
            (v[23] = c),
            (v[24] = m),
            (v[25] = x))
          : (x = v[25]),
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
      v = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      b = {
        ...x,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${v} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      j = {
        ...x,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      y = {
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
    function C(e) {
      let t,
        n = (0, a.c)(39),
        {
          tabs: i,
          selectedKey: o,
          onSelect: f,
          onTabClick: p,
          onTabHover: x,
          className: v,
          fill: b,
          scrollable: j,
          tabListRef: C,
          variant: M,
          ariaLabel: A,
          ariaLabelledBy: N,
          activationMode: E,
          animateSelection: S,
          dividerBefore: k,
        } = e,
        I = void 0 !== b && b,
        P = void 0 !== j && j,
        B = void 0 === M ? "segmented" : M,
        R = void 0 === E ? "automatic" : E,
        $ = (0, d.useId)(),
        T = y[B],
        G = "inset" === B || "choice" === B,
        z = (0, m.Zj)(!G && "icon" !== B && "text-secondary" === T.unselectedTextClassName && "1244723012"),
        O = void 0 !== S && S && ("segmentedPill" === B || "segmentedPillMuted" === B),
        D = O ? "text-default font-medium" : T.selectedClassName
      if (
        n[0] !== R ||
        n[1] !== O ||
        n[2] !== A ||
        n[3] !== N ||
        n[4] !== v ||
        n[5] !== k ||
        n[6] !== I ||
        n[7] !== f ||
        n[8] !== p ||
        n[9] !== x ||
        n[10] !== T.closeButtonClassName ||
        n[11] !== T.itemClassName ||
        n[12] !== T.listClassName ||
        n[13] !== T.segmentedEdges ||
        n[14] !== T.selectionIndicator ||
        n[15] !== T.tabButtonClassName ||
        n[16] !== T.textSizeClassName ||
        n[17] !== T.unselectedClassName ||
        n[18] !== T.unselectedTextClassName ||
        n[19] !== P ||
        n[20] !== D ||
        n[21] !== o ||
        n[22] !== $ ||
        n[23] !== C ||
        n[24] !== i ||
        n[25] !== z ||
        n[26] !== G ||
        n[27] !== B
      ) {
        let e,
          a,
          d = (0, l.A)(z ? "text-tertiary" : T.unselectedTextClassName, T.unselectedClassName),
          m = G ? g.$ : "button",
          b = I && "w-full",
          j = P && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(n[29] !== v || n[30] !== T.listClassName || n[31] !== b || n[32] !== j
          ? ((e = (0, l.A)(T.listClassName, b, j, v)),
            (n[29] = v),
            (n[30] = T.listClassName),
            (n[31] = b),
            (n[32] = j),
            (n[33] = e))
          : (e = n[33]),
          n[34] !== R || n[35] !== f || n[36] !== P || n[37] !== i
            ? ((a = (e) => {
                let t
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let n = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  s = n.findIndex((t) => t === e.target)
                if (s < 0 || 0 === n.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let a = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? n.length - 1
                      : (s + (e.key === (a ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + n.length) % n.length),
                  n[t]?.focus(),
                  P && n[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let r = i[t]
                null != r && "automatic" === R && f(r.key, e.timeStamp)
              }),
              (n[34] = R),
              (n[35] = f),
              (n[36] = P),
              (n[37] = i),
              (n[38] = a))
            : (a = n[38]),
          (t = (0, s.jsx)("div", {
            ref: C,
            role: "tablist",
            tabIndex: -1,
            "aria-label": A,
            "aria-labelledby": N,
            className: e,
            onWheel: P ? _ : void 0,
            onKeyDown: a,
            children: i.map((e, t) => {
              let n,
                a,
                g = e.key === o,
                v = g ? D : d,
                b = 0 === t,
                j = t === i.length - 1,
                y = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": g,
                  tabIndex: g ? 0 : -1,
                  onPointerEnter: null == x ? void 0 : () => x(e.key),
                  onClick: (t) => {
                    ;((g && "manual" !== R) || f(e.key, t.timeStamp), p?.(e.key))
                  },
                }
              return (
                "inset" === B
                  ? ((n = g ? "segmentedInsetSelected" : "ghost"), (a = "compact"))
                  : "choice" === B && ((n = g ? "choiceSelected" : "outlineGhost"), (a = "dialogAction")),
                (0, s.jsxs)(
                  "div",
                  {
                    className: (0, l.A)(
                      "relative flex min-w-0 items-center",
                      T.itemClassName,
                      I && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      b || e.key !== k
                        ? null
                        : (0, s.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === B
                        ? (0, s.jsx)(h, { ...y, icon: e.icon, size: "large", children: e.name })
                        : (0, s.jsxs)(m, {
                            ...y,
                            className: (0, l.A)(
                              I && "min-w-0 flex-1 justify-center",
                              O && "relative isolate",
                              !G && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                T.textSizeClassName ?? "text-sm",
                                T.tabButtonClassName,
                                P && "ring-inset",
                                T.segmentedEdges && b && "rounded-l-md",
                                T.segmentedEdges && j && "rounded-r-md",
                                "browse" === B && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", g && "ring-1 ring-border-strong"]
                                  : v,
                              ],
                            ),
                            color: n,
                            radius: "choice" === B ? "full" : void 0,
                            size: a,
                            children: [
                              O && g ? (0, s.jsx)(w, { layoutId: $ }) : null,
                              null != e.icon
                                ? (0, s.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              I ? (0, s.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === T.selectionIndicator && g
                        ? (0, s.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, s.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, l.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              T.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, s.jsx)(c.bF, {
                              "aria-hidden": !1,
                              asset16: r.Q,
                              legacyIcon: u.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      T.segmentedEdges && !j
                        ? (0, s.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (n[0] = R),
          (n[1] = O),
          (n[2] = A),
          (n[3] = N),
          (n[4] = v),
          (n[5] = k),
          (n[6] = I),
          (n[7] = f),
          (n[8] = p),
          (n[9] = x),
          (n[10] = T.closeButtonClassName),
          (n[11] = T.itemClassName),
          (n[12] = T.listClassName),
          (n[13] = T.segmentedEdges),
          (n[14] = T.selectionIndicator),
          (n[15] = T.tabButtonClassName),
          (n[16] = T.textSizeClassName),
          (n[17] = T.unselectedClassName),
          (n[18] = T.unselectedTextClassName),
          (n[19] = P),
          (n[20] = D),
          (n[21] = o),
          (n[22] = $),
          (n[23] = C),
          (n[24] = i),
          (n[25] = z),
          (n[26] = G),
          (n[27] = B),
          (n[28] = t))
      } else t = n[28]
      return t
    }
    function _(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function w(e) {
      let t,
        n,
        r = (0, a.c)(5),
        { layoutId: l } = e,
        d = 0.25 * !(0, i.I)()
      return (
        r[0] !== d ? ((t = { type: "spring", duration: d, bounce: 0 }), (r[0] = d), (r[1] = t)) : (t = r[1]),
        r[2] !== l || r[3] !== t
          ? ((n = (0, s.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: l,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (r[2] = l),
            (r[3] = t),
            (r[4] = n))
          : (n = r[4]),
        n
      )
    }
  },
  UtcH(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      r = n("yX0s"),
      l = n("on57"),
      i = n("zd8w"),
      o = n("Wf1j"),
      d = n("HOLv"),
      c = n("Sm6l")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            u,
            m,
            g,
            f = (0, a.c)(17),
            { ancestors: h, current: p, textSm: x } = e,
            v = (0, o.A)()
          f[0] !== v
            ? ((t = v.formatMessage({ id: "toolbarBreadcrumb.label", defaultMessage: "Breadcrumb" })),
              (f[0] = v),
              (f[1] = t))
            : (t = f[1])
          let b = x ? "text-sm" : "text-base"
          if (
            (f[2] !== b
              ? ((n = (0, l.$)("flex min-w-0 items-center gap-1 text-codex-description", b)), (f[2] = b), (f[3] = n))
              : (n = f[3]),
            f[4] !== h || f[5] !== x)
          ) {
            let e
            ;(f[7] !== x
              ? ((e = (e, t) => {
                  let { id: n, ...a } = e,
                    o =
                      "content" in a
                        ? a.content
                        : (0, s.jsx)("span", { className: "min-w-0 truncate", children: a.label }),
                    u = o
                  if (!("content" in a)) {
                    let { label: e, ...t } = a,
                      n = { className: (0, l.$)("min-w-0", x && "text-sm"), color: "ghost", size: "toolbar" }
                    u =
                      null != t.to
                        ? (0, s.jsx)(c.z, { ...t, ...n, children: o })
                        : (0, s.jsx)(c.$, { ...n, onClick: t.onClick, children: o })
                  }
                  return (0, s.jsxs)(
                    i.Fragment,
                    { children: [t > 0 ? (0, s.jsx)(d.I, { className: "shrink-0", asset: r.q }) : null, u] },
                    n,
                  )
                }),
                (f[7] = x),
                (f[8] = e))
              : (e = f[8]),
              (u = h.map(e)),
              (f[4] = h),
              (f[5] = x),
              (f[6] = u))
          } else u = f[6]
          return (
            f[9] !== h.length || f[10] !== p
              ? ((m =
                  null != p
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          h.length > 0 ? (0, s.jsx)(d.I, { className: "shrink-0", asset: r.q }) : null,
                          (0, s.jsx)("span", {
                            "aria-current": "page",
                            className:
                              "flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default",
                            children: p,
                          }),
                        ],
                      })
                    : null),
                (f[9] = h.length),
                (f[10] = p),
                (f[11] = m))
              : (m = f[11]),
            f[12] !== t || f[13] !== n || f[14] !== u || f[15] !== m
              ? ((g = (0, s.jsxs)("nav", { "aria-label": t, className: n, children: [u, m] })),
                (f[12] = t),
                (f[13] = n),
                (f[14] = u),
                (f[15] = m),
                (f[16] = g))
              : (g = f[16]),
            g
          )
        },
      },
    )
  },
  oiiw(e, t, n) {
    n.d(t, { K: () => S, p: () => k })
    var s = n("qmMi"),
      a = n("DBCl"),
      r = n("SPnB"),
      l = n("xG8A"),
      i = n("SGsN"),
      o = n("eA5w"),
      d = n("nlNF"),
      c = n("V3rO"),
      u = n("Bc5r"),
      m = n("SRbQ"),
      g = n("Eh2x"),
      f = n("NRIv"),
      h = n("Dgwo"),
      p = n("shRG"),
      x = n("fYtp"),
      v = n("GaA7"),
      b = n("HhRW"),
      j = n("IRAs"),
      y = n("j2sz")
    let C = "cloud-environment-onboarding:setup"
    class _ extends Error {}
    function w(e, t) {
      return null != t
        ? e.formatMessage(
            {
              id: "restricted.environmentSetup.onboarding.skillPrompt",
              defaultMessage: "Use {skill} to set up this cloud environment",
            },
            { skill: `$${t}` },
          )
        : e.formatMessage({
            id: "restricted.environmentSetup.onboarding.prompt",
            defaultMessage:
              "First ask me what I want to get running and discuss any needed details with me. Wait for my response before setting up this cloud environment",
          })
    }
    function M(e) {
      return Error(
        e.formatMessage({
          id: "environmentSetup.onboarding.planNotSupported",
          defaultMessage:
            "Your ChatGPT plan does not include Codex Cloud. Switch to an eligible plan to set up a cloud environment",
        }),
      )
    }
    function A(e) {
      return "http" !== e.error || null == e.status || 408 === e.status || e.status >= 500
    }
    function N(e, t, n, s) {
      if (e.get(r.chatGptAuthenticatedAccountId$) !== n || e.get(r.chatGptAuthenticatedUserId$) !== s)
        throw Error(
          t.formatMessage({
            id: "restricted.environmentSetup.onboarding.accountChanged",
            defaultMessage: "Your account changed while creating the environment",
          }),
        )
    }
    var E = n("bMv2")
    function S(e, t, n) {
      let s = e.get(r.chatGptAuthenticatedAccountId$),
        l = e.get(r.chatGptAuthenticatedUserId$)
      if (null != n.legacyEnvironmentId) {
        for (let [t, a] of e.get(E.r))
          if (
            a.accountId === s &&
            a.userId === l &&
            a.inputs.legacyEnvironmentId === n.legacyEnvironmentId &&
            null != e.get(c.Pt, t)
          )
            return t
      }
      let i = (0, a.xa2)(),
        d = { hostId: (0, o.Y)(), prompt: w(t, C), title: (0, y.ZO)(t, n.name), status: "queued" }
      return (
        (0, c.gI)(e, i, d),
        e.set(
          E.r,
          (a) =>
            new Map([
              ...[...a].filter(([t]) => null != e.get(c.Pt, t)),
              [
                i,
                {
                  accountId: s,
                  userId: l,
                  name: n.name ?? (0, y.II)(t),
                  inputs: { ...n, initialPrompt: d.prompt },
                  config: null,
                  conversationId: null,
                  stage: "creating",
                },
              ],
            ]),
        ),
        i
      )
    }
    async function k(e, t, n, S) {
      let k = e.get(E.m, S),
        I = e.get(c.Pt, S)
      if (null == k || null == I || ("queued" !== I.status && "failed" !== I.status)) return
      let P = { ...I, status: "creating", errorMessage: void 0 }
      ;(0, s.Y)(e, () => {
        ;((0, c.gI)(e, S, P),
          e.set(E.r, (e) => new Map(e).set(S, { ...k, stage: null == k.config ? "creating" : "connecting" })))
      })
      let B = () =>
        e.get(c.Pt, S) === P &&
        e.get(r.chatGptAuthenticatedAccountId$) === k.accountId &&
        e.get(r.chatGptAuthenticatedUserId$) === k.userId
      function R() {
        e.set(E.r, (e) => {
          let t = new Map(e)
          return (t.delete(S), t)
        })
      }
      try {
        let l = await (async function (
          e,
          t,
          {
            name: n,
            repositorySelections: l,
            networkPolicy: i,
            modelSettings: d,
            legacyEnvironmentId: c,
            repositoryNamesById: u,
            initialPrompt: E,
            idempotencyKey: S = crypto.randomUUID(),
            existingConfig: k,
            onConfigurationCreated: I,
            onConfigurationReady: P,
            onConnected: B,
            onConversationReady: R,
            onOutcomeUnknown: $,
          },
        ) {
          let T = e.get(r.chatGptAuthenticatedAccountId$),
            G = e.get(r.chatGptAuthenticatedUserId$)
          if (v.appServices?.environmentConfigs == null || null == T || null == G)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.unavailable",
                defaultMessage: "Cloud environment setup is unavailable",
              }),
            )
          let z = null != c && null == k,
            O = v.appServices.environmentConfigs.request(
              null == k
                ? {
                    method: "POST",
                    accountId: T,
                    userId: G,
                    body:
                      null != c
                        ? { legacy_environment_id: c, start_onboarding: !0, private_draft: !0, model: d.model }
                        : {
                            idempotency_key: S,
                            name: n ?? (0, y.II)(t),
                            repositories: l.map(j.D),
                            network_policy: i,
                            share_settings: "private",
                            start_onboarding: !1,
                          },
                  }
                : { method: "GET", accountId: T, userId: G, configId: k.id, draftId: k.privateDraftId },
            ),
            D = z ? await O.catch(() => ({ ok: !1, error: "unavailable" })) : await O
          if (
            z &&
            (D.ok ? D.config.draft?.id == null || null == D.config.environment_id || null == D.config.thread_id : A(D))
          )
            return (N(e, t, T, G), $?.(), { conversationId: null, config: null })
          if (!D.ok) {
            if ((0, g.eN)(D.status, D.message)) throw M(t)
            if (null != c && 400 === D.status && D.message === g.ds)
              throw new _(
                t.formatMessage({
                  id: "environmentSetup.onboarding.repositoryNotAccessible",
                  defaultMessage:
                    "We couldn't access this environment's GitHub repository. Check that it still exists and that your connected GitHub account can open it, then try again.",
                }),
              )
            throw Error(
              t.formatMessage(
                {
                  id: "restricted.environmentSetup.onboarding.createFailed",
                  defaultMessage: "Could not start cloud environment setup ({reason})",
                },
                { reason: null == D.status ? D.error : `HTTP ${D.status}` },
              ),
            )
          }
          if (
            (N(e, t, T, G),
            k?.privateDraftId != null &&
              (D.config.draft?.id !== k.privateDraftId || D.config.environment_id !== k.environment_id))
          )
            throw Error("The setup draft no longer matches its Build")
          let U = {
            ...D.config,
            ...(z && { privateDraftId: D.config.draft?.id }),
            ...(k?.privateDraftId && { privateDraftId: k.privateDraftId, thread_id: k.thread_id }),
            onboarding_skill: D.config.onboarding_skill ?? k?.onboarding_skill,
          }
          I?.(U)
          let V = u ?? Object.fromEntries(l.map(({ repository: e }) => [e.id, e.repository_full_name]))
          if (null == U.thread_id && null == c) {
            let n = { stack: [], error: void 0, hasError: !1 }
            try {
              let s = (0, m.mS)(
                n,
                await v.appServices.environmentConfigs
                  .createDraft({
                    accountId: T,
                    userId: G,
                    configId: U.id,
                    method: "POST",
                    body: { start_thread: !0, model: d.model },
                  })
                  .catch(() => null),
                !1,
              )
              if ((N(e, t, T, G), null == s || (!s.ok && A(s)) || (s.ok && null == s.data.thread_id)))
                return ($?.(), { conversationId: null, config: U })
              if (!s.ok) {
                if ((0, g.eN)(s.status, s.message)) throw M(t)
                throw Error(s.message ?? s.error)
              }
              ;((U = {
                ...U,
                privateDraftId: s.data.draft_id,
                environment_id: s.data.environment_id,
                thread_id: s.data.thread_id,
              }),
                I?.(U))
            } catch (e) {
              ;((n.error = e), (n.hasError = !0))
            } finally {
              ;(0, m.hk)(n)
            }
          }
          let L =
              null != c
                ? (U.draft ?? U).repositories.map(({ repository_id: e, ref: t }) => ({
                    repository_id: e,
                    name: V[e] ?? e,
                    ref: t,
                  }))
                : l.map(({ repository: e }) => ({
                    repository_id: e.id,
                    name: e.repository_full_name,
                    ref: e.default_branch,
                  })),
            F =
              null != U.onboarding_skill
                ? w(t, U.onboarding_skill)
                : (E ?? w(t, null == U.privateDraftId || null != c ? void 0 : C)),
            W = (0, h.V)(e, (0, o.Y)()),
            Y = [
              {
                type: "text",
                text: `${JSON.stringify({ repositories: L })}

${f.Vh}`,
                text_elements: [],
              },
              { type: "text", text: F, text_elements: [] },
            ],
            H = (0, y.ZO)(t, null == n && U.name === (0, y.II)(t) ? null : U.name)
          if (null == U.thread_id || null == U.environment_id)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.missingTask",
                defaultMessage: "The server saved the configuration but did not return a setup chat",
              }),
            )
          let Z = (0, a.JXB)(U.thread_id)
          return (
            N(e, t, T, G),
            (0, x.cx)(e, Z, (0, x.J5)(e, U.environment_id ?? null)),
            null == e.get(b.fm, Z) &&
              (0, s.Y)(e, (e) => {
                ;((0, b.or)(e, Z, { name: U.name, repositories: L.map(({ repository_id: e }) => e) }),
                  (0, b.e2)(e, Z, {
                    accountId: T,
                    userId: G,
                    configId: U.id,
                    ...(U.privateDraftId && { draftId: U.privateDraftId, environmentId: U.environment_id ?? void 0 }),
                    name: U.name,
                    repositoryNamesById: V,
                    generatedThreadTitle: { environmentName: U.name, title: H },
                  }))
              }),
            P?.(Z, F),
            await W.resumeConversation(
              {
                conversationId: Z,
                model: null,
                reasoningEffort: null,
                workspaceRoots: ["/workspace", "/tmp"],
                collaborationMode: null,
                useAppServerPermissionDefault: !0,
              },
              { readResumeInputs: (0, p.jQ)(e, (0, o.Y)()) },
            ),
            N(e, t, T, G),
            B?.(),
            await W.updateThreadSettingsForNextTurn(Z, { model: d.model, effort: d.reasoningEffort }),
            N(e, t, T, G),
            await W.setThreadTitle(Z, H, { onlyIfUntitled: !0, requireAcknowledgement: !0 }),
            N(e, t, T, G),
            R?.(Z),
            await W.startTurn(Z, {
              context: { useAppServerServiceTierDefault: !0 },
              request: { turnTrigger: "environment_onboarding", threadId: Z, input: Y },
            }),
            N(e, t, T, G),
            { conversationId: Z, config: U }
          )
        })(e, t, {
          ...k.inputs,
          idempotencyKey: S,
          existingConfig: k.config,
          onOutcomeUnknown: () => {
            B() && ((P = { ...P, status: "draft-creation-unconfirmed" }), (0, c.gI)(e, S, P))
          },
          onConfigurationCreated: (t) => {
            B() &&
              e.set(E.r, (e) => {
                let n = e.get(S)
                return null == n ? e : new Map(e).set(S, { ...n, config: t })
              })
          },
          onConfigurationReady: (t, n) => {
            B() &&
              (0, s.Y)(e, () => {
                ;((P = { ...P, prompt: n }),
                  (0, c.gI)(e, S, P),
                  e.set(E.r, (e) => {
                    let n = e.get(S)
                    return null == n ? e : new Map(e).set(S, { ...n, conversationId: t, stage: "connecting" })
                  }))
              })
          },
          onConnected: () => {
            B() &&
              e.set(E.r, (e) => {
                let t = e.get(S)
                return null == t ? e : new Map(e).set(S, { ...t, stage: "starting" })
              })
          },
          onConversationReady: (t) => {
            B() &&
              ((0, c.Bb)(e, { clientThreadId: S, conversationId: t, hostId: (0, o.Y)() }),
              R(),
              e.get(d.x2)?.pathname === (0, a._RT)(S) && n((0, u.Ch)((0, a._RT)(t), (0, o.Y)()), { replace: !0 }))
          },
        })
        B() && null != l.conversationId && ((0, c.gI)(e, S, null), R())
      } catch (n) {
        if (e.get(c.Pt, S) !== P) return
        if (
          e.get(r.chatGptAuthenticatedAccountId$) !== k.accountId ||
          e.get(r.chatGptAuthenticatedUserId$) !== k.userId
        ) {
          ;((0, c.gI)(e, S, null), R())
          return
        }
        ;((0, c.gI)(
          e,
          S,
          e.get(E.r).has(S) ? { ...P, status: "failed", errorMessage: n instanceof _ ? n.message : void 0 } : null,
        ),
          e
            .get(i.Id)
            .danger(
              n instanceof _
                ? t.formatMessage({
                    id: "environmentSetup.onboarding.migrationFailed",
                    defaultMessage: "We couldn't finish the migration",
                  })
                : (0, l.WS)(n, t),
              {
                description: n instanceof _ ? n.message : void 0,
                errorAnalytics: { toastId: "createDialog.CloudEnvironmentCreateDialog" },
              },
            ))
      }
    }
  },
  bMv2(e, t, n) {
    var s = n("qmMi"),
      a = n("SPnB"),
      r = n("OWtl"),
      l = n("V3rO")
    let i = (0, s.vP)(r.u, new Map()),
      o = (0, s.i1)(r.u, (e, { get: t }) => {
        if (null == e) return null
        let n = t(i).get(e)
        return null != n &&
          n.accountId === t(a.chatGptAuthenticatedAccountId$) &&
          n.userId === t(a.chatGptAuthenticatedUserId$) &&
          null != t(l.Pt, e)
          ? n
          : null
      })
    n.d(t, {}, { m: o, r: i })
  },
  H09i(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      r = n("okCa"),
      l = n("PkPj")
    n.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            n,
            i,
            o = (0, a.c)(17),
            { children: d, navigation: c, search: u, layout: m } = e,
            g = void 0 === m ? "wrap" : m
          o[0] !== g || o[1] !== u
            ? ((t =
                null == u
                  ? null
                  : (0, s.jsx)(r.s, {
                      ...u,
                      className: "tabs" === g ? "w-full max-w-full @md:w-40 @md:justify-self-end" : "w-40 max-w-full",
                      variant: "toolbar-action",
                    })),
              (o[0] = g),
              (o[1] = u),
              (o[2] = t))
            : (t = o[2])
          let f = t
          if ("tabs" === g) {
            let e, t
            return (
              o[3] !== d || o[4] !== u || o[5] !== f
                ? ((e =
                    null != u || null != d
                      ? (0, s.jsxs)("div", {
                          className: "grid min-w-0 items-center gap-2 @md:grid-cols-[minmax(0,1fr)_auto]",
                          children: [
                            f,
                            (0, s.jsx)("div", {
                              className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
                              children: d,
                            }),
                          ],
                        })
                      : null),
                  (o[3] = d),
                  (o[4] = u),
                  (o[5] = f),
                  (o[6] = e))
                : (e = o[6]),
              o[7] !== c || o[8] !== e
                ? ((t = (0, s.jsx)("div", {
                    className: "@container",
                    children: (0, s.jsxs)("div", {
                      className: "grid items-start gap-4 pb-2 @2xl:grid-cols-[auto_minmax(0,1fr)]",
                      children: [c, e],
                    }),
                  })),
                  (o[7] = c),
                  (o[8] = e),
                  (o[9] = t))
                : (t = o[9]),
              t
            )
          }
          return (
            o[10] !== d || o[11] !== u || o[12] !== f
              ? ((n =
                  null != u || null != d
                    ? (0, s.jsxs)("div", {
                        className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
                        children: [f, d],
                      })
                    : null),
                (o[10] = d),
                (o[11] = u),
                (o[12] = f),
                (o[13] = n))
              : (n = o[13]),
            o[14] !== c || o[15] !== n
              ? ((i = (0, s.jsxs)(l.uC, { inset: !1, wrap: !0, children: [c, n] })),
                (o[14] = c),
                (o[15] = n),
                (o[16] = i))
              : (i = o[16]),
            i
          )
        },
      },
    )
  },
  oFmV(e, t, n) {
    let s = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { S: s })
  },
  AeY0(e, t, n) {
    n.d(t, { CloudEnvironmentsSettingsPage: () => ex })
    var s = n("ABep"),
      a = n("QosV"),
      r = n("RVZl"),
      l = n("uteA"),
      i = n("vjxO"),
      o = n("qmMi"),
      d = n("zd8w"),
      c = n("oyxz"),
      u = n("Wf1j"),
      m = n("Ywss"),
      g = n("fzBE"),
      f = n("Sm6l"),
      h = n("bqtn"),
      p = n("HOLv"),
      x = n("f38C"),
      v = n("SGsN"),
      b = n("UtcH"),
      j = n("OWtl"),
      y = n("jxU8"),
      C = n("odCE"),
      _ = n("QyE3"),
      w = n("ZEx5"),
      M = n("hZax"),
      A = n("Vg34"),
      N = n("Qgfj"),
      E = n("BSnr"),
      S = n("AWNZ")
    function k(e) {
      let t,
        n,
        r,
        l,
        i = (0, a.c)(42),
        { environment: o } = e
      i[0] !== o.setup
        ? ((t = (Array.isArray(o.setup) ? o.setup.join("\n") : o.setup)?.trim()), (i[0] = o.setup), (i[1] = t))
        : (t = i[1])
      let d = !!t
      i[2] !== o.maintenance_setup
        ? ((n = (Array.isArray(o.maintenance_setup) ? o.maintenance_setup.join("\n") : o.maintenance_setup)?.trim()),
          (i[2] = o.maintenance_setup),
          (i[3] = n))
        : (n = i[3])
      let u = !!n
      i[4] !== o.env_vars ? ((r = Object.keys(o.env_vars)), (i[4] = o.env_vars), (i[5] = r)) : (r = i[5])
      let m = r
      if (i[6] !== o || i[7] !== m || i[8] !== u || i[9] !== d) {
        var g
        let e,
          t,
          n,
          a,
          r,
          f,
          h,
          p,
          x,
          v,
          b,
          j,
          y,
          C,
          _,
          M,
          A,
          k =
            (e = Object.keys((g = o).secrets ?? {})).length > 0
              ? e
              : (g.secrets_with_domains ?? []).flatMap(({ name: e }) => (null == e ? [] : [e]))
        i[11] !== o.repo_map
          ? ((t = (e) => o.repo_map?.[e]?.repository_full_name ?? e), (i[11] = o.repo_map), (i[12] = t))
          : (t = i[12])
        let I = o.repos.map(t),
          P = d || u || m.length > 0 || k.length > 0
        i[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(c.A, {
              id: "settings.cloudEnvironments.details.configured",
              defaultMessage: "Configured",
            })),
            (i[13] = n))
          : (n = i[13])
        let B = n
        i[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(c.A, {
              id: "settings.cloudEnvironments.details.repository",
              defaultMessage: "Repository",
            })),
            (i[14] = a))
          : (a = i[14])
        let R =
          I.length > 0
            ? I.join(", ")
            : (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.list.noRepository",
                defaultMessage: "No repository configured",
              })
        ;(i[15] !== R
          ? ((r = (0, s.jsx)(S.$5, { label: a, valueAlignment: "end", children: R })), (i[15] = R), (i[16] = r))
          : (r = i[16]),
          i[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.details.machine", defaultMessage: "Machine" })),
              (i[17] = f))
            : (f = i[17]),
          i[18] !== o.machine.label
            ? ((h = (0, s.jsx)(S.$5, { label: f, valueAlignment: "end", children: o.machine.label })),
              (i[18] = o.machine.label),
              (i[19] = h))
            : (h = i[19]),
          i[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.details.creator",
                defaultMessage: "Created by",
              })),
              (i[20] = p))
            : (p = i[20]))
        let $ = o.creator.name || o.creator.email
        ;(i[21] !== $
          ? ((x = (0, s.jsx)(S.$5, { label: p, valueAlignment: "end", children: $ })), (i[21] = $), (i[22] = x))
          : (x = i[22]),
          i[23] !== o.created_at
            ? ((v =
                null != o.created_at
                  ? (0, s.jsx)(S.$5, {
                      label: (0, s.jsx)(c.A, {
                        id: "settings.cloudEnvironments.details.created",
                        defaultMessage: "Created",
                      }),
                      valueAlignment: "end",
                      children: (0, s.jsx)(N.XU, {
                        day: "numeric",
                        month: "short",
                        value: 1e3 * o.created_at,
                        year: "numeric",
                      }),
                    })
                  : null),
              (i[23] = o.created_at),
              (i[24] = v))
            : (v = i[24]),
          i[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.details.network",
                defaultMessage: "Network access",
              })),
              (i[25] = b))
            : (b = i[25]))
        let T = o.agent_network_access?.mode
        ;(i[26] !== T
          ? ((j = (function (e) {
              switch (e) {
                case "custom":
                  return (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.network.custom", defaultMessage: "Custom" })
                case "on":
                  return (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.network.on", defaultMessage: "On" })
                case "off":
                case void 0:
                  return (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.network.off", defaultMessage: "Off" })
              }
            })(T)),
            (i[26] = T),
            (i[27] = j))
          : (j = i[27]),
          i[28] !== j
            ? ((y = (0, s.jsx)(S.$5, { label: b, valueAlignment: "end", children: j })), (i[28] = j), (i[29] = y))
            : (y = i[29]),
          i[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.details.sharing", defaultMessage: "Sharing" })),
              (i[30] = C))
            : (C = i[30]),
          i[31] !== o.share_settings
            ? ((_ = (function (e) {
                switch (e) {
                  case "private":
                    return (0, s.jsx)(c.A, {
                      id: "settings.cloudEnvironments.sharing.private",
                      defaultMessage: "Private",
                    })
                  case "public":
                    return (0, s.jsx)(c.A, {
                      id: "settings.cloudEnvironments.sharing.public",
                      defaultMessage: "Public",
                    })
                  case "workspace":
                    return (0, s.jsx)(c.A, {
                      id: "settings.cloudEnvironments.sharing.workspace",
                      defaultMessage: "Workspace",
                    })
                }
              })(o.share_settings)),
              (i[31] = o.share_settings),
              (i[32] = _))
            : (_ = i[32]),
          i[33] !== _
            ? ((M = (0, s.jsx)(S.$5, { label: C, valueAlignment: "end", children: _ })), (i[33] = _), (i[34] = M))
            : (M = i[34]),
          i[35] !== h || i[36] !== x || i[37] !== v || i[38] !== y || i[39] !== M || i[40] !== r
            ? ((A = (0, s.jsx)(E.X, {
                children: (0, s.jsx)(E.X.Content, { children: (0, s.jsxs)(w.t, { children: [r, h, x, v, y, M] }) }),
              })),
              (i[35] = h),
              (i[36] = x),
              (i[37] = v),
              (i[38] = y),
              (i[39] = M),
              (i[40] = r),
              (i[41] = A))
            : (A = i[41]),
          (l = (0, s.jsxs)(s.Fragment, {
            children: [
              A,
              P
                ? (0, s.jsxs)(E.X, {
                    children: [
                      (0, s.jsx)(E.X.Header, {
                        title: (0, s.jsx)(c.A, {
                          id: "settings.cloudEnvironments.details.configuration",
                          defaultMessage: "Configuration",
                        }),
                      }),
                      (0, s.jsx)(E.X.Content, {
                        children: (0, s.jsxs)(w.t, {
                          children: [
                            d
                              ? (0, s.jsx)(S.$5, {
                                  label: (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.details.setup",
                                    defaultMessage: "Setup script",
                                  }),
                                  valueAlignment: "end",
                                  children: B,
                                })
                              : null,
                            u
                              ? (0, s.jsx)(S.$5, {
                                  label: (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.details.maintenance",
                                    defaultMessage: "Maintenance script",
                                  }),
                                  valueAlignment: "end",
                                  children: B,
                                })
                              : null,
                            m.length > 0
                              ? (0, s.jsx)(S.$5, {
                                  label: (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.details.environmentVariables",
                                    defaultMessage: "Environment variables",
                                  }),
                                  valueAlignment: "end",
                                  children: m.join(", "),
                                })
                              : null,
                            k.length > 0
                              ? (0, s.jsx)(S.$5, {
                                  label: (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.details.secrets",
                                    defaultMessage: "Secrets",
                                  }),
                                  valueAlignment: "end",
                                  children: k.join(", "),
                                })
                              : null,
                          ],
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          })),
          (i[6] = o),
          (i[7] = m),
          (i[8] = u),
          (i[9] = d),
          (i[10] = l))
      } else l = i[10]
      return l
    }
    var I = n("JNtf"),
      P = n("mUDD")
    function B(e) {
      let t,
        n,
        r,
        l,
        i,
        o,
        d,
        u,
        m,
        g,
        h,
        p,
        x,
        v = (0, a.c)(32),
        { environmentName: b, isPending: j, open: y, onConfirm: C, onOpenChange: _ } = e
      v[0] !== j || v[1] !== _
        ? ((t = (e) => {
            j || _(e)
          }),
          (v[0] = j),
          (v[1] = _),
          (v[2] = t))
        : (t = v[2])
      let w = !j
      return (
        v[3] !== j || v[4] !== C
          ? ((n = (e) => {
              ;(e.preventDefault(),
                j || (e.currentTarget.closest('[role="dialog"]')?.focus({ preventScroll: !0 }), C()))
            }),
            (v[3] = j),
            (v[4] = C),
            (v[5] = n))
          : (n = v[5]),
        v[6] !== b
          ? ((r = (0, s.jsx)(I.L3, {
              children: (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.delete.title",
                defaultMessage: "Delete {environmentName}?",
                values: { environmentName: b },
              }),
            })),
            (v[6] = b),
            (v[7] = r))
          : (r = v[7]),
        v[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(I.rr, {
              className: "contents",
              children: (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.delete.description",
                defaultMessage:
                  "Existing chats will remain, but you will not be able to create follow-ups with this environment",
              }),
            })),
            (v[8] = l))
          : (l = v[8]),
        v[9] !== r ? ((i = (0, s.jsx)(P.c7, { title: r, subtitle: l })), (v[9] = r), (v[10] = i)) : (i = v[10]),
        v[11] !== _ ? ((o = () => _(!1)), (v[11] = _), (v[12] = o)) : (o = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.dialog.cancel", defaultMessage: "Cancel" })),
            (v[13] = d))
          : (d = v[13]),
        v[14] !== j || v[15] !== o
          ? ((u = (0, s.jsx)(f.$, { color: "secondary", disabled: j, onClick: o, type: "button", children: d })),
            (v[14] = j),
            (v[15] = o),
            (v[16] = u))
          : (u = v[16]),
        v[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(c.A, {
              id: "settings.cloudEnvironments.delete.confirm",
              defaultMessage: "Delete environment",
            })),
            (v[17] = m))
          : (m = v[17]),
        v[18] !== j
          ? ((g = (0, s.jsx)(f.$, { color: "danger", loading: j, type: "submit", children: m })),
            (v[18] = j),
            (v[19] = g))
          : (g = v[19]),
        v[20] !== g || v[21] !== u
          ? ((h = (0, s.jsxs)(P.Es, { children: [u, g] })), (v[20] = g), (v[21] = u), (v[22] = h))
          : (h = v[22]),
        v[23] !== h || v[24] !== n || v[25] !== i
          ? ((p = (0, s.jsxs)(P.R4, { as: "form", onSubmit: n, children: [i, h] })),
            (v[23] = h),
            (v[24] = n),
            (v[25] = i),
            (v[26] = p))
          : (p = v[26]),
        v[27] !== y || v[28] !== t || v[29] !== p || v[30] !== w
          ? ((x = (0, s.jsx)(I.lG, { open: y, onOpenChange: t, showDialogClose: w, children: p })),
            (v[27] = y),
            (v[28] = t),
            (v[29] = p),
            (v[30] = w),
            (v[31] = x))
          : (x = v[31]),
        x
      )
    }
    function R(e) {
      let t,
        n,
        r,
        l,
        i,
        o,
        d,
        u,
        m,
        g,
        h,
        p,
        x = (0, a.c)(28),
        { isPending: v, open: b, onConfirm: j, onOpenChange: y } = e
      x[0] !== v || x[1] !== y
        ? ((t = (e) => {
            v || y(e)
          }),
          (x[0] = v),
          (x[1] = y),
          (x[2] = t))
        : (t = x[2])
      let C = !v
      return (
        x[3] !== v || x[4] !== j
          ? ((n = (e) => {
              ;(e.preventDefault(),
                v || (e.currentTarget.closest('[role="dialog"]')?.focus({ preventScroll: !0 }), j()))
            }),
            (x[3] = v),
            (x[4] = j),
            (x[5] = n))
          : (n = x[5]),
        x[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(I.L3, {
              children: (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.resetCache.title",
                defaultMessage: "Reset cached containers?",
              }),
            })),
            (x[6] = r))
          : (r = x[6]),
        x[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(P.c7, {
              title: r,
              subtitle: (0, s.jsx)(I.rr, {
                className: "contents",
                children: (0, s.jsx)(c.A, {
                  id: "settings.cloudEnvironments.resetCache.description",
                  defaultMessage: "This invalidates all cached containers for this environment and all users",
                }),
              }),
            })),
            (x[7] = l))
          : (l = x[7]),
        x[8] !== y ? ((i = () => y(!1)), (x[8] = y), (x[9] = i)) : (i = x[9]),
        x[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.dialog.cancel", defaultMessage: "Cancel" })),
            (x[10] = o))
          : (o = x[10]),
        x[11] !== v || x[12] !== i
          ? ((d = (0, s.jsx)(f.$, { color: "secondary", disabled: v, onClick: i, type: "button", children: o })),
            (x[11] = v),
            (x[12] = i),
            (x[13] = d))
          : (d = x[13]),
        x[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)(c.A, {
              id: "settings.cloudEnvironments.resetCache.confirm",
              defaultMessage: "Reset cache",
            })),
            (x[14] = u))
          : (u = x[14]),
        x[15] !== v
          ? ((m = (0, s.jsx)(f.$, { color: "primary", loading: v, type: "submit", children: u })),
            (x[15] = v),
            (x[16] = m))
          : (m = x[16]),
        x[17] !== m || x[18] !== d
          ? ((g = (0, s.jsxs)(P.Es, { children: [d, m] })), (x[17] = m), (x[18] = d), (x[19] = g))
          : (g = x[19]),
        x[20] !== g || x[21] !== n
          ? ((h = (0, s.jsxs)(P.R4, { as: "form", onSubmit: n, children: [l, g] })),
            (x[20] = g),
            (x[21] = n),
            (x[22] = h))
          : (h = x[22]),
        x[23] !== b || x[24] !== t || x[25] !== h || x[26] !== C
          ? ((p = (0, s.jsx)(I.lG, { open: b, onOpenChange: t, showDialogClose: C, children: h })),
            (x[23] = b),
            (x[24] = t),
            (x[25] = h),
            (x[26] = C),
            (x[27] = p))
          : (p = x[27]),
        p
      )
    }
    var $ = n("VJkC"),
      T = n("ozCc"),
      G = n("uris"),
      z = n("zQm0"),
      O = n("j9xU"),
      D = n("wZQ4"),
      U = n("evwP"),
      V = n("okCa"),
      L = n("O1Cs"),
      F = n("pO0d"),
      W = n("GEsy"),
      Y = n("v7qY"),
      H = n("SPnB"),
      Z = n("eA5w"),
      Q = n("oiiw"),
      q = n("o8WW"),
      X = n("GaA7"),
      K = n("OMIV"),
      J = n("Bc5r"),
      ee = n("oEfT")
    function et(e) {
      let t,
        n,
        r,
        l = (0, a.c)(14),
        { environment: i } = e,
        d = (0, o.gh)(j.u),
        g = (0, u.A)(),
        h = (0, m.Zp)(),
        p = (0, J.M0)(),
        { modelSettings: x } = (0, q.aU)(),
        v = (0, o.Ul)(H.chatGptAuthenticatedAccountId$),
        b = (0, o.Ul)(H.chatGptAuthenticatedUserId$)
      if (!(0, o._U)(K.JW, "375130565") || X.appServices?.environmentConfigs == null || !(0, ee._C)(i)) return null
      let y = x.isLoading || null == v || null == b
      return (
        l[0] !== i.id ||
        l[1] !== i.label ||
        l[2] !== i.repo_map ||
        l[3] !== i.repos ||
        l[4] !== g ||
        l[5] !== x ||
        l[6] !== h ||
        l[7] !== p ||
        l[8] !== d
          ? ((t = () => {
              let e = (0, Q.K)(d, g, {
                name: i.label,
                legacyEnvironmentId: i.id,
                repositoryNamesById: Object.fromEntries(
                  i.repos.map((e) => [e, i.repo_map?.[e]?.repository_full_name ?? e]),
                ),
                modelSettings: x,
              })
              ;((0, Y.flushSync)(() => {
                p(e, (0, Z.Y)())
              }),
                (0, Q.p)(d, g, h, e))
            }),
            (l[0] = i.id),
            (l[1] = i.label),
            (l[2] = i.repo_map),
            (l[3] = i.repos),
            (l[4] = g),
            (l[5] = x),
            (l[6] = h),
            (l[7] = p),
            (l[8] = d),
            (l[9] = t))
          : (t = l[9]),
        l[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.migrate", defaultMessage: "Migrate" })),
            (l[10] = n))
          : (n = l[10]),
        l[11] !== y || l[12] !== t
          ? ((r = (0, s.jsx)(f.$, { color: "secondary", disabled: y, size: "compact", onClick: t, children: n })),
            (l[11] = y),
            (l[12] = t),
            (l[13] = r))
          : (r = l[13]),
        r
      )
    }
    var en = n("S5Ho"),
      es = n("MM0V"),
      ea = n("ZtSy"),
      er = n("bVeK"),
      el = n("BrP7"),
      ei = n("H09i")
    function eo(e) {
      let t,
        n,
        r,
        l,
        i,
        o,
        d,
        g = (0, a.c)(15),
        { selectedTab: f, search: h, children: p } = e,
        x = (0, u.A)(),
        v = (0, m.Zp)()
      return (
        g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, s.jsx)(ed, {})), (g[0] = t)) : (t = g[0]),
        g[1] !== x
          ? ((n = x.formatMessage({
              id: "settings.legacyCodexCloud.tabs",
              defaultMessage: "Legacy Codex Cloud settings",
            })),
            (g[1] = x),
            (g[2] = n))
          : (n = g[2]),
        g[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = {
              key: "environments",
              name: (0, s.jsx)(c.A, { id: "settings.legacyCodexCloud.environments", defaultMessage: "Environments" }),
            }),
            (g[3] = r))
          : (r = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = [
              r,
              {
                key: "preferences",
                name: (0, s.jsx)(c.A, { id: "settings.legacyCodexCloud.preferences", defaultMessage: "Preferences" }),
              },
            ]),
            (g[4] = l))
          : (l = g[4]),
        g[5] !== v
          ? ((i = (e) =>
              void v(
                "environments" === e ? "/settings/cloud-environments" : "/settings/cloud-environments?tab=preferences",
              )),
            (g[5] = v),
            (g[6] = i))
          : (i = g[6]),
        g[7] !== f || g[8] !== n || g[9] !== i
          ? ((o = (0, s.jsx)(el.t, { ariaLabel: n, selectedKey: f, tabs: l, variant: "toolbar", onSelect: i })),
            (g[7] = f),
            (g[8] = n),
            (g[9] = i),
            (g[10] = o))
          : (o = g[10]),
        g[11] !== p || g[12] !== h || g[13] !== o
          ? ((d = (0, s.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [t, (0, s.jsx)(ei.k, { search: h, navigation: o, children: p })],
            })),
            (g[11] = p),
            (g[12] = h),
            (g[13] = o),
            (g[14] = d))
          : (d = g[14]),
        d
      )
    }
    function ed() {
      let e,
        t,
        n,
        r,
        l,
        i = (0, a.c)(5)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(er.zOs, {})),
            (t = (0, s.jsx)(c.A, {
              id: "settings.legacyCodexCloud.noticeTitle",
              defaultMessage: "A new Codex Cloud experience is here",
            })),
            (i[0] = e),
            (i[1] = t))
          : ((e = i[0]), (t = i[1])),
        i[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)("p", {
              children: (0, s.jsx)(c.A, {
                id: "settings.legacyCodexCloud.migrationNotice",
                defaultMessage:
                  "Legacy Cloud environments can be migrated to the new Cloud environments using the migration button.",
              }),
            })),
            (r = (0, s.jsx)("p", {
              children: (0, s.jsx)(c.A, {
                id: "settings.legacyCodexCloud.legacyAvailability",
                defaultMessage:
                  "You can continue to create and manage legacy environments for Code Review and integrations such as Linear and GitHub. Your workspace's existing cloud access settings apply to both legacy and new Cloud Environments.",
              }),
            })),
            (i[2] = n),
            (i[3] = r))
          : ((n = i[2]), (r = i[3])),
        i[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(es.l, {
              variant: "settings",
              layout: "verticalIcon",
              type: "caution",
              icon: e,
              title: t,
              content: (0, s.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  n,
                  r,
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(ea.G, {
                      appearance: "accent",
                      className: "cursor-interaction hover:underline",
                      href: "https://learn.chatgpt.com/docs/environments/cloud-environment",
                      initiator: "external_link",
                      children: (0, s.jsx)(c.A, {
                        id: "settings.legacyCodexCloud.learnAboutCloud",
                        defaultMessage: "Learn about the new Cloud Environment experience",
                      }),
                    }),
                  }),
                ],
              }),
            })),
            (i[4] = l))
          : (l = i[4]),
        l
      )
    }
    function ec(e) {
      let t,
        n,
        r,
        l,
        i,
        o,
        m,
        g,
        h,
        x,
        v,
        b = (0, a.c)(53),
        { onCreateEnvironment: j, onEditEnvironment: A, onSelectEnvironment: N } = e,
        E = (0, u.A)(),
        k = (0, M.Zj)("375130565"),
        [I, P] = (0, d.useState)("")
      b[0] !== I ? ((t = I.trim()), (b[0] = I), (b[1] = t)) : (t = b[1])
      let B = (0, W.o)(t, 200)
      b[2] !== B ? ((n = (0, en.GH)(B)), (b[2] = B), (b[3] = n)) : (n = b[3])
      let {
        data: R,
        fetchNextPage: $,
        hasNextPage: z,
        isFetchNextPageError: O,
        isFetchingNextPage: Y,
        isPending: H,
        refetch: Z,
      } = (0, G.q)(n)
      if (
        b[4] !== B ||
        b[5] !== R ||
        b[6] !== z ||
        b[7] !== E ||
        b[8] !== H ||
        b[9] !== j ||
        b[10] !== A ||
        b[11] !== N ||
        b[12] !== Z ||
        b[13] !== I ||
        b[14] !== k
      ) {
        let e,
          t,
          n,
          a = R?.pages.flatMap(eu) ?? [],
          d = a.sort(ee.bV),
          u =
            a.length > 0 || "" !== I
              ? {
                  id: "cloud-environments-search",
                  label: E.formatMessage({
                    id: "settings.cloudEnvironments.search.label",
                    defaultMessage: "Search cloud environments",
                  }),
                  maxLength: 128,
                  onSearchQueryChange: P,
                  placeholder: k
                    ? E.formatMessage({
                        id: "settings.cloudEnvironments.search.toolbarPlaceholder",
                        defaultMessage: "Search",
                      })
                    : E.formatMessage({
                        id: "settings.cloudEnvironments.search.placeholder",
                        defaultMessage: "Search environments",
                      }),
                  searchQuery: I,
                }
              : null,
          h = k ? "toolbar" : void 0
        ;(b[21] !== k
          ? ((e = k ? (0, s.jsx)(p.I, { "aria-hidden": !1, asset: T.f }) : null), (b[21] = k), (b[22] = e))
          : (e = b[22]),
          b[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(F.Ct, { title: L.Sd.createLegacy.title })), (b[23] = t))
            : (t = b[23]),
          b[24] !== j || b[25] !== h || b[26] !== e
            ? ((n = (0, s.jsx)(F.ek, {
                entry: L.Sd.createLegacy,
                children: (0, s.jsxs)(f.$, { color: "primary", onClick: j, size: h, children: [e, t] }),
              })),
              (b[24] = j),
              (b[25] = h),
              (b[26] = e),
              (b[27] = n))
            : (n = b[27]))
        let x = n
        ;((r = y.P),
          b[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, s.jsx)(c.A, {
                id: "settings.overview.cloud-environments",
                defaultMessage: "Manage the environments where your cloud tasks run",
              })),
              (b[28] = l))
            : (l = b[28]),
          (i = k ? void 0 : x),
          b[29] !== x || b[30] !== u || b[31] !== k
            ? ((o = k
                ? (0, s.jsx)(eo, { selectedTab: "environments", search: u, children: x })
                : u && (0, s.jsx)(V.s, { ...u })),
              (b[29] = x),
              (b[30] = u),
              (b[31] = k),
              (b[32] = o))
            : (o = b[32]),
          b[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, s.jsx)(_.s, { slug: "cloud-environments" })), (b[33] = m))
            : (m = b[33]),
          (g = H
            ? (0, s.jsx)(C.j, {
                children:
                  "" === I
                    ? (0, s.jsx)(c.A, {
                        id: "settings.cloudEnvironments.list.loading",
                        defaultMessage: "Loading cloud environments\u2026",
                      })
                    : (0, s.jsx)(c.A, {
                        id: "settings.cloudEnvironments.list.searching",
                        defaultMessage: "Searching cloud environments\u2026",
                      }),
              })
            : null == R
              ? (0, s.jsx)(w.t, {
                  children: (0, s.jsxs)("div", {
                    className: "flex items-center justify-between gap-3 p-3",
                    children: [
                      (0, s.jsx)(c.A, {
                        id: "settings.cloudEnvironments.list.error",
                        defaultMessage: "Unable to load cloud environments",
                      }),
                      (0, s.jsx)(f.$, {
                        color: "secondary",
                        onClick: () => void Z(),
                        size: "toolbar",
                        children: (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.retry", defaultMessage: "Retry" }),
                      }),
                    ],
                  }),
                })
              : d.length > 0 || !z
                ? (0, s.jsx)(w.t, {
                    children:
                      0 === d.length
                        ? (0, s.jsx)(U.W, {
                            layout: "settings-row",
                            children:
                              "" === B
                                ? (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.list.empty",
                                    defaultMessage: "No cloud environments yet",
                                  })
                                : (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.list.noResults",
                                    defaultMessage: "No matching cloud environments",
                                  }),
                          })
                        : d.map((e) =>
                            (0, s.jsx)(em, { environment: e, onEdit: () => A(e.id), onSelect: () => N(e.id) }, e.id),
                          ),
                  })
                : null),
          (b[4] = B),
          (b[5] = R),
          (b[6] = z),
          (b[7] = E),
          (b[8] = H),
          (b[9] = j),
          (b[10] = A),
          (b[11] = N),
          (b[12] = Z),
          (b[13] = I),
          (b[14] = k),
          (b[15] = r),
          (b[16] = l),
          (b[17] = i),
          (b[18] = o),
          (b[19] = m),
          (b[20] = g))
      } else ((r = b[15]), (l = b[16]), (i = b[17]), (o = b[18]), (m = b[19]), (g = b[20]))
      return (
        b[34] !== R || b[35] !== $ || b[36] !== z || b[37] !== O || b[38] !== Y
          ? ((h =
              null != R
                ? (0, s.jsx)(D.D, { hasNextPage: z && !O, isFetchingNextPage: Y, onLoadNextPage: () => void $() })
                : null),
            (b[34] = R),
            (b[35] = $),
            (b[36] = z),
            (b[37] = O),
            (b[38] = Y),
            (b[39] = h))
          : (h = b[39]),
        b[40] !== R || b[41] !== $ || b[42] !== O
          ? ((x =
              null != R && O
                ? (0, s.jsx)(w.t, {
                    children: (0, s.jsx)(S.ic, {
                      control: (0, s.jsx)(f.$, {
                        color: "secondary",
                        onClick: () => void $(),
                        size: "toolbar",
                        children: (0, s.jsx)(c.A, {
                          id: "settings.cloudEnvironments.pagination.retryButton",
                          defaultMessage: "Retry",
                        }),
                      }),
                      label: (0, s.jsx)(c.A, {
                        id: "settings.cloudEnvironments.pagination.error",
                        defaultMessage: "Unable to load more cloud environments",
                      }),
                    }),
                  })
                : null),
            (b[40] = R),
            (b[41] = $),
            (b[42] = O),
            (b[43] = x))
          : (x = b[43]),
        b[44] !== r ||
        b[45] !== l ||
        b[46] !== i ||
        b[47] !== o ||
        b[48] !== m ||
        b[49] !== g ||
        b[50] !== h ||
        b[51] !== x
          ? ((v = (0, s.jsxs)(r, { overview: l, action: i, stickyControls: o, title: m, children: [g, h, x] })),
            (b[44] = r),
            (b[45] = l),
            (b[46] = i),
            (b[47] = o),
            (b[48] = m),
            (b[49] = g),
            (b[50] = h),
            (b[51] = x),
            (b[52] = v))
          : (v = b[52]),
        v
      )
    }
    function eu(e) {
      return e.items
    }
    function em(e) {
      let t,
        n,
        r,
        i,
        d,
        m,
        g,
        f = (0, a.c)(25),
        { environment: p, onEdit: v, onSelect: b } = e,
        j = (0, u.A)(),
        y = p.permissions?.can_write === !0,
        C = (0, o.Ul)(O.Hn)
      f[0] !== p ? ((t = (0, s.jsx)(et, { environment: p })), (f[0] = p), (f[1] = t)) : (t = f[1])
      let _ = t
      return (
        f[2] !== y || f[3] !== C || f[4] !== _
          ? ((n = y && (C ? _ : (0, s.jsx)(z.m, { name: "codex.browser", children: _ }))),
            (f[2] = y),
            (f[3] = C),
            (f[4] = _),
            (f[5] = n))
          : (n = f[5]),
        f[6] !== y || f[7] !== j || f[8] !== v
          ? ((r = y
              ? (0, s.jsx)("div", {
                  className:
                    "invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
                  children: (0, s.jsx)(h.Ab, {
                    align: "end",
                    contentWidth: "menu",
                    triggerButton: (0, s.jsx)(x.p, {
                      label: j.formatMessage({
                        id: "settings.cloudEnvironments.list.actions",
                        defaultMessage: "Environment actions",
                      }),
                      size: "xs",
                    }),
                    children: (0, s.jsx)(h.ms.Item, {
                      leftIconAsset: l.h,
                      onSelect: v,
                      children: (0, s.jsx)(c.A, {
                        id: "settings.cloudEnvironments.list.edit",
                        defaultMessage: "Edit environment",
                      }),
                    }),
                  }),
                })
              : null),
            (f[6] = y),
            (f[7] = j),
            (f[8] = v),
            (f[9] = r))
          : (r = f[9]),
        f[10] !== n || f[11] !== r
          ? ((i = (0, s.jsxs)(s.Fragment, { children: [n, r] })), (f[10] = n), (f[11] = r), (f[12] = i))
          : (i = f[12]),
        f[13] !== p.label || f[14] !== j
          ? ((d = j.formatMessage(
              { id: "settings.cloudEnvironments.list.open", defaultMessage: "Open {environmentName}" },
              { environmentName: p.label },
            )),
            (f[13] = p.label),
            (f[14] = j),
            (f[15] = d))
          : (d = f[15]),
        f[16] !== p.repo_map || f[17] !== p.repos
          ? ((m =
              p.repos.length > 0
                ? p.repos.map((e) => p.repo_map?.[e]?.repository_full_name ?? e).join(", ")
                : (0, s.jsx)(c.A, {
                    id: "settings.cloudEnvironments.list.noRepository",
                    defaultMessage: "No repository configured",
                  })),
            (f[16] = p.repo_map),
            (f[17] = p.repos),
            (f[18] = m))
          : (m = f[18]),
        f[19] !== p.label || f[20] !== b || f[21] !== i || f[22] !== d || f[23] !== m
          ? ((g = (0, s.jsx)(S.kG, { actions: i, ariaLabel: d, description: m, label: p.label, onClick: b })),
            (f[19] = p.label),
            (f[20] = b),
            (f[21] = i),
            (f[22] = d),
            (f[23] = m),
            (f[24] = g))
          : (g = f[24]),
        g
      )
    }
    let eg = "/settings/cloud-environments",
      ef = (0, s.jsx)(c.A, {
        id: "settings.cloudEnvironments.create.title",
        defaultMessage: "Create cloud environment",
      }),
      eh = (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.details.title", defaultMessage: "Cloud environment" }),
      ep = (0, s.jsx)(c.A, { id: "settings.cloudEnvironments.edit.title", defaultMessage: "Edit cloud environment" })
    function ex() {
      let e,
        t,
        n,
        r = (0, a.c)(36),
        l = (0, m.zy)(),
        i = (0, m.Zp)(),
        o = (0, M.Zj)("375130565")
      r[0] !== i
        ? ((e = (e) => {
            i(e)
          }),
          (r[0] = i),
          (r[1] = e))
        : (e = r[1])
      let d = e
      r[2] !== l.pathname
        ? ((t = l.pathname.slice(eg.length).split("/").filter(ev)), (r[2] = l.pathname), (r[3] = t))
        : (t = r[3])
      let u = t,
        g = 1 === u.length && "new" === u[0],
        f = u.length > 0 && "new" !== u[0] ? u[0] : null,
        h = null != f && 2 === u.length && "edit" === u[1],
        p = null != f && 1 === u.length
      if (0 === u.length) {
        let e
        if (o && "preferences" === new URLSearchParams(l.search).get("tab")) {
          let e
          return (
            r[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(y.P, {
                  overview: (0, s.jsx)(c.A, {
                    id: "settings.overview.cloud-environments",
                    defaultMessage: "Manage the environments where your cloud tasks run",
                  }),
                  stickyControls: (0, s.jsx)(eo, { selectedTab: "preferences" }),
                  title: (0, s.jsx)(_.s, { slug: "cloud-environments" }),
                  children: (0, s.jsx)(A.P, {}),
                })),
                (r[4] = e))
              : (e = r[4]),
            e
          )
        }
        return (
          r[5] !== d
            ? ((e = (0, s.jsx)(ec, {
                onCreateEnvironment: () => d(`${eg}/new`),
                onEditEnvironment: (e) => d(`${eg}/${e}/edit`),
                onSelectEnvironment: (e) => d(`${eg}/${e}`),
              })),
              (r[5] = d),
              (r[6] = e))
            : (e = r[6]),
          e
        )
      }
      if (g) {
        let e, t, n, a
        return (
          r[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.create.help",
                defaultMessage: "Choose a repository and set up the tools your tasks will use",
              })),
              (r[7] = e))
            : (e = r[7]),
          r[8] !== d
            ? ((t = (0, s.jsx)(ey, { current: ef, onRootClick: () => d(eg) })), (r[8] = d), (r[9] = t))
            : (t = r[9]),
          r[10] !== d
            ? ((n = (0, s.jsx)($.c, { environment: null, onCancel: () => d(eg), onSaved: (e) => d(`${eg}/${e}`) })),
              (r[10] = d),
              (r[11] = n))
            : (n = r[11]),
          r[12] !== t || r[13] !== n
            ? ((a = (0, s.jsx)(y.P, { overview: e, backSlot: t, title: ef, children: n })),
              (r[12] = t),
              (r[13] = n),
              (r[14] = a))
            : (a = r[14]),
          a
        )
      }
      if (null != f && h) {
        let e, t, n
        return (
          r[15] !== f || r[16] !== d
            ? ((e = () => d(`${eg}/${f}`)), (r[15] = f), (r[16] = d), (r[17] = e))
            : (e = r[17]),
          r[18] !== d ? ((t = () => d(eg)), (r[18] = d), (r[19] = t)) : (t = r[19]),
          r[20] !== f || r[21] !== e || r[22] !== t
            ? ((n = (0, s.jsx)(ej, { environmentId: f, onBack: e, onRootClick: t })),
              (r[20] = f),
              (r[21] = e),
              (r[22] = t),
              (r[23] = n))
            : (n = r[23]),
          n
        )
      }
      if (null != f && p) {
        let e, t, n, a
        return (
          r[24] !== d
            ? ((e = () => d(eg)), (t = () => d(eg)), (r[24] = d), (r[25] = e), (r[26] = t))
            : ((e = r[25]), (t = r[26])),
          r[27] !== f || r[28] !== d
            ? ((n = () => d(`${eg}/${f}/edit`)), (r[27] = f), (r[28] = d), (r[29] = n))
            : (n = r[29]),
          r[30] !== f || r[31] !== e || r[32] !== t || r[33] !== n
            ? ((a = (0, s.jsx)(eb, { environmentId: f, onBack: e, onDeleted: t, onEdit: n })),
              (r[30] = f),
              (r[31] = e),
              (r[32] = t),
              (r[33] = n),
              (r[34] = a))
            : (a = r[34]),
          a
        )
      }
      return (
        r[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(m.C5, { to: eg, replace: !0 })), (r[35] = n))
          : (n = r[35]),
        n
      )
    }
    function ev(e) {
      return "" !== e
    }
    function eb(e) {
      let t,
        n,
        m,
        g,
        b,
        _,
        M,
        A,
        N,
        E,
        S,
        I,
        P = (0, a.c)(52),
        { environmentId: $, onBack: T, onDeleted: G, onEdit: z } = e,
        O = (0, o.gh)(j.u),
        D = (0, u.A)(),
        U = (0, o._U)(en.DK, $),
        V = (0, o.Ul)(en.HZ),
        L = (0, o.Ul)(en.tw),
        [F, W] = (0, d.useState)(null)
      if (U.isPending || U.isError) {
        let e, t, n
        return (
          P[0] !== T ? ((e = (0, s.jsx)(ey, { current: eh, onRootClick: T })), (P[0] = T), (P[1] = e)) : (e = P[1]),
          P[2] !== U
            ? ((t = U.isPending
                ? (0, s.jsx)(C.j, {
                    children: (0, s.jsx)(c.A, {
                      id: "settings.cloudEnvironments.details.loading",
                      defaultMessage: "Loading environment\u2026",
                    }),
                  })
                : (0, s.jsx)(w.t, {
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center justify-between gap-3 p-3 text-sm text-secondary",
                      children: [
                        (0, s.jsx)(c.A, {
                          id: "settings.cloudEnvironments.details.error",
                          defaultMessage: "Unable to load this cloud environment",
                        }),
                        (0, s.jsx)(f.$, {
                          color: "secondary",
                          onClick: () => void U.refetch(),
                          size: "toolbar",
                          children: (0, s.jsx)(c.A, {
                            id: "settings.cloudEnvironments.retry",
                            defaultMessage: "Retry",
                          }),
                        }),
                      ],
                    }),
                  })),
              (P[2] = U),
              (P[3] = t))
            : (t = P[3]),
          P[4] !== e || P[5] !== t
            ? ((n = (0, s.jsx)(y.P, { backSlot: e, title: eh, children: t })), (P[4] = e), (P[5] = t), (P[6] = n))
            : (n = P[6]),
          n
        )
      }
      let Y = U.data,
        H = Y.permissions?.can_write === !0,
        Z = Y.permissions?.can_delete === !0,
        Q = H && (Y.cache_settings?.post_setup_cache_enabled ?? !0)
      P[7] !== D
        ? ((t = D.formatMessage({ id: "settings.cloudEnvironments.details.edit", defaultMessage: "Edit environment" })),
          (P[7] = D),
          (P[8] = t))
        : (t = P[8])
      let q = t
      ;(P[9] !== Z || P[10] !== H || P[11] !== Q || P[12] !== q || P[13] !== D || P[14] !== z
        ? ((n =
            H || Z
              ? (0, s.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    H
                      ? (0, s.jsxs)(f.$, {
                          "aria-label": q,
                          color: "secondary",
                          onClick: z,
                          size: "toolbar",
                          children: [
                            (0, s.jsx)(p.I, { "aria-hidden": !1, asset: l.h }),
                            (0, s.jsx)(c.A, {
                              id: "settings.cloudEnvironments.details.editAction",
                              defaultMessage: "Edit",
                            }),
                          ],
                        })
                      : null,
                    Z || Q
                      ? (0, s.jsxs)(h.Ab, {
                          align: "end",
                          contentWidth: "menu",
                          triggerButton: (0, s.jsx)(x.p, {
                            label: D.formatMessage({
                              id: "settings.cloudEnvironments.details.actions",
                              defaultMessage: "Environment actions",
                            }),
                          }),
                          children: [
                            Q
                              ? (0, s.jsx)(h.ms.Item, {
                                  leftIconAsset: r.S,
                                  onSelect: () => W("reset-cache"),
                                  children: (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.details.resetCache",
                                    defaultMessage: "Reset cache",
                                  }),
                                })
                              : null,
                            Z
                              ? (0, s.jsx)(h.ms.Item, {
                                  leftIconAsset: i.c,
                                  onSelect: () => W("delete"),
                                  children: (0, s.jsx)(c.A, {
                                    id: "settings.cloudEnvironments.details.delete",
                                    defaultMessage: "Delete environment",
                                  }),
                                })
                              : null,
                          ],
                        })
                      : null,
                  ],
                })
              : null),
          (P[9] = Z),
          (P[10] = H),
          (P[11] = Q),
          (P[12] = q),
          (P[13] = D),
          (P[14] = z),
          (P[15] = n))
        : (n = P[15]),
        P[16] !== Y.label || P[17] !== T
          ? ((m = (0, s.jsx)(ey, { current: Y.label, onRootClick: T })), (P[16] = Y.label), (P[17] = T), (P[18] = m))
          : (m = P[18]),
        P[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)(c.A, {
              id: "settings.cloudEnvironments.environmentOverview",
              defaultMessage: "Review the repository and setup instructions for this environment",
            })),
            (P[19] = g))
          : (g = P[19]))
      let X = Y.description || void 0
      P[20] !== Y ? ((b = (0, s.jsx)(k, { environment: Y })), (P[20] = Y), (P[21] = b)) : (b = P[21])
      let K = "delete" === F
      ;(P[22] !== V || P[23] !== Y.id || P[24] !== D || P[25] !== G || P[26] !== O
        ? ((_ = () => {
            V.mutate(Y.id, {
              onSuccess: () => {
                ;(O.get(v.Id).success(
                  D.formatMessage({
                    id: "settings.cloudEnvironments.delete.success",
                    defaultMessage: "Deleted cloud environment",
                  }),
                ),
                  G())
              },
              onError: () => {
                O.get(v.Id).danger(
                  D.formatMessage({
                    id: "settings.cloudEnvironments.delete.error",
                    defaultMessage: "Unable to delete cloud environment",
                  }),
                  { errorAnalytics: { toastId: "settings.cloudEnvironments.delete.error" } },
                )
              },
            })
          }),
          (P[22] = V),
          (P[23] = Y.id),
          (P[24] = D),
          (P[25] = G),
          (P[26] = O),
          (P[27] = _))
        : (_ = P[27]),
        P[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (e) => W(e ? "delete" : null)), (P[28] = M))
          : (M = P[28]),
        P[29] !== V.isPending || P[30] !== Y.label || P[31] !== K || P[32] !== _
          ? ((A = (0, s.jsx)(B, {
              environmentName: Y.label,
              isPending: V.isPending,
              open: K,
              onConfirm: _,
              onOpenChange: M,
            })),
            (P[29] = V.isPending),
            (P[30] = Y.label),
            (P[31] = K),
            (P[32] = _),
            (P[33] = A))
          : (A = P[33]))
      let J = "reset-cache" === F
      return (
        P[34] !== Y.id || P[35] !== D || P[36] !== L || P[37] !== O
          ? ((N = () => {
              L.mutate(Y.id, {
                onSuccess: () => {
                  ;(W(null),
                    O.get(v.Id).success(
                      D.formatMessage({
                        id: "settings.cloudEnvironments.resetCache.success",
                        defaultMessage: "Reset cloud environment cache",
                      }),
                    ))
                },
                onError: () => {
                  O.get(v.Id).danger(
                    D.formatMessage({
                      id: "settings.cloudEnvironments.resetCache.error",
                      defaultMessage: "Unable to reset cloud environment cache",
                    }),
                    { errorAnalytics: { toastId: "settings.cloudEnvironments.resetCache.error" } },
                  )
                },
              })
            }),
            (P[34] = Y.id),
            (P[35] = D),
            (P[36] = L),
            (P[37] = O),
            (P[38] = N))
          : (N = P[38]),
        P[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (e) => W(e ? "reset-cache" : null)), (P[39] = E))
          : (E = P[39]),
        P[40] !== L.isPending || P[41] !== J || P[42] !== N
          ? ((S = (0, s.jsx)(R, { isPending: L.isPending, open: J, onConfirm: N, onOpenChange: E })),
            (P[40] = L.isPending),
            (P[41] = J),
            (P[42] = N),
            (P[43] = S))
          : (S = P[43]),
        P[44] !== Y.label || P[45] !== A || P[46] !== S || P[47] !== n || P[48] !== m || P[49] !== X || P[50] !== b
          ? ((I = (0, s.jsxs)(y.P, {
              action: n,
              backSlot: m,
              overview: g,
              subtitle: X,
              title: Y.label,
              children: [b, A, S],
            })),
            (P[44] = Y.label),
            (P[45] = A),
            (P[46] = S),
            (P[47] = n),
            (P[48] = m),
            (P[49] = X),
            (P[50] = b),
            (P[51] = I))
          : (I = P[51]),
        I
      )
    }
    function ej(e) {
      let t,
        n,
        r,
        l,
        i,
        d = (0, a.c)(26),
        { environmentId: u, onBack: g, onRootClick: f } = e,
        h = (0, o._U)(en.DK, u)
      if (h.isError) {
        let e,
          t = `${eg}/${u}`
        return (d[0] !== t ? ((e = (0, s.jsx)(m.C5, { to: t, replace: !0 })), (d[0] = t), (d[1] = e)) : (e = d[1]), e)
      }
      if (h.isPending) {
        let e, t, n, a, r
        return (
          d[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(c.A, {
                id: "settings.cloudEnvironments.edit.help",
                defaultMessage: "Update the repository and setup instructions for this environment",
              })),
              (d[2] = e))
            : (e = d[2]),
          d[3] !== g ? ((t = { label: eh, onClick: g }), (d[3] = g), (d[4] = t)) : (t = d[4]),
          d[5] !== f || d[6] !== t
            ? ((n = (0, s.jsx)(ey, { current: ep, environment: t, onRootClick: f })),
              (d[5] = f),
              (d[6] = t),
              (d[7] = n))
            : (n = d[7]),
          d[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, s.jsx)(C.j, {
                children: (0, s.jsx)(c.A, {
                  id: "settings.cloudEnvironments.edit.loading",
                  defaultMessage: "Loading environment\u2026",
                }),
              })),
              (d[8] = a))
            : (a = d[8]),
          d[9] !== n
            ? ((r = (0, s.jsx)(y.P, { overview: e, backSlot: n, title: ep, children: a })), (d[9] = n), (d[10] = r))
            : (r = d[10]),
          r
        )
      }
      if (h.data.permissions?.can_write !== !0) {
        let e,
          t = `${eg}/${u}`
        return (
          d[11] !== t ? ((e = (0, s.jsx)(m.C5, { to: t, replace: !0 })), (d[11] = t), (d[12] = e)) : (e = d[12]),
          e
        )
      }
      return (
        d[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(c.A, {
              id: "settings.cloudEnvironments.edit.help",
              defaultMessage: "Update the repository and setup instructions for this environment",
            })),
            (d[13] = t))
          : (t = d[13]),
        d[14] !== h.data.label || d[15] !== g
          ? ((n = { label: h.data.label, onClick: g }), (d[14] = h.data.label), (d[15] = g), (d[16] = n))
          : (n = d[16]),
        d[17] !== f || d[18] !== n
          ? ((r = (0, s.jsx)(ey, { current: ep, environment: n, onRootClick: f })),
            (d[17] = f),
            (d[18] = n),
            (d[19] = r))
          : (r = d[19]),
        d[20] !== h.data || d[21] !== g
          ? ((l = (0, s.jsx)($.c, { environment: h.data, onCancel: g, onSaved: g }, h.data.id)),
            (d[20] = h.data),
            (d[21] = g),
            (d[22] = l))
          : (l = d[22]),
        d[23] !== r || d[24] !== l
          ? ((i = (0, s.jsx)(y.P, { overview: t, backSlot: r, title: ep, children: l })),
            (d[23] = r),
            (d[24] = l),
            (d[25] = i))
          : (i = d[25]),
        i
      )
    }
    function ey(e) {
      let t,
        n,
        r,
        l,
        i,
        o = (0, a.c)(13),
        { current: c, environment: u, onRootClick: m } = e,
        f = (0, d.useContext)(g.X)
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(_.s, { slug: "cloud-environments" })), (o[0] = t))
          : (t = o[0]),
        o[1] !== m || o[2] !== f
          ? ((n = { id: "cloud-environments", label: t, onClick: () => f(m) }), (o[1] = m), (o[2] = f), (o[3] = n))
          : (n = o[3]),
        o[4] !== u || o[5] !== f
          ? ((r = null == u ? [] : [{ id: "environment", label: u.label, onClick: () => f(u.onClick) }]),
            (o[4] = u),
            (o[5] = f),
            (o[6] = r))
          : (r = o[6]),
        o[7] !== n || o[8] !== r ? ((l = [n, ...r]), (o[7] = n), (o[8] = r), (o[9] = l)) : (l = o[9]),
        o[10] !== c || o[11] !== l
          ? ((i = (0, s.jsx)(b.V, { ancestors: l, current: c })), (o[10] = c), (o[11] = l), (o[12] = i))
          : (i = o[12]),
        i
      )
    }
  },
  Cg9t(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      r = n("oyxz"),
      l = n("Sm6l"),
      i = n("BSnr"),
      o = n("AWNZ"),
      d = n("ZEx5")
    n.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            n,
            c,
            u = (0, a.c)(5),
            { isRetrying: m, onRetry: g } = e
          return (
            u[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(r.A, {
                  id: "settings.general.cloudPreferences.loadError",
                  defaultMessage: "Unable to load cloud preferences",
                })),
                (u[0] = t))
              : (t = u[0]),
            u[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, s.jsx)(r.A, { id: "settings.general.cloudPreferences.retry", defaultMessage: "Retry" })),
                (u[1] = n))
              : (n = u[1]),
            u[2] !== m || u[3] !== g
              ? ((c = (0, s.jsx)(i.X, {
                  children: (0, s.jsx)(i.X.Content, {
                    children: (0, s.jsx)(d.t, {
                      children: (0, s.jsx)(o.ic, {
                        label: t,
                        control: (0, s.jsx)(l.$, {
                          color: "secondary",
                          disabled: m,
                          onClick: g,
                          size: "toolbar",
                          children: n,
                        }),
                      }),
                    }),
                  }),
                })),
                (u[2] = m),
                (u[3] = g),
                (u[4] = c))
              : (c = u[4]),
            c
          )
        },
      },
    )
  },
  Jl3I(e, t, n) {
    let s = (0, n("Qgfj").YK)({
        diffView: { id: "settings.general.cloudPreferences.diffView.label", defaultMessage: "Diff view" },
        diffViewDescription: {
          id: "settings.general.cloudPreferences.diffView.description",
          defaultMessage: "Choose how changes are shown in cloud chats",
        },
        unified: { id: "settings.general.cloudPreferences.diffView.unified", defaultMessage: "Unified" },
        split: { id: "settings.general.cloudPreferences.diffView.split", defaultMessage: "Split" },
        branchFormat: { id: "settings.general.cloudPreferences.branchFormat.title", defaultMessage: "Branch format" },
        placeholders: {
          id: "settings.general.cloudPreferences.branchFormat.availableTags",
          defaultMessage: "Available placeholders",
        },
      }),
      a = s.placeholders,
      r = [
        { id: "unified", title: s.unified },
        { id: "split", title: s.split },
      ],
      l = {
        diffView: {
          section: "cloud-settings",
          id: "cloud-diff-view",
          title: s.diffView,
          description: s.diffViewDescription,
          options: r.map(({ title: e }) => e),
        },
        branchFormat: { section: "cloud-settings", id: "cloud-branch-format", title: s.branchFormat, keywords: [a] },
      }
    n.d(t, {}, { Hm: a, aN: r, kN: l })
  },
  Vg34(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      r = n("qmMi"),
      l = n("zd8w"),
      i = n("oyxz"),
      o = n("Wf1j"),
      d = n("Sm6l"),
      c = n("EShr"),
      u = n("zLIa"),
      m = n("SGsN"),
      g = n("OWtl"),
      f = n("jxU8"),
      h = n("pO0d"),
      p = n("BSnr"),
      x = n("odCE"),
      v = n("QyE3"),
      b = n("ZEx5"),
      j = n("uMwG"),
      y = n("Cg9t"),
      C = n("Jl3I")
    function _() {
      let e,
        t,
        n,
        f,
        v,
        _,
        M,
        A,
        N,
        E,
        S,
        k,
        I,
        P,
        B,
        R,
        $,
        T,
        G,
        z,
        O,
        D,
        U,
        V,
        L = (0, a.c)(84),
        F = (0, r.gh)(g.u),
        W = (0, o.A)(),
        Y = (0, j.wJ)(),
        H = (0, j.Zl)(),
        Z = (0, j.sN)(),
        [Q, q] = (0, l.useState)(null)
      if (Y.isError || H.isError) {
        let e,
          t,
          n = Y.isFetching || H.isFetching
        return (
          L[0] !== H || L[1] !== Y
            ? ((e = () => {
                ;(Y.refetch(), H.refetch())
              }),
              (L[0] = H),
              (L[1] = Y),
              (L[2] = e))
            : (e = L[2]),
          L[3] !== n || L[4] !== e
            ? ((t = (0, s.jsx)(y.C, { isRetrying: n, onRetry: e })), (L[3] = n), (L[4] = e), (L[5] = t))
            : (t = L[5]),
          t
        )
      }
      if (null == Y.data || null == H.data) {
        let e
        return (
          L[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(x.j, {
                children: (0, s.jsx)(i.A, {
                  id: "settings.general.cloudPreferences.loading",
                  defaultMessage: "Loading cloud preferences\u2026",
                }),
              })),
              (L[6] = e))
            : (e = L[6]),
          e
        )
      }
      let X = Y.data,
        K = H.data,
        J = Q?.baseline === X.branch_format ? Q.value : X.branch_format
      if (
        L[7] !== J ||
        L[8] !== K.branch_format_max_length ||
        L[9] !== K.branch_format_special_values ||
        L[10] !== W ||
        L[11] !== X.git_diff_mode ||
        L[12] !== F ||
        L[13] !== Z
      ) {
        let a, r, l, o
        ;((v = (0, j.d9)(J, K.branch_format_max_length, K.branch_format_special_values)),
          L[23] !== W || L[24] !== F || L[25] !== Z
            ? ((a = (e, t) => {
                Z.mutate(e, {
                  onSuccess: () => {
                    F.get(m.Id).success(t)
                  },
                  onError: () => {
                    F.get(m.Id).danger(
                      W.formatMessage({
                        id: "settings.general.cloudPreferences.save.error",
                        defaultMessage: "Unable to save cloud preference",
                      }),
                      { errorAnalytics: { toastId: "wham_preferences_page_preferences_update_error" } },
                    )
                  },
                })
              }),
              (L[23] = W),
              (L[24] = F),
              (L[25] = Z),
              (L[26] = a))
            : (a = L[26]),
          (_ = a),
          (f = p.X),
          (n = p.X.Content),
          (t = b.t),
          L[27] !== W
            ? ((r = W.formatMessage({
                id: "settings.general.cloudPreferences.diffView.ariaLabel",
                defaultMessage: "Diff view",
              })),
              (L[27] = W),
              (L[28] = r))
            : (r = L[28]),
          L[29] !== Z.isPending
            ? ((l = C.aN.map((e) => {
                let { id: t, title: n } = e
                return { id: t, label: (0, s.jsx)(i.A, { ...n }), disabled: Z.isPending }
              })),
              (L[29] = Z.isPending),
              (L[30] = l))
            : (l = L[30]),
          L[31] !== W || L[32] !== _
            ? ((o = (e) => {
                _(
                  { git_diff_mode: e },
                  W.formatMessage({
                    id: "settings.general.cloudPreferences.diffView.save.success",
                    defaultMessage: "Saved diff view",
                  }),
                )
              }),
              (L[31] = W),
              (L[32] = _),
              (L[33] = o))
            : (o = L[33]),
          L[34] !== X.git_diff_mode || L[35] !== r || L[36] !== l || L[37] !== o
            ? ((N = (0, s.jsx)(h.GC, {
                entry: C.kN.diffView,
                control: (0, s.jsx)(c.T, {
                  size: "toolbar",
                  ariaLabel: r,
                  options: l,
                  selectedId: X.git_diff_mode,
                  onSelect: o,
                }),
              })),
              (L[34] = X.git_diff_mode),
              (L[35] = r),
              (L[36] = l),
              (L[37] = o),
              (L[38] = N))
            : (N = L[38]),
          (e = h.GC),
          (M = C.kN.branchFormat),
          (A =
            null == v
              ? (0, s.jsx)(i.A, {
                  id: "settings.general.cloudPreferences.branchFormat.preview",
                  defaultMessage: "Example: {branchName}",
                  values: { branchName: (0, j.ig)(J, K.branch_format_special_values) },
                })
              : (function (e) {
                  switch (e) {
                    case "bracket-mismatch":
                      return (0, s.jsx)(i.A, {
                        id: "settings.general.cloudPreferences.branchFormat.error.bracketMismatch",
                        defaultMessage: "Branch format has unmatched brackets",
                      })
                    case "invalid-characters":
                      return (0, s.jsx)(i.A, {
                        id: "settings.general.cloudPreferences.branchFormat.error.invalidCharacters",
                        defaultMessage: "Branch format contains invalid characters",
                      })
                    case "invalid-pattern":
                      return (0, s.jsx)(i.A, {
                        id: "settings.general.cloudPreferences.branchFormat.error.invalidPattern",
                        defaultMessage: "Branch format contains an unavailable placeholder",
                      })
                    case "leading-slash":
                      return (0, s.jsx)(i.A, {
                        id: "settings.general.cloudPreferences.branchFormat.error.leadingSlash",
                        defaultMessage: "Branch format cannot start with '/'",
                      })
                    case "missing-pattern":
                      return (0, s.jsx)(i.A, {
                        id: "settings.general.cloudPreferences.branchFormat.error.missingPattern",
                        defaultMessage: "Branch format must contain at least one placeholder",
                      })
                    case "too-long":
                      return (0, s.jsx)(i.A, {
                        id: "settings.general.cloudPreferences.branchFormat.error.tooLong",
                        defaultMessage: "Generated branch name exceeds the allowed length",
                      })
                  }
                })(v)),
          (L[7] = J),
          (L[8] = K.branch_format_max_length),
          (L[9] = K.branch_format_special_values),
          (L[10] = W),
          (L[11] = X.git_diff_mode),
          (L[12] = F),
          (L[13] = Z),
          (L[14] = e),
          (L[15] = t),
          (L[16] = n),
          (L[17] = f),
          (L[18] = v),
          (L[19] = _),
          (L[20] = M),
          (L[21] = A),
          (L[22] = N))
      } else
        ((e = L[14]),
          (t = L[15]),
          (n = L[16]),
          (f = L[17]),
          (v = L[18]),
          (_ = L[19]),
          (M = L[20]),
          (A = L[21]),
          (N = L[22]))
      L[39] !== W
        ? ((E = W.formatMessage({
            id: "settings.general.cloudPreferences.branchFormat.input.ariaLabel",
            defaultMessage: "Branch format pattern",
          })),
          (L[39] = W),
          (L[40] = E))
        : (E = L[40])
      let ee = Z.isPending
      ;(L[41] !== W
        ? ((S = W.formatMessage(
            {
              id: "settings.general.cloudPreferences.branchFormat.input.placeholder",
              defaultMessage: "codex/{pattern}",
            },
            { pattern: "{feature}" },
          )),
          (L[41] = W),
          (L[42] = S))
        : (S = L[42]),
        L[43] !== X.branch_format
          ? ((k = (e) => {
              q({ baseline: X.branch_format, value: e.target.value })
            }),
            (L[43] = X.branch_format),
            (L[44] = k))
          : (k = L[44]),
        L[45] !== J || L[46] !== E || L[47] !== S || L[48] !== k || L[49] !== Z.isPending
          ? ((I = (0, s.jsx)("div", {
              className: "w-56 max-w-full",
              children: (0, s.jsx)(u.pd, { "aria-label": E, disabled: ee, placeholder: S, value: J, onChange: k }),
            })),
            (L[45] = J),
            (L[46] = E),
            (L[47] = S),
            (L[48] = k),
            (L[49] = Z.isPending),
            (L[50] = I))
          : (I = L[50]),
        L[51] !== e || L[52] !== M || L[53] !== A || L[54] !== I
          ? ((P = (0, s.jsx)(e, { entry: M, description: A, control: I })),
            (L[51] = e),
            (L[52] = M),
            (L[53] = A),
            (L[54] = I),
            (L[55] = P))
          : (P = L[55]),
        L[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, s.jsx)(i.A, { ...C.Hm })), (L[56] = B))
          : (B = L[56]),
        L[57] !== K.branch_format_special_values
          ? ((R = K.branch_format_special_values.map(w).join(", ")),
            (L[57] = K.branch_format_special_values),
            (L[58] = R))
          : (R = L[58]),
        L[59] !== R
          ? (($ = (0, s.jsx)("span", { className: "[text-wrap:wrap]", children: R })), (L[59] = R), (L[60] = $))
          : ($ = L[60]))
      let et = J === X.branch_format || null != v
      return (
        L[61] !== J || L[62] !== W || L[63] !== _
          ? ((T = () => {
              _(
                { branch_format: J },
                W.formatMessage({
                  id: "settings.general.cloudPreferences.branchFormat.save.success",
                  defaultMessage: "Saved branch format",
                }),
              )
            }),
            (L[61] = J),
            (L[62] = W),
            (L[63] = _),
            (L[64] = T))
          : (T = L[64]),
        L[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, s.jsx)(i.A, {
              id: "settings.general.cloudPreferences.branchFormat.save",
              defaultMessage: "Save",
            })),
            (L[65] = G))
          : (G = L[65]),
        L[66] !== et || L[67] !== T || L[68] !== Z.isPending
          ? ((z = (0, s.jsx)(d.$, {
              color: "primary",
              disabled: et,
              loading: Z.isPending,
              onClick: T,
              size: "toolbar",
              children: G,
            })),
            (L[66] = et),
            (L[67] = T),
            (L[68] = Z.isPending),
            (L[69] = z))
          : (z = L[69]),
        L[70] !== $ || L[71] !== z
          ? ((O = (0, s.jsx)(h.iu, { label: B, description: $, action: z })), (L[70] = $), (L[71] = z), (L[72] = O))
          : (O = L[72]),
        L[73] !== t || L[74] !== O || L[75] !== N || L[76] !== P
          ? ((D = (0, s.jsxs)(t, { children: [N, P, O] })),
            (L[73] = t),
            (L[74] = O),
            (L[75] = N),
            (L[76] = P),
            (L[77] = D))
          : (D = L[77]),
        L[78] !== n || L[79] !== D
          ? ((U = (0, s.jsx)(n, { children: D })), (L[78] = n), (L[79] = D), (L[80] = U))
          : (U = L[80]),
        L[81] !== f || L[82] !== U
          ? ((V = (0, s.jsx)(f, { children: U })), (L[81] = f), (L[82] = U), (L[83] = V))
          : (V = L[83]),
        V
      )
    }
    function w(e) {
      return e.value
    }
    n.d(
      t,
      {},
      {
        CloudPreferencesSettings: function () {
          let e,
            t = (0, a.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(f.P, {
                  overview: (0, s.jsx)(i.A, {
                    id: "settings.overview.cloud-settings",
                    defaultMessage: "Set defaults for tasks that run in the cloud",
                  }),
                  title: (0, s.jsx)(v.s, { slug: "cloud-settings" }),
                  children: (0, s.jsx)(_, {}),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        P: _,
      },
    )
  },
  O1Cs(e, t, n) {
    var s = n("qmMi"),
      a = n("Qgfj"),
      r = n("SPnB"),
      l = n("eFn4"),
      i = n("GaA7"),
      o = n("OWtl"),
      d = n("jBHQ"),
      c = n("Jl3I")
    let u = { section: "codex-cloud", searchParams: { tab: "personal-vault" } },
      m = (0, a.YK)({
        createLegacy: { id: "settings.cloudEnvironments.create.action", defaultMessage: "Create environment" },
        create: { id: "settings.codexCloud.create", defaultMessage: "Create environment" },
        addProject: { id: "settings.localEnvironments.workspace.add", defaultMessage: "Add project" },
        vaultFilter: { id: "personalVault.filters", defaultMessage: "Vault entry type" },
        vaultImport: { id: "personalVault.importAction", defaultMessage: "Import" },
        vaultAdd: { id: "personalVault.addEntry", defaultMessage: "Add" },
        all: { id: "personalVault.filterAll", defaultMessage: "All types" },
        not_sensitive: { id: "personalVault.filterVariables", defaultMessage: "Environment Variables" },
        sensitive: { id: "personalVault.networkSecrets", defaultMessage: "Network secrets" },
      }),
      g = { all: m.all, not_sensitive: m.not_sensitive, sensitive: m.sensitive },
      f = {
        createLegacy: { section: "cloud-environments", id: "create-legacy-cloud-environment", title: m.createLegacy },
        create: { section: "codex-cloud", id: "create-cloud-environment", title: m.create },
        addProject: { section: "local-environments", id: "local-environment-add-project", title: m.addProject },
        vaultFilter: { ...u, id: "vault-entry-type", title: m.vaultFilter, options: Object.values(g) },
        vaultImport: { ...u, id: "import-personal-vault", title: m.vaultImport, keywords: [m.not_sensitive] },
        vaultAdd: { ...u, id: "add-personal-vault-entry", title: m.vaultAdd, keywords: [m.not_sensitive, m.sensitive] },
      },
      h = (0, s.un)(o.u, ({ get: e }) => {
        let t = [f.createLegacy]
        return (
          e(d.P, "375130565") &&
            t.push(
              ...Object.values(c.kN).map((e) => ({
                ...e,
                section: "cloud-environments",
                searchParams: { tab: "preferences" },
              })),
            ),
          t
        )
      }),
      p = (0, s.un)(o.u, ({ get: e }) => {
        if (!e(l.Py)) return []
        let t = [f.create]
        return (
          e(r.PO).authLoading ||
            null == e(r.chatGptAuthenticatedAccountId$) ||
            null == e(r.chatGptAuthenticatedUserId$) ||
            (t.push(f.vaultFilter, f.vaultAdd), i.appServices?.localPersonalSecrets != null && t.push(f.vaultImport)),
          t
        )
      }),
      x = (0, s.un)(o.u, ({ get: e }) =>
        e(d.P, "375130565") ? { ...f.addProject, section: "worktrees", searchParams: { tab: "environments" } } : null,
      )
    n.d(t, {}, { Ad: h, Sd: f, iJ: g, nZ: x, xz: p })
  },
  pO0d(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      r = n("oyxz"),
      l = n("Wf1j"),
      i = n("AWNZ"),
      o = n("DDOY")
    function d(e) {
      let t,
        n = (0, a.c)(2),
        { title: l } = e
      return (
        n[0] !== l
          ? ((t =
              "localizedText" in l ? (0, s.jsx)(s.Fragment, { children: l.localizedText }) : (0, s.jsx)(r.A, { ...l })),
            (n[0] = l),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    n.d(
      t,
      {},
      {
        Ct: d,
        GC: function (e) {
          let t,
            n,
            l,
            o,
            c,
            u,
            m,
            g,
            f,
            h = (0, a.c)(19)
          h[0] !== e
            ? (({ entry: n, anchored: c, description: t, renderLabel: o, ...l } = e),
              (h[0] = e),
              (h[1] = t),
              (h[2] = n),
              (h[3] = l),
              (h[4] = o),
              (h[5] = c))
            : ((t = h[1]), (n = h[2]), (l = h[3]), (o = h[4]), (c = h[5]))
          let p = void 0 === c || c
          h[6] !== n.title ? ((u = (0, s.jsx)(d, { title: n.title })), (h[6] = n.title), (h[7] = u)) : (u = h[7])
          let x = u,
            v = p ? n.id : void 0
          return (
            h[8] !== x || h[9] !== o ? ((m = null == o ? x : o(x)), (h[8] = x), (h[9] = o), (h[10] = m)) : (m = h[10]),
            h[11] !== t || h[12] !== n.description
              ? ((g = null == n.description ? t : (0, s.jsx)(r.A, { ...n.description })),
                (h[11] = t),
                (h[12] = n.description),
                (h[13] = g))
              : (g = h[13]),
            h[14] !== l || h[15] !== v || h[16] !== m || h[17] !== g
              ? ((f = (0, s.jsx)(i.ic, { ...l, searchAnchor: v, label: m, description: g })),
                (h[14] = l),
                (h[15] = v),
                (h[16] = m),
                (h[17] = g),
                (h[18] = f))
              : (f = h[18]),
            f
          )
        },
        ek: function (e) {
          let t,
            n,
            r = (0, a.c)(12),
            { entry: i, anchored: d, className: c, children: u } = e,
            m = void 0 === d || d,
            g = (0, l.A)(),
            f = m ? i.id : void 0,
            h = m ? i.id : void 0,
            p = m ? -1 : void 0,
            x = m ? "group" : void 0
          return (
            r[0] !== m || r[1] !== i || r[2] !== g
              ? ((t = m ? (0, o.hz)(g, i.title) : void 0), (r[0] = m), (r[1] = i), (r[2] = g), (r[3] = t))
              : (t = r[3]),
            r[4] !== u || r[5] !== c || r[6] !== f || r[7] !== h || r[8] !== p || r[9] !== x || r[10] !== t
              ? ((n = (0, s.jsx)("div", {
                  id: f,
                  "data-settings-search-entry": h,
                  tabIndex: p,
                  role: x,
                  "aria-label": t,
                  className: c,
                  children: u,
                })),
                (r[4] = u),
                (r[5] = c),
                (r[6] = f),
                (r[7] = h),
                (r[8] = p),
                (r[9] = x),
                (r[10] = t),
                (r[11] = n))
              : (n = r[11]),
            n
          )
        },
        iu: function (e) {
          let t,
            n,
            r,
            l = (0, a.c)(6)
          return (
            l[0] !== e ? (({ action: t, ...n } = e), (l[0] = e), (l[1] = t), (l[2] = n)) : ((t = l[1]), (n = l[2])),
            l[3] !== t || l[4] !== n
              ? ((r = (0, s.jsx)(i.ic, { ...n, control: t })), (l[3] = t), (l[4] = n), (l[5] = r))
              : (r = l[5]),
            r
          )
        },
        kk: function (e) {
          let t,
            n,
            l,
            o,
            c,
            u,
            m,
            g = (0, a.c)(15)
          g[0] !== e
            ? (({ entry: n, anchored: o, description: t, ...l } = e),
              (g[0] = e),
              (g[1] = t),
              (g[2] = n),
              (g[3] = l),
              (g[4] = o))
            : ((t = g[1]), (n = g[2]), (l = g[3]), (o = g[4]))
          let f = void 0 === o || o ? n.id : void 0
          return (
            g[5] !== n.title ? ((c = (0, s.jsx)(d, { title: n.title })), (g[5] = n.title), (g[6] = c)) : (c = g[6]),
            g[7] !== t || g[8] !== n.description
              ? ((u = null == n.description ? t : (0, s.jsx)(r.A, { ...n.description })),
                (g[7] = t),
                (g[8] = n.description),
                (g[9] = u))
              : (u = g[9]),
            g[10] !== l || g[11] !== f || g[12] !== c || g[13] !== u
              ? ((m = (0, s.jsx)(i.kG, { ...l, searchAnchor: f, label: c, description: u })),
                (g[10] = l),
                (g[11] = f),
                (g[12] = c),
                (g[13] = u),
                (g[14] = m))
              : (m = g[14]),
            m
          )
        },
      },
    )
  },
  odCE(e, t, n) {
    var s = n("ABep"),
      a = n("QosV"),
      r = n("oyxz"),
      l = n("RNul")
    n.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            n,
            i,
            o = (0, a.c)(5),
            { children: d } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(l.y, { className: "icon-xs shrink-0 text-secondary" })), (o[0] = t))
              : (t = o[0]),
            o[1] !== d
              ? ((n =
                  void 0 === d
                    ? (0, s.jsx)(r.A, { id: "settings.panel.loading", defaultMessage: "Loading settings\u2026" })
                    : d),
                (o[1] = d),
                (o[2] = n))
              : (n = o[2]),
            o[3] !== n
              ? ((i = (0, s.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, s.jsx)("span", { className: "text-balance", children: n })],
                })),
                (o[3] = n),
                (o[4] = i))
              : (i = o[4]),
            i
          )
        },
      },
    )
  },
  DDOY(e, t, n) {
    var s = n("Ywss"),
      a = n("iiZm")
    function r(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    n.d(
      t,
      {},
      {
        Xl: function (e, t, n) {
          let a = (0, s.Rr)(e),
            r = new URLSearchParams(a.search)
          for (let [e, t] of Object.entries(n ?? {})) r.set(e, t)
          return (0, s.AO)({ ...a, search: r.toString(), hash: t })
        },
        hz: r,
        s9: function (e, t, n) {
          let s = n.trim()
          return 0 === s.length
            ? []
            : e
                .flatMap((e) => {
                  let n = r(t, e.title),
                    l = (0, a.gr)(n, s),
                    i = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(s.toLocaleLowerCase(t.locale)),
                    o = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, a.gr)(r(t, e), s) > 0)
                  return 0 !== l || i || o
                    ? [
                        {
                          id: e.id,
                          label: n,
                          score: l,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: n, path: s, searchParams: a }) => ({
                  id: e,
                  label: t,
                  sectionSlug: n,
                  ...(null == s ? {} : { path: s }),
                  searchParams: a,
                }))
        },
      },
    )
  },
}
//# sourceMappingURL=521872.4e2e345a23.js.map
