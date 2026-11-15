export const __rspack_esm_ids = [250096]
export const __webpack_modules__ = {
  wwds(e, t, a) {
    var r = a("zd8w")
    a.d(
      t,
      {},
      {
        g: function () {
          let [e, t] = (0, r.useState)(null),
            [a, s] = (0, r.useState)({ canPrevious: !1, canNext: !1 })
          ;(0, r.useLayoutEffect)(() => {
            if (!e) return
            let t = () => {
              let t = Math.max(0, e.scrollWidth - e.clientWidth),
                a = Math.min(t, Math.abs(e.scrollLeft)),
                r = a > 1,
                o = a < t - 1
              s((e) => (e.canPrevious === r && e.canNext === o ? e : { canPrevious: r, canNext: o }))
            }
            ;(t(), e.addEventListener("scroll", t, { passive: !0 }))
            let a = new ResizeObserver(t),
              r = () => {
                for (let t of (a.disconnect(), a.observe(e), e.children)) a.observe(t)
                t()
              },
              o = new MutationObserver(r)
            return (
              o.observe(e, { childList: !0 }),
              r(),
              () => {
                ;(e.removeEventListener("scroll", t), a.disconnect(), o.disconnect())
              }
            )
          }, [e])
          let o = (0, r.useCallback)(
            (t) => {
              if (!e) return
              let a = e.ownerDocument.defaultView,
                r = a?.getComputedStyle(e).direction === "rtl"
              e.scrollBy({
                left: t * (r ? -1 : 1) * e.clientWidth * 0.85,
                behavior: a?.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
              })
            },
            [e],
          )
          return { model: a, actions: { viewportRef: t, previous: () => o(-1), next: () => o(1) } }
        },
      },
    )
  },
  e7LJ(e, t, a) {
    var r = a("ABep"),
      s = a("zd8w")
    let o = s.createContext(null),
      n = s.createContext(null),
      i = () => {},
      l = s.createContext(i),
      c = s.createContext(null)
    a.d(
      t,
      {},
      {
        Dp: function ({ ui: e, formatMessage: t, logEvent: a, experiments: d, children: p }) {
          let u = s.useMemo(
              () =>
                void 0 === a
                  ? i
                  : (e, t) => {
                      try {
                        a(e, t)
                      } catch {}
                    },
              [a],
            ),
            m = s.useMemo(
              () =>
                void 0 === d
                  ? null
                  : {
                      get(e, t) {
                        let a = d.getLayer(e.layer, t)
                        return void 0 === a ? e.fallback : e.parseOrFallback(a.get(e.name, e.fallback))
                      },
                    },
              [d],
            )
          return (0, r.jsx)(o, {
            value: e,
            children: (0, r.jsx)(n, {
              value: t ?? null,
              children: (0, r.jsx)(l, { value: u, children: (0, r.jsx)(c, { value: m, children: p }) }),
            }),
          })
        },
        O8: function () {
          let e = s.useContext(o)
          if (null === e) throw Error("useHostUI must be used within a TortillaProvider.")
          return e
        },
        oo: function () {
          let e = s.useContext(n)
          if (null === e) throw Error("useFormatMessage requires a TortillaProvider with formatMessage.")
          return e
        },
      },
    )
  },
  RiLA(e, t, a) {
    let r = (0, a("Qgfj").YK)({
      title: {
        id: "tortilla.gallery.title",
        defaultMessage: "Templates",
        description:
          "Heading for the shared template gallery dialog, where users browse templates grouped into categories. Short title.",
      },
      close: {
        id: "tortilla.gallery.close.button.label",
        defaultMessage: "Close templates",
        description:
          "Accessible label for the close button in the shared template gallery dialog header. Closes the gallery without selecting a template.",
      },
      createTemplate: {
        id: "tortilla.gallery.create.button.label.compact",
        defaultMessage: "Create",
        description:
          "Compact button in the header of the shared template gallery dialog, beside horizontally scrolling category tabs. Starts the host application's template-creation flow. Keep this label short so the button stays visible.",
      },
      createTemplateAccessible: {
        id: "tortilla.gallery.create.button.label",
        defaultMessage: "Create template",
        description:
          "Accessible label for the compact Create button in the shared template gallery header. Starts the host application's template-creation flow; keep the template noun so the action is clear out of context.",
      },
      tabAll: {
        id: "tortilla.gallery.filter.all.label",
        defaultMessage: "All",
        description:
          "Short filter-button label in the shared template gallery dialog. Shows all template categories together, unlike sibling filters that show one category. Keep the translation very short for the compact horizontal filter row. Contains no placeholders.",
      },
      expandSection: {
        id: "tortilla.gallery.section.expand.aria_label",
        defaultMessage: "Show all {category} templates",
        description:
          "Accessible label for a section heading button in the artifact template gallery modal. Selecting it shows only this template category. Placeholder {category} is the localized plural category name.",
      },
      previousTemplates: {
        id: "tortilla.gallery.section.previous.aria_label",
        defaultMessage: "Previous {category} templates",
        description:
          "Accessible label for a button that scrolls backward through a horizontal template category row. Placeholder {category} is the localized category name.",
      },
      nextTemplates: {
        id: "tortilla.gallery.section.next.aria_label",
        defaultMessage: "Next {category} templates",
        description:
          "Accessible label for a button that scrolls forward through a horizontal template category row. Placeholder {category} is the localized category name.",
      },
      loading: {
        id: "tortilla.gallery.loading.label",
        defaultMessage: "Loading templates",
        description: "Status label shown in the artifact template gallery modal while the templates are loading.",
      },
      empty: {
        id: "tortilla.gallery.empty.title",
        defaultMessage: "No templates yet",
        description:
          "Empty-state heading in the artifact template gallery modal when no supported templates are available to the end user. Short reassuring phrase.",
      },
      emptyDescription: {
        id: "tortilla.gallery.empty.description",
        defaultMessage: "Create a template to see it here.",
        description:
          "Empty-state body in the artifact template gallery modal. It tells an end user with no supported templates that creating one will make it appear in this gallery. One short sentence.",
      },
      error: {
        id: "tortilla.gallery.error.title",
        defaultMessage: "Templates couldn't load",
        description:
          "Failure-state heading in the artifact template gallery modal when its template data cannot be loaded. Short, neutral error phrase.",
      },
      retry: {
        id: "tortilla.gallery.error.retry.button.label",
        defaultMessage: "Try again",
        description:
          "Button label in the artifact template gallery modal failure state. Selecting it retries loading the available templates.",
      },
      back: {
        id: "tortilla.gallery.detail.back.label",
        defaultMessage: "Back to templates",
        description:
          "Button above sibling template details in the shared gallery dialog. Returns to the previous template group and scroll position without closing the gallery.",
      },
      actionError: {
        id: "tortilla.gallery.action.error",
        defaultMessage: "That action couldn't be completed. Please try again.",
        description:
          "Safe inline feedback in the shared template gallery after a host-supplied action rejects. No technical error details are included; the gallery remains open and never retries automatically.",
      },
      pending: {
        id: "tortilla.gallery.action.pending",
        defaultMessage: "Working…",
        description:
          "Screen-reader status in the template gallery while the selected host action is pending. The user may still close the dialog.",
      },
    })
    a.d(t, {}, { f: r })
  },
  RB8A(e, t, a) {
    a.d(t, { mM: () => d, ON: () => p, _Y: () => k, yS: () => g })
    var r = a("ABep"),
      s = a("zd8w"),
      o = a("e7LJ"),
      n = a("RiLA"),
      i = a("on57"),
      l = a("SIrB"),
      c = a("wwds")
    function d({ model: e, actions: t, card: a, nodeBeforeGroupTemplates: l, renderGroup: c, inset: p = !0 }) {
      let h = (0, o.oo)(),
        f = null === e.selectedGroupId ? e.groups : e.groups.filter((t) => t.id === e.selectedGroupId),
        g = new Map(f.map((e) => [e.id, c?.(e)])),
        k = [...g.values()].some((e) => null != e),
        w = f.some((e) => "loading" === e.templates.status),
        b = f.some((e) => "error" === e.templates.status),
        y = !f.some((e) => "ready" === e.templates.status && e.templates.data.length > 0)
      return (0, r.jsxs)("div", {
        className: "flex min-h-full flex-col",
        children: [
          w && (0, r.jsx)("output", { className: "sr-only", children: h(n.f.loading) }),
          (0, r.jsxs)("div", {
            className: (0, i.A)(
              "tortilla-gallery-card-groups min-h-0 shrink-0 grow",
              p && "p-6 [@media(max-width:48rem)]:px-4",
            ),
            children: [
              !w && b && (0, r.jsx)(m, { loading: !1, model: e, actions: t }),
              !w &&
                !b &&
                y &&
                !k &&
                (0, r.jsxs)("div", {
                  className:
                    "tortilla-gallery-status flex min-h-56 flex-col items-center justify-center gap-3 text-center",
                  children: [
                    (0, r.jsx)("output", { children: h(n.f.empty) }),
                    e.canCreateTemplate && (0, r.jsx)("p", { className: "m-0", children: h(n.f.emptyDescription) }),
                  ],
                }),
              (w || (!b && !y) || l || k) &&
                (0, r.jsx)("div", {
                  className: "tortilla-gallery-groups flex min-w-0 flex-col gap-9",
                  "aria-busy": w || void 0,
                  children: f.map((t) =>
                    (0, r.jsx)(
                      s.Fragment,
                      {
                        children:
                          g.get(t.id) ??
                          (0, r.jsx)(u, {
                            group: t,
                            model: e,
                            card: a,
                            nodeBeforeTemplates: l?.(t),
                            showTemplates: w || (!b && !y),
                          }),
                      },
                      t.id,
                    ),
                  ),
                }),
            ],
          }),
        ],
      })
    }
    function p({ model: e, actions: t }) {
      let { Tabs: a } = (0, o.O8)(),
        s = (0, o.oo)(),
        i = [{ key: "all", name: s(n.f.tabAll) }, ...e.groups.map((e) => ({ key: `gallery:${e.id}`, name: e.label }))],
        l = null === e.selectedGroupId ? "all" : `gallery:${e.selectedGroupId}`
      return (0, r.jsx)("fieldset", {
        className: "m-0 min-w-0 flex-1 border-0 p-0",
        "aria-label": s(n.f.title),
        children: (0, r.jsx)(a, {
          className: "tortilla-gallery-filters scrollbar-none [&::-webkit-scrollbar]:hidden",
          variant: "browse",
          scrollable: !0,
          tabs: i,
          selectedKey: l,
          onSelect: (e) => {
            t.selectGallery("all" === e ? null : e.slice(8))
          },
          ariaLabel: s(n.f.title),
        }),
      })
    }
    function u({ group: e, model: t, card: a, nodeBeforeTemplates: d, showTemplates: p }) {
      let m,
        { Button: h, Skeleton: f, icons: g } = (0, o.O8)(),
        k = (0, o.oo)(),
        w = (0, s.useId)(),
        b = (0, c.g)(),
        y = g["chevron-left"],
        v = g["chevron-right"],
        P = (0, l.K$)(e.templateTypes),
        x = null != d,
        M = t.selectedGroupId === e.id,
        T = p && "ready" === e.templates.status ? e.templates.data : []
      if (!x && (!p || "loading" !== e.templates.status) && 0 === T.length) return null
      let j = !M
      return (
        (m = M
          ? P
            ? "grid grid-cols-5 overflow-visible [@media(30rem<width<=48rem)]:grid-cols-3 [@media(max-width:30rem)]:grid-cols-2 *:min-w-0"
            : "grid grid-cols-4 overflow-visible [@media(30rem<width<=48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1 *:min-w-0"
          : P
            ? "horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex overflow-x-auto overscroll-x-contain scrollbar-none *:min-w-36 *:flex-[0_0_calc((100%-3rem)/5)] [&::-webkit-scrollbar]:hidden"
            : "horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex overflow-x-auto overscroll-x-contain scrollbar-none *:min-w-48 *:flex-[0_0_calc((100%-2.25rem)/4)] [&::-webkit-scrollbar]:hidden"),
        (0, r.jsxs)("section", {
          "aria-label": j ? void 0 : e.label,
          "aria-labelledby": j ? w : void 0,
          children: [
            j &&
              (0, r.jsxs)("div", {
                className: "mb-3 flex items-center justify-between gap-2",
                children: [
                  (0, r.jsx)("h3", {
                    id: w,
                    className: "tortilla-gallery-group-heading body-md m-0 font-semibold",
                    children: e.label,
                  }),
                  (b.model.canPrevious || b.model.canNext) &&
                    (0, r.jsxs)("div", {
                      className: "flex shrink-0 items-center gap-1",
                      children: [
                        (0, r.jsx)(h, {
                          type: "button",
                          color: "ghostActive",
                          size: "toolbar",
                          uniform: !0,
                          "aria-label": k(n.f.previousTemplates, { category: e.label }),
                          disabled: !b.model.canPrevious,
                          onClick: b.actions.previous,
                          children: (0, r.jsx)(y, { "aria-hidden": !0, className: "rtl:rotate-180" }),
                        }),
                        (0, r.jsx)(h, {
                          type: "button",
                          color: "ghostActive",
                          size: "toolbar",
                          uniform: !0,
                          "aria-label": k(n.f.nextTemplates, { category: e.label }),
                          disabled: !b.model.canNext,
                          onClick: b.actions.next,
                          children: (0, r.jsx)(v, { "aria-hidden": !0, className: "rtl:rotate-180" }),
                        }),
                      ],
                    }),
                ],
              }),
            (0, r.jsxs)("div", {
              ref: M ? void 0 : b.actions.viewportRef,
              className: ["tortilla-gallery-tiles -m-2 min-w-0 gap-3 p-3", m].join(" "),
              "data-expanded": M,
              "data-portrait": P,
              children: [
                d,
                p && "loading" === e.templates.status
                  ? Array.from({ length: (P ? 5 : 4) - !!x }, (e, t) =>
                      (0, r.jsx)(
                        f,
                        { className: (0, i.A)("overflow-hidden rounded-xl", P ? "aspect-179/204" : "aspect-video") },
                        t,
                      ),
                    )
                  : T.map((e, t) => (0, r.jsx)(s.Fragment, { children: a(e) }, `${e.id}:${t}`)),
              ],
            }),
          ],
        })
      )
    }
    function m({ loading: e, model: t, actions: a }) {
      let { Button: s } = (0, o.O8)(),
        i = (0, o.oo)()
      return (0, r.jsxs)("div", {
        className: "tortilla-gallery-status flex min-h-56 flex-col items-center justify-center gap-3 text-center",
        children: [
          (0, r.jsx)("output", { children: i(e ? n.f.loading : n.f.error) }),
          !e &&
            t.canRetryLoadTemplates &&
            (0, r.jsx)(s, {
              size: "medium",
              type: "button",
              color: "secondary",
              disabled: t.isActionPending,
              onClick: () => {
                a.retryLoadTemplates(t.groups.find((e) => e.id === t.selectedGroupId) ?? null)
              },
              children: i(n.f.retry),
            }),
        ],
      })
    }
    function h(e, t) {
      return "function" == typeof e ? e(t) : (e ?? {})
    }
    function f(e, t, a) {
      return 1 === e.length ? (e[0]?.id ?? null) : null !== a && t.has(a) ? a : null
    }
    function g({ config: e, initialGroupId: t = null, selectedGroupId: a, initialTemplateId: r = null }) {
      let [o, n] = (0, s.useState)((1 === e.groups.length ? e.groups[0]?.id : t) ?? null),
        [i, c] = (0, s.useState)("idle"),
        [d, p] = (0, s.useState)(r),
        u = (0, s.useRef)({ mounted: !1, closed: !1, inFlight: !1, navigationVersion: 0 })
      ;(0, s.useLayoutEffect)(() => {
        let e = u.current
        return (
          (e.mounted = !0),
          () => {
            e.mounted = !1
          }
        )
      }, [])
      let m = new Map(),
        k = e.groups.map((e) => {
          if (m.has(e.id)) throw Error("Template gallery group IDs must be unique.")
          return (
            m.set(e.id, e),
            "ready" === e.templates.status
              ? { ...e, templates: { status: "ready", data: (0, l.C$)(e.templates.data, e.templateTypes) } }
              : e
          )
        }),
        w = k.flatMap((e) => ("ready" === e.templates.status ? e.templates.data : [])),
        b = f(k, m, void 0 === a ? o : a),
        y = (null === b ? null : m.get(b)) ?? null,
        v = h(e.callbacks, y)
      function P() {
        return u.current.mounted && !u.current.closed
      }
      function x() {
        P() && ((u.current.closed = !0), e.onClose())
      }
      async function M(t, a) {
        if (!P() || u.current.inFlight) return
        let r = (void 0 === a ? b : a?.id) ?? null,
          s = null === r ? null : m.get(r)
        if (void 0 === s) return
        let o = h(e.callbacks, s)[t]
        if (!o) return
        u.current.inFlight = !0
        let n = u.current.navigationVersion
        c("pending")
        try {
          ;((await o(s)) === "close" && u.current.navigationVersion === n && x(),
            P() && u.current.navigationVersion === n && c("idle"))
        } catch {
          P() && u.current.navigationVersion === n && c("error")
        } finally {
          u.current.inFlight = !1
        }
      }
      return {
        model: {
          groups: k,
          selectedGroupId: b,
          selectedTemplate: w.find((e) => e.id === d) ?? null,
          canCreateTemplate: void 0 !== v.onCreateTemplate,
          canRetryLoadTemplates: void 0 !== v.onRetryLoadTemplates,
          isActionPending: "pending" === i,
          hasActionError: "error" === i,
        },
        actions: {
          viewTemplate: (e) => {
            if (!P()) return
            let t = w.find((t) => t.id === e.id)
            t && (u.current.navigationVersion++, p(t.id), c("idle"))
          },
          back: () => {
            P() && (u.current.navigationVersion++, p(null), c("idle"))
          },
          selectGallery: (t) => {
            if (P()) {
              let r = f(k, m, t)
              ;(r !== b || null !== d) &&
                (u.current.navigationVersion++,
                p(null),
                c("idle"),
                r !== b && (void 0 === a && n(r), e.onGalleryGroupSelect?.((null === r ? null : m.get(r)) ?? null)))
            }
          },
          createTemplate: (e) => M("onCreateTemplate", e),
          retryLoadTemplates: (e) => M("onRetryLoadTemplates", e),
          close: x,
        },
      }
    }
    function k({
      open: e,
      contentProps: t,
      model: a,
      actions: i,
      card: l,
      detail: c,
      nodeBeforeTemplateList: u,
      nodeBeforeGroupTemplates: m,
      renderGroup: h,
      className: f,
    }) {
      let { Button: g, Dialog: w, icons: b } = (0, o.O8)(),
        y = b["chevron-left"],
        v = b.close,
        P = (0, o.oo)(),
        x = (0, s.useRef)(null),
        M = (0, s.useRef)(null),
        T = (0, s.useRef)(null),
        [j, C] = (0, s.useState)(!1),
        I = (0, s.useRef)(null),
        A = (0, s.useRef)(null),
        S = null !== a.selectedTemplate && void 0 !== c,
        N = a.groups.length > 1,
        q = (0, s.useCallback)(
          (e) => {
            let t = N ? Math.min(Math.max(e, 0), 68) : 0
            ;(x.current?.style.setProperty("--gallery-header-collapse", `${t}px`), C(e > 0))
          },
          [N],
        )
      if (
        ((0, s.useLayoutEffect)(() => {
          if (S) {
            let e = M.current?.ownerDocument.activeElement
            ;(e instanceof (M.current?.ownerDocument.defaultView?.HTMLElement ?? HTMLElement) &&
              M.current?.contains(e) &&
              !e.closest('[role="menu"]') &&
              (A.current = e),
              T.current?.focus())
          } else if (A.current) {
            let e = A.current
            ;((A.current = null), (e.isConnected ? e : M.current)?.focus({ preventScroll: !0 }))
          }
        }, [S]),
        (0, s.useLayoutEffect)(() => {
          ;(M.current &&
            ((M.current.scrollTop = Math.min(I.current ?? M.current.scrollTop, 68 * !!N)), q(M.current.scrollTop)),
            (I.current = null))
        }, [N, a.selectedGroupId, q]),
        !e)
      )
        return null
      let H = P(n.f.title),
        D = (0, r.jsxs)("header", {
          className: [
            "tortilla-gallery-header z-10 flex shrink-0 border-b bg-surface-elevated-secondary motion-safe:transition-colors motion-safe:duration-basic motion-safe:ease-out",
            S || j || !N ? "border-default" : "border-transparent",
          ].join(" "),
          children: [
            (0, r.jsxs)("div", {
              className: "min-w-0 flex-1",
              children: [
                (0, r.jsx)("div", {
                  className: [
                    "tortilla-gallery-title flex h-17 min-w-0 items-center overflow-hidden border-b ps-6 motion-safe:transition-colors motion-safe:duration-basic motion-safe:ease-out",
                    !S && N && !j ? "border-default" : "border-transparent",
                  ].join(" "),
                  style: !S && N ? { height: "calc(4.25rem - var(--gallery-header-collapse, 0px))" } : void 0,
                  children: S
                    ? (0, r.jsxs)(g, {
                        size: "dialogGhost",
                        type: "button",
                        color: "ghostActive",
                        onClick: i.back,
                        children: [(0, r.jsx)(y, { className: "rtl:rotate-180", "aria-hidden": !0 }), P(n.f.back)],
                      })
                    : (0, r.jsx)("h2", { className: "m-0 text-lg font-normal", children: H }),
                }),
                !S &&
                  N &&
                  (0, r.jsx)("div", {
                    className: "tortilla-gallery-toolbar flex h-17 min-w-0 items-center ps-6",
                    children: (0, r.jsx)(p, {
                      model: a,
                      actions: {
                        ...i,
                        selectGallery: (e) => {
                          ;(e !== a.selectedGroupId && M.current && (I.current = M.current.scrollTop),
                            i.selectGallery(e))
                        },
                      },
                    }),
                  }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: [
                "tortilla-gallery-header-actions flex h-17 shrink-0 items-center gap-2 self-start border-b bg-surface-elevated-secondary px-6 motion-safe:transition-colors motion-safe:duration-basic motion-safe:ease-out",
                !S && N && !j ? "border-default" : "border-transparent",
              ].join(" "),
              children: [
                !S &&
                  a.canCreateTemplate &&
                  (0, r.jsx)(g, {
                    type: "button",
                    color: "outlineGhost",
                    size: "dialog",
                    className: "tortilla-gallery-create shrink-0",
                    "aria-label": P(n.f.createTemplateAccessible),
                    disabled: a.isActionPending,
                    onClick: () => {
                      i.createTemplate()
                    },
                    children: P(n.f.createTemplate),
                  }),
                (0, r.jsx)(g, {
                  type: "button",
                  color: "ghostActive",
                  size: "entityHeader",
                  className: "tortilla-gallery-close",
                  "aria-label": P(n.f.close),
                  onClick: i.close,
                  children: (0, r.jsx)(v, { "aria-hidden": !0 }),
                }),
              ],
            }),
          ],
        })
      return (0, r.jsx)(w, {
        open: e,
        contentProps: t,
        title: H,
        size: "xxxwideTall",
        contentOverflow: "hidden",
        showDialogClose: !1,
        onOpenChange: (e) => {
          e || i.close()
        },
        children: (0, r.jsxs)("div", {
          ref: x,
          className: [
            "tortilla-gallery flex size-full min-h-0 min-w-0 flex-col overflow-hidden bg-surface-elevated-secondary text-(--color-text)",
            f,
          ]
            .filter(Boolean)
            .join(" "),
          children: [
            a.hasActionError &&
              (0, r.jsx)("p", {
                className: "tortilla-gallery-feedback m-0 px-4 py-3",
                role: "alert",
                children: P(n.f.actionError),
              }),
            a.isActionPending && (0, r.jsx)("output", { className: "sr-only", children: P(n.f.pending) }),
            D,
            (0, r.jsx)("section", {
              ref: M,
              hidden: S,
              className: "tortilla-gallery-browse min-h-0 flex-1 overflow-y-auto overscroll-y-none",
              "data-has-filters": a.groups.length > 1,
              "aria-label": P(n.f.title),
              tabIndex: -1,
              onScroll: (e) => {
                q(e.currentTarget.scrollTop)
              },
              onFocusCapture: (e) => {
                e.target.closest('[role="menu"]') || (A.current = e.target)
              },
              children: (0, r.jsxs)("div", {
                className: "box-content min-h-full",
                style: N ? { paddingTop: "var(--gallery-header-collapse, 0px)" } : void 0,
                children: [
                  u,
                  (0, r.jsx)(d, { model: a, actions: i, card: l, nodeBeforeGroupTemplates: m, renderGroup: h }),
                ],
              }),
            }),
            S &&
              a.selectedTemplate &&
              c &&
              (0, r.jsx)("section", {
                ref: T,
                tabIndex: -1,
                "aria-label": a.selectedTemplate.name,
                className: "tortilla-gallery-detail min-h-0 flex-1 overflow-y-auto",
                children: (0, r.jsx)(
                  "div",
                  { className: "tortilla-gallery-detail-body p-6", children: c(a.selectedTemplate) },
                  a.selectedTemplate.id,
                ),
              }),
          ],
        }),
      })
    }
  },
  BI6E(e, t, a) {
    var r = a("Qgfj")
    let s = (0, r.YK)({
        all: {
          id: "space.templates.create.prompt",
          defaultMessage:
            "Create a new template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
          description: "Composer prefill for creating a template without a selected file category",
        },
        site: {
          id: "home.artifactTemplates.createSite.prompt",
          defaultMessage:
            "Create a new site template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
          description: "Composer prefill for creating a site template from a reference file",
        },
        document: {
          id: "home.artifactTemplates.createDocument.prompt",
          defaultMessage:
            "Create a new document template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
          description: "Composer prefill for creating a document template from a reference file",
        },
        presentation: {
          id: "home.artifactTemplates.createPresentation.prompt",
          defaultMessage:
            "Create a new presentation template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
          description: "Composer prefill for creating a presentation template from a reference file",
        },
        spreadsheet: {
          id: "home.artifactTemplates.createSpreadsheet.prompt",
          defaultMessage:
            "Create a new spreadsheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
          description: "Composer prefill for creating a spreadsheet template from a reference file",
        },
      }),
      o = (0, r.YK)({
        page: {
          id: "space.pageTemplates.category",
          defaultMessage: "Pages",
          description: "Template browsing category for collaborative, auto-updating Pages in Space",
        },
        site: {
          id: "home.artifactTemplates.sites",
          defaultMessage: "Sites",
          description: "Title for the scoped Sites template picker",
        },
        document: {
          id: "home.artifactTemplates.documents",
          defaultMessage: "Documents",
          description: "Template browsing category",
        },
        presentation: {
          id: "home.artifactTemplates.presentations",
          defaultMessage: "Presentations",
          description: "Template browsing category",
        },
        spreadsheet: {
          id: "home.artifactTemplates.spreadsheets",
          defaultMessage: "Spreadsheets",
          description: "Template browsing category",
        },
      }),
      n = (0, r.YK)({
        customizeTemplatePrompt: {
          id: "artifactTemplate.customizePrompt",
          defaultMessage: "Help me customize a personal copy of {template} using {templateCreator}",
          description: "Composer prompt for editing a built-in or shared template by creating a personal copy",
        },
        editTemplatePrompt: {
          id: "artifactTemplate.resultCard.editPrompt",
          defaultMessage: "Help me make updates to {template} using {templateCreator}",
          description: "Composer prompt appended when editing an artifact template",
        },
      })
    a.d(t, {}, { T5: s, ho: n, xs: o })
  },
  IY5Q(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      o = a("m4Ym"),
      n = a("e7LJ"),
      i = a("on57"),
      l = a("Wf1j"),
      c = a("Sm6l"),
      d = a("JNtf"),
      p = a("mUDD"),
      u = a("bqtn"),
      m = a("HOLv"),
      h = a("bVeK"),
      f = a("X3K1"),
      g = a("BrP7"),
      k = a("zLIa"),
      w = a("OGl1"),
      b = a("yeh9"),
      y = a("vUg1"),
      v = a("isL5")
    let P = {
      Button: c.$,
      Input: ({ name: e, ...t }) => (0, r.jsx)(k.pd, { ...t, id: e, name: e }),
      Label: ({ htmlFor: e, ...t }) => (0, r.jsx)("label", { ...t, htmlFor: e }),
      Skeleton: ({ className: e }) => (0, r.jsx)(f.X, { as: "span", className: (0, i.A)("block", e), size: "custom" }),
      Dialog: function (e) {
        let t,
          a,
          o,
          n,
          i,
          l,
          c,
          u,
          m = (0, s.c)(16)
        ;(m[0] !== e
          ? (({ title: n, description: a, children: t, ...o } = e),
            (m[0] = e),
            (m[1] = t),
            (m[2] = a),
            (m[3] = o),
            (m[4] = n))
          : ((t = m[1]), (a = m[2]), (o = m[3]), (n = m[4])),
          m[5] !== n
            ? ((i = (0, r.jsx)(d.L3, { className: "sr-only", children: n })), (m[5] = n), (m[6] = i))
            : (i = m[6]))
        let h = a ?? n
        return (
          m[7] !== h
            ? ((l = (0, r.jsx)(d.rr, { className: "sr-only", children: h })), (m[7] = h), (m[8] = l))
            : (l = m[8]),
          m[9] !== t
            ? ((c = (0, r.jsx)(p.R4, { variant: "chatgpt", size: "full", children: t })), (m[9] = t), (m[10] = c))
            : (c = m[10]),
          m[11] !== o || m[12] !== i || m[13] !== l || m[14] !== c
            ? ((u = (0, r.jsxs)(d.lG, { ...o, children: [i, l, c] })),
              (m[11] = o),
              (m[12] = i),
              (m[13] = l),
              (m[14] = c),
              (m[15] = u))
            : (u = m[15]),
          u
        )
      },
      Tabs: g.t,
      Dropdown: { Root: u.Ab, Item: u.ms.Item },
      icons: {
        templateCreator: (e) => (0, r.jsx)(m.I, { asset: o.e, ...e }),
        close: h.P9U,
        "chevron-left": h.KBq,
        "chevron-right": h.j1b,
        more: h.e4G,
        plus: h.ONy,
        shapes: h.jrs,
        "category-document": h.o_G,
        "category-presentation": h.jXf,
        "category-spreadsheet": h.NSE,
        "category-site": h.cfl,
        site: h.cfl,
        document: w.Ug.artifactDocument,
        presentation: w.Ug.presentation,
        spreadsheet: w.Ug.spreadsheet,
        "google-docs": b.A,
        "google-slides": v.A,
        "google-sheets": y.A,
      },
    }
    a.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            a = (0, s.c)(3),
            { children: o } = e,
            i = (0, l.A)()
          return (
            a[0] !== o || a[1] !== i.formatMessage
              ? ((t = (0, r.jsx)(n.Dp, { ui: P, formatMessage: i.formatMessage, children: o })),
                (a[0] = o),
                (a[1] = i.formatMessage),
                (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
  jG6n(e, t, a) {
    var r = a("zTeN"),
      s = a("ASxG"),
      o = a("W0tK"),
      n = a("fXhT"),
      i = a("OWtl"),
      l = a("J9bg"),
      c = a("Kw4a")
    let d = ["to-do-list", "project-tracker"],
      p = (0, r.un)(i.u, ({ get: e }) => (e(c.wu) ? e(l.S, "4051280260") : void 0)),
      u = (0, r.un)(i.u, ({ get: e }) => (e(c.ou) ? e(l.S, "4051280260") : void 0)),
      m = s.object({
        submitLabel: s.string().trim().min(1).optional(),
        preparingLabel: s.string().trim().min(1).optional(),
        freeformPlaceholder: s.string().trim().min(1).optional(),
        questions: s
          .array(
            s.object({
              question: s.string().trim().min(1),
              answerLabel: s.string().trim().min(1),
              isOther: s.boolean().optional(),
              options: s
                .array(s.object({ id: s.string().trim().min(1), value: s.string().trim().min(1) }))
                .refine(
                  (e) => new Set(e.map(({ id: e }) => e)).size === e.length,
                  "Each option ID in a question must be unique",
                ),
            }),
          )
          .min(1),
      }),
      h = s.object({
        id: s.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: s.string().trim().min(1),
        prompt: s.string().trim().min(1),
        prefillPrompt: s.string().trim().min(1),
        previewMarkdown: s.string().trim().min(1).optional(),
        previewDocument: s
          .array(s.object({ kind: s.literal("markdown"), markdown: s.string().trim().min(1), layout: n.wS.optional() }))
          .min(1)
          .optional(),
        setupQuestion: s.string().trim().min(1).nullish(),
        followUp: m.nullish(),
      }),
      f = s.array(h.partial({ title: !0, prompt: !0, prefillPrompt: !0, previewMarkdown: !0 })),
      g = s
        .array(s.string())
        .min(4)
        .max(10)
        .refine((e) => new Set(e).size === e.length && d.every((t) => e.includes(t))),
      k = s.object({
        templates: f.optional(),
        templatesByLocale: s.record(s.string().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/), f).optional(),
      })
    a.d(
      t,
      {},
      {
        CQ: g,
        Hs: function (e, t) {
          let a = k.safeParse(t)
          if (!a.success) return
          if (a.data.templates?.length === 0) return []
          let r = (0, o.bW)(e) ?? "en",
            s = r.split("-")[0],
            n =
              a.data.templatesByLocale?.[r] ?? a.data.templatesByLocale?.[s] ?? ("en" === s ? a.data.templates : void 0)
          if (null != n && new Set(n.map(({ id: e }) => e)).size === n.length) return n
        },
        WN: u,
        ql: p,
        xN: f,
        z4: h,
      },
    )
  },
  dUuO(e, t, a) {
    var r = a("bRXx"),
      s = a("Qgfj"),
      o = a("jG6n")
    let n = o.z4.required({ previewDocument: !0 }).array()
    function i(e) {
      let t = e.flatMap((e) => (0, r.CyG)(e.markdown).map((t) => ({ ...e, markdown: t })))
      return { previewMarkdown: t.map(({ markdown: e }) => e).join("\n\n"), previewDocument: t }
    }
    let l = (0, s.YK)({
      todoPrefillPrompt: {
        id: "space.pageTemplates.todo.prefill.sourceAware",
        defaultMessage:
          "Help me turn this Page into my to-do list. Check relevant conversations and connected apps you can access for things I need to do. If you can’t find enough, ask me what to add. Replace the sample tasks, keep the checkboxes and any edits I’ve made, and don’t invent tasks or deadlines.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the To-do list template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing tasks, and preserve user edits while replacing sample content.",
      },
      projectTrackerPrefillPrompt: {
        id: "space.pageTemplates.projectTracker.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page a tracker for my project. Use relevant conversations and connected apps you can access to find milestones and tasks, and ask me for anything missing. Replace the examples, keep my edits, and don’t guess at owners, dates, or statuses.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Project tracker template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing details, and preserve user edits while replacing examples.",
      },
      weeklyUpdatePrefillPrompt: {
        id: "space.pageTemplates.weeklyUpdate.prefill.sourceAware",
        defaultMessage:
          "Help me write this week’s update on this Page. Look for progress, blockers, and next steps in relevant conversations and connected apps you can access. Ask which project or week I mean if it’s unclear, and don’t make up accomplishments.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Weekly update template. It asks ChatGPT to use only accessible conversations and connected apps, clarify an ambiguous project or week, and avoid invented accomplishments.",
      },
      feedbackPrefillPrompt: {
        id: "space.pageTemplates.feedback.prefill.sourceAware",
        defaultMessage:
          "Help me organize feedback on this Page. Use relevant conversations and connected apps you can access to find feedback. Ask what product or topic to focus on if it’s unclear, replace the examples with what you find, and don’t invent feedback.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Feedback tracker template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the topic, and replace examples without inventing feedback.",
      },
      releaseNotesPrefillPrompt: {
        id: "space.pageTemplates.releaseNotes.prefill.sourceAware",
        defaultMessage:
          "Help me write release notes on this Page. Check relevant conversations and connected apps you can access for confirmed changes and limitations. Ask which release I mean if it’s unclear, and don’t add unconfirmed details or publish anything.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Release notes template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the release, and avoid unconfirmed details or publishing.",
      },
      projectHomePrefillPrompt: {
        id: "space.pageTemplates.projectHome.prefill.sourceAware",
        defaultMessage:
          "Help me set up this Project Home Page. Use relevant conversations and connected apps you can access for the project’s goals, team, milestones, and links. Ask me for anything missing, keep my edits, and don’t make up owners or dates.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Project Home template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing project details, and preserve user edits.",
      },
      faqPrefillPrompt: {
        id: "space.pageTemplates.faq.prefill.sourceAware",
        defaultMessage:
          "Help me make an FAQ on this Page. Look for trusted answers in relevant conversations and connected apps you can access. Ask who it’s for and what it’s about if unclear, and leave anything unverified as an open question.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the FAQ template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the audience and topic, and leave unverified answers open.",
      },
      customPrefillPrompt: {
        id: "space.pageTemplates.custom.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page my own. Use relevant conversations and connected apps you can access, and ask me what I want to add if it’s unclear. Keep my edits and don’t fill in details you can’t verify.",
        description:
          "Fallback unsent draft in the native Page chat composer for a non-Work user choosing a configured Page template without its own prefill prompt. It asks ChatGPT to use only accessible conversations and connected apps, clarify intent, and preserve user edits.",
      },
      weeklyUpdate: {
        id: "space.pageTemplates.weeklyUpdate.title",
        defaultMessage: "Weekly update",
        description: "Title of the native Weekly update Page template",
      },
      weeklyUpdatePrompt: {
        id: "space.pageTemplates.weeklyUpdate.setup",
        defaultMessage: `Check my relevant connected apps and create a weekly update suitable for sharing with cross-functional partners, stakeholders, and executives.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a weekly update Page for cross-functional partners, stakeholders, and executives. Preserve the instructions to verify sources, keep user edits, and ask only essential questions.",
      },
      releaseNotes: {
        id: "space.pageTemplates.releaseNotes.title",
        defaultMessage: "Release notes",
        description: "Title of the native Release notes Page template",
      },
      releaseNotesPrompt: {
        id: "space.pageTemplates.releaseNotes.setup",
        defaultMessage: `Check my relevant connected apps and create release notes. Ask which project I would like to create release notes for.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a release notes Page. Ask which project to cover. Preserve the instructions to verify sources, keep user edits, and use comments only when input is needed.",
      },
      projectHome: {
        id: "space.pageTemplates.projectHome.title",
        defaultMessage: "Project Home",
        description: "Title of a native Page template organizing project context and resources",
      },
      projectHomePrompt: {
        id: "space.pageTemplates.projectHome.setup",
        defaultMessage: `Help me make this Project Home my own. Start working directly in the Page without a setup interview or waiting for confirmation. Choose a project from available context and begin filling it in; the user can redirect you afterward.

If the Page has an Instructions section, collapse it before adding content so it does not push the useful content below the chat, and keep it collapsed when you finish. If that section exists but the available controls cannot change its collapsed state, say so briefly; do not claim it is collapsed. If there is no Instructions section, continue without creating one or mentioning its absence.

Make sure the Page has a title. If it is untitled, use “Project Home” initially. Preserve an existing title and any user edits.

Before searching connected sources, add an editable starting structure with two sections: Project overview and Essential resources. Include supported details already available in context. Keep this first version compact and useful, without a wall of empty headings or repeated placeholders. Send this brief chat message: “I’m filling in your Project Home. You can edit any section while I work.”

Choose the most relevant project using your best judgment. Prioritize context attached to this Page or its current Space, then recent conversations and project activity. If several projects are plausible, pick the strongest candidate and treat it as a working assumption. Do not stop to ask which project to use or wait for approval before filling in supported details. Choose a real project supported by context; do not invent one. If the initial context provides no candidate, search recent connected sources for one.

Leave one comment explaining the choice: “I picked [project] based on [context] and started filling in this Page. If you’d like a different project, reply here with its name or a source and I’ll switch.”

Prefer anchoring this comment to the Page title. If title comments are unsupported, use the first existing content section outside Instructions. If supported, open and focus the comment so it is visible above the chat. Do not claim it is open or focused unless verified. Do not create body content solely to anchor the comment, and do not repeat the project-selection question in the body.

Continue working immediately after leaving the comment. Use the project’s Slack channel, relevant emails, project notes, and links to fill in the Page incrementally. Write useful findings as you find them instead of waiting until all research is complete. Add short, scannable sections as evidence becomes available:

- Project overview: what we’re building, who it’s for, and why it matters
- Team and responsibilities
- Essential resources
- Recent updates
- Upcoming milestones
- Decisions and open questions
- A short guide for someone joining

Cite sources near the claims they support. Prioritize recent sources for status and milestones, and include relevant dates. Distinguish confirmed decisions from proposals, and commitments from completed work. Flag conflicting information rather than silently choosing one version. Do not invent facts or sample records. Keep detailed tasks in a linked tracker if one exists.

Use Open questions only for substantive project unknowns. Label these “Needs input” or “Not yet found” where useful. Do not create an Open questions section to ask which project to use. If no real project can be found after a reasonable search, preserve the starting structure and explain the missing context in the single comment rather than fabricating a project.

Use Page comments for focused questions and assumptions. Prefer the title, or the first existing content section outside Instructions if title comments are unsupported. Refer to the relevant section in the comment instead of anchoring questions farther down the Page. Ask only what is needed to move forward, and continue supported work while awaiting answers. If a relevant app isn’t connected, offer to connect it and continue with available sources.

When input would help, add one brief, contextual invitation in comments or chat: “Add a project brief here with @, or type @ChatGPT, select it from the Page’s mention menu, and ask me to use a different project. Use / to add content to the Page.” Adapt the example to the actual gap. Do not repeat this guidance in the Page body.

Write using native Page blocks. Check current content before replacing anything, and preserve edits the user makes while you work. When the user names a different project or provides new context, update the relevant sections, revise the choice comment, and remove obsolete content, resolved questions, and unnecessary hints.

Keep chat replies brief and focused on the next step. Do not repeat Page content in chat. Do not imply that the Page is being monitored or updated continuously. Do not send messages or configure recurring updates without asking first.`,
        description:
          "Setup prompt automatically submitted in the new Project Home Page's chat after the user selects its template. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      projectTracker: {
        id: "space.pageTemplates.projectTracker.title",
        defaultMessage: "Project tracker",
        description: "Title of a native Page template tracking project tasks and milestones",
      },
      projectTrackerPrompt: {
        id: "space.pageTemplates.projectTracker.setup",
        defaultMessage: `Check my relevant connected apps and create a project tracker. Automatically update every morning at 6am in my browser time zone.

Include checkboxes to the left of the milestones and tasks in the table. This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a project tracker Page, including checkbox tables and daily updates at 6 a.m. in the browser time zone. Preserve the instructions to verify sources and keep user edits.",
      },
      todo: {
        id: "space.pageTemplates.todo.title",
        defaultMessage: "To-do list",
        description: "Title of a native Page template for personal tasks across projects",
      },
      todoPrompt: {
        id: "space.pageTemplates.todo.setup",
        defaultMessage: `Check my relevant connected apps and create a to-do checklist. Automatically update every morning at 6am in my browser time zone: check off completed tasks for me, and carry forward incomplete tasks to the next day.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. Do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a personal to-do Page, including daily updates at 6 a.m. in the browser time zone. Preserve the distinction between illustrative tasks and verified user information.",
      },
      feedback: {
        id: "space.pageTemplates.feedback.title",
        defaultMessage: "Feedback tracker",
        description: "Title of a native Page template collecting feedback and summarizing recurring issues",
      },
      feedbackPrompt: {
        id: "space.pageTemplates.feedback.setup",
        defaultMessage: `Check my relevant connected apps and create a feedback tracker. Ask which project I would like to track feedback for. Automatically update every morning at 6am in my browser time zone.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a feedback tracker Page. Ask which project to track and update daily at 6 a.m. in the browser time zone. Preserve the instructions to verify sources and keep user edits.",
      },
      faq: {
        id: "space.pageTemplates.faq.title",
        defaultMessage: "FAQ",
        description: "Title of a native Page template for frequently asked questions and source-backed answers",
      },
      faqPrompt: {
        id: "space.pageTemplates.faq.setup",
        defaultMessage:
          "Help me make this FAQ my own. Ask for the topic, audience and trusted source notes or links, including relevant Slack discussions and approved guidance. Offer to connect relevant apps when needed. Build the most useful questions with concise supported answers and source links. Combine equivalent questions, keep unanswered or disputed questions visible with an owner or next decision, and keep material freshness qualifiers beside the answers they affect. Link a separate feedback tracker if I have one. Write directly into this Page using native Page blocks, preserving its title and my edits. Do not invent answers or treat unconfirmed replies as authoritative guidance. Keep source-channel replies unsent and automatic updates unconfigured unless I ask to set them up. Ask only the setup questions needed to proceed. Keep chat replies brief and focused on the next step. Organize the Page into short, scannable sections with actionable details. Don't repeat Page content in chat.",
        description:
          "Setup prompt automatically submitted in the new FAQ Page's chat after the user selects its template",
      },
    })
    a.d(
      t,
      {},
      {
        l: function (e, t) {
          let a = (0, o.Hs)(e.locale, t)
          if (a?.length === 0) return []
          let r = { kind: "icon", value: "book", color: "black" },
            s = [
              {
                id: "to-do-list",
                symbol: { kind: "icon", value: "logs", color: "green" },
                title: e.formatMessage(l.todo),
                prompt: e.formatMessage(l.todoPrompt),
                prefillPrompt: e.formatMessage(l.todoPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.todo.preview",
                      defaultMessage: `## Today

### Top priorities

- [ ] Run propulsion test

- [ ] Verify course calculations

- [ ] Inspect fuel tanks

### If time allows

- [ ] Inspect radiation shields

- [ ] Test communication systems

- [ ] Write status report`,
                      description:
                        "Illustrative Markdown for the To-do list template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "project-tracker",
                symbol: { kind: "icon", value: "bar-chart", color: "blue" },
                title: e.formatMessage(l.projectTracker),
                prompt: e.formatMessage(l.projectTrackerPrompt),
                prefillPrompt: e.formatMessage(l.projectTrackerPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.attentionHeading",
                      defaultMessage: "## 🔴 Needs immediate attention",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.attention",
                      defaultMessage: "- Communication systems test for launch",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.milestonesHeading",
                      defaultMessage: "## ⛰️ Milestones",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage(
                      {
                        id: "space.pageTemplates.projectTracker.preview.milestonesCheckboxes",
                        defaultMessage: `| Milestone | Status |
| - | - |
| '<ul><li data-checked="false"><p>'Project brief'</p></li></ul>' | Complete |
| '<ul><li data-checked="false"><p>'Prototype review'</p></li></ul>' | In progress |
| '<ul><li data-checked="false"><p>'Launch readiness'</p></li></ul>' | Upcoming |`,
                        description:
                          "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and the ICU-quoted HTML checkbox markup and data-checked attributes; translate only the visible text.",
                      },
                      {},
                    ),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.tasksHeading",
                      defaultMessage: "## ✅ Tasks",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage(
                      {
                        id: "space.pageTemplates.projectTracker.preview.tasksCheckboxes",
                        defaultMessage: `| Task | Owner | Status |
| - | - | - |
| '<ul><li data-checked="false"><p>'Confirm scope'</p></li></ul>' | Product | Done |
| '<ul><li data-checked="false"><p>'Review designs'</p></li></ul>' | Design | In progress |
| '<ul><li data-checked="false"><p>'Test the core flow'</p></li></ul>' | Engineering | Next |
| '<ul><li data-checked="false"><p>'Prepare launch notes'</p></li></ul>' | Marketing | Next |`,
                        description:
                          "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and the ICU-quoted HTML checkbox markup and data-checked attributes; translate only the visible text.",
                      },
                      {},
                    ),
                  },
                ],
              },
              {
                id: "weekly-update",
                symbol: { kind: "icon", value: "writing", color: "pink" },
                title: e.formatMessage(l.weeklyUpdate),
                prompt: e.formatMessage(l.weeklyUpdatePrompt),
                prefillPrompt: e.formatMessage(l.weeklyUpdatePrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.weeklyUpdate.preview",
                      defaultMessage: `## ✨ Highlights

- Progress made

## ☝️ Needs attention

- Blockers and decisions needing input

## ▶️ Next week

- Upcoming milestones and confirmed commitments

## 🔗 Sources

- Links to sources`,
                      description:
                        "Illustrative Markdown for the Weekly update template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "feedback-tracker",
                symbol: { kind: "icon", value: "edit", color: "red" },
                title: e.formatMessage(l.feedback),
                prompt: e.formatMessage(l.feedbackPrompt),
                prefillPrompt: e.formatMessage(l.feedbackPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.themesHeading",
                      defaultMessage: "## 🔎 Top themes",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.onboardingTheme",
                      defaultMessage: "1. Make onboarding easier to follow",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.navigationTheme",
                      defaultMessage: "2. Help people find the right resource",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.sharingTheme",
                      defaultMessage: "3. Clarify what happens after sharing",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.registerHeading",
                      defaultMessage: "## 🗂️ Feedback register",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.register",
                      defaultMessage: `| Theme | Source | Next step |
| - | - | - |
| Onboarding | Research notes | Review the first-run flow |
| Navigation | Team channel | Group related resources |
| Sharing | Support email | Clarify confirmation copy |`,
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.summaryHeading",
                      defaultMessage: "## 📝 Summary",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.summary",
                      defaultMessage:
                        "People need clearer guidance at key moments. Start with onboarding, then review navigation and sharing.",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.followupsHeading",
                      defaultMessage: "## ▶️ Follow-ups",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.followups",
                      defaultMessage: "- Schedule user interviews for next week",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "release-notes",
                symbol: r,
                title: e.formatMessage(l.releaseNotes),
                prompt: e.formatMessage(l.releaseNotesPrompt),
                prefillPrompt: e.formatMessage(l.releaseNotesPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.releaseNotes.preview",
                      defaultMessage: `## 🆕 New

- New capabilities and who can use them

## 🏆 Improvements

- Changes to existing workflows

## 🛠️ Fixes

- Resolved issues and their impact

## 🌐 Availability

- Supported platforms, rollout status, and known limitations.

## 🔗 Sources

- Links to sources`,
                      description:
                        "Illustrative Markdown for the Release notes template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "project-home",
                symbol: r,
                title: e.formatMessage(l.projectHome),
                prompt: e.formatMessage(l.projectHomePrompt),
                prefillPrompt: e.formatMessage(l.projectHomePrefillPrompt),
                setupQuestion: e.formatMessage({
                  id: "space.pageTemplates.projectHome.question",
                  defaultMessage: "Which project is this for, and which sources should I use?",
                  description:
                    "Immediate setup question for a Project Home Page; the answer identifies the project and permitted source material",
                }),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectHome.preview.intro",
                      defaultMessage: `One place for the team, the plan, and what comes next.

## Overview
Make the next product launch simple, coordinated, and easy to follow.

## Team`,
                      description:
                        "Illustrative intro content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectHome.preview.team",
                      defaultMessage: `| Responsibility | Team |
| --- | --- |
| Project lead | Product |
| Experience | Design |
| Delivery | Engineering |`,
                      description:
                        "Illustrative team content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectHome.preview.ending",
                      defaultMessage: `## Milestones
- Align on the plan
- Review the first prototype
- Prepare the launch

## Key resources
- Project brief and goals
- Decisions from the team channel
- Research notes and launch checklist

## Latest update
The brief is ready for review. Next up: confirm owners and milestones.`,
                      description:
                        "Illustrative ending content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.",
                    }),
                  },
                ],
              },
              {
                id: "faq",
                symbol: r,
                title: e.formatMessage(l.faq),
                prompt: e.formatMessage(l.faqPrompt),
                prefillPrompt: e.formatMessage(l.faqPrefillPrompt),
                setupQuestion: e.formatMessage({
                  id: "space.pageTemplates.faq.question",
                  defaultMessage: "What topic and audience is this FAQ for, and which sources should I use?",
                  description:
                    "Immediate setup question for an FAQ Page; the answer identifies the topic, intended audience and trusted source material",
                }),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.faq.preview",
                      defaultMessage: `Shared answers, grounded in the team's knowledge.

## Getting started
### Where should I start?
Read the project brief for goals, scope, and the people involved.

### Where can I find the latest plan?
The Project Home brings together milestones, resources, and recent decisions.

## Working together
### How do I share feedback?
Add the source discussion and a clear next step to the feedback tracker.

### How are decisions recorded?
Keep the decision, its owner, and supporting context together.

## Open questions
- Who owns the next review?
- Which resources need an update?

## Sources
Project notes, team discussions, and approved guidance.`,
                      description:
                        "Illustrative Markdown for the FAQ thumbnail and initial Page content. Fictional questions and answers, not approved guidance. Preserve Markdown headings and lists.",
                    }),
                  },
                ],
              },
            ],
            c = () =>
              s
                .filter(({ id: e }) => "project-home" !== e && "faq" !== e)
                .map((e) => ({ ...e, ...i(e.previewDocument) }))
          if (null == a) return c()
          let d = n.safeParse(
            a.map((t) => {
              let a = s.find(({ id: e }) => e === t.id),
                r = null == t.prompt ? a?.setupQuestion : void 0,
                o =
                  t.prefillPrompt ??
                  (null == t.prompt ? a?.prefillPrompt : void 0) ??
                  e.formatMessage(l.customPrefillPrompt)
              return {
                ...a,
                ...t,
                prefillPrompt: o,
                previewDocument:
                  t.previewDocument ??
                  (null == t.previewMarkdown
                    ? a?.previewDocument
                    : [{ kind: "markdown", markdown: t.previewMarkdown }]),
                setupQuestion: void 0 !== t.setupQuestion ? t.setupQuestion : r,
              }
            }),
          )
          return d.success
            ? d.data.map((e) => ({
                ...e,
                symbol: s.find(({ id: t }) => t === e.id)?.symbol ?? r,
                ...i(e.previewDocument),
              }))
            : c()
        },
      },
    )
  },
  o72y(e, t, a) {
    var r = a("zTeN"),
      s = a("DBCl"),
      o = a("SPnB"),
      n = a("eFn4"),
      i = a("Ghh3"),
      l = a("e1xH"),
      c = a("pyoT"),
      d = a("OWtl"),
      p = a("JYRT")
    let u = (0, r.un)(d.u, ({ get: e }) => e(l.pagesEnabled$) && "allowed" === e(n.lN).status),
      m = (0, r.RD)(d.u, ({ get: e, scope: t }) => {
        let a = e(c.spaceAccountId$),
          r = e(o.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["space", "personalized-pages", a, r],
          enabled: e(u) && null != a && null != r,
          staleTime: 6e4,
          gcTime: 0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == a || null == r) throw Error("space_account_unavailable")
            let o = (0, c.watchSpaceAccount)(t, a, r),
              n = AbortSignal.any([e, o.signal])
            try {
              let e = await i.Request.safeGet("/pages/suggestions", {
                additionalHeaders: { "ChatGPT-Account-ID": a, [s.zBc]: a },
                signal: n,
              })
              return (n.throwIfAborted(), e)
            } finally {
              o.stop()
            }
          },
        }
      }),
      h = (0, r.A4)(
        d.u,
        (e) => Date.parse(e) > Date.now(),
        (e, { set: t }) => {
          let a,
            r = () => {
              let s = Date.parse(e) - Date.now()
              ;(t(s > 0), s > 0 && (a = setTimeout(r, Math.min(s, 0x7fffffff))))
            }
          return (r(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      f = (0, r.i1)(d.u, (e, { get: t }) => {
        if (!t(u)) return
        let a = t(p.X, "3798925676")
        if (a?.value["getting-started" === e ? "show_in_getting_started" : "show_in_template_modal"] !== !0) return
        let r = t(m)
        return r.isSuccess ? r.data.suggestions.filter((e) => t(h, e.expires_at)).slice(0, 3) : void 0
      }),
      g = (0, r.un)(
        d.u,
        ({ get: e }) => e(u) && e(p.X, "3798925676")?.value.show_in_template_modal === !0 && e(m).isLoading,
      )
    a.d(t, {}, { BE: g, fH: u, ps: m, x5: f })
  },
  J9bg(e, t, a) {
    var r = a("D7Ms"),
      s = a("zTeN"),
      o = a("OWtl"),
      n = a("EWIu"),
      i = a("JYRT"),
      l = a("OMIV")
    let c = (0, s.vU)(o.u, (e, { get: t }) => {
        let a = t(l.M9),
          s = t(i.X, e)
        return {
          queryKey: ["deferred-statsig-config", e, a?.getContext().user, s?.__evaluation],
          queryFn: null == a ? r.hT : () => (0, n.d1)(a, e),
          staleTime: 1 / 0,
          retry: 2,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          refetchOnReconnect: !0,
        }
      }),
      d = (0, s.i1)(o.u, (e, { get: t }) => {
        let a = t(l.M9),
          r = t(i.X, e)
        return (0, n.tA)(a, e) ? t(c, e).data : r
      })
    a.d(t, {}, { S: d })
  },
  EWIu(e, t, a) {
    a.d(
      t,
      {},
      {
        Ex: function (e, t) {},
        d1: async function (e, t) {
          return e.getDynamicConfig(t)
        },
        tA: function (e, t) {
          return !1
        },
      },
    )
  },
  m4Ym(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "shapes-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 0.935059, y: 1.118164, width: 10.2146, height: 9.833862 },
        visualBounds: { x: 0.935059, y: 1.118164, width: 10.2146, height: 9.833862 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.935059, y: 1.118164, width: 10.2146, height: 9.833862 },
        center: { x: 6.042359, y: 6.035095 },
        insets: { top: 1.118164, right: 0.850341, bottom: 1.047974, left: 0.935059 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6.042359, y: 6.035095 }, foreground: { x: 6.042359, y: 6.035095 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.50504 6.52352C2.95415 6.07507 3.68211 6.07474 4.13102 6.52352L5.36344 7.75692C5.81224 8.20596 5.81222 8.93384 5.36344 9.38289L4.13102 10.6153C3.68199 11.0643 2.95416 11.0642 2.50504 10.6153L1.27164 9.38289C0.822781 8.9339 0.822947 8.20601 1.27164 7.75692L2.50504 6.52352ZM3.56559 7.08992C3.42899 6.95332 3.20717 6.95349 3.07047 7.08992L1.83805 8.32235C1.70136 8.45903 1.70136 8.68078 1.83805 8.81746L3.07047 10.0499C3.20717 10.1863 3.42898 10.1865 3.56559 10.0499L4.79801 8.81746C4.93437 8.68083 4.93439 8.45897 4.79801 8.32235L3.56559 7.08992Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9191 6.6827C10.5541 6.68281 11.0685 7.19803 11.0685 7.83309V9.68465C11.0684 10.3196 10.5541 10.834 9.9191 10.8341H8.06754C7.43248 10.8341 6.91726 10.3197 6.91715 9.68465V7.83309C6.91715 7.19796 7.43241 6.6827 8.06754 6.6827H9.9191ZM8.06754 7.48348C7.87424 7.48348 7.71793 7.63979 7.71793 7.83309V9.68465C7.71805 9.87785 7.87431 10.0343 8.06754 10.0343H9.9191C10.1122 10.0341 10.2686 9.87778 10.2687 9.68465V7.83309C10.2687 7.63986 10.1123 7.48359 9.9191 7.48348H8.06754Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99332 1.15242C10.1844 1.15247 11.1496 2.11853 11.1496 3.30965C11.1495 4.50073 10.1844 5.46586 8.99332 5.4659C7.8022 5.4659 6.83614 4.50076 6.83609 3.30965C6.83609 2.11851 7.80218 1.15242 8.99332 1.15242ZM8.99332 1.95321C8.24401 1.95321 7.63688 2.56033 7.63688 3.30965C7.63692 4.05893 8.24403 4.6661 8.99332 4.6661C9.74257 4.66605 10.3497 4.0589 10.3498 3.30965C10.3498 2.56036 9.7426 1.95325 8.99332 1.95321Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53727 1.57039C2.88314 0.967491 3.75303 0.967351 4.09879 1.57039L5.45914 3.94442C5.80287 4.5442 5.36999 5.29155 4.67887 5.29207H1.95719C1.26569 5.29207 0.832208 4.54439 1.17594 3.94442L2.53727 1.57039ZM3.40445 1.96785C3.36603 1.90113 3.26915 1.90124 3.23063 1.96785L1.87027 4.34188C1.83207 4.40854 1.88035 4.49227 1.95719 4.49227H4.67887C4.75528 4.49175 4.80289 4.40833 4.76481 4.34188L3.40445 1.96785Z" fill="currentColor"/>',
    })
    a.d(t, {}, { e: r })
  },
}
//# sourceMappingURL=250096.e442cfa561.js.map
