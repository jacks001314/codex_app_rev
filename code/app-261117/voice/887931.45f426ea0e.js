export const __rspack_esm_ids = [887931]
export const __webpack_modules__ = {
  W2xS(e, t, a) {
    a.d(
      t,
      {},
      {
        B: function (e) {
          if (!e.startsWith("---\n")) return e
          let t = e.indexOf("\n---", 4)
          if (-1 === t) return e
          let a = e.slice(t + 4)
          return a.startsWith("\n") ? a.slice(1) : a
        },
        v: function (e) {
          return e.find((e) => "SKILL.md" === e) ?? [...e].sort().find((e) => e.endsWith("/SKILL.md"))
        },
      },
    )
  },
  SIrB(e, t, a) {
    let n = {
      document: ["document", "google-docs"],
      presentation: ["presentation", "google-slides"],
      spreadsheet: ["spreadsheet", "google-sheets"],
      site: ["site"],
    }
    function r(e) {
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
          let a = r(t),
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
        qt: r,
      },
    )
  },
  e7LJ(e, t, a) {
    var n = a("ABep"),
      r = a("zd8w")
    let s = r.createContext(null),
      l = r.createContext(null),
      i = () => {},
      o = r.createContext(i),
      c = r.createContext(null)
    a.d(
      t,
      {},
      {
        Dp: function ({ ui: e, formatMessage: t, logEvent: a, experiments: d, children: u }) {
          let m = r.useMemo(
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
            p = r.useMemo(
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
            children: (0, n.jsx)(l, {
              value: t ?? null,
              children: (0, n.jsx)(o, { value: m, children: (0, n.jsx)(c, { value: p, children: u }) }),
            }),
          })
        },
        O8: function () {
          let e = r.useContext(s)
          if (null === e) throw Error("useHostUI must be used within a TortillaProvider.")
          return e
        },
        oo: function () {
          let e = r.useContext(l)
          if (null === e) throw Error("useFormatMessage requires a TortillaProvider with formatMessage.")
          return e
        },
      },
    )
  },
  K4Yp(e, t, a) {
    var n = a("ASxG")
    let r = n.k5n(["granola_workbook", "granola_presentation"]),
      s = n.Ikc({
        accountId: n.YjP().min(1),
        userId: n.YjP().min(1),
        hostId: n.YjP().min(1),
        threadId: n.YjP().min(1),
      }),
      l = s.extend({ artifactRef: n.YjP().min(1) }),
      i = n.Ikc({
        source: l,
        attemptId: n.uRe(),
        title: n.YjP().min(1),
        documentType: r,
        destination: n.euz("personal_file_drive").optional(),
        initialUpdate: n.YjP().min(1).optional(),
        imageFileIds: n.g1P(n.YjP().min(1), n.YjP().min(1)).optional(),
        snapshotSha256: n
          .YjP()
          .regex(/^[a-f0-9]{64}$/)
          .optional(),
        pageId: n.YjP().min(1).optional(),
        sourceReleased: n.zMY().optional(),
      }),
      o = n.Ikc({ source: l })
    n.YOg(n.KCZ([i, o]))
    let c = n.Ikc({
      source: s.extend({ path: n.YjP().min(1) }),
      pageId: n.YjP().min(1),
      title: n.YjP().min(1),
      documentType: r,
    })
    a.d(
      t,
      {},
      {
        LG: c,
        Nh: function (e, t) {
          return (
            e.accountId === t.accountId &&
            e.userId === t.userId &&
            e.hostId === t.hostId &&
            e.threadId === t.threadId &&
            e.artifactRef === t.artifactRef
          )
        },
        Qi: s,
        i9: r,
      },
    )
  },
  BI6E(e, t, a) {
    var n = a("Qgfj")
    let r = (0, n.YK)({
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
      l = (0, n.YK)({
        customizeTemplatePrompt: {
          id: "artifactTemplate.customizePrompt",
          defaultMessage: "Help me customize a personal copy of {template} using {templateCreator}",
        },
        editTemplatePrompt: {
          id: "artifactTemplate.resultCard.editPrompt",
          defaultMessage: "Help me make updates to {template} using {templateCreator}",
        },
      })
    a.d(t, {}, { T5: r, ho: l, xs: s })
  },
  eOqt(e, t, a) {
    a.d(t, { u: () => N })
    var n = a("ABep"),
      r = a("QosV")
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
    var l = a("e7LJ"),
      i = a("on57"),
      o = a("Wf1j"),
      c = a("Sm6l"),
      d = a("JNtf"),
      u = a("mUDD"),
      m = a("bqtn"),
      p = a("HOLv"),
      f = a("bVeK"),
      h = a("X3K1"),
      g = a("BrP7"),
      x = a("zLIa"),
      v = a("OGl1"),
      b = a("NKFb"),
      y = a("DqAq"),
      w = a("nDx1")
    let C = {
      Button: c.$,
      Input: ({ name: e, ...t }) => (0, n.jsx)(x.pd, { ...t, id: e, name: e }),
      Label: ({ htmlFor: e, ...t }) => (0, n.jsx)("label", { ...t, htmlFor: e }),
      Skeleton: ({ className: e }) => (0, n.jsx)(h.X, { as: "span", className: (0, i.A)("block", e), size: "custom" }),
      Dialog: function (e) {
        let t,
          a,
          s,
          l,
          i,
          o,
          c,
          m,
          p = (0, r.c)(16)
        ;(p[0] !== e
          ? (({ title: l, description: a, children: t, ...s } = e),
            (p[0] = e),
            (p[1] = t),
            (p[2] = a),
            (p[3] = s),
            (p[4] = l))
          : ((t = p[1]), (a = p[2]), (s = p[3]), (l = p[4])),
          p[5] !== l
            ? ((i = (0, n.jsx)(d.L3, { className: "sr-only", children: l })), (p[5] = l), (p[6] = i))
            : (i = p[6]))
        let f = a ?? l
        return (
          p[7] !== f
            ? ((o = (0, n.jsx)(d.rr, { className: "sr-only", children: f })), (p[7] = f), (p[8] = o))
            : (o = p[8]),
          p[9] !== t
            ? ((c = (0, n.jsx)(u.R4, { variant: "chatgpt", size: "full", children: t })), (p[9] = t), (p[10] = c))
            : (c = p[10]),
          p[11] !== s || p[12] !== i || p[13] !== o || p[14] !== c
            ? ((m = (0, n.jsxs)(d.lG, { ...s, children: [i, o, c] })),
              (p[11] = s),
              (p[12] = i),
              (p[13] = o),
              (p[14] = c),
              (p[15] = m))
            : (m = p[15]),
          m
        )
      },
      Tabs: g.t,
      Dropdown: { Root: m.Ab, Item: m.ms.Item },
      icons: {
        templateCreator: (e) => (0, n.jsx)(p.I, { asset: s, ...e }),
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
        document: v.Ug.artifactDocument,
        presentation: v.Ug.presentation,
        spreadsheet: v.Ug.spreadsheet,
        "google-docs": b.A,
        "google-slides": w.A,
        "google-sheets": y.A,
      },
    }
    function N(e) {
      let t,
        a = (0, r.c)(3),
        { children: s } = e,
        i = (0, o.A)()
      return (
        a[0] !== s || a[1] !== i.formatMessage
          ? ((t = (0, n.jsx)(l.Dp, { ui: C, formatMessage: i.formatMessage, children: s })),
            (a[0] = s),
            (a[1] = i.formatMessage),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
  },
  N55g(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("zd8w"),
      l = a("oyxz"),
      i = a("Fl60")
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            o = (0, r.c)(5),
            { stage: c, errorClass: d } = e,
            u = (0, s.useContext)(i.b),
            m = u ? "true" : void 0,
            p = u ? (c ?? "") : void 0,
            f = u ? d : void 0
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(l.A, {
                  id: "dil.modelWrittenV2.responseFailure",
                  defaultMessage: "This response couldn\u2019t load",
                })),
                (o[0] = t))
              : (t = o[0]),
            o[1] !== m || o[2] !== p || o[3] !== f
              ? ((a = (0, n.jsx)("div", {
                  role: "status",
                  "data-dil-render-failed": "",
                  "data-internal-render-dil-render-failure": m,
                  "data-internal-render-dil-v2-failure-stage": p,
                  "data-internal-render-dil-v2-error-class": f,
                  children: t,
                })),
                (o[1] = m),
                (o[2] = p),
                (o[3] = f),
                (o[4] = a))
              : (a = o[4]),
            a
          )
        },
      },
    )
  },
  BrP7(e, t, a) {
    a.d(t, { t: () => C })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("i1uX"),
      l = a("on57"),
      i = a("IjbW"),
      o = a("K4Cx"),
      c = a("zd8w"),
      d = a("UxN3"),
      u = a("SziE"),
      m = a("hZax"),
      p = a("Sm6l")
    let f = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function h(e) {
      let t,
        a,
        s,
        i,
        o,
        c,
        d,
        u,
        m,
        h,
        g,
        x,
        v = (0, r.c)(26)
      v[0] !== e
        ? (({ children: t, icon: a, size: i, surface: o, labelVisibility: c, ...s } = e),
          (v[0] = e),
          (v[1] = t),
          (v[2] = a),
          (v[3] = s),
          (v[4] = i),
          (v[5] = o),
          (v[6] = c))
        : ((t = v[1]), (a = v[2]), (s = v[3]), (i = v[4]), (o = v[5]), (c = v[6]))
      let b = void 0 === o ? "elevated" : o,
        y = void 0 === c ? "visible" : c,
        w = "large" === i && "visible" === y && "pb-1.5"
      v[7] !== w ? ((d = (0, l.A)("group/labeled-icon flex-col gap-1.5", w)), (v[7] = w), (v[8] = d)) : (d = v[8])
      let C = "elevated" === b ? "border shadow-xs" : "border-hairline",
        N = f[i]
      ;(v[9] !== C || v[10] !== N.icon
        ? ((u = (0, l.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            C,
            N.icon,
          )),
          (v[9] = C),
          (v[10] = N.icon),
          (v[11] = u))
        : (u = v[11]),
        v[12] !== a || v[13] !== u
          ? ((m = (0, n.jsx)("span", { className: u, children: a })), (v[12] = a), (v[13] = u), (v[14] = m))
          : (m = v[14]))
      let j = "hidden" === y ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        S = "visible" === y && f[i].caption
      return (
        v[15] !== S || v[16] !== j ? ((h = (0, l.A)(j, S)), (v[15] = S), (v[16] = j), (v[17] = h)) : (h = v[17]),
        v[18] !== t || v[19] !== h
          ? ((g = (0, n.jsx)("span", { className: h, children: t })), (v[18] = t), (v[19] = h), (v[20] = g))
          : (g = v[20]),
        v[21] !== s || v[22] !== g || v[23] !== d || v[24] !== m
          ? ((x = (0, n.jsxs)(p.$, {
              ...s,
              className: d,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [m, g],
            })),
            (v[21] = s),
            (v[22] = g),
            (v[23] = d),
            (v[24] = m),
            (v[25] = x))
          : (x = v[25]),
        x
      )
    }
    let g = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      x = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${g} px-2`,
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
      y = {
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
        settings: { ...x, tabButtonClassName: `${g} button-toolbar` },
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
        segmentedPill: y,
        segmentedPillMuted: {
          ...y,
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
        a = (0, r.c)(39),
        {
          tabs: i,
          selectedKey: o,
          onSelect: f,
          onTabClick: g,
          onTabHover: x,
          className: v,
          fill: b,
          scrollable: y,
          tabListRef: C,
          variant: S,
          ariaLabel: k,
          ariaLabelledBy: I,
          activationMode: P,
          animateSelection: A,
          dividerBefore: M,
        } = e,
        E = void 0 !== b && b,
        T = void 0 !== y && y,
        L = void 0 === S ? "segmented" : S,
        _ = void 0 === P ? "automatic" : P,
        z = (0, c.useId)(),
        B = w[L],
        R = "inset" === L || "choice" === L,
        $ = (0, m.Zj)(!R && "icon" !== L && "text-secondary" === B.unselectedTextClassName && "1244723012"),
        q = void 0 !== A && A && ("segmentedPill" === L || "segmentedPillMuted" === L),
        V = q ? "text-default font-medium" : B.selectedClassName
      if (
        a[0] !== _ ||
        a[1] !== q ||
        a[2] !== k ||
        a[3] !== I ||
        a[4] !== v ||
        a[5] !== M ||
        a[6] !== E ||
        a[7] !== f ||
        a[8] !== g ||
        a[9] !== x ||
        a[10] !== B.closeButtonClassName ||
        a[11] !== B.itemClassName ||
        a[12] !== B.listClassName ||
        a[13] !== B.segmentedEdges ||
        a[14] !== B.selectionIndicator ||
        a[15] !== B.tabButtonClassName ||
        a[16] !== B.textSizeClassName ||
        a[17] !== B.unselectedClassName ||
        a[18] !== B.unselectedTextClassName ||
        a[19] !== T ||
        a[20] !== V ||
        a[21] !== o ||
        a[22] !== z ||
        a[23] !== C ||
        a[24] !== i ||
        a[25] !== $ ||
        a[26] !== R ||
        a[27] !== L
      ) {
        let e,
          r,
          c = (0, l.A)($ ? "text-tertiary" : B.unselectedTextClassName, B.unselectedClassName),
          m = R ? p.$ : "button",
          b = E && "w-full",
          y = T && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(a[29] !== v || a[30] !== B.listClassName || a[31] !== b || a[32] !== y
          ? ((e = (0, l.A)(B.listClassName, b, y, v)),
            (a[29] = v),
            (a[30] = B.listClassName),
            (a[31] = b),
            (a[32] = y),
            (a[33] = e))
          : (e = a[33]),
          a[34] !== _ || a[35] !== f || a[36] !== T || a[37] !== i
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
                  T && a[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let s = i[t]
                null != s && "automatic" === _ && f(s.key, e.timeStamp)
              }),
              (a[34] = _),
              (a[35] = f),
              (a[36] = T),
              (a[37] = i),
              (a[38] = r))
            : (r = a[38]),
          (t = (0, n.jsx)("div", {
            ref: C,
            role: "tablist",
            tabIndex: -1,
            "aria-label": k,
            "aria-labelledby": I,
            className: e,
            onWheel: T ? N : void 0,
            onKeyDown: r,
            children: i.map((e, t) => {
              let a,
                r,
                p = e.key === o,
                v = p ? V : c,
                b = 0 === t,
                y = t === i.length - 1,
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
                    ;((p && "manual" !== _) || f(e.key, t.timeStamp), g?.(e.key))
                  },
                }
              return (
                "inset" === L
                  ? ((a = p ? "segmentedInsetSelected" : "ghost"), (r = "compact"))
                  : "choice" === L && ((a = p ? "choiceSelected" : "outlineGhost"), (r = "dialogAction")),
                (0, n.jsxs)(
                  "div",
                  {
                    className: (0, l.A)(
                      "relative flex min-w-0 items-center",
                      B.itemClassName,
                      E && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      b || e.key !== M
                        ? null
                        : (0, n.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === L
                        ? (0, n.jsx)(h, { ...w, icon: e.icon, size: "large", children: e.name })
                        : (0, n.jsxs)(m, {
                            ...w,
                            className: (0, l.A)(
                              E && "min-w-0 flex-1 justify-center",
                              q && "relative isolate",
                              !R && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                B.textSizeClassName ?? "text-sm",
                                B.tabButtonClassName,
                                T && "ring-inset",
                                B.segmentedEdges && b && "rounded-l-md",
                                B.segmentedEdges && y && "rounded-r-md",
                                "browse" === L && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", p && "ring-1 ring-border-strong"]
                                  : v,
                              ],
                            ),
                            color: a,
                            radius: "choice" === L ? "full" : void 0,
                            size: r,
                            children: [
                              q && p ? (0, n.jsx)(j, { layoutId: z }) : null,
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
                      "underline" === B.selectionIndicator && p
                        ? (0, n.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, n.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, l.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              B.closeButtonClassName,
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
                      B.segmentedEdges && !y
                        ? (0, n.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (a[0] = _),
          (a[1] = q),
          (a[2] = k),
          (a[3] = I),
          (a[4] = v),
          (a[5] = M),
          (a[6] = E),
          (a[7] = f),
          (a[8] = g),
          (a[9] = x),
          (a[10] = B.closeButtonClassName),
          (a[11] = B.itemClassName),
          (a[12] = B.listClassName),
          (a[13] = B.segmentedEdges),
          (a[14] = B.selectionIndicator),
          (a[15] = B.tabButtonClassName),
          (a[16] = B.textSizeClassName),
          (a[17] = B.unselectedClassName),
          (a[18] = B.unselectedTextClassName),
          (a[19] = T),
          (a[20] = V),
          (a[21] = o),
          (a[22] = z),
          (a[23] = C),
          (a[24] = i),
          (a[25] = $),
          (a[26] = R),
          (a[27] = L),
          (a[28] = t))
      } else t = a[28]
      return t
    }
    function N(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function j(e) {
      let t,
        a,
        s = (0, r.c)(5),
        { layoutId: l } = e,
        c = 0.25 * !(0, i.I)()
      return (
        s[0] !== c ? ((t = { type: "spring", duration: c, bounce: 0 }), (s[0] = c), (s[1] = t)) : (t = s[1]),
        s[2] !== l || s[3] !== t
          ? ((a = (0, n.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: l,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (s[2] = l),
            (s[3] = t),
            (s[4] = a))
          : (a = s[4]),
        a
      )
    }
  },
  K5PF(e, t, a) {
    var n = a("SRbQ"),
      r = a("qmMi"),
      s = a("K4Yp"),
      l = a("G4E3"),
      i = a("SPnB"),
      o = a("svjy"),
      c = a("GaA7"),
      d = a("OWtl"),
      u = a("tv8P"),
      m = a("Ky0Z")
    async function p(e, t) {
      let a = c.appServices?.artifactSessions
      if (null == a) return null
      let r = (0, u.watchSpaceAccount)(e, t.accountId, t.userId)
      try {
        let s = { stack: [], error: void 0, hasError: !1 }
        try {
          r.signal.throwIfAborted()
          let i = (0, n.mS)(s, await a.readHandoff({ artifactRef: t.artifactRef, threadId: t.threadId }), !1)
          r.signal.throwIfAborted()
          let c = i.handoff
          if (c?.target == null) return null
          let d = (0, l.I0)(c.target.uri)
          if (d?.kind !== "page" || new URL(c.target.uri).searchParams.get("account_id") !== t.accountId)
            throw Error("artifact_handoff_account_changed")
          return {
            source: t,
            attemptId: c.attemptId,
            pageId: d.id,
            title:
              i.title ||
              e
                .get(o.g)
                .formatMessage({
                  id: "artifactHandoff.untitledDocument",
                  defaultMessage: "Untitled document",
                  description: "Fallback name for a shared local document without a title",
                }),
            documentType: "presentation" === i.kind ? "granola_presentation" : "granola_workbook",
            targetArtifactRef: c.target.artifactRef,
          }
        } catch (e) {
          ;((s.error = e), (s.hasError = !0))
        } finally {
          ;(0, n.hk)(s)
        }
      } finally {
        r.stop()
      }
    }
    let f = (0, r.vU)(d.u, (e, { get: t, scope: a }) => ({
        queryKey: [
          "artifact-shared-page",
          e,
          t(m.h, null == e ? null : s.Qi.parse(e))?.find((t) => null != e && (0, s.Nh)(t.source, e)),
        ],
        enabled:
          null != e &&
          c.appServices?.artifactSessions != null &&
          e.accountId === t(u.spaceAccountId$) &&
          e.userId === t(i.chatGptAuthenticatedUserId$),
        staleTime: 0,
        retry: !1,
        queryFn: () => (null == e ? Promise.resolve(null) : p(a, e)),
      })),
      h = (0, r.vU)(d.u, (e, { get: t, scope: a }) => {
        let r = t(u.spaceAccountId$),
          s = t(i.chatGptAuthenticatedUserId$),
          l = null == r || null == s ? null : { accountId: r, userId: s, hostId: e.hostId, threadId: e.conversationId }
        return {
          queryKey: ["artifact-shared-pages", e, r, s, t(m.h, l)],
          enabled: null != l && c.appServices?.artifactSessions != null && c.appServices?.artifactPageHandoffs != null,
          staleTime: 0,
          queryFn: async () => {
            let e = { stack: [], error: void 0, hasError: !1 }
            try {
              if (null == l || c.appServices?.artifactPageHandoffs == null) return []
              let t = (0, n.mS)(e, await c.appServices.artifactPageHandoffs.list(l), !1)
              return (await Promise.all(t.map((e) => p(a, e.source).catch(() => null)))).filter((e) => null != e)
            } catch (t) {
              ;((e.error = t), (e.hasError = !0))
            } finally {
              ;(0, n.hk)(e)
            }
          },
        }
      })
    a.d(t, { BK: () => h, V: () => p, Zj: () => f, h2: () => m.h })
  },
  Ky0Z(e, t, a) {
    var n = a("qmMi"),
      r = a("SPnB"),
      s = a("GaA7"),
      l = a("OWtl")
    let i = (0, n.A4)(
      l.u,
      (e) => null,
      (e, { set: t }) => {
        if (null == e) return void t([])
        let a = s.appServices?.artifactPageHandoffs
        if (null == a) return void t([])
        let n = !0,
          r = a.subscribe(e, (e) => {
            n && t(e)
          })
        return (
          Promise.resolve(r).catch(() => {
            n && t(null)
          }),
          () => {
            ;((n = !1), r[Symbol.dispose]())
          }
        )
      },
      { autoDispose: !0 },
    )
    a.d(
      t,
      {},
      {
        h: i,
        v: function (e, t, a) {
          let n = e.get(r.chatGptAuthenticatedAccountId$),
            l = e.get(r.chatGptAuthenticatedUserId$)
          if (null == n || null == l || s.appServices?.artifactPageHandoffs == null) return !1
          let o = e.get(i, { accountId: n, userId: l, hostId: t, threadId: a })
          return null == o || o.length > 0
        },
      },
    )
  },
  qvFq(e, t, a) {
    var n = a("DBCl"),
      r = a("G4E3"),
      s = a("r9ga"),
      l = a("uqg3"),
      i = a("tv8P")
    a.d(
      t,
      {},
      {
        $: function (e, t) {
          let a = new URL(`/space/${encodeURIComponent(t)}`, new URL(n.WaA).origin)
          return (a.searchParams.set("account_id", e), a.href)
        },
        openPageArtifactTarget: function (e, t, a, n) {
          let o = (0, r.I0)(t)
          if (o?.kind !== "page") return !1
          let c = new URL(t).searchParams.get("account_id")
          return (
            null != c &&
            c === e.get(i.spaceAccountId$) &&
            ((e.value.persistentWorkspace?.key !== "/space" &&
              (0, s.Kk)(e, e.value.pathname) === e.get(i.spacePageId$, o.id)) ||
              (0, l.openSpacePageSidePanelTab)(e, o.id, {
                openSource: n?.openSource,
                title: a,
                target: n?.target,
                revealAndFocus:
                  n?.revealAndFocus === "if-created"
                    ? null == (0, l.getOpenSpacePageTab)(e, c, o.id)
                    : n?.revealAndFocus,
              }).opened)
          )
        },
      },
    )
  },
  KUNU(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("on57"),
      l = a("zd8w"),
      i = a("tsSe"),
      o = a("IlRO")
    a.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            c,
            d,
            u,
            m,
            p,
            f,
            h,
            g,
            x,
            v,
            b,
            y,
            w,
            C,
            N,
            j,
            S,
            k,
            I,
            P = (0, r.c)(73),
            {
              className: A,
              glowEnabled: M,
              onDraw: E,
              onRenderError: T,
              onStateSample: L,
              paletteIndex: _,
              placement: z,
              presentation: B,
              presentationAnchorRef: R,
              phase: $,
              previewAudioLevel: q,
              previewTimeMs: V,
              subscribeToAudio: K,
              voiceActivity: Y,
            } = e,
            U = void 0 === M || M,
            H = void 0 === _ ? 0 : _,
            O = void 0 === B ? "overlay" : B,
            D = void 0 === q ? 0 : q,
            F = void 0 === K ? i.NY : K,
            [G, W] = (0, l.useState)(!1),
            Z = (0, l.useRef)(null),
            X = (0, l.useRef)(null),
            Q = (0, l.useRef)(null),
            J = (0, l.useRef)(null)
          ;(P[0] !== V ? ("live" !== V && (t = V), (P[0] = V), (P[1] = t)) : (t = P[1]),
            P[2] !== H || P[3] !== $ || P[4] !== D || P[5] !== t || P[6] !== Y
              ? ((c = { paletteIndex: H, phase: $, previewAudioLevel: D, previewTimeMs: t, voiceActivity: Y }),
                (P[2] = H),
                (P[3] = $),
                (P[4] = D),
                (P[5] = t),
                (P[6] = Y),
                (P[7] = c))
              : (c = P[7]))
          let ee = (0, l.useRef)(c)
          P[8] !== E || P[9] !== O || P[10] !== D || P[11] !== t
            ? ((d = (e) => {
                "preview" === O || null != t || D > 0 || E?.(e)
              }),
              (P[8] = E),
              (P[9] = O),
              (P[10] = D),
              (P[11] = t),
              (P[12] = d))
            : (d = P[12])
          let et = (0, l.useEffectEvent)(d)
          P[13] !== L || P[14] !== O || P[15] !== D || P[16] !== t
            ? ((u = (e) => {
                "preview" !== O && null == t && 0 === D && L?.(e)
              }),
              (P[13] = L),
              (P[14] = O),
              (P[15] = D),
              (P[16] = t),
              (P[17] = u))
            : (u = P[17])
          let ea = (0, l.useEffectEvent)(u)
          P[18] !== T
            ? ((m = () => {
                ;(W(!0), T?.())
              }),
              (P[18] = T),
              (P[19] = m))
            : (m = P[19])
          let en = (0, l.useEffectEvent)(m)
          P[20] !== z || P[21] !== R
            ? ((p = (e) => {
                ;((X.current = e), (null == e || e.dataset.avatarOverlayPlacement === z) && R?.(e, e?.parentElement))
              }),
              (P[20] = z),
              (P[21] = R),
              (P[22] = p))
            : (p = P[22])
          let er = p
          ;(P[23] !== et || P[24] !== en || P[25] !== ea || P[26] !== G || !1 !== P[27] || P[28] !== O
            ? ((f = () => {
                if (G) return
                let e = X.current,
                  t = Q.current,
                  n = e?.parentElement
                if (null == e || null == t || null == n) return
                let r = !1,
                  s = null,
                  l = null,
                  i = () => {
                    let a = String(Math.max(1, Math.floor(Math.min(e.clientWidth, e.clientHeight)))) + "px"
                    ;((t.style.width = a), (t.style.height = a))
                  }
                return (
                  i(),
                  "u" > typeof ResizeObserver && (l = new ResizeObserver(i)).observe(e),
                  (async () => (await a.e(317638).then(a.bind(a, "HNEj"))).HorizonVoiceOrbController)()
                    .then((e) => {
                      var a, s
                      let l, i
                      return r
                        ? null
                        : e.create(t, {
                            displayScale:
                              ((a = n),
                              (s = t),
                              (l = Math.max(1, Math.min(a.clientWidth, a.clientHeight))),
                              (i = Math.max(1, Math.min(s.clientWidth || l + 40, s.clientHeight || l + 40))),
                              Math.min(1, l / i)),
                            onDraw: (e) => {
                              r || et(e)
                            },
                            onRenderError: () => {
                              r || en()
                            },
                            onStateSample: void 0,
                            presentation: O,
                          })
                    })
                    .then((e) => {
                      r
                        ? e?.dispose()
                        : null != e && ((s = e), (Z.current = e), e.setAudioLevels(J.current), e.setInputs(ee.current))
                    })
                    .catch(() => {
                      r || en()
                    }),
                  () => {
                    ;((r = !0), l?.disconnect(), s?.dispose(), (Z.current = null))
                  }
                )
              }),
              (P[23] = et),
              (P[24] = en),
              (P[25] = ea),
              (P[26] = G),
              (P[27] = !1),
              (P[28] = O),
              (P[29] = f))
            : (f = P[29]),
            P[30] !== G || !1 !== P[31] || P[32] !== O
              ? ((h = [G, !1, O]), (P[30] = G), (P[31] = !1), (P[32] = O), (P[33] = h))
              : (h = P[33]),
            (0, l.useLayoutEffect)(f, h),
            P[34] !== H || P[35] !== $ || P[36] !== D || P[37] !== t || P[38] !== Y
              ? ((g = () => {
                  let e = { paletteIndex: H, phase: $, previewAudioLevel: D, previewTimeMs: t, voiceActivity: Y }
                  ;((ee.current = e), Z.current?.setInputs(e))
                }),
                (P[34] = H),
                (P[35] = $),
                (P[36] = D),
                (P[37] = t),
                (P[38] = Y),
                (P[39] = g))
              : (g = P[39]),
            P[40] !== H || P[41] !== $ || P[42] !== D || P[43] !== t || P[44] !== Y
              ? ((x = [H, $, D, t, Y]), (P[40] = H), (P[41] = $), (P[42] = D), (P[43] = t), (P[44] = Y), (P[45] = x))
              : (x = P[45]),
            (0, l.useEffect)(g, x))
          let es = !G && "inactive" !== $
          ;(P[46] !== es || P[47] !== F
            ? ((v = () => {
                if (!es) {
                  ;((J.current = null), Z.current?.setAudioLevels(null))
                  return
                }
                return F((e) => {
                  ;((J.current = e), Z.current?.setAudioLevels(e))
                })
              }),
              (b = [es, F]),
              (P[46] = es),
              (P[47] = F),
              (P[48] = v),
              (P[49] = b))
            : ((v = P[48]), (b = P[49])),
            (0, l.useEffect)(v, b),
            P[50] !== z
              ? ((y = (0, s.A)(
                  "pointer-events-none absolute block h-[calc(100%+40px)] w-[calc(100%+40px)] max-w-none",
                  "center" === z
                    ? "-top-5 -left-5"
                    : [z.endsWith("end") ? "right-0" : "left-0", z.startsWith("top") ? "bottom-0" : "top-0"],
                )),
                (P[50] = z),
                (P[51] = y))
              : (y = P[51]))
          let el = y
          P[52] !== G || P[53] !== H
            ? ((w = G ? (0, o.V)(H) : null), (P[52] = G), (P[53] = H), (P[54] = w))
            : (w = P[54])
          let ei = w
          ;(P[55] !== U || P[56] !== H
            ? ((C = U ? `drop-shadow(0 0 4px color-mix(in srgb, ${(0, o.P)(H)} 55%, transparent))` : void 0),
              (P[55] = U),
              (P[56] = H),
              (P[57] = C))
            : (C = P[57]),
            P[58] !== C ? ((N = { filter: C }), (P[58] = C), (P[59] = N)) : (N = P[59]))
          let eo = N
          return (
            P[60] !== A
              ? ((j = (0, s.A)("codex-avatar-root relative h-full w-full", A)), (P[60] = A), (P[61] = j))
              : (j = P[61]),
            P[62] !== eo || P[63] !== ei
              ? ((S =
                  null != ei
                    ? (0, n.jsx)("div", {
                        className:
                          "absolute top-1/2 left-1/2 size-[50px] max-h-[calc(100%-40px)] max-w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "data-testid": "voice-static-orb",
                        style: {
                          background: `linear-gradient(155deg, ${ei.fallbackColors[0]}, ${ei.fallbackColors[1]} 46%, ${ei.fallbackColors[2]})`,
                        },
                      })
                    : (0, n.jsx)("canvas", {
                        ref: Q,
                        className:
                          "pointer-events-none absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2",
                        style: eo,
                      })),
                (P[62] = eo),
                (P[63] = ei),
                (P[64] = S))
              : (S = P[64]),
            P[65] !== el || P[66] !== z || P[67] !== er || P[68] !== S
              ? ((k = (0, n.jsx)("div", { ref: er, className: el, "data-avatar-overlay-placement": z, children: S })),
                (P[65] = el),
                (P[66] = z),
                (P[67] = er),
                (P[68] = S),
                (P[69] = k))
              : (k = P[69]),
            P[70] !== j || P[71] !== k
              ? ((I = (0, n.jsx)("div", {
                  "aria-hidden": "true",
                  className: j,
                  "data-avatar-mascot": "true",
                  "data-chromatic": "ignore",
                  "data-realtime-voice-orb": !0,
                  "data-testid": "avatar-overlay-voice-orb",
                  children: k,
                })),
                (P[70] = j),
                (P[71] = k),
                (P[72] = I))
              : (I = P[72]),
            I
          )
        },
      },
    )
  },
  IlRO(e, t, a) {
    var n = a("nBOj")
    let r = [n.l.blue, n.l.blue, n.l.green, n.l.yellow, n.l.pink, n.l.orange, n.l.purple, n.l.black],
      s = new Map()
    function l(e) {
      return r[e] ?? n.l.blue
    }
    a.d(
      t,
      {},
      {
        P: l,
        V: function (e) {
          let t,
            a,
            n,
            r,
            i,
            o,
            c,
            d = l(e),
            u = s.get(d)
          if (null != u) return u
          let m =
            ((t = getComputedStyle(document.documentElement)
              .getPropertyValue(d.slice(4, -1))
              .trim()
              .replace(/^#([\da-f])([\da-f])([\da-f])$/i, "#$1$1$2$2$3$3")),
            (n = (a = [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16))).map((e) => e / 255)),
            (i = (r = a.every((e) => 0 === e) ? [0.08, 0.08, 0.08] : n).map((e) => Math.max(0, e + 0.9465623 - 1))),
            (o = r.map((e) => {
              let t = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e)
              return e + 0.79764306 * (t - e)
            })),
            (c = r.map((e) => 1 - (1 - e) * (1 - 0.63704175))),
            {
              accentColor: [...n, 1],
              fallbackColors: [
                `rgb(${i.map((e) => 255 * e).join(" ")})`,
                `rgb(${o.map((e) => 255 * e).join(" ")} / 98%)`,
                `rgb(${c.map((e) => 255 * e).join(" ")} / 98%)`,
              ],
            })
          return (s.set(d, m), m)
        },
      },
    )
  },
  atrN(e, t, a) {
    a.d(t, { W: () => h })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("on57"),
      l = a("K45w"),
      i = a("W5pg"),
      o = a("K4Cx"),
      c = a("zd8w")
    let d = 2 * Math.PI * (1088 / 520),
      u = 0.7332121111929343 * d,
      m = Math.atan(u / (0.68 * d)) / u,
      p = (1.06 - 1) / ((Math.exp(-0.68 * d * m) * Math.sin(u * m)) / u)
    var f = a("Mbqw")
    function h(e) {
      let t,
        a,
        m,
        h,
        b,
        y,
        w,
        C,
        N,
        j,
        S,
        k,
        I,
        P,
        A,
        M,
        E,
        T,
        L,
        _,
        z = (0, r.c)(63),
        { isConnecting: B, onHandoffComplete: R, orb: $, orbDiameter: q, reduceMotion: V } = e,
        K = (0, c.useRef)(null),
        Y = (0, c.useRef)(!1),
        U = (0, c.useRef)(!1),
        H = (0, l.d)(+!B),
        O = (0, l.d)(50)
      z[0] !== H || z[1] !== q || z[2] !== O
        ? ((t = () =>
            (function (e, t, a) {
              let n = Math.max(0, e)
              if (n >= 1125) return a
              if (n <= 325) {
                let e = n / 325
                return t + e ** 2 * (3 - 2 * e) * (12 - t)
              }
              let r = 12 / a
              if (n <= 520) {
                let e = Math.max(1 - r, 1e-4),
                  s = (((6 * (t / a - r)) / 0.10562500000000001) * (0.038025 / e)) / 2,
                  l = 1 - s,
                  i = (0.195 * p) / e - 2 * s - 3 * l,
                  o = ((-1.36 * d * p * 0.038025) / e - 2 * s - 6 * l - 6 * i) / 2,
                  c = i - 2 * o,
                  u = (n - 325) / 195
                return a * (r + (1 - r) * (u ** 2 * (o * u ** 3 + c * u ** 2 + (l - o - c) * u + s)))
              }
              let s = (n - 520) / 1e3
              return a * (1 + (p / u) * Math.exp(-0.68 * d * s) * Math.sin(u * s))
            })(1125 * H.get(), O.get(), q)),
          (z[0] = H),
          (z[1] = q),
          (z[2] = O),
          (z[3] = t))
        : (t = z[3])
      let D = (0, i.G)(t),
        F = (0, i.G)(H, x),
        G = (0, i.G)(F, g)
      z[4] !== q ? ((a = (e) => e / q), (z[4] = q), (z[5] = a)) : (a = z[5])
      let W = (0, i.G)(D, a)
      z[6] !== D || z[7] !== O ? ((m = () => D.get() / O.get()), (z[6] = D), (z[7] = O), (z[8] = m)) : (m = z[8])
      let Z = (0, i.G)(m)
      z[9] !== H || z[10] !== B || z[11] !== R || z[12] !== V
        ? ((h = () => {
            B || (!V && 1 > H.get()) || Y.current || ((Y.current = !0), R?.())
          }),
          (z[9] = H),
          (z[10] = B),
          (z[11] = R),
          (z[12] = V),
          (z[13] = h))
        : (h = z[13])
      let X = h,
        Q = (0, c.useEffectEvent)(X)
      ;(z[14] !== Q || z[15] !== B
        ? ((b = () => {
            if (B) return
            let e = requestAnimationFrame(Q)
            return () => {
              cancelAnimationFrame(e)
            }
          }),
          (z[14] = Q),
          (z[15] = B),
          (z[16] = b))
        : (b = z[16]),
        z[17] !== B ? ((y = [B]), (z[17] = B), (z[18] = y)) : (y = z[18]),
        (0, c.useEffect)(b, y),
        z[19] !== q ? ((w = { height: q, width: q }), (z[19] = q), (z[20] = w)) : (w = z[20]))
      let J = V ? f.TU : f.Eq,
        ee = B && "pointer-events-none"
      ;(z[21] !== ee ? ((C = (0, s.A)("absolute inset-0", ee)), (z[21] = ee), (z[22] = C)) : (C = z[22]),
        z[23] !== F || z[24] !== W
          ? ((N = { opacity: F, scale: W }), (z[23] = F), (z[24] = W), (z[25] = N))
          : (N = z[25]),
        z[26] !== $ || z[27] !== C || z[28] !== N
          ? ((j = (0, n.jsx)(o.P.div, { className: C, style: N, children: $ })),
            (z[26] = $),
            (z[27] = C),
            (z[28] = N),
            (z[29] = j))
          : (j = z[29]),
        z[30] !== G || z[31] !== Z
          ? ((S = { opacity: G, scale: Z }), (z[30] = G), (z[31] = Z), (z[32] = S))
          : (S = z[32]),
        z[33] !== V ? ((k = (0, n.jsx)(v, { ref: K, reduceMotion: V })), (z[33] = V), (z[34] = k)) : (k = z[34]),
        z[35] !== S || z[36] !== k
          ? ((I = (0, n.jsx)(o.P.div, {
              className: "pointer-events-none absolute inset-0 flex items-center justify-center",
              style: S,
              children: k,
            })),
            (z[35] = S),
            (z[36] = k),
            (z[37] = I))
          : (I = z[37]))
      let et = +!B
      ;(z[38] !== et ? ((P = { opacity: et }), (z[38] = et), (z[39] = P)) : (P = z[39]),
        z[40] !== B || z[41] !== O
          ? ((A = () => {
              let e = K.current
              if (B) {
                ;((U.current = !1), (Y.current = !1), null != e && (e.style.animationPlayState = ""))
                return
              }
              if (((U.current = !0), null == e)) return
              let t = e.getBoundingClientRect().width
              ;(t > 0 && O.set(t), (e.style.animationPlayState = "paused"))
            }),
            (z[40] = B),
            (z[41] = O),
            (z[42] = A))
          : (A = z[42]),
        z[43] !== X || z[44] !== B || z[45] !== V
          ? ((M = () => {
              B || V || !U.current || ((U.current = !1), X())
            }),
            (z[43] = X),
            (z[44] = B),
            (z[45] = V),
            (z[46] = M))
          : (M = z[46]),
        z[47] !== H ? ((E = { opacity: H }), (z[47] = H), (z[48] = E)) : (E = z[48]))
      let ea = V ? 0 : B ? 0.325 : 1.125
      return (
        z[49] !== ea ? ((T = { duration: ea, ease: "linear" }), (z[49] = ea), (z[50] = T)) : (T = z[50]),
        z[51] !== P || z[52] !== A || z[53] !== M || z[54] !== E || z[55] !== T
          ? ((L = (0, n.jsx)(o.P.span, {
              "aria-hidden": !0,
              animate: P,
              className: "pointer-events-none absolute size-0",
              initial: !1,
              onAnimationStart: A,
              onAnimationComplete: M,
              style: E,
              transition: T,
            })),
            (z[51] = P),
            (z[52] = A),
            (z[53] = M),
            (z[54] = E),
            (z[55] = T),
            (z[56] = L))
          : (L = z[56]),
        z[57] !== j || z[58] !== I || z[59] !== L || z[60] !== w || z[61] !== J
          ? ((_ = (0, n.jsxs)(o.P.div, {
              "aria-hidden": !0,
              className: "relative flex items-center justify-center",
              initial: !1,
              animate: w,
              transition: J,
              children: [j, I, L],
            })),
            (z[57] = j),
            (z[58] = I),
            (z[59] = L),
            (z[60] = w),
            (z[61] = J),
            (z[62] = _))
          : (_ = z[62]),
        _
      )
    }
    function g(e) {
      return 1 - e
    }
    function x(e) {
      let t
      return (t = Math.min(1, Math.max(0, (1125 * e - 325) / 195))) ** 3 * (t * (6 * t - 15) + 10)
    }
    function v(e) {
      let t,
        a,
        l = (0, r.c)(5),
        { ref: i, reduceMotion: o } = e,
        c = !o && "pulsing-dot"
      return (
        l[0] !== c ? ((t = (0, s.A)("size-[50px] rounded-full bg-text", c)), (l[0] = c), (l[1] = t)) : (t = l[1]),
        l[2] !== i || l[3] !== t
          ? ((a = (0, n.jsx)("div", { ref: i, className: t })), (l[2] = i), (l[3] = t), (l[4] = a))
          : (a = l[4]),
        a
      )
    }
  },
  h0ld(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("K4Cx"),
      l = a("qmMi"),
      i = a("oyxz"),
      o = a("Ywss"),
      c = a("q3HK"),
      d = a("Sm6l"),
      u = a("JNtf"),
      m = a("mUDD"),
      p = a("T1PX"),
      f = a("pPxA"),
      h = a("KUNU"),
      g = a("GaA7"),
      x = a("OWtl"),
      v = a("atrN"),
      b = a("XLpU"),
      y = a("kXFg"),
      w = a("Mbqw"),
      C = a("XL6s"),
      N = a("hJzG"),
      j = a("NolR")
    function S() {}
    function k() {}
    function I() {}
    function P() {}
    a.d(
      t,
      {},
      {
        RealtimeVoiceLaunchSurface: function (e) {
          let t,
            a,
            A,
            M,
            E,
            T,
            L,
            _,
            z,
            B,
            R = (0, r.c)(91),
            { threadLocator: $ } = e,
            q = (0, l.gh)(x.u),
            V = (0, o.zy)(),
            K = (0, l.Ul)(y.RJ),
            Y = (0, l.Ul)(b._A),
            U = (0, l.Ul)(C.qE),
            H = (0, p.I)(),
            O = (0, j.w)(),
            D =
              null == $
                ? K?.request.source === "composer_button_new_thread" &&
                  (0, y.Yc)(`${V.pathname}${V.search}`, K.originPath, (0, y.uO)(Y, U))
                : (0, y.ml)(K, $.conversationId, $.hostId)
          if (null == K || !D) return null
          if ("failed" === K.phase && null != K.usageLimit) {
            let e,
              t,
              a,
              r,
              s,
              l,
              o,
              c,
              p,
              h = K.usageLimit.voice_limit_message
            R[0] !== q
              ? ((e = () => {
                  ;(0, y.jS)(q).catch(P)
                }),
                (R[0] = q),
                (R[1] = e))
              : (e = R[1])
            let g = e
            R[2] !== g
              ? ((t = (e) => {
                  e || g()
                }),
                (R[2] = g),
                (R[3] = t))
              : (t = R[3])
            let x = h?.title ?? K.usageLimit.message
            return (
              R[4] !== x
                ? ((a = (0, n.jsx)(u.L3, {
                    className: "text-heading-lg leading-7 font-semibold select-none",
                    variant: "promotional",
                    children: x,
                  })),
                  (R[4] = x),
                  (R[5] = a))
                : (a = R[5]),
              R[6] !== h
                ? ((r =
                    null != h &&
                    (0, n.jsx)(u.rr, {
                      className: "text-onboarding-body text-secondary select-none",
                      asChild: !0,
                      children: (0, n.jsx)(f.o, { children: h.description_markdown }),
                    })),
                  (R[6] = h),
                  (R[7] = r))
                : (r = R[7]),
              R[8] !== a || R[9] !== r
                ? ((s = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [a, r] })),
                  (R[8] = a),
                  (R[9] = r),
                  (R[10] = s))
                : (s = R[10]),
              R[11] !== g || R[12] !== h
                ? ((l =
                    null != h && h.buttons.length > 0
                      ? h.buttons.map((e) =>
                          (0, n.jsx)(
                            d.$,
                            {
                              className: "w-full",
                              color: "tertiary" === e.style ? "ghost" : e.style,
                              size: "promotionalAction",
                              onClick: g,
                              children: e.title,
                            },
                            e.action,
                          ),
                        )
                      : (0, n.jsx)(d.$, {
                          className: "w-full",
                          size: "promotionalAction",
                          onClick: g,
                          children: (0, n.jsx)(i.A, { id: "voice.rateLimitModal.dismiss", defaultMessage: "OK" }),
                        })),
                  (R[11] = g),
                  (R[12] = h),
                  (R[13] = l))
                : (l = R[13]),
              R[14] !== l
                ? ((o = (0, n.jsx)(m.Es, { className: "flex-col", children: l })), (R[14] = l), (R[15] = o))
                : (o = R[15]),
              R[16] !== s || R[17] !== o
                ? ((c = (0, n.jsx)(m.R4, {
                    variant: "chatgpt",
                    children: (0, n.jsxs)("div", {
                      className: "flex flex-col gap-8 p-6 pt-14 text-center sm:p-10",
                      children: [s, o],
                    }),
                  })),
                  (R[16] = s),
                  (R[17] = o),
                  (R[18] = c))
                : (c = R[18]),
              R[19] !== t || R[20] !== c
                ? ((p = (0, n.jsx)(u.lG, {
                    open: !0,
                    variant: "centeredText",
                    size: "feature",
                    onOpenChange: t,
                    children: c,
                  })),
                  (R[19] = t),
                  (R[20] = c),
                  (R[21] = p))
                : (p = R[21]),
              p
            )
          }
          if (
            ("composer_button_existing_thread" === K.request.source &&
              "in-window" === K.request.preferredPresentationSurface) ||
            (("composer_button_existing_thread" === K.request.source || null != K.request.pageCompanion) &&
              "failed" !== K.phase)
          )
            return null
          if ("failed" === K.phase) {
            let e,
              t,
              a,
              r,
              s,
              l,
              o,
              u,
              m,
              p,
              f,
              h,
              x,
              v,
              b,
              w,
              C = K.error === y.zW,
              N = g.appServices.systemPermissions
            ;(R[22] !== C
              ? ((e = (0, n.jsx)("h2", {
                  className: "text-base font-medium text-default",
                  children: C
                    ? (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.microphonePermissionDeniedTitle",
                        defaultMessage: "Microphone permission denied",
                      })
                    : (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.failedTitle",
                        defaultMessage: "Voice chat couldn\u2019t start",
                      }),
                })),
                (R[22] = C),
                (R[23] = e))
              : (e = R[23]),
              R[24] !== K.error || R[25] !== C
                ? ((t = C
                    ? (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.microphonePermissionDeniedDescription",
                        defaultMessage: "Allow microphone access in system settings to start a voice chat",
                      })
                    : K.error ||
                      (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.failedDescription",
                        defaultMessage: "Try again, or go back",
                      })),
                  (R[24] = K.error),
                  (R[25] = C),
                  (R[26] = t))
                : (t = R[26]),
              R[27] !== t
                ? ((a = (0, n.jsx)("p", { className: "text-sm text-secondary", children: t })),
                  (R[27] = t),
                  (R[28] = a))
                : (a = R[28]),
              R[29] !== e || R[30] !== a
                ? ((r = (0, n.jsxs)("div", { className: "flex flex-col gap-1", children: [e, a] })),
                  (R[29] = e),
                  (R[30] = a),
                  (R[31] = r))
                : (r = R[31]),
              R[32] !== C
                ? ((s =
                    C &&
                    null != N &&
                    (0, n.jsx)(d.$, {
                      color: "primary",
                      onClick: () => {
                        N.openMicrophoneSettings().catch(I)
                      },
                      size: "medium",
                      children: (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.openMicrophoneSettings",
                        defaultMessage: "Open system settings",
                      }),
                    })),
                  (R[32] = C),
                  (R[33] = s))
                : (s = R[33]))
            let j = C && null != N ? "secondary" : "primary"
            return (
              R[34] !== K.originPath ||
              R[35] !== K.request ||
              R[36] !== K.sourceComposerScope ||
              R[37] !== K.workHomePolicyAcceptance ||
              R[38] !== q
                ? ((l = () => {
                    ;(0, y.eE)(q, K.sourceComposerScope, K.request, K.originPath, K.workHomePolicyAcceptance).catch(k)
                  }),
                  (R[34] = K.originPath),
                  (R[35] = K.request),
                  (R[36] = K.sourceComposerScope),
                  (R[37] = K.workHomePolicyAcceptance),
                  (R[38] = q),
                  (R[39] = l))
                : (l = R[39]),
              R[40] === Symbol.for("react.memo_cache_sentinel")
                ? ((o = (0, n.jsx)(i.A, { id: "realtimeVoice.launch.retry", defaultMessage: "Try again" })),
                  (R[40] = o))
                : (o = R[40]),
              R[41] !== j || R[42] !== l
                ? ((u = (0, n.jsx)(d.$, { color: j, onClick: l, size: "medium", children: o })),
                  (R[41] = j),
                  (R[42] = l),
                  (R[43] = u))
                : (u = R[43]),
              R[44] !== K.error
                ? ((m = () => {
                    ;(0, c.d1)("feedback", "realtime_voice_startup_failure", { feedbackDetails: K.error })
                  }),
                  (R[44] = K.error),
                  (R[45] = m))
                : (m = R[45]),
              R[46] === Symbol.for("react.memo_cache_sentinel")
                ? ((p = (0, n.jsx)(i.A, { id: "realtimeVoice.launch.feedback", defaultMessage: "Send feedback" })),
                  (R[46] = p))
                : (p = R[46]),
              R[47] !== m
                ? ((f = (0, n.jsx)(d.$, { color: "secondary", onClick: m, size: "medium", children: p })),
                  (R[47] = m),
                  (R[48] = f))
                : (f = R[48]),
              R[49] !== q
                ? ((h = () => {
                    ;(0, y.jS)(q).catch(S)
                  }),
                  (R[49] = q),
                  (R[50] = h))
                : (h = R[50]),
              R[51] === Symbol.for("react.memo_cache_sentinel")
                ? ((x = (0, n.jsx)(i.A, { id: "realtimeVoice.launch.back", defaultMessage: "Back" })), (R[51] = x))
                : (x = R[51]),
              R[52] !== h
                ? ((v = (0, n.jsx)(d.$, { color: "secondary", onClick: h, size: "medium", children: x })),
                  (R[52] = h),
                  (R[53] = v))
                : (v = R[53]),
              R[54] !== f || R[55] !== v || R[56] !== s || R[57] !== u
                ? ((b = (0, n.jsxs)("div", {
                    className: "flex flex-wrap justify-center gap-2",
                    children: [s, u, f, v],
                  })),
                  (R[54] = f),
                  (R[55] = v),
                  (R[56] = s),
                  (R[57] = u),
                  (R[58] = b))
                : (b = R[58]),
              R[59] !== b || R[60] !== r
                ? ((w = (0, n.jsx)("div", {
                    className: "absolute inset-0 z-30 flex items-center justify-center bg-surface",
                    children: (0, n.jsxs)("div", {
                      className: "flex flex-col items-center gap-4 text-center",
                      children: [r, b],
                    }),
                  })),
                  (R[59] = b),
                  (R[60] = r),
                  (R[61] = w))
                : (w = R[61]),
              w
            )
          }
          let F = "active" === Y.phase && "main-thread" === Y.preferredPresentationSurface,
            G = "connected" === K.phase && K.handoffComplete,
            W = O && U?.surface === "main-thread" && U.handoff?.from === "global-overlay" ? N.vY : N.Ke,
            Z = +!G
          ;(R[62] !== Z ? ((t = { opacity: Z }), (R[62] = Z), (R[63] = t)) : (t = R[63]),
            R[64] !== G || R[65] !== K.request || R[66] !== q
              ? ((a = () => {
                  G && (0, y.hW)(q, K.request)
                }),
                (R[64] = G),
                (R[65] = K.request),
                (R[66] = q),
                (R[67] = a))
              : (a = R[67]))
          let X = H ? w.TU : w.sk
          ;(R[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = (0, n.jsx)("span", {
                className: "sr-only",
                role: "status",
                children: (0, n.jsx)(i.A, {
                  id: "realtimeVoice.launch.starting",
                  defaultMessage: "Starting voice chat",
                }),
              })),
              (R[68] = A))
            : (A = R[68]),
            R[69] !== W ? ((M = { transform: W }), (R[69] = W), (R[70] = M)) : (M = R[70]),
            R[71] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = { height: 112, width: 112 }), (R[71] = E))
              : (E = R[71]))
          let Q = !F
          R[72] !== K.request || R[73] !== q
            ? ((T = () => (0, y.Kj)(q, K.request)), (R[72] = K.request), (R[73] = q), (R[74] = T))
            : (T = R[74])
          let J = "inactive" === Y.phase ? "starting" : Y.phase,
            ee = "inactive" === Y.phase ? "idle" : Y.activity
          return (
            R[75] !== J || R[76] !== ee
              ? ((L = (0, n.jsx)(h.P, {
                  className: "!aspect-square !size-full",
                  glowEnabled: !1,
                  phase: J,
                  placement: "center",
                  voiceActivity: ee,
                })),
                (R[75] = J),
                (R[76] = ee),
                (R[77] = L))
              : (L = R[77]),
            R[78] !== H || R[79] !== L || R[80] !== Q || R[81] !== T
              ? ((_ = (0, n.jsx)("div", {
                  className: "relative flex",
                  style: E,
                  children: (0, n.jsx)(v.W, {
                    isConnecting: Q,
                    onHandoffComplete: T,
                    orb: L,
                    orbDiameter: 112,
                    reduceMotion: H,
                  }),
                })),
                (R[78] = H),
                (R[79] = L),
                (R[80] = Q),
                (R[81] = T),
                (R[82] = _))
              : (_ = R[82]),
            R[83] !== _ || R[84] !== M
              ? ((z = (0, n.jsx)("div", {
                  className: N.Jn,
                  children: (0, n.jsx)("div", { className: N.$S, style: M, children: _ }),
                })),
                (R[83] = _),
                (R[84] = M),
                (R[85] = z))
              : (z = R[85]),
            R[86] !== z || R[87] !== t || R[88] !== a || R[89] !== X
              ? ((B = (0, n.jsxs)(s.P.div, {
                  animate: t,
                  className: "absolute inset-0 z-30 bg-surface",
                  initial: !1,
                  onAnimationComplete: a,
                  transition: X,
                  children: [A, z],
                })),
                (R[86] = z),
                (R[87] = t),
                (R[88] = a),
                (R[89] = X),
                (R[90] = B))
              : (B = R[90]),
            B
          )
        },
      },
    )
  },
  t0b9(e, t, a) {
    var n = a("DBCl")
    let r = "realtimeVoiceHostId"
    a.d(
      t,
      {},
      {
        I: function (e) {
          let t = new URLSearchParams({ [r]: e.hostId })
          return `${(0, n._RT)(e.conversationId)}?${t}`
        },
        N: function ({ conversationId: e, routeConversationId: t, searchParams: a }) {
          return null != e && e === t ? a.get(r) : null
        },
      },
    )
  },
  Mbqw(e, t, a) {
    ;(a("V8uZ"),
      a.d(
        t,
        {},
        {
          Eq: { duration: 0.28, ease: [0.33, 1, 0.68, 1] },
          TU: { duration: 0 },
          sk: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
        },
      ))
  },
  f81T(e, t, a) {
    a.d(
      t,
      {},
      {
        F9: function (e, t) {
          return { x: e.left + e.width / 2 - (t.left + t.width / 2), y: e.top + e.height / 2 - (t.top + t.height / 2) }
        },
        NS: function (e, t) {
          return {
            centerX: t.screenX + e.left + e.width / 2,
            centerY: t.screenY + e.top + e.height / 2,
            height: e.height,
            width: e.width,
          }
        },
        Pz: function (e, t, a, n) {
          let r = (e.centerX - t.centerX) / a,
            s = (e.centerY - t.centerY) / a,
            l = Math.hypot(r, s),
            i = l > n ? n / l : 1
          return { x: r * i, y: s * i }
        },
        SP: function (e, t, a) {
          let n = (0.055 * e.x) / t,
            r = (0.055 * e.y) / t,
            s = Math.hypot(n, r),
            l = s > a ? a / s : 1
          return { x: n * l, y: r * l }
        },
      },
    )
  },
  XL6s(e, t, a) {
    var n = a("SRbQ"),
      r = a("QosV"),
      s = a("qmMi"),
      l = a("zd8w"),
      i = a("wD9O"),
      o = a("SGsN"),
      c = a("TL6G"),
      d = a("GaA7"),
      u = a("OWtl"),
      m = a("t0b9"),
      p = a("f81T")
    let f = { active: null },
      h = (0, s.vP)(u.u, () => f, {
        onMount: (e) => {
          let t = d.appServices?.realtimeVoicePresentation
          if (null == t) return
          let a = !0,
            r = null
          return (
            t
              .subscribe((t) => {
                a && e(t)
              })
              .then((e) => {
                if (!a) {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    let a = (0, n.mS)(t, e, !1)
                    ;(0, n.mS)(t, a.unsubscribe(), !1)
                    return
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, n.hk)(t)
                  }
                }
                r = () => {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    let a = (0, n.mS)(t, e, !1)
                    ;(0, n.mS)(t, a.unsubscribe(), !1)
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, n.hk)(t)
                  }
                }
              }),
            () => {
              ;((a = !1), r?.(), (r = null))
            }
          )
        },
      }),
      g = (0, s.un)(u.u, ({ get: e }) => e(h).active)
    function x({ locator: e, motion: t, surface: a }) {
      let r = { stack: [], error: void 0, hasError: !1 }
      try {
        ;(0, n.mS)(r, d.appServices.realtimeVoicePresentation?.requestSurface(e, a, t), !1)
      } catch (e) {
        ;((r.error = e), (r.hasError = !0))
      } finally {
        ;(0, n.hk)(r)
      }
    }
    a.d(
      t,
      {},
      {
        UB: function (e) {
          let t,
            a = (0, r.c)(2)
          a[0] !== e
            ? ((t = () => {
                null != e &&
                  (x({ locator: e, surface: "main-thread" }),
                  c.O1.dispatchMessage("open-in-main-window", {
                    path: (0, m.I)(e),
                    appEntryAttribution: { channel: "shortcut", source: "shortcut" },
                  }))
              }),
              (a[0] = e),
              (a[1] = t))
            : (t = a[1])
          let n = t
          return null == e ? void 0 : n
        },
        _x: x,
        cr: function ({ enabled: e, isEligible: t, locator: a, surface: r, usesNativeOverlayTransition: m }) {
          let f = (0, s.gh)(u.u),
            h = (0, i.dz)(),
            g = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            v = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            y = a?.conversationId,
            w = a?.hostId,
            C = (0, l.useCallback)(() => {
              let e = { stack: [], error: void 0, hasError: !1 }
              try {
                let t = x.current,
                  a = g.current
                if (null == t || null == a) return
                let r = t.getBoundingClientRect()
                ;(0, n.mS)(e, a.updateAnchor((0, p.NS)(r, { screenX: window.screenX, screenY: window.screenY })), !1)
                let s = v.current
                if (null == s) return
                ;(0, n.mS)(e, a.updatePresentationOffset((0, p.F9)(r, s.getBoundingClientRect())), !1)
              } catch (t) {
                ;((e.error = t), (e.hasError = !0))
              } finally {
                ;(0, n.hk)(e)
              }
            }, []),
            N = (0, l.useCallback)(
              (e, t = null) => {
                if ((b.current?.(), (b.current = null), (x.current = e), (v.current = t), null == e)) return
                let a = "u" < typeof ResizeObserver ? null : new ResizeObserver(C)
                ;(a?.observe(e),
                  e.addEventListener("pointerdown", C, !0),
                  e.addEventListener("pointerup", C, !0),
                  window.addEventListener("blur", C),
                  window.addEventListener("resize", C))
                let n = c.O1.subscribe("electron-window-position-changed", C),
                  r = d.appServices.windowNavigation?.subscribeWindowPosition()
                ;(C(),
                  (b.current = () => {
                    ;(r?.[Symbol.dispose](),
                      a?.disconnect(),
                      e.removeEventListener("pointerdown", C, !0),
                      e.removeEventListener("pointerup", C, !0),
                      window.removeEventListener("blur", C),
                      window.removeEventListener("resize", C),
                      n())
                  }))
              },
              [C],
            ),
            j = (0, l.useEffectEvent)(() => t),
            S = (0, l.useEffectEvent)(() => C()),
            k = (0, l.useCallback)(
              (e) => {
                switch (e.kind) {
                  case "danger":
                    f.get(o.Id).danger(e.message, {
                      errorAnalytics: { toastId: "realtimeVoicePresentation.showToast" },
                    })
                    break
                  case "warning":
                    f.get(o.Id).warning(e.message)
                }
              },
              [f],
            )
          return (
            (0, l.useEffect)(() => {
              if (!e || null == y || null == w) return
              let t = d.appServices.realtimeVoicePresentation
              if (null == t) return
              let a = !1,
                s = null
              return (
                t.registerSurface({ conversationId: y, hostId: w }, r, j(), m, k).then((e) => {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    if (a) {
                      let t = { stack: [], error: void 0, hasError: !1 }
                      try {
                        let a = (0, n.mS)(t, e, !1)
                        ;(0, n.mS)(t, a.unregister(), !1)
                        return
                      } catch (e) {
                        ;((t.error = e), (t.hasError = !0))
                      } finally {
                        ;(0, n.hk)(t)
                      }
                    }
                    ;((g.current = e),
                      (0, n.mS)(t, e.updateEligibility(j()), !1),
                      S(),
                      (s = () => {
                        let t = { stack: [], error: void 0, hasError: !1 }
                        try {
                          let a = (0, n.mS)(t, e, !1)
                          ;(0, n.mS)(t, a.unregister(), !1)
                        } catch (e) {
                          ;((t.error = e), (t.hasError = !0))
                        } finally {
                          ;(0, n.hk)(t)
                        }
                      }))
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, n.hk)(t)
                  }
                }),
                () => {
                  ;((a = !0), (g.current = null), s?.(), (s = null))
                }
              )
            }, [y, e, w, k, r, m]),
            (0, l.useEffect)(() => {
              let e = { stack: [], error: void 0, hasError: !1 }
              try {
                let a = g.current
                if (null == a) return
                ;(0, n.mS)(e, a.updateEligibility(t), !1)
              } catch (t) {
                ;((e.error = t), (e.hasError = !0))
              } finally {
                ;(0, n.hk)(e)
              }
            }, [t]),
            (0, l.useEffect)(() => {
              C()
            }, [C, h]),
            e ? N : void 0
          )
        },
        qE: g,
      },
    )
  },
  hJzG(e, t, a) {
    a.d(
      t,
      {},
      {
        $S: "absolute inset-x-12 top-0 flex flex-col items-center gap-1",
        Jn: "pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto h-52 w-full max-w-[900px] px-12",
        Ke: "translateY(52px)",
        vY: "translateY(-28px)",
      },
    )
  },
  NolR(e, t, a) {
    var n = a("QosV"),
      r = a("XYHU"),
      s = a("hZax")
    a.d(
      t,
      {},
      {
        w: function () {
          let e,
            t = (0, n.c)(2),
            a = (0, s.Zj)("620613358")
          return (t[0] !== a ? ((e = "macOS" === (0, r.tR)() && a), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
}
//# sourceMappingURL=887931.45f426ea0e.js.map
