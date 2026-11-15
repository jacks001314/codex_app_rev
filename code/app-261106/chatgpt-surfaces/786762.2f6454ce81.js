export const __rspack_esm_ids = [786762]
export const __webpack_modules__ = {
  nBD9(e) {
    e.exports = {}
  },
  hxrb(e, t, n) {
    var r = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, r.jsx)("svg", {
          width: 716,
          height: 716,
          viewBox: "149 149 418 418",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z",
            fill: "currentColor",
          }),
        })))
  },
  dxKw(e, t, n) {
    var r = n("QosV"),
      o = n("Wf1j"),
      i = n("GaA7"),
      a = n("q77y"),
      l = n("YgCO")
    n.d(
      t,
      {},
      {
        _: function () {
          let e,
            t = (0, r.c)(2),
            n = (0, o.A)()
          return (
            t[0] !== n
              ? ((e = async (e) => {
                  let { accept: t, allowMultiple: r, imagesOnly: o, kind: s, pickerTitle: c } = void 0 === e ? {} : e,
                    d = i.appServices.fileAttachments
                  if (d?.pickFiles == null) throw Error("File picking is not available in this host.")
                  return (0, a.P)(
                    d.pickFiles({
                      kind: s,
                      acceptedFileExtensions: (0, l.U)(t),
                      allowMultiple: r,
                      imagesOnly: o,
                      pickerTitle:
                        c ??
                        ("directory" === s
                          ? n.formatMessage({
                              id: "composer.filePicker.selectFolder",
                              defaultMessage: "Select folder",
                              description: "Title for the directory picker dialog",
                            })
                          : n.formatMessage({
                              id: "composer.filePicker.selectFiles",
                              defaultMessage: "Select files",
                              description: "Title for the multi-file picker dialog",
                            })),
                    }),
                  )
                }),
                (t[0] = n),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        },
      },
    )
  },
  nyOD(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("fX79"),
      a = n("Wf1j")
    let l = (0, n("Qgfj").YK)({
      confirming_payment: {
        id: "businessWorkspaceLoading.confirmingPayment",
        defaultMessage: "Confirming your payment",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while their checkout payment is being confirmed. Plain text with no markup.",
      },
      preparing_workspace: {
        id: "businessWorkspaceLoading.preparingWorkspace",
        defaultMessage: "Preparing your workspace",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while their purchased workspace is being created. Plain text with no markup.",
      },
      setting_up_access: {
        id: "businessWorkspaceLoading.settingUpAccess",
        defaultMessage: "Setting up your workspace access",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while their membership and workspace access are being prepared. Plain text with no markup.",
      },
      opening_workspace: {
        id: "businessWorkspaceLoading.openingWorkspace",
        defaultMessage: "Opening your workspace",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while ChatGPT switches into their newly prepared workspace. Plain text with no markup.",
      },
      description: {
        id: "businessWorkspaceLoading.waitDescription",
        defaultMessage: "This may take some time.",
        description:
          "Short, reassuring supporting sentence shown to a new Business workspace owner beneath a progress headline on the full-screen onboarding loading screen. It sets the expectation that preparing their paid workspace can take a little time. Plain text with no markup.",
      },
    })
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            s,
            c = (0, o.c)(8),
            { stage: d } = e,
            u = void 0 === d ? "preparing_workspace" : d,
            g = (0, a.A)()
          c[0] !== g || c[1] !== u ? ((t = g.formatMessage(l[u])), (c[0] = g), (c[1] = u), (c[2] = t)) : (t = c[2])
          let f = t
          return (
            c[3] !== g ? ((n = g.formatMessage(l.description)), (c[3] = g), (c[4] = n)) : (n = c[4]),
            c[5] !== f || c[6] !== n
              ? ((s = (0, r.jsx)(i.ZR, { primaryText: f, secondaryText: n })), (c[5] = f), (c[6] = n), (c[7] = s))
              : (s = c[7]),
            s
          )
        },
      },
    )
  },
  GN6v(e, t, n) {
    n.d(t, { k: () => j })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("fX79"),
      a = n("zd8w"),
      l = n("fVs5"),
      s = n("G8V1"),
      c = n("HZfM"),
      d = n("X1mr"),
      u = n("nyOD"),
      g = n("o4gB"),
      f = n("vV6o"),
      h = n("cX6x"),
      p = n("a6Zv"),
      m = n("sk59"),
      b = n("zOE4"),
      y = n("XhHf"),
      x = n("hxrb"),
      w = n("ISAq")
    function k(e) {
      let t,
        n,
        i = (0, o.c)(3)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(y.B, {
              className: "size-15",
              Icon: x.A,
              maskUrl: (0, w.Y)(
                '<svg width="716" height="716" viewBox="149 149 418 418" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z" fill="currentColor"/>\n</svg>\n',
              ),
            })),
            (i[0] = t))
          : (t = i[0]),
        i[1] !== e
          ? ((n = (0, r.jsx)("div", {
              className: "relative size-full pt-(--height-toolbar) pb-28",
              children: (0, r.jsx)(b.LoadingPage, { ...e, startupIndicator: t }),
            })),
            (i[1] = e),
            (i[2] = n))
          : (n = i[2]),
        n
      )
    }
    var v = n("CYQI")
    function j(e) {
      let t,
        n,
        f,
        y,
        x,
        w,
        j,
        N = (0, o.c)(36),
        { pathname: L, search: E } = (0, c.zy)(),
        I = (0, a.useContext)(c.ay),
        R = (0, c.$P)("/payments/success-team"),
        P = (0, a.useContext)(l.ob),
        B = (0, p.Y)()
      N[0] !== I?.matches || N[1] !== I?.matches.map
        ? ((t = I?.matches.map(M).findLast(_)), (N[0] = I?.matches), (N[1] = I?.matches.map), (N[2] = t))
        : (t = N[2])
      let T = t
      N[3] !== I?.matches || N[4] !== I?.matches.some
        ? ((n = I?.matches.some(A)), (N[3] = I?.matches), (N[4] = I?.matches.some), (N[5] = n))
        : (n = N[5])
      let z = !0 === n
      N[6] !== I?.matches || N[7] !== I?.matches.some
        ? ((f = I?.matches.some(C)), (N[6] = I?.matches), (N[7] = I?.matches.some), (N[8] = f))
        : (f = N[8])
      let G = !0 === f
      if (
        N[9] !== R ||
        N[10] !== G ||
        N[11] !== z ||
        N[12] !== B ||
        N[13] !== L ||
        N[14] !== e ||
        N[15] !== T ||
        N[16] !== I ||
        N[17] !== E
      ) {
        x = Symbol.for("react.early_return_sentinel")
        e: {
          let t = new URLSearchParams(E),
            n = (0, m.o)(E, I),
            o = "true" === t.get("account_switch")
          if ("/auth/login" === L) {
            let e = t.get("next") ?? t.get("callbackUrl")
            if (null != e)
              try {
                let t = new URL(e, "https://chatgpt.com")
                ;((o = "true" === t.searchParams.get("account_switch")), (G = t.pathname === R))
              } catch {}
          }
          if (!n && null == T && !o && !G && !z) {
            let t
            if ("blossom" === e.variant && (0, d.WF)().isBrowserSideChat) {
              let t
              ;(N[21] !== e ? ((t = (0, r.jsx)(k, { ...e })), (N[21] = e), (N[22] = t)) : (t = N[22]), (x = t))
              break e
            }
            ;(N[23] !== e ? ((t = (0, r.jsx)(b.LoadingPage, { ...e })), (N[23] = e), (N[24] = t)) : (t = N[24]),
              (x = t))
            break e
          }
          if (n) {
            let e
            ;(N[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(v.d, {})), (N[25] = e))
              : (e = N[25]),
              (y = e))
          } else if (null != T) y = T
          else if (
            z &&
            ("/checkout/verify" === L ||
              "/payments/success-credit-purchase" === L ||
              ("/payments/success" === L && "standalone_credit" === t.get("checkout_kind")))
          ) {
            let e
            ;(N[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(g.g, {})), (N[26] = e))
              : (e = N[26]),
              (y = e))
          } else if (G) {
            let e
            ;(N[27] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(u.u, {})), (N[27] = e))
              : (e = N[27]),
              (y = e))
          } else if (o) {
            let e
            ;(N[28] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(i.IL, {})), (N[28] = e))
              : (e = N[28]),
              (y = e))
          } else if (
            (/\/(?:pricing|purchase)\/credits\/?$/.test(L) ||
              (null != (0, c.B6)("/checkout/:processorEntity/:checkoutSessionId", L) && "credits" === t.get(i.Az))) &&
            (0, h.YC)("2799430872")?.value[i.zp] === !0
          ) {
            let e,
              t = !!B
            ;(N[29] !== t
              ? ((e = (0, r.jsx)(i.FO, { isDarkMode: t, context: "credits" })), (N[29] = t), (N[30] = e))
              : (e = N[30]),
              (y = e))
          } else {
            let e
            ;(N[31] !== B
              ? ((e = (0, r.jsx)(i._k, { isDarkMode: B, isScreenAtLeastSm: !1, prefersReducedMotion: !0 })),
                (N[31] = B),
                (N[32] = e))
              : (e = N[32]),
              (y = e))
          }
        }
        ;((N[9] = R),
          (N[10] = G),
          (N[11] = z),
          (N[12] = B),
          (N[13] = L),
          (N[14] = e),
          (N[15] = T),
          (N[16] = I),
          (N[17] = E),
          (N[18] = y),
          (N[19] = x),
          (N[20] = G))
      } else ((y = N[18]), (x = N[19]), (G = N[20]))
      return x !== Symbol.for("react.early_return_sentinel")
        ? x
        : null != P
          ? y
          : (N[33] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, d.WF)().locale ?? "en-US"), (N[33] = w))
              : (w = N[33]),
            N[34] !== y
              ? ((j = (0, r.jsx)(s.A, { locale: w, defaultLocale: "en-US", onError: S, children: y })),
                (N[34] = y),
                (N[35] = j))
              : (j = N[35]),
            j)
    }
    function S() {}
    function C(e) {
      return e.route.handle === f.Lo
    }
    function A(e) {
      return e.route.handle === f.Hu
    }
    function _(e) {
      return null != e
    }
    function M(e) {
      let { route: t } = e,
        n = t.handle
      return null != n && "object" == typeof n && "loadingPage" in n && (0, a.isValidElement)(n.loadingPage)
        ? n.loadingPage
        : void 0
    }
  },
  sk59(e, t, n) {
    n.d(t, { o: () => i })
    var r = n("ASxG")
    let o = r.object({
      isMatchingLoggedInUser: r.literal(!0),
      referral: r.object({ redemption_action: r.string() }).nullable().optional(),
    })
    function i(e, t) {
      var n
      let r
      if (new URLSearchParams(e).get("workspace_join")) return !0
      let i = t?.matches.find((e) => "workspace-invite-loading" === e.route.handle)
      return (
        null != i &&
        ((n = t?.loaderData[i.route.id]),
        (r = o.safeParse(n)).success &&
          (void 0 === r.data.referral || r.data.referral?.redemption_action.trim().toLowerCase() === "workspace_join"))
      )
    }
  },
  CYQI(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("zd8w"),
      a = n("oyxz"),
      l = n("HZfM"),
      s = n("Sm6l"),
      c = n("RNul"),
      d = n("gLgE")
    n.d(
      t,
      {},
      {
        d: function () {
          let e,
            t,
            n,
            u,
            g,
            f,
            h,
            p = (0, o.c)(12),
            m = (0, l.zy)(),
            [b, y] = (0, i.useState)(!1)
          return (
            p[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => {
                  let e = window.setTimeout(() => y(!0), 3e4)
                  return () => window.clearTimeout(e)
                }),
                (t = []),
                (p[0] = e),
                (p[1] = t))
              : ((e = p[0]), (t = p[1])),
            (0, i.useEffect)(e, t),
            p[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, r.jsx)("span", {
                  role: "status",
                  children: (0, r.jsx)(a.A, {
                    id: "browser.invite.joiningWorkspace.title",
                    defaultMessage: "Joining workspace…",
                    description:
                      "Loading heading shown continuously while accepting a workspace invitation and loading the destination workspace",
                  }),
                })),
                (p[2] = n))
              : (n = p[2]),
            p[3] !== b
              ? ((u = b
                  ? (0, r.jsx)(a.A, {
                      id: "browser.invite.joiningWorkspace.slow",
                      defaultMessage: "This is taking longer than expected. You can reload the page to try again.",
                      description:
                        "Recovery guidance when joining or loading an invited workspace takes too long; reloading checks the current invitation and workspace state",
                    })
                  : null),
                (p[3] = b),
                (p[4] = u))
              : (u = p[4]),
            p[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, r.jsx)(c.y, { containerClassName: "self-center" })), (p[5] = g))
              : (g = p[5]),
            p[6] !== b || p[7] !== m
              ? ((f = b
                  ? (0, r.jsx)(s.z, {
                      to: m,
                      reloadDocument: !0,
                      color: "primary",
                      size: "auth",
                      children: (0, r.jsx)(a.A, {
                        id: "browser.invite.joiningWorkspace.reload",
                        defaultMessage: "Reload page",
                        description:
                          "Reloads the current page to recover from a workspace join or destination load that has stalled",
                      }),
                    })
                  : null),
                (p[6] = b),
                (p[7] = m),
                (p[8] = f))
              : (f = p[8]),
            p[9] !== u || p[10] !== f
              ? ((h = (0, r.jsxs)(d.q, { showFooter: !1, title: n, description: u, children: [g, f] })),
                (p[9] = u),
                (p[10] = f),
                (p[11] = h))
              : (h = p[11]),
            h
          )
        },
      },
    )
  },
  toKG(e, t, n) {
    n.d(
      t,
      {},
      {
        N: function (e) {
          return new URL("/codex/desktop-session", e?.trim() || "https://chatgpt.com").toString()
        },
      },
    )
  },
  Xhdp(e, t, n) {
    n.d(t, { LoginRoute: () => tr })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("HZfM")
    n("dZgM")
    var a = n("zTeN"),
      l = n("DBCl"),
      s = n("zd8w"),
      c = n("GLfw"),
      d = n("ZHMx")
    ;(n("xwbo"), n("VrP7"))
    var u = n("Wd6S"),
      g = n("EOo5")
    n("fO4g")
    var f = n("Sm6l"),
      h = n("Ot7V")
    n("aQvR")
    var p = n("zLIa"),
      m = n("SGsN")
    ;(n("Uhbj"), n("Q30N"))
    var b = n("OWtl"),
      y = n("kfGJ"),
      x = n("D1V6"),
      w = n("aepO")
    ;(n("kr0v"), n("iKF7"))
    var k = n("iRMi"),
      v = n("irkb"),
      j = n("Wf1j"),
      S = n("oyxz"),
      C = n("CfsC"),
      A = n("VloC"),
      _ = n("ld84"),
      M = n("RNul"),
      N = n("nlNF"),
      L = n("DIsA"),
      E = n("bdDz"),
      I = n("e3vf"),
      R = n("yGJW"),
      P = n("GaA7"),
      B = n("hZax"),
      T = n("SzCH"),
      z = n("vvrk"),
      G = n("nsuH"),
      K = n("HgLj")
    let W = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } },
      O = { up: "down", down: "up", left: "right", right: "left" }
    function V(e) {
      let t,
        n,
        i,
        a,
        l,
        c,
        d,
        u,
        g,
        f,
        h,
        p,
        m,
        b,
        y,
        x = (0, o.c)(22),
        { onExit: w, audioContextRef: k } = e,
        v = (0, s.useRef)(null),
        j = (0, s.useRef)(null),
        S = (0, s.useRef)(null)
      x[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (x[0] = t)) : (t = x[0])
      let C = (0, s.useRef)(t)
      x[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = { x: 0, y: 0 }), (x[1] = n)) : (n = x[1])
      let A = (0, s.useRef)(n),
        _ = (0, s.useRef)("right"),
        M = (0, s.useRef)("right")
      x[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { columns: 12, rows: 12, cellSize: 18, width: 216, height: 216 }), (x[2] = i))
        : (i = x[2])
      let N = (0, s.useRef)(i),
        L = (0, s.useRef)(null),
        E = (0, s.useEffectEvent)(w)
      x[3] !== k
        ? ((a = (e, t, n) => {
            if (null == k.current) return
            let r = k.current
            "suspended" === r.state && r.resume()
            let o = t / 1e3,
              i = r.createOscillator(),
              a = r.createGain()
            ;((i.type = n),
              (i.frequency.value = e),
              a.gain.setValueAtTime(1e-4, r.currentTime),
              a.gain.exponentialRampToValueAtTime(0.18, r.currentTime + 0.01),
              a.gain.exponentialRampToValueAtTime(1e-4, r.currentTime + o),
              i.connect(a),
              a.connect(r.destination),
              i.start(),
              i.stop(r.currentTime + o),
              (i.onended = () => {
                ;(i.disconnect(), a.disconnect())
              }))
          }),
          (x[3] = k),
          (x[4] = a))
        : (a = x[4])
      let I = (0, s.useEffectEvent)(a)
      x[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => {
            null != S.current && (window.clearInterval(S.current), (S.current = null))
          }),
          (x[5] = l))
        : (l = x[5])
      let R = l
      x[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = () => {
            if (L.current) return L.current
            let e = v.current
            if (null == e) return { snake: "#ffffff", food: "#f97316" }
            let t = getComputedStyle(e).color || "#ffffff",
              n = getComputedStyle(document.documentElement),
              r = {
                snake: t,
                food:
                  n.getPropertyValue("--color-chart-red").trim() ||
                  n.getPropertyValue("--color-chart-orange").trim() ||
                  "#f97316",
              }
            return ((L.current = r), r)
          }),
          (x[6] = c))
        : (c = x[6])
      let P = c
      x[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => {
            if (null == v.current) return null
            let e = Math.max(1, Math.floor(window.devicePixelRatio || 1))
            ;((v.current.width = Math.max(1, Math.floor(N.current.width * e))),
              (v.current.height = Math.max(1, Math.floor(N.current.height * e))),
              (v.current.style.width = `${N.current.width}px`),
              (v.current.style.height = `${N.current.height}px`))
            let t = v.current.getContext("2d")
            return null == t ? null : (t.setTransform(e, 0, 0, e, 0, 0), (t.imageSmoothingEnabled = !1), t)
          }),
          (x[7] = d))
        : (d = x[7])
      let B = d
      x[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e) => {
            let t = { x: Math.floor(Math.random() * N.current.columns), y: Math.floor(Math.random() * N.current.rows) }
            for (; e.some((e) => e.x === t.x && e.y === t.y);)
              t = { x: Math.floor(Math.random() * N.current.columns), y: Math.floor(Math.random() * N.current.rows) }
            return t
          }),
          (x[8] = u))
        : (u = x[8])
      let T = u
      x[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = () => {
            let e = B()
            if (null == e) return
            let t = P()
            for (let n of (e.clearRect(0, 0, N.current.width, N.current.height), (e.fillStyle = t.snake), C.current))
              e.fillRect(n.x * N.current.cellSize, n.y * N.current.cellSize, N.current.cellSize, N.current.cellSize)
            ;((e.fillStyle = t.food),
              e.fillRect(
                A.current.x * N.current.cellSize,
                A.current.y * N.current.cellSize,
                N.current.cellSize,
                N.current.cellSize,
              ))
          }),
          (x[9] = g))
        : (g = x[9])
      let z = g,
        V = (0, s.useEffectEvent)(z)
      x[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = () => {
            let e, t
            if (null == j.current) return
            let n = Math.max(1, j.current.clientWidth),
              r = Math.max(1, j.current.clientHeight)
            if (n === N.current.width && r === N.current.height && C.current.length > 0) return
            let o = Math.min(n, r),
              i = o / Math.max(12, Math.floor(o / 18))
            ;((N.current = {
              columns: Math.max(12, Math.floor(n / i)),
              rows: Math.max(12, Math.floor(r / i)),
              cellSize: i,
              width: n,
              height: r,
            }),
              (e = Math.floor(N.current.columns / 2)),
              (C.current = [
                { x: e, y: (t = Math.floor(N.current.rows / 2)) },
                { x: e - 1, y: t },
                { x: e - 2, y: t },
              ]),
              (_.current = "right"),
              (M.current = "right"),
              (A.current = T(C.current)),
              z())
          }),
          (x[10] = f))
        : (f = x[10])
      let D = f,
        U = (0, s.useEffectEvent)(D),
        F = (0, G.wY)(D)
      return (
        x[11] !== V || x[12] !== E || x[13] !== I || x[14] !== U
          ? ((h = () => {
              U()
              let e = (e) => {
                let t = null
                ;("ArrowUp" === e.key || "w" === e.key || "W" === e.key
                  ? (t = "up")
                  : "ArrowDown" === e.key || "s" === e.key || "S" === e.key
                    ? (t = "down")
                    : "ArrowLeft" === e.key || "a" === e.key || "A" === e.key
                      ? (t = "left")
                      : ("ArrowRight" === e.key || "d" === e.key || "D" === e.key) && (t = "right"),
                  null == t || (e.preventDefault(), O[_.current] !== t && (M.current = t)))
              }
              return (
                window.addEventListener("keydown", e),
                (S.current = window.setInterval(() => {
                  let e = C.current,
                    t = e[0],
                    n = M.current,
                    r = W[n],
                    o = { x: t.x + r.x, y: t.y + r.y }
                  if (o.x < 0 || o.y < 0 || o.x >= N.current.columns || o.y >= N.current.rows) {
                    ;(R(), I(140, 220, "sawtooth"), E())
                    return
                  }
                  let i = o.x === A.current.x && o.y === A.current.y
                  if ((i ? e : e.slice(0, -1)).some((e) => e.x === o.x && e.y === o.y)) {
                    ;(R(), I(160, 220, "sawtooth"), E())
                    return
                  }
                  let a = i ? [o, ...e] : [o, ...e.slice(0, -1)]
                  ;((C.current = a), (_.current = n), i && ((A.current = T(a)), I(660, 120, "square")), V())
                }, 120)),
                () => {
                  ;(R(), window.removeEventListener("keydown", e))
                }
              )
            }),
            (x[11] = V),
            (x[12] = E),
            (x[13] = I),
            (x[14] = U),
            (x[15] = h))
          : (h = x[15]),
        x[16] === Symbol.for("react.memo_cache_sentinel") ? ((p = []), (x[16] = p)) : (p = x[16]),
        (0, s.useEffect)(h, p),
        x[17] !== F ? ((m = (0, K.P)(j, F)), (x[17] = F), (x[18] = m)) : (m = x[18]),
        x[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, r.jsx)("canvas", { className: "h-full w-full text-default", ref: v })), (x[19] = b))
          : (b = x[19]),
        x[20] !== m
          ? ((y = (0, r.jsx)("div", { ref: m, className: "h-full w-full", children: b })), (x[20] = m), (x[21] = y))
          : (y = x[21]),
        y
      )
    }
    var D = n("ztxw"),
      U = n("AEu9"),
      F = n("Qgfj"),
      q = n("bVeK"),
      $ = n.p + "assets/c41ab3a754ce.svg"
    function H(e) {
      let t,
        n,
        i,
        a,
        l,
        c,
        d,
        u = (0, o.c)(24),
        {
          children: g,
          value: f,
          onChange: h,
          type: m,
          autoFocus: b,
          required: y,
          placeholder: x,
          help: w,
          action: k,
        } = e,
        v = void 0 === m ? "text" : m,
        j = void 0 !== b && b,
        S = void 0 === y || y,
        C = (0, s.useId)()
      u[0] !== g
        ? ((t = (0, r.jsx)("span", { className: "select-none", children: g })), (u[0] = g), (u[1] = t))
        : (t = u[1])
      let A = null != w ? C : void 0
      return (
        u[2] !== h ? ((n = (e) => h(e.target.value)), (u[2] = h), (u[3] = n)) : (n = u[3]),
        u[4] !== j || u[5] !== x || u[6] !== S || u[7] !== A || u[8] !== n || u[9] !== v || u[10] !== f
          ? ((i = (0, r.jsx)(p.pd, {
              "aria-describedby": A,
              autoFocus: j,
              type: v,
              required: S,
              placeholder: x,
              value: f,
              onChange: n,
            })),
            (u[4] = j),
            (u[5] = x),
            (u[6] = S),
            (u[7] = A),
            (u[8] = n),
            (u[9] = v),
            (u[10] = f),
            (u[11] = i))
          : (i = u[11]),
        u[12] !== t || u[13] !== i
          ? ((a = (0, r.jsxs)("label", {
              className: "flex min-w-0 flex-1 flex-col gap-2 text-sm font-normal text-default",
              children: [t, i],
            })),
            (u[12] = t),
            (u[13] = i),
            (u[14] = a))
          : (a = u[14]),
        u[15] !== k || u[16] !== a
          ? ((l = (0, r.jsxs)("div", { className: "flex items-end gap-2", children: [a, k] })),
            (u[15] = k),
            (u[16] = a),
            (u[17] = l))
          : (l = u[17]),
        u[18] !== w || u[19] !== C
          ? ((c =
              null != w
                ? (0, r.jsx)("p", { id: C, className: "text-sm text-secondary select-none", children: w })
                : null),
            (u[18] = w),
            (u[19] = C),
            (u[20] = c))
          : (c = u[20]),
        u[21] !== c || u[22] !== l
          ? ((d = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [l, c] })),
            (u[21] = c),
            (u[22] = l),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    var Z = n("aqd9"),
      Q = n("T1PX"),
      Y = n.p + "assets/ac32a15625d4.svg",
      X = n("LIss")
    function J(e) {
      let t,
        n,
        i,
        a,
        l,
        c,
        d,
        u,
        g,
        f,
        h,
        p,
        m,
        b = (0, o.c)(31),
        { source: y, target: x, connector: w } = e,
        k = (0, Q.I)(),
        [v, j] = (0, s.useState)(k),
        [S, C] = (0, s.useState)(k)
      ;(b[0] !== k || b[1] !== v
        ? ((t = () => {
            if (!v || k) return
            let e = setTimeout(() => C(!0), 150)
            return () => clearTimeout(e)
          }),
          (n = [v, k]),
          (b[0] = k),
          (b[1] = v),
          (b[2] = t),
          (b[3] = n))
        : ((t = b[2]), (n = b[3])),
        (0, s.useEffect)(t, n),
        b[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { position: "relative", width: 170.5, height: 48, flexShrink: 0 }), (b[4] = i))
          : (i = b[4]),
        b[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = {
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: -24,
              marginTop: -24,
              width: 48,
              height: 48,
              display: "grid",
              placeItems: "center",
              zIndex: 2,
            }),
            (b[5] = a))
          : (a = b[5]),
        b[6] !== k ? ((l = !k && { x: 0 }), (b[6] = k), (b[7] = l)) : (l = b[7]),
        b[8] === Symbol.for("react.memo_cache_sentinel") ? ((c = { x: -61.25 }), (b[8] = c)) : (c = b[8]))
      let A = 0.5 * !k
      return (
        b[9] === Symbol.for("react.memo_cache_sentinel") ? ((d = [0.4, 0, 0.2, 1]), (b[9] = d)) : (d = b[9]),
        b[10] !== A ? ((u = { duration: A, ease: d }), (b[10] = A), (b[11] = u)) : (u = b[11]),
        b[12] !== v
          ? ((g = (e) => {
              let { x: t } = e
              !v && "number" == typeof t && t <= -60.75 && j(!0)
            }),
            (b[12] = v),
            (b[13] = g))
          : (g = b[13]),
        b[14] !== y || b[15] !== g || b[16] !== l || b[17] !== u
          ? ((f = (0, r.jsx)(X.P.div, { style: a, initial: l, animate: c, transition: u, onUpdate: g, children: y })),
            (b[14] = y),
            (b[15] = g),
            (b[16] = l),
            (b[17] = u),
            (b[18] = f))
          : (f = b[18]),
        b[19] !== k || b[20] !== x || b[21] !== v
          ? ((h =
              (v || k) &&
              (0, r.jsx)(X.P.div, {
                style: {
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginLeft: -24,
                  marginTop: -24,
                  width: 48,
                  height: 48,
                  display: "grid",
                  placeItems: "center",
                  zIndex: 1,
                },
                initial: !k && { scale: 0, opacity: 0, x: 61.25 },
                animate: { scale: k ? 1 : [0, 1.1, 1], opacity: 1, x: 61.25 },
                transition: { duration: 0.3 * !k, ease: "easeOut" },
                children: x,
              })),
            (b[19] = k),
            (b[20] = x),
            (b[21] = v),
            (b[22] = h))
          : (h = b[22]),
        b[23] !== w || b[24] !== S || b[25] !== k
          ? ((p =
              (S || k) &&
              (0, r.jsx)("div", {
                style: { position: "absolute", inset: 0, display: "grid", placeItems: "center" },
                children: (0, r.jsx)(X.P.div, {
                  initial: !k && { opacity: 0, y: 12, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: k ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 26 },
                  children: w,
                }),
              })),
            (b[23] = w),
            (b[24] = S),
            (b[25] = k),
            (b[26] = p))
          : (p = b[26]),
        b[27] !== f || b[28] !== h || b[29] !== p
          ? ((m = (0, r.jsxs)("div", { "aria-hidden": "true", style: i, children: [f, h, p] })),
            (b[27] = f),
            (b[28] = h),
            (b[29] = p),
            (b[30] = m))
          : (m = b[30]),
        m
      )
    }
    var ee = n.p + "assets/e51e44bbaeb5.svg"
    function et(e) {
      let t,
        n,
        i,
        a,
        l,
        s = (0, o.c)(11),
        { target: c } = e,
        d = (0, Q.I)()
      s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)("img", { alt: "", className: "size-12 invert-5 dark:invert-95", src: Y })), (s[0] = t))
        : (t = s[0])
      let u = d ? void 0 : "opacity-24"
      return (
        s[1] !== u ? ((n = (0, r.jsx)("img", { alt: "", className: u, src: ee })), (s[1] = u), (s[2] = n)) : (n = s[2]),
        s[3] !== d
          ? ((i = d ? null : (0, r.jsx)("span", { ref: Z.d, className: "dots-Qf_9QK" })), (s[3] = d), (s[4] = i))
          : (i = s[4]),
        s[5] !== n || s[6] !== i
          ? ((a = (0, r.jsxs)("span", { className: "relative block", children: [n, i] })),
            (s[5] = n),
            (s[6] = i),
            (s[7] = a))
          : (a = s[7]),
        s[8] !== a || s[9] !== c
          ? ((l = (0, r.jsx)(J, { source: t, target: c, connector: a })), (s[8] = a), (s[9] = c), (s[10] = l))
          : (l = s[10]),
        l
      )
    }
    function en(e) {
      let t,
        n,
        i,
        a,
        l,
        s,
        c,
        d = (0, o.c)(20),
        { providerLogo: u, title: g, errorMessage: h, children: p, backLabel: m, backDisabled: b, onBack: y } = e
      return (
        d[0] !== u ? ((t = (0, r.jsx)(et, { target: u })), (d[0] = u), (d[1] = t)) : (t = d[1]),
        d[2] !== g
          ? ((n = (0, r.jsx)("h1", {
              className: "w-full text-center text-xl leading-9 font-normal text-default",
              children: g,
            })),
            (d[2] = g),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== t || d[5] !== n
          ? ((i = (0, r.jsxs)("div", {
              className: "flex w-full shrink-0 flex-col items-center gap-4 select-none",
              children: [t, n],
            })),
            (d[4] = t),
            (d[5] = n),
            (d[6] = i))
          : (i = d[6]),
        d[7] !== h
          ? ((a =
              null != h
                ? (0, r.jsx)("p", {
                    role: "alert",
                    className: "text-center text-[14px] leading-5 font-normal text-codex-description",
                    children: h,
                  })
                : null),
            (d[7] = h),
            (d[8] = a))
          : (a = d[8]),
        d[9] !== b || d[10] !== m || d[11] !== y
          ? ((l = (0, r.jsx)(f.$, {
              className: "w-full shrink-0 justify-center",
              color: "ghostTertiary",
              size: "large",
              type: "button",
              disabled: b,
              onClick: y,
              children: m,
            })),
            (d[9] = b),
            (d[10] = m),
            (d[11] = y),
            (d[12] = l))
          : (l = d[12]),
        d[13] !== p || d[14] !== a || d[15] !== l
          ? ((s = (0, r.jsxs)("div", { className: "flex min-h-0 w-full flex-col gap-3", children: [a, p, l] })),
            (d[13] = p),
            (d[14] = a),
            (d[15] = l),
            (d[16] = s))
          : (s = d[16]),
        d[17] !== i || d[18] !== s
          ? ((c = (0, r.jsx)("div", {
              className: "flex h-full w-full justify-center overflow-y-auto bg-surface px-6 py-4 text-default",
              children: (0, r.jsxs)("div", {
                className: "my-auto flex max-h-full w-full max-w-lg shrink-0 flex-col items-center gap-8",
                children: [i, s],
              }),
            })),
            (d[17] = i),
            (d[18] = s),
            (d[19] = c))
          : (c = d[19]),
        c
      )
    }
    let er = ["profile", "accessKeys", "apiKey"]
    function eo(e) {
      let t,
        n = (0, o.c)(60),
        {
          detectedCredentials: i,
          supportsAwsCredentials: a,
          supportsAccessKeys: l,
          isDetecting: c,
          isSubmitting: d,
          errorMessage: u,
          onBack: g,
          onClearError: h,
          onDetectCredentials: p,
          onSubmit: m,
        } = e,
        b = (0, j.A)(),
        y = (0, s.useId)(),
        x = (0, s.useId)(),
        [w, k] = (0, s.useState)(null),
        [v, C] = (0, s.useState)(null),
        [A, _] = (0, s.useState)(""),
        [M, N] = (0, s.useState)(""),
        [L, E] = (0, s.useState)(""),
        [I, R] = (0, s.useState)(""),
        [P, B] = (0, s.useState)(""),
        [T, z] = (0, s.useState)(""),
        G = a && c,
        K = i?.activeProfile ?? "default"
      if (
        n[0] !== L ||
        n[1] !== T ||
        n[2] !== i ||
        n[3] !== x ||
        n[4] !== v ||
        n[5] !== u ||
        n[6] !== b ||
        n[7] !== G ||
        n[8] !== d ||
        n[9] !== y ||
        n[10] !== g ||
        n[11] !== h ||
        n[12] !== p ||
        n[13] !== m ||
        n[14] !== K ||
        n[15] !== A ||
        n[16] !== M ||
        n[17] !== I ||
        n[18] !== w ||
        n[19] !== P ||
        n[20] !== l ||
        n[21] !== a
      ) {
        let e,
          o,
          s,
          c,
          j,
          W,
          O,
          V,
          D = i?.profiles.slice().sort((e, t) => Number(t.name === K) - Number(e.name === K)),
          F =
            D?.find((e) => {
              let { name: t } = e
              return t === v
            }) ?? D?.[0],
          Z = (null != D && D.length > 0) || i?.environmentCredentialsAvailable === !0,
          Q = a ? (w ?? (Z ? null : "profile")) : "apiKey"
        n[23] !== h
          ? ((e = (e) => {
              ;(h(), k(e))
            }),
            (n[23] = h),
            (n[24] = e))
          : (e = n[24])
        let Y = e
        ;(n[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)("img", { alt: "", className: "w-12 dark:hue-rotate-180 dark:invert", src: $ })),
            (s = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.bedrock.title",
              defaultMessage: "Set up Amazon Bedrock",
              description: "Title for Amazon Bedrock setup on desktop onboarding",
            })),
            (n[25] = o),
            (n[26] = s))
          : ((o = n[25]), (s = n[26])),
          n[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.bedrock.back",
                defaultMessage: "Back",
                description: "Button label to go back from Amazon Bedrock setup",
              })),
              (n[27] = c))
            : (c = n[27]),
          n[28] !== Z || n[29] !== Q || n[30] !== g || n[31] !== Y || n[32] !== a
            ? ((j = () => {
                ;(Y(null), (null != Q && a && Z) || g())
              }),
              (n[28] = Z),
              (n[29] = Q),
              (n[30] = g),
              (n[31] = Y),
              (n[32] = a),
              (n[33] = j))
            : (j = n[33]),
          n[34] !== G
            ? ((W = G
                ? (0, r.jsx)("p", {
                    className: "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                    children: (0, r.jsx)(S.A, {
                      id: "electron.onboarding.login.bedrock.detecting",
                      defaultMessage: "Checking for AWS credentials…",
                      description: "Loading message while desktop onboarding checks for AWS credentials",
                    }),
                  })
                : null),
              (n[34] = G),
              (n[35] = W))
            : (W = n[35]),
          n[36] !== i || n[37] !== u || n[38] !== Z || n[39] !== G || n[40] !== a
            ? ((O =
                G || !a || null == i || null != u || Z
                  ? null
                  : (0, r.jsx)("p", {
                      className: "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                      children: (0, r.jsx)(S.A, {
                        id: "electron.onboarding.login.bedrock.noCredentials",
                        defaultMessage: "No AWS credentials found",
                        description: "Message shown when desktop onboarding finds no AWS credentials",
                      }),
                    })),
              (n[36] = i),
              (n[37] = u),
              (n[38] = Z),
              (n[39] = G),
              (n[40] = a),
              (n[41] = O))
            : (O = n[41]),
          n[42] !== L ||
          n[43] !== T ||
          n[44] !== b ||
          n[45] !== G ||
          n[46] !== d ||
          n[47] !== Q ||
          n[48] !== y ||
          n[49] !== h ||
          n[50] !== p ||
          n[51] !== m ||
          n[52] !== A ||
          n[53] !== M ||
          n[54] !== I ||
          n[55] !== P ||
          n[56] !== Y ||
          n[57] !== l ||
          n[58] !== a
            ? ((V =
                G || null == Q
                  ? null
                  : (0, r.jsxs)("form", {
                      className: "flex w-full flex-col gap-4",
                      onChange: h,
                      onSubmit: (e) => {
                        switch ((e.preventDefault(), Q)) {
                          case "profile":
                            m({ method: Q, profile: A.trim(), region: M.trim() })
                            break
                          case "accessKeys":
                            m({
                              method: Q,
                              accessKeyId: L,
                              secretAccessKey: I,
                              sessionToken: 0 === P.trim().length ? null : P,
                              region: M.trim(),
                            })
                            break
                          case "environment":
                            m({ method: Q, region: M.trim() })
                            break
                          case "apiKey":
                            m({ method: Q, apiKey: T, region: M.trim() })
                        }
                      },
                      children: [
                        a && "environment" !== Q
                          ? (0, r.jsxs)("div", {
                              className: "flex flex-col gap-2 border-b border-default pb-4",
                              children: [
                                (0, r.jsx)("span", {
                                  id: y,
                                  className: "text-sm text-default select-none",
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.bedrock.method.label",
                                    defaultMessage: "Choose sign-in method",
                                    description: "Label for choosing how to provide AWS credentials for Bedrock",
                                  }),
                                }),
                                (0, r.jsx)(U.l, {
                                  "aria-labelledby": y,
                                  disabled: d,
                                  size: "3xl",
                                  value: Q,
                                  options: er
                                    .filter((e) => "accessKeys" !== e || l)
                                    .map((e) => ({ value: e, label: b.formatMessage(ea[e]) })),
                                  onChange: (e) => {
                                    let { value: t } = e
                                    return Y(t)
                                  },
                                }),
                              ],
                            })
                          : null,
                        "profile" === Q
                          ? (0, r.jsx)(H, {
                              value: A,
                              onChange: _,
                              children: (0, r.jsx)(S.A, {
                                id: "electron.onboarding.login.bedrock.profile.label",
                                defaultMessage: "AWS profile",
                                description: "Label for the AWS profile field in Bedrock onboarding",
                              }),
                            })
                          : null,
                        "accessKeys" === Q
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(H, {
                                  placeholder: b.formatMessage({
                                    id: "electron.onboarding.login.bedrock.accessKeyId.placeholder",
                                    defaultMessage: "e.g. AKIAIOSFODNN7EXAMPLE",
                                    description:
                                      "Example AWS access key ID shown in the empty access key ID field. Keep the example identifier unchanged.",
                                  }),
                                  value: L,
                                  onChange: E,
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.bedrock.accessKeyId.label",
                                    defaultMessage: "AWS access key ID",
                                    description: "Label for the AWS access key ID field in Bedrock onboarding",
                                  }),
                                }),
                                (0, r.jsx)(H, {
                                  type: "password",
                                  placeholder: b.formatMessage({
                                    id: "electron.onboarding.login.bedrock.secretAccessKey.placeholder",
                                    defaultMessage: "40-character secret access key",
                                    description: "Placeholder describing the secret part of an AWS access key",
                                  }),
                                  value: I,
                                  onChange: R,
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.bedrock.secretAccessKey.label",
                                    defaultMessage: "AWS secret access key",
                                    description:
                                      "Label for the masked AWS secret access key field in Bedrock onboarding",
                                  }),
                                }),
                                (0, r.jsx)(H, {
                                  type: "password",
                                  required: !1,
                                  placeholder: b.formatMessage({
                                    id: "electron.onboarding.login.bedrock.sessionToken.placeholder",
                                    defaultMessage: "Add session token, if required",
                                    description:
                                      "Placeholder for an optional AWS session token used with temporary access keys",
                                  }),
                                  value: P,
                                  onChange: B,
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.bedrock.sessionToken.label",
                                    defaultMessage: "AWS session token (optional)",
                                    description: "Label for the optional AWS session token field in Bedrock onboarding",
                                  }),
                                }),
                              ],
                            })
                          : null,
                        "environment" === Q
                          ? (0, r.jsx)("p", {
                              className:
                                "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                              children: (0, r.jsx)(S.A, {
                                id: "electron.onboarding.login.bedrock.environment.instructions",
                                defaultMessage: "AWS credentials detected. Enter your AWS Region to continue.",
                                description: "Instructions for using environment credentials in Bedrock onboarding",
                              }),
                            })
                          : null,
                        "apiKey" === Q
                          ? (0, r.jsx)(H, {
                              autoFocus: !a,
                              type: "password",
                              placeholder: b.formatMessage({
                                id: "electron.onboarding.login.bedrock.apiKey.placeholder",
                                defaultMessage: "Paste your Amazon Bedrock API key",
                                description: "Placeholder in the masked Amazon Bedrock API key field",
                              }),
                              value: T,
                              onChange: z,
                              children: (0, r.jsx)(S.A, {
                                id: "electron.onboarding.login.bedrock.apiKey.label",
                                defaultMessage: "Bedrock API key",
                                description: "Label for the masked Bedrock API key field in desktop onboarding",
                              }),
                            })
                          : null,
                        (0, r.jsx)(H, {
                          autoFocus: "environment" === Q,
                          value: M,
                          onChange: N,
                          help: (0, r.jsx)(S.A, {
                            id: "electron.onboarding.login.bedrock.region.example",
                            defaultMessage: "For example, us-east-2",
                            description:
                              "Example below the AWS region field in Bedrock onboarding. Keep the region identifier us-east-2 untranslated.",
                          }),
                          children: (0, r.jsx)(S.A, {
                            id: "electron.onboarding.login.bedrock.region.label",
                            defaultMessage: "AWS region",
                            description: "Label for the AWS region input in Amazon Bedrock onboarding",
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex w-full flex-col gap-3",
                          children: [
                            (0, r.jsx)(f.$, {
                              className: "w-full justify-center",
                              radius: "full",
                              size: "onboardingAction",
                              type: "submit",
                              disabled:
                                d ||
                                0 === M.trim().length ||
                                ("profile" === Q && 0 === A.trim().length) ||
                                ("accessKeys" === Q && (0 === L.trim().length || 0 === I.trim().length)) ||
                                ("apiKey" === Q && 0 === T.trim().length),
                              loading: d,
                              children: (0, r.jsx)(S.A, {
                                id: "electron.onboarding.login.bedrock.continue",
                                defaultMessage: "Continue",
                                description: "Continue button label for Amazon Bedrock sign-in",
                              }),
                            }),
                            "environment" === Q
                              ? (0, r.jsx)(f.$, {
                                  className: "w-full justify-center",
                                  color: "secondary",
                                  size: "large",
                                  type: "button",
                                  disabled: d,
                                  onClick: () => {
                                    ;(Y(null), p())
                                  },
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.bedrock.environment.retry",
                                    defaultMessage: "Check for credentials again",
                                    description: "Button label to check for AWS environment credentials again",
                                  }),
                                })
                              : null,
                          ],
                        }),
                      ],
                    })),
              (n[42] = L),
              (n[43] = T),
              (n[44] = b),
              (n[45] = G),
              (n[46] = d),
              (n[47] = Q),
              (n[48] = y),
              (n[49] = h),
              (n[50] = p),
              (n[51] = m),
              (n[52] = A),
              (n[53] = M),
              (n[54] = I),
              (n[55] = P),
              (n[56] = Y),
              (n[57] = l),
              (n[58] = a),
              (n[59] = V))
            : (V = n[59]),
          (t = (0, r.jsxs)(en, {
            providerLogo: o,
            title: s,
            errorMessage: u,
            backLabel: c,
            backDisabled: d,
            onBack: j,
            children: [
              W,
              O,
              V,
              G || null != Q
                ? null
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      null != D && null != F
                        ? (0, r.jsxs)("div", {
                            className: "flex w-full flex-col gap-2",
                            children: [
                              (0, r.jsx)("p", {
                                id: x,
                                className: "text-sm font-normal text-default select-none",
                                children: (0, r.jsx)(S.A, {
                                  id: "electron.onboarding.login.bedrock.profiles.detected",
                                  defaultMessage: "AWS profile",
                                  description: "Label for the AWS profile selector in Amazon Bedrock onboarding",
                                }),
                              }),
                              (0, r.jsx)(U.l, {
                                "aria-labelledby": x,
                                searchEmptyMessage: (0, r.jsx)(S.A, {
                                  id: "electron.onboarding.login.bedrock.profile.noMatches",
                                  defaultMessage: "No matching profiles",
                                  description: "Shown when no detected AWS profile matches the search",
                                }),
                                disabled: d,
                                size: "3xl",
                                value: F.name,
                                options: D.map(ei),
                                onChange: (e) => {
                                  let { value: t } = e
                                  ;(h(), C(t))
                                },
                                actions: [
                                  {
                                    id: "other-profile",
                                    Icon: q.D_h,
                                    label: b.formatMessage({
                                      id: "electron.onboarding.login.bedrock.profile.other",
                                      defaultMessage: "Enter another profile",
                                      description: "Menu action to enter the name of another AWS profile manually",
                                    }),
                                    onSelect: () => {
                                      ;(_(""), N(""), Y("profile"))
                                    },
                                  },
                                ],
                              }),
                              (0, r.jsx)(f.$, {
                                className: "mt-4 w-full justify-center",
                                radius: "full",
                                size: "onboardingAction",
                                disabled: d,
                                loading: d,
                                onClick: () => {
                                  let e = F.region
                                  if (null == e) {
                                    ;(_(F.name), N(""), Y("profile"))
                                    return
                                  }
                                  m({ method: "profile", profile: F.name, region: e })
                                },
                                children: (0, r.jsx)(S.A, {
                                  id: "electron.onboarding.login.bedrock.continue",
                                  defaultMessage: "Continue",
                                  description: "Continue button label for Amazon Bedrock sign-in",
                                }),
                              }),
                            ],
                          })
                        : null,
                      i?.environmentCredentialsAvailable === !0
                        ? (0, r.jsx)(f.$, {
                            className: "w-full justify-center",
                            color: null == F ? "primary" : "ghostTertiary",
                            size: null == F ? "large" : "default",
                            disabled: d,
                            onClick: () => {
                              ;(N(i.environmentRegion ?? ""), Y("environment"))
                            },
                            children: (0, r.jsx)(S.A, {
                              id: "electron.onboarding.login.bedrock.environment.continue",
                              defaultMessage: "Continue with detected credentials",
                              description: "Button label to sign in with detected AWS environment credentials",
                            }),
                          })
                        : null,
                      (0, r.jsx)(f.$, {
                        className: "w-full justify-center",
                        color: "outlineSurface",
                        radius: "full",
                        size: "onboardingAction",
                        disabled: d,
                        onClick: () => {
                          ;(_(F?.name ?? ""), N(null != F ? (F.region ?? "") : (i?.region ?? "")), Y("profile"))
                        },
                        children: (0, r.jsx)(S.A, {
                          id: "electron.onboarding.login.bedrock.otherMethods",
                          defaultMessage: "Other AWS sign-in methods",
                          description: "Button label to show other AWS sign-in methods",
                        }),
                      }),
                    ],
                  }),
            ],
          })),
          (n[0] = L),
          (n[1] = T),
          (n[2] = i),
          (n[3] = x),
          (n[4] = v),
          (n[5] = u),
          (n[6] = b),
          (n[7] = G),
          (n[8] = d),
          (n[9] = y),
          (n[10] = g),
          (n[11] = h),
          (n[12] = p),
          (n[13] = m),
          (n[14] = K),
          (n[15] = A),
          (n[16] = M),
          (n[17] = I),
          (n[18] = w),
          (n[19] = P),
          (n[20] = l),
          (n[21] = a),
          (n[22] = t))
      } else t = n[22]
      return t
    }
    function ei(e) {
      let { name: t, region: n } = e
      return {
        value: t,
        label: t,
        description:
          null == n
            ? void 0
            : (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.bedrock.profile.region",
                defaultMessage: "Region: {region}",
                description: "AWS Region shown for a detected AWS profile",
                values: { region: n },
              }),
      }
    }
    let ea = (0, F.YK)({
      profile: {
        id: "electron.onboarding.login.bedrock.profile.method",
        defaultMessage: "AWS profile",
        description: "Sign-in method that uses a named AWS profile",
      },
      accessKeys: {
        id: "electron.onboarding.login.bedrock.accessKeys.method",
        defaultMessage: "AWS access keys",
        description: "Sign-in method that uses an AWS access key ID and secret access key",
      },
      apiKey: {
        id: "electron.onboarding.login.bedrock.apiKey.method",
        defaultMessage: "Bedrock API key",
        description: "Sign-in method that uses a Bedrock API key",
      },
    })
    var el = n("ZjI6"),
      es = n("iiY7"),
      ec = n("Przp"),
      ed = n("eO2m"),
      eu = n("rFJ6"),
      eg = n("vTR8"),
      ef = n("ASxG"),
      eh = n("p4kj"),
      ep = n("B81s"),
      em = n("uSOC"),
      eb = n("X5YM")
    let ey = ef.object({
      data: ef.object({ config_write_error_code: ef.literal("configValidationError") }),
      message: ef.string().min(1),
    })
    class ex extends Error {}
    let ew = (0, a.vU)(b.u, (e, { scope: t }) => ({
        queryKey: ["config", "onboarding-gateways", y.fI, e],
        staleTime: 0,
        retry: !1,
        queryFn: () => ev(t, e),
      })),
      ek = (0, a.un)(b.u, ({ get: e }) => {
        if (!e(A.uC, "gateway")) return !1
        let t = e(eb.Q, y.fI)
        return "ready" === t.status && (t.api || (e(ew, !1).data?.data.length ?? 0) > 0)
      })
    async function ev(e, t, n) {
      let r = (0, c.ls)(e, y.fI),
        { data: o, defaultProviderId: i, canChangeDefault: a } = await r.sendRequest("modelProvider/list", {}),
        l = t ? null : (n ?? (await r.sendRequest("config/read", { includeLayers: !1, cwd: null }))),
        s = (0, eg.YV)(l?.config.model_providers)
      return {
        data: o.filter(
          ({ id: e, settings: n }) =>
            "customGateway" === n.type && (a || e === i) && (t || !0 === (0, eg.YV)(s[e]).requires_openai_auth),
        ),
        defaultProviderId: i,
        canChangeDefault: a,
      }
    }
    async function ej(e, t) {
      let [n, r] = await Promise.all([(0, c.ls)(e, y.fI).getAccount(), (0, A.fz)(e)])
      if (r?.providerId !== t) throw Error("The selected gateway is not active")
      if ((e.set(A.ql, !1), (0, eh.k)(n))) return "primary"
      if (r.required && "succeeded" !== r.status) {
        await (0, d.$f)(e)
        let n = e.get(A.C4).data
        if (n?.providerId !== t || "succeeded" !== n.status) return "cancelled"
      }
      return (await (0, em.q)(e, y.fI, !0), "ready")
    }
    function eS(e) {
      let t,
        n,
        i,
        l,
        c,
        d,
        u,
        g,
        h,
        p,
        m,
        b,
        y,
        x = (0, o.c)(60),
        { allowApiKey: w, busy: k, onBack: v, onCreate: C, onSelect: A } = e,
        _ = (0, j.A)(),
        { data: M, isError: N, isPending: L, refetch: E } = (0, a._U)(ew, w),
        [I, R] = (0, s.useState)(null),
        [P, B] = (0, s.useState)(!1),
        [T, z] = (0, s.useState)(null),
        [G, K] = (0, s.useState)(!1)
      x[0] !== M?.data ? ((t = M?.data ?? []), (x[0] = M?.data), (x[1] = t)) : (t = x[1])
      let W = t,
        O = w && M?.canChangeDefault
      x[2] !== _ || x[3] !== A || x[4] !== E
        ? ((n = async (e) => {
            R(null)
            try {
              await A(e)
            } catch {
              ;(R(
                _.formatMessage({
                  id: "electron.onboarding.login.gateway.connectError",
                  defaultMessage: "Couldn’t connect. Check your gateway configuration and try again.",
                  description: "Applying the gateway or checking its authentication failed",
                }),
              ),
                E())
            }
          }),
          (x[2] = _),
          (x[3] = A),
          (x[4] = E),
          (x[5] = n))
        : (n = x[5])
      let V = n
      x[6] !== O || x[7] !== _ || x[8] !== P || x[9] !== C || x[10] !== E || x[11] !== G || x[12] !== V
        ? ((i = async (e) => {
            if (P && O && !G) {
              ;(K(!0), R(null))
              try {
                let t = await C((0, eg.Li)(e))
                ;(B(!1), E(), await V(t))
              } catch (e) {
                e instanceof ex
                  ? z(e.message)
                  : (B(!1),
                    R(
                      _.formatMessage({
                        id: "electron.onboarding.login.gateway.createError",
                        defaultMessage:
                          "Couldn’t confirm the gateway was saved. Check the list before adding it again.",
                        description: "A gateway creation request failed or its response was lost",
                      }),
                    ),
                    await E())
              }
              K(!1)
            }
          }),
          (x[6] = O),
          (x[7] = _),
          (x[8] = P),
          (x[9] = C),
          (x[10] = E),
          (x[11] = G),
          (x[12] = V),
          (x[13] = i))
        : (i = x[13])
      let D = i
      if (N) {
        let e
        ;(x[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              role: "alert",
              className: "text-center",
              children: (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.gateway.loadError",
                defaultMessage: "Couldn’t load your gateways",
                description: "Gateway discovery failed",
              }),
            })),
            (x[14] = e))
          : (e = x[14]),
          (l = e))
      } else if (L) {
        let e
        ;(x[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              role: "status",
              className: "text-center",
              children: (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.gateway.loading",
                defaultMessage: "Loading gateways…",
                description: "Loading the configured model providers",
              }),
            })),
            (x[15] = e))
          : (e = x[15]),
          (l = e))
      } else if (0 === W.length) {
        let e
        ;(x[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              className: "text-center text-secondary",
              children: (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.gateway.empty",
                defaultMessage: "No custom gateways available",
                description: "No configured custom model providers are available to the user",
              }),
            })),
            (x[16] = e))
          : (e = x[16]),
          (l = e))
      } else {
        let e, t
        if (x[17] !== k || x[18] !== W || x[19] !== G || x[20] !== V) {
          let t
          ;(x[22] !== k || x[23] !== G || x[24] !== V
            ? ((t = (e) => {
                let { id: t, name: n } = e
                return (0, r.jsxs)(
                  f.$,
                  {
                    className: "shrink-0",
                    color: "outlineSurface",
                    focusRing: "inset",
                    radius: "full",
                    size: "onboardingAction",
                    disabled: k || G,
                    onClick: () => void V(t),
                    children: [
                      (0, r.jsx)("span", { className: "truncate text-default", children: n }),
                      t !== n
                        ? (0, r.jsx)("span", { className: "truncate text-sm text-secondary", children: t })
                        : null,
                    ],
                  },
                  t,
                )
              }),
              (x[22] = k),
              (x[23] = G),
              (x[24] = V),
              (x[25] = t))
            : (t = x[25]),
            (e = W.map(t)),
            (x[17] = k),
            (x[18] = W),
            (x[19] = G),
            (x[20] = V),
            (x[21] = e))
        } else e = x[21]
        ;(x[26] !== e
          ? ((t = (0, r.jsx)("div", {
              className: "flex max-h-76 min-h-11.5 w-full flex-col gap-3 overflow-y-auto overscroll-contain",
              children: e,
            })),
            (x[26] = e),
            (x[27] = t))
          : (t = x[27]),
          (l = t))
      }
      ;(x[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, r.jsx)(q.Bgg, { "aria-hidden": "true", className: "size-full" })),
          (d = (0, r.jsx)(S.A, {
            id: "electron.onboarding.login.gateway.title",
            defaultMessage: "Choose a gateway",
            description: "Heading for the configured model provider picker",
          })),
          (x[28] = c),
          (x[29] = d))
        : ((c = x[28]), (d = x[29])),
        x[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gateway.back",
              defaultMessage: "Back",
              description: "Return to the other sign-in methods",
            })),
            (x[30] = u))
          : (u = x[30]))
      let U = k || G
      return (
        x[31] !== k || x[32] !== O || x[33] !== N || x[34] !== G
          ? ((g =
              O && !N
                ? (0, r.jsx)(f.$, {
                    className: "shrink-0",
                    color: "outlineSurface",
                    radius: "full",
                    size: "onboardingAction",
                    disabled: k || G,
                    onClick: () => {
                      ;(R(null), z(null), B(!0))
                    },
                    children: (0, r.jsx)(S.A, {
                      id: "electron.onboarding.login.gateway.add",
                      defaultMessage: "Add a new gateway",
                      description: "Open the form to add a custom model provider during onboarding",
                    }),
                  })
                : null),
            (x[31] = k),
            (x[32] = O),
            (x[33] = N),
            (x[34] = G),
            (x[35] = g))
          : (g = x[35]),
        x[36] !== k
          ? ((h = k
              ? (0, r.jsx)("p", {
                  role: "status",
                  className: "text-center",
                  children: (0, r.jsx)(S.A, {
                    id: "electron.onboarding.login.gateway.connecting",
                    defaultMessage: "Connecting…",
                    description: "Applying the selected model provider",
                  }),
                })
              : null),
            (x[36] = k),
            (x[37] = h))
          : (h = x[37]),
        x[38] !== k || x[39] !== N || x[40] !== E || x[41] !== G
          ? ((p = N
              ? (0, r.jsx)(f.$, {
                  color: "outlineSurface",
                  radius: "full",
                  disabled: k || G,
                  onClick: () => void E(),
                  children: (0, r.jsx)(S.A, {
                    id: "electron.onboarding.login.gateway.refresh",
                    defaultMessage: "Refresh",
                    description: "Reload the available model providers",
                  }),
                })
              : null),
            (x[38] = k),
            (x[39] = N),
            (x[40] = E),
            (x[41] = G),
            (x[42] = p))
          : (p = x[42]),
        x[43] !== l || x[44] !== I || x[45] !== v || x[46] !== p || x[47] !== U || x[48] !== g || x[49] !== h
          ? ((m = (0, r.jsxs)(en, {
              providerLogo: c,
              title: d,
              errorMessage: I,
              backLabel: u,
              backDisabled: U,
              onBack: v,
              children: [l, g, h, p],
            })),
            (x[43] = l),
            (x[44] = I),
            (x[45] = v),
            (x[46] = p),
            (x[47] = U),
            (x[48] = g),
            (x[49] = h),
            (x[50] = m))
          : (m = x[50]),
        x[51] !== O || x[52] !== D || x[53] !== T || x[54] !== P || x[55] !== G
          ? ((b =
              P && O
                ? (0, r.jsx)(eu.dj, {
                    existingTypes: [],
                    customCreation: {
                      title: (0, r.jsx)(S.A, {
                        id: "electron.onboarding.login.gateway.createTitle",
                        defaultMessage: "Add a gateway",
                        description: "Title of the custom gateway setup dialog",
                      }),
                      backLabel: (0, r.jsx)(S.A, {
                        id: "electron.onboarding.login.gateway.createBack",
                        defaultMessage: "Back",
                        description: "Return to the gateway picker without saving this form",
                      }),
                      saveLabel: (0, r.jsx)(S.A, {
                        id: "electron.onboarding.login.gateway.saveAndContinue",
                        defaultMessage: "Save and continue",
                        description: "Save the custom gateway and continue signing in with it",
                      }),
                    },
                    busy: G,
                    error: T ? (0, r.jsx)("p", { role: "alert", className: "text-danger", children: T }) : null,
                    onChange: () => z(null),
                    onClose: () => B(!1),
                    onSave: (e) => void D(e),
                  })
                : null),
            (x[51] = O),
            (x[52] = D),
            (x[53] = T),
            (x[54] = P),
            (x[55] = G),
            (x[56] = b))
          : (b = x[56]),
        x[57] !== m || x[58] !== b
          ? ((y = (0, r.jsxs)(r.Fragment, { children: [m, b] })), (x[57] = m), (x[58] = b), (x[59] = y))
          : (y = x[59]),
        y
      )
    }
    var eC = n("dxKw"),
      eA = n("lYqD")
    function e_(e) {
      let t,
        n,
        i,
        a,
        c,
        d,
        u,
        g,
        h,
        p,
        m,
        b,
        y,
        x,
        w,
        k,
        v,
        C,
        A,
        _,
        M,
        N,
        L = (0, o.c)(50),
        { onBack: E, onSubmit: I } = e,
        R = (0, j.A)(),
        P = (0, eC._)(),
        [B, T] = (0, s.useState)(""),
        [z, G] = (0, s.useState)(""),
        [K, W] = (0, s.useState)(""),
        [O, V] = (0, s.useState)(!1),
        [D, U] = (0, s.useState)(null)
      L[0] !== R || L[1] !== P
        ? ((t = async () => {
            try {
              let [e] = await P({
                accept: [".json"],
                allowMultiple: !1,
                kind: "file",
                pickerTitle: R.formatMessage({
                  id: "electron.onboarding.login.gcp.chooseCredentialFile",
                  defaultMessage: "Choose a Google Cloud credential file",
                  description: "Title of the native dialog for choosing one Google Cloud credential JSON file",
                }),
              })
              null != e && (W(e.appServerPath ?? e.fsPath), U(null))
            } catch (e) {
              U((0, l.Rt_)(e))
            }
          }),
          (L[0] = R),
          (L[1] = P),
          (L[2] = t))
        : (t = L[2])
      let F = t
      return (
        L[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(eA.A, { "aria-hidden": "true", className: "size-full" })),
            (i = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.title",
              defaultMessage: "Set up Google Cloud",
              description: "Heading for setup of Google Cloud Vertex AI as the Codex model provider",
            })),
            (L[3] = n),
            (L[4] = i))
          : ((n = L[3]), (i = L[4])),
        L[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.back",
              defaultMessage: "Back",
              description: "Return from Google Cloud setup to the list of sign-in methods",
            })),
            (L[5] = a))
          : (a = L[5]),
        L[6] === Symbol.for("react.memo_cache_sentinel") ? ((c = () => U(null)), (L[6] = c)) : (c = L[6]),
        L[7] !== K || L[8] !== O || L[9] !== z || L[10] !== I || L[11] !== B
          ? ((d = (e) => {
              e.preventDefault()
              let t = B.trim()
              t &&
                !O &&
                (U(null),
                V(!0),
                I({ projectId: t, location: z.trim() || null, credentialFile: K.trim() || null })
                  .catch((e) => U((0, l.Rt_)(e)))
                  .finally(() => V(!1)))
            }),
            (L[7] = K),
            (L[8] = O),
            (L[9] = z),
            (L[10] = I),
            (L[11] = B),
            (L[12] = d))
          : (d = L[12]),
        L[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.projectId",
              defaultMessage: "Project ID",
              description: "Required Google Cloud project identifier for Vertex AI",
            })),
            (L[13] = u))
          : (u = L[13]),
        L[14] !== B
          ? ((g = (0, r.jsx)(H, { value: B, onChange: T, autoFocus: !0, children: u })), (L[14] = B), (L[15] = g))
          : (g = L[15]),
        L[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.location",
              defaultMessage: "Location (optional)",
              description: "Label for the optional Vertex AI location, which defaults to global",
            })),
            (L[16] = h))
          : (h = L[16]),
        L[17] !== z
          ? ((p = (0, r.jsx)(H, { value: z, onChange: G, required: !1, placeholder: "global", children: h })),
            (L[17] = z),
            (L[18] = p))
          : (p = L[18]),
        L[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.credentialFile.help",
              defaultMessage:
                "Enter the absolute path to a credential JSON file, or leave blank to use Application Default Credentials (ADC)",
              description: "Help below the optional Google Cloud credential file field",
            })),
            (L[19] = m))
          : (m = L[19]),
        L[20] !== F ? ((b = () => void F()), (L[20] = F), (L[21] = b)) : (b = L[21]),
        L[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.browse",
              defaultMessage: "Browse…",
              description: "Opens a file picker to select a Google Cloud credential file",
            })),
            (L[22] = y))
          : (y = L[22]),
        L[23] !== b
          ? ((x = (0, r.jsx)(f.$, { size: "large", color: "outlineSurface", type: "button", onClick: b, children: y })),
            (L[23] = b),
            (L[24] = x))
          : (x = L[24]),
        L[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.credentialFile",
              defaultMessage: "Credential file (optional)",
              description: "Label for the absolute path to a Google Cloud credential file on this computer",
            })),
            (L[25] = w))
          : (w = L[25]),
        L[26] !== K || L[27] !== x
          ? ((k = (0, r.jsx)(H, { value: K, onChange: W, required: !1, help: m, action: x, children: w })),
            (L[26] = K),
            (L[27] = x),
            (L[28] = k))
          : (k = L[28]),
        L[29] !== O || L[30] !== B ? ((v = O || !B.trim()), (L[29] = O), (L[30] = B), (L[31] = v)) : (v = L[31]),
        L[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.continue",
              defaultMessage: "Continue",
              description: "Submit Google Cloud setup and continue onboarding",
            })),
            (L[32] = C))
          : (C = L[32]),
        L[33] !== O || L[34] !== v
          ? ((A = (0, r.jsx)(f.$, {
              className: "w-full justify-center",
              radius: "full",
              size: "onboardingAction",
              type: "submit",
              disabled: v,
              loading: O,
              children: C,
            })),
            (L[33] = O),
            (L[34] = v),
            (L[35] = A))
          : (A = L[35]),
        L[36] !== O || L[37] !== p || L[38] !== k || L[39] !== A || L[40] !== g
          ? ((_ = (0, r.jsxs)("fieldset", {
              className: "flex w-full flex-col gap-4",
              disabled: O,
              children: [g, p, k, A],
            })),
            (L[36] = O),
            (L[37] = p),
            (L[38] = k),
            (L[39] = A),
            (L[40] = g),
            (L[41] = _))
          : (_ = L[41]),
        L[42] !== _ || L[43] !== d
          ? ((M = (0, r.jsx)("form", { onChange: c, onSubmit: d, children: _ })), (L[42] = _), (L[43] = d), (L[44] = M))
          : (M = L[44]),
        L[45] !== D || L[46] !== O || L[47] !== E || L[48] !== M
          ? ((N = (0, r.jsx)(en, {
              providerLogo: n,
              title: i,
              errorMessage: D,
              backLabel: a,
              backDisabled: O,
              onBack: E,
              children: M,
            })),
            (L[45] = D),
            (L[46] = O),
            (L[47] = E),
            (L[48] = M),
            (L[49] = N))
          : (N = L[49]),
        N
      )
    }
    function eM(e) {
      let t,
        n,
        i,
        a = (0, o.c)(4),
        { onClick: l } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(eA.A, { "aria-hidden": "true", className: "size-4" })),
            (n = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.gcp.open",
              defaultMessage: "Use Google Cloud",
              description: "Button that opens the Google Cloud Vertex AI setup form",
            })),
            (a[0] = t),
            (a[1] = n))
          : ((t = a[0]), (n = a[1])),
        a[2] !== l
          ? ((i = (0, r.jsxs)(f.$, {
              className: "w-full",
              color: "outlineSurface",
              contentLayout: "balanced",
              radius: "full",
              size: "onboardingAction",
              type: "button",
              onClick: l,
              children: [t, n],
            })),
            (a[2] = l),
            (a[3] = i))
          : (i = a[3]),
        i
      )
    }
    var eN = n("J3WM"),
      eL = n("LH8k"),
      eE = n("GDNt")
    let eI = new Set([
        "EAI_AGAIN",
        "ECONNREFUSED",
        "ECONNRESET",
        "ENOTFOUND",
        "ETIMEDOUT",
        "ERR_CONNECTION_RESET",
        "ERR_NETWORK_CHANGED",
        "ERR_TIMED_OUT",
      ]),
      eR = new Set(["authentication_error", "forbidden", "invalid_api_key", "token_invalidated", "unauthorized"]),
      eP = new Set([
        "failed to fetch",
        "fetch failed",
        "load failed",
        "network request failed",
        "networkerror when attempting to fetch resource.",
        "request timed out",
      ])
    function eB(e) {
      if (e instanceof Error && "AbortError" === e.name) return "abort"
      if (e instanceof Error && "TimeoutError" === e.name) return "network"
      if (e instanceof eE.fk) {
        if (401 === e.status || 403 === e.status) return "auth"
        if (0 === e.status || 408 === e.status || 504 === e.status || (null != e.errorCode && eI.has(e.errorCode)))
          return "network"
        let t = (0, eL.d)(e)
        return (t?.type != null && eR.has(t.type)) || (null != e.errorCode && eR.has(e.errorCode)) ? "auth" : "unknown"
      }
      if (e instanceof Error && "code" in e && "string" == typeof e.code && eI.has(e.code)) return "network"
      let t = ("string" == typeof e ? e : e instanceof Error ? e.message : "").trim().toLowerCase()
      return eP.has(t) ? "network" : eR.has(t) || "auth failed" === t || "invalid api key" === t ? "auth" : "unknown"
    }
    var eT = n("on57"),
      ez = n("JIuM"),
      eG = n("LhhH"),
      eK = n("yTs9"),
      eW = n("hERv"),
      eO = n("afqi"),
      eV = n("XYHU")
    let eD = (0, a.un)(b.u, ({ get: e }) => null != P.appServices.chatGptBrowserSession && "windows" === e(eV.IU)),
      eU = (0, a.un)(b.u, ({ get: e }) => (e(eD) ? "504848717" : "1504988142"))
    var eF = n("ClGD"),
      eq = n("RHhA")
    let e$ = l.x1u.allowDebugMenu((0, eq.t)()),
      eH = [],
      eZ = new Set()
    function eQ(e, t = {}) {
      e$ && eY({ source: "renderer", stage: e, details: t })
    }
    function eY(e) {
      if (e$)
        for (let t of (console.log(`[browser-session] ${JSON.stringify(e)}`), (eH = [...eH.slice(-49), e]), eZ)) t()
    }
    var eX = n("toKG")
    let eJ = (0, a.RD)(b.u, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: t }) => {
          if (e$) for (let e of ((eH = []), eZ)) e()
          eQ("eligibility_query_started", { serviceAvailable: null != P.appServices.chatGptBrowserSession })
          let n = (await P.appServices.chatGptBrowserSession?.getLookupEligibility()) ?? null
          return t.aborted
            ? null
            : (eQ("eligibility_query_completed", { eligible: n?.eligible ?? !1, resultAvailable: null != n }),
              null != n &&
                (0, R.yy)(e, eF.CodexDesktopLoginBrowserSessionLookupEligibilityEvaluated, {
                  arm64CheckPassed: n.arm64,
                  browserHasVisibleWindow: n.browserHasVisibleWindow,
                  browserIsRunning: n.browserIsRunning,
                  eligible: n.eligible,
                  macosCheckPassed: n.macOS,
                }),
              n)
        },
        queryKey: ["chatgpt-browser-session-lookup-eligibility"],
        retry: !1,
        staleTime: 1 / 0,
      })),
      e0 = (0, a.vU)(b.u, (e, { scope: t }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: n }) => {
          let r = P.appServices.chatGptBrowserSession
          if ((eQ("profile_query_started", { serviceAvailable: null != r }), null == r))
            return (eQ("profile_query_skipped", { reason: "service_unavailable" }), null)
          let o = crypto.randomUUID(),
            i = () => {
              r.cancelProbe(o)
            }
          if ((n.addEventListener("abort", i, { once: !0 }), n.aborted))
            return (eQ("profile_query_aborted_before_probe"), i(), null)
          try {
            let { chatGptDesktopAuthOrigin: i } = await P.appServices.appInfo.get()
            if (n.aborted) return (eQ("profile_query_aborted_before_probe"), null)
            let a = performance.now(),
              l = await r.probe(o, (0, eX.N)(i), e, e$ ? eY : void 0),
              s = (l?.length ?? 0) > 0
            return (
              n.aborted ||
                (0, R.yy)(t, eF.CodexDesktopLoginBrowserSessionLookupCompleted, {
                  latencyMs: Math.round(performance.now() - a),
                  profileFound: s,
                }),
              eQ("profile_query_completed", { profileFound: s, signedOut: l?.length === 0 }),
              l
            )
          } catch (e) {
            throw (eQ("profile_query_failed"), e)
          } finally {
            n.removeEventListener("abort", i)
          }
        },
        queryKey: ["chatgpt-browser-session-profiles", e],
        retry: !1,
        staleTime: 1 / 0,
      }))
    var e1 = n("ZtSy")
    function e2() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              className: "pb-3 text-start text-sm text-secondary select-none",
              children: (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.apikey.createKey",
                defaultMessage: "Don’t have an API key? <createKey>Create one here.</createKey>",
                description:
                  "Help below the desktop API key field; createKey links to the OpenAI API key management page in the user's browser",
                values: { createKey: e3 },
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function e3(e) {
      return (0, r.jsx)(e1.G, {
        href: "https://platform.openai.com/api-keys",
        initiator: "open_in_browser_bridge",
        isBrowserEnabled: !1,
        openTarget: "external-browser",
        underline: "always",
        children: e,
      })
    }
    var e4 = n("K1N8")
    function e5(e) {
      let t,
        n,
        i,
        a,
        l,
        s,
        c,
        d,
        u,
        g,
        h,
        m,
        b,
        y,
        x,
        w,
        k,
        v,
        C,
        A,
        _,
        M,
        N,
        L,
        E,
        I,
        R,
        P = (0, o.c)(46),
        { allowOtherSignInMethods: B, onChatGptSignIn: T, onShowOtherSignInMethods: z } = e,
        G = (0, j.A)()
      return (
        P[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(eO.A, { className: "shrink-0" })), (P[0] = t))
          : (t = P[0]),
        P[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsxs)("div", {
              className: "flex flex-col items-center gap-4 text-center",
              children: [
                t,
                (0, r.jsx)("h1", {
                  className: "text-3xl font-normal",
                  children: (0, r.jsx)(S.A, {
                    id: "electron.onboarding.login.fallback.title",
                    defaultMessage: "Log in or sign up",
                    description:
                      "Heading on desktop sign-in when browser lookup confirms no signed-in ChatGPT session; users can choose a provider or enter their email",
                  }),
                }),
              ],
            })),
            (P[1] = n))
          : (n = P[1]),
        P[2] !== T ? ((i = () => void T("signin")), (P[2] = T), (P[3] = i)) : (i = P[3]),
        P[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(eW.A, { "aria-hidden": "true", className: "size-5 shrink-0" })),
            (l = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.fallback.chatgpt",
              defaultMessage: "Continue with ChatGPT",
              description:
                "First desktop sign-in button opening the existing general ChatGPT browser authentication flow",
            })),
            (P[4] = a),
            (P[5] = l))
          : ((a = P[4]), (l = P[5])),
        P[6] !== i
          ? ((s = (0, r.jsxs)(f.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: i,
              children: [a, l],
            })),
            (P[6] = i),
            (P[7] = s))
          : (s = P[7]),
        P[8] !== T ? ((c = () => void T("google")), (P[8] = T), (P[9] = c)) : (c = P[9]),
        P[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(eA.A, { "aria-hidden": "true", className: "size-5 shrink-0" })),
            (u = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.google.signIn",
              defaultMessage: "Continue with Google",
              description: "Button label for Google sign-in on desktop onboarding",
            })),
            (P[10] = d),
            (P[11] = u))
          : ((d = P[10]), (u = P[11])),
        P[12] !== c
          ? ((g = (0, r.jsxs)(f.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: c,
              children: [d, u],
            })),
            (P[12] = c),
            (P[13] = g))
          : (g = P[13]),
        P[14] !== T ? ((h = () => void T("apple")), (P[14] = T), (P[15] = h)) : (h = P[15]),
        P[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(q.PPn, {})),
            (b = (0, r.jsx)(S.A, {
              id: "electron.onboarding.login.apple.signIn",
              defaultMessage: "Continue with Apple",
              description: "Button on the desktop sign-in screen opening Apple authentication in the system browser",
            })),
            (P[16] = m),
            (P[17] = b))
          : ((m = P[16]), (b = P[17])),
        P[18] !== h
          ? ((y = (0, r.jsxs)(f.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: h,
              children: [m, b],
            })),
            (P[18] = h),
            (P[19] = y))
          : (y = P[19]),
        P[20] !== g || P[21] !== y || P[22] !== s
          ? ((x = (0, r.jsxs)("div", { className: "flex w-full flex-col gap-3", children: [s, g, y] })),
            (P[20] = g),
            (P[21] = y),
            (P[22] = s),
            (P[23] = x))
          : (x = P[23]),
        P[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsxs)("div", {
              className: "flex items-center gap-6 py-1 text-xs text-secondary",
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("div", { className: "h-px flex-1 bg-border" }),
                (0, r.jsx)(S.A, {
                  id: "electron.onboarding.login.fallback.or",
                  defaultMessage: "OR",
                  description: "Separator between browser sign-in buttons and the email form on desktop sign-in",
                }),
                (0, r.jsx)("div", { className: "h-px flex-1 bg-border" }),
              ],
            })),
            (P[24] = w))
          : (w = P[24]),
        P[25] !== T
          ? ((k = (e) => {
              e.preventDefault()
              let t = new FormData(e.currentTarget).get("username")
              "string" == typeof t && T("email", t.trim())
            }),
            (P[25] = T),
            (P[26] = k))
          : (k = P[26]),
        P[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, r.jsx)("span", {
              className: "sr-only",
              children: (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.fallback.emailLabel",
                defaultMessage: "Email address",
                description: "Accessible label for the desktop sign-in email input",
              }),
            })),
            (P[27] = v))
          : (v = P[27]),
        P[28] !== G
          ? ((C = G.formatMessage({
              id: "electron.onboarding.login.fallback.emailPlaceholder",
              defaultMessage: "Email",
              description: "Placeholder in the desktop sign-in email input",
            })),
            (P[28] = G),
            (P[29] = C))
          : (C = P[29]),
        P[30] !== C
          ? ((A = (0, r.jsxs)("label", {
              children: [
                v,
                (0, r.jsx)(p.pd, {
                  variant: "auth",
                  name: "username",
                  type: "email",
                  autoComplete: "email",
                  maxLength: 320,
                  required: !0,
                  placeholder: C,
                }),
              ],
            })),
            (P[30] = C),
            (P[31] = A))
          : (A = P[31]),
        P[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, r.jsx)(f.$, {
              color: "primary",
              radius: "full",
              size: "auth",
              type: "submit",
              children: (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.fallback.continue",
                defaultMessage: "Continue",
                description:
                  "Button submitting the entered email address and continuing authentication in the system browser",
              }),
            })),
            (P[32] = _))
          : (_ = P[32]),
        P[33] !== k || P[34] !== A
          ? ((M = (0, r.jsxs)("form", { className: "flex w-full flex-col gap-5", onSubmit: k, children: [A, _] })),
            (P[33] = k),
            (P[34] = A),
            (P[35] = M))
          : (M = P[35]),
        P[36] !== B || P[37] !== z
          ? ((N = B
              ? (0, r.jsx)(f.$, {
                  className: "self-center",
                  color: "ghostMuted",
                  size: "inline",
                  type: "button",
                  onClick: z,
                  children: (0, r.jsx)(S.A, {
                    id: "electron.onboarding.login.apikey.open.welcomeV2",
                    defaultMessage: "Sign in another way",
                    description: "Button label to open another sign-in method on v2 desktop onboarding",
                  }),
                })
              : null),
            (P[36] = B),
            (P[37] = z),
            (P[38] = N))
          : (N = P[38]),
        P[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, r.jsx)(e1.G, {
              appearance: "secondary",
              href: "https://openai.com/policies/terms-of-use/",
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
              children: (0, r.jsx)(S.A, {
                id: "electron.onboarding.login.fallback.terms",
                defaultMessage: "Terms of use",
                description:
                  "Link below the desktop sign-in options opening OpenAI's terms of use in the system browser",
              }),
            })),
            (E = (0, r.jsx)("div", { "aria-hidden": "true", className: "h-3 w-px bg-border" })),
            (P[39] = L),
            (P[40] = E))
          : ((L = P[39]), (E = P[40])),
        P[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center justify-center gap-3 text-xs text-secondary",
              children: [
                L,
                E,
                (0, r.jsx)(e1.G, {
                  appearance: "secondary",
                  href: "https://openai.com/policies/privacy-policy/",
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                  children: (0, r.jsx)(S.A, {
                    id: "electron.onboarding.login.fallback.privacy",
                    defaultMessage: "Privacy policy",
                    description:
                      "Link below the desktop sign-in options opening OpenAI's privacy policy in the system browser",
                  }),
                }),
              ],
            })),
            (P[41] = I))
          : (I = P[41]),
        P[42] !== x || P[43] !== M || P[44] !== N
          ? ((R = (0, r.jsx)("div", {
              className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
              children: (0, r.jsx)("main", {
                className: "flex w-full shrink-0 grow flex-col items-center justify-center px-6 py-4",
                children: (0, r.jsxs)("div", {
                  className: "flex w-full max-w-sm flex-col gap-5",
                  children: [n, x, w, M, N, I],
                }),
              }),
            })),
            (P[42] = x),
            (P[43] = M),
            (P[44] = N),
            (P[45] = R))
          : (R = P[45]),
        R
      )
    }
    function e7(e) {
      let t,
        n,
        i,
        a = (0, o.c)(6),
        { children: l, description: s } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(eO.A, { className: "size-10 shrink-0" })), (a[0] = t))
          : (t = a[0]),
        a[1] !== s
          ? ((n = (0, r.jsx)("p", {
              className: "text-center text-base leading-5 font-normal text-codex-description select-none",
              children: s,
            })),
            (a[1] = s),
            (a[2] = n))
          : (n = a[2]),
        a[3] !== l || a[4] !== n
          ? ((i = (0, r.jsx)("div", {
              className: "flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-12 text-default",
              children: (0, r.jsxs)("div", {
                className: "flex w-[340px] flex-col items-center gap-8",
                children: [t, n, l],
              }),
            })),
            (a[3] = l),
            (a[4] = n),
            (a[5] = i))
          : (i = a[5]),
        i
      )
    }
    function e6(e) {
      let t,
        n,
        i,
        l,
        s,
        c,
        d,
        u,
        g,
        h,
        p,
        m,
        b,
        y,
        x,
        w,
        k = (0, o.c)(148),
        {
          allowApiKey: v,
          allowChatGpt: C,
          apiKeyHelpVariant: A,
          apiKeyValue: _,
          browserSessionProfiles: N,
          canCopySignInLink: L,
          isApiKeyEntryVisible: E,
          isOtherSignInMethodsVisible: I,
          isApiKeySignInPending: R,
          isChatGptSignInPending: T,
          showAmazonBedrockSignIn: z,
          showChatGptProviderSignIn: G,
          onApiKeySubmit: K,
          onApiKeyValueChange: W,
          onChatGptSignIn: O,
          onChatGptSignUp: V,
          onCopySignInLink: D,
          onPlaySnake: U,
          onResetApiKeyEntry: F,
          onShowApiKeyEntry: H,
          onShowOtherSignInMethods: Z,
          onHideOtherSignInMethods: Q,
          onShowBedrockSetup: X,
          onShowGcpSetup: J,
          onShowGatewaySetup: ee,
        } = e,
        et = (0, j.A)(),
        en = v && E,
        er = (v && (z || null != J)) || null != ee,
        eo = v || er,
        ei = er && I && !en,
        ea = (0, B.Zj)(!!T && !en && "2502927686"),
        el = P.appServices.chatGptBrowserSession,
        es = C && void 0 === N && null != el
      k[0] !== es ? ((t = { enabled: es }), (k[0] = es), (k[1] = t)) : (t = k[1])
      let { data: ec, isPending: ed } = (0, a.Ul)(eJ, t),
        eu = ec?.eligible ?? !1,
        eg = es && ed,
        ef = (0, a.Ul)(eD),
        eh = (0, B.Ou)((0, a.Ul)(eU)),
        ep = es && eu
      k[2] !== eh || k[3] !== ef || k[4] !== ep
        ? ((n = (function ({ eligible: e, isWindows: t, lookupLayer: n }) {
            if (!e) return { experience: "existing", enabled: !1, listAllAccounts: !1 }
            let r = n.get("experience", "existing")
            switch (r) {
              case "browser_lookup":
              case "browser_lookup_with_fallback":
                return { experience: r, enabled: !0, listAllAccounts: !0 }
              case "control":
                return { experience: r, enabled: !1, listAllAccounts: !1 }
              case "existing": {
                let e = n.get("enabled", !1)
                return { experience: r, enabled: e, listAllAccounts: e && (t || n.get("list_all_accounts", !1)) }
              }
              default:
                return { experience: "control", enabled: !1, listAllAccounts: !1 }
            }
          })({ eligible: ep, isWindows: ef, lookupLayer: eh })),
          (k[2] = eh),
          (k[3] = ef),
          (k[4] = ep),
          (k[5] = n))
        : (n = k[5])
      let { experience: em, enabled: eb, listAllAccounts: ey } = n,
        ex = (0, B.Ou)("1561420571")
      k[6] !== em || k[7] !== eg || k[8] !== ex || k[9] !== G
        ? ((i = !eg && "existing" === em && (G ?? ex.get("enabled", !1))),
          (k[6] = em),
          (k[7] = eg),
          (k[8] = ex),
          (k[9] = G),
          (k[10] = i))
        : (i = k[10])
      let ew = i,
        ek = (0, B.Ou)("1072464827")
      k[11] !== ek || k[12] !== A || k[13] !== en
        ? ((l = A ?? (en ? ek.get("api_key_help_variant", "control") : "control")),
          (k[11] = ek),
          (k[12] = A),
          (k[13] = en),
          (k[14] = l))
        : (l = k[14])
      let ev = l,
        ej = "link" === ev || "explanation" === ev || "explanation-with-chatgpt" === ev ? ev : "control",
        eS = en && ("explanation" === ej || "explanation-with-chatgpt" === ej)
      k[15] !== eh || k[16] !== ef
        ? ((s = !ef && eh.get("update_cta_for_sign_in_with_api_key", !1)), (k[15] = eh), (k[16] = ef), (k[17] = s))
        : (s = k[17])
      let eC = s,
        e_ = es && eu
      k[18] !== eh || k[19] !== e_ || k[20] !== ef
        ? ((c = !ef && e_ && eh.get("update_cta_for_sign_in_with_api_key_with_browser_lookup", !1)),
          (k[18] = eh),
          (k[19] = e_),
          (k[20] = ef),
          (k[21] = c))
        : (c = k[21])
      let eN = c,
        eL = eC || eN
      k[22] !== eb ? ((d = { enabled: eb }), (k[22] = eb), (k[23] = d)) : (d = k[23])
      let { data: eE, isPending: eI, isFetching: eR, isSuccess: eP } = (0, a._U)(e0, ey, d),
        eB = void 0 === eE ? null : eE,
        ez = eb && eI,
        eG = C ? (N ?? null) : null
      if (
        (C && eb && void 0 === N && !ez && (eG = eB),
        k[24] !== v ||
          k[25] !== C ||
          k[26] !== ej ||
          k[27] !== _ ||
          k[28] !== eb ||
          k[29] !== eG ||
          k[30] !== L ||
          k[31] !== eo ||
          k[32] !== em ||
          k[33] !== er ||
          k[34] !== et ||
          k[35] !== E ||
          k[36] !== R ||
          k[37] !== eg ||
          k[38] !== eR ||
          k[39] !== ez ||
          k[40] !== eP ||
          k[41] !== T ||
          k[42] !== K ||
          k[43] !== W ||
          k[44] !== O ||
          k[45] !== V ||
          k[46] !== D ||
          k[47] !== Q ||
          k[48] !== U ||
          k[49] !== F ||
          k[50] !== H ||
          k[51] !== X ||
          k[52] !== ee ||
          k[53] !== J ||
          k[54] !== Z ||
          k[55] !== eB?.length ||
          k[56] !== z ||
          k[57] !== eS ||
          k[58] !== en ||
          k[59] !== ea ||
          k[60] !== ew ||
          k[61] !== ei ||
          k[62] !== eL)
      ) {
        y = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            o,
            i,
            a,
            l,
            s,
            c = eG?.slice(0, 3),
            d = (c?.length ?? 0) > 0 && !en && !ei
          if (ei) {
            let t
            ;(k[70] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(S.A, {
                  id: "electron.onboarding.login.otherMethods.title",
                  defaultMessage: "Sign in another way",
                  description: "Title for choosing an alternative sign-in method",
                })),
                (k[70] = t))
              : (t = k[70]),
              (e = t))
          } else if (!C || eS) {
            let t
            ;(k[71] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(S.A, {
                  id: "electron.onboarding.login.welcomeV2.title.apiKey",
                  defaultMessage: "Sign in with an API key",
                  description:
                    "Title on desktop onboarding when explaining API key sign-in or when only API key sign-in is allowed",
                })),
                (k[71] = t))
              : (t = k[71]),
              (e = t))
          } else {
            let t
            ;(k[72] !== d
              ? ((t = d
                  ? (0, r.jsx)(S.A, {
                      id: "electron.onboarding.login.browserSession.welcomeBack",
                      defaultMessage: "Welcome back",
                      description: "Title on desktop onboarding when a signed-in ChatGPT browser session was found",
                    })
                  : (0, r.jsx)(S.A, {
                      id: "electron.onboarding.login.welcomeV2.title.chatgptSignIn",
                      defaultMessage: "Sign in to ChatGPT",
                      description: "Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in",
                    })),
                (k[72] = d),
                (k[73] = t))
              : (t = k[73]),
              (e = t))
          }
          if (C && T && !en) {
            let e, t, n, o, i, a
            ;(k[74] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(S.A, {
                  id: "electron.onboarding.login.browserPending.welcomeV2",
                  defaultMessage: "Continue signing in with your browser",
                  description: "Message shown while ChatGPT sign-in continues in the browser",
                })),
                (k[74] = e))
              : (e = k[74]),
              k[75] !== O ? ((t = () => void O()), (k[75] = O), (k[76] = t)) : (t = k[76]),
              k[77] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, r.jsx)(S.A, {
                    id: "electron.onboarding.login.chatgpt.cancel.welcomeV2",
                    defaultMessage: "Cancel sign-in",
                    description: "Cancel button label while ChatGPT sign-in is in progress on desktop onboarding",
                  })),
                  (k[77] = n))
                : (n = k[77]),
              k[78] !== t
                ? ((o = (0, r.jsx)("button", {
                    className:
                      "flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-codex-description hover:bg-secondary-ghost-hover",
                    type: "button",
                    onClick: t,
                    children: n,
                  })),
                  (k[78] = t),
                  (k[79] = o))
                : (o = k[79]),
              k[80] !== L || k[81] !== D || k[82] !== ea
                ? ((i = ea
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-wrap items-center justify-center gap-2",
                        children: [
                          (0, r.jsx)("span", {
                            className: "py-2 text-sm leading-5 font-normal text-codex-description select-none",
                            children: (0, r.jsx)(S.A, {
                              id: "electron.onboarding.login.browserDidNotOpen",
                              defaultMessage: "Browser didn't open?",
                              description:
                                "Helper text before the Copy sign-in link action while desktop browser sign-in is pending",
                            }),
                          }),
                          (0, r.jsxs)(f.$, {
                            color: "ghost",
                            disabled: !L,
                            size: "dialog",
                            onClick: () => void D(),
                            children: [
                              (0, r.jsx)(q.yDG, {}),
                              (0, r.jsx)(S.A, {
                                id: "electron.onboarding.login.copyLink",
                                defaultMessage: "Copy sign-in link",
                                description:
                                  "Button that copies the active sign-in URL so the user can continue signing in in another browser without restarting",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null),
                  (k[80] = L),
                  (k[81] = D),
                  (k[82] = ea),
                  (k[83] = i))
                : (i = k[83]),
              k[84] !== o || k[85] !== i
                ? ((a = (0, r.jsx)(e7, {
                    description: e,
                    children: (0, r.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-6",
                      children: [o, i],
                    }),
                  })),
                  (k[84] = o),
                  (k[85] = i),
                  (k[86] = a))
                : (a = k[86]),
              (y = a))
            break e
          }
          if (!en && (eg || ez)) {
            let e
            ;(k[87] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsxs)("div", {
                  className:
                    "flex h-full w-full flex-col items-center justify-center gap-3 bg-surface text-codex-description",
                  children: [
                    (0, r.jsx)(M.y, { className: "h-4 w-4 text-default" }),
                    (0, r.jsx)(S.A, {
                      id: "electron.onboarding.login.loading",
                      defaultMessage: "Loading…",
                      description: "Loading state while the desktop login page prepares the sign-in experience",
                    }),
                  ],
                })),
                (k[87] = e))
              : (e = k[87]),
              (y = e))
            break e
          }
          if ("browser_lookup_with_fallback" === em && eb && eP && !eR && eB?.length === 0 && !en && !ei) {
            let e,
              t = er ? Z : H
            ;(k[88] !== eo || k[89] !== O || k[90] !== t
              ? ((e = (0, r.jsx)(e5, { allowOtherSignInMethods: eo, onChatGptSignIn: O, onShowOtherSignInMethods: t })),
                (k[88] = eo),
                (k[89] = O),
                (k[90] = t),
                (k[91] = e))
              : (e = k[91]),
              (y = e))
            break e
          }
          let x = ei && "px-6"
          ;(k[92] !== x
            ? ((b = (0, eT.A)(
                "flex h-full w-full scroll-pt-(--height-toolbar-sm) flex-col overflow-y-auto bg-surface pb-6 text-default",
                x,
              )),
              (k[92] = x),
              (k[93] = b))
            : (b = k[93]),
            (u =
              "flex w-[340px] max-w-full shrink-0 grow flex-col items-center justify-center gap-8 self-center py-(--height-toolbar-sm)"))
          let w = eS ? "gap-5" : "gap-4"
          ;(k[94] !== w
            ? ((t = (0, eT.A)("flex w-full flex-col items-center", w)), (k[94] = w), (k[95] = t))
            : (t = k[95]),
            k[96] !== et
              ? ((n = et.formatMessage({
                  id: "electron.onboarding.login.snake.start",
                  defaultMessage: "Play Snake",
                  description: "Aria label for the ChatGPT logo button to start Snake",
                })),
                (k[96] = et),
                (k[97] = n))
              : (n = k[97]),
            k[98] !== ei
              ? ((o = ei
                  ? (0, r.jsx)("img", { alt: "", className: "size-12 invert-5 dark:invert-95", src: Y })
                  : (0, r.jsx)(eO.A, { className: "shrink-0" })),
                (k[98] = ei),
                (k[99] = o))
              : (o = k[99]),
            k[100] !== U || k[101] !== n || k[102] !== o
              ? ((i = (0, r.jsx)(f.$, {
                  className: "group justify-center",
                  color: "ghostMuted",
                  radius: "full",
                  size: "inline",
                  type: "button",
                  "aria-label": n,
                  onClick: U,
                  children: o,
                })),
                (k[100] = U),
                (k[101] = n),
                (k[102] = o),
                (k[103] = i))
              : (i = k[103]),
            k[104] !== e
              ? ((a = (0, r.jsx)("h1", {
                  className: "w-[316px] max-w-full text-center text-[28px] leading-9 font-normal text-default",
                  children: e,
                })),
                (k[104] = e),
                (k[105] = a))
              : (a = k[105]),
            k[106] !== eS
              ? ((l = eS
                  ? (0, r.jsx)("p", {
                      className: "text-center text-base leading-6 text-secondary select-none",
                      children: (0, r.jsx)(S.A, {
                        id: "electron.onboarding.login.apikey.explanation",
                        defaultMessage: "Use OpenAI’s developer platform with separate, usage-based billing",
                        description:
                          "Description below the API key sign-in heading explaining that OpenAI API usage has its own usage-based billing, separate from ChatGPT",
                      }),
                    })
                  : null),
                (k[106] = eS),
                (k[107] = l))
              : (l = k[107]),
            k[108] !== d
              ? ((s = d
                  ? (0, r.jsx)("p", {
                      className: "text-center text-[14px] leading-5 text-codex-description",
                      children: (0, r.jsx)(S.A, {
                        id: "electron.onboarding.login.browserSession.chooseAccount",
                        defaultMessage: "Choose an account to continue to ChatGPT",
                        description:
                          "Instruction on desktop onboarding when a signed-in ChatGPT browser session was found",
                      }),
                    })
                  : null),
                (k[108] = d),
                (k[109] = s))
              : (s = k[109]),
            k[110] !== t || k[111] !== i || k[112] !== a || k[113] !== l || k[114] !== s
              ? ((g = (0, r.jsxs)("div", { className: t, children: [i, a, l, s] })),
                (k[110] = t),
                (k[111] = i),
                (k[112] = a),
                (k[113] = l),
                (k[114] = s),
                (k[115] = g))
              : (g = k[115]),
            k[116] !== v ||
            k[117] !== C ||
            k[118] !== ej ||
            k[119] !== _ ||
            k[120] !== E ||
            k[121] !== R ||
            k[122] !== T ||
            k[123] !== K ||
            k[124] !== W ||
            k[125] !== O ||
            k[126] !== F ||
            k[127] !== H ||
            k[128] !== en
              ? ((h = en
                  ? (0, r.jsxs)("div", {
                      className: "flex w-full flex-col gap-8",
                      children: [
                        (0, r.jsx)(e4.c, {
                          allowApiKey: v,
                          allowChatGpt: C,
                          apiKeyHelp: "control" !== ej ? (0, r.jsx)(e2, {}) : null,
                          apiKeyValue: _,
                          isApiKeyEntryVisible: E,
                          isApiKeySignInPending: R,
                          isChatGptSignInPending: T,
                          onApiKeySecondaryAction: () => F("cancel"),
                          onApiKeySubmit: K,
                          onApiKeyValueChange: W,
                          onChatGptSignIn: O,
                          onShowApiKeyEntry: H,
                          apiKeySecondaryActionLabel: (0, r.jsx)(S.A, {
                            id: "electron.onboarding.login.apikey.cancel",
                            defaultMessage: "Cancel",
                            description: "Cancel button label for API key entry on desktop onboarding",
                          }),
                        }),
                        "explanation-with-chatgpt" === ej && C
                          ? (0, r.jsxs)("div", {
                              className:
                                "flex flex-col items-center gap-2 text-center text-sm text-secondary select-none",
                              children: [
                                (0, r.jsx)("p", {
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.apikey.chatGptAlternative",
                                    defaultMessage: "Want to use your ChatGPT account?",
                                    description:
                                      "Prompt below the API key form offering ChatGPT account sign-in as an alternative",
                                  }),
                                }),
                                (0, r.jsx)(f.$, {
                                  className: "underline",
                                  color: "ghostMuted",
                                  size: "inline",
                                  type: "button",
                                  disabled: R || T,
                                  onClick: () => {
                                    ;(F("switch-to-chatgpt"), O())
                                  },
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.apikey.signInWithChatGpt",
                                    defaultMessage: "Sign in with ChatGPT",
                                    description:
                                      "Button below the API key form that switches to ChatGPT account sign-in and opens the browser",
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    })
                  : null),
                (k[116] = v),
                (k[117] = C),
                (k[118] = ej),
                (k[119] = _),
                (k[120] = E),
                (k[121] = R),
                (k[122] = T),
                (k[123] = K),
                (k[124] = W),
                (k[125] = O),
                (k[126] = F),
                (k[127] = H),
                (k[128] = en),
                (k[129] = h))
              : (h = k[129]),
            k[130] !== v ||
            k[131] !== Q ||
            k[132] !== H ||
            k[133] !== X ||
            k[134] !== ee ||
            k[135] !== J ||
            k[136] !== z ||
            k[137] !== ei
              ? ((p = ei
                  ? (0, r.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-3",
                      children: [
                        v
                          ? (0, r.jsxs)(f.$, {
                              className: "w-full",
                              color: "outlineSurface",
                              contentLayout: "balanced",
                              radius: "full",
                              size: "onboardingAction",
                              type: "button",
                              onClick: H,
                              children: [
                                (0, r.jsx)(eW.A, { "aria-hidden": "true", className: "size-4" }),
                                (0, r.jsx)(S.A, {
                                  id: "electron.onboarding.login.otherMethods.openaiApiKey",
                                  defaultMessage: "OpenAI API Key",
                                  description: "Button label to open the existing OpenAI API key sign-in form",
                                }),
                              ],
                            })
                          : null,
                        v && z
                          ? (0, r.jsxs)(f.$, {
                              className: "w-full",
                              color: "outlineSurface",
                              contentLayout: "balanced",
                              radius: "full",
                              size: "onboardingAction",
                              type: "button",
                              onClick: X,
                              children: [
                                (0, r.jsx)("img", {
                                  alt: "",
                                  className: "h-2.5 dark:hue-rotate-180 dark:invert",
                                  src: $,
                                }),
                                (0, r.jsx)(S.A, {
                                  id: "electron.onboarding.login.bedrock.open.welcomeV2",
                                  defaultMessage: "Use Amazon Bedrock",
                                  description: "Button label to set up Amazon Bedrock on desktop onboarding",
                                }),
                              ],
                            })
                          : null,
                        v && null != J ? (0, r.jsx)(eM, { onClick: J }) : null,
                        null != ee
                          ? (0, r.jsxs)(f.$, {
                              className: "w-full",
                              color: "outlineSurface",
                              radius: "full",
                              size: "onboardingAction",
                              type: "button",
                              contentLayout: "balanced",
                              onClick: ee,
                              children: [
                                (0, r.jsx)(q.Bgg, { "aria-hidden": "true" }),
                                (0, r.jsx)(S.A, {
                                  id: "electron.onboarding.login.gateway.open",
                                  defaultMessage: "Connect to a gateway",
                                  description:
                                    "Open the configured custom model provider picker during desktop onboarding",
                                }),
                              ],
                            })
                          : null,
                        (0, r.jsx)(f.$, {
                          color: "ghostTertiary",
                          onClick: Q,
                          children: (0, r.jsx)(S.A, {
                            id: "electron.onboarding.login.otherMethods.back",
                            defaultMessage: "Back",
                            description:
                              "Button label to return from alternative sign-in methods to the main sign-in screen",
                          }),
                        }),
                      ],
                    })
                  : null),
                (k[130] = v),
                (k[131] = Q),
                (k[132] = H),
                (k[133] = X),
                (k[134] = ee),
                (k[135] = J),
                (k[136] = z),
                (k[137] = ei),
                (k[138] = p))
              : (p = k[138]),
            (m =
              en || ei
                ? null
                : (0, r.jsxs)("div", {
                    className: "flex w-full flex-col items-center gap-3",
                    children: [
                      C &&
                        (null != c && c.length > 0
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                c.map((e) => (0, r.jsx)(e8, { profile: e, onChatGptSignIn: O }, e.email)),
                                (0, r.jsxs)("div", {
                                  className: "flex w-full items-center gap-4 py-2",
                                  "aria-hidden": "true",
                                  children: [
                                    (0, r.jsx)("span", { className: "h-px flex-1 bg-border" }),
                                    (0, r.jsx)("span", {
                                      className: "text-[12px] font-medium text-codex-description",
                                      children: (0, r.jsx)(S.A, {
                                        id: "electron.onboarding.login.browserSession.or",
                                        defaultMessage: "OR",
                                        description:
                                          "Divider label between the recognized ChatGPT browser account and other sign-in options",
                                      }),
                                    }),
                                    (0, r.jsx)("span", { className: "h-px flex-1 bg-border" }),
                                  ],
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                                  type: "button",
                                  onClick: () => O("other-account"),
                                  children: (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.browserSession.otherAccount",
                                    defaultMessage: "Use another account",
                                    description:
                                      "Button label to sign in with a different ChatGPT account after a browser account was recognized",
                                  }),
                                }),
                              ],
                            })
                          : (0, r.jsxs)("button", {
                              className:
                                "flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-primary-solid text-[14px] leading-5 font-medium text-primary-solid hover:bg-primary-solid-hover",
                              type: "button",
                              onClick: () => O(),
                              children: [
                                (0, r.jsx)(eW.A, { className: "size-6 shrink-0 text-primary-solid" }),
                                (0, r.jsx)(S.A, {
                                  id: "electron.onboarding.login.chatgpt.continueToSignIn",
                                  defaultMessage: "Continue to sign in",
                                  description: "Button label for streamlined ChatGPT sign-in on desktop onboarding",
                                }),
                              ],
                            })),
                      C && ew
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsxs)("button", {
                                className:
                                  "flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                                type: "button",
                                onClick: () => O("google"),
                                children: [
                                  (0, r.jsx)(eA.A, { className: "size-5 shrink-0", "aria-hidden": "true" }),
                                  (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.google.signIn",
                                    defaultMessage: "Continue with Google",
                                    description: "Button label for Google sign-in on desktop onboarding",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("button", {
                                className:
                                  "flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                                type: "button",
                                onClick: () => O("microsoft"),
                                children: [
                                  (0, r.jsx)(eK.A, { className: "size-5 shrink-0", "aria-hidden": "true" }),
                                  (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.microsoft.signIn",
                                    defaultMessage: "Continue with Microsoft",
                                    description: "Button label for Microsoft sign-in on desktop onboarding",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      eo
                        ? (0, r.jsx)("button", {
                            className:
                              "flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                            type: "button",
                            onClick: er ? Z : H,
                            children:
                              er || (C && !eL)
                                ? (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.apikey.open.welcomeV2",
                                    defaultMessage: "Sign in another way",
                                    description: "Button label to open another sign-in method on v2 desktop onboarding",
                                  })
                                : (0, r.jsx)(S.A, {
                                    id: "electron.onboarding.login.apikey.open.explicit.welcomeV2",
                                    defaultMessage: "Sign in with an API key",
                                    description: "Button label to open API key sign-in on v2 desktop onboarding",
                                  }),
                          })
                        : null,
                      C
                        ? (0, r.jsx)("button", {
                            className:
                              "flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-codex-description underline hover:text-default",
                            type: "button",
                            onClick: V,
                            children: (0, r.jsx)(S.A, {
                              id: "electron.onboarding.login.signup.welcomeV2",
                              defaultMessage: "Sign up",
                              description: "Sign-up link on v2 desktop onboarding",
                            }),
                          })
                        : null,
                    ],
                  })))
        }
        ;((k[24] = v),
          (k[25] = C),
          (k[26] = ej),
          (k[27] = _),
          (k[28] = eb),
          (k[29] = eG),
          (k[30] = L),
          (k[31] = eo),
          (k[32] = em),
          (k[33] = er),
          (k[34] = et),
          (k[35] = E),
          (k[36] = R),
          (k[37] = eg),
          (k[38] = eR),
          (k[39] = ez),
          (k[40] = eP),
          (k[41] = T),
          (k[42] = K),
          (k[43] = W),
          (k[44] = O),
          (k[45] = V),
          (k[46] = D),
          (k[47] = Q),
          (k[48] = U),
          (k[49] = F),
          (k[50] = H),
          (k[51] = X),
          (k[52] = ee),
          (k[53] = J),
          (k[54] = Z),
          (k[55] = eB?.length),
          (k[56] = z),
          (k[57] = eS),
          (k[58] = en),
          (k[59] = ea),
          (k[60] = ew),
          (k[61] = ei),
          (k[62] = eL),
          (k[63] = u),
          (k[64] = g),
          (k[65] = h),
          (k[66] = p),
          (k[67] = m),
          (k[68] = b),
          (k[69] = y))
      } else ((u = k[63]), (g = k[64]), (h = k[65]), (p = k[66]), (m = k[67]), (b = k[68]), (y = k[69]))
      return y !== Symbol.for("react.early_return_sentinel")
        ? y
        : (k[139] !== u || k[140] !== g || k[141] !== h || k[142] !== p || k[143] !== m
            ? ((x = (0, r.jsxs)("div", { className: u, children: [g, h, p, m] })),
              (k[139] = u),
              (k[140] = g),
              (k[141] = h),
              (k[142] = p),
              (k[143] = m),
              (k[144] = x))
            : (x = k[144]),
          k[145] !== b || k[146] !== x
            ? ((w = (0, r.jsx)("div", { className: b, children: x })), (k[145] = b), (k[146] = x), (k[147] = w))
            : (w = k[147]),
          w)
    }
    function e8(e) {
      let t,
        n,
        i,
        a,
        l,
        c,
        d,
        u,
        g = (0, o.c)(28),
        { profile: h, onChatGptSignIn: p } = e,
        m = (0, j.A)(),
        b = (0, ez.Dv)(h.avatarUrl),
        [y, x] = (0, s.useState)(null)
      g[0] !== h.name ? ((t = h.name?.trim() || null), (g[0] = h.name), (g[1] = t)) : (t = g[1])
      let w = t,
        k = w ?? h.email
      return (
        g[2] !== k || g[3] !== m || g[4] !== h.email || g[5] !== w
          ? ((n =
              null == w
                ? m.formatMessage(
                    {
                      id: "electron.onboarding.login.browserSession.continueAs",
                      defaultMessage: "Continue as {accountName}",
                      description:
                        "Accessible label for a recognized ChatGPT browser account button on desktop onboarding. The accountName placeholder is the account email address.",
                    },
                    { accountName: k },
                  )
                : m.formatMessage(
                    {
                      id: "electron.onboarding.login.browserSession.continueAsWithEmail",
                      defaultMessage: "Continue as {accountName}, {email}",
                      description:
                        "Accessible label for a recognized ChatGPT browser account button on desktop onboarding when the account has a display name. The accountName placeholder is the display name and the email placeholder distinguishes accounts that share that name.",
                    },
                    { accountName: k, email: h.email },
                  )),
            (g[2] = k),
            (g[3] = m),
            (g[4] = h.email),
            (g[5] = w),
            (g[6] = n))
          : (n = g[6]),
        g[7] !== p || g[8] !== h.email
          ? ((i = () => p("signin", h.email)), (g[7] = p), (g[8] = h.email), (g[9] = i))
          : (i = g[9]),
        g[10] !== k || g[11] !== y || g[12] !== h.email || g[13] !== b
          ? ((a =
              null != b && b !== y
                ? (0, r.jsx)("img", {
                    src: b,
                    alt: "",
                    className: "size-10 shrink-0 rounded-full",
                    onError: () => {
                      x(b)
                    },
                  })
                : (0, r.jsx)(eG.e, { alt: "", colorKey: h.email, name: k, size: "row", src: null })),
            (g[10] = k),
            (g[11] = y),
            (g[12] = h.email),
            (g[13] = b),
            (g[14] = a))
          : (a = g[14]),
        g[15] !== k
          ? ((l = (0, r.jsx)("span", {
              className: "block truncate text-[14px] leading-5 font-medium text-default",
              children: k,
            })),
            (g[15] = k),
            (g[16] = l))
          : (l = g[16]),
        g[17] !== h.email || g[18] !== w
          ? ((c =
              null == w
                ? null
                : (0, r.jsx)("span", {
                    className: "block truncate text-[13px] leading-5 text-codex-description",
                    children: h.email,
                  })),
            (g[17] = h.email),
            (g[18] = w),
            (g[19] = c))
          : (c = g[19]),
        g[20] !== l || g[21] !== c
          ? ((d = (0, r.jsxs)("span", { className: "min-w-0 flex-1", children: [l, c] })),
            (g[20] = l),
            (g[21] = c),
            (g[22] = d))
          : (d = g[22]),
        g[23] !== n || g[24] !== i || g[25] !== a || g[26] !== d
          ? ((u = (0, r.jsxs)(f.$, {
              className: "w-full justify-start text-start",
              color: "outlineSurface",
              radius: "large",
              size: "auth",
              type: "button",
              "aria-label": n,
              onClick: i,
              children: [a, d],
            })),
            (g[23] = n),
            (g[24] = i),
            (g[25] = a),
            (g[26] = d),
            (g[27] = u))
          : (u = g[27]),
        u
      )
    }
    function e9(e) {
      let t,
        n,
        f,
        p,
        G,
        K,
        W,
        O,
        U,
        F,
        q,
        $,
        H,
        Z,
        Q,
        Y,
        X,
        J,
        ee,
        et,
        en,
        er,
        ei,
        ea,
        eu,
        eg,
        ef,
        eh,
        em,
        ew,
        eC,
        eA = (0, o.c)(156),
        { workspaceRecovery: eM } = e,
        eL = void 0 !== eM && eM,
        eE = (0, a.gh)(b.u),
        eI = (0, g.KD)(),
        eR = (0, i.Zp)(),
        eP = (0, j.A)()
      eA[0] !== eE
        ? ((n = (e) => {
            let t = eE.get(N.x2)
            return null != t ? (0, I.E)(e, t.pathname, t.search) : e
          }),
          (eA[0] = eE),
          (eA[1] = n))
        : (n = eA[1])
      let eT = n,
        ez = (0, v.jE)(),
        eG = (0, a._U)(eb.Q, y.fI),
        eK = "ready" === eG.status && eG.chatgpt,
        eW = "ready" === eG.status && eG.api,
        eO = (0, a.Ul)(E.$f)
      eA[2] !== eO
        ? ((f = null == eO ? null : { hasPreviouslyCompletedOnboarding: eO }), (eA[2] = eO), (eA[3] = f))
        : (f = eA[3])
      let eV = f,
        eD = (0, B.AS)(),
        eU = (0, a._U)(A.uC, "gcp")
      eA[4] !== eP || eA[5] !== eE
        ? ((p = (e) => {
            eE.get(m.Id).warning(
              eP.formatMessage(
                {
                  id: "electron.onboarding.login.error",
                  defaultMessage: "Sign-in failed: {rawMessage}",
                  description: "Toast shown when sign-in fails on the desktop onboarding page",
                },
                { rawMessage: e },
              ),
            )
          }),
          (eA[4] = eP),
          (eA[5] = eE),
          (eA[6] = p))
        : (p = eA[6])
      let eF = p,
        [eq, e$] = (0, s.useState)(null),
        eH = (0, a._U)(_.b, y.fI),
        eZ = (0, a.Ul)(u.f2),
        eQ = null != eZ ? eZ.authUrl : eH?.authUrl,
        eY = null != eq || null != eZ,
        eX = (0, s.useRef)(null)
      ;(eA[7] !== eE.node
        ? ((G = () => () => {
            u.UL.has(eE.node) || eX.current?.abort()
          }),
          (eA[7] = eE.node),
          (eA[8] = G))
        : (G = eA[8]),
        eA[9] !== eE ? ((K = [eE]), (eA[9] = eE), (eA[10] = K)) : (K = eA[10]),
        (0, s.useEffect)(G, K),
        eA[11] !== eK
          ? ((W = () => {
              eK || eX.current?.abort()
            }),
            (O = [eK]),
            (eA[11] = eK),
            (eA[12] = W),
            (eA[13] = O))
          : ((W = eA[12]), (O = eA[13])),
        (0, s.useEffect)(W, O))
      let [eJ, e0] = (0, s.useState)(!1),
        [e1, e2] = (0, s.useState)(!1),
        [e3, e4] = (0, s.useState)(!1),
        [e5, e7] = (0, s.useState)(""),
        [e8, e9] = (0, s.useState)(null),
        tr = null != e8
      ;(eA[14] !== e8
        ? ((F = () => () => e8?.abort()), (U = [e8]), (eA[14] = e8), (eA[15] = U), (eA[16] = F))
        : ((U = eA[15]), (F = eA[16])),
        (0, s.useEffect)(F, U),
        eA[17] !== eW || eA[18] !== e8
          ? ((q = () => {
              eW || e8?.abort()
            }),
            ($ = [eW, e8]),
            (eA[17] = eW),
            (eA[18] = e8),
            (eA[19] = q),
            (eA[20] = $))
          : ((q = eA[19]), ($ = eA[20])),
        (0, s.useEffect)(q, $))
      let [to, ti] = (0, s.useState)(!1),
        ta = (0, a.Ul)(A.em),
        tl = (0, a.Ul)(ek),
        ts = (0, a.Ul)(A.mN),
        tc = ts && "object" == typeof ta ? ta?.primaryProviderId : void 0,
        [td, tu] = (0, s.useState)(null),
        tg = (0, a.Ul)(el.sW),
        tf = (0, s.useRef)(0),
        th = (0, s.useRef)(null)
      eA[21] !== eE
        ? ((H = () => {
            ;(eE.set(E.gR, !1), eE.set(E.rz, !0))
          }),
          (eA[21] = eE),
          (eA[22] = H))
        : (H = eA[22])
      let tp = H
      eA[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = () => {
            ;(e0(!1), e9(null), e7(""))
          }),
          (eA[23] = Z))
        : (Z = eA[23])
      let tm = Z
      eA[24] !== eG.api || eA[25] !== eG.status || eA[26] !== eV || eA[27] !== eE
        ? ((Q = () => {
            null != eV &&
              "ready" === eG.status &&
              eG.api &&
              ((0, R.yy)(eE, k.CodexLoginMethodSelected, { method: "apikey", ...eV }), e0(!0))
          }),
          (eA[24] = eG.api),
          (eA[25] = eG.status),
          (eA[26] = eV),
          (eA[27] = eE),
          (eA[28] = Q))
        : (Q = eA[28])
      let tb = Q
      eA[29] !== eP || eA[30] !== eE
        ? ((Y = async () => {
            let e = (tf.current = tf.current + 1)
            if (null == P.appServices.appServerLifecycle)
              return void tu((e) =>
                null == e
                  ? null
                  : {
                      ...e,
                      isDetecting: !1,
                      errorMessage: eP.formatMessage({
                        id: "electron.onboarding.login.bedrock.unavailable",
                        defaultMessage: "Amazon Bedrock sign-in is unavailable on this host",
                        description: "Error when the desktop host does not support Amazon Bedrock sign-in",
                      }),
                    },
              )
            tu(tn)
            try {
              let t = await (0, D.Y_)(eE)
              tu((n) => (null == n || e !== tf.current ? n : { ...n, detectedCredentials: t, isDetecting: !1 }))
            } catch (t) {
              tu((n) =>
                null == n || e !== tf.current
                  ? n
                  : (0, l.Rg6)(t, "account/bedrock/discover")
                    ? { ...n, errorMessage: null, isDetecting: !1, supportsAwsCredentials: !1 }
                    : { ...n, errorMessage: (0, l.Rt_)(t), isDetecting: !1 },
              )
            }
          }),
          (eA[29] = eP),
          (eA[30] = eE),
          (eA[31] = Y))
        : (Y = eA[31])
      let ty = Y
      eA[32] !== ty || eA[33] !== eE
        ? ((X = () => {
            ;(tu({
              detectedCredentials: null,
              errorMessage: null,
              isDetecting: !0,
              isSubmitting: !1,
              supportsAwsCredentials: !0,
              supportsAccessKeys: (0, l.JFB)(eE.get(C.B, y.fI), "bedrockAccessKeysLogin"),
            }),
              ty())
          }),
          (eA[32] = ty),
          (eA[33] = eE),
          (eA[34] = X))
        : (X = eA[34])
      let tx = X
      eA[35] !== eT || eA[36] !== eR || eA[37] !== eE || eA[38] !== tp || eA[39] !== eI || eA[40] !== eL
        ? ((J = async () => {
            if (eL) {
              ;(eI(), await eR(eT("/"), { replace: !0 }))
              return
            }
            ;(tp(), eE.set(E.pi, !0), eE.set(L.Z, void 0), eI(), await eR(eT("/welcome"), { replace: !0 }))
          }),
          (eA[35] = eT),
          (eA[36] = eR),
          (eA[37] = eE),
          (eA[38] = tp),
          (eA[39] = eI),
          (eA[40] = eL),
          (eA[41] = J))
        : (J = eA[41])
      let tw = J
      eA[42] !== tw
        ? ((ee = async () => {
            ;(0, el.iM)()?.status === "pending" && ((0, el.EN)({ status: "complete" }), await tw())
          }),
          (eA[42] = tw),
          (eA[43] = ee))
        : (ee = eA[43])
      let tk = ee,
        tv = (0, s.useEffectEvent)(tk)
      ;(eA[44] !== tv || eA[45] !== eE
        ? ((et = () =>
            eE.watch((e) => {
              let { get: t } = e,
                n = t(el.sW)
              n?.status === "pending" && null != n.warning && t(el.sL) && tv()
            })),
          (eA[44] = tv),
          (eA[45] = eE),
          (eA[46] = et))
        : (et = eA[46]),
        eA[47] !== eE ? ((en = [eE]), (eA[47] = eE), (eA[48] = en)) : (en = eA[48]),
        (0, s.useEffect)(et, en),
        eA[49] !== tk || eA[50] !== eE
          ? ((er = async () => {
              let e = P.appServices.appServerLifecycle,
                t = eE.get(el.sW)
              if (t?.status !== "pending" || t.isChecking || null == e) return
              let n = { ...t, isChecking: !0 }
              ;(0, el.EN)(n)
              let r = await (0, D.Wj)(e, t.region)
              if ((0, el.iM)() === n) {
                if (null == r) return void (await tk())
                ;(0, el.EN)({ ...t, warning: r, isChecking: !1 })
              }
            }),
            (eA[49] = tk),
            (eA[50] = eE),
            (eA[51] = er))
          : (er = eA[51]))
      let tj = er
      eA[52] !== eW || eA[53] !== tk || eA[54] !== eP || eA[55] !== eE
        ? ((ei = async (e) => {
            if (!eW) return
            let t = P.appServices.appServerLifecycle
            if (null == t)
              return void tu((e) =>
                null == e
                  ? null
                  : {
                      ...e,
                      errorMessage: eP.formatMessage({
                        id: "electron.onboarding.login.bedrock.unavailable",
                        defaultMessage: "Amazon Bedrock sign-in is unavailable on this host",
                        description: "Error when the desktop host does not support Amazon Bedrock sign-in",
                      }),
                    },
              )
            tu(tt)
            let n = { status: "pending", warning: null, region: e.region, isChecking: !0 }
            ;(0, el.EN)(n)
            try {
              let r = await (0, D.$_)(eE, t, e)
              if ((0, el.iM)() !== n) return
              if (null != r && !eE.get(el.sL))
                return void (0, el.EN)({ status: "pending", warning: r, region: e.region, isChecking: !1 })
              await tk()
            } catch (t) {
              if ((0, el.iM)() !== n) return
              ;((0, el.EN)(null),
                tu((n) => {
                  if (null == n) return null
                  let r = (0, l.Rt_)(t),
                    o =
                      "profile" === e.method &&
                      r.startsWith(`failed to load credentials for AWS profile \`${e.profile.trim()}\`:`)
                        ? eP.formatMessage(
                            {
                              id: "electron.onboarding.login.bedrock.profileCredentialsError",
                              defaultMessage:
                                "Couldn’t load credentials for AWS profile “{profile}”. Check your AWS sign-in and try again.",
                              description:
                                "Error when credentials cannot be loaded from the selected AWS profile during Amazon Bedrock sign-in. The profile placeholder is the user-provided AWS profile name.",
                            },
                            { profile: e.profile.trim() },
                          )
                        : r
                  return { ...n, errorMessage: o, isSubmitting: !1 }
                }))
            }
          }),
          (eA[52] = eW),
          (eA[53] = tk),
          (eA[54] = eP),
          (eA[55] = eE),
          (eA[56] = ei))
        : (ei = eA[56])
      let tS = ei
      eA[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((ea = () => {
            e4(!1)
          }),
          (eA[57] = ea))
        : (ea = eA[57])
      let tC = ea
      eA[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((eu = () => {
            ;(null != th.current ||
              "u" < typeof window ||
              ("AudioContext" in window &&
                ((th.current = new window.AudioContext()), "suspended" === th.current.state && th.current.resume())),
              e4(!0))
          }),
          (eA[58] = eu))
        : (eu = eA[58])
      let tA = eu
      eA[59] !== eQ || eA[60] !== eP || eA[61] !== eE
        ? ((eg = async () => {
            null != eQ &&
              (await (0, w.E)(eQ)) &&
              eE
                .get(m.Id)
                .success(
                  eP.formatMessage({
                    id: "electron.onboarding.login.linkCopied",
                    defaultMessage: "Sign-in link copied",
                    description:
                      "Toast confirming that the active browser sign-in link was copied so the user can paste it into another browser",
                  }),
                )
          }),
          (eA[59] = eQ),
          (eA[60] = eP),
          (eA[61] = eE),
          (eA[62] = eg))
        : (eg = eA[62])
      let t_ = eg
      eA[63] !== eP || eA[64] !== tc || eA[65] !== eE
        ? ((ef = async () => {
            if (null == tc) return !0
            eE.set(A.em, "connecting")
            try {
              let e = (await ej(eE, tc)) === "ready"
              return (eE.set(A.em, e ? null : "choose"), e)
            } catch {
              throw (
                eE.set(A.em, "choose"),
                Error(
                  eP.formatMessage({
                    id: "electron.onboarding.login.gateway.finishError",
                    defaultMessage: "Couldn’t finish connecting to the gateway",
                    description:
                      "Error when provider sign-in cannot be completed after signing in to the primary account",
                  }),
                )
              )
            }
          }),
          (eA[63] = eP),
          (eA[64] = tc),
          (eA[65] = eE),
          (eA[66] = ef))
        : (ef = eA[66])
      let tM = ef
      eA[67] !== tM ||
      eA[68] !== eT ||
      eA[69] !== eG.chatgpt ||
      eA[70] !== eG.status ||
      eA[71] !== eV ||
      eA[72] !== eR ||
      eA[73] !== tc ||
      eA[74] !== ez ||
      eA[75] !== eE ||
      eA[76] !== eF ||
      eA[77] !== tp ||
      eA[78] !== eD ||
      eA[79] !== eI ||
      eA[80] !== eL
        ? ((eh = async (e, t) => {
            let n = void 0 === e ? "signin" : e
            if (u.UL.has(eE.node)) return void u.UL.get(eE.node)?.cancel()
            if (null != eX.current) {
              ;(eX.current.abort(), (eX.current = null), e$(null))
              return
            }
            if (null == eV || "ready" !== eG.status || !eG.chatgpt) return
            let r = "signin" === n || "signup" === n || "other-account" === n ? "chatgpt" : n
            ;(0, R.yy)(eE, k.CodexLoginMethodSelected, { method: r, ...eV })
            let o = (0, l.JFB)(eE.get(C.B, y.fI), "gatewayOAuth") ? (0, ec.W)() : null,
              i = new AbortController()
            ;((eX.current = i), e$(i))
            let a = !1,
              s = !1
            await (async () => {
              try {
                var e
                let s,
                  { useDesktopAuth: c, useStreamlinedLoginUx: u } =
                    ((s = (e = (0, B.XM)(eD, "3446609779")).get("enabled", !1)),
                    {
                      useDesktopAuth: e.get("use_desktop_auth", s),
                      useStreamlinedLoginUx: e.get("use_streamlined_login_ux", s),
                    }),
                  {
                    authUrl: g,
                    completion: f,
                    setBrowserUrl: p,
                  } = await (0, d.NR)({
                    scope: eE,
                    signal: i.signal,
                    useHostedLoginSuccessPage: !0,
                    useStreamlinedLogin: u,
                  })
                if (g && !i.signal.aborted) {
                  let e = !c || eL ? void 0 : (await P.appServices.appInfo.get()).chatGptDesktopAuthOrigin
                  if (i.signal.aborted) return
                  let r = (function (e, t) {
                      if ("signin" === t) return e
                      try {
                        let n = new URL(e),
                          r = "/codex/desktop-auth" === n.pathname ? n.searchParams.get("authorize_url") : null,
                          o = null == r ? n : new URL(r)
                        switch (t) {
                          case "signup":
                            o.searchParams.set("screen_hint", "signup")
                            break
                          case "google":
                            ;(o.searchParams.set("screen_hint", "login_or_signup"),
                              o.searchParams.set("connection", "google-oauth2"))
                            break
                          case "microsoft":
                            ;(o.searchParams.set("screen_hint", "login_or_signup"),
                              o.searchParams.set("connection", "windowslive"))
                            break
                          case "apple":
                            ;(o.searchParams.set("screen_hint", "login_or_signup"),
                              o.searchParams.set("connection", "apple"))
                            break
                          case "email":
                            o.searchParams.set("screen_hint", "login_or_signup")
                            break
                          case "other-account":
                            o.searchParams.set("prompt", "select_account")
                        }
                        return (null != r && n.searchParams.set("authorize_url", o.toString()), n.toString())
                      } catch {
                        return e
                      }
                    })(g, n),
                    o = (0, x.Z)({
                      authUrl: r,
                      codexAppVersion: (0, x.y)(eE),
                      desktopAuthOrigin: e,
                      includeCodexOriginStableId: !0,
                      loginHint: t,
                      useDesktopAuth: c && !eL,
                      useStreamlinedLoginUx: u,
                    })
                  p(o) && (0, h.E0)({ href: o, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
                }
                let m = await f
                if (i.signal.aborted) return
                if (m.success) {
                  if (!(await tM())) return
                  a = !0
                  let e = { method: r, ...eV, ...(0, T.tY)(m.onboardingEntrypoint) }
                  if (
                    (null != o ? o(e) : (0, R.yy)(eE, k.CodexLoginSuccess, e),
                    ez.removeQueries({ queryKey: ["vscode", "account-info"], exact: !0 }),
                    eL)
                  ) {
                    ;(eI(), await eR(eT("/"), { replace: !0 }))
                    return
                  }
                  ;(tp(),
                    eE.set(E.pi, !0),
                    null != m.onboardingEntrypoint && (0, T.mU)(eE, m.onboardingEntrypoint),
                    eE.set(L.Z, m.onboardingEntrypoint),
                    eI(),
                    eR(eT("/welcome"), { replace: !0 }))
                } else
                  ((0, R.yy)(eE, k.CodexLoginFailure, { method: r, errorKind: eB(m.error), ...eV }),
                    eF((0, l.Rt_)(m.error ?? "Unknown error")))
              } catch (e) {
                if (e instanceof Error && "AbortError" === e.name) {
                  ;(null != tc && (eE.set(A.em, "choose"), e2(!0)),
                    (s = !0),
                    (0, R.yy)(eE, k.CodexLoginFailure, { method: r, errorKind: "abort", ...eV }))
                  return
                }
                ;((0, R.yy)(eE, k.CodexLoginFailure, { method: r, errorKind: eB(e), ...eV }), eF((0, l.Rt_)(e)))
              }
            })().finally(() => {
              let e = ["chatgpt-browser-session-profiles", !0]
              ;(a ||
                s ||
                i.signal.aborted ||
                (null != eX.current && eX.current !== i) ||
                ez.getQueryData(e)?.length !== 0 ||
                ez.resetQueries({ queryKey: e, exact: !0 }),
                eX.current === i && (eX.current = null),
                e$((e) => (e === i ? null : e)))
            })
          }),
          (eA[67] = tM),
          (eA[68] = eT),
          (eA[69] = eG.chatgpt),
          (eA[70] = eG.status),
          (eA[71] = eV),
          (eA[72] = eR),
          (eA[73] = tc),
          (eA[74] = ez),
          (eA[75] = eE),
          (eA[76] = eF),
          (eA[77] = tp),
          (eA[78] = eD),
          (eA[79] = eI),
          (eA[80] = eL),
          (eA[81] = eh))
        : (eh = eA[81])
      let tN = eh
      eA[82] !== e5 ||
      eA[83] !== tM ||
      eA[84] !== eT ||
      eA[85] !== tr ||
      eA[86] !== eG.api ||
      eA[87] !== eG.status ||
      eA[88] !== eV ||
      eA[89] !== eR ||
      eA[90] !== eE ||
      eA[91] !== eF ||
      eA[92] !== tp ||
      eA[93] !== eI ||
      eA[94] !== eL
        ? ((em = async () => {
            let e = e5.trim()
            if (!e || tr || null == eV || "ready" !== eG.status || !eG.api) return
            let t = new AbortController()
            ;(e9(t),
              await (async () => {
                try {
                  if ((await (0, c.ls)(eE, y.fI).loginWithApiKey(e), t.signal.aborted || !(await tM()))) return
                  if (((0, R.yy)(eE, k.CodexLoginSuccess, { method: "apikey", ...eV }), eL)) {
                    ;(eI(), await eR(eT("/"), { replace: !0 }))
                    return
                  }
                  ;(tp(), eE.set(E.pi, !0), eE.set(L.Z, void 0), eI(), eR(eT("/welcome"), { replace: !0 }))
                } catch (e) {
                  if (t.signal.aborted) return
                  ;((0, R.yy)(eE, k.CodexLoginFailure, { method: "apikey", errorKind: eB(e), ...eV }),
                    eF((0, l.Rt_)(e)))
                }
              })().finally(() => {
                e9((e) => (e === t ? null : e))
              }))
          }),
          (eA[82] = e5),
          (eA[83] = tM),
          (eA[84] = eT),
          (eA[85] = tr),
          (eA[86] = eG.api),
          (eA[87] = eG.status),
          (eA[88] = eV),
          (eA[89] = eR),
          (eA[90] = eE),
          (eA[91] = eF),
          (eA[92] = tp),
          (eA[93] = eI),
          (eA[94] = eL),
          (eA[95] = em))
        : (em = eA[95])
      let tL = em
      if (tg?.status === "pending") {
        let e
        return (
          eA[96] !== tg.isChecking || eA[97] !== tg.warning || eA[98] !== tk || eA[99] !== tj || eA[100] !== eE
            ? ((e = (0, r.jsx)(z.cI, {
                children:
                  null == tg.warning
                    ? (0, r.jsxs)("div", {
                        className:
                          "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description",
                        children: [
                          (0, r.jsx)(M.y, { className: "h-4 w-4 text-default" }),
                          (0, r.jsx)(S.A, {
                            id: "electron.onboarding.login.bedrock.finishing",
                            defaultMessage: "Finishing Amazon Bedrock sign-in…",
                            description:
                              "Loading message while Bedrock sign-in saves credentials, restarts the app server, and checks GovCloud configuration",
                          }),
                        ],
                      })
                    : (0, r.jsx)(es.o, {
                        unverified: "unverified" === tg.warning,
                        isChecking: tg.isChecking,
                        onRetry: tj,
                        onContinue: async () => {
                          ;(eE.set(el.sL, !0), await tk())
                        },
                      }),
              })),
              (eA[96] = tg.isChecking),
              (eA[97] = tg.warning),
              (eA[98] = tk),
              (eA[99] = tj),
              (eA[100] = eE),
              (eA[101] = e))
            : (e = eA[101]),
          e
        )
      }
      if (null != eZ && "chatgpt" !== eZ.stage) {
        let e
        return (
          eA[102] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(ed.m, {})), (eA[102] = e))
            : (e = eA[102]),
          e
        )
      }
      if ("ready" !== eG.status || (!eG.api && !eG.chatgpt)) {
        let e
        return (
          eA[103] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(z.cI, { children: (0, r.jsx)(eN.G, { hostId: y.fI }) })), (eA[103] = e))
            : (e = eA[103]),
          e
        )
      }
      if (null == eV) {
        let e
        return (
          eA[104] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(z.cI, {
                children: (0, r.jsxs)("div", {
                  className: "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description",
                  children: [
                    (0, r.jsx)(M.y, { className: "h-4 w-4 text-default" }),
                    (0, r.jsx)(S.A, {
                      id: "electron.onboarding.login.loading",
                      defaultMessage: "Loading…",
                      description: "Loading state while the desktop login page prepares the sign-in experience",
                    }),
                  ],
                }),
              })),
              (eA[104] = e))
            : (e = eA[104]),
          e
        )
      }
      let tE = P.appServices?.appServerLifecycle
      if (ts && null != tE && ("connecting" === ta || "choose" === ta)) {
        let e,
          t,
          n,
          o,
          i = "connecting" === ta
        return (
          eA[105] !== eE
            ? ((e = () => eE.set(A.em, null)),
              (t = (e) =>
                (async function (e, t) {
                  try {
                    let { provider: n } = await (0, c.ls)(e, y.fI).createCustomGateway(t)
                    return n.id
                  } catch (t) {
                    let e = ey.safeParse(t)
                    if (e.success) throw new ex(e.data.message, { cause: t })
                    throw t
                  }
                })(eE, e)),
              (eA[105] = eE),
              (eA[106] = e),
              (eA[107] = t))
            : ((e = eA[106]), (t = eA[107])),
          eA[108] !== tw || eA[109] !== eE
            ? ((n = async (e) => {
                if ("choose" === eE.get(A.em) && eE.get(A.mN)) {
                  eE.set(A.em, "connecting")
                  try {
                    let t = await (async function (e, t, n) {
                      let r = (0, c.ls)(e, y.fI),
                        o = await r.sendRequest("config/read", { includeLayers: !0, cwd: null }),
                        i = e.get(eb.Q, y.fI)
                      if ("ready" !== i.status || (!i.api && !i.chatgpt)) throw Error("Gateway sign-in is unavailable")
                      let { data: a, defaultProviderId: l } = await ev(e, i.api, o)
                      if (!a.some(({ id: e }) => e === n)) throw Error("Gateway is no longer available")
                      if (l !== n) {
                        let e = (0, ep.uy)(o.layers)
                        if (!e?.expectedVersion) throw Error("The user configuration version is unavailable")
                        if (
                          null !=
                          (
                            await r.setDefaultModelProvider(n, {
                              filePath: e.filePath,
                              expectedVersion: e.expectedVersion,
                            })
                          ).overriddenMetadata
                        )
                          throw Error("The default model provider is managed")
                      }
                      return (await t.restart(y.fI), ej(e, n))
                    })(eE, tE, e)
                    if ("cancelled" === t) return void eE.set(A.em, "choose")
                    if ("primary" === t) {
                      ;(eE.set(A.em, { primaryProviderId: e }), e2(!1))
                      return
                    }
                    ;(eE.set(A.em, null), await tw())
                  } catch (e) {
                    throw (eE.set(A.em, "choose"), e)
                  }
                }
              }),
              (eA[108] = tw),
              (eA[109] = eE),
              (eA[110] = n))
            : (n = eA[110]),
          eA[111] !== eW || eA[112] !== i || eA[113] !== e || eA[114] !== t || eA[115] !== n
            ? ((o = (0, r.jsx)(z.cI, {
                fullBleed: !0,
                children: (0, r.jsx)(eS, { allowApiKey: eW, busy: i, onBack: e, onCreate: t, onSelect: n }),
              })),
              (eA[111] = eW),
              (eA[112] = i),
              (eA[113] = e),
              (eA[114] = t),
              (eA[115] = n),
              (eA[116] = o))
            : (o = eA[116]),
          o
        )
      }
      if (eU && to && null != tE) {
        let e, t
        return (
          eA[117] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => ti(!1)), (eA[117] = e)) : (e = eA[117]),
          eA[118] !== tw || eA[119] !== eP || eA[120] !== eE
            ? ((t = (0, r.jsx)(z.cI, {
                fullBleed: !0,
                children: (0, r.jsx)(e_, {
                  onBack: e,
                  onSubmit: async (e) => {
                    try {
                      await (0, c.ls)(eE, y.fI).sendRequest("account/gcp/setup", e)
                    } catch (e) {
                      if (!(0, l.Rg6)(e, "account/gcp/setup")) throw e
                      throw Error(
                        eP.formatMessage({
                          id: "electron.onboarding.login.gcp.unsupported",
                          defaultMessage: "This app server does not support Google Cloud setup",
                          description: "Error when a source build predates Google Cloud setup",
                        }),
                      )
                    }
                    ;(await tE.restart(y.fI), await tw())
                  },
                }),
              })),
              (eA[118] = tw),
              (eA[119] = eP),
              (eA[120] = eE),
              (eA[121] = t))
            : (t = eA[121]),
          t
        )
      }
      if (eW && null != td) {
        let e, t, n
        return (
          eA[122] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = () => {
                ;((tf.current = tf.current + 1), tu(null))
              }),
              (t = () => {
                tu(te)
              }),
              (eA[122] = e),
              (eA[123] = t))
            : ((e = eA[122]), (t = eA[123])),
          eA[124] !== td.detectedCredentials ||
          eA[125] !== td.errorMessage ||
          eA[126] !== td.isDetecting ||
          eA[127] !== td.isSubmitting ||
          eA[128] !== td.supportsAccessKeys ||
          eA[129] !== td.supportsAwsCredentials ||
          eA[130] !== ty ||
          eA[131] !== tS
            ? ((n = (0, r.jsx)(z.cI, {
                fullBleed: !0,
                children: (0, r.jsx)(eo, {
                  detectedCredentials: td.detectedCredentials,
                  errorMessage: td.errorMessage,
                  isDetecting: td.isDetecting,
                  isSubmitting: td.isSubmitting,
                  supportsAwsCredentials: td.supportsAwsCredentials,
                  supportsAccessKeys: td.supportsAccessKeys,
                  onBack: e,
                  onClearError: t,
                  onDetectCredentials: ty,
                  onSubmit: tS,
                }),
              })),
              (eA[124] = td.detectedCredentials),
              (eA[125] = td.errorMessage),
              (eA[126] = td.isDetecting),
              (eA[127] = td.isSubmitting),
              (eA[128] = td.supportsAccessKeys),
              (eA[129] = td.supportsAwsCredentials),
              (eA[130] = ty),
              (eA[131] = tS),
              (eA[132] = n))
            : (n = eA[132]),
          n
        )
      }
      return (
        eA[133] !== eK ||
        eA[134] !== e5 ||
        eA[135] !== eQ ||
        eA[136] !== tL ||
        eA[137] !== tN ||
        eA[138] !== t_ ||
        eA[139] !== eJ ||
        eA[140] !== tr ||
        eA[141] !== eY ||
        eA[142] !== e1 ||
        eA[143] !== e3 ||
        eA[144] !== eG.api ||
        eA[145] !== eG.chatgpt ||
        eA[146] !== tc ||
        eA[147] !== eE ||
        eA[148] !== tb ||
        eA[149] !== tx ||
        eA[150] !== tl ||
        eA[151] !== eU
          ? ((ew = e3
              ? (0, r.jsx)("div", {
                  className: "flex h-full w-full",
                  children: (0, r.jsx)(V, { onExit: tC, audioContextRef: th }),
                })
              : (0, r.jsx)(e6, {
                  allowApiKey: eG.api,
                  allowChatGpt: eG.chatgpt,
                  apiKeyHelpVariant:
                    "link" === t || "explanation" === t || "explanation-with-chatgpt" === t ? t : void 0,
                  apiKeyValue: e5,
                  canCopySignInLink: null != eQ,
                  isApiKeyEntryVisible: eJ || (null != tc && !eK),
                  isOtherSignInMethodsVisible: e1,
                  isApiKeySignInPending: tr,
                  isChatGptSignInPending: eY,
                  showAmazonBedrockSignIn: null == tc,
                  onApiKeySubmit: tL,
                  onApiKeyValueChange: e7,
                  onChatGptSignIn: tN,
                  onChatGptSignUp: () => tN("signup"),
                  onCopySignInLink: t_,
                  onPlaySnake: tA,
                  onResetApiKeyEntry: (e) => {
                    ;(tm(), "cancel" === e && null != tc && (eE.set(A.em, "choose"), e2(!0)))
                  },
                  onShowApiKeyEntry: tb,
                  onShowOtherSignInMethods: () => e2(!0),
                  onHideOtherSignInMethods: () => e2(!1),
                  onShowBedrockSetup: tx,
                  onShowGatewaySetup: null == tc && tl ? () => eE.set(A.em, "choose") : void 0,
                  onShowGcpSetup: null == tc && eU ? () => ti(!0) : void 0,
                })),
            (eA[133] = eK),
            (eA[134] = e5),
            (eA[135] = eQ),
            (eA[136] = tL),
            (eA[137] = tN),
            (eA[138] = t_),
            (eA[139] = eJ),
            (eA[140] = tr),
            (eA[141] = eY),
            (eA[142] = e1),
            (eA[143] = e3),
            (eA[144] = eG.api),
            (eA[145] = eG.chatgpt),
            (eA[146] = tc),
            (eA[147] = eE),
            (eA[148] = tb),
            (eA[149] = tx),
            (eA[150] = tl),
            (eA[151] = eU),
            (eA[152] = ew))
          : (ew = eA[152]),
        eA[153] !== e3 || eA[154] !== ew
          ? ((eC = (0, r.jsx)(z.cI, { fullBleed: !0, hideHeader: e3, children: ew })),
            (eA[153] = e3),
            (eA[154] = ew),
            (eA[155] = eC))
          : (eC = eA[155]),
        eC
      )
    }
    function te(e) {
      return e?.errorMessage == null ? e : { ...e, errorMessage: null }
    }
    function tt(e) {
      return null == e ? null : { ...e, errorMessage: null, isSubmitting: !0 }
    }
    function tn(e) {
      return null == e ? null : { ...e, errorMessage: null, isDetecting: !0 }
    }
    function tr() {
      let e = (0, o.c)(6),
        [t] = (0, i.ok)()
      {
        let n, o
        e[1] !== t ? ((n = t.get("workspaceRecovery")), (e[1] = t), (e[2] = n)) : (n = e[2])
        let i = "true" === n
        return (e[3] !== i ? ((o = (0, r.jsx)(e9, { workspaceRecovery: i })), (e[3] = i), (e[4] = o)) : (o = e[4]), o)
      }
    }
  },
  SzCH(e, t, n) {
    n.d(t, { tY: () => c, n6: () => u, zO: () => m, mU: () => d, cX: () => f, og: () => h, _T: () => g, $P: () => p })
    var r = n("iRMi")
    let o = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointLoginSucceeded" },
      i = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointStarted" },
      a = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointCompleted" }
    var l = n("yGJW")
    let s = { life_sciences: r.CodexOnboardingEntrypoint.CODEX_ONBOARDING_ENTRYPOINT_LIFE_SCIENCES }
    function c(e) {
      return null == e ? {} : { onboardingEntrypoint: s[e] }
    }
    function d(e, t) {
      ;(0, l.yy)(e, o, { onboardingEntrypoint: s[t] })
    }
    function u(e, t) {
      ;((0, l.yy)(e, r.CodexOnboardingEntered, { ...c(t) }),
        null != t && (0, l.yy)(e, i, { onboardingEntrypoint: s[t] }))
    }
    function g(e, t, n) {
      ;(0, l.yy)(e, r.CodexOnboardingStepViewed, { step: t, ...c(n) })
    }
    function f(e, t, n) {
      ;(0, l.yy)(e, r.CodexOnboardingStepContinueClicked, { step: t, ...c(n) })
    }
    function h(e, t, n) {
      ;(0, l.yy)(e, r.CodexOnboardingStepSkipped, { step: t, ...c(n) })
    }
    function p(e, t, n) {
      ;(0, l.yy)(e, r.CodexOnboardingWizardStep, { phase: t, action: n })
    }
    function m(e, t) {
      ;(0, l.yy)(e, a, { onboardingEntrypoint: s[t] })
    }
  },
  DIsA(e, t, n) {
    let r = (0, n("Nwp9").m3)("electron:onboarding-login-entrypoint", void 0)
    n.d(t, {}, { Z: r })
  },
  kr0v(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("zd8w")
    function a() {}
    n.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            n,
            l,
            s,
            c,
            d,
            u,
            g,
            f,
            h,
            p,
            m,
            b,
            y,
            x,
            w,
            k,
            v = (0, o.c)(39),
            { lines: j, columns: S, rows: C, scale: A, foregroundColor: _, backgroundColor: M, autoCover: N } = e,
            L = void 0 === A ? 0.75 : A,
            E = void 0 === _ ? "var(--color-border)" : _,
            I = void 0 === M ? "var(--color-surface-secondary)" : M,
            R = void 0 !== N && N,
            P = (0, i.useRef)(null),
            B = (0, i.useRef)(null),
            T = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            G = (0, i.useRef)(""),
            K = (0, i.useRef)(8),
            W = (0, i.useRef)(16),
            O = (0, i.useRef)(12),
            V = (0, i.useRef)("monospace"),
            D = (0, i.useRef)(j),
            U = (0, i.useRef)(a)
          v[0] !== R
            ? ((t = () => {
                if (!P.current) return null
                if (!T.current) {
                  let e = document.createElement("canvas")
                  ;((e.style.display = "block"),
                    (e.style.borderRadius = R ? "0px" : "10px"),
                    (e.style.imageRendering = "crisp-edges"))
                  let t = document.createElement("div")
                  ;((t.style.display = "none"), P.current.append(e, t), (T.current = e), (z.current = t))
                }
                return T.current.getContext("2d")
              }),
              (v[0] = R),
              (v[1] = t))
            : (t = v[1])
          let F = t
          v[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e) => {
                let t = O.current,
                  n = V.current
                e.font = `${t}px ${n}`
                let r = e.measureText("M"),
                  o = Math.max(1, Math.round(r.width)),
                  i = Math.max(
                    1,
                    Math.round((r.actualBoundingBoxAscent || t) + (r.actualBoundingBoxDescent || Math.ceil(0.3 * t))),
                  )
                ;((K.current = o), (W.current = i))
              }),
              (v[2] = n))
            : (n = v[2])
          let q = n
          v[3] !== S || v[4] !== C
            ? ((l = (e, t) => {
                let n = T.current,
                  r = P.current
                if (!n) return 1
                let o = Number.isFinite(t) && t > 0 ? t : 1,
                  i = Math.max(1, Math.floor(window.devicePixelRatio || 1)),
                  a = Math.max(1, S * K.current),
                  l = Math.max(1, C * W.current),
                  s = a * o,
                  c = l * o,
                  d = Math.max(1, Math.round(s * i)),
                  u = Math.max(1, Math.round(c * i))
                return (
                  (n.width !== d || n.height !== u) && ((n.width = d), (n.height = u)),
                  (n.style.width = `${s}px`),
                  (n.style.height = `${c}px`),
                  r && ((r.style.width = `${s}px`), (r.style.height = `${c}px`)),
                  e.setTransform(i * o, 0, 0, i * o, 0, 0),
                  (e.imageSmoothingEnabled = !1),
                  o
                )
              }),
              (v[3] = S),
              (v[4] = C),
              (v[5] = l))
            : (l = v[5])
          let $ = l
          v[6] !== R || v[7] !== I || v[8] !== S || v[9] !== F || v[10] !== E || v[11] !== $ || v[12] !== C
            ? ((s = () => {
                let e = F()
                if (!e || !T.current) return
                T.current.style.borderRadius = R ? "0px" : "10px"
                try {
                  e.setTransform(1, 0, 0, 1, 0, 0)
                } catch {}
                q(e)
                let t = 1
                if (R && B.current)
                  try {
                    let e = B.current.parentElement,
                      n = e?.getBoundingClientRect(),
                      r = Math.max(1, S * K.current),
                      o = Math.max(1, C * W.current)
                    if (n && r > 0 && o > 0) {
                      let e = n.width / r,
                        i = n.height / o
                      ;((t = Math.max(e, i)), !Number.isFinite(t) || t <= 0 ? (t = 1) : (t *= 1.02))
                    }
                  } catch {
                    t = 1
                  }
                let n = Math.max($(e, t) || 1, 0.001),
                  r = Math.max(1, Math.floor(window.devicePixelRatio || 1)),
                  o = T.current.width / (r * n),
                  i = T.current.height / (r * n)
                e.save()
                let a = P.current,
                  l = (e, t) => {
                    if (e && "" !== e) {
                      if (e.trim().startsWith("var(")) {
                        let n = ((e) => {
                          try {
                            let n = z.current
                            if (null == n) return ""
                            return ((n.style[t] = e), getComputedStyle(n)[t] || "")
                          } catch {
                            return ""
                          }
                        })(e)
                        if (n) return n
                      }
                      return e
                    }
                    if (!a) return ""
                    let n = getComputedStyle(a),
                      r = "color" === t ? n.color : n.backgroundColor
                    if (("rgba(0, 0, 0, 0)" === r || "transparent" === r) && a.parentElement) {
                      let e = getComputedStyle(a.parentElement)
                      r = "color" === t ? e.color : e.backgroundColor
                    }
                    return r
                  },
                  s = l(I, "backgroundColor"),
                  c = l(E, "color")
                ;(s && ((e.fillStyle = s), e.fillRect(0, 0, o, i)),
                  c && (e.fillStyle = c),
                  (e.textBaseline = "top"),
                  (e.font = `${O.current}px ${V.current}`))
                let d = W.current,
                  u = Math.min(C, D.current.length)
                for (let t = 0; t < u; t++) {
                  let n = D.current[t] ?? ""
                  n && e.fillText(n, 0, t * d)
                }
                if ((e.restore(), R && B.current && P.current))
                  try {
                    if (!B.current.parentElement) return
                    let e = B.current
                    ;((e.style.position = "absolute"),
                      (e.style.left = "50%"),
                      (e.style.top = "50%"),
                      (e.style.transform = "translate(-50%, -50%)"),
                      (e.style.transformOrigin = "center"),
                      (e.style.display = "block"),
                      (e.style.width = P.current.style.width),
                      (e.style.height = P.current.style.height))
                  } catch {}
              }),
              (v[6] = R),
              (v[7] = I),
              (v[8] = S),
              (v[9] = F),
              (v[10] = E),
              (v[11] = $),
              (v[12] = C),
              (v[13] = s))
            : (s = v[13])
          let H = s
          ;(v[14] !== H
            ? ((d = () => {
                U.current = H
              }),
              (c = [H]),
              (v[14] = H),
              (v[15] = c),
              (v[16] = d))
            : ((c = v[15]), (d = v[16])),
            (0, i.useEffect)(d, c),
            v[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = () => {
                  let e = !1,
                    t = P.current
                  return (
                    (async () => {
                      if (t) {
                        try {
                          if ((document, document?.fonts?.ready?.then))
                            try {
                              await document.fonts.ready
                            } catch {}
                        } catch {}
                        e || U.current()
                      }
                    })(),
                    () => {
                      if (((e = !0), T.current))
                        try {
                          T.current.remove()
                        } catch {}
                      if (((T.current = null), (z.current = null), t))
                        try {
                          for (; t.firstChild;) t.removeChild(t.firstChild)
                        } catch {}
                    }
                  )
                }),
                (g = []),
                (v[17] = u),
                (v[18] = g))
              : ((u = v[17]), (g = v[18])),
            (0, i.useEffect)(u, g),
            v[19] !== j
              ? ((f = () => {
                  D.current = j
                  let e = j.join("\n")
                  e !== G.current &&
                    ((G.current = e),
                    requestAnimationFrame(() => {
                      requestAnimationFrame(() => U.current())
                    }))
                }),
                (h = [j]),
                (v[19] = j),
                (v[20] = f),
                (v[21] = h))
              : ((f = v[20]), (h = v[21])),
            (0, i.useEffect)(f, h),
            v[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = () => {
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => U.current())
                  })
                }),
                (v[22] = p))
              : (p = v[22]),
            v[23] !== I || v[24] !== S || v[25] !== E || v[26] !== C
              ? ((m = [S, C, E, I]), (v[23] = I), (v[24] = S), (v[25] = E), (v[26] = C), (v[27] = m))
              : (m = v[27]),
            (0, i.useEffect)(p, m),
            v[28] !== R
              ? ((b = () => {
                  if (!R) return
                  let e = () => {
                    requestAnimationFrame(() => U.current())
                  }
                  return (
                    window.addEventListener("resize", e),
                    () => {
                      window.removeEventListener("resize", e)
                    }
                  )
                }),
                (y = [R]),
                (v[28] = R),
                (v[29] = b),
                (v[30] = y))
              : ((b = v[29]), (y = v[30])),
            (0, i.useEffect)(b, y),
            v[31] !== R || v[32] !== L
              ? ((x = R
                  ? {
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      display: "block",
                    }
                  : { transform: `scale(${L})`, transformOrigin: "center", display: "inline-block" }),
                (v[31] = R),
                (v[32] = L),
                (v[33] = x))
              : (x = v[33]))
          let Z = 10 * !R
          return (
            v[34] !== Z
              ? ((w = (0, r.jsx)("div", {
                  ref: P,
                  style: { display: "inline-block", lineHeight: 1, borderRadius: Z },
                })),
                (v[34] = Z),
                (v[35] = w))
              : (w = v[35]),
            v[36] !== x || v[37] !== w
              ? ((k = (0, r.jsx)("div", { ref: B, style: x, children: w })), (v[36] = x), (v[37] = w), (v[38] = k))
              : (k = v[38]),
            k
          )
        },
      },
    )
  },
  gLgE(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("on57"),
      a = n("oyxz"),
      l = n("HZfM"),
      s = n("ZtSy"),
      c = n("hERv")
    n.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            n,
            d,
            u,
            g,
            f,
            h,
            p,
            m,
            b,
            y,
            x,
            w = (0, o.c)(36),
            {
              title: k,
              description: v,
              children: j,
              presentation: S,
              contentAlignment: C,
              showFooter: A,
              showHomeLink: _,
              onHomeClick: M,
            } = e,
            N = void 0 === S ? "page" : S,
            L = void 0 === A || A,
            E = void 0 !== _ && _
          w[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)("span", {
                className: "text-heading-lg font-semibold tracking-tight",
                children: (0, r.jsx)(a.A, {
                  id: "browser.auth.brand",
                  defaultMessage: "ChatGPT",
                  description:
                    "ChatGPT brand name in the top-left header of the browser login and logout pages; do not translate the product name",
                }),
              })),
              (w[0] = t))
            : (t = w[0])
          let I = t
          w[1] !== M || w[2] !== N || w[3] !== E
            ? ((n =
                "page" !== N
                  ? null
                  : (0, r.jsx)("header", {
                      className: "shrink-0 px-6 py-4 sm:px-8",
                      children: E ? (0, r.jsx)(l.N_, { to: "/", reloadDocument: !0, onClick: M, children: I }) : I,
                    })),
              (w[1] = M),
              (w[2] = N),
              (w[3] = E),
              (w[4] = n))
            : (n = w[4])
          let R = "start" === (void 0 === C ? "center" : C) ? "justify-start pt-12 sm:pt-16" : "justify-center pt-4"
          w[5] !== R
            ? ((d = (0, i.A)("flex w-full shrink-0 grow flex-col items-center px-6 pb-4", R)), (w[5] = R), (w[6] = d))
            : (d = w[6])
          let P = "focused" === N ? "max-w-80 gap-8" : "max-w-sm gap-5"
          w[7] !== P ? ((u = (0, i.A)("flex w-full flex-col", P)), (w[7] = P), (w[8] = u)) : (u = w[8])
          let B = "dialog" === N ? "sr-only" : "flex flex-col gap-4 text-center",
            T = "dialog" === N && "sr-only",
            z = "focused" === N && "text-2xl font-semibold",
            G = "page" === N && "text-3xl font-normal"
          return (
            w[9] !== T || w[10] !== z || w[11] !== G
              ? ((g = (0, i.A)(T, z, G)), (w[9] = T), (w[10] = z), (w[11] = G), (w[12] = g))
              : (g = w[12]),
            w[13] !== g || w[14] !== k
              ? ((f = (0, r.jsx)("h1", { className: g, children: k })), (w[13] = g), (w[14] = k), (w[15] = f))
              : (f = w[15]),
            w[16] !== v
              ? ((h = null != v ? (0, r.jsx)("p", { className: "text-sm text-secondary", children: v }) : null),
                (w[16] = v),
                (w[17] = h))
              : (h = w[17]),
            w[18] !== B || w[19] !== f || w[20] !== h
              ? ((p = (0, r.jsxs)("div", { className: B, children: [f, h] })),
                (w[18] = B),
                (w[19] = f),
                (w[20] = h),
                (w[21] = p))
              : (p = w[21]),
            w[22] !== j || w[23] !== u || w[24] !== p
              ? ((m = (0, r.jsxs)("div", { className: u, children: [p, j] })),
                (w[22] = j),
                (w[23] = u),
                (w[24] = p),
                (w[25] = m))
              : (m = w[25]),
            w[26] !== m || w[27] !== d
              ? ((b = (0, r.jsx)("main", { className: d, children: m })), (w[26] = m), (w[27] = d), (w[28] = b))
              : (b = w[28]),
            w[29] !== N || w[30] !== L
              ? ((y =
                  L && "focused" !== N
                    ? (0, r.jsxs)("footer", {
                        className: "flex shrink-0 flex-col items-center gap-3 px-6 pt-10 pb-8",
                        children: [
                          (0, r.jsx)(c.A, { "aria-hidden": "true", className: "size-6 shrink-0" }),
                          (0, r.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-center gap-3 text-xs text-secondary",
                            children: [
                              (0, r.jsx)(s.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/terms-of-use/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === N ? "external-browser" : void 0,
                                children: (0, r.jsx)(a.A, {
                                  id: "browser.auth.termsOfUse",
                                  defaultMessage: "Terms of use",
                                  description:
                                    "Footer link to OpenAI's terms of use on the browser login and logout pages",
                                }),
                              }),
                              (0, r.jsx)("div", { "aria-hidden": "true", className: "h-3 w-px bg-border" }),
                              (0, r.jsx)(s.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/privacy-policy/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === N ? "external-browser" : void 0,
                                children: (0, r.jsx)(a.A, {
                                  id: "browser.auth.privacyPolicy",
                                  defaultMessage: "Privacy policy",
                                  description:
                                    "Footer link to OpenAI's privacy policy on the browser login and logout pages",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : null),
                (w[29] = N),
                (w[30] = L),
                (w[31] = y))
              : (y = w[31]),
            w[32] !== b || w[33] !== y || w[34] !== n
              ? ((x = (0, r.jsxs)("div", {
                  className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
                  children: [n, b, y],
                })),
                (w[32] = b),
                (w[33] = y),
                (w[34] = n),
                (w[35] = x))
              : (x = w[35]),
            x
          )
        },
      },
    )
  },
  iKF7(e, t, n) {
    var r = n("QosV"),
      o = n("CWQi"),
      i = n("zd8w")
    function a(e) {
      return !e.trim()
    }
    function l(e) {
      return e.slice()
    }
    function s() {
      return (0, o.UT)(Date.now())
    }
    n.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            o,
            c,
            d,
            u,
            g,
            f,
            h,
            p,
            m,
            b,
            y,
            x,
            w,
            k,
            v,
            j,
            S,
            C,
            A,
            _,
            M,
            N,
            L,
            E,
            I,
            R = (0, r.c)(65),
            [P, B] = (0, i.useState)(e?.initialMode ?? "noise"),
            [T, z] = (0, i.useState)("@%#*+=-:. "),
            [G, K] = (0, i.useState)(0),
            [W, O] = (0, i.useState)(e?.initialColumns ?? 50),
            [V, D] = (0, i.useState)(e?.initialRows ?? 30),
            [U] = (0, i.useState)(20)
          R[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (R[0] = t)) : (t = R[0])
          let [F, q] = (0, i.useState)(t),
            [$, H] = (0, i.useState)(!1)
          R[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = [
                "█▓▒░ ",
                "■□▲△●○◆◇",
                "⎺⎻⎼⎽⎾⎿",
                "o p e n a i ",
                "█▉▊▋▌▍▎▏",
                "█▓▒░-=:. ",
                "█▇▆▅▄▃▂▁",
                "C O D E X",
                "█■▲●◉○. ",
                "WMBRXVIl. ",
                "█#A*-. ",
                "●◉○· ",
              ]),
              (R[1] = o))
            : (o = R[1])
          let Z = o,
            Q = (0, i.useRef)(null),
            Y = (0, i.useRef)(null),
            X = (0, i.useRef)(null)
          R[2] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (R[2] = c)) : (c = R[2])
          let [J, ee] = (0, i.useState)(c),
            et = (0, i.useRef)(0),
            en = (0, i.useRef)(e?.preferredVideoKeyword),
            [er] = (0, i.useState)(s),
            eo = (0, i.useRef)(0),
            ei = (0, i.useRef)(null),
            ea = (0, i.useRef)(0),
            el = (0, i.useRef)(""),
            es = (0, i.useRef)(null)
          R[3] !== er
            ? ((d = (e, t, n) => {
                let r = []
                for (let o = 0; o < t; o++) {
                  let t = []
                  for (let r = 0; r < e; r++) {
                    let e = ((er(0.15 * r, 0.15 * o, n) + 1) / 2) * 255
                    t.push(Math.round(e))
                  }
                  r.push(t)
                }
                return r
              }),
              (R[3] = er),
              (R[4] = d))
            : (d = R[4])
          let ec = d
          R[5] !== W || R[6] !== V
            ? ((u = () => {
                let e,
                  t,
                  n,
                  r,
                  o = Q.current,
                  i = Y.current,
                  a = X.current
                if (!o || !i || !a) return
                let l = o.videoWidth,
                  s = o.videoHeight
                if (!Number.isFinite(l) || !Number.isFinite(s) || l < 2 || s < 2) return
                let c = W / Math.max(1, 2 * V)
                l / s > c
                  ? ((r = s), (e = Math.max(0, (l - (n = Math.max(1, s * c))) / 2)), (t = 0))
                  : ((n = l), (e = 0), (t = Math.max(0, (s - (r = Math.max(1, l / c))) / 2)))
                try {
                  a.drawImage(o, e, t, n, r, 0, 0, W, V)
                } catch {}
              }),
              (R[5] = W),
              (R[6] = V),
              (R[7] = u))
            : (u = R[7])
          let ed = u
          R[8] !== W || R[9] !== V
            ? ((g = () => {
                let e = Y.current,
                  t = X.current
                if (!e || !t) return []
                let n = t.getImageData(0, 0, W, V).data,
                  r = []
                for (let e = 0; e < V; e++) {
                  let t = []
                  for (let r = 0; r < W; r++) {
                    let o = (e * W + r) * 4,
                      i = 0.299 * n[o] + 0.587 * n[o + 1] + 0.114 * n[o + 2]
                    t.push(Math.round(i))
                  }
                  r.push(t)
                }
                return r
              }),
              (R[8] = W),
              (R[9] = V),
              (R[10] = g))
            : (g = R[10])
          let eu = g
          R[11] !== T || R[12] !== W || R[13] !== V
            ? ((f = (e, t) => {
                if (!e.length) return []
                let n = (function (e, t) {
                    let n = e.length,
                      r = n > 0 ? e[0].length : 0,
                      o = e.map(l)
                    for (let e = 0; e < n; e++)
                      for (let i = 0; i < r; i++) {
                        let a = o[e][i],
                          l = Math.round((a / 255) * (t - 1)),
                          s = (255 / (t - 1)) * l
                        o[e][i] = s
                        let c = a - s
                        ;(i + 1 < r && (o[e][i + 1] = o[e][i + 1] + (7 * c) / 16),
                          e + 1 < n && i > 0 && (o[e + 1][i - 1] = o[e + 1][i - 1] + (3 * c) / 16),
                          e + 1 < n && (o[e + 1][i] = o[e + 1][i] + (5 * c) / 16),
                          e + 1 < n && i + 1 < r && (o[e + 1][i + 1] = o[e + 1][i + 1] + c / 16))
                      }
                    for (let e = 0; e < n; e++)
                      for (let t = 0; t < r; t++) o[e][t] = Math.max(0, Math.min(255, o[e][t]))
                    return o
                  })(e, T.length),
                  r = []
                for (let e = 0; e < V; e++) {
                  let o = ""
                  for (let r = 0; r < W; r++) {
                    let i = t
                      ? Math.round((n[e][r] / 255) * (T.length - 1))
                      : Math.round((1 - n[e][r] / 255) * (T.length - 1))
                    ;(Number.isNaN(i) && (i = 0), (i = Math.max(0, Math.min(T.length - 1, i))), (o += T[i]))
                  }
                  r.push(o)
                }
                return r
              }),
              (R[11] = T),
              (R[12] = W),
              (R[13] = V),
              (R[14] = f))
            : (f = R[14])
          let eg = f
          R[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = () => {
                let e = Q.current
                if (!e) return !1
                let t =
                    Number.isFinite(e.videoWidth) &&
                    Number.isFinite(e.videoHeight) &&
                    e.videoWidth > 1 &&
                    e.videoHeight > 1,
                  n = (e.readyState ?? 0) >= 2
                return t && n && !e.paused
              }),
              (R[15] = h))
            : (h = R[15])
          let ef = h
          R[16] !== W || R[17] !== ed || R[18] !== ec || R[19] !== eu || R[20] !== P || R[21] !== eg || R[22] !== V
            ? ((p = () => {
                let e
                if (
                  (Y.current ||
                    ((Y.current = document.createElement("canvas")),
                    (Y.current.style.display = "none"),
                    document.body.appendChild(Y.current)),
                  null == X.current && (X.current = Y.current.getContext("2d", { willReadFrequently: !0 })),
                  Y.current && ((Y.current.width = W), (Y.current.height = V)),
                  "video" === P && ef())
                )
                  (ed(), (e = eg(eu(), !0)))
                else if (((e = eg(ec(W, V, eo.current), !1)), "composite" === P && ef())) {
                  ed()
                  let t = eu(),
                    n = eg(t, !0),
                    r = []
                  for (let o = 0; o < V; o++) {
                    let i = ""
                    for (let r = 0; r < W; r++) i += (t[o]?.[r] ?? 0) > 110 ? n[o][r] : e[o][r]
                    r.push(i)
                  }
                  e = r
                }
                return (
                  (!e.length || e.every(a)) && (e = Array.from({ length: V }, () => "@".repeat(W))),
                  (eo.current = eo.current + 0.03),
                  e
                )
              }),
              (R[16] = W),
              (R[17] = ed),
              (R[18] = ec),
              (R[19] = eu),
              (R[20] = P),
              (R[21] = eg),
              (R[22] = V),
              (R[23] = p))
            : (p = R[23])
          let eh = p
          R[24] !== J
            ? ((m = () => {
                if (!J.length) return ""
                let e = et.current % J.length
                return ((et.current = (et.current + 1) % Math.max(1, J.length)), J[e])
              }),
              (R[24] = J),
              (R[25] = m))
            : (m = R[25])
          let ep = m
          R[26] !== ep || R[27] !== J
            ? ((b = async (e) => {
                let t = Q.current
                if (
                  (null == t &&
                    (((t = document.createElement("video")).style.display = "none"),
                    (t.loop = !0),
                    (t.muted = !0),
                    t.setAttribute("playsinline", ""),
                    document.body.appendChild(t),
                    (Q.current = t)),
                  (t.muted = !0),
                  t.setAttribute("playsinline", ""),
                  (void 0 !== e && e) || !t.src)
                ) {
                  let e =
                    (() => {
                      if (!en.current) return ""
                      let e = en.current.toLowerCase()
                      return J.find((t) => t.toLowerCase().includes(e)) ?? ""
                    })() || ep()
                  if (e) {
                    try {
                      let n = await fetch(e),
                        r = await n.blob(),
                        o = URL.createObjectURL(r)
                      if (es.current)
                        try {
                          URL.revokeObjectURL(es.current)
                        } catch {}
                      ;((es.current = o), (t.src = o))
                    } catch {}
                    t.loop = !0
                  }
                }
                try {
                  ;((t.readyState ?? 0) < 2 &&
                    (await new Promise((e) => {
                      let n = () => {
                        ;(t.removeEventListener("loadeddata", n), e())
                      }
                      t.addEventListener("loadeddata", n, { once: !0 })
                    })),
                    t.paused && (await t.play()))
                } catch {}
                ;(Y.current ||
                  ((Y.current = document.createElement("canvas")),
                  (Y.current.style.display = "none"),
                  document.body.appendChild(Y.current)),
                  !X.current && Y.current && (X.current = Y.current.getContext("2d", { willReadFrequently: !0 })))
              }),
              (R[26] = ep),
              (R[27] = J),
              (R[28] = b))
            : (b = R[28])
          let em = b
          R[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = () => {
                if (!Q.current) {
                  let e = document.createElement("video")
                  ;((e.style.display = "none"),
                    (e.loop = !0),
                    (e.muted = !0),
                    e.setAttribute("playsinline", ""),
                    document.body.appendChild(e),
                    (Q.current = e))
                }
                ;(Y.current ||
                  ((Y.current = document.createElement("canvas")),
                  (Y.current.style.display = "none"),
                  document.body.appendChild(Y.current)),
                  !X.current && Y.current && (X.current = Y.current.getContext("2d", { willReadFrequently: !0 })))
              }),
              (R[29] = y))
            : (y = R[29])
          let eb = y
          R[30] !== J
            ? ((x = async () => {
                eb()
                let e = Q.current
                if (!e || !J.length) return
                let t = e.src || "",
                  n = J.findIndex((e) => t.endsWith(e) || t === e || t.includes(e))
                n < 0 && (n = et.current % Math.max(1, J.length))
                let r = (n + 1) % J.length
                et.current = r
                let o = J[r]
                if (o)
                  try {
                    let t = await fetch(o),
                      n = await t.blob(),
                      r = URL.createObjectURL(n)
                    if (es.current)
                      try {
                        URL.revokeObjectURL(es.current)
                      } catch {}
                    ;((es.current = r), (e.src = r))
                  } catch {}
                ;((e.loop = !0), (e.muted = !0))
                try {
                  await e.play()
                } catch {}
              }),
              (R[30] = J),
              (R[31] = x))
            : (x = R[31])
          let ey = x
          ;(R[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = () => {
                try {
                  let e = n("nBD9"),
                    t = Object.values(e)
                  ee(t)
                } catch {}
              }),
              (k = []),
              (R[32] = w),
              (R[33] = k))
            : ((w = R[32]), (k = R[33])),
            (0, i.useEffect)(w, k),
            R[34] !== G || R[35] !== ey || R[36] !== em || R[37] !== P
              ? ((v = () => {
                  let e = (e) => {
                    if (e.metaKey && ("/" === e.key || "?" === e.key || "Slash" === e.code)) {
                      if ((e.preventDefault(), e.repeat)) return
                      let t = "video" === P ? "noise" : "video"
                      ;(B(t), "video" === t && (em(!0), (ea.current = 0)))
                      return
                    }
                    if (e.metaKey && "." === e.key) {
                      if ((e.preventDefault(), e.repeat)) return
                      let t = (G + 1) % Z.length
                      ;(K(t), z(Z[t]))
                      return
                    }
                    if (
                      (e.metaKey && "m" === e.key.toLowerCase()) ||
                      (e.metaKey && e.shiftKey && "m" === e.key.toLowerCase()) ||
                      (e.altKey && "m" === e.key.toLowerCase())
                    ) {
                      if ((e.preventDefault(), e.repeat)) return
                      "video" !== P ? (B("video"), em(!0)) : ey()
                      return
                    }
                  }
                  return (
                    window.addEventListener("keydown", e),
                    () => {
                      window.removeEventListener("keydown", e)
                    }
                  )
                }),
                (j = [G, Z, ey, em, P, B]),
                (R[34] = G),
                (R[35] = ey),
                (R[36] = em),
                (R[37] = P),
                (R[38] = v),
                (R[39] = j))
              : ((v = R[38]), (j = R[39])),
            (0, i.useEffect)(v, j),
            R[40] !== U || R[41] !== eh
              ? ((S = () => {
                  let e = 1e3 / U,
                    t = (n) => {
                      try {
                        if (!document.hidden && n - ea.current >= e - 1) {
                          let e = eh(),
                            t = e.join("\n")
                          ;(t !== el.current && ((el.current = t), q(e)), (ea.current = n))
                        }
                      } catch {}
                      ei.current = window.requestAnimationFrame(t)
                    }
                  ei.current = window.requestAnimationFrame(t)
                  let n = () => {
                    document.hidden || (ea.current = 0)
                  }
                  return (
                    document.addEventListener("visibilitychange", n),
                    () => {
                      ;(null != ei.current && (window.cancelAnimationFrame(ei.current), (ei.current = null)),
                        document.removeEventListener("visibilitychange", n))
                    }
                  )
                }),
                (C = [eh, U]),
                (R[40] = U),
                (R[41] = eh),
                (R[42] = S),
                (R[43] = C))
              : ((S = R[42]), (C = R[43])),
            (0, i.useEffect)(S, C),
            R[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = () => () => {
                  try {
                    let e = Q.current
                    if (e) {
                      try {
                        e.paused || e.pause()
                      } catch {}
                      e.srcObject = null
                      try {
                        e.remove()
                      } catch {}
                    }
                  } catch {}
                  if (Y.current)
                    try {
                      Y.current.remove()
                    } catch {}
                  if (es.current) {
                    try {
                      URL.revokeObjectURL(es.current)
                    } catch {}
                    es.current = null
                  }
                  ;((Q.current = null), (Y.current = null), (X.current = null))
                }),
                (_ = []),
                (R[44] = A),
                (R[45] = _))
              : ((A = R[44]), (_ = R[45])),
            (0, i.useEffect)(A, _))
          let ex = (0, i.useRef)("noise")
          return (
            R[46] !== em || R[47] !== P
              ? ((M = () => {
                  let e = ex.current
                  ;(("video" === P || "composite" === P) && em(e !== P), (ex.current = P))
                }),
                (N = [P, em]),
                (R[46] = em),
                (R[47] = P),
                (R[48] = M),
                (R[49] = N))
              : ((M = R[48]), (N = R[49])),
            (0, i.useEffect)(M, N),
            R[50] !== em || R[51] !== P || R[52] !== J.length
              ? ((L = () => {
                  ;("video" === P || "composite" === P) && J.length && em(!0)
                }),
                (R[50] = em),
                (R[51] = P),
                (R[52] = J.length),
                (R[53] = L))
              : (L = R[53]),
            R[54] !== em || R[55] !== P || R[56] !== J
              ? ((E = [J, P, em]), (R[54] = em), (R[55] = P), (R[56] = J), (R[57] = E))
              : (E = R[57]),
            (0, i.useEffect)(L, E),
            R[58] !== T || R[59] !== W || R[60] !== F || R[61] !== P || R[62] !== V || R[63] !== $
              ? ((I = {
                  mode: P,
                  setMode: B,
                  asciiChars: T,
                  setAsciiChars: z,
                  columns: W,
                  setColumns: O,
                  rows: V,
                  setRows: D,
                  lines: F,
                  showControls: $,
                  setShowControls: H,
                }),
                (R[58] = T),
                (R[59] = W),
                (R[60] = F),
                (R[61] = P),
                (R[62] = V),
                (R[63] = $),
                (R[64] = I))
              : (I = R[64]),
            I
          )
        },
      },
    )
  },
  YgCO(e, t, n) {
    var r = n("zkY4")
    n.d(
      t,
      {},
      {
        B: function (e, t) {
          return !t?.length || t.some((t) => e.toLowerCase().endsWith(`.${t}`))
        },
        U: function (e) {
          if (e?.includes("*/*")) return
          let t = e?.flatMap((e) => {
            let t = e.toLowerCase()
            return t.startsWith(".")
              ? [t.slice(1)]
              : t.endsWith("/*")
                ? Object.entries(r.extensions).flatMap(([e, n]) => (e.startsWith(t.slice(0, -1)) ? n : []))
                : (r.extensions[t] ?? [])
          })
          return t?.length ? t : void 0
        },
      },
    )
  },
}
//# sourceMappingURL=786762.2f6454ce81.js.map
