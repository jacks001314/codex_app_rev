export const __rspack_esm_ids = [227880]
export const __webpack_modules__ = {
  PrMY(e, t) {
    t.A = {
      TableFrame: "TableFrame-YxtDrz",
      tableFrame: "TableFrame-YxtDrz",
      TableViewport: "TableViewport-RD3I2I",
      tableViewport: "TableViewport-RD3I2I",
      Table: "Table-QT1UX2",
      table: "Table-QT1UX2",
      RowLabelCell: "RowLabelCell-buFS1H",
      rowLabelCell: "RowLabelCell-buFS1H",
      RowLabelContent: "RowLabelContent-COxRoF",
      rowLabelContent: "RowLabelContent-COxRoF",
      RowLabelText: "RowLabelText-FwPKa_",
      rowLabelText: "RowLabelText-FwPKa_",
      EmptyCell: "EmptyCell-tmuE_H",
      emptyCell: "EmptyCell-tmuE_H",
    }
  },
  U5ik(e, t, a) {
    function r(e, t) {
      let a = [],
        r = (e) => {
          ;(a.push(e), e.children.forEach(r))
        }
      e.forEach(r)
      let n = a.filter((e) => Number(e.id) > 0xffffffff)
      if (0 === n.length) return e
      let s = new Set(a.map((e) => Number(e.id))),
        o = 2
      for (let e of n) {
        for (; s.has(o);) o += 1
        ;(t.set(e.id, String(o)), s.add(o++))
      }
      let i = (e) => {
        let a = { ...e, id: t.get(e.id) ?? e.id, children: e.children.map(i) }
        return (
          e.connector &&
            (a.connector = {
              ...e.connector,
              fromElementId: t.get(e.connector.fromElementId) ?? e.connector.fromElementId,
              toElementId: t.get(e.connector.toElementId) ?? e.connector.toElementId,
            }),
          a
        )
      }
      return e.map(i)
    }
    a.d(
      t,
      {},
      {
        c: function (e) {
          let t = new Map(),
            a = e.slides.map((e) => {
              let a = new Map()
              return (t.set(e.id, a), { ...e, elements: r(e.elements, a) })
            }),
            n = (e) => {
              if (!e) return e
              let a = t.get(e.slideId)?.get(e.elementId)
              return void 0 === a ? e : { ...e, elementId: a }
            }
          return {
            ...e,
            slides: a,
            layouts: e.layouts.map((e) => ({ ...e, elements: r(e.elements, new Map()) })),
            threads: e.threads.map((e) =>
              e.target
                ? { ...e, target: { ...e.target, element: n(e.target.element), textRange: n(e.target.textRange) } }
                : e,
            ),
          }
        },
      },
    )
  },
  CuLE(e, t, a) {
    var r =
      Number.isNaN ||
      function (e) {
        return "number" == typeof e && e != e
      }
    function n(e, t) {
      if (e.length !== t.length) return !1
      for (var a, n, s = 0; s < e.length; s++) if (!((a = e[s]) === (n = t[s]) || (r(a) && r(n))) && 1) return !1
      return !0
    }
    a.d(
      t,
      {},
      {
        A: function (e, t) {
          void 0 === t && (t = n)
          var a = null
          function r() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
            if (a && a.lastThis === this && t(r, a.lastArgs)) return a.lastResult
            var s = e.apply(this, r)
            return ((a = { lastResult: s, lastArgs: r, lastThis: this }), s)
          }
          return (
            (r.clear = function () {
              a = null
            }),
            r
          )
        },
      },
    )
  },
  TakC(e, t, a) {
    a.d(t, { N: () => n })
    var r = a("Ospn")
    let n = a.n(r)()({ backdropStyle: "dim", iconNextVariant: "light", pill: !1, pressableScaleMultiplier: 1 }, {})
  },
  TE73(e, t, a) {
    var r = a("TakC"),
      n = a("FPHf")
    let s = (e) => ("number" == typeof e ? `${e}deg` : e)
    a.d(
      t,
      {},
      {
        Ny: (e) => {
          let t = e.currentTarget
          if (!n.Sw || !(t instanceof HTMLElement)) return
          let a = t.offsetWidth,
            s = 0.985
          ;(a <= 80 ? (s = 0.96) : a <= 150 ? (s = 0.97) : a <= 220 ? (s = 0.98) : a > 600 && (s = 0.995),
            t.style.setProperty("--scale", (1 + (s - 1) * r.N.pressableScaleMultiplier).toString()))
        },
        Oe: () =>
          !!n.Vd &&
          "function" == typeof window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        WI: function (e, t, a = (e) => e) {
          let r = [],
            n = new Map()
          for (let s of e) {
            let e = a(s[t], s),
              o = n.get(e)
            if (void 0 !== o) {
              r[o].items.push(s)
              continue
            }
            let i = { [t]: e, items: [s] }
            ;(n.set(e, r.length), r.push(i))
          }
          return r
        },
        fT: (e) => `${e}ms`,
        iB: (e) => {
          e.preventDefault()
        },
        lW: ({ x: e, y: t, scale: a, rotate: r, rotateY: n, perspective: o, skewX: i, skewY: l } = {}) => {
          let c = [
            null == o ? null : `perspective(${o}px)`,
            null == e ? null : `translateX(${e}px)`,
            null == t ? null : `translateY(${t}px)`,
            null == a ? null : `scale(${a})`,
            null == r ? null : `rotate(${s(r)})`,
            null == n ? null : `rotateY(${s(n)})`,
            null == i ? null : `skewX(${s(i)})`,
            null == l ? null : `skewY(${s(l)})`,
          ].filter(Boolean)
          return c.length ? c.join(" ") : "none"
        },
        mW: (e) =>
          Object.keys(e).reduce((t, a) => {
            let r = e[a]
            if (r || 0 === r) {
              let e = a.startsWith("--") ? "" : "--",
                n = "number" == typeof r ? `${r}px` : r
              t[`${e}${a}`] = n
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
            let a = (function (e) {
              let t = new URL(e)
              if ("http:" !== t.protocol && "https:" !== t.protocol) return "http://files.openai.com"
              if ("ticketmaster.evyy.net" === t.hostname) {
                let e = t.searchParams.getAll("u"),
                  a = 1 === e.length ? e[0] : void 0
                if (a)
                  try {
                    let e = new URL(a)
                    if ("http:" === e.protocol || "https:" === e.protocol) return e.origin
                  } catch {}
              }
              return t.origin
            })(e)
            return `https://www.google.com/s2/favicons?domain=${a}&sz=${t}`
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
          let a = t?.frames ?? 2,
            r = window.requestAnimationFrame(function t() {
              0 == (a -= 1) ? e() : (r = window.requestAnimationFrame(t))
            })
          return () => {
            "function" == typeof window.cancelAnimationFrame && window.cancelAnimationFrame(r)
          }
        },
        zG: ({ blur: e } = {}) => {
          let t = [null == e ? null : `blur(${e}px)`].filter(Boolean)
          return t.length ? t.join(" ") : "none"
        },
      },
    )
  },
  kzIV(e, t, a) {
    a.d(t, {
      Cs: () => f,
      xt: () => h,
      Gx: () => b,
      dQ: () => v,
      mA: () => P,
      dj: () => g,
      NY: () =>
        function e(t) {
          if (null == t) return
          if ("number" == typeof t || "string" == typeof t)
            return (function (t) {
              let a = t.includes("(") ? [t] : t.trim().split(/\s+/)
              if (a.length > 1) {
                let [t, r = t, n = t, s = r] = a
                return e({ top: t, right: r, bottom: n, left: s })
              }
              return {
                ...(0, r.mW)({
                  "w-box-gutter-block-end": t,
                  "w-box-gutter-block-start": t,
                  "w-box-gutter-inline-end": t,
                  "w-box-gutter-inline-start": t,
                }),
                paddingBlock: t,
                paddingInline: t,
              }
            })(p(t))
          let a = p(t.top ?? t.y),
            n = p(t.bottom ?? t.y),
            s = p(t.left ?? t.x),
            o = p(t.right ?? t.x),
            i = null != s || null != o
          return {
            ...(0, r.mW)({
              "w-box-gutter-block-end": n,
              "w-box-gutter-block-start": a,
              "w-box-gutter-inline-end": i ? (o ?? "0px") : void 0,
              "w-box-gutter-inline-start": i ? (s ?? "0px") : void 0,
            }),
            paddingBlockEnd: n,
            paddingBlockStart: a,
            paddingInlineEnd: o,
            paddingInlineStart: s,
          }
        },
      OO: () => p,
      Nx: () => M,
      X0: () => y,
    })
    var r = a("TE73")
    let n = new Set(["none", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "full", "100%"]),
      s = ["green", "red", "pink", "orange", "yellow", "purple", "blue"],
      o = new Set(["gray", ...s]),
      i = new Set(s),
      l = new Set([
        "0",
        "25",
        "50",
        "75",
        "100",
        "150",
        "200",
        "250",
        "300",
        "350",
        "400",
        "450",
        "500",
        "550",
        "600",
        "650",
        "700",
        "750",
        "800",
        "850",
        "900",
        "925",
        "950",
        "975",
        "1000",
      ]),
      c = new Set(["25", "50", "75", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "1000"]),
      d = new Set(["a25", "a50", "a75", "a100", "a200", "a300"]),
      m = new Set([
        "base",
        "0",
        "01",
        "02",
        "04",
        "05",
        "06",
        "08",
        "10",
        "12",
        "15",
        "16",
        "20",
        "25",
        "30",
        "35",
        "40",
        "50",
        "60",
        "70",
      ]),
      u = {
        foreground: {
          blue: "blue-500",
          gray: "gray-700",
          green: "green-700",
          orange: "orange-700",
          pink: "pink-600",
          purple: "purple-700",
          red: "red-700",
          yellow: "yellow-700",
        },
        background: {
          blue: "blue-a50",
          gray: "gray-100",
          green: "green-a50",
          orange: "orange-a50",
          pink: "pink-a50",
          purple: "purple-a50",
          red: "red-a50",
          yellow: "yellow-a50",
        },
        border: {
          blue: "blue-a100",
          gray: "gray-200",
          green: "green-a100",
          orange: "orange-a100",
          pink: "pink-a100",
          purple: "purple-a100",
          red: "red-a100",
          yellow: "yellow-a100",
        },
      }
    function p(e) {
      if (null != e) return "number" == typeof e ? `calc(var(--spacing, 0.25rem) * ${e})` : e
    }
    function f(e) {
      if (null == e) return
      let t = String(e).split(/[:/]/).map(Number),
        [a, r = 1] = t
      if (!(t.length > 2) && Number.isFinite(a) && Number.isFinite(r) && !(a <= 0) && !(r <= 0))
        return { width: a, height: r }
    }
    function h(e) {
      if (null == e) return
      let t = f(e)
      return t ? `${t.width} / ${t.height}` : ("number" != typeof e && e.trim()) || void 0
    }
    function g(e) {
      if (null != e)
        return "number" == typeof e
          ? { borderRadius: e }
          : "string" == typeof e
            ? { borderRadius: w(e) }
            : {
                borderEndEndRadius: w(e.bottomRight),
                borderEndStartRadius: w(e.bottomLeft),
                borderStartEndRadius: w(e.topRight),
                borderStartStartRadius: w(e.topLeft),
              }
    }
    function w(e) {
      if (null != e)
        return "number" == typeof e
          ? e
          : "none" === e
            ? "0"
            : "100%" === e
              ? "100%"
              : "full" === e
                ? "9999px"
                : n.has(e)
                  ? `var(--dil-radius-${e})`
                  : e
    }
    function k(e, t) {
      return o.has(e)
        ? `var(--${u[t][e]})`
        : !(function (e) {
              if ("white" === e || "black" === e) return !0
              let t = e.indexOf("-")
              if (-1 === t) return !1
              let a = e.slice(0, t),
                r = e.slice(t + 1)
              return "alpha" === a ? m.has(r) : "gray" === a ? l.has(r) : i.has(a) && (c.has(r) || d.has(r))
            })(e)
          ? void 0
          : `var(--${e})`
    }
    function y(e, t) {
      return "string" == typeof t ? t : t?.[e]
    }
    function b(e, t = "light") {
      if (e)
        switch (e) {
          case "surface":
            return "var(--color-surface)"
          case "surface-inverted":
            return "var(--color-text-prose)"
          case "info":
            return "var(--color-background-info-surface)"
          case "warning":
            return "var(--color-background-warning-surface)"
          case "caution":
            return "var(--color-background-caution-surface)"
          case "success":
            return "var(--color-background-success-surface)"
          case "danger":
            return "var(--color-background-danger-surface)"
          case "discovery":
            return "var(--color-background-discovery-surface)"
          case "info-solid":
          case "warning-solid":
          case "caution-solid":
          case "success-solid":
          case "danger-solid":
          case "discovery-solid":
            return `var(--color-background-${e})`
          case "surface-secondary":
            return "var(--color-surface-secondary)"
          case "surface-tertiary":
            return "var(--color-surface-tertiary)"
          case "surface-soft":
            return "var(--color-background-primary-surface)"
          case "surface-elevated":
            return "var(--color-surface-elevated)"
          case "surface-elevated-secondary":
            return "var(--color-surface-elevated-secondary)"
          case "border":
            return "var(--color-border)"
          case "border-subtle":
            return "var(--color-border-subtle)"
          case "border-strong":
            return "var(--color-border-strong)"
          default:
            return (
              (function (e, t) {
                let a = e.lastIndexOf("-")
                if (-1 === a) return
                let r = e.slice(0, a)
                if (i.has(r))
                  switch (e.slice(a + 1)) {
                    case "soft":
                      return `var(--${r}-${"light" === t ? "100" : "800"})`
                    case "subtle":
                      return `var(--${r}-${"light" === t ? "50" : "900"})`
                    default:
                      return
                  }
              })(e, t) ??
              k(e, "background") ??
              e
            )
        }
    }
    function v(e, t) {
      return null == t || !1 === t
        ? {}
        : !0 === t
          ? { border: "1px solid var(--color-border)" }
          : "string" == typeof t
            ? { border: t }
            : "number" == typeof t || "size" in t
              ? { border: x(t, e) }
              : {
                  borderBlock: x(t.y, e),
                  borderBlockEnd: x(t.bottom, e),
                  borderBlockStart: x(t.top, e),
                  borderInline: x(t.x, e),
                  borderInlineEnd: x(t.right, e),
                  borderInlineStart: x(t.left, e),
                }
    }
    function x(e, t) {
      if (null != e)
        return "number" == typeof e
          ? e
            ? `${e}px solid ${P()}`
            : "0"
          : `${e.size}px ${e.style ?? "solid"} ${P(y(t, e.color))}`
    }
    function P(e) {
      if (!e || "default" === e) return "var(--color-border)"
      switch (e) {
        case "subtle":
          return "var(--color-border-subtle)"
        case "strong":
          return "var(--color-border-strong)"
        case "info":
          return "var(--color-border-info-surface)"
        case "warning":
          return "var(--color-border-warning-surface)"
        case "caution":
          return "var(--color-border-caution-surface)"
        case "success":
          return "var(--color-border-success-surface)"
        case "danger":
          return "var(--color-border-danger-surface)"
        case "discovery":
          return "var(--color-border-discovery-surface)"
        default:
          return k(e, "border") ?? e
      }
    }
    function M(e) {
      if (e)
        switch (e) {
          case "default":
          case "prose":
            return "var(--color-text-prose)"
          case "primary":
            return "var(--color-text-primary)"
          case "emphasis":
            return "var(--color-text-emphasis)"
          case "secondary":
            return "var(--color-text-secondary)"
          case "tertiary":
            return "var(--color-text-tertiary)"
          case "success":
            return "var(--color-text-success)"
          case "info":
            return "var(--color-text-info)"
          case "warning":
            return "var(--color-text-warning)"
          case "caution":
            return "var(--color-text-caution)"
          case "danger":
            return "var(--color-text-danger)"
          case "discovery":
            return "var(--color-text-discovery)"
          default:
            return k(e, "foreground") ?? e
        }
    }
  },
  e7LJ(e, t, a) {
    var r = a("ABep"),
      n = a("zd8w")
    let s = n.createContext(null),
      o = n.createContext(null),
      i = () => {},
      l = n.createContext(i),
      c = n.createContext(null)
    a.d(
      t,
      {},
      {
        Dp: function ({ ui: e, formatMessage: t, logEvent: a, experiments: d, children: m }) {
          let u = n.useMemo(
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
            p = n.useMemo(
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
          return (0, r.jsx)(s, {
            value: e,
            children: (0, r.jsx)(o, {
              value: t ?? null,
              children: (0, r.jsx)(l, { value: u, children: (0, r.jsx)(c, { value: p, children: m }) }),
            }),
          })
        },
        O8: function () {
          let e = n.useContext(s)
          if (null === e) throw Error("useHostUI must be used within a TortillaProvider.")
          return e
        },
        oo: function () {
          let e = n.useContext(o)
          if (null === e) throw Error("useFormatMessage requires a TortillaProvider with formatMessage.")
          return e
        },
      },
    )
  },
  BI6E(e, t, a) {
    var r = a("Qgfj")
    let n = (0, r.YK)({
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
      s = (0, r.YK)({
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
      o = (0, r.YK)({
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
    a.d(t, {}, { T5: n, ho: o, xs: s })
  },
  IY5Q(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      s = a("m4Ym"),
      o = a("e7LJ"),
      i = a("on57"),
      l = a("Wf1j"),
      c = a("Sm6l"),
      d = a("JNtf"),
      m = a("mUDD"),
      u = a("bqtn"),
      p = a("HOLv"),
      f = a("bVeK"),
      h = a("X3K1"),
      g = a("BrP7"),
      w = a("zLIa"),
      k = a("OGl1"),
      y = a("yeh9"),
      b = a("vUg1"),
      v = a("isL5")
    let x = {
      Button: c.$,
      Input: ({ name: e, ...t }) => (0, r.jsx)(w.pd, { ...t, id: e, name: e }),
      Label: ({ htmlFor: e, ...t }) => (0, r.jsx)("label", { ...t, htmlFor: e }),
      Skeleton: ({ className: e }) => (0, r.jsx)(h.X, { as: "span", className: (0, i.A)("block", e), size: "custom" }),
      Dialog: function (e) {
        let t,
          a,
          s,
          o,
          i,
          l,
          c,
          u,
          p = (0, n.c)(16)
        ;(p[0] !== e
          ? (({ title: o, description: a, children: t, ...s } = e),
            (p[0] = e),
            (p[1] = t),
            (p[2] = a),
            (p[3] = s),
            (p[4] = o))
          : ((t = p[1]), (a = p[2]), (s = p[3]), (o = p[4])),
          p[5] !== o
            ? ((i = (0, r.jsx)(d.L3, { className: "sr-only", children: o })), (p[5] = o), (p[6] = i))
            : (i = p[6]))
        let f = a ?? o
        return (
          p[7] !== f
            ? ((l = (0, r.jsx)(d.rr, { className: "sr-only", children: f })), (p[7] = f), (p[8] = l))
            : (l = p[8]),
          p[9] !== t
            ? ((c = (0, r.jsx)(m.R4, { variant: "chatgpt", size: "full", children: t })), (p[9] = t), (p[10] = c))
            : (c = p[10]),
          p[11] !== s || p[12] !== i || p[13] !== l || p[14] !== c
            ? ((u = (0, r.jsxs)(d.lG, { ...s, children: [i, l, c] })),
              (p[11] = s),
              (p[12] = i),
              (p[13] = l),
              (p[14] = c),
              (p[15] = u))
            : (u = p[15]),
          u
        )
      },
      Tabs: g.t,
      Dropdown: { Root: u.Ab, Item: u.ms.Item },
      icons: {
        templateCreator: (e) => (0, r.jsx)(p.I, { asset: s.e, ...e }),
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
        document: k.Ug.artifactDocument,
        presentation: k.Ug.presentation,
        spreadsheet: k.Ug.spreadsheet,
        "google-docs": y.A,
        "google-slides": v.A,
        "google-sheets": b.A,
      },
    }
    a.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            a = (0, n.c)(3),
            { children: s } = e,
            i = (0, l.A)()
          return (
            a[0] !== s || a[1] !== i.formatMessage
              ? ((t = (0, r.jsx)(o.Dp, { ui: x, formatMessage: i.formatMessage, children: s })),
                (a[0] = s),
                (a[1] = i.formatMessage),
                (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
  YEZL(e, t, a) {
    var r = a("ABep"),
      n = a("s8wJ"),
      s = a("D3IP"),
      o = a("hrl5"),
      i = a("aicH"),
      l = a("cG4h"),
      c = a("Gx3J"),
      d = a("bVeK"),
      m = a("UxN3")
    let u = {
      add: (0, r.jsx)(m.b5, { icon: { assets: { 16: o.D, 20: i.w } } }),
      text: (0, r.jsx)(m.b5, { icon: { 16: d.K95, 20: d.T8H } }),
      image: (0, r.jsx)(m.b5, { icon: { 16: d.UJ6, 20: d.pYT } }),
      insert: (0, r.jsx)(m.b5, { icon: { assets: { 16: l.L, 20: c.O } } }),
      format: (0, r.jsx)(m.b5, { icon: { assets: { 16: n.C, 20: s.L } } }),
    }
    a.d(t, {}, { Y: u })
  },
  v6uO(e, t, a) {
    a.d(t, { a: () => m })
    var r = a("ABep"),
      n = a("QosV"),
      s = a("XSsU"),
      o = a("cJS3"),
      i = a("on57"),
      l = a("zd8w"),
      c = a("ZWS5"),
      d = a("UxN3")
    function m(e) {
      let t,
        a,
        m,
        u,
        p = (0, n.c)(8),
        { active: f, size: h } = e
      p[0] !== f ? ((t = { active: f, entering: !1 }), (p[0] = f), (p[1] = t)) : (t = p[1])
      let [g, w] = (0, l.useState)(t)
      g.active !== f && w({ active: f, entering: f })
      let k = g.entering && "entering-Dys815"
      return (
        p[2] !== k ? ((a = (0, i.A)("pointer-events-none shrink-0", k)), (p[2] = k), (p[3] = a)) : (a = p[3]),
        p[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { assets: { 16: (0, c.TE)(s.j), 20: (0, c.TE)(o.A) } }), (p[4] = m))
          : (m = p[4]),
        p[5] !== h || p[6] !== a
          ? ((u = (0, r.jsx)(d.b5, { className: a, icon: m, size: h })), (p[5] = h), (p[6] = a), (p[7] = u))
          : (u = p[7]),
        u
      )
    }
  },
  TPR0(e, t, a) {
    async function r(e, t, a) {
      if ("u" < typeof ImageDecoder) throw Error("GIF decoder unavailable")
      let r = new ImageDecoder({ data: await e.blob.arrayBuffer(), type: "image/gif", preferAnimation: !0 }),
        n = () => r.close()
      a?.addEventListener("abort", n, { once: !0 })
      try {
        ;(a?.throwIfAborted(), await r.tracks.ready)
        let n = new OffscreenCanvas(e.width, e.height),
          s = n.getContext("2d")
        if (r.tracks.selectedTrack?.frameCount !== e.frameCount || null == s)
          throw Error("GIF frame decoding unavailable")
        for (let o = e.start; o < e.end; o++) {
          a?.throwIfAborted()
          let { image: i } = await r.decode({ frameIndex: o })
          try {
            ;(s.clearRect(0, 0, e.width, e.height), s.drawImage(i, 0, 0))
            let r = await n.convertToBlob({ type: "image/png" })
            ;(a?.throwIfAborted(), t({ index: o, blob: r }))
          } finally {
            i.close()
          }
        }
      } finally {
        ;(a?.removeEventListener("abort", n), r.close())
      }
    }
    function n(e) {
      let t = Math.min(12, e)
      return Array.from({ length: t }, (a, r) => Math.round((r * (e - 1)) / Math.max(1, t - 1)))
    }
    function s(e, t) {
      return Math.max(20, Math.min(655350, 10 * Math.round(e / t / 10)))
    }
    function o(e, t) {
      let a = new Uint8Array(e),
        r = new DataView(e),
        n = new TextDecoder().decode(a.subarray(0, 6))
      if ("GIF87a" !== n && "GIF89a" !== n) throw Error("Invalid GIF header")
      let s = r.getUint16(6, !0),
        o = r.getUint16(8, !0)
      if (0 === s || 0 === o) throw Error("Invalid GIF dimensions")
      let i = 13,
        l = (e) => {
          e >= 128 && (i += 3 * 2 ** ((e % 8) + 1))
        },
        c = () => {
          for (;;) {
            let e = r.getUint8(i++)
            if (0 === e) return
            i += e
          }
        }
      l(r.getUint8(10))
      let d = [],
        m = [],
        u = null
      for (; i < a.length;) {
        let e = r.getUint8(i++)
        if (59 === e) return { width: s, height: o, frames: d, c2paRanges: m }
        if (33 === e) {
          let e = i - 1,
            t = r.getUint8(i++),
            n = 255 === t && 11 === r.getUint8(i) && "C2PA_GIF" === new TextDecoder().decode(a.subarray(i + 1, i + 9))
          if (249 === t) {
            if (4 !== r.getUint8(i) || 0 !== r.getUint8(i + 5)) throw Error("Invalid GIF graphics control extension")
            u = i + 2
          } else 1 === t && (u = null)
          ;(c(), n && m.push({ start: e, end: i }))
        } else if (44 === e) {
          let e = i - 1,
            a = r.getUint8(i + 8)
          ;((i += 9), l(a), i++, c())
          let n = null == u ? 0 : r.getUint16(u, !0)
          if ((d.push({ imageOffset: e, delayOffset: u, durationMs: n > 1 ? 10 * n : t }), d.length > 256))
            throw Error("GIF has too many frames to edit")
          u = null
        } else throw Error("Invalid GIF block")
      }
      throw Error("Truncated GIF")
    }
    ;("u" > typeof self &&
      "importScripts" in self &&
      "gif-frame-decoder" === self.name &&
      (self.onmessage = async ({ data: e }) => {
        try {
          await r(e, (e) => self.postMessage(e))
        } catch {
          self.postMessage(null)
        }
      }),
      a.d(
        t,
        {},
        {
          Kp: n,
          P_: async function (e, { signal: t, fallbackFrameDurationMs: a = 100, createWorker: s, onPreview: i } = {}) {
            let l
            if (
              (t?.throwIfAborted(),
              "u" < typeof ImageDecoder ||
                "u" < typeof OffscreenCanvas ||
                e.size > 0x4000000 ||
                !(await ImageDecoder.isTypeSupported("image/gif")))
            )
              return null
            let c = [],
              d = [],
              m = () => {
                c.forEach((e) => URL.revokeObjectURL(e.url))
              }
            try {
              let u = await e.arrayBuffer()
              t?.throwIfAborted()
              let { width: p, height: f, frames: h } = o(u, a),
                g = h.length
              if (g < 2 || g > 256 || p * f * g > 0x4000000) return null
              let w = n(g),
                k = Array(w.length).fill(null)
              ;(i?.(k.slice()), t?.throwIfAborted())
              let y = ({ index: e, blob: t }) => {
                  let a = URL.createObjectURL(t)
                  c[e] = { url: a, blob: t, durationMs: h[e].durationMs }
                  let r = w.indexOf(e)
                  ;-1 !== r && ((k[r] = a), i?.(k.slice()))
                },
                b = { blob: e, width: p, height: f, frameCount: g, start: 0, end: g }
              if (null == s) await r(b, y, t)
              else {
                let e = Math.min(4, g)
                await new Promise((a, r) => {
                  let n = () => r(Error("GIF decoding aborted"))
                  ;(t?.addEventListener("abort", n, { once: !0 }), (l = () => t?.removeEventListener("abort", n)))
                  let o = 0
                  for (let t = 0; t < e; t++) {
                    let n = s()
                    ;(d.push(n),
                      (n.onerror = n.onmessageerror = r),
                      (n.onmessage = ({ data: e }) => {
                        null == e ? r(Error("GIF frame decoding failed")) : (y(e), ++o === g && a())
                      }),
                      n.postMessage({ ...b, start: Math.floor((t * g) / e), end: Math.floor(((t + 1) * g) / e) }))
                  }
                })
              }
              return { width: p, height: f, frames: c, dispose: m }
            } catch {
              return (m(), t?.throwIfAborted(), null)
            } finally {
              for (let e of (l?.(), d)) e.terminate()
            }
          },
          Yb: s,
          bA: async function (e, t) {
            if (e.size > 0x4000000) throw Error("GIF is too large to read playback timing")
            let { frames: a } = o(await e.arrayBuffer(), 100)
            if (0 === a.length) throw Error("GIF has no frames")
            return a.reduce((e, a) => e + s(a.durationMs, t), 0) / a.length
          },
        },
      ))
  },
  jG6n(e, t, a) {
    var r = a("zTeN"),
      n = a("ASxG"),
      s = a("W0tK"),
      o = a("fXhT"),
      i = a("OWtl"),
      l = a("J9bg"),
      c = a("Kw4a")
    let d = ["to-do-list", "project-tracker"],
      m = (0, r.un)(i.u, ({ get: e }) => (e(c.wu) ? e(l.S, "4051280260") : void 0)),
      u = (0, r.un)(i.u, ({ get: e }) => (e(c.ou) ? e(l.S, "4051280260") : void 0)),
      p = n.object({
        submitLabel: n.string().trim().min(1).optional(),
        preparingLabel: n.string().trim().min(1).optional(),
        freeformPlaceholder: n.string().trim().min(1).optional(),
        questions: n
          .array(
            n.object({
              question: n.string().trim().min(1),
              answerLabel: n.string().trim().min(1),
              isOther: n.boolean().optional(),
              options: n
                .array(n.object({ id: n.string().trim().min(1), value: n.string().trim().min(1) }))
                .refine(
                  (e) => new Set(e.map(({ id: e }) => e)).size === e.length,
                  "Each option ID in a question must be unique",
                ),
            }),
          )
          .min(1),
      }),
      f = n.object({
        id: n.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: n.string().trim().min(1),
        prompt: n.string().trim().min(1),
        prefillPrompt: n.string().trim().min(1),
        previewMarkdown: n.string().trim().min(1).optional(),
        previewDocument: n
          .array(n.object({ kind: n.literal("markdown"), markdown: n.string().trim().min(1), layout: o.wS.optional() }))
          .min(1)
          .optional(),
        setupQuestion: n.string().trim().min(1).nullish(),
        followUp: p.nullish(),
      }),
      h = n.array(f.partial({ title: !0, prompt: !0, prefillPrompt: !0, previewMarkdown: !0 })),
      g = n
        .array(n.string())
        .min(4)
        .max(10)
        .refine((e) => new Set(e).size === e.length && d.every((t) => e.includes(t))),
      w = n.object({
        templates: h.optional(),
        templatesByLocale: n.record(n.string().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/), h).optional(),
      })
    a.d(
      t,
      {},
      {
        CQ: g,
        Hs: function (e, t) {
          let a = w.safeParse(t)
          if (!a.success) return
          if (a.data.templates?.length === 0) return []
          let r = (0, s.bW)(e) ?? "en",
            n = r.split("-")[0],
            o =
              a.data.templatesByLocale?.[r] ?? a.data.templatesByLocale?.[n] ?? ("en" === n ? a.data.templates : void 0)
          if (null != o && new Set(o.map(({ id: e }) => e)).size === o.length) return o
        },
        WN: u,
        ql: m,
        xN: h,
        z4: f,
      },
    )
  },
  dUuO(e, t, a) {
    var r = a("bRXx"),
      n = a("Qgfj"),
      s = a("jG6n")
    let o = s.z4.required({ previewDocument: !0 }).array()
    function i(e) {
      let t = e.flatMap((e) => (0, r.CyG)(e.markdown).map((t) => ({ ...e, markdown: t })))
      return { previewMarkdown: t.map(({ markdown: e }) => e).join("\n\n"), previewDocument: t }
    }
    let l = (0, n.YK)({
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
          let a = (0, s.Hs)(e.locale, t)
          if (a?.length === 0) return []
          let r = { kind: "icon", value: "book", color: "black" },
            n = [
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
              n
                .filter(({ id: e }) => "project-home" !== e && "faq" !== e)
                .map((e) => ({ ...e, ...i(e.previewDocument) }))
          if (null == a) return c()
          let d = o.safeParse(
            a.map((t) => {
              let a = n.find(({ id: e }) => e === t.id),
                r = null == t.prompt ? a?.setupQuestion : void 0,
                s =
                  t.prefillPrompt ??
                  (null == t.prompt ? a?.prefillPrompt : void 0) ??
                  e.formatMessage(l.customPrefillPrompt)
              return {
                ...a,
                ...t,
                prefillPrompt: s,
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
                symbol: n.find(({ id: t }) => t === e.id)?.symbol ?? r,
                ...i(e.previewDocument),
              }))
            : c()
        },
      },
    )
  },
  o72y(e, t, a) {
    var r = a("zTeN"),
      n = a("DBCl"),
      s = a("SPnB"),
      o = a("eFn4"),
      i = a("Ghh3"),
      l = a("e1xH"),
      c = a("pyoT"),
      d = a("OWtl"),
      m = a("JYRT")
    let u = (0, r.un)(d.u, ({ get: e }) => e(l.pagesEnabled$) && "allowed" === e(o.lN).status),
      p = (0, r.RD)(d.u, ({ get: e, scope: t }) => {
        let a = e(c.spaceAccountId$),
          r = e(s.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["space", "personalized-pages", a, r],
          enabled: e(u) && null != a && null != r,
          staleTime: 6e4,
          gcTime: 0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == a || null == r) throw Error("space_account_unavailable")
            let s = (0, c.watchSpaceAccount)(t, a, r),
              o = AbortSignal.any([e, s.signal])
            try {
              let e = await i.Request.safeGet("/pages/suggestions", {
                additionalHeaders: { "ChatGPT-Account-ID": a, [n.zBc]: a },
                signal: o,
              })
              return (o.throwIfAborted(), e)
            } finally {
              s.stop()
            }
          },
        }
      }),
      f = (0, r.A4)(
        d.u,
        (e) => Date.parse(e) > Date.now(),
        (e, { set: t }) => {
          let a,
            r = () => {
              let n = Date.parse(e) - Date.now()
              ;(t(n > 0), n > 0 && (a = setTimeout(r, Math.min(n, 0x7fffffff))))
            }
          return (r(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      h = (0, r.i1)(d.u, (e, { get: t }) => {
        if (!t(u)) return
        let a = t(m.X, "3798925676")
        if (a?.value["getting-started" === e ? "show_in_getting_started" : "show_in_template_modal"] !== !0) return
        let r = t(p)
        return r.isSuccess ? r.data.suggestions.filter((e) => t(f, e.expires_at)).slice(0, 3) : void 0
      }),
      g = (0, r.un)(
        d.u,
        ({ get: e }) => e(u) && e(m.X, "3798925676")?.value.show_in_template_modal === !0 && e(p).isLoading,
      )
    a.d(t, {}, { BE: g, fH: u, ps: p, x5: h })
  },
  AOG7(e, t, a) {
    var r = a("QosV"),
      n = a("T0Rc"),
      s = a("EOo5"),
      o = a("rvFo"),
      i = a("HFSu"),
      l = a("GEsy"),
      c = a("eShZ")
    async function d(e, t, a, { includeProfilePhotos: r = !1, includeTotal: n, limit: s = 10 } = {}) {
      return (
        await i.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: s, offset: 0, query: t, include_profile_photos: r, include_total: n },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: d,
        C4: async function (e, t, a) {
          let r = t.trim().toLowerCase(),
            n = await d(e, r, a)
          return n.find((e) => e.email?.trim().toLowerCase() === r)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            c,
            d,
            m,
            u,
            p,
            f = (0, r.c)(18)
          f[0] !== t ? ((a = void 0 === t ? {} : t), (f[0] = t), (f[1] = a)) : (a = f[1])
          let { includeMemberCounts: h } = a,
            g = void 0 !== h && h,
            { accountId: w, authMethod: k } = (0, s.As)()
          f[2] !== e ? ((c = e.trim()), (f[2] = e), (f[3] = c)) : (c = f[3])
          let y = c,
            b = (0, l.o)(y, 150)
          ;(f[4] !== g ? ((d = g ? ["member-counts"] : []), (f[4] = g), (f[5] = d)) : (d = f[5]),
            f[6] !== w || f[7] !== y || f[8] !== d
              ? ((m = ["workspace-groups", w, y, ...d]), (f[6] = w), (f[7] = y), (f[8] = d), (f[9] = m))
              : (m = f[9]))
          let v = ("chatgpt" === k || "chatgptAuthTokens" === k) && null != w && y.length > 0 && y === b
          return (
            f[10] !== w || f[11] !== g || f[12] !== y
              ? ((u = async (e) => {
                  let { signal: t } = e
                  if (null == w) throw Error("account id is required")
                  return (
                    await i.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: w },
                        query: { limit: 10, offset: 0, query: y, include_member_counts: g, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (f[10] = w),
                (f[11] = g),
                (f[12] = y),
                (f[13] = u))
              : (u = f[13]),
            f[14] !== m || f[15] !== v || f[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: v,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: o.D.ONE_MINUTE,
                }),
                (f[14] = m),
                (f[15] = v),
                (f[16] = u),
                (f[17] = p))
              : (p = f[17]),
            (0, n.I)(p)
          )
        },
        Nv: function (e, t) {
          let a,
            i,
            c,
            m,
            u,
            p,
            f = (0, r.c)(18)
          f[0] !== t ? ((a = void 0 === t ? {} : t), (f[0] = t), (f[1] = a)) : (a = f[1])
          let { includeProfilePhotos: h } = a,
            g = void 0 !== h && h,
            { accountId: w, authMethod: k } = (0, s.As)()
          f[2] !== e ? ((i = e.trim()), (f[2] = e), (f[3] = i)) : (i = f[3])
          let y = i,
            b = (0, l.o)(y, 150)
          ;(f[4] !== g ? ((c = g ? ["profile-photos"] : []), (f[4] = g), (f[5] = c)) : (c = f[5]),
            f[6] !== w || f[7] !== y || f[8] !== c
              ? ((m = ["workspace-users", w, y, ...c]), (f[6] = w), (f[7] = y), (f[8] = c), (f[9] = m))
              : (m = f[9]))
          let v = ("chatgpt" === k || "chatgptAuthTokens" === k) && null != w && y.length > 0 && y === b
          return (
            f[10] !== w || f[11] !== g || f[12] !== y
              ? ((u = (e) => {
                  let { signal: t } = e
                  if (null == w) throw Error("account id is required")
                  return d(w, y, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: g })
                }),
                (f[10] = w),
                (f[11] = g),
                (f[12] = y),
                (f[13] = u))
              : (u = f[13]),
            f[14] !== m || f[15] !== v || f[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: v,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: o.D.ONE_MINUTE,
                }),
                (f[14] = m),
                (f[15] = v),
                (f[16] = u),
                (f[17] = p))
              : (p = f[17]),
            (0, n.I)(p)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await i.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.fk && 404 === e.status)) throw e
          }
          return d(e, t, a)
        },
      },
    )
  },
  aAsK(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      s = a("hwkA"),
      o = a("IUMq"),
      i = a("slpy"),
      l = a("on57"),
      c = a("oyxz"),
      d = a("bVeK"),
      m = a("vtqG")
    function u(e) {
      return e.stopPropagation()
    }
    a.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            a,
            p,
            f,
            h,
            g,
            w,
            k,
            y,
            b,
            v,
            x = (0, n.c)(48),
            {
              alignOffset: P,
              options: M,
              disabled: j,
              footer: T,
              indicatorVariant: S,
              renderLabel: C,
              mixed: I,
              opticallyAlign: q,
              removeLabel: A,
              sideOffset: D,
              size: L,
              variant: R,
              value: F,
              onChange: E,
              onRemoveAccess: H,
            } = e,
            U = void 0 !== j && j,
            N = void 0 === S ? "checkmark" : S,
            O = void 0 !== I && I,
            z = void 0 === R ? "default" : R,
            G = void 0 === L ? "sm" : L
          "field" === z ? (G = "xl") : "audienceReview" === z && (G = "lg")
          let W = "audienceReview" === z && m.A.permission
          x[0] !== W ? ((t = (0, l.A)(W, "enabled:text-default")), (x[0] = W), (x[1] = t)) : (t = x[1])
          let V = "field" === z ? "outline" : "ghost",
            _ = "field" !== z,
            Y = "inline" === z ? "2xs" : void 0
          ;(x[2] !== O || x[3] !== C || x[4] !== F
            ? ((a = O
                ? (0, r.jsx)(c.A, {
                    id: "shareDialog.mixedRoles",
                    defaultMessage: "Mixed",
                    description: "Role selector label when selected sharing recipients have different permissions",
                  })
                : C(F)),
              (x[2] = O),
              (x[3] = C),
              (x[4] = F),
              (x[5] = a))
            : (a = x[5]),
            x[6] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, r.jsx)(d.Aq_, {})), (x[6] = p)) : (p = x[6]),
            x[7] !== U ||
            x[8] !== q ||
            x[9] !== Y ||
            x[10] !== a ||
            x[11] !== t ||
            x[12] !== V ||
            x[13] !== _ ||
            x[14] !== G
              ? ((f = (0, r.jsxs)(s.$, {
                  className: t,
                  color: "secondary",
                  variant: V,
                  size: G,
                  iconSize: "sm",
                  pill: _,
                  gutterSize: Y,
                  opticallyAlign: q,
                  disabled: U,
                  children: [a, p],
                })),
                (x[7] = U),
                (x[8] = q),
                (x[9] = Y),
                (x[10] = a),
                (x[11] = t),
                (x[12] = V),
                (x[13] = _),
                (x[14] = G),
                (x[15] = f))
              : (f = x[15]),
            x[16] !== U || x[17] !== f
              ? ((h = (0, r.jsx)(o.W.Trigger, { disabled: U, children: f })), (x[16] = U), (x[17] = f), (x[18] = h))
              : (h = x[18]))
          let B = O ? "" : F
          if (
            (x[19] !== E || x[20] !== M
              ? ((g = (e) => {
                  let t = M.find((t) => t.value === e)
                  null != t && E?.(t.value)
                }),
                (x[19] = E),
                (x[20] = M),
                (x[21] = g))
              : (g = x[21]),
            x[22] !== U || x[23] !== N || x[24] !== M || x[25] !== C)
          ) {
            let e
            ;(x[27] !== U || x[28] !== N || x[29] !== C
              ? ((e = (e) =>
                  (0, r.jsx)(
                    i.m,
                    {
                      content: e.tooltipText,
                      children: (0, r.jsx)(o.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: N,
                        value: e.value,
                        disabled: U || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, r.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, r.jsx)("span", { children: C(e.value) }),
                            null == e.description
                              ? null
                              : (0, r.jsx)("span", {
                                  className: "text-sm text-pretty whitespace-normal text-secondary",
                                  children: e.description,
                                }),
                          ],
                        }),
                      }),
                    },
                    e.value,
                  )),
                (x[27] = U),
                (x[28] = N),
                (x[29] = C),
                (x[30] = e))
              : (e = x[30]),
              (w = M.map(e)),
              (x[22] = U),
              (x[23] = N),
              (x[24] = M),
              (x[25] = C),
              (x[26] = w))
          } else w = x[26]
          return (
            x[31] !== B || x[32] !== g || x[33] !== w
              ? ((k = (0, r.jsx)(o.W.RadioGroup, { value: B, onChange: g, children: w })),
                (x[31] = B),
                (x[32] = g),
                (x[33] = w),
                (x[34] = k))
              : (k = x[34]),
            x[35] !== U || x[36] !== H || x[37] !== A
              ? ((y =
                  null == H
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(o.W.Separator, {}),
                          (0, r.jsx)(o.W.Item, { color: "danger", disabled: U, onSelect: H, children: A }),
                        ],
                      })),
                (x[35] = U),
                (x[36] = H),
                (x[37] = A),
                (x[38] = y))
              : (y = x[38]),
            x[39] !== P || x[40] !== T || x[41] !== D || x[42] !== k || x[43] !== y
              ? ((b = (0, r.jsxs)(o.W.Content, {
                  align: "end",
                  alignOffset: P,
                  minWidth: "auto",
                  sideOffset: D,
                  children: [k, y, T],
                })),
                (x[39] = P),
                (x[40] = T),
                (x[41] = D),
                (x[42] = k),
                (x[43] = y),
                (x[44] = b))
              : (b = x[44]),
            x[45] !== h || x[46] !== b
              ? ((v = (0, r.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: u,
                  children: (0, r.jsxs)(o.W, { children: [h, b] }),
                })),
                (x[45] = h),
                (x[46] = b),
                (x[47] = v))
              : (v = x[47]),
            v
          )
        },
      },
    )
  },
  glqn(e, t, a) {
    var r = a("aAsK")
    a.d(t, { e: () => r.e })
  },
  LKbA(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      s = a("oyxz")
    a.d(
      t,
      {},
      {
        u: function (e) {
          let t = (0, n.c)(5),
            { permission: a } = e
          switch (a) {
            case "viewer": {
              let e
              return (
                t[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, {
                      id: "shareDialog.role.viewer",
                      defaultMessage: "Viewer",
                      description: "Sharing permission for someone who can view content but cannot change it",
                    })),
                    (t[0] = e))
                  : (e = t[0]),
                e
              )
            }
            case "commenter": {
              let e
              return (
                t[1] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, {
                      id: "shareDialog.role.commenter",
                      defaultMessage: "Commenter",
                      description: "Sharing permission for someone who can view and comment without editing content",
                    })),
                    (t[1] = e))
                  : (e = t[1]),
                e
              )
            }
            case "editor": {
              let e
              return (
                t[2] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, {
                      id: "shareDialog.role.editor",
                      defaultMessage: "Editor",
                      description: "Sharing permission for someone who can edit content",
                    })),
                    (t[2] = e))
                  : (e = t[2]),
                e
              )
            }
            case "owner": {
              let e
              return (
                t[3] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, {
                      id: "shareDialog.role.owner",
                      defaultMessage: "Owner",
                      description: "Sharing permission identifying someone who owns content and controls its access",
                    })),
                    (t[3] = e))
                  : (e = t[3]),
                e
              )
            }
            case void 0: {
              let e
              return (
                t[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, {
                      id: "shareDialog.role.unknown",
                      defaultMessage: "Unknown access",
                      description:
                        "Sharing permission whose role is not recognized; do not imply that the person has Viewer access",
                    })),
                    (t[4] = e))
                  : (e = t[4]),
                e
              )
            }
          }
        },
      },
    )
  },
  J9bg(e, t, a) {
    var r = a("D7Ms"),
      n = a("zTeN"),
      s = a("OWtl"),
      o = a("EWIu"),
      i = a("JYRT"),
      l = a("OMIV")
    let c = (0, n.vU)(s.u, (e, { get: t }) => {
        let a = t(l.M9),
          n = t(i.X, e)
        return {
          queryKey: ["deferred-statsig-config", e, a?.getContext().user, n?.__evaluation],
          queryFn: null == a ? r.hT : () => (0, o.d1)(a, e),
          staleTime: 1 / 0,
          retry: 2,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          refetchOnReconnect: !0,
        }
      }),
      d = (0, n.i1)(s.u, (e, { get: t }) => {
        let a = t(l.M9),
          r = t(i.X, e)
        return (0, o.tA)(a, e) ? t(c, e).data : r
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
  TbyS(e, t, a) {
    function r(e) {
      let t = [0],
        a = e.indexOf("\r"),
        r = e.indexOf("\n"),
        n = 0,
        s = 0
      for (; -1 !== a || -1 !== r;) {
        let o
        if (
          (-1 !== a && (-1 === r || a < r)
            ? r === a + 1
              ? ((o = r + 1), (a = e.indexOf("\r", o)), (r = e.indexOf("\n", o)))
              : ((o = a + 1), (a = e.indexOf("\r", o)))
            : ((o = r + 1), (r = e.indexOf("\n", o))),
          t.push(o),
          4 == ++s)
        ) {
          if (o - n <= 40) {
            for (let a = o; a < e.length; a++) {
              let r = e.charCodeAt(a)
              ;(10 === r || 13 === r) &&
                (13 === r && a + 1 < e.length && 10 === e.charCodeAt(a + 1) && a++, t.push(a + 1))
            }
            return t
          }
          ;((n = o), (s = 0))
        }
      }
      return t
    }
    a.d(
      t,
      {},
      {
        Cl: function (e) {
          let t = 0
          for (let a = 0; a < e.length; a++) {
            let r = e.charCodeAt(a)
            ;(10 === r || 13 === r) && (13 === r && a + 1 < e.length && 10 === e.charCodeAt(a + 1) && a++, t++)
          }
          return t
        },
        sX: function (e) {
          let t = r(e)
          return Array.from({ length: t.length }, (a, r) => {
            let n = t[r],
              s = t[r + 1] ?? e.length
            return e.slice(n, s)
          })
        },
        sr: r,
      },
    )
  },
  zxm1(e) {
    e.exports = JSON.parse(
      '{"mainAssemblyName":"Walnut","resources":{"hash":"sha256-1mImMevW6NFjp4U9gvhX/kk7FS5c7x2tTPjvmUtn1O4=","fingerprinting":{"DocumentFormat.OpenXml.Framework.g5yu0rfk25.wasm":"DocumentFormat.OpenXml.Framework.wasm","DocumentFormat.OpenXml.h6kbakj7wr.wasm":"DocumentFormat.OpenXml.wasm","Google.Protobuf.8d2lzw87x1.wasm":"Google.Protobuf.wasm","System.Collections.Concurrent.cjd27rh7s0.wasm":"System.Collections.Concurrent.wasm","System.Collections.NonGeneric.wsc9k4acj7.wasm":"System.Collections.NonGeneric.wasm","System.Collections.Specialized.5d5nttl3p6.wasm":"System.Collections.Specialized.wasm","System.Collections.o00nxj682q.wasm":"System.Collections.wasm","System.ComponentModel.Primitives.n3dpt9xx77.wasm":"System.ComponentModel.Primitives.wasm","System.ComponentModel.TypeConverter.eysnozu5ev.wasm":"System.ComponentModel.TypeConverter.wasm","System.ComponentModel.8n8oss9x56.wasm":"System.ComponentModel.wasm","System.Console.lco12sq5z1.wasm":"System.Console.wasm","System.Diagnostics.DiagnosticSource.5u57xtvfrs.wasm":"System.Diagnostics.DiagnosticSource.wasm","System.IO.Compression.o7mzt31aau.wasm":"System.IO.Compression.wasm","System.IO.Packaging.ejb20qp7p2.wasm":"System.IO.Packaging.wasm","System.IO.Pipelines.e89jeiora8.wasm":"System.IO.Pipelines.wasm","System.Linq.Expressions.rh77womlfs.wasm":"System.Linq.Expressions.wasm","System.Linq.tasij3h9mo.wasm":"System.Linq.wasm","System.Memory.119rs1wset.wasm":"System.Memory.wasm","System.Net.Http.aox7xu4mk4.wasm":"System.Net.Http.wasm","System.Net.Primitives.k2eesanjj3.wasm":"System.Net.Primitives.wasm","System.ObjectModel.cd71w6ypgt.wasm":"System.ObjectModel.wasm","System.Private.CoreLib.j99cjki0oo.wasm":"System.Private.CoreLib.wasm","System.Private.Uri.ru3chaj5kv.wasm":"System.Private.Uri.wasm","System.Private.Xml.Linq.qsntz54oqq.wasm":"System.Private.Xml.Linq.wasm","System.Private.Xml.uoqjdb94ld.wasm":"System.Private.Xml.wasm","System.Runtime.InteropServices.JavaScript.zi15vkd1le.wasm":"System.Runtime.InteropServices.JavaScript.wasm","System.Security.Cryptography.d74r2hwnb0.wasm":"System.Security.Cryptography.wasm","System.Text.Encodings.Web.75kg6u2l6v.wasm":"System.Text.Encodings.Web.wasm","System.Text.Json.21z7sygn3w.wasm":"System.Text.Json.wasm","System.Text.RegularExpressions.9tttm0fo5y.wasm":"System.Text.RegularExpressions.wasm","System.fuo59yvmx8.wasm":"System.wasm","System.Xml.Linq.om7otr7kgw.wasm":"System.Xml.Linq.wasm","Walnut.88tg5go8nn.wasm":"Walnut.wasm","dotnet.native.5xpgy29gky.js":"dotnet.native.js","dotnet.native.qiss7bucq6.wasm":"dotnet.native.wasm","dotnet.js":"dotnet.js","dotnet.runtime.qa25pgzyet.js":"dotnet.runtime.js"},"jsModuleNative":{"dotnet.native.5xpgy29gky.js":"sha256-OSHwI7X2oqdsZkrBScGRAwUfpideYsg4sja2e0IN/8M="},"jsModuleRuntime":{"dotnet.runtime.qa25pgzyet.js":"sha256-4kOU7tA6RzZadM/Bp0bGS4APXC7Z7XfrXpcFWsH0znc="},"wasmNative":{"dotnet.native.qiss7bucq6.wasm":"sha256-ni2iF5xlbnKl/r1GWY9DD2QG7PieeWPHQsVGTy9NnDo="},"coreAssembly":{"System.Private.CoreLib.j99cjki0oo.wasm":"sha256-GWNkCcHrDULlVDTNHGmQYUB3ZZL50oWFfrKHFniDZfk=","System.Runtime.InteropServices.JavaScript.zi15vkd1le.wasm":"sha256-BQrut3m0JJiF3hDcnrePJLm7Q39jfgyzTJnc9oahaRY="},"assembly":{"DocumentFormat.OpenXml.Framework.g5yu0rfk25.wasm":"sha256-ZERaH37ar9c0uEKNi/ZeaqGLboFX4V68YH2O3LXK76I=","DocumentFormat.OpenXml.h6kbakj7wr.wasm":"sha256-6UTr2M00525xFsKn0KRfiOV+9sTsgYkgWm3ouqJ9P8U=","Google.Protobuf.8d2lzw87x1.wasm":"sha256-PMIF7Me5uV0hwLl5fT8KMoIC7s2ynB1ZIjoNJ5lSazE=","System.Collections.Concurrent.cjd27rh7s0.wasm":"sha256-+Mu7CeRRtx+CUKcqSvIAPgGebNtkO6r39tEsLZ3pWdk=","System.Collections.NonGeneric.wsc9k4acj7.wasm":"sha256-8JJdYqpLcP/TKF/2K723TfMqfHGLXaczxXijU+cvNPM=","System.Collections.Specialized.5d5nttl3p6.wasm":"sha256-6Vu03Pi5Qw9T/eeCr4UgbN86jH3VkrjAVcjmIciQjy0=","System.Collections.o00nxj682q.wasm":"sha256-2Kw+WgeaYNo47VCOIqtjFuDdcEDuV/s+cOG5MZp3fAY=","System.ComponentModel.Primitives.n3dpt9xx77.wasm":"sha256-k19TcZD5VrBhq8OsliuCwY4ouKHHGt6kEAJ+qm3gbxk=","System.ComponentModel.TypeConverter.eysnozu5ev.wasm":"sha256-VpZxxaVsuodulWxzGHTVDkOyB6aV1i4cPDXuIY8CfEM=","System.ComponentModel.8n8oss9x56.wasm":"sha256-xJ0T1E2ZAvl6tcGc9MmGDrjbEt3GILbIxCWakjm4XpA=","System.Console.lco12sq5z1.wasm":"sha256-hUMU7Z8kjp4+x9L1EVHch7VrSB3MqC7gn3hEiRCEgxI=","System.Diagnostics.DiagnosticSource.5u57xtvfrs.wasm":"sha256-TR5r1aVaVhtfyIgjj5aGLxV3DazO0MlxqVktKGcmwIk=","System.IO.Compression.o7mzt31aau.wasm":"sha256-zOvPN2HF6Fz7BV9RlFmEGGnZSWIFXYun3BX886Phzlk=","System.IO.Packaging.ejb20qp7p2.wasm":"sha256-FmH8uRx5Ltr4iImKrvn8KFhC0qZ863olZEkXoHrw1Ak=","System.IO.Pipelines.e89jeiora8.wasm":"sha256-fksIdYi88u1MyIndR0m0ySSNPhWAeLm6wLYDBx6UjIY=","System.Linq.Expressions.rh77womlfs.wasm":"sha256-Ub5BC8sIlOCpGM4utzEoZSqXMqZgLmdVzoUMDmYFZlU=","System.Linq.tasij3h9mo.wasm":"sha256-xY6aNawaV1lpEYg80oYr+VPZDBblndy8dmKnhV2mmGQ=","System.Memory.119rs1wset.wasm":"sha256-dabupsOiz6Y5QH99o8kXkuW+8I6j9MyVGD2iuHBw8aU=","System.Net.Http.aox7xu4mk4.wasm":"sha256-Ol/c7pJCZSJdAIBJ1OT5ahujktRoAwRgJJ9t4sPehfs=","System.Net.Primitives.k2eesanjj3.wasm":"sha256-vHJ6IUj9QVJprEM//PveTgjY6YMaZo3/RylrsmQWT/k=","System.ObjectModel.cd71w6ypgt.wasm":"sha256-cMwCrXRfzve+VUwCi6HKLFGKnkRAVtUYp81iYe9T0dY=","System.Private.Uri.ru3chaj5kv.wasm":"sha256-fdijGtJSlFfANXtLDLFM/VRcZquyhEbpRQ1Cac72ZgE=","System.Private.Xml.Linq.qsntz54oqq.wasm":"sha256-Rmtg5xZvgXvf5WH8QI+Mr2WzRvX2JUgls55AFARmG2M=","System.Private.Xml.uoqjdb94ld.wasm":"sha256-IinGzQEpnZLSBkIefSwUJiFyVvinPm2kBXhmq3Nammw=","System.Security.Cryptography.d74r2hwnb0.wasm":"sha256-CTTAdrd+GfYZhrfyOJDUeCDm/MJe46THP+mvGsYT0l0=","System.Text.Encodings.Web.75kg6u2l6v.wasm":"sha256-+ydgAHlzHgsHEUHknUEWpyaB/IE3IRWdvt3d+NKT7IQ=","System.Text.Json.21z7sygn3w.wasm":"sha256-6i6Xt3seb/2Dd5pLc2Ig5O7MCNI2Ljmrdjm8eIctjvY=","System.Text.RegularExpressions.9tttm0fo5y.wasm":"sha256-LQJuf2iuE0tYyN6hPDgrT7Qd+MMWn83y4RcsNa2MomA=","System.fuo59yvmx8.wasm":"sha256-+RGeMNzJKSWnf53s3f9WD9VoxGZWUh51oZnEQzh2PLk=","System.Xml.Linq.om7otr7kgw.wasm":"sha256-YMox8cW30CHonUboEk+lHP2unLtoIsGtV7uYOl9lQZY=","Walnut.88tg5go8nn.wasm":"sha256-+NzEF+roX3V3lSE4W3MyOQDuyV04cKljnZm3o5bA8Bo="}},"debugLevel":0,"linkerEnabled":true,"globalizationMode":"invariant"}',
    )
  },
}
//# sourceMappingURL=227880.c926d0dda4.js.map
