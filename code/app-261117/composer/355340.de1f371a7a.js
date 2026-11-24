export const __rspack_esm_ids = [355340]
export const __webpack_modules__ = {
  nDjx(e, t, a) {
    e.exports = a.p + "assets/appshot-logo.f0152cb4dd.png"
  },
  RWvA(e, t, a) {
    a.d(
      t,
      {},
      {
        c: function (e, t) {
          return e instanceof Error &&
            "code" in e &&
            "file_attachment_too_large" === e.code &&
            "maximumSizeBytes" in e &&
            "number" == typeof e.maximumSizeBytes
            ? t.formatMessage(
                {
                  id: "composer.fileAttachment.uploadError.fileTooLarge",
                  defaultMessage: "File is too large to upload (maximum {maximumFileSize, number} MB)",
                },
                { maximumFileSize: e.maximumSizeBytes / 1048576 },
              )
            : t.formatMessage({ id: "composer.fileAttachment.uploadError", defaultMessage: "Unable to upload file" })
        },
      },
    )
  },
  ke3i(e, t, a) {
    var i = a("qmMi"),
      n = a("OWtl"),
      o = a("tl5a"),
      r = a("vdpW")
    let l = (0, i.i1)(n.u, (e, { get: t }) => (null == e ? null : t(r._2, { hostId: t(o.qX, e), threadId: e }))),
      s = (0, i.i1)(n.u, (e, { get: t }) => null != e && t(r.as, { hostId: t(o.qX, e), threadId: e })),
      c = (0, i.i1)(n.u, (e, { get: t }) => t(r.Ko, t(l, e))?.params.serviceTier),
      u = (0, i.i1)(n.u, (e, { get: t }) => {
        let a = t(r.Ko, t(l, e))
        return a?.permissionParamsSource === "inferred" ? null : (a?.params ?? null)
      })
    a.d(t, {}, { Bs: s, G2: c, MH: u })
  },
  ycOY(e, t, a) {
    let i = "Please implement the plan.",
      n = "PLEASE IMPLEMENT THIS PLAN:"
    a.d(
      t,
      {},
      {
        BM: n,
        BR: i,
        yd: function (e) {
          return e === i || e.startsWith(n)
        },
      },
    )
  },
  qprd(e, t, a) {
    a.d(t, { n: () => s })
    var i = a("ABep"),
      n = a("QosV"),
      o = a("nDjx"),
      r = a("wwME")
    a("zd8w")
    var l = (e) =>
      (0, i.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 88,
        height: 77,
        viewBox: "0 0 88 77",
        fill: "none",
        ...e,
        children: [
          (0, i.jsx)("rect", { x: 16, y: 11, width: 56, height: 56, rx: 10, fill: "var(--color-surface)" }),
          (0, i.jsxs)("g", {
            transform: "translate(0 -5.5) scale(4.4)",
            children: [
              (0, i.jsx)("path", {
                d: "M2.0835 11.626C2.56664 11.626 2.95832 12.0179 2.9585 12.501V12.668C2.9585 13.3822 2.95931 13.8654 2.98975 14.2383C3.01935 14.6006 3.07245 14.7818 3.13525 14.9053C3.29105 15.211 3.54043 15.4604 3.84619 15.6162C3.96966 15.679 4.15089 15.7321 4.51318 15.7617C4.88611 15.7922 5.36926 15.793 6.0835 15.793H6.25049C6.73359 15.7931 7.12549 16.1848 7.12549 16.668C7.12549 17.1511 6.73359 17.5428 6.25049 17.543H6.0835C5.39804 17.543 4.83132 17.5435 4.37061 17.5059C3.89961 17.4674 3.46257 17.3844 3.05127 17.1748C2.41633 16.8513 1.90021 16.3351 1.57666 15.7002C1.36709 15.2889 1.28409 14.8519 1.24561 14.3809C1.20799 13.9201 1.2085 13.3534 1.2085 12.668V12.501C1.20867 12.0179 1.60036 11.626 2.0835 11.626Z",
                fill: "var(--color-chart-blue)",
              }),
              (0, i.jsx)("path", {
                d: "M17.9175 11.626C18.4002 11.6264 18.7923 12.0181 18.7925 12.501V12.668C18.7925 13.3534 18.793 13.9202 18.7554 14.3809C18.7169 14.8518 18.6338 15.2889 18.4243 15.7002C18.1009 16.335 17.5844 16.8512 16.9497 17.1748C16.5385 17.3843 16.1012 17.4674 15.6304 17.5059C15.1698 17.5435 14.6027 17.543 13.9175 17.543H13.7505C13.2672 17.543 12.8755 17.1512 12.8755 16.668C12.8755 16.1847 13.2672 15.793 13.7505 15.793H13.9175C14.6315 15.793 15.115 15.7922 15.4878 15.7617C15.85 15.7321 16.0314 15.679 16.1548 15.6162C16.4604 15.4604 16.709 15.2109 16.8647 14.9053C16.9276 14.7818 16.9816 14.6007 17.0112 14.2383C17.0417 13.8654 17.0425 13.3822 17.0425 12.668V12.501C17.0427 12.0179 17.4344 11.626 17.9175 11.626Z",
                fill: "var(--color-chart-blue)",
              }),
              (0, i.jsx)("path", {
                d: "M14.3765 5.24609C14.7142 4.90058 15.2682 4.89392 15.6138 5.23145C15.9593 5.56914 15.9659 6.12314 15.6284 6.46875L15.3667 6.73535L15.6284 7.00391C15.9658 7.34938 15.9598 7.90348 15.6147 8.24121C15.2694 8.57878 14.7153 8.5725 14.3774 8.22754L14.1431 7.98731L13.936 8.2002C13.5982 8.54528 13.0442 8.55148 12.6987 8.21387C12.3535 7.87611 12.3475 7.32207 12.6851 6.97656L12.9194 6.73535L12.6851 6.49609C12.3475 6.15048 12.3542 5.59649 12.6997 5.25879C13.0453 4.92139 13.5994 4.92797 13.937 5.27344L14.1431 5.48438L14.3765 5.24609Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M10.8364 5.04297C11.3194 5.04328 11.7114 5.43491 11.7114 5.91797V7.53027C11.7112 8.01318 11.3193 8.40496 10.8364 8.40527H9.22412C8.74098 8.40527 8.3493 8.01337 8.34912 7.53027V5.91797C8.34912 5.43472 8.74087 5.04297 9.22412 5.04297H10.8364Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M6.25049 2.45703C6.73359 2.45721 7.12549 2.84889 7.12549 3.33203C7.12549 3.81517 6.73359 4.20686 6.25049 4.20703H6.0835C5.36926 4.20703 4.88611 4.20784 4.51318 4.23828C4.15089 4.26788 3.96966 4.32098 3.84619 4.38379C3.54043 4.53958 3.29105 4.78896 3.13525 5.09473C3.07245 5.2182 3.01935 5.39943 2.98975 5.76172C2.95931 6.13465 2.9585 6.6178 2.9585 7.33203V7.49902C2.95832 7.98212 2.56664 8.37402 2.0835 8.37402C1.60036 8.37402 1.20867 7.98212 1.2085 7.49902V7.33203C1.2085 6.64657 1.20799 6.07986 1.24561 5.61914C1.28409 5.14815 1.36709 4.7111 1.57666 4.29981C1.90021 3.66486 2.41633 3.14875 3.05127 2.8252C3.46257 2.61563 3.89961 2.53262 4.37061 2.49414C4.83132 2.45652 5.39804 2.45703 6.0835 2.45703H6.25049Z",
                fill: "var(--color-chart-blue)",
              }),
              (0, i.jsx)("path", {
                d: "M13.9175 2.45703C14.6027 2.45703 15.1698 2.45651 15.6304 2.49414C16.1012 2.53264 16.5385 2.61569 16.9497 2.8252C17.5844 3.14879 18.1009 3.66501 18.4243 4.29981C18.6338 4.71107 18.7169 5.14821 18.7554 5.61914C18.793 6.07984 18.7925 6.6466 18.7925 7.33203V7.49902C18.7923 7.98186 18.4002 8.37358 17.9175 8.37402C17.4344 8.374 17.0427 7.9821 17.0425 7.49902V7.33203C17.0425 6.61783 17.0417 6.13464 17.0112 5.76172C16.9816 5.39926 16.9276 5.2182 16.8647 5.09473C16.709 4.78908 16.4604 4.53961 16.1548 4.38379C16.0314 4.32097 15.85 4.26791 15.4878 4.23828C15.115 4.20783 14.6315 4.20703 13.9175 4.20703H13.7505C13.2672 4.20703 12.8755 3.81528 12.8755 3.33203C12.8755 2.84878 13.2672 2.45703 13.7505 2.45703H13.9175Z",
                fill: "var(--color-chart-blue)",
              }),
              (0, i.jsx)("path", {
                d: "M6.7876 5.84961C7.27085 5.84961 7.6626 6.24136 7.6626 6.72461C7.6626 7.20786 7.27085 7.59961 6.7876 7.59961H4.99072C4.50762 7.59944 4.11572 7.20775 4.11572 6.72461C4.11572 6.24147 4.50762 5.84978 4.99072 5.84961H6.7876Z",
                fill: "currentColor",
              }),
            ],
          }),
        ],
      })
    function s(e) {
      let t,
        a = (0, n.c)(4),
        { className: s } = e,
        { platform: c } = (0, r.V)()
      if ("windows" === c) {
        let e
        return (
          a[0] !== s ? ((e = (0, i.jsx)(l, { "aria-hidden": !0, className: s })), (a[0] = s), (a[1] = e)) : (e = a[1]),
          e
        )
      }
      return (
        a[2] !== s
          ? ((t = (0, i.jsx)("img", { alt: "", "aria-hidden": !0, className: s, src: o })), (a[2] = s), (a[3] = t))
          : (t = a[3]),
        t
      )
    }
  },
  uNjk(e, t, a) {
    a.d(t, { L: () => m, J: () => h })
    var i = a("X6Vn"),
      n = a("TL6G"),
      o = a("Nwp9"),
      r = a("ABep"),
      l = a("QosV"),
      s = a("oyxz"),
      c = a("qprd"),
      u = a("Sm6l"),
      d = a("JNtf"),
      p = a("mUDD")
    function f(e) {
      let t,
        a,
        i,
        n,
        o,
        f,
        m,
        h,
        g,
        v,
        y,
        w = (0, l.c)(19),
        { onClose: C, onContinue: b } = e
      return (
        w[0] !== C || w[1] !== b
          ? ((t = (e) => {
              ;(e.preventDefault(), C(), b())
            }),
            (w[0] = C),
            (w[1] = b),
            (w[2] = t))
          : (t = w[2]),
        w[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(d.L3, {
              className: "sr-only",
              children: (0, r.jsx)(s.A, {
                id: "composer.appshotCapture.firstUse.title",
                defaultMessage: "Enable Appshots",
              }),
            })),
            (w[3] = a))
          : (a = w[3]),
        w[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(d.rr, {
              className: "sr-only",
              children: (0, r.jsx)(s.A, {
                id: "composer.appshotCapture.firstUse.description",
                defaultMessage:
                  "Appshots let you attach your current window to a message. They include all window text, even what\u2019s scrolled out of view.",
              }),
            })),
            (w[4] = i))
          : (i = w[4]),
        w[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)("div", {
              className: "mb-6 flex justify-start",
              children: (0, r.jsx)(c.n, { className: "h-[77px] w-[88px] object-contain" }),
            })),
            (w[5] = n))
          : (n = w[5]),
        w[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsxs)(p.OO, {
              children: [
                n,
                (0, r.jsx)(p.c7, {
                  title: (0, r.jsx)(s.A, {
                    id: "composer.appshotCapture.firstUse.title",
                    defaultMessage: "Enable Appshots",
                  }),
                  subtitle: (0, r.jsx)(s.A, {
                    id: "composer.appshotCapture.firstUse.description",
                    defaultMessage:
                      "Appshots let you attach your current window to a message. They include all window text, even what\u2019s scrolled out of view.",
                  }),
                }),
              ],
            })),
            (w[6] = o))
          : (o = w[6]),
        w[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(s.A, { id: "composer.appshotCapture.firstUse.cancel", defaultMessage: "Cancel" })),
            (w[7] = f))
          : (f = w[7]),
        w[8] !== C
          ? ((m = (0, r.jsx)(u.$, { color: "ghost", type: "button", onClick: C, children: f })), (w[8] = C), (w[9] = m))
          : (m = w[9]),
        w[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsx)(u.$, {
              type: "submit",
              children: (0, r.jsx)(s.A, { id: "composer.appshotCapture.firstUse.continue", defaultMessage: "Enable" }),
            })),
            (w[10] = h))
          : (h = w[10]),
        w[11] !== m
          ? ((g = (0, r.jsx)(p.OO, { children: (0, r.jsxs)(p.Es, { children: [m, h] }) })), (w[11] = m), (w[12] = g))
          : (g = w[12]),
        w[13] !== t || w[14] !== g
          ? ((v = (0, r.jsxs)(p.R4, { as: "form", onSubmit: t, children: [a, i, o, g] })),
            (w[13] = t),
            (w[14] = g),
            (w[15] = v))
          : (v = w[15]),
        w[16] !== C || w[17] !== v
          ? ((y = (0, r.jsx)(d.lG, { open: !0, onOpenChange: C, size: "compact", children: v })),
            (w[16] = C),
            (w[17] = v),
            (w[18] = y))
          : (y = w[18]),
        y
      )
    }
    let m = (0, o.m3)("has-accepted-appshot-intro", !1)
    function h(e, t) {
      e.get(m)
        ? t()
        : (n.O1.dispatchMessage("open-current-main-window", { stealFocus: !0 }),
          (0, i.qf)(e, f, {
            onContinue: () => {
              ;(e.set(m, !0), t())
            },
          }))
    }
  },
  ADtt(e, t, a) {
    var i = a("QosV"),
      n = a("qmMi"),
      o = a("zd8w"),
      r = a("v7qY"),
      l = a("wD9O"),
      s = a("Nxsk"),
      c = a("Lo68"),
      u = a("Sd8U"),
      d = a("rnJN")
    let p = { alpha: 1, blue: 255, green: 255, red: 255 }
    function f(e) {
      let t = document.createElement("div")
      ;((t.className = "text-default"),
        (t.style.height = "1px"),
        (t.style.left = "0"),
        (t.style.pointerEvents = "none"),
        (t.style.position = "absolute"),
        (t.style.top = "0"),
        (t.style.visibility = "hidden"),
        (t.style.width = "1px"),
        e.appendChild(t))
      try {
        let e = window.getComputedStyle(t),
          a = (function (e, t) {
            let a = t ?? { ...p, alpha: 0 },
              i = e.parentElement
            for (; a.alpha < 1 && null != i;) {
              let e = g(window.getComputedStyle(i).backgroundColor)
              ;(null != e && e.alpha > 0 && (a = m(a, e)), (i = i.parentElement))
            }
            return (a.alpha < 1 && (a = m(a, p)), a)
          })(t, g(e.backgroundColor)),
          i = m(g(e.color) ?? p, a)
        return { backgroundColor: h(a), primaryTextColor: h(i) }
      } finally {
        t.remove()
      }
    }
    function m(e, t) {
      let a = e.alpha + t.alpha * (1 - e.alpha)
      return a <= 0
        ? { ...p, alpha: 0 }
        : {
            alpha: a,
            blue: (e.blue * e.alpha + t.blue * t.alpha * (1 - e.alpha)) / a,
            green: (e.green * e.alpha + t.green * t.alpha * (1 - e.alpha)) / a,
            red: (e.red * e.alpha + t.red * t.alpha * (1 - e.alpha)) / a,
          }
    }
    function h(e) {
      return { blue: C(e.blue), green: C(e.green), red: C(e.red) }
    }
    function g(e) {
      let t = e.trim().toLowerCase()
      if (0 === t.length || "transparent" === t) return null
      let a = (function (e) {
        let t = e.match(/^rgba?\((.*)\)$/i)?.[1]
        if (null == t) return null
        let [a, i] = t.includes("/") ? t.split("/").map((e) => e.trim()) : [t, void 0],
          n = a
            .split(/[,\s]+/)
            .map((e) => e.trim())
            .filter(Boolean),
          o = null == i && n.length >= 4 ? n.pop() : void 0
        return n.length < 3 ? null : { alpha: y(i ?? o), blue: v(n[2], 255), green: v(n[1], 255), red: v(n[0], 255) }
      })(t)
      if (null != a) return a
      let i = (function (e) {
        let t = e.match(/^color\(\s*srgb\s+(.*)\)$/i)?.[1]
        if (null == t) return null
        let [a, i] = t.includes("/") ? t.split("/").map((e) => e.trim()) : [t, void 0],
          n = a
            .split(/\s+/)
            .map((e) => e.trim())
            .filter(Boolean)
        return n.length < 3 ? null : { alpha: y(i), blue: v(n[2], 1), green: v(n[1], 1), red: v(n[0], 1) }
      })(t)
      if (null != i) return i
      let n = (0, d.F)(t)
      if (null == n) return null
      let [o, r, l, s] = n
      return { alpha: s / 255, blue: l, green: r, red: o }
    }
    function v(e, t) {
      if (null == e) return 0
      if (e.endsWith("%")) return (Number.parseFloat(e) / 100) * 255
      let a = Number.parseFloat(e)
      return 1 === t ? 255 * a : a
    }
    function y(e) {
      return null == e ? 1 : e.endsWith("%") ? w(Number.parseFloat(e) / 100) : w(Number.parseFloat(e))
    }
    function w(e) {
      return Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 1
    }
    function C(e) {
      return Number.isFinite(e) ? Math.min(255, Math.max(0, Math.round(e))) : 0
    }
    a.d(
      t,
      {},
      {
        b: f,
        q: function (e) {
          let t,
            a,
            d,
            p,
            m,
            h,
            g,
            v,
            y = (0, i.c)(27),
            { attachmentTrayGrowthDirection: w } = e,
            C = (0, n.gh)(u.PR),
            b = (0, n.Ul)(s.eU),
            x = (0, n.Ul)(s.dc),
            M = (0, n.Ul)(s.XF),
            A = (0, l.dz)(),
            I = (0, o.useRef)(null),
            S = (0, o.useRef)(null),
            R = (0, o.useRef)(null)
          y[0] !== w || y[1] !== A
            ? ((t = (e) => {
                let t = S.current
                if (null == t) return null
                let a = t.getBoundingClientRect(),
                  i = window.getComputedStyle(t),
                  n = t.querySelector("[data-composer-attachments-scroll-container]") ?? R.current,
                  o = null == n ? null : window.getComputedStyle(n),
                  r = t.querySelector("[data-composer-attachments-row]") ?? R.current,
                  l = I.current,
                  s =
                    null == l
                      ? null
                      : Array.from(t.querySelectorAll("[data-appshot-capture-request-id]")).find(
                          (e) => e.dataset.appshotCaptureRequestId === l,
                        )
                I.current = null
                let u =
                    s?.getBoundingClientRect().left ??
                    a.left +
                      (parseFloat(i.paddingLeft || "0") + parseFloat(o?.paddingLeft || "0")) * A -
                      (n?.scrollLeft ?? 0) * A,
                  d = a.top + (parseFloat(i.paddingTop || "0") + parseFloat(o?.paddingTop || "0")) * A,
                  p = f(t),
                  m = r === n ? (parseFloat(o?.paddingTop || "0") + parseFloat(o?.paddingBottom || "0")) * A : 0,
                  h = Math.max(0, (r?.getBoundingClientRect().height ?? 0) - m),
                  g = Math.max(0, -parseFloat(o?.marginTop || "0") - parseFloat(o?.marginBottom || "0")) * A,
                  v =
                    Number.parseFloat(
                      i.getPropertyValue("--composer-attachment-tray-upward-growth-fraction") ||
                        ("up" === w ? "1" : "0"),
                    ) *
                    Math.max(
                      0,
                      (function (e, t) {
                        let a = e.windowTitle?.trim() || e.name.trim(),
                          i = 140 * t
                        if (0 === a.length) return (0, c._)(Math.ceil(i) / t)
                        let n = Math.max(window.devicePixelRatio || 1, 1),
                          o = Math.ceil(16.021484375 * n) / n
                        return (0, c._)(Math.ceil(i + 4 + o) / t)
                      })(e, A) *
                        A -
                        h +
                        g,
                    )
                return {
                  backgroundColor: p.backgroundColor,
                  cornerRadius: 0,
                  height: 140 * A,
                  primaryTextColor: p.primaryTextColor,
                  transitionSnapshotScale: A,
                  width: 232 * A,
                  x: u,
                  y: d - v,
                }
              }),
              (y[0] = w),
              (y[1] = A),
              (y[2] = t))
            : (t = y[2])
          let E = t
          y[3] !== C
            ? ((a = (e) => {
                if (C.get(s.eU).some((t) => t.requestId === e)) {
                  I.current = e
                  return
                }
                ;(0, r.flushSync)(() => {
                  ;((I.current = e), (0, s.$v)(C, e))
                })
              }),
              (y[3] = C),
              (y[4] = a))
            : (a = y[4])
          let k = a
          y[5] !== C ? ((d = (e) => (0, s.s1)(C, e)), (y[5] = C), (y[6] = d)) : (d = y[6])
          let O = d
          y[7] !== C
            ? ((p = (e, t) => {
                ;(0, s.vB)(C, e, t)
              }),
              (y[7] = C),
              (y[8] = p))
            : (p = y[8])
          let _ = p
          y[9] !== C
            ? ((m = (e, t) => {
                ;(0, r.flushSync)(() => {
                  ;(0, s.j6)(C, e, t)
                })
              }),
              (y[9] = C),
              (y[10] = m))
            : (m = y[10])
          let T = m
          y[11] !== C
            ? ((h = (e, t) => (I.current === e && (I.current = null), (0, s.EU)(C, e, t))), (y[11] = C), (y[12] = h))
            : (h = y[12])
          let N = h
          y[13] !== C
            ? ((g = () => {
                ;((0, s.zY)(C), (I.current = null))
              }),
              (y[13] = C),
              (y[14] = g))
            : (g = y[14])
          let P = g,
            L = b.length > 0
          return (
            y[15] !== x ||
            y[16] !== M ||
            y[17] !== P ||
            y[18] !== E ||
            y[19] !== _ ||
            y[20] !== O ||
            y[21] !== T ||
            y[22] !== N ||
            y[23] !== k ||
            y[24] !== b ||
            y[25] !== L
              ? ((v = {
                  appshotCaptureKeysByImageName: x,
                  appshotCaptureRequestIds: M,
                  attachmentsContainerRef: S,
                  attachmentsRowRef: R,
                  clearPendingCaptures: P,
                  getAnimationDestinationFrame: E,
                  handleCaptureAttached: O,
                  handleCaptureAnimationDuration: _,
                  handleCaptureFinalSnapshot: T,
                  handleCaptureSettled: N,
                  handleCaptureStarted: k,
                  hasPendingCaptures: L,
                  pendingCaptures: b,
                }),
                (y[15] = x),
                (y[16] = M),
                (y[17] = P),
                (y[18] = E),
                (y[19] = _),
                (y[20] = O),
                (y[21] = T),
                (y[22] = N),
                (y[23] = k),
                (y[24] = b),
                (y[25] = L),
                (y[26] = v))
              : (v = y[26]),
            v
          )
        },
      },
    )
  },
  Quid(e, t, a) {
    a.d(t, { AvatarOverlayNativePage: () => nC })
    var i = a("ABep"),
      n = a("QosV"),
      o = a("iRMi"),
      r = a("SZCv"),
      l = a.n(r),
      s = a("HVBu"),
      c = a.n(s),
      u = a("qmMi"),
      d = a("DBCl"),
      p = a("I3F6"),
      f = a("evsE"),
      m = a("OoLr"),
      h = a("RAsy"),
      g = a("zd8w"),
      v = a("v7qY"),
      y = a("Wf1j"),
      w = a("Qgfj"),
      C = a("eYlV"),
      b = a("ChYf"),
      x = a("Dgwo"),
      M = a("RWvA"),
      A = a("binO"),
      I = a("tl5a"),
      S = a("xeus"),
      R = a("whfw"),
      E = a("lqHG"),
      k = a("ycOY"),
      O = a("PAzX"),
      _ = a("HUHI"),
      T = a("ZwwR"),
      N = a("uNjk"),
      P = a("ADtt"),
      L = a("eFn4"),
      F = a("cFUD"),
      q = a("dYlv"),
      j = a("CSxw"),
      D = a("AAVC"),
      U = a("CiLO"),
      V = a("sXdr"),
      H = a("uIyc"),
      B = a("bVeK"),
      X = a("SGsN"),
      W = a("YXXI"),
      Y = a("rxzY"),
      z = a("rP0s"),
      K = a("TL6G"),
      $ = a("yGJW"),
      G = a("oRak"),
      Q = a("kfGJ")
    function Z(e) {
      return e.occurredAtMs + 5e3
    }
    var J = a("mHH7"),
      ee = a("SRbQ"),
      et = a("lSdY"),
      ea = a("UOa8"),
      ei = a("V7vi"),
      en = a("iS3i"),
      eo = a("gAqY"),
      er = a("an0a"),
      el = a("fj7z"),
      es = a("TYK1"),
      ec = a("jiwy"),
      eu = a("ho8L"),
      ed = a("LBED"),
      ep = a("BqvN"),
      ef = a("V3Gm"),
      em = a("gf0K"),
      eh = a("Io7L"),
      eg = a("aQYh"),
      ev = a("vhyw"),
      ey = a("uIjo"),
      ew = a("xFSr"),
      eC = a("QVc9"),
      eb = a("XLpU"),
      ex = a("kXFg"),
      eM = a("XL6s"),
      eA = a("x7by"),
      eI = a("Nc5R"),
      eS = a("CpJm"),
      eR = a("GaA7"),
      eE = a("OWtl"),
      ek = a("KoM4"),
      eO = a("lx63"),
      e_ = a("jMec"),
      eT = a("OMIV"),
      eN = a("WFY2")
    let eP = {
      chat: et.b.CHATGPT_PRODUCT_EXPERIENCE_CHAT,
      work: et.b.CHATGPT_PRODUCT_EXPERIENCE_WORK,
      codex: et.b.CHATGPT_PRODUCT_EXPERIENCE_CODEX,
    }
    var eL = a("pcVU"),
      eF = a("zRTd"),
      eq = a("NolR"),
      ej = a("Sd8U"),
      eD = a("V3rO"),
      eU = a("RxZZ"),
      eV = a("qixt"),
      eH = a("ugrI"),
      eB = a("hZax"),
      eX = a("kpIY"),
      eW = a("Nwp9")
    class eY {
      timestamp = -1 / 0
      action = null
      travel = 0
      consumed = !1
      update({ deltaY: e, timestamp: t, isExpanded: a, notificationCount: i, expandsUpward: n, maxScrollOffset: o }) {
        if (i < 2) return a ? "scroll" : null
        let r = n ? -e : e
        return (t - this.timestamp > 180 &&
          ((this.travel = 0),
          (this.consumed = !1),
          a ? (this.action = r < 0 && 0 === o ? "collapse" : "scroll") : (this.action = r > 0 ? "expand" : null)),
        (this.timestamp = t),
        this.consumed)
          ? null
          : (a && o > 0 && (this.action = "scroll"), "expand" !== this.action && "collapse" !== this.action)
            ? a
              ? "scroll"
              : null
            : ((this.travel = Math.max(0, this.travel + ("expand" === this.action ? r : -r))), this.travel < 32)
              ? null
              : ((this.consumed = !0), this.action)
      }
    }
    let ez = (0, w.YK)({
        running: { id: "avatarOverlay.statusRunning", defaultMessage: "Running" },
        runningFallbackBody: { id: "avatarOverlay.statusRunningSubtitle", defaultMessage: "Thinking" },
        waiting: { id: "avatarOverlay.statusWaiting", defaultMessage: "Needs input" },
        review: { id: "avatarOverlay.statusReview", defaultMessage: "Ready" },
        failed: { id: "avatarOverlay.statusFailed", defaultMessage: "Blocked" },
        info: { id: "avatarOverlay.statusInfo", defaultMessage: "Info" },
      }),
      eK = {
        badgeBackgroundColor: "var(--color-background-info-soft)",
        badgeForegroundColor: "var(--color-text)",
        fallbackBodyMessage: ez.info,
        iconClassName: "icon-xs shrink-0 text-secondary",
        iconType: "clock",
        labelMessage: ez.info,
        mascotState: "idle",
      },
      e$ = { ...eK, mascotState: "waving" }
    function eG(e) {
      if (null == e) return eK
      if ("first-awake" === e.kind) return e$
      if (e.isLoading)
        return {
          badgeBackgroundColor: "var(--color-background-info-soft)",
          badgeForegroundColor: "var(--color-text)",
          fallbackBodyMessage: ez.runningFallbackBody,
          iconClassName: "icon-xs shrink-0 text-secondary",
          iconType: "spinner",
          labelMessage: ez.running,
          mascotState: "running",
        }
      switch (e.level) {
        case "warning":
          return {
            badgeBackgroundColor: "var(--color-text-warning)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: ez.waiting,
            iconClassName: "icon-xs shrink-0 text-warning",
            iconType: "warning",
            labelMessage: ez.waiting,
            mascotState: "waiting",
          }
        case "danger":
          return {
            badgeBackgroundColor: "var(--color-text-danger)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: ez.failed,
            iconClassName: "icon-xs shrink-0 text-danger",
            iconType: "warning",
            labelMessage: ez.failed,
            mascotState: "failed",
          }
        case "success":
          return {
            badgeBackgroundColor: "var(--color-chart-green)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: ez.review,
            iconClassName: "icon-xs shrink-0 text-chart-green",
            iconType: "check-circle",
            labelMessage: ez.review,
            mascotState: "review",
          }
        case "info":
          return eK
      }
    }
    var eQ = a("NFVO"),
      eZ = a("JxD3"),
      eJ = a("D6V5"),
      e1 = a("veRW"),
      e0 = a("G0uN"),
      e2 = a("bZSE"),
      e3 = a("m88r"),
      e4 = a("L2Eu"),
      e5 = a("rwp7"),
      e6 = a("C4Sc"),
      e7 = a("G3U9"),
      e8 = a("Faus"),
      e9 = a("v1hC"),
      te = a("vc9M"),
      tt = a("sl5j"),
      ta = a("IJee"),
      ti = a("g6Vb"),
      tn = a("Mrfa"),
      to = a("l4nv"),
      tr = a("aAb3")
    let tl = (0, w.YK)({
      allow: { id: "avatarOverlay.waitingRequest.allow", defaultMessage: "Allow" },
      allowNetwork: { id: "avatarOverlay.waitingRequest.allowNetwork", defaultMessage: "Allow network" },
      allowOnce: { id: "avatarOverlay.waitingRequest.allowOnce", defaultMessage: "Allow once" },
      allowTarget: { id: "avatarOverlay.waitingRequest.allowTarget", defaultMessage: "Allow {target}" },
      apply: { id: "avatarOverlay.waitingRequest.apply", defaultMessage: "Apply" },
      applyChanges: { id: "avatarOverlay.waitingRequest.applyChanges", defaultMessage: "Apply changes" },
      askQuestion: { id: "avatarOverlay.waitingRequest.askQuestion", defaultMessage: "Ask a question" },
      answerTarget: { id: "avatarOverlay.waitingRequest.answerTarget", defaultMessage: "Answer {target}" },
      command: { id: "avatarOverlay.waitingRequest.command", defaultMessage: "Command" },
      cancel: { id: "avatarOverlay.waitingRequest.cancel", defaultMessage: "Cancel" },
      connector: { id: "avatarOverlay.waitingRequest.connector", defaultMessage: "Connector" },
      connectTarget: { id: "avatarOverlay.waitingRequest.connectTarget", defaultMessage: "Connect {target}" },
      connect: { id: "avatarOverlay.waitingRequest.connect", defaultMessage: "Connect" },
      continue: { id: "avatarOverlay.waitingRequest.continue", defaultMessage: "Continue" },
      deny: { id: "avatarOverlay.waitingRequest.deny", defaultMessage: "Deny" },
      enableTool: { id: "avatarOverlay.waitingRequest.enableTool", defaultMessage: "Enable {toolName}" },
      fileAccess: { id: "avatarOverlay.waitingRequest.fileAccess", defaultMessage: "File access" },
      fileCount: {
        id: "avatarOverlay.waitingRequest.fileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
      },
      installTool: { id: "avatarOverlay.waitingRequest.installTool", defaultMessage: "Install {toolName}" },
      implementPlan: { id: "avatarOverlay.waitingRequest.implementPlan", defaultMessage: "Implement plan" },
      networkAccess: { id: "avatarOverlay.waitingRequest.networkAccess", defaultMessage: "Network access" },
      openLink: { id: "avatarOverlay.waitingRequest.openLink", defaultMessage: "Open link" },
      oneFileChanged: { id: "avatarOverlay.waitingRequest.oneFileChanged", defaultMessage: "1 file changed" },
      option: { id: "avatarOverlay.waitingRequest.option", defaultMessage: "Option" },
      plan: { id: "avatarOverlay.waitingRequest.plan", defaultMessage: "Plan" },
      plugin: { id: "avatarOverlay.waitingRequest.plugin", defaultMessage: "Plugin" },
      review: { id: "avatarOverlay.waitingRequest.review", defaultMessage: "Review" },
      reviewCommand: { id: "avatarOverlay.waitingRequest.reviewCommand", defaultMessage: "Review command" },
      additionalAccessTarget: {
        id: "avatarOverlay.waitingRequest.moreAccessTarget",
        defaultMessage: "ChatGPT needs more {target} access",
      },
      reconnectTarget: { id: "avatarOverlay.waitingRequest.reconnectTarget", defaultMessage: "Reconnect {target}" },
      reconnect: { id: "avatarOverlay.waitingRequest.reconnect", defaultMessage: "Reconnect" },
      runCommand: { id: "avatarOverlay.waitingRequest.runCommand", defaultMessage: "Run command" },
      runOnce: { id: "avatarOverlay.waitingRequest.runOnce", defaultMessage: "Run once" },
      updateAccess: { id: "avatarOverlay.waitingRequest.updateAccess", defaultMessage: "Update access" },
      tool: { id: "avatarOverlay.waitingRequest.tool", defaultMessage: "tool" },
      toolServer: { id: "avatarOverlay.waitingRequest.toolServer", defaultMessage: "Tool server" },
    })
    function ts(e, t) {
      switch (e.kind) {
        case "question":
          return [e.prompt, ...e.options.map((e) => e.label)].filter(Boolean).join(" ")
        case "plan":
        case "exec":
          return e.summary
        case "patch":
          return [
            t.formatMessage(tl.fileCount, { count: e.fileCount }),
            e.additions > 0 ? `+${e.additions}` : null,
            e.deletions > 0 ? `-${e.deletions}` : null,
            e.summary,
          ]
            .filter(Boolean)
            .join(". ")
        case "network":
        case "permission":
          return e.target
        case "tool":
          return [e.target, e.summary].filter(Boolean).join(". ")
      }
    }
    function tc(e) {
      if (null == e) return null
      let t = Object.entries(e)[0]
      if (null == t) return null
      let [a, i] = t,
        n = tp(i)
      return null == n ? th(a) : th(`${a}: ${n}`)
    }
    function tu(e) {
      let t = e[0]
      if (null == t) return null
      let a = tp(t.value)
      return null == a ? th(t.displayName) : th(`${t.displayName}: ${a}`)
    }
    function td(e) {
      try {
        let t = new URL(e),
          a = "/" === t.pathname ? "" : t.pathname
        return tg(`${t.hostname}${a}`)
      } catch {
        return tg(e)
      }
    }
    function tp(e) {
      return "string" == typeof e
        ? tg(e)
        : "number" == typeof e || "boolean" == typeof e
          ? String(e)
          : null == e
            ? null
            : tg(JSON.stringify(e) ?? "")
    }
    function tf(e) {
      let t = e
        ?.trim()
        .replace(/^connector[_-]/, "")
        .split(/[_-]+/)
        .filter(Boolean)
      return null == t || 0 === t.length ? null : t.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
    }
    function tm(e) {
      if (0 === e.length) return 0
      let t = e.split(/\r?\n/)
      return "" === t.at(-1) ? t.length - 1 : t.length
    }
    function th(e) {
      let t = e?.replace(/\s+/g, " ").trim() ?? ""
      return 0 === t.length ? null : t
    }
    function tg(e) {
      let t = th(e)
      return null == t ? null : t.length <= 48 ? t : `${t.slice(0, 47)}\u{2026}`
    }
    let tv = (0, w.YK)({
      calledTool: { id: "avatarOverlay.session.calledTool", defaultMessage: "Called tool" },
      calledToolName: { id: "avatarOverlay.session.calledToolName", defaultMessage: "Called {toolName}" },
      callingTool: { id: "avatarOverlay.session.callingTool", defaultMessage: "Calling tool" },
      callingToolName: { id: "avatarOverlay.session.callingToolName", defaultMessage: "Calling {toolName}" },
      editedFiles: {
        id: "avatarOverlay.session.editedFiles",
        defaultMessage: "Edited {fileCount, plural, one {# file} other {# files}}",
      },
      editingFiles: {
        id: "avatarOverlay.session.editingFiles",
        defaultMessage: "Editing {fileCount, plural, one {# file} other {# files}}",
      },
      newThread: { id: "avatarOverlay.session.newThread", defaultMessage: "New chat" },
      ranCommand: { id: "avatarOverlay.session.ranCommand", defaultMessage: "Ran command" },
      runningCommand: { id: "avatarOverlay.session.runningCommand", defaultMessage: "Running command" },
      searchedQuery: { id: "avatarOverlay.session.searchedQuery", defaultMessage: 'Searched "{query}"' },
      searchedWeb: { id: "avatarOverlay.session.searchedWeb", defaultMessage: "Searched web" },
    })
    function ty(e, t, a = !1, i = eV._e) {
      let n = null
      for (let t = e.length - 1; t >= 0; t -= 1) {
        let i = e[t]
        if (i?.type === "reasoning") {
          let e = (0, e9.W)(i.summary),
            t = (0, e8.S3)(e),
            a = null == t ? null : tw(t)
          if (null != a && a.length <= 60) return a
          let n = (0, e8.S3)(e.split(/\r?\n/, 1)[0] ?? ""),
            o = null == n ? null : tw(n)
          if (null != o && o.length <= 60) return o
          break
        }
        if (i?.type === "agentMessage") {
          let e = (0, e1.l)(i.text),
            t = a ? (0, eZ.mM)(e) : (0, eZ.Fp)(e),
            o = t?.decision === "DONT_NOTIFY" ? null : tw(t?.notificationMessage ?? t?.visibleText ?? e)
          if (null != o) {
            if ("commentary" !== i.phase) return o
            null == n && o.length <= 60 && (n = o)
          }
        }
      }
      for (let a = e.length - 1; a >= 0; a -= 1) {
        let n = (function (e, t, a) {
          if (null == e) return null
          if ("commandExecution" === e.type) {
            let i = e.commandActions.at(-1),
              n = "inProgress" === e.status
            if (null == i || "unknown" === i.type)
              return n ? t.formatMessage(tv.runningCommand) : t.formatMessage(tv.ranCommand)
            let o = (0, e3.i)({
              items: [
                {
                  type: "exec",
                  callId: e.id,
                  cwd: e.cwd ? (0, d.DIv)(e.cwd) : null,
                  cmd: [i.command],
                  executionStatus: e.status,
                  approvalRequestId: null,
                  proposedExecpolicyAmendment: null,
                  parsedCmd: (0, e7.Q)((0, e6.uw)(i, []), !n),
                  output: null,
                },
              ],
              threadDetailLevel: a,
              formatSearchQueryTermList: (e) => t.formatList(e, { type: "conjunction" }),
            })
            if (null != o) {
              let e = t.formatMessage(o.message, { ...o.values, action: (e) => e.join(""), detail: (e) => e.join("") })
              return e.length <= 60 ? e : n ? t.formatMessage(tv.runningCommand) : t.formatMessage(tv.ranCommand)
            }
          }
          if ("fileChange" === e.type) {
            let a = e.changes.length
            return "inProgress" === e.status
              ? t.formatMessage(tv.editingFiles, { fileCount: a })
              : t.formatMessage(tv.editedFiles, { fileCount: a })
          }
          if ("mcpToolCall" === e.type) {
            let a = "inProgress" === e.status,
              i = tw(e.tool.replace(/[_-]+/g, " "))
            return null == i
              ? a
                ? t.formatMessage(tv.callingTool)
                : t.formatMessage(tv.calledTool)
              : a
                ? t.formatMessage(tv.callingToolName, { toolName: i })
                : t.formatMessage(tv.calledToolName, { toolName: i })
          }
          if ("webSearch" === e.type) {
            let a = tw(e.query)
            return null != a ? t.formatMessage(tv.searchedQuery, { query: a }) : t.formatMessage(tv.searchedWeb)
          }
          return null
        })(e[a], t, i)
        if (null != n) return n
      }
      return n
    }
    function tw(e) {
      let t = (0, e4.SX)((0, e2.v)(e))
        .replace(/^\s{0,3}#{1,6}\s+/g, "")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/__([^_]+)__/g, "$1")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/\*([^*]+)\*/g, "$1")
        .replace(/_([^_]+)_/g, "$1")
        .replace(/\s+/g, " ")
        .trim()
      return t.length > 0 ? t : null
    }
    function tC({
      completedTurnSummary: e,
      intl: t,
      latestTurnItems: a,
      notification: i,
      notificationCount: n = 1,
      threadDetailLevel: o = eV._e,
    }) {
      let r = eG(i),
        l = t.formatMessage(r.labelMessage),
        s = null == a ? null : ty(a, t, !1, o),
        c =
          (i.isLoading || e?.compactSummaryTurnKey !== i.turnKey ? null : e.compactSummary) ??
          s ??
          i.body ??
          t.formatMessage(r.fallbackBodyMessage)
      null != i.waitingRequest && (c = ts(i.waitingRequest, t))
      let u = c.replace(/[.?!]+$/, ""),
        d = i.waitingRequest?.kind === "patch" ? i.waitingRequest : null
      return {
        actionAriaLabel: `${i.title}. ${c === l ? l : `${l}. ${u}`}. ${t.formatMessage(tb.openNotification)}`,
        collapseNotificationAriaLabel: t.formatMessage(tb.collapseNotification, { title: i.title }),
        dismissNotificationAriaLabel: t.formatMessage(tb.dismissNotification, { title: i.title }),
        expandNotificationAriaLabel: t.formatMessage(tb.expandNotification, { title: i.title }),
        expandNotificationStackAriaLabel: t.formatMessage(tb.expandNotificationStack, { count: n }),
        notificationListAriaLabel: t.formatMessage(tb.notificationList),
        patchSummary:
          null == d
            ? null
            : {
                additions:
                  d.additions > 0
                    ? t.formatMessage(tb.compactPatchAdditions, { count: t.formatNumber(d.additions) })
                    : null,
                deletions:
                  d.deletions > 0
                    ? t.formatMessage(tb.compactPatchDeletions, { count: t.formatNumber(d.deletions) })
                    : null,
                fileCount: t.formatMessage(tb.compactPatchFileCount, { count: d.fileCount }),
              },
        statusIconAriaLabel: i.waitingRequest?.kind === "question" ? t.formatMessage(tb.questionStatusIcon) : l,
        subtitle: c,
      }
    }
    let tb = (0, w.YK)({
        collapseNotification: { id: "avatarOverlay.collapseNotification", defaultMessage: "Collapse {title}" },
        compactPatchAdditions: { id: "avatarOverlay.compactPatchAdditions", defaultMessage: "+{count}" },
        compactPatchDeletions: { id: "avatarOverlay.compactPatchDeletions", defaultMessage: "-{count}" },
        compactPatchFileCount: {
          id: "avatarOverlay.compactPatchFileCount",
          defaultMessage: "{count, plural, one {# file} other {# files}}",
        },
        dismissNotification: { id: "avatarOverlay.dismissNotification", defaultMessage: "Dismiss {title}" },
        expandNotification: { id: "avatarOverlay.expandNotification", defaultMessage: "Expand {title}" },
        expandNotificationStack: {
          id: "avatarOverlay.expandNotificationStack",
          defaultMessage: "Expand activity stack, {count, plural, one {# item} other {# items}}",
        },
        notificationList: { id: "avatarOverlay.notificationList", defaultMessage: "Activity notifications" },
        openNotification: { id: "avatarOverlay.openNotification", defaultMessage: "Open notification" },
        questionStatusIcon: { id: "avatarOverlay.questionStatusIcon", defaultMessage: "Question" },
      }),
      tx = (0, eW.m3)("avatar-overlay-debug-window-border-visible", !1)
    function tM(e) {
      return { screenX: e.screenX, screenY: e.screenY, timeMs: e.timeStamp }
    }
    function tA(e, t) {
      if (e.hasMoved) return !0
      let a = e.samples[0]
      return null != a && (Math.abs(t.screenX - a.screenX) >= 4 || Math.abs(t.screenY - a.screenY) >= 4)
    }
    function tI(e) {
      let t = e.at(-1)
      return null == t ? e : e.filter((e) => t.timeMs - e.timeMs <= 160)
    }
    function tS({ activityStackPresentation: e, isExpanded: t, notificationCount: a }) {
      let i = e.items[0]?.presentationRect.height ?? 0,
        n = (0, d.pmn)(a, t && a > 1 ? Math.min(i, e.items[1]?.presentationRect.height ?? i) : i)
      return {
        backingLayoutHeight: a > 1 ? e.viewportRect.height : i,
        visibleLayoutHeight: Math.ceil(n + (a > 1 ? d.Xlf : 0)),
      }
    }
    var tR = a("HrOd")
    let tE = {
        mascot: { left: 244, top: 207, width: tR.dR, height: 121 },
        placement: "top-end",
        tray: { left: 19.5, top: 70, width: d.pFD, height: 120 },
        visibleBounds: { left: 0, top: 0, width: 384, height: 400 },
        viewport: { width: 384, height: 400 },
      },
      tk = (0, u.T1)(
        eE.u,
        (e, { signal: t, derived: a }) => {
          let i = t(tE)
          return {
            layout$: i,
            activityStackMaxViewportHeight$: a((e) => {
              let t = e(i).quickChat
              return null == t ? d.e3 : Math.max(d.YMX, t.workArea.height / 2 - d.Zam - d.rqb)
            }),
            quickChatStashedEdge$: a((e) => e(i).quickChat?.stashedEdge),
          }
        },
        { autoDispose: !0 },
      )
    var tO = a("FPUb"),
      t_ = a("on57"),
      tT = a("IjbW"),
      tN = a("K45w"),
      tP = a("W5pg"),
      tL = a("B7sF"),
      tF = a("K4Cx"),
      tq = a("l2oX"),
      tj = a("suct"),
      tD = a("Dh3m"),
      tU = a("xJjI"),
      tV = a("SqlE"),
      tH = a("rmk3"),
      tB = a("GCsp"),
      tX = a("slpy"),
      tW = a("pHWQ"),
      tY = a("xXRm"),
      tz = a("ESTr")
    let tK = (0, tz.a)({
      name: "speaker-slash-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.475586, y: 1.475098, width: 13.049561, height: 13.049316 },
        visualBounds: { x: 1.475586, y: 1.475098, width: 13.049561, height: 13.049316 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.475586, y: 1.475098, width: 13.049561, height: 13.049316 },
        center: { x: 8.000367, y: 7.999756 },
        insets: { top: 1.475098, right: 1.474853, bottom: 1.475586, left: 1.475586 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000367, y: 7.999756 }, foreground: { x: 8.000367, y: 7.999756 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.00001 1.4751C2.13436 1.4751 2.26875 1.52632 2.37132 1.62864L14.3713 13.6286C14.4738 13.7312 14.5251 13.8654 14.5251 13.9997C14.5251 14.2895 14.29 14.5246 14.0002 14.5246C13.8659 14.5246 13.7316 14.4733 13.6291 14.3708L12.6369 13.3786C12.3609 13.8299 11.8602 14.1118 11.3306 14.1118C11.0733 14.1118 10.8092 14.0452 10.5608 13.8991L6.55687 11.5447C6.53523 11.532 6.51065 11.5252 6.48558 11.5251H4.33323C3.30716 11.525 2.47501 10.6928 2.47483 9.66673V6.33274C2.47518 5.48903 3.03821 4.77704 3.80882 4.55052L1.62913 2.37083C1.5268 2.26826 1.47559 2.13387 1.47559 1.99952C1.47559 1.7097 1.71019 1.4751 2.00001 1.4751ZM11.3331 13.0601C11.581 13.0601 11.8088 12.8622 11.8088 12.5847H11.843L4.78343 5.52513H4.33323C3.88721 5.5253 3.52603 5.88678 3.52561 6.33274V9.66673C3.52579 10.1129 3.88706 10.4742 4.33323 10.4743H6.48558C6.69778 10.4744 6.90614 10.5319 7.08909 10.6394L11.093 12.9939C11.1704 13.0394 11.2528 13.0601 11.3331 13.0601Z" fill="currentColor"/> <path d="M11.3295 1.88843C12.1258 1.88843 12.8576 2.52468 12.8576 3.41575V8.56712C12.8576 8.85699 12.6221 9.09153 12.3323 9.09153C12.0426 9.09127 11.807 8.85682 11.8069 8.56712V3.41575C11.8069 3.13806 11.5788 2.9394 11.3307 2.9394C11.2506 2.9394 11.1683 2.96012 11.091 3.0056L8.25608 4.67356C8.17241 4.7227 8.08064 4.7461 7.99005 4.7461C7.70039 4.7461 7.46481 4.51248 7.46481 4.22219C7.46481 4.04237 7.55706 3.86717 7.72288 3.76927L10.5588 2.1013C10.8074 1.95508 11.0718 1.88843 11.3295 1.88843Z" fill="currentColor"/>',
    })
    var t$ = a("Lc0T"),
      tG = a("i1uX"),
      tQ = a("iodE"),
      tZ = a("oyxz"),
      tJ = a("R4Te"),
      t1 = a("HOLv"),
      t0 = a("RNul"),
      t2 = a("pqg6")
    function t3(e) {
      let t,
        a,
        o = (0, n.c)(9),
        { children: r, className: l, inert: s, nativeCornerRadius: c, nativeSurfaceId: u, style: d } = e,
        p = void 0 === c ? 12 : c
      return (
        o[0] !== l
          ? ((t = (0, t_.A)(
              t2.A.Material,
              "rounded-full text-default forced-colors:border forced-colors:border-[ButtonBorder] forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText] forced-colors:backdrop-blur-none",
              l,
            )),
            (o[0] = l),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== r || o[3] !== s || o[4] !== p || o[5] !== u || o[6] !== d || o[7] !== t
          ? ((a = (0, i.jsx)("div", {
              className: t,
              "data-avatar-overlay-hit-region": "realtime-voice",
              "data-avatar-overlay-native-corner-radius": p,
              "data-avatar-overlay-native-surface-id": u,
              inert: s,
              style: d,
              children: r,
            })),
            (o[2] = r),
            (o[3] = s),
            (o[4] = p),
            (o[5] = u),
            (o[6] = d),
            (o[7] = t),
            (o[8] = a))
          : (a = o[8]),
        a
      )
    }
    let t4 = { damping: 22, mass: 0.72, stiffness: 360, type: "spring" }
    function t5(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        f,
        m,
        h,
        g = (0, n.c)(71),
        {
          arePetControlsExpanded: v,
          areControlsVisible: w,
          areVoiceActionsHidden: C,
          canRevealControls: b,
          canStart: x,
          children: M,
          errorMessage: A,
          isRealtimeVoiceSurfaceVisible: I,
          isMicrophoneMuted: S,
          isMuted: R,
          mascot: E,
          onAnimationFrame: k,
          onStart: O,
          onStop: _,
          onOpenThread: T,
          onToggleMicrophoneMute: N,
          onToggleMute: P,
          petControlsAppearance: L,
          phase: F,
          placement: q,
          showsNotificationBadge: j,
        } = e,
        D = void 0 === v || v,
        U = void 0 !== w && w,
        V = void 0 !== C && C,
        H = void 0 === b || b,
        X = void 0 !== I && I,
        W = void 0 !== S && S,
        Y = void 0 !== R && R,
        z = void 0 === L ? d.JCZ : L,
        K = void 0 !== j && j,
        $ = (0, y.A)(),
        G = "inactive" !== F,
        Q = "starting" === F,
        Z = "stopping" === F,
        J = !V && (G || x || null != A),
        ee = "active" === F
      g[0] !== D || g[1] !== z
        ? ((t = D ? z.hoverControlSize : (0, tJ.PO)(z)), (g[0] = D), (g[1] = z), (g[2] = t))
        : (t = g[2])
      let et = t,
        ea = D ? z.hoverControlSize : z.compactControlHeight,
        ei = D ? z.hoverControlSize / 2 : z.compactControlCornerRadius,
        en = D ? z.hoverControlGap : -et,
        eo = D ? "arc" : "row",
        er = D ? z.hoverOffsetX : z.compactOffsetX,
        el = D ? z.hoverOffsetY : z.compactOffsetY
      if (
        g[3] !== U ||
        g[4] !== D ||
        g[5] !== V ||
        g[6] !== H ||
        g[7] !== M ||
        g[8] !== ei ||
        g[9] !== ea ||
        g[10] !== et ||
        g[11] !== A ||
        g[12] !== $ ||
        g[13] !== ee ||
        g[14] !== W ||
        g[15] !== Y ||
        g[16] !== G ||
        g[17] !== X ||
        g[18] !== Q ||
        g[19] !== Z ||
        g[20] !== E ||
        g[21] !== k ||
        g[22] !== T ||
        g[23] !== O ||
        g[24] !== _ ||
        g[25] !== N ||
        g[26] !== P ||
        g[27] !== z ||
        g[28] !== q ||
        g[29] !== K ||
        g[30] !== J ||
        g[31] !== en ||
        g[32] !== eo ||
        g[33] !== er ||
        g[34] !== el
      ) {
        let e,
          t = { controlGap: en, controlSize: et, layout: eo, offsetX: er, offsetY: el },
          n = !V && ee && X && null != N && null != P,
          d = H
            ? "group-hover:pointer-events-auto group-hover:opacity-100 group-has-[:focus-visible]:pointer-events-auto group-has-[:focus-visible]:opacity-100"
            : null,
          f = t9.start
        Q ? (f = t9.starting) : ee && null != T ? (f = t9.openThread) : G && (f = t9.stop)
        let m = n ? t9.stop : f
        g[43] !== U || g[44] !== A || g[45] !== G || g[46] !== X || g[47] !== d
          ? ((e =
              null != A || (G && !X) || U
                ? "pointer-events-auto opacity-100"
                : ["pointer-events-none opacity-0 focus-within:pointer-events-auto focus-within:opacity-100", d]),
            (g[43] = U),
            (g[44] = A),
            (g[45] = G),
            (g[46] = X),
            (g[47] = d),
            (g[48] = e))
          : (e = g[48])
        let h = e
        ;(g[49] !== q || g[50] !== n
          ? ((p = n
              ? (0, i.jsx)("div", {
                  className: "absolute z-30",
                  "data-avatar-overlay-hit-region": "realtime-voice",
                  role: "presentation",
                  style: { height: 42, left: "calc(50% - 56px)", top: q.startsWith("bottom") ? 0 : -10, width: 112 },
                  onClick: t7,
                  onPointerDown: t6,
                })
              : null),
            (g[49] = q),
            (g[50] = n),
            (g[51] = p))
          : (p = g[51]),
          (o = tq.x),
          (s = "never"))
        let v = n
          ? (0, i.jsx)(
              t8,
              {
                ariaLabel: $.formatMessage(W ? t9.unmuteMicrophone : t9.muteMicrophone),
                disabled: !ee,
                arePetControlsExpanded: D,
                controlCornerRadius: ei,
                controlHeight: ea,
                controlWidth: et,
                isAnimated: !0,
                isPressed: W,
                mascot: E,
                nativeSurfaceId: "voice-microphone",
                onAnimationFrame: k,
                petControlsAppearance: z,
                position: (0, tJ.oO)({ ...t, mascot: E, showsNotificationBadge: K, surfaceId: "voice-microphone" }),
                tooltipContent: (0, i.jsx)(tZ.A, { ...(W ? t9.unmuteMicrophone : t9.muteMicrophone) }),
                visibilityClassName: h,
                onClick: N,
                children: (0, i.jsx)(t1.I, { "aria-hidden": !1, asset: tY.X }),
              },
              "voice-microphone",
            )
          : null
        g[52] !== v ? ((c = (0, i.jsx)(tj.N, { initial: !1, children: v })), (g[52] = v), (g[53] = c)) : (c = g[53])
        let y = X ? void 0 : "pet-controls",
          w = J
            ? (0, i.jsx)(t8, {
                ariaLabel: $.formatMessage(m),
                arePetControlsExpanded: D,
                controlCornerRadius: ei,
                controlHeight: ea,
                controlWidth: et,
                disabled: Q || Z,
                mascot: E,
                nativeSurfaceId: "voice-controls",
                onAnimationFrame: k,
                petControlsAppearance: z,
                position: (0, tJ.oO)({ ...t, mascot: E, showsNotificationBadge: K, surfaceId: "voice-controls" }),
                tooltipContent: (0, i.jsx)(tZ.A, { ...m }),
                visibilityClassName: h,
                onClick: () => {
                  n ? _?.() : ee && null != T ? T() : G ? _?.() : O?.()
                },
                children:
                  null != A
                    ? (0, i.jsx)(t1.I, { className: "text-danger", "aria-hidden": !1, asset: tW.m })
                    : n || ((X || null == T) && (ee || Z))
                      ? (0, i.jsx)(t1.I, { "aria-hidden": !1, asset: tG.Q })
                      : Q
                        ? (0, i.jsx)(t0.y, { className: "icon-xs" })
                        : (0, i.jsx)(B.ERJ, {}),
              })
            : null
        ;(g[54] !== M || g[55] !== y || g[56] !== w
          ? ((u = (0, i.jsxs)("div", {
              className: "persistentControls-VYJg29",
              "data-avatar-overlay-native-glass-group": y,
              children: [M, w],
            })),
            (g[54] = M),
            (g[55] = y),
            (g[56] = w),
            (g[57] = u))
          : (u = g[57]),
          (a = tj.N),
          (r = !1),
          (l = n
            ? (0, i.jsx)(
                t8,
                {
                  ariaLabel: $.formatMessage(Y ? t9.unmuteOutput : t9.muteOutput),
                  arePetControlsExpanded: D,
                  controlCornerRadius: ei,
                  controlHeight: ea,
                  controlWidth: et,
                  disabled: !ee,
                  isAnimated: !0,
                  isPressed: Y,
                  mascot: E,
                  nativeSurfaceId: "voice-output",
                  onAnimationFrame: k,
                  petControlsAppearance: z,
                  position: (0, tJ.oO)({ ...t, mascot: E, showsNotificationBadge: K, surfaceId: "voice-output" }),
                  tooltipContent: (0, i.jsx)(tZ.A, { ...(Y ? t9.unmuteOutput : t9.muteOutput) }),
                  visibilityClassName: h,
                  onClick: P,
                  children: Y
                    ? (0, i.jsx)(t1.I, { "aria-hidden": !1, asset: tK })
                    : (0, i.jsx)(t1.I, { "aria-hidden": !1, asset: t$.L }),
                },
                "voice-output",
              )
            : null),
          (g[3] = U),
          (g[4] = D),
          (g[5] = V),
          (g[6] = H),
          (g[7] = M),
          (g[8] = ei),
          (g[9] = ea),
          (g[10] = et),
          (g[11] = A),
          (g[12] = $),
          (g[13] = ee),
          (g[14] = W),
          (g[15] = Y),
          (g[16] = G),
          (g[17] = X),
          (g[18] = Q),
          (g[19] = Z),
          (g[20] = E),
          (g[21] = k),
          (g[22] = T),
          (g[23] = O),
          (g[24] = _),
          (g[25] = N),
          (g[26] = P),
          (g[27] = z),
          (g[28] = q),
          (g[29] = K),
          (g[30] = J),
          (g[31] = en),
          (g[32] = eo),
          (g[33] = er),
          (g[34] = el),
          (g[35] = a),
          (g[36] = o),
          (g[37] = r),
          (g[38] = l),
          (g[39] = s),
          (g[40] = c),
          (g[41] = u),
          (g[42] = p))
      } else ((a = g[35]), (o = g[36]), (r = g[37]), (l = g[38]), (s = g[39]), (c = g[40]), (u = g[41]), (p = g[42]))
      return (
        g[58] !== a || g[59] !== r || g[60] !== l
          ? ((f = (0, i.jsx)(a, { initial: r, children: l })), (g[58] = a), (g[59] = r), (g[60] = l), (g[61] = f))
          : (f = g[61]),
        g[62] !== o || g[63] !== s || g[64] !== c || g[65] !== u || g[66] !== f
          ? ((m = (0, i.jsxs)(o, { reducedMotion: s, children: [c, u, f] })),
            (g[62] = o),
            (g[63] = s),
            (g[64] = c),
            (g[65] = u),
            (g[66] = f),
            (g[67] = m))
          : (m = g[67]),
        g[68] !== p || g[69] !== m
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [p, m] })), (g[68] = p), (g[69] = m), (g[70] = h))
          : (h = g[70]),
        h
      )
    }
    function t6(e) {
      e.stopPropagation()
    }
    function t7(e) {
      e.stopPropagation()
    }
    function t8(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        g,
        v,
        y,
        w,
        C,
        b = (0, n.c)(68),
        {
          ariaLabel: x,
          arePetControlsExpanded: M,
          children: A,
          controlCornerRadius: I,
          controlHeight: S,
          controlWidth: R,
          disabled: E,
          isAnimated: k,
          isPressed: O,
          mascot: _,
          nativeSurfaceId: T,
          onAnimationFrame: N,
          onClick: P,
          petControlsAppearance: L,
          position: F,
          tooltipContent: q,
          visibilityClassName: j,
        } = e,
        D = void 0 !== k && k,
        U = (0, tQ.tF)(),
        V = M ? tD.z1 : tD.Wm,
        H = M ? tD.P7 : tD.y1,
        B = `calc(50% + ${F.x}px)`,
        X = `calc(100% + ${F.y - _.height}px)`
      b[0] !== I || b[1] !== S || b[2] !== R || b[3] !== B || b[4] !== X
        ? ((t = { borderRadius: I, height: S, left: B, top: X, width: R }),
          (b[0] = I),
          (b[1] = S),
          (b[2] = R),
          (b[3] = B),
          (b[4] = X),
          (b[5] = t))
        : (t = b[5])
      let W = t
      ;(b[6] !== W ? ((a = { ...W, x: 0, y: 0, opacity: 1, scale: 1 }), (b[6] = W), (b[7] = a)) : (a = b[7]),
        b[8] !== D || b[9] !== L
          ? ((o = D
              ? { opacity: 0, transition: { duration: L.transitionDurationMs / 1e3, ease: [0.4, 0, 0.6, 1] } }
              : void 0),
            (b[8] = D),
            (b[9] = L),
            (b[10] = o))
          : (o = b[10]),
        b[11] !== W || b[12] !== D || b[13] !== L
          ? ((r = !!D && { ...W, borderRadius: L.compactControlCornerRadius, opacity: 0, scale: 0.45, x: 0, y: -8 }),
            (b[11] = W),
            (b[12] = D),
            (b[13] = L),
            (b[14] = r))
          : (r = b[14]))
      let Y = !U
      ;(b[15] !== H
        ? ((l = { default: t4, borderRadius: H, height: H, left: H, top: H, width: H }), (b[15] = H), (b[16] = l))
        : (l = b[16]),
        b[17] !== U || b[18] !== T
          ? ((s = () => {
              U ||
                eN.v.debug("Avatar overlay voice control dismissal completed", {
                  safe: { surfaceId: T, timeMs: performance.now() },
                })
            }),
            (b[17] = U),
            (b[18] = T),
            (b[19] = s))
          : (s = b[19]),
        b[20] !== U || b[21] !== T || b[22] !== L
          ? ((c = () => {
              U ||
                eN.v.debug("Avatar overlay voice control dismissal started", {
                  safe: { durationMs: L.transitionDurationMs, surfaceId: T, timeMs: performance.now() },
                })
            }),
            (b[20] = U),
            (b[21] = T),
            (b[22] = L),
            (b[23] = c))
          : (c = b[23]))
      let z = !M && "!border-transparent"
      ;(b[24] !== z || b[25] !== j
        ? ((u = (0, t_.A)("group/voice-action no-drag", z, j)), (b[24] = z), (b[25] = j), (b[26] = u))
        : (u = b[26]),
        b[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { borderRadius: "inherit", height: "100%", width: "100%" }), (b[27] = d))
          : (d = b[27]))
      let K = E || !U,
        $ = E ? "cursor-default" : "cursor-interaction",
        G =
          O && "voice-microphone" === T
            ? "bg-danger-solid not-disabled:not-aria-disabled:hover:bg-danger-solid/90 text-danger-solid"
            : "enabled:active:bg-text/12 dark:enabled:active:bg-text/15"
      ;(b[28] !== $ || b[29] !== G
        ? ((p = (0, t_.A)(
            "flex size-full items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            $,
            G,
          )),
          (b[28] = $),
          (b[29] = G),
          (b[30] = p))
        : (p = b[30]),
        b[31] !== P
          ? ((f = (e) => {
              ;(e.stopPropagation(), P?.())
            }),
            (b[31] = P),
            (b[32] = f))
          : (f = b[32]))
      let Q = M ? 0 : L.contentHiddenBlurRadiusPx
      b[33] !== Q ? ((m = (0, tD.BP)(Q)), (b[33] = Q), (b[34] = m)) : (m = b[34])
      let Z = +!!M,
        J = M ? 1 : L.contentHiddenScale
      return (
        b[35] !== m || b[36] !== Z || b[37] !== J
          ? ((h = { filter: m, opacity: Z, scale: J }), (b[35] = m), (b[36] = Z), (b[37] = J), (b[38] = h))
          : (h = b[38]),
        b[39] !== A || b[40] !== V || b[41] !== h
          ? ((g = (0, i.jsx)(tF.P.span, {
              animate: h,
              className: "flex items-center justify-center",
              initial: !1,
              transition: V,
              children: A,
            })),
            (b[39] = A),
            (b[40] = V),
            (b[41] = h),
            (b[42] = g))
          : (g = b[42]),
        b[43] !== x || b[44] !== O || b[45] !== K || b[46] !== p || b[47] !== f || b[48] !== g
          ? ((v = (0, i.jsx)("button", {
              type: "button",
              "aria-label": x,
              "aria-pressed": O,
              disabled: K,
              className: p,
              onClick: f,
              children: g,
            })),
            (b[43] = x),
            (b[44] = O),
            (b[45] = K),
            (b[46] = p),
            (b[47] = f),
            (b[48] = g),
            (b[49] = v))
          : (v = b[49]),
        b[50] !== v || b[51] !== q
          ? ((y = (0, i.jsx)(tX.m, { contentClassName: "pointer-events-none", content: q, children: v })),
            (b[50] = v),
            (b[51] = q),
            (b[52] = y))
          : (y = b[52]),
        b[53] !== I || b[54] !== T || b[55] !== u || b[56] !== y
          ? ((w = (0, i.jsx)(t3, { className: u, nativeCornerRadius: I, nativeSurfaceId: T, style: d, children: y })),
            (b[53] = I),
            (b[54] = T),
            (b[55] = u),
            (b[56] = y),
            (b[57] = w))
          : (w = b[57]),
        b[58] !== N ||
        b[59] !== s ||
        b[60] !== c ||
        b[61] !== w ||
        b[62] !== a ||
        b[63] !== o ||
        b[64] !== r ||
        b[65] !== Y ||
        b[66] !== l
          ? ((C = (0, i.jsx)(tF.P.div, {
              animate: a,
              className: "absolute z-30 -translate-x-1/2",
              exit: o,
              initial: r,
              inert: Y,
              transition: l,
              onAnimationComplete: s,
              onAnimationStart: c,
              onUpdate: N,
              children: w,
            })),
            (b[58] = N),
            (b[59] = s),
            (b[60] = c),
            (b[61] = w),
            (b[62] = a),
            (b[63] = o),
            (b[64] = r),
            (b[65] = Y),
            (b[66] = l),
            (b[67] = C))
          : (C = b[67]),
        C
      )
    }
    let t9 = (0, w.YK)({
      start: { id: "avatarOverlay.startRealtimeVoice", defaultMessage: "Start new voice chat" },
      stop: { id: "avatarOverlay.stopRealtimeVoice", defaultMessage: "Stop voice chat" },
      starting: { id: "avatarOverlay.startingRealtimeVoice", defaultMessage: "Starting voice chat" },
      openThread: { id: "avatarOverlay.openRealtimeVoiceThread", defaultMessage: "Open voice chat" },
      muteMicrophone: { id: "avatarOverlay.muteMicrophone", defaultMessage: "Mute microphone" },
      unmuteMicrophone: { id: "avatarOverlay.unmuteMicrophone", defaultMessage: "Unmute microphone" },
      muteOutput: { id: "avatarOverlay.muteOutput", defaultMessage: "Mute voice chat" },
      unmuteOutput: { id: "avatarOverlay.unmuteOutput", defaultMessage: "Unmute voice chat" },
    })
    var ae = a("hV6B"),
      at = a("m5G2"),
      aa = "thinkingShimmer-xcf4BW"
    function ai(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(23),
        { className: u, screenEdgeFallback: d, style: p, text: f, tone: m } = e,
        h = void 0 === m ? "neutral" : m,
        v = (0, g.useRef)(null),
        y = d?.belowAnchorTop,
        w = d?.mascotTop,
        C = d?.occupiedBounds,
        b = d?.visibleBounds.top,
        x = null == d ? void 0 : d.visibleBounds.top + d.visibleBounds.height
      ;(c[0] !== y || c[1] !== w || c[2] !== C || c[3] !== x || c[4] !== b
        ? ((t = () => {
            let e = v.current
            if (null == e || null == y || null == w || null == b || null == x) return
            let t = () => {
              let t =
                  "availTop" in window.screen && "number" == typeof window.screen.availTop ? window.screen.availTop : 0,
                a = window.screen.availHeight > 0 ? t + window.screen.availHeight - window.screenY : x
              e.style.top = `${(0, tJ.$b)({ belowAnchorTop: y, mascotTop: w, occupiedBounds: C?.get(), pillHeight: e.offsetHeight, visibleViewportBottom: Math.min(x, a), visibleViewportTop: b })}px`
            }
            t()
            let a = C?.on("change", t),
              i = (0, at.J)({ axis: "height", target: e, onChange: t })
            return (
              window.addEventListener("resize", t),
              () => {
                ;(a?.(), i?.(), window.removeEventListener("resize", t))
              }
            )
          }),
          (a = [y, w, C, x, b]),
          (c[0] = y),
          (c[1] = w),
          (c[2] = C),
          (c[3] = x),
          (c[4] = b),
          (c[5] = t),
          (c[6] = a))
        : ((t = c[5]), (a = c[6])),
        (0, g.useLayoutEffect)(t, a))
      let M = "danger" === h ? "assertive" : "polite"
      c[7] !== u ? ((o = (0, t_.A)("no-drag pointer-events-none", u)), (c[7] = u), (c[8] = o)) : (o = c[8])
      let A = "danger" === h ? "alert" : "status",
        I = "danger" === h ? "small" : "micro",
        S = "danger" === h ? "block text-center break-words whitespace-normal" : "truncate"
      return (
        c[9] !== S || c[10] !== h
          ? ((r = (0, t_.A)("max-w-full align-bottom", S, "neutral" === h && ["loading-shimmer-pure-text", aa])),
            (c[9] = S),
            (c[10] = h),
            (c[11] = r))
          : (r = c[11]),
        c[12] !== r || c[13] !== f
          ? ((l = (0, i.jsx)("span", { className: r, children: f })), (c[12] = r), (c[13] = f), (c[14] = l))
          : (l = c[14]),
        c[15] !== p || c[16] !== l || c[17] !== M || c[18] !== o || c[19] !== A || c[20] !== I || c[21] !== h
          ? ((s = (0, i.jsx)(ae.sR, {
              "aria-live": M,
              className: o,
              nativeSurfaceId: "voice-status",
              ref: v,
              role: A,
              size: I,
              style: p,
              tone: h,
              children: l,
            })),
            (c[15] = p),
            (c[16] = l),
            (c[17] = M),
            (c[18] = o),
            (c[19] = A),
            (c[20] = I),
            (c[21] = h),
            (c[22] = s))
          : (s = c[22]),
        s
      )
    }
    var an = a("KUNU"),
      ao = a("qGR1"),
      ar = a("gipA"),
      al = a("tUff"),
      as = a("PdX4")
    let ac = (0, tz.a)({
        name: "clock-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          visualBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          center: { x: 14, y: 14 },
          insets: { top: 2.669922, right: 2.669922, bottom: 2.669922, left: 2.669922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
        },
        capabilities: ["icon"],
        body: '<path d="M14 7.33691C14.4582 7.33712 14.8301 7.70873 14.8301 8.16699V13.793C14.83 14.1455 14.6896 14.4841 14.4404 14.7334L11.6699 17.5039C11.5079 17.6659 11.2955 17.7469 11.083 17.7469C10.6245 17.7469 10.2531 17.3756 10.2531 16.9171C10.2531 16.7046 10.3341 16.4922 10.4961 16.3301L13.1699 13.6562V8.16699C13.1699 7.7086 13.5416 7.33691 14 7.33691Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.66992C20.2574 2.66992 25.3301 7.74261 25.3301 14C25.3301 20.2574 20.2574 25.3301 14 25.3301C7.74261 25.3301 2.66992 20.2574 2.66992 14C2.66992 7.74261 7.74261 2.66992 14 2.66992ZM14 4.33008C8.65941 4.33008 4.33008 8.65941 4.33008 14C4.33008 19.3406 8.65941 23.6699 14 23.6699C19.3406 23.6699 23.6699 19.3406 23.6699 14C23.6699 8.65941 19.3406 4.33008 14 4.33008Z" fill="currentColor"/>',
      }),
      au = (0, tz.a)({
        name: "exclamation-mark-circle-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 2.169922, y: 2.169922, width: 23.660156, height: 23.660156 },
          visualBounds: { x: 2.169922, y: 2.169922, width: 23.660156, height: 23.660156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 2.169922, y: 2.169922, width: 23.660156, height: 23.660156 },
          center: { x: 14, y: 14 },
          insets: { top: 2.169922, right: 2.169922, bottom: 2.169922, left: 2.169922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
        },
        capabilities: ["icon"],
        body: '<path d="M14.1377 16.377C14.8139 16.4458 15.3418 17.0175 15.3418 17.7119C15.3416 18.4524 14.7414 19.0523 14.001 19.0527C13.3064 19.0527 12.7347 18.5251 12.666 17.8486L12.6592 17.7119L12.666 17.5742C12.7348 16.8979 13.3065 16.3701 14.001 16.3701L14.1377 16.377Z" fill="currentColor"/> <path d="M14 8.94727C14.4583 8.9474 14.8301 9.31903 14.8301 9.77734V13.5693C14.8299 14.0275 14.4582 14.3993 14 14.3994C13.5417 14.3994 13.1701 14.0276 13.1699 13.5693V9.77734C13.1699 9.31895 13.5416 8.94727 14 8.94727Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.16992C20.5335 2.16992 25.8301 7.46647 25.8301 14C25.8301 20.5335 20.5335 25.8301 14 25.8301C7.46647 25.8301 2.16992 20.5335 2.16992 14C2.16992 7.46647 7.46647 2.16992 14 2.16992ZM14 3.83008C8.38326 3.83008 3.83008 8.38326 3.83008 14C3.83008 19.6167 8.38326 24.1699 14 24.1699C19.6167 24.1699 24.1699 19.6167 24.1699 14C24.1699 8.38326 19.6167 3.83008 14 3.83008Z" fill="currentColor"/>',
      }),
      ad = (0, tz.a)({
        name: "exclamationmark-circle-fill-light-16",
        canvas: { width: 16, height: 16, viewBox: "0 0 16 16" },
        paint: { kind: "monochrome" },
        optical: { shape: "circular" },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM8 9.30371C7.57689 9.30383 7.22923 9.62595 7.1875 10.0381L7.18262 10.1211L7.1875 10.2051C7.22945 10.617 7.57705 10.9384 8 10.9385C8.45123 10.9383 8.81738 10.5724 8.81738 10.1211C8.81726 9.69822 8.49579 9.35064 8.08398 9.30859L8 9.30371ZM8 5.06152C7.71005 5.06152 7.47461 5.29696 7.47461 5.58691V7.75391C7.47478 8.04371 7.71016 8.27832 8 8.27832C8.28984 8.27832 8.52522 8.04371 8.52539 7.75391V5.58691C8.52539 5.29696 8.28995 5.06152 8 5.06152Z" fill="currentColor"/>',
      }),
      ap = (0, tz.a)({
        name: "questionmark-circle-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          visualBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          center: { x: 14, y: 14 },
          insets: { top: 2.669922, right: 2.669922, bottom: 2.669922, left: 2.669922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0137 17.9922C14.6079 18.0525 15.0713 18.5549 15.0713 19.165C15.0711 19.8155 14.544 20.3426 13.8936 20.3428C13.2835 20.3428 12.781 19.8793 12.7207 19.2852L12.7148 19.165L12.7207 19.0439C12.7812 18.4499 13.2836 17.9863 13.8936 17.9863L14.0137 17.9922Z" fill="currentColor"/> <path d="M14.0078 7.65918C14.8602 7.66207 15.7732 7.91501 16.4932 8.48047C17.241 9.06799 17.7412 9.96494 17.7412 11.124C17.7412 12.1438 17.3668 12.8939 16.8174 13.5068C16.316 14.066 15.6241 14.5485 15.0449 14.9961C14.8921 15.1142 14.7989 15.1952 14.7393 15.2705C14.7135 15.3031 14.7035 15.3237 14.7002 15.332C14.698 15.3377 14.6973 15.3402 14.6973 15.3447V15.7578C14.6973 16.2162 14.3256 16.5879 13.8672 16.5879C13.4091 16.5876 13.0371 16.216 13.0371 15.7578V15.3447C13.0371 14.4189 13.7712 13.8821 14.0293 13.6826C14.7178 13.1505 15.2135 12.8095 15.582 12.3984C15.9024 12.0409 16.081 11.6731 16.0811 11.124C16.0811 10.489 15.8266 10.0681 15.4678 9.78613C15.0854 9.48579 14.5459 9.31838 13.9932 9.31836H13.9854L13.9775 9.31738C13.0428 9.29987 12.1792 9.74958 11.8564 10.5439C11.6838 10.9683 11.1999 11.1725 10.7754 11C10.3511 10.8273 10.147 10.3434 10.3193 9.91895C10.9704 8.31641 12.5894 7.63802 13.9932 7.65918H13.9961C14.0002 7.65924 14.0047 7.6582 14.0088 7.6582L14.0078 7.65918Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.66992C20.2574 2.66992 25.3301 7.74261 25.3301 14C25.3301 20.2574 20.2574 25.3301 14 25.3301C7.74261 25.3301 2.66992 20.2574 2.66992 14C2.66992 7.74261 7.74261 2.66992 14 2.66992ZM14 4.33008C8.65941 4.33008 4.33008 8.65941 4.33008 14C4.33008 19.3406 8.65941 23.6699 14 23.6699C19.3406 23.6699 23.6699 19.3406 23.6699 14C23.6699 8.65941 19.3406 4.33008 14 4.33008Z" fill="currentColor"/>',
      })
    function af(e) {
      switch (e.iconType) {
        case "check-circle":
          return (0, i.jsx)(t1.I, { className: "text-green", asset: al.m })
        case "clock":
          return (0, i.jsx)(B.QC9, { className: "text-secondary" })
        case "spinner":
          return null
        case "warning":
          return (0, i.jsx)(t1.I, { className: "text-danger", asset: ad })
      }
    }
    function am(e) {
      switch (e) {
        case "waiting":
          return 0
        case "failed":
          return 1
        case "review":
          return 2
        case "running":
          return 3
        case "idle":
          return 4
      }
    }
    function ah(e) {
      return JSON.stringify([
        e.id,
        e.turnKey,
        e.level,
        e.isLoading,
        e.waitingRequest?.kind,
        e.waitingRequest?.kind === "plan" ? e.waitingRequest.turnId : e.waitingRequest?.requestId,
      ])
    }
    var ag = a("Sm6l")
    function av(e) {
      let t,
        a,
        o = (0, n.c)(4),
        { ariaLabel: r, onClick: l } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)("svg", {
              "aria-hidden": !0,
              className: "size-3",
              viewBox: "0 0 12 12",
              fill: "none",
              children: (0, i.jsx)("path", {
                d: "M3 3 9 9M9 3 3 9",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: "1.8",
              }),
            })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== r || o[2] !== l
          ? ((a = (0, i.jsx)(ae.yl, {
              className:
                "w-fit rounded-full transition-transform duration-basic ease-out active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100",
              variant: "activity-dismiss",
              children: (0, i.jsx)(ag.$, {
                "aria-label": r,
                color: "ghostActive",
                radius: "full",
                size: "iconCircleSm",
                onClick: l,
                children: t,
              }),
            })),
            (o[1] = r),
            (o[2] = l),
            (o[3] = a))
          : (a = o[3]),
        a
      )
    }
    var ay = a("HmNc"),
      aw = "notificationPresentation-S5hOn6",
      aC = "inlineSubtitleSolidText-MYmDPb"
    let ab = { damping: tD.Wm.default.damping, mass: tD.Wm.default.mass, stiffness: tD.Wm.default.stiffness }
    function ax(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        f,
        m,
        h = (0, n.c)(102),
        {
          children: v,
          flight: y,
          onComplete: w,
          onStackCovered: C,
          onSourceReleased: b,
          onGeometryAnimationFrame: x,
        } = e,
        M = (0, g.useRef)(null),
        A = (0, tT.I)(),
        I = (0, tN.d)(0),
        S = (0, tN.d)(0),
        R = (0, tN.d)(y.origin.width),
        E = (0, tN.d)(y.origin.height),
        k = (0, tN.d)(0),
        O = (0, tN.d)(0),
        _ = (0, tN.d)(0),
        T = (0, tN.d)((y.origin.textOffsetX ?? 0) / (y.origin.zoom ?? 1)),
        N = (0, tN.d)((y.origin.textOffsetY ?? 0) / (y.origin.zoom ?? 1)),
        P = (0, tN.d)(y.origin.zoom ?? 1),
        L = (0, ay.z)(0, ab),
        F = (0, tN.d)(y.origin.textFontWeight ?? 0),
        q = (0, tN.d)((y.origin.textOffsetX ?? 0) - y.origin.width / 2),
        j = (0, ay.z)(q, ab),
        D = (0, tN.d)(y.origin.textOffsetY ?? 0),
        U = (0, ay.z)(D, ab),
        V = (0, ay.z)(0, tD.z1.filter),
        H = (0, tN.d)(y.origin.left + y.origin.width / 2),
        B = (0, tN.d)(y.origin.top),
        X = (0, tN.d)(y.origin.width),
        W = (0, tN.d)(y.origin.height)
      h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { damping: tD.z1.filter.damping, mass: tD.z1.filter.mass, stiffness: tD.z1.filter.stiffness }),
          (h[0] = t))
        : (t = h[0])
      let Y = (0, ay.z)(H, t),
        z = (0, ay.z)(B, ab),
        K = (0, ay.z)(X, ab),
        $ = (0, ay.z)(W, ab)
      h[1] !== y.notificationId || h[2] !== w
        ? ((a = () => w(y.notificationId)), (h[1] = y.notificationId), (h[2] = w), (h[3] = a))
        : (a = h[3])
      let G = (0, g.useEffectEvent)(a)
      h[4] !== y.notificationId || h[5] !== b
        ? ((o = () => b(y.notificationId)), (h[4] = y.notificationId), (h[5] = b), (h[6] = o))
        : (o = h[6])
      let Q = (0, g.useEffectEvent)(o)
      h[7] !== y.notificationId || h[8] !== C
        ? ((r = () => C?.(y.notificationId)), (h[7] = y.notificationId), (h[8] = C), (h[9] = r))
        : (r = h[9])
      let Z = (0, g.useEffectEvent)(r)
      h[10] !== x ? ((l = () => x?.()), (h[10] = x), (h[11] = l)) : (l = h[11])
      let J = (0, g.useEffectEvent)(l)
      ;(h[12] !== G ||
      h[13] !== L ||
      h[14] !== O ||
      h[15] !== _ ||
      h[16] !== Z ||
      h[17] !== y.coveredNotificationId ||
      h[18] !== y.notificationId ||
      h[19] !== y.origin.textFontWeight ||
      h[20] !== y.origin.textOffsetX ||
      h[21] !== y.origin.textOffsetY ||
      h[22] !== E ||
      h[23] !== I ||
      h[24] !== k ||
      h[25] !== A ||
      h[26] !== Y ||
      h[27] !== $ ||
      h[28] !== j ||
      h[29] !== U ||
      h[30] !== z ||
      h[31] !== K ||
      h[32] !== J ||
      h[33] !== Q ||
      h[34] !== V ||
      h[35] !== H ||
      h[36] !== W ||
      h[37] !== q ||
      h[38] !== D ||
      h[39] !== B ||
      h[40] !== X ||
      h[41] !== T ||
      h[42] !== N ||
      h[43] !== F ||
      h[44] !== S ||
      h[45] !== R ||
      h[46] !== P
        ? ((s = () => {
            let e = M.current
            if (null == e) return
            let t = performance.now(),
              a = document.querySelector(
                `[data-avatar-overlay-native-surface-id="${CSS.escape(`activity-${y.notificationId}`)}"]`,
              )
            if (null == a || A) return void G()
            let i = e.parentElement
            if (null == i) return void G()
            let n = a.closest("[data-avatar-overlay-activity-stack-item]"),
              o = a.querySelector('[data-avatar-overlay-activity-text="title"]'),
              r = null == o ? F.get() : Number(getComputedStyle(o.firstElementChild ?? o).fontWeight)
            if (null == y.origin.textOffsetX && null != o) {
              let e = a.getBoundingClientRect(),
                t = o.getBoundingClientRect().left - (e.left + e.width / 2)
              ;(q.jump(t), j.jump(t))
            }
            if (null == y.origin.textOffsetY && null != o) {
              let e = o.getBoundingClientRect().top - a.getBoundingClientRect().top
              ;(D.jump(e), U.jump(e))
            }
            let l = 0,
              s = !1,
              c = !1,
              u = () => {
                let e = a.getBoundingClientRect()
                if (e.width <= 0 || e.height <= 0) return void G()
                let d = i.getBoundingClientRect(),
                  p = d.width / i.offsetWidth || 1
                ;(P.set(p),
                  H.set(window.screenX + e.left + e.width / 2),
                  B.set(window.screenY + e.top),
                  X.set(e.width),
                  W.set(e.height))
                let f = o?.getBoundingClientRect(),
                  m = (f?.left ?? e.left) - (e.left + e.width / 2),
                  h = null == f ? 0 : f.top - e.top
                ;(q.set(m), D.set(h))
                let g = K.get()
                ;(O.set((j.get() - m + (g - e.width) / 2) / p),
                  _.set((U.get() - h) / p),
                  T.set((j.get() + g / 2) / p),
                  N.set(U.get() / p))
                let v = Math.min(1, Math.max(0, L.get()))
                F.set((y.origin.textFontWeight ?? r) * (1 - v) + r * v)
                let w = $.get()
                ;(0 !== z.getVelocity() || 0 !== Y.getVelocity() || 0 !== K.getVelocity() || 0 !== $.getVelocity()) &&
                  V.set(1)
                let C = Y.get() - window.screenX - g / 2,
                  b = z.get() - window.screenY
                if (!c && null != y.coveredNotificationId) {
                  let e = CSS.escape(y.coveredNotificationId),
                    a = (
                      document.querySelector(`[data-avatar-overlay-quick-chat-flight="${e}"]`) ??
                      document.querySelector(`[data-avatar-overlay-native-surface-id="activity-${e}"]`)
                    )?.getBoundingClientRect()
                  if (null != a) {
                    let e = Math.max(0, Math.min(C + g, a.right) - Math.max(C, a.left)),
                      i = Math.max(0, Math.min(b + w, a.bottom) - Math.max(b, a.top))
                    e > 0 &&
                      i > 0 &&
                      ((c = !0),
                      eN.v.debug("Quick Chat pill reached the previous task", {
                        safe: { elapsedMs: Math.round(performance.now() - t) },
                        sensitive: { notificationId: y.notificationId },
                      }),
                      Z())
                  }
                }
                let x = document
                  .querySelector('[data-avatar-overlay-native-surface-id="composer"]')
                  ?.getBoundingClientRect()
                if (
                  (!s &&
                    (null == x || C >= x.right || C + g <= x.left || b >= x.bottom || b + w <= x.top) &&
                    ((s = !0), Q()),
                  I.set((C - d.left) / p),
                  S.set((b - d.top) / p),
                  R.set(g / p),
                  E.set(w / p),
                  k.set(null == n ? 1 : Number(getComputedStyle(n).opacity)),
                  J(),
                  0.01 > Math.abs(L.get() - 1) &&
                    [
                      [Y, H],
                      [z, B],
                      [K, X],
                      [$, W],
                      [j, q],
                      [U, D],
                    ].every(aM))
                ) {
                  ;(eN.v.info("Quick Chat pill throw settled", {
                    safe: { elapsedMs: Math.round(performance.now() - t) },
                    sensitive: { notificationId: y.notificationId },
                  }),
                    G())
                  return
                }
                l = requestAnimationFrame(u)
              }
            return (
              u(),
              L.set(1),
              () => {
                cancelAnimationFrame(l)
              }
            )
          }),
          (h[12] = G),
          (h[13] = L),
          (h[14] = O),
          (h[15] = _),
          (h[16] = Z),
          (h[17] = y.coveredNotificationId),
          (h[18] = y.notificationId),
          (h[19] = y.origin.textFontWeight),
          (h[20] = y.origin.textOffsetX),
          (h[21] = y.origin.textOffsetY),
          (h[22] = E),
          (h[23] = I),
          (h[24] = k),
          (h[25] = A),
          (h[26] = Y),
          (h[27] = $),
          (h[28] = j),
          (h[29] = U),
          (h[30] = z),
          (h[31] = K),
          (h[32] = J),
          (h[33] = Q),
          (h[34] = V),
          (h[35] = H),
          (h[36] = W),
          (h[37] = q),
          (h[38] = D),
          (h[39] = B),
          (h[40] = X),
          (h[41] = T),
          (h[42] = N),
          (h[43] = F),
          (h[44] = S),
          (h[45] = R),
          (h[46] = P),
          (h[47] = s))
        : (s = h[47]),
        h[48] !== L ||
        h[49] !== O ||
        h[50] !== _ ||
        h[51] !== y.coveredNotificationId ||
        h[52] !== y.notificationId ||
        h[53] !== y.origin ||
        h[54] !== E ||
        h[55] !== I ||
        h[56] !== k ||
        h[57] !== A ||
        h[58] !== Y ||
        h[59] !== $ ||
        h[60] !== j ||
        h[61] !== U ||
        h[62] !== z ||
        h[63] !== K ||
        h[64] !== V ||
        h[65] !== H ||
        h[66] !== W ||
        h[67] !== q ||
        h[68] !== D ||
        h[69] !== B ||
        h[70] !== X ||
        h[71] !== T ||
        h[72] !== N ||
        h[73] !== F ||
        h[74] !== S ||
        h[75] !== R ||
        h[76] !== P
          ? ((c = [
              y.notificationId,
              y.origin,
              y.coveredNotificationId,
              A,
              I,
              S,
              R,
              E,
              k,
              O,
              _,
              T,
              N,
              P,
              L,
              F,
              q,
              j,
              D,
              U,
              V,
              H,
              B,
              X,
              W,
              Y,
              z,
              K,
              $,
            ]),
            (h[48] = L),
            (h[49] = O),
            (h[50] = _),
            (h[51] = y.coveredNotificationId),
            (h[52] = y.notificationId),
            (h[53] = y.origin),
            (h[54] = E),
            (h[55] = I),
            (h[56] = k),
            (h[57] = A),
            (h[58] = Y),
            (h[59] = $),
            (h[60] = j),
            (h[61] = U),
            (h[62] = z),
            (h[63] = K),
            (h[64] = V),
            (h[65] = H),
            (h[66] = W),
            (h[67] = q),
            (h[68] = D),
            (h[69] = B),
            (h[70] = X),
            (h[71] = T),
            (h[72] = N),
            (h[73] = F),
            (h[74] = S),
            (h[75] = R),
            (h[76] = P),
            (h[77] = c))
          : (c = h[77]),
        (0, g.useLayoutEffect)(s, c),
        h[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t_.A)("absolute text-sm text-default", "Layer-vdla4T", aw)), (h[78] = u))
          : (u = h[78]))
      let ee = y.notificationId
      return (
        h[79] !== I || h[80] !== k || h[81] !== S || h[82] !== R
          ? ((d = { left: I, top: S, width: R, opacity: k }),
            (h[79] = I),
            (h[80] = k),
            (h[81] = S),
            (h[82] = R),
            (h[83] = d))
          : (d = h[83]),
        h[84] !== L || h[85] !== y.origin || h[86] !== T || h[87] !== N || h[88] !== P
          ? ((p = (0, i.jsx)(aA, { origin: y.origin, textLeft: T, textTop: N, zoom: P, progress: L })),
            (h[84] = L),
            (h[85] = y.origin),
            (h[86] = T),
            (h[87] = N),
            (h[88] = P),
            (h[89] = p))
          : (p = h[89]),
        h[90] !== v || h[91] !== O || h[92] !== _ || h[93] !== E || h[94] !== V || h[95] !== p || h[96] !== F
          ? ((f = v({ height: E, contentX: O, contentY: _, subtitleOpacity: V, titleFontWeight: F, appshots: p })),
            (h[90] = v),
            (h[91] = O),
            (h[92] = _),
            (h[93] = E),
            (h[94] = V),
            (h[95] = p),
            (h[96] = F),
            (h[97] = f))
          : (f = h[97]),
        h[98] !== y.notificationId || h[99] !== d || h[100] !== f
          ? ((m = (0, i.jsx)(tF.P.div, {
              ref: M,
              "aria-hidden": !0,
              className: u,
              "data-avatar-overlay-quick-chat-flight": ee,
              inert: !0,
              style: d,
              children: f,
            })),
            (h[98] = y.notificationId),
            (h[99] = d),
            (h[100] = f),
            (h[101] = m))
          : (m = h[101]),
        m
      )
    }
    function aM(e) {
      let [t, a] = e
      return 0.1 > Math.abs(t.get() - a.get()) && 1 > Math.abs(t.getVelocity())
    }
    function aA(e) {
      let t,
        a,
        o,
        r,
        l = (0, n.c)(17),
        { origin: s, textLeft: c, textTop: u, zoom: d, progress: p } = e,
        f = s.zoom ?? 1,
        m = (0, tP.G)(p, aI)
      l[0] !== m || l[1] !== f || l[2] !== d
        ? ((t = () => (m.get() * f) / d.get()), (l[0] = m), (l[1] = f), (l[2] = d), (l[3] = t))
        : (t = l[3])
      let h = (0, tP.G)(t)
      return (
        l[4] !== m || l[5] !== h || l[6] !== c || l[7] !== u
          ? ((a = { x: c, y: u, opacity: m, scale: h, originX: 0, originY: 0 }),
            (l[4] = m),
            (l[5] = h),
            (l[6] = c),
            (l[7] = u),
            (l[8] = a))
          : (a = l[8]),
        l[9] !== s.appshots || l[10] !== s.textOffsetX || l[11] !== s.textOffsetY || l[12] !== f
          ? ((o = s.appshots?.map((e, t) =>
              (0, i.jsx)(
                "img",
                {
                  className: `absolute max-w-none ${e.className}`,
                  alt: "",
                  draggable: !1,
                  src: e.src,
                  style: {
                    left: (e.left - (s.textOffsetX ?? 0)) / f,
                    top: (e.top - (s.textOffsetY ?? 0)) / f,
                    width: e.width / f,
                    height: e.height / f,
                  },
                },
                t,
              ),
            )),
            (l[9] = s.appshots),
            (l[10] = s.textOffsetX),
            (l[11] = s.textOffsetY),
            (l[12] = f),
            (l[13] = o))
          : (o = l[13]),
        l[14] !== a || l[15] !== o
          ? ((r = (0, i.jsx)(tF.P.div, { className: "absolute top-0 left-0 size-0", style: a, children: o })),
            (l[14] = a),
            (l[15] = o),
            (l[16] = r))
          : (r = l[16]),
        r
      )
    }
    function aI(e) {
      return 1 - Math.min(1, Math.max(0, e))
    }
    var aS = a("mV4C")
    function aR(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(30),
        {
          animation: u,
          compactContent: p,
          expandedWidth: f,
          expandsUpward: m,
          isReplyOpen: h,
          nativeSurfaceId: v,
          overflowContent: y,
          tabEdge: w,
          children: C,
        } = e,
        b = void 0 === u ? d.ltN : u,
        x = void 0 !== m && m,
        M = void 0 !== h && h,
        A = (0, tT.I)(),
        [I, S] = (0, g.useState)(!1),
        [R, E] = (0, g.useState)(54),
        k = I || M,
        O = Math.max(54, R),
        _ = k ? O : 54,
        [T, N] = (0, g.useState)(!0),
        P = (0, g.useRef)(5e3),
        L = "left" === w ? -110 : 110
      c[0] !== L ? ((t = { scaleX: 0.75, scaleY: 0.75, width: 44, x: L }), (c[0] = L), (c[1] = t)) : (t = c[1])
      let F = t,
        q = b.durationMs / 1e3
      c[2] !== b.bounce || c[3] !== q
        ? ((a = { type: "spring", duration: q, bounce: b.bounce }), (c[2] = b.bounce), (c[3] = q), (c[4] = a))
        : (a = c[4])
      let j = a
      return (
        c[5] !== k || c[6] !== T
          ? ((o = () => {
              if (!T || k) return
              let e = Date.now(),
                t = window.setTimeout(() => {
                  ;((P.current = 0), N(!1))
                }, P.current)
              return () => {
                ;(window.clearTimeout(t), (P.current = Math.max(0, P.current - (Date.now() - e))))
              }
            }),
            (r = [k, T]),
            (c[5] = k),
            (c[6] = T),
            (c[7] = o),
            (c[8] = r))
          : ((o = c[7]), (r = c[8])),
        (0, g.useEffect)(o, r),
        c[9] !== b.startScaleX ||
        c[10] !== b.startScaleY ||
        c[11] !== b.travelPx ||
        c[12] !== C ||
        c[13] !== p ||
        c[14] !== j ||
        c[15] !== O ||
        c[16] !== f ||
        c[17] !== x ||
        c[18] !== _ ||
        c[19] !== F ||
        c[20] !== k ||
        c[21] !== M ||
        c[22] !== T ||
        c[23] !== v ||
        c[24] !== y ||
        c[25] !== A ||
        c[26] !== w
          ? ((l = T
              ? (0, i.jsxs)(tF.P.div, {
                  animate: { scaleX: 1, scaleY: 1, width: k ? f : 44, x: 0 },
                  className: "relative",
                  "data-avatar-overlay-hit-region": "quick-chat-stash-attention",
                  style: { height: _, marginTop: x ? 54 - _ : 0 },
                  "data-avatar-overlay-quick-chat-stash-attention": "true",
                  exit: {
                    ...F,
                    transition: A
                      ? { duration: 0 }
                      : {
                          scaleX: { bounce: 0.18, duration: 0.45, type: "spring" },
                          scaleY: { bounce: 0.18, duration: 0.45, type: "spring" },
                          width: { bounce: 0.18, duration: 0.45, type: "spring" },
                          x: { bounce: 0.18, duration: 0.45, type: "spring" },
                        },
                  },
                  initial: !A && {
                    scaleX: b.startScaleX,
                    scaleY: b.startScaleY,
                    width: 44,
                    x: ("left" === w ? -1 : 1) * b.travelPx,
                  },
                  transition: A
                    ? { duration: 0 }
                    : { scaleX: j, scaleY: j, width: { bounce: 0.18, duration: 0.45, type: "spring" }, x: j },
                  onPointerEnter: () => {
                    S(!0)
                  },
                  onPointerLeave: () => {
                    S(!1)
                  },
                  children: [
                    (0, i.jsx)(tF.P.div, {
                      animate: { height: k ? O : 44 },
                      className: "absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden",
                      initial: !1,
                      transition: A || M ? { duration: 0 } : { bounce: 0.18, duration: 0.45, type: "spring" },
                      children: (0, i.jsxs)(ae.yl, {
                        className: "size-full overflow-hidden",
                        nativeSurfaceId: v,
                        variant: "activity",
                        children: [
                          (0, i.jsx)(tF.P.div, {
                            ref: (e) =>
                              (0, at.J)({
                                axis: "height",
                                target: e,
                                onChange: (e) => {
                                  let { height: t } = e
                                  return E(t)
                                },
                              }),
                            animate: { opacity: +!!k },
                            className: "absolute top-0",
                            initial: !1,
                            style: { left: "left" === w ? 0 : void 0, right: "right" === w ? 0 : void 0, width: f },
                            transition: { duration: A || !k ? 0 : 0.12 },
                            children: C,
                          }),
                          (0, i.jsx)(tF.P.div, {
                            animate: { opacity: +!k },
                            className: "pointer-events-none absolute inset-y-0 flex items-center justify-center",
                            initial: !1,
                            style: { left: "left" === w ? 0 : void 0, right: "right" === w ? 0 : void 0, width: 44 },
                            transition: { duration: A || k ? 0 : 0.12 },
                            children: p,
                          }),
                        ],
                      }),
                    }),
                    null != y && k
                      ? (0, i.jsx)("div", {
                          className: (0, t_.A)("absolute -top-1 -left-1 z-20", aS.A.barMaterial, aS.A.controls),
                          children: y,
                        })
                      : null,
                  ],
                })
              : null),
            (c[9] = b.startScaleX),
            (c[10] = b.startScaleY),
            (c[11] = b.travelPx),
            (c[12] = C),
            (c[13] = p),
            (c[14] = j),
            (c[15] = O),
            (c[16] = f),
            (c[17] = x),
            (c[18] = _),
            (c[19] = F),
            (c[20] = k),
            (c[21] = M),
            (c[22] = T),
            (c[23] = v),
            (c[24] = y),
            (c[25] = A),
            (c[26] = w),
            (c[27] = l))
          : (l = c[27]),
        c[28] !== l ? ((s = (0, i.jsx)(tj.N, { children: l })), (c[28] = l), (c[29] = s)) : (s = c[29]),
        s
      )
    }
    var aE = a("zn72")
    function ak(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p = (0, n.c)(29),
        { children: f, geometry: m, layout: h } = e,
        v = (0, g.useId)(),
        y = (0, g.useRef)(null),
        w = (0, g.useRef)(null)
      p[0] !== v
        ? ((t = (e) => {
            let t = y.current,
              a = w.current
            if (null == a) return
            if (!e?.nativeMaterialsReady || null == t || t.offsetWidth <= 0 || t.offsetHeight <= 0) {
              ;(a.removeAttribute("d"), a.setAttribute("opacity", "0"), t?.style.removeProperty("mask-image"))
              return
            }
            let i = t.getBoundingClientRect()
            if (i.width <= 0 || i.height <= 0) {
              ;(a.removeAttribute("d"), a.setAttribute("opacity", "0"), t.style.removeProperty("mask-image"))
              return
            }
            let n = i.width / t.offsetWidth,
              o = i.height / t.offsetHeight
            ;(a.setAttribute(
              "d",
              (function (e) {
                if (null == e) return ""
                let { width: t, height: a } = e,
                  i = Math.min(24, t / 2, a / 2)
                return `M${i},0H${t - i}A${i},${i} 0 0 1 ${t},${i}V${a - i}A${i},${i} 0 0 1 ${t - i},${a}H${i}A${i},${i} 0 0 1 0,${a - i}V${i}A${i},${i} 0 0 1 ${i},0Z`
              })(e),
            ),
              a.setAttribute("opacity", String(e.opacity)),
              (a.style.transform = `translate(${(e.viewportRect.left - i.left) / n}px, ${(e.viewportRect.top - i.top) / o}px) scale(${e.viewportRect.width / e.width / n}, ${e.viewportRect.height / e.height / o})`),
              (t.style.maskImage = `url(#${v})`))
          }),
          (p[0] = v),
          (p[1] = t))
        : (t = p[1])
      let C = t
      ;((0, tL.L)(m, "change", C),
        p[2] !== m || p[3] !== C
          ? ((a = (e) => {
              ;((y.current = e), C(m.get()))
            }),
            (p[2] = m),
            (p[3] = C),
            (p[4] = a))
          : (a = p[4]),
        p[5] === Symbol.for("react.memo_cache_sentinel") ? ((o = { maskClip: "no-clip" }), (p[5] = o)) : (o = p[5]))
      let b = -h.mascot.left,
        x = -h.mascot.top,
        M = -h.mascot.left,
        A = -h.mascot.top
      return (
        p[6] !== h.viewport.height || p[7] !== h.viewport.width || p[8] !== M || p[9] !== A
          ? ((r = (0, i.jsx)("rect", {
              x: M,
              y: A,
              width: h.viewport.width,
              height: h.viewport.height,
              fill: "white",
            })),
            (p[6] = h.viewport.height),
            (p[7] = h.viewport.width),
            (p[8] = M),
            (p[9] = A),
            (p[10] = r))
          : (r = p[10]),
        p[11] !== m || p[12] !== C
          ? ((l = (e) => {
              ;((w.current = e), C(m.get()))
            }),
            (p[11] = m),
            (p[12] = C),
            (p[13] = l))
          : (l = p[13]),
        p[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { transformBox: "view-box", transformOrigin: "0 0" }), (p[14] = s))
          : (s = p[14]),
        p[15] !== l
          ? ((c = (0, i.jsx)("path", { ref: l, fill: "black", opacity: "0", style: s })), (p[15] = l), (p[16] = c))
          : (c = p[16]),
        p[17] !== v ||
        p[18] !== h.viewport.height ||
        p[19] !== h.viewport.width ||
        p[20] !== c ||
        p[21] !== b ||
        p[22] !== x ||
        p[23] !== r
          ? ((u = (0, i.jsx)("svg", {
              "aria-hidden": "true",
              className: "pointer-events-none absolute",
              width: "0",
              height: "0",
              children: (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                  id: v,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse",
                  x: b,
                  y: x,
                  width: h.viewport.width,
                  height: h.viewport.height,
                  children: [r, c],
                }),
              }),
            })),
            (p[17] = v),
            (p[18] = h.viewport.height),
            (p[19] = h.viewport.width),
            (p[20] = c),
            (p[21] = b),
            (p[22] = x),
            (p[23] = r),
            (p[24] = u))
          : (u = p[24]),
        p[25] !== f || p[26] !== u || p[27] !== a
          ? ((d = (0, i.jsxs)("div", {
              ref: a,
              className: "absolute inset-0",
              "data-avatar-overlay-caption-orb-mask": !0,
              style: o,
              children: [u, f],
            })),
            (p[25] = f),
            (p[26] = u),
            (p[27] = a),
            (p[28] = d))
          : (d = p[28]),
        d
      )
    }
    var aO = a("xs0G")
    function a_(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        f,
        m,
        h,
        v,
        y,
        w,
        C,
        b,
        x,
        M,
        A,
        I,
        S,
        R,
        E,
        k,
        O,
        _,
        T,
        N = (0, n.c)(94),
        {
          anchorRect: P,
          hasActivityPills: L,
          layout: F,
          presentedGeometry: q,
          prefersReducedMotion: j,
          presentation: D,
          statusText: U,
          text: V,
        } = e,
        H = void 0 === D ? "voice-orb" : D,
        B = (0, g.useRef)(null),
        X = (0, g.useRef)(null),
        W = (0, g.useRef)(null),
        [Y, z] = (0, g.useState)("auto"),
        K = null != U
      N[0] !== V ? ((t = V.trim()), (N[0] = V), (N[1] = t)) : (t = N[1])
      let $ = "" !== t
      N[2] !== $ || N[3] !== H || N[4] !== U || N[5] !== V
        ? ((a = "quick-chat" === H ? (U?.trim() ?? "") !== "" || $ : "" !== (U ?? V).trim()),
          (N[2] = $),
          (N[3] = H),
          (N[4] = U),
          (N[5] = V),
          (N[6] = a))
        : (a = N[6])
      let G = a
      N[7] !== F.placement || N[8] !== H
        ? ((o = "quick-chat" === H && F.placement.startsWith("bottom")), (N[7] = F.placement), (N[8] = H), (N[9] = o))
        : (o = N[9])
      let Q = o,
        Z = Q ? "up" : "down"
      N[10] !== H
        ? ((r =
            "quick-chat" === H
              ? { duration: 0.38, ease: [0.32, 0.72, 0, 1] }
              : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
          (N[10] = H),
          (N[11] = r))
        : (r = N[11])
      let J = r,
        ee = (0, g.useRef)(void 0),
        et = (0, g.useRef)(+!!j),
        ea = (0, tN.d)(null),
        ei = q ?? ea,
        en = P?.width ?? Math.max(d.bZi, 2 * F.mascot.width)
      "quick-chat" === H && (en = void 0 !== L && L ? d.pFD : d.uHE)
      let eo = F.quickChat?.workArea ?? F.visibleBounds,
        er = Math.min(en, Math.max(0, eo.width - 2 * d.Zkw)),
        el = Math.min(
          Math.max(null == P ? F.mascot.left + F.mascot.width / 2 : P.left + P.width / 2, eo.left + d.Zkw + er / 2),
          eo.left + eo.width - d.Zkw - er / 2,
        ),
        es = el - er / 2,
        ec = F.mascot.left + F.mascot.width / 2 - el,
        eu = 16
      "quick-chat" === H && (eu = Q ? 8 : -8)
      let ed = F.mascot.top + eu
      N[12] !== es || N[13] !== er || N[14] !== ed
        ? ((l = { left: es, top: ed, width: er, "--quick-chat-glass-spacing": d.JCZ.compactGlassSpacing }),
          (N[12] = es),
          (N[13] = er),
          (N[14] = ed),
          (N[15] = l))
        : (l = N[15])
      let ep = l
      N[16] !== ei || N[17] !== H
        ? ((s = () => {
            let e = W.current
            if (null == e) return
            if (e.offsetWidth <= 0 || e.offsetHeight <= 0) return void ei.set(null)
            let t =
                "auto" === ee.current
                  ? e.offsetHeight
                  : (ee.current ?? e.parentElement?.offsetHeight ?? e.offsetHeight),
              a = e.getBoundingClientRect(),
              i = e.closest("[data-avatar-overlay-content-frame='true']")?.getBoundingClientRect(),
              n = e.parentElement?.getBoundingClientRect().height ?? a.height,
              o = a.height / e.offsetHeight,
              r =
                "active" === document.documentElement.dataset.owlNativeGlass &&
                e.hasAttribute("data-owl-native-source-underlay") &&
                ("quick-chat" !== H ||
                  !!e.parentElement
                    ?.querySelector('[data-avatar-overlay-native-surface-id="realtime-caption-connector"]')
                    ?.hasAttribute("data-owl-native-source-underlay"))
            ;(ei.get()?.nativeMaterialsReady !== r &&
              eN.v.debug("Avatar overlay caption native composition readiness changed", {
                safe: { nativeMaterialsReady: r, width: e.offsetWidth, height: e.offsetHeight },
              }),
              ei.set({
                nativeMaterialsReady: r,
                opacity: et.current,
                height: "quick-chat" === H ? t : e.offsetHeight,
                viewportRect: {
                  left: a.left - (i?.left ?? 0),
                  top: a.top + n - t * o - (i?.top ?? 0),
                  width: a.width,
                  height: a.height,
                },
                width: e.offsetWidth,
              }))
          }),
          (N[16] = ei),
          (N[17] = H),
          (N[18] = s))
        : (s = N[18])
      let ef = s
      N[19] !== ei || N[20] !== ef
        ? ((c = (e) => {
            if (null == e) return
            ;((W.current = e),
              (ee.current = e.parentElement?.offsetHeight),
              (et.current = Number.parseFloat(getComputedStyle(e.parentElement ?? e).opacity)),
              ef())
            let t = new ResizeObserver(() => ef())
            t.observe(e)
            let a = new MutationObserver(() => ef())
            return (
              a.observe(e.parentElement ?? e, {
                attributes: !0,
                attributeFilter: ["data-owl-native-source-underlay"],
                subtree: !0,
              }),
              a.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-owl-native-glass"] }),
              () => {
                ;(t.disconnect(), a.disconnect(), (0, aO.WG)(ef), W.current === e && ((W.current = null), ei.set(null)))
              }
            )
          }),
          (N[19] = ei),
          (N[20] = ef),
          (N[21] = c))
        : (c = N[21])
      let em = c
      N[22] !== ef
        ? ((u = () => {
            aO.Gt.preRender(ef, !1, !0)
          }),
          (N[22] = ef),
          (N[23] = u))
        : (u = N[23])
      let eh = (0, g.useEffectEvent)(u)
      if (
        (N[24] !== eh
          ? ((p = () => {
              eh()
            }),
            (N[24] = eh),
            (N[25] = p))
          : (p = N[25]),
        N[26] !== es || N[27] !== ec || N[28] !== er || N[29] !== F.mascot.top
          ? ((f = [es, ec, er, F.mascot.top]),
            (N[26] = es),
            (N[27] = ec),
            (N[28] = er),
            (N[29] = F.mascot.top),
            (N[30] = f))
          : (f = N[30]),
        (0, g.useLayoutEffect)(p, f),
        N[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = () => {
              let e = X.current
              null != e && (e.scrollTop = e.scrollHeight)
            }),
            (N[31] = m))
          : (m = N[31]),
        N[32] !== V ? ((h = [V]), (N[32] = V), (N[33] = h)) : (h = N[33]),
        (0, g.useLayoutEffect)(m, h),
        N[34] !== H
          ? ((v = () => {
              let e = B.current,
                t = W.current
              if ("quick-chat" !== H || null == e || null == t) return
              let a = () => {
                  let a = getComputedStyle(t),
                    i =
                      e.offsetHeight +
                      (Number.parseFloat(a.paddingTop) || 0) +
                      (Number.parseFloat(a.paddingBottom) || 0) +
                      (Number.parseFloat(a.borderTopWidth) || 0) +
                      (Number.parseFloat(a.borderBottomWidth) || 0)
                  ;(eN.v.debug("Quick Chat voice bubble content size changed", { safe: { height: i } }), z(i))
                },
                i = new ResizeObserver(a)
              return (i.observe(e), a(), () => i.disconnect())
            }),
            (N[34] = H),
            (N[35] = v))
          : (v = N[35]),
        N[36] !== G || N[37] !== K || N[38] !== H
          ? ((y = [G, K, H]), (N[36] = G), (N[37] = K), (N[38] = H), (N[39] = y))
          : (y = N[39]),
        (0, g.useLayoutEffect)(v, y),
        !G)
      )
        return null
      let eg = K && ("quick-chat" !== H || !$) ? "status" : "transcript"
      N[40] !== J ||
      N[41] !== Y ||
      N[42] !== ei ||
      N[43] !== j ||
      N[44] !== H ||
      N[45] !== U ||
      N[46] !== eg ||
      N[47] !== V
        ? ((w = (0, i.jsx)(
            aT,
            {
              bubbleTransition: J,
              contentHeight: Y,
              contentRef: B,
              geometry: ei,
              prefersReducedMotion: j,
              presentation: H,
              statusText: U,
              text: V,
              transcriptRef: X,
            },
            eg,
          )),
          (N[40] = J),
          (N[41] = Y),
          (N[42] = ei),
          (N[43] = j),
          (N[44] = H),
          (N[45] = U),
          (N[46] = eg),
          (N[47] = V),
          (N[48] = w))
        : (w = N[48])
      let ev = w,
        ey = "quick-chat" === H ? Y : "auto"
      N[49] !== ey ? ((C = { height: ey, opacity: 1 }), (N[49] = ey), (N[50] = C)) : (C = N[50])
      let ew = !Q && "-translate-y-full"
      ;(N[51] !== ew
        ? ((b = (0, t_.A)(
            "no-drag pointer-events-none absolute flex shrink-0 justify-center text-start",
            ew,
            "glassGroup-rVqAMq",
          )),
          (N[51] = ew),
          (N[52] = b))
        : (b = N[52]),
        N[53] !== j ? ((x = !j && { height: 0, opacity: 0 }), (N[53] = j), (N[54] = x)) : (x = N[54]),
        N[55] !== J || N[56] !== j
          ? ((M = j ? { duration: 0 } : J), (N[55] = J), (N[56] = j), (N[57] = M))
          : (M = N[57]),
        N[58] !== Y || N[59] !== H || N[60] !== ef
          ? ((A = () => {
              ;((ee.current = "quick-chat" === H ? Y : "auto"), (et.current = 1), aO.Gt.preRender(ef, !1, !0))
            }),
            (N[58] = Y),
            (N[59] = H),
            (N[60] = ef),
            (N[61] = A))
          : (A = N[61]),
        N[62] !== ef
          ? ((I = (e) => {
              ;(("number" == typeof e.height || "auto" === e.height) && (ee.current = e.height),
                "number" == typeof e.opacity && (et.current = e.opacity),
                aO.Gt.preRender(ef, !1, !0))
            }),
            (N[62] = ef),
            (N[63] = I))
          : (I = N[63]),
        N[64] !== er ? ((S = { maxWidth: er }), (N[64] = er), (N[65] = S)) : (S = N[65]))
      let eC = "quick-chat" === H ? "quick-chat-caption" : void 0,
        eb = "quick-chat" === H && "h-full overflow-hidden"
      return (
        N[66] !== eb ? ((R = (0, t_.A)("relative min-w-0 w-full", eb)), (N[66] = eb), (N[67] = R)) : (R = N[67]),
        N[68] !== ev || N[69] !== j || N[70] !== H
          ? ((E = j || "quick-chat" !== H ? ev : (0, i.jsx)(tj.N, { children: ev })),
            (N[68] = ev),
            (N[69] = j),
            (N[70] = H),
            (N[71] = E))
          : (E = N[71]),
        N[72] !== R || N[73] !== E
          ? ((k = (0, i.jsx)("div", { className: R, children: E })), (N[72] = R), (N[73] = E), (N[74] = k))
          : (k = N[74]),
        N[75] !== em || N[76] !== S || N[77] !== eC || N[78] !== k
          ? ((O = (0, i.jsx)(ae.yl, {
              ref: em,
              nativeSurfaceId: "realtime-caption",
              style: S,
              variant: eC,
              children: k,
            })),
            (N[75] = em),
            (N[76] = S),
            (N[77] = eC),
            (N[78] = k),
            (N[79] = O))
          : (O = N[79]),
        N[80] !== ec || N[81] !== H || N[82] !== Z
          ? ((_ =
              "quick-chat" === H
                ? (0, i.jsx)(ae.yl, {
                    "aria-hidden": "true",
                    "data-avatar-overlay-caption-connector-direction": Z,
                    "data-avatar-overlay-chromium-overflow": "true",
                    nativeSurfaceId: "realtime-caption-connector",
                    style: { left: `calc(50% + ${ec}px)` },
                    variant: "quick-chat-caption-connector",
                  })
                : null),
            (N[80] = ec),
            (N[81] = H),
            (N[82] = Z),
            (N[83] = _))
          : (_ = N[83]),
        N[84] !== ep ||
        N[85] !== C ||
        N[86] !== b ||
        N[87] !== x ||
        N[88] !== M ||
        N[89] !== A ||
        N[90] !== I ||
        N[91] !== O ||
        N[92] !== _
          ? ((T = (0, i.jsxs)(tF.P.div, {
              "aria-live": "polite",
              animate: C,
              className: b,
              "data-avatar-overlay-size": "realtime-caption",
              initial: x,
              role: "status",
              style: ep,
              transition: M,
              onAnimationComplete: A,
              onUpdate: I,
              children: [O, _],
            })),
            (N[84] = ep),
            (N[85] = C),
            (N[86] = b),
            (N[87] = x),
            (N[88] = M),
            (N[89] = A),
            (N[90] = I),
            (N[91] = O),
            (N[92] = _),
            (N[93] = T))
          : (T = N[93]),
        T
      )
    }
    function aT(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        f = (0, n.c)(40),
        {
          bubbleTransition: m,
          contentHeight: h,
          contentRef: v,
          geometry: y,
          prefersReducedMotion: w,
          presentation: C,
          statusText: b,
          text: x,
          transcriptRef: M,
        } = e,
        A = (0, tQ.tF)(),
        I = null != b
      f[0] !== x ? ((t = x.trim()), (f[0] = x), (f[1] = t)) : (t = f[1])
      let S = "" !== t
      f[2] !== h || f[3] !== y
        ? ((a = () => "number" == typeof h && Math.round(y.get()?.height ?? 0) >= h),
          (f[2] = h),
          (f[3] = y),
          (f[4] = a))
        : (a = f[4])
      let [R] = (0, g.useState)(a),
        E = !w && "quick-chat" === C,
        k = A ? v : void 0,
        O = !A || void 0
      f[5] === Symbol.for("react.memo_cache_sentinel") ? ((o = { opacity: 1 }), (f[5] = o)) : (o = f[5])
      let _ =
          "quick-chat" === C
            ? "flex min-w-0 flex-col gap-1.5 text-size-chat-sm leading-4"
            : "text-size-chat leading-4 text-default",
        T = !A && "absolute inset-x-0 top-0"
      return (
        f[6] !== _ || f[7] !== T ? ((r = (0, t_.A)(_, T)), (f[6] = _), (f[7] = T), (f[8] = r)) : (r = f[8]),
        f[9] !== m || f[10] !== I
          ? ((l = {
              opacity: 0,
              transition: I ? { delay: Math.max(0, (m.duration ?? 0) - 0.21), duration: 0.21 } : { duration: 0 },
            }),
            (f[9] = m),
            (f[10] = I),
            (f[11] = l))
          : (l = f[11]),
        f[12] !== E ? ((s = !!E && { opacity: 0 }), (f[12] = E), (f[13] = s)) : (s = f[13]),
        f[14] !== E || f[15] !== m || f[16] !== I || f[17] !== R
          ? ((c = E ? { duration: 0.21, delay: I && R ? 0 : m.duration } : { duration: 0 }),
            (f[14] = E),
            (f[15] = m),
            (f[16] = I),
            (f[17] = R),
            (f[18] = c))
          : (c = f[18]),
        f[19] !== I || f[20] !== C || f[21] !== b
          ? ((u = I
              ? (0, i.jsx)("div", {
                  className: (0, t_.A)(
                    "loading-shimmer-pure-text select-none truncate",
                    "quick-chat" === C && "text-xs text-secondary",
                    "statusText-YZnc6c",
                    aa,
                  ),
                  children: b,
                })
              : null),
            (f[19] = I),
            (f[20] = C),
            (f[21] = b),
            (f[22] = u))
          : (u = f[22]),
        f[23] !== S || f[24] !== A || f[25] !== I || f[26] !== w || f[27] !== C || f[28] !== x || f[29] !== M
          ? ((d =
              S && ("quick-chat" === C || !I)
                ? (0, i.jsx)("div", {
                    ref: A ? M : void 0,
                    className: "max-h-12 overflow-hidden break-words whitespace-pre-wrap text-default italic",
                    children:
                      "quick-chat" === C
                        ? Array.from(x.matchAll(/\S+|\s+/g), (e) =>
                            "" === e[0].trim()
                              ? e[0]
                              : (0, i.jsx)(
                                  tF.P.span,
                                  {
                                    animate: { opacity: 1 },
                                    initial: !w && { opacity: 0 },
                                    transition: { duration: 0.18 * !w },
                                    children: e[0],
                                  },
                                  e.index,
                                ),
                          )
                        : x,
                  })
                : null),
            (f[23] = S),
            (f[24] = A),
            (f[25] = I),
            (f[26] = w),
            (f[27] = C),
            (f[28] = x),
            (f[29] = M),
            (f[30] = d))
          : (d = f[30]),
        f[31] !== s ||
        f[32] !== c ||
        f[33] !== u ||
        f[34] !== d ||
        f[35] !== k ||
        f[36] !== O ||
        f[37] !== r ||
        f[38] !== l
          ? ((p = (0, i.jsxs)(tF.P.div, {
              ref: k,
              "aria-hidden": O,
              animate: o,
              className: r,
              exit: l,
              initial: s,
              transition: c,
              children: [u, d],
            })),
            (f[31] = s),
            (f[32] = c),
            (f[33] = u),
            (f[34] = d),
            (f[35] = k),
            (f[36] = O),
            (f[37] = r),
            (f[38] = l),
            (f[39] = p))
          : (p = f[39]),
        p
      )
    }
    let aN = (0, tz.a)({
      name: "arrow-curvedpath-left-lg-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.709229, y: 5.168457, width: 12.746338, height: 9.663574 },
        visualBounds: { x: 3.709229, y: 5.168457, width: 12.746338, height: 9.663574 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.709229, y: 5.168457, width: 12.746338, height: 9.663574 },
        center: { x: 10.082398, y: 10.000244 },
        insets: { top: 5.168457, right: 3.544433, bottom: 5.167969, left: 3.709229 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.082398, y: 10.000244 },
          foreground: { x: 10.082398, y: 10.000244 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M15.7905 5.16846C16.1578 5.16846 16.4555 5.46623 16.4555 5.8335V9.20166C16.4555 9.85382 16.2421 10.4503 15.8071 10.8853C15.3721 11.3202 14.7756 11.5337 14.1235 11.5337H5.80709L7.97017 13.6968C8.22982 13.9564 8.22971 14.3775 7.97017 14.6372C7.71044 14.8965 7.28932 14.8968 7.02974 14.6372L4.05025 11.6577C3.59545 11.2029 3.59566 10.4652 4.05025 10.0103L7.02974 7.02979C7.2894 6.77048 7.71056 6.7704 7.97017 7.02979C8.22987 7.28948 8.22987 7.71149 7.97017 7.97119L5.73677 10.2036H14.1235C14.4848 10.2036 14.7217 10.0897 14.8667 9.94482C15.0116 9.79986 15.1254 9.56299 15.1254 9.20166V5.8335C15.1254 5.46629 15.4233 5.16856 15.7905 5.16846Z" fill="currentColor"/>',
    })
    var aP = a("LOPj")
    let aL = (0, tz.a)({
      name: "stop-sm-fill-regular-28",
      canvas: {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        frame: { x: 0, y: 0, width: 28, height: 28 },
        inkBounds: { x: 7.583313, y: 7.583496, width: 12.833313, height: 12.833496 },
        visualBounds: { x: 7.583313, y: 7.583496, width: 12.833313, height: 12.833496 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 7.583313, y: 7.583496, width: 12.833313, height: 12.833496 },
        center: { x: 13.99997, y: 14.000244 },
        insets: { top: 7.583496, right: 7.583374, bottom: 7.583008, left: 7.583313 },
        anchors: {
          frame: { x: 14, y: 14 },
          ink: { x: 13.99997, y: 14.000244 },
          foreground: { x: 13.99997, y: 14.000244 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M7.58331 9.04183C7.58331 8.23641 8.23623 7.5835 9.04165 7.5835H18.9583C19.7637 7.5835 20.4166 8.23641 20.4166 9.04183V18.9585C20.4166 19.7639 19.7637 20.4168 18.9583 20.4168H9.04165C8.23623 20.4168 7.58331 19.7639 7.58331 18.9585V9.04183Z" fill="currentColor"/>',
    })
    var aF = a("SOml")
    class aq {
      consumeOffset
      #e
      #t
      #a
      #i
      #n
      #o
      #r = 0
      #l = []
      constructor(e, t, a) {
        ;((this.#e = e),
          (this.#t = "pointer" === e.source ? 1 : 0.4),
          (this.consumeOffset = Math.min(e.rowWidth, Math.max(0.55 * e.rowWidth, e.actionWidth + 15))),
          (this.#a = Math.max(20, 150 - e.actionWidth)),
          (this.#i = Math.max(20, ("trackpad" === e.source ? 350 : 210) - e.actionWidth)))
        let i = t < 0 ? -t / 0.25 : t,
          n = i
        ;(i > e.actionWidth &&
          (n =
            e.actionWidth + ((i - e.actionWidth) * (t < 0 ? this.#i : this.#a)) / (this.consumeOffset - e.actionWidth)),
          (this.#n = t < 0 ? -n : n),
          (this.#o = a))
      }
      get offset() {
        let { actionWidth: e, rowWidth: t } = this.#e,
          a = Math.abs(this.#n),
          i = a <= e ? a : Math.min(t, e + ((a - e) * (this.consumeOffset - e)) / (this.#n < 0 ? this.#i : this.#a))
        return this.#n < 0 ? -(0.25 * i) : i
      }
      get velocity() {
        let e = this.#l.reduce((e, t) => e + t.seconds, 0)
        return 0 === e ? 0 : (this.#l.reduce((e, t) => e + t.delta, 0) / e) * this.#t
      }
      update(e, t) {
        let a = (t - this.#o) / 1e3
        return (
          a > 0.2 && ((this.#l = []), (this.#r = 0)),
          a > 0 &&
            a <= 0.2 &&
            (e * this.#r < 0 && (this.#l = []),
            this.#l.push({ delta: e, seconds: a }),
            this.#l.length > 3 && this.#l.shift(),
            (this.#r = e)),
          (this.#o = t),
          (this.#n += e * this.#t),
          this.offset
        )
      }
      release(e = !1) {
        return e
          ? "closed"
          : this.offset >= this.consumeOffset || (this.offset >= 24 && this.velocity >= 600 && this.#r >= 0)
            ? "dismissed"
            : Math.abs(this.velocity) > 50
              ? this.offset > 0 && this.velocity > 0
                ? "revealed"
                : "closed"
              : this.offset > this.#e.actionWidth / 2
                ? "revealed"
                : "closed"
      }
    }
    function aj(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        f,
        m,
        h,
        v,
        y,
        w,
        C,
        b,
        x,
        M,
        A,
        I,
        S,
        R,
        E,
        k,
        O,
        _,
        T,
        N,
        P,
        L,
        F = (0, n.c)(88),
        { children: q, className: j, ariaLabel: D, enabled: U, input: V, visibleRight: H, onDismiss: X } = e,
        W = void 0 === U || U,
        Y = (0, tT.I)(),
        z = (0, tN.d)(0),
        K = (0, tN.d)(0),
        $ = (0, tN.d)(0)
      F[0] !== z || F[1] !== K
        ? ((t = () => {
            let e = -z.get(),
              t = K.get()
            return e <= 0 ? e : 0 === t ? 0 : t * Math.tanh(e / t)
          }),
          (F[0] = z),
          (F[1] = K),
          (F[2] = t))
        : (t = F[2])
      let G = (0, tP.G)(t),
        Q = (0, tN.d)(1),
        Z = (0, g.useRef)(null),
        J = (0, g.useRef)(null),
        ee = (0, g.useRef)(null),
        et = (0, g.useRef)(1),
        ea = (0, g.useRef)(null),
        ei = (0, g.useRef)(null),
        en = (0, g.useRef)(null),
        eo = (0, g.useRef)(null),
        er = (0, g.useRef)(!1),
        el = (0, g.useRef)(!1),
        [es, ec] = (0, g.useState)(!1),
        [eu, ed] = (0, g.useState)(!1),
        [ep, ef] = (0, g.useState)(void 0)
      F[3] !== ep || F[4] !== z
        ? ((a = () => Math.max(0, Math.min(1, z.get() / (ep ?? 1)))), (F[3] = ep), (F[4] = z), (F[5] = a))
        : (a = F[5])
      let em = (0, tP.G)(a)
      F[6] !== em || F[7] !== Q ? ((o = () => em.get() * Q.get()), (F[6] = em), (F[7] = Q), (F[8] = o)) : (o = F[8])
      let eh = (0, tP.G)(o)
      F[9] !== ep || F[10] !== z || F[11] !== $
        ? ((r = () => `calc(100% + ${Math.max(0, Math.min(z.get(), $.get()) - (ep ?? 0))}px)`),
          (F[9] = ep),
          (F[10] = z),
          (F[11] = $),
          (F[12] = r))
        : (r = F[12])
      let eg = (0, tP.G)(r)
      ;(F[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () =>
            (0, at.J)({
              axis: "width",
              target: ee.current,
              onChange: (e) => {
                let { width: t } = e
                return ef(t)
              },
            })),
          (s = []),
          (F[13] = l),
          (F[14] = s))
        : ((l = F[13]), (s = F[14])),
        (0, g.useLayoutEffect)(l, s),
        F[15] !== ep || F[16] !== Q || F[17] !== z || F[18] !== X || F[19] !== Y
          ? ((c = (e, t) => {
              let a = void 0 === t ? 0 : t,
                i = Z.current,
                n = J.current
              if (null == i || null == n || el.current) return
              ;(ei.current?.stop(), (el.current = "dismissed" === e))
              let o = 0
              if ("revealed" === e) o = ep ?? n.offsetWidth
              else if ("dismissed" === e) {
                let e = i.getBoundingClientRect(),
                  t = e.width / i.offsetWidth
                o = e.right / t + d.VuE
              }
              let r = z.get()
              if (r === o && "closed" === e) {
                ;(ec(!1), ed(!1))
                return
              }
              let l = (function (e, t, a, i) {
                let n = i ? 4 : 10,
                  o = i || e === t ? 0 : Math.max(-200, Math.min(200, (a / (t - e)) * 0.9)),
                  r = (e) => 1 - (1 + (n - o) * e) * Math.exp(-n * e)
                if (i) return { duration: 0.25, ease: (e) => r(e) / r(1) }
                let l = 0,
                  s = 1 / 0
                for (let e = 0; ; e += 0.1) {
                  let t = Math.abs(1 - r(e))
                  if (s >= 0.001) t < s && ((l = e), (s = t))
                  else if (t >= 0.001) s = 1 / 0
                  else if (e - l > 1) break
                }
                return { duration: l, ease: (e) => Math.fround(r(Math.fround(e))) }
              })(r, o, a, el.current)
              ;(eN.v.debug("Avatar overlay swipe released", {
                safe: { destination: e, from: r, to: o, velocity: a, duration: l.duration },
              }),
                (ei.current = (0, aF.i)(z, o, {
                  ...l,
                  duration: Y ? 0 : l.duration,
                  type: "tween",
                  onUpdate: (t) => {
                    "dismissed" === e && Q.set(Math.max(0, Math.min(1, (o - t) / (o - r))))
                  },
                  onComplete: () => {
                    "closed" === e ? (ec(!1), ed(!1)) : "dismissed" === e && X()
                  },
                })))
            }),
            (F[15] = ep),
            (F[16] = Q),
            (F[17] = z),
            (F[18] = X),
            (F[19] = Y),
            (F[20] = c))
          : (c = F[20]))
      let ev = c
      F[21] !== ep || F[22] !== z || F[23] !== K || F[24] !== $ || F[25] !== H
        ? ((u = (e, t, a) => {
            let i = Z.current,
              n = J.current
            if (null == i || null == n || el.current) return
            ei.current?.stop()
            let o = i.getBoundingClientRect(),
              r = o.width / i.offsetWidth
            ;(K.set(Math.max(0, (H - o.right - 1 / devicePixelRatio) / r)),
              "pointer" !== e && (eo.current = null),
              (et.current = a),
              $.set(i.offsetWidth),
              (ea.current = new aq(
                {
                  rowWidth: i.offsetWidth * a,
                  actionWidth: Math.min((ep ?? n.offsetWidth) * a, i.offsetWidth * a - 15),
                  source: e,
                },
                z.get() * a,
                t,
              )),
              ec(!0))
          }),
          (F[21] = ep),
          (F[22] = z),
          (F[23] = K),
          (F[24] = $),
          (F[25] = H),
          (F[26] = u))
        : (u = F[26])
      let ey = (0, g.useEffectEvent)(u)
      F[27] !== z
        ? ((p = (e, t) => {
            null == ea.current || el.current || z.set(ea.current.update(e, t) / et.current)
          }),
          (F[27] = z),
          (F[28] = p))
        : (p = F[28])
      let ew = (0, g.useEffectEvent)(p)
      F[29] !== ev
        ? ((f = (e) => {
            let t = ea.current
            ;((ea.current = null),
              null != t && ev(t.release(e), e || 50 >= Math.abs(t.velocity) ? 0 : t.velocity / et.current))
          }),
          (F[29] = ev),
          (F[30] = f))
        : (f = F[30])
      let eC = (0, g.useEffectEvent)(f)
      F[31] !== ev
        ? ((m = () => {
            ;((ea.current = null), (eo.current = null), ev("closed"))
          }),
          (F[31] = ev),
          (F[32] = m))
        : (m = F[32])
      let eb = (0, g.useEffectEvent)(m)
      ;(F[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e) => {
            let t = ea.current?.consumeOffset
            null != t && ed(e * et.current >= t)
          }),
          (F[33] = h))
        : (h = F[33]),
        (0, tL.L)(z, "change", h),
        F[34] !== ey || F[35] !== eb || F[36] !== W || F[37] !== eC || F[38] !== V || F[39] !== ew
          ? ((v = () => {
              let e = Z.current
              if (null == e || !W) return void eb()
              let t = {
                element: e,
                begin: (e, t, a) => ey(e, t, a),
                update: (e, t) => ew(e, t),
                end: (e) => eC(e),
                close: () => eb(),
              }
              return (
                (en.current = t),
                V.targets.set(e, t),
                e.addEventListener("wheel", aD, { passive: !1 }),
                () => {
                  ;(e.removeEventListener("wheel", aD), V.forget(t), (en.current = null), ei.current?.stop())
                }
              )
            }),
            (F[34] = ey),
            (F[35] = eb),
            (F[36] = W),
            (F[37] = eC),
            (F[38] = V),
            (F[39] = ew),
            (F[40] = v))
          : (v = F[40]),
        F[41] !== W || F[42] !== V ? ((y = [W, V]), (F[41] = W), (F[42] = V), (F[43] = y)) : (y = F[43]),
        (0, g.useEffect)(v, y),
        F[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e, t) => {
              let a = eo.current
              a?.id === e.pointerId && ((eo.current = null), a.dragging && (en.current?.end(t), e.stopPropagation()))
            }),
            (F[44] = w))
          : (w = F[44]))
      let ex = w,
        eM = es && "[&_[data-avatar-overlay-swipe-dismiss-accessory]]:invisible"
      F[45] !== j || F[46] !== eM
        ? ((C = (0, t_.A)("relative", j, eM)), (F[45] = j), (F[46] = eM), (F[47] = C))
        : (C = F[47])
      let eA = eu || void 0
      ;(F[48] === Symbol.for("react.memo_cache_sentinel") ? ((b = { touchAction: "pan-y" }), (F[48] = b)) : (b = F[48]),
        F[49] !== ev || F[50] !== es
          ? ((x = (e) => {
              er.current
                ? ((er.current = !1), e.preventDefault(), e.stopPropagation())
                : es &&
                  e.target instanceof Node &&
                  !J.current?.contains(e.target) &&
                  ((ea.current = null), ev("closed"), e.preventDefault(), e.stopPropagation())
            }),
            (F[49] = ev),
            (F[50] = es),
            (F[51] = x))
          : (x = F[51]),
        F[52] !== W
          ? ((M = (e) => {
              ;((er.current = !1),
                !W ||
                  0 !== e.button ||
                  el.current ||
                  (e.target instanceof Element &&
                    null != e.target.closest("button, a, input, textarea, select, [contenteditable='true']")) ||
                  (eo.current = {
                    id: e.pointerId,
                    startX: e.clientX,
                    startY: e.clientY,
                    lastX: e.clientX,
                    timestamp: e.timeStamp,
                    dragging: !1,
                  }))
            }),
            (F[52] = W),
            (F[53] = M))
          : (M = F[53]),
        F[54] !== V
          ? ((A = (e) => {
              let t = eo.current,
                a = en.current
              if (t?.id !== e.pointerId || null == a) return
              let i = t.startX - e.clientX,
                n = t.startY - e.clientY
              if (!t.dragging) {
                if (4 > Math.max(Math.abs(i), Math.abs(n))) return
                if (Math.abs(n) >= Math.abs(i)) {
                  eo.current = null
                  return
                }
                ;((t.dragging = !0),
                  (er.current = !0),
                  V.finish(!0),
                  V.claim(a),
                  a.begin("pointer", t.timestamp, 1),
                  e.currentTarget.setPointerCapture(e.pointerId))
              }
              ;(a.update(t.lastX - e.clientX, e.timeStamp),
                (t.lastX = e.clientX),
                e.preventDefault(),
                e.stopPropagation())
            }),
            (F[54] = V),
            (F[55] = A))
          : (A = F[55]),
        F[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (e) => ex(e, !1)),
            (S = (e) => ex(e, !0)),
            (R = (e) => ex(e, !0)),
            (F[56] = I),
            (F[57] = S),
            (F[58] = R))
          : ((I = F[56]), (S = F[57]), (R = F[58])),
        F[59] !== q || F[60] !== G ? ((E = q(G)), (F[59] = q), (F[60] = G), (F[61] = E)) : (E = F[61]))
      let eI = !es,
        eS = !es
      F[62] !== eh || F[63] !== em || F[64] !== eg
        ? ((k = { width: eg, scale: em, opacity: eh }), (F[62] = eh), (F[63] = em), (F[64] = eg), (F[65] = k))
        : (k = F[65])
      let eR = es ? 0 : -1
      return (
        F[66] !== ev ? ((O = () => ev("dismissed")), (F[66] = ev), (F[67] = O)) : (O = F[67]),
        F[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)("span", {
              className: "flex size-14 shrink-0 items-center justify-center",
              children: (0, i.jsx)(B.P9U, {}),
            })),
            (F[68] = _))
          : (_ = F[68]),
        F[69] !== D || F[70] !== eR || F[71] !== O
          ? ((T = (0, i.jsx)(ae.yl, {
              className: "h-full rounded-full",
              variant: "activity-dismiss",
              children: (0, i.jsx)(ag.$, {
                ref: J,
                className: "h-full w-full justify-start",
                "aria-label": D,
                "data-avatar-overlay-hit-region": "activity-dismiss",
                color: "ghostActive",
                radius: "full",
                size: "inline",
                tabIndex: eR,
                onClick: O,
                children: _,
              }),
            })),
            (F[69] = D),
            (F[70] = eR),
            (F[71] = O),
            (F[72] = T))
          : (T = F[72]),
        F[73] !== k || F[74] !== T
          ? ((N = (0, i.jsx)("div", {
              className: "relative size-14 shrink-0",
              children: (0, i.jsx)(tF.P.div, {
                className: "absolute inset-y-0 right-0 origin-right",
                style: k,
                children: T,
              }),
            })),
            (F[73] = k),
            (F[74] = T),
            (F[75] = N))
          : (N = F[75]),
        F[76] !== eI || F[77] !== eS || F[78] !== N
          ? ((P = (0, i.jsx)("div", {
              ref: ee,
              "aria-hidden": eI,
              className: "absolute inset-y-0 right-0 z-20 flex items-center ps-3",
              inert: eS,
              children: N,
            })),
            (F[76] = eI),
            (F[77] = eS),
            (F[78] = N),
            (F[79] = P))
          : (P = F[79]),
        F[80] !== C || F[81] !== eA || F[82] !== x || F[83] !== M || F[84] !== A || F[85] !== E || F[86] !== P
          ? ((L = (0, i.jsxs)("div", {
              ref: Z,
              className: C,
              "data-activity-pill-swipe": "true",
              "data-activity-pill-swipe-armed": eA,
              style: b,
              onClickCapture: x,
              onPointerDownCapture: M,
              onPointerMove: A,
              onPointerUp: I,
              onPointerCancel: S,
              onLostPointerCapture: R,
              children: [E, P],
            })),
            (F[80] = C),
            (F[81] = eA),
            (F[82] = x),
            (F[83] = M),
            (F[84] = A),
            (F[85] = E),
            (F[86] = P),
            (F[87] = L))
          : (L = F[87]),
        L
      )
    }
    function aD(e) {
      Math.abs(e.deltaX) > Math.abs(e.deltaY) && (e.preventDefault(), e.stopPropagation())
    }
    var aU = a("UzaB"),
      aV = a("UOvO"),
      aH = a("ASxG"),
      aB = a("vdpW")
    let aX = aV.T2.or(aU.U),
      aW = aH.Ikc({ type: aH.euz("text"), text: aH.euz(aV.Vr) }),
      aY = (0, u.i1)(eE.u, (e, { get: t }) => {
        let a = t(aB.mz, e)
        if (
          (a?.type !== "dynamicToolCall" && a?.type !== "mcpToolCall") ||
          a.tool !== aV.GY ||
          "completed" !== a.status
        )
          return null
        if (
          "dynamicToolCall" === a.type
            ? (null == a.namespace || "codex_app" === a.namespace) && !0 === a.success
            : "codex_app" === a.server && a.result?.content.some((e) => aW.safeParse(e).success)
        ) {
          let e = aX.safeParse(a.arguments)
          if (e.success) return e.data.summary
        }
        return null
      }),
      az = (0, u.i1)(eE.u, (e, { get: t }) => {
        let a = null == e ? null : (t(aB.M, e)?.at(-1) ?? null)
        if (null == a || "inProgress" !== t(aB.OM, a)) return null
        let i = t(aB.hm, a)
        if (null == i) return null
        for (let e = i.length - 1; e >= 0; e--) {
          let n = t(aY, { ...a, itemId: i[e] })
          if (null != n) return n
        }
        return null
      })
    var aK = a("i6Gy"),
      a$ = a("zjpG")
    function aG(e) {
      let t,
        a = (0, n.c)(69),
        { isExpanded: o, onRunNotificationAction: r, onSubmitQuestionOption: l, patchSummaryCopy: s, request: c } = e
      a[0] !== r
        ? ((t = (e) => {
            "questionOption" in e || r(e)
          }),
          (a[0] = r),
          (a[1] = t))
        : (t = a[1])
      let u = t
      switch (c.kind) {
        case "question": {
          let e,
            t,
            n,
            s,
            u,
            d,
            p = o ? "break-words whitespace-pre-wrap" : "truncate"
          return (
            a[2] !== p ? ((e = (0, t_.A)("min-w-0 pe-[38px]", p)), (a[2] = p), (a[3] = e)) : (e = a[3]),
            a[4] !== c.prompt || a[5] !== e
              ? ((t = (0, i.jsx)("div", {
                  className: e,
                  "data-avatar-overlay-overflow-content": "true",
                  children: c.prompt,
                })),
                (a[4] = c.prompt),
                (a[5] = e),
                (a[6] = t))
              : (t = a[6]),
            a[7] !== c.options ? ((n = c.options.map(aQ)), (a[7] = c.options), (a[8] = n)) : (n = a[8]),
            a[9] !== r || a[10] !== l
              ? ((s = (e) => {
                  "questionOption" in e ? l?.(e.questionOption) : r(e)
                }),
                (a[9] = r),
                (a[10] = l),
                (a[11] = s))
              : (s = a[11]),
            a[12] !== n || a[13] !== s
              ? ((u = (0, i.jsx)(a2, { actions: n, onRunNotificationAction: s })),
                (a[12] = n),
                (a[13] = s),
                (a[14] = u))
              : (u = a[14]),
            a[15] !== t || a[16] !== u
              ? ((d = (0, i.jsxs)("div", {
                  "data-avatar-overlay-compact-waiting-request": "question",
                  children: [t, u],
                })),
                (a[15] = t),
                (a[16] = u),
                (a[17] = d))
              : (d = a[17]),
            d
          )
        }
        case "patch": {
          let e, t, n
          return (
            a[18] !== o || a[19] !== s || a[20] !== c.files || a[21] !== c.summary
              ? ((e = (0, i.jsx)(a1, { copy: s, files: c.files, isExpanded: o, summary: c.summary })),
                (a[18] = o),
                (a[19] = s),
                (a[20] = c.files),
                (a[21] = c.summary),
                (a[22] = e))
              : (e = a[22]),
            a[23] !== c.actions || a[24] !== u
              ? ((t = (0, i.jsx)(a2, { actions: c.actions, onRunNotificationAction: u })),
                (a[23] = c.actions),
                (a[24] = u),
                (a[25] = t))
              : (t = a[25]),
            a[26] !== e || a[27] !== t
              ? ((n = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": "patch", children: [e, t] })),
                (a[26] = e),
                (a[27] = t),
                (a[28] = n))
              : (n = a[28]),
            n
          )
        }
        case "plan": {
          let e
          return (
            a[29] !== o || a[30] !== c || a[31] !== u
              ? ((e = (0, i.jsx)(aZ, { isExpanded: o, onRunNotificationAction: u, request: c })),
                (a[29] = o),
                (a[30] = c),
                (a[31] = u),
                (a[32] = e))
              : (e = a[32]),
            e
          )
        }
        case "exec": {
          let e, t, n
          return (
            a[33] !== o || a[34] !== c.summary
              ? ((e = (0, i.jsx)(aJ, { isExpanded: o, text: c.summary })),
                (a[33] = o),
                (a[34] = c.summary),
                (a[35] = e))
              : (e = a[35]),
            a[36] !== c.actions || a[37] !== u
              ? ((t = (0, i.jsx)(a2, { actions: c.actions, onRunNotificationAction: u })),
                (a[36] = c.actions),
                (a[37] = u),
                (a[38] = t))
              : (t = a[38]),
            a[39] !== e || a[40] !== t
              ? ((n = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": "exec", children: [e, t] })),
                (a[39] = e),
                (a[40] = t),
                (a[41] = n))
              : (n = a[41]),
            n
          )
        }
        case "network": {
          let e, t, n
          return (
            a[42] !== o || a[43] !== c.target
              ? ((e = (0, i.jsx)(aJ, { isExpanded: o, text: c.target })), (a[42] = o), (a[43] = c.target), (a[44] = e))
              : (e = a[44]),
            a[45] !== c.actions || a[46] !== u
              ? ((t = (0, i.jsx)(a2, { actions: c.actions, onRunNotificationAction: u })),
                (a[45] = c.actions),
                (a[46] = u),
                (a[47] = t))
              : (t = a[47]),
            a[48] !== e || a[49] !== t
              ? ((n = (0, i.jsxs)("div", {
                  "data-avatar-overlay-compact-waiting-request": "network",
                  children: [e, t],
                })),
                (a[48] = e),
                (a[49] = t),
                (a[50] = n))
              : (n = a[50]),
            n
          )
        }
        case "permission": {
          let e, t, n
          return (
            a[51] !== o || a[52] !== c.target
              ? ((e = (0, i.jsx)(aJ, { isExpanded: o, text: c.target })), (a[51] = o), (a[52] = c.target), (a[53] = e))
              : (e = a[53]),
            a[54] !== c.actions || a[55] !== u
              ? ((t = (0, i.jsx)(a2, { actions: c.actions, onRunNotificationAction: u })),
                (a[54] = c.actions),
                (a[55] = u),
                (a[56] = t))
              : (t = a[56]),
            a[57] !== e || a[58] !== t
              ? ((n = (0, i.jsxs)("div", {
                  "data-avatar-overlay-compact-waiting-request": "permission",
                  children: [e, t],
                })),
                (a[57] = e),
                (a[58] = t),
                (a[59] = n))
              : (n = a[59]),
            n
          )
        }
        case "tool": {
          let e,
            t,
            n,
            r = c.summary ?? c.target
          return (
            a[60] !== o || a[61] !== r
              ? ((e = (0, i.jsx)(aJ, { isExpanded: o, text: r })), (a[60] = o), (a[61] = r), (a[62] = e))
              : (e = a[62]),
            a[63] !== c.actions || a[64] !== u
              ? ((t = (0, i.jsx)(a2, { actions: c.actions, onRunNotificationAction: u })),
                (a[63] = c.actions),
                (a[64] = u),
                (a[65] = t))
              : (t = a[65]),
            a[66] !== e || a[67] !== t
              ? ((n = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": "tool", children: [e, t] })),
                (a[66] = e),
                (a[67] = t),
                (a[68] = n))
              : (n = a[68]),
            n
          )
        }
      }
    }
    function aQ(e, t) {
      return { label: e.label, tone: 0 === t ? "primary" : "secondary", questionOption: e }
    }
    function aZ(e) {
      let t,
        a,
        o,
        r = (0, n.c)(10),
        { isExpanded: l, onRunNotificationAction: s, request: c } = e
      return (
        r[0] !== l || r[1] !== c.summary
          ? ((t = (0, i.jsx)(aJ, { isExpanded: l, text: c.summary })), (r[0] = l), (r[1] = c.summary), (r[2] = t))
          : (t = r[2]),
        r[3] !== s || r[4] !== c.actions
          ? ((a = (0, i.jsx)(a2, { actions: c.actions, onRunNotificationAction: s })),
            (r[3] = s),
            (r[4] = c.actions),
            (r[5] = a))
          : (a = r[5]),
        r[6] !== c.kind || r[7] !== t || r[8] !== a
          ? ((o = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": c.kind, children: [t, a] })),
            (r[6] = c.kind),
            (r[7] = t),
            (r[8] = a),
            (r[9] = o))
          : (o = r[9]),
        o
      )
    }
    function aJ(e) {
      let t,
        a,
        o = (0, n.c)(5),
        { isExpanded: r, text: l } = e,
        s = r ? "break-words whitespace-pre-wrap" : "truncate whitespace-nowrap"
      return (
        o[0] !== s ? ((t = (0, t_.A)("min-w-0 pe-[38px]", s)), (o[0] = s), (o[1] = t)) : (t = o[1]),
        o[2] !== t || o[3] !== l
          ? ((a = (0, i.jsx)("div", {
              className: t,
              "data-avatar-overlay-compact-waiting-summary-text": "true",
              "data-avatar-overlay-overflow-content": "true",
              children: l,
            })),
            (o[2] = t),
            (o[3] = l),
            (o[4] = a))
          : (a = o[4]),
        a
      )
    }
    function a1(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u = (0, n.c)(31),
        { copy: d, files: p, isExpanded: f, summary: m } = e
      if (null == d) return null
      if (!f) {
        let e, t, a, n, o, r
        return (
          u[0] !== d.fileCount
            ? ((e = (0, i.jsx)("span", { children: d.fileCount })), (u[0] = d.fileCount), (u[1] = e))
            : (e = u[1]),
          u[2] !== d.additions
            ? ((t =
                null != d.additions
                  ? (0, i.jsx)("span", { className: "ms-1.5 text-chart-green", children: d.additions })
                  : null),
              (u[2] = d.additions),
              (u[3] = t))
            : (t = u[3]),
          u[4] !== d.deletions
            ? ((a =
                null != d.deletions
                  ? (0, i.jsx)("span", { className: "ms-1.5 text-danger", children: d.deletions })
                  : null),
              (u[4] = d.deletions),
              (u[5] = a))
            : (a = u[5]),
          u[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(a$.a, { className: "mx-1.5 text-tertiary" })), (u[6] = n))
            : (n = u[6]),
          u[7] !== m ? ((o = (0, i.jsx)("span", { children: m })), (u[7] = m), (u[8] = o)) : (o = u[8]),
          u[9] !== e || u[10] !== t || u[11] !== a || u[12] !== o
            ? ((r = (0, i.jsxs)("div", {
                className: "min-w-0 truncate pe-[38px] whitespace-nowrap",
                "data-avatar-overlay-compact-waiting-summary-text": "true",
                "data-avatar-overlay-overflow-content": "true",
                children: [e, t, a, n, o],
              })),
              (u[9] = e),
              (u[10] = t),
              (u[11] = a),
              (u[12] = o),
              (u[13] = r))
            : (r = u[13]),
          r
        )
      }
      return (
        u[14] !== d.fileCount
          ? ((t = (0, i.jsx)("span", { className: "text-[11px] leading-4", children: d.fileCount })),
            (u[14] = d.fileCount),
            (u[15] = t))
          : (t = u[15]),
        u[16] !== d.additions
          ? ((a =
              null != d.additions
                ? (0, i.jsx)("span", { className: "text-[11px] leading-4 text-chart-green", children: d.additions })
                : null),
            (u[16] = d.additions),
            (u[17] = a))
          : (a = u[17]),
        u[18] !== d.deletions
          ? ((o =
              null != d.deletions
                ? (0, i.jsx)("span", { className: "text-[11px] leading-4 text-danger", children: d.deletions })
                : null),
            (u[18] = d.deletions),
            (u[19] = o))
          : (o = u[19]),
        u[20] !== t || u[21] !== a || u[22] !== o
          ? ((r = (0, i.jsxs)("div", {
              className: "mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5",
              children: [t, a, o],
            })),
            (u[20] = t),
            (u[21] = a),
            (u[22] = o),
            (u[23] = r))
          : (r = u[23]),
        u[24] !== p ? ((l = p.map(a0)), (u[24] = p), (u[25] = l)) : (l = u[25]),
        u[26] !== l
          ? ((s = (0, i.jsx)("div", { className: "mt-0.5 min-w-0 space-y-0.5", children: l })),
            (u[26] = l),
            (u[27] = s))
          : (s = u[27]),
        u[28] !== r || u[29] !== s
          ? ((c = (0, i.jsxs)("div", {
              "data-avatar-overlay-compact-waiting-summary-text": "true",
              "data-avatar-overlay-overflow-content": "true",
              children: [r, s],
            })),
            (u[28] = r),
            (u[29] = s),
            (u[30] = c))
          : (c = u[30]),
        c
      )
    }
    function a0(e) {
      return (0, i.jsx)("div", { className: "leading-4 break-words", children: e }, e)
    }
    function a2(e) {
      let t,
        a = (0, n.c)(3),
        { actions: o, onRunNotificationAction: r } = e
      return (
        a[0] !== o || a[1] !== r
          ? ((t = (0, i.jsx)("div", {
              className: "mt-3 flex min-w-0 flex-wrap items-center justify-end gap-2 overflow-visible no-drag",
              children: [...o.filter(a5), ...o.filter(a4)].map((e) =>
                (0, i.jsx)(
                  ag.$,
                  {
                    className: "max-w-full min-w-0 enabled:active:hover:opacity-80",
                    color: (function (e) {
                      switch (e) {
                        case "primary":
                          return "accent"
                        case "danger":
                          return "danger"
                        case "secondary":
                          return "secondary"
                      }
                    })(e.tone),
                    size: "activityOption",
                    "aria-label": e.ariaLabel ?? e.label,
                    title: e.ariaLabel ?? e.label,
                    onClick: (t) => {
                      ;(t.stopPropagation(), r(e))
                    },
                    onPointerDown: a3,
                    children: (0, i.jsx)("span", { className: "truncate", children: e.label }),
                  },
                  e.ariaLabel ?? e.label,
                ),
              ),
            })),
            (a[0] = o),
            (a[1] = r),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    function a3(e) {
      e.stopPropagation()
    }
    function a4(e) {
      return "primary" === e.tone
    }
    function a5(e) {
      return "primary" !== e.tone
    }
    var a6 = a("Fpzh"),
      a7 = a("BkQe")
    function a8(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        v = (0, n.c)(49),
        {
          ref: w,
          animatesOwnHeight: C,
          autoFocus: b,
          draft: x,
          hasSubmissionError: M,
          inputRef: A,
          isSubmitting: I,
          notificationTitle: S,
          prefersReducedMotion: R,
          onAnimationFrame: E,
          onClose: k,
          onDraftChange: O,
          onSubmitFollowUp: _,
        } = e,
        T = (0, y.A)(),
        N = (0, tQ.tF)(),
        P = (0, g.useRef)(null)
      v[0] !== O
        ? ((t = (e) => {
            let t = (0, a7.JG)(e.currentTarget)
            P.current !== t && ((P.current = t), O(e.currentTarget.value, (0, a7.$x)(e.currentTarget)))
          }),
          (v[0] = O),
          (v[1] = t))
        : (t = v[1])
      let L = t,
        F = C ? "auto" : void 0,
        q = C ? 14 : void 0
      v[2] !== F || v[3] !== q
        ? ((a = { height: F, marginBottom: q, opacity: 1 }), (v[2] = F), (v[3] = q), (v[4] = a))
        : (a = v[4])
      let j = (C || N) && "mx-3.5",
        D = !C && "mb-3.5"
      v[5] !== j || v[6] !== D
        ? ((o = (0, t_.A)(
            "grid grid-cols-1 items-center overflow-hidden rounded-[24px] bg-activity-input px-2.5 py-2 no-drag",
            j,
            D,
          )),
          (v[5] = j),
          (v[6] = D),
          (v[7] = o))
        : (o = v[7])
      let U = C ? 0 : void 0,
        V = C ? 0 : void 0
      v[8] !== U || v[9] !== V
        ? ((r = { height: U, marginBottom: V, opacity: 0 }), (v[8] = U), (v[9] = V), (v[10] = r))
        : (r = v[10])
      let H = C ? 0 : void 0,
        B = C ? 0 : void 0
      ;(v[11] !== H || v[12] !== B
        ? ((l = { height: H, marginBottom: B, opacity: 0 }), (v[11] = H), (v[12] = B), (v[13] = l))
        : (l = v[13]),
        v[14] !== R
          ? ((s = R ? { duration: 0 } : { ...a6.K, opacity: { duration: 0.18, ease: "easeOut" } }),
            (v[14] = R),
            (v[15] = s))
          : (s = v[15]),
        v[16] !== x || v[17] !== I || v[18] !== _
          ? ((c = (e) => {
              e.preventDefault()
              let t = x.trim()
              0 === t.length || I || _(t)
            }),
            (v[16] = x),
            (v[17] = I),
            (v[18] = _),
            (v[19] = c))
          : (c = v[19]),
        v[20] !== T || v[21] !== S
          ? ((u = T.formatMessage(
              { id: "avatarOverlay.notificationFollowUpInput", defaultMessage: "Follow up on {title}" },
              { title: S },
            )),
            (v[20] = T),
            (v[21] = S),
            (v[22] = u))
          : (u = v[22]))
      let X = b ? "true" : void 0
      return (
        v[23] !== T
          ? ((d = T.formatMessage({
              id: "avatarOverlay.notificationFollowUpPlaceholder",
              defaultMessage: "Follow up",
            })),
            (v[23] = T),
            (v[24] = d))
          : (d = v[24]),
        v[25] !== k
          ? ((p = (e) => {
              if ("Enter" === e.key && !e.shiftKey && !e.nativeEvent.isComposing) {
                ;(e.preventDefault(), e.currentTarget.form?.requestSubmit())
                return
              }
              "Escape" === e.key && (e.stopPropagation(), k())
            }),
            (v[25] = k),
            (v[26] = p))
          : (p = v[26]),
        v[27] !== b ||
        v[28] !== x ||
        v[29] !== L ||
        v[30] !== A ||
        v[31] !== u ||
        v[32] !== X ||
        v[33] !== d ||
        v[34] !== p
          ? ((f = (0, i.jsx)("textarea", {
              ref: A,
              "aria-label": u,
              autoFocus: b,
              className:
                "[field-sizing:content] max-h-20 min-w-0 resize-none overflow-y-auto bg-transparent text-[13px] leading-4 text-default outline-none placeholder:text-tertiary",
              "data-avatar-overlay-composition-autofocus": X,
              placeholder: d,
              rows: 1,
              value: x,
              onChange: L,
              onSelect: L,
              onKeyDown: p,
            })),
            (v[27] = b),
            (v[28] = x),
            (v[29] = L),
            (v[30] = A),
            (v[31] = u),
            (v[32] = X),
            (v[33] = d),
            (v[34] = p),
            (v[35] = f))
          : (f = v[35]),
        v[36] !== M
          ? ((m = M
              ? (0, i.jsx)("div", {
                  className: "truncate pb-1 text-[11px] leading-3 text-danger",
                  role: "alert",
                  children: (0, i.jsx)(tZ.A, {
                    id: "avatarOverlay.notificationFollowUpError",
                    defaultMessage: "Unable to send reply",
                  }),
                })
              : null),
            (v[36] = M),
            (v[37] = m))
          : (m = v[37]),
        v[38] !== E ||
        v[39] !== w ||
        v[40] !== r ||
        v[41] !== l ||
        v[42] !== s ||
        v[43] !== c ||
        v[44] !== f ||
        v[45] !== m ||
        v[46] !== a ||
        v[47] !== o
          ? ((h = (0, i.jsxs)(tF.P.form, {
              ref: w,
              animate: a,
              className: o,
              exit: r,
              initial: l,
              transition: s,
              onSubmit: c,
              onUpdate: E,
              children: [f, m],
            })),
            (v[38] = E),
            (v[39] = w),
            (v[40] = r),
            (v[41] = l),
            (v[42] = s),
            (v[43] = c),
            (v[44] = f),
            (v[45] = m),
            (v[46] = a),
            (v[47] = o),
            (v[48] = h))
          : (h = v[48]),
        h
      )
    }
    let a9 = (0, w.YK)({
      replyNotification: { id: "avatarOverlay.replyNotification", defaultMessage: "Reply to {title}" },
      stopNotification: { id: "avatarOverlay.stopNotification", defaultMessage: "Stop {title}" },
    })
    function ie(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        d,
        p,
        f,
        m,
        h,
        v,
        w,
        C,
        b,
        x,
        M,
        A,
        S = (0, n.c)(124),
        {
          activitySwipeInput: R,
          swipeVisibleRight: E,
          animatesCssEntry: k,
          canExpandActivityStack: O,
          copy: _,
          cssHeight: T,
          presentedHeight: N,
          cssWidth: P,
          subtitleOpacity: L,
          contentX: F,
          contentY: q,
          titleFontWeight: j,
          attachmentContent: D,
          isExpanded: U,
          isNotificationStackCollapsed: V,
          isStackedBehindPrimary: H,
          retainsForeground: B,
          isForegroundCoveredByFlight: X,
          hidesMaterialForHiddenStart: W,
          nativeSurfaceId: Y,
          notification: z,
          notificationFollowUp: $,
          publishesLayoutMeasurement: G,
          publishesFollowUpVisibility: Q,
          rendersMaterial: Z,
          onAnimationFrame: J,
          onMaterialUpdate: ee,
          prominence: et,
          sideSpacingPx: ea,
          onActivateNotification: ei,
          onDismissNotification: en,
          onOpenNotificationActions: eo,
          onExpansionChange: er,
          onRunNotificationControl: el,
          onRunNotificationAction: es,
          onSubmitQuestionOption: ec,
        } = e,
        eu = void 0 === k || k,
        ed = void 0 !== B && B,
        ep = void 0 !== X && X,
        ef = void 0 !== W && W,
        em = void 0 === G || G,
        eh = void 0 === Z || Z,
        eg = (0, u.gh)(eE.u),
        ev = (0, y.A)(),
        ey = (0, tT.I)()
      S[0] !== ev || S[1] !== z || S[2] !== _
        ? ((t = _ ?? tC({ intl: ev, notification: z })), (S[0] = ev), (S[1] = z), (S[2] = _), (S[3] = t))
        : (t = S[3])
      let ew = t,
        eC = (0, u._U)(eT.JW, "3312776353") && z.isLoading && null == z.waitingRequest && "danger" !== z.level
      S[4] !== H || S[5] !== z.localConversationId || S[6] !== eg || S[7] !== eC
        ? ((a =
            eC && !H && null != z.localConversationId
              ? { hostId: eg.get(I.qX, z.localConversationId), threadId: z.localConversationId }
              : null),
          (S[4] = H),
          (S[5] = z.localConversationId),
          (S[6] = eg),
          (S[7] = eC),
          (S[8] = a))
        : (a = S[8])
      let eb = (0, u._U)(az, a)
      S[9] !== eb || S[10] !== ev || S[11] !== z || S[12] !== eC
        ? ((o = eC && null != eb ? tC({ intl: ev, notification: { ...z, body: eb } }) : null),
          (S[9] = eb),
          (S[10] = ev),
          (S[11] = z),
          (S[12] = eC),
          (S[13] = o))
        : (o = S[13])
      let ex = o
      S[14] !== ew || S[15] !== ex
        ? ((r = null == ex ? ew : { ...ew, subtitle: ex.subtitle, actionAriaLabel: ex.actionAriaLabel }),
          (S[14] = ew),
          (S[15] = ex),
          (S[16] = r))
        : (r = S[16])
      let eM = r
      S[17] !== z ? ((l = eG(z)), (S[17] = z), (S[18] = l)) : (l = S[18])
      let eA = l,
        eI = z.waitingRequest,
        [eS, eR] = (0, g.useState)(!1),
        ek = U ?? eS,
        [eO, e_] = (0, g.useState)(!1),
        eN = (0, g.useRef)(ek),
        [eP, eL] = (0, g.useState)(void 0),
        [eF, eq] = (0, g.useState)($?.draft ?? ""),
        [ej, eD] = (0, g.useState)(!1),
        eU = (0, g.useRef)(null),
        eV = (0, g.useRef)(void 0),
        eH = "activity" === z.kind && O && null != ei,
        eB = eH || ("activity" !== z.kind && (null != ei || null != z.action)),
        eX = null != z.controlTarget && null != el,
        eW = z.isLoading && eX,
        eY = "activity" !== z.kind && null != en,
        ez = !V && null != z.notificationPreferenceId && null != eo,
        eK = eO || ek,
        e$ = null != eI && eK,
        eQ = !eW && !e$,
        eZ = eX && void 0 !== eP && eP === z.turnKey,
        eJ = $?.notificationId === z.id && $.turnKey === z.turnKey ? $ : null,
        e1 = void 0 !== $,
        e0 = eX && (e1 ? null != eJ : eZ),
        e2 = eh && eY && !e0 && !H,
        e3 = eX && (!V || e0),
        e4 = eW && (e0 || (!V && ej)),
        e5 = e3 && (e0 || (!V && ej)),
        e6 = eJ?.submissionStatus === "error",
        e7 = eJ?.submissionStatus === "submitting",
        e8 = Q && e0,
        e9 = null != eI || e4 || (H && !ed),
        te = "secondary" === et && !H && eu,
        tt = eu || H ? 0.18 : 0
      if (
        (S[19] !== te || S[20] !== V || S[21] !== tt
          ? ((s = { duration: tt, ease: "easeOut" }),
            V ? (s = { duration: 0 }) : te && (s = { delay: 0.117, duration: 0.081, ease: "easeOut" }),
            (S[19] = te),
            (S[20] = V),
            (S[21] = tt),
            (S[22] = s))
          : (s = S[22]),
        S[23] !== eM.subtitle || S[24] !== z)
      ) {
        var ta
        ;((ta = eM.subtitle),
          (c = "activity" !== z.kind && null == z.waitingRequest && z.title.length <= 20 && ta.length > 40),
          (S[23] = eM.subtitle),
          (S[24] = z),
          (S[25] = c))
      } else c = S[25]
      let ti = c
      S[26] !== eI
        ? ((d = (e) => {
            if ((eV.current?.(), (eV.current = void 0), null == e || null == eI)) return
            let t = () => {
              let t = Array.from(e.querySelectorAll('[data-avatar-overlay-overflow-content="true"]')).some(ia),
                a = e.querySelector('[data-avatar-overlay-waiting-request-body="true"]'),
                i = null != a && a.clientHeight > 0 && a.scrollHeight > a.clientHeight + 1
              e_((e) => (eN.current && e ? e : t || i))
            }
            ;(t(), (eV.current = (0, at.J)({ axis: "both", target: e, onChange: t })))
          }),
          (S[26] = eI),
          (S[27] = d))
        : (d = S[27])
      let tn = d
      S[28] !== z || S[29] !== el
        ? ((p = (e) => {
            el?.(z, e)
          }),
          (S[28] = z),
          (S[29] = el),
          (S[30] = p))
        : (p = S[30])
      let to = (0, g.useEffectEvent)(p)
      ;(S[31] !== ek
        ? ((f = () => {
            eN.current = ek
          }),
          (m = [ek]),
          (S[31] = ek),
          (S[32] = f),
          (S[33] = m))
        : ((f = S[32]), (m = S[33])),
        (0, g.useLayoutEffect)(f, m),
        S[34] !== e1 || S[35] !== to || S[36] !== e8
          ? ((h = () => {
              if (e8)
                return e1
                  ? (to({ type: "follow-up-active-changed", isActive: !0 }),
                    () => {
                      to({ type: "follow-up-active-changed", isActive: !1 })
                    })
                  : (to({ type: "open-follow-up" }),
                    () => {
                      to({ type: "close-follow-up" })
                    })
            }),
            (S[34] = e1),
            (S[35] = to),
            (S[36] = e8),
            (S[37] = h))
          : (h = S[37]),
        S[38] !== e1 || S[39] !== e8 ? ((v = [e1, e8]), (S[38] = e1), (S[39] = e8), (S[40] = v)) : (v = S[40]),
        (0, g.useEffect)(h, v),
        S[41] !== e0
          ? ((w = () => {
              e0 && document.activeElement?.closest('[role="menu"]') == null && eU.current?.focus()
            }),
            (C = [e0]),
            (S[41] = e0),
            (S[42] = w),
            (S[43] = C))
          : ((w = S[42]), (C = S[43])),
        (0, K.JX)("avatar-overlay-keyboard-interaction-ready", w, C),
        S[44] !== e1 || S[45] !== z || S[46] !== el
          ? ((b = () => {
              ;(eq(""), eL(void 0), e1 && el?.(z, { type: "close-follow-up" }))
            }),
            (S[44] = e1),
            (S[45] = z),
            (S[46] = el),
            (S[47] = b))
          : (b = S[47]))
      let tr = b,
        tl = `${z.id}:${z.turnKey}`
      return (
        S[48] !== z || S[49] !== en ? ((x = () => en?.(z)), (S[48] = z), (S[49] = en), (S[50] = x)) : (x = S[50]),
        S[51] !== eu ||
        S[52] !== D ||
        S[53] !== eY ||
        S[54] !== eK ||
        S[55] !== ez ||
        S[56] !== e3 ||
        S[57] !== e2 ||
        S[58] !== tr ||
        S[59] !== F ||
        S[60] !== q ||
        S[61] !== eM.actionAriaLabel ||
        S[62] !== eM.collapseNotificationAriaLabel ||
        S[63] !== eM.dismissNotificationAriaLabel ||
        S[64] !== eM.expandNotificationAriaLabel ||
        S[65] !== eM.expandNotificationStackAriaLabel ||
        S[66] !== eM.patchSummary ||
        S[67] !== eM.statusIconAriaLabel ||
        S[68] !== eM.subtitle ||
        S[69] !== T ||
        S[70] !== P ||
        S[71] !== eH ||
        S[72] !== e6 ||
        S[73] !== e$ ||
        S[74] !== ef ||
        S[75] !== ev ||
        S[76] !== ek ||
        S[77] !== e1 ||
        S[78] !== e0 ||
        S[79] !== ep ||
        S[80] !== eB ||
        S[81] !== eZ ||
        S[82] !== ej ||
        S[83] !== e5 ||
        S[84] !== e4 ||
        S[85] !== H ||
        S[86] !== e7 ||
        S[87] !== eF ||
        S[88] !== tn ||
        S[89] !== Y ||
        S[90] !== z ||
        S[91] !== eA ||
        S[92] !== ei ||
        S[93] !== J ||
        S[94] !== en ||
        S[95] !== er ||
        S[96] !== ee ||
        S[97] !== eo ||
        S[98] !== es ||
        S[99] !== el ||
        S[100] !== ec ||
        S[101] !== ey ||
        S[102] !== N ||
        S[103] !== et ||
        S[104] !== em ||
        S[105] !== eh ||
        S[106] !== ed ||
        S[107] !== e9 ||
        S[108] !== ti ||
        S[109] !== ea ||
        S[110] !== s ||
        S[111] !== L ||
        S[112] !== j ||
        S[113] !== eQ ||
        S[114] !== eI
          ? ((M = (e) =>
              (0, i.jsxs)(ae.mD, {
                swipeX: e2 ? e : void 0,
                className: (0, t_.A)(
                  "relative flow-root",
                  null == N && "min-h-14",
                  "activityPill-s8lFCN",
                  eQ && "activityPillSingleControl-bXJPCJ",
                ),
                animatesCssEntry: eu,
                cssHeight: T,
                presentedHeight: N,
                contentX: F,
                contentY: q,
                attachmentContent: D,
                cssWidth: P,
                foregroundTransition: s,
                hidesForegroundImmediately: ep && !ed,
                hidesMaterialForHiddenStart: ef,
                retainsForeground: ed,
                isStackedBehindPrimary: H,
                nativeSurfaceId: Y,
                publishesLayoutMeasurement: em,
                rendersMaterial: eh,
                prefersReducedMotion: !!ey,
                prominence: et,
                overflowContent: eY
                  ? (0, i.jsx)("div", {
                      className: (0, t_.A)(
                        "absolute -top-1 left-0 z-20",
                        ej || e0 ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                      ),
                      "data-avatar-overlay-chromium-overflow": "true",
                      "data-avatar-overlay-swipe-dismiss-accessory": "true",
                      children: (0, i.jsx)(av, { ariaLabel: eM.dismissNotificationAriaLabel, onClick: () => en(z) }),
                    })
                  : null,
                onUpdate: J,
                onMaterialUpdate: ee,
                onContextMenu: (e) => {
                  let t = e.target
                  !ez ||
                    (t instanceof HTMLElement &&
                      (t.isContentEditable ||
                        null != t.closest("input, textarea, select, [contenteditable='true']"))) ||
                    (e.preventDefault(), e.stopPropagation(), eo(z))
                },
                onBlurCapture: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || eD(e.currentTarget.matches(":hover"))
                },
                onFocusCapture: () => {
                  eD(!0)
                },
                onPointerEnter: () => {
                  eD(!0)
                },
                onPointerLeave: () => {
                  eD(!1)
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, i.jsxs)(it, {
                        ref: tn,
                        interactive: eB || ez,
                        "aria-label": eH
                          ? eM.expandNotificationStackAriaLabel
                          : eB
                            ? eM.actionAriaLabel
                            : ez
                              ? ev.formatMessage(aK.OD.notificationActions, { title: z.title })
                              : void 0,
                        className: (0, t_.A)(
                          "block min-h-14 w-full min-w-0 rounded-[var(--avatar-overlay-native-corner-radius)] px-4 py-3 text-start select-none focus-visible:outline focus-visible:outline-offset-[-2px]",
                          "pe-[var(--activity-pill-content-padding-right)]",
                          e5 && "activityPillContentFade-fdzGMd",
                          eB ? "cursor-interaction" : "cursor-default",
                        ),
                        initial: !1,
                        style: null == ea ? void 0 : { paddingInlineStart: ea, paddingInlineEnd: ea },
                        onClick: () => {
                          if (eB) {
                            if (null != ei) return void ei(z.id)
                            null != z.action && es?.(z)
                          }
                        },
                        onKeyDown: (e) => {
                          if ((eB || ez) && ("Enter" === e.key || " " === e.key)) {
                            if ((e.preventDefault(), null != ei)) return void ei(z.id)
                            if (eB) return void es?.(z)
                            eo?.(z)
                          }
                        },
                        children: [
                          (0, i.jsxs)(ae.oS, {
                            as: "div",
                            hasInlineSubtitle: ti,
                            hasWaitingRequest: null != eI,
                            isExpanded: ek,
                            isLoading: ti && z.isLoading,
                            isOverflowContent: !0,
                            notificationKind: z.kind,
                            variant: "title",
                            children: [
                              (0, i.jsx)("span", {
                                role: "img",
                                "aria-label": eM.statusIconAriaLabel,
                                className: e9 || "spinner" === eA.iconType ? "sr-only" : "me-1 inline-flex align-top",
                                "data-avatar-overlay-status": eA.iconType,
                                children: af(eA),
                              }),
                              (0, i.jsx)(tF.P.span, {
                                className: ti ? (0, t_.A)("font-bold text-default", z.isLoading && aC) : void 0,
                                style: { fontWeight: j },
                                children: z.title,
                              }),
                              ti &&
                                (0, i.jsxs)(tF.P.span, {
                                  style: { opacity: L },
                                  children: [
                                    (0, i.jsx)("span", {
                                      "aria-hidden": !0,
                                      className: (0, t_.A)("mx-1.5 font-normal text-secondary", z.isLoading && aC),
                                      children: (0, i.jsx)(tZ.A, {
                                        id: "avatarOverlay.inlineSubtitleSeparator",
                                        defaultMessage: "\u2022",
                                      }),
                                    }),
                                    (0, i.jsx)("span", {
                                      className: "font-normal text-secondary",
                                      children: eM.subtitle,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, i.jsxs)(tF.P.div, {
                            animate: null == eI ? void 0 : { maxHeight: ek ? 180 : 62 },
                            className: (0, t_.A)(
                              "text-[13px] leading-4",
                              ("activity" === z.kind || ti) && "hidden",
                              "text-secondary",
                              null == eI && "truncate",
                              null != eI && (ek ? "overflow-y-auto overscroll-contain" : "overflow-clip"),
                            ),
                            initial: !1,
                            "data-avatar-overlay-overflow-content": null == eI ? "true" : void 0,
                            "data-avatar-overlay-waiting-request-body": "true",
                            style: { opacity: L },
                            transition:
                              ey || null != T ? { duration: 0 } : { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
                            children: [
                              null == eI &&
                                !ti &&
                                (0, i.jsx)(ae.oS, { isLoading: z.isLoading, truncate: !0, children: eM.subtitle }),
                              null != eI &&
                                (0, i.jsx)(aG, {
                                  isExpanded: ek,
                                  patchSummaryCopy: eM.patchSummary,
                                  request: eI,
                                  onRunNotificationAction: (e) => {
                                    es?.(z, e)
                                  },
                                  onSubmitQuestionOption: (e) => {
                                    ec?.(z, e)
                                  },
                                }),
                            ],
                          }),
                        ],
                      }),
                      e3
                        ? (0, i.jsxs)("div", {
                            className: (0, t_.A)(
                              "absolute top-3 right-[var(--activity-pill-edge-inset)] z-20 flex h-8 items-center gap-[var(--activity-pill-control-gap)]",
                              e5 ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                            ),
                            children: [
                              (0, i.jsx)(ag.$, {
                                "aria-label": ev.formatMessage(a9.replyNotification, { title: z.title }),
                                "aria-pressed": e0,
                                "data-avatar-overlay-material": "css",
                                color: "activity",
                                size: "iconCircle",
                                title: ev.formatMessage(a9.replyNotification, { title: z.title }),
                                onClick: () => {
                                  e0 ? tr() : (eq(""), eL(z.turnKey), e1 && el?.(z, { type: "open-follow-up" }))
                                },
                                children: (0, i.jsx)(t1.I, { "aria-hidden": !1, asset: aN }),
                              }),
                              eQ
                                ? null
                                : (0, i.jsx)(ag.$, {
                                    "aria-label": ev.formatMessage(a9.stopNotification, { title: z.title }),
                                    "aria-hidden": !e4 || void 0,
                                    "data-avatar-overlay-material": "css",
                                    className: "aria-hidden:pointer-events-none aria-hidden:opacity-0",
                                    color: "activityStop",
                                    size: "iconCircle",
                                    tabIndex: e4 ? void 0 : -1,
                                    title: ev.formatMessage(a9.stopNotification, { title: z.title }),
                                    onClick: () => {
                                      ;(eq(""), eL(void 0), el?.(z, { type: "stop" }))
                                    },
                                    children: (0, i.jsx)(t1.I, { "aria-hidden": !1, asset: aL }),
                                  }),
                            ],
                          })
                        : null,
                      e$
                        ? (0, i.jsx)("div", {
                            className:
                              "absolute top-3 right-[var(--activity-pill-edge-inset)] z-20 flex h-8 items-center",
                            children: (0, i.jsx)(ae.NS, {
                              "aria-expanded": ek,
                              "aria-label": ek ? eM.collapseNotificationAriaLabel : eM.expandNotificationAriaLabel,
                              color: "ghost",
                              disabled: !eK,
                              size: "icon",
                              onClick: () => {
                                ek && e_(!0)
                                let e = !ek
                                ;((eN.current = e), null != er ? er(z.id, e) : eR(e))
                              },
                              children: (0, i.jsx)(tF.P.span, {
                                animate: { rotate: ek ? 0 : -90 },
                                transition: ey ? { duration: 0 } : { duration: 0.16, ease: [0.23, 1, 0.32, 1] },
                                children: (0, i.jsx)(t1.I, { "aria-hidden": !1, asset: aP.h }),
                              }),
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, i.jsx)(tj.N, {
                    mode: null == T ? "sync" : "popLayout",
                    onExitComplete: J,
                    children: e0
                      ? (0, i.jsx)(a8, {
                          animatesOwnHeight: null == T,
                          autoFocus: eZ,
                          draft: eF,
                          hasSubmissionError: e6,
                          inputRef: eU,
                          isSubmitting: e7,
                          notificationTitle: z.title,
                          prefersReducedMotion: !!ey,
                          onAnimationFrame: J,
                          onClose: tr,
                          onDraftChange: (e, t) => {
                            ;(eq(e), e1 && el?.(z, { type: "follow-up-editor-changed", caretPoint: t, draft: e }))
                          },
                          onSubmitFollowUp: (e) => {
                            ;(e1 || (eq(""), eL(void 0)), el?.(z, { type: "submit-follow-up", prompt: e }))
                          },
                        })
                      : null,
                  }),
                ],
              })),
            (S[51] = eu),
            (S[52] = D),
            (S[53] = eY),
            (S[54] = eK),
            (S[55] = ez),
            (S[56] = e3),
            (S[57] = e2),
            (S[58] = tr),
            (S[59] = F),
            (S[60] = q),
            (S[61] = eM.actionAriaLabel),
            (S[62] = eM.collapseNotificationAriaLabel),
            (S[63] = eM.dismissNotificationAriaLabel),
            (S[64] = eM.expandNotificationAriaLabel),
            (S[65] = eM.expandNotificationStackAriaLabel),
            (S[66] = eM.patchSummary),
            (S[67] = eM.statusIconAriaLabel),
            (S[68] = eM.subtitle),
            (S[69] = T),
            (S[70] = P),
            (S[71] = eH),
            (S[72] = e6),
            (S[73] = e$),
            (S[74] = ef),
            (S[75] = ev),
            (S[76] = ek),
            (S[77] = e1),
            (S[78] = e0),
            (S[79] = ep),
            (S[80] = eB),
            (S[81] = eZ),
            (S[82] = ej),
            (S[83] = e5),
            (S[84] = e4),
            (S[85] = H),
            (S[86] = e7),
            (S[87] = eF),
            (S[88] = tn),
            (S[89] = Y),
            (S[90] = z),
            (S[91] = eA),
            (S[92] = ei),
            (S[93] = J),
            (S[94] = en),
            (S[95] = er),
            (S[96] = ee),
            (S[97] = eo),
            (S[98] = es),
            (S[99] = el),
            (S[100] = ec),
            (S[101] = ey),
            (S[102] = N),
            (S[103] = et),
            (S[104] = em),
            (S[105] = eh),
            (S[106] = ed),
            (S[107] = e9),
            (S[108] = ti),
            (S[109] = ea),
            (S[110] = s),
            (S[111] = L),
            (S[112] = j),
            (S[113] = eQ),
            (S[114] = eI),
            (S[115] = M))
          : (M = S[115]),
        S[116] !== R ||
        S[117] !== e2 ||
        S[118] !== eM.dismissNotificationAriaLabel ||
        S[119] !== E ||
        S[120] !== tl ||
        S[121] !== x ||
        S[122] !== M
          ? ((A = (0, i.jsx)(
              aj,
              {
                ariaLabel: eM.dismissNotificationAriaLabel,
                enabled: e2,
                input: R,
                visibleRight: E,
                onDismiss: x,
                children: M,
              },
              tl,
            )),
            (S[116] = R),
            (S[117] = e2),
            (S[118] = eM.dismissNotificationAriaLabel),
            (S[119] = E),
            (S[120] = tl),
            (S[121] = x),
            (S[122] = M),
            (S[123] = A))
          : (A = S[123]),
        A
      )
    }
    function it(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(11)
      if (
        (s[0] !== e
          ? (({ interactive: t, onClick: a, onKeyDown: o, ...r } = e),
            (s[0] = e),
            (s[1] = t),
            (s[2] = a),
            (s[3] = o),
            (s[4] = r))
          : ((t = s[1]), (a = s[2]), (o = s[3]), (r = s[4])),
        !t)
      ) {
        let e
        return (s[5] !== r ? ((e = (0, i.jsx)(tF.P.div, { ...r })), (s[5] = r), (s[6] = e)) : (e = s[6]), e)
      }
      return (
        s[7] !== a || s[8] !== o || s[9] !== r
          ? ((l = (0, i.jsx)(tF.P.div, { ...r, role: "button", tabIndex: 0, onClick: a, onKeyDown: o })),
            (s[7] = a),
            (s[8] = o),
            (s[9] = r),
            (s[10] = l))
          : (l = s[10]),
        l
      )
    }
    function ia(e) {
      return e.clientWidth > 0 && e.scrollWidth > e.clientWidth + 1
    }
    var ii = a("iOtI"),
      io = a("iBgr"),
      ir = a("bIvi")
    let il = (0, w.YK)({
      notificationList: { id: "avatarOverlay.notificationList", defaultMessage: "Activity notifications" },
    })
    function is(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        f,
        m,
        h,
        v,
        w,
        C,
        b,
        x,
        M,
        A,
        I,
        S,
        R,
        E,
        k,
        O,
        _,
        T,
        N,
        P,
        L,
        F,
        q,
        j,
        D,
        U,
        V,
        H,
        B,
        X,
        W,
        Y,
        z,
        K,
        $,
        G,
        Q,
        Z,
        J,
        ee,
        et,
        ea,
        ei,
        en = (0, n.c)(263),
        {
          activityCopies: eo,
          activityStackPresentation: er,
          enteringNotificationIds: el,
          retainedForegroundNotificationIds: es,
          coveredForegroundNotificationIds: ec,
          isExpanded: eu,
          isVisiblyExpanded: ed,
          isTrayAboveMascot: ep,
          notifications: ef,
          presentedGeometry: em,
          renderNotificationRow: eh,
          stackTransition: eg,
          onActivityStackScroll: ev,
          onAnimationFrame: ey,
        } = e
      en[0] !== el ? ((t = void 0 === el ? [] : el), (en[0] = el), (en[1] = t)) : (t = en[1])
      let ew = t
      en[2] !== es ? ((a = void 0 === es ? [] : es), (en[2] = es), (en[3] = a)) : (a = en[3])
      let eC = a
      en[4] !== ec ? ((o = void 0 === ec ? [] : ec), (en[4] = ec), (en[5] = o)) : (o = en[5])
      let eb = o,
        ex = (0, y.A)()
      en[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = new Map()), (en[6] = r)) : (r = en[6])
      let eM = (0, g.useRef)(r),
        [eA, eI] = (0, g.useState)(iv)
      ;(eA.size !== er.items.length ||
        er.items.some((e) => {
          let { itemId: t } = e
          return !eA.has(t)
        })) &&
        eI(
          new Map(
            er.items.map((e) => {
              let { itemId: t, itemHeight: a, presentationRect: i } = e
              return [
                t,
                eA.get(t) ?? { height: (0, ii.OQ)(a), top: (0, ii.OQ)(0), scaleY: (0, ii.OQ)(eu ? 1 : i.height / a) },
              ]
            }),
          ),
        )
      let eS = (0, tN.d)(+!!eu),
        eR = (0, tN.d)(er.contentHeight),
        eE = (0, tN.d)(er.viewportRect.height),
        ek = (0, tN.d)("hidden"),
        eO = (0, tN.d)("var(--activity-stack-edge-mask)")
      en[7] === Symbol.for("react.memo_cache_sentinel") ? ((l = new Set()), (en[7] = l)) : (l = en[7])
      let e_ = (0, g.useRef)(l),
        eT = eu ? Math.max(0, er.viewportRect.top - (er.items[0]?.presentationRect.top ?? er.viewportRect.top)) : 0
      en[8] !== eu || en[9] !== eT
        ? ((s = { isExpanded: eu, scrollOffset: eT, translation: eT }), (en[8] = eu), (en[9] = eT), (en[10] = s))
        : (s = en[10])
      let [eP, eL] = (0, g.useState)(s)
      ;((eu !== eP.isExpanded || eT !== eP.scrollOffset) &&
        eL({
          isExpanded: eu,
          scrollOffset: eT,
          translation: eP.translation + (eu && eP.isExpanded ? eT - eP.scrollOffset : 0),
        }),
        en[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = new Map()), (u = new Map()), (en[11] = c), (en[12] = u))
          : ((c = en[11]), (u = en[12])),
        en[13] !== er.items
          ? ((p = { items: er.items, offsets: c, heightOrigins: u }), (en[13] = er.items), (en[14] = p))
          : (p = en[14]))
      let [eF, eq] = (0, g.useState)(p)
      if (
        !(
          er.items.length === eF.items.length &&
          er.items.every((e, t) => {
            let { itemId: a } = e
            return a === eF.items[t].itemId
          })
        ) ||
        er.items.some((e, t) => {
          let { itemHeight: a } = e
          return a !== eF.items[t]?.itemHeight
        })
      ) {
        let e = new Map(eF.items.map(ig)),
          t = new Map(),
          a = 0
        for (let { itemHeight: e, itemId: i } of eF.items)
          (t.set(i, (eF.offsets.get(i) ?? 0) + a), (a += (eA.get(i)?.height.get() ?? e) - e))
        a = 0
        let i = new Map(),
          n = new Map()
        for (let { itemHeight: o, itemId: r } of er.items)
          (i.set(r, (t.get(r) ?? 0) - a),
            (a += (eA.get(r)?.height.get() ?? o) - o),
            n.set(r, (eF.heightOrigins.get(r) ?? 0) + o - (e.get(r) ?? o)))
        eq({ items: er.items, offsets: i, heightOrigins: n })
      }
      let ej = ef.length > 1 && eu && er.contentHeight > er.viewportRect.height,
        [eD, eU] = (0, g.useState)(ej)
      ;(ej && !eD && eU(!0),
        en[15] !== er.items || en[16] !== ej
          ? ((f = ej && er.items.some(ih)), (en[15] = er.items), (en[16] = ej), (en[17] = f))
          : (f = en[17]))
      let eV = f
      en[18] !== er.items || en[19] !== ej
        ? ((m = ej && er.items.some(im)), (en[18] = er.items), (en[19] = ej), (en[20] = m))
        : (m = en[20])
      let eH = m,
        eB = (0, tN.d)(eP.translation - eT)
      en[21] !== eP.translation
        ? ((h = (e) => e - eP.translation), (en[21] = eP.translation), (en[22] = h))
        : (h = en[22])
      let eX = (0, tP.G)(eB, h),
        eW = (0, tP.G)(eX, ip)
      en[23] !== eE || en[24] !== eR || en[25] !== eX
        ? ((v = () => Math.max(0, Math.min(1, 1 - (eR.get() + eX.get() - eE.get()) / 8))),
          (en[23] = eE),
          (en[24] = eR),
          (en[25] = eX),
          (en[26] = v))
        : (v = en[26])
      let eY = (0, tP.G)(v)
      en[27] !== er.items ||
      en[28] !== er.viewportRect.height ||
      en[29] !== eH ||
      en[30] !== ed ||
      en[31] !== ep ||
      en[32] !== ef
        ? ((w =
            ed && ep && eH
              ? Math.max(
                  0,
                  Math.ceil(
                    ef.slice(0, 4).reduce((e, t) => {
                      let a = er.items.find((e) => {
                        let { itemId: a } = e
                        return a === t.id
                      })
                      return Math.max(e, null == a ? 0 : a.presentationRect.top + a.presentationRect.height + d.Xlf)
                    }, 0) - er.viewportRect.height,
                  ),
                )
              : 0),
          (en[27] = er.items),
          (en[28] = er.viewportRect.height),
          (en[29] = eH),
          (en[30] = ed),
          (en[31] = ep),
          (en[32] = ef),
          (en[33] = w))
        : (w = en[33])
      let ez = w,
        eK = ed && eH,
        e$ = ed && eV
      en[34] !== ez || en[35] !== ed || en[36] !== eK || en[37] !== e$
        ? ((C = {
            collapseBottomClipHeadroom: ez,
            hasBottomOverflow: eK,
            hasTopOverflow: e$,
            isExpanded: ed,
            retainsExpandedHeight: ed,
          }),
          (en[34] = ez),
          (en[35] = ed),
          (en[36] = eK),
          (en[37] = e$),
          (en[38] = C))
        : (C = en[38])
      let [eG, eQ] = (0, g.useState)(C)
      ;((ed !== eG.isExpanded ||
        (ed && (eH !== eG.hasBottomOverflow || ez !== eG.collapseBottomClipHeadroom || eV !== eG.hasTopOverflow))) &&
        eQ({
          collapseBottomClipHeadroom: ed ? ez : eG.collapseBottomClipHeadroom,
          hasBottomOverflow: ed ? eH : eG.hasBottomOverflow,
          hasTopOverflow: ed ? eV : eG.hasTopOverflow,
          isExpanded: ed,
          retainsExpandedHeight: ed || eG.retainsExpandedHeight,
        }),
        en[39] !== ef ? ((b = new Map(ef.map(id))), (en[39] = ef), (en[40] = b)) : (b = en[40]))
      let eZ = b,
        eJ = er.items[0]?.presentationRect.height ?? 0
      en[41] !== er || en[42] !== eu || en[43] !== ef.length
        ? ((x = tS({ activityStackPresentation: er, isExpanded: eu, notificationCount: ef.length })),
          (en[41] = er),
          (en[42] = eu),
          (en[43] = ef.length),
          (en[44] = x))
        : (x = en[44])
      let { backingLayoutHeight: e1, visibleLayoutHeight: e0 } = x,
        e2 = ep ? e0 - e1 : 0,
        e3 = (0, tN.d)(e1),
        e4 = !ep
      en[45] !== er.viewportRect || en[46] !== ef.length || en[47] !== eJ || en[48] !== e4
        ? ((M = (0, d.vM5)({
            expandsTowardBottom: e4,
            frontRect: { ...er.viewportRect, height: eJ },
            nearEdgeRect: er.viewportRect,
            notificationCount: ef.length,
          })),
          (en[45] = er.viewportRect),
          (en[46] = ef.length),
          (en[47] = eJ),
          (en[48] = e4),
          (en[49] = M))
        : (M = en[49])
      let e5 = M,
        e6 = !eu && eG.retainsExpandedHeight && (eG.hasTopOverflow || eG.hasBottomOverflow),
        e7 = ej || eD,
        e8 = e6 && ep ? eG.collapseBottomClipHeadroom : 0,
        e9 = ep ? d.Xlf : 0,
        te = e7 ? d.VuE : 0,
        tt = Math.max(e9, te),
        ta = Math.max(e8, te)
      en[50] !== er.contentHeight ||
      en[51] !== er.items ||
      en[52] !== er.viewportRect.height ||
      en[53] !== er.viewportRect.top ||
      en[54] !== ta ||
      en[55] !== ej ||
      en[56] !== e5 ||
      en[57] !== eF ||
      en[58] !== eu ||
      en[59] !== eZ ||
      en[60] !== ef.length ||
      en[61] !== eE ||
      en[62] !== eR ||
      en[63] !== eD ||
      en[64] !== eP.translation ||
      en[65] !== tt
        ? ((A = () => {
            if (!(
              !eD ||
              ej ||
              (eu && eR.get() > eE.get() + 0.001) ||
              [...e_.current].some((e) => {
                let t = eZ.get(e)
                return null != t && (eu || t < 4)
              })
            )) {
              for (let { itemId: e, presentationRect: t } of er.items) {
                let a = eZ.get(e),
                  i = eM.current.get(e)
                if (null == a || (!eu && a >= 4)) continue
                let n = eu ? t : (0, d.dw8)(e5, d.TeN[Math.min(a, d.TeN.length - 1)])
                if (
                  null == i ||
                  Math.abs(i.y - (n.top - er.viewportRect.top + eP.translation - (eu ? (eF.offsets.get(e) ?? 0) : 0))) >
                    0.001 ||
                  Math.abs(i.height - (n.height - (eu ? (eF.heightOrigins.get(e) ?? 0) : 0))) > 0.001
                )
                  return
              }
              ;(eN.v.debug("Avatar overlay activity stack released overflow clip", {
                safe: {
                  isExpanded: eu,
                  notificationCount: ef.length,
                  contentHeight: er.contentHeight,
                  topClipHeadroomPx: tt,
                  bottomClipHeadroomPx: ta,
                  maximumHeightReflowOffsetPx: Math.max(0, ...Array.from(eF.offsets.values(), Math.abs)),
                  viewportHeight: er.viewportRect.height,
                },
              }),
                eU(!1))
            }
          }),
          (en[50] = er.contentHeight),
          (en[51] = er.items),
          (en[52] = er.viewportRect.height),
          (en[53] = er.viewportRect.top),
          (en[54] = ta),
          (en[55] = ej),
          (en[56] = e5),
          (en[57] = eF),
          (en[58] = eu),
          (en[59] = eZ),
          (en[60] = ef.length),
          (en[61] = eE),
          (en[62] = eR),
          (en[63] = eD),
          (en[64] = eP.translation),
          (en[65] = tt),
          (en[66] = A))
        : (A = en[66])
      let ti = (0, ir.K)(A)
      en[67] !== er.items ||
      en[68] !== er.maxViewportHeight ||
      en[69] !== er.viewportRect ||
      en[70] !== e1 ||
      en[71] !== ta ||
      en[72] !== ej ||
      en[73] !== ew ||
      en[74] !== eS ||
      en[75] !== eF ||
      en[76] !== eu ||
      en[77] !== ep ||
      en[78] !== eZ ||
      en[79] !== ef[0]?.id ||
      en[80] !== ef.length ||
      en[81] !== eE ||
      en[82] !== eR ||
      en[83] !== eB ||
      en[84] !== em ||
      en[85] !== eO ||
      en[86] !== ek ||
      en[87] !== e3 ||
      en[88] !== ti ||
      en[89] !== eD ||
      en[90] !== eA ||
      en[91] !== eT ||
      en[92] !== eP.translation ||
      en[93] !== tt ||
      en[94] !== e2 ||
      en[95] !== e0
        ? ((I = () => {
            let e = [],
              t = 0
            for (let { itemHeight: a, itemId: i, zIndex: n } of er.items) {
              let o = eZ.get(i),
                r = eM.current.get(i),
                l = eS.get() * ((eF.offsets.get(i) ?? 0) + t),
                s = eA.get(i),
                c = s?.height.get() ?? a
              if (
                ((t += c - a),
                null != r &&
                  ((r.reflowOffsetY = l),
                  (r.scaleY = (r.height + eS.get() * ((eF.heightOrigins.get(i) ?? 0) + c - a)) / c),
                  s?.top.set(l),
                  s?.scaleY.set(r.scaleY)),
                null == o || null == r || ew.includes(i) || r.opacity <= 0.01 || (!eu && o >= 4))
              )
                continue
              let u = r.materialWidth ?? er.viewportRect.width,
                p = r.materialCornerRadius ?? 0,
                f = Math.min(Math.abs(r.scaleX), Math.abs(r.scaleY)),
                m = r.materialElement?.hasAttribute("data-owl-native-source-underlay") ?? !1,
                h = Math.min(d.YMX / 2, (c * Math.abs(r.scaleY)) / 2)
              if (m && f > 0) {
                let e = `${h / f}px`
                r.materialElement?.style.getPropertyValue("--avatar-overlay-native-corner-radius") !== e &&
                  r.materialElement?.style.setProperty("--avatar-overlay-native-corner-radius", e)
              } else m || r.materialElement?.style.removeProperty("--avatar-overlay-native-corner-radius")
              e.push({
                cornerRadius: m ? h : Math.min(p, u / 2, c / 2) * f,
                hasNativeMaterial: m,
                itemId: i,
                opacity: r.opacity * (r.materialOpacity ?? 1),
                rect: {
                  left: r.x,
                  top: r.y + r.reflowOffsetY - eP.translation,
                  width: u * r.scaleX,
                  height: c * r.scaleY,
                },
                scaleX: r.scaleX,
                scaleY: r.scaleY,
                zIndex: n,
              })
            }
            let a = eM.current.get(ef[0]?.id ?? "")
            null != a && eB.set(a.y + a.reflowOffsetY)
            let i = (0, d.jNq)({
                expanded: eu,
                items: er.items.map((e) => {
                  let { itemId: t, itemHeight: a } = e
                  return { id: t, height: eA.get(t)?.height.get() ?? a }
                }),
                scrollOffset: eT,
                viewportRect: { ...er.viewportRect, height: er.maxViewportHeight },
              }),
              n = tS({ activityStackPresentation: i, isExpanded: eu, notificationCount: ef.length })
            ;(eR.set(i.contentHeight), eE.set(n.backingLayoutHeight))
            let o = (eu && i.contentHeight > n.backingLayoutHeight + 0.001) || (eD && (!eu || !ej))
            ;(ek.set(o ? "hidden" : "visible"),
              eO.set(o ? "var(--activity-stack-edge-mask)" : "none"),
              e3.set(n.backingLayoutHeight + tt + ta))
            let r = 0
            for (let { rect: t } of e) {
              let e = Math.max(0, t.top),
                a = Math.min(e1, t.top + t.height)
              a <= e || (r = Math.max(r, ep ? -e2 - e : e2 + a - e0))
            }
            ;(em.set({ ...n, overhang: r, rects: e }), aO.Gt.postRender(ti))
          }),
          (en[67] = er.items),
          (en[68] = er.maxViewportHeight),
          (en[69] = er.viewportRect),
          (en[70] = e1),
          (en[71] = ta),
          (en[72] = ej),
          (en[73] = ew),
          (en[74] = eS),
          (en[75] = eF),
          (en[76] = eu),
          (en[77] = ep),
          (en[78] = eZ),
          (en[79] = ef[0]?.id),
          (en[80] = ef.length),
          (en[81] = eE),
          (en[82] = eR),
          (en[83] = eB),
          (en[84] = em),
          (en[85] = eO),
          (en[86] = ek),
          (en[87] = e3),
          (en[88] = ti),
          (en[89] = eD),
          (en[90] = eA),
          (en[91] = eT),
          (en[92] = eP.translation),
          (en[93] = tt),
          (en[94] = e2),
          (en[95] = e0),
          (en[96] = I))
        : (I = en[96])
      let tn = (0, ir.K)(I)
      if (
        en[97] !== eo ||
        en[98] !== er.items ||
        en[99] !== er.viewportRect.height ||
        en[100] !== er.viewportRect.left ||
        en[101] !== er.viewportRect.top ||
        en[102] !== er.viewportRect.width ||
        en[103] !== e1 ||
        en[104] !== ta ||
        en[105] !== eY ||
        en[106] !== e5 ||
        en[107] !== eb ||
        en[108] !== eG.retainsExpandedHeight ||
        en[109] !== e9 ||
        en[110] !== ew ||
        en[111] !== eS ||
        en[112] !== eH ||
        en[113] !== eV ||
        en[114] !== eF ||
        en[115] !== ex ||
        en[116] !== eu ||
        en[117] !== ed ||
        en[118] !== eZ ||
        en[119] !== ef ||
        en[120] !== ev ||
        en[121] !== ey ||
        en[122] !== eE ||
        en[123] !== eB ||
        en[124] !== eO ||
        en[125] !== ek ||
        en[126] !== e3 ||
        en[127] !== tn ||
        en[128] !== ti ||
        en[129] !== eh ||
        en[130] !== eC ||
        en[131] !== e6 ||
        en[132] !== eA ||
        en[133] !== eP.translation ||
        en[134] !== e7 ||
        en[135] !== eg ||
        en[136] !== tt ||
        en[137] !== eW ||
        en[138] !== e2 ||
        en[139] !== e0
      ) {
        let e,
          t,
          a,
          n,
          o = (e, t, a) => ({
            ...a,
            onUpdate: (a) => {
              let i = eM.current.get(e)
              null != i && ((i[t] = a), (aO.uv.isProcessing ? aO.Gt : io.k).preRender(tn, !1, !0))
            },
          })
        en[168] !== er.items ||
        en[169] !== er.viewportRect.left ||
        en[170] !== er.viewportRect.top ||
        en[171] !== er.viewportRect.width ||
        en[172] !== e5 ||
        en[173] !== eF ||
        en[174] !== eu ||
        en[175] !== ed ||
        en[176] !== eZ ||
        en[177] !== ef[0] ||
        en[178] !== eB ||
        en[179] !== tn ||
        en[180] !== ti ||
        en[181] !== eA ||
        en[182] !== eP.translation
          ? ((e = (e) => {
              if (null == e) return
              let t = new Set(er.items.map(iu))
              for (let e of eM.current.keys()) t.has(e) || (eM.current.delete(e), e_.current.delete(e))
              for (let { itemHeight: e, itemId: t, presentationRect: a } of er.items) {
                let i = eZ.get(t)
                if (null == i) continue
                let n = e > 0 ? e : d.YMX,
                  o = eu ? (eF.offsets.get(t) ?? 0) : 0
                if (null != eM.current.get(t)) continue
                let r = eu ? a : (0, d.dw8)(e5, d.TeN[Math.min(i, d.TeN.length - 1)])
                eM.current.set(t, {
                  height: r.height - (eu ? (eF.heightOrigins.get(t) ?? 0) : 0),
                  opacity: 3 !== i || ed ? 1 : 0,
                  reflowOffsetY: o,
                  scaleX: eu ? 1 : r.width / er.viewportRect.width,
                  scaleY: eu ? 1 : r.height / n,
                  x: r.left - er.viewportRect.left,
                  y: r.top - er.viewportRect.top + eP.translation - o,
                })
              }
              let a = null == ef[0] ? void 0 : eM.current.get(ef[0].id)
              for (let t of (null != a && eB.set(a.y + a.reflowOffsetY),
              e.querySelectorAll('[data-avatar-overlay-material-variant="activity"]'))) {
                let e = t.dataset.avatarOverlayNativeSurfaceId,
                  a = null == e ? void 0 : eM.current.get(e.slice(9))
                if (null == a) continue
                let i = getComputedStyle(t),
                  n = Number.parseFloat(i.width),
                  o = Number.parseFloat(getComputedStyle(t.parentElement ?? t).opacity)
                ;((a.materialElement = t),
                  (a.materialCornerRadius = Number.parseFloat(i.borderTopLeftRadius) || 0),
                  n > 0 && (a.materialWidth = n),
                  Number.isFinite(o) && (a.materialOpacity = o))
              }
              tn()
              let i = Array.from(eA.values(), (e) => {
                  let { height: t } = e
                  return t.on("change", () => aO.Gt.preRender(tn, !1, !0))
                }),
                n = new MutationObserver((e) => {
                  for (let { target: t } of e)
                    if (t instanceof HTMLElement) {
                      for (let e of eM.current.values())
                        if (e.materialElement === t) {
                          e.materialCornerRadius = Number.parseFloat(getComputedStyle(t).borderTopLeftRadius) || 0
                          break
                        }
                    }
                  aO.Gt.preRender(tn, !1, !0)
                })
              return (
                n.observe(e, { attributes: !0, attributeFilter: ["data-owl-native-source-underlay"], subtree: !0 }),
                () => {
                  for (let e of i) e()
                  ;(n.disconnect(), (0, aO.WG)(tn), (0, io.c)(tn), (0, aO.WG)(ti))
                }
              )
            }),
            (en[168] = er.items),
            (en[169] = er.viewportRect.left),
            (en[170] = er.viewportRect.top),
            (en[171] = er.viewportRect.width),
            (en[172] = e5),
            (en[173] = eF),
            (en[174] = eu),
            (en[175] = ed),
            (en[176] = eZ),
            (en[177] = ef[0]),
            (en[178] = eB),
            (en[179] = tn),
            (en[180] = ti),
            (en[181] = eA),
            (en[182] = eP.translation),
            (en[183] = e))
          : (e = en[183])
        let r = e
        if (ta > 0) {
          let e,
            a = `${ta}px`,
            i = -ta
          ;(en[184] !== a || en[185] !== i
            ? ((e = { "--activity-stack-bottom-clip-headroom": a, bottom: i }),
              (en[184] = a),
              (en[185] = i),
              (en[186] = e))
            : (e = en[186]),
            (t = e))
        } else if (!e7) {
          let e
          ;(en[187] !== e1 ? ((e = { height: e1 }), (en[187] = e1), (en[188] = e)) : (e = en[188]), (t = e))
        }
        let l = `${tt - e9}px`,
          s = e2 - tt
        ;(en[189] !== t ||
        en[190] !== eY ||
        en[191] !== eS ||
        en[192] !== eO ||
        en[193] !== ek ||
        en[194] !== e3 ||
        en[195] !== l ||
        en[196] !== s ||
        en[197] !== eW
          ? ((a = {
              ...t,
              "--activity-stack-top-clip-headroom": l,
              "--activity-stack-top-edge-alpha": eW,
              "--activity-stack-bottom-edge-alpha": eY,
              "--activity-stack-expansion-progress": eS,
              "--activity-stack-presented-overflow": ek,
              "--activity-stack-presented-mask": eO,
              height: e3,
              top: s,
            }),
            (en[189] = t),
            (en[190] = eY),
            (en[191] = eS),
            (en[192] = eO),
            (en[193] = ek),
            (en[194] = e3),
            (en[195] = l),
            (en[196] = s),
            (en[197] = eW),
            (en[198] = a))
          : (a = en[198]),
          (t = a),
          (Y = r),
          en[199] !== eo?.[0]?.notificationListAriaLabel || en[200] !== ex
            ? ((z = eo?.[0]?.notificationListAriaLabel ?? ex.formatMessage(il.notificationList)),
              (en[199] = eo?.[0]?.notificationListAriaLabel),
              (en[200] = ex),
              (en[201] = z))
            : (z = en[201]),
          (K = "relative max-w-full shrink-0"),
          ($ = eG.retainsExpandedHeight ? "true" : void 0),
          (G = "notification-stack-visible-layout"),
          (Q = "list"),
          en[202] !== er.viewportRect.width || en[203] !== e0
            ? ((Z = { height: e0, width: er.viewportRect.width }),
              (en[202] = er.viewportRect.width),
              (en[203] = e0),
              (en[204] = Z))
            : (Z = en[204]),
          en[205] !== er.viewportRect.height || en[206] !== ev
            ? ((J =
                null != ev
                  ? (e) => {
                      if (e.ctrlKey || Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return
                      let t = e.target instanceof HTMLElement ? e.target : null
                      for (; null != t && t !== e.currentTarget;) {
                        if (
                          t.isContentEditable ||
                          t.matches("input, textarea, select") ||
                          (t.scrollHeight > t.clientHeight && /^(auto|scroll)$/.test(getComputedStyle(t).overflowY))
                        )
                          return
                        t = t.parentElement
                      }
                      e.preventDefault()
                      let a = e.deltaY
                      ;(1 === e.deltaMode ? (a *= 16) : 2 === e.deltaMode && (a *= er.viewportRect.height), ev(a))
                    }
                  : void 0),
              (en[205] = er.viewportRect.height),
              (en[206] = ev),
              (en[207] = J))
            : (J = en[207]),
          (R = tF.P.div))
        let c = +!!eu,
          u = +!eu
        ;(en[208] !== c || en[209] !== u
          ? ((F = { "--activity-stack-expansion-progress": c, "--activity-stack-edge-mask-alpha": u }),
            (en[208] = c),
            (en[209] = u),
            (en[210] = F))
          : (F = en[210]),
          (q = "ActivityStackViewport-g4FOvE"),
          (j = eH || void 0),
          (D = e7 || void 0),
          (U = eV || void 0),
          (V = !1),
          (H = t),
          en[211] !== e6
            ? ((n = e6 ? { duration: 0.18, ease: "easeOut" } : { duration: 0 }), (en[211] = e6), (en[212] = n))
            : (n = en[212]),
          en[213] !== eg || en[214] !== n
            ? ((B = { "--activity-stack-edge-mask-alpha": n, "--activity-stack-expansion-progress": eg }),
              (en[213] = eg),
              (en[214] = n),
              (en[215] = B))
            : (B = en[215]),
          en[216] !== eu
            ? ((X = () => {
                eu || eQ(ic)
              }),
              (en[216] = eu),
              (en[217] = X))
            : (X = en[217]),
          en[218] !== ey || en[219] !== tn
            ? ((W = () => {
                ;(aO.Gt.preRender(tn, !1, !0), ey?.())
              }),
              (en[218] = ey),
              (en[219] = tn),
              (en[220] = W))
            : (W = en[220]),
          (S = tF.P.div))
        let p = e7 ? "inset-x-6" : "inset-x-0"
        ;(en[221] !== p ? ((_ = (0, t_.A)("absolute", p, "top-0")), (en[221] = p), (en[222] = _)) : (_ = en[222]),
          (T = "true"),
          (N = eu ? "notification-stack-viewport" : void 0),
          (P = "notification-stack-backing-layout"),
          en[223] !== eE || en[224] !== tt
            ? ((L = { height: eE, top: tt }), (en[223] = eE), (en[224] = tt), (en[225] = L))
            : (L = en[225]),
          (E = "relative"))
        let f = `translateY(${-eP.translation}px)`
        ;(en[226] !== f ? ((k = { transform: f }), (en[226] = f), (en[227] = k)) : (k = en[227]),
          (O = er.items.map((e) => {
            let { itemHeight: t, itemId: a, presentationRect: n, zIndex: r } = e,
              l = eZ.get(a),
              s = eA.get(a)
            if (null == l || null == s) return null
            let c = ef[l],
              u = ew.includes(a),
              p = l < 4,
              f = 3 === l,
              m = (0, d.dw8)(e5, d.TeN[Math.min(l, d.TeN.length - 1)]),
              h = c === ef[0],
              g = !eu && !h,
              v = eu ? n : m,
              y = f && !ed ? { duration: 0.18, ease: "easeOut" } : { duration: 0 }
            return (0, i.jsx)(
              tF.P.div,
              {
                animate: {
                  opacity: f && !ed ? 0 : 1,
                  "--activity-stack-structural-height": v.height - (eu ? (eF.heightOrigins.get(a) ?? 0) : 0),
                  scaleX: eu ? 1 : v.width / er.viewportRect.width,
                  x: v.left - er.viewportRect.left,
                  y: v.top - er.viewportRect.top + eP.translation - (eu ? (eF.offsets.get(a) ?? 0) : 0),
                },
                "aria-hidden": g ? "true" : void 0,
                className: (0, t_.A)(
                  "absolute origin-top-left",
                  (g || u) && "pointer-events-none",
                  !eu && !eG.retainsExpandedHeight && l >= 3 && "opacity-0",
                  !eu && l >= 4 && "hidden",
                ),
                "data-avatar-overlay-measure": p ? "notification-tray-row" : void 0,
                "data-avatar-overlay-activity-stack-item": a,
                "data-avatar-overlay-hit-region": eu ? "notification-tray-row" : void 0,
                inert: g || void 0,
                initial: !1,
                style: { left: 0, top: s.top, scaleY: s.scaleY, width: er.viewportRect.width, zIndex: r },
                transition: {
                  ...eg,
                  opacity: o(a, "opacity", y),
                  scaleX: o(a, "scaleX", eg),
                  "--activity-stack-structural-height": o(a, "height", eg),
                  x: o(a, "x", eg),
                  y: o(a, "y", eg),
                },
                onAnimationStart: () => {
                  e_.current.add(a)
                },
                onAnimationComplete: () => {
                  ;(e_.current.delete(a), ti())
                },
                onUpdate: () => ey?.(),
                children: (0, i.jsx)("div", {
                  className: u ? "opacity-0" : void 0,
                  children: (0, i.jsx)(iy, {
                    renderNotificationRow: eh,
                    presentation: {
                      animatesCssEntry: p && !u,
                      canExpandActivityStack: !eu && h && ef.length > 1,
                      copy: eo?.[l],
                      cssHeight: t,
                      presentedHeight: s.height,
                      cssWidth: p ? er.viewportRect.width : void 0,
                      isPrimarySurface: h,
                      isStackedBehindPrimary: g,
                      retainsForeground: eC.includes(a),
                      isForegroundCoveredByFlight: eb.includes(a),
                      nativeSurfaceId: "activity-" + a,
                      notification: c,
                      onMaterialUpdate: (e) => {
                        let t
                        null != (t = eM.current.get(a)) &&
                          ("number" == typeof e.width && (t.materialWidth = e.width),
                          "number" == typeof e.opacity && (t.materialOpacity = e.opacity),
                          "number" == typeof e.borderRadius && (t.materialCornerRadius = e.borderRadius),
                          aO.Gt.preRender(tn, !1, !0))
                      },
                      publishesLayoutMeasurement: !p,
                    },
                  }),
                }),
              },
              a,
            )
          })),
          (en[97] = eo),
          (en[98] = er.items),
          (en[99] = er.viewportRect.height),
          (en[100] = er.viewportRect.left),
          (en[101] = er.viewportRect.top),
          (en[102] = er.viewportRect.width),
          (en[103] = e1),
          (en[104] = ta),
          (en[105] = eY),
          (en[106] = e5),
          (en[107] = eb),
          (en[108] = eG.retainsExpandedHeight),
          (en[109] = e9),
          (en[110] = ew),
          (en[111] = eS),
          (en[112] = eH),
          (en[113] = eV),
          (en[114] = eF),
          (en[115] = ex),
          (en[116] = eu),
          (en[117] = ed),
          (en[118] = eZ),
          (en[119] = ef),
          (en[120] = ev),
          (en[121] = ey),
          (en[122] = eE),
          (en[123] = eB),
          (en[124] = eO),
          (en[125] = ek),
          (en[126] = e3),
          (en[127] = tn),
          (en[128] = ti),
          (en[129] = eh),
          (en[130] = eC),
          (en[131] = e6),
          (en[132] = eA),
          (en[133] = eP.translation),
          (en[134] = e7),
          (en[135] = eg),
          (en[136] = tt),
          (en[137] = eW),
          (en[138] = e2),
          (en[139] = e0),
          (en[140] = S),
          (en[141] = R),
          (en[142] = E),
          (en[143] = k),
          (en[144] = O),
          (en[145] = _),
          (en[146] = T),
          (en[147] = N),
          (en[148] = P),
          (en[149] = L),
          (en[150] = F),
          (en[151] = q),
          (en[152] = j),
          (en[153] = D),
          (en[154] = U),
          (en[155] = V),
          (en[156] = H),
          (en[157] = B),
          (en[158] = X),
          (en[159] = W),
          (en[160] = Y),
          (en[161] = z),
          (en[162] = K),
          (en[163] = $),
          (en[164] = G),
          (en[165] = Q),
          (en[166] = Z),
          (en[167] = J))
      } else
        ((S = en[140]),
          (R = en[141]),
          (E = en[142]),
          (k = en[143]),
          (O = en[144]),
          (_ = en[145]),
          (T = en[146]),
          (N = en[147]),
          (P = en[148]),
          (L = en[149]),
          (F = en[150]),
          (q = en[151]),
          (j = en[152]),
          (D = en[153]),
          (U = en[154]),
          (V = en[155]),
          (H = en[156]),
          (B = en[157]),
          (X = en[158]),
          (W = en[159]),
          (Y = en[160]),
          (z = en[161]),
          (K = en[162]),
          ($ = en[163]),
          (G = en[164]),
          (Q = en[165]),
          (Z = en[166]),
          (J = en[167]))
      return (
        en[228] !== E || en[229] !== k || en[230] !== O
          ? ((ee = (0, i.jsx)("div", { className: E, style: k, children: O })),
            (en[228] = E),
            (en[229] = k),
            (en[230] = O),
            (en[231] = ee))
          : (ee = en[231]),
        en[232] !== S ||
        en[233] !== _ ||
        en[234] !== T ||
        en[235] !== N ||
        en[236] !== P ||
        en[237] !== L ||
        en[238] !== ee
          ? ((et = (0, i.jsx)(S, {
              className: _,
              "data-avatar-overlay-backing-canvas": T,
              "data-avatar-overlay-hit-region": N,
              "data-avatar-overlay-size": P,
              style: L,
              children: ee,
            })),
            (en[232] = S),
            (en[233] = _),
            (en[234] = T),
            (en[235] = N),
            (en[236] = P),
            (en[237] = L),
            (en[238] = ee),
            (en[239] = et))
          : (et = en[239]),
        en[240] !== R ||
        en[241] !== F ||
        en[242] !== q ||
        en[243] !== j ||
        en[244] !== D ||
        en[245] !== U ||
        en[246] !== V ||
        en[247] !== H ||
        en[248] !== B ||
        en[249] !== X ||
        en[250] !== W ||
        en[251] !== et
          ? ((ea = (0, i.jsx)(R, {
              animate: F,
              className: q,
              "data-avatar-overlay-stack-bottom-overflow": j,
              "data-avatar-overlay-stack-overflow-mask": D,
              "data-avatar-overlay-stack-top-overflow": U,
              initial: V,
              style: H,
              transition: B,
              onAnimationComplete: X,
              onUpdate: W,
              children: et,
            })),
            (en[240] = R),
            (en[241] = F),
            (en[242] = q),
            (en[243] = j),
            (en[244] = D),
            (en[245] = U),
            (en[246] = V),
            (en[247] = H),
            (en[248] = B),
            (en[249] = X),
            (en[250] = W),
            (en[251] = et),
            (en[252] = ea))
          : (ea = en[252]),
        en[253] !== Y ||
        en[254] !== z ||
        en[255] !== K ||
        en[256] !== $ ||
        en[257] !== G ||
        en[258] !== Q ||
        en[259] !== Z ||
        en[260] !== J ||
        en[261] !== ea
          ? ((ei = (0, i.jsx)("div", {
              ref: Y,
              "aria-label": z,
              className: K,
              "data-avatar-overlay-retains-stack-layout-height": $,
              "data-avatar-overlay-size": G,
              role: Q,
              style: Z,
              onWheel: J,
              children: ea,
            })),
            (en[253] = Y),
            (en[254] = z),
            (en[255] = K),
            (en[256] = $),
            (en[257] = G),
            (en[258] = Q),
            (en[259] = Z),
            (en[260] = J),
            (en[261] = ea),
            (en[262] = ei))
          : (ei = en[262]),
        ei
      )
    }
    function ic(e) {
      return e.retainsExpandedHeight ? { ...e, retainsExpandedHeight: !1 } : e
    }
    function iu(e) {
      let { itemId: t } = e
      return t
    }
    function id(e, t) {
      return [e.id, t]
    }
    function ip(e) {
      return Math.max(0, Math.min(1, 1 + e / 8))
    }
    function im(e) {
      let { edgeZone: t } = e
      return "bottom" === t
    }
    function ih(e) {
      let { edgeZone: t } = e
      return "top" === t
    }
    function ig(e) {
      let { itemId: t, itemHeight: a } = e
      return [t, a]
    }
    function iv() {
      return new Map()
    }
    function iy({ presentation: e, renderNotificationRow: t }) {
      return t(e)
    }
    var iw = a("hNFe")
    let iC = (0, w.YK)({
      notificationList: { id: "avatarOverlay.notificationList", defaultMessage: "Activity notifications" },
    })
    function ib(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(82),
        {
          animatesActivityLayout: u,
          activitySwipeInput: d,
          swipeVisibleRight: p,
          activityCopies: f,
          activityStackPresentation: m,
          enteringNotificationIds: h,
          retainedForegroundNotificationIds: g,
          coveredForegroundNotificationIds: v,
          hiddenStartCoveredNotificationIds: w,
          expandedNotificationIds: C,
          isNotificationStackCollapsed: b,
          isExpanded: x,
          isVisiblyExpanded: M,
          isTrayAboveMascot: A,
          notifications: I,
          notificationFollowUp: S,
          presentedGeometry: R,
          onActivityStackScroll: E,
          onActivateNotification: k,
          onAnimationFrame: O,
          onDismissNotification: _,
          onOpenNotificationActions: T,
          onNotificationExpansionChange: N,
          onRunNotificationControl: P,
          onRunNotificationAction: L,
          onSubmitQuestionOption: F,
        } = e,
        q = (0, y.A)()
      if (0 === I.length) return null
      c[0] !== u ? ((t = u ? a6.K : { duration: 0 }), (c[0] = u), (c[1] = t)) : (t = c[1])
      let j = t
      if (null != m) {
        let e, t
        return (
          c[2] !== m.sideSpacingPx ||
          c[3] !== d ||
          c[4] !== C ||
          c[5] !== w ||
          c[6] !== b ||
          c[7] !== S ||
          c[8] !== k ||
          c[9] !== O ||
          c[10] !== _ ||
          c[11] !== N ||
          c[12] !== T ||
          c[13] !== L ||
          c[14] !== P ||
          c[15] !== F ||
          c[16] !== p
            ? ((e = (e) => {
                let {
                  animatesCssEntry: t,
                  canExpandActivityStack: a,
                  copy: n,
                  cssHeight: o,
                  presentedHeight: r,
                  cssWidth: l,
                  isPrimarySurface: s,
                  isStackedBehindPrimary: c,
                  retainsForeground: u,
                  isForegroundCoveredByFlight: f,
                  nativeSurfaceId: h,
                  notification: g,
                  onMaterialUpdate: v,
                  publishesLayoutMeasurement: y,
                } = e
                return (0, i.jsx)(ie, {
                  activitySwipeInput: d,
                  swipeVisibleRight: p,
                  animatesCssEntry: t,
                  canExpandActivityStack: a,
                  copy: n,
                  cssHeight: o,
                  presentedHeight: r,
                  cssWidth: l,
                  isStackedBehindPrimary: c,
                  retainsForeground: u,
                  isForegroundCoveredByFlight: f,
                  hidesMaterialForHiddenStart: w.includes(g.id),
                  isNotificationStackCollapsed: b,
                  nativeSurfaceId: h,
                  notification: g,
                  notificationFollowUp: S,
                  publishesFollowUpVisibility: !0,
                  publishesLayoutMeasurement: y,
                  isExpanded: null == N ? void 0 : C.includes(g.id),
                  onAnimationFrame: O,
                  onMaterialUpdate: v,
                  prominence: s ? "primary" : "secondary",
                  sideSpacingPx: m.sideSpacingPx,
                  onActivateNotification: k,
                  onDismissNotification: _,
                  onOpenNotificationActions: T,
                  onExpansionChange: N,
                  onRunNotificationControl: P,
                  onRunNotificationAction: L,
                  onSubmitQuestionOption: F,
                })
              }),
              (c[2] = m.sideSpacingPx),
              (c[3] = d),
              (c[4] = C),
              (c[5] = w),
              (c[6] = b),
              (c[7] = S),
              (c[8] = k),
              (c[9] = O),
              (c[10] = _),
              (c[11] = N),
              (c[12] = T),
              (c[13] = L),
              (c[14] = P),
              (c[15] = F),
              (c[16] = p),
              (c[17] = e))
            : (e = c[17]),
          c[18] !== f ||
          c[19] !== m ||
          c[20] !== v ||
          c[21] !== h ||
          c[22] !== x ||
          c[23] !== A ||
          c[24] !== M ||
          c[25] !== I ||
          c[26] !== E ||
          c[27] !== O ||
          c[28] !== R ||
          c[29] !== g ||
          c[30] !== j ||
          c[31] !== e
            ? ((t = (0, i.jsx)(is, {
                activityCopies: f,
                activityStackPresentation: m,
                enteringNotificationIds: h,
                retainedForegroundNotificationIds: g,
                coveredForegroundNotificationIds: v,
                isExpanded: x,
                isVisiblyExpanded: M,
                isTrayAboveMascot: A,
                notifications: I,
                presentedGeometry: R,
                onActivityStackScroll: E,
                onAnimationFrame: O,
                renderNotificationRow: e,
                stackTransition: j,
              })),
              (c[18] = f),
              (c[19] = m),
              (c[20] = v),
              (c[21] = h),
              (c[22] = x),
              (c[23] = A),
              (c[24] = M),
              (c[25] = I),
              (c[26] = E),
              (c[27] = O),
              (c[28] = R),
              (c[29] = g),
              (c[30] = j),
              (c[31] = e),
              (c[32] = t))
            : (t = c[32]),
          t
        )
      }
      c[33] !== f?.[0]?.notificationListAriaLabel || c[34] !== q
        ? ((a = f?.[0]?.notificationListAriaLabel ?? q.formatMessage(iC.notificationList)),
          (c[33] = f?.[0]?.notificationListAriaLabel),
          (c[34] = q),
          (c[35] = a))
        : (a = c[35])
      let D = x ? "flex flex-col gap-2" : "pb-2"
      if (
        (c[36] !== D
          ? ((o = (0, t_.A)("relative w-full max-w-full shrink-0", D)), (c[36] = D), (c[37] = o))
          : (o = c[37]),
        c[38] !== x || c[39] !== I.length
          ? ((r = !x && I.length > 1 ? (0, i.jsx)(ae.D0, { notificationCount: I.length }) : null),
            (c[38] = x),
            (c[39] = I.length),
            (c[40] = r))
          : (r = c[40]),
        c[41] !== f ||
          c[42] !== d ||
          c[43] !== C ||
          c[44] !== x ||
          c[45] !== b ||
          c[46] !== S ||
          c[47] !== I ||
          c[48] !== k ||
          c[49] !== O ||
          c[50] !== _ ||
          c[51] !== N ||
          c[52] !== T ||
          c[53] !== L ||
          c[54] !== P ||
          c[55] !== F ||
          c[56] !== j ||
          c[57] !== p)
      ) {
        let e
        ;(c[59] !== f ||
        c[60] !== d ||
        c[61] !== C ||
        c[62] !== x ||
        c[63] !== b ||
        c[64] !== S ||
        c[65] !== I.length ||
        c[66] !== k ||
        c[67] !== O ||
        c[68] !== _ ||
        c[69] !== N ||
        c[70] !== T ||
        c[71] !== L ||
        c[72] !== P ||
        c[73] !== F ||
        c[74] !== j ||
        c[75] !== p
          ? ((e = (e, t) => {
              let a = iw.W[t],
                n = 0 === t ? "primary" : "secondary",
                o = !x && "secondary" === n
              if (o) return null
              let r = "relative z-10"
              return (
                "primary" === n
                  ? (r = "relative z-20")
                  : o && (r = "pointer-events-none absolute top-0 right-0 left-0 z-10"),
                (0, i.jsx)(
                  tF.P.div,
                  {
                    layout: !0,
                    layoutDependency: x,
                    "aria-hidden": o ? "true" : void 0,
                    "data-avatar-overlay-backing-canvas": o ? "true" : void 0,
                    className: r,
                    transition: j,
                    onUpdate: O,
                    children: (0, i.jsx)(ie, {
                      activitySwipeInput: d,
                      swipeVisibleRight: p,
                      canExpandActivityStack: !x && "primary" === n && I.length > 1,
                      copy: f?.[t],
                      isStackedBehindPrimary: o,
                      isNotificationStackCollapsed: b,
                      nativeSurfaceId: a,
                      notification: e,
                      notificationFollowUp: S,
                      publishesFollowUpVisibility: !0,
                      isExpanded: null == N ? void 0 : C.includes(e.id),
                      onAnimationFrame: O,
                      prominence: n,
                      onActivateNotification: k,
                      onDismissNotification: _,
                      onOpenNotificationActions: T,
                      onExpansionChange: N,
                      onRunNotificationControl: P,
                      onRunNotificationAction: L,
                      onSubmitQuestionOption: F,
                    }),
                  },
                  e.id,
                )
              )
            }),
            (c[59] = f),
            (c[60] = d),
            (c[61] = C),
            (c[62] = x),
            (c[63] = b),
            (c[64] = S),
            (c[65] = I.length),
            (c[66] = k),
            (c[67] = O),
            (c[68] = _),
            (c[69] = N),
            (c[70] = T),
            (c[71] = L),
            (c[72] = P),
            (c[73] = F),
            (c[74] = j),
            (c[75] = p),
            (c[76] = e))
          : (e = c[76]),
          (l = I.slice(0, iw.W.length).map(e)),
          (c[41] = f),
          (c[42] = d),
          (c[43] = C),
          (c[44] = x),
          (c[45] = b),
          (c[46] = S),
          (c[47] = I),
          (c[48] = k),
          (c[49] = O),
          (c[50] = _),
          (c[51] = N),
          (c[52] = T),
          (c[53] = L),
          (c[54] = P),
          (c[55] = F),
          (c[56] = j),
          (c[57] = p),
          (c[58] = l))
      } else l = c[58]
      return (
        c[77] !== a || c[78] !== o || c[79] !== r || c[80] !== l
          ? ((s = (0, i.jsxs)("div", { "aria-label": a, className: o, role: "list", children: [r, l] })),
            (c[77] = a),
            (c[78] = o),
            (c[79] = r),
            (c[80] = l),
            (c[81] = s))
          : (s = c[81]),
        s
      )
    }
    function ix(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u = (0, n.c)(45),
        {
          animatesActivityLayout: d,
          activitySwipeInput: p,
          swipeVisibleRight: f,
          activityCopies: m,
          activityStackPresentation: h,
          presentedGeometry: g,
          enteringNotificationIds: v,
          retainedForegroundNotificationIds: y,
          coveredForegroundNotificationIds: w,
          hiddenStartCoveredNotificationIds: C,
          areActivityPillsLaidOut: b,
          areActivityPillsVisible: x,
          expandedNotificationIds: M,
          isNotificationStackCollapsed: A,
          isNotificationTrayExpanded: I,
          isNotificationTrayVisiblyExpanded: S,
          isTrayAboveMascot: R,
          notifications: E,
          notificationFollowUp: k,
          onActivityStackScroll: O,
          onActivityPillsHidden: _,
          onActivateNotification: T,
          onDismissNotification: N,
          onOpenNotificationActions: P,
          onNotificationExpansionChange: L,
          onGeometryAnimationFrame: F,
          onRunNotificationControl: q,
          onRunNotificationAction: j,
          onSubmitQuestionOption: D,
          trayMaxHeight: U,
        } = e
      u[0] !== U ? ((t = { maxHeight: U }), (u[0] = U), (u[1] = t)) : (t = u[1])
      let V = x && b ? 1 : 0
      u[2] !== V ? ((a = { opacity: V }), (u[2] = V), (u[3] = a)) : (a = u[3])
      let H = !x || void 0,
        B = !x || void 0
      return (
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = { duration: 0.18, ease: "easeOut" }), (u[4] = o))
          : (o = u[4]),
        u[5] !== x || u[6] !== _
          ? ((r = () => {
              x || _?.()
            }),
            (u[5] = x),
            (u[6] = _),
            (u[7] = r))
          : (r = u[7]),
        u[8] !== m ||
        u[9] !== h ||
        u[10] !== p ||
        u[11] !== d ||
        u[12] !== w ||
        u[13] !== v ||
        u[14] !== M ||
        u[15] !== C ||
        u[16] !== A ||
        u[17] !== I ||
        u[18] !== S ||
        u[19] !== R ||
        u[20] !== k ||
        u[21] !== E ||
        u[22] !== T ||
        u[23] !== O ||
        u[24] !== N ||
        u[25] !== F ||
        u[26] !== L ||
        u[27] !== P ||
        u[28] !== j ||
        u[29] !== q ||
        u[30] !== D ||
        u[31] !== g ||
        u[32] !== y ||
        u[33] !== f
          ? ((l = (0, i.jsx)(ib, {
              animatesActivityLayout: d,
              activitySwipeInput: p,
              swipeVisibleRight: f,
              activityCopies: m,
              activityStackPresentation: h,
              enteringNotificationIds: v,
              retainedForegroundNotificationIds: y,
              coveredForegroundNotificationIds: w,
              hiddenStartCoveredNotificationIds: C,
              isNotificationStackCollapsed: A,
              isExpanded: I,
              isVisiblyExpanded: S,
              isTrayAboveMascot: R,
              notifications: E,
              presentedGeometry: g,
              notificationFollowUp: k,
              expandedNotificationIds: M,
              onActivityStackScroll: O,
              onActivateNotification: T,
              onAnimationFrame: F,
              onDismissNotification: N,
              onOpenNotificationActions: P,
              onNotificationExpansionChange: L,
              onRunNotificationControl: q,
              onRunNotificationAction: j,
              onSubmitQuestionOption: D,
            })),
            (u[8] = m),
            (u[9] = h),
            (u[10] = p),
            (u[11] = d),
            (u[12] = w),
            (u[13] = v),
            (u[14] = M),
            (u[15] = C),
            (u[16] = A),
            (u[17] = I),
            (u[18] = S),
            (u[19] = R),
            (u[20] = k),
            (u[21] = E),
            (u[22] = T),
            (u[23] = O),
            (u[24] = N),
            (u[25] = F),
            (u[26] = L),
            (u[27] = P),
            (u[28] = j),
            (u[29] = q),
            (u[30] = D),
            (u[31] = g),
            (u[32] = y),
            (u[33] = f),
            (u[34] = l))
          : (l = u[34]),
        u[35] !== F || u[36] !== a || u[37] !== H || u[38] !== B || u[39] !== r || u[40] !== l
          ? ((s = (0, i.jsx)(tj.N, {
              initial: !1,
              children: (0, i.jsx)(
                tF.P.div,
                {
                  animate: a,
                  "aria-hidden": H,
                  initial: !1,
                  inert: B,
                  transition: o,
                  onAnimationComplete: r,
                  onUpdate: F,
                  children: l,
                },
                "activity-pills",
              ),
            })),
            (u[35] = F),
            (u[36] = a),
            (u[37] = H),
            (u[38] = B),
            (u[39] = r),
            (u[40] = l),
            (u[41] = s))
          : (s = u[41]),
        u[42] !== t || u[43] !== s
          ? ((c = (0, i.jsx)("div", {
              className: "flex flex-col items-center gap-3",
              "data-avatar-overlay-size": "notification-tray-list",
              style: t,
              children: s,
            })),
            (u[42] = t),
            (u[43] = s),
            (u[44] = c))
          : (c = u[44]),
        c
      )
    }
    var iM = a("O3F3"),
      iA = a("olXw")
    class iI {
      targets = new Map()
      open = null
      pending = null
      mouseEndTimer
      claim(e) {
        ;(this.open !== e && this.open?.close(), (this.open = e))
      }
      forget(e) {
        ;(this.targets.delete(e.element),
          this.open === e && (this.open = null),
          this.pending?.target === e && this.finish(!0))
      }
      closeOutside(e) {
        ;(e instanceof Node && this.open?.element.contains(e)) || (this.open?.close(), (this.open = null))
      }
      handle(e) {
        if (0 !== e.pressedMouseButtons) return
        if (0 !== e.momentumPhase) {
          ;(8 === e.phase || 16 === e.phase) && this.finish(16 === e.phase)
          return
        }
        if (((1 === e.phase || 32 === e.phase) && this.finish(!0), null == this.pending)) {
          let t = document.elementFromPoint(e.x, e.y),
            a = t?.closest("[data-activity-pill-swipe]"),
            i = null == a ? void 0 : this.targets.get(a)
          this.pending = {
            target: null != t && i?.canStart?.(t) !== !1 ? i : void 0,
            events: [],
            direction: "pending",
            directionMultiplier: e.directionInvertedFromDevice ? -1 : 1,
            source: 0 === e.phase ? "mouse" : "trackpad",
          }
        }
        let t = this.pending
        if ("pending" === t.direction) {
          t.events.push(e)
          let a = t.events.reduce((e, t) => e + Math.abs(t.deltaX), 0),
            i = t.events.reduce((e, t) => e + Math.abs(t.deltaY), 0)
          if (Math.max(a, i) >= 3) {
            if (((t.direction = a > i ? "horizontal" : "vertical"), "horizontal" === t.direction && null != t.target))
              for (let e of (this.claim(t.target),
              t.target.begin(t.source, t.events[0].timestampMs, t.events[0].zoomFactor),
              t.events))
                t.target.update(e.deltaX * t.directionMultiplier, e.timestampMs)
            else "vertical" === t.direction && (this.open?.close(), (this.open = null))
            t.events = []
          }
        } else "horizontal" === t.direction && t.target?.update(e.deltaX * t.directionMultiplier, e.timestampMs)
        8 === e.phase || 16 === e.phase
          ? this.finish(16 === e.phase)
          : "mouse" === t.source &&
            (clearTimeout(this.mouseEndTimer), (this.mouseEndTimer = setTimeout(() => this.finish(!1), 120)))
      }
      finish(e) {
        ;(clearTimeout(this.mouseEndTimer),
          this.pending?.direction === "horizontal" && this.pending.target?.end(e),
          (this.pending = null))
      }
    }
    function iS(e) {
      let t,
        a,
        i = (0, n.c)(4),
        { input: o, host: r } = e
      return (
        i[0] !== r || i[1] !== o
          ? ((t = () => {
              let e = !1,
                t = r?.subscribeScrollEvents((t) => {
                  e || o.handle(t)
                })
              t?.then(iO).catch(ik)
              let a = (e) => o.closeOutside(e.target),
                i = () => {
                  ;(o.finish(!0), o.closeOutside(null))
                },
                n = (e) => {
                  "Escape" === e.key && i()
                }
              return (
                document.addEventListener("pointerdown", a, !0),
                document.addEventListener("keydown", n),
                window.addEventListener("blur", i),
                () => {
                  ;((e = !0),
                    o.finish(!0),
                    document.removeEventListener("pointerdown", a, !0),
                    document.removeEventListener("keydown", n),
                    window.removeEventListener("blur", i),
                    t?.then(iE).catch(iR))
                }
              )
            }),
            (a = [r, o]),
            (i[0] = r),
            (i[1] = o),
            (i[2] = t),
            (i[3] = a))
          : ((t = i[2]), (a = i[3])),
        (0, g.useEffect)(t, a),
        null
      )
    }
    function iR() {}
    async function iE(e) {
      null != e && (await Promise.resolve(e.unsubscribe()).finally(() => e[Symbol.dispose]()))
    }
    function ik() {}
    function iO(e) {
      eN.v.debug("Avatar overlay swipe input", { safe: { available: null != e } })
    }
    let i_ = { opacity: tD.iN, scale: { damping: 22, mass: 0.82, stiffness: 300, type: "spring" } },
      iT = (0, w.YK)({ mascotLabel: { id: "petOverlay.mascotLabel", defaultMessage: "{petName} pet" } })
    function iN(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        f,
        m,
        h,
        v,
        w,
        C,
        b,
        x,
        M,
        A,
        I,
        S,
        R,
        E,
        k,
        O,
        _,
        T,
        N,
        P,
        L,
        F,
        q,
        j,
        D,
        U,
        V,
        H,
        B,
        X,
        W,
        Y,
        z,
        $,
        G,
        Q,
        Z,
        J,
        ee,
        et,
        ea,
        ei,
        en,
        eo,
        er,
        el = (0, n.c)(361),
        {
          activitySwipeHost: es,
          animatesQuickChatPresentation: ec,
          activityCopies: eu,
          activityStackPresentation: ed,
          areActivityPillsVisible: ep,
          areActivityPillsPresent: ef,
          avatar: em,
          avatarMenuItems: eh,
          petAnimationPaused: eg,
          debugWindowBorderVisible: ev,
          expandedNotificationIds: ey,
          interactiveRegionRef: ew,
          isNotificationTrayOpen: eC,
          layout: eb,
          mascotDragState: ex,
          mascotStyle: eM,
          isRealtimeNativeOverlayEnabled: eA,
          cssOrbGlowEnabled: eI,
          notificationStackContentExpanded: eS,
          notificationStackControlsVisible: eR,
          notifications: eE,
          notificationStackItemCount: ek,
          notificationFollowUp: eO,
          arePresentationAccessoriesVisible: e_,
          onActivityStackScroll: eT,
          onActivityPillsHidden: eN,
          onActivateNotification: eP,
          onHideActivityPills: eL,
          onMascotLostPointerCapture: eF,
          onMascotPointerCancel: eq,
          onMascotPointerDown: ej,
          onMascotPointerMove: eD,
          onMascotPointerUp: eU,
          onPetAreaHoverChange: eV,
          onNotificationExpansionChange: eH,
          onDismissNotification: eB,
          onOpenNotificationActions: eX,
          onRunNotificationControl: eW,
          onRunNotificationAction: eY,
          onSubmitQuestionOption: ez,
          onQuickChatFocusChange: eK,
          onQuickChatOpen: e$,
          onQuickChatDraftChange: eQ,
          onRemoveQuickChatAppshots: eZ,
          onQuickChatVoiceSelectionChange: eJ,
          onQuickChatFlightComplete: e1,
          onSubmitQuickChat: e0,
          onGeometryAnimationFrame: e2,
          onShowActivityPills: e3,
          quickChatAppshots: e4,
          getQuickChatAttachmentActions: e5,
          quickChatFileAttachments: e6,
          quickChatThreadTarget: e7,
          quickChatAppshotCapturePending: e8,
          quickChatAppshotCaptureResponse: e9,
          quickChatAppshotCaptureStartsCollapsed: te,
          quickChatDraft: tt,
          quickChatFlights: ta,
          quickChatEnabled: ti,
          quickChatStashEnabled: tn,
          isQuickChatPetVisible: to,
          quickChatStyleEnabled: tr,
          petControlsExpanded: tl,
          quickChatExpanded: ts,
          quickChatStashAppearance: tc,
          stashAttentionAnimation: tu,
          quickChatEditorActive: td,
          quickChatFocusRequested: tp,
          quickChatCompositionDeferral: tf,
          quickChatVoiceSelected: tm,
          presentation: th,
          realtimeVoiceSurface: tg,
        } = e,
        tv = void 0 === ec || ec,
        ty = void 0 === ep || ep,
        tw = void 0 === ef ? ty : ef,
        tb = void 0 !== ev && ev
      el[0] !== ey ? ((t = void 0 === ey ? [] : ey), (el[0] = ey), (el[1] = t)) : (t = el[1])
      let tx = t,
        tM = void 0 === eC || eC,
        tA = void 0 !== eA && eA,
        tI = void 0 === eI || eI,
        tE = void 0 === eR || eR,
        tk = void 0 === e_ || e_,
        tX = void 0 !== e8 && e8,
        tW = void 0 !== te && te
      el[2] !== ta ? ((a = void 0 === ta ? [] : ta), (el[2] = ta), (el[3] = a)) : (a = el[3])
      let tY = a,
        tz = void 0 === ti || ti,
        tK = void 0 === ts || ts,
        t$ = void 0 !== td && td,
        tG = void 0 === tf ? null : tf,
        tQ = eb.visibleBounds.left + eb.visibleBounds.width,
        [tZ] = (0, g.useState)(ij),
        t0 = ek ?? eE.length,
        t2 = (0, y.A)(),
        [t3, t4] = (0, g.useState)(iq),
        { sourceReleasedFlightIds: t6, stackCoveredFlightIds: t7 } = t3
      ;(el[4] !== tY || el[5] !== t6 || el[6] !== t7
        ? ((o = tY.map(iF)),
          [...t6, ...t7].some((e) => !o.includes(e)) &&
            t4({
              sourceReleasedFlightIds: new Set([...t6].filter((e) => o.includes(e))),
              stackCoveredFlightIds: new Set([...t7].filter((e) => o.includes(e))),
            }),
          (el[4] = tY),
          (el[5] = t6),
          (el[6] = t7),
          (el[7] = o))
        : (o = el[7]),
        el[8] !== t7
          ? ((r = (e) => {
              let { coveredNotificationId: t, coveredNotificationWasVisible: a, notificationId: i } = e
              return null != t && a && !t7.has(i) ? [t] : []
            }),
            (el[8] = t7),
            (el[9] = r))
          : (r = el[9]))
      let t8 = tY.flatMap(r),
        t9 = tY.flatMap(iL),
        ae = tY.flatMap(iP),
        at = (0, tT.I)(),
        aa = !at && tv,
        al = tk && eb.quickChat?.stashedEdge == null
      el[10] !== eE[0] ? ((l = eG(eE[0])), (el[10] = eE[0]), (el[11] = l)) : (l = el[11])
      let ad = l,
        am = eb.quickChat?.stashedEdge != null
      el[12] !== eE ? ((s = new Set(eE.map(ah))), (el[12] = eE), (el[13] = s)) : (s = el[13])
      let ag = s
      el[14] !== ag || el[15] !== am
        ? ((c = () => ({ isStashed: am, notificationKeys: ag })), (el[14] = ag), (el[15] = am), (el[16] = c))
        : (c = el[16])
      let [ay, aC] = (0, g.useState)(c)
      if (el[17] !== ag || el[18] !== am || el[19] !== eE || el[20] !== ay) {
        let e = ay
        ;(e.isStashed !== am
          ? aC((e = { isStashed: am, notificationKeys: ag }))
          : am &&
            [...e.notificationKeys].some((e) => !ag.has(e)) &&
            aC((e = { ...e, notificationKeys: new Set([...e.notificationKeys].filter((e) => ag.has(e))) })),
          (u = eE.findIndex(
            (t) =>
              !e.notificationKeys.has(ah(t)) &&
              !t.isLoading &&
              ("warning" === t.level || "danger" === t.level || "success" === t.level),
          )),
          (el[17] = ag),
          (el[18] = am),
          (el[19] = eE),
          (el[20] = ay),
          (el[21] = u))
      } else u = el[21]
      let ab = u,
        aM = eE[ab]
      el[22] !== eu || el[23] !== t2 || el[24] !== aM || el[25] !== ab
        ? ((p = null == aM ? void 0 : (eu?.[ab] ?? tC({ intl: t2, notification: aM }))),
          (el[22] = eu),
          (el[23] = t2),
          (el[24] = aM),
          (el[25] = ab),
          (el[26] = p))
        : (p = el[26])
      let aA = p,
        aI = eG(aM),
        [aS, aO] = (0, g.useState)(null),
        [aT, aN] = (0, g.useState)(null),
        [aP, aL] = (0, g.useState)(0)
      ;(el[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (e) => {
            aO(e.point)
          }),
          (el[27] = f))
        : (f = el[27]),
        (0, K.JX)("avatar-overlay-computer-use-cursor-changed", f))
      let aF = eE.length > 0,
        aq = tg?.phase ?? "inactive",
        aj = tg?.errorMessage ?? null,
        aD = tg?.usesNativeStackPresentationTransition === !0,
        aU = tg?.isAudioReady === !0 || tg?.isTransferring === !0,
        aV = "inactive" !== aq,
        aH = tg?.isSessionActive ?? !1,
        aB = tg?.petOpenIntent
      el[28] !== aU || el[29] !== aV || el[30] !== aH || el[31] !== aB
        ? ((m = (function ({ isAudioReady: e, isPresentationActive: t, isSessionActive: a, petOpenIntent: i = !1 }) {
            return t ? (e ? "voice-orb" : "pet") : a && !i ? "hidden" : "pet"
          })({ isAudioReady: aU, isPresentationActive: aV, isSessionActive: aH, petOpenIntent: aB })),
          (el[28] = aU),
          (el[29] = aV),
          (el[30] = aH),
          (el[31] = aB),
          (el[32] = m))
        : (m = el[32])
      let aX = m,
        aW = tz && "quick-chat" === th,
        aY = tz && ((void 0 !== tr && tr) || aW),
        az = aY && !aW && (void 0 === to || to),
        aK = "quick-chat" === th && !tz && "inactive" === aq && null == aj,
        a$ = aY && "hidden" !== aX,
        aG = "pet" === aX || (az && "hidden" !== aX)
      el[33] !== e1 || el[34] !== tY
        ? ((h = () => {
            for (let e of tY) e1?.(e.notificationId)
          }),
          (el[33] = e1),
          (el[34] = tY),
          (el[35] = h))
        : (h = el[35])
      let aQ = (0, g.useEffectEvent)(h)
      ;(el[36] !== aQ || el[37] !== a$
        ? ((v = () => {
            a$ || aQ()
          }),
          (el[36] = aQ),
          (el[37] = a$),
          (el[38] = v))
        : (v = el[38]),
        el[39] !== a$ ? ((w = [a$]), (el[39] = a$), (el[40] = w)) : (w = el[40]),
        (0, g.useLayoutEffect)(v, w))
      let aZ = tl ?? tg?.arePetControlsExpanded ?? (null != aj || "pet" !== aX),
        aJ = tg?.petControlsAppearance ?? d.JCZ,
        a1 = az && !aZ && !tK,
        a0 = (0, tN.d)(+!a1)
      el[41] !== eb.mascot || el[42] !== aJ || el[43] !== aD
        ? ((C = (0, d.LHY)({
            mascot: eb.mascot,
            petControlsAppearance: aJ,
            usesNativeStackPresentationTransition: aD,
          })),
          (el[41] = eb.mascot),
          (el[42] = aJ),
          (el[43] = aD),
          (el[44] = C))
        : (C = el[44])
      let a2 = C,
        a3 = a2.scale
      el[45] !== aZ || el[46] !== aJ
        ? ((b = aZ ? aJ.hoverControlSize : (0, tJ.PO)(aJ)), (el[45] = aZ), (el[46] = aJ), (el[47] = b))
        : (b = el[47])
      let a4 = b,
        a5 = aZ ? aJ.hoverControlSize : aJ.compactControlHeight,
        a6 = aZ ? aJ.hoverControlSize / 2 : aJ.compactControlCornerRadius
      el[48] !== aZ ||
      el[49] !== tA ||
      el[50] !== eb.mascot ||
      el[51] !== a4 ||
      el[52] !== aJ.compactOffsetX ||
      el[53] !== aJ.compactOffsetY ||
      el[54] !== aJ.hoverControlGap ||
      el[55] !== aJ.hoverOffsetX ||
      el[56] !== aJ.hoverOffsetY
        ? ((x = tA
            ? (0, tJ.oO)({
                controlGap: aZ ? aJ.hoverControlGap : -a4,
                controlSize: a4,
                layout: aZ ? "arc" : "row",
                mascot: eb.mascot,
                offsetX: aZ ? aJ.hoverOffsetX : aJ.compactOffsetX,
                offsetY: aZ ? aJ.hoverOffsetY : aJ.compactOffsetY,
                showsNotificationBadge: !0,
                surfaceId: "mascot-badge",
              })
            : null),
          (el[48] = aZ),
          (el[49] = tA),
          (el[50] = eb.mascot),
          (el[51] = a4),
          (el[52] = aJ.compactOffsetX),
          (el[53] = aJ.compactOffsetY),
          (el[54] = aJ.hoverControlGap),
          (el[55] = aJ.hoverOffsetX),
          (el[56] = aJ.hoverOffsetY),
          (el[57] = x))
        : (x = el[57])
      let a7 = x,
        a8 = eb.mascot,
        a9 = { ...a8, left: a8.left + a2.offsetX, top: a8.top + a2.offsetY },
        it = (az && t$ && al ? aT : null) ?? eO?.caretPoint ?? aS,
        ia = tg?.caption ?? null,
        ii = eb.mascot.left + a2.offsetX
      el[58] !== eb.mascot || el[59] !== ii || el[60] !== a2.mascotRect.top
        ? ((M = { ...eb.mascot, left: ii, top: a2.mascotRect.top }),
          (el[58] = eb.mascot),
          (el[59] = ii),
          (el[60] = a2.mascotRect.top),
          (el[61] = M))
        : (M = el[61])
      let io = M,
        ir = !!e4?.length || null != e6 || (tX && void 0 !== e9),
        il = tW && tX && void 0 === e9,
        is = "inactive" !== aq && "starting" !== aq,
        ic = tt ?? "",
        iu = tK && !il
      el[62] !== aF ||
      el[63] !== az ||
      el[64] !== ir ||
      el[65] !== is ||
      el[66] !== eb ||
      el[67] !== tG ||
      el[68] !== t$ ||
      el[69] !== aP ||
      el[70] !== tc ||
      el[71] !== ic ||
      el[72] !== iu ||
      el[73] !== aY
        ? ((I = aY
            ? (0, iM.dh)({
                draft: ic,
                editorExtraHeight: aP,
                hasAppshots: ir,
                hasNotifications: aF,
                hasPetAccessory: az,
                isEditorActive: t$,
                compositionDeferral: tG,
                isExpanded: iu,
                isVoiceActive: is,
                layout: eb,
                stashAppearance: tc,
              })
            : null),
          (el[62] = aF),
          (el[63] = az),
          (el[64] = ir),
          (el[65] = is),
          (el[66] = eb),
          (el[67] = tG),
          (el[68] = t$),
          (el[69] = aP),
          (el[70] = tc),
          (el[71] = ic),
          (el[72] = iu),
          (el[73] = aY),
          (el[74] = I))
        : (I = el[74])
      let id = I,
        ip = (0, tN.d)(id?.target.composerHeight ?? d.Zam),
        im = (0, tN.d)(id?.target.composerTop ?? 0)
      el[75] !== az || el[76] !== im
        ? ((S = () => (az ? Math.min(0, im.get()) : 0)), (el[75] = az), (el[76] = im), (el[77] = S))
        : (S = el[77])
      let ih = (0, tP.G)(S),
        ig = id?.bar ?? null
      if (null != ig && null != id) {
        let e, t, a
        ;(el[78] !== aF || el[79] !== az || el[80] !== eb
          ? ((e = (0, aE.L)(eb, aF, az)), (el[78] = aF), (el[79] = az), (el[80] = eb), (el[81] = e))
          : (e = el[81]),
          (A = e))
        let i = ig.left + id.target.voiceLeft + id.target.voiceWidth / 2,
          n = az ? eb.mascot.top : ig.top,
          o = i - eb.mascot.width / 2
        ;(el[82] !== n || el[83] !== eb.placement || el[84] !== ig.height || el[85] !== ig.top
          ? ((t = eb.placement.startsWith("bottom") ? ig.top + ig.height : n),
            (el[82] = n),
            (el[83] = eb.placement),
            (el[84] = ig.height),
            (el[85] = ig.top),
            (el[86] = t))
          : (t = el[86]),
          el[87] !== eb.mascot || el[88] !== o || el[89] !== t
            ? ((a = { ...eb.mascot, left: o, top: t }), (el[87] = eb.mascot), (el[88] = o), (el[89] = t), (el[90] = a))
            : (a = el[90]),
          (io = a))
      }
      let iv = (0, tN.d)(null),
        iy = tg?.statusText ?? null,
        iw = (0, tJ.PE)({
          mascot: eb.mascot,
          petControlsAppearance: aJ,
          quickChatBar: a$ ? (0, d.MkO)(eb, az) : null,
          showsNotificationBadge: aF,
        }),
        iC = null != tg
      el[91] !== em || el[92] !== it || el[93] !== a8
        ? ((R = null == it || null == em ? null : (0, tO.P3)(a8, it, em.spriteVersionNumber)),
          (el[91] = em),
          (el[92] = it),
          (el[93] = a8),
          (el[94] = R))
        : (R = el[94])
      let ib = R,
        iI = ty && aF,
        iR = tw && aF,
        iE = t0 > 1 && tM,
        ik = t0 > 1 && !tM,
        iO = t0 <= 1 || (eS ?? iE),
        iN = aY && aF && eb.placement.startsWith("top") ? d.Zam + d.rqb : 0,
        iU = 0
      el[95] !== ed || el[96] !== iO || el[97] !== eE.length
        ? ((E =
            null == ed
              ? { backingLayoutHeight: 0, visibleLayoutHeight: 0 }
              : tS({ activityStackPresentation: ed, isExpanded: iO, notificationCount: eE.length })),
          (el[95] = ed),
          (el[96] = iO),
          (el[97] = eE.length),
          (el[98] = E))
        : (E = el[98])
      let iV = E,
        iH = Math.max(0, iV.backingLayoutHeight - iV.visibleLayoutHeight)
      ;(el[99] === Symbol.for("react.memo_cache_sentinel") ? ((k = []), (el[99] = k)) : (k = el[99]),
        el[100] !== iV || el[101] !== iH
          ? ((O = { ...iV, overhang: iH, rects: k }), (el[100] = iV), (el[101] = iH), (el[102] = O))
          : (O = el[102]))
      let iB = (0, tN.d)(O)
      el[103] !== eb.placement
        ? ((_ = eb.placement.startsWith("top")), (el[103] = eb.placement), (el[104] = _))
        : (_ = el[104])
      let iX = _,
        iW = ed?.items
      el[105] !== iX || el[106] !== iV.backingLayoutHeight || el[107] !== iW
        ? ((T = { backingHeight: iV.backingLayoutHeight, isAboveMascot: iX, items: iW, offset: 0 }),
          (el[105] = iX),
          (el[106] = iV.backingLayoutHeight),
          (el[107] = iW),
          (el[108] = T))
        : (T = el[108])
      let [iY, iz] = (0, g.useState)(T),
        iK = ed?.items
      if (
        !(
          iK?.length === iY.items?.length &&
          (iK?.every((e, t) => {
            let { itemId: a, itemHeight: i } = e
            return a === iY.items?.[t].itemId && i === iY.items?.[t].itemHeight
          }) ??
            !0)
        ) ||
        iY.isAboveMascot !== iX
      ) {
        let e,
          t =
            null != iK &&
            iK.length === iY.items?.length &&
            iK.every((e, t) => {
              let { itemId: a } = e
              return a === iY.items?.[t].itemId
            }),
          a = iV.backingLayoutHeight
        el[109] !== iB ? ((e = iB.get()), (el[109] = iB), (el[110] = e)) : (e = el[110])
        let i = e.backingLayoutHeight
        iz({
          backingHeight: a,
          isAboveMascot: iX,
          items: iK,
          offset:
            iY.offset -
            (t && iY.isAboveMascot ? a - iY.backingHeight : 0) +
            (iY.isAboveMascot !== iX ? (iY.isAboveMascot ? 1 : -1) * (a - i) : 0),
        })
      }
      let i$ = (0, tN.d)(0)
      ;(el[111] !== i$ || el[112] !== iX || el[113] !== iV.backingLayoutHeight
        ? ((N = (e) => {
            i$.set(iX ? iV.backingLayoutHeight - e.backingLayoutHeight : 0)
          }),
          (el[111] = i$),
          (el[112] = iX),
          (el[113] = iV.backingLayoutHeight),
          (el[114] = N))
        : (N = el[114]),
        (0, tL.L)(iB, "change", N),
        el[115] !== iX ||
        el[116] !== az ||
        el[117] !== eb.mascot.top ||
        el[118] !== aJ.compactControlHeight ||
        el[119] !== ih ||
        el[120] !== ig?.top ||
        el[121] !== ip ||
        el[122] !== im ||
        el[123] !== a0 ||
        el[124] !== iv
          ? ((P = function () {
              let e = iv.get(),
                t = im.get(),
                a = (t + ip.get()) * (0, iM.WD)(a0.get(), aJ.compactControlHeight, window.devicePixelRatio)
              return iX
                ? (e?.viewportRect.top ?? (az ? eb.mascot.top + ih.get() : (ig?.top ?? eb.mascot.top) + t))
                : null == e
                  ? (ig?.top ?? eb.mascot.top) + a
                  : e.viewportRect.top + e.viewportRect.height
            }),
            (el[115] = iX),
            (el[116] = az),
            (el[117] = eb.mascot.top),
            (el[118] = aJ.compactControlHeight),
            (el[119] = ih),
            (el[120] = ig?.top),
            (el[121] = ip),
            (el[122] = im),
            (el[123] = a0),
            (el[124] = iv),
            (el[125] = P))
          : (P = el[125]))
      let iG = P,
        iQ = (iX && az ? eb.mascot.top : (ig?.top ?? eb.mascot.top)) + (iX ? 0 : d.Zam),
        iZ = 0
      ;(aY &&
        aF &&
        null != eb.tray &&
        null != ig &&
        (iZ = iX ? iQ - d.rqb - (eb.tray.top + eb.tray.height - iN) : iQ + d.rqb - eb.tray.top),
        el[126] !== iQ ||
        el[127] !== i$ ||
        el[128] !== iX ||
        el[129] !== iG ||
        el[130] !== aF ||
        el[131] !== eb.tray ||
        el[132] !== ig ||
        el[133] !== aY
          ? ((L = () => (aY && aF && null != eb.tray && null != ig ? iG() - iQ + (iX ? i$.get() : 0) : i$.get())),
            (el[126] = iQ),
            (el[127] = i$),
            (el[128] = iX),
            (el[129] = iG),
            (el[130] = aF),
            (el[131] = eb.tray),
            (el[132] = ig),
            (el[133] = aY),
            (el[134] = L))
          : (L = el[134]))
      let iJ = (0, tP.G)(L)
      if (eb.placement.startsWith("top") && null != ed && aF) {
        let { backingLayoutHeight: e, visibleLayoutHeight: t } = iV
        iU = t - e
      }
      el[135] !== iN || el[136] !== aF
        ? ((F = { hasNotifications: aF, offset: iN, translation: 0 }), (el[135] = iN), (el[136] = aF), (el[137] = F))
        : (F = el[137])
      let [i1, i0] = (0, g.useState)(F)
      ;(aF !== i1.hasNotifications || iN !== i1.offset) &&
        i0({
          hasNotifications: aF,
          offset: iN,
          translation: i1.translation + (aF !== i1.hasNotifications ? iN - i1.offset : 0),
        })
      let i2 = (eb.tray?.left ?? eb.mascot.left) - eb.mascot.left,
        i3 =
          null == eb.tray
            ? -i1.translation
            : eb.tray.top +
              (iX && null != ed && aF ? eb.tray.height - iV.backingLayoutHeight : iN + iU) -
              eb.mascot.top -
              i1.translation -
              iY.offset +
              iZ
      el[138] !== i2 || el[139] !== i3
        ? ((q = { x: i2, y: i3 }), (el[138] = i2), (el[139] = i3), (el[140] = q))
        : (q = el[140])
      let i4 = q,
        i5 = (0, tN.d)(i4.x),
        i6 = (0, tN.d)(i4.y)
      el[141] !== i4.x || el[142] !== i4.y || el[143] !== i5 || el[144] !== i6
        ? ((j = () => {
            ;(i5.jump(i4.x), i6.jump(i4.y))
          }),
          (el[141] = i4.x),
          (el[142] = i4.y),
          (el[143] = i5),
          (el[144] = i6),
          (el[145] = j))
        : (j = el[145])
      let i7 = (0, g.useEffectEvent)(j)
      ;(el[146] !== tv || el[147] !== i7
        ? ((D = () => {
            tv || i7()
          }),
          (el[146] = tv),
          (el[147] = i7),
          (el[148] = D))
        : (D = el[148]),
        el[149] !== i4.x || el[150] !== i4.y || el[151] !== tv
          ? ((U = [tv, i4.x, i4.y]), (el[149] = i4.x), (el[150] = i4.y), (el[151] = tv), (el[152] = U))
          : (U = el[152]),
        (0, g.useLayoutEffect)(D, U),
        el[153] !== iU ||
        el[154] !== iY.offset ||
        el[155] !== iX ||
        el[156] !== iN ||
        el[157] !== iJ ||
        el[158] !== iB ||
        el[159] !== i6 ||
        el[160] !== i1.translation ||
        el[161] !== iR ||
        el[162] !== az ||
        el[163] !== eb ||
        el[164] !== ih ||
        el[165] !== ig ||
        el[166] !== ip ||
        el[167] !== im ||
        el[168] !== a$
          ? ((V = () => {
              if (!a$ || null == ig) return null
              let e = (0, d.MkO)(eb, az),
                t = ig.top + im.get(),
                a = az ? Math.min(eb.mascot.top + ih.get(), t) : t,
                i = Math.max(e.top + e.height, t + ip.get())
              if (iR && null != eb.tray) {
                let e = eb.mascot.top + i1.translation + i6.get() - iN - iU + iY.offset + iJ.get(),
                  { visibleLayoutHeight: t, overhang: n } = iB.get()
                ;((a = Math.min(a, e - (iX ? n : 0))), (i = Math.max(i, e + t + (iX ? 0 : n))))
              }
              return { ...e, top: a, height: i - a }
            }),
            (el[153] = iU),
            (el[154] = iY.offset),
            (el[155] = iX),
            (el[156] = iN),
            (el[157] = iJ),
            (el[158] = iB),
            (el[159] = i6),
            (el[160] = i1.translation),
            (el[161] = iR),
            (el[162] = az),
            (el[163] = eb),
            (el[164] = ih),
            (el[165] = ig),
            (el[166] = ip),
            (el[167] = im),
            (el[168] = a$),
            (el[169] = V))
          : (V = el[169]))
      let i8 = (0, tP.G)(V),
        i9 = null == eb.tray ? void 0 : Math.max(0, eb.tray.height)
      if (tE && iI && null != eL) {
        let e, t, a, n
        ;(el[170] !== t2 || el[171] !== iE
          ? ((e = iE
              ? t2.formatMessage({
                  id: "avatarOverlay.collapseNotificationStack",
                  defaultMessage: "Collapse activity stack",
                })
              : t2.formatMessage({ id: "avatarOverlay.hideActivity", defaultMessage: "Hide activity" })),
            (el[170] = t2),
            (el[171] = iE),
            (el[172] = e))
          : (e = el[172]),
          el[173] !== eb.placement
            ? ((t = (0, t_.A)("icon-sm", eb.placement.startsWith("bottom") && "rotate-180")),
              (el[173] = eb.placement),
              (el[174] = t))
            : (t = el[174]),
          el[175] !== t ? ((a = (0, i.jsx)(tB.A, { className: t })), (el[175] = t), (el[176] = a)) : (a = el[176]),
          el[177] !== eL || el[178] !== e || el[179] !== a
            ? ((n = {
                ariaLabel: e,
                backgroundColor: "transparent",
                content: a,
                foregroundColor: "currentColor",
                isGlassy: !0,
                isIconOnly: !0,
                onClick: eL,
              }),
              (el[177] = eL),
              (el[178] = e),
              (el[179] = a),
              (el[180] = n))
            : (n = el[180]),
          (H = n))
      } else if (tE && null != e3 && aF && !ty) {
        let e, t, a
        el[181] !== t2 || el[182] !== eE.length
          ? ((e = t2.formatMessage(
              {
                id: "avatarOverlay.showActivity",
                defaultMessage: "Show activity, {count, plural, one {# item} other {# items}}",
              },
              { count: eE.length },
            )),
            (el[181] = t2),
            (el[182] = eE.length),
            (el[183] = e))
          : (e = el[183])
        let i = ad.badgeBackgroundColor,
          n = eE.length,
          o = ad.badgeForegroundColor
        ;(el[184] !== eE ? ((t = (0, d.F0r)(!0, eE)), (el[184] = eE), (el[185] = t)) : (t = el[185]),
          el[186] !== eE.length ||
          el[187] !== e3 ||
          el[188] !== ad.badgeBackgroundColor ||
          el[189] !== ad.badgeForegroundColor ||
          el[190] !== e ||
          el[191] !== t
            ? ((a = {
                ariaLabel: e,
                backgroundColor: i,
                content: n,
                foregroundColor: o,
                isGlassy: !0,
                nativeTint: t,
                onClick: e3,
              }),
              (el[186] = eE.length),
              (el[187] = e3),
              (el[188] = ad.badgeBackgroundColor),
              (el[189] = ad.badgeForegroundColor),
              (el[190] = e),
              (el[191] = t),
              (el[192] = a))
            : (a = el[192]),
          (H = a))
      }
      el[193] !== em ||
      el[194] !== t2 ||
      el[195] !== aW ||
      el[196] !== ib ||
      el[197] !== ex ||
      el[198] !== H ||
      el[199] !== eg ||
      el[200] !== ad ||
      el[201] !== a8.height ||
      el[202] !== a8.width ||
      el[203] !== iC ||
      el[204] !== aY
        ? ((B =
            null == em || aW
              ? null
              : (0, i.jsx)(tU.r, {
                  ariaLabel: t2.formatMessage(iT.mascotLabel, { petName: em.displayName }),
                  animationPaused: eg,
                  lookFrame: ib,
                  notificationBadge: aY || iC ? void 0 : H,
                  source: (0, tV.aN)(em),
                  state: ad.mascotState,
                  style: { ...(0, tR.cv)(a8.width), height: a8.height },
                  transientState: ex,
                })),
          (el[193] = em),
          (el[194] = t2),
          (el[195] = aW),
          (el[196] = ib),
          (el[197] = ex),
          (el[198] = H),
          (el[199] = eg),
          (el[200] = ad),
          (el[201] = a8.height),
          (el[202] = a8.width),
          (el[203] = iC),
          (el[204] = aY),
          (el[205] = B))
        : (B = el[205])
      let ne = B,
        nt = null
      if (null != aj && null != tg) {
        let e
        ;(el[206] !== t2 || el[207] !== aj
          ? ((e = (0, ar.y)(t2, aj)), (el[206] = t2), (el[207] = aj), (el[208] = e))
          : (e = el[208]),
          (nt = (0, i.jsx)(ai, {
            className: "absolute z-30 -translate-x-1/2",
            screenEdgeFallback: {
              belowAnchorTop: iw.top,
              mascotTop: eb.mascot.top,
              occupiedBounds: i8,
              visibleBounds: eb.visibleBounds,
            },
            style: {
              left: iw.left,
              maxWidth: (0, tJ.Q3)({ anchor: iw, visibleBounds: eb.quickChat?.workArea ?? eb.visibleBounds }),
              top: iw.top,
            },
            text: e,
            tone: "danger",
          })))
      } else if (!aY && "voice-orb" === aX && null != tg) {
        let e,
          t = null == iy && "invisible"
        ;(el[209] !== t
          ? ((e = (0, t_.A)("pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2", t)),
            (el[209] = t),
            (el[210] = e))
          : (e = el[210]),
          (nt = (0, i.jsx)("div", {
            "aria-hidden": null == iy,
            className: e,
            style: (0, tJ.J1)({ mascot: a9, orbScale: a3 }),
            children: (0, i.jsx)(ai, {
              style: {
                maxWidth: (0, tJ.kn)({ mascot: a9, visibleBounds: eb.quickChat?.workArea ?? eb.visibleBounds }),
              },
              text: iy ?? "\xa0",
            }),
          })))
      }
      el[211] !== aZ ||
      el[212] !== al ||
      el[213] !== em ||
      el[214] !== ne ||
      el[215] !== eh ||
      el[216] !== tI ||
      el[217] !== aW ||
      el[218] !== eb ||
      el[219] !== eM ||
      el[220] !== H ||
      el[221] !== e2 ||
      el[222] !== eF ||
      el[223] !== eq ||
      el[224] !== ej ||
      el[225] !== eD ||
      el[226] !== eU ||
      el[227] !== eV ||
      el[228] !== a6 ||
      el[229] !== a5 ||
      el[230] !== a4 ||
      el[231] !== aJ ||
      el[232] !== ih ||
      el[233] !== iv ||
      el[234] !== aX ||
      el[235] !== a7 ||
      el[236] !== aq ||
      el[237] !== aj ||
      el[238] !== tg?.activity ||
      el[239] !== tg?.canStart ||
      el[240] !== tg?.handoff ||
      el[241] !== tg?.microphoneMuted ||
      el[242] !== tg?.muted ||
      el[243] !== tg?.onStart ||
      el[244] !== tg?.onStop ||
      el[245] !== tg?.onToggleMicrophoneMute ||
      el[246] !== tg?.onToggleMute ||
      el[247] !== tg?.presentationAnchorRef ||
      el[248] !== tg?.usesPresentationFadeTransition ||
      el[249] !== a8.height ||
      el[250] !== a8.left ||
      el[251] !== a8.top ||
      el[252] !== a8.width ||
      el[253] !== iC ||
      el[254] !== aG ||
      el[255] !== aF ||
      el[256] !== aD ||
      el[257] !== aY ||
      el[258] !== a2.offsetX ||
      el[259] !== a2.offsetY ||
      el[260] !== a3
        ? ((X =
            aW || null == em
              ? null
              : (0, i.jsxs)(tF.P.div, {
                  className: (0, t_.A)(
                    "group absolute cursor-grab active:cursor-grabbing",
                    "hidden" === aX && "pointer-events-none",
                  ),
                  style: { height: a8.height, left: a8.left, top: a8.top, width: a8.width, y: ih },
                  onLostPointerCapture: eF,
                  onPointerCancel: eq,
                  onPointerDown: ej,
                  onPointerMove: eD,
                  onPointerUp: eU,
                  children: [
                    (0, i.jsx)("div", {
                      "aria-hidden": "true",
                      className: "codex-avatar-button pointer-events-none invisible absolute top-0 left-0",
                      "data-avatar-overlay-size": "mascot",
                      inert: !0,
                      style: eM,
                    }),
                    (0, i.jsx)(tH.t, {
                      items: eh,
                      children: (0, i.jsx)("div", {
                        "data-avatar-overlay-hit-region": "hidden" === aX ? void 0 : "mascot",
                        className: "h-full w-full",
                        onPointerEnter: () => {
                          eV?.(!0)
                        },
                        onPointerLeave: () => {
                          eV?.(!1)
                        },
                        children: (0, i.jsxs)(ao.P, {
                          className: "relative size-full",
                          handoff: tg?.handoff ?? null,
                          surface: "global-overlay",
                          usesFadeTransition: tg?.usesPresentationFadeTransition ?? !1,
                          children: [
                            (0, i.jsx)(tq.x, {
                              reducedMotion: "never",
                              children: (0, i.jsxs)(i.Fragment, {
                                children: [
                                  aY || ("voice-orb" !== aX && tg?.canStart !== !0)
                                    ? null
                                    : (0, i.jsx)(
                                        ak,
                                        {
                                          geometry: iv,
                                          layout: eb,
                                          children: (0, i.jsx)(tF.P.div, {
                                            animate:
                                              "voice-orb" === aX
                                                ? { opacity: 1, scale: a3, x: a2.offsetX, y: a2.offsetY }
                                                : { opacity: 0, scale: 0.45 * a3, x: a2.offsetX, y: a2.offsetY },
                                            className: "absolute inset-0",
                                            initial: !1,
                                            transition: i_,
                                            children: (0, i.jsx)(an.P, {
                                              glowEnabled: tI,
                                              placement: "center",
                                              presentationAnchorRef: tg?.presentationAnchorRef,
                                              phase: aq,
                                              voiceActivity: tg?.activity ?? "idle",
                                            }),
                                          }),
                                        },
                                        "voice-orb",
                                      ),
                                  null != ne && (aG || (aD && "voice-orb" === aX))
                                    ? (0, i.jsx)(
                                        tF.P.div,
                                        {
                                          "aria-hidden": !aG || void 0,
                                          animate: aG ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.62 },
                                          className: (0, t_.A)("absolute inset-0", !aG && "pointer-events-none"),
                                          inert: !aG,
                                          initial: !1,
                                          transition: tD.iN,
                                          children: ne,
                                        },
                                        "pet",
                                      )
                                    : null,
                                ],
                              }),
                            }),
                            aY
                              ? null
                              : (0, i.jsx)(tF.P.div, {
                                  animate: {
                                    "--pet-glass-spacing": aZ
                                      ? [`${aJ.expandingGlassSpacing}px`, `${aJ.hoverGlassSpacing}px`]
                                      : `${aJ.compactGlassSpacing}px`,
                                  },
                                  "aria-hidden": !al || void 0,
                                  className: (0, t_.A)("petControls-iAgTUj", !al && "invisible"),
                                  initial: !1,
                                  inert: !al,
                                  transition: { duration: aJ.glassMergeDurationMs / 1e3, ease: [0.6, 0, 1, 1] },
                                  children: (0, i.jsx)(tq.x, {
                                    reducedMotion: "never",
                                    children: (0, i.jsx)(t5, {
                                      arePetControlsExpanded: aZ,
                                      areControlsVisible: "pet" === aX || "voice-orb" === aX,
                                      areVoiceActionsHidden: "hidden" === aX,
                                      canStart: tg?.canStart ?? !1,
                                      errorMessage: aj,
                                      isRealtimeVoiceSurfaceVisible: "voice-orb" === aX,
                                      isMicrophoneMuted: tg?.microphoneMuted ?? !1,
                                      isMuted: tg?.muted ?? !1,
                                      onAnimationFrame: e2,
                                      phase: aq,
                                      placement: eb.placement,
                                      mascot: eb.mascot,
                                      petControlsAppearance: aJ,
                                      showsNotificationBadge: aF,
                                      onStart: tg?.onStart,
                                      onStop: tg?.onStop,
                                      onToggleMicrophoneMute: tg?.onToggleMicrophoneMute,
                                      onToggleMute: tg?.onToggleMute,
                                      children: (0, i.jsx)(tj.N, {
                                        initial: !1,
                                        children:
                                          iC && null != H
                                            ? (0, i.jsx)(
                                                tU.h,
                                                {
                                                  animatesExit: !0,
                                                  ignoresReducedMotion: !0,
                                                  isContentVisible: aZ,
                                                  notificationBadge: H,
                                                  nativeCornerRadius: a6,
                                                  onAnimationFrame: e2,
                                                  contentVisibilityAnimation: {
                                                    hiddenBlurRadiusPx: aJ.contentHiddenBlurRadiusPx,
                                                    hiddenScale: aJ.contentHiddenScale,
                                                    revealTransition: tD.z1,
                                                  },
                                                  presentationPosition:
                                                    null == a7
                                                      ? void 0
                                                      : {
                                                          height: a5,
                                                          left: `calc(50% + ${a7.x - a4 / 2}px)`,
                                                          top: `calc(100% + ${a7.y - a8.height}px)`,
                                                          width: a4,
                                                        },
                                                },
                                                "mascot-badge",
                                              )
                                            : null,
                                      }),
                                    }),
                                  }),
                                }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })),
          (el[211] = aZ),
          (el[212] = al),
          (el[213] = em),
          (el[214] = ne),
          (el[215] = eh),
          (el[216] = tI),
          (el[217] = aW),
          (el[218] = eb),
          (el[219] = eM),
          (el[220] = H),
          (el[221] = e2),
          (el[222] = eF),
          (el[223] = eq),
          (el[224] = ej),
          (el[225] = eD),
          (el[226] = eU),
          (el[227] = eV),
          (el[228] = a6),
          (el[229] = a5),
          (el[230] = a4),
          (el[231] = aJ),
          (el[232] = ih),
          (el[233] = iv),
          (el[234] = aX),
          (el[235] = a7),
          (el[236] = aq),
          (el[237] = aj),
          (el[238] = tg?.activity),
          (el[239] = tg?.canStart),
          (el[240] = tg?.handoff),
          (el[241] = tg?.microphoneMuted),
          (el[242] = tg?.muted),
          (el[243] = tg?.onStart),
          (el[244] = tg?.onStop),
          (el[245] = tg?.onToggleMicrophoneMute),
          (el[246] = tg?.onToggleMute),
          (el[247] = tg?.presentationAnchorRef),
          (el[248] = tg?.usesPresentationFadeTransition),
          (el[249] = a8.height),
          (el[250] = a8.left),
          (el[251] = a8.top),
          (el[252] = a8.width),
          (el[253] = iC),
          (el[254] = aG),
          (el[255] = aF),
          (el[256] = aD),
          (el[257] = aY),
          (el[258] = a2.offsetX),
          (el[259] = a2.offsetY),
          (el[260] = a3),
          (el[261] = X))
        : (X = el[261])
      let na = X,
        ni = aK || void 0,
        nn = aK && "invisible",
        no = tb && "-outline-offset-2 outline-2 outline-[#ff0000]"
      el[262] !== nn || el[263] !== no
        ? ((W = (0, t_.A)("relative h-screen w-screen bg-transparent", "overflow-hidden", nn, no)),
          (el[262] = nn),
          (el[263] = no),
          (el[264] = W))
        : (W = el[264])
      let nr = tb || void 0
      el[265] !== es || el[266] !== tZ
        ? ((Y = (0, i.jsx)(iS, { host: es, input: tZ })), (el[265] = es), (el[266] = tZ), (el[267] = Y))
        : (Y = el[267])
      let nl = a$
        ? (0, i.jsx)(tH.t, {
            items: eh,
            children: (0, i.jsxs)("div", {
              className: "contents",
              children: [
                az
                  ? null
                  : (0, i.jsx)("div", {
                      "aria-hidden": "true",
                      className: "codex-avatar-button pointer-events-none invisible absolute h-10",
                      "data-avatar-overlay-size": "mascot",
                      inert: !0,
                      style: { ...eM, left: eb.mascot.left, top: eb.mascot.top },
                    }),
                (0, i.jsx)(iA.l, {
                  animatesPresentation: tv,
                  appshots: e4,
                  getAttachmentActions: e5,
                  fileAttachments: e6,
                  areActivityPillsVisible: ty,
                  areControlsVisible: tk,
                  canStash: void 0 !== tn && tn,
                  canStartVoice: tg?.canStart ?? !1,
                  draft: tt ?? "",
                  threadTarget: e7,
                  hasNotifications: aF,
                  isExpanded: tK,
                  isAppshotCapturePending: tX,
                  appshotCaptureResponse: e9,
                  appshotCaptureStartsCollapsed: tW,
                  isSending: tY.some((e) => !t6.has(e.notificationId)),
                  isEditorActive: t$,
                  focusRequested: void 0 !== tp && tp,
                  compositionDeferral: tG,
                  isMinimized: a1,
                  isVoiceSelected: void 0 !== tm && tm,
                  layout: eb,
                  stashAppearance: tc,
                  notificationBadge: H,
                  petAccessory: az ? na : void 0,
                  realtimeVoiceSurface: tg,
                  stashedAttentionPill:
                    null == aM || null == aA || eb.quickChat?.stashedEdge == null
                      ? null
                      : (0, i.jsx)(
                          aR,
                          {
                            animation: tu,
                            compactContent: (0, i.jsx)("span", {
                              "aria-label": aA.statusIconAriaLabel ?? t2.formatMessage(aI.labelMessage),
                              className: "flex size-full items-center justify-center",
                              role: "img",
                              children: (function (e, t) {
                                if (t) return (0, i.jsx)(t1.I, { asset: ap, className: "relative text-warning" })
                                switch (e.iconType) {
                                  case "clock":
                                    return (0, i.jsx)(t1.I, { asset: ac, className: "relative text-warning" })
                                  case "warning":
                                    return (0, i.jsx)(t1.I, { asset: au, className: "relative text-danger" })
                                  case "check-circle":
                                    return (0, i.jsx)("span", {
                                      className:
                                        "flex size-8 items-center justify-center rounded-full bg-[light-dark(var(--green-50),var(--green-900))] text-[color:light-dark(var(--green-400),var(--green-300))]",
                                      children: (0, i.jsx)(t1.I, { asset: as.n }),
                                    })
                                  case "spinner":
                                    return af(e)
                                }
                              })(aI, aM.waitingRequest?.kind === "question"),
                            }),
                            expandsUpward: eb.placement.startsWith("top"),
                            isReplyOpen: eO?.notificationId === aM.id && eO.turnKey === aM.turnKey,
                            expandedWidth: ed?.viewportRect.width ?? d.pFD,
                            nativeSurfaceId: `activity-stashed-attention-${aM.id}`,
                            overflowContent:
                              null == eB
                                ? null
                                : (0, i.jsx)(av, {
                                    ariaLabel: aA.dismissNotificationAriaLabel,
                                    onClick: () => {
                                      eB(aM)
                                    },
                                  }),
                            tabEdge: eb.quickChat.stashedEdge,
                            children: (0, i.jsx)(ie, {
                              activitySwipeInput: tZ,
                              swipeVisibleRight: tQ,
                              animatesCssEntry: !1,
                              canExpandActivityStack: !1,
                              copy: aA,
                              isExpanded: !1,
                              isNotificationStackCollapsed: !1,
                              isStackedBehindPrimary: !1,
                              nativeSurfaceId: `activity-stashed-attention-expanded-${aM.id}`,
                              notification: aM,
                              notificationFollowUp: eO,
                              publishesLayoutMeasurement: !1,
                              publishesFollowUpVisibility: !1,
                              prominence: "primary",
                              rendersMaterial: !1,
                              sideSpacingPx: ed?.sideSpacingPx,
                              onActivateNotification: eP,
                              onOpenNotificationActions: eX,
                              onRunNotificationAction: eY,
                              onRunNotificationControl: eW,
                              onSubmitQuestionOption: ez,
                            }),
                          },
                          ah(aM),
                        ),
                  onCaretPointChange: az ? aN : void 0,
                  onDragPointerCancel: eq,
                  onDragPointerDown: ej,
                  onDragPointerMove: eD,
                  onDragPointerUp: eU,
                  onDraftChange: eQ,
                  onEditorExtraHeightChange: aL,
                  onFocusChange: eK,
                  onGeometryAnimationFrame: e2,
                  onLostDragPointerCapture: eF,
                  onOpen: e$,
                  onRemoveAppshots: eZ,
                  onStartVoice: tg?.onStart,
                  onSubmit: e0,
                  onToggleActivity: ty ? eL : e3,
                  onVoiceSelectionChange: eJ,
                  presentedComposerHeight: ip,
                  presentedComposerTop: im,
                  presentedExpansion: a0,
                  children:
                    null != e1 && ty
                      ? tY.map((e) => {
                          let t = eE.findIndex((t) => {
                              let { id: a } = t
                              return a === e.notificationId
                            }),
                            a = eE[t]
                          return null == a
                            ? null
                            : (0, i.jsx)(
                                ax,
                                {
                                  flight: e,
                                  onStackCovered: (e) => {
                                    t4((t) => ({
                                      ...t,
                                      stackCoveredFlightIds: new Set(t.stackCoveredFlightIds).add(e),
                                    }))
                                  },
                                  onComplete: e1,
                                  onSourceReleased: (e) => {
                                    t4((t) => ({
                                      ...t,
                                      sourceReleasedFlightIds: new Set(t.sourceReleasedFlightIds).add(e),
                                    }))
                                  },
                                  onGeometryAnimationFrame: e2,
                                  children: (n) => {
                                    let {
                                      height: o,
                                      contentX: r,
                                      contentY: l,
                                      subtitleOpacity: s,
                                      titleFontWeight: c,
                                      appshots: u,
                                    } = n
                                    return (0, i.jsx)(ie, {
                                      activitySwipeInput: tZ,
                                      swipeVisibleRight: tQ,
                                      animatesCssEntry: !1,
                                      canExpandActivityStack: !1,
                                      presentedHeight: o,
                                      contentX: r,
                                      contentY: l,
                                      subtitleOpacity: s,
                                      titleFontWeight: c,
                                      attachmentContent: u,
                                      copy: eu?.[t],
                                      retainsForeground: t8.includes(e.notificationId),
                                      isForegroundCoveredByFlight: t9.includes(e.notificationId),
                                      hidesMaterialForHiddenStart: ae.includes(e.notificationId),
                                      isExpanded: !1,
                                      isNotificationStackCollapsed: !1,
                                      isStackedBehindPrimary: t > 0 && !iE,
                                      nativeSurfaceId: `activity-quick-chat-flight-${e.notificationId}`,
                                      notification: a,
                                      publishesLayoutMeasurement: !1,
                                      publishesFollowUpVisibility: !1,
                                      prominence: "primary",
                                      sideSpacingPx: ed?.sideSpacingPx,
                                    })
                                  },
                                },
                                e.notificationId,
                              )
                        })
                      : null,
                }),
              ],
            }),
          })
        : null
      el[268] !== al ||
      el[269] !== iR ||
      el[270] !== eb ||
      el[271] !== at ||
      el[272] !== A ||
      el[273] !== iv ||
      el[274] !== io ||
      el[275] !== ia ||
      el[276] !== iy ||
      el[277] !== aY
        ? ((z =
            null != ia || (aY && null != iy)
              ? (0, i.jsx)("div", {
                  "aria-hidden": !al || void 0,
                  className: al ? void 0 : "invisible",
                  inert: !al,
                  children: (0, i.jsx)(a_, {
                    anchorRect: aY && iR ? (eb.tray ?? A) : A,
                    hasActivityPills: iR,
                    layout: { ...eb, mascot: io },
                    presentedGeometry: iv,
                    prefersReducedMotion: !!at,
                    presentation: aY ? "quick-chat" : "voice-orb",
                    statusText: aY ? iy : null,
                    text: ia ?? "",
                  }),
                })
              : null),
          (el[268] = al),
          (el[269] = iR),
          (el[270] = eb),
          (el[271] = at),
          (el[272] = A),
          (el[273] = iv),
          (el[274] = io),
          (el[275] = ia),
          (el[276] = iy),
          (el[277] = aY),
          (el[278] = z))
        : (z = el[278])
      let ns = !al || void 0,
        nc = !al && "invisible",
        nu = iI ? "cursor-interaction" : "pointer-events-none"
      el[279] !== nc || el[280] !== nu
        ? (($ = (0, t_.A)("absolute text-sm text-default", nc, nu)), (el[279] = nc), (el[280] = nu), (el[281] = $))
        : ($ = el[281])
      let nd = !al,
        np = eb.tray?.height,
        nf = eb.mascot.top + i1.translation,
        nm = null == eb.tray ? "hidden" : void 0,
        nh = eb.tray?.width
      ;(el[282] !== i5 ||
      el[283] !== i6 ||
      el[284] !== eb.mascot.left ||
      el[285] !== np ||
      el[286] !== nf ||
      el[287] !== nm ||
      el[288] !== nh
        ? ((G = { height: np, left: eb.mascot.left, top: nf, visibility: nm, width: nh, x: i5, y: i6 }),
          (el[282] = i5),
          (el[283] = i6),
          (el[284] = eb.mascot.left),
          (el[285] = np),
          (el[286] = nf),
          (el[287] = nm),
          (el[288] = nh),
          (el[289] = G))
        : (G = el[289]),
        el[290] !== aa
          ? ((Q = aa
              ? { damping: d.IYj.damping, mass: d.IYj.mass, stiffness: d.IYj.stiffness, type: "spring" }
              : { duration: 0 }),
            (el[290] = aa),
            (el[291] = Q))
          : (Q = el[291]))
      let ng = iE && null == ed && "overflow-y-clip"
      el[292] !== ng ? ((Z = (0, t_.A)("relative w-max", aw, ng)), (el[292] = ng), (el[293] = Z)) : (Z = el[293])
      let nv = iI && al ? "notification-tray" : void 0,
        ny = -iN - iU + iY.offset
      ;(el[294] !== iJ || el[295] !== ny || el[296] !== i9
        ? ((J = { maxHeight: i9, top: ny, y: iJ }), (el[294] = iJ), (el[295] = ny), (el[296] = i9), (el[297] = J))
        : (J = el[297]),
        el[298] === Symbol.for("react.memo_cache_sentinel")
          ? ((ee = (0, i.jsx)("div", {
              className: "h-0 overflow-hidden",
              "data-avatar-overlay-size": "notification-tray-header",
            })),
            (el[298] = ee))
          : (ee = el[298]))
      let nw = null != eb.tray
      el[299] !== eb.placement
        ? ((et = eb.placement.startsWith("top")), (el[299] = eb.placement), (el[300] = et))
        : (et = el[300])
      let nC = 1 === t0 || tM ? eB : void 0
      ;(el[301] !== eu ||
      el[302] !== iB ||
      el[303] !== ed ||
      el[304] !== tZ ||
      el[305] !== aa ||
      el[306] !== ty ||
      el[307] !== t9 ||
      el[308] !== tx ||
      el[309] !== ae ||
      el[310] !== ik ||
      el[311] !== iO ||
      el[312] !== iE ||
      el[313] !== eO ||
      el[314] !== eE ||
      el[315] !== eP ||
      el[316] !== eN ||
      el[317] !== eT ||
      el[318] !== e2 ||
      el[319] !== eH ||
      el[320] !== eX ||
      el[321] !== eY ||
      el[322] !== eW ||
      el[323] !== ez ||
      el[324] !== o ||
      el[325] !== t8 ||
      el[326] !== tQ ||
      el[327] !== et ||
      el[328] !== nC ||
      el[329] !== nw ||
      el[330] !== i9
        ? ((ea = (0, i.jsx)(ix, {
            animatesActivityLayout: aa,
            activitySwipeInput: tZ,
            swipeVisibleRight: tQ,
            activityCopies: eu,
            activityStackPresentation: ed,
            presentedGeometry: iB,
            retainedForegroundNotificationIds: t8,
            coveredForegroundNotificationIds: t9,
            hiddenStartCoveredNotificationIds: ae,
            enteringNotificationIds: o,
            areActivityPillsLaidOut: nw,
            areActivityPillsVisible: ty,
            isNotificationStackCollapsed: ik,
            isNotificationTrayExpanded: iO,
            isNotificationTrayVisiblyExpanded: iE,
            isTrayAboveMascot: et,
            notifications: eE,
            notificationFollowUp: eO,
            expandedNotificationIds: tx,
            onActivityStackScroll: eT,
            onActivityPillsHidden: eN,
            onActivateNotification: eP,
            trayMaxHeight: i9,
            onDismissNotification: nC,
            onOpenNotificationActions: eX,
            onNotificationExpansionChange: eH,
            onRunNotificationControl: eW,
            onRunNotificationAction: eY,
            onSubmitQuestionOption: ez,
            onGeometryAnimationFrame: e2,
          })),
          (el[301] = eu),
          (el[302] = iB),
          (el[303] = ed),
          (el[304] = tZ),
          (el[305] = aa),
          (el[306] = ty),
          (el[307] = t9),
          (el[308] = tx),
          (el[309] = ae),
          (el[310] = ik),
          (el[311] = iO),
          (el[312] = iE),
          (el[313] = eO),
          (el[314] = eE),
          (el[315] = eP),
          (el[316] = eN),
          (el[317] = eT),
          (el[318] = e2),
          (el[319] = eH),
          (el[320] = eX),
          (el[321] = eY),
          (el[322] = eW),
          (el[323] = ez),
          (el[324] = o),
          (el[325] = t8),
          (el[326] = tQ),
          (el[327] = et),
          (el[328] = nC),
          (el[329] = nw),
          (el[330] = i9),
          (el[331] = ea))
        : (ea = el[331]),
        el[332] !== ea || el[333] !== Z || el[334] !== nv || el[335] !== J
          ? ((ei = (0, i.jsxs)(tF.P.div, {
              className: Z,
              "data-avatar-overlay-hit-region": nv,
              "data-avatar-overlay-size": "notification-tray",
              style: J,
              children: [ee, ea],
            })),
            (el[332] = ea),
            (el[333] = Z),
            (el[334] = nv),
            (el[335] = J),
            (el[336] = ei))
          : (ei = el[336]),
        el[337] !== i4 ||
        el[338] !== e2 ||
        el[339] !== ei ||
        el[340] !== ns ||
        el[341] !== $ ||
        el[342] !== nd ||
        el[343] !== G ||
        el[344] !== Q
          ? ((en = (0, i.jsx)(tF.P.div, {
              animate: i4,
              "aria-hidden": ns,
              className: $,
              initial: !1,
              inert: nd,
              style: G,
              transition: Q,
              onUpdate: e2,
              children: ei,
            })),
            (el[337] = i4),
            (el[338] = e2),
            (el[339] = ei),
            (el[340] = ns),
            (el[341] = $),
            (el[342] = nd),
            (el[343] = G),
            (el[344] = Q),
            (el[345] = en))
          : (en = el[345]))
      let nb = a$ ? null : na
      return (
        el[346] !== iD ||
        el[347] !== ew ||
        el[348] !== nt ||
        el[349] !== en ||
        el[350] !== nb ||
        el[351] !== nl ||
        el[352] !== z
          ? ((eo = (0, i.jsxs)(iD, { ref: ew, children: [nl, z, en, nt, nb] })),
            (el[346] = iD),
            (el[347] = ew),
            (el[348] = nt),
            (el[349] = en),
            (el[350] = nb),
            (el[351] = nl),
            (el[352] = z),
            (el[353] = eo))
          : (eo = el[353]),
        el[354] !== aK || el[355] !== eo || el[356] !== ni || el[357] !== W || el[358] !== nr || el[359] !== Y
          ? ((er = (0, i.jsxs)("main", {
              "aria-hidden": ni,
              className: W,
              "data-avatar-overlay-debug-window-border": nr,
              inert: aK,
              children: [Y, eo],
            })),
            (el[354] = aK),
            (el[355] = eo),
            (el[356] = ni),
            (el[357] = W),
            (el[358] = nr),
            (el[359] = Y),
            (el[360] = er))
          : (er = el[360]),
        er
      )
    }
    function iP(e) {
      let { coveredNotificationId: t, coveredNotificationWasVisible: a } = e
      return null == t || a ? [] : [t]
    }
    function iL(e) {
      let { coveredNotificationId: t } = e
      return null == t ? [] : [t]
    }
    function iF(e) {
      let { notificationId: t } = e
      return t
    }
    function iq() {
      return { sourceReleasedFlightIds: new Set(), stackCoveredFlightIds: new Set() }
    }
    function ij() {
      return new iI()
    }
    function iD(e) {
      let t,
        a,
        o = (0, n.c)(5),
        { ref: r, children: l } = e
      return (
        o[0] !== l
          ? ((t = (0, i.jsx)("div", {
              className: "pointer-events-none relative h-full w-full",
              "data-avatar-overlay-content-frame": "true",
              children: (0, i.jsx)("div", { className: "pointer-events-auto contents", children: l }),
            })),
            (o[0] = l),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== r || o[3] !== t
          ? ((a = (0, i.jsx)("section", { ref: r, className: "relative h-full w-full", children: t })),
            (o[2] = r),
            (o[3] = t),
            (o[4] = a))
          : (a = o[4]),
        a
      )
    }
    function iU(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(14),
        {
          frameProps: c,
          presentation: d,
          onLayoutApplied: p,
          onQuickChatFocusCompleted: f,
          quickChatFocusPreparation: m,
          runtimeId: h,
        } = e,
        { layout$: v } = (0, u.uO)(tk, h),
        y = (0, u.Ul)(v),
        w = eR.appServices.avatarOverlay,
        C = (0, g.useEffectEvent)(p),
        b = (0, g.useEffectEvent)(f)
      return (
        s[0] !== C
          ? ((t = () => {
              C()
            }),
            (s[0] = C),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== y ? ((a = [y]), (s[2] = y), (s[3] = a)) : (a = s[3]),
        (0, g.useLayoutEffect)(t, a),
        s[4] !== b || s[5] !== m
          ? ((o = () => {
              if (null == w || m?.layoutRevision == null) return
              let { requestId: e, layoutRevision: t } = m,
                a = window.requestAnimationFrame(() => {
                  a = window.requestAnimationFrame(() => {
                    w.completeQuickChatFocus(e, t)
                      .then((t) => {
                        t && b(e)
                      })
                      .catch(iV)
                  })
                })
              return () => {
                window.cancelAnimationFrame(a)
              }
            }),
            (s[4] = b),
            (s[5] = m),
            (s[6] = o))
          : (o = s[6]),
        s[7] !== y || s[8] !== m ? ((r = [w, y, m]), (s[7] = y), (s[8] = m), (s[9] = r)) : (r = s[9]),
        (0, g.useLayoutEffect)(o, r),
        s[10] !== c || s[11] !== y || s[12] !== d
          ? ((l = null == d ? (0, i.jsx)(iN, { ...c, layout: y }) : d.renderFrame({ ...c, layout: y })),
            (s[10] = c),
            (s[11] = y),
            (s[12] = d),
            (s[13] = l))
          : (l = s[13]),
        l
      )
    }
    function iV(e) {
      eN.v.warning("Failed to finish Quick Chat focus", { safe: {}, sensitive: { error: e } })
    }
    var iH = a("l00C"),
      iB = a("rljs"),
      iX = a("rk7m"),
      iW = a("RU3e"),
      iY = a("kx7U"),
      iz = a("QLtS")
    let iK = (0, u.vU)(eE.u, (e, { get: t, scope: a }) => {
        let i = t(iB.y2, e),
          n = t(iB.LH, e)
        return {
          queryKey: ["avatar-overlay-recent-threads", e],
          enabled:
            null != t(iH.u$, e) &&
            "live" === t(iX.l) &&
            (t(iz.k) || !0 === t(iW.$O)) &&
            (e === Q.fI || "connected" === i || n?.code === "login-required"),
          staleTime: 0,
          queryFn: async () => (await (0, x.V)(a, e).refreshRecentConversations(), null),
        }
      }),
      i$ = (0, u.un)(eE.u, ({ get: e }) => {
        let t = e(iz.k) || !0 === e(iW.$O),
          a = e(iY.u8)
        return e(I.Dj).flatMap((i) =>
          (i === Q.fI || a?.some((t) => t.hostId === i && (t.autoConnect || "connected" === e(iB.y2, i)))) &&
          (e(iK, i), t)
            ? e(I.dl, i).flatMap((t) => {
                let a = e(iG, { hostId: i, threadId: t })
                return null == a ? [] : [a]
              })
            : [],
        )
      }),
      iG = (0, u.i1)(eE.u, (e, { get: t }) => {
        let a = t(I.ok, e)
        if (null == a || (0, eJ.I3)(a.summary)) return null
        let i = t(aB.M, e),
          n = i?.at(-1),
          o = null == n ? null : t(aB.Ko, n),
          r =
            null == n
              ? []
              : (t(aB.hm, n) ?? []).flatMap((e) => {
                  let a = t(aB.mz, { ...n, itemId: e })
                  return null == a ? [] : [a]
                })
        return {
          state: a,
          latestTurn: null == o ? null : { ...o, items: r },
          turnCount: i?.length ?? 0,
          title: (0, e4.Lm)({ id: e.threadId, title: t(I.HX, e), fallbackSearchTitle: t(I.js, e), turns: null }),
          collaborationMode: t(I.PZ, e),
          pendingTurns: a.requests.length > 0 || null != a.pendingRequest ? t(aB.J7, e) : null,
        }
      })
    var iQ = a("FIph")
    function iZ(e) {
      let t = e.getBoundingClientRect(),
        a = Math.max(0, t.left),
        i = Math.max(0, t.top),
        n = Math.min(window.innerWidth, t.right),
        o = Math.min(window.innerHeight, t.bottom)
      for (let t of (0, iQ.v9)(e)) {
        if (!(t instanceof HTMLElement)) continue
        let e = window.getComputedStyle(t),
          r = t.getBoundingClientRect(),
          l = t.offsetWidth ? r.width / t.offsetWidth : 1,
          s = t.offsetHeight ? r.height / t.offsetHeight : 1,
          c = r.left + t.clientLeft * l,
          u = r.top + t.clientTop * s
        ;(/auto|scroll|hidden|clip/.test(e.overflowX || e.overflow) &&
          ((a = Math.max(a, c)), (n = Math.min(n, c + t.clientWidth * l))),
          /auto|scroll|hidden|clip/.test(e.overflowY || e.overflow) &&
            ((i = Math.max(i, u)), (o = Math.min(o, u + t.clientHeight * s))))
      }
      return n <= a || o <= i
        ? null
        : ((a = Math.floor(a)),
          { height: Math.ceil(o) - (i = Math.floor(i)), left: a, top: i, width: Math.ceil(n) - a })
    }
    let iJ = "[data-avatar-overlay-size='mascot']",
      i1 = "[data-avatar-overlay-size='notification-tray']",
      i0 = "[data-avatar-overlay-size='notification-tray-header']",
      i2 = "[data-avatar-overlay-size='notification-tray-list']",
      i3 = "[data-avatar-overlay-size='notification-stack-backing-layout']",
      i4 = "[data-avatar-overlay-size='notification-stack-visible-layout']",
      i5 = "[data-avatar-overlay-native-surface-id]",
      i6 =
        '[data-avatar-overlay-hit-region], [data-composer-overlay-floating-ui], [data-above-composer-portal] > *, [data-radix-popper-content-wrapper] > *, [data-menu-overlay], [role="dialog"], [role="alertdialog"], .codex-dialog-overlay',
      i7 = ["focusin", "focusout", "pointerover", "pointerout"],
      i8 = [
        iJ,
        i1,
        i0,
        i2,
        "[data-avatar-overlay-measure='notification-tray-row']",
        i3,
        i4,
        i5,
        "[data-avatar-overlay-activity-content]",
      ]
    function i9(e) {
      return Array.from(e.ownerDocument.querySelectorAll(i6))
    }
    function ne(e) {
      if (null != e.closest("[inert]")) return !1
      let t = window.getComputedStyle(e)
      return (
        "none" !== t.display && "hidden" !== t.visibility && "collapse" !== t.visibility && "none" !== t.pointerEvents
      )
    }
    function nt(e) {
      return "none" === window.getComputedStyle(e).display
    }
    var na = a("PxlB"),
      ni = a("Y7mR"),
      nn = a("bbkW"),
      no = a("hL9c")
    function nr(e) {
      let t,
        a,
        o,
        r = (0, n.c)(15),
        { onAttachmentRemoved: l } = e,
        s = (0, u.gh)(ej.PR),
        c = (0, u.Ul)(U.gy),
        d = (0, u.Ul)(U.a$),
        p = (0, u.Ul)(U.PA)
      if (r[0] !== c || r[1] !== l || r[2] !== s) {
        let e
        ;(r[4] !== l || r[5] !== s
          ? ((e = (e) =>
              (0, i.jsx)(
                no.x,
                {
                  compact: !0,
                  previewEnabled: !1,
                  filename: e.filename,
                  loading: "uploading" === e.uploadStatus,
                  src: e.src,
                  onRemove: () => {
                    ;((0, H.TG)(s),
                      (0, H.td)(s, e.id),
                      (0, U.Rh)(s, "imageAttachments", (t) =>
                        t.filter((t) => {
                          let { id: a } = t
                          return a !== e.id
                        }),
                      ),
                      l())
                  },
                },
                e.id,
              )),
            (r[4] = l),
            (r[5] = s),
            (r[6] = e))
          : (e = r[6]),
          (t = c.map(e)),
          (r[0] = c),
          (r[1] = l),
          (r[2] = s),
          (r[3] = t))
      } else t = r[3]
      return (
        r[7] !== d || r[8] !== p || r[9] !== l || r[10] !== s
          ? ((a = ["addedFiles", "fileAttachments"].flatMap((e) =>
              ("addedFiles" === e ? d : p).map((t) =>
                (0, i.jsx)(
                  nn.m,
                  {
                    filename: t.label,
                    layout: "card",
                    resourcePath: t.path,
                    onRemove: () => {
                      ;((0, H.TG)(s), (0, U.Rh)(s, e, (e) => e.filter((e) => (0, h.T)(e) !== (0, h.T)(t))), l())
                    },
                  },
                  `${e}:${(0, h.T)(t)}`,
                ),
              ),
            )),
            (r[7] = d),
            (r[8] = p),
            (r[9] = l),
            (r[10] = s),
            (r[11] = a))
          : (a = r[11]),
        r[12] !== t || r[13] !== a
          ? ((o = (0, i.jsxs)(i.Fragment, { children: [t, a] })), (r[12] = t), (r[13] = a), (r[14] = o))
          : (o = r[14]),
        o
      )
    }
    var nl = a("FQih"),
      ns = a("o8WW"),
      nc = a("eac5")
    let nu = { model: void 0, thinking: void 0 }
    function nd(e) {
      return e.isUnavailable
        ? nu
        : { model: e.model, thinking: (0, nl.eE)(e.reasoningEffort) ? e.reasoningEffort : void 0 }
    }
    var np = a("KPGh"),
      nf = a("l2C7")
    let nm = (0, j.NN)(),
      nh = "first-awake-pet-notification-avatar-ids",
      ng = "avatar-overlay-activity-pills-visible",
      nv = (0, eW.m3)(ng, !0),
      ny = (0, u.i1)(eE.u, (e, { get: t }) => {
        let a = new Map()
        for (let i of e) {
          let e = t(eH.o4, i)
          null != e && a.set((0, G.z)(i.threadId, i.hostId), e)
        }
        return a
      }),
      nw = [i6]
    function nC(e) {
      var t, a
      let o,
        r,
        l,
        s,
        c = (0, n.c)(11),
        { presentation: d } = e,
        { selectedAvatar: p, selectedAvatarId: f } = (function () {
          let e,
            t,
            a = (0, n.c)(12),
            { selectedAvatar: i, selectedAvatarId: o } = (0, q.WU)(),
            { data: r, isFetching: l } = (0, u._U)(nf.Zn, o ?? i.id),
            { isFetching: s, pet: c } = (0, u._U)(np.lc, o ?? i.id),
            d = o?.startsWith("custom:") === !0,
            p = o?.startsWith("pet_") === !0
          if (!d && !p) {
            let e
            return (
              a[0] !== i || a[1] !== o
                ? ((e = { selectedAvatar: i, selectedAvatarId: o }), (a[0] = i), (a[1] = o), (a[2] = e))
                : (e = a[2]),
              e
            )
          }
          if ((l && null == r) || (s && null == c)) {
            let e
            return (
              a[3] !== o ? ((e = { selectedAvatar: null, selectedAvatarId: o }), (a[3] = o), (a[4] = e)) : (e = a[4]),
              e
            )
          }
          return (
            a[5] !== c || a[6] !== r || a[7] !== o
              ? ((e = (0, q.so)(o, (0, tV.i0)(null == r ? void 0 : [r], null == c ? void 0 : [c]))),
                (a[5] = c),
                (a[6] = r),
                (a[7] = o),
                (a[8] = e))
              : (e = a[8]),
            a[9] !== o || a[10] !== e
              ? ((t = { selectedAvatar: e, selectedAvatarId: o }), (a[9] = o), (a[10] = e), (a[11] = t))
              : (t = a[11]),
            t
          )
        })(),
        m = null == p
      return (c[0] !== m
        ? ((o = () => {
            m && K.O1.dispatchMessage("avatar-overlay-pointer-interaction-changed", { isInteractive: !1 })
          }),
          (r = [m]),
          (c[0] = m),
          (c[1] = o),
          (c[2] = r))
        : ((o = c[1]), (r = c[2])),
      (0, g.useEffect)(o, r),
      null == p)
        ? null
        : (c[3] !== p || c[4] !== f
            ? ((t = p),
              (a = f),
              (l = (0, q._I)(t, a) ? "pending-custom-avatar" : "ready"),
              (c[3] = p),
              (c[4] = f),
              (c[5] = l))
            : (l = c[5]),
          c[6] !== d || c[7] !== p || c[8] !== f || c[9] !== l
            ? ((s = (0, i.jsx)(nb, { selectedAvatar: p, selectedAvatarId: f, presentation: d }, l)),
              (c[6] = d),
              (c[7] = p),
              (c[8] = f),
              (c[9] = l),
              (c[10] = s))
            : (s = c[10]),
          s)
    }
    function nb(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        h,
        v,
        w,
        M,
        _,
        T = (0, n.c)(52),
        { presentation: N, selectedAvatar: P, selectedAvatarId: F } = e,
        q = (0, u.gh)(eE.u),
        j = (0, u.Ul)(S.w),
        D = (0, y.A)(),
        U = (0, eV.r9)(),
        V = (0, eB.Zj)("1532097315"),
        H = (0, eB.Zj)("1532120159"),
        B = (0, u.Ul)(ni.J),
        W = H || B,
        Y = (0, eU.iK)(d.kWF.petVisible),
        z = !W || Y
      T[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "chatgpt.quick-chat" }), (T[0] = t)) : (t = T[0])
      let Z = (0, u._U)(b.G, t),
        J = (0, u.Ul)(L.k5),
        ee = W && Z.isCapable && !J,
        et = (0, u.Ul)(iz.k)
      T[1] !== et || T[2] !== ee
        ? ((a = { enabled: ee, active: et }), (T[1] = et), (T[2] = ee), (T[3] = a))
        : (a = T[3])
      let ea = (function (e) {
          let t,
            a,
            i,
            o,
            r,
            l,
            s,
            c,
            u,
            p = (0, n.c)(18),
            { enabled: f, active: m } = e,
            h = (0, g.useRef)(null),
            [v, y] = (0, g.useState)(!1),
            w = f && (m || v)
          p[0] !== w ? ((t = { cwd: null, enabled: w, hostId: "local" }), (p[0] = w), (p[1] = t)) : (t = p[1])
          let C = (0, ns.D)(t),
            b = !C.isLoading || C.isUnavailable
          p[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (e) => {
                let t = h.current
                ;((h.current = null), y(!1), t?.resolve(e))
              }),
              (p[2] = a))
            : (a = p[2])
          let x = a
          return (
            p[3] !== f || p[4] !== b || p[5] !== C || p[6] !== v
              ? ((i = () => {
                  v && null != h.current && (!f || b) && x(f ? nd(C) : null)
                }),
                (o = [f, b, C, v]),
                (p[3] = f),
                (p[4] = b),
                (p[5] = C),
                (p[6] = v),
                (p[7] = i),
                (p[8] = o))
              : ((i = p[7]), (o = p[8])),
            (0, g.useEffect)(i, o),
            p[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = () => () => {
                  ;(h.current?.resolve(null), (h.current = null))
                }),
                (l = []),
                (p[9] = r),
                (p[10] = l))
              : ((r = p[9]), (l = p[10])),
            (0, g.useEffect)(r, l),
            p[11] !== b || p[12] !== C || p[13] !== w
              ? ((s = w && b ? nd(C) : null), (p[11] = b), (p[12] = C), (p[13] = w), (p[14] = s))
              : (s = p[14]),
            p[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = async () => {
                  let e = h.current ?? (0, d.udX)()
                  ;((h.current = e), y(!0))
                  let t = await (0, nc.M)(e.promise, nu, Date.now() + 5e3)
                  return (h.current === e && x(t), t)
                }),
                (p[15] = c))
              : (c = p[15]),
            p[16] !== s ? ((u = { current: s, wait: c }), (p[16] = s), (p[17] = u)) : (u = p[17]),
            u
          )
        })(a),
        ei = (0, u.Ul)($.YV),
        en = (0, u.Ul)(eh.uD),
        { mascotWidthPx: eo } = (0, tR.cf)(),
        er = (0, u.Ul)(i$)
      T[4] !== q
        ? ((o = () =>
            (async function (e) {
              await Promise.all(
                e.get(I.Dj).map(async (t) => {
                  let { state: a, error: i } = (0, I.EW)(e, t)
                  ;(t === Q.fI || "connected" === a || i?.code === "login-required") &&
                    (await (0, x.V)(e, t)
                      .refreshRecentConversations()
                      .catch((e) => {
                        eN.v.warning("recent_conversations_refresh_failed", {
                          safe: {},
                          sensitive: { error: e, hostId: t },
                        })
                      }))
                }),
              )
            })(q)),
          (T[4] = q),
          (T[5] = o))
        : (o = T[5])
      let el = o
      T[6] !== D || T[7] !== er || T[8] !== j || T[9] !== en || T[10] !== U
        ? ((r = (function ({
            includeMcpElicitationCancelAction: e = !1,
            openAIFormElicitationsEnabled: t = !1,
            intl: a,
            localThreads: i,
            excludedConversationId: n,
            threadDetailLevel: o = eV._e,
          }) {
            let r = [],
              l = new Set()
            for (let s of i) {
              let i = (function ({
                thread: e,
                includeMcpElicitationCancelAction: t,
                openAIFormElicitationsEnabled: a,
                intl: i,
                excludedConversationId: n,
                threadDetailLevel: o,
              }) {
                let { state: r, latestTurn: l } = e,
                  s = r.summary
                if ((0, eJ.I3)(s)) return null
                let c = s.hostId ?? Q.fI,
                  u = c === Q.fI ? "local" : "remote-host",
                  d =
                    r.pendingRequest?.kind === "implementPlan" ||
                    ("needs_resume" === r.resumeState &&
                      s.threadRuntimeStatus?.type === "idle" &&
                      r.requests.every(eQ.zd))
                      ? r.requests.findLast(eQ.zd)
                      : void 0,
                  p =
                    (0, te.HD)(r.requests, e.pendingTurns ?? [], a) ??
                    (null == d
                      ? null
                      : {
                          type: "implementPlan",
                          id: (0, eQ.a0)(d.params.turnId),
                          turnId: d.params.turnId,
                          planContent: d.params.planContent,
                        }),
                  f = (function ({ state: e, latestTurn: t }, a) {
                    let i = e.summary,
                      n = "needs_resume" === e.resumeState ? i.threadRuntimeStatus : null,
                      o =
                        "needs_resume" === e.resumeState
                          ? n?.type === "active"
                          : "resuming" === e.resumeState ||
                            (null == t
                              ? e.isConversationInProgress || null != e.latestTurnId
                              : "inProgress" === t.status && t.items.at(-1)?.type !== "sleep"),
                      r =
                        "needs_resume" === e.resumeState
                          ? n?.type === "active" && n.activeFlags.includes("waitingOnUserInput")
                          : e.requests.some((e) => "item/tool/requestUserInput" === e.method),
                      l =
                        "needs_resume" === e.resumeState
                          ? n?.type === "active" &&
                            n.activeFlags.includes("waitingOnApproval") &&
                            (0, te.PZ)(e.requests)
                          : null != a,
                      s =
                        "needs_resume" === e.resumeState
                          ? n?.type === "systemError"
                          : (t?.status ?? e.latestTurnStatus) === "failed"
                    return l || r || a?.type === "implementPlan"
                      ? "waiting"
                      : s
                        ? "failed"
                        : o
                          ? "running"
                          : i.hasUnreadTurn
                            ? "review"
                            : "idle"
                  })(e, p),
                  m = (0, e0.i)(l),
                  h = m || "automation" === s.threadSource,
                  g = h
                    ? (function (e) {
                        if (null == e) return null
                        let t = e.items,
                          a = (0, e0.i)(e)
                        for (let e = t.length - 1; e >= 0; e -= 1) {
                          let i = t[e]
                          if (
                            i?.type === "dynamicToolCall" &&
                            (null == i.namespace || "codex_app" === i.namespace) &&
                            i.tool === tt.n &&
                            "completed" === i.status &&
                            !0 === i.success
                          ) {
                            let e = (0, tt.a)(i.arguments)
                            if (null != e) return tw((0, e5.Dk)(e, !1).content)
                          }
                          if (i?.type !== "agentMessage") continue
                          let n = (0, e1.l)(i.text),
                            o = a ? (0, eZ.mM)(n) : (0, eZ.Fp)(n)
                          if (null != o) {
                            if ("DONT_NOTIFY" === o.decision) return null
                            return tw(o.notificationMessage ?? o.visibleText)
                          }
                          if ("commentary" !== i.phase) {
                            let e = tw(n)
                            if (null != e) return e
                          }
                        }
                        return null
                      })(l)
                    : ty(l?.items ?? [], i, m, o)
                if ((s.threadSource === ta.S || s.conversationId === n) && "waiting" !== f && "failed" !== f)
                  return null
                let v = null == l ? null : String(e.turnCount)
                return (
                  p?.type === "implementPlan" && (v = p.turnId),
                  {
                    actionPath: "/local/" + s.conversationId,
                    controlTarget: { type: "app-server-conversation", conversationId: s.conversationId },
                    hostId: c,
                    key: (0, G.z)(s.conversationId, c),
                    localConversationId: s.conversationId,
                    source: u,
                    showInNotificationTray:
                      !h || "waiting" === f || "failed" === f || (m && "review" === f) || null != g,
                    sortAtMs: l?.turnStartedAtMs ?? s.updatedAt,
                    status: f,
                    subtitle: g,
                    title: e.title ?? i.formatMessage(tv.newThread),
                    turnKey: v,
                    updatedAtMs: s.updatedAt,
                    waitingRequest: (function (
                      e,
                      t,
                      { includeMcpElicitationCancelAction: a = !1, planStartCollaborationMode: i } = {},
                    ) {
                      switch (e?.type) {
                        case "userInput":
                          return !0 === e.isOnboardingDynamicInput
                            ? null
                            : (function (e, t) {
                                let a = e.item.questions[0]
                                if (null == a) return null
                                let i = th(a.question) ?? th(a.header)
                                return null == i || 0 === a.options.length
                                  ? null
                                  : {
                                      kind: "question",
                                      requestId: e.item.requestId,
                                      title: t.formatMessage(tl.askQuestion),
                                      prompt: i,
                                      options: a.options.map((e) => ({
                                        label: th(e.label) ?? t.formatMessage(tl.option),
                                        description: th(e.description),
                                        questionId: a.id,
                                      })),
                                    }
                              })(e, t)
                        case "approval":
                          return "exec" === e.item.type
                            ? (function (e, t) {
                                if ("exec" !== e.type) throw Error("Expected exec approval item")
                                if (null == e.approvalRequestId) return null
                                let a = th(e.networkApprovalContext?.host ?? "")
                                return null != a
                                  ? {
                                      kind: "network",
                                      requestId: e.approvalRequestId,
                                      operation: t.formatMessage(tl.allowNetwork),
                                      target: a,
                                      title: t.formatMessage(tl.allowNetwork),
                                      actions: [
                                        {
                                          ariaLabel: t.formatMessage(tl.allowOnce),
                                          commandDecision: "accept",
                                          intent: "command-approval",
                                          label: t.formatMessage(tl.allow),
                                          tone: "primary",
                                        },
                                        {
                                          commandDecision: "decline",
                                          intent: "command-approval",
                                          label: t.formatMessage(tl.deny),
                                          tone: "danger",
                                        },
                                      ],
                                    }
                                  : {
                                      kind: "exec",
                                      requestId: e.approvalRequestId,
                                      operation: t.formatMessage(tl.runCommand),
                                      summary: th(e.cmd.join(" && ")) ?? t.formatMessage(tl.command),
                                      title: t.formatMessage(tl.reviewCommand),
                                      actions: [
                                        {
                                          commandDecision: "accept",
                                          intent: "command-approval",
                                          label: t.formatMessage(tl.runOnce),
                                          tone: "primary",
                                        },
                                        {
                                          commandDecision: "decline",
                                          intent: "command-approval",
                                          label: t.formatMessage(tl.deny),
                                          tone: "danger",
                                        },
                                      ],
                                    }
                              })(e.item, t)
                            : (function (e, t) {
                                if ("patch" !== e.type || null == e.approvalRequestId) return null
                                let a = Object.entries(e.changes)
                                if (0 === a.length) return null
                                let i = (function (e) {
                                  let t = 0,
                                    a = 0
                                  for (let i of Object.values(e))
                                    switch (i?.type) {
                                      case "add":
                                        t += tm(i.content)
                                        break
                                      case "delete":
                                        a += tm(i.content)
                                        break
                                      case "update":
                                        for (let e of i.unified_diff.split(/\r?\n/))
                                          !(e.startsWith("+++") || e.startsWith("---")) &&
                                            (e.startsWith("+") ? (t += 1) : e.startsWith("-") && (a += 1))
                                    }
                                  return { additions: t, deletions: a }
                                })(e.changes)
                                return {
                                  kind: "patch",
                                  requestId: e.approvalRequestId,
                                  operation: t.formatMessage(tl.applyChanges),
                                  summary: a[0]?.[0] ?? t.formatMessage(tl.oneFileChanged),
                                  title: t.formatMessage(tl.applyChanges),
                                  files: a.map(([e]) => e),
                                  fileCount: a.length,
                                  additions: i.additions,
                                  deletions: i.deletions,
                                  actions: [
                                    {
                                      fileDecision: "accept",
                                      intent: "file-approval",
                                      label: t.formatMessage(tl.apply),
                                      tone: "primary",
                                    },
                                    { intent: "open", label: t.formatMessage(tl.review), tone: "secondary" },
                                  ],
                                }
                              })(e.item, t)
                        case "permissionRequest":
                          return (function (e, t) {
                            var a
                            let i,
                              n,
                              { permissions: o } = e,
                              r = (0, to.w)(o)[0]
                            if (null == r) return null
                            if ("network" === r.kind) i = n = t.formatMessage(tl.networkAccess)
                            else {
                              n = t.formatMessage(tl.fileAccess)
                              let e = r.paths[0] ?? n,
                                a = Math.max(0, r.paths.length - 1)
                              i = 0 === a ? e : `${e} +${a}`
                            }
                            return {
                              kind: "permission",
                              requestId: e.requestId,
                              operation: n,
                              target: i,
                              title: n,
                              actions: [
                                {
                                  intent: "permission-response",
                                  ariaLabel: t.formatMessage(tl.allowOnce),
                                  label: t.formatMessage(tl.allow),
                                  permissionResponse: {
                                    permissions: {
                                      network: (a = o).network ?? void 0,
                                      fileSystem: a.fileSystem ?? void 0,
                                    },
                                    scope: "turn",
                                  },
                                  tone: "primary",
                                },
                                {
                                  intent: "permission-response",
                                  label: t.formatMessage(tl.deny),
                                  permissionResponse: { permissions: {}, scope: "turn" },
                                  tone: "danger",
                                },
                              ],
                            }
                          })(e.item, t)
                        case "implementPlan":
                          return (function (e, t, a) {
                            let { planContent: i } = e,
                              n = th(
                                i
                                  .split(/\r?\n/)
                                  .map((e) => e.replace(/^[-*]\s+\[[ x]\]\s+/i, "").trim())
                                  .find((e) => e.length > 0) ?? "",
                              )
                            return null == n
                              ? null
                              : {
                                  kind: "plan",
                                  operation: t.formatMessage(tl.plan),
                                  planContent: i,
                                  summary: n,
                                  title: t.formatMessage(tl.plan),
                                  turnId: e.turnId,
                                  actions: [
                                    {
                                      intent: "plan-start",
                                      label: t.formatMessage(tl.implementPlan),
                                      planStartCollaborationMode: a,
                                      tone: "primary",
                                    },
                                  ],
                                }
                          })(e, t, i)
                        case "mcpServerElicitation":
                          return (function (e, t, a) {
                            let i,
                              n,
                              o,
                              { elicitation: r } = e,
                              l = th(e.request.params.serverName),
                              s = tf(l) ?? l ?? t.formatMessage(tl.toolServer),
                              c = s,
                              u = null,
                              d = null
                            switch (r.kind) {
                              case "userVerification":
                                ;((i = r.title),
                                  (u = r.description),
                                  (d = [{ intent: "open", label: t.formatMessage(tl.review), tone: "primary" }]))
                                break
                              case "unsupportedOpenAIForm":
                                ;((c = i =
                                  t.formatMessage({
                                    id: "avatarOverlay.waitingRequest.answerRequest",
                                    defaultMessage: "Answer request",
                                  })),
                                  (u = t.formatMessage({
                                    id: "avatarOverlay.waitingRequest.unsupportedRequest",
                                    defaultMessage: "This request can\u2019t be shown yet",
                                  })),
                                  (d = []))
                                break
                              case "formElicitation":
                              case "browserAuth":
                              case "openaiForm":
                              case "legacyOpenAIForm":
                                ;((i = t.formatMessage(tl.answerTarget, { target: s })), (u = th(r.message)), (d = []))
                                break
                              case "mcpToolCall": {
                                let e = (0, tn.m)(r)
                                if (null != e) {
                                  ;((i = e.connectorName),
                                    (c = e.appDisplayName),
                                    (u =
                                      th(e.subtitle) ??
                                      t.formatMessage(
                                        {
                                          id: "composer.computerUseAppApproval.title.chatgpt",
                                          defaultMessage: "Allow ChatGPT to use {appDisplayName}?",
                                        },
                                        { appDisplayName: e.appDisplayName },
                                      )),
                                    (n = t.formatMessage(tl.allow)),
                                    (o = "\u2022"))
                                  break
                                }
                                let a = null == r.approvalPresentation ? null : (0, ti.hN)(r.approvalPresentation, t),
                                  l = th(r.approval.connector_name) ?? tf(r.approval.connector_id) ?? s
                                c = l
                                let d = (0, tr.Dd)(r.approval)
                                if (null != d) {
                                  ;((i = t.formatMessage(d.descriptor, d.values)),
                                    (u = null == d.description ? null : t.formatMessage(d.description, d.values)))
                                  break
                                }
                                let p = (function (e) {
                                  let t = /\brun\s+tool\s+"([^"]+)"/i.exec(e)
                                  if (t?.[1] != null) return th(t[1])
                                  let a = /\baccess\s+(.+?)\?*$/i.exec(e)
                                  return a?.[1] != null ? th(a[1]) : null
                                })(r.message)
                                ;((i =
                                  null == p
                                    ? t.formatMessage(tl.allowTarget, { target: l })
                                    : t.formatMessage(tl.allowTarget, { target: p })),
                                  (u =
                                    th(r.subtitle) ??
                                    (null == a
                                      ? null == r.toolParamsDisplay
                                        ? tc(r.approval.tool_params)
                                        : tu(r.toolParamsDisplay)
                                      : tu(a.toolParamsDisplay)) ??
                                    th(a?.message) ??
                                    th(r.message)))
                                break
                              }
                              case "toolSuggestion": {
                                let e =
                                  th(r.suggestion.tool_name) ?? tf(r.suggestion.tool_id) ?? t.formatMessage(tl.tool)
                                ;((i =
                                  "enable" === r.suggestion.suggest_type
                                    ? t.formatMessage(tl.enableTool, { toolName: e })
                                    : t.formatMessage(tl.installTool, { toolName: e })),
                                  (c =
                                    "connector" === r.suggestion.tool_type
                                      ? t.formatMessage(tl.connector)
                                      : t.formatMessage(tl.plugin)),
                                  (u = th(r.suggestion.suggest_reason)))
                                break
                              }
                              case "connectorAuth": {
                                let e = th(r.connector.connector_name) ?? tf(r.connector.connector_id) ?? s,
                                  a = r.connector.auth_reason
                                ;((i =
                                  "missing_link" === a
                                    ? t.formatMessage(tl.connectTarget, { target: e })
                                    : "oauth_upgrade_required" === a
                                      ? t.formatMessage(tl.additionalAccessTarget, { target: e })
                                      : t.formatMessage(tl.reconnectTarget, { target: e })),
                                  (c = e),
                                  (u = th(r.subtitle) ?? th(r.message) ?? td(r.url)),
                                  (d = [
                                    {
                                      intent: "open",
                                      label:
                                        "missing_link" === a
                                          ? t.formatMessage(tl.connect)
                                          : "oauth_upgrade_required" === a
                                            ? t.formatMessage(tl.updateAccess)
                                            : t.formatMessage(tl.reconnect),
                                      tone: "primary",
                                    },
                                  ]))
                                break
                              }
                              case "urlAction":
                                ;((c = tf(r.serverName) ?? th(r.serverName) ?? s),
                                  (i = t.formatMessage(tl.openLink)),
                                  (u = th(r.subtitle) ?? td(r.url) ?? th(r.message)),
                                  (d = [{ intent: "open", label: t.formatMessage(tl.openLink), tone: "primary" }]))
                                break
                              case "generic":
                                ;((i =
                                  (function ({ message: e, metadata: t }) {
                                    let a = (function (e) {
                                        if (null == e || Array.isArray(e) || "object" != typeof e) return null
                                        let t = e.reason
                                        return "string" != typeof t ? null : th(t)
                                      })(t),
                                      i = (function (e, t) {
                                        let a = e.trim()
                                        if (null == t) return a
                                        let i = `Reason: ${t}`
                                        if (!a.endsWith(i)) return a
                                        let n = a.slice(0, -i.length).trim()
                                        return n.length > 0 ? n : a
                                      })(e, a)
                                    return null != a &&
                                      (function (e) {
                                        let t = e.trim().toLowerCase()
                                        return (
                                          "tool call needs your approval." === t ||
                                          "tool call needs your approval" === t
                                        )
                                      })(i)
                                      ? a
                                      : th(i)
                                  })({ message: r.message, metadata: r.metadata }) ??
                                  t.formatMessage(tl.allowTarget, { target: s })),
                                  (u = th(r.subtitle) ?? tc(r.toolParams) ?? th(r.message)))
                            }
                            "high" === r.riskLevel &&
                              (d = [{ intent: "open", label: t.formatMessage(tl.review), tone: "primary" }])
                            let p = t.formatMessage(tl.allowTarget, { target: c }),
                              f = {
                                ariaLabel: p,
                                intent: "mcp-elicitation",
                                label: n ?? p,
                                mcpElicitationAction: "accept",
                                tone: "primary",
                              }
                            return {
                              kind: "tool",
                              requestId: e.requestId,
                              operation: i,
                              target: c,
                              summary: u,
                              notificationTitleSeparator: o,
                              title: i,
                              actions:
                                d ??
                                (a
                                  ? [
                                      {
                                        intent: "mcp-elicitation",
                                        label: t.formatMessage(tl.cancel),
                                        mcpElicitationAction: "decline",
                                        tone: "secondary",
                                      },
                                      f,
                                    ]
                                  : [f]),
                            }
                          })(e, t, a)
                        case "optionPicker":
                        case "setupCodexStep":
                        case void 0:
                          return null
                      }
                    })(p, i, {
                      includeMcpElicitationCancelAction: t,
                      planStartCollaborationMode:
                        null == e.collaborationMode
                          ? void 0
                          : {
                              mode: "default",
                              settings: { ...e.collaborationMode.settings, developer_instructions: null },
                            },
                    }),
                  }
                )
              })({
                thread: s,
                includeMcpElicitationCancelAction: e,
                openAIFormElicitationsEnabled: t,
                intl: a,
                excludedConversationId: n,
                threadDetailLevel: o,
              })
              null == i || l.has(i.key) || (l.add(i.key), r.push(i))
            }
            return r
          })({
            includeMcpElicitationCancelAction: !0,
            openAIFormElicitationsEnabled: j,
            intl: D,
            localThreads: er,
            excludedConversationId: en,
            threadDetailLevel: U,
          })),
          (T[6] = D),
          (T[7] = er),
          (T[8] = j),
          (T[9] = en),
          (T[10] = U),
          (T[11] = r))
        : (r = T[11])
      let es = r
      T[12] !== D || T[13] !== q
        ? ((l = () => {
            q.get(X.Id).danger(
              D.formatMessage({
                id: "avatarOverlay.approvalReplyError",
                defaultMessage: "Couldn\u2019t send your decision. Check the connection and try again.",
              }),
              { errorAnalytics: { toastId: "avatarOverlay.approvalReplyError" } },
            )
          }),
          (T[12] = D),
          (T[13] = q),
          (T[14] = l))
        : (l = T[14])
      let ec = l
      T[15] !== el || T[16] !== q || T[17] !== es || T[18] !== ec
        ? ((s = (e, t) => {
            let a = e.waitingRequest
            if (null != e.localConversationId && null != t) {
              let i = e.localConversationId,
                n =
                  es.find((t) => {
                    let { key: a } = t
                    return a === e.notificationPreferenceId
                  })?.hostId ?? null
              switch (t.intent) {
                case "command-approval":
                  if (null != t.commandDecision && null != n && (a?.kind === "exec" || a?.kind === "network"))
                    return void (0, x.V)(q, n)
                      .replyWithCommandExecutionApprovalDecision(i, a.requestId, t.commandDecision)
                      .then(el, ec)
                  break
                case "file-approval":
                  if (null != t.fileDecision && null != n && a?.kind === "patch")
                    return void (0, x.V)(q, n)
                      .replyWithFileChangeApprovalDecision(i, a.requestId, t.fileDecision)
                      .then(el, ec)
                  break
                case "permission-response":
                  if (null != t.permissionResponse && null != n && a?.kind === "permission")
                    return void (0, x.V)(q, n)
                      .replyWithPermissionsRequestApprovalResponse(i, a.requestId, t.permissionResponse)
                      .then(() => {
                        el()
                      })
                  break
                case "mcp-elicitation":
                  if (null != t.mcpElicitationAction && null != n && a?.kind === "tool")
                    return void (0, x.V)(q, n)
                      .replyWithMcpServerElicitationResponse(i, a.requestId, (0, p.Se)(t.mcpElicitationAction))
                      .then(() => {
                        el()
                      })
                      .catch(nS)
                  break
                case "plan-start":
                  if (a?.kind === "plan" && null != n && null != n && null != t.planStartCollaborationMode)
                    return void (0, x.V)(q, n)
                      .updateThreadSettingsForNextTurn(i, { collaborationMode: t.planStartCollaborationMode })
                      .then(() => (0, x.V)(q, n).removePlanImplementationRequest(i, a.turnId))
                      .then(async () =>
                        (0, R.m)(q, n, i, {
                          turnTrigger: "avatar_implement_plan",
                          prompt: k.BR,
                          serviceTier: await (0, O.e)(q, n, t.planStartCollaborationMode?.settings.model ?? null),
                        }),
                      )
                      .then(() => {
                        el()
                      })
              }
            }
            ;(null == t || "open" === t.intent) &&
              null != e.action &&
              K.O1.dispatchMessage("open-in-main-window", {
                path: e.action.path,
                appEntryAttribution: { channel: "push_notification", source: "pet_notification" },
              })
          }),
          (T[15] = el),
          (T[16] = q),
          (T[17] = es),
          (T[18] = ec),
          (T[19] = s))
        : (s = T[19])
      let eu = s
      T[20] !== el || T[21] !== q || T[22] !== es
        ? ((h = (e, t) => {
            let a = e.waitingRequest
            if (null == e.localConversationId || a?.kind !== "question") return
            let i =
              es.find((t) => {
                let { key: a } = t
                return a === e.notificationPreferenceId
              })?.hostId ?? null
            null != i &&
              (0, x.V)(q, i)
                .replyWithUserInputResponse(e.localConversationId, a.requestId, {
                  answers: { [t.questionId]: { answers: [t.label] } },
                })
                .then(() => {
                  el()
                })
          }),
          (T[20] = el),
          (T[21] = q),
          (T[22] = es),
          (T[23] = h))
        : (h = T[23])
      let ed = h
      T[24] !== el || T[25] !== q
        ? ((v = async (e, t) => {
            let a = e.controlTarget
            switch (t.type) {
              case "close-follow-up":
              case "follow-up-active-changed":
              case "follow-up-editor-changed":
              case "open-follow-up":
                return
              case "stop":
                if (null == a) return
                ;(await (0, A.F)(q, { conversationId: a.conversationId, initiatedBy: "user" }),
                  Promise.resolve(el()).catch(nI))
                return
              case "submit-follow-up": {
                let e = t.prompt.trim()
                if (null == a || 0 === e.length) return
                let i = q.get(I.qX, a.conversationId)
                return (
                  await (0, R.m)(q, i, a.conversationId, {
                    turnTrigger: "avatar_follow_up",
                    prompt: e,
                    serviceTier: await (0, O.e)(q, i, null),
                  }),
                  Promise.resolve(el()).catch(nA),
                  "submitted"
                )
              }
            }
          }),
          (T[24] = el),
          (T[25] = q),
          (T[26] = v))
        : (v = T[26])
      let ep = v
      T[27] !== er
        ? ((w = (e) =>
            er.find((t) => {
              let { state: a } = t
              return a.summary.conversationId === e && (a.summary.hostId ?? Q.fI) === Q.fI
            })?.latestTurn?.items),
          (T[27] = er),
          (T[28] = w))
        : (w = T[28])
      let ef = W && Z.isLoading && !J
      return (
        T[29] !== ea || T[30] !== el || T[31] !== q
          ? ((M = async (e, t, a, i, n, o) => {
              if (!q.get(b.G, { name: "chatgpt.quick-chat" }).isCapable) return "cancelled"
              if (null != i) {
                let t = a ?? []
                return (
                  await (0, R.m)(q, i.hostId, i.conversationId, {
                    turnTrigger: "avatar_quick_chat",
                    attachmentContext: o,
                    inputItems:
                      null == o
                        ? t.flatMap((e) => {
                            let t = e.imageDataUrl ?? e.imagePath
                            return null == t
                              ? []
                              : [(0, m.K)(t, { localPath: e.imagePath ?? void 0, isRemoteHost: i.hostId !== Q.fI })]
                          })
                        : void 0,
                    prompt: null == o ? [e, ...t.map(f.my)].join("\n\n") : e,
                    serviceTier: await (0, O.e)(q, i.hostId, null),
                    usePermissionSelection: (0, eT.ie)(q, "4226282475") || void 0,
                  }),
                  n?.(),
                  await el(),
                  "sent"
                )
              }
              let r = ea.current ?? (await ea.wait())
              if (null == r) return "cancelled"
              let l = c()(() => n?.()),
                s = (e) => {
                  "created" === e.status && "accepted" === e.firstTurn.status && l()
                },
                u = await (0, C.Nw)({
                  scope: q,
                  turnTrigger: "avatar_quick_chat",
                  threadSource: "avatar_quick_chat",
                  appshotContexts: null == o ? a : void 0,
                  attachmentContext: o,
                  ...r,
                  prompt: e,
                  target: { type: "projectless", clientThreadId: t },
                  onSettled: s,
                })
              if (("creation" === u.kind && s(u.result), await el(), "creation" === u.kind)) {
                let e = (0, E.c)(q, u.result)
                if (null != e) throw e
              }
              return "created"
            }),
            (T[29] = ea),
            (T[30] = el),
            (T[31] = q),
            (T[32] = M))
          : (M = T[32]),
        T[33] !== eu ||
        T[34] !== ep ||
        T[35] !== ed ||
        T[36] !== z ||
        T[37] !== eo ||
        T[38] !== N ||
        T[39] !== ei ||
        T[40] !== ee ||
        T[41] !== V ||
        T[42] !== W ||
        T[43] !== el ||
        T[44] !== P ||
        T[45] !== F ||
        T[46] !== es ||
        T[47] !== ef ||
        T[48] !== M ||
        T[49] !== w ||
        T[50] !== U
          ? ((_ = (0, i.jsx)(nR, {
              presentation: N,
              latestTurnItems: w,
              mascotWidthPx: eo,
              productLogger: ei,
              quickChatEnabled: ee,
              quickChatStashEnabled: V,
              quickChatStyleEnabled: W,
              isPetVisible: z,
              isQuickChatLoading: ef,
              selectedAvatar: P,
              selectedAvatarId: F,
              sessions: es,
              threadDetailLevel: U,
              onClosePet: nM,
              onMascotClick: nx,
              onRefreshLocalSessions: el,
              onRunNotificationControl: ep,
              onRunNotificationAction: eu,
              onSubmitQuestionOption: ed,
              onSubmitQuickChat: M,
            })),
            (T[33] = eu),
            (T[34] = ep),
            (T[35] = ed),
            (T[36] = z),
            (T[37] = eo),
            (T[38] = N),
            (T[39] = ei),
            (T[40] = ee),
            (T[41] = V),
            (T[42] = W),
            (T[43] = el),
            (T[44] = P),
            (T[45] = F),
            (T[46] = es),
            (T[47] = ef),
            (T[48] = M),
            (T[49] = w),
            (T[50] = U),
            (T[51] = _))
          : (_ = T[51]),
        _
      )
    }
    function nx() {
      K.O1.dispatchMessage("open-current-main-window", {
        focusComposer: !0,
        stealFocus: !0,
        appEntryAttribution: { channel: "shortcut", source: "shortcut" },
      })
    }
    function nM() {
      K.O1.dispatchMessage("avatar-overlay-close", {})
    }
    function nA() {}
    function nI() {}
    function nS() {}
    function nR(e) {
      let t,
        a,
        o,
        r = (0, n.c)(7),
        [l] = (0, g.useState)(d.xa2)
      return (
        r[0] !== l ? ((t = (0, ej.p)(null, "main", null, l)), (r[0] = l), (r[1] = t)) : (t = r[1]),
        r[2] !== e ? ((a = (0, i.jsx)(nE, { ...e })), (r[2] = e), (r[3] = a)) : (a = r[3]),
        r[4] !== t || r[5] !== a
          ? ((o = (0, i.jsx)(u.Ui, { scope: ej.PR, value: t, children: a })), (r[4] = t), (r[5] = a), (r[6] = o))
          : (o = r[6]),
        o
      )
    }
    function nE(e) {
      let t,
        a,
        r,
        s,
        c,
        p,
        f,
        m,
        C,
        A,
        S,
        R,
        E,
        k,
        O,
        P,
        L,
        j,
        et,
        eU,
        eH,
        eW,
        eY,
        ez,
        eK,
        e$,
        eG,
        eQ,
        eZ,
        eJ,
        e1,
        e0,
        e2,
        e3,
        e4,
        e5,
        e6,
        e7,
        e8,
        e9,
        te,
        tt,
        ta,
        ti,
        tn,
        to,
        tr,
        tl,
        tc,
        tu,
        td,
        tp,
        tf,
        tm,
        th,
        tg,
        tv,
        ty,
        tw,
        tb,
        tS,
        tE,
        tO,
        t_,
        tT,
        tN,
        tP,
        tL,
        tF,
        tq,
        tj,
        tD,
        tU,
        tV,
        tH,
        tB,
        tX,
        tW,
        tY,
        tz,
        tK,
        t$,
        tG,
        tQ,
        tZ,
        t1,
        t0,
        t2 = (0, n.c)(319),
        {
          presentation: t3,
          firstAwakeNotificationEnabled: t4,
          latestTurnItems: t5,
          isPetVisible: t6,
          isQuickChatLoading: t7,
          mascotWidthPx: t8,
          productLogger: t9,
          quickChatEnabled: ae,
          quickChatStashEnabled: at,
          quickChatStyleEnabled: aa,
          quickChatResetRevision: ai,
          quickChatStashAppearance: an,
          stashAttentionAnimation: ao,
          voiceOverride: ar,
          selectedAvatar: al,
          selectedAvatarId: as,
          sessions: ac,
          threadDetailLevel: au,
          onClosePet: ad,
          onMascotClick: ap,
          onRefreshLocalSessions: af,
          onRunNotificationControl: ah,
          onRunNotificationAction: ag,
          onSubmitQuestionOption: av,
          onSubmitQuickChat: ay,
        } = e,
        aw = void 0 === t4 || t4,
        aC = void 0 === t6 || t6,
        ab = void 0 !== t7 && t7,
        ax = void 0 !== at && at,
        aM = void 0 !== aa && aa,
        aA = void 0 === ai ? 0 : ai,
        aI = void 0 === au ? eV._e : au,
        aS = (0, u.gh)(ej.PR),
        aR = (0, g.useId)(),
        { layout$: aE, quickChatStashedEdge$: ak, activityStackMaxViewportHeight$: aO } = (0, u.uO)(tk, aR),
        a_ = t3?.isStationary ?? !1,
        aT = !aC,
        aN = ae && aT,
        aP = ae && (aM || aN),
        aL = (0, u.Ul)(iz.k)
      t2[0] !== ac ? ((t = ac.flatMap(nY)), (t2[0] = ac), (t2[1] = t)) : (t = t2[1])
      let aF = (0, u._U)(ny, t),
        aq = (0, u.Ul)(tx),
        aj = (0, u.Ul)(aK.P2),
        aD = (0, eB.Zj)("620613358"),
        aU = (0, eq.w)(),
        [aV, aH] = (0, g.useState)(!1),
        aB = a_ || aD || aV
      t2[2] !== aC || t2[3] !== al
        ? ((a = { selectedAvatar: al, isPetVisible: aC }), (t2[2] = aC), (t2[3] = al), (t2[4] = a))
        : (a = t2[4])
      let aX = (function (e) {
          let t = (0, u.gh)(eE.u),
            a = (0, y.A)(),
            { accountId: i, authMethod: n, userId: r } = (0, ea.As)(),
            l = (0, er.K5)(),
            { activeMode: s } = (0, ei.c)(),
            {
              agentMode: c,
              isAgentModePending: p,
              permissionProfileId: f,
              shouldSendPermissionOverrides: m,
            } = (0, en.Ap)({ conversationId: null, cwdOverride: l.cwd ?? void 0, hostId: l.hostId }),
            { serviceTierSettings: h } = (0, eo.k)(),
            { isCapable: v, isLoading: w } = (0, u._U)(b.G, { name: "voice.realtime" }),
            C = (0, u.Ul)(eA.g_),
            M = (0, u.Ul)(ed.eu),
            A = v && (C?.session.greetingEnabled === !0 || M?.session.greetingEnabled === !0) && "chatgpt" === n,
            { data: S } = (0, ek.uA)({ accountId: i, enabled: A, userId: r }),
            R = (0, u.Ul)(eh.uD),
            E = (0, u.Ul)(eC.gL),
            k = (0, u.Ul)(eh.Fe),
            O = (0, u.Ul)(eh.Xz),
            _ = (0, u.Ul)(eh.RQ),
            T = (0, u.Ul)(eh.Bw),
            N = (0, u.Ul)(eb._A),
            P = (0, u.Ul)(e_.B),
            [L, q] = (0, g.useState)(!1),
            [j, D] = (0, g.useState)(null),
            U = (0, g.useRef)(!1),
            V = (0, g.useRef)(!1),
            H = (0, g.useRef)(0),
            B = (0, g.useRef)(null),
            X = (0, g.useRef)(null),
            W = (0, g.useRef)(!1),
            Y = (0, g.useRef)(!1),
            [z, $] = (0, g.useState)(!1),
            [G, Q] = (0, g.useState)(null),
            Z = (0, g.useRef)(null),
            J = null != j && "starting" === T,
            et = null != C,
            eL =
              v &&
              et &&
              !z &&
              null == R &&
              "inactive" === T &&
              navigator.mediaDevices?.getUserMedia != null &&
              "u" > typeof RTCPeerConnection,
            eF = !l.isActiveWorkspaceRootLoading && !p,
            eq = eL && eF,
            ej = () => {
              null == t.get(eh.uD) &&
                "inactive" === t.get(eh.Bw) &&
                (q(!1), eR.appServices.realtimeVoiceRuntime?.cancelRealtimeSessionStart())
            },
            eD = () => {
              ;(null != Z.current && (window.clearTimeout(Z.current), (Z.current = null)), Q(null))
            },
            eU = (e) => {
              ;(eD(),
                Q(
                  e instanceof DOMException && "NotAllowedError" === e.name
                    ? a.formatMessage({
                        id: "composer.realtime.microphonePermissionError",
                        defaultMessage: "Microphone access is required to start voice chat",
                      })
                    : (0, d.Rt_)(e) ||
                        a.formatMessage({
                          id: "avatarOverlay.realtime.connectionError",
                          defaultMessage: "Connection failed",
                        }),
                ),
                (Z.current = window.setTimeout(() => {
                  ;((Z.current = null), Q(null))
                }, d.zeK)))
            },
            eV = async (i) => {
              let n = null == i.productExperience ? void 0 : eP[i.productExperience],
                r = H.current + 1
              ;((H.current = r), B.current?.(), (B.current = null))
              let u =
                  "avatar_overlay_button_new_thread" === i.source && null != e
                    ? (0, F.K)(e.selectedAvatar.id, e.isPetVisible)
                    : void 0,
                p = u === o.CodexMiniAppearance.CODEX_MINI_APPEARANCE_DEFAULT_PET ? e?.selectedAvatar.id : void 0,
                g = (0, eI.m5)(i),
                y,
                w = "exact" === g.type,
                C = "composer_button_existing_thread" === i.source && !0 === i.isTransfer,
                b = "composer_button_new_thread" === i.source,
                M = w ? g.locator.hostId : g.hostId,
                A = (0, eI.aC)(t, M, i.productExperience),
                E = w && (await (0, ex.VR)(t, g.locator))
              if (H.current !== r) return
              let k = w && ((!C && "in-window" === i.preferredPresentationSurface) || E) ? t.get(ed.eu) : t.get(eA.g_),
                O = null != k,
                _ = "global-overlay" !== i.preferredPresentationSurface
              if (b && null != R) {
                W.current = !0
                try {
                  await em.E.stop(t, R)
                } catch (e) {
                  throw ((W.current = !1), e)
                }
              } else if (_ && null != R && !C) {
                let e = t.get(eb._A),
                  a =
                    "inactive" !== e.phase && e.locator.conversationId === R
                      ? e.locator
                      : { conversationId: R, hostId: M }
                ;((0, eM._x)({
                  locator: a,
                  surface: "in-window" === e.preferredPresentationSurface ? "in-window" : "main-thread",
                }),
                  K.O1.dispatchMessage("open-in-main-window", { path: (0, d._RT)(a.conversationId) }))
                return
              }
              if (H.current !== r) return
              if (
                !(b || C
                  ? v &&
                    O &&
                    !z &&
                    null == t.get(eh.uD) &&
                    "inactive" === t.get(eh.Bw) &&
                    navigator.mediaDevices?.getUserMedia != null &&
                    "u" > typeof RTCPeerConnection
                  : eL && O) ||
                null == k
              ) {
                let e = "session_already_starting"
                v
                  ? null != k && O
                    ? navigator.mediaDevices?.getUserMedia == null
                      ? (e = "microphone_unavailable")
                      : "u" < typeof RTCPeerConnection && (e = "webrtc_unavailable")
                    : (e = "configuration_not_ready")
                  : (e = "voice_disabled")
                let r = Error(
                  a.formatMessage(
                    {
                      id: "avatarOverlay.realtime.startUnavailable",
                      defaultMessage: "Voice chat is not ready ({reason})",
                    },
                    { reason: e },
                  ),
                )
                if ("microphone_unavailable" === e || "webrtc_unavailable" === e)
                  try {
                    ;((0, ev.ox)(
                      r,
                      o.CodexRealtimeVoiceStartupMediaFailureReason
                        .CODEX_REALTIME_VOICE_STARTUP_MEDIA_FAILURE_REASON_MEDIA_APIS_UNAVAILABLE,
                    ),
                      new ey.F6(t, crypto.randomUUID(), i.source, n).fail(
                        o.CodexRealtimeVoiceStartupFailureReason
                          .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_MICROPHONE_OR_MEDIA_FAILURE,
                        r,
                      ))
                  } catch {}
                throw (_ || eU(r), r)
              }
              if (!w && !eF) {
                let e = Error(
                  a.formatMessage({
                    id: "avatarOverlay.realtime.workspaceNotReady",
                    defaultMessage: "Voice chat cannot start until the workspace is ready",
                  }),
                )
                throw (_ || eU(e), e)
              }
              E && (0, ec.qo)(t)
              let T = (0, eT.ie)(t, "765410072"),
                N =
                  ("composer_button_existing_thread" === i.source && i.voiceModeSupported) || (0, eS.d)(t.get(I.B0, M)),
                L = k.existingThreadVoiceEnabled && N,
                j = L ? k : { ...k, existingThreadVoiceEnabled: !1 },
                Y = T
                  ? `${j.session.basePrompt}

${eg.X7}`
                  : j.session.basePrompt,
                G = crypto.randomUUID()
              X.current?.cancel(
                o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                o.CodexRealtimeVoiceStartupCancellationOrigin
                  .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
              )
              let Q = new ey.F6(t, G, i.source, n)
              ;((X.current = Q), q(_), $(!0), D(null), (U.current = t.get(eh.Fe)), (V.current = t.get(eh.Xz)))
              let Z = !0,
                J = null,
                et = () => {
                  Z &&
                    ((Z = !1),
                    J?.then((e) => {
                      e.stop()
                    }).catch(() => {}))
                },
                ea = () => (
                  null != J ||
                    (J = ey.F6.trackOperation(
                      Q,
                      o.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_MICROPHONE_SETUP,
                      () =>
                        ef.N.start(Q.createMediaSetupAnalytics(), () => {
                          if (H.current !== r) throw new DOMException("Voice startup was cancelled", "AbortError")
                          if (E)
                            try {
                              ;(0, ec.qo)(t)
                            } catch {
                              throw (
                                eB("user_cancelled"),
                                new DOMException("Voice startup was cancelled", "AbortError")
                              )
                            }
                        }),
                    ))
                      .then((e) => {
                        H.current !== r
                          ? et()
                          : (Q.mark(
                              o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_MICROPHONE_READY,
                            ),
                            e.setMuted(U.current),
                            D(e))
                      })
                      .catch(() => {}),
                  J
                ),
                ei = () => {
                  if (((0, ec.qo)(t), null != B.current)) return
                  let e = t.watch(({ get: e }) => {
                    H.current !== r || "active" === e(eh.Bw) || e(ec.VK) || eB("user_cancelled")
                  })
                  B.current = () => {
                    ;(e(), et())
                  }
                }
              ;(E && ei(), (w && !E) || ea())
              let en = !1,
                eo = !1,
                er =
                  o.CodexRealtimeVoiceStartupFailureReason
                    .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_THREAD_OPEN_OR_CREATE_FAILURE
              await (async () => {
                try {
                  let e = "composer_button_new_thread" === i.source ? i.memoryPreferences : (t.get(el.bz) ?? void 0),
                    n =
                      "composer_button_new_thread" === i.source && void 0 !== i.activeCollaborationMode
                        ? i.activeCollaborationMode
                        : s
                  ;(await (0, ep.x)({
                    scope: t,
                    startupAnalytics: Q,
                    activeCollaborationMode:
                      null == n || T || null != y
                        ? n
                        : {
                            mode: "default",
                            settings: {
                              model: n.settings.model,
                              reasoning_effort: n.settings.reasoning_effort,
                              developer_instructions: null,
                            },
                          },
                    activateRealtimeConversation: async (e, n) => {
                      if (w && !E) {
                        if (((E = await (0, ex.VR)(t, { hostId: M, conversationId: e })), H.current !== r))
                          return "app_cancelled"
                        E && ei()
                      }
                      let l =
                        C && "in-window" === i.preferredPresentationSurface && !t.get(eu.Rr, { hostId: M, threadId: e })
                          ? "main-thread"
                          : i.preferredPresentationSurface
                      ;(Q.mark(o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_THREAD_READY),
                        (er =
                          o.CodexRealtimeVoiceStartupFailureReason
                            .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_MICROPHONE_OR_MEDIA_FAILURE))
                      let s = await ea().catch((e) => {
                        if (H.current !== r && e instanceof DOMException && "AbortError" === e.name) return null
                        if (_ && e instanceof DOMException && "NotAllowedError" === e.name) {
                          let e = Error(ex.zW)
                          throw (
                            Q.recordErrorOperation(
                              e,
                              o.CodexRealtimeVoiceStartupOperation
                                .CODEX_REALTIME_VOICE_STARTUP_OPERATION_MICROPHONE_SETUP,
                            ),
                            (0, ev.ox)(
                              e,
                              o.CodexRealtimeVoiceStartupMediaFailureReason
                                .CODEX_REALTIME_VOICE_STARTUP_MEDIA_FAILURE_REASON_MICROPHONE_PERMISSION_DENIED,
                            ),
                            e
                          )
                        }
                        throw e
                      })
                      if (
                        null == s ||
                        H.current !== r ||
                        ((er =
                          o.CodexRealtimeVoiceStartupFailureReason
                            .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_VOICE_OR_CONFIG_PREPARATION_FAILURE),
                        null != n && (0, el.To)(t, e, n, void 0),
                        (L && w) ||
                          P?.[eO.hW] !== !0 ||
                          (await ey.F6.trackOperation(
                            Q,
                            o.CodexRealtimeVoiceStartupOperation
                              .CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_SETTINGS_UPDATE,
                            () => (0, x.V)(t, M).updateThreadSettingsForNextTurn(e, { summary: "detailed" }),
                          )),
                        H.current !== r)
                      )
                        return (
                          Q.cancel(
                            o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                            o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
                          ),
                          "app_cancelled"
                        )
                      if (E)
                        try {
                          ;(0, ec.qo)(t)
                        } catch {
                          return (await eB("user_cancelled"), "app_cancelled")
                        }
                      ;((Z = !1),
                        (er =
                          o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_UNKNOWN))
                      let c = await em.E.start(t, {
                        analyticsSessionId: G,
                        codexResponseItemPrefix: j.session.codexResponseItemPrefix,
                        codexResponsesAsItems: j.session.codexResponsesAsItems,
                        conversationId: e,
                        hostId: M,
                        handoffContext: "composer_button_existing_thread" === i.source ? i.handoffContext : void 0,
                        isWorkCall: A,
                        initiallyMicrophoneMuted: U.current,
                        initiallyMuted: V.current,
                        isTransfer: C,
                        microphone: s,
                        outputModality: "audio",
                        onTransfer: async (a, n) => {
                          let o = t.get(eM.qE)?.surface ?? i.preferredPresentationSurface
                          try {
                            if (
                              a.hostId === d.iwv &&
                              (await Promise.all([
                                (0, x.V)(t, a.hostId).loadRecentConversationIds([a.conversationId]),
                                t.query.getOrFetch(es.cloudAeonByThreadId$, a.conversationId),
                              ]),
                              t.get(eh.uD) !== e)
                            )
                              return
                            ;((W.current = !0),
                              "global-overlay" !== o &&
                                K.O1.dispatchMessage("open-in-main-window", { path: (0, d._RT)(a.conversationId) }),
                              await em.E.stop(t, e, void 0, { playEndSound: !1, preserveGoal: !0 }),
                              (0, ew.ao)(),
                              await eV({
                                handoffContext: n,
                                isTransfer: !0,
                                locator: a,
                                preferredPresentationSurface: o,
                                source: "composer_button_existing_thread",
                                productExperience: i.productExperience,
                                voiceModeSupported:
                                  a.hostId === M ? N : a.hostId === d.iwv || (0, eS.d)(t.get(I.B0, a.hostId)),
                              }))
                          } catch (t) {
                            let e = { stack: [], error: void 0, hasError: !1 }
                            try {
                              throw (
                                (W.current = !1),
                                (0, ee.mS)(e, eR.appServices.realtimeVoice?.cancelTransfer(), !1),
                                eU(t),
                                t
                              )
                            } catch (t) {
                              ;((e.error = t), (e.hasError = !0))
                            } finally {
                              ;(0, ee.hk)(e)
                            }
                          }
                        },
                        preferredPresentationSurface: l,
                        prompt: Y,
                        realtimeContinuity: j.session.continuity,
                        realtimeContinuityPrompt: j.session.continuityPrompt,
                        realtimeEndInstructions: L ? j.session.realtimeEndInstructions : void 0,
                        realtimeMemorySummaryEnabled: j.session.memorySummaryEnabled && !0 === t.get(el.Wk, e),
                        realtimeMemorySummaryPrompt: j.session.memorySummaryPrompt,
                        realtimeSessionOverrides: j.session.overrides,
                        realtimeStartInstructions: L ? j.session.realtimeStartInstructions : void 0,
                        source: i.source,
                        miniAppearance: u,
                        miniBuiltInPetId: p,
                        startupAnalytics: Q,
                        greetingEnabled: j.session.greetingEnabled,
                        userName: S?.displayName ?? null,
                      })
                      if (((W.current = !1), (eo = "active" === c), "active" !== c)) {
                        if ("user_cancelled" === c || H.current !== r) return c
                        if ("busy" === c)
                          throw (
                            (er =
                              o.CodexRealtimeVoiceStartupFailureReason
                                .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_BUSY_OR_HOST_CLAIM_FAILURE),
                            Error(
                              a.formatMessage({
                                id: "avatarOverlay.realtime.sessionAlreadyStarting",
                                defaultMessage: "Voice chat is already active or starting in another window",
                              }),
                            )
                          )
                        throw Error(
                          a.formatMessage({
                            id: "avatarOverlay.realtime.startInterrupted",
                            defaultMessage: "Voice chat was interrupted before the session could start",
                          }),
                        )
                      }
                      return (Q.mark(o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_ACTIVE),
                      H.current !== r)
                        ? (em.E.cancelStart(t), "app_cancelled")
                        : (_ && (0, eM._x)({ locator: { conversationId: e, hostId: M }, surface: "main-thread" }),
                          "active")
                    },
                    agentMode: c,
                    currentLocalExecutionCwd: l.cwd ?? "",
                    intent: g,
                    memoryPreferences: e,
                    onStartError: (e) => {
                      _ || eU(e)
                    },
                    serviceTier: h.serviceTierForRequest,
                    permissionProfileId: f,
                    projectId: "composer_button_new_thread" === i.source ? i.projectId : void 0,
                    pageCompanion: y,
                    shouldSendPermissionOverrides: m,
                    treatment: j,
                    threadToolsEnabled: !0,
                    workspaceRootsForLocalExecution: [],
                  }),
                    eo ||
                      Q.cancel(
                        H.current === r
                          ? o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_USER_CANCELLED
                          : o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                        H.current === r
                          ? o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_UNKNOWN
                          : o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
                      ))
                } catch (e) {
                  throw ((en = !0), q(!1), eo || Q.fail(er, e), e)
                }
              })().finally(() => {
                ;(H.current === r && (B.current?.(), (B.current = null)),
                  Z && H.current === r && et(),
                  H.current === r && ($(!1), en || ej()),
                  X.current === Q && (X.current = null))
              })
            },
            eH = (0, g.useEffectEvent)(eV),
            eB = async (e) => {
              let a = B.current
              ;((B.current = null),
                null == a ? j?.stop() : a(),
                X.current?.cancel(
                  o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_USER_CANCELLED,
                  "startup_timeout" === e
                    ? o.CodexRealtimeVoiceStartupCancellationOrigin
                        .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_HOST_TIMEOUT
                    : o.CodexRealtimeVoiceStartupCancellationOrigin
                        .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_USER_ACTION,
                ),
                (H.current += 1),
                D(null),
                $(!1),
                q(!1))
              let i = t.get(eh.uD)
              ;(em.E.cancelStart(t, e), null == i && (t.set(eh.Fe, !1), t.set(eh.Xz, !1)))
            },
            eX = (0, g.useEffectEvent)(eB)
          ;((0, g.useEffect)(
            () => () => {
              let e = X.current
              e?.finishSession("app_unmounted")
              let a = t.get(eh.Bw)
              ;("active" === a || "stopping" === a
                ? ("stopping" === a && (H.current += 1), B.current?.(), (B.current = null))
                : eX("user_cancelled"),
                null != Z.current && window.clearTimeout(Z.current))
            },
            [t],
          ),
            (0, g.useEffect)(() => {
              let e = { stack: [], error: void 0, hasError: !1 }
              try {
                let t = eR.appServices.realtimeVoiceRuntime
                if (null == t || !et || w) return
                return (
                  (0, ee.mS)(
                    e,
                    t.registerRealtimeStarter(
                      async (e) => {
                        await eH(e)
                      },
                      async (e) => {
                        await eX(e)
                      },
                      eF,
                    ),
                    !1,
                  ),
                  () => {
                    let e = { stack: [], error: void 0, hasError: !1 }
                    try {
                      ;(0, ee.mS)(e, t.unregisterRealtimeStarter(), !1)
                    } catch (t) {
                      ;((e.error = t), (e.hasError = !0))
                    } finally {
                      ;(0, ee.hk)(e)
                    }
                  }
                )
              } catch (t) {
                ;((e.error = t), (e.hasError = !0))
              } finally {
                ;(0, ee.hk)(e)
              }
            }, [eF, et, w]))
          let eW = () => {
            q(!1)
          }
          ;((0, K.JX)("avatar-overlay-explicit-pet-opened", eW),
            (0, K.JX)("notch-overlay-expand", eW),
            (0, g.useLayoutEffect)(() => {
              if ("inactive" !== T) {
                Y.current = !0
                return
              }
              if (W.current) {
                ;((W.current = !1), (Y.current = !1))
                return
              }
              if (Y.current) {
                if (z) {
                  Y.current = !1
                  return
                }
                ;((Y.current = !1), eR.appServices.realtimeVoiceRuntime?.completeRealtimeSession())
              }
            }, [z, T]))
          let eY = T
          return (
            ("active" !== T && "inactive" !== N.phase && null != N.transferDestination) || (z && "inactive" === T)
              ? (eY = "starting")
              : "inactive" === T && L && (eY = "stopping"),
            {
              canStart: eq,
              caption: E,
              conversationId: R,
              isMicrophoneMuted: k,
              isMuted: O,
              phase: eY,
              startError: G,
              start: async () => {
                if (eq) {
                  eD()
                  try {
                    await eR.appServices.realtimeVoiceRuntime?.requestRealtimeStart(
                      { source: "avatar_overlay_button_new_thread" },
                      void 0,
                    )
                  } catch (e) {
                    ;(eN.v.error("Failed to request realtime voice from the avatar overlay", {
                      safe: {},
                      sensitive: { error: e },
                    }),
                      eU(e))
                  }
                }
              },
              stop: async () => {
                let e = t.get(eh.uD),
                  a = t.get(eh.Bw)
                if (z && (null == e || "active" !== a)) {
                  ;(await eB("user_cancelled"), ej())
                  return
                }
                null != e && "inactive" !== a && (await em.E.stop(t, e))
              },
              voiceActivity: _,
              toggleMicrophoneMute: () => {
                if (J) {
                  let e = !t.get(eh.Fe)
                  ;((U.current = e), null == R ? (j.setMuted(e), t.set(eh.Fe, e)) : em.E.toggleMicrophoneMute(t, R))
                  return
                }
                null != R && "active" === T && ((U.current = !t.get(eh.Fe)), em.E.toggleMicrophoneMute(t, R))
              },
              toggleMute: () => {
                if (J) {
                  ;((V.current = !t.get(eh.Xz)), null == R ? t.set(eh.Xz, V.current) : em.E.toggleMute(t, R))
                  return
                }
                null != R && "active" === T && ((V.current = !t.get(eh.Xz)), em.E.toggleMute(t, R))
              },
            }
          )
        })(a),
        aW = ar ?? aX,
        aY = (0, u.Ul)(eC.Rq),
        az = aV && "active" !== aW.phase,
        a$ = "inactive" === aW.phase && az ? "starting" : aW.phase,
        aG = (0, u.Ul)(eb._A),
        aQ = "inactive" !== aG.phase && null != aG.transferDestination,
        aZ = (0, u.Ul)(eM.qE),
        aJ = aZ?.surface ?? null,
        a1 = aU && "global-overlay" === aJ && aZ?.handoff != null,
        a0 = null == aG || "inactive" === aG.phase ? null : aG.locator,
        a2 = ar?.isSessionActive ?? (null != aG && "inactive" !== aG.phase)
      t2[5] !== aW.conversationId || t2[6] !== aG || t2[7] !== ar
        ? ((r =
            null == ar
              ? (0, eb.FM)(aG, aW.conversationId)
              : "active" === ar.phase || ("stopping" === ar.phase && "idle" !== ar.voiceActivity)),
          (t2[5] = aW.conversationId),
          (t2[6] = aG),
          (t2[7] = ar),
          (t2[8] = r))
        : (r = t2[8])
      let a3 = r,
        a4 = "inactive" !== a$ && (a2 || "starting" === aW.phase) && (null == aJ || "global-overlay" === aJ),
        [a5, a6] = (0, g.useState)(!1),
        [a7, a8] = (0, g.useState)(null),
        a9 = ar?.petOpenIntent ?? a5,
        ie = a4 ? a$ : "inactive",
        it = !aN && (aU ? a2 && !a4 && !a9 : (a2 || a4) && !(aD && (a4 || a9))),
        ia = aD && a4 && aW.isMuted,
        ii = ia ? (aY ?? aW.caption) : null
      t2[9] !== a0 ? ((s = { locator: a0, hideWhileResponding: !0 }), (t2[9] = a0), (t2[10] = s)) : (s = t2[10])
      let io = (0, u._U)(eL.l, s)
      t2[11] !== a2 || t2[12] !== a0 || t2[13] !== aU
        ? ((c = {
            enabled: a2,
            isEligible: !0,
            locator: a0,
            surface: "global-overlay",
            usesNativeOverlayTransition: aU,
          }),
          (t2[11] = a2),
          (t2[12] = a0),
          (t2[13] = aU),
          (t2[14] = c))
        : (c = t2[14])
      let ir = (0, eM.cr)(c),
        il = (0, eM.UB)(a0),
        is = a0?.hostId
      t2[15] !== a4 || t2[16] !== is
        ? ((p = { enabled: a4, hostId: is }), (t2[15] = a4), (t2[16] = is), (t2[17] = p))
        : (p = t2[17])
      let { data: ic } = (0, _.Ad)(p),
        iu = (0, y.A)(),
        id = (0, u.Ul)(eF.b_),
        ip = (0, u.Ul)(ak),
        im = (0, u.Ul)(aO),
        [ih, ig] = (0, g.useState)(!0),
        iv = (0, u.Ul)(nv) ?? (0, eX.TB)(ng, !0),
        [iy, iw] = (0, g.useState)(null),
        iC = iv || null != iy,
        [ib, ix] = (0, g.useState)(!1),
        [iM] = (0, g.useState)(nW),
        [iA, iI] = (0, g.useState)(!1),
        [iS, iR] = (0, g.useState)(!1),
        iE = ar?.petControlsAppearance ?? d.JCZ,
        [ik, iO] = (0, g.useState)(""),
        i_ = (0, g.useRef)(0)
      t2[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { appshots: [], threadTarget: null }), (t2[18] = f))
        : (f = t2[18])
      let [iT, iN] = (0, g.useState)(f),
        { appshots: iP, threadTarget: iL } = iT,
        iF = (0, u.Ul)(U.gy),
        iq = (0, u.Ul)(U.PA),
        ij = (0, u.Ul)(U.a$),
        iD = iF.length > 0 || iq.length > 0 || ij.length > 0,
        iV = (0, g.useRef)(0),
        iH = (0, g.useRef)(0)
      t2[19] === Symbol.for("react.memo_cache_sentinel") ? ((m = new Set()), (t2[19] = m)) : (m = t2[19])
      let iB = (0, g.useRef)(m),
        [iX] = (0, g.useState)(nX),
        iW = (0, Q.Qz)(Q.fI),
        [iY, iK] = (0, g.useState)(void 0),
        i$ = iL?.conversationId ?? null
      t2[20] !== iu || t2[21] !== aS || t2[22] !== i$
        ? ((C = { scope: aS, conversationId: i$, intl: iu }), (t2[20] = iu), (t2[21] = aS), (t2[22] = i$), (t2[23] = C))
        : (C = t2[23])
      let { supportsImageInputs: iG, notifyImageInputUnsupported: iQ } = (0, W.I)(C)
      t2[24] !== iX || t2[25] !== iu || t2[26] !== iW || t2[27] !== iQ || t2[28] !== aS || t2[29] !== iG
        ? ((A = () => (
            (0, H.td)(aS, iX),
            (0, D.F)({
              scope: aS,
              attachmentGeneration: iH,
              canceledPendingFileAttachmentIds: iB.current,
              canCopyBrowserFileAttachments: !1,
              composerMode: "local",
              executionHostConfig: iW,
              executionHostId: Q.fI,
              intl: iu,
              notifyImageInputUnsupported: iQ,
              supportsImageInputs: iG,
              setAddedFiles: (e) => (0, U.Rh)(aS, "addedFiles", e),
              setFileAttachments: (e) => (0, U.Rh)(aS, "fileAttachments", e),
              setImageAttachments: (e) => (0, U.Rh)(aS, "imageAttachments", e),
              setPendingFileAttachments: (e) => aS.set(H.UF, e),
            })
          )),
          (t2[24] = iX),
          (t2[25] = iu),
          (t2[26] = iW),
          (t2[27] = iQ),
          (t2[28] = aS),
          (t2[29] = iG),
          (t2[30] = A))
        : (A = t2[30])
      let i6 = A
      ;(t2[31] !== aS
        ? ((S = () => () => {
            ;((iH.current = iH.current + 1), (iV.current = iV.current + 1), (0, H.Se)(aS))
          }),
          (R = [aS, iH]),
          (t2[31] = aS),
          (t2[32] = S),
          (t2[33] = R))
        : ((S = t2[32]), (R = t2[33])),
        (0, g.useEffect)(S, R),
        t2[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = { pendingCaptureCount: 0, response: void 0, startsCollapsed: !1 }), (t2[34] = E))
          : (E = t2[34]))
      let [ni, nn] = (0, g.useState)(E)
      t2[35] === Symbol.for("react.memo_cache_sentinel") ? ((k = new Map()), (t2[35] = k)) : (k = t2[35])
      let no = (0, g.useRef)(k),
        nl = (0, g.useRef)(0),
        ns = ik.length > 0 || iP.length > 0 || iD || ni.pendingCaptureCount > 0
      ;(t2[36] === Symbol.for("react.memo_cache_sentinel") ? ((O = []), (t2[36] = O)) : (O = t2[36]),
        t2[37] !== aA ? ((P = { resetRevision: aA, starts: O }), (t2[37] = aA), (t2[38] = P)) : (P = t2[38]))
      let [nc, nu] = (0, g.useState)(P)
      t2[39] !== aA || t2[40] !== nc.resetRevision || t2[41] !== nc.starts
        ? ((L = nc.resetRevision === aA ? nc.starts : []),
          (t2[39] = aA),
          (t2[40] = nc.resetRevision),
          (t2[41] = nc.starts),
          (t2[42] = L))
        : (L = t2[42])
      let nd = L
      ;(t2[43] === Symbol.for("react.memo_cache_sentinel") ? ((j = []), (t2[43] = j)) : (j = t2[43]),
        t2[44] !== aA ? ((et = { resetRevision: aA, flights: j }), (t2[44] = aA), (t2[45] = et)) : (et = t2[45]))
      let [np, nf] = (0, g.useState)(et)
      t2[46] !== ac ? ((eU = ac.flatMap(nB)), (t2[46] = ac), (t2[47] = eU)) : (eU = t2[47])
      let nC = (0, u._U)(eD.iS, eU),
        [nb, nx] = (0, g.useState)(null),
        [nM, nA] = (0, g.useState)(!1)
      ;(t2[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((eH = () => {
            let e = () => nA(!1)
            return (window.addEventListener("blur", e), () => window.removeEventListener("blur", e))
          }),
          (eW = []),
          (t2[48] = eH),
          (t2[49] = eW))
        : ((eH = t2[48]), (eW = t2[49])),
        (0, g.useEffect)(eH, eW))
      let nI = (0, g.useRef)(null),
        nS = "editor" === nb,
        [nR, nE] = (0, g.useState)(null),
        [nz, nK] = (0, g.useState)(null),
        [n$, nG] = (0, g.useState)(!1),
        [nQ, nZ] = (0, g.useState)(null),
        [nJ, n1] = (0, g.useState)(null)
      t2[50] === Symbol.for("react.memo_cache_sentinel") ? ((eY = []), (t2[50] = eY)) : (eY = t2[50])
      let [n0, n2] = (0, g.useState)(eY)
      t2[51] === Symbol.for("react.memo_cache_sentinel") ? ((ez = {}), (t2[51] = ez)) : (ez = t2[51])
      let [n3, n4] = (0, g.useState)(ez),
        [n5, n6] = (0, g.useState)(0),
        [n7, n8] = (0, g.useState)(null),
        [n9, oe] = (0, g.useState)(nH),
        [ot, oa] = (0, g.useState)(nV)
      t2[52] !== aw || t2[53] !== aN || t2[54] !== al || t2[55] !== as
        ? ((eK = () => {
            var e, t
            return aw && !aN
              ? ((e = al),
                (t = as),
                (0, q._I)(e, t) || (0, eX.TB)(nh, []).includes(e.id)
                  ? null
                  : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() })
              : null
          }),
          (t2[52] = aw),
          (t2[53] = aN),
          (t2[54] = al),
          (t2[55] = as),
          (t2[56] = eK))
        : (eK = t2[56])
      let [oi] = (0, g.useState)(eK),
        on =
          null == oi
            ? null
            : (function ({ intl: e, petName: t, startedAtMs: a }) {
                return {
                  action: null,
                  body: e.formatMessage({
                    id: "avatarOverlay.firstAwake.body",
                    defaultMessage: "I'm here to help keep your ChatGPT sessions moving",
                  }),
                  controlTarget: null,
                  expiresAtMs: a + 8e3,
                  id: "first-awake",
                  isLoading: !1,
                  kind: "first-awake",
                  level: "info",
                  localConversationId: null,
                  notificationPreferenceId: null,
                  source: "local",
                  title: e.formatMessage(
                    { id: "avatarOverlay.firstAwake.title", defaultMessage: "Hi, I'm {petName}" },
                    { petName: t },
                  ),
                  turnKey: null,
                  updatedAtMs: a,
                  waitingRequest: null,
                }
              })({ intl: iu, petName: oi.petName, startedAtMs: oi.startedAtMs }),
        oo = (function ({ activities: e, intl: t, nowMs: a = Date.now(), realtimeThreadId: i }) {
          return e.flatMap((e) => {
            var n
            if (null == i || e.realtimeThread.conversationId !== i || a >= Z(e)) return []
            let o = (function (e, t) {
              switch (e.kind) {
                case "thread-created":
                  return {
                    body:
                      e.prompt ??
                      t.formatMessage({
                        id: "realtimeVoice.taskCreated.body",
                        defaultMessage: "Working on delegated request",
                      }),
                    title:
                      null == e.taskTitle
                        ? t.formatMessage({ id: "realtimeVoice.taskCreated.title", defaultMessage: "Created chat" })
                        : t.formatMessage(
                            { id: "realtimeVoice.taskCreatedWithTitle.title", defaultMessage: "Created chat: {title}" },
                            { title: e.taskTitle },
                          ),
                  }
                case "thread-message": {
                  let a
                  return (
                    (a =
                      "from-task" === e.direction
                        ? "completed" === e.taskStatus
                          ? null == e.taskTitle
                            ? t.formatMessage({
                                id: "realtimeVoice.taskReturned.title",
                                defaultMessage: "Task returned",
                              })
                            : t.formatMessage(
                                {
                                  id: "realtimeVoice.taskReturnedWithTitle.title",
                                  defaultMessage: "Returned from {title}",
                                },
                                { title: e.taskTitle },
                              )
                          : null == e.taskTitle
                            ? t.formatMessage({ id: "realtimeVoice.taskUpdate.title", defaultMessage: "Task update" })
                            : t.formatMessage(
                                {
                                  id: "realtimeVoice.taskUpdateWithTitle.title",
                                  defaultMessage: "Update from {title}",
                                },
                                { title: e.taskTitle },
                              )
                        : null == e.taskTitle
                          ? t.formatMessage({
                              id: "realtimeVoice.taskMessageSent.title",
                              defaultMessage: "Message sent",
                            })
                          : t.formatMessage(
                              { id: "realtimeVoice.taskMessageSentWithTitle.title", defaultMessage: "Sent to {title}" },
                              { title: e.taskTitle },
                            )),
                    {
                      body:
                        e.message ??
                        (function (e, t) {
                          switch (e.taskStatus) {
                            case "pending":
                            case "running":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.running",
                                defaultMessage: "Task is still working",
                              })
                            case "completed":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.completed",
                                defaultMessage: "Task finished",
                              })
                            case "interrupted":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.interrupted",
                                defaultMessage: "Task was interrupted",
                              })
                            case "failed":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.failed",
                                defaultMessage: "Task failed",
                              })
                            case "stopped":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.stopped",
                                defaultMessage: "Task stopped",
                              })
                            case "not-found":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.notFound",
                                defaultMessage: "Chat is no longer available",
                              })
                            case null:
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.generic",
                                defaultMessage: "Task sent an update",
                              })
                          }
                        })(e, t),
                      title: a,
                    }
                  )
                }
              }
            })(e, t)
            return [
              {
                action: { path: (0, d._RT)(e.task.threadId) },
                body: o.body,
                controlTarget:
                  null == e.task.pendingWorktreeId
                    ? { type: "app-server-conversation", conversationId: e.task.threadId }
                    : null,
                expiresAtMs: Z(e),
                id: e.id,
                isLoading: !1,
                kind: "multi-agent",
                level:
                  "thread-created" === (n = e).kind || "to-task" === n.direction
                    ? "info"
                    : "failed" === n.taskStatus || "not-found" === n.taskStatus
                      ? "danger"
                      : "completed" === n.taskStatus
                        ? "success"
                        : "info",
                localConversationId: null == e.task.pendingWorktreeId ? e.task.threadId : null,
                notificationPreferenceId:
                  null == e.task.pendingWorktreeId ? (0, G.z)(e.task.threadId, e.task.hostId) : null,
                source: e.task.hostId === Q.fI ? "local" : "remote-host",
                title: o.title,
                turnKey: e.id,
                updatedAtMs: e.occurredAtMs,
                usesLiveConversationState: !1,
                waitingRequest: null,
              },
            ]
          })
        })({ activities: id.activities, intl: iu, nowMs: ot, realtimeThreadId: aW.conversationId })
      t2[57] !== iu ||
      t2[58] !== aD ||
      t2[59] !== a4 ||
      t2[60] !== io ||
      t2[61] !== a0 ||
      t2[62] !== ic ||
      t2[63] !== ar?.statusText
        ? ((e$ =
            ar?.statusText ??
            (aD && a4 && null != a0
              ? (function ({ intl: e, resolvedApps: t, status: a }) {
                  if (null == a) return null
                  let i = (0, J.i)({ intl: e, resolvedApps: t, status: a })
                  if (null == i) return null
                  let { additionalToolsLabel: n, label: o } = i
                  return null == n ? o : `${o} \xb7 ${n}`
                })({ intl: iu, resolvedApps: ic, status: io })
              : null)),
          (t2[57] = iu),
          (t2[58] = aD),
          (t2[59] = a4),
          (t2[60] = io),
          (t2[61] = a0),
          (t2[62] = ic),
          (t2[63] = ar?.statusText),
          (t2[64] = e$))
        : (e$ = t2[64])
      let or = e$
      t2[65] !== nC || t2[66] !== n9 || t2[67] !== ac
        ? ((eG = (function (e, t, a) {
            let i = null
            for (let n of t) {
              let t = null == n.localConversationId ? void 0 : a.get(n.localConversationId)
              null != t &&
                null != n.turnKey &&
                (i ?? e).has(t) &&
                null == (i ?? e).get(t) &&
                (null == i && (i = new Map(e)), i.set(t, n.turnKey))
            }
            return i ?? e
          })(n9, ac, nC)),
          (t2[65] = nC),
          (t2[66] = n9),
          (t2[67] = ac),
          (t2[68] = eG))
        : (eG = t2[68])
      let ol = eG
      ;(ol !== n9 && oe(ol),
        t2[69] !== ii || t2[70] !== or || t2[71] !== aP
          ? ((eQ = (null != ii && "" !== ii.trim()) || (aP && null != or && "" !== or.trim())),
            (t2[69] = ii),
            (t2[70] = or),
            (t2[71] = aP),
            (t2[72] = eQ))
          : (eQ = t2[72]))
      let os = eQ
      t2[73] !== it || t2[74] !== ac
        ? ((eZ = it ? [] : ac), (t2[73] = it), (t2[74] = ac), (t2[75] = eZ))
        : (eZ = t2[75])
      let oc = (function ({
          clientThreadIdsByConversationId: e,
          dismissedNotificationTurnKeys: t,
          extraNotifications: a = [],
          latestActivityFirst: i = !1,
          mutedNotificationPreferenceIds: n,
          nowMs: o = Date.now(),
          sessions: r,
        }) {
          let l = new Map(
            a
              .flatMap((e) =>
                (null != e.expiresAtMs && o >= e.expiresAtMs) ||
                (null != e.notificationPreferenceId && n.includes(e.notificationPreferenceId)) ||
                t?.get(e.id) === e.turnKey
                  ? []
                  : [
                      {
                        expiresAtMs: e.expiresAtMs,
                        key: e.id,
                        notification: e,
                        notificationPriority:
                          i && "session" === e.kind
                            ? am("running")
                            : (function (e) {
                                switch (e) {
                                  case "activity":
                                    return -2
                                  case "attention":
                                    return -1
                                  case "first-awake":
                                  case "multi-agent":
                                  case "session":
                                    return 4
                                }
                              })(e.kind),
                        sortAtMs: e.updatedAtMs,
                        updatedAtMs: e.updatedAtMs,
                      },
                    ],
              )
              .map((e) => [e.notification.id, e]),
          )
          for (let a of r) {
            let r = null == a.localConversationId ? void 0 : e?.get(a.localConversationId)
            if (
              (null != r && ("idle" !== a.status || null != a.turnKey || n.includes(a.key)) && l.delete(r),
              n.includes(a.key))
            )
              continue
            let s = (function (e, t) {
              if ("idle" === e.status || !e.showInNotificationTray) return null
              let a = (function (e, t) {
                switch (e) {
                  case "running":
                  case "idle":
                    return null
                  case "failed":
                    return t + 36e5
                  case "waiting":
                    return t + 864e5
                  case "review":
                    return t + 6048e5
                }
              })(e.status, e.updatedAtMs)
              return null != a && t >= a
                ? null
                : {
                    expiresAtMs: a,
                    key: e.key,
                    notification: {
                      action: { path: e.actionPath },
                      body: e.subtitle,
                      controlTarget: e.controlTarget,
                      expiresAtMs: a,
                      id: e.key,
                      isLoading: "running" === e.status,
                      kind: "session",
                      level: (function (e) {
                        switch (e) {
                          case "waiting":
                            return "warning"
                          case "failed":
                            return "danger"
                          case "running":
                          case "idle":
                            return "info"
                          case "review":
                            return "success"
                        }
                      })(e.status),
                      localConversationId: e.localConversationId,
                      notificationPreferenceId: e.key,
                      source: e.source,
                      title: (function (e) {
                        var t, a
                        return "waiting" !== e.status || null == e.waitingRequest
                          ? e.title
                          : ((t = e.title),
                            (a = e.waitingRequest),
                            `${a.title} ${a.notificationTitleSeparator ?? "\xb7"} ${t}`)
                      })(e),
                      turnKey: e.turnKey,
                      updatedAtMs: e.updatedAtMs,
                      waitingRequest: "waiting" === e.status ? e.waitingRequest : null,
                    },
                    notificationPriority: am(e.status),
                    sortAtMs: e.sortAtMs,
                    updatedAtMs: e.updatedAtMs,
                  }
            })(a, o)
            null != s &&
              (i && (s.notificationPriority = am("running")),
              (s.notification.id = r ?? s.notification.id),
              t?.get(s.notification.id) !== s.notification.turnKey && l.set(s.notification.id, s))
          }
          let s = [...l.values()]
          return {
            nextNotificationExpiresAtMs: s.reduce(
              (e, t) => (null == t.expiresAtMs || (null != e && e <= t.expiresAtMs) ? e : t.expiresAtMs),
              null,
            ),
            notifications: s
              .sort((e, t) =>
                (function (e, t, a) {
                  let i = e.notificationPriority - t.notificationPriority
                  if (0 !== i) return i
                  if (a) {
                    let a = t.sortAtMs - e.sortAtMs
                    if (0 !== a) return a
                  }
                  if (!a) {
                    let a = t.updatedAtMs - e.updatedAtMs
                    if (0 !== a) return a
                  }
                  return e.key.localeCompare(t.key)
                })(e, t, i),
              )
              .map((e) => e.notification),
          }
        })({
          clientThreadIdsByConversationId: nC,
          dismissedNotificationTurnKeys: ol,
          extraNotifications: a4
            ? oo
            : it
              ? []
              : [
                  ...(null == on ? [] : [on]),
                  ...nd.map((e) => ({
                    action: null,
                    body: iu.formatMessage(na.k.creating),
                    controlTarget: null,
                    expiresAtMs: null,
                    id: e.clientThreadId,
                    isLoading: !0,
                    kind: "session",
                    level: "info",
                    localConversationId: null,
                    notificationPreferenceId: null,
                    source: "local",
                    title: e.thread.title,
                    turnKey: null,
                    updatedAtMs: e.startedAtMs,
                    usesLiveConversationState: !1,
                    waitingRequest: null,
                  })),
                ],
          latestActivityFirst: !0,
          mutedNotificationPreferenceIds: aj,
          nowMs: ot,
          sessions: eZ,
        }),
        ou = oc.nextNotificationExpiresAtMs,
        od = oc.notifications,
        op = aP || (aB && (aW.canStart || null != aW.startError || a4 || od.length > 0)),
        of =
          np.resetRevision === aA && iv
            ? np.flights.filter((e) =>
                od.some((t) => {
                  let { id: a } = t
                  return a === e.notificationId
                }),
              )
            : []
      ;(np.resetRevision !== aA || of.length !== np.flights.length) && nf({ resetRevision: aA, flights: of })
      let om = nd.filter(
        (e) =>
          !ac.some(
            (t) =>
              null != t.localConversationId &&
              nC.get(t.localConversationId) === e.clientThreadId &&
              ("idle" !== t.status || null != t.turnKey || aj.includes(t.key)),
          ),
      )
      ;(nc.resetRevision !== aA || om.length !== nd.length) &&
        (eN.v.debug("Quick Chat pending tasks reconciled", {
          safe: { retiredCount: nd.length - om.length, remainingCount: om.length },
        }),
        nu({ resetRevision: aA, starts: om }))
      let oh = od.map((e) => ({
        copy: tC({
          completedTurnSummary: aF.get(e.notificationPreferenceId ?? e.id),
          intl: iu,
          latestTurnItems:
            "local" === e.source && !1 !== e.usesLiveConversationState ? t5(e.localConversationId) : void 0,
          notification: e,
          notificationCount: od.length,
          threadDetailLevel: aI,
        }),
        notification: e,
      }))
      t2[76] !== iu || t2[77] !== nJ
        ? ((eJ = (e) => {
            let { copy: t, notification: a } = e
            return {
              copy:
                nJ?.notificationId === a.id && nJ.replacedSubtitle === t.subtitle
                  ? { ...t, subtitle: iu.formatMessage({ id: "avatarOverlay.steering", defaultMessage: "Steering" }) }
                  : t,
              notification: a,
            }
          }),
          (t2[76] = iu),
          (t2[77] = nJ),
          (t2[78] = eJ))
        : (eJ = t2[78])
      let og = oh.map(eJ),
        ov = od
          .map((e) =>
            [
              e.id,
              e.title,
              e.body ?? "",
              e.level,
              e.isLoading ? "loading" : "done",
              e.action?.path ?? "",
              null == e.waitingRequest ? "" : ts(e.waitingRequest, iu),
            ].join("\x01"),
          )
          .join("\0")
      t2[79] !== n3
        ? ((e1 = (e) => {
            let { id: t } = e
            return { height: n3[t] ?? d.YMX, id: t }
          }),
          (t2[79] = n3),
          (t2[80] = e1))
        : (e1 = t2[80])
      let oy = od.map(e1),
        ow = (0, d.jNq)({
          expanded: ib,
          items: oy,
          scrollOffset: n5,
          sideSpacingPx: 16,
          viewportRect: { height: im, left: 0, top: 0, width: d.pFD },
        }),
        oC = ac.some(nU),
        ob = aP && a4 && "starting" === a$,
        ox =
          iy?.quickChatExpanded === !0 ||
          null != aW.startError ||
          null != nb ||
          n$ ||
          iP.length > 0 ||
          iD ||
          ik.length > 0,
        oM =
          (a4 && !aN) ||
          null != aW.startError ||
          (!aN && (iA || iS || null != n7)) ||
          ox ||
          (!aN && iC && oy.length > 0),
        [oA, oI] = (0, g.useState)(oM)
      ;(oM && !oA && oI(!0),
        t2[81] !== oM || t2[82] !== ob || t2[83] !== iE.compactDismissDelayMs
          ? ((e0 = () => {
              if (oM || ob) return
              let e = window.setTimeout(() => {
                oI(!1)
              }, iE.compactDismissDelayMs)
              return () => window.clearTimeout(e)
            }),
            (e2 = [oM, ob, iE.compactDismissDelayMs]),
            (t2[81] = oM),
            (t2[82] = ob),
            (t2[83] = iE.compactDismissDelayMs),
            (t2[84] = e0),
            (t2[85] = e2))
          : ((e0 = t2[84]), (e2 = t2[85])),
        (0, g.useEffect)(e0, e2))
      let oS = oM || oA,
        oR = (e, t) => {
          let a
          ;(e !== o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK || null == nI.current) &&
            ((void 0 !== t && t) || !1 === a7
              ? (a = o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_HIDDEN)
              : null != a7 &&
                (a = oS
                  ? iv && od.length > 0
                    ? o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_EXPANDED_WITH_ACTIVITY_PILLS
                    : o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_EXPANDED
                  : o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_COLLAPSED),
            (nI.current = { openMethod: e, initialVisibility: a }))
        },
        oE = (0, g.useRef)(null),
        ok = (0, g.useRef)(null),
        oO = eR.appServices.avatarOverlay,
        o_ = nm && null == t3 && null != oO,
        oT = (0, g.useRef)(null),
        oN = (0, g.useRef)(null),
        oP = (0, g.useRef)(null),
        oL = (0, g.useRef)(null),
        oF = (0, g.useRef)(!1),
        oq = (0, g.useRef)(!1),
        oj = (e, t, a, i) => {
          let n = void 0 === i ? ib : i
          t9.logProductEvent(
            o.CodexAvatarOverlayEvent,
            (0, F.y)({
              action: e,
              hasRunningLocalSession: oC,
              isNotificationTrayOpen: n,
              isPetVisible: aC,
              isVisible: a7 ?? void 0,
              notification: a,
              notificationCount: od.length,
              selectedAvatar: al,
              source: t,
            }),
          )
        },
        oD = (0, g.useEffectEvent)((e) => {
          oj(e, o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED)
        })
      ;(t2[86] !== oi
        ? ((e3 = () => {
            if (null == oi) return
            let e = (0, eX.TB)(nh, [])
            e.includes(oi.avatarId) || (0, eX.jx)(nh, [...e, oi.avatarId])
          }),
          (e4 = [oi]),
          (t2[86] = oi),
          (t2[87] = e3),
          (t2[88] = e4))
        : ((e3 = t2[87]), (e4 = t2[88])),
        (0, g.useEffect)(e3, e4),
        t2[89] !== a7 || t2[90] !== t9 || t2[91] !== oD
          ? ((e5 = () => {
              t9 === $.Cg ||
                null == a7 ||
                (oF.current || ((oF.current = !0), oD(o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPENED)),
                a7 &&
                  !oq.current &&
                  ((oq.current = !0), oD(o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_PRESENTED)))
            }),
            (t2[89] = a7),
            (t2[90] = t9),
            (t2[91] = oD),
            (t2[92] = e5))
          : (e5 = t2[92]),
        t2[93] !== a7 || t2[94] !== t9 ? ((e6 = [a7, t9]), (t2[93] = a7), (t2[94] = t9), (t2[95] = e6)) : (e6 = t2[95]),
        (0, g.useEffect)(e5, e6),
        t2[96] === Symbol.for("react.memo_cache_sentinel")
          ? ((e7 = {
              interactiveRegionRef: ok,
              isPaused: () => null != oE.current,
              onInteractiveChange: nD,
              floatingElementSelectors: nw,
            }),
            (t2[96] = e7))
          : (e7 = t2[96]),
        (0, Y.Q)(e7),
        t2[97] !== oO || t2[98] !== iE
          ? ((e8 = () => {
              var e
              if (null == oO) return
              let t =
                  null == (e = ok.current)
                    ? []
                    : i9(e).flatMap((e) => {
                        if (!ne(e)) return []
                        let t = iZ(e)
                        return null == t ? [] : [t]
                      }),
                a = (function (e, t) {
                  let a = e?.querySelector('[data-avatar-overlay-hit-region="mascot"]')
                  if (null == e || null == a) return []
                  let i = a.getBoundingClientRect(),
                    n = a.offsetWidth ? i.width / a.offsetWidth : 1,
                    o = a.offsetHeight ? i.height / a.offsetHeight : 1,
                    r = Array.from(e.querySelectorAll(i5)).filter((e) => {
                      if (!ne(e)) return !1
                      let t = 1
                      for (let a = e; null != a; a = a.parentElement)
                        t *= Number(window.getComputedStyle(a).opacity || 1)
                      return t > 0.01
                    }),
                    l = r.some((e) => "mascot-badge" === e.dataset.avatarOverlayNativeSurfaceId),
                    s = e.querySelector('[data-avatar-overlay-proximity-region="quick-chat"]')
                  return null != s
                    ? [s, ...r.filter((e) => e.dataset.avatarOverlayNativeSurfaceId?.startsWith("activity-"))].flatMap(
                        (e) => {
                          let t = iZ(e)
                          return null == t ? [] : [t]
                        },
                      )
                    : r.flatMap((e) => {
                        let a = e.dataset.avatarOverlayNativeSurfaceId
                        if (a?.startsWith("activity-")) {
                          let t = iZ(e)
                          return null == t ? [] : [t]
                        }
                        if (
                          "mascot-badge" !== a &&
                          "voice-controls" !== a &&
                          "voice-microphone" !== a &&
                          "voice-output" !== a
                        )
                          return []
                        let r = (0, tJ.PO)(t),
                          s = Math.round(t.compactOffsetX) - r / 2,
                          c = Math.round(i.height / o + t.compactOffsetY),
                          u = (0, tJ.oO)({
                            controlGap: t.hoverControlGap,
                            controlSize: t.hoverControlSize,
                            mascot: { left: 0, top: 0, width: i.width / n, height: i.height / o },
                            offsetX: t.hoverOffsetX,
                            offsetY: t.hoverOffsetY,
                            showsNotificationBadge: l,
                            surfaceId: a,
                          }),
                          d = Math.min(s, u.x - t.hoverControlSize / 2),
                          p = Math.min(c, u.y)
                        return [
                          {
                            left: i.left + i.width / 2 + d * n,
                            top: i.top + p * o,
                            width: (Math.max(s + r, u.x + t.hoverControlSize / 2) - d) * n,
                            height: (Math.max(c + t.compactControlHeight, u.y + t.hoverControlSize) - p) * o,
                          },
                        ]
                      })
                })(ok.current, iE)
              ;(l()(oN.current, t) && l()(oP.current, a)) ||
                ((oN.current = t), (oP.current = a), oO.setPointerRegions(t, a))
            }),
            (t2[97] = oO),
            (t2[98] = iE),
            (t2[99] = e8))
          : (e8 = t2[99]))
      let oU = e8
      t2[100] !== oU
        ? ((e9 = () => {
            null == oL.current &&
              (oL.current = window.requestAnimationFrame(() => {
                ;((oL.current = null), oU())
              }))
          }),
          (t2[100] = oU),
          (t2[101] = e9))
        : (e9 = t2[101])
      let oV = e9
      t2[102] !== n3
        ? ((te = () => {
            let e = {}
            for (let t of ok.current?.querySelectorAll('[data-avatar-overlay-native-surface-id^="activity-"]') ?? []) {
              let a = t.dataset.avatarOverlayNativeSurfaceId?.slice(9),
                i = t.querySelector("[data-avatar-overlay-activity-content]"),
                n = null == i ? t.offsetHeight : i.offsetHeight + t.offsetHeight - t.clientHeight
              null == a || n <= 0 || n3[a] === n || (e[a] = n)
            }
            0 !== Object.keys(e).length &&
              (eN.v.debug("Avatar overlay activity target heights changed", {
                safe: { changedCount: Object.keys(e).length, maximumHeightPx: Math.max(...Object.values(e)) },
              }),
              n4((t) => ({ ...t, ...e })))
          }),
          (t2[102] = n3),
          (t2[103] = te))
        : (te = t2[103])
      let oH = (0, g.useEffectEvent)(te),
        oB = () => {
          var e, t, a, i
          let n = (function (e, { includeInertSurfaces: t = !1 } = {}) {
            if (null == e) return null
            let a = (function (e) {
                if (null == e || nt(e)) return null
                let t = e.getBoundingClientRect()
                return t.width <= 0 || t.height <= 0 ? null : { width: Math.ceil(t.width), height: Math.ceil(t.height) }
              })(e.querySelector(iJ)),
              i = (function (e, t) {
                if (null == e || nt(e)) return null
                let a = e.getBoundingClientRect()
                if (a.width <= 0 || a.height <= 0) return null
                let i = e.querySelector(i4),
                  n = i?.getBoundingClientRect(),
                  o = null != i && i.querySelectorAll(i5).length > 1,
                  r = Array.from(e.querySelectorAll(i5))
                    .filter((e) => (t || null == e.closest("[inert]")) && !nt(e))
                    .map((e) =>
                      o && null != n && n.width > 0 && null != e.closest(i3) ? n : e.getBoundingClientRect(),
                    ),
                  l = Math.ceil(
                    Math.max(
                      e.offsetWidth > 0 ? e.offsetWidth : a.width,
                      Math.max(a.right, ...r.map((e) => e.right)) - Math.min(a.left, ...r.map((e) => e.left)),
                    ),
                  ),
                  s = e.querySelector(i0),
                  c = e.querySelector(i2)
                if (null == s || null == c) return { height: Math.ceil(a.height), width: l }
                let u = c.getBoundingClientRect(),
                  d = c.scrollHeight
                if (null != i) {
                  let e = Array.from(c.children).filter((e) => e instanceof HTMLElement && !nt(e)),
                    t = Number.parseFloat(window.getComputedStyle(c).rowGap) || 0
                  d = e.reduce((e, t) => e + t.offsetHeight, 0) + Math.max(0, e.length - 1) * t
                }
                return (
                  (d = Math.max(d, null == n ? 0 : n.bottom - u.top)),
                  { height: Math.ceil(s.getBoundingClientRect().height + d), width: l }
                )
              })(e.querySelector(i1), t)
            return null == a ? null : { mascot: a, tray: i }
          })(ok.current)
          if (null == n) return
          let o = os ? (ok.current?.querySelector('[data-avatar-overlay-size="realtime-caption"]') ?? null) : null,
            r = o?.querySelector('[data-avatar-overlay-native-surface-id="realtime-caption"]'),
            s = null == o || null == r ? null : o.getBoundingClientRect().bottom - r.offsetHeight,
            c = ok.current?.querySelector("[data-avatar-overlay-size='mascot']")?.getBoundingClientRect().top,
            u = {
              ...n,
              isGlobalRealtimeVoiceTransitioning: az,
              isQuickChatLoading: ab,
              petControlsAppearance: iE,
              presentation: aN ? "quick-chat" : void 0,
              quickChat: aP ? { hasNotifications: od.length > 0, isActivityVisible: iC && od.length > 0 } : void 0,
              quickChatFocusRequestId: nz?.requestId,
              realtimeCaptionAboveMascotPx: null == s || null == c ? 0 : Math.max(0, Math.ceil(c - s)),
              showsPetControls: op && !aN,
            }
          ;((e = oT.current),
            (t = u),
            (null != e &&
              e.isGlobalRealtimeVoiceTransitioning === t.isGlobalRealtimeVoiceTransitioning &&
              e.isQuickChatLoading === t.isQuickChatLoading &&
              l()(e.petControlsAppearance, t.petControlsAppearance) &&
              e.presentation === t.presentation &&
              l()(e.quickChat, t.quickChat) &&
              e.quickChatFocusRequestId === t.quickChatFocusRequestId &&
              e.realtimeCaptionAboveMascotPx === t.realtimeCaptionAboveMascotPx &&
              e.showsPetControls === t.showsPetControls &&
              e.mascot.width === t.mascot.width &&
              e.mascot.height === t.mascot.height &&
              ((a = e.tray),
              a === (i = t.tray) || (null != a && null != i && a.width === i.width && a.height === i.height))) ||
              ((oT.current = u),
              eN.v.debug("Avatar overlay control layout changed", {
                safe: {
                  usesQuickChatBar: aP,
                  requestedPetVisible: aC,
                  isPetVisible: aC,
                  hasPetAccessory: aP && !aN,
                  mascotWidth: n.mascot.width,
                  mascotHeight: n.mascot.height,
                },
              }),
              K.O1.dispatchMessage("avatar-overlay-element-size-changed", {
                isGlobalRealtimeVoiceTransitioning: az,
                isQuickChatLoading: ab,
                mascot: n.mascot,
                petControlsAppearance: iE,
                presentation: u.presentation,
                quickChat: u.quickChat,
                quickChatFocusRequestId: u.quickChatFocusRequestId,
                realtimeCaptionAboveMascotPx: u.realtimeCaptionAboveMascotPx,
                showsPetControls: u.showsPetControls,
                tray: u.tray,
              })))
        },
        oX = (0, g.useEffectEvent)(oB),
        oW = (e, t) => {
          var a, i, n, r
          let l,
            s = oE.current
          if (null == s || s.pointerId !== e.pointerId) return
          ;((oE.current = null), n8(null))
          let c = null
          ;(e.currentTarget instanceof HTMLElement
            ? (c = e.currentTarget)
            : e.target instanceof HTMLElement && (c = e.target),
            c?.hasPointerCapture?.(e.pointerId) && c.releasePointerCapture?.(e.pointerId))
          let {
            hasMoved: u,
            releaseSample: d,
            velocity: p,
          } = ((a = t ? tM(e) : void 0),
          (i = !t && s.usesOrbPhysics),
          {
            hasMoved: null == (l = a ?? (i ? s.samples.at(-1) : void 0)) ? s.hasMoved : tA(s, l),
            releaseSample: l,
            velocity:
              null != l && tA((n = s), (r = l))
                ? (function (e) {
                    let t = (function (e) {
                      let t = e.at(-1)
                      if (null == t) return
                      let a = e.length - 1
                      for (; a > 0;) {
                        let i = e[a - 1]
                        if (null == i || Math.abs(t.screenX - i.screenX) >= 4 || Math.abs(t.screenY - i.screenY) >= 4)
                          break
                        a -= 1
                      }
                      return e[a]
                    })(e)
                    if (null == t) return null
                    let a = e.find((e) => t.timeMs - e.timeMs > 0)
                    if (null == a) return null
                    let i = Math.max(t.timeMs - a.timeMs, 8) / 1e3,
                      n = { x: (t.screenX - a.screenX) / i, y: (t.screenY - a.screenY) / i },
                      o = Math.hypot(n.x, n.y)
                    if (o < 320) return null
                    if (o <= 1600) return n
                    let r = 1600 / o
                    return { x: n.x * r, y: n.y * r }
                  })(tI([...n.samples, r]))
                : null,
          })
          ;(s.beganOnQuickChatBar &&
            eN.v.debug("Quick Chat pointer gesture finished", {
              safe: {
                hasMoved: u,
                isPointerRelease: t,
                startedOnButton: null != s.quickChatClickTarget,
                startedOnExpandedEditor: null != s.quickChatEditorFocusTarget,
              },
            }),
            !t ||
              s.beganOnQuickChatBar ||
              u ||
              (oj(
                o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
                o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
              ),
              a4 && null != a0 ? il?.() : ap()),
            u &&
              !s.hasMoved &&
              null != d &&
              K.O1.dispatchMessage("avatar-overlay-drag-move", {
                pointerScreenX: d.screenX,
                pointerScreenY: d.screenY,
              }))
          let f = d ?? s.samples.at(-1) ?? s
          ;(K.O1.dispatchMessage("avatar-overlay-drag-end", {
            altKey: t && !s.usesOrbPhysics && e.altKey,
            pointerScreenX: f.screenX,
            pointerScreenY: f.screenY,
          }),
            t &&
              s.beganOnQuickChatBar &&
              !u &&
              (null != s.quickChatClickTarget
                ? s.quickChatClickTarget.click()
                : null != s.quickChatEditorFocusTarget &&
                  (oR(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK),
                  o5("editor"),
                  s.quickChatEditorFocusTarget.focus())),
            s.usesOrbPhysics &&
              null != p &&
              K.O1.dispatchMessage("avatar-overlay-drag-release", {
                shouldBounce: !0,
                velocityX: 3 * p.x,
                velocityY: 3 * p.y,
              }))
        }
      t2[104] !== aD || t2[105] !== a4 || t2[106] !== aP
        ? ((tt = (e) => {
            if (0 !== e.button || e.ctrlKey || !(e.target instanceof Element) || null != e.target.closest(".no-drag"))
              return
            ;(e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId))
            let t = a4 && !aD
            ;((oE.current = {
              beganOnQuickChatBar: aP && null != e.target.closest("[data-quick-chat-glass-group]"),
              quickChatClickTarget: aP ? e.target.closest("button") : null,
              quickChatEditorFocusTarget: aP
                ? e.target.closest('[data-avatar-overlay-composition-autofocus="true"][tabindex="0"]')
                : null,
              hasMoved: !1,
              pointerId: e.pointerId,
              samples: [tM(e)],
              screenX: e.screenX,
              screenY: e.screenY,
              usesOrbPhysics: t,
            }),
              n8(null),
              K.O1.dispatchMessage("avatar-overlay-drag-start", {
                pointerScreenX: e.screenX,
                pointerScreenY: e.screenY,
                pointerWindowX: e.clientX,
                pointerWindowY: e.clientY,
                usesOrbPhysics: t,
              }))
          }),
          (t2[104] = aD),
          (t2[105] = a4),
          (t2[106] = aP),
          (t2[107] = tt))
        : (tt = t2[107])
      let oY = tt
      t2[108] === Symbol.for("react.memo_cache_sentinel")
        ? ((ta = (e) => {
            let t = oE.current
            if (null == t || t.pointerId !== e.pointerId) return
            let a = tM(e)
            t.samples = tI([...t.samples, a])
            let i = a.screenX - t.screenX,
              n = a.screenY - t.screenY
            ;((Math.abs(i) >= 4 || Math.abs(n) >= 4) &&
              ((t.hasMoved = !0),
              (t.screenX = a.screenX),
              (t.screenY = a.screenY),
              !t.usesOrbPhysics && (i >= 4 ? n8("running-right") : i <= -4 && n8("running-left"))),
              t.hasMoved &&
                K.O1.dispatchMessage("avatar-overlay-drag-move", {
                  pointerScreenX: a.screenX,
                  pointerScreenY: a.screenY,
                }))
          }),
          (t2[108] = ta))
        : (ta = t2[108])
      let oz = ta,
        oK = (e, t) => {
          ;(null != e.action &&
            (null == t || "open" === t.intent) &&
            oj(
              o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
              o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
              e,
            ),
            ag(e, t))
        }
      t2[109] !== av
        ? ((ti = (e, t) => {
            av(e, t)
          }),
          (t2[109] = av),
          (t2[110] = ti))
        : (ti = t2[110])
      let o$ = ti,
        oG = (e) => {
          ;(oj(
            o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
            o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            e,
          ),
            oe((t) => {
              if (t.get(e.id) === e.turnKey) return t
              let a = new Map(t)
              return (a.set(e.id, e.turnKey), a)
            }))
        }
      t2[111] !== aS
        ? ((tn = (e) => {
            ;(0, aK.RZ)(aS, e, !1)
          }),
          (t2[111] = aS),
          (t2[112] = tn))
        : (tn = t2[112])
      let oQ = tn
      t2[113] !== oQ || t2[114] !== iu
        ? ((to = (e) => {
            let t = e.notificationPreferenceId
            null != t &&
              (async function ({ intl: e, onMuteThreadNotifications: t }) {
                document.dispatchEvent(new PointerEvent("pointercancel"))
                let a = await window.electronBridge?.showContextMenu?.([
                  { id: "mute-notification-thread", label: e.formatMessage(aK.OD.muteThreadNotifications) },
                ])
                a?.id === "mute-notification-thread" && t()
              })({
                intl: iu,
                onMuteThreadNotifications: () => {
                  oQ(t)
                },
              })
          }),
          (t2[113] = oQ),
          (t2[114] = iu),
          (t2[115] = to))
        : (to = t2[115])
      let oZ = to,
        oJ = () => {
          ;(oj(
            o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
            o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            void 0,
            !0,
          ),
            ix(!0))
        }
      t2[116] === Symbol.for("react.memo_cache_sentinel")
        ? ((tr = () => {
            ;(ix(!1), n6(0))
          }),
          (t2[116] = tr))
        : (tr = t2[116])
      let o1 = tr
      t2[117] !== o1 || t2[118] !== aS
        ? ((tl = () => {
            ;(iw(null), o1(), (0, eX.jx)(ng, !0), aS.set(nv, !0))
          }),
          (t2[117] = o1),
          (t2[118] = aS),
          (t2[119] = tl))
        : (tl = t2[119])
      let o0 = tl
      t2[120] === Symbol.for("react.memo_cache_sentinel")
        ? ((tc = (e, t) => {
            n2((a) => (t ? (a.includes(e) ? a : [...a, e]) : a.filter((t) => t !== e)))
          }),
          (t2[120] = tc))
        : (tc = t2[120])
      let o2 = tc,
        o3 = (e) => {
          let t = od.find((t) => {
            let { id: a } = t
            return a === e
          })
          if (null != t) {
            if (!ib && od.length > 1) return void oJ()
            oK(t)
          }
        },
        o4 = nj,
        o5 = (e, t) => {
          ;(nA(!1),
            null != e && nZ(null),
            null != e || ns || (nI.current = null),
            aP && !a_ && (nx(e), null != e && null == nb && nE(null)),
            (null != e && aP && null != nb && document.hasFocus()) || o4(null != e, t))
        },
        o6 = async (e, t) => {
          let a = e.trim()
          if (!ae || 0 === a.length || (0, H.ov)(aS, iX)) return
          let i = aS.get(H.$X)
          if ((0, H.lR)(aS, { promptRawOverride: a })) {
            i || iK(t)
            return
          }
          if (!iG && aS.get(U.gy).length > 0) return void iQ()
          let n = (0, d.xa2)(),
            r = Date.now(),
            l =
              null == iL
                ? {
                    clientThreadId: n,
                    startedAtMs: r,
                    thread: { hostId: Q.fI, prompt: a, status: "creating", title: a },
                  }
                : null,
            s = {
              prompt: a,
              turnTrigger: "avatar_quick_chat",
              addedFiles: aS.get(U.a$),
              fileAttachments: aS.get(U.PA),
              imageAttachments: aS.get(U.gy),
              appshotContexts: iP,
              ideContext: null,
            },
            c = s.addedFiles.length > 0 || s.fileAttachments.length > 0 || s.imageAttachments.length > 0,
            u = s,
            p = (0, h.Y)([...s.addedFiles, ...s.fileAttachments])
          if (null != iL && iL.hostId !== Q.fI && p.some(d.skP))
            return void aS
              .get(X.Id)
              .danger(
                iu.formatMessage({
                  id: "composer.fileAttachment.remoteFolderUnsupported",
                  defaultMessage: "Folders can only be attached to local conversations",
                }),
                { errorAnalytics: { toastId: "composer.fileAttachment.remoteFolderUnsupported" } },
              )
          if (
            null != iL &&
            iL.hostId !== Q.fI &&
            ((u = { ...s, imageAttachments: s.imageAttachments.map(nq) }), p.length > 0)
          ) {
            let e = (0, H.Mz)(aS, { hostId: iL.hostId, id: iX })
            try {
              let t = await (0, x.V)(aS, iL.hostId).uploadLocalFileAttachments({
                attachments: p,
                allowSftpUpload: (0, d.Tim)(aS.get(z.f, iL.hostId)),
              })
              if (!e.isPending()) return void (0, V.xm)(aS, iL.hostId, t)
              ;((u = { ...u, addedFiles: [], fileAttachments: t }), e.succeed())
            } catch (t) {
              ;(e.isPending() &&
                aS
                  .get(X.Id)
                  .danger((0, M.c)(t, iu), {
                    errorAnalytics: { toastId: "avatarOverlay.quickChatFileAttachmentUpload" },
                  }),
                e.fail())
              return
            }
          }
          let f = {
            ...(0, F.y)({
              action: o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_QUICK_CHAT_SENT,
              source: o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_QUICK_CHAT,
              selectedAvatar: al,
              isPetVisible: aC,
            }),
            quickChatOpenMethod: nI.current?.openMethod,
            quickChatInitialVisibility: nI.current?.initialVisibility,
            quickChatAppshotCount: iP.length,
          }
          ;(eN.v.info("Quick Chat task start submitted", {
            safe: {
              promptLength: a.length,
              attachmentCount: iP.length + s.addedFiles.length + s.fileAttachments.length + s.imageAttachments.length,
            },
            sensitive: { clientThreadId: n },
          }),
            null != l &&
              (iv || o0(),
              (0, eD.gI)(aS, n, l.thread),
              nu((e) => ({ resetRevision: aA, starts: [...(e.resetRevision === aA ? e.starts : []), l] }))),
            null != l &&
              null != t &&
              aP &&
              nf((e) => ({
                resetRevision: aA,
                flights: [
                  ...(e.resetRevision === aA ? e.flights : []),
                  {
                    notificationId: n,
                    origin: t,
                    coveredNotificationId: od[0]?.id ?? null,
                    coveredNotificationWasVisible: iv,
                  },
                ],
              })),
            iO(""))
          let m = i_.current
          iH.current = iH.current + 1
          let g = iH.current
          ;((0, U.Rh)(aS, "addedFiles", []),
            (0, U.Rh)(aS, "fileAttachments", []),
            (0, U.Rh)(aS, "imageAttachments", []),
            nE("submission"),
            iN({ appshots: [], threadTarget: null }))
          let v = (iV.current = iV.current + 1),
            y = () => {
              iV.current === v &&
                (i_.current === m && iO((e) => (0 === e.length ? a : e)),
                iN((e) => (0 === e.appshots.length ? { appshots: iP, threadTarget: iL } : e)),
                iH.current === g &&
                  ((0, U.Rh)(aS, "addedFiles", (e) => (0, h.Y)([...s.addedFiles, ...e])),
                  (0, U.Rh)(aS, "fileAttachments", (e) => (0, h.Y)([...s.fileAttachments, ...e])),
                  (0, U.Rh)(aS, "imageAttachments", (e) => [...s.imageAttachments, ...e])))
            }
          try {
            let e = await ay(
              a,
              n,
              iP.length > 0 ? iP : void 0,
              iL,
              () => t9.logProductEvent(o.CodexAvatarOverlayEvent, f),
              c ? u : void 0,
            )
            ;(eN.v.info("Quick Chat task start settled", {
              safe: { result: e, elapsedMs: Date.now() - r },
              sensitive: { clientThreadId: n },
            }),
              null != l && (0, eD.gI)(aS, n, null),
              "cancelled" === e && y(),
              "cancelled" === e &&
                null != l &&
                nu((e) => ({ ...e, starts: e.starts.filter((e) => e.clientThreadId !== n) })))
          } catch (t) {
            if (null != l && null == aS.get(eD.Pt, n)) return
            let e = null != l && null != aS.get(eD.Tl, n)
            ;(eN.v.warning("Quick Chat task start failed", {
              safe: { hasCreatedConversation: e, elapsedMs: Date.now() - r },
              sensitive: { clientThreadId: n, error: t },
            }),
              null != l &&
                ((0, eD.gI)(aS, n, null),
                nu((e) => ({ ...e, starts: e.starts.filter((e) => e.clientThreadId !== n) }))),
              e || y(),
              aS
                .get(X.Id)
                .danger(
                  iu.formatMessage({ id: "avatarOverlay.quickChatBarError", defaultMessage: "Unable to start chat" }),
                  { errorAnalytics: { toastId: "avatarOverlay.quickChatBarError" } },
                ))
          }
        }
      t2[121] !== o6 || t2[122] !== iY
        ? ((tu = (e) => o6(e, iY)), (t2[121] = o6), (t2[122] = iY), (t2[123] = tu))
        : (tu = t2[123])
      let o7 = (0, g.useEffectEvent)(tu)
      ;(t2[124] !== aS || t2[125] !== o7
        ? ((td = () =>
            (0, H.U_)(aS, (e) => {
              if (null != e.promptRawOverride) return o7(e.promptRawOverride)
            })),
          (t2[124] = aS),
          (t2[125] = o7),
          (t2[126] = td))
        : (td = t2[126]),
        t2[127] !== aS ? ((tp = [aS]), (t2[127] = aS), (t2[128] = tp)) : (tp = t2[128]),
        (0, g.useEffect)(td, tp))
      let o8 = (e) => {
          if (iv) {
            if (("controls" !== nb && o5(null), !0 !== e && ib && od.length > 1)) {
              ;(oj(
                o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
                o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
                void 0,
                !1,
              ),
                o1())
              return
            }
            ;(od.length > 0 && null != aS.get(aE).tray ? iw({ quickChatExpanded: ox }) : o1(),
              (0, eX.jx)(ng, !1),
              aS.set(nv, !1))
          }
        },
        o9 = (e, t, a) => {
          let i = void 0 === a || a,
            n = e.controlTarget
          switch (t.type) {
            case "close-follow-up":
              ;(nZ(null), i && o4(!1))
              return
            case "follow-up-active-changed":
              i && o4(t.isActive || null != nb)
              return
            case "open-follow-up":
              if (null == n) return
              ;(nZ({ caretPoint: null, draft: "", notificationId: e.id, submissionStatus: "idle", turnKey: e.turnKey }),
                i && o4(!0))
              return
            case "follow-up-editor-changed":
              return void nZ((a) =>
                a?.notificationId === e.id && a.turnKey === e.turnKey
                  ? { ...a, caretPoint: t.caretPoint, draft: t.draft }
                  : a,
              )
            case "stop":
              if (null == n) return
              ;(nZ(null),
                i && null != nQ && o4(!1),
                Promise.resolve(ah(e, t)).catch(() => {
                  aS.get(X.Id).danger(
                    iu.formatMessage({
                      id: "avatarOverlay.stopNotificationError",
                      defaultMessage: "Unable to stop activity",
                    }),
                    { errorAnalytics: { toastId: "avatarOverlay.stopNotificationError" } },
                  )
                }))
              return
            case "submit-follow-up": {
              let a = t.prompt.trim()
              if (null == n || 0 === a.length) return
              ;(nZ((t) =>
                t?.notificationId === e.id && t.turnKey === e.turnKey ? { ...t, submissionStatus: "submitting" } : t,
              ),
                Promise.resolve(ah(e, { type: "submit-follow-up", prompt: a }))
                  .then((t) => {
                    "submitted" === t &&
                      oj(
                        o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
                        o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
                        e,
                      )
                    let a = oh.find((t) => {
                      let { notification: a } = t
                      return a.id === e.id
                    })
                    if ("app-server-conversation" === n.type && null != a) {
                      let t = { notificationId: e.id, replacedSubtitle: a.copy.subtitle }
                      ;(n1(t),
                        window.setTimeout(() => {
                          n1((e) => (e === t ? null : e))
                        }, 3e3))
                    }
                    ;(nZ((t) => (t?.notificationId === e.id && t.turnKey === e.turnKey ? null : t)), i && o4(!1))
                  })
                  .catch(() => {
                    nZ((t) =>
                      t?.notificationId === e.id && t.turnKey === e.turnKey ? { ...t, submissionStatus: "error" } : t,
                    )
                  }))
              return
            }
          }
        }
      ;(t2[129] === Symbol.for("react.memo_cache_sentinel") ? ((tf = []), (t2[129] = tf)) : (tf = t2[129]),
        (0, K.JX)(
          "avatar-overlay-action",
          (e) => {
            let { action: t } = e
            switch (t.type) {
              case "cancel-quick-chat-focus":
                nz?.requestId === t.requestId &&
                  (ns || (nI.current = null),
                  (0, v.flushSync)(() => {
                    ;(nK(null), nA(!1), nx(null))
                  }))
                return
              case "focus-quick-chat":
              case "toggle-quick-chat":
                if (aP && !a_)
                  if ("toggle-quick-chat" === t.type && nS)
                    (o5(null, !0), document.activeElement instanceof HTMLElement && document.activeElement.blur())
                  else {
                    if ("focus-quick-chat" === t.type && null != t.requestId) {
                      let e = t.requestId
                      if (nz?.requestId === e) {
                        ;((oT.current = null), oB())
                        return
                      }
                      ;(oR(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT, t.wasHidden),
                        (0, v.flushSync)(() => {
                          ;(nA(!1), nZ(null), nK({ requestId: e, layoutRevision: null }), nE("shortcut"), nx("editor"))
                        }))
                      return
                    }
                    ;(oR(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT),
                      (0, v.flushSync)(() => {
                        ;(nE(null), o5("editor"))
                      }),
                      ok.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
                  }
                return
              case "close-notification-stack":
                ;(ix(!1), n6(0))
                return
              case "open-notification-stack":
                return void ix(!0)
              case "pet-pointer-proximity-changed":
                return void iR(t.isNear)
              case "hide-activity-pills":
                return void o8(t.automatic)
              case "show-activity-pills":
                return void o0()
            }
          },
          tf,
        ),
        t2[130] !== nS || t2[131] !== aP
          ? ((tm = () => {
              aP &&
                nS &&
                (nA(!0), ok.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
            }),
            (t2[130] = nS),
            (t2[131] = aP),
            (t2[132] = tm))
          : (tm = t2[132]),
        t2[133] === Symbol.for("react.memo_cache_sentinel") ? ((th = []), (t2[133] = th)) : (th = t2[133]),
        (0, K.JX)("avatar-overlay-keyboard-interaction-ready", tm, th),
        t2[134] !== ox || t2[135] !== aN || t2[136] !== aS
          ? ((tg = [ox, aN, aS]), (t2[134] = ox), (t2[135] = aN), (t2[136] = aS), (t2[137] = tg))
          : (tg = t2[137]),
        (0, K.JX)(
          "appshot-shortcut",
          (e) => {
            let { target: t, threadTarget: a } = e
            if (!aP || null == t || !aS.get(N.L)) return
            ;(0, H.td)(aS, iX)
            let i = Symbol(),
              n = (0, H.Mz)(aS, { hostId: a?.hostId ?? Q.fI, id: crypto.randomUUID() }),
              r = nl.current
            null == nb && oR(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT)
            let l = { operation: n, allowSubmitWithoutCapture: !1 }
            ;(no.current.set(i, l),
              (0, v.flushSync)(() => {
                nn((e) => ({
                  pendingCaptureCount: no.current.size,
                  response: 1 === no.current.size ? void 0 : e.response,
                  startsCollapsed: 1 === no.current.size ? !ox : e.startsCollapsed,
                }))
              }),
              (0, T.g)(aS, {
                animationPresentationStyle: "quick_chat",
                getAnimationDestinationFrame: nF,
                getAttachmentGen: () => iV.current,
                onCaptureAnimationDuration: (e, t) => {
                  r === nl.current &&
                    ((0, v.flushSync)(() => {
                      ;(null != t && o5("editor"),
                        nn((e) => (0 === e.pendingCaptureCount || void 0 !== e.response ? e : { ...e, response: t })))
                    }),
                    null != t &&
                      ok.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
                },
                onAddAppshotContext: (e) => {
                  iN((t) => ({
                    appshots: [...t.appshots, e],
                    threadTarget: 0 === t.appshots.length && null == t.threadTarget ? (a ?? null) : t.threadTarget,
                  }))
                },
                onCaptureSettled: (e, t) => {
                  if (!no.current.delete(i)) return
                  let a = no.current.size
                  ;((0, v.flushSync)(() => {
                    nn((e) => ({
                      pendingCaptureCount: a,
                      response: 0 === a ? void 0 : e.response,
                      startsCollapsed: 0 !== a && e.startsCollapsed,
                    }))
                  }),
                    t || l.allowSubmitWithoutCapture ? n.succeed() : n.fail())
                },
                opensMainWindowOnScreenshot: !1,
                source: "hotkey",
                target: t,
              }))
          },
          tg,
        ),
        t2[138] !== ns || t2[139] !== aE || t2[140] !== aS
          ? ((tv = (e) => {
              let {
                isGlobalRealtimeVoicePresentation: t,
                isVisible: a,
                layout: i,
                layoutRevision: n,
                petOpenIntent: o,
                quickChatFocusRequestId: r,
                arePresentationAccessoriesVisible: l,
              } = e
              ;(aH(t),
                a8(a),
                aS.set(aE, i),
                a || (nA(!1), ns || (nI.current = null), nx(null)),
                nK((e) =>
                  a
                    ? null == e || e.requestId !== r || null == n || e.layoutRevision === n
                      ? e
                      : { ...e, layoutRevision: n }
                    : null,
                ),
                a6(o),
                ig(l))
            }),
            (t2[138] = ns),
            (t2[139] = aE),
            (t2[140] = aS),
            (t2[141] = tv))
          : (tv = t2[141]),
        t2[142] === Symbol.for("react.memo_cache_sentinel") ? ((ty = []), (t2[142] = ty)) : (ty = t2[142]),
        (0, K.JX)("avatar-overlay-layout-changed", tv, ty),
        t2[143] !== oO || t2[144] !== o_
          ? ((tw = () => {
              o_ && oO.requestCurrentLayout().catch(nL)
            }),
            (tb = [oO, o_]),
            (t2[143] = oO),
            (t2[144] = o_),
            (t2[145] = tw),
            (t2[146] = tb))
          : ((tw = t2[145]), (tb = t2[146])),
        (0, g.useEffect)(tw, tb),
        t2[147] !== ax || t2[148] !== ip
          ? ((tS = () => {
              ax || null == ip || eR.appServices.avatarOverlay?.setQuickChatStashed(null)
            }),
            (tE = [ip, ax]),
            (t2[147] = ax),
            (t2[148] = ip),
            (t2[149] = tS),
            (t2[150] = tE))
          : ((tS = t2[149]), (tE = t2[150])),
        (0, g.useEffect)(tS, tE))
      let re = (0, g.useEffectEvent)((e, t) => {
        oW(e, t)
      })
      ;(t2[151] !== re
        ? ((tO = () => {
            let e = (e) => {
                re(e, !0)
              },
              t = (e) => {
                re(e, !1)
              }
            return (
              window.addEventListener("pointerup", e),
              window.addEventListener("pointercancel", t),
              () => {
                ;(window.removeEventListener("pointerup", e), window.removeEventListener("pointercancel", t))
              }
            )
          }),
          (t2[151] = re),
          (t2[152] = tO))
        : (tO = t2[152]),
        t2[153] === Symbol.for("react.memo_cache_sentinel") ? ((t_ = []), (t2[153] = t_)) : (t_ = t2[153]),
        (0, g.useEffect)(tO, t_),
        t2[154] !== oO || t2[155] !== oH || t2[156] !== oX || t2[157] !== oU || t2[158] !== oV
          ? ((tT = () => {
              let e = null,
                t = () => {
                  null == e &&
                    (e = window.requestAnimationFrame(() => {
                      ;((e = null), oH(), oX(), oU())
                    }))
                },
                a = new ResizeObserver(t),
                i = ok.current,
                n = null
              if (null != i) {
                for (let e of (a.observe(i), Array.from(i.querySelectorAll(i8.join(", "))))) a.observe(e)
                null != oO &&
                  (n = (function (e, t) {
                    let a = e.ownerDocument,
                      i = new ResizeObserver(t),
                      n = () => {
                        i.disconnect()
                        let t = new Set()
                        for (let a of i9(e))
                          for (let e = a; null != e && !t.has(e); e = e.parentElement) (t.add(e), i.observe(e))
                      },
                      o = new MutationObserver((e) => {
                        ;(e.some(
                          (e) =>
                            "childList" === e.type ||
                            "class" === e.attributeName ||
                            "role" === e.attributeName ||
                            e.attributeName?.startsWith("data-") === !0,
                        ) && n(),
                          t())
                      }),
                      r = () => {
                        t()
                      }
                    for (let e of (n(),
                    o.observe(a.documentElement, { attributes: !0, childList: !0, subtree: !0 }),
                    i7))
                      a.addEventListener(e, r)
                    return (
                      a.addEventListener("scroll", r, !0),
                      () => {
                        for (let e of (i.disconnect(), o.disconnect(), a.removeEventListener("scroll", r, !0), i7))
                          a.removeEventListener(e, r)
                      }
                    )
                  })(i, oV))
              }
              return (
                window.addEventListener("resize", t),
                t(),
                () => {
                  ;(null != e && window.cancelAnimationFrame(e),
                    null != oL.current && (window.cancelAnimationFrame(oL.current), (oL.current = null)),
                    a.disconnect(),
                    n?.(),
                    window.removeEventListener("resize", t))
                }
              )
            }),
            (t2[154] = oO),
            (t2[155] = oH),
            (t2[156] = oX),
            (t2[157] = oU),
            (t2[158] = oV),
            (t2[159] = tT))
          : (tT = t2[159]),
        (0, g.useLayoutEffect)(tT, [oO, os, ov, oU, oV, al.id]),
        t2[160] !== oX || t2[161] !== oU
          ? ((tN = () => {
              ;(oX(), oU())
            }),
            (t2[160] = oX),
            (t2[161] = oU),
            (t2[162] = tN))
          : (tN = t2[162]),
        (0, g.useLayoutEffect)(tN, [im, iC, iv, az, ib, aN, ab, iE, oU, nz?.requestId, ii, or, al.id, ov, t8, ia, op]),
        t2[163] !== aL || t2[164] !== ou
          ? ((tP = () => {
              if (!aL || null == ou) return
              let e = Math.max(0, ou - Date.now()),
                t = window.setTimeout(() => {
                  oa(nP)
                }, e)
              return () => {
                window.clearTimeout(t)
              }
            }),
            (tL = [aL, ou]),
            (t2[163] = aL),
            (t2[164] = ou),
            (t2[165] = tP),
            (t2[166] = tL))
          : ((tP = t2[165]), (tL = t2[166])),
        (0, g.useEffect)(tP, tL),
        t2[167] !== oC || t2[168] !== aL || t2[169] !== af
          ? ((tF = [oC, aL, af]), (t2[167] = oC), (t2[168] = aL), (t2[169] = af), (t2[170] = tF))
          : (tF = t2[170]),
        (0, g.useEffect)(() => {
          if (!aL || !oC) return
          let e = window.setTimeout(() => {
            ;(oa(nN), af())
          }, 15e3)
          return () => {
            window.clearTimeout(e)
          }
        }, tF),
        t2[171] === Symbol.for("react.memo_cache_sentinel")
          ? ((tq = (0, w.zR)({ id: "petOverlay.hideMini", defaultMessage: "Hide Mini" })), (t2[171] = tq))
          : (tq = t2[171]))
      let rt = tq,
        ra = null == nz,
        ri = og.map(nT),
        rn = o_ && !0 !== a7
      t2[172] !== rt || t2[173] !== a4 || t2[174] !== ad || t2[175] !== aM || t2[176] !== aW || t2[177] !== oj
        ? ((tj = a4
            ? []
            : [
                {
                  id: "pet-settings",
                  icon: B.dqq,
                  message: (0, w.zR)({ id: "petOverlay.settings", defaultMessage: "Settings" }),
                  selectAfterClose: !0,
                  onSelect: n_,
                },
                {
                  id: "close-avatar",
                  icon: B.GsY,
                  message: aM ? rt : (0, w.zR)({ id: "petOverlay.closeMini", defaultMessage: "Close Mini" }),
                  onSelect: () => {
                    ;(oj(
                      o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
                      o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
                    ),
                      aW.stop().catch(nO),
                      ad())
                  },
                },
              ]),
          (t2[172] = rt),
          (t2[173] = a4),
          (t2[174] = ad),
          (t2[175] = aM),
          (t2[176] = aW),
          (t2[177] = oj),
          (t2[178] = tj))
        : (tj = t2[178])
      let ro = aU ? ih : void 0
      t2[179] !== t8 ? ((tD = (0, tR.cv)(t8)), (t2[179] = t8), (t2[180] = tD)) : (tD = t2[180])
      let rr = !aU || ih
      ;(t2[181] !== ow ||
      t2[182] !== iM ||
      t2[183] !== o1 ||
      t2[184] !== oJ ||
      t2[185] !== ib ||
      t2[186] !== aE ||
      t2[187] !== od ||
      t2[188] !== aS
        ? ((tU = (e) => {
            let t = iM.update({
              deltaY: e,
              timestamp: performance.now(),
              isExpanded: ib,
              notificationCount: od.length,
              expandsUpward: aS.get(aE).placement.startsWith("top"),
              maxScrollOffset: Math.max(0, ow.contentHeight - ow.viewportRect.height),
            })
            "expand" === t
              ? oJ()
              : "collapse" === t
                ? o1()
                : "scroll" === t &&
                  n6((t) =>
                    (0, d.Tyz)({
                      contentHeight: ow.contentHeight,
                      deltaY: e,
                      scrollOffset: t,
                      viewportHeight: ow.viewportRect.height,
                    }),
                  )
          }),
          (t2[181] = ow),
          (t2[182] = iM),
          (t2[183] = o1),
          (t2[184] = oJ),
          (t2[185] = ib),
          (t2[186] = aE),
          (t2[187] = od),
          (t2[188] = aS),
          (t2[189] = tU))
        : (tU = t2[189]),
        t2[190] !== iy || t2[191] !== iv || t2[192] !== o1
          ? ((tV = () => {
              iv || null == iy || (iw(null), o1())
            }),
            (t2[190] = iy),
            (t2[191] = iv),
            (t2[192] = o1),
            (t2[193] = tV))
          : (tV = t2[193]),
        t2[194] !== oW || t2[195] !== aP
          ? ((tH = (e) => {
              oW(e, aP && 0 === e.buttons)
            }),
            (t2[194] = oW),
            (t2[195] = aP),
            (t2[196] = tH))
          : (tH = t2[196]),
        t2[197] !== oW
          ? ((tB = (e) => {
              oW(e, !1)
            }),
            (t2[197] = oW),
            (t2[198] = tB))
          : (tB = t2[198]),
        t2[199] !== oW
          ? ((tX = (e) => {
              oW(e, !0)
            }),
            (t2[199] = oW),
            (t2[200] = tX))
          : (tX = t2[200]))
      let rl = null != oO ? oV : void 0,
        rs = window.electronBridge?.showContextMenu == null ? void 0 : oZ
      ;(t2[201] !== oR
        ? ((tW = () => {
            ;(nE(null), oR(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK))
          }),
          (t2[201] = oR),
          (t2[202] = tW))
        : (tW = t2[202]),
        t2[203] !== iX || t2[204] !== ae || t2[205] !== aS
          ? ((tY = ae
              ? (e) => {
                  ;((0, H.td)(aS, iX), (0, H.TG)(aS), (i_.current = i_.current + 1), iO(e), e.length > 0 && nE(null))
                }
              : void 0),
            (t2[203] = iX),
            (t2[204] = ae),
            (t2[205] = aS),
            (t2[206] = tY))
          : (tY = t2[206]),
        t2[207] !== iX ||
        t2[208] !== iD ||
        t2[209] !== ni.pendingCaptureCount ||
        t2[210] !== iP ||
        t2[211] !== iL ||
        t2[212] !== aS
          ? ((tz = (e, t) => {
              ;((0, H.td)(aS, iX), "voice-return" === t && (0, H.TG)(aS))
              let a = iP.filter((t) => !e.includes(t))
              if (
                (iN({ appshots: a, threadTarget: 0 !== a.length || iD ? iL : null }),
                0 === a.length && ((iV.current = iV.current + 1), "voice-return" !== t))
              )
                for (let e of no.current.values()) e.allowSubmitWithoutCapture = !0
              if ("voice-return" === t) {
                for (let e of (eN.v.info("Quick Chat returned to active voice", {
                  safe: { pendingCaptures: ni.pendingCaptureCount },
                  sensitive: {},
                }),
                (nl.current = nl.current + 1),
                no.current.values()))
                  e.operation.fail()
                ;(no.current.clear(), nn({ pendingCaptureCount: 0, response: void 0, startsCollapsed: !1 }))
              }
            }),
            (t2[207] = iX),
            (t2[208] = iD),
            (t2[209] = ni.pendingCaptureCount),
            (t2[210] = iP),
            (t2[211] = iL),
            (t2[212] = aS),
            (t2[213] = tz))
          : (tz = t2[213]),
        t2[214] === Symbol.for("react.memo_cache_sentinel")
          ? ((tK = (e) => {
              nf((t) => ({ ...t, flights: t.flights.filter((t) => t.notificationId !== e) }))
            }),
            (t2[214] = tK))
          : (tK = t2[214]),
        t2[215] !== iX || t2[216] !== iD || t2[217] !== iP || t2[218] !== aS
          ? ((t$ = iD
              ? (0, i.jsx)(nr, {
                  onAttachmentRemoved: () => {
                    ;((0, H.td)(aS, iX),
                      0 !== iP.length ||
                        0 !== aS.get(U.a$).length ||
                        0 !== aS.get(U.PA).length ||
                        0 !== aS.get(U.gy).length ||
                        (0, H.ov)(aS) ||
                        iN(nk))
                  },
                })
              : void 0),
            (t2[215] = iX),
            (t2[216] = iD),
            (t2[217] = iP),
            (t2[218] = aS),
            (t2[219] = t$))
          : (t$ = t2[219]))
      let rc = ni.pendingCaptureCount > 0,
        ru = null != as || !a4,
        rd = aT ? "quick-chat" : void 0
      ;(t2[220] !== aZ?.handoff ||
      t2[221] !== aJ ||
      t2[222] !== oS ||
      t2[223] !== a3 ||
      t2[224] !== aB ||
      t2[225] !== a2 ||
      t2[226] !== aQ ||
      t2[227] !== iE ||
      t2[228] !== ii ||
      t2[229] !== or ||
      t2[230] !== aW.canStart ||
      t2[231] !== aW.isMicrophoneMuted ||
      t2[232] !== aW.isMuted ||
      t2[233] !== aW.start ||
      t2[234] !== aW.startError ||
      t2[235] !== aW.stop ||
      t2[236] !== aW.toggleMicrophoneMute ||
      t2[237] !== aW.toggleMute ||
      t2[238] !== aW.voiceActivity ||
      t2[239] !== ie ||
      t2[240] !== ir ||
      t2[241] !== a9 ||
      t2[242] !== aU ||
      t2[243] !== a1
        ? ((tG = aB
            ? {
                activity: aW.voiceActivity,
                arePetControlsExpanded: oS,
                canStart: aW.canStart,
                caption: ii,
                errorMessage: aW.startError,
                handoff: "global-overlay" === aJ ? (aZ?.handoff ?? null) : null,
                isAudioReady: a3,
                isSessionActive: a2,
                isTransferring: aQ,
                microphoneMuted: aW.isMicrophoneMuted,
                muted: aW.isMuted,
                petOpenIntent: a9,
                petControlsAppearance: iE,
                phase: ie,
                presentationAnchorRef: ir,
                statusText: or,
                usesPresentationFadeTransition: a1,
                usesNativeStackPresentationTransition: aU,
                onStart: aW.start,
                onStop: aW.stop,
                onToggleMicrophoneMute: aW.toggleMicrophoneMute,
                onToggleMute: aW.toggleMute,
              }
            : void 0),
          (t2[220] = aZ?.handoff),
          (t2[221] = aJ),
          (t2[222] = oS),
          (t2[223] = a3),
          (t2[224] = aB),
          (t2[225] = a2),
          (t2[226] = aQ),
          (t2[227] = iE),
          (t2[228] = ii),
          (t2[229] = or),
          (t2[230] = aW.canStart),
          (t2[231] = aW.isMicrophoneMuted),
          (t2[232] = aW.isMuted),
          (t2[233] = aW.start),
          (t2[234] = aW.startError),
          (t2[235] = aW.stop),
          (t2[236] = aW.toggleMicrophoneMute),
          (t2[237] = aW.toggleMute),
          (t2[238] = aW.voiceActivity),
          (t2[239] = ie),
          (t2[240] = ir),
          (t2[241] = a9),
          (t2[242] = aU),
          (t2[243] = a1),
          (t2[244] = tG))
        : (tG = t2[244]),
        t2[245] !== ow ||
        t2[246] !== iC ||
        t2[247] !== iv ||
        t2[248] !== oS ||
        t2[249] !== n0 ||
        t2[250] !== i6 ||
        t2[251] !== o3 ||
        t2[252] !== oG ||
        t2[253] !== o8 ||
        t2[254] !== oY ||
        t2[255] !== oz ||
        t2[256] !== o9 ||
        t2[257] !== o2 ||
        t2[258] !== o5 ||
        t2[259] !== oK ||
        t2[260] !== o0 ||
        t2[261] !== o$ ||
        t2[262] !== o6 ||
        t2[263] !== aq ||
        t2[264] !== ib ||
        t2[265] !== nS ||
        t2[266] !== ox ||
        t2[267] !== n$ ||
        t2[268] !== aD ||
        t2[269] !== n7 ||
        t2[270] !== nQ ||
        t2[271] !== od ||
        t2[272] !== ni.response ||
        t2[273] !== ni.startsCollapsed ||
        t2[274] !== iP ||
        t2[275] !== nR ||
        t2[276] !== ik ||
        t2[277] !== ae ||
        t2[278] !== of ||
        t2[279] !== nM ||
        t2[280] !== an ||
        t2[281] !== ax ||
        t2[282] !== aM ||
        t2[283] !== iL ||
        t2[284] !== al ||
        t2[285] !== ao ||
        t2[286] !== tB ||
        t2[287] !== tX ||
        t2[288] !== rl ||
        t2[289] !== rs ||
        t2[290] !== tW ||
        t2[291] !== tY ||
        t2[292] !== tz ||
        t2[293] !== t$ ||
        t2[294] !== rc ||
        t2[295] !== ru ||
        t2[296] !== rd ||
        t2[297] !== tG ||
        t2[298] !== ra ||
        t2[299] !== ri ||
        t2[300] !== rn ||
        t2[301] !== tj ||
        t2[302] !== ro ||
        t2[303] !== tD ||
        t2[304] !== rr ||
        t2[305] !== tU ||
        t2[306] !== tV ||
        t2[307] !== tH
          ? ((tQ = {
              quickChatFocusRequested: nM,
              animatesQuickChatPresentation: ra,
              activityCopies: ri,
              activitySwipeHost: eR.appServices.avatarOverlayScroll,
              activityStackPresentation: ow,
              areActivityPillsPresent: iC,
              areActivityPillsVisible: iv,
              avatar: al,
              petAnimationPaused: rn,
              avatarMenuItems: tj,
              debugWindowBorderVisible: aq,
              interactiveRegionRef: ok,
              isNotificationTrayOpen: ib,
              mascotDragState: n7,
              isRealtimeNativeOverlayEnabled: aD,
              cssOrbGlowEnabled: ro,
              expandedNotificationIds: n0,
              mascotStyle: tD,
              notifications: od,
              arePresentationAccessoriesVisible: rr,
              onActivityStackScroll: tU,
              onActivateNotification: o3,
              onHideActivityPills: o8,
              onActivityPillsHidden: tV,
              onMascotLostPointerCapture: tH,
              onMascotPointerCancel: tB,
              onMascotPointerDown: oY,
              onMascotPointerMove: oz,
              onMascotPointerUp: tX,
              onPetAreaHoverChange: iI,
              onNotificationExpansionChange: o2,
              onGeometryAnimationFrame: rl,
              onDismissNotification: oG,
              onOpenNotificationActions: rs,
              notificationFollowUp: nQ,
              onQuickChatFocusChange: o5,
              onQuickChatOpen: tW,
              onQuickChatDraftChange: tY,
              onRemoveQuickChatAppshots: tz,
              onQuickChatVoiceSelectionChange: nG,
              onRunNotificationControl: o9,
              onRunNotificationAction: oK,
              onSubmitQuestionOption: o$,
              onSubmitQuickChat: o6,
              quickChatFlights: of,
              onQuickChatFlightComplete: tK,
              onShowActivityPills: o0,
              getQuickChatAttachmentActions: i6,
              quickChatFileAttachments: t$,
              quickChatAppshots: iP,
              quickChatThreadTarget: iL,
              quickChatAppshotCapturePending: rc,
              quickChatAppshotCaptureResponse: ni.response,
              quickChatAppshotCaptureStartsCollapsed: ni.startsCollapsed,
              quickChatDraft: ik,
              quickChatEnabled: ae,
              quickChatStashEnabled: ax,
              isQuickChatPetVisible: ru,
              quickChatStyleEnabled: aM,
              quickChatExpanded: ox,
              petControlsExpanded: oS,
              quickChatStashAppearance: an,
              stashAttentionAnimation: ao,
              quickChatEditorActive: nS,
              quickChatCompositionDeferral: nR,
              quickChatVoiceSelected: n$,
              presentation: rd,
              realtimeVoiceSurface: tG,
            }),
            (t2[245] = ow),
            (t2[246] = iC),
            (t2[247] = iv),
            (t2[248] = oS),
            (t2[249] = n0),
            (t2[250] = i6),
            (t2[251] = o3),
            (t2[252] = oG),
            (t2[253] = o8),
            (t2[254] = oY),
            (t2[255] = oz),
            (t2[256] = o9),
            (t2[257] = o2),
            (t2[258] = o5),
            (t2[259] = oK),
            (t2[260] = o0),
            (t2[261] = o$),
            (t2[262] = o6),
            (t2[263] = aq),
            (t2[264] = ib),
            (t2[265] = nS),
            (t2[266] = ox),
            (t2[267] = n$),
            (t2[268] = aD),
            (t2[269] = n7),
            (t2[270] = nQ),
            (t2[271] = od),
            (t2[272] = ni.response),
            (t2[273] = ni.startsCollapsed),
            (t2[274] = iP),
            (t2[275] = nR),
            (t2[276] = ik),
            (t2[277] = ae),
            (t2[278] = of),
            (t2[279] = nM),
            (t2[280] = an),
            (t2[281] = ax),
            (t2[282] = aM),
            (t2[283] = iL),
            (t2[284] = al),
            (t2[285] = ao),
            (t2[286] = tB),
            (t2[287] = tX),
            (t2[288] = rl),
            (t2[289] = rs),
            (t2[290] = tW),
            (t2[291] = tY),
            (t2[292] = tz),
            (t2[293] = t$),
            (t2[294] = rc),
            (t2[295] = ru),
            (t2[296] = rd),
            (t2[297] = tG),
            (t2[298] = ra),
            (t2[299] = ri),
            (t2[300] = rn),
            (t2[301] = tj),
            (t2[302] = ro),
            (t2[303] = tD),
            (t2[304] = rr),
            (t2[305] = tU),
            (t2[306] = tV),
            (t2[307] = tH),
            (t2[308] = tQ))
          : (tQ = t2[308]))
      let rp = tQ
      return (
        t2[309] !== oB || t2[310] !== oU
          ? ((tZ = () => {
              ;(oB(), oU())
            }),
            (t2[309] = oB),
            (t2[310] = oU),
            (t2[311] = tZ))
          : (tZ = t2[311]),
        t2[312] === Symbol.for("react.memo_cache_sentinel")
          ? ((t1 = (e) => {
              nK((t) => (t?.requestId === e ? null : t))
            }),
            (t2[312] = t1))
          : (t1 = t2[312]),
        t2[313] !== rp || t2[314] !== t3 || t2[315] !== nz || t2[316] !== aR || t2[317] !== tZ
          ? ((t0 = (0, i.jsx)(iU, {
              presentation: t3,
              frameProps: rp,
              onLayoutApplied: tZ,
              onQuickChatFocusCompleted: t1,
              quickChatFocusPreparation: nz,
              runtimeId: aR,
            })),
            (t2[313] = rp),
            (t2[314] = t3),
            (t2[315] = nz),
            (t2[316] = aR),
            (t2[317] = tZ),
            (t2[318] = t0))
          : (t0 = t2[318]),
        t0
      )
    }
    function nk(e) {
      return { ...e, threadTarget: null }
    }
    function nO() {}
    function n_() {
      K.O1.dispatchMessage("show-settings", { section: "pets" })
    }
    function nT(e) {
      let { copy: t } = e
      return t
    }
    function nN(e) {
      return Math.max(Date.now(), e + 1)
    }
    function nP(e) {
      return Math.max(Date.now(), e + 1)
    }
    function nL(e) {
      eN.v.debug("Failed to request the current avatar overlay layout", { safe: {}, sensitive: { error: e } })
    }
    function nF() {
      let e = document.querySelector('[data-avatar-overlay-native-surface-id="composer"]'),
        t = e?.querySelector("[data-avatar-overlay-quick-chat-appshot-destination]")
      if (null == e || null == t) return null
      let a = e.getBoundingClientRect(),
        i = t.getBoundingClientRect(),
        n = Number.parseFloat(e.dataset.avatarOverlayQuickChatTargetLeft ?? ""),
        o = Number.parseFloat(e.dataset.avatarOverlayQuickChatTargetTop ?? ""),
        r = e.offsetWidth > 0 ? a.width / e.offsetWidth : 1,
        l = e.offsetHeight > 0 ? a.height / e.offsetHeight : 1
      return !Number.isFinite(n) || !Number.isFinite(o) || r <= 0 || l <= 0
        ? null
        : {
            ...(0, P.b)(e),
            cornerRadius: Number.parseFloat(window.getComputedStyle(t).borderTopLeftRadius),
            height: i.height / l,
            width: i.width / r,
            x: n + (i.left - a.left) / r,
            y: o + (i.top - a.top) / l,
          }
    }
    function nq(e) {
      return { ...e, localPath: void 0 }
    }
    function nj(e, t) {
      K.O1.dispatchMessage("avatar-overlay-keyboard-interaction-changed", { isInteractive: e, restorePreviousFocus: t })
    }
    function nD(e) {
      K.O1.dispatchMessage("avatar-overlay-pointer-interaction-changed", { isInteractive: e })
    }
    function nU(e) {
      return "running" === e.status
    }
    function nV() {
      return Date.now()
    }
    function nH() {
      return new Map()
    }
    function nB(e) {
      let { localConversationId: t } = e
      return null == t ? [] : [t]
    }
    function nX() {
      return crypto.randomUUID()
    }
    function nW() {
      return new eY()
    }
    function nY(e) {
      let { hostId: t, localConversationId: a, status: i } = e
      return "review" === i && null != t && null != a ? [{ hostId: t, threadId: a }] : []
    }
  },
  wzi3(e, t, a) {
    a.d(t, {}, { k: function (e) {} })
  },
  hL9c(e, t, a) {
    var i = a("ABep"),
      n = a("QosV"),
      o = a("slpy"),
      r = a("uteA"),
      l = a("on57"),
      s = a("zd8w"),
      c = a("Wf1j"),
      u = a("HOLv"),
      d = a("X3K1"),
      p = a("T1PX"),
      f = a("RSwQ"),
      m = a("JwGC"),
      h = a("AdZa"),
      g = a("HgLj"),
      v = a("uW1E"),
      y = a("YvRg")
    a.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            a,
            w,
            C,
            b,
            x,
            M,
            A,
            I,
            S,
            R,
            E,
            k,
            O,
            _,
            T,
            N,
            P,
            L,
            F,
            q,
            j,
            D = (0, n.c)(128),
            {
              src: U,
              filename: V,
              alt: H,
              onRemove: B,
              loading: X,
              loadingPercentage: W,
              uploadProgress: Y,
              previewEnabled: z,
              previewPortalContainer: K,
              onPreviewCloseAutoFocus: $,
              onPreviewOpen: G,
              onPreviewOpenChange: Q,
              previewItems: Z,
              previewOverlay: J,
              previewIndex: ee,
              compact: et,
              sizeClassName: ea,
              imageLoading: ei,
              variant: en,
              transitionTargetId: eo,
            } = e,
            er = void 0 === ee ? 0 : ee,
            el = void 0 !== et && et,
            es = void 0 === en ? "default" : en,
            ec = (0, c.A)()
          D[0] !== H || D[1] !== ec
            ? ((t =
                H ??
                ec.formatMessage({
                  id: "codex.localConversation.userImageAttachment",
                  defaultMessage: "User attachment",
                })),
              (D[0] = H),
              (D[1] = ec),
              (D[2] = t))
            : (t = D[2])
          let eu = t,
            ed = (0, p.I)(),
            ep = (0, s.useContext)(f.f),
            ef = (0, s.useRef)(null),
            em = (0, s.useRef)(null),
            [eh, eg] = (0, s.useState)(null),
            ev = null != eh,
            [ey, ew] = (0, s.useState)(),
            eC = "composer" === es && null != Y,
            eb = (void 0 === z || z) && null != U && !eC
          D[3] !== Q
            ? ((a = () => {
                ;(eg(null), Q?.(!1))
              }),
              (D[3] = Q),
              (D[4] = a))
            : (a = D[4])
          let ex = a,
            eM = (e) => {
              if (e && eO && eE?.overlayImage != null) {
                let e = ep?.target?.selectAttachment,
                  t = eE.overlayImage.attachmentId
                return "composer" === es && null != e && null != t && null != ef.current
                  ? void e(t, ef.current, () => {
                      ;(G?.(), eS(er), Q?.(!0))
                    })
                  : void (0, h.Vy)({
                      source: em.current,
                      reducedMotion: ed,
                      open: (e) => {
                        ;(G?.(), ew(() => e), eS(er), Q?.(!0))
                      },
                    })
              }
              ;(e ? (G?.(), eS(er)) : eg(null), Q?.(e))
            }
          D[5] !== eu || D[6] !== U
            ? ((w = null == U ? void 0 : { alt: eu, src: U }), (D[5] = eu), (D[6] = U), (D[7] = w))
            : (w = D[7])
          let eA = w
          D[8] !== eA || D[9] !== Z
            ? ((C = Z ?? (null == eA ? [] : [eA])), (D[8] = eA), (D[9] = Z), (D[10] = C))
            : (C = D[10])
          let eI = C,
            eS = (e) => {
              eg({ index: e, id: eI[e]?.id })
            },
            eR = eh?.index ?? er
          if (eh?.id != null && eI[eR]?.id !== eh.id) {
            let e
            D[11] !== eh ? ((e = (e) => e.id === eh.id), (D[11] = eh), (D[12] = e)) : (e = D[12])
            let t = eI.findIndex(e)
            ;(t >= 0 && (eR = t), eS(eR))
          }
          let eE = eI[er] ?? eA,
            ek = eI[eR] ?? eA,
            eO = null != J && null == K,
            e_ = eR > 0 ? eR - 1 : null,
            eT = eR + 1 < eI.length ? eR + 1 : null
          D[13] !== V || D[14] !== ec
            ? ((b = V ?? ec.formatMessage({ id: "imageAttachment.defaultName", defaultMessage: "image" })),
              (D[13] = V),
              (D[14] = ec),
              (D[15] = b))
            : (b = D[15])
          let eN = b,
            eP = (void 0 !== X && X) || null != W || null != Y
          D[16] !== eM || D[17] !== eE || D[18] !== eO
            ? ((x = () => {
                null == eE || (!(eO && null != eE.overlayImage) && eE.onOpenEditor?.("image_click")) || eM(!0)
              }),
              (D[16] = eM),
              (D[17] = eE),
              (D[18] = eO),
              (D[19] = x))
            : (x = D[19])
          let eL = x,
            eF = "composer" === es ? "rounded-2xl bg-surface-secondary" : "rounded-lg"
          ;(D[20] !== eF
            ? ((M = (0, l.A)("composer-attachment-surface absolute inset-0 overflow-hidden", eF)),
              (D[20] = eF),
              (D[21] = M))
            : (M = D[21]),
            D[22] !== eN ||
            D[23] !== eu ||
            D[24] !== ei ||
            D[25] !== ec ||
            D[26] !== eC ||
            D[27] !== U ||
            D[28] !== em ||
            D[29] !== es
              ? ((A =
                  !eC &&
                  (null == U
                    ? (0, i.jsx)("span", {
                        className: "block size-full",
                        role: "progressbar",
                        "aria-label": ec.formatMessage(
                          {
                            id: "imageAttachment.loadingPreviewAriaLabel",
                            defaultMessage: "Loading preview for {filename}",
                          },
                          { filename: eN },
                        ),
                        children: (0, i.jsx)(d.X, {
                          as: "span",
                          size: "fill",
                          variant: "composer" === es ? "edge-to-edge" : "chatgpt",
                        }),
                      })
                    : (0, i.jsx)("img", {
                        ref: em,
                        src: U,
                        alt: eu,
                        loading: ei,
                        className: "size-full object-cover object-center",
                      }))),
                (D[22] = eN),
                (D[23] = eu),
                (D[24] = ei),
                (D[25] = ec),
                (D[26] = eC),
                (D[27] = U),
                (D[28] = em),
                (D[29] = es),
                (D[30] = A))
              : (A = D[30]),
            D[31] !== eN || D[32] !== ec || D[33] !== eP || D[34] !== W || D[35] !== eC || D[36] !== Y
              ? ((I =
                  eP &&
                  (0, i.jsx)(v.y, {
                    appearance: eC ? "skeleton" : "overlay",
                    label: ec.formatMessage(
                      { id: "imageAttachment.uploadingAriaLabel", defaultMessage: "Uploading {filename}" },
                      { filename: eN },
                    ),
                    percentage: W,
                    upload: null == Y ? void 0 : { filename: eN, progress: Y },
                  })),
                (D[31] = eN),
                (D[32] = ec),
                (D[33] = eP),
                (D[34] = W),
                (D[35] = eC),
                (D[36] = Y),
                (D[37] = I))
              : (I = D[37]),
            D[38] !== eb || D[39] !== es
              ? ((S =
                  "composer" === es
                    ? (0, i.jsx)("span", {
                        className: (0, l.A)(
                          "composer-attachment-surface pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-border ring-inset group-hover/composer-attachment:bg-text/5",
                          eb &&
                            "group-hover/composer-attachment:ring-border-strong group-has-focus-visible/composer-attachment:ring-border-strong",
                        ),
                        "aria-hidden": !0,
                      })
                    : null),
                (D[38] = eb),
                (D[39] = es),
                (D[40] = S))
              : (S = D[40]),
            D[41] !== M || D[42] !== A || D[43] !== I || D[44] !== S
              ? ((R = (0, i.jsxs)("span", { className: M, children: [A, I, S] })),
                (D[41] = M),
                (D[42] = A),
                (D[43] = I),
                (D[44] = S),
                (D[45] = R))
              : (R = D[45]),
            D[46] !== eN || D[47] !== ec || D[48] !== B || D[49] !== es
              ? ((E =
                  B &&
                  (0, i.jsx)(y.a, {
                    className: "composer" === es ? "-top-0.5 -right-0.5" : void 0,
                    ariaLabel: ec.formatMessage(
                      { id: "imageAttachment.removeAriaLabel", defaultMessage: "Remove {filename}" },
                      { filename: eN },
                    ),
                    onRemove: B,
                    size: "composer" === es ? "composer" : "default",
                  })),
                (D[46] = eN),
                (D[47] = ec),
                (D[48] = B),
                (D[49] = es),
                (D[50] = E))
              : (E = D[50]),
            D[51] !== R || D[52] !== E
              ? ((k = (0, i.jsxs)(i.Fragment, { children: [R, E] })), (D[51] = R), (D[52] = E), (D[53] = k))
              : (k = D[53]))
          let eq = k
          D[54] !== el || D[55] !== eb || D[56] !== ea || D[57] !== es
            ? ((O = (0, l.A)(
                "composer-attachment-surface relative inline-flex flex-shrink-0 overflow-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                "composer" === es
                  ? "group/composer-attachment size-30.5 rounded-2xl select-none"
                  : ["rounded-lg border border-strong", ea ?? (el ? "size-[54px]" : "size-20")],
                eb ? "cursor-interaction" : "cursor-default",
              )),
              (D[54] = el),
              (D[55] = eb),
              (D[56] = ea),
              (D[57] = es),
              (D[58] = O))
            : (O = D[58])
          let ej = O
          if (!eb || null == eE || null == ek) {
            let e, t
            D[59] !== eq || D[60] !== ej || D[61] !== eo
              ? ((e = (0, i.jsx)("div", { className: ej, "data-attachment-transition-target": eo, children: eq })),
                (D[59] = eq),
                (D[60] = ej),
                (D[61] = eo),
                (D[62] = e))
              : (e = D[62])
            let a = e
            return (
              D[63] !== a || D[64] !== eC || D[65] !== Y
                ? ((t = eC
                    ? (0, i.jsx)(o.m, {
                        content: (0, i.jsx)(v.v, { progress: Y }),
                        side: "bottom",
                        sideOffset: 4,
                        children: a,
                      })
                    : a),
                  (D[63] = a),
                  (D[64] = eC),
                  (D[65] = Y),
                  (D[66] = t))
                : (t = D[66]),
              t
            )
          }
          ;(D[67] !== eE || D[68] !== eO
            ? ((_ =
                null == eE.onOpenEditor || (eO && null != eE.overlayImage)
                  ? void 0
                  : (e) => {
                      eE.onOpenEditor?.("image_click") && e.preventDefault()
                    }),
              (D[67] = eE),
              (D[68] = eO),
              (D[69] = _))
            : (_ = D[69]),
            D[70] !== eL
              ? ((T = (e) => {
                  e.target === e.currentTarget && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), eL())
                }),
                (D[70] = eL),
                (D[71] = T))
              : (T = D[71]),
            D[72] !== eN || D[73] !== eq || D[74] !== ej || D[75] !== ef || D[76] !== _ || D[77] !== T || D[78] !== eo
              ? ((N = (0, i.jsx)("div", {
                  ref: ef,
                  className: ej,
                  "data-attachment-transition-target": eo,
                  role: "button",
                  "aria-label": eN,
                  tabIndex: 0,
                  onClick: _,
                  onKeyDown: T,
                  children: eq,
                })),
                (D[72] = eN),
                (D[73] = eq),
                (D[74] = ej),
                (D[75] = ef),
                (D[76] = _),
                (D[77] = T),
                (D[78] = eo),
                (D[79] = N))
              : (N = D[79]))
          let eD = N,
            eU = null
          if (ev && eO && null != ek.overlayImage) {
            let e,
              t,
              a = "composer" === es
            if (
              (D[80] !== ek.overlayImage?.imageRef || D[81] !== ey
                ? ((e = (e) => (0, g.P)(ey, ek.overlayImage?.imageRef)(e)),
                  (D[80] = ek.overlayImage?.imageRef),
                  (D[81] = ey),
                  (D[82] = e))
                : (e = D[82]),
              D[83] !== J ||
                D[84] !== eR ||
                D[85] !== ek ||
                D[86] !== ex ||
                D[87] !== eT ||
                D[88] !== $ ||
                D[89] !== er ||
                D[90] !== ef ||
                D[91] !== e_ ||
                D[92] !== eS ||
                D[93] !== a ||
                D[94] !== e ||
                D[95] !== em)
            ) {
              let n, o
              ;(D[97] !== e_ || D[98] !== eS
                ? ((n = null == e_ ? void 0 : () => eS(e_)), (D[97] = e_), (D[98] = eS), (D[99] = n))
                : (n = D[99]),
                D[100] !== eT || D[101] !== eS
                  ? ((o = null == eT ? void 0 : () => eS(eT)), (D[100] = eT), (D[101] = eS), (D[102] = o))
                  : (o = D[102]))
              let r = {
                openedFromComposer: a,
                image: { ...ek.overlayImage, imageRef: e },
                getThumbnail: () => (eR === er ? em.current : null),
                onClose: ex,
                onCloseAutoFocus: (e) => {
                  null != $ ? $(e) : (e.preventDefault(), ef.current?.focus())
                },
                onPreviousImage: n,
                onNextImage: o,
              }
              ;((t = ek.renderOverlay?.(r) ?? (0, i.jsx)(J, { ...r })),
                (D[83] = J),
                (D[84] = eR),
                (D[85] = ek),
                (D[86] = ex),
                (D[87] = eT),
                (D[88] = $),
                (D[89] = er),
                (D[90] = ef),
                (D[91] = e_),
                (D[92] = eS),
                (D[93] = a),
                (D[94] = e),
                (D[95] = em),
                (D[96] = t))
            } else t = D[96]
            eU = t
          }
          let eV = ev && !(eO && null != ek.overlayImage)
          return (
            D[103] !== ek || D[104] !== eM || D[105] !== ec
              ? ((P =
                  null != ek.onOpenEditor && !1 !== ek.showEditButton
                    ? {
                        ariaLabel: ec.formatMessage({ id: "imageAttachment.editImage", defaultMessage: "Edit image" }),
                        icon: (0, i.jsx)(u.I, { "aria-hidden": !1, asset: r.h }),
                        onClick: () => {
                          ek.onOpenEditor?.("edit_button") && eM(!1)
                        },
                      }
                    : void 0),
                (D[103] = ek),
                (D[104] = eM),
                (D[105] = ec),
                (D[106] = P))
              : (P = D[106]),
            D[107] !== e_ || D[108] !== eS
              ? ((L =
                  null == e_
                    ? void 0
                    : () => {
                        eS(e_)
                      }),
                (D[107] = e_),
                (D[108] = eS),
                (D[109] = L))
              : (L = D[109]),
            D[110] !== eT || D[111] !== eS
              ? ((F =
                  null == eT
                    ? void 0
                    : () => {
                        eS(eT)
                      }),
                (D[110] = eT),
                (D[111] = eS),
                (D[112] = F))
              : (F = D[112]),
            D[113] !== ek.alt ||
            D[114] !== ek.onDownloadInitiated ||
            D[115] !== ek.src ||
            D[116] !== eM ||
            D[117] !== $ ||
            D[118] !== eD ||
            D[119] !== K ||
            D[120] !== eV ||
            D[121] !== P ||
            D[122] !== L ||
            D[123] !== F
              ? ((q = (0, i.jsx)(m.C, {
                  src: ek.src,
                  alt: ek.alt,
                  open: eV,
                  onOpenChange: eM,
                  downloadSrc: ek.src,
                  onDownloadClick: ek.onDownloadInitiated,
                  imageDraggable: !1,
                  onCloseAutoFocus: $,
                  editButton: P,
                  onPreviousImage: L,
                  onNextImage: F,
                  portalContainer: K,
                  triggerContent: eD,
                })),
                (D[113] = ek.alt),
                (D[114] = ek.onDownloadInitiated),
                (D[115] = ek.src),
                (D[116] = eM),
                (D[117] = $),
                (D[118] = eD),
                (D[119] = K),
                (D[120] = eV),
                (D[121] = P),
                (D[122] = L),
                (D[123] = F),
                (D[124] = q))
              : (q = D[124]),
            D[125] !== eU || D[126] !== q
              ? ((j = (0, i.jsxs)(i.Fragment, { children: [eU, q] })), (D[125] = eU), (D[126] = q), (D[127] = j))
              : (j = D[127]),
            j
          )
        },
      },
    )
  },
  mt4D(e, t, a) {
    var i = a("pLGj"),
      n = a("HVBu"),
      o = a.n(n),
      r = a("DBCl"),
      l = a("guiN"),
      s = a("DD2M"),
      c = a("ASxG"),
      u = a("Dgwo"),
      d = a("C2tN"),
      p = a("kfGJ"),
      f = a("yI91"),
      m = a("bnxy")
    let h = new WeakMap(),
      g = c.rej({
        error: c
          .YjP()
          .optional()
          .transform((e) => e ?? "Unknown error"),
        ok: c.euz(!1),
      }),
      v = c.gMt("ok", [c.rej({ assetId: c.YjP(), ok: c.euz(!0), path: c.YjP() }), g]),
      y = c.gMt("ok", [c.rej({ ok: c.euz(!0) }), g])
    async function w(e, t, a = {}) {
      return Promise.all(
        e.map(async (e) => {
          var n
          let s = e.name.trim() || "attachment",
            c =
              null == a.createAttachmentFromLocalFile
                ? await t({ contents: e.slice(0, e.size, e.type), label: s })
                : await (async function ({ createAttachmentFromLocalFile: e, file: t, fileName: a, label: n }) {
                    let o = (function (e) {
                      let t = v.safeParse(e)
                      if (t.success) return t.data
                      throw Error("Unable to create browser file attachment asset.")
                    })(await (0, d.ML)({ fileName: a, type: i.rlj }))
                    if (!o.ok) throw Error(o.error)
                    let r = !1
                    try {
                      for (let e = 0; e < t.size; e += 18432) {
                        let a = await C(t.slice(e, e + 18432)),
                          n = (function (e) {
                            let t = y.safeParse(e)
                            if (t.success) return t.data
                            throw Error("Unable to update browser file attachment asset.")
                          })(await (0, d.ML)({ assetId: o.assetId, dataBase64: (0, f.i)(a), type: i.$Sx }))
                        if (!n.ok) throw Error(n.error)
                      }
                      let a = (function (e) {
                        let t = v.safeParse(e)
                        if (t.success) return t.data
                        throw Error("Unable to finish browser file attachment asset.")
                      })(await (0, d.ML)({ assetId: o.assetId, type: i._GO }))
                      if (!a.ok) throw Error(a.error)
                      return ((r = !0), await e({ label: n, sourcePath: a.path }))
                    } catch (e) {
                      throw (r || (await (0, d.ML)({ assetId: o.assetId, type: i.zY4 }).catch(() => void 0)), e)
                    } finally {
                      r && (await (0, d.ML)({ assetId: o.assetId, type: i.tUl }).catch(() => void 0))
                    }
                  })({
                    createAttachmentFromLocalFile: a.createAttachmentFromLocalFile,
                    file: e,
                    fileName: s,
                    label: s,
                  }),
            u = (0, l._O)(c, e.size)
          return (
            ((n = e).type.startsWith("image/") || (0, r.DEu)(n.name)) &&
              h.set(
                u,
                o()(async () => {
                  try {
                    return { bytes: await C(e), mimeType: e.type || null }
                  } catch {
                    return null
                  }
                }),
              ),
            u
          )
        }),
      )
    }
    async function C(e) {
      return "function" == typeof e.arrayBuffer
        ? new Uint8Array(await e.arrayBuffer())
        : new Promise((t, a) => {
            let i = new FileReader()
            ;((i.onerror = () => {
              a(i.error ?? Error("Unable to read file"))
            }),
              (i.onload = () => {
                let { result: e } = i
                e instanceof ArrayBuffer ? t(new Uint8Array(e)) : a(Error("Unable to read file"))
              }),
              i.readAsArrayBuffer(e))
          })
    }
    a.d(
      t,
      {},
      {
        Br: async function (e, t) {
          let [a] = await t([e])
          return a?.fsPath ?? null
        },
        Ge: function (e) {
          return h.get(e)?.() ?? Promise.resolve(null)
        },
        HJ: async function (e, { scope: t, hostConfig: a, hostId: i }) {
          let [n] = await (0, u.V)(t, i).uploadLocalFileAttachments({
            attachments: [{ label: (0, m.Q0)(e), path: e, fsPath: e }],
            allowSftpUpload: (0, r.Tim)(a),
          })
          return n?.fsPath ?? null
        },
        createBrowserFileAttachmentDescriptors: w,
        lB: function ({ accept: e, allowMultiple: t = !0, imagesOnly: a } = {}) {
          return new Promise((i) => {
            let n = document.createElement("input")
            ;((n.type = "file"),
              (n.multiple = t),
              (null != e || a) && (n.accept = e?.join(",") ?? "image/*"),
              (n.style.position = "fixed"),
              (n.style.opacity = "0"),
              (n.style.pointerEvents = "none"),
              (n.style.width = "1px"),
              (n.style.height = "1px"))
            let o = (e) => {
              ;(n.remove(), i(e))
            }
            ;(n.addEventListener(
              "change",
              () => {
                o(null == n.files ? [] : Array.from(n.files))
              },
              { once: !0 },
            ),
              n.addEventListener(
                "cancel",
                () => {
                  o([])
                },
                { once: !0 },
              ),
              (document.body ?? document.documentElement).append(n),
              n.click())
          })
        },
        x1: function (e, t, { copyFromLocalFile: a }) {
          return w(
            t,
            (t) => (0, u.V)(e, p.fI).createFileAttachment(t),
            a ? { createAttachmentFromLocalFile: (t) => (0, u.V)(e, p.fI).copyLocalFileAttachment(t) } : void 0,
          )
        },
        xE: function (e) {
          let t
          if (e.name.trim().length > 0) return e.name
          let a = "jpeg" === (t = (e.type || "image/png").split("/")[1] || "png") ? "jpg" : t
          return `pasted-image-${(0, s.A)().slice(0, 8)}.${a}`
        },
      },
    )
  },
  AAVC(e, t, a) {
    a.d(t, { F: () => E, X: () => k })
    var i = a("DBCl"),
      n = a("DD2M"),
      o = a("Dgwo"),
      r = a("RWvA"),
      l = a("FbPV"),
      s = a("CiLO"),
      c = a("SGsN"),
      u = a("NMCC"),
      d = a("uGmM"),
      p = a("YYwy"),
      f = a("GaA7"),
      m = a("Sd8U"),
      h = a("kfGJ"),
      g = a("Yscs"),
      v = a("kFKz"),
      y = a("bnxy"),
      w = a("mt4D"),
      C = a("A8Az"),
      b = a("NySd"),
      x = a("Hvvy"),
      M = a("uIyc"),
      A = a("sXdr"),
      I = a("UBpz"),
      S = a("qEnx"),
      R = a("xa8Q")
    function E({
      scope: e,
      attachmentGeneration: t,
      canceledPendingFileAttachmentIds: a,
      canCopyBrowserFileAttachments: k,
      onLocalImageQueued: O,
      composerMode: _,
      getUploadToCloud: T,
      executionHostConfig: N,
      executionHostId: P,
      intl: L,
      notifyImageInputUnsupported: F,
      setAddedFiles: q,
      setFileAttachments: j,
      setImageAttachments: D,
      setPendingFileAttachments: U,
      supportsImageInputs: V,
    }) {
      let H = (a, i, o, r, c, d) => {
          var p
          let m, v, y, x, A, I, S
          if (!V) return (F(), !1)
          if (0 === a.length) return !0
          let R = t.current,
            E = [],
            T = (e, a) => {
              a.then((a) => {
                t.current === R && null != a && D((t) => t.map((t) => (t.id === e ? { ...t, localPath: a } : t)))
              }).catch(() => {})
            },
            L = !1
          for (let t of a) {
            let a,
              l,
              s,
              u = window.electronBridge?.getPathForFile,
              p = (0, w.xE)(t),
              m = "cloud" !== _,
              v = m && k ? (e) => (0, w.Br)(e, Y) : void 0,
              y = (0, b.ho)(
                t,
                u,
                m && 1 ? f.appServices.fileAttachments.persistImageFileToTemp : void 0,
                m && P !== h.fI ? (t) => (0, w.HJ)(t, { scope: e, hostConfig: N, hostId: P }) : void 0,
                v,
                i,
              ).catch(() => null),
              C = null == r ? void 0 : (0, n.A)()
            if ("cloud" === _ && null != u)
              try {
                null == (0, b.gY)(t, u) && (s = t)
              } catch {}
            let x = (e) => {
              B(async (e) => ((a = a ?? (0, g.G)(t)), { id: e, src: await a, filename: p }), {
                newImageId: C,
                uploadFile: s,
                onPending: (e) => {
                  null != l && (l.isPending = e)
                },
                onComplete: (e) => {
                  null != l && ((l.isPending = void 0), "canceled" !== e && (l.restart = void 0))
                },
                orderKey: c?.get(t),
                isAvailable: null == d ? void 0 : () => L || !d.signal.aborted,
                onQueued: (t) => {
                  ;(O?.(t), d?.onQueued(t), L || ((L = !0), o?.()), T(t, y), e?.())
                },
              })
            }
            ;(null != C && ((l = { id: C, restart: x, restoreLocalPath: T.bind(null, C, y) }), E.push(l)), x())
          }
          return (
            null != r &&
              E.length > 0 &&
              r(
                ((p = () => t.current === R),
                (m = (0, l.hj)(e)),
                (v = E),
                (y = []),
                (x = []),
                (A = []),
                (I = []),
                (S = (t) => (0, M.ov)(e, t) || e.get(s.gy).some((e) => e.id === t)),
                {
                  hasNewerAppAction: (e) => m(e),
                  canApply: (t) =>
                    p() &&
                    ("undo" === t
                      ? v.some((t) => t.isPending?.() || (!(0, M.ov)(e, t.id) && S(t.id)))
                      : y.some(({ member: e }) => !S(e.id))),
                  undo: () => {
                    m = (0, l.hj)(e)
                    let t = e.get(s.JX)
                    I = t.map(({ attachmentId: e }) => e)
                    let a = e.get(s.gy)
                    for (let i of ((A = a.map(({ id: e }) => e)), (x = e.get(s.CH)), (y = []), v)) {
                      let n = i.isPending?.()
                      if (!n && (0, M.ov)(e, i.id)) continue
                      let o = a.find((e) => e.id === i.id)
                      if (!n && null == o) continue
                      let r = t.find(({ attachmentId: e }) => e === i.id)
                      ;(y.push({ member: i, saved: n ? void 0 : o, comment: r }),
                        n && (0, M.td)(e, i.id),
                        null != r && (0, u.II)(e, i.id))
                    }
                    let i = new Set(y.map(({ member: e }) => e.id))
                    ;(D((e) => e.filter((e) => !i.has(e.id))),
                      (0, s.KZ)(
                        e,
                        Array.from(i, (e) => (0, C.Xq)("image", e)),
                      ))
                  },
                  redo: () => {
                    m = (0, l.hj)(e)
                    let t = y.filter(({ member: e }) => !S(e.id))
                    ;((v = t.map(({ member: e }) => e)), (y = []))
                    let a = t.flatMap(({ saved: e }) => e ?? [])
                    a.length > 0 &&
                      D((e) => {
                        let t = new Map([...e, ...a].map((e) => [e.id, e]))
                        return (0, C.a6)(
                          e.map(({ id: e }) => e),
                          A,
                          a.map(({ id: e }) => e),
                        ).flatMap((e) => t.get(e) ?? [])
                      })
                    let i = I
                    for (let { member: a, saved: n, comment: o } of t) {
                      let t = () => {
                        null == o ||
                          e.get(s.JX).some((e) => e.attachmentId === a.id) ||
                          ((0, u.E$)(e, a.id, o.attachmentSrc),
                          (0, s.Rh)(e, "imageCommentDrafts", (e) => {
                            let t = e.filter((e) => e.attachmentId !== a.id),
                              n = (0, C.a6)(
                                t.map((e) => e.attachmentId),
                                i,
                                [a.id],
                              ).indexOf(a.id)
                            return t.toSpliced(n, 0, o)
                          }))
                      }
                      null == n ? a.restart?.(t) : (a.restoreLocalPath(), t())
                    }
                    ;(0, s.mt)(
                      e,
                      x,
                      t.map(({ member: e }) => (0, C.Xq)("image", e.id)),
                    )
                  },
                }),
              ),
            !0
          )
        },
        B = async (a, o = {}) => {
          let r = (0, m.ah)(e)
          if (o.isAvailable?.() === !1) return void o.onComplete?.("blocked")
          let d = t.current,
            f = e.get(s.gy).find((e) => e.id === o.replaceImageId)
          if (null != o.replaceImageId && null == f) return void o.onComplete?.("blocked")
          let h = f?.id ?? o.newImageId ?? (0, n.A)(),
            g = (0, C.Xq)("image", h)
          null != o.orderKey ? (0, s.vi)(e, o.orderKey, g) : (0, s.A5)(e, [g])
          let v = !1,
            y = !1,
            w = (a, i) => {
              y ||
                ((y = !0),
                "success" !== a && null == f && (0, s.KZ)(e, [g]),
                o.signal?.removeEventListener("abort", b),
                "success" !== a &&
                  v &&
                  t.current === d &&
                  (null == f && e.get(s.JX).some((e) => e.attachmentId === h) && (0, u.II)(e, h),
                  D((e) => (null == f ? e.filter((e) => e.id !== h) : e.map((e) => (e.id === h ? f : e))))),
                "success" === a ? x.succeed() : x.fail(),
                o.onComplete?.(a, i))
            },
            b = () => w("canceled"),
            x = (0, M.Mz)(e, { hostId: P, id: h, onCancel: b })
          o.onPending?.(x.isPending)
          let A = () =>
            !y &&
            (o.signal?.aborted || t.current !== d || ((v || null != f) && !e.get(s.gy).some((e) => e.id === h))
              ? (w("canceled"), !1)
              : o.isAvailable?.() !== !1 || (w("blocked"), !1))
          o.signal?.addEventListener("abort", b, { once: !0 })
          try {
            if (!A()) return
            let t = a(h),
              i = { ...(t instanceof Promise ? await t : t), uploadStatus: "cloud" === _ ? "uploading" : "idle" }
            if (
              !A() ||
              ((v = !0),
              D((e) =>
                null == f ? [...e, i] : e.map((e) => (e.id === h ? { ...f, uploadStatus: i.uploadStatus } : e)),
              ),
              o.onQueued?.(h),
              !A())
            )
              return
            let n =
              "cloud" === _
                ? {
                    ...i,
                    ...(await (0, S.s)({
                      dataUrl: i.uploadSrc ?? i.src,
                      filename: i.filename ?? `image-${h}.png`,
                      onStep: o.onUploadStep,
                      file: o.uploadFile,
                    })),
                  }
                : i
            if (!A()) return
            ;(D((e) => e.map((e) => (e.id !== h ? e : { ...e, ...n }))),
              null != f &&
                (i.src !== f.src || i.markupPrompt !== f.markupPrompt) &&
                (0, l.mq)(e, `composer-image-attachments:${(0, m.eL)(e.value)}`),
              w("success"))
          } catch (t) {
            A() &&
              (e
                .get(c.Id)
                .danger(
                  L.formatMessage({ id: "composer.imageUploadFailed", defaultMessage: "Failed to upload image" }),
                  {
                    errorAnalytics: { toastId: "composer.imageUploadFailed" },
                    primaryAction: (0, p.t)(e, {
                      conversationId: r,
                      surface: "codex",
                      operation: "attachment",
                      errorMessage: (0, i.Rt_)(t),
                      occurredAtMs: Date.now(),
                    }),
                  },
                ),
              w("error", t))
          }
        },
        X = (t) => {
          let a = ({ fsPath: e, startLine: t, endLine: a }) => JSON.stringify([(0, y.XH)(e), t, a]),
            i = new Set([...e.get(s.a$), ...e.get(s.PA)].map(a))
          return t.filter((e) => {
            let t = a(e)
            return !i.has(t) && (i.add(t), !0)
          })
        },
        W = (t, a) => {
          let i = X(t)
          for (let t of i) {
            let i = a?.get(t)
            null != i && (0, s.vi)(e, i, (0, C.Jz)(t, "added-file"))
          }
          return (
            null != a &&
              (0, s.KZ)(
                e,
                t.flatMap((e) => a.get(e) ?? []),
              ),
            0 !== i.length && (q((e) => [...e, ...i]), !0)
          )
        },
        Y = (t) => (0, w.x1)(e, t, { copyFromLocalFile: k }),
        z = async (l, u, f) => {
          let g = (0, m.ah)(e)
          if (T?.()) {
            let a = t.current
            ;(u?.(), await (0, R.gv)(e, l, { orderKeys: f, hostId: P, shouldDiscard: () => t.current !== a || !T() }))
            return
          }
          if (P === h.fI) {
            let t = X(l)
            for (let a of t) {
              let t = (0, C.Jz)(a),
                i = f?.get(a)
              null != i ? (0, s.vi)(e, i, t) : (0, s.A5)(e, [t])
            }
            ;(null != f &&
              (0, s.KZ)(
                e,
                l.flatMap((e) => f.get(e) ?? []),
              ),
              t.length > 0 && (j((e) => [...e, ...t]), u?.()))
            return
          }
          let v = l.filter((e) => !(0, i.skP)(e))
          for (let t of l)
            if ((0, i.skP)(t)) {
              let a = f?.get(t)
              null != a && (0, s.KZ)(e, [a])
            }
          if (
            (v.length !== l.length &&
              e
                .get(c.Id)
                .danger(
                  L.formatMessage({
                    id: "composer.fileAttachment.remoteFolderUnsupported",
                    defaultMessage: "Folders can only be attached to local conversations",
                  }),
                  { errorAnalytics: { toastId: "composer.fileAttachment.remoteFolderUnsupported" } },
                ),
            0 === v.length)
          )
            return
          let y = v.map((e) => ({
            id: (0, n.A)(),
            label: e.label,
            localPreviewPath: null == e.startLine ? e.fsPath : void 0,
          }))
          for (let [t, a] of y.entries()) {
            let i = (0, C.Xq)("pending", a.id),
              n = v[t],
              o = null == n ? void 0 : f?.get(n)
            null != o ? (0, s.vi)(e, o, i) : (0, s.A5)(e, [i])
          }
          let w = t.current
          ;(U((e) => [...e, ...y]), u?.())
          let b = y.map(({ id: t }) => (0, M.Mz)(e, { hostId: P, id: t }))
          try {
            let n = await (0, o.V)(e, P).uploadLocalFileAttachments({ attachments: v, allowSftpUpload: (0, i.Tim)(N) })
            if (t.current === w) {
              let t = n.filter((t, i) => {
                let n = y[i],
                  o = null != n && !a.has(n.id)
                return (
                  o &&
                    (null != n.localPreviewPath && x.Y.set(t, { id: n.id, path: n.localPreviewPath }),
                    (0, s.vi)(e, (0, C.Xq)("pending", n.id), (0, C.Jz)(t))),
                  o
                )
              })
              for (let [e, i] of (t.length > 0 && j((e) => [...e, ...t]), y.entries()))
                null == n[e] || a.has(i.id) || b[e]?.succeed()
            }
          } catch (n) {
            if ((0, d.e)(e) && (t.current !== w || y.every(({ id: e }) => a.has(e)))) return
            e.get(c.Id).danger((0, r.c)(n, L), {
              primaryAction: (0, p.t)(e, {
                conversationId: g,
                surface: "codex",
                operation: "attachment",
                errorMessage: (0, i.Rt_)(n),
                occurredAtMs: Date.now(),
              }),
              errorAnalytics: { toastId: "composerAttachmentActions.uploadLocalFileAttachments" },
            })
          } finally {
            for (let e of b) e.fail()
            ;(0, A.xm)(e, h.fI, v)
            let t = new Set(y.map((e) => e.id))
            for (let i of ((0, s.KZ)(
              e,
              [...t].map((e) => (0, C.Xq)("pending", e)),
            ),
            U((e) => e.filter((e) => !t.has(e.id))),
            t))
              a.delete(i)
          }
        },
        K = (a, o, r, l, u) => {
          if (0 === a.length) return
          let f = u ?? $(a)
          if (T?.()) {
            let i = t.current
            ;(r?.(),
              (0, R.gv)(e, a, {
                orderKeys: f,
                directoryFiles:
                  l ??
                  (0, v.p)(o ?? null)
                    .filter(({ isDirectory: e }) => e)
                    .map(({ file: e }) => e),
                hostId: P,
                shouldDiscard: () => t.current !== i || !T(),
              }))
            return
          }
          let g = window.electronBridge?.getPathForFile,
            w = (0, b.FA)(a, g, o, l),
            x = k ? a.filter((e) => e.size > 0 && null == (0, b.gY)(e, g)) : [],
            A = new Map()
          for (let t of a) {
            let a = (0, b.gY)(t, g),
              i = null == a ? void 0 : w.find((e) => (0, y.XH)(e.fsPath) === (0, y.XH)(a)),
              n = f.get(t)
            null != n && (null == i || A.has(i) ? x.includes(t) || (0, s.KZ)(e, [n]) : A.set(i, n))
          }
          if (x.length > 0) {
            let a = (0, M.Mz)(e, { hostId: P, id: (0, n.A)() }),
              o = (0, m.ah)(e)
            ;(async () => {
              let n = t.current
              try {
                let i = await Y(x)
                if (t.current !== n) return
                for (let [t, a] of i.entries()) {
                  let i = x[t],
                    n = null == i ? void 0 : f.get(i)
                  null != n && (0, s.vi)(e, n, (0, C.Jz)(a))
                }
                let o = W(w, A)
                ;(j((e) => [...e, ...i]), a.succeed(), (o || i.length > 0) && r?.())
              } catch (r) {
                if ((0, d.e)(e) && t.current !== n) return
                let a = L.formatMessage({
                  id: "composer.fileAttachment.browserFileCopyError",
                  defaultMessage: "Unable to attach file",
                })
                e.get(c.Id).danger(a, {
                  primaryAction: (0, p.t)(e, {
                    conversationId: o,
                    surface: "codex",
                    operation: "attachment",
                    errorMessage: (0, i.Rt_)(r),
                    occurredAtMs: Date.now(),
                  }),
                  errorAnalytics: { toastId: "composer.fileAttachment.browserFileCopyError" },
                })
              } finally {
                ;(a.fail(), (0, s.KZ)(e, [...f.values()]))
              }
            })()
            return
          }
          P !== h.fI ? z(w, r, A) : W(w, A) && r?.()
        },
        $ = (t) => {
          let a = new Map(t.map((e) => [e, (0, C.Xq)("pending", (0, n.A)())]))
          return ((0, s.A5)(e, [...a.values()]), a)
        },
        G = (t, a, n, o, r) => {
          let { directoryFiles: l, imageDropHistoryView: c } = r ?? {},
            u =
              l ??
              (0, v.p)(n ?? null)
                .filter((e) => e.isDirectory)
                .map((e) => e.file),
            d = $(t),
            p = t.filter((e) => !u.includes(e) && (0, i.cb0)(e)),
            f = t.filter((e) => !p.includes(e)),
            m = null != c && 0 === f.length ? (0, I.k5)(c, o) : null,
            h = 0 === p.length || H(p, a, m?.onAdded ?? o, m?.record, d)
          ;(h ||
            (0, s.KZ)(
              e,
              p.flatMap((e) => d.get(e) ?? []),
            ),
            h
              ? K(f, n, o, u, d)
              : (0, s.KZ)(
                  e,
                  f.flatMap((e) => d.get(e) ?? []),
                ))
        }
      return {
        addDraggedImage: async (a, i) => {
          let o = t.current,
            r = (0, C.Xq)("pending", (0, n.A)())
          ;(0, s.A5)(e, [r])
          let l = (0, M.Mz)(e, { hostId: P, id: (0, n.A)() })
          try {
            let e = await (0, b.Rb)(a)
            null != e && t.current === o && (H([e], "drop", i, void 0, new Map([[e, r]])), l.succeed())
          } finally {
            ;(l.fail(), (0, s.KZ)(e, [r]))
          }
        },
        addFiles: G,
        addPickedFiles: async (a, { imagesOnly: o, loadImageDataUrls: r, orderKeys: l }) => {
          let c = t.current,
            u = a.filter((e) => !(0, i.skP)(e) && (0, i.DEu)(e.fsPath || e.path || e.label)),
            d = o ? u : a,
            p = l ?? $(d),
            f = (0, M.Mz)(e, { hostId: P, id: (0, n.A)() })
          try {
            let e = 0 === u.length ? [] : await r(u)
            if (t.current !== c) return
            let i = 0
            if (e.some((e) => null != e) && !V) F()
            else
              for (let [t, a] of e.entries()) {
                let e = u[t]
                null != a &&
                  null != e &&
                  (i++,
                  B((e) => ({ id: e, src: a.dataUrl, localPath: a.localPath, filename: a.filename }), {
                    orderKey: p.get(e),
                    onQueued: O,
                  }))
              }
            ;(o ||
              (await z(
                a.filter((e) => !u.includes(e)),
                void 0,
                p,
              )),
              i === u.length && f.succeed())
          } finally {
            ;(f.fail(), (0, s.KZ)(e, [...p.values()]))
          }
        },
        addFileDescriptorsAsMentions: W,
        addFileMentionsFromFiles: K,
        addImageDataUrls: (e, t) => {
          if (0 === e.length) return !1
          for (let a of e)
            B((e) => ({ id: e, src: a.dataUrl, localPath: a.localPath, filename: a.filename }), {
              onQueued: "screenshot" === t ? O : void 0,
            })
          return !0
        },
        addHomeImage: (e, t, a) => {
          H([e], "paste", void 0, void 0, void 0, { signal: t, onQueued: a })
        },
        addImages: H,
        addSidebarDroppedFiles: (e, t) => {
          let { directoryFiles: a, files: i } = e
          G(i, "drop", null, t, { directoryFiles: a })
        },
        addImageAttachment: B,
        pickBrowserAttachments: async ({ imagesOnly: a }) => {
          let o = t.current,
            r = T?.(),
            l = await (0, w.lB)({ imagesOnly: a })
          if (t.current !== o || r !== T?.()) return null
          if (r && !k) return (G(a ? l.filter(i.cb0) : l, "picker", null), null)
          let c = $(l),
            u = (0, M.Mz)(e, { hostId: P, id: (0, n.A)() })
          try {
            let a = await Y(l)
            if (t.current !== o) return ((0, s.KZ)(e, [...c.values()]), { files: [] })
            let i = new Map()
            for (let [e, t] of a.entries()) {
              let a = l[e],
                n = null == a ? void 0 : c.get(a)
              null != n && i.set(t, n)
            }
            return (u.succeed(), { files: a, orderKeys: i })
          } catch (t) {
            throw ((0, s.KZ)(e, [...c.values()]), t)
          } finally {
            u.fail()
          }
        },
        uploadImageAttachment: (a, i) => {
          t.current === i &&
            B(() => a, {
              replaceImageId: a.id,
              onComplete: (t) => {
                "error" === t &&
                  (e.get(s.JX).some((e) => e.attachmentId === a.id) && (0, u.II)(e, a.id),
                  D((e) => e.filter((e) => e.id !== a.id)))
              },
            })
        },
        uploadLocalFileAttachments: z,
      }
    }
    function k(e, t, a) {
      let i = (t) => a(t, "paste", void 0, (t) => (0, I.Od)(e.view, t)),
        n = (e, a) => {
          t(e, "paste", a ?? void 0)
        }
      return (
        e.addPastedImagesHandler(i),
        e.addPastedFilesHandler(n),
        () => {
          ;(e.removePastedImagesHandler(i), e.removePastedFilesHandler(n))
        }
      )
    }
  },
  bDfs(e, t, a) {
    let i = (0, a("Qgfj").zR)({ id: "appUndo.attachmentRemoved", defaultMessage: "Attachment restored" })
    a.d(t, {}, { z: i })
  },
  Hvvy(e, t, a) {
    let i = new WeakMap()
    a.d(t, {}, { Y: i })
  },
  sXdr(e, t, a) {
    var i = a("DBCl"),
      n = a("ZjPZ"),
      o = a("Dgwo"),
      r = a("uNQ5")
    function l(e, t, a) {
      for (let i of a) c(e, t, i.path)
    }
    function s(e, t, a) {
      for (let i of a) null == i.upload && c(e, (0, n.FZ)(i, t), i.file.path)
    }
    function c(e, t, a) {
      try {
        ;(0, o.V)(e, t)
          .removePastedTextAttachment(a)
          .catch(() => void 0)
      } catch {}
    }
    a.d(
      t,
      {},
      {
        OS: async function (e, t) {
          let o
          if (!(0, i.av0)(e.characterCount)) throw Error("Pasted text attachment cannot be restored")
          if (null != e.upload) {
            let { fetchChatGptFileBlob: t } = await Promise.resolve().then(a.bind(a, "vldH")),
              i = await t({ conversationId: null, target: { type: "file-id", fileId: e.upload.fileId } })
            o = await i.text()
          } else ({ contents: o } = await (0, r.tA)({ hostId: (0, n.FZ)(e, t), path: e.file.path }))
          if (o.length > i.yIr) throw Error("Pasted text attachment is too large to restore")
          return o
        },
        Yr: function (e, t, a, i) {
          ;(l(e, t, a), s(e, t, i))
        },
        dT: s,
        k7: c,
        k8: function (e, t) {
          let a = t?.filter((t) => e.some((e) => e.path === t))
          return a?.length ? a : void 0
        },
        kf: async function ({ scope: e, executionHostId: t, filename: a, label: i, shouldDiscard: n, text: r }) {
          let l = await (0, o.V)(e, t).createPastedTextAttachment(r, i, a)
          return n() ? (c(e, t, l.path), null) : l
        },
        xm: l,
      },
    )
  },
  BFUY(e, t, a) {
    var i = a("DBCl")
    a.d(
      t,
      {},
      {
        F2: function (e, t) {
          switch (e) {
            case ":read-only":
              return "read-only"
            case ":workspace":
              return t
            case ":danger-full-access":
              return "full-access"
            default:
              return null
          }
        },
        bN: function ({
          availableAgentModes: e,
          preferredNonFullAccessMode: t,
          isGuardianModeAvailable: a,
          isConfigDataPending: i,
          configNonFullAccessMode: n,
        }) {
          let o =
              null != t &&
              ("granular" !== n || "auto" !== t) &&
              ("auto" !== n || "granular" !== t) &&
              e.includes(t) &&
              ("guardian-approvals" !== t || a)
                ? t
                : null,
            r = null != t && null == o
          return {
            canSelectGuardianMode: a,
            resolvedNonFullAccessMode: o ?? n,
            validPreferredNonFullAccessMode: o,
            shouldClearPreferredNonFullAccessMode: !i && (r || (!e.includes("custom") && null != o && o === n)),
          }
        },
        d_: function (e, t, a, i = null, n = null) {
          return null != n && e.includes(n)
            ? n
            : null != i && e.includes(i)
              ? i
              : null != t && e.includes(t)
                ? t
                : e.includes("custom")
                  ? "custom"
                  : !e.some((e) => "full-access" !== e && "custom" !== e) && e.includes("full-access")
                    ? "full-access"
                    : a
        },
        lS: function ({
          isConfigDataPending: e,
          requirements: t,
          resolvedConfig: a,
          isGuardianApprovalEnabledByStatsig: n,
          isGuardianDefaultEnabledByStatsig: o = !1,
          isAutoReviewRequiredForSelectedModel: r = !1,
          hasAuthoritativeGuardianApprovalDefault: l = !1,
          defaultWorkspaceWriteMode: s = "auto",
          showFullAccessInComposer: c,
        }) {
          let u,
            d = e ? ["read-only", "auto", "granular", "full-access", "custom"] : (0, i.L9S)(t, a),
            p = (0, i.bAH)(a ?? void 0) ?? !0,
            f = r || n || l,
            m = d.filter((e) => "guardian-approvals" !== e),
            h = d.includes("guardian-approvals") && 0 === m.length,
            g = (f && p) || h ? d : m,
            v = g.includes("guardian-approvals"),
            y = g.filter((e) => "custom" !== e),
            w = (0, i.NsC)(a ?? void 0, s),
            C = "full-access" === w ? null : w,
            b =
              v &&
              ("auto" === w || ("granular" === w && a?.approval_policy == null)) &&
              ((o &&
                a?.approval_policy == null &&
                a?.sandbox_mode == null &&
                a?.approvals_reviewer == null &&
                (a?.model_provider ?? "openai") === "openai") ||
                (0, i.bzb)((0, i.Bnq)(a ?? void 0))),
            x = b ? "guardian-approvals" : w
          if (g.includes("custom") && null != x) {
            let e = (0, i.$5i)("custom", [], a),
              t = (0, i.$5i)(x, [], a)
            ;((0, i.weu)(e) === x &&
              (e.approvalsReviewer === t.approvalsReviewer ||
                ((0, i.bzb)(e.approvalsReviewer) && (0, i.bzb)(t.approvalsReviewer)))) ||
              (x = null)
          }
          let M = "full-access" === x && !1 === c,
            A = !e && null != x && g.includes(x) && !M ? g.filter((e) => "custom" !== e) : g,
            I = "custom" === (u = (0, i.ic_)(y)) ? "read-only" : u
          return (
            (r && v) || b ? (I = "guardian-approvals") : null != C && y.includes(C) && (I = C),
            {
              availableAgentModes: A,
              canShowCustom: A.includes("custom"),
              canUnlock: A.includes("full-access"),
              customEquivalentMode: x,
              isGuardianModeAvailable: v,
              isConfigDataPending: e,
              configNonFullAccessMode: I,
              showGuardianOption: f,
            }
          )
        },
        pl: function ({ defaultWorkspaceWriteMode: e, isWindowsSandboxRequired: t }) {
          return t ? "read-only" : e
        },
      },
    )
  },
  Y72c(e, t, a) {
    let i = (0, a("Nwp9").m3)("composer-permission-mode-visibility", !0)
    a.d(
      t,
      {},
      {
        I0: i,
        KZ: function ({ availableAgentModes: e, visibleAgentModes: t }) {
          return e.includes("custom") ? [...t, "custom"] : t
        },
        Mv: function ({
          canShowDefaultPermissions: e,
          canSelectGuardianMode: t,
          canShowConfigCustom: a,
          canShowConfigFullAccess: i,
          canShowGuardianOption: n,
          selectionAgentModes: o,
          visibleAgentModes: r,
        }) {
          let l = i && r.includes("full-access"),
            s = a && o.includes("custom")
          return {
            canShowCustom: s,
            canShowFullAccess: l,
            optionCount: +!!e + (n && t ? 1 : 0) + +!!l + +!!s,
            showGuardianOption: n,
          }
        },
        cT: function (e) {
          return "boolean" == typeof e ? e : (e?.["full-access"] ?? !0)
        },
        o4: function ({ availableAgentModes: e, showFullAccessInComposer: t }) {
          return e.filter((e) => {
            switch (e) {
              case "full-access":
                return t
              case "custom":
                return !1
              case "auto":
              case "granular":
              case "guardian-approvals":
              case "read-only":
                return !0
            }
          })
        },
      },
    )
  },
  xa8Q(e, t, a) {
    var i = a("SRbQ"),
      n = a("Bl5Q"),
      o = a("DBCl"),
      r = a("DD2M"),
      l = a("JpbF"),
      s = a("SPnB"),
      c = a("SGsN"),
      u = a("svjy"),
      d = a("GaA7"),
      p = a("Sd8U"),
      f = a("yI91"),
      m = a("WFY2"),
      h = a("A8Az"),
      g = a("bDfs"),
      v = a("CiLO"),
      y = a("uIyc")
    async function w({ scope: e, file: t, onIdentityChanged: i, shouldDiscard: n, signal: o }) {
      let r = e.get(s.chatGptAuthenticatedAccountId$),
        l = e.get(s.o8)
      if (null == r) throw Error("File upload requires a ChatGPT account")
      let c = new AbortController(),
        u = e.watch((e) => {
          ;(e.get(s.chatGptAuthenticatedAccountId$) !== r || e.get(s.o8) !== l) && (c.abort(), i())
        }),
        d = () => {
          if ((o.throwIfAborted(), c.signal.throwIfAborted(), n()))
            throw new DOMException("File attachment canceled", "AbortError")
          if (e.get(s.chatGptAuthenticatedAccountId$) !== r || e.get(s.o8) !== l)
            throw new DOMException("File upload identity changed", "AbortError")
        }
      try {
        let { uploadCodexFileAttachment: i } = await a.e(117753).then(a.bind(a, "RyQl")),
          n = await i({ scope: e, file: t, beforeRequest: d, signal: AbortSignal.any([o, c.signal]) })
        return (d(), e.set(v.DL, { accountId: r, userId: l }), n)
      } finally {
        u()
      }
    }
    a.d(
      t,
      {},
      {
        G3: function (e, t) {
          let a = e.get(v.TM),
            i = e.get(v.CH),
            n = a[t]
          if (null == n) return
          let o = a.filter((e, a) => a !== t)
          ;((0, v.Rh)(e, "uploadedFileAttachments", o),
            (0, l.pA)(e, { label: g.z, transitionQueueKey: `composer-attachments:${(0, p.eL)(e.value)}` }, (t) => {
              t.add({
                undo: () => {
                  ;((0, v.Rh)(e, "uploadedFileAttachments", a),
                    (0, v.mt)(e, i, [(0, h.Xq)("uploaded-file", n.upload.fileId)]))
                },
                redo: () => (0, v.Rh)(e, "uploadedFileAttachments", o),
              })
            }))
        },
        gv: async function (e, t, { hostId: a, shouldDiscard: l, directoryFiles: p = [], orderKeys: m }) {
          let g = e.get(u.g),
            C = t.filter((e) => (e instanceof File ? !p.includes(e) : !(0, o.skP)(e)))
          C.length !== t.length &&
            ((0, v.KZ)(
              e,
              t.filter((e) => !C.includes(e)).flatMap((e) => m?.get(e) ?? []),
            ),
            e
              .get(c.Id)
              .danger(
                g.formatMessage({
                  id: "composer.fileAttachment.remoteFolderUnsupported",
                  defaultMessage: "Folders can only be attached to local conversations",
                  description:
                    "Toast shown when a local folder cannot be attached to a conversation running on a remote host",
                }),
                { errorAnalytics: { toastId: "composer.fileAttachment.remoteFolderUnsupported" } },
              ))
          let b = e.get(v.kV),
            x = e.get(s.chatGptAuthenticatedAccountId$),
            M = e.get(s.o8),
            A = C.map((t) => {
              let i = (0, r.A)(),
                n = (0, h.Xq)("pending", i),
                o = m?.get(t)
              null != o ? (0, v.vi)(e, o, n) : (0, v.A5)(e, [n])
              let l = new AbortController(),
                s = (0, y.Mz)(e, { hostId: a, id: i, onCancel: () => l.abort() })
              return { file: t, id: i, controller: l, operation: s }
            })
          ;(e.set(y.UF, (e) => [
            ...e,
            ...A.map(({ file: e, id: t }) => ({ id: t, label: e instanceof File ? e.name : e.label })),
          ]),
            await (0, n.Ay)(
              A,
              async ({ file: t, id: a, controller: n, operation: o }) => {
                let r = () =>
                  l() ||
                  e.get(s.chatGptAuthenticatedAccountId$) !== x ||
                  e.get(s.o8) !== M ||
                  e.get(v.kV) !== b ||
                  !o.isPending()
                try {
                  let l
                  if (r()) return
                  if (t instanceof File) l = t
                  else {
                    let e = { stack: [], error: void 0, hasError: !1 }
                    try {
                      let a = (0, i.mS)(
                        e,
                        await d.appServices.workspaceFiles.read({
                          hostId: "local",
                          path: t.fsPath,
                          representation: "blob",
                        }),
                        !1,
                      )
                      if (!("blob" in a)) throw Error("Attachment contents were not returned as a blob")
                      l = new File([(0, f.K)(a.blob)], t.label)
                    } catch (t) {
                      ;((e.error = t), (e.hasError = !0))
                    } finally {
                      ;(0, i.hk)(e)
                    }
                  }
                  let s = await w({ scope: e, file: l, onIdentityChanged: o.fail, shouldDiscard: r, signal: n.signal })
                  if (r()) return
                  ;((0, v.vi)(e, (0, h.Xq)("pending", a), (0, h.Xq)("uploaded-file", s.fileId)),
                    (0, v.Rh)(e, "uploadedFileAttachments", (e) => [...e, { upload: s }]),
                    o.succeed())
                } catch {
                  r() ||
                    e
                      .get(c.Id)
                      .danger(
                        g.formatMessage({
                          id: "composer.fileAttachment.uploadError",
                          defaultMessage: "Unable to upload file",
                          description: "Toast shown when copying a local file to a remote host fails",
                        }),
                        { errorAnalytics: { toastId: "composer.fileAttachment.uploadError" } },
                      )
                } finally {
                  ;(o.fail(), (0, v.KZ)(e, [(0, h.Xq)("pending", a)]), e.set(y.UF, (e) => e.filter((e) => e.id !== a)))
                }
              },
              { concurrency: 3 },
            ))
        },
        uploadFileAttachment: w,
        wq: async function (e, t) {
          try {
            let { openChatGptFile: i } = await Promise.all([
              a.e(273709),
              a.e(434505),
              a.e(877217),
              a.e(636373),
              a.e(212545),
              a.e(390843),
              a.e(89330),
              a.e(591034),
            ]).then(a.bind(a, "HGuJ"))
            await i(e, {
              allowTaskPreview: !0,
              browserPreview: !0,
              conversationId: null,
              fileName: t.fileName,
              tabKey: t.fileId,
              target: { type: "file-id", fileId: t.fileId },
            })
          } catch (e) {
            m.v.warning("Uploaded file failed to open", { safe: {}, sensitive: { error: e } })
          }
        },
      },
    )
  },
  V7vi(e, t, a) {
    var i = a("QosV"),
      n = a("qmMi"),
      o = a("zd8w"),
      r = a("Dgwo"),
      l = a("tl5a"),
      s = a("m8L3"),
      c = a("YdY0"),
      u = a("aAWW"),
      d = a("o8WW"),
      p = a("TKsx"),
      f = a("OWtl"),
      m = a("WFY2")
    let h = (0, n.bD)(f.u, (e) => null, void 0, { autoDispose: 6e4 })
    a.d(
      t,
      {},
      {
        c: function (e, t) {
          let a,
            g,
            v,
            y,
            w,
            C,
            b,
            x,
            M,
            A,
            I,
            S,
            R,
            E = (0, i.c)(55),
            k = void 0 === e ? null : e,
            O = void 0 === t ? null : t,
            _ = (0, n.gh)(f.u),
            T = (0, n._U)(l.aG, k),
            N = (0, n._U)(l.qX, k),
            { modelSettings: P } = (0, d.aU)(k),
            L = (0, n.Ul)(c._),
            F = (0, n._U)(h, k),
            { data: q, isFetching: j } = (0, n._U)(p.aQ, N)
          E[0] !== P.model || E[1] !== P.reasoningEffort
            ? ((a = {
                mode: s.C,
                settings: { model: P.model, reasoning_effort: P.reasoningEffort, developer_instructions: null },
              }),
              (E[0] = P.model),
              (E[1] = P.reasoningEffort),
              (E[2] = a))
            : (a = E[2])
          let D = a,
            U = !j && !P.isLoading,
            V = F?.mode ?? T,
            H = V?.mode ?? L ?? s.C
          if (
            (E[3] !== q ? ((g = q ?? []), (E[3] = q), (E[4] = g)) : (g = E[4]),
            E[5] !== D ||
              E[6] !== O ||
              E[7] !== P.model ||
              E[8] !== P.reasoningEffort ||
              E[9] !== H ||
              E[10] !== g ||
              E[11] !== V)
          ) {
            let e
            ;(E[14] !== P.model || E[15] !== P.reasoningEffort
              ? ((e = (e) => {
                  if (null == e.mode) return []
                  let t = {
                    mode: e.mode,
                    settings: { model: e.model, reasoning_effort: e.reasoning_effort, developer_instructions: null },
                  }
                  return [{ ...t, settings: { ...t.settings, model: P.model, reasoning_effort: P.reasoningEffort } }]
                }),
                (E[14] = P.model),
                (E[15] = P.reasoningEffort),
                (E[16] = e))
              : (e = E[16]),
              (v = g.flatMap(e)),
              (y = O ?? V ?? v.find((e) => e.mode === H) ?? D),
              (E[5] = D),
              (E[6] = O),
              (E[7] = P.model),
              (E[8] = P.reasoningEffort),
              (E[9] = H),
              (E[10] = g),
              (E[11] = V),
              (E[12] = v),
              (E[13] = y))
          } else ((v = E[12]), (y = E[13]))
          let B = y
          E[17] !== D || E[18] !== v
            ? ((w = (e) => (e ? v.find((t) => t.mode === e) : null) ?? D), (E[17] = D), (E[18] = v), (E[19] = w))
            : (w = E[19])
          let X = w
          E[20] !== k || E[21] !== X || E[22] !== N || E[23] !== _
            ? ((C = async (e) => {
                if (k) {
                  try {
                    await (0, r.V)(_, N).updateThreadSettingsForNextTurn(k, { collaborationMode: X(e) })
                  } catch (e) {
                    m.v.error("Failed to set collaboration mode", {
                      safe: { conversationId: k },
                      sensitive: { error: e },
                    })
                  }
                  return
                }
                _.set(c._, e)
              }),
              (E[20] = k),
              (E[21] = X),
              (E[22] = N),
              (E[23] = _),
              (E[24] = C))
            : (C = E[24])
          let W = C
          E[25] !== k || E[26] !== X || E[27] !== W || E[28] !== _
            ? ((b = (e) => {
                if (((0, u.e)(), k)) {
                  let t = { mode: X(e) }
                  _.set(h, k, t)
                  let a = _.watch((e) => {
                    let { get: t } = e
                    t(h, k)
                  })
                  W(e).finally(() => {
                    ;(_.set(h, k, (e) => (e === t ? null : e)), a())
                  })
                  return
                }
                W(e)
              }),
              (E[25] = k),
              (E[26] = X),
              (E[27] = W),
              (E[28] = _),
              (E[29] = b))
            : (b = E[29])
          let Y = b
          E[30] !== v || E[31] !== W || E[32] !== H
            ? ((x = () => {
                let e = v.find((e) => e.mode === H)?.mode ?? s.C
                e !== H && W(e)
              }),
              (E[30] = v),
              (E[31] = W),
              (E[32] = H),
              (E[33] = x))
            : (x = E[33])
          let z = (0, o.useEffectEvent)(x)
          ;(E[34] !== U || E[35] !== v.length || E[36] !== z
            ? ((M = () => {
                !U || (v.length > 0 && z())
              }),
              (E[34] = U),
              (E[35] = v.length),
              (E[36] = z),
              (E[37] = M))
            : (M = E[37]),
            E[38] !== U || E[39] !== v ? ((A = [v, U]), (E[38] = U), (E[39] = v), (E[40] = A)) : (A = E[40]),
            (0, o.useEffect)(M, A),
            E[41] !== B.settings || E[42] !== P.model || E[43] !== P.reasoningEffort
              ? ((I = { ...B.settings, model: P.model, reasoning_effort: P.reasoningEffort }),
                (E[41] = B.settings),
                (E[42] = P.model),
                (E[43] = P.reasoningEffort),
                (E[44] = I))
              : (I = E[44]),
            E[45] !== B || E[46] !== I
              ? ((S = { ...B, settings: I }), (E[45] = B), (E[46] = I), (E[47] = S))
              : (S = E[47]))
          let K = !U
          return (
            E[48] !== X || E[49] !== v || E[50] !== H || E[51] !== Y || E[52] !== S || E[53] !== K
              ? ((R = {
                  modes: v,
                  activeMode: S,
                  selectedMode: H,
                  getModeForSelection: X,
                  setSelectedMode: Y,
                  isLoading: K,
                }),
                (E[48] = X),
                (E[49] = v),
                (E[50] = H),
                (E[51] = Y),
                (E[52] = S),
                (E[53] = K),
                (E[54] = R))
              : (R = E[54]),
            R
          )
        },
      },
    )
  },
  iS3i(e, t, a) {
    var i = a("QosV"),
      n = a("qmMi"),
      o = a("DBCl"),
      r = a("OeLR"),
      l = a("zd8w"),
      s = a("Dgwo"),
      c = a("tl5a"),
      u = a("ke3i"),
      d = a("dbK8"),
      p = a("wzi3"),
      f = a("o8WW"),
      m = a("an0a"),
      h = a("p4am"),
      g = a("qMca"),
      v = a("B81s"),
      y = a("Hhl4"),
      w = a("OWtl"),
      C = a("ndjw"),
      b = a("kfGJ"),
      x = a("jMec"),
      M = a("hZax"),
      A = a("OMIV"),
      I = a("WFY2"),
      S = a("fNL0"),
      R = a("aOdE"),
      E = a("NvK2"),
      k = a("BFUY"),
      O = a("Y72c")
    let _ = { isSet: !1, value: null }
    function T({ isProjectless: e, requirements: t }) {
      return e && (0, o.Jhm)("granular", t) ? "granular" : "auto"
    }
    function N(e) {
      let t,
        a,
        s,
        u,
        d,
        p = (0, i.c)(24),
        { conversationId: f, hostId: h, cwdOverride: g } = e,
        y = void 0 !== g,
        w = (0, n._U)(y ? null : c.JN, f),
        b = !y && null == w,
        I = (0, n.Ul)(b ? C.pY : null),
        R = (0, n.Ul)(!!b && C.Qd),
        E = (0, n.Ul)(y || null != f ? null : C.Gt),
        k = (0, n._U)(null, E),
        O = (0, n._U)(y || null == f ? null : c.EL, f),
        _ = y ? (g ?? null) : (w ?? I),
        T = y && null == _,
        N = b && R,
        P = !y && (null == f ? R : null == O),
        L = g === o.m20 || (!y && !P && (null == f ? null == E && !k?.length : "projectless" === O)),
        F = (0, n.Ul)(x.B),
        q = (0, M.XR)(),
        j = (0, n._U)(A.JW, "1597774583"),
        D = y || _ === o.m20 ? "preserve-null" : "fallback-to-workspace",
        U = !T && !N
      p[0] !== h || p[1] !== D || p[2] !== U
        ? ((t = { hostId: h, failClosed: !0, cwdMode: D, enabled: U }), (p[0] = h), (p[1] = D), (p[2] = U), (p[3] = t))
        : (t = p[3])
      let { data: V, isPending: H } = (0, v.PG)(_ === o.m20 ? null : _, t),
        B = null != (0, l.use)(S.r),
        X = (0, n._U)(B ? m.XH : null, f),
        W = X?.hostId ?? h
      p[4] !== W ? ((a = { hostId: W }), (p[4] = W), (p[5] = a)) : (a = p[5])
      let { data: Y, isPending: z } = (0, n._U)(v.b9, a),
        K = Y?.requirements ?? null
      if (p[6] !== F || p[7] !== V || p[8] !== z || p[9] !== q || p[10] !== K) {
        let e
        ;((s = null == V ? null : (0, r.Y$)(V.config)),
          p[13] !== z || p[14] !== K
            ? ((e = z || (0, o.Jhm)("auto", K) || (0, o.Jhm)("guardian-approvals", K)),
              (p[13] = z),
              (p[14] = K),
              (p[15] = e))
            : (e = p[15]),
          (u = e && !1 !== (0, o.bAH)(s ?? void 0) && (void 0 === F || q)),
          (p[6] = F),
          (p[7] = V),
          (p[8] = z),
          (p[9] = q),
          (p[10] = K),
          (p[11] = s),
          (p[12] = u))
      } else ((s = p[11]), (u = p[12]))
      let $ = u,
        G = T || N || P || z || H || null == V || $,
        Q = F?.guardian_approval === !0
      return (
        p[16] !== j || p[17] !== L || p[18] !== K || p[19] !== W || p[20] !== s || p[21] !== G || p[22] !== Q
          ? ((d = {
              isConfigDataPending: G,
              isGuardianApprovalEnabledByStatsig: Q,
              isGuardianDefaultEnabledByStatsig: j,
              isProjectless: L,
              requirements: K,
              requirementsHostId: W,
              resolvedConfig: s,
            }),
            (p[16] = j),
            (p[17] = L),
            (p[18] = K),
            (p[19] = W),
            (p[20] = s),
            (p[21] = G),
            (p[22] = Q),
            (p[23] = d))
          : (d = p[23]),
        d
      )
    }
    function P(e, t) {
      let a,
        r,
        l,
        f,
        m,
        v,
        x,
        M,
        A,
        S,
        P,
        F,
        q,
        j,
        D,
        U,
        V,
        H = (0, i.c)(68),
        { conversationId: B, cwdOverride: X, hostId: W, inheritDefaultPermissions: Y } = e,
        z = (0, n.gh)(w.u),
        K = (0, n._U)(g.D0, B) && W === o.iwv ? b.fI : null,
        $ = void 0 !== X,
        G = (0, n._U)($ ? null : c.JN, B),
        Q = !$ && null == G,
        Z = (0, n.Ul)(Q ? C.pY : null),
        J = (0, n.Ul)(!!Q && C.Qd),
        ee = $ ? (X ?? null) : (G ?? Z),
        et = $ && null == ee,
        ea = Q && J
      H[0] !== B || H[1] !== X || H[2] !== W
        ? ((a = { conversationId: B, cwdOverride: X, hostId: W }), (H[0] = B), (H[1] = X), (H[2] = W), (H[3] = a))
        : (a = H[3])
      let ei = N(a)
      H[4] !== ei.requirements
        ? ((r = (e) => (0, o.Z3c)(ei.requirements, e)), (H[4] = ei.requirements), (H[5] = r))
        : (r = H[5])
      let en = r,
        eo = en(t.model),
        er = (ei.requirements?.autoReview?.requiredOnModels?.length ?? 0) > 0 && t.isLoading,
        el = ee === o.m20 ? null : ee
      H[6] !== W || H[7] !== el ? ((l = { hostId: W, cwd: el }), (H[6] = W), (H[7] = el), (H[8] = l)) : (l = H[8])
      let es = !et && !ea
      H[9] !== es ? ((f = { enabled: es }), (H[9] = es), (H[10] = f)) : (f = H[10])
      let ec = (0, n._U)(y.yL, l, f),
        eu = et || ea || ec.isPending,
        ed = eu || ec.isError,
        ep =
          et || ea || null == ec.data
            ? null
            : (0, y.EJ)(
                ec.data,
                ei.requirements,
                "string" == typeof ei.resolvedConfig?.default_permissions
                  ? ei.resolvedConfig.default_permissions
                  : null,
              ),
        ef = T(ei),
        em = (0, k.F2)(ep?.defaultProfileId, ef),
        eh = null == em ? (ep?.defaultProfileId ?? null) : null,
        eg = (0, o.L9S)(ei.requirements, ei.resolvedConfig),
        ev =
          null != ep &&
          (ep.profiles.length > 1 || ei.requirementsHostId !== W) &&
          ei.requirements?.allowedPermissionProfiles != null &&
          0 === (0, o.Ibn)(ei.requirements).length &&
          null == eh,
        ey = !ei.isConfigDataPending && !ev && null == eh && 0 === eg.length,
        ew = null == B,
        eC = (0, n.Ul)(E.mW) ?? (0, E.P4)(E.Oi),
        eb = (0, n.Ul)(E.R9) ?? (0, E.P4)(E.$3),
        ex = eb[W] ?? null,
        eM = (0, n.Ul)(R.a)
      H[11] !== ee || H[12] !== W
        ? ((m = JSON.stringify([W, ee])), (H[11] = ee), (H[12] = W), (H[13] = m))
        : (m = H[13])
      let eA = m,
        eI = eM[eA] ?? _,
        eS = eI.isSet ? eI.value : eh
      H[14] !== eA || H[15] !== z
        ? ((v = (e) => {
            z.set(R.a, (t) => ({ ...t, [eA]: { isSet: !0, value: e } }))
          }),
          (H[14] = eA),
          (H[15] = z),
          (H[16] = v))
        : (v = H[16])
      let eR = v,
        {
          threadApprovalsReviewer: eE,
          threadPermissionProfileId: ek,
          threadMode: eO,
          threadSandboxPolicy: e_,
        } = (function (e) {
          let t,
            a,
            r = (0, i.c)(14),
            l = (0, n._U)(c.h2, e),
            s = (0, n._U)(c.we, e),
            d = (0, n._U)(u.MH, e),
            p = l?.sandboxPolicy ?? s?.sandboxPolicy ?? d?.sandboxPolicy ?? null
          if (
            r[0] !== s?.approvalPolicy ||
            r[1] !== s?.approvalsReviewer ||
            r[2] !== l?.approvalPolicy ||
            r[3] !== l?.approvalsReviewer ||
            r[4] !== l?.permissions ||
            r[5] !== d?.approvalPolicy ||
            r[6] !== d?.approvalsReviewer ||
            r[7] !== p
          ) {
            let e = (0, k.F2)(l?.permissions, "auto")
            ;((t = (0, o.weu)({
              approvalPolicy: l?.approvalPolicy ?? s?.approvalPolicy ?? d?.approvalPolicy ?? void 0,
              approvalsReviewer: l?.approvalsReviewer ?? s?.approvalsReviewer ?? d?.approvalsReviewer ?? void 0,
              sandboxPolicy: null == e ? (p ?? void 0) : (0, o.$5i)(e, [], null).sandboxPolicy,
            })),
              (r[0] = s?.approvalPolicy),
              (r[1] = s?.approvalsReviewer),
              (r[2] = l?.approvalPolicy),
              (r[3] = l?.approvalsReviewer),
              (r[4] = l?.permissions),
              (r[5] = d?.approvalPolicy),
              (r[6] = d?.approvalsReviewer),
              (r[7] = p),
              (r[8] = t))
          } else t = r[8]
          let f = t,
            m = l?.activePermissionProfile !== void 0 ? l.activePermissionProfile : s?.activePermissionProfile,
            h = l?.approvalsReviewer ?? s?.approvalsReviewer ?? d?.approvalsReviewer ?? null,
            g = void 0 === m ? (d?.permissions ?? null) : (m?.id ?? null)
          return (
            r[9] !== h || r[10] !== g || r[11] !== f || r[12] !== p
              ? ((a = {
                  threadApprovalsReviewer: h,
                  threadPermissionProfileId: g,
                  threadSandboxPolicy: p,
                  threadMode: f,
                }),
                (r[9] = h),
                (r[10] = g),
                (r[11] = f),
                (r[12] = p),
                (r[13] = a))
              : (a = r[13]),
            a
          )
        })(B),
        eT = (0, n._U)(u.Bs, B),
        eN = (0, O.cT)((0, n.Ul)(O.I0)),
        {
          availableAgentModes: eP,
          customEquivalentMode: eL,
          configNonFullAccessMode: eF,
          isGuardianModeAvailable: eq,
        } = (0, k.lS)({
          ...ei,
          defaultWorkspaceWriteMode: ef,
          showFullAccessInComposer: eN,
          isAutoReviewRequiredForSelectedModel: eo,
          hasAuthoritativeGuardianApprovalDefault:
            "guardian-approvals" === eO && ((0, d.C)(W) || "guardian-approvals" === (0, p.k)(W)),
        }),
        ej = () => {
          if (ei.isConfigDataPending) return null
          let { validPreferredNonFullAccessMode: e } = (0, k.bN)({
              availableAgentModes: eP,
              preferredNonFullAccessMode: (0, E.Ru)(W, z.get(E.ol) ?? (0, E.P4)(E.rh)),
              isGuardianModeAvailable: eq,
              isConfigDataPending: ei.isConfigDataPending,
              configNonFullAccessMode: eF,
            }),
            t = e ?? (eq ? "guardian-approvals" : eF)
          return eP.includes(t) ? t : null
        }
      H[17] !== B || H[18] !== X || H[19] !== W
        ? ((x = { conversationId: B, hostId: W, cwdOverride: X }), (H[17] = B), (H[18] = X), (H[19] = W), (H[20] = x))
        : (x = H[20])
      let { preferredNonFullAccessMode: eD } = L(x),
        { resolvedNonFullAccessMode: eU, validPreferredNonFullAccessMode: eV } = (0, k.bN)({
          availableAgentModes: eP,
          preferredNonFullAccessMode: eD,
          isGuardianModeAvailable: eq,
          isConfigDataPending: ei.isConfigDataPending,
          configNonFullAccessMode: eF,
        }),
        eH = (0, k.d_)(
          (0, O.KZ)({
            availableAgentModes: eP,
            visibleAgentModes: (0, O.o4)({ availableAgentModes: eP, showFullAccessInComposer: eN }),
          }),
          eL,
          eU,
          eV,
        ),
        eB =
          null != (V = eC[W]) && V !== eb[W]
            ? V
            : eq && null != K && "guardian-approvals" === eC[K] && "guardian-approvals" !== eb[K]
              ? "guardian-approvals"
              : void 0,
        eX = eB ?? eH
      ;("auto" === eB || "granular" === eB) && (eX = ef)
      let eW = ew && void 0 !== Y && Y && !ev && !eI.isSet
      ew && null != eS
        ? (eX =
            "guardian-approvals" === eB &&
            ei.resolvedConfig?.approvals_reviewer == null &&
            ei.isGuardianApprovalEnabledByStatsig &&
            !1 !== (0, o.bAH)(ei.resolvedConfig ?? void 0) &&
            (0, o.WqY)(ei.requirements, null, null, "guardian_subagent")
              ? "guardian-approvals"
              : "custom")
        : ei.isConfigDataPending || eP.includes(eX) || (eX = eH)
      let eY = null == em || (ew && eI.isSet) || (null != eB && eg.includes(eB)) ? eX : em,
        { isRequired: ez } = (0, n._U)(h.E, W),
        eK = ez && !eo && eg.includes("read-only"),
        e$ = eY
      eo ? (e$ = "guardian-approvals") : eK && (e$ = "read-only")
      let eG = eE ?? (ei.resolvedConfig?.approvals_reviewer === "auto_review" ? "auto_review" : null),
        eQ = ei.isConfigDataPending || eg.includes(e$),
        eZ =
          null == ek &&
          e_?.type === "workspaceWrite" &&
          "full-access" === eB &&
          "full-access" === e$ &&
          "full-access" !== eO,
        eJ = eZ && (ei.isConfigDataPending || er),
        e1 = (et || ei.isConfigDataPending) && (null == eB || "auto" === eB || "granular" === eB),
        e0 = null != B && null != eO && (null == ek || ek.startsWith(":")) && null != eB && eg.includes(eB) && eO !== e$
      H[21] !== ee || H[22] !== ei.resolvedConfig || H[23] !== e_
        ? ((M = (e) => {
            let t = (0, o.$5i)(
              e,
              e_?.type === "workspaceWrite" ? e_.writableRoots : null == ee ? [] : [ee],
              ei.resolvedConfig,
            )
            return { approvalPolicy: t.approvalPolicy, approvalsReviewer: t.approvalsReviewer, ...(0, o.ZGB)(t) }
          }),
          (H[21] = ee),
          (H[22] = ei.resolvedConfig),
          (H[23] = e_),
          (H[24] = M))
        : (M = H[24])
      let e2 = M
      H[25] !== e2
        ? ((A = (e, t, a) => (a ? (null == t ? e2(e) : { permissions: t }) : null)), (H[25] = e2), (H[26] = A))
        : (A = H[26])
      let e3 = A,
        e4 = e2("guardian-approvals")
      H[27] !== e2 || H[28] !== B || H[29] !== W || H[30] !== z
        ? ((S = (e) => (null == B ? null : (0, s.V)(z, W).updateThreadPermissions(B, e2(e)))),
          (H[27] = e2),
          (H[28] = B),
          (H[29] = W),
          (H[30] = z),
          (H[31] = S))
        : (S = H[31])
      let e5 = S
      H[32] !== B
        ? ((P = (e) => {
            I.v.error("Failed to set thread permissions mode", { safe: { conversationId: B }, sensitive: { error: e } })
          }),
          (H[32] = B),
          (H[33] = P))
        : (P = H[33])
      let e6 = P,
        e7 = (e) => {
          ;(null != ex && z.set(E.R9, { ...eb, [W]: null }),
            ew && eR(null),
            eC[W] !== e && z.set(E.mW, { ...eC, [W]: e }))
        }
      H[34] !== e6 || H[35] !== e7 || H[36] !== e5
        ? ((F = (e) => {
            ;(e7(e), e5(e)?.catch(e6))
          }),
          (H[34] = e6),
          (H[35] = e7),
          (H[36] = e5),
          (H[37] = F))
        : (F = H[37])
      let e8 = F
      H[38] !== B || H[39] !== W || H[40] !== ew || H[41] !== e6 || H[42] !== z || H[43] !== eR
        ? ((q = (e) => {
            ew ? eR(e) : null != B && (0, s.V)(z, W).updateThreadSettingsForNextTurn(B, { permissions: e }).catch(e6)
          }),
          (H[38] = B),
          (H[39] = W),
          (H[40] = ew),
          (H[41] = e6),
          (H[42] = z),
          (H[43] = eR),
          (H[44] = q))
        : (q = H[44])
      let e9 = q
      H[45] !== B || H[46] !== W || H[47] !== ei.isProjectless || H[48] !== eO || H[49] !== ek
        ? ((j = !(0, d.C)(W) && null != B && ei.isProjectless && "granular" === eO && ":workspace" === ek),
          (H[45] = B),
          (H[46] = W),
          (H[47] = ei.isProjectless),
          (H[48] = eO),
          (H[49] = ek),
          (H[50] = j))
        : (j = H[50])
      let te = j
      if (null != B && null != eO && !eo && !eK && ((0, d.C)(W) || null == eB || !eQ || eZ))
        return {
          agentMode: eO,
          approvalsReviewerOverride: eG,
          isAgentModeLoading: eT || eJ,
          isAgentModePending: eT || eJ,
          isAutoReviewRequiredForModel: en,
          isAutoReviewRequiredForSelectedModel: eo,
          isGuardianModeAvailable: eq,
          getNonFullAccessFallbackMode: ej,
          guardianApprovalThreadSettings: e4,
          permissionOverrideThreadSettings: te ? e2(eO) : null,
          permissionProfileId: ek,
          shouldSendPermissionOverrides: te,
          shouldUseAppServerPermissionDefault: ey,
          setAgentMode: e8,
          setAgentModePreference: e7,
          setPermissionProfileId: e9,
        }
      D = eo || eK || e0 ? null : ew ? eS : ek
      let tt =
          eo ||
          eK ||
          e0 ||
          te ||
          (!ey && !eW && (ew || (null == ek && ("custom" !== eO || e_?.type === "dangerFullAccess")))),
        ta = !eo && !eK && (ey || eW),
        ti = e$,
        tn = eT || e1 || er || (ew && !eI.isSet && eu),
        to = eT || e1 || (ew && !eI.isSet && ed) || (ew && !ta && null == eS && ev),
        tr = e3(e$, D, tt)
      return (
        H[51] !== eG ||
        H[52] !== en ||
        H[53] !== e$ ||
        H[54] !== ta ||
        H[55] !== ej ||
        H[56] !== e4 ||
        H[57] !== eo ||
        H[58] !== eq ||
        H[59] !== D ||
        H[60] !== e7 ||
        H[61] !== e8 ||
        H[62] !== e9 ||
        H[63] !== tt ||
        H[64] !== tn ||
        H[65] !== to ||
        H[66] !== tr
          ? ((U = {
              agentMode: ti,
              approvalsReviewerOverride: eG,
              isAgentModeLoading: tn,
              isAgentModePending: to,
              isAutoReviewRequiredForModel: en,
              isAutoReviewRequiredForSelectedModel: eo,
              isGuardianModeAvailable: eq,
              getNonFullAccessFallbackMode: ej,
              guardianApprovalThreadSettings: e4,
              permissionOverrideThreadSettings: tr,
              permissionProfileId: D,
              shouldSendPermissionOverrides: tt,
              shouldUseAppServerPermissionDefault: ta,
              setAgentMode: e8,
              setAgentModePreference: e7,
              setPermissionProfileId: e9,
            }),
            (H[51] = eG),
            (H[52] = en),
            (H[53] = e$),
            (H[54] = ta),
            (H[55] = ej),
            (H[56] = e4),
            (H[57] = eo),
            (H[58] = eq),
            (H[59] = D),
            (H[60] = e7),
            (H[61] = e8),
            (H[62] = e9),
            (H[63] = tt),
            (H[64] = tn),
            (H[65] = to),
            (H[66] = tr),
            (H[67] = U))
          : (U = H[67]),
        U
      )
    }
    function L(e) {
      let t,
        a,
        o,
        r = (0, i.c)(10),
        { hostId: l } = e,
        s = (0, n.gh)(w.u),
        c = (0, n.Ul)(E.ol) ?? (0, E.P4)(E.rh)
      r[0] !== l || r[1] !== c ? ((t = (0, E.Ru)(l, c)), (r[0] = l), (r[1] = c), (r[2] = t)) : (t = r[2])
      let u = t
      return (
        r[3] !== l || r[4] !== c || r[5] !== s
          ? ((a = (e) => {
              s.set(E.ol, { ...c, [l]: e })
            }),
            (r[3] = l),
            (r[4] = c),
            (r[5] = s),
            (r[6] = a))
          : (a = r[6]),
        r[7] !== u || r[8] !== a
          ? ((o = { preferredNonFullAccessMode: u, setPreferredNonFullAccessMode: a }),
            (r[7] = u),
            (r[8] = a),
            (r[9] = o))
          : (o = r[9]),
        o
      )
    }
    a.d(
      t,
      {},
      {
        Ap: function (e) {
          let { modelSettings: t } = (0, f.aU)(e.conversationId)
          return P(e, t)
        },
        Fc: N,
        PQ: L,
        TK: T,
        bI: function (e) {
          if (null == e) return !0
          let t =
              (null == e.allowedPermissionProfiles || !0 === e.allowedPermissionProfiles[":workspace"]) &&
              (null == e.allowedSandboxModes || e.allowedSandboxModes.includes("workspace-write")),
            a = null == e.allowedApprovalPolicies || e.allowedApprovalPolicies.includes("on-request"),
            i =
              null == e.allowedApprovalsReviewers ||
              e.allowedApprovalsReviewers.includes("user") ||
              e.allowedApprovalsReviewers.includes("auto_review")
          return t && a && i
        },
        ek: P,
      },
    )
  },
  zjpG(e, t, a) {
    var i = a("ABep"),
      n = a("QosV"),
      o = a("on57"),
      r = a("oyxz")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            l,
            s = (0, n.c)(5),
            { className: c } = e
          return (
            s[0] !== c ? ((t = (0, o.A)("last:hidden", c)), (s[0] = c), (s[1] = t)) : (t = s[1]),
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, i.jsx)(r.A, { id: "codex.ui.bulletSeparator", defaultMessage: "\xb7" })), (s[2] = a))
              : (a = s[2]),
            s[3] !== t
              ? ((l = (0, i.jsx)("span", { "aria-hidden": !0, className: t, children: a })), (s[3] = t), (s[4] = l))
              : (l = s[4]),
            l
          )
        },
      },
    )
  },
  YXXI(e, t, a) {
    a.d(t, { I: () => c })
    var i = a("QosV"),
      n = a("zd8w"),
      o = a("an0a"),
      r = a("j44z"),
      l = a("V7vi"),
      s = a("SGsN")
    function c(e) {
      var t
      let a,
        c,
        u,
        d,
        p,
        f,
        m,
        h = (0, i.c)(11),
        { scope: g, conversationId: v, intl: y } = e,
        w =
          ((t = "image"),
          (f = (0, i.c)(3)),
          (m = (function (e) {
            let t,
              a,
              n = (0, i.c)(7),
              s = (0, o.K5)(e),
              { activeMode: c } = (0, l.c)(e)
            n[0] !== e || n[1] !== s.hostId
              ? ((t = { conversationId: e, hostId: s.hostId }), (n[0] = e), (n[1] = s.hostId), (n[2] = t))
              : (t = n[2])
            let { data: u } = (0, r.Ym)(t),
              d = c.settings.model
            if (!d) return null
            n[3] !== u?.models || n[4] !== u?.models.find || n[5] !== d
              ? ((a = u?.models.find((e) => e.model === d)),
                (n[3] = u?.models),
                (n[4] = u?.models.find),
                (n[5] = d),
                (n[6] = a))
              : (a = n[6])
            let p = a
            return p?.inputModalities ?? null
          })(v)),
          f[0] !== m || f[1] !== t ? ((p = m?.includes(t) ?? !0), (f[0] = m), (f[1] = t), (f[2] = p)) : (p = f[2]),
          p)
      h[0] !== y
        ? ((a = y.formatMessage({
            id: "composer.imageInputsUnsupported",
            defaultMessage: "This model does not support image inputs. Try a different model",
          })),
          (h[0] = y),
          (h[1] = a))
        : (a = h[1])
      let C = a
      h[2] !== y
        ? ((c = y.formatMessage({
            id: "composer.submit.imageInputsUnsupported",
            defaultMessage: "Remove images or switch models to send this message",
          })),
          (h[2] = y),
          (h[3] = c))
        : (c = h[3])
      let b = c,
        x = (0, n.useRef)(0)
      h[4] !== C || h[5] !== g
        ? ((u = () => {
            let e = Date.now()
            e - x.current < 1e3 ||
              ((x.current = e),
              g
                .get(s.Id)
                .danger(C, { errorAnalytics: { toastId: "useComposerImageInputSupport.notifyImageInputUnsupported" } }))
          }),
          (h[4] = C),
          (h[5] = g),
          (h[6] = u))
        : (u = h[6])
      let M = u
      return (
        h[7] !== b || h[8] !== M || h[9] !== w
          ? ((d = { imageInputUnsupportedReason: b, notifyImageInputUnsupported: M, supportsImageInputs: w }),
            (h[7] = b),
            (h[8] = M),
            (h[9] = w),
            (h[10] = d))
          : (d = h[10]),
        d
      )
    }
  },
  rxzY(e, t, a) {
    var i = a("QosV"),
      n = a("zd8w")
    let o = []
    function r(e, t) {
      var a, i
      return (
        (a = e),
        (i = t.getBoundingClientRect()),
        !!(a.x >= i.left) &&
          !!(a.x <= i.right) &&
          !!(a.y >= i.top) &&
          !!(a.y <= i.bottom) &&
          document.elementsFromPoint(e.x, e.y).some((e) => e === t || t.contains(e))
      )
    }
    function l(e) {
      let t = window.getComputedStyle(e)
      if ("none" === t.display || "hidden" === t.visibility || "none" === t.pointerEvents) return !1
      let a = e.getBoundingClientRect()
      return a.width > 0 && a.height > 0
    }
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            s,
            c = (0, i.c)(15),
            {
              activationNonce: u,
              floatingElementSelectors: d,
              includeInteractiveRegion: p,
              interactiveRegionRef: f,
              isPaused: m,
              onInteractiveChange: h,
              publishInitialNonInteractive: g,
            } = e,
            v = void 0 === d ? o : d,
            y = void 0 !== p && p,
            w = void 0 === g || g
          c[0] !== m ? ((t = () => m?.() ?? !1), (c[0] = m), (c[1] = t)) : (t = c[1])
          let C = (0, n.useEffectEvent)(t),
            b = (0, n.useEffectEvent)(h)
          ;(c[2] !== v || c[3] !== y || c[4] !== f || c[5] !== C || c[6] !== w || c[7] !== b
            ? ((a = () => {
                let e = null,
                  t = null,
                  a = null,
                  i = null,
                  n = (t) => {
                    e !== t && ((e = t), b(t))
                  },
                  o = () => {
                    ;((i = null),
                      null == a ||
                        C() ||
                        ((t = a),
                        n(
                          ((e) => {
                            let t = f.current
                            if (null == t || (y && r(e, t))) return !0
                            for (let t of v) for (let a of document.querySelectorAll(t)) if (r(e, a) && l(a)) return !0
                            return !1
                          })(a),
                        )))
                  },
                  s = () => {
                    null == i && (i = requestAnimationFrame(o))
                  },
                  c = (e) => {
                    ;((t = a = { x: e.clientX, y: e.clientY }), s())
                  },
                  u = () => {
                    null != t && ((a = t), s())
                  },
                  d = () => {
                    C() || n(!1)
                  },
                  p = () => {
                    if (C()) return
                    let e = (function ({
                      floatingElementSelectors: e,
                      includeInteractiveRegion: t,
                      interactiveRegion: a,
                    }) {
                      if (t && a?.matches(":hover")) return !0
                      for (let t of e)
                        for (let e of document.querySelectorAll(t)) if (l(e) && e.matches(":hover")) return !0
                      return !document.documentElement.matches(":hover") && null
                    })({ floatingElementSelectors: v, includeInteractiveRegion: y, interactiveRegion: f.current })
                    null != e && (e || w) && n(e)
                  },
                  m = new MutationObserver(u)
                ;(window.addEventListener("mousemove", c),
                  window.addEventListener("resize", u),
                  window.addEventListener("scroll", u, !0),
                  window.addEventListener("mouseleave", d),
                  m.observe(document.body, {
                    attributeFilter: ["aria-hidden", "class", "hidden", "style"],
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                  }),
                  p())
                let h = requestAnimationFrame(p)
                return () => {
                  ;(window.removeEventListener("mousemove", c),
                    window.removeEventListener("resize", u),
                    window.removeEventListener("scroll", u, !0),
                    window.removeEventListener("mouseleave", d),
                    m.disconnect(),
                    cancelAnimationFrame(h),
                    null != i && cancelAnimationFrame(i),
                    (e = null),
                    b(!0))
                }
              }),
              (c[2] = v),
              (c[3] = y),
              (c[4] = f),
              (c[5] = C),
              (c[6] = w),
              (c[7] = b),
              (c[8] = a))
            : (a = c[8]),
            c[9] !== u || c[10] !== v || c[11] !== y || c[12] !== f || c[13] !== w
              ? ((s = [u, v, y, f, w]), (c[9] = u), (c[10] = v), (c[11] = y), (c[12] = f), (c[13] = w), (c[14] = s))
              : (s = c[14]),
            (0, n.useEffect)(a, s))
        },
      },
    )
  },
  ipV4(e, t, a) {
    var i = a("QosV"),
      n = a("qmMi"),
      o = a("eWgO"),
      r = a("tl5a"),
      l = a("UOa8"),
      s = a("B81s")
    a.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            a,
            c,
            u = (0, i.c)(10),
            d = (0, n.Ul)(r.Dc),
            p = e?.hostId ?? d,
            f = (0, l.tn)(p),
            m =
              f?.authMethod === "chatgpt" ||
              f?.authMethod === "personalAccessToken" ||
              f?.authMethod === "amazonBedrock",
            h = f?.authMethod ?? null
          u[0] !== p || u[1] !== h
            ? ((t = { authMethod: h, hostId: p }), (u[0] = p), (u[1] = h), (u[2] = t))
            : (t = u[2])
          let { data: g, isPending: v } = (0, n._U)(s.b9, t),
            y = !!f?.isLoading || (m && v)
          u[3] !== g || u[4] !== y || u[5] !== m
            ? ((a = m && !y && null != g ? (0, o.W6)(g) : null), (u[3] = g), (u[4] = y), (u[5] = m), (u[6] = a))
            : (a = u[6])
          let w = a
          return (
            u[7] !== y || u[8] !== w
              ? ((c = { serviceTierAccess: w, isLoading: y }), (u[7] = y), (u[8] = w), (u[9] = c))
              : (c = u[9]),
            c
          )
        },
      },
    )
  },
  gAqY(e, t, a) {
    var i = a("QosV"),
      n = a("iRMi"),
      o = a("qmMi"),
      r = a("eWgO"),
      l = a("zd8w"),
      s = a("Dgwo"),
      c = a("tl5a"),
      u = a("ke3i"),
      d = a("UOa8"),
      p = a("kYSX")
    a("njX7")
    var f = a("Lb53"),
      m = a("Bb2k"),
      h = a("Eklu"),
      g = a("e85W"),
      v = a("ipV4"),
      y = a("yGJW"),
      w = a("B81s"),
      C = a("j44z"),
      b = a("OWtl"),
      x = a("DX7P"),
      M = a("WFY2"),
      A = a("ER5p"),
      I = a("l2g8"),
      S = a("SGof"),
      R = a("fNL0"),
      E = a("tzYO"),
      k = a("o8WW"),
      O = a("an0a")
    function _(e, t, a, n, s) {
      let m,
        g,
        y,
        b,
        M,
        E,
        k,
        _,
        T,
        N,
        P,
        L,
        F,
        q,
        j,
        D,
        U = (0, i.c)(62),
        V = void 0 === s ? null : s,
        H = (0, l.use)(p.ku),
        B = null == e ? H?.conversationId : null,
        X = (0, o._U)(null != B ? f.Dd : null, B ?? null),
        W = (0, o._U)(null != B ? f.Q5 : null, B ?? ""),
        Y = (0, o.Ul)(null != B ? f.w3 : null),
        z = (0, O.K5)(e)
      ;(0, l.use)(R.r)
      let K = z.hostId
      U[0] !== e || U[1] !== K
        ? ((m = { hostId: K, conversationId: e }), (U[0] = e), (U[1] = K), (U[2] = m))
        : (m = U[2])
      let $ = m,
        G = (0, o._U)(h.pu, $)
      U[3] !== e || U[4] !== K
        ? ((g = { conversationId: e, hostId: K }), (U[3] = e), (U[4] = K), (U[5] = g))
        : (g = U[5])
      let { data: Q, isLoading: Z } = (0, C.Ym)(g),
        J = (0, o._U)(c.h2, e),
        ee = (0, o._U)(u.G2, e),
        et = (0, o._U)(u.Bs, e),
        ea = (0, d.tn)(K),
        ei = null == e && n && null != V ? K : z.hostId,
        en = ea?.authMethod ?? null
      U[6] !== ei || U[7] !== en
        ? ((y = { authMethod: en, hostId: ei }), (U[6] = ei), (U[7] = en), (U[8] = y))
        : (y = U[8])
      let { data: eo, isPending: er } = (0, o._U)(w.b9, y),
        el = (0, x.H)(K, null == V)
      U[9] !== ei ? ((b = { hostId: ei }), (U[9] = ei), (U[10] = b)) : (b = U[10])
      let { serviceTierAccess: es } = (0, v.U)(b)
      if (
        U[11] !== eo?.requirements?.models?.newThread ||
        U[12] !== e ||
        U[13] !== V ||
        U[14] !== a ||
        U[15] !== B ||
        U[16] !== X ||
        U[17] !== W ||
        U[18] !== K ||
        U[19] !== er ||
        U[20] !== et ||
        U[21] !== Z ||
        U[22] !== n ||
        U[23] !== J?.serviceTier ||
        U[24] !== ee ||
        U[25] !== Q ||
        U[26] !== t.isLoading ||
        U[27] !== t.model ||
        U[28] !== t.serviceTier ||
        U[29] !== G ||
        U[30] !== Y ||
        U[31] !== es ||
        U[32] !== el.isLoading ||
        U[33] !== el.serviceTier
      ) {
        let i,
          o = (0, A.bs)(Q?.models, t.model),
          l = eo?.requirements?.models?.newThread,
          s = null == e && n && null != l,
          c = s ? l.serviceTier : null
        M = null != c
        let u = null != B && (void 0 !== W || null != X || void 0 !== Y),
          d = (k = null == V ? el.serviceTier : (V.serviceTier ?? (0, I.Q7)(null)))
        u && (d = (0, I.Qw)(X ?? null) ? I.aF : null == X || "standard" === X ? (0, I.Q7)(null) : X)
        let p = null != V || u ? (0, I.Q7)((0, I.DS)(o, d)) : k,
          f = M ? (0, I.Q7)(c) : p
        null != B
          ? void 0 !== W && (f = (0, I.Qw)(d) ? ((0, I.L9)(o)?.id ?? I.Yf) : d)
          : null == e && null != a && (f = a.value)
        let m = void 0 !== t.serviceTier ? t.serviceTier : J?.serviceTier,
          h = null != e && void 0 !== m ? m : null != e && void 0 !== ee ? ee : f
        null == B && null != G && (h = G.serviceTier)
        let g =
          (null == B && null != G) || (null != B && void 0 !== W) || (null != e && (void 0 !== m || void 0 !== ee))
        ;((N = (0, I.E_)(g ? null : o, h, es)),
          (T = (e) => {
            let { model: t } = (0, S.D)({ model: e }, Q),
              a = (0, A.bs)(Q?.models, t ?? e),
              i = g ? N : (0, I.E_)(a, h, es)
            return (0, I.DS)(a, null != B && (0, I.Qw)(i) ? I.aF : i)
          }),
          (_ = null == N ? null : (0, I.DS)(o, N)),
          (E = et || t.isLoading || Z || el.isLoading || V?.isLoading === !0 || (null == e && er)),
          (L = s),
          (F = K),
          (q = es),
          U[44] !== es ? ((i = (e) => (0, r.uw)(e.value, es)), (U[44] = es), (U[45] = i)) : (i = U[45]),
          (P = (0, I.HN)(o).filter(i)),
          (U[11] = eo?.requirements?.models?.newThread),
          (U[12] = e),
          (U[13] = V),
          (U[14] = a),
          (U[15] = B),
          (U[16] = X),
          (U[17] = W),
          (U[18] = K),
          (U[19] = er),
          (U[20] = et),
          (U[21] = Z),
          (U[22] = n),
          (U[23] = J?.serviceTier),
          (U[24] = ee),
          (U[25] = Q),
          (U[26] = t.isLoading),
          (U[27] = t.model),
          (U[28] = t.serviceTier),
          (U[29] = G),
          (U[30] = Y),
          (U[31] = es),
          (U[32] = el.isLoading),
          (U[33] = el.serviceTier),
          (U[34] = M),
          (U[35] = E),
          (U[36] = k),
          (U[37] = _),
          (U[38] = T),
          (U[39] = N),
          (U[40] = P),
          (U[41] = L),
          (U[42] = F),
          (U[43] = q))
      } else
        ((M = U[34]),
          (E = U[35]),
          (k = U[36]),
          (_ = U[37]),
          (T = U[38]),
          (N = U[39]),
          (P = U[40]),
          (L = U[41]),
          (F = U[42]),
          (q = U[43]))
      U[46] !== E || U[47] !== _ || U[48] !== T || U[49] !== N || U[50] !== P
        ? ((j = {
            availableOptions: P,
            isLoading: E,
            selectedServiceTier: _,
            selectedServiceTierForModel: T,
            serviceTierForRequest: N,
          }),
          (U[46] = E),
          (U[47] = _),
          (U[48] = T),
          (U[49] = N),
          (U[50] = P),
          (U[51] = j))
        : (j = U[51])
      let ec = J?.serviceTier
      return (
        U[52] !== M ||
        U[53] !== B ||
        U[54] !== k ||
        U[55] !== el.activeProfileForWrite ||
        U[56] !== j ||
        U[57] !== ec ||
        U[58] !== L ||
        U[59] !== F ||
        U[60] !== q
          ? ((D = {
              hasManagedNewThreadSettings: L,
              hostId: F,
              serviceTierAccess: q,
              serviceTierSettings: j,
              homeConversationId: B,
              hasManagedNewThreadServiceTier: M,
              savedDefaultServiceTier: k,
              latestThreadServiceTier: ec,
              activeProfileForWrite: el.activeProfileForWrite,
            }),
            (U[52] = M),
            (U[53] = B),
            (U[54] = k),
            (U[55] = el.activeProfileForWrite),
            (U[56] = j),
            (U[57] = ec),
            (U[58] = L),
            (U[59] = F),
            (U[60] = q),
            (U[61] = D))
          : (D = U[61]),
        D
      )
    }
    a.d(
      t,
      {},
      {
        i: _,
        k: function (e, t) {
          let a,
            l,
            c,
            u,
            d = (0, i.c)(31),
            p = void 0 === e ? null : e,
            v = void 0 === t ? null : t,
            w = (0, o.gh)(b.u),
            { draftSettings: C, isNewThreadDraft: A, updateDraftSettings: S } = (0, g.iW)(),
            { modelSettings: R, setModelAndReasoningEffort: O } = (0, k.aU)(p),
            {
              serviceTierAccess: T,
              serviceTierSettings: N,
              hasManagedNewThreadSettings: P,
              hostId: L,
              homeConversationId: F,
              hasManagedNewThreadServiceTier: q,
              savedDefaultServiceTier: j,
              latestThreadServiceTier: D,
              activeProfileForWrite: U,
            } = _(p, R, C.serviceTier, A, v),
            V = (0, x.D)(L, U)
          d[0] !== p || d[1] !== L
            ? ((a = { hostId: L, conversationId: p }), (d[0] = p), (d[1] = L), (d[2] = a))
            : (a = d[2])
          let H = a
          d[3] !== p ||
          d[4] !== v ||
          d[5] !== C.serviceTier ||
          d[6] !== q ||
          d[7] !== F ||
          d[8] !== L ||
          d[9] !== D ||
          d[10] !== j ||
          d[11] !== w ||
          d[12] !== N ||
          d[13] !== H ||
          d[14] !== O ||
          d[15] !== V
            ? ((l = async (e, t) => {
                let a = null != v ? w.get(E.Wo) : null,
                  i = null == p ? null : w.get(h.EX, ["conversation", p]),
                  o = w.get(h.pu, H),
                  l = null != o || q || (0, I.Q7)(e) !== j,
                  c = null != p && (null != o || e !== D),
                  u = { serviceTier: e }
                i?.serviceTier === void 0 && w.set(h.pu, H, u)
                let d = !1,
                  g = !1
                try {
                  if (null != F)
                    if (null != v) g = !(await (0, f.lE)(w, F, e))
                    else {
                      let t = null == e || "default" === e ? "standard" : e
                      ;(w.set(f.Q5, F, t), w.set(m.$, t), l && (await V(e)))
                    }
                  if (
                    (i?.serviceTier !== void 0
                      ? (g = !(d = await O(i.model, i.reasoningEffort, { persistAsDefault: !1, serviceTier: e })))
                      : c && (await (0, s.V)(w, L).updateThreadSettingsForNextTurn(p, { serviceTier: e }), (d = !0)),
                    null == F && l && !g)
                  )
                    if (null != v) {
                      let t = w.get(E.Wo)
                      null == a || t?.accountId !== a.accountId || t.userId !== a.userId
                        ? (g = !0)
                        : await w.get(E.$C).mutateAsync({ serviceTier: (0, r.Pg)(e) ?? "standard" })
                    } else await V(e)
                } catch (e) {
                  ;((g = !0), M.v.error("Failed to set service tier", { safe: {}, sensitive: { error: e } }))
                }
                if ((w.get(h.pu, H) === u && w.set(h.pu, H, null), g)) return !1
                if (l || d || null != F || (null == p && null != C.serviceTier)) {
                  let a = (0, I.XK)(e),
                    i = (0, I.XK)(N.serviceTierForRequest)
                  if (i === a) return !0
                  ;(0, y.yy)(w, n.CodexServiceTierChanged, { previousServiceTier: i, serviceTier: a, source: t })
                }
                return !0
              }),
              (d[3] = p),
              (d[4] = v),
              (d[5] = C.serviceTier),
              (d[6] = q),
              (d[7] = F),
              (d[8] = L),
              (d[9] = D),
              (d[10] = j),
              (d[11] = w),
              (d[12] = N),
              (d[13] = H),
              (d[14] = O),
              (d[15] = V),
              (d[16] = l))
            : (l = d[16])
          let B = l
          d[17] !== p ||
          d[18] !== v ||
          d[19] !== C.serviceTier ||
          d[20] !== P ||
          d[21] !== L ||
          d[22] !== A ||
          d[23] !== B ||
          d[24] !== w ||
          d[25] !== T ||
          d[26] !== S
            ? ((c = async (e, t) => {
                if (!(0, r.uw)(e, T)) return !1
                let a = null == p && A && (P || null != v || null != C.serviceTier)
                a && S((t) => ({ ...t, isManuallyChanged: !0, serviceTier: { value: (0, I.Q7)(e) } }))
                let [i] = await Promise.all([B(e, t), a ? (0, s.V)(w, L).clearPrewarmedThreads() : void 0])
                return i
              }),
              (d[17] = p),
              (d[18] = v),
              (d[19] = C.serviceTier),
              (d[20] = P),
              (d[21] = L),
              (d[22] = A),
              (d[23] = B),
              (d[24] = w),
              (d[25] = T),
              (d[26] = S),
              (d[27] = c))
            : (c = d[27])
          let X = c
          return (
            d[28] !== N || d[29] !== X
              ? ((u = { serviceTierSettings: N, setServiceTier: X }), (d[28] = N), (d[29] = X), (d[30] = u))
              : (u = d[30]),
            u
          )
        },
      },
    )
  },
  NMCC(e, t, a) {
    var i = a("CiLO"),
      n = a("uIyc"),
      o = a("qEnx"),
      r = a("urzV"),
      l = a("CBsD"),
      s = a("Yscs")
    let c = new WeakMap()
    function u(e, t, a) {
      if (!e.get(i.JX).some((e) => e.attachmentId === a && e.attachmentSrc === t)) return
      let o = c.get(e.node),
        r = o?.delete(a) ?? !1
      ;(o?.size === 0 && c.delete(e.node),
        r || (0, n.td)(e, a),
        (0, i.Kk)(e, (e) => {
          ;((e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => e.attachmentId !== a)),
            r || (e.imageAttachments = e.imageAttachments.filter((e) => e.id !== a)))
        }))
    }
    async function d(e, t) {
      try {
        let a = await m(e, t)
        if ((t.throwIfAborted(), null == a)) return (p(e), !1)
        let n = await (0, o.s)({ dataUrl: a, filename: e.downloadFileName })
        return (
          t.throwIfAborted(),
          (0, i.Kk)(e.composerScope, (t) => {
            let i = t.imageAttachments.find((t) => t.id === e.attachmentId)
            null != i && ((i.uploadSrc = a), Object.assign(i, n))
          }),
          !0
        )
      } catch {
        return (t.aborted || p(e), !1)
      }
    }
    function p(e) {
      let t = e.composerScope
          .get(i.JX)
          .find((t) => t.attachmentId === e.attachmentId && t.attachmentSrc === e.attachmentSrc),
        a = e.composerScope.get(i.gy).some((t) => t.id === e.attachmentId)
      null != t && a && e.onUploadFailure?.()
    }
    function f(e) {
      return e.src.startsWith("data:image/") ? e.src : e.downloadSrc.startsWith("data:image/") ? e.downloadSrc : null
    }
    async function m(e, t) {
      let a = f(e)
      if (null != a) return a
      if (null != e.absoluteImageFilePath)
        return (0, l.fB)(e.absoluteImageFilePath, e.hostId, e.queryClient, t, e.conversationId)
      try {
        let a = await (0, r.M2)(e.downloadSrc, { signal: t })
        if (null == a || !a.blob.type.startsWith("image/")) return null
        return await (0, s.G)(a.blob)
      } catch {
        return null
      }
    }
    a.d(
      t,
      {},
      {
        CB: function (e, t) {
          if (0 === t.length) return void u(e.composerScope, e.attachmentSrc, e.attachmentId)
          let a = f(e),
            o = !1
          if (
            ((0, i.Kk)(e.composerScope, (i) => {
              let n = i.imageCommentDrafts.findIndex((t) => t.attachmentId === e.attachmentId),
                r = i.imageAttachments.some((t) => t.id === e.attachmentId),
                l = { attachmentId: e.attachmentId, attachmentSrc: e.attachmentSrc, comments: t }
              ;(-1 === n ? i.imageCommentDrafts.push(l) : (i.imageCommentDrafts[n] = l),
                r ||
                  (i.imageAttachments.push({
                    excludeFromImageAnalytics: !!e.excludeFromImageAnalytics || void 0,
                    filename: e.downloadFileName,
                    id: e.attachmentId,
                    previewSrc: e.src,
                    src:
                      !e.isCloudComposer && /^(https?:|blob:)/i.test(e.attachmentSrc) && null != a
                        ? a
                        : e.attachmentSrc,
                    uploadSrc: a ?? void 0,
                    ...(e.isCloudComposer || null == a ? { uploadStatus: "uploading" } : {}),
                  }),
                  (o = !0)))
            }),
            !o || (!e.isCloudComposer && null != a))
          )
            return
          let r = new AbortController(),
            l = (0, n.Mz)(e.composerScope, { hostId: e.hostId, id: e.attachmentId, onCancel: () => r.abort() })
          ;(e.isCloudComposer
            ? d(e, r.signal)
            : (async function (e, t) {
                let a = await m(e, t)
                if ((t.throwIfAborted(), null == a))
                  return (
                    (0, i.Kk)(e.composerScope, (t) => {
                      let a = t.imageAttachments.find((t) => t.id === e.attachmentId)
                      null != a && (a.uploadStatus = "error")
                    }),
                    !1
                  )
                let n = "cloud" === e.composerScope.get(i.YH)
                return (
                  (0, i.Kk)(e.composerScope, (t) => {
                    let i = t.imageAttachments.find((t) => t.id === e.attachmentId)
                    null != i &&
                      ((i.uploadSrc = a),
                      /^(https?:|blob:)/i.test(e.attachmentSrc) && (i.src = a),
                      (i.uploadStatus = n ? "uploading" : "idle"))
                  }),
                  !n || d(e, t)
                )
              })(e, r.signal)
          ).then(
            (e) => {
              e ? l.succeed() : l.fail()
            },
            () => {
              l.fail()
            },
          )
        },
        E$: function (e, t, a) {
          ;(0, i.Kk)(e, (i) => {
            if (!i.imageCommentDrafts.some((e) => e.attachmentId === t)) {
              if (i.imageAttachments.some((e) => e.id === t)) {
                let a = c.get(e.node) ?? new Set()
                ;(a.add(t), c.set(e.node, a))
              }
              i.imageCommentDrafts.push({ attachmentId: t, attachmentSrc: a, comments: [] })
            }
          })
        },
        II: function (e, t) {
          let a = new Set(
            e
              .get(i.JX)
              .filter((e) => null == t || e.attachmentId === t)
              .map((e) => e.attachmentId),
          )
          if (0 === a.size) return
          let o = c.get(e.node),
            r = new Set()
          for (let t of a) o?.delete(t) || (r.add(t), (0, n.td)(e, t))
          ;(o?.size === 0 && c.delete(e.node),
            (0, i.Kk)(e, (e) => {
              ;((e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => !a.has(e.attachmentId))),
                (e.imageAttachments = e.imageAttachments.filter((e) => !r.has(e.id))))
            }))
        },
        ec: function (e, t, a) {
          u(e, a, t)
        },
      },
    )
  },
  m88r(e, t, a) {
    a.d(t, { i: () => m })
    var i = a("Qgfj"),
      n = a("qixt"),
      o = a("bnxy"),
      r = a("ivPw")
    let l = new Set([".", "*", "+", "?", "^", "$", "{", "}", "(", ")", "|", "[", "]"])
    function s(e) {
      let t = "",
        a = !1
      for (let n of e) {
        if (a) {
          var i
          if (((i = n), /^[A-Za-z0-9]$/.test(i))) return null
          ;((t += n), (a = !1))
          continue
        }
        if ("\\" === n) {
          a = !0
          continue
        }
        if (l.has(n)) return null
        t += n
      }
      return a ? null : t
    }
    function c([e, ...t], a) {
      return a([d(e), ...t.map(d)])
    }
    function u([e, ...t]) {
      let a = e
      for (let [e, i] of t.entries()) {
        let n = e === t.length - 1 ? (1 === t.length ? " and " : ", and ") : ", "
        a += `${n}${i}`
      }
      return a
    }
    function d(e) {
      return `\u{201C}${e.replace(/^["']+/, "").replace(/["']+$/, "")}\u{201D}`
    }
    var p = a("Z2lA"),
      f = a("pNUK")
    function m({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a }) {
      return (
        h({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a, inProgressOnly: !0 }) ??
        h({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a, inProgressOnly: !1 })
      )
    }
    function h({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a, inProgressOnly: i }) {
      for (let d = e.length - 1; d >= 0; d -= 1) {
        var l
        let m = e[d]
        if (m?.type !== "exec" || (i && !("interrupted" !== (l = m).executionStatus && !l.parsedCmd.isFinished)))
          continue
        let h = (function ({ item: e, threadDetailLevel: t, formatSearchQueryTermList: a }) {
          let i = e.parsedCmd
          switch (i.type) {
            case "read": {
              let t = i.displayLabel ?? (0, o.Q0)((0, r.i)(i.path ?? i.name)),
                a = (0, p.$)({ summary: i, cwd: e.cwd }),
                n = a?.isSkillDefinitionFile === !0
              if (null != a && n && (0, f.n)(a))
                return { activityKey: e.callId, icon: "internal-knowledge", message: g.readInternalKnowledge }
              return {
                activityKey: e.callId,
                icon: "run-command",
                message: n ? g.readSkill : g.read,
                values: n ? { skillName: a.skillName } : { target: t },
              }
            }
            case "search":
              return (function ({
                activityKey: e,
                path: t,
                query: a,
                threadDetailLevel: i,
                formatSearchQueryTermList: o,
              }) {
                if (t)
                  return {
                    activityKey: e,
                    icon: "code-searching",
                    message: g.searchFolder,
                    values: { folder: (0, r.i)(t) },
                  }
                if (a) {
                  let t =
                    i === n.O$
                      ? (function (e, t = u) {
                          let a = (function (e) {
                            let t = (function (e) {
                              let t = [],
                                a = 0,
                                i = !1
                              for (let n = 0; n < e.length; n += 1) {
                                let o = e[n]
                                if (i) {
                                  i = !1
                                  continue
                                }
                                if ("\\" === o) {
                                  i = !0
                                  continue
                                }
                                "|" === o && (t.push(e.slice(a, n)), (a = n + 1))
                              }
                              return 0 === t.length ? [] : (t.push(e.slice(a)), t)
                            })(e)
                            if (t.length < 2) return null
                            let a = []
                            for (let e of t) {
                              let t = s(e)
                              if (null == t || 0 === t.length) return null
                              a.push(t)
                            }
                            return (function (e) {
                              let [t, ...a] = e
                              return null == t ? null : [t, ...a]
                            })(a)
                          })(e)
                          return null != a ? c(a, t) : c([s(e) ?? e], t)
                        })(a, o)
                      : a
                  return { activityKey: e, icon: "code-searching", message: g.searchQuery, values: { query: t } }
                }
                return { activityKey: e, icon: "code-searching", message: g.searchFiles }
              })({
                activityKey: e.callId,
                path: i.path,
                query: i.query,
                threadDetailLevel: t,
                formatSearchQueryTermList: a,
              })
            case "list_files":
              if (null == i.path) return { activityKey: e.callId, icon: "list-files", message: g.listFiles }
              return {
                activityKey: e.callId,
                icon: "list-files",
                message: g.listFolder,
                values: { folder: (0, r.i)(i.path) },
              }
            case "format":
            case "lint":
            case "noop":
            case "test":
            case "unknown":
              return (function (e) {
                let t
                t =
                  "interrupted" === e.executionStatus
                    ? g.commandStopped
                    : e.parsedCmd.isFinished
                      ? g.commandRan
                      : g.commandRunning
                let a = e.parsedCmd.cmd.trim()
                return 0 === a.length
                  ? {
                      activityKey: e.callId,
                      icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                      message: t,
                    }
                  : {
                      activityKey: e.callId,
                      icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                      message:
                        "interrupted" === e.executionStatus
                          ? g.commandStoppedWithDetail
                          : e.parsedCmd.isFinished
                            ? g.commandRanWithDetail
                            : g.commandRunningWithDetail,
                      values: { command: a },
                    }
              })(e)
          }
        })({ item: m, threadDetailLevel: t, formatSearchQueryTermList: a })
        if (null != h) return h
      }
      return null
    }
    let g = (0, i.YK)({
      read: {
        id: "localConversation.toolActivity.active.read",
        defaultMessage: "<action>Reading</action> <detail>{target}</detail>",
      },
      readSkill: {
        id: "localConversation.toolActivity.active.readSkill",
        defaultMessage: "<action>Reading</action> <detail>{skillName} skill</detail>",
      },
      readInternalKnowledge: {
        id: "localConversation.toolActivity.active.readInternalKnowledge",
        defaultMessage: "<action>Reading</action> <detail>Internal Knowledge</detail>",
      },
      searchFolder: {
        id: "localConversation.toolActivity.active.search.folder",
        defaultMessage: "<action>Searching</action> <detail>files in {folder} folder</detail>",
      },
      searchQuery: {
        id: "localConversation.toolActivity.active.search.query",
        defaultMessage: "<action>Searching</action> <detail>for {query}</detail>",
      },
      searchFiles: {
        id: "localConversation.toolActivity.active.search.files",
        defaultMessage: "<action>Searching</action> <detail>files</detail>",
      },
      listFiles: {
        id: "localConversation.toolActivity.active.list.files",
        defaultMessage: "<action>Listing</action> <detail>files</detail>",
      },
      listFolder: {
        id: "localConversation.toolActivity.active.list.folder",
        defaultMessage: "<action>Listing</action> <detail>files in {folder} folder</detail>",
      },
      commandStopped: {
        id: "localConversation.toolActivity.active.command.stopped",
        defaultMessage: "<action>Stopped command</action>",
      },
      commandStoppedWithDetail: {
        id: "localConversation.toolActivity.active.command.stopped.detail",
        defaultMessage: "<action>Stopped</action> <detail>{command}</detail>",
      },
      commandRan: {
        id: "localConversation.toolActivity.active.command.ran",
        defaultMessage: "<action>Ran command</action>",
      },
      commandRanWithDetail: {
        id: "localConversation.toolActivity.active.command.ran.detail",
        defaultMessage: "<action>Ran</action> <detail>{command}</detail>",
      },
      commandRunning: {
        id: "localConversation.toolActivity.active.command.running",
        defaultMessage: "<action>Running command</action>",
      },
      commandRunningWithDetail: {
        id: "localConversation.toolActivity.active.command.running.detail",
        defaultMessage: "<action>Running</action> <detail>{command}</detail>",
      },
    })
  },
  l4nv(e, t, a) {
    a.d(
      t,
      {},
      {
        w: function (e) {
          let t = []
          if ((null != e.network && t.push({ kind: "network" }), null == e.fileSystem)) return t
          let a = new Set(),
            i = new Set()
          for (let t of e.fileSystem.entries ?? []) {
            let e = (function (e) {
              switch (e.type) {
                case "path":
                  return e.path
                case "glob_pattern":
                  return e.pattern
                case "special":
                  var t = e.value
                  switch (t.kind) {
                    case "root":
                      return "/"
                    case "minimal":
                      return ":minimal"
                    case "project_roots":
                      return null == t.subpath ? ":project_roots" : `:project_roots/${t.subpath}`
                    case "tmpdir":
                      return ":tmpdir"
                    case "slash_tmp":
                      return "/tmp"
                    case "unknown":
                      return null == t.subpath ? t.path : `${t.path}/${t.subpath}`
                  }
                  return
              }
            })(t.path)
            switch (t.access) {
              case "read":
                a.add(e)
                break
              case "write":
                i.add(e)
            }
          }
          let n = Array.from(a),
            o = Array.from(i),
            r = n.filter((e) => i.has(e)),
            l = n.filter((e) => !i.has(e)),
            s = o.filter((e) => !a.has(e))
          return (
            r.length > 0 && t.push({ kind: "fileSystem", access: "readWrite", paths: r }),
            l.length > 0 && t.push({ kind: "fileSystem", access: "read", paths: l }),
            s.length > 0 && t.push({ kind: "fileSystem", access: "write", paths: s }),
            t
          )
        },
      },
    )
  },
  Z2lA(e, t, a) {
    var i = a("bnxy"),
      n = a("ivPw"),
      o = a("pNUK")
    function r({ summary: e, cwd: t }) {
      let a = (function ({ summary: e, cwd: t }) {
        switch (e.type) {
          case "read":
            return l({ path: e.path ?? e.name, cwd: t })
          case "list_files":
          case "search":
            if (!e.path) return null
            return l({ path: e.path, cwd: t })
        }
      })({ summary: e, cwd: t })
      return a ? (0, o.F)(a) : null
    }
    function l({ path: e, cwd: t }) {
      if (!e) return null
      let a = (0, n.i)(e)
      return 0 === a.length ? null : null != t ? (0, n.i)((0, i.b0)(t, a)) : a
    }
    a.d(
      t,
      {},
      {
        $: r,
        c: function ({ summary: e, cwd: t }) {
          return r({ summary: e, cwd: t })?.isSkillDefinitionFile === !0
        },
      },
    )
  },
  TKsx(e, t, a) {
    var i = a("qmMi"),
      n = a("Dgwo"),
      o = a("tl5a"),
      r = a("OWtl"),
      l = a("rvFo")
    let s = ["plan", "default"]
    function c(e, t) {
      return {
        queryKey: ["collaboration-modes", "list", t],
        staleTime: l.D.INFINITE,
        queryFn: async () =>
          (function (e, t) {
            let a = {}
            for (let t of e) {
              let e = (function (e) {
                let t = e.mode
                return null == t || "plan" === t || "default" === t ? e : { ...e, mode: "default" }
              })(t)
              null == e.mode || a[e.mode] || (a[e.mode] = e)
            }
            let i = []
            for (let e of t) {
              let t = a[e]
              t && i.push(t)
            }
            return i
          })((await (0, n.V)(e, t).sendRequest("collaborationMode/list", {})).data, s),
      }
    }
    let u = (0, i.vU)(r.u, (e, { scope: t }) => c(t, e)),
      d = (0, i.RD)(r.u, ({ get: e, scope: t }) => c(t, e(o.Dc)))
    a.d(t, {}, { EW: d, aQ: u })
  },
  QVc9(e, t, a) {
    var i = a("qmMi"),
      n = a("OWtl"),
      o = a("A2am"),
      r = a("XLpU")
    let l = (0, i.un)(n.u, ({ get: e }) => {
        let t,
          a = e(r._A)
        return "inactive" !== a.phase && a.outputMuted
          ? ((t = e(o.r, a.locator).entries.at(-1)),
            t?.type !== "item" || "assistant" !== t.role ? null : t.text.trim() || null)
          : null
      }),
      s = (0, i.un)(n.u, ({ get: e }) => {
        let t = e(r._A)
        return "inactive" !== t.phase && t.outputMuted
          ? (function (e) {
              for (let t = e.entries.length - 1; t >= 0; t -= 1) {
                let a = e.entries[t]
                if ("handoff" === a.type || "session-divider" === a.type) break
                if ("item" === a.type && "assistant" === a.role) {
                  let e = a.text.trim()
                  if ("" !== e) return e
                }
              }
              return null
            })(e(o.r, t.locator))
          : null
      })
    a.d(t, {}, { Rq: s, gL: l })
  },
  mHH7(e, t, a) {
    var i = a("OZum"),
      n = a("alO6"),
      o = a("Hkqr")
    a.d(
      t,
      {},
      {
        i: function ({ intl: e, resolvedApps: t, status: a }) {
          let r
          switch (a.type) {
            case "thinking":
              r =
                a.reasoningSummaryLine ??
                e.formatMessage({ id: "realtimeVoice.codexStatus.thinking", defaultMessage: "Thinking" })
              break
            case "tool":
              switch (a.tool.type) {
                case "command":
                  r = e.formatMessage({
                    id: "realtimeVoice.codexStatus.runningCommand",
                    defaultMessage: "Running command",
                  })
                  break
                case "file-change":
                  r = e.formatMessage(
                    {
                      id: "realtimeVoice.codexStatus.editingFiles",
                      defaultMessage: "Editing {count, plural, =0 {files} one {a file} other {# files}}",
                    },
                    { count: a.tool.fileCount },
                  )
                  break
                case "mcp":
                  if (null == t && null == a.tool.appContext) return null
                  r = (0, n.EP)({
                    pluginId: a.tool.pluginId,
                    appContext: a.tool.appContext,
                    completed: !1,
                    intl: e,
                    matchingApp:
                      null == t
                        ? null
                        : (0, o.M)({
                            appContext: a.tool.appContext,
                            apps: t,
                            functionName: a.tool.functionName,
                            serverName: a.tool.invocation.server,
                            toolName: a.tool.invocation.tool,
                          }),
                    serverName: a.tool.invocation.server,
                    source: a.tool.source,
                    toolArguments: a.tool.invocation.arguments,
                    toolName: a.tool.invocation.tool,
                  })
                  break
                case "dynamic":
                  r =
                    "wait_threads" === a.tool.tool
                      ? e.formatMessage({
                          id: "realtimeVoice.codexStatus.waitingForThread",
                          defaultMessage: "Waiting for chat",
                        })
                      : (0, i.g)(a.tool.tool, { style: "sentence" })
                  break
                case "web-search":
                  r = a.tool.query.trim()
                    ? e.formatMessage(
                        {
                          id: "realtimeVoice.codexStatus.searchingWebFor",
                          defaultMessage: "Searching the web for {query}",
                        },
                        { query: a.tool.query },
                      )
                    : e.formatMessage({
                        id: "realtimeVoice.codexStatus.searchingWeb",
                        defaultMessage: "Searching the web",
                      })
              }
          }
          let l = "tool" === a.type ? a.activeToolCount - 1 : 0
          return {
            additionalToolsLabel:
              l > 0
                ? e.formatMessage(
                    { id: "realtimeVoice.codexStatus.additionalTools", defaultMessage: "+{count} more" },
                    { count: l },
                  )
                : null,
            label: r,
          }
        },
      },
    )
  },
  pcVU(e, t, a) {
    a.d(t, { l: () => p })
    var i = a("SZCv"),
      n = a.n(i),
      o = a("qmMi"),
      r = a("vdpW"),
      l = a("OWtl"),
      s = a("Faus"),
      c = a("v1hC"),
      u = a("bwpB")
    function d(e) {
      return (
        ("commandExecution" === e.type ||
          "fileChange" === e.type ||
          "mcpToolCall" === e.type ||
          "dynamicToolCall" === e.type) &&
        "inProgress" === e.status
      )
    }
    let p = (0, o.i1)(
      l.u,
      ({ locator: e, hideWhileResponding: t }, { get: a }) => {
        let i = a(r._2, null == e ? null : { hostId: e.hostId, threadId: e.conversationId }),
          n = a(r.OM, i)
        return null == i || "inProgress" !== n
          ? null
          : (function (e, { hideWhileResponding: t = !0 } = {}) {
              if (e?.status !== "inProgress") return null
              let a = e.items.at(-1),
                i = e.items.filter(d)
              a?.type === "webSearch" && i.push(a)
              let n = i.at(-1)
              if (null != n)
                return {
                  type: "tool",
                  activeToolCount: i.length,
                  tool: (function (e) {
                    switch (e.type) {
                      case "commandExecution":
                        return { type: "command" }
                      case "fileChange":
                        return { type: "file-change", fileCount: e.changes.length }
                      case "mcpToolCall":
                        if ("codex_app" === e.server) return { type: "dynamic", tool: e.tool }
                        return {
                          type: "mcp",
                          appContext: e.appContext,
                          pluginId: e.pluginId,
                          functionName: `${e.server}__${e.tool}`,
                          invocation: { arguments: e.arguments, server: e.server, tool: e.tool },
                          source: (0, u.MO)({ resultMeta: e.result?._meta ?? null, serverName: e.server }),
                        }
                      case "dynamicToolCall":
                        return { type: "dynamic", tool: e.tool }
                      case "webSearch":
                        return { type: "web-search", query: e.query }
                    }
                  })(n),
                }
              if (t && a?.type === "agentMessage" && a.text.trim().length > 0) return null
              for (let t = e.items.length - 1; t >= 0; t -= 1) {
                let a = e.items[t]
                if (a?.type !== "reasoning") continue
                let i = (0, s.S3)((0, c.W)(a.summary))
                if (null != i) return { type: "thinking", reasoningSummaryLine: i }
              }
              return { type: "thinking", reasoningSummaryLine: null }
            })(
              {
                items: (a(r.hm, i) ?? []).flatMap((e) => {
                  let t = a(r.mz, { ...i, itemId: e })
                  return null == t ? [] : [t]
                }),
                status: n,
              },
              { hideWhileResponding: t },
            )
      },
      { isEqual: n() },
    )
  },
  OTgW(e, t, a) {
    var i = a("qmMi"),
      n = a("OWtl"),
      o = a("Nwp9"),
      r = a("l0pH")
    let l = (0, o.m3)("has-seen-realtime-voice-nux-v1", !1),
      s = (0, i.un)(n.u, ({ get: e }) => {
        let t = e(r.x),
          a = e(l)
        return !!t && (null == a ? void 0 : !a)
      })
    a.d(
      t,
      {},
      {
        Yl: l,
        ZZ: function (e) {
          e.set(l, !0)
        },
        gH: s,
      },
    )
  },
  NolR(e, t, a) {
    var i = a("QosV"),
      n = a("XYHU"),
      o = a("hZax")
    a.d(
      t,
      {},
      {
        w: function () {
          let e,
            t = (0, i.c)(2),
            a = (0, o.Zj)("620613358")
          return (t[0] !== a ? ((e = "macOS" === (0, n.tR)() && a), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
  rnJN(e, t, a) {
    let i
    function n(e) {
      if (void 0 === i) {
        let e = document.createElement("canvas")
        ;((e.width = 1), (e.height = 1), (i = e.getContext("2d", { willReadFrequently: !0 })))
      }
      return null == i
        ? null
        : (i.clearRect(0, 0, 1, 1), (i.fillStyle = e), i.fillRect(0, 0, 1, 1), i.getImageData(0, 0, 1, 1).data)
    }
    a.d(
      t,
      {},
      {
        F: n,
        J: function (e) {
          if (/^rgba?\(/.test(e)) return e
          let t = n(e)
          if (null == t) return e
          let [a, i, o, r] = t
          return `rgba(${a}, ${i}, ${o}, ${r / 255})`
        },
      },
    )
  },
  DX7P(e, t, a) {
    var i = a("QosV"),
      n = a("qmMi"),
      o = a("Dgwo"),
      r = a("tl5a"),
      l = a("YWOa"),
      s = a("sLlu"),
      c = a("OWtl"),
      u = a("l2g8")
    a.d(
      t,
      {},
      {
        D: function (e, t) {
          let a,
            d = (0, i.c)(5),
            p = (0, n.gh)(c.u),
            f = (0, s.B)()
          return (
            d[0] !== e || d[1] !== f || d[2] !== t || d[3] !== p
              ? ((a = async (a) => {
                  ;(await (0, o.V)(p, e).setDefaultServiceTierConfig(a, t),
                    p.set(r.QN, e, (0, u.oD)(a)),
                    await Promise.all([f(["config"]), f([...l.Od, e, null])]),
                    await p.query.fetch(l.J8, { hostId: e }))
                }),
                (d[0] = e),
                (d[1] = f),
                (d[2] = t),
                (d[3] = p),
                (d[4] = a))
              : (a = d[4]),
            a
          )
        },
        H: function (e, t) {
          let a,
            o,
            s,
            c,
            d = (0, i.c)(12),
            p = void 0 === t || t,
            f = (0, n.Ul)(r.Dj)
          d[0] !== e || d[1] !== f ? ((a = f.includes(e)), (d[0] = e), (d[1] = f), (d[2] = a)) : (a = d[2])
          let m = a
          d[3] !== e ? ((o = { hostId: e }), (d[3] = e), (d[4] = o)) : (o = d[4])
          let h = (0, n._U)(p ? l.J8 : null, o),
            g = h?.data,
            v = (0, n._U)(p ? r.QN : null, e)
          d[5] !== g?.service_tier || d[6] !== v
            ? ((s = null == v ? null : (0, u.qh)(v, g?.service_tier ?? null)),
              (d[5] = g?.service_tier),
              (d[6] = v),
              (d[7] = s))
            : (s = d[7])
          let y = s,
            w = "string" == typeof g?.profile ? g.profile : null,
            C = p && (!m || h?.isLoading === !0)
          return (
            d[8] !== y || d[9] !== w || d[10] !== C
              ? ((c = { activeProfileForWrite: w, isLoading: C, serviceTier: y }),
                (d[8] = y),
                (d[9] = w),
                (d[10] = C),
                (d[11] = c))
              : (c = d[11]),
            c
          )
        },
      },
    )
  },
  tUff(e, t, a) {
    let i = (0, a("ESTr").a)({
      name: "checkmark-circle-fill-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.25, y: 1.25, width: 13.5, height: 13.5 },
        visualBounds: { x: 1.25, y: 1.25, width: 13.5, height: 13.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.25, y: 1.25, width: 13.5, height: 13.5 },
        center: { x: 8, y: 8 },
        insets: { top: 1.25, right: 1.25, bottom: 1.25, left: 1.25 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.25C11.7279 1.25 14.75 4.27208 14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25ZM10.6807 5.47363C10.3367 5.24301 9.87036 5.33482 9.63965 5.67871L7.27832 9.20117L6.28613 8.13672C6.00361 7.83389 5.52846 7.81716 5.22559 8.09961C4.92276 8.38214 4.90603 8.85728 5.18848 9.16016L6.61133 10.6846C7.05077 11.1556 7.8151 11.0946 8.17383 10.5596L10.8857 6.51465C11.1164 6.17067 11.0246 5.70434 10.6807 5.47363Z" fill="currentColor"/>',
    })
    a.d(t, {}, { m: i })
  },
  blHc(e, t, a) {
    let i = (0, a("ESTr").a)({
      name: "stop-fill-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.141235, y: 3.141113, width: 9.716797, height: 9.716797 },
        visualBounds: { x: 3.141235, y: 3.141113, width: 9.716797, height: 9.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.141235, y: 3.141113, width: 9.716797, height: 9.716797 },
        center: { x: 7.999634, y: 7.999512 },
        insets: { top: 3.141113, right: 3.141968, bottom: 3.14209, left: 3.141235 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999634, y: 7.999512 }, foreground: { x: 7.999634, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.4664 3.14111C11.7872 3.14111 12.8578 4.21204 12.858 5.53271V10.4663C12.858 11.7872 11.7873 12.8579 10.4664 12.8579H5.53284C4.21217 12.8577 3.14124 11.787 3.14124 10.4663V5.53271C3.14148 4.2122 4.21232 3.14136 5.53284 3.14111H10.4664Z" fill="currentColor"/>',
    })
    a.d(t, {}, { L: i })
  },
  HmNc(e, t, a) {
    a.d(t, { z: () => d })
    var i = a("Cx8O"),
      n = a("TAwx"),
      o = a("xs0G")
    function r(e) {
      return "number" == typeof e ? e : parseFloat(e)
    }
    var l = a("zd8w"),
      s = a("ReSt"),
      c = a("K45w"),
      u = a("W5pg")
    function d(e, t = {}) {
      return (function (e, t = {}) {
        let { isStatic: a } = (0, l.useContext)(s.Q),
          d = () => ((0, i.S)(e) ? e.get() : e)
        if (a) return (0, u.G)(d)
        let p = (0, c.d)(d())
        return (
          (0, l.useInsertionEffect)(
            () =>
              (function (e, t, a = {}) {
                let l,
                  s = e.get(),
                  c = null,
                  u = s,
                  d = "string" == typeof s ? s.replace(/[\d.-]/g, "") : void 0,
                  p = () => {
                    ;(c && (c.stop(), (c = null)), (e.animation = void 0))
                  },
                  f = () => {
                    ;((() => {
                      let t = r(e.get()),
                        i = r(u)
                      if (t === i) return p()
                      let o = c ? c.getGeneratorVelocity() : e.getVelocity()
                      ;(p(),
                        (c = new n.s({
                          keyframes: [t, i],
                          velocity: o,
                          type: "spring",
                          restDelta: 0.001,
                          restSpeed: 0.01,
                          ...a,
                          onUpdate: l,
                        })))
                    })(),
                      (e.animation = c ?? void 0),
                      e.events.animationStart?.notify(),
                      c?.then(() => {
                        ;((e.animation = void 0), e.events.animationComplete?.notify())
                      }))
                  }
                if (
                  (e.attach((e, t) => {
                    ;((u = e),
                      (l = (e) => {
                        var a, i
                        return t(((a = e), (i = d) ? a + i : a))
                      }),
                      o.Gt.postRender(f))
                  }, p),
                  (0, i.S)(t))
                ) {
                  let i = !0 === a.skipInitialAnimation,
                    n = t.on("change", (t) => {
                      var a, n, o, r
                      i ? ((i = !1), e.jump(((a = t), (n = d) ? a + n : a), !1)) : e.set(((o = t), (r = d) ? o + r : o))
                    }),
                    o = e.on("destroy", n)
                  return () => {
                    ;(n(), o())
                  }
                }
                return p
              })(p, e, t),
            [p, JSON.stringify(t)],
          ),
          p
        )
      })(e, { type: "spring", ...t })
    }
  },
}
//# sourceMappingURL=355340.de1f371a7a.js.map
