export const __rspack_esm_ids = [271015]
export const __webpack_modules__ = {
  kPrN(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      s = n("dVr3"),
      r = n("DBCl"),
      a = n("zd8w"),
      l = n("OrGf"),
      c = n("eLzw"),
      d = n("IB5Z"),
      u = n("tgV8"),
      p = n("RxZZ"),
      f = n("kkEw"),
      h = n("dDkj"),
      m = n("a6Zv")
    function g(e) {
      let t,
        n,
        i = (0, o.c)(4),
        { lineDiffType: r } = e,
        l = (0, s.iy)()
      return (
        i[0] !== r || i[1] !== l
          ? ((t = () => {
              if (null == l) return
              let e = l.getDiffRenderOptions()
              e.lineDiffType !== r && l.setRenderOptions({ ...e, lineDiffType: r })
            }),
            (n = [r, l]),
            (i[0] = r),
            (i[1] = l),
            (i[2] = t),
            (i[3] = n))
          : ((t = i[2]), (n = i[3])),
        (0, a.useEffect)(t, n),
        null
      )
    }
    ;(n("wIFP"),
      n.d(
        t,
        {},
        {
          FileDiff: function (e) {
            let t,
              n,
              s,
              a,
              v,
              x,
              y,
              b,
              j,
              S,
              C,
              w,
              _,
              k,
              A,
              F,
              T,
              M = (0, o.c)(45)
            M[0] !== e
              ? (({ alignCommentGutter: a, lineDiffType: t, onPostRenderInstance: n, ...s } = e),
                (M[0] = e),
                (M[1] = t),
                (M[2] = n),
                (M[3] = s),
                (M[4] = a))
              : ((t = M[1]), (n = M[2]), (s = M[3]), (a = M[4]))
            let P = void 0 !== a && a,
              N = (0, h.P)(),
              I = (0, h._)(N),
              E = (0, p.iK)(r.oKj.lightCodeThemeId),
              B = (0, p.iK)(r.oKj.darkCodeThemeId),
              D = (0, p.iK)(r.oKj.diffMarkerStyle)
            ;(0, m.Y)()
            let O = "symbols" === D
            M[5] !== I || M[6] !== B || M[7] !== E
              ? ((v = "light" === I ? (0, f.oW)(E, "light") : (0, f.oW)(B, "dark")),
                (M[5] = I),
                (M[6] = B),
                (M[7] = E),
                (M[8] = v))
              : (v = M[8])
            let H = v
            if (M[9] !== P || M[10] !== H || M[11] !== t || M[12] !== n || M[13] !== s || M[14] !== O) {
              let e
              ;((0, f.aD)(void 0),
                M[25] !== s.fileDiff ? ((e = (0, d._)(s.fileDiff)), (M[25] = s.fileDiff), (M[26] = e)) : (e = M[26]))
              let o = e
              ;((y = c.U),
                M[27] !== t
                  ? ((b = null == t ? null : (0, i.jsx)(g, { lineDiffType: t })), (M[27] = t), (M[28] = b))
                  : (b = M[28]),
                (x = l.FileDiffPresentation),
                (j = s),
                (S = o),
                (C = P),
                (w = O ? "classic" : "bars"),
                (_ = t),
                M[29] !== n
                  ? ((k = (e, t, i) => {
                      ;((0, u.O8)(e, t), n?.(e, t, i))
                    }),
                    (M[29] = n),
                    (M[30] = k))
                  : (k = M[30]),
                (A = H.name),
                (M[9] = P),
                (M[10] = H),
                (M[11] = t),
                (M[12] = n),
                (M[13] = s),
                (M[14] = O),
                (M[15] = x),
                (M[16] = y),
                (M[17] = b),
                (M[18] = j),
                (M[19] = S),
                (M[20] = C),
                (M[21] = w),
                (M[22] = _),
                (M[23] = k),
                (M[24] = A))
            } else
              ((x = M[15]),
                (y = M[16]),
                (b = M[17]),
                (j = M[18]),
                (S = M[19]),
                (C = M[20]),
                (w = M[21]),
                (_ = M[22]),
                (k = M[23]),
                (A = M[24]))
            return (
              M[31] !== x ||
              M[32] !== I ||
              M[33] !== j ||
              M[34] !== S ||
              M[35] !== C ||
              M[36] !== w ||
              M[37] !== _ ||
              M[38] !== k ||
              M[39] !== A
                ? ((F = (0, i.jsx)(x, {
                    ...j,
                    fileDiff: S,
                    alignCommentGutter: C,
                    diffIndicators: w,
                    lineDiffType: _,
                    onPostRenderInstance: k,
                    theme: A,
                    themeType: I,
                  })),
                  (M[31] = x),
                  (M[32] = I),
                  (M[33] = j),
                  (M[34] = S),
                  (M[35] = C),
                  (M[36] = w),
                  (M[37] = _),
                  (M[38] = k),
                  (M[39] = A),
                  (M[40] = F))
                : (F = M[40]),
              M[41] !== y || M[42] !== b || M[43] !== F
                ? ((T = (0, i.jsxs)(y, { children: [b, F] })), (M[41] = y), (M[42] = b), (M[43] = F), (M[44] = T))
                : (T = M[44]),
              T
            )
          },
        },
      ))
  },
  eLzw(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      s = n("dVr3"),
      r = n("zd8w")
    let a = (0, n("CSxw").$t)(),
      l = (0, r.lazy)(async () => ({ default: (await n.e(517695).then(n.bind(n, "eaVa"))).PierreHighlightProvider }))
    n.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            n = (0, o.c)(3),
            { children: c } = e,
            d = (0, s.iy)()
          return a
            ? c
            : (n[0] !== c || n[1] !== d
                ? ((t =
                    null == d
                      ? (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(l, { children: c }) })
                      : c),
                  (n[0] = c),
                  (n[1] = d),
                  (n[2] = t))
                : (t = n[2]),
              t)
        },
      },
    )
  },
  tgV8(e, t, n) {
    var i = n("nyfN"),
      o = n("kkpv")
    let s = new WeakMap()
    function r(e) {
      let t = e.querySelector(o.mZ)
      return null == t ? void 0 : s.get(t)
    }
    n.d(
      t,
      {},
      {
        KO: function (e, t, n) {
          let i = r(e),
            o = i?.getLinePosition(t, n)
          if (i?.top != null && null != o) return { height: o.height, top: i.top + o.top }
        },
        O8: function (e, t) {
          t instanceof i.V && s.set(e, t)
        },
        kQ: function (e, t) {
          r(e)?.setSelectedLines(t, { notify: !0 })
        },
      },
    )
  },
  f7Wn(e, t, n) {
    n.d(t, { l: () => ew })
    var i = n("ABep"),
      o = n("QosV"),
      s = n("on57"),
      r = n("zTeN"),
      a = n("zd8w"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("eFn4"),
      u = n("Sm6l"),
      p = n("bqtn"),
      f = n("bVeK"),
      h = n("zLIa"),
      m = n("BSnr"),
      g = n("AWNZ"),
      v = n("ZEx5"),
      x = n("NxjN"),
      y = n("BPZJ"),
      b = n("SbKN"),
      j = n("SXhj"),
      S = n("rQvE"),
      C = n("vw1I"),
      w = n("VrVA"),
      _ = n("JNtf"),
      k = n("mUDD"),
      A = n("F0xz"),
      F = n("yvV6"),
      T = n("ZEpF")
    function M(e) {
      let t,
        n = (0, o.c)(3),
        s = (0, r.Ul)(T.H)
      return (
        n[0] !== s || n[1] !== e
          ? ((t = s ? (0, i.jsx)(P, { ...e }, e.disabled ? "readonly" : "editable") : null),
            (n[0] = s),
            (n[1] = e),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function P(e) {
      let t,
        n,
        s,
        r,
        d,
        p,
        h,
        m,
        x,
        y,
        b,
        j,
        S,
        C,
        T,
        M,
        P,
        N,
        I = (0, o.c)(53),
        { disabled: E, portals: B, onChange: D } = e,
        O = (0, l.A)(),
        [H, V] = (0, a.useState)(null),
        [R, z] = (0, a.useState)("")
      if (I[0] !== H || I[1] !== B) {
        let e
        ;(I[3] !== H ? ((e = H ?? []), (I[3] = H), (I[4] = e)) : (e = I[4]),
          (t = w.ss.safeParse({ ...B, http_ports: e })),
          (I[0] = H),
          (I[1] = B),
          (I[2] = t))
      } else t = I[2]
      let G = t
      I[5] !== G.success || I[6] !== R
        ? ((n = G.success && !R.trim()), (I[5] = G.success), (I[6] = R), (I[7] = n))
        : (n = I[7])
      let U = n
      I[8] !== B?.ssh
        ? ((s = function (e) {
            let t = Number(e)
            return /^\d+$/.test(e) && w.ss.safeParse({ ssh: B?.ssh, http_ports: [t] }).success ? t : null
          }),
          (I[8] = B?.ssh),
          (I[9] = s))
        : (s = I[9])
      let L = s
      ;(I[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(c.A, {
            id: "environmentSetup.ssh.title",
            defaultMessage: "SSH access",
            description: "Setting that enables SSH connections to a cloud environment",
          })),
          (d = (0, i.jsx)(c.A, {
            id: "environmentSetup.ssh.description",
            defaultMessage: "Allow SSH connections on port 22. Changes apply to new runtimes.",
            description: "Help for the cloud environment SSH toggle; changes take effect when a new runtime starts",
          })),
          (I[10] = r),
          (I[11] = d))
        : ((r = I[10]), (d = I[11])),
        I[12] !== O
          ? ((p = O.formatMessage({
              id: "environmentSetup.ssh.title",
              defaultMessage: "SSH access",
              description: "Setting that enables SSH connections to a cloud environment",
            })),
            (I[12] = O),
            (I[13] = p))
          : (p = I[13]))
      let $ = B?.ssh === !0
      return (
        I[14] !== D || I[15] !== B
          ? ((h = (e) => D({ ...B, ssh: e })), (I[14] = D), (I[15] = B), (I[16] = h))
          : (h = I[16]),
        I[17] !== E || I[18] !== p || I[19] !== $ || I[20] !== h
          ? ((m = (0, i.jsx)(g.ic, {
              className: "select-none",
              controlSizing: "content",
              variant: "featured",
              size: "compact",
              label: r,
              description: d,
              control: (0, i.jsx)(A.l, { ariaLabel: p, checked: $, disabled: E, onChange: h }),
            })),
            (I[17] = E),
            (I[18] = p),
            (I[19] = $),
            (I[20] = h),
            (I[21] = m))
          : (m = I[21]),
        I[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(c.A, {
              id: "environmentSetup.httpPortals.title",
              defaultMessage: "HTTP Previews",
              description: "Setting for HTTP services exposed through private cloud environment portal URLs",
            })),
            (I[22] = x))
          : (x = I[22]),
        I[23] !== O
          ? ((y = O.formatMessage({
              id: "environmentSetup.httpPortals.edit",
              defaultMessage: "Edit HTTP Preview ports",
              description: "Accessible label for opening the cloud environment HTTP ports editor",
            })),
            (I[23] = O),
            (I[24] = y))
          : (y = I[24]),
        I[25] !== B?.http_ports
          ? ((b = () => {
              ;(V(B?.http_ports ?? []), z(""))
            }),
            (I[25] = B?.http_ports),
            (I[26] = b))
          : (b = I[26]),
        I[27] === Symbol.for("react.memo_cache_sentinel") ? ((j = (0, i.jsx)(f.Npl, {})), (I[27] = j)) : (j = I[27]),
        I[28] !== E || I[29] !== y || I[30] !== b
          ? ((S = (0, i.jsx)(u.$, {
              "aria-label": y,
              color: "ghost",
              size: "icon",
              disabled: E,
              onClick: b,
              children: j,
            })),
            (I[28] = E),
            (I[29] = y),
            (I[30] = b),
            (I[31] = S))
          : (S = I[31]),
        I[32] !== B
          ? ((C = B?.http_ports?.length
              ? B.http_ports.join(", ")
              : (0, i.jsx)(c.A, {
                  id: "environmentSetup.httpPortals.empty",
                  defaultMessage: "No HTTP ports",
                  description: "Summary when a cloud environment has no HTTP portal ports configured",
                })),
            (I[32] = B),
            (I[33] = C))
          : (C = I[33]),
        I[34] !== S || I[35] !== C
          ? ((T = (0, i.jsx)(g.ic, {
              controlSizing: "content",
              variant: "featured",
              size: "compact",
              label: x,
              control: S,
              description: C,
            })),
            (I[34] = S),
            (I[35] = C),
            (I[36] = T))
          : (T = I[36]),
        I[37] !== T || I[38] !== m
          ? ((M = (0, i.jsxs)(v.t, { children: [m, T] })), (I[37] = T), (I[38] = m), (I[39] = M))
          : (M = I[39]),
        I[40] !== U ||
        I[41] !== E ||
        I[42] !== H ||
        I[43] !== O ||
        I[44] !== D ||
        I[45] !== L ||
        I[46] !== G.data ||
        I[47] !== G.success ||
        I[48] !== R
          ? ((P =
              null == H || E
                ? null
                : (0, i.jsx)(_.lG, {
                    open: !0,
                    onOpenChange: (e) => !e && V(null),
                    children: (0, i.jsxs)(k.R4, {
                      as: "form",
                      onSubmit: (e) => {
                        ;(e.preventDefault(), e.stopPropagation(), U && (D(G.data), V(null)))
                      },
                      children: [
                        (0, i.jsx)(k.OO, {
                          children: (0, i.jsx)(k.c7, {
                            title: (0, i.jsx)(_.L3, {
                              children: (0, i.jsx)(c.A, {
                                id: "environmentSetup.httpPortals.edit",
                                defaultMessage: "Edit HTTP Preview ports",
                                description: "Accessible label for opening the cloud environment HTTP ports editor",
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsxs)(k.OO, {
                          children: [
                            (0, i.jsx)("p", {
                              children: (0, i.jsx)(c.A, {
                                id: "environmentSetup.httpPortals.accessHelp",
                                defaultMessage:
                                  "Only you can access these HTTP Previews. Changes apply to new runtimes.",
                                description:
                                  "Instructions for private HTTP portal ports in a cloud environment; port changes take effect when a new runtime starts",
                              }),
                            }),
                            (0, i.jsx)(F.G, {
                              entries: H,
                              value: R,
                              onChange: V,
                              onInputChange: z,
                              parseEntry: L,
                              errorFor: (e) => {
                                if (22 === Number(e) && /^\d+$/.test(e))
                                  return (0, i.jsx)(c.A, {
                                    id: "environmentSetup.httpPortals.sshPort",
                                    defaultMessage: "Port 22 is reserved for SSH",
                                    description:
                                      "Validation error when adding HTTP port 22, which is always reserved for SSH",
                                  })
                                let t = L(e)
                                return null == t
                                  ? (0, i.jsx)(c.A, {
                                      id: "environmentSetup.httpPortals.invalidPort",
                                      defaultMessage: "Enter a whole-number port from 1 to 65535",
                                      description: "Validation error for an invalid HTTP port number",
                                    })
                                  : H.includes(t)
                                    ? (0, i.jsx)(c.A, {
                                        id: "environmentSetup.httpPortals.duplicate",
                                        defaultMessage: "This port has already been added",
                                        description: "Validation error when adding a duplicate HTTP port number",
                                      })
                                    : null
                              },
                              label: O.formatMessage({
                                id: "environmentSetup.httpPortals.ports",
                                defaultMessage: "HTTP ports",
                                description: "Accessible label for entering HTTP port numbers",
                              }),
                              placeholder: O.formatMessage({
                                id: "environmentSetup.httpPortals.placeholder",
                                defaultMessage: "Add a port",
                                description: "Placeholder in the input for adding a new HTTP port to the environment",
                              }),
                              pendingHelp: (0, i.jsx)(c.A, {
                                id: "environmentSetup.httpPortals.addBeforeApply",
                                defaultMessage: "Press Enter to add this port before applying",
                                description: "Help text when an HTTP port has been typed but not added yet",
                              }),
                              children: H.map((e) =>
                                (0, i.jsx)(
                                  F.b,
                                  {
                                    value: e,
                                    removeLabel: O.formatMessage(
                                      {
                                        id: "environmentSetup.httpPortals.remove",
                                        defaultMessage: "Remove {port}",
                                        description: "Button removing an HTTP port from the list being edited",
                                      },
                                      { port: String(e) },
                                    ),
                                    onRemove: () => V(H.filter((t) => t !== e)),
                                  },
                                  e,
                                ),
                              ),
                            }),
                            G.success
                              ? null
                              : (0, i.jsx)("p", {
                                  className: "text-sm text-danger",
                                  role: "alert",
                                  children: (0, i.jsx)(c.A, {
                                    id: "environmentSetup.httpPortals.invalid",
                                    defaultMessage:
                                      "Use unique whole-number ports from 1 to 65535 and leave port 22 for SSH",
                                    description:
                                      "Validation error for invalid, duplicate or conflicting HTTP portal ports",
                                  }),
                                }),
                          ],
                        }),
                        (0, i.jsx)(k.OO, {
                          children: (0, i.jsxs)(k.Es, {
                            children: [
                              (0, i.jsx)(u.$, {
                                color: "secondary",
                                onClick: () => V(null),
                                children: (0, i.jsx)(c.A, {
                                  id: "environmentSetup.httpPortals.cancel",
                                  defaultMessage: "Cancel",
                                  description: "Discard pending edits to HTTP portal ports",
                                }),
                              }),
                              (0, i.jsx)(u.$, {
                                color: "primary",
                                type: "submit",
                                disabled: !U,
                                children: (0, i.jsx)(c.A, {
                                  id: "environmentSetup.httpPortals.apply",
                                  defaultMessage: "Apply",
                                  description: "Apply HTTP portal ports to the environment settings form before saving",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })),
            (I[40] = U),
            (I[41] = E),
            (I[42] = H),
            (I[43] = O),
            (I[44] = D),
            (I[45] = L),
            (I[46] = G.data),
            (I[47] = G.success),
            (I[48] = R),
            (I[49] = P))
          : (P = I[49]),
        I[50] !== M || I[51] !== P
          ? ((N = (0, i.jsxs)(i.Fragment, { children: [M, P] })), (I[50] = M), (I[51] = P), (I[52] = N))
          : (N = I[52]),
        N
      )
    }
    var N = n("pqcU"),
      I = n("ogLr"),
      E = n("SRbQ"),
      B = n("slpy"),
      D = n("T0Rc"),
      O = n("mtDM"),
      H = n("GaA7"),
      V = n("rvFo"),
      R = n("jDom")
    function z(e) {
      let t,
        n,
        s,
        r,
        a = (0, o.c)(11),
        { title: l, actions: c, children: d, "data-environment-section": u } = e
      return (
        a[0] !== l
          ? ((t = (0, i.jsx)("span", { className: "font-medium", children: l })), (a[0] = l), (a[1] = t))
          : (t = a[1]),
        a[2] !== c
          ? ((n = null == c ? null : (0, i.jsx)("div", { className: "flex shrink-0 items-center gap-2", children: c })),
            (a[2] = c),
            (a[3] = n))
          : (n = a[3]),
        a[4] !== t || a[5] !== n
          ? ((s = (0, i.jsxs)("div", {
              className: "flex min-h-7.5 items-center justify-between gap-2 text-base select-none",
              children: [t, n],
            })),
            (a[4] = t),
            (a[5] = n),
            (a[6] = s))
          : (s = a[6]),
        a[7] !== d || a[8] !== u || a[9] !== s
          ? ((r = (0, i.jsxs)("section", {
              className: "flex flex-col gap-2 border-t border-subtle pt-2.5 first:border-0 first:pt-0",
              "data-environment-section": u,
              children: [s, d],
            })),
            (a[7] = d),
            (a[8] = u),
            (a[9] = s),
            (a[10] = r))
          : (r = a[10]),
        r
      )
    }
    function G(e) {
      let t,
        n,
        r,
        a,
        l,
        c,
        d,
        u = (0, o.c)(20),
        { icon: p, compactIcon: f, name: h, provider: m, actions: g, children: v } = e,
        x = void 0 !== f && f,
        y = x ? "gap-2.5" : "gap-2"
      u[0] !== y ? ((t = (0, s.A)("flex min-h-7.5 items-center text-base", y)), (u[0] = y), (u[1] = t)) : (t = u[1])
      let b = x ? "size-4" : "size-6"
      return (
        u[2] !== b
          ? ((n = (0, s.A)("flex shrink-0 items-center justify-center", b)), (u[2] = b), (u[3] = n))
          : (n = u[3]),
        u[4] !== p || u[5] !== n
          ? ((r = (0, i.jsx)("span", { className: n, children: p })), (u[4] = p), (u[5] = n), (u[6] = r))
          : (r = u[6]),
        u[7] !== h
          ? ((a = (0, i.jsx)("div", { className: "min-w-0 flex-1 truncate", children: h })), (u[7] = h), (u[8] = a))
          : (a = u[8]),
        u[9] !== m
          ? ((l =
              null == m
                ? null
                : (0, i.jsx)("span", {
                    className: "max-w-1/2 min-w-0 truncate text-secondary select-none",
                    children: m,
                  })),
            (u[9] = m),
            (u[10] = l))
          : (l = u[10]),
        u[11] !== g || u[12] !== t || u[13] !== r || u[14] !== a || u[15] !== l
          ? ((c = (0, i.jsxs)("div", { className: t, children: [r, a, l, g] })),
            (u[11] = g),
            (u[12] = t),
            (u[13] = r),
            (u[14] = a),
            (u[15] = l),
            (u[16] = c))
          : (c = u[16]),
        u[17] !== v || u[18] !== c
          ? ((d = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [c, v] })),
            (u[17] = v),
            (u[18] = c),
            (u[19] = d))
          : (d = u[19]),
        d
      )
    }
    var U = n("iYyt"),
      L = n("bLM8")
    let $ = (0, n("iJY0").a)({
      name: "microsoft-logo-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        visualBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#F35325",
            bounds: { x: 3.25, y: 3.25, width: 8, height: 8 },
            wideGamut: "color(display-p3 0.9529 0.3255 0.1451)",
          },
          {
            role: "fixed",
            color: "#81BC06",
            bounds: { x: 12.75, y: 3.25, width: 8, height: 8 },
            wideGamut: "color(display-p3 0.5059 0.7373 0.0235)",
          },
          {
            role: "fixed",
            color: "#05A6F0",
            bounds: { x: 3.25, y: 12.75, width: 8, height: 8 },
            wideGamut: "color(display-p3 0.0196 0.6510 0.9412)",
          },
          {
            role: "fixed",
            color: "#FFBA08",
            bounds: { x: 12.75, y: 12.75, width: 8, height: 8 },
            wideGamut: "color(display-p3 1.0000 0.7294 0.0314)",
          },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        center: { x: 12, y: 12 },
        insets: { top: 3.25, right: 3.25, bottom: 3.25, left: 3.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M3.25 3.25H11.25V11.25H3.25V3.25Z" fill="#F35325"/> <path d="M12.75 3.25H20.75V11.25H12.75V3.25Z" fill="#81BC06"/> <path d="M3.25 12.75H11.25V20.75H3.25V12.75Z" fill="#05A6F0"/> <path d="M12.75 12.75H20.75V20.75H12.75V12.75Z" fill="#FFBA08"/>',
    })
    var K = n("TjgH"),
      q = n("HOLv"),
      Z = n("K489")
    function W(e) {
      let t,
        n,
        s,
        r,
        d,
        u,
        m,
        g,
        v,
        x,
        y,
        b,
        j,
        S,
        C,
        w,
        _,
        k,
        A,
        F,
        T,
        M,
        P,
        N,
        I = (0, o.c)(68),
        {
          connection: E,
          requirement: B,
          issue: D,
          isReadOnly: O,
          isLoading: H,
          isSupported: V,
          onEdit: R,
          onAliasChange: z,
          onDetach: W,
        } = e,
        Q = (0, l.A)(),
        J = (0, a.useId)(),
        [X, ee] = (0, a.useState)(!1),
        et = (0, a.useRef)(null),
        en = E?.display_name ?? B.connection_id
      I[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            azure: {
              icon: (0, i.jsx)(q.I, { asset: $ }),
              label: (0, i.jsx)(c.A, {
                id: "restricted.environmentSetup.oic.providerAzure",
                defaultMessage: "Azure",
                description: "Microsoft Azure cloud provider preset",
              }),
            },
            aws: {
              icon: (0, i.jsx)(q.I, { asset: U.k }),
              label: (0, i.jsx)(c.A, {
                id: "restricted.environmentSetup.oic.providerAws",
                defaultMessage: "AWS",
                description: "Amazon Web Services cloud provider preset",
              }),
            },
            gcp: {
              icon: (0, i.jsx)(q.I, { asset: L.U }),
              label: (0, i.jsx)(c.A, {
                id: "restricted.environmentSetup.oic.providerGcp",
                defaultMessage: "Google Cloud",
                description: "Google Cloud provider preset",
              }),
            },
          }),
          (I[0] = t))
        : (t = I[0])
      let ei = t,
        eo = null == E ? null : ei[E.provider_kind]
      I[1] !== eo ? ((n = null == eo ? (0, i.jsx)(f.iNn, {}) : eo.icon), (I[1] = eo), (I[2] = n)) : (n = I[2])
      let es = eo?.label
      ;(I[3] !== en
        ? ((s = (0, i.jsx)("span", { className: "min-w-0 truncate", children: en })), (I[3] = en), (I[4] = s))
        : (s = I[4]),
        I[5] !== E || I[6] !== V
          ? ((r =
              null == E || V
                ? null
                : (0, i.jsx)(K.E, {
                    variant: "outline",
                    children: (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.oic.unsupportedAttachment",
                      defaultMessage: "Not available",
                      description:
                        "Indicates that the environment's current attachment capabilities do not include this connection's provider",
                    }),
                  })),
            (I[5] = E),
            (I[6] = V),
            (I[7] = r))
          : (r = I[7]),
        I[8] !== s || I[9] !== r
          ? ((d = (0, i.jsxs)("div", { className: "flex min-w-0 flex-wrap items-center gap-2", children: [s, r] })),
            (I[8] = s),
            (I[9] = r),
            (I[10] = d))
          : (d = I[10]),
        I[11] !== X
          ? ((u = (e) => {
              X && e.preventDefault()
            }),
            (I[11] = X),
            (I[12] = u))
          : (u = I[12]),
        I[13] !== Q || I[14] !== en
          ? ((m = Q.formatMessage(
              {
                id: "restricted.environmentSetup.oic.connectionActions",
                defaultMessage: "Actions for {name}",
                description: "Menu with edit, environment alias, and remove actions for this cloud connection",
              },
              { name: en },
            )),
            (I[13] = Q),
            (I[14] = en),
            (I[15] = m))
          : (m = I[15]),
        I[16] === Symbol.for("react.memo_cache_sentinel") ? ((g = (0, i.jsx)(f.l0Y, {})), (I[16] = g)) : (g = I[16]),
        I[17] !== O || I[18] !== m
          ? ((v = (0, i.jsx)(Y, {
              ref: et,
              className:
                "not-disabled:not-aria-disabled:hover:text-default not-disabled:not-aria-disabled:focus-visible:text-default data-[state=open]:text-default",
              color: "ghostSecondary",
              size: "icon",
              disabled: O,
              "aria-label": m,
              children: g,
            })),
            (I[17] = O),
            (I[18] = m),
            (I[19] = v))
          : (v = I[19]))
      let er = H || E?.can_edit !== !0
      return (
        I[20] !== Q || I[21] !== en
          ? ((x = Q.formatMessage(
              {
                id: "restricted.environmentSetup.oic.editConnection",
                defaultMessage: "Edit {name}",
                description: "Loads saved outbound identity configuration for an authorized workspace member to edit",
              },
              { name: en },
            )),
            (I[20] = Q),
            (I[21] = en),
            (I[22] = x))
          : (x = I[22]),
        I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.oic.editConnectionAction",
              defaultMessage: "Edit connection",
              description: "Edit the shared cloud identity connection configuration",
            })),
            (I[23] = y))
          : (y = I[23]),
        I[24] !== R || I[25] !== er || I[26] !== x
          ? ((b = (0, i.jsx)(p.ms.Item, { disabled: er, "aria-label": x, onSelect: R, children: y })),
            (I[24] = R),
            (I[25] = er),
            (I[26] = x),
            (I[27] = b))
          : (b = I[27]),
        I[28] !== Q || I[29] !== en
          ? ((j = Q.formatMessage(
              {
                id: "restricted.environmentSetup.oic.aliasLabel",
                defaultMessage: "Environment alias for {name}",
                description: "Label for the stable per-environment connection alias",
              },
              { name: en },
            )),
            (I[28] = Q),
            (I[29] = en),
            (I[30] = j))
          : (j = I[30]),
        I[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = () => ee(!0)),
            (C = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.oic.editAliasAction",
              defaultMessage: "Edit environment alias",
              description: "Change only this environment's alias for the identity connection",
            })),
            (I[31] = S),
            (I[32] = C))
          : ((S = I[31]), (C = I[32])),
        I[33] !== j
          ? ((w = (0, i.jsx)(p.ms.Item, { "aria-label": j, onSelect: S, children: C })), (I[33] = j), (I[34] = w))
          : (w = I[34]),
        I[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)(p.ms.Separator, {})), (I[35] = _))
          : (_ = I[35]),
        I[36] !== Q || I[37] !== en
          ? ((k = Q.formatMessage(
              {
                id: "restricted.environmentSetup.oic.detachConnection",
                defaultMessage: "Detach {name}",
                description: "Removes the named outbound identity connection from this environment only",
              },
              { name: en },
            )),
            (I[36] = Q),
            (I[37] = en),
            (I[38] = k))
          : (k = I[38]),
        I[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.oic.removeAttachmentAction",
              defaultMessage: "Remove from environment",
              description: "Remove this environment attachment without deleting the shared connection",
            })),
            (I[39] = A))
          : (A = I[39]),
        I[40] !== W || I[41] !== k
          ? ((F = (0, i.jsx)(p.ms.Item, { color: "danger", "aria-label": k, onSelect: W, children: A })),
            (I[40] = W),
            (I[41] = k),
            (I[42] = F))
          : (F = I[42]),
        I[43] !== v || I[44] !== b || I[45] !== w || I[46] !== F || I[47] !== u
          ? ((T = (0, i.jsxs)(p.Ab, { align: "end", onCloseAutoFocus: u, triggerButton: v, children: [b, w, _, F] })),
            (I[43] = v),
            (I[44] = b),
            (I[45] = w),
            (I[46] = F),
            (I[47] = u),
            (I[48] = T))
          : (T = I[48]),
        I[49] !== X ||
        I[50] !== J ||
        I[51] !== Q ||
        I[52] !== O ||
        I[53] !== D ||
        I[54] !== en ||
        I[55] !== z ||
        I[56] !== B
          ? ((M =
              X || null != D
                ? (0, i.jsx)(h.pd, {
                    "aria-describedby": null == D ? void 0 : J,
                    "aria-invalid": null != D,
                    "data-environment-invalid": null != D,
                    "aria-label": Q.formatMessage(
                      {
                        id: "restricted.environmentSetup.oic.aliasLabel",
                        defaultMessage: "Environment alias for {name}",
                        description: "Label for the stable per-environment connection alias",
                      },
                      { name: en },
                    ),
                    autoFocus: null == D,
                    onBlur: () => ee(!1),
                    onKeyDown: (e) => {
                      ;("Enter" === e.key || "Escape" === e.key) &&
                        (e.preventDefault(), e.stopPropagation(), ee(!1), et.current?.focus())
                    },
                    required: !0,
                    pattern: "[A-Z][A-Z0-9_]{0,63}",
                    maxLength: 64,
                    disabled: O,
                    value: B.alias,
                    onChange: (e) => z(e.target.value),
                  })
                : null),
            (I[49] = X),
            (I[50] = J),
            (I[51] = Q),
            (I[52] = O),
            (I[53] = D),
            (I[54] = en),
            (I[55] = z),
            (I[56] = B),
            (I[57] = M))
          : (M = I[57]),
        I[58] !== J || I[59] !== D
          ? ((P = null == D ? null : (0, i.jsx)("span", { id: J, children: (0, i.jsx)(Z.o, { issue: D }) })),
            (I[58] = J),
            (I[59] = D),
            (I[60] = P))
          : (P = I[60]),
        I[61] !== n || I[62] !== T || I[63] !== M || I[64] !== P || I[65] !== es || I[66] !== d
          ? ((N = (0, i.jsxs)(G, { icon: n, provider: es, name: d, actions: T, children: [M, P] })),
            (I[61] = n),
            (I[62] = T),
            (I[63] = M),
            (I[64] = P),
            (I[65] = es),
            (I[66] = d),
            (I[67] = N))
          : (N = I[67]),
        N
      )
    }
    function Y(e) {
      let t,
        n,
        s = (0, o.c)(7),
        r = e["aria-label"],
        a = e.disabled || !0 === e["aria-expanded"],
        l = !0 === e["aria-expanded"] ? "open" : "closed"
      return (
        s[0] !== e || s[1] !== l
          ? ((t = (0, i.jsx)(u.$, { "data-state": l, ...e })), (s[0] = e), (s[1] = l), (s[2] = t))
          : (t = s[2]),
        s[3] !== r || s[4] !== a || s[5] !== t
          ? ((n = (0, i.jsx)(B.m, { content: r, disabled: a, children: t })),
            (s[3] = r),
            (s[4] = a),
            (s[5] = t),
            (s[6] = n))
          : (n = s[6]),
        n
      )
    }
    var Q = n("JN4M"),
      J = n("R3Dy")
    let X = (0, a.lazy)(async () => ({
      default: (await n.e(208407).then(n.bind(n, "afGK"))).OutboundIdentityConnectionDialog,
    }))
    function ee(e) {
      let t,
        n,
        s = (0, o.c)(15),
        { configuration: r, requirements: a, isReadOnly: l, onChange: d, issues: u, showHeading: p } = e
      s[0] !== u ? ((t = void 0 === u ? [] : u), (s[0] = u), (s[1] = t)) : (t = s[1])
      let f = t,
        h = void 0 === p || p
      if (null == r || null == a) {
        let e, t, n
        return (
          s[2] !== h
            ? ((e = h
                ? (0, i.jsx)(c.A, {
                    id: "restricted.environmentSetup.oic.title",
                    defaultMessage: "OIDC",
                    description:
                      "Heading for OIDC connections that authenticate a cloud environment to external systems",
                  })
                : null),
              (s[2] = h),
              (s[3] = e))
            : (e = s[3]),
          s[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("p", {
                className: "text-sm text-secondary select-none",
                children: (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.oic.cloudRequired",
                  defaultMessage: "Open a saved cloud environment to configure its connections",
                  description:
                    "Explains why no connection controls are available before the server-backed configuration loads",
                }),
              })),
              (s[4] = t))
            : (t = s[4]),
          s[5] !== e ? ((n = (0, i.jsx)(z, { title: e, children: t })), (s[5] = e), (s[6] = n)) : (n = s[6]),
          n
        )
      }
      let m = `${r.accountId}:${r.userId}:${r.configId}`
      return (
        s[7] !== r || s[8] !== l || s[9] !== f || s[10] !== d || s[11] !== a || s[12] !== h || s[13] !== m
          ? ((n = (0, i.jsx)(
              et,
              { configuration: r, requirements: a, issues: f, isReadOnly: l, onChange: d, showHeading: h },
              m,
            )),
            (s[7] = r),
            (s[8] = l),
            (s[9] = f),
            (s[10] = d),
            (s[11] = a),
            (s[12] = h),
            (s[13] = m),
            (s[14] = n))
          : (n = s[14]),
        n
      )
    }
    function et({ configuration: e, requirements: t, isReadOnly: n, onChange: o, issues: s, showHeading: d }) {
      let h = (0, l.A)(),
        m = H.appServices?.environmentConfigs,
        [g, v] = (0, a.useState)(null),
        [x, y] = (0, a.useState)(null),
        [b, j] = (0, a.useState)(null),
        S = (0, a.useRef)(null),
        C = (0, a.useRef)(null),
        { data: w, isPending: _, isFetching: k, isFetched: A, isError: F, refetch: T } = (0, r._U)(Q.h, e),
        M = w?.ok ? w.data.items : void 0,
        P = w?.ok ? (w.data.capabilities?.attachment_provider_kinds ?? ["azure"]) : []
      ;(0, a.useLayoutEffect)(
        () => () => {
          ;(S.current?.abort(), C.current?.abort())
        },
        [n, t],
      )
      let N = !O.Z.safeParse(t).success,
        I = t.flatMap(({ connection_id: e }) => (M?.some((t) => t.connection_id === e) === !1 ? [e] : [])),
        {
          data: G,
          isFetching: U,
          isError: L,
          isPending: $,
          isFetched: K,
          refetch: q,
        } = (0, D.I)({
          queryKey: ["outbound-identity-attachment-edit", e.accountId, e.userId, I],
          enabled: null != m && !n && !N && I.length > 0,
          staleTime: V.D.FIVE_SECONDS,
          refetchOnMount: "always",
          retry: !1,
          queryFn: () =>
            Promise.all(
              I.map(async (t) => {
                let n = { stack: [], error: void 0, hasError: !1 }
                try {
                  let i = (0, E.mS)(
                    n,
                    await m?.requestOutboundIdentityConnection({
                      accountId: e.accountId,
                      userId: e.userId,
                      method: "GET",
                      connectionId: t,
                    }),
                    !1,
                  )
                  return i?.ok && i.data.connection_id === t ? i.data : null
                } catch (e) {
                  ;((n.error = e), (n.hasError = !0))
                } finally {
                  ;(0, E.hk)(n)
                }
              }),
            ),
        }),
        Z = null
      F || L || null == m ? (Z = { ok: !1, error: "unavailable" }) : w?.ok === !1 && (Z = w)
      let Y = null != Z || (_ && A) || ($ && K),
        ee = () => {
          ;(j(null), T(), n || N || !(I.length > 0) || q())
        },
        en = !n && x?.requirements === t && !x.signal.aborted,
        ei = null
      n
        ? (ei = (0, i.jsx)(c.A, {
            id: "environmentSetup.oic.add.readOnly",
            defaultMessage: "Connections cannot be changed while this environment is read-only",
            description: "Tooltip explaining why Add OIDC connection is disabled in a read-only cloud environment",
          }))
        : null == m
          ? (ei = (0, i.jsx)(c.A, {
              id: "environmentSetup.oic.add.unavailable",
              defaultMessage: "Connections are unavailable on this host",
              description:
                "Tooltip explaining why Add OIDC connection is disabled when the host does not support environment connections",
            }))
          : (en || k) &&
            (ei = (0, i.jsx)(c.A, {
              id: "environmentSetup.oic.add.loading",
              defaultMessage: "Wait for connections to finish loading",
              description: "Tooltip explaining why Add OIDC connection is temporarily disabled while connections load",
            }))
      let eo = (e) => {
          let i
          return (
            !n &&
            !N &&
            null != M &&
            P.includes(e.provider_kind) &&
            t.length < 16 &&
            !t.some(({ connection_id: t }) => t === e.connection_id) &&
            ("azure" !== e.provider_kind ||
              ((i = e.azure_client_id),
              t.length < 16 &&
                t.every((e) => {
                  let t =
                    M?.find((t) => t.connection_id === e.connection_id) ??
                    (U || L ? void 0 : G?.find((t) => t?.connection_id === e.connection_id))
                  return (
                    null != t && ("azure" !== t.provider_kind || t.azure_client_id.toLowerCase() !== i.toLowerCase())
                  )
                })))
          )
        },
        es = (e) => {
          let n = e.provider_kind.toUpperCase(),
            i = n,
            s = 2
          for (; t.some((e) => e.alias === i);) i = `${n}_${s++}`
          o([...t, { connection_id: e.connection_id, alias: i }])
        },
        er = (0, R.K)((e) => {
          eo(e) && es(e)
        })
      return (0, i.jsxs)(z, {
        title: d
          ? (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.oic.title",
              defaultMessage: "OIDC",
              description: "Heading for OIDC connections that authenticate a cloud environment to external systems",
            })
          : null,
        actions: (0, i.jsx)(B.m, {
          forceOpen: null != ei && void 0,
          content: (0, i.jsx)(i.Fragment, { children: ei }),
          children: (0, i.jsx)("span", {
            tabIndex: null == ei ? void 0 : 0,
            children: (0, i.jsxs)(p.Ab, {
              contentWidth: "menu",
              disabled: null != ei,
              triggerButton: (0, i.jsx)(u.$, {
                color: "ghost",
                size: "icon",
                "aria-label": h.formatMessage({
                  id: "restricted.environmentSetup.oic.addConnection",
                  defaultMessage: "Add connection",
                  description: "Choose an existing connection or create a real connection to attach",
                }),
                children: (0, i.jsx)(f.xFs, {}),
              }),
              children: [
                M?.filter((e) => !t.some(({ connection_id: t }) => t === e.connection_id)).map((e) =>
                  (0, i.jsx)(
                    p.ms.Item,
                    {
                      disabled: k || F || !eo(e),
                      focusableWhenDisabled: !P.includes(e.provider_kind),
                      tooltipText: P.includes(e.provider_kind)
                        ? void 0
                        : h.formatMessage({
                            id: "restricted.environmentSetup.oic.unsupportedProvider",
                            defaultMessage: "This provider is not available for this environment",
                            description:
                              "Explains that the environment's current attachment capabilities do not include this connection's provider",
                          }),
                      onSelect: () => es(e),
                      children: e.display_name,
                    },
                    e.connection_id,
                  ),
                ),
                (0, i.jsx)(p.ms.Separator, {}),
                (0, i.jsx)(p.ms.Item, {
                  disabled: k || F || null == M,
                  onSelect: () => v({ connection: null }),
                  children: (0, i.jsx)(c.A, {
                    id: "restricted.environmentSetup.oic.createNew",
                    defaultMessage: "Create connection…",
                    description: "Opens the cloud provider presets for a new workspace-governed identity connection",
                  }),
                }),
                (0, i.jsx)(p.ms.Separator, {}),
                (0, i.jsx)(p.ms.Item, {
                  onSelect: ee,
                  children: (0, i.jsx)(c.A, {
                    id: "restricted.environmentSetup.oic.reload",
                    defaultMessage: "Reload connections",
                    description: "Reload connections after a failure or an external change",
                  }),
                }),
              ],
            }),
          }),
        }),
        children: [
          _ && null != m
            ? (0, i.jsx)("p", {
                className: "text-sm text-secondary select-none",
                children: (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.oic.loading",
                  defaultMessage: "Loading connections…",
                  description: "Loading the workspace connection catalog",
                }),
              })
            : null,
          null == Z ? null : (0, i.jsx)(J.R, { error: Z, operation: "load" }),
          Y && null != m
            ? (0, i.jsx)("div", {
                className: "flex justify-end gap-2",
                children: (0, i.jsx)(u.$, {
                  color: "secondary",
                  size: "compact",
                  type: "button",
                  disabled: k || U,
                  loading: k || U,
                  onClick: ee,
                  children: (0, i.jsx)(c.A, {
                    id: "restricted.environmentSetup.oic.reload",
                    defaultMessage: "Reload connections",
                    description: "Reload connections after a failure or an external change",
                  }),
                }),
              })
            : null,
          M?.length !== 0 || 0 !== t.length || k || null != Z
            ? null
            : (0, i.jsx)("p", {
                className: "text-sm text-secondary select-none",
                children: (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.oic.emptyCatalog",
                  defaultMessage: "No OIDC connections available",
                  description:
                    "The workspace connection catalog loaded successfully but contains no connections available to attach",
                }),
              }),
          null == b ? null : (0, i.jsx)(J.R, { error: b, operation: "load" }),
          t.map((r, a) => {
            let l = s.find(({ field: e }) => e === `connection-${a}`),
              c =
                M?.find(({ connection_id: e }) => e === r.connection_id) ??
                G?.find((e) => e?.connection_id === r.connection_id)
            return (0, i.jsx)(
              W,
              {
                connection: c ?? void 0,
                requirement: r,
                issue: l,
                isReadOnly: n,
                isLoading: en,
                isSupported: null == c || P.includes(c.provider_kind),
                onEdit: () => {
                  null != c &&
                    (async (n, i) => {
                      if (null == m) return
                      let o = new AbortController()
                      ;(C.current?.abort(), (C.current = o), y({ requirements: t, signal: o.signal }), j(null))
                      try {
                        let t = { stack: [], error: void 0, hasError: !1 }
                        try {
                          let s = (0, E.mS)(
                            t,
                            await m.requestOutboundIdentityConnection({
                              accountId: e.accountId,
                              userId: e.userId,
                              method: "GET",
                              connectionId: n,
                            }),
                            !1,
                          )
                          o.signal.aborted ||
                            (s.ok
                              ? s.data.provider_kind === i && s.data.connection_id === n
                                ? v({ connection: s.data })
                                : j({ ok: !1, error: "invalid-response" })
                              : j({ ok: !1, error: s.error, status: s.status }))
                        } catch (e) {
                          ;((t.error = e), (t.hasError = !0))
                        } finally {
                          ;(0, E.hk)(t)
                        }
                      } catch {
                        o.signal.aborted || j({ ok: !1, error: "unavailable" })
                      }
                      C.current === o && y(null)
                    })(r.connection_id, c.provider_kind)
                },
                onAliasChange: (e) => o(t.map((t) => (t.connection_id === r.connection_id ? { ...t, alias: e } : t))),
                onDetach: () => o(t.filter(({ connection_id: e }) => e !== r.connection_id)),
              },
              r.connection_id,
            )
          }),
          null == g
            ? null
            : (0, i.jsx)(a.Suspense, {
                fallback: null,
                children: (0, i.jsx)(
                  X,
                  {
                    isOpen: !n,
                    connection: g.connection,
                    onClose: () => {
                      ;(v(null), T(), !N && I.length > 0 && q())
                    },
                    onSubmit: async (t) => {
                      let i = { stack: [], error: void 0, hasError: !1 }
                      try {
                        if (null == m || null == g || n) return { ok: !1, error: "unavailable" }
                        let o = new AbortController()
                        S.current = o
                        let { display_name: s, subject_template: r, additional_claims: a, include_actor_email: l } = t,
                          c = (0, E.mS)(
                            i,
                            await m.requestOutboundIdentityConnection(
                              null == g.connection
                                ? { accountId: e.accountId, userId: e.userId, method: "POST", body: t }
                                : {
                                    accountId: e.accountId,
                                    userId: e.userId,
                                    method: "PATCH",
                                    connectionId: g.connection.connection_id,
                                    body: {
                                      display_name: s,
                                      subject_template: r,
                                      additional_claims: a,
                                      include_actor_email: l,
                                      configuration_version: g.connection.configuration_version,
                                    },
                                  },
                            ),
                            !1,
                          )
                        if (!c.ok) return { ok: !1, error: c.error, status: c.status }
                        if (c.data.provider_kind !== ("target" in t ? t.target.provider_kind : "azure"))
                          return { ok: !1, error: "invalid-response" }
                        return (null != g.connection || o.signal.aborted || er(c.data), { ok: !0, data: c.data })
                      } catch (e) {
                        ;((i.error = e), (i.hasError = !0))
                      } finally {
                        ;(0, E.hk)(i)
                      }
                    },
                  },
                  g.connection?.connection_id ?? "create",
                ),
              }),
        ],
      })
    }
    var en = n("CFI7"),
      ei = n("KEmQ"),
      eo = n("Y8ve"),
      es = n("n0dE"),
      er = n("Qgfj"),
      ea = n("aKdu"),
      el = n("NNav")
    function ec(e) {
      let t,
        n,
        s,
        r,
        d,
        p,
        h,
        m,
        g,
        v,
        y,
        b,
        j,
        C,
        w,
        _,
        k,
        A = (0, o.c)(58),
        {
          configuration: F,
          config: T,
          access: M,
          disabled: P,
          disabledTooltip: N,
          issues: I,
          showDetails: E,
          onChange: B,
        } = e,
        O = void 0 !== E && E,
        H = (0, l.A)()
      A[0] !== F ? ((t = (0, ea.g)(F)), (A[0] = F), (A[1] = t)) : (t = A[1])
      let { data: V, isSuccess: R, isFetching: G, isFetchedAfterMount: U, refetch: L } = (0, D.I)(t),
        $ = R && U && !G && V?.tcp_network_access_supported === !0 && V.connection?.configured === !0,
        [K, q] = (0, a.useState)(null)
      ;(P && null != K && q(null),
        A[2] !== M?.ip_ranges ? ((n = M?.ip_ranges ?? []), (A[2] = M?.ip_ranges), (A[3] = n)) : (n = A[3]),
        A[4] !== M?.domains ? ((s = M?.domains ?? []), (A[4] = M?.domains), (A[5] = s)) : (s = A[5]),
        A[6] !== n || A[7] !== s ? ((r = [...n, ...s]), (A[6] = n), (A[7] = s), (A[8] = r)) : (r = A[8]))
      let W = r,
        Y = null
      if (O) {
        let e, t, n, o
        ;(A[9] !== W
          ? ((e =
              W.length > 0
                ? W.join(", ")
                : (0, i.jsx)(c.A, {
                    id: "environmentSetup.configuration.tcpAccess.empty",
                    defaultMessage: "No saved TCP destinations",
                    description:
                      "Summary when no legacy TCP destination entries are saved. An empty list does not mean automatic Tailscale access is disabled",
                  })),
            (A[9] = W),
            (A[10] = e))
          : (e = A[10]),
          A[11] !== e
            ? ((t = (0, i.jsx)("p", { className: "break-words", children: e })), (A[11] = e), (A[12] = t))
            : (t = A[12]),
          A[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)("p", { children: (0, i.jsx)(c.A, { ...eu.help }) })), (A[13] = n))
            : (n = A[13]),
          A[14] !== t ? ((o = (0, i.jsxs)(i.Fragment, { children: [t, n] })), (A[14] = t), (A[15] = o)) : (o = A[15]),
          (Y = o))
      } else if (!$) {
        let e
        ;(A[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(c.A, {
              id: "environmentSetup.tcpAccess.requiresVpn",
              defaultMessage: "Adding legacy destinations requires a VPN with TCP support",
              description:
                "Explains why adding legacy TCP destinations is unavailable. Existing saved entries can still be cleared",
            })),
            (A[16] = e))
          : (e = A[16]),
          (Y = e))
      }
      ;(A[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, i.jsx)(c.A, { ...eu.title })), (A[17] = d))
        : (d = A[17]),
        A[18] !== W || A[19] !== O
          ? ((p =
              !O &&
              (0, i.jsx)("span", {
                className: "text-secondary",
                children: (0, i.jsx)(c.A, {
                  id: "environmentSetup.tcpAccess.destinationCount",
                  defaultMessage: "{count, plural, =0 {None} one {# destination} other {# destinations}}",
                  description:
                    "Count of saved legacy TCP destination entries. None means the saved list is empty, not that automatic Tailscale access is disabled",
                  values: { count: W.length },
                }),
              })),
            (A[18] = W),
            (A[19] = O),
            (A[20] = p))
          : (p = A[20]),
        A[21] !== H ? ((h = H.formatMessage(eu.edit)), (A[21] = H), (A[22] = h)) : (h = A[22]))
      let Q = P || (!$ && 0 === W.length),
        J = P ? N : void 0
      return (
        A[23] !== M || A[24] !== T
          ? ((m = () => q({ access: M ?? { ip_ranges: [], domains: [] }, config: T })),
            (A[23] = M),
            (A[24] = T),
            (A[25] = m))
          : (m = A[25]),
        A[26] === Symbol.for("react.memo_cache_sentinel") ? ((g = (0, i.jsx)(f.Npl, {})), (A[26] = g)) : (g = A[26]),
        A[27] !== J || A[28] !== m || A[29] !== h || A[30] !== Q
          ? ((v = (0, i.jsx)(x.F, {
              "aria-label": h,
              color: "ghost",
              size: "icon",
              disabled: Q,
              tooltipContent: J,
              onClick: m,
              children: g,
            })),
            (A[27] = J),
            (A[28] = m),
            (A[29] = h),
            (A[30] = Q),
            (A[31] = v))
          : (v = A[31]),
        A[32] !== H || A[33] !== G || A[34] !== L || A[35] !== $
          ? ((y =
              !$ &&
              (0, i.jsx)(u.$, {
                color: "ghost",
                size: "settingsAction",
                "aria-label": H.formatMessage({
                  id: "environmentSetup.tcpAccess.refreshLabel",
                  defaultMessage: "Refresh TCP support",
                  description: "Accessible label for checking the latest VPN TCP capability",
                }),
                disabled: G,
                onClick: () => void L(),
                children: (0, i.jsx)(c.A, {
                  id: "environmentSetup.tcpAccess.refresh",
                  defaultMessage: "Refresh",
                  description: "Check whether the environment now supports TCP destination configuration",
                }),
              })),
            (A[32] = H),
            (A[33] = G),
            (A[34] = L),
            (A[35] = $),
            (A[36] = y))
          : (y = A[36]),
        A[37] !== I[0]
          ? ((b = null != I[0] && (0, i.jsx)(Z.o, { issue: I[0] })), (A[37] = I[0]), (A[38] = b))
          : (b = A[38]),
        A[39] !== v || A[40] !== y || A[41] !== b || A[42] !== p
          ? ((j = (0, i.jsxs)(i.Fragment, { children: [p, v, y, b] })),
            (A[39] = v),
            (A[40] = y),
            (A[41] = b),
            (A[42] = p),
            (A[43] = j))
          : (j = A[43]),
        A[44] !== Y
          ? ((C = null == Y ? null : (0, i.jsx)("div", { className: "text-sm text-secondary", children: Y })),
            (A[44] = Y),
            (A[45] = C))
          : (C = A[45]),
        A[46] !== j || A[47] !== C
          ? ((w = (0, i.jsx)(z, { "data-environment-section": "tcpAccess", title: d, actions: j, children: C })),
            (A[46] = j),
            (A[47] = C),
            (A[48] = w))
          : (w = A[48]),
        A[49] !== T || A[50] !== P || A[51] !== K || A[52] !== B || A[53] !== $
          ? ((_ =
              null != K &&
              !P &&
              (0, i.jsx)(ed, {
                initialAccess: K.access,
                supported: $,
                hasConflict: (0, S.p)(T, K.config),
                onClose: () => q(null),
                onSave: (e) => {
                  ;(B(e), q(null))
                },
              })),
            (A[49] = T),
            (A[50] = P),
            (A[51] = K),
            (A[52] = B),
            (A[53] = $),
            (A[54] = _))
          : (_ = A[54]),
        A[55] !== w || A[56] !== _
          ? ((k = (0, i.jsxs)(i.Fragment, { children: [w, _] })), (A[55] = w), (A[56] = _), (A[57] = k))
          : (k = A[57]),
        k
      )
    }
    function ed(e) {
      let t,
        n,
        s,
        r,
        d,
        p,
        m,
        g,
        v,
        x,
        y,
        b,
        j,
        S,
        C,
        w,
        A,
        F,
        T,
        M,
        P,
        N,
        I,
        E,
        B,
        D,
        O,
        H,
        V,
        R,
        z = (0, o.c)(82),
        { initialAccess: G, supported: U, hasConflict: L, onClose: $, onSave: q } = e,
        Z = (0, l.A)(),
        W = (0, a.useId)(),
        [Y, Q] = (0, a.useState)(G),
        [J, X] = (0, a.useState)(""),
        [ee, et] = (0, a.useState)(null),
        en = Y.ip_ranges.length + Y.domains.length
      z[0] !== en || z[1] !== L || z[2] !== U || z[3] !== J
        ? ((t = !L && !J.trim() && (U || 0 === en)), (z[0] = en), (z[1] = L), (z[2] = U), (z[3] = J), (z[4] = t))
        : (t = z[4])
      let ei = t,
        eo = (0, a.useRef)(null),
        es = (0, a.useRef)(en)
      ;(z[5] !== en
        ? ((n = () => {
            ;(en > es.current && eo.current?.scrollIntoView({ block: "nearest" }), (es.current = en))
          }),
          (s = [en]),
          (z[5] = en),
          (z[6] = n),
          (z[7] = s))
        : ((n = z[6]), (s = z[7])),
        (0, a.useLayoutEffect)(n, s),
        z[8] !== Y || z[9] !== en || z[10] !== L || z[11] !== U || z[12] !== J
          ? ((r = function () {
              if (!U || !J.trim() || L) return
              let e = J.includes("/") ? "ip_ranges" : "domains",
                t = (0, el.Z)({ ...Y, [e]: [...Y[e], J] })
              t.ok
                ? t.access.ip_ranges.length + t.access.domains.length === en
                  ? et("duplicate")
                  : (Q(t.access), X(""), et(null))
                : et(t.reason)
            }),
            (z[8] = Y),
            (z[9] = en),
            (z[10] = L),
            (z[11] = U),
            (z[12] = J),
            (z[13] = r))
          : (r = z[13]))
      let er = r
      ;(z[14] !== $ ? ((d = (e) => !e && $()), (z[14] = $), (z[15] = d)) : (d = z[15]),
        z[16] !== Y || z[17] !== er || z[18] !== ei || z[19] !== q || z[20] !== J
          ? ((p = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), J.trim()) ? er() : ei && q(Y)
            }),
            (z[16] = Y),
            (z[17] = er),
            (z[18] = ei),
            (z[19] = q),
            (z[20] = J),
            (z[21] = p))
          : (p = z[21]),
        z[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(k.OO, {
              children: (0, i.jsx)(k.c7, { title: (0, i.jsx)(_.L3, { children: (0, i.jsx)(c.A, { ...eu.title }) }) }),
            })),
            (z[22] = m))
          : (m = z[22]),
        z[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)("p", {
              className: "text-sm text-secondary select-none",
              children: (0, i.jsx)(c.A, { ...eu.help }),
            })),
            (z[23] = g))
          : (g = z[23]),
        z[24] === Symbol.for("react.memo_cache_sentinel") ? ((v = ["ip_ranges", "domains"]), (z[24] = v)) : (v = z[24]),
        z[25] !== Y || z[26] !== L || z[27] !== Z
          ? ((x = (0, i.jsx)(i.Fragment, {
              children: v.flatMap((e) =>
                Y[e].map((t, n) =>
                  (0, i.jsxs)(
                    K.E,
                    {
                      className: "max-w-full gap-1",
                      variant: "outline",
                      children: [
                        (0, i.jsx)("span", { className: "min-w-0 truncate", title: t, children: t }),
                        (0, i.jsx)("button", {
                          "aria-label": Z.formatMessage(
                            {
                              id: "environmentSetup.tcpAccess.remove",
                              defaultMessage: "Remove {destination}",
                              description: "Remove one TCP destination from the list being edited",
                            },
                            { destination: t },
                          ),
                          className:
                            "cursor-interaction rounded-sm text-secondary hover:text-default focus-visible:outline-2 focus-visible:outline-ring",
                          type: "button",
                          disabled: L,
                          onClick: () => {
                            ;(Q({ ...Y, [e]: Y[e].filter((e, t) => t !== n) }), et(null))
                          },
                          children: (0, i.jsx)(f.Gmf, {}),
                        }),
                      ],
                    },
                    `${e}-${n}`,
                  ),
                ),
              ),
            })),
            (z[25] = Y),
            (z[26] = L),
            (z[27] = Z),
            (z[28] = x))
          : (x = z[28]),
        z[29] !== Z ? ((y = Z.formatMessage(eu.destination)), (z[29] = Z), (z[30] = y)) : (y = z[30]))
      let ea = null != ee,
        ec = !U || L
      ;(z[31] !== Z
        ? ((b = Z.formatMessage({
            id: "environmentSetup.tcpAccess.placeholder",
            defaultMessage: "10.44.0.8/32 or db.corp.example",
            description: "Example private TCP destination CIDR or hostname",
          })),
          (z[31] = Z),
          (z[32] = b))
        : (b = z[32]),
        z[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (e) => {
              ;(X(e.currentTarget.value), et(null))
            }),
            (z[33] = j))
          : (j = z[33]),
        z[34] !== er
          ? ((S = (e) => {
              "Enter" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), er())
            }),
            (z[34] = er),
            (z[35] = S))
          : (S = z[35]),
        z[36] !== W ||
        z[37] !== x ||
        z[38] !== y ||
        z[39] !== ea ||
        z[40] !== ec ||
        z[41] !== b ||
        z[42] !== S ||
        z[43] !== J
          ? ((C = (0, i.jsx)(h.pd, {
              ref: eo,
              leadingControl: x,
              autoFocus: !0,
              "aria-label": y,
              "aria-describedby": W,
              "aria-invalid": ea,
              disabled: ec,
              value: J,
              variant: "tags",
              placeholder: b,
              onChange: j,
              onKeyDown: S,
            })),
            (z[36] = W),
            (z[37] = x),
            (z[38] = y),
            (z[39] = ea),
            (z[40] = ec),
            (z[41] = b),
            (z[42] = S),
            (z[43] = J),
            (z[44] = C))
          : (C = z[44]))
      let ed = null == ee ? "text-xs text-secondary select-none" : "text-xs text-danger select-none",
        ep = null == ee ? void 0 : "alert"
      ;(z[45] !== ee
        ? ((w = null == ee ? (0, i.jsx)(c.A, { ...eu.syntax }) : (0, i.jsx)(c.A, { ...eu[ee] })),
          (z[45] = ee),
          (z[46] = w))
        : (w = z[46]),
        z[47] !== W || z[48] !== ed || z[49] !== ep || z[50] !== w
          ? ((A = (0, i.jsx)("p", { id: W, className: ed, role: ep, children: w })),
            (z[47] = W),
            (z[48] = ed),
            (z[49] = ep),
            (z[50] = w),
            (z[51] = A))
          : (A = z[51]),
        z[52] !== U
          ? ((F =
              !U &&
              (0, i.jsx)("p", {
                className: "text-sm text-secondary select-none",
                role: "status",
                children: (0, i.jsx)(c.A, { ...eu.unavailable }),
              })),
            (z[52] = U),
            (z[53] = F))
          : (F = z[53]),
        z[54] !== L
          ? ((T =
              L &&
              (0, i.jsx)("p", {
                className: "text-sm text-danger select-none",
                role: "alert",
                children: (0, i.jsx)(c.A, {
                  id: "environmentSetup.tcpAccess.conflict",
                  defaultMessage:
                    "The environment changed. Close and reopen this editor to review the latest destinations.",
                  description: "TCP destination dialog is stale after the server draft changed",
                }),
              })),
            (z[54] = L),
            (z[55] = T))
          : (T = z[55]))
      let ef = L || 0 === en
      ;(z[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = () => {
            ;(Q({ ip_ranges: [], domains: [] }), X(""), et(null))
          }),
          (P = (0, i.jsx)(c.A, {
            id: "environmentSetup.tcpAccess.clear",
            defaultMessage: "Clear all",
            description: "Remove every TCP destination grant from the list being edited",
          })),
          (z[56] = M),
          (z[57] = P))
        : ((M = z[56]), (P = z[57])),
        z[58] !== ef
          ? ((N = (0, i.jsx)(u.$, {
              className: "self-start",
              color: "secondary",
              disabled: ef,
              onClick: M,
              children: P,
            })),
            (z[58] = ef),
            (z[59] = N))
          : (N = z[59]),
        z[60] !== C || z[61] !== A || z[62] !== F || z[63] !== T || z[64] !== N
          ? ((I = (0, i.jsx)(k.OO, {
              children: (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [g, C, A, F, T, N] }),
            })),
            (z[60] = C),
            (z[61] = A),
            (z[62] = F),
            (z[63] = T),
            (z[64] = N),
            (z[65] = I))
          : (I = z[65]),
        z[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.configuration.dialog.cancel",
              defaultMessage: "Cancel",
              description: "Discard edits in a cloud environment configuration dialog",
            })),
            (z[66] = E))
          : (E = z[66]),
        z[67] !== $
          ? ((B = (0, i.jsx)(u.$, { color: "secondary", onClick: $, children: E })), (z[67] = $), (z[68] = B))
          : (B = z[68]))
      let eh = !ei
      return (
        z[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.configuration.dialog.save",
              defaultMessage: "Save",
              description: "Apply dialog edits to the cloud environment configuration being edited",
            })),
            (z[69] = D))
          : (D = z[69]),
        z[70] !== eh
          ? ((O = (0, i.jsx)(u.$, { color: "primary", type: "submit", disabled: eh, children: D })),
            (z[70] = eh),
            (z[71] = O))
          : (O = z[71]),
        z[72] !== B || z[73] !== O
          ? ((H = (0, i.jsx)(k.OO, { children: (0, i.jsxs)(k.Es, { children: [B, O] }) })),
            (z[72] = B),
            (z[73] = O),
            (z[74] = H))
          : (H = z[74]),
        z[75] !== I || z[76] !== H || z[77] !== p
          ? ((V = (0, i.jsxs)(k.R4, { as: "form", size: "viewport", onSubmit: p, children: [m, I, H] })),
            (z[75] = I),
            (z[76] = H),
            (z[77] = p),
            (z[78] = V))
          : (V = z[78]),
        z[79] !== V || z[80] !== d
          ? ((R = (0, i.jsx)(_.lG, { open: !0, size: "wide", onOpenChange: d, children: V })),
            (z[79] = V),
            (z[80] = d),
            (z[81] = R))
          : (R = z[81]),
        R
      )
    }
    let eu = (0, er.YK)({
      title: {
        id: "environmentSetup.tcpAccess.title",
        defaultMessage: "TCP destinations",
        description: "Settings label and dialog title for private network TCP destination grants",
      },
      edit: {
        id: "environmentSetup.tcpAccess.edit",
        defaultMessage: "Edit TCP destinations",
        description: "Accessible label for opening the TCP destination editor",
      },
      destination: {
        id: "environmentSetup.tcpAccess.destination",
        defaultMessage: "TCP destination",
        description: "Accessible label for a private IPv4 CIDR or hostname to allow through the environment VPN",
      },
      help: {
        id: "environmentSetup.tcpAccess.help",
        defaultMessage:
          "These saved destinations are for legacy environments. Automatic Tailscale access does not use this list. Tailscale routes and access rules still apply. TCP clients use HTTP CONNECT at proxy:8088 and supply their own credentials. Public internet access and HTTP secrets are configured separately.",
        description:
          "Explains that saved TCP destinations apply to legacy environments, while automatic Tailscale access is independent of this list. Tailnet routing and access policy still apply. TCP uses the HTTP CONNECT proxy and client-supplied credentials",
      },
      syntax: {
        id: "environmentSetup.tcpAccess.syntax",
        defaultMessage:
          "For legacy environments, press Enter to add an allowed IPv4 range in CIDR notation or a hostname. Wildcards such as *.corp.example allow subdomains but not corp.example itself. Hostnames must resolve to IPv4 addresses routed through Tailscale.",
        description:
          "Explains legacy TCP destination syntax and wildcard exclusions. Resolved IPv4 addresses must use a Tailscale route",
      },
      unavailable: {
        id: "environmentSetup.tcpAccess.unavailable",
        defaultMessage:
          "Adding legacy destinations requires a configured VPN with TCP support. You can still clear the saved list. Clearing this list does not disable automatic Tailscale access.",
        description:
          "Explains why additions to the saved legacy list are disabled. Clearing saved entries is allowed but does not revoke automatic Tailscale access",
      },
      range: {
        id: "environmentSetup.tcpAccess.range",
        defaultMessage:
          "Use a canonical IPv4 CIDR within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or 100.64.0.0/10, such as 10.44.0.8/32",
        description: "TCP range validation error; CIDR must use the network address without host bits",
      },
      domain: {
        id: "environmentSetup.tcpAccess.domain",
        defaultMessage:
          "Enter a hostname such as db.corp.example or *.corp.example, without a URL, path, IP address, or port",
        description: "TCP hostname validation error",
      },
      duplicate: {
        id: "environmentSetup.tcpAccess.duplicate",
        defaultMessage: "This destination is already in the list",
        description: "TCP destination already exists in the edited legacy list",
      },
    })
    var ep = n("plV3"),
      ef = n("WODk"),
      eh = n("irkb"),
      em = n("xSOA"),
      eg = n("NsMq"),
      ev = n("v7qY"),
      ex = n("ZtSy")
    function ey(e) {
      let t,
        n,
        s,
        r,
        d,
        p,
        m,
        g,
        v,
        x,
        y,
        b,
        j,
        S,
        C,
        w,
        A,
        F,
        T,
        M,
        P,
        N,
        I,
        E,
        B,
        D,
        O,
        H = (0, o.c)(67),
        { initialValue: V, onClose: R, onCloseAutoFocus: z, onSave: G } = e,
        U = (0, l.A)(),
        L = (0, a.useId)(),
        $ = (0, a.useId)(),
        K = (0, a.useId)(),
        q = (0, a.useRef)(null),
        [Z, W] = (0, a.useState)(V),
        [Y, Q] = (0, a.useState)(!1),
        [J, X] = (0, a.useState)(!1)
      H[0] !== Z
        ? ((t = (n = Z.trim()).length <= 4096 && /^tskey-auth-[A-Za-z0-9-]+$/.test(n)),
          (H[0] = Z),
          (H[1] = t),
          (H[2] = n))
        : ((t = H[1]), (n = H[2]))
      let ee = t,
        et = J && !ee
      ;(H[3] !== z ? ((s = { onCloseAutoFocus: z }), (H[3] = z), (H[4] = s)) : (s = H[4]),
        H[5] !== R ? ((r = (e) => !e && R()), (H[5] = R), (H[6] = r)) : (r = H[6]),
        H[7] !== G || H[8] !== n || H[9] !== ee
          ? ((d = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), X(!0), ee && G(n))
            }),
            (H[7] = G),
            (H[8] = n),
            (H[9] = ee),
            (H[10] = d))
          : (d = H[10]),
        H[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(c.A, {
              id: "environmentSetup.vpn.keySetupHelp",
              defaultMessage: "Enter a reusable Tailscale auth key. <link>Key setup guide</link>",
              description:
                "Guidance beside the Tailscale key input. Each new cloud machine may enroll again, so the key must be reusable. The link opens Tailscale's official key setup, expiry, and access guidance.",
              values: { link: ej },
            })),
            (H[11] = p))
          : (p = H[11]),
        H[12] !== $
          ? ((m = (0, i.jsx)("p", { id: $, className: "select-none", children: p })), (H[12] = $), (H[13] = m))
          : (m = H[13]),
        H[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(_.L3, {
              children: (0, i.jsx)(c.A, {
                id: "environmentSetup.vpn.dialogTitle",
                defaultMessage: "Tailscale VPN",
                description: "Title of the dialog for entering a Tailscale VPN authentication key",
              }),
            })),
            (H[14] = g))
          : (g = H[14]),
        H[15] !== m
          ? ((v = (0, i.jsx)(k.OO, {
              children: (0, i.jsx)(k.c7, { subtitleSize: "sm", subtitleTone: "secondary", subtitle: m, title: g }),
            })),
            (H[15] = m),
            (H[16] = v))
          : (v = H[16]),
        H[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.vpn.key",
              defaultMessage: "Tailscale auth key",
              description: "Label for the Tailscale authentication key used by this environment",
            })),
            (H[17] = x))
          : (x = H[17]),
        H[18] !== L
          ? ((y = (0, i.jsx)("label", { className: "select-none", htmlFor: L, children: x })), (H[18] = L), (H[19] = y))
          : (y = H[19]))
      let en = Y ? "text" : "password",
        ei = et ? K : null
      H[20] !== $ || H[21] !== ei
        ? ((b = [$, ei].filter(Boolean)), (H[20] = $), (H[21] = ei), (H[22] = b))
        : (b = H[22])
      let eo = b.join(" ")
      return (
        H[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (e) => {
              W(e.currentTarget.value)
            }),
            (H[23] = j))
          : (j = H[23]),
        H[24] !== Z || H[25] !== L || H[26] !== et || H[27] !== en || H[28] !== eo
          ? ((S = (0, i.jsx)(h.pd, {
              id: L,
              ref: q,
              autoFocus: !0,
              type: en,
              autoComplete: "off",
              spellCheck: !1,
              maxLength: 4096,
              "aria-describedby": eo,
              "aria-invalid": et,
              value: Z,
              onChange: j,
            })),
            (H[24] = Z),
            (H[25] = L),
            (H[26] = et),
            (H[27] = en),
            (H[28] = eo),
            (H[29] = S))
          : (S = H[29]),
        H[30] !== U || H[31] !== Y
          ? ((C = Y
              ? U.formatMessage({
                  id: "restricted.environmentSetup.vpn.hideTypedKey",
                  defaultMessage: "Hide entered key",
                  description: "Hides a newly entered VPN key after revealing it",
                })
              : U.formatMessage({
                  id: "restricted.environmentSetup.vpn.showTypedKey",
                  defaultMessage: "Show entered key",
                  description: "Reveals a newly entered VPN key, not the saved key",
                })),
            (H[30] = U),
            (H[31] = Y),
            (H[32] = C))
          : (C = H[32]),
        H[33] !== Y
          ? ((w = () => {
              let e = q.current,
                t = e?.selectionStart ?? null,
                n = e?.selectionEnd ?? null
              ;((0, ev.flushSync)(() => Q(!Y)), e?.getBoundingClientRect(), e?.setSelectionRange(t, n))
            }),
            (A = Y ? (0, i.jsx)(f.GsY, {}) : (0, i.jsx)(f.X9D, {})),
            (H[33] = Y),
            (H[34] = w),
            (H[35] = A))
          : ((w = H[34]), (A = H[35])),
        H[36] !== L || H[37] !== C || H[38] !== w || H[39] !== A
          ? ((F = (0, i.jsx)(u.$, {
              "aria-controls": L,
              "aria-label": C,
              color: "ghost",
              size: "icon",
              type: "button",
              onMouseDown: eb,
              onClick: w,
              children: A,
            })),
            (H[36] = L),
            (H[37] = C),
            (H[38] = w),
            (H[39] = A),
            (H[40] = F))
          : (F = H[40]),
        H[41] !== S || H[42] !== F
          ? ((T = (0, i.jsxs)(k.fh, { children: [S, F] })), (H[41] = S), (H[42] = F), (H[43] = T))
          : (T = H[43]),
        H[44] !== K || H[45] !== et || H[46] !== n
          ? ((M = et
              ? (0, i.jsx)("p", {
                  id: K,
                  className: "text-sm text-danger select-none",
                  role: "alert",
                  children:
                    0 === n.length
                      ? (0, i.jsx)(c.A, {
                          id: "environmentSetup.vpn.keyRequired",
                          defaultMessage: "A Tailscale auth key is required",
                          description:
                            "Validation error when saving the Tailscale key dialog with an empty or whitespace-only input. Cancel closes the dialog without changing the pending or saved key.",
                        })
                      : (0, i.jsx)(c.A, {
                          id: "restricted.environmentSetup.vpn.invalidKeyFormat",
                          defaultMessage:
                            "Supported keys start with tskey-auth- and contain only letters, numbers or hyphens",
                          description:
                            "Validation error for a Tailscale auth key with an invalid prefix, character, or length",
                        }),
                })
              : null),
            (H[44] = K),
            (H[45] = et),
            (H[46] = n),
            (H[47] = M))
          : (M = H[47]),
        H[48] !== y || H[49] !== T || H[50] !== M
          ? ((P = (0, i.jsx)(k.OO, { children: (0, i.jsxs)(k.RW, { children: [y, T, M] }) })),
            (H[48] = y),
            (H[49] = T),
            (H[50] = M),
            (H[51] = P))
          : (P = H[51]),
        H[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.configuration.dialog.cancel",
              defaultMessage: "Cancel",
              description: "Discard edits in a cloud environment configuration dialog",
            })),
            (H[52] = N))
          : (N = H[52]),
        H[53] !== R
          ? ((I = (0, i.jsx)(u.$, { color: "secondary", type: "button", onClick: R, children: N })),
            (H[53] = R),
            (H[54] = I))
          : (I = H[54]),
        H[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, i.jsx)(u.$, {
              color: "primary",
              type: "submit",
              children: (0, i.jsx)(c.A, {
                id: "restricted.environmentSetup.configuration.dialog.save",
                defaultMessage: "Save",
                description: "Apply dialog edits to the cloud environment configuration being edited",
              }),
            })),
            (H[55] = E))
          : (E = H[55]),
        H[56] !== I
          ? ((B = (0, i.jsx)(k.OO, { children: (0, i.jsxs)(k.Es, { children: [I, E] }) })), (H[56] = I), (H[57] = B))
          : (B = H[57]),
        H[58] !== P || H[59] !== B || H[60] !== d || H[61] !== v
          ? ((D = (0, i.jsxs)(k.R4, { as: "form", size: "viewport", onSubmit: d, children: [v, P, B] })),
            (H[58] = P),
            (H[59] = B),
            (H[60] = d),
            (H[61] = v),
            (H[62] = D))
          : (D = H[62]),
        H[63] !== s || H[64] !== D || H[65] !== r
          ? ((O = (0, i.jsx)(_.lG, { open: !0, contentProps: s, onOpenChange: r, children: D })),
            (H[63] = s),
            (H[64] = D),
            (H[65] = r),
            (H[66] = O))
          : (O = H[66]),
        O
      )
    }
    function eb(e) {
      return e.preventDefault()
    }
    function ej(e) {
      return (0, i.jsx)(
        ex.G,
        {
          appearance: "secondary",
          href: "https://tailscale.com/docs/features/access-control/auth-keys",
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser",
          children: e,
        },
        "key-setup-guide",
      )
    }
    function eS({ configuration: e, isReadOnly: t, isVisible: n = !0, onDraftSaved: o, onPendingChange: s, ref: r }) {
      let d = (0, l.A)(),
        p = (0, a.useId)(),
        h = (0, a.useRef)(null),
        m = H.appServices?.environmentConfigs,
        g = (0, eh.jE)(),
        [v, x] = (0, a.useState)(null),
        y = v?.type === "set" ? v.authKey : "",
        b = v?.type === "remove",
        [j, S] = (0, a.useState)(!1),
        C = y.trim().length <= 4096 && /^tskey-auth-[A-Za-z0-9-]+$/.test(y.trim()),
        [w, _] = (0, a.useState)(!1),
        [k, A] = (0, a.useState)(!1),
        [F, T] = (0, a.useState)(!1),
        [M, P] = (0, a.useState)(null)
      function N(e) {
        ;(x(e), s?.(null != e, !0, e?.type === "remove"))
      }
      let I = (0, eg.l4)(e.accountId, e.userId, e.configId, e.draftId),
        O = (0, ea.g)(e),
        V = O.queryKey,
        R = { accountId: e.accountId, userId: e.userId, configId: e.configId, draftId: e.draftId },
        { data: U, isPending: L, isError: $, isFetching: K, refetch: Z } = (0, D.I)(O),
        W = async () => {
          if (null == m) return null
          try {
            let t = await (0, eg.UG)(m, e.accountId, e.userId, e.configId, e.draftId)
            return (g.setQueryData(I, t), o?.(t), t)
          } catch {
            return null
          }
        },
        { mutateAsync: Y, isPending: Q } = (0, em.n)({
          retry: !1,
          mutationFn: async (t) => {
            let n = { stack: [], error: void 0, hasError: !1 }
            try {
              let i = m?.requestVpn
              if (null == m || null == i || null == U) throw Error("unavailable")
              let o = y.trim()
              N(null)
              let s = (0, E.mS)(n, await i({ ...R, method: "GET" }), !1)
              if (!s.ok) throw Error("not-saved")
              if ((g.setQueryData(V, s.data), t)) {
                let e = { stack: [], error: void 0, hasError: !1 }
                try {
                  if (U.connection?.id !== s.data.connection?.id || U.connection?.etag !== s.data.connection?.etag)
                    throw Error("changed")
                  let t = (0, E.mS)(
                    e,
                    await m.request({
                      ...R,
                      method: "PATCH",
                      body: {
                        base_version_id: s.data.base_version_id,
                        expected_revision: s.data.draft_revision ?? void 0,
                        vpn_connection_id: "",
                        tcp_network_access: { ip_ranges: [], domains: [] },
                      },
                    }),
                    !1,
                  )
                  if (!t.ok) throw Error(t.error)
                  return null
                } catch (t) {
                  ;((e.error = t), (e.hasError = !0))
                } finally {
                  ;(0, E.hk)(e)
                }
              } else {
                let t = { stack: [], error: void 0, hasError: !1 }
                try {
                  if (U.connection?.id !== s.data.connection?.id || U.connection?.etag !== s.data.connection?.etag)
                    throw Error("changed")
                  let n = (t) =>
                      i({
                        ...R,
                        method: "POST",
                        body: {
                          provider: "tailscale",
                          auth_method: "auth_key",
                          connection_id: null == e.draftId ? t.connection?.id : void 0,
                          expected_etag: null == e.draftId ? t.connection?.etag : void 0,
                          auth_key: o,
                          base_version_id: t.base_version_id,
                          expected_draft_revision: t.draft_revision ?? void 0,
                        },
                      }),
                    r = (0, E.mS)(t, await n(s.data), !1)
                  if (r.ok) return r.data
                  if (409 === r.status && null == s.data.connection) {
                    let e = { stack: [], error: void 0, hasError: !1 }
                    try {
                      let t = (0, E.mS)(e, await i({ ...R, method: "GET" }), !1)
                      if (!t.ok) throw Error("not-saved")
                      if ((g.setQueryData(V, t.data), null == t.data.connection)) {
                        let e = { stack: [], error: void 0, hasError: !1 }
                        try {
                          let i = (0, E.mS)(e, await n(t.data), !1)
                          if (i.ok) return i.data
                          throw Error(400 === i.status ? "invalid" : i.error)
                        } catch (t) {
                          ;((e.error = t), (e.hasError = !0))
                        } finally {
                          ;(0, E.hk)(e)
                        }
                      }
                    } catch (t) {
                      ;((e.error = t), (e.hasError = !0))
                    } finally {
                      ;(0, E.hk)(e)
                    }
                  }
                  throw Error(400 === r.status ? "invalid" : r.error)
                } catch (e) {
                  ;((t.error = e), (t.hasError = !0))
                } finally {
                  ;(0, E.hk)(t)
                }
              }
            } catch (e) {
              ;((n.error = e), (n.hasError = !0))
            } finally {
              ;(0, E.hk)(n)
            }
          },
          onError: async (e, t) => {
            if ("refresh-failed" === e.message || "mismatch" === e.message) return
            let n = await Z()
            if ((_(n.isError), n.isError)) return
            let i = "uncertain"
            ;("changed" === e.message
              ? (i = "changed")
              : t
                ? (i = n.data?.connection == null ? null : "remove-failed")
                : "invalid" === e.message
                  ? (i = "invalid")
                  : ("not-saved" === e.message || n.data?.connection == null) && (i = "not-saved"),
              P((e) => ("uncertain" === e && null != i && n.data?.connection != null ? e : i)))
          },
          onSuccess: async (e, t) => {
            P(null)
            let [n, i] = await Promise.all([Z(), W()])
            if ((_(n.isError), A(null == i), null == i || n.isError)) throw Error("refresh-failed")
            if (t ? n.data?.connection != null : n.data?.connection?.etag !== e?.connection?.etag)
              throw (P("mismatch"), Error("mismatch"))
            return i
          },
        })
      ;(0, a.useImperativeHandle)(r, () => ({
        save: async () => {
          if (Q || L || $ || w || k || null == U || (!b && !C)) throw Error("unavailable")
          await Y(b)
          let e = g.getQueryData(I)
          if (null == e) throw Error("refresh-failed")
          return e
        },
      }))
      let J = U?.capabilities.some(({ provider: e, auth_methods: t }) => "tailscale" === e && t.includes("auth_key"))
      if ((j && (!n || !J || t || Q || $) && S(!1), m?.requestVpn == null)) return null
      let X = (0, i.jsx)(c.A, {
        id: "restricted.environmentSetup.vpn.title",
        defaultMessage: "VPN",
        description: "Section for a cloud environment VPN connection",
      })
      if (!J)
        return (0, i.jsx)(z, {
          title: X,
          actions: L
            ? null
            : (0, i.jsx)(u.$, {
                color: "ghost",
                size: "settingsAction",
                disabled: K,
                onClick: () => void Z(),
                children: (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.vpn.refresh",
                  defaultMessage: "Refresh",
                  description:
                    "Reloads saved VPN key metadata and environment settings after an automatic refresh fails",
                }),
              }),
          children: (0, i.jsxs)("p", {
            className: "text-sm text-secondary select-none",
            role: $ ? "alert" : "status",
            children: [
              L &&
                (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.vpn.loading",
                  defaultMessage: "Loading saved key status…",
                  description: "Status while loading whether a VPN key is attached to the environment",
                }),
              !L &&
                $ &&
                (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.vpn.loadFailed",
                  defaultMessage: "Couldn't refresh saved key status",
                  description: "The latest VPN key attachment metadata could not be loaded",
                }),
              !L &&
                !$ &&
                (0, i.jsx)(c.A, {
                  id: "environmentSetup.vpn.unsupported",
                  defaultMessage: "VPN isn’t available for this environment",
                  description: "The environment service does not offer a supported VPN authentication method",
                }),
            ],
          }),
        })
      let ee = t || Q || L || $ || w || k || !J,
        et = U?.connection?.configured === !0 && !b,
        en = U?.connection != null,
        ei = $ || w || k || null != M || (y.length > 0 && !C),
        eo = (0, i.jsx)(B.m, {
          content: en
            ? (0, i.jsx)(c.A, {
                id: "restricted.environmentSetup.vpn.removeHelp",
                defaultMessage: "Removes VPN and TCP destinations when you save",
                description:
                  "Removing VPN clears any entered replacement and stages removal of the saved VPN and TCP grants. It does not delete credentials needed by older published versions.",
              })
            : (0, i.jsx)(c.A, {
                id: "environmentSetup.vpn.clearEnteredKeyHelp",
                defaultMessage: "Clears the entered key from your pending changes",
                description:
                  "The removal button discards an entered VPN key from pending environment changes without making a server request.",
              }),
          children: (0, i.jsx)(u.$, {
            "aria-label": d.formatMessage({
              id: "restricted.environmentSetup.vpn.remove",
              defaultMessage: "Remove VPN from draft",
              description:
                "Clears the entered key and stages removal of any saved VPN from the draft without deleting its stored credentials",
            }),
            color: "ghost",
            size: "icon",
            type: "button",
            disabled: ee,
            onClick: () => {
              ;(N(en ? { type: "remove" } : null), h.current?.focus())
            },
            children: (0, i.jsx)(q.I, { asset: ef.c }),
          }),
        })
      return (0, i.jsxs)(z, {
        title: X,
        actions:
          null != v
            ? (0, i.jsx)(u.$, {
                "aria-label": d.formatMessage({
                  id: "environmentSetup.vpn.discardChangesLabel",
                  defaultMessage: "Discard VPN changes",
                  description:
                    "Discards a pending key replacement or VPN removal, returning to saved VPN settings without discarding other environment edits",
                }),
                color: "ghost",
                size: "settingsAction",
                type: "button",
                disabled: ee,
                onClick: () => {
                  ;(N(null), h.current?.focus())
                },
                children: (0, i.jsx)(c.A, {
                  id: "environmentSetup.vpn.discardChanges",
                  defaultMessage: "Discard changes",
                  description:
                    "Action beside the VPN section heading that discards pending VPN changes and returns to saved VPN settings. Other environment edits are preserved.",
                }),
              })
            : null,
        children: [
          (0, i.jsx)(G, {
            icon: (0, i.jsx)(eC, {}),
            name: (0, i.jsxs)("span", {
              className: "flex items-center gap-1",
              children: [
                (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.vpn.provider",
                  defaultMessage: "Tailscale",
                  description: "Name of the Tailscale VPN provider",
                }),
                (0, i.jsx)(B.m, {
                  content: (0, i.jsx)(c.A, {
                    id: "environmentSetup.vpn.networkAccessHelp",
                    defaultMessage:
                      "Connect to private services using your Tailscale network and DNS settings. Public internet access is controlled separately.",
                    description:
                      "Explains that Tailscale provides private network access and DNS independently of the public internet controls",
                  }),
                  children: (0, i.jsx)(u.$, {
                    "aria-label": d.formatMessage({
                      id: "environmentSetup.vpn.networkAccessAbout",
                      defaultMessage: "About Tailscale network access",
                      description: "Accessible label for information about Tailscale network access and DNS",
                    }),
                    color: "ghostSecondary",
                    size: "inline",
                    type: "button",
                    children: (0, i.jsx)(q.I, { asset: ep.c }),
                  }),
                }),
              ],
            }),
            provider: (0, i.jsxs)(i.Fragment, {
              children: [
                b &&
                  (0, i.jsx)(c.A, {
                    id: "environmentSetup.vpn.removalPending",
                    defaultMessage: "Removal pending",
                    description: "The VPN will be detached when the environment is saved",
                  }),
                !b &&
                  y.length > 0 &&
                  (0, i.jsx)(c.A, {
                    id: "environmentSetup.vpn.keyChangePending",
                    defaultMessage: "Key change pending",
                    description: "A Tailscale key has been entered but the environment has not been saved yet",
                  }),
                !b &&
                  0 === y.length &&
                  (et
                    ? (0, i.jsx)(c.A, {
                        id: "environmentSetup.vpn.configured",
                        defaultMessage: "Configured",
                        description:
                          "A Tailscale key is attached to the environment; this does not indicate a tested connection",
                      })
                    : (0, i.jsx)(c.A, {
                        id: "environmentSetup.vpn.notSet",
                        defaultMessage: "Key not set",
                        description: "No Tailscale key is attached to the environment",
                      })),
              ],
            }),
            actions: (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(u.$, {
                  ref: h,
                  "aria-label": d.formatMessage({
                    id: "environmentSetup.vpn.editKey",
                    defaultMessage: "Edit Tailscale auth key",
                    description: "Opens the dialog for entering or replacing the Tailscale VPN key",
                  }),
                  color: "ghost",
                  size: "icon",
                  type: "button",
                  disabled: ee,
                  onClick: () => S(!0),
                  children: (0, i.jsx)(f.Npl, {}),
                }),
                !b && (en || y.length > 0) ? eo : null,
              ],
            }),
            children: b
              ? (0, i.jsx)("p", {
                  className: "text-sm text-secondary select-none",
                  children: (0, i.jsx)(c.A, {
                    id: "environmentSetup.vpn.removalPendingHelp",
                    defaultMessage: "Saving removes VPN and TCP destinations",
                    description:
                      "Explains that the pending VPN removal will also clear its TCP destination allowlist on the next environment save",
                  }),
                })
              : null,
          }),
          j && !ee && n
            ? (0, i.jsx)(ey, {
                initialValue: y,
                onClose: () => {
                  S(!1)
                },
                onCloseAutoFocus: (e) => {
                  ;(e.preventDefault(), h.current?.focus())
                },
                onSave: (e) => {
                  ;(N({ type: "set", authKey: e }), S(!1))
                },
              })
            : null,
          ei
            ? (0, i.jsxs)("p", {
                id: p,
                className: "py-2 text-sm text-secondary select-none",
                role: "alert",
                children: [
                  !$ &&
                    !w &&
                    !k &&
                    y.length > 0 &&
                    !C &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.invalidKeyFormat",
                      defaultMessage:
                        "Supported keys start with tskey-auth- and contain only letters, numbers or hyphens",
                      description:
                        "Validation error for a Tailscale auth key with an invalid prefix, character, or length",
                    }),
                  $ &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.loadFailed",
                      defaultMessage: "Couldn't refresh saved key status",
                      description: "The latest VPN key attachment metadata could not be loaded",
                    }),
                  !$ &&
                    w &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.refreshFailed",
                      defaultMessage: "Couldn't confirm the saved key status after the change",
                      description: "The VPN change finished but the automatic read of saved key metadata failed",
                    }),
                  !$ &&
                    !w &&
                    k &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.configRefreshFailed",
                      defaultMessage: "VPN change saved, but the environment settings couldn't refresh",
                      description: "The VPN change succeeded but the separate environment configuration refresh failed",
                    }),
                  !$ &&
                    !w &&
                    !k &&
                    "not-saved" === M &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.notSaved",
                      defaultMessage: "Key wasn't saved. Paste it again and retry",
                      description: "No VPN key is attached after an attempted key save",
                    }),
                  !$ &&
                    !w &&
                    !k &&
                    "invalid" === M &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.invalidKey",
                      defaultMessage: "Couldn't save key. Check that it's a Tailscale auth key and try again",
                      description: "The VPN key save request was rejected as invalid",
                    }),
                  !$ &&
                    !w &&
                    !k &&
                    "changed" === M &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.changed",
                      defaultMessage: "Saved key settings changed. Review them before saving again",
                      description: "The saved VPN connection changed between opening and submitting the key field",
                    }),
                  !$ &&
                    !w &&
                    !k &&
                    "uncertain" === M &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.keyUncertain",
                      defaultMessage:
                        "A key is configured, but we couldn't confirm whether the new key was saved. Re-enter a known key if needed",
                      description:
                        "A failed replacement may have updated the key, but saved metadata cannot identify which key is stored",
                    }),
                  !$ &&
                    !w &&
                    !k &&
                    "remove-failed" === M &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.removeFailed",
                      defaultMessage: "VPN is still attached to this draft. Try removing it again",
                      description: "The VPN removal failed and a fresh read still shows an attached connection",
                    }),
                  !$ &&
                    !w &&
                    !k &&
                    "mismatch" === M &&
                    (0, i.jsx)(c.A, {
                      id: "restricted.environmentSetup.vpn.statusMismatch",
                      defaultMessage: "The refreshed key status didn't match the saved change",
                      description:
                        "The VPN save or removal succeeded but a fresh metadata read showed a different attachment",
                    }),
                ],
              })
            : null,
          $ || w || k
            ? (0, i.jsx)("div", {
                className: "flex justify-end gap-2",
                children: (0, i.jsx)(u.$, {
                  color: "secondary",
                  size: "compact",
                  type: "button",
                  disabled: Q || K,
                  loading: F,
                  onClick: () => {
                    ;(v?.type === "set" && N(null),
                      T(!0),
                      Promise.all([Z(), k ? W() : Promise.resolve(null)])
                        .then(([e, t]) => {
                          ;(_(e.isError), A(k && null == t))
                        })
                        .finally(() => T(!1)))
                  },
                  children: (0, i.jsx)(c.A, {
                    id: "restricted.environmentSetup.vpn.refresh",
                    defaultMessage: "Refresh",
                    description:
                      "Reloads saved VPN key metadata and environment settings after an automatic refresh fails",
                  }),
                }),
              })
            : null,
        ],
      })
    }
    function eC() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              "aria-hidden": "true",
              children: [
                (0, i.jsx)("circle", { cx: "2.5", cy: "2.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "8", cy: "2.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "13.5", cy: "2.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "2.5", cy: "8", r: "1.5" }),
                (0, i.jsx)("circle", { cx: "8", cy: "8", r: "1.5" }),
                (0, i.jsx)("circle", { cx: "13.5", cy: "8", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "2.5", cy: "13.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "8", cy: "13.5", r: "1.5" }),
                (0, i.jsx)("circle", { cx: "13.5", cy: "13.5", r: "1.5", opacity: "0.2" }),
              ],
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function ew(e) {
      let t,
        n,
        w,
        _,
        k,
        A,
        F,
        T,
        P,
        E,
        B,
        D,
        O,
        H = (0, o.c)(102),
        {
          configuration: V,
          draft: R,
          scriptBaseline: z,
          isReadOnly: G,
          readOnlyTooltip: U,
          onDraftChange: L,
          onDraftSaved: $,
          vpnRef: K,
          onVpnPendingChange: q,
          panelState: Z,
          secrets: W,
          config: Y,
          serverNetworkPolicy: Q,
          setSecrets: J,
          onRepositoriesChange: X,
          issues: et,
          environmentVariables: er,
          setEnvironmentVariables: ea,
          revealConnections: el,
          section: ed,
          showTcpDetails: eu,
        } = e
      H[0] !== et ? ((t = void 0 === et ? [] : et), (H[0] = et), (H[1] = t)) : (t = H[1])
      let ep = t,
        ef = void 0 !== el && el,
        eh = void 0 !== eu && eu,
        em = (0, r.Ul)(d.$v),
        eg = (0, l.A)(),
        [ev, ex] = (0, a.useState)(!1),
        ey = (0, r.Ul)(I.Y),
        eb = (0, a.useId)(),
        ej = (0, a.useId)()
      H[2] !== ef ? ((n = { revealConnections: ef, open: ef }), (H[2] = ef), (H[3] = n)) : (n = H[3])
      let [eC, ew] = (0, a.useState)(n)
      ;(eC.revealConnections !== ef && ew({ revealConnections: ef, open: eC.open || ef }),
        H[4] !== ep ? ((w = ep.filter(eF)), (H[4] = ep), (H[5] = w)) : (w = H[5]))
      let eT = w
      H[6] !== eC.open || H[7] !== eT || H[8] !== ep || H[9] !== ef || H[10] !== ed
        ? ((_ = eC.open || ef || "tcpAccess" === ed || eT.length > 0 || ep.some(eA)),
          (H[6] = eC.open),
          (H[7] = eT),
          (H[8] = ep),
          (H[9] = ef),
          (H[10] = ed),
          (H[11] = _))
        : (_ = H[11])
      let eM = _,
        [eP, eN] = (0, a.useState)(null)
      return (
        G && null != eP && eN(null),
        H[12] !== Y || H[13] !== eb || H[14] !== R || H[15] !== eg || H[16] !== G || H[17] !== L || H[18] !== ed
          ? ((k =
              null == ed && null != Y
                ? (0, i.jsxs)(m.X, {
                    children: [
                      (0, i.jsx)(m.X.Header, {
                        className: "select-none",
                        size: "base",
                        spacing: "compact",
                        title: (0, i.jsx)("label", { htmlFor: eb, children: (0, i.jsx)(c.A, { ...j.S }) }),
                      }),
                      (0, i.jsx)(m.X.Content, {
                        children: (0, i.jsx)(h.TM, {
                          id: eb,
                          placeholder: eg.formatMessage({
                            id: "environmentSetup.description.placeholder",
                            defaultMessage: "Describe when to use this environment",
                            description: "Placeholder for a cloud environment description explaining when to use it",
                          }),
                          readOnly: G,
                          rows: 2,
                          value: R.description ?? "",
                          variant: "settings",
                          onChange: (e) => {
                            let t = e.currentTarget.value
                            Array.from(t).length <= 512 && L({ description: t })
                          },
                        }),
                      }),
                    ],
                  })
                : null),
            (H[12] = Y),
            (H[13] = eb),
            (H[14] = R),
            (H[15] = eg),
            (H[16] = G),
            (H[17] = L),
            (H[18] = ed),
            (H[19] = k))
          : (k = H[19]),
        H[20] !== Y ||
        H[21] !== V ||
        H[22] !== R ||
        H[23] !== G ||
        H[24] !== ep ||
        H[25] !== X ||
        H[26] !== Z ||
        H[27] !== U ||
        H[28] !== ed
          ? ((A =
              null == ed || "repositories" === ed
                ? (0, i.jsx)("div", {
                    "data-environment-section": "repositories",
                    children: (0, i.jsx)(ei.G, {
                      config: Y,
                      isReadOnly: G,
                      readOnlyTooltip: U,
                      onChange: X,
                      configuration: V,
                      draft: R,
                      panelState: Z,
                      issues: ep,
                      showHeading: null == ed,
                    }),
                  })
                : null),
            (H[20] = Y),
            (H[21] = V),
            (H[22] = R),
            (H[23] = G),
            (H[24] = ep),
            (H[25] = X),
            (H[26] = Z),
            (H[27] = U),
            (H[28] = ed),
            (H[29] = A))
          : (A = H[29]),
        H[30] !== R || H[31] !== G || H[32] !== L || H[33] !== U || H[34] !== z || H[35] !== ed
          ? ((F =
              null == ed || "scripts" === ed
                ? (0, i.jsx)("div", {
                    "data-environment-section": "scripts",
                    children: (0, i.jsx)(es.m, {
                      baseline: z,
                      draft: R,
                      isReadOnly: G,
                      readOnlyTooltip: U,
                      onDraftChange: L,
                    }),
                  })
                : null),
            (H[30] = R),
            (H[31] = G),
            (H[32] = L),
            (H[33] = U),
            (H[34] = z),
            (H[35] = ed),
            (H[36] = F))
          : (F = H[36]),
        H[37] !== Y ||
        H[38] !== V ||
        H[39] !== R ||
        H[40] !== eg ||
        H[41] !== G ||
        H[42] !== ep ||
        H[43] !== L ||
        H[44] !== U ||
        H[45] !== W ||
        H[46] !== ed ||
        H[47] !== Q
          ? ((T =
              null == ed || "network" === ed || "secrets" === ed
                ? (0, i.jsx)(m.X, {
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        null == ed || "network" === ed
                          ? (0, i.jsx)(en._, {
                              draft: R,
                              onDraftChange: L,
                              isReadOnly: G,
                              readOnlyTooltip: U,
                              issues: ep,
                              notice: null != V && (0, i.jsx)(N.u, { configuration: V }),
                              children:
                                null == Q
                                  ? (0, i.jsx)(g.ic, {
                                      className: "select-none",
                                      controlSizing: "content",
                                      variant: "featured",
                                      size: "compact",
                                      control: (0, i.jsxs)(p.Ab, {
                                        contentWidth: "menu",
                                        triggerButton: (0, i.jsxs)(x.F, {
                                          tooltipContent: G ? U : null,
                                          "aria-label": eg.formatMessage({
                                            id: "restricted.environmentSetup.configuration.network.methods.trigger",
                                            defaultMessage: "Allowed HTTPS methods",
                                            description:
                                              "Accessible label for choosing simulated cloud environment HTTPS methods",
                                          }),
                                          color: "outline",
                                          disabled: G || !0 !== R.networkEnabled,
                                          size: "settingsAction",
                                          children: [
                                            null == R.networkHttpsMethods || "all" === R.networkHttpsMethods
                                              ? (0, i.jsx)(c.A, {
                                                  id: "restricted.environmentSetup.configuration.network.methods.all",
                                                  defaultMessage: "All",
                                                  description:
                                                    "Option allowing all HTTPS methods in a simulated cloud environment",
                                                })
                                              : R.networkHttpsMethods,
                                            (0, i.jsx)(f.Awc, {}),
                                          ],
                                        }),
                                        children: [
                                          (0, i.jsx)(p.ms.Item, {
                                            disabled: G,
                                            onSelect: () => L({ networkHttpsMethods: "all" }),
                                            children: (0, i.jsx)(c.A, {
                                              id: "restricted.environmentSetup.configuration.network.methods.all",
                                              defaultMessage: "All",
                                              description:
                                                "Option allowing all HTTPS methods in a simulated cloud environment",
                                            }),
                                          }),
                                          (0, i.jsx)(p.ms.Item, {
                                            disabled: G,
                                            onSelect: () => L({ networkHttpsMethods: "GET" }),
                                            children: (0, i.jsx)(c.A, {
                                              id: "environmentSetup.network.methods.get",
                                              defaultMessage: "GET",
                                              description: "The HTTP GET method name; preserve the protocol name",
                                            }),
                                          }),
                                          (0, i.jsx)(p.ms.Item, {
                                            disabled: G,
                                            onSelect: () => L({ networkHttpsMethods: "GET, POST" }),
                                            children: (0, i.jsx)(c.A, {
                                              id: "environmentSetup.network.methods.getPost",
                                              defaultMessage: "GET, POST",
                                              description:
                                                "The HTTP GET and POST method names; preserve the protocol names",
                                            }),
                                          }),
                                        ],
                                      }),
                                      label: (0, i.jsx)(c.A, {
                                        id: "restricted.environmentSetup.configuration.network.methods",
                                        defaultMessage: "Allowed HTTPS methods",
                                        description:
                                          "Label for allowed HTTPS methods in a mocked cloud environment settings panel",
                                      }),
                                    })
                                  : null,
                            })
                          : null,
                        null == ed || "network" === ed
                          ? (0, i.jsx)(M, { disabled: G, portals: R.portals, onChange: (e) => L({ portals: e }) })
                          : null,
                        null == ed || "secrets" === ed
                          ? (0, i.jsx)(b.m, {
                              secrets: W,
                              issues: ep,
                              isReadOnly: G,
                              readOnlyTooltip: U,
                              showHeading: null == ed,
                              onEdit: () => eN({ config: Y, secrets: W }),
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (H[37] = Y),
            (H[38] = V),
            (H[39] = R),
            (H[40] = eg),
            (H[41] = G),
            (H[42] = ep),
            (H[43] = L),
            (H[44] = U),
            (H[45] = W),
            (H[46] = ed),
            (H[47] = Q),
            (H[48] = T))
          : (T = H[48]),
        H[49] !== Y ||
        H[50] !== V ||
        H[51] !== er ||
        H[52] !== G ||
        H[53] !== ep ||
        H[54] !== U ||
        H[55] !== W ||
        H[56] !== ed ||
        H[57] !== ea
          ? ((P =
              null == ea || (null != ed && "variables" !== ed)
                ? null
                : (0, i.jsx)(C.W, {
                    configuration: V,
                    config: Y,
                    variables: er ?? [],
                    issues: ep,
                    unavailableNames: W.flatMap(ek),
                    isReadOnly: G,
                    readOnlyTooltip: U,
                    onChange: ea,
                    showHeading: null == ed,
                  })),
            (H[49] = Y),
            (H[50] = V),
            (H[51] = er),
            (H[52] = G),
            (H[53] = ep),
            (H[54] = U),
            (H[55] = W),
            (H[56] = ed),
            (H[57] = ea),
            (H[58] = P))
          : (P = H[58]),
        H[59] !== em ||
        H[60] !== Y?.is_owner ||
        H[61] !== R ||
        H[62] !== eg ||
        H[63] !== G ||
        H[64] !== L ||
        H[65] !== U ||
        H[66] !== ed
          ? ((E =
              null == ed || "privacy" === ed
                ? (0, i.jsxs)("section", {
                    className: "flex flex-col",
                    "data-environment-section": "privacy",
                    children: [
                      (0, i.jsx)(m.X.Header, {
                        className: "select-none",
                        size: "base",
                        spacing: "compact",
                        title: (0, i.jsx)(c.A, {
                          id: "restricted.environmentSetup.configuration.privacy.title",
                          defaultMessage: "Privacy",
                          description: "Heading for privacy controls in a mocked cloud environment settings panel",
                        }),
                      }),
                      (0, i.jsx)(m.X.Content, {
                        children: (0, i.jsx)(v.t, {
                          children: (0, i.jsx)(g.ic, {
                            className: "select-none",
                            controlSizing: "content",
                            variant: "featured",
                            size: "compact",
                            control: (0, i.jsxs)(p.Ab, {
                              contentWidth: "menu",
                              triggerButton: (0, i.jsxs)(x.F, {
                                tooltipContent: G ? U : null,
                                color: "outline",
                                disabled: G,
                                size: "settingsAction",
                                children: [
                                  (0, i.jsx)(f.nr3, {}),
                                  "organization" === R.access
                                    ? (0, i.jsx)(eo.s3, {})
                                    : (0, i.jsx)(c.A, {
                                        id: "restricted.environmentSetup.configuration.privacy.private",
                                        defaultMessage: "Only me",
                                        description:
                                          "Privacy option limiting a simulated cloud environment to its creator",
                                      }),
                                  (0, i.jsx)(f.Awc, {}),
                                ],
                              }),
                              children: [
                                (0, i.jsx)(p.ms.Item, {
                                  disabled: G || Y?.is_owner === !1,
                                  focusableWhenDisabled: !0,
                                  tooltipText:
                                    Y?.is_owner === !1
                                      ? eg.formatMessage({
                                          id: "environmentSetup.sharing.ownerOnlyTooltip",
                                          defaultMessage: "Ask the environment owner to make it private",
                                          description:
                                            "Tooltip on the disabled Only me sharing option when someone other than the environment owner is editing a shared environment",
                                        })
                                      : void 0,
                                  onSelect: () => L({ access: "private" }),
                                  children: (0, i.jsx)(c.A, {
                                    id: "restricted.environmentSetup.configuration.privacy.private",
                                    defaultMessage: "Only me",
                                    description: "Privacy option limiting a simulated cloud environment to its creator",
                                  }),
                                }),
                                em &&
                                  (0, i.jsx)(p.ms.Item, {
                                    disabled: G,
                                    onSelect: () => L({ access: "organization" }),
                                    children: (0, i.jsx)(eo.s3, {}),
                                  }),
                              ],
                            }),
                            label: (0, i.jsx)(c.A, {
                              id: "restricted.environmentSetup.configuration.privacy.label",
                              defaultMessage: "Who can use",
                              description: "Label for choosing who can use a simulated cloud environment",
                            }),
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (H[59] = em),
            (H[60] = Y?.is_owner),
            (H[61] = R),
            (H[62] = eg),
            (H[63] = G),
            (H[64] = L),
            (H[65] = U),
            (H[66] = ed),
            (H[67] = E))
          : (E = H[67]),
        H[68] !== ej ||
        H[69] !== Y ||
        H[70] !== V ||
        H[71] !== eT ||
        H[72] !== R ||
        H[73] !== G ||
        H[74] !== ep ||
        H[75] !== L ||
        H[76] !== $ ||
        H[77] !== q ||
        H[78] !== ey ||
        H[79] !== U ||
        H[80] !== ev ||
        H[81] !== ef ||
        H[82] !== ed ||
        H[83] !== eM ||
        H[84] !== eh ||
        H[85] !== K
          ? ((B =
              (null == ed || "connections" === ed || "tcpAccess" === ed) && (ey || ("connections" !== ed && null != V))
                ? (0, i.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    "data-environment-section": "connections",
                    children: [
                      null == ed
                        ? (0, i.jsxs)(u.$, {
                            className: "gap-2 self-start text-base",
                            "aria-controls": ej,
                            "aria-expanded": eM,
                            color: "ghostMuted",
                            size: "inline",
                            onClick: () => ew({ revealConnections: ef, open: !eM }),
                            children: [
                              (0, i.jsx)(c.A, {
                                id: "restricted.environmentSetup.oic.advanced",
                                defaultMessage: "Advanced",
                                description: "Disclosure for advanced environment configuration",
                              }),
                              (0, i.jsx)(f.Aq_, { className: (0, s.A)(!eM && "-rotate-90") }),
                            ],
                          })
                        : null,
                      (0, i.jsx)("div", {
                        id: ej,
                        hidden: !eM,
                        children: (0, i.jsx)(v.t, {
                          dividers: !1,
                          children: (0, i.jsxs)("div", {
                            className: "flex flex-col gap-2.5 px-4 py-3",
                            children: [
                              "tcpAccess" !== ed
                                ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      ey && eM
                                        ? (0, i.jsx)(
                                            ee,
                                            {
                                              configuration: V,
                                              requirements: R.outboundIdentityRequirements,
                                              issues: eT,
                                              isReadOnly: G,
                                              showHeading: null == ed,
                                              onChange: (e) => L({ outboundIdentityRequirements: e }),
                                            },
                                            null == V
                                              ? "local-environment"
                                              : `oic:${V.accountId}:${V.userId}:${V.configId}`,
                                          )
                                        : null,
                                      null == ed && null != V
                                        ? (0, i.jsx)(
                                            eS,
                                            {
                                              ref: K,
                                              configuration: V,
                                              isReadOnly: G,
                                              isVisible: eM,
                                              onDraftSaved: $,
                                              onPendingChange: (e, t, n) => {
                                                ;(ex(!0 === n), q?.(e, t))
                                              },
                                            },
                                            `vpn:${V.accountId}:${V.userId}:${V.configId}:${V.draftId ?? ""}`,
                                          )
                                        : null,
                                    ],
                                  })
                                : null,
                              "tcpAccess" === ed && null != V
                                ? (0, i.jsx)(
                                    ec,
                                    {
                                      configuration: V,
                                      config: Y,
                                      access: ev ? { ip_ranges: [], domains: [] } : R.tcpNetworkAccess,
                                      disabled: G || ev,
                                      disabledTooltip: U,
                                      issues: ep.filter(e_),
                                      showDetails: eh || "tcpAccess" === ed,
                                      onChange: (e) => L({ tcpNetworkAccess: e }),
                                    },
                                    `tcp:${V.accountId}:${V.userId}:${V.configId}:${V.draftId ?? ""}`,
                                  )
                                : null,
                            ],
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (H[68] = ej),
            (H[69] = Y),
            (H[70] = V),
            (H[71] = eT),
            (H[72] = R),
            (H[73] = G),
            (H[74] = ep),
            (H[75] = L),
            (H[76] = $),
            (H[77] = q),
            (H[78] = ey),
            (H[79] = U),
            (H[80] = ev),
            (H[81] = ef),
            (H[82] = ed),
            (H[83] = eM),
            (H[84] = eh),
            (H[85] = K),
            (H[86] = B))
          : (B = H[86]),
        H[87] !== Y || H[88] !== V || H[89] !== eP || H[90] !== G || H[91] !== J
          ? ((D =
              null == eP || G
                ? null
                : (0, i.jsx)(y.b, {
                    configuration: V,
                    initialSecrets: eP.secrets,
                    hasConflict: (0, S.p)(Y, eP.config),
                    requireValues: !1,
                    onClose: () => eN(null),
                    onLocalSave: J,
                  })),
            (H[87] = Y),
            (H[88] = V),
            (H[89] = eP),
            (H[90] = G),
            (H[91] = J),
            (H[92] = D))
          : (D = H[92]),
        H[93] !== F ||
        H[94] !== T ||
        H[95] !== P ||
        H[96] !== E ||
        H[97] !== B ||
        H[98] !== D ||
        H[99] !== k ||
        H[100] !== A
          ? ((O = (0, i.jsxs)(i.Fragment, { children: [k, A, F, T, P, E, B, D] })),
            (H[93] = F),
            (H[94] = T),
            (H[95] = P),
            (H[96] = E),
            (H[97] = B),
            (H[98] = D),
            (H[99] = k),
            (H[100] = A),
            (H[101] = O))
          : (O = H[101]),
        O
      )
    }
    function e_(e) {
      let { field: t } = e
      return "tcpAccess" === t
    }
    function ek(e) {
      let t = e.injectionTarget
      return t?.type === "environment_variable" ? [t.name] : []
    }
    function eA(e) {
      let { field: t, code: n } = e
      return "tcpAccess" === t || "tcp-unavailable" === n
    }
    function eF(e) {
      let { field: t } = e
      return t?.startsWith("connection-")
    }
  },
  JN4M(e, t, n) {
    var i = n("SRbQ"),
      o = n("zTeN"),
      s = n("GaA7"),
      r = n("OWtl"),
      a = n("Wuyk"),
      l = n("rvFo")
    let c = (0, o.vU)(r.u, (e) => {
      let t = s.appServices?.environmentConfigs
      return {
        queryKey: ["environment-outbound-identity", e?.accountId, e?.userId, e?.configId],
        enabled: null != t && null != e,
        staleTime: l.D.FIVE_SECONDS,
        refetchOnMount: "always",
        retry: a.kh,
        queryFn: async () => {
          let n = { stack: [], error: void 0, hasError: !1 }
          try {
            if (null == t || null == e) throw Error("Outbound identity is unavailable")
            let o = (0, i.mS)(
              n,
              await t.listOutboundIdentityConnections({
                accountId: e.accountId,
                userId: e.userId,
                configId: e.configId,
              }),
              !1,
            )
            if (
              !o.ok &&
              ("unavailable" === o.error ||
                ("http" === o.error &&
                  null != o.status &&
                  (408 === o.status || 425 === o.status || 429 === o.status || (o.status >= 500 && o.status < 600))))
            )
              throw Error("Outbound identity is unavailable")
            return o.ok ? { ok: !0, data: o.data } : { ok: !1, error: o.error, status: o.status }
          } catch (e) {
            ;((n.error = e), (n.hasError = !0))
          } finally {
            ;(0, i.hk)(n)
          }
        },
      }
    })
    n.d(t, {}, { h: c })
  },
  R3Dy(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      s = n("oyxz")
    n.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            n,
            r = (0, o.c)(8),
            { error: a, operation: l } = e
          if (403 === a.status) {
            let e
            ;(r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.oic.accessError",
                  defaultMessage:
                    "You do not have access to this operation, or outbound identity is unavailable for this workspace",
                  description:
                    "Explains denied outbound identity operations, including unavailable connections and disabled workspace rollout",
                })),
                (r[0] = e))
              : (e = r[0]),
              (t = e))
          } else if ("authentication" === a.error || 401 === a.status) {
            let e
            ;(r[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.oic.authenticationError",
                  defaultMessage:
                    "Your signed-in account changed or is unavailable. Sign in to this workspace and try again",
                  description: "Authentication error when the account changes during outbound identity management",
                })),
                (r[1] = e))
              : (e = r[1]),
              (t = e))
          } else if ("load" === (void 0 === l ? "write" : l)) {
            let e
            ;(r[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.oic.loadError",
                  defaultMessage: "Couldn't load OIDC connections",
                  description:
                    "Error when reading the workspace's available or attached OIDC connections fails, before any changes are made",
                })),
                (r[2] = e))
              : (e = r[2]),
              (t = e))
          } else if (409 === a.status) {
            let e
            ;(r[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.oic.conflictError",
                  defaultMessage:
                    "This connection changed while you were editing. Close and reopen it to load the current settings before saving",
                  description: "Recovery instructions when an outbound identity edit uses an old configuration version",
                })),
                (r[3] = e))
              : (e = r[3]),
              (t = e))
          } else if (400 === a.status || "invalid-request" === a.error) {
            let e
            ;(r[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.oic.configurationError",
                  defaultMessage:
                    "Check the provider fields, subject template, and custom claims. Claims must be a JSON object with string values and cannot replace reserved claims",
                  description: "Validation error for an outbound identity configuration",
                })),
                (r[4] = e))
              : (e = r[4]),
              (t = e))
          } else {
            let e
            ;(r[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.oic.requestError",
                  defaultMessage:
                    "Outbound identity is unavailable. Reload the connections and check whether your change was saved before trying again",
                  description:
                    "Recovery for an unavailable outbound identity request whose write outcome may be unknown",
                })),
                (r[5] = e))
              : (e = r[5]),
              (t = e))
          }
          return (
            r[6] !== t
              ? ((n = (0, i.jsx)("p", { role: "alert", className: "text-sm text-danger select-none", children: t })),
                (r[6] = t),
                (r[7] = n))
              : (n = r[7]),
            n
          )
        },
      },
    )
  },
  Y8ve(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      s = n("zTeN"),
      r = n("oyxz"),
      a = n("SPnB"),
      l = n("OAko"),
      c = n("JN4M")
    function d(e) {
      let { host: t } = e
      return t
    }
    n.d(
      t,
      {},
      {
        VV: function (e) {
          let t,
            n,
            s = (0, o.c)(8),
            { policy: a } = e
          if ("disabled" === a.type) {
            let e
            return (
              s[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(r.A, {
                    id: "restricted.environmentSetup.result.network.disabled",
                    defaultMessage: "Disabled",
                    description: "Value shown when networking is disabled for an environment setup result",
                  })),
                  (s[0] = e))
                : (e = s[0]),
              e
            )
          }
          if ("unrestricted" === a.type) {
            let e
            return (
              s[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(r.A, {
                    id: "restricted.environmentSetup.result.network.unrestricted",
                    defaultMessage: "Unrestricted",
                    description: "Summary for an environment that allows unrestricted network access",
                  })),
                  (s[1] = e))
                : (e = s[1]),
              e
            )
          }
          s[2] !== a.egress_rules
            ? ((t = new Set(a.egress_rules.map(d))), (s[2] = a.egress_rules), (s[3] = t))
            : (t = s[3])
          let l = t.size
          if (a.presets?.includes("package_managers")) {
            let e
            return (
              s[4] !== l
                ? ((e =
                    l > 0
                      ? (0, i.jsx)(r.A, {
                          id: "restricted.environmentSetup.result.network.packageManagersWithDomains",
                          defaultMessage:
                            "Package managers + {count, plural, one {# allowed domain} other {# allowed domains}}",
                          description:
                            "Network summary for the package-manager preset plus separately allowed domains; the count excludes domains supplied by the preset",
                          values: { count: l },
                        })
                      : (0, i.jsx)(r.A, {
                          id: "restricted.environmentSetup.result.network.packageManagers",
                          defaultMessage: "Package managers",
                          description: "Network summary when only the package-manager preset is allowed",
                        })),
                  (s[4] = l),
                  (s[5] = e))
                : (e = s[5]),
              e
            )
          }
          return (
            s[6] !== l
              ? ((n = (0, i.jsx)(r.A, {
                  id: "restricted.environmentSetup.result.network.domains",
                  defaultMessage: "{count, plural, one {# allowed domain} other {# allowed domains}}",
                  description:
                    "Number of explicitly allowed domains in a restricted environment network policy without presets",
                  values: { count: l },
                })),
                (s[6] = l),
                (s[7] = n))
              : (n = s[7]),
            n
          )
        },
        a7: function (e) {
          let t,
            n = (0, o.c)(2),
            { script: s } = e
          return (
            n[0] !== s
              ? ((t = s?.trim()
                  ? (0, i.jsx)(r.A, {
                      id: "environmentSetup.result.script.configured",
                      defaultMessage: "Configured",
                      description:
                        "Summary indicating that an environment install script or start skill contains non-whitespace content; this does not indicate review or validation",
                    })
                  : (0, i.jsx)(r.A, {
                      id: "restricted.environmentSetup.result.script.empty",
                      defaultMessage: "Not set",
                      description: "Summary for an empty environment install script or start skill",
                    })),
                (n[0] = s),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        iq: function (e) {
          let t,
            n,
            r = (0, o.c)(5),
            { configuration: a, requirement: l } = e,
            { data: d } = (0, s._U)(c.h, a)
          r[0] !== l || r[1] !== d
            ? ((t = d?.ok
                ? d.data.items.find((e) => {
                    let { connection_id: t } = e
                    return t === l.connection_id
                  })
                : void 0),
              (r[0] = l),
              (r[1] = d),
              (r[2] = t))
            : (t = r[2])
          let u = t,
            p = u?.display_name ?? l.connection_id
          return (r[3] !== p ? ((n = (0, i.jsx)(i.Fragment, { children: p })), (r[3] = p), (r[4] = n)) : (n = r[4]), n)
        },
        s3: function (e) {
          let t,
            n,
            c = (0, o.c)(8),
            { detail: d } = e,
            { data: u } = (0, l.YL)(),
            p = (0, s.Ul)(a.chatGptAuthenticatedAccountId$)
          c[0] !== u?.id || c[1] !== u?.name || c[2] !== p
            ? ((t = u?.id === p ? u?.name?.trim() : void 0), (c[0] = u?.id), (c[1] = u?.name), (c[2] = p), (c[3] = t))
            : (t = c[3])
          let f = t
          if (void 0 !== d && d) {
            let e
            return (
              c[4] !== f
                ? ((e = f
                    ? (0, i.jsx)(r.A, {
                        id: "restricted.environmentSetup.access.organizationDescriptionNamed",
                        defaultMessage: "Everyone in {workspaceName} can access",
                        description:
                          "Help text below the organization access option in environment onboarding. workspaceName is the authenticated workspace's display name; selecting the option lets its members use the environment",
                        values: { workspaceName: f },
                      })
                    : (0, i.jsx)(r.A, {
                        id: "restricted.environmentSetup.access.organizationDescriptionFallback",
                        defaultMessage: "Everyone in this workspace can access",
                        description:
                          "Help text below the organization access option in environment onboarding while the authenticated workspace name is unavailable; selecting the option lets workspace members use the environment",
                      })),
                  (c[4] = f),
                  (c[5] = e))
                : (e = c[5]),
              e
            )
          }
          return (
            c[6] !== f
              ? ((n = f
                  ? (0, i.jsx)(r.A, {
                      id: "restricted.environmentSetup.access.organizationName",
                      defaultMessage: "Everyone at {workspaceName}",
                      description:
                        "Short visibility option in environment onboarding, settings, task summary, and result. workspaceName is the authenticated workspace's display name; the other option is private access",
                      values: { workspaceName: f },
                    })
                  : (0, i.jsx)(r.A, {
                      id: "restricted.environmentSetup.access.organizationFallback",
                      defaultMessage: "Everyone in this workspace",
                      description:
                        "Short visibility option in environment onboarding, settings, task summary, and result while the authenticated workspace name is unavailable; the other option is private access",
                    })),
                (c[6] = f),
                (c[7] = n))
              : (n = c[7]),
            n
          )
        },
      },
    )
  },
  n0dE(e, t, n) {
    n.d(t, { m: () => I })
    var i = n("ABep"),
      o = n("QosV"),
      s = n("am05"),
      r = n("on57"),
      a = n("zd8w"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("Qgfj"),
      u = n("Sm6l"),
      p = n("JNtf"),
      f = n("mUDD"),
      h = n("bVeK"),
      m = n("X3K1"),
      g = n("kPrN"),
      v = n("BSnr"),
      x = n("AWNZ"),
      y = n("ZEx5"),
      b = n("NxjN"),
      j = n("MsoW"),
      S = n("PZKB"),
      C = n("NaqA"),
      w = n("DBCl"),
      _ = n("Ovip"),
      k = n("uNhY"),
      A = n("RxZZ"),
      F = n("kkEw"),
      T = n("dDkj")
    function M(e) {
      let t,
        n,
        s,
        r,
        l,
        c,
        d,
        u,
        p = (0, o.c)(20),
        { label: f, language: h, value: m, onChange: g } = e
      p[0] !== f || p[1] !== h || p[2] !== m
        ? ((t = () => ({ name: f, lang: h, contents: m })), (p[0] = f), (p[1] = h), (p[2] = m), (p[3] = t))
        : (t = p[3])
      let [v] = (0, a.useState)(t),
        x = (0, T.P)(),
        y = (0, T._)(x),
        b = (0, A.iK)(w.oKj.lightCodeThemeId),
        j = (0, A.iK)(w.oKj.darkCodeThemeId)
      p[4] !== y || p[5] !== j || p[6] !== b
        ? ((n = "light" === y ? (0, F.oW)(b, "light") : (0, F.oW)(j, "dark")),
          (p[4] = y),
          (p[5] = j),
          (p[6] = b),
          (p[7] = n))
        : (n = p[7])
      let M = n
      ;(p[8] === Symbol.for("react.memo_cache_sentinel") ? ((s = { onAttach: P }), (p[8] = s)) : (s = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, k.S)()), (p[9] = r)) : (r = p[9]))
      let I = M.name
      return (
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, _.M)({
              includeDiffHeader: !1,
              includeSimpleLineSeparators: !1,
              rootSelector: "[data-file]",
              surface: "var(--color-surface)",
            })),
            (p[10] = l))
          : (l = p[10]),
        p[11] !== y || p[12] !== M.name
          ? ((c = {
              preferredHighlighter: r,
              disableFileHeader: !0,
              overflow: "wrap",
              theme: I,
              themeType: y,
              useTokenTransformer: !0,
              unsafeCSS: `${l}
              [data-file], [data-code] {
                min-height: inherit;
              }
              [data-code] {
                align-content: start;
              }
              [data-file] {
                /* Align the editor's caret and selection overlays to code rows. */
                --diffs-line-height: round(nearest, calc(var(--diffs-font-size, 12px) * 1.8), 1px);
                line-height: var(--diffs-line-height);
              }
            `,
            }),
            (p[11] = y),
            (p[12] = M.name),
            (p[13] = c))
          : (c = p[13]),
        p[14] !== g ? ((d = (e) => g(e.file.contents)), (p[14] = g), (p[15] = d)) : (d = p[15]),
        p[16] !== v || p[17] !== c || p[18] !== d
          ? ((u = (0, i.jsx)("div", {
              className: "max-h-96 overflow-y-auto",
              children: (0, i.jsx)(S.eo, {
                createEditor: N,
                children: (0, i.jsx)(C.Z, {
                  className:
                    "min-h-40 [--diffs-dark:currentColor] [--diffs-editor-selection-bg:var(--color-background-text-selection)] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch]",
                  disableWorkerPool: !0,
                  edit: !0,
                  editorOptions: s,
                  file: v,
                  options: c,
                  onEditChange: d,
                }),
              }),
            })),
            (p[16] = v),
            (p[17] = c),
            (p[18] = d),
            (p[19] = u))
          : (u = p[19]),
        u
      )
    }
    function P(e) {
      return e.focus({ lineNumber: 1 })
    }
    function N(e, t, n) {
      return new j.K(e, t, n)
    }
    function I(e) {
      let t,
        n,
        s,
        d,
        u,
        p,
        f = (0, o.c)(20),
        { baseline: m, draft: g, isReadOnly: j, readOnlyTooltip: S, showHeading: C, onDraftChange: w } = e,
        _ = void 0 === C || C,
        k = (0, l.A)(),
        [A, F] = (0, a.useState)(null)
      return (
        j && null != A && F(null),
        f[0] !== _
          ? ((t =
              _ &&
              (0, i.jsx)(v.X.Header, {
                className: "select-none",
                size: "base",
                spacing: "compact",
                title: (0, i.jsx)(c.A, { ...O.scripts }),
              })),
            (f[0] = _),
            (f[1] = t))
          : (t = f[1]),
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = ["setupScript", "startSkill"]), (f[2] = n))
          : (n = f[2]),
        f[3] !== g || f[4] !== k || f[5] !== j || f[6] !== S
          ? ((s = (0, i.jsx)(v.X.Content, {
              children: (0, i.jsx)(y.t, {
                children: n.map((e) =>
                  (0, i.jsx)(
                    x.ic,
                    {
                      className: "select-none",
                      controlSizing: "content",
                      variant: "featured",
                      size: "compact",
                      label: (0, i.jsxs)("div", {
                        className: "flex min-w-0 items-center justify-between gap-3",
                        children: [
                          (0, i.jsx)("span", {
                            className: "shrink-0 select-none",
                            children: (0, i.jsx)(c.A, { ...O[e] }),
                          }),
                          (0, i.jsx)("span", {
                            className: (0, r.A)("truncate text-secondary", g[e] && "font-mono"),
                            children: g[e] || (0, i.jsx)(c.A, { ...O.empty }),
                          }),
                        ],
                      }),
                      control: (0, i.jsx)(b.F, {
                        "aria-label": k.formatMessage(O[e]),
                        color: "ghost",
                        disabled: j,
                        tooltipContent: j ? S : null,
                        size: "icon",
                        onClick: () => F(e),
                        children: (0, i.jsx)(h.Npl, {}),
                      }),
                    },
                    e,
                  ),
                ),
              }),
            })),
            (f[3] = g),
            (f[4] = k),
            (f[5] = j),
            (f[6] = S),
            (f[7] = s))
          : (s = f[7]),
        f[8] !== t || f[9] !== s
          ? ((d = (0, i.jsxs)(v.X, { children: [t, s] })), (f[8] = t), (f[9] = s), (f[10] = d))
          : (d = f[10]),
        f[11] !== m || f[12] !== g || f[13] !== A || f[14] !== j || f[15] !== w
          ? ((u =
              null == A || j
                ? null
                : (0, i.jsx)(E, {
                    field: A,
                    baseline: null == m ? void 0 : (m["setupScript" === A ? "install_script" : "start_skill"] ?? ""),
                    value: g[A] ?? "",
                    onClose: () => F(null),
                    onSave: (e) => {
                      ;(w({ [A]: e }), F(null))
                    },
                  })),
            (f[11] = m),
            (f[12] = g),
            (f[13] = A),
            (f[14] = j),
            (f[15] = w),
            (f[16] = u))
          : (u = f[16]),
        f[17] !== d || f[18] !== u
          ? ((p = (0, i.jsxs)(i.Fragment, { children: [d, u] })), (f[17] = d), (f[18] = u), (f[19] = p))
          : (p = f[19]),
        p
      )
    }
    function E(e) {
      let t,
        n,
        s,
        r,
        d,
        h,
        m,
        g,
        v,
        x,
        y,
        b = (0, o.c)(33),
        { field: j, baseline: S, value: C, onClose: w, onSave: _ } = e,
        k = (0, l.A)(),
        [A, F] = (0, a.useState)(),
        [T, P] = (0, a.useState)(null == S || S === C),
        N = A ?? C,
        I = null != S && S !== N,
        E = T || !I,
        H = "setupScript" === j ? "install.sh" : "SKILL.md"
      ;(b[0] !== w ? ((t = (e) => !e && w()), (b[0] = w), (b[1] = t)) : (t = b[1]),
        b[2] !== _ || b[3] !== N
          ? ((n = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), _(N))
            }),
            (b[2] = _),
            (b[3] = N),
            (b[4] = n))
          : (n = b[4]))
      let V = O[j]
      return (
        b[5] !== V
          ? ((s = (0, i.jsx)(f.OO, {
              children: (0, i.jsx)(f.c7, { title: (0, i.jsx)(p.L3, { children: (0, i.jsx)(c.A, { ...V }) }) }),
            })),
            (b[5] = V),
            (b[6] = s))
          : (s = b[6]),
        b[7] !== S || b[8] !== j || b[9] !== H || b[10] !== k || b[11] !== N || b[12] !== E || b[13] !== C
          ? ((r = (0, i.jsx)(f.OO, {
              children: (0, i.jsx)("div", {
                className: "overflow-hidden border border-subtle",
                children: E
                  ? (0, i.jsx)(
                      M,
                      {
                        label: k.formatMessage(O[j]),
                        language: "setupScript" === j ? "bash" : "markdown",
                        value: N,
                        onChange: F,
                      },
                      C,
                    )
                  : (0, i.jsx)(D, { baseline: S ?? "", filename: H, proposed: N }),
              }),
            })),
            (b[7] = S),
            (b[8] = j),
            (b[9] = H),
            (b[10] = k),
            (b[11] = N),
            (b[12] = E),
            (b[13] = C),
            (b[14] = r))
          : (r = b[14]),
        b[15] !== I || b[16] !== E
          ? ((d =
              I &&
              (0, i.jsx)(u.$, {
                color: "secondary",
                onClick: () => P(!E),
                children: E
                  ? (0, i.jsx)(c.A, {
                      id: "environmentSetup.script.reviewChanges",
                      defaultMessage: "Review changes",
                      description:
                        "Return from editing the proposed environment script to its diff against the last reviewed script",
                    })
                  : (0, i.jsx)(c.A, {
                      id: "environmentSetup.script.edit",
                      defaultMessage: "Edit",
                      description:
                        "Edit the proposed install script or start skill shown in the environment configuration diff",
                    }),
              })),
            (b[15] = I),
            (b[16] = E),
            (b[17] = d))
          : (d = b[17]),
        b[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(c.A, {
              id: "restricted.environmentSetup.configuration.dialog.cancel",
              defaultMessage: "Cancel",
              description: "Discard edits in a cloud environment configuration dialog",
            })),
            (b[18] = h))
          : (h = b[18]),
        b[19] !== w
          ? ((m = (0, i.jsx)(u.$, { color: "secondary", onClick: w, children: h })), (b[19] = w), (b[20] = m))
          : (m = b[20]),
        b[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(u.$, {
              color: "primary",
              type: "submit",
              children: (0, i.jsx)(c.A, {
                id: "restricted.environmentSetup.configuration.dialog.save",
                defaultMessage: "Save",
                description: "Apply dialog edits to the cloud environment configuration being edited",
              }),
            })),
            (b[21] = g))
          : (g = b[21]),
        b[22] !== d || b[23] !== m
          ? ((v = (0, i.jsx)(f.OO, { children: (0, i.jsxs)(f.Es, { children: [d, m, g] }) })),
            (b[22] = d),
            (b[23] = m),
            (b[24] = v))
          : (v = b[24]),
        b[25] !== v || b[26] !== n || b[27] !== s || b[28] !== r
          ? ((x = (0, i.jsxs)(f.R4, {
              as: "form",
              size: "viewport",
              onKeyDownCapture: B,
              onSubmit: n,
              children: [s, r, v],
            })),
            (b[25] = v),
            (b[26] = n),
            (b[27] = s),
            (b[28] = r),
            (b[29] = x))
          : (x = b[29]),
        b[30] !== t || b[31] !== x
          ? ((y = (0, i.jsx)(p.lG, { open: !0, size: "xxwide", onOpenChange: t, children: x })),
            (b[30] = t),
            (b[31] = x),
            (b[32] = y))
          : (y = b[32]),
        y
      )
    }
    function B(e) {
      "Enter" === e.key &&
        (e.metaKey || e.ctrlKey) &&
        (e.preventDefault(), e.stopPropagation(), e.currentTarget.requestSubmit())
    }
    function D(e) {
      let t,
        n,
        l,
        d,
        u,
        p,
        f = (0, o.c)(17),
        { baseline: h, filename: v, proposed: x } = e,
        [y, b] = (0, a.useState)(!1)
      f[0] !== h || f[1] !== v || f[2] !== x
        ? ((t = (0, s.$)({ name: v, contents: h }, { name: v, contents: x })),
          (f[0] = h),
          (f[1] = v),
          (f[2] = x),
          (f[3] = t))
        : (t = f[3])
      let j = t,
        S = !y,
        C = y ? "relative" : "absolute inset-x-0 top-0"
      return (
        f[4] !== C
          ? ((n = (0, r.A)(
              "overflow-clip [contain:content] [--codex-diffs-surface:var(--color-surface)] [--diffs-min-number-column-width:1ch]",
              C,
            )),
            (f[4] = C),
            (f[5] = n))
          : (n = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (e) => {
              e.shadowRoot?.querySelector("[data-line], [data-error-wrapper]") && b(!0)
            }),
            (f[6] = l))
          : (l = f[6]),
        f[7] !== j || f[8] !== n
          ? ((d = (0, i.jsx)(g.FileDiff, {
              className: n,
              diffStyle: "unified",
              expandUnchanged: !0,
              fileDiff: j,
              hunkSeparators: "simple",
              overflow: "wrap",
              onPostRender: l,
            })),
            (f[7] = j),
            (f[8] = n),
            (f[9] = d))
          : (d = f[9]),
        f[10] !== j || f[11] !== y
          ? ((u =
              !y &&
              (0, i.jsxs)("div", {
                className: "relative bg-surface px-3 pt-2 pb-3 text-sm",
                role: "status",
                children: [
                  (0, i.jsx)("span", {
                    className: "sr-only",
                    children: (0, i.jsx)(c.A, {
                      id: "codex.review.diff.loading",
                      defaultMessage: "Loading diff",
                      description: "Placeholder text shown while a review file diff is loading",
                    }),
                  }),
                  (0, i.jsx)(m.P, { lines: Math.min(j.unifiedLineCount, 12), minWidth: 42, maxWidth: 96 }),
                ],
              })),
            (f[10] = j),
            (f[11] = y),
            (f[12] = u))
          : (u = f[12]),
        f[13] !== S || f[14] !== d || f[15] !== u
          ? ((p = (0, i.jsxs)("div", {
              className: "relative max-h-96 overflow-y-auto",
              "aria-busy": S,
              children: [d, u],
            })),
            (f[13] = S),
            (f[14] = d),
            (f[15] = u),
            (f[16] = p))
          : (p = f[16]),
        p
      )
    }
    n("FN43")
    let O = (0, d.YK)({
      scripts: {
        id: "restricted.environmentSetup.configuration.scripts.title",
        defaultMessage: "Scripts",
        description: "Heading for cloud environment install commands and startup instructions",
      },
      setupScript: {
        id: "restricted.environmentSetup.configuration.installScript.title",
        defaultMessage: "Install script",
        description: "Heading for setup commands that install dependencies in a cloud environment",
      },
      startSkill: {
        id: "restricted.environmentSetup.configuration.startSkill.title",
        defaultMessage: "Start skill",
        description: "Heading for the skill used to start a configured cloud environment",
      },
      empty: {
        id: "restricted.environmentSetup.configuration.script.empty",
        defaultMessage: "Not set",
        description: "Preview for cloud environment installation or startup instructions that have not been configured",
      },
    })
  },
  iYyt(e, t, n) {
    let i = (0, n("iJY0").a)({
      name: "cloud-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
        visualBounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
        center: { x: 10, y: 9.166504 },
        insets: { top: 2.667969, right: 1.001465, bottom: 4.334961, left: 1.001465 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.166504 }, foreground: { x: 10, y: 9.166504 } },
      },
      capabilities: ["icon"],
      body: '<path d="M1.00146 10.833C1.00146 8.52389 2.6207 6.59406 4.78564 6.11523C5.64822 4.08974 7.65705 2.6681 9.99951 2.66797C12.9202 2.66797 15.3224 4.87836 15.6294 7.71777C17.5386 8.01995 18.9984 9.67212 18.9985 11.666C18.9985 13.8742 17.2077 15.665 14.9995 15.665H5.8335C3.16504 15.665 1.00146 13.5015 1.00146 10.833ZM2.33154 10.833C2.33154 12.7669 3.89958 14.335 5.8335 14.335H14.9995C16.4732 14.335 17.6685 13.1397 17.6685 11.666C17.6683 10.2488 16.5626 9.08908 15.1675 9.00293C14.7207 8.97537 14.3506 8.61516 14.3315 8.15137C14.2366 5.84171 12.3328 3.99805 9.99951 3.99805C8.14049 3.99818 6.55348 5.16887 5.93799 6.81543C5.82644 7.11391 5.5635 7.32722 5.25342 7.37891C3.59561 7.65482 2.33154 9.09703 2.33154 10.833Z" fill="currentColor"/>',
    })
    n.d(t, {}, { k: i })
  },
  bLM8(e, t, n) {
    let i = (0, n("iJY0").a)({
      name: "google-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.844727, y: 1.666626, width: 16.31082, height: 16.666626 },
        visualBounds: { x: 1.844727, y: 1.666626, width: 16.31082, height: 16.666626 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          { role: "fixed", color: "#3086FF" },
          { role: "fixed", color: "#1ABD4D" },
          { role: "fixed", color: "#6EC30D" },
          { role: "fixed", color: "#8AC502" },
          { role: "fixed", color: "#A2C600" },
          { role: "fixed", color: "#C8C903" },
          { role: "fixed", color: "#EBCB03" },
          { role: "fixed", color: "#F7CD07" },
          { role: "fixed", color: "#FDCD04" },
          { role: "fixed", color: "#FDCE05" },
          { role: "fixed", color: "#FFCE0A" },
          { role: "fixed", color: "#FB4E5A" },
          { role: "fixed", color: "#FF4540" },
          { role: "fixed", color: "#FF4541" },
          { role: "fixed", color: "#FF4640" },
          { role: "fixed", color: "#FF473F" },
          { role: "fixed", color: "#FF5138" },
          { role: "fixed", color: "#FF5B33" },
          { role: "fixed", color: "#FF6C29" },
          { role: "fixed", color: "#FF8C18" },
          { role: "fixed", color: "#0CBA65" },
          { role: "fixed", color: "#0BB86D" },
          { role: "fixed", color: "#09B479" },
          { role: "fixed", color: "#08AD93" },
          { role: "fixed", color: "#0AA6A9" },
          { role: "fixed", color: "#0D9CC6" },
          { role: "fixed", color: "#1893DD" },
          { role: "fixed", color: "#258BF1" },
          { role: "fixed", color: "#FF4E3A" },
          { role: "fixed", color: "#FF8A1B" },
          { role: "fixed", color: "#FFA312" },
          { role: "fixed", color: "#FFB60C" },
          { role: "fixed", color: "#FFCD0A" },
          { role: "fixed", color: "#FECF0A" },
          { role: "fixed", color: "#FECF08" },
          { role: "fixed", color: "#FDCD01" },
          { role: "fixed", color: "#FF4C3C" },
          { role: "fixed", color: "#FF692C" },
          { role: "fixed", color: "#FF7825" },
          { role: "fixed", color: "#FF8D1B" },
          { role: "fixed", color: "#FF9F13" },
          { role: "fixed", color: "#0FBC5F" },
          { role: "fixed", color: "#0FBC5E" },
          { role: "fixed", color: "#0FBC5D" },
          { role: "fixed", color: "#12BC58" },
          { role: "fixed", color: "#28BF3C" },
          { role: "fixed", color: "#38C02B" },
          { role: "fixed", color: "#52C218" },
          { role: "fixed", color: "#67C30F" },
          { role: "fixed", color: "#86C504" },
          { role: "fixed", color: "#0FBC5C" },
        ],
      },
      optical: {
        shape: "circular",
        bounds: { x: 1.844727, y: 1.666626, width: 16.31082, height: 16.666626 },
        center: { x: 10.000137, y: 9.999939 },
        insets: { top: 1.666626, right: 1.844453, bottom: 1.666748, left: 1.844727 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.000137, y: 9.999939 } },
      },
      capabilities: ["icon", "mask"],
      body: '<g transform="scale(1)"><mask mask-type="alpha" id="mask0_12431_95" maskUnits="userSpaceOnUse" x="2" y="1" width="16" height="18"> <path d="M17.8464 8.48416H10.1704V11.6256H14.581C14.5101 12.0702 14.3509 12.5076 14.1178 12.9064C13.8507 13.3633 13.5204 13.7112 13.182 13.9761C12.1681 14.7696 10.986 14.9319 10.1651 14.9319C8.09127 14.9319 6.31936 13.5629 5.63341 11.7027C5.60573 11.6352 5.58735 11.5655 5.56496 11.4966C5.41338 11.0231 5.33056 10.5217 5.33056 10.0006C5.33056 9.45821 5.42025 8.93902 5.58377 8.44867C6.2288 6.51475 8.04066 5.07029 10.1666 5.07029C10.5941 5.07029 11.0059 5.12228 11.3964 5.22597C12.2888 5.46294 12.9201 5.92965 13.3069 6.29881L15.6408 3.96428C14.2211 2.63474 12.3704 1.8291 10.1627 1.8291C8.39777 1.82906 6.76833 2.39071 5.43307 3.3399C4.35021 4.10967 3.46211 5.1403 2.86275 6.33726C2.30526 7.44709 2 8.67698 2 9.99936C2 11.3218 2.30573 12.5645 2.86322 13.664V13.6714C3.45207 14.8388 4.31316 15.8439 5.35974 16.6101C6.27403 17.2795 7.91344 18.171 10.1627 18.171C11.4561 18.171 12.6025 17.9328 13.6135 17.4865C14.3428 17.1645 14.989 16.7445 15.5741 16.2047C16.3471 15.4914 16.9525 14.6092 17.3657 13.5943C17.779 12.5793 18 11.4315 18 10.1871C18 9.60756 17.943 9.01901 17.8464 8.4841V8.48416Z" fill="black"/> </mask> <g mask="url(#mask0_12431_95)"> <g filter="url(#filter0_f_12431_95)"> <path d="M1.88184 10.0547C1.89032 11.3562 2.25344 12.6991 2.80307 13.7832V13.7907C3.20021 14.578 3.74298 15.1998 4.36119 15.816L8.09503 14.4245C7.38861 14.058 7.28081 13.8334 6.77443 13.4236C6.25694 12.8907 5.87126 12.2788 5.63107 11.5614H5.62139L5.63107 11.5539C5.47305 11.0802 5.45747 10.5773 5.45164 10.0547H1.88184Z" fill="url(#paint0_radial_12431_95)"/> </g> <g filter="url(#filter1_f_12431_95)"> <path d="M10.1703 1.76953C9.80123 3.09377 9.94233 4.38097 10.1703 5.12992C10.5964 5.13024 11.007 5.18213 11.3963 5.28549C12.2887 5.52246 12.9199 5.98918 13.3067 6.35835L15.7004 3.96418C14.2823 2.63622 12.5758 1.77162 10.1703 1.76953Z" fill="url(#paint1_radial_12431_95)"/> </g> <g filter="url(#filter2_f_12431_95)"> <path d="M10.1624 1.75879C8.35223 1.75875 6.68097 2.33481 5.31143 3.30838C4.80291 3.66986 4.33626 4.08744 3.92073 4.55179C3.81188 5.59486 4.73562 6.87689 6.5649 6.86628C7.45246 5.81179 8.76513 5.12953 10.2262 5.12953C10.2275 5.12953 10.2288 5.12964 10.2301 5.12965L10.1704 1.75903C10.1677 1.75903 10.1651 1.75879 10.1624 1.75879Z" fill="url(#paint2_radial_12431_95)"/> </g> <g filter="url(#filter3_f_12431_95)"> <path d="M16.1366 10.4327L14.5208 11.5664C14.4499 12.011 14.2906 12.4483 14.0575 12.8471C13.7904 13.3041 13.4602 13.6519 13.1217 13.9168C12.1099 14.7087 10.9309 14.8718 10.1102 14.8725C9.26192 16.3481 9.1132 17.0873 10.1699 18.2783C11.4774 18.2773 12.6366 18.0362 13.6591 17.5848C14.3982 17.2585 15.053 16.8328 15.6459 16.2858C16.4293 15.563 17.0429 14.6689 17.4617 13.6403C17.8805 12.6117 18.1044 11.4486 18.1044 10.1875L16.1366 10.4327Z" fill="url(#paint3_radial_12431_95)"/> </g> <g filter="url(#filter4_f_12431_95)"> <path d="M10.0508 8.36523V11.7454H17.8245C17.8928 11.2825 18.119 10.6835 18.119 10.1875C18.119 9.60801 18.062 8.90014 17.9654 8.36523H10.0508Z" fill="#3086FF"/> </g> <g filter="url(#filter5_f_12431_95)"> <path d="M3.95759 4.43262C3.47787 4.96871 3.06804 5.56875 2.7431 6.21769C2.18562 7.32751 1.88037 8.67675 1.88037 9.99912C1.88037 10.0178 1.88188 10.036 1.882 10.0546C2.12889 10.5381 5.29235 10.4455 5.45181 10.0546C5.45161 10.0364 5.44959 10.0186 5.44959 10.0003C5.44959 9.45791 5.53931 9.05814 5.70283 8.56779C5.90456 7.96295 6.22043 7.40598 6.62433 6.9261C6.71589 6.80671 6.96012 6.55004 7.03137 6.39609C7.05852 6.33745 6.9821 6.30453 6.97782 6.28389C6.97304 6.26081 6.87058 6.27937 6.84763 6.26218C6.77475 6.20757 6.63043 6.17906 6.54279 6.15372C6.35547 6.09955 6.04504 5.98008 5.87261 5.85625C5.32758 5.4648 4.47701 4.99723 3.95759 4.43262Z" fill="url(#paint4_radial_12431_95)"/> </g> <g filter="url(#filter6_f_12431_95)"> <path d="M5.88446 6.28664C7.14833 7.06859 7.5118 5.89194 8.3521 5.52374L6.89037 2.42773C6.35267 2.65856 5.84465 2.94534 5.37328 3.28042C4.66933 3.78083 4.04769 4.39148 3.53418 5.0864L5.88446 6.28664Z" fill="url(#paint5_radial_12431_95)"/> </g> <g filter="url(#filter7_f_12431_95)"> <path d="M6.39961 14.1858C4.70303 14.8114 4.43742 14.8338 4.28125 15.9077C4.57968 16.2052 4.90033 16.4803 5.24106 16.7298C6.15536 17.3992 7.91406 18.2907 10.1633 18.2907C10.1659 18.2907 10.1685 18.2905 10.1711 18.2905V14.8127C10.1694 14.8127 10.1674 14.8128 10.1657 14.8128C9.32348 14.8128 8.65043 14.5869 7.96035 14.194C7.79021 14.0971 7.48152 14.3572 7.3246 14.2409C7.10817 14.0805 6.58733 14.3791 6.39961 14.1858Z" fill="url(#paint6_radial_12431_95)"/> </g> <g opacity="0.5" filter="url(#filter8_f_12431_95)"> <path d="M9.17725 14.7031V18.2302C9.49195 18.2678 9.81947 18.2906 10.163 18.2906C10.5075 18.2906 10.8407 18.2726 11.1645 18.2394V14.7269C10.8016 14.7903 10.4599 14.8128 10.1655 14.8128C9.82645 14.8128 9.49672 14.7725 9.17725 14.7031Z" fill="url(#paint7_linear_12431_95)"/> </g> </g> <defs> <filter id="filter0_f_12431_95" x="1.85379" y="10.0266" width="6.26923" height="5.81782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter1_f_12431_95" x="9.91531" y="1.74148" width="5.81318" height="4.64496" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter2_f_12431_95" x="3.88406" y="1.73074" width="6.37421" height="5.16352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter3_f_12431_95" x="9.39724" y="10.1595" width="8.7353" height="8.14692" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter4_f_12431_95" x="10.0227" y="8.33719" width="8.12421" height="3.43598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter5_f_12431_95" x="1.85232" y="4.40457" width="5.21284" height="6.00727" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter6_f_12431_95" x="3.33699" y="2.23054" width="5.21226" height="4.51646" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0985963" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter7_f_12431_95" x="4.2532" y="14.1438" width="5.94599" height="4.17524" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter8_f_12431_95" x="9.1492" y="14.6751" width="2.0434" height="3.64399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <radialGradient id="paint0_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.02028 15.6934) rotate(-92.3395) scale(8.14501 11.964)"> <stop offset="0.141612" stop-color="#1ABD4D"/> <stop offset="0.247515" stop-color="#6EC30D"/> <stop offset="0.311547" stop-color="#8AC502"/> <stop offset="0.366013" stop-color="#A2C600"/> <stop offset="0.445673" stop-color="#C8C903"/> <stop offset="0.540305" stop-color="#EBCB03"/> <stop offset="0.615636" stop-color="#F7CD07"/> <stop offset="0.699345" stop-color="#FDCD04"/> <stop offset="0.771242" stop-color="#FDCE05"/> <stop offset="0.860566" stop-color="#FFCE0A"/> </radialGradient> <radialGradient id="paint1_radial_12431_95" cx="0" cy="0" r="1" gradientTransform="matrix(5.64645 -1.38605e-05 -7.93631e-06 7.29208 15.4764 6.18512)" gradientUnits="userSpaceOnUse"> <stop offset="0.408458" stop-color="#FB4E5A"/> <stop offset="1" stop-color="#FF4540"/> </radialGradient> <radialGradient id="paint2_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.393 0.703235) rotate(151.02) scale(9.04344 12.2719)"> <stop offset="0.231273" stop-color="#FF4541"/> <stop offset="0.311547" stop-color="#FF4540"/> <stop offset="0.457516" stop-color="#FF4640"/> <stop offset="0.540305" stop-color="#FF473F"/> <stop offset="0.699346" stop-color="#FF5138"/> <stop offset="0.771242" stop-color="#FF5B33"/> <stop offset="0.860566" stop-color="#FF6C29"/> <stop offset="1" stop-color="#FF8C18"/> </radialGradient> <radialGradient id="paint3_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2875 17.2206) rotate(-127.454) scale(23.5921 8.70842)"> <stop offset="0.131546" stop-color="#0CBA65"/> <stop offset="0.209784" stop-color="#0BB86D"/> <stop offset="0.297297" stop-color="#09B479"/> <stop offset="0.396257" stop-color="#08AD93"/> <stop offset="0.477124" stop-color="#0AA6A9"/> <stop offset="0.568425" stop-color="#0D9CC6"/> <stop offset="0.667385" stop-color="#1893DD"/> <stop offset="0.768727" stop-color="#258BF1"/> <stop offset="0.858506" stop-color="#3086FF"/> </radialGradient> <radialGradient id="paint4_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.4691 3.30239) rotate(96.6178) scale(8.80992 12.1812)"> <stop offset="0.366013" stop-color="#FF4E3A"/> <stop offset="0.457516" stop-color="#FF8A1B"/> <stop offset="0.540305" stop-color="#FFA312"/> <stop offset="0.615636" stop-color="#FFB60C"/> <stop offset="0.771242" stop-color="#FFCD0A"/> <stop offset="0.860566" stop-color="#FECF0A"/> <stop offset="0.915033" stop-color="#FECF08"/> <stop offset="1" stop-color="#FDCD01"/> </radialGradient> <radialGradient id="paint5_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.04147 3.21205) rotate(132.119) scale(4.37581 12.3422)"> <stop offset="0.315904" stop-color="#FF4C3C"/> <stop offset="0.603818" stop-color="#FF692C"/> <stop offset="0.726837" stop-color="#FF7825"/> <stop offset="0.884534" stop-color="#FF8D1B"/> <stop offset="1" stop-color="#FF9F13"/> </radialGradient> <radialGradient id="paint6_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.3937 19.2966) rotate(-151.02) scale(9.04344 12.2719)"> <stop offset="0.231273" stop-color="#0FBC5F"/> <stop offset="0.311547" stop-color="#0FBC5F"/> <stop offset="0.366013" stop-color="#0FBC5E"/> <stop offset="0.457516" stop-color="#0FBC5D"/> <stop offset="0.540305" stop-color="#12BC58"/> <stop offset="0.699346" stop-color="#28BF3C"/> <stop offset="0.771242" stop-color="#38C02B"/> <stop offset="0.860566" stop-color="#52C218"/> <stop offset="0.915033" stop-color="#67C30F"/> <stop offset="1" stop-color="#86C504"/> </radialGradient> <linearGradient id="paint7_linear_12431_95" x1="9.17725" y1="16.4969" x2="11.1645" y2="16.4969" gradientUnits="userSpaceOnUse"> <stop stop-color="#0FBC5C"/> <stop offset="1" stop-color="#0CBA65"/> </linearGradient> </defs></g>',
    })
    n.d(t, {}, { U: i })
  },
  NaqA(e, t, n) {
    n.d(t, { Z: () => j })
    var i = n("kkpv"),
      o = n("czcq"),
      s = n("IrFP"),
      r = n("NJmY"),
      a = n("zvlR"),
      l = n("uYgy"),
      c = n("UpEq"),
      d = n("vRTB"),
      u = n("HqzJ"),
      p = n("PZKB"),
      f = n("BfcI"),
      h = n("dVr3"),
      m = n("FaFd"),
      g = n("zd8w")
    let v = "u" < typeof window ? g.useEffect : g.useLayoutEffect
    function x({
      options: e,
      controlledSelection: t,
      hasCustomHeader: n,
      hasGutterRenderUtility: i,
      onEditChange: o,
      onEditComplete: s,
    }) {
      return t || i || n || null != o || null != s
        ? {
            ...e,
            controlledSelection: t,
            renderCustomHeader: n ? f.Zk : e?.renderCustomHeader,
            renderGutterUtility: i ? f.Zk : e?.renderGutterUtility,
            onEditChange: o,
            onEditComplete: s,
          }
        : e
    }
    function y(e, t) {
      let n = t()
      try {
        return n.edit(e)
      } catch (e) {
        throw (n.cleanUp(), e)
      }
    }
    var b = n("ABep")
    function j({
      file: e,
      lineAnnotations: t,
      selectedLines: n,
      options: f,
      editorOptions: S,
      editStateKey: C,
      metrics: w,
      className: _,
      style: k,
      renderAnnotation: A,
      renderCustomHeader: F,
      renderHeaderPrefix: T,
      renderHeaderFilenameSuffix: M,
      renderHeaderMetadata: P,
      prerenderedHTML: N,
      renderGutterUtility: I,
      disableWorkerPool: E = !1,
      edit: B = !1,
      onEditChange: D,
      onEditComplete: O,
    }) {
      let {
          ref: H,
          getHoveredLine: V,
          getAnnotationSlotName: R,
        } = (function ({
          file: e,
          options: t,
          editorOptions: n,
          editStateKey: i,
          lineAnnotations: o,
          selectedLines: s,
          prerenderedHTML: f,
          metrics: b,
          hasGutterRenderUtility: j,
          hasCustomHeader: S,
          disableWorkerPool: C,
          edit: w,
          onEditChange: _,
          onEditComplete: k,
        }) {
          let A = (0, m.Te)(),
            F = void 0 !== s,
            T = (0, g.useContext)(h.Al),
            M = (0, p.Bi)(),
            P = (0, u.K)((e) => _?.(e)),
            N = null != _ ? P : void 0,
            I = (0, g.useRef)(null),
            E = (0, u.K)((e) => {
              let t = k?.(e) ?? "reject"
              return (
                "accept" === t &&
                  (I.current = {
                    file: { installed: e.file, stale: e.originalFile },
                    annotations: { installed: e.lineAnnotations, stale: e.originalLineAnnotations },
                  }),
                t
              )
            }),
            B = null != k ? E : void 0,
            D = (0, g.useRef)(null),
            O = (0, g.useRef)(null),
            H = (0, u.K)(() => {
              if (null == M) throw Error("File: EditContext is not attached")
              return M("file", n ?? {}, i)
            }),
            V = (0, u.K)((n) => {
              if (null != n) {
                if (null != D.current) throw Error("File: An instance should not already exist when a node is created")
                ;(null != A
                  ? (D.current = new d.A(
                      x({
                        controlledSelection: F,
                        hasCustomHeader: S,
                        hasGutterRenderUtility: j,
                        onEditChange: N,
                        onEditComplete: B,
                        options: t,
                      }),
                      A,
                      b,
                      !C ? T : void 0,
                      !0,
                    ))
                  : (D.current = new c.Z(
                      x({
                        controlledSelection: F,
                        hasCustomHeader: S,
                        hasGutterRenderUtility: j,
                        onEditChange: N,
                        onEditComplete: B,
                        options: t,
                      }),
                      !C ? T : void 0,
                      !0,
                    )),
                  w && null == O.current && (O.current = y(D.current, H)),
                  D.current.hydrate({ file: e, fileContainer: n, lineAnnotations: o, prerenderedHTML: f }))
              } else {
                if (null == D.current) throw Error("File: A File instance should exist when unmounting")
                ;(D.current.cleanUp(), (D.current = null), (O.current = null))
              }
            })
          return (
            v(() => {
              let { current: n } = D
              if (null == n) return
              let i = x({
                  controlledSelection: F,
                  hasCustomHeader: S,
                  hasGutterRenderUtility: j,
                  onEditChange: N,
                  onEditComplete: B,
                  options: t,
                }),
                l = void 0 !== i && !(0, r.l)(n.options, i)
              if ((n.setOptions(i), !w && null != O.current)) {
                let { current: e } = O
                ;((O.current = null), e())
              }
              let c = (function (e, t, n) {
                let { current: i } = n
                if (null == i) return { file: e, lineAnnotations: t }
                let { file: o, annotations: s } = i,
                  r = e
                null != o && ((0, a.t)(e, o.stale) ? (r = o.installed) : (i.file = null))
                let l = t
                return (
                  null != s && (t === s.stale ? (l = s.installed) : (i.annotations = null)),
                  null == i.file && null == i.annotations && (n.current = null),
                  { file: r, lineAnnotations: l }
                )
              })(e, o, I)
              ;(n.render({ file: c.file, lineAnnotations: c.lineAnnotations, forceRender: l }),
                void 0 !== s && n.setSelectedLines(s),
                w && null == O.current && (O.current = y(n, H)))
            }),
            {
              ref: V,
              getHoveredLine: (0, g.useCallback)(() => D.current?.getHoveredLine(), []),
              getAnnotationSlotName: (0, g.useCallback)((e) => D.current?.getAnnotationSlotName(e) ?? (0, l.V)(e), []),
            }
          )
        })({
          file: e,
          options: f,
          editorOptions: S,
          editStateKey: C,
          metrics: w,
          lineAnnotations: t,
          selectedLines: n,
          prerenderedHTML: N,
          hasGutterRenderUtility: null != I,
          hasCustomHeader: null != F,
          disableWorkerPool: E,
          edit: B,
          onEditChange: D,
          onEditComplete: O,
        }),
        z = (0, o.Q)({
          file: e,
          renderAnnotation: A,
          renderCustomHeader: F,
          renderHeaderPrefix: T,
          renderHeaderFilenameSuffix: M,
          renderHeaderMetadata: P,
          renderGutterUtility: I,
          lineAnnotations: t,
          getHoveredLine: V,
          getAnnotationSlotName: R,
        })
      return (0, b.jsx)(i.mZ, { ref: H, className: _, style: k, children: (0, s.$)(z, N) })
    }
  },
}
//# sourceMappingURL=271015.68b0a9e9c3.js.map
