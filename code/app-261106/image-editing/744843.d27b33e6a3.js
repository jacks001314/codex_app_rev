export const __rspack_esm_ids = [744843]
export const __webpack_modules__ = {
  BsAN(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("YAOF"),
      i = n("on57"),
      o = n("zd8w")
    let s = new Set(["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"])
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            n,
            c,
            u,
            d,
            m,
            h,
            g,
            p,
            f,
            C,
            v,
            x,
            b,
            w,
            y,
            P,
            j,
            L,
            S,
            R,
            k,
            M,
            N,
            I,
            E,
            T,
            z = (0, a.c)(73),
            {
              "aria-label": A,
              className: D,
              disabled: H,
              forceExpanded: _,
              min: V,
              max: Z,
              name: B,
              title: O,
              preserveTextFocus: Y,
              value: X,
              onValueChange: W,
              onInteractionStart: F,
              onInteractionEnd: K,
            } = e,
            $ = void 0 !== Y && Y,
            [U, G] = (0, o.useState)(!1),
            [Q, q] = (0, o.useState)(!1),
            [J, ee] = (0, o.useState)(!1),
            et = !H && ((void 0 !== _ && _) || U || Q || J),
            en = (0, o.useRef)(null),
            er = (0, o.useRef)(null),
            ea = (0, o.useRef)(null)
          z[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (z[0] = t)) : (t = z[0])
          let el = (0, o.useRef)(t),
            ei = (0, o.useRef)(null)
          z[1] !== K
            ? ((n = (e) => {
                if (ea.current === e) {
                  if (((ea.current = null), "pointer" === e)) {
                    q(!1)
                    let e = ei.current
                    ;((ei.current = null),
                      e?.textarea.isConnected &&
                        e.slider.contains(e.textarea.ownerDocument.activeElement) &&
                        e.textarea.focus({ preventScroll: !0 }))
                  }
                  K?.()
                }
              }),
              (z[1] = K),
              (z[2] = n))
            : (n = z[2])
          let eo = n
          z[3] !== F
            ? ((c = (e) => {
                null == ea.current && ((ea.current = e), "pointer" === e && q(!0), F?.())
              }),
              (z[3] = F),
              (z[4] = c))
            : (c = z[4])
          let es = c
          z[5] !== K
            ? ((u = () => {
                null != ea.current && ((ea.current = null), el.current.clear(), (ei.current = null), K?.())
              }),
              (z[5] = K),
              (z[6] = u))
            : (u = z[6])
          let ec = (0, o.useEffectEvent)(u)
          ;(z[7] !== ec ? ((d = () => () => ec()), (z[7] = ec), (z[8] = d)) : (d = z[8]),
            z[9] === Symbol.for("react.memo_cache_sentinel") ? ((m = []), (z[9] = m)) : (m = z[9]),
            (0, o.useEffect)(d, m),
            z[10] !== J
              ? ((g = () => {
                  let e = en.current?.ownerDocument
                  if (!J || null == e) return
                  let t = () => ee(!1)
                  return (e.addEventListener("pointerdown", t, !0), () => e.removeEventListener("pointerdown", t, !0))
                }),
                (h = [J]),
                (z[10] = J),
                (z[11] = h),
                (z[12] = g))
              : ((h = z[11]), (g = z[12])),
            (0, o.useEffect)(g, h),
            z[13] !== H
              ? ((p = (e) => {
                  let t = er.current?.getBoundingClientRect()
                  G(!H && "touch" !== e.pointerType && null != t && e.clientX >= t.left && e.clientX <= t.right)
                }),
                (z[13] = H),
                (z[14] = p))
              : (p = z[14]))
          let eu = p,
            ed = H ? "cursor-not-allowed" : "cursor-ns-resize",
            em = H && "opacity-50"
          z[15] !== D || z[16] !== ed || z[17] !== em
            ? ((f = (0, i.A)(
                "relative flex h-48 w-8 touch-none items-center justify-center select-none browser:h-56 browser:w-12",
                ed,
                em,
                D,
              )),
              (z[15] = D),
              (z[16] = ed),
              (z[17] = em),
              (z[18] = f))
            : (f = z[18])
          let eh = $ || void 0,
            eg = Math.min(Math.max(X, V), Z)
          ;(z[19] !== eg ? ((C = [eg]), (z[19] = eg), (z[20] = C)) : (C = z[20]),
            z[21] !== eo
              ? ((v = () => {
                  ;(ee(!1), el.current.clear(), eo("keyboard"))
                }),
                (z[21] = eo),
                (z[22] = v))
              : (v = z[22]),
            z[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (e) => {
                  ee("pointer" !== ea.current && e.target.matches(":focus-visible"))
                }),
                (z[23] = x))
              : (x = z[23]),
            z[24] === Symbol.for("react.memo_cache_sentinel") ? ((b = () => G(!1)), (z[24] = b)) : (b = z[24]),
            z[25] !== es || z[26] !== H || z[27] !== eo || z[28] !== $
              ? ((w = (e) => {
                  if (H || 0 !== e.button) return void e.preventDefault()
                  ;(ee(!1), el.current.clear(), eo("keyboard"))
                  let t = e.currentTarget.ownerDocument.activeElement
                  ;((ei.current =
                    $ && t instanceof HTMLTextAreaElement && null != t.closest("[data-sketch-canvas-surface]")
                      ? { textarea: t, slider: e.currentTarget }
                      : null),
                    es("pointer"))
                }),
                (z[25] = es),
                (z[26] = H),
                (z[27] = eo),
                (z[28] = $),
                (z[29] = w))
              : (w = z[29]),
            z[30] !== eo
              ? ((y = () => eo("pointer")),
                (P = () => eo("pointer")),
                (j = () => eo("pointer")),
                (z[30] = eo),
                (z[31] = y),
                (z[32] = P),
                (z[33] = j))
              : ((y = z[31]), (P = z[32]), (j = z[33])),
            z[34] !== es || z[35] !== H
              ? ((L = (e) => {
                  !H && "pointer" !== ea.current && s.has(e.key) && (ee(!0), el.current.add(e.key), es("keyboard"))
                }),
                (z[34] = es),
                (z[35] = H),
                (z[36] = L))
              : (L = z[36]),
            z[37] !== eo
              ? ((S = (e) => {
                  s.has(e.key) && (el.current.delete(e.key), 0 === el.current.size && eo("keyboard"))
                }),
                (z[37] = eo),
                (z[38] = S))
              : (S = z[38]),
            z[39] !== H || z[40] !== W
              ? ((R = (e) => {
                  let [t] = e
                  H || null == t || W(t)
                }),
                (z[39] = H),
                (z[40] = W),
                (z[41] = R))
              : (R = z[41]))
          let ep = et
            ? "polygon(10% 0%, 90% 0%, calc(50% + 1px) 100%, calc(50% - 1px) 100%)"
            : "polygon(calc(50% - 1px) 0%, calc(50% + 1px) 0%, calc(50% + 1px) 100%, calc(50% - 1px) 100%)"
          ;(z[42] !== ep
            ? ((k = (0, r.jsx)("div", {
                ref: er,
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-y-4 start-1/2 w-6 -translate-x-1/2 rtl:translate-x-1/2 browser:w-10",
                children: (0, r.jsx)("div", {
                  className:
                    "absolute h-full w-full bg-[#8f8f8f]/40 transition-[clip-path] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[clip-path] motion-reduce:transition-none dark:bg-[#afafaf]/40",
                  style: { clipPath: ep },
                }),
              })),
              (z[42] = ep),
              (z[43] = k))
            : (k = z[43]),
            z[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = (0, r.jsx)(l.CC, { className: "relative h-[calc(100%_-_2rem)] w-full bg-transparent" })),
                (z[44] = M))
              : (M = z[44]))
          let ef = !H && J && "outline outline-2 outline-offset-2 outline-[#2c67c5]",
            eC = et ? "scale-110" : "scale-100"
          return (
            z[45] !== ef || z[46] !== eC
              ? ((N = (0, i.A)(
                  "pointer-events-none block size-4 rounded-full border border-black/20 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out motion-reduce:transition-none browser:size-5",
                  ef,
                  eC,
                )),
                (z[45] = ef),
                (z[46] = eC),
                (z[47] = N))
              : (N = z[47]),
            z[48] !== N
              ? ((I = (0, r.jsx)("span", { "aria-hidden": !0, className: N })), (z[48] = N), (z[49] = I))
              : (I = z[49]),
            z[50] !== A || z[51] !== I
              ? ((E = (0, r.jsx)(l.zi, {
                  "aria-label": A,
                  className: "relative flex size-8 items-center justify-center rounded-full focus:outline-none",
                  children: I,
                })),
                (z[50] = A),
                (z[51] = I),
                (z[52] = E))
              : (E = z[52]),
            z[53] !== H ||
            z[54] !== Z ||
            z[55] !== V ||
            z[56] !== B ||
            z[57] !== f ||
            z[58] !== eh ||
            z[59] !== C ||
            z[60] !== v ||
            z[61] !== w ||
            z[62] !== y ||
            z[63] !== P ||
            z[64] !== j ||
            z[65] !== L ||
            z[66] !== S ||
            z[67] !== R ||
            z[68] !== k ||
            z[69] !== E ||
            z[70] !== O ||
            z[71] !== eu
              ? ((T = (0, r.jsxs)(l.bL, {
                  ref: en,
                  className: f,
                  "data-sketch-preserve-text-focus": eh,
                  disabled: H,
                  min: V,
                  max: Z,
                  name: B,
                  title: O,
                  orientation: "vertical",
                  step: 1,
                  value: C,
                  onBlur: v,
                  onFocus: x,
                  onPointerEnter: eu,
                  onPointerMove: eu,
                  onPointerLeave: b,
                  onPointerDown: w,
                  onPointerUp: y,
                  onPointerCancel: P,
                  onLostPointerCapture: j,
                  onKeyDown: L,
                  onKeyUp: S,
                  onValueChange: R,
                  children: [k, M, E],
                })),
                (z[53] = H),
                (z[54] = Z),
                (z[55] = V),
                (z[56] = B),
                (z[57] = f),
                (z[58] = eh),
                (z[59] = C),
                (z[60] = v),
                (z[61] = w),
                (z[62] = y),
                (z[63] = P),
                (z[64] = j),
                (z[65] = L),
                (z[66] = S),
                (z[67] = R),
                (z[68] = k),
                (z[69] = E),
                (z[70] = O),
                (z[71] = eu),
                (z[72] = T))
              : (T = z[72]),
            T
          )
        },
      },
    )
  },
  pDKn(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("on57"),
      i = n("v7qY"),
      o = n("I0AH")
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            s,
            c,
            u,
            d = (0, a.c)(15),
            { children: m, container: h, ref: g, zoom: p } = e,
            f = null == h && "absolute start-button-toolbar-inline top-1/2 z-30 -translate-y-1/2"
          ;(d[0] !== f ? ((t = (0, l.A)("pointer-events-none", f)), (d[0] = f), (d[1] = t)) : (t = d[1]),
            d[2] !== h || d[3] !== p
              ? ((n = null == h ? { zoom: p } : void 0), (d[2] = h), (d[3] = p), (d[4] = n))
              : (n = d[4]),
            d[5] !== m
              ? ((s = (0, r.jsx)(o.b, { className: "pointer-events-auto", children: m })), (d[5] = m), (d[6] = s))
              : (s = d[6]),
            d[7] !== g || d[8] !== t || d[9] !== n || d[10] !== s
              ? ((c = (0, r.jsx)("div", {
                  ref: g,
                  className: t,
                  style: n,
                  "data-annotation-control": "",
                  children: s,
                })),
                (d[7] = g),
                (d[8] = t),
                (d[9] = n),
                (d[10] = s),
                (d[11] = c))
              : (c = d[11]))
          let C = c
          return (
            d[12] !== h || d[13] !== C
              ? ((u = null == h ? C : (0, i.createPortal)(C, h)), (d[12] = h), (d[13] = C), (d[14] = u))
              : (u = d[14]),
            u
          )
        },
      },
    )
  },
  qUfL(e, t, n) {
    n.d(t, { I: () => X })
    var r = n("ABep"),
      a = n("QosV"),
      l = n("eHJT"),
      i = n("zd8w"),
      o = "Stage-Mxf0Ut",
      s = "Image-wmW9sJ",
      c = "ZoomControlButton-wbCK5g",
      u = "CanvasImageButton-Zztyms"
    let d = { x: 0, y: 0 },
      m = { maxOffsetX: 1 / 0, maxOffsetY: 1 / 0 },
      h = { maxOffsetX: 0, maxOffsetY: 0 }
    function g(e, t, n) {
      return Math.min(Math.max(e, t), n)
    }
    function p(e, t) {
      return { x: g(e.x, -t.maxOffsetX, t.maxOffsetX), y: g(e.y, -t.maxOffsetY, t.maxOffsetY) }
    }
    function f(e, t) {
      return e.x === t.x && e.y === t.y
    }
    function C(e, t) {
      let n = e - t
      return n > 0 ? n / 2 + 24 : 0
    }
    function v(e) {
      return Math.round(e)
    }
    function x(e) {
      return e <= 0 ? 1 : Math.min(1, 10 / e)
    }
    function b(e, t) {
      return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY)
    }
    function w(e, t) {
      return { clientX: (e.clientX + t.clientX) / 2, clientY: (e.clientY + t.clientY) / 2 }
    }
    let y = (0, i.createContext)(null)
    function P() {
      let e = (0, i.useContext)(y)
      if (null == e) throw Error("ImageViewer components must be rendered inside ImageViewer")
      return e
    }
    function j({
      image: e,
      imageRef: t,
      zoomedImageLabel: n,
      defaultZoomPercent: a,
      onZoomPercentChange: l,
      unpadded: u = !1,
      minimumFitHeight: y,
      renderOverlay: P,
      panOnDrag: S = !1,
      panBeyondImage: R = !1,
      overflowViewportRef: k,
      onViewportInteractionStart: M,
      shouldPanOnPointerDown: N,
      ...I
    }) {
      let E = null != P,
        T = (0, i.useRef)(null),
        z = (0, i.useRef)(null),
        A = (0, i.useRef)(1),
        D = (0, i.useRef)(1),
        H = (0, i.useRef)(d),
        _ = (0, i.useRef)(d),
        V = (0, i.useRef)(h),
        Z = (0, i.useRef)(null),
        B = (0, i.useRef)(null),
        O = (0, i.useRef)(d),
        Y = (0, i.useRef)(d),
        X = (0, i.useRef)(null),
        W = (0, i.useRef)(null),
        F = (0, i.useRef)(null),
        [K, $] = (0, i.useState)(1),
        [U, G] = (0, i.useState)(d),
        [Q, q] = (0, i.useState)(!1),
        [J, ee] = (0, i.useState)(!1),
        et = (0, i.useRef)(100),
        en = (0, i.useRef)(a),
        er = (0, i.useRef)(l)
      er.current = l
      let [ea, el] = (0, i.useState)(100),
        [ei, eo] = (0, i.useState)(null),
        [es, ec] = (0, i.useState)(null),
        eu = (0, i.useRef)(!1),
        [ed, em] = (0, i.useState)(!1),
        eh = (0, i.useCallback)((e) => {
          ;((eu.current = e), em(e))
        }, []),
        eg = (0, i.useRef)(0),
        ep = (0, i.useRef)(M)
      ep.current = M
      let ef =
          null == ei
            ? null
            : {
                fitImageRect: ei,
                imageRect: {
                  left: ei.left + U.x + (ei.width * (1 - K)) / 2,
                  top: ei.top + U.y + (ei.height * (1 - K)) / 2,
                  width: ei.width * K,
                  height: ei.height * K,
                },
                isInteracting: Q || J,
                isDragging: Q,
                isPanReady: ed,
                adjustViewport: (e, t) => {
                  Number.isFinite(e) &&
                    e > 0 &&
                    Number.isFinite(t.x) &&
                    Number.isFinite(t.y) &&
                    eP(A.current * e, void 0, t)
                },
              },
        eC = (0, i.useCallback)(
          (e) => {
            z.current = e
            let n = (function (e, t) {
              if ("function" == typeof e) {
                let n = e(t)
                return "function" == typeof n ? n : () => e(null)
              }
              if (null != e)
                return (
                  (e.current = t),
                  () => {
                    e.current = null
                  }
                )
            })(t, e)
            return () => {
              ;((z.current = null), n?.())
            }
          },
          [t],
        ),
        ev = (0, i.useCallback)((e) => {
          ;((_.current = e), G((t) => (f(t, e) ? t : e)))
        }, []),
        ex = (0, i.useCallback)(
          (e) => {
            let t = R
              ? m
              : (function ({ nextScale: e, renderedScale: t, viewportElement: n, imageElement: r }) {
                  if (e <= 1 || null == n || null == r) return h
                  let a = n.clientWidth,
                    l = n.clientHeight,
                    i = r.getBoundingClientRect(),
                    o = t > 0 ? t : 1,
                    s = i.width / o,
                    c = i.height / o
                  return a <= 0 || l <= 0 || s <= 0 || c <= 0 ? h : { maxOffsetX: C(s * e, a), maxOffsetY: C(c * e, l) }
                })({ nextScale: e, renderedScale: D.current, viewportElement: T.current, imageElement: z.current })
            return ((V.current = t), t)
          },
          [R],
        ),
        eb = (0, i.useCallback)(() => {
          var e
          let t = z.current,
            n = T.current
          if (null != t && null != n) {
            let e = n.ownerDocument.defaultView
            if (null != e && null != y && t.naturalWidth > 0 && t.naturalHeight > 0) {
              let r = e.getComputedStyle(n),
                a = e.getComputedStyle(t),
                l = Number.parseFloat(a.borderLeftWidth || "0") + Number.parseFloat(a.borderRightWidth || "0"),
                i = Number.parseFloat(a.borderTopWidth || "0") + Number.parseFloat(a.borderBottomWidth || "0"),
                o =
                  n.clientWidth -
                  Number.parseFloat(r.paddingLeft || "0") -
                  Number.parseFloat(r.paddingRight || "0") -
                  l,
                s =
                  n.clientHeight -
                  Number.parseFloat(r.paddingTop || "0") -
                  Number.parseFloat(r.paddingBottom || "0") -
                  i,
                c = Math.max(0, Math.min(Math.max(1, y / t.naturalHeight), o / t.naturalWidth, s / t.naturalHeight))
              ;((t.style.width = `${t.naturalWidth * c + l}px`), (t.style.height = `${t.naturalHeight * c + i}px`))
            } else (t.style.removeProperty("width"), t.style.removeProperty("height"))
          }
          if (E && null != t && null != n) {
            let e = t.getBoundingClientRect(),
              r = n.getBoundingClientRect(),
              a = k?.current?.getBoundingClientRect(),
              l = null == a ? null : { left: a.left - r.left, top: a.top - r.top, width: a.width, height: a.height }
            ec((e) =>
              e?.left === l?.left && e?.top === l?.top && e?.width === l?.width && e?.height === l?.height ? e : l,
            )
            let i = t.ownerDocument.defaultView?.getComputedStyle(t),
              o = Number.parseFloat(i?.borderLeftWidth || "0"),
              s = Number.parseFloat(i?.borderTopWidth || "0"),
              c = e.width / D.current,
              u = e.height / D.current,
              d = {
                left: e.left - r.left - H.current.x + (e.width - c) / 2 + o,
                top: e.top - r.top - H.current.y + (e.height - u) / 2 + s,
                width: c - 2 * o,
                height: u - 2 * s,
              }
            eo((e) => (e?.left === d.left && e.top === d.top && e.width === d.width && e.height === d.height ? e : d))
          }
          let r =
            null == (e = z.current) ||
            e.naturalWidth <= 0 ||
            e.naturalHeight <= 0 ||
            e.clientWidth <= 0 ||
            e.clientHeight <= 0
              ? null
              : 100 * Math.min(e.clientWidth / e.naturalWidth, e.clientHeight / e.naturalHeight)
          if (null == r) return
          let a = et.current,
            l = A.current,
            i = en.current
          if (((et.current = r), (en.current = null), null != i || (1 !== l && a > 0 && Math.abs(a - r) >= 0.01))) {
            let e = g((i ?? a * l) / r, x(r), 5)
            e !== l && ((A.current = e), $(e))
          }
          el((e) => (0.01 > Math.abs(e - r) ? e : r))
        }, [E, y, k]),
        ew = (0, i.useCallback)(() => {
          let e = Z.current,
            t = T.current
          ;((Z.current = null),
            (B.current = null),
            null != e && t?.hasPointerCapture(e) === !0 && t.releasePointerCapture(e),
            q(!1))
        }, []),
        ey = (0, i.useCallback)(() => {
          if ((eb(), !R && A.current <= 1)) {
            ;((V.current = h), ev(d), ew())
            return
          }
          let e = ex(A.current)
          ev(p(_.current, e))
        }, [ex, R, ew, eb, ev]),
        eP = (0, i.useCallback)(
          (e, t, n = d) => {
            let r = A.current,
              a = g(e, x(et.current), 5),
              l = n.x !== d.x || n.y !== d.y
            if (a !== r || l) {
              if (((A.current = a), !R && a <= 1)) ((V.current = h), ev(d), ew())
              else {
                let e = ex(a),
                  l = z.current,
                  i = { x: _.current.x + n.x, y: _.current.y + n.y }
                if (null != t && null != l) {
                  let e = l.getBoundingClientRect(),
                    n = e.left + e.width / 2,
                    o = e.top + e.height / 2,
                    s = a / r
                  i = { x: i.x + (1 - s) * (t.clientX - n), y: i.y + (1 - s) * (t.clientY - o) }
                }
                ev(p(i, e))
              }
              ;($(a), a !== r && er.current?.(a * et.current))
            }
          },
          [ex, R, ew, ev],
        ),
        ej = (0, i.useCallback)(
          (e) => {
            ;(ep.current?.(), eP(A.current + ("in" === e ? 0.25 : -0.25)))
          },
          [eP],
        ),
        eL = (0, i.useCallback)(() => {
          ;(ep.current?.(),
            (A.current = 1),
            (V.current = h),
            ev(d),
            ew(),
            $((e) => (1 === e ? e : 1)),
            er.current?.(null))
        }, [ew, ev]),
        eS = (0, i.useCallback)(
          (e) => {
            if (!Number.isFinite(e)) return
            let t = et.current
            t <= 0 || (ep.current?.(), eP(e / t))
          },
          [eP],
        ),
        eR = (0, i.useCallback)(
          (e) => {
            if (
              (e.target instanceof Node && !e.currentTarget.contains(e.target)) ||
              ((W.current = { clientX: e.clientX, clientY: e.clientY }), L(e.target) || "touch" === e.pointerType)
            )
              return
            let t = 1 === e.button || eu.current,
              n = 0 === e.button && null != ef && N?.(e, ef) === !0
            if (((S && !n) || (R && n)) && null != P && "mouse" === e.pointerType && 0 === e.button && !t) {
              ;(R && n && e.preventDefault(),
                (B.current = e.pointerId),
                (O.current = { x: e.clientX, y: e.clientY }),
                (Y.current = _.current))
              return
            }
            ;(null != P && t && (e.preventDefault(), e.stopPropagation()),
              (R || !(A.current <= 1)) &&
                (null == P || t || n) &&
                (0 === e.button || 1 === e.button) &&
                (e.preventDefault(),
                null != P && e.stopPropagation(),
                ep.current?.(),
                (Z.current = e.pointerId),
                (O.current = { x: e.clientX, y: e.clientY }),
                (Y.current = _.current),
                ex(A.current),
                e.currentTarget.setPointerCapture(e.pointerId),
                q(!0)))
          },
          [ex, ef, R, S, P, N],
        ),
        ek = (0, i.useCallback)(
          (e) => {
            if (((W.current = { clientX: e.clientX, clientY: e.clientY }), e.pointerId === B.current)) {
              if (e.buttons % 2 == 0) {
                B.current = null
                return
              }
              if (4 > Math.hypot(e.clientX - O.current.x, e.clientY - O.current.y)) return
              ;((B.current = null),
                ep.current?.(),
                (Z.current = e.pointerId),
                ex(A.current),
                e.currentTarget.setPointerCapture(e.pointerId),
                q(!0))
            }
            if (e.pointerId !== Z.current) {
              "touch" === e.pointerType && null != X.current && e.stopPropagation()
              return
            }
            ;(e.preventDefault(), null != P && e.stopPropagation())
            let t = e.clientX - O.current.x,
              n = e.clientY - O.current.y
            ev(p({ x: Y.current.x + t, y: Y.current.y + n }, V.current))
          },
          [ex, P, ev],
        ),
        eM = (0, i.useCallback)(
          (e) => {
            if (e.pointerId === B.current) {
              ;((B.current = null),
                "pointerup" === e.type &&
                  Math.hypot(e.clientX - O.current.x, e.clientY - O.current.y) >= 4 &&
                  (ep.current?.(), e.preventDefault(), e.stopPropagation()))
              return
            }
            e.pointerId === Z.current && (e.preventDefault(), null != P && e.stopPropagation(), ew())
          },
          [P, ew],
        ),
        eN = (0, i.useCallback)(
          (e) => {
            if (!R && A.current <= 1) return
            let t = 0,
              n = 0
            switch (e.key) {
              case "ArrowDown":
                n = -40
                break
              case "ArrowLeft":
                t = 40
                break
              case "ArrowRight":
                t = -40
                break
              case "ArrowUp":
                n = 40
                break
              default:
                return
            }
            ;(e.preventDefault(), e.stopPropagation(), ep.current?.())
            let r = ex(A.current)
            ev(p({ x: _.current.x + t, y: _.current.y + n }, r))
          },
          [ex, R, ev],
        ),
        eI = (0, i.useCallback)(() => {
          let e = z.current
          if (null == e) return null
          let t = e.getBoundingClientRect()
          return { clientX: t.left + t.width / 2, clientY: t.top + t.height / 2 }
        }, []),
        eE = (0, i.useCallback)(() => {
          ;(null != F.current && (clearTimeout(F.current), (F.current = null)), ee(!1))
        }, []),
        eT = (0, i.useCallback)(() => {
          ;(null == F.current && ep.current?.(),
            null != F.current && clearTimeout(F.current),
            ee(!0),
            (F.current = setTimeout(() => {
              ;((F.current = null), ee(!1))
            }, 150)))
        }, []),
        ez = (0, i.useCallback)(
          (e) => {
            if (!L(e.target, { allowTextInput: e.ctrlKey })) {
              if (!e.ctrlKey) {
                if (!R && A.current <= 1) return
                ;(e.preventDefault(), e.stopPropagation(), eT())
                let t = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : 1,
                  n = e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? T.current : null
                eP(A.current, void 0, { x: -e.deltaX * (n?.clientWidth ?? t), y: -e.deltaY * (n?.clientHeight ?? t) })
                return
              }
              ;(e.preventDefault(),
                e.stopPropagation(),
                eT(),
                eP(
                  A.current * Math.exp(-(0.01 * e.deltaY)),
                  (0 === e.clientX && 0 === e.clientY
                    ? (W.current ?? eI())
                    : { clientX: e.clientX, clientY: e.clientY }) ?? void 0,
                ))
            }
          },
          [eT, eI, R, eP],
        ),
        eA = (0, i.useCallback)((e) => {
          ;(null != X.current && null != e && (eg.current = e.timeStamp), (X.current = null), ee(!1))
        }, []),
        eD = (0, i.useCallback)(
          (e, t) => {
            ;(ep.current?.(),
              eE(),
              ee(!0),
              ew(),
              (X.current = { distance: b(e, t), midpoint: w(e, t), scale: A.current }))
          },
          [ew, eE],
        ),
        eH = (0, i.useCallback)(
          (e, t) => {
            let n = X.current
            if (null == n) return
            let r = b(e, t)
            if (r <= 0 || n.distance <= 0) return
            let a = w(e, t)
            ;(eP(n.scale * (r / n.distance), n.midpoint, {
              x: a.clientX - n.midpoint.clientX,
              y: a.clientY - n.midpoint.clientY,
            }),
              (X.current = { distance: r, midpoint: a, scale: A.current }))
          },
          [eP],
        )
      ;((0, i.useLayoutEffect)(() => {
        H.current = U
      }, [U]),
        (0, i.useLayoutEffect)(() => {
          ;((D.current = K), eb())
        }, [K, eb]),
        (0, i.useEffect)(() => {
          let e = T.current
          if (null == e) return
          let t = (function (e, { canStart: t, onStart: n, onMove: r, onEnd: a }) {
            let l = "pending",
              i = new Set(),
              o = new WeakSet(),
              s = ["touchstart", "touchmove", "touchend", "touchcancel"],
              c = (e) => {
                let t = "image" === l
                ;((l = "browser"), t && a(e))
              },
              u = () => {
                for (let t of s)
                  for (let n of (e.ownerDocument.removeEventListener(t, d, !0), i)) n.removeEventListener(t, d)
                ;(i.clear(), (l = "pending"))
              },
              d = {
                handleEvent(a) {
                  if (o.has(a)) return
                  if ((o.add(a), "touchend" === a.type || "touchcancel" === a.type)) {
                    ;(c(a), 0 === a.touches.length && u())
                    return
                  }
                  if ("touchstart" === a.type) {
                    for (let t of s)
                      "touchmove" !== t &&
                        e.ownerDocument.addEventListener(t, d, { capture: !0, passive: "touchstart" !== t })
                    for (let e of Array.from(a.touches)) {
                      let n = e.target
                      if (null == n) {
                        c(a)
                        continue
                      }
                      if (!i.has(n))
                        for (let r of (t(e) || c(a), i.add(n), s)) n.addEventListener(r, d, { passive: !1 })
                    }
                  }
                  if ("browser" === l) return
                  if (!a.cancelable) return void c(a)
                  let m = a.touches.item(0),
                    h = a.touches.item(1)
                  if (2 !== a.touches.length || null == m || null == h) {
                    ;("touchmove" === a.type || "image" === l || a.touches.length > 2) && c(a)
                    return
                  }
                  "pending" === l && "touchstart" !== a.type
                    ? c(a)
                    : (a.preventDefault(), a.defaultPrevented)
                      ? (a.stopPropagation(),
                        "pending" === l ? ((l = "image"), n(m, h)) : "touchmove" === a.type && r(m, h))
                      : c(a)
                },
              },
              m = {
                handleEvent(e) {
                  d.handleEvent(e)
                },
              }
            return (
              e.addEventListener("touchstart", m, { passive: !1 }),
              () => {
                ;(c(), u(), e.removeEventListener("touchstart", m))
              }
            )
          })(e, {
            canStart: (t) => t.target instanceof Node && e.contains(t.target) && !L(t.target, { allowTextInput: !0 }),
            onStart: eD,
            onMove: eH,
            onEnd: eA,
          })
          return (
            e.addEventListener("wheel", ez, { passive: !1 }),
            () => {
              ;(t(), e.removeEventListener("wheel", ez))
            }
          )
        }, [eA, eH, eD, ez]),
        (0, i.useEffect)(() => {
          let e = T.current,
            t = e?.ownerDocument.defaultView
          if (!E || null == e || null == t) return
          let n = (e) => {
              "Space" === e.code && eh(!0)
            },
            r = (e) => {
              "Space" === e.code && eh(!1)
            },
            a = () => {
              ;(eh(!1), ew())
            }
          return (
            t.addEventListener("keydown", n, !0),
            t.addEventListener("keyup", r, !0),
            t.addEventListener("blur", a),
            () => {
              ;(eh(!1),
                t.removeEventListener("keydown", n, !0),
                t.removeEventListener("keyup", r, !0),
                t.removeEventListener("blur", a))
            }
          )
        }, [E, ew, eh]),
        (0, i.useEffect)(() => {
          let e = T.current,
            t = z.current
          if (null == e || null == t || "u" < typeof ResizeObserver) return
          let n = new ResizeObserver(ey)
          return (
            n.observe(e),
            n.observe(t),
            k?.current != null && n.observe(k.current),
            () => {
              n.disconnect()
            }
          )
        }, [ey, k]),
        (0, i.useEffect)(
          () => () => {
            let e = Z.current,
              t = T.current
            ;((Z.current = null),
              null != e && t?.hasPointerCapture(e) === !0 && t.releasePointerCapture(e),
              null != F.current && clearTimeout(F.current))
          },
          [],
        ))
      let e_ =
          1 === K && f(U, d)
            ? void 0
            : {
                transform: `translate(${U.x}px, ${U.y}px) scale(${K})`,
                transformOrigin: "center center",
                transition: null != P || Q || J ? void 0 : "transform 150ms ease-out",
                willChange: Q || J ? "transform" : void 0,
              },
        eV = {
          zoomPercent: v(ea * K),
          fitZoomPercent: v(ea),
          minZoomPercent: v(ea * x(ea)),
          maxZoomPercent: v(5 * ea),
          onZoomPercentChange: eS,
          onResetZoom: eL,
        }
      return (0, r.jsxs)("div", {
        ref: T,
        className: `${o} ZoomableStage-xHb8YU${u ? " UnpaddedStage-qNP17o" : ""}`,
        "data-zoomed": K > 1 || void 0,
        "data-overflow-viewport": null != k || void 0,
        "data-pan-ready": (E && ed) || void 0,
        "data-dragging": Q || void 0,
        onPointerDown: E ? void 0 : eR,
        onPointerMove: E ? void 0 : ek,
        onPointerUp: E ? void 0 : eM,
        onPointerCancel: E ? void 0 : eM,
        onPointerDownCapture: E ? eR : void 0,
        onPointerMoveCapture: E ? ek : void 0,
        onPointerUpCapture: E ? eM : void 0,
        onPointerCancelCapture: E ? eM : void 0,
        onPointerLeave: (e) => {
          e.pointerId === B.current && (B.current = null)
        },
        onLostPointerCapture: ew,
        onClickCapture: (e) => {
          e.target instanceof Node &&
            e.currentTarget.contains(e.target) &&
            eg.current > 0 &&
            e.timeStamp - eg.current < 500 &&
            (e.preventDefault(), e.stopPropagation())
        },
        onKeyDownCapture: (e) => {
          null != P &&
            "Space" === e.code &&
            e.target instanceof Node &&
            e.currentTarget.contains(e.target) &&
            !L(e.target) &&
            !(e.target instanceof Element && e.target.closest("button")) &&
            (eh(!0), e.preventDefault(), e.stopPropagation())
        },
        onKeyUpCapture: (e) => {
          "Space" === e.code && eh(!1)
        },
        onBlur: (e) => {
          e.currentTarget.contains(e.relatedTarget) || eh(!1)
        },
        children: [
          (0, r.jsx)("img", {
            ref: eC,
            className: `${s} ZoomableImage-Qr3a6q`,
            src: e.src,
            referrerPolicy: e.referrerPolicy,
            alt: e.alt,
            fetchPriority: "high",
            loading: "eager",
            decoding: "async",
            "data-transparent": e.transparentBackground,
            draggable: !1,
            onLoad: ey,
            onKeyDown: eN,
            tabIndex: R || K > 1 ? 0 : void 0,
            "aria-label": R || K > 1 ? n : void 0,
            "aria-keyshortcuts": R || K > 1 ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : void 0,
            style: e_,
          }),
          null != P &&
            null != ef &&
            (0, r.jsx)("div", {
              className: "StageOverlay-qVT1kM",
              style: es ?? void 0,
              children: P(
                null == es
                  ? ef
                  : {
                      ...ef,
                      imageRect: { ...ef.imageRect, left: ef.imageRect.left - es.left, top: ef.imageRect.top - es.top },
                      fitImageRect: {
                        ...ef.fitImageRect,
                        left: ef.fitImageRect.left - es.left,
                        top: ef.fitImageRect.top - es.top,
                      },
                    },
              ),
            }),
          null != I.renderZoomControls
            ? (0, r.jsx)("div", {
                className: "ZoomControlsRenderer-VuPQyE",
                onPointerDown: (e) => {
                  e.stopPropagation()
                },
                children: I.renderZoomControls(eV),
              })
            : (0, r.jsxs)("div", {
                className: "ZoomControls-WpuX7R",
                role: "group",
                "aria-label": I.zoomControlsLabel,
                onPointerDown: (e) => {
                  e.stopPropagation()
                },
                children: [
                  (0, r.jsx)("button", {
                    type: "button",
                    className: c,
                    "aria-label": I.zoomOutLabel,
                    disabled: K <= x(et.current),
                    onClick: () => {
                      ej("out")
                    },
                    children: "−",
                  }),
                  (0, r.jsx)("div", { className: "ZoomControlDivider-S_5iMe" }),
                  (0, r.jsx)("button", {
                    type: "button",
                    className: c,
                    "aria-label": I.zoomInLabel,
                    disabled: K >= 5,
                    onClick: () => {
                      ej("in")
                    },
                    children: "+",
                  }),
                ],
              }),
        ],
      })
    }
    function L(e, { allowTextInput: t = !1 } = {}) {
      return (
        e instanceof Element &&
        (null != e.closest('[data-annotation-control], button:not([data-sketch-comment]), select, [role="slider"]') ||
          (!t && null != e.closest('input, textarea, [contenteditable="true"]')))
      )
    }
    let S = Object.assign(
      function ({ image: e, children: t }) {
        return (0, r.jsx)(y.Provider, {
          value: e,
          children: (0, r.jsx)("div", { className: "ImageViewer-gqgEJR", children: t }),
        })
      },
      {
        Canvas: function ({
          groups: e,
          activeImageId: t,
          activeImageRef: n,
          onSelectImage: a,
          selectedImageIds: l,
          renderImage: i,
        }) {
          return (0, r.jsx)("div", {
            className: "Canvas-Vg0IMr",
            "data-image-viewer-canvas": !0,
            children: e.map((e) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "CanvasGroup-TisUCI",
                  children: [
                    null != e.label
                      ? (0, r.jsx)("div", { className: "CanvasGroupLabel-_cpkrn", children: e.label })
                      : null,
                    (0, r.jsx)("div", {
                      className: "CanvasGroupImages-KBEgwd",
                      children: e.images.map((e) => {
                        let o = (0, r.jsx)("img", {
                            className: "CanvasImage-ftQyku",
                            src: e.src,
                            referrerPolicy: e.referrerPolicy,
                            alt: "",
                            width: e.width,
                            height: e.height,
                            loading: "lazy",
                            decoding: "async",
                          }),
                          s = l?.includes(e.id)
                        return null != i
                          ? (0, r.jsxs)(
                              "div",
                              {
                                className: `${u} CanvasCustomImage-vajD2v`,
                                "data-selected": s || void 0,
                                children: [
                                  o,
                                  (0, r.jsx)("div", { className: "CanvasCustomImageOverlay-Af3EOT", children: i(e) }),
                                ],
                              },
                              e.id,
                            )
                          : (0, r.jsx)(
                              "button",
                              {
                                ref: e.id === t ? n : void 0,
                                type: "button",
                                className: u,
                                "aria-label": e.alt,
                                "aria-pressed": s ?? e.id === t,
                                onClick: () => a(e),
                                children: o,
                              },
                              e.id,
                            )
                      }),
                    }),
                  ],
                },
                e.id,
              ),
            ),
          })
        },
        Toolbar: function ({ children: e, "aria-label": t }) {
          return (0, r.jsx)("div", { className: "Toolbar-gdMFZC", role: "group", "aria-label": t, children: e })
        },
        Stage: function ({ imageRef: e }) {
          let t = P()
          return (0, r.jsx)("div", {
            className: o,
            children: (0, r.jsx)("img", {
              ref: e,
              className: s,
              src: t.src,
              referrerPolicy: t.referrerPolicy,
              alt: t.alt,
              fetchPriority: "high",
              loading: "eager",
              decoding: "async",
              "data-transparent": t.transparentBackground,
            }),
          })
        },
        ZoomableStage: function (e) {
          let t = P()
          return (0, r.jsx)(j, { image: t, ...e }, t.id)
        },
      },
    )
    var R = n("on57"),
      k = n("v7qY"),
      M = n("oyxz"),
      N = n("wD9O"),
      I = n("Sm6l"),
      E = n("Bbed"),
      T = n("RNul"),
      z = n("DBCl"),
      A = n("hEYZ")
    function D(e) {
      let t,
        n,
        r,
        l = (0, a.c)(8),
        { zoomPercent: o, fitZoomPercent: s, onZoomPercentChange: c, onResetZoom: u } = e
      l[0] !== s || l[1] !== u || l[2] !== c || l[3] !== o
        ? ((t = (e) => {
            if ("reset-zoom" === e.type) return void u()
            let t = [...z.cfs, s].sort(H),
              n = e.delta > 0 ? t.find((e) => e > o) : t.findLast((e) => e < o)
            null != n && c(n)
          }),
          (l[0] = s),
          (l[1] = u),
          (l[2] = c),
          (l[3] = o),
          (l[4] = t))
        : (t = l[4])
      let d = (0, i.useEffectEvent)(t)
      return (
        l[5] !== d ? ((n = () => (0, A.ou)(d)), (l[5] = d), (l[6] = n)) : (n = l[6]),
        l[7] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), (l[7] = r)) : (r = l[7]),
        (0, i.useEffect)(n, r),
        null
      )
    }
    function H(e, t) {
      return e - t
    }
    n("dN0a")
    var _ = n("HgLj"),
      V = n("j9wQ"),
      Z = n("O4Le"),
      B = n("I0AH"),
      O = n("oD0s")
    let Y = (0, E._)(l.HO, {
      fallback: (0, r.jsx)(T.y, {}),
      errorFallback: ({ onCancel: e }) =>
        (0, r.jsxs)("div", {
          className: "flex h-full flex-col items-center justify-center gap-4 p-4",
          children: [
            (0, r.jsx)(M.A, {
              id: "imageMarkup.loadError",
              defaultMessage: "Could not load markup. Reload to try again",
              description: "The image markup editor failed to download",
            }),
            (0, r.jsx)(I.$, {
              color: "secondary",
              onClick: e,
              children: (0, r.jsx)(M.A, {
                id: "imageMarkup.back",
                defaultMessage: "Back to image",
                description: "Leave the failed image markup editor",
              }),
            }),
          ],
        }),
    })
    function X(e) {
      let t,
        n,
        l,
        o,
        s,
        c,
        u,
        d,
        m,
        h,
        g,
        p,
        f,
        C,
        v,
        x,
        b,
        w,
        y,
        P,
        j,
        L,
        I,
        E,
        T,
        z,
        A,
        H,
        X,
        F = (0, a.c)(144),
        {
          loadingPreview: K,
          pendingImageContent: $,
          mode: U,
          minimumImageHeight: G,
          alt: Q,
          clipboardScope: q,
          src: J,
          hasImageRail: ee,
          hasNavigationGutters: et,
          overlayToolbarHeight: en,
          footerActions: er,
          imageId: ea,
          viewportId: el,
          viewerId: ei,
          imageRef: eo,
          onImageError: es,
          onImageLoad: ec,
          onImageEditSubmitted: eu,
          previewOverlay: ed,
          reserveInlineComposer: em,
          markupEditorRef: eh,
          standaloneMarkupComposer: eg,
          markupSourceConversationId: ep,
          isSubmitting: ef,
          referrerPolicy: eC,
          renderHeader: ev,
          viewerHeaderHeight: ex,
          renderToolbar: eb,
          keepToolbarMounted: ew,
          renderOverlay: ey,
          showCommentTool: eP,
          sizeControlContainer: ej,
          sourceImage: eL,
          imageEditAttribution: eS,
          chatGptConversationId: eR,
          prepareNativeMarkup: ek,
          onSaveMarkup: eM,
          onMarkupSaved: eN,
          tabId: eI,
          toolbarControls: eE,
          trailingControls: eT,
          toolbarVariant: ez,
          zoom: eA,
          zoomControlContainer: eD,
          viewerZoomControlContainer: eH,
          onCancel: e_,
          onViewportInteractionStart: eV,
        } = e,
        eZ = void 0 !== ee && ee,
        eB = void 0 !== et && et,
        eO = void 0 !== ed && ed,
        eY = void 0 !== ew && ew,
        eX = void 0 === ez ? "compact" : ez,
        eW = (0, N.dz)(),
        eF = null != ev || void 0 !== eH,
        eK = eF || void 0 !== eD,
        [e$, eU] = (0, i.useState)(null),
        [eG, eQ] = (0, i.useState)(null),
        [eq, eJ] = (0, i.useState)(null),
        [e1, e0] = (0, i.useState)(null),
        e6 = (0, i.useRef)(null),
        e3 = (0, i.useRef)(null),
        e5 =
          eO && (null != el || null != eE || "text" === U)
            ? `calc(${null == el ? (void 0 === en ? 0 : en) : 46}px + var(--spacing) * 8)`
            : "0px",
        e4 = "var(--right-panel-composer-overlay-fit-reserve, 0px)"
      eO
        ? (e4 = "0 0 min(var(--image-preview-fit-footer-height, 118px), 30%)")
        : void 0 !== em && em && (e4 = "0 0 min(118px, 30%)")
      let [e2, e7] = (0, i.useState)(null)
      F[0] !== eo ? ((t = (0, _.P)(eo, e7)), (F[0] = eo), (F[1] = t)) : (t = F[1])
      let e8 = t,
        [e9, te] = (0, i.useState)(null),
        [tt, tn] = (0, i.useState)(null),
        tr = tt === J
      F[2] !== es || F[3] !== J
        ? ((n = () => {
            ;(tn(J), es?.())
          }),
          (F[2] = es),
          (F[3] = J),
          (F[4] = n))
        : (n = F[4])
      let ta = (0, i.useEffectEvent)(n)
      ;(F[5] !== e2 || F[6] !== ta
        ? ((l = () => {
            if (null == e2) return
            let e = () => {
                e2.naturalWidth > 0 &&
                  e2.naturalHeight > 0 &&
                  (tn(null),
                  te((e) =>
                    e?.width === e2.naturalWidth && e.height === e2.naturalHeight
                      ? e
                      : { width: e2.naturalWidth, height: e2.naturalHeight },
                  ))
              },
              t = () => ta()
            return (
              e2.addEventListener("load", e),
              e2.addEventListener("error", t),
              e(),
              e2.complete && 0 === e2.naturalWidth && t(),
              () => {
                ;(e2.removeEventListener("load", e), e2.removeEventListener("error", t))
              }
            )
          }),
          (F[5] = e2),
          (F[6] = ta),
          (F[7] = l))
        : (l = F[7]),
        F[8] !== e2 ? ((o = [e2]), (F[8] = e2), (F[9] = o)) : (o = F[9]),
        (0, i.useLayoutEffect)(l, o))
      let tl = eY ? eq : eG
      F[10] !== eY || F[11] !== eb || F[12] !== tl
        ? ((s = (e) =>
            null == tl || null == eb
              ? null
              : (0, k.createPortal)(
                  (0, r.jsx)("div", {
                    className: "contents",
                    "data-annotation-control": !0,
                    onPointerDown: W,
                    children: eY ? e : eb(e),
                  }),
                  tl,
                )),
          (F[10] = eY),
          (F[11] = eb),
          (F[12] = tl),
          (F[13] = s))
        : (s = F[13])
      let ti = s,
        to = null
      if (eY && ("markup" !== U || eK)) {
        let e
        ;(F[14] !== U || F[15] !== eb || F[16] !== eE
          ? ((e =
              null != eb && (null != eE || "remove" === U || "markup" === U)
                ? eb(
                    (0, r.jsxs)("div", {
                      className: (0, R.A)("contents", "toolbarContents-ul3XSD"),
                      children: [
                        (0, r.jsx)("div", { ref: eJ, className: (0, R.A)("contents", "editorControls-cuAYZf") }),
                        (0, r.jsx)("div", {
                          className: "fallbackControls-K6uM1Z",
                          inert: "markup" === U || "remove" === U,
                          children: eE,
                        }),
                      ],
                    }),
                  )
                : eE),
            (F[14] = U),
            (F[15] = eb),
            (F[16] = eE),
            (F[17] = e))
          : (e = F[17]),
          (to = e))
      } else if (!eY && ("view" === U || "comment" === U || "text" === U) && null != eE) {
        let e
        ;(F[18] !== eb || F[19] !== eE
          ? ((e = null == eb ? eE : eb(eE)), (F[18] = eb), (F[19] = eE), (F[20] = e))
          : (e = F[20]),
          (to = e))
      }
      ;(F[21] !== e2 || F[22] !== ec
        ? ((c = (e) => {
            null != e2 && e.target === e2 && ec?.(e2)
          }),
          (F[21] = e2),
          (F[22] = ec),
          (F[23] = c))
        : (c = F[23]),
        F[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (e) => {
              if (
                e.defaultPrevented ||
                e.nativeEvent.isComposing ||
                null == e6.current ||
                e6.current.isReadOnly ||
                (e.target instanceof Element && e.target.closest('input, textarea, [contenteditable="true"]'))
              )
                return
              let t = e.key.toLowerCase(),
                n = (e.metaKey || e.ctrlKey) && "z" === t,
                r = (n && e.shiftKey) || (e.ctrlKey && "y" === t)
              ;(n || r) &&
                (e6.current.commitComment(),
                e6.current.editor.commitPendingTextEdit(),
                (r ? e6.current.editor.redo() : e6.current.editor.undo()) && (e.preventDefault(), e.stopPropagation()))
            }),
            (F[24] = u))
          : (u = F[24]),
        F[25] !== ev
          ? ((d =
              null == ev
                ? null
                : (0, r.jsx)("div", {
                    className: "absolute inset-x-0 top-0 z-30",
                    children: ev(
                      (0, r.jsx)("span", { ref: eU, "data-viewer-zoom-control": !0, className: "contents" }),
                    ),
                  })),
            (F[25] = ev),
            (F[26] = d))
          : (d = F[26]))
      let ts = to,
        tc = null == el ? "top-0" : "top-[calc(-1*var(--right-panel-composer-overlay-top-reserve,0px))]",
        tu = eZ || eB ? "-inset-x-18" : "inset-x-0"
      ;(F[27] !== tc || F[28] !== tu
        ? ((m = (0, R.A)(
            "absolute bottom-[calc(-1*(var(--right-panel-composer-overlay-reserve,0px)+var(--image-preview-footer-height,0px)))] overflow-hidden",
            tc,
            tu,
          )),
          (F[27] = tc),
          (F[28] = tu),
          (F[29] = m))
        : (m = F[29]),
        F[30] !== eF || F[31] !== eD
          ? ((h = !eF && void 0 === eD && (0, r.jsx)("span", { ref: eU, className: "contents" })),
            (F[30] = eF),
            (F[31] = eD),
            (F[32] = h))
          : (h = F[32]))
      let td = !eZ && !eB && "inset-x-0",
        tm = (eZ || eB) && (null == el ? "inset-x-18" : "mx-18")
      F[33] !== td || F[34] !== tm
        ? ((g = (0, R.A)(
            "absolute top-0 bottom-[calc(var(--right-panel-composer-overlay-reserve,0px)+var(--image-preview-footer-height,0px))]",
            td,
            tm,
          )),
          (F[33] = td),
          (F[34] = tm),
          (F[35] = g))
        : (g = F[35])
      let th = null == el ? void 0 : e4,
        tg = eF && eA?.manualZoomPercent == null ? (void 0 === ex ? 0 : ex) : void 0,
        tp = eF && eA?.manualZoomPercent == null ? e5 : void 0
      F[36] !== th || F[37] !== tg || F[38] !== tp
        ? ((p = { inset: th, marginTop: tg, marginBottom: tp }), (F[36] = th), (F[37] = tg), (F[38] = tp), (F[39] = p))
        : (p = F[39])
      let tf = null != K && !tr && "[&_[data-overflow-viewport]>img]:opacity-0"
      F[40] !== tf
        ? ((f = (0, R.A)("absolute top-0 left-0 h-full w-full", tf)), (F[40] = tf), (F[41] = f))
        : (f = F[41])
      let tC = 1 / eW
      F[42] !== tC ? ((C = { zoom: tC }), (F[42] = tC), (F[43] = C)) : (C = F[43])
      let tv = null == e9 && !tr && ($ ?? K),
        tx = el ?? ea,
        tb = eL?.transparentBackground
      F[44] !== Q || F[45] !== eC || F[46] !== J || F[47] !== tx || F[48] !== tb
        ? ((v = { id: tx, src: J, alt: Q, referrerPolicy: eC, transparentBackground: tb }),
          (F[44] = Q),
          (F[45] = eC),
          (F[46] = J),
          (F[47] = tx),
          (F[48] = tb),
          (F[49] = v))
        : (v = F[49])
      let tw = null == G ? void 0 : G * eW,
        ty = eA?.manualZoomPercent
      F[50] !== eA
        ? ((x = (e) => {
            null == e ? eA?.onZoomToFit() : eA?.onZoomPercentChange(e)
          }),
          (F[50] = eA),
          (F[51] = x))
        : (x = F[51])
      let tP = "comment" === U,
        tj = "text" === U
      return (
        F[52] !== eV
          ? ((b = () => {
              eV?.()
              let e = e6.current
              null == e ||
                e.isReadOnly ||
                (e.commitComment(),
                e.editor.getSnapshot().preview?.replaceObjectId != null
                  ? e.editor.pointerCommit()
                  : e.editor.pointerCancel(void 0, { preserveReleasedErasure: !0 }),
                e.editor.commitPendingTextEdit())
            }),
            (F[52] = eV),
            (F[53] = b))
          : (b = F[53]),
        F[54] !== U || F[55] !== e9
          ? ((w = (e, t) => {
              let { imageRect: n } = t
              if ("text" === U) return (0, O.R)(e)
              if ("markup" !== U) return "view" === U
              let r = e6.current
              if (null == r || null == e9 || r.isReadOnly) return !1
              let a = r.editor,
                l = a.getSnapshot()
              if ("select" !== l.activeTool || null != l.selectionId || l.hasActiveGesture || l.hasPendingTextEdit)
                return !1
              let i = n.width / ((1024 * e9.width) / Math.max(e9.width, e9.height)),
                o = e.currentTarget.getBoundingClientRect()
              return (
                null ==
                a.getObjectAtPoint(
                  { x: (e.clientX - o.left - n.left) / i, y: (e.clientY - o.top - n.top) / i },
                  10 / i,
                  { viewportScale: i },
                )
              )
            }),
            (F[54] = U),
            (F[55] = e9),
            (F[56] = w))
          : (w = F[56]),
        F[57] !== tr ||
        F[58] !== eF ||
        F[59] !== eO ||
        F[60] !== e9 ||
        F[61] !== eX ||
        F[62] !== eT ||
        F[63] !== eH ||
        F[64] !== eD ||
        F[65] !== e$
          ? ((y = (e) => {
              let { zoomPercent: t, fitZoomPercent: n, onZoomPercentChange: a, onResetZoom: l } = e,
                i = eH
              if ((void 0 === eH && (i = void 0 === eD ? e$ : eD), null == e9 || tr || null == i)) return null
              let o = (0, r.jsx)(B.b, {
                  variant: eX,
                  children: (0, r.jsx)("span", {
                    "data-viewer-zoom-control": !0,
                    className: "contents",
                    children: (0, r.jsx)(Z.h, {
                      variant: eX,
                      zoomPercent: Math.round(t),
                      onZoomPercentChange: a,
                      fitOption: { selected: t === n, onSelect: l },
                    }),
                  }),
                }),
                s = o
              return (
                eF
                  ? (s = (0, r.jsx)(V.HD, {
                      zoomOptions: [25, 50, 100, 150, 200],
                      zoomPercent: Math.round(t),
                      onZoomPercentChange: a,
                      fitOption: { selected: t === n, onSelect: l },
                    }))
                  : void 0 === eD &&
                    (s = (0, r.jsxs)("div", {
                      className: "absolute top-2 right-2 z-40 flex items-center gap-1",
                      children: [o, eT],
                    })),
                (0, k.createPortal)(
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      eO
                        ? (0, r.jsx)(D, { zoomPercent: t, fitZoomPercent: n, onZoomPercentChange: a, onResetZoom: l })
                        : null,
                      s,
                    ],
                  }),
                  i,
                )
              )
            }),
            (F[57] = tr),
            (F[58] = eF),
            (F[59] = eO),
            (F[60] = e9),
            (F[61] = eX),
            (F[62] = eT),
            (F[63] = eH),
            (F[64] = eD),
            (F[65] = e$),
            (F[66] = y))
          : (y = F[66]),
        F[67] !== Q ||
        F[68] !== eR ||
        F[69] !== q ||
        F[70] !== tr ||
        F[71] !== er ||
        F[72] !== e1 ||
        F[73] !== eS ||
        F[74] !== ea ||
        F[75] !== ef ||
        F[76] !== eF ||
        F[77] !== eh ||
        F[78] !== ep ||
        F[79] !== U ||
        F[80] !== e_ ||
        F[81] !== eu ||
        F[82] !== eN ||
        F[83] !== eM ||
        F[84] !== $ ||
        F[85] !== ek ||
        F[86] !== ti ||
        F[87] !== ey ||
        F[88] !== eb ||
        F[89] !== eP ||
        F[90] !== e9 ||
        F[91] !== ej ||
        F[92] !== eL ||
        F[93] !== J ||
        F[94] !== eg ||
        F[95] !== eI ||
        F[96] !== eK ||
        F[97] !== eG ||
        F[98] !== ei ||
        F[99] !== eW
          ? ((P = (e) =>
              null == e9 || tr
                ? null
                : null != $
                  ? (0, r.jsx)("div", {
                      className: "[container-type:size] absolute flex items-center justify-center overflow-hidden",
                      style: e.imageRect,
                      children: $,
                    })
                  : "markup" === U
                    ? (0, r.jsx)(
                        Y,
                        {
                          ref: (0, _.P)(e6, eh),
                          alt: Q,
                          src: J,
                          sourceImage: eL,
                          imageEditAttribution: eS,
                          chatGptConversationId: eR,
                          standaloneComposer: eg,
                          sourceConversationId: ep,
                          prepareNativeMarkup: ek,
                          onSave: eM,
                          onSaved: eN,
                          tabId: eI,
                          viewerId: ei,
                          isSubmitting: ef,
                          imageSize: e9,
                          viewport: e,
                          clipboardScope: q ?? (null == eb ? void 0 : eG),
                          showCommentTool: eP,
                          sizeControlContainer: ej,
                          isUnifiedViewerEnabled: eF,
                          renderToolbar: eK ? ti : void 0,
                          onCancel: e_,
                          onImageEditSubmitted: eu,
                        },
                        ea,
                      )
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          ey?.(e, e9, ti),
                          null != eG && null != e1 && null != er
                            ? (0, k.createPortal)(
                                (0, r.jsx)("div", {
                                  className: "relative",
                                  style: { bottom: eG.clientHeight - (e.imageRect.top + e.imageRect.height) / eW },
                                  children: er,
                                }),
                                e1,
                              )
                            : null,
                        ],
                      })),
            (F[67] = Q),
            (F[68] = eR),
            (F[69] = q),
            (F[70] = tr),
            (F[71] = er),
            (F[72] = e1),
            (F[73] = eS),
            (F[74] = ea),
            (F[75] = ef),
            (F[76] = eF),
            (F[77] = eh),
            (F[78] = ep),
            (F[79] = U),
            (F[80] = e_),
            (F[81] = eu),
            (F[82] = eN),
            (F[83] = eM),
            (F[84] = $),
            (F[85] = ek),
            (F[86] = ti),
            (F[87] = ey),
            (F[88] = eb),
            (F[89] = eP),
            (F[90] = e9),
            (F[91] = ej),
            (F[92] = eL),
            (F[93] = J),
            (F[94] = eg),
            (F[95] = eI),
            (F[96] = eK),
            (F[97] = eG),
            (F[98] = ei),
            (F[99] = eW),
            (F[100] = P))
          : (P = F[100]),
        F[101] !== Q ||
        F[102] !== e8 ||
        F[103] !== tw ||
        F[104] !== ty ||
        F[105] !== x ||
        F[106] !== tP ||
        F[107] !== tj ||
        F[108] !== b ||
        F[109] !== w ||
        F[110] !== y ||
        F[111] !== P
          ? ((j = (0, r.jsx)(S.ZoomableStage, {
              imageRef: e8,
              minimumFitHeight: tw,
              overflowViewportRef: e3,
              defaultZoomPercent: ty,
              onZoomPercentChange: x,
              zoomedImageLabel: Q,
              unpadded: !0,
              panOnDrag: tP,
              panBeyondImage: tj,
              onViewportInteractionStart: b,
              shouldPanOnPointerDown: w,
              renderZoomControls: y,
              renderOverlay: P,
            })),
            (F[101] = Q),
            (F[102] = e8),
            (F[103] = tw),
            (F[104] = ty),
            (F[105] = x),
            (F[106] = tP),
            (F[107] = tj),
            (F[108] = b),
            (F[109] = w),
            (F[110] = y),
            (F[111] = P),
            (F[112] = j))
          : (j = F[112]),
        F[113] !== v || F[114] !== j
          ? ((L = (0, r.jsx)(S, { image: v, children: j })), (F[113] = v), (F[114] = j), (F[115] = L))
          : (L = F[115]),
        F[116] !== f || F[117] !== C || F[118] !== tv || F[119] !== L
          ? ((I = (0, r.jsxs)("div", { className: f, style: C, children: [tv, L] })),
            (F[116] = f),
            (F[117] = C),
            (F[118] = tv),
            (F[119] = L),
            (F[120] = I))
          : (I = F[120]),
        F[121] !== g || F[122] !== p || F[123] !== I
          ? ((E = (0, r.jsx)("div", { "data-image-text-stage": !0, className: g, style: p, children: I })),
            (F[121] = g),
            (F[122] = p),
            (F[123] = I),
            (F[124] = E))
          : (E = F[124]),
        F[125] !== m || F[126] !== h || F[127] !== E
          ? ((T = (0, r.jsxs)("div", { ref: e3, "data-image-text-overflow": !0, className: m, children: [h, E] })),
            (F[125] = m),
            (F[126] = h),
            (F[127] = E),
            (F[128] = T))
          : (T = F[128]),
        F[129] !== ef || F[130] !== T || F[131] !== to
          ? ((z = (0, r.jsxs)("div", { ref: eQ, className: "relative min-h-0 flex-1", inert: ef, children: [ts, T] })),
            (F[129] = ef),
            (F[130] = T),
            (F[131] = to),
            (F[132] = z))
          : (z = F[132]),
        F[133] !== er || F[134] !== el
          ? ((A =
              null != er
                ? (0, r.jsx)("div", {
                    ref: e0,
                    className: null == el ? "shrink-0" : "absolute inset-x-0 bottom-0 z-10",
                  })
                : null),
            (F[133] = er),
            (F[134] = el),
            (F[135] = A))
          : (A = F[135]),
        F[136] !== tr
          ? ((H =
              tr &&
              (0, r.jsx)("div", {
                role: "alert",
                className: "absolute inset-x-0 bottom-0 p-4 text-sm text-danger",
                children: (0, r.jsx)(M.A, {
                  id: "imageEditViewer.imageLoadError",
                  defaultMessage: "Could not load this image. Close and reopen the image to try again",
                  description: "The source image failed to load in the image viewer or editor",
                }),
              })),
            (F[136] = tr),
            (F[137] = H))
          : (H = F[137]),
        F[138] !== c || F[139] !== d || F[140] !== z || F[141] !== A || F[142] !== H
          ? ((X = (0, r.jsxs)("div", {
              className: "relative flex min-h-0 flex-1 flex-col",
              role: "presentation",
              onLoadCapture: c,
              onKeyDown: u,
              children: [d, z, A, H],
            })),
            (F[138] = c),
            (F[139] = d),
            (F[140] = z),
            (F[141] = A),
            (F[142] = H),
            (F[143] = X))
          : (X = F[143]),
        X
      )
    }
    function W(e) {
      return e.stopPropagation()
    }
  },
  M2ev(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("IJRm"),
      i = n("ROI2"),
      o = n("on57"),
      s = n("zd8w"),
      c = n("Wf1j"),
      u = n("oyxz"),
      d = n("wD9O"),
      m = n("Sm6l"),
      h = n("BsAN"),
      g = n("HOLv"),
      p = n("bVeK"),
      f = n("UxN3"),
      C = n("F1DZ"),
      v = n("pDKn"),
      x = n("I0AH")
    function b(e) {
      let t = e.currentTarget.getBoundingClientRect()
      return t.width <= 0 || t.height <= 0
        ? null
        : { x: (e.clientX - t.left) / t.width, y: (e.clientY - t.top) / t.height }
    }
    function w(e, t, n, r) {
      for (let a of ((e.width = t.width), (e.height = t.height), n)) y(e, t, a, r)
    }
    function y(e, t, n, r) {
      for (let a = 0; a < n.points.length; a += 1) {
        let l = n.points[a]
        null != l && P(e, t, n.points[a - 1] ?? l, l, n.brushSize, r)
      }
    }
    function P(e, t, n, r, a, l) {
      let i = e.getContext("2d")
      if (null == i) return
      let o = n.x * t.width,
        s = n.y * t.height,
        c = r.x * t.width,
        u = r.y * t.height,
        d = j(t, a)
      if (o === c && s === u) {
        ;((i.fillStyle = l), i.beginPath(), i.arc(o, s, d / 2, 0, 2 * Math.PI), i.fill())
        return
      }
      ;((i.strokeStyle = l),
        (i.lineCap = "round"),
        (i.lineJoin = "round"),
        (i.lineWidth = d),
        i.beginPath(),
        i.moveTo(o, s),
        i.lineTo(c, u),
        i.stroke())
    }
    function j(e, t) {
      return (Math.min(e.width, e.height) * t) / 500
    }
    n.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            n,
            L,
            S,
            R,
            k,
            M,
            N,
            I,
            E,
            T,
            z,
            A,
            D,
            H,
            _,
            V,
            Z,
            B,
            O,
            Y,
            X,
            W,
            F,
            K,
            $,
            U,
            G,
            Q,
            q,
            J,
            ee,
            et,
            en,
            er,
            ea,
            el,
            ei,
            eo = (0, a.c)(130),
            {
              ref: es,
              imageSize: ec,
              isSubmitting: eu,
              onCancel: ed,
              onSubmit: em,
              sizeControlContainer: eh,
              renderToolbar: eg,
              toolbarVariant: ep,
              viewport: ef,
            } = e,
            eC = void 0 === ep ? "compact" : ep,
            ev = (0, c.A)(),
            ex = (0, d.dz)(),
            eb = "embedded" === eC,
            ew = (0, s.useRef)(null),
            ey = (0, s.useRef)(null),
            [eP, ej] = (0, s.useState)(70),
            [eL, eS] = (0, s.useState)(null)
          eo[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (eo[0] = t)) : (t = eo[0])
          let [eR, ek] = (0, s.useState)(t)
          eo[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (eo[1] = n)) : (n = eo[1])
          let [eM, eN] = (0, s.useState)(n),
            eI = eR.length > 0 || eM.length > 0,
            eE = ef.imageRect.width > 0 ? (eP * ef.fitImageRect.width) / ef.imageRect.width : eP,
            eT = (j(ec, eP) * ef.fitImageRect.width) / ec.width
          eo[2] !== ec
            ? ((L = (e, t) => {
                ;(ek(e), eN(t))
                let n = ew.current
                null != n && w(n, ec, e, getComputedStyle(n).color)
              }),
              (eo[2] = ec),
              (eo[3] = L))
            : (L = eo[3])
          let ez = L
          eo[4] !== ec || eo[5] !== eR
            ? ((S = () => {
                let e = ey.current
                ;((ey.current = null), eS(null))
                let t = ew.current
                null != e &&
                  null != t &&
                  (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                  w(t, ec, eR, getComputedStyle(t).color))
              }),
              (eo[4] = ec),
              (eo[5] = eR),
              (eo[6] = S))
            : (S = eo[6])
          let eA = S
          ;(eo[7] !== eA ? ((R = () => ({ onViewportInteractionStart: eA })), (eo[7] = eA), (eo[8] = R)) : (R = eo[8]),
            (0, s.useImperativeHandle)(es, R),
            eo[9] !== eA || eo[10] !== eR || eo[11] !== ez || eo[12] !== ef.isInteracting || eo[13] !== ef.isPanReady
              ? ((k = (e) => {
                  let t = ey.current
                  if (null != t && t.pointerId === e.pointerId) {
                    if (e.defaultPrevented || ef.isInteracting || ef.isPanReady) return void eA()
                    ;((ey.current = null),
                      e.currentTarget.hasPointerCapture(e.pointerId) &&
                        e.currentTarget.releasePointerCapture(e.pointerId),
                      ez([...eR, t.stroke], []))
                  }
                }),
                (eo[9] = eA),
                (eo[10] = eR),
                (eo[11] = ez),
                (eo[12] = ef.isInteracting),
                (eo[13] = ef.isPanReady),
                (eo[14] = k))
              : (k = eo[14]))
          let eD = k
          eo[15] !== eI || eo[16] !== eb
            ? ((M = eI
                ? null
                : (0, r.jsx)("span", {
                    className: (0, o.A)(
                      "min-w-0 truncate leading-[18px] text-tertiary",
                      eb ? "px-2.5 text-sm" : "px-1.5 text-base",
                    ),
                    children: (0, r.jsx)(u.A, {
                      id: "imageSidePanel.removeHelper",
                      defaultMessage: "Brush over what you want to remove",
                      description: "Helper text shown while selecting an image area to remove.",
                    }),
                  })),
              (eo[15] = eI),
              (eo[16] = eb),
              (eo[17] = M))
            : (M = eo[17])
          let eH = eu || 0 === eR.length,
            e_ = !eI,
            eV = eb ? "large" : "default",
            eZ = eb ? "imageToolbar" : "composerSm"
          ;(eo[18] !== ev
            ? ((N = ev.formatMessage({
                id: "imageSidePanel.undoRemoveSelection",
                defaultMessage: "Undo",
                description: "Toolbar action that undoes the last brushed remove selection.",
              })),
              (eo[18] = ev),
              (eo[19] = N))
            : (N = eo[19]),
            eo[20] !== eR || eo[21] !== eM || eo[22] !== ez
              ? ((I = () => {
                  let e = eR.at(-1)
                  null != e && ez(eR.slice(0, -1), [...eM, e])
                }),
                (eo[20] = eR),
                (eo[21] = eM),
                (eo[22] = ez),
                (eo[23] = I))
              : (I = eo[23]),
            eo[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = (0, r.jsx)(g.I, { "aria-hidden": !1, asset: l.K })), (eo[24] = E))
              : (E = eo[24]),
            eo[25] !== e_ || eo[26] !== eV || eo[27] !== eZ || eo[28] !== N || eo[29] !== I || eo[30] !== eH
              ? ((T = (0, r.jsx)(m.$, {
                  color: "ghostActive",
                  disabled: eH,
                  hidden: e_,
                  radius: eV,
                  size: eZ,
                  uniform: !0,
                  "aria-label": N,
                  onClick: I,
                  children: E,
                })),
                (eo[25] = e_),
                (eo[26] = eV),
                (eo[27] = eZ),
                (eo[28] = N),
                (eo[29] = I),
                (eo[30] = eH),
                (eo[31] = T))
              : (T = eo[31]))
          let eB = eu || 0 === eM.length,
            eO = !eI,
            eY = eb ? "large" : "default",
            eX = eb ? "imageToolbar" : "composerSm"
          ;(eo[32] !== ev
            ? ((z = ev.formatMessage({
                id: "imageSidePanel.redoRemoveSelection",
                defaultMessage: "Redo",
                description: "Toolbar action that redoes the last undone remove selection.",
              })),
              (eo[32] = ev),
              (eo[33] = z))
            : (z = eo[33]),
            eo[34] !== eR || eo[35] !== eM || eo[36] !== ez
              ? ((A = () => {
                  let e = eM.at(-1)
                  null != e && ez([...eR, e], eM.slice(0, -1))
                }),
                (eo[34] = eR),
                (eo[35] = eM),
                (eo[36] = ez),
                (eo[37] = A))
              : (A = eo[37]),
            eo[38] === Symbol.for("react.memo_cache_sentinel")
              ? ((D = (0, r.jsx)(g.I, { className: "-scale-x-100", "aria-hidden": !1, asset: l.K })), (eo[38] = D))
              : (D = eo[38]),
            eo[39] !== eB || eo[40] !== eO || eo[41] !== eY || eo[42] !== eX || eo[43] !== z || eo[44] !== A
              ? ((H = (0, r.jsx)(m.$, {
                  color: "ghostActive",
                  disabled: eB,
                  hidden: eO,
                  radius: eY,
                  size: eX,
                  uniform: !0,
                  "aria-label": z,
                  onClick: A,
                  children: D,
                })),
                (eo[39] = eB),
                (eo[40] = eO),
                (eo[41] = eY),
                (eo[42] = eX),
                (eo[43] = z),
                (eo[44] = A),
                (eo[45] = H))
              : (H = eo[45]))
          let eW = 0 === eR.length || eu,
            eF = eb ? "toolbar" : "composerSm"
          ;(eo[46] !== ec || eo[47] !== em || eo[48] !== eR
            ? ((_ = () => {
                eR.length > 0 &&
                  em(
                    (function (e, t) {
                      let n = document.createElement("canvas")
                      ;((n.width = e.width), (n.height = e.height))
                      let r = n.getContext("2d")
                      if (null == r) return ""
                      for (let a of ((r.fillStyle = "black"), r.fillRect(0, 0, e.width, e.height), t))
                        y(n, e, a, "white")
                      return n.toDataURL("image/png")
                    })(ec, eR),
                  )
              }),
              (eo[46] = ec),
              (eo[47] = em),
              (eo[48] = eR),
              (eo[49] = _))
            : (_ = eo[49]),
            eo[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((V = (0, r.jsx)(u.A, {
                  id: "imageSidePanel.sendRemoveSelection",
                  defaultMessage: "Send",
                  description: "Toolbar action that submits the selected image area to remove.",
                })),
                (eo[50] = V))
              : (V = eo[50]),
            eo[51] !== eu || eo[52] !== eW || eo[53] !== eF || eo[54] !== _
              ? ((Z = (0, r.jsx)(m.$, {
                  color: "accent",
                  radius: "large",
                  disabled: eW,
                  loading: eu,
                  size: eF,
                  onClick: _,
                  children: V,
                })),
                (eo[51] = eu),
                (eo[52] = eW),
                (eo[53] = eF),
                (eo[54] = _),
                (eo[55] = Z))
              : (Z = eo[55]))
          let eK = eb ? "ghostActive" : "ghostTertiary",
            e$ = eb ? "large" : "default",
            eU = eb ? "imageToolbar" : "composerSm"
          ;(eo[56] !== ev
            ? ((B = ev.formatMessage({
                id: "imageSidePanel.cancelRemoveMode",
                defaultMessage: "Cancel",
                description: "Toolbar action that exits image remove mode.",
              })),
              (eo[56] = ev),
              (eo[57] = B))
            : (B = eo[57]),
            eo[58] !== eb
              ? ((O = eb
                  ? (0, r.jsx)(p.pgK, {})
                  : (0, r.jsx)(f.bF, {
                      legacyIcon: C.A,
                      asset16: i.Q,
                      legacyClassName: "icon-2xs",
                      "aria-hidden": !0,
                    })),
                (eo[58] = eb),
                (eo[59] = O))
              : (O = eo[59]),
            eo[60] !== eu ||
            eo[61] !== ed ||
            eo[62] !== eK ||
            eo[63] !== e$ ||
            eo[64] !== eU ||
            eo[65] !== B ||
            eo[66] !== O
              ? ((Y = (0, r.jsx)(m.$, {
                  color: eK,
                  disabled: eu,
                  radius: e$,
                  size: eU,
                  uniform: !0,
                  "aria-label": B,
                  onClick: ed,
                  children: O,
                })),
                (eo[60] = eu),
                (eo[61] = ed),
                (eo[62] = eK),
                (eo[63] = e$),
                (eo[64] = eU),
                (eo[65] = B),
                (eo[66] = O),
                (eo[67] = Y))
              : (Y = eo[67]),
            eo[68] !== T || eo[69] !== H || eo[70] !== Z || eo[71] !== Y || eo[72] !== M
              ? ((X = (0, r.jsxs)(r.Fragment, { children: [M, T, H, Z, Y] })),
                (eo[68] = T),
                (eo[69] = H),
                (eo[70] = Z),
                (eo[71] = Y),
                (eo[72] = M),
                (eo[73] = X))
              : (X = eo[73]))
          let eG = X
          ;(eo[74] !== eG || eo[75] !== eC
            ? ((W = (0, r.jsx)(x.b, { className: "pointer-events-auto", variant: eC, children: eG })),
              (eo[74] = eG),
              (eo[75] = eC),
              (eo[76] = W))
            : (W = eo[76]),
            eo[77] !== eg || eo[78] !== W ? ((F = eg(W)), (eo[77] = eg), (eo[78] = W), (eo[79] = F)) : (F = eo[79]))
          let eQ = ef.imageRect
          eo[80] !== ev
            ? ((K = ev.formatMessage({
                id: "imageSidePanel.removeSurface",
                defaultMessage: "Mark areas to remove",
                description: "Accessible label for the image surface where users brush over areas to remove.",
              })),
              (eo[80] = ev),
              (eo[81] = K))
            : (K = eo[81])
          let eq = !ef.isPanReady && !ef.isInteracting && "cursor-none"
          return (
            eo[82] !== eq
              ? (($ = (0, o.A)("absolute inset-0 h-full w-full touch-none text-info opacity-50", eq)),
                (eo[82] = eq),
                (eo[83] = $))
              : ($ = eo[83]),
            eo[84] !== eE || eo[85] !== ec || eo[86] !== ef.isInteracting || eo[87] !== ef.isPanReady
              ? ((U = (e) => {
                  if (
                    e.defaultPrevented ||
                    0 !== e.button ||
                    ef.isInteracting ||
                    ef.isPanReady ||
                    ("touch" === e.pointerType && !e.isPrimary)
                  )
                    return
                  let t = b(e)
                  null != t &&
                    (eS(t),
                    (ey.current = { pointerId: e.pointerId, stroke: { brushSize: eE, points: [t] } }),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    P(e.currentTarget, ec, t, t, eE, getComputedStyle(e.currentTarget).color))
                }),
                (eo[84] = eE),
                (eo[85] = ec),
                (eo[86] = ef.isInteracting),
                (eo[87] = ef.isPanReady),
                (eo[88] = U))
              : (U = eo[88]),
            eo[89] !== ec || eo[90] !== ef.isInteracting || eo[91] !== ef.isPanReady
              ? ((G = (e) => {
                  if (ef.isInteracting || ef.isPanReady) return
                  let t = b(e)
                  eS(t)
                  let n = ey.current
                  if (null == n || n.pointerId !== e.pointerId || null == t) return
                  let r = n.stroke.points.at(-1)
                  null != r &&
                    (n.stroke.points.push(t),
                    P(e.currentTarget, ec, r, t, n.stroke.brushSize, getComputedStyle(e.currentTarget).color))
                }),
                (eo[89] = ec),
                (eo[90] = ef.isInteracting),
                (eo[91] = ef.isPanReady),
                (eo[92] = G))
              : (G = eo[92]),
            eo[93] === Symbol.for("react.memo_cache_sentinel")
              ? ((Q = () => {
                  eS(null)
                }),
                (eo[93] = Q))
              : (Q = eo[93]),
            eo[94] !== eA ||
            eo[95] !== eD ||
            eo[96] !== ec.height ||
            eo[97] !== ec.width ||
            eo[98] !== K ||
            eo[99] !== $ ||
            eo[100] !== U ||
            eo[101] !== G
              ? ((q = (0, r.jsx)("canvas", {
                  ref: ew,
                  "aria-label": K,
                  className: $,
                  height: ec.height,
                  width: ec.width,
                  onPointerDown: U,
                  onPointerMove: G,
                  onPointerUp: eD,
                  onPointerCancel: eA,
                  onLostPointerCapture: eA,
                  onPointerLeave: Q,
                })),
                (eo[94] = eA),
                (eo[95] = eD),
                (eo[96] = ec.height),
                (eo[97] = ec.width),
                (eo[98] = K),
                (eo[99] = $),
                (eo[100] = U),
                (eo[101] = G),
                (eo[102] = q))
              : (q = eo[102]),
            eo[103] !== eL || eo[104] !== eT || eo[105] !== ef.isInteracting || eo[106] !== ef.isPanReady
              ? ((J =
                  null == eL || ef.isInteracting || ef.isPanReady
                    ? null
                    : (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        className:
                          "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-text/20",
                        style: { height: eT, left: `${100 * eL.x}%`, top: `${100 * eL.y}%`, width: eT },
                      })),
                (eo[103] = eL),
                (eo[104] = eT),
                (eo[105] = ef.isInteracting),
                (eo[106] = ef.isPanReady),
                (eo[107] = J))
              : (J = eo[107]),
            eo[108] !== q || eo[109] !== J || eo[110] !== ef.imageRect
              ? ((ee = (0, r.jsxs)("div", { className: "absolute", style: eQ, children: [q, J] })),
                (eo[108] = q),
                (eo[109] = J),
                (eo[110] = ef.imageRect),
                (eo[111] = ee))
              : (ee = eo[111]),
            eo[112] !== eu || eo[113] !== ee
              ? ((et = (0, r.jsx)("div", { className: "absolute inset-0 overflow-hidden", inert: eu, children: ee })),
                (eo[112] = eu),
                (eo[113] = ee),
                (eo[114] = et))
              : (et = eo[114]),
            eo[115] !== ev
              ? ((en = ev.formatMessage({
                  id: "imageSidePanel.removeBrushSize",
                  defaultMessage: "Brush size",
                  description: "Accessible label for the slider that changes the remove selection brush size.",
                })),
                (eo[115] = ev),
                (eo[116] = en))
              : (en = eo[116]),
            eo[117] === Symbol.for("react.memo_cache_sentinel")
              ? ((er = (e) => {
                  ;(eS(null), ej(e))
                }),
                (eo[117] = er))
              : (er = eo[117]),
            eo[118] !== eP || eo[119] !== eu || eo[120] !== en
              ? ((ea = (0, r.jsx)(h.F, {
                  className: "max-h-[100cqh]",
                  "aria-label": en,
                  disabled: eu,
                  max: 130,
                  min: 5,
                  name: "remove-brush-size",
                  value: eP,
                  onValueChange: er,
                })),
                (eo[118] = eP),
                (eo[119] = eu),
                (eo[120] = en),
                (eo[121] = ea))
              : (ea = eo[121]),
            eo[122] !== eh || eo[123] !== ea || eo[124] !== ex
              ? ((el = (0, r.jsx)(v.W, { container: eh, zoom: ex, children: ea })),
                (eo[122] = eh),
                (eo[123] = ea),
                (eo[124] = ex),
                (eo[125] = el))
              : (el = eo[125]),
            eo[126] !== F || eo[127] !== et || eo[128] !== el
              ? ((ei = (0, r.jsxs)("div", { className: "relative h-full w-full", children: [F, et, el] })),
                (eo[126] = F),
                (eo[127] = et),
                (eo[128] = el),
                (eo[129] = ei))
              : (ei = eo[129]),
            ei
          )
        },
      },
    )
  },
  t94Z(e, t, n) {
    n.d(t, { m: () => x })
    var r = n("ABep"),
      a = n("QosV"),
      l = n("OZIO"),
      i = n("XSsU"),
      o = n("l8Dr"),
      s = n("on57"),
      c = n("Qgfj"),
      u = n("Wf1j"),
      d = n("oyxz"),
      m = n("Sm6l"),
      h = n("bqtn"),
      g = n("HOLv"),
      p = n("bVeK")
    n("zd8w")
    var f = (e) =>
        (0, r.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.667 4.80762C15.6931 4.80779 16.5252 5.63994 16.5254 6.66602V13.333C16.5254 14.3592 15.6932 15.1912 14.667 15.1914H5.33301C4.30683 15.1912 3.47461 14.3592 3.47461 13.333V6.66602C3.47478 5.63994 4.30694 4.80779 5.33301 4.80762H14.667ZM5.33301 5.8584C4.88683 5.85857 4.52557 6.21984 4.52539 6.66602V8.99414C4.76984 8.87578 5.04327 8.80767 5.33301 8.80762H10.667C11.6931 8.80779 12.5252 9.63995 12.5254 10.666V13.333C12.5254 13.6232 12.4566 13.8969 12.3379 14.1416H14.667C15.1133 14.1414 15.4746 13.7793 15.4746 13.333V6.66602C15.4744 6.21984 15.1132 5.85857 14.667 5.8584H5.33301ZM5.33301 9.8584C4.88684 9.85857 4.52557 10.2198 4.52539 10.666V13.333C4.52539 13.7793 4.88673 14.1414 5.33301 14.1416H10.667C11.1133 14.1414 11.4746 13.7793 11.4746 13.333V10.666C11.4744 10.2198 11.1132 9.85857 10.667 9.8584H5.33301Z",
          }),
        }),
      C = n("I0AH")
    let v = [
      {
        icon: (e) =>
          (0, r.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M16.0015 7.33334C16.0015 6.62231 16.0016 6.12897 15.9702 5.74545C15.9472 5.4635 15.9094 5.27399 15.8579 5.13022L15.8022 5.00034C15.6483 4.69823 15.4139 4.4452 15.1265 4.26889L14.9995 4.19858C14.8415 4.11812 14.63 4.0613 14.2544 4.03061C13.8709 3.99929 13.3774 3.99838 12.6665 3.99838H7.3335C6.62246 3.99838 6.12913 3.99928 5.74561 4.03061C5.3699 4.06131 5.1585 4.11807 5.00049 4.19858C4.65524 4.3745 4.37465 4.65509 4.19873 5.00034C4.11822 5.15834 4.06146 5.36975 4.03076 5.74545C3.99943 6.12897 3.99854 6.62231 3.99854 7.33334V12.6664C3.99854 13.3772 3.99945 13.8708 4.03076 14.2542C4.06145 14.6298 4.11827 14.8414 4.19873 14.9994L4.26904 15.1263C4.44535 15.4137 4.69838 15.6482 5.00049 15.8021L5.13037 15.8578C5.27414 15.9092 5.46365 15.947 5.74561 15.9701C6.12912 16.0014 6.62246 16.0013 7.3335 16.0013H12.6665C13.3774 16.0013 13.8709 16.0014 14.2544 15.9701C14.6298 15.9394 14.8415 15.8825 14.9995 15.8021C15.3448 15.6262 15.6263 15.3446 15.8022 14.9994L15.8579 14.8695C15.9093 14.7257 15.9472 14.536 15.9702 14.2542C16.0015 13.8708 16.0015 13.3772 16.0015 12.6664V7.33334ZM17.3315 12.6664C17.3315 13.3554 17.3322 13.9124 17.2954 14.3626C17.2627 14.7636 17.1977 15.1248 17.0532 15.4613L16.9868 15.6039C16.6834 16.1992 16.1993 16.6833 15.604 16.9867C15.2272 17.1786 14.8208 17.2578 14.3628 17.2953C13.9126 17.332 13.3555 17.3314 12.6665 17.3314H7.3335C6.64441 17.3314 6.08745 17.332 5.63721 17.2953C5.23652 17.2625 4.87587 17.1973 4.53955 17.0531L4.39697 16.9867C3.87586 16.7211 3.43936 16.3174 3.13525 15.8216L3.01318 15.6039C2.82122 15.2271 2.74201 14.8206 2.70459 14.3626C2.66782 13.9124 2.66846 13.3553 2.66846 12.6664V7.33334C2.66846 6.64425 2.6678 6.0873 2.70459 5.63706C2.742 5.17926 2.82138 4.77344 3.01318 4.39682C3.31662 3.80129 3.80144 3.31647 4.39697 3.01303C4.77359 2.82123 5.17942 2.74185 5.63721 2.70444C6.08745 2.66765 6.6444 2.66831 7.3335 2.66831H12.6665C13.3555 2.66831 13.9126 2.66767 14.3628 2.70444C14.8208 2.74186 15.2272 2.82106 15.604 3.01303L15.8218 3.1351C16.3176 3.4392 16.7213 3.8757 16.9868 4.39682L17.0532 4.5394C17.1975 4.87572 17.2627 5.23637 17.2954 5.63706C17.3322 6.0873 17.3315 6.64425 17.3315 7.33334V12.6664Z",
            }),
          }),
        label: (0, c.zR)({
          id: "imageSidePanel.aspectRatio.square",
          defaultMessage: "Square",
          description: "Label for the 1:1 image resize option.",
        }),
        ratio: "1:1",
      },
      {
        icon: (e) =>
          (0, r.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M15.1687 6.5C15.1687 5.78896 15.1678 5.29563 15.1365 4.91211C15.1134 4.6301 15.0756 4.44066 15.0242 4.29688L14.9685 4.16699C14.8145 3.8648 14.5803 3.61186 14.2927 3.43555L14.1667 3.36524C14.0088 3.28475 13.7971 3.22797 13.4216 3.19727C13.0382 3.16594 12.5446 3.16504 11.8337 3.16504H8.16675C7.45571 3.16504 6.96238 3.16593 6.57886 3.19727C6.20315 3.22797 5.99175 3.28473 5.83374 3.36524C5.4885 3.54116 5.2079 3.82175 5.03198 4.16699C4.95147 4.325 4.89472 4.5364 4.86401 4.91211C4.83268 5.29563 4.83179 5.78896 4.83179 6.5V13.5C4.83179 14.211 4.83268 14.7044 4.86401 15.0879C4.89472 15.4636 4.95147 15.675 5.03198 15.833L5.1023 15.959C5.27861 16.2466 5.53148 16.4807 5.83374 16.6348L5.96362 16.6914C6.10737 16.7428 6.297 16.7797 6.57886 16.8027C6.96238 16.8341 7.45571 16.835 8.16675 16.835H11.8337C12.5446 16.835 13.0382 16.8341 13.4216 16.8027C13.7971 16.772 14.0088 16.7153 14.1667 16.6348L14.2927 16.5645C14.5803 16.3881 14.8145 16.1352 14.9685 15.833L15.0242 15.7031C15.0756 15.5593 15.1134 15.3699 15.1365 15.0879C15.1678 14.7044 15.1687 14.211 15.1687 13.5V6.5ZM16.4988 13.5C16.4988 14.1891 16.4985 14.746 16.4617 15.1963C16.4289 15.5969 16.3647 15.9577 16.2205 16.2939L16.1531 16.4365C15.8875 16.9577 15.484 17.3941 14.988 17.6982L14.7703 17.8203C14.3937 18.0122 13.9878 18.0915 13.53 18.1289C13.0799 18.1657 12.5227 18.165 11.8337 18.165H8.16675C7.47766 18.165 6.9207 18.1657 6.47046 18.1289C6.06981 18.0962 5.70909 18.031 5.3728 17.8867L5.23023 17.8203C4.70919 17.5548 4.2726 17.151 3.96851 16.6553L3.84644 16.4365C3.65463 16.0599 3.57525 15.6541 3.53784 15.1963C3.50106 14.746 3.50171 14.1891 3.50171 13.5V6.5C3.50171 5.81091 3.50106 5.25395 3.53784 4.80371C3.57525 4.34592 3.65463 3.94009 3.84644 3.56348C4.14988 2.96794 4.63469 2.48313 5.23023 2.17969C5.60684 1.98788 6.01267 1.90851 6.47046 1.87109C6.9207 1.83431 7.47766 1.83496 8.16675 1.83496H11.8337C12.5227 1.83496 13.0799 1.83431 13.53 1.87109C13.9878 1.90853 14.3937 1.98783 14.7703 2.17969L14.988 2.30176C15.484 2.60587 15.8875 3.04228 16.1531 3.56348L16.2205 3.70606C16.3647 4.0423 16.4289 4.40313 16.4617 4.80371C16.4985 5.25395 16.4988 5.81091 16.4988 6.5V13.5Z",
            }),
          }),
        label: (0, c.zR)({
          id: "imageSidePanel.aspectRatio.portrait",
          defaultMessage: "Portrait",
          description: "Label for the 3:4 image resize option.",
        }),
        ratio: "3:4",
      },
      {
        icon: (e) =>
          (0, r.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M9.16504 2.33154C8.454 2.33154 7.96067 2.33243 7.57715 2.36377C7.29514 2.38681 7.1057 2.4246 6.96191 2.47607L6.83203 2.53174C6.52984 2.68571 6.2769 2.91997 6.10059 3.20752L6.03027 3.3335C5.94979 3.49146 5.89301 3.70311 5.86231 4.07861C5.83098 4.46207 5.83008 4.95564 5.83008 5.6665V14.3335C5.83008 15.0445 5.83097 15.5379 5.86231 15.9214C5.89301 16.2971 5.94977 16.5085 6.03027 16.6665C6.2062 17.0117 6.48679 17.2923 6.83203 17.4683C6.99004 17.5488 7.20144 17.6055 7.57715 17.6362C7.96067 17.6676 8.454 17.6685 9.16504 17.6685L10.835 17.7056C11.546 17.7056 12.0393 17.7047 12.4229 17.6733C12.7986 17.6426 13.01 17.5859 13.168 17.5054L13.2939 17.4351C13.5816 17.2587 13.8157 17.0059 13.9697 16.7036L14.0264 16.5737C14.0778 16.43 14.1147 16.2404 14.1377 15.9585C14.169 15.575 14.1699 15.0816 14.1699 14.3706V5.70361C14.1699 4.99275 14.169 4.49918 14.1377 4.11572C14.107 3.74022 14.0502 3.52857 13.9697 3.3706L13.8994 3.24463C13.7231 2.95708 13.4702 2.72282 13.168 2.56885L13.0381 2.51318C12.8943 2.46171 12.7049 2.42392 12.4229 2.40088C12.0393 2.36954 11.546 2.36865 10.835 2.36865L9.16504 2.33154ZM10.835 1.03857C11.5241 1.03857 12.081 1.0389 12.5312 1.07568C12.9318 1.10842 13.2927 1.1727 13.6289 1.31689L13.7715 1.38428C14.2927 1.64984 14.7291 2.05339 15.0332 2.54932L15.1553 2.76709C15.3471 3.14369 15.4264 3.54956 15.4639 4.00732C15.5006 4.45749 15.5 5.01467 15.5 5.70361V14.3706C15.5 15.0597 15.5007 15.6167 15.4639 16.0669C15.4311 16.4675 15.3659 16.8283 15.2217 17.1646L15.1553 17.3071C14.8898 17.8282 14.4859 18.2648 13.9902 18.5688L13.7715 18.6909C13.3949 18.8827 12.989 18.9621 12.5312 18.9995C12.081 19.0363 11.5241 19.0356 10.835 19.0356L9.16504 18.9985C8.47595 18.9985 7.91899 18.9992 7.46875 18.9624C7.01096 18.925 6.60513 18.8456 6.22852 18.6538C5.63298 18.3504 5.14817 17.8656 4.84473 17.27C4.65292 16.8934 4.57355 16.4876 4.53613 16.0298C4.49935 15.5795 4.5 15.0226 4.5 14.3335V5.6665C4.5 4.97756 4.49935 4.42038 4.53613 3.97021C4.57356 3.51245 4.65287 3.10658 4.84473 2.72998L4.9668 2.51221C5.2709 2.01628 5.70732 1.61273 6.22852 1.34717L6.37109 1.27979C6.70734 1.13559 7.06817 1.07131 7.46875 1.03857C7.91899 1.00179 8.47595 1.00146 9.16504 1.00146L10.835 1.03857Z",
            }),
          }),
        label: (0, c.zR)({
          id: "imageSidePanel.aspectRatio.story",
          defaultMessage: "Story",
          description: "Label for the 9:16 image resize option.",
        }),
        ratio: "9:16",
      },
      {
        icon: (e) =>
          (0, r.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M16.835 8.16666C16.835 7.45562 16.8341 6.96229 16.8027 6.57877C16.7797 6.29691 16.7428 6.10728 16.6914 5.96353L16.6348 5.83365C16.4807 5.53139 16.2466 5.27852 15.959 5.1022L15.833 5.03189C15.675 4.95138 15.4636 4.89462 15.0879 4.86392C14.7044 4.83259 14.211 4.8317 13.5 4.8317H6.5C5.78896 4.8317 5.29563 4.83259 4.91211 4.86392C4.5364 4.89462 4.325 4.95138 4.16699 5.03189C3.82175 5.20781 3.54116 5.48841 3.36524 5.83365C3.28473 5.99166 3.22797 6.20306 3.19727 6.57877C3.16593 6.96229 3.16504 7.45562 3.16504 8.16666V11.8336C3.16504 12.5445 3.16594 13.0381 3.19727 13.4215C3.22797 13.797 3.28475 14.0087 3.36524 14.1667L3.43555 14.2926C3.61186 14.5802 3.8648 14.8144 4.16699 14.9684L4.29688 15.0241C4.44066 15.0756 4.6301 15.1133 4.91211 15.1364C5.29563 15.1677 5.78896 15.1686 6.5 15.1686H13.5C14.211 15.1686 14.7044 15.1677 15.0879 15.1364C15.4635 15.1057 15.675 15.0489 15.833 14.9684L15.959 14.8971C16.2464 14.7209 16.4808 14.4687 16.6348 14.1667L16.6914 14.0358C16.7427 13.8922 16.7797 13.7028 16.8027 13.4215C16.8341 13.0381 16.835 12.5445 16.835 11.8336V8.16666ZM18.165 11.8336C18.165 12.5226 18.1657 13.0798 18.1289 13.5299C18.0961 13.9306 18.031 14.2913 17.8867 14.6276L17.8203 14.7702C17.5549 15.2911 17.1509 15.7268 16.6553 16.0309L16.4365 16.153C16.0598 16.3449 15.6542 16.4242 15.1963 16.4616C14.746 16.4984 14.1891 16.4987 13.5 16.4987H6.5C5.81091 16.4987 5.25395 16.4984 4.80371 16.4616C4.40313 16.4288 4.0423 16.3646 3.70606 16.2204L3.56348 16.153C3.04228 15.8874 2.60587 15.4839 2.30176 14.9879L2.17969 14.7702C1.98783 14.3936 1.90853 13.9877 1.87109 13.5299C1.83431 13.0798 1.83496 12.5226 1.83496 11.8336V8.16666C1.83496 7.47757 1.83431 6.92061 1.87109 6.47037C1.90851 6.01258 1.98788 5.60675 2.17969 5.23013C2.48313 4.6346 2.96794 4.14978 3.56348 3.84634C3.94009 3.65454 4.34592 3.57516 4.80371 3.53775C5.25395 3.50096 5.81091 3.50162 6.5 3.50162H13.5C14.1891 3.50162 14.746 3.50096 15.1963 3.53775C15.6541 3.57516 16.0599 3.65454 16.4365 3.84634L16.6553 3.96842C17.151 4.27251 17.5548 4.7091 17.8203 5.23013L17.8867 5.37271C18.031 5.709 18.0962 6.06972 18.1289 6.47037C18.1657 6.92061 18.165 7.47756 18.165 8.16666V11.8336Z",
            }),
          }),
        label: (0, c.zR)({
          id: "imageSidePanel.aspectRatio.landscape",
          defaultMessage: "Landscape",
          description: "Label for the 4:3 image resize option.",
        }),
        ratio: "4:3",
      },
      {
        icon: (e) =>
          (0, r.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M17.6685 9C17.6685 8.28896 17.6676 7.79563 17.6362 7.41211C17.6132 7.1301 17.5754 6.94066 17.5239 6.79688L17.4683 6.66699C17.3143 6.3648 17.08 6.11186 16.7925 5.93555L16.6665 5.86524C16.5085 5.78475 16.2969 5.72797 15.9214 5.69727C15.5379 5.66594 15.0444 5.66504 14.3335 5.66504H5.6665C4.95547 5.66504 4.46213 5.66593 4.07861 5.69727C3.70291 5.72797 3.4915 5.78473 3.3335 5.86524C2.98825 6.04116 2.70766 6.32175 2.53174 6.66699C2.45123 6.825 2.39447 7.0364 2.36377 7.41211C2.33244 7.79563 2.33154 8.28896 2.33154 9V11C2.33154 11.711 2.33244 12.2044 2.36377 12.5879C2.39447 12.9636 2.45123 13.175 2.53174 13.333L2.60205 13.459C2.77837 13.7466 3.03124 13.9807 3.3335 14.1348L3.46338 14.1914C3.60713 14.2428 3.79676 14.2797 4.07861 14.3027C4.46213 14.3341 4.95547 14.335 5.6665 14.335H14.3335C15.0444 14.335 15.5379 14.3341 15.9214 14.3027C16.2969 14.272 16.5085 14.2153 16.6665 14.1348L16.7925 14.0645C17.08 13.8881 17.3143 13.6352 17.4683 13.333L17.5239 13.2031C17.5754 13.0593 17.6132 12.8699 17.6362 12.5879C17.6676 12.2044 17.6685 11.711 17.6685 11V9ZM18.9985 11C18.9985 11.6891 18.9982 12.246 18.9614 12.6963C18.9287 13.0969 18.8644 13.4577 18.7202 13.7939L18.6528 13.9365C18.3873 14.4577 17.9837 14.8941 17.4878 15.1982L17.27 15.3203C16.8934 15.5122 16.4876 15.5915 16.0298 15.6289C15.5796 15.6657 15.0224 15.665 14.3335 15.665H5.6665C4.97741 15.665 4.42046 15.6657 3.97022 15.6289C3.56957 15.5962 3.20885 15.531 2.87256 15.3867L2.72998 15.3203C2.20895 15.0548 1.77236 14.651 1.46826 14.1553L1.34619 13.9365C1.15439 13.5599 1.07501 13.1541 1.0376 12.6963C1.00081 12.246 1.00147 11.6891 1.00147 11V9C1.00147 8.31091 1.00081 7.75395 1.0376 7.30371C1.07501 6.84592 1.15439 6.44009 1.34619 6.06348C1.64963 5.46794 2.13445 4.98313 2.72998 4.67969C3.1066 4.48788 3.51242 4.40851 3.97022 4.37109C4.42046 4.33431 4.97741 4.33496 5.6665 4.33496H14.3335C15.0224 4.33496 15.5796 4.33431 16.0298 4.37109C16.4876 4.40853 16.8934 4.48783 17.27 4.67969L17.4878 4.80176C17.9837 5.10587 18.3873 5.54228 18.6528 6.06348L18.7202 6.20606C18.8644 6.5423 18.9287 6.90313 18.9614 7.30371C18.9982 7.75395 18.9985 8.31091 18.9985 9V11Z",
            }),
          }),
        label: (0, c.zR)({
          id: "imageSidePanel.aspectRatio.widescreen",
          defaultMessage: "Widescreen",
          description: "Label for the 16:9 image resize option.",
        }),
        ratio: "16:9",
      },
    ]
    function x(e) {
      let t,
        n,
        c,
        x,
        b,
        w,
        y,
        P,
        j,
        L,
        S,
        R,
        k,
        M,
        N = (0, a.c)(80),
        {
          canEditImage: I,
          annotationToolsOnly: E,
          downloadAction: T,
          isLoading: z,
          isSubmittingBackgroundRemoval: A,
          isSubmittingResize: D,
          onComment: H,
          onMarkup: _,
          showComment: V,
          onErase: Z,
          onEditText: B,
          onRemoveBackground: O,
          onResize: Y,
          resizeMenuOpen: X,
          onResizeMenuOpenChange: W,
          variant: F,
        } = e,
        K = void 0 !== E && E,
        $ = void 0 === V || V,
        U = (0, u.A)(),
        G = "embedded" === F,
        Q = "imageTools" === F,
        q = G ? "[@container_(max-width:450px)]:sr-only" : "[@container_(max-width:630px)]:sr-only",
        J = G ? "ghostSecondary" : "ghostActive",
        ee = G || Q ? "imageToolbar" : "composerSm",
        et = G ? "large" : "default"
      N[0] !== J || N[1] !== ee || N[2] !== et
        ? ((t = { color: J, size: ee, radius: et }), (N[0] = J), (N[1] = ee), (N[2] = et), (N[3] = t))
        : (t = N[3])
      let en = t
      N[4] !== U
        ? ((n = U.formatMessage({
            id: "imageSidePanel.comment",
            defaultMessage: "Comment",
            description: "Toolbar action that enters image comment mode.",
          })),
          (N[4] = U),
          (N[5] = n))
        : (n = N[5])
      let er = n
      N[6] !== U
        ? ((c = U.formatMessage({
            id: "imageSidePanel.removeBackground",
            defaultMessage: "Remove BG",
            description:
              "Compact image panel action that immediately removes the current image's background while preserving its foreground subjects. BG is short for background.",
          })),
          (N[6] = U),
          (N[7] = c))
        : (c = N[7])
      let ea = c
      N[8] !== U
        ? ((x = U.formatMessage({
            id: "imageSidePanel.resize",
            defaultMessage: "Resize",
            description: "Toolbar action that resizes the current image.",
          })),
          (N[8] = U),
          (N[9] = x))
        : (x = N[9])
      let el = x
      N[10] !== U || N[11] !== G || N[12] !== Q
        ? ((b =
            G || Q
              ? U.formatMessage({
                  id: "imageSidePanel.erase",
                  defaultMessage: "Erase",
                  description:
                    "Image panel toolbar action that lets the user brush over an area of the image to erase it.",
                })
              : U.formatMessage({
                  id: "imageSidePanel.remove",
                  defaultMessage: "Remove",
                  description: "Toolbar action that enters image remove mode.",
                })),
          (N[10] = U),
          (N[11] = G),
          (N[12] = Q),
          (N[13] = b))
        : (b = N[13])
      let ei = b,
        eo = G ? ei : void 0,
        es = !I || A
      N[14] !== Q
        ? ((w = Q ? (0, r.jsx)(p.lRG, {}) : (0, r.jsx)(g.I, { "aria-hidden": !1, asset: o.O })),
          (N[14] = Q),
          (N[15] = w))
        : (w = N[15])
      let ec = !G && !Q && "text-base"
      ;(N[16] !== q || N[17] !== ec ? ((y = (0, s.A)(q, ec)), (N[16] = q), (N[17] = ec), (N[18] = y)) : (y = N[18]),
        N[19] !== ei || N[20] !== y
          ? ((P = (0, r.jsx)("span", { className: y, children: ei })), (N[19] = ei), (N[20] = y), (N[21] = P))
          : (P = N[21]),
        N[22] !== en || N[23] !== ei || N[24] !== Z || N[25] !== eo || N[26] !== es || N[27] !== w || N[28] !== P
          ? ((j = (0, r.jsxs)(m.$, { ...en, "aria-label": ei, title: eo, disabled: es, onClick: Z, children: [w, P] })),
            (N[22] = en),
            (N[23] = ei),
            (N[24] = Z),
            (N[25] = eo),
            (N[26] = es),
            (N[27] = w),
            (N[28] = P),
            (N[29] = j))
          : (j = N[29]))
      let eu = j,
        ed = G ? void 0 : "pointer-events-auto"
      return (
        N[30] !== en || N[31] !== I || N[32] !== U || N[33] !== G || N[34] !== A || N[35] !== q || N[36] !== _
          ? ((L =
              null != _
                ? (0, r.jsxs)(m.$, {
                    ...en,
                    title: G
                      ? U.formatMessage({
                          id: "imageSidePanel.markup",
                          defaultMessage: "Markup",
                          description: "Open drawing, text, shapes, and comments on an image",
                        })
                      : void 0,
                    disabled: !I || A,
                    onClick: _,
                    children: [
                      (0, r.jsx)(p.nQe, {}),
                      (0, r.jsx)("span", {
                        className: q,
                        children: (0, r.jsx)(d.A, {
                          id: "imageSidePanel.markup",
                          defaultMessage: "Markup",
                          description: "Open drawing, text, shapes, and comments on an image",
                        }),
                      }),
                    ],
                  })
                : null),
            (N[30] = en),
            (N[31] = I),
            (N[32] = U),
            (N[33] = G),
            (N[34] = A),
            (N[35] = q),
            (N[36] = _),
            (N[37] = L))
          : (L = N[37]),
        N[38] !== en ||
        N[39] !== er ||
        N[40] !== G ||
        N[41] !== Q ||
        N[42] !== z ||
        N[43] !== A ||
        N[44] !== q ||
        N[45] !== H ||
        N[46] !== $
          ? ((S = $
              ? (0, r.jsxs)(m.$, {
                  ...en,
                  "aria-label": er,
                  title: G ? er : void 0,
                  disabled: z || A,
                  onClick: H,
                  children: [
                    Q ? (0, r.jsx)(p.h78, {}) : (0, r.jsx)(g.I, { "aria-hidden": !1, asset: G ? i.j : l.s }),
                    (0, r.jsx)("span", { className: (0, s.A)(q, !G && !Q && "text-base"), children: er }),
                  ],
                })
              : null),
            (N[38] = en),
            (N[39] = er),
            (N[40] = G),
            (N[41] = Q),
            (N[42] = z),
            (N[43] = A),
            (N[44] = q),
            (N[45] = H),
            (N[46] = $),
            (N[47] = S))
          : (S = N[47]),
        N[48] !== K ||
        N[49] !== en ||
        N[50] !== I ||
        N[51] !== eu ||
        N[52] !== G ||
        N[53] !== Q ||
        N[54] !== A ||
        N[55] !== D ||
        N[56] !== q ||
        N[57] !== O ||
        N[58] !== Y ||
        N[59] !== W ||
        N[60] !== ea ||
        N[61] !== el ||
        N[62] !== X
          ? ((R =
              !K &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(m.$, {
                    ...en,
                    "aria-label": ea,
                    title: ea,
                    disabled: !I || D,
                    loading: A,
                    onClick: O,
                    children: [
                      Q ? (0, r.jsx)(p.vSF, {}) : (0, r.jsx)(p.m9E, {}),
                      (0, r.jsx)("span", {
                        className: q,
                        children: (0, r.jsx)(d.A, {
                          id: "imageSidePanel.removeBackground",
                          defaultMessage: "Remove BG",
                          description:
                            "Compact image panel action that immediately removes the current image's background while preserving its foreground subjects. BG is short for background.",
                        }),
                      }),
                    ],
                  }),
                  eu,
                  (0, r.jsx)(h.Ab, {
                    align: "center",
                    contentWidth: "xs",
                    open: X,
                    onOpenChange: W,
                    side: G ? "top" : "bottom",
                    triggerButton: (0, r.jsxs)(m.$, {
                      ...en,
                      "aria-label": el,
                      title: el,
                      disabled: !I || A,
                      loading: D,
                      children: [
                        (0, r.jsx)(f, { className: Q ? "icon-md" : "icon-sm" }),
                        (0, r.jsx)("span", {
                          className: (0, s.A)(q, !G && !Q && "text-base"),
                          children: (0, r.jsx)(d.A, {
                            id: "imageSidePanel.resize",
                            defaultMessage: "Resize",
                            description: "Toolbar action that resizes the current image.",
                          }),
                        }),
                      ],
                    }),
                    children: v.map((e) => {
                      let { icon: t, label: n, ratio: a } = e
                      return (0, r.jsx)(
                        h.ms.Item,
                        {
                          LeftIcon: t,
                          onSelect: () => Y(a),
                          children: (0, r.jsxs)("span", {
                            className: "flex w-full items-center justify-between gap-4",
                            children: [
                              (0, r.jsx)(d.A, { ...n }),
                              (0, r.jsx)("span", { className: "text-tertiary", children: a }),
                            ],
                          }),
                        },
                        a,
                      )
                    }),
                  }),
                ],
              })),
            (N[48] = K),
            (N[49] = en),
            (N[50] = I),
            (N[51] = eu),
            (N[52] = G),
            (N[53] = Q),
            (N[54] = A),
            (N[55] = D),
            (N[56] = q),
            (N[57] = O),
            (N[58] = Y),
            (N[59] = W),
            (N[60] = ea),
            (N[61] = el),
            (N[62] = X),
            (N[63] = R))
          : (R = N[63]),
        N[64] !== en || N[65] !== U || N[66] !== G || N[67] !== Q || N[68] !== z || N[69] !== q || N[70] !== B
          ? ((k =
              null != B
                ? (0, r.jsxs)(m.$, {
                    ...en,
                    title: G
                      ? U.formatMessage({
                          id: "imageTextEditing.editText",
                          defaultMessage: "Edit text",
                          description: "Image action that prepares existing text in the image for direct editing",
                        })
                      : void 0,
                    disabled: z,
                    onClick: B,
                    children: [
                      Q ? (0, r.jsx)(p.T8H, {}) : (0, r.jsx)(p.K95, {}),
                      (0, r.jsx)("span", {
                        className: (0, s.A)(q, !G && !Q && "text-base"),
                        children: (0, r.jsx)(d.A, {
                          id: "imageTextEditing.editText",
                          defaultMessage: "Edit text",
                          description: "Image action that prepares existing text in the image for direct editing",
                        }),
                      }),
                    ],
                  })
                : null),
            (N[64] = en),
            (N[65] = U),
            (N[66] = G),
            (N[67] = Q),
            (N[68] = z),
            (N[69] = q),
            (N[70] = B),
            (N[71] = k))
          : (k = N[71]),
        N[72] !== T || N[73] !== ed || N[74] !== L || N[75] !== S || N[76] !== R || N[77] !== k || N[78] !== F
          ? ((M = (0, r.jsxs)(C.b, { className: ed, variant: F, children: [L, S, R, T, k] })),
            (N[72] = T),
            (N[73] = ed),
            (N[74] = L),
            (N[75] = S),
            (N[76] = R),
            (N[77] = k),
            (N[78] = F),
            (N[79] = M))
          : (M = N[79]),
        M
      )
    }
  },
  oD0s(e, t, n) {
    n.d(
      t,
      {},
      {
        O: function (e, { pointerId: t, pointerType: n }, r) {
          let a = "mouse" === n ? e.closest("[data-image-text-stage]") : null,
            l = e.ownerDocument.defaultView,
            i = (e) => {
              ;(e.preventDefault(), e.stopPropagation())
            }
          return (
            e.setPointerCapture(t),
            a?.addEventListener("wheel", i, { capture: !0, passive: !1 }),
            l?.addEventListener("blur", r),
            () => {
              ;(a?.removeEventListener("wheel", i, !0),
                l?.removeEventListener("blur", r),
                e.hasPointerCapture(t) && e.releasePointerCapture(t))
            }
          )
        },
        R: function (e) {
          let { target: t } = e
          return (
            t instanceof Element &&
            (t.hasAttribute("data-image-text-surface") || null == t.closest("[data-image-text-controls]"))
          )
        },
      },
    )
  },
}
//# sourceMappingURL=744843.d27b33e6a3.js.map
