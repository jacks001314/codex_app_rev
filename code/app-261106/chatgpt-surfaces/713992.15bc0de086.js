export const __rspack_esm_ids = [713992]
export const __webpack_modules__ = {
  ylLY(e, t, l) {
    let a = (0, l("zd8w").createContext)(null)
    l.d(t, {}, { t: a })
  },
  ULZ9(e, t, l) {
    ;(l.d(t, { z: () => o }), l("iYCA"), l("yCBR"))
    var a = l("ABep"),
      s = l("QosV"),
      i = l("ylLY")
    function o(e) {
      let t,
        l,
        o = (0, s.c)(8),
        { children: n, linkComponent: r, allowedWidgetTypes: d, radixPortalContainer: c, hydrationSafe: u } = e,
        h = void 0 === r ? "a" : r,
        p = void 0 === d ? "GA" : d,
        m = void 0 !== u && u
      return (
        o[0] !== p || o[1] !== m || o[2] !== h || o[3] !== c
          ? ((t = { linkComponent: h, allowedWidgetTypes: p, radixPortalContainer: c, hydrationSafe: m }),
            (o[0] = p),
            (o[1] = m),
            (o[2] = h),
            (o[3] = c),
            (o[4] = t))
          : (t = o[4]),
        o[5] !== n || o[6] !== t
          ? ((l = (0, a.jsx)(i.t.Provider, { value: t, children: n })), (o[5] = n), (o[6] = t), (o[7] = l))
          : (l = o[7]),
        l
      )
    }
  },
  TakC(e, t, l) {
    l.d(t, { N: () => s })
    var a = l("Ospn")
    let s = l.n(a)()({ backdropStyle: "dim", iconNextVariant: "light", pill: !1, pressableScaleMultiplier: 1 }, {})
  },
  TE73(e, t, l) {
    var a = l("TakC"),
      s = l("FPHf")
    let i = (e) => ("number" == typeof e ? `${e}deg` : e)
    l.d(
      t,
      {},
      {
        Ny: (e) => {
          let t = e.currentTarget
          if (!s.Sw || !(t instanceof HTMLElement)) return
          let l = t.offsetWidth,
            i = 0.985
          ;(l <= 80 ? (i = 0.96) : l <= 150 ? (i = 0.97) : l <= 220 ? (i = 0.98) : l > 600 && (i = 0.995),
            t.style.setProperty("--scale", (1 + (i - 1) * a.N.pressableScaleMultiplier).toString()))
        },
        Oe: () =>
          !!s.Vd &&
          "function" == typeof window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        WI: function (e, t, l = (e) => e) {
          let a = [],
            s = new Map()
          for (let i of e) {
            let e = l(i[t], i),
              o = s.get(e)
            if (void 0 !== o) {
              a[o].items.push(i)
              continue
            }
            let n = { [t]: e, items: [i] }
            ;(s.set(e, a.length), a.push(n))
          }
          return a
        },
        fT: (e) => `${e}ms`,
        iB: (e) => {
          e.preventDefault()
        },
        lW: ({ x: e, y: t, scale: l, rotate: a, rotateY: s, perspective: o, skewX: n, skewY: r } = {}) => {
          let d = [
            null == o ? null : `perspective(${o}px)`,
            null == e ? null : `translateX(${e}px)`,
            null == t ? null : `translateY(${t}px)`,
            null == l ? null : `scale(${l})`,
            null == a ? null : `rotate(${i(a)})`,
            null == s ? null : `rotateY(${i(s)})`,
            null == n ? null : `skewX(${i(n)})`,
            null == r ? null : `skewY(${i(r)})`,
          ].filter(Boolean)
          return d.length ? d.join(" ") : "none"
        },
        mW: (e) =>
          Object.keys(e).reduce((t, l) => {
            let a = e[l]
            if (a || 0 === a) {
              let e = l.startsWith("--") ? "" : "--",
                s = "number" == typeof a ? `${a}px` : a
              t[`${e}${l}`] = s
            }
            return t
          }, {}),
        mr: (e) =>
          e.querySelectorAll(
            'a[href], input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex^="-"]), [contenteditable]',
          ),
        qP: function (e, t) {
          if (!e) return null
          try {
            let l = (function (e) {
              let t = new URL(e)
              if ("http:" !== t.protocol && "https:" !== t.protocol) return "http://files.openai.com"
              if ("ticketmaster.evyy.net" === t.hostname) {
                let e = t.searchParams.getAll("u"),
                  l = 1 === e.length ? e[0] : void 0
                if (l)
                  try {
                    let e = new URL(l)
                    if ("http:" === e.protocol || "https:" === e.protocol) return e.origin
                  } catch {}
              }
              return t.origin
            })(e)
            return `https://www.google.com/s2/favicons?domain=${l}&sz=${t}`
          } catch (e) {
            return null
          }
        },
        wT: (e) => String(e),
        yQ: (e, t) => {
          if (
            !s.Sw ||
            "function" != typeof window.requestAnimationFrame ||
            (s.Wt && "hidden" === document.visibilityState)
          ) {
            let t
            return (
              (t = setTimeout(e)),
              () => {
                clearTimeout(t)
              }
            )
          }
          let l = t?.frames ?? 2,
            a = window.requestAnimationFrame(function t() {
              0 == (l -= 1) ? e() : (a = window.requestAnimationFrame(t))
            })
          return () => {
            "function" == typeof window.cancelAnimationFrame && window.cancelAnimationFrame(a)
          }
        },
        zG: ({ blur: e } = {}) => {
          let t = [null == e ? null : `blur(${e}px)`].filter(Boolean)
          return t.length ? t.join(" ") : "none"
        },
      },
    )
  },
  Niy1(e, t, l) {
    var a = l("EA6X"),
      s = l("MrGp"),
      i = l("yGJW"),
      o = l("Gxik"),
      n = l("hsIu")
    function r(e, t, l = "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED") {
      try {
        ;(0, i.yy)(e, a.HR, {
          actionType: l,
          entityId: t.id,
          entityCategory: `college_plan_${t.kind}`,
          surfaceLocation:
            "chat_school_receipt" === t.surface || "chat_school_link" === t.surface
              ? a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE
              : void 0,
          conversationId: t.conversationId,
          messageId: t.messageId,
          parentContext: {
            entityId: e.query.getData(n.pH)?.project_id ?? void 0,
            entityCategory: "college_plan",
            widgetType: "college_plan",
            widgetName: t.surface,
          },
        })
      } catch {}
    }
    l.d(
      t,
      {},
      {
        j2: r,
        oQ: function (e, t, l, s) {
          try {
            ;(0, i.yy)(e, a.wk, {
              actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
              surfaceLocation: a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
              widgetType: "college_plan_school",
              widgetActionTarget: "open_school",
              conversationId: s,
              messageId: l,
              parentContext: { entityId: t, entityCategory: "college_plan_school" },
            })
          } catch {}
        },
        sc: function (e, t, l) {
          let a = /^\/college-plan\/schools\/([0-9a-f]{32})$/.exec(t)?.[1]
          null == a ||
            l?.isReadOnly ||
            l?.shouldBlockExternalEgress ||
            r(e, {
              id: a,
              kind: "school",
              surface: "chat_school_link",
              conversationId: e.get(s.jS, l?.conversationId ?? null) ?? void 0,
              messageId: l?.messageId,
            })
        },
        zk: function (e, t, l) {
          return (0, o.rr)(
            e,
            t,
            () => {
              let t = "chat_school_receipt" === l.surface ? l.conversationId : (0, o.Wh)(e)?.id
              return "chat_school_receipt" !== l.surface && null == t
                ? null
                : JSON.stringify(["entity", t, l.messageId, l.surface, l.kind, l.id])
            },
            () => r(e, l, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION"),
          )
        },
      },
    )
  },
  WbSP(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      i = l("on57"),
      o = l("zTeN"),
      n = l("KDax"),
      r = l("rxj0"),
      d = l("tt6P"),
      c = l("zeuB")
    function u(e) {
      let t = null == e ? null : URL.parse(e)
      return null == t ? [] : [t]
    }
    l.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            l,
            h,
            p = (0, s.c)(13),
            { citations: m, faviconOrigin: g, schoolIds: f, modal: x, variant: y } = e,
            v = void 0 !== x && x,
            C = void 0 === y ? "chips" : y,
            b = (0, o.Ul)(r.chatGptConsumerLockdownAccountState$),
            w = (0, o._U)(c.E, m?.length ? f : void 0)
          if (p[0] !== m || p[1] !== g || p[2] !== w || p[3] !== b || p[4] !== v || p[5] !== C) {
            let e = [g, ...w].flatMap(u),
              s = "list" === C ? "flex-col" : "flex-wrap text-sm"
            ;(p[8] !== s ? ((t = (0, i.A)("flex gap-1", s)), (p[8] = s), (p[9] = t)) : (t = p[9]),
              (l = m?.map((t, l) => {
                let s = URL.parse(t.url),
                  o = e.find((e) => s?.hostname === e.hostname || s?.hostname.endsWith(`.${e.hostname}`))
                return (0, a.jsx)(
                  "li",
                  {
                    className: "max-w-full min-w-0",
                    children:
                      s?.protocol === "https:" || s?.protocol === "http:"
                        ? (0, a.jsxs)(n.t, {
                            className: "list" === C ? "flex items-start gap-3 py-1" : void 0,
                            appearance: "list" === C ? "inherit" : "source",
                            underline: "list" === C ? "none" : void 0,
                            href: s.href,
                            initiator: "external_link",
                            openTarget: v ? "external-browser" : void 0,
                            requiresConfirmation: !0,
                            tooltipContent: t.title,
                            children: [
                              (0, a.jsx)("span", {
                                className: (0, i.A)(
                                  "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface",
                                  "list" === C ? "size-6 border border-default" : "size-4",
                                ),
                                "aria-hidden": !0,
                                children: (0, a.jsx)(d.a, {
                                  className: "list" === C ? "icon-sm" : "icon-xs",
                                  globeSize: 12,
                                  href: o?.origin ?? s.origin,
                                  loadRemote: "disabled" === b && null != o,
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: (0, i.A)(
                                  "min-w-0",
                                  "list" === C
                                    ? "leading-5.75 break-words underline decoration-text-tertiary decoration-dotted underline-offset-4"
                                    : "truncate",
                                ),
                                children: t.title,
                              }),
                            ],
                          })
                        : t.title,
                  },
                  l,
                )
              })),
              (p[0] = m),
              (p[1] = g),
              (p[2] = w),
              (p[3] = b),
              (p[4] = v),
              (p[5] = C),
              (p[6] = t),
              (p[7] = l))
          } else ((t = p[6]), (l = p[7]))
          return (
            p[10] !== t || p[11] !== l
              ? ((h = (0, a.jsx)("ul", { className: t, children: l })), (p[10] = t), (p[11] = l), (p[12] = h))
              : (h = p[12]),
            h
          )
        },
      },
    )
  },
  RdSt(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      i = l("zTeN"),
      o = l("oyxz"),
      n = l("Qgfj"),
      r = l("Niy1"),
      d = l("OWtl")
    l.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            l,
            n,
            c,
            u = (0, s.c)(12),
            { fact: h, schoolId: p } = e,
            m = (0, i.gh)(d.u)
          return (
            u[0] !== p || u[1] !== m
              ? ((t = (e) =>
                  null == p ? void 0 : (0, r.zk)(m, e, { id: p, kind: "school", surface: "application_deadline" })),
                (u[0] = p),
                (u[1] = m),
                (u[2] = t))
              : (t = u[2]),
            u[3] !== h.label || u[4] !== h.text
              ? ((l = (0, a.jsx)("span", {
                  children: (0, a.jsx)(o.A, {
                    id: "collegePlan.school.deadline",
                    defaultMessage: "{label} — {date}",
                    values: { label: h.label, date: h.text },
                    description:
                      "A saved school's application deadline. Label is the researched round/program label and date is the complete saved deadline text; neither should be abbreviated or inferred from task dates.",
                  }),
                })),
                (u[3] = h.label),
                (u[4] = h.text),
                (u[5] = l))
              : (l = u[5]),
            u[6] !== h.reporting_period
              ? ((n = null != h.reporting_period && (0, a.jsx)("span", { children: h.reporting_period })),
                (u[6] = h.reporting_period),
                (u[7] = n))
              : (n = u[7]),
            u[8] !== t || u[9] !== l || u[10] !== n
              ? ((c = (0, a.jsxs)("span", {
                  ref: t,
                  className: "flex flex-col gap-1 text-sm break-words whitespace-normal text-secondary",
                  children: [l, n],
                })),
                (u[8] = t),
                (u[9] = l),
                (u[10] = n),
                (u[11] = c))
              : (c = u[11]),
            c
          )
        },
        a: function (e) {
          let t,
            l = (0, s.c)(4),
            { fact: i, showYear: r } = e,
            d = void 0 !== r && r
          return (
            l[0] !== i.due_date || l[1] !== i.label || l[2] !== d
              ? ((t = (0, a.jsx)("span", {
                  className: "text-sm break-words text-secondary",
                  children:
                    null == i.due_date
                      ? (0, a.jsx)(o.A, {
                          id: "collegePlan.schools.deadlineDetails",
                          defaultMessage: "See deadline details",
                          description:
                            "Saved school with deadline information but no selected calendar date; the school details contain the full explanation",
                        })
                      : (0, a.jsx)(o.A, {
                          id: "collegePlan.schools.compactDeadline",
                          defaultMessage: "{label} — {date}",
                          description:
                            "Compact application deadline for a saved school. Label is the saved application round, such as REA or Regular Decision; date is the localized calendar date.",
                          values: {
                            label: i.label,
                            date: (0, a.jsx)(
                              n.XU,
                              {
                                value: `${i.due_date}T12:00:00Z`,
                                timeZone: "UTC",
                                month: "short",
                                day: "numeric",
                                year: d ? "numeric" : void 0,
                              },
                              "date",
                            ),
                          },
                        }),
                })),
                (l[0] = i.due_date),
                (l[1] = i.label),
                (l[2] = d),
                (l[3] = t))
              : (t = l[3]),
            t
          )
        },
      },
    )
  },
  zlXx(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      i = l("zTeN"),
      o = l("rxj0"),
      n = l("tt6P"),
      r = l("bVeK")
    l.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            l = (0, s.c)(3),
            { faviconOrigin: d } = e,
            c = (0, i.Ul)(o.chatGptConsumerLockdownAccountState$)
          return (
            l[0] !== d || l[1] !== c
              ? ((t = (0, a.jsx)("span", {
                  className:
                    "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-default",
                  "aria-hidden": !0,
                  children:
                    null != d && "disabled" === c
                      ? (0, a.jsx)(n.a, { className: "icon-md", href: d })
                      : (0, a.jsx)(r.L$D, {}),
                })),
                (l[0] = d),
                (l[1] = c),
                (l[2] = t))
              : (t = l[2]),
            t
          )
        },
      },
    )
  },
  iPSa(e, t, l) {
    l.d(t, { S3: () => O, GT: () => Z, Ch: () => L })
    var a = l("ABep"),
      s = l("QosV"),
      i = l("AoaR"),
      o = l("lhyx"),
      n = l("iJY0")
    let r = (0, n.a)({
        name: "multicolor-book-open-dark-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 1.333374, y: 4.015625, width: 29.333374, height: 23.934204 },
          visualBounds: { x: 1.333374, y: 4.015625, width: 29.333374, height: 23.934204 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#F07C2B",
              bounds: { x: 1.333374, y: 5.085815, width: 29.333374, height: 22.864014 },
              wideGamut: "color(display-p3 0.9412 0.4863 0.1686)",
            },
            {
              role: "fixed",
              color: "#F1E4CC",
              bounds: { x: 4.09375, y: 4.015625, width: 11.911377, height: 20.994751 },
              wideGamut: "color(display-p3 0.9451 0.8941 0.8000)",
            },
            {
              role: "fixed",
              color: "#FFF4E1",
              bounds: { x: 16.005127, y: 4.015625, width: 11.911377, height: 20.994751 },
              wideGamut: "color(display-p3 1.0000 0.9569 0.8824)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.333374, y: 4.015625, width: 29.333374, height: 23.934204 },
          center: { x: 16.000061, y: 15.982727 },
          insets: { top: 4.015625, right: 1.333252, bottom: 4.050171, left: 1.333374 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000061, y: 15.982727 } },
        },
        capabilities: ["icon"],
        body: '<path d="M16 27.9498C15.5852 27.9498 15.1408 27.8312 14.6667 27.5646C11.4223 25.7572 7.51115 25.3424 4.26671 26.0683C2.40004 26.4831 1.33337 25.846 1.33337 23.935V8.5424C1.33337 7.32759 1.91115 6.29055 3.33337 5.78684C7.49633 4.33499 12.9482 5.19426 16 7.84611C19.0519 5.19426 24.5038 4.33499 28.6667 5.78684C30.089 6.29055 30.6667 7.32759 30.6667 8.5424V23.935C30.6667 25.846 29.6 26.4831 27.7334 26.0683C24.489 25.3424 20.5778 25.7572 17.3334 27.5646C16.8592 27.8312 16.4148 27.9498 16 27.9498Z" fill="#F07C2B"/> <path d="M4.50871 4.53673C8.45778 3.14646 13.9348 4.63572 16.0052 7.84222V25.0104C12.7792 22.9533 8.51094 22.5124 4.09375 23.2472V5.14046C4.09375 4.87126 4.25479 4.62612 4.50871 4.53673Z" fill="#F1E4CC"/> <path d="M27.5017 4.53673C23.5526 3.14646 18.0757 4.63572 16.0051 7.84222V25.0104C19.2311 22.9533 23.4994 22.5124 27.9166 23.2472V5.14046C27.9166 4.87126 27.7555 4.62612 27.5017 4.53673Z" fill="#FFF4E1"/>',
      }),
      d = (0, n.a)({
        name: "multicolor-book-open-light-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 1.333374, y: 4.015625, width: 29.333374, height: 23.934204 },
          visualBounds: { x: 1.333374, y: 4.015625, width: 29.333374, height: 23.934204 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#D9691E",
              bounds: { x: 1.333374, y: 5.085815, width: 29.333374, height: 22.864014 },
              wideGamut: "color(display-p3 0.8510 0.4118 0.1176)",
            },
            {
              role: "fixed",
              color: "#F1E4CC",
              bounds: { x: 4.09375, y: 4.015625, width: 11.911377, height: 20.994751 },
              wideGamut: "color(display-p3 0.9461 0.8931 0.8015)",
            },
            {
              role: "fixed",
              color: "#FFF4E1",
              bounds: { x: 16.005127, y: 4.015625, width: 11.911377, height: 20.994751 },
              wideGamut: "color(display-p3 1.0000 0.9569 0.8824)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.333374, y: 4.015625, width: 29.333374, height: 23.934204 },
          center: { x: 16.000061, y: 15.982727 },
          insets: { top: 4.015625, right: 1.333252, bottom: 4.050171, left: 1.333374 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000061, y: 15.982727 } },
        },
        capabilities: ["icon"],
        body: '<path d="M16 27.9498C15.5852 27.9498 15.1408 27.8312 14.6667 27.5646C11.4223 25.7572 7.51115 25.3424 4.26671 26.0683C2.40004 26.4831 1.33337 25.846 1.33337 23.935V8.5424C1.33337 7.32759 1.91115 6.29055 3.33337 5.78684C7.49633 4.33499 12.9482 5.19426 16 7.84611C19.0519 5.19426 24.5038 4.33499 28.6667 5.78684C30.089 6.29055 30.6667 7.32759 30.6667 8.5424V23.935C30.6667 25.846 29.6 26.4831 27.7334 26.0683C24.489 25.3424 20.5778 25.7572 17.3334 27.5646C16.8592 27.8312 16.4148 27.9498 16 27.9498Z" fill="#D9691E"/> <path d="M4.50871 4.53673C8.45778 3.14646 13.9348 4.63572 16.0052 7.84222V25.0104C12.7792 22.9533 8.51094 22.5124 4.09375 23.2472V5.14046C4.09375 4.87126 4.25479 4.62612 4.50871 4.53673Z" fill="#F1E4CC"/> <path d="M27.5017 4.53673C23.5526 3.14646 18.0757 4.63572 16.0051 7.84222V25.0104C19.2311 22.9533 23.4994 22.5124 27.9166 23.2472V5.14046C27.9166 4.87126 27.7555 4.62612 27.5017 4.53673Z" fill="#FFF4E1"/>',
      }),
      c = (0, n.a)({
        name: "multicolor-financial-services-dark-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
          visualBounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#91B91C",
              bounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
              wideGamut: "color(display-p3 0.5686 0.7255 0.1098)",
            },
            {
              role: "fixed",
              color: "#C5E158",
              bounds: { x: 8.024902, y: 7.082764, width: 15.949707, height: 15.591797 },
              wideGamut: "color(display-p3 0.7725 0.8824 0.3451)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
          center: { x: 16.000244, y: 15.999878 },
          insets: { top: 2.333252, right: 2.333008, bottom: 2.333496, left: 2.333496 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000244, y: 15.999878 } },
        },
        capabilities: ["icon"],
        body: '<path d="M12.4007 2.56593C14.8935 1.89807 17.4332 2.71003 19.09 4.46227C21.4016 3.7721 24.009 4.33993 25.8347 6.16548C27.6597 7.9907 28.2266 10.5973 27.5371 12.9085C29.2899 14.5653 30.1021 17.1062 29.4342 19.5995C28.7659 22.0932 26.7913 23.8874 24.4444 24.4455C23.886 26.7919 22.0929 28.7657 19.5998 29.4339C17.1064 30.1019 14.5656 29.2897 12.9088 27.5365C10.5975 28.2263 7.99115 27.6595 6.16588 25.8343C4.34086 24.0091 3.77273 21.4027 4.46212 19.0916C2.70953 17.4347 1.89835 14.8935 2.56636 12.4003C3.23444 9.90693 5.20794 8.11165 7.55445 7.5533C8.11307 5.20715 9.90771 3.23394 12.4007 2.56593Z" fill="#91B91C"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2707 7.28901C15.7176 7.01403 16.2822 7.01399 16.7291 7.28901L23.311 11.3398C24.5045 12.0748 23.9836 13.9142 22.5818 13.9144H21.7712V19.0596H21.9097C22.9079 19.0598 23.7171 19.8688 23.7171 20.867C23.7171 21.8653 22.9079 22.6745 21.9097 22.6745H10.0902C9.09184 22.6745 8.28282 21.8654 8.28275 20.867C8.28275 19.8688 9.0918 19.0596 10.0902 19.0596H10.2287V13.9144H9.41798C8.01599 13.9144 7.49503 12.0747 8.68877 11.3398L15.2707 7.28901ZM12.7327 13.9144V19.0596H14.7479V13.9144H12.7327ZM17.2519 13.9144V19.0596H19.2671V13.9144H17.2519Z" fill="#C5E158"/>',
      }),
      u = (0, n.a)({
        name: "multicolor-financial-services-light-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
          visualBounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#7EA91F",
              bounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
              wideGamut: "color(display-p3 0.4941 0.6627 0.1216)",
            },
            {
              role: "fixed",
              color: "#C5DB6E",
              bounds: { x: 8.024902, y: 7.082764, width: 15.949707, height: 15.591797 },
              wideGamut: "color(display-p3 0.7725 0.8588 0.4314)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.333496, y: 2.333252, width: 27.333496, height: 27.333252 },
          center: { x: 16.000244, y: 15.999878 },
          insets: { top: 2.333252, right: 2.333008, bottom: 2.333496, left: 2.333496 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000244, y: 15.999878 } },
        },
        capabilities: ["icon"],
        body: '<path d="M12.4007 2.56593C14.8935 1.89807 17.4332 2.71003 19.09 4.46227C21.4016 3.7721 24.009 4.33993 25.8347 6.16548C27.6597 7.9907 28.2266 10.5973 27.5371 12.9085C29.2899 14.5653 30.1021 17.1062 29.4342 19.5995C28.7659 22.0932 26.7913 23.8874 24.4444 24.4455C23.886 26.7919 22.0929 28.7657 19.5998 29.4339C17.1064 30.1019 14.5656 29.2897 12.9088 27.5365C10.5975 28.2263 7.99115 27.6595 6.16588 25.8343C4.34086 24.0091 3.77273 21.4027 4.46212 19.0916C2.70953 17.4347 1.89835 14.8935 2.56636 12.4003C3.23444 9.90693 5.20794 8.11165 7.55445 7.5533C8.11307 5.20715 9.90771 3.23394 12.4007 2.56593Z" fill="#7EA91F"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2707 7.28901C15.7176 7.01403 16.2822 7.01399 16.7291 7.28901L23.311 11.3398C24.5045 12.0748 23.9836 13.9142 22.5818 13.9144H21.7712V19.0596H21.9097C22.9079 19.0598 23.7171 19.8688 23.7171 20.867C23.7171 21.8653 22.9079 22.6745 21.9097 22.6745H10.0902C9.09184 22.6745 8.28282 21.8654 8.28275 20.867C8.28275 19.8688 9.0918 19.0596 10.0902 19.0596H10.2287V13.9144H9.41798C8.01599 13.9144 7.49503 12.0747 8.68877 11.3398L15.2707 7.28901ZM12.7327 13.9144V19.0596H14.7479V13.9144H12.7327ZM17.2519 13.9144V19.0596H19.2671V13.9144H17.2519Z" fill="#C5DB6E"/>',
      }),
      h = (0, n.a)({
        name: "multicolor-paint-palette-dark-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
          visualBounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#FFC78F",
              bounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
              wideGamut: "color(display-p3 1.0000 0.7804 0.5608)",
            },
            {
              role: "fixed",
              color: "#04BB9F",
              bounds: { x: 20.966797, y: 12.333374, width: 3.666748, height: 3.666626 },
              wideGamut: "color(display-p3 0.0157 0.7333 0.6235)",
            },
            {
              role: "fixed",
              color: "#FF933B",
              bounds: { x: 17.716797, y: 7.416626, width: 3.666748, height: 3.666626 },
              wideGamut: "color(display-p3 1.0000 0.5765 0.2314)",
            },
            {
              role: "fixed",
              color: "#FF3D5F",
              bounds: { x: 11.656006, y: 8.196167, width: 3.666504, height: 3.666626 },
              wideGamut: "color(display-p3 1.0000 0.2392 0.3725)",
            },
            {
              role: "fixed",
              color: "#A25BFF",
              bounds: { x: 7.989258, y: 13.560913, width: 3.666748, height: 3.666626 },
              wideGamut: "color(display-p3 0.6353 0.3569 1.0000)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
          center: { x: 16.000122, y: 15.999939 },
          insets: { top: 2.666626, right: 2.666504, bottom: 2.666748, left: 2.666748 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000122, y: 15.999939 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7006 2.66663C24.9335 2.66688 29.3331 7.19989 29.3334 13.6328C29.3334 21.6658 20.6506 29.3329 14.5339 29.3333C11.6839 29.3333 10.1003 27.9994 10.1003 25.6328C10.1005 24.5998 10.4504 23.4837 10.4506 22.7838C10.4506 22.5006 10.267 22.2673 10.0339 22.2669C9.1506 22.2669 8.56648 24.6172 6.14981 24.6172C4.10007 24.6169 2.66689 22.3168 2.66675 18.8672C2.66675 9.80048 9.71727 2.66663 18.7006 2.66663ZM16.7162 18.6732C15.2141 18.6734 14.0082 19.8793 14.0079 21.3814C14.0079 22.8838 15.2139 24.0908 16.7162 24.0912C18.2187 24.0912 19.4258 22.884 19.4258 21.3814C19.4255 19.8792 18.2186 18.6732 16.7162 18.6732Z" fill="#FFC78F"/> <path d="M22.8001 12.3334C21.7835 12.3334 20.9668 13.15 20.9668 14.1667C20.9668 15.1834 21.7835 16 22.8001 16C23.8168 16 24.6335 15.1834 24.6335 14.1667C24.6335 13.15 23.8168 12.3334 22.8001 12.3334Z" fill="#04BB9F"/> <path d="M19.5501 7.41663C18.5335 7.41663 17.7168 8.23329 17.7168 9.24996C17.7168 10.2666 18.5335 11.0833 19.5501 11.0833C20.5668 11.0833 21.3835 10.2666 21.3835 9.24996C21.3835 8.23329 20.5668 7.41663 19.5501 7.41663Z" fill="#FF933B"/> <path d="M13.4893 8.19617C12.4727 8.19617 11.656 9.01283 11.656 10.0295C11.656 11.0462 12.4727 11.8628 13.4893 11.8628C14.506 11.8628 15.3226 11.0462 15.3226 10.0295C15.3226 9.01283 14.506 8.19617 13.4893 8.19617Z" fill="#FF3D5F"/> <path d="M9.82259 13.5609C8.80592 13.5609 7.98926 14.3776 7.98926 15.3942C7.98926 16.4109 8.80592 17.2276 9.82259 17.2276C10.8393 17.2276 11.6559 16.4109 11.6559 15.3942C11.6559 14.3776 10.8393 13.5609 9.82259 13.5609Z" fill="#A25BFF"/>',
      }),
      p = (0, n.a)({
        name: "multicolor-paint-palette-light-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
          visualBounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#FFD4A3",
              bounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
              wideGamut: "color(display-p3 1.0000 0.8314 0.6392)",
            },
            {
              role: "fixed",
              color: "#04BB9F",
              bounds: { x: 20.966797, y: 12.333374, width: 3.666748, height: 3.666626 },
              wideGamut: "color(display-p3 0.0157 0.7333 0.6235)",
            },
            {
              role: "fixed",
              color: "#FF933B",
              bounds: { x: 17.716797, y: 7.416626, width: 3.666748, height: 3.666626 },
              wideGamut: "color(display-p3 1.0000 0.5765 0.2314)",
            },
            {
              role: "fixed",
              color: "#FF3D5F",
              bounds: { x: 11.656006, y: 8.196167, width: 3.666504, height: 3.666626 },
              wideGamut: "color(display-p3 1.0000 0.2392 0.3725)",
            },
            {
              role: "fixed",
              color: "#A25BFF",
              bounds: { x: 7.989258, y: 13.560913, width: 3.666748, height: 3.666626 },
              wideGamut: "color(display-p3 0.6353 0.3569 1.0000)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.666748, y: 2.666626, width: 26.666748, height: 26.666626 },
          center: { x: 16.000122, y: 15.999939 },
          insets: { top: 2.666626, right: 2.666504, bottom: 2.666748, left: 2.666748 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000122, y: 15.999939 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7006 2.66663C24.9335 2.66688 29.3331 7.19989 29.3334 13.6328C29.3334 21.6658 20.6506 29.3329 14.5339 29.3333C11.6839 29.3333 10.1003 27.9994 10.1003 25.6328C10.1005 24.5998 10.4504 23.4837 10.4506 22.7838C10.4506 22.5006 10.267 22.2673 10.0339 22.2669C9.1506 22.2669 8.56648 24.6172 6.14981 24.6172C4.10007 24.6169 2.66689 22.3168 2.66675 18.8672C2.66675 9.80048 9.71727 2.66663 18.7006 2.66663ZM16.7162 18.6732C15.2141 18.6734 14.0082 19.8793 14.0079 21.3814C14.0079 22.8838 15.2139 24.0908 16.7162 24.0912C18.2187 24.0912 19.4258 22.884 19.4258 21.3814C19.4255 19.8792 18.2186 18.6732 16.7162 18.6732Z" fill="#FFD4A3"/> <path d="M22.8001 12.3334C21.7835 12.3334 20.9668 13.15 20.9668 14.1667C20.9668 15.1834 21.7835 16 22.8001 16C23.8168 16 24.6335 15.1834 24.6335 14.1667C24.6335 13.15 23.8168 12.3334 22.8001 12.3334Z" fill="#04BB9F"/> <path d="M19.5501 7.41663C18.5335 7.41663 17.7168 8.23329 17.7168 9.24996C17.7168 10.2666 18.5335 11.0833 19.5501 11.0833C20.5668 11.0833 21.3835 10.2666 21.3835 9.24996C21.3835 8.23329 20.5668 7.41663 19.5501 7.41663Z" fill="#FF933B"/> <path d="M13.4893 8.19617C12.4727 8.19617 11.656 9.01283 11.656 10.0295C11.656 11.0462 12.4727 11.8628 13.4893 11.8628C14.506 11.8628 15.3226 11.0462 15.3226 10.0295C15.3226 9.01283 14.506 8.19617 13.4893 8.19617Z" fill="#FF3D5F"/> <path d="M9.82259 13.5609C8.80592 13.5609 7.98926 14.3776 7.98926 15.3942C7.98926 16.4109 8.80592 17.2276 9.82259 17.2276C10.8393 17.2276 11.6559 16.4109 11.6559 15.3942C11.6559 14.3776 10.8393 13.5609 9.82259 13.5609Z" fill="#A25BFF"/>',
      })
    var m = l("on57"),
      g = l("zTeN"),
      f = l("zd8w"),
      x = l("Wf1j"),
      y = l("oyxz"),
      v = l("HZfM"),
      C = l("SPnB"),
      b = l("LtEv"),
      w = l("OOaz"),
      k = l("Xslx"),
      j = l("Niy1"),
      A = l("VBQS"),
      _ = l("jd9V"),
      P = l("hsIu"),
      M = l("Sm6l"),
      I = l("HOLv"),
      N = l("bVeK"),
      S = l("FrrB"),
      T = l("VL1D"),
      F = l("RNul"),
      G = l("nlNF"),
      E = l("EEop"),
      $ = l("OWtl"),
      H = l("a6Zv"),
      B = l("RdSt"),
      q = l("zlXx"),
      R = l("XZh4")
    function O(e) {
      let t,
        l,
        i,
        o,
        n,
        r,
        d,
        c = (0, s.c)(28),
        { setupAction: u } = e,
        h = (0, g.gh)($.u),
        p = (0, g.Ul)(R.WS),
        { data: m } = (0, g.Ul)(p ? P.pH : null) ?? {},
        j = m?.has_profile === !0,
        I = (0, x.A)(),
        F = (0, v.Zp)(),
        H = (0, f.useRef)(!1),
        [B, q] = (0, f.useState)(!1),
        [O, V] = (0, f.useState)(!1)
      c[0] !== I || c[1] !== F || c[2] !== h
        ? ((t = () => {
            if (H.current) return
            ;((H.current = !0), q(!0), V(!1))
            let e = h.get(C.chatGptAuthenticatedAccountId$),
              t = h.get(C.chatGptAuthenticatedUserId$),
              l = h.get(P.pH).data?.plan_id,
              a = h.get(G.x2),
              s = () =>
                h.get(C.chatGptAuthenticatedAccountId$) === e &&
                h.get(C.chatGptAuthenticatedUserId$) === t &&
                h.get(P.pH).data?.plan_id === l &&
                h.get(G.x2) === a
            ;(async () => {
              let e = await (0, _.u)(h, "chat")
              if (null == e || !s()) return
              let t = (0, A.xR)(h.query.getData(E.Pc, (0, A.br)()))
              if (null == t) return void V(!0)
              let l = (0, w.TF)(e),
                a = (0, k.h)(h, l, [t]),
                i = await (0, b.submitChatGptFollowUp)(h, {
                  conversationId: l,
                  prompt: I.formatMessage({
                    id: "collegePlan.schools.researchPrompt",
                    defaultMessage: "Help me add a school to my college plan.",
                    description:
                      "Visible student message sent once when Add schools is clicked to request adding a school to the college plan",
                  }),
                  systemHints: [t],
                  requireDispatchAcceptance: !0,
                  isSubmissionCurrent: s,
                }).finally(a)
              s() && (i ? await F(`/college-plan/c/${encodeURIComponent(e)}`) : V(!0))
            })()
              .catch(() => {
                s() && V(!0)
              })
              .finally(() => {
                ;((H.current = !1), q(!1))
              })
          }),
          (c[0] = I),
          (c[1] = F),
          (c[2] = h),
          (c[3] = t))
        : (t = c[3])
      let z = t,
        Z = p ? "primary" : "outlineSurface",
        L = p ? "dialog" : "detailAction"
      ;(c[4] !== p || c[5] !== I
        ? ((l = p
            ? void 0
            : I.formatMessage({
                id: "collegePlan.schools.add",
                defaultMessage: "Add schools",
                description: "Starts a College Plan research chat; does not save a school",
              })),
          (c[4] = p),
          (c[5] = I),
          (c[6] = l))
        : (l = c[6]),
        c[7] !== p
          ? ((i = p
              ? (0, a.jsx)(y.A, {
                  id: "collegePlan.schools.empty.add",
                  defaultMessage: "Add a school",
                  description:
                    "Primary button in the College Plan empty schools card; starts the existing chat flow to research and save the first school",
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(N.ONy, {}),
                    (0, a.jsx)(y.A, {
                      id: "collegePlan.schools.addButton",
                      defaultMessage: "Add",
                      description:
                        "Button in the My schools card header that starts a chat to add schools to College Plan",
                    }),
                  ],
                })),
            (c[7] = p),
            (c[8] = i))
          : (i = c[8]),
        c[9] !== B || c[10] !== z || c[11] !== Z || c[12] !== L || c[13] !== l || c[14] !== i
          ? ((o = (0, a.jsx)(M.$, {
              color: Z,
              size: L,
              radius: "full",
              disabled: B,
              "aria-label": l,
              onClick: z,
              children: i,
            })),
            (c[9] = B),
            (c[10] = z),
            (c[11] = Z),
            (c[12] = L),
            (c[13] = l),
            (c[14] = i),
            (c[15] = o))
          : (o = c[15]),
        c[16] !== O
          ? ((n =
              O &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, a.jsx)(y.A, {
                  id: "collegePlan.schools.researchError",
                  defaultMessage: "College Plan couldn’t start research. Try again.",
                  description: "Error starting the research request from Add schools",
                }),
              })),
            (c[16] = O),
            (c[17] = n))
          : (n = c[17]),
        c[18] !== o || c[19] !== n
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [o, n] })),
            (c[18] = o),
            (c[19] = n),
            (c[20] = r))
          : (r = c[20]))
      let W = r
      return (
        c[21] !== W || c[22] !== p || c[23] !== O || c[24] !== j || c[25] !== B || c[26] !== u
          ? ((d = (0, a.jsx)("section", {
              id: "college-schools",
              "aria-labelledby": "college-schools-heading",
              tabIndex: -1,
              children: p
                ? (0, a.jsx)(S.A, {
                    layout: "outlined",
                    className: "select-none",
                    illustration: (0, a.jsx)(D, {}),
                    title: (0, a.jsx)("h2", {
                      id: "college-schools-heading",
                      children: j
                        ? (0, a.jsx)(y.A, {
                            id: "collegePlan.schools.empty.title.savedProfile",
                            defaultMessage: "Your profile is saved. Ready to add schools?",
                            description:
                              "Heading in the College Plan empty schools card acknowledging at least one saved profile answer and inviting the student to add their first school. The profile may be partial.",
                          })
                        : (0, a.jsx)(y.A, {
                            id: "collegePlan.schools.empty.title",
                            defaultMessage: "Keep your applications on track",
                            description:
                              "Heading of the College Plan getting-started card when no schools or intake answers have been saved",
                          }),
                    }),
                    description: j
                      ? (0, a.jsx)(y.A, {
                          id: "collegePlan.schools.empty.description.savedProfile",
                          defaultMessage: "By adding schools, ChatGPT can help track deadlines, tasks, and next steps",
                          description:
                            "Supporting text in the College Plan empty schools card after profile answers are saved, explaining the benefit of adding schools.",
                        })
                      : (0, a.jsx)(y.A, {
                          id: "collegePlan.schools.empty.description",
                          defaultMessage:
                            "Add schools you’re considering to see requirements, deadlines, and next steps in one place.",
                          description:
                            "Supporting text in the College Plan getting-started card, explaining the benefit of adding schools after setup",
                        }),
                    actions: j || B || O ? W : u,
                  })
                : (0, a.jsx)(T.zU, {
                    variant: "artifact-list",
                    children: (0, a.jsxs)("section", {
                      className: "flex flex-col gap-4 p-5",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-wrap items-center justify-between gap-3",
                          children: [
                            (0, a.jsx)("h2", {
                              id: "college-schools-heading",
                              className: "text-lg font-semibold",
                              children: (0, a.jsx)(y.A, {
                                id: "collegePlan.schools.title",
                                defaultMessage: "My schools",
                                description: "Heading for the student's saved schools on College Plan",
                              }),
                            }),
                            W,
                          ],
                        }),
                        (0, a.jsx)(U, {}),
                      ],
                    }),
                  }),
            })),
            (c[21] = W),
            (c[22] = p),
            (c[23] = O),
            (c[24] = j),
            (c[25] = B),
            (c[26] = u),
            (c[27] = d))
          : (d = c[27]),
        d
      )
    }
    function D() {
      let e,
        t,
        l,
        i,
        o = (0, s.c)(10),
        n = (0, H.Y)(),
        m = n ? r : d
      o[0] !== m
        ? ((e = (0, a.jsx)("span", {
            className:
              "flex size-12 -rotate-6 items-center justify-center rounded-xl border border-subtle bg-surface shadow-sm",
            children: (0, a.jsx)(I.I, { asset: m }),
          })),
          (o[0] = m),
          (o[1] = e))
        : (e = o[1])
      let g = n ? c : u
      o[2] !== g
        ? ((t = (0, a.jsx)("span", {
            className:
              "relative flex size-12 items-center justify-center rounded-xl border border-subtle bg-surface shadow-sm",
            children: (0, a.jsx)(I.I, { asset: g }),
          })),
          (o[2] = g),
          (o[3] = t))
        : (t = o[3])
      let f = n ? h : p
      return (
        o[4] !== f
          ? ((l = (0, a.jsx)("span", {
              className:
                "flex size-12 rotate-6 items-center justify-center rounded-xl border border-subtle bg-surface shadow-sm",
              children: (0, a.jsx)(I.I, { asset: f }),
            })),
            (o[4] = f),
            (o[5] = l))
          : (l = o[5]),
        o[6] !== e || o[7] !== t || o[8] !== l
          ? ((i = (0, a.jsxs)("div", {
              "aria-hidden": !0,
              className: "flex items-center -space-x-2",
              children: [e, t, l],
            })),
            (o[6] = e),
            (o[7] = t),
            (o[8] = l),
            (o[9] = i))
          : (i = o[9]),
        i
      )
    }
    function U(e) {
      let t,
        l,
        i,
        o,
        n,
        r = (0, s.c)(18),
        { source: d } = e,
        c = void 0 !== d && d,
        {
          data: u,
          isPending: h,
          isError: p,
          isFetching: f,
          hasNextPage: x,
          refetch: v,
          fetchNextPage: C,
        } = (0, g.Ul)(R.f1)
      return (
        r[0] !== h ? ((t = h && (0, a.jsx)(F.y, {})), (r[0] = h), (r[1] = t)) : (t = r[1]),
        r[2] !== p || r[3] !== f || r[4] !== v
          ? ((l =
              p &&
              (0, a.jsxs)("div", {
                role: "alert",
                className: "flex flex-col items-start gap-2",
                children: [
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(y.A, {
                      id: "collegePlan.schools.readError",
                      defaultMessage: "Your schools couldn’t be refreshed",
                      description: "An error reading saved schools; any existing rows may be out of date",
                    }),
                  }),
                  (0, a.jsx)(M.$, {
                    color: "secondary",
                    disabled: f,
                    onClick: () => void v(),
                    children: (0, a.jsx)(y.A, {
                      id: "collegePlan.schools.retry",
                      defaultMessage: "Try again",
                      description: "Retry reading saved schools",
                    }),
                  }),
                ],
              })),
            (r[2] = p),
            (r[3] = f),
            (r[4] = v),
            (r[5] = l))
          : (l = r[5]),
        r[6] !== u || r[7] !== c
          ? ((i =
              u?.pages.some(z) &&
              (0, a.jsx)("ul", {
                className: (0, m.A)("divide-y divide-border-subtle", c && "border-b border-border-subtle"),
                children: u.pages
                  .flatMap(V)
                  .map((e) => (0, a.jsx)("li", { children: (0, a.jsx)(Z, { school: e, source: c }) }, e.id)),
              })),
            (r[6] = u),
            (r[7] = c),
            (r[8] = i))
          : (i = r[8]),
        r[9] !== C || r[10] !== x || r[11] !== f
          ? ((o =
              x &&
              (0, a.jsx)(M.$, {
                color: "secondary",
                disabled: f,
                onClick: () => void C(),
                children: (0, a.jsx)(y.A, {
                  id: "collegePlan.schools.more",
                  defaultMessage: "Show more schools",
                  description: "Load the next page of saved schools",
                }),
              })),
            (r[9] = C),
            (r[10] = x),
            (r[11] = f),
            (r[12] = o))
          : (o = r[12]),
        r[13] !== t || r[14] !== l || r[15] !== i || r[16] !== o
          ? ((n = (0, a.jsxs)(a.Fragment, { children: [t, l, i, o] })),
            (r[13] = t),
            (r[14] = l),
            (r[15] = i),
            (r[16] = o),
            (r[17] = n))
          : (n = r[17]),
        n
      )
    }
    function V(e) {
      return e.schools
    }
    function z(e) {
      return e.schools.length > 0
    }
    function Z(e) {
      let t,
        l,
        n,
        r,
        d,
        c,
        u,
        h = (0, s.c)(33),
        { school: p, source: f, readOnly: x } = e,
        y = void 0 !== f && f,
        C = void 0 !== x && x,
        b = (0, g.gh)($.u),
        w = (0, v.zy)(),
        k = (0, v.RQ)(i.O3),
        A = y ? "sources" : "school_list"
      h[0] !== p.id || h[1] !== A
        ? ((t = { id: p.id, kind: "school", surface: A }), (h[0] = p.id), (h[1] = A), (h[2] = t))
        : (t = h[2])
      let _ = t
      h[3] !== C ||
      h[4] !== p.application_deadline ||
      h[5] !== p.completed_tasks ||
      h[6] !== p.favicon_origin ||
      h[7] !== p.name ||
      h[8] !== p.total_tasks ||
      h[9] !== y
        ? ((l = y
            ? (0, a.jsxs)("span", {
                className: "flex min-h-16 items-center gap-2.5 py-3 text-sm",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "flex size-10 shrink-0 items-center justify-center rounded-lg border border-default bg-surface text-secondary",
                    "aria-hidden": !0,
                    children: (0, a.jsx)(I.I, { asset: o.H }),
                  }),
                  (0, a.jsx)("span", {
                    className: "min-w-0 truncate font-medium text-default",
                    title: p.name,
                    children: p.name,
                  }),
                ],
              })
            : (0, a.jsxs)("span", {
                className: "flex items-start gap-4 py-4",
                children: [
                  (0, a.jsx)(q.h, { faviconOrigin: p.favicon_origin }),
                  (0, a.jsxs)("span", {
                    className: "flex min-w-0 flex-1 flex-col gap-2",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "flex items-center gap-1 text-base",
                        children: [
                          (0, a.jsx)("span", { className: "break-words", children: p.name }),
                          !C && (0, a.jsx)(N.J6i, {}),
                        ],
                      }),
                      (0, a.jsx)(L, { completed: p.completed_tasks, total: p.total_tasks }),
                      null != p.application_deadline && (0, a.jsx)(B.a, { fact: p.application_deadline }),
                    ],
                  }),
                ],
              })),
          (h[3] = C),
          (h[4] = p.application_deadline),
          (h[5] = p.completed_tasks),
          (h[6] = p.favicon_origin),
          (h[7] = p.name),
          (h[8] = p.total_tasks),
          (h[9] = y),
          (h[10] = l))
        : (l = h[10])
      let P = l
      if (C) {
        let e
        return (h[11] !== P ? ((e = (0, a.jsx)("div", { children: P })), (h[11] = P), (h[12] = e)) : (e = h[12]), e)
      }
      let M = `college-school-${p.id}`
      h[13] !== _ || h[14] !== b
        ? ((n = (e) => (0, j.zk)(b, e, _)), (h[13] = _), (h[14] = b), (h[15] = n))
        : (n = h[15])
      let S = `/college-plan/schools/${encodeURIComponent(p.id)}`,
        T = null == k
      h[16] !== _ || h[17] !== b ? ((r = () => (0, j.j2)(b, _)), (h[16] = _), (h[17] = b), (h[18] = r)) : (r = h[18])
      let F = null != k ? w : w.state?.collegePlanHome,
        G = null != k ? `college-school-${p.id}` : w.state?.collegePlanTrigger
      h[19] !== F || h[20] !== G
        ? ((d = { collegePlanHome: F, collegePlanTrigger: G }), (h[19] = F), (h[20] = G), (h[21] = d))
        : (d = h[21])
      let E =
        y &&
        "cursor-interaction rounded-lg hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      return (
        h[22] !== E ? ((c = (0, m.A)("block select-none", E)), (h[22] = E), (h[23] = c)) : (c = h[23]),
        h[24] !== P ||
        h[25] !== r ||
        h[26] !== d ||
        h[27] !== c ||
        h[28] !== M ||
        h[29] !== n ||
        h[30] !== S ||
        h[31] !== T
          ? ((u = (0, a.jsx)(v.N_, {
              id: M,
              ref: n,
              to: S,
              replace: T,
              onClick: r,
              state: d,
              className: c,
              children: P,
            })),
            (h[24] = P),
            (h[25] = r),
            (h[26] = d),
            (h[27] = c),
            (h[28] = M),
            (h[29] = n),
            (h[30] = S),
            (h[31] = T),
            (h[32] = u))
          : (u = h[32]),
        u
      )
    }
    function L(e) {
      let t,
        l,
        i,
        o = (0, s.c)(13),
        { completed: n, total: r, prominent: d } = e,
        c = void 0 !== d && d,
        u = (0, x.A)()
      o[0] !== n || o[1] !== c || o[2] !== r
        ? ((t =
            0 === r
              ? (0, a.jsx)(y.A, {
                  id: "collegePlan.schools.noTasks",
                  defaultMessage: "No tasks yet",
                  description: "Saved school with an empty task list; this is not completion of an application",
                })
              : (0, a.jsx)(y.A, {
                  id: "collegePlan.schools.taskFraction",
                  defaultMessage: "<count>{completed, number}</count> / {total, plural, one {# task} other {# tasks}}",
                  values: {
                    completed: n,
                    total: r,
                    count: (e) =>
                      (0, a.jsx)(
                        "span",
                        { className: c ? "text-2xl font-semibold text-default" : void 0, children: e },
                        "count",
                      ),
                  },
                  description:
                    "Completed checklist task count over total tasks, not application submission; the count tag emphasizes the numerator",
                })),
          (o[0] = n),
          (o[1] = c),
          (o[2] = r),
          (o[3] = t))
        : (t = o[3])
      let h = t
      o[4] !== n || o[5] !== u || o[6] !== c || o[7] !== r
        ? ((l =
            r > 0 &&
            (0, a.jsx)("div", {
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": r,
              "aria-valuenow": n,
              "aria-label": u.formatMessage(
                {
                  id: "collegePlan.schools.taskProgress",
                  defaultMessage: "{completed} of {total, plural, one {# task} other {# tasks}} complete",
                  description:
                    "Saved task progress, not evidence of application submission; completed and total are integer task counts",
                },
                { completed: n, total: r },
              ),
              className: (0, m.A)("h-1.5 overflow-hidden rounded-full bg-text/10", c ? "shrink-0" : "flex-1"),
              children: (0, a.jsx)("div", {
                className: "h-full rounded-full bg-neutral-solid",
                style: { width: `${0 === r ? 0 : (100 * n) / r}%` },
              }),
            })),
          (o[4] = n),
          (o[5] = u),
          (o[6] = c),
          (o[7] = r),
          (o[8] = l))
        : (l = o[8])
      let p = l
      return (
        o[9] !== p || o[10] !== h || o[11] !== c
          ? ((i = c
              ? (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [(0, a.jsx)("span", { className: "text-sm text-secondary", children: h }), p],
                })
              : (0, a.jsxs)("span", {
                  className: "flex items-center gap-4",
                  children: [p, (0, a.jsx)("span", { className: "shrink-0 text-sm text-secondary", children: h })],
                })),
            (o[9] = p),
            (o[10] = h),
            (o[11] = c),
            (o[12] = i))
          : (i = o[12]),
        i
      )
    }
  },
  XZh4(e, t, l) {
    var a = l("HY2m"),
      s = l("zTeN"),
      i = l("SPnB"),
      o = l("Ghh3"),
      n = l("bxvp"),
      r = l("hsIu"),
      d = l("vLsY"),
      c = l("OWtl"),
      u = l("GDNt"),
      h = l("Wl5X")
    let p = (0, s.$A)(c.u, ({ get: e }) => {
        let t = e(i.chatGptAuthenticatedAccountId$),
          l = e(i.chatGptAuthenticatedUserId$),
          a = e(r.pH).data?.plan_id
        return {
          queryKey: ["college-plan-schools", t, l, a],
          enabled: null != t && null != l && null != a && e(n.E$),
          initialPageParam: "",
          getNextPageParam: (e) => e.next_cursor,
          queryFn: ({ pageParam: e, signal: s }) => {
            if (null == t || null == l || null == a) throw Error("College Plan is unavailable")
            return o.Request.safeGet("/college-plan/schools", {
              parameters: { query: { cursor: e || void 0, limit: 20 } },
              additionalHeaders: { "ChatGPT-Account-ID": t },
              expectedIdentity: { accountId: t, userId: l },
              signal: s,
            })
          },
          staleTime: 0,
          retry: !1,
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
        }
      }),
      m = (0, s.un)(c.u, ({ get: e }) => {
        let { data: t, isSuccess: l, hasNextPage: a } = e(p)
        return l && !a && t.pages.every((e) => 0 === e.schools.length)
      }),
      g = (0, s.vU)(c.u, (e, { get: t }) => {
        let l = t(i.chatGptAuthenticatedAccountId$),
          a = t(i.chatGptAuthenticatedUserId$),
          s = t(r.pH).data?.plan_id
        return {
          queryKey: ["college-plan-school", l, a, s, e],
          enabled: null != l && null != a && null != s && t(n.E$),
          queryFn: ({ signal: t }) => {
            if (null == l || null == a || null == s) throw Error("College Plan is unavailable")
            return o.Request.safeGet("/college-plan/schools/{school_id}", {
              parameters: { path: { school_id: e } },
              additionalHeaders: { "ChatGPT-Account-ID": l },
              expectedIdentity: { accountId: l, userId: a },
              expectedErrorStatuses: [404],
              signal: t,
            })
          },
          staleTime: 0,
          retry: !1,
          networkMode: "always",
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
        }
      }),
      f = (0, s.c4)(c.u, (e, { get: t, scope: l }) => {
        let a = t(i.chatGptAuthenticatedAccountId$),
          s = t(i.chatGptAuthenticatedUserId$),
          d = t(r.pH).data?.plan_id
        return {
          mutationKey: ["college-plan-completion", a, s, d, e],
          retry: !1,
          networkMode: "always",
          mutationFn: async ({ item: t, completed: c }) => {
            if (
              null == a ||
              null == s ||
              null == d ||
              l.get(i.chatGptAuthenticatedAccountId$) !== a ||
              l.get(i.chatGptAuthenticatedUserId$) !== s ||
              l.get(r.pH).data?.plan_id !== d ||
              !l.get(n.E$)
            )
              throw Error("College Plan changed before the task could be saved")
            let u = "string" == typeof e ? l.query.getOptions(g, e) : l.query.getOptions(h.r, e),
              p = l.queryClient.getQueryState(u.queryKey)
            if (p?.status !== "success" || p.isInvalidated || "idle" !== p.fetchStatus)
              throw Error("Refresh the task list before changing a task")
            let m =
              "string" == typeof e
                ? l.query.getData(g, e)?.items?.find(({ id: e }) => e === t.id)
                : l.query
                    .getData(h.r, e)
                    ?.pages.flatMap((e) => e.items)
                    .find(({ id: e }) => e === t.id)
            if (null == m || m.completed !== t.completed) throw Error("The task changed; review its saved state")
            try {
              await o.Request.safePatch("/college-plan/items/{item_id}", {
                parameters: { path: { item_id: t.id } },
                additionalHeaders: { "ChatGPT-Account-ID": a },
                expectedIdentity: { accountId: a, userId: s },
                retry: !1,
                requestBody: { completed: c },
              })
            } finally {
              await y(l, { accountId: a, userId: s, planId: d }, e)
            }
          },
        }
      }),
      x = (0, s.c4)(
        c.u,
        (e, { scope: t }) => {
          let l = () =>
            null != e.accountId &&
            null != e.userId &&
            null != e.planId &&
            t.get(i.chatGptAuthenticatedAccountId$) === e.accountId &&
            t.get(i.chatGptAuthenticatedUserId$) === e.userId &&
            t.query.getData(r.pH)?.plan_id === e.planId &&
            t.get(n.E$)
          return {
            mutationKey: ["college-plan-remove-school", e],
            retry: !1,
            networkMode: "always",
            mutationFn: async (s) => {
              if (!l() || null == e.accountId || null == e.userId) return
              let i = !1
              if ("remove" === s)
                try {
                  ;(await o.Request.safeDelete("/college-plan/schools/{school_id}", {
                    parameters: { path: { school_id: e.schoolId } },
                    additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
                    expectedIdentity: { accountId: e.accountId, userId: e.userId },
                    retry: !1,
                    expectedErrorStatuses: [401, 403, 404, 409, 503],
                  }),
                    (i = !0))
                } catch (e) {
                  if (!l()) return
                  if (e instanceof u.fk && (401 === e.status || 403 === e.status)) throw e
                }
              if (!i) {
                if ((await t.query.cancel(g, e.schoolId, { exact: !0 }), !l())) return
                try {
                  return (await t.query.fetch(g, e.schoolId), { status: "present" })
                } catch (e) {
                  if (!(e instanceof u.fk) || 404 !== e.status) throw e
                }
              }
              let n = ["college-plan-school", e.accountId, e.userId, e.planId],
                r = ["college-plan-schools", "college-plan-timeline"].map((t) => [t, e.accountId, e.userId, e.planId]),
                c = [...r, n]
              for (let e of (await Promise.all(c.map((e) => t.queryClient.cancelQueries({ queryKey: e }))), r))
                for (let l of t.queryClient.getQueryCache().findAll({ queryKey: e })) l.reset()
              t.queryClient
                .getQueryCache()
                .find({ queryKey: [...n, e.schoolId], exact: !0 })
                ?.setState({
                  data: void 0,
                  dataUpdatedAt: 0,
                  error: new u.fk("School removed", 404),
                  status: "error",
                  fetchStatus: "idle",
                })
              let h = a.t.isOnline(),
                p = await Promise.allSettled(
                  c.map(
                    (a) => (
                      (0, d.G)(a),
                      t.queryClient.invalidateQueries(
                        {
                          queryKey: a,
                          predicate: (t) => "college-plan-school" !== t.queryKey[0] || t.queryKey[4] !== e.schoolId,
                          refetchType: l() && h ? "active" : "none",
                        },
                        { throwOnError: !0 },
                      )
                    ),
                  ),
                )
              return { status: "removed", refreshFailed: !h || p.some((e) => "rejected" === e.status) }
            },
          }
        },
        { autoDispose: !1 },
      )
    async function y(e, { accountId: t, userId: l, planId: a }, s) {
      ;(await Promise.all([
        e.queryClient.resetQueries({ queryKey: ["college-plan-timeline", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-schools", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-school", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-task", t, l, a] }, { throwOnError: !0 }),
      ]),
        e.get(i.chatGptAuthenticatedAccountId$) === t &&
          e.get(i.chatGptAuthenticatedUserId$) === l &&
          e.get(r.pH).data?.plan_id === a &&
          ("string" == typeof s
            ? await e.queryClient.fetchQuery({ ...e.query.getOptions(g, s), staleTime: 0 })
            : await e.queryClient.fetchInfiniteQuery({ ...e.query.getOptions(h.r, s), staleTime: 0 })))
    }
    l.d(t, {}, { WS: m, c: g, dF: f, f1: p, ls: y, ur: x })
  },
  q6tK(e, t, l) {
    l.d(t, { _e: () => D, Tp: () => W })
    var a = l("ABep"),
      s = l("QosV"),
      i = l("lj8I")
    let o = (0, l("iJY0").a)({
      name: "notebook-badge-checkmark-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.75, y: 2.793213, width: 19.448242, height: 18.496094 },
        visualBounds: { x: 2.75, y: 2.793213, width: 19.448242, height: 18.496094 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.75, y: 2.793213, width: 19.448242, height: 18.496094 },
        center: { x: 12.474121, y: 12.04126 },
        insets: { top: 2.793213, right: 1.801758, bottom: 2.710693, left: 2.75 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.474121, y: 12.04126 },
          foreground: { x: 12.474121, y: 12.04126 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M20.8145 14.304C21.0361 13.954 21.4997 13.8499 21.8496 14.0715C22.1992 14.2933 22.3035 14.7569 22.082 15.1067C20.9306 16.9245 19.783 19.0609 18.4336 20.886C18.0589 21.3924 17.3253 21.4224 16.9043 20.9739L14.8633 18.7961C14.5801 18.4939 14.5953 18.0188 14.8975 17.7356C15.1996 17.4525 15.6738 17.4678 15.957 17.7698L17.5781 19.5002C18.7286 17.8577 19.6876 16.083 20.8145 14.304Z" fill="currentColor"/> <path d="M16.4912 2.79321C18.5621 2.79348 20.2412 4.47231 20.2412 6.54321V11.0071C20.2412 11.4211 19.9052 11.7568 19.4912 11.7571C19.077 11.7571 18.7412 11.4213 18.7412 11.0071V6.54321C18.7412 5.30074 17.7336 4.29348 16.4912 4.29321H7.53125C6.28861 4.29321 5.28125 5.30057 5.28125 6.54321V7.25024H5.5C5.91421 7.25024 6.25 7.58603 6.25 8.00024C6.24987 8.41435 5.91413 8.75024 5.5 8.75024H5.28125V11.2502H5.5C5.91421 11.2502 6.25 11.586 6.25 12.0002C6.24987 12.4143 5.91413 12.7502 5.5 12.7502H5.28125V15.2502H5.5C5.91421 15.2502 6.25 15.586 6.25 16.0002C6.24987 16.4143 5.91413 16.7502 5.5 16.7502H5.28125V17.4729C5.28125 18.7155 6.28861 19.7229 7.53125 19.7229H12.0117C12.4254 19.7234 12.7615 20.0592 12.7617 20.4729C12.7617 20.8868 12.4255 21.2224 12.0117 21.2229H7.53125C5.46018 21.2229 3.78125 19.544 3.78125 17.4729V16.7502H3.5C3.08587 16.7502 2.75013 16.4143 2.75 16.0002C2.75 15.586 3.08579 15.2502 3.5 15.2502H3.78125V12.7502H3.5C3.08587 12.7502 2.75013 12.4143 2.75 12.0002C2.75 11.586 3.08579 11.2502 3.5 11.2502H3.78125V8.75024H3.5C3.08587 8.75024 2.75013 8.41435 2.75 8.00024C2.75 7.58603 3.08579 7.25024 3.5 7.25024H3.78125V6.54321C3.78125 4.47215 5.46018 2.79321 7.53125 2.79321H16.4912Z" fill="currentColor"/> <path d="M13 12.2502C13.4142 12.2502 13.75 12.586 13.75 13.0002C13.7499 13.4143 13.4141 13.7502 13 13.7502H9C8.58587 13.7502 8.25013 13.4143 8.25 13.0002C8.25 12.586 8.58579 12.2502 9 12.2502H13Z" fill="currentColor"/> <path d="M15 8.25024C15.4142 8.25024 15.75 8.58603 15.75 9.00024C15.7499 9.41435 15.4141 9.75024 15 9.75024H9C8.58587 9.75024 8.25013 9.41435 8.25 9.00024C8.25 8.58603 8.58579 8.25024 9 8.25024H15Z" fill="currentColor"/>',
    })
    var n = l("on57"),
      r = l("zTeN"),
      d = l("zd8w"),
      c = l("Wf1j"),
      u = l("oyxz"),
      h = l("Qgfj"),
      p = l("qRqa"),
      m = l("SPnB"),
      g = l("Niy1"),
      f = l("hsIu"),
      x = l("Sm6l"),
      y = l("djbx"),
      v = l("JNtf"),
      C = l("bqtn"),
      b = l("HOLv"),
      w = l("bVeK"),
      k = l("VL1D"),
      j = l("RNul"),
      A = l("OWtl"),
      _ = l("GDNt"),
      P = l("WbSP"),
      M = l("RdSt"),
      I = l("zlXx"),
      N = l("iPSa"),
      S = l("XZh4"),
      T = l("bxvp"),
      F = l("mUDD"),
      G = l("SGsN"),
      E = l("soaw")
    function $(e) {
      let t,
        l,
        i,
        o,
        n,
        c,
        h = (0, s.c)(29),
        { school: p, onClose: g, onRemoved: x } = e,
        y = (0, r.gh)(A.u),
        v = (0, E.a)()
      h[0] !== p.id || h[1] !== y
        ? ((t = () => ({
            accountId: y.get(m.chatGptAuthenticatedAccountId$),
            userId: y.get(m.chatGptAuthenticatedUserId$),
            planId: y.query.getData(f.pH)?.plan_id,
            schoolId: p.id,
          })),
          (h[0] = p.id),
          (h[1] = y),
          (h[2] = t))
        : (t = h[2])
      let [C] = (0, d.useState)(t),
        b = (0, d.useRef)(!1)
      h[3] !== C.accountId || h[4] !== C.planId || h[5] !== C.userId || h[6] !== y
        ? ((l = () =>
            null != C.accountId &&
            null != C.userId &&
            null != C.planId &&
            y.get(m.chatGptAuthenticatedAccountId$) === C.accountId &&
            y.get(m.chatGptAuthenticatedUserId$) === C.userId &&
            y.query.getData(f.pH)?.plan_id === C.planId &&
            y.get(T.E$)),
          (h[3] = C.accountId),
          (h[4] = C.planId),
          (h[5] = C.userId),
          (h[6] = y),
          (h[7] = l))
        : (l = h[7])
      let w = l,
        { isError: k, isPending: j, mutate: _, variables: P } = (0, r._U)(S.ur, C),
        M = k || (j && "check" === P)
      h[8] !== w || h[9] !== v || h[10] !== j || h[11] !== _ || h[12] !== g || h[13] !== x || h[14] !== y
        ? ((i = (e) => {
            !b.current &&
              !j &&
              v() &&
              w() &&
              ((b.current = !0),
              _(e, {
                onSuccess: (e) => {
                  if (null != e && v() && w()) {
                    if ("present" === e.status) {
                      ;(g(),
                        y
                          .get(G.Id)
                          .warning(
                            (0, a.jsx)(u.A, {
                              id: "collegePlan.school.removal.review",
                              defaultMessage: "This school is still in your plan. Review it before trying again.",
                              description:
                                "The same saved school was read back after an uncertain removal. The confirmation closes so the student can review fresh information before explicitly confirming again.",
                            }),
                            { hasCloseButton: !0 },
                          ))
                      return
                    }
                    ;(e.refreshFailed &&
                      y
                        .get(G.Id)
                        .warning(
                          (0, a.jsx)(u.A, {
                            id: "collegePlan.school.removal.refreshFailed",
                            defaultMessage: "School removed. Your remaining schools couldn’t be refreshed.",
                            description:
                              "Removal is confirmed, but refreshing the remaining College Plan schools or tasks failed. This does not mean deletion should be retried.",
                          }),
                          { hasCloseButton: !0 },
                        ),
                      x())
                  }
                },
                onSettled: () => {
                  b.current = !1
                },
              }))
          }),
          (h[8] = w),
          (h[9] = v),
          (h[10] = j),
          (h[11] = _),
          (h[12] = g),
          (h[13] = x),
          (h[14] = y),
          (h[15] = i))
        : (i = h[15])
      let I = i
      return (
        h[16] !== M || h[17] !== g || h[18] !== I
          ? ((o = () => {
              b.current || (M && I("check"), g())
            }),
            (h[16] = M),
            (h[17] = g),
            (h[18] = I),
            (h[19] = o))
          : (o = h[19]),
        h[20] !== M || h[21] !== I
          ? ((n = () => I(M ? "check" : "remove")), (h[20] = M), (h[21] = I), (h[22] = n))
          : (n = h[22]),
        h[23] !== j || h[24] !== M || h[25] !== p || h[26] !== o || h[27] !== n
          ? ((c = (0, a.jsx)(H, { school: p, pending: j, unconfirmed: M, onClose: o, onConfirm: n })),
            (h[23] = j),
            (h[24] = M),
            (h[25] = p),
            (h[26] = o),
            (h[27] = n),
            (h[28] = c))
          : (c = h[28]),
        c
      )
    }
    function H(e) {
      let t,
        l,
        i,
        o,
        n,
        r,
        d,
        c,
        h,
        p,
        m,
        g,
        f,
        y,
        C = (0, s.c)(38),
        { school: b, pending: w, unconfirmed: k, onClose: j, onConfirm: A } = e
      ;(C[0] !== b.id || C[1] !== k
        ? ((t = {
            onCloseAutoFocus: (e) => {
              e.preventDefault()
              let t = document.getElementById(`college-school-actions-${b.id}`)
              !k && t instanceof HTMLButtonElement && !t.disabled
                ? t.focus()
                : document.getElementById(`college-school-panel-${b.id}`)?.focus()
            },
          }),
          (C[0] = b.id),
          (C[1] = k),
          (C[2] = t))
        : (t = C[2]),
        C[3] !== j || C[4] !== w
          ? ((l = (e) => {
              e || w || j()
            }),
            (C[3] = j),
            (C[4] = w),
            (C[5] = l))
          : (l = C[5]),
        C[6] !== A || C[7] !== w
          ? ((i = (e) => {
              ;(e.preventDefault(), w || A())
            }),
            (C[6] = A),
            (C[7] = w),
            (C[8] = i))
          : (i = C[8]),
        C[9] !== b.name
          ? ((o = (0, a.jsx)(F.OO, {
              children: (0, a.jsx)(F.c7, {
                title: (0, a.jsx)(v.L3, {
                  className: "select-none",
                  children: (0, a.jsx)(u.A, {
                    id: "collegePlan.school.removal.title",
                    defaultMessage: "Remove {school} from your College Plan?",
                    values: { school: b.name },
                    description:
                      "Confirmation for permanently removing one saved school from College Plan, not the whole plan. school is the college or university name.",
                  }),
                }),
              }),
            })),
            (C[9] = b.name),
            (C[10] = o))
          : (o = C[10]),
        C[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(v.rr, {
              className: "select-none",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.removal.description.tasksAndDeadlines",
                defaultMessage: "This will also remove tasks and deadlines for this school from your plan.",
                description:
                  "Body of the school-removal confirmation in College Plan. Explains that the school's tasks and deadlines will leave the plan when the student confirms removal. Tasks shared with other schools remain linked to those schools.",
              }),
            })),
            (C[11] = n))
          : (n = C[11]),
        C[12] !== k
          ? ((r =
              k &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-danger",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.removal.unconfirmed",
                  defaultMessage:
                    "The removal couldn’t be confirmed. Check the saved school before trying to remove it again.",
                  description:
                    "An uncertain removal or failed readback. Check again only reads the same saved school; it never repeats deletion.",
                }),
              })),
            (C[12] = k),
            (C[13] = r))
          : (r = C[13]),
        C[14] !== r ? ((d = (0, a.jsxs)(F.OO, { children: [n, r] })), (C[14] = r), (C[15] = d)) : (d = C[15]),
        C[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(u.A, {
              id: "collegePlan.school.removal.cancel",
              defaultMessage: "Cancel",
              description:
                "Dismisses school-removal confirmation without deleting; disabled while a request is pending",
            })),
            (C[16] = c))
          : (c = C[16]),
        C[17] !== j || C[18] !== w
          ? ((h = (0, a.jsx)(x.$, {
              type: "button",
              color: "outlineGhost",
              size: "formAction",
              radius: "full",
              disabled: w,
              onClick: j,
              children: c,
            })),
            (C[17] = j),
            (C[18] = w),
            (C[19] = h))
          : (h = C[19]))
      let _ = k ? "primary" : "dangerSolid"
      return (
        C[20] !== k
          ? ((p = k
              ? (0, a.jsx)(u.A, {
                  id: "collegePlan.school.removal.check",
                  defaultMessage: "Check again",
                  description: "Reads the same saved school again to determine the outcome; does not repeat deletion",
                })
              : (0, a.jsx)(u.A, {
                  id: "collegePlan.school.removal.confirm",
                  defaultMessage: "Remove school",
                  description: "Explicitly confirms permanent removal of this school and its exclusive tasks",
                })),
            (C[20] = k),
            (C[21] = p))
          : (p = C[21]),
        C[22] !== w || C[23] !== _ || C[24] !== p
          ? ((m = (0, a.jsx)(x.$, {
              type: "submit",
              color: _,
              size: "formAction",
              radius: "full",
              loading: w,
              disabled: w,
              children: p,
            })),
            (C[22] = w),
            (C[23] = _),
            (C[24] = p),
            (C[25] = m))
          : (m = C[25]),
        C[26] !== m || C[27] !== h
          ? ((g = (0, a.jsx)(F.OO, { children: (0, a.jsxs)(F.Es, { children: [h, m] }) })),
            (C[26] = m),
            (C[27] = h),
            (C[28] = g))
          : (g = C[28]),
        C[29] !== g || C[30] !== i || C[31] !== o || C[32] !== d
          ? ((f = (0, a.jsxs)(F.R4, { as: "form", size: "viewport", onSubmit: i, children: [o, d, g] })),
            (C[29] = g),
            (C[30] = i),
            (C[31] = o),
            (C[32] = d),
            (C[33] = f))
          : (f = C[33]),
        C[34] !== t || C[35] !== f || C[36] !== l
          ? ((y = (0, a.jsx)(v.lG, {
              open: !0,
              size: "compact",
              showDialogClose: !1,
              contentProps: t,
              onOpenChange: l,
              children: f,
            })),
            (C[34] = t),
            (C[35] = f),
            (C[36] = l),
            (C[37] = y))
          : (y = C[37]),
        y
      )
    }
    function B(e) {
      let t,
        l,
        i,
        o,
        n = (0, s.c)(13),
        { school: r } = e,
        { overview: d, admit_rate: c, estimated_annual_cost: p } = r
      return null == d && null == c && null == p
        ? null
        : (n[0] !== r.name
            ? ((t = (0, a.jsx)("h3", {
                className: "text-lg font-medium break-words",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.about",
                  defaultMessage: "About {school}",
                  values: { school: r.name },
                  description:
                    "Heading for the saved school overview and published historical admissions and cost figures in College Plan; school is the institution's name.",
                }),
              })),
              (n[0] = r.name),
              (n[1] = t))
            : (t = n[1]),
          n[2] !== d || n[3] !== r.favicon_origin
            ? ((l =
                null != d &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-base leading-normal break-words whitespace-pre-wrap text-default",
                      children: d.text,
                    }),
                    (0, a.jsx)(P.Z, { citations: d.citations, faviconOrigin: r.favicon_origin }),
                  ],
                })),
              (n[2] = d),
              (n[3] = r.favicon_origin),
              (n[4] = l))
            : (l = n[4]),
          n[5] !== c || n[6] !== p || n[7] !== r.favicon_origin
            ? ((i =
                (null != c || null != p) &&
                (0, a.jsxs)("dl", {
                  className:
                    "grid grid-cols-1 gap-4 divide-y divide-border-subtle py-2 @xs:grid-cols-2 @xs:gap-6 @xs:divide-x @xs:divide-y-0",
                  children: [
                    null != c &&
                      (0, a.jsx)(q, {
                        fact: c,
                        faviconOrigin: r.favicon_origin,
                        label: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.admissionRate.label",
                          defaultMessage: "Admission rate",
                          description:
                            "Short label below a published historical admission percentage in the College Plan school details. This is a school statistic, not the student's admission chances.",
                        }),
                        value: (0, a.jsx)(h.Gr, {
                          value: c.percentage / 100,
                          style: "percent",
                          maximumSignificantDigits: 15,
                        }),
                      }),
                    null != p &&
                      (0, a.jsx)(q, {
                        fact: p,
                        faviconOrigin: r.favicon_origin,
                        label: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.annualCost.label",
                          defaultMessage: "Estimated annual cost",
                          description:
                            "Short label below a published annual cost of attendance before financial aid in the College Plan school details.",
                        }),
                        value: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.annualCost.value",
                          defaultMessage: "{amount}/yr",
                          description:
                            "Compact yearly cost headline in the College Plan school details. The amount placeholder is a locale-formatted monetary amount including its original currency; yr means per year.",
                          values: {
                            amount: (0, a.jsx)(h.Gr, {
                              value: p.amount,
                              style: "currency",
                              currency: p.currency,
                              minimumFractionDigits: 0,
                            }),
                          },
                        }),
                      }),
                  ],
                })),
              (n[5] = c),
              (n[6] = p),
              (n[7] = r.favicon_origin),
              (n[8] = i))
            : (i = n[8]),
          n[9] !== t || n[10] !== l || n[11] !== i
            ? ((o = (0, a.jsxs)("section", {
                className: "@container flex flex-col gap-4 border-t border-subtle pt-5",
                children: [t, l, i],
              })),
              (n[9] = t),
              (n[10] = l),
              (n[11] = i),
              (n[12] = o))
            : (o = n[12]),
          o)
    }
    function q(e) {
      let t,
        l,
        i,
        o,
        n,
        r,
        d = (0, s.c)(17),
        { fact: c, faviconOrigin: u, label: h, value: p } = e
      return (
        d[0] !== h
          ? ((t = (0, a.jsx)("dt", { className: "text-sm break-words text-secondary", children: h })),
            (d[0] = h),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== p
          ? ((l = (0, a.jsx)("dd", { className: "order-first text-lg font-semibold break-words", children: p })),
            (d[2] = p),
            (d[3] = l))
          : (l = d[3]),
        d[4] !== c.text
          ? ((i = (0, a.jsx)("dd", {
              className: "text-sm break-words whitespace-pre-wrap text-secondary",
              children: c.text,
            })),
            (d[4] = c.text),
            (d[5] = i))
          : (i = d[5]),
        d[6] !== c.reporting_period
          ? ((o =
              null != c.reporting_period &&
              (0, a.jsx)("dd", { className: "text-sm break-words text-secondary", children: c.reporting_period })),
            (d[6] = c.reporting_period),
            (d[7] = o))
          : (o = d[7]),
        d[8] !== c.citations || d[9] !== u
          ? ((n = (0, a.jsx)("dd", { children: (0, a.jsx)(P.Z, { citations: c.citations, faviconOrigin: u }) })),
            (d[8] = c.citations),
            (d[9] = u),
            (d[10] = n))
          : (n = d[10]),
        d[11] !== t || d[12] !== l || d[13] !== i || d[14] !== o || d[15] !== n
          ? ((r = (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2 not-first:pt-4 @xs:not-first:ps-6 @xs:not-first:pt-0",
              children: [t, l, i, o, n],
            })),
            (d[11] = t),
            (d[12] = l),
            (d[13] = i),
            (d[14] = o),
            (d[15] = n),
            (d[16] = r))
          : (r = d[16]),
        r
      )
    }
    var R = l("Z41o"),
      O = l("pXr8")
    function D(e) {
      let t,
        l,
        i,
        o,
        n,
        c,
        u,
        h = (0, s.c)(38),
        { schoolId: p, onClose: g, onRemoved: x } = e,
        y = (0, r.Ul)(m.chatGptAuthenticatedAccountId$),
        v = (0, r.Ul)(m.chatGptAuthenticatedUserId$),
        C = (0, r.Ul)(f.pH).data?.plan_id
      h[0] !== y || h[1] !== C || h[2] !== p || h[3] !== v
        ? ((t = { accountId: y, userId: v, planId: C, schoolId: p }),
          (h[0] = y),
          (h[1] = C),
          (h[2] = p),
          (h[3] = v),
          (h[4] = t))
        : (t = h[4])
      let { isPending: b, isError: w, mutate: k, variables: j } = (0, r._U)(S.ur, t),
        A = !w && !(b && "check" === j)
      h[5] !== A ? ((l = { enabled: A }), (h[5] = A), (h[6] = l)) : (l = h[6])
      let {
          data: P,
          dataUpdatedAt: M,
          isPending: I,
          isFetching: N,
          isError: T,
          error: F,
          refetch: G,
        } = (0, r._U)(S.c, p, l),
        { mutateAsync: E, isPending: H, isError: B } = (0, r._U)(S.dF, p),
        q = (0, d.useRef)(!1),
        [O, D] = (0, d.useState)(null)
      h[7] !== k || h[8] !== G || h[9] !== w
        ? ((i = () => {
            w ? k("check") : G()
          }),
          (h[7] = k),
          (h[8] = G),
          (h[9] = w),
          (h[10] = i))
        : (i = h[10])
      let z = i,
        Z = T ? void 0 : P?.items,
        L = T || w ? z : void 0,
        W = N || b,
        Y = I || T || N || H || b || w
      return (
        h[11] !== P ||
        h[12] !== F ||
        h[13] !== T ||
        h[14] !== N ||
        h[15] !== I ||
        h[16] !== b ||
        h[17] !== H ||
        h[18] !== E ||
        h[19] !== g ||
        h[20] !== z ||
        h[21] !== w ||
        h[22] !== B
          ? ((o = (e) =>
              (0, a.jsx)(V, {
                ...e,
                school: P,
                loading: I,
                failed: T || w,
                missing: F instanceof _.fk && 404 === F.status,
                saving: H || b,
                saveFailed: B,
                refreshing: N || b,
                onRetry: z,
                onClose: g,
                onRemove: () => {
                  null == P || T || N || H || b || w || D(P)
                },
                onToggle: (e, t) => {
                  q.current ||
                    b ||
                    w ||
                    ((q.current = !0),
                    E({ item: e, completed: t })
                      .catch(U)
                      .finally(() => {
                        q.current = !1
                      }))
                },
              })),
            (h[11] = P),
            (h[12] = F),
            (h[13] = T),
            (h[14] = N),
            (h[15] = I),
            (h[16] = b),
            (h[17] = H),
            (h[18] = E),
            (h[19] = g),
            (h[20] = z),
            (h[21] = w),
            (h[22] = B),
            (h[23] = o))
          : (o = h[23]),
        h[24] !== M || h[25] !== p || h[26] !== Z || h[27] !== L || h[28] !== W || h[29] !== Y || h[30] !== o
          ? ((n = (0, a.jsx)(R.u, {
              source: p,
              items: Z,
              dataUpdatedAt: M,
              onRefresh: L,
              refreshing: W,
              disabled: Y,
              children: o,
            })),
            (h[24] = M),
            (h[25] = p),
            (h[26] = Z),
            (h[27] = L),
            (h[28] = W),
            (h[29] = Y),
            (h[30] = o),
            (h[31] = n))
          : (n = h[31]),
        h[32] !== x || h[33] !== O
          ? ((c = null != O && (0, a.jsx)($, { school: O, onClose: () => D(null), onRemoved: x })),
            (h[32] = x),
            (h[33] = O),
            (h[34] = c))
          : (c = h[34]),
        h[35] !== n || h[36] !== c
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [n, c] })), (h[35] = n), (h[36] = c), (h[37] = u))
          : (u = h[37]),
        u
      )
    }
    function U() {}
    function V(e) {
      let t,
        l,
        i,
        o,
        n,
        r,
        h,
        m,
        g,
        f,
        y,
        b = (0, s.c)(44),
        {
          school: k,
          loading: A,
          failed: _,
          missing: P,
          saving: M,
          saveFailed: I,
          refreshing: N,
          onRetry: S,
          onClose: T,
          onRemove: F,
          onToggle: G,
          addTask: E,
          onCreateTask: $,
          onOpenTask: H,
          actionsOpen: B,
        } = e,
        q = (0, c.A)(),
        R = (0, d.useRef)(null),
        O = (0, d.useRef)(!1)
      ;(b[0] !== T
        ? ((t = (e) => {
            e || T()
          }),
          (b[0] = T),
          (b[1] = t))
        : (t = b[1]),
        b[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { asChild: !0, "aria-describedby": void 0, onInteractOutside: z }), (b[2] = l))
          : (l = b[2]))
      let D = null == k ? void 0 : `college-school-panel-${k.id}`
      return (
        b[3] !== B ||
        b[4] !== _ ||
        b[5] !== q ||
        b[6] !== A ||
        b[7] !== P ||
        b[8] !== $ ||
        b[9] !== F ||
        b[10] !== N ||
        b[11] !== M ||
        b[12] !== k
          ? ((i =
              null == k || P
                ? void 0
                : (0, a.jsxs)(C.Ab, {
                    align: "end",
                    open: B,
                    onCloseAutoFocus: (e) => {
                      O.current && (e.preventDefault(), (O.current = !1), $?.(R.current))
                    },
                    triggerButton: (0, a.jsx)(x.$, {
                      id: `college-school-actions-${k.id}`,
                      ref: R,
                      type: "button",
                      color: "ghost",
                      size: "icon",
                      disabled: A || _ || N || M,
                      "aria-label": q.formatMessage({
                        id: "collegePlan.school.actions",
                        defaultMessage: "School actions",
                        description: "Opens actions for the saved school in College Plan",
                      }),
                      children: (0, a.jsx)(w.e4G, {}),
                    }),
                    children: [
                      (0, a.jsx)(C.ms.Item, {
                        leftIcon: (0, a.jsx)(w.aRI, {}),
                        disabled: null == $ || A || _ || N || M,
                        onSelect: () => {
                          O.current = !0
                        },
                        children: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.addTask",
                          defaultMessage: "Add new task",
                          description:
                            "First action in the saved-school menu in College Plan. Opens the new task editor with this school already linked; the other action removes the school.",
                        }),
                      }),
                      (0, a.jsx)(C.ms.Item, {
                        leftIcon: (0, a.jsx)(w.zwW, {}),
                        tone: "destructive",
                        onSelect: F,
                        children: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.remove",
                          defaultMessage: "Remove school",
                          description: "Opens confirmation to remove only this saved school from College Plan",
                        }),
                      }),
                    ],
                  })),
            (b[3] = B),
            (b[4] = _),
            (b[5] = q),
            (b[6] = A),
            (b[7] = P),
            (b[8] = $),
            (b[9] = F),
            (b[10] = N),
            (b[11] = M),
            (b[12] = k),
            (b[13] = i))
          : (i = b[13]),
        b[14] !== q
          ? ((o = q.formatMessage({
              id: "collegePlan.school.close",
              defaultMessage: "Close school",
              description: "Closes the saved-school panel and returns to My schools",
            })),
            (b[14] = q),
            (b[15] = o))
          : (o = b[15]),
        b[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(v.L3, {
              className: "sr-only",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.details",
                defaultMessage: "School details",
                description: "Accessible title of the saved-school panel",
              }),
            })),
            (b[16] = n))
          : (n = b[16]),
        b[17] !== A ? ((r = A && (0, a.jsx)(j.y, {})), (b[17] = A), (b[18] = r)) : (r = b[18]),
        b[19] !== E ||
        b[20] !== _ ||
        b[21] !== P ||
        b[22] !== H ||
        b[23] !== S ||
        b[24] !== G ||
        b[25] !== N ||
        b[26] !== I ||
        b[27] !== M ||
        b[28] !== k
          ? ((h = P
              ? (0, a.jsx)("p", {
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "collegePlan.school.missing",
                    defaultMessage: "This school is no longer in your College Plan",
                    description: "The saved school ID no longer exists; not a failed network request",
                  }),
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    _ &&
                      (0, a.jsxs)("div", {
                        role: "alert",
                        className: "flex flex-col items-start gap-2",
                        children: [
                          (0, a.jsx)("p", {
                            children: (0, a.jsx)(u.A, {
                              id: "collegePlan.school.readError",
                              defaultMessage: "This school couldn’t be refreshed. Refresh before changing tasks.",
                              description:
                                "Failed saved-school read; old research may remain visible but tasks cannot be changed until a successful refresh",
                            }),
                          }),
                          (0, a.jsx)(x.$, {
                            color: "secondary",
                            disabled: N,
                            onClick: S,
                            children: (0, a.jsx)(u.A, {
                              id: "collegePlan.school.retry",
                              defaultMessage: "Refresh school",
                              description: "Read saved school data again without repeating a task mutation",
                            }),
                          }),
                        ],
                      }),
                    I &&
                      (0, a.jsx)("p", {
                        role: "alert",
                        className: "text-danger",
                        children: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.writeError",
                          defaultMessage:
                            "The task update couldn’t be confirmed. Review the refreshed task state before trying again.",
                          description: "A task PATCH or its readback failed; the write is never retried automatically",
                        }),
                      }),
                    null != k &&
                      (0, a.jsx)(Z, { school: k, disabled: _ || N || M, onToggle: G, addTask: E, onOpenTask: H }, k.id),
                  ],
                })),
            (b[19] = E),
            (b[20] = _),
            (b[21] = P),
            (b[22] = H),
            (b[23] = S),
            (b[24] = G),
            (b[25] = N),
            (b[26] = I),
            (b[27] = M),
            (b[28] = k),
            (b[29] = h))
          : (h = b[29]),
        b[30] !== r || b[31] !== h
          ? ((m = (0, a.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-panel",
              children: [n, r, h],
            })),
            (b[30] = r),
            (b[31] = h),
            (b[32] = m))
          : (m = b[32]),
        b[33] !== T || b[34] !== i || b[35] !== o || b[36] !== m
          ? ((g = (0, a.jsx)(p.JR, { actions: i, closeLabel: o, onClose: T, children: m })),
            (b[33] = T),
            (b[34] = i),
            (b[35] = o),
            (b[36] = m),
            (b[37] = g))
          : (g = b[37]),
        b[38] !== g || b[39] !== D
          ? ((f = (0, a.jsx)("div", { id: D, className: "h-full", tabIndex: -1, children: g })),
            (b[38] = g),
            (b[39] = D),
            (b[40] = f))
          : (f = b[40]),
        b[41] !== t || b[42] !== f
          ? ((y = (0, a.jsx)(v.lG, {
              open: !0,
              modal: !1,
              contentPosition: "inline",
              showDialogClose: !1,
              unstyledContent: !0,
              onOpenChange: t,
              contentProps: l,
              children: f,
            })),
            (b[41] = t),
            (b[42] = f),
            (b[43] = y))
          : (y = b[43]),
        y
      )
    }
    function z(e) {
      return e.preventDefault()
    }
    function Z(e) {
      let t,
        l,
        i,
        o,
        n,
        h,
        p,
        m,
        f,
        y,
        v,
        b,
        k,
        j,
        _ = (0, s.c)(81),
        { school: S, disabled: T, onToggle: F, addTask: G, onOpenTask: E } = e,
        $ = (0, r.gh)(A.u),
        H = (0, c.A)(),
        [q, R] = (0, d.useState)("all")
      if (
        _[0] !== T ||
        _[1] !== q ||
        _[2] !== H ||
        _[3] !== E ||
        _[4] !== F ||
        _[5] !== S.application_deadline ||
        _[6] !== S.completed_tasks ||
        _[7] !== S.favicon_origin ||
        _[8] !== S.id ||
        _[9] !== S.items ||
        _[10] !== S.name ||
        _[11] !== S.total_tasks ||
        _[12] !== $
      ) {
        let e,
          s,
          r,
          d,
          c,
          y,
          v,
          b,
          k,
          j,
          A,
          G,
          B = S.items?.filter((e) => "all" === q || e.completed === ("completed" === q)).sort(L)
        ;(_[22] !== S.id || _[23] !== $
          ? ((e = (e) => (0, g.zk)($, e, { id: S.id, kind: "school", surface: "school_detail" })),
            (_[22] = S.id),
            (_[23] = $),
            (_[24] = e))
          : (e = _[24]),
          _[25] !== S.name
            ? ((s = (0, a.jsx)("h2", { className: "text-xl font-semibold break-words", children: S.name })),
              (_[25] = S.name),
              (_[26] = s))
            : (s = _[26]),
          _[27] !== S.application_deadline || _[28] !== S.favicon_origin || _[29] !== S.id || _[30] !== $
            ? ((r =
                null != S.application_deadline &&
                (0, a.jsxs)("details", {
                  className: "text-sm text-secondary",
                  children: [
                    (0, a.jsx)("summary", {
                      className: "focus-visible:outline-auto cursor-interaction rounded-sm",
                      onClick: (e) => {
                        e.currentTarget.parentElement?.hasAttribute("open") ||
                          (0, g.j2)($, { id: S.id, kind: "school", surface: "application_deadline" })
                      },
                      children: (0, a.jsx)(M.a, { fact: S.application_deadline, showYear: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2 pt-2",
                      children: [
                        (0, a.jsx)(M.$, { fact: S.application_deadline, schoolId: S.id }),
                        (0, a.jsx)(P.Z, {
                          citations: S.application_deadline.citations,
                          faviconOrigin: S.favicon_origin,
                        }),
                      ],
                    }),
                  ],
                })),
              (_[27] = S.application_deadline),
              (_[28] = S.favicon_origin),
              (_[29] = S.id),
              (_[30] = $),
              (_[31] = r))
            : (r = _[31]),
          _[32] !== s || _[33] !== r
            ? ((d = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [s, r] })),
              (_[32] = s),
              (_[33] = r),
              (_[34] = d))
            : (d = _[34]),
          _[35] !== S.favicon_origin
            ? ((c = (0, a.jsx)(I.h, { faviconOrigin: S.favicon_origin })), (_[35] = S.favicon_origin), (_[36] = c))
            : (c = _[36]),
          _[37] !== e || _[38] !== d || _[39] !== c
            ? ((f = (0, a.jsxs)("header", {
                ref: e,
                className: "flex items-start justify-between gap-4",
                children: [d, c],
              })),
              (_[37] = e),
              (_[38] = d),
              (_[39] = c),
              (_[40] = f))
            : (f = _[40]),
          (i = "flex flex-col gap-4"),
          _[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsx)("h3", {
                className: "text-lg font-semibold",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.progressTitle",
                  defaultMessage: "Application progress",
                  description:
                    "Saved tasks completed for this school; does not indicate that an application was submitted",
                }),
              })),
              (_[41] = o))
            : (o = _[41]),
          _[42] !== S.completed_tasks || _[43] !== S.total_tasks
            ? ((n = (0, a.jsx)(N.Ch, { completed: S.completed_tasks, total: S.total_tasks, prominent: !0 })),
              (_[42] = S.completed_tasks),
              (_[43] = S.total_tasks),
              (_[44] = n))
            : (n = _[44]),
          _[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.suggestedTasks",
                  defaultMessage: "Suggested starting tasks. Review, edit, or add tasks for your program.",
                  description:
                    "Explains that the school checklist is a suggested starting point the student can customize, not a complete application or submission status",
                }),
              })),
              (_[45] = h))
            : (h = _[45]),
          _[46] !== H
            ? ((y = H.formatMessage({
                id: "collegePlan.school.taskFilter",
                defaultMessage: "Filter tasks",
                description: "Accessible label for All, In progress and Completed task filters",
              })),
              (_[46] = H),
              (_[47] = y))
            : (y = _[47]))
        let O = Y[q]
        ;(_[48] !== O ? ((v = (0, a.jsx)(u.A, { ...O })), (_[48] = O), (_[49] = v)) : (v = _[49]),
          _[50] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, a.jsx)(w.HIf, {})), (_[50] = b)) : (b = _[50]),
          _[51] !== y || _[52] !== v
            ? ((k = (0, a.jsxs)(x.$, {
                color: "secondary",
                size: "detailAction",
                radius: "full",
                "aria-label": y,
                children: [v, b],
              })),
              (_[51] = y),
              (_[52] = v),
              (_[53] = k))
            : (k = _[53]),
          _[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = ["all", "in-progress", "completed"]), (_[54] = j))
            : (j = _[54]),
          _[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = j.map((e) =>
                (0, a.jsx)(
                  C.ms.RadioItem,
                  { value: e, onSelect: () => R(e), children: (0, a.jsx)(u.A, { ...Y[e] }) },
                  e,
                ),
              )),
              (_[55] = A))
            : (A = _[55]),
          _[56] !== q
            ? ((G = (0, a.jsx)(C.ms.RadioGroup, { value: q, children: A })), (_[56] = q), (_[57] = G))
            : (G = _[57]),
          _[58] !== k || _[59] !== G
            ? ((p = (0, a.jsx)("div", {
                className: "self-start",
                children: (0, a.jsx)(C.Ab, { triggerButton: k, children: G }),
              })),
              (_[58] = k),
              (_[59] = G),
              (_[60] = p))
            : (p = _[60]),
          (m =
            B?.length === 0 &&
            (S.items?.length ?? 0) > 0 &&
            (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.filter.empty",
                defaultMessage: "No tasks match this filter",
                description: "There are saved tasks, but none match the selected completion filter",
              }),
            })),
          (t = "flex flex-col gap-3"),
          (l = B?.map((e) =>
            (0, a.jsx)(
              "li",
              {
                children: (0, a.jsx)(W, {
                  item: e,
                  onOpen: null == E ? void 0 : (t) => E(e, t),
                  disabled: T,
                  onToggle: (t) => F(e, t),
                }),
              },
              e.id,
            ),
          )),
          (_[0] = T),
          (_[1] = q),
          (_[2] = H),
          (_[3] = E),
          (_[4] = F),
          (_[5] = S.application_deadline),
          (_[6] = S.completed_tasks),
          (_[7] = S.favicon_origin),
          (_[8] = S.id),
          (_[9] = S.items),
          (_[10] = S.name),
          (_[11] = S.total_tasks),
          (_[12] = $),
          (_[13] = t),
          (_[14] = l),
          (_[15] = i),
          (_[16] = o),
          (_[17] = n),
          (_[18] = h),
          (_[19] = p),
          (_[20] = m),
          (_[21] = f))
      } else
        ((t = _[13]),
          (l = _[14]),
          (i = _[15]),
          (o = _[16]),
          (n = _[17]),
          (h = _[18]),
          (p = _[19]),
          (m = _[20]),
          (f = _[21]))
      return (
        _[61] !== t || _[62] !== l
          ? ((y = (0, a.jsx)("ul", { className: t, children: l })), (_[61] = t), (_[62] = l), (_[63] = y))
          : (y = _[63]),
        _[64] !== G
          ? ((v = (0, a.jsx)("div", { className: "self-start", children: G })), (_[64] = G), (_[65] = v))
          : (v = _[65]),
        _[66] !== y ||
        _[67] !== v ||
        _[68] !== i ||
        _[69] !== o ||
        _[70] !== n ||
        _[71] !== h ||
        _[72] !== p ||
        _[73] !== m
          ? ((b = (0, a.jsxs)("section", { className: i, children: [o, n, h, p, m, y, v] })),
            (_[66] = y),
            (_[67] = v),
            (_[68] = i),
            (_[69] = o),
            (_[70] = n),
            (_[71] = h),
            (_[72] = p),
            (_[73] = m),
            (_[74] = b))
          : (b = _[74]),
        _[75] !== S ? ((k = (0, a.jsx)(B, { school: S })), (_[75] = S), (_[76] = k)) : (k = _[76]),
        _[77] !== b || _[78] !== k || _[79] !== f
          ? ((j = (0, a.jsxs)(a.Fragment, { children: [f, b, k] })), (_[77] = b), (_[78] = k), (_[79] = f), (_[80] = j))
          : (j = _[80]),
        j
      )
    }
    function L(e, t) {
      return null == e.target_date
        ? +(null != t.target_date)
        : null == t.target_date
          ? -1
          : e.target_date.localeCompare(t.target_date)
    }
    function W(e) {
      let t,
        l,
        u,
        p,
        m,
        f,
        x,
        v,
        C,
        j = (0, s.c)(39),
        { item: _, disabled: P, onToggle: M, onOpen: I, onAction: N, compact: S, analyticsSurface: T } = e,
        F = void 0 !== S && S,
        G = void 0 === T ? "school_tasks" : T,
        E = (0, r.gh)(A.u),
        $ = (0, d.useId)(),
        H = (0, c.A)()
      ;(j[0] !== G || j[1] !== _.id || j[2] !== _.target_date || j[3] !== E
        ? ((t = (e) => (null == _.target_date ? void 0 : (0, g.zk)(E, e, { id: _.id, kind: "task", surface: G }))),
          (j[0] = G),
          (j[1] = _.id),
          (j[2] = _.target_date),
          (j[3] = E),
          (j[4] = t))
        : (t = j[4]),
        j[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(b.I, { asset: o, className: "shrink-0 text-tertiary" })), (j[5] = l))
          : (l = j[5]),
        j[6] !== G ||
        j[7] !== $ ||
        j[8] !== _.completed ||
        j[9] !== _.id ||
        j[10] !== _.target_date ||
        j[11] !== _.title ||
        j[12] !== I ||
        j[13] !== E
          ? ((u =
              null == I
                ? (0, a.jsx)("span", {
                    id: $,
                    className: (0, n.A)("text-base break-words", _.completed && "text-tertiary line-through"),
                    children: _.title,
                  })
                : (0, a.jsx)("button", {
                    id: $,
                    type: "button",
                    onClick: (e) => {
                      ;(null != _.target_date && (0, g.j2)(E, { id: _.id, kind: "task", surface: G }),
                        I(e.currentTarget))
                    },
                    className: (0, n.A)(
                      "cursor-interaction text-start text-base break-words select-none focus-visible:outline-auto",
                      _.completed && "text-tertiary line-through",
                    ),
                    children: _.title,
                  })),
            (j[6] = G),
            (j[7] = $),
            (j[8] = _.completed),
            (j[9] = _.id),
            (j[10] = _.target_date),
            (j[11] = _.title),
            (j[12] = I),
            (j[13] = E),
            (j[14] = u))
          : (u = j[14]),
        j[15] !== _.target_date
          ? ((p =
              null != _.target_date &&
              (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(h.XU, {
                  value: new Date(`${_.target_date}T12:00:00Z`),
                  timeZone: "UTC",
                  month: "short",
                  day: "numeric",
                }),
              })),
            (j[15] = _.target_date),
            (j[16] = p))
          : (p = j[16]),
        j[17] !== u || j[18] !== p
          ? ((m = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [u, p] })),
            (j[17] = u),
            (j[18] = p),
            (j[19] = m))
          : (m = j[19]),
        j[20] !== P || j[21] !== _ || j[22] !== N || j[23] !== M
          ? ((f = null != N && null != M && (0, a.jsx)(O.a, { item: _, disabled: P, onAction: N, onToggle: M })),
            (j[20] = P),
            (j[21] = _),
            (j[22] = N),
            (j[23] = M),
            (j[24] = f))
          : (f = j[24]),
        j[25] !== P || j[26] !== $ || j[27] !== H || j[28] !== _.completed || j[29] !== M
          ? ((x =
              null == M
                ? (0, a.jsx)("span", {
                    role: "img",
                    "aria-label": _.completed
                      ? H.formatMessage({
                          id: "chatgpt.college_plan.sharing.task.status.complete",
                          defaultMessage: "Completed",
                          description: "Read-only task status; this is not an editable checkbox",
                        })
                      : H.formatMessage({
                          id: "chatgpt.college_plan.sharing.task.status.incomplete",
                          defaultMessage: "Not completed",
                          description: "Read-only incomplete task status; the viewer cannot change it",
                        }),
                    children: _.completed
                      ? (0, a.jsx)(w.jFD, {})
                      : (0, a.jsx)(b.I, { asset: i.n, className: "text-tertiary" }),
                  })
                : (0, a.jsx)(y.S, {
                    "aria-labelledby": $,
                    variant: "task",
                    checked: _.completed,
                    disabled: P,
                    onCheckedChange: M,
                  })),
            (j[25] = P),
            (j[26] = $),
            (j[27] = H),
            (j[28] = _.completed),
            (j[29] = M),
            (j[30] = x))
          : (x = j[30]),
        j[31] !== t || j[32] !== m || j[33] !== f || j[34] !== x
          ? ((v = (0, a.jsxs)("div", {
              ref: t,
              className: "group relative flex items-center gap-4 p-4",
              children: [l, m, f, x],
            })),
            (j[31] = t),
            (j[32] = m),
            (j[33] = f),
            (j[34] = x),
            (j[35] = v))
          : (v = j[35]))
      let B = v
      return (
        j[36] !== F || j[37] !== B
          ? ((C = F ? B : (0, a.jsx)(k.zU, { variant: "artifact-list", children: B })),
            (j[36] = F),
            (j[37] = B),
            (j[38] = C))
          : (C = j[38]),
        C
      )
    }
    let Y = (0, h.YK)({
      all: { id: "collegePlan.school.filter.all", defaultMessage: "All", description: "Show all saved tasks" },
      "in-progress": {
        id: "collegePlan.school.filter.inProgress",
        defaultMessage: "In progress",
        description: "Show saved tasks that are not completed",
      },
      completed: {
        id: "collegePlan.school.filter.completed",
        defaultMessage: "Completed",
        description: "Show completed saved tasks",
      },
    })
  },
  Z41o(e, t, l) {
    l.d(t, { u: () => T })
    var a = l("ABep"),
      s = l("QosV"),
      i = l("zTeN"),
      o = l("zd8w"),
      n = l("oyxz"),
      r = l("SPnB"),
      d = l("bxvp"),
      c = l("hsIu"),
      u = l("Sm6l"),
      h = l("bVeK"),
      p = l("OWtl"),
      m = l("eWPL"),
      g = l("ULZ9"),
      f = l("on57"),
      x = l("Wf1j"),
      y = l("Qgfj"),
      v = l("Niy1"),
      C = l("JNtf"),
      b = l("mUDD"),
      w = l("zLIa"),
      k = l("a6Zv"),
      j = l("WbSP")
    function A(e) {
      let t,
        l,
        r,
        d,
        c,
        A,
        _,
        P,
        M,
        I,
        N,
        S,
        T,
        F,
        G,
        E,
        $,
        H,
        B,
        q,
        R,
        O,
        D,
        U,
        V,
        z,
        Z,
        L,
        W,
        Y,
        Q = (0, s.c)(129),
        {
          intent: X,
          schoolId: K,
          disabled: J,
          pending: ee,
          unconfirmed: et,
          onRefresh: el,
          refreshing: ea,
          onClose: es,
          onReturnFocus: ei,
          onSubmit: eo,
        } = e,
        en = void 0 !== J && J,
        er = void 0 !== ea && ea,
        ed = (0, i.gh)(p.u),
        [ec] = (0, o.useState)(X),
        [eu, eh] = (0, o.useState)("view" !== X.type || en ? X.type : "edit")
      "view" !== eu || en || eh("edit")
      let ep = "create" === ec.type ? null : ec.item,
        [em, eg] = (0, o.useState)(ep?.title ?? ""),
        [ef, ex] = (0, o.useState)(ep?.details ?? ""),
        [ey, ev] = (0, o.useState)(ep?.target_date ?? null),
        [eC, eb] = (0, o.useState)(null),
        ew = (0, k.Y)(),
        ek = (0, x.A)(),
        ej = (0, o.useId)(),
        eA = en || ee || et
      Q[0] !== em ? ((t = Array.from(em.trim())), (Q[0] = em), (Q[1] = t)) : (t = Q[1])
      let e_ = t.length > 300
      Q[2] !== ef ? ((l = Array.from(ef)), (Q[2] = ef), (Q[3] = l)) : (l = Q[3])
      let eP = l.length > 4e3
      Q[4] !== eP || Q[5] !== em || Q[6] !== e_
        ? ((r = !!em.trim() && !e_ && !eP), (Q[4] = eP), (Q[5] = em), (Q[6] = e_), (Q[7] = r))
        : (r = Q[7])
      let eM = r
      Q[8] !== ef ? ((d = ef.trim() ? ef : null), (Q[8] = ef), (Q[9] = d)) : (d = Q[9])
      let eI = d
      Q[10] !== ey || Q[11] !== ep || Q[12] !== eI || Q[13] !== em
        ? ((c = null == ep || em.trim() !== ep.title || eI !== (ep.details ?? null) || ey !== (ep.target_date ?? null)),
          (Q[10] = ey),
          (Q[11] = ep),
          (Q[12] = eI),
          (Q[13] = em),
          (Q[14] = c))
        : (c = Q[14])
      let eN = c,
        eS = "create" !== X.type && !!X.item.completed,
        eT = eC ?? void 0,
        eF = "create" === eu || "edit" === eu ? "xwide" : "medium",
        eG = !ee
      Q[15] !== es || Q[16] !== ee
        ? ((A = (e) => {
            e || ee || es()
          }),
          (Q[15] = es),
          (Q[16] = ee),
          (Q[17] = A))
        : (A = Q[17])
      let eE = "delete" === eu ? `${ej}-description` : void 0
      ;(Q[18] !== ei
        ? ((_ = (e) => {
            ei && (e.preventDefault(), ei())
          }),
          (Q[18] = ei),
          (Q[19] = _))
        : (_ = Q[19]),
        Q[20] !== eE || Q[21] !== _
          ? ((P = { "aria-describedby": eE, onCloseAutoFocus: _ }), (Q[20] = eE), (Q[21] = _), (Q[22] = P))
          : (P = Q[22]),
        Q[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, f.A)("isolate", "body-mzA870")), (Q[23] = M))
          : (M = Q[23]))
      let e$ = ew ? "dark" : "light"
      Q[24] !== eN ||
      Q[25] !== ey ||
      Q[26] !== ep ||
      Q[27] !== eA ||
      Q[28] !== eu ||
      Q[29] !== eI ||
      Q[30] !== eo ||
      Q[31] !== K ||
      Q[32] !== em ||
      Q[33] !== eM
        ? ((I = (e) => {
            if ((e.preventDefault(), eA || "view" === eu)) return
            if ("delete" === eu && null != ep) return void eo({ type: "delete", id: ep.id })
            if (!eM || !eN) return
            if ("create" === eu)
              return void eo({
                type: "create",
                body: { title: em.trim(), details: eI, target_date: ey, school_ids: null == K ? [] : [K] },
              })
            if (null == ep) return
            let t = {}
            ;(em.trim() !== ep.title && (t.title = em.trim()),
              eI !== (ep.details ?? null) && (t.details = eI),
              ey !== (ep.target_date ?? null) && (t.target_date = ey),
              eo({ type: "edit", id: ep.id, body: t }))
          }),
          (Q[24] = eN),
          (Q[25] = ey),
          (Q[26] = ep),
          (Q[27] = eA),
          (Q[28] = eu),
          (Q[29] = eI),
          (Q[30] = eo),
          (Q[31] = K),
          (Q[32] = em),
          (Q[33] = eM),
          (Q[34] = I))
        : (I = Q[34])
      let eH = "view" === eu && ep?.title
      ;(Q[35] !== eu
        ? ((N =
            "create" === eu &&
            (0, a.jsx)(n.A, {
              id: "collegePlan.task.add",
              defaultMessage: "Add task",
              description:
                "Opens the dialog to create a task in College Plan; from a school panel the task is linked to that school",
            })),
          (Q[35] = eu),
          (Q[36] = N))
        : (N = Q[36]),
        Q[37] !== eu
          ? ((S =
              "edit" === eu &&
              (0, a.jsx)(n.A, {
                id: "collegePlan.task.detailsTitle",
                defaultMessage: "Task details",
                description: "Heading of the form for editing a saved College Plan task",
              })),
            (Q[37] = eu),
            (Q[38] = S))
          : (S = Q[38]),
        Q[39] !== eu
          ? ((T =
              "delete" === eu &&
              (0, a.jsx)(n.A, {
                id: "collegePlan.task.deleteTitle",
                defaultMessage: "Delete task?",
                description: "Confirmation title before removing a saved College Plan task",
              })),
            (Q[39] = eu),
            (Q[40] = T))
          : (T = Q[40]),
        Q[41] !== eH || Q[42] !== N || Q[43] !== S || Q[44] !== T
          ? ((F = (0, a.jsx)(b.c7, {
              titleClassName: "heading-qB88tZ",
              title: (0, a.jsxs)(C.L3, { className: "select-none", children: [eH, N, S, T] }),
            })),
            (Q[41] = eH),
            (Q[42] = N),
            (Q[43] = S),
            (Q[44] = T),
            (Q[45] = F))
          : (F = Q[45]),
        Q[46] !== ep || Q[47] !== eu || Q[48] !== ed
          ? ((G = (e) =>
              ep?.target_date == null || "delete" === eu
                ? void 0
                : (0, v.zk)(ed, e, { id: ep.id, kind: "task", surface: "task_detail" })),
            (Q[46] = ep),
            (Q[47] = eu),
            (Q[48] = ed),
            (Q[49] = G))
          : (G = Q[49]),
        Q[50] !== ep || Q[51] !== eu
          ? ((E =
              "view" === eu &&
              null != ep &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  null != ep.details &&
                    (0, a.jsx)("p", { className: "break-words whitespace-pre-wrap", children: ep.details }),
                  (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children:
                      null == ep.target_date
                        ? (0, a.jsx)(n.A, {
                            id: "collegePlan.task.unknownDate",
                            defaultMessage: "No date saved",
                            description: "A task has no saved target date; do not infer a deadline",
                          })
                        : (0, a.jsx)(n.A, {
                            id: "collegePlan.task.targetDate",
                            defaultMessage: "Target date: {date}",
                            description: "Task target date as saved, which is not necessarily an application deadline",
                            values: {
                              date: (0, a.jsx)(y.XU, {
                                value: new Date(`${ep.target_date}T12:00:00Z`),
                                timeZone: "UTC",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }),
                            },
                          }),
                  }),
                  (0, a.jsx)(j.Z, { citations: ep.citations, schoolIds: ep.school_ids, modal: !0 }),
                ],
              })),
            (Q[50] = ep),
            (Q[51] = eu),
            (Q[52] = E))
          : (E = Q[52]),
        Q[53] !== ej || Q[54] !== ep?.title || Q[55] !== eu
          ? (($ =
              "delete" === eu &&
              (0, a.jsx)(C.rr, {
                id: `${ej}-description`,
                children: (0, a.jsx)(n.A, {
                  id: "collegePlan.task.deleteDescription",
                  defaultMessage:
                    "Delete “{title}” from your plan and every school linked to it? This can’t be undone.",
                  description:
                    "Warns that deleting one shared College Plan task removes it from every linked school and the timeline; title is the task name",
                  values: { title: ep?.title },
                }),
              })),
            (Q[53] = ej),
            (Q[54] = ep?.title),
            (Q[55] = eu),
            (Q[56] = $))
          : ($ = Q[56]),
        Q[57] !== ey ||
        Q[58] !== ef ||
        Q[59] !== eP ||
        Q[60] !== ej ||
        Q[61] !== ek ||
        Q[62] !== ep ||
        Q[63] !== eA ||
        Q[64] !== eu ||
        Q[65] !== em ||
        Q[66] !== e_
          ? ((H =
              ("create" === eu || "edit" === eu) &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3 rounded-2xl border border-default p-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, f.A)("flex flex-col gap-2", "title-fWCEVA"),
                        children: [
                          (0, a.jsx)("label", {
                            className: "select-none",
                            htmlFor: `${ej}-title`,
                            children: (0, a.jsx)(n.A, {
                              id: "collegePlan.task.name",
                              defaultMessage: "Title",
                              description: "Label for the required task title in the College Plan add/edit task dialog",
                            }),
                          }),
                          (0, a.jsx)(w.pd, {
                            id: `${ej}-title`,
                            variant: "plain",
                            autoFocus: !0,
                            name: "title",
                            required: !0,
                            disabled: eA,
                            value: em,
                            "aria-invalid": e_,
                            "aria-describedby": e_ ? `${ej}-title-error` : void 0,
                            onChange: (e) => eg(e.target.value),
                          }),
                          e_ &&
                            (0, a.jsx)("span", {
                              id: `${ej}-title-error`,
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, a.jsx)(n.A, {
                                id: "collegePlan.task.titleTooLong",
                                defaultMessage: "Use a title with {limit, number} characters or fewer",
                                description:
                                  "Validation error below a College Plan task title that exceeds the maximum length; limit is the allowed character count",
                                values: { limit: 300 },
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex h-4 items-center",
                        "aria-hidden": !0,
                        children: (0, a.jsx)("div", { className: "w-80 max-w-full border-t border-default" }),
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, f.A)("flex flex-col gap-2", "description-Hx5_p6"),
                        children: [
                          (0, a.jsx)("label", {
                            className: "select-none",
                            htmlFor: `${ej}-details`,
                            children: (0, a.jsx)(n.A, {
                              id: "collegePlan.task.description",
                              defaultMessage: "Description",
                              description: "Label for the optional multiline description of a College Plan task",
                            }),
                          }),
                          (0, a.jsx)(w.TM, {
                            id: `${ej}-details`,
                            variant: "plain",
                            rows: 1,
                            name: "details",
                            disabled: eA,
                            value: ef,
                            "aria-invalid": eP,
                            "aria-describedby": eP ? `${ej}-details-error` : void 0,
                            onChange: (e) => ex(e.target.value),
                          }),
                          eP &&
                            (0, a.jsx)("span", {
                              id: `${ej}-details-error`,
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, a.jsx)(n.A, {
                                id: "collegePlan.task.detailsTooLong",
                                defaultMessage: "Use a description with {limit, number} characters or fewer",
                                description:
                                  "Validation error below a College Plan task description that exceeds the maximum length; limit is the allowed character count",
                                values: { limit: 4e3 },
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex h-4 items-center",
                        "aria-hidden": !0,
                        children: (0, a.jsx)("div", { className: "w-80 max-w-full border-t border-default" }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, a.jsx)("label", {
                            className: "select-none",
                            htmlFor: `${ej}-date`,
                            children: (0, a.jsx)(n.A, {
                              id: "collegePlan.task.date",
                              defaultMessage: "Due date",
                              description: "Label for the optional target date in the College Plan task editor",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, a.jsx)(m.l, {
                                id: `${ej}-date`,
                                variant: "ghost",
                                size: "2xl",
                                dropdownIconType: "none",
                                triggerClassName: "date-PjJarq",
                                locale: ek.locale,
                                valueType: "date",
                                value: null == ey ? null : new Date(`${ey}T12:00:00`),
                                onChange: (e) =>
                                  ev(
                                    null == e
                                      ? null
                                      : new Intl.DateTimeFormat("en-CA", {
                                          year: "numeric",
                                          month: "2-digit",
                                          day: "2-digit",
                                        }).format(e),
                                  ),
                                disabled: eA,
                                placeholder: ek.formatMessage({
                                  id: "collegePlan.task.selectDate",
                                  defaultMessage: "Select date",
                                  description:
                                    "Placeholder for a College Plan task with no target date; selecting opens the calendar",
                                }),
                                triggerDateFormat: "MMM d, yyyy",
                              }),
                              null != ey &&
                                (0, a.jsx)(u.$, {
                                  type: "button",
                                  size: "iconSm",
                                  color: "ghost",
                                  disabled: eA,
                                  onClick: () => ev(null),
                                  "aria-label": ek.formatMessage({
                                    id: "collegePlan.task.clearDate",
                                    defaultMessage: "Clear date",
                                    description:
                                      "Explicitly removes the task's saved target date when the student saves the dialog",
                                  }),
                                  children: (0, a.jsx)(h.Gmf, {}),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  ep?.citations != null &&
                    ep.citations.length > 0 &&
                    (0, a.jsxs)("section", {
                      className: (0, f.A)(
                        "flex flex-col gap-3 rounded-2xl border border-default p-4",
                        "sources-Irx4b2",
                      ),
                      "aria-labelledby": `${ej}-sources`,
                      children: [
                        (0, a.jsx)("h3", {
                          id: `${ej}-sources`,
                          className: "text-base leading-5.25 font-medium select-none",
                          children: (0, a.jsx)(n.A, {
                            id: "collegePlan.task.sources",
                            defaultMessage: "Sources",
                            description: "Heading above the saved, read-only source links for a College Plan task",
                          }),
                        }),
                        (0, a.jsx)(j.Z, {
                          citations: ep.citations,
                          schoolIds: ep.school_ids,
                          modal: !0,
                          variant: "list",
                        }),
                      ],
                    }),
                ],
              })),
            (Q[57] = ey),
            (Q[58] = ef),
            (Q[59] = eP),
            (Q[60] = ej),
            (Q[61] = ek),
            (Q[62] = ep),
            (Q[63] = eA),
            (Q[64] = eu),
            (Q[65] = em),
            (Q[66] = e_),
            (Q[67] = H))
          : (H = Q[67]),
        Q[68] !== et
          ? ((B =
              et &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, a.jsx)(n.A, {
                  id: "collegePlan.task.unconfirmed",
                  defaultMessage:
                    "This request may have been saved. Close and review your refreshed tasks before making another change.",
                  description:
                    "The server write outcome could not be verified; the dialog prevents replay and directs the student to inspect saved tasks without claiming the write failed",
                }),
              })),
            (Q[68] = et),
            (Q[69] = B))
          : (B = Q[69]),
        Q[70] !== G || Q[71] !== E || Q[72] !== $ || Q[73] !== H || Q[74] !== B
          ? ((q = (0, a.jsxs)("div", { ref: G, className: "flex flex-col gap-4 py-4", children: [E, $, H, B] })),
            (Q[70] = G),
            (Q[71] = E),
            (Q[72] = $),
            (Q[73] = H),
            (Q[74] = B),
            (Q[75] = q))
          : (q = Q[75]),
        Q[76] !== el || Q[77] !== ee || Q[78] !== er
          ? ((R =
              null != el &&
              (0, a.jsx)(u.$, {
                type: "button",
                color: "secondary",
                loading: er,
                disabled: ee || er,
                onClick: el,
                children: (0, a.jsx)(n.A, {
                  id: "collegePlan.task.refresh",
                  defaultMessage: "Refresh tasks",
                  description:
                    "Button in the College Plan task dialog to reread saved tasks after an unavailable read, keeping unsaved field edits and never repeating a task update",
                }),
              })),
            (Q[76] = el),
            (Q[77] = ee),
            (Q[78] = er),
            (Q[79] = R))
          : (R = Q[79]),
        Q[80] !== ec.type || Q[81] !== eu || Q[82] !== es || Q[83] !== ee || Q[84] !== et
          ? ((O =
              ("view" === eu || "delete" === eu || et) &&
              (0, a.jsxs)(u.$, {
                radius: "full",
                type: "button",
                color: "secondary",
                disabled: ee,
                autoFocus: "delete" === eu,
                onClick: () => {
                  "delete" !== eu || "delete" === ec.type || et ? es() : eh("edit")
                },
                children: [
                  et &&
                    (0, a.jsx)(n.A, {
                      id: "collegePlan.task.review",
                      defaultMessage: "Close and review tasks",
                      description:
                        "Closes an unconfirmed task change so the student can review the saved list before another action",
                    }),
                  !et &&
                    "view" === eu &&
                    (0, a.jsx)(n.A, {
                      id: "collegePlan.task.closeDetails",
                      defaultMessage: "Close",
                      description: "Closes read-only saved task details and returns focus to the task title",
                    }),
                  !et &&
                    "delete" === eu &&
                    (0, a.jsx)(n.A, {
                      id: "collegePlan.task.cancel",
                      defaultMessage: "Cancel",
                      description:
                        "Cancels task deletion in College Plan without sending a change; returns to any unsaved task edits, or closes a confirmation opened directly from the task menu",
                    }),
                ],
              })),
            (Q[80] = ec.type),
            (Q[81] = eu),
            (Q[82] = es),
            (Q[83] = ee),
            (Q[84] = et),
            (Q[85] = O))
          : (O = Q[85]),
        Q[86] !== ep || Q[87] !== eA || Q[88] !== eu || Q[89] !== et
          ? ((D =
              "edit" === eu &&
              null != ep &&
              !et &&
              (0, a.jsx)(u.$, {
                className: "me-auto",
                radius: "full",
                type: "button",
                color: "dangerOutline",
                disabled: eA,
                onClick: () => eh("delete"),
                children: (0, a.jsx)(n.A, {
                  id: "collegePlan.task.delete",
                  defaultMessage: "Delete task",
                  description: "Opens confirmation before removing a College Plan task from all linked views",
                }),
              })),
            (Q[86] = ep),
            (Q[87] = eA),
            (Q[88] = eu),
            (Q[89] = et),
            (Q[90] = D))
          : (D = Q[90]),
        Q[91] !== eS || Q[92] !== ep || Q[93] !== eA || Q[94] !== eu || Q[95] !== eo || Q[96] !== et
          ? ((U =
              "edit" === eu &&
              null != ep &&
              !et &&
              (0, a.jsx)(u.$, {
                radius: "full",
                type: "button",
                color: "outlineGhost",
                disabled: eA,
                onClick: () => eo({ type: "edit", id: ep.id, body: { completed: !eS } }),
                children: eS
                  ? (0, a.jsx)(n.A, {
                      id: "collegePlan.task.markIncomplete",
                      defaultMessage: "Mark as incomplete",
                      description:
                        "Marks a saved College Plan task incomplete immediately without saving other edits in the dialog",
                    })
                  : (0, a.jsx)(n.A, {
                      id: "collegePlan.task.markComplete",
                      defaultMessage: "Mark as complete",
                      description:
                        "Marks a saved College Plan task complete immediately without saving other edits in the dialog",
                    }),
              })),
            (Q[91] = eS),
            (Q[92] = ep),
            (Q[93] = eA),
            (Q[94] = eu),
            (Q[95] = eo),
            (Q[96] = et),
            (Q[97] = U))
          : (U = Q[97]),
        Q[98] !== eN || Q[99] !== eA || Q[100] !== eu || Q[101] !== ee || Q[102] !== et || Q[103] !== eM
          ? ((V =
              !et &&
              "view" !== eu &&
              (0, a.jsx)(u.$, {
                radius: "full",
                type: "submit",
                color: "delete" === eu ? "danger" : "primary",
                loading: ee,
                disabled: eA || ("delete" !== eu && (!eM || !eN)),
                children:
                  "delete" === eu
                    ? (0, a.jsx)(n.A, {
                        id: "collegePlan.task.delete",
                        defaultMessage: "Delete task",
                        description: "Opens confirmation before removing a College Plan task from all linked views",
                      })
                    : (0, a.jsx)(n.A, {
                        id: "collegePlan.task.save",
                        defaultMessage: "Save",
                        description: "Saves the title, description, and date in the College Plan task form",
                      }),
              })),
            (Q[98] = eN),
            (Q[99] = eA),
            (Q[100] = eu),
            (Q[101] = ee),
            (Q[102] = et),
            (Q[103] = eM),
            (Q[104] = V))
          : (V = Q[104]),
        Q[105] !== O || Q[106] !== D || Q[107] !== U || Q[108] !== V
          ? ((z = (0, a.jsxs)(b.Es, { className: "footer-Fli1Fb", expandSingleButton: !1, children: [O, D, U, V] })),
            (Q[105] = O),
            (Q[106] = D),
            (Q[107] = U),
            (Q[108] = V),
            (Q[109] = z))
          : (z = Q[109]),
        Q[110] !== e$ || Q[111] !== I || Q[112] !== F || Q[113] !== q || Q[114] !== R || Q[115] !== z
          ? ((Z = (0, a.jsxs)(b.R4, {
              as: "form",
              size: "viewport",
              className: M,
              "data-theme": e$,
              onSubmit: I,
              children: [F, q, R, z],
            })),
            (Q[110] = e$),
            (Q[111] = I),
            (Q[112] = F),
            (Q[113] = q),
            (Q[114] = R),
            (Q[115] = z),
            (Q[116] = Z))
          : (Z = Q[116]))
      let eB = ew ? "dark" : "light"
      return (
        Q[117] !== eB
          ? ((L = (0, a.jsx)("div", { ref: eb, "data-theme": eB })), (Q[117] = eB), (Q[118] = L))
          : (L = Q[118]),
        Q[119] !== eG || Q[120] !== A || Q[121] !== P || Q[122] !== Z || Q[123] !== L || Q[124] !== eF
          ? ((W = (0, a.jsxs)(C.lG, {
              open: !0,
              variant: "opaque",
              size: eF,
              radius: "compact",
              dialogCloseClassName: "close-KpNty0",
              contentOverflow: "visible",
              showDialogClose: eG,
              onOpenChange: A,
              contentProps: P,
              children: [Z, L],
            })),
            (Q[119] = eG),
            (Q[120] = A),
            (Q[121] = P),
            (Q[122] = Z),
            (Q[123] = L),
            (Q[124] = eF),
            (Q[125] = W))
          : (W = Q[125]),
        Q[126] !== W || Q[127] !== eT
          ? ((Y = (0, a.jsx)(g.z, { radixPortalContainer: eT, children: W })),
            (Q[126] = W),
            (Q[127] = eT),
            (Q[128] = Y))
          : (Y = Q[128]),
        Y
      )
    }
    var _ = l("pXr8"),
      P = l("Ghh3"),
      M = l("XZh4"),
      I = l("zeuB")
    let N = (0, i.c4)(p.u, ({ accountId: e, userId: t, planId: l, source: a }, { scope: s }) => {
      let i = () =>
        s.get(r.chatGptAuthenticatedAccountId$) === e &&
        s.get(r.chatGptAuthenticatedUserId$) === t &&
        s.query.getData(c.pH)?.plan_id === l &&
        s.get(d.E$)
      return {
        mutationKey: ["college-plan-task-edit", e, t, l, a],
        retry: !1,
        networkMode: "always",
        mutationFn: async (o) => {
          if (null == e || null == t || null == l || !i()) return "stale"
          let n = { additionalHeaders: { "ChatGPT-Account-ID": e }, expectedIdentity: { accountId: e, userId: t } }
          try {
            return (
              "create" === o.type
                ? await P.Request.safePost("/college-plan/items", { ...n, retry: !1, requestBody: o.body })
                : "edit" === o.type
                  ? await P.Request.safePatch("/college-plan/items/{item_id}", {
                      ...n,
                      retry: !1,
                      parameters: { path: { item_id: o.id } },
                      requestBody: o.body,
                    })
                  : await P.Request.safeDelete("/college-plan/items/{item_id}", {
                      ...n,
                      retry: !1,
                      parameters: { path: { item_id: o.id } },
                    }),
              "saved"
            )
          } catch {
            if (!i()) return "stale"
            if ("create" === o.type) return "unconfirmed"
            try {
              if ((await s.query.cancel(I.H, o.id, { exact: !0 }), !i())) return "stale"
              let e = await s.queryClient.fetchQuery({ ...s.query.getOptions(I.H, o.id), staleTime: 0 })
              if (!i()) return "stale"
              if (null != e)
                return "edit" === o.type &&
                  (void 0 === o.body.title || e.title === o.body.title) &&
                  (void 0 === o.body.details || (e.details ?? null) === o.body.details) &&
                  (void 0 === o.body.target_date || (e.target_date ?? null) === o.body.target_date) &&
                  (void 0 === o.body.completed || e.completed === o.body.completed)
                  ? "saved"
                  : "unconfirmed"
              return "delete" === o.type ? "saved" : "unconfirmed"
            } catch {
              return i() ? "unconfirmed" : "stale"
            }
          } finally {
            await (0, M.ls)(s, { accountId: e, userId: t, planId: l }, a).catch(() => {})
          }
        },
      }
    })
    var S = l("Wl5X")
    function T(e) {
      let t,
        l,
        o = (0, s.c)(17),
        { source: n, items: u, dataUpdatedAt: h, disabled: p, onRefresh: m, refreshing: g, children: f } = e,
        x = (0, i.Ul)(r.chatGptAuthenticatedAccountId$),
        y = (0, i.Ul)(r.chatGptAuthenticatedUserId$),
        { data: v } = (0, i.Ul)(c.pH),
        C = (0, i.Ul)(d.E$)
      o[0] !== x || o[1] !== C || o[2] !== v?.plan_id || o[3] !== y
        ? ((t = JSON.stringify([x, y, v?.plan_id, C])),
          (o[0] = x),
          (o[1] = C),
          (o[2] = v?.plan_id),
          (o[3] = y),
          (o[4] = t))
        : (t = o[4])
      let b = v?.plan_id,
        w = p || !C || null == x || null == y || null == v
      return (
        o[5] !== x ||
        o[6] !== f ||
        o[7] !== h ||
        o[8] !== u ||
        o[9] !== m ||
        o[10] !== g ||
        o[11] !== n ||
        o[12] !== t ||
        o[13] !== b ||
        o[14] !== w ||
        o[15] !== y
          ? ((l = (0, a.jsx)(
              F,
              {
                source: n,
                items: u,
                dataUpdatedAt: h,
                onRefresh: m,
                refreshing: g,
                accountId: x,
                userId: y,
                planId: b,
                disabled: w,
                children: f,
              },
              t,
            )),
            (o[5] = x),
            (o[6] = f),
            (o[7] = h),
            (o[8] = u),
            (o[9] = m),
            (o[10] = g),
            (o[11] = n),
            (o[12] = t),
            (o[13] = b),
            (o[14] = w),
            (o[15] = y),
            (o[16] = l))
          : (l = o[16]),
        l
      )
    }
    function F(e) {
      let t,
        l,
        r,
        d,
        c,
        m,
        g,
        f,
        x,
        y = (0, s.c)(48),
        {
          accountId: v,
          userId: C,
          planId: b,
          source: w,
          items: k,
          dataUpdatedAt: j,
          disabled: P,
          onRefresh: M,
          refreshing: T,
          children: F,
        } = e,
        E = (0, i.gh)(p.u),
        [$, H] = (0, o.useState)(null)
      y[0] !== v || y[1] !== b || y[2] !== w || y[3] !== C
        ? ((t = { accountId: v, userId: C, planId: b, source: w }),
          (y[0] = v),
          (y[1] = b),
          (y[2] = w),
          (y[3] = C),
          (y[4] = t))
        : (t = y[4])
      let { mutateAsync: B, isPending: q } = (0, i._U)(N, t),
        [R, O] = (0, o.useState)(!1),
        D = null != $ && "create" !== $.type ? $.item.id : void 0
      y[5] !== D || y[6] !== k
        ? ((l = k?.find((e) => {
            let { id: t } = e
            return t === D
          })),
          (y[5] = D),
          (y[6] = k),
          (y[7] = l))
        : (l = y[7])
      let U = l,
        V = null != D && null != k && null == U,
        z = V && !P && !q && !R
      y[8] !== z ? ((r = { enabled: z }), (y[8] = z), (y[9] = r)) : (r = y[9])
      let { data: Z, dataUpdatedAt: L, isPending: W, isFetching: Y, isError: Q, refetch: X } = (0, i._U)(I.H, D, r),
        K = V && (W || Y || Q || null == Z),
        J = U ?? (V && !Q ? Z : void 0),
        ee = null != U ? j : L
      P ||
        K ||
        q ||
        null == $ ||
        "create" === $.type ||
        null == J ||
        ee === $.readAt ||
        H({ ...$, item: J, readAt: ee })
      let et = (0, o.useRef)(!1),
        [el, ea] = (0, o.useState)(null),
        es = (0, o.useRef)(null)
      y[10] !== P || y[11] !== q
        ? ((d = (e) => {
            P || q || (ea(e), O(!1), H({ type: "create" }))
          }),
          (y[10] = P),
          (y[11] = q),
          (y[12] = d))
        : (d = y[12])
      let ei = d
      return (
        y[13] !== P || y[14] !== q || y[15] !== ei || y[16] !== w
          ? ((c =
              "string" == typeof w
                ? (0, a.jsxs)(u.$, {
                    ref: es,
                    type: "button",
                    color: "outlineSurface",
                    size: "detailAction",
                    radius: "full",
                    disabled: P || q,
                    onClick: () => ei(es.current),
                    children: [
                      (0, a.jsx)(h.ONy, {}),
                      (0, a.jsx)(n.A, {
                        id: "collegePlan.task.add",
                        defaultMessage: "Add task",
                        description:
                          "Opens the dialog to create a task in College Plan; from a school panel the task is linked to that school",
                      }),
                    ],
                  })
                : (0, a.jsx)(_.Y, { triggerRef: es, disabled: P || q, onCreate: () => ei(es.current) })),
            (y[13] = P),
            (y[14] = q),
            (y[15] = ei),
            (y[16] = w),
            (y[17] = c))
          : (c = y[17]),
        y[18] !== j || y[19] !== P || y[20] !== q
          ? ((m = (e, t, l) => {
              let a = void 0 === l ? "view" : l
              ;("view" !== a && (P || q)) || (ea(t), O(!1), H({ type: a, item: e, readAt: j }))
            }),
            (y[18] = j),
            (y[19] = P),
            (y[20] = q),
            (y[21] = m))
          : (m = y[21]),
        y[22] !== F || y[23] !== ei || y[24] !== c || y[25] !== m
          ? ((g = F({ addTask: c, onCreateTask: ei, onOpenTask: m })),
            (y[22] = F),
            (y[23] = ei),
            (y[24] = c),
            (y[25] = m),
            (y[26] = g))
          : (g = y[26]),
        y[27] !== $ ||
        y[28] !== P ||
        y[29] !== Y ||
        y[30] !== q ||
        y[31] !== B ||
        y[32] !== V ||
        y[33] !== M ||
        y[34] !== K ||
        y[35] !== Q ||
        y[36] !== W ||
        y[37] !== X ||
        y[38] !== T ||
        y[39] !== Z ||
        y[40] !== E ||
        y[41] !== w ||
        y[42] !== el ||
        y[43] !== R
          ? ((f =
              null != $ &&
              (0, a.jsx)(A, {
                intent: $,
                schoolId: "string" == typeof w ? w : void 0,
                disabled: P || K,
                onRefresh: M ?? (V && (Q || (!W && null == Z)) ? () => void X() : void 0),
                refreshing: T || Y,
                pending: q,
                unconfirmed: R,
                onClose: () => H(null),
                onReturnFocus: () => {
                  el?.isConnected
                    ? el.focus()
                    : (
                        es.current ??
                        document.getElementById(
                          "string" != typeof w && w.preview && E.get(S.r, w).data?.pages.every(G)
                            ? "college-schools"
                            : "college-view-timeline",
                        ) ??
                        document.getElementById("college-schools")
                      )?.focus()
                },
                onSubmit: (e) => {
                  P ||
                    K ||
                    et.current ||
                    R ||
                    ((et.current = !0),
                    B(e)
                      .then((t) => {
                        "unconfirmed" === t
                          ? O(!0)
                          : "saved" === t && "edit" === e.type && void 0 !== e.body.completed
                            ? H((t) =>
                                null != t && "create" !== t.type && t.item.id === e.id
                                  ? { ...t, item: { ...t.item, completed: e.body.completed } }
                                  : t,
                              )
                            : H(null)
                      })
                      .finally(() => {
                        et.current = !1
                      }))
                },
              })),
            (y[27] = $),
            (y[28] = P),
            (y[29] = Y),
            (y[30] = q),
            (y[31] = B),
            (y[32] = V),
            (y[33] = M),
            (y[34] = K),
            (y[35] = Q),
            (y[36] = W),
            (y[37] = X),
            (y[38] = T),
            (y[39] = Z),
            (y[40] = E),
            (y[41] = w),
            (y[42] = el),
            (y[43] = R),
            (y[44] = f))
          : (f = y[44]),
        y[45] !== g || y[46] !== f
          ? ((x = (0, a.jsxs)(a.Fragment, { children: [g, f] })), (y[45] = g), (y[46] = f), (y[47] = x))
          : (x = y[47]),
        x
      )
    }
    function G(e) {
      return 0 === e.items.length
    }
  },
  pXr8(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      i = l("zd8w"),
      o = l("Wf1j"),
      n = l("oyxz"),
      r = l("Sm6l"),
      d = l("bqtn"),
      c = l("bVeK")
    l.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            l,
            u,
            h,
            p,
            m,
            g,
            f,
            x,
            y = (0, s.c)(19),
            { triggerRef: v, disabled: C, onCreate: b, open: w } = e,
            k = (0, o.A)(),
            j = (0, i.useRef)(!1)
          return (
            y[0] !== b
              ? ((t = (e) => {
                  j.current && (e.preventDefault(), (j.current = !1), b())
                }),
                (y[0] = b),
                (y[1] = t))
              : (t = y[1]),
            y[2] !== k
              ? ((l = k.formatMessage({
                  id: "collegePlan.timeline.actions",
                  defaultMessage: "Timeline actions",
                  description: "Opens the College Plan timeline header menu containing Add new task",
                })),
                (y[2] = k),
                (y[3] = l))
              : (l = y[3]),
            y[4] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, a.jsx)(c.e4G, {})), (y[4] = u)) : (u = y[4]),
            y[5] !== C || y[6] !== l || y[7] !== v
              ? ((h = (0, a.jsx)(r.$, {
                  ref: v,
                  type: "button",
                  color: "ghost",
                  size: "toolbar",
                  uniform: !0,
                  disabled: C,
                  "aria-label": l,
                  children: u,
                })),
                (y[5] = C),
                (y[6] = l),
                (y[7] = v),
                (y[8] = h))
              : (h = y[8]),
            y[9] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(c.aRI, {})), (y[9] = p)) : (p = y[9]),
            y[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = () => {
                  j.current = !0
                }),
                (g = (0, a.jsx)(n.A, {
                  id: "collegePlan.timeline.addTask",
                  defaultMessage: "Add new task",
                  description: "Menu item in the College Plan timeline header that opens the new task editor",
                })),
                (y[10] = m),
                (y[11] = g))
              : ((m = y[10]), (g = y[11])),
            y[12] !== C
              ? ((f = (0, a.jsx)(d.ms.Item, { leftIcon: p, disabled: C, onSelect: m, children: g })),
                (y[12] = C),
                (y[13] = f))
              : (f = y[13]),
            y[14] !== w || y[15] !== t || y[16] !== h || y[17] !== f
              ? ((x = (0, a.jsx)(d.Ab, { align: "end", open: w, onCloseAutoFocus: t, triggerButton: h, children: f })),
                (y[14] = w),
                (y[15] = t),
                (y[16] = h),
                (y[17] = f),
                (y[18] = x))
              : (x = y[18]),
            x
          )
        },
        a: function (e) {
          let t,
            l,
            u,
            h,
            p,
            m,
            g,
            f,
            x,
            y,
            v,
            C,
            b,
            w,
            k,
            j,
            A,
            _ = (0, s.c)(35),
            { item: P, disabled: M, onAction: I, onToggle: N, open: S } = e,
            T = (0, o.A)(),
            F = (0, i.useRef)(null),
            G = (0, i.useRef)(null)
          return (
            _[0] !== I
              ? ((t = (e) => {
                  if (null != G.current && null != F.current) {
                    e.preventDefault()
                    let t = G.current
                    ;((G.current = null), I(t, F.current))
                  }
                }),
                (_[0] = I),
                (_[1] = t))
              : (t = _[1]),
            _[2] !== T || _[3] !== P.title
              ? ((l = T.formatMessage(
                  {
                    id: "collegePlan.task.actions",
                    defaultMessage: "Actions for {title}",
                    description:
                      "Accessible label for a College Plan task row menu with edit, complete or reopen, and delete actions; title is the saved task name",
                  },
                  { title: P.title },
                )),
                (_[2] = T),
                (_[3] = P.title),
                (_[4] = l))
              : (l = _[4]),
            _[5] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, a.jsx)(c.e4G, {})), (_[5] = u)) : (u = _[5]),
            _[6] !== l
              ? ((h = (0, a.jsx)(r.$, {
                  ref: F,
                  className:
                    "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 data-[state=open]:pointer-events-auto data-[state=open]:opacity-100 any-pointer-coarse:pointer-events-auto any-pointer-coarse:opacity-100",
                  type: "button",
                  color: "ghost",
                  size: "iconTouch",
                  "aria-label": l,
                  children: u,
                })),
                (_[6] = l),
                (_[7] = h))
              : (h = _[7]),
            _[8] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(c.aRI, {})), (_[8] = p)) : (p = _[8]),
            _[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = () => {
                  G.current = "edit"
                }),
                (g = (0, a.jsx)(n.A, {
                  id: "collegePlan.task.menu.edit",
                  defaultMessage: "Edit",
                  description:
                    "Short task row menu action that opens the College Plan task name and date editor directly",
                })),
                (_[9] = m),
                (_[10] = g))
              : ((m = _[9]), (g = _[10])),
            _[11] !== M
              ? ((f = (0, a.jsx)(d.ms.Item, { leftIcon: p, disabled: M, onSelect: m, children: g })),
                (_[11] = M),
                (_[12] = f))
              : (f = _[12]),
            _[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, a.jsx)(c.gL9, {})), (_[13] = x))
              : (x = _[13]),
            _[14] !== P.completed || _[15] !== N
              ? ((y = () => N(!P.completed)), (_[14] = P.completed), (_[15] = N), (_[16] = y))
              : (y = _[16]),
            _[17] !== P.completed
              ? ((v = P.completed
                  ? (0, a.jsx)(n.A, {
                      id: "collegePlan.task.menu.incomplete",
                      defaultMessage: "Mark as incomplete",
                      description: "Task row menu action that reopens a completed College Plan task",
                    })
                  : (0, a.jsx)(n.A, {
                      id: "collegePlan.task.menu.complete",
                      defaultMessage: "Mark as complete",
                      description: "Task row menu action that marks an unfinished College Plan task complete",
                    })),
                (_[17] = P.completed),
                (_[18] = v))
              : (v = _[18]),
            _[19] !== M || _[20] !== y || _[21] !== v
              ? ((C = (0, a.jsx)(d.ms.Item, { leftIcon: x, disabled: M, onSelect: y, children: v })),
                (_[19] = M),
                (_[20] = y),
                (_[21] = v),
                (_[22] = C))
              : (C = _[22]),
            _[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, a.jsx)(c.zwW, {})), (_[23] = b))
              : (b = _[23]),
            _[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = () => {
                  G.current = "delete"
                }),
                (k = (0, a.jsx)(n.A, {
                  id: "collegePlan.task.menu.delete",
                  defaultMessage: "Delete",
                  description:
                    "Destructive task row menu action that opens confirmation before removing a College Plan task from the plan and linked schools",
                })),
                (_[24] = w),
                (_[25] = k))
              : ((w = _[24]), (k = _[25])),
            _[26] !== M
              ? ((j = (0, a.jsx)(d.ms.Item, {
                  leftIcon: b,
                  tone: "destructive",
                  disabled: M,
                  onSelect: w,
                  children: k,
                })),
                (_[26] = M),
                (_[27] = j))
              : (j = _[27]),
            _[28] !== S || _[29] !== t || _[30] !== C || _[31] !== j || _[32] !== h || _[33] !== f
              ? ((A = (0, a.jsxs)(d.Ab, {
                  align: "end",
                  open: S,
                  onCloseAutoFocus: t,
                  triggerButton: h,
                  children: [f, C, j],
                })),
                (_[28] = S),
                (_[29] = t),
                (_[30] = C),
                (_[31] = j),
                (_[32] = h),
                (_[33] = f),
                (_[34] = A))
              : (A = _[34]),
            A
          )
        },
      },
    )
  },
  zeuB(e, t, l) {
    var a = l("SZCv"),
      s = l.n(a),
      i = l("zTeN"),
      o = l("SPnB"),
      n = l("Ghh3"),
      r = l("bxvp"),
      d = l("hsIu"),
      c = l("OWtl"),
      u = l("XZh4")
    let h = (0, i.i1)(
        c.u,
        (e, { get: t }) =>
          e?.flatMap((e) => {
            let l = t(u.c, e).data?.favicon_origin
            return null == l ? [] : [l]
          }) ?? [],
        { isEqual: s() },
      ),
      p = (0, i.vU)(c.u, (e, { get: t, scope: l }) => {
        let a = t(o.chatGptAuthenticatedAccountId$),
          s = t(o.chatGptAuthenticatedUserId$),
          i = t(d.pH).data?.plan_id
        return {
          queryKey: ["college-plan-task", a, s, i, e],
          enabled: null != e && null != a && null != s && null != i && t(r.E$),
          queryFn: async ({ signal: t }) => {
            let c
            do {
              if (
                null == e ||
                null == a ||
                null == s ||
                null == i ||
                l.get(o.chatGptAuthenticatedAccountId$) !== a ||
                l.get(o.chatGptAuthenticatedUserId$) !== s ||
                l.get(d.pH).data?.plan_id !== i ||
                !l.get(r.E$)
              )
                throw Error("College Plan is unavailable")
              let u = await n.Request.safeGet("/college-plan/items", {
                  additionalHeaders: { "ChatGPT-Account-ID": a },
                  expectedIdentity: { accountId: a, userId: s },
                  parameters: { query: { limit: 20, cursor: c } },
                  signal: t,
                  retry: !1,
                }),
                h = u.items.find(({ id: t }) => t === e)
              if (null != h) return h
              c = u.next_cursor ?? void 0
            } while (null != c)
            return null
          },
          staleTime: 0,
          retry: !1,
          networkMode: "always",
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
        }
      })
    l.d(t, {}, { E: h, H: p })
  },
  Wl5X(e, t, l) {
    var a = l("zTeN"),
      s = l("SPnB"),
      i = l("Ghh3"),
      o = l("bxvp"),
      n = l("hsIu"),
      r = l("OWtl")
    let d = (0, a.N3)(r.u, ({ timezone: e, preview: t, presenceOnly: l }, { get: a }) => {
      let r = a(s.chatGptAuthenticatedAccountId$),
        c = a(s.chatGptAuthenticatedUserId$),
        u = a(n.pH).data?.plan_id
      return {
        queryKey: ["college-plan-timeline", r, c, u, e, t],
        enabled:
          null != r &&
          null != c &&
          null != u &&
          a(o.E$) &&
          (!l ||
            (function (e, t) {
              let { data: l, isSuccess: a, hasNextPage: s } = t(d, { timezone: e, preview: !0 })
              return a && !s && l.pages.every((e) => 0 === e.items.length)
            })(e, a)),
        initialPageParam: "",
        getNextPageParam: (e) => e.next_cursor,
        queryFn: ({ pageParam: l, signal: a }) => {
          if (null == r || null == c || null == u) throw Error("College Plan is unavailable")
          return i.Request.safeGet("/college-plan/timeline", {
            parameters: {
              query: {
                timezone: e,
                include_completed: !t,
                include_undated: !t,
                limit: t ? 3 : 20,
                cursor: l || void 0,
              },
            },
            additionalHeaders: { "ChatGPT-Account-ID": r },
            expectedIdentity: { accountId: r, userId: c },
            signal: a,
          })
        },
        staleTime: 0,
        retry: !1,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
      }
    })
    l.d(t, {}, { r: d })
  },
  iYCA(e, t, l) {
    ;(l("QLGt"), (e.exports = l("TQhG")))
  },
  yCBR(e, t, l) {
    var a = l("W0XS")
    ;(l("xZl2"), (e.exports = a))
  },
  UlFl(e, t, l) {
    ;(l("o1bS"), (e.exports = l("ogbS")("Array", "findLast")))
  },
  gXPe(e, t, l) {
    ;(l("Y4C5"), l("Fuyw"), (e.exports = l("ogbS")("Array", "toSorted")))
  },
  XnQF(e, t, l) {
    var a = l("eUVA"),
      s = l("beJj"),
      i = l("oP4q").f,
      o = a("unscopables"),
      n = Array.prototype
    ;(void 0 === n[o] && i(n, o, { configurable: !0, value: s(null) }),
      (e.exports = function (e) {
        n[o][e] = !0
      }))
  },
  uHOi(e, t, l) {
    var a = l("f6Go")
    e.exports = function (e, t, l) {
      for (var s = 0, i = arguments.length > 2 ? l : a(t), o = new e(i); i > s;) o[s] = t[s++]
      return o
    }
  },
  wAJj(e, t, l) {
    var a = l("OwA9"),
      s = l("EzAB"),
      i = l("fuV1"),
      o = l("f6Go"),
      n = function (e) {
        var t = 1 === e
        return function (l, n, r) {
          for (var d, c = i(l), u = s(c), h = o(u), p = a(n, r); h-- > 0;)
            if (p((d = u[h]), h, c))
              switch (e) {
                case 0:
                  return d
                case 1:
                  return h
              }
          return t ? -1 : void 0
        }
      }
    e.exports = { findLast: n(0), findLastIndex: n(1) }
  },
  jXET(e, t, l) {
    var a = l("MGoG")
    e.exports = function (e, t) {
      var l = [][e]
      return (
        !!l &&
        a(function () {
          l.call(
            null,
            t ||
              function () {
                return 1
              },
            1,
          )
        })
      )
    }
  },
  U1ht(e, t, l) {
    e.exports = l("lbJk")([].slice)
  },
  FtMJ(e, t, l) {
    var a = l("U1ht"),
      s = Math.floor,
      i = function (e, t) {
        var l = e.length
        if (l < 8)
          for (var o, n, r = 1; r < l;) {
            for (n = r, o = e[r]; n && t(e[n - 1], o) > 0;) e[n] = e[--n]
            n !== r++ && (e[n] = o)
          }
        else
          for (
            var d = s(l / 2), c = i(a(e, 0, d), t), u = i(a(e, d), t), h = c.length, p = u.length, m = 0, g = 0;
            m < h || g < p;
          )
            e[m + g] = m < h && g < p ? (0 >= t(c[m], u[g]) ? c[m++] : u[g++]) : m < h ? c[m++] : u[g++]
        return e
      }
    e.exports = i
  },
  JBAm(e, t, l) {
    var a = l("v5Cs"),
      s = TypeError
    e.exports = function (e, t) {
      if (!delete e[t]) throw new s("Cannot delete property " + a(t) + " of " + a(e))
    }
  },
  ogbS(e, t, l) {
    var a = l("vlAc"),
      s = l("lbJk")
    e.exports = function (e, t) {
      return s(a[e].prototype[t])
    }
  },
  BN3d(e, t, l) {
    var a = l("RpEq").match(/firefox\/(\d+)/i)
    e.exports = !!a && +a[1]
  },
  mFA1(e, t, l) {
    var a = l("RpEq")
    e.exports = /MSIE|Trident/.test(a)
  },
  YX7I(e, t, l) {
    var a = l("RpEq").match(/AppleWebKit\/(\d+)\./)
    e.exports = !!a && +a[1]
  },
  yUY1(e, t, l) {
    var a = l("vlAc")
    e.exports = function (e, t) {
      var l = a[e],
        s = l && l.prototype
      return s && s[t]
    }
  },
  o1bS(e, t, l) {
    var a = l("Ywrr"),
      s = l("wAJj").findLast,
      i = l("XnQF")
    ;(a(
      { target: "Array", proto: !0 },
      {
        findLast: function (e) {
          return s(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
      },
    ),
      i("findLast"))
  },
  Y4C5(e, t, l) {
    var a = l("Ywrr"),
      s = l("lbJk"),
      i = l("dS6X"),
      o = l("fuV1"),
      n = l("f6Go"),
      r = l("JBAm"),
      d = l("qCMJ"),
      c = l("MGoG"),
      u = l("FtMJ"),
      h = l("jXET"),
      p = l("BN3d"),
      m = l("mFA1"),
      g = l("cOJA"),
      f = l("YX7I"),
      x = [],
      y = s(x.sort),
      v = s(x.push),
      C = c(function () {
        x.sort(void 0)
      }),
      b = c(function () {
        x.sort(null)
      }),
      w = h("sort"),
      k = !c(function () {
        if (g) return g < 70
        if (!p || !(p > 3)) {
          if (m) return !0
          if (f) return f < 603
          var e,
            t,
            l,
            a,
            s = ""
          for (e = 65; e < 76; e++) {
            switch (((t = String.fromCharCode(e)), e)) {
              case 66:
              case 69:
              case 70:
              case 72:
                l = 3
                break
              case 68:
              case 71:
                l = 4
                break
              default:
                l = 2
            }
            for (a = 0; a < 47; a++) x.push({ k: t + a, v: l })
          }
          for (
            x.sort(function (e, t) {
              return t.v - e.v
            }),
              a = 0;
            a < x.length;
            a++
          )
            ((t = x[a].k.charAt(0)), s.charAt(s.length - 1) !== t && (s += t))
          return "DGBEFHACIJK" !== s
        }
      })
    a(
      { target: "Array", proto: !0, forced: C || !b || !w || !k },
      {
        sort: function (e) {
          void 0 !== e && i(e)
          var t,
            l,
            a = o(this)
          if (k) return void 0 === e ? y(a) : y(a, e)
          var s = [],
            c = n(a)
          for (l = 0; l < c; l++) l in a && v(s, a[l])
          for (
            u(s, function (t, l) {
              return void 0 === l ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, l) || 0 : d(t) > d(l) ? 1 : -1
            }),
              t = n(s),
              l = 0;
            l < t;
          )
            a[l] = s[l++]
          for (; l < c;) r(a, l++)
          return a
        },
      },
    )
  },
  Fuyw(e, t, l) {
    var a = l("Ywrr"),
      s = l("lbJk"),
      i = l("dS6X"),
      o = l("MV5a"),
      n = l("uHOi"),
      r = l("yUY1"),
      d = l("XnQF"),
      c = Array,
      u = s(r("Array", "sort"))
    ;(a(
      { target: "Array", proto: !0 },
      {
        toSorted: function (e) {
          return (void 0 !== e && i(e), u(n(c, o(this)), e))
        },
      },
    ),
      d("toSorted"))
  },
  QLGt(e, t, l) {
    l("o1bS")
  },
  xZl2(e, t, l) {
    l("Fuyw")
  },
  TQhG(e, t, l) {
    e.exports = l("UlFl")
  },
  W0XS(e, t, l) {
    e.exports = l("gXPe")
  },
  lhyx(e, t, l) {
    let a = (0, l("iJY0").a)({
      name: "bank-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.833984, y: 1.273438, width: 16.332031, height: 16.894531 },
        visualBounds: { x: 1.833984, y: 1.273438, width: 16.332031, height: 16.894531 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.833984, y: 1.273438, width: 16.332031, height: 16.894531 },
        center: { x: 10, y: 9.720704 },
        insets: { top: 1.273438, right: 1.833985, bottom: 1.832031, left: 1.833984 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.720704 }, foreground: { x: 10, y: 9.720704 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.27344C10.3614 1.27349 10.7174 1.36071 11.0391 1.52637L17.5723 4.89062C17.7391 4.97649 17.8774 5.10258 17.9785 5.25391L18.0664 5.41309L18.127 5.58301C18.1738 5.75714 18.1789 5.9413 18.1396 6.11816C18.0873 6.3538 17.9586 6.57025 17.7686 6.72852C17.5778 6.88716 17.3358 6.97579 17.083 6.97559L16.46 6.97656V13.6143C17.4429 13.8831 18.1659 14.7805 18.166 15.8486C18.166 17.1291 17.1281 18.1678 15.8477 18.168H4.15234C2.872 18.1677 1.83398 17.129 1.83398 15.8486C1.83413 14.7805 2.55716 13.8831 3.54004 13.6143V6.97656H2.91699C2.66395 6.97656 2.42213 6.88654 2.23145 6.72754C2.04143 6.56902 1.91342 6.35201 1.86133 6.11621C1.80942 5.88073 1.83456 5.63299 1.93457 5.41211C2.03478 5.19101 2.20673 5.00494 2.42871 4.89062L8.96094 1.52637C9.28258 1.36075 9.63856 1.27344 10 1.27344ZM4.15234 14.8604C3.60664 14.8606 3.16424 15.3029 3.16406 15.8486C3.16406 16.3945 3.60654 16.8376 4.15234 16.8379H15.8477C16.3935 16.8377 16.8359 16.3945 16.8359 15.8486C16.8358 15.3029 16.3934 14.8605 15.8477 14.8604H4.15234ZM12.5967 13.5303H15.1299V6.97656H12.5967V13.5303ZM8.7334 13.5303H11.2666V6.97656H8.7334V13.5303ZM4.87012 13.5303H7.40332V6.97656H4.87012V13.5303ZM10 2.60352C9.85257 2.60352 9.70554 2.63938 9.57031 2.70898L3.86719 5.64648H4.10938C4.14076 5.64193 4.17244 5.63673 4.20508 5.63672C4.23764 5.63672 4.26947 5.64196 4.30078 5.64648H16.1338L10.4297 2.70898C10.2945 2.63935 10.1474 2.60356 10 2.60352Z" fill="currentColor"/>',
    })
    l.d(t, {}, { H: a })
  },
  lj8I(e, t, l) {
    let a = (0, l("iJY0").a)({
      name: "circle-light-24",
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
      body: '<path d="M20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12ZM21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12Z" fill="currentColor"/>',
    })
    l.d(t, {}, { n: a })
  },
}
//# sourceMappingURL=713992.15bc0de086.js.map
