export const __rspack_esm_ids = [249533]
export const __webpack_modules__ = {
  qj8A(e, l, n) {
    var t = n("ABep")
    ;(n("zd8w"),
      (l.A = (e) =>
        (0, t.jsxs)("svg", {
          width: 18,
          height: 18,
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, t.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.6673 9.45374C13.7358 9.45407 14.5577 10.3579 14.5579 11.4156V11.8239C15.1086 11.929 15.5247 12.4134 15.5247 12.9948V15.0504C15.5245 15.7084 14.9913 16.2418 14.3333 16.2418H11.0003C10.3423 16.2418 9.8081 15.7084 9.80789 15.0504V12.9948C9.80789 12.4134 10.2248 11.9291 10.7757 11.8239V11.4156C10.7759 10.3577 11.5984 9.45374 12.6673 9.45374ZM11.0003 12.8531C10.9221 12.8532 10.8587 12.9165 10.8587 12.9948V15.0504C10.8589 15.1285 10.9222 15.192 11.0003 15.192H14.3333C14.4114 15.192 14.4747 15.1285 14.4749 15.0504V12.9948C14.4749 12.9165 14.4115 12.8531 14.3333 12.8531H11.0003ZM12.6673 10.5045C12.2277 10.5045 11.8267 10.887 11.8264 11.4156V11.8024H13.5081V11.4156C13.5079 10.8873 13.1066 10.5049 12.6673 10.5045Z",
              fill: "currentColor",
            }),
            (0, t.jsx)("path", {
              d: "M8.2659 9.84534C8.55342 9.80818 8.81657 10.011 8.85379 10.2985C8.89088 10.5859 8.68813 10.8491 8.40067 10.8864C6.26147 11.1628 4.57997 12.9025 4.39188 15.068C4.36673 15.3568 4.11136 15.5706 3.82254 15.5455C3.53398 15.5202 3.32001 15.2658 3.345 14.9772C3.57594 12.3179 5.63935 10.1848 8.2659 9.84534Z",
              fill: "currentColor",
            }),
            (0, t.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.00028 2.31116C10.757 2.3113 12.1809 3.73602 12.1809 5.4928C12.1809 7.2495 10.757 8.67332 9.00028 8.67346C7.24346 8.67346 5.81872 7.24959 5.81863 5.4928C5.81863 3.73593 7.24341 2.31116 9.00028 2.31116ZM9.00028 3.36194C7.82331 3.36194 6.86942 4.31583 6.86942 5.4928C6.8695 6.66969 7.82336 7.62366 9.00028 7.62366C10.1771 7.62351 11.131 6.6696 11.1311 5.4928C11.1311 4.31592 10.1771 3.36208 9.00028 3.36194Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  m17G(e, l, n) {
    var t = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      a = n("Sm6l"),
      r = n("Ot7V")
    function o(e) {
      return (0, t.jsxs)(
        "p",
        { children: [e.title && (0, t.jsxs)("strong", { children: [e.title, " "] }), c(e.description, "consent")] },
        `${e.id}-${e.description}`,
      )
    }
    function d(e) {
      let l,
        n,
        i = (0, s.c)(8),
        { children: a, href: o, onActivate: d, variant: c } = e,
        u =
          "consent" === (void 0 === c ? "consent" : c)
            ? "cursor-interaction font-semibold text-inherit! no-underline hover:underline focus-visible:underline"
            : "underline underline-offset-2"
      return (
        i[0] !== o || i[1] !== d
          ? ((l = (e) => {
              ;((0, r.PQ)({ event: e, href: o, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                d?.())
            }),
            (i[0] = o),
            (i[1] = d),
            (i[2] = l))
          : (l = i[2]),
        i[3] !== a || i[4] !== o || i[5] !== u || i[6] !== l
          ? ((n = (0, t.jsx)("a", {
              className: u,
              href: o,
              target: "_blank",
              rel: "noreferrer",
              onClick: l,
              children: a,
            })),
            (i[3] = a),
            (i[4] = o),
            (i[5] = u),
            (i[6] = l),
            (i[7] = n))
          : (n = i[7]),
        n
      )
    }
    function c(e, l) {
      let n = [],
        s = 0
      for (let i of e.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
        let [a, r, o] = i,
          { index: c } = i,
          u = o.trim()
        ;(n.push(e.slice(s, c), u ? (0, t.jsx)(d, { href: u, variant: l, children: r }, c) : r), (s = c + a.length))
      }
      return [...n, e.slice(s)]
    }
    n.d(
      l,
      {},
      {
        RZ: function (e) {
          let l,
            n,
            i = (0, s.c)(12),
            { blurbs: a, variant: r } = e
          if ("consent" === r) {
            let e, l
            return (
              i[0] !== a ? ((e = a.map(o)), (i[0] = a), (i[1] = e)) : (e = i[1]),
              i[2] !== e
                ? ((l = (0, t.jsx)("div", {
                    className: "flex flex-col gap-4 px-4 text-start text-xs leading-4 text-tertiary select-text",
                    children: e,
                  })),
                  (i[2] = e),
                  (i[3] = l))
                : (l = i[3]),
              l
            )
          }
          let d = "settings" === r,
            u = d ? "rounded-2xl border border-default px-4 py-2" : "text-sm text-secondary"
          if (i[4] !== a || i[5] !== d) {
            let e
            ;(i[7] !== d
              ? ((e = (e, l) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: d
                        ? "flex flex-col gap-1 border-b border-default py-2.5 last:border-none"
                        : "flex flex-col gap-1 border-t border-default py-2.5 first:border-none first:pt-0 last:pb-0",
                      children: [
                        (0, t.jsx)("div", { className: "text-sm font-medium text-default", children: e.title }),
                        (0, t.jsx)("div", {
                          className: d ? "text-xs text-secondary" : void 0,
                          children: c(e.description, "standard"),
                        }),
                      ],
                    },
                    e.id ?? l,
                  )),
                (i[7] = d),
                (i[8] = e))
              : (e = i[8]),
              (l = a.map(e)),
              (i[4] = a),
              (i[5] = d),
              (i[6] = l))
          } else l = i[6]
          return (
            i[9] !== u || i[10] !== l
              ? ((n = (0, t.jsx)("div", { className: u, children: l })), (i[9] = u), (i[10] = l), (i[11] = n))
              : (n = i[11]),
            n
          )
        },
        _S: function (e) {
          let l,
            n,
            r = (0, s.c)(4),
            { disabled: o, onClick: d } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, t.jsx)(i.A, { id: "apps.connect.consent.cancel", defaultMessage: "Cancel" })), (r[0] = l))
              : (l = r[0]),
            r[1] !== o || r[2] !== d
              ? ((n = (0, t.jsx)(a.$, {
                  className: "w-full justify-center",
                  type: "button",
                  color: "primary",
                  size: "large",
                  disabled: o,
                  onClick: d,
                  children: l,
                })),
                (r[1] = o),
                (r[2] = d),
                (r[3] = n))
              : (n = r[3]),
            n
          )
        },
        bS: d,
      },
    )
  },
  rAOw(e, l, n) {
    var t = n("ABep"),
      s = n("QosV")
    n.d(
      l,
      {},
      {
        a: function () {
          let e,
            l = (0, s.c)(2)
          return (
            l[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          alt: "",
                          "aria-hidden": !0,
                          className: "pointer-events-none absolute inset-x-0 top-0 h-auto w-full dark:hidden",
                          src: "https://persistent.oaistatic.com/codex-app-prod/oauth-bundle-desktop-light.webp",
                        }),
                        (0, t.jsx)("img", {
                          alt: "",
                          "aria-hidden": !0,
                          className: "pointer-events-none absolute inset-x-0 top-0 hidden h-auto w-full dark:block",
                          src: "https://persistent.oaistatic.com/codex-app-prod/oauth-bundle-desktop-dark.webp",
                        }),
                      ],
                    }),
                    null,
                  ],
                })),
                (l[1] = e))
              : (e = l[1]),
            e
          )
        },
      },
    )
  },
  NYUO(e, l, n) {
    var t = n("qmMi"),
      s = n("B81s"),
      i = n("xS4d"),
      a = n("uodG"),
      r = n("OWtl"),
      o = n("OMIV"),
      d = n("jBHQ")
    let c = (0, t.i1)(r.u, ({ hostId: e, consumer: l }, { get: n }) => {
        let t = "panel" === l ? o.JW : d.P
        if (
          !n(t, "2296472986") ||
          !(0, a.Zi)({ remoteControlConnectionsState: n(i.h9), slingshotEnabled: n(t, "1042620455") })
        )
          return !1
        let r = "search" === l ? n(s.b9, { hostId: e }, { enabled: !1 }) : n(s.b9, { hostId: e })
        return ("panel" === l || r.isSuccess) && r.data?.requirements?.computerUse?.allowLockedComputerUse !== !1
      }),
      u = (0, t.i1)(r.u, (e, { get: l }) => l(c, { hostId: e, consumer: "panel" })),
      p = (0, t.i1)(r.u, (e, { get: l }) => l(c, { hostId: e, consumer: "search" }))
    n.d(l, {}, { I: u, i: p })
  },
  mwiM(e, l, n) {
    var t = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      a = n("Qgfj"),
      r = n("oyxz")
    let o = (0, a.YK)({
      installed: { id: "plugins.browserExtension.installed", defaultMessage: "Browser extension installed" },
      notInstalled: { id: "plugins.browserExtension.notInstalled", defaultMessage: "Browser extension not installed" },
      loading: {
        id: "plugins.browserExtension.loading",
        defaultMessage: "Use the browser extension for additional control",
      },
    })
    n.d(
      l,
      {},
      {
        y: function (e) {
          let l,
            n,
            a,
            d,
            c = (0, s.c)(11),
            { status: u } = e
          if (u.isLoading) {
            let e
            return (
              c[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, t.jsx)(r.A, { ...o.loading })), (c[0] = e))
                : (e = c[0]),
              e
            )
          }
          if (null != u.detectionError) {
            let e
            return (
              c[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, t.jsx)(r.A, {
                    id: "plugins.browserExtension.detectionError",
                    defaultMessage: "Unable to check browser extension",
                  })),
                  (c[1] = e))
                : (e = c[1]),
              e
            )
          }
          let p = u.isInstalled ? "bg-[var(--app-color-icon-success)]" : "bg-[var(--app-color-icon-error)]"
          return (
            c[2] !== p ? ((l = (0, i.A)("h-2 w-2 shrink-0 rounded-full", p)), (c[2] = p), (c[3] = l)) : (l = c[3]),
            c[4] !== l ? ((n = (0, t.jsx)("span", { className: l })), (c[4] = l), (c[5] = n)) : (n = c[5]),
            c[6] !== u.isInstalled
              ? ((a = (0, t.jsx)("span", {
                  className: "min-w-0 truncate",
                  children: u.isInstalled
                    ? (0, t.jsx)(r.A, { ...o.installed })
                    : (0, t.jsx)(r.A, { ...o.notInstalled }),
                })),
                (c[6] = u.isInstalled),
                (c[7] = a))
              : (a = c[7]),
            c[8] !== n || c[9] !== a
              ? ((d = (0, t.jsxs)("span", {
                  className: "inline-flex max-w-full items-center gap-2",
                  children: [n, a],
                })),
                (c[8] = n),
                (c[9] = a),
                (c[10] = d))
              : (d = c[10]),
            d
          )
        },
      },
    )
  },
  SJFU(e, l, n) {
    let t = (0, n("Qgfj").YK)({
        browserExtensionDescription: {
          id: "plugins.installModal.browserExtension.description",
          defaultMessage: "Install this extension to connect ChatGPT to your browser",
        },
        browserExtensionName: { id: "plugins.browserExtension.name", defaultMessage: "ChatGPT browser extension" },
        chromeBrowserExtensionDescription: {
          id: "plugins.installModal.codexChrome.description",
          defaultMessage: "Install this extension in Chrome to connect ChatGPT to your browser",
        },
        chromeBrowserExtensionName: {
          id: "plugins.browserExtension.chrome.name",
          defaultMessage: "ChatGPT for Chrome",
        },
        edgeBrowserExtensionName: { id: "plugins.browserExtension.edge.name", defaultMessage: "ChatGPT for Edge" },
        edgeBrowserExtensionDescription: {
          id: "plugins.installModal.edgeBrowserExtension.description",
          defaultMessage: "Install this extension in Edge to connect ChatGPT to your browser",
        },
      }),
      s = {
        chrome: { description: t.chromeBrowserExtensionDescription, name: t.chromeBrowserExtensionName },
        edge: { description: t.edgeBrowserExtensionDescription, name: t.edgeBrowserExtensionName },
      }
    n.d(
      l,
      {},
      {
        b: function (e) {
          return s[e]?.name ?? t.browserExtensionName
        },
        i: function (e) {
          return s[e]?.description ?? t.browserExtensionDescription
        },
      },
    )
  },
  Jqpj(e, l, n) {
    var t = n("ABep"),
      s = n("QosV"),
      i = n("slpy"),
      a = n("on57"),
      r = n("zd8w"),
      o = n("Ywss"),
      d = n("TjgH")
    function c(e) {
      let l,
        n,
        a,
        r,
        o,
        d,
        c,
        u = (0, s.c)(14)
      ;(u[0] !== e
        ? (({ disabled: l, onClick: n, onKeyDown: a, tooltip: o, ...r } = e),
          (u[0] = e),
          (u[1] = l),
          (u[2] = n),
          (u[3] = a),
          (u[4] = r),
          (u[5] = o))
        : ((l = u[1]), (n = u[2]), (a = u[3]), (r = u[4]), (o = u[5])),
        u[6] !== l || u[7] !== n || u[8] !== a || u[9] !== r
          ? ((d =
              null != n || l
                ? (0, t.jsx)("div", {
                    ...r,
                    "aria-disabled": l || void 0,
                    role: "button",
                    tabIndex: 0,
                    onClick: l ? void 0 : n,
                    onKeyDown: l ? void 0 : a,
                  })
                : (0, t.jsx)("div", { ...r, tabIndex: -1 })),
            (u[6] = l),
            (u[7] = n),
            (u[8] = a),
            (u[9] = r),
            (u[10] = d))
          : (d = u[10]))
      let p = d
      return (
        u[11] !== p || u[12] !== o
          ? ((c = null == o ? p : (0, t.jsx)(i.m, { content: o, children: p })), (u[11] = p), (u[12] = o), (u[13] = c))
          : (c = u[13]),
        c
      )
    }
    function u(e, l) {
      return "string" == typeof e
        ? (0, t.jsx)(d.E, { variant: "outline", children: e }, e)
        : (0, t.jsx)("span", { className: "flex items-center", children: e }, l)
    }
    n.d(
      l,
      {},
      {
        D: function (e) {
          let l,
            n,
            i,
            d,
            p,
            m,
            g,
            f,
            x,
            h,
            b,
            y,
            v,
            j,
            C,
            w,
            k,
            A,
            N,
            M = (0, s.c)(85),
            {
              ref: _,
              icon: I,
              title: S,
              description: D,
              contentClassName: P,
              descriptionClassName: T,
              descriptionPlacement: E,
              badges: U,
              actions: R,
              actionsPlacement: O,
              trailing: L,
              disabled: B,
              onClick: F,
              tooltip: V,
              to: z,
              iconContainer: q,
              iconContainerVariant: G,
              iconPlacement: H,
              isHighlighted: Z,
              presentation: Y,
              className: Q,
            } = e,
            W = void 0 === E ? "stacked" : E,
            K = void 0 !== B && B,
            $ = void 0 === q || q,
            J = void 0 === G ? "filled" : G,
            X = void 0 === H ? "outside" : H,
            ee = void 0 !== Z && Z,
            el = void 0 === Y ? "card" : Y,
            en = (0, r.useId)()
          M[0] !== F
            ? ((l = (e) => {
                F &&
                  e.target === e.currentTarget &&
                  ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), e.currentTarget.click())
              }),
              (M[0] = F),
              (M[1] = l))
            : (l = M[1])
          let et = l,
            es = "row" === el || "directory-row" === el,
            ei = "compact-row" === el,
            ea = (ei || "center" === (void 0 === O ? "top" : O)) && !!R
          M[2] !== R || M[3] !== ei || M[4] !== z
            ? ((n = R
                ? (0, t.jsx)("div", {
                    className: (0, a.A)(
                      "flex shrink-0 items-center",
                      ei && "max-w-1/2",
                      null != z && "pointer-events-auto relative z-10",
                    ),
                    children: R,
                  })
                : null),
              (M[2] = R),
              (M[3] = ei),
              (M[4] = z),
              (M[5] = n))
            : (n = M[5])
          let er = n
          M[6] !== I || M[7] !== $ || M[8] !== J || M[9] !== ei || M[10] !== es
            ? ((i = I
                ? $
                  ? (0, t.jsx)("span", {
                      className: (0, a.A)(
                        "flex shrink-0 items-center justify-center",
                        ei && "size-13 rounded-2xl",
                        !ei && (es ? "size-9 rounded-lg" : "size-10 rounded-lg"),
                        "outline" === J && "border border-default bg-transparent",
                        "filled" === J && "bg-surface-secondary",
                      ),
                      children: ei
                        ? (0, t.jsx)("span", { className: "flex size-8 items-center justify-center", children: I })
                        : I,
                    })
                  : (0, t.jsx)("span", { className: "shrink-0", children: I })
                : null),
              (M[6] = I),
              (M[7] = $),
              (M[8] = J),
              (M[9] = ei),
              (M[10] = es),
              (M[11] = i))
            : (i = M[11])
          let eo = i,
            ed = null == z && K,
            ec = null != z && "relative"
          M[12] !== Q || M[13] !== ee || M[14] !== es || M[15] !== F || M[16] !== el || M[17] !== ec
            ? ((d = (0, a.A)(
                "flex flex-col gap-2.5",
                ec,
                {
                  catalog: "h-full min-h-40 rounded-2xl border border-default p-5 hover:bg-secondary-ghost-hover",
                  featured: "h-full rounded-xl bg-surface-secondary px-7 py-8 hover:bg-secondary-ghost-hover",
                  ranked: "min-h-24 rounded-xl px-3 py-4 hover:bg-secondary-ghost-hover",
                  related: "min-h-24 rounded-xl bg-surface px-3 py-4 hover:bg-secondary-ghost-hover",
                  row: "rounded-[var(--radius-token-row)]",
                  "compact-row": "min-h-14 w-full min-w-0 justify-center",
                  "directory-row": "rounded-2xl",
                  card: "border-border/40 rounded-2xl border p-2 hover:bg-text/5",
                }[el],
                es &&
                  "min-h-[var(--height-token-row)] w-full min-w-0 justify-center px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
                es && F && "hover:bg-secondary-ghost-hover",
                ee && "bg-text/5",
                F ? "cursor-interaction" : null,
                F &&
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0",
                Q,
              )),
              (M[12] = Q),
              (M[13] = ee),
              (M[14] = es),
              (M[15] = F),
              (M[16] = el),
              (M[17] = ec),
              (M[18] = d))
            : (d = M[18])
          let eu = ee ? "true" : void 0,
            ep = null == z ? F : void 0,
            em = null == z ? et : void 0
          M[19] !== K || M[20] !== F || M[21] !== en || M[22] !== z
            ? ((p =
                null == z || K
                  ? null
                  : (0, t.jsx)(o.N_, {
                      className:
                        "absolute inset-0 cursor-interaction rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-inset",
                      "aria-labelledby": en,
                      to: z,
                      onClick: F,
                      onAuxClick: (e) => {
                        1 === e.button && F?.(e)
                      },
                    })),
              (M[19] = K),
              (M[20] = F),
              (M[21] = en),
              (M[22] = z),
              (M[23] = p))
            : (p = M[23])
          let eg = ei ? "gap-4" : "gap-3",
            ef = null != z && "pointer-events-none",
            ex = "catalog" === el ? "items-start" : "items-center",
            eh = "inline" === W && "gap-2"
          M[24] !== eg || M[25] !== ef || M[26] !== ex || M[27] !== eh
            ? ((m = (0, a.A)("flex", eg, ef, ex, eh)),
              (M[24] = eg),
              (M[25] = ef),
              (M[26] = ex),
              (M[27] = eh),
              (M[28] = m))
            : (m = M[28])
          let eb = "outside" === X ? eo : null,
            ey = ea && "items-center",
            ev = ea && (ei ? "gap-4" : "gap-3")
          M[29] !== ey || M[30] !== ev
            ? ((g = (0, a.A)("flex min-w-0 flex-1", ey, ev)), (M[29] = ey), (M[30] = ev), (M[31] = g))
            : (g = M[31])
          let ej = "stacked" === W ? "flex-col" : "items-center gap-3"
          M[32] !== P || M[33] !== ej
            ? ((f = (0, a.A)("flex min-w-0 flex-1 justify-center gap-0.5", ej, P)),
              (M[32] = P),
              (M[33] = ej),
              (M[34] = f))
            : (f = M[34])
          let eC = "inline" === W && "w-28 shrink-0 sm:w-48",
            ew = ea || "inline" === X ? null : "justify-between"
          M[35] !== eC || M[36] !== ew
            ? ((x = (0, a.A)("flex min-w-0 items-center gap-2", eC, ew)), (M[35] = eC), (M[36] = ew), (M[37] = x))
            : (x = M[37])
          let ek = "inline" === X ? eo : null,
            eA = ei ? "min-w-0 text-lg leading-6 wrap-break-word" : "truncate",
            eN = es ? "text-[length:var(--detail-row-font-size,var(--text-base))]" : "font-medium",
            eM = "catalog" === el && "text-base font-semibold"
          ;(M[38] !== eA || M[39] !== eN || M[40] !== eM
            ? ((h = (0, a.A)("text-default", eA, eN, eM)), (M[38] = eA), (M[39] = eN), (M[40] = eM), (M[41] = h))
            : (h = M[41]),
            M[42] !== h || M[43] !== S || M[44] !== en
              ? ((b = (0, t.jsx)("div", { id: en, className: h, children: S })),
                (M[42] = h),
                (M[43] = S),
                (M[44] = en),
                (M[45] = b))
              : (b = M[45]),
            M[46] !== U || M[47] !== z
              ? ((y = U?.length
                  ? (0, t.jsx)("div", {
                      className: (0, a.A)(
                        "flex shrink-0 items-center gap-1",
                        null != z && "pointer-events-auto relative z-10",
                      ),
                      children: U.map(u),
                    })
                  : null),
                (M[46] = U),
                (M[47] = z),
                (M[48] = y))
              : (y = M[48]),
            M[49] !== b || M[50] !== y
              ? ((v = (0, t.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [b, y] })),
                (M[49] = b),
                (M[50] = y),
                (M[51] = v))
              : (v = M[51]))
          let e_ = ea ? null : er
          ;(M[52] !== x || M[53] !== ek || M[54] !== v || M[55] !== e_
            ? ((j = (0, t.jsxs)("div", { className: x, children: [ek, v, e_] })),
              (M[52] = x),
              (M[53] = ek),
              (M[54] = v),
              (M[55] = e_),
              (M[56] = j))
            : (j = M[56]),
            M[57] !== D || M[58] !== T || M[59] !== W || M[60] !== ei
              ? ((C = D
                  ? (0, t.jsx)("div", {
                      className: (0, a.A)(
                        "text-secondary",
                        ei ? "truncate text-suggestion-description" : "text-sm leading-relaxed",
                        "inline" === W ? "min-w-0 flex-1 truncate text-start" : null,
                        T ?? (!ei && "line-clamp-3"),
                      ),
                      children: D,
                    })
                  : null),
                (M[57] = D),
                (M[58] = T),
                (M[59] = W),
                (M[60] = ei),
                (M[61] = C))
              : (C = M[61]),
            M[62] !== f || M[63] !== j || M[64] !== C
              ? ((w = (0, t.jsxs)("div", { className: f, children: [j, C] })),
                (M[62] = f),
                (M[63] = j),
                (M[64] = C),
                (M[65] = w))
              : (w = M[65]))
          let eI = ea ? er : null
          return (
            M[66] !== g || M[67] !== w || M[68] !== eI
              ? ((k = (0, t.jsxs)("div", { className: g, children: [w, eI] })),
                (M[66] = g),
                (M[67] = w),
                (M[68] = eI),
                (M[69] = k))
              : (k = M[69]),
            M[70] !== m || M[71] !== eb || M[72] !== k || M[73] !== L
              ? ((A = (0, t.jsxs)("div", { className: m, children: [eb, k, L] })),
                (M[70] = m),
                (M[71] = eb),
                (M[72] = k),
                (M[73] = L),
                (M[74] = A))
              : (A = M[74]),
            M[75] !== _ ||
            M[76] !== ed ||
            M[77] !== d ||
            M[78] !== eu ||
            M[79] !== ep ||
            M[80] !== em ||
            M[81] !== p ||
            M[82] !== A ||
            M[83] !== V
              ? ((N = (0, t.jsxs)(c, {
                  ref: _,
                  disabled: ed,
                  tooltip: V,
                  className: d,
                  "data-search-result-active": eu,
                  onClick: ep,
                  onKeyDown: em,
                  children: [p, A],
                })),
                (M[75] = _),
                (M[76] = ed),
                (M[77] = d),
                (M[78] = eu),
                (M[79] = ep),
                (M[80] = em),
                (M[81] = p),
                (M[82] = A),
                (M[83] = V),
                (M[84] = N))
              : (N = M[84]),
            N
          )
        },
      },
    )
  },
  PWGb(e, l, n) {
    var t = n("ABep"),
      s = n("QosV"),
      i = n("yLkT"),
      a = n("Haiv"),
      r = n("FvYa"),
      o = n("HOLv"),
      d = n("wq58")
    n.d(
      l,
      {},
      {
        S: function (e) {
          let l,
            n,
            c,
            u,
            p = (0, s.c)(7),
            { children: m, plugin: g } = e
          return (
            p[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, t.jsx)("span", {
                  className:
                    "flex size-14 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-sm",
                  children: (0, t.jsx)(d.A, { className: "size-12" }),
                })),
                (p[0] = l))
              : (l = p[0]),
            p[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, t.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, t.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, t.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, t.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                  ],
                })),
                (p[1] = n))
              : (n = p[1]),
            p[2] !== m || p[3] !== g
              ? ((c =
                  m ??
                  (0, t.jsx)(r.R, {
                    alt: (0, a.V)(g),
                    className: "size-full object-contain",
                    logoDarkUrl: g.logoDarkPath,
                    logoUrl: g.logoPath,
                    fallback: (0, t.jsx)(o.I, { className: "text-secondary", "aria-hidden": !1, asset: i.k }),
                  })),
                (p[2] = m),
                (p[3] = g),
                (p[4] = c))
              : (c = p[4]),
            p[5] !== c
              ? ((u = (0, t.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    l,
                    n,
                    (0, t.jsx)("span", {
                      className:
                        "flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-default shadow-sm",
                      children: c,
                    }),
                  ],
                })),
                (p[5] = c),
                (p[6] = u))
              : (u = p[6]),
            u
          )
        },
      },
    )
  },
  yHWn(e, l, n) {
    let t = (0, n("Qgfj").YK)({
      cardInstall: { id: "plugins.card.installAriaLabel", defaultMessage: "Install {pluginName}" },
      detailInstall: { id: "plugins.detail.install", defaultMessage: "Install plugin" },
      unavailable: { id: "plugins.install.unavailable", defaultMessage: "Unavailable" },
      unavailableExplanation: {
        id: "plugins.install.unavailableExplanation",
        defaultMessage: "This plugin isn't available to install for your account or device",
      },
    })
    n.d(l, {}, { H: t })
  },
  iSvj(e, l, n) {
    n.d(l, { _: () => eM })
    var t = n("ABep"),
      s = n("QosV"),
      i = n("slpy")
    let a = (0, n("ESTr").a)({
      name: "web-browser-light-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 2.43335, y: 4.433594, width: 27.133789, height: 23.133789 },
        visualBounds: { x: 2.43335, y: 4.433594, width: 27.133789, height: 23.133789 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.43335, y: 4.433594, width: 27.133789, height: 23.133789 },
        center: { x: 16.000245, y: 16.000489 },
        insets: { top: 4.433594, right: 2.432861, bottom: 4.432617, left: 2.43335 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 16.000245, y: 16.000489 },
          foreground: { x: 16.000245, y: 16.000489 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.48608 8.69727C10.4075 8.69727 11.154 9.44382 11.1541 10.3652C11.1538 11.2864 10.4073 12.0332 9.48608 12.0332C8.56484 12.0332 7.81838 11.2864 7.81812 10.3652C7.81812 9.44383 8.56468 8.69727 9.48608 8.69727Z" fill="currentColor"/> <path d="M23.0818 9.46582C23.5788 9.46582 23.9822 9.86915 23.9822 10.3662C23.9819 10.863 23.5787 11.2666 23.0818 11.2666H13.7488C13.252 11.2665 12.8487 10.863 12.8484 10.3662C12.8484 9.86924 13.2518 9.46595 13.7488 9.46582H23.0818Z" fill="currentColor"/> <path d="M24.1667 4.43359C27.1491 4.43359 29.5671 6.85165 29.5671 9.83398V22.167C29.5671 25.1493 27.1491 27.5674 24.1667 27.5674H7.83374C4.85141 27.5674 2.43335 25.1493 2.43335 22.167V9.83398C2.43335 6.85165 4.8514 4.43359 7.83374 4.43359H24.1667ZM7.83374 6.23438C5.84552 6.23438 4.23413 7.84576 4.23413 9.83398V22.167C4.23413 24.1552 5.84552 25.7676 7.83374 25.7676H24.1667C26.155 25.7676 27.7673 24.1552 27.7673 22.167V9.83398C27.7673 7.84576 26.155 6.23438 24.1667 6.23438H7.83374Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var r = n("T0Rc"),
      o = n("pLGj"),
      d = n("qmMi"),
      c = n("DBCl"),
      u = n("HJEB"),
      p = n("D4ZO"),
      m = n("Haiv"),
      g = n("SqAt"),
      f = n("zd8w"),
      x = n("Wf1j"),
      h = n("oyxz"),
      b = n("Ywss"),
      y = n("rGp2"),
      v = n("m17G"),
      j = n("LQko"),
      C = n("oSZg"),
      w = n("FvYa"),
      k = n("aTcy"),
      A = n("TjgH"),
      N = n("Sm6l"),
      M = n("JNtf"),
      _ = n("mUDD"),
      I = n("Ot7V"),
      S = n("v0Gf"),
      D = n("SGsN"),
      P = n("F0xz"),
      T = n("NYUO"),
      E = n("wwME"),
      U = n("gsZR"),
      R = n("qj8A"),
      O = n("EEop"),
      L = n("GaA7"),
      B = n("OWtl"),
      F = n("ecE5"),
      V = n("bb3f"),
      z = n("hZax"),
      q = n("WXrt"),
      G = n("mwiM"),
      H = n("joT6"),
      Z = n("SJFU"),
      Y = n("xWQV"),
      Q = n("SaEY"),
      W = n("bPLJ"),
      K = n("jEyg"),
      $ = n("UwQs"),
      J = n("tlx5"),
      X = n("v70x"),
      ee = n("H7Ld"),
      el = n("ueue"),
      en = n("sFqu"),
      et = n("aVTW"),
      es = n("PWGb"),
      ei = n("yHWn"),
      ea = n("ASxG")
    let er = ea.YjP().trim().min(1),
      eo = ea.OZ5().pipe(
        ea.YjP().refine((e) => {
          let l = new URL(e)
          return "https:" === l.protocol && !l.username && !l.password
        }),
      ),
      ed = ea
        .YOg(
          ea.KCZ([
            ea.YjP().min(1),
            ea.Ikc({ text: er, url: ea.KCZ([eo, ea.k5n(["{termsOfServiceUrl}", "{privacyPolicyUrl}"])]) }),
          ]),
        )
        .min(1),
      ec = ea.Ikc({ icon: ea.k5n(["folder", "document"]).optional(), text: er }),
      eu = ea.Ikc({ title: er, description: ea.YOg(ea.KCZ([ed, ec])), connectLabel: er, disclaimer: ea.YOg(ed).min(1) })
    var ep = n("mfKi"),
      em = n("lmaZ"),
      eg = n("rAOw"),
      ef = n("OiCI"),
      ex = n("ZtSy"),
      eh = n("bVeK"),
      eb = n("wq58"),
      ey = n("a0aG")
    function ev(e) {
      let l,
        n,
        i,
        a,
        r,
        o,
        c,
        u,
        p = (0, s.c)(35),
        { content: g, installOptions: x, plugin: h, isInstalling: b, disabled: y, onInstall: v, onOpenChange: j } = e,
        C = (0, d.gh)(B.u),
        k = y && !b
      p[0] !== x || p[1] !== h.plugin || p[2] !== C
        ? ((l = (e) => {
            ;(x?.hostedAccountId == null || x.hostedAccountId === C.get(ef.tT)) &&
              (0, X.v6)(C, {
                ...ey.F.pluginRedirect,
                action: ep.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL_CONSENT,
                result: e,
                plugin: h.plugin,
                installAttemptId: x?.installAttemptId,
              })
          }),
          (p[0] = x),
          (p[1] = h.plugin),
          (p[2] = C),
          (p[3] = l))
        : (l = p[3])
      let A = l
      p[4] !== y || p[5] !== b || p[6] !== A
        ? ((n = () => {
            y || b || A(ep.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED)
          }),
          (p[4] = y),
          (p[5] = b),
          (p[6] = A),
          (p[7] = n))
        : (n = p[7])
      let I = (0, f.useEffectEvent)(n)
      p[8] !== I
        ? ((i = () => {
            I()
          }),
          (p[8] = I),
          (p[9] = i))
        : (i = p[9])
      let S = x?.installAttemptId
      ;(p[10] !== y || p[11] !== b || p[12] !== h.plugin.id || p[13] !== S
        ? ((a = [y, b, S, h.plugin.id]), (p[10] = y), (p[11] = b), (p[12] = h.plugin.id), (p[13] = S), (p[14] = a))
        : (a = p[14]),
        (0, f.useEffect)(i, a),
        p[15] !== b || p[16] !== A || p[17] !== j
          ? ((r = (e) => {
              ;(e || b || A(ep.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_CANCELLED), j(e))
            }),
            (p[15] = b),
            (p[16] = A),
            (p[17] = j),
            (p[18] = r))
          : (r = p[18]))
      let D = !b
      return (
        p[19] !== g || p[20] !== k
          ? ((o = k || 0 === g.description.length ? { "aria-describedby": void 0 } : void 0),
            (p[19] = g),
            (p[20] = k),
            (p[21] = o))
          : (o = p[21]),
        p[22] !== g || p[23] !== y || p[24] !== b || p[25] !== k || p[26] !== A || p[27] !== v || p[28] !== h
          ? ((c = k
              ? (0, t.jsx)(em.$, {})
              : (0, t.jsxs)(_.R4, {
                  as: "form",
                  variant: "chatgpt",
                  onSubmit: (e) => {
                    ;(e.preventDefault(),
                      y || b || (A(ep.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS), v()))
                  },
                  children: [
                    (0, t.jsx)(eg.a, {}),
                    (0, t.jsxs)("div", {
                      className: "relative flex flex-col gap-10 pt-16 pb-8",
                      children: [
                        (0, t.jsxs)("div", {
                          "aria-hidden": !0,
                          className: "flex items-center justify-center gap-3 select-none",
                          children: [
                            (0, t.jsx)("span", {
                              className:
                                "flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border border-default bg-surface text-default shadow-sm",
                              children: (0, t.jsx)(eb.A, { className: "h-12 w-12" }),
                            }),
                            (0, t.jsxs)("span", {
                              className: "flex gap-1",
                              children: [
                                (0, t.jsx)("span", { className: "size-1.5 rounded-full bg-text/30" }),
                                (0, t.jsx)("span", { className: "size-1.5 rounded-full bg-text/30" }),
                                (0, t.jsx)("span", { className: "size-1.5 rounded-full bg-text/30" }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className:
                                "flex h-18 w-18 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-default bg-surface shadow-sm",
                              children: (0, t.jsx)(w.R, {
                                alt: (0, m.V)(h),
                                className: "size-full object-contain",
                                logoDarkUrl: h.logoDarkPath,
                                logoUrl: h.logoPath,
                                fallback: (0, t.jsx)(eh.wdY, { className: "text-secondary" }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col gap-6 px-8",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex flex-col gap-2 text-center",
                              children: [
                                (0, t.jsx)(M.L3, {
                                  className: "heading-lg font-semibold select-none",
                                  children: g.title,
                                }),
                                g.description.length > 0
                                  ? (0, t.jsx)(M.rr, {
                                      asChild: !0,
                                      children: (0, t.jsx)("div", {
                                        className: "flex flex-col gap-2 text-lg leading-relaxed text-secondary",
                                        children: (0, t.jsx)(eC, { description: g.description }),
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                            (0, t.jsx)(N.$, {
                              className: "w-full justify-center",
                              type: "submit",
                              color: "primary",
                              size: "beaconAction",
                              disabled: y || b,
                              loading: b,
                              children: g.connectLabel,
                            }),
                            (0, t.jsx)("div", {
                              className: "text-center text-xs text-secondary",
                              children: g.disclaimer.map(ej),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
            (p[22] = g),
            (p[23] = y),
            (p[24] = b),
            (p[25] = k),
            (p[26] = A),
            (p[27] = v),
            (p[28] = h),
            (p[29] = c))
          : (c = p[29]),
        p[30] !== r || p[31] !== D || p[32] !== o || p[33] !== c
          ? ((u = (0, t.jsx)(M.lG, {
              autoFocusCloseButton: !0,
              open: !0,
              onOpenChange: r,
              shouldIgnoreClickOutside: !0,
              showDialogClose: D,
              variant: "beacon",
              size: "beacon",
              dialogCloseClassName: "top-6 right-6",
              contentProps: o,
              children: c,
            })),
            (p[30] = r),
            (p[31] = D),
            (p[32] = o),
            (p[33] = c),
            (p[34] = u))
          : (u = p[34]),
        u
      )
    }
    function ej(e, l) {
      return (0, t.jsx)(ek, { paragraph: e }, l)
    }
    function eC(e) {
      let l,
        n,
        i = (0, s.c)(4),
        { description: a } = e
      return (
        i[0] !== a ? ((l = a.map(ew)), (i[0] = a), (i[1] = l)) : (l = i[1]),
        i[2] !== l ? ((n = (0, t.jsx)(t.Fragment, { children: l })), (i[2] = l), (i[3] = n)) : (n = i[3]),
        n
      )
    }
    function ew(e, l) {
      if (Array.isArray(e)) return (0, t.jsx)(ek, { paragraph: e }, l)
      let n = "folder" === e.icon ? eh.nex : eh.o_G
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center gap-3 text-start",
          children: [null != e.icon ? (0, t.jsx)(n, {}) : null, (0, t.jsx)("span", { children: e.text })],
        },
        l,
      )
    }
    function ek(e) {
      let l,
        n,
        i = (0, s.c)(4),
        { paragraph: a } = e
      return (
        i[0] !== a ? ((l = a.map(eA)), (i[0] = a), (i[1] = l)) : (l = i[1]),
        i[2] !== l ? ((n = (0, t.jsx)("p", { children: l })), (i[2] = l), (i[3] = n)) : (n = i[3]),
        n
      )
    }
    function eA(e, l) {
      return "string" == typeof e
        ? e
        : (0, t.jsx)(
            ex.G,
            {
              className: "font-semibold",
              appearance: "secondary",
              underline: "hover",
              href: e.url,
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
              children: e.text,
            },
            l,
          )
    }
    let eN = "min(720px, calc(100vh - 2rem))"
    function eM(e) {
      let l,
        n,
        a,
        o,
        c,
        u,
        C,
        w,
        k,
        A,
        I,
        D,
        P,
        U,
        L,
        V,
        q,
        G,
        H,
        Z,
        W = (0, s.c)(175),
        {
          appConnectOptions: J,
          productContext: ee,
          skipGoogleOAuthBundle: es,
          hostId: er,
          beforeRequiredAppConnect: ed,
          isInstalling: ec,
          isPluginRedirect: ep,
          installOptions: em,
          onConnectRequiredApp: eg,
          onInstall: ef,
          onOpenChange: ex,
          onRequiredAppConnectFailed: eh,
          onRequiredAppDismissed: eb,
          onRequiredAppConnected: ey,
          onRequiredAppConnectStarted: ej,
          onRequiredAppOAuthStarted: eC,
          onTryInChat: ew,
          onViewDetails: ek,
          session: eA,
        } = e,
        eM = void 0 !== ec && ec,
        eT = void 0 !== ep && ep,
        eE = (0, d.gh)(B.u),
        eR = (0, z.AS)(),
        eO = (0, x.A)(),
        [eL, eB] = (0, f.useState)(null),
        { platform: eF } = (0, E.V)(),
        eV = (0, b.zy)(),
        ez = (0, d._U)(T.I, er),
        eq = "closed" === eA.kind ? null : eA.plugin
      W[0] !== eA.kind || W[1] !== eA.requiredApps
        ? ((l = "needsApps" === eA.kind ? eA.requiredApps.map(eS) : void 0),
          (W[0] = eA.kind),
          (W[1] = eA.requiredApps),
          (W[2] = l))
        : (l = W[2])
      let eG = l
      W[3] !== J || W[4] !== er || W[5] !== ee || W[6] !== eG || W[7] !== eA.kind || W[8] !== eA.plugin
        ? ((n =
            "details" === eA.kind
              ? {
                  hostId: er,
                  ...(0, el.R9)(eA.plugin),
                  productContext: ee,
                  appConnectOptions: J,
                  pluginSummary: eA.plugin.plugin,
                }
              : { hostId: er, productContext: ee, appConnectOptions: J, pluginApps: eG }),
          (W[3] = J),
          (W[4] = er),
          (W[5] = ee),
          (W[6] = eG),
          (W[7] = eA.kind),
          (W[8] = eA.plugin),
          (W[9] = n))
        : (n = W[9])
      let {
          blockedReasonsByConnectorId: eH,
          blockedReason: eZ,
          hasConnectorAvailabilityError: eY,
          isConnectorAvailabilityLoading: eQ,
          isLoading: eW,
        } = (0, Q.Ov)(n),
        eK = null != eq && (0, Q.Ei)(eq.plugin),
        e$ = "details" === eA.kind ? eZ : null,
        eJ = "details" === eA.kind && eW,
        e1 = eK ? "disabled-by-admin" : e$,
        e0 = null != e1,
        e2 = eq?.marketplacePath ?? null
      W[10] !== eq ? ((a = null == eq ? null : (0, g.JO)(eq)), (W[10] = eq), (W[11] = a)) : (a = W[11])
      let e3 = eq?.remoteMarketplaceName ?? null,
        e4 = null != eq
      W[12] !== er || W[13] !== ee || W[14] !== e2 || W[15] !== a || W[16] !== e3 || W[17] !== e4
        ? ((o = {
            hostId: er,
            productContext: ee,
            marketplacePath: e2,
            pluginName: a,
            remoteMarketplaceName: e3,
            enabled: e4,
          }),
          (W[12] = er),
          (W[13] = ee),
          (W[14] = e2),
          (W[15] = a),
          (W[16] = e3),
          (W[17] = e4),
          (W[18] = o))
        : (o = W[18])
      let { plugin: e5 } = (0, O.MI)(o),
        e6 = e5?.apps
      if (
        W[19] !== J ||
        W[20] !== eH ||
        W[21] !== eY ||
        W[22] !== em?.requestedConnectorId ||
        W[23] !== e5 ||
        W[24] !== ee ||
        W[25] !== eA.kind ||
        W[26] !== eA.plugin
      ) {
        let e = null == e5 ? null : (0, et.WH)(e5, em?.requestedConnectorId, eY ? null : eH)
        ;((c =
          (C = "details" === eA.kind && "ON_INSTALL" === eA.plugin.plugin.authPolicy) &&
          e5?.summary.mustShowInstallationInterstitial !== !1 &&
          null != e &&
          "disabled-by-admin" !== eH[e.id]),
          (u = (0, j.kp)(
            e?.id ?? "",
            (null == e ? void 0 : (0, en.W)(e.id, { productContext: ee, appConnectOptions: J })?.productSku) ??
              (0, y.MR)(),
          )),
          (W[19] = J),
          (W[20] = eH),
          (W[21] = eY),
          (W[22] = em?.requestedConnectorId),
          (W[23] = e5),
          (W[24] = ee),
          (W[25] = eA.kind),
          (W[26] = eA.plugin),
          (W[27] = c),
          (W[28] = u),
          (W[29] = C))
      } else ((c = W[27]), (u = W[28]), (C = W[29]))
      let e8 = u,
        e7 = c && !eQ
      W[30] !== e8 || W[31] !== e7
        ? ((w = { ...e8, staleTime: e8.staleTime, enabled: e7, select: eI }), (W[30] = e8), (W[31] = e7), (W[32] = w))
        : (w = W[32])
      let { data: e9, isLoading: le } = (0, r.I)(w)
      W[33] !== eM || W[34] !== ex
        ? ((k = (e) => {
            ;(e || !eM) && (e || eB(null), ex(e))
          }),
          (W[33] = eM),
          (W[34] = ex),
          (W[35] = k))
        : (k = W[35])
      let ll = k
      if ("closed" === eA.kind) return null
      if ("connectApp" === eA.kind) {
        let e,
          l,
          n,
          s,
          i,
          a,
          r,
          o,
          d,
          c = eA.oauthReferrer
        ;(W[36] !== J || W[37] !== ee || W[38] !== eA.app.appId
          ? ((e = (0, en.W)(eA.app.appId, { productContext: ee, appConnectOptions: J })),
            (W[36] = J),
            (W[37] = ee),
            (W[38] = eA.app.appId),
            (W[39] = e))
          : (e = W[39]),
          W[40] !== eA.app ? ((l = eX(eA.app)), (W[40] = eA.app), (W[41] = l)) : (l = W[41]))
        let u = eM || (!eA.closeOnOAuthStarted && "waitingForCallback" === eA.app.status)
        return (
          W[42] !== eb || W[43] !== eA.app.appId
            ? ((n = () => eb?.(eA.app.appId)), (W[42] = eb), (W[43] = eA.app.appId), (W[44] = n))
            : (n = W[44]),
          W[45] !== eE || W[46] !== eA
            ? ((s = () => {
                null != eA.chatgptAnalytics &&
                  null != eA.installAttemptId &&
                  (0, Y.R8)(eE, eA.chatgptAnalytics, {
                    connectorId: eA.app.appId,
                    installAttemptId: eA.installAttemptId,
                    suggestionId: eA.suggestionId,
                    pluginId:
                      "analyticsPluginId" in eA
                        ? eA.analyticsPluginId
                        : ((0, X.pX)(eA.plugin.plugin) ?? eA.plugin.plugin.id),
                  })
              }),
              (i = (e, l) => {
                let n = l ?? eA.installAttemptId
                null != eA.chatgptAnalytics &&
                  null != n &&
                  (0, Y.R8)(eE, eA.chatgptAnalytics, {
                    connectorId: eA.app.appId,
                    installAttemptId: n,
                    suggestionId: eA.suggestionId,
                    pluginId:
                      "analyticsPluginId" in eA
                        ? eA.analyticsPluginId
                        : ((0, X.pX)(eA.plugin.plugin) ?? eA.plugin.plugin.id),
                    interstitialAction: e,
                  })
              }),
              (W[45] = eE),
              (W[46] = eA),
              (W[47] = s),
              (W[48] = i))
            : ((s = W[47]), (i = W[48])),
          W[49] !== eh || W[50] !== eA.app.appId
            ? ((a = (e) => {
                eh?.(eA.app.appId, e)
              }),
              (W[49] = eh),
              (W[50] = eA.app.appId),
              (W[51] = a))
            : (a = W[51]),
          W[52] !== ej || W[53] !== eA.app.appId || W[54] !== eA.chatgptAnalytics || W[55] !== eA.closeOnOAuthStarted
            ? ((r = eA.closeOnOAuthStarted && null == eA.chatgptAnalytics ? void 0 : () => ej?.(eA.app.appId)),
              (W[52] = ej),
              (W[53] = eA.app.appId),
              (W[54] = eA.chatgptAnalytics),
              (W[55] = eA.closeOnOAuthStarted),
              (W[56] = r))
            : (r = W[56]),
          W[57] !== ey || W[58] !== eA.app.appId
            ? ((o = async (e) => {
                await ey(eA.app.appId, e)
              }),
              (W[57] = ey),
              (W[58] = eA.app.appId),
              (W[59] = o))
            : (o = W[59]),
          W[60] !== ed ||
          W[61] !== er ||
          W[62] !== ex ||
          W[63] !== eC ||
          W[64] !== eA.authTypeOverride ||
          W[65] !== eA.closeOnOAuthStarted ||
          W[66] !== eA.installAttemptId ||
          W[67] !== eA.oauthReferrer ||
          W[68] !== eA.postConnectSource ||
          W[69] !== es ||
          W[70] !== e ||
          W[71] !== l ||
          W[72] !== u ||
          W[73] !== n ||
          W[74] !== s ||
          W[75] !== i ||
          W[76] !== a ||
          W[77] !== r ||
          W[78] !== o
            ? ((d = (0, t.jsx)(F.Z, {
                oauthReferrer: c,
                appConnectOptions: e,
                skipGoogleOAuthBundle: es,
                beforeConnect: ed,
                app: l,
                authTypeOverride: eA.authTypeOverride,
                closeOnOAuthStarted: eA.closeOnOAuthStarted,
                installAttemptId: eA.installAttemptId,
                hostId: er,
                isCompletingConnection: u,
                onOpenChange: ex,
                onUserDismissed: n,
                onConsentShown: s,
                onConsentAction: i,
                onConnectFailed: a,
                onConnectStarted: r,
                onConnected: o,
                onOAuthStarted: eC,
                postConnectSource: eA.postConnectSource,
                showConnectedToast: !1,
              })),
              (W[60] = ed),
              (W[61] = er),
              (W[62] = ex),
              (W[63] = eC),
              (W[64] = eA.authTypeOverride),
              (W[65] = eA.closeOnOAuthStarted),
              (W[66] = eA.installAttemptId),
              (W[67] = eA.oauthReferrer),
              (W[68] = eA.postConnectSource),
              (W[69] = es),
              (W[70] = e),
              (W[71] = l),
              (W[72] = u),
              (W[73] = n),
              (W[74] = s),
              (W[75] = i),
              (W[76] = a),
              (W[77] = r),
              (W[78] = o),
              (W[79] = d))
            : (d = W[79]),
          d
        )
      }
      if ("installing" === eA.kind) return null
      let ln = "needsApps" === eA.kind ? "needsApps" : "details",
        lt = eA.plugin
      W[80] !== ez || W[81] !== ln || W[82] !== eF || W[83] !== lt.plugin.id
        ? ((A = "details" === ln && "macOS" === eF && ez && (0, el.DF)(lt.plugin.id)),
          (W[80] = ez),
          (W[81] = ln),
          (W[82] = eF),
          (W[83] = lt.plugin.id),
          (W[84] = A))
        : (A = W[84])
      let ls = A,
        li = eL?.pluginId !== lt.plugin.id || eL.enabled,
        la = (C && eQ) || (c && le)
      W[85] !== e9 || W[86] !== e0 || W[87] !== c
        ? ((I = c && !e0 && null != e9 && (0, j.MZ)(e9.blurbs) ? e9.blurbs : null),
          (W[85] = e9),
          (W[86] = e0),
          (W[87] = c),
          (W[88] = I))
        : (I = W[88])
      let lr = I
      W[89] !== eO || W[90] !== e0 || W[91] !== eT || W[92] !== ln || W[93] !== lt || W[94] !== ls || W[95] !== eR
        ? ((D =
            "details" !== ln || !eT || e0 || ls
              ? void 0
              : (function (e, l, n, t, s) {
                  let i = ea.Ikc({ plugins: ea.g1P(ea.YjP(), ea.L5J()), default: ea.L5J().optional() }).safeParse(e)
                  if (!i.success) return
                  let a = ea
                    .g1P(ea.YjP(), ea.L5J())
                    .safeParse(void 0 === i.data.plugins[l] ? i.data.default : i.data.plugins[l])
                  if (!a.success) return
                  let r = n.locale.toLowerCase(),
                    o = a.data[r] ?? a.data[r.split("-")[0]],
                    d = eu.safeParse(o)
                  if (d.success)
                    try {
                      var c, u, p, m
                      let e, l
                      return (
                        (c = d.data),
                        (u = n),
                        (p = t),
                        (m = s),
                        (e = (e) =>
                          u.formatters
                            .getMessageFormat(e, u.locale, void 0, { ignoreTag: !0 })
                            .formatToParts({ pluginName: p })
                            .map((e) => e.value)
                            .join("")),
                        (l = (l) =>
                          l.map((l) => {
                            let n
                            if ("string" == typeof l) return e(l)
                            let t = e(l.text)
                            switch (l.url) {
                              case "{termsOfServiceUrl}":
                                n = m?.termsOfServiceUrl
                                break
                              case "{privacyPolicyUrl}":
                                n = m?.privacyPolicyUrl
                                break
                              default:
                                n = l.url
                            }
                            let s = eo.safeParse(n)
                            return s.success ? { text: t, url: s.data } : t
                          })),
                        {
                          title: e(c.title),
                          connectLabel: e(c.connectLabel),
                          description: c.description.map((n) => (Array.isArray(n) ? l(n) : { ...n, text: e(n.text) })),
                          disclaimer: c.disclaimer.map(l),
                        }
                      )
                    } catch {
                      return
                    }
                })(
                  eR.getDynamicConfig("3808083031").value,
                  (0, p.hy)(lt.plugin),
                  eO,
                  (0, m.V)(lt),
                  lt.plugin.interface,
                )),
          (W[89] = eO),
          (W[90] = e0),
          (W[91] = eT),
          (W[92] = ln),
          (W[93] = lt),
          (W[94] = ls),
          (W[95] = eR),
          (W[96] = D))
        : (D = W[96])
      let lo = D
      if (null != lo) {
        let e,
          l,
          n = eJ || la
        return (
          W[97] !== ef
            ? ((e = () => {
                ef()
              }),
              (W[97] = ef),
              (W[98] = e))
            : (e = W[98]),
          W[99] !== ll ||
          W[100] !== em ||
          W[101] !== eM ||
          W[102] !== lt ||
          W[103] !== lo ||
          W[104] !== n ||
          W[105] !== e
            ? ((l = (0, t.jsx)(ev, {
                content: lo,
                installOptions: em,
                plugin: lt,
                disabled: n,
                isInstalling: eM,
                onInstall: e,
                onOpenChange: ll,
              })),
              (W[99] = ll),
              (W[100] = em),
              (W[101] = eM),
              (W[102] = lt),
              (W[103] = lo),
              (W[104] = n),
              (W[105] = e),
              (W[106] = l))
            : (l = W[106]),
          l
        )
      }
      let ld = null
      if ("installation-unavailable" === e1) {
        let e
        ;(W[107] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(h.A, { ...ei.H.unavailableExplanation })), (W[107] = e))
          : (e = W[107]),
          (ld = e))
      } else if ("connector-unavailable" === e1) {
        let e
        ;(W[108] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(h.A, { id: "plugins.install.connectorUnavailable", defaultMessage: "App unavailable" })),
            (W[108] = e))
          : (e = W[108]),
          (ld = e))
      }
      if (eM) {
        let e, l
        ;(W[109] !== lt ? ((e = (0, m.V)(lt)), (W[109] = lt), (W[110] = e)) : (e = W[110]),
          W[111] !== e
            ? ((l = (0, t.jsx)(h.A, {
                id: "plugins.installModal.installing",
                defaultMessage: "Installing {pluginName}",
                values: { pluginName: e },
              })),
              (W[111] = e),
              (W[112] = l))
            : (l = W[112]),
          (P = l))
      } else if ("disabled-by-admin" === e1) {
        let e, l, n
        W[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(R.A, { className: "icon-sm" })), (W[113] = e))
          : (e = W[113])
        let s = eK ? eq?.plugin.disabledReason : null
        ;(W[114] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, t.jsx)(h.A, { id: "plugins.detail.disabledByAdminButton", defaultMessage: "Disabled by admin" })),
            (W[114] = l))
          : (l = W[114]),
          W[115] !== s
            ? ((n = (0, t.jsxs)(t.Fragment, { children: [e, (0, t.jsx)($.z, { disabledReason: s, children: l })] })),
              (W[115] = s),
              (W[116] = n))
            : (n = W[116]),
          (P = n))
      } else if ("installation-unavailable" === e1) {
        let e
        ;(W[117] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(h.A, { ...ei.H.unavailable })), (W[117] = e))
          : (e = W[117]),
          (P = e))
      } else {
        let e, l
        ;(W[118] !== lt ? ((e = (0, m.V)(lt)), (W[118] = lt), (W[119] = e)) : (e = W[119]),
          W[120] !== e
            ? ((l = (0, t.jsx)(h.A, {
                id: "plugins.installModal.install",
                defaultMessage: "Install {pluginName}",
                values: { pluginName: e },
              })),
              (W[120] = e),
              (W[121] = l))
            : (l = W[121]),
          (P = l))
      }
      let lc = !eM
      W[122] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = { "aria-describedby": void 0, style: { maxHeight: eN, width: 480 } }), (W[122] = U))
        : (U = W[122])
      let lu = "needsApps" === ln ? "top-5 right-5 text-secondary" : void 0,
        lp = "needsApps" === ln ? "gap-0 overflow-hidden p-0" : "gap-6 overflow-hidden px-6 pt-8 pb-6"
      return (
        W[123] !== ln
          ? ((L = "needsApps" === ln ? { maxHeight: eN, padding: 0 } : { maxHeight: eN }), (W[123] = ln), (W[124] = L))
          : (L = W[124]),
        W[125] !== ln || W[126] !== lt
          ? ((V = "details" === ln ? (0, t.jsx)(eD, { plugin: lt }) : null), (W[125] = ln), (W[126] = lt), (W[127] = V))
          : (V = W[127]),
        W[128] !== eH ||
        W[129] !== lr ||
        W[130] !== e9 ||
        W[131] !== ll ||
        W[132] !== er ||
        W[133] !== li ||
        W[134] !== eW ||
        W[135] !== la ||
        W[136] !== eV ||
        W[137] !== eg ||
        W[138] !== ew ||
        W[139] !== ek ||
        W[140] !== ln ||
        W[141] !== lt ||
        W[142] !== e5 ||
        W[143] !== e6 ||
        W[144] !== eA.kind ||
        W[145] !== eA.requiredApps ||
        W[146] !== eA.requiredBrowserExtensions ||
        W[147] !== c ||
        W[148] !== ls
          ? ((q =
              "needsApps" === ln
                ? (0, t.jsx)(eP, {
                    detailsTo: (0, K.CL)(lt, {
                      hostId: er,
                      browseSearch: eV.search,
                      breadcrumb: eV.pathname.startsWith("/settings/") ? "settings" : void 0,
                    }),
                    appInstallBlockedReasonsById: eH,
                    appOrder: e6?.map(e_),
                    isAppBlockedReasonLoading: eW,
                    onConnectRequiredApp: eg,
                    onOpenChange: ll,
                    onTryInChat: ew,
                    onViewDetails: ek,
                    plugin: lt,
                    requiredApps: "needsApps" === eA.kind ? eA.requiredApps : [],
                    requiredBrowserExtensions: "needsApps" === eA.kind ? eA.requiredBrowserExtensions : [],
                  })
                : "details" === ln
                  ? (0, t.jsx)(S.Q, {
                      className: "relative grid min-h-0 flex-1 overflow-hidden",
                      fadeClassName: "inset-x-0",
                      scrollClassName:
                        "min-h-0 overflow-y-auto [&:has([data-plugin-description-transitioning])]:[overflow-anchor:none] group-data-[can-scroll-down=true]:pb-7",
                      children:
                        null != lr
                          ? (0, t.jsx)(v.RZ, { blurbs: lr, variant: "consent" })
                          : (0, t.jsx)(eU, {
                              disclosureData: c ? e9 : void 0,
                              hostId: er,
                              installLockedComputerUse: li,
                              isLoadingDisclosureData: la,
                              onInstallLockedComputerUseChange: (e) => {
                                eB({ enabled: e, pluginId: lt.plugin.id })
                              },
                              plugin: lt,
                              pluginDetail: e5,
                              shouldShowInstallDisclosure: c,
                              showLockedComputerUseInstall: ls,
                            }),
                    })
                  : null),
            (W[128] = eH),
            (W[129] = lr),
            (W[130] = e9),
            (W[131] = ll),
            (W[132] = er),
            (W[133] = li),
            (W[134] = eW),
            (W[135] = la),
            (W[136] = eV),
            (W[137] = eg),
            (W[138] = ew),
            (W[139] = ek),
            (W[140] = ln),
            (W[141] = lt),
            (W[142] = e5),
            (W[143] = e6),
            (W[144] = eA.kind),
            (W[145] = eA.requiredApps),
            (W[146] = eA.requiredBrowserExtensions),
            (W[147] = c),
            (W[148] = ls),
            (W[149] = q))
          : (q = W[149]),
        W[150] !== lr ||
        W[151] !== ll ||
        W[152] !== ld ||
        W[153] !== P ||
        W[154] !== li ||
        W[155] !== eJ ||
        W[156] !== eM ||
        W[157] !== la ||
        W[158] !== e0 ||
        W[159] !== ef ||
        W[160] !== ln ||
        W[161] !== ls
          ? ((G =
              "details" === ln
                ? (0, t.jsx)(i.m, {
                    content: ld,
                    disabled: null == ld,
                    children: (0, t.jsxs)("div", {
                      className: "flex w-full flex-col gap-2",
                      children: [
                        (0, t.jsx)(N.$, {
                          color: "primary",
                          size: "large",
                          className: "w-full justify-center",
                          disabled: e0 || eJ || la,
                          loading: eM,
                          onClick: () => {
                            ef(ls ? li : void 0)
                          },
                          children: P,
                        }),
                        null != lr ? (0, t.jsx)(v._S, { disabled: eM, onClick: () => ll(!1) }) : null,
                      ],
                    }),
                  })
                : null),
            (W[150] = lr),
            (W[151] = ll),
            (W[152] = ld),
            (W[153] = P),
            (W[154] = li),
            (W[155] = eJ),
            (W[156] = eM),
            (W[157] = la),
            (W[158] = e0),
            (W[159] = ef),
            (W[160] = ln),
            (W[161] = ls),
            (W[162] = G))
          : (G = W[162]),
        W[163] !== lp || W[164] !== L || W[165] !== V || W[166] !== q || W[167] !== G
          ? ((H = (0, t.jsxs)(_.R4, { className: lp, style: L, children: [V, q, G] })),
            (W[163] = lp),
            (W[164] = L),
            (W[165] = V),
            (W[166] = q),
            (W[167] = G),
            (W[168] = H))
          : (H = W[168]),
        W[169] !== ll || W[170] !== eM || W[171] !== lc || W[172] !== lu || W[173] !== H
          ? ((Z = (0, t.jsx)(M.lG, {
              open: !0,
              onOpenChange: ll,
              shouldIgnoreClickOutside: eM,
              showDialogClose: lc,
              size: "default",
              contentClassName: "h-fit max-w-[calc(100vw-2rem)] overflow-hidden",
              contentProps: U,
              dialogCloseClassName: lu,
              children: H,
            })),
            (W[169] = ll),
            (W[170] = eM),
            (W[171] = lc),
            (W[172] = lu),
            (W[173] = H),
            (W[174] = Z))
          : (Z = W[174]),
        Z
      )
    }
    function e_(e) {
      return e.id
    }
    function eI(e) {
      return {
        blurbs: null == e.personalization_toggle_blurb ? e.blurbs : [e.personalization_toggle_blurb, ...e.blurbs],
      }
    }
    function eS(e) {
      return { category: null, description: e.description, id: e.appId, installUrl: e.installUrl, name: e.name }
    }
    function eD(e) {
      let l,
        n,
        i,
        a,
        r,
        o,
        d,
        c = (0, s.c)(16),
        { plugin: u } = e
      c[0] !== u.plugin.interface?.developerName
        ? ((l = u.plugin.interface?.developerName?.trim()), (c[0] = u.plugin.interface?.developerName), (c[1] = l))
        : (l = c[1])
      let p = l
      return (
        c[2] !== u ? ((n = (0, t.jsx)(es.S, { plugin: u })), (c[2] = u), (c[3] = n)) : (n = c[3]),
        c[4] !== u ? ((i = (0, m.V)(u)), (c[4] = u), (c[5] = i)) : (i = c[5]),
        c[6] !== i
          ? ((a = (0, t.jsx)(M.L3, {
              asChild: !0,
              children: (0, t.jsx)("div", {
                className: "heading-dialog font-semibold",
                children: (0, t.jsx)(h.A, {
                  id: "plugins.installModal.title",
                  defaultMessage: "Install {pluginName}",
                  values: { pluginName: i },
                }),
              }),
            })),
            (c[6] = i),
            (c[7] = a))
          : (a = c[7]),
        c[8] !== p
          ? ((r = p
              ? (0, t.jsx)("div", {
                  className: "text-sm text-secondary",
                  children: (0, t.jsx)(h.A, {
                    id: "plugins.installModal.developedBy",
                    defaultMessage: "Developed by {developerName}",
                    values: { developerName: p },
                  }),
                })
              : null),
            (c[8] = p),
            (c[9] = r))
          : (r = c[9]),
        c[10] !== a || c[11] !== r
          ? ((o = (0, t.jsxs)("div", { className: "flex flex-col items-center gap-1 text-center", children: [a, r] })),
            (c[10] = a),
            (c[11] = r),
            (c[12] = o))
          : (o = c[12]),
        c[13] !== n || c[14] !== o
          ? ((d = (0, t.jsxs)("div", { className: "flex flex-col items-center gap-4", children: [n, o] })),
            (c[13] = n),
            (c[14] = o),
            (c[15] = d))
          : (d = c[15]),
        d
      )
    }
    function eP(e) {
      let l,
        n,
        i,
        a,
        r,
        o,
        d = (0, s.c)(26),
        {
          detailsTo: u,
          appInstallBlockedReasonsById: p,
          appOrder: m,
          isAppBlockedReasonLoading: g,
          onConnectRequiredApp: f,
          onOpenChange: x,
          onTryInChat: h,
          onViewDetails: b,
          plugin: y,
          requiredApps: v,
          requiredBrowserExtensions: j,
        } = e,
        C = y.plugin.name === c.kJv && (0, c.foP)(y.marketplaceName) && 0 === v.length && 1 === j.length ? j[0] : void 0
      ;(d[0] !== C || d[1] !== y
        ? ((l = (0, t.jsx)(eT, { browserExtension: C, plugin: y })), (d[0] = C), (d[1] = y), (d[2] = l))
        : (l = d[2]),
        d[3] !== p || d[4] !== m || d[5] !== g || d[6] !== f || d[7] !== v
          ? ((n = (0, t.jsx)(eZ, {
              appInstallBlockedReasonsById: p,
              appOrder: m,
              isAppBlockedReasonLoading: g,
              onConnectRequiredApp: f,
              requiredApps: v,
            })),
            (d[3] = p),
            (d[4] = m),
            (d[5] = g),
            (d[6] = f),
            (d[7] = v),
            (d[8] = n))
          : (n = d[8]))
      let w = null != C
      return (
        d[9] !== j || d[10] !== w
          ? ((i = (0, t.jsx)(eQ, { requiredBrowserExtensions: j, showInstallationStatus: w })),
            (d[9] = j),
            (d[10] = w),
            (d[11] = i))
          : (i = d[11]),
        d[12] !== n || d[13] !== i
          ? ((a = (0, t.jsxs)(S.Q, {
              className: "relative grid min-h-0 flex-1 px-6",
              fadeClassName: "inset-x-6",
              scrollClassName: "min-h-0 overflow-y-auto group-data-[can-scroll-down=true]:pb-6",
              children: [n, i],
            })),
            (d[12] = n),
            (d[13] = i),
            (d[14] = a))
          : (a = d[14]),
        d[15] !== C || d[16] !== u || d[17] !== x || d[18] !== h || d[19] !== b || d[20] !== y
          ? ((r = (0, t.jsx)(eE, {
              detailsTo: u,
              browserExtension: C,
              onOpenChange: x,
              onTryInChat: h,
              onViewDetails: b,
              plugin: y,
            })),
            (d[15] = C),
            (d[16] = u),
            (d[17] = x),
            (d[18] = h),
            (d[19] = b),
            (d[20] = y),
            (d[21] = r))
          : (r = d[21]),
        d[22] !== l || d[23] !== a || d[24] !== r
          ? ((o = (0, t.jsxs)("div", { className: "flex max-h-full flex-col overflow-hidden", children: [l, a, r] })),
            (d[22] = l),
            (d[23] = a),
            (d[24] = r),
            (d[25] = o))
          : (o = d[25]),
        o
      )
    }
    function eT(e) {
      let l,
        n,
        i,
        a,
        r,
        d,
        c,
        u = (0, s.c)(16),
        { browserExtension: p, plugin: g } = e
      u[0] !== p || u[1] !== g
        ? ((l = null == p ? (0, m.V)(g) : o.Ypn[p.browserFamily].shortDisplayName), (u[0] = p), (u[1] = g), (u[2] = l))
        : (l = u[2])
      let f = l
      return (
        u[3] !== p
          ? ((n = null == p ? null : (0, t.jsx)(eK, { browserExtension: p, className: "size-full object-contain" })),
            (u[3] = p),
            (u[4] = n))
          : (n = u[4]),
        u[5] !== g || u[6] !== n
          ? ((i = (0, t.jsx)(es.S, { plugin: g, children: n })), (u[5] = g), (u[6] = n), (u[7] = i))
          : (i = u[7]),
        u[8] !== f
          ? ((a = (0, t.jsx)(M.L3, {
              asChild: !0,
              children: (0, t.jsx)("div", {
                className: "text-lg leading-6 font-semibold text-default",
                children: (0, t.jsx)(h.A, {
                  id: "plugins.installModal.needsApps.title",
                  defaultMessage: "Connect your apps to {pluginName}",
                  values: { pluginName: f },
                }),
              }),
            })),
            (u[8] = f),
            (u[9] = a))
          : (a = u[9]),
        u[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)("div", {
              className: "max-w-[432px] text-sm leading-5 text-secondary",
              children: (0, t.jsx)(h.A, {
                id: "plugins.installModal.needsApps.subtitle",
                defaultMessage: "Get more relevant help from the apps you already use. You can always do this later.",
              }),
            })),
            (u[10] = r))
          : (r = u[10]),
        u[11] !== a
          ? ((d = (0, t.jsxs)("div", { className: "flex flex-col items-center gap-1 text-center", children: [a, r] })),
            (u[11] = a),
            (u[12] = d))
          : (d = u[12]),
        u[13] !== i || u[14] !== d
          ? ((c = (0, t.jsxs)("div", {
              className: "flex shrink-0 flex-col items-center gap-4 px-6 pt-9 pb-4",
              children: [i, d],
            })),
            (u[13] = i),
            (u[14] = d),
            (u[15] = c))
          : (c = u[15]),
        c
      )
    }
    function eE(e) {
      let l,
        n,
        i,
        a,
        r = (0, s.c)(16),
        { detailsTo: d, browserExtension: c, onOpenChange: u, onTryInChat: p, onViewDetails: g, plugin: f } = e,
        x = (0, b.$P)(d),
        y = f.plugin.interface?.defaultPrompt
      r[0] !== y ? ((l = (0, ee.Dy)(y)), (r[0] = y), (r[1] = l)) : (l = r[1])
      let v = l
      return null == p && null == g
        ? null
        : (r[2] !== x || r[3] !== u || r[4] !== g || r[5] !== f
            ? ((n =
                null != g
                  ? (0, t.jsx)(N.z, {
                      href: x,
                      color: "outline",
                      size: "default",
                      className: "h-9 rounded-xl px-3 py-2 text-sm leading-5",
                      style: { borderRadius: 12 },
                      onClick: (e) =>
                        (0, J.y)(e, () => {
                          ;(u(!1), g(f))
                        }),
                      children: (0, t.jsx)(h.A, {
                        id: "plugins.installModal.needsApps.viewDetails",
                        defaultMessage: "View details",
                      }),
                    })
                  : null),
              (r[2] = x),
              (r[3] = u),
              (r[4] = g),
              (r[5] = f),
              (r[6] = n))
            : (n = r[6]),
          r[7] !== c || r[8] !== v || r[9] !== u || r[10] !== p || r[11] !== f
            ? ((i =
                null != p
                  ? (0, t.jsxs)(N.$, {
                      color: "primary",
                      size: "default",
                      className: "h-9 rounded-xl px-3 py-2 text-sm leading-5",
                      style: { borderRadius: 12 },
                      onClick: () => {
                        ;(u(!1), p(f, v))
                      },
                      children: [
                        (0, t.jsx)(U.A, { className: "icon-sm" }),
                        (0, t.jsx)(h.A, {
                          id: "plugins.installModal.needsApps.tryInChat",
                          defaultMessage: "Try {pluginName} now",
                          values: { pluginName: null == c ? (0, m.V)(f) : o.Ypn[c.browserFamily].shortDisplayName },
                        }),
                      ],
                    })
                  : null),
              (r[7] = c),
              (r[8] = v),
              (r[9] = u),
              (r[10] = p),
              (r[11] = f),
              (r[12] = i))
            : (i = r[12]),
          r[13] !== n || r[14] !== i
            ? ((a = (0, t.jsxs)("div", {
                className:
                  "flex h-[84px] shrink-0 items-center justify-end gap-2 bg-surface-elevated-secondary px-6 py-6",
                children: [n, i],
              })),
              (r[13] = n),
              (r[14] = i),
              (r[15] = a))
            : (a = r[15]),
          a)
    }
    function eU(e) {
      let l,
        n,
        i,
        a,
        r,
        o,
        d,
        c,
        u,
        p = (0, s.c)(36),
        {
          disclosureData: m,
          hostId: g,
          installLockedComputerUse: f,
          isLoadingDisclosureData: x,
          onInstallLockedComputerUseChange: b,
          plugin: y,
          pluginDetail: v,
          shouldShowInstallDisclosure: j,
          showLockedComputerUseInstall: C,
        } = e
      p[0] !== y
        ? ((l = (function (e) {
            let l = e.plugin.interface?.longDescription?.trim()
            if (l) return l
            let n = e.plugin.interface?.shortDescription?.trim()
            if (n) return n
            let t = e.description?.trim()
            return t || null
          })(y)),
          (p[0] = y),
          (p[1] = l))
        : (l = p[1])
      let w = l
      p[2] !== y.plugin.interface?.capabilities
        ? ((n = y.plugin.interface?.capabilities ?? []), (p[2] = y.plugin.interface?.capabilities), (p[3] = n))
        : (n = p[3])
      let k = n,
        A = null != m && m.blurbs.length > 0,
        N = !j || !A
      return (
        p[4] !== y || p[5] !== N
          ? ((i = N ? (0, t.jsx)(e1, { plugin: y }) : null), (p[4] = y), (p[5] = N), (p[6] = i))
          : (i = p[6]),
        p[7] !== w || p[8] !== y.plugin.interface?.longDescription || p[9] !== N
          ? ((a =
              N && w
                ? (0, t.jsxs)(e2, {
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-sm font-medium text-default",
                        children: (0, t.jsx)(h.A, { id: "plugins.installModal.about", defaultMessage: "About" }),
                      }),
                      y.plugin.interface?.longDescription?.trim()
                        ? (0, t.jsx)(W.W, { openTarget: "external-browser", children: w }, w)
                        : (0, t.jsx)("div", { className: "text-sm text-secondary", children: w }),
                    ],
                  })
                : null),
            (p[7] = w),
            (p[8] = y.plugin.interface?.longDescription),
            (p[9] = N),
            (p[10] = a))
          : (a = p[10]),
        p[11] !== g || p[12] !== y || p[13] !== v || p[14] !== N
          ? ((r = N && null != v ? (0, t.jsx)(eO, { hostId: g, plugin: y, pluginDetail: v }) : null),
            (p[11] = g),
            (p[12] = y),
            (p[13] = v),
            (p[14] = N),
            (p[15] = r))
          : (r = p[15]),
        p[16] !== f || p[17] !== b || p[18] !== v || p[19] !== N || p[20] !== C
          ? ((o = N && null != v && C ? (0, t.jsx)(ez, { enabled: f, onChange: b }) : null),
            (p[16] = f),
            (p[17] = b),
            (p[18] = v),
            (p[19] = N),
            (p[20] = C),
            (p[21] = o))
          : (o = p[21]),
        p[22] !== k || p[23] !== N
          ? ((d =
              N && k.length > 0
                ? (0, t.jsxs)(e2, {
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-sm font-medium text-default",
                        children: (0, t.jsx)(h.A, {
                          id: "plugins.installModal.capabilities",
                          defaultMessage: "Capabilities",
                        }),
                      }),
                      (0, t.jsx)("div", { className: "flex flex-wrap gap-2", children: k.map(eR) }),
                    ],
                  })
                : null),
            (p[22] = k),
            (p[23] = N),
            (p[24] = d))
          : (d = p[24]),
        p[25] !== m || p[26] !== x || p[27] !== j
          ? ((c = j ? (0, t.jsx)(eH, { disclosureData: m, isLoadingDisclosureData: x }) : null),
            (p[25] = m),
            (p[26] = x),
            (p[27] = j),
            (p[28] = c))
          : (c = p[28]),
        p[29] !== i || p[30] !== a || p[31] !== r || p[32] !== o || p[33] !== d || p[34] !== c
          ? ((u = (0, t.jsxs)("div", {
              className: "rounded-2xl border border-default px-4 py-2",
              children: [i, a, r, o, d, c],
            })),
            (p[29] = i),
            (p[30] = a),
            (p[31] = r),
            (p[32] = o),
            (p[33] = d),
            (p[34] = c),
            (p[35] = u))
          : (u = p[35]),
        u
      )
    }
    function eR(e) {
      return (0, t.jsx)(A.E, { variant: "outline", children: e }, e)
    }
    function eO(e) {
      let l,
        n,
        i,
        a,
        r,
        o,
        d,
        c,
        u = (0, s.c)(21),
        { hostId: p, plugin: m, pluginDetail: g } = e,
        f = (0, x.A)()
      u[0] !== p || u[1] !== m
        ? ((l = { enabled: !0, hostId: p, plugin: m }), (u[0] = p), (u[1] = m), (u[2] = l))
        : (l = u[2])
      let b = (0, H.V)(l),
        y = g.apps
      if (u[3] !== b || u[4] !== f || u[5] !== g.apps || u[6] !== g.mcpServers || u[7] !== g.skills) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          let e = [
            {
              id: "apps",
              items: y.map(eV),
              title: (0, t.jsx)(h.A, { id: "plugins.installModal.includes.apps", defaultMessage: "Apps" }),
            },
            {
              id: "browserExtensions",
              items: (b ?? []).map((e) => f.formatMessage((0, Z.b)(e.browserFamily))),
              title: (0, t.jsx)(h.A, {
                id: "plugins.installModal.includes.browserExtensions",
                defaultMessage: "Browser extensions",
              }),
            },
            {
              id: "skills",
              items: g.skills.map(eF),
              title: (0, t.jsx)(h.A, { id: "plugins.installModal.includes.skills", defaultMessage: "Skills" }),
            },
            {
              id: "mcpServers",
              items: g.mcpServers,
              title: (0, t.jsx)(h.A, { id: "plugins.installModal.includes.mcpServers", defaultMessage: "MCP servers" }),
            },
          ].filter(eB)
          if (0 === e.length) {
            o = null
            break e
          }
          ;((n = e2),
            u[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, t.jsx)("div", {
                  className: "text-sm font-medium text-default",
                  children: (0, t.jsx)(h.A, { id: "plugins.installModal.includes", defaultMessage: "Includes" }),
                })),
                (u[13] = r))
              : (r = u[13]),
            (i = "flex flex-col gap-3"),
            (a = e.map(eL)))
        }
        ;((u[3] = b),
          (u[4] = f),
          (u[5] = g.apps),
          (u[6] = g.mcpServers),
          (u[7] = g.skills),
          (u[8] = n),
          (u[9] = i),
          (u[10] = a),
          (u[11] = r),
          (u[12] = o))
      } else ((n = u[8]), (i = u[9]), (a = u[10]), (r = u[11]), (o = u[12]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (u[14] !== i || u[15] !== a
            ? ((d = (0, t.jsx)("div", { className: i, children: a })), (u[14] = i), (u[15] = a), (u[16] = d))
            : (d = u[16]),
          u[17] !== n || u[18] !== r || u[19] !== d
            ? ((c = (0, t.jsxs)(n, { children: [r, d] })), (u[17] = n), (u[18] = r), (u[19] = d), (u[20] = c))
            : (c = u[20]),
          c)
    }
    function eL(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex flex-col gap-2",
          children: [
            (0, t.jsx)("div", {
              className: "text-xs font-medium tracking-wide text-secondary uppercase",
              children: e.title,
            }),
            (0, t.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: e.items.map((l) => (0, t.jsx)(A.E, { variant: "outline", children: l }, `${e.id}-${l}`)),
            }),
          ],
        },
        e.id,
      )
    }
    function eB(e) {
      return e.items.length > 0
    }
    function eF(e) {
      var l = e
      let n = l.interface?.displayName?.trim()
      if (n) return n
      let t = l.name.split(":").pop()
      return (0, u.l)(t || l.name)
    }
    function eV(e) {
      return e.name
    }
    function ez(e) {
      let l,
        n,
        i,
        a,
        r = (0, s.c)(8),
        { enabled: o, onChange: d } = e,
        c = (0, x.A)()
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, t.jsx)("div", {
              className: "text-sm font-medium text-default",
              children: (0, t.jsx)(h.A, {
                id: "plugins.installModal.lockedComputerUse.title",
                defaultMessage: "Locked Computer Use",
              }),
            })),
            (r[0] = l))
          : (l = r[0]),
        r[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                l,
                (0, t.jsx)("div", {
                  className: "text-sm text-secondary",
                  children: (0, t.jsx)(h.A, {
                    id: "plugins.installModal.lockedComputerUse.description",
                    defaultMessage: "Let ChatGPT use your Mac when it's locked. <a>Learn more</a>",
                    values: { a: eq },
                  }),
                }),
              ],
            })),
            (r[1] = n))
          : (n = r[1]),
        r[2] !== c
          ? ((i = c.formatMessage({
              id: "plugins.installModal.lockedComputerUse.toggle",
              defaultMessage: "Install Locked Computer Use",
            })),
            (r[2] = c),
            (r[3] = i))
          : (i = r[3]),
        r[4] !== o || r[5] !== d || r[6] !== i
          ? ((a = (0, t.jsx)(e2, {
              children: (0, t.jsxs)("div", {
                className: "flex items-center justify-between gap-4",
                children: [n, (0, t.jsx)(P.l, { checked: o, ariaLabel: i, onChange: d })],
              }),
            })),
            (r[4] = o),
            (r[5] = d),
            (r[6] = i),
            (r[7] = a))
          : (a = r[7]),
        a
      )
    }
    function eq(e) {
      return (0, t.jsx)("a", {
        className: "inline-flex text-link-primary!",
        href: k.DU,
        target: "_blank",
        rel: "noreferrer",
        onClick: eG,
        children: e,
      })
    }
    function eG(e) {
      ;(0, I.PQ)({ event: e, href: k.DU, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function eH(e) {
      let l,
        n = (0, s.c)(3),
        { disclosureData: i, isLoadingDisclosureData: a } = e
      if (a) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(e2, { children: (0, t.jsx)(e$, {}) })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      return null == i || 0 === i.blurbs.length
        ? null
        : (n[1] !== i.blurbs
            ? ((l = (0, t.jsx)(e2, { children: (0, t.jsx)(v.RZ, { blurbs: i.blurbs, variant: "plugin" }) })),
              (n[1] = i.blurbs),
              (n[2] = l))
            : (l = n[2]),
          l)
    }
    function eZ(e) {
      let l,
        n,
        i,
        a,
        r,
        o = (0, s.c)(23),
        {
          appInstallBlockedReasonsById: d,
          appOrder: c,
          isAppBlockedReasonLoading: u,
          onConnectRequiredApp: p,
          requiredApps: m,
        } = e,
        g = (0, x.A)()
      o[0] !== c ? ((l = new Map(c?.map(eY))), (o[0] = c), (o[1] = l)) : (l = o[1])
      let f = l
      if (o[2] !== d || o[3] !== f || o[4] !== g || o[5] !== u || o[6] !== p || o[7] !== m) {
        a = Symbol.for("react.early_return_sentinel")
        e: {
          let e, l, s
          o[11] !== d ? ((e = (e) => "disabled-by-admin" !== d[e.appId]), (o[11] = d), (o[12] = e)) : (e = o[12])
          let r = m.filter(e)
          if (
            (o[13] !== f
              ? ((l = (e, l) =>
                  (f.get(e.appId) ?? Number.MAX_SAFE_INTEGER) - (f.get(l.appId) ?? Number.MAX_SAFE_INTEGER)),
                (o[13] = f),
                (o[14] = l))
              : (l = o[14]),
            r.sort(l),
            0 === r.length)
          ) {
            a = null
            break e
          }
          ;((n = "flex flex-col"),
            o[15] !== d || o[16] !== g || o[17] !== u || o[18] !== p
              ? ((s = (e) => {
                  let l = d[e.appId]
                  return (0, t.jsx)(
                    V.S,
                    {
                      app: eX(e),
                      cardIconContainerVariant: "outline",
                      className: "min-h-[72px] px-0 py-3 hover:!bg-transparent",
                      installActionDisabled: u || null != l || "pending" !== e.status,
                      installActionLabel: (function (e, l) {
                        switch (e) {
                          case "connected":
                            return l.formatMessage({
                              id: "plugins.installModal.requiredApps.connected",
                              defaultMessage: "Connected",
                            })
                          case "launching":
                          case "waitingForCallback":
                            return l.formatMessage({
                              id: "plugins.installModal.requiredApps.connecting",
                              defaultMessage: "Opened link",
                            })
                          case "pending":
                            return l.formatMessage({
                              id: "plugins.installModal.requiredApps.connect",
                              defaultMessage: "Connect",
                            })
                        }
                      })(e.status, g),
                      isConnectingApp: "launching" === e.status || "waitingForCallback" === e.status,
                      updatingAppId: null,
                      onInstallApp: () => p(e.appId),
                    },
                    e.appId,
                  )
                }),
                (o[15] = d),
                (o[16] = g),
                (o[17] = u),
                (o[18] = p),
                (o[19] = s))
              : (s = o[19]),
            (i = r.map(s)))
        }
        ;((o[2] = d), (o[3] = f), (o[4] = g), (o[5] = u), (o[6] = p), (o[7] = m), (o[8] = n), (o[9] = i), (o[10] = a))
      } else ((n = o[8]), (i = o[9]), (a = o[10]))
      return a !== Symbol.for("react.early_return_sentinel")
        ? a
        : (o[20] !== n || o[21] !== i
            ? ((r = (0, t.jsx)("div", { className: n, children: i })), (o[20] = n), (o[21] = i), (o[22] = r))
            : (r = o[22]),
          r)
    }
    function eY(e, l) {
      return [e, l]
    }
    function eQ(e) {
      let l,
        n,
        i,
        a,
        r = (0, s.c)(15),
        { requiredBrowserExtensions: o, showInstallationStatus: c } = e,
        u = (0, d.gh)(B.u),
        p = (0, x.A)()
      ;(r[0] !== o || r[1] !== c ? ((l = c ? o.map(eW) : []), (r[0] = o), (r[1] = c), (r[2] = l)) : (l = r[2]),
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = { refetchOnWindowFocus: "always" }), (r[3] = n))
          : (n = r[3]))
      let m = (0, q.D6)(l, n)
      if (0 === o.length) return null
      if (r[4] !== m || r[5] !== p || r[6] !== o || r[7] !== u) {
        let e
        ;(r[9] !== m || r[10] !== p || r[11] !== u
          ? ((e = (e) => {
              let l = m.get(e.browserFamily)
              return (0, t.jsxs)(
                "div",
                {
                  className: "flex min-h-[72px] items-center justify-between gap-4 py-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex min-w-0 flex-1 items-center gap-4",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-default bg-surface-secondary",
                          children: (0, t.jsx)(eK, { browserExtension: e, className: "size-8 object-contain" }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            (0, t.jsx)("div", {
                              className: "truncate text-sm leading-6 font-medium text-default",
                              children: (0, t.jsx)(h.A, { ...(0, Z.b)(e.browserFamily) }),
                            }),
                            (0, t.jsx)("div", {
                              className: "truncate text-sm leading-5 text-tertiary",
                              children: (0, t.jsx)(h.A, { ...(0, Z.i)(e.browserFamily) }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l?.isInstalled === !0
                      ? (0, t.jsx)(G.y, { status: l })
                      : (0, t.jsx)(N.z, {
                          href: e.storeUrl ?? void 0,
                          color: "outline",
                          size: "toolbar",
                          className: "h-9 min-w-20 shrink-0 justify-center rounded-xl px-3 text-sm",
                          disabled: null == e.storeUrl,
                          onClick: (l) => {
                            if (
                              null == e.storeUrl ||
                              0 !== l.button ||
                              l.metaKey ||
                              l.ctrlKey ||
                              l.shiftKey ||
                              l.altKey
                            )
                              return
                            let n = L.appServices.chromiumBrowser?.openUrl({
                              browserFamily: e.browserFamily,
                              url: e.storeUrl,
                            })
                            if (null != n) {
                              ;(l.preventDefault(),
                                n.catch(() => {
                                  u.get(D.Id).danger(
                                    p.formatMessage({
                                      id: "settings.computerUse.browser.openExtensionStoreError",
                                      defaultMessage: "Unable to open browser extension page",
                                    }),
                                    {
                                      errorAnalytics: {
                                        toastId: "settings.computerUse.browser.openExtensionStoreError",
                                      },
                                    },
                                  )
                                }))
                              return
                            }
                            ;(0, I.PQ)({
                              event: l,
                              href: e.storeUrl,
                              initiator: "open_in_browser_bridge",
                              openTarget: "external-browser",
                            })
                          },
                          children: (0, t.jsx)(h.A, {
                            id: "plugins.installModal.openBrowserExtension",
                            defaultMessage: "Open",
                          }),
                        }),
                  ],
                },
                e.browserFamily,
              )
            }),
            (r[9] = m),
            (r[10] = p),
            (r[11] = u),
            (r[12] = e))
          : (e = r[12]),
          (i = o.map(e)),
          (r[4] = m),
          (r[5] = p),
          (r[6] = o),
          (r[7] = u),
          (r[8] = i))
      } else i = r[8]
      return (
        r[13] !== i
          ? ((a = (0, t.jsx)("div", { className: "flex flex-col", children: i })), (r[13] = i), (r[14] = a))
          : (a = r[14]),
        a
      )
    }
    function eW(e) {
      return { browserFamily: e.browserFamily }
    }
    function eK(e) {
      let l,
        n,
        i,
        r,
        o = (0, s.c)(11),
        { browserExtension: d, className: c } = e,
        u = (0, x.A)()
      return (
        o[0] !== d.browserFamily || o[1] !== u
          ? ((l = u.formatMessage((0, Z.b)(d.browserFamily))), (o[0] = d.browserFamily), (o[1] = u), (o[2] = l))
          : (l = o[2]),
        o[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = { asset: a, "aria-hidden": !1 }), (o[3] = n))
          : (n = o[3]),
        o[4] !== d.browserFamily || o[5] !== d.iconUrl
          ? ((i = d.iconUrl ?? (0, C.$)(d.browserFamily)), (o[4] = d.browserFamily), (o[5] = d.iconUrl), (o[6] = i))
          : (i = o[6]),
        o[7] !== c || o[8] !== l || o[9] !== i
          ? ((r = (0, t.jsx)(w.R, { alt: l, className: c, fallback: n, logoUrl: i })),
            (o[7] = c),
            (o[8] = l),
            (o[9] = i),
            (o[10] = r))
          : (r = o[10]),
        r
      )
    }
    function e$() {
      let e,
        l = (0, s.c)(1)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("div", { children: Array.from({ length: 3 }).map(eJ) })), (l[0] = e))
          : (e = l[0]),
        e
      )
    }
    function eJ(e, l) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1 border-t border-default py-2.5 first:border-none first:pt-0 last:pb-0",
          children: [
            (0, t.jsx)("div", { className: "h-3 w-36 rounded bg-border" }),
            (0, t.jsx)("div", { className: "h-2.5 w-full rounded bg-border" }),
            (0, t.jsx)("div", { className: "h-2.5 w-4/5 rounded bg-border" }),
          ],
        },
        l,
      )
    }
    function eX(e) {
      return {
        appMetadata: null,
        branding: null,
        description: e.description,
        distributionChannel: null,
        id: e.appId,
        installUrl: e.installUrl,
        isAccessible: !1,
        isEnabled: !1,
        labels: null,
        logoUrl: e.logoUrl,
        logoUrlDark: e.logoUrlDark,
        iconAssets: null,
        iconDarkAssets: null,
        name: e.name,
        pluginDisplayNames: [],
      }
    }
    function e1(e) {
      let l,
        n,
        i,
        a,
        r,
        o,
        d = (0, s.c)(14),
        { plugin: c } = e
      return (
        d[0] !== c ? ((l = (0, m.V)(c)), (d[0] = c), (d[1] = l)) : (l = d[1]),
        d[2] !== l
          ? ((n = (0, t.jsx)("div", { className: "text-sm font-medium text-default", children: l })),
            (d[2] = l),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== c.marketplaceName
          ? ((i =
              c.marketplaceName.length > 0
                ? (0, t.jsx)(A.E, { variant: "outline", children: c.marketplaceName })
                : null),
            (d[4] = c.marketplaceName),
            (d[5] = i))
          : (i = d[5]),
        d[6] !== n || d[7] !== i
          ? ((a = (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [n, i] })),
            (d[6] = n),
            (d[7] = i),
            (d[8] = a))
          : (a = d[8]),
        d[9] !== c ? ((r = (0, t.jsx)(e0, { plugin: c })), (d[9] = c), (d[10] = r)) : (r = d[10]),
        d[11] !== a || d[12] !== r
          ? ((o = (0, t.jsxs)(e2, { children: [a, r] })), (d[11] = a), (d[12] = r), (d[13] = o))
          : (o = d[13]),
        o
      )
    }
    function e0(e) {
      let l,
        n,
        i,
        a,
        r,
        o = (0, s.c)(11),
        { plugin: d } = e
      o[0] !== d.plugin.interface?.developerName
        ? ((l = d.plugin.interface?.developerName?.trim()), (o[0] = d.plugin.interface?.developerName), (o[1] = l))
        : (l = o[1])
      let c = l
      o[2] !== d.plugin.interface?.category
        ? ((n = d.plugin.interface?.category?.trim()), (o[2] = d.plugin.interface?.category), (o[3] = n))
        : (n = o[3])
      let u = n
      return null == c && null == u
        ? null
        : (o[4] !== c
            ? ((i = c
                ? (0, t.jsx)("div", {
                    children: (0, t.jsx)(h.A, {
                      id: "plugins.installModal.metadata.developer",
                      defaultMessage: "By {developerName}",
                      values: { developerName: c },
                    }),
                  })
                : null),
              (o[4] = c),
              (o[5] = i))
            : (i = o[5]),
          o[6] !== u
            ? ((a = u
                ? (0, t.jsx)("div", {
                    children: (0, t.jsx)(h.A, {
                      id: "plugins.installModal.metadata.category",
                      defaultMessage: "Category: {category}",
                      values: { category: u },
                    }),
                  })
                : null),
              (o[6] = u),
              (o[7] = a))
            : (a = o[7]),
          o[8] !== i || o[9] !== a
            ? ((r = (0, t.jsxs)("div", { className: "flex flex-col gap-1 text-sm text-secondary", children: [i, a] })),
              (o[8] = i),
              (o[9] = a),
              (o[10] = r))
            : (r = o[10]),
          r)
    }
    function e2(e) {
      let l,
        n = (0, s.c)(2),
        { children: i } = e
      return (
        n[0] !== i
          ? ((l = (0, t.jsx)("div", {
              className: "flex flex-col gap-2 border-b border-default py-3 last:border-none",
              children: i,
            })),
            (n[0] = i),
            (n[1] = l))
          : (l = n[1]),
        l
      )
    }
  },
  bPLJ(e, l, n) {
    n.d(l, { W: () => M })
    var t = n("ABep"),
      s = n("QosV"),
      i = n("on57"),
      a = n("D0fc"),
      r = n("xs0G"),
      o = n("K4Cx"),
      d = n("zd8w"),
      c = n("oyxz"),
      u = n("Wf1j"),
      p = n("ZtSy"),
      m = n("bVeK"),
      g = n("T1PX"),
      f = n("NvEJ"),
      x = n("U6mT"),
      h = n("rCiO"),
      b = n("oeA4"),
      y = n("lsky"),
      v = n("cC4N"),
      j = n("ndwI"),
      C = n("dVri")
    let w = /^ {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/,
      k = { extensions: [(0, C.T)()], mdastExtensions: [(0, j.C)()] },
      A = new y.Dz({
        gfm: !0,
        breaks: !0,
        extensions: [
          {
            name: "plugin-description-footnote",
            level: "block",
            start: (e) => /\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/.exec(e)?.index,
            tokenizer(e) {
              let l = w.exec(e)?.[0]
              if (null == l || (0, v.Y)(l, k).children[0]?.type !== "footnoteDefinition") return
              let n = e.length
              for (let l of e.matchAll(/\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/g))
                if ((0, v.Y)(l[0], k).children[0]?.type === "footnoteDefinition") {
                  n = l.index
                  break
                }
              let t = (0, v.Y)(e.slice(0, n), k).children[0],
                s = t?.type === "footnoteDefinition" ? t.position?.end.offset : void 0
              if (null != s) return { type: "plugin-description-footnote", raw: e.slice(0, s) }
            },
          },
        ],
      }),
      N = {
        ...(0, f.K)({ allowWideBlocks: !1, mediaComponent: void 0 }),
        img: () => null,
        table: function (e) {
          let l,
            n,
            i,
            a = (0, s.c)(7),
            { children: r } = e,
            o = (0, u.A)()
          return (
            a[0] !== o
              ? ((l = o.formatMessage({ id: "plugins.description.table", defaultMessage: "Description table" })),
                (a[0] = o),
                (a[1] = l))
              : (l = a[1]),
            a[2] !== r ? ((n = (0, t.jsx)(h.jh, { children: r })), (a[2] = r), (a[3] = n)) : (n = a[3]),
            a[4] !== l || a[5] !== n
              ? ((i = (0, t.jsx)("div", {
                  className: "my-3 max-w-full overflow-x-auto",
                  role: "region",
                  "aria-label": l,
                  tabIndex: 0,
                  "data-plugin-description-table": !0,
                  children: n,
                })),
                (a[4] = l),
                (a[5] = n),
                (a[6] = i))
              : (i = a[6]),
            i
          )
        },
        p: ({ children: e }) => (0, t.jsx)("p", { className: "my-2 font-content", dir: "auto", children: e }),
        pre: ({ children: e }) =>
          (0, t.jsx)("pre", {
            className:
              "my-3 overflow-x-auto rounded-lg bg-token-text-code-block-background p-3 [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0",
            children: e,
          }),
        code: ({ children: e, inline: l }) =>
          l
            ? (0, t.jsx)("span", {
                className: "inline-markdown",
                "data-markdown-copy": "inline-code",
                dir: "ltr",
                children: e,
              })
            : (0, t.jsx)("code", { className: "font-mono text-sm", children: e }),
      }
    function M(e) {
      let l,
        n,
        u,
        f,
        h,
        y,
        v,
        j,
        C,
        w,
        k,
        M,
        I,
        S,
        D,
        P,
        T,
        E,
        U,
        R,
        O,
        L,
        B = (0, s.c)(53),
        { children: F, openTarget: V } = e,
        z = (0, d.useId)(),
        q = (0, d.useRef)(null),
        G = (0, d.useRef)(null),
        H = (0, d.useRef)(!1)
      B[0] === Symbol.for("react.memo_cache_sentinel") ? ((l = new Set()), (B[0] = l)) : (l = B[0])
      let Z = (0, d.useRef)(l),
        Y = (0, d.useRef)(0),
        Q = (0, g.I)(),
        [W, K] = (0, d.useState)(!1),
        [$, J] = (0, d.useState)(!1),
        X = W ? 0.18 : 0.16,
        ee = W ? 0.09 : 0.16,
        [el, en] = (0, d.useState)(null),
        et = null != el && el.full > el.collapsed
      B[1] !== W
        ? ((n = (e) => {
            for (let e of Z.current) e.removeAttribute("inert")
            Z.current.clear()
            let l = q.current
            if (null == l || W) return
            let n = l.getBoundingClientRect(),
              t = 0 === l.offsetHeight ? 1 : n.height / l.offsetHeight,
              s = n.top + e * t
            for (let e of l.querySelectorAll(
              "a[href], p, ul, ol, li, blockquote, pre, tr, th, td, [data-plugin-description-table]",
            )) {
              let l = e.getBoundingClientRect(),
                n = e.matches("a[href]") ? l.bottom > s : l.top >= s
              !e.hasAttribute("inert") && n && (e.setAttribute("inert", ""), Z.current.add(e))
            }
          }),
          (B[1] = W),
          (B[2] = n))
        : (n = B[2])
      let es = (0, d.useEffectEvent)(n)
      ;(B[3] !== es
        ? ((u = () => {
            let e = q.current
            if (null == e) return
            let l = () => {
              let l = e.classList.contains("line-clamp-[15]")
              e.classList.remove("line-clamp-[15]")
              let n = e.scrollHeight,
                t = Array.from(e.querySelectorAll("pre"), _)
              for (let { element: e } of t) e.style.overflow = "visible"
              e.classList.add("line-clamp-[15]")
              let s = e.clientHeight
              if (null != e.querySelector("table")) {
                let l = Number.parseFloat(
                  getComputedStyle(e.querySelector("[data-markdown-text-style]") ?? e).lineHeight,
                )
                Number.isFinite(l) && (s = Math.min(s, 15 * l))
              }
              for (let { element: n, style: s } of (l || e.classList.remove("line-clamp-[15]"), t))
                null == s ? n.removeAttribute("style") : n.setAttribute("style", s)
              ;(en((e) => (e?.full === n && e.collapsed === s ? e : { full: n, collapsed: s })), es(s))
            }
            l()
            let n = new ResizeObserver(l)
            return (n.observe(e), () => n.disconnect())
          }),
          (B[3] = es),
          (B[4] = u))
        : (u = B[4]),
        B[5] !== F ? ((f = [F]), (B[5] = F), (B[6] = f)) : (f = B[6]),
        (0, d.useLayoutEffect)(u, f),
        B[7] !== el || B[8] !== es
          ? ((h = () => {
              null != el && es(el.collapsed)
            }),
            (B[7] = el),
            (B[8] = es),
            (B[9] = h))
          : (h = B[9]),
        B[10] !== el || B[11] !== W ? ((y = [el, W]), (B[10] = el), (B[11] = W), (B[12] = y)) : (y = B[12]),
        (0, d.useLayoutEffect)(h, y),
        B[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = () => {
              let e = G.current
              H.current && null != e && e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" })
            }),
            (B[13] = v))
          : (v = B[13]))
      let ei = v,
        ea = $ || void 0
      B[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, i.A)("overflow-clip", "viewport-fxNDLQ")), (B[14] = j))
        : (j = B[14])
      let er = (W ? el?.full : el?.collapsed) ?? "auto",
        eo = W || !et ? 1 : 0
      B[15] !== er || B[16] !== eo
        ? ((C = { height: er, "--description-fade": eo }), (B[15] = er), (B[16] = eo), (B[17] = C))
        : (C = B[17])
      let ed = Q ? 0 : X
      B[18] === Symbol.for("react.memo_cache_sentinel") ? ((w = [0.22, 1, 0.36, 1]), (B[18] = w)) : (w = B[18])
      let ec = Q ? 0 : ee
      ;(B[19] !== ec ? ((k = { duration: ec }), (B[19] = ec), (B[20] = k)) : (k = B[20]),
        B[21] !== ed || B[22] !== k
          ? ((M = { duration: ed, ease: w, "--description-fade": k }), (B[21] = ed), (B[22] = k), (B[23] = M))
          : (M = B[23]),
        B[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = () => {
              let e = Y.current
              r.Gt.postRender(() => {
                e === Y.current && (ei(), (H.current = !1), J(!1))
              })
            }),
            (B[24] = I))
          : (I = B[24]))
      let eu = null == el && "line-clamp-[15]"
      if (
        (B[25] !== eu ? ((S = (0, i.A)(eu)), (B[25] = eu), (B[26] = S)) : (S = B[26]),
        B[27] === Symbol.for("react.memo_cache_sentinel") ? ((D = { kind: "small" }), (B[27] = D)) : (D = B[27]),
        B[28] !== F)
      )
        ((P = (function e(l) {
          return l
            .filter((e) => "html" !== e.type && "image" !== e.type)
            .map((l) => {
              if ("heading" === l.type || "hr" === l.type || "plugin-description-footnote" === l.type) {
                let e = l.raw.trimEnd()
                return {
                  type: "paragraph",
                  raw: l.raw,
                  text: e,
                  tokens: e
                    .split("\n")
                    .flatMap((e, l) => [
                      ...(0 === l ? [] : [{ type: "br", raw: "\n" }]),
                      { type: "text", raw: e, text: (0, b.encodeXML)(e) },
                    ]),
                }
              }
              return "table" === l.type
                ? {
                    ...l,
                    header: l.header.map((l) => ({ ...l, tokens: e(l.tokens) })),
                    rows: l.rows.map((l) => l.map((l) => ({ ...l, tokens: e(l.tokens) }))),
                  }
                : "checkbox" === l.type
                  ? { type: "text", raw: l.raw, text: l.raw }
                  : "list" === l.type
                    ? {
                        ...l,
                        items: l.items.map((l) => {
                          let n = e(l.tokens),
                            t = n[0]
                          if (t?.type === "text" || t?.type === "paragraph") {
                            let e = t.tokens,
                              l = e?.[0]
                            null != e &&
                              l?.type === "text" &&
                              /^\[[ xX]\]$/.test(l.raw) &&
                              (1 === e.length || (e[1]?.type === "br" && e[1].raw.startsWith(" "))) &&
                              e.splice(0, 2, { type: "text", raw: l.raw, text: l.raw + " " })
                          }
                          return { ...l, task: !1, checked: void 0, tokens: n }
                        }),
                      }
                    : "tokens" in l && l.tokens
                      ? { ...l, tokens: e(l.tokens) }
                      : l
            })
            .filter(
              (e) =>
                "link" !== e.type ||
                (function e(l) {
                  return "tokens" in l && l.tokens
                    ? l.tokens.some(e)
                    : "text" in l &&
                        "string" == typeof l.text &&
                        ("codespan" === l.type ? l.text : (0, a.hl)(l.text)).trim().length > 0
                })(e),
            )
        })(A.lexer(F))),
          (B[28] = F),
          (B[29] = P))
      else P = B[29]
      return (
        B[30] !== V
          ? ((T = () => ({
              ...N,
              a: (e) => {
                let { children: l, href: n, title: s } = e
                return n
                  ? (0, t.jsx)(p.G, {
                      className: "hover:opacity-70 focus-visible:opacity-70",
                      href: n,
                      title: s,
                      initiator: "markdown_link_click",
                      openTarget: V,
                      underline: "always",
                      children: l,
                    })
                  : (0, t.jsx)(t.Fragment, { children: l })
              },
            })),
            (B[30] = V),
            (B[31] = T))
          : (T = B[31]),
        B[32] !== P || B[33] !== T
          ? ((E = (0, t.jsx)(x.T, { textStyle: D, renderText: a.hl, tokens: P, getDefaultComponents: T })),
            (B[32] = P),
            (B[33] = T),
            (B[34] = E))
          : (E = B[34]),
        B[35] !== S || B[36] !== E
          ? ((U = (0, t.jsx)("div", { ref: q, className: S, children: E })), (B[35] = S), (B[36] = E), (B[37] = U))
          : (U = B[37]),
        B[38] !== z || B[39] !== C || B[40] !== M || B[41] !== U
          ? ((R = (0, t.jsx)(o.P.div, {
              id: z,
              className: j,
              initial: !1,
              animate: C,
              transition: M,
              onUpdate: ei,
              onAnimationComplete: I,
              children: U,
            })),
            (B[38] = z),
            (B[39] = C),
            (B[40] = M),
            (B[41] = U),
            (B[42] = R))
          : (R = B[42]),
        B[43] !== z || B[44] !== X || B[45] !== et || B[46] !== W || B[47] !== Q
          ? ((O =
              et || W
                ? (0, t.jsxs)("button", {
                    ref: G,
                    className:
                      "mt-4 flex cursor-interaction scroll-my-4 items-center gap-1 text-sm text-secondary select-none hover:underline",
                    type: "button",
                    "aria-controls": z,
                    "aria-expanded": W,
                    onClick: () => {
                      ;((Y.current = Y.current + 1), J(!0), (H.current = W), K(!W))
                    },
                    children: [
                      W
                        ? (0, t.jsx)(c.A, { id: "plugins.description.showLess", defaultMessage: "Show less" })
                        : (0, t.jsx)(c.A, { id: "plugins.description.showMore", defaultMessage: "Show more" }),
                      (0, t.jsx)(o.P.span, {
                        "aria-hidden": !0,
                        initial: !1,
                        animate: { rotate: 180 * !!W },
                        transition: { duration: Q ? 0 : X, ease: [0.22, 1, 0.36, 1] },
                        children: (0, t.jsx)(m.Aq_, {}),
                      }),
                    ],
                  })
                : null),
            (B[43] = z),
            (B[44] = X),
            (B[45] = et),
            (B[46] = W),
            (B[47] = Q),
            (B[48] = O))
          : (O = B[48]),
        B[49] !== R || B[50] !== O || B[51] !== ea
          ? ((L = (0, t.jsxs)("div", { "data-plugin-description-transitioning": ea, children: [R, O] })),
            (B[49] = R),
            (B[50] = O),
            (B[51] = ea),
            (B[52] = L))
          : (L = B[52]),
        L
      )
    }
    function _(e) {
      return { element: e, style: e.getAttribute("style") }
    }
  },
  UwQs(e, l, n) {
    var t = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      a = n("DG58")
    n.d(
      l,
      {},
      {
        z: function (e) {
          let l,
            n,
            r = (0, s.c)(5),
            { children: o, disabledReason: d } = e
          r[0] !== d ? ((l = (0, a.h)(d)), (r[0] = d), (r[1] = l)) : (l = r[1])
          let c = l
          return (
            r[2] !== o || r[3] !== c
              ? ((n = null == c ? o : (0, t.jsx)(i.A, { ...c })), (r[2] = o), (r[3] = c), (r[4] = n))
              : (n = r[4]),
            n
          )
        },
      },
    )
  },
  DG58(e, l, n) {
    let t = (0, n("Qgfj").YK)({
      planNotEligible: { id: "plugins.disabledReason.planNotEligible", defaultMessage: "Not available on your plan" },
      requiredAppUnavailable: {
        id: "plugins.disabledReason.requiredAppUnavailable",
        defaultMessage: "Required app unavailable",
      },
      unknown: { id: "plugins.disabledReason.unknown", defaultMessage: "Unavailable" },
    })
    function s(e) {
      switch (e) {
        case "plan_not_eligible":
          return t.planNotEligible
        case "required_app_unavailable":
          return t.requiredAppUnavailable
        case "unknown":
          return t.unknown
        case "disabled_by_admin":
        case null:
        case void 0:
          return null
      }
    }
    n.d(
      l,
      {},
      {
        h: s,
        t: function ({ disabledReason: e, fallback: l, intl: n }) {
          let t = s(e)
          return null == t ? l : n.formatMessage(t)
        },
      },
    )
  },
  WT8y(e, l, n) {
    var t = n("rGp2")
    n.d(
      l,
      {},
      {
        Q: function (e, l) {
          let n = new URL(`/plugins/${encodeURIComponent(e)}`, "https://chatgpt.com")
          return (
            n.searchParams.set("no_universal_links", "1"),
            1 === l && (n.hash = `settings/Plugins/${encodeURIComponent(e)}?product-sku=CODEX`),
            n.toString()
          )
        },
        x: function ({ appId: e, installUrl: l, remotePluginId: n }) {
          let s = new URL(
            null == n ? "/plugins" : `/plugins/${encodeURIComponent(n)}`,
            l?.trim() || "https://chatgpt.com",
          )
          return (
            s.searchParams.set("no_universal_links", "1"),
            (s.hash =
              null == n
                ? `settings/Connectors?${new URLSearchParams({ connector: e, "product-sku": (0, t.MR)(), referrer: "codex" })}`
                : `settings/Plugins/${encodeURIComponent(n)}?product-sku=CODEX`),
            s.toString()
          )
        },
      },
    )
  },
  mYWF(e, l, n) {
    var t = n("DBCl"),
      s = n("rGp2"),
      i = n("hOO0"),
      a = n("ReGc"),
      r = n("WT8y")
    async function o(e, { appId: l, appName: n }) {
      let r = await e.query.getOrFetch(a.a)
      return new URL(
        (0, s.Cj)({ id: (0, i.$)(l), name: n, installUrl: new URL(r.chatGptDesktopAuthOrigin ?? t.WaA).origin }),
      )
    }
    n.d(l, { Hd: () => o, Y2: () => r.x, x1: () => r.Q })
  },
  uodG(e, l, n) {
    var t = n("QosV"),
      s = n("qmMi"),
      i = n("xS4d"),
      a = n("PIwo")
    function r({ remoteControlConnectionsState: e, slingshotEnabled: l }) {
      return l && (e?.available ?? !0) && e?.accessRequired !== !0
    }
    n.d(
      l,
      {},
      {
        HZ: function ({
          selectedConnectionsTab: e,
          showControlOtherDevices: l,
          showControlThisMacTab: n,
          showRemoteControlConnectionsSection: t,
          showRemoteSshConnections: s,
          showTabbedSshPage: i,
          isWslConnectionsLoading: a,
          showWslConnections: r,
        }) {
          return "wsl" === e && a
            ? "wsl"
            : t
              ? "control-this-mac" !== e || n
                ? "access-other-devices" !== e || l
                  ? "ssh" !== e || i
                    ? "wsl" !== e || r
                      ? e
                      : "ssh"
                    : l
                      ? "access-other-devices"
                      : "control-this-mac"
                  : n
                    ? "control-this-mac"
                    : "ssh"
                : l
                  ? "access-other-devices"
                  : "ssh"
              : "wsl" === e && r
                ? "wsl"
                : s
                  ? "ssh"
                  : "access-other-devices"
        },
        Zi: r,
        wi: function () {
          let e,
            l = (0, t.c)(3),
            n = (0, s.Ul)(i.h9),
            o = (0, a.mC)()
          return (
            l[0] !== n || l[1] !== o
              ? ((e = r({ remoteControlConnectionsState: n, slingshotEnabled: o })), (l[0] = n), (l[1] = o), (l[2] = e))
              : (e = l[2]),
            e
          )
        },
      },
    )
  },
  FpCZ(e, l, n) {
    var t = n("ABep"),
      s = n("QosV"),
      i = n("FvYa"),
      a = n("bVeK"),
      r = n("AWNZ")
    n.d(
      l,
      {},
      {
        R: function (e) {
          let l,
            n,
            o,
            d,
            c,
            u,
            p,
            m,
            g,
            f,
            x,
            h,
            b,
            y,
            v = (0, s.c)(26)
          return (
            v[0] !== e
              ? (({
                  label: m,
                  description: o,
                  connectorId: n,
                  logoUrl: f,
                  logoDarkUrl: g,
                  knownAppId: p,
                  actions: l,
                  disabled: d,
                  highlightOnFocus: c,
                  ...u
                } = e),
                (v[0] = e),
                (v[1] = l),
                (v[2] = n),
                (v[3] = o),
                (v[4] = d),
                (v[5] = c),
                (v[6] = u),
                (v[7] = p),
                (v[8] = m),
                (v[9] = g),
                (v[10] = f))
              : ((l = v[1]),
                (n = v[2]),
                (o = v[3]),
                (d = v[4]),
                (c = v[5]),
                (u = v[6]),
                (p = v[7]),
                (m = v[8]),
                (g = v[9]),
                (f = v[10])),
            v[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, t.jsx)("span", {
                  className: "flex items-center justify-center",
                  children: (0, t.jsx)(a.HUG, {}),
                })),
                (v[11] = x))
              : (x = v[11]),
            v[12] !== n || v[13] !== p || v[14] !== g || v[15] !== f
              ? ((h = (0, t.jsx)("span", {
                  className:
                    "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-surface",
                  children: (0, t.jsx)(i.R, {
                    alt: "",
                    className: "h-full w-full object-contain",
                    connectorId: n,
                    logoUrl: f,
                    logoDarkUrl: g,
                    knownAppId: p,
                    preferRemote: !0,
                    fallback: x,
                  }),
                })),
                (v[12] = n),
                (v[13] = p),
                (v[14] = g),
                (v[15] = f),
                (v[16] = h))
              : (h = v[16]),
            v[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, t.jsx)(a.uM3, { className: "text-tertiary" })), (v[17] = b))
              : (b = v[17]),
            v[18] !== l || v[19] !== o || v[20] !== d || v[21] !== c || v[22] !== u || v[23] !== m || v[24] !== h
              ? ((y = (0, t.jsx)(r.kG, {
                  ...u,
                  actions: l,
                  actionsPlacement: "before-trailing",
                  edgeRounding: "surface",
                  disabled: d,
                  highlightOnFocus: c,
                  icon: h,
                  label: m,
                  description: o,
                  trailing: b,
                })),
                (v[18] = l),
                (v[19] = o),
                (v[20] = d),
                (v[21] = c),
                (v[22] = u),
                (v[23] = m),
                (v[24] = h),
                (v[25] = y))
              : (y = v[25]),
            y
          )
        },
      },
    )
  },
  bb3f(e, l, n) {
    n.d(l, { S: () => Y })
    var t = n("ABep"),
      s = n("QosV"),
      i = n("bTvG"),
      a = n("slpy"),
      r = n("on57"),
      o = n("qmMi"),
      d = n("zd8w"),
      c = n("Qgfj"),
      u = n("Wf1j"),
      p = n("oyxz"),
      m = n("FvYa"),
      g = n("Sm6l"),
      f = n("RNul"),
      x = n("F0xz"),
      h = n("g7Qx"),
      b = n("Rvwy"),
      y = (e) =>
        (0, t.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, t.jsx)("path", {
            d: "M13.3333 4.16663L6.66663 15.8333",
            stroke: "currentColor",
            strokeWidth: 1.33,
            strokeLinecap: "round",
          }),
        }),
      v = n("Jqpj"),
      j = n("yGJW"),
      C = n("OWtl"),
      w = n("FpCZ"),
      k = n("ABMA"),
      A = n("HipH"),
      N = n("RVZl"),
      M = n("qTvt"),
      _ = n("i1uX"),
      I = n("T0Rc"),
      S = n("xSOA"),
      D = n("Ywss"),
      P = n("rGp2"),
      T = n("hOO0"),
      E = n("uc7r"),
      U = n("UOa8"),
      R = n("YitN"),
      O = n("bqtn"),
      L = n("UxN3"),
      B = n("GCsp"),
      F = n("MX3C"),
      V = n("tlx5"),
      z = n("mYWF"),
      q = n("rvFo"),
      G = n("soaw")
    function H(e) {
      let l,
        n,
        a,
        r,
        d,
        c,
        u,
        m,
        x,
        h,
        b,
        y,
        v,
        w,
        k,
        A,
        H,
        Z,
        Y = (0, s.c)(76),
        {
          app: Q,
          children: W,
          canReconnect: K,
          disabled: $,
          hideAppConnectionDropdown: J,
          requiresReauth: X,
          remotePluginId: ee,
          onInstallApp: el,
          onDisconnectApp: en,
          onOpenPluginSettingsUrl: et,
        } = e,
        es = (0, o.gh)(C.u),
        ei = (0, G.a)(),
        { accountId: ea, authMethod: er, isLoading: eo, userId: ed } = (0, U.As)(),
        ec = "chatgpt" === er || "chatgptAuthTokens" === er
      Y[0] !== Q.id ? ((l = (0, P.rJ)(Q.id)), (Y[0] = Q.id), (Y[1] = l)) : (l = Y[1])
      let eu = !!ea && !!ed && Q.isAccessible && (J || null != en || null != et)
      Y[2] !== l || Y[3] !== eu
        ? ((n = { ...l, enabled: eu, retry: !1, staleTime: q.D.FIVE_MINUTES }), (Y[2] = l), (Y[3] = eu), (Y[4] = n))
        : (n = Y[4])
      let { data: ep, isError: em, isFetching: eg, refetch: ef } = (0, I.I)(n),
        ex = (eo || ec) && (null == ep || em)
      Y[5] !== Q.id || Y[6] !== ep || Y[7] !== ex
        ? ((a = !ex && (0, T.aW)(Q.id, ep)), (Y[5] = Q.id), (Y[6] = ep), (Y[7] = ex), (Y[8] = a))
        : (a = Y[8])
      let eh = a
      Y[9] !== ea || Y[10] !== ed
        ? ((r = (0, E.dZ)({ accountId: ea, userId: ed })), (Y[9] = ea), (Y[10] = ed), (Y[11] = r))
        : (r = Y[11])
      let eb = r,
        ey = null != en && Q.isAccessible && !eh && !!ea && !!ed
      Y[12] !== eb || Y[13] !== ey
        ? ((d = { ...eb, staleTime: eb.staleTime, enabled: ey }), (Y[12] = eb), (Y[13] = ey), (Y[14] = d))
        : (d = Y[14])
      let { data: ev, isError: ej, isFetching: eC, refetch: ew } = (0, I.I)(d)
      Y[15] !== Q.id || Y[16] !== ev
        ? ((c = null != ev && (0, F.Tm)(ev, Q.id).length > 1), (Y[15] = Q.id), (Y[16] = ev), (Y[17] = c))
        : (c = Y[17])
      let ek = c,
        eA = eo || ex || eg || (!eh && (ek || (ec && (null == ev || ej || eC))))
      Y[18] === Symbol.for("react.memo_cache_sentinel") ? ((u = { enabled: !1 }), (Y[18] = u)) : (u = Y[18])
      let { isError: eN, isFetching: eM, refetch: e_ } = (0, R.rT)(u),
        eI = (!ea || !ed) && eN
      Y[19] !== Q.id || Y[20] !== Q.installUrl || Y[21] !== ee
        ? ((m = (0, z.Y2)({ appId: Q.id, installUrl: Q.installUrl, remotePluginId: ee })),
          (Y[19] = Q.id),
          (Y[20] = Q.installUrl),
          (Y[21] = ee),
          (Y[22] = m))
        : (m = Y[22])
      let eS = m
      Y[23] !== Q || Y[24] !== eA || Y[25] !== ei || Y[26] !== eb || Y[27] !== en || Y[28] !== es || Y[29] !== ec
        ? ((x = {
            mutationFn: async () => {
              if (!eA) {
                if (((0, j.yy)(es, i.nt, { name: "CHATGPT_APP_CLICK_TARGET_DISCONNECT", connectorId: Q.id }), ec))
                  try {
                    let e = await es.queryClient.fetchQuery({ ...eb, staleTime: 0 })
                    if ((0, F.Tm)(e, Q.id).length > 1) return
                  } catch {
                    return
                  }
                ei() && (await en?.(Q))
              }
            },
          }),
          (Y[23] = Q),
          (Y[24] = eA),
          (Y[25] = ei),
          (Y[26] = eb),
          (Y[27] = en),
          (Y[28] = es),
          (Y[29] = ec),
          (Y[30] = x))
        : (x = Y[30])
      let { isPending: eD, mutate: eP } = (0, S.n)(x)
      if (J && (ex || eh)) return null
      if (null != W) return W
      if (eD) {
        let e
        ;(Y[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(p.A, { id: "skills.appsPage.apps.disconnecting", defaultMessage: "Disconnecting\u2026" })),
            (Y[31] = e))
          : (e = Y[31]),
          (h = e))
      } else if (X) {
        let e
        ;(Y[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(p.A, { id: "plugins.detail.app.reauthRequired", defaultMessage: "Reconnect required" })),
            (Y[32] = e))
          : (e = Y[32]),
          (h = e))
      } else {
        let e
        ;(Y[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-chart-green" }),
                (0, t.jsx)(p.A, { id: "skills.appsPage.apps.connected", defaultMessage: "Connected" }),
              ],
            })),
            (Y[33] = e))
          : (e = Y[33]),
          (h = e))
      }
      let eT = $ || eD,
        eE = $ && !eD,
        eU = eD || void 0
      return (
        Y[34] !== eD
          ? ((b = eD && (0, t.jsx)(f.y, { className: "icon-xxs" })), (Y[34] = eD), (Y[35] = b))
          : (b = Y[35]),
        Y[36] !== h
          ? ((y = (0, t.jsx)("span", { className: "flex items-center gap-1.5", children: h })),
            (Y[36] = h),
            (Y[37] = y))
          : (y = Y[37]),
        Y[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, t.jsx)(L.bF, {
              className: "shrink-0 text-codex-description",
              "aria-hidden": !1,
              asset16: M.K,
              legacyIcon: B.A,
              legacyClassName: "icon-2xs",
            })),
            (Y[38] = v))
          : (v = Y[38]),
        Y[39] !== eE || Y[40] !== eU || Y[41] !== b || Y[42] !== y
          ? ((w = (0, t.jsxs)(g.$, {
              className: "gap-1.5 text-sm",
              color: "outline",
              size: "toolbar",
              disabled: eE,
              "aria-busy": eU,
              children: [b, y, v],
            })),
            (Y[39] = eE),
            (Y[40] = eU),
            (Y[41] = b),
            (Y[42] = y),
            (Y[43] = w))
          : (w = Y[43]),
        Y[44] !== ea ||
        Y[45] !== eI ||
        Y[46] !== eM ||
        Y[47] !== em ||
        Y[48] !== eg ||
        Y[49] !== ej ||
        Y[50] !== eC ||
        Y[51] !== eh ||
        Y[52] !== en ||
        Y[53] !== e_ ||
        Y[54] !== ef ||
        Y[55] !== ew ||
        Y[56] !== ed ||
        Y[57] !== ec
          ? ((k =
              ec && (eI || em || (!eh && null != en && ej))
                ? (0, t.jsx)(O.ms.Item, {
                    leftIconAsset: N.S,
                    disabled: eM || eg || eC,
                    onSelect: (e) => {
                      ;(e.preventDefault(), ea && ed ? Promise.all([ef(), eh || null == en ? void 0 : ew()]) : e_())
                    },
                    children: (0, t.jsx)(p.A, {
                      id: "skills.appsPage.apps.retryConnectionOptions",
                      defaultMessage: "Retry loading connection options",
                    }),
                  })
                : null),
            (Y[44] = ea),
            (Y[45] = eI),
            (Y[46] = eM),
            (Y[47] = em),
            (Y[48] = eg),
            (Y[49] = ej),
            (Y[50] = eC),
            (Y[51] = eh),
            (Y[52] = en),
            (Y[53] = e_),
            (Y[54] = ef),
            (Y[55] = ew),
            (Y[56] = ed),
            (Y[57] = ec),
            (Y[58] = k))
          : (k = Y[58]),
        Y[59] !== Q || Y[60] !== K || Y[61] !== el
          ? ((A = K
              ? (0, t.jsx)(O.ms.Item, {
                  leftIconAsset: N.S,
                  onSelect: () => {
                    el(Q)
                  },
                  children: (0, t.jsx)(p.A, { id: "skills.appsPage.apps.reconnect", defaultMessage: "Reconnect" }),
                })
              : null),
            (Y[59] = Q),
            (Y[60] = K),
            (Y[61] = el),
            (Y[62] = A))
          : (A = Y[62]),
        Y[63] !== eP || Y[64] !== eA || Y[65] !== eh || Y[66] !== en || Y[67] !== et || Y[68] !== eS
          ? ((H =
              null == en
                ? null
                : (0, t.jsx)(O.ms.Item, {
                    leftIconAsset: _.Q,
                    disabled: eA,
                    tone: "danger",
                    asChild: eh,
                    href: eh ? eS : void 0,
                    onSelect: eh ? void 0 : () => eP(),
                    children: eh
                      ? (0, t.jsx)(D.N_, {
                          to: eS,
                          onClick: (e) => (0, V.y)(e, () => et?.(eS)),
                          children: (0, t.jsx)(p.A, {
                            id: "skills.appsPage.apps.disconnect",
                            defaultMessage: "Disconnect",
                          }),
                        })
                      : (0, t.jsx)(p.A, { id: "skills.appsPage.apps.disconnect", defaultMessage: "Disconnect" }),
                  })),
            (Y[63] = eP),
            (Y[64] = eA),
            (Y[65] = eh),
            (Y[66] = en),
            (Y[67] = et),
            (Y[68] = eS),
            (Y[69] = H))
          : (H = Y[69]),
        Y[70] !== eT || Y[71] !== w || Y[72] !== k || Y[73] !== A || Y[74] !== H
          ? ((Z = (0, t.jsxs)(O.Ab, {
              align: "end",
              contentWidth: "xs",
              disabled: eT,
              triggerButton: w,
              children: [k, A, H],
            })),
            (Y[70] = eT),
            (Y[71] = w),
            (Y[72] = k),
            (Y[73] = A),
            (Y[74] = H),
            (Y[75] = Z))
          : (Z = Y[75]),
        Z
      )
    }
    let Z = (0, c.YK)({
      noDescription: { id: "skills.appsPage.apps.noDescription", defaultMessage: "No description" },
      disableToggleTooltip: { id: "skills.appsPage.apps.disableToggle", defaultMessage: "Disable app" },
      enableToggleTooltip: { id: "skills.appsPage.apps.enableToggleTooltip", defaultMessage: "Enable app" },
      unattributedDisablement: {
        id: "skills.appsPage.apps.unattributedDisablement",
        defaultMessage: "This app is disabled",
      },
      loadingProjectSettings: {
        id: "skills.appsPage.apps.loadingProjectSettings",
        defaultMessage: "Loading project settings\u2026",
      },
      enableToggleAria: { id: "skills.appsPage.apps.enableToggle", defaultMessage: "Enable app" },
      connectingApp: { id: "skills.appsPage.apps.connecting", defaultMessage: "Continue connecting app" },
      connectApp: { id: "skills.appsPage.apps.connect", defaultMessage: "Connect" },
      enabledStatus: { id: "skills.appsPage.apps.enabledStatus", defaultMessage: "App enabled" },
      disabledStatus: { id: "skills.appsPage.apps.disabledStatus", defaultMessage: "App disabled" },
    })
    function Y(e) {
      let l,
        n,
        c,
        N,
        M,
        _,
        I,
        S,
        D = (0, s.c)(101),
        {
          app: P,
          appRestriction: T,
          cardIcon: E,
          cardIconContainer: U,
          cardIconContainerVariant: R,
          cardIconPlacement: O,
          cardDescriptionPlacement: L,
          badges: B,
          blockedStatusLabel: F,
          connectButtonImpressionSurface: V,
          connectionAction: z,
          disabledTooltip: q,
          className: G,
          canReconnect: Y,
          hideAppConnectionDropdown: X,
          installBlockedReason: ee,
          installedStateAction: el,
          installActionDisabled: en,
          installActionType: et,
          installActionLabel: es,
          isConfigPending: ei,
          isConnectionUnavailable: ea,
          requiresReauth: er,
          manageAction: eo,
          remotePluginId: ed,
          presentation: ec,
          isConnectingApp: eu,
          showInstallAction: ep,
          updatingAppId: em,
          onInstallApp: eg,
          onOpenAppTools: ef,
          onDisconnectApp: ex,
          onOpenPluginSettingsUrl: eh,
          onSetAppEnabled: eb,
        } = e,
        ey = void 0 === T ? null : T,
        ev = void 0 === U || U,
        ej = void 0 === Y || Y,
        eC = void 0 === el ? "check" : el,
        ew = void 0 === et ? "connect" : et,
        ek = void 0 !== ei && ei,
        eA = void 0 !== ea && ea,
        eN = void 0 !== er && er,
        eM = void 0 === eo ? "button" : eo,
        e_ = void 0 === ep || ep,
        eI = (0, o.gh)(C.u),
        eS = (0, d.useRef)(null),
        eD = (0, u.A)()
      D[0] !== P || D[1] !== E
        ? ((l =
            E ??
            (0, t.jsx)(m.R, {
              alt: P.name,
              appInfo: P,
              className: "icon-md",
              fallback: (0, t.jsx)(b.A, { className: "icon-sm text-secondary" }),
            })),
          (D[0] = P),
          (D[1] = E),
          (D[2] = l))
        : (l = D[2])
      let eP = l
      D[3] !== es || D[4] !== eD
        ? ((n = es ?? eD.formatMessage(Z.connectApp)), (D[3] = es), (D[4] = eD), (D[5] = n))
        : (n = D[5])
      let eT = n,
        eE = P.isEnabled && null == ey,
        eU = P.appMetadata?.firstPartyRequiresInstall === !1,
        eR = ey?.isUserEditable === !1,
        eO = "disabled-by-admin" === (void 0 === ee ? null : ee) && !P.isAccessible,
        eL = em === P.id,
        eB = eL || eR || ek,
        eF = eO || eA || (void 0 !== en && en) || eR || ek || eL || (null != ey && null == eb),
        eV = eu || eL || ek || eA,
        ez = !eU && void 0 !== X && X && "menu" === eM && eE
      D[6] !== P ||
      D[7] !== ej ||
      D[8] !== eV ||
      D[9] !== ex ||
      D[10] !== eg ||
      D[11] !== eh ||
      D[12] !== ed ||
      D[13] !== eN ||
      D[14] !== ez
        ? ((c = {
            app: P,
            canReconnect: ej,
            disabled: eV,
            hideAppConnectionDropdown: ez,
            requiresReauth: eN,
            remotePluginId: ed,
            onInstallApp: eg,
            onDisconnectApp: ex,
            onOpenPluginSettingsUrl: eh,
          }),
          (D[6] = P),
          (D[7] = ej),
          (D[8] = eV),
          (D[9] = ex),
          (D[10] = eg),
          (D[11] = eh),
          (D[12] = ed),
          (D[13] = eN),
          (D[14] = ez),
          (D[15] = c))
        : (c = D[15])
      let eq = c,
        eG = null
      if (eA) {
        let e
        ;(D[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(p.A, { id: "plugins.detail.app.unavailable", defaultMessage: "This app is unavailable" })),
            (D[16] = e))
          : (e = D[16]),
          (eG = e))
      } else if (ek) {
        let e
        ;(D[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(p.A, { ...Z.loadingProjectSettings })), (D[17] = e))
          : (e = D[17]),
          (eG = e))
      } else if (ey?.isUserEditable === !1) {
        let e
        ;(D[18] !== ey
          ? ((e = (0, t.jsx)(A.ns, { restriction: ey, surface: "card" })), (D[18] = ey), (D[19] = e))
          : (e = D[19]),
          (eG = e))
      } else if (null == ey && P.isAccessible && !P.isEnabled) {
        let e
        ;(D[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(p.A, { ...Z.unattributedDisablement })), (D[20] = e))
          : (e = D[20]),
          (eG = e))
      }
      D[21] !== P ||
      D[22] !== eG ||
      D[23] !== ey ||
      D[24] !== F ||
      D[25] !== eT ||
      D[26] !== V ||
      D[27] !== z ||
      D[28] !== eq ||
      D[29] !== ew ||
      D[30] !== eC ||
      D[31] !== eD ||
      D[32] !== ek ||
      D[33] !== eR ||
      D[34] !== eu ||
      D[35] !== eE ||
      D[36] !== eU ||
      D[37] !== eF ||
      D[38] !== eO ||
      D[39] !== eB ||
      D[40] !== eL ||
      D[41] !== eM ||
      D[42] !== eg ||
      D[43] !== eb ||
      D[44] !== ed ||
      D[45] !== eI ||
      D[46] !== e_
        ? ((N =
            (P.isAccessible && !eE ? void 0 : z) ??
            (eO && null != F
              ? (0, t.jsx)("span", {
                  className: "flex h-7 w-7 shrink-0 items-center justify-center text-secondary",
                  children: F,
                })
              : P.isAccessible && "toggle" === eC
                ? (0, t.jsx)("div", {
                    className: "flex items-center gap-2",
                    children:
                      "menu" !== eM || eU
                        ? (0, t.jsx)("div", {
                            role: "presentation",
                            onClick: K,
                            onKeyDown: W,
                            children: (0, t.jsx)(A._O, {
                              "data-state": eE ? "checked" : "unchecked",
                              isControlDisabled: eB,
                              isExplanationFocusable: null != eG,
                              content:
                                eG ??
                                (eE
                                  ? (0, t.jsx)(p.A, { ...Z.disableToggleTooltip })
                                  : (0, t.jsx)(p.A, { ...Z.enableToggleTooltip })),
                              children: (0, t.jsx)(x.l, {
                                checked: eE,
                                disabled: eB,
                                onChange: (e) => {
                                  eb?.({ appId: P.id, enabled: e })
                                },
                                ariaLabel: eD.formatMessage(Z.enableToggleAria),
                              }),
                            }),
                          })
                        : (0, t.jsx)("div", {
                            role: "presentation",
                            onClick: J,
                            onKeyDown: $,
                            children: eE
                              ? (0, t.jsx)(H, { ...eq })
                              : (0, t.jsx)(A._O, {
                                  disabled: !eB,
                                  isControlDisabled: eB,
                                  isExplanationFocusable: null != eG,
                                  content: eG,
                                  children: (0, t.jsx)(g.$, {
                                    "aria-label": eT,
                                    className: "shrink-0",
                                    color: "outline",
                                    size: "toolbar",
                                    disabled: eR || ek,
                                    loading: eL,
                                    onClick: () => {
                                      eb?.({ appId: P.id, enabled: !0 })
                                    },
                                    children: eT,
                                  }),
                                }),
                          }),
                  })
                : e_ && (!eU || P.isAccessible)
                  ? (0, t.jsx)(H, {
                      ...eq,
                      children: P.isAccessible
                        ? (0, t.jsx)(k.y, {
                            ariaLabel: eD.formatMessage(eE ? Z.enabledStatus : Z.disabledStatus),
                            icon: eE
                              ? (0, t.jsx)(h.A, { className: "icon-sm" })
                              : (0, t.jsx)(y, { className: "icon-sm" }),
                          })
                        : (0, t.jsx)(A._O, {
                            disabled: !eO && !eu && (null == eG || !eF),
                            isControlDisabled: eF,
                            isExplanationFocusable: null != eG,
                            content: eO
                              ? (0, t.jsx)(p.A, {
                                  id: "plugins.install.disabledByAdmin",
                                  defaultMessage: "Disabled by admin",
                                })
                              : eu
                                ? (0, t.jsx)(p.A, { ...Z.connectingApp })
                                : (eG ?? eT),
                            children: (0, t.jsx)(g.$, {
                              ref: (e) => {
                                if (null == e || null == ed || null == V || eF || eu) return
                                let l = `${ed}:${P.id}`
                                eS.current !== l &&
                                  ((eS.current = l),
                                  (0, j.yy)(eI, i.Wn, { pluginId: ed, connectorId: P.id, surface: V }))
                              },
                              className: "shrink-0",
                              color: "outline",
                              size: "toolbar",
                              disabled: eF,
                              "aria-label": eu ? eD.formatMessage(Z.connectingApp) : eT,
                              onClick: (e) => {
                                if ((e.stopPropagation(), !eF)) {
                                  if (
                                    ("connect" === ew &&
                                      (0, j.yy)(eI, i.nt, {
                                        name: "CHATGPT_APP_CLICK_TARGET_CONNECT",
                                        connectorId: P.id,
                                      }),
                                    null == ey)
                                  )
                                    return void eg(P)
                                  eb?.({ appId: P.id, enabled: !0 }).then(() => eg(P), Q)
                                }
                              },
                              children: eu ? (0, t.jsx)(f.y, { className: "icon-xxs" }) : eT,
                            }),
                          }),
                    })
                  : null)),
          (D[21] = P),
          (D[22] = eG),
          (D[23] = ey),
          (D[24] = F),
          (D[25] = eT),
          (D[26] = V),
          (D[27] = z),
          (D[28] = eq),
          (D[29] = ew),
          (D[30] = eC),
          (D[31] = eD),
          (D[32] = ek),
          (D[33] = eR),
          (D[34] = eu),
          (D[35] = eE),
          (D[36] = eU),
          (D[37] = eF),
          (D[38] = eO),
          (D[39] = eB),
          (D[40] = eL),
          (D[41] = eM),
          (D[42] = eg),
          (D[43] = eb),
          (D[44] = ed),
          (D[45] = eI),
          (D[46] = e_),
          (D[47] = N))
        : (N = D[47])
      let eH = N
      if ("settings" === ec) {
        let e, l, n, s, i
        ;(D[48] !== P.description
          ? ((e = P.description ?? (0, t.jsx)(p.A, { ...Z.noDescription })), (D[48] = P.description), (D[49] = e))
          : (e = D[49]),
          D[50] !== e
            ? ((l = (0, t.jsx)("div", { className: "line-clamp-1", children: e })), (D[50] = e), (D[51] = l))
            : (l = D[51]))
        let r = null != q || null == ef
        return (
          D[52] !== P || D[53] !== ef ? ((n = () => ef?.(P)), (D[52] = P), (D[53] = ef), (D[54] = n)) : (n = D[54]),
          D[55] !== eH ||
          D[56] !== P.id ||
          D[57] !== P.logoUrl ||
          D[58] !== P.logoUrlDark ||
          D[59] !== P.name ||
          D[60] !== l ||
          D[61] !== r ||
          D[62] !== n
            ? ((s = (0, t.jsx)(w.R, {
                label: P.name,
                description: l,
                logoUrl: P.logoUrl,
                logoDarkUrl: P.logoUrlDark,
                knownAppId: P.id,
                actions: eH,
                disabled: r,
                onClick: n,
              })),
              (D[55] = eH),
              (D[56] = P.id),
              (D[57] = P.logoUrl),
              (D[58] = P.logoUrlDark),
              (D[59] = P.name),
              (D[60] = l),
              (D[61] = r),
              (D[62] = n),
              (D[63] = s))
            : (s = D[63]),
          D[64] !== q || D[65] !== s
            ? ((i = (0, t.jsx)(a.m, { content: q, children: s })), (D[64] = q), (D[65] = s), (D[66] = i))
            : (i = D[66]),
          i
        )
      }
      if (null != q) {
        let e, l
        return (
          D[67] !== P.description
            ? ((e = P.description ?? (0, t.jsx)(p.A, { ...Z.noDescription })), (D[67] = P.description), (D[68] = e))
            : (e = D[68]),
          D[69] !== P.name ||
          D[70] !== F ||
          D[71] !== L ||
          D[72] !== ev ||
          D[73] !== R ||
          D[74] !== O ||
          D[75] !== G ||
          D[76] !== q ||
          D[77] !== eP ||
          D[78] !== ec ||
          D[79] !== e
            ? ((l = (0, t.jsx)(v.D, {
                className: G,
                contentClassName: "opacity-60",
                disabled: !0,
                icon: eP,
                iconContainer: ev,
                iconContainerVariant: R,
                iconPlacement: O,
                title: P.name,
                description: e,
                descriptionClassName: "line-clamp-1",
                descriptionPlacement: L,
                presentation: ec,
                actions: F,
                actionsPlacement: "center",
                tooltip: q,
              })),
              (D[69] = P.name),
              (D[70] = F),
              (D[71] = L),
              (D[72] = ev),
              (D[73] = R),
              (D[74] = O),
              (D[75] = G),
              (D[76] = q),
              (D[77] = eP),
              (D[78] = ec),
              (D[79] = e),
              (D[80] = l))
            : (l = D[80]),
          l
        )
      }
      return (
        D[81] !== G ? ((M = (0, r.A)("group justify-center border-none", G)), (D[81] = G), (D[82] = M)) : (M = D[82]),
        D[83] !== P.description
          ? ((_ = P.description ?? (0, t.jsx)(p.A, { ...Z.noDescription })), (D[83] = P.description), (D[84] = _))
          : (_ = D[84]),
        D[85] !== P || D[86] !== ef
          ? ((I =
              null == ef
                ? void 0
                : () => {
                    ef(P)
                  }),
            (D[85] = P),
            (D[86] = ef),
            (D[87] = I))
          : (I = D[87]),
        D[88] !== eH ||
        D[89] !== P.name ||
        D[90] !== B ||
        D[91] !== L ||
        D[92] !== ev ||
        D[93] !== R ||
        D[94] !== O ||
        D[95] !== eP ||
        D[96] !== ec ||
        D[97] !== M ||
        D[98] !== _ ||
        D[99] !== I
          ? ((S = (0, t.jsx)(v.D, {
              className: M,
              actionsPlacement: "center",
              iconContainer: ev,
              iconContainerVariant: R,
              iconPlacement: O,
              icon: eP,
              title: P.name,
              badges: B,
              description: _,
              descriptionClassName: "line-clamp-1",
              descriptionPlacement: L,
              presentation: ec,
              onClick: I,
              actions: eH,
            })),
            (D[88] = eH),
            (D[89] = P.name),
            (D[90] = B),
            (D[91] = L),
            (D[92] = ev),
            (D[93] = R),
            (D[94] = O),
            (D[95] = eP),
            (D[96] = ec),
            (D[97] = M),
            (D[98] = _),
            (D[99] = I),
            (D[100] = S))
          : (S = D[100]),
        S
      )
    }
    function Q() {}
    function W(e) {
      e.stopPropagation()
    }
    function K(e) {
      e.stopPropagation()
    }
    function $(e) {
      e.stopPropagation()
    }
    function J(e) {
      e.stopPropagation()
    }
  },
  HipH(e, l, n) {
    n.d(l, { ns: () => m, _O: () => p, QW: () => g })
    var t = n("ABep"),
      s = n("QosV"),
      i = n("slpy")
    let a = (0, n("ESTr").a)({
      name: "person-badge-lock-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.037598, y: 1.346436, width: 12.633667, height: 13.767578 },
        visualBounds: { x: 2.037598, y: 1.346436, width: 12.633667, height: 13.767578 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.037598, y: 1.346436, width: 12.633667, height: 13.767578 },
        center: { x: 8.354432, y: 8.230225 },
        insets: { top: 1.346436, right: 1.328735, bottom: 0.885986, left: 2.037598 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.354432, y: 8.230225 }, foreground: { x: 8.354432, y: 8.230225 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6664 8.21167C12.7978 8.2117 13.7152 9.12905 13.7152 10.2605V10.488C14.2752 10.7126 14.6712 11.2599 14.6713 11.9001V13.5916C14.671 14.4317 13.99 15.114 13.1498 15.114H10.183C9.34287 15.1139 8.66176 14.4316 8.6615 13.5916V11.9001C8.66161 11.2599 9.05756 10.7126 9.61755 10.488V10.2605C9.61755 9.12903 10.5349 8.21167 11.6664 8.21167ZM10.183 11.2888C9.84538 11.289 9.5718 11.5625 9.57166 11.9001V13.5916C9.57192 13.9291 9.84545 14.2037 10.183 14.2039H13.1498C13.4874 14.2038 13.7608 13.9291 13.7611 13.5916V11.9001C13.761 11.5625 13.4875 11.2888 13.1498 11.2888H10.183ZM11.6664 9.12183C11.0375 9.12183 10.5277 9.63161 10.5277 10.2605V10.3787H12.8051V10.2605C12.8051 9.63163 12.2952 9.12186 11.6664 9.12183Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M7.65955 8.83276C7.92998 8.83299 8.1488 9.05252 8.1488 9.323C8.14867 9.59337 7.9299 9.81301 7.65955 9.81323C5.22325 9.81323 3.22288 11.6828 3.01599 14.0652C2.99234 14.3344 2.75495 14.5336 2.48572 14.5105C2.21623 14.4871 2.01622 14.2497 2.03943 13.9802C2.28992 11.0958 4.71044 8.83276 7.65955 8.83276Z" fill="currentColor"/> <path d="M7.65955 1.34644C9.39678 1.34679 10.8051 2.7556 10.8051 4.49292C10.805 6.23016 9.39673 7.63808 7.65955 7.63843C5.92207 7.63843 4.51315 6.23038 4.51306 4.49292C4.51306 2.75538 5.92201 1.34644 7.65955 1.34644ZM7.65955 2.3269C6.46325 2.3269 5.49353 3.29662 5.49353 4.49292C5.49362 5.68914 6.4633 6.65894 7.65955 6.65894C8.85549 6.65858 9.82547 5.68892 9.82556 4.49292C9.82556 3.29684 8.85554 2.32726 7.65955 2.3269Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var r = n("zd8w"),
      o = n("oyxz"),
      d = n("Wf1j"),
      c = n("Qgfj"),
      u = n("HOLv")
    function p(e) {
      let l,
        n,
        a,
        o,
        d,
        c = (0, s.c)(16)
      c[0] !== e
        ? (({ children: l, isControlDisabled: n, isExplanationFocusable: a, ...o } = e),
          (c[0] = e),
          (c[1] = l),
          (c[2] = n),
          (c[3] = a),
          (c[4] = o))
        : ((l = c[1]), (n = c[2]), (a = c[3]), (o = c[4]))
      let u = l
      if (n && null != o.content && !0 !== o.disabled)
        if (a) {
          let e,
            n,
            s =
              l.props.ariaLabel ??
              l.props["aria-label"] ??
              ("string" == typeof l.props.children ? l.props.children : void 0)
          c[7] !== l ? ((e = (0, r.cloneElement)(l, { "aria-hidden": !0 })), (c[7] = l), (c[8] = e)) : (e = c[8])
          let i = e
          ;(c[9] !== l.props.checked || c[10] !== i || c[11] !== s
            ? ((n =
                "boolean" == typeof l.props.checked
                  ? (0, t.jsx)("div", {
                      "aria-checked": l.props.checked,
                      "aria-disabled": "true",
                      "aria-label": s,
                      role: "switch",
                      tabIndex: 0,
                      children: i,
                    })
                  : (0, t.jsx)("div", {
                      "aria-disabled": "true",
                      "aria-label": s,
                      role: "button",
                      tabIndex: 0,
                      children: i,
                    })),
              (c[9] = l.props.checked),
              (c[10] = i),
              (c[11] = s),
              (c[12] = n))
            : (n = c[12]),
            (u = n))
        } else {
          let e
          ;(c[5] !== l ? ((e = (0, t.jsx)("div", { children: l })), (c[5] = l), (c[6] = e)) : (e = c[6]), (u = e))
        }
      return (
        c[13] !== o || c[14] !== u
          ? ((d = (0, t.jsx)(i.m, { ...o, children: u })), (c[13] = o), (c[14] = u), (c[15] = d))
          : (d = c[15]),
        d
      )
    }
    function m(e) {
      let l,
        n = (0, s.c)(7),
        { restriction: i, surface: a } = e,
        r = i.origin?.name
      if (r?.type === "project") {
        let e
        if ("dialog" === a) {
          let e
          return (
            n[0] !== i.keyPath
              ? ((e = (0, t.jsx)(o.A, {
                  id: "skills.appsPage.appDisablement.projectSettingsDialog",
                  defaultMessage: "Set {keyPath} to true in this project\u2019s config.toml to enable this app",
                  values: { keyPath: i.keyPath },
                })),
                (n[0] = i.keyPath),
                (n[1] = e))
              : (e = n[1]),
            e
          )
        }
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(o.A, {
                id: "skills.appsPage.appDisablement.projectSettingsCard",
                defaultMessage:
                  "Disabled by project settings. Update this project\u2019s config.toml to enable this app",
              })),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (r?.type === "legacyManagedConfigTomlFromMdm") {
        let e
        return (
          n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(o.A, {
                id: "skills.appsPage.appDisablement.legacyDeviceManagement",
                defaultMessage: "Disabled by device management",
              })),
              (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      if (r?.type === "legacyManagedConfigTomlFromFile") {
        let e
        return (
          n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(o.A, {
                id: "skills.appsPage.appDisablement.administratorPolicy",
                defaultMessage: "Disabled by your administrator",
              })),
              (n[4] = e))
            : (e = n[4]),
          e
        )
      }
      if (r?.type === "sessionFlags") {
        let e
        return (
          n[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(o.A, {
                id: "skills.appsPage.appDisablement.sessionSettings",
                defaultMessage: "Disabled by session configuration",
              })),
              (n[5] = e))
            : (e = n[5]),
          e
        )
      }
      return (
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, t.jsx)(o.A, {
              id: "skills.appsPage.appDisablement.otherConfiguration",
              defaultMessage: "Disabled by configuration",
            })),
            (n[6] = l))
          : (l = n[6]),
        l
      )
    }
    function g(e) {
      let l,
        n,
        r,
        c,
        p,
        m = (0, s.c)(22),
        { appId: g, isAppDisabledWithoutRestriction: x, tool: h } = e,
        b = (0, d.A)()
      if ("disabled_by_admin" === h.disabledReason) {
        let e
        return (
          m[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsxs)("div", {
                className: "mt-1 flex items-center gap-1 text-xs text-secondary",
                children: [
                  (0, t.jsx)(u.I, { className: "shrink-0", "aria-hidden": !1, asset: a }),
                  (0, t.jsx)(o.A, { ...f.disabledByAdminTool }),
                ],
              })),
              (m[0] = e))
            : (e = m[0]),
          e
        )
      }
      let y = h.configRestriction
      if (null == y || x) {
        let e
        return (
          m[1] !== x || m[2] !== h.isEnabled
            ? ((e =
                !1 === h.isEnabled || x
                  ? (0, t.jsx)("div", {
                      className: "mt-1 text-xs text-secondary",
                      children: (0, t.jsx)(o.A, { ...f.unavailableTool }),
                    })
                  : null),
              (m[1] = x),
              (m[2] = h.isEnabled),
              (m[3] = e))
            : (e = m[3]),
          e
        )
      }
      let v = y.origin?.name
      m[4] !== b || m[5] !== v?.type
        ? ((l = b.formatMessage(f.configuredDisablementToolSource, { source: v?.type ?? "unknown" })),
          (m[4] = b),
          (m[5] = v?.type),
          (m[6] = l))
        : (l = m[6])
      let j = l,
        C = y.keyPath
      ;(null != g && (C = "app" === y.kind ? `apps.${g}.enabled` : `apps.${g}.tools.${h.name}.enabled`),
        m[7] !== y.keyPath || m[8] !== y.kind
          ? ((n = { keyPath: y.keyPath, kind: y.kind }), (m[7] = y.keyPath), (m[8] = y.kind), (m[9] = n))
          : (n = m[9]))
      let w = n
      if (y.isUserEditable && null != v) {
        let e
        ;(m[10] !== C || m[11] !== w
          ? ((e = (0, t.jsx)(o.A, { ...f.configuredDisablementToolRecoveryUserConfig, values: { ...w, keyPath: C } })),
            (m[10] = C),
            (m[11] = w),
            (m[12] = e))
          : (e = m[12]),
          (r = e))
      } else if (v?.type === "project") {
        let e
        ;(m[13] !== w
          ? ((e = (0, t.jsx)(o.A, { ...f.configuredDisablementToolRecoveryProjectConfig, values: w })),
            (m[13] = w),
            (m[14] = e))
          : (e = m[14]),
          (r = e))
      } else {
        let e
        return (
          m[15] !== j
            ? ((e = (0, t.jsx)("div", { className: "mt-1 text-xs text-secondary", children: j })),
              (m[15] = j),
              (m[16] = e))
            : (e = m[16]),
          e
        )
      }
      return (
        m[17] !== j
          ? ((c = (0, t.jsx)(i.m.TriggerDecorator, {
              className: "mt-1 block w-fit text-start text-xs text-secondary",
              unstyled: !0,
              children: j,
            })),
            (m[17] = j),
            (m[18] = c))
          : (c = m[18]),
        m[19] !== r || m[20] !== c
          ? ((p = (0, t.jsx)(i.m, { openDelay: 0, content: r, children: c })), (m[19] = r), (m[20] = c), (m[21] = p))
          : (p = m[21]),
        p
      )
    }
    let f = (0, c.YK)({
      disabledByAdminTool: {
        id: "skills.appsPage.toolsDialog.disabledByAdminTool",
        defaultMessage: "Disabled by admin",
      },
      configuredDisablementToolSource: {
        id: "skills.appsPage.toolsDialog.configuredDisablementToolSource",
        defaultMessage: `{source, select,
      project {Disabled by project settings}
      user {Disabled by your settings}
      enterpriseManaged {Disabled by your organization}
      mdm {Disabled by device management}
      system {Disabled by system configuration}
      sessionFlags {Disabled by session configuration}
      legacyManagedConfigTomlFromFile {Disabled by your administrator}
      legacyManagedConfigTomlFromMdm {Disabled by device management}
      other {Disabled by configuration}
    }`,
      },
      configuredDisablementToolRecoveryUserConfig: {
        id: "skills.appsPage.toolsDialog.configuredDisablementToolRecoveryUserConfig",
        defaultMessage:
          "Set {keyPath} to true in your user config.toml to enable this {kind, select, app {app} other {tool}}",
      },
      configuredDisablementToolRecoveryProjectConfig: {
        id: "skills.appsPage.toolsDialog.configuredDisablementToolRecoveryProjectConfig",
        defaultMessage:
          "Set {keyPath} to true in this project\u2019s config.toml to enable this {kind, select, app {app} other {tool}}",
      },
      unavailableTool: { id: "skills.appsPage.toolsDialog.unavailableTool", defaultMessage: "Unavailable" },
    })
  },
  ABMA(e, l, n) {
    var t = n("ABep"),
      s = n("QosV")
    n.d(
      l,
      {},
      {
        y: function (e) {
          let l,
            n = (0, s.c)(3),
            { ariaLabel: i, icon: a } = e
          return (
            n[0] !== i || n[1] !== a
              ? ((l = (0, t.jsx)("span", {
                  role: "img",
                  "aria-label": i,
                  className: "flex h-7 w-7 items-center justify-center rounded-md text-codex-description",
                  children: a,
                })),
                (n[0] = i),
                (n[1] = a),
                (n[2] = l))
              : (l = n[2]),
            l
          )
        },
      },
    )
  },
  yLkT(e, l, n) {
    let t = (0, n("ESTr").a)({
      name: "plugin-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
        visualBounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
        center: { x: 12.247895, y: 11.999512 },
        insets: { top: 2.304688, right: 2.07843, bottom: 2.305664, left: 2.574219 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.247895, y: 11.999512 },
          foreground: { x: 12.247895, y: 11.999512 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6257 2.30469C18.8374 2.30503 21.9216 6.88615 21.9216 11.0254C21.9215 12.7845 21.1877 14.5709 19.8923 15.6016C19.2023 16.1504 18.3817 16.459 17.4967 16.459C16.7049 16.459 15.8832 16.2131 15.0593 15.709C14.2555 16.3572 13.2769 16.8021 12.2306 16.8021C11.2525 16.8021 10.3076 16.4103 9.52802 15.6006L9.5124 15.585L8.98212 15.0254C8.67133 14.698 8.28105 14.2874 7.96162 13.9541C7.77577 13.7602 7.68342 13.5108 7.68342 13.2618C7.68342 12.9993 7.78604 12.7373 7.98994 12.541L8.27998 12.2607L7.11005 11.0537C6.96924 10.9082 6.89922 10.7202 6.89922 10.5324C6.89922 10.1179 7.23461 9.78236 7.64893 9.78236C7.84508 9.78236 8.04102 9.85877 8.18818 10.0107L9.36005 11.2217L11.5808 9.08398L10.4108 7.87695C10.27 7.73141 10.2 7.54346 10.2 7.35569C10.2 6.94116 10.5354 6.60561 10.9497 6.60561C11.1459 6.60561 11.3418 6.68201 11.489 6.83398L12.6608 8.04492C12.9809 7.73729 13.1873 7.47552 13.6557 7.47552C13.92 7.47552 14.1839 7.57957 14.3806 7.78613L15.945 9.42871C16.7005 10.2066 17.0634 11.1086 17.0634 12.0331C17.0634 12.9728 16.6913 13.8503 16.1354 14.5947C16.6442 14.8563 17.1006 14.959 17.4971 14.959C18.042 14.959 18.5348 14.765 18.9587 14.4277C19.8308 13.7338 20.4215 12.4183 20.4216 11.0254C20.4216 7.614 17.9118 3.80502 12.6257 3.80469C8.211 3.80469 4.39325 7.17775 4.09638 11.4287C4.0813 11.6447 4.07385 11.8592 4.07385 12.0718C4.07385 16.5377 7.36061 20.1942 12.2477 20.1943C14.1885 20.1943 16.1114 19.7093 17.4489 18.6738C17.5856 18.5681 17.7473 18.5169 17.9079 18.5169C18.3231 18.5169 18.6582 18.8523 18.6582 19.2655C18.6582 19.4901 18.5579 19.7124 18.3669 19.8604C16.6819 21.1647 14.3949 21.6943 12.2477 21.6943C6.47809 21.6942 2.57422 17.3134 2.57422 12.0689C2.57422 11.8224 2.58284 11.5741 2.60029 11.3242C2.95645 6.22419 7.48801 2.30469 12.6257 2.30469ZM9.38837 13.2773L10.571 14.5215L10.612 14.5645C11.1155 15.0854 11.6718 15.3017 12.2302 15.3017C12.2917 15.3017 12.3533 15.2991 12.4147 15.2939C13.0586 15.2401 13.7692 14.9031 14.4265 14.2705C15.0246 13.6947 15.5635 12.8942 15.5635 12.0337C15.5635 11.513 15.3636 10.9806 14.8659 10.4697L14.8591 10.4619L13.6403 9.18457L9.38837 13.2773Z" fill="currentColor"/>',
    })
    n.d(l, {}, { k: t })
  },
}
//# sourceMappingURL=249533.8c8e57d069.js.map
