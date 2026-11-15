export const __rspack_esm_ids = [968072]
export const __webpack_modules__ = {
  K7NS(e, t) {
    t.A = {
      active: "active-ylqTkR",
      image: "image-MN44N1",
      toolbar: "toolbar-HMtViS",
      opening: "opening-aO53eV",
      chrome: "chrome-cYKtGk",
      closing: "closing-fIQWrc",
      backdrop: "backdrop-I43Dio",
      "round-thumbnail": "round-thumbnail-u_JWuk",
      roundThumbnail: "round-thumbnail-u_JWuk",
      promptDetails: "promptDetails-dDoVAf",
      departing: "departing-u1a3bR",
      "unround-thumbnail": "unround-thumbnail-IRWcWA",
      unroundThumbnail: "unround-thumbnail-IRWcWA",
      "release-thumbnail-shade": "release-thumbnail-shade-VDwu8h",
      releaseThumbnailShade: "release-thumbnail-shade-VDwu8h",
    }
  },
  CuLE(e, t, a) {
    var n =
      Number.isNaN ||
      function (e) {
        return "number" == typeof e && e != e
      }
    function r(e, t) {
      if (e.length !== t.length) return !1
      for (var a, r, o = 0; o < e.length; o++) if (!((a = e[o]) === (r = t[o]) || (n(a) && n(r))) && 1) return !1
      return !0
    }
    a.d(
      t,
      {},
      {
        A: function (e, t) {
          void 0 === t && (t = r)
          var a = null
          function n() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
            if (a && a.lastThis === this && t(n, a.lastArgs)) return a.lastResult
            var o = e.apply(this, n)
            return ((a = { lastResult: o, lastArgs: n, lastThis: this }), o)
          }
          return (
            (n.clear = function () {
              a = null
            }),
            n
          )
        },
      },
    )
  },
  hwkA(e, t, a) {
    a.d(t, { $: () => u, i: () => w })
    var n = a("ABep"),
      r = a("on57"),
      o = a("zd8w"),
      i = a("pZwg"),
      s = a("fZ4G"),
      l = a("Ra0C"),
      d = a("WjNJ"),
      c = a("JlR2")
    let u = (e) => {
      let {
          type: t = "button",
          color: a = "primary",
          variant: u = "solid",
          pill: p = i.N.pill,
          squircle: m = !p && i.N.squircle,
          uniform: f = !1,
          size: h = "xs",
          iconSize: g,
          gutterSize: k,
          loading: w,
          selected: y,
          block: v,
          opticallyAlign: b,
          children: P,
          className: C,
          onClick: M,
          disabled: x,
          disabledTone: I,
          inert: A = w,
          ...T
        } = e,
        j = x || A,
        E = (0, o.useCallback)(
          (e) => {
            x || M?.(e)
          },
          [M, x],
        )
      return (0, n.jsxs)("button", {
        type: t,
        className: (0, r.A)("Button-BZrLNX", C),
        "data-color": a,
        "data-variant": u,
        "data-pill": p && !m ? "" : void 0,
        "data-squircle": m ? "" : void 0,
        "data-uniform": f ? "" : void 0,
        "data-size": h,
        "data-gutter-size": k,
        "data-icon-size": g,
        "data-loading": w ? "" : void 0,
        "data-selected": y ? "" : void 0,
        "data-suppress-active-style": !1 === y ? "" : void 0,
        "data-block": v ? "" : void 0,
        "data-optically-align": b,
        onPointerEnter: s.Ny,
        disabled: j,
        "aria-disabled": j,
        tabIndex: j ? -1 : void 0,
        "data-disabled": x ? "" : void 0,
        "data-disabled-tone": x ? I : void 0,
        onClick: E,
        ...T,
        children: [
          (0, n.jsx)(c.F, {
            className: "ButtonLoader-Lv8xLh",
            enterDuration: 250,
            exitDuration: 150,
            children: w && (0, n.jsx)(d.I, {}, "loader"),
          }),
          (0, n.jsx)("span", { className: "ButtonInner-Ku4XvS", children: (0, l.b)(P) }),
        ],
      })
    }
    var p = a("o4M9")
    async function m(e, t) {
      if (p.w9 && navigator.clipboard)
        try {
          return (await navigator.clipboard.writeText(e), !0)
        } catch {}
      let a = t
      if ((!a && p.Sw && (a = document.body), !a)) return !1
      let n = document.createElement("textarea")
      ;((n.value = e),
        (n.style.position = "fixed"),
        (n.style.top = "0"),
        (n.style.left = "0"),
        (n.style.opacity = "0"),
        a.appendChild(n),
        n.focus(),
        n.select())
      let r = !1
      try {
        r = document.execCommand("copy")
      } catch {}
      return (a.removeChild(n), r)
    }
    var f = a("cfIY")
    let h = (e) =>
      (0, n.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: (0, n.jsx)("path", {
          d: "M12.7587 2H16.2413C17.0463 1.99999 17.7106 1.99998 18.2518 2.04419C18.8139 2.09012 19.3306 2.18868 19.816 2.43597C20.5686 2.81947 21.1805 3.43139 21.564 4.18404C21.8113 4.66937 21.9099 5.18608 21.9558 5.74817C22 6.28936 22 6.95372 22 7.75868V11.2413C22 12.0463 22 12.7106 21.9558 13.2518C21.9099 13.8139 21.8113 14.3306 21.564 14.816C21.1805 15.5686 20.5686 16.1805 19.816 16.564C19.3306 16.8113 18.8139 16.9099 18.2518 16.9558C17.8906 16.9853 17.4745 16.9951 16.9984 16.9984C16.9951 17.4745 16.9853 17.8906 16.9558 18.2518C16.9099 18.8139 16.8113 19.3306 16.564 19.816C16.1805 20.5686 15.5686 21.1805 14.816 21.564C14.3306 21.8113 13.8139 21.9099 13.2518 21.9558C12.7106 22 12.0463 22 11.2413 22H7.75868C6.95372 22 6.28936 22 5.74818 21.9558C5.18608 21.9099 4.66937 21.8113 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43597 19.816C2.18868 19.3306 2.09012 18.8139 2.04419 18.2518C1.99998 17.7106 1.99999 17.0463 2 16.2413V12.7587C1.99999 11.9537 1.99998 11.2894 2.04419 10.7482C2.09012 10.1861 2.18868 9.66937 2.43597 9.18404C2.81947 8.43139 3.43139 7.81947 4.18404 7.43598C4.66937 7.18868 5.18608 7.09012 5.74817 7.04419C6.10939 7.01468 6.52548 7.00487 7.00162 7.00162C7.00487 6.52548 7.01468 6.10939 7.04419 5.74817C7.09012 5.18608 7.18868 4.66937 7.43598 4.18404C7.81947 3.43139 8.43139 2.81947 9.18404 2.43597C9.66937 2.18868 10.1861 2.09012 10.7482 2.04419C11.2894 1.99998 11.9537 1.99999 12.7587 2ZM9.00176 7L11.2413 7C12.0463 6.99999 12.7106 6.99998 13.2518 7.04419C13.8139 7.09012 14.3306 7.18868 14.816 7.43598C15.5686 7.81947 16.1805 8.43139 16.564 9.18404C16.8113 9.66937 16.9099 10.1861 16.9558 10.7482C17 11.2894 17 11.9537 17 12.7587V14.9982C17.4455 14.9951 17.7954 14.9864 18.089 14.9624C18.5274 14.9266 18.7516 14.8617 18.908 14.782C19.2843 14.5903 19.5903 14.2843 19.782 13.908C19.8617 13.7516 19.9266 13.5274 19.9624 13.089C19.9992 12.6389 20 12.0566 20 11.2V7.8C20 6.94342 19.9992 6.36113 19.9624 5.91104C19.9266 5.47262 19.8617 5.24842 19.782 5.09202C19.5903 4.7157 19.2843 4.40973 18.908 4.21799C18.7516 4.1383 18.5274 4.07337 18.089 4.03755C17.6389 4.00078 17.0566 4 16.2 4H12.8C11.9434 4 11.3611 4.00078 10.911 4.03755C10.4726 4.07337 10.2484 4.1383 10.092 4.21799C9.7157 4.40973 9.40973 4.7157 9.21799 5.09202C9.1383 5.24842 9.07337 5.47262 9.03755 5.91104C9.01357 6.20463 9.00489 6.55447 9.00176 7ZM5.91104 9.03755C5.47262 9.07337 5.24842 9.1383 5.09202 9.21799C4.7157 9.40973 4.40973 9.7157 4.21799 10.092C4.1383 10.2484 4.07337 10.4726 4.03755 10.911C4.00078 11.3611 4 11.9434 4 12.8V16.2C4 17.0566 4.00078 17.6389 4.03755 18.089C4.07337 18.5274 4.1383 18.7516 4.21799 18.908C4.40973 19.2843 4.7157 19.5903 5.09202 19.782C5.24842 19.8617 5.47262 19.9266 5.91104 19.9624C6.36113 19.9992 6.94342 20 7.8 20H11.2C12.0566 20 12.6389 19.9992 13.089 19.9624C13.5274 19.9266 13.7516 19.8617 13.908 19.782C14.2843 19.5903 14.5903 19.2843 14.782 18.908C14.8617 18.7516 14.9266 18.5274 14.9624 18.089C14.9992 17.6389 15 17.0566 15 16.2V12.8C15 11.9434 14.9992 11.3611 14.9624 10.911C14.9266 10.4726 14.8617 10.2484 14.782 10.092C14.5903 9.7157 14.2843 9.40973 13.908 9.21799C13.7516 9.1383 13.5274 9.07337 13.089 9.03755C12.6389 9.00078 12.0566 9 11.2 9H7.8C6.94342 9 6.36113 9.00078 5.91104 9.03755Z",
          fill: "currentColor",
        }),
      })
    var g = a("slpy"),
      k = a("DL3o")
    let w = ({ children: e, copyValue: t, CopyIcon: a, onClick: r, tooltip: i, tooltipProps: s, ...l }) => {
      let [d, c] = (0, o.useState)(!1),
        w = (0, o.useRef)(null)
      ;(0, o.useEffect)(
        () => () => {
          w.current && clearTimeout(w.current)
        },
        [],
      )
      let y = (0, n.jsxs)(u, {
        ...l,
        onClick: (e) => {
          d ||
            (c(!0),
            r?.(e),
            (async function (e) {
              if ("string" == typeof e) return m(e, void 0)
              try {
                if (p.w9 && "u" > typeof ClipboardItem && navigator.clipboard?.write)
                  return (
                    await navigator.clipboard.write([
                      (function (e) {
                        if ("u" < typeof ClipboardItem)
                          throw Error("ClipboardItem is not available in this environment.")
                        let { "text/plain": t, ...a } = e
                        return new ClipboardItem({
                          ...a,
                          ...(t ? { "text/plain": new Blob([t], { type: "text/plain" }) } : null),
                        })
                      })(e),
                    ]),
                    !0
                  )
                if (e["text/plain"]) return await m(e["text/plain"], void 0)
                return !1
              } catch {
                return !1
              }
            })("function" == typeof t ? t() : t),
            (w.current = window.setTimeout(() => {
              c(!1)
            }, 1300)))
        },
        children: [
          (0, n.jsx)(k.iK, {
            className: "w-[var(--button-icon-size)] h-[var(--button-icon-size)]",
            initial: { scale: 0.6 },
            enter: { scale: 1, delay: 150, duration: 300 },
            exit: { scale: 0.6, duration: 150 },
            forceCompositeLayer: !0,
            children: d ? (0, n.jsx)(f.J, {}, "copied-icon") : (0, n.jsx)(a ?? h, {}, "copy-icon"),
          }),
          "function" == typeof e ? e({ copied: d }) : e,
        ],
      })
      return i ? (0, n.jsx)(g.m, { content: i, ...s, children: y }) : y
    }
  },
  cfIY(e, t, a) {
    var n = a("ABep")
    a.d(
      t,
      {},
      {
        J: (e) =>
          (0, n.jsx)("svg", {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e,
            children: (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263Z",
              clipRule: "evenodd",
            }),
          }),
      },
    )
  },
  WjNJ(e, t, a) {
    a.d(t, { I: () => i })
    var n = a("ABep"),
      r = a("on57"),
      o = a("fZ4G")
    let i = ({ className: e, size: t, strokeWidth: a, style: i, ...s }) =>
      (0, n.jsx)("div", {
        ...s,
        className: (0, r.A)("LoadingIndicator-hj6Pfd", e),
        style: i || (0, o.mW)({ "indicator-size": t, "indicator-stroke": a }),
      })
  },
  Ra0C(e, t, a) {
    var n = a("ABep"),
      r = a("zd8w")
    a.d(
      t,
      {},
      {
        b: function e(t) {
          let a = (function (e) {
            let t = [],
              a = "",
              n = () => {
                "" !== a && (t.push(a), (a = ""))
              }
            for (let o of r.Children.toArray(e)) {
              if ("string" == typeof o || "number" == typeof o) {
                a += String(o)
                continue
              }
              ;(n(), t.push(o))
            }
            return (n(), t)
          })(t)
          return r.Children.map(a, (t) => {
            if ("string" == typeof t && "" !== t.trim()) return a.length > 1 ? (0, n.jsx)("span", { children: t }) : t
            if ((0, r.isValidElement)(t)) {
              let { children: a, ...n } = t.props
              if (null != a) return (0, r.cloneElement)(t, n, e(a))
            }
            return t
          })
        },
      },
    )
  },
  Sdx1(e, t, a) {
    var n = a("QosV"),
      r = a("fxCc"),
      o = a("kfGJ"),
      i = a("rHMn")
    let s = ["artifact-template-skill-manifests"]
    function l(e) {
      return e.refetch()
    }
    function d(e) {
      return e.isError
    }
    function c(e) {
      return e.isFetching
    }
    function u(e) {
      return e.isLoading
    }
    a.d(
      t,
      {},
      {
        H: function (e, t) {
          let a,
            p,
            m,
            f,
            h,
            g = (0, n.c)(14),
            k = new Map()
          for (let t of e) {
            let e = (0, i.tu)(t)
            null != e && k.set(t.path, e)
          }
          let w = Array.from(k),
            y = (0, r.E)({
              queries: w.map((e) => {
                let [, a] = e
                return {
                  queryKey: [...s, t ?? o.fI, a],
                  queryFn: (e) => {
                    let { signal: n } = e
                    return (0, i.Lc)({ hostId: t, manifestPath: a, signal: n })
                  },
                  staleTime: 3e4,
                }
              }),
            }),
            v = new Map()
          for (let e of w.entries()) {
            let [t, a] = e,
              [n] = a,
              r = y[t]?.data
            void 0 !== r && v.set(n, r)
          }
          let b = v.size === w.length && w.length > 0 ? v : void 0
          return (
            g[0] !== y ? ((a = y.some(u)), (g[0] = y), (g[1] = a)) : (a = g[1]),
            g[2] !== y ? ((p = y.some(c)), (g[2] = y), (g[3] = p)) : (p = g[3]),
            g[4] !== y ? ((m = y.some(d)), (g[4] = y), (g[5] = m)) : (m = g[5]),
            g[6] !== y
              ? ((f = async () => {
                  await Promise.all(y.map(l))
                }),
                (g[6] = y),
                (g[7] = f))
              : (f = g[7]),
            g[8] !== b || g[9] !== a || g[10] !== p || g[11] !== m || g[12] !== f
              ? ((h = { data: b, isLoading: a, isFetching: p, isError: m, refetch: f }),
                (g[8] = b),
                (g[9] = a),
                (g[10] = p),
                (g[11] = m),
                (g[12] = f),
                (g[13] = h))
              : (h = g[13]),
            h
          )
        },
      },
    )
  },
  sWWp(e, t, a) {
    var n = a("ko3L"),
      r = a("WrbO"),
      o = a("YWcr")
    function i(e, t) {
      let a = new URLSearchParams({ app: e.bundleId })
      return `${(0, o.vt)(t.plugin.id)}?${a.toString()}`
    }
    function s(e) {
      return (0, n.m)(e) ? "Chrome" : e.displayName
    }
    a.d(
      t,
      { Sb: () => "Chrome", mz: () => n.m },
      {
        I8: i,
        Mg: s,
        NW: function ({
          mentionPath: e,
          mentionDisplayName: t,
          nativeApps: a,
          computerPlugin: n,
          genericDisplayNames: r = [],
        }) {
          var i, l, d, c, u
          let p, m
          if (null == n || ((i = e), (l = n), !(i === (p = (0, o.vt)(l.plugin.id)) || i.startsWith(`${p}?`))))
            return { isComputerUse: !1, nativeApp: null, unresolvedNativeAppDisplayName: null }
          let f = (function (e, t) {
              let a = `${(0, o.vt)(t.plugin.id)}?`
              if (!e.startsWith(a)) return null
              let n = new URLSearchParams(e.slice(a.length)).get("app"),
                r = n?.trim()
              return null == r || 0 === r.length ? null : r
            })(e, n),
            h = t.trim(),
            g =
              null == f
                ? a.find((e) => s(e).toLowerCase() === h.toLowerCase())
                : a.find((e) => e.bundleId.toLowerCase() === f.toLowerCase()),
            k =
              null == g &&
              "" !== h &&
              (null != f ||
                ((d = h),
                (c = n),
                (u = r),
                (m = d.toLowerCase()),
                ![c.plugin.name, c.displayName, "Computer", ...u].some((e) => e?.trim().toLowerCase() === m)))
          return {
            isComputerUse: !0,
            nativeApp: null == g ? null : { ...g, displayName: "" === h ? g.displayName : h },
            unresolvedNativeAppDisplayName: k ? t : null,
          }
        },
        UA: function ({ app: e, description: t, computerPlugin: a, iconSmall: n }) {
          let r = s(e)
          return {
            kind: "plugin",
            name: r,
            displayName: r,
            path: i(e, a),
            description: t ?? a.description ?? "",
            iconSmall: n ?? a.logoPath ?? "",
          }
        },
        UU: function (e) {
          return e.find((e) => e.plugin.name === r.W && e.plugin.installed && e.plugin.enabled) ?? null
        },
        zJ: function (e) {
          return e.find((e) => e.plugin.name === r.W) ?? null
        },
      },
    )
  },
  lDn6(e, t, a) {
    var n = a("BA9i"),
      r = a("YWcr")
    let o = {
        label: "Microsoft Excel",
        shortName: "Excel",
        macBundleId: "com.microsoft.Excel",
        windowsProcessAppIdPattern: /^process:(?:.*[\\/])?excel\.exe$/i,
        windowsProcessDisplayName: "excel",
        windowsOfficeAppIdPattern: /^Microsoft\.Office\.(?:EXCEL|EXCEL\.EXE)(?:\.\d+)?$/i,
        windowsOfficeDesktopAppIdPattern: /^Microsoft\.Office\.Desktop_[^!]+!Excel$/i,
        isMentionPlugin: n.V0,
      },
      i = {
        label: "Microsoft PowerPoint",
        shortName: "PowerPoint",
        macBundleId: "com.microsoft.Powerpoint",
        windowsProcessAppIdPattern: /^process:(?:.*[\\/])?powerpnt\.exe$/i,
        windowsProcessDisplayName: "powerpnt",
        windowsOfficeAppIdPattern: /^Microsoft\.Office\.(?:POWERPOINT|POWERPNT|POWERPNT\.EXE)(?:\.\d+)?$/i,
        windowsOfficeDesktopAppIdPattern: /^Microsoft\.Office\.Desktop_[^!]+!PowerPoint$/i,
        isMentionPlugin: n.ho,
      },
      s = {
        label: "Microsoft Word",
        shortName: "Word",
        macBundleId: "com.microsoft.Word",
        windowsProcessAppIdPattern: /^process:(?:.*[\\/])?winword\.exe$/i,
        windowsProcessDisplayName: "winword",
        windowsOfficeAppIdPattern: /^Microsoft\.Office\.(?:WORD|WINWORD|WINWORD\.EXE)(?:\.\d+)?$/i,
        windowsOfficeDesktopAppIdPattern: /^Microsoft\.Office\.Desktop_[^!]+!Word$/i,
        isMentionPlugin: n._c,
      },
      l = [o, i, s]
    a.d(
      t,
      {},
      {
        ER: o,
        Kx: function ({ mentionPath: e, mentionDisplayName: t, plugins: a }) {
          return (
            l.find((n) =>
              (function ({ alias: e, mentionPath: t, mentionDisplayName: a, plugins: n }) {
                return a === e.label && n.some((a) => e.isMentionPlugin(a) && t === (0, r.vt)(a.plugin.id))
              })({ alias: n, mentionPath: e, mentionDisplayName: t, plugins: a }),
            )?.label ?? null
          )
        },
        Th: function (e, t) {
          return (
            t.bundleId === e.macBundleId ||
            e.windowsProcessAppIdPattern.test(t.bundleId) ||
            e.windowsOfficeAppIdPattern.test(t.bundleId) ||
            e.windowsOfficeDesktopAppIdPattern.test(t.bundleId) ||
            t.displayName === e.label ||
            t.displayName.trim().toLowerCase() === e.windowsProcessDisplayName
          )
        },
        dl: s,
        iZ: function (e, t) {
          return Math.max(t(e.label), t(e.shortName), t(`@${e.label}`), t(`@${e.shortName}`)) > 0
        },
        wq: i,
        xX: function ({ alias: e, plugin: t, description: a }) {
          return {
            kind: "plugin",
            name: e.label,
            displayName: e.label,
            path: (0, r.vt)(t.plugin.id),
            description: a,
            iconSmall: (0, r.kI)(t),
          }
        },
      },
    )
  },
  czj2(e, t, a) {
    var n = a("COSu"),
      r = a("tQpF"),
      o = a("axh8"),
      i = a("YWcr")
    function s(e, t) {
      return (0, i.GL)(e, t)
    }
    a.d(
      t,
      {},
      {
        PG: function (e, t) {
          let a = s(e, t)
          return (0, o.HP)(null, {
            iconSmall: a.iconSmall,
            basePath: a.path,
            fallbackName: a.name,
            fallbackDescription: a.description,
            fallbackIcon: n.A,
          })
        },
        ec: s,
        qF: function ({ connectorId: e, linkId: t, plugins: a }) {
          if (!e || !t) return
          let n = a.filter((a) => a.extensions?.searchMentionProviders.some((a) => a.appId === e && a.linkId === t))
          return 1 === n.length ? n[0] : void 0
        },
        sE: function ({ label: e, path: t, plugins: a }) {
          if (null != t && t.length > 0) {
            let e = (0, i.e3)(t)
            if (null == e) return
            let n = (0, r.Zh)(t),
              o = (0, r.sZ)(a, e, n)
            if (null != o) return o
            if (!e.endsWith("@dev-mode")) return
            let s = e.slice(0, -9)
            return (0, r.sZ)(a, `${s}@created-by-me-remote`, n)
          }
          let n = e.trim().toLowerCase()
          return a.find(
            (e) =>
              e.plugin.id.toLowerCase() === n ||
              e.plugin.name.toLowerCase() === n ||
              e.displayName?.toLowerCase() === n,
          )
        },
        zc: function (e) {
          return e.description ?? (e.marketplaceName || null)
        },
      },
    )
  },
  DcH0(e, t, a) {
    a.d(t, { _: () => s })
    var n = a("ABep"),
      r = a("QosV"),
      o = a("on57"),
      i = a("aqd9")
    function s(e) {
      let t,
        a,
        s,
        l,
        d,
        c,
        u = (0, r.c)(14)
      u[0] !== e
        ? (({ animate: s, variant: l, className: t, ...a } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = a),
          (u[3] = s),
          (u[4] = l))
        : ((t = u[1]), (a = u[2]), (s = u[3]), (l = u[4]))
      let p = void 0 === s || s,
        m = void 0 === l ? "default" : l,
        f = "solid" === m && "bg-surface-secondary",
        h = "prominent" === m && "bg-text/10",
        g = "prominent" === m && p && "motion-safe:animate-pulse"
      u[5] !== t || u[6] !== f || u[7] !== h || u[8] !== g
        ? ((d = (0, o.A)("Placeholder-GJXpwo", f, h, g, t)), (u[5] = t), (u[6] = f), (u[7] = h), (u[8] = g), (u[9] = d))
        : (d = u[9])
      let k = ("default" === m && !!p) || void 0
      return (
        u[10] !== a || u[11] !== d || u[12] !== k
          ? ((c = (0, n.jsx)("div", { ref: i.d, "data-loading-indicator": "", className: d, "data-animate": k, ...a })),
            (u[10] = a),
            (u[11] = d),
            (u[12] = k),
            (u[13] = c))
          : (c = u[13]),
        c
      )
    }
  },
  hEYZ(e, t, a) {
    var n = a("zTeN"),
      r = a("OWtl")
    let o = null,
      i = 0,
      s = new Set(),
      l = (0, n.SZ)(r.u, c, ({ set: e }) => (e(c()), d(() => e(c()))))
    function d(e) {
      return (
        s.add(e),
        () => {
          s.delete(e)
        }
      )
    }
    function c() {
      return i > 0
    }
    function u() {
      for (let e of s) e()
    }
    a.d(
      t,
      {},
      {
        Xf: function (e) {
          o?.(e)
        },
        Yv: c,
        o2: l,
        ou: function (e) {
          return (
            (o = e),
            () => {
              o === e && (o = null)
            }
          )
        },
        vb: d,
        yw: function (e) {
          if (!(e instanceof HTMLElement)) return !0
          let t = e.closest("[contenteditable]")
          return (
            !e.isContentEditable &&
            (null == t || "false" === t.getAttribute("contenteditable")) &&
            null ==
              e.closest(
                'input, textarea, select, [role="slider"], [role="spinbutton"], [role="combobox"], [role="listbox"], [role="grid"], [role="tree"], [role="tablist"], [role="menu"]',
              )
          )
        },
        zq: function () {
          let e = !0
          return (
            (i += 1),
            u(),
            () => {
              e && ((e = !1), (i = Math.max(0, i - 1)), u())
            }
          )
        },
      },
    )
  },
  AdZa(e, t, a) {
    var n = a("DBCl"),
      r = a("v7qY"),
      o = a("WFY2"),
      i = a("K7NS")
    let s = new Set()
    function l({
      source: e,
      destination: t,
      update: a,
      toolbar: c,
      kind: u = "open",
      reducedMotion: p,
      signal: m,
      variant: f = "viewer",
    }) {
      let h = e?.ownerDocument ?? document,
        g = 0 === s.size && !p && d(e)
      if ("function" != typeof h.startViewTransition || (!g && 0 === s.size)) return (a(), Promise.resolve())
      let k = (0, n.udX)(),
        w = null,
        y = null,
        v = () => {
          ;(s.delete(C),
            m?.removeEventListener("abort", P),
            g &&
              (e.classList.remove(i.A.image, i.A.departing),
              w?.classList.remove(i.A.image),
              c?.source?.classList.remove(i.A.toolbar),
              y?.classList.remove(i.A.toolbar),
              h.documentElement.classList.remove(i.A.active, i.A.opening, i.A.closing, i.A.promptDetails),
              h.documentElement.style.removeProperty("--image-preview-thumbnail-radius")))
        }
      g &&
        (e.classList.add(i.A.image),
        c?.source?.classList.add(i.A.toolbar),
        h.documentElement.classList.add(i.A.active),
        "promptDetails" === f && h.documentElement.classList.add(i.A.promptDetails),
        "edit" !== u && h.documentElement.classList.add("open" === u ? i.A.opening : i.A.closing))
      let b = h.startViewTransition(async () => {
          if (
            (g && (e.classList.remove(i.A.image), c?.source?.classList.remove(i.A.toolbar)), (0, r.flushSync)(a), g)
          ) {
            if (!d((w = await Promise.race([t(), k.promise])))) return void b.skipTransition()
            ;("promptDetails" === f && e !== w && e.classList.add(i.A.departing),
              w.classList.add(i.A.image),
              (y = c?.destination() ?? null),
              y?.classList.add(i.A.toolbar),
              "close" === u &&
                h.documentElement.style.setProperty(
                  "--image-preview-thumbnail-radius",
                  getComputedStyle(w).borderRadius,
                ))
          }
        }),
        P = () => {
          ;(k.resolve(null), b.skipTransition())
        }
      ;(m?.addEventListener("abort", P, { once: !0 }),
        (!g || m?.aborted) && P(),
        b.ready.catch(() => k.resolve(null)),
        b.updateCallbackDone.catch((e) => {
          o.v.error("Failed to update image presentation", { safe: {}, sensitive: { error: e } })
        }))
      let C = b.finished.then(v, v)
      return (s.add(C), C)
    }
    function d(e) {
      return e?.isConnected === !0 && e.complete && e.naturalWidth > 0
    }
    a.d(
      t,
      {},
      {
        Vy: function ({ source: e, reducedMotion: t, open: a, variant: r }) {
          let o = (0, n.udX)(),
            i = new AbortController()
          l({
            source: e,
            reducedMotion: t,
            variant: r,
            signal: i.signal,
            destination: () =>
              o?.promise.then(async (e) => {
                if (null == e) return null
                try {
                  return (await e.decode(), e)
                } catch {
                  return null
                }
              }) ?? null,
            update: () =>
              a((e) => {
                if ((o?.resolve(e), null != e))
                  return () => {
                    queueMicrotask(() => {
                      e.isConnected || i.abort()
                    })
                  }
              }),
          }).then(() => {
            o = null
          })
        },
        dl: l,
        ig: async function () {
          await Promise.all(s)
        },
        qU: function ({ image: e, thumbnail: t, reducedMotion: a, onClose: n, variant: r }) {
          if (null == t || !t.isConnected) return void n()
          let o = t.getBoundingClientRect(),
            i = t.ownerDocument.defaultView,
            s = Math.max(0, o.left),
            d = Math.max(0, o.top),
            c = Math.min(o.right, i?.innerWidth ?? o.right),
            u = Math.min(o.bottom, i?.innerHeight ?? o.bottom)
          if (c <= s || u <= d) return void n()
          for (let e = t.parentElement; null != e; e = e.parentElement) {
            let t = getComputedStyle(e),
              a = ["auto", "scroll", "hidden", "clip"].includes(t.overflowX),
              r = ["auto", "scroll", "hidden", "clip"].includes(t.overflowY)
            if (!a && !r) continue
            let o = e.getBoundingClientRect()
            if (
              (a && ((s = Math.max(s, o.left)), (c = Math.min(c, o.right))),
              r && ((d = Math.max(d, o.top)), (u = Math.min(u, o.bottom))),
              c <= s || u <= d)
            )
              return void n()
          }
          l({ source: e, kind: "close", reducedMotion: a, variant: r, destination: () => t, update: n })
        },
      },
    )
  },
  jxg1(e, t, a) {
    var n = a("ABep"),
      r = a("zd8w")
    let o = /(^|\s)(#[\da-fA-F]{6})(?!\w)/g,
      i = /\b(?:issue|pr)\W*$/i,
      s = /\bprs?\b/i,
      l = /^#\d{6}$/
    function d(e, t = "") {
      let a = [],
        n = s.test(`${t}${e}`)
      for (let r of e.matchAll(o)) {
        let o = r.index + r[1].length,
          s = r[2],
          d = `${t}${e.slice(0, o)}`
        ;(d.length > 0 && !/\s$/.test(d)) || i.test(d) || (n && l.test(s)) || a.push({ content: s, index: o })
      }
      return 0 === a.length ? null : a
    }
    function c({ content: e, key: t }) {
      return (0, n.jsx)(
        "span",
        {
          "aria-hidden": !0,
          className: "ms-1 inline-block size-3 rounded-[3px] border border-default align-[-0.08em]",
          "data-hex-color-swatch": e,
          style: { backgroundColor: e },
        },
        t,
      )
    }
    a.d(
      t,
      {},
      {
        $X: c,
        Ci: d,
        Zc: function ({ content: e, key: t }) {
          return (0, n.jsxs)(r.Fragment, { children: [e, c({ content: e })] }, t)
        },
        i7: function (e, t) {
          let a = d(e, t)?.[0]
          return a?.index === 0 && a.content.length === e.length
        },
      },
    )
  },
  TxRk(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      o = a("on57"),
      i = a("zd8w"),
      s = a("kvcJ")
    function l({ className: e, icon: t, iconSizing: a = "slot" }) {
      let n = (0, o.A)(s.A.Icon, "slot" === a && s.A.SlotSizedIcon, e)
      return (0, i.isValidElement)(t)
        ? (0, i.cloneElement)(t, { className: (0, o.A)(n, t.props.className) })
        : (0, i.createElement)(t, { className: n })
    }
    a.d(
      t,
      {},
      {
        OQ: l,
        hG: function ({ appearance: e, children: t }) {
          return "underlined-text" === e
            ? (0, i.cloneElement)(t, { className: (0, o.A)(t.props.className, s.A.UnderlinedText) })
            : t
        },
        q3: function (e) {
          let t,
            a,
            i,
            d,
            c,
            u,
            p,
            m,
            f,
            h,
            g,
            k,
            w,
            y,
            v,
            b,
            P,
            C,
            M,
            x,
            I,
            A,
            T,
            j = (0, r.c)(51)
          j[0] !== e
            ? (({
                className: i,
                children: a,
                appearance: g,
                brandColor: t,
                dataAttributes: d,
                fontWeight: k,
                icon: c,
                iconClassName: u,
                iconSizing: w,
                iconSlotProps: p,
                interactive: y,
                labelClassName: m,
                layout: v,
                style: h,
                tone: b,
                underlineOnHover: P,
                ...f
              } = e),
              (j[0] = e),
              (j[1] = t),
              (j[2] = a),
              (j[3] = i),
              (j[4] = d),
              (j[5] = c),
              (j[6] = u),
              (j[7] = p),
              (j[8] = m),
              (j[9] = f),
              (j[10] = h),
              (j[11] = g),
              (j[12] = k),
              (j[13] = w),
              (j[14] = y),
              (j[15] = v),
              (j[16] = b),
              (j[17] = P))
            : ((t = j[1]),
              (a = j[2]),
              (i = j[3]),
              (d = j[4]),
              (c = j[5]),
              (u = j[6]),
              (p = j[7]),
              (m = j[8]),
              (f = j[9]),
              (h = j[10]),
              (g = j[11]),
              (k = j[12]),
              (w = j[13]),
              (y = j[14]),
              (v = j[15]),
              (b = j[16]),
              (P = j[17]))
          let E = void 0 === g ? "inline-mention" : g,
            _ = void 0 === k ? "medium" : k,
            N = void 0 === w ? "slot" : w,
            D = void 0 !== y && y,
            S = void 0 === v ? "inline-flow" : v,
            q = void 0 === b ? "accent" : b,
            O = void 0 === P ? D : P,
            W = "thumbnail" === S && "inline-flex px-1 py-0 align-middle"
          j[18] !== i || j[19] !== W
            ? ((C = (0, o.A)(s.A.Mention, W, i)), (j[18] = i), (j[19] = W), (j[20] = C))
            : (C = j[20])
          let L = null == t ? void 0 : "",
            R = D ? "" : void 0,
            H = D ? "" : void 0,
            F = O ? "" : void 0
          ;(j[21] !== t || j[22] !== h
            ? ((M = (function ({ brandColor: e, style: t }) {
                return null == e && t?.color == null
                  ? t
                  : { ...t, color: void 0, "--inline-mention-base-color": e, "--inline-mention-color": t?.color }
              })({ brandColor: t, style: h })),
              (j[21] = t),
              (j[22] = h),
              (j[23] = M))
            : (M = j[23]),
            j[24] !== c || j[25] !== u || j[26] !== N || j[27] !== p || j[28] !== S
              ? ((x =
                  null == c
                    ? null
                    : (0, n.jsx)("span", {
                        ...p,
                        className: (0, o.A)(
                          s.A.IconContainer,
                          "slot" === N && "thumbnail" !== S && s.A.SlotSizedIconContainer,
                          "thumbnail" === S && "inline-flex size-8 overflow-hidden rounded-full",
                        ),
                        children: (0, n.jsx)(l, { className: u, icon: c, iconSizing: N }),
                      })),
                (j[24] = c),
                (j[25] = u),
                (j[26] = N),
                (j[27] = p),
                (j[28] = S),
                (j[29] = x))
              : (x = j[29]))
          let z = "thumbnail" === S && "hidden"
          return (
            j[30] !== m || j[31] !== z
              ? ((I = (0, o.A)(s.A.Label, z, m)), (j[30] = m), (j[31] = z), (j[32] = I))
              : (I = j[32]),
            j[33] !== a || j[34] !== I
              ? ((A = (0, n.jsx)("span", { className: I, children: a })), (j[33] = a), (j[34] = I), (j[35] = A))
              : (A = j[35]),
            j[36] !== E ||
            j[37] !== d ||
            j[38] !== _ ||
            j[39] !== S ||
            j[40] !== f ||
            j[41] !== L ||
            j[42] !== R ||
            j[43] !== H ||
            j[44] !== F ||
            j[45] !== M ||
            j[46] !== x ||
            j[47] !== A ||
            j[48] !== C ||
            j[49] !== q
              ? ((T = (0, n.jsxs)("span", {
                  ...f,
                  ...d,
                  className: C,
                  "data-appearance": E,
                  "data-brand-color": L,
                  "data-font-weight": _,
                  "data-layout": S,
                  "data-interactive": R,
                  "data-inline-mention-interactive": H,
                  "data-tone": q,
                  "data-underline-on-hover": F,
                  style: M,
                  children: [x, A],
                })),
                (j[36] = E),
                (j[37] = d),
                (j[38] = _),
                (j[39] = S),
                (j[40] = f),
                (j[41] = L),
                (j[42] = R),
                (j[43] = H),
                (j[44] = F),
                (j[45] = M),
                (j[46] = x),
                (j[47] = A),
                (j[48] = C),
                (j[49] = q),
                (j[50] = T))
              : (T = j[50]),
            T
          )
        },
        vt: function (e) {
          let t,
            a = (0, r.c)(2),
            { children: o } = e
          return (
            a[0] !== o
              ? ((t = (0, n.jsx)("span", { className: s.A.Text, children: o })), (a[0] = o), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
      },
    )
  },
  jG6n(e, t, a) {
    var n = a("zTeN"),
      r = a("ASxG"),
      o = a("W0tK"),
      i = a("fXhT"),
      s = a("OWtl"),
      l = a("J9bg"),
      d = a("Kw4a")
    let c = ["to-do-list", "project-tracker"],
      u = (0, n.un)(s.u, ({ get: e }) => (e(d.wu) ? e(l.S, "4051280260") : void 0)),
      p = (0, n.un)(s.u, ({ get: e }) => (e(d.ou) ? e(l.S, "4051280260") : void 0)),
      m = r.object({
        submitLabel: r.string().trim().min(1).optional(),
        preparingLabel: r.string().trim().min(1).optional(),
        freeformPlaceholder: r.string().trim().min(1).optional(),
        questions: r
          .array(
            r.object({
              question: r.string().trim().min(1),
              answerLabel: r.string().trim().min(1),
              isOther: r.boolean().optional(),
              options: r
                .array(r.object({ id: r.string().trim().min(1), value: r.string().trim().min(1) }))
                .refine(
                  (e) => new Set(e.map(({ id: e }) => e)).size === e.length,
                  "Each option ID in a question must be unique",
                ),
            }),
          )
          .min(1),
      }),
      f = r.object({
        id: r.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: r.string().trim().min(1),
        prompt: r.string().trim().min(1),
        prefillPrompt: r.string().trim().min(1),
        previewMarkdown: r.string().trim().min(1).optional(),
        previewDocument: r
          .array(r.object({ kind: r.literal("markdown"), markdown: r.string().trim().min(1), layout: i.wS.optional() }))
          .min(1)
          .optional(),
        setupQuestion: r.string().trim().min(1).nullish(),
        followUp: m.nullish(),
      }),
      h = r.array(f.partial({ title: !0, prompt: !0, prefillPrompt: !0, previewMarkdown: !0 })),
      g = r
        .array(r.string())
        .min(4)
        .max(10)
        .refine((e) => new Set(e).size === e.length && c.every((t) => e.includes(t))),
      k = r.object({
        templates: h.optional(),
        templatesByLocale: r.record(r.string().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/), h).optional(),
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
          let n = (0, o.bW)(e) ?? "en",
            r = n.split("-")[0],
            i =
              a.data.templatesByLocale?.[n] ?? a.data.templatesByLocale?.[r] ?? ("en" === r ? a.data.templates : void 0)
          if (null != i && new Set(i.map(({ id: e }) => e)).size === i.length) return i
        },
        WN: p,
        ql: u,
        xN: h,
        z4: f,
      },
    )
  },
  dUuO(e, t, a) {
    var n = a("bRXx"),
      r = a("Qgfj"),
      o = a("jG6n")
    let i = o.z4.required({ previewDocument: !0 }).array()
    function s(e) {
      let t = e.flatMap((e) => (0, n.CyG)(e.markdown).map((t) => ({ ...e, markdown: t })))
      return { previewMarkdown: t.map(({ markdown: e }) => e).join("\n\n"), previewDocument: t }
    }
    let l = (0, r.YK)({
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
          let n = { kind: "icon", value: "book", color: "black" },
            r = [
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
                symbol: n,
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
                symbol: n,
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
                symbol: n,
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
            d = () =>
              r
                .filter(({ id: e }) => "project-home" !== e && "faq" !== e)
                .map((e) => ({ ...e, ...s(e.previewDocument) }))
          if (null == a) return d()
          let c = i.safeParse(
            a.map((t) => {
              let a = r.find(({ id: e }) => e === t.id),
                n = null == t.prompt ? a?.setupQuestion : void 0,
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
                setupQuestion: void 0 !== t.setupQuestion ? t.setupQuestion : n,
              }
            }),
          )
          return c.success
            ? c.data.map((e) => ({
                ...e,
                symbol: r.find(({ id: t }) => t === e.id)?.symbol ?? n,
                ...s(e.previewDocument),
              }))
            : d()
        },
      },
    )
  },
  o72y(e, t, a) {
    var n = a("zTeN"),
      r = a("DBCl"),
      o = a("SPnB"),
      i = a("eFn4"),
      s = a("Ghh3"),
      l = a("e1xH"),
      d = a("pyoT"),
      c = a("OWtl"),
      u = a("JYRT")
    let p = (0, n.un)(c.u, ({ get: e }) => e(l.pagesEnabled$) && "allowed" === e(i.lN).status),
      m = (0, n.RD)(c.u, ({ get: e, scope: t }) => {
        let a = e(d.spaceAccountId$),
          n = e(o.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["space", "personalized-pages", a, n],
          enabled: e(p) && null != a && null != n,
          staleTime: 6e4,
          gcTime: 0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == a || null == n) throw Error("space_account_unavailable")
            let o = (0, d.watchSpaceAccount)(t, a, n),
              i = AbortSignal.any([e, o.signal])
            try {
              let e = await s.Request.safeGet("/pages/suggestions", {
                additionalHeaders: { "ChatGPT-Account-ID": a, [r.zBc]: a },
                signal: i,
              })
              return (i.throwIfAborted(), e)
            } finally {
              o.stop()
            }
          },
        }
      }),
      f = (0, n.A4)(
        c.u,
        (e) => Date.parse(e) > Date.now(),
        (e, { set: t }) => {
          let a,
            n = () => {
              let r = Date.parse(e) - Date.now()
              ;(t(r > 0), r > 0 && (a = setTimeout(n, Math.min(r, 0x7fffffff))))
            }
          return (n(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      h = (0, n.i1)(c.u, (e, { get: t }) => {
        if (!t(p)) return
        let a = t(u.X, "3798925676")
        if (a?.value["getting-started" === e ? "show_in_getting_started" : "show_in_template_modal"] !== !0) return
        let n = t(m)
        return n.isSuccess ? n.data.suggestions.filter((e) => t(f, e.expires_at)).slice(0, 3) : void 0
      }),
      g = (0, n.un)(
        c.u,
        ({ get: e }) => e(p) && e(u.X, "3798925676")?.value.show_in_template_modal === !0 && e(m).isLoading,
      )
    a.d(t, {}, { BE: g, fH: p, ps: m, x5: h })
  },
  e7M0(e, t, a) {
    var n = a("SPnB"),
      r = a("svjy"),
      o = a("kpIY"),
      i = a("e1xH"),
      s = a("QftW"),
      l = a("pyoT"),
      d = a("vHxi"),
      c = a("nndI"),
      u = a("SCmN"),
      p = a("Kw4a"),
      m = a("v5SL"),
      f = a("pyo2")
    function h(e, t) {
      let a = e.get(n.chatGptAuthenticatedUserId$)
      null != a && !0 === e.get(f.vF) && null == e.get(m.Q6)[JSON.stringify([t, a])] && (0, m.al)(e, t, a)
    }
    a.d(
      t,
      {},
      {
        provisionSpaceWelcomePage: async function (e) {
          if (!e.get(p.vy)) return
          let t = e.get(l.spaceAccountId$)
          ;(null != t && h(e, t), await e.when(({ get: e }) => null != e(l.spaceAccountId$) || !e(p.vy)))
          let a = e.get(l.spaceAccountId$)
          if (null == a || !e.get(p.vy)) return
          ;(h(e, a), await e.when(({ get: e }) => null != e(u.jm) || e(l.spaceAccountId$) !== a || !e(p.vy)))
          let n = e.get(u.jm)
          if (
            n?.accountId !== a ||
            ((0, o.EG)(m.ON, { entries: { [n.key]: { value: e.get(m.aj)[n.key] ?? Date.now() } }, maxEntries: 100 }),
            await e.when(
              ({ get: e }) => null != e(m.Q6)[n.key] || e(u.jm)?.key !== n.key || !e(p.vy) || null != e(f.vF),
            ),
            e.get(u.jm)?.key !== n.key || !e.get(p.vy)) ||
            (h(e, a), !e.get(f.aQ).includes("welcome"))
          )
            return
          let g = e.get(c.ax)[n.key],
            k = await (0, d.h)(e, e.get(r.g), g ?? null)
          null != k &&
            e.get(u.jm)?.key === n.key &&
            e.get(f.aQ).includes("welcome") &&
            e.get(i.wr) &&
            e.query.getOrFetch(s.ab, k).catch(() => {})
        },
      },
    )
  },
  i1Zq(e, t, a) {
    var n = a("QBk8"),
      r = a("zTeN"),
      o = a("PFjh"),
      i = a("Ghh3"),
      s = a("yGJW"),
      l = a("OWtl"),
      d = a("eShZ"),
      c = a("OoIX"),
      u = a("pyoT"),
      p = a("WF9u"),
      m = a("nndI"),
      f = a("SCmN"),
      h = a("Kw4a"),
      g = a("pyo2"),
      k = a("JkZJ")
    let w = (0, r.bD)(l.u, (e) => "idle")
    a.d(
      t,
      {},
      {
        J: w,
        m: async function (e, t, a = !1, l = "onboarding", y) {
          let v = e.get(f.jm)
          if (a && null != v && ("creating" === e.get(w, v.key) || e.get(f.av, v.key)))
            throw Error("Welcome Page is busy; retry reset after it finishes")
          let b = null == v ? void 0 : e.get(m.ax)[v.key]
          if (
            null == v ||
            ("onboarding" === l && !a && !e.get(g.aQ).includes("welcome")) ||
            (!a && null != b) ||
            "creating" === e.get(w, v.key)
          )
            return
          let P = (0, u.watchSpaceAccount)(e, v.accountId, v.userId),
            C = new AbortController(),
            M = e.watch(({ get: e }) => {
              "onboarding" !== l || e(h.vy) || C.abort()
            }),
            x = AbortSignal.any([P.signal, C.signal]),
            I = e.get(o.T$)
          ;(I.count("codex_pages", "welcome_creation", { outcome: "failed" === e.get(w, v.key) ? "retry" : "started" }),
            e.set(w, v.key, "creating"),
            a && e.set(f.Dj, v.key, "unknown"))
          let A = e.get(m.bs)[v.key],
            T = y ?? e.get(m.DF)[v.key] ?? A?.idempotency_key ?? m.qu
          ;(A?.idempotency_key !== T && (A = void 0), null == A && null == y && (T = (0, m.t8)(T)))
          try {
            ;(null == A || a) && (0, c.Jx)(e)
            let o = () => {
              A?.idempotency_key !== T &&
                ((0, c.Jx)(e),
                (A = {
                  idempotency_key: T,
                  destination: "personal_file_drive",
                  title: (0, k.eg)(t),
                  initial_blocks: (0, k.gt)(t, p.rZ),
                  parent_page_id: null,
                }))
              let o = A
              return e.get(u.createSpacePageMutation$).mutateAsync({
                source: n.CodexSpacesSource.CODEX_SPACES_SOURCE_WELCOME,
                accountId: v.accountId,
                requestBody: o,
                assertRequestCurrent: () => {
                  ;(x.throwIfAborted(),
                    e.get(m.bs)[v.key]?.idempotency_key !== o.idempotency_key && (0, c.Jx)(e),
                    (0, r.Y)(e, (e) => {
                      ;(e.set(m.DF, (e) => ({ ...e, [v.key]: T })), e.set(m.bs, (e) => ({ ...e, [v.key]: o })))
                    }))
                },
                signal: x,
                isExpectedError: (e) =>
                  !a &&
                  !T.startsWith("space-welcome-readable:") &&
                  ((403 === e.status && "page_read_forbidden" === e.errorCode) ||
                    (404 === e.status && "page_not_found" === e.errorCode)),
              })
            }
            if (a) {
              let t = b,
                a = !1
              try {
                ;((t = t ?? (await o()).metadata.page_id), x.throwIfAborted())
                try {
                  ;(await i.Request.safePost("/pages/{page_id}/delete", {
                    parameters: { path: { page_id: t } },
                    signal: x,
                    isExpectedError: (e) =>
                      (403 === e.status && "page_write_forbidden" === e.errorCode) ||
                      (410 === e.status && "page_deleted" === e.errorCode),
                  }),
                    (a = !0))
                } catch (e) {
                  ;(x.throwIfAborted(), (a = e instanceof d.fk && 410 === e.status && "page_deleted" === e.errorCode))
                }
              } catch (e) {
                if (!(e instanceof d.fk) || 410 !== e.status || "page_deleted" !== e.errorCode) throw e
                a = !0
              }
              ;(x.throwIfAborted(),
                (T = m.qu + ":reset:" + (t ?? crypto.randomUUID())),
                (0, r.Y)(e, (e) => {
                  ;(e.set(m.DF, (e) => ({ ...e, [v.key]: T })), (0, f.YB)(e, v.key))
                }),
                a && null != t && (0, u.evictCachedSpacePages)(e, [t], v.accountId, { unavailablePageIds: [t] }))
            }
            let s = await o().catch(async (t) => {
              if (
                !a &&
                t instanceof d.fk &&
                ((403 === t.status && "page_read_forbidden" === t.errorCode) ||
                  (404 === t.status && "page_not_found" === t.errorCode)) &&
                !T.startsWith("space-welcome-readable:")
              )
                return (
                  x.throwIfAborted(),
                  (T = "space-welcome-readable:" + T),
                  e.set(m.DF, (e) => ({ ...e, [v.key]: T })),
                  o()
                )
              if (!a || !(t instanceof d.fk) || 410 !== t.status || "page_deleted" !== t.errorCode) throw t
              return (
                x.throwIfAborted(),
                (T = m.qu + ":reset:" + crypto.randomUUID()),
                e.set(m.DF, (e) => ({ ...e, [v.key]: T })),
                o()
              )
            })
            if ((x.throwIfAborted(), (0, m.gC)(e, v.key, s.metadata.page_id), null == s.content))
              throw Error("Welcome Page content could not be read")
            ;((0, u.cacheCreatedSpacePage)(e, v.accountId, s),
              (0, r.Y)(e, (e) => {
                ;(e.set(f.Dj, v.key, "available"),
                  e.set(m.ax, (e) => ({ ...e, [v.key]: s.metadata.page_id })),
                  e.set(w, v.key, "idle"))
              }),
              I.count("codex_pages", "welcome_creation", { outcome: "bound" }))
          } catch (o) {
            let t = !a && !x.aborted && o instanceof d.fk && "page_deleted" === o.errorCode
            ;(t
              ? (0, g.$V)(e, "welcome")
              : x.aborted ||
                (e.set(f.Dj, v.key, "failed"),
                (0, s.yy)(e, n.CodexSpacesOnboarding, {
                  action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                  item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                  pageId: e.get(m.FZ)[v.key],
                  failureOperation:
                    n.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_CREATE,
                })),
              e.set(w, v.key, x.aborted || t ? "idle" : "failed"))
            let r = t ? "deleted" : "failed"
            if (
              (x.aborted && (r = "cancelled"),
              I.count("codex_pages", "welcome_creation", { outcome: r }),
              a || "legacy" === l)
            )
              throw o
          } finally {
            ;(M(), P.stop())
          }
        },
      },
    )
  },
  vHxi(e, t, a) {
    var n = a("QBk8"),
      r = a("zTeN"),
      o = a("E8Sp"),
      i = a("SGsN"),
      s = a("e1xH"),
      l = a("yGJW"),
      d = a("WFY2"),
      c = a("eShZ"),
      u = a("pyoT"),
      p = a("Kw4a"),
      m = a("i1Zq"),
      f = a("pyo2"),
      h = a("JkZJ"),
      g = a("nndI"),
      k = a("SCmN"),
      w = a("WP5H")
    async function y(e, t, a, { showErrorToast: o = !1 } = {}) {
      let d = e.get(k.jm)
      if (
        !e.get(s.pagesEnabled$) ||
        null == d ||
        e.get(k.av, d.key) ||
        ("creating" === e.get(m.J, d.key) && (null != a || null != e.get(g.ax)[d.key]))
      )
        return null
      let h = e.get(p.vy),
        w = (0, u.watchSpaceAccount)(e, d.accountId, d.userId)
      e.set(k.av, d.key, !0)
      let v = e.get(k.Ev),
        b = e.get(g.ax)[d.key],
        P = a ?? b ?? (v?.identityKey === d.key ? v.pageId : null)
      try {
        if (
          null == P &&
          (await (0, m.m)(e, t, !1, h ? "onboarding" : "legacy"),
          await e.when(({ get: e }) => e(k.jm)?.key !== d.key || "creating" !== e(m.J, d.key)),
          w.signal.throwIfAborted(),
          (P = e.get(g.ax)[d.key] ?? null),
          null == P)
        )
          return null
        ;((v?.identityKey !== d.key || v.pageId !== P) &&
          e.set(k.Ev, { identityKey: d.key, pageId: P, awaitingPaint: !1 }),
          e.get(k.oA, d.key).visible && e.set(k.oA, d.key, { visible: !0, pageId: P }))
        try {
          await e.query.fetch(u.spacePageQuery$, P)
        } catch (o) {
          w.signal.throwIfAborted()
          let a = e.get(g.DF)[d.key] ?? e.get(g.bs)[d.key]?.idempotency_key,
            n = a ?? g.qu
          if (
            !h ||
            !e.get(p.vy) ||
            !e.get(f.aQ).includes("welcome") ||
            P !== b ||
            !(o instanceof c.fk) ||
            ((403 !== o.status || "page_read_forbidden" !== o.errorCode) &&
              (404 !== o.status || ("page_not_found" !== o.errorCode && "page_trashed" !== o.errorCode))) ||
            (404 !== o.status && n.startsWith("space-welcome-readable:"))
          )
            throw o
          if (404 === o.status && null == a)
            return (
              (0, r.Y)(e, (e) => {
                ;((0, f.$V)(e, "welcome"), e.set(k.Dj, d.key, "failed"), e.set(k.Ev, null))
              }),
              null
            )
          if (
            ((0, r.Y)(e, (e) => {
              ;(404 !== o.status && e.set(g.DF, (e) => ({ ...e, [d.key]: "space-welcome-readable:" + n })),
                (0, k.YB)(e, d.key))
            }),
            await (0, m.m)(e, t, !1, "onboarding", 404 === o.status ? n : void 0),
            w.signal.throwIfAborted(),
            (P = e.get(g.ax)[d.key] ?? null),
            null == P)
          )
            return null
          ;(e.set(k.Ev, { identityKey: d.key, pageId: P, awaitingPaint: !1 }),
            await e.query.fetch(u.spacePageQuery$, P))
        }
        return (
          w.signal.throwIfAborted(),
          h && e.get(p.vy) && e.get(g.ax)[d.key] === P && (0, g.gC)(e, d.key, P),
          e.set(g.ax, (e) => ({ ...e, [d.key]: P })),
          e.set(k.Dj, d.key, "available"),
          P
        )
      } catch (a) {
        if (!w.signal.aborted) {
          if (h && a instanceof c.fk && "page_deleted" === a.errorCode)
            return ((0, f.$V)(e, "welcome"), e.set(k.Ev, null), null)
          if (
            (h &&
              e.get(p.vy) &&
              (0, l.yy)(e, n.CodexSpacesOnboarding, {
                action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                pageId: P ?? void 0,
                failureOperation:
                  n.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_OPEN,
              }),
            e.set(k.Dj, d.key, "failed"),
            !o)
          )
            return null
          e.get(i.Id).danger(
            t.formatMessage({
              id: "space.gettingStartedPages.openError",
              defaultMessage: "Could not open the Getting Started Page. Try again.",
              description:
                "Error when creating or opening the Getting Started Page fails; the welcome card remains available to retry",
            }),
            { errorAnalytics: { toastId: "space.gettingStartedPages.openError" } },
          )
        }
        return null
      } finally {
        ;(w.stop(), e.set(k.av, d.key, !1))
      }
    }
    a.d(
      t,
      {},
      {
        a: async function (e, t, a, n) {
          let r = e.get(k.jm),
            i = n ?? e.get(k.i$, (0, h.eg)(a)),
            { pathname: s, search: l } = e.get(o.gM)
          if (null == r || null == i) return
          let c = await y(e, a, i.pageId, { showErrorToast: !0 })
          if (
            null == c ||
            e.get(k.jm)?.key !== r.key ||
            e.get(o.gM).pathname !== s ||
            e.get(o.gM).search !== l ||
            n?.isCurrent?.() === !1
          )
            return
          let u = e.get(k.Ev)
          ;(n?.onOpenPage != null
            ? n.onOpenPage(c)
            : await t(`/space/${c}`, { state: { spaceSidebarAccountId: r.accountId, spaceSidebarPersonal: !0 } }),
            null != u && e.get(k.Ev) === u && e.get(k.jm)?.key === r.key && e.set(k.Ev, { ...u, awaitingPaint: !0 }),
            (0, w.Q)(e, c, () => e.get(k.jm)?.key === r.key && e.get(g.ax)[r.key] === c).catch(() => {
              d.v.warning("Failed to save the Welcome Page's default icon")
            }))
        },
        h: y,
      },
    )
  },
  WP5H(e, t, a) {
    var n = a("bRXx")
    let r = { kind: "icon", value: "graduation-cap", color: "blue" }
    a.d(
      t,
      {},
      {
        Q: async function (e, t, o) {
          let { withPageMenuSession: i } = await Promise.all([a.e(753405), a.e(218787), a.e(6735), a.e(696952)]).then(
            a.bind(a, "tKju"),
          )
          o() &&
            (await i(e, t, "write", async (e) => {
              o() &&
                null == e.getSymbol() &&
                null == (0, n.OdJ)(e.document.getText("title").toJSON()).emoji &&
                e.mutateDocument((e) => (0, n.UYY)(e, r)) &&
                (await e.flush({ scope: "current", timeoutMs: null }))
            }))
        },
        x: r,
      },
    )
  },
  BA9i(e, t, a) {
    let n = "spreadsheets",
      r = "presentations",
      o = "documents",
      i = "openai-primary-runtime"
    function s(e, t) {
      return e.plugin.name === t && e.marketplaceName === i && e.plugin.id === `${t}@${i}`
    }
    a.d(
      t,
      {},
      {
        Bz: n,
        HZ: r,
        J4: "1288674243",
        V0: function (e) {
          return s(e, n)
        },
        _c: function (e) {
          return s(e, o)
        },
        ho: function (e) {
          return s(e, r)
        },
        kV: o,
        tN: "1623794951",
      },
    )
  },
  TNqT(e, t, a) {
    var n = a("Rxfy"),
      r = a("zTeN"),
      o = a("HJEB"),
      i = a("ldD6"),
      s = a("ASxG"),
      l = a("OiCI"),
      d = a("SPnB"),
      c = a("Ghh3"),
      u = a("WzdM"),
      p = a("OWtl"),
      m = a("zgGI"),
      f = a("rvFo"),
      h = a("GDNt"),
      g = a("ygu7"),
      k = a("EEop")
    let w = "artifact-template-",
      y = s.object({
        schemaVersion: s.literal(1),
        kind: s.literal("presentation"),
        nativePresentation: s.object({ schemaVersion: s.literal(1), reference: s.string() }),
      }),
      v = (0, r.RD)(p.u, ({ get: e, scope: t }) => {
        let a = e(l.tT),
          r = e(d.o8)
        return {
          queryKey: ["native-presentation-templates", a, r],
          enabled: null != a && null != r,
          staleTime: f.D.FIVE_MINUTES,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            b(t, a, r, e)
            let { plugin_id: s } = await t.query.fetch(g.b4, {
              appId: "connector_openai_default_templates",
              productContext: "chatgpt",
            })
            if ((b(t, a, r, e), null == s)) return []
            let { plugin: l } = await t.queryClient.fetchQuery((0, k.K0)(a, s, e, "chatgpt"))
            b(t, a, r, e)
            let { id: d, version: c } = l.release
            return "ENABLED" !== l.status ||
              null != l.disabled_reason ||
              null == d ||
              null == c ||
              !(0, i.D)(c) ||
              0 > (0, i.r)(c, "0.1.2")
              ? []
              : (l.release.skills ?? []).flatMap((e) => {
                  let t = e.interface?.icon_large_url
                  return e.name.startsWith(w) && "presentation" === (0, n.Ru)(e.description) && t
                    ? [
                        {
                          id: e.name.slice(w.length),
                          title: e.interface?.display_name || (0, o.l)(e.name.slice(w.length)),
                          thumbnail: t,
                          pluginId: s,
                          releaseId: d,
                          skillName: e.name,
                          skillId: e.plugin_release_skill_id,
                        },
                      ]
                    : []
                })
          },
        }
      })
    function b(e, t, a, n) {
      if ((n.throwIfAborted(), null == t || null == a || e.get(l.tT) !== t || e.get(d.o8) !== a))
        throw Error("Template account changed")
    }
    a.d(
      t,
      {},
      {
        G: async function (e, t, n) {
          let r = e.get(l.tT),
            o = e.get(d.o8)
          if (null == r || null == o) throw Error("Template account unavailable")
          let i = await e.queryClient.fetchQuery({
            queryKey: ["plugins", "skill-download", r, o, t.skillId],
            staleTime: f.D.ONE_MINUTE,
            retry: !1,
            queryFn: () =>
              c.Request.safeGet("/ps/plugins/{plugin_id}/skills/{skill_name}", {
                parameters: {
                  path: { plugin_id: t.pluginId, skill_name: t.skillName },
                  query: { includeDownloadUrls: !0 },
                },
                additionalHeaders: { ...(0, u.A)("chatgpt"), "ChatGPT-Account-Id": r },
                signal: n,
                expectedErrorStatuses: [401, 403, 404],
              }),
          })
          if ((b(e, r, o, n), i.plugin_release_id !== t.releaseId || i.plugin_release_skill_id !== t.skillId))
            throw (e.query.invalidate(v), Error("Template release changed"))
          if ("ENABLED" !== i.status || null == i.skill_bundle_download_url) throw Error("Template unavailable")
          let s = await h._n.getInstance().fetch(i.skill_bundle_download_url, { signal: n }),
            p = await (0, m.A)(s, 0x6400000, n),
            g = await (0, m.A)(new Response(p.stream().pipeThrough(new DecompressionStream("gzip"))), 0x6400000, n),
            { parseTar: k } = await a.e(13996).then(a.bind(a, "zXE4")),
            w = k(await g.arrayBuffer(), { filter: (e) => "file" === e.type }),
            P = w.find((e) => "artifact-template.json" === e.name)
          if (null == P || P.size > 65536) throw Error("Native template manifest unavailable")
          let { nativePresentation: C } = y.parse(JSON.parse(P.text)),
            M = w.find((e) => e.name === C.reference)?.data
          if ((b(e, r, o, n), !M?.byteLength)) throw Error("Native template unavailable")
          return Uint8Array.from(M)
        },
        R: v,
      },
    )
  },
  J9bg(e, t, a) {
    var n = a("D7Ms"),
      r = a("zTeN"),
      o = a("OWtl"),
      i = a("EWIu"),
      s = a("JYRT"),
      l = a("OMIV")
    let d = (0, r.vU)(o.u, (e, { get: t }) => {
        let a = t(l.M9),
          r = t(s.X, e)
        return {
          queryKey: ["deferred-statsig-config", e, a?.getContext().user, r?.__evaluation],
          queryFn: null == a ? n.hT : () => (0, i.d1)(a, e),
          staleTime: 1 / 0,
          retry: 2,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          refetchOnReconnect: !0,
        }
      }),
      c = (0, r.i1)(o.u, (e, { get: t }) => {
        let a = t(l.M9),
          n = t(s.X, e)
        return (0, i.tA)(a, e) ? t(d, e).data : n
      })
    a.d(t, {}, { S: c })
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
}
//# sourceMappingURL=968072.72cdd985ca.js.map
