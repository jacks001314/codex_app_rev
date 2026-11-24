export const __rspack_esm_ids = [570369]
export const __webpack_modules__ = {
  krwX(e, t, n) {
    var a = n("wCYo"),
      i = n("D015"),
      l = n("qmMi"),
      r = n("Ymp9"),
      o = n("yGJW"),
      s = n("OWtl")
    n("OMIV")
    let c = (0, l.un)(s.u, ({ get: e }) => !1)
    function u(e) {
      return "saved_reference" === e.imageTemplateSource || null != e.referenceImageId
        ? "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_SAVED_REFERENCE"
        : "matched_library" === e.imageTemplateSource
          ? "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_MATCHED_LIBRARY"
          : "recent_upload" === e.imageTemplateSource
            ? "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_RECENT_UPLOAD"
            : "local" === e.source
              ? "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_MANUAL_UPLOAD"
              : "library" === e.source
                ? "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_OTHER_LIBRARY"
                : "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_UNSPECIFIED"
    }
    n.d(
      t,
      {},
      {
        Wf: function (e, t, n, l, s) {
          if (!e.get(c)) return
          let d = {
            manualUploadCount: 0,
            savedReferenceCount: 0,
            matchedLibraryCount: 0,
            recentUploadCount: 0,
            otherLibraryCount: 0,
            unknownSourceCount: 0,
          }
          for (let e of l)
            if (!0 === e.imageReference || (0, r.cb)({ name: e.name, type: e.mimeType }))
              switch (u(e)) {
                case "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_MANUAL_UPLOAD":
                  d.manualUploadCount++
                  break
                case "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_SAVED_REFERENCE":
                  d.savedReferenceCount++
                  break
                case "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_MATCHED_LIBRARY":
                  d.matchedLibraryCount++
                  break
                case "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_RECENT_UPLOAD":
                  d.recentUploadCount++
                  break
                case "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_OTHER_LIBRARY":
                  d.otherLibraryCount++
                  break
                case "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_SOURCE_UNSPECIFIED":
                case "UNRECOGNIZED":
                  d.unknownSourceCount++
              }
          ;(0, o.yy)(e, a.yG, {
            promptId: t,
            promptGroupId: n,
            imageSendUuid: s,
            manualUploadCount: (0, i.At)(d.manualUploadCount),
            savedReferenceCount: (0, i.At)(d.savedReferenceCount),
            matchedLibraryCount: (0, i.At)(d.matchedLibraryCount),
            recentUploadCount: (0, i.At)(d.recentUploadCount),
            otherLibraryCount: (0, i.At)(d.otherLibraryCount),
            unknownSourceCount: (0, i.At)(d.unknownSourceCount),
          })
        },
        aW: c,
        e4: function (e, t, n, i, l) {
          e.get(c) &&
            (0, o.yy)(e, a.AK, {
              promptId: t,
              promptGroupId: n,
              source: u(i),
              action:
                "selected" === l
                  ? "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_SELECTED"
                  : "CHATGPT_IMAGE_PROMPT_INPUT_IMAGE_ACTION_DESELECTED",
            })
        },
      },
    )
  },
  Hh7n(e, t, n) {
    var a = n("X6Vn"),
      i = n("pdPj"),
      l = n("iHfE")
    n.d(
      t,
      {},
      {
        Su: async function (e, t, { onClose: r } = {}) {
          let o = e.get(l.ts)
          if (null == o || !e.get(i.l)) return
          let { ReferenceImageManageDialog: s } = await Promise.all([n.e(584510), n.e(855407)]).then(n.bind(n, "LUIA"))
          e.get(i.l) &&
            e.get(l.ts) === o &&
            (0, a.qf)(e, s, { onClose: r, referenceImage: t, referenceImagesAccountId: o })
        },
        h9: async function (e, { onSaved: t } = {}) {
          let r = e.get(l.ts)
          if (null == r || !e.get(i.l)) return
          let { ReferenceImageFormDialog: o } = await Promise.all([n.e(584510), n.e(280297)]).then(n.bind(n, "jj8f"))
          e.get(i.l) && e.get(l.ts) === r && (0, a.qf)(e, o, { referenceImagesAccountId: r, onSaved: t })
        },
        rk: async function (e, t) {
          let r = e.get(l.ts)
          if (null == r || !e.get(i.l)) return
          let { ReferenceImageSuggestionDialog: o } = await Promise.all([n.e(584510), n.e(545108)]).then(
            n.bind(n, "RrZF"),
          )
          e.get(i.l) && e.get(l.ts) === r && (0, a.qf)(e, o, { ...t, referenceImagesAccountId: r })
        },
      },
    )
  },
  fDIZ(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { H: a })
  },
  wZQ4(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("zd8w"),
      r = n("RNul")
    function o(e) {
      return e.isIntersecting
    }
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            s,
            c,
            u,
            d = (0, i.c)(20),
            {
              loadingPlaceholder: m,
              hasNextPage: g,
              isFetchingNextPage: f,
              onLoadNextPage: p,
              rootMargin: h,
              rootRef: v,
            } = e,
            x = (0, l.useRef)(null)
          d[0] !== g || d[1] !== f || d[2] !== p
            ? ((t = () => {
                g && !f && p()
              }),
              (d[0] = g),
              (d[1] = f),
              (d[2] = p),
              (d[3] = t))
            : (t = d[3])
          let y = (0, l.useEffectEvent)(t)
          if (
            (d[4] !== g || d[5] !== f || d[6] !== y || d[7] !== h || d[8] !== v
              ? ((n = () => {
                  let e = x.current
                  if (null == e || !g || f) return
                  if ("u" < typeof IntersectionObserver) return void y()
                  let t = new IntersectionObserver(
                    (e) => {
                      e.some(o) && (t.disconnect(), y())
                    },
                    { root: v?.current, rootMargin: h },
                  )
                  return (
                    t.observe(e),
                    () => {
                      t.disconnect()
                    }
                  )
                }),
                (d[4] = g),
                (d[5] = f),
                (d[6] = y),
                (d[7] = h),
                (d[8] = v),
                (d[9] = n))
              : (n = d[9]),
            d[10] !== g || d[11] !== f || d[12] !== h || d[13] !== v
              ? ((s = [g, f, h, v]), (d[10] = g), (d[11] = f), (d[12] = h), (d[13] = v), (d[14] = s))
              : (s = d[14]),
            (0, l.useEffect)(n, s),
            !g && !f)
          )
            return null
          if (!f) {
            let e
            return (
              d[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)("div", { ref: x, className: "min-h-px w-full" })), (d[15] = e))
                : (e = d[15]),
              e
            )
          }
          if (void 0 !== m) {
            let e
            return (
              d[16] !== m
                ? ((e = (0, a.jsx)("div", { ref: x, className: "min-h-px w-full", children: m })),
                  (d[16] = m),
                  (d[17] = e))
                : (e = d[17]),
              e
            )
          }
          d[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, a.jsx)("div", {
                ref: x,
                className: "flex w-full justify-center py-3",
                children: (0, a.jsx)(r.y, { className: "icon-xs text-secondary" }),
              })),
              (d[18] = c))
            : (c = d[18])
          let b = c
          return (
            d[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsxs)(a.Fragment, { children: [null, (0, a.jsx)(a.Fragment, { children: b })] })),
                (d[19] = u))
              : (u = d[19]),
            u
          )
        },
      },
    )
  },
  SUhA(e, t, n) {
    var a = n("QosV"),
      i = n("irkb"),
      l = n("qmMi"),
      r = n("zd8w"),
      o = n("tl5a"),
      s = n("CBsD"),
      c = n("kfGJ"),
      u = n("gTKF"),
      d = n("zHp1"),
      m = n("YeiR")
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            g,
            f,
            p,
            h,
            v,
            x,
            y = (0, a.c)(38),
            { src: b, conversationId: _, hostId: A, imageAssetResolver: j, shouldLoadFileDataUrl: I } = e,
            w = (0, i.jE)(),
            M = (0, l._U)(o.Qk, _),
            S = A ?? M ?? c.fI,
            P = (0, c.Qz)(S)
          y[0] !== _
            ? ((t = null == _ ? null : { kind: "app-server", conversationId: _ }), (y[0] = _), (y[1] = t))
            : (t = y[1])
          let E = (0, l._U)(u.threadExecutorTargetByThread$, t),
            C = E?.hostId === S ? E.environmentId : void 0,
            [T, R] = (0, r.useState)(null)
          y[2] !== b ? ((n = b.trim()), (y[2] = b), (y[3] = n)) : (n = y[3])
          let k = n.length > 0,
            N = k && (0, d.fi)(b) ? b : "",
            {
              dataUrl: U,
              src: O,
              isLoading: G,
              isError: F,
              loadSource: L,
              loadTiming: z,
              imageCacheHit: H,
              isShowingCachedImage: D,
              imageCheck: q,
              refetch: Y,
              deleted: W,
            } = (0, d.vM)(N, j)
          y[4] !== k || y[5] !== P.id || y[6] !== P.kind || y[7] !== S || y[8] !== b
            ? ((g = k ? (0, s.IY)(b) : null),
              (f = "local" === P.kind && P.id === S && null != g ? (0, m.B)(g) : null),
              (y[4] = k),
              (y[5] = P.id),
              (y[6] = P.kind),
              (y[7] = S),
              (y[8] = b),
              (y[9] = g),
              (y[10] = f))
            : ((g = y[9]), (f = y[10]))
          let $ = f,
            B = T?.src === b && T.environmentId === C ? T : null,
            V = B?.dataUrl ?? null,
            X = k ? (O ?? $ ?? (null != g || N ? V : b)) : null
          ;(y[11] !== g ||
          y[12] !== _ ||
          y[13] !== $ ||
          y[14] !== C ||
          y[15] !== S ||
          y[16] !== w ||
          y[17] !== I ||
          y[18] !== b
            ? ((p = () => {
                if (null == g || (null != $ && !I)) return
                let e = !1
                return (
                  R({ src: b, dataUrl: null, environmentId: C, isLoading: !0 }),
                  (0, s.fB)(g, S, w, void 0, _, C).then((t) => {
                    e || R({ src: b, dataUrl: t, environmentId: C, isLoading: !1 })
                  }),
                  () => {
                    e = !0
                  }
                )
              }),
              (h = [g, _, $, C, S, w, I, b]),
              (y[11] = g),
              (y[12] = _),
              (y[13] = $),
              (y[14] = C),
              (y[15] = S),
              (y[16] = w),
              (y[17] = I),
              (y[18] = b),
              (y[19] = p),
              (y[20] = h))
            : ((p = y[19]), (h = y[20])),
            (0, r.useEffect)(p, h),
            y[21] !== U || y[22] !== V || y[23] !== b
              ? ((v = U ?? V ?? (b.startsWith("data:image/") ? b : null)),
                (y[21] = U),
                (y[22] = V),
                (y[23] = b),
                (y[24] = v))
              : (v = y[24]))
          let Q = U ?? V ?? X,
            K = G || (null != g && null == $ && (null == B || B.isLoading)),
            J = !!N && F
          return (
            y[25] !== W ||
            y[26] !== H ||
            y[27] !== q ||
            y[28] !== D ||
            y[29] !== L ||
            y[30] !== z ||
            y[31] !== X ||
            y[32] !== Y ||
            y[33] !== v ||
            y[34] !== Q ||
            y[35] !== K ||
            y[36] !== J
              ? ((x = {
                  dataUrl: v,
                  previewSrc: X,
                  downloadSrc: Q,
                  isLoading: K,
                  isError: J,
                  loadSource: L,
                  loadTiming: z,
                  imageCacheHit: H,
                  isShowingCachedImage: D,
                  imageCheck: q,
                  refetch: Y,
                  deleted: W,
                }),
                (y[25] = W),
                (y[26] = H),
                (y[27] = q),
                (y[28] = D),
                (y[29] = L),
                (y[30] = z),
                (y[31] = X),
                (y[32] = Y),
                (y[33] = v),
                (y[34] = Q),
                (y[35] = K),
                (y[36] = J),
                (y[37] = x))
              : (x = y[37]),
            x
          )
        },
      },
    )
  },
  eYeG(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("on57"),
      r = n("zd8w"),
      o = n("Qgfj"),
      s = n("aqd9"),
      c = n("POjP")
    function u() {
      return (0, c.e)(0)
    }
    function d(e) {
      let t,
        n,
        r,
        s = (0, i.c)(8),
        { placement: c, progress: u, ref: d } = e,
        m = "top" === (void 0 === c ? "bottom" : c) ? "top-3.5" : "bottom-3.5"
      s[0] !== m
        ? ((t = (0, l.A)(
            "pointer-events-none absolute end-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none",
            m,
          )),
          (s[0] = m),
          (s[1] = t))
        : (t = s[1])
      let g = u / 100
      return (
        s[2] !== g ? ((n = (0, a.jsx)(o.Gr, { value: g, style: "percent" })), (s[2] = g), (s[3] = n)) : (n = s[3]),
        s[4] !== d || s[5] !== t || s[6] !== n
          ? ((r = (0, a.jsx)("span", { ref: d, className: t, children: n })),
            (s[4] = d),
            (s[5] = t),
            (s[6] = n),
            (s[7] = r))
          : (r = s[7]),
        r
      )
    }
    n.d(
      t,
      {},
      {
        E: d,
        P: function (e) {
          let t,
            n,
            l,
            o = (0, i.c)(7),
            { generationStartedAtMs: m, isActive: g, placement: f } = e,
            p = void 0 === g || g,
            [h, v] = (0, r.useState)(u),
            x = (0, r.useRef)(null)
          return (
            o[0] !== m || o[1] !== p
              ? ((t = () => {
                  let e,
                    t = x.current
                  if (null == t) return
                  let n = t.ownerDocument,
                    a = !1,
                    i = () => {
                      let t = (0, c.e)(Date.now() - m)
                      return (v(t), 99 === t && (clearInterval(e), (e = void 0)), t)
                    },
                    l = () => {
                      ;(clearInterval(e), (e = void 0), a && !n.hidden && 99 > i() && (e = setInterval(i, 500)))
                    }
                  if ((i(), !p)) return
                  n.addEventListener("visibilitychange", l)
                  let r = (0, s.d)(t, (e) => {
                    ;((a = e), l())
                  })
                  return () => {
                    ;(r?.(), n.removeEventListener("visibilitychange", l), clearInterval(e))
                  }
                }),
                (n = [m, p]),
                (o[0] = m),
                (o[1] = p),
                (o[2] = t),
                (o[3] = n))
              : ((t = o[2]), (n = o[3])),
            (0, r.useLayoutEffect)(t, n),
            o[4] !== f || o[5] !== h
              ? ((l = (0, a.jsx)(d, { ref: x, placement: f, progress: h })), (o[4] = f), (o[5] = h), (o[6] = l))
              : (l = o[6]),
            l
          )
        },
      },
    )
  },
  POjP(e, t, n) {
    let a = [
      [0, 3],
      [0.1, 25],
      [0.55, 58],
      [0.85, 88],
      [1, 90],
    ]
    n.d(
      t,
      {},
      {
        e: function (e) {
          let t = Math.max(0, e / 45e3)
          for (let e = 1; e < a.length; e += 1) {
            let n = a[e - 1],
              i = a[e]
            if (t <= i[0]) {
              let e = (t - n[0]) / (i[0] - n[0])
              return Math.floor(n[1] + e * (i[1] - n[1]))
            }
          }
          return Math.min(99, Math.floor(90 + 10 * (1 - Math.exp(-1.5 * (t - 1)))))
        },
      },
    )
  },
  ghCJ(e, t, n) {
    n.d(t, { o: () => g })
    var a = n("ABep"),
      i = n("QosV"),
      l = n("on57"),
      r = n("zd8w"),
      o = n("Wf1j"),
      s = n("aqd9"),
      c = n("T1PX"),
      u = n("a6Zv"),
      d = n("eYeG")
    let m = {
      "image-preview": { spacing: 22, radius: 2 },
      playground: { spacing: 14, radius: 1.5 },
      thumbnail: { spacing: 6, radius: 0.75 },
    }
    function g(e) {
      let t,
        n,
        r,
        s,
        c,
        u,
        m = (0, i.c)(27),
        {
          ariaLabel: g,
          background: p,
          generationStartedAtMs: h,
          isAnimating: v,
          presentation: x,
          previewSrc: y,
          progressPlacement: b,
          ref: _,
        } = e,
        A = void 0 === v || v,
        j = void 0 === x ? "default" : x,
        I = (0, o.A)(),
        w = "fill" === j || "image-preview" === j,
        M = j
      ;("single" === M ? (M = "playground") : "fill" === M && (M = "default"),
        m[0] !== g || m[1] !== I
          ? ((t =
              g ??
              I.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image...",
              })),
            (m[0] = g),
            (m[1] = I),
            (m[2] = t))
          : (t = m[2]))
      let S = null != y ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
        P =
          null == y &&
          "surface" === (void 0 === p ? "surface" : p) &&
          ("single" === j ? "bg-surface-secondary" : "dark:bg-secondary-ghost-hover bg-primary-soft-active")
      ;(m[3] !== w || m[4] !== j || m[5] !== S || m[6] !== P
        ? ((n = (0, l.A)(
            "overflow-clip",
            S,
            P,
            w
              ? "absolute inset-0 size-full"
              : [
                  "relative aspect-square",
                  "thumbnail" === j ? "rounded-lg" : "rounded-2xl",
                  "single" === j ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]",
                ],
          )),
          (m[3] = w),
          (m[4] = j),
          (m[5] = S),
          (m[6] = P),
          (m[7] = n))
        : (n = m[7]),
        m[8] !== j || m[9] !== y
          ? ((r =
              null != y
                ? (0, a.jsx)("img", {
                    alt: "",
                    className: (0, l.A)(
                      "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70",
                      "image-preview" === j ? "blur-md" : "scale-125 blur-3xl",
                    ),
                    src: y,
                    referrerPolicy: "no-referrer",
                  })
                : null),
            (m[8] = j),
            (m[9] = y),
            (m[10] = r))
          : (r = m[10]))
      let E = null != y
      return (
        m[11] !== M || m[12] !== A || m[13] !== E
          ? ((s = (0, a.jsx)(f, { isAnimating: A, overImage: E, presentation: M })),
            (m[11] = M),
            (m[12] = A),
            (m[13] = E),
            (m[14] = s))
          : (s = m[14]),
        m[15] !== w || m[16] !== h || m[17] !== A || m[18] !== b
          ? ((c =
              null != h
                ? (0, a.jsx)(d.P, { generationStartedAtMs: h, isActive: A, placement: b ?? (w ? "top" : "bottom") }, h)
                : null),
            (m[15] = w),
            (m[16] = h),
            (m[17] = A),
            (m[18] = b),
            (m[19] = c))
          : (c = m[19]),
        m[20] !== _ || m[21] !== s || m[22] !== c || m[23] !== t || m[24] !== n || m[25] !== r
          ? ((u = (0, a.jsxs)("div", { ref: _, "aria-busy": !0, "aria-label": t, className: n, children: [r, s, c] })),
            (m[20] = _),
            (m[21] = s),
            (m[22] = c),
            (m[23] = t),
            (m[24] = n),
            (m[25] = r),
            (m[26] = u))
          : (u = m[26]),
        u
      )
    }
    function f(e) {
      let t,
        n,
        o,
        d,
        g,
        f = (0, i.c)(17),
        { isAnimating: y, overImage: b, presentation: _ } = e,
        A = (0, c.I)(),
        j = (0, u.Y)(),
        I = (0, r.useRef)(null),
        w = (0, r.useRef)(null)
      ;(f[0] !== y || f[1] !== j || f[2] !== _ || f[3] !== A
        ? ((t = () => {
            if (!y) return
            let e = I.current,
              t = w.current,
              n = t?.getContext("2d")
            if (null == e || null == t || null == n) return
            let a = 2 * Math.PI,
              i = getComputedStyle(e).color || (j ? "white" : "black"),
              l = (e, t) => e + (A ? 0.5 : Math.random()) * (t - e),
              r = (e) => 1.2 * e * l(1, 1.35),
              o = {
                durations: {
                  offsetX1: r(4500),
                  offsetY1: r(6330),
                  offsetX2: r(5600),
                  offsetY2: r(5750),
                  fieldSize1: r(3600),
                  fieldSize2: r(2400),
                },
                phases: {
                  offsetX1: l(0, 1),
                  offsetY1: l(0, 1),
                  offsetX2: l(0, 1),
                  offsetY2: l(0, 1),
                  fieldSize1: l(0, 1),
                  fieldSize2: l(0, 1),
                },
                bounds: {
                  x1Start: l(0.1, 0.32),
                  x1End: l(0.68, 0.9),
                  y1Start: l(0.1, 0.32),
                  y1End: l(0.68, 0.9),
                  x2Start: l(0.68, 0.9),
                  x2End: l(0.1, 0.32),
                  y2Start: l(0.68, 0.9),
                  y2End: l(0.1, 0.32),
                },
                fieldSizeRange: {
                  firstStart: l(0.42, 0.52),
                  firstEnd: l(0.62, 0.75),
                  secondStart: l(0.5, 0.62),
                  secondEnd: l(0.74, 0.9),
                },
              },
              c = null,
              u = 0,
              d = null,
              g = !0,
              f = null,
              b = !1,
              M = !1,
              S = t.ownerDocument,
              P = (l) => {
                var r, s, y, b, j, I, w, M, S, E, C, T
                if (!A && 0 !== u && l - u < 33.333333333333336) {
                  c = requestAnimationFrame(P)
                  return
                }
                if (
                  ((u = l),
                  null == f && (f = l),
                  (g || null == d) &&
                    (() => {
                      let n =
                          "image-preview" === _
                            ? { width: e.clientWidth, height: e.clientHeight }
                            : e.getBoundingClientRect(),
                        a = Math.max(0, Math.floor(n.width)),
                        i = Math.max(0, Math.floor(n.height))
                      if (0 === a || 0 === i) {
                        ;((d = null), (g = !1))
                        return
                      }
                      let l = Math.max(1, window.devicePixelRatio || 1),
                        r = Math.floor(a * l),
                        o = Math.floor(i * l)
                      ;(t.width !== r || t.height !== o) && ((t.width = r), (t.height = o))
                      let s = "default" === _ ? Math.max(1, 12 / l) : m[_].spacing,
                        c = Math.max(1, Math.floor(a / s)),
                        u = Math.max(1, Math.floor(i / s)),
                        f = (a - (c - 1) * s) * 0.5,
                        p = (i - (u - 1) * s) * 0.5,
                        h = new Float32Array(c),
                        v = new Float32Array(u),
                        x = new Float32Array(c),
                        y = new Float32Array(u)
                      for (let e = 0; e < c; e += 1) ((h[e] = f + e * s), (x[e] = 1 === c ? 0.5 : e / (c - 1)))
                      for (let e = 0; e < u; e += 1) ((v[e] = p + e * s), (y[e] = 1 === u ? 0.5 : e / (u - 1)))
                      ;((d = {
                        width: a,
                        height: i,
                        dpr: l,
                        spacing: s,
                        xPositions: h,
                        yPositions: v,
                        xNormals: x,
                        yNormals: y,
                      }),
                        (g = !1))
                    })(),
                  null == d)
                ) {
                  c = null
                  return
                }
                let R = A ? 0 : l - f,
                  k = (e, t) => {
                    let n
                    return (n = (R / e + t) % 1) <= 0.5 ? 2 * n : 2 - 2 * n
                  },
                  N =
                    ((r = o.bounds.x1Start),
                    (s = o.bounds.x1End),
                    r + (s - r) * x(k(o.durations.offsetX1, o.phases.offsetX1))),
                  U =
                    ((y = o.bounds.y1Start),
                    (b = o.bounds.y1End),
                    y + (b - y) * v(k(o.durations.offsetY1, o.phases.offsetY1))),
                  O =
                    ((j = o.bounds.x2Start),
                    (I = o.bounds.x2End),
                    j + (I - j) * x(k(o.durations.offsetX2, o.phases.offsetX2))),
                  G =
                    ((w = o.bounds.y2Start),
                    (M = o.bounds.y2End),
                    w + (M - w) * v(k(o.durations.offsetY2, o.phases.offsetY2))),
                  F =
                    0.78 *
                    ((S = o.fieldSizeRange.firstStart),
                    (E = o.fieldSizeRange.firstEnd),
                    S + (E - S) * v(k(o.durations.fieldSize1, o.phases.fieldSize1))),
                  L =
                    0.78 *
                    ((C = o.fieldSizeRange.secondStart),
                    (T = o.fieldSizeRange.secondEnd),
                    C + (T - C) * v(k(o.durations.fieldSize2, o.phases.fieldSize2)))
                ;(n.save(),
                  n.setTransform(d.dpr, 0, 0, d.dpr, 0, 0),
                  n.clearRect(0, 0, d.width, d.height),
                  (n.fillStyle = i))
                let z = "default" === _ ? Math.max(0.55, 0.5 * d.spacing * 0.16) : m[_].radius
                for (let e = 0; e < d.yPositions.length; e += 1) {
                  let t = d.yPositions[e],
                    i = d.yNormals[e]
                  for (let e = 0; e < d.xPositions.length; e += 1) {
                    let l = d.xPositions[e],
                      r = d.xNormals[e],
                      o = Math.pow(
                        p(
                          (1 - h(0, F, Math.hypot(r - N, i - U))) * 1.2 +
                            (1 - h(0, L, Math.hypot(r - O, i - G))) * 0.82,
                        ),
                        1.18,
                      )
                    o <= 0.03 ||
                      ((n.globalAlpha = o), n.beginPath(), n.moveTo(l + z, t), n.arc(l, t, z, 0, a), n.fill())
                  }
                }
                ;(n.restore(), (c = A ? null : requestAnimationFrame(P)))
              },
              E = new ResizeObserver(() => {
                ;((g = !0), b && null == c && (c = requestAnimationFrame(P)))
              })
            E.observe(e)
            let C = () => {
                ;(b = M && "hidden" !== S.visibilityState)
                  ? null == c && (c = requestAnimationFrame(P))
                  : null != c && (cancelAnimationFrame(c), (c = null))
              },
              T = (0, s.d)(e, (e) => {
                ;((M = e), C())
              })
            return (
              S.addEventListener("visibilitychange", C),
              () => {
                ;(T?.(),
                  S.removeEventListener("visibilitychange", C),
                  null != c && cancelAnimationFrame(c),
                  E.disconnect())
              }
            )
          }),
          (f[0] = y),
          (f[1] = j),
          (f[2] = _),
          (f[3] = A),
          (f[4] = t))
        : (t = f[4]),
        f[5] !== y || f[6] !== j || f[7] !== b || f[8] !== _ || f[9] !== A
          ? ((n = [y, j, b, _, A]), (f[5] = y), (f[6] = j), (f[7] = b), (f[8] = _), (f[9] = A), (f[10] = n))
          : (n = f[10]),
        (0, r.useEffect)(t, n))
      let M = (b || "image-preview" === _) && "overImage-KmHrEc",
        S = (!y || A) && "reducedMotion-ttnr0y"
      return (
        f[11] !== M || f[12] !== S
          ? ((o = (0, l.A)("dots-avXrIV", M, S)), (f[11] = M), (f[12] = S), (f[13] = o))
          : (o = f[13]),
        f[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)("canvas", { ref: w, "aria-hidden": !0, className: "block h-full w-full" })), (f[14] = d))
          : (d = f[14]),
        f[15] !== o
          ? ((g = (0, a.jsx)("div", { ref: I, className: o, children: d })), (f[15] = o), (f[16] = g))
          : (g = f[16]),
        g
      )
    }
    function p(e) {
      return Math.min(1, Math.max(0, e))
    }
    function h(e, t, n) {
      let a = p((n - e) / (t - e))
      return a * a * (3 - 2 * a)
    }
    function v(e) {
      return e * e * (3 - 2 * e)
    }
    function x(e) {
      return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
    }
  },
  aYc1(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("X3K1")
    n.d(
      t,
      {},
      {
        i: function () {
          let e,
            t = (0, i.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 overflow-hidden rounded-lg peer-data-[space-image-thumbnail-ready]/progressive-preview:hidden",
                  children: (0, a.jsx)(l.X, { as: "span", size: "fill", variant: "chatgpt-project" }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  LcBG(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("on57"),
      r = n("suct"),
      o = n("iodE"),
      s = n("K45w"),
      c = n("SOml"),
      u = n("K4Cx"),
      d = n("zd8w"),
      m = n("oyxz"),
      g = n("X3K1"),
      f = n("V8uZ"),
      p = n("aYc1"),
      h = n("PArc")
    let v = [
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-27/20",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-27/20",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-27/20",
      "aspect-6/5",
      "aspect-7/5",
    ]
    function x(e) {
      let t,
        n = (0, i.c)(3),
        { layout: l, items: r } = e
      return (
        n[0] !== r || n[1] !== l
          ? ((t =
              "uniform" === l
                ? (0, a.jsx)(h.n, { items: r })
                : (0, a.jsx)(y, { items: r, imageMasonry: "image-masonry" === l }, l)),
            (n[0] = r),
            (n[1] = l),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function y(e) {
      let t,
        n,
        o,
        s,
        c,
        u,
        m,
        g,
        f,
        p,
        h = (0, i.c)(25),
        { items: v, animate: x, imageMasonry: y } = e,
        w = void 0 !== x && x,
        M = void 0 !== y && y,
        S = (0, d.useRef)(null)
      h[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Map()), (h[0] = t)) : (t = h[0])
      let [P, E] = (0, d.useState)(t)
      h[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { columns: 0, width: 0, animate: !1, ids: [], assignments: new Map() }), (h[1] = n))
        : (n = h[1])
      let C = (0, d.useRef)(n)
      h[2] !== v ? ((s = JSON.stringify((o = v.map(j)))), (h[2] = v), (h[3] = o), (h[4] = s)) : ((o = h[3]), (s = h[4]))
      let T = s
      h[5] !== o ? ((c = () => o), (h[5] = o), (h[6] = c)) : (c = h[6])
      let R = (0, d.useEffectEvent)(c)
      ;(h[7] !== w || h[8] !== R || h[9] !== M
        ? ((u = () => {
            let e,
              t = S.current
            if (!t) return
            let n = R(),
              a = new Map(Array.from(t.querySelectorAll(":scope > [data-masonry-item]"), A)),
              i = n.flatMap((e) => a.get(e) ?? []),
              l = () => {
                let e = t.clientWidth
                if (0 === e) return
                let a = getComputedStyle(t),
                  l = parseFloat(a.rowGap),
                  r = C.current,
                  o = M
                    ? Math.max(1, Math.floor((e + l) / (180 + l)))
                    : Number(a.getPropertyValue("--codex-library-masonry-columns")) || 1
                if (M && r.columns !== o)
                  for (let e of (t.style.setProperty("--codex-library-masonry-columns", String(o)), i))
                    Number(e.style.gridColumn) > o && (e.style.gridColumn = "")
                let s = new Map(),
                  c = Array(o).fill(0),
                  u = i.map(_),
                  d = n.findIndex((e, t) => e !== r.ids[t]),
                  m = [],
                  g = (e, t, n) => {
                    ;((m[t] = { id: e, column: n, top: c[n] }), s.set(e, n), (c[n] = c[n] + (u[t] + l)))
                  }
                if (M && r.columns === o) {
                  let e = n.filter((e) => !e.startsWith("loading-") && r.assignments.has(e)),
                    t = new Map(n.map(b))
                  if (r.ids.filter((e) => !e.startsWith("loading-") && t.has(e)).every((t, n) => t === e[n]))
                    for (let [e, n] of r.assignments) {
                      let a = t.get(e)
                      null == a || e.startsWith("loading-") || g(e, a, n)
                    }
                }
                n.forEach((e, t) => {
                  if (s.has(e)) return
                  let n = !M && r.columns === o && (-1 === d || t < d) ? r.assignments.get(e) : void 0
                  g(e, t, n ?? c.indexOf(Math.min(...c)))
                })
                let f = w && r.width === e && r.columns === o && (r.animate || -1 !== d || n.length !== r.ids.length)
                if (
                  ((C.current = { columns: o, width: e, animate: f, ids: n, assignments: s }),
                  (t.style.height = `${Math.max(0, ...c) - (n.length > 0 ? l : 0)}px`),
                  w)
                ) {
                  let t = ((e + l) / o) * ("rtl" === a.direction ? -1 : 1),
                    n = new Map()
                  for (let { id: e, column: a, top: i } of m)
                    n.set(e, { x: a * t, y: i, animate: f && r.assignments.has(e) })
                  E(n)
                  return
                }
                for (let [e, t] of i.entries()) {
                  let { column: n, top: a } = m[e]
                  ;((t.style.gridColumn = `${n + 1}`),
                    (t.style.gridRow = "1"),
                    (t.style.transform = `translateY(${a}px)`))
                }
              },
              r = new ResizeObserver(() => {
                ;(null != e && cancelAnimationFrame(e), (e = requestAnimationFrame(l)))
              })
            for (let e of (r.observe(t), i)) r.observe(e)
            return (
              l(),
              () => {
                ;(r.disconnect(), null != e && cancelAnimationFrame(e))
              }
            )
          }),
          (h[7] = w),
          (h[8] = R),
          (h[9] = M),
          (h[10] = u))
        : (u = h[10]),
        h[11] !== w || h[12] !== M || h[13] !== T
          ? ((m = [T, w, M]), (h[11] = w), (h[12] = M), (h[13] = T), (h[14] = m))
          : (m = h[14]),
        (0, d.useLayoutEffect)(u, m))
      let k =
        !M &&
        "sm:gap-4 @sm:[--codex-library-masonry-columns:2] @xl:[--codex-library-masonry-columns:3] @3xl:[--codex-library-masonry-columns:4] @5xl:[--codex-library-masonry-columns:5] @7xl:[--codex-library-masonry-columns:6]"
      return (
        h[15] !== k
          ? ((g = (0, l.A)(
              "relative grid grid-cols-[repeat(var(--codex-library-masonry-columns),minmax(0,1fr))] items-start gap-3 [--codex-library-masonry-columns:1]",
              k,
            )),
            (h[15] = k),
            (h[16] = g))
          : (g = h[16]),
        h[17] !== w || h[18] !== M || h[19] !== v || h[20] !== P
          ? ((f = w
              ? (0, a.jsx)(r.N, {
                  initial: !1,
                  mode: "popLayout",
                  children: v.map((e) => (0, a.jsx)(I, { id: e.id, position: P.get(e.id), children: e.content }, e.id)),
                })
              : v.map((e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: (0, l.A)(
                        "min-w-0",
                        M &&
                          "nth-[3n+1]:[--image-masonry-placeholder-ratio:4/3] nth-[5n+2]:[--image-masonry-placeholder-ratio:3/4]",
                      ),
                      "data-masonry-item": e.id,
                      children: e.content,
                    },
                    e.id,
                  ),
                )),
            (h[17] = w),
            (h[18] = M),
            (h[19] = v),
            (h[20] = P),
            (h[21] = f))
          : (f = h[21]),
        h[22] !== g || h[23] !== f
          ? ((p = (0, a.jsx)("div", {
              className: "@container",
              children: (0, a.jsx)("div", { ref: S, className: g, children: f }),
            })),
            (h[22] = g),
            (h[23] = f),
            (h[24] = p))
          : (p = h[24]),
        p
      )
    }
    function b(e, t) {
      return [e, t]
    }
    function _(e) {
      return e.offsetHeight
    }
    function A(e) {
      return [e.dataset.masonryItem, e]
    }
    function j(e) {
      let { id: t } = e
      return t
    }
    function I(e) {
      let t,
        n,
        l,
        r,
        m,
        g,
        p,
        h = (0, i.c)(23),
        { id: v, ref: x, position: y, children: b } = e,
        _ = (0, o.tF)(),
        A = (0, s.d)(y?.x ?? 0),
        j = (0, s.d)(y?.y ?? 0)
      h[0] !== y || h[1] !== A || h[2] !== j
        ? ((t = () => {
            if (!y?.animate) {
              ;(A.jump(y?.x ?? 0), j.jump(y?.y ?? 0))
              return
            }
            let e = [(0, c.i)(A, y.x, f.X7), (0, c.i)(j, y.y, f.X7)]
            return () => e.forEach(w)
          }),
          (h[0] = y),
          (h[1] = A),
          (h[2] = j),
          (h[3] = t))
        : (t = h[3])
      let I = y?.x,
        M = y?.y,
        S = y?.animate
      ;(h[4] !== I || h[5] !== M || h[6] !== S || h[7] !== A || h[8] !== j
        ? ((n = [I, M, S, A, j]), (h[4] = I), (h[5] = M), (h[6] = S), (h[7] = A), (h[8] = j), (h[9] = n))
        : (n = h[9]),
        (0, d.useLayoutEffect)(t, n))
      let P = !_,
        E = !_
      return (
        h[10] !== A || h[11] !== j ? ((l = { x: A, y: j }), (h[10] = A), (h[11] = j), (h[12] = l)) : (l = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = { opacity: 1 }),
            (r = { opacity: 0 }),
            (m = { opacity: { duration: 0.15, ease: f.Wu } }),
            (h[13] = r),
            (h[14] = m),
            (h[15] = g))
          : ((r = h[13]), (m = h[14]), (g = h[15])),
        h[16] !== b || h[17] !== v || h[18] !== x || h[19] !== P || h[20] !== E || h[21] !== l
          ? ((p = (0, a.jsx)(u.P.div, {
              ref: x,
              className: "col-start-1 row-start-1 min-w-0",
              "data-masonry-item": v,
              "aria-hidden": P,
              inert: E,
              initial: !1,
              style: l,
              animate: g,
              exit: r,
              transition: m,
              children: b,
            })),
            (h[16] = b),
            (h[17] = v),
            (h[18] = x),
            (h[19] = P),
            (h[20] = E),
            (h[21] = l),
            (h[22] = p))
          : (p = h[22]),
        p
      )
    }
    function w(e) {
      return e.stop()
    }
    function M(e) {
      let t,
        n,
        r,
        o,
        s,
        c = (0, i.c)(18),
        { square: u, layout: d, index: f } = e
      c[0] !== d
        ? ((t =
            "image-masonry" === d
              ? (0, a.jsx)(p.i, {})
              : (0, a.jsx)(g.X, { size: "fill", variant: "chatgpt-project" })),
          (c[0] = d),
          (c[1] = t))
        : (t = c[1])
      let h = t,
        x = "uniform" === d && "flex w-full flex-col items-center gap-3",
        y = "image-masonry" === d && "relative aspect-[var(--image-masonry-placeholder-ratio,1)] w-full"
      c[2] !== f || c[3] !== d || c[4] !== u || c[5] !== x || c[6] !== y
        ? ((n = (0, l.A)(x, y, null == d && ["w-full overflow-hidden rounded-2xl", u ? "aspect-square" : v[f]])),
          (c[2] = f),
          (c[3] = d),
          (c[4] = u),
          (c[5] = x),
          (c[6] = y),
          (c[7] = n))
        : (n = c[7])
      let b = 0 === f ? "status" : void 0
      return (
        c[8] !== f
          ? ((r =
              0 === f
                ? (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(m.A, { id: "libraryNext.results.loading", defaultMessage: "Loading library" }),
                  })
                : null),
            (c[8] = f),
            (c[9] = r))
          : (r = c[9]),
        c[10] !== d || c[11] !== h
          ? ((o =
              "uniform" === d
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", { className: "aspect-7/5 w-full overflow-hidden rounded-3xl", children: h }),
                      (0, a.jsx)("div", {
                        "aria-hidden": !0,
                        className: "flex h-5 w-full items-center justify-center",
                        children: (0, a.jsx)("span", { className: "h-3 w-1/2 rounded bg-surface-tertiary" }),
                      }),
                    ],
                  })
                : h),
            (c[10] = d),
            (c[11] = h),
            (c[12] = o))
          : (o = c[12]),
        c[13] !== n || c[14] !== b || c[15] !== r || c[16] !== o
          ? ((s = (0, a.jsxs)("div", { className: n, role: b, children: [r, o] })),
            (c[13] = n),
            (c[14] = b),
            (c[15] = r),
            (c[16] = o),
            (c[17] = s))
          : (s = c[17]),
        s
      )
    }
    n.d(
      t,
      {},
      {
        bg: y,
        c5: M,
        cZ: x,
        oH: function (e) {
          let t,
            n,
            l = (0, i.c)(6),
            { square: r, layout: o } = e
          return (
            l[0] !== o || l[1] !== r
              ? ((t = v.map((e, t) => ({
                  id: `loading-${t}`,
                  content: (0, a.jsx)(M, { layout: o, square: r, index: t }),
                }))),
                (l[0] = o),
                (l[1] = r),
                (l[2] = t))
              : (t = l[2]),
            l[3] !== o || l[4] !== t
              ? ((n = (0, a.jsx)("div", { className: "pt-4", children: (0, a.jsx)(x, { layout: o, items: t }) })),
                (l[3] = o),
                (l[4] = t),
                (l[5] = n))
              : (n = l[5]),
            n
          )
        },
      },
    )
  },
  PArc(e, t, n) {
    var a = n("ABep"),
      i = n("QosV")
    function l(e) {
      let { id: t, content: n } = e
      return (0, a.jsx)("div", { className: "min-w-0", children: n }, t)
    }
    n.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            n,
            r = (0, i.c)(4),
            { items: o } = e
          return (
            r[0] !== o ? ((t = o.map(l)), (r[0] = o), (r[1] = t)) : (t = r[1]),
            r[2] !== t
              ? ((n = (0, a.jsx)("div", {
                  className: "@container",
                  children: (0, a.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-x-6 gap-y-10 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 @min-[96rem]:grid-cols-6",
                    "data-space-preview-grid": "",
                    children: t,
                  }),
                })),
                (r[2] = t),
                (r[3] = n))
              : (n = r[3]),
            n
          )
        },
      },
    )
  },
  kQiD(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("ozCc"),
      r = n("qmMi"),
      o = n("zd8w"),
      s = n("Wf1j"),
      c = n("oyxz"),
      u = n("Hh7n"),
      d = n("iHfE"),
      m = n("t5e6"),
      g = n("Sm6l"),
      f = n("HOLv"),
      p = n("Fj96"),
      h = n("OWtl"),
      v = n("WFY2")
    function x(e) {
      v.v.warning("Failed to open reference image dialog", { safe: {}, sensitive: { error: e } })
    }
    n.d(
      t,
      {},
      {
        Y: function () {
          let e,
            t,
            n,
            v,
            y,
            b,
            _,
            A,
            j,
            I,
            w,
            M = (0, i.c)(25),
            S = (0, r.gh)(h.u),
            P = (0, o.useId)(),
            E = (0, s.A)(),
            { data: C } = (0, r.Ul)(d.$4)
          M[0] !== S
            ? ((e = (e) => {
                ;(null == e ? (0, u.h9)(S) : (0, u.Su)(S, e)).catch(x)
              }),
              (M[0] = S),
              (M[1] = e))
            : (e = M[1])
          let T = e
          return (
            M[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(c.A, { ...p.T.libraryHeading })), (M[2] = t))
              : (t = M[2]),
            M[3] !== P
              ? ((n = (0, a.jsx)("h2", { id: P, className: "text-sm font-semibold text-primary", children: t })),
                (M[3] = P),
                (M[4] = n))
              : (n = M[4]),
            M[5] !== E ? ((v = E.formatMessage(p.T.addReference)), (M[5] = E), (M[6] = v)) : (v = M[6]),
            M[7] !== T ? ((y = () => T()), (M[7] = T), (M[8] = y)) : (y = M[8]),
            M[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, a.jsx)(f.I, { asset: l.f })), (_ = (0, a.jsx)(c.A, { ...p.T.add })), (M[9] = b), (M[10] = _))
              : ((b = M[9]), (_ = M[10])),
            M[11] !== v || M[12] !== y
              ? ((A = (0, a.jsx)("li", {
                  className: "shrink-0",
                  children: (0, a.jsxs)(g.$, {
                    "aria-label": v,
                    color: "outlineGhost",
                    radius: "full",
                    size: "dialogAction",
                    onClick: y,
                    children: [b, _],
                  }),
                })),
                (M[11] = v),
                (M[12] = y),
                (M[13] = A))
              : (A = M[13]),
            M[14] !== E || M[15] !== T || M[16] !== C
              ? ((j = C?.map((e) => {
                  let t = "self" === e.entity_type ? E.formatMessage(p.T.entitySelf) : e.entity_name
                  return (0, a.jsx)(
                    "li",
                    {
                      className: "shrink-0",
                      children: (0, a.jsxs)(g.$, {
                        className: "ps-1.25",
                        "aria-label": E.formatMessage(p.T.libraryManage, { name: t }),
                        color: "outline",
                        radius: "full",
                        size: "dialogAction",
                        onClick: () => T(e),
                        children: [
                          (0, a.jsx)(m.A, {
                            alt: "",
                            assetPointer: e.thumbnail_asset_pointer ?? e.asset_pointer,
                            fallbackUrl: e.thumbnail_url ?? e.content_url,
                            name: t,
                          }),
                          (0, a.jsx)("span", { className: "max-w-40 truncate", children: t }),
                        ],
                      }),
                    },
                    e.id,
                  )
                })),
                (M[14] = E),
                (M[15] = T),
                (M[16] = C),
                (M[17] = j))
              : (j = M[17]),
            M[18] !== A || M[19] !== j
              ? ((I = (0, a.jsxs)("ul", {
                  className: "no-scrollbar mt-3 flex min-w-0 items-center gap-2 overflow-x-auto pb-1",
                  children: [A, j],
                })),
                (M[18] = A),
                (M[19] = j),
                (M[20] = I))
              : (I = M[20]),
            M[21] !== P || M[22] !== n || M[23] !== I
              ? ((w = (0, a.jsxs)("section", { "aria-labelledby": P, className: "py-4", children: [n, I] })),
                (M[21] = P),
                (M[22] = n),
                (M[23] = I),
                (M[24] = w))
              : (w = M[24]),
            w
          )
        },
      },
    )
  },
  FVNK(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("oyxz"),
      r = n("JNtf"),
      o = n("cZk2"),
      s = n("Bbed"),
      c = n("ghCJ"),
      u = n("Ac3m")
    let d = (0, a.jsx)(l.A, { id: "imagePreviewDialog.label", defaultMessage: "Image preview" }),
      m = (0, s._)(
        async () =>
          (
            await Promise.all([
              n.e(648165),
              n.e(446194),
              n.e(904485),
              n.e(923712),
              n.e(322496),
              n.e(53010),
              n.e(644312),
              n.e(141674),
              n.e(164460),
              n.e(678690),
              n.e(947437),
              n.e(901175),
              n.e(377960),
              n.e(843292),
              n.e(752862),
              n.e(150547),
              n.e(255843),
              n.e(314719),
              n.e(153694),
              n.e(679632),
              n.e(810979),
              n.e(921241),
              n.e(583579),
              n.e(433661),
              n.e(529755),
              n.e(631141),
              n.e(960583),
              n.e(778901),
              n.e(301030),
              n.e(77282),
              n.e(92253),
              n.e(273709),
              n.e(866709),
              n.e(486890),
              n.e(820714),
              n.e(587936),
              n.e(417402),
              n.e(612928),
              n.e(887074),
              n.e(452048),
              n.e(684598),
              n.e(299268),
              n.e(646093),
              n.e(434505),
              n.e(944124),
              n.e(202588),
              n.e(633339),
              n.e(992177),
              n.e(513017),
              n.e(643651),
              n.e(636373),
              n.e(441809),
              n.e(640683),
              n.e(212545),
              n.e(507080),
              n.e(973904),
              n.e(390843),
              n.e(827769),
              n.e(897450),
              n.e(812107),
              n.e(642253),
              n.e(896482),
              n.e(581568),
              n.e(264443),
              n.e(330283),
              n.e(977544),
              n.e(802912),
              n.e(707980),
              n.e(915524),
              n.e(295103),
              n.e(68367),
              n.e(443657),
              n.e(216721),
              n.e(231620),
              n.e(832130),
              n.e(174249),
              n.e(532972),
              n.e(556252),
              n.e(344408),
              n.e(348403),
              n.e(282332),
              n.e(923720),
              n.e(373215),
              n.e(816659),
            ]).then(n.bind(n, "IUEI"))
          ).ImagesComposerGeneration,
        {
          fallback: ({ generation: e, onClose: t, onCloseAutoFocus: n }) =>
            (0, a.jsx)(o.k, {
              open: !0,
              dialogComponent: g,
              title: d,
              onOpenChange: (e) => {
                e || t()
              },
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), n())
              },
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r.L3, { className: "sr-only", children: d }),
                  (0, a.jsx)("div", {
                    className: "[container-type:size] mx-4 mt-16 mb-4 grid min-h-0 flex-1 place-items-center",
                    children: (0, a.jsx)(c.o, {
                      presentation: "single",
                      previewSrc: e.previewSrc,
                      generationStartedAtMs: e.startedAtMs,
                    }),
                  }),
                ],
              }),
            }),
          errorFallback: ({ onClose: e }) => (0, a.jsx)(u.d, { onClose: e }),
        },
      )
    function g(e) {
      let t,
        n = (0, i.c)(2)
      return (
        n[0] !== e
          ? ((t = (0, a.jsx)(r.lG, { ...e, variant: "image", viewportSized: !0, closeButtonSize: "large" })),
            (n[0] = e),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    n.d(t, {}, { R: m })
  },
  ezqO(e, t, n) {
    var a = n("qmMi"),
      i = n("Ow2S"),
      l = n("OOaz"),
      r = n("OWtl")
    let o = (0, a.bD)(r.u, (e, { scope: t }) => u(t)),
      s = (0, a.i1)(r.u, (e, { get: t }) => t(o, e).conversationId),
      c = (0, a.i1)(r.u, (e, { get: t }) => t(i.sk, e).length)
    function u(e) {
      let t = (0, l.co)()
      return ((0, i.Fu)(e, t, ["picture_v2"]), { conversationId: t })
    }
    n.d(t, {}, { AG: u, Y_: c, cQ: o, wt: s })
  },
  huI0(e, t, n) {
    var a = n("SavH"),
      i = n("ETwP"),
      l = n("rfhJ"),
      r = n("yGJW")
    n.d(
      t,
      {},
      {
        l: function (e, t) {
          ;(0, r.yy)(e, a.XR, {
            metadata: {
              sessionId: (0, l.pn)(),
              generationId: t.transformation_id ?? void 0,
              fileId: t.asset_pointer ?? t.id,
              conversationId: t.conversation_id ?? void 0,
              messageId: t.message_id ?? void 0,
            },
            source: "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_HOME_LIBRARY",
          })
        },
        p: function (e) {
          ;(0, r.yy)(e, i.ZC, { isSharedPostReceiver: !1 })
        },
      },
    )
  },
  RvQi(e, t, n) {
    var a = n("qmMi"),
      i = n("SPnB"),
      l = n("Kwur"),
      r = n("OWtl")
    let o = (0, a.$A)(r.u, ({ get: e }) => {
      let t = e(i.chatGptAuthenticatedAccountId$),
        n = e(i.chatGptAuthenticatedUserId$)
      return {
        enabled: null != t && null != n,
        queryKey: ["chatgpt-images", "history", t, n],
        staleTime: 12e4,
        refetchOnMount: "always",
        initialPageParam: null,
        getNextPageParam: (e) => e.cursor,
        queryFn: async ({ pageParam: e, signal: n }) => {
          let a = await l.Request.safeGet("/my/recent/image_gen", {
            additionalHeaders: null == t ? void 0 : { "ChatGPT-Account-ID": t },
            parameters: { query: { limit: null == e ? 25 : 20, after: e } },
            signal: n,
          })
          return { ...a, items: a.items.filter((e) => !e.is_archived) }
        },
      }
    })
    n.d(t, {}, { i: o })
  },
  Y9EN(e, t, n) {
    var a = n("i5ac"),
      i = n.n(a),
      l = n("qmMi"),
      r = n("OWtl"),
      o = n("Sd8U"),
      s = n("RvQi")
    let c = (0, l.bD)(r.u, (e) => []),
      u = (0, l.z8)("ImagesHistoryScope", { parent: o.PR }),
      d = (0, l.vP)(u, () => null),
      m = (0, l.un)(r.u, ({ get: e }) => {
        let { data: t } = e(s.i)
        return null == t
          ? void 0
          : i()(
              t.pages.flatMap((e) => e.items),
              "id",
            )
      }),
      g = (0, l.un)(r.u, ({ get: e }) => {
        let t = e(m)
        return null == t ? void 0 : new Map(t.map((e) => [e.id, e]))
      }),
      f = (0, l.i1)(r.u, (e, { get: t }) => t(g)?.get(e)),
      p = (0, l.T1)(
        u,
        (e, { signal: t }) => ({
          prompt$: t(""),
          submitting$: t(!1),
          markupActive$: t(!1),
          manualZoomPercent$: t(null),
          decodeFailed$: t(!1),
        }),
        { autoDispose: !0 },
      )
    n.d(t, {}, { G: d, G4: c, O8: f, ng: u, tH: m, xK: p })
  },
  cjh0(e, t, n) {
    var a = n("SGsN"),
      i = n("svjy")
    n.d(
      t,
      {},
      {
        _: function (e, t, n) {
          return (
            !!t?.openSketch(n) ||
            (e
              .get(a.Id)
              .danger(
                e
                  .get(i.g)
                  .formatMessage({
                    id: "images.sketch.unavailable",
                    defaultMessage: "Sketch is unavailable right now",
                    description:
                      "Error toast when an Images sketch card cannot open the drawing editor because the composer is not ready or cannot accept a sketch attachment. The user can select the card again to retry.",
                  }),
                { errorAnalytics: { toastId: "images.sketch.unavailable" } },
              ),
            !1)
          )
        },
      },
    )
  },
  Ac3m(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("oyxz"),
      r = n("JNtf"),
      o = n("mUDD")
    n.d(
      t,
      {},
      {
        d: function (e) {
          let t,
            n,
            s,
            c,
            u = (0, i.c)(8),
            { onClose: d, imageRef: m } = e
          return (
            u[0] !== d ? ((t = (e) => !e && d()), (u[0] = d), (u[1] = t)) : (t = u[1]),
            u[2] !== m
              ? ((n = {
                  onOpenAutoFocus: () => {
                    m?.(null)
                  },
                }),
                (u[2] = m),
                (u[3] = n))
              : (n = u[3]),
            u[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, a.jsx)(o.R4, {
                  children: (0, a.jsx)(o.OO, {
                    children: (0, a.jsx)(o.c7, {
                      title: (0, a.jsx)(r.L3, {
                        children: (0, a.jsx)(l.A, {
                          id: "images.preview.loadError.title",
                          defaultMessage: "Couldn\u2019t open preview",
                        }),
                      }),
                      subtitle: (0, a.jsx)(l.A, {
                        id: "images.preview.loadError.reload",
                        defaultMessage: "Reload and try again",
                      }),
                    }),
                  }),
                })),
                (u[4] = s))
              : (s = u[4]),
            u[5] !== t || u[6] !== n
              ? ((c = (0, a.jsx)(r.lG, { open: !0, onOpenChange: t, size: "compact", contentProps: n, children: s })),
                (u[5] = t),
                (u[6] = n),
                (u[7] = c))
              : (c = u[7]),
            c
          )
        },
      },
    )
  },
  dnuH(e, t, n) {
    n.d(t, { ImageSuggestions: () => eG })
    var a = n("ABep"),
      i = n("QosV"),
      l = n("JkE0"),
      r = n.n(l),
      o = n("qmMi"),
      s = n("zd8w"),
      c = n("v7qY"),
      u = n("Wf1j"),
      d = n("SPnB"),
      m = n("Ow2S"),
      g = n("DrWu"),
      f = n("iLYI"),
      p = n("yhFA"),
      h = n("krwX"),
      v = n("OOaz"),
      x = n("S9hf"),
      y = n("KV28"),
      b = n("Bbed"),
      _ = n("T1PX"),
      A = n("AdZa"),
      j = n("Sd8U"),
      I = n("hZax"),
      w = n("OMIV"),
      M = n("on57"),
      S = n("oyxz"),
      P = n("fDIZ"),
      E = n("JNtf"),
      C = n("rsCP"),
      T = n("PkPj"),
      R = n("khOd"),
      k = n("KkZX"),
      N = n("m5G2"),
      U = n("wCYo"),
      O = n("iqEK"),
      G = n("Ywss"),
      F = n("taWv"),
      L = n("WLtw"),
      z = n("HooH"),
      H = n("J3Mi"),
      D = n("Sm6l"),
      q = n("bVeK"),
      Y = n("wZQ4"),
      W = n("RNul"),
      $ = n("SUhA"),
      B = n("ghCJ"),
      V = n("O8Pw"),
      X = n("tl2n"),
      Q = n("LcBG"),
      K = n("yGJW"),
      J = n("zHp1"),
      Z = n("FVNK"),
      ee = n("huI0"),
      et = n("RvQi"),
      en = n("Y9EN")
    let ea = (0, b._)(() =>
        Promise.all([
          n.e(904485),
          n.e(923712),
          n.e(322496),
          n.e(53010),
          n.e(644312),
          n.e(141674),
          n.e(678690),
          n.e(843292),
          n.e(314719),
          n.e(583579),
          n.e(529755),
          n.e(960583),
          n.e(778901),
          n.e(301030),
          n.e(77282),
          n.e(273709),
          n.e(486890),
          n.e(820714),
          n.e(587936),
          n.e(612928),
          n.e(887074),
          n.e(452048),
          n.e(684598),
          n.e(299268),
          n.e(434505),
          n.e(633339),
          n.e(992177),
          n.e(513017),
          n.e(643651),
          n.e(636373),
          n.e(640683),
          n.e(212545),
          n.e(507080),
          n.e(973904),
          n.e(390843),
          n.e(827769),
          n.e(264443),
          n.e(330283),
          n.e(977544),
          n.e(802912),
          n.e(915524),
          n.e(443657),
          n.e(174249),
          n.e(59073),
          n.e(344408),
          n.e(348403),
          n.e(923720),
          n.e(502665),
          n.e(339953),
        ])
          .then(n.bind(n, "zRhx"))
          .then((e) => e.ImagesHistoryPreview),
      ),
      ei = (0, b._)(() =>
        Promise.all([
          n.e(648165),
          n.e(446194),
          n.e(904485),
          n.e(923712),
          n.e(322496),
          n.e(53010),
          n.e(644312),
          n.e(141674),
          n.e(164460),
          n.e(678690),
          n.e(947437),
          n.e(901175),
          n.e(377960),
          n.e(843292),
          n.e(752862),
          n.e(150547),
          n.e(255843),
          n.e(314719),
          n.e(153694),
          n.e(679632),
          n.e(810979),
          n.e(921241),
          n.e(583579),
          n.e(433661),
          n.e(529755),
          n.e(631141),
          n.e(960583),
          n.e(778901),
          n.e(301030),
          n.e(77282),
          n.e(92253),
          n.e(273709),
          n.e(866709),
          n.e(486890),
          n.e(820714),
          n.e(587936),
          n.e(417402),
          n.e(612928),
          n.e(887074),
          n.e(452048),
          n.e(684598),
          n.e(299268),
          n.e(646093),
          n.e(434505),
          n.e(944124),
          n.e(202588),
          n.e(633339),
          n.e(992177),
          n.e(513017),
          n.e(643651),
          n.e(636373),
          n.e(441809),
          n.e(640683),
          n.e(212545),
          n.e(507080),
          n.e(973904),
          n.e(390843),
          n.e(827769),
          n.e(897450),
          n.e(812107),
          n.e(642253),
          n.e(896482),
          n.e(581568),
          n.e(264443),
          n.e(330283),
          n.e(977544),
          n.e(802912),
          n.e(707980),
          n.e(915524),
          n.e(295103),
          n.e(68367),
          n.e(443657),
          n.e(216721),
          n.e(231620),
          n.e(832130),
          n.e(174249),
          n.e(532972),
          n.e(556252),
          n.e(344408),
          n.e(348403),
          n.e(282332),
          n.e(923720),
          n.e(901387),
        ])
          .then(n.bind(n, "idh7"))
          .then((e) => e.NovaHistoryPreview),
      )
    function el(e) {
      let t,
        n = (0, i.c)(2),
        { showHeader: l } = e,
        r = void 0 === l || l
      return (
        n[0] !== r
          ? ((t = (0, a.jsx)(o.Ui, { scope: en.ng, children: (0, a.jsx)(er, { showHeader: r }) })),
            (n[0] = r),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function er(e) {
      let t,
        n,
        l,
        r,
        c = (0, i.c)(69),
        { showHeader: u } = e,
        m = (0, o.gh)(en.ng),
        g = (0, o.Ul)(d.chatGptAuthenticatedAccountId$),
        f = (0, o.Ul)(d.chatGptAuthenticatedUserId$)
      c[0] !== g || c[1] !== f ? ((t = JSON.stringify([g, f])), (c[0] = g), (c[1] = f), (c[2] = t)) : (t = c[2])
      let p = t,
        h = (0, o._U)(en.G4, p),
        v = (0, V.Tq)(),
        x = (0, G.Zp)(),
        y = (0, s.useId)(),
        b = (0, o.Ul)(X.$7),
        j = (0, o.Ul)(en.G),
        w = (0, I.Ou)("4161245824")
      c[3] !== w ? ((n = w.get("nova_enabled", !1)), (c[3] = w), (c[4] = n)) : (n = c[4])
      let M = n,
        P = (0, _.I)(M)
      c[5] !== M || c[6] !== h ? ((l = M ? h : []), (c[5] = M), (c[6] = h), (c[7] = l)) : (l = c[7])
      let E = l,
        [C, T] = (0, s.useState)(null),
        R = (0, o.Ul)(en.tH),
        [k, N] = (0, s.useState)(es),
        {
          dataUpdatedAt: F,
          isPending: L,
          isFetching: z,
          error: H,
          refetch: $,
          hasNextPage: B,
          isFetchingNextPage: J,
          isFetchNextPageError: el,
          fetchNextPage: er,
        } = (0, o.Ul)(et.i)
      if (
        c[8] !== p ||
        c[9] !== F ||
        c[10] !== H ||
        c[11] !== er ||
        c[12] !== B ||
        c[13] !== y ||
        c[14] !== R ||
        c[15] !== el ||
        c[16] !== z ||
        c[17] !== J ||
        c[18] !== L ||
        c[19] !== x ||
        c[20] !== M ||
        c[21] !== C ||
        c[22] !== E ||
        c[23] !== P ||
        c[24] !== $ ||
        c[25] !== m ||
        c[26] !== j ||
        c[27] !== u ||
        c[28] !== b ||
        c[29] !== v ||
        c[30] !== k
      ) {
        let e,
          t,
          n,
          i,
          l,
          o,
          g,
          f = R?.filter((e) => k.get(e.id) !== F),
          h = M
            ? (function (e) {
                let t = new Map()
                for (let n of e) {
                  let e = n.conversation_id ? `conversation:${n.conversation_id}` : `image:${n.id}`,
                    a = t.get(e)
                  null == a
                    ? t.set(e, {
                        id: e,
                        cover: n,
                        otherImages: [],
                        count: n.conversation_id ? Math.max(1, n.total_image_count ?? 1) : 1,
                      })
                    : (a.otherImages.push(n),
                      (a.count = Math.max(a.count, n.total_image_count ?? 1, a.otherImages.length + 1)))
                }
                return [...t.values()]
              })(f ?? [])
            : f?.map(eo)
        c[32] !== p || c[33] !== P
          ? ((e = function (e, t) {
              let n = (0, s.createRef)(),
                a = t.closest('[role="tabpanel"]')
              ;(0, A.dl)({
                source: t,
                destination: () => n.current,
                reducedMotion: P || !Z.R.isLoaded(),
                variant: "pending",
                update: () => T({ generation: e, accountKey: p, returnFocusTo: t, fallbackFocusTo: a, loadingRef: n }),
              })
            }),
            (c[32] = p),
            (c[33] = P),
            (c[34] = e))
          : (e = c[34])
        let _ = e,
          I = u ? y : void 0
        ;(c[35] !== y || c[36] !== x || c[37] !== M || c[38] !== m || c[39] !== u || c[40] !== b || c[41] !== v
          ? ((t = u
              ? (0, a.jsxs)("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, a.jsx)("h2", {
                          id: y,
                          className: "text-lg font-semibold",
                          children: M
                            ? (0, a.jsx)(S.A, {
                                id: "image-gen.images-app.your-images.heading",
                                defaultMessage: "Your images",
                              })
                            : (0, a.jsx)(S.A, {
                                id: "image-gen.images-app.my-images.heading",
                                defaultMessage: "My images",
                              }),
                        }),
                        b && !v
                          ? (0, a.jsx)("p", {
                              className: "text-sm text-secondary",
                              children: (0, a.jsx)(S.A, {
                                id: "image-gen.images-app.my-images.library-shortcut.description",
                                defaultMessage: "Find all your images and more in Library",
                              }),
                            })
                          : null,
                      ],
                    }),
                    b
                      ? (0, a.jsxs)(D.$, {
                          color: "outline",
                          onClick: () => {
                            ;((0, K.yy)(m, U.f7, {
                              interactionType: "CHATGPT_IMAGE_HOME_LIBRARY_SHORTCUT_INTERACTION_TYPE_CLICKED",
                            }),
                              x(v ? "/space/files?tab=images" : "/library?tab=images"))
                          },
                          children: [
                            v ? (0, a.jsx)(q.Mpc, {}) : (0, a.jsx)(q.baR, {}),
                            v
                              ? (0, a.jsx)(S.A, {
                                  id: "image-gen.images-app.my-images.library-shortcut.link.label.space",
                                  defaultMessage: "Open Space",
                                })
                              : (0, a.jsx)(S.A, {
                                  id: "image-gen.images-app.my-images.library-shortcut.link.label",
                                  defaultMessage: "Open Library",
                                }),
                          ],
                        })
                      : null,
                  ],
                })
              : null),
            (c[35] = y),
            (c[36] = x),
            (c[37] = M),
            (c[38] = m),
            (c[39] = u),
            (c[40] = b),
            (c[41] = v),
            (c[42] = t))
          : (t = c[42]),
          c[43] !== L || c[44] !== E.length
            ? ((n =
                L && 0 === E.length
                  ? (0, a.jsxs)("div", {
                      className: "flex items-center justify-center gap-2 py-12",
                      role: "status",
                      children: [
                        (0, a.jsx)(W.y, {}),
                        (0, a.jsx)(S.A, { id: "images.history.loading", defaultMessage: "Loading images\u2026" }),
                      ],
                    })
                  : null),
              (c[43] = L),
              (c[44] = E.length),
              (c[45] = n))
            : (n = c[45]))
        let w =
            L || f?.length !== 0 || 0 !== E.length || null != H
              ? null
              : (0, a.jsx)("p", {
                  className: "py-12 text-center text-secondary",
                  children: (0, a.jsx)(S.A, {
                    id: "images.history.empty",
                    defaultMessage: "Images you create with ChatGPT will appear here",
                  }),
                }),
          G =
            E.length > 0 || (f?.length ?? 0) > 0
              ? (0, a.jsx)(Q.bg, {
                  items: [
                    ...E.map((e) => ({
                      id: `pending:${e.conversationId}`,
                      content: (0, a.jsx)(ec, { generation: e, onOpen: _ }),
                    })),
                    ...(h ?? []).map((e) => {
                      let { id: t, cover: n, count: i } = e
                      return {
                        id: t,
                        content: (0, a.jsx)(eu, {
                          image: n,
                          imageCount: i,
                          novaEnabled: M,
                          animatePendingEdit: null == C,
                          onOpen: (e, t) => {
                            ;((0, ee.l)(m, n),
                              M &&
                              n.conversation_id &&
                              (null != t || (!n.output_blocked && null != (0, O.V2)(n.asset_pointer ?? "")))
                                ? T({ image: n, pendingEdit: t, returnFocusTo: e })
                                : m.set(en.G, n.id))
                          },
                          onUnavailable: () => N((e) => new Map(e).set(n.id, F)),
                        }),
                      }
                    }),
                  ],
                })
              : null
        ;(c[46] !== H ||
        c[47] !== er ||
        c[48] !== B ||
        c[49] !== el ||
        c[50] !== z ||
        c[51] !== J ||
        c[52] !== L ||
        c[53] !== $
          ? ((i =
              null != H
                ? (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-12",
                    role: "alert",
                    children: [
                      (0, a.jsx)(S.A, { id: "images.history.loadFailed", defaultMessage: "Could not load images" }),
                      (0, a.jsx)(D.$, {
                        disabled: z,
                        onClick: () => void (el ? er() : $()),
                        children: (0, a.jsx)(S.A, { id: "images.history.retry", defaultMessage: "Try again" }),
                      }),
                    ],
                  })
                : (0, a.jsx)(Y.D, {
                    hasNextPage: B && !L && !z,
                    isFetchingNextPage: J,
                    onLoadNextPage: () => void er(),
                  })),
            (c[46] = H),
            (c[47] = er),
            (c[48] = B),
            (c[49] = el),
            (c[50] = z),
            (c[51] = J),
            (c[52] = L),
            (c[53] = $),
            (c[54] = i))
          : (i = c[54]),
          c[55] !== G || c[56] !== i || c[57] !== I || c[58] !== t || c[59] !== n || c[60] !== w
            ? ((l = (0, a.jsxs)("section", {
                className: "flex min-w-0 flex-col gap-4 select-none",
                "aria-labelledby": I,
                children: [t, n, w, G, i],
              })),
              (c[55] = G),
              (c[56] = i),
              (c[57] = I),
              (c[58] = t),
              (c[59] = n),
              (c[60] = w),
              (c[61] = l))
            : (l = c[61]),
          c[62] !== M || c[63] !== C || c[64] !== m
            ? ((o =
                M && null != C && "generation" in C
                  ? (0, a.jsx)(
                      Z.R,
                      {
                        accountKey: C.accountKey,
                        generation: C.generation,
                        loadingTransition: { tile: C.returnFocusTo, loadingRef: C.loadingRef },
                        isCurrent: () =>
                          JSON.stringify([
                            m.get(d.chatGptAuthenticatedAccountId$),
                            m.get(d.chatGptAuthenticatedUserId$),
                          ]) === C.accountKey,
                        onClose: () => T(null),
                        onCloseAutoFocus: () => {
                          let e = C.returnFocusTo.isConnected ? C.returnFocusTo : C.fallbackFocusTo
                          e?.focus({ preventScroll: !0 })
                        },
                      },
                      C.generation.conversationId,
                    )
                  : null),
              (c[62] = M),
              (c[63] = C),
              (c[64] = m),
              (c[65] = o))
            : (o = c[65]),
          c[66] !== M || c[67] !== C
            ? ((g =
                M && null != C && "image" in C
                  ? (0, a.jsx)(ei, {
                      image: C.image,
                      pendingEdit: C.pendingEdit,
                      onClose: () => T(null),
                      returnFocusTo: C.returnFocusTo,
                    })
                  : null),
              (c[66] = M),
              (c[67] = C),
              (c[68] = g))
            : (g = c[68]),
          (r = (0, a.jsxs)(a.Fragment, {
            children: [
              l,
              o,
              g,
              null == C && null != j && f?.some((e) => e.id === j) ? (0, a.jsx)(ea, { imageId: j }, j) : null,
            ],
          })),
          (c[8] = p),
          (c[9] = F),
          (c[10] = H),
          (c[11] = er),
          (c[12] = B),
          (c[13] = y),
          (c[14] = R),
          (c[15] = el),
          (c[16] = z),
          (c[17] = J),
          (c[18] = L),
          (c[19] = x),
          (c[20] = M),
          (c[21] = C),
          (c[22] = E),
          (c[23] = P),
          (c[24] = $),
          (c[25] = m),
          (c[26] = j),
          (c[27] = u),
          (c[28] = b),
          (c[29] = v),
          (c[30] = k),
          (c[31] = r))
      } else r = c[31]
      return r
    }
    function eo(e) {
      return { id: e.id, cover: e, count: 1 }
    }
    function es() {
      return new Map()
    }
    function ec(e) {
      let t,
        n,
        l,
        r,
        s,
        c = (0, i.c)(15),
        { generation: d, onOpen: m } = e,
        g = (0, u.A)(),
        f = (0, o._U)(H.T4, d.conversationId)
      ;(c[0] !== g
        ? ((t = g.formatMessage({ id: "images.history.openGenerating", defaultMessage: "Open image being created" })),
          (c[0] = g),
          (c[1] = t))
        : (t = c[1]),
        c[2] !== d || c[3] !== m
          ? ((n = (e) => m(d, e.currentTarget)), (c[2] = d), (c[3] = m), (c[4] = n))
          : (n = c[4]))
      let p = d.previewSrc,
        h = null == f ? d.startedAtMs : void 0
      return (
        c[5] !== g
          ? ((l = g.formatMessage({ id: "images.history.generating", defaultMessage: "Creating image\u2026" })),
            (c[5] = g),
            (c[6] = l))
          : (l = c[6]),
        c[7] !== d.previewSrc || c[8] !== h || c[9] !== l
          ? ((r = (0, a.jsx)(B.o, {
              presentation: "fill",
              previewSrc: p,
              progressPlacement: "bottom",
              generationStartedAtMs: h,
              ariaLabel: l,
            })),
            (c[7] = d.previewSrc),
            (c[8] = h),
            (c[9] = l),
            (c[10] = r))
          : (r = c[10]),
        c[11] !== t || c[12] !== n || c[13] !== r
          ? ((s = (0, a.jsx)("button", {
              type: "button",
              className:
                "relative block aspect-square w-full cursor-interaction overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "aria-label": t,
              onClick: n,
              children: r,
            })),
            (c[11] = t),
            (c[12] = n),
            (c[13] = r),
            (c[14] = s))
          : (s = c[14]),
        s
      )
    }
    function eu(e) {
      let t,
        n,
        l,
        r,
        c,
        d,
        m,
        g = (0, i.c)(29),
        { image: f, imageCount: p, novaEnabled: h, animatePendingEdit: x, onOpen: y, onUnavailable: b } = e,
        _ = (0, u.A)(),
        A = (0, s.useId)()
      g[0] !== f.conversation_id || g[1] !== h
        ? ((t = h && f.conversation_id ? (0, v.q3)(f.conversation_id) : null),
          (g[0] = f.conversation_id),
          (g[1] = h),
          (g[2] = t))
        : (t = g[2])
      let j = t,
        I = (0, o._U)(null == j ? null : z.tN, j),
        w = I?.history
      g[3] !== f.title || g[4] !== _
        ? ((n = f.title ?? _.formatMessage({ id: "images.history.imageTitle", defaultMessage: "Generated image" })),
          (g[3] = f.title),
          (g[4] = _),
          (g[5] = n))
        : (n = g[5])
      let M = n,
        P =
          h && Number.isFinite(f.width) && Number.isFinite(f.height) && f.width > 0 && f.height > 0
            ? f.width / f.height
            : 1,
        E = null != w && null != j
      g[6] !== P ? ((l = { aspectRatio: P }), (g[6] = P), (g[7] = l)) : (l = g[7])
      let C = E ? A : void 0
      return (
        g[8] !== y || g[9] !== w
          ? ((r = (e) => y(e.currentTarget, w)), (g[8] = y), (g[9] = w), (g[10] = r))
          : (r = g[10]),
        g[11] !== x || g[12] !== j || g[13] !== f || g[14] !== E || g[15] !== b || g[16] !== A || g[17] !== w
          ? ((c = E
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(ed, { conversationId: j, edit: w, isAnimating: x }),
                    (0, a.jsx)("span", {
                      id: A,
                      className: "sr-only",
                      children: (0, a.jsx)(S.A, {
                        id: "images.history.editPending",
                        defaultMessage: "Editing image\u2026",
                      }),
                    }),
                  ],
                })
              : (0, a.jsx)(em, { image: f, onUnavailable: b })),
            (g[11] = x),
            (g[12] = j),
            (g[13] = f),
            (g[14] = E),
            (g[15] = b),
            (g[16] = A),
            (g[17] = w),
            (g[18] = c))
          : (c = g[18]),
        g[19] !== p || g[20] !== E
          ? ((d =
              !E && p > 1
                ? (0, a.jsx)("span", {
                    className:
                      "absolute right-2 bottom-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-default bg-surface px-1 text-xs text-secondary",
                    "aria-hidden": !0,
                    children: (0, a.jsx)(S.A, {
                      id: "images.history.moreImages",
                      defaultMessage: "+{count}",
                      values: { count: p - 1 },
                    }),
                  })
                : null),
            (g[19] = p),
            (g[20] = E),
            (g[21] = d))
          : (d = g[21]),
        g[22] !== l || g[23] !== C || g[24] !== r || g[25] !== c || g[26] !== d || g[27] !== M
          ? ((m = (0, a.jsxs)("button", {
              type: "button",
              className:
                "relative block w-full cursor-interaction overflow-hidden rounded-xl bg-surface-secondary text-start outline-none focus-visible:ring-2 focus-visible:ring-ring",
              style: l,
              "aria-label": M,
              "aria-describedby": C,
              onClick: r,
              children: [c, d],
            })),
            (g[22] = l),
            (g[23] = C),
            (g[24] = r),
            (g[25] = c),
            (g[26] = d),
            (g[27] = M),
            (g[28] = m))
          : (m = g[28]),
        m
      )
    }
    function ed(e) {
      let t,
        n,
        l,
        r = (0, i.c)(9),
        { conversationId: o, edit: s, isAnimating: c } = e,
        u = (0, I.Ou)("4161245824"),
        { sourceImage: d } = s,
        m = d.src ?? d.previewSrc ?? ""
      ;(r[0] !== o ? ((t = (0, F.Qt)(o)), (r[0] = o), (r[1] = t)) : (t = r[1]),
        r[2] !== m || r[3] !== t
          ? ((n = { src: m, conversationId: null, imageAssetResolver: t, shouldLoadFileDataUrl: !1 }),
            (r[2] = m),
            (r[3] = t),
            (r[4] = n))
          : (n = r[4]))
      let { previewSrc: g } = (0, $.D)(n),
        f = g ?? void 0,
        p = u.get("image_overlay_editing_enabled", !1) ? s.startedAtMs : void 0
      return (
        r[5] !== c || r[6] !== f || r[7] !== p
          ? ((l = (0, a.jsx)(B.o, {
              presentation: "fill",
              progressPlacement: "bottom",
              previewSrc: f,
              isAnimating: c,
              generationStartedAtMs: p,
            })),
            (r[5] = c),
            (r[6] = f),
            (r[7] = p),
            (r[8] = l))
          : (l = r[8]),
        l
      )
    }
    function em(e) {
      let t,
        n,
        l,
        r,
        c = (0, i.c)(16),
        { image: u, onUnavailable: m } = e,
        g = (0, o.Ul)(d.chatGptAuthenticatedAccountId$),
        f = (0, o.Ul)(d.chatGptAuthenticatedUserId$),
        p = g ?? "",
        h = f ?? ""
      c[0] !== p || c[1] !== h
        ? ((t = { cacheKey: ["images-history-thumbnail", p, h], resolveAsset: eg, useDownloadUrlAsImageSrc: !0 }),
          (c[0] = p),
          (c[1] = h),
          (c[2] = t))
        : (t = c[2])
      let {
          src: v,
          isError: x,
          deleted: y,
        } = (0, J.vM)(u.output_blocked ? "" : (u.encodings?.thumbnail?.path ?? u.url), t),
        b = (0, s.useEffectEvent)(m)
      return (
        c[3] !== y || c[4] !== u.output_blocked || c[5] !== x || c[6] !== b
          ? ((n = () => {
              !u.output_blocked && (x || null != y) && b()
            }),
            (c[3] = y),
            (c[4] = u.output_blocked),
            (c[5] = x),
            (c[6] = b),
            (c[7] = n))
          : (n = c[7]),
        c[8] !== y || c[9] !== u.output_blocked || c[10] !== x
          ? ((l = [y, u.output_blocked, x]), (c[8] = y), (c[9] = u.output_blocked), (c[10] = x), (c[11] = l))
          : (l = c[11]),
        (0, s.useEffect)(n, l),
        c[12] !== u.output_blocked || c[13] !== m || c[14] !== v
          ? ((r =
              null == v || u.output_blocked
                ? (0, a.jsx)("div", {
                    className: "flex h-full w-full items-center justify-center text-secondary",
                    children: (0, a.jsx)(q.pYT, {}),
                  })
                : (0, a.jsx)("img", {
                    className: "h-full w-full object-cover",
                    src: v,
                    alt: "",
                    loading: "lazy",
                    decoding: "async",
                    onError: m,
                  })),
            (c[12] = u.output_blocked),
            (c[13] = m),
            (c[14] = v),
            (c[15] = r))
          : (r = c[15]),
        r
      )
    }
    async function eg(e) {
      return { kind: "available", ...(0, L.LX)({ download_url: e }) }
    }
    function ef(e) {
      let t,
        n,
        l,
        r,
        c,
        u,
        d,
        m,
        g = (0, i.c)(25),
        {
          composer: f,
          createCanvas: p,
          prompts: h,
          enableMyImagesTab: v,
          novaEnabled: x,
          referencePicker: y,
          scrollContainerRef: b,
          dismissReferencePicker: _,
        } = e,
        A = void 0 !== v && v,
        j = (0, o.Ul)(R.GB),
        [I, w] = (0, s.useState)(0),
        M = null != y,
        P = void 0 !== x && x ? "px-6" : void 0,
        E = j ? "inline" : "page"
      return (
        g[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(S.A, { id: "images.page.title", defaultMessage: "Images" })), (g[0] = t))
          : (t = g[0]),
        g[1] !== I ? ((n = { paddingBottom: I }), (g[1] = I), (g[2] = n)) : (n = g[2]),
        g[3] !== A ? ((l = A ? null : (0, a.jsx)(el, {})), (g[3] = A), (g[4] = l)) : (l = g[4]),
        g[5] !== h || g[6] !== n || g[7] !== l
          ? ((r = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-8", style: n, children: [h, l] })),
            (g[5] = h),
            (g[6] = n),
            (g[7] = l),
            (g[8] = r))
          : (r = g[8]),
        g[9] !== b || g[10] !== P || g[11] !== E || g[12] !== r
          ? ((c = (0, a.jsx)(T.Ql, {
              contentWidth: "extraWide",
              horizontalPaddingClassName: P,
              headerPlacement: E,
              scrollContainerRef: b,
              title: t,
              headerVariant: "compact",
              animateContentLayout: !1,
              children: r,
            })),
            (g[9] = b),
            (g[10] = P),
            (g[11] = E),
            (g[12] = r),
            (g[13] = c))
          : (c = g[13]),
        g[14] !== c || g[15] !== M
          ? ((u = (0, a.jsx)("div", { className: "contents", inert: M, children: c })),
            (g[14] = c),
            (g[15] = M),
            (g[16] = u))
          : (u = g[16]),
        g[17] !== f || g[18] !== p || g[19] !== _ || g[20] !== y
          ? ((d =
              p?.(f) ??
              (0, a.jsx)(ep, { composer: f, referencePicker: y, dismissReferencePicker: _, onHeightChange: w })),
            (g[17] = f),
            (g[18] = p),
            (g[19] = _),
            (g[20] = y),
            (g[21] = d))
          : (d = g[21]),
        g[22] !== u || g[23] !== d
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [u, d] })), (g[22] = u), (g[23] = d), (g[24] = m))
          : (m = g[24]),
        m
      )
    }
    function ep(e) {
      let t,
        n,
        l,
        r,
        o,
        s,
        c,
        u,
        d,
        m,
        g,
        f = (0, i.c)(29),
        { composer: p, referencePicker: h, dismissReferencePicker: v, onHeightChange: x } = e
      f[0] !== v || f[1] !== h
        ? ((t =
            null != h
              ? (0, a.jsx)(E.Xi, { position: "absolute", variant: "form", onClick: v, "aria-hidden": !0 })
              : null),
          (f[0] = v),
          (f[1] = h),
          (f[2] = t))
        : (t = f[2])
      let y = null != h ? "z-50" : "z-10"
      ;(f[3] !== y
        ? ((n = (0, M.A)("pointer-events-none absolute inset-x-0 bottom-0 flex max-h-full flex-col", y)),
          (f[3] = y),
          (f[4] = n))
        : (n = f[4]),
        f[5] !== v || f[6] !== h
          ? ((l = (e) => {
              null == h || "Escape" !== e.key || e.defaultPrevented || (e.preventDefault(), v())
            }),
            (f[5] = v),
            (f[6] = h),
            (f[7] = l))
          : (l = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, M.A)(k.Aj, "relative z-10 flex min-h-0 flex-col *:pointer-events-auto extension:px-2")),
            (f[8] = r))
          : (r = f[8]),
        f[9] !== h
          ? ((o =
              null != h
                ? (0, a.jsx)(C.kW, {
                    className: "mb-4 min-h-0 overflow-y-auto p-4",
                    radius: "composer",
                    variant: "island",
                    children: h,
                  })
                : null),
            (f[9] = h),
            (f[10] = o))
          : (o = f[10]),
        f[11] !== x
          ? ((s = (e) =>
              (0, N.J)({
                target: e,
                axis: "height",
                onChange: (e) => {
                  let { height: t } = e
                  return x(t)
                },
              })),
            (f[11] = x),
            (f[12] = s))
          : (s = f[12]))
      let b = null != h ? v : null
      return (
        f[13] !== p || f[14] !== b
          ? ((c = (0, a.jsx)(P.H, { value: b, children: p })), (f[13] = p), (f[14] = b), (f[15] = c))
          : (c = f[15]),
        f[16] !== s || f[17] !== c
          ? ((u = (0, a.jsx)("div", {
              ref: s,
              className: "shrink-0 pb-(--thread-composer-bottom-inset)",
              children: c,
            })),
            (f[16] = s),
            (f[17] = c),
            (f[18] = u))
          : (u = f[18]),
        f[19] !== u || f[20] !== o
          ? ((d = (0, a.jsxs)("div", { className: r, children: [o, u] })), (f[19] = u), (f[20] = o), (f[21] = d))
          : (d = f[21]),
        f[22] !== d || f[23] !== n || f[24] !== l
          ? ((m = (0, a.jsx)("div", { className: n, role: "group", onKeyDown: l, children: d })),
            (f[22] = d),
            (f[23] = n),
            (f[24] = l),
            (f[25] = m))
          : (m = f[25]),
        f[26] !== t || f[27] !== m
          ? ((g = (0, a.jsxs)(a.Fragment, { children: [t, m] })), (f[26] = t), (f[27] = m), (f[28] = g))
          : (g = f[28]),
        g
      )
    }
    var eh = n("ezqO"),
      ev = n("kQiD"),
      ex = n("pdPj")
    function ey() {
      let e,
        t,
        n,
        l = (0, i.c)(5),
        r = (0, o.Ul)(ex.l)
      return (
        l[0] !== r ? ((e = r ? (0, a.jsx)(ev.Y, {}) : null), (l[0] = r), (l[1] = e)) : (e = l[1]),
        l[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("div", { className: "pt-4", children: (0, a.jsx)(el, { showHeader: !1 }) })), (l[2] = t))
          : (t = l[2]),
        l[3] !== e
          ? ((n = (0, a.jsxs)("div", { className: "min-w-0", children: [e, t] })), (l[3] = e), (l[4] = n))
          : (n = l[4]),
        n
      )
    }
    var eb = n("IvMu"),
      e_ = n("cjh0"),
      eA = n("SZi8"),
      ej = n("VfAH"),
      eI = n("xqnZ"),
      ew = n("OWtl"),
      eM = n("Ac3m")
    let eS = (0, b._)(
        async () =>
          (await Promise.all([n.e(631141), n.e(992177), n.e(299364), n.e(769550)]).then(n.bind(n, "fTrY")))
            .ImagePromptPreviewDialog,
        { errorFallback: eM.d },
      ),
      eP = (0, b._)(async () => (await n.e(45428).then(n.bind(n, "CJnO"))).NovaImagePromptPreviewDialogView, {
        errorFallback: eM.d,
      })
    function eE(e) {
      let t,
        n = (0, i.c)(2)
      return (n[0] !== e ? ((t = (0, a.jsx)(eP, { ...e })), (n[0] = e), (n[1] = t)) : (t = n[1]), t)
    }
    function eC(e) {
      let t,
        n,
        l,
        r,
        c,
        u,
        d,
        g = (0, i.c)(20),
        f = (0, o.gh)(ew.u),
        [p] = (0, s.useState)(eT),
        h = (0, s.useRef)(!1)
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (g[0] = t)) : (t = g[0])
      let v = (0, s.useRef)(t),
        { conversationId: x, onClose: y } = e
      g[1] !== x || g[2] !== p || g[3] !== f
        ? ((n = function () {
            ;(p.abort(), (0, eA.L9)(f, x), (0, ej.uR)(f, x), (0, m.P5)(f, x))
          }),
          (g[1] = x),
          (g[2] = p),
          (g[3] = f),
          (g[4] = n))
        : (n = g[4])
      let b = n
      return (
        g[5] !== b || g[6] !== x || g[7] !== f
          ? ((l = () => {
              if (h.current) return
              b()
              let e = () => {
                h.current || ((0, o.xN)(f, x), (0, o.st)(f, m.m0, { conversationId: x, conversationOrigin: null }))
              }
              0 === v.current.size ? e() : Promise.allSettled(v.current).then(e)
            }),
            (g[5] = b),
            (g[6] = x),
            (g[7] = f),
            (g[8] = l))
          : (l = g[8]),
        (0, eI.fP)(l, p),
        g[9] !== b || g[10] !== y
          ? ((r = () => {
              ;(h.current || b(), y())
            }),
            (g[9] = b),
            (g[10] = y),
            (g[11] = r))
          : (r = g[11]),
        g[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (e) => {
              ;(v.current.add(e),
                e.then(
                  () => v.current.delete(e),
                  () => v.current.delete(e),
                ))
            }),
            (g[12] = c))
          : (c = g[12]),
        g[13] !== y
          ? ((u = () => {
              ;((h.current = !0), y())
            }),
            (g[13] = y),
            (g[14] = u))
          : (u = g[14]),
        g[15] !== p.signal || g[16] !== e || g[17] !== r || g[18] !== u
          ? ((d = (0, a.jsx)(eS, { ...e, signal: p.signal, onClose: r, onRequestStarted: c, onSubmitAccepted: u })),
            (g[15] = p.signal),
            (g[16] = e),
            (g[17] = r),
            (g[18] = u),
            (g[19] = d))
          : (d = g[19]),
        d
      )
    }
    function eT() {
      return new AbortController()
    }
    var eR = n("X3dz"),
      ek = n("gkw0"),
      eN = n("jpR2"),
      eU = n("Bvpc")
    let eO = (0, b._)(async () => (await n.e(556306).then(n.bind(n, "LBvl"))).ImagePromptDialog)
    function eG(e) {
      let t,
        n,
        l,
        b,
        M,
        S,
        P,
        E,
        C,
        T,
        R,
        k,
        N,
        U,
        O,
        G,
        F,
        L,
        z,
        H,
        D,
        q,
        Y,
        W,
        $ = (0, i.c)(150),
        {
          ref: B,
          layout: V,
          conversationId: X,
          composerController: Q,
          composer: K,
          composerContext: J,
          disabled: Z,
          enableSuggestionsModal: ee,
          excludedPromptId: et,
          isConversationCurrent: en,
          navigation: ea,
          onBeforeSelectPrompt: ei,
          onBeforePrefillPrompt: el,
          onReferenceImageSelected: er,
          onUploadSelectionChange: eo,
          onSubmitPrompt: es,
          onFilesDropped: ec,
          onPreviewOpenChange: eu,
          onGenerationStarted: ed,
          onUseStyle: em,
          promptPresentation: eg,
          surface: ep,
          trackImpressions: ev,
          renderPrompts: ex,
          referencePickerRef: eA,
        } = e
      $[0] !== V ? ((t = void 0 === V ? { kind: "inline" } : V), ($[0] = V), ($[1] = t)) : (t = $[1])
      let ej = t,
        eI = void 0 !== ee && ee,
        ew = void 0 === eg ? "composer" : eg,
        eM = void 0 === ep ? "images" : ep,
        eS = (0, o.gh)(j.PR),
        eP = (0, u.A)(),
        eT = (0, s.useRef)(null),
        eG = "discovery" !== ej.kind
      $[2] !== eG ? ((n = { disableExposureLog: eG }), ($[2] = eG), ($[3] = n)) : (n = $[3])
      let eH = (0, I.Ou)("4161245824", n)
      $[4] !== eH || $[5] !== ej.kind
        ? ((l = "discovery" === ej.kind && eH.get("my_images_tab_enabled", !1)),
          ($[4] = eH),
          ($[5] = ej.kind),
          ($[6] = l))
        : (l = $[6])
      let eD = l
      $[7] !== eH || $[8] !== ej.kind
        ? ((b = "discovery" === ej.kind && eH.get("nova_enabled", !1)), ($[7] = eH), ($[8] = ej.kind), ($[9] = b))
        : (b = $[9])
      let eq = b,
        eY = (0, _.I)(eq),
        eW = (0, o._U)(p.kL, X),
        e$ = (0, o._U)(null == J ? null : x.xX, X),
        eB = (0, s.useRef)(eW),
        [eV, eX] = (0, s.useState)(!1),
        [eQ, eK] = (0, s.useState)(null),
        [eJ, eZ] = (0, s.useState)(null),
        [e1, e0] = (0, s.useState)(null)
      $[10] !== Z || $[11] !== eq || $[12] !== eu || $[13] !== em || $[14] !== e1?.returnFocusTo || $[15] !== eY
        ? ((M = function (e, t) {
            eq &&
              !Z &&
              null != em &&
              (0, A.Vy)({
                source: t,
                reducedMotion: eY,
                variant: "promptDetails",
                open: (n) => {
                  ;(e0({
                    item: e,
                    thumbnail: t,
                    imageRef: n,
                    returnFocusTo: e1?.returnFocusTo ?? document.activeElement,
                    imageAspectRatio:
                      null != t && t.naturalWidth > 0 && t.naturalHeight > 0
                        ? t.naturalWidth / t.naturalHeight
                        : void 0,
                  }),
                    eu?.(!0))
                },
              })
          }),
          ($[10] = Z),
          ($[11] = eq),
          ($[12] = eu),
          ($[13] = em),
          ($[14] = e1?.returnFocusTo),
          ($[15] = eY),
          ($[16] = M))
        : (M = $[16])
      let e2 = M,
        e3 = (0, s.useRef)(null),
        e4 = null == eW ? null : (eW.item.action ?? eW.group.action),
        e5 =
          e4?.input_requirements?.source != null &&
          "prompt_only" !== e4.input_requirements.source &&
          "sketch" !== e4.input_requirements.source &&
          (null != J ? eW?.surface === "composer" : eW?.surface !== "composer") &&
          !eV &&
          ("dialog" !== ew || e4?.strategy === "prefill_composer")
      $[17] !== J ||
      $[18] !== X ||
      $[19] !== eq ||
      $[20] !== ed ||
      $[21] !== eu ||
      $[22] !== eJ?.nova?.returnFocusTo ||
      $[23] !== eY ||
      $[24] !== eS ||
      $[25] !== eM
        ? ((S = function (e, t, n, a) {
            let i = eS.get(d.chatGptAuthenticatedAccountId$),
              l = eS.get(d.chatGptAuthenticatedUserId$)
            if (
              null == i ||
              null == l ||
              (!eq &&
                eS
                  .get(w.M9)
                  ?.getLayer("2724553558")
                  .get("home" === eM && null == J ? "home_enabled" : "enabled", !1) !== !0)
            )
              return !1
            let r = (0, v.co)(),
              o = eS.get(m.ch, X)
            ;(eS.set(m.m0, { conversationId: r, conversationOrigin: null }, o),
              null == J &&
                ("images" === eM && (0, p.zW)(eS, r, e, t, "images"),
                (0, y.Po)(
                  eS,
                  r,
                  {
                    clientConversationId: e3.current ?? X,
                    conversationOrigin: null,
                    gizmoId: null,
                    requestedDefaultModel: o.slug,
                    serverConversationId: null,
                    systemHints: (0, p.oq)(e, "home" === eM ? eS.get(m.yS, X) : void 0),
                  },
                  "image-suggestion",
                )),
              (e3.current = r),
              (eB.current = Symbol()))
            let s = { item: e, group: t, conversationId: r, accountId: i, userId: l, logPromptSent: n, surface: eM }
            if (eq && null != ed) {
              let e = eJ?.nova?.returnFocusTo ?? document.activeElement
              ;(0, A.Vy)({
                source: a,
                reducedMotion: eY,
                variant: "promptDetails",
                open: (t) => {
                  eZ({
                    ...s,
                    nova: {
                      onGenerationStarted: ed,
                      returnFocusTo: e,
                      thumbnail: a,
                      imageRef: t,
                      imageAspectRatio:
                        null != a && a.naturalWidth > 0 && a.naturalHeight > 0
                          ? a.naturalWidth / a.naturalHeight
                          : void 0,
                    },
                  })
                },
              })
            } else eZ(s)
            return (eu?.(!0), !0)
          }),
          ($[17] = J),
          ($[18] = X),
          ($[19] = eq),
          ($[20] = ed),
          ($[21] = eu),
          ($[22] = eJ?.nova?.returnFocusTo),
          ($[23] = eY),
          ($[24] = eS),
          ($[25] = eM),
          ($[26] = S))
        : (S = $[26])
      let e6 = S
      ;($[27] !== e6 ? ((P = () => ({ openPreview: e6 })), ($[27] = e6), ($[28] = P)) : (P = $[28]),
        (0, s.useImperativeHandle)(B, P),
        $[29] !== J ||
        $[30] !== Q ||
        $[31] !== X ||
        $[32] !== el ||
        $[33] !== eo ||
        $[34] !== eS ||
        $[35] !== eW ||
        $[36] !== eM
          ? ((E = function (e, t) {
              if (el?.() === !1) return null
              let n = (0, p.zW)(eS, X, e, t, null == J ? eM : "composer", J?.imageOptionsSurface)
              return null == n
                ? null
                : (eX(!1),
                  Q.setPromptText(
                    "home" === eM || null != J
                      ? (0, eR.D)(
                          Q.getPersistedText(),
                          e.prompt_text,
                          eW?.item.prompt_text,
                          null == J || n.baseSystemHints.includes("picture_v2") ? "prepend" : "append",
                        )
                      : e.prompt_text,
                  ),
                  eo?.(n),
                  n)
            }),
            ($[29] = J),
            ($[30] = Q),
            ($[31] = X),
            ($[32] = el),
            ($[33] = eo),
            ($[34] = eS),
            ($[35] = eW),
            ($[36] = eM),
            ($[37] = E))
          : (E = $[37]))
      let e7 = E
      $[38] !== Q || $[39] !== ej.kind
        ? ((C = function () {
            ;(Q.focus(), "inline" === ej.kind && Q.view.dom.scrollIntoView({ block: "center", behavior: "auto" }))
          }),
          ($[38] = Q),
          ($[39] = ej.kind),
          ($[40] = C))
        : (C = $[40])
      let e8 = C
      $[41] !== Z || $[42] !== e7
        ? ((T = function (e, t) {
            if (Z) return null
            let n = e7(e, t)
            return ((eB.current = n), (0, c.flushSync)(() => eK(null)), n)
          }),
          ($[41] = Z),
          ($[42] = e7),
          ($[43] = T))
        : (T = $[43])
      let e9 = T
      $[44] !== K || $[45] !== Q || $[46] !== e9 || $[47] !== es
        ? ((R = function (e, t, n) {
            null != e9(e, t) && (null != es ? es(n) : K?.submitPrompt(Q.getText(), { fileUploadIds: n }))
          }),
          ($[44] = K),
          ($[45] = Q),
          ($[46] = e9),
          ($[47] = es),
          ($[48] = R))
        : (R = $[48])
      let te = R
      $[49] !== K || $[50] !== Q
        ? ((k = function () {
            ;(K?.cancelImageReferenceSubmission?.(), eX(!0), Q.focus())
          }),
          ($[49] = K),
          ($[50] = Q),
          ($[51] = k))
        : (k = $[51])
      let tt = k
      $[52] !== K ||
      $[53] !== Q ||
      $[54] !== X ||
      $[55] !== Z ||
      $[56] !== tt ||
      $[57] !== er ||
      $[58] !== eA ||
      $[59] !== eS ||
      $[60] !== eW ||
      $[61] !== e5
        ? ((N = e5
            ? (0, a.jsx)("div", {
                ref: eA,
                className: "mx-auto w-full max-w-3xl",
                children: (0, a.jsx)(eU.h, {
                  conversationId: X,
                  disabled: Z,
                  onBack: tt,
                  uploadDisabled: !K?.canOpenImagePicker,
                  onUpload: () => K?.openFileDialog(!0),
                  onRecentImageSelected: () => {
                    if (eB.current === eW) {
                      if (null != er) return void er()
                      ;(0, p.E2)(eS, X, Q, eW, { composer: K })
                    }
                  },
                }),
              })
            : null),
          ($[52] = K),
          ($[53] = Q),
          ($[54] = X),
          ($[55] = Z),
          ($[56] = tt),
          ($[57] = er),
          ($[58] = eA),
          ($[59] = eS),
          ($[60] = eW),
          ($[61] = e5),
          ($[62] = N))
        : (N = $[62])
      let tn = N,
        ta = eq && "discovery" === ej.kind ? ej.createAction : void 0,
        ti = "inline" === ej.kind && e5
      $[63] !== eD ? ((U = eD ? (0, a.jsx)(ey, {}) : void 0), ($[63] = eD), ($[64] = U)) : (U = $[64])
      let tl = eq ? eT : void 0
      $[65] !== K || $[66] !== Z || $[67] !== eM
        ? ((O =
            "home" === eM
              ? (0, a.jsx)(eN.U, {
                  disabled: Z || !K?.canOpenImagePicker,
                  layout: "grid",
                  onUpload: () => K?.openFileDialog(!0),
                })
              : void 0),
          ($[65] = K),
          ($[66] = Z),
          ($[67] = eM),
          ($[68] = O))
        : (O = $[68])
      let tr = null != e1 || null != eJ
      ;($[69] !== eP || $[70] !== e2
        ? ((G = (e, t, n) =>
            e2(
              {
                id: e.id,
                title:
                  e.title?.trim() ||
                  e.subject?.trim() ||
                  eP.formatMessage({ id: "images.discover.untitled", defaultMessage: "Image inspiration" }),
                prompt: e.visual_style?.trim() || e.caption?.trim() || e.subject?.trim() || "",
                imageUrl: e.image_url,
                imageAlt: e.caption ?? void 0,
                feedAnalytics: n,
              },
              t,
            )),
          ($[69] = eP),
          ($[70] = e2),
          ($[71] = G))
        : (G = $[71]),
        $[72] !== K ||
        $[73] !== J ||
        $[74] !== Q.view ||
        $[75] !== X ||
        $[76] !== Z ||
        $[77] !== eI ||
        $[78] !== e8 ||
        $[79] !== en ||
        $[80] !== eq ||
        $[81] !== eo ||
        $[82] !== e6 ||
        $[83] !== e7 ||
        $[84] !== ew ||
        $[85] !== eS ||
        $[86] !== te ||
        $[87] !== eM
          ? ((F = (e, t, n) => {
              if (Z) return
              let a = e.action ?? t.action
              if (a.input_requirements?.source === "sketch") {
                let n = "dialog" === ew && "auto_send" === a.strategy,
                  i = eS.get(d.chatGptAuthenticatedAccountId$),
                  l = eS.get(d.chatGptAuthenticatedUserId$),
                  r = Symbol(),
                  o = Q.view.state.doc,
                  s = eS.get(p.kL, X),
                  c = () =>
                    !Q.view.isDestroyed &&
                    eS.get(d.chatGptAuthenticatedAccountId$) === i &&
                    eS.get(d.chatGptAuthenticatedUserId$) === l &&
                    eS.get(p.kL, X) === s &&
                    eB.current === r &&
                    (en?.() ??
                      ("home" === eM
                        ? eS.get(f.homeConversationId$) === X
                        : eS.get(eh.cQ, JSON.stringify([i, l])).conversationId === X))
                ;(0, e_._)(eS, K, {
                  isRequestCurrent: c,
                  onSave: n
                    ? void 0
                    : () => {
                        c() &&
                          Q.view.state.doc === o &&
                          ((s = e7(e, t)),
                          requestAnimationFrame(() => {
                            c() && K?.isSketchOpen() === !1 && e8()
                          }))
                      },
                  onUploadComplete: n
                    ? (n) => {
                        c() && Q.view.state.doc === o && te(e, t, [n])
                      }
                    : void 0,
                }) && ((eB.current = r), eo?.(null))
                return
              }
              if (
                (eq && e6(e, t, !1, n)) ||
                ((eI || ("home" === eM && "composer" === ew)) &&
                  e6(e, t, "dialog" === ew && "auto_send" === a.strategy))
              )
                return
              if (
                "dialog" === ew ||
                (("images" === eM || null != J) &&
                  "auto_send" === a.strategy &&
                  a.input_requirements?.source === "styles")
              ) {
                if ("auto_send" === a.strategy) {
                  let n = eS.get(m.sk, X).filter(g.O6).map(ez)
                  return eS.get(w.M9)?.getLayer("3360722522").get("auto_send_with_attachments", !1) && n.length > 0
                    ? void te(e, t, n)
                    : ((eB.current = Symbol()), void eK({ item: e, group: t }))
                }
                if ("prefill_composer" !== a.strategy) return
              }
              let i = e7(e, t)
              null != i && ((eB.current = i), e8())
            }),
            ($[72] = K),
            ($[73] = J),
            ($[74] = Q.view),
            ($[75] = X),
            ($[76] = Z),
            ($[77] = eI),
            ($[78] = e8),
            ($[79] = en),
            ($[80] = eq),
            ($[81] = eo),
            ($[82] = e6),
            ($[83] = e7),
            ($[84] = ew),
            ($[85] = eS),
            ($[86] = te),
            ($[87] = eM),
            ($[88] = F))
          : (F = $[88]),
        $[89] !== Z ||
        $[90] !== et ||
        $[91] !== ea ||
        $[92] !== eq ||
        $[93] !== ei ||
        $[94] !== eM ||
        $[95] !== ta ||
        $[96] !== ti ||
        $[97] !== U ||
        $[98] !== tl ||
        $[99] !== O ||
        $[100] !== tr ||
        $[101] !== G ||
        $[102] !== F ||
        $[103] !== ev
          ? ((L = (0, a.jsx)(ek.Ru, {
              createAction: ta,
              disabled: Z,
              excludedPromptId: et,
              hidden: ti,
              myImages: U,
              navigation: ea,
              novaEnabled: eq,
              scrollContainerRef: tl,
              surface: eM,
              trackImpressions: ev,
              uploadCard: O,
              onBeforeSelectPrompt: ei,
              previewOpen: tr,
              onSelectDiscovery: G,
              onSelectPrompt: F,
            })),
            ($[89] = Z),
            ($[90] = et),
            ($[91] = ea),
            ($[92] = eq),
            ($[93] = ei),
            ($[94] = eM),
            ($[95] = ta),
            ($[96] = ti),
            ($[97] = U),
            ($[98] = tl),
            ($[99] = O),
            ($[100] = tr),
            ($[101] = G),
            ($[102] = F),
            ($[103] = ev),
            ($[104] = L))
          : (L = $[104]))
      let to = L
      $[105] !== to || $[106] !== ex
        ? ((z = ex?.(to.props) ?? to), ($[105] = to), ($[106] = ex), ($[107] = z))
        : (z = $[107])
      let ts = z
      return (
        $[108] !== Z || $[109] !== eu || $[110] !== em || $[111] !== e1
          ? ((H =
              null != e1
                ? (0, a.jsx)(
                    eE,
                    {
                      ...e1,
                      disabled: Z,
                      onUseStyle: () => em?.(e1.item),
                      onClose: () => {
                        ;(e0(null), eu?.(!1))
                      },
                    },
                    e1.item.id,
                  )
                : null),
            ($[108] = Z),
            ($[109] = eu),
            ($[110] = em),
            ($[111] = e1),
            ($[112] = H))
          : (H = $[112]),
        $[113] !== K ||
        $[114] !== J ||
        $[115] !== Q ||
        $[116] !== e9 ||
        $[117] !== X ||
        $[118] !== Z ||
        $[119] !== e$ ||
        $[120] !== en ||
        $[121] !== eu ||
        $[122] !== e6 ||
        $[123] !== e7 ||
        $[124] !== eJ ||
        $[125] !== eS
          ? ((D =
              null != eJ
                ? (0, a.jsx)(
                    eC,
                    {
                      ...eJ,
                      disabled: Z,
                      nova:
                        null == eJ.nova
                          ? void 0
                          : {
                              ...eJ.nova,
                              relatedPrompts: (0, a.jsx)(eb.S, {
                                items:
                                  eJ.group.items
                                    ?.filter(
                                      (e) =>
                                        e.id !== eJ.item.id &&
                                        e.section === eJ.item.section &&
                                        (e.action ?? eJ.group.action)?.input_requirements?.source !== "sketch",
                                    )
                                    .map((e, t) => ({
                                      id: e.id,
                                      content: (0, a.jsx)(ek.z1, {
                                        item: e,
                                        group: eJ.group,
                                        presentation: "image_card",
                                        preserveAspectRatio: !0,
                                        showHoverTitle: !0,
                                        masonryCropIndex: t,
                                        visible: !0,
                                        onSelect: (t) => e6(e, eJ.group, !1, t),
                                      }),
                                    })) ?? [],
                              }),
                            },
                      sourceComposer:
                        null == J && "home" !== eJ.surface
                          ? void 0
                          : {
                              conversationId: X,
                              fileUploadLimitsQueryKey: J?.fileUploadLimitsQueryKey,
                              isCurrent: () =>
                                !Q.view.isDestroyed &&
                                (null != J || eS.get(f.homeConversationId$) === X) &&
                                en?.() !== !1,
                              aspectRatio: null == J ? void 0 : ((0, x.zU)(J.config, e$).aspectRatio ?? "auto"),
                              aspectRatios:
                                J?.config.controls.includes("aspect_ratio") === !1 ? [] : J?.config.aspect_ratios,
                              submit: (e, t, n) => {
                                if (
                                  Z ||
                                  null == K ||
                                  (null == J ? e7({ ...eJ.item, prompt_text: n }, eJ.group) : e9(eJ.item, eJ.group)) ==
                                    null
                                )
                                  return
                                ;(0, c.flushSync)(() => {
                                  ;((0, o.Y)(eS, () => {
                                    if (null != J) {
                                      let t = eS.get(x.xX, X),
                                        n = e ?? t?.aspectRatio
                                      ;(0, x.sT)(eS, X, {
                                        aspectRatio: J.config.aspect_ratios.find((e) => e === n) ?? null,
                                        imageCount: t?.imageCount ?? null,
                                        style: t?.style ?? null,
                                      })
                                    }
                                    for (let e of r()(eS.get(m.sk, X), t, "uploadId"))
                                      (0, m.K6)(eS, X, e.uploadId, "chat")
                                    ;(eS.set(m.sk, X, t), eS.set(m.sk, eJ.conversationId, []))
                                  }),
                                    eZ(null),
                                    eu?.(!1))
                                })
                                let a = eS.get(h.aW) ? crypto.randomUUID() : void 0
                                K.submitPrompt(Q.getText(), {
                                  fileUploadIds: t.map(eL),
                                  messageMetadata: null == a ? void 0 : { image_send_uuid: a },
                                }).then((e) => {
                                  !0 === e && null != a && (0, h.Wf)(eS, eJ.item.id, eJ.group.id, t.filter(eF), a)
                                })
                              },
                            },
                      onClose: () => {
                        ;(eZ(null), eu?.(!1))
                      },
                    },
                    eJ.conversationId,
                  )
                : null),
            ($[113] = K),
            ($[114] = J),
            ($[115] = Q),
            ($[116] = e9),
            ($[117] = X),
            ($[118] = Z),
            ($[119] = e$),
            ($[120] = en),
            ($[121] = eu),
            ($[122] = e6),
            ($[123] = e7),
            ($[124] = eJ),
            ($[125] = eS),
            ($[126] = D))
          : (D = $[126]),
        $[127] !== K ||
        $[128] !== Q.eventEmitter ||
        $[129] !== e9 ||
        $[130] !== X ||
        $[131] !== eQ ||
        $[132] !== Z ||
        $[133] !== ec ||
        $[134] !== te
          ? ((q =
              null != eQ
                ? (0, a.jsx)(eO, {
                    title: eQ.item.title,
                    description: eQ.item.description,
                    prompt: eQ.item.prompt_text,
                    promptOnly: (eQ.item.action ?? eQ.group.action).input_requirements?.source === "prompt_only",
                    conversationId: X,
                    disabled: Z,
                    uploadDisabled: !K?.canOpenImagePicker,
                    onClose: () => eK(null),
                    onCreate: () => te(eQ.item, eQ.group, []),
                    onRecentImageSelected: (e) => te(eQ.item, eQ.group, [e]),
                    onFilesSelected:
                      null == ec
                        ? void 0
                        : (e, t) => {
                            null != e9(eQ.item, eQ.group) &&
                              ("paste" === t ? Q.eventEmitter.emit("pasted-images", e) : ec(e))
                          },
                    onUpload: (e) => {
                      K?.openFileDialog(!0, { signal: e, onFilesSelected: () => null != e9(eQ.item, eQ.group) })
                    },
                  })
                : null),
            ($[127] = K),
            ($[128] = Q.eventEmitter),
            ($[129] = e9),
            ($[130] = X),
            ($[131] = eQ),
            ($[132] = Z),
            ($[133] = ec),
            ($[134] = te),
            ($[135] = q))
          : (q = $[135]),
        $[136] !== tt ||
        $[137] !== eD ||
        $[138] !== ej.composer ||
        $[139] !== ej.createCanvas ||
        $[140] !== ej.kind ||
        $[141] !== eq ||
        $[142] !== ts ||
        $[143] !== tn
          ? ((Y =
              "discovery" === ej.kind
                ? (0, a.jsx)(ef, {
                    composer: ej.composer,
                    createCanvas: eq ? ej.createCanvas : void 0,
                    prompts: ts,
                    enableMyImagesTab: eD,
                    novaEnabled: eq,
                    scrollContainerRef: eq ? eT : void 0,
                    referencePicker: tn,
                    dismissReferencePicker: tt,
                  })
                : (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-8", children: [tn, ts] })),
            ($[136] = tt),
            ($[137] = eD),
            ($[138] = ej.composer),
            ($[139] = ej.createCanvas),
            ($[140] = ej.kind),
            ($[141] = eq),
            ($[142] = ts),
            ($[143] = tn),
            ($[144] = Y))
          : (Y = $[144]),
        $[145] !== H || $[146] !== D || $[147] !== q || $[148] !== Y
          ? ((W = (0, a.jsxs)(a.Fragment, { children: [H, D, q, Y] })),
            ($[145] = H),
            ($[146] = D),
            ($[147] = q),
            ($[148] = Y),
            ($[149] = W))
          : (W = $[149]),
        W
      )
    }
    function eF(e) {
      return "ready" === e.status
    }
    function eL(e) {
      return e.uploadId
    }
    function ez(e) {
      let { uploadId: t } = e
      return t
    }
  },
}
//# sourceMappingURL=570369.7bf6f653b0.js.map
