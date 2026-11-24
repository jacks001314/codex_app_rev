export const __rspack_esm_ids = [461009]
export const __webpack_modules__ = {
  cZk2(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("zd8w"),
      s = a("oyxz"),
      l = a("JNtf"),
      o = a("mUDD")
    a.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            a,
            c,
            d,
            u = (0, n.c)(17),
            {
              open: p,
              onOpenChange: g,
              onCloseAutoFocus: m,
              title: f,
              failed: h,
              embedded: y,
              size: v,
              children: b,
              dialogComponent: x,
              restoreFocusOnUnmount: _,
            } = e,
            w = void 0 !== h && h,
            I = void 0 !== y && y,
            S = void 0 === x ? l.lG : x,
            A = (0, i.useRef)(p)
          ;(u[0] !== p
            ? ((t = () => {
                A.current = p
              }),
              (a = [p]),
              (u[0] = p),
              (u[1] = t),
              (u[2] = a))
            : ((t = u[1]), (a = u[2])),
            (0, i.useLayoutEffect)(t, a))
          let P = I ? "h2" : l.L3
          u[3] !== P || u[4] !== b || u[5] !== w || u[6] !== f
            ? ((c =
                b ??
                (0, r.jsx)(o.R4, {
                  children: (0, r.jsx)(o.OO, {
                    className: "select-none",
                    children: (0, r.jsx)(o.c7, {
                      title: (0, r.jsx)(P, { children: f }),
                      subtitle: w
                        ? (0, r.jsx)(s.A, {
                            id: "codex.dialogLoadState.reload",
                            defaultMessage: "Reload the app and try again",
                          })
                        : void 0,
                    }),
                  }),
                })),
              (u[3] = P),
              (u[4] = b),
              (u[5] = w),
              (u[6] = f),
              (u[7] = c))
            : (c = u[7])
          let C = c
          return (
            u[8] !== S ||
            u[9] !== C ||
            u[10] !== I ||
            u[11] !== m ||
            u[12] !== g ||
            u[13] !== p ||
            u[14] !== _ ||
            u[15] !== v
              ? ((d = I
                  ? C
                  : (0, r.jsx)(S, {
                      open: p,
                      size: v,
                      onOpenChange: (e) => {
                        ;((A.current = e), g(e))
                      },
                      contentProps: {
                        "aria-describedby": void 0,
                        onCloseAutoFocus: (e) => {
                          A.current && !_?.() ? e.preventDefault() : m?.(e)
                        },
                      },
                      children: C,
                    })),
                (u[8] = S),
                (u[9] = C),
                (u[10] = I),
                (u[11] = m),
                (u[12] = g),
                (u[13] = p),
                (u[14] = _),
                (u[15] = v),
                (u[16] = d))
              : (d = u[16]),
            d
          )
        },
      },
    )
  },
  wZQ4(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("zd8w"),
      s = a("RNul")
    function l(e) {
      return e.isIntersecting
    }
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            o,
            c,
            d,
            u = (0, n.c)(20),
            {
              loadingPlaceholder: p,
              hasNextPage: g,
              isFetchingNextPage: m,
              onLoadNextPage: f,
              rootMargin: h,
              rootRef: y,
            } = e,
            v = (0, i.useRef)(null)
          u[0] !== g || u[1] !== m || u[2] !== f
            ? ((t = () => {
                g && !m && f()
              }),
              (u[0] = g),
              (u[1] = m),
              (u[2] = f),
              (u[3] = t))
            : (t = u[3])
          let b = (0, i.useEffectEvent)(t)
          if (
            (u[4] !== g || u[5] !== m || u[6] !== b || u[7] !== h || u[8] !== y
              ? ((a = () => {
                  let e = v.current
                  if (null == e || !g || m) return
                  if ("u" < typeof IntersectionObserver) return void b()
                  let t = new IntersectionObserver(
                    (e) => {
                      e.some(l) && (t.disconnect(), b())
                    },
                    { root: y?.current, rootMargin: h },
                  )
                  return (
                    t.observe(e),
                    () => {
                      t.disconnect()
                    }
                  )
                }),
                (u[4] = g),
                (u[5] = m),
                (u[6] = b),
                (u[7] = h),
                (u[8] = y),
                (u[9] = a))
              : (a = u[9]),
            u[10] !== g || u[11] !== m || u[12] !== h || u[13] !== y
              ? ((o = [g, m, h, y]), (u[10] = g), (u[11] = m), (u[12] = h), (u[13] = y), (u[14] = o))
              : (o = u[14]),
            (0, i.useEffect)(a, o),
            !g && !m)
          )
            return null
          if (!m) {
            let e
            return (
              u[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)("div", { ref: v, className: "min-h-px w-full" })), (u[15] = e))
                : (e = u[15]),
              e
            )
          }
          if (void 0 !== p) {
            let e
            return (
              u[16] !== p
                ? ((e = (0, r.jsx)("div", { ref: v, className: "min-h-px w-full", children: p })),
                  (u[16] = p),
                  (u[17] = e))
                : (e = u[17]),
              e
            )
          }
          u[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, r.jsx)("div", {
                ref: v,
                className: "flex w-full justify-center py-3",
                children: (0, r.jsx)(s.y, { className: "icon-xs text-secondary" }),
              })),
              (u[18] = c))
            : (c = u[18])
          let x = c
          return (
            u[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(r.Fragment, { children: x })] })),
                (u[19] = d))
              : (d = u[19]),
            d
          )
        },
      },
    )
  },
  Eqxm(e, t, a) {
    a.d(
      t,
      {},
      {
        b: function (e) {
          let t = e?.closest(".artifact-preview-deck")
          if (null == e || null == t) return
          let a = () => {
              t.style.removeProperty("--preview-deck-cover-color")
            },
            r = () => {
              let r = e.ownerDocument.createElement("canvas")
              ;((r.width = 1), (r.height = 1))
              let n = r.getContext("2d", { willReadFrequently: !0 })
              if (null != n)
                try {
                  ;((n.imageSmoothingQuality = "high"), n.drawImage(e, 0, 0, 1, 1))
                  let [a, r, i, s] = n.getImageData(0, 0, 1, 1).data
                  s > 0 && t.style.setProperty("--preview-deck-cover-color", `rgb(${a} ${r} ${i})`)
                } catch {
                  a()
                }
            }
          return (
            e.complete && e.naturalWidth > 0 ? r() : e.addEventListener("load", r, { once: !0 }),
            () => {
              ;(e.removeEventListener("load", r), a())
            }
          )
        },
      },
    )
  },
  aYc1(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("X3K1")
    a.d(
      t,
      {},
      {
        i: function () {
          let e,
            t = (0, n.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 overflow-hidden rounded-lg peer-data-[space-image-thumbnail-ready]/progressive-preview:hidden",
                  children: (0, r.jsx)(i.X, { as: "span", size: "fill", variant: "chatgpt-project" }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  LcBG(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      s = a("suct"),
      l = a("iodE"),
      o = a("K45w"),
      c = a("SOml"),
      d = a("K4Cx"),
      u = a("zd8w"),
      p = a("oyxz"),
      g = a("X3K1"),
      m = a("V8uZ"),
      f = a("aYc1"),
      h = a("PArc")
    let y = [
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
    function v(e) {
      let t,
        a = (0, n.c)(3),
        { layout: i, items: s } = e
      return (
        a[0] !== s || a[1] !== i
          ? ((t =
              "uniform" === i
                ? (0, r.jsx)(h.n, { items: s })
                : (0, r.jsx)(b, { items: s, imageMasonry: "image-masonry" === i }, i)),
            (a[0] = s),
            (a[1] = i),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    function b(e) {
      let t,
        a,
        l,
        o,
        c,
        d,
        p,
        g,
        m,
        f,
        h = (0, n.c)(25),
        { items: y, animate: v, imageMasonry: b } = e,
        A = void 0 !== v && v,
        P = void 0 !== b && b,
        C = (0, u.useRef)(null)
      h[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Map()), (h[0] = t)) : (t = h[0])
      let [j, E] = (0, u.useState)(t)
      h[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { columns: 0, width: 0, animate: !1, ids: [], assignments: new Map() }), (h[1] = a))
        : (a = h[1])
      let T = (0, u.useRef)(a)
      h[2] !== y ? ((o = JSON.stringify((l = y.map(I)))), (h[2] = y), (h[3] = l), (h[4] = o)) : ((l = h[3]), (o = h[4]))
      let M = o
      h[5] !== l ? ((c = () => l), (h[5] = l), (h[6] = c)) : (c = h[6])
      let k = (0, u.useEffectEvent)(c)
      ;(h[7] !== A || h[8] !== k || h[9] !== P
        ? ((d = () => {
            let e,
              t = C.current
            if (!t) return
            let a = k(),
              r = new Map(Array.from(t.querySelectorAll(":scope > [data-masonry-item]"), w)),
              n = a.flatMap((e) => r.get(e) ?? []),
              i = () => {
                let e = t.clientWidth
                if (0 === e) return
                let r = getComputedStyle(t),
                  i = parseFloat(r.rowGap),
                  s = T.current,
                  l = P
                    ? Math.max(1, Math.floor((e + i) / (180 + i)))
                    : Number(r.getPropertyValue("--codex-library-masonry-columns")) || 1
                if (P && s.columns !== l)
                  for (let e of (t.style.setProperty("--codex-library-masonry-columns", String(l)), n))
                    Number(e.style.gridColumn) > l && (e.style.gridColumn = "")
                let o = new Map(),
                  c = Array(l).fill(0),
                  d = n.map(_),
                  u = a.findIndex((e, t) => e !== s.ids[t]),
                  p = [],
                  g = (e, t, a) => {
                    ;((p[t] = { id: e, column: a, top: c[a] }), o.set(e, a), (c[a] = c[a] + (d[t] + i)))
                  }
                if (P && s.columns === l) {
                  let e = a.filter((e) => !e.startsWith("loading-") && s.assignments.has(e)),
                    t = new Map(a.map(x))
                  if (s.ids.filter((e) => !e.startsWith("loading-") && t.has(e)).every((t, a) => t === e[a]))
                    for (let [e, a] of s.assignments) {
                      let r = t.get(e)
                      null == r || e.startsWith("loading-") || g(e, r, a)
                    }
                }
                a.forEach((e, t) => {
                  if (o.has(e)) return
                  let a = !P && s.columns === l && (-1 === u || t < u) ? s.assignments.get(e) : void 0
                  g(e, t, a ?? c.indexOf(Math.min(...c)))
                })
                let m = A && s.width === e && s.columns === l && (s.animate || -1 !== u || a.length !== s.ids.length)
                if (
                  ((T.current = { columns: l, width: e, animate: m, ids: a, assignments: o }),
                  (t.style.height = `${Math.max(0, ...c) - (a.length > 0 ? i : 0)}px`),
                  A)
                ) {
                  let t = ((e + i) / l) * ("rtl" === r.direction ? -1 : 1),
                    a = new Map()
                  for (let { id: e, column: r, top: n } of p)
                    a.set(e, { x: r * t, y: n, animate: m && s.assignments.has(e) })
                  E(a)
                  return
                }
                for (let [e, t] of n.entries()) {
                  let { column: a, top: r } = p[e]
                  ;((t.style.gridColumn = `${a + 1}`),
                    (t.style.gridRow = "1"),
                    (t.style.transform = `translateY(${r}px)`))
                }
              },
              s = new ResizeObserver(() => {
                ;(null != e && cancelAnimationFrame(e), (e = requestAnimationFrame(i)))
              })
            for (let e of (s.observe(t), n)) s.observe(e)
            return (
              i(),
              () => {
                ;(s.disconnect(), null != e && cancelAnimationFrame(e))
              }
            )
          }),
          (h[7] = A),
          (h[8] = k),
          (h[9] = P),
          (h[10] = d))
        : (d = h[10]),
        h[11] !== A || h[12] !== P || h[13] !== M
          ? ((p = [M, A, P]), (h[11] = A), (h[12] = P), (h[13] = M), (h[14] = p))
          : (p = h[14]),
        (0, u.useLayoutEffect)(d, p))
      let q =
        !P &&
        "sm:gap-4 @sm:[--codex-library-masonry-columns:2] @xl:[--codex-library-masonry-columns:3] @3xl:[--codex-library-masonry-columns:4] @5xl:[--codex-library-masonry-columns:5] @7xl:[--codex-library-masonry-columns:6]"
      return (
        h[15] !== q
          ? ((g = (0, i.A)(
              "relative grid grid-cols-[repeat(var(--codex-library-masonry-columns),minmax(0,1fr))] items-start gap-3 [--codex-library-masonry-columns:1]",
              q,
            )),
            (h[15] = q),
            (h[16] = g))
          : (g = h[16]),
        h[17] !== A || h[18] !== P || h[19] !== y || h[20] !== j
          ? ((m = A
              ? (0, r.jsx)(s.N, {
                  initial: !1,
                  mode: "popLayout",
                  children: y.map((e) => (0, r.jsx)(S, { id: e.id, position: j.get(e.id), children: e.content }, e.id)),
                })
              : y.map((e) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className: (0, i.A)(
                        "min-w-0",
                        P &&
                          "nth-[3n+1]:[--image-masonry-placeholder-ratio:4/3] nth-[5n+2]:[--image-masonry-placeholder-ratio:3/4]",
                      ),
                      "data-masonry-item": e.id,
                      children: e.content,
                    },
                    e.id,
                  ),
                )),
            (h[17] = A),
            (h[18] = P),
            (h[19] = y),
            (h[20] = j),
            (h[21] = m))
          : (m = h[21]),
        h[22] !== g || h[23] !== m
          ? ((f = (0, r.jsx)("div", {
              className: "@container",
              children: (0, r.jsx)("div", { ref: C, className: g, children: m }),
            })),
            (h[22] = g),
            (h[23] = m),
            (h[24] = f))
          : (f = h[24]),
        f
      )
    }
    function x(e, t) {
      return [e, t]
    }
    function _(e) {
      return e.offsetHeight
    }
    function w(e) {
      return [e.dataset.masonryItem, e]
    }
    function I(e) {
      let { id: t } = e
      return t
    }
    function S(e) {
      let t,
        a,
        i,
        s,
        p,
        g,
        f,
        h = (0, n.c)(23),
        { id: y, ref: v, position: b, children: x } = e,
        _ = (0, l.tF)(),
        w = (0, o.d)(b?.x ?? 0),
        I = (0, o.d)(b?.y ?? 0)
      h[0] !== b || h[1] !== w || h[2] !== I
        ? ((t = () => {
            if (!b?.animate) {
              ;(w.jump(b?.x ?? 0), I.jump(b?.y ?? 0))
              return
            }
            let e = [(0, c.i)(w, b.x, m.X7), (0, c.i)(I, b.y, m.X7)]
            return () => e.forEach(A)
          }),
          (h[0] = b),
          (h[1] = w),
          (h[2] = I),
          (h[3] = t))
        : (t = h[3])
      let S = b?.x,
        P = b?.y,
        C = b?.animate
      ;(h[4] !== S || h[5] !== P || h[6] !== C || h[7] !== w || h[8] !== I
        ? ((a = [S, P, C, w, I]), (h[4] = S), (h[5] = P), (h[6] = C), (h[7] = w), (h[8] = I), (h[9] = a))
        : (a = h[9]),
        (0, u.useLayoutEffect)(t, a))
      let j = !_,
        E = !_
      return (
        h[10] !== w || h[11] !== I ? ((i = { x: w, y: I }), (h[10] = w), (h[11] = I), (h[12] = i)) : (i = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = { opacity: 1 }),
            (s = { opacity: 0 }),
            (p = { opacity: { duration: 0.15, ease: m.Wu } }),
            (h[13] = s),
            (h[14] = p),
            (h[15] = g))
          : ((s = h[13]), (p = h[14]), (g = h[15])),
        h[16] !== x || h[17] !== y || h[18] !== v || h[19] !== j || h[20] !== E || h[21] !== i
          ? ((f = (0, r.jsx)(d.P.div, {
              ref: v,
              className: "col-start-1 row-start-1 min-w-0",
              "data-masonry-item": y,
              "aria-hidden": j,
              inert: E,
              initial: !1,
              style: i,
              animate: g,
              exit: s,
              transition: p,
              children: x,
            })),
            (h[16] = x),
            (h[17] = y),
            (h[18] = v),
            (h[19] = j),
            (h[20] = E),
            (h[21] = i),
            (h[22] = f))
          : (f = h[22]),
        f
      )
    }
    function A(e) {
      return e.stop()
    }
    function P(e) {
      let t,
        a,
        s,
        l,
        o,
        c = (0, n.c)(18),
        { square: d, layout: u, index: m } = e
      c[0] !== u
        ? ((t =
            "image-masonry" === u
              ? (0, r.jsx)(f.i, {})
              : (0, r.jsx)(g.X, { size: "fill", variant: "chatgpt-project" })),
          (c[0] = u),
          (c[1] = t))
        : (t = c[1])
      let h = t,
        v = "uniform" === u && "flex w-full flex-col items-center gap-3",
        b = "image-masonry" === u && "relative aspect-[var(--image-masonry-placeholder-ratio,1)] w-full"
      c[2] !== m || c[3] !== u || c[4] !== d || c[5] !== v || c[6] !== b
        ? ((a = (0, i.A)(v, b, null == u && ["w-full overflow-hidden rounded-2xl", d ? "aspect-square" : y[m]])),
          (c[2] = m),
          (c[3] = u),
          (c[4] = d),
          (c[5] = v),
          (c[6] = b),
          (c[7] = a))
        : (a = c[7])
      let x = 0 === m ? "status" : void 0
      return (
        c[8] !== m
          ? ((s =
              0 === m
                ? (0, r.jsx)("span", {
                    className: "sr-only",
                    children: (0, r.jsx)(p.A, { id: "libraryNext.results.loading", defaultMessage: "Loading library" }),
                  })
                : null),
            (c[8] = m),
            (c[9] = s))
          : (s = c[9]),
        c[10] !== u || c[11] !== h
          ? ((l =
              "uniform" === u
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", { className: "aspect-7/5 w-full overflow-hidden rounded-3xl", children: h }),
                      (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        className: "flex h-5 w-full items-center justify-center",
                        children: (0, r.jsx)("span", { className: "h-3 w-1/2 rounded bg-surface-tertiary" }),
                      }),
                    ],
                  })
                : h),
            (c[10] = u),
            (c[11] = h),
            (c[12] = l))
          : (l = c[12]),
        c[13] !== a || c[14] !== x || c[15] !== s || c[16] !== l
          ? ((o = (0, r.jsxs)("div", { className: a, role: x, children: [s, l] })),
            (c[13] = a),
            (c[14] = x),
            (c[15] = s),
            (c[16] = l),
            (c[17] = o))
          : (o = c[17]),
        o
      )
    }
    a.d(
      t,
      {},
      {
        bg: b,
        c5: P,
        cZ: v,
        oH: function (e) {
          let t,
            a,
            i = (0, n.c)(6),
            { square: s, layout: l } = e
          return (
            i[0] !== l || i[1] !== s
              ? ((t = y.map((e, t) => ({
                  id: `loading-${t}`,
                  content: (0, r.jsx)(P, { layout: l, square: s, index: t }),
                }))),
                (i[0] = l),
                (i[1] = s),
                (i[2] = t))
              : (t = i[2]),
            i[3] !== l || i[4] !== t
              ? ((a = (0, r.jsx)("div", { className: "pt-4", children: (0, r.jsx)(v, { layout: l, items: t }) })),
                (i[3] = l),
                (i[4] = t),
                (i[5] = a))
              : (a = i[5]),
            a
          )
        },
      },
    )
  },
  PArc(e, t, a) {
    var r = a("ABep"),
      n = a("QosV")
    function i(e) {
      let { id: t, content: a } = e
      return (0, r.jsx)("div", { className: "min-w-0", children: a }, t)
    }
    a.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            a,
            s = (0, n.c)(4),
            { items: l } = e
          return (
            s[0] !== l ? ((t = l.map(i)), (s[0] = l), (s[1] = t)) : (t = s[1]),
            s[2] !== t
              ? ((a = (0, r.jsx)("div", {
                  className: "@container",
                  children: (0, r.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-x-6 gap-y-10 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 @min-[96rem]:grid-cols-6",
                    "data-space-preview-grid": "",
                    children: t,
                  }),
                })),
                (s[2] = t),
                (s[3] = a))
              : (a = s[3]),
            a
          )
        },
      },
    )
  },
  RZZB(e, t, a) {
    a.d(t, { W: () => y, x: () => v })
    var r = a("ABep"),
      n = a("qmMi"),
      i = a("oyxz"),
      s = a("SPnB"),
      l = a("SGsN"),
      o = a("NRR1"),
      c = a("OWtl"),
      d = a("QosV"),
      u = a("on57"),
      p = a("bVeK"),
      g = a("RNul"),
      m = a("GWy1")
    function f(e) {
      let t,
        a,
        n,
        i,
        s,
        l,
        o,
        c,
        f,
        h,
        y,
        v,
        b = (0, d.c)(32),
        { completed: x, pendingTitle: _, successTitle: w, testId: I, onClose: S } = e
      ;(b[0] !== x ? ((t = !x && (0, r.jsx)(g.y, { className: "icon-sm" })), (b[0] = x), (b[1] = t)) : (t = b[1]),
        b[2] !== t
          ? ((a = (0, r.jsx)("span", {
              className: "col-start-1 row-start-1 flex items-center justify-center",
              children: t,
            })),
            (b[2] = t),
            (b[3] = a))
          : (a = b[3]))
      let A = x ? "opacity-100" : "opacity-0"
      ;(b[4] !== A
        ? ((n = (0, u.A)(
            "col-start-1 row-start-1 flex items-center justify-center text-success transition-opacity duration-basic motion-reduce:transition-none",
            A,
          )),
          (b[4] = A),
          (b[5] = n))
        : (n = b[5]),
        b[6] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, r.jsx)(p.ALZ, {})), (b[6] = i)) : (i = b[6]),
        b[7] !== n ? ((s = (0, r.jsx)("span", { className: n, children: i })), (b[7] = n), (b[8] = s)) : (s = b[8]),
        b[9] !== a || b[10] !== s
          ? ((l = (0, r.jsxs)("span", {
              className: "grid place-items-center leading-none",
              "aria-hidden": "true",
              children: [a, s],
            })),
            (b[9] = a),
            (b[10] = s),
            (b[11] = l))
          : (l = b[11]))
      let P = x ? "opacity-0" : "opacity-100"
      ;(b[12] !== P
        ? ((o = (0, u.A)("col-start-1 row-start-1 transition-opacity duration-basic motion-reduce:transition-none", P)),
          (b[12] = P),
          (b[13] = o))
        : (o = b[13]),
        b[14] !== x || b[15] !== _ || b[16] !== o
          ? ((c = (0, r.jsx)("span", {
              className: o,
              "aria-hidden": x,
              role: "status",
              "aria-atomic": "true",
              children: _,
            })),
            (b[14] = x),
            (b[15] = _),
            (b[16] = o),
            (b[17] = c))
          : (c = b[17]))
      let C = x ? "opacity-100" : "opacity-0"
      b[18] !== C
        ? ((f = (0, u.A)("col-start-1 row-start-1 transition-opacity duration-basic motion-reduce:transition-none", C)),
          (b[18] = C),
          (b[19] = f))
        : (f = b[19])
      let j = !x
      return (
        b[20] !== w || b[21] !== f || b[22] !== j
          ? ((h = (0, r.jsx)("span", {
              className: f,
              "aria-hidden": j,
              role: "status",
              "aria-atomic": "true",
              children: w,
            })),
            (b[20] = w),
            (b[21] = f),
            (b[22] = j),
            (b[23] = h))
          : (h = b[23]),
        b[24] !== c || b[25] !== h
          ? ((y = (0, r.jsxs)("span", { className: "grid min-w-0 select-none", children: [c, h] })),
            (b[24] = c),
            (b[25] = h),
            (b[26] = y))
          : (y = b[26]),
        b[27] !== S || b[28] !== y || b[29] !== l || b[30] !== I
          ? ((v = (0, r.jsx)(m.T, { level: "info", onClose: S, testId: I, leading: l, title: y })),
            (b[27] = S),
            (b[28] = y),
            (b[29] = l),
            (b[30] = I),
            (b[31] = v))
          : (v = b[31]),
        v
      )
    }
    function h(e) {
      let t,
        a = (0, d.c)(4),
        { state$: i, testId: s, onClose: l } = e,
        o = (0, n.Ul)(i)
      return (
        a[0] !== l || a[1] !== o || a[2] !== s
          ? ((t = (0, r.jsx)(f, { ...o, testId: s, onClose: l })), (a[0] = l), (a[1] = o), (a[2] = s), (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function y(e, t, a) {
      let i,
        d,
        u = (0, n.vP)(c.u, { ...t, completed: !1 }),
        p = e.get(s.chatGptAuthenticatedAccountId$),
        g = e.get(s.chatGptAuthenticatedUserId$),
        m = e.get(o.DO),
        f = !1,
        y = e
          .get(l.Id)
          .custom({
            duration: 1 / 0,
            onRemove: v,
            content: ({ close: e }) => (0, r.jsx)(h, { state$: u, testId: a, onClose: e }),
          })
      function v() {
        f || ((f = !0), clearTimeout(i), d?.())
      }
      function b() {
        f || (v(), y.close())
      }
      return (
        (d = e.watch(({ get: e }) => {
          ;(e(s.chatGptAuthenticatedAccountId$) !== p ||
            e(s.chatGptAuthenticatedUserId$) !== g ||
            (null != m && e(o.DO) !== m)) &&
            b()
        })),
        f && d(),
        {
          close: b,
          complete: (a = t) => {
            f || e.get(u).completed || (e.set(u, { ...a, completed: !0 }), (i = setTimeout(b, 5e3)))
          },
        }
      )
    }
    function v(e) {
      return y(
        e,
        {
          pendingTitle: (0, r.jsx)(i.A, {
            id: "libraryNext.trash.restoringSpace",
            defaultMessage: "Restoring space\u2026",
          }),
          successTitle: (0, r.jsx)(i.A, { id: "libraryNext.trash.spaceRestored", defaultMessage: "Space restored" }),
        },
        "library-trash-action-toast",
      )
    }
  },
  fi73(e, t, a) {
    ;(a.r(t), a.d(t, { GalleryDialogContent: () => eX, TemplateGalleryDialog: () => eH }))
    var r = a("ABep"),
      n = a("QosV"),
      i = a("QBk8"),
      s = a("D015"),
      l = a("SIrB"),
      o = a("Rxfy"),
      c = a("WTHg"),
      d = a("RB8A"),
      u = a("qmMi"),
      p = a("Wf1j"),
      g = a("BI6E"),
      m = a("e1xH"),
      f = a("Kw4a"),
      h = a("k4XH"),
      y = a("jG6n"),
      v = a("U6Ok"),
      b = a("o72y"),
      x = a("VU3o"),
      _ = a("C9Ga"),
      w = a("yGJW"),
      I = a("OWtl"),
      S = a("hZax"),
      A = a("IAe2"),
      P = a("HFi9"),
      C = a.n(P),
      j = a("ivAo"),
      E = a.n(j),
      T = a("zd8w"),
      M = a("Ywss"),
      k = a("SPnB"),
      q = a("yhFA"),
      N = a("OOaz"),
      O = a("OAko"),
      U = a("Bbed"),
      D = a("Q8aV"),
      R = a("NRR1"),
      F = a("PVyj"),
      L = a("KjkV"),
      $ = a("IZ2w"),
      G = a("ZUWp"),
      Q = a("Ca8q"),
      z = a("CZSB"),
      B = a("gXUG"),
      K = a("mXik"),
      W = a("N7ab"),
      Y = a("CLQ7"),
      V = a("wgYf"),
      Z = a("eLR8"),
      H = a("OpPi"),
      X = a("mJtW"),
      J = a("T0Rc"),
      ee = a("mEbU"),
      et = a("SGsN"),
      ea = a("UFWi"),
      er = a("Vx7B"),
      en = a("kiwy"),
      ei = a("VQtk"),
      es = a("tv8P"),
      el = a("soaw"),
      eo = a("dGup")
    function ec(e) {
      let t,
        a,
        i,
        s,
        l,
        o,
        c,
        d,
        g,
        m,
        f = (0, n.c)(43),
        { title: h, template: y, gallery: v } = e,
        b = (0, u.gh)(I.u),
        x = (0, p.A)(),
        _ = (0, el.a)(),
        w = y.can_edit && null != v.accountUserId,
        [S, A] = (0, T.useState)(!1)
      f[0] !== v.cacheKey || f[1] !== y.page_id
        ? ((t = ["template-gallery", "page-owner", ...v.cacheKey, y.page_id]),
          (f[0] = v.cacheKey),
          (f[1] = y.page_id),
          (f[2] = t))
        : (t = f[2])
      let P = w && S
      ;(f[3] !== v || f[4] !== y.page_id
        ? ((a = (e) => {
            let { signal: t } = e
            return v.readShares(y.page_id, t)
          }),
          (f[3] = v),
          (f[4] = y.page_id),
          (f[5] = a))
        : (a = f[5]),
        f[6] !== t || f[7] !== P || f[8] !== a
          ? ((i = { queryKey: t, enabled: P, staleTime: 0, queryFn: a, retry: !1 }),
            (f[6] = t),
            (f[7] = P),
            (f[8] = a),
            (f[9] = i))
          : (i = f[9]))
      let C = (0, J.I)(i),
        j = w && C.data?.page_owner?.principal_id === v.accountUserId
      f[10] !== v || f[11] !== x || f[12] !== _ || f[13] !== b || f[14] !== C || f[15] !== y
        ? ((s = async function () {
            let e = await C.refetch({ cancelRefetch: !1 })
            _() &&
              (e.isSuccess && e.data.page_owner?.principal_id === v.accountUserId
                ? v.requestDelete(y)
                : b
                    .get(et.Id)
                    .warning(
                      x.formatMessage(
                        e.isError
                          ? {
                              id: "space.templates.ownerCheckFailed",
                              defaultMessage: "Couldn\u2019t check who owns this template. Try again.",
                              description: "Shown when a template ownership check fails after selecting Delete",
                            }
                          : {
                              id: "space.templates.ownerRequired",
                              defaultMessage: "Only the template owner can delete it.",
                              description: "Shown when a pending Delete selection resolves for a shared editor",
                            },
                      ),
                    ))
          }),
          (f[10] = v),
          (f[11] = x),
          (f[12] = _),
          (f[13] = b),
          (f[14] = C),
          (f[15] = y),
          (f[16] = s))
        : (s = f[16])
      let E = s,
        { use: M } = v
      f[17] !== y || f[18] !== M ? ((l = M && (() => M(y))), (f[17] = y), (f[18] = M), (f[19] = l)) : (l = f[19])
      let k = l
      f[20] !== v || f[21] !== y ? ((o = () => v.edit(y)), (f[20] = v), (f[21] = y), (f[22] = o)) : (o = f[22])
      let q = o,
        N = "presentation" === y.template_type ? "slides" : "page",
        O = k ?? q
      f[23] !== v.cachedPagePreviewsOnly || f[24] !== y
        ? ((c = (0, r.jsx)(ed, { template: y, cachedPagesOnly: v.cachedPagePreviewsOnly })),
          (f[23] = v.cachedPagePreviewsOnly),
          (f[24] = y),
          (f[25] = c))
        : (c = f[25])
      let U = k || y.can_edit ? void 0 : q,
        D = y.can_edit ? q : void 0
      return (
        f[26] !== j || f[27] !== w || f[28] !== E || f[29] !== C
          ? ((d =
              w && (j || C.isPending || (C.isError && C.isFetching))
                ? () => {
                    E()
                  }
                : void 0),
            (f[26] = j),
            (f[27] = w),
            (f[28] = E),
            (f[29] = C),
            (f[30] = d))
          : (d = f[30]),
        f[31] !== U || f[32] !== D || f[33] !== d || f[34] !== h || f[35] !== k
          ? ((g = (0, r.jsx)(eo.S, { title: h, onUse: k, onOpenSource: U, onOpenChange: A, onEdit: D, onDelete: d })),
            (f[31] = U),
            (f[32] = D),
            (f[33] = d),
            (f[34] = h),
            (f[35] = k),
            (f[36] = g))
          : (g = f[36]),
        f[37] !== c || f[38] !== g || f[39] !== N || f[40] !== O || f[41] !== h
          ? ((m = (0, r.jsx)(er.Z, { surface: "create", kind: N, title: h, onOpen: O, preview: c, actions: g })),
            (f[37] = c),
            (f[38] = g),
            (f[39] = N),
            (f[40] = O),
            (f[41] = h),
            (f[42] = m))
          : (m = f[42]),
        m
      )
    }
    function ed(e) {
      let t,
        a,
        i,
        s = (0, n.c)(16),
        { template: l, cachedPagesOnly: o } = e,
        c = (0, T.useRef)(null),
        d = "page" === l.template_type,
        p = d ? "0px" : "200px 0px"
      s[0] !== p ? ((t = { margin: p }), (s[0] = p), (s[1] = t)) : (t = s[1])
      let g = (0, ee.W)(c, t),
        f = (0, u.Ul)(m.wr),
        h = (0, u._U)(es.loadedSpacePageMetadata$, d ? null : l.page_id)
      if (d) {
        let e, t
        return (
          s[2] !== o || s[3] !== f || s[4] !== l.page_id || s[5] !== g
            ? ((e =
                f &&
                (0, r.jsx)(ei.I, {
                  pageId: l.page_id,
                  isVisible: g,
                  cachedOnly: o,
                  structuredGridEnabled: !0,
                  fallback: (0, r.jsx)(r.Fragment, {}),
                  loadingFallback: (0, r.jsx)(r.Fragment, {}),
                })),
              (s[2] = o),
              (s[3] = f),
              (s[4] = l.page_id),
              (s[5] = g),
              (s[6] = e))
            : (e = s[6]),
          s[7] !== e
            ? ((t = (0, r.jsx)("span", { ref: c, className: "relative block size-full", children: e })),
              (s[7] = e),
              (s[8] = t))
            : (t = s[8]),
          t
        )
      }
      let y = l.image_preview?.url === `/backend-api/pages/${encodeURIComponent(l.page_id)}/preview`
      s[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, r.jsx)(ea.gr, { showPlaceholder: !0 })), (s[9] = a))
        : (a = s[9])
      let v = a
      return (
        s[10] !== y || s[11] !== h?.updated_at || s[12] !== f || s[13] !== l.page_id || s[14] !== g
          ? ((i = (0, r.jsx)("span", {
              ref: c,
              className: "block size-full",
              children:
                y && f
                  ? (0, r.jsx)(en.E, {
                      pageId: l.page_id,
                      updatedAt: h?.updated_at,
                      gridVisible: !!g || null,
                      refreshWhileVisible: !1,
                      fallback: v,
                      renderCover: eu,
                    })
                  : v,
            })),
            (s[10] = y),
            (s[11] = h?.updated_at),
            (s[12] = f),
            (s[13] = l.page_id),
            (s[14] = g),
            (s[15] = i))
          : (i = s[15]),
        i
      )
    }
    function eu(e, t) {
      let { blob: a, metadata: n } = e
      return (0, r.jsx)(ea.gr, { src: a, presentationMetadata: n, showPlaceholder: !0, onError: t })
    }
    var ep = a("pRQm"),
      eg = a("iyTF"),
      em = a("irkb"),
      ef = a("D7Ms"),
      eh = a("uris"),
      ey = a("TCFx"),
      ev = a("NnV7"),
      eb = a("aHFa"),
      ex = a("GEsy"),
      e_ = a("wFgY")
    function ew(e, t) {
      return (Date.parse(t.template_marked_at ?? "") || 0) - (Date.parse(e.template_marked_at ?? "") || 0)
    }
    function eI(e) {
      return e.items
    }
    function eS(e) {
      return e.partial_results
    }
    function eA() {
      return new Set()
    }
    function eP(e, t, a, r, i, s) {
      let l,
        o,
        c,
        d,
        u,
        p,
        g,
        m,
        f,
        h,
        y,
        v,
        b,
        x,
        _,
        w,
        I = (0, n.c)(64),
        S = (0, em.jE)(),
        A = (0, T.useRef)(null)
      ;(I[0] !== e || I[1] !== t || I[2] !== a || I[3] !== s || I[4] !== i
        ? ((l = (0, e_.I)(e, t, a, i, s)), (I[0] = e), (I[1] = t), (I[2] = a), (I[3] = s), (I[4] = i), (I[5] = l))
        : (l = I[5]),
        I[6] !== l ? (({ staleTime: c, ...o } = l), (I[6] = l), (I[7] = o), (I[8] = c)) : ((o = I[7]), (c = I[8])),
        I[9] !== a || I[10] !== i
          ? ((d = i || a ? {} : { retryOnMount: !0 }), (I[9] = a), (I[10] = i), (I[11] = d))
          : (d = I[11]),
        I[12] !== r || I[13] !== o || I[14] !== c || I[15] !== d
          ? ((u = { ...o, staleTime: c, enabled: r, refetchOnMount: eT, ...d }),
            (I[12] = r),
            (I[13] = o),
            (I[14] = c),
            (I[15] = d),
            (I[16] = u))
          : (u = I[16]))
      let P = (0, eh.q)(u),
        C = P.data
      I[17] !== t ? ((p = (0, ef.EN)(t)), (I[17] = t), (I[18] = p)) : (p = I[18])
      let j = p
      ;(I[19] !== S || I[20] !== C?.pages[0] || I[21] !== r || I[22] !== j
        ? ((g = () => {
            if (r && C?.pages[0]) {
              let e = S.getQueryCache().get(j)
              e && (0, eb.ZC)(e)
            }
          }),
          (I[19] = S),
          (I[20] = C?.pages[0]),
          (I[21] = r),
          (I[22] = j),
          (I[23] = g))
        : (g = I[23]),
        I[24] !== S || I[25] !== C || I[26] !== r || I[27] !== j
          ? ((m = [S, r, j, C]), (I[24] = S), (I[25] = C), (I[26] = r), (I[27] = j), (I[28] = m))
          : (m = I[28]),
        (0, T.useEffect)(g, m),
        I[29] !== C
          ? ((h = !!(f = C?.pages.at(-1)?.next_cursor) && C?.pageParams.includes(f) === !0),
            (I[29] = C),
            (I[30] = f),
            (I[31] = h))
          : ((f = I[30]), (h = I[31])))
      let E = h
      I[32] !== C?.pages || I[33] !== C?.pages.flatMap
        ? ((y = C?.pages.flatMap(eE) ?? []), (I[32] = C?.pages), (I[33] = C?.pages.flatMap), (I[34] = y))
        : (y = I[34])
      let M = y,
        k = P.isFetching && !P.isFetchingNextPage
      I[35] !== P || I[36] !== S || I[37] !== t || I[38] !== j
        ? ((v = async function () {
            let e = await P.fetchNextPage({ cancelRefetch: !1 })
            if (e.isError) {
              if ((0, ey.sW)(e.error)) {
                if (A.current === j) return
                ;((A.current = j), S.setQueryData(t, ej), await S.invalidateQueries({ queryKey: t, exact: !0 }))
              }
            } else A.current = null
          }),
          (I[35] = P),
          (I[36] = S),
          (I[37] = t),
          (I[38] = j),
          (I[39] = v))
        : (v = I[39])
      let q = v,
        N = null != C,
        O = P.isPending || (k && 0 === M.length && !!f),
        U = P.isError || E
      I[40] !== C?.pages || I[41] !== C?.pages.some
        ? ((b = C?.pages.some(eC)), (I[40] = C?.pages), (I[41] = C?.pages.some), (I[42] = b))
        : (b = I[42])
      let D = !0 === b
      return (
        I[43] !== P.hasNextPage ||
        I[44] !== P.isError ||
        I[45] !== P.isFetchingNextPage ||
        I[46] !== r ||
        I[47] !== f ||
        I[48] !== q ||
        I[49] !== k
          ? ((x =
              r && f && P.hasNextPage && !P.isError && !k
                ? {
                    cursor: f,
                    fetching: P.isFetchingNextPage,
                    loadMore: () => {
                      q()
                    },
                  }
                : void 0),
            (I[43] = P.hasNextPage),
            (I[44] = P.isError),
            (I[45] = P.isFetchingNextPage),
            (I[46] = r),
            (I[47] = f),
            (I[48] = q),
            (I[49] = k),
            (I[50] = x))
          : (x = I[50]),
        I[51] !== P || I[52] !== q
          ? ((_ = () => {
              P.isFetchNextPageError ? ((A.current = null), q()) : P.refetch()
            }),
            (I[51] = P),
            (I[52] = q),
            (I[53] = _))
          : (_ = I[53]),
        I[54] !== P.hasNextPage ||
        I[55] !== k ||
        I[56] !== M ||
        I[57] !== O ||
        I[58] !== U ||
        I[59] !== D ||
        I[60] !== x ||
        I[61] !== _ ||
        I[62] !== N
          ? ((w = {
              items: M,
              hasNextPage: P.hasNextPage,
              hasFirstPage: N,
              refreshing: k,
              loading: O,
              failed: U,
              partial: D,
              pagination: x,
              retry: _,
            }),
            (I[54] = P.hasNextPage),
            (I[55] = k),
            (I[56] = M),
            (I[57] = O),
            (I[58] = U),
            (I[59] = D),
            (I[60] = x),
            (I[61] = _),
            (I[62] = N),
            (I[63] = w))
          : (w = I[63]),
        w
      )
    }
    function eC(e) {
      return !0 === e.partial_results
    }
    function ej(e) {
      return e && { pages: e.pages.slice(0, 1), pageParams: [null] }
    }
    function eE(e) {
      return e.items
    }
    function eT(e) {
      return !!(0, eb.vh)(e) || "always"
    }
    var eM = a("Qgfj"),
      ek = a("aPDL"),
      eq = a("svjy"),
      eN = a("RZZB"),
      eO = a("dc3a"),
      eU = a("kK7d"),
      eD = a("eShZ")
    let eR = (0, eM.YK)({
      tooLarge: { id: "pages.templates.useTooLarge", defaultMessage: "This template is too large to copy." },
      unavailable: {
        id: "pages.templates.useUnavailable",
        defaultMessage: "This template is no longer available to copy.",
      },
      unconfirmed: {
        id: "pages.templates.useUnconfirmed",
        defaultMessage: "Couldn\u2019t confirm whether the copy finished. Check Home before trying again.",
      },
      failed: { id: "pages.templates.useFailed", defaultMessage: "Couldn\u2019t create a copy of this template." },
    })
    var eF = a("M2GW")
    let eL = (0, U._)(
      async () => {
        let [e, t] = await Promise.all([(0, A.CI)(), (0, eF.b)()])
        return function (a) {
          return (0, r.jsx)(eG, { ...a, imageData: e, skillData: t })
        }
      },
      { suspendToParent: !0, errorFallback: (e) => (0, r.jsx)(W.Z, { ...e, failed: !0 }) },
    )
    function e$(e) {
      let t,
        a,
        i,
        s,
        l = (0, n.c)(21),
        o = (0, u.gh)(I.u),
        c = (0, M.Zp)(),
        d = (0, M.zy)(),
        p = (0, u.Ul)(R.DO),
        g = (0, u.Ul)(k.o8),
        f = (0, u.Ul)(k.PO).accountUserId,
        h = (0, u.Ul)(m.pagesEnabled$),
        [y, v] = (0, T.useState)(),
        b = (0, u.Ul)(m.MJ),
        x = e.nativeTemplateActions,
        { onClose: _ } = e
      l[0] !== p ||
      l[1] !== f ||
      l[2] !== x ||
      l[3] !== b ||
      l[4] !== h ||
      l[5] !== d ||
      l[6] !== c ||
      l[7] !== _ ||
      l[8] !== o ||
      l[9] !== g
        ? ((t =
            h && p && g
              ? {
                  ...(0, ep.p)(p, g, f ?? null),
                  use: b
                    ? (e) => {
                        var t
                        ;((t = { accountId: p, userId: g }),
                          (0, H.O)(o, async () => {
                            let a = (0, R.hI)(o, t.accountId, void 0, void 0, t.userId)
                            try {
                              if (a.signal.aborted) return
                              let r = o.get(eq.g),
                                n = e.title.trim() || r.formatMessage((0, ev._Y)(e.document_type)),
                                i = (0, eN.W)(
                                  o,
                                  {
                                    pendingTitle: r.formatMessage(
                                      {
                                        id: "pages.templates.usePending",
                                        defaultMessage: "Creating a copy of \u201C{title}\u201D",
                                      },
                                      { title: n },
                                    ),
                                    successTitle: r.formatMessage(
                                      {
                                        id: "pages.templates.useComplete",
                                        defaultMessage: "Created a copy of \u201C{title}\u201D",
                                      },
                                      { title: n },
                                    ),
                                  },
                                  "template-use-toast",
                                )
                              try {
                                let r = await (async function (e, t, a) {
                                  let r = (0, ek.A)(),
                                    n = Date.now(),
                                    i = n
                                  for (; Date.now() - i < 6e4 && Date.now() - n < 216e5;) {
                                    a.throwIfAborted()
                                    try {
                                      let n = await eU.Kd.safePost("/templates/{page_id}/use/{operation_id}", {
                                        parameters: { path: { page_id: e, operation_id: r } },
                                        expectedIdentity: t,
                                        additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
                                        signal: AbortSignal.any([a, AbortSignal.timeout(3e4)]),
                                        retry: !1,
                                      })
                                      if ((a.throwIfAborted(), n.operation_id !== r)) break
                                      if ("completed" === n.status) {
                                        if (!n.copied_page_id) break
                                        return n.copied_page_id
                                      }
                                      if ("failed" === n.status || "cancelled" === n.status)
                                        throw Error("template_copy_failed")
                                      i = Date.now()
                                    } catch (e) {
                                      if ((a.throwIfAborted(), !(0, eO.cQ)(e))) throw e
                                    }
                                    await (0, eO.f0)(n, a)
                                  }
                                  throw Error("template_copy_unconfirmed")
                                })(e.page_id, t, a.signal)
                                ;(a.signal.throwIfAborted(),
                                  i.complete(),
                                  ((e) => {
                                    ;((0, K.U)(o, c, d, p, e, { personal: !0 }), _())
                                  })(r),
                                  (0, eO.U9)(o))
                              } catch (e) {
                                if ((i.close(), a.signal.aborted)) return
                                o.get(et.Id).danger(
                                  r.formatMessage(
                                    (function (e) {
                                      if (e instanceof eD.FetchError) {
                                        if (413 === e.status) return eR.tooLarge
                                        if (403 === e.status || 404 === e.status) return eR.unavailable
                                      }
                                      return e instanceof Error && "template_copy_unconfirmed" === e.message
                                        ? eR.unconfirmed
                                        : eR.failed
                                    })(e),
                                  ),
                                  { errorAnalytics: { toastId: "pages.templates.useFailed" } },
                                )
                              }
                            } finally {
                              a.stop()
                            }
                          }))
                      }
                    : void 0,
                  edit: (e) => {
                    ;(_(), c(`/space/${encodeURIComponent(e.page_id)}`))
                  },
                  ...x,
                  requestDelete: v,
                }
              : void 0),
          (l[0] = p),
          (l[1] = f),
          (l[2] = x),
          (l[3] = b),
          (l[4] = h),
          (l[5] = d),
          (l[6] = c),
          (l[7] = _),
          (l[8] = o),
          (l[9] = g),
          (l[10] = t))
        : (t = l[10])
      let w = t,
        S = e.nativeTemplates ?? w
      return (
        l[11] !== e || l[12] !== S
          ? ((a = (0, r.jsx)(eL, { ...e, nativeTemplates: S })), (l[11] = e), (l[12] = S), (l[13] = a))
          : (a = l[13]),
        l[14] !== y || l[15] !== w || l[16] !== o
          ? ((i =
              w &&
              y &&
              (0, r.jsx)(Z.F, {
                pageId: y.page_id,
                pageTitle: y.title,
                documentType: "presentation" === y.template_type ? "granola_presentation" : "page",
                onClose: () => v(void 0),
                onArchived: (e) => {
                  ;(0, X.n)(o.queryClient, w.cacheKey, e)
                },
              })),
            (l[14] = y),
            (l[15] = w),
            (l[16] = o),
            (l[17] = i))
          : (i = l[17]),
        l[18] !== a || l[19] !== i
          ? ((s = (0, r.jsxs)(r.Fragment, { children: [a, i] })), (l[18] = a), (l[19] = i), (l[20] = s))
          : (s = l[20]),
        s
      )
    }
    function eG(e) {
      let t,
        a,
        o,
        c,
        d,
        g,
        y,
        v,
        _,
        S,
        A,
        P,
        j,
        M,
        U,
        K,
        W,
        Z,
        J = (0, n.c)(78),
        {
          frame: ee,
          catalog: et,
          nativeTemplates: ea,
          onClose: er,
          onCloseAutoFocus: en,
          onApplyPageTemplate: ei,
          selectedGroupId: es,
          onGalleryGroupSelect: el,
          imageData: eo,
          skillData: ed,
        } = e,
        eu = (0, u.gh)(I.u),
        ep = (0, p.A)(),
        eh = (0, u.Ul)(H.q),
        ey = es ?? "all"
      J[0] !== ey ? ((t = (0, Y.c3)(ey)), (J[0] = ey), (J[1] = t)) : (t = J[1])
      let [eb, e_] = (0, T.useState)(t),
        eC = ee?.active ?? eb,
        ej = (0, V.$)(er),
        eE = (0, u.Ul)(f.ou),
        eT = (0, u._U)(m.H6, "granola_presentation"),
        eM = (0, u._U)(Q.d, ep),
        ek = (0, u._U)(b.x5, "template-modal"),
        eq = (0, u.Ul)(b.BE),
        eN = (0, u.Ul)(eT ? eg.i8 : null),
        eO = (0, u.Ul)(eT ? B.G : null),
        eU = (0, u.Ul)(eo.imagesCatalogQuery$),
        eD = (0, u.Ul)(eo.imagesStylesQuery$),
        { data: eR, isLoading: eF, isError: eL } = (0, u._U)(ed?.skillsCollection$ ?? null, "workspace-shared") ?? {},
        e$ = new Set(eR?.map(eV)),
        eG = (0, u.Ul)(k.chatGptAuthenticatedUserId$),
        eZ = (0, u.Ul)(k.chatGptAuthenticatedAccountId$),
        { data: eH } = (0, O.YL)(),
        eX = (0, u.Ul)(m.pagesEnabled$),
        eJ = (0, u.Ul)(k.cj),
        [e0, e1] = (0, T.useState)(""),
        e2 = ee?.search ?? e0,
        e3 = (0, u.Ul)(R.DO)
      J[2] !== e3 || J[3] !== eG
        ? ((a = { accountId: e3, userId: eG }), (J[2] = e3), (J[3] = eG), (J[4] = a))
        : (a = J[4])
      let e4 = (function (e, t, a, r, i) {
          let s,
            l,
            o,
            c,
            d,
            u,
            g,
            m = (0, n.c)(21),
            f = void 0 === r ? "all" : r,
            h = (0, p.A)(),
            y = (0, em.jE)()
          m[0] !== h
            ? ((s = function (e) {
                return e.title.trim() ? e.title : h.formatMessage((0, ev._Y)(e.document_type))
              }),
              (m[0] = h),
              (m[1] = s))
            : (s = m[1])
          let v = s
          m[2] !== t ? ((l = t.trim()), (m[2] = t), (m[3] = l)) : (l = m[3])
          let b = l,
            x = (0, ex.o)(b, 200)
          m[4] !== x || m[5] !== h
            ? ((o =
                "" !== x &&
                ["page", "granola_presentation"].some((e) =>
                  h
                    .formatMessage((0, ev._Y)(e))
                    .toLocaleLowerCase()
                    .includes(x.toLocaleLowerCase()),
                )),
              (m[4] = x),
              (m[5] = h),
              (m[6] = o))
            : (o = m[6])
          let _ = o,
            w = _ ? "" : x
          m[7] !== e || m[8] !== b
            ? ((c = null != e && Array.from(b).length <= 512), (m[7] = e), (m[8] = b), (m[9] = c))
            : (c = m[9])
          let I = c
          m[10] !== e?.cacheKey ? ((d = e?.cacheKey ?? []), (m[10] = e?.cacheKey), (m[11] = d)) : (d = m[11])
          let S = (0, X.N)(d),
            A = [...S, w],
            P = I && b === x,
            C = eP(e, A, w, P),
            j = (0, ef.EN)(S),
            [E, M] = (0, T.useState)({ listIdentity: j, query: "" }),
            k = E.listIdentity === j ? E.query : "",
            q = P && C.hasFirstPage && !C.failed ? w : k
          ;(E.listIdentity !== j || E.query !== q) && M({ listIdentity: j, query: q })
          let N = C.hasNextPage || C.partial,
            O = [...A, "page"],
            U = [...A, "presentation"],
            D = (0, ef.EN)(O),
            R = (0, ef.EN)(U),
            F = "page" === f || "slides" === f,
            L = "page" === f ? D : R,
            [$, G] = (0, T.useState)(eA)
          ;(P && N && !C.refreshing && F && !$.has(L) && G(new Set([...$, L])),
            m[12] !== v || m[13] !== b
              ? ((u = (e) =>
                  [v(e), e.description ?? ""].some((e) => e.toLocaleLowerCase().includes(b.toLocaleLowerCase()))),
                (m[12] = v),
                (m[13] = b),
                (m[14] = u))
              : (u = m[14]))
          let Q = u
          m[15] !== a || m[16] !== x || m[17] !== _ || m[18] !== Q || m[19] !== b
            ? ((g = function (e) {
                return !a?.some((t) => t.pageIds.has(e.page_id)) && ((!_ && b === x) || Q(e))
              }),
              (m[15] = a),
              (m[16] = x),
              (m[17] = _),
              (m[18] = Q),
              (m[19] = b),
              (m[20] = g))
            : (g = m[20])
          let z = g,
            B = (e) => i?.startTypeRequest(e, A, z),
            K = eP(e, O, w, P && N && $.has(D), "page", B),
            W = eP(e, U, w, P && N && $.has(R), "presentation", B),
            Y = [C]
          N && (F ? Y.unshift("page" === f ? K : W) : Y.push(K, W))
          let V = Y[0],
            Z = new Map()
          for (let e of I ? Y : []) for (let t of e.items) Z.has(t.page_id) || Z.set(t.page_id, t)
          if (I && b && (b !== x || !C.hasFirstPage) && !C.failed)
            for (let e of k && k !== w ? [k, ""] : [""]) {
              let t = [...S, e],
                a = y.getQueryData(t),
                r = [a]
              if (a?.pages.at(-1)?.next_cursor || a?.pages.some(eS))
                for (let e of F ? ["page" === f ? "page" : "presentation"] : ["page", "presentation"])
                  r.push(y.getQueryData([...t, e]))
              for (let e of r)
                for (let t of e?.pages.flatMap(eI) ?? []) Q(t) && !Z.has(t.page_id) && Z.set(t.page_id, t)
            }
          let H = [...Z.values()].filter(z)
          return (
            b || H.sort(ew),
            {
              queryKey: A,
              items: H,
              getDisplayTitle: v,
              loading: I && (b !== x || V.loading),
              failed: I && V.failed,
              partial: I && V.partial,
              pagination: P ? V.pagination : void 0,
              retry: V.retry,
            }
          )
        })(ea, e2, (0, u._U)(F.aP, a), eC, ee?.visit),
        e5 = []
      if (ea)
        for (let e of e4.items) {
          let t = e4.getDisplayTitle(e)
          e5.push({
            id: `native:${e.page_id}`,
            category: "presentation" === e.template_type ? "slides" : "page",
            title: t,
            text: e.description ?? "",
            matchesSearch: !0,
            content: (0, r.jsx)(
              ec,
              { title: t, template: e, gallery: ea },
              JSON.stringify([ea.cacheKey, ea.accountUserId, e.page_id]),
            ),
          })
        }
      if (eE) {
        for (let e of ek ?? [])
          e5.push({
            id: `personalized:${e.id}`,
            category: "page",
            title: e.title,
            text: e.description ?? "",
            content: (0, r.jsx)(z.s, { suggestion: e, surface: "create", onOpen: er }),
          })
        eM.forEach((e, t) =>
          e5.push({
            id: `page:${e.id}`,
            category: "page",
            title: e.title,
            text: e.previewMarkdown,
            content: (0, r.jsx)(h.E, {
              isAvailable: eY,
              template: e,
              surface: "create",
              templatePosition: null == eG ? void 0 : t + 1,
              onOpen: er,
              onApply: ei,
              onSelect: (e, t) =>
                (0, w.yy)(eu, i.CodexSpacesTemplateGallery, {
                  action: i.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                  category: "page",
                  templateId: e,
                  templatePosition: null == t ? void 0 : (0, s.At)(t),
                  selectionSurface: i.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
                }),
            }),
          }),
        )
      }
      for (let e of (eT &&
        eO?.forEach((e, t) =>
          e5.push({
            id: `slides:${e.id}`,
            category: "slides",
            title: e.title,
            text: "",
            content: (0, r.jsx)(x.q, {
              template: e,
              templatePosition: null == eG ? void 0 : t + 1,
              surface: "create",
              onOpen: er,
            }),
          }),
        ),
      et.groups))
        if ("ready" === e.templates.status)
          for (let t of e.templates.data) {
            let e = (0, l.Zk)(t.type),
              a = (0, Y.c3)(e ?? "")
            if ("page" !== a && "slides" !== a && "spreadsheet" !== a) continue
            let n = e$.has(t.id)
            ;("document" !== t.type || n) &&
              (!eT || "slides" !== a || n) &&
              e5.push({
                id: `file:${t.id}`,
                category: "document" === t.type ? "document" : a,
                title: t.name,
                text: t.description ?? "",
                workspace: n,
                content: (0, r.jsx)($.z, {
                  template: t,
                  variant: "create",
                  disabled: et.disabled,
                  interaction: { kind: "use", onUse: et.onUseTemplate, menu: et.templateActions(t) },
                }),
              })
          }
      let e6 = eD.data?.image_suggestions
      for (let { item: e, group: t, thumbnail: a } of eo.getCreateImageTemplates(eU.data?.groups, e6))
        e5.push({
          id: `image:${e.id}`,
          category: "images",
          title: e.title,
          text: e.prompt_text,
          content: (0, r.jsx)(G.O, {
            title: e.title,
            thumbnail: a,
            disabled: null == eG || null == eZ,
            onOpen: () => {
              ;(0, D.startNewConversation)(eu, {
                codexAppMode: "chat",
                prefillChatGptSystemHints: ["picture_v2"],
                onFreshChatDraftCreated: (a) => {
                  ;(0, q.zW)(eu, (0, N.TF)(a), e, t, "images")
                },
                prefillPrompt: e.prompt_text,
                startInSidebar: !0,
                selectChat: !0,
                onNavigate: er,
              })
            },
          }),
        })
      let e8 = "workspace" === es || e5.some(eW)
      J[5] !== eH?.id || J[6] !== eH?.name || J[7] !== eZ || J[8] !== e8 || J[9] !== ep
        ? ((o = e8 ? (eH?.id === eZ && eH?.name) || ep.formatMessage(Y.DZ.workspace) : void 0),
          (J[5] = eH?.id),
          (J[6] = eH?.name),
          (J[7] = eZ),
          (J[8] = e8),
          (J[9] = ep),
          (J[10] = o))
        : (o = J[10])
      let e7 = o,
        e9 = ee?.setWorkspace
      ;(J[11] !== e9 || J[12] !== e7
        ? ((c = () => {
            e9?.(e7)
          }),
          (d = [e9, e7]),
          (J[11] = e9),
          (J[12] = e7),
          (J[13] = c),
          (J[14] = d))
        : ((c = J[13]), (d = J[14])),
        (0, T.useLayoutEffect)(c, d),
        J[15] !== ep || J[16] !== eC || J[17] !== e7
          ? ((g = (y = (0, Y.zr)(ep, e7)).some((e) => e.key === eC) ? eC : "all"),
            (J[15] = ep),
            (J[16] = eC),
            (J[17] = e7),
            (J[18] = g),
            (J[19] = y))
          : ((g = J[18]), (y = J[19])))
      let te = g,
        tt = e4.items.length,
        ta = (
          "all" === te
            ? [
                ...e5.slice(0, tt),
                ...E()(...Object.values(C()(e5.slice(tt), "category")))
                  .flat()
                  .filter(eK),
              ]
            : e5
        ).filter(
          (e) =>
            ("document" !== e.category || "workspace" === te) &&
            ("workspace" === te ? e.workspace : "all" === te || e.category === te),
        )
      J[20] !== te ? ((v = (e) => "all" === te || te === e), (J[20] = te), (J[21] = v)) : (v = J[21])
      let tr = v
      J[22] !== te || J[23] !== tr
        ? ((_ = (e) => "workspace" === te || tr((0, Y.c3)(e.id))), (J[22] = te), (J[23] = tr), (J[24] = _))
        : (_ = J[24])
      let tn = et.groups.filter(_)
      J[25] !== te || J[26] !== ea
        ? ((S = null != ea && ["all", "page", "slides"].includes(te)), (J[25] = te), (J[26] = ea), (J[27] = S))
        : (S = J[27])
      let ti = S
      J[28] !== te || J[29] !== eX || J[30] !== eJ || J[31] !== e4.loading || J[32] !== ea
        ? ((A = ["all", "page", "slides"].includes(te) && (e4.loading || (eX && !ea && !eJ))),
          (J[28] = te),
          (J[29] = eX),
          (J[30] = eJ),
          (J[31] = e4.loading),
          (J[32] = ea),
          (J[33] = A))
        : (A = J[33])
      let ts = A,
        tl = ta.some(eB),
        to = ts && !tl
      ;(J[34] !== ee ||
      J[35] !== tl ||
      J[36] !== ti ||
      J[37] !== e4.failed ||
      J[38] !== e4.pagination ||
      J[39] !== e4.partial ||
      J[40] !== e4.queryKey ||
      J[41] !== ts
        ? ((P = () => {
            if (!ee) return
            let { visit: e, scrollRoot: t } = ee
            if (
              (ti || ts
                ? e4.failed
                  ? e.setOutcome("error")
                  : ts || e4.pagination || tl
                    ? e.setOutcome("left_before_result")
                    : e.setOutcome(e4.partial ? "partial" : "empty")
                : e.setOutcome("not_applicable"),
              t.current)
            )
              return e.observeCards(t.current, e4.queryKey)
          }),
          (J[34] = ee),
          (J[35] = tl),
          (J[36] = ti),
          (J[37] = e4.failed),
          (J[38] = e4.pagination),
          (J[39] = e4.partial),
          (J[40] = e4.queryKey),
          (J[41] = ts),
          (J[42] = P))
        : (P = J[42]),
        (0, T.useLayoutEffect)(P))
      let tc =
          ts ||
          (tr("page") && eE && eq) ||
          (tr("slides") && eT && eN?.isPending) ||
          (tr("images") && (eD.isPending || (!e6?.length && eU.isPending))) ||
          (tn.length > 0 && eF) ||
          tn.some(ez),
        td =
          (ti && e4.failed) ||
          (tr("slides") && eT && eN?.isError) ||
          (tr("images") && (eD.isError || (!e6?.length && eU.isError))) ||
          (tn.length > 0 && eL) ||
          tn.some(eQ),
        tu = null != ee
      J[43] !== e2 ? ((j = { value: e2, onChange: e1 }), (J[43] = e2), (J[44] = j)) : (j = J[44])
      let tp = ti && e4.partial,
        tg = ti ? e4.pagination : void 0,
        tm = ee?.scrollRoot
      return (
        J[45] !== to || J[46] !== ta ? ((M = to ? [] : ta), (J[45] = to), (J[46] = ta), (J[47] = M)) : (M = J[47]),
        J[48] !== et || J[49] !== eU || J[50] !== ti || J[51] !== e4 || J[52] !== eu || J[53] !== eD
          ? ((U = () => {
              ;(ti && e4.retry(), et.onRetry(), (0, eg.JF)(eu), eU.refetch(), eD.refetch())
            }),
            (J[48] = et),
            (J[49] = eU),
            (J[50] = ti),
            (J[51] = e4),
            (J[52] = eu),
            (J[53] = eD),
            (J[54] = U))
          : (U = J[54]),
        J[55] !== el || J[56] !== y
          ? ((K = (e) => {
              ;(e_(e),
                el?.(
                  "all" === e
                    ? null
                    : {
                        id: e,
                        label: y.find((t) => t.key === e)?.name ?? e,
                        templateTypes: [],
                        templates: { status: "ready", data: [] },
                      },
                ))
            }),
            (J[55] = el),
            (J[56] = y),
            (J[57] = K))
          : (K = J[57]),
        J[58] !== te || J[59] !== K || J[60] !== y
          ? ((W = { tabs: y, active: te, onSelect: K }), (J[58] = te), (J[59] = K), (J[60] = y), (J[61] = W))
          : (W = J[61]),
        J[62] !== eh ||
        J[63] !== td ||
        J[64] !== tc ||
        J[65] !== ej.action ||
        J[66] !== ej.title ||
        J[67] !== er ||
        J[68] !== en ||
        J[69] !== tu ||
        J[70] !== j ||
        J[71] !== tp ||
        J[72] !== tg ||
        J[73] !== tm ||
        J[74] !== M ||
        J[75] !== U ||
        J[76] !== W
          ? ((Z = (0, r.jsx)(L.t, {
              embedded: tu,
              busy: eh,
              title: ej.title,
              toolbarAction: ej.action,
              searchField: j,
              partial: tp,
              pagination: tg,
              scrollRoot: tm,
              entries: M,
              onClose: er,
              onCloseAutoFocus: en,
              loading: tc,
              failed: td,
              onRetry: U,
              navigation: W,
            })),
            (J[62] = eh),
            (J[63] = td),
            (J[64] = tc),
            (J[65] = ej.action),
            (J[66] = ej.title),
            (J[67] = er),
            (J[68] = en),
            (J[69] = tu),
            (J[70] = j),
            (J[71] = tp),
            (J[72] = tg),
            (J[73] = tm),
            (J[74] = M),
            (J[75] = U),
            (J[76] = W),
            (J[77] = Z))
          : (Z = J[77]),
        Z
      )
    }
    function eQ(e) {
      return "error" === e.templates.status
    }
    function ez(e) {
      return "loading" === e.templates.status
    }
    function eB(e) {
      return e.id.startsWith("native:")
    }
    function eK(e) {
      return null != e
    }
    function eW(e) {
      return e.workspace
    }
    function eY(e) {
      return e.get(f.ou)
    }
    function eV(e) {
      return e.id
    }
    var eZ = a("Uplr")
    function eH(e) {
      let t,
        a,
        s,
        o = (0, n.c)(14),
        {
          frame: c,
          onClose: d,
          onCloseAutoFocus: p,
          onApplyPageTemplate: g,
          selectedGroupId: m,
          onGalleryGroupSelect: f,
        } = e,
        h = (0, u.gh)(I.u),
        y = (0, S.Zj)("3531012613") ? e$ : eX
      return (
        o[0] !== h
          ? ((t = (e) => {
              ;(0, w.yy)(h, i.CodexSpacesTemplateGallery, {
                action: i.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                category: (0, l.Zk)(e.type) ?? void 0,
                selectionSurface: i.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
              })
            }),
            (o[0] = h),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== y || o[3] !== c || o[4] !== g || o[5] !== d || o[6] !== p || o[7] !== f || o[8] !== m
          ? ((a = (e) =>
              (0, r.jsx)(y, {
                frame: c,
                catalog: e,
                onClose: d,
                onCloseAutoFocus: p,
                onApplyPageTemplate: g,
                selectedGroupId: m,
                onGalleryGroupSelect: f,
              })),
            (o[2] = y),
            (o[3] = c),
            (o[4] = g),
            (o[5] = d),
            (o[6] = p),
            (o[7] = f),
            (o[8] = m),
            (o[9] = a))
          : (a = o[9]),
        o[10] !== d || o[11] !== t || o[12] !== a
          ? ((s = (0, r.jsx)(eZ.y, { onOpenDraft: d, onTemplateSelected: t, children: a })),
            (o[10] = d),
            (o[11] = t),
            (o[12] = a),
            (o[13] = s))
          : (s = o[13]),
        s
      )
    }
    function eX(e) {
      let t,
        a,
        S,
        A,
        P,
        C,
        j,
        E,
        T,
        M,
        k,
        q = (0, n.c)(45),
        {
          catalog: N,
          onClose: O,
          onCloseAutoFocus: U,
          onApplyPageTemplate: D,
          selectedGroupId: R,
          onGalleryGroupSelect: F,
        } = e,
        L = (0, u.gh)(I.u),
        $ = (0, p.A)(),
        G = (0, u.Ul)(f.wu),
        Q = (0, u._U)(m.H6, "granola_presentation"),
        z = (0, u.Ul)(y.ql),
        B = (0, u._U)(b.x5, "template-modal")
      q[0] !== $ || q[1] !== z || q[2] !== G || q[3] !== B?.length
        ? ((t = (G && void 0 !== z && (0, v.l)($, z?.value).length > 0) || (B?.length ?? 0) > 0),
          (q[0] = $),
          (q[1] = z),
          (q[2] = G),
          (q[3] = B?.length),
          (q[4] = t))
        : (t = q[4])
      let K = t
      if (
        (q[5] !== K || q[6] !== $
          ? ((a = K
              ? [
                  {
                    id: "page",
                    label: $.formatMessage(g.xs.page),
                    templateTypes: [],
                    templates: { status: "ready", data: [] },
                  },
                ]
              : []),
            (q[5] = K),
            (q[6] = $),
            (q[7] = a))
          : (a = q[7]),
        q[8] !== $ || q[9] !== Q
          ? ((S = Q
              ? [
                  {
                    id: "slides",
                    label: $.formatMessage(_.a.heading),
                    templateTypes: [],
                    templates: { status: "ready", data: [] },
                  },
                ]
              : []),
            (q[8] = $),
            (q[9] = Q),
            (q[10] = S))
          : (S = q[10]),
        q[11] !== N.groups || q[12] !== Q || q[13] !== a || q[14] !== S)
      ) {
        let e
        ;(q[16] !== Q
          ? ((e = (e) => !Q || (!e.templateTypes.includes("presentation") && !e.templateTypes.includes("document"))),
            (q[16] = Q),
            (q[17] = e))
          : (e = q[17]),
          (A = [...a, ...S, ...N.groups.filter(e)]),
          (q[11] = N.groups),
          (q[12] = Q),
          (q[13] = a),
          (q[14] = S),
          (q[15] = A))
      } else A = q[15]
      ;(q[18] !== N || q[19] !== L
        ? ((P = (e) => ({
            onRetryLoadTemplates: N.onRetry,
            onCreateTemplate:
              e?.id !== "page" && e?.id !== "slides" && N.onCreateTemplate
                ? (e) => {
                    let t = (0, o.c)(e?.id ?? "")
                    ;((0, w.yy)(L, i.CodexSpacesTemplateGallery, {
                      action:
                        i.CodexSpacesTemplateGalleryAction
                          .CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CREATE_TEMPLATE_SELECTED,
                      category: (t ? (0, l.Zk)(t) : "all") ?? void 0,
                    }),
                      N.onCreateTemplate?.(t ? (0, l.Zk)(t) : null))
                  }
                : void 0,
          })),
          (q[18] = N),
          (q[19] = L),
          (q[20] = P))
        : (P = q[20]),
        q[21] !== O || q[22] !== F || q[23] !== A || q[24] !== P
          ? ((C = { onGalleryGroupSelect: F, groups: A, onClose: O, callbacks: P }),
            (q[21] = O),
            (q[22] = F),
            (q[23] = A),
            (q[24] = P),
            (q[25] = C))
          : (C = q[25]),
        q[26] !== R || q[27] !== C
          ? ((j = { selectedGroupId: R, config: C }), (q[26] = R), (q[27] = C), (q[28] = j))
          : (j = q[28]))
      let W = (0, d.yS)(j)
      return (
        q[29] !== U ? ((E = { onCloseAutoFocus: U }), (q[29] = U), (q[30] = E)) : (E = q[30]),
        q[31] !== W || q[32] !== D || q[33] !== O || q[34] !== L
          ? ((T = (e) =>
              "page" === e.id
                ? (0, r.jsx)(h.$, {
                    onOpen: O,
                    onApply: D,
                    inTemplateGallery: !0,
                    onSelect: (e, t) => {
                      ;(0, w.yy)(L, i.CodexSpacesTemplateGallery, {
                        action:
                          i.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                        category: "page",
                        templateId: e,
                        templatePosition: null == t ? void 0 : (0, s.At)(t),
                        selectionSurface:
                          i.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
                      })
                    },
                    inset: !1,
                    expanded: "page" === W.model.selectedGroupId,
                  })
                : "slides" === e.id
                  ? (0, r.jsx)(x.X, { onOpen: O, expanded: "slides" === W.model.selectedGroupId })
                  : void 0),
            (q[31] = W),
            (q[32] = D),
            (q[33] = O),
            (q[34] = L),
            (q[35] = T))
          : (T = q[35]),
        q[36] !== N || q[37] !== W
          ? ((M = (e) =>
              (0, r.jsx)(c.xW, {
                template: e,
                menuModal: !0,
                disabled: N.disabled,
                interaction: {
                  kind: "use",
                  onUse: N.onUseTemplate,
                  menu: { ...N.templateActions(e), onView: () => W.actions.viewTemplate(e) },
                },
              })),
            (q[36] = N),
            (q[37] = W),
            (q[38] = M))
          : (M = q[38]),
        q[39] !== N.detail || q[40] !== W || q[41] !== M || q[42] !== E || q[43] !== T
          ? ((k = (0, r.jsx)(d._Y, { open: !0, contentProps: E, ...W, renderGroup: T, card: M, detail: N.detail })),
            (q[39] = N.detail),
            (q[40] = W),
            (q[41] = M),
            (q[42] = E),
            (q[43] = T),
            (q[44] = k))
          : (k = q[44]),
        k
      )
    }
  },
  AJrU(e, t, a) {
    var r = a("DBCl")
    let n = new WeakMap()
    function i(e, t) {
      let a = n.get(e)
      null == a && n.set(e, (a = new Set()))
      let r = a
      return (r.add(t), t.finally(() => r.delete(t)).catch(() => {}), t)
    }
    a.d(
      t,
      {},
      {
        Fr: function (e) {
          let t
          return (
            i(
              e,
              new Promise((e) => {
                t = e
              }),
            ),
            t
          )
        },
        nQ: i,
        sI: async function (e, t) {
          for (;;) {
            let a = n.get(e)
            if (null == a || 0 === a.size) return
            try {
              await (0, r._qC)(Promise.allSettled(a), t)
            } catch (e) {
              if (t.aborted) return
              throw e
            }
          }
        },
      },
    )
  },
  PcMx(e, t, a) {
    var r = a("ASxG"),
      n = a("eShZ")
    let i = r.Ikc({ retryable: r.euz(!0), retry_after_seconds: r.aig().int().positive() }),
      s = i.extend({ code: r.YjP(), commit_status: r.euz("not_committed") }),
      l = i.extend({
        code: r.euz("page_freshness_unavailable"),
        delete_attempt_status: r.euz("page_workflow_not_enqueued"),
      })
    a.d(
      t,
      {},
      {
        F: class e extends Error {
          retryAfterSeconds
          refreshTrash
          constructor(e, t, a = !1) {
            ;(super("Deletion request refused before it started", { cause: t }),
              (this.retryAfterSeconds = e),
              (this.refreshTrash = a))
          }
          static from(t, a) {
            if (t instanceof n.FetchError)
              try {
                if (409 === t.status && "page" === a) {
                  let a = l.parse(JSON.parse(t.message))
                  return new e(a.retry_after_seconds, t, !0)
                }
                if (429 !== t.status && 503 !== t.status) return
                let r = 429 === t.status ? `${a}_delete_rate_limited` : `${a}_delete_admission_unavailable`,
                  n = s.parse(JSON.parse(t.message))
                if (n.code === r) return new e(n.retry_after_seconds, t)
              } catch {}
          }
          formatMessage(e) {
            return e.formatMessage(
              {
                id: "codex.space.deleteAdmission.retryAfter",
                defaultMessage: "Try deleting again in {seconds, plural, one {# second} other {# seconds}}.",
              },
              { seconds: this.retryAfterSeconds },
            )
          }
        },
      },
    )
  },
  Btxs(e, t, a) {
    var r = a("qmMi"),
      n = a("PFjh"),
      i = a("SPnB"),
      s = a("lVIb"),
      l = a("cU41"),
      o = a("PzpM"),
      c = a("e1xH"),
      d = a("DHW4"),
      u = a("fVTg"),
      p = a("MvVt"),
      g = a("fJPN"),
      m = a("Wbls"),
      f = a("tv8P"),
      h = a("JcZO"),
      y = a("OWtl"),
      v = a("gTGF"),
      b = a("yrMs"),
      x = a("MCKR"),
      _ = a("PVyj")
    let w = (0, r.aP)(y.u, ({ scope: e }) => ({
      mutationFn: async (t) => {
        let a,
          r = e.get(f.spaceAccountId$),
          y = e.get(i.chatGptAuthenticatedUserId$)
        if (!e.get(c.pagesEnabled$) || null == r) throw Error("pages_disabled")
        let w = { accountId: r, userId: y },
          I = () =>
            e.get(f.spaceAccountId$) === r && e.get(i.chatGptAuthenticatedUserId$) === y && e.get(c.pagesEnabled$),
          S =
            "space" === t.kind
              ? (e.query.getData(f.spacesQuery$)?.items.find((e) => e.id === t.id) ??
                e.query.getData(f.spaceQuery$, t.id) ??
                e.query.getData(f.spaceCollectionQuery$, t.id)?.space)
              : void 0,
          A = (0, v.x3)(e, r, y),
          P = "page" === t.kind ? A.find((e) => e.page_id === t.id) : void 0,
          C =
            "page" === t.kind
              ? (0, d.r)((0, n.dj)(e), {
                  action: "archive_page",
                  documentType: (0, u.v)(P),
                  completionMilestone: "ui_confirmed",
                })
              : void 0,
          j = new Set()
        "page" === t.kind ? j.add(t.id) : null != S && j.add(S.root_page_id)
        let E = "page" === t.kind ? e.get(x.Wz, "search") : void 0,
          T = {
            id: t.id,
            committed: !1,
            search: "page" === t.kind ? new AbortController() : void 0,
            spaceId: "space" === t.kind ? t.id : void 0,
            pageIds: j,
            listing: "space" === t.kind ? { kind: "spaces" } : void 0,
          }
        P?.parent != null && "page_id" in P.parent
          ? (T.listing = { kind: "children", id: P.parent.page_id })
          : null != P && null == P.drive_space_id && (T.listing = { kind: "pages" })
        let M = { ...T, pageIds: (0, _.p9)(A, [T]) },
          k = "page" === t.kind && null != M.search && null != E ? AbortSignal.any([E, M.search.signal]) : E
        e.set(_.aP, w, (e) => [...e, M])
        let q = M.pageIds,
          N = !1,
          O = !1,
          U = !1,
          D = M.pageIds,
          R = (0, f.watchSpaceAccount)(e, r, y),
          F = null == E ? R.signal : AbortSignal.any([R.signal, E])
        try {
          if ("space" === t.kind) await (0, b.vY)(e, w, t.id, F, t.recovery)
          else {
            let n = await (0, b.NW)(e, w, t.id, F, t.operationId, t.pageTitle ?? P?.title)
            if ("scheduled" === n) return I() && !F.aborted ? { outcome: "scheduled" } : void 0
            ;((a = n),
              (D = new Set([...M.pageIds, ...(0, _.p9)((0, v.x3)(e, r, y), [M])])),
              (U = !0),
              (q = new Set([t.id])))
          }
          if (
            ((N = !0),
            "archived" !== a && C?.milestone("operation_committed"),
            ("page" === t.kind && F.aborted) || !I() || !e.get(_.aP, w).includes(M))
          )
            return
          "space" === t.kind && (0, o.WF)(e, t.id)
          let n = U ? new Set([t.id]) : (0, _.p9)((0, v.x3)(e, r, y), [M])
          if (
            ((q = n),
            await Promise.all([
              e.query.cancel(f.spacesQuery$),
              e.query.cancel(f.spacePagesQuery$),
              (0, s.JE)(e, w, n, { owner: k }),
              (0, l.Y9)(
                e.queryClient,
                w,
                new Set("page" === t.kind || S?.backing_type === "drive" ? [...n].map((e) => `page:${e}`) : []),
                { includeTrash: "page" !== t.kind, owner: k },
              ),
            ]),
            ("page" === t.kind && F.aborted) || !I() || !e.get(_.aP, w).includes(M))
          )
            return
          ;("space" === t.kind && (0, m.ex)(e, r, n),
            (0, g.qV)(e, w, (e) => (null == e.file && n.has(e.id) ? null : e)),
            (0, p.nL)(e, n),
            (0, h.Us)(e, n),
            "page" === t.kind
              ? ((0, f.setSpacePagePinned)(e, t.id, !1),
                (0, f.evictCachedSpacePages)(e, [t.id], r, { pauseHomeSearch: !1, includeDescendants: !1, owner: k }))
              : ((0, f.evictCachedDriveSpacePages)(e, t.id, r, S),
                (0, f.setSpacePinned)(e, t.id, !1),
                e.query.setData(f.spacesQuery$, (e) =>
                  null == e ? e : { ...e, items: e.items.filter((e) => e.id !== t.id) },
                )))
          let i = {
            queryKey: ["space", "drive-page-search", r],
            predicate: ({ queryKey: e }) => e[4] === y && (e[3] === S?.id || e[3] === P?.drive_space_id),
          }
          ;(e.queryClient.cancelQueries(i).catch(() => {}),
            e.queryClient.setQueriesData(i, (e) =>
              null == e ? e : { ...e, items: e.items.filter((e) => !n.has(e.page_id)) },
            ))
          let c = {
            queryKey: ["space", "home-page-search", r, y],
            predicate: ({ queryKey: e }) => null == e[5] || e[5] === S?.id || e[5] === P?.drive_space_id,
          }
          return (
            e.queryClient.cancelQueries(c).catch(() => {}),
            e.queryClient.setQueriesData(c, (e) =>
              null == e
                ? e
                : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => !n.has(e.page_id)) })) },
            ),
            (O = !0),
            "page" === t.kind
              ? (0, v.rG)(e, w)
              : Promise.allSettled([
                  e.query.invalidate(f.spacesQuery$),
                  e.queryClient.invalidateQueries({ queryKey: ["library-api", r, y, "browse"] }),
                  ...(null == S ? [(0, f.invalidateSpacePages)(e)] : []),
                  e.queryClient.invalidateQueries({ queryKey: ["space", "archived-spaces", r, y] }),
                ]),
            { outcome: a ?? "completed" }
          )
        } catch (a) {
          if ((C?.finish(F.aborted ? "unobserved" : "failure"), E?.aborted)) return
          throw ("space" === t.kind && I() && e.query.invalidate(f.spacesQuery$).catch(() => {}), a)
        } finally {
          if ((C?.dispose(), R.stop(), N && !E?.aborted)) {
            let n = {
              ...M,
              committed: !0,
              includeDescendants: !U,
              listing: O ? M.listing : void 0,
              pageIds: q,
              candidatePageIds: "page" === t.kind ? D : void 0,
            }
            ;(e.set(_.aP, w, (e) => e.map((e) => (e === M ? n : e))),
              "page" === t.kind && "completed" === a && I() && null != n.search && (0, v.d_)(e, w, t.id, D, n.search),
              null != E &&
                null != n.search &&
                e.get(_.aP, w).includes(n) &&
                ((0, m.ex)(e, r, n.pageIds), (0, x.KR)(e, w, n.search, n.pageIds, E)))
          } else N || E?.aborted || e.set(_.aP, w, (e) => e.filter((e) => e !== M))
        }
      },
    }))
    a.d(t, {}, { z: w })
  },
  gTGF(e, t, a) {
    var r = a("Bl5Q"),
      n = a("DBCl"),
      i = a("lVIb"),
      s = a("cU41"),
      l = a("USwR"),
      o = a("G3Hy"),
      c = a("MvVt"),
      d = a("fJPN"),
      u = a("HPVN"),
      p = a("Wbls"),
      g = a("tv8P"),
      m = a("JcZO"),
      f = a("kK7d"),
      h = a("eShZ"),
      y = a("AJrU"),
      v = a("MCKR"),
      b = a("PVyj")
    async function x(e, t) {
      let a = AbortSignal.any([t, AbortSignal.timeout(5e3)])
      try {
        let r = await (0, n._qC)(
          f.CodexRequest.safeGet("/pages/{page_id}", {
            parameters: {
              path: { page_id: e },
              query: { include_content: !1, include_document_bootstrap: !1, include_checkpoint: !1 },
            },
            expectedErrorStatuses: [403, 404, 410],
            retry: !1,
            signal: a,
          }),
          a,
        )
        if ((t.throwIfAborted(), r.metadata.page_id !== e)) return { status: "unknown" }
        return null == r.metadata.deleted_at
          ? { status: "active", page: r.metadata }
          : { status: "archived", error: new h.FetchError("Page archived", 404, "page_trashed") }
      } catch (e) {
        if (
          (t.throwIfAborted(),
          e instanceof h.FetchError &&
            ((404 === e.status && "page_trashed" === e.errorCode) ||
              (410 === e.status && "page_deleted" === e.errorCode)))
        )
          return { status: "archived", error: e }
        return { status: "unknown" }
      }
    }
    function _(e, t, a, r, n, i) {
      ;((0, g.evictCachedSpacePages)(e, [a], t.accountId, {
        includeDescendants: !1,
        pauseHomeSearch: !1,
        unavailablePageIds: [a],
        readError: r,
        owner: n,
        isCurrent: i,
      }),
        (0, c.nL)(e, new Set([a])),
        (0, m.Us)(e, new Set([a])))
    }
    function w(e, t, a, r) {
      return !a.signal.aborted && e.get(b.aP, t).some((e) => e.search === a && e.candidatePageIds?.has(r))
    }
    async function I(e, t, a, n, i) {
      let s = e.queryClient
        .getQueryCache()
        .findAll({
          queryKey: ["space", "page", t.accountId],
          type: "active",
          predicate: ({ queryKey: e }) =>
            (4 === e.length || (5 === e.length && "legacy-http" === e[4])) &&
            "string" == typeof e[3] &&
            e[3] !== a &&
            n.has(e[3]),
        })
      if (0 === s.length) return
      let l = (0, g.watchSpaceAccount)(e, t.accountId, t.userId),
        o = AbortSignal.any([l.signal, i.signal, AbortSignal.timeout(5e3)])
      try {
        await (0, y.nQ)(
          i,
          (0, r.Ay)(
            [...new Set(s.map(({ queryKey: e }) => e[3]).filter((e) => "string" == typeof e))],
            async (a) => {
              let r = await x(a, o)
              ;(o.throwIfAborted(),
                "archived" === r.status && w(e, t, i, a) && _(e, t, a, r.error, o, () => w(e, t, i, a)))
            },
            { concurrency: 4, signal: o },
          ),
        )
      } catch {
      } finally {
        l.stop()
      }
    }
    function S(e, t) {
      let { accountId: a, userId: r, pageId: n, operationId: i } = t
      e.set(b.aP, { accountId: a, userId: r }, (t) => {
        if (t.some((e) => e.operationId === i)) return t
        let s = { id: n, operationId: i, committed: !1, search: new AbortController(), pageIds: new Set([n]) }
        return [...t, { ...s, pageIds: (0, b.p9)(P(e, a, r), [s]) }]
      })
    }
    function A(e, { accountId: t, userId: a }) {
      let r = e.queryClient
      Promise.allSettled([
        (0, g.invalidateSpacePages)(e),
        r.invalidateQueries({ queryKey: ["space", "archived-pages", t, a] }),
        r.invalidateQueries({ queryKey: ["library-api", t, a, "browse"] }),
        r.invalidateQueries({ queryKey: ["space", "home-page-search", t, a] }),
        r.invalidateQueries({ queryKey: ["space", "personal-recents", t, a] }),
        r.invalidateQueries({
          queryKey: ["space"],
          predicate: ({ queryKey: e }) =>
            e[2] === t &&
            e[4] === a &&
            ("collection" === e[1] || "page-children" === e[1] || "drive-page-search" === e[1]),
        }),
        r.invalidateQueries({
          queryKey: ["chatgpt-global-search"],
          predicate: ({ meta: e }) => e?.pageAccountId === t && e.pageUserId === a,
        }),
      ])
    }
    function P(e, t, a) {
      let r = [
        ...((0, g.getCachedVisibleSpacePages)(e)?.items ?? []),
        ...(0, l.$f)(e, t, a).flatMap((e) => [...(null == e.parent ? [] : [e.parent]), ...e.items]),
        ...e.queryClient
          .getQueriesData({
            queryKey: ["space", "page", t],
            predicate: ({ queryKey: e }) => 4 === e.length || ("ancestry" === e[4] && e[5] === a),
          })
          .flatMap(([, e]) => (null == e ? [] : [e.metadata])),
        ...e.queryClient
          .getQueriesData({ queryKey: ["space", "home-page-search", t, a] })
          .flatMap(([, e]) => (null == e ? [] : e.pages.flatMap((e) => e.items))),
      ]
      for (let { queryKey: n } of e.queryClient.getQueryCache().findAll({ queryKey: ["space"] }))
        n[2] === t &&
          n[4] === a &&
          "string" == typeof n[3] &&
          (("collection" === n[1] || "page-children" === n[1]) &&
            r.push(
              ...(e.get(o.H, {
                accountId: t,
                userId: a,
                branchId: n[3],
                kind: "collection" === n[1] ? "space" : "children",
              })?.items ?? []),
            ),
          "drive-page-search" === n[1] && r.push(...(e.queryClient.getQueryData(n)?.items ?? [])))
      return [...r, ...Object.values(e.get(u.j)?.[t] ?? {}).filter((e) => "page_id" in e)]
    }
    a.d(
      t,
      {},
      {
        Aw: _,
        H7: w,
        Hw: S,
        Xn: function (e, t) {
          let a = { accountId: t.accountId, userId: t.userId },
            r = e.get(b.aP, a).find((e) => e.operationId === t.operationId)
          return null != r && !r.committed && (r.search?.abort(), e.set(b.aP, a, (e) => e.filter((e) => e !== r)), !0)
        },
        bp: x,
        d_: I,
        rG: A,
        x3: P,
        zm: async function (e, t, a) {
          let { accountId: r, userId: n, operationId: l } = t,
            o = { accountId: r, userId: n }
          S(e, t)
          let u = e.get(b.aP, o).find((e) => e.operationId === l)
          if (null == u || u.committed || null == u.search) return
          let f = AbortSignal.any([a, u.search.signal]),
            h = new Set([t.pageId]),
            y = new Set([...u.pageIds, ...(0, b.p9)(P(e, r, n), [u])])
          ;(await Promise.all([
            (0, i.JE)(e, o, h, { refetch: !1, owner: f }),
            (0, s.Y9)(e.queryClient, o, new Set([...h].map((e) => `page:${e}`)), { includeTrash: !1, owner: f }),
          ]),
            a.throwIfAborted(),
            !f.aborted &&
              e.get(b.aP, o).includes(u) &&
              ((0, g.evictCachedSpacePages)(e, [...h], r, { pauseHomeSearch: !1, includeDescendants: !1, owner: f }),
              (0, d.qV)(e, o, (e) => (null == e.file && h.has(e.id) ? null : e)),
              (0, p.ex)(e, r, h),
              (0, c.nL)(e, h),
              (0, m.Us)(e, h),
              e.set(b.aP, o, (e) =>
                e.map((e) =>
                  e === u ? { ...u, committed: !0, includeDescendants: !1, pageIds: h, candidatePageIds: y } : e,
                ),
              ),
              A(e, o),
              I(e, o, t.pageId, y, u.search),
              (0, v.KR)(e, o, u.search, h)))
        },
      },
    )
  },
  yrMs(e, t, a) {
    var r = a("suf3"),
      n = a("qmMi"),
      i = a("DBCl"),
      s = a("ASxG"),
      l = a("SPnB"),
      o = a("OWtl"),
      c = a("kpIY"),
      d = a("Nwp9"),
      u = a("kK7d"),
      p = a("eShZ"),
      g = a("NRR1"),
      m = a("PzpM"),
      f = a("PcMx"),
      h = a("gTGF"),
      y = a("jmyB")
    class v extends Error {
      constructor() {
        super("page_archive_unconfirmed")
      }
    }
    class b extends Error {
      operationId
      canRetry
      constructor(e, t = !1) {
        ;(super("space_archive_unconfirmed"), (this.operationId = e), (this.canRetry = t))
      }
    }
    let x = (0, n.vU)(o.u, (e, { scope: t }) => ({
        queryKey: ["pending-space-archive-status", e],
        queryFn: async ({ signal: a }) => {
          let { accountId: r, userId: n } = e,
            i = (0, g.hI)(t, r, n),
            s = AbortSignal.any([a, i.signal])
          try {
            return await N(e, s, () => {
              ;((0, m.WF)(t, e.spaceId),
                Promise.allSettled([
                  t.queryClient.invalidateQueries({ queryKey: ["space", "archived-spaces", r, n] }),
                  t.queryClient.invalidateQueries({ queryKey: ["library-api", r, n, "browse"] }),
                ]))
            })
          } finally {
            i.stop()
          }
        },
        refetchInterval: (t) =>
          "attemptId" in e && "success" === t.state.status && t.state.data?.status === "superseded" && 5e3,
        refetchOnMount: "always",
        staleTime: 0,
        retry: !1,
      })),
      _ = "page-archive-operations-v1",
      w = s.Ikc({
        accountId: s.YjP(),
        userId: s.YjP().nullable(),
        pageId: s.YjP(),
        operationId: s.YjP(),
        pageTitle: s.YjP().nullable().optional(),
      }),
      I = s.g1P(s.YjP(), w).catch({}),
      S = (0, d.m3)(_, I.parse(void 0), { coerceStoredValue: (e) => I.parse(e) }),
      A = (0, n.un)(o.u, ({ get: e }) => {
        let t = e(g.DO),
          a = e(l.chatGptAuthenticatedUserId$)
        return Object.values(e(S)).filter((e) => e.accountId === t && e.userId === a)
      })
    function P({ accountId: e, userId: t, pageId: a }) {
      return JSON.stringify([e, t, a])
    }
    function C(e) {
      ;(0, c.EG)(_, { entries: { [P(e)]: { delete: !0, expectedValue: e } } })
    }
    function j(e, t, a) {
      let r = AbortSignal.any([a, AbortSignal.timeout(8e3)])
      return (0, i._qC)(
        u.CodexRequest.safeGet("/pages/{page_id}/archive-status", {
          parameters: { path: { page_id: e }, query: { operation_id: t } },
          signal: r,
          retry: !1,
        }),
        r,
      )
    }
    let E = (0, n.vU)(o.u, (e, { scope: t }) => ({
      queryKey: ["pending-page-archive-status", e],
      queryFn: async ({ signal: a }) => {
        let { accountId: r, userId: n, pageId: i, operationId: s } = e,
          l = (0, g.hI)(t, r, n),
          o = AbortSignal.any([a, l.signal])
        try {
          let a = await j(i, s, o)
          if ((o.throwIfAborted(), a.operation_id !== s)) throw new v()
          if ("archiving" === a.status) (0, h.Hw)(t, e)
          else if ("completed" === a.status) (await (0, h.zm)(t, e, o), o.throwIfAborted(), C(e))
          else {
            let r = (0, h.Xn)(t, e)
            "superseded" === a.status || "expired" === a.status ? (C(e), (0, h.rG)(t, e)) : r && (0, h.rG)(t, e)
          }
          return a
        } catch (a) {
          throw (o.throwIfAborted(), U(a) && !M(a) && (0, h.Xn)(t, e) && (0, h.rG)(t, e), a)
        } finally {
          l.stop()
        }
      },
      refetchInterval: (e) =>
        !!(e.state.data?.status === "archiving" && (!U(e.state.error) || M(e.state.error))) && 5e3,
      refetchOnMount: "always",
      staleTime: 0,
      retry: !1,
    }))
    async function T(e, t) {
      let a = new AbortController(),
        r = AbortSignal.any([t, a.signal]),
        n = setTimeout(() => a.abort(), 6e3)
      try {
        for (let t = 0; t < 3; t += 1) {
          let a
          try {
            for (let t = 0; t < 2; t += 1) {
              r.throwIfAborted()
              let t = await (0, i._qC)(
                u.CodexRequest.safeGet("/pages/archived", {
                  parameters: { query: { cursor: a, limit: 50 } },
                  signal: r,
                  retry: !1,
                }),
                r,
              )
              if ((r.throwIfAborted(), t.items.some((t) => t.page_id === e))) return !0
              if (((a = t.next_cursor ?? void 0), null == a)) break
            }
          } catch (e) {
            if (!q(e)) break
          }
          if (t < 2) {
            let e
            try {
              await (0, i._qC)(
                new Promise((t) => {
                  e = setTimeout(t, 500)
                }),
                r,
              )
            } finally {
              clearTimeout(e)
            }
          }
        }
      } catch {
      } finally {
        clearTimeout(n)
      }
      return (t.throwIfAborted(), !1)
    }
    function M(e) {
      return (
        e instanceof p.FetchError &&
        404 === e.status &&
        null == e.errorCode &&
        /^\s*\{\s*"detail"\s*:\s*"Not Found"\s*\}\s*$/.test(e.message)
      )
    }
    async function k(e, t) {
      let a = AbortSignal.any([t, AbortSignal.timeout(3e4)])
      a.throwIfAborted()
      let r = !1
      try {
        ;(await (0, i._qC)(
          u.CodexRequest.safePost("/pages/{page_id}/archive", {
            parameters: { path: { page_id: e } },
            signal: a,
            retry: !1,
          }),
          a,
        ),
          (r = !0))
      } catch (a) {
        t.throwIfAborted()
        let e = f.F.from(a, "page")
        if (null != e) throw e
        if (
          !(a instanceof Error && "TimeoutError" === a.name) &&
          !q(a) &&
          !(a instanceof p.FetchError && 404 === a.status)
        )
          throw a
      }
      if (await T(e, t)) return "archived"
      if (r) return "scheduled"
      throw new v()
    }
    function q(e) {
      return (
        e instanceof p.FetchError && ("network" === e.errorKind || [0, 408, 429, 500, 502, 503, 504].includes(e.status))
      )
    }
    async function N(e, t, a) {
      t.throwIfAborted()
      try {
        let r = await u.CodexRequest.safeGet("/spaces/{space_id}/archive-status", {
          parameters: {
            path: { space_id: e.spaceId },
            query: "operationId" in e ? { operation_id: e.operationId } : { attempt_id: e.attemptId },
          },
          signal: t,
          retry: !1,
          expectedErrorStatuses: [403, 404, 410],
        })
        ;(t.throwIfAborted(), "completed" === r.status && a?.())
        let n = "completed" === r.status || "superseded" === r.status || ("failed" === r.status && !1 === r.retryable)
        if ("attemptId" in e && null != r.operation_id && !n) {
          let { accountId: t, userId: a, spaceId: n } = e
          ;((0, y.P)({ accountId: t, userId: a, spaceId: n, operationId: r.operation_id }, !0), (0, y.P)(e, !1))
        } else
          n && ("operationId" in e || null != r.operation_id || Date.now() - e.submittedAt >= 6e4) && (0, y.P)(e, !1)
        return r
      } catch (a) {
        throw (!t.aborted && O(a) && (0, y.P)(e, !1), a)
      }
    }
    function O(e) {
      return e instanceof p.FetchError && 410 === e.status && "space_archive_superseded" === e.errorCode
    }
    function U(e) {
      return e instanceof p.FetchError && [401, 403, 404].includes(e.status)
    }
    a.d(
      t,
      {},
      {
        Aq: v,
        E2: x,
        Eh: A,
        GA: U,
        H3: E,
        NW: async function (e, t, a, r, n, s) {
          let l,
            o,
            d = { ...t, pageId: a },
            g = P(d),
            m = e.get(S)[g],
            y = n ?? m?.operationId
          try {
            l = await j(a, y, r)
          } catch (e) {
            if ((r.throwIfAborted(), null == y && M(e))) return k(a, r)
            throw e
          }
          if ((r.throwIfAborted(), null != y && l.operation_id !== y)) throw new v()
          let b = l.operation_id ?? void 0
          function x() {
            ;(r.throwIfAborted(), null != o && ((0, h.Xn)(e, o), C(o)))
          }
          if (
            (null != b &&
              (o = m?.operationId === b ? m : { ...d, operationId: b, ...(null == s ? {} : { pageTitle: s }) }),
            null != o &&
              null == y &&
              "completed" !== l.status &&
              (0, c.EG)(_, { entries: { [g]: { value: o, createOnly: !0 } } }),
            "ready" === l.status || "failed" === l.status)
          ) {
            let e = AbortSignal.any([r, AbortSignal.timeout(3e4)])
            try {
              let t = await (0, i._qC)(
                u.CodexRequest.safePost("/pages/{page_id}/archive-operation", {
                  parameters: { path: { page_id: a }, query: { operation_id: b } },
                  signal: e,
                  retry: !1,
                }),
                e,
              )
              if ((r.throwIfAborted(), null == t || (t.operation_id ?? void 0) !== b)) throw new v()
              l = t
            } catch (t) {
              if ((r.throwIfAborted(), null == b && M(t))) return k(a, r)
              let e = f.F.from(t, "page")
              if (null != e) throw ("ready" === l.status && null == y && x(), e)
              if (
                !(t instanceof v) &&
                !(t instanceof Error && "TimeoutError" === t.name) &&
                !q(t) &&
                !(t instanceof p.FetchError && [404, 409].includes(t.status))
              )
                throw t
              if (null == b) {
                if (await T(a, r)) return "archived"
                throw new v()
              }
              try {
                if ((l = await j(a, b, r)).operation_id !== b) throw new v()
              } catch {
                throw (r.throwIfAborted(), new v())
              }
            }
          }
          if ("completed" === l.status) return (x(), "completed")
          if ("archiving" === l.status && null != o)
            return (
              await e.query.cancel(E, o),
              r.throwIfAborted(),
              (0, h.Hw)(e, o),
              e.query.setData(E, o, l),
              "scheduled"
            )
          if ("superseded" === l.status) throw (x(), (0, h.rG)(e, t), Error("page_archive_superseded"))
          if (("expired" === l.status && (x(), (0, h.rG)(e, t)), "failed" === l.status || "paused" === l.status))
            throw (null != o && (0, h.Xn)(e, o) && (0, h.rG)(e, t), Error("page_archive_failed"))
          throw new v()
        },
        dn: b,
        sR: M,
        vY: async function (e, t, a, n, s) {
          let l =
            s?.operationId ??
            (await (async function (e, t, a) {
              let r = { path: { space_id: t } }
              a.throwIfAborted()
              let n = { ...e, spaceId: t, attemptId: crypto.randomUUID(), submittedAt: Date.now() }
              ;(0, y.P)(n, !0)
              try {
                let a = await u.CodexRequest.safePost("/spaces/{space_id}/archive", {
                  parameters: { ...r, query: { attempt_id: n.attemptId } },
                  retry: !1,
                })
                return (
                  null != a && (0, y.P)({ ...e, spaceId: t, operationId: a.operation_id }, !0),
                  (0, y.P)(n, !1),
                  a?.operation_id
                )
              } catch (t) {
                let e = f.F.from(t, "space")
                if (null != e) throw ((0, y.P)(n, !1), e)
                if (
                  (t instanceof p.FetchError &&
                    ([401, 403].includes(t.status) || (404 === t.status && "space_not_found" === t.errorCode)) &&
                    (0, y.P)(n, !1),
                  !M(t))
                )
                  throw t
                ;(a.throwIfAborted(), (0, y.P)(n, !1))
                try {
                  await u.CodexRequest.safeDelete("/spaces/{space_id}", { parameters: r, retry: !1 })
                } catch (e) {
                  throw f.F.from(e, "space") ?? e
                }
                return
              }
            })(t, a, n))
          if (null == l) return
          let o = { ...t, spaceId: a, operationId: l }
          if ((n.throwIfAborted(), s?.retry)) {
            try {
              await u.CodexRequest.safePost("/spaces/{space_id}/archive/{operation_id}/retry", {
                parameters: { path: { space_id: a, operation_id: l } },
                signal: n,
                retry: !1,
                expectedErrorStatuses: [403, 404, 410],
              })
            } catch (e) {
              throw (!n.aborted && O(e) && (0, y.P)(o, !1), f.F.from(e, "space") ?? e)
            }
            n.throwIfAborted()
          }
          let c = 0,
            d = new r.$(e.queryClient, {
              queryKey: ["space-archive-status", t.accountId, t.userId, a, l],
              queryFn: async ({ signal: e }) => {
                try {
                  let t = await N(o, AbortSignal.any([n, e]))
                  return ((c = 0), t)
                } catch (e) {
                  throw ((c += 1), e)
                }
              },
              refetchInterval: () => 5e3 * 2 ** Math.min(4, Math.max(0, c - 1)),
              refetchIntervalInBackground: !0,
              refetchOnWindowFocus: !0,
              refetchOnReconnect: !0,
              retry: !1,
              gcTime: 0,
              staleTime: 0,
            }),
            g = (0, i.udX)(),
            m = setTimeout(() => g.resolve("unconfirmed"), 6e4),
            h = d.subscribe(({ data: e, error: t, isFetching: a }) => {
              !a &&
                (null != e && "archiving" !== e.status
                  ? "failed" === e.status && !1 !== e.retryable
                    ? g.resolve(e.retryable ? "retryable" : "unconfirmed")
                    : g.resolve("completed" === e.status ? "completed" : "failed")
                  : O(t)
                    ? g.resolve("failed")
                    : U(t)
                      ? g.resolve("unconfirmed")
                      : c >= 3 && g.resolve("unconfirmed"))
            })
          try {
            let e = await (0, i._qC)(g.promise, n)
            if ((n.throwIfAborted(), "unconfirmed" === e || "retryable" === e)) throw new b(l, "retryable" === e)
            if ("failed" === e) throw Error("Space archive did not complete")
          } finally {
            ;(clearTimeout(m), h())
          }
        },
      },
    )
  },
  AE4U(e, t, a) {
    var r = a("qmMi"),
      n = a("SPnB"),
      i = a("Kwur"),
      s = a("NRR1"),
      l = a("e1xH"),
      o = a("OWtl"),
      c = a("rvFo")
    let d = (0, r.RD)(o.u, ({ get: e, scope: t }) => {
      let a = e(s.DO),
        r = e(n.chatGptAuthenticatedUserId$)
      return {
        queryKey: ["space", "policy", a, r],
        enabled: e(l.pagesEnabled$) && null != a,
        staleTime: 5 * c.D.ONE_MINUTE,
        retry: !1,
        queryFn: async ({ signal: e }) => {
          if (null == a) throw Error("space_account_unavailable")
          let n = (0, s.hI)(t, a, r)
          try {
            return await i.Request.safeGet("/spaces/policy", {
              signal: AbortSignal.any([e, n.signal]),
              expectedErrorStatuses: [404],
            })
          } finally {
            n.stop()
          }
        },
      }
    })
    a.d(t, {}, { R: d })
  },
  MCKR(e, t, a) {
    var r = a("qmMi"),
      n = a("e9bM"),
      i = a("DBCl"),
      s = a("SPnB"),
      l = a("lVIb"),
      o = a("cU41"),
      c = a("NRR1"),
      d = a("fJPN"),
      u = a("tv8P"),
      p = a("OWtl"),
      g = a("kK7d"),
      m = a("eShZ"),
      f = a("AJrU"),
      h = a("PVyj")
    let y = (0, r.T1)(
      p.u,
      (e, { scope: t }) => {
        let a = new AbortController()
        return (0, n.mb)(t, { read: () => a.signal, getServerSnapshot: () => a.signal }).own(a.signal, () => a.abort())
      },
      { autoDispose: !1 },
    )
    function v(e) {
      return {
        queryKey: ["chatgpt-global-search"],
        predicate: ({ meta: t }) => t?.pageAccountId === e.accountId && t.pageUserId === e.userId,
      }
    }
    a.d(
      t,
      {},
      {
        KR: async function (e, t, a, r, n = e.get(y, "search")) {
          let p = (0, c.hI)(e, t.accountId, t.userId),
            b = AbortSignal.any([n, a.signal]),
            x = AbortSignal.timeout(6e4),
            _ = AbortSignal.any([b, x]),
            w = AbortSignal.any([p.signal, _]),
            I = new Set(r)
          try {
            for (let e = 1e3; !w.aborted && I.size > 0; e = Math.min(1e4, 2 * e)) {
              let t,
                a = I.values().next().value
              if (null == a) break
              try {
                ;(await (0, i._qC)(
                  new Promise((a) => {
                    t = setTimeout(a, e)
                  }),
                  w,
                ),
                  w.throwIfAborted())
                let r = await (0, i._qC)(
                  g.CodexRequest.safeGet("/pages/{page_id}", {
                    parameters: {
                      path: { page_id: a },
                      query: { include_content: !1, include_document_bootstrap: !1, include_checkpoint: !1 },
                    },
                    expectedErrorStatuses: [403, 404, 410],
                    retry: !1,
                    signal: w,
                  }),
                  w,
                )
                ;(I.delete(a), null == r.metadata.deleted_at && I.add(a))
              } catch (e) {
                ;(I.delete(a),
                  (e instanceof m.FetchError &&
                    ((410 === e.status && "page_deleted" === e.errorCode) ||
                      (404 === e.status && "page_trashed" === e.errorCode))) ||
                    I.add(a))
              } finally {
                clearTimeout(t)
              }
            }
            p.signal.aborted &&
              !_.aborted &&
              (await new Promise((e) => _.addEventListener("abort", () => e(), { once: !0 })))
          } finally {
            p.stop()
          }
          if (b.aborted || (await (0, f.sI)(a, x), b.aborted || !e.get(h.aP, t).some((e) => e.search === a))) return
          let S = ["space", "pages", t.accountId, t.userId],
            A = { queryKey: S, exact: !0 },
            P = { queryKey: ["space", "personal-recents", t.accountId, t.userId] }
          if (
            (await Promise.all([
              (0, l.JE)(e, t, r, { refetch: !1, owner: b }),
              e.queryClient.cancelQueries(A),
              e.queryClient.cancelQueries(P),
            ]),
            b.aborted)
          )
            return
          let C = e.get(c.DO) === t.accountId && e.get(s.chatGptAuthenticatedUserId$) === t.userId,
            j = e.get(h.aP, t).find((e) => e.search === a),
            E = new Set([...(j?.pageIds ?? [])].filter((e) => !I.has(e)))
          if (
            (e.queryClient.setQueryData(S, (e) =>
              null == e ? e : { ...e, scan: void 0, items: e.items.filter((e) => !E.has(e.page_id)) },
            ),
            (0, d.qV)(e, t, (e) => (null == e.file && E.has(e.id) ? null : e)),
            j?.operationId != null)
          ) {
            if (
              (await (0, o.Y9)(e.queryClient, t, new Set([...E].map((e) => `page:${e}`)), {
                includeTrash: !1,
                owner: b,
              }),
              b.aborted)
            )
              return
            e.queryClient.invalidateQueries({
              queryKey: ["library-api", t.accountId, t.userId, "browse"],
              refetchType: C ? "active" : "none",
            })
          }
          ;(C &&
            null != j &&
            !1 !== j.includeDescendants &&
            E.size === j.pageIds.size &&
            (0, u.evictCachedSpacePages)(e, [...j.pageIds], t.accountId, { pauseHomeSearch: !1 }),
            e.set(h.aP, t, (e) => e.filter((e) => e.search !== a)),
            e.queryClient.invalidateQueries({ ...A, refetchType: C ? "active" : "none" }),
            e.queryClient.invalidateQueries({ ...P, refetchType: C ? "active" : "none" }),
            e.queryClient.invalidateQueries({ ...v(t), refetchType: C ? "active" : "none" }))
        },
        Wz: y,
        t9: function (e, t, a, r) {
          let n = new Set(
            a
              .filter((e) => null != e.search && [...r].some((t) => e.pageIds.has(t) || e.candidatePageIds?.has(t)))
              .map((e) => e.search),
          )
          if (0 === n.size) return
          let i = e.get(h.aP, t),
            s = !1,
            l = i.flatMap((e) => {
              if (null == e.search || !n.has(e.search)) return [e]
              if (r.has(e.id)) return (e.search.abort(), [])
              let t = new Set([...e.pageIds].filter((e) => !r.has(e))),
                a = null == e.candidatePageIds ? void 0 : new Set([...e.candidatePageIds].filter((e) => !r.has(e)))
              return t.size === e.pageIds.size && a?.size === e.candidatePageIds?.size
                ? [e]
                : ((s = !0), [{ ...e, pageIds: t, candidatePageIds: a }])
            })
          if ((e.set(h.aP, t, l), s)) {
            let a = v(t)
            e.queryClient.cancelQueries(a).then(() => e.queryClient.invalidateQueries(a))
          }
        },
      },
    )
  },
  jmyB(e, t, a) {
    var r = a("qmMi"),
      n = a("ASxG"),
      i = a("SPnB"),
      s = a("OWtl"),
      l = a("kpIY"),
      o = a("Nwp9"),
      c = a("NRR1")
    let d = n.Ikc({ accountId: n.YjP(), userId: n.YjP().nullable(), spaceId: n.YjP(), operationId: n.YjP() }),
      u = d.omit({ operationId: !0 }).extend({ attemptId: n.YjP(), submittedAt: n.aig() }),
      p = "spaces-pending-archives-v1",
      g = n.g1P(n.YjP(), d).catch({}),
      m = (0, o.m3)(p, g.parse(void 0), { coerceStoredValue: (e) => g.parse(e) }),
      f = "spaces-archive-attempts-v1",
      h = n.g1P(n.YjP(), u).catch({}),
      y = (0, o.m3)(f, h.parse(void 0), { coerceStoredValue: (e) => h.parse(e) }),
      v = (0, r.un)(s.u, ({ get: e }) => {
        let t = e(c.DO),
          a = e(i.chatGptAuthenticatedUserId$)
        return [...Object.values(e(m)), ...Object.values(e(y))].filter((e) => e.accountId === t && e.userId === a)
      })
    a.d(
      t,
      {},
      {
        P: function (e, t) {
          let { accountId: a, userId: r, spaceId: n } = e,
            i = JSON.stringify([a, r, n, "operationId" in e ? e.operationId : e.attemptId])
          ;(0, l.EG)("operationId" in e ? p : f, { entries: { [i]: t ? { value: e } : null } })
        },
        X: v,
      },
    )
  },
  MaNR(e, t, a) {
    var r = a("ABep"),
      n = a("Qgfj"),
      i = a("oyxz"),
      s = a("SGsN"),
      l = a("svjy"),
      o = a("RZZB")
    let c = (0, n.zR)({
      id: "codex.space.page.archiveScheduled",
      defaultMessage: "Moving to Trash. This can take a moment.",
    })
    function d({ documentType: e = "page", pageTitle: t, multiple: a = !1 }) {
      return {
        pendingTitle: (0, r.jsx)(i.A, {
          id: "codex.space.page.archivePendingSelection.byDocumentType",
          defaultMessage:
            "{multiple, select, true {Deleting multiple documents} other {{documentType, select, granola_presentation {{named, select, true {Deleting \u201C{title}\u201D slide} other {Deleting slide}}} granola_workbook {{named, select, true {Deleting \u201C{title}\u201D sheet} other {Deleting sheet}}} other {{named, select, true {Deleting \u201C{title}\u201D page} other {Deleting page}}}}}}",
          values: { documentType: e, multiple: a, named: !!t?.trim(), title: t ?? "" },
        }),
        successTitle: (0, r.jsx)(i.A, {
          id: "codex.space.page.archiveSuccessSelection.byDocumentType",
          defaultMessage:
            "{multiple, select, true {Documents deleted} other {{documentType, select, granola_presentation {{named, select, true {\u201C{title}\u201D slide deleted} other {Slide deleted}}} granola_workbook {{named, select, true {\u201C{title}\u201D sheet deleted} other {Sheet deleted}}} other {{named, select, true {\u201C{title}\u201D page deleted} other {Page deleted}}}}}}",
          values: { documentType: e, multiple: a, named: !!t?.trim(), title: t ?? "" },
        }),
      }
    }
    a.d(
      t,
      {},
      {
        uX: function (e, t = {}) {
          let a = (0, o.W)(e, d(t), "page-archive-toast")
          return {
            close: a.close,
            scheduled: () => {
              ;(a.close(), e.get(s.Id).info(e.get(l.g).formatMessage(c)))
            },
            complete: (e = t.multiple) => a.complete(d({ ...t, multiple: e })),
          }
        },
      },
    )
  },
  PzpM(e, t, a) {
    var r = a("qmMi"),
      n = a("ASxG"),
      i = a("SPnB"),
      s = a("NRR1"),
      l = a("OWtl"),
      o = a("kpIY"),
      c = a("Nwp9")
    let d = "space-setups-v1",
      u = "space-setup-retirements-v1",
      p = n.Ikc({
        accountId: n.YjP(),
        userId: n.YjP().nullable(),
        localPageId: n.YjP(),
        name: n.YjP(),
        backingType: n.euz("drive"),
        appearance: n.Ikc({ emoji: n.YjP().nullable().optional(), theme: n.YjP().nullable().optional() }).optional(),
        space: n.Ikc({ spaceId: n.YjP(), rootPageId: n.YjP() }).optional(),
        rootInitialized: n.zMY().optional(),
        rootInitialization: n.euz("server").optional(),
        invitations: n.YOg(
          n.Ikc({
            recipient: n.gMt("recipient_type", [
              n.Ikc({
                recipient_type: n.euz("principal"),
                principal_type: n.k5n(["user", "group", "workspace"]).optional(),
                principal_id: n.YjP(),
              }),
              n.Ikc({ recipient_type: n.euz("email"), email: n.Rpp() }),
            ]),
            label: n.YjP(),
            secondaryLabel: n.YjP().optional(),
            roleId: n.k5n([
              "role-library-folder-editor",
              "role-library-folder-viewer",
              "role-library-folder-commenter",
            ]),
            status: n.k5n(["pending", "shared", "failed"]),
          }),
        ),
      }),
      g = (0, c.m3)(
        d,
        {},
        {
          coerceStoredValue: (e) =>
            Object.fromEntries(
              Object.entries(n.g1P(n.YjP(), n.L5J()).safeParse(e).data ?? {}).flatMap(([e, t]) => {
                let a = p.safeParse(t).data
                return null == a ? [] : [[e, a]]
              }),
            ),
        },
      ),
      m = (0, c.m3)(u, {}, { coerceStoredValue: (e) => n.g1P(n.YjP(), n.zMY()).safeParse(e).data ?? {} })
    function f(e) {
      return JSON.stringify([e.accountId, e.userId, e.localPageId])
    }
    let h = (0, r.un)(l.u, ({ get: e }) => {
      let t = e(s.DO),
        a = e(i.chatGptAuthenticatedUserId$),
        r = e(m)
      return Object.values(e(g)).filter((e) => e.accountId === t && e.userId === a && !0 !== r[f(e)])
    })
    function y(e, t, a = !1) {
      ;((0, o.EG)(d, { entries: { [t.localPageId]: { value: t, updateOnly: a } } }), e.set(g, (0, o.TB)(d, {})))
    }
    function v(e, t) {
      ;((0, o.EG)(d, { entries: { [t]: null } }), e.set(g, (0, o.TB)(d, {})))
    }
    function b(e, t) {
      let a = e.get(h).find((e) => e.localPageId === t)
      null != a && ((0, o.EG)(u, { entries: { [f(a)]: { value: !0 } } }), e.set(m, (0, o.TB)(u, {})), v(e, t))
    }
    a.d(
      t,
      {},
      {
        $q: function (e, t) {
          y(e, t, !0)
        },
        Bz: y,
        FT: v,
        WF: function (e, t) {
          for (let a of e.get(h)) a.space?.spaceId === t && b(e, a.localPageId)
        },
        pu: b,
        z$: h,
      },
    )
  },
  dc3a(e, t, a) {
    var r = a("DBCl"),
      n = a("SPnB"),
      i = a("jAir"),
      s = a("tv8P"),
      l = a("eShZ")
    a.d(
      t,
      {},
      {
        U9: async function (e) {
          let t = e.get(s.spaceAccountId$),
            a = e.get(n.chatGptAuthenticatedUserId$)
          await Promise.all([
            (0, s.invalidateSpacePages)(e),
            ...[i.vy, i.DT].map((r) =>
              e.queryClient.invalidateQueries({ queryKey: [...r, t], predicate: ({ queryKey: e }) => e[4] === a }),
            ),
            e.queryClient.invalidateQueries({ queryKey: ["library-api", t, a, "browse"] }),
          ])
        },
        cQ: function (e) {
          return (
            (e instanceof Error && "TimeoutError" === e.name) ||
            (e instanceof l.FetchError &&
              ("network" === e.errorKind || [0, 408, 429, 500, 502, 503, 504].includes(e.status)))
          )
        },
        f0: async function (e, t) {
          let a
          try {
            await (0, r._qC)(
              new Promise((t) => {
                a = setTimeout(t, Date.now() - e < 6e4 ? 2e3 : 5e3)
              }),
              t,
            )
          } finally {
            clearTimeout(a)
          }
        },
      },
    )
  },
  Um9I(e, t, a) {
    var r = a("SZCv"),
      n = a.n(r),
      i = a("qmMi"),
      s = a("OWtl"),
      l = a("rpnz"),
      o = a("e1xH"),
      c = a("jAir"),
      d = a("CPvO"),
      u = a("hiu4"),
      p = a("tv8P")
    let g = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          let a,
            r,
            n = !1
          if (
            ("string" == typeof e
              ? (a = e)
              : "cachedPageId" in e
                ? ((a = e.cachedPageId), (n = !0))
                : ((a = e.page_id), (r = e)),
            (0, l.sD)(a))
          )
            return { mode: "default", loading: !1 }
          let i = t(p.spacePageId$, a),
            s =
              t(p.spacePageQuery$, i, { enabled: !1 }).data?.metadata ??
              t(p.spacePageMetadata$, a, { enabled: !1 }) ??
              t(p.loadedSpacePageMetadata$, i) ??
              r
          if (s?.drive_scope === "personal") return { mode: "default", loading: !1 }
          let { data: o, dataUpdatedAt: c, isPending: d } = t(p.spacesQuery$, { enabled: !n && null != s }),
            g = null != s && d
          if (s?.drive_space_id != null) {
            let e = o?.items.find((e) => e.id === s.drive_space_id)?.interaction_mode,
              { data: a, isPending: r } = t(p.spaceQuery$, s.drive_space_id, { enabled: !n && null == e }),
              i = f(e, a?.interaction_mode)
            return { mode: i, loading: null == i && (g || r) }
          }
          let m = (0, u.PQ)(i, o?.items, c > 0, (e, a) => {
            let r = e === i ? s : t(p.loadedSpacePageMetadata$, e)
            if (null != r) return r
            let { data: l, isPending: o } = t(p.spacePageAncestryQuery$, e, { enabled: !n && null != s && a })
            return ((g = g || (null != s && a && o)), l?.metadata)
          }).space
          switch (m) {
            case null:
              return { mode: "default", loading: g }
            case void 0:
              return { mode: void 0, loading: g }
            default: {
              let { data: e, isPending: a } = t(p.spaceQuery$, m.id, {
                  enabled: !n && null != s && null == m.interaction_mode,
                }),
                r = f(m.interaction_mode, e?.interaction_mode)
              return {
                mode: r,
                loading: "request_changes" !== r && (g || (null != s && null == m.interaction_mode && a)),
              }
            }
          }
        },
        { isEqual: n() },
      ),
      m = (0, i.i1)(s.u, (e, { get: t }) => t(g, e)?.mode)
    function f(...e) {
      return e.includes("request_changes") ? "request_changes" : e.find((e) => null != e)
    }
    function h(e) {
      return { editing: !e, export: !e, collaboration: !e, productNavigation: !e }
    }
    let y = (0, i.i1)(
      s.u,
      (e, { get: t }) => {
        let a = "string" == typeof e ? e : e.pageId,
          r = t(p.spacePageId$, a),
          n = ("string" != typeof e && e.viewOnly) || t(o.ZR, r) || "enabled" === t(o.Ie),
          i = h(n),
          s = t(p.spacePageQuery$, r, { enabled: !1 }).data,
          u =
            s?.capabilities_pending === !0
              ? s.metadata
              : (t(p.spacePageMetadata$, a, { enabled: !1 }) ?? t(p.loadedSpacePageMetadata$, r))
        if (n || s?.capabilities_pending) {
          let e = n ? void 0 : t(p.listedContentScope$, r),
            s = ("write" === e || "comment" === e) && "request_changes" !== t(g, { cachedPageId: a }).mode
          return {
            can_read: u?.access.can_read === !0,
            can_write: s && "write" === e,
            can_comment: s,
            can_share: !1,
            can_delete: !1,
            presentation: i,
          }
        }
        if (null == u || (0, l.sD)(a)) return null == u ? void 0 : { ...u.access, presentation: i }
        if ("request_changes" === t(m, a))
          return { ...u.access, can_write: !1, can_comment: !1, can_share: !1, can_delete: !1, presentation: i }
        let f = s?.metadata
        return !0 === u.capabilities_pending &&
          f?.access.can_write === !0 &&
          f.access.can_read &&
          !f.capabilities_pending &&
          !f.view_only &&
          null == f.deleted_at &&
          u.access.can_read &&
          null == u.deleted_at &&
          !u.view_only &&
          !u.access.can_write &&
          (0, c.oe)(f, u) &&
          t(d.cD, r) &&
          t(p.spacePageAncestryQuery$, r, { enabled: !1 }).data?.metadata.access.can_write !== !1
          ? { ...u.access, can_write: !0, presentation: i }
          : { ...u.access, presentation: i }
      },
      { isEqual: n() },
    )
    a.d(
      t,
      {},
      {
        G2: y,
        H0: function (e, t) {
          return !t.remoteAccessLost && (e?.can_write === !0 || e?.can_comment === !0)
        },
        jy: m,
        kI: h,
        mS: g,
        wI: f,
      },
    )
  },
  KjkV(e, t, a) {
    a.d(t, { t: () => v })
    var r = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      s = a("zd8w"),
      l = a("Wf1j"),
      o = a("oyxz"),
      c = a("Qgfj"),
      d = a("Sm6l"),
      u = a("wZQ4"),
      p = a("okCa"),
      g = a("BrP7"),
      m = a("JNtf"),
      f = a("mUDD")
    function h(e) {
      let t,
        a,
        i,
        s,
        l,
        c,
        d = (0, n.c)(16),
        { onClose: u, onCloseAutoFocus: p, onEscapeKeyDown: g, children: h, title: y } = e
      return (
        d[0] !== u
          ? ((t = (e) => {
              e || u()
            }),
            (d[0] = u),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== p || d[3] !== g
          ? ((a = {
              onCloseAutoFocus: p,
              onEscapeKeyDown: g,
              "aria-describedby": void 0,
              className: "@container/create-dialog",
            }),
            (d[2] = p),
            (d[3] = g),
            (d[4] = a))
          : (a = d[4]),
        d[5] !== y
          ? ((i = y ?? (0, r.jsx)(o.A, { id: "space.create.title", defaultMessage: "Create" })), (d[5] = y), (d[6] = i))
          : (i = d[6]),
        d[7] !== i
          ? ((s = (0, r.jsx)(f.c7, {
              className: "shrink-0 px-(--create-dialog-inset) pb-3 @min-[601px]/create-dialog:pb-6",
              title: (0, r.jsx)(m.L3, { children: i }),
            })),
            (d[7] = i),
            (d[8] = s))
          : (s = d[8]),
        d[9] !== h || d[10] !== s
          ? ((l = (0, r.jsxs)(f.R4, {
              size: "full",
              className:
                "px-0 pt-[calc(var(--create-dialog-inset)_-_4px)] pb-0 [--create-dialog-inset:clamp(14px,3.2cqw,32px)]",
              children: [s, h],
            })),
            (d[9] = h),
            (d[10] = s),
            (d[11] = l))
          : (l = d[11]),
        d[12] !== t || d[13] !== a || d[14] !== l
          ? ((c = (0, r.jsx)(m.lG, {
              open: !0,
              onOpenChange: t,
              variant: "chatgpt",
              contentClassName: "surface-Hz2Cme",
              size: "xxxwideTall",
              contentProps: a,
              children: l,
            })),
            (d[12] = t),
            (d[13] = a),
            (d[14] = l),
            (d[15] = c))
          : (c = d[15]),
        c
      )
    }
    var y = a("YFvy")
    function v(e) {
      let t,
        a,
        c,
        m,
        f,
        v,
        x,
        _,
        w,
        I,
        S,
        A,
        P,
        C,
        j,
        E = (0, n.c)(67),
        {
          embedded: T,
          title: M,
          busy: k,
          navigation: q,
          children: N,
          searchField: O,
          toolbarAction: U,
          entries: D,
          loading: R,
          failed: F,
          partial: L,
          onRetry: $,
          pagination: G,
          scrollRoot: Q,
          onClose: z,
          onCloseAutoFocus: B,
        } = e,
        K = void 0 !== k && k,
        W = (0, l.A)(),
        Y = (0, s.useId)(),
        V = (0, s.useRef)(null),
        Z = Q ?? V,
        [H, X] = (0, s.useState)(""),
        J = O?.value ?? H,
        ee = O?.onChange ?? X,
        [et, ea] = (0, s.useState)(!1),
        er = !!U,
        en = er && !et,
        ei = (0, s.useRef)(null),
        es = (0, s.useRef)(null),
        el = (0, s.useRef)(null)
      if (
        (E[0] !== er || E[1] !== et || E[2] !== ee
          ? ((t = () => {
              if (!er || !et) return
              ei.current?.focus({ preventScroll: !0 })
              let e = function (e) {
                el.current && !e.composedPath().includes(el.current) && (ea(!1), ee(""))
              }
              return (document.addEventListener("click", e), () => document.removeEventListener("click", e))
            }),
            (a = [er, et, ee]),
            (E[0] = er),
            (E[1] = et),
            (E[2] = ee),
            (E[3] = t),
            (E[4] = a))
          : ((t = E[3]), (a = E[4])),
        (0, s.useEffect)(t, a),
        E[5] !== D || E[6] !== J)
      ) {
        let e = J.trim().toLocaleLowerCase()
        ;((c = e
          ? D.filter((t) => t.matchesSearch || `${t.title} ${t.text ?? ""}`.toLocaleLowerCase().includes(e))
          : D),
          (E[5] = D),
          (E[6] = J),
          (E[7] = c))
      } else c = E[7]
      let eo = c,
        ec = q && `${Y}-${q.active}-results`,
        ed = R && 0 === eo.length,
        eu = !!q
      if (E[8] !== K || E[9] !== eo) {
        let e
        ;(E[11] !== K
          ? ((e = (e) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "min-w-0",
                  inert: K,
                  "data-saved-template-id": e.id.startsWith("native:") ? e.id.slice(7) : void 0,
                  children: [
                    e.content,
                    e.category &&
                      (0, r.jsx)("div", {
                        className: "px-2 text-center text-xs text-secondary",
                        children: (0, r.jsx)(o.A, {
                          id: "space.createGallery.artifactType",
                          defaultMessage:
                            "{type, select, page {Page} slides {Slides} spreadsheet {Sheets} images {Image} document {Document} site {Site} other {File}}",
                          values: { type: e.category },
                        }),
                      }),
                  ],
                },
                e.id,
              )),
            (E[11] = K),
            (E[12] = e))
          : (e = E[12]),
          (m = eo.map(e)),
          (E[8] = K),
          (E[9] = eo),
          (E[10] = m))
      } else m = E[10]
      ;(E[13] !== ed || E[14] !== eu || E[15] !== m
        ? ((f = (0, r.jsx)(y.j, { loading: ed, hasNavigation: eu, children: m })),
          (E[13] = ed),
          (E[14] = eu),
          (E[15] = m),
          (E[16] = f))
        : (f = E[16]),
        E[17] !== F || E[18] !== R || E[19] !== G || E[20] !== L || E[21] !== eo.length
          ? ((v =
              !R &&
              !F &&
              !L &&
              !G &&
              0 === eo.length &&
              (0, r.jsx)("p", {
                className: "py-8 text-center text-secondary",
                children: (0, r.jsx)(o.A, { ...b.noResults }),
              })),
            (E[17] = F),
            (E[18] = R),
            (E[19] = G),
            (E[20] = L),
            (E[21] = eo.length),
            (E[22] = v))
          : (v = E[22]),
        E[23] !== L
          ? ((x =
              L &&
              (0, r.jsx)("p", {
                className: "py-4 text-center text-secondary",
                children: (0, r.jsx)(o.A, {
                  id: "space.templates.partialNativeResults",
                  defaultMessage: "Some saved templates may be missing from these results.",
                }),
              })),
            (E[23] = L),
            (E[24] = x))
          : (x = E[24]),
        E[25] !== G || E[26] !== Z
          ? ((_ =
              G &&
              (0, r.jsx)(
                u.D,
                {
                  rootRef: Z,
                  rootMargin: "200px",
                  hasNextPage: !0,
                  isFetchingNextPage: G.fetching,
                  onLoadNextPage: G.loadMore,
                },
                G.cursor,
              )),
            (E[25] = G),
            (E[26] = Z),
            (E[27] = _))
          : (_ = E[27]),
        E[28] !== F || E[29] !== $
          ? ((w =
              F &&
              (0, r.jsxs)("div", {
                className: "flex items-center justify-center gap-2 py-4",
                children: [
                  (0, r.jsx)(o.A, { ...b.failed }),
                  (0, r.jsx)(d.$, { color: "secondary", onClick: $, children: (0, r.jsx)(o.A, { ...b.retry }) }),
                ],
              })),
            (E[28] = F),
            (E[29] = $),
            (E[30] = w))
          : (w = E[30]),
        E[31] !== v || E[32] !== x || E[33] !== _ || E[34] !== w || E[35] !== f
          ? ((I = (0, r.jsxs)(r.Fragment, { children: [f, v, x, _, w] })),
            (E[31] = v),
            (E[32] = x),
            (E[33] = _),
            (E[34] = w),
            (E[35] = f),
            (E[36] = I))
          : (I = E[36]))
      let ep = I
      if (void 0 !== T && T) return ep
      ;(E[37] !== et || E[38] !== ee || E[39] !== U
        ? ((S = (e) => {
            U && et && (e.preventDefault(), ee(""), ea(!1), requestAnimationFrame(() => es.current?.focus()))
          }),
          (E[37] = et),
          (E[38] = ee),
          (E[39] = U),
          (E[40] = S))
        : (S = E[40]),
        E[41] !== en ||
        E[42] !== er ||
        E[43] !== Y ||
        E[44] !== W ||
        E[45] !== q ||
        E[46] !== J ||
        E[47] !== ee ||
        E[48] !== U
          ? ((A =
              q &&
              (0, r.jsxs)("div", {
                className: (0, i.A)(
                  "grid shrink-0 items-center gap-2 px-(--create-dialog-inset) pb-4",
                  U
                    ? "grid-cols-[minmax(0,1fr)_auto_auto]"
                    : "grid-cols-[minmax(0,1fr)_auto] @min-[601px]/create-dialog:gap-4",
                ),
                children: [
                  (0, r.jsx)("div", {
                    className: "min-w-0",
                    children: (0, r.jsx)(g.t, {
                      tabs: q.tabs.map((e) => ({ ...e, panelId: `${Y}-${e.key}-results` })),
                      selectedKey: q.active,
                      onSelect: q.onSelect,
                      variant: "segmentedPillMuted",
                      dividerBefore: "page",
                      scrollable: !0,
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    ref: el,
                    className: (0, i.A)(
                      "grid min-w-0 max-w-[50cqw]",
                      er && "motion-safe:transition-[width] motion-safe:duration-basic motion-safe:ease-out",
                      en ? "w-9" : "w-[clamp(170px,25cqw,232px)]",
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: "col-start-1 row-start-1 min-w-0",
                        inert: en,
                        "aria-hidden": en || void 0,
                        children: (0, r.jsx)(p.s, {
                          inputRef: ei,
                          className: (0, i.A)(
                            "w-full min-w-0",
                            er &&
                              "overflow-hidden motion-safe:transition-[border-color,padding] motion-safe:duration-basic motion-safe:ease-out motion-safe:[&_input]:transition-opacity motion-safe:[&_input]:duration-basic",
                            en && "border-transparent! ps-2! [&_input]:opacity-0",
                          ),
                          id: `${Y}-search`,
                          label: W.formatMessage(b.search),
                          placeholder: en ? "" : W.formatMessage(b.search),
                          searchQuery: J,
                          onSearchQueryChange: ee,
                          variant: "toolbar",
                          inputRole: "searchbox",
                        }),
                      }),
                      en &&
                        (0, r.jsx)(d.$, {
                          ref: es,
                          className: "col-start-1 row-start-1 justify-self-start",
                          uniform: !0,
                          size: "iconCircleLg",
                          radius: "full",
                          color: "ghost",
                          "aria-label": W.formatMessage(b.search),
                          "aria-expanded": !1,
                          onClick: () => ea(!0),
                        }),
                    ],
                  }),
                  U,
                ],
              })),
            (E[41] = en),
            (E[42] = er),
            (E[43] = Y),
            (E[44] = W),
            (E[45] = q),
            (E[46] = J),
            (E[47] = ee),
            (E[48] = U),
            (E[49] = A))
          : (A = E[49]))
      let eg = K ? 0 : void 0,
        em = K || void 0,
        ef = q && "tabpanel",
        eh = ec && `${ec}-tab`,
        ey = N ?? ep
      return (
        E[50] !== ec || E[51] !== Z || E[52] !== eg || E[53] !== em || E[54] !== ef || E[55] !== eh || E[56] !== ey
          ? ((P = (0, r.jsx)("div", {
              ref: Z,
              id: ec,
              tabIndex: eg,
              "aria-busy": em,
              role: ef,
              "aria-labelledby": eh,
              className: "flex min-h-0 flex-1 [scrollbar-gutter:stable] flex-col overflow-y-auto",
              children: ey,
            })),
            (E[50] = ec),
            (E[51] = Z),
            (E[52] = eg),
            (E[53] = em),
            (E[54] = ef),
            (E[55] = eh),
            (E[56] = ey),
            (E[57] = P))
          : (P = E[57]),
        E[58] !== A || E[59] !== P
          ? ((C = (0, r.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [A, P] })),
            (E[58] = A),
            (E[59] = P),
            (E[60] = C))
          : (C = E[60]),
        E[61] !== z || E[62] !== B || E[63] !== S || E[64] !== C || E[65] !== M
          ? ((j = (0, r.jsx)(h, { title: M, onClose: z, onCloseAutoFocus: B, onEscapeKeyDown: S, children: C })),
            (E[61] = z),
            (E[62] = B),
            (E[63] = S),
            (E[64] = C),
            (E[65] = M),
            (E[66] = j))
          : (j = E[66]),
        j
      )
    }
    let b = (0, c.YK)({
      search: { id: "space.create.search", defaultMessage: "Search" },
      noResults: { id: "space.create.noResults", defaultMessage: "No matching templates" },
      failed: { id: "space.create.failed", defaultMessage: "Some templates couldn\u2019t be loaded." },
      retry: { id: "space.create.retry", defaultMessage: "Retry" },
    })
  },
  IZ2w(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("SIrB"),
      s = a("WTHg"),
      l = a("UFWi")
    a.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            a,
            o = (0, n.c)(6),
            c = "create" === e.variant
          return (
            o[0] !== e.template || o[1] !== c
              ? ((t = (function (e, t) {
                  let a = e.thumbnail?.uri,
                    n = (0, i.Zk)(e.type)
                  if (!a || null == n || "site" === n) return
                  if ("presentation" === n)
                    return (0, r.jsx)(l.FG, {
                      kind: "slides",
                      createGallery: t,
                      children: (0, r.jsx)(l.gr, { src: a }, a),
                    })
                  let s = "document" === n ? "page" : "file"
                  return (0, r.jsx)(l.FG, {
                    kind: s,
                    createGallery: t,
                    children: (0, r.jsx)(l.or, { src: a, kind: s }),
                  })
                })(e.template, c)),
                (o[0] = e.template),
                (o[1] = c),
                (o[2] = t))
              : (t = o[2]),
            o[3] !== e || o[4] !== t
              ? ((a = (0, r.jsx)(s.xW, { ...e, preview: t })), (o[3] = e), (o[4] = t), (o[5] = a))
              : (a = o[5]),
            a
          )
        },
      },
    )
  },
  ZUWp(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("UFWi"),
      s = a("Vx7B")
    a.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            a,
            l = (0, n.c)(7),
            { title: o, thumbnail: c, disabled: d, onOpen: u } = e
          return (
            l[0] !== c ? ((t = (0, r.jsx)(i.or, { src: c, kind: "image" })), (l[0] = c), (l[1] = t)) : (t = l[1]),
            l[2] !== d || l[3] !== u || l[4] !== t || l[5] !== o
              ? ((a = (0, r.jsx)(s.Z, {
                  title: o,
                  kind: "image",
                  surface: "create",
                  disabled: d,
                  preview: t,
                  onOpen: u,
                })),
                (l[2] = d),
                (l[3] = u),
                (l[4] = t),
                (l[5] = o),
                (l[6] = a))
              : (a = l[6]),
            a
          )
        },
      },
    )
  },
  VU3o(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("QBk8"),
      s = a("D015"),
      l = a("AFKC"),
      o = a("on57"),
      c = a("iodE"),
      d = a("qmMi"),
      u = a("zd8w"),
      p = a("oyxz"),
      g = a("Wf1j"),
      m = a("SPnB"),
      f = a("Sm6l"),
      h = a("bVeK"),
      y = a("evwP"),
      v = a("RNul"),
      b = a("Eqxm"),
      x = a("QufO"),
      _ = a("rpnz"),
      w = a("e1xH"),
      I = a("iyTF"),
      S = a("yGJW"),
      A = a("OWtl"),
      P = a("UFWi"),
      C = a("Vx7B"),
      j = a("gXUG"),
      E = a("C9Ga"),
      T = a("iOgI")
    function M(e) {
      let t,
        a,
        l,
        o,
        g,
        m,
        f = (0, n.c)(24),
        { template: h, onOpen: y, onSelect: I, templatePosition: j, surface: E, compactTitle: M, disabled: k } = e,
        q = (0, d.gh)(A.u),
        N = (0, d._U)(w.H6, "granola_presentation"),
        O = (0, d.Ul)(T.M),
        U = (0, d.Ul)(x.vH),
        D = (0, d.Ul)(_.ut),
        R = (0, c.tF)(),
        F = "onboarding" === E || "grid" === E,
        L = (0, u.useRef)(null)
      if (
        (f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => L.current?.abort()), (a = []), (f[0] = t), (f[1] = a))
          : ((t = f[0]), (a = f[1])),
        (0, u.useEffect)(t, a),
        !N)
      )
        return null
      if (O === h.id) {
        let e
        ;(f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsxs)("span", {
              className: "inline-flex items-center gap-1",
              role: "status",
              children: [
                (0, r.jsx)(v.y, { as: "span", className: "icon-xxs" }),
                (0, r.jsx)(p.A, { id: "space.slideTemplates.opening", defaultMessage: "Opening\u2026" }),
              ],
            })),
            (f[2] = e))
          : (e = f[2]),
          (l = e))
      } else if (void 0 !== M && M) {
        let e
        ;(f[3] !== h.title
          ? ((e = (0, r.jsx)("span", { className: "text-sm", children: h.title })), (f[3] = h.title), (f[4] = e))
          : (e = f[4]),
          (l = e))
      }
      f[5] !== U || f[6] !== E || f[7] !== h
        ? ((o =
            "create" === E || U
              ? (0, r.jsx)(
                  P.gr,
                  {
                    metadata: "source" in h ? h.thumbnailMetadata : void 0,
                    src: "source" in h ? h.thumbnailUrl : h.thumbnail,
                  },
                  "source" in h ? h.thumbnailUrl : h.thumbnail,
                )
              : (0, r.jsx)("img", {
                  ref: "grid" === E ? b.b : void 0,
                  crossOrigin: "grid" === E && "source" in h ? "anonymous" : void 0,
                  className: "size-full object-cover",
                  src: "source" in h ? h.thumbnailUrl : h.thumbnail,
                  alt: "",
                  draggable: !1,
                })),
          (f[5] = U),
          (f[6] = E),
          (f[7] = h),
          (f[8] = o))
        : (o = f[8])
      let $ = (void 0 !== k && k) || null != O || (D && null == I) || !R,
        G = O === h.id ? "dimmed" : "unchanged"
      return (
        f[9] !== y || f[10] !== I || f[11] !== F || f[12] !== q || f[13] !== h || f[14] !== j
          ? ((g = () => {
              ;(F &&
                (0, S.yy)(q, i.CodexSpacesOnboarding, {
                  action: i.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                  item: i.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                }),
              (0, S.yy)(q, i.CodexSpacesTemplateGallery, {
                action: F
                  ? i.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED
                  : i.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                category: "slides",
                templateId: h.id,
                templatePosition: null == j ? void 0 : (0, s.At)(j),
                selectionSurface: F
                  ? i.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE
                  : i.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
              }),
              null != I)
                ? I(h)
                : ((L.current = new AbortController()),
                  (0, T._)({ scope: q, template: h, onOpen: y, signal: L.current.signal }))
            }),
            (f[9] = y),
            (f[10] = I),
            (f[11] = F),
            (f[12] = q),
            (f[13] = h),
            (f[14] = j),
            (f[15] = g))
          : (g = f[15]),
        f[16] !== E || f[17] !== o || f[18] !== $ || f[19] !== G || f[20] !== g || f[21] !== h.title || f[22] !== l
          ? ((m = (0, r.jsx)(C.Z, {
              title: h.title,
              kind: "slides",
              surface: E,
              titleContent: l,
              preview: o,
              disabled: $,
              disabledAppearance: G,
              onOpen: g,
            })),
            (f[16] = E),
            (f[17] = o),
            (f[18] = $),
            (f[19] = G),
            (f[20] = g),
            (f[21] = h.title),
            (f[22] = l),
            (f[23] = m))
          : (m = f[23]),
        m
      )
    }
    a.d(
      t,
      {},
      {
        X: function (e) {
          let t,
            a,
            i,
            s,
            c,
            b,
            x,
            _,
            S = (0, n.c)(44),
            { onOpen: P, onSelect: C, expanded: T, stickyHeading: k, compactTitle: q, heading: N, disabled: O } = e,
            U = void 0 !== T && T,
            D = void 0 !== k && k,
            R = void 0 !== q && q,
            F = void 0 !== O && O,
            L = (0, d.gh)(A.u),
            $ = (0, d._U)(w.H6, "granola_presentation"),
            G = (0, g.A)(),
            Q = (0, d.Ul)(m.o8),
            z = (0, d.Ul)($ ? j.G : null),
            { isLoading: B, isError: K } = (0, d.Ul)($ ? I.i8 : null) ?? {},
            W = (0, u.useId)(),
            Y = (0, l.g)()
          if (!$) return null
          if (B) {
            let e, a
            ;(S[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(v.y, {})), (S[0] = e)) : (e = S[0]),
              S[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, r.jsxs)("div", {
                    className: "flex min-h-56 items-center justify-center",
                    role: "status",
                    children: [
                      e,
                      (0, r.jsx)("span", {
                        className: "sr-only",
                        children: (0, r.jsx)(p.A, {
                          id: "space.slideTemplates.loading",
                          defaultMessage: "Loading Slides templates",
                        }),
                      }),
                    ],
                  })),
                  (S[1] = a))
                : (a = S[1]),
              (t = a))
          } else if (K) {
            let e, a, n, i
            ;(S[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(p.A, {
                  id: "space.slideTemplates.loadFailed",
                  defaultMessage: "Couldn\u2019t load Slides templates",
                })),
                (S[2] = e))
              : (e = S[2]),
              S[3] !== L ? ((a = () => void (0, I.JF)(L)), (S[3] = L), (S[4] = a)) : (a = S[4]),
              S[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, r.jsx)(p.A, { id: "space.slideTemplates.retry", defaultMessage: "Try again" })), (S[5] = n))
                : (n = S[5]),
              S[6] !== a
                ? ((i = (0, r.jsxs)(y.W, {
                    children: [e, (0, r.jsx)(f.$, { color: "ghost", size: "toolbar", onClick: a, children: n })],
                  })),
                  (S[6] = a),
                  (S[7] = i))
                : (i = S[7]),
              (t = i))
          } else if (z?.length === 0) {
            let e
            ;(S[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(y.W, {
                  children: (0, r.jsx)(p.A, {
                    id: "space.slideTemplates.empty",
                    defaultMessage: "No Slides templates available",
                  }),
                })),
                (S[8] = e))
              : (e = S[8]),
              (t = e))
          } else {
            let e,
              a,
              n,
              i = U ? void 0 : Y.actions.viewportRef,
              s = U
                ? "-m-2 grid grid-cols-3 gap-4 p-2 [@media(max-width:48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1"
                : "-m-2 gap-3 p-3 horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-56 *:flex-[0_0_calc((100%-2.25rem)/4)]"
            ;(S[9] !== s ? ((e = (0, o.A)("min-w-0", s)), (S[9] = s), (S[10] = e)) : (e = S[10]),
              S[11] !== R || S[12] !== F || S[13] !== P || S[14] !== C || S[15] !== z || S[16] !== Q
                ? ((a =
                    null != z &&
                    z.map((e, t) =>
                      (0, r.jsx)(
                        M,
                        {
                          template: e,
                          templatePosition: null == Q ? void 0 : t + 1,
                          onOpen: P,
                          onSelect: C,
                          surface: "gallery",
                          compactTitle: R,
                          disabled: F,
                        },
                        e.id,
                      ),
                    )),
                  (S[11] = R),
                  (S[12] = F),
                  (S[13] = P),
                  (S[14] = C),
                  (S[15] = z),
                  (S[16] = Q),
                  (S[17] = a))
                : (a = S[17]),
              S[18] !== i || S[19] !== e || S[20] !== a
                ? ((n = (0, r.jsx)("div", { ref: i, className: e, children: a })),
                  (S[18] = i),
                  (S[19] = e),
                  (S[20] = a),
                  (S[21] = n))
                : (n = S[21]),
              (t = n))
          }
          let V = D && "sticky top-0 z-10 -mx-4 px-4 py-4"
          return (
            S[22] !== V
              ? ((a = (0, o.A)("mb-3 flex items-center justify-between gap-2", V)), (S[22] = V), (S[23] = a))
              : (a = S[23]),
            S[24] !== N ? ((i = N ?? (0, r.jsx)(p.A, { ...E.a.heading })), (S[24] = N), (S[25] = i)) : (i = S[25]),
            S[26] !== W || S[27] !== i
              ? ((s = (0, r.jsx)("h3", { id: W, className: "m-0 body-md font-semibold", children: i })),
                (S[26] = W),
                (S[27] = i),
                (S[28] = s))
              : (s = S[28]),
            S[29] !== Y || S[30] !== U || S[31] !== G
              ? ((c =
                  !U &&
                  (Y.model.canPrevious || Y.model.canNext) &&
                  (0, r.jsxs)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: [
                      (0, r.jsx)(f.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !Y.model.canPrevious,
                        onClick: Y.actions.previous,
                        "aria-label": G.formatMessage({
                          id: "space.slideTemplates.previous",
                          defaultMessage: "Previous Slides templates",
                        }),
                        children: (0, r.jsx)(h.KBq, { className: "rtl:rotate-180" }),
                      }),
                      (0, r.jsx)(f.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !Y.model.canNext,
                        onClick: Y.actions.next,
                        "aria-label": G.formatMessage({
                          id: "space.slideTemplates.next",
                          defaultMessage: "Next Slides templates",
                        }),
                        children: (0, r.jsx)(h.j1b, { className: "rtl:rotate-180" }),
                      }),
                    ],
                  })),
                (S[29] = Y),
                (S[30] = U),
                (S[31] = G),
                (S[32] = c))
              : (c = S[32]),
            S[33] !== a || S[34] !== s || S[35] !== c
              ? ((b = (0, r.jsxs)("div", { className: a, children: [s, c] })),
                (S[33] = a),
                (S[34] = s),
                (S[35] = c),
                (S[36] = b))
              : (b = S[36]),
            S[37] !== t || S[38] !== D
              ? ((x = D ? (0, r.jsx)("div", { "data-sticky-section-content": !0, children: t }) : t),
                (S[37] = t),
                (S[38] = D),
                (S[39] = x))
              : (x = S[39]),
            S[40] !== W || S[41] !== b || S[42] !== x
              ? ((_ = (0, r.jsxs)("section", { "aria-labelledby": W, children: [b, x] })),
                (S[40] = W),
                (S[41] = b),
                (S[42] = x),
                (S[43] = _))
              : (_ = S[43]),
            _
          )
        },
        q: M,
      },
    )
  },
  gXUG(e, t, a) {
    a.d(t, { G: () => p })
    var r = a("qmMi"),
      n = a("SPnB"),
      i = a("iyTF"),
      s = a("OWtl"),
      l = a("JYRT"),
      o = a("ASxG"),
      c = a("wzAt")
    let d = o.YOg(o.YjP().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).refine((e) => new Set(e).size === e.length),
      u = o.Ikc({
        targeting: o.Ikc({ recommendations: o.Ikc({ business: d, education: d, individual: d, fallback: d }) }),
      }),
      p = (0, r.un)(s.u, ({ get: e }) => {
        let { data: t } = e(i.i8)
        if (null == t || null == e(n.o8)) return t
        let a = e(l.X, "1122994996")
        return (function (e, t, a) {
          let r = u.safeParse(t)
          if (!r.success) return e
          let n = r.data.targeting.recommendations[(0, c.r)(a)],
            i = n.flatMap((t) => e.find((e) => e.id === t) ?? [])
          if (0 === i.length) return e
          let s = e.filter(({ id: e }) => !n.includes(e))
          return [...i, ...s]
        })(t, a?.value, e(n.e0))
      })
  },
  C9Ga(e, t, a) {
    let r = (0, a("Qgfj").YK)({ heading: { id: "space.slideTemplates.heading", defaultMessage: "Slides" } })
    a.d(t, {}, { a: r })
  },
  iOgI(e, t, a) {
    var r = a("qmMi"),
      n = a("E8Sp"),
      i = a("SPnB"),
      s = a("SGsN"),
      l = a("svjy"),
      o = a("QufO"),
      c = a("nlNF"),
      d = a("rpnz"),
      u = a("dc3a"),
      p = a("e1xH"),
      g = a("SEOK"),
      m = a("kkOV"),
      f = a("tv8P"),
      h = a("iyTF"),
      y = a("OWtl"),
      v = a("kK7d")
    let b = (0, r.vP)(y.u, null)
    a.d(
      t,
      {},
      {
        M: b,
        _: async function ({ scope: e, template: t, onOpen: r, signal: y }) {
          let x,
            _,
            w = e.get(f.spaceAccountId$),
            I = e.get(i.o8)
          if (null == w || null == I || null != e.get(b) || e.get(d.ut) || !e.get(p.H6, "granola_presentation")) return
          let S = (0, f.watchSpaceAccount)(e, w, void 0, void 0, I),
            A = new AbortController(),
            P = AbortSignal.any([S.signal, A.signal]),
            C = () => {
              null == x && A.abort(y.reason)
            }
          ;(y.addEventListener("abort", C, { once: !0 }), y.aborted && C())
          let j = e.get(c.x2)
          e.set(b, t.id)
          try {
            let [i, { preparePageHandoff: c }, { importPreparedArtifact: d }] = await Promise.all([
                (0, h.TM)(e, t, P),
                Promise.all([
                  a.e(593475),
                  a.e(923720),
                  a.e(533219),
                  a.e(944744),
                  a.e(787805),
                  a.e(68876),
                  a.e(78948),
                  a.e(811e3),
                  a.e(503482),
                  a.e(707900),
                  a.e(312541),
                  a.e(944852),
                  a.e(285683),
                ]).then(a.bind(a, "azJ3")),
                Promise.all([
                  a.e(593475),
                  a.e(923720),
                  a.e(533219),
                  a.e(944744),
                  a.e(787805),
                  a.e(68876),
                  a.e(78948),
                  a.e(811e3),
                  a.e(503482),
                  a.e(707900),
                  a.e(312541),
                  a.e(944852),
                  a.e(137660),
                ]).then(a.bind(a, "kO7B")),
              ]),
              f = await c(
                { kind: "presentation", artifactProto: i, stateVersion: 0, assets: [] },
                P,
                e.get(p.El, "granola_presentation"),
              )
            if ((P.throwIfAborted(), !e.get(p.H6, "granola_presentation"))) return
            let S = await d(e, {
              accountId: w,
              title: t.title,
              documentType: "granola_presentation",
              prepared: f,
              signal: P,
              onSaveRetry: (t) => {
                if ((_?.close(), (_ = void 0), null != t && null == x && !P.aborted)) {
                  let a = e.get(l.g)
                  _ = e
                    .get(s.Id)
                    .danger(a.formatMessage(m.v.granola_presentation.syncFailed), {
                      duration: 0,
                      hasCloseButton: !1,
                      errorAnalytics: { toastId: "space.slideTemplates.saveFailed" },
                      primaryAction: {
                        label: a.formatMessage({
                          id: "pages.native.retry",
                          defaultMessage: "Retry",
                          description: "Retry native document synchronization",
                        }),
                        onClick: t,
                      },
                    })
                }
              },
              onPageCreated: (t) => {
                ;((x = t),
                  e.set(b, null),
                  y.aborted ||
                    P.aborted ||
                    (r?.(),
                    (0, n.oo)(e, `/space/${t}`, {
                      state: { ...(null != j ? (0, g.$)(j, w, t) : void 0), spaceSidebarAccountId: w },
                    })))
              },
            })
            if ((S.releaseNativeDocument(), !P.aborted && e.get(o.vH) && e.get(p.wr))) {
              let t = await v.Kd.safePost("/pages/{page_id}/preview", {
                parameters: { path: { page_id: S.pageId } },
                expectedIdentity: { accountId: w, userId: I },
                additionalHeaders: { "ChatGPT-Account-ID": w },
                signal: P,
                retry: !1,
              })
              null == t.preview_url || P.aborted || (await (0, u.U9)(e))
            }
          } catch {
            null != x ||
              P.aborted ||
              e
                .get(s.Id)
                .danger(
                  e
                    .get(l.g)
                    .formatMessage({
                      id: "space.slideTemplates.openFailed",
                      defaultMessage: "Couldn\u2019t open this Slides template. Try again.",
                      description: "Error when a native Slides template cannot be downloaded or opened",
                    }),
                  { errorAnalytics: { toastId: "space.slideTemplates.openFailed" } },
                )
          } finally {
            ;(_?.close(), y.removeEventListener("abort", C), S.stop(), null == x && e.set(b, null))
          }
        },
      },
    )
  },
  mXik(e, t, a) {
    var r = a("zd8w"),
      n = a("E8Sp"),
      i = a("SPnB"),
      s = a("r9ga"),
      l = a("SEOK")
    a.d(
      t,
      {},
      {
        U: function (
          e,
          t,
          a,
          o,
          c,
          { rootPageId: d, personal: u = !1, rememberCollectionOrigin: p = !0, pagePreview: g, onOpenPage: m } = {},
        ) {
          if (null != m) return void (null == g ? m(c) : m(c, { pagePreview: g }))
          let f = e.get(i.chatGptAuthenticatedUserId$),
            h = null != g && null != o && null != f ? { ...g, accountId: o, userId: f, pageId: c } : void 0,
            y = (r, i) =>
              (0, n.VK)(
                e,
                t,
                r,
                "string" == typeof r && (p || null != h)
                  ? {
                      ...i,
                      ...(null != h && { flushSync: !0 }),
                      state: {
                        ...i?.state,
                        ...(p && { pageListOrigin: { accountId: o, pageId: c, pathname: r, location: a } }),
                        ...(null != h && { pagePreview: h }),
                      },
                    }
                  : i,
              )
          if (null != d) (0, s.C_)(e, y, a, o, d, c)
          else if (u) (0, s.Kt)(e, y, o, c)
          else {
            let t = (0, s.mI)(e, c),
              n = {
                state: {
                  ...(0, l.$)(a, o, c, t),
                  sidebarArea: "space",
                  spaceSidebarAccountId: o,
                  sidebarPrimaryContent: !0,
                },
              }
            ;(0, r.startTransition)(() => {
              y(t, n)
            })
          }
        },
      },
    )
  },
  YFvy(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      s = a("LcBG")
    function l(e, t) {
      return (0, r.jsxs)(
        "div",
        {
          className: "min-w-0",
          children: [
            (0, r.jsx)(s.c5, { index: t, square: !1, layout: "uniform" }),
            (0, r.jsx)("div", {
              "aria-hidden": !0,
              className: "mt-2 flex h-lh items-center justify-center text-xs",
              children: (0, r.jsx)("span", { className: "h-2.5 w-1/4 rounded bg-surface-tertiary" }),
            }),
          ],
        },
        t,
      )
    }
    a.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            a,
            s,
            o = (0, n.c)(9),
            { hasNavigation: c, loading: d, children: u } = e,
            p = c && "pt-9"
          return (
            o[0] !== p
              ? ((t = (0, i.A)(
                  "grid shrink-0 grid-cols-1 gap-x-6 gap-y-10 px-(--create-dialog-inset) pb-9 @min-[441px]/create-dialog:grid-cols-2 @min-[701px]/create-dialog:grid-cols-3",
                  p,
                )),
                (o[0] = p),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== u || o[3] !== d
              ? ((a = d ? Array.from({ length: 6 }, l) : u), (o[2] = u), (o[3] = d), (o[4] = a))
              : (a = o[4]),
            o[5] !== d || o[6] !== t || o[7] !== a
              ? ((s = (0, r.jsx)("div", { "aria-busy": d, className: t, children: a })),
                (o[5] = d),
                (o[6] = t),
                (o[7] = a),
                (o[8] = s))
              : (s = o[8]),
            s
          )
        },
      },
    )
  },
  N7ab(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("zd8w"),
      s = a("oyxz"),
      l = a("cZk2")
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a,
            o,
            c,
            d,
            u = (0, n.c)(14),
            { frame: p, onClose: g, onCloseAutoFocus: m, failed: f } = e,
            h = void 0 !== f && f
          if (
            (u[0] !== h || u[1] !== p
              ? ((t = () => {
                  h && p?.visit.setOutcome("error")
                }),
                (a = [p, h]),
                (u[0] = h),
                (u[1] = p),
                (u[2] = t),
                (u[3] = a))
              : ((t = u[2]), (a = u[3])),
            (0, i.useLayoutEffect)(t, a),
            p && h)
          ) {
            let e
            return (
              u[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)("p", {
                    role: "alert",
                    className: "py-4 text-center",
                    children: (0, r.jsx)(s.A, {
                      id: "space.gettingStarted.templatesLoadError",
                      defaultMessage: "Couldn\u2019t open templates",
                    }),
                  })),
                  (u[4] = e))
                : (e = u[4]),
              e
            )
          }
          return (
            u[5] !== g
              ? ((o = (e) => {
                  e || g()
                }),
                (u[5] = g),
                (u[6] = o))
              : (o = u[6]),
            u[7] !== h
              ? ((c = h
                  ? (0, r.jsx)(s.A, {
                      id: "space.gettingStarted.templatesLoadError",
                      defaultMessage: "Couldn\u2019t open templates",
                    })
                  : (0, r.jsx)(s.A, {
                      id: "space.gettingStarted.templatesLoading",
                      defaultMessage: "Loading templates\u2026",
                    })),
                (u[7] = h),
                (u[8] = c))
              : (c = u[8]),
            u[9] !== h || u[10] !== m || u[11] !== o || u[12] !== c
              ? ((d = (0, r.jsx)(l.k, { open: !0, onCloseAutoFocus: m, onOpenChange: o, failed: h, title: c })),
                (u[9] = h),
                (u[10] = m),
                (u[11] = o),
                (u[12] = c),
                (u[13] = d))
              : (d = u[13]),
            d
          )
        },
      },
    )
  },
  CLQ7(e, t, a) {
    let r = (0, a("Qgfj").YK)({
      forYou: { id: "space.create.forYou", defaultMessage: "For you" },
      workspace: { id: "space.create.workspace", defaultMessage: "Workspace" },
      page: { id: "space.create.tabs.pages", defaultMessage: "Pages" },
      slides: { id: "space.create.tabs.slides", defaultMessage: "Slides" },
      spreadsheet: { id: "space.create.tabs.sheets", defaultMessage: "Sheets" },
      images: { id: "space.create.tabs.images", defaultMessage: "Images" },
    })
    a.d(
      t,
      {},
      {
        DZ: r,
        c3: function (e) {
          return "document" === e ? "page" : "presentation" === e ? "slides" : e
        },
        zr: function (e, t) {
          return [
            { key: "all", name: e.formatMessage(r.forYou) },
            ...(t ? [{ key: "workspace", name: t }] : []),
            ...["page", "slides", "spreadsheet", "images"].map((t) => ({ key: t, name: e.formatMessage(r[t]) })),
          ]
        },
      },
    )
  },
  wgYf(e, t, a) {
    a.d(t, { $: () => j })
    var r = a("ABep"),
      n = a("QosV"),
      i = a("qmMi"),
      s = a("Wf1j"),
      l = a("NRR1"),
      o = a("e1xH"),
      c = a("zd8w"),
      d = a("oyxz"),
      u = a("Ywss"),
      p = a("Sm6l"),
      g = a("bqtn"),
      m = a("bVeK"),
      f = a("SGsN"),
      h = a("OoIX"),
      y = a("mXik"),
      v = a("tv8P"),
      b = a("OWtl"),
      x = a("soaw"),
      _ = a("ZII9"),
      w = a("n87C"),
      I = a("UxN3"),
      S = a("RZZB"),
      A = a("kK7d")
    function P(e) {
      let t,
        P,
        C,
        j,
        E,
        T,
        M,
        k,
        q,
        N,
        O,
        U,
        D,
        R,
        F,
        L,
        $,
        G,
        Q,
        z,
        B,
        K,
        W,
        Y,
        V,
        Z,
        H,
        X = (0, n.c)(33),
        { accountId: J, slidesEnabled: ee, onCreated: et } = e,
        ea = (0, i.gh)(b.u),
        er =
          ((G = (0, n.c)(18)),
          (Q = (0, i.gh)(b.u)),
          (z = (0, s.A)()),
          (B = (0, u.Zp)()),
          (K = (0, u.zy)()),
          (W = (0, c.useRef)(null)),
          (Y = (0, c.useRef)(null)),
          (V = (0, c.useRef)(!1)),
          (Z = (0, x.a)()),
          G[0] !== J || G[1] !== z || G[2] !== Z || G[3] !== K || G[4] !== B || G[5] !== et || G[6] !== Q
            ? ((U = function (e) {
                if (V.current) return
                if (!/\.pptx$/i.test(e.name))
                  return void Q.get(f.Id).danger(
                    z.formatMessage({
                      id: "pages.templates.pptxOnly",
                      defaultMessage: "Choose a PowerPoint (.pptx) file.",
                    }),
                    { errorAnalytics: { toastId: "pages.templates.pptxOnly" } },
                  )
                V.current = !0
                let t = Q.get(l.$M),
                  r = (0, l.hI)(Q, J, t),
                  n = (0, S.W)(
                    Q,
                    {
                      pendingTitle: z.formatMessage(
                        { id: "pages.templates.importPending", defaultMessage: "Importing \u201C{name}\u201D" },
                        { name: e.name },
                      ),
                      successTitle: z.formatMessage(
                        { id: "pages.templates.importComplete", defaultMessage: "Imported \u201C{name}\u201D" },
                        { name: e.name },
                      ),
                    },
                    "template-import-toast",
                  )
                ;(async function () {
                  if (((0, h.Jx)(Q), !t)) throw Error("Missing import identity")
                  let i = { accountId: J, userId: t },
                    s = Y.current
                  if (
                    ((s &&
                      s.file.name === e.name &&
                      s.file.size === e.size &&
                      s.file.lastModified === e.lastModified) ||
                      (Y.current = s = { file: e, key: crypto.randomUUID() }),
                    !s.sourceId)
                  ) {
                    let { uploadCodexFileAttachment: t } = await a.e(117753).then(a.bind(a, "RyQl")),
                      n = await t({
                        scope: Q,
                        file: e,
                        signal: r.signal,
                        beforeRequest: () => r.signal.throwIfAborted(),
                      })
                    s.sourceId = n.fileId
                  }
                  ;(r.signal.throwIfAborted(),
                    null == s.page &&
                      (s.page = await Q.get(v.createSpacePageMutation$).mutateAsync({
                        accountId: J,
                        expectedIdentity: i,
                        signal: r.signal,
                        requestBody: {
                          destination: "personal_file_drive",
                          document_type: "granola_presentation",
                          title: e.name.replace(/\.pptx$/i, ""),
                          source_file_id: s.sourceId,
                          idempotency_key: s.key,
                        },
                      })),
                    r.signal.throwIfAborted())
                  let { metadata: l } = await A.CodexRequest.safePatch("/pages/{page_id}/metadata", {
                    parameters: { path: { page_id: s.page.metadata.page_id } },
                    requestBody: { template: { enabled: !0 } },
                    signal: r.signal,
                    expectedIdentity: i,
                  })
                  if ("template" !== l.namespace) throw Error("Could not mark imported slides")
                  let o = { ...s.page, metadata: l }
                  ;((Y.current = null),
                    r.signal.throwIfAborted(),
                    (0, v.cacheCreatedSpacePage)(Q, J, o),
                    n.complete(),
                    Z() && et(),
                    (0, y.U)(Q, B, K, J, o.metadata.page_id, { personal: !0 }))
                })()
                  .catch(() => {
                    ;(n.close(),
                      r.signal.aborted ||
                        Q.get(f.Id).danger(
                          z.formatMessage(
                            Y.current?.page
                              ? {
                                  id: "pages.templates.markImportFailed",
                                  defaultMessage:
                                    "Slides imported, but couldn\u2019t mark them as a template. Select the same file to retry.",
                                  description: "A PowerPoint import was saved but marking it as a template failed",
                                }
                              : {
                                  id: "pages.templates.pptxImportFailed",
                                  defaultMessage: "Couldn\u2019t import this PowerPoint file. Try again.",
                                  description: "Error importing a presentation template",
                                },
                          ),
                          { errorAnalytics: { toastId: "pages.templates.pptxImportFailed" } },
                        ))
                  })
                  .finally(() => {
                    ;((V.current = !1), r.stop())
                  })
              }),
              (G[0] = J),
              (G[1] = z),
              (G[2] = Z),
              (G[3] = K),
              (G[4] = B),
              (G[5] = et),
              (G[6] = Q),
              (G[7] = U))
            : (U = G[7]),
          (H = U),
          G[8] !== z
            ? ((D = z.formatMessage({
                id: "pages.templates.choosePptx",
                defaultMessage: "Choose a PowerPoint template",
              })),
              (G[8] = z),
              (G[9] = D))
            : (D = G[9]),
          G[10] !== H
            ? ((R = (e) => {
                let t = e.currentTarget.files?.[0]
                ;((e.currentTarget.value = ""), t && H(t))
              }),
              (G[10] = H),
              (G[11] = R))
            : (R = G[11]),
          G[12] !== D || G[13] !== R
            ? ((F = (0, r.jsx)("input", {
                ref: W,
                className: "hidden",
                type: "file",
                accept: ".pptx",
                "aria-label": D,
                onChange: R,
              })),
              (G[12] = D),
              (G[13] = R),
              (G[14] = F))
            : (F = G[14]),
          G[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = (0, r.jsx)(g.ms.Item, {
                leftIcon: (0, r.jsx)(I.b5, { icon: { assets: { 16: _.U, 20: w.D } } }),
                onSelect: () => W.current?.click(),
                children: (0, r.jsx)(d.A, { id: "libraryNext.create.uploadMenu", defaultMessage: "Upload files" }),
              })),
              (G[15] = L))
            : (L = G[15]),
          G[16] !== F ? (($ = { input: F, item: L }), (G[16] = F), (G[17] = $)) : ($ = G[17]),
          $),
        en = (0, i._U)(o.hm, "granola_presentation"),
        { data: ei } = (0, i.Ul)(o.j9),
        es = ee && ei?.artifact_blank_creation_via_yjs_renderer_enabled === !0,
        el = (0, s.A)(),
        eo = (0, u.zy)(),
        ec = (0, u.Zp)(),
        [ed, eu] = (0, c.useState)(!1),
        ep = (0, c.useRef)(!1),
        eg = (0, c.useRef)(null),
        em = (0, x.a)()
      X[0] !== J || X[1] !== el || X[2] !== em || X[3] !== eo || X[4] !== ec || X[5] !== et || X[6] !== ea
        ? ((t = function (e) {
            if (ep.current) return
            ;((ep.current = !0), eu(!0))
            let t = (0, l.hI)(ea, J)
            ;(async function () {
              if ("page" === e) {
                let { createAndOpenPage: e } = await a.e(461515).then(a.bind(a, "s4OC"))
                ;(t.signal.throwIfAborted(), em() && e(ea, et, { namespace: "template" }))
                return
              }
              ;(0, h.Jx)(ea)
              let r = ea.get(l.$M),
                n = eg.current ?? crypto.randomUUID()
              eg.current = n
              let i = await ea
                .get(v.createSpacePageMutation$)
                .mutateAsync({
                  accountId: J,
                  expectedIdentity: null == r ? void 0 : { accountId: J, userId: r },
                  signal: t.signal,
                  requestBody: {
                    destination: "personal_file_drive",
                    document_type: e,
                    namespace: "template",
                    title: "",
                    idempotency_key: n,
                  },
                })
              ;(t.signal.throwIfAborted(),
                (eg.current = null),
                (0, v.cacheCreatedSpacePage)(ea, J, i),
                em() && (et(), (0, y.U)(ea, ec, eo, J, i.metadata.page_id, { personal: !0 })))
            })()
              .catch(() => {
                em() &&
                  !t.signal.aborted &&
                  ea
                    .get(f.Id)
                    .danger(
                      el.formatMessage({
                        id: "pages.templates.blankCreateFailed",
                        defaultMessage: "Couldn\u2019t create template. Try again.",
                      }),
                      { errorAnalytics: { toastId: "pages.templates.blankCreateFailed" } },
                    )
              })
              .finally(() => {
                ;(t.stop(), (ep.current = !1), em() && eu(!1))
              })
          }),
          (X[0] = J),
          (X[1] = el),
          (X[2] = em),
          (X[3] = eo),
          (X[4] = ec),
          (X[5] = et),
          (X[6] = ea),
          (X[7] = t))
        : (t = X[7])
      let ef = t
      return (
        X[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, r.jsx)(m.xFs, {})),
            (C = (0, r.jsx)(d.A, { id: "space.templates.new", defaultMessage: "Template" })),
            (X[8] = P),
            (X[9] = C))
          : ((P = X[8]), (C = X[9])),
        X[10] !== ed
          ? ((j = (0, r.jsxs)(p.$, {
              color: "primary",
              radius: "full",
              size: "pageAction",
              disabled: ed,
              children: [P, C],
            })),
            (X[10] = ed),
            (X[11] = j))
          : (j = X[11]),
        X[12] !== ef ? ((E = () => ef("page")), (X[12] = ef), (X[13] = E)) : (E = X[13]),
        X[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, r.jsx)(d.A, { id: "space.templates.newPage", defaultMessage: "Page" })), (X[14] = T))
          : (T = X[14]),
        X[15] !== E
          ? ((M = (0, r.jsx)(g.ms.Item, { LeftIcon: m.oQS, onSelect: E, children: T })), (X[15] = E), (X[16] = M))
          : (M = X[16]),
        X[17] !== es || X[18] !== ef
          ? ((k =
              es &&
              (0, r.jsx)(g.ms.Item, {
                LeftIcon: m.AdV,
                onSelect: () => ef("granola_presentation"),
                children: (0, r.jsx)(d.A, { id: "space.templates.newSlides", defaultMessage: "Slides" }),
              })),
            (X[17] = es),
            (X[18] = ef),
            (X[19] = k))
          : (k = X[19]),
        X[20] !== en || X[21] !== ee || X[22] !== er.item
          ? ((q = en && ee && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(g.ms.Separator, {}), er.item] })),
            (X[20] = en),
            (X[21] = ee),
            (X[22] = er.item),
            (X[23] = q))
          : (q = X[23]),
        X[24] !== ed || X[25] !== j || X[26] !== M || X[27] !== k || X[28] !== q
          ? ((N = (0, r.jsxs)(g.Ab, {
              align: "end",
              contentWidth: "sm",
              modal: !0,
              disabled: ed,
              triggerButton: j,
              children: [M, k, q],
            })),
            (X[24] = ed),
            (X[25] = j),
            (X[26] = M),
            (X[27] = k),
            (X[28] = q),
            (X[29] = N))
          : (N = X[29]),
        X[30] !== N || X[31] !== er.input
          ? ((O = (0, r.jsxs)(r.Fragment, { children: [er.input, N] })), (X[30] = N), (X[31] = er.input), (X[32] = O))
          : (O = X[32]),
        O
      )
    }
    var C = a("OMIV")
    function j(e) {
      let t,
        a,
        c,
        d,
        u = (0, n.c)(14),
        p = (0, s.A)(),
        g = (0, i.Ul)(o.pagesEnabled$),
        m = (0, i.Ul)(o._s),
        f = (0, i._U)(C.JW, "4043188516"),
        h = (0, i.Ul)(l.DO),
        y = (0, i.Ul)(l.$M),
        v = (0, i._U)(o.H6, "granola_presentation")
      if (!g || !m || !f || !h || !y) {
        let e
        return (u[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = {}), (u[0] = e)) : (e = u[0]), e)
      }
      return (
        u[1] !== p
          ? ((t = p.formatMessage({ id: "space.templates.blankPickerTitle", defaultMessage: "Templates" })),
            (u[1] = p),
            (u[2] = t))
          : (t = u[2]),
        u[3] !== h || u[4] !== y ? ((a = JSON.stringify([h, y])), (u[3] = h), (u[4] = y), (u[5] = a)) : (a = u[5]),
        u[6] !== h || u[7] !== e || u[8] !== v || u[9] !== a
          ? ((c = (0, r.jsx)(P, { accountId: h, slidesEnabled: v, onCreated: e }, a)),
            (u[6] = h),
            (u[7] = e),
            (u[8] = v),
            (u[9] = a),
            (u[10] = c))
          : (c = u[10]),
        u[11] !== t || u[12] !== c
          ? ((d = { title: t, action: c }), (u[11] = t), (u[12] = c), (u[13] = d))
          : (d = u[13]),
        d
      )
    }
  },
  fVTg(e, t, a) {
    var r = a("Wj4L")
    a.d(
      t,
      {},
      {
        v: function (e) {
          if (null == e) return "unknown"
          switch ((0, r.th)(e)) {
            case "page":
              return "page"
            case "granola_workbook":
              return "sheet"
            case "granola_presentation":
              return "slide"
            case "granola_document":
            case "granola_whiteboard":
            case "unsupported":
              return "unknown"
          }
        },
      },
    )
  },
  eLR8(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      i = a("qmMi"),
      s = a("zd8w"),
      l = a("Wf1j"),
      o = a("oyxz"),
      c = a("Ywss"),
      d = a("E8Sp"),
      u = a("Sm6l"),
      p = a("JNtf"),
      g = a("mUDD"),
      m = a("SGsN"),
      f = a("nlNF"),
      h = a("PcMx"),
      y = a("Btxs"),
      v = a("yrMs"),
      b = a("AE4U"),
      x = a("MaNR"),
      _ = a("Um9I"),
      w = a("r9ga"),
      I = a("hZSj"),
      S = a("tv8P"),
      A = a("atZq"),
      P = a("OWtl")
    a.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            a,
            C,
            j,
            E,
            T,
            M,
            k,
            q,
            N,
            O,
            U,
            D,
            R,
            F,
            L,
            $ = (0, n.c)(49),
            { documentType: G, hasChildren: Q, onArchived: z, onClose: B, pageId: K, pageTitle: W } = e,
            Y = void 0 === G ? "page" : G,
            V = (0, i.gh)(P.u),
            Z = (0, l.A)(),
            H = (0, c.Zp)(),
            X = (0, c.zy)(),
            J = (0, i.Ul)(S.spaceAccountId$),
            { data: ee } = (0, i.Ul)(b.R),
            et = ee?.archive_retention_days
          $[0] !== V ? ((t = () => V.get(S.spaceAccountId$)), ($[0] = V), ($[1] = t)) : (t = $[1])
          let [ea] = (0, s.useState)(t),
            er = (0, s.useRef)(!1)
          return (
            $[2] !== ea || $[3] !== J || $[4] !== B
              ? ((a = () => {
                  J !== ea && B()
                }),
                (C = [ea, J, B]),
                ($[2] = ea),
                ($[3] = J),
                ($[4] = B),
                ($[5] = a),
                ($[6] = C))
              : ((a = $[5]), (C = $[6])),
            (0, s.useEffect)(a, C),
            $[7] !== B
              ? ((j = (e) => {
                  e || B()
                }),
                ($[7] = B),
                ($[8] = j))
              : (j = $[8]),
            $[9] !== ea ||
            $[10] !== Y ||
            $[11] !== Q ||
            $[12] !== Z ||
            $[13] !== X ||
            $[14] !== H ||
            $[15] !== z ||
            $[16] !== B ||
            $[17] !== K ||
            $[18] !== W ||
            $[19] !== V
              ? ((E = (e) => {
                  if ((e.preventDefault(), er.current)) return
                  if (null == ea || V.get(S.spaceAccountId$) !== ea || "request_changes" === V.get(_.jy, K))
                    return void B()
                  er.current = !0
                  let t = (function (e, t) {
                      let { ancestorPages: a, space: r } = e.get(S.spacePageContext$, t),
                        n = a.at(-1)?.page_id ?? r?.root_page_id
                      return null != n && n !== t ? `/space/${n}` : "/space"
                    })(V, K),
                    a = (0, w.Kk)(V, V.get(d.gM).pathname ?? ""),
                    r =
                      a === K ||
                      (null != a && V.get(S.spacePageContext$, a).ancestorPages.some((e) => e.page_id === K)),
                    n = I.g && r,
                    i = (0, S.watchSpaceAccount)(V, ea),
                    s = V.get(f.C0),
                    l = !1,
                    o = V.get(f.x2),
                    u =
                      (Q ??
                        V.query.getData(S.spacePageQuery$, K)?.metadata.has_children ??
                        V.get(S.spacePageMetadata$, K)?.has_children) === !0,
                    p = (0, x.uX)(V, { documentType: Y, pageTitle: W, multiple: u }),
                    g = !1
                  i.signal.addEventListener("abort", p.close, { once: !0 })
                  let b = V.watch((e) => {
                    let t = e.get(f.x2)
                    t !== o && ((o = t), (l = l || e.get(f.C0) !== s || null == t || (0, c.AO)(t) !== (0, c.AO)(X)))
                  })
                  ;(V.get(y.z)
                    .mutateAsync({ kind: "page", id: K, pageTitle: W })
                    .then((e) => {
                      let s = e?.outcome
                      ;((g = ("completed" === s || "archived" === s) && !i.signal.aborted),
                        "scheduled" !== s || i.signal.aborted || l || p.scheduled(),
                        g && (z?.(K), p.complete("completed" === s && u)))
                      let o = "completed" === s || ("archived" === s && a === K)
                      ;(!o ||
                        !r ||
                        n ||
                        V.get(A.kJ) ||
                        i.signal.aborted ||
                        l ||
                        H(t, { replace: !0, state: { ...X.state, scrollPageToTop: !1 } }),
                        n && o && !i.signal.aborted && !l && window.close())
                    })
                    .catch((e) => {
                      if (!i.signal.aborted && !l) {
                        let t
                        ;((t =
                          e instanceof h.F
                            ? e.formatMessage(Z)
                            : e instanceof v.Aq
                              ? Z.formatMessage({
                                  id: "codex.space.page.archiveUnconfirmed",
                                  defaultMessage: "Deletion could not be confirmed. Check Trash before trying again",
                                })
                              : Z.formatMessage(
                                  {
                                    id: "codex.space.page.archiveError.byDocumentType",
                                    defaultMessage:
                                      "{documentType, select, granola_presentation {Could not delete slide} granola_workbook {Could not delete sheet} other {Could not delete page}}",
                                  },
                                  { documentType: Y },
                                )),
                          V.get(m.Id).danger(t, { errorAnalytics: { toastId: "codex.space.page.archiveError" } }))
                      }
                    })
                    .finally(() => {
                      ;(g || p.close(), i.signal.removeEventListener("abort", p.close), i.stop(), b())
                    }),
                    B())
                }),
                ($[9] = ea),
                ($[10] = Y),
                ($[11] = Q),
                ($[12] = Z),
                ($[13] = X),
                ($[14] = H),
                ($[15] = z),
                ($[16] = B),
                ($[17] = K),
                ($[18] = W),
                ($[19] = V),
                ($[20] = E))
              : (E = $[20]),
            $[21] !== Y || $[22] !== W
              ? ((T = (0, r.jsx)(p.L3, {
                  className: "contents",
                  children: W?.trim()
                    ? (0, r.jsx)(o.A, {
                        id: "codex.space.page.archive.title",
                        defaultMessage: "Delete \u201C{title}\u201D?",
                        values: { title: W },
                      })
                    : (0, r.jsx)(o.A, {
                        id: "codex.space.page.archive.title.untitled",
                        defaultMessage:
                          "Delete {documentType, select, granola_document {Untitled doc} granola_whiteboard {Untitled canvas} granola_workbook {Untitled sheet} granola_presentation {Untitled slide} other {Untitled page}}?",
                        values: { documentType: Y },
                      }),
                })),
                ($[21] = Y),
                ($[22] = W),
                ($[23] = T))
              : (T = $[23]),
            $[24] !== et || $[25] !== Y
              ? ((M =
                  null != et &&
                  (0, r.jsx)(o.A, {
                    id: "codex.space.page.archive.descriptionWithRetention.byDocumentType",
                    defaultMessage:
                      "{documentType, select, granola_presentation {This slide and its subpages will move to Trash. You can restore them within {days, plural, one {# day} other {# days}}.} granola_workbook {This sheet and its subpages will move to Trash. You can restore them within {days, plural, one {# day} other {# days}}.} other {This page and its subpages will move to Trash. You can restore them within {days, plural, one {# day} other {# days}}.}}",
                    values: { documentType: Y, days: et },
                  })),
                ($[24] = et),
                ($[25] = Y),
                ($[26] = M))
              : (M = $[26]),
            $[27] !== et || $[28] !== Y
              ? ((k =
                  null == et &&
                  (0, r.jsx)(o.A, {
                    id: "codex.space.page.archive.description.byDocumentType",
                    values: { documentType: Y },
                    defaultMessage:
                      "{documentType, select, granola_presentation {This slide and its subpages will move to Trash. You can restore them from Trash.} granola_workbook {This sheet and its subpages will move to Trash. You can restore them from Trash.} other {This page and its subpages will move to Trash. You can restore them from Trash.}}",
                  })),
                ($[27] = et),
                ($[28] = Y),
                ($[29] = k))
              : (k = $[29]),
            $[30] !== M || $[31] !== k
              ? ((q = (0, r.jsxs)(p.rr, { className: "contents", children: [M, k] })),
                ($[30] = M),
                ($[31] = k),
                ($[32] = q))
              : (q = $[32]),
            $[33] !== q || $[34] !== T
              ? ((N = (0, r.jsx)(g.OO, {
                  children: (0, r.jsx)(g.c7, {
                    titleClassName: "line-clamp-3 break-words pe-8",
                    title: T,
                    subtitle: q,
                  }),
                })),
                ($[33] = q),
                ($[34] = T),
                ($[35] = N))
              : (N = $[35]),
            $[36] === Symbol.for("react.memo_cache_sentinel")
              ? ((O = (0, r.jsx)(o.A, { id: "codex.space.page.archive.cancel", defaultMessage: "Cancel" })),
                ($[36] = O))
              : (O = $[36]),
            $[37] !== B
              ? ((U = (0, r.jsx)(u.$, { color: "secondary", type: "button", onClick: B, children: O })),
                ($[37] = B),
                ($[38] = U))
              : (U = $[38]),
            $[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((D = (0, r.jsx)(u.$, {
                  color: "danger",
                  type: "submit",
                  children: (0, r.jsx)(o.A, { id: "codex.space.page.archive.confirm", defaultMessage: "Delete" }),
                })),
                ($[39] = D))
              : (D = $[39]),
            $[40] !== U
              ? ((R = (0, r.jsx)(g.OO, { children: (0, r.jsxs)(g.Es, { children: [U, D] }) })),
                ($[40] = U),
                ($[41] = R))
              : (R = $[41]),
            $[42] !== N || $[43] !== R || $[44] !== E
              ? ((F = (0, r.jsxs)(g.R4, { as: "form", onSubmit: E, children: [N, R] })),
                ($[42] = N),
                ($[43] = R),
                ($[44] = E),
                ($[45] = F))
              : (F = $[45]),
            $[46] !== F || $[47] !== j
              ? ((L = (0, r.jsx)(p.lG, {
                  open: !0,
                  dialogCloseClassName: "rtl:start-auto rtl:end-4",
                  size: "compact",
                  onOpenChange: j,
                  children: F,
                })),
                ($[46] = F),
                ($[47] = j),
                ($[48] = L))
              : (L = $[48]),
            L
          )
        },
      },
    )
  },
  kiwy(e, t, a) {
    a.d(t, { E: () => E })
    var r = a("ABep"),
      n = a("QosV"),
      i = a("L6k2"),
      s = a("D7Ms"),
      l = a("T0Rc"),
      o = a("on57"),
      c = a("YdA6"),
      d = a.n(c),
      u = a("qmMi"),
      p = a("zd8w"),
      g = a("SPnB"),
      m = a("Kwur"),
      f = a("Eqxm"),
      h = a("FNdB"),
      y = a("e1xH"),
      v = a("tv8P"),
      b = a("EZCZ"),
      x = a("OWtl"),
      _ = a("IL6O"),
      w = a("rvFo"),
      I = a("eShZ"),
      S = a("wH9P")
    let A = new WeakSet(),
      P = new WeakMap(),
      C = new WeakMap(),
      j = (0, u.SZ)(
        x.u,
        () => ({ visible: globalThis.document?.visibilityState === "visible", restoredAt: 0 }),
        ({ set: e }) => {
          e({ visible: "visible" === document.visibilityState, restoredAt: 0 })
          let t = () => {
            let t = "visible" === document.visibilityState
            e({ visible: t, restoredAt: t ? Date.now() : 0 })
          }
          return (
            document.addEventListener("visibilitychange", t),
            () => document.removeEventListener("visibilitychange", t)
          )
        },
      )
    function E(e) {
      let t,
        a,
        o,
        c,
        f,
        h,
        b,
        A,
        P,
        C,
        E,
        M,
        k,
        q,
        N = (0, n.c)(71),
        {
          pageId: O,
          updatedAt: U,
          fallback: D,
          loadingFallback: R,
          gridVisible: F,
          isTextPage: L,
          refreshWhileVisible: $,
          fit: G,
          renderCover: Q,
          slideStack: z,
        } = e,
        B = void 0 !== L && L,
        K = void 0 === $ || $,
        W = void 0 === G ? "contain" : G,
        Y = void 0 !== z && z,
        V = (0, u.gh)(x.u),
        Z = !1 !== F,
        { visible: H, restoredAt: X } = (0, u.Ul)(j)
      N[0] !== F || N[1] !== H ? ((t = !d()(F) && H), (N[0] = F), (N[1] = H), (N[2] = t)) : (t = N[2])
      let J = t,
        ee = (0, u.Ul)(v.spaceAccountId$),
        et = (0, u.Ul)(g.o8),
        [ea, er] = (0, p.useState)(null),
        en = (0, p.useRef)(null)
      if (N[3] !== ee || N[4] !== O || N[5] !== U || N[6] !== et)
        ((a = [...(0, S.V)(ee, O), "presentation-preview", et, U]),
          (N[3] = ee),
          (N[4] = O),
          (N[5] = U),
          (N[6] = et),
          (N[7] = a))
      else a = N[7]
      let ei = a,
        es = (0, p.useRef)(null)
      ;(N[8] !== B || N[9] !== ei
        ? ((o = () => {
            es.current = B ? ei : null
          }),
          (c = [B, ei]),
          (N[8] = B),
          (N[9] = ei),
          (N[10] = o),
          (N[11] = c))
        : ((o = N[10]), (c = N[11])),
        (0, p.useEffect)(o, c),
        N[12] !== B || N[13] !== ei || N[14] !== V.queryClient || N[15] !== Z
          ? ((f = () => {
              let e = es.current
              return B && Z && null != e && (0, s.Cp)(e, ei.slice(0, -1))
                ? (V.queryClient.getQueryData(e) ?? void 0)
                : void 0
            }),
            (N[12] = B),
            (N[13] = ei),
            (N[14] = V.queryClient),
            (N[15] = Z),
            (N[16] = f))
          : (f = N[16]),
        N[17] !== ee || N[18] !== J || N[19] !== Z || N[20] !== et
          ? ((h = (e) => J && null != ee && null != et && (Z || !d()(e.state.data))),
            (N[17] = ee),
            (N[18] = J),
            (N[19] = Z),
            (N[20] = et),
            (N[21] = h))
          : (h = N[21]),
        N[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = { pageHoverPreviewImage: !0 }), (N[22] = b))
          : (b = N[22]),
        N[23] !== B || N[24] !== K || N[25] !== X || N[26] !== Z
          ? ((A = (e) =>
              null == e.state.data || 0 === e.state.dataUpdatedAt
                ? 0
                : Z && K
                  ? B
                    ? e.state.dataUpdatedAt < X
                      ? 0
                      : 1 / 0
                    : w.D.THIRTY_SECONDS
                  : 1 / 0),
            (N[23] = B),
            (N[24] = K),
            (N[25] = X),
            (N[26] = Z),
            (N[27] = A))
          : (A = N[27]))
      let el = B ? w.D.ONE_MINUTE : w.D.FIVE_MINUTES,
        eo = Z && K && (!B || "always"),
        ec = !!Z && !!K && "always"
      ;(N[28] !== B || N[29] !== K || N[30] !== Z
        ? ((P = (e) => {
            if (!Z) return !1
            let t = e.state.dataUpdateCount + e.state.errorUpdateCount
            if (
              (en.current?.query !== e &&
                (en.current = {
                  query: e,
                  start: 0,
                  edited: null != e.state.data && 0 === e.state.dataUpdatedAt,
                  invalidated: !1,
                }),
              e.state.isInvalidated && !en.current.invalidated && ((en.current.start = t), (en.current.edited = !0)),
              (en.current.invalidated = e.state.isInvalidated),
              !K && !(B && en.current.edited) && null != e.state.data)
            )
              return !1
            let a = e.state.data?.refreshAfterMs,
              r = null != e.state.data && null == a ? 45e3 : 1e4,
              n = a ?? 12e4,
              i = t - en.current.start
            return i <= 1 ? r : 2 === i ? n - r : 3 === i && 36e4 - n
          }),
          (N[28] = B),
          (N[29] = K),
          (N[30] = Z),
          (N[31] = P))
        : (P = N[31]),
        N[32] !== ee || N[33] !== F || N[34] !== B || N[35] !== O || N[36] !== V || N[37] !== et
          ? ((C = async (e) => {
              let { signal: t, queryKey: a } = e
              if (null == ee || null == et) return null
              let r = void 0 !== F || B ? await (0, _.b)(t) : void 0
              return (async function (e, t, a, r, n, s, l) {
                let o = () => {
                  if ((n.throwIfAborted(), e.get(v.spaceAccountId$) !== a || e.get(g.o8) !== r || !e.get(y.wr)))
                    throw Error("The Page preview is no longer active")
                }
                try {
                  o()
                  let e = await m.Request.getResponse("/pages/{page_id}/preview", {
                    parameters: { path: { page_id: t } },
                    additionalHeaders: { "ChatGPT-Account-ID": a, "Cache-Control": "no-cache, no-store" },
                    expectedIdentity: { accountId: a, userId: r },
                    assertRequestCurrent: o,
                    retry: !1,
                    signal: n,
                  })
                  if (204 === e.status) return null
                  let l = await e.blob()
                  if ((o(), "image/png" !== l.type || 0 === l.size)) return null
                  let c = 1e3 * Number(e.headers.get("X-Page-Preview-Refresh-After")),
                    d = { blob: l }
                  if ((c > 1e4 && c < 36e4 && (d.refreshAfterMs = c), !s)) {
                    let t = e.headers.get("X-Page-Preview-Sequence")
                    if (null != t && /^\d+$/.test(t)) {
                      let e = Number(t)
                      Number.isSafeInteger(e) && (d.throughSequence = e)
                    }
                    let a = await l.slice(0, 301).arrayBuffer()
                    ;(o(), (d.metadata = (0, i.q$)(new Uint8Array(a))))
                  }
                  return d
                } catch (t) {
                  if (
                    (n.throwIfAborted(),
                    (t instanceof TypeError ||
                      (t instanceof I.FetchError && (t.status >= 500 || "network" === t.errorKind))) &&
                      e.get(v.spaceAccountId$) === a &&
                      e.get(g.o8) === r &&
                      e.get(y.wr))
                  )
                    return l()
                  return null
                }
              })(V, O, ee, et, t, B, () => V.queryClient.getQueryData(a) ?? null).finally(r)
            }),
            (N[32] = ee),
            (N[33] = F),
            (N[34] = B),
            (N[35] = O),
            (N[36] = V),
            (N[37] = et),
            (N[38] = C))
          : (C = N[38]),
        N[39] !== J ||
        N[40] !== ei ||
        N[41] !== h ||
        N[42] !== A ||
        N[43] !== el ||
        N[44] !== eo ||
        N[45] !== ec ||
        N[46] !== P ||
        N[47] !== C ||
        N[48] !== f
          ? ((E = {
              queryKey: ei,
              initialData: f,
              initialDataUpdatedAt: 0,
              enabled: h,
              subscribed: J,
              meta: b,
              staleTime: A,
              gcTime: el,
              refetchOnMount: !0,
              refetchOnWindowFocus: eo,
              refetchOnReconnect: ec,
              refetchInterval: P,
              refetchIntervalInBackground: !1,
              retry: !1,
              queryFn: C,
            }),
            (N[39] = J),
            (N[40] = ei),
            (N[41] = h),
            (N[42] = A),
            (N[43] = el),
            (N[44] = eo),
            (N[45] = ec),
            (N[46] = P),
            (N[47] = C),
            (N[48] = f),
            (N[49] = E))
          : (E = N[49]))
      let { data: ed, dataUpdatedAt: eu, isPending: ep } = (0, l.I)(E, V.queryClient)
      if (R && null != ee && null != et && (!Z || ep)) return R
      if (!Z || null == ed || ea === eu) return D
      N[50] !== eu || N[51] !== ei || N[52] !== V.queryClient
        ? ((M = () => {
            ;(er(eu), V.queryClient.invalidateQueries({ queryKey: ei, exact: !0, refetchType: "none" }))
          }),
          (N[50] = eu),
          (N[51] = ei),
          (N[52] = V.queryClient),
          (N[53] = M))
        : (M = N[53])
      let eg = M
      if (Q) {
        let e
        return (
          N[54] !== ed || N[55] !== eg || N[56] !== Q
            ? ((e = Q(ed, eg)), (N[54] = ed), (N[55] = eg), (N[56] = Q), (N[57] = e))
            : (e = N[57]),
          e
        )
      }
      let em = V.queryClient.getQueryState(ei)?.dataUpdateCount === 1
      N[58] !== B || N[59] !== ei
        ? ((k = JSON.stringify(B ? ei.slice(0, -1) : ei)), (N[58] = B), (N[59] = ei), (N[60] = k))
        : (k = N[60])
      let ef = R && (Y || em ? R : D)
      return (
        N[61] !== ed.blob ||
        N[62] !== ed.metadata ||
        N[63] !== ed.throughSequence ||
        N[64] !== W ||
        N[65] !== B ||
        N[66] !== eg ||
        N[67] !== Y ||
        N[68] !== k ||
        N[69] !== ef
          ? ((q = (0, r.jsx)(
              T,
              {
                blob: ed.blob,
                throughSequence: ed.throughSequence,
                slideStack: Y,
                metadata: ed.metadata,
                fit: W,
                isTextPage: B,
                placeholder: ef,
                onError: eg,
              },
              k,
            )),
            (N[61] = ed.blob),
            (N[62] = ed.metadata),
            (N[63] = ed.throughSequence),
            (N[64] = W),
            (N[65] = B),
            (N[66] = eg),
            (N[67] = Y),
            (N[68] = k),
            (N[69] = ef),
            (N[70] = q))
          : (q = N[70]),
        q
      )
    }
    function T(e) {
      let t,
        a,
        i,
        s,
        l,
        c,
        d,
        u,
        g,
        m,
        y,
        v,
        x = (0, n.c)(51),
        {
          blob: _,
          throughSequence: w,
          isTextPage: I,
          slideStack: S,
          metadata: j,
          fit: E,
          placeholder: T,
          onError: M,
        } = e
      x[0] !== _ || x[1] !== j || x[2] !== w
        ? ((t = () => (A.has(_) ? { blob: _, metadata: j, throughSequence: w } : void 0)),
          (x[0] = _),
          (x[1] = j),
          (x[2] = w),
          (x[3] = t))
        : (t = x[3])
      let [k, q] = (0, p.useState)(t),
        [N, O] = (0, p.useState)()
      x[4] !== _ || x[5] !== j?.backgroundColor || x[6] !== j?.slideCount || x[7] !== N?.blob || x[8] !== S
        ? ((a = S && j?.backgroundColor == null && j?.slideCount !== 1 && N?.blob !== _ && !P.has(_)),
          (x[4] = _),
          (x[5] = j?.backgroundColor),
          (x[6] = j?.slideCount),
          (x[7] = N?.blob),
          (x[8] = S),
          (x[9] = a))
        : (a = x[9])
      let U = a
      ;(x[10] !== _ || x[11] !== U
        ? ((i = () => {
            if (!U) return
            let e = !0
            return (
              (function (e) {
                let t = P.get(e)
                if (t) return Promise.resolve(t)
                let a = C.get(e)
                if (null != a) return a
                let r = (async () => {
                  try {
                    let t = await createImageBitmap(e, {
                      resizeWidth: 16,
                      resizeHeight: 16,
                      resizeQuality: "pixelated",
                    })
                    try {
                      return (0, b.E)(t)
                    } finally {
                      t.close()
                    }
                  } catch {
                    return
                  }
                })().then((t) => {
                  let a = { blob: e, background: t }
                  return (P.set(e, a), C.delete(e), a)
                })
                return (C.set(e, r), r)
              })(_).then((t) => {
                e && O(t)
              }),
              () => {
                e = !1
              }
            )
          }),
          (s = [_, U]),
          (x[10] = _),
          (x[11] = U),
          (x[12] = i),
          (x[13] = s))
        : ((i = x[12]), (s = x[13])),
        (0, p.useEffect)(i, s))
      let D = U && k ? k.blob : _,
        R = D === _ ? w : k?.throughSequence
      x[14] !== _ || x[15] !== k || x[16] !== j
        ? ((l = k ?? { blob: _, metadata: j }), (x[14] = _), (x[15] = k), (x[16] = j), (x[17] = l))
        : (l = x[17])
      let F = l
      x[18] !== N || x[19] !== F.blob
        ? ((c = N?.blob === F.blob ? N : P.get(F.blob)), (x[18] = N), (x[19] = F.blob), (x[20] = c))
        : (c = x[20])
      let L = c,
        $ = (null == k && null != T) || (U && F.blob === _)
      x[21] !== I || x[22] !== S || x[23] !== D
        ? ((d = (e) => {
            if (null == e) return
            let t = URL.createObjectURL(D)
            e.src = t
            let a = I || S ? void 0 : (0, f.b)(e)
            return () => {
              ;(a?.(), URL.revokeObjectURL(t))
            }
          }),
          (x[21] = I),
          (x[22] = S),
          (x[23] = D),
          (x[24] = d))
        : (d = x[24])
      let G = d,
        Q = "cover" === E ? "object-cover" : "object-contain"
      x[25] !== Q ? ((u = (0, o.A)("absolute inset-0 size-full", Q)), (x[25] = Q), (x[26] = u)) : (u = x[26])
      let z = I ? void 0 : ""
      ;(x[27] !== _ ||
      x[28] !== I ||
      x[29] !== j ||
      x[30] !== T ||
      x[31] !== S ||
      x[32] !== D ||
      x[33] !== R ||
      x[34] !== w
        ? ((g = (e) => {
            let { currentTarget: t } = e
            ;(I ||
              t.currentSrc !== t.src ||
              ((t.dataset.presentationPreviewLoadedSrc = t.currentSrc),
              (t.dataset.presentationPreviewSequence = R?.toString() ?? "")),
              A.add(D),
              (S || T) && D === _ && q({ blob: _, metadata: j, throughSequence: w }))
          }),
          (x[27] = _),
          (x[28] = I),
          (x[29] = j),
          (x[30] = T),
          (x[31] = S),
          (x[32] = D),
          (x[33] = R),
          (x[34] = w),
          (x[35] = g))
        : (g = x[35]),
        x[36] !== G || x[37] !== M || x[38] !== z || x[39] !== g || x[40] !== u
          ? ((m = (0, r.jsx)("img", {
              ref: G,
              className: u,
              alt: "",
              draggable: !1,
              "data-presentation-preview-image": z,
              onLoad: g,
              onError: M,
            })),
            (x[36] = G),
            (x[37] = M),
            (x[38] = z),
            (x[39] = g),
            (x[40] = u),
            (x[41] = m))
          : (m = x[41]))
      let B = m,
        K = $ && T
      return (
        x[42] !== $ || x[43] !== B || x[44] !== S || x[45] !== F.metadata || x[46] !== L?.background
          ? ((y = S
              ? (0, r.jsx)(h.k, { metadata: F.metadata, fallbackBackground: L?.background, hidden: $, children: B })
              : B),
            (x[42] = $),
            (x[43] = B),
            (x[44] = S),
            (x[45] = F.metadata),
            (x[46] = L?.background),
            (x[47] = y))
          : (y = x[47]),
        x[48] !== K || x[49] !== y
          ? ((v = (0, r.jsxs)(r.Fragment, { children: [K, y] })), (x[48] = K), (x[49] = y), (x[50] = v))
          : (v = x[50]),
        v
      )
    }
  },
  VQtk(e, t, a) {
    let r = (0, a("Bbed")._)(
      async () =>
        (await Promise.all([a.e(704809), a.e(920484), a.e(18272), a.e(15796)]).then(a.bind(a, "qNRB")))
          .PageThumbnailPreview,
      { fallback: ({ loadingFallback: e }) => e, errorFallback: ({ unavailableFallback: e }) => e ?? null },
    )
    a.d(t, {}, { I: r })
  },
  OpPi(e, t, a) {
    var r = a("qmMi"),
      n = a("OWtl")
    let i = (0, r.vP)(n.u, !1)
    a.d(
      t,
      {},
      {
        O: async function (e, t) {
          if (!e.get(i)) {
            e.set(i, !0)
            try {
              await t()
            } finally {
              e.set(i, !1)
            }
          }
        },
        q: i,
      },
    )
  },
  GEsy(e, t, a) {
    var r = a("QosV"),
      n = a("zd8w")
    a.d(
      t,
      {},
      {
        o: function (e, t) {
          let a,
            i,
            s = (0, r.c)(4),
            [l, o] = (0, n.useState)(e)
          return (
            s[0] !== t || s[1] !== e
              ? ((a = () => {
                  let a = window.setTimeout(() => o(e), t)
                  return () => window.clearTimeout(a)
                }),
                (i = [e, t]),
                (s[0] = t),
                (s[1] = e),
                (s[2] = a),
                (s[3] = i))
              : ((a = s[2]), (i = s[3])),
            (0, n.useEffect)(a, i),
            l
          )
        },
      },
    )
  },
  ZII9(e, t, a) {
    let r = (0, a("ESTr").a)({
      name: "arrow-up-line-horizontal-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        visualBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        center: { x: 7.999756, y: 8.020752 },
        insets: { top: 2.182129, right: 2.80835, bottom: 2.140625, left: 2.807861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8.020752 }, foreground: { x: 7.999756, y: 8.020752 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.6663 12.8083C12.9562 12.8083 13.1917 13.0438 13.1917 13.3337C13.1916 13.6236 12.9561 13.8591 12.6663 13.8591H3.33325C3.04336 13.8591 2.80796 13.6236 2.80786 13.3337C2.80786 13.0438 3.0433 12.8083 3.33325 12.8083H12.6663Z" fill="currentColor"/> <path d="M7.27466 2.48218C7.64985 2.10704 8.24416 2.08374 8.64673 2.41187L8.72485 2.48218L11.7043 5.46167C11.9092 5.66657 11.909 5.9988 11.7043 6.20386C11.4993 6.40888 11.1672 6.40888 10.9622 6.20386L8.52563 3.76733V10.5007C8.52536 10.7903 8.28989 11.025 8.00024 11.0251C7.71046 11.0251 7.47512 10.7905 7.47485 10.5007V3.76538L5.03735 6.20386C4.83233 6.40888 4.50019 6.40888 4.29517 6.20386C4.09072 5.99879 4.09033 5.6665 4.29517 5.46167L7.27466 2.48218Z" fill="currentColor"/>',
    })
    a.d(t, {}, { U: r })
  },
  dQD8(e, t, a) {
    var r = a("DNn3")
    let n = { some: 0, all: 1 }
    a.d(
      t,
      {},
      {
        l: function (e, t, { root: a, margin: i, amount: s = "some" } = {}) {
          let l = (0, r.K)(e),
            o = new WeakMap(),
            c = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  let a = o.get(e.target)
                  if (!!a !== e.isIntersecting)
                    if (e.isIntersecting) {
                      let a = t(e.target, e)
                      "function" == typeof a ? o.set(e.target, a) : c.unobserve(e.target)
                    } else "function" == typeof a && (a(e), o.delete(e.target))
                })
              },
              { root: a, rootMargin: i, threshold: "number" == typeof s ? s : n[s] },
            )
          return (l.forEach((e) => c.observe(e)), () => c.disconnect())
        },
      },
    )
  },
  mEbU(e, t, a) {
    var r = a("zd8w"),
      n = a("dQD8")
    a.d(
      t,
      {},
      {
        W: function (e, { root: t, margin: a, amount: i, once: s = !1, initial: l = !1 } = {}) {
          let [o, c] = (0, r.useState)(l)
          return (
            (0, r.useEffect)(() => {
              if (!e.current || (s && o)) return
              let r = { root: (t && t.current) || void 0, margin: a, amount: i }
              return (0, n.l)(e.current, () => (c(!0), s ? void 0 : () => c(!1)), r)
            }, [t, e, a, s, i]),
            o
          )
        },
      },
    )
  },
}
//# sourceMappingURL=461009.abb1bd4b6b.js.map
