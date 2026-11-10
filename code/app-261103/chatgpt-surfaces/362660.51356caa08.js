export const __rspack_esm_ids = [362660]
export const __webpack_modules__ = {
  ylLY(e, t, l) {
    let a = (0, l("zd8w").createContext)(null)
    l.d(t, {}, { t: a })
  },
  ULZ9(e, t, l) {
    ;(l.d(t, { z: () => n }), l("iYCA"), l("yCBR"))
    var a = l("ABep"),
      s = l("QosV"),
      o = l("ylLY")
    function n(e) {
      let t,
        l,
        n = (0, s.c)(8),
        { children: i, linkComponent: r, allowedWidgetTypes: d, radixPortalContainer: c, hydrationSafe: u } = e,
        h = void 0 === r ? "a" : r,
        p = void 0 === d ? "GA" : d,
        m = void 0 !== u && u
      return (
        n[0] !== p || n[1] !== m || n[2] !== h || n[3] !== c
          ? ((t = { linkComponent: h, allowedWidgetTypes: p, radixPortalContainer: c, hydrationSafe: m }),
            (n[0] = p),
            (n[1] = m),
            (n[2] = h),
            (n[3] = c),
            (n[4] = t))
          : (t = n[4]),
        n[5] !== i || n[6] !== t
          ? ((l = (0, a.jsx)(o.t.Provider, { value: t, children: i })), (n[5] = i), (n[6] = t), (n[7] = l))
          : (l = n[7]),
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
    let o = (e) => ("number" == typeof e ? `${e}deg` : e)
    l.d(
      t,
      {},
      {
        Ny: (e) => {
          let t = e.currentTarget
          if (!s.Sw || !(t instanceof HTMLElement)) return
          let l = t.offsetWidth,
            o = 0.985
          ;(l <= 80 ? (o = 0.96) : l <= 150 ? (o = 0.97) : l <= 220 ? (o = 0.98) : l > 600 && (o = 0.995),
            t.style.setProperty("--scale", (1 + (o - 1) * a.N.pressableScaleMultiplier).toString()))
        },
        Oe: () =>
          !!s.Vd &&
          "function" == typeof window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        WI: function (e, t, l = (e) => e) {
          let a = [],
            s = new Map()
          for (let o of e) {
            let e = l(o[t], o),
              n = s.get(e)
            if (void 0 !== n) {
              a[n].items.push(o)
              continue
            }
            let i = { [t]: e, items: [o] }
            ;(s.set(e, a.length), a.push(i))
          }
          return a
        },
        fT: (e) => `${e}ms`,
        iB: (e) => {
          e.preventDefault()
        },
        lW: ({ x: e, y: t, scale: l, rotate: a, rotateY: s, perspective: n, skewX: i, skewY: r } = {}) => {
          let d = [
            null == n ? null : `perspective(${n}px)`,
            null == e ? null : `translateX(${e}px)`,
            null == t ? null : `translateY(${t}px)`,
            null == l ? null : `scale(${l})`,
            null == a ? null : `rotate(${o(a)})`,
            null == s ? null : `rotateY(${o(s)})`,
            null == i ? null : `skewX(${o(i)})`,
            null == r ? null : `skewY(${o(r)})`,
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
      o = l("yGJW"),
      n = l("Gxik"),
      i = l("hsIu")
    function r(e, t, l = "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED") {
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
            entityId: e.query.getData(i.pH)?.project_id ?? void 0,
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
            ;(0, o.yy)(e, a.wk, {
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
          return (0, n.rr)(
            e,
            t,
            () => {
              let t = "chat_school_receipt" === l.surface ? l.conversationId : (0, n.Wh)(e)?.id
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
      o = l("on57"),
      n = l("zTeN"),
      i = l("KDax"),
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
            b = void 0 === y ? "chips" : y,
            k = (0, n.Ul)(r.chatGptConsumerLockdownAccountState$),
            j = (0, n._U)(c.E, m?.length ? f : void 0)
          if (p[0] !== m || p[1] !== g || p[2] !== j || p[3] !== k || p[4] !== v || p[5] !== b) {
            let e = [g, ...j].flatMap(u),
              s = "list" === b ? "flex-col" : "flex-wrap text-sm"
            ;(p[8] !== s ? ((t = (0, o.A)("flex gap-1", s)), (p[8] = s), (p[9] = t)) : (t = p[9]),
              (l = m?.map((t, l) => {
                let s = URL.parse(t.url),
                  n = e.find((e) => s?.hostname === e.hostname || s?.hostname.endsWith(`.${e.hostname}`))
                return (0, a.jsx)(
                  "li",
                  {
                    className: "max-w-full min-w-0",
                    children:
                      s?.protocol === "https:" || s?.protocol === "http:"
                        ? (0, a.jsxs)(i.t, {
                            className: "list" === b ? "flex items-start gap-3 py-1" : void 0,
                            appearance: "list" === b ? "inherit" : "source",
                            underline: "list" === b ? "none" : void 0,
                            href: s.href,
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
                                  href: n?.origin ?? s.origin,
                                  loadRemote: "disabled" === k && null != n,
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
              (p[0] = m),
              (p[1] = g),
              (p[2] = j),
              (p[3] = k),
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
      s = l("QosV"),
      o = l("zTeN"),
      n = l("oyxz"),
      i = l("Qgfj"),
      r = l("Niy1"),
      d = l("OWtl")
    l.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            l,
            i,
            c,
            u = (0, s.c)(12),
            { fact: h, schoolId: p } = e,
            m = (0, o.gh)(d.u)
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
                  children: (0, a.jsx)(n.A, {
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
              ? ((i = null != h.reporting_period && (0, a.jsx)("span", { children: h.reporting_period })),
                (u[6] = h.reporting_period),
                (u[7] = i))
              : (i = u[7]),
            u[8] !== t || u[9] !== l || u[10] !== i
              ? ((c = (0, a.jsxs)("span", {
                  ref: t,
                  className: "flex flex-col gap-1 text-sm break-words whitespace-normal text-secondary",
                  children: [l, i],
                })),
                (u[8] = t),
                (u[9] = l),
                (u[10] = i),
                (u[11] = c))
              : (c = u[11]),
            c
          )
        },
        a: function (e) {
          let t,
            l = (0, s.c)(4),
            { fact: o, showYear: r } = e,
            d = void 0 !== r && r
          return (
            l[0] !== o.due_date || l[1] !== o.label || l[2] !== d
              ? ((t = (0, a.jsx)("span", {
                  className: "text-sm break-words text-secondary",
                  children:
                    null == o.due_date
                      ? (0, a.jsx)(n.A, {
                          id: "collegePlan.schools.deadlineDetails",
                          defaultMessage: "See deadline details",
                          description:
                            "Saved school with deadline information but no selected calendar date; the school details contain the full explanation",
                        })
                      : (0, a.jsx)(n.A, {
                          id: "collegePlan.schools.compactDeadline",
                          defaultMessage: "{label} — {date}",
                          description:
                            "Compact application deadline for a saved school. Label is the saved application round, such as REA or Regular Decision; date is the localized calendar date.",
                          values: {
                            label: o.label,
                            date: (0, a.jsx)(
                              i.XU,
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
      s = l("QosV"),
      o = l("zTeN"),
      n = l("rxj0"),
      i = l("tt6P"),
      r = l("GO7r")
    l.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            l = (0, s.c)(3),
            { faviconOrigin: d } = e,
            c = (0, o.Ul)(n.chatGptConsumerLockdownAccountState$)
          return (
            l[0] !== d || l[1] !== c
              ? ((t = (0, a.jsx)("span", {
                  className:
                    "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-default",
                  "aria-hidden": !0,
                  children:
                    null != d && "disabled" === c
                      ? (0, a.jsx)(i.a, { className: "icon-md", href: d })
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
  tEkl(e, t, l) {
    l.d(t, { S3: () => E, GT: () => F, Ch: () => D })
    var a = l("ABep"),
      s = l("QosV"),
      o = l("AoaR"),
      n = l("nkTT")
    let i = (0, n.a)({
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
      }),
      r = (0, n.a)({
        name: "circle-checkmark-light-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 3.099609, y: 3.099609, width: 25.800781, height: 25.800781 },
          visualBounds: { x: 3.099609, y: 3.099609, width: 25.800781, height: 25.800781 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 3.099609, y: 3.099609, width: 25.800781, height: 25.800781 },
          center: { x: 16, y: 16 },
          insets: { top: 3.099609, right: 3.09961, bottom: 3.09961, left: 3.099609 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16, y: 16 }, foreground: { x: 16, y: 16 } },
        },
        capabilities: ["icon"],
        body: '<path d="M19.7773 11.4414C20.0541 11.0289 20.6136 10.9189 21.0264 11.1953C21.4391 11.4721 21.549 12.0306 21.2725 12.4434L15.6729 20.7959C15.2604 21.4111 14.3823 21.4818 13.877 20.9404L10.8164 17.6602C10.4777 17.2968 10.4972 16.7267 10.8604 16.3877C11.2237 16.0488 11.7937 16.0686 12.1328 16.4316L14.6338 19.1123L19.7773 11.4414Z" fill="currentColor"/> <path d="M16 3.09961C23.1245 3.09961 28.9004 8.87553 28.9004 16C28.9004 23.1245 23.1245 28.9004 16 28.9004C8.87553 28.9004 3.09961 23.1245 3.09961 16C3.09961 8.87553 8.87553 3.09961 16 3.09961ZM16 4.90039C9.86964 4.90039 4.90039 9.86964 4.90039 16C4.90039 22.1304 9.86964 27.0996 16 27.0996C22.1304 27.0996 27.0996 22.1304 27.0996 16C27.0996 9.86964 22.1304 4.90039 16 4.90039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var d = l("on57"),
      c = l("zTeN"),
      u = l("zd8w"),
      h = l("Wf1j"),
      p = l("oyxz"),
      m = l("HZfM"),
      g = l("SPnB"),
      f = l("LtEv"),
      x = l("OOaz"),
      y = l("Xslx"),
      v = l("Niy1"),
      b = l("VBQS"),
      k = l("jd9V"),
      j = l("hsIu"),
      C = l("ygO2"),
      w = l("FkTw"),
      A = l("HOLv"),
      _ = l("GO7r"),
      P = l("VL1D"),
      I = l("RNul"),
      N = l("nlNF"),
      M = l("EEop"),
      T = l("OWtl"),
      S = l("RdSt"),
      $ = l("zlXx"),
      G = l("XZh4")
    function E() {
      let e,
        t,
        l,
        o,
        n,
        i,
        d,
        v,
        I,
        S = (0, s.c)(30),
        E = (0, c.gh)(T.u),
        { data: q, isSuccess: R } = (0, c.Ul)(G.f1)
      S[0] !== q || S[1] !== R ? ((e = R && q.pages.every(O)), (S[0] = q), (S[1] = R), (S[2] = e)) : (e = S[2])
      let F = e,
        { data: D } = (0, c.Ul)(F ? j.pH : null) ?? {},
        U = D?.has_profile === !0,
        z = (0, h.A)(),
        B = (0, m.Zp)(),
        L = (0, u.useRef)(!1),
        [Z, V] = (0, u.useState)(!1),
        [W, Q] = (0, u.useState)(!1)
      S[3] !== z || S[4] !== B || S[5] !== E
        ? ((t = () => {
            if (L.current) return
            ;((L.current = !0), V(!0), Q(!1))
            let e = E.get(g.chatGptAuthenticatedAccountId$),
              t = E.get(g.chatGptAuthenticatedUserId$),
              l = E.get(j.pH).data?.plan_id,
              a = E.get(N.x2),
              s = () =>
                E.get(g.chatGptAuthenticatedAccountId$) === e &&
                E.get(g.chatGptAuthenticatedUserId$) === t &&
                E.get(j.pH).data?.plan_id === l &&
                E.get(N.x2) === a
            ;(async () => {
              let e = await (0, k.u)(E, "chat")
              if (null == e || !s()) return
              let t = (0, b.xR)(E.query.getData(M.Pc, (0, b.br)()))
              if (null == t) return void Q(!0)
              let l = (0, x.TF)(e),
                a = (0, y.h)(E, l, [t]),
                o = await (0, f.submitChatGptFollowUp)(E, {
                  conversationId: l,
                  prompt: z.formatMessage({
                    id: "collegePlan.schools.researchPrompt",
                    defaultMessage: "Help me add a school to my college plan.",
                    description:
                      "Visible student message sent once when Add schools is clicked to request adding a school to the college plan",
                  }),
                  systemHints: [t],
                  requireDispatchAcceptance: !0,
                  isSubmissionCurrent: s,
                }).finally(a)
              s() && (o ? await B(`/college-plan/c/${encodeURIComponent(e)}`) : Q(!0))
            })()
              .catch(() => {
                s() && Q(!0)
              })
              .finally(() => {
                ;((L.current = !1), V(!1))
              })
          }),
          (S[3] = z),
          (S[4] = B),
          (S[5] = E),
          (S[6] = t))
        : (t = S[6])
      let X = t,
        Y = F ? "primary" : "outlineSurface"
      ;(S[7] !== F || S[8] !== z
        ? ((l = F
            ? void 0
            : z.formatMessage({
                id: "collegePlan.schools.add",
                defaultMessage: "Add schools",
                description: "Starts a College Plan research chat; does not save a school",
              })),
          (S[7] = F),
          (S[8] = z),
          (S[9] = l))
        : (l = S[9]),
        S[10] !== F
          ? ((o = F
              ? (0, a.jsx)(p.A, {
                  id: "collegePlan.schools.empty.add",
                  defaultMessage: "Add a school",
                  description:
                    "Primary button in the College Plan empty schools card; starts the existing chat flow to research and save the first school",
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(_.ONy, {}),
                    (0, a.jsx)(p.A, {
                      id: "collegePlan.schools.addButton",
                      defaultMessage: "Add",
                      description:
                        "Button in the My schools card header that starts a chat to add schools to College Plan",
                    }),
                  ],
                })),
            (S[10] = F),
            (S[11] = o))
          : (o = S[11]),
        S[12] !== Z || S[13] !== X || S[14] !== Y || S[15] !== l || S[16] !== o
          ? ((n = (0, a.jsx)(C.$, {
              color: Y,
              size: "detailAction",
              radius: "full",
              disabled: Z,
              "aria-label": l,
              onClick: X,
              children: o,
            })),
            (S[12] = Z),
            (S[13] = X),
            (S[14] = Y),
            (S[15] = l),
            (S[16] = o),
            (S[17] = n))
          : (n = S[17]),
        S[18] !== W
          ? ((i =
              W &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, a.jsx)(p.A, {
                  id: "collegePlan.schools.researchError",
                  defaultMessage: "College Plan couldn’t start research. Try again.",
                  description: "Error starting the research request from Add schools",
                }),
              })),
            (S[18] = W),
            (S[19] = i))
          : (i = S[19]),
        S[20] !== n || S[21] !== i
          ? ((d = (0, a.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [n, i] })),
            (S[20] = n),
            (S[21] = i),
            (S[22] = d))
          : (d = S[22]))
      let K = d,
        J = F ? "rounded-2xl border border-dashed border-subtle" : void 0
      return (
        S[23] !== K || S[24] !== F || S[25] !== U
          ? ((v = F
              ? (0, a.jsx)(w.i, {
                  width: "wide",
                  icon: U ? (0, a.jsx)(A.I, { asset: r }) : (0, a.jsx)($.h, { faviconOrigin: null }),
                  title: (0, a.jsx)("h2", {
                    id: "college-schools-heading",
                    children: U
                      ? (0, a.jsx)(p.A, {
                          id: "collegePlan.schools.empty.title.savedProfile",
                          defaultMessage: "Your profile is saved. Ready to add schools?",
                          description:
                            "Heading in the College Plan empty schools card acknowledging at least one saved profile answer and inviting the student to add their first school. The profile may be partial.",
                        })
                      : (0, a.jsx)(p.A, {
                          id: "collegePlan.schools.empty.title",
                          defaultMessage: "Add schools you’re interested in",
                          description:
                            "Heading of the empty schools card on the College Plan Plan tab; invites students to choose their first school",
                        }),
                  }),
                  description: U
                    ? (0, a.jsx)(p.A, {
                        id: "collegePlan.schools.empty.description.savedProfile",
                        defaultMessage: "By adding schools, ChatGPT can help track deadlines, tasks, and next steps",
                        description:
                          "Supporting text in the College Plan empty schools card after profile answers are saved, explaining the benefit of adding schools.",
                      })
                    : (0, a.jsx)(p.A, {
                        id: "collegePlan.schools.empty.description",
                        defaultMessage: "ChatGPT can track deadlines, tasks, and next steps for you",
                        description:
                          "Supporting text in the empty schools card on College Plan, explaining what adding a school enables",
                      }),
                  actions: K,
                })
              : (0, a.jsx)(P.zU, {
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
                            children: (0, a.jsx)(p.A, {
                              id: "collegePlan.schools.title",
                              defaultMessage: "My schools",
                              description: "Heading for the student's saved schools on College Plan",
                            }),
                          }),
                          K,
                        ],
                      }),
                      (0, a.jsx)(H, {}),
                    ],
                  }),
                })),
            (S[23] = K),
            (S[24] = F),
            (S[25] = U),
            (S[26] = v))
          : (v = S[26]),
        S[27] !== J || S[28] !== v
          ? ((I = (0, a.jsx)("section", {
              id: "college-schools",
              className: J,
              "aria-labelledby": "college-schools-heading",
              tabIndex: -1,
              children: v,
            })),
            (S[27] = J),
            (S[28] = v),
            (S[29] = I))
          : (I = S[29]),
        I
      )
    }
    function O(e) {
      return 0 === e.schools.length
    }
    function H(e) {
      let t,
        l,
        o,
        n,
        i,
        r = (0, s.c)(18),
        { source: u } = e,
        h = void 0 !== u && u,
        {
          data: m,
          isPending: g,
          isError: f,
          isFetching: x,
          hasNextPage: y,
          refetch: v,
          fetchNextPage: b,
        } = (0, c.Ul)(G.f1)
      return (
        r[0] !== g ? ((t = g && (0, a.jsx)(I.y, {})), (r[0] = g), (r[1] = t)) : (t = r[1]),
        r[2] !== f || r[3] !== x || r[4] !== v
          ? ((l =
              f &&
              (0, a.jsxs)("div", {
                role: "alert",
                className: "flex flex-col items-start gap-2",
                children: [
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(p.A, {
                      id: "collegePlan.schools.readError",
                      defaultMessage: "Your schools couldn’t be refreshed",
                      description: "An error reading saved schools; any existing rows may be out of date",
                    }),
                  }),
                  (0, a.jsx)(C.$, {
                    color: "secondary",
                    disabled: x,
                    onClick: () => void v(),
                    children: (0, a.jsx)(p.A, {
                      id: "collegePlan.schools.retry",
                      defaultMessage: "Try again",
                      description: "Retry reading saved schools",
                    }),
                  }),
                ],
              })),
            (r[2] = f),
            (r[3] = x),
            (r[4] = v),
            (r[5] = l))
          : (l = r[5]),
        r[6] !== m || r[7] !== h
          ? ((o =
              m?.pages.some(R) &&
              (0, a.jsx)("ul", {
                className: (0, d.A)("divide-y divide-border-subtle", h && "border-b border-border-subtle"),
                children: m.pages
                  .flatMap(q)
                  .map((e) => (0, a.jsx)("li", { children: (0, a.jsx)(F, { school: e, source: h }) }, e.id)),
              })),
            (r[6] = m),
            (r[7] = h),
            (r[8] = o))
          : (o = r[8]),
        r[9] !== b || r[10] !== y || r[11] !== x
          ? ((n =
              y &&
              (0, a.jsx)(C.$, {
                color: "secondary",
                disabled: x,
                onClick: () => void b(),
                children: (0, a.jsx)(p.A, {
                  id: "collegePlan.schools.more",
                  defaultMessage: "Show more schools",
                  description: "Load the next page of saved schools",
                }),
              })),
            (r[9] = b),
            (r[10] = y),
            (r[11] = x),
            (r[12] = n))
          : (n = r[12]),
        r[13] !== t || r[14] !== l || r[15] !== o || r[16] !== n
          ? ((i = (0, a.jsxs)(a.Fragment, { children: [t, l, o, n] })),
            (r[13] = t),
            (r[14] = l),
            (r[15] = o),
            (r[16] = n),
            (r[17] = i))
          : (i = r[17]),
        i
      )
    }
    function q(e) {
      return e.schools
    }
    function R(e) {
      return e.schools.length > 0
    }
    function F(e) {
      let t,
        l,
        n,
        r,
        u,
        h,
        p,
        g = (0, s.c)(33),
        { school: f, source: x, readOnly: y } = e,
        b = void 0 !== x && x,
        k = void 0 !== y && y,
        j = (0, c.gh)(T.u),
        C = (0, m.zy)(),
        w = (0, m.RQ)(o.O3),
        P = b ? "sources" : "school_list"
      g[0] !== f.id || g[1] !== P
        ? ((t = { id: f.id, kind: "school", surface: P }), (g[0] = f.id), (g[1] = P), (g[2] = t))
        : (t = g[2])
      let I = t
      g[3] !== k ||
      g[4] !== f.application_deadline ||
      g[5] !== f.completed_tasks ||
      g[6] !== f.favicon_origin ||
      g[7] !== f.name ||
      g[8] !== f.total_tasks ||
      g[9] !== b
        ? ((l = b
            ? (0, a.jsxs)("span", {
                className: "flex min-h-16 items-center gap-2.5 py-3 text-sm",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "flex size-10 shrink-0 items-center justify-center rounded-lg border border-default bg-surface text-secondary",
                    "aria-hidden": !0,
                    children: (0, a.jsx)(A.I, { asset: i }),
                  }),
                  (0, a.jsx)("span", {
                    className: "min-w-0 truncate font-medium text-default",
                    title: f.name,
                    children: f.name,
                  }),
                ],
              })
            : (0, a.jsxs)("span", {
                className: "flex items-start gap-4 py-4",
                children: [
                  (0, a.jsx)($.h, { faviconOrigin: f.favicon_origin }),
                  (0, a.jsxs)("span", {
                    className: "flex min-w-0 flex-1 flex-col gap-2",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "flex items-center gap-1 text-base",
                        children: [
                          (0, a.jsx)("span", { className: "break-words", children: f.name }),
                          !k && (0, a.jsx)(_.J6i, {}),
                        ],
                      }),
                      (0, a.jsx)(D, { completed: f.completed_tasks, total: f.total_tasks }),
                      null != f.application_deadline && (0, a.jsx)(S.a, { fact: f.application_deadline }),
                    ],
                  }),
                ],
              })),
          (g[3] = k),
          (g[4] = f.application_deadline),
          (g[5] = f.completed_tasks),
          (g[6] = f.favicon_origin),
          (g[7] = f.name),
          (g[8] = f.total_tasks),
          (g[9] = b),
          (g[10] = l))
        : (l = g[10])
      let N = l
      if (k) {
        let e
        return (g[11] !== N ? ((e = (0, a.jsx)("div", { children: N })), (g[11] = N), (g[12] = e)) : (e = g[12]), e)
      }
      let M = `college-school-${f.id}`
      g[13] !== I || g[14] !== j
        ? ((n = (e) => (0, v.zk)(j, e, I)), (g[13] = I), (g[14] = j), (g[15] = n))
        : (n = g[15])
      let G = `/college-plan/schools/${encodeURIComponent(f.id)}`,
        E = null == w
      g[16] !== I || g[17] !== j ? ((r = () => (0, v.j2)(j, I)), (g[16] = I), (g[17] = j), (g[18] = r)) : (r = g[18])
      let O = null != w ? C : C.state?.collegePlanHome,
        H = null != w ? `college-school-${f.id}` : C.state?.collegePlanTrigger
      g[19] !== O || g[20] !== H
        ? ((u = { collegePlanHome: O, collegePlanTrigger: H }), (g[19] = O), (g[20] = H), (g[21] = u))
        : (u = g[21])
      let q =
        b &&
        "cursor-interaction rounded-lg hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      return (
        g[22] !== q ? ((h = (0, d.A)("block select-none", q)), (g[22] = q), (g[23] = h)) : (h = g[23]),
        g[24] !== N ||
        g[25] !== r ||
        g[26] !== u ||
        g[27] !== h ||
        g[28] !== M ||
        g[29] !== n ||
        g[30] !== G ||
        g[31] !== E
          ? ((p = (0, a.jsx)(m.N_, {
              id: M,
              ref: n,
              to: G,
              replace: E,
              onClick: r,
              state: u,
              className: h,
              children: N,
            })),
            (g[24] = N),
            (g[25] = r),
            (g[26] = u),
            (g[27] = h),
            (g[28] = M),
            (g[29] = n),
            (g[30] = G),
            (g[31] = E),
            (g[32] = p))
          : (p = g[32]),
        p
      )
    }
    function D(e) {
      let t,
        l,
        o,
        n = (0, s.c)(13),
        { completed: i, total: r, prominent: c } = e,
        u = void 0 !== c && c,
        m = (0, h.A)()
      n[0] !== i || n[1] !== u || n[2] !== r
        ? ((t =
            0 === r
              ? (0, a.jsx)(p.A, {
                  id: "collegePlan.schools.noTasks",
                  defaultMessage: "No tasks yet",
                  description: "Saved school with an empty task list; this is not completion of an application",
                })
              : (0, a.jsx)(p.A, {
                  id: "collegePlan.schools.taskFraction",
                  defaultMessage: "<count>{completed, number}</count> / {total, plural, one {# task} other {# tasks}}",
                  values: {
                    completed: i,
                    total: r,
                    count: (e) =>
                      (0, a.jsx)(
                        "span",
                        { className: u ? "text-2xl font-semibold text-default" : void 0, children: e },
                        "count",
                      ),
                  },
                  description:
                    "Completed checklist task count over total tasks, not application submission; the count tag emphasizes the numerator",
                })),
          (n[0] = i),
          (n[1] = u),
          (n[2] = r),
          (n[3] = t))
        : (t = n[3])
      let g = t
      n[4] !== i || n[5] !== m || n[6] !== u || n[7] !== r
        ? ((l =
            r > 0 &&
            (0, a.jsx)("div", {
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": r,
              "aria-valuenow": i,
              "aria-label": m.formatMessage(
                {
                  id: "collegePlan.schools.taskProgress",
                  defaultMessage: "{completed} of {total, plural, one {# task} other {# tasks}} complete",
                  description:
                    "Saved task progress, not evidence of application submission; completed and total are integer task counts",
                },
                { completed: i, total: r },
              ),
              className: (0, d.A)("h-1.5 overflow-hidden rounded-full bg-text/10", u ? "shrink-0" : "flex-1"),
              children: (0, a.jsx)("div", {
                className: "h-full rounded-full bg-primary-solid",
                style: { width: `${0 === r ? 0 : (100 * i) / r}%` },
              }),
            })),
          (n[4] = i),
          (n[5] = m),
          (n[6] = u),
          (n[7] = r),
          (n[8] = l))
        : (l = n[8])
      let f = l
      return (
        n[9] !== f || n[10] !== g || n[11] !== u
          ? ((o = u
              ? (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [(0, a.jsx)("span", { className: "text-sm text-secondary", children: g }), f],
                })
              : (0, a.jsxs)("span", {
                  className: "flex items-center gap-4",
                  children: [f, (0, a.jsx)("span", { className: "shrink-0 text-sm text-secondary", children: g })],
                })),
            (n[9] = f),
            (n[10] = g),
            (n[11] = u),
            (n[12] = o))
          : (o = n[12]),
        o
      )
    }
  },
  XZh4(e, t, l) {
    var a = l("HY2m"),
      s = l("zTeN"),
      o = l("SPnB"),
      n = l("Ghh3"),
      i = l("bxvp"),
      r = l("hsIu"),
      d = l("vLsY"),
      c = l("OWtl"),
      u = l("GDNt"),
      h = l("Wl5X")
    let p = (0, s.$A)(c.u, ({ get: e }) => {
        let t = e(o.chatGptAuthenticatedAccountId$),
          l = e(o.chatGptAuthenticatedUserId$),
          a = e(r.pH).data?.plan_id
        return {
          queryKey: ["college-plan-schools", t, l, a],
          enabled: null != t && null != l && null != a && e(i.E$),
          initialPageParam: "",
          getNextPageParam: (e) => e.next_cursor,
          queryFn: ({ pageParam: e, signal: s }) => {
            if (null == t || null == l || null == a) throw Error("College Plan is unavailable")
            return n.Request.safeGet("/college-plan/schools", {
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
      m = (0, s.vU)(c.u, (e, { get: t }) => {
        let l = t(o.chatGptAuthenticatedAccountId$),
          a = t(o.chatGptAuthenticatedUserId$),
          s = t(r.pH).data?.plan_id
        return {
          queryKey: ["college-plan-school", l, a, s, e],
          enabled: null != l && null != a && null != s && t(i.E$),
          queryFn: ({ signal: t }) => {
            if (null == l || null == a || null == s) throw Error("College Plan is unavailable")
            return n.Request.safeGet("/college-plan/schools/{school_id}", {
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
      g = (0, s.c4)(c.u, (e, { get: t, scope: l }) => {
        let a = t(o.chatGptAuthenticatedAccountId$),
          s = t(o.chatGptAuthenticatedUserId$),
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
              l.get(o.chatGptAuthenticatedAccountId$) !== a ||
              l.get(o.chatGptAuthenticatedUserId$) !== s ||
              l.get(r.pH).data?.plan_id !== d ||
              !l.get(i.E$)
            )
              throw Error("College Plan changed before the task could be saved")
            let u = "string" == typeof e ? l.query.getOptions(m, e) : l.query.getOptions(h.r, e),
              p = l.queryClient.getQueryState(u.queryKey)
            if (p?.status !== "success" || p.isInvalidated || "idle" !== p.fetchStatus)
              throw Error("Refresh the task list before changing a task")
            let g =
              "string" == typeof e
                ? l.query.getData(m, e)?.items?.find(({ id: e }) => e === t.id)
                : l.query
                    .getData(h.r, e)
                    ?.pages.flatMap((e) => e.items)
                    .find(({ id: e }) => e === t.id)
            if (null == g || g.completed !== t.completed) throw Error("The task changed; review its saved state")
            try {
              await n.Request.safePatch("/college-plan/items/{item_id}", {
                parameters: { path: { item_id: t.id } },
                additionalHeaders: { "ChatGPT-Account-ID": a },
                expectedIdentity: { accountId: a, userId: s },
                retry: !1,
                requestBody: { completed: c },
              })
            } finally {
              await x(l, { accountId: a, userId: s, planId: d }, e)
            }
          },
        }
      }),
      f = (0, s.c4)(
        c.u,
        (e, { scope: t }) => {
          let l = () =>
            null != e.accountId &&
            null != e.userId &&
            null != e.planId &&
            t.get(o.chatGptAuthenticatedAccountId$) === e.accountId &&
            t.get(o.chatGptAuthenticatedUserId$) === e.userId &&
            t.query.getData(r.pH)?.plan_id === e.planId &&
            t.get(i.E$)
          return {
            mutationKey: ["college-plan-remove-school", e],
            retry: !1,
            networkMode: "always",
            mutationFn: async (s) => {
              if (!l() || null == e.accountId || null == e.userId) return
              let o = !1
              if ("remove" === s)
                try {
                  ;(await n.Request.safeDelete("/college-plan/schools/{school_id}", {
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
                if ((await t.query.cancel(m, e.schoolId, { exact: !0 }), !l())) return
                try {
                  return (await t.query.fetch(m, e.schoolId), { status: "present" })
                } catch (e) {
                  if (!(e instanceof u.fk) || 404 !== e.status) throw e
                }
              }
              let i = ["college-plan-school", e.accountId, e.userId, e.planId],
                r = ["college-plan-schools", "college-plan-timeline"].map((t) => [t, e.accountId, e.userId, e.planId]),
                c = [...r, i]
              for (let e of (await Promise.all(c.map((e) => t.queryClient.cancelQueries({ queryKey: e }))), r))
                for (let l of t.queryClient.getQueryCache().findAll({ queryKey: e })) l.reset()
              t.queryClient
                .getQueryCache()
                .find({ queryKey: [...i, e.schoolId], exact: !0 })
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
    async function x(e, { accountId: t, userId: l, planId: a }, s) {
      ;(await Promise.all([
        e.queryClient.resetQueries({ queryKey: ["college-plan-timeline", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-schools", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-school", t, l, a] }, { throwOnError: !0 }),
        e.queryClient.invalidateQueries({ queryKey: ["college-plan-task", t, l, a] }, { throwOnError: !0 }),
      ]),
        e.get(o.chatGptAuthenticatedAccountId$) === t &&
          e.get(o.chatGptAuthenticatedUserId$) === l &&
          e.get(r.pH).data?.plan_id === a &&
          ("string" == typeof s
            ? await e.queryClient.fetchQuery({ ...e.query.getOptions(m, s), staleTime: 0 })
            : await e.queryClient.fetchInfiniteQuery({ ...e.query.getOptions(h.r, s), staleTime: 0 })))
    }
    l.d(t, {}, { c: m, dF: g, f1: p, ls: x, ur: f })
  },
  GqkO(e, t, l) {
    l.d(t, { _e: () => U, Tp: () => W })
    var a = l("ABep"),
      s = l("QosV"),
      o = l("Q2iL")
    let n = (0, l("nkTT").a)({
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
    var i = l("on57"),
      r = l("zTeN"),
      d = l("zd8w"),
      c = l("Wf1j"),
      u = l("oyxz"),
      h = l("Qgfj"),
      p = l("qRqa"),
      m = l("SPnB"),
      g = l("Niy1"),
      f = l("hsIu"),
      x = l("ygO2"),
      y = l("Xpvt"),
      v = l("JNtf"),
      b = l("bqtn"),
      k = l("HOLv"),
      j = l("GO7r"),
      C = l("VL1D"),
      w = l("RNul"),
      A = l("OWtl"),
      _ = l("GDNt"),
      P = l("WbSP"),
      I = l("RdSt"),
      N = l("zlXx"),
      M = l("tEkl"),
      T = l("XZh4"),
      S = l("bxvp"),
      $ = l("mUDD"),
      G = l("SGsN"),
      E = l("soaw")
    function O(e) {
      let t,
        l,
        o,
        n,
        i,
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
      let [b] = (0, d.useState)(t),
        k = (0, d.useRef)(!1)
      h[3] !== b.accountId || h[4] !== b.planId || h[5] !== b.userId || h[6] !== y
        ? ((l = () =>
            null != b.accountId &&
            null != b.userId &&
            null != b.planId &&
            y.get(m.chatGptAuthenticatedAccountId$) === b.accountId &&
            y.get(m.chatGptAuthenticatedUserId$) === b.userId &&
            y.query.getData(f.pH)?.plan_id === b.planId &&
            y.get(S.E$)),
          (h[3] = b.accountId),
          (h[4] = b.planId),
          (h[5] = b.userId),
          (h[6] = y),
          (h[7] = l))
        : (l = h[7])
      let j = l,
        { isError: C, isPending: w, mutate: _, variables: P } = (0, r._U)(T.ur, b),
        I = C || (w && "check" === P)
      h[8] !== j || h[9] !== v || h[10] !== w || h[11] !== _ || h[12] !== g || h[13] !== x || h[14] !== y
        ? ((o = (e) => {
            !k.current &&
              !w &&
              v() &&
              j() &&
              ((k.current = !0),
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
                  k.current = !1
                },
              }))
          }),
          (h[8] = j),
          (h[9] = v),
          (h[10] = w),
          (h[11] = _),
          (h[12] = g),
          (h[13] = x),
          (h[14] = y),
          (h[15] = o))
        : (o = h[15])
      let N = o
      return (
        h[16] !== I || h[17] !== g || h[18] !== N
          ? ((n = () => {
              k.current || (I && N("check"), g())
            }),
            (h[16] = I),
            (h[17] = g),
            (h[18] = N),
            (h[19] = n))
          : (n = h[19]),
        h[20] !== I || h[21] !== N
          ? ((i = () => N(I ? "check" : "remove")), (h[20] = I), (h[21] = N), (h[22] = i))
          : (i = h[22]),
        h[23] !== w || h[24] !== I || h[25] !== p || h[26] !== n || h[27] !== i
          ? ((c = (0, a.jsx)(H, { school: p, pending: w, unconfirmed: I, onClose: n, onConfirm: i })),
            (h[23] = w),
            (h[24] = I),
            (h[25] = p),
            (h[26] = n),
            (h[27] = i),
            (h[28] = c))
          : (c = h[28]),
        c
      )
    }
    function H(e) {
      let t,
        l,
        o,
        n,
        i,
        r,
        d,
        c,
        h,
        p,
        m,
        g,
        f,
        y,
        b = (0, s.c)(38),
        { school: k, pending: j, unconfirmed: C, onClose: w, onConfirm: A } = e
      ;(b[0] !== k.id || b[1] !== C
        ? ((t = {
            onCloseAutoFocus: (e) => {
              e.preventDefault()
              let t = document.getElementById(`college-school-actions-${k.id}`)
              !C && t instanceof HTMLButtonElement && !t.disabled
                ? t.focus()
                : document.getElementById(`college-school-panel-${k.id}`)?.focus()
            },
          }),
          (b[0] = k.id),
          (b[1] = C),
          (b[2] = t))
        : (t = b[2]),
        b[3] !== w || b[4] !== j
          ? ((l = (e) => {
              e || j || w()
            }),
            (b[3] = w),
            (b[4] = j),
            (b[5] = l))
          : (l = b[5]),
        b[6] !== A || b[7] !== j
          ? ((o = (e) => {
              ;(e.preventDefault(), j || A())
            }),
            (b[6] = A),
            (b[7] = j),
            (b[8] = o))
          : (o = b[8]),
        b[9] !== k.name
          ? ((n = (0, a.jsx)($.OO, {
              children: (0, a.jsx)($.c7, {
                title: (0, a.jsx)(v.L3, {
                  className: "select-none",
                  children: (0, a.jsx)(u.A, {
                    id: "collegePlan.school.removal.title",
                    defaultMessage: "Remove {school} from your College Plan?",
                    values: { school: k.name },
                    description:
                      "Confirmation for permanently removing one saved school from College Plan, not the whole plan. school is the college or university name.",
                  }),
                }),
              }),
            })),
            (b[9] = k.name),
            (b[10] = n))
          : (n = b[10]),
        b[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(v.rr, {
              className: "select-none",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.removal.description.tasksAndDeadlines",
                defaultMessage: "This will also remove tasks and deadlines for this school from your plan.",
                description:
                  "Body of the school-removal confirmation in College Plan. Explains that the school's tasks and deadlines will leave the plan when the student confirms removal. Tasks shared with other schools remain linked to those schools.",
              }),
            })),
            (b[11] = i))
          : (i = b[11]),
        b[12] !== C
          ? ((r =
              C &&
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
            (b[12] = C),
            (b[13] = r))
          : (r = b[13]),
        b[14] !== r ? ((d = (0, a.jsxs)($.OO, { children: [i, r] })), (b[14] = r), (b[15] = d)) : (d = b[15]),
        b[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(u.A, {
              id: "collegePlan.school.removal.cancel",
              defaultMessage: "Cancel",
              description:
                "Dismisses school-removal confirmation without deleting; disabled while a request is pending",
            })),
            (b[16] = c))
          : (c = b[16]),
        b[17] !== w || b[18] !== j
          ? ((h = (0, a.jsx)(x.$, {
              type: "button",
              color: "outlineGhost",
              size: "formAction",
              radius: "full",
              disabled: j,
              onClick: w,
              children: c,
            })),
            (b[17] = w),
            (b[18] = j),
            (b[19] = h))
          : (h = b[19]))
      let _ = C ? "primary" : "dangerSolid"
      return (
        b[20] !== C
          ? ((p = C
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
            (b[20] = C),
            (b[21] = p))
          : (p = b[21]),
        b[22] !== j || b[23] !== _ || b[24] !== p
          ? ((m = (0, a.jsx)(x.$, {
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
            (b[25] = m))
          : (m = b[25]),
        b[26] !== m || b[27] !== h
          ? ((g = (0, a.jsx)($.OO, { children: (0, a.jsxs)($.Es, { children: [h, m] }) })),
            (b[26] = m),
            (b[27] = h),
            (b[28] = g))
          : (g = b[28]),
        b[29] !== g || b[30] !== o || b[31] !== n || b[32] !== d
          ? ((f = (0, a.jsxs)($.R4, { as: "form", size: "viewport", onSubmit: o, children: [n, d, g] })),
            (b[29] = g),
            (b[30] = o),
            (b[31] = n),
            (b[32] = d),
            (b[33] = f))
          : (f = b[33]),
        b[34] !== t || b[35] !== f || b[36] !== l
          ? ((y = (0, a.jsx)(v.lG, {
              open: !0,
              size: "compact",
              showDialogClose: !1,
              contentProps: t,
              onOpenChange: l,
              children: f,
            })),
            (b[34] = t),
            (b[35] = f),
            (b[36] = l),
            (b[37] = y))
          : (y = b[37]),
        y
      )
    }
    function q(e) {
      let t,
        l,
        o,
        n,
        i = (0, s.c)(13),
        { school: r } = e,
        { overview: d, admit_rate: c, estimated_annual_cost: p } = r
      return null == d && null == c && null == p
        ? null
        : (i[0] !== r.name
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
              (i[0] = r.name),
              (i[1] = t))
            : (t = i[1]),
          i[2] !== d || i[3] !== r.favicon_origin
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
              (i[2] = d),
              (i[3] = r.favicon_origin),
              (i[4] = l))
            : (l = i[4]),
          i[5] !== c || i[6] !== p || i[7] !== r.favicon_origin
            ? ((o =
                (null != c || null != p) &&
                (0, a.jsxs)("dl", {
                  className:
                    "grid grid-cols-1 gap-4 divide-y divide-border-subtle py-2 @xs:grid-cols-2 @xs:gap-6 @xs:divide-x @xs:divide-y-0",
                  children: [
                    null != c &&
                      (0, a.jsx)(R, {
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
                      (0, a.jsx)(R, {
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
              (i[5] = c),
              (i[6] = p),
              (i[7] = r.favicon_origin),
              (i[8] = o))
            : (o = i[8]),
          i[9] !== t || i[10] !== l || i[11] !== o
            ? ((n = (0, a.jsxs)("section", {
                className: "@container flex flex-col gap-4 border-t border-subtle pt-5",
                children: [t, l, o],
              })),
              (i[9] = t),
              (i[10] = l),
              (i[11] = o),
              (i[12] = n))
            : (n = i[12]),
          n)
    }
    function R(e) {
      let t,
        l,
        o,
        n,
        i,
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
          ? ((o = (0, a.jsx)("dd", {
              className: "text-sm break-words whitespace-pre-wrap text-secondary",
              children: c.text,
            })),
            (d[4] = c.text),
            (d[5] = o))
          : (o = d[5]),
        d[6] !== c.reporting_period
          ? ((n =
              null != c.reporting_period &&
              (0, a.jsx)("dd", { className: "text-sm break-words text-secondary", children: c.reporting_period })),
            (d[6] = c.reporting_period),
            (d[7] = n))
          : (n = d[7]),
        d[8] !== c.citations || d[9] !== u
          ? ((i = (0, a.jsx)("dd", { children: (0, a.jsx)(P.Z, { citations: c.citations, faviconOrigin: u }) })),
            (d[8] = c.citations),
            (d[9] = u),
            (d[10] = i))
          : (i = d[10]),
        d[11] !== t || d[12] !== l || d[13] !== o || d[14] !== n || d[15] !== i
          ? ((r = (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2 not-first:pt-4 @xs:not-first:ps-6 @xs:not-first:pt-0",
              children: [t, l, o, n, i],
            })),
            (d[11] = t),
            (d[12] = l),
            (d[13] = o),
            (d[14] = n),
            (d[15] = i),
            (d[16] = r))
          : (r = d[16]),
        r
      )
    }
    var F = l("Z41o"),
      D = l("pXr8")
    function U(e) {
      let t,
        l,
        o,
        n,
        i,
        c,
        u,
        h = (0, s.c)(38),
        { schoolId: p, onClose: g, onRemoved: x } = e,
        y = (0, r.Ul)(m.chatGptAuthenticatedAccountId$),
        v = (0, r.Ul)(m.chatGptAuthenticatedUserId$),
        b = (0, r.Ul)(f.pH).data?.plan_id
      h[0] !== y || h[1] !== b || h[2] !== p || h[3] !== v
        ? ((t = { accountId: y, userId: v, planId: b, schoolId: p }),
          (h[0] = y),
          (h[1] = b),
          (h[2] = p),
          (h[3] = v),
          (h[4] = t))
        : (t = h[4])
      let { isPending: k, isError: j, mutate: C, variables: w } = (0, r._U)(T.ur, t),
        A = !j && !(k && "check" === w)
      h[5] !== A ? ((l = { enabled: A }), (h[5] = A), (h[6] = l)) : (l = h[6])
      let {
          data: P,
          dataUpdatedAt: I,
          isPending: N,
          isFetching: M,
          isError: S,
          error: $,
          refetch: G,
        } = (0, r._U)(T.c, p, l),
        { mutateAsync: E, isPending: H, isError: q } = (0, r._U)(T.dF, p),
        R = (0, d.useRef)(!1),
        [D, U] = (0, d.useState)(null)
      h[7] !== C || h[8] !== G || h[9] !== j
        ? ((o = () => {
            j ? C("check") : G()
          }),
          (h[7] = C),
          (h[8] = G),
          (h[9] = j),
          (h[10] = o))
        : (o = h[10])
      let L = o,
        Z = S ? void 0 : P?.items,
        V = S || j ? L : void 0,
        W = M || k,
        Q = N || S || M || H || k || j
      return (
        h[11] !== P ||
        h[12] !== $ ||
        h[13] !== S ||
        h[14] !== M ||
        h[15] !== N ||
        h[16] !== k ||
        h[17] !== H ||
        h[18] !== E ||
        h[19] !== g ||
        h[20] !== L ||
        h[21] !== j ||
        h[22] !== q
          ? ((n = (e) =>
              (0, a.jsx)(B, {
                ...e,
                school: P,
                loading: N,
                failed: S || j,
                missing: $ instanceof _.fk && 404 === $.status,
                saving: H || k,
                saveFailed: q,
                refreshing: M || k,
                onRetry: L,
                onClose: g,
                onRemove: () => {
                  null == P || S || M || H || k || j || U(P)
                },
                onToggle: (e, t) => {
                  R.current ||
                    k ||
                    j ||
                    ((R.current = !0),
                    E({ item: e, completed: t })
                      .catch(z)
                      .finally(() => {
                        R.current = !1
                      }))
                },
              })),
            (h[11] = P),
            (h[12] = $),
            (h[13] = S),
            (h[14] = M),
            (h[15] = N),
            (h[16] = k),
            (h[17] = H),
            (h[18] = E),
            (h[19] = g),
            (h[20] = L),
            (h[21] = j),
            (h[22] = q),
            (h[23] = n))
          : (n = h[23]),
        h[24] !== I || h[25] !== p || h[26] !== Z || h[27] !== V || h[28] !== W || h[29] !== Q || h[30] !== n
          ? ((i = (0, a.jsx)(F.u, {
              source: p,
              items: Z,
              dataUpdatedAt: I,
              onRefresh: V,
              refreshing: W,
              disabled: Q,
              children: n,
            })),
            (h[24] = I),
            (h[25] = p),
            (h[26] = Z),
            (h[27] = V),
            (h[28] = W),
            (h[29] = Q),
            (h[30] = n),
            (h[31] = i))
          : (i = h[31]),
        h[32] !== x || h[33] !== D
          ? ((c = null != D && (0, a.jsx)(O, { school: D, onClose: () => U(null), onRemoved: x })),
            (h[32] = x),
            (h[33] = D),
            (h[34] = c))
          : (c = h[34]),
        h[35] !== i || h[36] !== c
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [i, c] })), (h[35] = i), (h[36] = c), (h[37] = u))
          : (u = h[37]),
        u
      )
    }
    function z() {}
    function B(e) {
      let t,
        l,
        o,
        n,
        i,
        r,
        h,
        m,
        g,
        f,
        y,
        k = (0, s.c)(44),
        {
          school: C,
          loading: A,
          failed: _,
          missing: P,
          saving: I,
          saveFailed: N,
          refreshing: M,
          onRetry: T,
          onClose: S,
          onRemove: $,
          onToggle: G,
          addTask: E,
          onCreateTask: O,
          onOpenTask: H,
          actionsOpen: q,
        } = e,
        R = (0, c.A)(),
        F = (0, d.useRef)(null),
        D = (0, d.useRef)(!1)
      ;(k[0] !== S
        ? ((t = (e) => {
            e || S()
          }),
          (k[0] = S),
          (k[1] = t))
        : (t = k[1]),
        k[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { asChild: !0, "aria-describedby": void 0, onInteractOutside: L }), (k[2] = l))
          : (l = k[2]))
      let U = null == C ? void 0 : `college-school-panel-${C.id}`
      return (
        k[3] !== q ||
        k[4] !== _ ||
        k[5] !== R ||
        k[6] !== A ||
        k[7] !== P ||
        k[8] !== O ||
        k[9] !== $ ||
        k[10] !== M ||
        k[11] !== I ||
        k[12] !== C
          ? ((o =
              null == C || P
                ? void 0
                : (0, a.jsxs)(b.Ab, {
                    align: "end",
                    open: q,
                    onCloseAutoFocus: (e) => {
                      D.current && (e.preventDefault(), (D.current = !1), O?.(F.current))
                    },
                    triggerButton: (0, a.jsx)(x.$, {
                      id: `college-school-actions-${C.id}`,
                      ref: F,
                      type: "button",
                      color: "ghost",
                      size: "icon",
                      disabled: A || _ || M || I,
                      "aria-label": R.formatMessage({
                        id: "collegePlan.school.actions",
                        defaultMessage: "School actions",
                        description: "Opens actions for the saved school in College Plan",
                      }),
                      children: (0, a.jsx)(j.e4G, {}),
                    }),
                    children: [
                      (0, a.jsx)(b.ms.Item, {
                        leftIcon: (0, a.jsx)(j.aRI, {}),
                        disabled: null == O || A || _ || M || I,
                        onSelect: () => {
                          D.current = !0
                        },
                        children: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.addTask",
                          defaultMessage: "Add new task",
                          description:
                            "First action in the saved-school menu in College Plan. Opens the new task editor with this school already linked; the other action removes the school.",
                        }),
                      }),
                      (0, a.jsx)(b.ms.Item, {
                        leftIcon: (0, a.jsx)(j.zwW, {}),
                        tone: "destructive",
                        onSelect: $,
                        children: (0, a.jsx)(u.A, {
                          id: "collegePlan.school.remove",
                          defaultMessage: "Remove school",
                          description: "Opens confirmation to remove only this saved school from College Plan",
                        }),
                      }),
                    ],
                  })),
            (k[3] = q),
            (k[4] = _),
            (k[5] = R),
            (k[6] = A),
            (k[7] = P),
            (k[8] = O),
            (k[9] = $),
            (k[10] = M),
            (k[11] = I),
            (k[12] = C),
            (k[13] = o))
          : (o = k[13]),
        k[14] !== R
          ? ((n = R.formatMessage({
              id: "collegePlan.school.close",
              defaultMessage: "Close school",
              description: "Closes the saved-school panel and returns to My schools",
            })),
            (k[14] = R),
            (k[15] = n))
          : (n = k[15]),
        k[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(v.L3, {
              className: "sr-only",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.details",
                defaultMessage: "School details",
                description: "Accessible title of the saved-school panel",
              }),
            })),
            (k[16] = i))
          : (i = k[16]),
        k[17] !== A ? ((r = A && (0, a.jsx)(w.y, {})), (k[17] = A), (k[18] = r)) : (r = k[18]),
        k[19] !== E ||
        k[20] !== _ ||
        k[21] !== P ||
        k[22] !== H ||
        k[23] !== T ||
        k[24] !== G ||
        k[25] !== M ||
        k[26] !== N ||
        k[27] !== I ||
        k[28] !== C
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
                            disabled: M,
                            onClick: T,
                            children: (0, a.jsx)(u.A, {
                              id: "collegePlan.school.retry",
                              defaultMessage: "Refresh school",
                              description: "Read saved school data again without repeating a task mutation",
                            }),
                          }),
                        ],
                      }),
                    N &&
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
                    null != C &&
                      (0, a.jsx)(Z, { school: C, disabled: _ || M || I, onToggle: G, addTask: E, onOpenTask: H }, C.id),
                  ],
                })),
            (k[19] = E),
            (k[20] = _),
            (k[21] = P),
            (k[22] = H),
            (k[23] = T),
            (k[24] = G),
            (k[25] = M),
            (k[26] = N),
            (k[27] = I),
            (k[28] = C),
            (k[29] = h))
          : (h = k[29]),
        k[30] !== r || k[31] !== h
          ? ((m = (0, a.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-panel",
              children: [i, r, h],
            })),
            (k[30] = r),
            (k[31] = h),
            (k[32] = m))
          : (m = k[32]),
        k[33] !== S || k[34] !== o || k[35] !== n || k[36] !== m
          ? ((g = (0, a.jsx)(p.JR, { actions: o, closeLabel: n, onClose: S, children: m })),
            (k[33] = S),
            (k[34] = o),
            (k[35] = n),
            (k[36] = m),
            (k[37] = g))
          : (g = k[37]),
        k[38] !== g || k[39] !== U
          ? ((f = (0, a.jsx)("div", { id: U, className: "h-full", tabIndex: -1, children: g })),
            (k[38] = g),
            (k[39] = U),
            (k[40] = f))
          : (f = k[40]),
        k[41] !== t || k[42] !== f
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
            (k[41] = t),
            (k[42] = f),
            (k[43] = y))
          : (y = k[43]),
        y
      )
    }
    function L(e) {
      return e.preventDefault()
    }
    function Z(e) {
      let t,
        l,
        o,
        n,
        i,
        h,
        p,
        m,
        f,
        y,
        v,
        k,
        C,
        w,
        _ = (0, s.c)(81),
        { school: T, disabled: S, onToggle: $, addTask: G, onOpenTask: E } = e,
        O = (0, r.gh)(A.u),
        H = (0, c.A)(),
        [R, F] = (0, d.useState)("all")
      if (
        _[0] !== S ||
        _[1] !== R ||
        _[2] !== H ||
        _[3] !== E ||
        _[4] !== $ ||
        _[5] !== T.application_deadline ||
        _[6] !== T.completed_tasks ||
        _[7] !== T.favicon_origin ||
        _[8] !== T.id ||
        _[9] !== T.items ||
        _[10] !== T.name ||
        _[11] !== T.total_tasks ||
        _[12] !== O
      ) {
        let e,
          s,
          r,
          d,
          c,
          y,
          v,
          k,
          C,
          w,
          A,
          G,
          q = T.items?.filter((e) => "all" === R || e.completed === ("completed" === R)).sort(V)
        ;(_[22] !== T.id || _[23] !== O
          ? ((e = (e) => (0, g.zk)(O, e, { id: T.id, kind: "school", surface: "school_detail" })),
            (_[22] = T.id),
            (_[23] = O),
            (_[24] = e))
          : (e = _[24]),
          _[25] !== T.name
            ? ((s = (0, a.jsx)("h2", { className: "text-xl font-semibold break-words", children: T.name })),
              (_[25] = T.name),
              (_[26] = s))
            : (s = _[26]),
          _[27] !== T.application_deadline || _[28] !== T.favicon_origin || _[29] !== T.id || _[30] !== O
            ? ((r =
                null != T.application_deadline &&
                (0, a.jsxs)("details", {
                  className: "text-sm text-secondary",
                  children: [
                    (0, a.jsx)("summary", {
                      className: "focus-visible:outline-auto cursor-interaction rounded-sm",
                      onClick: (e) => {
                        e.currentTarget.parentElement?.hasAttribute("open") ||
                          (0, g.j2)(O, { id: T.id, kind: "school", surface: "application_deadline" })
                      },
                      children: (0, a.jsx)(I.a, { fact: T.application_deadline, showYear: !0 }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2 pt-2",
                      children: [
                        (0, a.jsx)(I.$, { fact: T.application_deadline, schoolId: T.id }),
                        (0, a.jsx)(P.Z, {
                          citations: T.application_deadline.citations,
                          faviconOrigin: T.favicon_origin,
                        }),
                      ],
                    }),
                  ],
                })),
              (_[27] = T.application_deadline),
              (_[28] = T.favicon_origin),
              (_[29] = T.id),
              (_[30] = O),
              (_[31] = r))
            : (r = _[31]),
          _[32] !== s || _[33] !== r
            ? ((d = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [s, r] })),
              (_[32] = s),
              (_[33] = r),
              (_[34] = d))
            : (d = _[34]),
          _[35] !== T.favicon_origin
            ? ((c = (0, a.jsx)(N.h, { faviconOrigin: T.favicon_origin })), (_[35] = T.favicon_origin), (_[36] = c))
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
          (o = "flex flex-col gap-4"),
          _[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("h3", {
                className: "text-lg font-semibold",
                children: (0, a.jsx)(u.A, {
                  id: "collegePlan.school.progressTitle",
                  defaultMessage: "Application progress",
                  description:
                    "Saved tasks completed for this school; does not indicate that an application was submitted",
                }),
              })),
              (_[41] = n))
            : (n = _[41]),
          _[42] !== T.completed_tasks || _[43] !== T.total_tasks
            ? ((i = (0, a.jsx)(M.Ch, { completed: T.completed_tasks, total: T.total_tasks, prominent: !0 })),
              (_[42] = T.completed_tasks),
              (_[43] = T.total_tasks),
              (_[44] = i))
            : (i = _[44]),
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
        let D = Q[R]
        ;(_[48] !== D ? ((v = (0, a.jsx)(u.A, { ...D })), (_[48] = D), (_[49] = v)) : (v = _[49]),
          _[50] === Symbol.for("react.memo_cache_sentinel") ? ((k = (0, a.jsx)(j.HIf, {})), (_[50] = k)) : (k = _[50]),
          _[51] !== y || _[52] !== v
            ? ((C = (0, a.jsxs)(x.$, {
                color: "secondary",
                size: "detailAction",
                radius: "full",
                "aria-label": y,
                children: [v, k],
              })),
              (_[51] = y),
              (_[52] = v),
              (_[53] = C))
            : (C = _[53]),
          _[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = ["all", "in-progress", "completed"]), (_[54] = w))
            : (w = _[54]),
          _[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = w.map((e) =>
                (0, a.jsx)(
                  b.ms.RadioItem,
                  { value: e, onSelect: () => F(e), children: (0, a.jsx)(u.A, { ...Q[e] }) },
                  e,
                ),
              )),
              (_[55] = A))
            : (A = _[55]),
          _[56] !== R
            ? ((G = (0, a.jsx)(b.ms.RadioGroup, { value: R, children: A })), (_[56] = R), (_[57] = G))
            : (G = _[57]),
          _[58] !== C || _[59] !== G
            ? ((p = (0, a.jsx)("div", {
                className: "self-start",
                children: (0, a.jsx)(b.Ab, { triggerButton: C, children: G }),
              })),
              (_[58] = C),
              (_[59] = G),
              (_[60] = p))
            : (p = _[60]),
          (m =
            q?.length === 0 &&
            (T.items?.length ?? 0) > 0 &&
            (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "collegePlan.school.filter.empty",
                defaultMessage: "No tasks match this filter",
                description: "There are saved tasks, but none match the selected completion filter",
              }),
            })),
          (t = "flex flex-col gap-3"),
          (l = q?.map((e) =>
            (0, a.jsx)(
              "li",
              {
                children: (0, a.jsx)(W, {
                  item: e,
                  onOpen: null == E ? void 0 : (t) => E(e, t),
                  disabled: S,
                  onToggle: (t) => $(e, t),
                }),
              },
              e.id,
            ),
          )),
          (_[0] = S),
          (_[1] = R),
          (_[2] = H),
          (_[3] = E),
          (_[4] = $),
          (_[5] = T.application_deadline),
          (_[6] = T.completed_tasks),
          (_[7] = T.favicon_origin),
          (_[8] = T.id),
          (_[9] = T.items),
          (_[10] = T.name),
          (_[11] = T.total_tasks),
          (_[12] = O),
          (_[13] = t),
          (_[14] = l),
          (_[15] = o),
          (_[16] = n),
          (_[17] = i),
          (_[18] = h),
          (_[19] = p),
          (_[20] = m),
          (_[21] = f))
      } else
        ((t = _[13]),
          (l = _[14]),
          (o = _[15]),
          (n = _[16]),
          (i = _[17]),
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
        _[68] !== o ||
        _[69] !== n ||
        _[70] !== i ||
        _[71] !== h ||
        _[72] !== p ||
        _[73] !== m
          ? ((k = (0, a.jsxs)("section", { className: o, children: [n, i, h, p, m, y, v] })),
            (_[66] = y),
            (_[67] = v),
            (_[68] = o),
            (_[69] = n),
            (_[70] = i),
            (_[71] = h),
            (_[72] = p),
            (_[73] = m),
            (_[74] = k))
          : (k = _[74]),
        _[75] !== T ? ((C = (0, a.jsx)(q, { school: T })), (_[75] = T), (_[76] = C)) : (C = _[76]),
        _[77] !== k || _[78] !== C || _[79] !== f
          ? ((w = (0, a.jsxs)(a.Fragment, { children: [f, k, C] })), (_[77] = k), (_[78] = C), (_[79] = f), (_[80] = w))
          : (w = _[80]),
        w
      )
    }
    function V(e, t) {
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
        b,
        w = (0, s.c)(39),
        { item: _, disabled: P, onToggle: I, onOpen: N, onAction: M, compact: T, analyticsSurface: S } = e,
        $ = void 0 !== T && T,
        G = void 0 === S ? "school_tasks" : S,
        E = (0, r.gh)(A.u),
        O = (0, d.useId)(),
        H = (0, c.A)()
      ;(w[0] !== G || w[1] !== _.id || w[2] !== _.target_date || w[3] !== E
        ? ((t = (e) => (null == _.target_date ? void 0 : (0, g.zk)(E, e, { id: _.id, kind: "task", surface: G }))),
          (w[0] = G),
          (w[1] = _.id),
          (w[2] = _.target_date),
          (w[3] = E),
          (w[4] = t))
        : (t = w[4]),
        w[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(k.I, { asset: n, className: "shrink-0 text-tertiary" })), (w[5] = l))
          : (l = w[5]),
        w[6] !== G ||
        w[7] !== O ||
        w[8] !== _.completed ||
        w[9] !== _.id ||
        w[10] !== _.target_date ||
        w[11] !== _.title ||
        w[12] !== N ||
        w[13] !== E
          ? ((u =
              null == N
                ? (0, a.jsx)("span", {
                    id: O,
                    className: (0, i.A)("text-base break-words", _.completed && "text-tertiary line-through"),
                    children: _.title,
                  })
                : (0, a.jsx)("button", {
                    id: O,
                    type: "button",
                    onClick: (e) => {
                      ;(null != _.target_date && (0, g.j2)(E, { id: _.id, kind: "task", surface: G }),
                        N(e.currentTarget))
                    },
                    className: (0, i.A)(
                      "cursor-interaction text-start text-base break-words select-none focus-visible:outline-auto",
                      _.completed && "text-tertiary line-through",
                    ),
                    children: _.title,
                  })),
            (w[6] = G),
            (w[7] = O),
            (w[8] = _.completed),
            (w[9] = _.id),
            (w[10] = _.target_date),
            (w[11] = _.title),
            (w[12] = N),
            (w[13] = E),
            (w[14] = u))
          : (u = w[14]),
        w[15] !== _.target_date
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
            (w[15] = _.target_date),
            (w[16] = p))
          : (p = w[16]),
        w[17] !== u || w[18] !== p
          ? ((m = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [u, p] })),
            (w[17] = u),
            (w[18] = p),
            (w[19] = m))
          : (m = w[19]),
        w[20] !== P || w[21] !== _ || w[22] !== M || w[23] !== I
          ? ((f = null != M && null != I && (0, a.jsx)(D.a, { item: _, disabled: P, onAction: M, onToggle: I })),
            (w[20] = P),
            (w[21] = _),
            (w[22] = M),
            (w[23] = I),
            (w[24] = f))
          : (f = w[24]),
        w[25] !== P || w[26] !== O || w[27] !== H || w[28] !== _.completed || w[29] !== I
          ? ((x =
              null == I
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
                      ? (0, a.jsx)(j.jFD, {})
                      : (0, a.jsx)(k.I, { asset: o.n, className: "text-tertiary" }),
                  })
                : (0, a.jsx)(y.S, {
                    "aria-labelledby": O,
                    variant: "task",
                    checked: _.completed,
                    disabled: P,
                    onCheckedChange: I,
                  })),
            (w[25] = P),
            (w[26] = O),
            (w[27] = H),
            (w[28] = _.completed),
            (w[29] = I),
            (w[30] = x))
          : (x = w[30]),
        w[31] !== t || w[32] !== m || w[33] !== f || w[34] !== x
          ? ((v = (0, a.jsxs)("div", {
              ref: t,
              className: "group relative flex items-center gap-4 p-4",
              children: [l, m, f, x],
            })),
            (w[31] = t),
            (w[32] = m),
            (w[33] = f),
            (w[34] = x),
            (w[35] = v))
          : (v = w[35]))
      let q = v
      return (
        w[36] !== $ || w[37] !== q
          ? ((b = $ ? q : (0, a.jsx)(C.zU, { variant: "artifact-list", children: q })),
            (w[36] = $),
            (w[37] = q),
            (w[38] = b))
          : (b = w[38]),
        b
      )
    }
    let Q = (0, h.YK)({
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
      o = l("zTeN"),
      n = l("zd8w"),
      i = l("oyxz"),
      r = l("SPnB"),
      d = l("bxvp"),
      c = l("hsIu"),
      u = l("ygO2"),
      h = l("GO7r"),
      p = l("Kh43"),
      m = l("ULZ9"),
      g = l("on57"),
      f = l("Wf1j"),
      x = l("Qgfj"),
      y = l("Niy1"),
      v = l("JNtf"),
      b = l("mUDD"),
      k = l("zLIa"),
      j = l("OWtl"),
      C = l("a6Zv"),
      w = l("WbSP")
    function A(e) {
      let t,
        l,
        r,
        d,
        c,
        A,
        _,
        P,
        I,
        N,
        M,
        T,
        S,
        $,
        G,
        E,
        O,
        H,
        q,
        R,
        F,
        D,
        U,
        z,
        B,
        L,
        Z,
        V,
        W,
        Q,
        X = (0, s.c)(129),
        {
          intent: Y,
          schoolId: K,
          disabled: J,
          pending: ee,
          unconfirmed: et,
          onRefresh: el,
          refreshing: ea,
          onClose: es,
          onReturnFocus: eo,
          onSubmit: en,
        } = e,
        ei = void 0 !== J && J,
        er = void 0 !== ea && ea,
        ed = (0, o.gh)(j.u),
        [ec] = (0, n.useState)(Y),
        [eu, eh] = (0, n.useState)("view" !== Y.type || ei ? Y.type : "edit")
      "view" !== eu || ei || eh("edit")
      let ep = "create" === ec.type ? null : ec.item,
        [em, eg] = (0, n.useState)(ep?.title ?? ""),
        [ef, ex] = (0, n.useState)(ep?.details ?? ""),
        [ey, ev] = (0, n.useState)(ep?.target_date ?? null),
        [eb, ek] = (0, n.useState)(null),
        ej = (0, C.Y)(),
        eC = (0, f.A)(),
        ew = (0, n.useId)(),
        eA = ei || ee || et
      X[0] !== em ? ((t = Array.from(em.trim())), (X[0] = em), (X[1] = t)) : (t = X[1])
      let e_ = t.length > 300
      X[2] !== ef ? ((l = Array.from(ef)), (X[2] = ef), (X[3] = l)) : (l = X[3])
      let eP = l.length > 4e3
      X[4] !== eP || X[5] !== em || X[6] !== e_
        ? ((r = !!em.trim() && !e_ && !eP), (X[4] = eP), (X[5] = em), (X[6] = e_), (X[7] = r))
        : (r = X[7])
      let eI = r
      X[8] !== ef ? ((d = ef.trim() ? ef : null), (X[8] = ef), (X[9] = d)) : (d = X[9])
      let eN = d
      X[10] !== ey || X[11] !== ep || X[12] !== eN || X[13] !== em
        ? ((c = null == ep || em.trim() !== ep.title || eN !== (ep.details ?? null) || ey !== (ep.target_date ?? null)),
          (X[10] = ey),
          (X[11] = ep),
          (X[12] = eN),
          (X[13] = em),
          (X[14] = c))
        : (c = X[14])
      let eM = c,
        eT = "create" !== Y.type && !!Y.item.completed,
        eS = eb ?? void 0,
        e$ = "create" === eu || "edit" === eu ? "xwide" : "medium",
        eG = !ee
      X[15] !== es || X[16] !== ee
        ? ((A = (e) => {
            e || ee || es()
          }),
          (X[15] = es),
          (X[16] = ee),
          (X[17] = A))
        : (A = X[17])
      let eE = "delete" === eu ? `${ew}-description` : void 0
      ;(X[18] !== eo
        ? ((_ = (e) => {
            eo && (e.preventDefault(), eo())
          }),
          (X[18] = eo),
          (X[19] = _))
        : (_ = X[19]),
        X[20] !== eE || X[21] !== _
          ? ((P = { "aria-describedby": eE, onCloseAutoFocus: _ }), (X[20] = eE), (X[21] = _), (X[22] = P))
          : (P = X[22]),
        X[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, g.A)("isolate", "body-mzA870")), (X[23] = I))
          : (I = X[23]))
      let eO = ej ? "dark" : "light"
      X[24] !== eM ||
      X[25] !== ey ||
      X[26] !== ep ||
      X[27] !== eA ||
      X[28] !== eu ||
      X[29] !== eN ||
      X[30] !== en ||
      X[31] !== K ||
      X[32] !== em ||
      X[33] !== eI
        ? ((N = (e) => {
            if ((e.preventDefault(), eA || "view" === eu)) return
            if ("delete" === eu && null != ep) return void en({ type: "delete", id: ep.id })
            if (!eI || !eM) return
            if ("create" === eu)
              return void en({
                type: "create",
                body: { title: em.trim(), details: eN, target_date: ey, school_ids: null == K ? [] : [K] },
              })
            if (null == ep) return
            let t = {}
            ;(em.trim() !== ep.title && (t.title = em.trim()),
              eN !== (ep.details ?? null) && (t.details = eN),
              ey !== (ep.target_date ?? null) && (t.target_date = ey),
              en({ type: "edit", id: ep.id, body: t }))
          }),
          (X[24] = eM),
          (X[25] = ey),
          (X[26] = ep),
          (X[27] = eA),
          (X[28] = eu),
          (X[29] = eN),
          (X[30] = en),
          (X[31] = K),
          (X[32] = em),
          (X[33] = eI),
          (X[34] = N))
        : (N = X[34])
      let eH = "view" === eu && ep?.title
      ;(X[35] !== eu
        ? ((M =
            "create" === eu &&
            (0, a.jsx)(i.A, {
              id: "collegePlan.task.add",
              defaultMessage: "Add task",
              description:
                "Opens the dialog to create a task in College Plan; from a school panel the task is linked to that school",
            })),
          (X[35] = eu),
          (X[36] = M))
        : (M = X[36]),
        X[37] !== eu
          ? ((T =
              "edit" === eu &&
              (0, a.jsx)(i.A, {
                id: "collegePlan.task.detailsTitle",
                defaultMessage: "Task details",
                description: "Heading of the form for editing a saved College Plan task",
              })),
            (X[37] = eu),
            (X[38] = T))
          : (T = X[38]),
        X[39] !== eu
          ? ((S =
              "delete" === eu &&
              (0, a.jsx)(i.A, {
                id: "collegePlan.task.deleteTitle",
                defaultMessage: "Delete task?",
                description: "Confirmation title before removing a saved College Plan task",
              })),
            (X[39] = eu),
            (X[40] = S))
          : (S = X[40]),
        X[41] !== eH || X[42] !== M || X[43] !== T || X[44] !== S
          ? (($ = (0, a.jsx)(b.c7, {
              titleClassName: "heading-qB88tZ",
              title: (0, a.jsxs)(v.L3, { className: "select-none", children: [eH, M, T, S] }),
            })),
            (X[41] = eH),
            (X[42] = M),
            (X[43] = T),
            (X[44] = S),
            (X[45] = $))
          : ($ = X[45]),
        X[46] !== ep || X[47] !== eu || X[48] !== ed
          ? ((G = (e) =>
              ep?.target_date == null || "delete" === eu
                ? void 0
                : (0, y.zk)(ed, e, { id: ep.id, kind: "task", surface: "task_detail" })),
            (X[46] = ep),
            (X[47] = eu),
            (X[48] = ed),
            (X[49] = G))
          : (G = X[49]),
        X[50] !== ep || X[51] !== eu
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
                        ? (0, a.jsx)(i.A, {
                            id: "collegePlan.task.unknownDate",
                            defaultMessage: "No date saved",
                            description: "A task has no saved target date; do not infer a deadline",
                          })
                        : (0, a.jsx)(i.A, {
                            id: "collegePlan.task.targetDate",
                            defaultMessage: "Target date: {date}",
                            description: "Task target date as saved, which is not necessarily an application deadline",
                            values: {
                              date: (0, a.jsx)(x.XU, {
                                value: new Date(`${ep.target_date}T12:00:00Z`),
                                timeZone: "UTC",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }),
                            },
                          }),
                  }),
                  (0, a.jsx)(w.Z, { citations: ep.citations, schoolIds: ep.school_ids, modal: !0 }),
                ],
              })),
            (X[50] = ep),
            (X[51] = eu),
            (X[52] = E))
          : (E = X[52]),
        X[53] !== ew || X[54] !== ep?.title || X[55] !== eu
          ? ((O =
              "delete" === eu &&
              (0, a.jsx)(v.rr, {
                id: `${ew}-description`,
                children: (0, a.jsx)(i.A, {
                  id: "collegePlan.task.deleteDescription",
                  defaultMessage:
                    "Delete “{title}” from your plan and every school linked to it? This can’t be undone.",
                  description:
                    "Warns that deleting one shared College Plan task removes it from every linked school and the timeline; title is the task name",
                  values: { title: ep?.title },
                }),
              })),
            (X[53] = ew),
            (X[54] = ep?.title),
            (X[55] = eu),
            (X[56] = O))
          : (O = X[56]),
        X[57] !== ey ||
        X[58] !== ef ||
        X[59] !== eP ||
        X[60] !== ew ||
        X[61] !== eC ||
        X[62] !== ep ||
        X[63] !== eA ||
        X[64] !== eu ||
        X[65] !== em ||
        X[66] !== e_
          ? ((H =
              ("create" === eu || "edit" === eu) &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3 rounded-2xl border border-default p-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, g.A)("flex flex-col gap-2", "title-fWCEVA"),
                        children: [
                          (0, a.jsx)("label", {
                            className: "select-none",
                            htmlFor: `${ew}-title`,
                            children: (0, a.jsx)(i.A, {
                              id: "collegePlan.task.name",
                              defaultMessage: "Title",
                              description: "Label for the required task title in the College Plan add/edit task dialog",
                            }),
                          }),
                          (0, a.jsx)(k.pd, {
                            id: `${ew}-title`,
                            variant: "plain",
                            autoFocus: !0,
                            name: "title",
                            required: !0,
                            disabled: eA,
                            value: em,
                            "aria-invalid": e_,
                            "aria-describedby": e_ ? `${ew}-title-error` : void 0,
                            onChange: (e) => eg(e.target.value),
                          }),
                          e_ &&
                            (0, a.jsx)("span", {
                              id: `${ew}-title-error`,
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, a.jsx)(i.A, {
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
                        className: (0, g.A)("flex flex-col gap-2", "description-Hx5_p6"),
                        children: [
                          (0, a.jsx)("label", {
                            className: "select-none",
                            htmlFor: `${ew}-details`,
                            children: (0, a.jsx)(i.A, {
                              id: "collegePlan.task.description",
                              defaultMessage: "Description",
                              description: "Label for the optional multiline description of a College Plan task",
                            }),
                          }),
                          (0, a.jsx)(k.TM, {
                            id: `${ew}-details`,
                            variant: "plain",
                            rows: 1,
                            name: "details",
                            disabled: eA,
                            value: ef,
                            "aria-invalid": eP,
                            "aria-describedby": eP ? `${ew}-details-error` : void 0,
                            onChange: (e) => ex(e.target.value),
                          }),
                          eP &&
                            (0, a.jsx)("span", {
                              id: `${ew}-details-error`,
                              className: "text-sm text-danger",
                              role: "alert",
                              children: (0, a.jsx)(i.A, {
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
                            htmlFor: `${ew}-date`,
                            children: (0, a.jsx)(i.A, {
                              id: "collegePlan.task.date",
                              defaultMessage: "Due date",
                              description: "Label for the optional target date in the College Plan task editor",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, a.jsx)(p.l, {
                                id: `${ew}-date`,
                                variant: "ghost",
                                size: "2xl",
                                dropdownIconType: "none",
                                triggerClassName: "date-PjJarq",
                                locale: eC.locale,
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
                                placeholder: eC.formatMessage({
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
                                  "aria-label": eC.formatMessage({
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
                      className: (0, g.A)(
                        "flex flex-col gap-3 rounded-2xl border border-default p-4",
                        "sources-Irx4b2",
                      ),
                      "aria-labelledby": `${ew}-sources`,
                      children: [
                        (0, a.jsx)("h3", {
                          id: `${ew}-sources`,
                          className: "text-base leading-5.25 font-medium select-none",
                          children: (0, a.jsx)(i.A, {
                            id: "collegePlan.task.sources",
                            defaultMessage: "Sources",
                            description: "Heading above the saved, read-only source links for a College Plan task",
                          }),
                        }),
                        (0, a.jsx)(w.Z, {
                          citations: ep.citations,
                          schoolIds: ep.school_ids,
                          modal: !0,
                          variant: "list",
                        }),
                      ],
                    }),
                ],
              })),
            (X[57] = ey),
            (X[58] = ef),
            (X[59] = eP),
            (X[60] = ew),
            (X[61] = eC),
            (X[62] = ep),
            (X[63] = eA),
            (X[64] = eu),
            (X[65] = em),
            (X[66] = e_),
            (X[67] = H))
          : (H = X[67]),
        X[68] !== et
          ? ((q =
              et &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, a.jsx)(i.A, {
                  id: "collegePlan.task.unconfirmed",
                  defaultMessage:
                    "This request may have been saved. Close and review your refreshed tasks before making another change.",
                  description:
                    "The server write outcome could not be verified; the dialog prevents replay and directs the student to inspect saved tasks without claiming the write failed",
                }),
              })),
            (X[68] = et),
            (X[69] = q))
          : (q = X[69]),
        X[70] !== G || X[71] !== E || X[72] !== O || X[73] !== H || X[74] !== q
          ? ((R = (0, a.jsxs)("div", { ref: G, className: "flex flex-col gap-4 py-4", children: [E, O, H, q] })),
            (X[70] = G),
            (X[71] = E),
            (X[72] = O),
            (X[73] = H),
            (X[74] = q),
            (X[75] = R))
          : (R = X[75]),
        X[76] !== el || X[77] !== ee || X[78] !== er
          ? ((F =
              null != el &&
              (0, a.jsx)(u.$, {
                type: "button",
                color: "secondary",
                loading: er,
                disabled: ee || er,
                onClick: el,
                children: (0, a.jsx)(i.A, {
                  id: "collegePlan.task.refresh",
                  defaultMessage: "Refresh tasks",
                  description:
                    "Button in the College Plan task dialog to reread saved tasks after an unavailable read, keeping unsaved field edits and never repeating a task update",
                }),
              })),
            (X[76] = el),
            (X[77] = ee),
            (X[78] = er),
            (X[79] = F))
          : (F = X[79]),
        X[80] !== ec.type || X[81] !== eu || X[82] !== es || X[83] !== ee || X[84] !== et
          ? ((D =
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
                    (0, a.jsx)(i.A, {
                      id: "collegePlan.task.review",
                      defaultMessage: "Close and review tasks",
                      description:
                        "Closes an unconfirmed task change so the student can review the saved list before another action",
                    }),
                  !et &&
                    "view" === eu &&
                    (0, a.jsx)(i.A, {
                      id: "collegePlan.task.closeDetails",
                      defaultMessage: "Close",
                      description: "Closes read-only saved task details and returns focus to the task title",
                    }),
                  !et &&
                    "delete" === eu &&
                    (0, a.jsx)(i.A, {
                      id: "collegePlan.task.cancel",
                      defaultMessage: "Cancel",
                      description:
                        "Cancels task deletion in College Plan without sending a change; returns to any unsaved task edits, or closes a confirmation opened directly from the task menu",
                    }),
                ],
              })),
            (X[80] = ec.type),
            (X[81] = eu),
            (X[82] = es),
            (X[83] = ee),
            (X[84] = et),
            (X[85] = D))
          : (D = X[85]),
        X[86] !== ep || X[87] !== eA || X[88] !== eu || X[89] !== et
          ? ((U =
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
                children: (0, a.jsx)(i.A, {
                  id: "collegePlan.task.delete",
                  defaultMessage: "Delete task",
                  description: "Opens confirmation before removing a College Plan task from all linked views",
                }),
              })),
            (X[86] = ep),
            (X[87] = eA),
            (X[88] = eu),
            (X[89] = et),
            (X[90] = U))
          : (U = X[90]),
        X[91] !== eT || X[92] !== ep || X[93] !== eA || X[94] !== eu || X[95] !== en || X[96] !== et
          ? ((z =
              "edit" === eu &&
              null != ep &&
              !et &&
              (0, a.jsx)(u.$, {
                radius: "full",
                type: "button",
                color: "outlineGhost",
                disabled: eA,
                onClick: () => en({ type: "edit", id: ep.id, body: { completed: !eT } }),
                children: eT
                  ? (0, a.jsx)(i.A, {
                      id: "collegePlan.task.markIncomplete",
                      defaultMessage: "Mark as incomplete",
                      description:
                        "Marks a saved College Plan task incomplete immediately without saving other edits in the dialog",
                    })
                  : (0, a.jsx)(i.A, {
                      id: "collegePlan.task.markComplete",
                      defaultMessage: "Mark as complete",
                      description:
                        "Marks a saved College Plan task complete immediately without saving other edits in the dialog",
                    }),
              })),
            (X[91] = eT),
            (X[92] = ep),
            (X[93] = eA),
            (X[94] = eu),
            (X[95] = en),
            (X[96] = et),
            (X[97] = z))
          : (z = X[97]),
        X[98] !== eM || X[99] !== eA || X[100] !== eu || X[101] !== ee || X[102] !== et || X[103] !== eI
          ? ((B =
              !et &&
              "view" !== eu &&
              (0, a.jsx)(u.$, {
                radius: "full",
                type: "submit",
                color: "delete" === eu ? "danger" : "primary",
                loading: ee,
                disabled: eA || ("delete" !== eu && (!eI || !eM)),
                children:
                  "delete" === eu
                    ? (0, a.jsx)(i.A, {
                        id: "collegePlan.task.delete",
                        defaultMessage: "Delete task",
                        description: "Opens confirmation before removing a College Plan task from all linked views",
                      })
                    : (0, a.jsx)(i.A, {
                        id: "collegePlan.task.save",
                        defaultMessage: "Save",
                        description: "Saves the title, description, and date in the College Plan task form",
                      }),
              })),
            (X[98] = eM),
            (X[99] = eA),
            (X[100] = eu),
            (X[101] = ee),
            (X[102] = et),
            (X[103] = eI),
            (X[104] = B))
          : (B = X[104]),
        X[105] !== D || X[106] !== U || X[107] !== z || X[108] !== B
          ? ((L = (0, a.jsxs)(b.Es, { className: "footer-Fli1Fb", expandSingleButton: !1, children: [D, U, z, B] })),
            (X[105] = D),
            (X[106] = U),
            (X[107] = z),
            (X[108] = B),
            (X[109] = L))
          : (L = X[109]),
        X[110] !== eO || X[111] !== N || X[112] !== $ || X[113] !== R || X[114] !== F || X[115] !== L
          ? ((Z = (0, a.jsxs)(b.R4, {
              as: "form",
              size: "viewport",
              className: I,
              "data-theme": eO,
              onSubmit: N,
              children: [$, R, F, L],
            })),
            (X[110] = eO),
            (X[111] = N),
            (X[112] = $),
            (X[113] = R),
            (X[114] = F),
            (X[115] = L),
            (X[116] = Z))
          : (Z = X[116]))
      let eq = ej ? "dark" : "light"
      return (
        X[117] !== eq
          ? ((V = (0, a.jsx)("div", { ref: ek, "data-theme": eq })), (X[117] = eq), (X[118] = V))
          : (V = X[118]),
        X[119] !== eG || X[120] !== A || X[121] !== P || X[122] !== Z || X[123] !== V || X[124] !== e$
          ? ((W = (0, a.jsxs)(v.lG, {
              open: !0,
              variant: "opaque",
              size: e$,
              radius: "compact",
              dialogCloseClassName: "close-KpNty0",
              contentOverflow: "visible",
              showDialogClose: eG,
              onOpenChange: A,
              contentProps: P,
              children: [Z, V],
            })),
            (X[119] = eG),
            (X[120] = A),
            (X[121] = P),
            (X[122] = Z),
            (X[123] = V),
            (X[124] = e$),
            (X[125] = W))
          : (W = X[125]),
        X[126] !== W || X[127] !== eS
          ? ((Q = (0, a.jsx)(m.z, { radixPortalContainer: eS, children: W })),
            (X[126] = W),
            (X[127] = eS),
            (X[128] = Q))
          : (Q = X[128]),
        Q
      )
    }
    var _ = l("pXr8"),
      P = l("Ghh3"),
      I = l("XZh4"),
      N = l("zeuB")
    let M = (0, o.c4)(j.u, ({ accountId: e, userId: t, planId: l, source: a }, { scope: s }) => {
      let o = () =>
        s.get(r.chatGptAuthenticatedAccountId$) === e &&
        s.get(r.chatGptAuthenticatedUserId$) === t &&
        s.query.getData(c.pH)?.plan_id === l &&
        s.get(d.E$)
      return {
        mutationKey: ["college-plan-task-edit", e, t, l, a],
        retry: !1,
        networkMode: "always",
        mutationFn: async (n) => {
          if (null == e || null == t || null == l || !o()) return "stale"
          let i = { additionalHeaders: { "ChatGPT-Account-ID": e }, expectedIdentity: { accountId: e, userId: t } }
          try {
            return (
              "create" === n.type
                ? await P.Request.safePost("/college-plan/items", { ...i, retry: !1, requestBody: n.body })
                : "edit" === n.type
                  ? await P.Request.safePatch("/college-plan/items/{item_id}", {
                      ...i,
                      retry: !1,
                      parameters: { path: { item_id: n.id } },
                      requestBody: n.body,
                    })
                  : await P.Request.safeDelete("/college-plan/items/{item_id}", {
                      ...i,
                      retry: !1,
                      parameters: { path: { item_id: n.id } },
                    }),
              "saved"
            )
          } catch {
            if (!o()) return "stale"
            if ("create" === n.type) return "unconfirmed"
            try {
              if ((await s.query.cancel(N.H, n.id, { exact: !0 }), !o())) return "stale"
              let e = await s.queryClient.fetchQuery({ ...s.query.getOptions(N.H, n.id), staleTime: 0 })
              if (!o()) return "stale"
              if (null != e)
                return "edit" === n.type &&
                  (void 0 === n.body.title || e.title === n.body.title) &&
                  (void 0 === n.body.details || (e.details ?? null) === n.body.details) &&
                  (void 0 === n.body.target_date || (e.target_date ?? null) === n.body.target_date) &&
                  (void 0 === n.body.completed || e.completed === n.body.completed)
                  ? "saved"
                  : "unconfirmed"
              return "delete" === n.type ? "saved" : "unconfirmed"
            } catch {
              return o() ? "unconfirmed" : "stale"
            }
          } finally {
            await (0, I.ls)(s, { accountId: e, userId: t, planId: l }, a).catch(() => {})
          }
        },
      }
    })
    function T(e) {
      let t,
        l,
        n = (0, s.c)(17),
        { source: i, items: u, dataUpdatedAt: h, disabled: p, onRefresh: m, refreshing: g, children: f } = e,
        x = (0, o.Ul)(r.chatGptAuthenticatedAccountId$),
        y = (0, o.Ul)(r.chatGptAuthenticatedUserId$),
        { data: v } = (0, o.Ul)(c.pH),
        b = (0, o.Ul)(d.E$)
      n[0] !== x || n[1] !== b || n[2] !== v?.plan_id || n[3] !== y
        ? ((t = JSON.stringify([x, y, v?.plan_id, b])),
          (n[0] = x),
          (n[1] = b),
          (n[2] = v?.plan_id),
          (n[3] = y),
          (n[4] = t))
        : (t = n[4])
      let k = v?.plan_id,
        j = p || !b || null == x || null == y || null == v
      return (
        n[5] !== x ||
        n[6] !== f ||
        n[7] !== h ||
        n[8] !== u ||
        n[9] !== m ||
        n[10] !== g ||
        n[11] !== i ||
        n[12] !== t ||
        n[13] !== k ||
        n[14] !== j ||
        n[15] !== y
          ? ((l = (0, a.jsx)(
              S,
              {
                source: i,
                items: u,
                dataUpdatedAt: h,
                onRefresh: m,
                refreshing: g,
                accountId: x,
                userId: y,
                planId: k,
                disabled: j,
                children: f,
              },
              t,
            )),
            (n[5] = x),
            (n[6] = f),
            (n[7] = h),
            (n[8] = u),
            (n[9] = m),
            (n[10] = g),
            (n[11] = i),
            (n[12] = t),
            (n[13] = k),
            (n[14] = j),
            (n[15] = y),
            (n[16] = l))
          : (l = n[16]),
        l
      )
    }
    function S(e) {
      let t,
        l,
        r,
        d,
        c,
        p,
        m,
        g,
        f,
        x = (0, s.c)(47),
        {
          accountId: y,
          userId: v,
          planId: b,
          source: k,
          items: j,
          dataUpdatedAt: C,
          disabled: w,
          onRefresh: P,
          refreshing: I,
          children: T,
        } = e,
        [S, $] = (0, n.useState)(null)
      x[0] !== y || x[1] !== b || x[2] !== k || x[3] !== v
        ? ((t = { accountId: y, userId: v, planId: b, source: k }),
          (x[0] = y),
          (x[1] = b),
          (x[2] = k),
          (x[3] = v),
          (x[4] = t))
        : (t = x[4])
      let { mutateAsync: G, isPending: E } = (0, o._U)(M, t),
        [O, H] = (0, n.useState)(!1),
        q = null != S && "create" !== S.type ? S.item.id : void 0
      x[5] !== q || x[6] !== j
        ? ((l = j?.find((e) => {
            let { id: t } = e
            return t === q
          })),
          (x[5] = q),
          (x[6] = j),
          (x[7] = l))
        : (l = x[7])
      let R = l,
        F = null != q && null != j && null == R,
        D = F && !w && !E && !O
      x[8] !== D ? ((r = { enabled: D }), (x[8] = D), (x[9] = r)) : (r = x[9])
      let { data: U, dataUpdatedAt: z, isPending: B, isFetching: L, isError: Z, refetch: V } = (0, o._U)(N.H, q, r),
        W = F && (B || L || Z || null == U),
        Q = R ?? (F && !Z ? U : void 0),
        X = null != R ? C : z
      w || W || E || null == S || "create" === S.type || null == Q || X === S.readAt || $({ ...S, item: Q, readAt: X })
      let Y = (0, n.useRef)(!1),
        [K, J] = (0, n.useState)(null),
        ee = (0, n.useRef)(null)
      x[10] !== w || x[11] !== E
        ? ((d = (e) => {
            w || E || (J(e), H(!1), $({ type: "create" }))
          }),
          (x[10] = w),
          (x[11] = E),
          (x[12] = d))
        : (d = x[12])
      let et = d
      return (
        x[13] !== w || x[14] !== E || x[15] !== et || x[16] !== k
          ? ((c =
              "string" == typeof k
                ? (0, a.jsxs)(u.$, {
                    ref: ee,
                    type: "button",
                    color: "outlineSurface",
                    size: "detailAction",
                    radius: "full",
                    disabled: w || E,
                    onClick: () => et(ee.current),
                    children: [
                      (0, a.jsx)(h.ONy, {}),
                      (0, a.jsx)(i.A, {
                        id: "collegePlan.task.add",
                        defaultMessage: "Add task",
                        description:
                          "Opens the dialog to create a task in College Plan; from a school panel the task is linked to that school",
                      }),
                    ],
                  })
                : (0, a.jsx)(_.Y, { triggerRef: ee, disabled: w || E, onCreate: () => et(ee.current) })),
            (x[13] = w),
            (x[14] = E),
            (x[15] = et),
            (x[16] = k),
            (x[17] = c))
          : (c = x[17]),
        x[18] !== C || x[19] !== w || x[20] !== E
          ? ((p = (e, t, l) => {
              let a = void 0 === l ? "view" : l
              ;("view" !== a && (w || E)) || (J(t), H(!1), $({ type: a, item: e, readAt: C }))
            }),
            (x[18] = C),
            (x[19] = w),
            (x[20] = E),
            (x[21] = p))
          : (p = x[21]),
        x[22] !== T || x[23] !== et || x[24] !== c || x[25] !== p
          ? ((m = T({ addTask: c, onCreateTask: et, onOpenTask: p })),
            (x[22] = T),
            (x[23] = et),
            (x[24] = c),
            (x[25] = p),
            (x[26] = m))
          : (m = x[26]),
        x[27] !== S ||
        x[28] !== w ||
        x[29] !== L ||
        x[30] !== E ||
        x[31] !== G ||
        x[32] !== F ||
        x[33] !== P ||
        x[34] !== W ||
        x[35] !== Z ||
        x[36] !== B ||
        x[37] !== V ||
        x[38] !== I ||
        x[39] !== U ||
        x[40] !== k ||
        x[41] !== K ||
        x[42] !== O
          ? ((g =
              null != S &&
              (0, a.jsx)(A, {
                intent: S,
                schoolId: "string" == typeof k ? k : void 0,
                disabled: w || W,
                onRefresh: P ?? (F && (Z || (!B && null == U)) ? () => void V() : void 0),
                refreshing: I || L,
                pending: E,
                unconfirmed: O,
                onClose: () => $(null),
                onReturnFocus: () => {
                  let e = K?.isConnected ? K : (ee.current ?? document.getElementById("college-view-timeline"))
                  e?.focus()
                },
                onSubmit: (e) => {
                  w ||
                    W ||
                    Y.current ||
                    O ||
                    ((Y.current = !0),
                    G(e)
                      .then((t) => {
                        "unconfirmed" === t
                          ? H(!0)
                          : "saved" === t && "edit" === e.type && void 0 !== e.body.completed
                            ? $((t) =>
                                null != t && "create" !== t.type && t.item.id === e.id
                                  ? { ...t, item: { ...t.item, completed: e.body.completed } }
                                  : t,
                              )
                            : $(null)
                      })
                      .finally(() => {
                        Y.current = !1
                      }))
                },
              })),
            (x[27] = S),
            (x[28] = w),
            (x[29] = L),
            (x[30] = E),
            (x[31] = G),
            (x[32] = F),
            (x[33] = P),
            (x[34] = W),
            (x[35] = Z),
            (x[36] = B),
            (x[37] = V),
            (x[38] = I),
            (x[39] = U),
            (x[40] = k),
            (x[41] = K),
            (x[42] = O),
            (x[43] = g))
          : (g = x[43]),
        x[44] !== m || x[45] !== g
          ? ((f = (0, a.jsxs)(a.Fragment, { children: [m, g] })), (x[44] = m), (x[45] = g), (x[46] = f))
          : (f = x[46]),
        f
      )
    }
  },
  pXr8(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      o = l("zd8w"),
      n = l("Wf1j"),
      i = l("oyxz"),
      r = l("ygO2"),
      d = l("bqtn"),
      c = l("GO7r")
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
            { triggerRef: v, disabled: b, onCreate: k, open: j } = e,
            C = (0, n.A)(),
            w = (0, o.useRef)(!1)
          return (
            y[0] !== k
              ? ((t = (e) => {
                  w.current && (e.preventDefault(), (w.current = !1), k())
                }),
                (y[0] = k),
                (y[1] = t))
              : (t = y[1]),
            y[2] !== C
              ? ((l = C.formatMessage({
                  id: "collegePlan.timeline.actions",
                  defaultMessage: "Timeline actions",
                  description: "Opens the College Plan timeline header menu containing Add new task",
                })),
                (y[2] = C),
                (y[3] = l))
              : (l = y[3]),
            y[4] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, a.jsx)(c.e4G, {})), (y[4] = u)) : (u = y[4]),
            y[5] !== b || y[6] !== l || y[7] !== v
              ? ((h = (0, a.jsx)(r.$, {
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
              ? ((m = () => {
                  w.current = !0
                }),
                (g = (0, a.jsx)(i.A, {
                  id: "collegePlan.timeline.addTask",
                  defaultMessage: "Add new task",
                  description: "Menu item in the College Plan timeline header that opens the new task editor",
                })),
                (y[10] = m),
                (y[11] = g))
              : ((m = y[10]), (g = y[11])),
            y[12] !== b
              ? ((f = (0, a.jsx)(d.ms.Item, { leftIcon: p, disabled: b, onSelect: m, children: g })),
                (y[12] = b),
                (y[13] = f))
              : (f = y[13]),
            y[14] !== j || y[15] !== t || y[16] !== h || y[17] !== f
              ? ((x = (0, a.jsx)(d.Ab, { align: "end", open: j, onCloseAutoFocus: t, triggerButton: h, children: f })),
                (y[14] = j),
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
            b,
            k,
            j,
            C,
            w,
            A,
            _ = (0, s.c)(35),
            { item: P, disabled: I, onAction: N, onToggle: M, open: T } = e,
            S = (0, n.A)(),
            $ = (0, o.useRef)(null),
            G = (0, o.useRef)(null)
          return (
            _[0] !== N
              ? ((t = (e) => {
                  if (null != G.current && null != $.current) {
                    e.preventDefault()
                    let t = G.current
                    ;((G.current = null), N(t, $.current))
                  }
                }),
                (_[0] = N),
                (_[1] = t))
              : (t = _[1]),
            _[2] !== S || _[3] !== P.title
              ? ((l = S.formatMessage(
                  {
                    id: "collegePlan.task.actions",
                    defaultMessage: "Actions for {title}",
                    description:
                      "Accessible label for a College Plan task row menu with edit, complete or reopen, and delete actions; title is the saved task name",
                  },
                  { title: P.title },
                )),
                (_[2] = S),
                (_[3] = P.title),
                (_[4] = l))
              : (l = _[4]),
            _[5] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, a.jsx)(c.e4G, {})), (_[5] = u)) : (u = _[5]),
            _[6] !== l
              ? ((h = (0, a.jsx)(r.$, {
                  ref: $,
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
                (g = (0, a.jsx)(i.A, {
                  id: "collegePlan.task.menu.edit",
                  defaultMessage: "Edit",
                  description:
                    "Short task row menu action that opens the College Plan task name and date editor directly",
                })),
                (_[9] = m),
                (_[10] = g))
              : ((m = _[9]), (g = _[10])),
            _[11] !== I
              ? ((f = (0, a.jsx)(d.ms.Item, { leftIcon: p, disabled: I, onSelect: m, children: g })),
                (_[11] = I),
                (_[12] = f))
              : (f = _[12]),
            _[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, a.jsx)(c.gL9, {})), (_[13] = x))
              : (x = _[13]),
            _[14] !== P.completed || _[15] !== M
              ? ((y = () => M(!P.completed)), (_[14] = P.completed), (_[15] = M), (_[16] = y))
              : (y = _[16]),
            _[17] !== P.completed
              ? ((v = P.completed
                  ? (0, a.jsx)(i.A, {
                      id: "collegePlan.task.menu.incomplete",
                      defaultMessage: "Mark as incomplete",
                      description: "Task row menu action that reopens a completed College Plan task",
                    })
                  : (0, a.jsx)(i.A, {
                      id: "collegePlan.task.menu.complete",
                      defaultMessage: "Mark as complete",
                      description: "Task row menu action that marks an unfinished College Plan task complete",
                    })),
                (_[17] = P.completed),
                (_[18] = v))
              : (v = _[18]),
            _[19] !== I || _[20] !== y || _[21] !== v
              ? ((b = (0, a.jsx)(d.ms.Item, { leftIcon: x, disabled: I, onSelect: y, children: v })),
                (_[19] = I),
                (_[20] = y),
                (_[21] = v),
                (_[22] = b))
              : (b = _[22]),
            _[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = (0, a.jsx)(c.zwW, {})), (_[23] = k))
              : (k = _[23]),
            _[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = () => {
                  G.current = "delete"
                }),
                (C = (0, a.jsx)(i.A, {
                  id: "collegePlan.task.menu.delete",
                  defaultMessage: "Delete",
                  description:
                    "Destructive task row menu action that opens confirmation before removing a College Plan task from the plan and linked schools",
                })),
                (_[24] = j),
                (_[25] = C))
              : ((j = _[24]), (C = _[25])),
            _[26] !== I
              ? ((w = (0, a.jsx)(d.ms.Item, {
                  leftIcon: k,
                  tone: "destructive",
                  disabled: I,
                  onSelect: j,
                  children: C,
                })),
                (_[26] = I),
                (_[27] = w))
              : (w = _[27]),
            _[28] !== T || _[29] !== t || _[30] !== b || _[31] !== w || _[32] !== h || _[33] !== f
              ? ((A = (0, a.jsxs)(d.Ab, {
                  align: "end",
                  open: T,
                  onCloseAutoFocus: t,
                  triggerButton: h,
                  children: [f, b, w],
                })),
                (_[28] = T),
                (_[29] = t),
                (_[30] = b),
                (_[31] = w),
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
      o = l("zTeN"),
      n = l("SPnB"),
      i = l("Ghh3"),
      r = l("bxvp"),
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
        { isEqual: s() },
      ),
      p = (0, o.vU)(c.u, (e, { get: t, scope: l }) => {
        let a = t(n.chatGptAuthenticatedAccountId$),
          s = t(n.chatGptAuthenticatedUserId$),
          o = t(d.pH).data?.plan_id
        return {
          queryKey: ["college-plan-task", a, s, o, e],
          enabled: null != e && null != a && null != s && null != o && t(r.E$),
          queryFn: async ({ signal: t }) => {
            let c
            do {
              if (
                null == e ||
                null == a ||
                null == s ||
                null == o ||
                l.get(n.chatGptAuthenticatedAccountId$) !== a ||
                l.get(n.chatGptAuthenticatedUserId$) !== s ||
                l.get(d.pH).data?.plan_id !== o ||
                !l.get(r.E$)
              )
                throw Error("College Plan is unavailable")
              let u = await i.Request.safeGet("/college-plan/items", {
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
      o = l("Ghh3"),
      n = l("bxvp"),
      i = l("hsIu"),
      r = l("OWtl")
    let d = (0, a.N3)(r.u, ({ timezone: e, preview: t }, { get: l }) => {
      let a = l(s.chatGptAuthenticatedAccountId$),
        r = l(s.chatGptAuthenticatedUserId$),
        d = l(i.pH).data?.plan_id
      return {
        queryKey: ["college-plan-timeline", a, r, d, e, t],
        enabled: null != a && null != r && null != d && l(n.E$),
        initialPageParam: "",
        getNextPageParam: (e) => e.next_cursor,
        queryFn: ({ pageParam: l, signal: s }) => {
          if (null == a || null == r || null == d) throw Error("College Plan is unavailable")
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
            additionalHeaders: { "ChatGPT-Account-ID": a },
            expectedIdentity: { accountId: a, userId: r },
            signal: s,
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
      o = l("oP4q").f,
      n = a("unscopables"),
      i = Array.prototype
    ;(void 0 === i[n] && o(i, n, { configurable: !0, value: s(null) }),
      (e.exports = function (e) {
        i[n][e] = !0
      }))
  },
  uHOi(e, t, l) {
    var a = l("f6Go")
    e.exports = function (e, t, l) {
      for (var s = 0, o = arguments.length > 2 ? l : a(t), n = new e(o); o > s;) n[s] = t[s++]
      return n
    }
  },
  wAJj(e, t, l) {
    var a = l("OwA9"),
      s = l("EzAB"),
      o = l("fuV1"),
      n = l("f6Go"),
      i = function (e) {
        var t = 1 === e
        return function (l, i, r) {
          for (var d, c = o(l), u = s(c), h = n(u), p = a(i, r); h-- > 0;)
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
    e.exports = { findLast: i(0), findLastIndex: i(1) }
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
      o = function (e, t) {
        var l = e.length
        if (l < 8)
          for (var n, i, r = 1; r < l;) {
            for (i = r, n = e[r]; i && t(e[i - 1], n) > 0;) e[i] = e[--i]
            i !== r++ && (e[i] = n)
          }
        else
          for (
            var d = s(l / 2), c = o(a(e, 0, d), t), u = o(a(e, d), t), h = c.length, p = u.length, m = 0, g = 0;
            m < h || g < p;
          )
            e[m + g] = m < h && g < p ? (0 >= t(c[m], u[g]) ? c[m++] : u[g++]) : m < h ? c[m++] : u[g++]
        return e
      }
    e.exports = o
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
      o = l("XnQF")
    ;(a(
      { target: "Array", proto: !0 },
      {
        findLast: function (e) {
          return s(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
      },
    ),
      o("findLast"))
  },
  Y4C5(e, t, l) {
    var a = l("Ywrr"),
      s = l("lbJk"),
      o = l("dS6X"),
      n = l("fuV1"),
      i = l("f6Go"),
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
      b = c(function () {
        x.sort(void 0)
      }),
      k = c(function () {
        x.sort(null)
      }),
      j = h("sort"),
      C = !c(function () {
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
      { target: "Array", proto: !0, forced: b || !k || !j || !C },
      {
        sort: function (e) {
          void 0 !== e && o(e)
          var t,
            l,
            a = n(this)
          if (C) return void 0 === e ? y(a) : y(a, e)
          var s = [],
            c = i(a)
          for (l = 0; l < c; l++) l in a && v(s, a[l])
          for (
            u(s, function (t, l) {
              return void 0 === l ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, l) || 0 : d(t) > d(l) ? 1 : -1
            }),
              t = i(s),
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
      o = l("dS6X"),
      n = l("MV5a"),
      i = l("uHOi"),
      r = l("yUY1"),
      d = l("XnQF"),
      c = Array,
      u = s(r("Array", "sort"))
    ;(a(
      { target: "Array", proto: !0 },
      {
        toSorted: function (e) {
          return (void 0 !== e && o(e), u(i(c, n(this)), e))
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
  Q2iL(e, t, l) {
    let a = (0, l("nkTT").a)({
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
//# sourceMappingURL=362660.51356caa08.js.map
