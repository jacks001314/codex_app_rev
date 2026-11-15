export const __rspack_esm_ids = [310577]
export const __webpack_modules__ = {
  hxrb(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 716,
          height: 716,
          viewBox: "149 149 418 418",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z",
            fill: "currentColor",
          }),
        })))
  },
  SIrB(e, t, n) {
    let a = {
      document: ["document", "google-docs"],
      presentation: ["presentation", "google-slides"],
      spreadsheet: ["spreadsheet", "google-sheets"],
      site: ["site"],
    }
    function i(e) {
      return a[e]
    }
    n.d(
      t,
      {},
      {
        AH: function (e) {
          switch (e) {
            case "documents":
            case "documents-router":
            case "documents-router@openai-curated-remote":
            case "documents@openai-primary-runtime":
            case "connector_openai_documents":
            case "google-docs":
              return "document"
            case "presentations":
            case "presentations-router":
            case "presentations-router@openai-curated-remote":
            case "presentations@openai-primary-runtime":
            case "connector_openai_presentations":
            case "google-slides":
              return "presentation"
            case "spreadsheets":
            case "spreadsheets-router":
            case "spreadsheets-router@openai-curated-remote":
            case "spreadsheets@openai-primary-runtime":
            case "connector_openai_spreadsheets":
            case "google-sheets":
              return "spreadsheet"
            default:
              return null
          }
        },
        C$: function (e, t) {
          return e.filter((e) => t.includes(e.type))
        },
        IP: function (e, t) {
          let n = i(t),
            a = new Set()
          return e
            .filter(({ template: e, enabled: t }) => !(!t || !n.includes(e.type) || a.has(e.id)) && (a.add(e.id), !0))
            .toSorted((e, t) =>
              e.personal !== t.personal
                ? e.personal
                  ? -1
                  : 1
                : (e.personal && (t.template.createdAt ?? -1 / 0) - (e.template.createdAt ?? -1 / 0)) || 0,
            )
            .map(({ template: e }) => e)
        },
        K$: function e(t) {
          return "string" == typeof t ? "document" === t || "google-docs" === t : t.length > 0 && t.every(e)
        },
        Zk: function (e) {
          return Object.entries(a).find((t) => t[1].some((t) => t === e))?.[0] ?? null
        },
        qt: i,
      },
    )
  },
  IDma(e, t, n) {
    var a = n("SPnB")
    n.d(
      t,
      {},
      {
        t: function (e, t, n) {
          let i = e.get(a.PO)
          return (
            "chatgpt" === i.authMethod &&
            !i.authLoading &&
            !i.accountLoading &&
            i.accountId === t &&
            i.authenticatedAccountId === t &&
            i.userId === n
          )
        },
      },
    )
  },
  Eso4(e, t, n) {
    n.d(
      t,
      {},
      {
        Ee: [],
        p: function (e, t) {
          return t.some((t) => t.beaconId === e.beacon_id && t.containerId === e.ui_info.container_id)
        },
      },
    )
  },
  prHy(e, t, n) {
    var a = n("ASxG"),
      i = n("s4w7"),
      r = n("h6ff"),
      l = n("Eso4")
    let o = a.string().refine((e) => e.trim().length > 0, "Home tooltip title must not be blank"),
      s = a
        .string()
        .nullable()
        .optional()
        .transform((e) => e ?? null),
      c = {
        action_items: a.array(a.never()).length(0),
        beacon_name: a.string(),
        show_timing: a.enum(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
        type: a.literal("beacon_ui_response"),
      },
      d = a.union([
        a
          .object({
            ...c,
            beacon_id: a.literal("voice_mode_tooltip"),
            ui_info: a
              .object({
                subtitle: s,
                target: a.literal("composer-voice-button"),
                title: o,
                type: a.literal("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
        a
          .object({
            ...c,
            beacon_id: a.literal("tpp_nux_tooltip"),
            ui_info: a
              .object({
                subtitle: s,
                target: a.literal("tpp-surface-mode-toggle"),
                title: o,
                type: a.literal("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
      ]),
      u = a.union([d, i.E2]),
      p = a.union([r.Bw, u])
    n.d(
      t,
      {},
      {
        Bw: p,
        Yw: function (e, t) {
          let n = p.safeParse(e)
          if (n.success) return n.data
          let a = r.th.safeParse(e)
          return a.success && (0, l.p)(a.data, t) ? a.data : null
        },
        xU: function (e) {
          return u.safeParse(e).success
        },
      },
    )
  },
  VKqT(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("on57"),
      l = n("Sm6l"),
      o = n("zxZd")
    n.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            n,
            s,
            c,
            d,
            u,
            p = (0, i.c)(15)
          p[0] !== e
            ? (({ appearance: t, className: n, uniform: c, ...s } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = n),
              (p[3] = s),
              (p[4] = c))
            : ((t = p[1]), (n = p[2]), (s = p[3]), (c = p[4]))
          let m = "accent" === t ? "upgrade" : s.color
          p[5] !== t || p[6] !== n || p[7] !== c
            ? ((d = (0, r.A)(
                null != t && [
                  "gap-1 rounded-full",
                  "dismiss" === t || c ? o.A.dismissButton : o.A.action,
                  "primary" === t && o.A.primary,
                  "secondary" === t && o.A.secondary,
                ],
                n,
              )),
              (p[5] = t),
              (p[6] = n),
              (p[7] = c),
              (p[8] = d))
            : (d = p[8])
          let h = null != t && "accent" !== t
          return (
            p[9] !== s || p[10] !== m || p[11] !== d || p[12] !== h || p[13] !== c
              ? ((u = (0, a.jsx)(l.$, { ...s, color: m, className: d, unstyled: h, uniform: c })),
                (p[9] = s),
                (p[10] = m),
                (p[11] = d),
                (p[12] = h),
                (p[13] = c),
                (p[14] = u))
              : (u = p[14]),
            u
          )
        },
      },
    )
  },
  dFbl(e, t, n) {
    ;(n("Qiwg"),
      n.d(
        t,
        {},
        {
          sX: function (e, t) {
            let n =
              "prior_context_memory_plus_upsell_convo_beacon" === e.beacon_id
                ? "prior_context_memory_plus_upsell_convo_beacon_go"
                : e.beacon_id
            return [
              "go_plus_thinking_high_intent_banner",
              "imagegen_thinking_intent_upsell_banner_go",
              "prior_context_memory_plus_upsell_convo_beacon_go",
            ].includes(n) &&
              ("beacon_banner_info" === e.ui_info.type || "beacon_conversation_inline_info" === e.ui_info.type) &&
              "get_plus" === t.action_v2.action_enum &&
              null == t.action_v2.promo_campaign_id
              ? t.id === `${n}_rejoin_plus_direct_checkout` && "direct" === t.action_v2.checkout_mode
                ? "direct"
                : t.id === `${n}_rejoin_plus` && null == t.action_v2.checkout_mode
                  ? "pricing"
                  : null
              : null
          },
        },
      ))
  },
  AleY(e, t, n) {
    var a = n("zTeN"),
      i = n("ReGc"),
      r = n("OWtl"),
      l = n("OMIV")
    let o = (0, a.un)(r.u, ({ get: e }) =>
      e(i.a).data?.preloadAttribution?.partner === "lenovo" ? e(l.M9)?.getContext().user.customIDs?.stableID : void 0,
    )
    n.d(
      t,
      {},
      {
        f: o,
        s: function (e, t) {
          t && e.searchParams.set("lenovo_preload_installation_id", t)
        },
      },
    )
  },
  Nu9C(e, t, n) {
    n.d(
      t,
      {},
      {
        X: async function () {
          return (await n.e(538169).then(n.bind(n, "OXUS"))).PepperOnboardingAnnouncementHost
        },
        j: async function () {
          return (await n.e(26187).then(n.bind(n, "mimB"))).PepperOnboardingBeaconModal
        },
      },
    )
  },
  SRBo(e, t, n) {
    n.d(
      t,
      {},
      {
        Af: async function () {
          return (
            await Promise.all([
              n.e(753405),
              n.e(543449),
              n.e(702243),
              n.e(962887),
              n.e(380245),
              n.e(879504),
              n.e(561269),
              n.e(545788),
              n.e(941588),
              n.e(434505),
              n.e(393442),
              n.e(826176),
              n.e(250096),
              n.e(339190),
              n.e(426444),
              n.e(862994),
              n.e(597071),
              n.e(479440),
              n.e(511864),
              n.e(623068),
              n.e(933938),
            ]).then(n.bind(n, "QCmH"))
          ).TemplateGalleryPage
        },
        RR: async function () {
          return (
            await Promise.all([
              n.e(753405),
              n.e(648165),
              n.e(543449),
              n.e(702243),
              n.e(962887),
              n.e(380245),
              n.e(879504),
              n.e(561269),
              n.e(545788),
              n.e(941588),
              n.e(393442),
              n.e(826176),
              n.e(250096),
              n.e(339190),
              n.e(426444),
              n.e(597071),
              n.e(479440),
              n.e(511864),
              n.e(623068),
              n.e(500058),
              n.e(507040),
            ]).then(n.bind(n, "cbEE"))
          ).TemplateGalleryDialog
        },
        wr: async function () {
          return (await n.e(637509).then(n.bind(n, "hYKo"))).prefetchCreateDialog
        },
      },
    )
  },
  fALG(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("oyxz"),
      l = n("JNtf"),
      o = n("mUDD")
    n.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            n,
            s,
            c,
            d,
            u = (0, i.c)(11),
            { onClose: p, onCloseAutoFocus: m, children: h } = e
          return (
            u[0] !== p
              ? ((t = (e) => {
                  e || p()
                }),
                (u[0] = p),
                (u[1] = t))
              : (t = u[1]),
            u[2] !== m
              ? ((n = { onCloseAutoFocus: m, "aria-describedby": void 0, className: "@container/create-dialog" }),
                (u[2] = m),
                (u[3] = n))
              : (n = u[3]),
            u[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, a.jsx)(o.c7, {
                  className: "shrink-0 px-(--create-dialog-inset) pb-3 @min-[601px]/create-dialog:pb-6",
                  title: (0, a.jsx)(l.L3, {
                    children: (0, a.jsx)(r.A, {
                      id: "space.create.title",
                      defaultMessage: "Create",
                      description: "Title of the Space template picker",
                    }),
                  }),
                })),
                (u[4] = s))
              : (s = u[4]),
            u[5] !== h
              ? ((c = (0, a.jsxs)(o.R4, {
                  size: "full",
                  className:
                    "px-0 pt-[calc(var(--create-dialog-inset)_-_4px)] pb-0 [--create-dialog-inset:clamp(14px,3.2cqw,32px)]",
                  children: [s, h],
                })),
                (u[5] = h),
                (u[6] = c))
              : (c = u[6]),
            u[7] !== t || u[8] !== n || u[9] !== c
              ? ((d = (0, a.jsx)(l.lG, {
                  open: !0,
                  onOpenChange: t,
                  variant: "chatgpt",
                  size: "xxxwideTall",
                  contentProps: n,
                  children: c,
                })),
                (u[7] = t),
                (u[8] = n),
                (u[9] = c),
                (u[10] = d))
              : (d = u[10]),
            d
          )
        },
      },
    )
  },
  kv6U(e, t, n) {
    n.d(t, { TZ: () => g, k2: () => p, ZK: () => u, eJ: () => m, eA: () => h, kM: () => f, sm: () => d })
    var a = n.p + "assets/banner.3977412945.png",
      i = n.p + "assets/ceramics-hero.b982f09bd1.webp",
      r = n.p + "assets/desk-lamp-drawing.01806449aa.webp",
      l = n.p + "assets/intelligence-age.0f20816417.png",
      o = n.p + "assets/ridge-mug.4275e4e5a6.webp",
      s = n.p + "assets/river-pitcher.11f3b2ddb3.webp",
      c = n.p + "assets/stone-bowl.b70a5c51d5.webp"
    let d = a,
      u = i,
      p = r,
      m = l,
      h = o,
      f = s,
      g = c
  },
  I8SU(e, t, n) {
    var a = n("zTeN"),
      i = n("DBCl"),
      r = n("ASxG"),
      l = n("SkLA"),
      o = n("SPnB"),
      s = n("g2p6"),
      c = n("xjn7"),
      d = n("e1xH"),
      u = n("OWtl"),
      p = n("WFY2"),
      m = n("kpIY"),
      h = n("NRR1"),
      f = n("nndI"),
      g = n("SCmN"),
      y = n("Kw4a"),
      x = n("v5SL")
    let b = r.object({ [l.iI]: r.string() }),
      v = (0, a.bD)(u.u, (e) => !1),
      w = (0, a.bD)(u.u, (e) => !1),
      _ = (0, a.un)(u.u, ({ get: e }) => {
        let t = e(l.Df)
        return null != t && t.accountId === e(h.DO) ? t : null
      }),
      S = (0, a.un)(u.u, ({ get: e }) => {
        let t = e(_)
        return e(y.w) && null != t && !e(x.i2, t.key) && (e(l.f_, t.key) || e(w, t.key) || !1 === e(l.aJ))
      }),
      j = (0, a.un)(u.u, ({ get: e }) => {
        let t = e(g.jm)
        return null == t ||
          e(d.H6, "granola_presentation") ||
          null == e(l.aJ) ||
          !1 !== e(g.Aq) ||
          e(S) ||
          e(x.i2, t.key) ||
          "available" !== e(g.Dj, t.key) ||
          null == e(f.ax)[t.key] ||
          e(g.av, t.key)
          ? null
          : t.key
      })
    async function M(e) {
      let t = e.get(_)
      if (!e.get(y.w) || null == t || e.get(x.i2, t.key) || !0 !== e.get(l.zw)[t.key] || e.get(v, t.key)) return
      let a = new AbortController(),
        r = e.watch(({ get: e }) => {
          ;(e(_)?.key !== t.key || e(h.DO) !== t.accountId) && a.abort()
        }),
        o = e.query.snapshot(s.s6)
      e.set(v, t.key, !0)
      try {
        let { Request: e } = await Promise.resolve().then(n.bind(n, "Ghh3"))
        a.signal.throwIfAborted()
        let r = await e.safePost("/settings/announcement_viewed", {
          expectedIdentity: { accountId: t.accountId, userId: t.userId },
          additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [i.zBc]: t.accountId },
          parameters: { query: { announcement_id: l.iI } },
          signal: a.signal,
        })
        a.signal.throwIfAborted()
        let s = b.safeParse(r)
        if (!s.success) return
        ;((0, m.EG)(l.Ew, { entries: { [t.key]: { value: s.data[l.iI] } } }),
          await o.cancel(),
          o.setData((e) =>
            null == e ? e : { ...e, seenAnnouncements: { ...e.seenAnnouncements, [l.iI]: s.data[l.iI] } },
          ),
          null != o.getData() || a.signal.aborted || (await o.invalidate()))
      } catch {
        a.signal.aborted || p.v.warning("Failed to sync Space introduction viewed state")
      } finally {
        ;(r(), e.set(v, t.key, !1))
      }
    }
    n.d(
      t,
      {},
      {
        Tj: function (e, t) {
          let n = e.get(_)
          if (!(n?.key !== t || e.get(x.i2, t))) {
            if ((e.set(w, t, !1), !0 !== e.get(l.aJ))) {
              let a = (0, c.XS)({ accountId: n.accountId, userId: e.get(o.chatGptAuthenticatedUserId$) })
              ;(null != a && (0, c.pV)(e, a, { viewMode: "list" }),
                (0, m.EG)(l.Ew, { entries: { [t]: { value: !0 } } }))
            }
            M(e)
          }
        },
        cJ: j,
        kx: S,
        spaceIntroductionIdentity$: _,
        syncSpaceIntroductionSeen: M,
        vV: w,
      },
    )
  },
  C9Ga(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      heading: {
        id: "space.slideTemplates.heading",
        defaultMessage: "Slides",
        description: "Category heading and tab for native ChatGPT Slides templates",
      },
    })
    n.d(t, {}, { a: a })
  },
  Tn6I(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("SRBo"),
      l = n("QBk8"),
      o = n("Rxfy"),
      s = n("SIrB"),
      c = n("RB8A"),
      d = n("zTeN"),
      u = n("zd8w"),
      p = n("Wf1j"),
      m = n("BI6E"),
      h = n("IY5Q"),
      f = n("Bbed"),
      g = n("RNul"),
      y = n("e1xH"),
      x = n("yGJW"),
      b = n("OWtl"),
      v = n("hZax"),
      w = n("fALG"),
      _ = n("Kw4a"),
      S = n("jG6n"),
      j = n("dUuO"),
      M = n("o72y"),
      A = n("C9Ga"),
      C = n("N7ab")
    let I = ["document", "presentation", "spreadsheet"],
      N = (0, f._)(r.RR, {
        fallback: (e) => (0, a.jsx)(T, { ...e }),
        errorFallback: (e) => (0, a.jsx)(C.Z, { ...e, failed: !0 }),
      })
    function k(e) {
      let t,
        n,
        r,
        l,
        o,
        f,
        g,
        x = (0, i.c)(23),
        { onClose: b, onCloseAutoFocus: v, selectedGroupId: w, onGalleryGroupSelect: C } = e,
        N = (0, p.A)(),
        k = (0, d.Ul)(_.wu),
        T = (0, d._U)(y.H6, "granola_presentation"),
        L = (0, d.Ul)(S.ql),
        P = (0, d._U)(M.x5, "template-modal")
      x[0] !== N || x[1] !== L || x[2] !== k || x[3] !== P?.length
        ? ((t = (k && void 0 !== L && (0, j.l)(N, L?.value).length > 0) || (P?.length ?? 0) > 0),
          (x[0] = N),
          (x[1] = L),
          (x[2] = k),
          (x[3] = P?.length),
          (x[4] = t))
        : (t = x[4])
      let R = t,
        O = (0, u.useRef)(!1)
      ;(x[5] !== R || x[6] !== N || x[7] !== T
        ? ((n = [...(R ? ["page"] : []), ...(T ? ["slides", "spreadsheet"] : I)].map((e) => ({
            id: e,
            label: "slides" === e ? N.formatMessage(A.a.heading) : N.formatMessage(m.xs[e]),
            templateTypes: "slides" === e ? [] : (0, s.qt)("page" === e ? "document" : e),
            templates: { status: "loading" },
          }))),
          (x[5] = R),
          (x[6] = N),
          (x[7] = T),
          (x[8] = n))
        : (n = x[8]),
        x[9] !== b
          ? ((r = () => {
              ;((O.current = !0), b())
            }),
            (x[9] = b),
            (x[10] = r))
          : (r = x[10]),
        x[11] !== C || x[12] !== n || x[13] !== r
          ? ((l = { onGalleryGroupSelect: C, groups: n, onClose: r }),
            (x[11] = C),
            (x[12] = n),
            (x[13] = r),
            (x[14] = l))
          : (l = x[14]),
        x[15] !== w || x[16] !== l
          ? ((o = { selectedGroupId: w, config: l }), (x[15] = w), (x[16] = l), (x[17] = o))
          : (o = x[17]))
      let D = (0, c.yS)(o)
      return (
        x[18] !== v
          ? ((f = {
              onCloseAutoFocus: (e) => {
                O.current ? v?.(e) : e.preventDefault()
              },
            }),
            (x[18] = v),
            (x[19] = f))
          : (f = x[19]),
        x[20] !== D || x[21] !== f
          ? ((g = (0, a.jsx)(h.u, { children: (0, a.jsx)(c._Y, { open: !0, ...D, card: E, contentProps: f }) })),
            (x[20] = D),
            (x[21] = f),
            (x[22] = g))
          : (g = x[22]),
        g
      )
    }
    function E() {
      return null
    }
    function T(e) {
      let t,
        n = (0, i.c)(3),
        r = (0, v.Zj)("3531012613"),
        l = (0, u.useRef)(!1)
      return (
        n[0] !== r || n[1] !== e
          ? ((t = r
              ? (0, a.jsx)(w.t, {
                  ...e,
                  onClose: () => {
                    ;((l.current = !0), e.onClose())
                  },
                  onCloseAutoFocus: (t) => {
                    l.current ? e.onCloseAutoFocus?.(t) : t.preventDefault()
                  },
                  children: (0, a.jsx)("div", {
                    className: "flex min-h-0 flex-1 items-center justify-center",
                    children: (0, a.jsx)(g.y, {}),
                  }),
                })
              : (0, a.jsx)(k, { ...e })),
            (n[0] = r),
            (n[1] = e),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    n.d(
      t,
      {},
      {
        SpaceTemplateGalleryDialog: function (e) {
          let t,
            n,
            r,
            c = (0, i.c)(11),
            { initialGroupId: p, onApplyPageTemplate: m, onCloseAutoFocus: h, onClose: f } = e,
            g = (0, d.gh)(b.u)
          c[0] !== f || c[1] !== g
            ? ((t = () => {
                ;((0, x.yy)(g, l.CodexSpacesTemplateGallery, {
                  action: l.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CLOSED,
                }),
                  f())
              }),
              (c[0] = f),
              (c[1] = g),
              (c[2] = t))
            : (t = c[2])
          let v = t,
            w = (0, d._U)(y.H6, "granola_presentation"),
            [_, S] = (0, u.useState)(p ?? null),
            j = "presentation" === _ && w ? "slides" : _
          c[3] !== g
            ? ((n = (e) => {
                let t = (0, o.c)(e?.id ?? "")
                ;((0, x.yy)(g, l.CodexSpacesTemplateGallery, {
                  action: l.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CATEGORY_SELECTED,
                  category: e?.id === "page" || e?.id === "slides" ? e.id : ((t ? (0, s.Zk)(t) : "all") ?? void 0),
                }),
                  S(e?.id ?? null))
              }),
              (c[3] = g),
              (c[4] = n))
            : (n = c[4])
          let M = n
          return (
            c[5] !== m || c[6] !== v || c[7] !== h || c[8] !== M || c[9] !== j
              ? ((r = (0, a.jsx)(N, {
                  onApplyPageTemplate: m,
                  onClose: v,
                  onCloseAutoFocus: h,
                  selectedGroupId: j,
                  onGalleryGroupSelect: M,
                })),
                (c[5] = m),
                (c[6] = v),
                (c[7] = h),
                (c[8] = M),
                (c[9] = j),
                (c[10] = r))
              : (r = c[10]),
            r
          )
        },
      },
    )
  },
  N7ab(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("oyxz"),
      l = n("cZk2")
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            o,
            s = (0, i.c)(9),
            { onClose: c, onCloseAutoFocus: d, failed: u } = e,
            p = void 0 !== u && u
          return (
            s[0] !== c
              ? ((t = (e) => {
                  e || c()
                }),
                (s[0] = c),
                (s[1] = t))
              : (t = s[1]),
            s[2] !== p
              ? ((n = p
                  ? (0, a.jsx)(r.A, {
                      id: "space.gettingStarted.templatesLoadError",
                      defaultMessage: "Couldn’t open templates",
                      description: "Title when downloading the Space template gallery fails after retrying",
                    })
                  : (0, a.jsx)(r.A, {
                      id: "space.gettingStarted.templatesLoading",
                      defaultMessage: "Loading templates…",
                      description: "Title while downloading the dismissible Space template gallery dialog",
                    })),
                (s[2] = p),
                (s[3] = n))
              : (n = s[3]),
            s[4] !== p || s[5] !== d || s[6] !== t || s[7] !== n
              ? ((o = (0, a.jsx)(l.k, { open: !0, onCloseAutoFocus: d, onOpenChange: t, failed: p, title: n })),
                (s[4] = p),
                (s[5] = d),
                (s[6] = t),
                (s[7] = n),
                (s[8] = o))
              : (o = s[8]),
            o
          )
        },
      },
    )
  },
  dEO1(e, t, n) {
    n.d(t, { K: () => eN })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("zTeN"),
      l = n("zd8w"),
      o = n("HZfM"),
      s = n("SkLA"),
      c = n("jU86"),
      d = n("QoH2"),
      u = n("nlNF"),
      p = n("OWtl"),
      m = n("DV75"),
      h = n("Kw4a"),
      f = n("QBk8"),
      g = n("yGJW"),
      y = n("I8SU"),
      x = n("OM8g"),
      b = n("on57"),
      v = n("LIss"),
      w = n("Wf1j"),
      _ = n("oyxz"),
      S = n("Q2Qp"),
      j = n("wD9O"),
      M = n("Sm6l"),
      A = n("JNtf"),
      C = n("T1PX"),
      I = n("d1ji"),
      N = n("p5Yg"),
      k = n("hERv")
    function E(e) {
      let t = e.querySelector("[data-pointer-badge]")
      if (t?.dataset.pointerClientX == null || null == t.dataset.pointerClientY) return
      t.hidden = !1
      let n = e.getBoundingClientRect(),
        a = Number(t.dataset.pointerClientX),
        i = Number(t.dataset.pointerClientY)
      if (a < n.left || a >= n.right || i < n.top || i >= n.bottom) return void T(t)
      let r = Math.max(4, Math.min(e.clientWidth - t.offsetWidth - 4, ((a - n.left) * e.clientWidth) / n.width + 12)),
        l = Math.max(4, Math.min(e.clientHeight - t.offsetHeight - 4, ((i - n.top) * e.clientHeight) / n.height + 18))
      t.style.transform = `translate(${r}px, ${l}px)`
    }
    function T(e) {
      ;((e.hidden = !0), delete e.dataset.pointerClientX, delete e.dataset.pointerClientY)
    }
    let L = [
      [
        ["text", "pitch-title"],
        ["color", "pitch-paper"],
        ["text", "pitch-subtitle"],
        ["text", "pitch-tagline"],
      ],
      [
        ["text", "article-title"],
        ["image", "article-image"],
        ["text", "article-intro"],
      ],
      [
        ["products", "product-0"],
        ["text", "shop-name"],
        ["color", "shop-backdrop"],
        ["products", "product-2"],
      ],
      [
        ["text", "blueprint-width"],
        ["text", "blueprint-height"],
        ["text", "blueprint-name"],
      ],
    ]
    function P(e, t) {
      let n = e.querySelector(t)
      if (null == n) throw Error("Missing Space animation element: " + t)
      return n
    }
    function R(e, t, n) {
      e.style.getPropertyValue(t) !== n && e.style.setProperty(t, n)
    }
    function O(e) {
      return e * e * (3 - 2 * e)
    }
    function D(e) {
      return e >= 1 ? 1 : 1 - Math.exp(-8 * e) * (Math.cos(12 * e) + (2 / 3) * Math.sin(12 * e))
    }
    var G = "cornerProbe-zyllPh",
      z = "cursorLabel-iUYlbm"
    function B(e) {
      let t,
        n,
        r,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f = (0, i.c)(18),
        { moving: g, reduceMotion: y } = e,
        { locale: x } = (0, w.A)(),
        b = (0, l.useRef)(null),
        v = (0, l.useRef)(null)
      return (
        f[0] !== x
          ? ((t = () => {
              let e = b.current,
                t = e?.parentElement
              if (null == e || null == t) return
              let n = (function (e, t, n) {
                let a = P(e, "[data-work-samples]"),
                  i = Array.from(a.querySelectorAll("[data-work-sample]")).map((e) => ({
                    element: e,
                    document: P(e, "[data-artwork-document]"),
                    corners: Array.from(e.querySelectorAll("[data-corner-probe]")),
                    geometry: { tl: { x: 0, y: 0 }, tr: { x: 0, y: 0 }, bl: { x: 0, y: 0 }, center: { x: 0, y: 0 } },
                  })),
                  r = new Map(Array.from(a.querySelectorAll("[data-editable]")).map((e) => [e.dataset.editable, e])),
                  l = new Map(
                    Array.from(r.values()).map((e) => [e, e.querySelector("[data-editable-copy]")?.textContent ?? ""]),
                  ),
                  o = Array.from(t.querySelectorAll("[data-collaborator]")).map((e, t) => ({
                    element: e,
                    color: 0 === t ? "#60b4ff" : getComputedStyle(e).getPropertyValue("--cursor-color").trim(),
                    asset: 4 === t ? 1 : t % 4,
                    slot: +(4 === t),
                    phase: 1.7 * t,
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    offset: { x: 0, y: 0 },
                    trip: null,
                    job: null,
                    painted: null,
                    destination: null,
                    placement: 0,
                    nudge: null,
                    nudgeIndex: 0,
                    nextNudge: 1.5 + ((1.7 * t) % 2.3),
                  })),
                  s = new Intl.Segmenter(n, { granularity: "grapheme" }),
                  c = new Map(),
                  d = [0, 0, 0, 0],
                  u = o.slice(0, 4),
                  p = [],
                  m = 0,
                  h = 5.8,
                  f = 4,
                  g = 0,
                  y = 0,
                  x = 0,
                  b = !1,
                  v = e.getBoundingClientRect()
                function w(e) {
                  let t = r.get(e)
                  if (null == t) throw Error("Missing Space artwork field: " + e)
                  return t
                }
                function _(e) {
                  let t = S(e)
                  return { x: t.x + t.width, y: t.y + t.height }
                }
                function S(e) {
                  let t = e.getBoundingClientRect(),
                    n = y / (v.width || 1),
                    a = x / (v.height || 1)
                  return { x: (t.left - v.left) * n, y: (t.top - v.top) * a, width: t.width * n, height: t.height * a }
                }
                function j() {
                  for (let t of ((v = e.getBoundingClientRect()), i)) {
                    let [e, n, a] = t.corners.map(_)
                    t.geometry = { tl: e, tr: n, bl: a, center: { x: (n.x + a.x) / 2, y: (n.y + a.y) / 2 } }
                  }
                }
                function M(e) {
                  if (null != e.job) {
                    let t = _(e.job.pin)
                    if (e.job.text) {
                      let n = P(e.job.element, "[data-editable-copy]").getClientRects(),
                        a = n[n.length - 1]
                      null != a &&
                        (t = {
                          x: ((a.right - v.left) * y) / (v.width || 1),
                          y: ((a.bottom - v.top) * x) / (v.height || 1),
                        })
                    }
                    if (e.job.paletteReady && null != e.job.palette) {
                      let n = P(e.job.palette, "i:nth-child(2)").getBoundingClientRect()
                      t = {
                        x: ((n.left + n.width / 2 - v.left) * y) / (v.width || 1),
                        y: ((n.top + n.height / 2 - v.top) * x) / (v.height || 1),
                      }
                    }
                    return t
                  }
                  let { tl: t, tr: n, bl: a, center: r } = i[e.asset].geometry,
                    [l, o] = [
                      [1, 1],
                      [0, 0],
                      [0, 1],
                      [1, 0],
                      [1, 0.5],
                    ][e.slot],
                    s = t.x + (n.x - t.x) * l + (a.x - t.x) * o,
                    c = t.y + (n.y - t.y) * l + (a.y - t.y) * o,
                    d = r.x - s,
                    u = r.y - c,
                    p = Math.hypot(d, u) || 1
                  return { x: s + (d / p) * 13 + e.offset.x, y: c + (u / p) * 13 + e.offset.y }
                }
                function A(e, t) {
                  let n = M(e),
                    a = e.painted ?? e
                  ;((e.destination = null),
                    (e.trip = {
                      start: m,
                      x: a.x,
                      y: a.y,
                      duration: t ?? 0.38 + Math.min(0.62, Math.hypot(n.x - a.x, n.y - a.y) / 1700),
                    }))
                }
                function C(e, t) {
                  return e === o[0] || 1 === t || o.every((n) => n === e || n === o[0] || n.asset !== t)
                }
                function I(e, t, n) {
                  let a = o.filter((n) => n !== e && n.asset === t).map((e) => e.slot)
                  ;((e.asset = t), (e.slot = [0, 1, 2, 3, 4].find((e) => !a.includes(e)) ?? 0), A(e, n))
                }
                function N(e) {
                  ;((e.selected = !0),
                    (e.element.dataset.editing = "true"),
                    e.text && (e.element.dataset.selected = "true"))
                }
                function k(e, t, n = !1) {
                  let a,
                    r = L[e],
                    [o, m] = r[d[e]++ % r.length],
                    h = w(m),
                    f = i[e],
                    g = c.get(m) ?? 0
                  c.set(m, g + 1)
                  let y = 1,
                    x = null
                  switch (o) {
                    case "text": {
                      let e = P(h, "[data-editable-copy]"),
                        t = (g % 2 == 0 ? h.dataset.revision : l.get(h)) ?? "",
                        n = Array.from(s.segment(t), (e) => e.segment)
                      y = n.length > 40 ? 4.3 : n.length > 20 ? 3.5 : n.length > 12 ? 2.9 : 2.1
                      let i = 0,
                        r = n.map((e, t) => {
                          let n = 0.72 + ((7 * t) % 5) * 0.11
                          return (/\s/u.test(e) ? (n = 1.65) : /[.,]/u.test(e) && (n = 2.8), (i += n))
                        })
                      a = (t) => {
                        var a, l
                        let o,
                          s = 1 === t ? n.length : r.filter((e) => e / i <= t).length
                        ;((a = e),
                          (l = n.slice(0, s).join("")),
                          (o = a.firstChild) instanceof Text && null == o.nextSibling
                            ? o.data !== l && (o.data = l)
                            : a.textContent !== l && (a.textContent = l))
                      }
                      break
                    }
                    case "color": {
                      let t = f.document.style.getPropertyValue("--paper-color") || (0 === e ? "#ff5b35" : "#bfb8dc"),
                        n = 0 === e ? ["#ff784f", "#ff5b35"][g % 2] : ["#d9cfbd", "#bfb8dc"][g % 2]
                      ;((x = P(f.document, "[data-palette]")),
                        delete x.dataset.picked,
                        delete x.dataset.pressed,
                        Array.from(x.querySelectorAll("i")).forEach((e, a) => R(e, "--swatch", [t, n, "#cfc4f4"][a])),
                        (y = 0.8),
                        (a = (e) => {
                          let a =
                            "#" +
                            [1, 3, 5]
                              .map((a) => {
                                var i, r
                                return Math.round(
                                  ((i = parseInt(t.slice(a, a + 2), 16)),
                                  (r = parseInt(n.slice(a, a + 2), 16)),
                                  i + (r - i) * O(e)),
                                )
                                  .toString(16)
                                  .padStart(2, "0")
                              })
                              .join("")
                          R(f.document, "--paper-color", a)
                        }))
                      break
                    }
                    case "products": {
                      let e = [0, 1, 2].map((e) => w("product-" + e)),
                        t = e.map((e, t) => {
                          let n = e.style.translate
                          return "" === n ? 128 * t : parseFloat(n)
                        }),
                        n = Number(m.slice(-1)),
                        i = [0, 1, 2].sort((e, n) => t[e] - t[n]),
                        r = i.indexOf(n)
                      ;(i.splice(r, 1), i.splice(2 * (0 === r), 0, n))
                      let l = e.map((e, t) => 128 * i.indexOf(t))
                      ;((y = 1.65),
                        (a = (n) =>
                          e.forEach((e, a) => {
                            var i, r
                            return R(e, "translate", ((i = t[a]), (r = l[a]), i + (r - i) * D(n) + "px"))
                          })))
                      break
                    }
                    case "image": {
                      let e = P(h, "[data-artwork-image]"),
                        t = parseFloat(e.style.scale) || 1,
                        n = t > 1 ? 1 : 1.08
                      a = (a) => {
                        var i
                        R(e, "scale", String((i = t) + (n - i) * D(a)))
                      }
                    }
                  }
                  let b = {
                    asset: e,
                    person: t,
                    element: h,
                    pin: P(h, "[data-edit-pin]"),
                    palette: x,
                    paletteReady: !1,
                    age: 0,
                    duration: y,
                    selected: !1,
                    text: "text" === o,
                    apply: a,
                  }
                  ;(p.push(b),
                    (u[e] = t),
                    (t.asset = e),
                    (t.slot = 0),
                    (t.job = b),
                    (t.offset = { x: 0, y: 0 }),
                    (t.nudge = null),
                    (t.element.dataset.editing = "true"),
                    (h.dataset.editTarget = "true"),
                    h.style.setProperty("--editor", t.color),
                    A(t),
                    n && ((t.trip = null), (b.age = 0.24), N(b)))
                }
                function E(e, t = !0) {
                  ;(e.apply(1),
                    delete e.element.dataset.editing,
                    delete e.element.dataset.editTarget,
                    delete e.element.dataset.selected,
                    delete e.element.dataset.typing,
                    null != e.palette &&
                      (delete e.palette.dataset.open,
                      delete e.palette.dataset.picked,
                      delete e.palette.dataset.pressed),
                    p.splice(p.indexOf(e), 1))
                  let n = e.person
                  ;((n.job = null), (n.element.dataset.editing = "false"), t && I(n, n.asset, 0.48))
                }
                function T(e = !1) {
                  for (; p.length > 0;) E(p[0])
                  if (e) {
                    for (let e of o) ((e.trip = null), (e.nudge = null), (e.offset = { x: 0, y: 0 }))
                    z()
                  }
                }
                function G() {
                  for (let t of ((y = e.clientWidth),
                  (x = e.clientHeight),
                  (a.inert = b = y > 0 && (y <= 540 || x <= 460)),
                  o))
                    ((t.width = t.element.offsetWidth), (t.height = t.element.offsetHeight))
                  for (let e of i) {
                    let t =
                      (e.element.clientWidth / Number(e.document.dataset.documentWidth)) *
                      (parseFloat(getComputedStyle(P(e.element, "[data-drift]")).scale) || 1)
                    ;(R(e.document, "--selection-stroke", 1.15 / Math.max(0.1, t) + "px"),
                      R(e.document, "--handle-size", 4 / Math.max(0.1, t) + "px"))
                  }
                  b ? T(!0) : z()
                }
                function z() {
                  ;(j(), B(0, !0))
                }
                function B(e, t = !1) {
                  let n = p.flatMap((e) => [
                      S(e.element),
                      ...(e.paletteReady && null != e.palette ? [S(e.palette)] : []),
                    ]),
                    a = o.map((e) => ({ x: e.x, y: e.y, width: e.width, height: e.height })),
                    i = o.map(M)
                  o.forEach((r, l) => {
                    var o, s, c, d, u, p, h, f, g, b
                    let v = i[l],
                      w = (function ({
                        x: e,
                        y: t,
                        width: n,
                        height: a,
                        viewportWidth: i,
                        viewportHeight: r,
                        obstacles: l,
                        protectedRegions: o = [],
                        preferred: s,
                      }) {
                        let c = (e, t, i) =>
                            Math.max(0, Math.min(e + n, i.x + i.width) - Math.max(e, i.x)) *
                            Math.max(0, Math.min(t + a, i.y + i.height) - Math.max(t, i.y)),
                          d = [
                            [1, 1],
                            [-1, 1],
                            [1, -1],
                            [-1, -1],
                          ].map(([s, d], u) => {
                            let p = e + (s > 0 ? 8 : -n - 8),
                              m = t + (d > 0 ? 8 : -a - 8)
                            for (let e of o) {
                              if (0 === c(p, m, e)) continue
                              let t = s > 0 ? e.x + e.width + 8 : e.x - n - 8,
                                i = d > 0 ? e.y + e.height + 8 : e.y - a - 8
                              Math.abs(t - p) < Math.abs(i - m) ? (p = t) : (m = i)
                            }
                            return {
                              x: (p = Math.max(4, Math.min(i - n - 4, p))),
                              y: (m = Math.max(4, Math.min(r - a - 4, m))),
                              index: u,
                              protectedOverlap: o.reduce((e, t) => e + c(p, m, t), 0),
                              score:
                                0.15 * l.reduce((e, t) => e + c(p, m, t), 0) +
                                Math.hypot(p + (s > 0 ? 0 : n) - e, m + (d > 0 ? 0 : a) - t),
                            }
                          }),
                          u = d[s] ?? d[0]
                        for (let e of d)
                          (e.protectedOverlap < u.protectedOverlap - 1 ||
                            (e.protectedOverlap <= u.protectedOverlap && e.score + 80 < u.score)) &&
                            (u = e)
                        return { x: u.x, y: u.y, index: u.index }
                      })({
                        ...v,
                        width: r.width,
                        height: r.height,
                        viewportWidth: y,
                        viewportHeight: x,
                        obstacles: a.slice(0, l),
                        protectedRegions: n,
                        preferred: r.placement,
                      })
                    r.placement = w.index
                    let _ = 1 - Math.exp(-e / 0.09)
                    if (
                      (null == r.destination || t
                        ? (r.destination = w)
                        : (r.destination = {
                            x: ((o = r.destination.x), (s = w.x), o + (s - o) * _),
                            y: ((c = r.destination.y), (d = w.y), c + (d - c) * _),
                          }),
                      null == r.painted || t)
                    )
                      ((r.x = w.x), (r.y = w.y))
                    else if (null != r.trip) {
                      let e = Math.min(1, Math.max(0, (m - r.trip.start) / r.trip.duration)),
                        t = e ** 3 * (e * (6 * e - 15) + 10)
                      ;((u = r.trip.x),
                        (p = r.destination.x),
                        (r.x = u + (p - u) * t),
                        (h = r.trip.y),
                        (f = r.destination.y),
                        (r.y = h + (f - h) * t),
                        1 === e && ((r.trip = null), (r.nextNudge = m + 1.2 + (r.phase % 1.5))))
                    } else {
                      ;((g = r.x), (r.x = g + (w.x - g) * _), (b = r.y), (r.y = b + (w.y - b) * _))
                    }
                    r.painted = { x: r.x, y: r.y }
                    let S = (function (e, t, n = "top-left") {
                      let a = t.x - e.x - e.width / 2,
                        i = t.y - e.y - e.height / 2,
                        r = 6 > Math.abs(a) ? n.endsWith("right") : a > 0,
                        l = 6 > Math.abs(i) ? n.startsWith("bottom") : i > 0
                      return `${l ? "bottom" : "top"}-${r ? "right" : "left"}`
                    })({ ...r.painted, width: r.width, height: r.height }, v, r.element.dataset.pointerCorner)
                    ;(r.element.dataset.pointerCorner !== S && (r.element.dataset.pointerCorner = S),
                      R(r.element, "transform", `translate3d(${r.x}px, ${r.y}px, 0px)`))
                    let j = String(r.asset)
                    r.element.dataset.asset !== j && (r.element.dataset.asset = j)
                    let M = String(null != r.trip)
                    r.element.dataset.traveling !== M && (r.element.dataset.traveling = M)
                  })
                }
                G()
                let F = new ResizeObserver(G)
                return (
                  F.observe(e),
                  i.forEach((e) => F.observe(e.element)),
                  o.forEach((e) => F.observe(e.element)),
                  {
                    tick: function (e) {
                      let t = Math.min(0.1, Math.max(0, e))
                      if (((m += t), j(), b)) T()
                      else {
                        if (0 === p.length) {
                          for (let e of o) e === o[0] || u.includes(e) || 1 === e.asset || I(e, 1)
                          i.forEach((e, t) => k(t, u[t], !0))
                        }
                        for (let e of p)
                          if (null == e.person.trip && "true" !== i[e.asset].element.dataset.dragging) {
                            if (
                              ((e.age += t),
                              e.age >= 0.22 && !e.selected && N(e),
                              null != e.palette && !e.paletteReady && e.age > 0.35)
                            ) {
                              if (p.some((t) => t !== e && (!t.selected || null != t.person.trip || t.paletteReady))) {
                                e.age = 0.35
                                continue
                              }
                              ;((e.palette.dataset.open = "true"), (e.paletteReady = !0), A(e.person))
                              continue
                            }
                            if (null != e.palette && e.paletteReady && e.age >= 0.48) {
                              "true" !== e.palette.dataset.picked && (e.palette.dataset.picked = "true")
                              let t = String(e.age < 0.64)
                              e.palette.dataset.pressed !== t && (e.palette.dataset.pressed = t)
                            }
                            e.age >= 0.7 &&
                              (e.text &&
                                "true" !== e.element.dataset.typing &&
                                (delete e.element.dataset.selected, (e.element.dataset.typing = "true")),
                              e.apply(Math.min(1, (e.age - 0.7) / e.duration)))
                          }
                        let e = p.find(
                          (e) =>
                            e.age > 0.7 + e.duration + 0.35 &&
                            null == e.person.trip &&
                            "true" !== i[e.asset].element.dataset.dragging &&
                            p.every(
                              (t) =>
                                t === e ||
                                (t.selected && null == t.person.trip && "true" !== i[t.asset].element.dataset.dragging),
                            ),
                        )
                        if (null != e) {
                          let t = m >= h ? o.find((t) => null == t.job && null == t.trip && C(t, e.asset)) : null,
                            n = t ?? e.person
                          ;(E(e, null != t), null != t && (h = m + 5.8), k(e.asset, n))
                        }
                      }
                      if (b && m > f) {
                        let [e, t] = [
                            [0, 1],
                            [1, 3],
                            [2, 3],
                            [3, 2],
                            [3, 1],
                            [1, 0],
                          ][g % 6],
                          n = o.find((n) => n.asset === e && null == n.trip && C(n, t))
                        ;(null != n && I(n, t), g++, (f = m + 6.5))
                      }
                      for (let e of o)
                        if (null == e.job && null == e.trip) {
                          if (m > e.nextNudge && null == e.nudge) {
                            let t = e.phase + 2.4 * ++e.nudgeIndex
                            ;((e.nudge = {
                              start: m,
                              ...e.offset,
                              toX: 3 * Math.sin(t),
                              toY: 2 * Math.cos(0.8 * t),
                              duration: 0.24 + (e.nudgeIndex % 3) * 0.04,
                            }),
                              (e.nextNudge = m + 2.2 + ((e.phase + e.nudgeIndex) % 1.8)))
                          }
                          if (null != e.nudge) {
                            var n, a, r, l
                            let t = e.nudge,
                              i = Math.min(1, (m - t.start) / t.duration)
                            ;((e.offset = {
                              x: ((n = t.x), (a = t.toX), n + (a - n) * O(i)),
                              y: ((r = t.y), (l = t.toY), r + (l - r) * O(i)),
                            }),
                              1 === i && (e.nudge = null))
                          }
                        }
                      B(t)
                    },
                    position: z,
                    finishEdits: T,
                    dispose: () => {
                      ;(F.disconnect(), T(), (a.inert = !1))
                    },
                  }
                )
              })(t, e, x)
              return (
                (v.current = n),
                () => {
                  ;(n.dispose(), (v.current = null))
                }
              )
            }),
            (n = [x]),
            (f[0] = x),
            (f[1] = t),
            (f[2] = n))
          : ((t = f[1]), (n = f[2])),
        (0, l.useLayoutEffect)(t, n),
        f[3] !== g
          ? ((r = () => {
              let e = v.current,
                t = b.current?.parentElement
              if (null == e || null == t) return
              if (!g) {
                let n = () => e.position(),
                  a = () => {
                    N.Gt.postRender(n)
                  }
                return (
                  t.addEventListener("pointermove", a),
                  t.addEventListener("pointerup", a),
                  t.addEventListener("keydown", a),
                  t.addEventListener("click", a),
                  () => {
                    ;(t.removeEventListener("pointermove", a),
                      t.removeEventListener("pointerup", a),
                      t.removeEventListener("keydown", a),
                      t.removeEventListener("click", a),
                      (0, N.WG)(n))
                  }
                )
              }
              let n = (t) => {
                let { delta: n } = t
                e.tick(n / 1e3)
              }
              return (N.Gt.postRender(n, !0), () => (0, N.WG)(n))
            }),
            (f[3] = g),
            (f[4] = r))
          : (r = f[4]),
        f[5] !== x || f[6] !== g ? ((o = [g, x]), (f[5] = x), (f[6] = g), (f[7] = o)) : (o = f[7]),
        (0, l.useEffect)(r, o),
        f[8] !== y
          ? ((s = () => {
              y && v.current?.finishEdits(!0)
            }),
            (f[8] = y),
            (f[9] = s))
          : (s = f[9]),
        f[10] !== x || f[11] !== y ? ((c = [y, x]), (f[10] = x), (f[11] = y), (f[12] = c)) : (c = f[12]),
        (0, l.useEffect)(s, c),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsxs)(F, {
              children: [
                (0, a.jsx)(k.A, {}),
                (0, a.jsx)(_.A, {
                  id: "space.introduction.collaborator.chatgpt",
                  defaultMessage: "ChatGPT",
                  description:
                    "ChatGPT product name on a collaborating assistant's cursor in the Space welcome animation",
                }),
              ],
            })),
            (f[13] = d))
          : (d = f[13]),
        f[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(F, {
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.collaborator.henry",
                defaultMessage: "Henry Caldwell",
                description: "Fictional collaborator's name in the Space welcome animation",
              }),
            })),
            (f[14] = u))
          : (u = f[14]),
        f[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(F, {
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.collaborator.eric",
                defaultMessage: "Eric Thompson",
                description: "Fictional collaborator's name in the Space welcome animation",
              }),
            })),
            (f[15] = p))
          : (p = f[15]),
        f[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(F, {
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.collaborator.jasmine",
                defaultMessage: "Jasmine Liu",
                description: "Fictional collaborator's name in the Space welcome animation",
              }),
            })),
            (f[16] = m))
          : (m = f[16]),
        f[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsxs)("div", {
              ref: b,
              className: "collaborators-Af_DII",
              "aria-hidden": !0,
              children: [
                d,
                u,
                p,
                m,
                (0, a.jsx)(F, {
                  children: (0, a.jsx)(_.A, {
                    id: "space.introduction.collaborator.maya",
                    defaultMessage: "Maya Patel",
                    description: "Fictional collaborator's name in the Space welcome animation",
                  }),
                }),
              ],
            })),
            (f[17] = h))
          : (h = f[17]),
        h
      )
    }
    function F(e) {
      let t,
        n = (0, i.c)(2),
        { children: r } = e
      return (
        n[0] !== r
          ? ((t = (0, a.jsx)("span", {
              className: "collaborator-ZXm5Wx",
              "data-collaborator": !0,
              children: (0, a.jsx)("span", { className: z, children: r }),
            })),
            (n[0] = r),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    let Y = ["#f5f6fb", "#7ab1fe", "#6dcbf4", "#fa994c", "#f87915"]
    function U(e) {
      let t,
        n,
        r,
        o,
        s = (0, i.c)(10),
        { moving: c, warping: d, initialDetail: u } = e,
        p = void 0 === u ? "full" : u,
        m = (0, l.useRef)(null),
        h = (0, l.useRef)(null)
      s[0] !== d ? ((t = () => d), (s[0] = d), (s[1] = t)) : (t = s[1])
      let f = (0, l.useEffectEvent)(t)
      return (
        s[2] !== p || s[3] !== f || s[4] !== c
          ? ((n = () => {
              let e = m.current,
                t = e?.getContext("2d"),
                n = e?.parentElement
              if (!e || !t || !n) return
              let a = h.current ?? {
                width: 0,
                height: 0,
                stars: [],
                time: 0,
                parallaxX: 0,
                parallaxY: 0,
                warpStart: null,
                reducedDetailAt: null,
                faintOpacity: 1,
              }
              h.current = a
              let i = Y.map(H),
                r = { x: 0, y: 0, active: !1, down: !1 },
                l = 0,
                o = 0,
                s = 0,
                d = 0,
                u = 0,
                g = 42,
                y = () => ((g = (16807 * g) % 0x7fffffff) - 1) / 0x7ffffffe,
                x = () => {
                  let e = 0.45 + 2.8 * y(),
                    t = (y() - 0.5) * a.width * e * 1.06,
                    n = (y() - 0.5) * a.height * e * 1.06,
                    i = y(),
                    r = y(),
                    l = 0.3 + 0.48 * y()
                  i >= 0.992 ? (l = 1.9 + 0.8 * y()) : i >= 0.88 && (l = 0.85 + 0.7 * y())
                  let o = i < 0.88 ? 0.15 + 0.35 * y() : 0.4 + 0.5 * y(),
                    s = y() * Math.PI * 2
                  return {
                    x: t,
                    y: n,
                    z: e,
                    size: l,
                    alpha: o,
                    brightness: o,
                    color: [0.52, 0.7, 0.85, 0.93, 1].findIndex((e) => r < e),
                    phase: s,
                    sinPhase: Math.sin(s),
                    cosPhase: Math.cos(s),
                    rate: 0.3 + 0.65 * y(),
                    vx: (y() - 0.5) * 1.6,
                    vy: (y() - 0.5) * 1.3,
                    ox: 0,
                    oy: 0,
                    screenX: t / e + a.width / 2,
                    screenY: n / e + a.height / 2,
                  }
                },
                b = (n) => {
                  let { width: p, height: m } = a,
                    h = 0 === o ? 0 : n - o,
                    g = Math.min(h / 1e3, 0.04)
                  if (((o = n), f() && null == a.warpStart)) {
                    for (let e of a.stars)
                      ((e.x = (e.screenX - p / 2) * e.z), (e.y = (e.screenY - m / 2) * e.z), (e.ox = 0), (e.oy = 0))
                    ;((a.warpStart = n), (g = 0))
                  }
                  c && (a.time = a.time + g)
                  let x = null == a.warpStart ? null : (n - a.warpStart) / 1e3
                  if (c && null == x && !document.hidden) {
                    if (null == a.reducedDetailAt) {
                      let e = Math.min(h, 100)
                      ;((d += e),
                        h > Math.max(34, 1.5 * s) && (u += e),
                        d >= 1e3 && (u >= 0.25 * d && (a.reducedDetailAt = n), (d = 0), (u = 0)))
                    }
                    null != a.reducedDetailAt && (a.faintOpacity = Math.max(0, 1 - (n - a.reducedDetailAt) / 600))
                  }
                  let v = Math.min(window.devicePixelRatio, null == a.reducedDetailAt ? 2 : 1),
                    w = Math.round(p * v),
                    _ = Math.round(m * v)
                  ;((e.width !== w || e.height !== _) && ((e.width = w), (e.height = _)),
                    t.setTransform(v, 0, 0, v, 0, 0))
                  let S = null == x ? 0 : Math.min(1, x / 1.5),
                    j = 0.006 + 6.2 * Math.pow(S, 2.5),
                    M = r.active && null == x ? (r.x / p - 0.5) * 12 : 0,
                    A = r.active && null == x ? (r.y / m - 0.5) * 12 : 0,
                    C = 1 - Math.exp(-(2 * g))
                  ;((a.parallaxX = a.parallaxX + (M - a.parallaxX) * C),
                    (a.parallaxY = a.parallaxY + (A - a.parallaxY) * C))
                  let I = Math.sin(0.19 * a.time),
                    N = Math.cos(0.19 * a.time),
                    k = Math.sin(0.14 * a.time),
                    E = Math.cos(0.14 * a.time),
                    T = 1 - Math.exp(-(7 * g)),
                    L = 1 - Math.exp(-(2.8 * g))
                  ;(t.clearRect(0, 0, p, m), (t.lineCap = "round"))
                  let P = null
                  for (let e of a.stars) {
                    let n = e.size <= 0.84 && e.alpha < 0.35 ? a.faintOpacity : 1
                    if (0 === n) continue
                    c &&
                      g > 0 &&
                      ((e.z = e.z - g * j),
                      null == x && ((e.x = e.x + e.vx * g), (e.y = e.y + e.vy * g)),
                      e.z < 0.12 &&
                        ((e.z = 3.15),
                        (e.x = (y() - 0.5) * p * (null == x ? 3.3 : 1.45)),
                        (e.y = (y() - 0.5) * m * (null == x ? 3.3 : 1.45)),
                        (e.ox = 0),
                        (e.oy = 0)))
                    let l = e.x / e.z + p / 2,
                      o = e.y / e.z + m / 2,
                      s = 0
                    if (null == x) {
                      ;((l += a.parallaxX / e.z + (I * e.cosPhase + N * e.sinPhase) * 3),
                        (o += a.parallaxY / e.z + (E * e.cosPhase - k * e.sinPhase) * 2),
                        (l < -40 || l > p + 40 || o < -40 || o > m + 40) &&
                          ((e.x = (y() - 0.5) * p * e.z),
                          (e.y = (y() - 0.5) * m * e.z),
                          (l = e.x / e.z + p / 2),
                          (o = e.y / e.z + m / 2)))
                      let t = 0,
                        n = 0
                      if (r.active && c) {
                        let e = l - r.x,
                          a = o - r.y,
                          i = e * e + a * a
                        if (i < 36100 && i > 1e-4) {
                          let l = Math.sqrt(i),
                            o = 1 - l / 190,
                            c = o * o * 54 * (r.down ? 1.8 : 1)
                          ;((t = (e / l) * c), (n = (a / l) * c), (s = 0.28 * o))
                        }
                      }
                      let i = t || n ? T : L
                      ;((e.ox = e.ox + (t - e.ox) * i), (e.oy = e.oy + (n - e.oy) * i), (l += e.ox), (o += e.oy))
                    }
                    if (((e.screenX = l), (e.screenY = o), l < -140 || l > p + 140 || o < -140 || o > m + 140)) continue
                    if (null == x) {
                      let t = 0.78 + 0.22 * Math.sin(a.time * e.rate + e.phase)
                      e.brightness = Math.min(1, e.alpha * t + s)
                    }
                    t.globalAlpha =
                      n *
                      (null == x
                        ? e.brightness
                        : Math.min(1, e.brightness + (e.alpha - e.brightness) * Math.min(1, x / 0.3) + 0.3 * S))
                    let d = Math.min(e.size * (0.66 + 0.6 / e.z), 5)
                    if (null != x && x > 0.12) {
                      let n = e.z / (e.z + Math.min(0.5, 0.046 * j))
                      ;((t.strokeStyle = Y[e.color]),
                        (t.lineWidth = Math.min(2, 0.7 * d)),
                        t.beginPath(),
                        t.moveTo(p / 2 + (l - p / 2) * n, m / 2 + (o - m / 2) * n),
                        t.lineTo(l, o),
                        t.stroke())
                    }
                    if (e.size > 0.84) {
                      let n = 9 * d
                      t.drawImage(i[e.color], l - n / 2, o - n / 2, n, n)
                    } else {
                      let n = Y[e.color]
                      ;(P !== n && ((t.fillStyle = n), (P = n)), t.fillRect(l, o, d, d))
                    }
                  }
                  ;((t.globalAlpha = 1),
                    c &&
                      !document.hidden &&
                      (l =
                        0 === s
                          ? requestAnimationFrame((e) => {
                              let t = e,
                                n = 0,
                                a = (e) => {
                                  let i = e - t
                                  ;((s = 0 === n ? i : Math.min(s, i)),
                                    (t = e),
                                    (n += 1) < 3
                                      ? (l = requestAnimationFrame(a))
                                      : ((o = 0), (l = requestAnimationFrame(b))))
                                }
                              l = requestAnimationFrame(a)
                            })
                          : requestAnimationFrame(b)))
                },
                v = () => {
                  let t = e.clientWidth,
                    n = e.clientHeight
                  if (0 !== t && 0 !== n) {
                    if (t !== a.width || n !== a.height) {
                      let e = 0 === a.width && 0 === a.height && "reduced" === p
                      ;((a.width = t),
                        (a.height = n),
                        (a.reducedDetailAt = e ? -600 : null),
                        (a.faintOpacity = +!e),
                        (d = 0),
                        (u = 0),
                        (g = 42),
                        (a.stars = Array.from({ length: Math.min(11e3, Math.max(1e3, Math.round((t * n) / 190))) }, x)))
                    }
                    ;(cancelAnimationFrame(l), (o = 0), (s = 0), b(performance.now()))
                  }
                },
                w = (e) => {
                  if (!c || f() || "touch" === e.pointerType) return
                  let t = n.getBoundingClientRect()
                  ;((r.x = ((e.clientX - t.left) / t.width) * a.width),
                    (r.y = ((e.clientY - t.top) / t.height) * a.height),
                    (r.active = !0))
                },
                _ = (e) => {
                  ;(w(e), (r.down = !0))
                },
                S = () => {
                  r.down = !1
                },
                j = () => {
                  ;((r.active = !1), (r.down = !1))
                },
                M = new ResizeObserver(v)
              return (
                M.observe(e),
                n.addEventListener("pointermove", w, { capture: !0, passive: !0 }),
                n.addEventListener("pointerdown", _, { capture: !0, passive: !0 }),
                n.addEventListener("pointerleave", j),
                n.addEventListener("pointercancel", j),
                window.addEventListener("pointerup", S),
                window.addEventListener("blur", j),
                v(),
                () => {
                  ;(M.disconnect(),
                    cancelAnimationFrame(l),
                    n.removeEventListener("pointermove", w, !0),
                    n.removeEventListener("pointerdown", _, !0),
                    n.removeEventListener("pointerleave", j),
                    n.removeEventListener("pointercancel", j),
                    window.removeEventListener("pointerup", S),
                    window.removeEventListener("blur", j))
                }
              )
            }),
            (s[2] = p),
            (s[3] = f),
            (s[4] = c),
            (s[5] = n))
          : (n = s[5]),
        s[6] !== p || s[7] !== c ? ((r = [c, p]), (s[6] = p), (s[7] = c), (s[8] = r)) : (r = s[8]),
        (0, l.useEffect)(n, r),
        s[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)("canvas", { ref: m, className: "starfield-Nh04lv", "aria-hidden": !0 })), (s[9] = o))
          : (o = s[9]),
        o
      )
    }
    function H(e) {
      let t = document.createElement("canvas")
      ;((t.width = 64), (t.height = 64))
      let n = t.getContext("2d")
      if (n) {
        let t = n.createRadialGradient(32, 32, 0, 32, 32, 32)
        ;(t.addColorStop(0, "#ffffff"),
          t.addColorStop(0.045, "#ffffff"),
          t.addColorStop(0.1, e + "e8"),
          t.addColorStop(0.22, e + "66"),
          t.addColorStop(0.45, e + "20"),
          t.addColorStop(1, e + "00"),
          (n.fillStyle = t),
          n.fillRect(0, 0, 64, 64))
      }
      return t
    }
    var V = n("K45w"),
      X = n("xNuN"),
      W = n("kv6U"),
      q = "image-GRZdim",
      Z = "articleParagraph-a_QqZT",
      K = "product-qXOdBl"
    function Q(e) {
      let t,
        n,
        r,
        o = (0, i.c)(10),
        { className: s, src: c, kind: d } = e,
        [u, p] = (0, l.useState)(null),
        m = u?.src === c ? u.status : null,
        h = "loaded" !== m && "imagePlaceholder-liKf9U"
      return (
        o[0] !== s || o[1] !== h ? ((t = (0, b.A)(q, h, s)), (o[0] = s), (o[1] = h), (o[2] = t)) : (t = o[2]),
        o[3] !== c || o[4] !== m
          ? ((n =
              "" !== c &&
              "failed" !== m &&
              (0, a.jsx)("img", {
                className: q,
                src: c,
                alt: "",
                draggable: !1,
                onLoad: () => p({ src: c, status: "loaded" }),
                onError: () => p({ src: c, status: "failed" }),
              })),
            (o[3] = c),
            (o[4] = m),
            (o[5] = n))
          : (n = o[5]),
        o[6] !== d || o[7] !== t || o[8] !== n
          ? ((r = (0, a.jsx)("span", {
              className: t,
              "data-artwork-image": !0,
              "data-image-kind": d,
              "aria-hidden": !0,
              children: n,
            })),
            (o[6] = d),
            (o[7] = t),
            (o[8] = n),
            (o[9] = r))
          : (r = o[9]),
        r
      )
    }
    let $ = { pitch: [754, 447], resume: [1200, 1594], pottery: [686, 432], blueprint: [500, 658] }
    function J(e) {
      let t,
        n,
        r,
        l,
        o,
        s,
        c,
        d = (0, i.c)(24),
        { kind: u, moving: p } = e,
        { locale: m } = (0, w.A)(),
        [h, f] = $[u],
        g = `0 0 ${h} ${f}`
      return (
        d[0] !== u ? ((t = "pitch" === u && (0, a.jsx)(en, {})), (d[0] = u), (d[1] = t)) : (t = d[1]),
        d[2] !== u ? ((n = "resume" === u && (0, a.jsx)(ea, {})), (d[2] = u), (d[3] = n)) : (n = d[3]),
        d[4] !== u ? ((r = "pottery" === u && (0, a.jsx)(ei, {})), (d[4] = u), (d[5] = r)) : (r = d[5]),
        d[6] !== u ? ((l = "blueprint" === u && (0, a.jsx)(er, {})), (d[6] = u), (d[7] = l)) : (l = d[7]),
        d[8] !== t || d[9] !== n || d[10] !== r || d[11] !== l || d[12] !== h
          ? ((o = (0, a.jsxs)("div", {
              className: "document-zGqpIm",
              "data-artwork-document": !0,
              "data-document-width": h,
              children: [t, n, r, l],
            })),
            (d[8] = t),
            (d[9] = n),
            (d[10] = r),
            (d[11] = l),
            (d[12] = h),
            (d[13] = o))
          : (o = d[13]),
        d[14] !== f || d[15] !== m || d[16] !== o || d[17] !== h
          ? ((s = (0, a.jsx)("foreignObject", { width: h, height: f, children: o }, m)),
            (d[14] = f),
            (d[15] = m),
            (d[16] = o),
            (d[17] = h),
            (d[18] = s))
          : (s = d[18]),
        d[19] !== u || d[20] !== p || d[21] !== g || d[22] !== s
          ? ((c = (0, a.jsx)("svg", {
              className: "artwork-p94wzm",
              viewBox: g,
              "aria-hidden": !0,
              "data-kind": u,
              "data-moving": p,
              children: s,
            })),
            (d[19] = u),
            (d[20] = p),
            (d[21] = g),
            (d[22] = s),
            (d[23] = c))
          : (c = d[23]),
        c
      )
    }
    function ee(e) {
      let t,
        n,
        r,
        l,
        o,
        s = (0, i.c)(12),
        { field: c, className: d, revision: u, children: p } = e
      return (
        s[0] !== d ? ((t = (0, b.A)("editable-yFH7FP", d)), (s[0] = d), (s[1] = t)) : (t = s[1]),
        s[2] !== p || s[3] !== u
          ? ((n =
              null == u
                ? p
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("span", { "data-editable-copy": !0, children: p }),
                      (0, a.jsx)("i", { className: "caret-HpTbmF" }),
                    ],
                  })),
            (s[2] = p),
            (s[3] = u),
            (s[4] = n))
          : (n = s[4]),
        s[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsxs)("span", {
              className: "handles-uWYBf5",
              children: [(0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {})],
            })),
            (l = (0, a.jsx)("span", { className: "pin-B69FQj", "data-edit-pin": !0 })),
            (s[5] = r),
            (s[6] = l))
          : ((r = s[5]), (l = s[6])),
        s[7] !== c || s[8] !== u || s[9] !== t || s[10] !== n
          ? ((o = (0, a.jsxs)("span", { className: t, "data-editable": c, "data-revision": u, children: [n, r, l] })),
            (s[7] = c),
            (s[8] = u),
            (s[9] = t),
            (s[10] = n),
            (s[11] = o))
          : (o = s[11]),
        o
      )
    }
    function et() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsxs)("span", {
              className: "palette-MKQAS_",
              "data-palette": !0,
              children: [(0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {})],
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function en() {
      let e,
        t,
        n,
        r,
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h = (0, i.c)(21),
        f = (0, w.A)()
      return (
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(ee, { field: "pitch-paper", className: "pitchPaper-NmT4V4" })), (h[0] = e))
          : (e = h[0]),
        h[1] !== f
          ? ((t = f.formatMessage({
              id: "space.introduction.art.pitchRevision",
              defaultMessage: "Studio\nNotes",
              description:
                "Revised two-line title being typed into an illustrative presentation in the Space welcome animation; preserve the line break between the words",
            })),
            (h[1] = f),
            (h[2] = t))
          : (t = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(_.A, {
              id: "space.introduction.art.pitchTitle",
              defaultMessage: "Field\nNotes",
              description:
                "Two-line title on an illustrative presentation in the Space welcome animation; preserve the line break between the words",
            })),
            (h[3] = n))
          : (n = h[3]),
        h[4] !== t
          ? ((r = (0, a.jsx)(ee, { field: "pitch-title", className: "pitchTitle-hSBIAr", revision: t, children: n })),
            (h[4] = t),
            (h[5] = r))
          : (r = h[5]),
        h[6] !== f
          ? ((l = f.formatMessage({
              id: "space.introduction.art.pitchSubtitleRevision",
              defaultMessage: "A fresh perspective",
              description:
                "Revised subtitle being typed into an illustrative presentation in the Space welcome animation",
            })),
            (h[6] = f),
            (h[7] = l))
          : (l = h[7]),
        h[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(_.A, {
              id: "space.introduction.art.pitchSubtitle",
              defaultMessage: "A new perspective",
              description:
                "Small subtitle at the lower right of an illustrative presentation in the Space welcome animation",
            })),
            (h[8] = o))
          : (o = h[8]),
        h[9] !== l
          ? ((s = (0, a.jsx)(ee, {
              field: "pitch-subtitle",
              className: "pitchSubtitle-JdO3gF",
              revision: l,
              children: o,
            })),
            (h[9] = l),
            (h[10] = s))
          : (s = h[10]),
        h[11] !== f
          ? ((c = f.formatMessage({
              id: "space.introduction.art.pitchTaglineRevision",
              defaultMessage: "2027",
              description:
                "Revised year being typed into a pill at the upper left of an illustrative presentation in the Space welcome animation",
            })),
            (h[11] = f),
            (h[12] = c))
          : (c = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(_.A, {
              id: "space.introduction.art.pitchTagline",
              defaultMessage: "2026",
              description:
                "Year shown in a pill at the upper left of an illustrative presentation in the Space welcome animation",
            })),
            (h[13] = d))
          : (d = h[13]),
        h[14] !== c
          ? ((u = (0, a.jsx)(ee, {
              field: "pitch-tagline",
              className: "pitchTagline-eaiS9T",
              revision: c,
              children: d,
            })),
            (h[14] = c),
            (h[15] = u))
          : (u = h[15]),
        h[16] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(et, {})), (h[16] = p)) : (p = h[16]),
        h[17] !== r || h[18] !== s || h[19] !== u
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [e, r, s, u, p] })),
            (h[17] = r),
            (h[18] = s),
            (h[19] = u),
            (h[20] = m))
          : (m = h[20]),
        m
      )
    }
    function ea() {
      let e,
        t,
        n,
        r,
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        m = (0, i.c)(17),
        h = (0, w.A)()
      return (
        m[0] !== h
          ? ((e = h.formatMessage({
              id: "space.introduction.art.articleTitleRevision",
              defaultMessage: "The Intelligence Era",
              description:
                "Revised title being typed into the illustrative Intelligence Age article in the Space welcome animation",
            })),
            (m[0] = h),
            (m[1] = e))
          : (e = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(_.A, {
              id: "space.introduction.art.articleTitle",
              defaultMessage: "The Intelligence Age",
              description: "Title of the illustrative article in the Space welcome animation",
            })),
            (m[2] = t))
          : (t = m[2]),
        m[3] !== e
          ? ((n = (0, a.jsx)(ee, {
              field: "article-title",
              className: "articleTitle-_iFqaF",
              revision: e,
              children: t,
            })),
            (m[3] = e),
            (m[4] = n))
          : (n = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("span", {
              className: "articleDate-R5cds5",
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.art.articleDate",
                defaultMessage: "September 23, 2024",
                description:
                  "Publication date shown beneath the Intelligence Age article title in the Space welcome animation",
              }),
            })),
            (m[5] = r))
          : (r = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(ee, {
              field: "article-image",
              className: "articleImage-jpSQbb",
              children: (0, a.jsx)("span", {
                className: "articleImageCrop-Ll4Swu",
                children: (0, a.jsx)(Q, { src: W.eJ, kind: "landscape" }),
              }),
            })),
            (m[6] = l))
          : (l = m[6]),
        m[7] !== h
          ? ((o = h.formatMessage({
              id: "space.introduction.art.articleIntroRevision",
              defaultMessage:
                "Over the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.",
              description:
                "Revised opening paragraph being typed into the illustrative Intelligence Age article in the Space welcome animation",
            })),
            (m[7] = h),
            (m[8] = o))
          : (o = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(_.A, {
              id: "space.introduction.art.articleIntro",
              defaultMessage:
                "In the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.",
              description:
                "Opening paragraph of the illustrative Intelligence Age article in the Space welcome animation",
            })),
            (m[9] = s))
          : (s = m[9]),
        m[10] !== o
          ? ((c = (0, a.jsx)(ee, {
              field: "article-intro",
              className: "articleIntro-XrhgZE",
              revision: o,
              children: s,
            })),
            (m[10] = o),
            (m[11] = c))
          : (c = m[11]),
        m[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)("span", {
              className: Z,
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.art.articleAcceleration",
                defaultMessage:
                  "This phenomenon is not new, but it will be newly accelerated. People have become dramatically more capable over time; we can already accomplish things now that our predecessors would have believed to be impossible.",
                description:
                  "Second paragraph of the illustrative Intelligence Age article in the Space welcome animation",
              }),
            })),
            (m[12] = d))
          : (d = m[12]),
        m[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)("span", {
              className: Z,
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.art.articleProgress",
                defaultMessage:
                  "We are more capable not because of genetic change, but because we benefit from the infrastructure of society being way smarter and more capable than any one of us; in an important sense, society itself is a form of advanced intelligence. Our grandparents – and the generations that came before them – built and achieved great things. They contributed to the scaffolding of human progress that we all benefit from. AI will give people tools to solve hard problems and help us add new struts to that scaffolding that we could not have figured out on our own. The story of progress will continue, and our children will be able to do things we can’t.",
                description:
                  "Final visible paragraph of the illustrative Intelligence Age article; it continues below the clipped miniature page in the Space welcome animation",
              }),
            })),
            (m[13] = u))
          : (u = m[13]),
        m[14] !== n || m[15] !== c
          ? ((p = (0, a.jsxs)(a.Fragment, { children: [n, r, l, c, d, u] })), (m[14] = n), (m[15] = c), (m[16] = p))
          : (p = m[16]),
        p
      )
    }
    function ei() {
      let e,
        t,
        n,
        r,
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h = (0, i.c)(16),
        f = (0, w.A)()
      return (
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(ee, { field: "shop-backdrop", className: "shopBackdrop-K5Wh00" })), (h[0] = e))
          : (e = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsxs)("span", {
              className: "browserBar-y28yYZ",
              children: [(0, a.jsx)("i", {}), (0, a.jsx)("i", {}), (0, a.jsx)("i", {})],
            })),
            (h[1] = t))
          : (t = h[1]),
        h[2] !== f
          ? ((n = f.formatMessage({
              id: "space.introduction.art.storeRevision",
              defaultMessage: "KILN STUDIO",
              description:
                "Revised shop name being typed into an illustrative pottery website in the Space welcome animation",
            })),
            (h[2] = f),
            (h[3] = n))
          : (n = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(_.A, {
              id: "space.introduction.art.store",
              defaultMessage: "R&D KILN",
              description: "Fictional ceramics shop name in the Space welcome animation",
            })),
            (h[4] = r))
          : (r = h[4]),
        h[5] !== n
          ? ((l = (0, a.jsx)("span", {
              className: "storeHeader-AqYtzN",
              children: (0, a.jsx)(ee, { field: "shop-name", className: "storeName-V7AD25", revision: n, children: r }),
            })),
            (h[5] = n),
            (h[6] = l))
          : (l = h[6]),
        h[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(Q, { className: "hero-SQlVoh", src: W.ZK, kind: "hero" })), (h[7] = o))
          : (o = h[7]),
        h[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsxs)(ee, {
              field: "product-0",
              className: K,
              children: [
                (0, a.jsx)(Q, { src: W.eA, kind: "mug" }),
                (0, a.jsx)(_.A, {
                  id: "space.introduction.art.mug",
                  defaultMessage: "Ridge Mug",
                  description: "Fictional product in an illustrative pottery website in the Space welcome animation",
                }),
              ],
            })),
            (h[8] = s))
          : (s = h[8]),
        h[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsxs)(ee, {
              field: "product-1",
              className: K,
              children: [
                (0, a.jsx)(Q, { src: W.TZ, kind: "bowl" }),
                (0, a.jsx)(_.A, {
                  id: "space.introduction.art.bowl",
                  defaultMessage: "Stone Bowl",
                  description: "Fictional product in an illustrative pottery website in the Space welcome animation",
                }),
              ],
            })),
            (h[9] = c))
          : (c = h[9]),
        h[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsxs)("span", {
              className: "products-FlYX6R",
              children: [
                s,
                c,
                (0, a.jsxs)(ee, {
                  field: "product-2",
                  className: K,
                  children: [
                    (0, a.jsx)(Q, { src: W.kM, kind: "pitcher" }),
                    (0, a.jsx)(_.A, {
                      id: "space.introduction.art.pitcher",
                      defaultMessage: "River Pitcher",
                      description:
                        "Fictional product in an illustrative pottery website in the Space welcome animation",
                    }),
                  ],
                }),
              ],
            })),
            (h[10] = d))
          : (d = h[10]),
        h[11] !== l
          ? ((u = (0, a.jsxs)("span", { className: "store-XfNXbk", children: [l, o, d] })), (h[11] = l), (h[12] = u))
          : (u = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(et, {})), (h[13] = p)) : (p = h[13]),
        h[14] !== u
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [e, t, u, p] })), (h[14] = u), (h[15] = m))
          : (m = h[15]),
        m
      )
    }
    function er() {
      let e,
        t,
        n,
        r,
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f = (0, i.c)(22),
        g = (0, w.A)()
      return (
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(ee, { field: "blueprint-paper", className: "blueprintPaper-TCbCJe" })), (f[0] = e))
          : (e = f[0]),
        f[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("span", {
              className: "lampDrawing-fTsq00",
              children: (0, a.jsx)(Q, { src: W.k2, kind: "lamp" }),
            })),
            (f[1] = t))
          : (t = f[1]),
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsxs)("svg", {
              className: "measurements-N3ScRj",
              viewBox: "0 0 500 658",
              children: [
                (0, a.jsx)("path", { d: "M215 73H412 M94 152V333 M94 365V533" }),
                (0, a.jsx)("path", {
                  className: "measurementGuides-GGLQ53",
                  d: "M215 74V96 M412 74V96 M90 151H138 M95 533H138",
                }),
                (0, a.jsx)("path", {
                  className: "measurementArrows-DpoV9d",
                  d: "M215 73L223 69V77Z M413 73L405 69V77Z M94 151L98 159H90Z M94 534L98 526H90Z",
                }),
              ],
            })),
            (f[2] = n))
          : (n = f[2]),
        f[3] !== g
          ? ((r = g.formatMessage({
              id: "space.introduction.art.lampWidthRevision",
              defaultMessage: "200 mm",
              description:
                "Revised width measurement on an illustrative desk lamp drawing in the Space welcome animation",
            })),
            (f[3] = g),
            (f[4] = r))
          : (r = f[4]),
        f[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(_.A, {
              id: "space.introduction.art.lampWidth",
              defaultMessage: "180 mm",
              description: "Width measurement on an illustrative desk lamp drawing in the Space welcome animation",
            })),
            (f[5] = l))
          : (l = f[5]),
        f[6] !== r
          ? ((o = (0, a.jsx)(ee, { field: "blueprint-width", className: "width-CBecwS", revision: r, children: l })),
            (f[6] = r),
            (f[7] = o))
          : (o = f[7]),
        f[8] !== g
          ? ((s = g.formatMessage({
              id: "space.introduction.art.lampHeightRevision",
              defaultMessage: "440 mm",
              description:
                "Revised height measurement on an illustrative desk lamp drawing in the Space welcome animation",
            })),
            (f[8] = g),
            (f[9] = s))
          : (s = f[9]),
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(_.A, {
              id: "space.introduction.art.lampHeight",
              defaultMessage: "420 mm",
              description: "Height measurement on an illustrative desk lamp drawing in the Space welcome animation",
            })),
            (f[10] = c))
          : (c = f[10]),
        f[11] !== s
          ? ((d = (0, a.jsx)(ee, { field: "blueprint-height", className: "height-zrnuaW", revision: s, children: c })),
            (f[11] = s),
            (f[12] = d))
          : (d = f[12]),
        f[13] !== g
          ? ((u = g.formatMessage({
              id: "space.introduction.art.lampTitleRevision",
              defaultMessage: "TASK LAMP",
              description:
                "Revised title being typed on an illustrative desk lamp drawing in the Space welcome animation",
            })),
            (f[13] = g),
            (f[14] = u))
          : (u = f[14]),
        f[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(_.A, {
              id: "space.introduction.art.lampTitle",
              defaultMessage: "DESK LAMP",
              description: "Title on an illustrative desk lamp drawing in the Space welcome animation",
            })),
            (f[15] = p))
          : (p = f[15]),
        f[16] !== u
          ? ((m = (0, a.jsx)(ee, {
              field: "blueprint-name",
              className: "blueprintName-AziVuR",
              revision: u,
              children: p,
            })),
            (f[16] = u),
            (f[17] = m))
          : (m = f[17]),
        f[18] !== m || f[19] !== o || f[20] !== d
          ? ((h = (0, a.jsxs)(a.Fragment, { children: [e, t, n, o, d, m] })),
            (f[18] = m),
            (f[19] = o),
            (f[20] = d),
            (f[21] = h))
          : (h = f[21]),
        h
      )
    }
    function el(e) {
      let t,
        n,
        r,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        g,
        y,
        x,
        b,
        w,
        _,
        S,
        M,
        A,
        C = (0, i.c)(71),
        { kind: I, label: N, helpId: k, moving: E, warping: T } = e,
        L = (0, j.dz)(),
        P = (0, V.d)(0),
        R = (0, V.d)(0),
        O = (0, V.d)(0),
        [D, z] = (0, l.useState)(!1)
      C[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (C[0] = t)) : (t = C[0])
      let B = (0, l.useRef)(t),
        F = (0, l.useRef)(null)
      ;(C[1] !== E
        ? ((n = () => {
            for (let e of B.current) E && "paused" === e.state ? e.play() : E || "running" !== e.state || e.pause()
          }),
          (r = [E]),
          (C[1] = E),
          (C[2] = n),
          (C[3] = r))
        : ((n = C[2]), (r = C[3])),
        (0, l.useEffect)(n, r),
        C[4] !== O || C[5] !== P || C[6] !== R
          ? ((o = () => () => {
              ;(P.stop(), R.stop(), O.stop())
            }),
            (s = [P, R, O]),
            (C[4] = O),
            (C[5] = P),
            (C[6] = R),
            (C[7] = o),
            (C[8] = s))
          : ((o = C[7]), (s = C[8])),
        (0, l.useEffect)(o, s),
        C[9] !== E || C[10] !== O || C[11] !== P || C[12] !== R
          ? ((c = function (e, t) {
              let n = void 0 === e ? 0 : e,
                a = void 0 === t ? 0 : t
              if (((B.current = []), !E)) {
                ;(P.set(0), R.set(0), O.set(0))
                return
              }
              let i = { type: "spring", stiffness: 6.76, damping: 3.432, restDelta: 0.4, restSpeed: 2 },
                r = Math.hypot(n, a),
                l = r > 1200 ? 1200 / r : 1
              B.current = [
                (0, X.i)(P, 0, { ...i, velocity: n * l }),
                (0, X.i)(R, 0, { ...i, velocity: a * l }),
                (0, X.i)(O, 0, i),
              ]
            }),
            (C[9] = E),
            (C[10] = O),
            (C[11] = P),
            (C[12] = R),
            (C[13] = c))
          : (c = C[13]))
      let Y = c
      ;(C[14] !== O || C[15] !== P || C[16] !== R
        ? ((d = { x: P, y: R, rotate: O }), (C[14] = O), (C[15] = P), (C[16] = R), (C[17] = d))
        : (d = C[17]),
        C[18] !== O || C[19] !== P || C[20] !== R
          ? ((u = (e) => {
              e.isPrimary &&
                0 === e.button &&
                null == F.current &&
                (e.preventDefault(),
                e.stopPropagation(),
                e.currentTarget.focus({ preventScroll: !0 }),
                P.stop(),
                R.stop(),
                O.stop(),
                (B.current = []),
                e.currentTarget.setPointerCapture(e.pointerId),
                (F.current = {
                  pointerId: e.pointerId,
                  startX: e.clientX,
                  startY: e.clientY,
                  originX: P.get(),
                  originY: R.get(),
                  samples: [{ x: e.clientX, y: e.clientY, time: e.timeStamp }],
                }),
                z(!0))
            }),
            (C[18] = O),
            (C[19] = P),
            (C[20] = R),
            (C[21] = u))
          : (u = C[21]),
        C[22] !== E || C[23] !== O || C[24] !== L || C[25] !== P || C[26] !== R
          ? ((p = (e) => {
              let t = F.current
              if (null != t && t.pointerId === e.pointerId) {
                for (
                  e.preventDefault(),
                    e.stopPropagation(),
                    t.samples.push({ x: e.clientX, y: e.clientY, time: e.timeStamp });
                  t.samples.length > 2 && t.samples[1].time < e.timeStamp - 80;
                )
                  t.samples.shift()
                if ((P.set(t.originX + (e.clientX - t.startX) / L), R.set(t.originY + (e.clientY - t.startY) / L), E)) {
                  let n = t.samples[0],
                    a = Math.max(
                      -10,
                      Math.min(10, 0.008 * (((e.clientX - n.x) / L / Math.max(16, e.timeStamp - n.time)) * 1e3)),
                    )
                  O.set(O.get() + (a - O.get()) * 0.25)
                }
              }
            }),
            (C[22] = E),
            (C[23] = O),
            (C[24] = L),
            (C[25] = P),
            (C[26] = R),
            (C[27] = p))
          : (p = C[27]),
        C[28] !== E || C[29] !== Y || C[30] !== L
          ? ((m = (e) => {
              let t = F.current
              if (null != t && t.pointerId === e.pointerId)
                if (((F.current = null), z(!1), e.currentTarget.releasePointerCapture(e.pointerId), E)) {
                  let n = t.samples[0],
                    a = t.samples[t.samples.length - 1],
                    i = Math.max(16, a.time - n.time) / 1e3,
                    r = Math.exp(-Math.max(0, e.timeStamp - a.time - 35) / 50)
                  Y(((a.x - n.x) / L / i) * r, ((a.y - n.y) / L / i) * r)
                } else Y()
            }),
            (C[28] = E),
            (C[29] = Y),
            (C[30] = L),
            (C[31] = m))
          : (m = C[31]),
        C[32] !== Y
          ? ((h = () => {
              null != F.current && ((F.current = null), z(!1), Y())
            }),
            (C[32] = Y),
            (C[33] = h))
          : (h = C[33]),
        C[34] !== E || C[35] !== Y || C[36] !== P || C[37] !== R
          ? ((f = (e) => {
              0 === e.detail && (E ? Y(580, -500) : (P.set(24), R.set(-24)))
            }),
            (C[34] = E),
            (C[35] = Y),
            (C[36] = P),
            (C[37] = R),
            (C[38] = f))
          : (f = C[38]),
        C[39] !== E || C[40] !== Y || C[41] !== O || C[42] !== P || C[43] !== R
          ? ((g = (e) => {
              let t = { ArrowLeft: [-24, 0], ArrowRight: [24, 0], ArrowUp: [0, -24], ArrowDown: [0, 24] }
              if ("Home" === e.key)
                (e.preventDefault(), P.stop(), R.stop(), O.stop(), (B.current = []), P.set(0), R.set(0), O.set(0))
              else if (null != t[e.key]) {
                e.preventDefault()
                let [n, a] = t[e.key]
                E ? Y(12 * n, 12 * a) : (P.set(n), R.set(a))
              }
            }),
            (C[39] = E),
            (C[40] = Y),
            (C[41] = O),
            (C[42] = P),
            (C[43] = R),
            (C[44] = g))
          : (g = C[44]))
      let U = E && !D && !T
      return (
        C[45] !== I || C[46] !== U
          ? ((y = (0, a.jsx)("span", {
              className: "sampleSurface-DSkGP5",
              children: (0, a.jsx)(J, { kind: I, moving: U }),
            })),
            (C[45] = I),
            (C[46] = U),
            (C[47] = y))
          : (y = C[47]),
        C[48] !== k ||
        C[49] !== N ||
        C[50] !== m ||
        C[51] !== h ||
        C[52] !== f ||
        C[53] !== g ||
        C[54] !== y ||
        C[55] !== u ||
        C[56] !== p ||
        C[57] !== T
          ? ((x = (0, a.jsx)("button", {
              className: "sampleButton-PqjJ4v",
              type: "button",
              "aria-label": N,
              "aria-describedby": k,
              disabled: T,
              onPointerDown: u,
              onPointerMove: p,
              onPointerUp: m,
              onLostPointerCapture: h,
              onClick: f,
              onKeyDown: g,
              children: y,
            })),
            (C[48] = k),
            (C[49] = N),
            (C[50] = m),
            (C[51] = h),
            (C[52] = f),
            (C[53] = g),
            (C[54] = y),
            (C[55] = u),
            (C[56] = p),
            (C[57] = T),
            (C[58] = x))
          : (x = C[58]),
        C[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)("span", { className: G, "data-corner-probe": "top-left", "aria-hidden": !0 })),
            (w = (0, a.jsx)("span", { className: G, "data-corner-probe": "top-right", "aria-hidden": !0 })),
            (_ = (0, a.jsx)("span", { className: G, "data-corner-probe": "bottom-left", "aria-hidden": !0 })),
            (C[59] = b),
            (C[60] = w),
            (C[61] = _))
          : ((b = C[59]), (w = C[60]), (_ = C[61])),
        C[62] !== x
          ? ((S = (0, a.jsxs)("div", { className: "drift-PHXjYS", "data-drift": !0, children: [x, b, w, _] })),
            (C[62] = x),
            (C[63] = S))
          : (S = C[63]),
        C[64] !== S || C[65] !== d
          ? ((M = (0, a.jsx)(v.P.div, {
              className: "dragOffset-FlmZBm",
              "data-drag-offset": !0,
              style: d,
              children: S,
            })),
            (C[64] = S),
            (C[65] = d),
            (C[66] = M))
          : (M = C[66]),
        C[67] !== D || C[68] !== I || C[69] !== M
          ? ((A = (0, a.jsx)("div", {
              className: "sample-rmMnBK",
              "data-work-sample": !0,
              "data-kind": I,
              "data-dragging": D,
              children: M,
            })),
            (C[67] = D),
            (C[68] = I),
            (C[69] = M),
            (C[70] = A))
          : (A = C[70]),
        A
      )
    }
    function eo(e) {
      let t,
        n,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        g,
        y,
        N,
        k,
        L,
        P,
        R,
        O,
        D,
        G,
        F,
        Y,
        H,
        V,
        X,
        W,
        q,
        Z,
        K,
        Q,
        $,
        J,
        ee,
        et,
        en,
        ea,
        ei,
        er,
        eo,
        eu,
        ep,
        em,
        eh,
        ef,
        eg,
        ey = (0, i.c)(119),
        { onDismiss: ex, onShown: eb, onContinue: ev, initialStarDetail: ew } = e,
        e_ = (0, w.A)(),
        eS = (0, l.useContext)(S.H),
        ej = (0, l.useContext)(S.K),
        eM = (0, r.Ul)(I.Jy) ?? 0,
        eA = (0, j.dz)(),
        [eC, eI] = (0, l.useState)(),
        eN = (0, C.I)(),
        [ek, eE] = (0, l.useState)(eN),
        [eT, eL] = (0, l.useState)(null),
        eP = null != eT,
        eR = "warp" === eT,
        eO = (0, l.useRef)(null),
        eD = (0, l.useRef)(null),
        eG = (0, l.useRef)(!1),
        ez = (0, l.useRef)(null),
        eB = (0, l.useId)()
      ey[0] !== eb
        ? ((t = () => {
            null != eD.current && ed() && !eG.current && ((eG.current = !0), eb?.())
          }),
          (ey[0] = eb),
          (ey[1] = t))
        : (t = ey[1])
      let eF = t
      ey[2] !== eF
        ? ((n = (e) => {
            var t
            return (
              (t = () => {
                ;(e(), eF())
              }),
              document.addEventListener("visibilitychange", t),
              () => document.removeEventListener("visibilitychange", t)
            )
          }),
          (ey[2] = eF),
          (ey[3] = n))
        : (n = ey[3])
      let eY = n,
        eU = (0, l.useSyncExternalStore)(eY, ed, ec),
        eH = !eN && eU
      ;(ey[4] !== eS || ey[5] !== ej
        ? ((o = () => {
            let e = ej.current
            if (null != e && null != eS)
              return (0, x.KI)(Array.from(e.querySelectorAll("[data-app-navigation-rail]")), e)
          }),
          (s = [ej, eS]),
          (ey[4] = eS),
          (ey[5] = ej),
          (ey[6] = o),
          (ey[7] = s))
        : ((o = ey[6]), (s = ey[7])),
        (0, l.useLayoutEffect)(o, s),
        ey[8] !== ek || ey[9] !== eP || ey[10] !== eS
          ? ((c = () => {
              if (null == eS || !ek || eP) return
              let e = eS.style.contentVisibility
              return (
                eS.style.setProperty("content-visibility", "hidden"),
                () => {
                  eS.style.setProperty("content-visibility", e)
                }
              )
            }),
            (d = [eS, ek, eP]),
            (ey[8] = ek),
            (ey[9] = eP),
            (ey[10] = eS),
            (ey[11] = c),
            (ey[12] = d))
          : ((c = ey[11]), (d = ey[12])),
        (0, l.useLayoutEffect)(c, d),
        ey[13] !== eS || ey[14] !== eM || ey[15] !== eA
          ? ((u = () => {
              if (null == eS) return
              let e = () => {
                  let e = eS.getBoundingClientRect(),
                    t = Math.max(0, Math.min(e.left / eA, eM)),
                    n = Math.max(0, Math.min((window.innerWidth - e.right) / eA, eM)),
                    a = e.top / eA,
                    i = e.height / eA,
                    r =
                      t > 0 || n > 0 || a > 0 || e.bottom < window.innerHeight
                        ? "var(--app-shell-window-radius, var(--radius-xl-base))"
                        : 0,
                    l = 0
                  if (0 !== r) {
                    let e = getComputedStyle(eS)
                    l =
                      "none" === e.clipPath
                        ? e.borderEndEndRadius
                        : e.getPropertyValue("--app-shell-main-surface-clip-end-radius")
                  }
                  eI((e) =>
                    e?.left === t &&
                    e.right === n &&
                    e.top === a &&
                    e.height === i &&
                    e.borderRadius === r &&
                    e.borderEndEndRadius === l
                      ? e
                      : { left: t, right: n, top: a, height: i, width: "auto", borderRadius: r, borderEndEndRadius: l },
                  )
                },
                t = new ResizeObserver(e)
              return (
                t.observe(eS),
                window.addEventListener("resize", e),
                e(),
                () => {
                  ;(t.disconnect(), window.removeEventListener("resize", e))
                }
              )
            }),
            (p = [eS, eM, eA]),
            (ey[13] = eS),
            (ey[14] = eM),
            (ey[15] = eA),
            (ey[16] = u),
            (ey[17] = p))
          : ((u = ey[16]), (p = ey[17])),
        (0, l.useLayoutEffect)(u, p),
        ey[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = () => {
              let e = ez.current?.parentElement,
                t = () => {
                  null != e && E(e)
                },
                n = () => {
                  null != ez.current && T(ez.current)
                },
                a = new ResizeObserver(t)
              return (
                null != e && a.observe(e),
                window.addEventListener("blur", n),
                window.addEventListener("resize", t),
                document.addEventListener("visibilitychange", n),
                () => {
                  ;(a.disconnect(),
                    window.removeEventListener("blur", n),
                    window.removeEventListener("resize", t),
                    document.removeEventListener("visibilitychange", n))
                }
              )
            }),
            (m = []),
            (ey[18] = m),
            (ey[19] = h))
          : ((m = ey[18]), (h = ey[19])),
        (0, l.useEffect)(h, m))
      let eV = !eP && "backdrop-Hr81vx"
      ;(ey[20] !== eV
        ? ((f = (0, b.A)("inset-0 h-full w-full [clip-path:border-box]", eV)), (ey[20] = eV), (ey[21] = f))
        : (f = ey[21]),
        ey[22] !== eP || ey[23] !== ex
          ? ((g = (e) => {
              e || ex(eP ? "continue" : "dismiss")
            }),
            (ey[22] = eP),
            (ey[23] = ex),
            (ey[24] = g))
          : (g = ey[24]),
        ey[25] !== eF
          ? ((y = (e) => {
              ;((eO.current = document.activeElement instanceof HTMLElement ? document.activeElement : null),
                e.preventDefault(),
                eD.current?.focus(),
                eF())
            }),
            (ey[25] = eF),
            (ey[26] = y))
          : (y = ey[26]),
        ey[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (e) => {
              ;(e.preventDefault(), document.activeElement === document.body && eO.current?.focus())
            }),
            (ey[27] = N))
          : (N = ey[27]),
        ey[28] !== eC || ey[29] !== y
          ? ((k = { style: eC, onInteractOutside: es, onOpenAutoFocus: y, onCloseAutoFocus: N }),
            (ey[28] = eC),
            (ey[29] = y),
            (ey[30] = k))
          : (k = ey[30]),
        ey[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, b.A)("select-none", "scene-Yf5bb0")), (ey[31] = L))
          : (L = ey[31]),
        ey[32] !== eP
          ? ((P = (e) => {
              let t = ez.current
              if (null != t) {
                if (eP || "touch" === e.pointerType) return void T(t)
                ;((t.dataset.pointerClientX = String(e.clientX)),
                  (t.dataset.pointerClientY = String(e.clientY)),
                  E(e.currentTarget))
              }
            }),
            (ey[32] = eP),
            (ey[33] = P))
          : (P = ey[33]),
        ey[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (e) => {
              "touch" === e.pointerType && null != ez.current && T(ez.current)
            }),
            (O = () => {
              null != ez.current && T(ez.current)
            }),
            (D = () => {
              null != ez.current && T(ez.current)
            }),
            (ey[34] = R),
            (ey[35] = O),
            (ey[36] = D))
          : ((R = ey[34]), (O = ey[35]), (D = ey[36])),
        ey[37] !== eN ? ((G = !eN && { opacity: 0 }), (ey[37] = eN), (ey[38] = G)) : (G = ey[38]))
      let eX = +!eP
      ey[39] !== eX ? ((F = { opacity: eX }), (ey[39] = eX), (ey[40] = F)) : (F = ey[40])
      let eW = "fade" === eT ? 0.3 : 0.7,
        eq = 1.65 * !!eR
      ;(ey[41] !== eW || ey[42] !== eq
        ? ((Y = { duration: eW, delay: eq }), (ey[41] = eW), (ey[42] = eq), (ey[43] = Y))
        : (Y = ey[43]),
        ey[44] !== eP || ey[45] !== ex
          ? ((H = () => {
              eP ? ex("continue") : eE(!0)
            }),
            (ey[44] = eP),
            (ey[45] = ex),
            (ey[46] = H))
          : (H = ey[46]),
        ey[47] !== ew || ey[48] !== eH || ey[49] !== eR
          ? ((V = (0, a.jsx)(U, { moving: eH, warping: eR, initialDetail: ew })),
            (ey[47] = ew),
            (ey[48] = eH),
            (ey[49] = eR),
            (ey[50] = V))
          : (V = ey[50]),
        ey[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, a.jsx)("div", { className: "vignette-gda4V6", "aria-hidden": !0 })), (ey[51] = X))
          : (X = ey[51]),
        ey[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = (0, a.jsx)(A.L3, {
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.brandedTitle",
                defaultMessage: "Welcome to {productName}",
                description:
                  "Heading welcoming users to ChatGPT Space, the home for Pages and other files in ChatGPT. Translate the welcome phrase, but keep {productName} as the untranslated product name ChatGPT Space. You may reorder the placeholder to fit your language.",
                values: { productName: "ChatGPT Space" },
              }),
            })),
            (ey[52] = W))
          : (W = ey[52]),
        ey[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, a.jsx)(A.rr, {
              children: (0, a.jsx)(_.A, {
                id: "space.introduction.description",
                defaultMessage: "Your new home to create, share, and collaborate with your team and ChatGPT",
                description:
                  "Space welcome message describing a place to create and collaborate with teammates and ChatGPT",
              }),
            })),
            (ey[53] = q))
          : (q = ey[53]),
        ey[54] !== eH || ey[55] !== ev
          ? ((Z = () => {
              ;(null != ez.current && T(ez.current), ev?.(), eL(eH ? "warp" : "fade"))
            }),
            (ey[54] = eH),
            (ey[55] = ev),
            (ey[56] = Z))
          : (Z = ey[56]),
        ey[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, a.jsx)(_.A, {
              id: "space.introduction.continue",
              defaultMessage: "Continue to Space",
              description:
                "Button that dismisses the Space welcome animation and returns to the Space collection. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
            })),
            (ey[57] = K))
          : (K = ey[57]),
        ey[58] !== eP || ey[59] !== Z
          ? ((Q = (0, a.jsxs)("div", {
              className: "copy-VUngL6",
              children: [
                W,
                q,
                (0, a.jsx)("div", {
                  className: "continue-UAljKe",
                  children: (0, a.jsx)(M.$, {
                    ref: eD,
                    color: "mediaSolid",
                    size: "large",
                    disabled: eP,
                    onClick: Z,
                    children: K,
                  }),
                }),
              ],
            })),
            (ey[58] = eP),
            (ey[59] = Z),
            (ey[60] = Q))
          : (Q = ey[60]),
        ey[61] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, a.jsx)(_.A, {
              id: "space.introduction.dragHelp",
              defaultMessage:
                "Drag and release to move this sample. Use arrow keys to nudge, Enter to toss, or Home to return",
              description: "Keyboard and pointer instructions for the movable example work in the Space welcome screen",
            })),
            (ey[61] = $))
          : ($ = ey[61]),
        ey[62] !== eB
          ? ((J = (0, a.jsx)("p", { id: eB, className: "sr-only", children: $ })), (ey[62] = eB), (ey[63] = J))
          : (J = ey[63]),
        ey[64] !== e_
          ? ((ee = e_.formatMessage({
              id: "space.introduction.dragPitch",
              defaultMessage: "Drag Field Notes",
              description: "Accessible name for the movable example presentation in the Space welcome screen",
            })),
            (ey[64] = e_),
            (ey[65] = ee))
          : (ee = ey[65]),
        ey[66] !== eB || ey[67] !== eH || ey[68] !== ee || ey[69] !== eR
          ? ((et = (0, a.jsx)(el, { kind: "pitch", label: ee, helpId: eB, moving: eH, warping: eR })),
            (ey[66] = eB),
            (ey[67] = eH),
            (ey[68] = ee),
            (ey[69] = eR),
            (ey[70] = et))
          : (et = ey[70]),
        ey[71] !== e_
          ? ((en = e_.formatMessage({
              id: "space.introduction.dragArticle",
              defaultMessage: "Drag article",
              description:
                "Accessible name for the movable Intelligence Age example article in the Space welcome screen",
            })),
            (ey[71] = e_),
            (ey[72] = en))
          : (en = ey[72]),
        ey[73] !== eB || ey[74] !== eH || ey[75] !== en || ey[76] !== eR
          ? ((ea = (0, a.jsx)(el, { kind: "resume", label: en, helpId: eB, moving: eH, warping: eR })),
            (ey[73] = eB),
            (ey[74] = eH),
            (ey[75] = en),
            (ey[76] = eR),
            (ey[77] = ea))
          : (ea = ey[77]),
        ey[78] !== e_
          ? ((ei = e_.formatMessage({
              id: "space.introduction.dragPottery",
              defaultMessage: "Drag pottery website",
              description: "Accessible name for the movable example pottery website in the Space welcome screen",
            })),
            (ey[78] = e_),
            (ey[79] = ei))
          : (ei = ey[79]),
        ey[80] !== eB || ey[81] !== eH || ey[82] !== ei || ey[83] !== eR
          ? ((er = (0, a.jsx)(el, { kind: "pottery", label: ei, helpId: eB, moving: eH, warping: eR })),
            (ey[80] = eB),
            (ey[81] = eH),
            (ey[82] = ei),
            (ey[83] = eR),
            (ey[84] = er))
          : (er = ey[84]),
        ey[85] !== e_
          ? ((eo = e_.formatMessage({
              id: "space.introduction.dragBlueprint",
              defaultMessage: "Drag desk lamp blueprint",
              description: "Accessible name for the movable example desk lamp blueprint in the Space welcome screen",
            })),
            (ey[85] = e_),
            (ey[86] = eo))
          : (eo = ey[86]),
        ey[87] !== eB || ey[88] !== eH || ey[89] !== eo || ey[90] !== eR
          ? ((eu = (0, a.jsx)(el, { kind: "blueprint", label: eo, helpId: eB, moving: eH, warping: eR })),
            (ey[87] = eB),
            (ey[88] = eH),
            (ey[89] = eo),
            (ey[90] = eR),
            (ey[91] = eu))
          : (eu = ey[91]),
        ey[92] !== et || ey[93] !== ea || ey[94] !== er || ey[95] !== eu
          ? ((ep = (0, a.jsxs)("div", {
              className: "samples-YXkxqs",
              "data-work-samples": !0,
              children: [et, ea, er, eu],
            })),
            (ey[92] = et),
            (ey[93] = ea),
            (ey[94] = er),
            (ey[95] = eu),
            (ey[96] = ep))
          : (ep = ey[96]))
      let eZ = eH && !eP
      return (
        ey[97] !== eN || ey[98] !== eZ
          ? ((em = (0, a.jsx)(B, { moving: eZ, reduceMotion: eN })), (ey[97] = eN), (ey[98] = eZ), (ey[99] = em))
          : (em = ey[99]),
        ey[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = (0, a.jsx)("span", {
              ref: ez,
              className: "you-AnADpb",
              "data-pointer-badge": !0,
              hidden: !0,
              "aria-hidden": !0,
              children: (0, a.jsx)("span", {
                className: z,
                children: (0, a.jsx)(_.A, {
                  id: "space.introduction.you",
                  defaultMessage: "You",
                  description: "Label following the user's pointer in the Space welcome animation",
                }),
              }),
            })),
            (ey[100] = eh))
          : (eh = ey[100]),
        ey[101] !== eH ||
        ey[102] !== P ||
        ey[103] !== G ||
        ey[104] !== F ||
        ey[105] !== Y ||
        ey[106] !== H ||
        ey[107] !== V ||
        ey[108] !== Q ||
        ey[109] !== J ||
        ey[110] !== ep ||
        ey[111] !== em ||
        ey[112] !== eR
          ? ((ef = (0, a.jsxs)(v.P.div, {
              className: L,
              "data-motion": eH,
              "data-warping": eR,
              onPointerMoveCapture: P,
              onPointerDownCapture: R,
              onPointerCancelCapture: O,
              onPointerLeave: D,
              initial: G,
              animate: F,
              transition: Y,
              onAnimationComplete: H,
              children: [V, X, Q, J, ep, em, eh],
            })),
            (ey[101] = eH),
            (ey[102] = P),
            (ey[103] = G),
            (ey[104] = F),
            (ey[105] = Y),
            (ey[106] = H),
            (ey[107] = V),
            (ey[108] = Q),
            (ey[109] = J),
            (ey[110] = ep),
            (ey[111] = em),
            (ey[112] = eR),
            (ey[113] = ef))
          : (ef = ey[113]),
        ey[114] !== f || ey[115] !== g || ey[116] !== k || ey[117] !== ef
          ? ((eg = (0, a.jsx)(A.lG, {
              open: !0,
              modal: !1,
              unstyledContent: !0,
              viewportSized: !0,
              variant: "onboarding",
              contentPosition: "anchored",
              contentClassName: f,
              showDialogClose: !1,
              onOpenChange: g,
              contentProps: k,
              children: ef,
            })),
            (ey[114] = f),
            (ey[115] = g),
            (ey[116] = k),
            (ey[117] = ef),
            (ey[118] = eg))
          : (eg = ey[118]),
        eg
      )
    }
    function es(e) {
      e.preventDefault()
    }
    function ec() {
      return !0
    }
    function ed() {
      return !document.hidden
    }
    function eu() {
      let e,
        t = (0, i.c)(3),
        n = (0, r.Ul)(h.w),
        l = (0, r.Ul)(y.spaceIntroductionIdentity$)
      return (
        t[0] !== n || t[1] !== l
          ? ((e = n && null != l ? (0, a.jsx)(ep, { identityKey: l.key }, l.key) : null),
            (t[0] = n),
            (t[1] = l),
            (t[2] = e))
          : (e = t[2]),
        e
      )
    }
    function ep(e) {
      let t,
        n,
        o,
        c = (0, i.c)(8),
        { identityKey: d } = e,
        u = (0, r.gh)(p.u),
        m = (0, r.Ul)(y.kx)
      return (
        c[0] !== d || c[1] !== u
          ? ((t = () => {
              let e = () => {
                ;(0, y.syncSpaceIntroductionSeen)(u)
              }
              return (
                window.addEventListener("focus", e),
                () => {
                  ;(window.removeEventListener("focus", e), u.set(s.f_, d, !1))
                }
              )
            }),
            (n = [u, d]),
            (c[0] = d),
            (c[1] = u),
            (c[2] = t),
            (c[3] = n))
          : ((t = c[2]), (n = c[3])),
        (0, l.useEffect)(t, n),
        c[4] !== d || c[5] !== m || c[6] !== u
          ? ((o = m
              ? (0, a.jsx)(eo, {
                  onShown: () => {
                    ;((0, g.yy)(u, f.CodexSpacesOnboarding, {
                      action: f.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_SHOWN,
                    }),
                      u.set(s.f_, d, !0),
                      (0, y.Tj)(u, d))
                  },
                  onContinue: () => {
                    ;(0, g.yy)(u, f.CodexSpacesOnboarding, {
                      action: f.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_CONTINUED,
                    })
                  },
                  onDismiss: (e) => {
                    ;("dismiss" === e &&
                      (0, g.yy)(u, f.CodexSpacesOnboarding, {
                        action: f.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_DISMISSED,
                      }),
                      u.set(y.vV, d, !1),
                      u.set(s.f_, d, !1))
                  },
                })
              : null),
            (c[4] = d),
            (c[5] = m),
            (c[6] = u),
            (c[7] = o))
          : (o = c[7]),
        o
      )
    }
    var em = n("hlVK"),
      eh = n("prHy"),
      ef = n("Osm9"),
      eg = n("oHzU"),
      ey = n("Ghh3"),
      ex = n("TNWb"),
      eb = n("X6Vn"),
      ev = n("OMIV"),
      ew = n("Nwp9"),
      e_ = n("Tn6I")
    let eS = (0, ew.m3)("space-slides-introduction-dismissed-v1", {})
    function ej() {
      return (
        null !=
        document.querySelector(
          `:is(${ex.sC}, [role="dialog"][data-state="open"]:not([aria-modal="false"])):not(.beacon-modal-space_slides_introduction)`,
        )
      )
    }
    let eM = (0, r.vU)(p.u, ({ accountId: e, identityKey: t, userId: n, locale: a }, { get: i }) => ({
      queryKey: ["space-slides-introduction", t, a],
      enabled: !i(eS)[t] && i(ev.JW, "183803860"),
      staleTime: 0,
      retry: !1,
      refetchOnMount: "always",
      refetchOnWindowFocus: !1,
      queryFn: async ({ signal: t }) => {
        let a = window.electronBridge?.getDesktopUserAgent?.(),
          i = await ey.Request.safeGet("/beacons_v2", {
            signal: t,
            expectedIdentity: { accountId: e, userId: n },
            additionalHeaders: {
              "Cache-Control": "no-store",
              "x-openai-use-sheep": "1",
              ...(null == a ? {} : { "User-Agent": a }),
            },
            parameters: { query: { surface: ["space-modal"] } },
          }),
          r = (0, eh.Yw)(i.surfaces["space-modal"], [])
        return null != r && (0, eg.cI)(r) && "space_slides_introduction" === r.beacon_id ? r : null
      },
    }))
    function eA(e) {
      let t,
        n,
        o,
        s,
        c,
        d,
        u = (0, i.c)(25),
        { identityKey: m, accountId: h, userId: y } = e,
        x = (0, r.gh)(p.u),
        { locale: b } = (0, w.A)(),
        v = (0, r._U)(ev.JW, "183803860"),
        [_, S] = (0, l.useState)(!1),
        j = (0, eb.Rv)(),
        M = (0, l.useSyncExternalStore)(ex.tb, ej, eC),
        A = (0, r.Ul)(eS)[m]
      u[0] !== h || u[1] !== m || u[2] !== b || u[3] !== y
        ? ((t = { identityKey: m, accountId: h, userId: y, locale: b }),
          (u[0] = h),
          (u[1] = m),
          (u[2] = b),
          (u[3] = y),
          (u[4] = t))
        : (t = u[4])
      let { data: C, isFetching: I, isError: N } = (0, r._U)(eM, t),
        k = (0, l.useRef)(!1)
      if (!v) return null
      if (_) {
        let e
        return (
          u[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(e_.SpaceTemplateGalleryDialog, {
                initialGroupId: "presentation",
                onClose: () => S(!1),
              })),
              (u[5] = e))
            : (e = u[5]),
          e
        )
      }
      if (A || I || N || null == C || j || M) return null
      u[6] !== m || u[7] !== x
        ? ((n = () => {
            x.set(eS, (e) => ({ ...e, [m]: !0 }))
          }),
          (u[6] = m),
          (u[7] = x),
          (u[8] = n))
        : (n = u[8])
      let E = n
      return (
        u[9] !== x
          ? ((o = (e) =>
              "create_slide" === e.id
                ? () => (
                    (0, g.yy)(x, f.CodexSpacesTemplateGallery, {
                      action: f.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_OPEN_REQUESTED,
                    }),
                    S(!0),
                    !0
                  )
                : void 0),
            (u[9] = x),
            (u[10] = o))
          : (o = u[10]),
        u[11] !== h || u[12] !== C
          ? ((s = () => {
              k.current || ((k.current = !0), (0, em.Zy)({ beacon: C, accountId: h, eventType: "view" }))
            }),
            (u[11] = h),
            (u[12] = C),
            (u[13] = s))
          : (s = u[13]),
        u[14] !== h || u[15] !== C || u[16] !== E
          ? ((c = () => {
              ;(E(), (0, em.Zy)({ beacon: C, accountId: h, eventType: "dismiss" }))
            }),
            (u[14] = h),
            (u[15] = C),
            (u[16] = E),
            (u[17] = c))
          : (c = u[17]),
        u[18] !== h || u[19] !== C || u[20] !== E || u[21] !== o || u[22] !== s || u[23] !== c
          ? ((d = (0, a.jsx)(ef.o, {
              beacon: C,
              eventAccountId: h,
              getActionOverride: o,
              onOpen: s,
              onDismiss: c,
              onResolve: E,
            })),
            (u[18] = h),
            (u[19] = C),
            (u[20] = E),
            (u[21] = o),
            (u[22] = s),
            (u[23] = c),
            (u[24] = d))
          : (d = u[24]),
        d
      )
    }
    function eC() {
      return !1
    }
    let eI = (0, r.RD)(p.u, ({ get: e, scope: t }) => ({
      enabled: e(h.vy),
      queryFn: async () => (await (0, m.r)(t), !0),
      queryKey: ["space-onboarding-entry"],
      refetchOnMount: "always",
      refetchOnWindowFocus: !1,
      retry: !1,
      staleTime: 0,
    }))
    function eN() {
      let e,
        t = (0, i.c)(7),
        n = (0, r.Ul)(h.vy),
        l = (0, r.Ul)(y.kx),
        c = (0, r.Ul)(s.aJ),
        d = (0, r.Ul)(y.spaceIntroductionIdentity$),
        p = (0, o.zy)(),
        m = (0, r.Ul)(u.x2)
      ;(0, r.Ul)(eI)
      let f = null != (0, o.B6)("/space", p.pathname) || null != (0, o.B6)("/spaces/:spaceId", p.pathname)
      if (
        !n ||
        null == d ||
        null == c ||
        null == m ||
        (!l && !f) ||
        (!m.state?.showSpaceIntroduction && (!c || !f)) ||
        m.pathname !== p.pathname ||
        m.search !== p.search
      )
        return null
      if (l && ("/space" !== p.pathname || "?tab=suggested" !== p.search)) {
        let e
        return (
          t[0] !== p.state
            ? ((e = (0, a.jsx)(o.C5, { to: "/space?tab=suggested", state: p.state, replace: !0 })),
              (t[0] = p.state),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] !== d.accountId || t[3] !== d.key || t[4] !== d.userId || t[5] !== c
          ? ((e = (0, a.jsx)(ek, { accountId: d.accountId, userId: d.userId, identityKey: d.key, seen: c }, d.key)),
            (t[2] = d.accountId),
            (t[3] = d.key),
            (t[4] = d.userId),
            (t[5] = c),
            (t[6] = e))
          : (e = t[6]),
        e
      )
    }
    function ek(e) {
      let t,
        n,
        s,
        p,
        m,
        h,
        f = (0, i.c)(21),
        { accountId: g, userId: x, identityKey: b, seen: v } = e,
        [w] = (0, l.useState)(v),
        _ = (0, r.Ul)(y.kx),
        S = (0, r.Ul)(u.x2),
        j = (0, r.Ul)(d.Hb)
      if (null == S) return null
      f[0] !== S.pathname || f[1] !== S.search
        ? ((t = (0, c.ER)(S.pathname, S.search, "/space")), (f[0] = S.pathname), (f[1] = S.search), (f[2] = t))
        : (t = f[2])
      let M = t
      f[3] !== S.search ? ((n = new URLSearchParams(S.search).get("view")), (f[3] = S.search), (f[4] = n)) : (n = f[4])
      let A = n
      f[5] !== M || f[6] !== S.pathname || f[7] !== S.state?.libraryPreview || f[8] !== j || f[9] !== A
        ? ((s =
            null != (0, o.B6)("/space", S.pathname) &&
            "suggested" === M.tab &&
            !M.deleted &&
            !M.search &&
            (null == A || "slide" === A) &&
            S.state?.libraryPreview == null &&
            null == j),
          (f[5] = M),
          (f[6] = S.pathname),
          (f[7] = S.state?.libraryPreview),
          (f[8] = j),
          (f[9] = A),
          (f[10] = s))
        : (s = f[10])
      let C = s
      return (
        f[11] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(eu, {})), (f[11] = p)) : (p = f[11]),
        f[12] !== g || f[13] !== b || f[14] !== C || f[15] !== _ || f[16] !== w || f[17] !== x
          ? ((m = w && !_ && C ? (0, a.jsx)(eA, { accountId: g, userId: x, identityKey: b }) : null),
            (f[12] = g),
            (f[13] = b),
            (f[14] = C),
            (f[15] = _),
            (f[16] = w),
            (f[17] = x),
            (f[18] = m))
          : (m = f[18]),
        f[19] !== m ? ((h = (0, a.jsxs)(a.Fragment, { children: [p, m] })), (f[19] = m), (f[20] = h)) : (h = f[20]),
        h
      )
    }
  },
}
//# sourceMappingURL=310577.ebdd12c7b3.js.map
