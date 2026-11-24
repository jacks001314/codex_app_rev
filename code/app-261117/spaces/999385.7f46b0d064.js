export const __rspack_esm_ids = [999385]
export const __webpack_modules__ = {
  wwds(e, a, t) {
    var s = t("zd8w")
    t.d(
      a,
      {},
      {
        g: function () {
          let [e, a] = (0, s.useState)(null),
            [t, n] = (0, s.useState)({ canPrevious: !1, canNext: !1 })
          ;(0, s.useLayoutEffect)(() => {
            if (!e) return
            let a = () => {
              let a = Math.max(0, e.scrollWidth - e.clientWidth),
                t = Math.min(a, Math.abs(e.scrollLeft)),
                s = t > 1,
                r = t < a - 1
              n((e) => (e.canPrevious === s && e.canNext === r ? e : { canPrevious: s, canNext: r }))
            }
            ;(a(), e.addEventListener("scroll", a, { passive: !0 }))
            let t = new ResizeObserver(a),
              s = () => {
                for (let a of (t.disconnect(), t.observe(e), e.children)) t.observe(a)
                a()
              },
              r = new MutationObserver(s)
            return (
              r.observe(e, { childList: !0 }),
              s(),
              () => {
                ;(e.removeEventListener("scroll", a), t.disconnect(), r.disconnect())
              }
            )
          }, [e])
          let r = (0, s.useCallback)(
            (a) => {
              if (!e) return
              let t = e.ownerDocument.defaultView,
                s = t?.getComputedStyle(e).direction === "rtl"
              e.scrollBy({
                left: a * (s ? -1 : 1) * e.clientWidth * 0.85,
                behavior: t?.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
              })
            },
            [e],
          )
          return { model: t, actions: { viewportRef: a, previous: () => r(-1), next: () => r(1) } }
        },
      },
    )
  },
  RiLA(e, a, t) {
    let s = (0, t("Qgfj").YK)({
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
        defaultMessage: "Working\u2026",
        description:
          "Screen-reader status in the template gallery while the selected host action is pending. The user may still close the dialog.",
      },
    })
    t.d(a, {}, { f: s })
  },
  RB8A(e, a, t) {
    t.d(a, { mM: () => c, ON: () => p, _Y: () => w, yS: () => f })
    var s = t("ABep"),
      n = t("zd8w"),
      r = t("e7LJ"),
      o = t("RiLA"),
      i = t("on57"),
      l = t("SIrB"),
      d = t("wwds")
    function c({ model: e, actions: a, card: t, nodeBeforeGroupTemplates: l, renderGroup: d, inset: p = !0 }) {
      let g = (0, r.oo)(),
        h = null === e.selectedGroupId ? e.groups : e.groups.filter((a) => a.id === e.selectedGroupId),
        f = new Map(h.map((e) => [e.id, d?.(e)])),
        w = [...f.values()].some((e) => null != e),
        k = h.some((e) => "loading" === e.templates.status),
        y = h.some((e) => "error" === e.templates.status),
        v = !h.some((e) => "ready" === e.templates.status && e.templates.data.length > 0)
      return (0, s.jsxs)("div", {
        className: "flex min-h-full flex-col",
        children: [
          k && (0, s.jsx)("output", { className: "sr-only", children: g(o.f.loading) }),
          (0, s.jsxs)("div", {
            className: (0, i.A)(
              "tortilla-gallery-card-groups min-h-0 shrink-0 grow",
              p && "p-6 [@media(max-width:48rem)]:px-4",
            ),
            children: [
              !k && y && (0, s.jsx)(u, { loading: !1, model: e, actions: a }),
              !k &&
                !y &&
                v &&
                !w &&
                (0, s.jsxs)("div", {
                  className:
                    "tortilla-gallery-status flex min-h-56 flex-col items-center justify-center gap-3 text-center",
                  children: [
                    (0, s.jsx)("output", { children: g(o.f.empty) }),
                    e.canCreateTemplate && (0, s.jsx)("p", { className: "m-0", children: g(o.f.emptyDescription) }),
                  ],
                }),
              (k || (!y && !v) || l || w) &&
                (0, s.jsx)("div", {
                  className: "tortilla-gallery-groups flex min-w-0 flex-col gap-9",
                  "aria-busy": k || void 0,
                  children: h.map((a) =>
                    (0, s.jsx)(
                      n.Fragment,
                      {
                        children:
                          f.get(a.id) ??
                          (0, s.jsx)(m, {
                            group: a,
                            model: e,
                            card: t,
                            nodeBeforeTemplates: l?.(a),
                            showTemplates: k || (!y && !v),
                          }),
                      },
                      a.id,
                    ),
                  ),
                }),
            ],
          }),
        ],
      })
    }
    function p({ model: e, actions: a }) {
      let { Tabs: t } = (0, r.O8)(),
        n = (0, r.oo)(),
        i = [{ key: "all", name: n(o.f.tabAll) }, ...e.groups.map((e) => ({ key: `gallery:${e.id}`, name: e.label }))],
        l = null === e.selectedGroupId ? "all" : `gallery:${e.selectedGroupId}`
      return (0, s.jsx)("fieldset", {
        className: "m-0 min-w-0 flex-1 border-0 p-0",
        "aria-label": n(o.f.title),
        children: (0, s.jsx)(t, {
          className: "tortilla-gallery-filters scrollbar-none [&::-webkit-scrollbar]:hidden",
          variant: "browse",
          scrollable: !0,
          tabs: i,
          selectedKey: l,
          onSelect: (e) => {
            a.selectGallery("all" === e ? null : e.slice(8))
          },
          ariaLabel: n(o.f.title),
        }),
      })
    }
    function m({ group: e, model: a, card: t, nodeBeforeTemplates: c, showTemplates: p }) {
      let u,
        { Button: g, Skeleton: h, icons: f } = (0, r.O8)(),
        w = (0, r.oo)(),
        k = (0, n.useId)(),
        y = (0, d.g)(),
        v = f["chevron-left"],
        b = f["chevron-right"],
        M = (0, l.K$)(e.templateTypes),
        T = null != c,
        x = a.selectedGroupId === e.id,
        P = p && "ready" === e.templates.status ? e.templates.data : []
      if (!T && (!p || "loading" !== e.templates.status) && 0 === P.length) return null
      let j = !x
      return (
        (u = x
          ? M
            ? "grid grid-cols-5 overflow-visible [@media(30rem<width<=48rem)]:grid-cols-3 [@media(max-width:30rem)]:grid-cols-2 *:min-w-0"
            : "grid grid-cols-4 overflow-visible [@media(30rem<width<=48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1 *:min-w-0"
          : M
            ? "horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex overflow-x-auto overscroll-x-contain scrollbar-none *:min-w-36 *:flex-[0_0_calc((100%-3rem)/5)] [&::-webkit-scrollbar]:hidden"
            : "horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex overflow-x-auto overscroll-x-contain scrollbar-none *:min-w-48 *:flex-[0_0_calc((100%-2.25rem)/4)] [&::-webkit-scrollbar]:hidden"),
        (0, s.jsxs)("section", {
          "aria-label": j ? void 0 : e.label,
          "aria-labelledby": j ? k : void 0,
          children: [
            j &&
              (0, s.jsxs)("div", {
                className: "mb-3 flex items-center justify-between gap-2",
                children: [
                  (0, s.jsx)("h3", {
                    id: k,
                    className: "tortilla-gallery-group-heading body-md m-0 font-semibold",
                    children: e.label,
                  }),
                  (y.model.canPrevious || y.model.canNext) &&
                    (0, s.jsxs)("div", {
                      className: "flex shrink-0 items-center gap-1",
                      children: [
                        (0, s.jsx)(g, {
                          type: "button",
                          color: "ghostActive",
                          size: "toolbar",
                          uniform: !0,
                          "aria-label": w(o.f.previousTemplates, { category: e.label }),
                          disabled: !y.model.canPrevious,
                          onClick: y.actions.previous,
                          children: (0, s.jsx)(v, { "aria-hidden": !0, className: "rtl:rotate-180" }),
                        }),
                        (0, s.jsx)(g, {
                          type: "button",
                          color: "ghostActive",
                          size: "toolbar",
                          uniform: !0,
                          "aria-label": w(o.f.nextTemplates, { category: e.label }),
                          disabled: !y.model.canNext,
                          onClick: y.actions.next,
                          children: (0, s.jsx)(b, { "aria-hidden": !0, className: "rtl:rotate-180" }),
                        }),
                      ],
                    }),
                ],
              }),
            (0, s.jsxs)("div", {
              ref: x ? void 0 : y.actions.viewportRef,
              className: ["tortilla-gallery-tiles -m-2 min-w-0 gap-3 p-3", u].join(" "),
              "data-expanded": x,
              "data-portrait": M,
              children: [
                c,
                p && "loading" === e.templates.status
                  ? Array.from({ length: (M ? 5 : 4) - !!T }, (e, a) =>
                      (0, s.jsx)(
                        h,
                        { className: (0, i.A)("overflow-hidden rounded-xl", M ? "aspect-179/204" : "aspect-video") },
                        a,
                      ),
                    )
                  : P.map((e, a) => (0, s.jsx)(n.Fragment, { children: t(e) }, `${e.id}:${a}`)),
              ],
            }),
          ],
        })
      )
    }
    function u({ loading: e, model: a, actions: t }) {
      let { Button: n } = (0, r.O8)(),
        i = (0, r.oo)()
      return (0, s.jsxs)("div", {
        className: "tortilla-gallery-status flex min-h-56 flex-col items-center justify-center gap-3 text-center",
        children: [
          (0, s.jsx)("output", { children: i(e ? o.f.loading : o.f.error) }),
          !e &&
            a.canRetryLoadTemplates &&
            (0, s.jsx)(n, {
              size: "medium",
              type: "button",
              color: "secondary",
              disabled: a.isActionPending,
              onClick: () => {
                t.retryLoadTemplates(a.groups.find((e) => e.id === a.selectedGroupId) ?? null)
              },
              children: i(o.f.retry),
            }),
        ],
      })
    }
    function g(e, a) {
      return "function" == typeof e ? e(a) : (e ?? {})
    }
    function h(e, a, t) {
      return 1 === e.length ? (e[0]?.id ?? null) : null !== t && a.has(t) ? t : null
    }
    function f({ config: e, initialGroupId: a = null, selectedGroupId: t, initialTemplateId: s = null }) {
      let [r, o] = (0, n.useState)((1 === e.groups.length ? e.groups[0]?.id : a) ?? null),
        [i, d] = (0, n.useState)("idle"),
        [c, p] = (0, n.useState)(s),
        m = (0, n.useRef)({ mounted: !1, closed: !1, inFlight: !1, navigationVersion: 0 })
      ;(0, n.useLayoutEffect)(() => {
        let e = m.current
        return (
          (e.mounted = !0),
          () => {
            e.mounted = !1
          }
        )
      }, [])
      let u = new Map(),
        w = e.groups.map((e) => {
          if (u.has(e.id)) throw Error("Template gallery group IDs must be unique.")
          return (
            u.set(e.id, e),
            "ready" === e.templates.status
              ? { ...e, templates: { status: "ready", data: (0, l.C$)(e.templates.data, e.templateTypes) } }
              : e
          )
        }),
        k = w.flatMap((e) => ("ready" === e.templates.status ? e.templates.data : [])),
        y = h(w, u, void 0 === t ? r : t),
        v = (null === y ? null : u.get(y)) ?? null,
        b = g(e.callbacks, v)
      function M() {
        return m.current.mounted && !m.current.closed
      }
      function T() {
        M() && ((m.current.closed = !0), e.onClose())
      }
      async function x(a, t) {
        if (!M() || m.current.inFlight) return
        let s = (void 0 === t ? y : t?.id) ?? null,
          n = null === s ? null : u.get(s)
        if (void 0 === n) return
        let r = g(e.callbacks, n)[a]
        if (!r) return
        m.current.inFlight = !0
        let o = m.current.navigationVersion
        d("pending")
        try {
          ;((await r(n)) === "close" && m.current.navigationVersion === o && T(),
            M() && m.current.navigationVersion === o && d("idle"))
        } catch {
          M() && m.current.navigationVersion === o && d("error")
        } finally {
          m.current.inFlight = !1
        }
      }
      return {
        model: {
          groups: w,
          selectedGroupId: y,
          selectedTemplate: k.find((e) => e.id === c) ?? null,
          canCreateTemplate: void 0 !== b.onCreateTemplate,
          canRetryLoadTemplates: void 0 !== b.onRetryLoadTemplates,
          isActionPending: "pending" === i,
          hasActionError: "error" === i,
        },
        actions: {
          viewTemplate: (e) => {
            if (!M()) return
            let a = k.find((a) => a.id === e.id)
            a && (m.current.navigationVersion++, p(a.id), d("idle"))
          },
          back: () => {
            M() && (m.current.navigationVersion++, p(null), d("idle"))
          },
          selectGallery: (a) => {
            if (M()) {
              let s = h(w, u, a)
              ;(s !== y || null !== c) &&
                (m.current.navigationVersion++,
                p(null),
                d("idle"),
                s !== y && (void 0 === t && o(s), e.onGalleryGroupSelect?.((null === s ? null : u.get(s)) ?? null)))
            }
          },
          createTemplate: (e) => x("onCreateTemplate", e),
          retryLoadTemplates: (e) => x("onRetryLoadTemplates", e),
          close: T,
        },
      }
    }
    function w({
      open: e,
      contentProps: a,
      model: t,
      actions: i,
      card: l,
      detail: d,
      nodeBeforeTemplateList: m,
      nodeBeforeGroupTemplates: u,
      renderGroup: g,
      className: h,
    }) {
      let { Button: f, Dialog: k, icons: y } = (0, r.O8)(),
        v = y["chevron-left"],
        b = y.close,
        M = (0, r.oo)(),
        T = (0, n.useRef)(null),
        x = (0, n.useRef)(null),
        P = (0, n.useRef)(null),
        [j, I] = (0, n.useState)(!1),
        A = (0, n.useRef)(null),
        S = (0, n.useRef)(null),
        C = null !== t.selectedTemplate && void 0 !== d,
        N = t.groups.length > 1,
        R = (0, n.useCallback)(
          (e) => {
            let a = N ? Math.min(Math.max(e, 0), 68) : 0
            ;(T.current?.style.setProperty("--gallery-header-collapse", `${a}px`), I(e > 0))
          },
          [N],
        )
      if (
        ((0, n.useLayoutEffect)(() => {
          if (C) {
            let e = x.current?.ownerDocument.activeElement
            ;(e instanceof (x.current?.ownerDocument.defaultView?.HTMLElement ?? HTMLElement) &&
              x.current?.contains(e) &&
              !e.closest('[role="menu"]') &&
              (S.current = e),
              P.current?.focus())
          } else if (S.current) {
            let e = S.current
            ;((S.current = null), (e.isConnected ? e : x.current)?.focus({ preventScroll: !0 }))
          }
        }, [C]),
        (0, n.useLayoutEffect)(() => {
          ;(x.current &&
            ((x.current.scrollTop = Math.min(A.current ?? x.current.scrollTop, 68 * !!N)), R(x.current.scrollTop)),
            (A.current = null))
        }, [N, t.selectedGroupId, R]),
        !e)
      )
        return null
      let q = M(o.f.title),
        D = (0, s.jsxs)("header", {
          className: [
            "tortilla-gallery-header z-10 flex shrink-0 border-b bg-surface-elevated-secondary motion-safe:transition-colors motion-safe:duration-basic motion-safe:ease-out",
            C || j || !N ? "border-default" : "border-transparent",
          ].join(" "),
          children: [
            (0, s.jsxs)("div", {
              className: "min-w-0 flex-1",
              children: [
                (0, s.jsx)("div", {
                  className: [
                    "tortilla-gallery-title flex h-17 min-w-0 items-center overflow-hidden border-b ps-6 motion-safe:transition-colors motion-safe:duration-basic motion-safe:ease-out",
                    !C && N && !j ? "border-default" : "border-transparent",
                  ].join(" "),
                  style: !C && N ? { height: "calc(4.25rem - var(--gallery-header-collapse, 0px))" } : void 0,
                  children: C
                    ? (0, s.jsxs)(f, {
                        size: "dialogGhost",
                        type: "button",
                        color: "ghostActive",
                        onClick: i.back,
                        children: [(0, s.jsx)(v, { className: "rtl:rotate-180", "aria-hidden": !0 }), M(o.f.back)],
                      })
                    : (0, s.jsx)("h2", { className: "m-0 text-lg font-normal", children: q }),
                }),
                !C &&
                  N &&
                  (0, s.jsx)("div", {
                    className: "tortilla-gallery-toolbar flex h-17 min-w-0 items-center ps-6",
                    children: (0, s.jsx)(p, {
                      model: t,
                      actions: {
                        ...i,
                        selectGallery: (e) => {
                          ;(e !== t.selectedGroupId && x.current && (A.current = x.current.scrollTop),
                            i.selectGallery(e))
                        },
                      },
                    }),
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: [
                "tortilla-gallery-header-actions flex h-17 shrink-0 items-center gap-2 self-start border-b bg-surface-elevated-secondary px-6 motion-safe:transition-colors motion-safe:duration-basic motion-safe:ease-out",
                !C && N && !j ? "border-default" : "border-transparent",
              ].join(" "),
              children: [
                !C &&
                  t.canCreateTemplate &&
                  (0, s.jsx)(f, {
                    type: "button",
                    color: "outlineGhost",
                    size: "dialog",
                    className: "tortilla-gallery-create shrink-0",
                    "aria-label": M(o.f.createTemplateAccessible),
                    disabled: t.isActionPending,
                    onClick: () => {
                      i.createTemplate()
                    },
                    children: M(o.f.createTemplate),
                  }),
                (0, s.jsx)(f, {
                  type: "button",
                  color: "ghostActive",
                  size: "entityHeader",
                  className: "tortilla-gallery-close",
                  "aria-label": M(o.f.close),
                  onClick: i.close,
                  children: (0, s.jsx)(b, { "aria-hidden": !0 }),
                }),
              ],
            }),
          ],
        })
      return (0, s.jsx)(k, {
        open: e,
        contentProps: a,
        title: q,
        size: "xxxwideTall",
        contentOverflow: "hidden",
        showDialogClose: !1,
        onOpenChange: (e) => {
          e || i.close()
        },
        children: (0, s.jsxs)("div", {
          ref: T,
          className: [
            "tortilla-gallery flex size-full min-h-0 min-w-0 flex-col overflow-hidden bg-surface-elevated-secondary text-(--color-text)",
            h,
          ]
            .filter(Boolean)
            .join(" "),
          children: [
            t.hasActionError &&
              (0, s.jsx)("p", {
                className: "tortilla-gallery-feedback m-0 px-4 py-3",
                role: "alert",
                children: M(o.f.actionError),
              }),
            t.isActionPending && (0, s.jsx)("output", { className: "sr-only", children: M(o.f.pending) }),
            D,
            (0, s.jsx)("section", {
              ref: x,
              hidden: C,
              className: "tortilla-gallery-browse min-h-0 flex-1 overflow-y-auto overscroll-y-none",
              "data-has-filters": t.groups.length > 1,
              "aria-label": M(o.f.title),
              tabIndex: -1,
              onScroll: (e) => {
                R(e.currentTarget.scrollTop)
              },
              onFocusCapture: (e) => {
                e.target.closest('[role="menu"]') || (S.current = e.target)
              },
              children: (0, s.jsxs)("div", {
                className: "box-content min-h-full",
                style: N ? { paddingTop: "var(--gallery-header-collapse, 0px)" } : void 0,
                children: [
                  m,
                  (0, s.jsx)(c, { model: t, actions: i, card: l, nodeBeforeGroupTemplates: u, renderGroup: g }),
                ],
              }),
            }),
            C &&
              t.selectedTemplate &&
              d &&
              (0, s.jsx)("section", {
                ref: P,
                tabIndex: -1,
                "aria-label": t.selectedTemplate.name,
                className: "tortilla-gallery-detail min-h-0 flex-1 overflow-y-auto",
                children: (0, s.jsx)(
                  "div",
                  { className: "tortilla-gallery-detail-body p-6", children: d(t.selectedTemplate) },
                  t.selectedTemplate.id,
                ),
              }),
          ],
        }),
      })
    }
  },
  jG6n(e, a, t) {
    var s = t("qmMi"),
      n = t("ASxG"),
      r = t("W0tK"),
      o = t("fXhT"),
      i = t("OWtl"),
      l = t("J9bg"),
      d = t("Kw4a")
    let c = ["to-do-list", "project-tracker"],
      p = (0, s.un)(i.u, ({ get: e }) => (e(d.wu) ? e(l.S, "4051280260") : void 0)),
      m = (0, s.un)(i.u, ({ get: e }) => (e(d.ou) ? e(l.S, "4051280260") : void 0)),
      u = (0, s.un)(i.u, ({ get: e }) => (e(d.xk) ? e(l.b, "4051280260") : void 0)),
      g = n.Ikc({
        submitLabel: n.YjP().trim().min(1).optional(),
        preparingLabel: n.YjP().trim().min(1).optional(),
        freeformPlaceholder: n.YjP().trim().min(1).optional(),
        questions: n
          .YOg(
            n.Ikc({
              question: n.YjP().trim().min(1),
              answerLabel: n.YjP().trim().min(1),
              isOther: n.zMY().optional(),
              options: n
                .YOg(n.Ikc({ id: n.YjP().trim().min(1), value: n.YjP().trim().min(1) }))
                .refine(
                  (e) => new Set(e.map(({ id: e }) => e)).size === e.length,
                  "Each option ID in a question must be unique",
                ),
            }),
          )
          .min(1),
      }),
      h = n.Ikc({
        id: n.YjP().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: n.YjP().trim().min(1),
        prompt: n.YjP().trim().min(1),
        prefillPrompt: n.YjP().trim().min(1),
        previewMarkdown: n.YjP().trim().min(1).optional(),
        previewDocument: n
          .YOg(n.Ikc({ kind: n.euz("markdown"), markdown: n.YjP().trim().min(1), layout: o.wS.optional() }))
          .min(1)
          .optional(),
        setupQuestion: n.YjP().trim().min(1).nullish(),
        followUp: g.nullish(),
      }),
      f = n.YOg(h.partial({ title: !0, prompt: !0, prefillPrompt: !0, previewMarkdown: !0 })),
      w = n
        .YOg(n.YjP())
        .min(4)
        .max(10)
        .refine((e) => new Set(e).size === e.length && c.every((a) => e.includes(a))),
      k = n.Ikc({
        templates: f.optional(),
        templatesByLocale: n.g1P(n.YjP().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/), f).optional(),
      })
    t.d(
      a,
      {},
      {
        CQ: w,
        Hs: function (e, a) {
          let t = k.safeParse(a)
          if (!t.success) return
          if (t.data.templates?.length === 0) return []
          let s = (0, r.bW)(e) ?? "en",
            n = s.split("-")[0],
            o =
              t.data.templatesByLocale?.[s] ?? t.data.templatesByLocale?.[n] ?? ("en" === n ? t.data.templates : void 0)
          if (null != o && new Set(o.map(({ id: e }) => e)).size === o.length) return o
        },
        WN: m,
        Wz: u,
        ql: p,
        xN: f,
        z4: h,
      },
    )
  },
  U6Ok(e, a, t) {
    t.d(a, { l: () => i })
    var s = t("SOEF"),
      n = t("Qgfj"),
      r = t("jG6n")
    let o = r.z4.required({ previewDocument: !0 }).array()
    function i(e, a) {
      let t = (0, r.Hs)(e.locale, a)
      if (t?.length === 0) return []
      let s = { kind: "icon", value: "book", color: "black" },
        n = [
          {
            id: "to-do-list",
            symbol: { kind: "icon", value: "logs", color: "green" },
            title: e.formatMessage(d.todo),
            prompt: e.formatMessage(d.todoPrompt),
            prefillPrompt: e.formatMessage(d.todoPrefillPrompt),
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
                }),
              },
            ],
          },
          {
            id: "project-tracker",
            symbol: { kind: "icon", value: "bar-chart", color: "blue" },
            title: e.formatMessage(d.projectTracker),
            prompt: e.formatMessage(d.projectTrackerPrompt),
            prefillPrompt: e.formatMessage(d.projectTrackerPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.attentionHeading",
                  defaultMessage: "## \u{1F534} Needs immediate attention",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.attention",
                  defaultMessage: "- Communication systems test for launch",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.milestonesHeading",
                  defaultMessage: "## \u26F0\uFE0F Milestones",
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
                  },
                  {},
                ),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.tasksHeading",
                  defaultMessage: "## \u2705 Tasks",
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
                  },
                  {},
                ),
              },
            ],
          },
          {
            id: "weekly-update",
            symbol: { kind: "icon", value: "writing", color: "pink" },
            title: e.formatMessage(d.weeklyUpdate),
            prompt: e.formatMessage(d.weeklyUpdatePrompt),
            prefillPrompt: e.formatMessage(d.weeklyUpdatePrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.weeklyUpdate.preview",
                  defaultMessage: `## \u{2728} Highlights

- Progress made

## \u{261D}\u{FE0F} Needs attention

- Blockers and decisions needing input

## \u{25B6}\u{FE0F} Next week

- Upcoming milestones and confirmed commitments

## \u{1F517} Sources

- Links to sources`,
                }),
              },
            ],
          },
          {
            id: "feedback-tracker",
            symbol: { kind: "icon", value: "edit", color: "red" },
            title: e.formatMessage(d.feedback),
            prompt: e.formatMessage(d.feedbackPrompt),
            prefillPrompt: e.formatMessage(d.feedbackPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.themesHeading",
                  defaultMessage: "## \u{1F50E} Top themes",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.onboardingTheme",
                  defaultMessage: "1. Make onboarding easier to follow",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.navigationTheme",
                  defaultMessage: "2. Help people find the right resource",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.sharingTheme",
                  defaultMessage: "3. Clarify what happens after sharing",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.registerHeading",
                  defaultMessage: "## \u{1F5C2}\uFE0F Feedback register",
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
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.summaryHeading",
                  defaultMessage: "## \u{1F4DD} Summary",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.summary",
                  defaultMessage:
                    "People need clearer guidance at key moments. Start with onboarding, then review navigation and sharing.",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.followupsHeading",
                  defaultMessage: "## \u25B6\uFE0F Follow-ups",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.followups",
                  defaultMessage: "- Schedule user interviews for next week",
                }),
              },
            ],
          },
          {
            id: "release-notes",
            symbol: s,
            title: e.formatMessage(d.releaseNotes),
            prompt: e.formatMessage(d.releaseNotesPrompt),
            prefillPrompt: e.formatMessage(d.releaseNotesPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.releaseNotes.preview",
                  defaultMessage: `## \u{1F195} New

- New capabilities and who can use them

## \u{1F3C6} Improvements

- Changes to existing workflows

## \u{1F6E0}\u{FE0F} Fixes

- Resolved issues and their impact

## \u{1F310} Availability

- Supported platforms, rollout status, and known limitations.

## \u{1F517} Sources

- Links to sources`,
                }),
              },
            ],
          },
          {
            id: "project-home",
            symbol: s,
            title: e.formatMessage(d.projectHome),
            prompt: e.formatMessage(d.projectHomePrompt),
            prefillPrompt: e.formatMessage(d.projectHomePrefillPrompt),
            setupQuestion: e.formatMessage({
              id: "space.pageTemplates.projectHome.question",
              defaultMessage: "Which project is this for, and which sources should I use?",
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
                }),
              },
            ],
          },
          {
            id: "faq",
            symbol: s,
            title: e.formatMessage(d.faq),
            prompt: e.formatMessage(d.faqPrompt),
            prefillPrompt: e.formatMessage(d.faqPrefillPrompt),
            setupQuestion: e.formatMessage({
              id: "space.pageTemplates.faq.question",
              defaultMessage: "What topic and audience is this FAQ for, and which sources should I use?",
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
                }),
              },
            ],
          },
        ],
        i = () =>
          n.filter(({ id: e }) => "project-home" !== e && "faq" !== e).map((e) => ({ ...e, ...l(e.previewDocument) }))
      if (null == t) return i()
      let c = o.safeParse(
        t.map((a) => {
          let t =
              n.find(({ id: e }) => e === a.id) ??
              (function (e, a) {
                switch (a) {
                  case "feature-backlog":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.title",
                        defaultMessage: "Feature backlog",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.prompt",
                        defaultMessage:
                          "Turn ideas and requests for my product into a feature backlog. Group similar requests, describe the user need, link supporting feedback, and suggest priorities and next decisions. Ask which product if it\u2019s unclear; a few ideas are enough to start. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.prefillPrompt",
                        defaultMessage:
                          "Organize a feature backlog for my product, grouping requests by user need and suggesting priorities and next decisions. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.feature-backlog.preview.1",
                            defaultMessage: `## Ideas and requests
| Idea | User problem | Evidence | Next decision |
| --- | --- | --- | --- |

## Priorities to discuss
Compare impact, effort, and dependencies where known.

## Open questions
Track what needs research or a product decision.`,
                          }),
                        },
                      ],
                    }
                  case "learning-plan":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.title",
                        defaultMessage: "Learning plan",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.prompt",
                        defaultMessage:
                          "Help me make a plan for something I want to learn. Start with what I already know and what I want to be able to do. Break it into manageable steps with useful resources, practice, and a weekly routine. Include space for notes and progress checks. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.prefillPrompt",
                        defaultMessage:
                          "Make a learning plan with a clear goal, useful resources, practice, and a weekly routine. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.overview",
                            defaultMessage: `**Time:** Two 30-minute sessions a week

## \u{1F3AF} Outcome

Locate five major lunar features on a map and explain the difference between a crater and a dark plain in ordinary language.

## \u{1F9E9} Starting point

I can recognize the Moon\u{2019}s broad light and dark areas. I want to connect those patterns with named places.

## \u{1F5FA}\u{FE0F} Learning path`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.7",
                            defaultMessage: `| Step | Resource | Practice |
| --- | --- | --- |
| Get oriented | NASA Moon overview | Label five features on a sketch |
| Look closely | A library lunar atlas | Compare two images of one region |
| Explain it | My own notes | Write a 100-word visitor caption |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.practiceAndReview",
                            defaultMessage: `## \u{1F4C5} Weekly rhythm

- [ ] Tuesday: read one short section and draw a sketch.

- [ ] Sunday: revisit the sketch without looking at the labels.

- [ ] Explain one feature to a friend.

## \u{1F4DD} Notebook

**Observation:** The same region can look quite different as shadows change.

**Question:** Which lighting makes a crater\u{2019}s shape easiest to see?

## \u{1F501} Progress check

I can locate three of the five features without the atlas. Compare those three under different lighting, then add two more and repeat the unlabeled sketch.

## \u{1F517} Start here

[NASA Moon overview](https://science.nasa.gov/moon/)`,
                          }),
                        },
                      ],
                    }
                  case "weekly-planner":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.title",
                        defaultMessage: "Weekly planner",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.prompt",
                        defaultMessage:
                          "Plan my week around the priorities and commitments I\u2019ve shared. Create a short priority list and a realistic day-by-day plan with suggested focus time and room for rest. Ask what matters most this week if you need a starting point. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.prefillPrompt",
                        defaultMessage:
                          "Make a realistic weekly plan around my priorities and commitments, with suggested focus time and room for rest. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.priorities",
                            defaultMessage: `## \u{1F3AF} Priorities

- [ ] Finish the lunar exhibit captions.

- [ ] Confirm volunteer roles for Friday.

- [ ] Leave one evening free of commitments.

## \u{1F5D3}\u{FE0F} Week at a glance`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.6",
                            defaultMessage: `| Day | Main focus | Commitment |
| --- | --- | --- |
| Monday | Caption edits | Review with Leo, 14:00 |
| Tuesday | Final captions and handout draft | Approve the full print set |
| Wednesday | Send approved files to the print shop | Volunteer call, 18:00 |
| Thursday | Collect prints and check the room | Free evening |
| Friday | Open house | Arrive at 17:15 |
| Weekend | Rest and a short walk | Sunday journal time |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.lifeAndReview",
                            defaultMessage: `## \u{1F3E1} Everyday life

- [ ] Pick up groceries on the way home.

- [ ] Return the library book.

- [ ] Call a friend over the weekend.

## \u{1F4CC} Can wait

The archive\u{2019}s video section and the future talk schedule.

## \u{2728} Weekend review

**What helped:** Did the shared caption review resolve questions before printing?

**What to change:** Note any last-minute printing or role changes to allow for in the next event plan.`,
                          }),
                        },
                      ],
                    }
                  case "trip-planner":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.title",
                        defaultMessage: "Trip planner",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.prompt",
                        defaultMessage:
                          "Make a flexible itinerary and planning checklist using the trip details I\u2019ve shared. Include ideas for activities, transport, and accommodation, keeping confirmed bookings easy to identify. Ask where I\u2019d like to go if needed, or help me choose a destination. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.prefillPrompt",
                        defaultMessage:
                          "Make a flexible trip itinerary and planning checklist, including activities, transport, and accommodation. Help me choose a destination if needed. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.overview",
                            defaultMessage:
                              "**Travelers:** Maya and Sam  \n**Pace:** One main activity a day\n\n## \u{1F9ED} The plan\n\nPlan two nights near a mountain observatory. The visitor tour is the main activity; confirm its availability before choosing transport and accommodation.\n\n## \u{1F686} Travel and stay",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.5",
                            defaultMessage: `| Item | Plan | Status |
| --- | --- | --- |
| Outbound | Friday afternoon train, then local shuttle | Compare departure times |
| Accommodation | Two nights in the village | Choose a flexible booking |
| Return | Sunday afternoon train | Leave time for lunch |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.6",
                            defaultMessage: "## \u{1F5D3}\uFE0F Daily outline",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.7",
                            defaultMessage: `| Day | Main plan | Flexible alternative |
| --- | --- | --- |
| Friday | Arrive and settle in | Short village walk |
| Saturday | Observatory visitor tour | Science museum if tours change |
| Sunday | Easy morning walk | Caf\xe9 and photo journal |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.packingAndNextSteps",
                            defaultMessage: `## \u{1F392} Before leaving

- [ ] Check the visitor schedule, reserve the tour if required, and review the weather before departure.

- [ ] Confirm transport and accommodation.

- [ ] Save tickets and maps offline.

- [ ] Pack warm layers, walking shoes, and a notebook.

## \u{1F4A1} Useful notes

Use a $450 planning allowance for two people: $300 for two nights, $120 for meals, and $30 for local transport. Intercity tickets and any tour fees are additional; confirm actual prices before booking. Keep skywatching optional.`,
                          }),
                        },
                      ],
                    }
                  case "budget-tracker":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.title",
                        defaultMessage: "Budget tracker",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.prompt",
                        defaultMessage:
                          "Use relevant financial information from connected apps you can access to build my budget tracker. Organize income and spending, show how they compare, and help me track progress toward my goals. Use the currency shown in my accounts and start with this month unless I specify otherwise. Keep totals for different currencies separate. Use the details I\u2019ve already shared, and ask for missing essentials only after checking the available information. If no financial information is available, start with an editable budget and ask what I\u2019d like to add. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.prefillPrompt",
                        defaultMessage:
                          "Use financial information from connected apps you can access and details I\u2019ve shared to make a budget tracker for this month. Organize income and spending and track my savings goals, using my accounts\u2019 currencies and keeping their totals separate. If no figures are available, help me start an editable budget. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.budget-tracker.preview.1",
                            defaultMessage: `## Budget period
Add the time period and currency.

## Planned and actual spending
| Category | Planned | Actual | Remaining |
| --- | --- | --- | --- |
| Housing | | | |
| Food | | | |
| Transport | | | |

## Transactions
Add income and expenses with dates and sources.

## Review
Note missing figures and changes for next period.`,
                          }),
                        },
                      ],
                    }
                  case "apartment-hunter":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.title",
                        defaultMessage: "Apartment hunter",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.prompt",
                        defaultMessage:
                          "Organize my apartment search around my location and rent budget. Compare available listings by rent, fees, availability, and my preferences, with links and next steps. If I haven\u2019t added listings yet, start with search criteria and a comparison table. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.prefillPrompt",
                        defaultMessage:
                          "Help me compare apartments by rent, fees, availability, and my preferences, with listing links and next steps. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.apartment-hunter.preview.1",
                            defaultMessage: `## Search criteria
Add location, budget, move-in timing, and must-haves.

## Shortlist
| Listing | Rent and fees | Availability | Notes |
| --- | --- | --- | --- |

## Next steps
- [ ] Save listings to compare
- [ ] Prepare questions for a viewing

## Viewing notes
Record observations and questions for each apartment.`,
                          }),
                        },
                      ],
                    }
                  case "event-plan":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.event-plan.title",
                        defaultMessage: "Event Plan",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.event-plan.prompt",
                        defaultMessage:
                          "Make a plan for my event with its purpose, key details, schedule, people involved, and preparation checklist. Include a backup plan and follow-up tasks where useful. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.event-plan.prefillPrompt",
                        defaultMessage:
                          "Help me plan my event, including the schedule, people involved, preparation, and follow-up. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.overview",
                            defaultMessage:
                              "**Time:** 18:00\u201320:00 local time  \n**Place:** Northfield Observatory visitor hall  \n**Lead:** Sam Rivera\n\n## \u{1F319} Purpose\n\nAn informal evening of lunar images, short talks, and questions for first-time visitors.\n\n## \u{1F4CB} Essentials",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.5",
                            defaultMessage: `| Item | Plan |
| --- | --- |
| Capacity | 40 visitors |
| Planning budget | $300 total: $100 printing and $200 refreshments |
| Access | Step-free entrance, seating, large-print handouts |
| Main contact | Sam at the welcome desk |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.6",
                            defaultMessage: "## \u{1F570}\uFE0F Run of show",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.7",
                            defaultMessage: `| Time | Activity | Lead |
| --- | --- | --- |
| 17:15 | Set up and volunteer briefing | Sam |
| 18:00 | Welcome and image gallery | Maya |
| 18:30 | A short tour of the lunar landscape | Priya |
| 19:00 | Indoor questions; outdoor viewing if conditions allow | Priya |
| 20:00 | Close and reset the room | Team |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.preparation",
                            defaultMessage: `## \u{2705} Preparation

- [ ] Sam: confirm the room layout and step-free visitor route.

- [ ] Maya: print 50 handouts and the caption cards before the room check.

- [ ] Priya: confirm the observing setup and brief volunteers on the indoor alternative.

## \u{2601}\u{FE0F} If plans change

At 16:00, Sam confirms whether outdoor viewing will run. The indoor event goes ahead either way. Sam updates the welcome desk and guest message; if viewing is cancelled, Priya extends the indoor questions and image discussion.

## \u{1F4DD} Afterwards

- [ ] Gather short visitor comments.

- [ ] Record useful changes for the next event.`,
                          }),
                        },
                      ],
                    }
                  case "personal-goals":
                    return {
                      id: a,
                      title: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.title",
                        defaultMessage: "Personal goals",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.prompt",
                        defaultMessage:
                          "Help me turn the goals I care about into a practical plan. Capture why each goal matters, what progress would look like, and a few steps I can take this week. Suggest ways to make time for them and include a short review section. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.prefillPrompt",
                        defaultMessage:
                          "Help me make a plan for my personal goals, with signs of progress, a few steps for this week, and time to review how it\u2019s going. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.overview",
                            defaultMessage: `**Review:** Last Sunday of each month

## \u{1F9ED} What matters

Over the next twelve weeks, learn a few lunar features, finish a photo journal, and keep one evening a week free.

## \u{1F3AF} Goals`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.5",
                            defaultMessage: `| Goal | Why | A useful sign of progress |
| --- | --- | --- |
| Learn the lunar landscape | Make skywatching more rewarding | Recognize five named features |
| Make a small photo journal | Finish something tangible | Twelve images with captions |
| Protect unplanned time | Leave room to rest | One free evening each week |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.rhythmAndReview",
                            defaultMessage: `## \u{1F463} This week

- [ ] Borrow a Moon guide from the library.

- [ ] Choose the first three journal images.

- [ ] Keep Thursday evening free.

## \u{1F5D3}\u{FE0F} Make room

Reserve half an hour on Sunday for the journal. Join one astronomy-club evening each month. Pause the second online course until the next review.

## \u{1F501} Monthly review

**Progress:** The journal theme is chosen and twelve images are shortlisted.

**Lesson:** Short sessions are easier to keep than a whole afternoon.

**Adjustment:** Finish one caption each week so all twelve images are ready by the end of this plan.`,
                          }),
                        },
                      ],
                    }
                  default:
                    return
                }
              })(e, a.id),
            s = null == a.prompt ? t?.setupQuestion : void 0,
            r =
              a.prefillPrompt ??
              (null == a.prompt ? t?.prefillPrompt : void 0) ??
              e.formatMessage(d.customPrefillPrompt)
          return {
            ...t,
            ...a,
            prefillPrompt: r,
            previewDocument:
              a.previewDocument ??
              (null == a.previewMarkdown ? t?.previewDocument : [{ kind: "markdown", markdown: a.previewMarkdown }]),
            setupQuestion: void 0 !== a.setupQuestion ? a.setupQuestion : s,
          }
        }),
      )
      return c.success
        ? c.data.map((e) => ({ ...e, symbol: n.find(({ id: a }) => a === e.id)?.symbol ?? s, ...l(e.previewDocument) }))
        : i()
    }
    function l(e) {
      let a = e.flatMap((e) => (0, s.CyG)(e.markdown).map((a) => ({ ...e, markdown: a })))
      return { previewMarkdown: a.map(({ markdown: e }) => e).join("\n\n"), previewDocument: a }
    }
    let d = (0, n.YK)({
      todoPrefillPrompt: {
        id: "space.pageTemplates.todo.prefill.sourceAware",
        defaultMessage:
          "Help me turn this Page into my to-do list. Check relevant conversations and connected apps you can access for things I need to do. If you can\u2019t find enough, ask me what to add. Replace the sample tasks, keep the checkboxes and any edits I\u2019ve made, and don\u2019t invent tasks or deadlines.",
      },
      projectTrackerPrefillPrompt: {
        id: "space.pageTemplates.projectTracker.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page a tracker for my project. Use relevant conversations and connected apps you can access to find milestones and tasks, and ask me for anything missing. Replace the examples, keep my edits, and don\u2019t guess at owners, dates, or statuses.",
      },
      weeklyUpdatePrefillPrompt: {
        id: "space.pageTemplates.weeklyUpdate.prefill.sourceAware",
        defaultMessage:
          "Help me write this week\u2019s update on this Page. Look for progress, blockers, and next steps in relevant conversations and connected apps you can access. Ask which project or week I mean if it\u2019s unclear, and don\u2019t make up accomplishments.",
      },
      feedbackPrefillPrompt: {
        id: "space.pageTemplates.feedback.prefill.sourceAware",
        defaultMessage:
          "Help me organize feedback on this Page. Use relevant conversations and connected apps you can access to find feedback. Ask what product or topic to focus on if it\u2019s unclear, replace the examples with what you find, and don\u2019t invent feedback.",
      },
      releaseNotesPrefillPrompt: {
        id: "space.pageTemplates.releaseNotes.prefill.sourceAware",
        defaultMessage:
          "Help me write release notes on this Page. Check relevant conversations and connected apps you can access for confirmed changes and limitations. Ask which release I mean if it\u2019s unclear, and don\u2019t add unconfirmed details or publish anything.",
      },
      projectHomePrefillPrompt: {
        id: "space.pageTemplates.projectHome.prefill.sourceAware",
        defaultMessage:
          "Help me set up this Project Home Page. Use relevant conversations and connected apps you can access for the project\u2019s goals, team, milestones, and links. Ask me for anything missing, keep my edits, and don\u2019t make up owners or dates.",
      },
      faqPrefillPrompt: {
        id: "space.pageTemplates.faq.prefill.sourceAware",
        defaultMessage:
          "Help me make an FAQ on this Page. Look for trusted answers in relevant conversations and connected apps you can access. Ask who it\u2019s for and what it\u2019s about if unclear, and leave anything unverified as an open question.",
      },
      customPrefillPrompt: {
        id: "space.pageTemplates.custom.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page my own. Use relevant conversations and connected apps you can access, and ask me what I want to add if it\u2019s unclear. Keep my edits and don\u2019t fill in details you can\u2019t verify.",
      },
      weeklyUpdate: { id: "space.pageTemplates.weeklyUpdate.title", defaultMessage: "Weekly update" },
      weeklyUpdatePrompt: {
        id: "space.pageTemplates.weeklyUpdate.setup",
        defaultMessage: `Check my relevant connected apps and create a weekly update suitable for sharing with cross-functional partners, stakeholders, and executives.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      releaseNotes: { id: "space.pageTemplates.releaseNotes.title", defaultMessage: "Release notes" },
      releaseNotesPrompt: {
        id: "space.pageTemplates.releaseNotes.setup",
        defaultMessage: `Check my relevant connected apps and create release notes. Ask which project I would like to create release notes for.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      projectHome: { id: "space.pageTemplates.projectHome.title", defaultMessage: "Project Home" },
      projectHomePrompt: {
        id: "space.pageTemplates.projectHome.setup",
        defaultMessage: `Help me make this Project Home my own. Start working directly in the Page without a setup interview or waiting for confirmation. Choose a project from available context and begin filling it in; the user can redirect you afterward.

If the Page has an Instructions section, collapse it before adding content so it does not push the useful content below the chat, and keep it collapsed when you finish. If that section exists but the available controls cannot change its collapsed state, say so briefly; do not claim it is collapsed. If there is no Instructions section, continue without creating one or mentioning its absence.

Make sure the Page has a title. If it is untitled, use \u{201C}Project Home\u{201D} initially. Preserve an existing title and any user edits.

Before searching connected sources, add an editable starting structure with two sections: Project overview and Essential resources. Include supported details already available in context. Keep this first version compact and useful, without a wall of empty headings or repeated placeholders. Send this brief chat message: \u{201C}I\u{2019}m filling in your Project Home. You can edit any section while I work.\u{201D}

Choose the most relevant project using your best judgment. Prioritize context attached to this Page or its current Space, then recent conversations and project activity. If several projects are plausible, pick the strongest candidate and treat it as a working assumption. Do not stop to ask which project to use or wait for approval before filling in supported details. Choose a real project supported by context; do not invent one. If the initial context provides no candidate, search recent connected sources for one.

Leave one comment explaining the choice: \u{201C}I picked [project] based on [context] and started filling in this Page. If you\u{2019}d like a different project, reply here with its name or a source and I\u{2019}ll switch.\u{201D}

Prefer anchoring this comment to the Page title. If title comments are unsupported, use the first existing content section outside Instructions. If supported, open and focus the comment so it is visible above the chat. Do not claim it is open or focused unless verified. Do not create body content solely to anchor the comment, and do not repeat the project-selection question in the body.

Continue working immediately after leaving the comment. Use the project\u{2019}s Slack channel, relevant emails, project notes, and links to fill in the Page incrementally. Write useful findings as you find them instead of waiting until all research is complete. Add short, scannable sections as evidence becomes available:

- Project overview: what we\u{2019}re building, who it\u{2019}s for, and why it matters
- Team and responsibilities
- Essential resources
- Recent updates
- Upcoming milestones
- Decisions and open questions
- A short guide for someone joining

Cite sources near the claims they support. Prioritize recent sources for status and milestones, and include relevant dates. Distinguish confirmed decisions from proposals, and commitments from completed work. Flag conflicting information rather than silently choosing one version. Do not invent facts or sample records. Keep detailed tasks in a linked tracker if one exists.

Use Open questions only for substantive project unknowns. Label these \u{201C}Needs input\u{201D} or \u{201C}Not yet found\u{201D} where useful. Do not create an Open questions section to ask which project to use. If no real project can be found after a reasonable search, preserve the starting structure and explain the missing context in the single comment rather than fabricating a project.

Use Page comments for focused questions and assumptions. Prefer the title, or the first existing content section outside Instructions if title comments are unsupported. Refer to the relevant section in the comment instead of anchoring questions farther down the Page. Ask only what is needed to move forward, and continue supported work while awaiting answers. If a relevant app isn\u{2019}t connected, offer to connect it and continue with available sources.

When input would help, add one brief, contextual invitation in comments or chat: \u{201C}Add a project brief here with @, or type @ChatGPT, select it from the Page\u{2019}s mention menu, and ask me to use a different project. Use / to add content to the Page.\u{201D} Adapt the example to the actual gap. Do not repeat this guidance in the Page body.

Write using native Page blocks. Check current content before replacing anything, and preserve edits the user makes while you work. When the user names a different project or provides new context, update the relevant sections, revise the choice comment, and remove obsolete content, resolved questions, and unnecessary hints.

Keep chat replies brief and focused on the next step. Do not repeat Page content in chat. Do not imply that the Page is being monitored or updated continuously. Do not send messages or configure recurring updates without asking first.`,
      },
      projectTracker: { id: "space.pageTemplates.projectTracker.title", defaultMessage: "Project tracker" },
      projectTrackerPrompt: {
        id: "space.pageTemplates.projectTracker.setup",
        defaultMessage: `Check my relevant connected apps and create a project tracker. Automatically update every morning at 6am in my browser time zone.

Include checkboxes to the left of the milestones and tasks in the table. This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      todo: { id: "space.pageTemplates.todo.title", defaultMessage: "To-do list" },
      todoPrompt: {
        id: "space.pageTemplates.todo.setup",
        defaultMessage: `Check my relevant connected apps and create a to-do checklist. Automatically update every morning at 6am in my browser time zone: check off completed tasks for me, and carry forward incomplete tasks to the next day.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. Do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      feedback: { id: "space.pageTemplates.feedback.title", defaultMessage: "Feedback tracker" },
      feedbackPrompt: {
        id: "space.pageTemplates.feedback.setup",
        defaultMessage: `Check my relevant connected apps and create a feedback tracker. Ask which project I would like to track feedback for. Automatically update every morning at 6am in my browser time zone.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      faq: { id: "space.pageTemplates.faq.title", defaultMessage: "FAQ" },
      faqPrompt: {
        id: "space.pageTemplates.faq.setup",
        defaultMessage:
          "Help me make this FAQ my own. Ask for the topic, audience and trusted source notes or links, including relevant Slack discussions and approved guidance. Offer to connect relevant apps when needed. Build the most useful questions with concise supported answers and source links. Combine equivalent questions, keep unanswered or disputed questions visible with an owner or next decision, and keep material freshness qualifiers beside the answers they affect. Link a separate feedback tracker if I have one. Write directly into this Page using native Page blocks, preserving its title and my edits. Do not invent answers or treat unconfirmed replies as authoritative guidance. Keep source-channel replies unsent and automatic updates unconfigured unless I ask to set them up. Ask only the setup questions needed to proceed. Keep chat replies brief and focused on the next step. Organize the Page into short, scannable sections with actionable details. Don't repeat Page content in chat.",
      },
    })
  },
  o72y(e, a, t) {
    var s = t("qmMi"),
      n = t("DBCl"),
      r = t("SPnB"),
      o = t("eFn4"),
      i = t("Kwur"),
      l = t("e1xH"),
      d = t("tv8P"),
      c = t("OWtl"),
      p = t("JYRT")
    let m = (0, s.un)(c.u, ({ get: e }) => e(l.pagesEnabled$) && "allowed" === e(o.lN).status),
      u = (0, s.RD)(c.u, ({ get: e, scope: a }) => {
        let t = e(d.spaceAccountId$),
          s = e(r.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["space", "personalized-pages", t, s],
          enabled: e(m) && null != t && null != s,
          staleTime: 6e4,
          gcTime: 0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == t || null == s) throw Error("space_account_unavailable")
            let r = (0, d.watchSpaceAccount)(a, t, s),
              o = AbortSignal.any([e, r.signal])
            try {
              let e = await i.Request.safeGet("/pages/suggestions", {
                additionalHeaders: { "ChatGPT-Account-ID": t, [n.zBc]: t },
                signal: o,
              })
              return (o.throwIfAborted(), e)
            } finally {
              r.stop()
            }
          },
        }
      }),
      g = (0, s.A4)(
        c.u,
        (e) => Date.parse(e) > Date.now(),
        (e, { set: a }) => {
          let t,
            s = () => {
              let n = Date.parse(e) - Date.now()
              ;(a(n > 0), n > 0 && (t = setTimeout(s, Math.min(n, 0x7fffffff))))
            }
          return (s(), () => clearTimeout(t))
        },
        { autoDispose: !0 },
      ),
      h = (0, s.i1)(c.u, (e, { get: a }) => {
        if (!a(m)) return
        let t = a(p.X, "3798925676")
        if (t?.value["getting-started" === e ? "show_in_getting_started" : "show_in_template_modal"] !== !0) return
        let s = a(u)
        return s.isSuccess ? s.data.suggestions.filter((e) => a(g, e.expires_at)).slice(0, 3) : void 0
      }),
      f = (0, s.un)(
        c.u,
        ({ get: e }) => e(m) && e(p.X, "3798925676")?.value.show_in_template_modal === !0 && e(u).isLoading,
      )
    t.d(a, {}, { BE: f, fH: m, ps: u, x5: h })
  },
}
//# sourceMappingURL=999385.7f46b0d064.js.map
