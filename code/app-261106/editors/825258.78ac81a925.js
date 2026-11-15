export const __rspack_esm_ids = [825258]
export const __webpack_modules__ = {
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
  LMkT(e, t, a) {
    var n = a("QosV"),
      i = a("D7Ms"),
      l = a("T0Rc"),
      r = a("zTeN"),
      s = a("G4E3"),
      o = a("SPnB"),
      d = a("TUMj"),
      c = a("K5PF"),
      u = a("e1xH"),
      p = a("qvFq"),
      m = a("tKel"),
      f = a("C8z7"),
      g = a("pyoT"),
      h = a("GaA7"),
      x = a("q77y"),
      b = a("Oj9r"),
      y = a("rvFo"),
      v = a("jv3l"),
      k = a("TJ1J")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            w,
            j,
            S,
            I,
            M,
            A,
            C,
            _,
            N,
            P,
            T,
            L = (0, n.c)(73),
            { openSource: B, resource: $, conversationId: z, hostId: W } = e,
            R = (0, r.gh)(b.GD),
            F = (0, d.Rn)(),
            K = (0, r.Ul)(g.spaceAccountId$),
            D = (0, r.Ul)(o.chatGptAuthenticatedUserId$),
            E = (0, r.Ul)(u.pagesEnabled$)
          L[0] !== z || L[1] !== W || L[2] !== F || L[3] !== $
            ? ((t = !!$ && !!z && !F && (0, v.f)(W)), (L[0] = z), (L[1] = W), (L[2] = F), (L[3] = $), (L[4] = t))
            : (t = L[4])
          let G = t
          L[5] !== G || L[6] !== $
            ? ((a = G && $ && !$.artifactRef.startsWith("artifact_external_")), (L[5] = G), (L[6] = $), (L[7] = a))
            : (a = L[7])
          let O = a
          L[8] !== K || L[9] !== O || L[10] !== z || L[11] !== W || L[12] !== D
            ? ((w =
                O && null != K && null != D && null != z ? { accountId: K, userId: D, hostId: W, threadId: z } : null),
              (L[8] = K),
              (L[9] = O),
              (L[10] = z),
              (L[11] = W),
              (L[12] = D),
              (L[13] = w))
            : (w = L[13])
          let U = (0, r._U)(c.h2, w)
          L[14] !== K || L[15] !== z || L[16] !== U || L[17] !== W || L[18] !== $?.artifactRef || L[19] !== D
            ? ((j = U?.find((e) => {
                let { source: t } = e
                return (
                  t.accountId === K &&
                  t.userId === D &&
                  t.hostId === W &&
                  t.threadId === z &&
                  t.artifactRef === $?.artifactRef
                )
              })),
              (L[14] = K),
              (L[15] = z),
              (L[16] = U),
              (L[17] = W),
              (L[18] = $?.artifactRef),
              (L[19] = D),
              (L[20] = j))
            : (j = L[20])
          let V = j,
            q = h.appServices?.artifactSessions,
            Q = $?.artifactRef
          ;(L[21] !== K || L[22] !== z || L[23] !== V || L[24] !== W || L[25] !== Q || L[26] !== D
            ? ((S = ["artifact-session-metadata", W, z, Q, K, D, V]),
              (L[21] = K),
              (L[22] = z),
              (L[23] = V),
              (L[24] = W),
              (L[25] = Q),
              (L[26] = D),
              (L[27] = S))
            : (S = L[27]),
            L[28] !== O || L[29] !== z || L[30] !== $
              ? ((I =
                  $ && !$.pageId && O && q && z
                    ? (e) => {
                        let { signal: t } = e
                        return (0, x.P)(q.getMetadata({ artifactRef: $.artifactRef, threadId: z }), t)
                      }
                    : i.hT),
                (L[28] = O),
                (L[29] = z),
                (L[30] = $),
                (L[31] = I))
              : (I = L[31]),
            L[32] !== S || L[33] !== I
              ? ((M = { queryKey: S, queryFn: I, retry: !1, staleTime: y.D.THIRTY_SECONDS }),
                (L[32] = S),
                (L[33] = I),
                (L[34] = M))
              : (M = L[34]))
          let { data: H } = (0, l.I)(M)
          if (L[35] !== K || L[36] !== H?.handoff?.target?.uri || L[37] !== E || L[38] !== $?.pageId) {
            A = $?.pageId
            let e = H?.handoff?.target?.uri
            if (!A && E && K && e) {
              let t
              L[40] !== e ? ((t = (0, s.I0)(e)), (L[40] = e), (L[41] = t)) : (t = L[41])
              let a = t
              a?.kind === "page" && new URL(e).searchParams.get("account_id") === K && (A = a.id)
            }
            ;((L[35] = K), (L[36] = H?.handoff?.target?.uri), (L[37] = E), (L[38] = $?.pageId), (L[39] = A))
          } else A = L[39]
          L[42] !== A ? ((C = A ? { kind: "page", id: A } : null), (L[42] = A), (L[43] = C)) : (C = L[43])
          let Z = (0, r._U)(m.TR, C)
          if (A) {
            let e
            if (
              (L[44] !== H?.title || L[45] !== Z || L[46] !== $?.title
                ? ((e = Z?.trim() || H?.title?.trim() || $?.title || null),
                  (L[44] = H?.title),
                  (L[45] = Z),
                  (L[46] = $?.title),
                  (L[47] = e))
                : (e = L[47]),
              (_ = e),
              E && K)
            ) {
              let e
              ;(L[48] !== K || L[49] !== B || L[50] !== A || L[51] !== R
                ? ((e = (e) => {
                    ;(0, p.openPageArtifactTarget)(R, (0, p.$)(K, A), e, { openSource: B })
                  }),
                  (L[48] = K),
                  (L[49] = B),
                  (L[50] = A),
                  (L[51] = R),
                  (L[52] = e))
                : (e = L[52]),
                (N = e))
            }
          } else {
            let e
            if (
              (L[53] !== H?.title || L[54] !== $?.title
                ? ((e = H?.title?.trim() || $?.title || null), (L[53] = H?.title), (L[54] = $?.title), (L[55] = e))
                : (e = L[55]),
              (_ = e),
              $ && G && z)
            ) {
              let e
              ;(L[56] !== z || L[57] !== W || L[58] !== $ || L[59] !== R
                ? ((e = (e) => {
                    ;(0, k.p)(R, { artifactRef: $.artifactRef, hostId: W, kind: $.kind, threadId: z, title: e })
                  }),
                  (L[56] = z),
                  (L[57] = W),
                  (L[58] = $),
                  (L[59] = R),
                  (L[60] = e))
                : (e = L[60]),
                (N = e))
            }
          }
          L[61] !== K || L[62] !== A || L[63] !== E || L[64] !== R || L[65] !== D
            ? ((P =
                A && K && E
                  ? (e) => {
                      R.get(g.spaceAccountId$) === K &&
                        R.get(o.chatGptAuthenticatedUserId$) === D &&
                        (0, f.$)(R, A, e, void 0, { prefetchPreview: !1, delayMs: 50 })
                    }
                  : void 0),
              (L[61] = K),
              (L[62] = A),
              (L[63] = E),
              (L[64] = R),
              (L[65] = D),
              (L[66] = P))
            : (P = L[66])
          let J = P
          return (
            L[67] !== G || L[68] !== N || L[69] !== J || L[70] !== A || L[71] !== _
              ? ((T = { title: _, pageId: A, onOpen: N, isAvailable: G, onPreload: J }),
                (L[67] = G),
                (L[68] = N),
                (L[69] = J),
                (L[70] = A),
                (L[71] = _),
                (L[72] = T))
              : (T = L[72]),
            T
          )
        },
      },
    )
  },
  nMUV(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("MwZW"),
      r = a("Cj22"),
      s = a("ROI2"),
      o = a("on57"),
      d = a("Sm6l"),
      c = a("HOLv"),
      u = a("JJW2")
    a.d(
      t,
      {},
      {
        $1: function (e) {
          let t,
            a,
            l,
            r = (0, i.c)(5),
            { label: o, onClose: u } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("div", { className: "ms-2 me-2 h-4 w-px bg-border" })), (r[0] = t))
              : (t = r[0]),
            r[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(c.I, { className: "text-default", "aria-hidden": !1, asset: s.Q })), (r[1] = a))
              : (a = r[1]),
            r[2] !== o || r[3] !== u
              ? ((l = (0, n.jsxs)("div", {
                  className: "col-[3/4] row-[1] flex h-[44px] items-center pe-4",
                  children: [
                    t,
                    (0, n.jsx)(d.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "ghost",
                      uniform: !0,
                      onClick: u,
                      "aria-label": o,
                      children: a,
                    }),
                  ],
                })),
                (r[2] = o),
                (r[3] = u),
                (r[4] = l))
              : (l = r[4]),
            l
          )
        },
        Af: function (e) {
          let t,
            a,
            l = (0, i.c)(5),
            { isVisible: r, label: s } = e,
            d = r ? "max-h-9 translate-y-0 py-2 opacity-100" : "max-h-0 -translate-y-2 py-0 opacity-0"
          return (
            l[0] !== d
              ? ((t = (0, o.A)(
                  "text-codex-description pointer-events-none col-[1/4] row-[2] min-w-0 px-4 text-end text-base leading-6 transition-[max-height,opacity,padding,translate] duration-basic ease-out",
                  d,
                )),
                (l[0] = d),
                (l[1] = t))
              : (t = l[1]),
            l[2] !== s || l[3] !== t
              ? ((a = (0, n.jsx)("span", { className: t, children: s })), (l[2] = s), (l[3] = t), (l[4] = a))
              : (a = l[4]),
            a
          )
        },
        rV: function (e) {
          let t,
            a,
            l,
            s,
            o,
            d,
            p = (0, i.c)(24),
            {
              autoFocus: m,
              id: f,
              isLoading: g,
              label: h,
              onChange: x,
              onEnter: b,
              onEscape: y,
              onFocus: v,
              placeholder: k,
              value: w,
            } = e,
            j = void 0 === m || m,
            S = void 0 !== g && g
          ;(p[0] !== S
            ? ((t = S
                ? (0, n.jsx)(u.A, { "aria-hidden": !0, className: "size-4 animate-spin text-default" })
                : (0, n.jsx)(c.I, { className: "text-default", "aria-hidden": !1, asset: r.Y })),
              (p[0] = S),
              (p[1] = t))
            : (t = p[1]),
            p[2] !== f || p[3] !== h
              ? ((a = (0, n.jsx)("label", { className: "sr-only", htmlFor: f, children: h })),
                (p[2] = f),
                (p[3] = h),
                (p[4] = a))
              : (a = p[4]))
          let I = S || void 0
          return (
            p[5] !== x
              ? ((l = (e) => {
                  x(e.target.value)
                }),
                (p[5] = x),
                (p[6] = l))
              : (l = p[6]),
            p[7] !== b || p[8] !== y
              ? ((s = (e) => {
                  if (
                    ("Enter" === e.key || "Escape" === e.key) &&
                    (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode)
                  )
                    return void e.stopPropagation()
                  if ("Enter" === e.key) {
                    ;(e.preventDefault(), b(e.shiftKey))
                    return
                  }
                  "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), y())
                }),
                (p[7] = b),
                (p[8] = y),
                (p[9] = s))
              : (s = p[9]),
            p[10] !== j ||
            p[11] !== f ||
            p[12] !== h ||
            p[13] !== v ||
            p[14] !== k ||
            p[15] !== I ||
            p[16] !== l ||
            p[17] !== s ||
            p[18] !== w
              ? ((o = (0, n.jsx)("input", {
                  id: f,
                  type: "text",
                  autoFocus: j,
                  value: w,
                  "aria-busy": I,
                  "aria-label": h,
                  placeholder: k,
                  className:
                    "h-6 min-w-0 flex-1 bg-transparent text-base leading-6 text-default outline-none placeholder:text-tertiary",
                  "data-codex-find-input": !0,
                  onChange: l,
                  onFocus: v,
                  onKeyDown: s,
                })),
                (p[10] = j),
                (p[11] = f),
                (p[12] = h),
                (p[13] = v),
                (p[14] = k),
                (p[15] = I),
                (p[16] = l),
                (p[17] = s),
                (p[18] = w),
                (p[19] = o))
              : (o = p[19]),
            p[20] !== t || p[21] !== a || p[22] !== o
              ? ((d = (0, n.jsxs)("div", {
                  className: "col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 ps-4",
                  children: [t, a, o],
                })),
                (p[20] = t),
                (p[21] = a),
                (p[22] = o),
                (p[23] = d))
              : (d = p[23]),
            d
          )
        },
        rr: function (e) {
          let t,
            a,
            r,
            s,
            u,
            p,
            m,
            f = (0, i.c)(18),
            { isVisible: g, matches: h, nextLabel: x, onNext: b, onPrevious: y, previousLabel: v } = e,
            k = g
              ? "max-h-9 translate-y-0 border-t py-2 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 border-t-0 py-0 opacity-0"
          f[0] !== k
            ? ((t = (0, o.A)(
                "col-[1/4] row-[2] flex min-w-0 items-center border-default px-4 text-base leading-6 transition-[border-width,max-height,opacity,padding,translate] duration-basic ease-out",
                k,
              )),
              (f[0] = k),
              (f[1] = t))
            : (t = f[1])
          let w = 0 === h
          ;(f[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(c.I, { "aria-hidden": !1, asset: l.l })), (f[2] = a))
            : (a = f[2]),
            f[3] !== y || f[4] !== v || f[5] !== w
              ? ((r = (0, n.jsx)(d.$, {
                  className: "h-4 w-4 p-0 text-codex-description",
                  size: "icon",
                  color: "ghost",
                  uniform: !0,
                  onClick: y,
                  disabled: w,
                  "aria-label": v,
                  children: a,
                })),
                (f[3] = y),
                (f[4] = v),
                (f[5] = w),
                (f[6] = r))
              : (r = f[6]))
          let j = 0 === h
          return (
            f[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, n.jsx)(c.I, { className: "rotate-180", "aria-hidden": !1, asset: l.l })), (f[7] = s))
              : (s = f[7]),
            f[8] !== x || f[9] !== b || f[10] !== j
              ? ((u = (0, n.jsx)(d.$, {
                  className: "h-4 w-4 p-0 text-codex-description",
                  size: "icon",
                  color: "ghost",
                  uniform: !0,
                  onClick: b,
                  disabled: j,
                  "aria-label": x,
                  children: s,
                })),
                (f[8] = x),
                (f[9] = b),
                (f[10] = j),
                (f[11] = u))
              : (u = f[11]),
            f[12] !== r || f[13] !== u
              ? ((p = (0, n.jsxs)("div", { className: "flex items-center gap-3", children: [r, u] })),
                (f[12] = r),
                (f[13] = u),
                (f[14] = p))
              : (p = f[14]),
            f[15] !== t || f[16] !== p
              ? ((m = (0, n.jsx)("div", { className: t, children: p })), (f[15] = t), (f[16] = p), (f[17] = m))
              : (m = f[17]),
            m
          )
        },
      },
    )
  },
  AXTp(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("on57")
    a.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            a,
            r = (0, i.c)(5),
            { children: s, className: o } = e
          return (
            r[0] !== o
              ? ((t = (0, l.A)(
                  "no-drag pointer-events-auto grid w-[340px] max-w-full grid-cols-[minmax(0,1fr)_auto_auto] overflow-hidden rounded-[20px] border-[0.5px] border-default bg-surface-secondary shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)]",
                  o,
                )),
                (r[0] = o),
                (r[1] = t))
              : (t = r[1]),
            r[2] !== s || r[3] !== t
              ? ((a = (0, n.jsx)("div", { className: t, children: s })), (r[2] = s), (r[3] = t), (r[4] = a))
              : (a = r[4]),
            a
          )
        },
      },
    )
  },
  EShr(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("slpy"),
      r = a("on57"),
      s = a("zd8w"),
      o = a("Sm6l")
    function d(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    a.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            a,
            c,
            u,
            p,
            m,
            f,
            g = (0, i.c)(21),
            {
              options: h,
              selectedId: x,
              onHover: b,
              onSelect: y,
              size: v,
              className: k,
              buttonClassName: w,
              fullWidth: j,
              wrapLabels: S,
              uniform: I,
              selectedColor: M,
              unselectedColor: A,
              focusRing: C,
              variant: _,
              ariaLabel: N,
              ariaLabelledBy: P,
            } = e
          g[0] !== h ? ((t = void 0 === h ? [] : h), (g[0] = h), (g[1] = t)) : (t = g[1])
          let T = t,
            L = void 0 !== j && j,
            B = void 0 !== S && S,
            $ = void 0 === _ ? "default" : _,
            z = (0, s.useRef)(null)
          g[2] !== x ? ((a = (e) => e.id === x), (g[2] = x), (g[3] = a)) : (a = g[3])
          let W = T.findIndex(a)
          g[4] !== T.length || g[5] !== W
            ? ((c =
                -1 === W
                  ? void 0
                  : {
                      "--segmented-form-indicator-width": `${100 / T.length}%`,
                      "--segmented-form-indicator-offset": `${100 * W}%`,
                    }),
              (g[4] = T.length),
              (g[5] = W),
              (g[6] = c))
            : (c = g[6])
          let R = c,
            F = v ?? "default",
            K = "default",
            D = void 0 === M ? "segmentedSelected" : M,
            E = void 0 === A ? "ghost" : A
          "inset" === $
            ? ((F = v ?? "compact"), (K = "large"), (D = "segmentedInsetSelected"))
            : "field" === $
              ? ((F = "fieldSegment"), (D = "segmentedInsetSelected"))
              : "form" === $
                ? ((F = v ?? "recoveryAction"),
                  (K = "full"),
                  (D = "segmentedFormSelected"),
                  (E = "segmentedFormUnselected"))
                : "pricing" === $
                  ? ((F = "dialog"), (K = "extraLarge"))
                  : "filter" === $
                    ? ((F = "compact"), (K = "full"), (D = "secondary"), (E = "ghostTertiary"))
                    : "viewer" === $ && ((F = "inline"), (K = "full"), (E = "ghostActive"))
          let G = I ?? ("icon" === F && T.length > 2)
          ;(g[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = () => {
                let e = z.current
                if (null == e) return
                let t = () => {
                  let t = e.querySelector('button[aria-pressed="true"], a[aria-current="page"]')
                  if (null == t) return
                  let a = t.offsetLeft,
                    n = a + t.offsetWidth,
                    i = e.scrollLeft,
                    l = i + e.clientWidth
                  a < i ? (e.scrollLeft = a) : n > l && (e.scrollLeft = n - e.clientWidth)
                }
                if ("u" < typeof ResizeObserver) return void t()
                let a = new ResizeObserver(t)
                for (let t of (a.observe(e), e.querySelectorAll("button, a"))) a.observe(t)
                return () => {
                  a.disconnect()
                }
              }),
              (g[7] = u))
            : (u = g[7]),
            g[8] !== T || g[9] !== x ? ((p = [T, x]), (g[8] = T), (g[9] = x), (g[10] = p)) : (p = g[10]),
            (0, s.useLayoutEffect)(u, p))
          let O = (0, r.A)(
              "relative min-w-0 max-w-full items-center",
              "mode" === $
                ? [
                    L ? "grid w-full" : "inline-grid",
                    "isolate h-9 auto-cols-fr grid-flow-col gap-0 rounded-full select-none",
                  ]
                : [
                    L ? "flex w-full" : "inline-flex",
                    "hide-scrollbar overflow-x-auto overflow-y-hidden",
                    "field" === $ || "form" === $ ? "gap-0" : "gap-0.5",
                  ],
              "inset" === $ && "rounded-[10px] bg-(--segmented-control-background) p-0.5",
              "field" === $ && "h-8 rounded-lg bg-secondary-soft dark:bg-text/5",
              "form" === $ && [
                "isolate rounded-full bg-background-segmented-form-track dark:inset-shadow-sm dark:inset-ring-1 dark:inset-ring-border-subtle",
                "compact" === F ? "p-0.5" : "p-1",
              ],
              "pricing" === $ && "rounded-[20px] bg-surface-secondary p-1",
              "viewer" === $ && "h-full p-0.5",
              k,
            ),
            U =
              "form" === $ && -1 !== W
                ? (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, r.A)(
                      "pointer-events-none absolute z-10 flex forced-colors:hidden",
                      "compact" === F ? "inset-0.5" : "inset-1",
                    ),
                    style: R,
                    children: (0, n.jsx)("span", {
                      className:
                        "h-full w-(--segmented-form-indicator-width) rounded-full bg-background-segmented-form-selected shadow-md motion-safe:transition-transform motion-safe:duration-basic motion-safe:ease-in-out ltr:translate-x-(--segmented-form-indicator-offset) rtl:-translate-x-(--segmented-form-indicator-offset) dark:shadow-lg-stronger dark:inset-shadow-2xs dark:inset-shadow-border",
                    }),
                  })
                : null
          g[11] !== $
            ? ((m =
                "mode" === $
                  ? (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-x-px top-1/2 z-0 h-8.5 -translate-y-1/2 rounded-full bg-background-mode-toggle-track",
                    })
                  : null),
              (g[11] = $),
              (g[12] = m))
            : (m = g[12])
          let V = T.map((e) => {
            let t = e.id === x,
              a = e.disabled ?? !1,
              { id: i, label: s, ariaLabel: d, tooltipContent: c, disabled: u, ...p } = e,
              m = {
                unstyled: "mode" === $,
                color: t ? D : E,
                focusRing: C ?? ("inset" === $ || "field" === $ ? "default" : "inset"),
                size: F,
                radius: K,
                onPointerEnter: null == b || a ? void 0 : () => b(i),
                uniform: G,
                "aria-label": d,
                disabled: a,
                className: (0, r.A)(
                  L ? "flex-1 justify-center" : "shrink-0",
                  B && "self-stretch py-2",
                  "form" === $ &&
                    "relative min-w-0 flex-1 basis-0 focus-visible:z-20 motion-safe:transition-colors motion-safe:duration-basic",
                  "mode" === $ && [
                    "relative z-10 h-full min-w-0 justify-center rounded-full border px-10 text-sm font-medium @max-lg/home-mode-toggle:px-2.5",
                    t
                      ? "border-mode-toggle-selected bg-background-mode-toggle-selected text-mode-toggle-primary shadow-mode-toggle-selected"
                      : "border-transparent text-mode-toggle-inactive hover:text-mode-toggle-primary focus-visible:text-mode-toggle-primary",
                  ],
                  "viewer" === $ && "h-full px-2.5",
                  w,
                ),
                children:
                  "form" === $ || B
                    ? (0, n.jsx)("span", {
                        className: (0, r.A)(
                          "form" === $ && "relative z-20",
                          B && "min-w-0 wrap-anywhere whitespace-normal",
                        ),
                        children: s,
                      })
                    : s,
              },
              f =
                null != p.to
                  ? (0, n.jsx)(o.z, { ...p, ...m, "aria-current": t ? "page" : void 0 }, i)
                  : (0, n.jsx)(o.$, { ...m, onClick: () => y?.(i), "aria-pressed": t }, i)
            return c ? (0, n.jsx)(l.m, { content: c, children: f }, i) : f
          })
          return (
            g[13] !== N || g[14] !== P || g[15] !== O || g[16] !== d || g[17] !== U || g[18] !== m || g[19] !== V
              ? ((f = (0, n.jsxs)("div", {
                  ref: z,
                  className: O,
                  role: "group",
                  "aria-label": N,
                  "aria-labelledby": P,
                  onWheel: d,
                  children: [U, m, V],
                })),
                (g[13] = N),
                (g[14] = P),
                (g[15] = O),
                (g[16] = d),
                (g[17] = U),
                (g[18] = m),
                (g[19] = V),
                (g[20] = f))
              : (f = g[20]),
            f
          )
        },
      },
    )
  },
  YA2q(e, t, a) {
    var n = a("vWTU"),
      i = a("RQgn")
    let l = /^\s*$/
    function r({ decorations: e, segmentText: t, text: a }) {
      if (null == e) return [{ kind: "text", segments: t(a) }]
      let n = [],
        i = 0
      for (let l of e)
        l.index < i ||
          (l.index > i && n.push({ kind: "text", segments: t(a.slice(i, l.index)) }),
          n.push(l),
          (i = l.index + l.content.length))
      return (i < a.length && n.push({ kind: "text", segments: t(a.slice(i)) }), n)
    }
    function s(e, t) {
      if (
        (function (e) {
          for (let t = 0; t < e.length; t += 1) if (e.charCodeAt(t) > 127) return !1
          return !0
        })(e)
      ) {
        var a = e
        let t = [],
          n = 0
        for (; n < a.length;) {
          if (o(a, n)) {
            let e = n
            for (; o(a, n);) n += 1
            t.push(a.slice(e, n))
            continue
          }
          let e = Math.max(t.length - 1, 0)
          ;(null == t[e] && (t[e] = ""), (t[e] += a[n]), (n += 1))
        }
        return t
      }
      if (null == t) {
        let t = Array.from(e.match(/\s*\S+(?:\s+|$)/g) ?? [])
        return t.length > 0 || 0 === e.length ? t : [e]
      }
      let n = []
      for (let { segment: a, isWordLike: i } of t.segment(e)) {
        if (l.test(a) || !i) {
          let e = Math.max(n.length - 1, 0)
          ;(null == n[e] && (n[e] = ""), (n[e] += a))
          continue
        }
        n.push(a)
      }
      return n
    }
    function o(e, t) {
      if (t >= e.length) return !1
      let a = e.charCodeAt(t)
      return (a >= 48 && a <= 57) || (a >= 65 && a <= 90) || (a >= 97 && a <= 122)
    }
    a.d(
      t,
      {},
      {
        Ef: function ({ decorateText: e = !0, segmenter: t, text: a }) {
          let l = (0, i.C)(a)
          return r({ decorations: e ? (0, n.I)(l) : null, segmentText: (e) => s(e, t), text: l })
        },
        SN: r,
        gk: s,
      },
    )
  },
  z7RK(e, t, a) {
    var n = a("ABep"),
      i = a("kfGJ"),
      l = a("vWTU"),
      r = a("CH2b"),
      s = a("YA2q"),
      o = a("RQgn"),
      d = a("FJP4"),
      c = a("NDV0")
    a.d(
      t,
      {},
      {
        Y: function ({
          conversationId: e,
          cwd: t,
          decorateText: a = !0,
          fadeSegmentDelayMs: u = 0,
          fadeSegmentMaxDelayMs: p,
          fadeSegmentKeys: m,
          fadeSegmentStartIndex: f = 0,
          fadeSegmentTimeline: g,
          fadeTextParts: h,
          fadeText: x = !1,
          hostId: b = i.fI,
          keyPrefix: y,
          onFileLinkOpen: v,
          openFileLinksInSidePanel: k = !1,
          segmenter: w = null,
          text: j,
        }) {
          let S = (0, o.C)(j),
            I = null == h && a ? (0, l.I)(S) : null
          if (!x && null == h && null == I) return S
          let M = h ?? (0, s.SN)({ decorations: I, segmentText: (e) => (x ? (0, s.gk)(e, w) : [e]), text: S })
          return x || 1 !== M.length || M[0]?.kind !== "text" || M[0].segments[0] !== S
            ? (function ({
                conversationId: e,
                cwd: t,
                fadeSegmentDelayMs: a,
                fadeSegmentMaxDelayMs: i,
                fadeSegmentKeys: l,
                fadeSegmentStartIndex: s,
                fadeSegmentTimeline: o,
                fadeText: u,
                hostId: p,
                keyPrefix: m,
                onFileLinkOpen: f,
                openFileLinksInSidePanel: g,
                parts: h,
              }) {
                let x = [],
                  b = 0,
                  y = s
                for (let s of h) {
                  if ("text" === s.kind) {
                    ;(x.push(
                      ...(function ({
                        fadeSegmentDelayMs: e,
                        fadeSegmentMaxDelayMs: t,
                        fadeText: a,
                        fadeSegmentStartIndex: i,
                        fadeSegmentTimeline: l,
                        keys: s,
                        segments: o,
                      }) {
                        return a
                          ? o.map((a, o) => {
                              let d = i + o
                              return (0, n.jsx)(
                                "span",
                                {
                                  ...(0, r._)({
                                    className: c.A.FadeIn,
                                    fadeSegmentDelayMs: e,
                                    fadeSegmentMaxDelayMs: t,
                                    segmentIndex: d,
                                    segmentKey: s?.[o],
                                    timeline: l,
                                  }),
                                  children: a,
                                },
                                s?.[o] ?? `fade-${d}`,
                              )
                            })
                          : o
                      })({
                        fadeText: u,
                        fadeSegmentDelayMs: a,
                        fadeSegmentMaxDelayMs: i,
                        fadeSegmentStartIndex: y,
                        fadeSegmentTimeline: o,
                        keys: l?.slice(b, b + s.segments.length),
                        segments: s.segments,
                      }),
                    ),
                      (b += s.segments.length),
                      (y += s.segments.length))
                    continue
                  }
                  let h = s.render({
                    content: s.content,
                    key: u ? void 0 : `${m}-decoration-${s.index}`,
                    renderInlineCode: (a, n) =>
                      (0, d.p)({
                        conversationId: e,
                        content: a,
                        cwd: t ?? null,
                        hostId: p,
                        key: n,
                        onFileLinkOpen: f,
                        openFileLinksInSidePanel: g,
                        precedingText: "",
                      }),
                  })
                  if (!u) {
                    ;(x.push(h), (y += 1))
                    continue
                  }
                  ;(x.push(
                    (0, n.jsx)(
                      "span",
                      {
                        ...(0, r._)({
                          className: c.A.FadeIn,
                          fadeSegmentDelayMs: a,
                          fadeSegmentMaxDelayMs: i,
                          segmentIndex: y,
                          segmentKey: l?.[b],
                          timeline: o,
                        }),
                        children: h,
                      },
                      l?.[b] ?? `fade-${y}`,
                    ),
                  ),
                    (b += 1),
                    (y += 1))
                }
                return x
              })({
                conversationId: e,
                cwd: t,
                fadeSegmentDelayMs: u,
                fadeSegmentMaxDelayMs: p,
                fadeSegmentKeys: m,
                fadeSegmentStartIndex: f,
                fadeSegmentTimeline: g,
                fadeText: x,
                hostId: b,
                keyPrefix: y,
                onFileLinkOpen: v,
                openFileLinksInSidePanel: k,
                parts: M,
              })
            : S
        },
      },
    )
  },
  oSoj(e, t, a) {
    var n = a("ABep"),
      i = a("TH8s"),
      l = a("soyF"),
      r = a("ZObU"),
      s = a("kfGJ")
    a.d(
      t,
      {},
      {
        A: function ({ cwd: e, hostId: t = s.fI, openFileLinksInSidePanel: a = !1, shouldRenderPath: o }) {
          return {
            [l.pS]({ attributes: l, conversationId: s, hostId: d = t, linkComponent: c = "a" }) {
              let u = (0, i.oy)(l)
              if (null == u) return null
              let { path: p, target: m } = u
              return "google-drive" === m.type || "external" === m.type
                ? (0, n.jsx)(c, { href: m.url, children: u.label ?? m.url })
                : "file" === m.type && "source" !== u.purpose && null != p && o?.(p) === !1
                  ? null
                  : (0, n.jsx)(r.u, { citation: u, conversationId: s, cwd: e ?? null, hostId: d, openInSidePanel: a })
            },
          }
        },
      },
    )
  },
  vTw3(e, t, a) {
    var n = a("CZAr")
    function i() {
      return null
    }
    a.d(
      t,
      {},
      {
        y: function () {
          return {
            [n.GZ]: i,
            [n.vd]: i,
            [n.de]: i,
            [n.q9]: i,
            [n.sD]: i,
            [n.I_]: i,
            [n.Dw]: i,
            [n.h5]: i,
            [n.w9]: i,
            [n.vB]: i,
            [n.MK]: i,
            [n.Gw]: i,
          }
        },
      },
    )
  },
  ZObU(e, t, a) {
    a.d(t, { u: () => u, b: () => p })
    var n = a("ABep"),
      i = a("QosV"),
      l = a("Wf1j"),
      r = a("LMkT")
    let s = new Map([
        [".env", "code"],
        [".env.example", "code"],
        [".env.local", "code"],
        [".gitignore", "code"],
        [".npmrc", "code"],
        [".prettierignore", "code"],
        [".prettierrc", "json"],
        ["cargo.lock", "rust"],
        ["cargo.toml", "rust"],
        ["changelog", "document"],
        ["dockerfile", "code"],
        ["license", "document"],
        ["license.md", "document"],
        ["makefile", "code"],
        ["package-lock.json", "json"],
        ["package.json", "json"],
        ["readme", "document"],
        ["readme.md", "document"],
        ["requirements.txt", "python"],
        ["tsconfig.json", "json"],
        ["yarn.lock", "json"],
      ]),
      o = new Map([
        ["adoc", "document"],
        ["asciidoc", "document"],
        ["avif", "image"],
        ["bash", "code"],
        ["bmp", "image"],
        ["c", "c-plus"],
        ["cc", "c-plus"],
        ["cfg", "code"],
        ["conf", "code"],
        ["cpp", "c-plus"],
        ["csv", "spreadsheet"],
        ["css", "code"],
        ["cxx", "c-plus"],
        ["doc", "document"],
        ["docx", "document"],
        ["gif", "image"],
        ["go", "code"],
        ["h", "c-plus"],
        ["har", "json"],
        ["heic", "image"],
        ["heif", "image"],
        ["hh", "c-plus"],
        ["hpp", "c-plus"],
        ["htm", "html"],
        ["html", "html"],
        ["hxx", "c-plus"],
        ["ico", "image"],
        ["ini", "code"],
        ["ipynb", "notebook"],
        ["java", "java"],
        ["jpeg", "image"],
        ["jpg", "image"],
        ["js", "javascript"],
        ["json", "json"],
        ["json5", "json"],
        ["jsonl", "json"],
        ["jsx", "react"],
        ["key", "presentation"],
        ["less", "code"],
        ["lock", "json"],
        ["log", "document"],
        ["m", "c-plus"],
        ["markdown", "document"],
        ["md", "document"],
        ["mdx", "document"],
        ["mjs", "javascript"],
        ["mts", "typescript"],
        ["numbers", "spreadsheet"],
        ["ods", "spreadsheet"],
        ["odt", "document"],
        ["odp", "presentation"],
        ["pages", "document"],
        ["parquet", "spreadsheet"],
        ["pdf", "document"],
        ["php", "php"],
        ["phtml", "php"],
        ["png", "image"],
        ["ppt", "presentation"],
        ["pptx", "presentation"],
        ["ps1", "code"],
        ["psd", "image"],
        ["py", "python"],
        ["pyi", "python"],
        ["rb", "code"],
        ["rs", "rust"],
        ["rst", "document"],
        ["rtf", "document"],
        ["sass", "code"],
        ["scss", "code"],
        ["sh", "code"],
        ["sql", "code"],
        ["svg", "image"],
        ["tex", "document"],
        ["tif", "image"],
        ["tiff", "image"],
        ["toml", "code"],
        ["ts", "typescript"],
        ["tsv", "spreadsheet"],
        ["tsx", "react"],
        ["txt", "document"],
        ["vue", "react"],
        ["webmanifest", "json"],
        ["webp", "image"],
        ["xls", "spreadsheet"],
        ["xlsx", "spreadsheet"],
        ["xhtml", "html"],
        ["xml", "code"],
        ["yaml", "code"],
        ["yml", "code"],
        ["zsh", "code"],
      ])
    var d = a("HFg1"),
      c = a("S1CS")
    function u(e) {
      let t,
        a,
        s,
        o,
        u,
        p,
        g,
        h,
        x = (0, i.c)(39),
        { citation: b, conversationId: y, cwd: v, hostId: k, openInSidePanel: w } = e,
        j = void 0 !== w && w,
        S = (0, l.A)(),
        { path: I, target: M, artifactCitation: A, lineRangeStart: C, lineRangeEnd: _ } = b,
        N = "artifact-session" === M.type ? M : null
      x[0] !== y || x[1] !== k || x[2] !== N
        ? ((t = { openSource: "page_link", resource: N, conversationId: y, hostId: k }),
          (x[0] = y),
          (x[1] = k),
          (x[2] = N),
          (x[3] = t))
        : (t = x[3])
      let { title: P, onOpen: T } = (0, r.a)(t)
      x[4] !== A || x[5] !== S || x[6] !== _ || x[7] !== C || x[8] !== I || x[9] !== N || x[10] !== P
        ? ((s = f(C)),
          (a = f(_)),
          (o = N
            ? { ariaLabel: P ?? N.artifactRef, displayLabel: P ?? N.artifactRef }
            : m({ artifactCitation: A, endLine: a, intl: S, line: s, path: I })),
          (x[4] = A),
          (x[5] = S),
          (x[6] = _),
          (x[7] = C),
          (x[8] = I),
          (x[9] = N),
          (x[10] = P),
          (x[11] = a),
          (x[12] = s),
          (x[13] = o))
        : ((a = x[11]), (s = x[12]), (o = x[13]))
      let { ariaLabel: L, displayLabel: B } = o
      if (N && !T) {
        let e
        return (x[14] !== B ? ((e = (0, n.jsx)("span", { children: B })), (x[14] = B), (x[15] = e)) : (e = x[15]), e)
      }
      if (N) {
        let e,
          t = d.Q[N.kind][20],
          a = "presentation" === N.kind ? "text-orange" : "text-green"
        ;(x[16] !== t || x[17] !== a
          ? ((e = (0, n.jsx)(t, { className: a })), (x[16] = t), (x[17] = a), (x[18] = e))
          : (e = x[18]),
          (u = e))
      }
      x[19] !== a || x[20] !== s || x[21] !== I
        ? ((p = { path: I, line: s, endLine: a }), (x[19] = a), (x[20] = s), (x[21] = I), (x[22] = p))
        : (p = x[22])
      let $ = A?.target,
        z = N ? B : I,
        W = !N
      return (
        x[23] !== B || x[24] !== T
          ? ((g = T ? () => T(B) : void 0), (x[23] = B), (x[24] = T), (x[25] = g))
          : (g = x[25]),
        x[26] !== L ||
        x[27] !== y ||
        x[28] !== v ||
        x[29] !== B ||
        x[30] !== k ||
        x[31] !== u ||
        x[32] !== j ||
        x[33] !== p ||
        x[34] !== $ ||
        x[35] !== z ||
        x[36] !== W ||
        x[37] !== g
          ? ((h = (0, n.jsx)(c.Bh, {
              reference: p,
              artifactNavigationTarget: $,
              ariaLabel: L,
              icon: u,
              label: B,
              tooltipText: z,
              conversationId: y,
              cwd: v,
              hostId: k,
              isPreview: !1,
              enableWorkspaceFileActions: W,
              onOpen: g,
              openInSidePanel: j,
            })),
            (x[26] = L),
            (x[27] = y),
            (x[28] = v),
            (x[29] = B),
            (x[30] = k),
            (x[31] = u),
            (x[32] = j),
            (x[33] = p),
            (x[34] = $),
            (x[35] = z),
            (x[36] = W),
            (x[37] = g),
            (x[38] = h))
          : (h = x[38]),
        h
      )
    }
    function p({ artifactCitation: e, intl: t, lineRangeEnd: a, lineRangeStart: n, path: i }) {
      return m({ artifactCitation: e, endLine: f(a), intl: t, line: f(n), path: i }).ariaLabel
    }
    function m({ artifactCitation: e, endLine: t, intl: a, line: n, path: i }) {
      var l, r, d, c, u, p
      let f,
        g = (l = i).split(/[\\/]/).pop() ?? l,
        h = (f = (r = g).lastIndexOf(".")) <= 0 || f === r.length - 1 ? "" : r.slice(f),
        x = (function (e) {
          var t
          let a,
            n = e.split(/[\\/]/).pop()?.toLowerCase() ?? "",
            i = s.get(n)
          if (null != i) return i
          let l = (a = (t = n).lastIndexOf(".")) <= 0 ? "" : t.slice(a + 1)
          return 0 === l.length ? "file" : (o.get(l) ?? "file")
        })(i),
        b =
          0 === h.length
            ? (function (e, t) {
                switch (e) {
                  case "c-plus":
                  case "code":
                  case "html":
                  case "java":
                  case "javascript":
                  case "json":
                  case "notebook":
                  case "php":
                  case "python":
                  case "react":
                  case "rust":
                  case "typescript":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.code",
                      defaultMessage: "Code",
                      description: "Fallback file type label for a code file citation with no extension",
                    })
                  case "document":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.document",
                      defaultMessage: "Document",
                      description: "Fallback file type label for a document file citation with no extension",
                    })
                  case "file":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.file",
                      defaultMessage: "File",
                      description: "Fallback file type label for a file citation with no extension",
                    })
                  case "image":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.image",
                      defaultMessage: "Image",
                      description: "Fallback file type label for an image file citation with no extension",
                    })
                  case "presentation":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.presentation",
                      defaultMessage: "Presentation",
                      description: "Fallback file type label for a presentation file citation with no extension",
                    })
                  case "spreadsheet":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.spreadsheet",
                      defaultMessage: "Spreadsheet",
                      description: "Fallback file type label for a spreadsheet file citation with no extension",
                    })
                }
              })(x, a)
            : null,
        y =
          ((d = a),
          (c = n),
          (u = t),
          (p = (function (e) {
            switch (e) {
              case "c-plus":
              case "code":
              case "html":
              case "java":
              case "javascript":
              case "json":
              case "notebook":
              case "php":
              case "python":
              case "react":
              case "rust":
              case "typescript":
                return !0
              case "document":
              case "file":
              case "image":
              case "presentation":
              case "spreadsheet":
                return !1
            }
          })(x)),
          null == c
            ? null
            : null != u && u !== c
              ? d.formatMessage(
                  {
                    id: "markdown.fileCitation.linesLabel",
                    defaultMessage: "lines {line}-{endLine}",
                    description: "Line range label shown inside a file citation chip",
                  },
                  { endLine: u, line: c },
                )
              : p || 1 !== c
                ? d.formatMessage(
                    {
                      id: "markdown.fileCitation.lineLabel",
                      defaultMessage: "line {line}",
                      description: "Single line label shown inside a file citation chip",
                    },
                    { line: c },
                  )
                : null),
        v =
          (function (e, t, a) {
            var n, i, l, r, s, o
            if (null == t) return null
            switch (t.artifactKind) {
              case "presentation":
                let d
                return (
                  (n = e),
                  (i = t),
                  (l = a),
                  (d =
                    null == i.slideNumber
                      ? null
                      : l.formatMessage(
                          {
                            id: "markdown.fileCitation.presentationSlideNumberLabel",
                            defaultMessage: "slide {slideNumber}",
                            description: "Location label for a presentation file citation targeting a slide number",
                          },
                          { slideNumber: i.slideNumber },
                        )),
                  null == i.objectId || null == n
                    ? d
                    : null == d
                      ? n
                      : l.formatMessage(
                          {
                            id: "markdown.fileCitation.presentationObjectLabel",
                            defaultMessage: "{slideLabel}, {label}",
                            description:
                              "Location label for a presentation file citation targeting a labeled object on a slide",
                          },
                          { label: n, slideLabel: d },
                        )
                )
              case "workbook":
                return (
                  (r = e),
                  (s = t),
                  (o = a),
                  "objectId" in s
                    ? null == r
                      ? null
                      : o.formatMessage(
                          {
                            id: "markdown.fileCitation.workbookObjectLabel",
                            defaultMessage: "{sheet}, {label}",
                            description:
                              "Location label for a spreadsheet file citation targeting a labeled object on a sheet",
                          },
                          { label: r, sheet: s.sheet },
                        )
                    : `${s.sheet}!${s.range}`
                )
              case "document":
                return a.formatMessage(
                  {
                    id: "markdown.fileCitation.documentPageLabel",
                    defaultMessage: "page {pageNumber}",
                    description: "Location label for a document file citation targeting a page",
                  },
                  { pageNumber: t.pageNumber },
                )
            }
          })(e?.label, e?.target, a) ?? y,
        k =
          null == v
            ? null
            : a.formatMessage(
                {
                  id: "markdown.fileCitation.lineLabelDisplay",
                  defaultMessage: "({lineLabel})",
                  description: "Location label shown inside parentheses in a file citation chip",
                },
                { lineLabel: v },
              ),
        w = g
      return (
        null != b && null != k
          ? (w = a.formatMessage(
              {
                id: "markdown.fileCitation.ariaLabelWithTypeAndLine",
                defaultMessage: "{fileName}, {fileTypeLabel} {lineLabel}",
                description: "Accessible label for an extensionless file citation chip with location information",
              },
              { fileName: g, fileTypeLabel: b, lineLabel: k },
            ))
          : null != b
            ? (w = a.formatMessage(
                {
                  id: "markdown.fileCitation.ariaLabelWithType",
                  defaultMessage: "{fileName}, {fileTypeLabel}",
                  description: "Accessible label for an extensionless file citation chip",
                },
                { fileName: g, fileTypeLabel: b },
              ))
            : null != k &&
              (w = a.formatMessage(
                {
                  id: "markdown.fileCitation.ariaLabelWithLine",
                  defaultMessage: "{fileName} {lineLabel}",
                  description: "Accessible label for a file citation chip with location information",
                },
                { fileName: g, lineLabel: k },
              )),
        { ariaLabel: w, displayLabel: null == v ? g : `${g} (${v})` }
      )
    }
    function f(e) {
      if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : void 0
      if ("string" != typeof e) return
      let t = Number.parseInt(e, 10)
      return Number.isNaN(t) || t <= 0 ? void 0 : t
    }
  },
  pPxA(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("hZax"),
      r = a("QxJi"),
      s = a("uXTt"),
      o = a("WFTG"),
      d = a("EXS8"),
      c = a("OU2K"),
      u = a("z7RK"),
      p = a("NzWk"),
      m = a("XpUB")
    function f(e) {
      return (0, n.jsx)(c.s, {
        onRetry: () => {
          ;(0, o.r)(e.error, () => e.resetError())
        },
      })
    }
    function g(e) {
      let t,
        a,
        s,
        o,
        c,
        f,
        g,
        h,
        x,
        b,
        y,
        v,
        k,
        w,
        j,
        S,
        I,
        M,
        A,
        C,
        _,
        N,
        P,
        T,
        L,
        B,
        $,
        z,
        W,
        R,
        F,
        K,
        D,
        E,
        G,
        O,
        U = (0, i.c)(94)
      U[0] !== e
        ? (({
            allowWideBlocks: M,
            children: t,
            components: a,
            conversationId: A,
            cwd: s,
            directives: o,
            extensions: c,
            externalLinkAppearance: f,
            externalResourcePolicy: C,
            forceCodeBlockWordWrap: _,
            hideCodeBlocks: h,
            getVisualizeTurnTriggerType: g,
            hostId: x,
            pluginMentionPresentation: w,
            isBrowserEnabled: N,
            mediaCacheKey: b,
            onAddSelectedTextToChat: y,
            onFileLinkOpen: v,
            openFileLinksInSidePanel: k,
            repairOrderedLists: S,
            renderCodeBlocksImmediately: P,
            renderCodeBlocksAsWritingBlocks: T,
            renderInlineVisualizations: L,
            renderMath: B,
            textStyle: $,
            turnId: z,
            savedContentResponse: I,
            ...j
          } = e),
          (U[0] = e),
          (U[1] = t),
          (U[2] = a),
          (U[3] = s),
          (U[4] = o),
          (U[5] = c),
          (U[6] = f),
          (U[7] = g),
          (U[8] = h),
          (U[9] = x),
          (U[10] = b),
          (U[11] = y),
          (U[12] = v),
          (U[13] = k),
          (U[14] = w),
          (U[15] = j),
          (U[16] = S),
          (U[17] = I),
          (U[18] = M),
          (U[19] = A),
          (U[20] = C),
          (U[21] = _),
          (U[22] = N),
          (U[23] = P),
          (U[24] = T),
          (U[25] = L),
          (U[26] = B),
          (U[27] = $),
          (U[28] = z))
        : ((t = U[1]),
          (a = U[2]),
          (s = U[3]),
          (o = U[4]),
          (c = U[5]),
          (f = U[6]),
          (g = U[7]),
          (h = U[8]),
          (x = U[9]),
          (b = U[10]),
          (y = U[11]),
          (v = U[12]),
          (k = U[13]),
          (w = U[14]),
          (j = U[15]),
          (S = U[16]),
          (I = U[17]),
          (M = U[18]),
          (A = U[19]),
          (C = U[20]),
          (_ = U[21]),
          (N = U[22]),
          (P = U[23]),
          (T = U[24]),
          (L = U[25]),
          (B = U[26]),
          ($ = U[27]),
          (z = U[28]))
      let V = void 0 !== M && M,
        q = void 0 === A ? null : A,
        Q = void 0 === C ? "allow" : C,
        H = void 0 !== _ && _,
        Z = void 0 !== N && N,
        J = void 0 !== P && P,
        X = void 0 !== T && T,
        Y = void 0 !== L && L,
        ee = void 0 === B || B,
        et = (0, l.Zj)("2957382457")
      if (U[29] !== t || U[30] !== et || U[31] !== c || U[32] !== Y || U[33] !== ee || U[34] !== S) {
        let e = (0, p.x1)(t, et, Y)
        ;((W = (0, m.o)(e, c, { repairOrderedLists: S, renderMath: ee })),
          (U[29] = t),
          (U[30] = et),
          (U[31] = c),
          (U[32] = Y),
          (U[33] = ee),
          (U[34] = S),
          (U[35] = W))
      } else W = U[35]
      let ea = W
      ;(U[36] !== q ||
      U[37] !== s ||
      U[38] !== et ||
      U[39] !== g ||
      U[40] !== x ||
      U[41] !== b ||
      U[42] !== k ||
      U[43] !== Y ||
      U[44] !== z
        ? ((R = (0, p.sh)({
            conversationId: q,
            cwd: s,
            enableInlineDil: et,
            getVisualizeTurnTriggerType: g,
            hostId: x,
            mediaCacheKey: b,
            openFileLinksInSidePanel: k,
            renderInlineVisualizations: Y,
            turnId: z,
          })),
          (U[36] = q),
          (U[37] = s),
          (U[38] = et),
          (U[39] = g),
          (U[40] = x),
          (U[41] = b),
          (U[42] = k),
          (U[43] = Y),
          (U[44] = z),
          (U[45] = R))
        : (R = U[45]),
        U[46] !== o || U[47] !== R ? ((F = { ...R, ...o }), (U[46] = o), (U[47] = R), (U[48] = F)) : (F = U[48]))
      let en = F
      ;(U[49] !== V ||
      U[50] !== q ||
      U[51] !== s ||
      U[52] !== f ||
      U[53] !== Q ||
      U[54] !== H ||
      U[55] !== h ||
      U[56] !== x ||
      U[57] !== Z ||
      U[58] !== y ||
      U[59] !== v ||
      U[60] !== k ||
      U[61] !== w ||
      U[62] !== X ||
      U[63] !== J ||
      U[64] !== ee ||
      U[65] !== I
        ? ((K = (0, p.c8)({
            allowWideBlocks: V,
            conversationId: q,
            cwd: s,
            externalLinkAppearance: f,
            externalResourcePolicy: Q,
            forceCodeBlockWordWrap: H,
            hideCodeBlocks: h,
            hostId: x,
            pluginMentionPresentation: w,
            isBrowserEnabled: Z,
            onAddSelectedTextToChat: y,
            onFileLinkOpen: v,
            openFileLinksInSidePanel: k,
            renderCodeBlocksImmediately: J,
            renderCodeBlocksAsWritingBlocks: X,
            renderMath: ee,
            savedContentResponse: I,
          })),
          (U[49] = V),
          (U[50] = q),
          (U[51] = s),
          (U[52] = f),
          (U[53] = Q),
          (U[54] = H),
          (U[55] = h),
          (U[56] = x),
          (U[57] = Z),
          (U[58] = y),
          (U[59] = v),
          (U[60] = k),
          (U[61] = w),
          (U[62] = X),
          (U[63] = J),
          (U[64] = ee),
          (U[65] = I),
          (U[66] = K))
        : (K = U[66]),
        U[67] !== a || U[68] !== K ? ((D = { ...K, ...a }), (U[67] = a), (U[68] = K), (U[69] = D)) : (D = U[69]))
      let ei = D
      ;(U[70] !== q || U[71] !== s || U[72] !== x || U[73] !== v || U[74] !== k || U[75] !== $?.tone
        ? ((E = () => (e, t, a, i) => {
            let l = (0, u.Y)({
              conversationId: q,
              cwd: s,
              decorateText: i,
              hostId: x,
              keyPrefix: t,
              onFileLinkOpen: v,
              openFileLinksInSidePanel: k ?? !1,
              text: e,
            })
            return $?.tone === "user-message" ? (0, n.jsx)(r.k, { children: l }, t) : l
          }),
          (U[70] = q),
          (U[71] = s),
          (U[72] = x),
          (U[73] = v),
          (U[74] = k),
          (U[75] = $?.tone),
          (U[76] = E))
        : (E = U[76]),
        $?.tone,
        U[77] !== E ? ((G = E()), (U[77] = E), (U[78] = G)) : (G = U[78]))
      let el = G
      return (
        U[79] !== V ||
        U[80] !== q ||
        U[81] !== s ||
        U[82] !== Q ||
        U[83] !== H ||
        U[84] !== h ||
        U[85] !== x ||
        U[86] !== ei ||
        U[87] !== en ||
        U[88] !== b ||
        U[89] !== j ||
        U[90] !== el ||
        U[91] !== $ ||
        U[92] !== ea
          ? ((O = (0, n.jsx)(d.T, {
              ...j,
              allowWideBlocks: V,
              components: ei,
              conversationId: q,
              cwd: s,
              directives: en,
              externalResourcePolicy: Q,
              forceCodeBlockWordWrap: H,
              hideCodeBlocks: h,
              hostId: x,
              mediaCacheKey: b,
              renderText: el,
              textStyle: $,
              tokens: ea,
            })),
            (U[79] = V),
            (U[80] = q),
            (U[81] = s),
            (U[82] = Q),
            (U[83] = H),
            (U[84] = h),
            (U[85] = x),
            (U[86] = ei),
            (U[87] = en),
            (U[88] = b),
            (U[89] = j),
            (U[90] = el),
            (U[91] = $),
            (U[92] = ea),
            (U[93] = O))
          : (O = U[93]),
        O
      )
    }
    a.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            a,
            l = (0, i.c)(5)
          return (
            l[0] !== e ? ((t = (0, n.jsx)(g, { ...e })), (l[0] = e), (l[1] = t)) : (t = l[1]),
            l[2] !== e.children || l[3] !== t
              ? ((a = (0, n.jsx)(s.t, { name: "Markdown", resetKey: e.children, fallback: f, children: t })),
                (l[2] = e.children),
                (l[3] = t),
                (l[4] = a))
              : (a = l[4]),
            a
          )
        },
      },
    )
  },
  NzWk(e, t, a) {
    a.d(t, { c8: () => el, sh: () => ei, x1: () => er })
    var n = a("zd8w"),
      i = a("CZAr"),
      l = a("geXJ"),
      r = a("pqpL"),
      s = a("q3n0"),
      o = a("v0rv"),
      d = a("ABep"),
      c = a("QosV"),
      u = a("Rxfy"),
      p = a("DBCl"),
      m = a("rKAs"),
      f = a("ASxG"),
      g = a("WTHg"),
      h = a("zTeN"),
      x = a("Wf1j"),
      b = a("Qgfj"),
      y = a("fOao"),
      v = a("jEN2"),
      k = a("Ot7V"),
      w = a("MI1z"),
      j = a("Oj9r"),
      S = a("kfGJ"),
      I = a("axh8"),
      M = a("hbRe"),
      A = a("bPa2"),
      C = a("bnxy"),
      _ = a("rHMn"),
      N = a("t4J7"),
      P = a("BI6E"),
      T = a("ViUV"),
      L = a("jr5g"),
      B = a("IY5Q"),
      $ = a("Jn3n")
    function z(e) {
      let t,
        a,
        i,
        l,
        r,
        s,
        o,
        u,
        p,
        m,
        f,
        b,
        z,
        F,
        D,
        E = (0, c.c)(51),
        { artifactKind: G, displayName: O, hostId: U, skillDirectory: V, skillName: q } = e,
        Q = void 0 === U ? S.fI : U,
        H = (0, h.gh)(j.GD),
        Z = (0, x.A)(),
        [J, X] = (0, n.useState)(!1),
        [Y, ee] = (0, n.useState)(!1),
        { forceReload: et, skills: ea } = (0, A.a)(void 0, Q),
        en = (0, w.y)(Q),
        { mutateAsync: ei, isPending: el } = (0, $.V)(et)
      if (
        E[0] !== G ||
        E[1] !== en ||
        E[2] !== O ||
        E[3] !== Q ||
        E[4] !== Z ||
        E[5] !== H ||
        E[6] !== V ||
        E[7] !== q ||
        E[8] !== ea
      ) {
        a = (0, C.Al)(V, "SKILL.md")
        let e = (0, _.$c)(V, G),
          n = ea.find((e) => (0, C.Fd)(e.path) === (0, C.Fd)(a)),
          o = (0, M.Gc)({ name: q, path: a }),
          d = ea.find(R),
          { url: c } = (0, I.Oe)({
            size: "large",
            iconLarge: n?.interface?.iconLarge,
            basePath: a,
            renderCustomSvgAsImage: !0,
          })
        ;((s = {
          id: `${Q}:${a}`,
          type: G,
          name: O,
          description: n?.description,
          thumbnail: c ? { uri: c, alt: "" } : void 0,
        }),
          (t = async () => {
            ;((0, v.jf)(Z.formatMessage(K[G], { template: o })), X(!1))
          }),
          (i =
            null == e
              ? void 0
              : async () => {
                  if ((X(!1), (0, N.z)(G))) {
                    let e = await (0, _.Lc)({ hostId: Q, manifestPath: (0, C.Al)(V, "artifact-template.json") })
                    if (e?.galleryKind === G && null != e.sourceUrl)
                      return void (0, k.E0)({ href: e.sourceUrl, initiator: "open_in_browser_bridge", originHostId: Q })
                  }
                  ;(0, y.openArtifactSidePanelTab)(H, e, {
                    artifactTemplateSkill: n,
                    hostId: Q,
                    isPreview: !0,
                    tabId: `artifact-template:${Q}:${e}`,
                    title: O,
                  }) || X(!0)
                }),
          (l = d
            ? () => {
                ;((0, v.jf)(
                  Z.formatMessage(P.ho.editTemplatePrompt, { template: o, templateCreator: (0, _.oo)("local") }),
                ),
                  X(!1))
              }
            : void 0),
          (r = n && (0, _.ok)(n, en) ? () => ee(!0) : void 0),
          (E[0] = G),
          (E[1] = en),
          (E[2] = O),
          (E[3] = Q),
          (E[4] = Z),
          (E[5] = H),
          (E[6] = V),
          (E[7] = q),
          (E[8] = ea),
          (E[9] = t),
          (E[10] = a),
          (E[11] = i),
          (E[12] = l),
          (E[13] = r),
          (E[14] = s))
      } else ((t = E[9]), (a = E[10]), (i = E[11]), (l = E[12]), (r = E[13]), (s = E[14]))
      E[15] !== i || E[16] !== l || E[17] !== r
        ? ((o = { onView: i, onEdit: l, onDelete: r }), (E[15] = i), (E[16] = l), (E[17] = r), (E[18] = o))
        : (o = E[18])
      let er = o
      return (
        E[19] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => X(!0)), (E[19] = u)) : (u = E[19]),
        E[20] !== t ? ((p = { kind: "use", onSelect: t }), (E[20] = t), (E[21] = p)) : (p = E[21]),
        E[22] !== er || E[23] !== el || E[24] !== p || E[25] !== s
          ? ((m = (0, d.jsx)(g.g7, {
              menuModal: !1,
              template: s,
              disabled: el,
              onOpen: u,
              primaryAction: p,
              menu: er,
            })),
            (E[22] = er),
            (E[23] = el),
            (E[24] = p),
            (E[25] = s),
            (E[26] = m))
          : (m = E[26]),
        E[27] !== t || E[28] !== Q || E[29] !== er || E[30] !== el || E[31] !== a || E[32] !== s
          ? ((f = (0, d.jsx)(L.FQ, { template: s, path: a, hostId: Q, onUse: t, callbacks: er, disabled: el })),
            (E[27] = t),
            (E[28] = Q),
            (E[29] = er),
            (E[30] = el),
            (E[31] = a),
            (E[32] = s),
            (E[33] = f))
          : (f = E[33]),
        E[34] !== J || E[35] !== O || E[36] !== f
          ? ((b = (0, d.jsx)(L.Wn, { open: J, onOpenChange: X, title: O, children: f })),
            (E[34] = J),
            (E[35] = O),
            (E[36] = f),
            (E[37] = b))
          : (b = E[37]),
        E[38] !== Q || E[39] !== ei || E[40] !== a
          ? ((z = () => {
              ei({ hostId: Q, skillPath: a }).then((e) => {
                let { success: t } = e
                t && (ee(!1), X(!1))
              }, W)
            }),
            (E[38] = Q),
            (E[39] = ei),
            (E[40] = a),
            (E[41] = z))
          : (z = E[41]),
        E[42] !== Y || E[43] !== O || E[44] !== el || E[45] !== z
          ? ((F = (0, d.jsx)(T.b, { open: Y, onOpenChange: ee, title: O, deleteDisabled: el, onConfirm: z })),
            (E[42] = Y),
            (E[43] = O),
            (E[44] = el),
            (E[45] = z),
            (E[46] = F))
          : (F = E[46]),
        E[47] !== b || E[48] !== F || E[49] !== m
          ? ((D = (0, d.jsxs)(B.u, { children: [m, b, F] })), (E[47] = b), (E[48] = F), (E[49] = m), (E[50] = D))
          : (D = E[50]),
        D
      )
    }
    function W() {}
    function R(e) {
      return e.enabled && ("template-creator" === e.name || e.name.endsWith(":template-creator"))
    }
    let F = (0, b.YK)({
        useDocumentPrompt: {
          id: "artifactTemplate.resultCard.useDocumentPrompt",
          defaultMessage: "Create a document using this {template} about…",
          description: "Composer prompt appended when using a newly created document template",
        },
        usePresentationPrompt: {
          id: "artifactTemplate.resultCard.usePresentationPrompt",
          defaultMessage: "Create a presentation using the {template} template about…",
          description: "Composer prompt appended when using a newly created presentation template",
        },
        useSpreadsheetPrompt: {
          id: "artifactTemplate.resultCard.useSpreadsheetPrompt",
          defaultMessage: "Create a spreadsheet using this {template} about…",
          description: "Composer prompt appended when using a newly created spreadsheet template",
        },
        useSitePrompt: {
          id: "artifactTemplate.resultCard.useSitePrompt",
          defaultMessage: "Create a Site using this {template} about…",
          description: "Composer prompt appended when using a newly created Site template",
        },
        useGoogleDocPrompt: {
          id: "artifactTemplate.resultCard.useGoogleDocPrompt",
          defaultMessage: "Create a Google Doc using this {template} about…",
          description: "Composer prompt appended when using a newly created Google Doc template",
        },
        useGoogleSlidesPrompt: {
          id: "artifactTemplate.resultCard.useGoogleSlidesPrompt",
          defaultMessage: "Create a Google Slides presentation using this {template} about…",
          description: "Composer prompt appended when using a newly created Google Slides template",
        },
        useGoogleSheetPrompt: {
          id: "artifactTemplate.resultCard.useGoogleSheetPrompt",
          defaultMessage: "Create a Google Sheet using this {template} about…",
          description: "Composer prompt appended when using a newly created Google Sheet template",
        },
      }),
      K = {
        document: F.useDocumentPrompt,
        presentation: F.usePresentationPrompt,
        spreadsheet: F.useSpreadsheetPrompt,
        site: F.useSitePrompt,
        "google-docs": F.useGoogleDocPrompt,
        "google-slides": F.useGoogleSlidesPrompt,
        "google-sheets": F.useGoogleSheetPrompt,
      }
    var D = a("TUMj")
    let E = (0, a("Bbed")._)(async () => {
        let { ChatGptFileReference: e } = await Promise.all([
          a.e(82267),
          a.e(434505),
          a.e(788421),
          a.e(904817),
          a.e(343623),
          a.e(943163),
          a.e(211466),
        ]).then(a.bind(a, "GnI8"))
        return e
      }),
      G = f.object({
        artifact_kind: f.enum(u.$h),
        display_name: f.string().trim().min(1),
        skill_directory: f.string().refine(p.cxl),
        skill_name: f.string().startsWith("artifact-template-"),
      })
    function O(e) {
      let t,
        a,
        n = (0, c.c)(16),
        { attributes: i, hostId: l } = e,
        r = (0, D.Rn)(),
        s = i.archive_link
      if (r && "string" == typeof s) {
        let e, t
        if (n[0] !== s || n[1] !== r.contentReferences) {
          let t
          ;(n[3] !== s
            ? ((t = (e, t) =>
                "file" === e.type && (e.matched_text === s || s.startsWith(`:${m.AX}{index="${String(t)}"}`))),
              (n[3] = s),
              (n[4] = t))
            : (t = n[4]),
            (e = r.contentReferences.findIndex(t)),
            (n[0] = s),
            (n[1] = r.contentReferences),
            (n[2] = e))
        } else e = n[2]
        let a = e,
          i = r.contentReferences[a]
        return i
          ? (n[5] !== a || n[6] !== i
              ? ((t = (0, d.jsx)(E, { contentReferenceIndex: a, presentation: "template", reference: i })),
                (n[5] = a),
                (n[6] = i),
                (n[7] = t))
              : (t = n[7]),
            t)
          : null
      }
      n[8] !== i ? ((t = G.safeParse(i)), (n[8] = i), (n[9] = t)) : (t = n[9])
      let o = t
      return o.success
        ? (n[10] !== l ||
          n[11] !== o.data.artifact_kind ||
          n[12] !== o.data.display_name ||
          n[13] !== o.data.skill_directory ||
          n[14] !== o.data.skill_name
            ? ((a = (0, d.jsx)(z, {
                artifactKind: o.data.artifact_kind,
                displayName: o.data.display_name,
                hostId: l,
                skillDirectory: o.data.skill_directory,
                skillName: o.data.skill_name,
              })),
              (n[10] = l),
              (n[11] = o.data.artifact_kind),
              (n[12] = o.data.display_name),
              (n[13] = o.data.skill_directory),
              (n[14] = o.data.skill_name),
              (n[15] = a))
            : (a = n[15]),
          a)
        : null
    }
    var U = a("OXGn"),
      V = a("oSoj"),
      q = a("tb30"),
      Q = a("NkEl"),
      H = a("UxN3"),
      Z = a("Hc2f"),
      J = a("c3f5"),
      X = a("vTw3"),
      Y = a("on57"),
      ee = a("oyxz"),
      et = a("HZfM"),
      ea = a("Sm6l")
    function en(e) {
      let t,
        a,
        n,
        i,
        l,
        r,
        s,
        o = (0, c.c)(13),
        { title: u, prompt: p } = e,
        m = (0, et.Zp)()
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, d.jsx)("span", {
              className: "text-sm text-tertiary",
              children: (0, d.jsx)(ee.A, {
                id: "wham.whamProposedTask.title",
                defaultMessage: "Suggested task",
                description: "Label for a card that suggests a follow up Codex task",
              }),
            })),
            (a = (0, Y.A)("text-sm font-medium")),
            (o[0] = t),
            (o[1] = a))
          : ((t = o[0]), (a = o[1])),
        o[2] !== u
          ? ((n = (0, d.jsxs)("div", {
              className: "flex flex-1 flex-col",
              children: [t, (0, d.jsx)("span", { className: a, children: u })],
            })),
            (o[2] = u),
            (o[3] = n))
          : (n = o[3]),
        o[4] !== m || o[5] !== p
          ? ((i = () => {
              m("/", { state: { prefillPrompt: p } })
            }),
            (o[4] = m),
            (o[5] = p),
            (o[6] = i))
          : (i = o[6]),
        o[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, d.jsx)(ee.A, {
              id: "wham.whamProposedTask.useSuggestion",
              defaultMessage: "Use suggestion",
              description: "Button to open the Composer with a prefilled prompt from a suggestion",
            })),
            (o[7] = l))
          : (l = o[7]),
        o[8] !== i
          ? ((r = (0, d.jsx)("div", {
              className: "flex items-center gap-2 text-sm",
              children: (0, d.jsx)(ea.$, { color: "outline", onClick: i, children: l }),
            })),
            (o[8] = i),
            (o[9] = r))
          : (r = o[9]),
        o[10] !== n || o[11] !== r
          ? ((s = (0, d.jsxs)("div", {
              className:
                "mt-1 mb-3 flex w-full items-center rounded-xl border border-primary-outline bg-surface-secondary px-3 py-3",
              children: [n, r],
            })),
            (o[10] = n),
            (o[11] = r),
            (o[12] = s))
          : (s = o[12]),
        s
      )
    }
    function ei({
      conversationId: e,
      cwd: t,
      enableInlineDil: a,
      getVisualizeTurnTriggerType: o,
      hostId: c,
      mediaCacheKey: u,
      openFileLinksInSidePanel: p,
      renderInlineVisualizations: m,
      turnId: f,
    }) {
      return {
        [i.cu]: (e) => (0, n.createElement)(O, { ...e, hostId: c }),
        ...(0, V.A)({ cwd: t, hostId: c, openFileLinksInSidePanel: p }),
        ...{
          [i.Vr]: ({ attributes: e, rawText: t }) =>
            (0, d.jsx)(en, { title: (0, J.B)(e, "title") ?? "", prompt: t ?? "" }),
        },
        [r.DE]: l.Z,
        ...{
          [i.dY]: ({ attributes: e, children: t }) =>
            (0, d.jsxs)("details", {
              ref: (e) => {
                if (null != e)
                  return (0, Q.y)(e, {
                    highlight: "text",
                    reveal: () => {
                      e.open = !0
                    },
                  })
              },
              className: "group my-3 rounded-xl border border-border/30 bg-surface-secondary/15 px-4 py-3",
              open: "true" === (0, J.B)(e, "open"),
              children: [
                (0, d.jsxs)("summary", {
                  className:
                    "flex cursor-interaction list-none items-center gap-1.5 text-size-chat font-medium text-default marker:hidden [&::-webkit-details-marker]:hidden",
                  children: [
                    (0, d.jsx)(H.bF, {
                      className: "shrink-0 transition-transform group-open:rotate-90",
                      "aria-hidden": !1,
                      asset16: q.q,
                      legacyIcon: Z.A,
                      legacyClassName: "icon-2xs",
                    }),
                    (0, J.B)(e, "summary"),
                  ],
                }),
                (0, d.jsx)("div", { className: "pt-2", children: t }),
              ],
            }),
        },
        ...(0, X.y)(),
        ...void 0,
        ...(m
          ? (0, s.OS)({ cacheKey: u, getVisualizeTurnTriggerType: o, hostId: c, threadId: e ?? void 0, turnId: f })
          : void 0),
      }
    }
    function el({
      allowWideBlocks: e,
      conversationId: t,
      cwd: a,
      externalLinkAppearance: n,
      externalResourcePolicy: i,
      forceCodeBlockWordWrap: l,
      hideCodeBlocks: r,
      hostId: s,
      pluginMentionPresentation: o,
      isBrowserEnabled: d,
      onAddSelectedTextToChat: c,
      onFileLinkOpen: u,
      openFileLinksInSidePanel: p,
      renderCodeBlocksImmediately: m,
      renderCodeBlocksAsWritingBlocks: f,
      renderMath: g,
      savedContentResponse: h,
    }) {
      return {
        a: (0, U.j$)({
          conversationId: t,
          cwd: a,
          externalLinkAppearance: n,
          externalResourcePolicy: i,
          hostId: s,
          pluginMentionPresentation: o,
          isBrowserEnabled: d,
          onFileLinkOpen: u,
          openFileLinksInSidePanel: p ?? !1,
          savedContentResponse: h,
        }),
        code: (0, U.mh)({
          allowWideBlocks: e,
          conversationId: t,
          cwd: a,
          forceCodeBlockWordWrap: l,
          hideCodeBlocks: r,
          hostId: s,
          onAddSelectedTextToChat: c,
          onFileLinkOpen: u,
          openFileLinksInSidePanel: p ?? !1,
          pluginMentionPresentation: o,
          renderCodeBlocksImmediately: m,
          renderCodeBlocksAsWritingBlocks: f,
          renderMath: g,
        }),
      }
    }
    function er(e, t, a = !1) {
      return a ? (0, o.qY)(e) : e
    }
  },
  pn4u(e, t, a) {
    a.d(
      t,
      {},
      {
        Fz: function ({ fadeSegmentDelayMs: e, fadeSegmentMaxDelayMs: t, segmentIndex: a }) {
          return Math.min(a * e, t ?? 1 / 0)
        },
        Zn: function ({ element: e, fadeSegmentDelayMs: t, fadeSegmentMaxDelayMs: a, segmentKey: n, timeline: i }) {
          if (i.segmentKeyByElement.get(e) === n) return
          let l = performance.now(),
            r = i.startAtMsByKey.get(n),
            s = r ?? Math.min(Math.max(i.nextSegmentStartAtMs, l), null == a ? 1 / 0 : l + a),
            o = Math.round(s - l)
          ;(null == r && (i.startAtMsByKey.set(n, s), i.delayMsByKey.set(n, o), (i.nextSegmentStartAtMs = s + t)),
            i.segmentKeyByElement.set(e, n),
            e.style.setProperty("--fade-delay", `${o}ms`))
        },
        dA: function () {
          return {
            delayMsByKey: new Map(),
            startAtMsByKey: new Map(),
            segmentKeyByElement: new WeakMap(),
            nextSegmentStartAtMs: 0,
            settledKeys: new Set(),
          }
        },
      },
    )
  },
  CH2b(e, t, a) {
    var n = a("pn4u")
    a.d(
      t,
      {},
      {
        _: function ({
          className: e,
          fadeSegmentDelayMs: t,
          fadeSegmentMaxDelayMs: a,
          segmentIndex: i,
          segmentKey: l,
          timeline: r,
        }) {
          let s = null != l && r?.settledKeys.has(l)
          return {
            className: s ? void 0 : e,
            onAnimationEnd:
              s || null == l || null == r
                ? void 0
                : (e) => {
                    e.target === e.currentTarget && r.settledKeys.add(l)
                  },
            ref:
              s || null == r || null == l
                ? void 0
                : (e) => {
                    null != e &&
                      (0, n.Zn)({
                        element: e,
                        fadeSegmentDelayMs: t,
                        fadeSegmentMaxDelayMs: a,
                        segmentKey: l,
                        timeline: r,
                      })
                  },
            style:
              t <= 0
                ? void 0
                : {
                    "--fade-delay": `${(null == l ? void 0 : r?.delayMsByKey.get(l)) ?? (0, n.Fz)({ fadeSegmentDelayMs: t, fadeSegmentMaxDelayMs: a, segmentIndex: i })}ms`,
                  },
          }
        },
      },
    )
  },
  geXJ(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("zTeN"),
      r = a("oyxz"),
      s = a("ZtSy"),
      o = a("Bbed"),
      d = a("e1xH"),
      c = a("pyoT"),
      u = a("pqpL")
    let p = (0, o._)(async () => (await Promise.all([a.e(218787), a.e(537102)]).then(a.bind(a, "QOoH"))).InlinePage)
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a,
            o = (0, i.c)(9),
            { attributes: m } = e,
            f = (0, l.Ul)(d.pagesEnabled$),
            g = (0, l.Ul)(c.spaceAccountId$)
          o[0] !== m ? ((t = (0, u.Hn)(m)), (o[0] = m), (o[1] = t)) : (t = o[1])
          let h = t
          if (null == h) return null
          if (!f || null == g) {
            let e,
              t,
              a = `https://chatgpt.com/space/${h.id}${null == h.blockId ? "" : `#${h.blockId}`}`
            return (
              o[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(r.A, {
                    id: "codex.page.inline.open",
                    defaultMessage: "Open page",
                    description: "Fallback link for an inline Page preview when Pages are unavailable",
                  })),
                  (o[2] = e))
                : (e = o[2]),
              o[3] !== a
                ? ((t = (0, n.jsx)(s.G, { initiator: "markdown_link_click", href: a, children: e })),
                  (o[3] = a),
                  (o[4] = t))
                : (t = o[4]),
              t
            )
          }
          let x = `${g}:${h.id}`
          return (
            o[5] !== h.blockId || o[6] !== h.id || o[7] !== x
              ? ((a = (0, n.jsx)(p, { pageId: h.id, blockId: h.blockId }, x)),
                (o[5] = h.blockId),
                (o[6] = h.id),
                (o[7] = x),
                (o[8] = a))
              : (a = o[8]),
            a
          )
        },
      },
    )
  },
  q3n0(e, t, a) {
    var n = a("ABep"),
      i = a("Webf"),
      l = a("XpUB"),
      r = a("v0rv"),
      s = a("e71N")
    let o = [`::${r.py}`, `::${r.qO}`],
      d =
        /^::codex-(?:inline-vis|live-vis)\{(?:file|path)="[^"]+"(?:\s+(?:title="[^"]*"|mode="wide"|expandable="(?:true|false)"))*\}\s*$/
    function c(e) {
      return e?.type === "codexDirective" && "name" in e && (e.name === r.py || e.name === r.qO)
    }
    a.d(
      t,
      {},
      {
        OS: function ({ cacheKey: e, getVisualizeTurnTriggerType: t, hostId: a, threadId: i, turnId: l }) {
          return {
            [r.py]: {
              renderElement: ({ attributes: r }) =>
                (0, n.jsx)(s.f, {
                  visualizationSource: "chat_inline",
                  attributes: r,
                  cacheKey: e,
                  getVisualizeTurnTriggerType: t,
                  hostId: a,
                  threadId: i,
                  turnId: l,
                }),
            },
            [r.qO]: () => null,
          }
        },
        _g: function (e, { isStreaming: t }) {
          let a = e.lastIndexOf("\n") + 1,
            n = e.slice(a).trimStart()
          return n.length > 0 &&
            (o.some((e) => (t && e.startsWith(n)) || (n.startsWith(e) && !d.test(n))) ||
              (t && i.Mm.startsWith(n)) ||
              (n.startsWith(i.Mm) && !n.endsWith("")))
            ? e.slice(0, a)
            : e
        },
        vI: function (e) {
          let t = (0, r.qY)(e)
          if (!o.some((e) => t.includes(e))) return t
          let a = (0, l.o)(t, void 0)
          if (!a.some(c)) return t
          let n = a.filter((e) => !c(e))
          return n
            .filter((e, t) => {
              let a = n[t - 1]
              return (
                "space" !== e.type ||
                (a?.type === "code" && "indented" === a.codeBlockStyle) ||
                (null != a && "space" !== a.type && t < n.length - 1)
              )
            })
            .map((e) => e.raw)
            .join("")
        },
      },
    )
  },
  jvxw(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("on57"),
      r = a("Wf1j"),
      s = a("DcH0"),
      o = a("NDV0")
    function d(e) {
      let t,
        a,
        l = (0, i.c)(7),
        { animate: o, className: d, style: c } = e,
        u = (0, r.A)()
      return (
        l[0] !== u
          ? ((t = u.formatMessage({
              id: "codex.visualization.loading",
              defaultMessage: "Loading visualization",
              description: "Accessible label for an inline visualization loading placeholder",
            })),
            (l[0] = u),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== o || l[3] !== d || l[4] !== c || l[5] !== t
          ? ((a = (0, n.jsx)(s._, { role: "status", "aria-label": t, className: d, animate: o, style: c })),
            (l[2] = o),
            (l[3] = d),
            (l[4] = c),
            (l[5] = t),
            (l[6] = a))
          : (a = l[6]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            a,
            r,
            s,
            c,
            u = (0, i.c)(15),
            { height: p, isWide: m, variant: f } = e,
            g = void 0 === p ? 240 : p,
            h = void 0 !== m && m,
            x = void 0 === f ? "inline" : f,
            b = h && o.A.VisualizationWideBlock
          u[0] !== b ? ((t = (0, l.A)(o.A.VisualizationBlock, b)), (u[0] = b), (u[1] = t)) : (t = u[1])
          let y = h ? "true" : void 0,
            v = h ? "visualization" : void 0,
            k = "inline" === x,
            w = "inline" === x && "rounded-lg border border-subtle"
          return (
            u[2] !== w ? ((a = (0, l.A)("w-full", w)), (u[2] = w), (u[3] = a)) : (a = u[3]),
            u[4] !== g ? ((r = { height: g }), (u[4] = g), (u[5] = r)) : (r = u[5]),
            u[6] !== a || u[7] !== r || u[8] !== k
              ? ((s = (0, n.jsx)(d, { animate: k, className: a, style: r })),
                (u[6] = a),
                (u[7] = r),
                (u[8] = k),
                (u[9] = s))
              : (s = u[9]),
            u[10] !== s || u[11] !== t || u[12] !== y || u[13] !== v
              ? ((c = (0, n.jsx)("div", {
                  className: t,
                  "data-wide-markdown-block": y,
                  "data-wide-markdown-block-kind": v,
                  children: s,
                })),
                (u[10] = s),
                (u[11] = t),
                (u[12] = y),
                (u[13] = v),
                (u[14] = c))
              : (c = u[14]),
            c
          )
        },
        i: d,
      },
    )
  },
  e71N(e, t, a) {
    var n = a("ABep"),
      i = a("N55g"),
      l = a("Bbed"),
      r = a("jvxw")
    let s = (0, l._)(
        async () =>
          (
            await Promise.all([
              a.e(74692),
              a.e(198336),
              a.e(340985),
              a.e(652500),
              a.e(877652),
              a.e(558038),
              a.e(566398),
              a.e(620875),
              a.e(423550),
              a.e(875355),
            ]).then(a.bind(a, "wWdX"))
          ).VisualizationDirectiveRenderer,
        { fallback: (0, n.jsx)(r.E, {}), errorFallback: (0, n.jsx)(i.D, {}) },
      ),
      o = (0, l._)(
        async () =>
          (
            await Promise.all([
              a.e(74692),
              a.e(198336),
              a.e(340985),
              a.e(652500),
              a.e(877652),
              a.e(558038),
              a.e(566398),
              a.e(620875),
              a.e(423550),
              a.e(875355),
            ]).then(a.bind(a, "wWdX"))
          ).VisualizationSandbox,
        { fallback: (0, n.jsx)(r.E, {}), errorFallback: (0, n.jsx)(i.D, {}) },
      )
    a.d(t, {}, { C: o, f: s })
  },
}
//# sourceMappingURL=825258.78ac81a925.js.map
