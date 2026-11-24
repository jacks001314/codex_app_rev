export const __rspack_esm_ids = [176964]
export const __webpack_modules__ = {
  RKHO(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 716,
          height: 716,
          viewBox: "149 149 418 418",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z",
            fill: "currentColor",
          }),
        })))
  },
  SIrB(e, t, a) {
    let n = {
      document: ["document", "google-docs"],
      presentation: ["presentation", "google-slides"],
      spreadsheet: ["spreadsheet", "google-sheets"],
      site: ["site"],
    }
    function i(e) {
      return n[e]
    }
    a.d(
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
          let a = i(t),
            n = new Set()
          return e
            .filter(({ template: e, enabled: t }) => !(!t || !a.includes(e.type) || n.has(e.id)) && (n.add(e.id), !0))
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
          return Object.entries(n).find((t) => t[1].some((t) => t === e))?.[0] ?? null
        },
        qt: i,
      },
    )
  },
  e7LJ(e, t, a) {
    var n = a("ABep"),
      i = a("zd8w")
    let s = i.createContext(null),
      r = i.createContext(null),
      l = () => {},
      o = i.createContext(l),
      c = i.createContext(null)
    a.d(
      t,
      {},
      {
        Dp: function ({ ui: e, formatMessage: t, logEvent: a, experiments: d, children: u }) {
          let p = i.useMemo(
              () =>
                void 0 === a
                  ? l
                  : (e, t) => {
                      try {
                        a(e, t)
                      } catch {}
                    },
              [a],
            ),
            m = i.useMemo(
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
          return (0, n.jsx)(s, {
            value: e,
            children: (0, n.jsx)(r, {
              value: t ?? null,
              children: (0, n.jsx)(o, { value: p, children: (0, n.jsx)(c, { value: m, children: u }) }),
            }),
          })
        },
        O8: function () {
          let e = i.useContext(s)
          if (null === e) throw Error("useHostUI must be used within a TortillaProvider.")
          return e
        },
        oo: function () {
          let e = i.useContext(r)
          if (null === e) throw Error("useFormatMessage requires a TortillaProvider with formatMessage.")
          return e
        },
      },
    )
  },
  BI6E(e, t, a) {
    var n = a("Qgfj")
    let i = (0, n.YK)({
        all: {
          id: "space.templates.create.prompt",
          defaultMessage:
            "Create a new template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        site: {
          id: "home.artifactTemplates.createSite.prompt",
          defaultMessage:
            "Create a new site template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        document: {
          id: "home.artifactTemplates.createDocument.prompt",
          defaultMessage:
            "Create a new document template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        presentation: {
          id: "home.artifactTemplates.createPresentation.prompt",
          defaultMessage:
            "Create a new presentation template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        spreadsheet: {
          id: "home.artifactTemplates.createSpreadsheet.prompt",
          defaultMessage:
            "Create a new spreadsheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
      }),
      s = (0, n.YK)({
        page: { id: "space.pageTemplates.category", defaultMessage: "Pages" },
        site: { id: "home.artifactTemplates.sites", defaultMessage: "Sites" },
        document: { id: "home.artifactTemplates.documents", defaultMessage: "Documents" },
        presentation: { id: "home.artifactTemplates.presentations", defaultMessage: "Presentations" },
        spreadsheet: { id: "home.artifactTemplates.spreadsheets", defaultMessage: "Spreadsheets" },
      }),
      r = (0, n.YK)({
        customizeTemplatePrompt: {
          id: "artifactTemplate.customizePrompt",
          defaultMessage: "Help me customize a personal copy of {template} using {templateCreator}",
        },
        editTemplatePrompt: {
          id: "artifactTemplate.resultCard.editPrompt",
          defaultMessage: "Help me make updates to {template} using {templateCreator}",
        },
      })
    a.d(t, {}, { T5: i, ho: r, xs: s })
  },
  eOqt(e, t, a) {
    a.d(t, { u: () => C })
    var n = a("ABep"),
      i = a("QosV")
    let s = (0, a("ESTr").a)({
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
      body: '<path d="M2.50504 6.52352C2.95415 6.07507 3.68211 6.07474 4.13102 6.52352L5.36344 7.75692C5.81224 8.20596 5.81222 8.93384 5.36344 9.38289L4.13102 10.6153C3.68199 11.0643 2.95416 11.0642 2.50504 10.6153L1.27164 9.38289C0.822781 8.9339 0.822947 8.20601 1.27164 7.75692L2.50504 6.52352ZM3.56559 7.08992C3.42899 6.95332 3.20717 6.95349 3.07047 7.08992L1.83805 8.32235C1.70136 8.45903 1.70136 8.68078 1.83805 8.81746L3.07047 10.0499C3.20717 10.1863 3.42898 10.1865 3.56559 10.0499L4.79801 8.81746C4.93437 8.68083 4.93439 8.45897 4.79801 8.32235L3.56559 7.08992Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.9191 6.6827C10.5541 6.68281 11.0685 7.19803 11.0685 7.83309V9.68465C11.0684 10.3196 10.5541 10.834 9.9191 10.8341H8.06754C7.43248 10.8341 6.91726 10.3197 6.91715 9.68465V7.83309C6.91715 7.19796 7.43241 6.6827 8.06754 6.6827H9.9191ZM8.06754 7.48348C7.87424 7.48348 7.71793 7.63979 7.71793 7.83309V9.68465C7.71805 9.87785 7.87431 10.0343 8.06754 10.0343H9.9191C10.1122 10.0341 10.2686 9.87778 10.2687 9.68465V7.83309C10.2687 7.63986 10.1123 7.48359 9.9191 7.48348H8.06754Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.99332 1.15242C10.1844 1.15247 11.1496 2.11853 11.1496 3.30965C11.1495 4.50073 10.1844 5.46586 8.99332 5.4659C7.8022 5.4659 6.83614 4.50076 6.83609 3.30965C6.83609 2.11851 7.80218 1.15242 8.99332 1.15242ZM8.99332 1.95321C8.24401 1.95321 7.63688 2.56033 7.63688 3.30965C7.63692 4.05893 8.24403 4.6661 8.99332 4.6661C9.74257 4.66605 10.3497 4.0589 10.3498 3.30965C10.3498 2.56036 9.7426 1.95325 8.99332 1.95321Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M2.53727 1.57039C2.88314 0.967491 3.75303 0.967351 4.09879 1.57039L5.45914 3.94442C5.80287 4.5442 5.36999 5.29155 4.67887 5.29207H1.95719C1.26569 5.29207 0.832208 4.54439 1.17594 3.94442L2.53727 1.57039ZM3.40445 1.96785C3.36603 1.90113 3.26915 1.90124 3.23063 1.96785L1.87027 4.34188C1.83207 4.40854 1.88035 4.49227 1.95719 4.49227H4.67887C4.75528 4.49175 4.80289 4.40833 4.76481 4.34188L3.40445 1.96785Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var r = a("e7LJ"),
      l = a("on57"),
      o = a("Wf1j"),
      c = a("Sm6l"),
      d = a("JNtf"),
      u = a("mUDD"),
      p = a("bqtn"),
      m = a("HOLv"),
      f = a("bVeK"),
      h = a("X3K1"),
      x = a("BrP7"),
      g = a("zLIa"),
      b = a("OGl1"),
      y = a("NKFb"),
      _ = a("DqAq"),
      w = a("nDx1")
    let v = {
      Button: c.$,
      Input: ({ name: e, ...t }) => (0, n.jsx)(g.pd, { ...t, id: e, name: e }),
      Label: ({ htmlFor: e, ...t }) => (0, n.jsx)("label", { ...t, htmlFor: e }),
      Skeleton: ({ className: e }) => (0, n.jsx)(h.X, { as: "span", className: (0, l.A)("block", e), size: "custom" }),
      Dialog: function (e) {
        let t,
          a,
          s,
          r,
          l,
          o,
          c,
          p,
          m = (0, i.c)(16)
        ;(m[0] !== e
          ? (({ title: r, description: a, children: t, ...s } = e),
            (m[0] = e),
            (m[1] = t),
            (m[2] = a),
            (m[3] = s),
            (m[4] = r))
          : ((t = m[1]), (a = m[2]), (s = m[3]), (r = m[4])),
          m[5] !== r
            ? ((l = (0, n.jsx)(d.L3, { className: "sr-only", children: r })), (m[5] = r), (m[6] = l))
            : (l = m[6]))
        let f = a ?? r
        return (
          m[7] !== f
            ? ((o = (0, n.jsx)(d.rr, { className: "sr-only", children: f })), (m[7] = f), (m[8] = o))
            : (o = m[8]),
          m[9] !== t
            ? ((c = (0, n.jsx)(u.R4, { variant: "chatgpt", size: "full", children: t })), (m[9] = t), (m[10] = c))
            : (c = m[10]),
          m[11] !== s || m[12] !== l || m[13] !== o || m[14] !== c
            ? ((p = (0, n.jsxs)(d.lG, { ...s, children: [l, o, c] })),
              (m[11] = s),
              (m[12] = l),
              (m[13] = o),
              (m[14] = c),
              (m[15] = p))
            : (p = m[15]),
          p
        )
      },
      Tabs: x.t,
      Dropdown: { Root: p.Ab, Item: p.ms.Item },
      icons: {
        templateCreator: (e) => (0, n.jsx)(m.I, { asset: s, ...e }),
        close: f.P9U,
        "chevron-left": f.KBq,
        "chevron-right": f.j1b,
        more: f.e4G,
        plus: f.ONy,
        shapes: f.jrs,
        "category-document": f.o_G,
        "category-presentation": f.jXf,
        "category-spreadsheet": f.NSE,
        "category-site": f.cfl,
        site: f.cfl,
        document: b.Ug.artifactDocument,
        presentation: b.Ug.presentation,
        spreadsheet: b.Ug.spreadsheet,
        "google-docs": y.A,
        "google-slides": w.A,
        "google-sheets": _.A,
      },
    }
    function C(e) {
      let t,
        a = (0, i.c)(3),
        { children: s } = e,
        l = (0, o.A)()
      return (
        a[0] !== s || a[1] !== l.formatMessage
          ? ((t = (0, n.jsx)(r.Dp, { ui: v, formatMessage: l.formatMessage, children: s })),
            (a[0] = s),
            (a[1] = l.formatMessage),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
  },
  IDma(e, t, a) {
    var n = a("SPnB")
    a.d(
      t,
      {},
      {
        t: function (e, t, a) {
          let i = e.get(n.PO)
          return (
            "chatgpt" === i.authMethod &&
            !i.authLoading &&
            !i.accountLoading &&
            i.accountId === t &&
            i.authenticatedAccountId === t &&
            i.userId === a
          )
        },
      },
    )
  },
  Eso4(e, t, a) {
    a.d(
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
  prHy(e, t, a) {
    var n = a("ASxG"),
      i = a("s4w7"),
      s = a("h6ff"),
      r = a("Eso4")
    let l = n.YjP().refine((e) => e.trim().length > 0, "Home tooltip title must not be blank"),
      o = n
        .YjP()
        .nullable()
        .optional()
        .transform((e) => e ?? null),
      c = {
        action_items: n.YOg(n.ZmZ()).length(0),
        beacon_name: n.YjP(),
        show_timing: n.k5n(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
        type: n.euz("beacon_ui_response"),
      },
      d = n.KCZ([
        n
          .Ikc({
            ...c,
            beacon_id: n.euz("voice_mode_tooltip"),
            ui_info: n
              .Ikc({
                subtitle: o,
                target: n.euz("composer-voice-button"),
                title: l,
                type: n.euz("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
        n
          .Ikc({
            ...c,
            beacon_id: n.euz("tpp_nux_tooltip"),
            ui_info: n
              .Ikc({
                subtitle: o,
                target: n.euz("tpp-surface-mode-toggle"),
                title: l,
                type: n.euz("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
      ]),
      u = n.KCZ([d, i.E2]),
      p = n.KCZ([s.Bw, u])
    a.d(
      t,
      {},
      {
        Bw: p,
        Yw: function (e, t) {
          let a = p.safeParse(e)
          if (a.success) return a.data
          let n = s.th.safeParse(e)
          return n.success && (0, r.p)(n.data, t) ? n.data : null
        },
        xU: function (e) {
          return u.safeParse(e).success
        },
      },
    )
  },
  VKqT(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("on57"),
      r = a("Sm6l"),
      l = a("y51z")
    a.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            a,
            o,
            c,
            d,
            u,
            p = (0, i.c)(15)
          p[0] !== e
            ? (({ appearance: t, className: a, uniform: c, ...o } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = a),
              (p[3] = o),
              (p[4] = c))
            : ((t = p[1]), (a = p[2]), (o = p[3]), (c = p[4]))
          let m = "accent" === t ? "upgrade" : o.color
          p[5] !== t || p[6] !== a || p[7] !== c
            ? ((d = (0, s.A)(
                null != t && [
                  "gap-1 rounded-full",
                  "dismiss" === t || c ? l.A.dismissButton : l.A.action,
                  "primary" === t && l.A.primary,
                  "secondary" === t && l.A.secondary,
                ],
                a,
              )),
              (p[5] = t),
              (p[6] = a),
              (p[7] = c),
              (p[8] = d))
            : (d = p[8])
          let f = null != t && "accent" !== t
          return (
            p[9] !== o || p[10] !== m || p[11] !== d || p[12] !== f || p[13] !== c
              ? ((u = (0, n.jsx)(r.$, { ...o, color: m, className: d, unstyled: f, uniform: c })),
                (p[9] = o),
                (p[10] = m),
                (p[11] = d),
                (p[12] = f),
                (p[13] = c),
                (p[14] = u))
              : (u = p[14]),
            u
          )
        },
      },
    )
  },
  BrP7(e, t, a) {
    a.d(t, { t: () => v })
    var n = a("ABep"),
      i = a("QosV"),
      s = a("i1uX"),
      r = a("on57"),
      l = a("IjbW"),
      o = a("K4Cx"),
      c = a("zd8w"),
      d = a("UxN3"),
      u = a("SziE"),
      p = a("hZax"),
      m = a("Sm6l")
    let f = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function h(e) {
      let t,
        a,
        s,
        l,
        o,
        c,
        d,
        u,
        p,
        h,
        x,
        g,
        b = (0, i.c)(26)
      b[0] !== e
        ? (({ children: t, icon: a, size: l, surface: o, labelVisibility: c, ...s } = e),
          (b[0] = e),
          (b[1] = t),
          (b[2] = a),
          (b[3] = s),
          (b[4] = l),
          (b[5] = o),
          (b[6] = c))
        : ((t = b[1]), (a = b[2]), (s = b[3]), (l = b[4]), (o = b[5]), (c = b[6]))
      let y = void 0 === o ? "elevated" : o,
        _ = void 0 === c ? "visible" : c,
        w = "large" === l && "visible" === _ && "pb-1.5"
      b[7] !== w ? ((d = (0, r.A)("group/labeled-icon flex-col gap-1.5", w)), (b[7] = w), (b[8] = d)) : (d = b[8])
      let v = "elevated" === y ? "border shadow-xs" : "border-hairline",
        C = f[l]
      ;(b[9] !== v || b[10] !== C.icon
        ? ((u = (0, r.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            v,
            C.icon,
          )),
          (b[9] = v),
          (b[10] = C.icon),
          (b[11] = u))
        : (u = b[11]),
        b[12] !== a || b[13] !== u
          ? ((p = (0, n.jsx)("span", { className: u, children: a })), (b[12] = a), (b[13] = u), (b[14] = p))
          : (p = b[14]))
      let j = "hidden" === _ ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        M = "visible" === _ && f[l].caption
      return (
        b[15] !== M || b[16] !== j ? ((h = (0, r.A)(j, M)), (b[15] = M), (b[16] = j), (b[17] = h)) : (h = b[17]),
        b[18] !== t || b[19] !== h
          ? ((x = (0, n.jsx)("span", { className: h, children: t })), (b[18] = t), (b[19] = h), (b[20] = x))
          : (x = b[20]),
        b[21] !== s || b[22] !== x || b[23] !== d || b[24] !== p
          ? ((g = (0, n.jsxs)(m.$, {
              ...s,
              className: d,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [p, x],
            })),
            (b[21] = s),
            (b[22] = x),
            (b[23] = d),
            (b[24] = p),
            (b[25] = g))
          : (g = b[25]),
        g
      )
    }
    let x = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      g = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${x} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      b = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      y = {
        ...g,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${b} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      _ = {
        ...g,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      w = {
        text: {
          ...g,
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
        toolbar: g,
        settings: { ...g, tabButtonClassName: `${x} button-toolbar` },
        search: {
          ...g,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...g,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...g,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${g.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...g,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...g, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
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
          ...g,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...g,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...g,
          listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        segmentedPill: _,
        segmentedPillMuted: {
          ..._,
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default dark:text-text/50",
        },
        profile: {
          ...g,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...g, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
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
    function v(e) {
      let t,
        a = (0, i.c)(39),
        {
          tabs: l,
          selectedKey: o,
          onSelect: f,
          onTabClick: x,
          onTabHover: g,
          className: b,
          fill: y,
          scrollable: _,
          tabListRef: v,
          variant: M,
          ariaLabel: N,
          ariaLabelledBy: S,
          activationMode: k,
          animateSelection: A,
          dividerBefore: I,
        } = e,
        E = void 0 !== y && y,
        L = void 0 !== _ && _,
        T = void 0 === M ? "segmented" : M,
        P = void 0 === k ? "automatic" : k,
        z = (0, c.useId)(),
        R = w[T],
        O = "inset" === T || "choice" === T,
        D = (0, p.Zj)(!O && "icon" !== T && "text-secondary" === R.unselectedTextClassName && "1244723012"),
        B = void 0 !== A && A && ("segmentedPill" === T || "segmentedPillMuted" === T),
        q = B ? "text-default font-medium" : R.selectedClassName
      if (
        a[0] !== P ||
        a[1] !== B ||
        a[2] !== N ||
        a[3] !== S ||
        a[4] !== b ||
        a[5] !== I ||
        a[6] !== E ||
        a[7] !== f ||
        a[8] !== x ||
        a[9] !== g ||
        a[10] !== R.closeButtonClassName ||
        a[11] !== R.itemClassName ||
        a[12] !== R.listClassName ||
        a[13] !== R.segmentedEdges ||
        a[14] !== R.selectionIndicator ||
        a[15] !== R.tabButtonClassName ||
        a[16] !== R.textSizeClassName ||
        a[17] !== R.unselectedClassName ||
        a[18] !== R.unselectedTextClassName ||
        a[19] !== L ||
        a[20] !== q ||
        a[21] !== o ||
        a[22] !== z ||
        a[23] !== v ||
        a[24] !== l ||
        a[25] !== D ||
        a[26] !== O ||
        a[27] !== T
      ) {
        let e,
          i,
          c = (0, r.A)(D ? "text-tertiary" : R.unselectedTextClassName, R.unselectedClassName),
          p = O ? m.$ : "button",
          y = E && "w-full",
          _ = L && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(a[29] !== b || a[30] !== R.listClassName || a[31] !== y || a[32] !== _
          ? ((e = (0, r.A)(R.listClassName, y, _, b)),
            (a[29] = b),
            (a[30] = R.listClassName),
            (a[31] = y),
            (a[32] = _),
            (a[33] = e))
          : (e = a[33]),
          a[34] !== P || a[35] !== f || a[36] !== L || a[37] !== l
            ? ((i = (e) => {
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
                let i = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? a.length - 1
                      : (n + (e.key === (i ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + a.length) % a.length),
                  a[t]?.focus(),
                  L && a[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let s = l[t]
                null != s && "automatic" === P && f(s.key, e.timeStamp)
              }),
              (a[34] = P),
              (a[35] = f),
              (a[36] = L),
              (a[37] = l),
              (a[38] = i))
            : (i = a[38]),
          (t = (0, n.jsx)("div", {
            ref: v,
            role: "tablist",
            tabIndex: -1,
            "aria-label": N,
            "aria-labelledby": S,
            className: e,
            onWheel: L ? C : void 0,
            onKeyDown: i,
            children: l.map((e, t) => {
              let a,
                i,
                m = e.key === o,
                b = m ? q : c,
                y = 0 === t,
                _ = t === l.length - 1,
                w = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": m,
                  tabIndex: m ? 0 : -1,
                  onPointerEnter: null == g ? void 0 : () => g(e.key),
                  onClick: (t) => {
                    ;((m && "manual" !== P) || f(e.key, t.timeStamp), x?.(e.key))
                  },
                }
              return (
                "inset" === T
                  ? ((a = m ? "segmentedInsetSelected" : "ghost"), (i = "compact"))
                  : "choice" === T && ((a = m ? "choiceSelected" : "outlineGhost"), (i = "dialogAction")),
                (0, n.jsxs)(
                  "div",
                  {
                    className: (0, r.A)(
                      "relative flex min-w-0 items-center",
                      R.itemClassName,
                      E && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      y || e.key !== I
                        ? null
                        : (0, n.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === T
                        ? (0, n.jsx)(h, { ...w, icon: e.icon, size: "large", children: e.name })
                        : (0, n.jsxs)(p, {
                            ...w,
                            className: (0, r.A)(
                              E && "min-w-0 flex-1 justify-center",
                              B && "relative isolate",
                              !O && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                R.textSizeClassName ?? "text-sm",
                                R.tabButtonClassName,
                                L && "ring-inset",
                                R.segmentedEdges && y && "rounded-l-md",
                                R.segmentedEdges && _ && "rounded-r-md",
                                "browse" === T && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", m && "ring-1 ring-border-strong"]
                                  : b,
                              ],
                            ),
                            color: a,
                            radius: "choice" === T ? "full" : void 0,
                            size: i,
                            children: [
                              B && m ? (0, n.jsx)(j, { layoutId: z }) : null,
                              null != e.icon
                                ? (0, n.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              E ? (0, n.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === R.selectionIndicator && m
                        ? (0, n.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, n.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, r.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              R.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, n.jsx)(d.bF, {
                              "aria-hidden": !1,
                              asset16: s.Q,
                              legacyIcon: u.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      R.segmentedEdges && !_
                        ? (0, n.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (a[0] = P),
          (a[1] = B),
          (a[2] = N),
          (a[3] = S),
          (a[4] = b),
          (a[5] = I),
          (a[6] = E),
          (a[7] = f),
          (a[8] = x),
          (a[9] = g),
          (a[10] = R.closeButtonClassName),
          (a[11] = R.itemClassName),
          (a[12] = R.listClassName),
          (a[13] = R.segmentedEdges),
          (a[14] = R.selectionIndicator),
          (a[15] = R.tabButtonClassName),
          (a[16] = R.textSizeClassName),
          (a[17] = R.unselectedClassName),
          (a[18] = R.unselectedTextClassName),
          (a[19] = L),
          (a[20] = q),
          (a[21] = o),
          (a[22] = z),
          (a[23] = v),
          (a[24] = l),
          (a[25] = D),
          (a[26] = O),
          (a[27] = T),
          (a[28] = t))
      } else t = a[28]
      return t
    }
    function C(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function j(e) {
      let t,
        a,
        s = (0, i.c)(5),
        { layoutId: r } = e,
        c = 0.25 * !(0, l.I)()
      return (
        s[0] !== c ? ((t = { type: "spring", duration: c, bounce: 0 }), (s[0] = c), (s[1] = t)) : (t = s[1]),
        s[2] !== r || s[3] !== t
          ? ((a = (0, n.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: r,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (s[2] = r),
            (s[3] = t),
            (s[4] = a))
          : (a = s[4]),
        a
      )
    }
  },
  dFbl(e, t, a) {
    ;(a("Qiwg"),
      a.d(
        t,
        {},
        {
          sX: function (e, t) {
            let a =
              "prior_context_memory_plus_upsell_convo_beacon" === e.beacon_id
                ? "prior_context_memory_plus_upsell_convo_beacon_go"
                : e.beacon_id
            return [
              "go_plus_thinking_high_intent_banner",
              "imagegen_thinking_intent_upsell_banner_go",
              "prior_context_memory_plus_upsell_convo_beacon_go",
            ].includes(a) &&
              ("beacon_banner_info" === e.ui_info.type || "beacon_conversation_inline_info" === e.ui_info.type) &&
              "get_plus" === t.action_v2.action_enum &&
              null == t.action_v2.promo_campaign_id
              ? t.id === `${a}_rejoin_plus_direct_checkout` && "direct" === t.action_v2.checkout_mode
                ? "direct"
                : t.id === `${a}_rejoin_plus` && null == t.action_v2.checkout_mode
                  ? "pricing"
                  : null
              : null
          },
        },
      ))
  },
  Nu9C(e, t, a) {
    a.d(
      t,
      {},
      {
        X: async function () {
          return (await a.e(538169).then(a.bind(a, "OXUS"))).PepperOnboardingAnnouncementHost
        },
        j: async function () {
          return (await a.e(26187).then(a.bind(a, "mimB"))).PepperOnboardingBeaconModal
        },
      },
    )
  },
  SRBo(e, t, a) {
    a.d(
      t,
      {},
      {
        Af: async function () {
          return (
            await Promise.all([
              a.e(753405),
              a.e(434505),
              a.e(704809),
              a.e(920484),
              a.e(233836),
              a.e(999385),
              a.e(18272),
              a.e(949495),
              a.e(603093),
              a.e(761777),
              a.e(5919),
              a.e(581243),
              a.e(718920),
            ]).then(a.bind(a, "QCmH"))
          ).TemplateGalleryPage
        },
        RR: async function () {
          return (
            await Promise.all([
              a.e(753405),
              a.e(648165),
              a.e(490057),
              a.e(704809),
              a.e(920484),
              a.e(233836),
              a.e(999385),
              a.e(18272),
              a.e(949495),
              a.e(603093),
              a.e(761777),
              a.e(5919),
              a.e(581243),
              a.e(461009),
              a.e(480276),
            ]).then(a.bind(a, "fi73"))
          ).TemplateGalleryDialog
        },
        wr: async function () {
          return (await a.e(637509).then(a.bind(a, "hYKo"))).prefetchCreateDialog
        },
      },
    )
  },
  oQVA(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("qmMi"),
      r = a("zd8w"),
      l = a("aXWg")
    a.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            a,
            o,
            c,
            d,
            u,
            p,
            m,
            f,
            h,
            x,
            g,
            b,
            y,
            _ = (0, i.c)(29)
          _[0] !== e
            ? (({ as: d, keyframes: a, duration: t, delay: u, playing: o, disabled: p, easing: m, ...c } = e),
              (_[0] = e),
              (_[1] = t),
              (_[2] = a),
              (_[3] = o),
              (_[4] = c),
              (_[5] = d),
              (_[6] = u),
              (_[7] = p),
              (_[8] = m))
            : ((t = _[1]), (a = _[2]), (o = _[3]), (c = _[4]), (d = _[5]), (u = _[6]), (p = _[7]), (m = _[8]))
          let w = void 0 === d ? "div" : d,
            v = void 0 === u ? 0 : u,
            C = void 0 !== p && p,
            j = void 0 === m ? "ease-in-out" : m,
            M = (0, s.Ul)(!!o && !C && l.s),
            N = (0, r.useRef)(null),
            S = (0, r.useRef)(null)
          return (
            _[9] !== v || _[10] !== C || _[11] !== t || _[12] !== j || _[13] !== a
              ? ((f = () => {
                  if (C || null == N.current) return
                  let e = N.current.animate(
                    a.map((e) => ({ ...e, easing: j })),
                    { duration: t, delay: v, iterations: 1 / 0 },
                  )
                  return (
                    e.pause(),
                    (S.current = e),
                    () => {
                      ;(e.cancel(), (S.current = null))
                    }
                  )
                }),
                (h = [a, t, v, C, j]),
                (_[9] = v),
                (_[10] = C),
                (_[11] = t),
                (_[12] = j),
                (_[13] = a),
                (_[14] = f),
                (_[15] = h))
              : ((f = _[14]), (h = _[15])),
            (0, r.useLayoutEffect)(f, h),
            _[16] !== M
              ? ((x = () => {
                  M ? S.current?.play() : S.current?.pause()
                }),
                (_[16] = M),
                (_[17] = x))
              : (x = _[17]),
            _[18] !== v || _[19] !== C || _[20] !== t || _[21] !== j || _[22] !== a || _[23] !== M
              ? ((g = [M, a, t, v, C, j]),
                (_[18] = v),
                (_[19] = C),
                (_[20] = t),
                (_[21] = j),
                (_[22] = a),
                (_[23] = M),
                (_[24] = g))
              : (g = _[24]),
            (0, r.useLayoutEffect)(x, g),
            _[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (e) => {
                  N.current = e
                }),
                (_[25] = b))
              : (b = _[25]),
            _[26] !== w || _[27] !== c
              ? ((y = (0, n.jsx)(w, { ...c, ref: b })), (_[26] = w), (_[27] = c), (_[28] = y))
              : (y = _[28]),
            y
          )
        },
      },
    )
  },
  KjkV(e, t, a) {
    a.d(t, { t: () => b })
    var n = a("ABep"),
      i = a("QosV"),
      s = a("on57"),
      r = a("zd8w"),
      l = a("Wf1j"),
      o = a("oyxz"),
      c = a("Qgfj"),
      d = a("Sm6l"),
      u = a("wZQ4"),
      p = a("okCa"),
      m = a("BrP7"),
      f = a("JNtf"),
      h = a("mUDD")
    function x(e) {
      let t,
        a,
        s,
        r,
        l,
        c,
        d = (0, i.c)(16),
        { onClose: u, onCloseAutoFocus: p, onEscapeKeyDown: m, children: x, title: g } = e
      return (
        d[0] !== u
          ? ((t = (e) => {
              e || u()
            }),
            (d[0] = u),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== p || d[3] !== m
          ? ((a = {
              onCloseAutoFocus: p,
              onEscapeKeyDown: m,
              "aria-describedby": void 0,
              className: "@container/create-dialog",
            }),
            (d[2] = p),
            (d[3] = m),
            (d[4] = a))
          : (a = d[4]),
        d[5] !== g
          ? ((s = g ?? (0, n.jsx)(o.A, { id: "space.create.title", defaultMessage: "Create" })), (d[5] = g), (d[6] = s))
          : (s = d[6]),
        d[7] !== s
          ? ((r = (0, n.jsx)(h.c7, {
              className: "shrink-0 px-(--create-dialog-inset) pb-3 @min-[601px]/create-dialog:pb-6",
              title: (0, n.jsx)(f.L3, { children: s }),
            })),
            (d[7] = s),
            (d[8] = r))
          : (r = d[8]),
        d[9] !== x || d[10] !== r
          ? ((l = (0, n.jsxs)(h.R4, {
              size: "full",
              className:
                "px-0 pt-[calc(var(--create-dialog-inset)_-_4px)] pb-0 [--create-dialog-inset:clamp(14px,3.2cqw,32px)]",
              children: [r, x],
            })),
            (d[9] = x),
            (d[10] = r),
            (d[11] = l))
          : (l = d[11]),
        d[12] !== t || d[13] !== a || d[14] !== l
          ? ((c = (0, n.jsx)(f.lG, {
              open: !0,
              onOpenChange: t,
              variant: "chatgpt",
              contentClassName: "surface-Hz2Cme",
              size: "xxxwideTall",
              contentProps: a,
              children: l,
            })),
            (d[12] = t),
            (d[13] = a),
            (d[14] = l),
            (d[15] = c))
          : (c = d[15]),
        c
      )
    }
    var g = a("YFvy")
    function b(e) {
      let t,
        a,
        c,
        f,
        h,
        b,
        _,
        w,
        v,
        C,
        j,
        M,
        N,
        S,
        k,
        A = (0, i.c)(67),
        {
          embedded: I,
          title: E,
          busy: L,
          navigation: T,
          children: P,
          searchField: z,
          toolbarAction: R,
          entries: O,
          loading: D,
          failed: B,
          partial: q,
          onRetry: U,
          pagination: F,
          scrollRoot: V,
          onClose: G,
          onCloseAutoFocus: H,
        } = e,
        Y = void 0 !== L && L,
        K = (0, l.A)(),
        Z = (0, r.useId)(),
        $ = (0, r.useRef)(null),
        W = V ?? $,
        [X, Q] = (0, r.useState)(""),
        J = z?.value ?? X,
        ee = z?.onChange ?? Q,
        [et, ea] = (0, r.useState)(!1),
        en = !!R,
        ei = en && !et,
        es = (0, r.useRef)(null),
        er = (0, r.useRef)(null),
        el = (0, r.useRef)(null)
      if (
        (A[0] !== en || A[1] !== et || A[2] !== ee
          ? ((t = () => {
              if (!en || !et) return
              es.current?.focus({ preventScroll: !0 })
              let e = function (e) {
                el.current && !e.composedPath().includes(el.current) && (ea(!1), ee(""))
              }
              return (document.addEventListener("click", e), () => document.removeEventListener("click", e))
            }),
            (a = [en, et, ee]),
            (A[0] = en),
            (A[1] = et),
            (A[2] = ee),
            (A[3] = t),
            (A[4] = a))
          : ((t = A[3]), (a = A[4])),
        (0, r.useEffect)(t, a),
        A[5] !== O || A[6] !== J)
      ) {
        let e = J.trim().toLocaleLowerCase()
        ;((c = e
          ? O.filter((t) => t.matchesSearch || `${t.title} ${t.text ?? ""}`.toLocaleLowerCase().includes(e))
          : O),
          (A[5] = O),
          (A[6] = J),
          (A[7] = c))
      } else c = A[7]
      let eo = c,
        ec = T && `${Z}-${T.active}-results`,
        ed = D && 0 === eo.length,
        eu = !!T
      if (A[8] !== Y || A[9] !== eo) {
        let e
        ;(A[11] !== Y
          ? ((e = (e) =>
              (0, n.jsxs)(
                "div",
                {
                  className: "min-w-0",
                  inert: Y,
                  "data-saved-template-id": e.id.startsWith("native:") ? e.id.slice(7) : void 0,
                  children: [
                    e.content,
                    e.category &&
                      (0, n.jsx)("div", {
                        className: "px-2 text-center text-xs text-secondary",
                        children: (0, n.jsx)(o.A, {
                          id: "space.createGallery.artifactType",
                          defaultMessage:
                            "{type, select, page {Page} slides {Slides} spreadsheet {Sheets} images {Image} document {Document} site {Site} other {File}}",
                          values: { type: e.category },
                        }),
                      }),
                  ],
                },
                e.id,
              )),
            (A[11] = Y),
            (A[12] = e))
          : (e = A[12]),
          (f = eo.map(e)),
          (A[8] = Y),
          (A[9] = eo),
          (A[10] = f))
      } else f = A[10]
      ;(A[13] !== ed || A[14] !== eu || A[15] !== f
        ? ((h = (0, n.jsx)(g.j, { loading: ed, hasNavigation: eu, children: f })),
          (A[13] = ed),
          (A[14] = eu),
          (A[15] = f),
          (A[16] = h))
        : (h = A[16]),
        A[17] !== B || A[18] !== D || A[19] !== F || A[20] !== q || A[21] !== eo.length
          ? ((b =
              !D &&
              !B &&
              !q &&
              !F &&
              0 === eo.length &&
              (0, n.jsx)("p", {
                className: "py-8 text-center text-secondary",
                children: (0, n.jsx)(o.A, { ...y.noResults }),
              })),
            (A[17] = B),
            (A[18] = D),
            (A[19] = F),
            (A[20] = q),
            (A[21] = eo.length),
            (A[22] = b))
          : (b = A[22]),
        A[23] !== q
          ? ((_ =
              q &&
              (0, n.jsx)("p", {
                className: "py-4 text-center text-secondary",
                children: (0, n.jsx)(o.A, {
                  id: "space.templates.partialNativeResults",
                  defaultMessage: "Some saved templates may be missing from these results.",
                }),
              })),
            (A[23] = q),
            (A[24] = _))
          : (_ = A[24]),
        A[25] !== F || A[26] !== W
          ? ((w =
              F &&
              (0, n.jsx)(
                u.D,
                {
                  rootRef: W,
                  rootMargin: "200px",
                  hasNextPage: !0,
                  isFetchingNextPage: F.fetching,
                  onLoadNextPage: F.loadMore,
                },
                F.cursor,
              )),
            (A[25] = F),
            (A[26] = W),
            (A[27] = w))
          : (w = A[27]),
        A[28] !== B || A[29] !== U
          ? ((v =
              B &&
              (0, n.jsxs)("div", {
                className: "flex items-center justify-center gap-2 py-4",
                children: [
                  (0, n.jsx)(o.A, { ...y.failed }),
                  (0, n.jsx)(d.$, { color: "secondary", onClick: U, children: (0, n.jsx)(o.A, { ...y.retry }) }),
                ],
              })),
            (A[28] = B),
            (A[29] = U),
            (A[30] = v))
          : (v = A[30]),
        A[31] !== b || A[32] !== _ || A[33] !== w || A[34] !== v || A[35] !== h
          ? ((C = (0, n.jsxs)(n.Fragment, { children: [h, b, _, w, v] })),
            (A[31] = b),
            (A[32] = _),
            (A[33] = w),
            (A[34] = v),
            (A[35] = h),
            (A[36] = C))
          : (C = A[36]))
      let ep = C
      if (void 0 !== I && I) return ep
      ;(A[37] !== et || A[38] !== ee || A[39] !== R
        ? ((j = (e) => {
            R && et && (e.preventDefault(), ee(""), ea(!1), requestAnimationFrame(() => er.current?.focus()))
          }),
          (A[37] = et),
          (A[38] = ee),
          (A[39] = R),
          (A[40] = j))
        : (j = A[40]),
        A[41] !== ei ||
        A[42] !== en ||
        A[43] !== Z ||
        A[44] !== K ||
        A[45] !== T ||
        A[46] !== J ||
        A[47] !== ee ||
        A[48] !== R
          ? ((M =
              T &&
              (0, n.jsxs)("div", {
                className: (0, s.A)(
                  "grid shrink-0 items-center gap-2 px-(--create-dialog-inset) pb-4",
                  R
                    ? "grid-cols-[minmax(0,1fr)_auto_auto]"
                    : "grid-cols-[minmax(0,1fr)_auto] @min-[601px]/create-dialog:gap-4",
                ),
                children: [
                  (0, n.jsx)("div", {
                    className: "min-w-0",
                    children: (0, n.jsx)(m.t, {
                      tabs: T.tabs.map((e) => ({ ...e, panelId: `${Z}-${e.key}-results` })),
                      selectedKey: T.active,
                      onSelect: T.onSelect,
                      variant: "segmentedPillMuted",
                      dividerBefore: "page",
                      scrollable: !0,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    ref: el,
                    className: (0, s.A)(
                      "grid min-w-0 max-w-[50cqw]",
                      en && "motion-safe:transition-[width] motion-safe:duration-basic motion-safe:ease-out",
                      ei ? "w-9" : "w-[clamp(170px,25cqw,232px)]",
                    ),
                    children: [
                      (0, n.jsx)("div", {
                        className: "col-start-1 row-start-1 min-w-0",
                        inert: ei,
                        "aria-hidden": ei || void 0,
                        children: (0, n.jsx)(p.s, {
                          inputRef: es,
                          className: (0, s.A)(
                            "w-full min-w-0",
                            en &&
                              "overflow-hidden motion-safe:transition-[border-color,padding] motion-safe:duration-basic motion-safe:ease-out motion-safe:[&_input]:transition-opacity motion-safe:[&_input]:duration-basic",
                            ei && "border-transparent! ps-2! [&_input]:opacity-0",
                          ),
                          id: `${Z}-search`,
                          label: K.formatMessage(y.search),
                          placeholder: ei ? "" : K.formatMessage(y.search),
                          searchQuery: J,
                          onSearchQueryChange: ee,
                          variant: "toolbar",
                          inputRole: "searchbox",
                        }),
                      }),
                      ei &&
                        (0, n.jsx)(d.$, {
                          ref: er,
                          className: "col-start-1 row-start-1 justify-self-start",
                          uniform: !0,
                          size: "iconCircleLg",
                          radius: "full",
                          color: "ghost",
                          "aria-label": K.formatMessage(y.search),
                          "aria-expanded": !1,
                          onClick: () => ea(!0),
                        }),
                    ],
                  }),
                  R,
                ],
              })),
            (A[41] = ei),
            (A[42] = en),
            (A[43] = Z),
            (A[44] = K),
            (A[45] = T),
            (A[46] = J),
            (A[47] = ee),
            (A[48] = R),
            (A[49] = M))
          : (M = A[49]))
      let em = Y ? 0 : void 0,
        ef = Y || void 0,
        eh = T && "tabpanel",
        ex = ec && `${ec}-tab`,
        eg = P ?? ep
      return (
        A[50] !== ec || A[51] !== W || A[52] !== em || A[53] !== ef || A[54] !== eh || A[55] !== ex || A[56] !== eg
          ? ((N = (0, n.jsx)("div", {
              ref: W,
              id: ec,
              tabIndex: em,
              "aria-busy": ef,
              role: eh,
              "aria-labelledby": ex,
              className: "flex min-h-0 flex-1 [scrollbar-gutter:stable] flex-col overflow-y-auto",
              children: eg,
            })),
            (A[50] = ec),
            (A[51] = W),
            (A[52] = em),
            (A[53] = ef),
            (A[54] = eh),
            (A[55] = ex),
            (A[56] = eg),
            (A[57] = N))
          : (N = A[57]),
        A[58] !== M || A[59] !== N
          ? ((S = (0, n.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [M, N] })),
            (A[58] = M),
            (A[59] = N),
            (A[60] = S))
          : (S = A[60]),
        A[61] !== G || A[62] !== H || A[63] !== j || A[64] !== S || A[65] !== E
          ? ((k = (0, n.jsx)(x, { title: E, onClose: G, onCloseAutoFocus: H, onEscapeKeyDown: j, children: S })),
            (A[61] = G),
            (A[62] = H),
            (A[63] = j),
            (A[64] = S),
            (A[65] = E),
            (A[66] = k))
          : (k = A[66]),
        k
      )
    }
    let y = (0, c.YK)({
      search: { id: "space.create.search", defaultMessage: "Search" },
      noResults: { id: "space.create.noResults", defaultMessage: "No matching templates" },
      failed: { id: "space.create.failed", defaultMessage: "Some templates couldn\u2019t be loaded." },
      retry: { id: "space.create.retry", defaultMessage: "Retry" },
    })
  },
  kv6U(e, t, a) {
    a.d(t, { TZ: () => x, k2: () => p, ZK: () => u, eJ: () => m, eA: () => f, kM: () => h, sm: () => d })
    var n = a.p + "assets/banner.3977412945.png",
      i = a.p + "assets/ceramics-hero.b982f09bd1.webp",
      s = a.p + "assets/desk-lamp-drawing.01806449aa.webp",
      r = a.p + "assets/intelligence-age.0f20816417.png",
      l = a.p + "assets/ridge-mug.4275e4e5a6.webp",
      o = a.p + "assets/river-pitcher.11f3b2ddb3.webp",
      c = a.p + "assets/stone-bowl.b70a5c51d5.webp"
    let d = n,
      u = i,
      p = s,
      m = r,
      f = l,
      h = o,
      x = c
  },
  I8SU(e, t, a) {
    var n = a("qmMi"),
      i = a("DBCl"),
      s = a("ASxG"),
      r = a("SkLA"),
      l = a("SPnB"),
      o = a("g2p6"),
      c = a("xjn7"),
      d = a("e1xH"),
      u = a("OWtl"),
      p = a("WFY2"),
      m = a("kpIY"),
      f = a("NRR1"),
      h = a("nndI"),
      x = a("SCmN"),
      g = a("Kw4a"),
      b = a("v5SL")
    let y = s.Ikc({ [r.iI]: s.YjP() }),
      _ = (0, n.bD)(u.u, (e) => !1),
      w = (0, n.bD)(u.u, (e) => !1),
      v = (0, n.un)(u.u, ({ get: e }) => {
        let t = e(r.Df)
        return null != t && t.accountId === e(f.DO) ? t : null
      }),
      C = (0, n.un)(u.u, ({ get: e }) => {
        let t = e(v)
        return e(g.w) && null != t && !e(b.i2, t.key) && (e(r.f_, t.key) || e(w, t.key) || !1 === e(r.aJ))
      }),
      j = (0, n.un)(u.u, ({ get: e }) => {
        let t = e(x.jm)
        return null == t ||
          e(d.H6, "granola_presentation") ||
          null == e(r.aJ) ||
          !1 !== e(x.Aq) ||
          e(C) ||
          e(b.i2, t.key) ||
          "available" !== e(x.Dj, t.key) ||
          null == e(h.ax)[t.key] ||
          e(x.av, t.key)
          ? null
          : t.key
      })
    async function M(e) {
      let t = e.get(v)
      if (!e.get(g.w) || null == t || e.get(b.i2, t.key) || !0 !== e.get(r.zw)[t.key] || e.get(_, t.key)) return
      let n = new AbortController(),
        s = e.watch(({ get: e }) => {
          ;(e(v)?.key !== t.key || e(f.DO) !== t.accountId) && n.abort()
        }),
        l = e.query.snapshot(o.s6)
      e.set(_, t.key, !0)
      try {
        let { Request: e } = await Promise.resolve().then(a.bind(a, "Kwur"))
        n.signal.throwIfAborted()
        let s = await e.safePost("/settings/announcement_viewed", {
          expectedIdentity: { accountId: t.accountId, userId: t.userId },
          additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [i.zBc]: t.accountId },
          parameters: { query: { announcement_id: r.iI } },
          signal: n.signal,
        })
        n.signal.throwIfAborted()
        let o = y.safeParse(s)
        if (!o.success) return
        ;((0, m.EG)(r.Ew, { entries: { [t.key]: { value: o.data[r.iI] } } }),
          await l.cancel(),
          l.setData((e) =>
            null == e ? e : { ...e, seenAnnouncements: { ...e.seenAnnouncements, [r.iI]: o.data[r.iI] } },
          ),
          null != l.getData() || n.signal.aborted || (await l.invalidate()))
      } catch {
        n.signal.aborted || p.v.warning("Failed to sync Space introduction viewed state")
      } finally {
        ;(s(), e.set(_, t.key, !1))
      }
    }
    a.d(
      t,
      {},
      {
        Tj: function (e, t) {
          let a = e.get(v)
          if (!(a?.key !== t || e.get(b.i2, t))) {
            if ((e.set(w, t, !1), !0 !== e.get(r.aJ))) {
              let n = (0, c.XS)({ accountId: a.accountId, userId: e.get(l.chatGptAuthenticatedUserId$) })
              ;(null != n && (0, c.pV)(e, n, { viewMode: "list" }),
                (0, m.EG)(r.Ew, { entries: { [t]: { value: !0 } } }))
            }
            M(e)
          }
        },
        cJ: j,
        kx: C,
        spaceIntroductionIdentity$: v,
        syncSpaceIntroductionSeen: M,
        vV: w,
      },
    )
  },
  C9Ga(e, t, a) {
    let n = (0, a("Qgfj").YK)({ heading: { id: "space.slideTemplates.heading", defaultMessage: "Slides" } })
    a.d(t, {}, { a: n })
  },
  mXik(e, t, a) {
    var n = a("zd8w"),
      i = a("E8Sp"),
      s = a("SPnB"),
      r = a("r9ga"),
      l = a("SEOK")
    a.d(
      t,
      {},
      {
        U: function (
          e,
          t,
          a,
          o,
          c,
          { rootPageId: d, personal: u = !1, rememberCollectionOrigin: p = !0, pagePreview: m, onOpenPage: f } = {},
        ) {
          if (null != f) return void (null == m ? f(c) : f(c, { pagePreview: m }))
          let h = e.get(s.chatGptAuthenticatedUserId$),
            x = null != m && null != o && null != h ? { ...m, accountId: o, userId: h, pageId: c } : void 0,
            g = (n, s) =>
              (0, i.VK)(
                e,
                t,
                n,
                "string" == typeof n && (p || null != x)
                  ? {
                      ...s,
                      ...(null != x && { flushSync: !0 }),
                      state: {
                        ...s?.state,
                        ...(p && { pageListOrigin: { accountId: o, pageId: c, pathname: n, location: a } }),
                        ...(null != x && { pagePreview: x }),
                      },
                    }
                  : s,
              )
          if (null != d) (0, r.C_)(e, g, a, o, d, c)
          else if (u) (0, r.Kt)(e, g, o, c)
          else {
            let t = (0, r.mI)(e, c),
              i = {
                state: {
                  ...(0, l.$)(a, o, c, t),
                  sidebarArea: "space",
                  spaceSidebarAccountId: o,
                  sidebarPrimaryContent: !0,
                },
              }
            ;(0, n.startTransition)(() => {
              g(t, i)
            })
          }
        },
      },
    )
  },
  xicS(e, t, a) {
    a.d(t, { SpaceTemplateGalleryDialog: () => B })
    var n = a("ABep"),
      i = a("QosV"),
      s = a("SRBo"),
      r = a("QBk8"),
      l = a("Rxfy"),
      o = a("SIrB"),
      c = a("RB8A"),
      d = a("qmMi"),
      u = a("zd8w"),
      p = a("Wf1j"),
      m = a("BI6E"),
      f = a("eOqt"),
      h = a("Bbed"),
      x = a("e1xH"),
      g = a("yGJW"),
      b = a("OWtl"),
      y = a("hZax"),
      _ = a("Kw4a"),
      w = a("jG6n"),
      v = a("U6Ok"),
      C = a("o72y"),
      j = a("C9Ga"),
      M = a("OpPi"),
      N = a("D015"),
      S = a("D7Ms"),
      k = a("mJtW")
    class A {
      scope
      tab
      startedAt
      ended = !1
      mounted = !1
      firstPaintMs
      cached
      requests = 0
      responses = 0
      added = new Set()
      initialLists
      outcome
      constructor(e, t, a) {
        ;((this.scope = e),
          (this.tab = t),
          (this.startedAt = a),
          (this.outcome = ["all", "page", "slides"].includes(t) ? "left_before_result" : "not_applicable"),
          (this.initialLists = new Map(
            e.queryClient.getQueriesData({ queryKey: (0, k.N)([]) }).map(([e, t]) => [(0, S.EN)(e), t]),
          )))
      }
      setOutcome(e) {
        this.outcome = e
      }
      attach() {
        this.mounted = !0
        let e = () => this.finish()
        return (
          window.addEventListener("pagehide", e),
          () => {
            ;((this.mounted = !1),
              window.removeEventListener("pagehide", e),
              queueMicrotask(() => {
                this.mounted || this.finish()
              }))
          }
        )
      }
      observeCards(e, t) {
        if (null != this.firstPaintMs || this.ended) return () => {}
        let a = e.querySelectorAll("[data-saved-template-id]")
        if (!a.length) return () => {}
        let n = new IntersectionObserver(
            (a) => {
              if (this.ended || !this.mounted || document.hidden || null != this.firstPaintMs) return
              let i = a.find(
                  ({ isIntersecting: t, intersectionRect: a, target: n }) =>
                    t && a.width > 0 && a.height > 0 && e.contains(n),
                ),
                s = i?.target.getAttribute("data-saved-template-id")
              s &&
                i &&
                ((this.firstPaintMs = Math.max(0, i.time - this.startedAt)),
                (this.cached = [t, [...t, "page"], [...t, "presentation"]].some((e) =>
                  this.initialLists.get((0, S.EN)(e))?.pages.some((e) => e.items.some((e) => e.page_id === s)),
                )),
                this.initialLists.clear(),
                n.disconnect())
            },
            { root: e },
          ),
          i = () => {
            if ((n.disconnect(), !document.hidden && null == this.firstPaintMs && !this.ended))
              for (let e of a) n.observe(e)
          }
        return (
          i(),
          document.addEventListener("visibilitychange", i),
          () => {
            ;(n.disconnect(), document.removeEventListener("visibilitychange", i))
          }
        )
      }
      startTypeRequest(e, t, a) {
        if (!this.ended && ("presentation" === e ? "slides" : "page") === this.tab)
          return (
            this.requests++,
            (n) => {
              if (this.ended || !this.mounted) return
              this.responses++
              let i = new Set(
                this.scope.queryClient
                  .getQueriesData({ queryKey: t })
                  .flatMap(([, e]) => e?.pages.flatMap((e) => e.items.map((e) => e.page_id)) ?? []),
              )
              for (let t of n.items) t.template_type === e && !i.has(t.page_id) && a(t) && this.added.add(t.page_id)
            }
          )
      }
      finish() {
        this.ended ||
          ((this.ended = !0),
          this.initialLists.clear(),
          (0, g.yy)(this.scope, r.CodexSpacesTemplateGallery, {
            action: r.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TAB_VISIT_ENDED,
            category: this.tab,
            savedTemplateOutcome: null == this.firstPaintMs ? this.outcome : "shown",
            timeToFirstSavedTemplateMs: this.firstPaintMs,
            firstSavedTemplateCached: this.cached,
            typeRequestCount: (0, N.At)(this.requests),
            typeResponseCount: (0, N.At)(this.responses),
            typeAddedTemplateCount: this.responses ? (0, N.At)(this.added.size) : void 0,
          }))
      }
    }
    var I = a("KjkV"),
      E = a("CLQ7"),
      L = a("wgYf")
    function T(e) {
      let t,
        a,
        s,
        r,
        l,
        o,
        c,
        m,
        f,
        h = (0, i.c)(36),
        { children: x, openedAt: g, active: y, onSelect: _, onClose: w, onCloseAutoFocus: v } = e,
        C = (0, d.gh)(b.u),
        j = (0, p.A)()
      h[0] !== y || h[1] !== g || h[2] !== C
        ? ((t = () => new A(C, y, g ?? performance.now())), (h[0] = y), (h[1] = g), (h[2] = C), (h[3] = t))
        : (t = h[3])
      let [N, S] = (0, u.useState)(t)
      ;(h[4] !== N ? ((a = () => N.attach()), (s = [N]), (h[4] = N), (h[5] = a), (h[6] = s)) : ((a = h[5]), (s = h[6])),
        (0, u.useLayoutEffect)(a, s))
      let k = (0, u.useRef)(null),
        [T, z] = (0, u.useState)(""),
        [R, O] = (0, u.useState)(),
        D = (0, d.Ul)(M.q),
        B = (0, L.$)(w)
      h[7] !== y || h[8] !== j || h[9] !== R
        ? ((r = R ?? ("workspace" === y ? j.formatMessage(E.DZ.workspace) : void 0)),
          (h[7] = y),
          (h[8] = j),
          (h[9] = R),
          (h[10] = r))
        : (r = h[10])
      let q = (0, E.zr)(j, r),
        U = I.t,
        F = B.title,
        V = B.action
      ;(h[11] !== T ? ((l = { value: T, onChange: z }), (h[11] = T), (h[12] = l)) : (l = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel") ? ((o = []), (h[13] = o)) : (o = h[13]))
      let G = q.some((e) => e.key === y) ? y : "all"
      ;(h[14] !== _ || h[15] !== C || h[16] !== q || h[17] !== N
        ? ((c = (e) => {
            if (e !== N.tab) {
              let t = performance.now()
              ;(N.finish(), S(new A(C, e, t)))
            }
            _(e, q.find((t) => t.key === e)?.name ?? e)
          }),
          (h[14] = _),
          (h[15] = C),
          (h[16] = q),
          (h[17] = N),
          (h[18] = c))
        : (c = h[18]),
        h[19] !== G || h[20] !== c || h[21] !== q
          ? ((m = { tabs: q, active: G, onSelect: c }), (h[19] = G), (h[20] = c), (h[21] = q), (h[22] = m))
          : (m = h[22]))
      let H = x({ active: y, search: T, setWorkspace: O, scrollRoot: k, visit: N })
      return (
        h[23] !== U ||
        h[24] !== D ||
        h[25] !== B.action ||
        h[26] !== B.title ||
        h[27] !== w ||
        h[28] !== v ||
        h[29] !== k ||
        h[30] !== P ||
        h[31] !== m ||
        h[32] !== H ||
        h[33] !== l ||
        h[34] !== o
          ? ((f = (0, n.jsx)(U, {
              busy: D,
              scrollRoot: k,
              title: F,
              toolbarAction: V,
              searchField: l,
              entries: o,
              loading: !0,
              failed: !1,
              onRetry: P,
              onClose: w,
              onCloseAutoFocus: v,
              navigation: m,
              children: H,
            })),
            (h[23] = U),
            (h[24] = D),
            (h[25] = B.action),
            (h[26] = B.title),
            (h[27] = w),
            (h[28] = v),
            (h[29] = k),
            (h[30] = P),
            (h[31] = m),
            (h[32] = H),
            (h[33] = l),
            (h[34] = o),
            (h[35] = f))
          : (f = h[35]),
        f
      )
    }
    function P() {}
    var z = a("YFvy"),
      R = a("N7ab")
    let O = ["document", "presentation", "spreadsheet"],
      D = (0, h._)(s.RR, {
        fallback: (e) => (0, n.jsx)(F, { ...e }),
        errorFallback: (e) => (0, n.jsx)(R.Z, { ...e, failed: !0 }),
      })
    function B(e) {
      let t,
        a,
        s,
        c,
        p = (0, i.c)(19),
        { openedAt: m, initialGroupId: f, onApplyPageTemplate: h, onCloseAutoFocus: _, onClose: w } = e,
        v = (0, d.gh)(b.u),
        C = (0, y.Zj)("3531012613")
      p[0] !== w || p[1] !== v
        ? ((t = () => {
            ;((0, g.yy)(v, r.CodexSpacesTemplateGallery, {
              action: r.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CLOSED,
            }),
              w())
          }),
          (p[0] = w),
          (p[1] = v),
          (p[2] = t))
        : (t = p[2])
      let j = t,
        M = (0, d._U)(x.H6, "granola_presentation"),
        [N, S] = (0, u.useState)(f ?? null),
        k = "presentation" === N && M ? "slides" : N
      p[3] !== v
        ? ((a = (e) => {
            let t = (0, l.c)(e?.id ?? "")
            ;((0, g.yy)(v, r.CodexSpacesTemplateGallery, {
              action: r.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CATEGORY_SELECTED,
              category: e?.id === "page" || e?.id === "slides" ? e.id : ((t ? (0, o.Zk)(t) : "all") ?? void 0),
            }),
              S(e?.id ?? null))
          }),
          (p[3] = v),
          (p[4] = a))
        : (a = p[4])
      let A = a
      p[5] !== h || p[6] !== j || p[7] !== _ || p[8] !== A || p[9] !== k
        ? ((s = (e) =>
            (0, n.jsx)(D, {
              frame: e,
              onApplyPageTemplate: h,
              onClose: j,
              onCloseAutoFocus: _,
              selectedGroupId: k,
              onGalleryGroupSelect: A,
            })),
          (p[5] = h),
          (p[6] = j),
          (p[7] = _),
          (p[8] = A),
          (p[9] = k),
          (p[10] = s))
        : (s = p[10])
      let I = s
      return (
        p[11] !== j || p[12] !== _ || p[13] !== A || p[14] !== m || p[15] !== I || p[16] !== k || p[17] !== C
          ? ((c = C
              ? (0, n.jsx)(T, {
                  openedAt: m,
                  active: (0, E.c3)(k ?? "all"),
                  onSelect: (e, t) =>
                    A(
                      "all" === e
                        ? null
                        : { id: e, label: t, templateTypes: [], templates: { status: "ready", data: [] } },
                    ),
                  onClose: j,
                  onCloseAutoFocus: _,
                  children: I,
                })
              : I()),
            (p[11] = j),
            (p[12] = _),
            (p[13] = A),
            (p[14] = m),
            (p[15] = I),
            (p[16] = k),
            (p[17] = C),
            (p[18] = c))
          : (c = p[18]),
        c
      )
    }
    function q(e) {
      let t,
        a,
        s,
        r,
        l,
        h,
        g,
        b = (0, i.c)(23),
        { onClose: y, onCloseAutoFocus: M, selectedGroupId: N, onGalleryGroupSelect: S } = e,
        k = (0, p.A)(),
        A = (0, d.Ul)(_.wu),
        I = (0, d._U)(x.H6, "granola_presentation"),
        E = (0, d.Ul)(w.ql),
        L = (0, d._U)(C.x5, "template-modal")
      b[0] !== k || b[1] !== E || b[2] !== A || b[3] !== L?.length
        ? ((t = (A && void 0 !== E && (0, v.l)(k, E?.value).length > 0) || (L?.length ?? 0) > 0),
          (b[0] = k),
          (b[1] = E),
          (b[2] = A),
          (b[3] = L?.length),
          (b[4] = t))
        : (t = b[4])
      let T = t,
        P = (0, u.useRef)(!1)
      ;(b[5] !== T || b[6] !== k || b[7] !== I
        ? ((a = [...(T ? ["page"] : []), ...(I ? ["slides", "spreadsheet"] : O)].map((e) => ({
            id: e,
            label: "slides" === e ? k.formatMessage(j.a.heading) : k.formatMessage(m.xs[e]),
            templateTypes: "slides" === e ? [] : (0, o.qt)("page" === e ? "document" : e),
            templates: { status: "loading" },
          }))),
          (b[5] = T),
          (b[6] = k),
          (b[7] = I),
          (b[8] = a))
        : (a = b[8]),
        b[9] !== y
          ? ((s = () => {
              ;((P.current = !0), y())
            }),
            (b[9] = y),
            (b[10] = s))
          : (s = b[10]),
        b[11] !== S || b[12] !== a || b[13] !== s
          ? ((r = { onGalleryGroupSelect: S, groups: a, onClose: s }),
            (b[11] = S),
            (b[12] = a),
            (b[13] = s),
            (b[14] = r))
          : (r = b[14]),
        b[15] !== N || b[16] !== r
          ? ((l = { selectedGroupId: N, config: r }), (b[15] = N), (b[16] = r), (b[17] = l))
          : (l = b[17]))
      let z = (0, c.yS)(l)
      return (
        b[18] !== M
          ? ((h = {
              onCloseAutoFocus: (e) => {
                P.current ? M?.(e) : e.preventDefault()
              },
            }),
            (b[18] = M),
            (b[19] = h))
          : (h = b[19]),
        b[20] !== z || b[21] !== h
          ? ((g = (0, n.jsx)(f.u, { children: (0, n.jsx)(c._Y, { open: !0, ...z, card: U, contentProps: h }) })),
            (b[20] = z),
            (b[21] = h),
            (b[22] = g))
          : (g = b[22]),
        g
      )
    }
    function U() {
      return null
    }
    function F(e) {
      let t,
        a = (0, i.c)(3),
        s = (0, y.Zj)("3531012613")
      return (
        a[0] !== s || a[1] !== e
          ? ((t = s ? (0, n.jsx)(z.j, { hasNavigation: !0, loading: !0 }) : (0, n.jsx)(q, { ...e })),
            (a[0] = s),
            (a[1] = e),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
  },
  YFvy(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("on57"),
      r = a("LcBG")
    function l(e, t) {
      return (0, n.jsxs)(
        "div",
        {
          className: "min-w-0",
          children: [
            (0, n.jsx)(r.c5, { index: t, square: !1, layout: "uniform" }),
            (0, n.jsx)("div", {
              "aria-hidden": !0,
              className: "mt-2 flex h-lh items-center justify-center text-xs",
              children: (0, n.jsx)("span", { className: "h-2.5 w-1/4 rounded bg-surface-tertiary" }),
            }),
          ],
        },
        t,
      )
    }
    a.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            a,
            r,
            o = (0, i.c)(9),
            { hasNavigation: c, loading: d, children: u } = e,
            p = c && "pt-9"
          return (
            o[0] !== p
              ? ((t = (0, s.A)(
                  "grid shrink-0 grid-cols-1 gap-x-6 gap-y-10 px-(--create-dialog-inset) pb-9 @min-[441px]/create-dialog:grid-cols-2 @min-[701px]/create-dialog:grid-cols-3",
                  p,
                )),
                (o[0] = p),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== u || o[3] !== d
              ? ((a = d ? Array.from({ length: 6 }, l) : u), (o[2] = u), (o[3] = d), (o[4] = a))
              : (a = o[4]),
            o[5] !== d || o[6] !== t || o[7] !== a
              ? ((r = (0, n.jsx)("div", { "aria-busy": d, className: t, children: a })),
                (o[5] = d),
                (o[6] = t),
                (o[7] = a),
                (o[8] = r))
              : (r = o[8]),
            r
          )
        },
      },
    )
  },
  N7ab(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("zd8w"),
      r = a("oyxz"),
      l = a("cZk2")
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a,
            o,
            c,
            d,
            u = (0, i.c)(14),
            { frame: p, onClose: m, onCloseAutoFocus: f, failed: h } = e,
            x = void 0 !== h && h
          if (
            (u[0] !== x || u[1] !== p
              ? ((t = () => {
                  x && p?.visit.setOutcome("error")
                }),
                (a = [p, x]),
                (u[0] = x),
                (u[1] = p),
                (u[2] = t),
                (u[3] = a))
              : ((t = u[2]), (a = u[3])),
            (0, s.useLayoutEffect)(t, a),
            p && x)
          ) {
            let e
            return (
              u[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)("p", {
                    role: "alert",
                    className: "py-4 text-center",
                    children: (0, n.jsx)(r.A, {
                      id: "space.gettingStarted.templatesLoadError",
                      defaultMessage: "Couldn\u2019t open templates",
                    }),
                  })),
                  (u[4] = e))
                : (e = u[4]),
              e
            )
          }
          return (
            u[5] !== m
              ? ((o = (e) => {
                  e || m()
                }),
                (u[5] = m),
                (u[6] = o))
              : (o = u[6]),
            u[7] !== x
              ? ((c = x
                  ? (0, n.jsx)(r.A, {
                      id: "space.gettingStarted.templatesLoadError",
                      defaultMessage: "Couldn\u2019t open templates",
                    })
                  : (0, n.jsx)(r.A, {
                      id: "space.gettingStarted.templatesLoading",
                      defaultMessage: "Loading templates\u2026",
                    })),
                (u[7] = x),
                (u[8] = c))
              : (c = u[8]),
            u[9] !== x || u[10] !== f || u[11] !== o || u[12] !== c
              ? ((d = (0, n.jsx)(l.k, { open: !0, onCloseAutoFocus: f, onOpenChange: o, failed: x, title: c })),
                (u[9] = x),
                (u[10] = f),
                (u[11] = o),
                (u[12] = c),
                (u[13] = d))
              : (d = u[13]),
            d
          )
        },
      },
    )
  },
  CLQ7(e, t, a) {
    let n = (0, a("Qgfj").YK)({
      forYou: { id: "space.create.forYou", defaultMessage: "For you" },
      workspace: { id: "space.create.workspace", defaultMessage: "Workspace" },
      page: { id: "space.create.tabs.pages", defaultMessage: "Pages" },
      slides: { id: "space.create.tabs.slides", defaultMessage: "Slides" },
      spreadsheet: { id: "space.create.tabs.sheets", defaultMessage: "Sheets" },
      images: { id: "space.create.tabs.images", defaultMessage: "Images" },
    })
    a.d(
      t,
      {},
      {
        DZ: n,
        c3: function (e) {
          return "document" === e ? "page" : "presentation" === e ? "slides" : e
        },
        zr: function (e, t) {
          return [
            { key: "all", name: e.formatMessage(n.forYou) },
            ...(t ? [{ key: "workspace", name: t }] : []),
            ...["page", "slides", "spreadsheet", "images"].map((t) => ({ key: t, name: e.formatMessage(n[t]) })),
          ]
        },
      },
    )
  },
  wgYf(e, t, a) {
    a.d(t, { $: () => k })
    var n = a("ABep"),
      i = a("QosV"),
      s = a("qmMi"),
      r = a("Wf1j"),
      l = a("NRR1"),
      o = a("e1xH"),
      c = a("zd8w"),
      d = a("oyxz"),
      u = a("Ywss"),
      p = a("Sm6l"),
      m = a("bqtn"),
      f = a("bVeK"),
      h = a("SGsN"),
      x = a("OoIX"),
      g = a("mXik"),
      b = a("tv8P"),
      y = a("OWtl"),
      _ = a("soaw"),
      w = a("ZII9"),
      v = a("n87C"),
      C = a("UxN3"),
      j = a("RZZB"),
      M = a("kK7d")
    function N(e) {
      let t,
        N,
        S,
        k,
        A,
        I,
        E,
        L,
        T,
        P,
        z,
        R,
        O,
        D,
        B,
        q,
        U,
        F,
        V,
        G,
        H,
        Y,
        K,
        Z,
        $,
        W,
        X,
        Q = (0, i.c)(33),
        { accountId: J, slidesEnabled: ee, onCreated: et } = e,
        ea = (0, s.gh)(y.u),
        en =
          ((F = (0, i.c)(18)),
          (V = (0, s.gh)(y.u)),
          (G = (0, r.A)()),
          (H = (0, u.Zp)()),
          (Y = (0, u.zy)()),
          (K = (0, c.useRef)(null)),
          (Z = (0, c.useRef)(null)),
          ($ = (0, c.useRef)(!1)),
          (W = (0, _.a)()),
          F[0] !== J || F[1] !== G || F[2] !== W || F[3] !== Y || F[4] !== H || F[5] !== et || F[6] !== V
            ? ((R = function (e) {
                if ($.current) return
                if (!/\.pptx$/i.test(e.name))
                  return void V.get(h.Id).danger(
                    G.formatMessage({
                      id: "pages.templates.pptxOnly",
                      defaultMessage: "Choose a PowerPoint (.pptx) file.",
                    }),
                    { errorAnalytics: { toastId: "pages.templates.pptxOnly" } },
                  )
                $.current = !0
                let t = V.get(l.$M),
                  n = (0, l.hI)(V, J, t),
                  i = (0, j.W)(
                    V,
                    {
                      pendingTitle: G.formatMessage(
                        { id: "pages.templates.importPending", defaultMessage: "Importing \u201C{name}\u201D" },
                        { name: e.name },
                      ),
                      successTitle: G.formatMessage(
                        { id: "pages.templates.importComplete", defaultMessage: "Imported \u201C{name}\u201D" },
                        { name: e.name },
                      ),
                    },
                    "template-import-toast",
                  )
                ;(async function () {
                  if (((0, x.Jx)(V), !t)) throw Error("Missing import identity")
                  let s = { accountId: J, userId: t },
                    r = Z.current
                  if (
                    ((r &&
                      r.file.name === e.name &&
                      r.file.size === e.size &&
                      r.file.lastModified === e.lastModified) ||
                      (Z.current = r = { file: e, key: crypto.randomUUID() }),
                    !r.sourceId)
                  ) {
                    let { uploadCodexFileAttachment: t } = await a.e(117753).then(a.bind(a, "RyQl")),
                      i = await t({
                        scope: V,
                        file: e,
                        signal: n.signal,
                        beforeRequest: () => n.signal.throwIfAborted(),
                      })
                    r.sourceId = i.fileId
                  }
                  ;(n.signal.throwIfAborted(),
                    null == r.page &&
                      (r.page = await V.get(b.createSpacePageMutation$).mutateAsync({
                        accountId: J,
                        expectedIdentity: s,
                        signal: n.signal,
                        requestBody: {
                          destination: "personal_file_drive",
                          document_type: "granola_presentation",
                          title: e.name.replace(/\.pptx$/i, ""),
                          source_file_id: r.sourceId,
                          idempotency_key: r.key,
                        },
                      })),
                    n.signal.throwIfAborted())
                  let { metadata: l } = await M.CodexRequest.safePatch("/pages/{page_id}/metadata", {
                    parameters: { path: { page_id: r.page.metadata.page_id } },
                    requestBody: { template: { enabled: !0 } },
                    signal: n.signal,
                    expectedIdentity: s,
                  })
                  if ("template" !== l.namespace) throw Error("Could not mark imported slides")
                  let o = { ...r.page, metadata: l }
                  ;((Z.current = null),
                    n.signal.throwIfAborted(),
                    (0, b.cacheCreatedSpacePage)(V, J, o),
                    i.complete(),
                    W() && et(),
                    (0, g.U)(V, H, Y, J, o.metadata.page_id, { personal: !0 }))
                })()
                  .catch(() => {
                    ;(i.close(),
                      n.signal.aborted ||
                        V.get(h.Id).danger(
                          G.formatMessage(
                            Z.current?.page
                              ? {
                                  id: "pages.templates.markImportFailed",
                                  defaultMessage:
                                    "Slides imported, but couldn\u2019t mark them as a template. Select the same file to retry.",
                                  description: "A PowerPoint import was saved but marking it as a template failed",
                                }
                              : {
                                  id: "pages.templates.pptxImportFailed",
                                  defaultMessage: "Couldn\u2019t import this PowerPoint file. Try again.",
                                  description: "Error importing a presentation template",
                                },
                          ),
                          { errorAnalytics: { toastId: "pages.templates.pptxImportFailed" } },
                        ))
                  })
                  .finally(() => {
                    ;(($.current = !1), n.stop())
                  })
              }),
              (F[0] = J),
              (F[1] = G),
              (F[2] = W),
              (F[3] = Y),
              (F[4] = H),
              (F[5] = et),
              (F[6] = V),
              (F[7] = R))
            : (R = F[7]),
          (X = R),
          F[8] !== G
            ? ((O = G.formatMessage({
                id: "pages.templates.choosePptx",
                defaultMessage: "Choose a PowerPoint template",
              })),
              (F[8] = G),
              (F[9] = O))
            : (O = F[9]),
          F[10] !== X
            ? ((D = (e) => {
                let t = e.currentTarget.files?.[0]
                ;((e.currentTarget.value = ""), t && X(t))
              }),
              (F[10] = X),
              (F[11] = D))
            : (D = F[11]),
          F[12] !== O || F[13] !== D
            ? ((B = (0, n.jsx)("input", {
                ref: K,
                className: "hidden",
                type: "file",
                accept: ".pptx",
                "aria-label": O,
                onChange: D,
              })),
              (F[12] = O),
              (F[13] = D),
              (F[14] = B))
            : (B = F[14]),
          F[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = (0, n.jsx)(m.ms.Item, {
                leftIcon: (0, n.jsx)(C.b5, { icon: { assets: { 16: w.U, 20: v.D } } }),
                onSelect: () => K.current?.click(),
                children: (0, n.jsx)(d.A, { id: "libraryNext.create.uploadMenu", defaultMessage: "Upload files" }),
              })),
              (F[15] = q))
            : (q = F[15]),
          F[16] !== B ? ((U = { input: B, item: q }), (F[16] = B), (F[17] = U)) : (U = F[17]),
          U),
        ei = (0, s._U)(o.hm, "granola_presentation"),
        { data: es } = (0, s.Ul)(o.j9),
        er = ee && es?.artifact_blank_creation_via_yjs_renderer_enabled === !0,
        el = (0, r.A)(),
        eo = (0, u.zy)(),
        ec = (0, u.Zp)(),
        [ed, eu] = (0, c.useState)(!1),
        ep = (0, c.useRef)(!1),
        em = (0, c.useRef)(null),
        ef = (0, _.a)()
      Q[0] !== J || Q[1] !== el || Q[2] !== ef || Q[3] !== eo || Q[4] !== ec || Q[5] !== et || Q[6] !== ea
        ? ((t = function (e) {
            if (ep.current) return
            ;((ep.current = !0), eu(!0))
            let t = (0, l.hI)(ea, J)
            ;(async function () {
              if ("page" === e) {
                let { createAndOpenPage: e } = await a.e(461515).then(a.bind(a, "s4OC"))
                ;(t.signal.throwIfAborted(), ef() && e(ea, et, { namespace: "template" }))
                return
              }
              ;(0, x.Jx)(ea)
              let n = ea.get(l.$M),
                i = em.current ?? crypto.randomUUID()
              em.current = i
              let s = await ea
                .get(b.createSpacePageMutation$)
                .mutateAsync({
                  accountId: J,
                  expectedIdentity: null == n ? void 0 : { accountId: J, userId: n },
                  signal: t.signal,
                  requestBody: {
                    destination: "personal_file_drive",
                    document_type: e,
                    namespace: "template",
                    title: "",
                    idempotency_key: i,
                  },
                })
              ;(t.signal.throwIfAborted(),
                (em.current = null),
                (0, b.cacheCreatedSpacePage)(ea, J, s),
                ef() && (et(), (0, g.U)(ea, ec, eo, J, s.metadata.page_id, { personal: !0 })))
            })()
              .catch(() => {
                ef() &&
                  !t.signal.aborted &&
                  ea
                    .get(h.Id)
                    .danger(
                      el.formatMessage({
                        id: "pages.templates.blankCreateFailed",
                        defaultMessage: "Couldn\u2019t create template. Try again.",
                      }),
                      { errorAnalytics: { toastId: "pages.templates.blankCreateFailed" } },
                    )
              })
              .finally(() => {
                ;(t.stop(), (ep.current = !1), ef() && eu(!1))
              })
          }),
          (Q[0] = J),
          (Q[1] = el),
          (Q[2] = ef),
          (Q[3] = eo),
          (Q[4] = ec),
          (Q[5] = et),
          (Q[6] = ea),
          (Q[7] = t))
        : (t = Q[7])
      let eh = t
      return (
        Q[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, n.jsx)(f.xFs, {})),
            (S = (0, n.jsx)(d.A, { id: "space.templates.new", defaultMessage: "Template" })),
            (Q[8] = N),
            (Q[9] = S))
          : ((N = Q[8]), (S = Q[9])),
        Q[10] !== ed
          ? ((k = (0, n.jsxs)(p.$, {
              color: "primary",
              radius: "full",
              size: "pageAction",
              disabled: ed,
              children: [N, S],
            })),
            (Q[10] = ed),
            (Q[11] = k))
          : (k = Q[11]),
        Q[12] !== eh ? ((A = () => eh("page")), (Q[12] = eh), (Q[13] = A)) : (A = Q[13]),
        Q[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, n.jsx)(d.A, { id: "space.templates.newPage", defaultMessage: "Page" })), (Q[14] = I))
          : (I = Q[14]),
        Q[15] !== A
          ? ((E = (0, n.jsx)(m.ms.Item, { LeftIcon: f.oQS, onSelect: A, children: I })), (Q[15] = A), (Q[16] = E))
          : (E = Q[16]),
        Q[17] !== er || Q[18] !== eh
          ? ((L =
              er &&
              (0, n.jsx)(m.ms.Item, {
                LeftIcon: f.AdV,
                onSelect: () => eh("granola_presentation"),
                children: (0, n.jsx)(d.A, { id: "space.templates.newSlides", defaultMessage: "Slides" }),
              })),
            (Q[17] = er),
            (Q[18] = eh),
            (Q[19] = L))
          : (L = Q[19]),
        Q[20] !== ei || Q[21] !== ee || Q[22] !== en.item
          ? ((T = ei && ee && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(m.ms.Separator, {}), en.item] })),
            (Q[20] = ei),
            (Q[21] = ee),
            (Q[22] = en.item),
            (Q[23] = T))
          : (T = Q[23]),
        Q[24] !== ed || Q[25] !== k || Q[26] !== E || Q[27] !== L || Q[28] !== T
          ? ((P = (0, n.jsxs)(m.Ab, {
              align: "end",
              contentWidth: "sm",
              modal: !0,
              disabled: ed,
              triggerButton: k,
              children: [E, L, T],
            })),
            (Q[24] = ed),
            (Q[25] = k),
            (Q[26] = E),
            (Q[27] = L),
            (Q[28] = T),
            (Q[29] = P))
          : (P = Q[29]),
        Q[30] !== P || Q[31] !== en.input
          ? ((z = (0, n.jsxs)(n.Fragment, { children: [en.input, P] })), (Q[30] = P), (Q[31] = en.input), (Q[32] = z))
          : (z = Q[32]),
        z
      )
    }
    var S = a("OMIV")
    function k(e) {
      let t,
        a,
        c,
        d,
        u = (0, i.c)(14),
        p = (0, r.A)(),
        m = (0, s.Ul)(o.pagesEnabled$),
        f = (0, s.Ul)(o._s),
        h = (0, s._U)(S.JW, "4043188516"),
        x = (0, s.Ul)(l.DO),
        g = (0, s.Ul)(l.$M),
        b = (0, s._U)(o.H6, "granola_presentation")
      if (!m || !f || !h || !x || !g) {
        let e
        return (u[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = {}), (u[0] = e)) : (e = u[0]), e)
      }
      return (
        u[1] !== p
          ? ((t = p.formatMessage({ id: "space.templates.blankPickerTitle", defaultMessage: "Templates" })),
            (u[1] = p),
            (u[2] = t))
          : (t = u[2]),
        u[3] !== x || u[4] !== g ? ((a = JSON.stringify([x, g])), (u[3] = x), (u[4] = g), (u[5] = a)) : (a = u[5]),
        u[6] !== x || u[7] !== e || u[8] !== b || u[9] !== a
          ? ((c = (0, n.jsx)(N, { accountId: x, slidesEnabled: b, onCreated: e }, a)),
            (u[6] = x),
            (u[7] = e),
            (u[8] = b),
            (u[9] = a),
            (u[10] = c))
          : (c = u[10]),
        u[11] !== t || u[12] !== c
          ? ((d = { title: t, action: c }), (u[11] = t), (u[12] = c), (u[13] = d))
          : (d = u[13]),
        d
      )
    }
  },
  OpPi(e, t, a) {
    var n = a("qmMi"),
      i = a("OWtl")
    let s = (0, n.vP)(i.u, !1)
    a.d(
      t,
      {},
      {
        O: async function (e, t) {
          if (!e.get(s)) {
            e.set(s, !0)
            try {
              await t()
            } finally {
              e.set(s, !1)
            }
          }
        },
        q: s,
      },
    )
  },
  HoEE(e, t, a) {
    a.d(t, { K: () => eA })
    var n = a("ABep"),
      i = a("QosV"),
      s = a("qmMi"),
      r = a("zd8w"),
      l = a("Ywss"),
      o = a("SkLA"),
      c = a("jU86"),
      d = a("QoH2"),
      u = a("nlNF"),
      p = a("OWtl"),
      m = a("DV75"),
      f = a("Kw4a"),
      h = a("QBk8"),
      x = a("yGJW"),
      g = a("I8SU"),
      b = a("OM8g"),
      y = a("on57"),
      _ = a("K4Cx"),
      w = a("Wf1j"),
      v = a("oyxz"),
      C = a("Q2Qp"),
      j = a("wD9O"),
      M = a("Sm6l"),
      N = a("JNtf"),
      S = a("T1PX"),
      k = a("d1ji")
    a("V8uZ")
    var A = a("xs0G"),
      I = a("wq58")
    function E(e) {
      let t = e.querySelector("[data-pointer-badge]")
      if (t?.dataset.pointerClientX == null || null == t.dataset.pointerClientY) return
      t.hidden = !1
      let a = e.getBoundingClientRect(),
        n = Number(t.dataset.pointerClientX),
        i = Number(t.dataset.pointerClientY)
      if (n < a.left || n >= a.right || i < a.top || i >= a.bottom) return void L(t)
      let s = Math.max(4, Math.min(e.clientWidth - t.offsetWidth - 4, ((n - a.left) * e.clientWidth) / a.width + 12)),
        r = Math.max(4, Math.min(e.clientHeight - t.offsetHeight - 4, ((i - a.top) * e.clientHeight) / a.height + 18))
      t.style.transform = `translate(${s}px, ${r}px)`
    }
    function L(e) {
      ;((e.hidden = !0), delete e.dataset.pointerClientX, delete e.dataset.pointerClientY)
    }
    let T = [
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
      let a = e.querySelector(t)
      if (null == a) throw Error("Missing Space animation element: " + t)
      return a
    }
    function z(e, t, a) {
      e.style.getPropertyValue(t) !== a && e.style.setProperty(t, a)
    }
    function R(e) {
      return e * e * (3 - 2 * e)
    }
    function O(e) {
      return e >= 1 ? 1 : 1 - Math.exp(-8 * e) * (Math.cos(12 * e) + (2 / 3) * Math.sin(12 * e))
    }
    function D(e) {
      let t,
        a,
        s,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        f,
        h,
        x,
        g,
        b,
        _,
        C,
        j,
        M,
        N = (0, i.c)(38),
        { moving: S, reduceMotion: k, warping: E } = e,
        { locale: L } = (0, w.A)(),
        D = (0, r.useRef)(null),
        q = (0, r.useRef)(null)
      ;(N[0] !== L
        ? ((t = () => {
            let e = D.current,
              t = e?.parentElement
            if (null == e || null == t) return
            let a = (function (e, t, a) {
              let n = P(e, "[data-work-samples]"),
                i = Array.from(n.querySelectorAll("[data-work-sample]")).map((e) => ({
                  element: e,
                  document: P(e, "[data-artwork-document]"),
                  corners: Array.from(e.querySelectorAll("[data-corner-probe]")),
                  geometry: { tl: { x: 0, y: 0 }, tr: { x: 0, y: 0 }, bl: { x: 0, y: 0 }, center: { x: 0, y: 0 } },
                })),
                s = new Map(Array.from(n.querySelectorAll("[data-editable]")).map((e) => [e.dataset.editable, e])),
                r = new Map(
                  Array.from(s.values()).map((e) => [e, e.querySelector("[data-editable-copy]")?.textContent ?? ""]),
                ),
                l = Array.from(t.querySelectorAll("[data-collaborator]")).map((e, t) => ({
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
                o = new Intl.Segmenter(a, { granularity: "grapheme" }),
                c = new Map(),
                d = [0, 0, 0, 0],
                u = l.slice(0, 4),
                p = [],
                m = 0,
                f = 5.8,
                h = 4,
                x = 0,
                g = 0,
                b = 0,
                y = !1,
                _ = e.getBoundingClientRect()
              function w(e) {
                let t = s.get(e)
                if (null == t) throw Error("Missing Space artwork field: " + e)
                return t
              }
              function v(e) {
                let t = C(e)
                return { x: t.x + t.width, y: t.y + t.height }
              }
              function C(e) {
                let t = e.getBoundingClientRect(),
                  a = g / (_.width || 1),
                  n = b / (_.height || 1)
                return { x: (t.left - _.left) * a, y: (t.top - _.top) * n, width: t.width * a, height: t.height * n }
              }
              function j() {
                for (let t of ((_ = e.getBoundingClientRect()), i)) {
                  let [e, a, n] = t.corners.map(v)
                  t.geometry = { tl: e, tr: a, bl: n, center: { x: (a.x + n.x) / 2, y: (a.y + n.y) / 2 } }
                }
              }
              function M(e) {
                if (null != e.job) {
                  let t = v(e.job.pin)
                  if (e.job.text) {
                    let a = P(e.job.element, "[data-editable-copy]").getClientRects(),
                      n = a[a.length - 1]
                    null != n &&
                      (t = {
                        x: ((n.right - _.left) * g) / (_.width || 1),
                        y: ((n.bottom - _.top) * b) / (_.height || 1),
                      })
                  }
                  if (e.job.paletteReady && null != e.job.palette) {
                    let a = P(e.job.palette, "i:nth-child(2)").getBoundingClientRect()
                    t = {
                      x: ((a.left + a.width / 2 - _.left) * g) / (_.width || 1),
                      y: ((a.top + a.height / 2 - _.top) * b) / (_.height || 1),
                    }
                  }
                  return t
                }
                let { tl: t, tr: a, bl: n, center: s } = i[e.asset].geometry,
                  [r, l] = [
                    [1, 1],
                    [0, 0],
                    [0, 1],
                    [1, 0],
                    [1, 0.5],
                  ][e.slot],
                  o = t.x + (a.x - t.x) * r + (n.x - t.x) * l,
                  c = t.y + (a.y - t.y) * r + (n.y - t.y) * l,
                  d = s.x - o,
                  u = s.y - c,
                  p = Math.hypot(d, u) || 1
                return { x: o + (d / p) * 13 + e.offset.x, y: c + (u / p) * 13 + e.offset.y }
              }
              function N(e, t) {
                let a = M(e),
                  n = e.painted ?? e
                ;((e.destination = null),
                  (e.trip = {
                    start: m,
                    x: n.x,
                    y: n.y,
                    duration: t ?? 0.38 + Math.min(0.62, Math.hypot(a.x - n.x, a.y - n.y) / 1700),
                  }))
              }
              function S(e, t) {
                return e === l[0] || 1 === t || l.every((a) => a === e || a === l[0] || a.asset !== t)
              }
              function k(e, t, a) {
                let n = l.filter((a) => a !== e && a.asset === t).map((e) => e.slot)
                ;((e.asset = t), (e.slot = [0, 1, 2, 3, 4].find((e) => !n.includes(e)) ?? 0), N(e, a))
              }
              function A(e) {
                ;((e.selected = !0),
                  (e.element.dataset.editing = "true"),
                  e.text && (e.element.dataset.selected = "true"))
              }
              function I(e, t, a = !1) {
                let n,
                  s = T[e],
                  [l, m] = s[d[e]++ % s.length],
                  f = w(m),
                  h = i[e],
                  x = c.get(m) ?? 0
                c.set(m, x + 1)
                let g = 1,
                  b = null
                switch (l) {
                  case "text": {
                    let e = P(f, "[data-editable-copy]"),
                      t = (x % 2 == 0 ? f.dataset.revision : r.get(f)) ?? "",
                      a = Array.from(o.segment(t), (e) => e.segment)
                    g = a.length > 40 ? 4.3 : a.length > 20 ? 3.5 : a.length > 12 ? 2.9 : 2.1
                    let i = 0,
                      s = a.map((e, t) => {
                        let a = 0.72 + ((7 * t) % 5) * 0.11
                        return (/\s/u.test(e) ? (a = 1.65) : /[.,]/u.test(e) && (a = 2.8), (i += a))
                      })
                    n = (t) => {
                      var n, r
                      let l,
                        o = 1 === t ? a.length : s.filter((e) => e / i <= t).length
                      ;((n = e),
                        (r = a.slice(0, o).join("")),
                        (l = n.firstChild) instanceof Text && null == l.nextSibling
                          ? l.data !== r && (l.data = r)
                          : n.textContent !== r && (n.textContent = r))
                    }
                    break
                  }
                  case "color": {
                    let t = f.style.getPropertyValue("--paper-color") || (0 === e ? "#ff5b35" : "#bfb8dc"),
                      a = 0 === e ? ["#ff784f", "#ff5b35"][x % 2] : ["#d9cfbd", "#bfb8dc"][x % 2]
                    ;((b = P(h.document, "[data-palette]")),
                      delete b.dataset.picked,
                      delete b.dataset.pressed,
                      Array.from(b.querySelectorAll("i")).forEach((e, n) => z(e, "--swatch", [t, a, "#cfc4f4"][n])),
                      (g = 0.8),
                      (n = (e) => {
                        z(
                          f,
                          "--paper-color",
                          "#" +
                            [1, 3, 5]
                              .map((n) => {
                                var i, s
                                return Math.round(
                                  ((i = parseInt(t.slice(n, n + 2), 16)),
                                  (s = parseInt(a.slice(n, n + 2), 16)),
                                  i + (s - i) * R(e)),
                                )
                                  .toString(16)
                                  .padStart(2, "0")
                              })
                              .join(""),
                        )
                      }))
                    break
                  }
                  case "products": {
                    let e = [0, 1, 2].map((e) => w("product-" + e)),
                      t = e.map((e, t) => {
                        let a = e.style.translate
                        return "" === a ? 128 * t : parseFloat(a)
                      }),
                      a = Number(m.slice(-1)),
                      i = [0, 1, 2].sort((e, a) => t[e] - t[a]),
                      s = i.indexOf(a)
                    ;(i.splice(s, 1), i.splice(2 * (0 === s), 0, a))
                    let r = e.map((e, t) => 128 * i.indexOf(t))
                    ;((g = 1.65),
                      (n = (a) =>
                        e.forEach((e, n) => {
                          var i, s
                          return z(e, "translate", ((i = t[n]), (s = r[n]), i + (s - i) * O(a) + "px"))
                        })))
                    break
                  }
                  case "image": {
                    let e = P(f, "[data-artwork-image]"),
                      t = parseFloat(e.style.scale) || 1,
                      a = t > 1 ? 1 : 1.08
                    n = (n) => {
                      var i
                      z(e, "scale", String((i = t) + (a - i) * O(n)))
                    }
                  }
                }
                let y = {
                  asset: e,
                  person: t,
                  element: f,
                  pin: P(f, "[data-edit-pin]"),
                  palette: b,
                  paletteReady: !1,
                  caret: f.querySelector("[data-artwork-caret]"),
                  age: 0,
                  duration: g,
                  selected: !1,
                  text: "text" === l,
                  apply: n,
                }
                ;(p.push(y),
                  (u[e] = t),
                  (t.asset = e),
                  (t.slot = 0),
                  (t.job = y),
                  (t.offset = { x: 0, y: 0 }),
                  (t.nudge = null),
                  (t.element.dataset.editing = "true"),
                  (f.dataset.editTarget = "true"),
                  f.style.setProperty("--editor", t.color),
                  N(t),
                  a && ((t.trip = null), (y.age = 0.24), A(y)))
              }
              function E(e, t = !0) {
                ;(e.apply(1),
                  delete e.element.dataset.editing,
                  delete e.element.dataset.editTarget,
                  delete e.element.dataset.selected,
                  delete e.element.dataset.typing,
                  null != e.palette &&
                    (delete e.palette.dataset.open, delete e.palette.dataset.picked, delete e.palette.dataset.pressed),
                  p.splice(p.indexOf(e), 1))
                let a = e.person
                ;((a.job = null), (a.element.dataset.editing = "false"), t && k(a, a.asset, 0.48))
              }
              function L(e = !1) {
                for (; p.length > 0;) E(p[0])
                if (e) {
                  for (let e of l) ((e.trip = null), (e.nudge = null), (e.offset = { x: 0, y: 0 }))
                  B()
                }
              }
              function D() {
                for (let t of ((g = e.clientWidth),
                (b = e.clientHeight),
                (n.inert = y = g > 0 && (g <= 540 || b <= 460)),
                l))
                  ((t.width = t.element.offsetWidth), (t.height = t.element.offsetHeight))
                for (let e of i) {
                  let t =
                    (e.element.clientWidth / Number(e.document.dataset.documentWidth)) *
                    (parseFloat(getComputedStyle(P(e.element, "[data-drift]")).scale) || 1)
                  ;(z(e.document, "--selection-stroke", 1.15 / Math.max(0.1, t) + "px"),
                    z(e.document, "--handle-size", 4 / Math.max(0.1, t) + "px"))
                }
                y ? L(!0) : B()
              }
              function B() {
                ;(j(), q(0, !0))
              }
              function q(e, t = !1) {
                let a = p.flatMap((e) => [
                    C(e.element),
                    ...(e.paletteReady && null != e.palette ? [C(e.palette)] : []),
                  ]),
                  n = l.map((e) => ({ x: e.x, y: e.y, width: e.width, height: e.height })),
                  i = l.map(M)
                l.forEach((s, r) => {
                  var l, o, c, d, u, p, f, h, x, y
                  let _ = i[r],
                    w = (function ({
                      x: e,
                      y: t,
                      width: a,
                      height: n,
                      viewportWidth: i,
                      viewportHeight: s,
                      obstacles: r,
                      protectedRegions: l = [],
                      preferred: o,
                    }) {
                      let c = (e, t, i) =>
                          Math.max(0, Math.min(e + a, i.x + i.width) - Math.max(e, i.x)) *
                          Math.max(0, Math.min(t + n, i.y + i.height) - Math.max(t, i.y)),
                        d = [
                          [1, 1],
                          [-1, 1],
                          [1, -1],
                          [-1, -1],
                        ].map(([o, d], u) => {
                          let p = e + (o > 0 ? 8 : -a - 8),
                            m = t + (d > 0 ? 8 : -n - 8)
                          for (let e of l) {
                            if (0 === c(p, m, e)) continue
                            let t = o > 0 ? e.x + e.width + 8 : e.x - a - 8,
                              i = d > 0 ? e.y + e.height + 8 : e.y - n - 8
                            Math.abs(t - p) < Math.abs(i - m) ? (p = t) : (m = i)
                          }
                          return {
                            x: (p = Math.max(4, Math.min(i - a - 4, p))),
                            y: (m = Math.max(4, Math.min(s - n - 4, m))),
                            index: u,
                            protectedOverlap: l.reduce((e, t) => e + c(p, m, t), 0),
                            score:
                              0.15 * r.reduce((e, t) => e + c(p, m, t), 0) +
                              Math.hypot(p + (o > 0 ? 0 : a) - e, m + (d > 0 ? 0 : n) - t),
                          }
                        }),
                        u = d[o] ?? d[0]
                      for (let e of d)
                        (e.protectedOverlap < u.protectedOverlap - 1 ||
                          (e.protectedOverlap <= u.protectedOverlap && e.score + 80 < u.score)) &&
                          (u = e)
                      return { x: u.x, y: u.y, index: u.index }
                    })({
                      ..._,
                      width: s.width,
                      height: s.height,
                      viewportWidth: g,
                      viewportHeight: b,
                      obstacles: n.slice(0, r),
                      protectedRegions: a,
                      preferred: s.placement,
                    })
                  s.placement = w.index
                  let v = 1 - Math.exp(-e / 0.09)
                  if (
                    (null == s.destination || t
                      ? (s.destination = w)
                      : (s.destination = {
                          x: ((l = s.destination.x), (o = w.x), l + (o - l) * v),
                          y: ((c = s.destination.y), (d = w.y), c + (d - c) * v),
                        }),
                    null == s.painted || t)
                  )
                    ((s.x = w.x), (s.y = w.y))
                  else if (null != s.trip) {
                    let e = Math.min(1, Math.max(0, (m - s.trip.start) / s.trip.duration)),
                      t = e ** 3 * (e * (6 * e - 15) + 10)
                    ;((u = s.trip.x),
                      (p = s.destination.x),
                      (s.x = u + (p - u) * t),
                      (f = s.trip.y),
                      (h = s.destination.y),
                      (s.y = f + (h - f) * t),
                      1 === e && ((s.trip = null), (s.nextNudge = m + 1.2 + (s.phase % 1.5))))
                  } else {
                    ;((x = s.x), (s.x = x + (w.x - x) * v), (y = s.y), (s.y = y + (w.y - y) * v))
                  }
                  s.painted = { x: s.x, y: s.y }
                  let C = (function (e, t, a = "top-left") {
                    let n = t.x - e.x - e.width / 2,
                      i = t.y - e.y - e.height / 2,
                      s = 6 > Math.abs(n) ? a.endsWith("right") : n > 0,
                      r = 6 > Math.abs(i) ? a.startsWith("bottom") : i > 0
                    return `${r ? "bottom" : "top"}-${s ? "right" : "left"}`
                  })({ ...s.painted, width: s.width, height: s.height }, _, s.element.dataset.pointerCorner)
                  ;(s.element.dataset.pointerCorner !== C &&
                    ((s.element.dataset.pointerCorner = C),
                    s.element.style.setProperty(
                      "--cursor-label-radius",
                      {
                        "top-left": "0 9px 9px 9px",
                        "top-right": "9px 0 9px 9px",
                        "bottom-left": "9px 9px 9px 0",
                        "bottom-right": "9px 9px 0 9px",
                      }[C] ?? "0 9px 9px 9px",
                    )),
                    z(s.element, "transform", `translate3d(${s.x}px, ${s.y}px, 0px)`))
                  let j = String(s.asset)
                  s.element.dataset.asset !== j && (s.element.dataset.asset = j)
                  let M = String(null != s.trip)
                  s.element.dataset.traveling !== M && (s.element.dataset.traveling = M)
                })
              }
              D()
              let U = new ResizeObserver(D)
              return (
                U.observe(e),
                i.forEach((e) => U.observe(e.element)),
                l.forEach((e) => U.observe(e.element)),
                {
                  tick: function (e) {
                    let t = Math.min(0.1, Math.max(0, e))
                    if (((m += t), j(), y)) L()
                    else {
                      if (0 === p.length) {
                        for (let e of l) e === l[0] || u.includes(e) || 1 === e.asset || k(e, 1)
                        i.forEach((e, t) => I(t, u[t], !0))
                      }
                      for (let e of p)
                        if (null == e.person.trip && "true" !== i[e.asset].element.dataset.dragging) {
                          if (
                            ((e.age += t),
                            e.age >= 0.22 && !e.selected && A(e),
                            null != e.palette && !e.paletteReady && e.age > 0.35)
                          ) {
                            if (p.some((t) => t !== e && (!t.selected || null != t.person.trip || t.paletteReady))) {
                              e.age = 0.35
                              continue
                            }
                            ;((e.palette.dataset.open = "true"), (e.paletteReady = !0), N(e.person))
                            continue
                          }
                          if (null != e.palette && e.paletteReady && e.age >= 0.48) {
                            "true" !== e.palette.dataset.picked && (e.palette.dataset.picked = "true")
                            let t = String(e.age < 0.64)
                            e.palette.dataset.pressed !== t && (e.palette.dataset.pressed = t)
                          }
                          if (e.age >= 0.7) {
                            if (
                              (e.text &&
                                "true" !== e.element.dataset.typing &&
                                (delete e.element.dataset.selected, (e.element.dataset.typing = "true")),
                              null != e.caret)
                            ) {
                              let t = (e.age - 0.7) % 1 < 0.49 ? "1" : "0"
                              e.caret.style.opacity !== t && (e.caret.style.opacity = t)
                            }
                            e.apply(Math.min(1, (e.age - 0.7) / e.duration))
                          }
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
                        let t = m >= f ? l.find((t) => null == t.job && null == t.trip && S(t, e.asset)) : null,
                          a = t ?? e.person
                        ;(E(e, null != t), null != t && (f = m + 5.8), I(e.asset, a))
                      }
                    }
                    if (y && m > h) {
                      let [e, t] = [
                          [0, 1],
                          [1, 3],
                          [2, 3],
                          [3, 2],
                          [3, 1],
                          [1, 0],
                        ][x % 6],
                        a = l.find((a) => a.asset === e && null == a.trip && S(a, t))
                      ;(null != a && k(a, t), x++, (h = m + 6.5))
                    }
                    for (let e of l)
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
                          var a, n, s, r
                          let t = e.nudge,
                            i = Math.min(1, (m - t.start) / t.duration)
                          ;((e.offset = {
                            x: ((a = t.x), (n = t.toX), a + (n - a) * R(i)),
                            y: ((s = t.y), (r = t.toY), s + (r - s) * R(i)),
                          }),
                            1 === i && (e.nudge = null))
                        }
                      }
                    q(t)
                  },
                  position: B,
                  finishEdits: L,
                  dispose: () => {
                    ;(U.disconnect(), L(), (n.inert = !1))
                  },
                }
              )
            })(t, e, L)
            return (
              (q.current = a),
              () => {
                ;(a.dispose(), (q.current = null))
              }
            )
          }),
          (a = [L]),
          (N[0] = L),
          (N[1] = t),
          (N[2] = a))
        : ((t = N[1]), (a = N[2])),
        (0, r.useLayoutEffect)(t, a),
        N[3] !== S
          ? ((s = () => {
              let e = q.current,
                t = D.current?.parentElement
              if (null == e || null == t) return
              if (!S) {
                let a = () => e.position(),
                  n = () => {
                    A.Gt.postRender(a)
                  }
                return (
                  t.addEventListener("pointermove", n),
                  t.addEventListener("pointerup", n),
                  t.addEventListener("keydown", n),
                  t.addEventListener("click", n),
                  () => {
                    ;(t.removeEventListener("pointermove", n),
                      t.removeEventListener("pointerup", n),
                      t.removeEventListener("keydown", n),
                      t.removeEventListener("click", n),
                      (0, A.WG)(a))
                  }
                )
              }
              let a = (t) => {
                let { delta: a } = t
                e.tick(a / 1e3)
              }
              return (A.Gt.postRender(a, !0), () => (0, A.WG)(a))
            }),
            (N[3] = S),
            (N[4] = s))
          : (s = N[4]),
        N[5] !== L || N[6] !== S ? ((l = [S, L]), (N[5] = L), (N[6] = S), (N[7] = l)) : (l = N[7]),
        (0, r.useEffect)(s, l),
        N[8] !== k
          ? ((o = () => {
              k && q.current?.finishEdits(!0)
            }),
            (N[8] = k),
            (N[9] = o))
          : (o = N[9]),
        N[10] !== L || N[11] !== k ? ((c = [k, L]), (N[10] = L), (N[11] = k), (N[12] = c)) : (c = N[12]),
        (0, r.useEffect)(o, c))
      let U = E && "opacity-0"
      return (
        N[13] !== U
          ? ((d = (0, y.A)("pointer-events-none absolute inset-0 size-full z-7 [transition:opacity_300ms_ease]", U)),
            (N[13] = U),
            (N[14] = d))
          : (d = N[14]),
        N[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(I.A, { className: "size-[18px]" })),
            (u = (0, n.jsx)(v.A, { id: "space.introduction.collaborator.chatgpt", defaultMessage: "ChatGPT" })),
            (N[15] = u),
            (N[16] = p))
          : ((u = N[15]), (p = N[16])),
        N[17] !== S
          ? ((m = (0, n.jsxs)(B, { color: "white", moving: S, darkText: !0, raised: !0, children: [p, u] })),
            (N[17] = S),
            (N[18] = m))
          : (m = N[18]),
        N[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(v.A, { id: "space.introduction.collaborator.henry", defaultMessage: "Henry Caldwell" })),
            (N[19] = f))
          : (f = N[19]),
        N[20] !== S
          ? ((h = (0, n.jsx)(B, { color: "purple", moving: S, children: f })), (N[20] = S), (N[21] = h))
          : (h = N[21]),
        N[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)(v.A, { id: "space.introduction.collaborator.eric", defaultMessage: "Eric Thompson" })),
            (N[22] = x))
          : (x = N[22]),
        N[23] !== S
          ? ((g = (0, n.jsx)(B, { color: "green", moving: S, children: x })), (N[23] = S), (N[24] = g))
          : (g = N[24]),
        N[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsx)(v.A, { id: "space.introduction.collaborator.jasmine", defaultMessage: "Jasmine Liu" })),
            (N[25] = b))
          : (b = N[25]),
        N[26] !== S
          ? ((_ = (0, n.jsx)(B, { color: "yellow", moving: S, darkText: !0, children: b })), (N[26] = S), (N[27] = _))
          : (_ = N[27]),
        N[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, n.jsx)(v.A, { id: "space.introduction.collaborator.maya", defaultMessage: "Maya Patel" })),
            (N[28] = C))
          : (C = N[28]),
        N[29] !== S
          ? ((j = (0, n.jsx)(B, { color: "blue", moving: S, darkText: !0, children: C })), (N[29] = S), (N[30] = j))
          : (j = N[30]),
        N[31] !== m || N[32] !== h || N[33] !== g || N[34] !== _ || N[35] !== j || N[36] !== d
          ? ((M = (0, n.jsxs)("div", { ref: D, className: d, "aria-hidden": !0, children: [m, h, g, _, j] })),
            (N[31] = m),
            (N[32] = h),
            (N[33] = g),
            (N[34] = _),
            (N[35] = j),
            (N[36] = d),
            (N[37] = M))
          : (M = N[37]),
        M
      )
    }
    function B(e) {
      let t,
        a,
        s,
        r = (0, i.c)(14),
        { children: l, color: o, moving: c, darkText: d, raised: u } = e,
        p = "white" === o && "[--cursor-color:var(--white)]",
        m = "purple" === o && "[--cursor-color:var(--brand-purple-400)]",
        f = "green" === o && "[--cursor-color:var(--brand-green-400)]",
        h = "yellow" === o && "[--cursor-color:var(--brand-yellow-400)]",
        x = "blue" === o && "[--cursor-color:#00b1ff]"
      return (
        r[0] !== p || r[1] !== m || r[2] !== f || r[3] !== h || r[4] !== x
          ? ((t = (0, y.A)("absolute left-0 top-0 will-change-transform", p, m, f, h, x)),
            (r[0] = p),
            (r[1] = m),
            (r[2] = f),
            (r[3] = h),
            (r[4] = x),
            (r[5] = t))
          : (t = r[5]),
        r[6] !== l || r[7] !== d || r[8] !== c || r[9] !== u
          ? ((a = (0, n.jsx)(q, { moving: c, darkText: d, raised: u, children: l })),
            (r[6] = l),
            (r[7] = d),
            (r[8] = c),
            (r[9] = u),
            (r[10] = a))
          : (a = r[10]),
        r[11] !== t || r[12] !== a
          ? ((s = (0, n.jsx)("span", { className: t, "data-collaborator": !0, children: a })),
            (r[11] = t),
            (r[12] = a),
            (r[13] = s))
          : (s = r[13]),
        s
      )
    }
    function q(e) {
      let t,
        a,
        s = (0, i.c)(7),
        { children: r, moving: l, darkText: o, raised: c } = e,
        d = void 0 !== l && l && "[transition:border-radius_120ms_ease]",
        u = void 0 !== o && o ? "text-[var(--gray-fixed-1000)]" : "text-[var(--white)]",
        p = void 0 !== c && c ? "shadow-[0_2px_8px_#0004,0_0_0_1px_#0000000d]" : "shadow-[0_2px_6px_#00000012]"
      return (
        s[0] !== d || s[1] !== u || s[2] !== p
          ? ((t = (0, y.A)(
              "flex items-center gap-[6px] px-[10px] py-[6px] rounded-[var(--cursor-label-radius,0_9px_9px_9px)] bg-[var(--cursor-color)] [font-family:Arial,sans-serif] text-[16px] font-medium leading-[20px] tracking-[-0.5px] whitespace-nowrap",
              "[@container_space-introduction_(max-width:760px)]:text-[13px] [@container_space-introduction_(max-width:760px)]:leading-[18px] [@container_space-introduction_(max-width:760px)]:px-[8px] [@container_space-introduction_(max-width:760px)]:py-[3px] [@container_space-introduction_(max-width:540px)_or_(max-height:460px)]:text-[13px]",
              d,
              u,
              p,
            )),
            (s[0] = d),
            (s[1] = u),
            (s[2] = p),
            (s[3] = t))
          : (t = s[3]),
        s[4] !== r || s[5] !== t
          ? ((a = (0, n.jsx)("span", { className: t, children: r })), (s[4] = r), (s[5] = t), (s[6] = a))
          : (a = s[6]),
        a
      )
    }
    let U = ["#f5f6fb", "#7ab1fe", "#6dcbf4", "#fa994c", "#f87915"]
    function F(e) {
      let t,
        a,
        s,
        l,
        o = (0, i.c)(10),
        { moving: c, warping: d, initialDetail: u } = e,
        p = void 0 === u ? "full" : u,
        m = (0, r.useRef)(null),
        f = (0, r.useRef)(null)
      o[0] !== d ? ((t = () => d), (o[0] = d), (o[1] = t)) : (t = o[1])
      let h = (0, r.useEffectEvent)(t)
      return (
        o[2] !== p || o[3] !== h || o[4] !== c
          ? ((a = () => {
              let e = m.current,
                t = e?.getContext("2d"),
                a = e?.parentElement
              if (!e || !t || !a) return
              let n = f.current ?? {
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
              f.current = n
              let i = U.map(V),
                s = { x: 0, y: 0, active: !1, down: !1 },
                r = 0,
                l = 0,
                o = 0,
                d = 0,
                u = 0,
                x = 42,
                g = () => ((x = (16807 * x) % 0x7fffffff) - 1) / 0x7ffffffe,
                b = () => {
                  let e = 0.45 + 2.8 * g(),
                    t = (g() - 0.5) * n.width * e * 1.06,
                    a = (g() - 0.5) * n.height * e * 1.06,
                    i = g(),
                    s = g(),
                    r = 0.3 + 0.48 * g()
                  i >= 0.992 ? (r = 1.9 + 0.8 * g()) : i >= 0.88 && (r = 0.85 + 0.7 * g())
                  let l = i < 0.88 ? 0.15 + 0.35 * g() : 0.4 + 0.5 * g(),
                    o = g() * Math.PI * 2
                  return {
                    x: t,
                    y: a,
                    z: e,
                    size: r,
                    alpha: l,
                    brightness: l,
                    color: [0.52, 0.7, 0.85, 0.93, 1].findIndex((e) => s < e),
                    phase: o,
                    sinPhase: Math.sin(o),
                    cosPhase: Math.cos(o),
                    rate: 0.3 + 0.65 * g(),
                    vx: (g() - 0.5) * 1.6,
                    vy: (g() - 0.5) * 1.3,
                    ox: 0,
                    oy: 0,
                    screenX: t / e + n.width / 2,
                    screenY: a / e + n.height / 2,
                  }
                },
                y = (a) => {
                  let { width: p, height: m } = n,
                    f = 0 === l ? 0 : a - l,
                    x = Math.min(f / 1e3, 0.04)
                  if (((l = a), h() && null == n.warpStart)) {
                    for (let e of n.stars)
                      ((e.x = (e.screenX - p / 2) * e.z), (e.y = (e.screenY - m / 2) * e.z), (e.ox = 0), (e.oy = 0))
                    ;((n.warpStart = a), (x = 0))
                  }
                  c && (n.time = n.time + x)
                  let b = null == n.warpStart ? null : (a - n.warpStart) / 1e3
                  if (c && null == b && !document.hidden) {
                    if (null == n.reducedDetailAt) {
                      let e = Math.min(f, 100)
                      ;((d += e),
                        f > Math.max(34, 1.5 * o) && (u += e),
                        d >= 1e3 && (u >= 0.25 * d && (n.reducedDetailAt = a), (d = 0), (u = 0)))
                    }
                    null != n.reducedDetailAt && (n.faintOpacity = Math.max(0, 1 - (a - n.reducedDetailAt) / 600))
                  }
                  let _ = Math.min(window.devicePixelRatio, null == n.reducedDetailAt ? 2 : 1),
                    w = Math.round(p * _),
                    v = Math.round(m * _)
                  ;((e.width !== w || e.height !== v) && ((e.width = w), (e.height = v)),
                    t.setTransform(_, 0, 0, _, 0, 0))
                  let C = null == b ? 0 : Math.min(1, b / 1.5),
                    j = 0.006 + 6.2 * Math.pow(C, 2.5),
                    M = s.active && null == b ? (s.x / p - 0.5) * 12 : 0,
                    N = s.active && null == b ? (s.y / m - 0.5) * 12 : 0,
                    S = 1 - Math.exp(-(2 * x))
                  ;((n.parallaxX = n.parallaxX + (M - n.parallaxX) * S),
                    (n.parallaxY = n.parallaxY + (N - n.parallaxY) * S))
                  let k = Math.sin(0.19 * n.time),
                    A = Math.cos(0.19 * n.time),
                    I = Math.sin(0.14 * n.time),
                    E = Math.cos(0.14 * n.time),
                    L = 1 - Math.exp(-(7 * x)),
                    T = 1 - Math.exp(-(2.8 * x))
                  ;(t.clearRect(0, 0, p, m), (t.lineCap = "round"))
                  let P = null
                  for (let e of n.stars) {
                    let a = e.size <= 0.84 && e.alpha < 0.35 ? n.faintOpacity : 1
                    if (0 === a) continue
                    c &&
                      x > 0 &&
                      ((e.z = e.z - x * j),
                      null == b && ((e.x = e.x + e.vx * x), (e.y = e.y + e.vy * x)),
                      e.z < 0.12 &&
                        ((e.z = 3.15),
                        (e.x = (g() - 0.5) * p * (null == b ? 3.3 : 1.45)),
                        (e.y = (g() - 0.5) * m * (null == b ? 3.3 : 1.45)),
                        (e.ox = 0),
                        (e.oy = 0)))
                    let r = e.x / e.z + p / 2,
                      l = e.y / e.z + m / 2,
                      o = 0
                    if (null == b) {
                      ;((r += n.parallaxX / e.z + (k * e.cosPhase + A * e.sinPhase) * 3),
                        (l += n.parallaxY / e.z + (E * e.cosPhase - I * e.sinPhase) * 2),
                        (r < -40 || r > p + 40 || l < -40 || l > m + 40) &&
                          ((e.x = (g() - 0.5) * p * e.z),
                          (e.y = (g() - 0.5) * m * e.z),
                          (r = e.x / e.z + p / 2),
                          (l = e.y / e.z + m / 2)))
                      let t = 0,
                        a = 0
                      if (s.active && c) {
                        let e = r - s.x,
                          n = l - s.y,
                          i = e * e + n * n
                        if (i < 36100 && i > 1e-4) {
                          let r = Math.sqrt(i),
                            l = 1 - r / 190,
                            c = l * l * 54 * (s.down ? 1.8 : 1)
                          ;((t = (e / r) * c), (a = (n / r) * c), (o = 0.28 * l))
                        }
                      }
                      let i = t || a ? L : T
                      ;((e.ox = e.ox + (t - e.ox) * i), (e.oy = e.oy + (a - e.oy) * i), (r += e.ox), (l += e.oy))
                    }
                    if (((e.screenX = r), (e.screenY = l), r < -140 || r > p + 140 || l < -140 || l > m + 140)) continue
                    if (null == b) {
                      let t = 0.78 + 0.22 * Math.sin(n.time * e.rate + e.phase)
                      e.brightness = Math.min(1, e.alpha * t + o)
                    }
                    t.globalAlpha =
                      a *
                      (null == b
                        ? e.brightness
                        : Math.min(1, e.brightness + (e.alpha - e.brightness) * Math.min(1, b / 0.3) + 0.3 * C))
                    let d = Math.min(e.size * (0.66 + 0.6 / e.z), 5)
                    if (null != b && b > 0.12) {
                      let a = e.z / (e.z + Math.min(0.5, 0.046 * j))
                      ;((t.strokeStyle = U[e.color]),
                        (t.lineWidth = Math.min(2, 0.7 * d)),
                        t.beginPath(),
                        t.moveTo(p / 2 + (r - p / 2) * a, m / 2 + (l - m / 2) * a),
                        t.lineTo(r, l),
                        t.stroke())
                    }
                    if (e.size > 0.84) {
                      let a = 9 * d
                      t.drawImage(i[e.color], r - a / 2, l - a / 2, a, a)
                    } else {
                      let a = U[e.color]
                      ;(P !== a && ((t.fillStyle = a), (P = a)), t.fillRect(r, l, d, d))
                    }
                  }
                  ;((t.globalAlpha = 1),
                    c &&
                      !document.hidden &&
                      (r =
                        0 === o
                          ? requestAnimationFrame((e) => {
                              let t = e,
                                a = 0,
                                n = (e) => {
                                  let i = e - t
                                  ;((o = 0 === a ? i : Math.min(o, i)),
                                    (t = e),
                                    (a += 1) < 3
                                      ? (r = requestAnimationFrame(n))
                                      : ((l = 0), (r = requestAnimationFrame(y))))
                                }
                              r = requestAnimationFrame(n)
                            })
                          : requestAnimationFrame(y)))
                },
                _ = () => {
                  let t = e.clientWidth,
                    a = e.clientHeight
                  if (0 !== t && 0 !== a) {
                    if (t !== n.width || a !== n.height) {
                      let e = 0 === n.width && 0 === n.height && "reduced" === p
                      ;((n.width = t),
                        (n.height = a),
                        (n.reducedDetailAt = e ? -600 : null),
                        (n.faintOpacity = +!e),
                        (d = 0),
                        (u = 0),
                        (x = 42),
                        (n.stars = Array.from({ length: Math.min(11e3, Math.max(1e3, Math.round((t * a) / 190))) }, b)))
                    }
                    ;(cancelAnimationFrame(r), (l = 0), (o = 0), y(performance.now()))
                  }
                },
                w = (e) => {
                  if (!c || h() || "touch" === e.pointerType) return
                  let t = a.getBoundingClientRect()
                  ;((s.x = ((e.clientX - t.left) / t.width) * n.width),
                    (s.y = ((e.clientY - t.top) / t.height) * n.height),
                    (s.active = !0))
                },
                v = (e) => {
                  ;(w(e), (s.down = !0))
                },
                C = () => {
                  s.down = !1
                },
                j = () => {
                  ;((s.active = !1), (s.down = !1))
                },
                M = new ResizeObserver(_)
              return (
                M.observe(e),
                a.addEventListener("pointermove", w, { capture: !0, passive: !0 }),
                a.addEventListener("pointerdown", v, { capture: !0, passive: !0 }),
                a.addEventListener("pointerleave", j),
                a.addEventListener("pointercancel", j),
                window.addEventListener("pointerup", C),
                window.addEventListener("blur", j),
                _(),
                () => {
                  ;(M.disconnect(),
                    cancelAnimationFrame(r),
                    a.removeEventListener("pointermove", w, !0),
                    a.removeEventListener("pointerdown", v, !0),
                    a.removeEventListener("pointerleave", j),
                    a.removeEventListener("pointercancel", j),
                    window.removeEventListener("pointerup", C),
                    window.removeEventListener("blur", j))
                }
              )
            }),
            (o[2] = p),
            (o[3] = h),
            (o[4] = c),
            (o[5] = a))
          : (a = o[5]),
        o[6] !== p || o[7] !== c ? ((s = [c, p]), (o[6] = p), (o[7] = c), (o[8] = s)) : (s = o[8]),
        (0, r.useEffect)(a, s),
        o[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)("canvas", {
              ref: m,
              className: "pointer-events-none absolute inset-0 size-full",
              "aria-hidden": !0,
            })),
            (o[9] = l))
          : (l = o[9]),
        l
      )
    }
    function V(e) {
      let t = document.createElement("canvas")
      ;((t.width = 64), (t.height = 64))
      let a = t.getContext("2d")
      if (a) {
        let t = a.createRadialGradient(32, 32, 0, 32, 32, 32)
        ;(t.addColorStop(0, "#ffffff"),
          t.addColorStop(0.045, "#ffffff"),
          t.addColorStop(0.1, e + "e8"),
          t.addColorStop(0.22, e + "66"),
          t.addColorStop(0.45, e + "20"),
          t.addColorStop(1, e + "00"),
          (a.fillStyle = t),
          a.fillRect(0, 0, 64, 64))
      }
      return t
    }
    var G = a("K45w"),
      H = a("SOml"),
      Y = a("oQVA"),
      K = a("kv6U")
    function Z(e) {
      let t,
        a,
        s,
        l = (0, i.c)(16),
        { className: o, src: c, kind: d } = e,
        [u, p] = (0, r.useState)(null),
        m = u?.src === c ? u.status : null,
        f = "hero" === d && "h-[182px] object-[50%_58%]",
        h = ("mug" === d || "bowl" === d || "pitcher" === d) && "h-[77px]",
        x = ("landscape" === d || "lamp" === d) && "h-full",
        g = "landscape" === d && "scale-100"
      return (
        l[0] !== o || l[1] !== d || l[2] !== m || l[3] !== f || l[4] !== h || l[5] !== x || l[6] !== g
          ? ((t = (0, y.A)(
              "block w-full object-cover",
              f,
              h,
              x,
              g,
              "loaded" !== m &&
                {
                  landscape: "bg-[#e6e5e5]",
                  hero: "bg-[#944126]",
                  mug: "bg-[#f2cb85]",
                  bowl: "bg-[#90b8dc]",
                  pitcher: "bg-[#e26741]",
                  lamp: "bg-[#4c76b5]",
                }[d],
              o,
            )),
            (l[0] = o),
            (l[1] = d),
            (l[2] = m),
            (l[3] = f),
            (l[4] = h),
            (l[5] = x),
            (l[6] = g),
            (l[7] = t))
          : (t = l[7]),
        l[8] !== d || l[9] !== c || l[10] !== m
          ? ((a =
              "" !== c &&
              "failed" !== m &&
              (0, n.jsx)("img", {
                className: (0, y.A)("block size-full object-cover object-[inherit]", "landscape" === d && "scale-100"),
                src: c,
                alt: "",
                draggable: !1,
                onLoad: () => p({ src: c, status: "loaded" }),
                onError: () => p({ src: c, status: "failed" }),
              })),
            (l[8] = d),
            (l[9] = c),
            (l[10] = m),
            (l[11] = a))
          : (a = l[11]),
        l[12] !== d || l[13] !== t || l[14] !== a
          ? ((s = (0, n.jsx)("span", {
              className: t,
              "data-artwork-image": !0,
              "data-image-kind": d,
              "aria-hidden": !0,
              children: a,
            })),
            (l[12] = d),
            (l[13] = t),
            (l[14] = a),
            (l[15] = s))
          : (s = l[15]),
        s
      )
    }
    let $ = { pitch: [754, 447], resume: [1200, 1594], pottery: [686, 432], blueprint: [500, 658] }
    function W(e) {
      let t,
        a,
        s,
        r,
        l,
        o,
        c,
        d,
        u = (0, i.c)(28),
        { kind: p, moving: m } = e,
        { locale: f } = (0, w.A)(),
        [h, x] = $[p],
        g = `0 0 ${h} ${x}`,
        b =
          "resume" === p
            ? 'bg-[#fff] p-[128px_100px_0] [font-family:"OpenAI_Sans",_Arial,_sans-serif] text-[40.92px] leading-[61.6px] text-[#111]'
            : "[font-family:Arial,Helvetica,sans-serif] leading-[1.35]",
        _ =
          "blueprint" === p
            ? "bg-[#063084] [background-image:linear-gradient(#4c76b51a_1px,_transparent_1px),_linear-gradient(90deg,_#4c76b51a_1px,_transparent_1px)] [background-size:18.18193px_18.11427px] [background-position:11.894px_1.862px] text-[#e8effa]"
            : "text-[#111]"
      return (
        u[0] !== b || u[1] !== _
          ? ((t = (0, y.A)(
              "relative w-full h-full overflow-hidden font-normal text-left [--selection-stroke:3px] [--handle-size:10px] [--editor:#60b4ff]",
              b,
              _,
            )),
            (u[0] = b),
            (u[1] = _),
            (u[2] = t))
          : (t = u[2]),
        u[3] !== p ? ((a = "pitch" === p && (0, n.jsx)(J, {})), (u[3] = p), (u[4] = a)) : (a = u[4]),
        u[5] !== p ? ((s = "resume" === p && (0, n.jsx)(ee, {})), (u[5] = p), (u[6] = s)) : (s = u[6]),
        u[7] !== p ? ((r = "pottery" === p && (0, n.jsx)(et, {})), (u[7] = p), (u[8] = r)) : (r = u[8]),
        u[9] !== p ? ((l = "blueprint" === p && (0, n.jsx)(ea, {})), (u[9] = p), (u[10] = l)) : (l = u[10]),
        u[11] !== t || u[12] !== a || u[13] !== s || u[14] !== r || u[15] !== l || u[16] !== h
          ? ((o = (0, n.jsxs)("div", {
              className: t,
              "data-artwork-document": !0,
              "data-document-width": h,
              children: [a, s, r, l],
            })),
            (u[11] = t),
            (u[12] = a),
            (u[13] = s),
            (u[14] = r),
            (u[15] = l),
            (u[16] = h),
            (u[17] = o))
          : (o = u[17]),
        u[18] !== x || u[19] !== f || u[20] !== o || u[21] !== h
          ? ((c = (0, n.jsx)("foreignObject", { width: h, height: x, children: o }, f)),
            (u[18] = x),
            (u[19] = f),
            (u[20] = o),
            (u[21] = h),
            (u[22] = c))
          : (c = u[22]),
        u[23] !== p || u[24] !== m || u[25] !== g || u[26] !== c
          ? ((d = (0, n.jsx)("svg", {
              className: "pointer-events-none block h-full w-full",
              viewBox: g,
              "aria-hidden": !0,
              "data-kind": p,
              "data-moving": m,
              children: c,
            })),
            (u[23] = p),
            (u[24] = m),
            (u[25] = g),
            (u[26] = c),
            (u[27] = d))
          : (d = u[27]),
        d
      )
    }
    function X(e) {
      let t,
        a,
        s,
        r,
        l,
        o = (0, i.c)(15),
        { field: c, className: d, revision: u, children: p, background: m } = e,
        f = void 0 !== m && m,
        h =
          !f &&
          'after:[content:""] after:absolute after:inset-0 after:[border:var(--selection-stroke)_solid_var(--editor)] after:opacity-0 after:[transition:opacity_140ms_ease] after:pointer-events-none after:z-[9] data-[editing=true]:after:opacity-100 motion-reduce:after:transition-none'
      return (
        o[0] !== d || o[1] !== h
          ? ((t = (0, y.A)("group/artwork-field", h, d)), (o[0] = d), (o[1] = h), (o[2] = t))
          : (t = o[2]),
        o[3] !== p || o[4] !== u
          ? ((a =
              null == u
                ? p
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", {
                        "data-editable-copy": !0,
                        className:
                          "group-data-[selected=true]/artwork-field:bg-[color-mix(in_srgb,var(--editor)_38%,transparent)] group-data-[selected=true]/artwork-field:shadow-[0_0_0_2px_color-mix(in_srgb,var(--editor)_38%,transparent)]",
                        children: p,
                      }),
                      (0, n.jsx)(en, {}),
                    ],
                  })),
            (o[3] = p),
            (o[4] = u),
            (o[5] = a))
          : (a = o[5]),
        o[6] !== f
          ? ((s =
              !f &&
              (0, n.jsxs)("span", {
                className:
                  "pointer-events-none absolute inset-0 z-[10] opacity-0 [transition:opacity_140ms_ease] group-data-[editing=true]/artwork-field:opacity-100 motion-reduce:transition-none",
                children: [
                  (0, n.jsx)("i", {
                    className:
                      "absolute top-0 left-0 h-[var(--handle-size)] w-[var(--handle-size)] [transform:translate(-50%,_-50%)] bg-[#fff] [border:var(--selection-stroke)_solid_var(--editor)]",
                  }),
                  (0, n.jsx)("i", {
                    className:
                      "absolute top-0 left-full h-[var(--handle-size)] w-[var(--handle-size)] [transform:translate(-50%,_-50%)] bg-[#fff] [border:var(--selection-stroke)_solid_var(--editor)]",
                  }),
                  (0, n.jsx)("i", {
                    className:
                      "absolute top-full left-0 h-[var(--handle-size)] w-[var(--handle-size)] [transform:translate(-50%,_-50%)] bg-[#fff] [border:var(--selection-stroke)_solid_var(--editor)]",
                  }),
                  (0, n.jsx)("i", {
                    className:
                      "absolute top-full left-full h-[var(--handle-size)] w-[var(--handle-size)] [transform:translate(-50%,_-50%)] bg-[#fff] [border:var(--selection-stroke)_solid_var(--editor)]",
                  }),
                ],
              })),
            (o[6] = f),
            (o[7] = s))
          : (s = o[7]),
        o[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("span", { className: "absolute right-0 bottom-0 h-0 w-0", "data-edit-pin": !0 })),
            (o[8] = r))
          : (r = o[8]),
        o[9] !== c || o[10] !== u || o[11] !== t || o[12] !== a || o[13] !== s
          ? ((l = (0, n.jsxs)("span", { className: t, "data-editable": c, "data-revision": u, children: [a, s, r] })),
            (o[9] = c),
            (o[10] = u),
            (o[11] = t),
            (o[12] = a),
            (o[13] = s),
            (o[14] = l))
          : (l = o[14]),
        l
      )
    }
    function Q(e) {
      let t,
        a,
        s,
        r,
        l,
        o = (0, i.c)(7),
        { pottery: c } = e,
        d = void 0 !== c && c ? "top-[58px] right-[15px]" : "top-[28px] right-[38px]"
      return (
        o[0] !== d
          ? ((t = (0, y.A)(
              "absolute flex items-center gap-[13px] p-[15px_19px] rounded-[16px] bg-[#fff] opacity-0 [transform:translateY(6px)_scale(0.96)] [transform-origin:100%_0] [transition:opacity_150ms_ease,_transform_240ms_cubic-bezier(0.16,_1,_0.3,_1)] z-[20] group/artwork-palette data-[open=true]:opacity-100 data-[open=true]:[transform:none] motion-reduce:transition-none",
              d,
            )),
            (o[0] = d),
            (o[1] = t))
          : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("i", {
              className:
                "h-[32px] w-[32px] rounded-[50%] [background:var(--swatch,_#ffe614)] [border:1px_solid_#0002] [transition:transform_120ms_ease] group-not-data-[picked=true]/artwork-palette:[outline:3px_solid_#252525] group-not-data-[picked=true]/artwork-palette:outline-offset-4 motion-reduce:transition-none",
            })),
            (s = (0, n.jsx)("i", {
              className:
                "h-[32px] w-[32px] rounded-[50%] [background:var(--swatch,#ffd2c1)] [border:1px_solid_#0002] [transition:transform_120ms_ease] group-data-[picked=true]/artwork-palette:[outline:3px_solid_#252525] group-data-[picked=true]/artwork-palette:outline-offset-4 group-data-[pressed=true]/artwork-palette:[transform:scale(0.86)] motion-reduce:transition-none",
            })),
            (r = (0, n.jsx)("i", {
              className:
                "h-[32px] w-[32px] rounded-[50%] [background:var(--swatch,#cfc4f4)] [border:1px_solid_#0002] [transition:transform_120ms_ease] motion-reduce:transition-none",
            })),
            (o[2] = a),
            (o[3] = s),
            (o[4] = r))
          : ((a = o[2]), (s = o[3]), (r = o[4])),
        o[5] !== t
          ? ((l = (0, n.jsxs)("span", { className: t, "data-palette": !0, children: [a, s, r] })),
            (o[5] = t),
            (o[6] = l))
          : (l = o[6]),
        l
      )
    }
    function J() {
      let e,
        t,
        a,
        s,
        r,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        f = (0, i.c)(21),
        h = (0, w.A)()
      return (
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(X, {
              field: "pitch-paper",
              background: !0,
              className: "absolute inset-0 [background:var(--paper-color,_#ff5b35)]",
            })),
            (f[0] = e))
          : (e = f[0]),
        f[1] !== h
          ? ((t = h.formatMessage({ id: "space.introduction.art.pitchRevision", defaultMessage: "Studio\nNotes" })),
            (f[1] = h),
            (f[2] = t))
          : (t = f[2]),
        f[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(v.A, { id: "space.introduction.art.pitchTitle", defaultMessage: "Field\nNotes" })),
            (f[3] = a))
          : (a = f[3]),
        f[4] !== t
          ? ((s = (0, n.jsx)(X, {
              field: "pitch-title",
              className:
                "absolute top-[122px] left-[22px] h-[242px] w-[430px] text-left text-[142px] leading-[118px] tracking-[-1.5px] whitespace-pre-wrap [--editor:#60b4ff]",
              revision: t,
              children: a,
            })),
            (f[4] = t),
            (f[5] = s))
          : (s = f[5]),
        f[6] !== h
          ? ((r = h.formatMessage({
              id: "space.introduction.art.pitchSubtitleRevision",
              defaultMessage: "A fresh perspective",
            })),
            (f[6] = h),
            (f[7] = r))
          : (r = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(v.A, { id: "space.introduction.art.pitchSubtitle", defaultMessage: "A new perspective" })),
            (f[8] = l))
          : (l = f[8]),
        f[9] !== r
          ? ((o = (0, n.jsx)(X, {
              field: "pitch-subtitle",
              className:
                "absolute right-[18px] bottom-[32px] h-[28px] w-[210px] text-right text-[20px] leading-[28px] whitespace-nowrap",
              revision: r,
              children: l,
            })),
            (f[9] = r),
            (f[10] = o))
          : (o = f[10]),
        f[11] !== h
          ? ((c = h.formatMessage({ id: "space.introduction.art.pitchTaglineRevision", defaultMessage: "2027" })),
            (f[11] = h),
            (f[12] = c))
          : (c = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(v.A, { id: "space.introduction.art.pitchTagline", defaultMessage: "2026" })), (f[13] = d))
          : (d = f[13]),
        f[14] !== c
          ? ((u = (0, n.jsx)(X, {
              field: "pitch-tagline",
              className:
                "absolute top-[33px] left-[35px] h-[37px] w-[96px] rounded-[22px] bg-[#f5f4ef] text-center text-[20px] leading-[34px] whitespace-nowrap [border:1.5px_solid_#111]",
              revision: c,
              children: d,
            })),
            (f[14] = c),
            (f[15] = u))
          : (u = f[15]),
        f[16] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, n.jsx)(Q, {})), (f[16] = p)) : (p = f[16]),
        f[17] !== s || f[18] !== o || f[19] !== u
          ? ((m = (0, n.jsxs)(n.Fragment, { children: [e, s, o, u, p] })),
            (f[17] = s),
            (f[18] = o),
            (f[19] = u),
            (f[20] = m))
          : (m = f[20]),
        m
      )
    }
    function ee() {
      let e,
        t,
        a,
        s,
        r,
        l,
        o,
        c,
        d,
        u,
        p,
        m = (0, i.c)(17),
        f = (0, w.A)()
      return (
        m[0] !== f
          ? ((e = f.formatMessage({
              id: "space.introduction.art.articleTitleRevision",
              defaultMessage: "The Intelligence Era",
            })),
            (m[0] = f),
            (m[1] = e))
          : (e = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(v.A, {
              id: "space.introduction.art.articleTitle",
              defaultMessage: "The Intelligence Age",
            })),
            (m[2] = t))
          : (t = m[2]),
        m[3] !== e
          ? ((a = (0, n.jsx)(X, {
              field: "article-title",
              className: "relative block min-h-[116px] text-[96px] leading-[116px] font-bold tracking-[0]",
              revision: e,
              children: t,
            })),
            (m[3] = e),
            (m[4] = a))
          : (a = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)("span", {
              className: "mt-[8px] block text-[48px] leading-[58px] tracking-[-0.8px] text-[#707070]",
              children: (0, n.jsx)(v.A, {
                id: "space.introduction.art.articleDate",
                defaultMessage: "September 23, 2024",
              }),
            })),
            (m[5] = s))
          : (s = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(X, {
              field: "article-image",
              className: "relative mt-[42px] block h-[350px]",
              children: (0, n.jsx)("span", {
                className: "block h-full overflow-hidden rounded-[12px]",
                children: (0, n.jsx)(Z, { src: K.eJ, kind: "landscape" }),
              }),
            })),
            (m[6] = r))
          : (r = m[6]),
        m[7] !== f
          ? ((l = f.formatMessage({
              id: "space.introduction.art.articleIntroRevision",
              defaultMessage:
                "Over the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.",
            })),
            (m[7] = f),
            (m[8] = l))
          : (l = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(v.A, {
              id: "space.introduction.art.articleIntro",
              defaultMessage:
                "In the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.",
            })),
            (m[9] = o))
          : (o = m[9]),
        m[10] !== l
          ? ((c = (0, n.jsx)(X, {
              field: "article-intro",
              className: "relative mt-[48px] block min-h-[112px]",
              revision: l,
              children: o,
            })),
            (m[10] = l),
            (m[11] = c))
          : (c = m[11]),
        m[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)("span", {
              className: "mt-[28px] block",
              children: (0, n.jsx)(v.A, {
                id: "space.introduction.art.articleAcceleration",
                defaultMessage:
                  "This phenomenon is not new, but it will be newly accelerated. People have become dramatically more capable over time; we can already accomplish things now that our predecessors would have believed to be impossible.",
              }),
            })),
            (m[12] = d))
          : (d = m[12]),
        m[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)("span", {
              className: "mt-[28px] block",
              children: (0, n.jsx)(v.A, {
                id: "space.introduction.art.articleProgress",
                defaultMessage:
                  "We are more capable not because of genetic change, but because we benefit from the infrastructure of society being way smarter and more capable than any one of us; in an important sense, society itself is a form of advanced intelligence. Our grandparents \u2013 and the generations that came before them \u2013 built and achieved great things. They contributed to the scaffolding of human progress that we all benefit from. AI will give people tools to solve hard problems and help us add new struts to that scaffolding that we could not have figured out on our own. The story of progress will continue, and our children will be able to do things we can\u2019t.",
              }),
            })),
            (m[13] = u))
          : (u = m[13]),
        m[14] !== a || m[15] !== c
          ? ((p = (0, n.jsxs)(n.Fragment, { children: [a, s, r, c, d, u] })), (m[14] = a), (m[15] = c), (m[16] = p))
          : (p = m[16]),
        p
      )
    }
    function et() {
      let e,
        t,
        a,
        s,
        r,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        f = (0, i.c)(16),
        h = (0, w.A)()
      return (
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(X, {
              field: "shop-backdrop",
              background: !0,
              className: "absolute [inset:50px_0_0] [background:var(--paper-color,_#bfb8dc)]",
            })),
            (f[0] = e))
          : (e = f[0]),
        f[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsxs)("span", {
              className: "absolute [inset:0_0_auto] flex h-[50px] items-center gap-[10px] bg-[#f4f2f8] p-[0_22px]",
              children: [
                (0, n.jsx)("i", { className: "h-[17px] w-[17px] rounded-[50%] bg-[#ee6864]" }),
                (0, n.jsx)("i", { className: "h-[17px] w-[17px] rounded-[50%] bg-[#f7cb4e]" }),
                (0, n.jsx)("i", { className: "h-[17px] w-[17px] rounded-[50%] bg-[#62c76a]" }),
              ],
            })),
            (f[1] = t))
          : (t = f[1]),
        f[2] !== h
          ? ((a = h.formatMessage({ id: "space.introduction.art.storeRevision", defaultMessage: "KILN STUDIO" })),
            (f[2] = h),
            (f[3] = a))
          : (a = f[3]),
        f[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(v.A, { id: "space.introduction.art.store", defaultMessage: "R&D KILN" })), (f[4] = s))
          : (s = f[4]),
        f[5] !== a
          ? ((r = (0, n.jsx)("span", {
              className:
                "flex h-[29px] items-center p-[0_12px] [font-family:Georgia,_serif] text-[20px] tracking-[0.2px]",
              children: (0, n.jsx)(X, {
                field: "shop-name",
                className: "relative min-h-[25px] whitespace-nowrap",
                revision: a,
                children: s,
              }),
            })),
            (f[5] = a),
            (f[6] = r))
          : (r = f[6]),
        f[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(Z, { src: K.ZK, kind: "hero" })), (f[7] = l))
          : (l = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsxs)(X, {
              field: "product-0",
              className:
                "absolute top-0 left-0 h-[96px] w-[124px] [translate:0px] bg-[#f7f3ea] [font-family:Georgia,_serif] text-[12px] leading-[16px] data-[editing=true]:z-4 data-[editing=true]:shadow-[0_10px_20px_#4e3a1c25]",
              children: [
                (0, n.jsx)(Z, { src: K.eA, kind: "mug" }),
                (0, n.jsx)(v.A, { id: "space.introduction.art.mug", defaultMessage: "Ridge Mug" }),
              ],
            })),
            (f[8] = o))
          : (o = f[8]),
        f[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsxs)(X, {
              field: "product-1",
              className:
                "absolute top-0 left-0 h-[96px] w-[124px] [translate:128px] bg-[#f7f3ea] [font-family:Georgia,_serif] text-[12px] leading-[16px] data-[editing=true]:z-4 data-[editing=true]:shadow-[0_10px_20px_#4e3a1c25]",
              children: [
                (0, n.jsx)(Z, { src: K.TZ, kind: "bowl" }),
                (0, n.jsx)(v.A, { id: "space.introduction.art.bowl", defaultMessage: "Stone Bowl" }),
              ],
            })),
            (f[9] = c))
          : (c = f[9]),
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsxs)("span", {
              className: "absolute top-[223px] left-[13px] h-[96px] w-[380px]",
              children: [
                o,
                c,
                (0, n.jsxs)(X, {
                  field: "product-2",
                  className:
                    "absolute top-0 left-0 h-[96px] w-[124px] [translate:256px] bg-[#f7f3ea] [font-family:Georgia,_serif] text-[12px] leading-[16px] data-[editing=true]:z-4 data-[editing=true]:shadow-[0_10px_20px_#4e3a1c25]",
                  children: [
                    (0, n.jsx)(Z, { src: K.kM, kind: "pitcher" }),
                    (0, n.jsx)(v.A, { id: "space.introduction.art.pitcher", defaultMessage: "River Pitcher" }),
                  ],
                }),
              ],
            })),
            (f[10] = d))
          : (d = f[10]),
        f[11] !== r
          ? ((u = (0, n.jsxs)("span", {
              className: "absolute top-[76px] left-[140px] h-[331px] w-[406px] bg-[#f7f3ea]",
              children: [r, l, d],
            })),
            (f[11] = r),
            (f[12] = u))
          : (u = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(Q, { pottery: !0 })), (f[13] = p))
          : (p = f[13]),
        f[14] !== u
          ? ((m = (0, n.jsxs)(n.Fragment, { children: [e, t, u, p] })), (f[14] = u), (f[15] = m))
          : (m = f[15]),
        m
      )
    }
    function ea() {
      let e,
        t,
        a,
        s,
        r,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        f,
        h = (0, i.c)(22),
        x = (0, w.A)()
      return (
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(X, { field: "blueprint-paper", background: !0, className: "absolute inset-0" })),
            (h[0] = e))
          : (e = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("span", {
              className: "absolute top-[96px] left-[138px] h-[445px] w-[302px]",
              children: (0, n.jsx)(Z, { src: K.k2, kind: "lamp" }),
            })),
            (h[1] = t))
          : (t = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsxs)("svg", {
              className: "absolute inset-0 h-[658px] w-[500px] fill-none stroke-[#b6cbe8] [stroke-width:1]",
              viewBox: "0 0 500 658",
              children: [
                (0, n.jsx)("path", { d: "M215 73H412 M94 152V333 M94 365V533" }),
                (0, n.jsx)("path", {
                  className: "stroke-[#a1badb] [stroke-dasharray:3_3]",
                  d: "M215 74V96 M412 74V96 M90 151H138 M95 533H138",
                }),
                (0, n.jsx)("path", {
                  className: "fill-[#b6cbe8] stroke-none",
                  d: "M215 73L223 69V77Z M413 73L405 69V77Z M94 151L98 159H90Z M94 534L98 526H90Z",
                }),
              ],
            })),
            (h[2] = a))
          : (a = h[2]),
        h[3] !== x
          ? ((s = x.formatMessage({ id: "space.introduction.art.lampWidthRevision", defaultMessage: "200 mm" })),
            (h[3] = x),
            (h[4] = s))
          : (s = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(v.A, { id: "space.introduction.art.lampWidth", defaultMessage: "180 mm" })), (h[5] = r))
          : (r = h[5]),
        h[6] !== s
          ? ((l = (0, n.jsx)(X, {
              field: "blueprint-width",
              className:
                "absolute top-[53px] left-[285px] h-[19px] w-[65px] text-center text-[14px] leading-[16.1px] font-normal whitespace-nowrap",
              revision: s,
              children: r,
            })),
            (h[6] = s),
            (h[7] = l))
          : (l = h[7]),
        h[8] !== x
          ? ((o = x.formatMessage({ id: "space.introduction.art.lampHeightRevision", defaultMessage: "440 mm" })),
            (h[8] = x),
            (h[9] = o))
          : (o = h[9]),
        h[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)(v.A, { id: "space.introduction.art.lampHeight", defaultMessage: "420 mm" })), (h[10] = c))
          : (c = h[10]),
        h[11] !== o
          ? ((d = (0, n.jsx)(X, {
              field: "blueprint-height",
              className:
                "absolute top-[341px] left-[61px] h-[20px] w-[58px] text-center text-[14px] leading-[16.1px] font-normal whitespace-nowrap",
              revision: o,
              children: c,
            })),
            (h[11] = o),
            (h[12] = d))
          : (d = h[12]),
        h[13] !== x
          ? ((u = x.formatMessage({ id: "space.introduction.art.lampTitleRevision", defaultMessage: "TASK LAMP" })),
            (h[13] = x),
            (h[14] = u))
          : (u = h[14]),
        h[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(v.A, { id: "space.introduction.art.lampTitle", defaultMessage: "DESK LAMP" })),
            (h[15] = p))
          : (p = h[15]),
        h[16] !== u
          ? ((m = (0, n.jsx)(X, {
              field: "blueprint-name",
              className:
                "absolute top-[615px] left-[27px] h-[20px] w-[160px] text-[12px] leading-[13.8px] font-normal tracking-[3px] whitespace-nowrap",
              revision: u,
              children: p,
            })),
            (h[16] = u),
            (h[17] = m))
          : (m = h[17]),
        h[18] !== m || h[19] !== l || h[20] !== d
          ? ((f = (0, n.jsxs)(n.Fragment, { children: [e, t, a, l, d, m] })),
            (h[18] = m),
            (h[19] = l),
            (h[20] = d),
            (h[21] = f))
          : (f = h[21]),
        f
      )
    }
    function en() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("i", {
              "data-artwork-caret": !0,
              className:
                "mr-[calc(-1*var(--selection-stroke))] hidden h-[1em] w-0 align-[-0.1em] [border-left:calc(var(--selection-stroke)*1.5)_solid_var(--editor)] group-data-[typing=true]/artwork-field:inline-block",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    let ei = [
        { transform: "translate(0, 0) rotate(-1deg)" },
        { transform: "translate(5px, -15px) rotate(1.2deg)" },
        { transform: "translate(0, 0) rotate(-1deg)" },
      ],
      es = { pitch: 0, resume: -4e3, pottery: -8e3, blueprint: -6e3 }
    function er(e) {
      let t,
        a,
        s,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        f,
        h,
        x,
        g,
        b,
        w,
        v,
        C,
        M,
        N,
        S,
        k,
        A = (0, i.c)(81),
        { kind: I, label: E, helpId: L, moving: T, warping: P } = e,
        z = (0, j.dz)(),
        R = (0, G.d)(0),
        O = (0, G.d)(0),
        D = (0, G.d)(0),
        [B, q] = (0, r.useState)(!1)
      A[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (A[0] = t)) : (t = A[0])
      let U = (0, r.useRef)(t),
        F = (0, r.useRef)(null)
      ;(A[1] !== T
        ? ((a = () => {
            for (let e of U.current) T && "paused" === e.state ? e.play() : T || "running" !== e.state || e.pause()
          }),
          (s = [T]),
          (A[1] = T),
          (A[2] = a),
          (A[3] = s))
        : ((a = A[2]), (s = A[3])),
        (0, r.useEffect)(a, s),
        A[4] !== D || A[5] !== R || A[6] !== O
          ? ((l = () => () => {
              ;(R.stop(), O.stop(), D.stop())
            }),
            (o = [R, O, D]),
            (A[4] = D),
            (A[5] = R),
            (A[6] = O),
            (A[7] = l),
            (A[8] = o))
          : ((l = A[7]), (o = A[8])),
        (0, r.useEffect)(l, o),
        A[9] !== T || A[10] !== D || A[11] !== R || A[12] !== O
          ? ((c = function (e, t) {
              let a = void 0 === e ? 0 : e,
                n = void 0 === t ? 0 : t
              if (((U.current = []), !T)) {
                ;(R.set(0), O.set(0), D.set(0))
                return
              }
              let i = { type: "spring", stiffness: 6.76, damping: 3.432, restDelta: 0.4, restSpeed: 2 },
                s = Math.hypot(a, n),
                r = s > 1200 ? 1200 / s : 1
              U.current = [
                (0, H.i)(R, 0, { ...i, velocity: a * r }),
                (0, H.i)(O, 0, { ...i, velocity: n * r }),
                (0, H.i)(D, 0, i),
              ]
            }),
            (A[9] = T),
            (A[10] = D),
            (A[11] = R),
            (A[12] = O),
            (A[13] = c))
          : (c = A[13]))
      let V = c,
        K =
          "pitch" === I &&
          "[--cursor-color:#fff] [--left:calc(50%_-_min(38.455cqw,_553.752px))] [--top:calc(50%_-_min(37.928cqh,_341.352px))] [--width:11.5814%] [--max-width:166.772px] [--aspect:754_/_447] [--rotation:-3deg] [--out-x:-45cqw] [--out-y:-40cqh] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--width:23%] [@container_space-introduction_(width>540px)_and_(max-width:760px)_and_(height>500px)]:[--left:10%] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--top:14%] [@container_space-introduction_(max-width:540px)]:[--width:30%] [@container_space-introduction_(max-width:540px)_and_(height>500px)]:[--left:9%] [@container_space-introduction_(max-width:540px)]:[--top:15%] [@container_space-introduction_(max-height:500px)]:[--left:calc(50%-min(46cqw,662.4px))]",
        Z =
          "resume" === I &&
          "[--cursor-color:#e8b5fb] [--left:calc(50%_+_min(28.136cqw,_405.158px))] [--top:calc(50%_-_min(35.326cqh,_317.934px))] [--width:7.4373%] [--max-width:107.097px] [--aspect:1200_/_1594] [--rotation:4deg] [--out-x:45cqw] [--out-y:-40cqh] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--width:15%] [@container_space-introduction_(width>540px)_and_(max-width:760px)_and_(height>500px)]:[--left:72%] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--top:11%] [@container_space-introduction_(max-width:540px)]:[--width:21%] [@container_space-introduction_(max-width:540px)_and_(height>500px)]:[--left:69%] [@container_space-introduction_(max-width:540px)]:[--top:12%] [@container_space-introduction_(max-height:500px)]:[--left:calc(50%+min(34cqw,489.6px))]",
        $ =
          "pottery" === I &&
          "[--cursor-color:#00e5b3] [--left:calc(50%_-_min(34.037cqw,_490.133px))] [--top:calc(50%_+_min(18.176cqh,_163.584px))] [--width:10.5546%] [--max-width:151.986px] [--aspect:171.598_/_108.067] [--rotation:4deg] [--out-x:-45cqw] [--out-y:40cqh] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--width:22%] [@container_space-introduction_(width>540px)_and_(max-width:760px)_and_(height>500px)]:[--left:13%] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--top:70%] [@container_space-introduction_(max-width:540px)]:[--width:28%] [@container_space-introduction_(max-width:540px)_and_(height>500px)]:[--left:12%] [@container_space-introduction_(max-width:540px)]:[--top:73%] [@container_space-introduction_(max-height:500px)]:[--left:calc(50%-min(46cqw,662.4px))]",
        X =
          "blueprint" === I &&
          "[--cursor-color:#ffcc53] [--left:calc(50%_+_min(28.2595cqw,_406.937px))] [--top:calc(50%_+_min(13.4228cqh,_120.805px))] [--width:7.7065%] [--aspect:500_/_658] [--rotation:12deg] [--out-x:45cqw] [--out-y:40cqh] [--max-width:110.974px] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--width:16%] [@container_space-introduction_(width>540px)_and_(max-width:760px)_and_(height>500px)]:[--left:70%] [@container_space-introduction_(width>540px)_and_(max-width:760px)]:[--top:69%] [@container_space-introduction_(max-width:540px)]:[--width:22%] [@container_space-introduction_(max-width:540px)_and_(height>500px)]:[--left:66%] [@container_space-introduction_(max-width:540px)]:[--top:70%] [@container_space-introduction_(max-height:500px)]:[--left:calc(50%+min(34cqw,489.6px))]",
        Q = B && "z-6",
        J = P && "opacity-0 [transform:translate(var(--out-x),var(--out-y))_rotate(calc(var(--rotation)*3))_scale(1.6)]"
      ;(A[14] !== X || A[15] !== Q || A[16] !== J || A[17] !== K || A[18] !== Z || A[19] !== $
        ? ((d = (0, y.A)(
            "absolute w-[var(--width)] [max-width:var(--max-width)] left-[var(--left)] top-[var(--top)] [aspect-ratio:var(--aspect)] [transition:transform_1.1s_cubic-bezier(0.55,_0.02,_0.95,_0.7),_opacity_0.55s_0.15s] [@container_space-introduction_(max-height:500px)]:max-w-[min(12%,var(--max-width))]",
            K,
            Z,
            $,
            X,
            Q,
            J,
          )),
          (A[14] = X),
          (A[15] = Q),
          (A[16] = J),
          (A[17] = K),
          (A[18] = Z),
          (A[19] = $),
          (A[20] = d))
        : (d = A[20]),
        A[21] !== D || A[22] !== R || A[23] !== O
          ? ((u = { x: R, y: O, rotate: D }), (A[21] = D), (A[22] = R), (A[23] = O), (A[24] = u))
          : (u = A[24]))
      let ee = es[I],
        et = T && !B
      ;(A[25] !== D || A[26] !== R || A[27] !== O
        ? ((p = (e) => {
            e.isPrimary &&
              0 === e.button &&
              null == F.current &&
              (e.preventDefault(),
              e.stopPropagation(),
              e.currentTarget.focus({ preventScroll: !0 }),
              R.stop(),
              O.stop(),
              D.stop(),
              (U.current = []),
              e.currentTarget.setPointerCapture(e.pointerId),
              (F.current = {
                pointerId: e.pointerId,
                startX: e.clientX,
                startY: e.clientY,
                originX: R.get(),
                originY: O.get(),
                samples: [{ x: e.clientX, y: e.clientY, time: e.timeStamp }],
              }),
              q(!0))
          }),
          (A[25] = D),
          (A[26] = R),
          (A[27] = O),
          (A[28] = p))
        : (p = A[28]),
        A[29] !== T || A[30] !== D || A[31] !== z || A[32] !== R || A[33] !== O
          ? ((m = (e) => {
              let t = F.current
              if (null != t && t.pointerId === e.pointerId) {
                for (
                  e.preventDefault(),
                    e.stopPropagation(),
                    t.samples.push({ x: e.clientX, y: e.clientY, time: e.timeStamp });
                  t.samples.length > 2 && t.samples[1].time < e.timeStamp - 80;
                )
                  t.samples.shift()
                if ((R.set(t.originX + (e.clientX - t.startX) / z), O.set(t.originY + (e.clientY - t.startY) / z), T)) {
                  let a = t.samples[0],
                    n = Math.max(
                      -10,
                      Math.min(10, 0.008 * (((e.clientX - a.x) / z / Math.max(16, e.timeStamp - a.time)) * 1e3)),
                    )
                  D.set(D.get() + (n - D.get()) * 0.25)
                }
              }
            }),
            (A[29] = T),
            (A[30] = D),
            (A[31] = z),
            (A[32] = R),
            (A[33] = O),
            (A[34] = m))
          : (m = A[34]),
        A[35] !== T || A[36] !== V || A[37] !== z
          ? ((f = (e) => {
              let t = F.current
              if (null != t && t.pointerId === e.pointerId)
                if (((F.current = null), q(!1), e.currentTarget.releasePointerCapture(e.pointerId), T)) {
                  let a = t.samples[0],
                    n = t.samples[t.samples.length - 1],
                    i = Math.max(16, n.time - a.time) / 1e3,
                    s = Math.exp(-Math.max(0, e.timeStamp - n.time - 35) / 50)
                  V(((n.x - a.x) / z / i) * s, ((n.y - a.y) / z / i) * s)
                } else V()
            }),
            (A[35] = T),
            (A[36] = V),
            (A[37] = z),
            (A[38] = f))
          : (f = A[38]),
        A[39] !== V
          ? ((h = () => {
              null != F.current && ((F.current = null), q(!1), V())
            }),
            (A[39] = V),
            (A[40] = h))
          : (h = A[40]),
        A[41] !== T || A[42] !== V || A[43] !== R || A[44] !== O
          ? ((x = (e) => {
              0 === e.detail && (T ? V(580, -500) : (R.set(24), O.set(-24)))
            }),
            (A[41] = T),
            (A[42] = V),
            (A[43] = R),
            (A[44] = O),
            (A[45] = x))
          : (x = A[45]),
        A[46] !== T || A[47] !== V || A[48] !== D || A[49] !== R || A[50] !== O
          ? ((g = (e) => {
              let t = { ArrowLeft: [-24, 0], ArrowRight: [24, 0], ArrowUp: [0, -24], ArrowDown: [0, 24] }
              if ("Home" === e.key)
                (e.preventDefault(), R.stop(), O.stop(), D.stop(), (U.current = []), R.set(0), O.set(0), D.set(0))
              else if (null != t[e.key]) {
                e.preventDefault()
                let [a, n] = t[e.key]
                T ? V(12 * a, 12 * n) : (R.set(a), O.set(n))
              }
            }),
            (A[46] = T),
            (A[47] = V),
            (A[48] = D),
            (A[49] = R),
            (A[50] = O),
            (A[51] = g))
          : (g = A[51]))
      let ea = T && !B && !P
      return (
        A[52] !== I || A[53] !== ea
          ? ((b = (0, n.jsx)("span", {
              className: "relative block size-full overflow-hidden rounded-[inherit] bg-[#fdfdfb]",
              children: (0, n.jsx)(W, { kind: I, moving: ea }),
            })),
            (A[52] = I),
            (A[53] = ea),
            (A[54] = b))
          : (b = A[54]),
        A[55] !== L ||
        A[56] !== E ||
        A[57] !== p ||
        A[58] !== m ||
        A[59] !== f ||
        A[60] !== h ||
        A[61] !== x ||
        A[62] !== g ||
        A[63] !== b ||
        A[64] !== P
          ? ((w = (0, n.jsx)("button", {
              className:
                "[pointer-events:auto] block size-full [cursor:inherit] [touch-action:none] rounded-[4.5px] p-[0] [outline:none] [background:transparent] [border:0]",
              type: "button",
              "aria-label": E,
              "aria-describedby": L,
              disabled: P,
              onPointerDown: p,
              onPointerMove: m,
              onPointerUp: f,
              onLostPointerCapture: h,
              onClick: x,
              onKeyDown: g,
              children: b,
            })),
            (A[55] = L),
            (A[56] = E),
            (A[57] = p),
            (A[58] = m),
            (A[59] = f),
            (A[60] = h),
            (A[61] = x),
            (A[62] = g),
            (A[63] = b),
            (A[64] = P),
            (A[65] = w))
          : (w = A[65]),
        A[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, n.jsx)("span", {
              className: "absolute top-0 left-0 size-0",
              "data-corner-probe": "top-left",
              "aria-hidden": !0,
            })),
            (C = (0, n.jsx)("span", {
              className: "absolute top-0 left-full size-0",
              "data-corner-probe": "top-right",
              "aria-hidden": !0,
            })),
            (M = (0, n.jsx)("span", {
              className: "absolute top-full left-0 size-0",
              "data-corner-probe": "bottom-left",
              "aria-hidden": !0,
            })),
            (A[66] = v),
            (A[67] = C),
            (A[68] = M))
          : ((v = A[66]), (C = A[67]), (M = A[68])),
        A[69] !== ee || A[70] !== et || A[71] !== w
          ? ((N = (0, n.jsxs)(Y.w, {
              keyframes: ei,
              duration: 13e3,
              delay: ee,
              playing: et,
              className:
                "relative block size-full scale-[1.5] [rotate:var(--rotation)] [@container_space-introduction_(max-width:760px)]:scale-[1.25]",
              "data-drift": !0,
              children: [w, v, C, M],
            })),
            (A[69] = ee),
            (A[70] = et),
            (A[71] = w),
            (A[72] = N))
          : (N = A[72]),
        A[73] !== u || A[74] !== N
          ? ((S = (0, n.jsx)(_.P.div, { className: "block size-full", "data-drag-offset": !0, style: u, children: N })),
            (A[73] = u),
            (A[74] = N),
            (A[75] = S))
          : (S = A[75]),
        A[76] !== B || A[77] !== I || A[78] !== d || A[79] !== S
          ? ((k = (0, n.jsx)("div", {
              className: d,
              "data-work-sample": !0,
              "data-kind": I,
              "data-dragging": B,
              children: S,
            })),
            (A[76] = B),
            (A[77] = I),
            (A[78] = d),
            (A[79] = S),
            (A[80] = k))
          : (k = A[80]),
        k
      )
    }
    function el(e) {
      let t,
        a,
        l,
        o,
        c,
        d,
        u,
        p,
        m,
        f,
        h,
        x,
        g,
        A,
        I,
        T,
        P,
        z,
        R,
        O,
        B,
        U,
        V,
        G,
        H,
        Y,
        K,
        Z,
        $,
        W,
        X,
        Q,
        J,
        ee,
        et,
        ea,
        en,
        ei,
        es,
        el,
        eu,
        ep,
        em,
        ef,
        eh,
        ex,
        eg,
        eb,
        ey,
        e_,
        ew = (0, i.c)(130),
        { onDismiss: ev, onShown: eC, onContinue: ej, initialStarDetail: eM } = e,
        eN = (0, w.A)(),
        eS = (0, r.useContext)(C.H),
        ek = (0, r.useContext)(C.K),
        eA = (0, s.Ul)(k.Jy) ?? 0,
        eI = (0, j.dz)(),
        [eE, eL] = (0, r.useState)(),
        eT = (0, S.I)(),
        [eP, ez] = (0, r.useState)(eT),
        [eR, eO] = (0, r.useState)(null),
        eD = null != eR,
        eB = "warp" === eR,
        eq = (0, r.useRef)(null),
        eU = (0, r.useRef)(null),
        eF = (0, r.useRef)(!1),
        eV = (0, r.useRef)(null),
        eG = (0, r.useId)()
      ew[0] !== eC
        ? ((t = () => {
            null != eU.current && ed() && !eF.current && ((eF.current = !0), eC?.())
          }),
          (ew[0] = eC),
          (ew[1] = t))
        : (t = ew[1])
      let eH = t
      ew[2] !== eH
        ? ((a = (e) => {
            var t
            return (
              (t = () => {
                ;(e(), eH())
              }),
              document.addEventListener("visibilitychange", t),
              () => document.removeEventListener("visibilitychange", t)
            )
          }),
          (ew[2] = eH),
          (ew[3] = a))
        : (a = ew[3])
      let eY = a,
        eK = (0, r.useSyncExternalStore)(eY, ed, ec),
        eZ = !eT && eK
      ;(ew[4] !== eS || ew[5] !== ek
        ? ((l = () => {
            let e = ek.current
            if (null != e && null != eS)
              return (0, b.KI)(Array.from(e.querySelectorAll("[data-app-navigation-rail]")), e)
          }),
          (o = [ek, eS]),
          (ew[4] = eS),
          (ew[5] = ek),
          (ew[6] = l),
          (ew[7] = o))
        : ((l = ew[6]), (o = ew[7])),
        (0, r.useLayoutEffect)(l, o),
        ew[8] !== eP || ew[9] !== eD || ew[10] !== eS
          ? ((c = () => {
              if (null == eS || !eP || eD) return
              let e = eS.style.contentVisibility
              return (
                eS.style.setProperty("content-visibility", "hidden"),
                () => {
                  eS.style.setProperty("content-visibility", e)
                }
              )
            }),
            (d = [eS, eP, eD]),
            (ew[8] = eP),
            (ew[9] = eD),
            (ew[10] = eS),
            (ew[11] = c),
            (ew[12] = d))
          : ((c = ew[11]), (d = ew[12])),
        (0, r.useLayoutEffect)(c, d),
        ew[13] !== eS || ew[14] !== eA || ew[15] !== eI
          ? ((u = () => {
              if (null == eS) return
              let e = () => {
                  let e = eS.getBoundingClientRect(),
                    t = Math.max(0, Math.min(e.left / eI, eA)),
                    a = Math.max(0, Math.min((window.innerWidth - e.right) / eI, eA)),
                    n = e.top / eI,
                    i = e.height / eI,
                    s = t > 0 || a > 0 || n > 0 || e.bottom < window.innerHeight,
                    r = 0,
                    l = 0
                  if (s) {
                    let e = getComputedStyle(eS)
                    ;((r = "var(--app-shell-window-radius, var(--radius-xl-base))"),
                      (l =
                        "none" === e.clipPath
                          ? e.borderEndEndRadius
                          : e.getPropertyValue("--app-shell-main-surface-clip-end-radius")))
                  }
                  eL((e) =>
                    e?.left === t &&
                    e.right === a &&
                    e.top === n &&
                    e.height === i &&
                    e.borderRadius === r &&
                    e.borderEndEndRadius === l
                      ? e
                      : { left: t, right: a, top: n, height: i, width: "auto", borderRadius: r, borderEndEndRadius: l },
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
            (p = [eS, eA, eI]),
            (ew[13] = eS),
            (ew[14] = eA),
            (ew[15] = eI),
            (ew[16] = u),
            (ew[17] = p))
          : ((u = ew[16]), (p = ew[17])),
        (0, r.useLayoutEffect)(u, p),
        ew[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = () => {
              let e = eV.current?.parentElement,
                t = () => {
                  null != e && E(e)
                },
                a = () => {
                  null != eV.current && L(eV.current)
                },
                n = new ResizeObserver(t)
              return (
                null != e && n.observe(e),
                window.addEventListener("blur", a),
                window.addEventListener("resize", t),
                document.addEventListener("visibilitychange", a),
                () => {
                  ;(n.disconnect(),
                    window.removeEventListener("blur", a),
                    window.removeEventListener("resize", t),
                    document.removeEventListener("visibilitychange", a))
                }
              )
            }),
            (m = []),
            (ew[18] = m),
            (ew[19] = f))
          : ((m = ew[18]), (f = ew[19])),
        (0, r.useEffect)(f, m))
      let e$ = !eD && "bg-black"
      ;(ew[20] !== e$
        ? ((h = (0, y.A)("inset-0 h-full w-full [clip-path:border-box]", e$)), (ew[20] = e$), (ew[21] = h))
        : (h = ew[21]),
        ew[22] !== eD || ew[23] !== ev
          ? ((x = (e) => {
              e || ev(eD ? "continue" : "dismiss")
            }),
            (ew[22] = eD),
            (ew[23] = ev),
            (ew[24] = x))
          : (x = ew[24]),
        ew[25] !== eH
          ? ((g = (e) => {
              ;((eq.current = document.activeElement instanceof HTMLElement ? document.activeElement : null),
                e.preventDefault(),
                eU.current?.focus(),
                eH())
            }),
            (ew[25] = eH),
            (ew[26] = g))
          : (g = ew[26]),
        ew[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (e) => {
              ;(e.preventDefault(), document.activeElement === document.body && eq.current?.focus())
            }),
            (ew[27] = A))
          : (A = ew[27]),
        ew[28] !== eE || ew[29] !== g
          ? ((I = { style: eE, onInteractOutside: eo, onOpenAutoFocus: g, onCloseAutoFocus: A }),
            (ew[28] = eE),
            (ew[29] = g),
            (ew[30] = I))
          : (I = ew[30]),
        ew[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, y.A)(
              "select-none",
              "relative w-full h-full overflow-hidden [isolation:isolate] [--cursor-interaction:default] [cursor:default] bg-[#000] text-[#fefefd] [container:space-introduction_/size]",
            )),
            (ew[31] = T))
          : (T = ew[31]),
        ew[32] !== eD
          ? ((P = (e) => {
              let t = eV.current
              if (null != t) {
                if (eD || "touch" === e.pointerType) return void L(t)
                ;((t.dataset.pointerClientX = String(e.clientX)),
                  (t.dataset.pointerClientY = String(e.clientY)),
                  E(e.currentTarget))
              }
            }),
            (ew[32] = eD),
            (ew[33] = P))
          : (P = ew[33]),
        ew[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (e) => {
              "touch" === e.pointerType && null != eV.current && L(eV.current)
            }),
            (R = () => {
              null != eV.current && L(eV.current)
            }),
            (O = () => {
              null != eV.current && L(eV.current)
            }),
            (ew[34] = z),
            (ew[35] = R),
            (ew[36] = O))
          : ((z = ew[34]), (R = ew[35]), (O = ew[36])),
        ew[37] !== eT ? ((B = !eT && { opacity: 0 }), (ew[37] = eT), (ew[38] = B)) : (B = ew[38]))
      let eW = +!eD
      ew[39] !== eW ? ((U = { opacity: eW }), (ew[39] = eW), (ew[40] = U)) : (U = ew[40])
      let eX = "fade" === eR ? 0.3 : 0.7,
        eQ = 1.65 * !!eB
      ;(ew[41] !== eX || ew[42] !== eQ
        ? ((V = { duration: eX, delay: eQ }), (ew[41] = eX), (ew[42] = eQ), (ew[43] = V))
        : (V = ew[43]),
        ew[44] !== eD || ew[45] !== ev
          ? ((G = () => {
              eD ? ev("continue") : ez(!0)
            }),
            (ew[44] = eD),
            (ew[45] = ev),
            (ew[46] = G))
          : (G = ew[46]),
        ew[47] !== eM || ew[48] !== eZ || ew[49] !== eB
          ? ((H = (0, n.jsx)(F, { moving: eZ, warping: eB, initialDetail: eM })),
            (ew[47] = eM),
            (ew[48] = eZ),
            (ew[49] = eB),
            (ew[50] = H))
          : (H = ew[50]),
        ew[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, n.jsx)("div", {
              className:
                "pointer-events-none absolute inset-0 size-full [background:radial-gradient(ellipse_at_center,_transparent_36%,_#0002_100%)]",
              "aria-hidden": !0,
            })),
            (ew[51] = Y))
          : (Y = ew[51]))
      let eJ = eB
        ? "opacity-0 blur-[7px] [transform:translate(-50%,-50%)_scale(0.94)]"
        : "[transform:translate(-50%,-50%)]"
      ;(ew[52] !== eJ
        ? ((K = (0, y.A)(
            "absolute left-[50%] top-[50%] z-[3] w-[min(840px,_90%)] text-center pointer-events-none [transition:opacity_0.4s_ease-in,_filter_0.4s_ease-in,_transform_0.4s_ease-in] [@container_space-introduction_(max-height:500px)]:w-[min(360px,64%)]",
            eJ,
          )),
          (ew[52] = eJ),
          (ew[53] = K))
        : (K = ew[53]),
        ew[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, n.jsx)(N.L3, {
              className:
                "[margin:0_0_6px] text-[44px] leading-[52px] [font-weight:var(--font-text-md-weight)] tracking-[var(--font-heading-2xl-tracking)]",
              children: (0, n.jsx)(v.A, {
                id: "space.introduction.brandedTitle",
                defaultMessage: "Welcome to {productName}",
                values: { productName: "ChatGPT Space" },
              }),
            })),
            (ew[54] = Z))
          : (Z = ew[54]),
        ew[55] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, n.jsx)(N.rr, {
              className:
                "[margin:0_auto] [max-width:530px] leading-[var(--font-text-md-line-height)] [font-weight:var(--font-text-md-weight)] tracking-[var(--font-text-md-tracking)] [text-wrap:balance] text-[var(--font-text-md-size)] [@container_space-introduction_(max-width:760px)]:px-3",
              children: (0, n.jsx)(v.A, {
                id: "space.introduction.description",
                defaultMessage:
                  "Collaborate with your team and ChatGPT on documents, presentations, and files all in one place",
              }),
            })),
            (ew[55] = $))
          : ($ = ew[55]),
        ew[56] !== eZ || ew[57] !== ej
          ? ((W = () => {
              ;(null != eV.current && L(eV.current), ej?.(), eO(eZ ? "warp" : "fade"))
            }),
            (ew[56] = eZ),
            (ew[57] = ej),
            (ew[58] = W))
          : (W = ew[58]),
        ew[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, n.jsx)(v.A, { id: "space.introduction.continue", defaultMessage: "Continue to Space" })),
            (ew[59] = X))
          : (X = ew[59]),
        ew[60] !== eD || ew[61] !== W
          ? ((Q = (0, n.jsx)("div", {
              className:
                "[pointer-events:auto] mt-[36px] [display:inline-flex] [transition:transform_150ms_ease] hover:[transform:scale(1.05)] motion-reduce:transition-none [@container_space-introduction_(max-height:500px)]:mt-5 [@container_space-introduction_(max-width:540px)_and_(height>500px)]:mt-7",
              children: (0, n.jsx)(M.$, {
                ref: eU,
                color: "mediaSolid",
                size: "large",
                disabled: eD,
                onClick: W,
                children: X,
              }),
            })),
            (ew[60] = eD),
            (ew[61] = W),
            (ew[62] = Q))
          : (Q = ew[62]),
        ew[63] !== K || ew[64] !== Q
          ? ((J = (0, n.jsxs)("div", { className: K, children: [Z, $, Q] })), (ew[63] = K), (ew[64] = Q), (ew[65] = J))
          : (J = ew[65]),
        ew[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((ee = (0, n.jsx)(v.A, {
              id: "space.introduction.dragHelp",
              defaultMessage:
                "Drag and release to move this sample. Use arrow keys to nudge, Enter to toss, or Home to return",
            })),
            (ew[66] = ee))
          : (ee = ew[66]),
        ew[67] !== eG
          ? ((et = (0, n.jsx)("p", { id: eG, className: "sr-only", children: ee })), (ew[67] = eG), (ew[68] = et))
          : (et = ew[68]),
        ew[69] !== eN
          ? ((ea = eN.formatMessage({ id: "space.introduction.dragPitch", defaultMessage: "Drag Field Notes" })),
            (ew[69] = eN),
            (ew[70] = ea))
          : (ea = ew[70]),
        ew[71] !== eG || ew[72] !== eZ || ew[73] !== ea || ew[74] !== eB
          ? ((en = (0, n.jsx)(er, { kind: "pitch", label: ea, helpId: eG, moving: eZ, warping: eB })),
            (ew[71] = eG),
            (ew[72] = eZ),
            (ew[73] = ea),
            (ew[74] = eB),
            (ew[75] = en))
          : (en = ew[75]),
        ew[76] !== eN
          ? ((ei = eN.formatMessage({ id: "space.introduction.dragArticle", defaultMessage: "Drag article" })),
            (ew[76] = eN),
            (ew[77] = ei))
          : (ei = ew[77]),
        ew[78] !== eG || ew[79] !== eZ || ew[80] !== ei || ew[81] !== eB
          ? ((es = (0, n.jsx)(er, { kind: "resume", label: ei, helpId: eG, moving: eZ, warping: eB })),
            (ew[78] = eG),
            (ew[79] = eZ),
            (ew[80] = ei),
            (ew[81] = eB),
            (ew[82] = es))
          : (es = ew[82]),
        ew[83] !== eN
          ? ((el = eN.formatMessage({ id: "space.introduction.dragPottery", defaultMessage: "Drag pottery website" })),
            (ew[83] = eN),
            (ew[84] = el))
          : (el = ew[84]),
        ew[85] !== eG || ew[86] !== eZ || ew[87] !== el || ew[88] !== eB
          ? ((eu = (0, n.jsx)(er, { kind: "pottery", label: el, helpId: eG, moving: eZ, warping: eB })),
            (ew[85] = eG),
            (ew[86] = eZ),
            (ew[87] = el),
            (ew[88] = eB),
            (ew[89] = eu))
          : (eu = ew[89]),
        ew[90] !== eN
          ? ((ep = eN.formatMessage({
              id: "space.introduction.dragBlueprint",
              defaultMessage: "Drag desk lamp blueprint",
            })),
            (ew[90] = eN),
            (ew[91] = ep))
          : (ep = ew[91]),
        ew[92] !== eG || ew[93] !== eZ || ew[94] !== ep || ew[95] !== eB
          ? ((em = (0, n.jsx)(er, { kind: "blueprint", label: ep, helpId: eG, moving: eZ, warping: eB })),
            (ew[92] = eG),
            (ew[93] = eZ),
            (ew[94] = ep),
            (ew[95] = eB),
            (ew[96] = em))
          : (em = ew[96]),
        ew[97] !== en || ew[98] !== es || ew[99] !== eu || ew[100] !== em
          ? ((ef = (0, n.jsxs)("div", {
              className:
                "pointer-events-none absolute inset-0 z-4 size-full [@container_space-introduction_(max-width:540px)_or_(max-height:460px)]:invisible [@container_space-introduction_(max-width:540px)_or_(max-height:460px)]:opacity-0",
              "data-work-samples": !0,
              children: [en, es, eu, em],
            })),
            (ew[97] = en),
            (ew[98] = es),
            (ew[99] = eu),
            (ew[100] = em),
            (ew[101] = ef))
          : (ef = ew[101]))
      let e0 = eZ && !eD
      ew[102] !== eT || ew[103] !== e0 || ew[104] !== eB
        ? ((eh = (0, n.jsx)(D, { moving: e0, reduceMotion: eT, warping: eB })),
          (ew[102] = eT),
          (ew[103] = e0),
          (ew[104] = eB),
          (ew[105] = eh))
        : (eh = ew[105])
      let e1 = eB && "opacity-0"
      return (
        ew[106] !== e1
          ? ((ex = (0, y.A)("absolute left-0 top-0 z-[8] [--cursor-color:var(--white)] pointer-events-none", e1)),
            (ew[106] = e1),
            (ew[107] = ex))
          : (ex = ew[107]),
        ew[108] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = (0, n.jsx)(q, {
              darkText: !0,
              raised: !0,
              children: (0, n.jsx)(v.A, { id: "space.introduction.you", defaultMessage: "You" }),
            })),
            (ew[108] = eg))
          : (eg = ew[108]),
        ew[109] !== ex
          ? ((eb = (0, n.jsx)("span", {
              ref: eV,
              className: ex,
              "data-pointer-badge": !0,
              hidden: !0,
              "aria-hidden": !0,
              children: eg,
            })),
            (ew[109] = ex),
            (ew[110] = eb))
          : (eb = ew[110]),
        ew[111] !== eZ ||
        ew[112] !== P ||
        ew[113] !== B ||
        ew[114] !== U ||
        ew[115] !== V ||
        ew[116] !== G ||
        ew[117] !== H ||
        ew[118] !== J ||
        ew[119] !== et ||
        ew[120] !== ef ||
        ew[121] !== eh ||
        ew[122] !== eb ||
        ew[123] !== eB
          ? ((ey = (0, n.jsxs)(_.P.div, {
              className: T,
              "data-motion": eZ,
              "data-warping": eB,
              onPointerMoveCapture: P,
              onPointerDownCapture: z,
              onPointerCancelCapture: R,
              onPointerLeave: O,
              initial: B,
              animate: U,
              transition: V,
              onAnimationComplete: G,
              children: [H, Y, J, et, ef, eh, eb],
            })),
            (ew[111] = eZ),
            (ew[112] = P),
            (ew[113] = B),
            (ew[114] = U),
            (ew[115] = V),
            (ew[116] = G),
            (ew[117] = H),
            (ew[118] = J),
            (ew[119] = et),
            (ew[120] = ef),
            (ew[121] = eh),
            (ew[122] = eb),
            (ew[123] = eB),
            (ew[124] = ey))
          : (ey = ew[124]),
        ew[125] !== h || ew[126] !== x || ew[127] !== I || ew[128] !== ey
          ? ((e_ = (0, n.jsx)(N.lG, {
              open: !0,
              modal: !1,
              unstyledContent: !0,
              viewportSized: !0,
              variant: "onboarding",
              contentPosition: "anchored",
              contentClassName: h,
              showDialogClose: !1,
              onOpenChange: x,
              contentProps: I,
              children: ey,
            })),
            (ew[125] = h),
            (ew[126] = x),
            (ew[127] = I),
            (ew[128] = ey),
            (ew[129] = e_))
          : (e_ = ew[129]),
        e_
      )
    }
    function eo(e) {
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
        a = (0, s.Ul)(f.w),
        r = (0, s.Ul)(g.spaceIntroductionIdentity$)
      return (
        t[0] !== a || t[1] !== r
          ? ((e = a && null != r ? (0, n.jsx)(ep, { identityKey: r.key }, r.key) : null),
            (t[0] = a),
            (t[1] = r),
            (t[2] = e))
          : (e = t[2]),
        e
      )
    }
    function ep(e) {
      let t,
        a,
        l,
        c = (0, i.c)(8),
        { identityKey: d } = e,
        u = (0, s.gh)(p.u),
        m = (0, s.Ul)(g.kx)
      return (
        c[0] !== d || c[1] !== u
          ? ((t = () => {
              let e = () => {
                ;(0, g.syncSpaceIntroductionSeen)(u)
              }
              return (
                window.addEventListener("focus", e),
                () => {
                  ;(window.removeEventListener("focus", e), u.set(o.f_, d, !1))
                }
              )
            }),
            (a = [u, d]),
            (c[0] = d),
            (c[1] = u),
            (c[2] = t),
            (c[3] = a))
          : ((t = c[2]), (a = c[3])),
        (0, r.useEffect)(t, a),
        c[4] !== d || c[5] !== m || c[6] !== u
          ? ((l = m
              ? (0, n.jsx)(el, {
                  onShown: () => {
                    ;((0, x.yy)(u, h.CodexSpacesOnboarding, {
                      action: h.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_SHOWN,
                    }),
                      u.set(o.f_, d, !0),
                      (0, g.Tj)(u, d))
                  },
                  onContinue: () => {
                    ;(0, x.yy)(u, h.CodexSpacesOnboarding, {
                      action: h.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_CONTINUED,
                    })
                  },
                  onDismiss: (e) => {
                    ;("dismiss" === e &&
                      (0, x.yy)(u, h.CodexSpacesOnboarding, {
                        action: h.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_DISMISSED,
                      }),
                      u.set(g.vV, d, !1),
                      u.set(o.f_, d, !1))
                  },
                })
              : null),
            (c[4] = d),
            (c[5] = m),
            (c[6] = u),
            (c[7] = l))
          : (l = c[7]),
        l
      )
    }
    var em = a("hlVK"),
      ef = a("prHy"),
      eh = a("hvVg"),
      ex = a("oHzU"),
      eg = a("Kwur"),
      eb = a("TNWb"),
      ey = a("X6Vn"),
      e_ = a("OMIV"),
      ew = a("Nwp9"),
      ev = a("xicS")
    let eC = (0, ew.m3)("space-slides-introduction-dismissed-v1", {})
    function ej() {
      return (
        null !=
        document.querySelector(
          `:is(${eb.sC}, [role="dialog"][data-state="open"]:not([aria-modal="false"])):not(.beacon-modal-space_slides_introduction)`,
        )
      )
    }
    let eM = (0, s.vU)(p.u, ({ accountId: e, identityKey: t, userId: a, locale: n }, { get: i }) => ({
      queryKey: ["space-slides-introduction", t, n],
      enabled: !i(eC)[t] && i(e_.JW, "183803860"),
      staleTime: 0,
      retry: !1,
      refetchOnMount: "always",
      refetchOnWindowFocus: !1,
      queryFn: async ({ signal: t }) => {
        let n = window.electronBridge?.getDesktopUserAgent?.(),
          i = await eg.Request.safeGet("/beacons_v2", {
            signal: t,
            expectedIdentity: { accountId: e, userId: a },
            additionalHeaders: {
              "Cache-Control": "no-store",
              "x-openai-use-sheep": "1",
              ...(null == n ? {} : { "User-Agent": n }),
            },
            parameters: { query: { surface: ["space-modal"] } },
          }),
          s = (0, ef.Yw)(i.surfaces["space-modal"], [])
        return null != s && (0, ex.cI)(s) && "space_slides_introduction" === s.beacon_id ? s : null
      },
    }))
    function eN(e) {
      let t,
        a,
        l,
        o,
        c,
        d,
        u = (0, i.c)(27),
        { identityKey: m, accountId: f, userId: g } = e,
        b = (0, s.gh)(p.u),
        { locale: y } = (0, w.A)(),
        _ = (0, s._U)(e_.JW, "183803860"),
        [v, C] = (0, r.useState)(null),
        j = (0, ey.Rv)(),
        M = (0, r.useSyncExternalStore)(eb.tb, ej, eS),
        N = (0, s.Ul)(eC)[m]
      u[0] !== f || u[1] !== m || u[2] !== y || u[3] !== g
        ? ((t = { identityKey: m, accountId: f, userId: g, locale: y }),
          (u[0] = f),
          (u[1] = m),
          (u[2] = y),
          (u[3] = g),
          (u[4] = t))
        : (t = u[4])
      let { data: S, isFetching: k, isError: A } = (0, s._U)(eM, t),
        I = (0, r.useRef)(!1)
      if (!_) return null
      if (null != v) {
        let e, t
        return (
          u[5] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => C(null)), (u[5] = e)) : (e = u[5]),
          u[6] !== v
            ? ((t = (0, n.jsx)(ev.SpaceTemplateGalleryDialog, {
                openedAt: v,
                initialGroupId: "presentation",
                onClose: e,
              })),
              (u[6] = v),
              (u[7] = t))
            : (t = u[7]),
          t
        )
      }
      if (N || k || A || null == S || j || M) return null
      u[8] !== m || u[9] !== b
        ? ((a = () => {
            b.set(eC, (e) => ({ ...e, [m]: !0 }))
          }),
          (u[8] = m),
          (u[9] = b),
          (u[10] = a))
        : (a = u[10])
      let E = a
      return (
        u[11] !== b
          ? ((l = (e) =>
              "create_slide" === e.id
                ? () => (
                    C(performance.now()),
                    (0, x.yy)(b, h.CodexSpacesTemplateGallery, {
                      action: h.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_OPEN_REQUESTED,
                    }),
                    !0
                  )
                : void 0),
            (u[11] = b),
            (u[12] = l))
          : (l = u[12]),
        u[13] !== f || u[14] !== S
          ? ((o = () => {
              I.current || ((I.current = !0), (0, em.Zy)({ beacon: S, accountId: f, eventType: "view" }))
            }),
            (u[13] = f),
            (u[14] = S),
            (u[15] = o))
          : (o = u[15]),
        u[16] !== f || u[17] !== S || u[18] !== E
          ? ((c = () => {
              ;(E(), (0, em.Zy)({ beacon: S, accountId: f, eventType: "dismiss" }))
            }),
            (u[16] = f),
            (u[17] = S),
            (u[18] = E),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== f || u[21] !== S || u[22] !== E || u[23] !== l || u[24] !== o || u[25] !== c
          ? ((d = (0, n.jsx)(eh.o, {
              beacon: S,
              eventAccountId: f,
              getActionOverride: l,
              onOpen: o,
              onDismiss: c,
              onResolve: E,
            })),
            (u[20] = f),
            (u[21] = S),
            (u[22] = E),
            (u[23] = l),
            (u[24] = o),
            (u[25] = c),
            (u[26] = d))
          : (d = u[26]),
        d
      )
    }
    function eS() {
      return !1
    }
    let ek = (0, s.RD)(p.u, ({ get: e, scope: t }) => ({
      enabled: e(f.vy),
      queryFn: async () => (await (0, m.r)(t), !0),
      queryKey: ["space-onboarding-entry"],
      refetchOnMount: "always",
      refetchOnWindowFocus: !1,
      retry: !1,
      staleTime: 0,
    }))
    function eA(e) {
      let t,
        a = (0, i.c)(7),
        { deferIntroduction: r } = void 0 === e ? {} : e,
        c = (0, s.Ul)(f.vy),
        d = (0, s.Ul)(g.kx),
        p = (0, s.Ul)(o.aJ),
        m = (0, s.Ul)(g.spaceIntroductionIdentity$),
        h = (0, l.zy)(),
        x = (0, s.Ul)(u.x2)
      ;(0, s.Ul)(ek)
      let b = null != (0, l.B6)("/space", h.pathname) || null != (0, l.B6)("/spaces/:spaceId", h.pathname)
      if (
        !c ||
        (void 0 !== r && r) ||
        null == m ||
        null == p ||
        null == x ||
        (!d && !b) ||
        (!x.state?.showSpaceIntroduction && (!p || !b)) ||
        x.pathname !== h.pathname ||
        x.search !== h.search
      )
        return null
      if (d && ("/space" !== h.pathname || "?tab=suggested" !== h.search)) {
        let e
        return (
          a[0] !== h.state
            ? ((e = (0, n.jsx)(l.C5, { to: "/space?tab=suggested", state: h.state, replace: !0 })),
              (a[0] = h.state),
              (a[1] = e))
            : (e = a[1]),
          e
        )
      }
      return (
        a[2] !== m.accountId || a[3] !== m.key || a[4] !== m.userId || a[5] !== p
          ? ((t = (0, n.jsx)(eI, { accountId: m.accountId, userId: m.userId, identityKey: m.key, seen: p }, m.key)),
            (a[2] = m.accountId),
            (a[3] = m.key),
            (a[4] = m.userId),
            (a[5] = p),
            (a[6] = t))
          : (t = a[6]),
        t
      )
    }
    function eI(e) {
      let t,
        a,
        o,
        p,
        m,
        f,
        h = (0, i.c)(21),
        { accountId: x, userId: b, identityKey: y, seen: _ } = e,
        [w] = (0, r.useState)(_),
        v = (0, s.Ul)(g.kx),
        C = (0, s.Ul)(u.x2),
        j = (0, s.Ul)(d.Hb)
      if (null == C) return null
      h[0] !== C.pathname || h[1] !== C.search
        ? ((t = (0, c.ER)(C.pathname, C.search, "/space")), (h[0] = C.pathname), (h[1] = C.search), (h[2] = t))
        : (t = h[2])
      let M = t
      h[3] !== C.search ? ((a = new URLSearchParams(C.search).get("view")), (h[3] = C.search), (h[4] = a)) : (a = h[4])
      let N = a
      h[5] !== M || h[6] !== C.pathname || h[7] !== C.state?.libraryPreview || h[8] !== j || h[9] !== N
        ? ((o =
            null != (0, l.B6)("/space", C.pathname) &&
            "suggested" === M.tab &&
            !M.deleted &&
            !M.search &&
            (null == N || "slide" === N) &&
            C.state?.libraryPreview == null &&
            null == j),
          (h[5] = M),
          (h[6] = C.pathname),
          (h[7] = C.state?.libraryPreview),
          (h[8] = j),
          (h[9] = N),
          (h[10] = o))
        : (o = h[10])
      let S = o
      return (
        h[11] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, n.jsx)(eu, {})), (h[11] = p)) : (p = h[11]),
        h[12] !== x || h[13] !== y || h[14] !== S || h[15] !== v || h[16] !== w || h[17] !== b
          ? ((m = w && !v && S ? (0, n.jsx)(eN, { accountId: x, userId: b, identityKey: y }) : null),
            (h[12] = x),
            (h[13] = y),
            (h[14] = S),
            (h[15] = v),
            (h[16] = w),
            (h[17] = b),
            (h[18] = m))
          : (m = h[18]),
        h[19] !== m ? ((f = (0, n.jsxs)(n.Fragment, { children: [p, m] })), (h[19] = m), (h[20] = f)) : (f = h[20]),
        f
      )
    }
  },
  J9bg(e, t, a) {
    var n = a("D7Ms"),
      i = a("qmMi"),
      s = a("OWtl"),
      r = a("EWIu"),
      l = a("JYRT"),
      o = a("OMIV")
    let c = (0, i.vU)(s.u, (e, { get: t }) => {
        let a = t(o.M9),
          i = t(l.X, e)
        return {
          queryKey: ["deferred-statsig-config", e, a?.getContext().user, i?.__evaluation],
          queryFn: null == a ? n.hT : () => (0, r.d1)(a, e),
          staleTime: 1 / 0,
          retry: 2,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          refetchOnReconnect: !0,
        }
      }),
      d = (0, i.i1)(s.u, (e, { get: t }) => {
        let a = t(o.M9),
          n = t(l.X, e)
        if (!(0, r.tA)(a, e)) return { config: n, isLoading: !1 }
        let { data: i, isLoading: s } = t(c, e)
        return { config: i, isLoading: s }
      }),
      u = (0, i.i1)(s.u, (e, { get: t }) => t(d, e).config)
    a.d(t, {}, { S: u, b: d })
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
  ZII9(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "arrow-up-line-horizontal-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        visualBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        center: { x: 7.999756, y: 8.020752 },
        insets: { top: 2.182129, right: 2.80835, bottom: 2.140625, left: 2.807861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8.020752 }, foreground: { x: 7.999756, y: 8.020752 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.6663 12.8083C12.9562 12.8083 13.1917 13.0438 13.1917 13.3337C13.1916 13.6236 12.9561 13.8591 12.6663 13.8591H3.33325C3.04336 13.8591 2.80796 13.6236 2.80786 13.3337C2.80786 13.0438 3.0433 12.8083 3.33325 12.8083H12.6663Z" fill="currentColor"/> <path d="M7.27466 2.48218C7.64985 2.10704 8.24416 2.08374 8.64673 2.41187L8.72485 2.48218L11.7043 5.46167C11.9092 5.66657 11.909 5.9988 11.7043 6.20386C11.4993 6.40888 11.1672 6.40888 10.9622 6.20386L8.52563 3.76733V10.5007C8.52536 10.7903 8.28989 11.025 8.00024 11.0251C7.71046 11.0251 7.47512 10.7905 7.47485 10.5007V3.76538L5.03735 6.20386C4.83233 6.40888 4.50019 6.40888 4.29517 6.20386C4.09072 5.99879 4.09033 5.6665 4.29517 5.46167L7.27466 2.48218Z" fill="currentColor"/>',
    })
    a.d(t, {}, { U: n })
  },
  mBEO(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "gauge-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.001709, y: 1.834961, width: 17.999023, height: 15.352051 },
        visualBounds: { x: 1.001709, y: 1.834961, width: 17.999023, height: 15.352051 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.001709, y: 1.834961, width: 17.999023, height: 15.352051 },
        center: { x: 10.001221, y: 9.510987 },
        insets: { top: 1.834961, right: 0.999268, bottom: 2.812988, left: 1.001709 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.001221, y: 9.510987 },
          foreground: { x: 10.001221, y: 9.510987 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0017 1.83496C10.9451 1.83499 11.8556 1.9809 12.7117 2.25098C13.0619 2.36148 13.2567 2.73471 13.1462 3.08496C13.0357 3.43506 12.6624 3.62884 12.3123 3.51855C11.5841 3.28882 10.8078 3.16507 10.0017 3.16504C5.76585 3.16504 2.33179 6.5991 2.33179 10.835C2.33186 12.8582 3.11408 14.6974 4.39429 16.0684C4.64484 16.3367 4.63109 16.7571 4.36304 17.0078C4.09461 17.2585 3.67328 17.244 3.42261 16.9756C1.92156 15.3681 1.00178 13.2083 1.00171 10.835C1.00171 5.86457 5.03131 1.83496 10.0017 1.83496Z" fill="currentColor"/> <path d="M17.7751 7.74902C18.1261 7.64142 18.4984 7.83849 18.6062 8.18945C18.8633 9.02663 19.0007 9.91545 19.0007 10.835C19.0007 13.2083 18.0819 15.369 16.5808 16.9766C16.3302 17.2449 15.9088 17.2583 15.6404 17.0078C15.3723 16.7572 15.3577 16.3367 15.6082 16.0684C16.8883 14.6974 17.6716 12.8582 17.6716 10.835C17.6716 10.0493 17.5534 9.29214 17.3347 8.58008C17.2269 8.22899 17.4241 7.85683 17.7751 7.74902Z" fill="currentColor"/> <path d="M14.8269 5.0957C15.0864 4.83644 15.5076 4.8368 15.7673 5.0957C16.027 5.35536 16.0269 5.7774 15.7673 6.03711L12.2273 9.57617C12.438 9.94814 12.5603 10.377 12.5603 10.835C12.5602 12.2482 11.4149 13.3934 10.0017 13.3936C8.58836 13.3936 7.44228 12.2483 7.44214 10.835C7.4422 9.42157 8.58831 8.27539 10.0017 8.27539C10.4735 8.27544 10.9143 8.40519 11.2937 8.62793L14.8269 5.0957ZM10.0017 9.60547C9.32285 9.60547 8.77228 10.1561 8.77222 10.835C8.77236 11.5137 9.3229 12.0635 10.0017 12.0635C10.6804 12.0633 11.2301 11.5137 11.2302 10.835C11.2302 10.1562 10.6804 9.60561 10.0017 9.60547Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { i: n })
  },
}
//# sourceMappingURL=176964.9b2d84150e.js.map
