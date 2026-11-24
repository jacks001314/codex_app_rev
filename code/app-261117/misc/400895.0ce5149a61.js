export const __rspack_esm_ids = [400895]
export const __webpack_modules__ = {
  W2xS(e, t, n) {
    n.d(
      t,
      {},
      {
        B: function (e) {
          if (!e.startsWith("---\n")) return e
          let t = e.indexOf("\n---", 4)
          if (-1 === t) return e
          let n = e.slice(t + 4)
          return n.startsWith("\n") ? n.slice(1) : n
        },
        v: function (e) {
          return e.find((e) => "SKILL.md" === e) ?? [...e].sort().find((e) => e.endsWith("/SKILL.md"))
        },
      },
    )
  },
  U98R(e, t, n) {
    n.d(t, { Y: () => r })
    var a = n("ABep"),
      i = n("on57"),
      s = n("EYJV")
    function r(e) {
      let {
          children: t,
          primary: n = !1,
          underline: r = !n,
          className: l,
          target: o,
          forceExternal: c,
          as: u,
          href: d,
          to: p,
          ...m
        } = e,
        f = c ?? /^https?:\/\//.test(d ?? p ?? ""),
        g = (0, s.d5)(),
        h = {
          ...m,
          className: (0, i.A)("TextLink-ejwsF5", l),
          "data-primary": n ? "" : void 0,
          "data-underline": !1 === r ? void 0 : "hover" === r ? "hover" : "always",
        }
      if (!d && !p) return (0, a.jsx)("span", { ...h, role: "button", children: t })
      let _ = { ...(f ? { target: "_blank", rel: "noopener noreferrer", href: d ?? p } : { href: d, to: p }), ...h }
      return (0, a.jsx)(u || (f ? "a" : g), { ..._, children: t })
    }
  },
  iFq6(e, t, n) {
    var a = n("qmMi"),
      i = n("OWtl"),
      s = n("nvO1")
    let r = (0, a.i1)(i.u, (e, { get: t }) => t(s.rN, e)),
      l = (0, a.i1)(i.u, (e, { get: t }) => {
        if (t(r, e)) {
          let { data: n, isError: a, isLoading: i } = t(s.IB, e)
          return { data: n?.filter((t) => t.workspace_id === e), isError: a, isLoading: i }
        }
        return null
      })
    n.d(t, {}, { l: l, w: r })
  },
  G8rn(e, t, n) {
    n.d(t, { AppgenShareDialog: () => eF, AppgenShareDialogBody: () => eU })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("iRMi"),
      r = n("hwkA"),
      l = n("slpy"),
      o = n("jfMv"),
      c = n("T0Rc"),
      u = n("irkb"),
      d = n("xSOA"),
      p = n("cE8H"),
      m = n("D7Ms"),
      f = n("qmMi"),
      g = n("zd8w"),
      h = n("Wf1j"),
      _ = n("oyxz"),
      x = n("Qgfj"),
      v = n("ASxG"),
      y = n("iFq6"),
      b = n("Ietk"),
      w = n("UOa8"),
      j = n("SgPg"),
      C = n("Kwur"),
      S = n("OAko"),
      A = n("MM0V"),
      E = n("mUDD"),
      D = n("Ot7V"),
      M = n("aQvR"),
      I = n("HOLv"),
      k = n("bVeK"),
      L = n("SGsN"),
      P = n("btiy"),
      O = n("Adh7"),
      N = n("yGJW"),
      T = n("ji1g"),
      R = n("IPsH"),
      q = n("AOG7"),
      K = n("GaA7"),
      z = n("OWtl"),
      F = n("S2r0"),
      U = n("Fsq8"),
      W = n("rvFo")
    function Q(e, t, n) {
      return (0, F.j)({
        queryKey: ["profile", "pins", t, e],
        queryFn:
          n && null != e && null != t
            ? ({ signal: t }) =>
                C.Request.safeGet("/profiles/me/page/pins", {
                  signal: t,
                  additionalHeaders: { "ChatGPT-Account-ID": e },
                  expectedErrorStatuses: [403, 404],
                })
            : m.hT,
        staleTime: W.D.ONE_MINUTE,
        refetchOnMount: "always",
        retry: !1,
      })
    }
    var G = n("ISnp"),
      $ = n("dEsd"),
      V = n("Z1L7"),
      B = n("qCmE"),
      X = n("ENs9"),
      H = n("akkX"),
      Y = n("pLRu"),
      Z = n("YYxE"),
      J = n("Vzcd"),
      ee = n("aAsK"),
      et = n("ZXAL"),
      en = n("yz5L"),
      ea = n("wuZu"),
      ei = n("IZAr"),
      es = n("jnsB"),
      er = n("MFZ6"),
      el = n("hZax"),
      eo = n("aepO"),
      ec = n("kK7d"),
      eu = n("vw1R"),
      ed = n("aRbG"),
      ep = n("eShZ"),
      em = n("BF4Y"),
      ef = n("qTvt"),
      eg = n("NhqU"),
      eh = n("on57"),
      e_ = n("K4Cx"),
      ex = n("suct"),
      ev = n("F0xz")
    function ey(e) {
      let t,
        n = (0, i.c)(3),
        { children: a } = e,
        s = (0, g.useId)()
      return (n[0] !== a || n[1] !== s ? ((t = a(s)), (n[0] = a), (n[1] = s), (n[2] = t)) : (t = n[2]), t)
    }
    var eb = n("eZqd"),
      ew = n("T1PX"),
      ej = n("V8uZ")
    function eC(e) {
      let t,
        n,
        s,
        o,
        c,
        u,
        d,
        p,
        m,
        f = (0, i.c)(32),
        {
          remixEnabled: h,
          remixDisabled: x,
          remixUnavailable: v,
          remixSaveFailed: y,
          onRemixChange: b,
          profilePin: w,
          isWorkspaceAccount: j,
        } = e,
        [C, S] = (0, g.useState)(!1),
        A = (0, g.useId)(),
        D = (0, ew.I)()
      ;(f[0] !== C ? ((t = () => S(!C)), (f[0] = C), (f[1] = t)) : (t = f[1]),
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(_.A, { id: "appgenShareDialog.advanced.section.label", defaultMessage: "Advanced" })),
            (f[2] = n))
          : (n = f[2]))
      let M = !C && "-rotate-90"
      ;(f[3] !== M
        ? ((s = (0, eh.A)(
            "icon-sm motion-safe:transition-transform motion-safe:duration-relaxed motion-safe:ease-enter-snappy",
            M,
          )),
          (f[3] = M),
          (f[4] = s))
        : (s = f[4]),
        f[5] !== s ? ((o = (0, a.jsx)(I.I, { asset: ef.K, className: s })), (f[5] = s), (f[6] = o)) : (o = f[6]),
        f[7] !== A || f[8] !== C || f[9] !== t || f[10] !== o
          ? ((c = (0, a.jsxs)("button", {
              type: "button",
              className:
                "flex w-full cursor-interaction items-center gap-1 pt-3 pb-1 text-start text-sm font-medium focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              "aria-expanded": C,
              "aria-controls": A,
              onClick: t,
              children: [n, o],
            })),
            (f[7] = A),
            (f[8] = C),
            (f[9] = t),
            (f[10] = o),
            (f[11] = c))
          : (c = f[11]))
      let k = !C,
        L = !C
      return (
        f[12] !== A ||
        f[13] !== C ||
        f[14] !== j ||
        f[15] !== b ||
        f[16] !== w ||
        f[17] !== D ||
        f[18] !== x ||
        f[19] !== h ||
        f[20] !== y ||
        f[21] !== v
          ? ((u =
              C &&
              (0, a.jsx)(
                e_.P.div,
                {
                  id: A,
                  className: "overflow-hidden",
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: D ? { duration: 0 } : ej.X7,
                  children: (0, a.jsx)(eb.X, {
                    children: (e) =>
                      (0, a.jsx)(ey, {
                        children: (t) =>
                          (0, a.jsxs)("div", {
                            className: "pt-2",
                            children: [
                              w,
                              (0, a.jsxs)(E.OO, {
                                className: "pt-1",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center justify-between gap-3 py-1 text-sm",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className: "flex min-w-0 items-center gap-2",
                                        children: [
                                          (0, a.jsx)("span", {
                                            id: t,
                                            children: j
                                              ? (0, a.jsx)(_.A, {
                                                  id: "appgenShareDialog.remix.workspaceViewers.label",
                                                  defaultMessage: "Allow workspace viewers to remix",
                                                })
                                              : (0, a.jsx)(_.A, {
                                                  id: "appgenShareDialog.remix.label",
                                                  defaultMessage: "Allow viewers to remix",
                                                }),
                                          }),
                                          (0, a.jsx)(l.m, {
                                            content: (0, a.jsx)("span", {
                                              className: "block text-start",
                                              children: (0, a.jsx)(_.A, {
                                                id: "appgenShareDialog.remix.info",
                                                defaultMessage:
                                                  "Remixing lets viewers make their own version of this site. Only the code is copied; your site\u2019s data isn\u2019t included.",
                                              }),
                                            }),
                                            children: (0, a.jsx)(r.$, {
                                              type: "button",
                                              color: "secondary",
                                              variant: "ghost",
                                              uniform: !0,
                                              size: "sm",
                                              className: "shrink-0",
                                              "aria-label": e.formatMessage({
                                                id: "appgenShareDialog.remix.info.label",
                                                defaultMessage: "About remixing",
                                              }),
                                              children: (0, a.jsx)(I.I, { asset: eg.c, className: "icon-sm" }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)(l.m, {
                                        content: v
                                          ? (0, a.jsx)("span", {
                                              className: "block text-start",
                                              children: (0, a.jsx)(_.A, {
                                                id: "appgenShareDialog.remix.unavailable",
                                                defaultMessage:
                                                  "Remix settings are unavailable right now. Try again later.",
                                              }),
                                            })
                                          : void 0,
                                        children: (0, a.jsx)("span", {
                                          className: "inline-flex shrink-0",
                                          children: (0, a.jsx)(ev.l, {
                                            "aria-labelledby": t,
                                            checked: h,
                                            disabled: x,
                                            focusableWhenDisabled: v,
                                            onChange: b,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  y &&
                                    (0, a.jsx)("p", {
                                      role: "alert",
                                      className: "text-sm text-danger",
                                      children: (0, a.jsx)(_.A, {
                                        id: "appgenShareDialog.remix.saveFailed",
                                        defaultMessage: "Couldn\u2019t save your remix setting. Try again.",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                      }),
                  }),
                },
                A,
              )),
            (f[12] = A),
            (f[13] = C),
            (f[14] = j),
            (f[15] = b),
            (f[16] = w),
            (f[17] = D),
            (f[18] = x),
            (f[19] = h),
            (f[20] = y),
            (f[21] = v),
            (f[22] = u))
          : (u = f[22]),
        f[23] !== u ? ((d = (0, a.jsx)(ex.N, { initial: !1, children: u })), (f[23] = u), (f[24] = d)) : (d = f[24]),
        f[25] !== d || f[26] !== k || f[27] !== L
          ? ((p = (0, a.jsx)("div", { className: "contents", inert: k, "aria-hidden": L, children: d })),
            (f[25] = d),
            (f[26] = k),
            (f[27] = L),
            (f[28] = p))
          : (p = f[28]),
        f[29] !== p || f[30] !== c
          ? ((m = (0, a.jsx)(E.OO, {
              spacing: "large",
              className: "-mb-3",
              children: (0, a.jsxs)("div", { className: "border-t border-default pt-3", children: [c, p] }),
            })),
            (f[29] = p),
            (f[30] = c),
            (f[31] = m))
          : (m = f[31]),
        m
      )
    }
    var eS = n("U98R")
    let eA = (0, n("ESTr").a)({
      name: "pin-window-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.141357, y: 1.417969, width: 14.107422, height: 12.440674 },
        visualBounds: { x: 1.141357, y: 1.417969, width: 14.107422, height: 12.440674 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.141357, y: 1.417969, width: 14.107422, height: 12.440674 },
        center: { x: 8.195068, y: 7.638306 },
        insets: { top: 1.417969, right: 0.751221, bottom: 2.141357, left: 1.141357 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.195068, y: 7.638306 }, foreground: { x: 8.195068, y: 7.638306 } },
      },
      capabilities: ["icon"],
      body: '<path d="M5.99976 2.14179C6.28971 2.14179 6.52515 2.37723 6.52515 2.66718C6.52515 2.95713 6.28971 3.19257 5.99976 3.19257H5.40015C4.73809 3.19257 4.27266 3.19223 3.90991 3.22187C3.55382 3.25099 3.34255 3.30585 3.17944 3.38886C2.83918 3.56223 2.5618 3.83962 2.38843 4.17987C2.30541 4.34298 2.25055 4.55425 2.22144 4.91034C2.1918 5.27309 2.19214 5.73852 2.19214 6.40058V9.60077C2.19214 10.2625 2.19182 10.7274 2.22144 11.09C2.25056 11.4465 2.30531 11.6583 2.38843 11.8215C2.5618 12.1617 2.83918 12.4381 3.17944 12.6115C3.34258 12.6946 3.55366 12.7494 3.90991 12.7785C4.27266 12.8081 4.73809 12.8088 5.40015 12.8088H11.8337C11.9952 12.8088 12.0544 12.8085 12.1013 12.8059C13.0202 12.7542 13.7538 12.0207 13.8054 11.1018C13.808 11.0549 13.8083 10.9956 13.8083 10.8342C13.8083 10.5442 14.0438 10.3088 14.3337 10.3088C14.6235 10.309 14.8582 10.5443 14.8582 10.8342C14.8582 10.9813 14.8589 11.0767 14.8542 11.1603C14.7727 12.6128 13.6124 13.7731 12.1599 13.8547C12.0763 13.8594 11.9809 13.8586 11.8337 13.8586H5.40015C4.75549 13.8586 4.24035 13.8593 3.82495 13.8254C3.40351 13.7909 3.03872 13.7181 2.70288 13.5471C2.16505 13.273 1.72692 12.8359 1.45288 12.298C1.28185 11.9623 1.20998 11.5973 1.17554 11.176C1.1416 10.7606 1.14136 10.2454 1.14136 9.60077V6.40058C1.14136 5.75591 1.14161 5.24079 1.17554 4.82538C1.20996 4.40405 1.28192 4.03908 1.45288 3.70331C1.72692 3.16548 2.16505 2.72735 2.70288 2.45331C3.03865 2.28235 3.40362 2.21039 3.82495 2.17597C4.24035 2.14204 4.75548 2.14179 5.40015 2.14179H5.99976Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6052 1.96405C12.0269 1.34007 12.8709 1.25489 13.4265 1.68769L13.5339 1.78144L13.5359 1.78339L14.8943 3.12616L14.8962 3.12812C15.1928 3.42481 15.2792 3.81707 15.24 4.15644C15.2014 4.48874 15.0368 4.8271 14.7517 5.04706L14.7361 5.05878L13.3943 6.01679C13.35 6.04843 13.3193 6.09632 13.3083 6.1496L13.0144 7.59003L13.0066 7.62128C12.8814 8.08466 12.5473 8.47484 12.0994 8.62909C11.6286 8.79106 11.1122 8.66443 10.7205 8.24823L9.94409 7.48554L8.44507 8.98554C8.24007 9.19049 7.9079 9.19045 7.70288 8.98554C7.49787 8.78053 7.4979 8.44838 7.70288 8.24335L9.19702 6.74823L8.47729 6.04023L8.47827 6.03925C8.09339 5.6649 7.95471 5.1471 8.08765 4.67597C8.22122 4.20357 8.61105 3.83534 9.1521 3.72675L10.531 3.40839C10.5829 3.39625 10.6284 3.36522 10.6589 3.32148L11.6052 1.96405ZM12.7996 2.53241C12.6927 2.4286 12.5362 2.45941 12.4734 2.5539L12.4666 2.56464L11.5212 3.92206C11.3418 4.17957 11.0721 4.3612 10.7664 4.43183L9.38843 4.75019L9.36694 4.75409C9.1892 4.78716 9.12041 4.88361 9.09839 4.96112C9.0806 5.02417 9.08398 5.11033 9.13843 5.19941L9.21069 5.28827L9.21362 5.29218L11.4578 7.50116L11.4675 7.51093L11.4773 7.52167C11.5509 7.60236 11.6108 7.63078 11.6472 7.64081C11.6835 7.65079 11.7194 7.64905 11.7576 7.63593C11.8393 7.60767 11.9442 7.51532 11.99 7.35468L12.28 5.93964C12.3441 5.62646 12.5238 5.34813 12.7839 5.1623L14.1121 4.21308C14.1427 4.18794 14.1867 4.12438 14.197 4.03534C14.2067 3.95128 14.1815 3.89872 14.1531 3.8703L12.7996 2.53241Z" fill="currentColor"/>',
    })
    var eE = n("X3K1"),
      eD = n("GDNt")
    function eM() {
      let e,
        t,
        n,
        s,
        r = (0, i.c)(6),
        l = (0, h.A)()
      return (
        r[0] !== l
          ? ((e = l.formatMessage({
              id: "appgenShareDialog.profilePin.loading",
              defaultMessage: "Loading profile settings\u2026",
            })),
            (r[0] = l),
            (r[1] = e))
          : (e = r[1]),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsxs)("div", {
              className: "flex min-w-0 items-center gap-2",
              children: [
                (0, a.jsx)("div", {
                  className: "size-7 shrink-0 overflow-hidden rounded-lg",
                  children: (0, a.jsx)(eE.X, { size: "fill" }),
                }),
                (0, a.jsx)(eE.X, { className: "w-36", size: "md" }),
              ],
            })),
            (r[2] = t))
          : (t = r[2]),
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3 py-1",
              "aria-hidden": !0,
              children: [
                t,
                (0, a.jsx)("div", {
                  className: "h-5 w-8 shrink-0 overflow-hidden rounded-full",
                  children: (0, a.jsx)(eE.X, { size: "fill" }),
                }),
              ],
            })),
            (r[3] = n))
          : (n = r[3]),
        r[4] !== e
          ? ((s = (0, a.jsx)(E.OO, {
              spacing: "large",
              children: (0, a.jsx)("div", {
                className: "border-t border-default pt-3",
                role: "status",
                "aria-busy": "true",
                "aria-label": e,
                children: n,
              }),
            })),
            (r[4] = e),
            (r[5] = s))
          : (s = r[5]),
        s
      )
    }
    function eI(e) {
      let t,
        n,
        s,
        r,
        o,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        x,
        v = (0, i.c)(41),
        {
          compact: y,
          atLimit: b,
          canPin: w,
          checked: j,
          disabled: C,
          error: S,
          isFetching: A,
          isWorkspaceAccount: D,
          onChange: M,
        } = e,
        k = void 0 !== y && y,
        L = (0, g.useId)()
      if (A || w) {
        if (!A && b) {
          let e
          ;(v[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(_.A, {
                id: "appgenShareDialog.profilePin.limit",
                defaultMessage: "Your profile showcase is full. Remove an item before pinning this Site.",
              })),
              (v[2] = e))
            : (e = v[2]),
            (t = e))
        }
      } else {
        let e
        ;(v[0] !== D
          ? ((e = D
              ? (0, a.jsx)(_.A, {
                  id: "appgenShareDialog.profilePin.workspaceOnly",
                  defaultMessage: "You can only pin Sites shared to your workspace on your profile",
                })
              : (0, a.jsx)(_.A, {
                  id: "appgenShareDialog.profilePin.publicOnly",
                  defaultMessage:
                    "You can only pin Sites shared with \u201CAnyone on the Internet\u201D to your profile",
                })),
            (v[0] = D),
            (v[1] = e))
          : (e = v[1]),
          (t = e))
      }
      let P = k && null != t
      v[3] !== j || v[4] !== C || v[5] !== L || v[6] !== M || v[7] !== P
        ? ((n = (0, a.jsx)(ev.l, {
            className: "shrink-0",
            "aria-labelledby": L,
            checked: j,
            disabled: C,
            focusableWhenDisabled: P,
            onChange: M,
          })),
          (v[3] = j),
          (v[4] = C),
          (v[5] = L),
          (v[6] = M),
          (v[7] = P),
          (v[8] = n))
        : (n = v[8])
      let O = n,
        N = !k && "border-t border-default pt-3"
      v[9] !== N ? ((s = (0, eh.A)("flex flex-col gap-3 select-none", N)), (v[9] = N), (v[10] = s)) : (s = v[10])
      let T = k ? void 0 : t,
        R = k || null == t ? void 0 : 0,
        q = C && !k && "opacity-60"
      return (
        v[11] !== q ? ((r = (0, eh.A)("flex min-w-0 items-center gap-2", q)), (v[11] = q), (v[12] = r)) : (r = v[12]),
        v[13] !== k
          ? ((o =
              !k &&
              (0, a.jsx)("div", {
                className: "flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-tertiary",
                children: (0, a.jsx)(I.I, { asset: eA }),
              })),
            (v[13] = k),
            (v[14] = o))
          : (o = v[14]),
        v[15] !== k
          ? ((c = k
              ? (0, a.jsx)(_.A, {
                  id: "appgenShareDialog.profilePin.showcase.label",
                  defaultMessage: "Showcase on <profile>your profile</profile>",
                  values: { profile: ek },
                })
              : (0, a.jsx)(_.A, {
                  id: "appgenShareDialog.profilePin.label",
                  defaultMessage: "Allow this to be discovered and show it on your profile",
                })),
            (v[15] = k),
            (v[16] = c))
          : (c = v[16]),
        v[17] !== L || v[18] !== c
          ? ((u = (0, a.jsx)("span", { id: L, className: "text-sm", children: c })),
            (v[17] = L),
            (v[18] = c),
            (v[19] = u))
          : (u = v[19]),
        v[20] !== o || v[21] !== u || v[22] !== r
          ? ((d = (0, a.jsxs)("div", { className: r, children: [o, u] })),
            (v[20] = o),
            (v[21] = u),
            (v[22] = r),
            (v[23] = d))
          : (d = v[23]),
        v[24] !== k || v[25] !== O || v[26] !== t
          ? ((p = k
              ? (0, a.jsx)(l.m, {
                  content: null != t ? (0, a.jsx)("span", { className: "block text-start", children: t }) : void 0,
                  children: (0, a.jsx)("span", { className: "inline-flex shrink-0", children: O }),
                })
              : O),
            (v[24] = k),
            (v[25] = O),
            (v[26] = t),
            (v[27] = p))
          : (p = v[27]),
        v[28] !== d || v[29] !== p || v[30] !== R
          ? ((m = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3 py-1",
              tabIndex: R,
              children: [d, p],
            })),
            (v[28] = d),
            (v[29] = p),
            (v[30] = R),
            (v[31] = m))
          : (m = v[31]),
        v[32] !== m || v[33] !== T
          ? ((f = (0, a.jsx)(l.m, { content: T, children: m })), (v[32] = m), (v[33] = T), (v[34] = f))
          : (f = v[34]),
        v[35] !== S
          ? ((h =
              null != S
                ? (0, a.jsx)("div", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children:
                      S instanceof eD.fk && 409 === S.status
                        ? (0, a.jsx)(_.A, {
                            id: "appgenShareDialog.profilePin.conflict",
                            defaultMessage: "Your profile changed. Try again.",
                          })
                        : (0, a.jsx)(_.A, {
                            id: "appgenShareDialog.profilePin.saveError",
                            defaultMessage: "Unable to update your profile. Try again.",
                          }),
                  })
                : null),
            (v[35] = S),
            (v[36] = h))
          : (h = v[36]),
        v[37] !== f || v[38] !== h || v[39] !== s
          ? ((x = (0, a.jsx)(E.OO, {
              spacing: "large",
              children: (0, a.jsxs)("div", { className: s, children: [f, h] }),
            })),
            (v[37] = f),
            (v[38] = h),
            (v[39] = s),
            (v[40] = x))
          : (x = v[40]),
        x
      )
    }
    function ek(e) {
      return (0, a.jsx)(eS.Y, { href: "/profile", forceExternal: !0, children: e })
    }
    var eL = n("SQbA"),
      eP = n("Pb3h"),
      eO = n("nr53"),
      eN = n("Cemj"),
      eT = n("Lb95"),
      eR = n("Lnny"),
      eq = n("KvJy")
    let eK = v.Rpp(),
      ez = {
        admins_only: s.CodexSitesAccessMode.CODEX_SITES_ACCESS_MODE_ADMINS_ONLY,
        custom: s.CodexSitesAccessMode.CODEX_SITES_ACCESS_MODE_CUSTOM,
        public: s.CodexSitesAccessMode.CODEX_SITES_ACCESS_MODE_PUBLIC,
        workspace_all: s.CodexSitesAccessMode.CODEX_SITES_ACCESS_MODE_WORKSPACE_ALL,
      }
    function eF(e) {
      let t,
        n,
        s = (0, i.c)(5)
      return (
        s[0] !== e ? ((t = (0, a.jsx)(eU, { ...e })), (s[0] = e), (s[1] = t)) : (t = s[1]),
        s[2] !== e.onClose || s[3] !== t
          ? ((n = (0, a.jsx)(et.tQ, { onClose: e.onClose, children: t })), (s[2] = e.onClose), (s[3] = t), (s[4] = n))
          : (n = s[4]),
        n
      )
    }
    function eU(e) {
      let t,
        n = (0, i.c)(4)
      return ((0, w.As)(), n[2] !== e ? ((t = (0, a.jsx)(eW, { ...e })), (n[2] = e), (n[3] = t)) : (t = n[3]), t)
    }
    function eW(e) {
      var t
      let n,
        l,
        o,
        m,
        x,
        v,
        j,
        D,
        M,
        I,
        k,
        O,
        R,
        F,
        $,
        H,
        Z,
        J,
        ee,
        en,
        ea,
        ei,
        es,
        eo,
        ed,
        em,
        ef,
        eg,
        eh,
        e_,
        ex,
        ev,
        ey,
        eb,
        ew,
        ej,
        eS,
        eA,
        eE,
        eD,
        ek,
        eN,
        eF,
        eU,
        eW,
        e3,
        e4,
        e7,
        e9,
        te,
        tt,
        tn,
        ta = (0, i.c)(307),
        {
          publication: ts,
          initialIsOwner: tr,
          initialProjectTitle: tl,
          onAccessChanged: to,
          onClose: tc,
          projectId: tu,
          audienceControl: td,
          source: tm,
        } = e,
        th = (0, f.gh)(z.u),
        t_ = (0, h.A)(),
        { accountId: tx, email: tv, userId: ty } = (0, w.As)(),
        { data: tb } = (0, S.YL)(),
        tw = tb?.structure === "workspace",
        { isProfileVisible: tj, isProfileVisibilityLoading: tC } = (0, G.D)(),
        tS = (0, el.Zj)("1091136261") && tw,
        tA = (0, el.Zj)("476199071"),
        tE = (0, el.Zj)("2196156952"),
        tD = tb?.plan_type
      ta[0] !== tD ? ((n = (0, eu.o)(tD)), (ta[0] = tD), (ta[1] = n)) : (n = ta[1])
      let tM = n,
        tI = (0, f.Ul)(b.nw),
        tk = tb?.id
      ta[2] !== tk ? ((l = ["accounts", "settings", tk]), (ta[2] = tk), (ta[3] = l)) : (l = ta[3])
      let tL = tE && tw && tM
      ;(ta[4] !== tb?.id || ta[5] !== th || ta[6] !== tI
        ? ((o = (e) => {
            let { signal: t } = e
            if (tI) throw Error("Account input subscription unavailable")
            return (0, b.A2)(th, tb?.id ?? "", t)
          }),
          (ta[4] = tb?.id),
          (ta[5] = th),
          (ta[6] = tI),
          (ta[7] = o))
        : (o = ta[7]),
        ta[8] !== l || ta[9] !== tL || ta[10] !== o
          ? ((m = {
              queryKey: l,
              enabled: tL,
              queryFn: o,
              staleTime: K.appServices?.accessInputs == null ? W.D.ONE_MINUTE : 0,
            }),
            (ta[8] = l),
            (ta[9] = tL),
            (ta[10] = o),
            (ta[11] = m))
          : (m = ta[11]))
      let { data: tP } = (0, c.I)(m)
      ta[12] !== tb || ta[13] !== tE || ta[14] !== tM || ta[15] !== tP?.permissions
        ? ((x =
            null != tb &&
            tE &&
            (!tM ||
              ("account-owner" === tb.account_user_role && tP?.permissions != null) ||
              tP?.permissions?.includes("chatgpt.workspace.feature.sites.invite_external.access") === !0)),
          (ta[12] = tb),
          (ta[13] = tE),
          (ta[14] = tM),
          (ta[15] = tP?.permissions),
          (ta[16] = x))
        : (x = ta[16])
      let tO = x,
        { data: tN, isError: tT, error: tR, isLoading: tq } = (0, f._U)(eq.ox, tu),
        tK = (tT && null == tN) || (tR instanceof ep.FetchError && (403 === tR.status || 404 === tR.status))
      ta[17] !== tN || ta[18] !== tb || ta[19] !== tv || ta[20] !== tK
        ? ((v =
            !tK &&
            tN?.users.some(
              (e) =>
                "owner" === e.role &&
                ((tb?.account_user_id != null && e.account_user_id === tb.account_user_id) ||
                  (null != tv && e.email?.toLowerCase() === tv.toLowerCase())),
            ) === !0),
          (ta[17] = tN),
          (ta[18] = tb),
          (ta[19] = tv),
          (ta[20] = tK),
          (ta[21] = v))
        : (v = ta[21])
      let tz = v,
        tF = tS && tz && null != tx,
        { data: tU } = (0, f._U)(eO.N, tu),
        tW = tj && !tC && tz && null != tb && null != tN && !tK,
        tQ = (0, u.jE)()
      ta[22] !== tx || ta[23] !== tW || ta[24] !== ty
        ? ((j = Q(tx, ty, tW)), (ta[22] = tx), (ta[23] = tW), (ta[24] = ty), (ta[25] = j))
        : (j = ta[25])
      let { data: tG, isError: t$, isFetching: tV } = (0, c.I)(j),
        [tB, tX] = (0, g.useState)(null)
      ta[26] !== tx || ta[27] !== tG || ta[28] !== tu || ta[29] !== tQ || ta[30] !== th || ta[31] !== ty
        ? ((D = (function ({ scope: e, accountId: t, userId: n, queryClient: a, artifact: i, pins: r }) {
            let { queryKey: l } = Q(t, n, !0),
              o = r?.pins?.items?.find((e) => e.kind === i.kind && e.artifact_id === i.artifact_id)
            return (0, U.I)({
              mutationFn: async (e) => {
                if (null == t || r?.pins == null) throw Error("Profile pins are unavailable")
                if (e) {
                  let e = await C.Request.safePost("/profiles/me/page/pins", {
                    additionalHeaders: { "ChatGPT-Account-ID": t },
                    requestBody: i,
                    expectedErrorStatuses: [403, 404, 409, 422, 503],
                  })
                  if (null != e.error || null == e.pins) throw Error("Profile pins could not be saved")
                  return e
                }
                return null == o
                  ? r
                  : C.Request.safeDelete("/profiles/me/page/pins/{pin_id}", {
                      additionalHeaders: { "ChatGPT-Account-ID": t },
                      parameters: { path: { pin_id: o.pin_id }, query: { expected_version: r.page_version } },
                      expectedErrorStatuses: [403, 404, 409, 422],
                    })
              },
              retry: !1,
              onMutate: () => null != o,
              onSuccess: async (r, o, c) => {
                ;(null == r.error &&
                  null != r.pins &&
                  o !== c &&
                  (0, T.O)(
                    e,
                    o ? [] : [i],
                    o ? [i] : [],
                    s.CodexProfilePinEntryPoint.CODEX_PROFILE_PIN_ENTRY_POINT_SITE_SHARE_DIALOG,
                  ),
                  await a.cancelQueries({ queryKey: l }),
                  a.setQueryData(l, r),
                  await a.invalidateQueries({ queryKey: ["profile", "page-pins", n, t] }),
                  await a.invalidateQueries({ queryKey: ["profile", "page", n, t] }))
              },
              onError: async () => {
                await a.invalidateQueries({ queryKey: l })
              },
            })
          })({
            scope: th,
            accountId: tx,
            userId: ty,
            queryClient: tQ,
            artifact: { kind: "site", artifact_id: tu },
            pins: tG,
          })),
          (ta[26] = tx),
          (ta[27] = tG),
          (ta[28] = tu),
          (ta[29] = tQ),
          (ta[30] = th),
          (ta[31] = ty),
          (ta[32] = D))
        : (D = ta[32])
      let { mutateAsync: tH, isPending: tY, error: tZ, reset: tJ } = (0, d.n)(D)
      ta[33] !== tx || ta[34] !== tu
        ? ((M = ["appgen", "remix-setting", tx, tu]), (ta[33] = tx), (ta[34] = tu), (ta[35] = M))
        : (M = ta[35])
      let t1 = M
      ;(ta[36] !== tu
        ? ((I = async (e) => {
            let { signal: t } = e,
              n = await (0, eL.vX)(tu, { signal: t })
            if (null == n.remix_enabled) throw Error("Site remix setting is unavailable")
            return { remix_enabled: n.remix_enabled }
          }),
          (ta[36] = tu),
          (ta[37] = I))
        : (I = ta[37]),
        ta[38] !== t1 || ta[39] !== tF || ta[40] !== I
          ? ((k = { queryKey: t1, enabled: tF, staleTime: W.D.ONE_MINUTE, queryFn: I, retry: !1 }),
            (ta[38] = t1),
            (ta[39] = tF),
            (ta[40] = I),
            (ta[41] = k))
          : (k = ta[41]))
      let { data: t0, isError: t2 } = (0, c.I)(k),
        [t3, t4] = (0, g.useState)(null),
        t5 = t3 ?? t0?.remix_enabled ?? !1,
        t6 = tF && null != t0 && null != t3 && t3 !== t0.remix_enabled
      ;(ta[42] !== tx || ta[43] !== tu
        ? ((O = (e) => {
            if (null == tx) throw Error("Site sharing requires an active account")
            return ec.CodexRequest.safePut("/codex/sites/projects/{project_id}/remix", {
              parameters: { path: { project_id: tu } },
              additionalHeaders: { "ChatGPT-Account-ID": tx },
              requestBody: { remix_enabled: e },
            })
          }),
          (ta[42] = tx),
          (ta[43] = tu),
          (ta[44] = O))
        : (O = ta[44]),
        ta[45] !== tQ || ta[46] !== t1
          ? ((R = () => tQ.cancelQueries({ queryKey: t1 })), (ta[45] = tQ), (ta[46] = t1), (ta[47] = R))
          : (R = ta[47]),
        ta[48] !== tu || ta[49] !== tQ || ta[50] !== t1
          ? ((F = (e) => {
              ;(tQ.setQueryData(t1, e), (0, eL.y_)(tQ, [tu]))
            }),
            (ta[48] = tu),
            (ta[49] = tQ),
            (ta[50] = t1),
            (ta[51] = F))
          : (F = ta[51]),
        ta[52] !== tQ || ta[53] !== t1
          ? (($ = () => tQ.invalidateQueries({ queryKey: t1 })), (ta[52] = tQ), (ta[53] = t1), (ta[54] = $))
          : ($ = ta[54]),
        ta[55] !== O || ta[56] !== R || ta[57] !== F || ta[58] !== $
          ? ((H = { mutationFn: O, onMutate: R, onSuccess: F, onError: $, retry: !1 }),
            (ta[55] = O),
            (ta[56] = R),
            (ta[57] = F),
            (ta[58] = $),
            (ta[59] = H))
          : (H = ta[59]))
      let { mutateAsync: t8, isPending: t7, isError: t9, reset: ne } = (0, d.n)(H)
      ;(ta[60] !== tu ? ((Z = (0, eq.T6)(tu)), (ta[60] = tu), (ta[61] = Z)) : (Z = ta[61]),
        ta[62] !== to
          ? ((J = (e) => {
              null != e && to?.()
            }),
            (ta[62] = to),
            (ta[63] = J))
          : (J = ta[63]),
        ta[64] !== Z || ta[65] !== J
          ? ((ee = { ...Z, onSuccess: J }), (ta[64] = Z), (ta[65] = J), (ta[66] = ee))
          : (ee = ta[66]))
      let nt = (0, d.n)(ee),
        [nn, na] = (0, g.useState)(""),
        [ni, ns] = (0, g.useState)(null),
        [nr, nl] = (0, g.useState)(null),
        [no, nc] = (0, g.useState)(null)
      ta[67] !== tu
        ? ((en = { mutationKey: ["appgen", "share-access", tu, "update"], exact: !0 }), (ta[67] = tu), (ta[68] = en))
        : (en = ta[68])
      let nu = (0, p.l)(en) > 0 || tY || t7,
        nd = ts?.deployment,
        np = (0, f._U)(null != nd && "publishing" === (0, eT.o)(nd.status) ? eR.fj : null, ts),
        nm = null != np && "ready" !== np.stage,
        nf = !nu && !nm
      ta[69] !== nn ? ((ea = nn.trim()), (ta[69] = nn), (ta[70] = ea)) : (ea = ta[70])
      let ng = ea,
        { data: nh, isError: n_, isPending: nx } = (0, q.Nv)(tw ? nn : ""),
        nv = (0, f._U)(y.w, tx ?? ""),
        ny = tw && nv
      ta[71] !== tb || ta[72] !== tw
        ? ((ei = tw && (0, eu.o)(tb.plan_type)), (ta[71] = tb), (ta[72] = tw), (ta[73] = ei))
        : (ei = ta[73])
      let nb = ei,
        { data: nw, isError: nj, isLoading: nC } = (0, f._U)(y.l, tx ?? "", { enabled: ny }) ?? {}
      ta[74] === Symbol.for("react.memo_cache_sentinel")
        ? ((es = { includeMemberCounts: !0 }), (ta[74] = es))
        : (es = ta[74])
      let { data: nS, isError: nA, isLoading: nE, refetch: nD } = (0, q.Nc)(nb && tz ? ng : "", es),
        nM = td?.draft?.accessMode ?? ni ?? tN?.access_mode ?? null,
        nI = tN?.users.filter(e0).map(e1) ?? []
      ta[75] !== tN?.groups ? ((eo = tN?.groups ?? []), (ta[75] = tN?.groups), (ta[76] = eo)) : (eo = ta[76])
      let nk = eo,
        nL = tN?.users.filter(eJ) ?? [],
        nP = new Set([...nI, ...nL].flatMap(eZ)),
        nO = (0, V.BM)({
          currentAccountUserId: tb?.account_user_id,
          existingAccountUserIds: nP,
          workspaceUsers: nh,
        })?.filter(eY)
      ta[77] !== nk ? ((ed = new Set(nk.map(eH))), (ta[77] = nk), (ta[78] = ed)) : (ed = ta[78])
      let nN = ed
      ta[79] !== nk ? ((em = new Set(nk.filter(eX).map(eB))), (ta[79] = nk), (ta[80] = em)) : (em = ta[80])
      let nT = em
      ta[81] !== nb ||
      ta[82] !== ny ||
      ta[83] !== nN ||
      ta[84] !== nA ||
      ta[85] !== t_ ||
      ta[86] !== nu ||
      ta[87] !== nS ||
      ta[88] !== nw ||
      ta[89] !== nj ||
      ta[90] !== ng
        ? ((eg =
            !ny || nj || nu
              ? []
              : (nw ?? [])
                  .filter((e) => !nN.has(e.id) && e.name.toLocaleLowerCase().includes(ng.toLocaleLowerCase()))
                  .map((e) => ({
                    id: `group:workspace:${e.id}`,
                    label: e.name,
                    secondaryLabel: (0, Y.D)(t_, e.member_count),
                    avatar: (0, a.jsx)(er.y, { avatar: e.avatar, size: "sm" }),
                    target: { kind: "group", groupId: e.id, name: e.name, size: e.member_count ?? 0 },
                  }))),
          (ef =
            "" === ng || !nb || nA || nu
              ? []
              : (nS ?? [])
                  .filter(
                    (e) =>
                      e.name.toLocaleLowerCase().includes(ng.toLocaleLowerCase()) &&
                      !nN.has(e.id) &&
                      !eg.some((t) => t.id === `group:workspace:${e.id}`),
                  )
                  .map((e) => ({
                    id: `group:workspace:${e.id}`,
                    label: e.name,
                    secondaryLabel: (0, Y.D)(t_, e.num_members),
                    avatar: (0, a.jsx)(B.K, { groupId: e.id, size: "sm" }),
                    target: { kind: "group", groupId: e.id, name: e.name, size: e.num_members ?? 0 },
                  }))),
          (ta[81] = nb),
          (ta[82] = ny),
          (ta[83] = nN),
          (ta[84] = nA),
          (ta[85] = t_),
          (ta[86] = nu),
          (ta[87] = nS),
          (ta[88] = nw),
          (ta[89] = nj),
          (ta[90] = ng),
          (ta[91] = ef),
          (ta[92] = eg))
        : ((ef = ta[91]), (eg = ta[92]))
      let nR = ef,
        nq = ng.toLowerCase(),
        nK = nI.some(eV),
        nz =
          (tz || tN?.personal_editor_access != null) &&
          tN?.access_mode !== "admins_only" &&
          ("public" !== nM || tA || tN?.personal_editor_access != null) &&
          (tw || tO || nK),
        nF = nz && (tw || tO),
        nU = !tw && tN?.personal_editor_access === "invite" && td?.draft == null && null == ni,
        nW = eK.safeParse(nq).success && tv?.trim().toLowerCase() !== nq,
        nQ =
          nF &&
          tO &&
          nW &&
          ![...nI, ...nL].some((e) => e.email?.trim().toLowerCase() === nq) &&
          !nO?.some((e) => e.email?.trim().toLowerCase() === nq),
        nG = tw && tz ? tx : null
      ta[93] !== nG || ta[94] !== ng
        ? ((eh = { workspaceId: nG, query: ng }), (ta[93] = nG), (ta[94] = ng), (ta[95] = eh))
        : (eh = ta[95])
      let n$ = (0, f._U)(P.$, eh)
          .filter((e) => !nP.has(e.accountUserId))
          .map(e$),
        nV =
          "" === ng
            ? []
            : [
                ...(nO?.map(tf) ?? []),
                ...(nQ && !nu
                  ? [
                      ((t = nq),
                      {
                        id: `external:${t}`,
                        label: t,
                        target: { kind: "external", action: { email: t, role: "viewer" } },
                      }),
                    ]
                  : []),
              ]
      if (nU && nW && !nu && !nL.some((e) => e.email?.toLowerCase() === nq)) {
        let e,
          t,
          n,
          a = `editor:${nq}`
        ;(ta[96] !== t_ ? ((e = t_.formatMessage(tg.edit)), (ta[96] = t_), (ta[97] = e)) : (e = ta[97]),
          ta[98] !== nq
            ? ((t = { kind: "external", action: { editor_email: nq } }), (ta[98] = nq), (ta[99] = t))
            : (t = ta[99]),
          ta[100] !== nq || ta[101] !== a || ta[102] !== e || ta[103] !== t
            ? ((n = { id: a, label: nq, secondaryLabel: e, target: t }),
              (ta[100] = nq),
              (ta[101] = a),
              (ta[102] = e),
              (ta[103] = t),
              (ta[104] = n))
            : (n = ta[104]),
          nV.push(n))
      }
      ta[105] !== tl ? ((e_ = (0, a.jsx)(eP.L, { title: tl })), (ta[105] = tl), (ta[106] = e_)) : (e_ = ta[106])
      let nB = e_
      if (tw)
        if (ny) {
          let e
          ;(ta[109] !== t_
            ? ((e = t_.formatMessage({
                id: "appgenShareDialog.peopleTeamsPlaceholder",
                defaultMessage: "Add people or teams",
              })),
              (ta[109] = t_),
              (ta[110] = e))
            : (e = ta[110]),
            (ex = e))
        } else {
          let e
          ;(ta[111] !== t_
            ? ((e = t_.formatMessage({
                id: "appgenShareDialog.peopleGroupsPlaceholder",
                defaultMessage: "Add people or groups",
              })),
              (ta[111] = t_),
              (ta[112] = e))
            : (e = ta[112]),
            (ex = e))
        }
      else {
        let e
        ;(ta[107] !== t_
          ? ((e = t_.formatMessage({
              id: "appgenShareDialog.externalEmailPlaceholder",
              defaultMessage: "Enter an email address",
            })),
            (ta[107] = t_),
            (ta[108] = e))
          : (e = ta[108]),
          (ex = e))
      }
      let nX = tw && tA && tz,
        nH = td?.draft != null || (null != tN && nM !== tN.access_mode),
        nY = "public" === nM || (tw && "workspace_all" === nM)
      ta[113] !== nY || ta[114] !== tG || ta[115] !== tu || ta[116] !== tB || ta[117] !== tW
        ? ((ev = (function ({ pins: e, artifact: t, selectedPinned: n, canPin: a, enabled: i }) {
            let s = e?.pins?.items?.find((e) => e.kind === t.kind && e.artifact_id === t.artifact_id),
              r = a && (n ?? null != s)
            return {
              pinned: r,
              atLimit: null == s && e?.pins?.max_pins != null && (e.pins.items?.length ?? 0) >= e.pins.max_pins,
              hasPendingChange: i && e?.pins != null && r !== (null != s),
            }
          })({ pins: tG, artifact: { kind: "site", artifact_id: tu }, selectedPinned: tB, canPin: nY, enabled: tW })),
          (ta[113] = nY),
          (ta[114] = tG),
          (ta[115] = tu),
          (ta[116] = tB),
          (ta[117] = tW),
          (ta[118] = ev))
        : (ev = ta[118])
      let { pinned: nZ, atLimit: nJ, hasPendingChange: n1 } = ev,
        n0 = null == tG || t$ || tV,
        n2 = n0 || (nZ && nJ),
        n3 = nm || nu || td?.draft?.disabled === !0 || (!nH && !t6 && n1 && n2)
      ta[119] !== t_ || ta[120] !== th
        ? ((ey = function (e) {
            th.get(L.Id).danger(
              e instanceof ep.FetchError && "site_editor_recipient_ineligible" === e.errorCode
                ? t_.formatMessage({
                    id: "appgenShareDialog.editorInvite.rejected",
                    defaultMessage:
                      "Couldn\u2019t add this editor. Check that the email is for an eligible personal ChatGPT account.",
                  })
                : t_.formatMessage({
                    id: "appgenShareDialog.save.error",
                    defaultMessage: "Unable to save sharing settings",
                  }),
              { errorAnalytics: { toastId: "tpp_sites_response_share_modal_access_save_error" } },
            )
          }),
          (ta[119] = t_),
          (ta[120] = th),
          (ta[121] = ey))
        : (ey = ta[121])
      let n4 = ey
      ta[122] !== tN ||
      ta[123] !== td ||
      ta[124] !== nM ||
      ta[125] !== nZ ||
      ta[126] !== t5 ||
      ta[127] !== nH ||
      ta[128] !== n1 ||
      ta[129] !== t6 ||
      ta[130] !== n2 ||
      ta[131] !== to ||
      ta[132] !== tc ||
      ta[133] !== tu ||
      ta[134] !== tH ||
      ta[135] !== t8 ||
      ta[136] !== th ||
      ta[137] !== n4 ||
      ta[138] !== tm ||
      ta[139] !== nt
        ? ((eb = async function () {
            if (null == tN || null == nM) return void tc()
            if (nH && "admins_only" !== nM) {
              try {
                if (td?.draft != null) (await td.draft.save(), to?.())
                else {
                  let e = await nt.mutateAsync({ action: { access_mode: nM } })
                  if (null == e || e.access_mode !== nM) return void ns(null)
                }
              } catch {
                n4()
                return
              }
              try {
                ;(0, N.yy)(th, s.CodexSitesSharingEvent, {
                  accessMode: ez[nM],
                  action: s.CodexSitesSharingAction.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                  addedIndividuals: !1,
                  projectId: tu,
                  source: tm,
                })
              } catch {}
              ns(null)
            }
            if (n1 && !n2)
              try {
                ;(await tH(nZ), tX(null))
              } catch {}
            if (t6)
              try {
                ;(await t8(t5), t4(null))
              } catch {}
          }),
          (ta[122] = tN),
          (ta[123] = td),
          (ta[124] = nM),
          (ta[125] = nZ),
          (ta[126] = t5),
          (ta[127] = nH),
          (ta[128] = n1),
          (ta[129] = t6),
          (ta[130] = n2),
          (ta[131] = to),
          (ta[132] = tc),
          (ta[133] = tu),
          (ta[134] = tH),
          (ta[135] = t8),
          (ta[136] = th),
          (ta[137] = n4),
          (ta[138] = tm),
          (ta[139] = nt),
          (ta[140] = eb))
        : (eb = ta[140])
      let n5 = eb
      ta[141] !== td || ta[142] !== tJ || ta[143] !== ne
        ? ((ew = function () {
            ;(ns(null), td?.reset(), tX(null), tJ(), t4(null), ne())
          }),
          (ta[141] = td),
          (ta[142] = tJ),
          (ta[143] = ne),
          (ta[144] = ew))
        : (ew = ta[144])
      let n6 = ew
      ta[145] !== tw || ta[146] !== tJ || ta[147] !== tB
        ? ((ej = function (e) {
            ;(ns(e),
              !0 !== tB || "public" === e || (tw && "workspace_all" === e) || (tX(null), tJ()),
              "public" === e && na(""))
          }),
          (ta[145] = tw),
          (ta[146] = tJ),
          (ta[147] = tB),
          (ta[148] = ej))
        : (ej = ta[148])
      let n8 = ej
      ta[149] !== tN || ta[150] !== tu || ta[151] !== th || ta[152] !== n4 || ta[153] !== tm || ta[154] !== nt
        ? ((eS = function (e) {
            let t
            null != tN &&
              ("user" === e.kind && (t = { ...e.user, role: "viewer", editable: !0 }),
              "external" === e.kind && "email" in e.action && (t = { ...e.action, editable: !0 }),
              na(""),
              nt
                .mutateAsync({
                  action:
                    "external" === e.kind
                      ? e.action
                      : {
                          recipient: "user" === e.kind ? e.user.account_user_id : e.groupId,
                          recipient_type: "user" === e.kind ? "user" : "group",
                          role: "viewer",
                        },
                  user: t,
                  group: "group" === e.kind ? { id: e.groupId, name: e.name, size: e.size, editable: !0 } : void 0,
                })
                .then((t) => {
                  if (null != t)
                    try {
                      ;(0, N.yy)(th, s.CodexSitesSharingEvent, {
                        accessMode: ez[t.access_mode],
                        action: s.CodexSitesSharingAction.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                        addedIndividuals: "user" === e.kind || "external" === e.kind,
                        projectId: tu,
                        source: tm,
                      })
                    } catch {}
                }, n4))
          }),
          (ta[149] = tN),
          (ta[150] = tu),
          (ta[151] = th),
          (ta[152] = n4),
          (ta[153] = tm),
          (ta[154] = nt),
          (ta[155] = eS))
        : (eS = ta[155])
      let n7 = eS
      ta[156] !== tw || ta[157] !== tu || ta[158] !== th || ta[159] !== n4 || ta[160] !== tm || ta[161] !== nt
        ? ((eA = function (e, t) {
            let n
            if ("group" === e.kind) n = { recipient: e.group.id, recipient_type: "group", role: t }
            else if (null != e.user.account_user_id)
              n =
                "editor" === e.kind && !tw && e.user.email
                  ? {
                      editor_changes: { remove_editor_account_user_ids: [e.user.account_user_id] },
                      viewer_changes:
                        "viewer" === t
                          ? { add_external_visitor_emails: [e.user.email] }
                          : { remove_external_visitor_emails: [e.user.email] },
                    }
                  : { recipient: e.user.account_user_id, recipient_type: "user", role: t }
            else {
              if ("editor" === t) return (n4(), Promise.reject(Error("An editor must have an account user ID")))
              n = { email: e.user.email ?? "", role: t }
            }
            return nt
              .mutateAsync({
                action: n,
                user: "group" === e.kind ? void 0 : e.user,
                group: "group" === e.kind ? e.group : void 0,
              })
              .then(
                (e) => {
                  if (null != e)
                    try {
                      ;(0, N.yy)(th, s.CodexSitesSharingEvent, {
                        accessMode: ez[e.access_mode],
                        action: s.CodexSitesSharingAction.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                        addedIndividuals: !1,
                        projectId: tu,
                        source: tm,
                      })
                    } catch {}
                },
                (e) => {
                  throw (n4(), e)
                },
              )
          }),
          (ta[156] = tw),
          (ta[157] = tu),
          (ta[158] = th),
          (ta[159] = n4),
          (ta[160] = tm),
          (ta[161] = nt),
          (ta[162] = eA))
        : (eA = ta[162])
      let n9 = eA
      ta[163] !== n9
        ? ((eE = function (e) {
            return n9(e, null)
          }),
          (ta[163] = n9),
          (ta[164] = eE))
        : (eE = ta[164])
      let ae = eE
      ta[165] !== tu || ta[166] !== tQ || ta[167] !== n4 || ta[168] !== nt
        ? ((eD = () => {
            ;(0, eq.Jo)(tu, tQ)
              .then(() => {
                nt.reset()
              })
              .catch(n4)
          }),
          (ta[165] = tu),
          (ta[166] = tQ),
          (ta[167] = n4),
          (ta[168] = nt),
          (ta[169] = eD))
        : (eD = ta[169])
      let at = eD
      ;(ta[170] === Symbol.for("react.memo_cache_sentinel")
        ? ((ek = (0, a.jsx)(_.A, { id: "appgenShareDialog.error", defaultMessage: "Unable to load sharing settings" })),
          (ta[170] = ek))
        : (ek = ta[170]),
        ta[171] === Symbol.for("react.memo_cache_sentinel")
          ? ((eN = (0, a.jsx)(_.A, { id: "appgenShareDialog.refresh.button", defaultMessage: "Refresh permissions" })),
            (ta[171] = eN))
          : (eN = ta[171]),
        ta[172] !== at
          ? ((eF = (0, a.jsx)(E.OO, {
              className: "py-10",
              children: (0, a.jsxs)("div", {
                className: "text-center text-sm font-medium text-secondary",
                children: [ek, (0, a.jsx)(r.$, { color: "secondary", onClick: at, children: eN })],
              }),
            })),
            (ta[172] = at),
            (ta[173] = eF))
          : (eF = ta[173]))
      let an = eF,
        aa = null != tb && !tK && !t$ && (tq ? !0 === tr : tz && null != tN),
        ai = null
      if (aa && (tC || (tj && (tq || null == tG)))) {
        let e
        ;(ta[174] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(eM, {})), (ta[174] = e))
          : (e = ta[174]),
          (ai = e))
      } else if (aa && tj) {
        let e,
          t,
          n = tq || !nY || nu || nJ || n0,
          i = n1 ? tZ : null,
          r = tq || tV
        ;(ta[175] !== tb || ta[176] !== tw || ta[177] !== tJ || ta[178] !== th
          ? ((e = (e) => {
              let t
              ;(null != tb &&
                (t = tw
                  ? s.CodexProfilePageScope.CODEX_PROFILE_PAGE_SCOPE_WORKSPACE
                  : s.CodexProfilePageScope.CODEX_PROFILE_PAGE_SCOPE_PERSONAL),
                (0, T.p)(
                  th,
                  e
                    ? s.CodexProfileShowcaseEditActionType.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_ADD
                    : s.CodexProfileShowcaseEditActionType.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_REMOVE,
                  "site",
                  s.CodexProfilePinEntryPoint.CODEX_PROFILE_PIN_ENTRY_POINT_SITE_SHARE_DIALOG,
                  t,
                ),
                tX(e),
                tJ())
            }),
            (ta[175] = tb),
            (ta[176] = tw),
            (ta[177] = tJ),
            (ta[178] = th),
            (ta[179] = e))
          : (e = ta[179]),
          ta[180] !== tS ||
          ta[181] !== nJ ||
          ta[182] !== nY ||
          ta[183] !== nZ ||
          ta[184] !== tw ||
          ta[185] !== n ||
          ta[186] !== i ||
          ta[187] !== r ||
          ta[188] !== e
            ? ((t = (0, a.jsx)(eI, {
                compact: tS,
                atLimit: nJ,
                canPin: nY,
                checked: nZ,
                disabled: n,
                error: i,
                isFetching: r,
                isWorkspaceAccount: tw,
                onChange: e,
              })),
              (ta[180] = tS),
              (ta[181] = nJ),
              (ta[182] = nY),
              (ta[183] = nZ),
              (ta[184] = tw),
              (ta[185] = n),
              (ta[186] = i),
              (ta[187] = r),
              (ta[188] = e),
              (ta[189] = t))
            : (t = ta[189]),
          (ai = t))
      }
      if (null != td && (tz || tq)) {
        if (td.checkingPolicy || (tq && null != td.policyDialog)) {
          let e, t
          return (
            ta[190] !== ex || ta[191] !== an
              ? ((e = (0, a.jsx)(e2, { error: an, inviteInputLabel: ex, profilePinToggle: null })),
                (ta[190] = ex),
                (ta[191] = an),
                (ta[192] = e))
              : (e = ta[192]),
            ta[193] !== tc || ta[194] !== e || ta[195] !== nB
              ? ((t = (0, a.jsx)(et.Ic, { title: nB, onClose: tc, footer: null, children: e })),
                (ta[193] = tc),
                (ta[194] = e),
                (ta[195] = nB),
                (ta[196] = t))
              : (t = ta[196]),
            t
          )
        }
        if (null != td.policyDialog) return td.policyDialog
      }
      ;(ta[197] !== tz || ta[198] !== n5 || ta[199] !== nH || ta[200] !== n1 || ta[201] !== t6 || ta[202] !== n3
        ? ((eU = () => {
            tz && (nH || n1 || t6) && !n3 && n5()
          }),
          (ta[197] = tz),
          (ta[198] = n5),
          (ta[199] = nH),
          (ta[200] = n1),
          (ta[201] = t6),
          (ta[202] = n3),
          (ta[203] = eU))
        : (eU = ta[203]),
        ta[204] !== tN ||
        ta[205] !== n7 ||
        ta[206] !== nb ||
        ta[207] !== ny ||
        ta[208] !== nF ||
        ta[209] !== nf ||
        ta[210] !== nU ||
        ta[211] !== n$ ||
        ta[212] !== nR ||
        ta[213] !== nA ||
        ta[214] !== nE ||
        ta[215] !== ex ||
        ta[216] !== nV ||
        ta[217] !== nr ||
        ta[218] !== tK ||
        ta[219] !== tq ||
        ta[220] !== tw ||
        ta[221] !== nn ||
        ta[222] !== nD ||
        ta[223] !== eg ||
        ta[224] !== nj ||
        ta[225] !== nC ||
        ta[226] !== ng ||
        ta[227] !== n_ ||
        ta[228] !== nx
          ? ((eW =
              !tq && !tK && null != tN && (nF || nU)
                ? (0, a.jsx)(E.OO, {
                    children: (0, a.jsx)(X.X, {
                      searchStatus: {
                        peopleError: tw && "" !== ng && n_,
                        groupsError: "" !== ng && nb && nA,
                        teamsError: ny && nj,
                        teamsLoading: ny && nC,
                      },
                      ariaLabel: ex,
                      emptyMessage:
                        "" === ng || n_ || (nb && nA) || (ny && nj)
                          ? null
                          : (0, a.jsx)(_.A, {
                              id: "appgenShareDialog.noWorkspaceRecipients",
                              defaultMessage: "No matching people or groups",
                            }),
                      disabled: !nf,
                      dotOptions: n$,
                      optionSections:
                        tw &&
                        (("" !== ng && nx) || (ny && nC) || (nb && nE)) &&
                        0 === nR.length &&
                        0 === eg.length &&
                        0 === nV.length
                          ? void 0
                          : [
                              {
                                id: "teams",
                                label: (0, a.jsx)(_.A, {
                                  id: "appgenShareDialog.yourTeams",
                                  defaultMessage: "Your teams",
                                }),
                                options: eg,
                              },
                              {
                                id: "groups",
                                label: (0, a.jsx)(_.A, { id: "appgenShareDialog.groups", defaultMessage: "Groups" }),
                                options: nR,
                              },
                              {
                                id: "people",
                                label: (0, a.jsx)(_.A, { id: "appgenShareDialog.people", defaultMessage: "People" }),
                                options: nV,
                              },
                            ],
                      showSuggestionsOnFocus: ny,
                      trailingContent:
                        nb && nA && "" !== ng
                          ? (0, a.jsx)(r.$, {
                              color: "secondary",
                              size: "sm",
                              onClick: () => void nD(),
                              children: (0, a.jsx)(_.A, {
                                id: "appgenShareDialog.retryGroups",
                                defaultMessage: "Retry",
                              }),
                            })
                          : null,
                      placeholder: ex,
                      portalContainer: nr,
                      query: nn,
                      onQueryChange: na,
                      onSelectOption: (e) => {
                        n7(e.target)
                      },
                    }),
                  })
                : null),
            (ta[204] = tN),
            (ta[205] = n7),
            (ta[206] = nb),
            (ta[207] = ny),
            (ta[208] = nF),
            (ta[209] = nf),
            (ta[210] = nU),
            (ta[211] = n$),
            (ta[212] = nR),
            (ta[213] = nA),
            (ta[214] = nE),
            (ta[215] = ex),
            (ta[216] = nV),
            (ta[217] = nr),
            (ta[218] = tK),
            (ta[219] = tq),
            (ta[220] = tw),
            (ta[221] = nn),
            (ta[222] = nD),
            (ta[223] = eg),
            (ta[224] = nj),
            (ta[225] = nC),
            (ta[226] = ng),
            (ta[227] = n_),
            (ta[228] = nx),
            (ta[229] = eW))
          : (eW = ta[229]))
      let as = n1 || t6,
        ar = tU?.live_url
      ;(ta[230] !== tz ||
      ta[231] !== nM ||
      ta[232] !== n6 ||
      ta[233] !== nH ||
      ta[234] !== n3 ||
      ta[235] !== nu ||
      ta[236] !== tc ||
      ta[237] !== tu ||
      ta[238] !== tm ||
      ta[239] !== as ||
      ta[240] !== ar
        ? ((e3 = (0, a.jsx)(tp, {
            accessMode: nM,
            canManageProjectSharing: tz,
            hasPendingAccessChange: nH,
            hasPendingSettingsChange: as,
            isSaving: nu,
            isSaveDisabled: n3,
            liveUrl: ar,
            projectId: tu,
            source: tm,
            onCancelChanges: n6,
            onClose: tc,
          })),
          (ta[230] = tz),
          (ta[231] = nM),
          (ta[232] = n6),
          (ta[233] = nH),
          (ta[234] = n3),
          (ta[235] = nu),
          (ta[236] = tc),
          (ta[237] = tu),
          (ta[238] = tm),
          (ta[239] = as),
          (ta[240] = ar),
          (ta[241] = e3))
        : (e3 = ta[241]),
        ta[242] !== nm
          ? ((e4 = nm
              ? (0, a.jsx)(E.OO, {
                  children: (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(_.A, {
                      id: "appgenShareDialog.publishBeforeSharing",
                      defaultMessage: "You can save sharing changes after this Site publishes successfully.",
                    }),
                  }),
                })
              : null),
            (ta[242] = nm),
            (ta[243] = e4))
          : (e4 = ta[243]),
        ta[244] !== tN ||
        ta[245] !== nk ||
        ta[246] !== nI ||
        ta[247] !== nL ||
        ta[248] !== n7 ||
        ta[249] !== tS ||
        ta[250] !== td ||
        ta[251] !== nF ||
        ta[252] !== nf ||
        ta[253] !== nU ||
        ta[254] !== nX ||
        ta[255] !== tz ||
        ta[256] !== nz ||
        ta[257] !== tb?.account_user_id ||
        ta[258] !== tv ||
        ta[259] !== nM ||
        ta[260] !== n8 ||
        ta[261] !== nK ||
        ta[262] !== ex ||
        ta[263] !== tK ||
        ta[264] !== tq ||
        ta[265] !== nu ||
        ta[266] !== tw ||
        ta[267] !== an ||
        ta[268] !== ai ||
        ta[269] !== tu ||
        ta[270] !== nT ||
        ta[271] !== n9 ||
        ta[272] !== ni
          ? ((e7 = tq
              ? (0, a.jsx)(e2, { error: an, inviteInputLabel: ex, profilePinToggle: tS ? null : ai }, tu)
              : tK || null == tN
                ? an
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      !0 === tN.show_private_tunnels_warning && "public" === nM && "public" !== tN.access_mode
                        ? (0, a.jsx)(E.OO, {
                            children: (0, a.jsx)(A.l, {
                              type: "warning",
                              content: (0, a.jsx)(_.A, {
                                id: "appgenShareDialog.publicPrivateServicesWarning",
                                defaultMessage:
                                  "If this site uses private tunnels, anyone with the link may be able to use features that reach connected private services.",
                              }),
                            }),
                          })
                        : null,
                      (0, a.jsx)(e6, {
                        currentAccessMode: tN.access_mode,
                        availableAccessModes: tN.available_access_modes,
                        canManageProjectSharing: tz,
                        hasInvitedPeople: nK || nL.length > 0,
                        isSaving: nu,
                        isWorkspaceAccount: tw,
                        audienceControl: td,
                        accessModeDraft: ni,
                        selectedAccessMode: nM,
                        onAccessModeChange: n8,
                        onClearAccessModeDraft: () => ns(null),
                      }),
                      (0, a.jsx)(e8, {
                        activeAccessGroups: nk,
                        activeAccessUsers: nI,
                        activeEditors: nL,
                        canManageEditors: nX || nU,
                        canRemoveEditors: tw ? tz : null != tN.personal_editor_access,
                        canManageInvitees: nz,
                        canInvitePersonalViewer: nF && nU,
                        canManageProjectSharing: tz,
                        canContinueUserChanges: nf,
                        isSaving: nu,
                        isWorkspaceAccount: tw,
                        removableAccessGroupIds: nT,
                        ownerEmail: tv,
                        ownerId: tb?.account_user_id,
                        onDowngradeEditor: (e) => {
                          n9({ kind: "editor", user: e }, "viewer").catch(eG)
                        },
                        onInviteEditor: (e) => {
                          !tw && e.email
                            ? n7({ kind: "external", action: { editor_email: e.email } })
                            : n9({ kind: "user", user: e }, "editor").catch(eQ)
                        },
                        onRemoveAccessUser: (e) => {
                          nc({ kind: "user", user: e })
                        },
                        onRemoveAccessGroup: (e) => {
                          nc({ kind: "group", group: e })
                        },
                        onRemoveEditor: (e) => {
                          nc({ kind: "editor", user: e })
                        },
                      }),
                    ],
                  })),
            (ta[244] = tN),
            (ta[245] = nk),
            (ta[246] = nI),
            (ta[247] = nL),
            (ta[248] = n7),
            (ta[249] = tS),
            (ta[250] = td),
            (ta[251] = nF),
            (ta[252] = nf),
            (ta[253] = nU),
            (ta[254] = nX),
            (ta[255] = tz),
            (ta[256] = nz),
            (ta[257] = tb?.account_user_id),
            (ta[258] = tv),
            (ta[259] = nM),
            (ta[260] = n8),
            (ta[261] = nK),
            (ta[262] = ex),
            (ta[263] = tK),
            (ta[264] = tq),
            (ta[265] = nu),
            (ta[266] = tw),
            (ta[267] = an),
            (ta[268] = ai),
            (ta[269] = tu),
            (ta[270] = nT),
            (ta[271] = n9),
            (ta[272] = ni),
            (ta[273] = e7))
          : (e7 = ta[273]),
        ta[274] !== tN || ta[275] !== td || ta[276] !== tK || ta[277] !== tq
          ? ((e9 =
              (tq || tK || null == tN) && td?.draft != null
                ? (0, a.jsx)(E.OO, {
                    children: (0, a.jsx)("p", { className: "text-sm text-secondary", children: td.notice }),
                  })
                : null),
            (ta[274] = tN),
            (ta[275] = td),
            (ta[276] = tK),
            (ta[277] = tq),
            (ta[278] = e9))
          : (e9 = ta[278]))
      let al = !tS && !tq && ai
      return (
        ta[279] !== t5 ||
        ta[280] !== nu ||
        ta[281] !== tw ||
        ta[282] !== ai ||
        ta[283] !== tu ||
        ta[284] !== t2 ||
        ta[285] !== t9 ||
        ta[286] !== t0 ||
        ta[287] !== ne ||
        ta[288] !== tF
          ? ((te =
              tF &&
              (0, a.jsx)(
                eC,
                {
                  remixEnabled: t5,
                  remixDisabled: nu || null == t0 || t2,
                  remixUnavailable: t2,
                  remixSaveFailed: t9,
                  onRemixChange: (e) => {
                    ;(t4(e), ne())
                  },
                  profilePin: ai,
                  isWorkspaceAccount: tw,
                },
                tu,
              )),
            (ta[279] = t5),
            (ta[280] = nu),
            (ta[281] = tw),
            (ta[282] = ai),
            (ta[283] = tu),
            (ta[284] = t2),
            (ta[285] = t9),
            (ta[286] = t0),
            (ta[287] = ne),
            (ta[288] = tF),
            (ta[289] = te))
          : (te = ta[289]),
        ta[290] !== tN || ta[291] !== tw || ta[292] !== ae || ta[293] !== no || ta[294] !== tl
          ? ((tt =
              null != no && null != tN
                ? (0, a.jsx)(e5, {
                    accessKind: "editor" === no.kind && !tw && no.user.email ? "user" : no.kind,
                    label: "group" === no.kind ? no.group.name : ti(no.user),
                    siteTitle: tl ?? "",
                    onConfirm: () => ae(no),
                    onClose: () => nc(null),
                  })
                : null),
            (ta[290] = tN),
            (ta[291] = tw),
            (ta[292] = ae),
            (ta[293] = no),
            (ta[294] = tl),
            (ta[295] = tt))
          : (tt = ta[295]),
        ta[296] !== eU ||
        ta[297] !== eW ||
        ta[298] !== e3 ||
        ta[299] !== e4 ||
        ta[300] !== e7 ||
        ta[301] !== e9 ||
        ta[302] !== al ||
        ta[303] !== te ||
        ta[304] !== tt ||
        ta[305] !== nB
          ? ((tn = (0, a.jsxs)(et.$t, {
              title: nB,
              onPortalContainerChange: nl,
              onSubmit: eU,
              headerContent: eW,
              footer: e3,
              children: [e4, e7, e9, al, te, tt],
            })),
            (ta[296] = eU),
            (ta[297] = eW),
            (ta[298] = e3),
            (ta[299] = e4),
            (ta[300] = e7),
            (ta[301] = e9),
            (ta[302] = al),
            (ta[303] = te),
            (ta[304] = tt),
            (ta[305] = nB),
            (ta[306] = tn))
          : (tn = ta[306]),
        tn
      )
    }
    function eQ() {}
    function eG() {}
    function e$(e) {
      let { accountUserId: t, ...n } = e
      return { ...n, target: { kind: "user", user: { account_user_id: t, name: n.label, email: null } } }
    }
    function eV(e) {
      return null == e.account_user_id
    }
    function eB(e) {
      return e.id
    }
    function eX(e) {
      return e.editable
    }
    function eH(e) {
      return e.id
    }
    function eY(e) {
      return null != e.email
    }
    function eZ(e) {
      return null == e.account_user_id ? [] : [e.account_user_id]
    }
    function eJ(e) {
      return "editor" === e.role
    }
    function e1(e) {
      return { ...e, account_user_id: e.account_user_id ?? null, email: e.email ?? null, name: e.name ?? null }
    }
    function e0(e) {
      return "editor" !== e.role
    }
    function e2(e) {
      let t,
        n,
        s = (0, i.c)(6),
        { error: r, inviteInputLabel: l, profilePinToggle: o } = e,
        [c, u] = (0, g.useState)(!1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => u(!0)), (s[0] = t)) : (t = s[0]),
        (0, ed.$)(t, c ? null : 1e4),
        s[1] !== r || s[2] !== l || s[3] !== o || s[4] !== c
          ? ((n = c
              ? r
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(E.OO, {
                      spacing: "large",
                      children: (0, a.jsx)(X.X, {
                        ariaLabel: l,
                        placeholder: l,
                        disabled: !0,
                        emptyMessage: null,
                        query: "",
                        onQueryChange: e4,
                        onSelectOption: e3,
                      }),
                    }),
                    (0, a.jsx)(ei.p, { kind: "link", children: (0, a.jsx)(es.gE, {}) }),
                    (0, a.jsx)(ei.p, { children: (0, a.jsx)(en.A, {}) }),
                    o,
                  ],
                })),
            (s[1] = r),
            (s[2] = l),
            (s[3] = o),
            (s[4] = c),
            (s[5] = n))
          : (n = s[5]),
        n
      )
    }
    function e3() {}
    function e4() {}
    function e5(e) {
      let t,
        n,
        s,
        l,
        o,
        c,
        u,
        d,
        p,
        m = (0, i.c)(27),
        { accessKind: f, label: h, onClose: x, onConfirm: v, siteTitle: y } = e,
        [b, w] = (0, g.useState)(!1)
      return (
        m[0] !== h
          ? ((t = (0, a.jsx)(_.A, {
              id: "appgenShareDialog.removeDialog.title",
              defaultMessage: "Remove {label}?",
              values: { label: h },
            })),
            (m[0] = h),
            (m[1] = t))
          : (t = m[1]),
        m[2] !== f || m[3] !== h || m[4] !== y
          ? ((n =
              "editor" === f
                ? (0, a.jsx)(_.A, {
                    id: "appgenShareDialog.removeDialog.editorDescription",
                    defaultMessage: "{label} will no longer be able to edit {siteTitle}",
                    values: { label: h, siteTitle: y },
                  })
                : (0, a.jsx)(_.A, {
                    id: "appgenShareDialog.removeDialog.accessListDescription",
                    defaultMessage:
                      "This removes {label} from this site\u2019s access list. Other sharing settings may still give them access.",
                    values: { label: (0, a.jsx)("span", { className: "font-medium text-default", children: h }) },
                  })),
            (m[2] = f),
            (m[3] = h),
            (m[4] = y),
            (m[5] = n))
          : (n = m[5]),
        m[6] !== b || m[7] !== x || m[8] !== v
          ? ((s = () => {
              b ||
                (w(!0),
                v().then(x, () => {
                  w(!1)
                }))
            }),
            (m[6] = b),
            (m[7] = x),
            (m[8] = v),
            (m[9] = s))
          : (s = m[9]),
        m[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(_.A, { id: "appgenShareDialog.removeDialog.cancel", defaultMessage: "Cancel" })),
            (m[10] = l))
          : (l = m[10]),
        m[11] !== b || m[12] !== x
          ? ((o = (0, a.jsx)(r.$, { color: "secondary", size: "xl", disabled: b, onClick: x, children: l })),
            (m[11] = b),
            (m[12] = x),
            (m[13] = o))
          : (o = m[13]),
        m[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(_.A, { id: "appgenShareDialog.removeDialog.confirm", defaultMessage: "Remove" })),
            (m[14] = c))
          : (c = m[14]),
        m[15] !== b
          ? ((u = (0, a.jsx)(r.$, {
              color: "danger",
              size: "xl",
              loading: b,
              disabled: b,
              type: "submit",
              children: c,
            })),
            (m[15] = b),
            (m[16] = u))
          : (u = m[16]),
        m[17] !== o || m[18] !== u
          ? ((d = (0, a.jsxs)(a.Fragment, { children: [o, u] })), (m[17] = o), (m[18] = u), (m[19] = d))
          : (d = m[19]),
        m[20] !== b || m[21] !== x || m[22] !== t || m[23] !== n || m[24] !== s || m[25] !== d
          ? ((p = (0, a.jsx)(et.Ic, {
              variant: "compact",
              title: t,
              subtitle: n,
              isDismissalDisabled: b,
              onClose: x,
              onSubmit: s,
              footer: d,
            })),
            (m[20] = b),
            (m[21] = x),
            (m[22] = t),
            (m[23] = n),
            (m[24] = s),
            (m[25] = d),
            (m[26] = p))
          : (p = m[26]),
        p
      )
    }
    function e6(e) {
      let t,
        n,
        s,
        r,
        o,
        c,
        u = (0, i.c)(24),
        {
          currentAccessMode: d,
          availableAccessModes: p,
          canManageProjectSharing: m,
          hasInvitedPeople: f,
          isSaving: g,
          isWorkspaceAccount: h,
          audienceControl: x,
          accessModeDraft: v,
          selectedAccessMode: y,
          onAccessModeChange: b,
          onClearAccessModeDraft: w,
        } = e
      u[0] !== m
        ? ((t = m
            ? void 0
            : (0, a.jsx)(_.A, {
                id: "appgenShareDialog.linkAccess.ownerOnly",
                defaultMessage: "Only the owner can change link access",
              })),
          (u[0] = m),
          (u[1] = t))
        : (t = u[1])
      let j = m ? void 0 : 0,
        C = m && !g,
        S = y ?? d
      return (
        u[2] !== v ||
        u[3] !== x ||
        u[4] !== p ||
        u[5] !== d ||
        u[6] !== f ||
        u[7] !== h ||
        u[8] !== b ||
        u[9] !== w ||
        u[10] !== C ||
        u[11] !== S
          ? ((n = (0, a.jsx)(
              tc,
              {
                availableAccessModes: p,
                canManageAccess: C,
                hasInvitedPeople: f,
                currentAccessMode: d,
                isWorkspaceAccount: h,
                audienceControl: x,
                accessModeDraft: v,
                selectedAccessMode: S,
                onAccessModeChange: b,
                onClearAccessModeDraft: w,
              },
              d,
            )),
            (u[2] = v),
            (u[3] = x),
            (u[4] = p),
            (u[5] = d),
            (u[6] = f),
            (u[7] = h),
            (u[8] = b),
            (u[9] = w),
            (u[10] = C),
            (u[11] = S),
            (u[12] = n))
          : (n = u[12]),
        u[13] !== j || u[14] !== n
          ? ((s = (0, a.jsx)("div", {
              className: "flex items-center justify-between gap-3",
              tabIndex: j,
              children: n,
            })),
            (u[13] = j),
            (u[14] = n),
            (u[15] = s))
          : (s = u[15]),
        u[16] !== t || u[17] !== s
          ? ((r = (0, a.jsx)(l.m, { content: t, children: s })), (u[16] = t), (u[17] = s), (u[18] = r))
          : (r = u[18]),
        u[19] !== x
          ? ((o =
              x?.notice == null ? null : (0, a.jsx)("p", { className: "text-sm text-secondary", children: x.notice })),
            (u[19] = x),
            (u[20] = o))
          : (o = u[20]),
        u[21] !== r || u[22] !== o
          ? ((c = (0, a.jsxs)(ei.p, { kind: "link", children: [r, o] })), (u[21] = r), (u[22] = o), (u[23] = c))
          : (c = u[23]),
        c
      )
    }
    function e8(e) {
      let t,
        n,
        s,
        r,
        l,
        o,
        c,
        u = (0, i.c)(67),
        {
          activeAccessGroups: d,
          activeAccessUsers: p,
          activeEditors: m,
          canManageEditors: f,
          canRemoveEditors: g,
          canManageInvitees: x,
          canInvitePersonalViewer: v,
          canManageProjectSharing: y,
          canContinueUserChanges: b,
          isSaving: j,
          isWorkspaceAccount: C,
          removableAccessGroupIds: S,
          ownerEmail: A,
          ownerId: E,
          onDowngradeEditor: D,
          onInviteEditor: M,
          onRemoveAccessGroup: I,
          onRemoveAccessUser: k,
          onRemoveEditor: L,
        } = e,
        P = (0, h.A)(),
        { accountId: O } = (0, w.As)()
      if (
        u[0] !== O ||
        u[1] !== d ||
        u[2] !== p ||
        u[3] !== m ||
        u[4] !== b ||
        u[5] !== v ||
        u[6] !== f ||
        u[7] !== x ||
        u[8] !== y ||
        u[9] !== g ||
        u[10] !== P ||
        u[11] !== j ||
        u[12] !== C ||
        u[13] !== D ||
        u[14] !== M ||
        u[15] !== I ||
        u[16] !== k ||
        u[17] !== L ||
        u[18] !== A ||
        u[19] !== E ||
        u[20] !== S
      ) {
        let e,
          i,
          l,
          o,
          c,
          h,
          w,
          N = (function ({ activeAccessUsers: e, currentAccountUserId: t, currentUserEmail: n }) {
            let a = e.find((e) => "owner" === e.role)
            if (null != a) return a
            let i = n?.trim().toLowerCase()
            if (null != i && i.length > 0) {
              let t = e.find((e) => e.email?.trim().toLowerCase() === i)
              if (null != t) return t
            }
            return null == t ? null : (e.find((e) => e.account_user_id === t) ?? null)
          })({ activeAccessUsers: p, currentAccountUserId: E, currentUserEmail: A })
        u[25] !== m ? ((e = new Set(m.map(tt))), (u[25] = m), (u[26] = e)) : (e = u[26])
        let T = e,
          R = y && b,
          q = f && b,
          K = g && b,
          z = x && b
        u[27] !== m || u[28] !== g || u[29] !== C
          ? ((i = new Set(C || !g ? [] : m.flatMap(te))), (u[27] = m), (u[28] = g), (u[29] = C), (u[30] = i))
          : (i = u[30])
        let F = i,
          U = p.filter(
            (e) =>
              e.account_user_id !== N?.account_user_id &&
              !T.has(e.account_user_id) &&
              (null != e.account_user_id || !e.email || !F.has(e.email.toLowerCase())),
          )
        u[31] !== p ? ((l = new Set(p.filter(e9).map(e7))), (u[31] = p), (u[32] = l)) : (l = u[32])
        let W = l
        u[33] !== P
          ? ((o = function (e) {
              return e.pending
                ? (0, a.jsx)(_.A, { id: "appgenShareDialog.invitation.pending", defaultMessage: "Pending" })
                : (0, Y.D)(P, e.size)
            }),
            (u[33] = P),
            (u[34] = o))
          : (o = u[34])
        let Q = o
        ;((n = ei.p),
          (r = "vertical-scroll-fade-mask -mx-5 flex max-h-64 flex-col gap-3 overflow-y-auto px-5"),
          (t = $.M),
          u[35] !== v || u[36] !== R || u[37] !== K || u[38] !== C || u[39] !== D || u[40] !== L || u[41] !== W
            ? ((c = (e) => ({
                id: `user:${e.account_user_id ?? e.email}`,
                label: ti(e),
                row: (0, a.jsx)(ea.h, {
                  avatar: (0, a.jsx)(ta, { user: e }),
                  label: ti(e),
                  renderIdentity: (t, n) => (0, a.jsx)(tn, { secondaryLabelId: n, user: e, children: t }),
                  secondaryLabel: ts(e),
                  trailingContent: (0, a.jsx)(tr, {
                    value: "edit",
                    readOnly: null == e.account_user_id || !K,
                    onChange:
                      (C ? R : K && null != e.email && (v || W.has(e.email.toLowerCase()))) && null != e.account_user_id
                        ? (t) => {
                            "visit" === t && D(e)
                          }
                        : void 0,
                    onRemoveAccess:
                      null != e.account_user_id && K
                        ? () => {
                            L(e)
                          }
                        : void 0,
                  }),
                }),
              })),
              (u[35] = v),
              (u[36] = R),
              (u[37] = K),
              (u[38] = C),
              (u[39] = D),
              (u[40] = L),
              (u[41] = W),
              (u[42] = c))
            : (c = u[42]),
          u[43] !== q || u[44] !== z || u[45] !== j || u[46] !== C || u[47] !== M || u[48] !== k
            ? ((h = (e) => ({
                id: `user:${e.account_user_id ?? e.email}`,
                label: ti(e),
                row: (0, a.jsx)(ea.h, {
                  avatar: (0, a.jsx)(ta, { user: e }),
                  label: ti(e),
                  renderIdentity: (t, n) => (0, a.jsx)(tn, { secondaryLabelId: n, user: e, children: t }),
                  secondaryLabel: ts(e),
                  trailingContent: (0, a.jsx)(tr, {
                    readOnly: !z || !e.editable || (j && null == e.account_user_id),
                    onChange:
                      q && (C ? null != e.account_user_id : null == e.account_user_id && null != e.email)
                        ? (t) => {
                            "edit" === t && M(e)
                          }
                        : void 0,
                    onRemoveAccess:
                      z && e.editable && (!j || null != e.account_user_id)
                        ? () => {
                            k(e)
                          }
                        : void 0,
                  }),
                }),
              })),
              (u[43] = q),
              (u[44] = z),
              (u[45] = j),
              (u[46] = C),
              (u[47] = M),
              (u[48] = k),
              (u[49] = h))
            : (h = u[49]),
          u[50] !== O || u[51] !== R || u[52] !== z || u[53] !== Q || u[54] !== C || u[55] !== I || u[56] !== S
            ? ((w = (e) => ({
                id: `group:${e.id}`,
                label: e.name,
                isTeam: !0,
                row: (0, a.jsx)(ea.h, {
                  avatar: (0, a.jsx)(B.K, { groupId: e.id }),
                  label: e.name,
                  secondaryLabel: Q(e),
                  team: !e.pending && C && null != O ? { accountId: O, groupId: e.id } : void 0,
                  trailingContent: (0, a.jsx)(tr, {
                    value: "editor" === e.role ? "edit" : "visit",
                    readOnly: !R || !e.editable,
                    onRemoveAccess:
                      z && S.has(e.id)
                        ? () => {
                            I(e)
                          }
                        : void 0,
                  }),
                }),
              })),
              (u[50] = O),
              (u[51] = R),
              (u[52] = z),
              (u[53] = Q),
              (u[54] = C),
              (u[55] = I),
              (u[56] = S),
              (u[57] = w))
            : (w = u[57]),
          (s = [
            ...(null == N
              ? []
              : [
                  {
                    id: `user:${N.account_user_id}`,
                    label: ti(N),
                    isOwner: !0,
                    row: (0, a.jsx)(ea.h, {
                      avatar: (0, a.jsx)(ta, { user: N }),
                      label: ti(N),
                      renderIdentity: (e, t) => (0, a.jsx)(tn, { secondaryLabelId: t, user: N, children: e }),
                      secondaryLabel: ts(N),
                      trailingContent: (0, a.jsx)("span", {
                        className: "text-sm text-codex-description",
                        children: (0, a.jsx)(_.A, {
                          id: "appgenShareDialog.permission.owner",
                          defaultMessage: "Owner",
                        }),
                      }),
                    }),
                  },
                ]),
            ...m.map(c),
            ...U.map(h),
            ...d.map(w),
          ]),
          (u[0] = O),
          (u[1] = d),
          (u[2] = p),
          (u[3] = m),
          (u[4] = b),
          (u[5] = v),
          (u[6] = f),
          (u[7] = x),
          (u[8] = y),
          (u[9] = g),
          (u[10] = P),
          (u[11] = j),
          (u[12] = C),
          (u[13] = D),
          (u[14] = M),
          (u[15] = I),
          (u[16] = k),
          (u[17] = L),
          (u[18] = A),
          (u[19] = E),
          (u[20] = S),
          (u[21] = t),
          (u[22] = n),
          (u[23] = s),
          (u[24] = r))
      } else ((t = u[21]), (n = u[22]), (s = u[23]), (r = u[24]))
      return (
        u[58] !== t || u[59] !== s
          ? ((l = (0, a.jsx)(t, { entries: s })), (u[58] = t), (u[59] = s), (u[60] = l))
          : (l = u[60]),
        u[61] !== r || u[62] !== l
          ? ((o = (0, a.jsx)("div", { className: r, children: l })), (u[61] = r), (u[62] = l), (u[63] = o))
          : (o = u[63]),
        u[64] !== n || u[65] !== o
          ? ((c = (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(n, { children: o }) })),
            (u[64] = n),
            (u[65] = o),
            (u[66] = c))
          : (c = u[66]),
        c
      )
    }
    function e7(e) {
      return e.email?.toLowerCase()
    }
    function e9(e) {
      return "viewer" === e.role && null == e.account_user_id
    }
    function te(e) {
      return e.account_user_id && e.email ? [e.email.toLowerCase()] : []
    }
    function tt(e) {
      return e.account_user_id
    }
    function tn(e) {
      let t,
        n,
        s = (0, i.c)(9),
        { children: r, secondaryLabelId: l, user: o } = e,
        c = null == o.account_user_id ? null : o.email,
        u = o.avatar_url
      s[0] !== o ? ((t = ti(o)), (s[0] = o), (s[1] = t)) : (t = s[1])
      let d = o.pending ? l : void 0
      return (
        s[2] !== r || s[3] !== c || s[4] !== t || s[5] !== d || s[6] !== o.avatar_url || s[7] !== o.email
          ? ((n = (0, a.jsx)(O.Ve, {
              inShareDialog: !0,
              accountUserId: null,
              accountUserEmail: c,
              avatarUrl: u,
              label: t,
              labelEmail: o.email,
              triggerDescriptionId: d,
              children: r,
            })),
            (s[2] = r),
            (s[3] = c),
            (s[4] = t),
            (s[5] = d),
            (s[6] = o.avatar_url),
            (s[7] = o.email),
            (s[8] = n))
          : (n = s[8]),
        n
      )
    }
    function ta(e) {
      var t
      let n,
        s,
        r,
        l,
        o,
        u = (0, i.c)(18),
        { user: d } = e,
        { accountId: p, userId: m, email: f, profilePictureUrlAtLogin: g } = (0, w.As)(),
        { data: h } = (0, S.YL)()
      u[0] !== h?.account_user_id || u[1] !== f || u[2] !== d.account_user_id || u[3] !== d.email
        ? ((n =
            (null != d.account_user_id && d.account_user_id === h?.account_user_id) ||
            (null != f && d.email?.toLowerCase() === f.toLowerCase())),
          (u[0] = h?.account_user_id),
          (u[1] = f),
          (u[2] = d.account_user_id),
          (u[3] = d.email),
          (u[4] = n))
        : (n = u[4])
      let _ = n,
        x = null == d.avatar_url && "owner" === d.role && _,
        { isProfileVisible: v } = (0, G.D)(),
        y = x && v
      u[5] !== p || u[6] !== y || u[7] !== m
        ? ((s = (0, R.m)({ accountId: p, userId: m, enabled: y })), (u[5] = p), (u[6] = y), (u[7] = m), (u[8] = s))
        : (s = u[8])
      let { data: b } = (0, c.I)(s),
        C = d.avatar_url
      x && (C = null == b ? g : b.profile_details.profile_picture_url)
      let A = C
      return (
        u[9] !== d.account_user_id || u[10] !== d.email
          ? ((r = d.account_user_id ?? d.email?.toLowerCase()),
            (u[9] = d.account_user_id),
            (u[10] = d.email),
            (u[11] = r))
          : (r = u[11]),
        u[12] !== d
          ? ((l = (t = d).name ?? t.email ?? t.account_user_id?.replace(/[-_]/g, " ") ?? ""), (u[12] = d), (u[13] = l))
          : (l = u[13]),
        u[14] !== C || u[15] !== r || u[16] !== l
          ? ((o = (0, a.jsx)(j.T, { size: "group", avatarUrl: A, colorKey: r, name: l })),
            (u[14] = C),
            (u[15] = r),
            (u[16] = l),
            (u[17] = o))
          : (o = u[17]),
        o
      )
    }
    function ti(e) {
      return e.name ?? e.email ?? e.account_user_id ?? ""
    }
    function ts(e) {
      return e.pending
        ? (0, a.jsx)(_.A, { id: "appgenShareDialog.invitation.pending", defaultMessage: "Pending" })
        : null == e.name
          ? null
          : (e.email ?? null)
    }
    function tr(e) {
      let t,
        n,
        s,
        r,
        l = (0, i.c)(14),
        { value: o, readOnly: c, onChange: u, onRemoveAccess: d } = e,
        p = void 0 === o ? "visit" : o,
        m = (0, h.A)()
      if (void 0 !== c && c) {
        let e
        return (
          l[0] !== p
            ? ((e = (0, a.jsx)("span", {
                className: "text-sm text-codex-description",
                children: (0, a.jsx)(to, { permission: p }),
              })),
              (l[0] = p),
              (l[1] = e))
            : (e = l[1]),
          e
        )
      }
      l[2] !== u || l[3] !== p
        ? ((t = null == u ? [p] : ["visit", "edit"]), (l[2] = u), (l[3] = p), (l[4] = t))
        : (t = l[4])
      let f = t
      return (
        l[5] !== m || l[6] !== f
          ? ((n = f.map((e) => ({
              value: e,
              ariaLabel: m.formatMessage(tg[e]),
              description: m.formatMessage(tg[`${e}Description`]),
            }))),
            (l[5] = m),
            (l[6] = f),
            (l[7] = n))
          : (n = l[7]),
        l[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(_.A, { id: "appgenShareDialog.permission.remove", defaultMessage: "Remove access" })),
            (l[8] = s))
          : (s = l[8]),
        l[9] !== u || l[10] !== d || l[11] !== n || l[12] !== p
          ? ((r = (0, a.jsx)(ee.e, {
              opticallyAlign: "end",
              options: n,
              renderLabel: tl,
              removeLabel: s,
              value: p,
              variant: "inline",
              onChange: u,
              onRemoveAccess: d,
            })),
            (l[9] = u),
            (l[10] = d),
            (l[11] = n),
            (l[12] = p),
            (l[13] = r))
          : (r = l[13]),
        r
      )
    }
    function tl(e) {
      return (0, a.jsx)(to, { permission: e })
    }
    function to(e) {
      let t,
        n = (0, i.c)(2),
        { permission: s } = e,
        r = tg[s]
      return (n[0] !== r ? ((t = (0, a.jsx)(_.A, { ...r })), (n[0] = r), (n[1] = t)) : (t = n[1]), t)
    }
    function tc(e) {
      let t,
        n,
        s,
        r,
        l,
        o,
        u = (0, i.c)(16),
        {
          availableAccessModes: d,
          canManageAccess: p,
          currentAccessMode: f,
          hasInvitedPeople: g,
          isWorkspaceAccount: h,
          audienceControl: x,
          accessModeDraft: v,
          selectedAccessMode: y,
          onAccessModeChange: b,
          onClearAccessModeDraft: j,
        } = e,
        A = (0, em.dy)({ availableAccessModes: d, currentAccessMode: f, isWorkspaceAccount: h }),
        { data: E } = (0, S.YL)(),
        D = E?.name?.trim(),
        { accountId: M, userId: I } = (0, w.As)(),
        L = h && E?.id === M
      ;(u[0] !== M || u[1] !== I ? ((t = { accountId: M, userId: I }), (u[0] = M), (u[1] = I), (u[2] = t)) : (t = u[2]),
        u[3] !== M || u[4] !== t
          ? ((n = ["workspace", M, "owner_count", t]), (u[3] = M), (u[4] = t), (u[5] = n))
          : (n = u[5]))
      let P =
        null != M && null != I && L && A.some(td)
          ? (e) => {
              let { signal: t } = e
              return C.Request.safeGet("/accounts/{account_id}/users/owner_count", {
                parameters: { path: { account_id: M } },
                expectedIdentity: { accountId: M, userId: I },
                isExpectedError: tu,
                signal: t,
              })
            }
          : m.hT
      u[6] !== n || u[7] !== P
        ? ((s = { queryKey: n, queryFn: P, staleTime: W.D.ONE_MINUTE, retry: !1 }), (u[6] = n), (u[7] = P), (u[8] = s))
        : (s = u[8])
      let { data: O } = (0, c.I)(s),
        N = !h && !g
      u[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { admins_only: 0, custom: 0, workspace_all: 2, public: 3 }), (u[9] = r))
        : (r = u[9])
      let T = r
      ;(u[10] !== p || u[11] !== L || u[12] !== N || u[13] !== O
        ? ((l = (e) => {
            let { disabled: t, value: n } = e
            return {
              description:
                "workspace_all" === n && L && O?.total_count != null
                  ? (0, a.jsx)(_.A, { ...tg.workspaceMemberCount, values: { count: O.total_count } })
                  : (0, a.jsx)(_.A, { ...tg["custom" === n && N ? "admins_onlyDescription" : `${n}Description`] }),
              disabled: t || !p,
              icon: (function (e) {
                switch (e) {
                  case "admins_only":
                  case "custom":
                    return (0, a.jsx)(k.esp, {})
                  case "workspace_all":
                    return (0, a.jsx)(k.TGw, {})
                  case "public":
                    return (0, a.jsx)(k.cfl, {})
                }
              })(n),
              value: n,
            }
          }),
          (u[10] = p),
          (u[11] = L),
          (u[12] = N),
          (u[13] = O),
          (u[14] = l))
        : (l = u[14]),
        u[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (e, t) => T[e.value] - T[t.value]), (u[15] = o))
          : (o = u[15]))
      let R = {
        disabled: !p,
        iconVariant: "thumbnail",
        options: A.map(l).toSorted(o),
        value: y,
        renderLabel: (e) => {
          let t = A.find((t) => {
            let { value: n } = t
            return n === e
          })?.value
          if (null == t) return null
          if ("custom" === t && N) return (0, a.jsx)(_.A, { ...tg.admins_only })
          if ("workspace_all" === t && L && D) return D
          let n = tg[t]
          return (
            "public" === t ? (n = tg.publicLabel) : "workspace_all" === t && (n = tg.workspaceLabel),
            (0, a.jsx)(_.A, { ...n })
          )
        },
        onChange: b,
      }
      return null == x ? (0, a.jsx)(Z.d, { ...R }) : x.renderDropdown(R, v, j)
    }
    function tu() {
      return !0
    }
    function td(e) {
      let { value: t } = e
      return "workspace_all" === t
    }
    function tp(e) {
      let t,
        n,
        c,
        u,
        d,
        p,
        m = (0, i.c)(31),
        {
          accessMode: g,
          canManageProjectSharing: x,
          hasPendingAccessChange: v,
          hasPendingSettingsChange: y,
          isSaving: b,
          isSaveDisabled: w,
          liveUrl: j,
          projectId: C,
          source: S,
          onCancelChanges: A,
          onClose: E,
        } = e,
        k = (0, f.gh)(z.u),
        L = (0, h.A)()
      m[0] !== j || m[1] !== k ? ((t = (0, eN.t)(k, j)), (m[0] = j), (m[1] = k), (m[2] = t)) : (t = m[2])
      let P = t
      m[3] !== j ? ((n = tm({ action: "copyLink", liveUrl: j })), (m[3] = j), (m[4] = n)) : (n = m[4])
      let O = n
      m[5] !== j ? ((c = tm({ action: "visit", liveUrl: j })), (m[5] = j), (m[6] = c)) : (c = m[6])
      let T = c,
        R = null == j && !x
      m[7] !== g || m[8] !== v
        ? ((u =
            v && "public" === g
              ? (0, a.jsx)(_.A, { id: "appgenShareDialog.publish", defaultMessage: "Publish" })
              : void 0),
          (m[7] = g),
          (m[8] = v),
          (m[9] = u))
        : (u = m[9])
      let q = v || y
      return (
        m[10] !== g ||
        m[11] !== O ||
        m[12] !== R ||
        m[13] !== v ||
        m[14] !== y ||
        m[15] !== L ||
        m[16] !== j ||
        m[17] !== C ||
        m[18] !== k ||
        m[19] !== S ||
        m[20] !== P ||
        m[21] !== T
          ? ((d =
              void 0 === j || v || y
                ? null
                : (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      R
                        ? (0, a.jsx)(l.m, {
                            content: (0, a.jsx)(_.A, {
                              id: "appgenShareDialog.publish.ownerRequired",
                              defaultMessage: "Only the owner can publish the first version",
                            }),
                            children: (0, a.jsx)("span", {
                              "aria-disabled": "true",
                              "aria-label": L.formatMessage({
                                id: "appgenShareDialog.publish",
                                defaultMessage: "Publish",
                              }),
                              className: "inline-flex",
                              role: "button",
                              tabIndex: 0,
                              children: (0, a.jsx)(r.$, {
                                "aria-hidden": "true",
                                color: "secondary",
                                disabled: !0,
                                size: "xl",
                                children: (0, a.jsx)(_.A, {
                                  id: "appgenShareDialog.publish",
                                  defaultMessage: "Publish",
                                }),
                              }),
                            }),
                          })
                        : null,
                      R
                        ? null
                        : (0, a.jsx)(l.m, {
                            content: T,
                            children: (0, a.jsx)("span", {
                              className: "inline-flex",
                              children: (0, a.jsxs)(r.$, {
                                color: "primary",
                                variant: "outline",
                                disabled: null == j,
                                size: "xl",
                                onClick: (e) => {
                                  null == j ||
                                    P(e) ||
                                    (0, D.PQ)({
                                      event: e,
                                      href: j,
                                      initiator: "mcp_app_resource",
                                      openTarget: "external-browser",
                                    })
                                },
                                children: [
                                  null != j
                                    ? (0, a.jsx)(M.g, { size: 20, href: j, openTarget: "external-browser" })
                                    : null,
                                  (0, a.jsx)(_.A, { id: "appgenShareDialog.visit", defaultMessage: "Visit" }),
                                ],
                              }),
                            }),
                          }),
                      R
                        ? null
                        : (0, a.jsx)(l.m, {
                            content: O,
                            children: (0, a.jsx)("span", {
                              className: "inline-flex",
                              children: (0, a.jsxs)(r.$, {
                                color: "primary",
                                variant: "outline",
                                disabled: null == j,
                                size: "xl",
                                onClick: () => {
                                  null != j &&
                                    (0, eo.lW)(j).then((e) => {
                                      if (e) {
                                        try {
                                          ;(0, N.yy)(k, s.CodexSitesSharingEvent, {
                                            accessMode: null == g ? void 0 : ez[g],
                                            action: s.CodexSitesSharingAction.CODEX_SITES_SHARING_ACTION_LINK_COPIED,
                                            projectId: C,
                                            source: S,
                                          })
                                        } catch {}
                                        ;(0, H.o)(k)
                                      }
                                    })
                                },
                                children: [
                                  (0, a.jsx)(I.I, { "aria-hidden": !1, asset: o.U }),
                                  (0, a.jsx)(_.A, { id: "appgenShareDialog.copyLink", defaultMessage: "Copy link" }),
                                ],
                              }),
                            }),
                          }),
                    ],
                  })),
            (m[10] = g),
            (m[11] = O),
            (m[12] = R),
            (m[13] = v),
            (m[14] = y),
            (m[15] = L),
            (m[16] = j),
            (m[17] = C),
            (m[18] = k),
            (m[19] = S),
            (m[20] = P),
            (m[21] = T),
            (m[22] = d))
          : (d = m[22]),
        m[23] !== w || m[24] !== b || m[25] !== A || m[26] !== E || m[27] !== u || m[28] !== q || m[29] !== d
          ? ((p = (0, a.jsx)(J.r, {
              saveLabel: u,
              onCancel: A,
              onClose: E,
              disabled: w,
              hasPendingAccessChange: q,
              hasPendingInvitees: !1,
              copyLink: d,
              isSaving: b,
            })),
            (m[23] = w),
            (m[24] = b),
            (m[25] = A),
            (m[26] = E),
            (m[27] = u),
            (m[28] = q),
            (m[29] = d),
            (m[30] = p))
          : (p = m[30]),
        p
      )
    }
    function tm({ action: e, liveUrl: t }) {
      if (null == t)
        switch (e) {
          case "copyLink":
            return (0, a.jsx)(_.A, {
              id: "appgenShareDialog.copyLinkDisabled.notPublished",
              defaultMessage: "Publish this site to copy its link",
            })
          case "visit":
            return (0, a.jsx)(_.A, {
              id: "appgenShareDialog.visitDisabled.notPublished",
              defaultMessage: "Publish this site before visiting it",
            })
        }
      return null
    }
    function tf(e) {
      let t = (0, V.xP)(e)
      return {
        chipLabel: t.chipLabel,
        colorKey: t.colorKey,
        id: `user:${e.account_user_id ?? e.email}`,
        label: t.label,
        secondaryLabel: t.secondaryLabel,
        target: { kind: "user", user: e },
      }
    }
    let tg = (0, x.YK)({
      admins_only: { id: "appgenAccess.state.ownerOnly", defaultMessage: "Just me" },
      custom: { id: "appgenAccess.state.privatelyShared", defaultMessage: "Only those invited" },
      public: { id: "appgenAccess.state.public", defaultMessage: "Anyone on the Internet" },
      workspace_all: {
        id: "appgenAccess.state.workspaceAll",
        defaultMessage: "Anyone in this workspace with the link",
      },
      publicLabel: { id: "appgenAccess.label.public", defaultMessage: "Public" },
      workspaceLabel: { id: "appgenAccess.label.workspace", defaultMessage: "Workspace" },
      workspaceMemberCount: {
        id: "appgenAccess.description.workspaceMemberCount",
        defaultMessage:
          "{count, plural, one {# workspace member with the link can view} other {# workspace members with the link can view}}",
      },
      admins_onlyDescription: {
        id: "appgenAccess.description.ownerOnly",
        defaultMessage: "People who already have access can view",
      },
      customDescription: {
        id: "appgenAccess.description.invited",
        defaultMessage: "You and people you\u2019ve added can view",
      },
      workspace_allDescription: {
        id: "appgenAccess.description.workspace",
        defaultMessage: "Workspace members with the link can view",
      },
      publicDescription: {
        id: "appgenAccess.description.public",
        defaultMessage: "Anyone on the internet with the link can view",
      },
      edit: { id: "appgenShareDialog.permission.editor", defaultMessage: "Editor" },
      editDescription: {
        id: "appgenShareDialog.permission.editDescription",
        defaultMessage: "Edit the site and publish updates. Access, download, change, or delete its data.",
      },
      visit: { id: "appgenShareDialog.permission.viewer", defaultMessage: "Viewer" },
      visitDescription: {
        id: "appgenShareDialog.permission.visitDescription",
        defaultMessage: "View and use the site.",
      },
    })
  },
  Cemj(e, t, n) {
    ;(n("PFjh"), n("OMIV"))
    var a = n("GVLO")
    let i = new WeakMap()
    n.d(
      t,
      {},
      {
        l: function (e, t, n, s) {
          if (e.get(a.Ut) === t)
            if (null == n) {
              var r
              let n = i.get(e.queryClient)
              n?.owner !== t ||
                (s &&
                  ((r = new URL(s)),
                  `https://oai-toolbar.${r.hostname.split(".").slice(1).join(".")}` !== n.toolbar_origin)) ||
                i.delete(e.queryClient)
            } else 1e3 * n.expires_at > Date.now() && i.set(e.queryClient, { ...n, owner: t })
        },
        t: function (e, t) {
          return (e) => !1
        },
      },
    )
  },
  Lb95(e, t, n) {
    var a = n("SZCv"),
      i = n.n(a),
      s = n("qmMi"),
      r = n("DBCl"),
      l = n("ASxG"),
      o = n("SPnB"),
      c = n("BCjz"),
      u = n("Kwur"),
      d = n("OWtl"),
      p = n("SQbA")
    let m = l.Ikc({
        type: l.euz("sites-deployment-progress"),
        payload: l.Ikc({
          project_id: l.YjP(),
          version_id: l.YjP(),
          deployment_id: l.YjP(),
          stage: l.k5n(["publishing", "finalizing", "ready", "failed"]),
          workspace_setup_pending: l
            .zMY()
            .nullish()
            .catch(void 0),
        }),
      }),
      f = (0, s.A4)(
        d.u,
        ({ deployment: e }) => h(e),
        ({ projectId: e, deployment: t }, { get: n, scope: a, set: i }) => {
          let s,
            l = n(o.chatGptAuthenticatedAccountId$),
            d = n(o.chatGptAuthenticatedUserId$),
            f = h(t)
          if ((i(f), null == l || null == d)) return
          let g = { accountId: l, userId: d, projectId: e, deploymentId: t.id },
            v = (n) =>
              !(null != f.updatedAt && Date.parse(n.updatedAt) < Date.parse(f.updatedAt)) &&
              n.projectId === e &&
              n.deploymentId === t.id &&
              n.versionId === t.versionId,
            y = a.query.getData(p.q2, g)
          null != y && v(y) && i((f = { ..._(f, y), url: null }))
          let b = !x(f.status),
            w = !0,
            j = !1,
            C = !1,
            S = !1,
            A = !1,
            E = 0,
            D = [],
            M = () => w && a.get(o.chatGptAuthenticatedAccountId$) === l && a.get(o.chatGptAuthenticatedUserId$) === d,
            I = () => {
              for (let e of D.splice(0)) e()
            },
            k = (t) => {
              let n = "succeeded" === t.status && "succeeded" !== f.status
              ;(i((f = t)), n && (0, p.y_)(a.queryClient, [e]), x(f.status) && (I(), C && T()))
            },
            L = () => document.hasFocus() && !document.hidden,
            P = (e) => {
              if (!M()) return
              if (j) {
                ;(null == s || "status" === e) && (s = e)
                return
              }
              j = !0
              let t = E,
                n = () => M() && t === E
              a.query
                .fetch(p.q2, g)
                .then(
                  (e) => {
                    n() && v(e) && ((C = x(e.status)), k(_(f, e)))
                  },
                  () => {
                    n() && !x(f.status) && k({ ...f, lookupUnavailable: !0 })
                  },
                )
                .finally(() => {
                  if (((j = !1), !M() || C)) return
                  let e = "status" === s || ("url" === s && null == f.url)
                  ;((s = void 0), e && P())
                })
            },
            O = L(),
            N = () => {
              let e = L()
              ;(e && !O && P(), (O = e))
            },
            T = () => {
              ;(document.removeEventListener("visibilitychange", N),
                window.removeEventListener("focus", N),
                window.removeEventListener("blur", N))
            },
            R = () => {
              ;((w = !1), I(), T(), a.query.cancel(p.q2, g))
            }
          if (!b) return (P(), R)
          let q = (0, c.uy)(
            "sites-deployment-progress",
            () =>
              u.Request.safeGet("/celsius/ws/user", {
                additionalHeaders: { [r.zBc]: l },
                expectedIdentity: { accountId: l, userId: d },
              }).then((e) => e.websocket_url),
            JSON.stringify([l, d]),
          )
          return (
            D.push(
              q.onMessage((n) => {
                let a = m.safeParse(n)
                if (!M() || !a.success || x(f.status)) return
                let i = a.data.payload
                if (
                  i.project_id !== e ||
                  i.deployment_id !== t.id ||
                  i.version_id !== t.versionId ||
                  ("finalizing" === f.stage && "publishing" === i.stage)
                )
                  return
                let s = "publishing"
                "ready" === i.stage ? (s = "succeeded") : "failed" === i.stage && (s = "failed")
                let r = i.workspace_setup_pending,
                  l = !1 === r && !1 !== f.workspaceSetupPending
                ;(k({
                  ...f,
                  workspaceSetupPending: !1 !== f.workspaceSetupPending && (r ?? f.workspaceSetupPending),
                  stage: i.stage,
                  confirmed: !0,
                  status: s,
                  lookupUnavailable: !1,
                }),
                  (x(f.status) || (l && null == f.url)) && P(x(f.status) ? "status" : "url"))
              }),
              q.onDisconnect(() => {
                S || ((S = !0), (A = !1), E++, k({ ...f, url: null }))
              }),
              q.onSubscribed(() => {
                ;((A = !S), S && ((S = !1), P("status")))
              }),
              q.onPotentialMissedMessages(() => {
                A && ((A = !1), P("status"))
              }),
              q.retainSubscription({ includeAllHistory: !0 }),
            ),
            document.addEventListener("visibilitychange", N),
            window.addEventListener("focus", N),
            window.addEventListener("blur", N),
            P(),
            R
          )
        },
        {
          key: ({ projectId: e, deployment: t }) => JSON.stringify([e, t.id, t.versionId]),
          autoDispose: 6e4,
          isEqual: i(),
        },
      )
    function g(e) {
      return "succeeded" === e ? "ready" : "failed" === e ? "failed" : "publishing"
    }
    function h(e) {
      return {
        status: e.status,
        stage: g(e.status),
        confirmed: !1,
        lookupUnavailable: !1,
        url: null,
        hasMcp: null,
        updatedAt: e.updatedAt,
      }
    }
    function _(e, t) {
      let n = x(t.status)
      if (x(e.status) && !n) return e
      let a = !n && ("finalizing" === t.publicationStage || "finalizing" === e.stage)
      return {
        workspaceSetupPending: null == t.url && e.workspaceSetupPending,
        status: a ? "publishing" : t.status,
        stage: a ? "finalizing" : g(t.status),
        lookupUnavailable: !1,
        confirmed: !0,
        url: t.url,
        hasMcp: t.hasMcp,
        updatedAt: t.updatedAt,
      }
    }
    function x(e) {
      return "succeeded" === e || "failed" === e
    }
    n.d(t, {}, { T: f, o: g })
  },
  Lnny(e, t, n) {
    var a = n("SZCv"),
      i = n.n(a),
      s = n("qmMi"),
      r = n("MrGp"),
      l = n("OWtl"),
      o = n("KaH3"),
      c = n("Lb95")
    let u = (0, s.i1)(
        l.u,
        (e, { get: t }) => {
          if (e?.deployment == null) return null
          let n = e.deployment,
            a = t(c.T, { projectId: e.projectId, deployment: n })
          return ("succeeded" === n.status || "failed" === n.status) &&
            ((null != n.updatedAt && (null == a.updatedAt || Date.parse(n.updatedAt) > Date.parse(a.updatedAt))) ||
              ("succeeded" !== a.status && "failed" !== a.status))
            ? {
                status: n.status,
                stage: (0, c.o)(n.status),
                lookupUnavailable: !1,
                confirmed: !0,
                url: a.url,
                hasMcp: e.hasMcp ?? null,
                updatedAt: n.updatedAt,
              }
            : a
        },
        { isEqual: i(), autoDispose: !0 },
      ),
      d = (0, s.i1)(
        l.u,
        ({ conversationId: e, resources: t }, { get: n }) =>
          t.flatMap((t) => {
            if ("appgen-app" !== t.type || null == t.deployment) return [t]
            let a = null == n(r.N4, e) ? n(u, t) : null
            return [m(t, a)]
          }),
        { isEqual: i(), autoDispose: !0 },
      ),
      p = (0, s.i1)(l.u, (e, { get: t }) => m(e, t(u, e)).publishedRevision ?? null, { autoDispose: !0 })
    function m(e, t) {
      if (null == e.deployment || (t?.status !== "succeeded" && t?.status !== "failed")) return e
      let n = e.publishedRevision
      return (
        "succeeded" === t.status ? (n = e.deployment.id) : n === e.deployment.id && (n = void 0),
        {
          ...(0, o.JM)(e, "succeeded" === t.status ? t.url : null),
          deployment: { ...e.deployment, status: t.status, updatedAt: t.updatedAt ?? e.deployment.updatedAt },
          publishedRevision: n,
          ...("succeeded" === t.status ? { hasMcp: t.hasMcp ?? e.hasMcp } : {}),
        }
      )
    }
    n.d(
      t,
      {},
      {
        Wq: function (e, t) {
          let n = e.deployment?.status,
            a = null == n ? null : (t?.stage ?? (0, c.o)(n))
          return { resource: m(e, t), stage: a }
        },
        fj: u,
        tb: d,
        z5: p,
      },
    )
  },
  KvJy(e, t, n) {
    var a = n("Fsq8"),
      i = n("qmMi"),
      s = n("DBCl"),
      r = n("Kwur"),
      l = n("OWtl"),
      o = n("rvFo"),
      c = n("SQbA")
    let u = ["appgen", "share-access"]
    async function d(e, t, n) {
      let a = await r.Request.safeGet("/websites/{project_id}/share_access", {
        parameters: { path: { project_id: e } },
        signal: t,
        expectedIdentity: n,
      })
      if (null == a) return null
      let { allowed_editors: i = [], users: s, ...l } = a
      return {
        ...l,
        users: [
          ...s.filter((e) => "owner" === e.role || !i.some((t) => t.account_user_id === e.account_user_id)),
          ...i.map((e) => ({ ...e, role: "editor", editable: !0 })),
        ],
      }
    }
    let p = (0, i.vU)(l.u, (e) => ({
      queryKey: [...u, e],
      queryFn: ({ signal: t }) => d(e, t),
      retry: !1,
      staleTime: o.D.ONE_MINUTE,
    }))
    async function m(e, t, n) {
      let a = [...u, e],
        i = new AbortController(),
        r = i.signal,
        l = setTimeout(() => i.abort(), 1e4)
      ;(await t.cancelQueries({ queryKey: a, exact: !0 }),
        await t.invalidateQueries({ queryKey: a, exact: !0, refetchType: "none" }))
      let o = t.fetchQuery({ queryKey: a, queryFn: ({ signal: t }) => d(e, t, n), retry: !1 }),
        c = t.getQueryCache().find({ queryKey: a, exact: !0 })?.promise
      try {
        let e = await (0, s._qC)(o, r)
        if (null == e) throw Error("Site access policy is unavailable")
        return e
      } catch (e) {
        throw (
          r.aborted &&
            t.getQueryCache().find({ queryKey: a, exact: !0 })?.promise === c &&
            (await t.cancelQueries({ queryKey: a, exact: !0 })),
          await t.invalidateQueries({ queryKey: a, exact: !0, refetchType: "none" }),
          e
        )
      } finally {
        clearTimeout(l)
      }
    }
    n.d(
      t,
      {},
      {
        DH: u,
        Jo: m,
        T6: function (e) {
          return (0, a.I)({
            scope: { id: `sites-share-access:${e}` },
            mutationKey: [...u, e, "update"],
            mutationFn: async ({ action: t, user: n, group: a }, { client: i }) => {
              let l,
                o = [...u, e],
                d = i.getQueryState(o),
                p = d?.isInvalidated || d?.status === "error" ? await m(e, i) : i.getQueryData(o),
                f = "access_mode" in t ? t.access_mode : p?.access_mode
              if (null == p || null == f || "admins_only" === f) throw Error("Site sharing is unavailable")
              try {
                if ("editor_changes" in t)
                  return (
                    await r.Request.safePost("/websites/{project_id}/share_access", {
                      parameters: { path: { project_id: e } },
                      requestBody: t,
                      retry: "never",
                    }),
                    (0, c.y_)(i, [e], "none"),
                    await m(e, i)
                  )
                if (
                  ((l = await r.Request.safePatch("/websites/{project_id}/share_access", {
                    parameters: { path: { project_id: e } },
                    requestBody: t,
                    retry: "never",
                  })),
                  void 0 === l || (null != l && !["pending", "accepted"].includes(l.status)))
                )
                  throw Error("Site sharing outcome is unavailable")
              } catch (t) {
                throw (await m(e, i).catch(() => void 0), t)
              }
              if ("editor_email" in t || (null != p.personal_editor_access && "email" in t && null == t.role))
                return ((0, c.y_)(i, [e], "none"), m(e, i))
              let g = i.getQueryCache().find({ queryKey: o, exact: !0 }),
                h = g?.promise,
                _ = new AbortController(),
                x = setTimeout(() => _.abort(), 1e4)
              if (
                (g?.state.fetchStatus !== "idle" && null != h && (await (0, s._qC)(h, _.signal).catch(() => void 0)),
                clearTimeout(x),
                _.signal.aborted &&
                  null != g &&
                  i.getQueryCache().find({ queryKey: o, exact: !0 }) === g &&
                  g.promise === h &&
                  "idle" !== g.state.fetchStatus &&
                  g.cancel({ revert: !0 }),
                i.getQueryState(o)?.status !== "success")
              )
                return
              let v = _.signal.aborted || i.getQueryState(o)?.isInvalidated,
                y = i.setQueryData(o, (e) => {
                  if (null == e) return e
                  let i = { ...e }
                  if (
                    ("access_mode" in t &&
                      (i.access_mode =
                        "workspace_all" === t.access_mode && l?.status === "pending" ? "custom" : t.access_mode),
                    !("access_mode" in t))
                  ) {
                    let s = t.role
                    ;(null != l && (s = "role-site-editor" === l.role_id ? "editor" : "viewer"),
                      null != n &&
                        (i.users = [
                          ...e.users.filter(
                            (e) =>
                              "owner" === e.role ||
                              ((null == n.account_user_id || e.account_user_id !== n.account_user_id) &&
                                (null != n.account_user_id ||
                                  null != e.account_user_id ||
                                  null == n.email ||
                                  e.email !== n.email)),
                          ),
                          ...(null == s ? [] : [{ ...n, role: s, pending: l?.status === "pending" }]),
                        ]),
                      null != a &&
                        (i.groups = [
                          ...e.groups.filter((e) => e.id !== a.id),
                          ...(null == s ? [] : [{ ...a, pending: l?.status === "pending" }]),
                        ]))
                  }
                  return i
                })
              return (
                v && i.invalidateQueries({ queryKey: o, exact: !0, refetchType: "none" }),
                (0, c.y_)(i, [e], "none"),
                y ?? void 0
              )
            },
          })
        },
        ox: p,
      },
    )
  },
  eZqd(e, t, n) {
    var a = n("QosV"),
      i = n("Wf1j")
    n.d(
      t,
      {},
      {
        X: function (e) {
          let t,
            n = (0, a.c)(3),
            { children: s } = e,
            r = (0, i.A)()
          return (n[0] !== s || n[1] !== r ? ((t = s(r)), (n[0] = s), (n[1] = r), (n[2] = t)) : (t = n[2]), t)
        },
      },
    )
  },
  HMTR(e, t, n) {
    var a = n("SZCv"),
      i = n.n(a),
      s = n("qmMi"),
      r = n("vdpW"),
      l = n("rwp7"),
      o = n("OWtl"),
      c = n("Faus"),
      u = n("v1hC")
    let d = (0, s.i1)(
        o.u,
        (e, { get: t }) => {
          let n = t(r.mz, e)
          return n?.type !== "commandExecution"
            ? null
            : {
                status: n.status,
                exitCode: n.exitCode,
                durationMs: n.durationMs,
                processId: n.processId,
                deferredOutputTurnId: null == n.aggregatedOutput ? n.deferredOutputTurnId : void 0,
              }
        },
        { isEqual: i(), autoDispose: !0 },
      ),
      p = (0, s.i1)(
        o.u,
        (e, { get: t }) =>
          null != e &&
          t(r.Ko, { hostId: e.hostId, threadId: e.threadId, entityKey: e.entityKey })?.agentMessageCompletedAtMsById?.[
            e.itemId
          ] != null,
      ),
      m = (0, s.i1)(o.u, (e, { get: t }) => {
        if (null == e) return null
        let n = t(r.mz, e)
        return n?.type === "reasoning" ? (0, c._U)((0, u.W)(n.summary)) : null
      }),
      f = (0, s.i1)(
        o.u,
        (e, { get: t }) => {
          if (null == e) return null
          let n = t(r.mz, e)
          if (n?.type !== "agentMessage") return null
          let { content: a } = (0, l.Dk)(n.text, !0, {
            phase: n.phase,
            unwrapPaddedCdataEnvelope: "final_answer" === n.phase,
          })
          return a.trim().length > 0 ? a : null
        },
        { isEqual: (e, t) => (null == e) == (null == t) },
      )
    n.d(t, {}, { CZ: m, Dr: d, lV: p, yv: f })
  },
  Faus(e, t, n) {
    var a = n("cC4N"),
      i = n("BsOx"),
      s = n("aVTP"),
      r = n("ZBE8")
    let l = "\x3c!--"
    function o(e) {
      let t = e.trimEnd().split(/\r?\n/)
      for (let e = t.length - 1; e >= 0; e -= 1) {
        let n = t[e]?.trim()
        if (!(
          !n ||
          (function (e) {
            let t = e
            for (; t.startsWith(l);) {
              let e = t.indexOf("--\x3e")
              if (-1 === e) return !0
              t = t.slice(e + 3).trimStart()
            }
            return !t || l.startsWith(t)
          })(n)
        )) {
          if ((0, r.g)(n)) return n
          try {
            let e = (0, a.Y)(n),
              [t] = e.children,
              i = (0, s.d)(e).trim()
            if (!i) continue
            if (t?.type === "paragraph" && 1 === t.children.length && t.children[0]?.type === "strong") return o(i) ?? i
            return i
          } catch {
            continue
          }
        }
      }
      return null
    }
    n.d(
      t,
      {},
      {
        S3: o,
        _U: function (e) {
          let t = null,
            n = !1
          for (let a of e.split(/\r?\n/)) {
            if (/^[ \t]*$/.test(a) || "\x3c!-- --\x3e" === a) {
              n = !1
              continue
            }
            if (/^(?: {4}| *\t)|[\r\0\uFEFF]| {2}$/.test(a)) return o(e)
            let i = a.match(/^ {0,3}#{1,6}[ \t]+([^#`*_~<>[\]\\&]+)$/)?.[1]
            if (i) {
              ;((t = i.trim() || t), (n = !1))
              continue
            }
            let s = a.match(/^ {0,3}\*\*([^`*_~<>[\]\\&]+)\*\*[ \t]*$/)?.[1]
            if (s && !n && s === s.trim()) {
              ;((t = o(s) || t), (n = !0))
              continue
            }
            if (/[`*_~<>[\]\\&]/.test(a) || /^ {0,3}(?:[#>+=-]|\d+[.)](?:\s|$))/.test(a)) return o(e)
            n = !0
          }
          return t ?? o(e)
        },
        k2: function (e) {
          let t = e.trimStart(),
            n = t.match(/^\*\*[^\n]*?\*\*\s*/)
          if (n) return t.slice(n[0].length).trim()
          let s = e.match(/^#{1,3}[ \t]+([^#\\*_[\]`<>&\r\n]+)(?:\r?\n|$)/)
          if (s?.[1]?.trim()) return e.slice(s[0].length).trim()
          try {
            let [t, ...n] = (0, a.Y)(e).children ?? []
            if (
              t?.type === "heading" ||
              (t?.type === "paragraph" &&
                Array.isArray(t.children) &&
                1 === t.children.length &&
                t.children[0]?.type === "strong")
            )
              return (0, i.l)({ type: "root", children: n }).trim()
          } catch {}
          return e
        },
      },
    )
  },
  uQ1J(e, t, n) {
    n.d(t, { k: () => p })
    var a = n("ABep"),
      i = n("DBCl"),
      s = n("amW0"),
      r = n("jTFC"),
      l = n("q3j5"),
      o = n("QosV"),
      c = n("qmMi"),
      u = n("oz6U")
    function d(e) {
      let t,
        n,
        i = (0, o.c)(8),
        { className: s, conversationId: l, profile: d } = e,
        p = (0, c._U)(u.Hx, l),
        m = p?.avatar ?? null
      return (
        i[0] !== s || i[1] !== d
          ? ((t = (0, a.jsx)(r.qv, { className: s, profile: d })), (i[0] = s), (i[1] = d), (i[2] = t))
          : (t = i[2]),
        i[3] !== s || i[4] !== l || i[5] !== m || i[6] !== t
          ? ((n = (0, a.jsx)(r.Xm, { className: s, avatar: m, identity: l, animated: !1, loadingFallback: t })),
            (i[3] = s),
            (i[4] = l),
            (i[5] = m),
            (i[6] = t),
            (i[7] = n))
          : (n = i[7]),
        n
      )
    }
    function p(e, t, n) {
      let o,
        c = "shared" === e.scope || null == e.active_root_thread_id ? null : (0, i.JXB)(e.active_root_thread_id)
      return (
        (o = e.is_workspace_admin_dot
          ? (0, a.jsx)(r.Xm, { className: n, avatar: "bow-tie", useSavedAvatar: !1, animated: !1 })
          : null == c
            ? (0, a.jsx)(r.QR, { className: n, profile: e })
            : (0, a.jsx)(d, { className: n, conversationId: c, profile: e })),
        { conversationId: c, title: (0, l.x)(e.display_name) ? t.formatMessage(s.z) : e.display_name, icon: o }
      )
    }
  },
  btiy(e, t, n) {
    var a = n("qmMi"),
      i = n("SPnB"),
      s = n("svjy"),
      r = n("imTH"),
      l = n("uQ1J"),
      o = n("OWtl")
    let c = (0, a.i1)(o.u, ({ workspaceId: e, query: t }, { get: n }) => {
      let a = t.trim().replace(/^@/u, "").toLocaleLowerCase()
      if (!a || null == e || e !== n(i.chatGptAuthenticatedAccountId$)) return []
      let o = n(s.g)
      return n(r.e).flatMap((e) => {
        let t = e.service_account_account_user_id
        if (null == t) return []
        let { title: n, icon: i } = (0, l.k)(e, o, "size-5")
        return n.toLocaleLowerCase().includes(a)
          ? [
              {
                id: `user:${t}`,
                accountUserId: t,
                label: n,
                avatar: i,
                secondaryLabel: o.formatMessage(
                  {
                    id: "sharing.dotLabel",
                    defaultMessage: "{dot}",
                    description:
                      "Label below an agent's name in a team member list or sharing dialog. {dot} is the untranslated product term Dot.",
                  },
                  { dot: "Dot" },
                ),
              },
            ]
          : []
      })
    })
    n.d(t, {}, { $: c })
  },
  ji1g(e, t, n) {
    var a = n("zPtR"),
      i = n("iRMi"),
      s = n("Ab4H"),
      r = n("yGJW")
    n.d(
      t,
      {},
      {
        O: function (e, t, n, l) {
          for (let [o, c] of [
            ["site", i.CodexProfilePinKind.CODEX_PROFILE_PIN_KIND_SITE],
            ["skill", i.CodexProfilePinKind.CODEX_PROFILE_PIN_KIND_SKILL],
          ]) {
            let { removedCount: u, addedCount: d } = (0, s.SW)(
              t.filter((e) => e.kind === o).map((e) => e.artifact_id),
              n.filter((e) => e.kind === o).map((e) => e.artifact_id),
            )
            for (let [t, n] of [
              [u, i.CodexProfilePinAction.CODEX_PROFILE_PIN_ACTION_UNPIN],
              [d, i.CodexProfilePinAction.CODEX_PROFILE_PIN_ACTION_PIN],
            ])
              if (0 !== t)
                try {
                  ;(0, r.yy)(e, i.CodexProfilePinChanged, { count: (0, a.At)(t), action: n, entryPoint: l, kind: c })
                } catch {}
          }
        },
        p: function (e, t, n, a, s) {
          try {
            ;(0, r.yy)(e, i.CodexProfileShowcaseEditAction, {
              action: t,
              kind:
                "site" === n
                  ? i.CodexProfilePinKind.CODEX_PROFILE_PIN_KIND_SITE
                  : i.CodexProfilePinKind.CODEX_PROFILE_PIN_KIND_SKILL,
              entryPoint: a,
              pageScope: s,
            })
          } catch {}
        },
      },
    )
  },
  dEsd(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("zd8w"),
      r = n("Wf1j")
    function l(e) {
      return (0, a.jsx)(s.Fragment, { children: e.row }, e.id)
    }
    n.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            n,
            s = (0, i.c)(7),
            { entries: o } = e,
            { locale: c } = (0, r.A)()
          if (s[0] !== o || s[1] !== c) {
            let e
            ;(s[3] !== c
              ? ((e = (e, t) =>
                  Number(!!e.isTeam) - Number(!!t.isTeam) ||
                  Number(!!t.isOwner) - Number(!!e.isOwner) ||
                  Number(!!t.isSelf) - Number(!!e.isSelf) ||
                  e.label.localeCompare(t.label, c, { sensitivity: "base" })),
                (s[3] = c),
                (s[4] = e))
              : (e = s[4]),
              (t = o.toSorted(e).map(l)),
              (s[0] = o),
              (s[1] = c),
              (s[2] = t))
          } else t = s[2]
          return (s[5] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (s[5] = t), (s[6] = n)) : (n = s[6]), n)
        },
      },
    )
  },
  qCmE(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("qmMi"),
      r = n("iFq6"),
      l = n("UOa8"),
      o = n("MFZ6")
    n.d(
      t,
      {},
      {
        K: function (e) {
          let t,
            n,
            c = (0, i.c)(6),
            { groupId: u, size: d } = e,
            { accountId: p } = (0, l.As)(),
            { data: m } = (0, s._U)(r.l, p ?? "", { enabled: null != p }) ?? {}
          c[0] !== u || c[1] !== m ? ((t = m?.find((e) => e.id === u)), (c[0] = u), (c[1] = m), (c[2] = t)) : (t = c[2])
          let f = t,
            g = f?.avatar
          return (
            c[3] !== d || c[4] !== g
              ? ((n = (0, a.jsx)(o.y, { avatar: g, size: d })), (c[3] = d), (c[4] = g), (c[5] = n))
              : (n = c[5]),
            n
          )
        },
      },
    )
  },
  Vzcd(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("hwkA"),
      r = n("oyxz"),
      l = n("RNul")
    n.d(
      t,
      {},
      {
        r: function (e) {
          let t,
            n,
            o,
            c,
            u,
            d,
            p,
            m = (0, i.c)(30),
            {
              copyLink: f,
              disabled: g,
              hasPendingAccessChange: h,
              hasPendingInvitees: _,
              isSaving: x,
              isBusy: v,
              isCancelDisabled: y,
              inviteLabel: b,
              saveLabel: w,
              variant: j,
              onCancel: C,
              onClose: S,
            } = e,
            A = void 0 === v ? x : v,
            E = void 0 === y ? A : y,
            D = void 0 === j ? "default" : j,
            M = h || _
          if (x) {
            let e
            ;(m[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(r.A, { id: "shareDialog.primaryAction.saving", defaultMessage: "Saving" })),
                (m[0] = e))
              : (e = m[0]),
              (t = e))
          } else if (_) {
            let e
            ;(m[1] !== b
              ? ((e = b ?? (0, a.jsx)(r.A, { id: "shareDialog.primaryAction.invite", defaultMessage: "Invite" })),
                (m[1] = b),
                (m[2] = e))
              : (e = m[2]),
              (t = e))
          } else if (M) {
            let e
            ;(m[3] !== w
              ? ((e = w ?? (0, a.jsx)(r.A, { id: "shareDialog.primaryAction.save", defaultMessage: "Save" })),
                (m[3] = w),
                (m[4] = e))
              : (e = m[4]),
              (t = e))
          } else {
            let e
            ;(m[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(r.A, { id: "shareDialog.done", defaultMessage: "Done" })), (m[5] = e))
              : (e = m[5]),
              (t = e))
          }
          ;(m[6] !== f
            ? ((n = (0, a.jsx)("div", { className: "me-auto", children: f })), (m[6] = f), (m[7] = n))
            : (n = m[7]),
            m[8] !== M || m[9] !== E || m[10] !== C || m[11] !== D
              ? ((o =
                  M &&
                  (0, a.jsx)(s.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "xl",
                    gutterSize: "audienceReview" === D ? "sm" : void 0,
                    type: "button",
                    disabled: E,
                    onClick: C,
                    children: (0, a.jsx)(r.A, { id: "shareDialog.primaryAction.cancel", defaultMessage: "Cancel" }),
                  })),
                (m[8] = M),
                (m[9] = E),
                (m[10] = C),
                (m[11] = D),
                (m[12] = o))
              : (o = m[12]))
          let I = "audienceReview" === D ? "sm" : void 0,
            k = M ? "submit" : "button",
            L = x || A || (M && g),
            P = M ? void 0 : S
          return (
            m[13] !== x || m[14] !== t
              ? ((c = x ? (0, a.jsx)("span", { role: "status", children: t }) : t),
                (m[13] = x),
                (m[14] = t),
                (m[15] = c))
              : (c = m[15]),
            m[16] !== x
              ? ((u = x && (0, a.jsx)(l.y, { className: "icon-2xs" })), (m[16] = x), (m[17] = u))
              : (u = m[17]),
            m[18] !== x || m[19] !== c || m[20] !== u || m[21] !== I || m[22] !== k || m[23] !== L || m[24] !== P
              ? ((d = (0, a.jsxs)(s.$, {
                  color: "primary",
                  size: "xl",
                  gutterSize: I,
                  type: k,
                  disabled: L,
                  "aria-busy": x,
                  onClick: P,
                  children: [c, u],
                })),
                (m[18] = x),
                (m[19] = c),
                (m[20] = u),
                (m[21] = I),
                (m[22] = k),
                (m[23] = L),
                (m[24] = P),
                (m[25] = d))
              : (d = m[25]),
            m[26] !== d || m[27] !== n || m[28] !== o
              ? ((p = (0, a.jsxs)(a.Fragment, { children: [n, o, d] })),
                (m[26] = d),
                (m[27] = n),
                (m[28] = o),
                (m[29] = p))
              : (p = m[29]),
            p
          )
        },
      },
    )
  },
  aAsK(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("hwkA"),
      r = n("IUMq"),
      l = n("slpy"),
      o = n("on57"),
      c = n("oyxz"),
      u = n("bVeK"),
      d = n("GpIR")
    function p(e) {
      return e.stopPropagation()
    }
    n.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            n,
            m,
            f,
            g,
            h,
            _,
            x,
            v,
            y,
            b,
            w = (0, i.c)(48),
            {
              alignOffset: j,
              options: C,
              disabled: S,
              footer: A,
              indicatorVariant: E,
              renderLabel: D,
              mixed: M,
              opticallyAlign: I,
              removeLabel: k,
              sideOffset: L,
              size: P,
              variant: O,
              value: N,
              onChange: T,
              onRemoveAccess: R,
            } = e,
            q = void 0 !== S && S,
            K = void 0 === E ? "checkmark" : E,
            z = void 0 !== M && M,
            F = void 0 === O ? "default" : O,
            U = void 0 === P ? "sm" : P
          "field" === F ? (U = "xl") : "audienceReview" === F && (U = "lg")
          let W = "audienceReview" === F && d.A.permission
          w[0] !== W ? ((t = (0, o.A)(W, "enabled:text-default")), (w[0] = W), (w[1] = t)) : (t = w[1])
          let Q = "field" === F ? "outline" : "ghost",
            G = "field" !== F,
            $ = "inline" === F ? "2xs" : void 0
          ;(w[2] !== z || w[3] !== D || w[4] !== N
            ? ((n = z ? (0, a.jsx)(c.A, { id: "shareDialog.mixedRoles", defaultMessage: "Mixed" }) : D(N)),
              (w[2] = z),
              (w[3] = D),
              (w[4] = N),
              (w[5] = n))
            : (n = w[5]),
            w[6] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, a.jsx)(u.Aq_, {})), (w[6] = m)) : (m = w[6]),
            w[7] !== q ||
            w[8] !== I ||
            w[9] !== $ ||
            w[10] !== n ||
            w[11] !== t ||
            w[12] !== Q ||
            w[13] !== G ||
            w[14] !== U
              ? ((f = (0, a.jsxs)(s.$, {
                  className: t,
                  color: "secondary",
                  variant: Q,
                  size: U,
                  iconSize: "sm",
                  pill: G,
                  gutterSize: $,
                  opticallyAlign: I,
                  disabled: q,
                  children: [n, m],
                })),
                (w[7] = q),
                (w[8] = I),
                (w[9] = $),
                (w[10] = n),
                (w[11] = t),
                (w[12] = Q),
                (w[13] = G),
                (w[14] = U),
                (w[15] = f))
              : (f = w[15]),
            w[16] !== q || w[17] !== f
              ? ((g = (0, a.jsx)(r.W.Trigger, { disabled: q, children: f })), (w[16] = q), (w[17] = f), (w[18] = g))
              : (g = w[18]))
          let V = z ? "" : N
          if (
            (w[19] !== T || w[20] !== C
              ? ((h = (e) => {
                  let t = C.find((t) => t.value === e)
                  null != t && T?.(t.value)
                }),
                (w[19] = T),
                (w[20] = C),
                (w[21] = h))
              : (h = w[21]),
            w[22] !== q || w[23] !== K || w[24] !== C || w[25] !== D)
          ) {
            let e
            ;(w[27] !== q || w[28] !== K || w[29] !== D
              ? ((e = (e) =>
                  (0, a.jsx)(
                    l.m,
                    {
                      content: e.tooltipText,
                      children: (0, a.jsx)(r.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: K,
                        value: e.value,
                        disabled: q || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, a.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, a.jsx)("span", { children: D(e.value) }),
                            null == e.description
                              ? null
                              : (0, a.jsx)("span", {
                                  className: "text-sm text-pretty whitespace-normal text-secondary",
                                  children: e.description,
                                }),
                          ],
                        }),
                      }),
                    },
                    e.value,
                  )),
                (w[27] = q),
                (w[28] = K),
                (w[29] = D),
                (w[30] = e))
              : (e = w[30]),
              (_ = C.map(e)),
              (w[22] = q),
              (w[23] = K),
              (w[24] = C),
              (w[25] = D),
              (w[26] = _))
          } else _ = w[26]
          return (
            w[31] !== V || w[32] !== h || w[33] !== _
              ? ((x = (0, a.jsx)(r.W.RadioGroup, { value: V, onChange: h, children: _ })),
                (w[31] = V),
                (w[32] = h),
                (w[33] = _),
                (w[34] = x))
              : (x = w[34]),
            w[35] !== q || w[36] !== R || w[37] !== k
              ? ((v =
                  null == R
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(r.W.Separator, {}),
                          (0, a.jsx)(r.W.Item, { color: "danger", disabled: q, onSelect: R, children: k }),
                        ],
                      })),
                (w[35] = q),
                (w[36] = R),
                (w[37] = k),
                (w[38] = v))
              : (v = w[38]),
            w[39] !== j || w[40] !== A || w[41] !== L || w[42] !== x || w[43] !== v
              ? ((y = (0, a.jsxs)(r.W.Content, {
                  align: "end",
                  alignOffset: j,
                  minWidth: "auto",
                  sideOffset: L,
                  children: [x, v, A],
                })),
                (w[39] = j),
                (w[40] = A),
                (w[41] = L),
                (w[42] = x),
                (w[43] = v),
                (w[44] = y))
              : (y = w[44]),
            w[45] !== g || w[46] !== y
              ? ((b = (0, a.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: p,
                  children: (0, a.jsxs)(r.W, { children: [g, y] }),
                })),
                (w[45] = g),
                (w[46] = y),
                (w[47] = b))
              : (b = w[47]),
            b
          )
        },
      },
    )
  },
  MFZ6(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      r = n("oyQi")
    n.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            n,
            l,
            o = (0, i.c)(7),
            { avatar: c, size: u } = e,
            d = void 0 === u ? "md" : u
          return (
            o[0] !== d
              ? ((t = (0, s.A)(
                  "flex shrink-0 items-center justify-center rounded-full bg-secondary-soft",
                  { xs: "icon-sm", sm: "size-6", md: "size-7" }[d],
                )),
                (o[0] = d),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== c ? ((n = (0, a.jsx)(r.n, { avatar: c, size: "small" })), (o[2] = c), (o[3] = n)) : (n = o[3]),
            o[4] !== t || o[5] !== n
              ? ((l = (0, a.jsx)("span", { className: t, children: n })), (o[4] = t), (o[5] = n), (o[6] = l))
              : (l = o[6]),
            l
          )
        },
      },
    )
  },
  oyQi(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("slpy"),
      r = n("on57"),
      l = n("zd8w"),
      o = n("bVeK")
    n.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            n,
            c,
            u,
            d = (0, i.c)(16),
            { avatar: p, name: m, size: f } = e,
            [g, h] = (0, l.useState)(null),
            _ = p?.url,
            x = "large" === f ? o.ixU : o.oJq,
            v = "icon-sm"
          ;("large" === f ? (v = "size-12") : "sidebar" === f && (v = "icon-leading"),
            d[0] !== v
              ? ((t = (0, r.A)("flex shrink-0 items-center justify-center", v)), (d[0] = v), (d[1] = t))
              : (t = d[1]))
          let y = null == m ? void 0 : "img"
          ;(d[2] !== x || d[3] !== g || d[4] !== f || d[5] !== v || d[6] !== _
            ? ((n =
                null == _ || _ === g
                  ? (0, a.jsx)(x, { className: (0, r.A)("text-secondary", "sidebar" === f && "icon-leading") })
                  : (0, a.jsx)("img", {
                      className: (0, r.A)("object-contain", v),
                      alt: "",
                      draggable: !1,
                      onError: () => h(_),
                      src: _,
                    })),
              (d[2] = x),
              (d[3] = g),
              (d[4] = f),
              (d[5] = v),
              (d[6] = _),
              (d[7] = n))
            : (n = d[7]),
            d[8] !== m || d[9] !== t || d[10] !== y || d[11] !== n
              ? ((c = (0, a.jsx)("span", { className: t, role: y, "aria-label": m, children: n })),
                (d[8] = m),
                (d[9] = t),
                (d[10] = y),
                (d[11] = n),
                (d[12] = c))
              : (c = d[12]))
          let b = c
          return (
            d[13] !== b || d[14] !== m
              ? ((u = null == m ? b : (0, a.jsx)(s.m, { content: m, children: b })),
                (d[13] = b),
                (d[14] = m),
                (d[15] = u))
              : (u = d[15]),
            u
          )
        },
      },
    )
  },
  v7NL(e, t, n) {
    var a = n("QosV"),
      i = n("zd8w"),
      s = n("jDEJ"),
      r = n("bIvi")
    function l(e) {
      ;("function" == typeof e.preventDefault && e.preventDefault(),
        "function" == typeof e.stopPropagation && e.stopPropagation())
    }
    n.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            n,
            o,
            c,
            u,
            d,
            p,
            m,
            f,
            g,
            h,
            _,
            x,
            v,
            y,
            b,
            w,
            j,
            C = (0, a.c)(72),
            {
              items: S,
              isActive: A,
              getItemKey: E,
              onSelect: D,
              onHighlight: M,
              onEscape: I,
              autoHighlightFirst: k,
              clearHighlightOnMouseLeave: L,
              captureWindowKeydown: P,
              keyboardEventTarget: O,
              keyboardVariant: N,
              selectOnSpace: T,
              preserveHighlightOnItemsChange: R,
              numberShortcutCount: q,
              selectOnTab: K,
              requireKeyboardNavigationForSelection: z,
              shouldHandleKeyDown: F,
              highlightResetKey: U,
            } = e,
            W = void 0 === k || k,
            Q = void 0 !== L && L,
            G = void 0 !== P && P,
            $ = void 0 === N ? "default" : N,
            V = void 0 !== R && R,
            B = void 0 === q ? 0 : q,
            X = void 0 !== K && K,
            H = void 0 !== z && z
          C[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, s.Z)()), (C[0] = t)) : (t = C[0])
          let Y = t,
            Z = (0, i.useRef)(null),
            J = (0, i.useRef)(null),
            ee = (0, i.useRef)(!1),
            et = (0, i.useRef)(!1),
            en = (0, i.useRef)(null),
            ea = null == S ? 0 : S.length,
            [ei, es] = (0, i.useState)(W && ea > 0 ? 0 : -1),
            er = A && ei >= 0 && ei < ea ? (S?.[ei] ?? null) : null
          C[1] !== E || C[2] !== er
            ? ((n = null == er ? null : (E?.(er) ?? er)), (C[1] = E), (C[2] = er), (C[3] = n))
            : (n = C[3])
          let el = n
          C[4] !== S || C[5] !== M
            ? ((o = (e) => {
                M?.(S?.[e] ?? null, e)
              }),
              (C[4] = S),
              (C[5] = M),
              (C[6] = o))
            : (o = C[6])
          let eo = (0, i.useEffectEvent)(o)
          ;(C[7] !== W ||
          C[8] !== E ||
          C[9] !== U ||
          C[10] !== ei ||
          C[11] !== A ||
          C[12] !== S ||
          C[13] !== ea ||
          C[14] !== V
            ? ((c = () => {
                let e = en.current?.items,
                  t = null != en.current && en.current.highlightResetKey !== U
                ;(!A || t) && (et.current = !1)
                let n = !0 === V || ("user" === V && et.current),
                  a =
                    null == U || "user" === V
                      ? null != e && (t || null == S || e.length !== ea || e.some((e, t) => e !== S[t]))
                      : null != en.current && en.current.highlightResetKey !== U
                if (((en.current = { items: S, highlightResetKey: U }), !A || 0 === ea)) {
                  ;((ee.current = !1), -1 !== ei && es(-1))
                  return
                }
                if (ei >= 0 && ei < ea && ((n && null == E) || !a)) return
                let i = e?.[ei],
                  s = n && null != E && null != i ? (S?.findIndex((e) => E(e) === E(i)) ?? -1) : -1,
                  r = W ? 0 : -1
                ;(s >= 0 ? (r = s) : a && (ee.current = !1), ei !== r && es(r))
              }),
              (u = [W, E, U, ei, A, S, ea, V]),
              (C[7] = W),
              (C[8] = E),
              (C[9] = U),
              (C[10] = ei),
              (C[11] = A),
              (C[12] = S),
              (C[13] = ea),
              (C[14] = V),
              (C[15] = c),
              (C[16] = u))
            : ((c = C[15]), (u = C[16])),
            (0, i.useEffect)(c, u),
            C[17] !== ei || C[18] !== el || C[19] !== eo
              ? ((d = () => {
                  null == el ? eo(-1) : eo(ei)
                }),
                (C[17] = ei),
                (C[18] = el),
                (C[19] = eo),
                (C[20] = d))
              : (d = C[20]),
            C[21] !== ei || C[22] !== el ? ((p = [ei, el]), (C[21] = ei), (C[22] = el), (C[23] = p)) : (p = C[23]),
            (0, i.useEffect)(d, p),
            C[24] !== ei || C[25] !== A || C[26] !== ea
              ? ((m = () => {
                  let e = J.current === ei
                  if (((J.current = null), !A || e || ei < 0 || ei >= ea)) return
                  let t = Z.current
                  if (!t) return
                  let n = t.querySelectorAll('[data-list-navigation-item="true"]').item(ei)
                  n?.scrollIntoView({ block: "nearest" })
                }),
                (f = [ei, A, ea]),
                (C[24] = ei),
                (C[25] = A),
                (C[26] = ea),
                (C[27] = m),
                (C[28] = f))
              : ((m = C[27]), (f = C[28])),
            (0, i.useEffect)(m, f),
            C[29] !== S || C[30] !== ea || C[31] !== D
              ? ((g = (e) => {
                  let t = null != S && e >= 0 && e < ea ? S[e] : void 0
                  t && ((ee.current = !1), es(e), D(t, e))
                }),
                (C[29] = S),
                (C[30] = ea),
                (C[31] = D),
                (C[32] = g))
              : (g = C[32]))
          let ec = (0, r.K)(g)
          C[33] !== ei || C[34] !== A || C[35] !== ea
            ? ((h = (e) => {
                ;((ee.current = !1),
                  A && e >= 0 && e < ea && (et.current = !0),
                  A && e >= 0 && e < ea && e !== ei && ((J.current = e), es(e)))
              }),
              (C[33] = ei),
              (C[34] = A),
              (C[35] = ea),
              (C[36] = h))
            : (h = C[36])
          let eu = (0, r.K)(h)
          C[37] !== ea
            ? ((_ = (e) => {
                ;((ee.current = !0),
                  (et.current = !0),
                  (J.current = null),
                  es((t) => {
                    if (0 === ea) return -1
                    if (t < 0) return e >= 0 ? 0 : ea - 1
                    if (ea <= 0) return -1
                    let n = (t + e) % ea
                    return n < 0 ? n + ea : n
                  }))
              }),
              (C[37] = ea),
              (C[38] = _))
            : (_ = C[38])
          let ed = _
          C[39] !== W ||
          C[40] !== ei ||
          C[41] !== er ||
          C[42] !== A ||
          C[43] !== ea ||
          C[44] !== $ ||
          C[45] !== ed ||
          C[46] !== B ||
          C[47] !== I ||
          C[48] !== H ||
          C[49] !== ec ||
          C[50] !== T ||
          C[51] !== X ||
          C[52] !== F
            ? ((x = (e) => {
                if (!A) return !1
                let t = "nativeEvent" in e ? e.nativeEvent : e
                if (F?.(t) === !1 || t.isComposing || 229 === t.keyCode) return !1
                let { key: n } = e
                if (0 === ea) return "Escape" === n && !!I && (I(), l(e), !0)
                if ("ArrowDown" === n || (Y && e.ctrlKey && "n" === n)) return (ed(1), l(e), !0)
                if ("ArrowUp" === n || (Y && e.ctrlKey && "p" === n)) return (ed(-1), l(e), !0)
                if (B > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && /^[1-3]$/.test(n) && Number(n) <= Math.min(B, ea))
                  return (ec(Number(n) - 1), l(e), !0)
                if (
                  !e.altKey &&
                  !e.ctrlKey &&
                  !e.metaKey &&
                  !e.shiftKey &&
                  ("Enter" === n ||
                    ((X || "chatgpt" === $) && "Tab" === n) ||
                    ("chatgpt" === $ && " " === n && null != er && T?.(er)))
                ) {
                  if (H && !ee.current) return !1
                  let t = ei >= 0 ? ei : W ? 0 : -1
                  return t >= 0 && t < ea && (ec(t), l(e), !0)
                }
                return "Escape" === n
                  ? !!I && (I(), l(e), !0)
                  : (!H ||
                      (1 !== n.length && "Backspace" !== n && "Delete" !== n) ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.altKey ||
                      ((ee.current = !1), es(-1)),
                    !1)
              }),
              (C[39] = W),
              (C[40] = ei),
              (C[41] = er),
              (C[42] = A),
              (C[43] = ea),
              (C[44] = $),
              (C[45] = ed),
              (C[46] = B),
              (C[47] = I),
              (C[48] = H),
              (C[49] = ec),
              (C[50] = T),
              (C[51] = X),
              (C[52] = F),
              (C[53] = x))
            : (x = C[53])
          let ep = x
          ;(C[54] !== G || C[55] !== ep || C[56] !== A || C[57] !== O || C[58] !== H
            ? ((v = () => {
                if (!G || !A) return
                let e = (e) => {
                    ep(e)
                  },
                  t = () => {
                    ;((ee.current = !1), es(-1))
                  },
                  n = O ?? window
                return (
                  n.addEventListener("keydown", e, !0),
                  H &&
                    (n.addEventListener("beforeinput", t, !0),
                    n.addEventListener("compositionstart", t, !0),
                    n.addEventListener("paste", t, !0)),
                  () => {
                    ;(n.removeEventListener("keydown", e, !0),
                      n.removeEventListener("beforeinput", t, !0),
                      n.removeEventListener("compositionstart", t, !0),
                      n.removeEventListener("paste", t, !0))
                  }
                )
              }),
              (y = [G, ep, A, O, H]),
              (C[54] = G),
              (C[55] = ep),
              (C[56] = A),
              (C[57] = O),
              (C[58] = H),
              (C[59] = v),
              (C[60] = y))
            : ((v = C[59]), (y = C[60])),
            (0, i.useEffect)(v, y),
            C[61] !== ep
              ? ((b = (e) => {
                  let t = void 0 === e ? {} : e
                  return {
                    onKeyDown: (e) => {
                      ep(e) || t.onKeyDown?.(e)
                    },
                  }
                }),
                (C[61] = ep),
                (C[62] = b))
              : (b = C[62]))
          let em = b
          C[63] !== Q || C[64] !== eu || C[65] !== ec
            ? ((w = (e, t) => {
                let n = void 0 === t ? {} : t
                return {
                  onClick: (t) => {
                    ;(ec(e), n.onClick?.(t))
                  },
                  onMouseMove: (t) => {
                    ;(eu(e), n.onMouseMove?.(t))
                  },
                  onMouseLeave: () => {
                    Q && ((ee.current = !1), es(-1))
                  },
                  "data-list-navigation-item": "true",
                }
              }),
              (C[63] = Q),
              (C[64] = eu),
              (C[65] = ec),
              (C[66] = w))
            : (w = C[66])
          let ef = w
          return (
            C[67] !== em || C[68] !== ef || C[69] !== ep || C[70] !== ei
              ? ((j = {
                  highlightedIndex: ei,
                  setHighlightedIndex: es,
                  listRef: Z,
                  handleKeyDown: ep,
                  getInputProps: em,
                  getItemProps: ef,
                }),
                (C[67] = em),
                (C[68] = ef),
                (C[69] = ep),
                (C[70] = ei),
                (C[71] = j))
              : (j = C[71]),
            j
          )
        },
      },
    )
  },
  aRbG(e, t, n) {
    var a = n("QosV"),
      i = n("zd8w")
    n.d(
      t,
      {},
      {
        $: function (e, t) {
          let n,
            s,
            r = (0, a.c)(5),
            l = (0, i.useEffectEvent)(e)
          ;(r[0] !== t || r[1] !== l
            ? ((n = () => {
                if (null == t) return
                let e = window.setInterval(() => {
                  l()
                }, t)
                return () => {
                  window.clearInterval(e)
                }
              }),
              (r[0] = t),
              (r[1] = l),
              (r[2] = n))
            : (n = r[2]),
            r[3] !== t ? ((s = [t]), (r[3] = t), (r[4] = s)) : (s = r[4]),
            (0, i.useEffect)(n, s))
        },
      },
    )
  },
  Fsq8(e, t, n) {
    n.d(
      t,
      {},
      {
        I: function (e) {
          return e
        },
      },
    )
  },
  dQD8(e, t, n) {
    var a = n("DNn3")
    let i = { some: 0, all: 1 }
    n.d(
      t,
      {},
      {
        l: function (e, t, { root: n, margin: s, amount: r = "some" } = {}) {
          let l = (0, a.K)(e),
            o = new WeakMap(),
            c = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  let n = o.get(e.target)
                  if (!!n !== e.isIntersecting)
                    if (e.isIntersecting) {
                      let n = t(e.target, e)
                      "function" == typeof n ? o.set(e.target, n) : c.unobserve(e.target)
                    } else "function" == typeof n && (n(e), o.delete(e.target))
                })
              },
              { root: n, rootMargin: s, threshold: "number" == typeof r ? r : i[r] },
            )
          return (l.forEach((e) => c.observe(e)), () => c.disconnect())
        },
      },
    )
  },
  mEbU(e, t, n) {
    var a = n("zd8w"),
      i = n("dQD8")
    n.d(
      t,
      {},
      {
        W: function (e, { root: t, margin: n, amount: s, once: r = !1, initial: l = !1 } = {}) {
          let [o, c] = (0, a.useState)(l)
          return (
            (0, a.useEffect)(() => {
              if (!e.current || (r && o)) return
              let a = { root: (t && t.current) || void 0, margin: n, amount: s }
              return (0, i.l)(e.current, () => (c(!0), r ? void 0 : () => c(!1)), a)
            }, [t, e, n, r, s]),
            o
          )
        },
      },
    )
  },
}
//# sourceMappingURL=400895.0ce5149a61.js.map
