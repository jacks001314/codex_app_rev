export const __rspack_esm_ids = [578056]
export const __webpack_modules__ = {
  ylLY(e, t, l) {
    let a = (0, l("zd8w").createContext)(null)
    l.d(t, {}, { t: a })
  },
  ULZ9(e, t, l) {
    ;(l.d(t, { z: () => i }), l("iYCA"), l("yCBR"))
    var a = l("ABep"),
      n = l("QosV"),
      o = l("ylLY")
    function i(e) {
      let t,
        l,
        i = (0, n.c)(8),
        { children: r, linkComponent: s, allowedWidgetTypes: d, radixPortalContainer: c, hydrationSafe: u } = e,
        h = void 0 === s ? "a" : s,
        p = void 0 === d ? "GA" : d,
        f = void 0 !== u && u
      return (
        i[0] !== p || i[1] !== f || i[2] !== h || i[3] !== c
          ? ((t = { linkComponent: h, allowedWidgetTypes: p, radixPortalContainer: c, hydrationSafe: f }),
            (i[0] = p),
            (i[1] = f),
            (i[2] = h),
            (i[3] = c),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== r || i[6] !== t
          ? ((l = (0, a.jsx)(o.t.Provider, { value: t, children: r })), (i[5] = r), (i[6] = t), (i[7] = l))
          : (l = i[7]),
        l
      )
    }
  },
  TakC(e, t, l) {
    l.d(t, { N: () => n })
    var a = l("Ospn")
    let n = l.n(a)()({ backdropStyle: "dim", iconNextVariant: "light", pill: !1, pressableScaleMultiplier: 1 }, {})
  },
  TE73(e, t, l) {
    var a = l("TakC"),
      n = l("FPHf")
    let o = (e) => ("number" == typeof e ? `${e}deg` : e)
    l.d(
      t,
      {},
      {
        Ny: (e) => {
          let t = e.currentTarget
          if (!n.Sw || !(t instanceof HTMLElement)) return
          let l = t.offsetWidth,
            o = 0.985
          ;(l <= 80 ? (o = 0.96) : l <= 150 ? (o = 0.97) : l <= 220 ? (o = 0.98) : l > 600 && (o = 0.995),
            t.style.setProperty("--scale", (1 + (o - 1) * a.N.pressableScaleMultiplier).toString()))
        },
        Oe: () =>
          !!n.Vd &&
          "function" == typeof window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        WI: function (e, t, l = (e) => e) {
          let a = [],
            n = new Map()
          for (let o of e) {
            let e = l(o[t], o),
              i = n.get(e)
            if (void 0 !== i) {
              a[i].items.push(o)
              continue
            }
            let r = { [t]: e, items: [o] }
            ;(n.set(e, a.length), a.push(r))
          }
          return a
        },
        fT: (e) => `${e}ms`,
        iB: (e) => {
          e.preventDefault()
        },
        lW: ({ x: e, y: t, scale: l, rotate: a, rotateY: n, perspective: i, skewX: r, skewY: s } = {}) => {
          let d = [
            null == i ? null : `perspective(${i}px)`,
            null == e ? null : `translateX(${e}px)`,
            null == t ? null : `translateY(${t}px)`,
            null == l ? null : `scale(${l})`,
            null == a ? null : `rotate(${o(a)})`,
            null == n ? null : `rotateY(${o(n)})`,
            null == r ? null : `skewX(${o(r)})`,
            null == s ? null : `skewY(${o(s)})`,
          ].filter(Boolean)
          return d.length ? d.join(" ") : "none"
        },
        mW: (e) =>
          Object.keys(e).reduce((t, l) => {
            let a = e[l]
            if (a || 0 === a) {
              let e = l.startsWith("--") ? "" : "--",
                n = "number" == typeof a ? `${a}px` : a
              t[`${e}${l}`] = n
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
            !n.Sw ||
            "function" != typeof window.requestAnimationFrame ||
            (n.Wt && "hidden" === document.visibilityState)
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
      n = l("MrGp"),
      o = l("yGJW"),
      i = l("Gxik"),
      r = l("hsIu")
    function s(e, t, l = "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED") {
      try {
        ;(0, o.yy)(e, a.HR, {
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
            entityId: e.query.getData(r.pH)?.project_id ?? void 0,
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
        j2: s,
        oQ: function (e, t, l, n) {
          try {
            ;(0, o.yy)(e, a.wk, {
              actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
              surfaceLocation: a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
              widgetType: "college_plan_school",
              widgetActionTarget: "open_school",
              conversationId: n,
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
            s(e, {
              id: a,
              kind: "school",
              surface: "chat_school_link",
              conversationId: e.get(n.jS, l?.conversationId ?? null) ?? void 0,
              messageId: l?.messageId,
            })
        },
        zk: function (e, t, l) {
          return (0, i.rr)(
            e,
            t,
            () => {
              let t = "chat_school_receipt" === l.surface ? l.conversationId : (0, i.Wh)(e)?.id
              return "chat_school_receipt" !== l.surface && null == t
                ? null
                : JSON.stringify(["entity", t, l.messageId, l.surface, l.kind, l.id])
            },
            () => s(e, l, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION"),
          )
        },
      },
    )
  },
  WbSP(e, t, l) {
    var a = l("ABep"),
      n = l("QosV"),
      o = l("on57"),
      i = l("qmMi"),
      r = l("KDax"),
      s = l("rxj0"),
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
            p = (0, n.c)(13),
            { citations: f, faviconOrigin: g, schoolIds: m, modal: x, variant: y } = e,
            v = void 0 !== x && x,
            b = void 0 === y ? "chips" : y,
            C = (0, i.Ul)(s.chatGptConsumerLockdownAccountState$),
            j = (0, i._U)(c.E, f?.length ? m : void 0)
          if (p[0] !== f || p[1] !== g || p[2] !== j || p[3] !== C || p[4] !== v || p[5] !== b) {
            let e = [g, ...j].flatMap(u),
              n = "list" === b ? "flex-col" : "flex-wrap text-sm"
            ;(p[8] !== n ? ((t = (0, o.A)("flex gap-1", n)), (p[8] = n), (p[9] = t)) : (t = p[9]),
              (l = f?.map((t, l) => {
                let n = URL.parse(t.url),
                  i = e.find((e) => n?.hostname === e.hostname || n?.hostname.endsWith(`.${e.hostname}`))
                return (0, a.jsx)(
                  "li",
                  {
                    className: "max-w-full min-w-0",
                    children:
                      n?.protocol === "https:" || n?.protocol === "http:"
                        ? (0, a.jsxs)(r.t, {
                            className: "list" === b ? "flex items-start gap-3 py-1" : void 0,
                            appearance: "list" === b ? "inherit" : "source",
                            underline: "list" === b ? "none" : void 0,
                            href: n.href,
                            initiator: "external_link",
                            openTarget: v ? "external-browser" : void 0,
                            requiresConfirmation: !0,
                            tooltipContent: t.title,
                            children: [
                              (0, a.jsx)("span", {
                                className: (0, o.A)(
                                  "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface",
                                  "list" === b ? "size-6 border border-default" : "size-4",
                                ),
                                "aria-hidden": !0,
                                children: (0, a.jsx)(d.a, {
                                  className: "list" === b ? "icon-sm" : "icon-xs",
                                  globeSize: 12,
                                  href: i?.origin ?? n.origin,
                                  loadRemote: "disabled" === C && null != i,
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: (0, o.A)(
                                  "min-w-0",
                                  "list" === b
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
              (p[0] = f),
              (p[1] = g),
              (p[2] = j),
              (p[3] = C),
              (p[4] = v),
              (p[5] = b),
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
      n = l("QosV"),
      o = l("qmMi"),
      i = l("oyxz"),
      r = l("Qgfj"),
      s = l("Niy1"),
      d = l("OWtl")
    l.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            l,
            r,
            c,
            u = (0, n.c)(12),
            { fact: h, schoolId: p } = e,
            f = (0, o.gh)(d.u)
          return (
            u[0] !== p || u[1] !== f
              ? ((t = (e) =>
                  null == p ? void 0 : (0, s.zk)(f, e, { id: p, kind: "school", surface: "application_deadline" })),
                (u[0] = p),
                (u[1] = f),
                (u[2] = t))
              : (t = u[2]),
            u[3] !== h.label || u[4] !== h.text
              ? ((l = (0, a.jsx)("span", {
                  children: (0, a.jsx)(i.A, {
                    id: "collegePlan.school.deadline",
                    defaultMessage: "{label} \u2014 {date}",
                    values: { label: h.label, date: h.text },
                  }),
                })),
                (u[3] = h.label),
                (u[4] = h.text),
                (u[5] = l))
              : (l = u[5]),
            u[6] !== h.reporting_period
              ? ((r = null != h.reporting_period && (0, a.jsx)("span", { children: h.reporting_period })),
                (u[6] = h.reporting_period),
                (u[7] = r))
              : (r = u[7]),
            u[8] !== t || u[9] !== l || u[10] !== r
              ? ((c = (0, a.jsxs)("span", {
                  ref: t,
                  className: "flex flex-col gap-1 text-sm break-words whitespace-normal text-secondary",
                  children: [l, r],
                })),
                (u[8] = t),
                (u[9] = l),
                (u[10] = r),
                (u[11] = c))
              : (c = u[11]),
            c
          )
        },
        a: function (e) {
          let t,
            l = (0, n.c)(4),
            { fact: o, showYear: s } = e,
            d = void 0 !== s && s
          return (
            l[0] !== o.due_date || l[1] !== o.label || l[2] !== d
              ? ((t = (0, a.jsx)("span", {
                  className: "text-sm break-words text-secondary",
                  children:
                    null == o.due_date
                      ? (0, a.jsx)(i.A, {
                          id: "collegePlan.schools.deadlineDetails",
                          defaultMessage: "See deadline details",
                        })
                      : (0, a.jsx)(i.A, {
                          id: "collegePlan.schools.compactDeadline",
                          defaultMessage: "{label} \u2014 {date}",
                          values: {
                            label: o.label,
                            date: (0, a.jsx)(
                              r.XU,
                              {
                                value: `${o.due_date}T12:00:00Z`,
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
                (l[0] = o.due_date),
                (l[1] = o.label),
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
      n = l("QosV"),
      o = l("qmMi"),
      i = l("rxj0"),
      r = l("tt6P"),
      s = l("bVeK")
    l.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            l = (0, n.c)(3),
            { faviconOrigin: d } = e,
            c = (0, o.Ul)(i.chatGptConsumerLockdownAccountState$)
          return (
            l[0] !== d || l[1] !== c
              ? ((t = (0, a.jsx)("span", {
                  className:
                    "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-default",
                  "aria-hidden": !0,
                  children:
                    null != d && "disabled" === c
                      ? (0, a.jsx)(r.a, { className: "icon-md", href: d })
                      : (0, a.jsx)(s.L$D, {}),
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
  U7ck(e, t, l) {
    l.d(t, { S3: () => D, GT: () => W, Ch: () => X })
    var a = l("ABep"),
      n = l("QosV"),
      o = l("AoaR"),
      i = l("NzCX"),
      r = l("ESTr")
    let s = (0, r.a)({
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
      d = (0, r.a)({
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
      c = (0, r.a)({
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
      u = (0, r.a)({
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
      h = (0, r.a)({
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
      p = (0, r.a)({
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
    var f = l("on57"),
      g = l("qmMi"),
      m = l("zd8w"),
      x = l("Wf1j"),
      y = l("oyxz"),
      v = l("Ywss"),
      b = l("SPnB"),
      C = l("LtEv"),
      j = l("OOaz"),
      w = l("Xslx"),
      A = l("Gxik"),
      k = l("Niy1"),
      _ = l("VBQS"),
      M = l("jd9V"),
      P = l("hsIu"),
      I = l("Sm6l"),
      S = l("HOLv"),
      N = l("bVeK"),
      F = l("FrrB"),
      T = l("MyoZ"),
      G = l("RNul"),
      E = l("nlNF"),
      O = l("EEop"),
      $ = l("iL7Y"),
      B = l("OWtl"),
      H = l("a6Zv"),
      q = l("RdSt"),
      U = l("zlXx"),
      R = l("XZh4")
    function D(e) {
      let t,
        l,
        o,
        i,
        r,
        s,
        d,
        c = (0, n.c)(28),
        { setupAction: u } = e,
        h = (0, g.gh)(B.u),
        p = (0, g.Ul)(R.WS),
        { data: f } = (0, g.Ul)(p ? P.pH : null) ?? {},
        k = f?.has_profile === !0,
        S = (0, x.A)(),
        G = (0, v.Zp)(),
        H = (0, m.useRef)(!1),
        [q, U] = (0, m.useState)(!1),
        [D, z] = (0, m.useState)(!1)
      c[0] !== S || c[1] !== G || c[2] !== h
        ? ((t = () => {
            if (H.current) return
            ;((H.current = !0), U(!0), z(!1))
            let e = h.get(b.chatGptAuthenticatedAccountId$),
              t = h.get(b.chatGptAuthenticatedUserId$),
              l = h.get(P.pH).data?.plan_id,
              a = h.get(E.x2),
              n = () => h.get(b.chatGptAuthenticatedAccountId$) === e && h.get(b.chatGptAuthenticatedUserId$) === t,
              o = () => n() && h.get(P.pH).data?.plan_id === l && h.get(E.x2) === a
            ;(async () => {
              let l = await (0, M.u)(h, "chat")
              if (null == l || !o()) return
              let a = (0, _.xR)(h.query.getData(O.Pc, (0, _.br)()))
              if (null == a) return void z(!0)
              let i = (0, j.TF)(l),
                r = (0, w.h)(h, i, [a]),
                s = (0, $.S)(h.get(b.PO).authMethod),
                d = await (0, C.submitChatGptFollowUp)(h, {
                  conversationId: i,
                  prompt: S.formatMessage({
                    id: "collegePlan.schools.researchPrompt",
                    defaultMessage: "Help me add a school to my college plan.",
                  }),
                  systemHints: [a],
                  requireDispatchAcceptance: !0,
                  isSubmissionCurrent: o,
                  onConversationStarted: s
                    ? (l) => {
                        null != e &&
                          null != t &&
                          n() &&
                          (0, A.b2)(h, {
                            actionType: "CHATGPT_COLLEGE_PLAN_UI_ACTION_TYPE_ADD_SCHOOL_CHAT_STARTED",
                            conversationId: l,
                          })
                      }
                    : void 0,
                }).finally(r)
              o() && (d ? await G(`/college-plan/c/${encodeURIComponent(l)}`) : z(!0))
            })()
              .catch(() => {
                o() && z(!0)
              })
              .finally(() => {
                ;((H.current = !1), U(!1))
              })
          }),
          (c[0] = S),
          (c[1] = G),
          (c[2] = h),
          (c[3] = t))
        : (t = c[3])
      let L = t,
        W = p ? "primary" : "outlineSurface",
        X = p ? "dialog" : "detailAction"
      ;(c[4] !== p || c[5] !== S
        ? ((l = p ? void 0 : S.formatMessage({ id: "collegePlan.schools.add", defaultMessage: "Add schools" })),
          (c[4] = p),
          (c[5] = S),
          (c[6] = l))
        : (l = c[6]),
        c[7] !== p
          ? ((o = p
              ? (0, a.jsx)(y.A, { id: "collegePlan.schools.empty.add", defaultMessage: "Add a school" })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(N.ONy, {}),
                    (0, a.jsx)(y.A, { id: "collegePlan.schools.addButton", defaultMessage: "Add" }),
                  ],
                })),
            (c[7] = p),
            (c[8] = o))
          : (o = c[8]),
        c[9] !== q || c[10] !== L || c[11] !== W || c[12] !== X || c[13] !== l || c[14] !== o
          ? ((i = (0, a.jsx)(I.$, {
              color: W,
              size: X,
              radius: "full",
              disabled: q,
              "aria-label": l,
              onClick: L,
              children: o,
            })),
            (c[9] = q),
            (c[10] = L),
            (c[11] = W),
            (c[12] = X),
            (c[13] = l),
            (c[14] = o),
            (c[15] = i))
          : (i = c[15]),
        c[16] !== D
          ? ((r =
              D &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, a.jsx)(y.A, {
                  id: "collegePlan.schools.researchError",
                  defaultMessage: "College Plan couldn\u2019t start research. Try again.",
                }),
              })),
            (c[16] = D),
            (c[17] = r))
          : (r = c[17]),
        c[18] !== i || c[19] !== r
          ? ((s = (0, a.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [i, r] })),
            (c[18] = i),
            (c[19] = r),
            (c[20] = s))
          : (s = c[20]))
      let K = s
      return (
        c[21] !== K || c[22] !== p || c[23] !== D || c[24] !== k || c[25] !== q || c[26] !== u
          ? ((d = (0, a.jsx)("section", {
              id: "college-schools",
              "aria-labelledby": "college-schools-heading",
              tabIndex: -1,
              children: p
                ? (0, a.jsx)(F.A, {
                    layout: "outlined",
                    className: "select-none",
                    illustration: (0, a.jsx)(V, {}),
                    title: (0, a.jsx)("h2", {
                      id: "college-schools-heading",
                      children: k
                        ? (0, a.jsx)(y.A, {
                            id: "collegePlan.schools.empty.title.savedProfile",
                            defaultMessage: "Your profile is saved. Ready to add schools?",
                          })
                        : (0, a.jsx)(y.A, {
                            id: "collegePlan.schools.empty.title",
                            defaultMessage: "Keep your applications on track",
                          }),
                    }),
                    description: k
                      ? (0, a.jsx)(y.A, {
                          id: "collegePlan.schools.empty.description.savedProfile",
                          defaultMessage: "By adding schools, ChatGPT can help track deadlines, tasks, and next steps",
                        })
                      : (0, a.jsx)(y.A, {
                          id: "collegePlan.schools.empty.description",
                          defaultMessage:
                            "Add schools you\u2019re considering to see requirements, deadlines, and next steps in one place.",
                        }),
                    actions: k || q || D ? K : u,
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
                              }),
                            }),
                            K,
                          ],
                        }),
                        (0, a.jsx)(Z, {}),
                      ],
                    }),
                  }),
            })),
            (c[21] = K),
            (c[22] = p),
            (c[23] = D),
            (c[24] = k),
            (c[25] = q),
            (c[26] = u),
            (c[27] = d))
          : (d = c[27]),
        d
      )
    }
    function V() {
      let e,
        t,
        l,
        o,
        i = (0, n.c)(10),
        r = (0, H.Y)(),
        f = r ? s : d
      i[0] !== f
        ? ((e = (0, a.jsx)("span", {
            className:
              "flex size-12 -rotate-6 items-center justify-center rounded-xl border border-subtle bg-surface shadow-sm",
            children: (0, a.jsx)(S.I, { asset: f }),
          })),
          (i[0] = f),
          (i[1] = e))
        : (e = i[1])
      let g = r ? c : u
      i[2] !== g
        ? ((t = (0, a.jsx)("span", {
            className:
              "relative flex size-12 items-center justify-center rounded-xl border border-subtle bg-surface shadow-sm",
            children: (0, a.jsx)(S.I, { asset: g }),
          })),
          (i[2] = g),
          (i[3] = t))
        : (t = i[3])
      let m = r ? h : p
      return (
        i[4] !== m
          ? ((l = (0, a.jsx)("span", {
              className:
                "flex size-12 rotate-6 items-center justify-center rounded-xl border border-subtle bg-surface shadow-sm",
              children: (0, a.jsx)(S.I, { asset: m }),
            })),
            (i[4] = m),
            (i[5] = l))
          : (l = i[5]),
        i[6] !== e || i[7] !== t || i[8] !== l
          ? ((o = (0, a.jsxs)("div", {
              "aria-hidden": !0,
              className: "flex items-center -space-x-2",
              children: [e, t, l],
            })),
            (i[6] = e),
            (i[7] = t),
            (i[8] = l),
            (i[9] = o))
          : (o = i[9]),
        o
      )
    }
    function Z(e) {
      let t,
        l,
        o,
        i,
        r,
        s = (0, n.c)(18),
        { source: d } = e,
        c = void 0 !== d && d,
        {
          data: u,
          isPending: h,
          isError: p,
          isFetching: m,
          hasNextPage: x,
          refetch: v,
          fetchNextPage: b,
        } = (0, g.Ul)(R.f1)
      return (
        s[0] !== h ? ((t = h && (0, a.jsx)(G.y, {})), (s[0] = h), (s[1] = t)) : (t = s[1]),
        s[2] !== p || s[3] !== m || s[4] !== v
          ? ((l =
              p &&
              (0, a.jsxs)("div", {
                role: "alert",
                className: "flex flex-col items-start gap-2",
                children: [
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(y.A, {
                      id: "collegePlan.schools.readError",
                      defaultMessage: "Your schools couldn\u2019t be refreshed",
                    }),
                  }),
                  (0, a.jsx)(I.$, {
                    color: "secondary",
                    disabled: m,
                    onClick: () => void v(),
                    children: (0, a.jsx)(y.A, { id: "collegePlan.schools.retry", defaultMessage: "Try again" }),
                  }),
                ],
              })),
            (s[2] = p),
            (s[3] = m),
            (s[4] = v),
            (s[5] = l))
          : (l = s[5]),
        s[6] !== u || s[7] !== c
          ? ((o =
              u?.pages.some(L) &&
              (0, a.jsx)("ul", {
                className: (0, f.A)("divide-y divide-border-subtle", c && "border-b border-border-subtle"),
                children: u.pages
                  .flatMap(z)
                  .map((e) => (0, a.jsx)("li", { children: (0, a.jsx)(W, { school: e, source: c }) }, e.id)),
              })),
            (s[6] = u),
            (s[7] = c),
            (s[8] = o))
          : (o = s[8]),
        s[9] !== b || s[10] !== x || s[11] !== m
          ? ((i =
              x &&
              (0, a.jsx)(I.$, {
                color: "secondary",
                disabled: m,
                onClick: () => void b(),
                children: (0, a.jsx)(y.A, { id: "collegePlan.schools.more", defaultMessage: "Show more schools" }),
              })),
            (s[9] = b),
            (s[10] = x),
            (s[11] = m),
            (s[12] = i))
          : (i = s[12]),
        s[13] !== t || s[14] !== l || s[15] !== o || s[16] !== i
          ? ((r = (0, a.jsxs)(a.Fragment, { children: [t, l, o, i] })),
            (s[13] = t),
            (s[14] = l),
            (s[15] = o),
            (s[16] = i),
            (s[17] = r))
          : (r = s[17]),
        r
      )
    }
    function z(e) {
      return e.schools
    }
    function L(e) {
      return e.schools.length > 0
    }
    function W(e) {
      let t,
        l,
        r,
        s,
        d,
        c,
        u,
        h = (0, n.c)(33),
        { school: p, source: m, readOnly: x } = e,
        y = void 0 !== m && m,
        b = void 0 !== x && x,
        C = (0, g.gh)(B.u),
        j = (0, v.zy)(),
        w = (0, v.RQ)(o.O3),
        A = y ? "sources" : "school_list"
      h[0] !== p.id || h[1] !== A
        ? ((t = { id: p.id, kind: "school", surface: A }), (h[0] = p.id), (h[1] = A), (h[2] = t))
        : (t = h[2])
      let _ = t
      h[3] !== b ||
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
                    children: (0, a.jsx)(S.I, { asset: i.H }),
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
                  (0, a.jsx)(U.h, { faviconOrigin: p.favicon_origin }),
                  (0, a.jsxs)("span", {
                    className: "flex min-w-0 flex-1 flex-col gap-2",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "flex items-center gap-1 text-base",
                        children: [
                          (0, a.jsx)("span", { className: "break-words", children: p.name }),
                          !b && (0, a.jsx)(N.J6i, {}),
                        ],
                      }),
                      (0, a.jsx)(X, { completed: p.completed_tasks, total: p.total_tasks }),
                      null != p.application_deadline && (0, a.jsx)(q.a, { fact: p.application_deadline }),
                    ],
                  }),
                ],
              })),
          (h[3] = b),
          (h[4] = p.application_deadline),
          (h[5] = p.completed_tasks),
          (h[6] = p.favicon_origin),
          (h[7] = p.name),
          (h[8] = p.total_tasks),
          (h[9] = y),
          (h[10] = l))
        : (l = h[10])
      let M = l
      if (b) {
        let e
        return (h[11] !== M ? ((e = (0, a.jsx)("div", { children: M })), (h[11] = M), (h[12] = e)) : (e = h[12]), e)
      }
      let P = `college-school-${p.id}`
      h[13] !== _ || h[14] !== C
        ? ((r = (e) => (0, k.zk)(C, e, _)), (h[13] = _), (h[14] = C), (h[15] = r))
        : (r = h[15])
      let I = `/college-plan/schools/${encodeURIComponent(p.id)}`,
        F = null == w
      h[16] !== _ || h[17] !== C ? ((s = () => (0, k.j2)(C, _)), (h[16] = _), (h[17] = C), (h[18] = s)) : (s = h[18])
      let T = null != w ? j : j.state?.collegePlanHome,
        G = null != w ? `college-school-${p.id}` : j.state?.collegePlanTrigger
      h[19] !== T || h[20] !== G
        ? ((d = { collegePlanHome: T, collegePlanTrigger: G }), (h[19] = T), (h[20] = G), (h[21] = d))
        : (d = h[21])
      let E =
        y &&
        "cursor-interaction rounded-lg hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      return (
        h[22] !== E ? ((c = (0, f.A)("block select-none", E)), (h[22] = E), (h[23] = c)) : (c = h[23]),
        h[24] !== M ||
        h[25] !== s ||
        h[26] !== d ||
        h[27] !== c ||
        h[28] !== P ||
        h[29] !== r ||
        h[30] !== I ||
        h[31] !== F
          ? ((u = (0, a.jsx)(v.N_, {
              id: P,
              ref: r,
              to: I,
              replace: F,
              onClick: s,
              state: d,
              className: c,
              children: M,
            })),
            (h[24] = M),
            (h[25] = s),
            (h[26] = d),
            (h[27] = c),
            (h[28] = P),
            (h[29] = r),
            (h[30] = I),
            (h[31] = F),
            (h[32] = u))
          : (u = h[32]),
        u
      )
    }
    function X(e) {
      let t,
        l,
        o,
        i = (0, n.c)(13),
        { completed: r, total: s, prominent: d } = e,
        c = void 0 !== d && d,
        u = (0, x.A)()
      i[0] !== r || i[1] !== c || i[2] !== s
        ? ((t =
            0 === s
              ? (0, a.jsx)(y.A, { id: "collegePlan.schools.noTasks", defaultMessage: "No tasks yet" })
              : (0, a.jsx)(y.A, {
                  id: "collegePlan.schools.taskFraction",
                  defaultMessage: "<count>{completed, number}</count> / {total, plural, one {# task} other {# tasks}}",
                  values: {
                    completed: r,
                    total: s,
                    count: (e) =>
                      (0, a.jsx)(
                        "span",
                        { className: c ? "text-2xl font-semibold text-default" : void 0, children: e },
                        "count",
                      ),
                  },
                })),
          (i[0] = r),
          (i[1] = c),
          (i[2] = s),
          (i[3] = t))
        : (t = i[3])
      let h = t
      i[4] !== r || i[5] !== u || i[6] !== c || i[7] !== s
        ? ((l =
            s > 0 &&
            (0, a.jsx)("div", {
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": s,
              "aria-valuenow": r,
              "aria-label": u.formatMessage(
                {
                  id: "collegePlan.schools.taskProgress",
                  defaultMessage: "{completed} of {total, plural, one {# task} other {# tasks}} complete",
                },
                { completed: r, total: s },
              ),
              className: (0, f.A)("h-1.5 overflow-hidden rounded-full bg-text/10", c ? "shrink-0" : "flex-1"),
              children: (0, a.jsx)("div", {
                className: "h-full rounded-full bg-neutral-solid",
                style: { width: `${0 === s ? 0 : (100 * r) / s}%` },
              }),
            })),
          (i[4] = r),
          (i[5] = u),
          (i[6] = c),
          (i[7] = s),
          (i[8] = l))
        : (l = i[8])
      let p = l
      return (
        i[9] !== p || i[10] !== h || i[11] !== c
          ? ((o = c
              ? (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [(0, a.jsx)("span", { className: "text-sm text-secondary", children: h }), p],
                })
              : (0, a.jsxs)("span", {
                  className: "flex items-center gap-4",
                  children: [p, (0, a.jsx)("span", { className: "shrink-0 text-sm text-secondary", children: h })],
                })),
            (i[9] = p),
            (i[10] = h),
            (i[11] = c),
            (i[12] = o))
          : (o = i[12]),
        o
      )
    }
  },
  XZh4(e, t, l) {
    var a = l("HY2m"),
      n = l("qmMi"),
      o = l("SPnB"),
      i = l("Kwur"),
      r = l("bxvp"),
      s = l("hsIu"),
      d = l("vLsY"),
      c = l("OWtl"),
      u = l("GDNt"),
      h = l("Wl5X")
    let p = (0, n.$A)(c.u, ({ get: e }) => {
        let t = e(o.chatGptAuthenticatedAccountId$),
          l = e(o.chatGptAuthenticatedUserId$),
          a = e(s.pH).data?.plan_id
        return {
          queryKey: ["college-plan-schools", t, l, a],
          enabled: null != t && null != l && null != a && e(r.E$),
          initialPageParam: "",
          getNextPageParam: (e) => e.next_cursor,
          queryFn: ({ pageParam: e, signal: n }) => {
            if (null == t || null == l || null == a) throw Error("College Plan is unavailable")
            return i.Request.safeGet("/college-plan/schools", {
              parameters: { query: { cursor: e || void 0, limit: 20 } },
              additionalHeaders: { "ChatGPT-Account-ID": t },
              expectedIdentity: { accountId: t, userId: l },
              signal: n,
            })
          },
          staleTime: 0,
          retry: !1,
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
        }
      }),
      f = (0, n.un)(c.u, ({ get: e }) => {
        let { data: t, isSuccess: l, hasNextPage: a } = e(p)
        return l && !a && t.pages.every((e) => 0 === e.schools.length)
      }),
      g = (0, n.vU)(c.u, (e, { get: t }) => {
        let l = t(o.chatGptAuthenticatedAccountId$),
          a = t(o.chatGptAuthenticatedUserId$),
          n = t(s.pH).data?.plan_id
        return {
          queryKey: ["college-plan-school", l, a, n, e],
          enabled: null != l && null != a && null != n && t(r.E$),
          queryFn: ({ signal: t }) => {
            if (null == l || null == a || null == n) throw Error("College Plan is unavailable")
            return i.Request.safeGet("/college-plan/schools/{school_id}", {
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
      m = (0, n.c4)(c.u, (e, { get: t, scope: l }) => {
        let a = t(o.chatGptAuthenticatedAccountId$),
          n = t(o.chatGptAuthenticatedUserId$),
          d = t(s.pH).data?.plan_id
        return {
          mutationKey: ["college-plan-completion", a, n, d, e],
          retry: !1,
          networkMode: "always",
          mutationFn: async ({ item: t, completed: c }) => {
            if (
              null == a ||
              null == n ||
              null == d ||
              l.get(o.chatGptAuthenticatedAccountId$) !== a ||
              l.get(o.chatGptAuthenticatedUserId$) !== n ||
              l.get(s.pH).data?.plan_id !== d ||
              !l.get(r.E$)
            )
              throw Error("College Plan changed before the task could be saved")
            let u = "string" == typeof e ? l.query.getOptions(g, e) : l.query.getOptions(h.r, e),
              p = l.queryClient.getQueryState(u.queryKey)
            if (p?.status !== "success" || p.isInvalidated || "idle" !== p.fetchStatus)
              throw Error("Refresh the task list before changing a task")
            let f =
              "string" == typeof e
                ? l.query.getData(g, e)?.items?.find(({ id: e }) => e === t.id)
                : l.query
                    .getData(h.r, e)
                    ?.pages.flatMap((e) => e.items)
                    .find(({ id: e }) => e === t.id)
            if (null == f || f.completed !== t.completed) throw Error("The task changed; review its saved state")
            try {
              await i.Request.safePatch("/college-plan/items/{item_id}", {
                parameters: { path: { item_id: t.id } },
                additionalHeaders: { "ChatGPT-Account-ID": a },
                expectedIdentity: { accountId: a, userId: n },
                retry: !1,
                requestBody: { completed: c },
              })
            } finally {
              await y(l, { accountId: a, userId: n, planId: d }, e)
            }
          },
        }
      }),
      x = (0, n.c4)(
        c.u,
        (e, { scope: t }) => {
          let l = () =>
            null != e.accountId &&
            null != e.userId &&
            null != e.planId &&
            t.get(o.chatGptAuthenticatedAccountId$) === e.accountId &&
            t.get(o.chatGptAuthenticatedUserId$) === e.userId &&
            t.query.getData(s.pH)?.plan_id === e.planId &&
            t.get(r.E$)
          return {
            mutationKey: ["college-plan-remove-school", e],
            retry: !1,
            networkMode: "always",
            mutationFn: async (n) => {
              if (!l() || null == e.accountId || null == e.userId) return
              let o = !1
              if ("remove" === n)
                try {
                  ;(await i.Request.safeDelete("/college-plan/schools/{school_id}", {
                    parameters: { path: { school_id: e.schoolId } },
                    additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
                    expectedIdentity: { accountId: e.accountId, userId: e.userId },
                    retry: !1,
                    expectedErrorStatuses: [401, 403, 404, 409, 503],
                  }),
                    (o = !0))
                } catch (e) {
                  if (!l()) return
                  if (e instanceof u.fk && (401 === e.status || 403 === e.status)) throw e
                }
              if (!o) {
                if ((await t.query.cancel(g, e.schoolId, { exact: !0 }), !l())) return
                try {
                  return (await t.query.fetch(g, e.schoolId), { status: "present" })
                } catch (e) {
                  if (!(e instanceof u.fk) || 404 !== e.status) throw e
                }
              }
              let r = ["college-plan-school", e.accountId, e.userId, e.planId],
                s = ["college-plan-schools", "college-plan-timeline"].map((t) => [t, e.accountId, e.userId, e.planId]),
                c = [...s, r]
              for (let e of (await Promise.all(c.map((e) => t.queryClient.cancelQueries({ queryKey: e }))), s))
                for (let l of t.queryClient.getQueryCache().findAll({ queryKey: e })) l.reset()
              t.queryClient
                .getQueryCache()
                .find({ queryKey: [...r, e.schoolId], exact: !0 })
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
    async function y(e, { accountId: t, userId: l, planId: a }, n) {
      ;(await Promise.all([
        e.queryClient.resetQueries({ queryKey: ["college-plan-timeline", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-schools", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-school", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-task", t, l, a] }, { throwOnError: !0 }),
      ]),
        e.get(o.chatGptAuthenticatedAccountId$) === t &&
          e.get(o.chatGptAuthenticatedUserId$) === l &&
          e.get(s.pH).data?.plan_id === a &&
          ("string" == typeof n
            ? await e.queryClient.fetchQuery({ ...e.query.getOptions(g, n), staleTime: 0 })
            : await e.queryClient.fetchInfiniteQuery({ ...e.query.getOptions(h.r, n), staleTime: 0 })))
    }
    l.d(t, {}, { WS: f, c: g, dF: m, f1: p, ls: y, ur: x })
  },
  V9n7(e, t, l) {
    l.d(t, { _e: () => R, Tp: () => W })
    var a = l("ABep"),
      n = l("QosV"),
      o = l("ngY7")
    let i = (0, l("ESTr").a)({
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
    var r = l("on57"),
      s = l("qmMi"),
      d = l("zd8w"),
      c = l("Wf1j"),
      u = l("oyxz"),
      h = l("Qgfj"),
      p = l("qRqa"),
      f = l("SPnB"),
      g = l("Niy1"),
      m = l("hsIu"),
      x = l("Sm6l"),
      y = l("Sezd"),
      v = l("JNtf"),
      b = l("bqtn"),
      C = l("HOLv"),
      j = l("bVeK"),
      w = l("MyoZ"),
      A = l("RNul"),
      k = l("OWtl"),
      _ = l("GDNt"),
      M = l("WbSP"),
      P = l("RdSt"),
      I = l("zlXx"),
      S = l("U7ck"),
      N = l("XZh4"),
      F = l("bxvp"),
      T = l("mUDD"),
      G = l("SGsN"),
      E = l("soaw")
    function O(e) {
      let t,
        l,
        o,
        i,
        r,
        c,
        h = (0, n.c)(29),
        { school: p, onClose: g, onRemoved: x } = e,
        y = (0, s.gh)(k.u),
        v = (0, E.a)()
      h[0] !== p.id || h[1] !== y
        ? ((t = () => ({
            accountId: y.get(f.chatGptAuthenticatedAccountId$),
            userId: y.get(f.chatGptAuthenticatedUserId$),
            planId: y.query.getData(m.pH)?.plan_id,
            schoolId: p.id,
          })),
          (h[0] = p.id),
          (h[1] = y),
          (h[2] = t))
        : (t = h[2])
      let [b] = (0, d.useState)(t),
        C = (0, d.useRef)(!1)
      h[3] !== b.accountId || h[4] !== b.planId || h[5] !== b.userId || h[6] !== y
        ? ((l = () =>
            null != b.accountId &&
            null != b.userId &&
            null != b.planId &&
            y.get(f.chatGptAuthenticatedAccountId$) === b.accountId &&
            y.get(f.chatGptAuthenticatedUserId$) === b.userId &&
            y.query.getData(m.pH)?.plan_id === b.planId &&
            y.get(F.E$)),
          (h[3] = b.accountId),
          (h[4] = b.planId),
          (h[5] = b.userId),
          (h[6] = y),
          (h[7] = l))
        : (l = h[7])
      let j = l,
        { isError: w, isPending: A, mutate: _, variables: M } = (0, s._U)(N.ur, b),
        P = w || (A && "check" === M)
      h[8] !== j || h[9] !== v || h[10] !== A || h[11] !== _ || h[12] !== g || h[13] !== x || h[14] !== y
        ? ((o = (e) => {
            !C.current &&
              !A &&
              v() &&
              j() &&
              ((C.current = !0),
              _(e, {
                onSuccess: (e) => {
                  if (null != e && v() && j()) {
                    if ("present" === e.status) {
                      ;(g(),
                        y
                          .get(G.Id)
                          .warning(
                            (0, a.jsx)(u.A, {
                              id: "collegePlan.school.removal.review",
                              defaultMessage: "This school is still in your plan. Review it before trying again.",
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
                            defaultMessage: "School removed. Your remaining schools couldn\u2019t be refreshed.",
                          }),
                          { hasCloseButton: !0 },
                        ),
                      x())
                  }
                },
                onSettled: () => {
                  C.current = !1
                },
              }))
          }),
          (h[8] = j),
          (h[9] = v),
          (h[10] = A),
          (h[11] = _),
          (h[12] = g),
          (h[13] = x),
          (h[14] = y),
          (h[15] = o))
        : (o = h[15])
      let I = o
      return (
        h[16] !== P || h[17] !== g || h[18] !== I
          ? ((i = () => {
              C.current || (P && I("check"), g())
            }),
            (h[16] = P),
            (h[17] = g),
            (h[18] = I),
            (h[19] = i))
          : (i = h[19]),
        h[20] !== P || h[21] !== I
          ? ((r = () => I(P ? "check" : "remove")), (h[20] = P), (h[21] = I), (h[22] = r))
          : (r = h[22]),
        h[23] !== A || h[24] !== P || h[25] !== p || h[26] !== i || h[27] !== r
          ? ((c = (0, a.jsx)($, { school: p, pending: A, unconfirmed: P, onClose: i, onConfirm: r })),
            (h[23] = A),
            (h[24] = P),
            (h[25] = p),
            (h[26] = i),
            (h[27] = r),
            (h[28] = c))
          : (c = h[28]),
        c
      )
    }
    function $(e) {
      let t,
        l,
        o,
        i,
        r,
        s,
        d,
        c,
        h,
        p,
        f,
        g,
        m,
        y,
        b = (0, n.c)(38),
        { school: C, pending: j, unconfirmed: w, onClose: A, onConfirm: k } = e
      ;(b[0] !== C.id || b[1] !== w
        ? ((t = {
            onCloseAutoFocus: (e) => {
              e.preventDefault()
              let t = document.getElementById(`college-school-actions-${C.id}`)
              !w && t instanceof HTMLButtonElement && !t.disabled
                ? t.focus()
                : document.getElementById(`college-school-panel-${C.id}`)?.focus()
            },
          }),
          (b[0] = C.id),
          (b[1] = w),
          (b[2] = t))
        : (t = b[2]),
        b[3] !== A || b[4] !== j
          ? ((l = (e) => {
              e || j || A()
            }),
            (b[3] = A),
            (b[4] = j),
            (b[5] = l))
          : (l = b[5]),
        b[6] !== k || b[7] !== j
          ? ((o = (e) => {
              ;(e.preventDefault(), j || k())
            }),
            (b[6] = k),
            (b[7] = j),
            (b[8] = o))
          : (o = b[8]),
        b[9] !== C.name
          ? ((i = (0, a.jsx)(T.OO, {
              children: (0, a.jsx)(T.c7, {
                title: (0, a.jsx)(v.L3, {
                  className: "select-none",
                  children: (0, a.jsx)(u.A, {
                    id: "collegePlan.school.removal.title",
                    defaultMessage: "Remove {school} from your College Plan?",
                    values: { school: C.name },
                  }),
                }),
              }),
            })),
            (b[9] = C.name),
            (b[10] = i))
          : (i = b[10]),
        b[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(v.rr, {
              className: "select-none",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.removal.description.tasksAndDeadlines",
                defaultMessage: "This will also remove tasks and deadlines for this school from your plan.",
              }),
            })),
            (b[11] = r))
          : (r = b[11]),
        b[12] !== w
          ? ((s =
              w &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-danger",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.removal.unconfirmed",
                  defaultMessage:
                    "The removal couldn\u2019t be confirmed. Check the saved school before trying to remove it again.",
                }),
              })),
            (b[12] = w),
            (b[13] = s))
          : (s = b[13]),
        b[14] !== s ? ((d = (0, a.jsxs)(T.OO, { children: [r, s] })), (b[14] = s), (b[15] = d)) : (d = b[15]),
        b[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(u.A, { id: "collegePlan.school.removal.cancel", defaultMessage: "Cancel" })), (b[16] = c))
          : (c = b[16]),
        b[17] !== A || b[18] !== j
          ? ((h = (0, a.jsx)(x.$, {
              type: "button",
              color: "outlineGhost",
              size: "formAction",
              radius: "full",
              disabled: j,
              onClick: A,
              children: c,
            })),
            (b[17] = A),
            (b[18] = j),
            (b[19] = h))
          : (h = b[19]))
      let _ = w ? "primary" : "dangerSolid"
      return (
        b[20] !== w
          ? ((p = w
              ? (0, a.jsx)(u.A, { id: "collegePlan.school.removal.check", defaultMessage: "Check again" })
              : (0, a.jsx)(u.A, { id: "collegePlan.school.removal.confirm", defaultMessage: "Remove school" })),
            (b[20] = w),
            (b[21] = p))
          : (p = b[21]),
        b[22] !== j || b[23] !== _ || b[24] !== p
          ? ((f = (0, a.jsx)(x.$, {
              type: "submit",
              color: _,
              size: "formAction",
              radius: "full",
              loading: j,
              disabled: j,
              children: p,
            })),
            (b[22] = j),
            (b[23] = _),
            (b[24] = p),
            (b[25] = f))
          : (f = b[25]),
        b[26] !== f || b[27] !== h
          ? ((g = (0, a.jsx)(T.OO, { children: (0, a.jsxs)(T.Es, { children: [h, f] }) })),
            (b[26] = f),
            (b[27] = h),
            (b[28] = g))
          : (g = b[28]),
        b[29] !== g || b[30] !== o || b[31] !== i || b[32] !== d
          ? ((m = (0, a.jsxs)(T.R4, { as: "form", size: "viewport", onSubmit: o, children: [i, d, g] })),
            (b[29] = g),
            (b[30] = o),
            (b[31] = i),
            (b[32] = d),
            (b[33] = m))
          : (m = b[33]),
        b[34] !== t || b[35] !== m || b[36] !== l
          ? ((y = (0, a.jsx)(v.lG, {
              open: !0,
              size: "compact",
              showDialogClose: !1,
              contentProps: t,
              onOpenChange: l,
              children: m,
            })),
            (b[34] = t),
            (b[35] = m),
            (b[36] = l),
            (b[37] = y))
          : (y = b[37]),
        y
      )
    }
    function B(e) {
      let t,
        l,
        o,
        i,
        r = (0, n.c)(13),
        { school: s } = e,
        { overview: d, admit_rate: c, estimated_annual_cost: p } = s
      return null == d && null == c && null == p
        ? null
        : (r[0] !== s.name
            ? ((t = (0, a.jsx)("h3", {
                className: "text-lg font-medium break-words",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.about",
                  defaultMessage: "About {school}",
                  values: { school: s.name },
                }),
              })),
              (r[0] = s.name),
              (r[1] = t))
            : (t = r[1]),
          r[2] !== d || r[3] !== s.favicon_origin
            ? ((l =
                null != d &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-base leading-normal break-words whitespace-pre-wrap text-default",
                      children: d.text,
                    }),
                    (0, a.jsx)(M.Z, { citations: d.citations, faviconOrigin: s.favicon_origin }),
                  ],
                })),
              (r[2] = d),
              (r[3] = s.favicon_origin),
              (r[4] = l))
            : (l = r[4]),
          r[5] !== c || r[6] !== p || r[7] !== s.favicon_origin
            ? ((o =
                (null != c || null != p) &&
                (0, a.jsxs)("dl", {
                  className:
                    "grid grid-cols-1 gap-4 divide-y divide-border-subtle py-2 @xs:grid-cols-2 @xs:gap-6 @xs:divide-x @xs:divide-y-0",
                  children: [
                    null != c &&
                      (0, a.jsx)(H, {
                        fact: c,
                        faviconOrigin: s.favicon_origin,
                        label: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.admissionRate.label",
                          defaultMessage: "Admission rate",
                        }),
                        value: (0, a.jsx)(h.Gr, {
                          value: c.percentage / 100,
                          style: "percent",
                          maximumSignificantDigits: 15,
                        }),
                      }),
                    null != p &&
                      (0, a.jsx)(H, {
                        fact: p,
                        faviconOrigin: s.favicon_origin,
                        label: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.annualCost.label",
                          defaultMessage: "Estimated annual cost",
                        }),
                        value: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.annualCost.value",
                          defaultMessage: "{amount}/yr",
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
              (r[5] = c),
              (r[6] = p),
              (r[7] = s.favicon_origin),
              (r[8] = o))
            : (o = r[8]),
          r[9] !== t || r[10] !== l || r[11] !== o
            ? ((i = (0, a.jsxs)("section", {
                className: "@container flex flex-col gap-4 border-t border-subtle pt-5",
                children: [t, l, o],
              })),
              (r[9] = t),
              (r[10] = l),
              (r[11] = o),
              (r[12] = i))
            : (i = r[12]),
          i)
    }
    function H(e) {
      let t,
        l,
        o,
        i,
        r,
        s,
        d = (0, n.c)(17),
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
          ? ((o = (0, a.jsx)("dd", {
              className: "text-sm break-words whitespace-pre-wrap text-secondary",
              children: c.text,
            })),
            (d[4] = c.text),
            (d[5] = o))
          : (o = d[5]),
        d[6] !== c.reporting_period
          ? ((i =
              null != c.reporting_period &&
              (0, a.jsx)("dd", { className: "text-sm break-words text-secondary", children: c.reporting_period })),
            (d[6] = c.reporting_period),
            (d[7] = i))
          : (i = d[7]),
        d[8] !== c.citations || d[9] !== u
          ? ((r = (0, a.jsx)("dd", { children: (0, a.jsx)(M.Z, { citations: c.citations, faviconOrigin: u }) })),
            (d[8] = c.citations),
            (d[9] = u),
            (d[10] = r))
          : (r = d[10]),
        d[11] !== t || d[12] !== l || d[13] !== o || d[14] !== i || d[15] !== r
          ? ((s = (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2 not-first:pt-4 @xs:not-first:ps-6 @xs:not-first:pt-0",
              children: [t, l, o, i, r],
            })),
            (d[11] = t),
            (d[12] = l),
            (d[13] = o),
            (d[14] = i),
            (d[15] = r),
            (d[16] = s))
          : (s = d[16]),
        s
      )
    }
    var q = l("Z41o"),
      U = l("pXr8")
    function R(e) {
      let t,
        l,
        o,
        i,
        r,
        c,
        u,
        h = (0, n.c)(38),
        { schoolId: p, onClose: g, onRemoved: x } = e,
        y = (0, s.Ul)(f.chatGptAuthenticatedAccountId$),
        v = (0, s.Ul)(f.chatGptAuthenticatedUserId$),
        b = (0, s.Ul)(m.pH).data?.plan_id
      h[0] !== y || h[1] !== b || h[2] !== p || h[3] !== v
        ? ((t = { accountId: y, userId: v, planId: b, schoolId: p }),
          (h[0] = y),
          (h[1] = b),
          (h[2] = p),
          (h[3] = v),
          (h[4] = t))
        : (t = h[4])
      let { isPending: C, isError: j, mutate: w, variables: A } = (0, s._U)(N.ur, t),
        k = !j && !(C && "check" === A)
      h[5] !== k ? ((l = { enabled: k }), (h[5] = k), (h[6] = l)) : (l = h[6])
      let {
          data: M,
          dataUpdatedAt: P,
          isPending: I,
          isFetching: S,
          isError: F,
          error: T,
          refetch: G,
        } = (0, s._U)(N.c, p, l),
        { mutateAsync: E, isPending: $, isError: B } = (0, s._U)(N.dF, p),
        H = (0, d.useRef)(!1),
        [U, R] = (0, d.useState)(null)
      h[7] !== w || h[8] !== G || h[9] !== j
        ? ((o = () => {
            j ? w("check") : G()
          }),
          (h[7] = w),
          (h[8] = G),
          (h[9] = j),
          (h[10] = o))
        : (o = h[10])
      let Z = o,
        z = F ? void 0 : M?.items,
        L = F || j ? Z : void 0,
        W = S || C,
        X = I || F || S || $ || C || j
      return (
        h[11] !== M ||
        h[12] !== T ||
        h[13] !== F ||
        h[14] !== S ||
        h[15] !== I ||
        h[16] !== C ||
        h[17] !== $ ||
        h[18] !== E ||
        h[19] !== g ||
        h[20] !== Z ||
        h[21] !== j ||
        h[22] !== B
          ? ((i = (e) =>
              (0, a.jsx)(V, {
                ...e,
                school: M,
                loading: I,
                failed: F || j,
                missing: T instanceof _.fk && 404 === T.status,
                saving: $ || C,
                saveFailed: B,
                refreshing: S || C,
                onRetry: Z,
                onClose: g,
                onRemove: () => {
                  null == M || F || S || $ || C || j || R(M)
                },
                onToggle: (e, t) => {
                  H.current ||
                    C ||
                    j ||
                    ((H.current = !0),
                    E({ item: e, completed: t })
                      .catch(D)
                      .finally(() => {
                        H.current = !1
                      }))
                },
              })),
            (h[11] = M),
            (h[12] = T),
            (h[13] = F),
            (h[14] = S),
            (h[15] = I),
            (h[16] = C),
            (h[17] = $),
            (h[18] = E),
            (h[19] = g),
            (h[20] = Z),
            (h[21] = j),
            (h[22] = B),
            (h[23] = i))
          : (i = h[23]),
        h[24] !== P || h[25] !== p || h[26] !== z || h[27] !== L || h[28] !== W || h[29] !== X || h[30] !== i
          ? ((r = (0, a.jsx)(q.u, {
              source: p,
              items: z,
              dataUpdatedAt: P,
              onRefresh: L,
              refreshing: W,
              disabled: X,
              children: i,
            })),
            (h[24] = P),
            (h[25] = p),
            (h[26] = z),
            (h[27] = L),
            (h[28] = W),
            (h[29] = X),
            (h[30] = i),
            (h[31] = r))
          : (r = h[31]),
        h[32] !== x || h[33] !== U
          ? ((c = null != U && (0, a.jsx)(O, { school: U, onClose: () => R(null), onRemoved: x })),
            (h[32] = x),
            (h[33] = U),
            (h[34] = c))
          : (c = h[34]),
        h[35] !== r || h[36] !== c
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [r, c] })), (h[35] = r), (h[36] = c), (h[37] = u))
          : (u = h[37]),
        u
      )
    }
    function D() {}
    function V(e) {
      let t,
        l,
        o,
        i,
        r,
        s,
        h,
        f,
        g,
        m,
        y,
        C = (0, n.c)(44),
        {
          school: w,
          loading: k,
          failed: _,
          missing: M,
          saving: P,
          saveFailed: I,
          refreshing: S,
          onRetry: N,
          onClose: F,
          onRemove: T,
          onToggle: G,
          addTask: E,
          onCreateTask: O,
          onOpenTask: $,
          actionsOpen: B,
        } = e,
        H = (0, c.A)(),
        q = (0, d.useRef)(null),
        U = (0, d.useRef)(!1)
      ;(C[0] !== F
        ? ((t = (e) => {
            e || F()
          }),
          (C[0] = F),
          (C[1] = t))
        : (t = C[1]),
        C[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { asChild: !0, "aria-describedby": void 0, onInteractOutside: Z }), (C[2] = l))
          : (l = C[2]))
      let R = null == w ? void 0 : `college-school-panel-${w.id}`
      return (
        C[3] !== B ||
        C[4] !== _ ||
        C[5] !== H ||
        C[6] !== k ||
        C[7] !== M ||
        C[8] !== O ||
        C[9] !== T ||
        C[10] !== S ||
        C[11] !== P ||
        C[12] !== w
          ? ((o =
              null == w || M
                ? void 0
                : (0, a.jsxs)(b.Ab, {
                    align: "end",
                    open: B,
                    onCloseAutoFocus: (e) => {
                      U.current && (e.preventDefault(), (U.current = !1), O?.(q.current))
                    },
                    triggerButton: (0, a.jsx)(x.$, {
                      id: `college-school-actions-${w.id}`,
                      ref: q,
                      type: "button",
                      color: "ghost",
                      size: "icon",
                      disabled: k || _ || S || P,
                      "aria-label": H.formatMessage({
                        id: "collegePlan.school.actions",
                        defaultMessage: "School actions",
                      }),
                      children: (0, a.jsx)(j.e4G, {}),
                    }),
                    children: [
                      (0, a.jsx)(b.ms.Item, {
                        leftIcon: (0, a.jsx)(j.aRI, {}),
                        disabled: null == O || k || _ || S || P,
                        onSelect: () => {
                          U.current = !0
                        },
                        children: (0, a.jsx)(u.A, { id: "collegePlan.school.addTask", defaultMessage: "Add new task" }),
                      }),
                      (0, a.jsx)(b.ms.Item, {
                        leftIcon: (0, a.jsx)(j.zwW, {}),
                        tone: "destructive",
                        onSelect: T,
                        children: (0, a.jsx)(u.A, { id: "collegePlan.school.remove", defaultMessage: "Remove school" }),
                      }),
                    ],
                  })),
            (C[3] = B),
            (C[4] = _),
            (C[5] = H),
            (C[6] = k),
            (C[7] = M),
            (C[8] = O),
            (C[9] = T),
            (C[10] = S),
            (C[11] = P),
            (C[12] = w),
            (C[13] = o))
          : (o = C[13]),
        C[14] !== H
          ? ((i = H.formatMessage({ id: "collegePlan.school.close", defaultMessage: "Close school" })),
            (C[14] = H),
            (C[15] = i))
          : (i = C[15]),
        C[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(v.L3, {
              className: "sr-only",
              children: (0, a.jsx)(u.A, { id: "collegePlan.school.details", defaultMessage: "School details" }),
            })),
            (C[16] = r))
          : (r = C[16]),
        C[17] !== k ? ((s = k && (0, a.jsx)(A.y, {})), (C[17] = k), (C[18] = s)) : (s = C[18]),
        C[19] !== E ||
        C[20] !== _ ||
        C[21] !== M ||
        C[22] !== $ ||
        C[23] !== N ||
        C[24] !== G ||
        C[25] !== S ||
        C[26] !== I ||
        C[27] !== P ||
        C[28] !== w
          ? ((h = M
              ? (0, a.jsx)("p", {
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "collegePlan.school.missing",
                    defaultMessage: "This school is no longer in your College Plan",
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
                              defaultMessage: "This school couldn\u2019t be refreshed. Refresh before changing tasks.",
                            }),
                          }),
                          (0, a.jsx)(x.$, {
                            color: "secondary",
                            disabled: S,
                            onClick: N,
                            children: (0, a.jsx)(u.A, {
                              id: "collegePlan.school.retry",
                              defaultMessage: "Refresh school",
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
                            "The task update couldn\u2019t be confirmed. Review the refreshed task state before trying again.",
                        }),
                      }),
                    null != w &&
                      (0, a.jsx)(z, { school: w, disabled: _ || S || P, onToggle: G, addTask: E, onOpenTask: $ }, w.id),
                  ],
                })),
            (C[19] = E),
            (C[20] = _),
            (C[21] = M),
            (C[22] = $),
            (C[23] = N),
            (C[24] = G),
            (C[25] = S),
            (C[26] = I),
            (C[27] = P),
            (C[28] = w),
            (C[29] = h))
          : (h = C[29]),
        C[30] !== s || C[31] !== h
          ? ((f = (0, a.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-panel",
              children: [r, s, h],
            })),
            (C[30] = s),
            (C[31] = h),
            (C[32] = f))
          : (f = C[32]),
        C[33] !== F || C[34] !== o || C[35] !== i || C[36] !== f
          ? ((g = (0, a.jsx)(p.JR, { actions: o, closeLabel: i, onClose: F, children: f })),
            (C[33] = F),
            (C[34] = o),
            (C[35] = i),
            (C[36] = f),
            (C[37] = g))
          : (g = C[37]),
        C[38] !== g || C[39] !== R
          ? ((m = (0, a.jsx)("div", { id: R, className: "h-full", tabIndex: -1, children: g })),
            (C[38] = g),
            (C[39] = R),
            (C[40] = m))
          : (m = C[40]),
        C[41] !== t || C[42] !== m
          ? ((y = (0, a.jsx)(v.lG, {
              open: !0,
              modal: !1,
              contentPosition: "inline",
              showDialogClose: !1,
              unstyledContent: !0,
              onOpenChange: t,
              contentProps: l,
              children: m,
            })),
            (C[41] = t),
            (C[42] = m),
            (C[43] = y))
          : (y = C[43]),
        y
      )
    }
    function Z(e) {
      return e.preventDefault()
    }
    function z(e) {
      let t,
        l,
        o,
        i,
        r,
        h,
        p,
        f,
        m,
        y,
        v,
        C,
        w,
        A,
        _ = (0, n.c)(81),
        { school: N, disabled: F, onToggle: T, addTask: G, onOpenTask: E } = e,
        O = (0, s.gh)(k.u),
        $ = (0, c.A)(),
        [H, q] = (0, d.useState)("all")
      if (
        _[0] !== F ||
        _[1] !== H ||
        _[2] !== $ ||
        _[3] !== E ||
        _[4] !== T ||
        _[5] !== N.application_deadline ||
        _[6] !== N.completed_tasks ||
        _[7] !== N.favicon_origin ||
        _[8] !== N.id ||
        _[9] !== N.items ||
        _[10] !== N.name ||
        _[11] !== N.total_tasks ||
        _[12] !== O
      ) {
        let e,
          n,
          s,
          d,
          c,
          y,
          v,
          C,
          w,
          A,
          k,
          G,
          B = N.items?.filter((e) => "all" === H || e.completed === ("completed" === H)).sort(L)
        ;(_[22] !== N.id || _[23] !== O
          ? ((e = (e) => (0, g.zk)(O, e, { id: N.id, kind: "school", surface: "school_detail" })),
            (_[22] = N.id),
            (_[23] = O),
            (_[24] = e))
          : (e = _[24]),
          _[25] !== N.name
            ? ((n = (0, a.jsx)("h2", { className: "text-xl font-semibold break-words", children: N.name })),
              (_[25] = N.name),
              (_[26] = n))
            : (n = _[26]),
          _[27] !== N.application_deadline || _[28] !== N.favicon_origin || _[29] !== N.id || _[30] !== O
            ? ((s =
                null != N.application_deadline &&
                (0, a.jsxs)("details", {
                  className: "text-sm text-secondary",
                  children: [
                    (0, a.jsx)("summary", {
                      className: "focus-visible:outline-auto cursor-interaction rounded-sm",
                      onClick: (e) => {
                        e.currentTarget.parentElement?.hasAttribute("open") ||
                          (0, g.j2)(O, { id: N.id, kind: "school", surface: "application_deadline" })
                      },
                      children: (0, a.jsx)(P.a, { fact: N.application_deadline, showYear: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2 pt-2",
                      children: [
                        (0, a.jsx)(P.$, { fact: N.application_deadline, schoolId: N.id }),
                        (0, a.jsx)(M.Z, {
                          citations: N.application_deadline.citations,
                          faviconOrigin: N.favicon_origin,
                        }),
                      ],
                    }),
                  ],
                })),
              (_[27] = N.application_deadline),
              (_[28] = N.favicon_origin),
              (_[29] = N.id),
              (_[30] = O),
              (_[31] = s))
            : (s = _[31]),
          _[32] !== n || _[33] !== s
            ? ((d = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [n, s] })),
              (_[32] = n),
              (_[33] = s),
              (_[34] = d))
            : (d = _[34]),
          _[35] !== N.favicon_origin
            ? ((c = (0, a.jsx)(I.h, { faviconOrigin: N.favicon_origin })), (_[35] = N.favicon_origin), (_[36] = c))
            : (c = _[36]),
          _[37] !== e || _[38] !== d || _[39] !== c
            ? ((m = (0, a.jsxs)("header", {
                ref: e,
                className: "flex items-start justify-between gap-4",
                children: [d, c],
              })),
              (_[37] = e),
              (_[38] = d),
              (_[39] = c),
              (_[40] = m))
            : (m = _[40]),
          (o = "flex flex-col gap-4"),
          _[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)("h3", {
                className: "text-lg font-semibold",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.progressTitle",
                  defaultMessage: "Application progress",
                }),
              })),
              (_[41] = i))
            : (i = _[41]),
          _[42] !== N.completed_tasks || _[43] !== N.total_tasks
            ? ((r = (0, a.jsx)(S.Ch, { completed: N.completed_tasks, total: N.total_tasks, prominent: !0 })),
              (_[42] = N.completed_tasks),
              (_[43] = N.total_tasks),
              (_[44] = r))
            : (r = _[44]),
          _[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.suggestedTasks",
                  defaultMessage: "Suggested starting tasks. Review, edit, or add tasks for your program.",
                }),
              })),
              (_[45] = h))
            : (h = _[45]),
          _[46] !== $
            ? ((y = $.formatMessage({ id: "collegePlan.school.taskFilter", defaultMessage: "Filter tasks" })),
              (_[46] = $),
              (_[47] = y))
            : (y = _[47]))
        let U = X[H]
        ;(_[48] !== U ? ((v = (0, a.jsx)(u.A, { ...U })), (_[48] = U), (_[49] = v)) : (v = _[49]),
          _[50] === Symbol.for("react.memo_cache_sentinel") ? ((C = (0, a.jsx)(j.HIf, {})), (_[50] = C)) : (C = _[50]),
          _[51] !== y || _[52] !== v
            ? ((w = (0, a.jsxs)(x.$, {
                color: "secondary",
                size: "detailAction",
                radius: "full",
                "aria-label": y,
                children: [v, C],
              })),
              (_[51] = y),
              (_[52] = v),
              (_[53] = w))
            : (w = _[53]),
          _[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = ["all", "in-progress", "completed"]), (_[54] = A))
            : (A = _[54]),
          _[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = A.map((e) =>
                (0, a.jsx)(
                  b.ms.RadioItem,
                  { value: e, onSelect: () => q(e), children: (0, a.jsx)(u.A, { ...X[e] }) },
                  e,
                ),
              )),
              (_[55] = k))
            : (k = _[55]),
          _[56] !== H
            ? ((G = (0, a.jsx)(b.ms.RadioGroup, { value: H, children: k })), (_[56] = H), (_[57] = G))
            : (G = _[57]),
          _[58] !== w || _[59] !== G
            ? ((p = (0, a.jsx)("div", {
                className: "self-start",
                children: (0, a.jsx)(b.Ab, { triggerButton: w, children: G }),
              })),
              (_[58] = w),
              (_[59] = G),
              (_[60] = p))
            : (p = _[60]),
          (f =
            B?.length === 0 &&
            (N.items?.length ?? 0) > 0 &&
            (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.filter.empty",
                defaultMessage: "No tasks match this filter",
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
                  disabled: F,
                  onToggle: (t) => T(e, t),
                }),
              },
              e.id,
            ),
          )),
          (_[0] = F),
          (_[1] = H),
          (_[2] = $),
          (_[3] = E),
          (_[4] = T),
          (_[5] = N.application_deadline),
          (_[6] = N.completed_tasks),
          (_[7] = N.favicon_origin),
          (_[8] = N.id),
          (_[9] = N.items),
          (_[10] = N.name),
          (_[11] = N.total_tasks),
          (_[12] = O),
          (_[13] = t),
          (_[14] = l),
          (_[15] = o),
          (_[16] = i),
          (_[17] = r),
          (_[18] = h),
          (_[19] = p),
          (_[20] = f),
          (_[21] = m))
      } else
        ((t = _[13]),
          (l = _[14]),
          (o = _[15]),
          (i = _[16]),
          (r = _[17]),
          (h = _[18]),
          (p = _[19]),
          (f = _[20]),
          (m = _[21]))
      return (
        _[61] !== t || _[62] !== l
          ? ((y = (0, a.jsx)("ul", { className: t, children: l })), (_[61] = t), (_[62] = l), (_[63] = y))
          : (y = _[63]),
        _[64] !== G
          ? ((v = (0, a.jsx)("div", { className: "self-start", children: G })), (_[64] = G), (_[65] = v))
          : (v = _[65]),
        _[66] !== y ||
        _[67] !== v ||
        _[68] !== o ||
        _[69] !== i ||
        _[70] !== r ||
        _[71] !== h ||
        _[72] !== p ||
        _[73] !== f
          ? ((C = (0, a.jsxs)("section", { className: o, children: [i, r, h, p, f, y, v] })),
            (_[66] = y),
            (_[67] = v),
            (_[68] = o),
            (_[69] = i),
            (_[70] = r),
            (_[71] = h),
            (_[72] = p),
            (_[73] = f),
            (_[74] = C))
          : (C = _[74]),
        _[75] !== N ? ((w = (0, a.jsx)(B, { school: N })), (_[75] = N), (_[76] = w)) : (w = _[76]),
        _[77] !== C || _[78] !== w || _[79] !== m
          ? ((A = (0, a.jsxs)(a.Fragment, { children: [m, C, w] })), (_[77] = C), (_[78] = w), (_[79] = m), (_[80] = A))
          : (A = _[80]),
        A
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
        f,
        m,
        x,
        v,
        b,
        A = (0, n.c)(39),
        { item: _, disabled: M, onToggle: P, onOpen: I, onAction: S, compact: N, analyticsSurface: F } = e,
        T = void 0 !== N && N,
        G = void 0 === F ? "school_tasks" : F,
        E = (0, s.gh)(k.u),
        O = (0, d.useId)(),
        $ = (0, c.A)()
      ;(A[0] !== G || A[1] !== _.id || A[2] !== _.target_date || A[3] !== E
        ? ((t = (e) => (null == _.target_date ? void 0 : (0, g.zk)(E, e, { id: _.id, kind: "task", surface: G }))),
          (A[0] = G),
          (A[1] = _.id),
          (A[2] = _.target_date),
          (A[3] = E),
          (A[4] = t))
        : (t = A[4]),
        A[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(C.I, { asset: i, className: "shrink-0 text-tertiary" })), (A[5] = l))
          : (l = A[5]),
        A[6] !== G ||
        A[7] !== O ||
        A[8] !== _.completed ||
        A[9] !== _.id ||
        A[10] !== _.target_date ||
        A[11] !== _.title ||
        A[12] !== I ||
        A[13] !== E
          ? ((u =
              null == I
                ? (0, a.jsx)("span", {
                    id: O,
                    className: (0, r.A)("text-base break-words", _.completed && "text-tertiary line-through"),
                    children: _.title,
                  })
                : (0, a.jsx)("button", {
                    id: O,
                    type: "button",
                    onClick: (e) => {
                      ;(null != _.target_date && (0, g.j2)(E, { id: _.id, kind: "task", surface: G }),
                        I(e.currentTarget))
                    },
                    className: (0, r.A)(
                      "cursor-interaction text-start text-base break-words select-none focus-visible:outline-auto",
                      _.completed && "text-tertiary line-through",
                    ),
                    children: _.title,
                  })),
            (A[6] = G),
            (A[7] = O),
            (A[8] = _.completed),
            (A[9] = _.id),
            (A[10] = _.target_date),
            (A[11] = _.title),
            (A[12] = I),
            (A[13] = E),
            (A[14] = u))
          : (u = A[14]),
        A[15] !== _.target_date
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
            (A[15] = _.target_date),
            (A[16] = p))
          : (p = A[16]),
        A[17] !== u || A[18] !== p
          ? ((f = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [u, p] })),
            (A[17] = u),
            (A[18] = p),
            (A[19] = f))
          : (f = A[19]),
        A[20] !== M || A[21] !== _ || A[22] !== S || A[23] !== P
          ? ((m = null != S && null != P && (0, a.jsx)(U.a, { item: _, disabled: M, onAction: S, onToggle: P })),
            (A[20] = M),
            (A[21] = _),
            (A[22] = S),
            (A[23] = P),
            (A[24] = m))
          : (m = A[24]),
        A[25] !== M || A[26] !== O || A[27] !== $ || A[28] !== _.completed || A[29] !== P
          ? ((x =
              null == P
                ? (0, a.jsx)("span", {
                    role: "img",
                    "aria-label": _.completed
                      ? $.formatMessage({
                          id: "chatgpt.college_plan.sharing.task.status.complete",
                          defaultMessage: "Completed",
                        })
                      : $.formatMessage({
                          id: "chatgpt.college_plan.sharing.task.status.incomplete",
                          defaultMessage: "Not completed",
                        }),
                    children: _.completed
                      ? (0, a.jsx)(j.jFD, {})
                      : (0, a.jsx)(C.I, { asset: o.n, className: "text-tertiary" }),
                  })
                : (0, a.jsx)(y.S, {
                    "aria-labelledby": O,
                    variant: "task",
                    checked: _.completed,
                    disabled: M,
                    onCheckedChange: P,
                  })),
            (A[25] = M),
            (A[26] = O),
            (A[27] = $),
            (A[28] = _.completed),
            (A[29] = P),
            (A[30] = x))
          : (x = A[30]),
        A[31] !== t || A[32] !== f || A[33] !== m || A[34] !== x
          ? ((v = (0, a.jsxs)("div", {
              ref: t,
              className: "group relative flex items-center gap-4 p-4",
              children: [l, f, m, x],
            })),
            (A[31] = t),
            (A[32] = f),
            (A[33] = m),
            (A[34] = x),
            (A[35] = v))
          : (v = A[35]))
      let B = v
      return (
        A[36] !== T || A[37] !== B
          ? ((b = T ? B : (0, a.jsx)(w.zU, { variant: "artifact-list", children: B })),
            (A[36] = T),
            (A[37] = B),
            (A[38] = b))
          : (b = A[38]),
        b
      )
    }
    let X = (0, h.YK)({
      all: { id: "collegePlan.school.filter.all", defaultMessage: "All" },
      "in-progress": { id: "collegePlan.school.filter.inProgress", defaultMessage: "In progress" },
      completed: { id: "collegePlan.school.filter.completed", defaultMessage: "Completed" },
    })
  },
  Z41o(e, t, l) {
    l.d(t, { u: () => F })
    var a = l("ABep"),
      n = l("QosV"),
      o = l("qmMi"),
      i = l("zd8w"),
      r = l("oyxz"),
      s = l("SPnB"),
      d = l("bxvp"),
      c = l("hsIu"),
      u = l("Sm6l"),
      h = l("bVeK"),
      p = l("OWtl"),
      f = l("eWPL"),
      g = l("ULZ9"),
      m = l("on57"),
      x = l("Wf1j"),
      y = l("Qgfj"),
      v = l("Niy1"),
      b = l("JNtf"),
      C = l("mUDD"),
      j = l("zLIa"),
      w = l("a6Zv"),
      A = l("WbSP")
    function k(e) {
      let t,
        l,
        s,
        d,
        c,
        k,
        _,
        M,
        P,
        I,
        S,
        N,
        F,
        T,
        G,
        E,
        O,
        $,
        B,
        H,
        q,
        U,
        R,
        D,
        V,
        Z,
        z,
        L,
        W,
        X,
        K = (0, n.c)(129),
        {
          intent: Q,
          schoolId: Y,
          disabled: J,
          pending: ee,
          unconfirmed: et,
          onRefresh: el,
          refreshing: ea,
          onClose: en,
          onReturnFocus: eo,
          onSubmit: ei,
        } = e,
        er = void 0 !== J && J,
        es = void 0 !== ea && ea,
        ed = (0, o.gh)(p.u),
        [ec] = (0, i.useState)(Q),
        [eu, eh] = (0, i.useState)("view" !== Q.type || er ? Q.type : "edit")
      "view" !== eu || er || eh("edit")
      let ep = "create" === ec.type ? null : ec.item,
        [ef, eg] = (0, i.useState)(ep?.title ?? ""),
        [em, ex] = (0, i.useState)(ep?.details ?? ""),
        [ey, ev] = (0, i.useState)(ep?.target_date ?? null),
        [eb, eC] = (0, i.useState)(null),
        ej = (0, w.Y)(),
        ew = (0, x.A)(),
        eA = (0, i.useId)(),
        ek = er || ee || et
      K[0] !== ef ? ((t = Array.from(ef.trim())), (K[0] = ef), (K[1] = t)) : (t = K[1])
      let e_ = t.length > 300
      K[2] !== em ? ((l = Array.from(em)), (K[2] = em), (K[3] = l)) : (l = K[3])
      let eM = l.length > 4e3
      K[4] !== eM || K[5] !== ef || K[6] !== e_
        ? ((s = !!ef.trim() && !e_ && !eM), (K[4] = eM), (K[5] = ef), (K[6] = e_), (K[7] = s))
        : (s = K[7])
      let eP = s
      K[8] !== em ? ((d = em.trim() ? em : null), (K[8] = em), (K[9] = d)) : (d = K[9])
      let eI = d
      K[10] !== ey || K[11] !== ep || K[12] !== eI || K[13] !== ef
        ? ((c = null == ep || ef.trim() !== ep.title || eI !== (ep.details ?? null) || ey !== (ep.target_date ?? null)),
          (K[10] = ey),
          (K[11] = ep),
          (K[12] = eI),
          (K[13] = ef),
          (K[14] = c))
        : (c = K[14])
      let eS = c,
        eN = "create" !== Q.type && !!Q.item.completed,
        eF = eb ?? void 0,
        eT = "create" === eu || "edit" === eu ? "xwide" : "medium",
        eG = !ee
      K[15] !== en || K[16] !== ee
        ? ((k = (e) => {
            e || ee || en()
          }),
          (K[15] = en),
          (K[16] = ee),
          (K[17] = k))
        : (k = K[17])
      let eE = "delete" === eu ? `${eA}-description` : void 0
      ;(K[18] !== eo
        ? ((_ = (e) => {
            eo && (e.preventDefault(), eo())
          }),
          (K[18] = eo),
          (K[19] = _))
        : (_ = K[19]),
        K[20] !== eE || K[21] !== _
          ? ((M = { "aria-describedby": eE, onCloseAutoFocus: _ }), (K[20] = eE), (K[21] = _), (K[22] = M))
          : (M = K[22]),
        K[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, m.A)("isolate", "body-mzA870")), (K[23] = P))
          : (P = K[23]))
      let eO = ej ? "dark" : "light"
      K[24] !== eS ||
      K[25] !== ey ||
      K[26] !== ep ||
      K[27] !== ek ||
      K[28] !== eu ||
      K[29] !== eI ||
      K[30] !== ei ||
      K[31] !== Y ||
      K[32] !== ef ||
      K[33] !== eP
        ? ((I = (e) => {
            if ((e.preventDefault(), ek || "view" === eu)) return
            if ("delete" === eu && null != ep) return void ei({ type: "delete", id: ep.id })
            if (!eP || !eS) return
            if ("create" === eu)
              return void ei({
                type: "create",
                body: { title: ef.trim(), details: eI, target_date: ey, school_ids: null == Y ? [] : [Y] },
              })
            if (null == ep) return
            let t = {}
            ;(ef.trim() !== ep.title && (t.title = ef.trim()),
              eI !== (ep.details ?? null) && (t.details = eI),
              ey !== (ep.target_date ?? null) && (t.target_date = ey),
              ei({ type: "edit", id: ep.id, body: t }))
          }),
          (K[24] = eS),
          (K[25] = ey),
          (K[26] = ep),
          (K[27] = ek),
          (K[28] = eu),
          (K[29] = eI),
          (K[30] = ei),
          (K[31] = Y),
          (K[32] = ef),
          (K[33] = eP),
          (K[34] = I))
        : (I = K[34])
      let e$ = "view" === eu && ep?.title
      ;(K[35] !== eu
        ? ((S = "create" === eu && (0, a.jsx)(r.A, { id: "collegePlan.task.add", defaultMessage: "Add task" })),
          (K[35] = eu),
          (K[36] = S))
        : (S = K[36]),
        K[37] !== eu
          ? ((N =
              "edit" === eu &&
              (0, a.jsx)(r.A, { id: "collegePlan.task.detailsTitle", defaultMessage: "Task details" })),
            (K[37] = eu),
            (K[38] = N))
          : (N = K[38]),
        K[39] !== eu
          ? ((F =
              "delete" === eu &&
              (0, a.jsx)(r.A, { id: "collegePlan.task.deleteTitle", defaultMessage: "Delete task?" })),
            (K[39] = eu),
            (K[40] = F))
          : (F = K[40]),
        K[41] !== e$ || K[42] !== S || K[43] !== N || K[44] !== F
          ? ((T = (0, a.jsx)(C.c7, {
              titleClassName: "heading-qB88tZ",
              title: (0, a.jsxs)(b.L3, { className: "select-none", children: [e$, S, N, F] }),
            })),
            (K[41] = e$),
            (K[42] = S),
            (K[43] = N),
            (K[44] = F),
            (K[45] = T))
          : (T = K[45]),
        K[46] !== ep || K[47] !== eu || K[48] !== ed
          ? ((G = (e) =>
              ep?.target_date == null || "delete" === eu
                ? void 0
                : (0, v.zk)(ed, e, { id: ep.id, kind: "task", surface: "task_detail" })),
            (K[46] = ep),
            (K[47] = eu),
            (K[48] = ed),
            (K[49] = G))
          : (G = K[49]),
        K[50] !== ep || K[51] !== eu
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
                        ? (0, a.jsx)(r.A, { id: "collegePlan.task.unknownDate", defaultMessage: "No date saved" })
                        : (0, a.jsx)(r.A, {
                            id: "collegePlan.task.targetDate",
                            defaultMessage: "Target date: {date}",
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
                  (0, a.jsx)(A.Z, { citations: ep.citations, schoolIds: ep.school_ids, modal: !0 }),
                ],
              })),
            (K[50] = ep),
            (K[51] = eu),
            (K[52] = E))
          : (E = K[52]),
        K[53] !== eA || K[54] !== ep?.title || K[55] !== eu
          ? ((O =
              "delete" === eu &&
              (0, a.jsx)(b.rr, {
                id: `${eA}-description`,
                children: (0, a.jsx)(r.A, {
                  id: "collegePlan.task.deleteDescription",
                  defaultMessage:
                    "Delete \u201C{title}\u201D from your plan and every school linked to it? This can\u2019t be undone.",
                  values: { title: ep?.title },
                }),
              })),
            (K[53] = eA),
            (K[54] = ep?.title),
            (K[55] = eu),
            (K[56] = O))
          : (O = K[56]),
        K[57] !== ey ||
        K[58] !== em ||
        K[59] !== eM ||
        K[60] !== eA ||
        K[61] !== ew ||
        K[62] !== ep ||
        K[63] !== ek ||
        K[64] !== eu ||
        K[65] !== ef ||
        K[66] !== e_
          ? (($ =
              ("create" === eu || "edit" === eu) &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3 rounded-2xl border border-default p-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, m.A)("flex flex-col gap-2", "title-fWCEVA"),
                        children: [
                          (0, a.jsx)("label", {
                            className: "select-none",
                            htmlFor: `${eA}-title`,
                            children: (0, a.jsx)(r.A, { id: "collegePlan.task.name", defaultMessage: "Title" }),
                          }),
                          (0, a.jsx)(j.pd, {
                            id: `${eA}-title`,
                            variant: "plain",
                            autoFocus: !0,
                            name: "title",
                            required: !0,
                            disabled: ek,
                            value: ef,
                            "aria-invalid": e_,
                            "aria-describedby": e_ ? `${eA}-title-error` : void 0,
                            onChange: (e) => eg(e.target.value),
                          }),
                          e_ &&
                            (0, a.jsx)("span", {
                              id: `${eA}-title-error`,
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, a.jsx)(r.A, {
                                id: "collegePlan.task.titleTooLong",
                                defaultMessage: "Use a title with {limit, number} characters or fewer",
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
                        className: (0, m.A)("flex flex-col gap-2", "description-Hx5_p6"),
                        children: [
                          (0, a.jsx)("label", {
                            className: "select-none",
                            htmlFor: `${eA}-details`,
                            children: (0, a.jsx)(r.A, {
                              id: "collegePlan.task.description",
                              defaultMessage: "Description",
                            }),
                          }),
                          (0, a.jsx)(j.TM, {
                            id: `${eA}-details`,
                            variant: "plain",
                            rows: 1,
                            name: "details",
                            disabled: ek,
                            value: em,
                            "aria-invalid": eM,
                            "aria-describedby": eM ? `${eA}-details-error` : void 0,
                            onChange: (e) => ex(e.target.value),
                          }),
                          eM &&
                            (0, a.jsx)("span", {
                              id: `${eA}-details-error`,
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, a.jsx)(r.A, {
                                id: "collegePlan.task.detailsTooLong",
                                defaultMessage: "Use a description with {limit, number} characters or fewer",
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
                            htmlFor: `${eA}-date`,
                            children: (0, a.jsx)(r.A, { id: "collegePlan.task.date", defaultMessage: "Due date" }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, a.jsx)(f.l, {
                                id: `${eA}-date`,
                                variant: "ghost",
                                size: "2xl",
                                dropdownIconType: "none",
                                triggerClassName: "date-PjJarq",
                                locale: ew.locale,
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
                                disabled: ek,
                                placeholder: ew.formatMessage({
                                  id: "collegePlan.task.selectDate",
                                  defaultMessage: "Select date",
                                }),
                                triggerDateFormat: "MMM d, yyyy",
                              }),
                              null != ey &&
                                (0, a.jsx)(u.$, {
                                  type: "button",
                                  size: "iconSm",
                                  color: "ghost",
                                  disabled: ek,
                                  onClick: () => ev(null),
                                  "aria-label": ew.formatMessage({
                                    id: "collegePlan.task.clearDate",
                                    defaultMessage: "Clear date",
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
                      className: (0, m.A)(
                        "flex flex-col gap-3 rounded-2xl border border-default p-4",
                        "sources-Irx4b2",
                      ),
                      "aria-labelledby": `${eA}-sources`,
                      children: [
                        (0, a.jsx)("h3", {
                          id: `${eA}-sources`,
                          className: "text-base leading-5.25 font-medium select-none",
                          children: (0, a.jsx)(r.A, { id: "collegePlan.task.sources", defaultMessage: "Sources" }),
                        }),
                        (0, a.jsx)(A.Z, {
                          citations: ep.citations,
                          schoolIds: ep.school_ids,
                          modal: !0,
                          variant: "list",
                        }),
                      ],
                    }),
                ],
              })),
            (K[57] = ey),
            (K[58] = em),
            (K[59] = eM),
            (K[60] = eA),
            (K[61] = ew),
            (K[62] = ep),
            (K[63] = ek),
            (K[64] = eu),
            (K[65] = ef),
            (K[66] = e_),
            (K[67] = $))
          : ($ = K[67]),
        K[68] !== et
          ? ((B =
              et &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, a.jsx)(r.A, {
                  id: "collegePlan.task.unconfirmed",
                  defaultMessage:
                    "This request may have been saved. Close and review your refreshed tasks before making another change.",
                }),
              })),
            (K[68] = et),
            (K[69] = B))
          : (B = K[69]),
        K[70] !== G || K[71] !== E || K[72] !== O || K[73] !== $ || K[74] !== B
          ? ((H = (0, a.jsxs)("div", { ref: G, className: "flex flex-col gap-4 py-4", children: [E, O, $, B] })),
            (K[70] = G),
            (K[71] = E),
            (K[72] = O),
            (K[73] = $),
            (K[74] = B),
            (K[75] = H))
          : (H = K[75]),
        K[76] !== el || K[77] !== ee || K[78] !== es
          ? ((q =
              null != el &&
              (0, a.jsx)(u.$, {
                type: "button",
                color: "secondary",
                loading: es,
                disabled: ee || es,
                onClick: el,
                children: (0, a.jsx)(r.A, { id: "collegePlan.task.refresh", defaultMessage: "Refresh tasks" }),
              })),
            (K[76] = el),
            (K[77] = ee),
            (K[78] = es),
            (K[79] = q))
          : (q = K[79]),
        K[80] !== ec.type || K[81] !== eu || K[82] !== en || K[83] !== ee || K[84] !== et
          ? ((U =
              ("view" === eu || "delete" === eu || et) &&
              (0, a.jsxs)(u.$, {
                radius: "full",
                type: "button",
                color: "secondary",
                disabled: ee,
                autoFocus: "delete" === eu,
                onClick: () => {
                  "delete" !== eu || "delete" === ec.type || et ? en() : eh("edit")
                },
                children: [
                  et && (0, a.jsx)(r.A, { id: "collegePlan.task.review", defaultMessage: "Close and review tasks" }),
                  !et &&
                    "view" === eu &&
                    (0, a.jsx)(r.A, { id: "collegePlan.task.closeDetails", defaultMessage: "Close" }),
                  !et &&
                    "delete" === eu &&
                    (0, a.jsx)(r.A, { id: "collegePlan.task.cancel", defaultMessage: "Cancel" }),
                ],
              })),
            (K[80] = ec.type),
            (K[81] = eu),
            (K[82] = en),
            (K[83] = ee),
            (K[84] = et),
            (K[85] = U))
          : (U = K[85]),
        K[86] !== ep || K[87] !== ek || K[88] !== eu || K[89] !== et
          ? ((R =
              "edit" === eu &&
              null != ep &&
              !et &&
              (0, a.jsx)(u.$, {
                className: "me-auto",
                radius: "full",
                type: "button",
                color: "dangerOutline",
                disabled: ek,
                onClick: () => eh("delete"),
                children: (0, a.jsx)(r.A, { id: "collegePlan.task.delete", defaultMessage: "Delete task" }),
              })),
            (K[86] = ep),
            (K[87] = ek),
            (K[88] = eu),
            (K[89] = et),
            (K[90] = R))
          : (R = K[90]),
        K[91] !== eN || K[92] !== ep || K[93] !== ek || K[94] !== eu || K[95] !== ei || K[96] !== et
          ? ((D =
              "edit" === eu &&
              null != ep &&
              !et &&
              (0, a.jsx)(u.$, {
                radius: "full",
                type: "button",
                color: "outlineGhost",
                disabled: ek,
                onClick: () => ei({ type: "edit", id: ep.id, body: { completed: !eN } }),
                children: eN
                  ? (0, a.jsx)(r.A, { id: "collegePlan.task.markIncomplete", defaultMessage: "Mark as incomplete" })
                  : (0, a.jsx)(r.A, { id: "collegePlan.task.markComplete", defaultMessage: "Mark as complete" }),
              })),
            (K[91] = eN),
            (K[92] = ep),
            (K[93] = ek),
            (K[94] = eu),
            (K[95] = ei),
            (K[96] = et),
            (K[97] = D))
          : (D = K[97]),
        K[98] !== eS || K[99] !== ek || K[100] !== eu || K[101] !== ee || K[102] !== et || K[103] !== eP
          ? ((V =
              !et &&
              "view" !== eu &&
              (0, a.jsx)(u.$, {
                radius: "full",
                type: "submit",
                color: "delete" === eu ? "danger" : "primary",
                loading: ee,
                disabled: ek || ("delete" !== eu && (!eP || !eS)),
                children:
                  "delete" === eu
                    ? (0, a.jsx)(r.A, { id: "collegePlan.task.delete", defaultMessage: "Delete task" })
                    : (0, a.jsx)(r.A, { id: "collegePlan.task.save", defaultMessage: "Save" }),
              })),
            (K[98] = eS),
            (K[99] = ek),
            (K[100] = eu),
            (K[101] = ee),
            (K[102] = et),
            (K[103] = eP),
            (K[104] = V))
          : (V = K[104]),
        K[105] !== U || K[106] !== R || K[107] !== D || K[108] !== V
          ? ((Z = (0, a.jsxs)(C.Es, { className: "footer-Fli1Fb", expandSingleButton: !1, children: [U, R, D, V] })),
            (K[105] = U),
            (K[106] = R),
            (K[107] = D),
            (K[108] = V),
            (K[109] = Z))
          : (Z = K[109]),
        K[110] !== eO || K[111] !== I || K[112] !== T || K[113] !== H || K[114] !== q || K[115] !== Z
          ? ((z = (0, a.jsxs)(C.R4, {
              as: "form",
              size: "viewport",
              className: P,
              "data-theme": eO,
              onSubmit: I,
              children: [T, H, q, Z],
            })),
            (K[110] = eO),
            (K[111] = I),
            (K[112] = T),
            (K[113] = H),
            (K[114] = q),
            (K[115] = Z),
            (K[116] = z))
          : (z = K[116]))
      let eB = ej ? "dark" : "light"
      return (
        K[117] !== eB
          ? ((L = (0, a.jsx)("div", { ref: eC, "data-theme": eB })), (K[117] = eB), (K[118] = L))
          : (L = K[118]),
        K[119] !== eG || K[120] !== k || K[121] !== M || K[122] !== z || K[123] !== L || K[124] !== eT
          ? ((W = (0, a.jsxs)(b.lG, {
              open: !0,
              variant: "opaque",
              size: eT,
              radius: "compact",
              dialogCloseClassName: "close-KpNty0",
              contentOverflow: "visible",
              showDialogClose: eG,
              onOpenChange: k,
              contentProps: M,
              children: [z, L],
            })),
            (K[119] = eG),
            (K[120] = k),
            (K[121] = M),
            (K[122] = z),
            (K[123] = L),
            (K[124] = eT),
            (K[125] = W))
          : (W = K[125]),
        K[126] !== W || K[127] !== eF
          ? ((X = (0, a.jsx)(g.z, { radixPortalContainer: eF, children: W })),
            (K[126] = W),
            (K[127] = eF),
            (K[128] = X))
          : (X = K[128]),
        X
      )
    }
    var _ = l("pXr8"),
      M = l("Kwur"),
      P = l("XZh4"),
      I = l("zeuB")
    let S = (0, o.c4)(p.u, ({ accountId: e, userId: t, planId: l, source: a }, { scope: n }) => {
      let o = () =>
        n.get(s.chatGptAuthenticatedAccountId$) === e &&
        n.get(s.chatGptAuthenticatedUserId$) === t &&
        n.query.getData(c.pH)?.plan_id === l &&
        n.get(d.E$)
      return {
        mutationKey: ["college-plan-task-edit", e, t, l, a],
        retry: !1,
        networkMode: "always",
        mutationFn: async (i) => {
          if (null == e || null == t || null == l || !o()) return "stale"
          let r = { additionalHeaders: { "ChatGPT-Account-ID": e }, expectedIdentity: { accountId: e, userId: t } }
          try {
            return (
              "create" === i.type
                ? await M.Request.safePost("/college-plan/items", { ...r, retry: !1, requestBody: i.body })
                : "edit" === i.type
                  ? await M.Request.safePatch("/college-plan/items/{item_id}", {
                      ...r,
                      retry: !1,
                      parameters: { path: { item_id: i.id } },
                      requestBody: i.body,
                    })
                  : await M.Request.safeDelete("/college-plan/items/{item_id}", {
                      ...r,
                      retry: !1,
                      parameters: { path: { item_id: i.id } },
                    }),
              "saved"
            )
          } catch {
            if (!o()) return "stale"
            if ("create" === i.type) return "unconfirmed"
            try {
              if ((await n.query.cancel(I.H, i.id, { exact: !0 }), !o())) return "stale"
              let e = await n.queryClient.fetchQuery({ ...n.query.getOptions(I.H, i.id), staleTime: 0 })
              if (!o()) return "stale"
              if (null != e)
                return "edit" === i.type &&
                  (void 0 === i.body.title || e.title === i.body.title) &&
                  (void 0 === i.body.details || (e.details ?? null) === i.body.details) &&
                  (void 0 === i.body.target_date || (e.target_date ?? null) === i.body.target_date) &&
                  (void 0 === i.body.completed || e.completed === i.body.completed)
                  ? "saved"
                  : "unconfirmed"
              return "delete" === i.type ? "saved" : "unconfirmed"
            } catch {
              return o() ? "unconfirmed" : "stale"
            }
          } finally {
            await (0, P.ls)(n, { accountId: e, userId: t, planId: l }, a).catch(() => {})
          }
        },
      }
    })
    var N = l("Wl5X")
    function F(e) {
      let t,
        l,
        i = (0, n.c)(17),
        { source: r, items: u, dataUpdatedAt: h, disabled: p, onRefresh: f, refreshing: g, children: m } = e,
        x = (0, o.Ul)(s.chatGptAuthenticatedAccountId$),
        y = (0, o.Ul)(s.chatGptAuthenticatedUserId$),
        { data: v } = (0, o.Ul)(c.pH),
        b = (0, o.Ul)(d.E$)
      i[0] !== x || i[1] !== b || i[2] !== v?.plan_id || i[3] !== y
        ? ((t = JSON.stringify([x, y, v?.plan_id, b])),
          (i[0] = x),
          (i[1] = b),
          (i[2] = v?.plan_id),
          (i[3] = y),
          (i[4] = t))
        : (t = i[4])
      let C = v?.plan_id,
        j = p || !b || null == x || null == y || null == v
      return (
        i[5] !== x ||
        i[6] !== m ||
        i[7] !== h ||
        i[8] !== u ||
        i[9] !== f ||
        i[10] !== g ||
        i[11] !== r ||
        i[12] !== t ||
        i[13] !== C ||
        i[14] !== j ||
        i[15] !== y
          ? ((l = (0, a.jsx)(
              T,
              {
                source: r,
                items: u,
                dataUpdatedAt: h,
                onRefresh: f,
                refreshing: g,
                accountId: x,
                userId: y,
                planId: C,
                disabled: j,
                children: m,
              },
              t,
            )),
            (i[5] = x),
            (i[6] = m),
            (i[7] = h),
            (i[8] = u),
            (i[9] = f),
            (i[10] = g),
            (i[11] = r),
            (i[12] = t),
            (i[13] = C),
            (i[14] = j),
            (i[15] = y),
            (i[16] = l))
          : (l = i[16]),
        l
      )
    }
    function T(e) {
      let t,
        l,
        s,
        d,
        c,
        f,
        g,
        m,
        x,
        y = (0, n.c)(48),
        {
          accountId: v,
          userId: b,
          planId: C,
          source: j,
          items: w,
          dataUpdatedAt: A,
          disabled: M,
          onRefresh: P,
          refreshing: F,
          children: T,
        } = e,
        E = (0, o.gh)(p.u),
        [O, $] = (0, i.useState)(null)
      y[0] !== v || y[1] !== C || y[2] !== j || y[3] !== b
        ? ((t = { accountId: v, userId: b, planId: C, source: j }),
          (y[0] = v),
          (y[1] = C),
          (y[2] = j),
          (y[3] = b),
          (y[4] = t))
        : (t = y[4])
      let { mutateAsync: B, isPending: H } = (0, o._U)(S, t),
        [q, U] = (0, i.useState)(!1),
        R = null != O && "create" !== O.type ? O.item.id : void 0
      y[5] !== R || y[6] !== w
        ? ((l = w?.find((e) => {
            let { id: t } = e
            return t === R
          })),
          (y[5] = R),
          (y[6] = w),
          (y[7] = l))
        : (l = y[7])
      let D = l,
        V = null != R && null != w && null == D,
        Z = V && !M && !H && !q
      y[8] !== Z ? ((s = { enabled: Z }), (y[8] = Z), (y[9] = s)) : (s = y[9])
      let { data: z, dataUpdatedAt: L, isPending: W, isFetching: X, isError: K, refetch: Q } = (0, o._U)(I.H, R, s),
        Y = V && (W || X || K || null == z),
        J = D ?? (V && !K ? z : void 0),
        ee = null != D ? A : L
      M ||
        Y ||
        H ||
        null == O ||
        "create" === O.type ||
        null == J ||
        ee === O.readAt ||
        $({ ...O, item: J, readAt: ee })
      let et = (0, i.useRef)(!1),
        [el, ea] = (0, i.useState)(null),
        en = (0, i.useRef)(null)
      y[10] !== M || y[11] !== H
        ? ((d = (e) => {
            M || H || (ea(e), U(!1), $({ type: "create" }))
          }),
          (y[10] = M),
          (y[11] = H),
          (y[12] = d))
        : (d = y[12])
      let eo = d
      return (
        y[13] !== M || y[14] !== H || y[15] !== eo || y[16] !== j
          ? ((c =
              "string" == typeof j
                ? (0, a.jsxs)(u.$, {
                    ref: en,
                    type: "button",
                    color: "outlineSurface",
                    size: "detailAction",
                    radius: "full",
                    disabled: M || H,
                    onClick: () => eo(en.current),
                    children: [
                      (0, a.jsx)(h.ONy, {}),
                      (0, a.jsx)(r.A, { id: "collegePlan.task.add", defaultMessage: "Add task" }),
                    ],
                  })
                : (0, a.jsx)(_.Y, { triggerRef: en, disabled: M || H, onCreate: () => eo(en.current) })),
            (y[13] = M),
            (y[14] = H),
            (y[15] = eo),
            (y[16] = j),
            (y[17] = c))
          : (c = y[17]),
        y[18] !== A || y[19] !== M || y[20] !== H
          ? ((f = (e, t, l) => {
              let a = void 0 === l ? "view" : l
              ;("view" !== a && (M || H)) || (ea(t), U(!1), $({ type: a, item: e, readAt: A }))
            }),
            (y[18] = A),
            (y[19] = M),
            (y[20] = H),
            (y[21] = f))
          : (f = y[21]),
        y[22] !== T || y[23] !== eo || y[24] !== c || y[25] !== f
          ? ((g = T({ addTask: c, onCreateTask: eo, onOpenTask: f })),
            (y[22] = T),
            (y[23] = eo),
            (y[24] = c),
            (y[25] = f),
            (y[26] = g))
          : (g = y[26]),
        y[27] !== O ||
        y[28] !== M ||
        y[29] !== X ||
        y[30] !== H ||
        y[31] !== B ||
        y[32] !== V ||
        y[33] !== P ||
        y[34] !== Y ||
        y[35] !== K ||
        y[36] !== W ||
        y[37] !== Q ||
        y[38] !== F ||
        y[39] !== z ||
        y[40] !== E ||
        y[41] !== j ||
        y[42] !== el ||
        y[43] !== q
          ? ((m =
              null != O &&
              (0, a.jsx)(k, {
                intent: O,
                schoolId: "string" == typeof j ? j : void 0,
                disabled: M || Y,
                onRefresh: P ?? (V && (K || (!W && null == z)) ? () => void Q() : void 0),
                refreshing: F || X,
                pending: H,
                unconfirmed: q,
                onClose: () => $(null),
                onReturnFocus: () => {
                  el?.isConnected
                    ? el.focus()
                    : (
                        en.current ??
                        document.getElementById(
                          "string" != typeof j && j.preview && E.get(N.r, j).data?.pages.every(G)
                            ? "college-schools"
                            : "college-view-timeline",
                        ) ??
                        document.getElementById("college-schools")
                      )?.focus()
                },
                onSubmit: (e) => {
                  M ||
                    Y ||
                    et.current ||
                    q ||
                    ((et.current = !0),
                    B(e)
                      .then((t) => {
                        "unconfirmed" === t
                          ? U(!0)
                          : "saved" === t && "edit" === e.type && void 0 !== e.body.completed
                            ? $((t) =>
                                null != t && "create" !== t.type && t.item.id === e.id
                                  ? { ...t, item: { ...t.item, completed: e.body.completed } }
                                  : t,
                              )
                            : $(null)
                      })
                      .finally(() => {
                        et.current = !1
                      }))
                },
              })),
            (y[27] = O),
            (y[28] = M),
            (y[29] = X),
            (y[30] = H),
            (y[31] = B),
            (y[32] = V),
            (y[33] = P),
            (y[34] = Y),
            (y[35] = K),
            (y[36] = W),
            (y[37] = Q),
            (y[38] = F),
            (y[39] = z),
            (y[40] = E),
            (y[41] = j),
            (y[42] = el),
            (y[43] = q),
            (y[44] = m))
          : (m = y[44]),
        y[45] !== g || y[46] !== m
          ? ((x = (0, a.jsxs)(a.Fragment, { children: [g, m] })), (y[45] = g), (y[46] = m), (y[47] = x))
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
      n = l("QosV"),
      o = l("zd8w"),
      i = l("Wf1j"),
      r = l("oyxz"),
      s = l("Sm6l"),
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
            f,
            g,
            m,
            x,
            y = (0, n.c)(19),
            { triggerRef: v, disabled: b, onCreate: C, open: j } = e,
            w = (0, i.A)(),
            A = (0, o.useRef)(!1)
          return (
            y[0] !== C
              ? ((t = (e) => {
                  A.current && (e.preventDefault(), (A.current = !1), C())
                }),
                (y[0] = C),
                (y[1] = t))
              : (t = y[1]),
            y[2] !== w
              ? ((l = w.formatMessage({ id: "collegePlan.timeline.actions", defaultMessage: "Timeline actions" })),
                (y[2] = w),
                (y[3] = l))
              : (l = y[3]),
            y[4] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, a.jsx)(c.e4G, {})), (y[4] = u)) : (u = y[4]),
            y[5] !== b || y[6] !== l || y[7] !== v
              ? ((h = (0, a.jsx)(s.$, {
                  ref: v,
                  type: "button",
                  color: "ghost",
                  size: "toolbar",
                  uniform: !0,
                  disabled: b,
                  "aria-label": l,
                  children: u,
                })),
                (y[5] = b),
                (y[6] = l),
                (y[7] = v),
                (y[8] = h))
              : (h = y[8]),
            y[9] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(c.aRI, {})), (y[9] = p)) : (p = y[9]),
            y[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = () => {
                  A.current = !0
                }),
                (g = (0, a.jsx)(r.A, { id: "collegePlan.timeline.addTask", defaultMessage: "Add new task" })),
                (y[10] = f),
                (y[11] = g))
              : ((f = y[10]), (g = y[11])),
            y[12] !== b
              ? ((m = (0, a.jsx)(d.ms.Item, { leftIcon: p, disabled: b, onSelect: f, children: g })),
                (y[12] = b),
                (y[13] = m))
              : (m = y[13]),
            y[14] !== j || y[15] !== t || y[16] !== h || y[17] !== m
              ? ((x = (0, a.jsx)(d.Ab, { align: "end", open: j, onCloseAutoFocus: t, triggerButton: h, children: m })),
                (y[14] = j),
                (y[15] = t),
                (y[16] = h),
                (y[17] = m),
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
            f,
            g,
            m,
            x,
            y,
            v,
            b,
            C,
            j,
            w,
            A,
            k,
            _ = (0, n.c)(35),
            { item: M, disabled: P, onAction: I, onToggle: S, open: N } = e,
            F = (0, i.A)(),
            T = (0, o.useRef)(null),
            G = (0, o.useRef)(null)
          return (
            _[0] !== I
              ? ((t = (e) => {
                  if (null != G.current && null != T.current) {
                    e.preventDefault()
                    let t = G.current
                    ;((G.current = null), I(t, T.current))
                  }
                }),
                (_[0] = I),
                (_[1] = t))
              : (t = _[1]),
            _[2] !== F || _[3] !== M.title
              ? ((l = F.formatMessage(
                  { id: "collegePlan.task.actions", defaultMessage: "Actions for {title}" },
                  { title: M.title },
                )),
                (_[2] = F),
                (_[3] = M.title),
                (_[4] = l))
              : (l = _[4]),
            _[5] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, a.jsx)(c.e4G, {})), (_[5] = u)) : (u = _[5]),
            _[6] !== l
              ? ((h = (0, a.jsx)(s.$, {
                  ref: T,
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
              ? ((f = () => {
                  G.current = "edit"
                }),
                (g = (0, a.jsx)(r.A, { id: "collegePlan.task.menu.edit", defaultMessage: "Edit" })),
                (_[9] = f),
                (_[10] = g))
              : ((f = _[9]), (g = _[10])),
            _[11] !== P
              ? ((m = (0, a.jsx)(d.ms.Item, { leftIcon: p, disabled: P, onSelect: f, children: g })),
                (_[11] = P),
                (_[12] = m))
              : (m = _[12]),
            _[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, a.jsx)(c.gL9, {})), (_[13] = x))
              : (x = _[13]),
            _[14] !== M.completed || _[15] !== S
              ? ((y = () => S(!M.completed)), (_[14] = M.completed), (_[15] = S), (_[16] = y))
              : (y = _[16]),
            _[17] !== M.completed
              ? ((v = M.completed
                  ? (0, a.jsx)(r.A, { id: "collegePlan.task.menu.incomplete", defaultMessage: "Mark as incomplete" })
                  : (0, a.jsx)(r.A, { id: "collegePlan.task.menu.complete", defaultMessage: "Mark as complete" })),
                (_[17] = M.completed),
                (_[18] = v))
              : (v = _[18]),
            _[19] !== P || _[20] !== y || _[21] !== v
              ? ((b = (0, a.jsx)(d.ms.Item, { leftIcon: x, disabled: P, onSelect: y, children: v })),
                (_[19] = P),
                (_[20] = y),
                (_[21] = v),
                (_[22] = b))
              : (b = _[22]),
            _[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, a.jsx)(c.zwW, {})), (_[23] = C))
              : (C = _[23]),
            _[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = () => {
                  G.current = "delete"
                }),
                (w = (0, a.jsx)(r.A, { id: "collegePlan.task.menu.delete", defaultMessage: "Delete" })),
                (_[24] = j),
                (_[25] = w))
              : ((j = _[24]), (w = _[25])),
            _[26] !== P
              ? ((A = (0, a.jsx)(d.ms.Item, {
                  leftIcon: C,
                  tone: "destructive",
                  disabled: P,
                  onSelect: j,
                  children: w,
                })),
                (_[26] = P),
                (_[27] = A))
              : (A = _[27]),
            _[28] !== N || _[29] !== t || _[30] !== b || _[31] !== A || _[32] !== h || _[33] !== m
              ? ((k = (0, a.jsxs)(d.Ab, {
                  align: "end",
                  open: N,
                  onCloseAutoFocus: t,
                  triggerButton: h,
                  children: [m, b, A],
                })),
                (_[28] = N),
                (_[29] = t),
                (_[30] = b),
                (_[31] = A),
                (_[32] = h),
                (_[33] = m),
                (_[34] = k))
              : (k = _[34]),
            k
          )
        },
      },
    )
  },
  zeuB(e, t, l) {
    var a = l("SZCv"),
      n = l.n(a),
      o = l("qmMi"),
      i = l("SPnB"),
      r = l("Kwur"),
      s = l("bxvp"),
      d = l("hsIu"),
      c = l("OWtl"),
      u = l("XZh4")
    let h = (0, o.i1)(
        c.u,
        (e, { get: t }) =>
          e?.flatMap((e) => {
            let l = t(u.c, e).data?.favicon_origin
            return null == l ? [] : [l]
          }) ?? [],
        { isEqual: n() },
      ),
      p = (0, o.vU)(c.u, (e, { get: t, scope: l }) => {
        let a = t(i.chatGptAuthenticatedAccountId$),
          n = t(i.chatGptAuthenticatedUserId$),
          o = t(d.pH).data?.plan_id
        return {
          queryKey: ["college-plan-task", a, n, o, e],
          enabled: null != e && null != a && null != n && null != o && t(s.E$),
          queryFn: async ({ signal: t }) => {
            let c
            do {
              if (
                null == e ||
                null == a ||
                null == n ||
                null == o ||
                l.get(i.chatGptAuthenticatedAccountId$) !== a ||
                l.get(i.chatGptAuthenticatedUserId$) !== n ||
                l.get(d.pH).data?.plan_id !== o ||
                !l.get(s.E$)
              )
                throw Error("College Plan is unavailable")
              let u = await r.Request.safeGet("/college-plan/items", {
                  additionalHeaders: { "ChatGPT-Account-ID": a },
                  expectedIdentity: { accountId: a, userId: n },
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
    var a = l("qmMi"),
      n = l("SPnB"),
      o = l("Kwur"),
      i = l("bxvp"),
      r = l("hsIu"),
      s = l("OWtl")
    let d = (0, a.N3)(s.u, ({ timezone: e, preview: t, presenceOnly: l }, { get: a }) => {
      let s = a(n.chatGptAuthenticatedAccountId$),
        c = a(n.chatGptAuthenticatedUserId$),
        u = a(r.pH).data?.plan_id
      return {
        queryKey: ["college-plan-timeline", s, c, u, e, t],
        enabled:
          null != s &&
          null != c &&
          null != u &&
          a(i.E$) &&
          (!l ||
            (function (e, t) {
              let { data: l, isSuccess: a, hasNextPage: n } = t(d, { timezone: e, preview: !0 })
              return a && !n && l.pages.every((e) => 0 === e.items.length)
            })(e, a)),
        initialPageParam: "",
        getNextPageParam: (e) => e.next_cursor,
        queryFn: ({ pageParam: l, signal: a }) => {
          if (null == s || null == c || null == u) throw Error("College Plan is unavailable")
          return o.Request.safeGet("/college-plan/timeline", {
            parameters: {
              query: {
                timezone: e,
                include_completed: !t,
                include_undated: !t,
                limit: t ? 3 : 20,
                cursor: l || void 0,
              },
            },
            additionalHeaders: { "ChatGPT-Account-ID": s },
            expectedIdentity: { accountId: s, userId: c },
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
      n = l("beJj"),
      o = l("oP4q").f,
      i = a("unscopables"),
      r = Array.prototype
    ;(void 0 === r[i] && o(r, i, { configurable: !0, value: n(null) }),
      (e.exports = function (e) {
        r[i][e] = !0
      }))
  },
  uHOi(e, t, l) {
    var a = l("f6Go")
    e.exports = function (e, t, l) {
      for (var n = 0, o = arguments.length > 2 ? l : a(t), i = new e(o); o > n;) i[n] = t[n++]
      return i
    }
  },
  lGUW(e, t, l) {
    var a = l("MV5a"),
      n = l("OcaE"),
      o = l("f6Go"),
      i = function (e) {
        return function (t, l, i) {
          var r,
            s = a(t),
            d = o(s)
          if (0 === d) return !e && -1
          var c = n(i, d)
          if (e && l != l) {
            for (; d > c;) if ((r = s[c++]) != r) return !0
          } else for (; d > c; c++) if ((e || c in s) && s[c] === l) return e || c || 0
          return !e && -1
        }
      }
    e.exports = { includes: i(!0), indexOf: i(!1) }
  },
  wAJj(e, t, l) {
    var a = l("OwA9"),
      n = l("EzAB"),
      o = l("fuV1"),
      i = l("f6Go"),
      r = function (e) {
        var t = 1 === e
        return function (l, r, s) {
          for (var d, c = o(l), u = n(c), h = i(u), p = a(r, s); h-- > 0;)
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
    e.exports = { findLast: r(0), findLastIndex: r(1) }
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
      n = Math.floor,
      o = function (e, t) {
        var l = e.length
        if (l < 8)
          for (var i, r, s = 1; s < l;) {
            for (r = s, i = e[s]; r && t(e[r - 1], i) > 0;) e[r] = e[--r]
            r !== s++ && (e[r] = i)
          }
        else
          for (
            var d = n(l / 2), c = o(a(e, 0, d), t), u = o(a(e, d), t), h = c.length, p = u.length, f = 0, g = 0;
            f < h || g < p;
          )
            e[f + g] = f < h && g < p ? (0 >= t(c[f], u[g]) ? c[f++] : u[g++]) : f < h ? c[f++] : u[g++]
        return e
      }
    e.exports = o
  },
  yUts(e, t, l) {
    var a = l("v8vj"),
      n = l("UP8A"),
      o = l("M4Rs"),
      i = l("eUVA")("toStringTag"),
      r = Object,
      s =
        "Arguments" ===
        o(
          (function () {
            return arguments
          })(),
        ),
      d = function (e, t) {
        try {
          return e[t]
        } catch (e) {}
      }
    e.exports = a
      ? o
      : function (e) {
          var t, l, a
          return void 0 === e
            ? "Undefined"
            : null === e
              ? "Null"
              : "string" == typeof (l = d((t = r(e)), i))
                ? l
                : s
                  ? o(t)
                  : "Object" === (a = o(t)) && n(t.callee)
                    ? "Arguments"
                    : a
        }
  },
  BwBB(e, t, l) {
    var a = l("QKnk"),
      n = l("Dfei"),
      o = l("aNGg"),
      i = l("oP4q")
    e.exports = function (e, t, l) {
      for (var r = n(t), s = i.f, d = o.f, c = 0; c < r.length; c++) {
        var u = r[c]
        a(e, u) || (l && a(l, u)) || s(e, u, d(t, u))
      }
    }
  },
  P6I5(e, t, l) {
    var a = l("ritu"),
      n = l("oP4q"),
      o = l("Szsi")
    e.exports = a
      ? function (e, t, l) {
          return n.f(e, t, o(1, l))
        }
      : function (e, t, l) {
          return ((e[t] = l), e)
        }
  },
  TXUL(e, t, l) {
    var a = l("UP8A"),
      n = l("oP4q"),
      o = l("UthD"),
      i = l("FgJi")
    e.exports = function (e, t, l, r) {
      r || (r = {})
      var s = r.enumerable,
        d = void 0 !== r.name ? r.name : t
      if ((a(l) && o(l, d, r), r.global)) s ? (e[t] = l) : i(t, l)
      else {
        try {
          r.unsafe ? e[t] && (s = !0) : delete e[t]
        } catch (e) {}
        s
          ? (e[t] = l)
          : n.f(e, t, { value: l, enumerable: !1, configurable: !r.nonConfigurable, writable: !r.nonWritable })
      }
      return e
    }
  },
  JBAm(e, t, l) {
    var a = l("v5Cs"),
      n = TypeError
    e.exports = function (e, t) {
      if (!delete e[t]) throw new n("Cannot delete property " + a(t) + " of " + a(e))
    }
  },
  ogbS(e, t, l) {
    var a = l("vlAc"),
      n = l("lbJk")
    e.exports = function (e, t) {
      return n(a[e].prototype[t])
    }
  },
  CU5P(e) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ]
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
  Ywrr(e, t, l) {
    var a = l("vlAc"),
      n = l("aNGg").f,
      o = l("P6I5"),
      i = l("TXUL"),
      r = l("FgJi"),
      s = l("BwBB"),
      d = l("XUMo")
    e.exports = function (e, t) {
      var l,
        c,
        u,
        h,
        p,
        f = e.target,
        g = e.global,
        m = e.stat
      if ((l = g ? a : m ? a[f] || r(f, {}) : a[f] && a[f].prototype))
        for (c in t) {
          if (
            ((h = t[c]),
            (u = e.dontCallGetSet ? (p = n(l, c)) && p.value : l[c]),
            !d(g ? c : f + (m ? "." : "#") + c, e.forced) && void 0 !== u)
          ) {
            if (typeof h == typeof u) continue
            s(h, u)
          }
          ;((e.sham || (u && u.sham)) && o(h, "sham", !0), i(l, c, h, e))
        }
    }
  },
  OwA9(e, t, l) {
    var a = l("PtOp"),
      n = l("dS6X"),
      o = l("kRXN"),
      i = a(a.bind)
    e.exports = function (e, t) {
      return (
        n(e),
        void 0 === t
          ? e
          : o
            ? i(e, t)
            : function () {
                return e.apply(t, arguments)
              }
      )
    }
  },
  PzXd(e, t, l) {
    var a = l("ritu"),
      n = l("QKnk"),
      o = Function.prototype,
      i = a && Object.getOwnPropertyDescriptor,
      r = n(o, "name"),
      s = r && (!a || (a && i(o, "name").configurable))
    e.exports = { EXISTS: r, PROPER: r && "something" === function () {}.name, CONFIGURABLE: s }
  },
  PtOp(e, t, l) {
    var a = l("M4Rs"),
      n = l("lbJk")
    e.exports = function (e) {
      if ("Function" === a(e)) return n(e)
    }
  },
  yUY1(e, t, l) {
    var a = l("vlAc")
    e.exports = function (e, t) {
      var l = a[e],
        n = l && l.prototype
      return n && n[t]
    }
  },
  MlqX(e) {
    e.exports = {}
  },
  kMZZ(e, t, l) {
    e.exports = l("lcaZ")("document", "documentElement")
  },
  k3lr(e, t, l) {
    var a = l("lbJk"),
      n = l("UP8A"),
      o = l("r60i"),
      i = a(Function.toString)
    ;(n(o.inspectSource) ||
      (o.inspectSource = function (e) {
        return i(e)
      }),
      (e.exports = o.inspectSource))
  },
  Vdei(e, t, l) {
    var a,
      n,
      o,
      i = l("YzS6"),
      r = l("vlAc"),
      s = l("dBSE"),
      d = l("P6I5"),
      c = l("QKnk"),
      u = l("r60i"),
      h = l("NbsN"),
      p = l("MlqX"),
      f = "Object already initialized",
      g = r.TypeError,
      m = r.WeakMap
    if (i || u.state) {
      var x = u.state || (u.state = new m())
      ;((x.get = x.get),
        (x.has = x.has),
        (x.set = x.set),
        (a = function (e, t) {
          if (x.has(e)) throw new g(f)
          return ((t.facade = e), x.set(e, t), t)
        }),
        (n = function (e) {
          return x.get(e) || {}
        }),
        (o = function (e) {
          return x.has(e)
        }))
    } else {
      var y = h("state")
      ;((p[y] = !0),
        (a = function (e, t) {
          if (c(e, y)) throw new g(f)
          return ((t.facade = e), d(e, y, t), t)
        }),
        (n = function (e) {
          return c(e, y) ? e[y] : {}
        }),
        (o = function (e) {
          return c(e, y)
        }))
    }
    e.exports = {
      set: a,
      get: n,
      has: o,
      enforce: function (e) {
        return o(e) ? n(e) : a(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var l
          if (!s(t) || (l = n(t)).type !== e) throw new g("Incompatible receiver, " + e + " required")
          return l
        }
      },
    }
  },
  XUMo(e, t, l) {
    var a = l("MGoG"),
      n = l("UP8A"),
      o = /#|\.prototype\./,
      i = function (e, t) {
        var l = s[r(e)]
        return l === c || (l !== d && (n(t) ? a(t) : !!t))
      },
      r = (i.normalize = function (e) {
        return String(e).replace(o, ".").toLowerCase()
      }),
      s = (i.data = {}),
      d = (i.NATIVE = "N"),
      c = (i.POLYFILL = "P")
    e.exports = i
  },
  f6Go(e, t, l) {
    var a = l("Wy8D")
    e.exports = function (e) {
      return a(e.length)
    }
  },
  UthD(e, t, l) {
    var a = l("lbJk"),
      n = l("MGoG"),
      o = l("UP8A"),
      i = l("QKnk"),
      r = l("ritu"),
      s = l("PzXd").CONFIGURABLE,
      d = l("k3lr"),
      c = l("Vdei"),
      u = c.enforce,
      h = c.get,
      p = String,
      f = Object.defineProperty,
      g = a("".slice),
      m = a("".replace),
      x = a([].join),
      y =
        r &&
        !n(function () {
          return 8 !== f(function () {}, "length", { value: 8 }).length
        }),
      v = String(String).split("String"),
      b = (e.exports = function (e, t, l) {
        ;("Symbol(" === g(p(t), 0, 7) && (t = "[" + m(p(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
          l && l.getter && (t = "get " + t),
          l && l.setter && (t = "set " + t),
          (!i(e, "name") || (s && e.name !== t)) && (r ? f(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          y && l && i(l, "arity") && e.length !== l.arity && f(e, "length", { value: l.arity }))
        try {
          l && i(l, "constructor") && l.constructor
            ? r && f(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0)
        } catch (e) {}
        var a = u(e)
        return (i(a, "source") || (a.source = x(v, "string" == typeof t ? t : "")), e)
      })
    Function.prototype.toString = b(function () {
      return (o(this) && h(this).source) || d(this)
    }, "toString")
  },
  eWL0(e) {
    var t = Math.ceil,
      l = Math.floor
    e.exports =
      Math.trunc ||
      function (e) {
        var a = +e
        return (a > 0 ? l : t)(a)
      }
  },
  beJj(e, t, l) {
    var a,
      n = l("aRew"),
      o = l("gDVu"),
      i = l("CU5P"),
      r = l("MlqX"),
      s = l("kMZZ"),
      d = l("be5s"),
      c = l("NbsN"),
      u = "prototype",
      h = "script",
      p = c("IE_PROTO"),
      f = function () {},
      g = function (e) {
        return "<" + h + ">" + e + "</" + h + ">"
      },
      m = function (e) {
        ;(e.write(g("")), e.close())
        var t = e.parentWindow.Object
        return ((e = null), t)
      },
      x = function () {
        var e,
          t = d("iframe")
        return (
          (t.style.display = "none"),
          s.appendChild(t),
          (t.src = String("java" + h + ":")),
          (e = t.contentWindow.document).open(),
          e.write(g("document.F=Object")),
          e.close(),
          e.F
        )
      },
      y = function () {
        try {
          a = new ActiveXObject("htmlfile")
        } catch (e) {}
        y = "u" > typeof document ? (document.domain && a ? m(a) : x()) : m(a)
        for (var e = i.length; e--;) delete y[u][i[e]]
        return y()
      }
    ;((r[p] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var l
          return (
            null !== e ? ((f[u] = n(e)), (l = new f()), (f[u] = null), (l[p] = e)) : (l = y()),
            void 0 === t ? l : o.f(l, t)
          )
        }))
  },
  gDVu(e, t, l) {
    var a = l("ritu"),
      n = l("Q5Uw"),
      o = l("oP4q"),
      i = l("aRew"),
      r = l("MV5a"),
      s = l("nicF")
    t.f =
      a && !n
        ? Object.defineProperties
        : function (e, t) {
            i(e)
            for (var l, a = r(t), n = s(t), d = n.length, c = 0; d > c;) o.f(e, (l = n[c++]), a[l])
            return e
          }
  },
  pu3q(e, t, l) {
    var a = l("i4Kh"),
      n = l("CU5P").concat("length", "prototype")
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return a(e, n)
      }
  },
  vsRo(e, t) {
    t.f = Object.getOwnPropertySymbols
  },
  i4Kh(e, t, l) {
    var a = l("lbJk"),
      n = l("QKnk"),
      o = l("MV5a"),
      i = l("lGUW").indexOf,
      r = l("MlqX"),
      s = a([].push)
    e.exports = function (e, t) {
      var l,
        a = o(e),
        d = 0,
        c = []
      for (l in a) !n(r, l) && n(a, l) && s(c, l)
      for (; t.length > d;) n(a, (l = t[d++])) && (~i(c, l) || s(c, l))
      return c
    }
  },
  nicF(e, t, l) {
    var a = l("i4Kh"),
      n = l("CU5P")
    e.exports =
      Object.keys ||
      function (e) {
        return a(e, n)
      }
  },
  Dfei(e, t, l) {
    var a = l("lcaZ"),
      n = l("lbJk"),
      o = l("pu3q"),
      i = l("vsRo"),
      r = l("aRew"),
      s = n([].concat)
    e.exports =
      a("Reflect", "ownKeys") ||
      function (e) {
        var t = o.f(r(e)),
          l = i.f
        return l ? s(t, l(e)) : t
      }
  },
  NbsN(e, t, l) {
    var a = l("AGIv"),
      n = l("JZZs"),
      o = a("keys")
    e.exports = function (e) {
      return o[e] || (o[e] = n(e))
    }
  },
  OcaE(e, t, l) {
    var a = l("Do1T"),
      n = Math.max,
      o = Math.min
    e.exports = function (e, t) {
      var l = a(e)
      return l < 0 ? n(l + t, 0) : o(l, t)
    }
  },
  Do1T(e, t, l) {
    var a = l("eWL0")
    e.exports = function (e) {
      var t = +e
      return t != t || 0 === t ? 0 : a(t)
    }
  },
  Wy8D(e, t, l) {
    var a = l("Do1T"),
      n = Math.min
    e.exports = function (e) {
      var t = a(e)
      return t > 0 ? n(t, 0x1fffffffffffff) : 0
    }
  },
  v8vj(e, t, l) {
    var a = l("eUVA")("toStringTag"),
      n = {}
    ;((n[a] = "z"), (e.exports = "[object z]" === String(n)))
  },
  qCMJ(e, t, l) {
    var a = l("yUts"),
      n = String
    e.exports = function (e) {
      if ("Symbol" === a(e)) throw TypeError("Cannot convert a Symbol value to a string")
      return n(e)
    }
  },
  YzS6(e, t, l) {
    var a = l("vlAc"),
      n = l("UP8A"),
      o = a.WeakMap
    e.exports = n(o) && /native code/.test(String(o))
  },
  o1bS(e, t, l) {
    var a = l("Ywrr"),
      n = l("wAJj").findLast,
      o = l("XnQF")
    ;(a(
      { target: "Array", proto: !0 },
      {
        findLast: function (e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
      },
    ),
      o("findLast"))
  },
  Y4C5(e, t, l) {
    var a = l("Ywrr"),
      n = l("lbJk"),
      o = l("dS6X"),
      i = l("fuV1"),
      r = l("f6Go"),
      s = l("JBAm"),
      d = l("qCMJ"),
      c = l("MGoG"),
      u = l("FtMJ"),
      h = l("jXET"),
      p = l("BN3d"),
      f = l("mFA1"),
      g = l("cOJA"),
      m = l("YX7I"),
      x = [],
      y = n(x.sort),
      v = n(x.push),
      b = c(function () {
        x.sort(void 0)
      }),
      C = c(function () {
        x.sort(null)
      }),
      j = h("sort"),
      w = !c(function () {
        if (g) return g < 70
        if (!p || !(p > 3)) {
          if (f) return !0
          if (m) return m < 603
          var e,
            t,
            l,
            a,
            n = ""
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
            ((t = x[a].k.charAt(0)), n.charAt(n.length - 1) !== t && (n += t))
          return "DGBEFHACIJK" !== n
        }
      })
    a(
      { target: "Array", proto: !0, forced: b || !C || !j || !w },
      {
        sort: function (e) {
          void 0 !== e && o(e)
          var t,
            l,
            a = i(this)
          if (w) return void 0 === e ? y(a) : y(a, e)
          var n = [],
            c = r(a)
          for (l = 0; l < c; l++) l in a && v(n, a[l])
          for (
            u(n, function (t, l) {
              return void 0 === l ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, l) || 0 : d(t) > d(l) ? 1 : -1
            }),
              t = r(n),
              l = 0;
            l < t;
          )
            a[l] = n[l++]
          for (; l < c;) s(a, l++)
          return a
        },
      },
    )
  },
  Fuyw(e, t, l) {
    var a = l("Ywrr"),
      n = l("lbJk"),
      o = l("dS6X"),
      i = l("MV5a"),
      r = l("uHOi"),
      s = l("yUY1"),
      d = l("XnQF"),
      c = Array,
      u = n(s("Array", "sort"))
    ;(a(
      { target: "Array", proto: !0 },
      {
        toSorted: function (e) {
          return (void 0 !== e && o(e), u(r(c, i(this)), e))
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
  NzCX(e, t, l) {
    let a = (0, l("ESTr").a)({
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
      body: '<path d="M10 1.27344C10.3614 1.27349 10.7174 1.36071 11.0391 1.52637L17.5723 4.89062C17.7391 4.97649 17.8774 5.10258 17.9785 5.25391L18.0664 5.41309L18.127 5.58301C18.1738 5.75714 18.1789 5.9413 18.1396 6.11816C18.0873 6.3538 17.9586 6.57025 17.7686 6.72852C17.5778 6.88716 17.3358 6.97579 17.083 6.97559L16.46 6.97656V13.6143C17.4429 13.8831 18.1659 14.7805 18.166 15.8486C18.166 17.1291 17.1281 18.1678 15.8477 18.168H4.15234C2.872 18.1677 1.83398 17.129 1.83398 15.8486C1.83413 14.7805 2.55716 13.8831 3.54004 13.6143V6.97656H2.91699C2.66395 6.97656 2.42213 6.88654 2.23145 6.72754C2.04143 6.56902 1.91342 6.35201 1.86133 6.11621C1.80942 5.88073 1.83456 5.63299 1.93457 5.41211C2.03478 5.19101 2.20673 5.00494 2.42871 4.89062L8.96094 1.52637C9.28258 1.36075 9.63856 1.27344 10 1.27344ZM4.15234 14.8604C3.60664 14.8606 3.16424 15.3029 3.16406 15.8486C3.16406 16.3945 3.60654 16.8376 4.15234 16.8379H15.8477C16.3935 16.8377 16.8359 16.3945 16.8359 15.8486C16.8358 15.3029 16.3934 14.8605 15.8477 14.8604H4.15234ZM12.5967 13.5303H15.1299V6.97656H12.5967V13.5303ZM8.7334 13.5303H11.2666V6.97656H8.7334V13.5303ZM4.87012 13.5303H7.40332V6.97656H4.87012V13.5303ZM10 2.60352C9.85257 2.60352 9.70554 2.63938 9.57031 2.70898L3.86719 5.64648H4.10938C4.14076 5.64193 4.17244 5.63673 4.20508 5.63672C4.23764 5.63672 4.26947 5.64196 4.30078 5.64648H16.1338L10.4297 2.70898C10.2945 2.63935 10.1474 2.60356 10 2.60352Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    l.d(t, {}, { H: a })
  },
  ngY7(e, t, l) {
    let a = (0, l("ESTr").a)({
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
//# sourceMappingURL=578056.237c37e0c3.js.map
