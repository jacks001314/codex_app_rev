export const __rspack_esm_ids = [915524]
export const __webpack_modules__ = {
  wmoi(e, t, n) {
    function l(e) {
      return Math.min(400, Math.max(10, e))
    }
    n.d(
      t,
      {},
      {
        E2: [25, 50, 100, 150, 200],
        I: function (e, t) {
          return l(Math.round(e * Math.exp(-(0.01 * t))))
        },
        L$: function (e, t, n, l) {
          return Math.hypot(e - n, t - l)
        },
        fW: function ({ initialDistance: e, initialZoomPercent: t, nextDistance: n }) {
          return l(Math.round((n / e) * t))
        },
        mD: l,
      },
    )
  },
  KScZi(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("on57"),
      r = n("oyxz"),
      o = n("Sm6l"),
      s = n("JjB1"),
      c = n("YwjY"),
      d = n("JDjE"),
      u = n("bdLz")
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            n,
            m,
            g,
            h,
            f,
            p,
            v = (0, a.c)(59),
            {
              ariaDescribedBy: x,
              ariaLabel: b,
              authorAvatar: C,
              autoFocus: y,
              compact: w,
              disabled: S,
              discussion: M,
              embedded: j,
              maxLength: I,
              multiline: P,
              name: E,
              onCancel: A,
              onChange: k,
              onSubmit: N,
              placeholder: T,
              submitLabel: _,
              value: R,
            } = e,
            L = void 0 === y || y,
            D = void 0 !== S && S,
            z = void 0 !== j && j,
            H = void 0 === P || P
          v[0] !== R ? ((t = R.trim()), (v[0] = R), (v[1] = t)) : (t = v[1])
          let O = "" !== t,
            F = !D && O,
            G = (void 0 !== w && w) || null != M
          if (
            v[2] !== x ||
            v[3] !== b ||
            v[4] !== L ||
            v[5] !== D ||
            v[6] !== M ||
            v[7] !== G ||
            v[8] !== I ||
            v[9] !== H ||
            v[10] !== E ||
            v[11] !== A ||
            v[12] !== k ||
            v[13] !== T ||
            v[14] !== R
          ) {
            let e,
              t,
              a,
              r = G
                ? (0, i.A)(
                    "min-h-0 w-full p-0 font-sans text-sm text-default",
                    null != M ? "leading-5" : "leading-normal",
                  )
                : s.Eb
            ;(v[16] !== k ? ((e = (e) => k(e.currentTarget.value)), (v[16] = k), (v[17] = e)) : (e = v[17]),
              v[18] !== D || v[19] !== A
                ? ((t = (e) => {
                    if (e.nativeEvent.isComposing || 229 === e.keyCode) {
                      "Enter" === e.key && e.preventDefault()
                      return
                    }
                    "Escape" !== e.key || null == A || D
                      ? "Enter" !== e.key || e.shiftKey || (e.preventDefault(), e.currentTarget.form?.requestSubmit())
                      : (e.preventDefault(), e.stopPropagation(), A())
                  }),
                  (v[18] = D),
                  (v[19] = A),
                  (v[20] = t))
                : (t = v[20]),
              v[21] !== x ||
              v[22] !== b ||
              v[23] !== L ||
              v[24] !== D ||
              v[25] !== I ||
              v[26] !== E ||
              v[27] !== T ||
              v[28] !== e ||
              v[29] !== t ||
              v[30] !== R
                ? ((a = {
                    "aria-describedby": x,
                    "aria-label": b,
                    autoFocus: L,
                    disabled: D,
                    maxLength: I,
                    name: E,
                    placeholder: T,
                    value: R,
                    onChange: e,
                    onKeyDown: t,
                  }),
                  (v[21] = x),
                  (v[22] = b),
                  (v[23] = L),
                  (v[24] = D),
                  (v[25] = I),
                  (v[26] = E),
                  (v[27] = T),
                  (v[28] = e),
                  (v[29] = t),
                  (v[30] = R),
                  (v[31] = a))
                : (a = v[31]))
            let o = a
            ;((n = H
              ? (0, l.jsx)("textarea", {
                  ...o,
                  className: (0, i.A)(
                    r,
                    "max-h-48 resize-none overflow-y-auto border-0 bg-transparent outline-none placeholder:text-tertiary",
                    null != M && "block",
                    G && "field-sizing-content",
                    G && "self-center",
                  ),
                  rows: G ? 1 : 3,
                })
              : (0, l.jsx)("input", {
                  ...o,
                  className: (0, i.A)(r, "h-7 border-0 bg-transparent outline-none placeholder:text-tertiary"),
                })),
              (v[2] = x),
              (v[3] = b),
              (v[4] = L),
              (v[5] = D),
              (v[6] = M),
              (v[7] = G),
              (v[8] = I),
              (v[9] = H),
              (v[10] = E),
              (v[11] = A),
              (v[12] = k),
              (v[13] = T),
              (v[14] = R),
              (v[15] = n))
          } else n = v[15]
          let B = n
          ;(v[32] !== F || v[33] !== N || v[34] !== R
            ? ((m = (e) => {
                ;(e.preventDefault(), F && N(R.trim()))
              }),
              (v[32] = F),
              (v[33] = N),
              (v[34] = R),
              (v[35] = m))
            : (m = v[35]),
            v[36] !== C ||
            v[37] !== F ||
            v[38] !== M ||
            v[39] !== O ||
            v[40] !== B ||
            v[41] !== G ||
            v[42] !== H ||
            v[43] !== _
              ? ((g =
                  null != M
                    ? (0, l.jsx)(d.q, {
                        authorAvatar: C,
                        disabled: !F,
                        layout: "comment" === M ? "card" : "inline",
                        showSubmit: O,
                        submitLabel: _,
                        submitType: "submit",
                        children: B,
                      })
                    : (0, l.jsxs)("div", {
                        className: (0, i.A)("flex min-w-0 gap-2 py-2 pe-2", G ? "items-end ps-3" : "items-center ps-4"),
                        children: [B, (G ? O : !H && F) ? (0, l.jsx)(u.m, { "aria-label": _, disabled: !F }) : null],
                      })),
                (v[36] = C),
                (v[37] = F),
                (v[38] = M),
                (v[39] = O),
                (v[40] = B),
                (v[41] = G),
                (v[42] = H),
                (v[43] = _),
                (v[44] = g))
              : (g = v[44]),
            v[45] !== F || v[46] !== D || v[47] !== G || v[48] !== H || v[49] !== A || v[50] !== _
              ? ((h =
                  H && !G
                    ? (0, l.jsxs)("div", {
                        className: "flex items-center justify-end gap-2 px-2 pb-2",
                        children: [
                          null != A
                            ? (0, l.jsx)(o.$, {
                                color: "outline",
                                disabled: D,
                                size: "composer",
                                onClick: A,
                                children: (0, l.jsx)(r.A, {
                                  id: "annotationCommentComposer.cancel",
                                  defaultMessage: "Cancel",
                                }),
                              })
                            : null,
                          (0, l.jsx)(u.m, { "aria-label": _, disabled: !F, size: "composer" }),
                        ],
                      })
                    : null),
                (v[45] = F),
                (v[46] = D),
                (v[47] = G),
                (v[48] = H),
                (v[49] = A),
                (v[50] = _),
                (v[51] = h))
              : (h = v[51]),
            v[52] !== h || v[53] !== m || v[54] !== g
              ? ((f = (0, l.jsxs)("form", { className: "flex flex-col", onSubmit: m, children: [g, h] })),
                (v[52] = h),
                (v[53] = m),
                (v[54] = g),
                (v[55] = f))
              : (f = v[55]))
          let Y = f
          return (
            v[56] !== z || v[57] !== Y
              ? ((p = z ? Y : (0, l.jsx)(c.o, { children: Y })), (v[56] = z), (v[57] = Y), (v[58] = p))
              : (p = v[58]),
            p
          )
        },
      },
    )
  },
  BsAN(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("YAOF"),
      r = n("on57"),
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
            d,
            u,
            m,
            g,
            h,
            f,
            p,
            v,
            x,
            b,
            C,
            y,
            w,
            S,
            M,
            j,
            I,
            P,
            E,
            A,
            k,
            N,
            T,
            _,
            R = (0, a.c)(73),
            {
              "aria-label": L,
              className: D,
              disabled: z,
              forceExpanded: H,
              min: O,
              max: F,
              name: G,
              title: B,
              preserveTextFocus: Y,
              value: V,
              onValueChange: Z,
              onInteractionStart: K,
              onInteractionEnd: X,
            } = e,
            U = void 0 !== Y && Y,
            [W, $] = (0, o.useState)(!1),
            [q, Q] = (0, o.useState)(!1),
            [J, ee] = (0, o.useState)(!1),
            et = !z && ((void 0 !== H && H) || W || q || J),
            en = (0, o.useRef)(null),
            el = (0, o.useRef)(null),
            ea = (0, o.useRef)(null)
          R[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (R[0] = t)) : (t = R[0])
          let ei = (0, o.useRef)(t),
            er = (0, o.useRef)(null)
          R[1] !== X
            ? ((n = (e) => {
                if (ea.current === e) {
                  if (((ea.current = null), "pointer" === e)) {
                    Q(!1)
                    let e = er.current
                    ;((er.current = null),
                      e?.textarea.isConnected &&
                        e.slider.contains(e.textarea.ownerDocument.activeElement) &&
                        e.textarea.focus({ preventScroll: !0 }))
                  }
                  X?.()
                }
              }),
              (R[1] = X),
              (R[2] = n))
            : (n = R[2])
          let eo = n
          R[3] !== K
            ? ((c = (e) => {
                null == ea.current && ((ea.current = e), "pointer" === e && Q(!0), K?.())
              }),
              (R[3] = K),
              (R[4] = c))
            : (c = R[4])
          let es = c
          R[5] !== X
            ? ((d = () => {
                null != ea.current && ((ea.current = null), ei.current.clear(), (er.current = null), X?.())
              }),
              (R[5] = X),
              (R[6] = d))
            : (d = R[6])
          let ec = (0, o.useEffectEvent)(d)
          ;(R[7] !== ec ? ((u = () => () => ec()), (R[7] = ec), (R[8] = u)) : (u = R[8]),
            R[9] === Symbol.for("react.memo_cache_sentinel") ? ((m = []), (R[9] = m)) : (m = R[9]),
            (0, o.useEffect)(u, m),
            R[10] !== J
              ? ((h = () => {
                  let e = en.current?.ownerDocument
                  if (!J || null == e) return
                  let t = () => ee(!1)
                  return (e.addEventListener("pointerdown", t, !0), () => e.removeEventListener("pointerdown", t, !0))
                }),
                (g = [J]),
                (R[10] = J),
                (R[11] = g),
                (R[12] = h))
              : ((g = R[11]), (h = R[12])),
            (0, o.useEffect)(h, g),
            R[13] !== z
              ? ((f = (e) => {
                  let t = el.current?.getBoundingClientRect()
                  $(!z && "touch" !== e.pointerType && null != t && e.clientX >= t.left && e.clientX <= t.right)
                }),
                (R[13] = z),
                (R[14] = f))
              : (f = R[14]))
          let ed = f,
            eu = z ? "cursor-not-allowed" : "cursor-ns-resize",
            em = z && "opacity-50"
          R[15] !== D || R[16] !== eu || R[17] !== em
            ? ((p = (0, r.A)(
                "relative flex h-48 w-8 touch-none items-center justify-center select-none browser:h-56 browser:w-12",
                eu,
                em,
                D,
              )),
              (R[15] = D),
              (R[16] = eu),
              (R[17] = em),
              (R[18] = p))
            : (p = R[18])
          let eg = U || void 0,
            eh = Math.min(Math.max(V, O), F)
          ;(R[19] !== eh ? ((v = [eh]), (R[19] = eh), (R[20] = v)) : (v = R[20]),
            R[21] !== eo
              ? ((x = () => {
                  ;(ee(!1), ei.current.clear(), eo("keyboard"))
                }),
                (R[21] = eo),
                (R[22] = x))
              : (x = R[22]),
            R[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (e) => {
                  ee("pointer" !== ea.current && e.target.matches(":focus-visible"))
                }),
                (R[23] = b))
              : (b = R[23]),
            R[24] === Symbol.for("react.memo_cache_sentinel") ? ((C = () => $(!1)), (R[24] = C)) : (C = R[24]),
            R[25] !== es || R[26] !== z || R[27] !== eo || R[28] !== U
              ? ((y = (e) => {
                  if (z || 0 !== e.button) return void e.preventDefault()
                  ;(ee(!1), ei.current.clear(), eo("keyboard"))
                  let t = e.currentTarget.ownerDocument.activeElement
                  ;((er.current =
                    U && t instanceof HTMLTextAreaElement && null != t.closest("[data-sketch-canvas-surface]")
                      ? { textarea: t, slider: e.currentTarget }
                      : null),
                    es("pointer"))
                }),
                (R[25] = es),
                (R[26] = z),
                (R[27] = eo),
                (R[28] = U),
                (R[29] = y))
              : (y = R[29]),
            R[30] !== eo
              ? ((w = () => eo("pointer")),
                (S = () => eo("pointer")),
                (M = () => eo("pointer")),
                (R[30] = eo),
                (R[31] = w),
                (R[32] = S),
                (R[33] = M))
              : ((w = R[31]), (S = R[32]), (M = R[33])),
            R[34] !== es || R[35] !== z
              ? ((j = (e) => {
                  !z && "pointer" !== ea.current && s.has(e.key) && (ee(!0), ei.current.add(e.key), es("keyboard"))
                }),
                (R[34] = es),
                (R[35] = z),
                (R[36] = j))
              : (j = R[36]),
            R[37] !== eo
              ? ((I = (e) => {
                  s.has(e.key) && (ei.current.delete(e.key), 0 === ei.current.size && eo("keyboard"))
                }),
                (R[37] = eo),
                (R[38] = I))
              : (I = R[38]),
            R[39] !== z || R[40] !== Z
              ? ((P = (e) => {
                  let [t] = e
                  z || null == t || Z(t)
                }),
                (R[39] = z),
                (R[40] = Z),
                (R[41] = P))
              : (P = R[41]))
          let ef = et
            ? "polygon(10% 0%, 90% 0%, calc(50% + 1px) 100%, calc(50% - 1px) 100%)"
            : "polygon(calc(50% - 1px) 0%, calc(50% + 1px) 0%, calc(50% + 1px) 100%, calc(50% - 1px) 100%)"
          ;(R[42] !== ef
            ? ((E = (0, l.jsx)("div", {
                ref: el,
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-y-4 start-1/2 w-6 -translate-x-1/2 rtl:translate-x-1/2 browser:w-10",
                children: (0, l.jsx)("div", {
                  className:
                    "absolute h-full w-full bg-[#8f8f8f]/40 transition-[clip-path] duration-relaxed ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[clip-path] motion-reduce:transition-none dark:bg-[#afafaf]/40",
                  style: { clipPath: ef },
                }),
              })),
              (R[42] = ef),
              (R[43] = E))
            : (E = R[43]),
            R[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = (0, l.jsx)(i.CC, { className: "relative h-[calc(100%_-_2rem)] w-full bg-transparent" })),
                (R[44] = A))
              : (A = R[44]))
          let ep = !z && J && "outline outline-2 outline-offset-2 outline-[#2c67c5]",
            ev = et ? "scale-110" : "scale-100"
          return (
            R[45] !== ep || R[46] !== ev
              ? ((k = (0, r.A)(
                  "pointer-events-none block size-4 rounded-full border border-black/20 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-transform duration-relaxed ease-out motion-reduce:transition-none browser:size-5",
                  ep,
                  ev,
                )),
                (R[45] = ep),
                (R[46] = ev),
                (R[47] = k))
              : (k = R[47]),
            R[48] !== k
              ? ((N = (0, l.jsx)("span", { "aria-hidden": !0, className: k })), (R[48] = k), (R[49] = N))
              : (N = R[49]),
            R[50] !== L || R[51] !== N
              ? ((T = (0, l.jsx)(i.zi, {
                  "aria-label": L,
                  className: "relative flex size-8 items-center justify-center rounded-full focus:outline-none",
                  children: N,
                })),
                (R[50] = L),
                (R[51] = N),
                (R[52] = T))
              : (T = R[52]),
            R[53] !== z ||
            R[54] !== F ||
            R[55] !== O ||
            R[56] !== G ||
            R[57] !== p ||
            R[58] !== eg ||
            R[59] !== v ||
            R[60] !== x ||
            R[61] !== y ||
            R[62] !== w ||
            R[63] !== S ||
            R[64] !== M ||
            R[65] !== j ||
            R[66] !== I ||
            R[67] !== P ||
            R[68] !== E ||
            R[69] !== T ||
            R[70] !== B ||
            R[71] !== ed
              ? ((_ = (0, l.jsxs)(i.bL, {
                  ref: en,
                  className: p,
                  "data-sketch-preserve-text-focus": eg,
                  disabled: z,
                  min: O,
                  max: F,
                  name: G,
                  title: B,
                  orientation: "vertical",
                  step: 1,
                  value: v,
                  onBlur: x,
                  onFocus: b,
                  onPointerEnter: ed,
                  onPointerMove: ed,
                  onPointerLeave: C,
                  onPointerDown: y,
                  onPointerUp: w,
                  onPointerCancel: S,
                  onLostPointerCapture: M,
                  onKeyDown: j,
                  onKeyUp: I,
                  onValueChange: P,
                  children: [E, A, T],
                })),
                (R[53] = z),
                (R[54] = F),
                (R[55] = O),
                (R[56] = G),
                (R[57] = p),
                (R[58] = eg),
                (R[59] = v),
                (R[60] = x),
                (R[61] = y),
                (R[62] = w),
                (R[63] = S),
                (R[64] = M),
                (R[65] = j),
                (R[66] = I),
                (R[67] = P),
                (R[68] = E),
                (R[69] = T),
                (R[70] = B),
                (R[71] = ed),
                (R[72] = _))
              : (_ = R[72]),
            _
          )
        },
      },
    )
  },
  m5LN(e, t, n) {
    var l = n("QosV"),
      a = n("zd8w"),
      i = n("v7qY"),
      r = n("wD9O"),
      o = n("wmoi"),
      s = n("bIvi")
    function c(e) {
      return Math.min(Math.max(e, 0), 1)
    }
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            d,
            u,
            m,
            g,
            h,
            f,
            p,
            v,
            x,
            b = (0, l.c)(30),
            { onZoomPercentChange: C, viewportCenterInlineOffset: y, zoomPercent: w } = e,
            S = void 0 === y ? 0 : y,
            M = (0, r.dz)(),
            j = (0, a.useRef)(null),
            I = (0, a.useRef)(null),
            P = (0, a.useRef)(null),
            E = (0, a.useRef)(0),
            A = (0, a.useRef)(null)
          b[0] !== C || b[1] !== M
            ? ((t = (e, t) => {
                let { clientX: n, clientY: l } = t,
                  a = j.current,
                  o = I.current
                if (null == a || null == o) return void C(e)
                let s = o.getBoundingClientRect(),
                  d = s.width > 0 ? c((n - s.left) / s.width) : 0.5,
                  u = s.height > 0 ? c((l - s.top) / s.height) : 0.5
                if (
                  ((0, i.flushSync)(() => {
                    C(e)
                  }),
                  !a.isConnected || !o.isConnected)
                )
                  return
                let m = o.getBoundingClientRect()
                ;((a.scrollLeft = a.scrollLeft + (0, r.Ud)(m.left + m.width * d - n, M)),
                  (a.scrollTop = a.scrollTop + (0, r.Ud)(m.top + m.height * u - l, M)))
              }),
              (b[0] = C),
              (b[1] = M),
              (b[2] = t))
            : (t = b[2])
          let k = t
          b[3] !== S || b[4] !== M
            ? ((n = (e) => {
                let t = e.getBoundingClientRect(),
                  n = "rtl" === getComputedStyle(e).direction ? -1 : 1
                return { clientX: t.left + t.width / 2 + S * M * n, clientY: t.top + t.height / 2 }
              }),
              (b[3] = S),
              (b[4] = M),
              (b[5] = n))
            : (n = b[5])
          let N = n
          b[6] !== N || b[7] !== C || b[8] !== k
            ? ((d = (e) => {
                let t = j.current
                null == t ? C(e) : k(e, N(t))
              }),
              (b[6] = N),
              (b[7] = C),
              (b[8] = k),
              (b[9] = d))
            : (d = b[9])
          let T = d
          b[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (e) => {
                ;(null != P.current && (E.current = e.timeStamp), (P.current = null))
              }),
              (b[10] = u))
            : (u = b[10])
          let _ = (0, s.K)(u)
          b[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (e) => {
                let t = E.current
                0 === t || e.timeStamp - t >= 500 || (e.preventDefault(), e.stopPropagation())
              }),
              (b[11] = m))
            : (m = b[11])
          let R = m
          b[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (e) => {
                ;((A.current = { clientX: e.clientX, clientY: e.clientY }),
                  "touch" === e.pointerType && null != P.current && e.stopPropagation())
              }),
              (b[12] = g))
            : (g = b[12])
          let L = g
          b[13] !== k || b[14] !== w
            ? ((h = (e) => {
                let t = P.current
                if (2 !== e.touches.length || null == t) return
                ;(e.preventDefault(), e.stopPropagation())
                let n = e.touches.item(0),
                  l = e.touches.item(1)
                if (null == n || null == l) return
                let a = (0, o.L$)(n.clientX, n.clientY, l.clientX, l.clientY)
                if (a <= 0 || t.distance <= 0) return
                let i = (0, o.fW)({ initialDistance: t.distance, initialZoomPercent: t.zoomPercent, nextDistance: a })
                i !== w && k(i, { clientX: (n.clientX + l.clientX) / 2, clientY: (n.clientY + l.clientY) / 2 })
              }),
              (b[13] = k),
              (b[14] = w),
              (b[15] = h))
            : (h = b[15])
          let D = (0, s.K)(h)
          b[16] !== w
            ? ((f = (e) => {
                if (2 !== e.touches.length) {
                  P.current = null
                  return
                }
                e.preventDefault()
                let t = e.touches.item(0),
                  n = e.touches.item(1)
                null != t &&
                  null != n &&
                  (P.current = { distance: (0, o.L$)(t.clientX, t.clientY, n.clientX, n.clientY), zoomPercent: w })
              }),
              (b[16] = w),
              (b[17] = f))
            : (f = b[17])
          let z = (0, s.K)(f)
          b[18] !== N || b[19] !== k || b[20] !== w
            ? ((p = (e) => {
                if (!e.ctrlKey) return
                ;(e.preventDefault(), e.stopPropagation())
                let t = (0, o.I)(w, e.deltaY)
                if (t === w) return
                let n = 0 === e.clientX && 0 === e.clientY ? A.current : { clientX: e.clientX, clientY: e.clientY },
                  l = j.current
                null != l && k(t, n ?? N(l))
              }),
              (b[18] = N),
              (b[19] = k),
              (b[20] = w),
              (b[21] = p))
            : (p = b[21])
          let H = (0, s.K)(p)
          b[22] !== _ || b[23] !== D || b[24] !== z || b[25] !== H
            ? ((v = (e) => {
                let t = j.current
                t === e ||
                  (null != t &&
                    (t.removeEventListener("touchcancel", _),
                    t.removeEventListener("touchend", _),
                    t.removeEventListener("touchmove", D),
                    t.removeEventListener("touchstart", z),
                    t.removeEventListener("wheel", H)),
                  (j.current = e),
                  null != e &&
                    (e.addEventListener("touchcancel", _),
                    e.addEventListener("touchend", _),
                    e.addEventListener("touchmove", D, { passive: !1 }),
                    e.addEventListener("touchstart", z, { passive: !1 }),
                    e.addEventListener("wheel", H, { passive: !1 })))
              }),
              (b[22] = _),
              (b[23] = D),
              (b[24] = z),
              (b[25] = H),
              (b[26] = v))
            : (v = b[26])
          let O = v
          return (
            b[27] !== O || b[28] !== T
              ? ((x = {
                  zoomTargetRef: I,
                  handleClickCapture: R,
                  handlePointerMoveCapture: L,
                  setScrollContainerRef: O,
                  setZoomAtViewportCenter: T,
                }),
                (b[27] = O),
                (b[28] = T),
                (b[29] = x))
              : (x = b[29]),
            x
          )
        },
      },
    )
  },
  sHs0(e, t, n) {
    var l = n("TPR0"),
      a = n("umQU")
    function i(e, t, n) {
      let l = {
        comment: t.text,
        x: e.formatNumber(Math.min(Math.max(t.x, 0), 1), { style: "percent", maximumFractionDigits: 1 }),
        y: e.formatNumber(Math.min(Math.max(t.y, 0), 1), { style: "percent", maximumFractionDigits: 1 }),
      }
      return "sheet" === n
        ? e.formatMessage(
            { id: "gifEditor.comments.sheetCoordinates", defaultMessage: "Sprite sheet (x: {x}, y: {y}): {comment}" },
            l,
          )
        : null != n
          ? e.formatMessage(
              {
                id: "gifEditor.comments.frameCoordinates",
                defaultMessage: "Frame #{frameNumber} (x: {x}, y: {y}): {comment}",
              },
              { ...l, frameNumber: n + 1 },
            )
          : e.formatMessage({ id: "gifEditor.comments.comment", defaultMessage: "(x: {x}, y: {y}): {comment}" }, l)
    }
    n.d(
      t,
      {},
      {
        a: function (e, t) {
          if (0 === t.length) return ""
          let n = new Map()
          for (let { frameIndex: e, comment: l } of t) {
            let t = n.get(e)
            null == t ? n.set(e, [l]) : t.push(l)
          }
          return [
            e.formatMessage({
              id: "gifEditor.comments.prompt",
              defaultMessage:
                "Re-animate the GIF with these changes. Coordinates are relative to each frame. Make sure all frames are equal sized.",
            }),
            ...[...n]
              .sort(([e], [t]) => e - t)
              .map(([t, n]) =>
                [
                  e.formatMessage(
                    { id: "gifEditor.comments.frameHeading", defaultMessage: "Frame #{frameNumber}:" },
                    { frameNumber: t + 1 },
                  ),
                  ...n.map((t) => i(e, t)),
                ].join("\n"),
              ),
          ].join("\n\n")
        },
        w: async function (e, { animation: t, conversationId: n, imageAssetResolver: r, intl: o, comments: s }) {
          var c, d, u, m
          let { playback: g } = e.get(a.ez, {
            image: t.sourceImage ?? {
              id: t.id,
              type: "generated-image",
              status: "completed",
              isAnimated: !0,
              src: t.src,
            },
            conversationId: n,
            imageAssetResolver: r,
          })
          return (
            (c = o),
            (d = s),
            (u = t.sourceImage?.spritesheet?.frameLayout),
            (m = await (0, l.bA)(await g.loadOriginal(), 1)),
            0 === d.length
              ? ""
              : [
                  c.formatMessage(
                    {
                      id: "gifEditor.comments.sheetFramesPromptFrameDuration",
                      defaultMessage:
                        "Re-animate the GIF with these changes at {durationMs, number, ::.##} ms per frame. Coordinates are relative to each identified frame; comments labeled Sprite sheet use coordinates relative to the whole sheet. Make sure all frames remain equal sized.",
                    },
                    { durationMs: m },
                  ),
                  ...d.map((e) => {
                    if (null != u) {
                      let { rows: t, columns: n, frameCount: l } = u,
                        a = Math.min(Math.max(e.x, 0), 1) * n,
                        r = Math.min(Math.max(e.y, 0), 1) * t,
                        o = Math.min(Math.floor(a), n - 1),
                        s = Math.min(Math.floor(r), t - 1),
                        d = s * n + o
                      if (d < l) return i(c, { ...e, x: a - o, y: r - s }, d)
                    }
                    return i(c, e, "sheet")
                  }),
                ].join("\n\n")
          )
        },
      },
    )
  },
  tMvB(e, t, n) {
    var l = n("qmMi"),
      a = n("tSEg")
    let i = (0, l.bD)(a.GD, (e) => new Map(), void 0, { autoDispose: 6e4 }),
      r = (0, l.i1)(
        a.GD,
        ({ viewerId: e, assetSrc: t }, { get: n }) => {
          let l = n(i, e).get(t)
          return {
            active: l?.commentMode != null,
            hasPendingComment: l?.commentMode === "draft",
            isSubmitting: l?.commentMode === "submitting",
            hasComments: (l?.comments.length ?? 0) > 0,
          }
        },
        {
          isEqual: (e, t) =>
            e.active === t.active &&
            e.hasPendingComment === t.hasPendingComment &&
            e.isSubmitting === t.isSubmitting &&
            e.hasComments === t.hasComments,
        },
      )
    n.d(
      t,
      {},
      {
        L0: r,
        k_: function (e, t, n, l) {
          e.set(i, t, (e) => new Map(e).set(n, { comments: [], speed: 1, ...e.get(n), ...l }))
        },
        q8: i,
      },
    )
  },
  Sgf9(e, t, n) {
    n.d(t, { A: () => M })
    var l = n("ABep"),
      a = n("QosV"),
      i = n("qmMi"),
      r = n("SPnB"),
      o = n("tl2n"),
      s = n("jU86"),
      c = n("VJXV"),
      d = n("hrTz"),
      u = n("tSEg"),
      m = n("zHp1"),
      g = n("j9wQ"),
      h = n("MrGp"),
      f = n("UBr4"),
      p = n("jAnS"),
      v = n("zd8w"),
      x = n("Qed5"),
      b = n("mF5c")
    function C(e) {
      let t,
        n,
        r,
        o,
        d = (0, a.c)(16),
        { image: u, conversationId: m, libraryFileId: g } = e,
        h = (0, i.gh)(s.oD)
      d[0] !== g ? ((t = [g]), (d[0] = g), (d[1] = t)) : (t = d[1])
      let { data: f, isError: p } = (0, i._U)(c.oK, t),
        C = (0, i._U)(c.LT, g),
        y = f?.[g],
        w = (0, v.useRef)(!1),
        [S, M] = (0, v.useState)(!1)
      d[2] !== m || d[3] !== u || d[4] !== p || d[5] !== g || d[6] !== C || d[7] !== h || d[8] !== y
        ? ((n = async () => {
            null == y ||
              w.current ||
              C ||
              y.isUnavailable ||
              p ||
              ((w.current = !0),
              M(!0),
              await (0, b.e)(h, {
                image: u,
                conversationId: m,
                libraryFileId: g,
                status: y,
                folder: void 0,
                created: !1,
                surface: "image_lightbox",
              }).finally(() => {
                ;((w.current = !1), M(!1))
              }))
          }),
          (d[2] = m),
          (d[3] = u),
          (d[4] = p),
          (d[5] = g),
          (d[6] = C),
          (d[7] = h),
          (d[8] = y),
          (d[9] = n))
        : (n = d[9])
      let j = n
      if (p || y?.isUnavailable) return null
      let I = y?.isFavorited === !0,
        P = S || C || null == y
      return (
        d[10] !== j ? ((r = () => void j()), (d[10] = j), (d[11] = r)) : (r = d[11]),
        d[12] !== I || d[13] !== P || d[14] !== r
          ? ((o = (0, l.jsx)(x.Y, { isFavorited: I, disabled: P, onSelect: r })),
            (d[12] = I),
            (d[13] = P),
            (d[14] = r),
            (d[15] = o))
          : (o = d[15]),
        o
      )
    }
    var y = n("ONnF")
    function w(e) {
      let t,
        n,
        s,
        d = (0, a.c)(21),
        {
          children: f,
          fileInfoSource: v,
          image: x,
          conversationId: b,
          navigationDisabled: C,
          readOnly: y,
          title: w,
        } = e,
        M = (0, i.gh)(u.GD),
        j = (0, i._U)(h.jS, b),
        I = (0, i._U)(h.N4, b),
        P = (0, i.Ul)(r.m0),
        E = (0, i.Ul)(r.chatGptAuthenticatedAccountId$),
        A = (0, i.Ul)(r.chatGptAuthenticatedUserId$),
        k = (0, i.Ul)(c._L),
        N = (0, i.Ul)(o.$7)
      d[0] !== k || d[1] !== y || d[2] !== M || d[3] !== I
        ? ((t = k && !y && null == I && !(0, p.CV)(M.value.search ?? "")),
          (d[0] = k),
          (d[1] = y),
          (d[2] = M),
          (d[3] = I),
          (d[4] = t))
        : (t = d[4])
      let T = t
      if (
        (!N && !T) ||
        "allowed" !== P.status ||
        null == E ||
        null == A ||
        null == j ||
        "completed" !== x.status ||
        x.isPreview ||
        null == x.src ||
        !(0, m.fi)(x.src)
      ) {
        let e
        return (
          d[5] !== f || d[6] !== w
            ? ((e = (0, l.jsx)(g.jH, { title: w, fileType: "image", children: f })), (d[5] = f), (d[6] = w), (d[7] = e))
            : (e = d[7]),
          e
        )
      }
      let _ = x.src
      return (
        d[8] !== x.src ? ((n = x.src.slice(x.src.indexOf("://") + 3)), (d[8] = x.src), (d[9] = n)) : (n = d[9]),
        d[10] !== E ||
        d[11] !== f ||
        d[12] !== v ||
        d[13] !== x ||
        d[14] !== C ||
        d[15] !== j ||
        d[16] !== T ||
        d[17] !== n ||
        d[18] !== w ||
        d[19] !== A
          ? ((s = (0, l.jsx)(
              S,
              {
                accountId: E,
                fileInfoSource: v,
                title: w,
                image: x,
                conversationId: j,
                fileId: n,
                navigationDisabled: C,
                showFavorite: T,
                userId: A,
                children: f,
              },
              _,
            )),
            (d[10] = E),
            (d[11] = f),
            (d[12] = v),
            (d[13] = x),
            (d[14] = C),
            (d[15] = j),
            (d[16] = T),
            (d[17] = n),
            (d[18] = w),
            (d[19] = A),
            (d[20] = s))
          : (s = d[20]),
        s
      )
    }
    function S(e) {
      let t,
        n,
        r,
        o,
        c,
        u,
        m = (0, a.c)(33),
        {
          accountId: h,
          children: p,
          fileInfoSource: v,
          image: x,
          conversationId: b,
          fileId: w,
          navigationDisabled: S,
          showFavorite: M,
          title: j,
          userId: I,
        } = e
      m[0] !== h || m[1] !== b || m[2] !== w || m[3] !== I
        ? ((t = { accountId: h, conversationId: b, fileId: w, userId: I }),
          (m[0] = h),
          (m[1] = b),
          (m[2] = w),
          (m[3] = I),
          (m[4] = t))
        : (t = m[4])
      let { data: P, isError: E } = (0, i._U)(y.Xp, t),
        A = E ? null : P?.library_file_id,
        k = E ? null : (P?.library_directory_id ?? null)
      ;(m[5] !== h || m[6] !== k || m[7] !== A || m[8] !== I
        ? ((n =
            null == A
              ? null
              : (0, l.jsx)(i.Ui, {
                  scope: s.oD,
                  value: { accountId: h, userId: I },
                  children: (0, l.jsx)(d.x, { libraryFileId: A, parentDirectoryId: k }),
                })),
          (m[5] = h),
          (m[6] = k),
          (m[7] = A),
          (m[8] = I),
          (m[9] = n))
        : (n = m[9]),
        m[10] !== h || m[11] !== k || m[12] !== A || m[13] !== I
          ? ((r =
              null == A
                ? null
                : (0, l.jsx)(i.Ui, {
                    scope: s.oD,
                    value: { accountId: h, userId: I },
                    children: (0, l.jsx)(d.x, { libraryFileId: A, parentDirectoryId: k, variant: "text" }),
                  })),
            (m[10] = h),
            (m[11] = k),
            (m[12] = A),
            (m[13] = I),
            (m[14] = r))
          : (r = m[14]),
        m[15] !== h || m[16] !== b || m[17] !== x || m[18] !== A || m[19] !== M || m[20] !== I
          ? ((o =
              null != A && M
                ? (0, l.jsx)(i.Ui, {
                    scope: s.oD,
                    value: { accountId: h, userId: I },
                    children: (0, l.jsx)(C, { image: x, conversationId: b, libraryFileId: A }),
                  })
                : null),
            (m[15] = h),
            (m[16] = b),
            (m[17] = x),
            (m[18] = A),
            (m[19] = M),
            (m[20] = I),
            (m[21] = o))
          : (o = m[21]))
      let N = A ?? void 0
      return (
        m[22] !== p || m[23] !== v || m[24] !== S || m[25] !== o || m[26] !== N
          ? ((c = (0, l.jsx)(f.h, {
              favoriteAction: o,
              fileInfoSource: v,
              libraryFileId: N,
              openInLibraryDisabled: S,
              children: p,
            })),
            (m[22] = p),
            (m[23] = v),
            (m[24] = S),
            (m[25] = o),
            (m[26] = N),
            (m[27] = c))
          : (c = m[27]),
        m[28] !== n || m[29] !== r || m[30] !== c || m[31] !== j
          ? ((u = (0, l.jsx)(g.jH, {
              title: j,
              fileType: "image",
              libraryBreadcrumb: n,
              tooltipBreadcrumb: r,
              children: c,
            })),
            (m[28] = n),
            (m[29] = r),
            (m[30] = c),
            (m[31] = j),
            (m[32] = u))
          : (u = m[32]),
        u
      )
    }
    function M(e) {
      let t,
        n = (0, a.c)(11),
        { children: r, fileInfoSource: o, title: s, image: c, navigationDisabled: d, readOnly: m } = e,
        h = (0, i.gh)(u.GD)
      if ("chatgpt-thread" === h.value.routeKind && null != c) {
        let e
        return (
          n[0] !== r ||
          n[1] !== o ||
          n[2] !== c ||
          n[3] !== d ||
          n[4] !== m ||
          n[5] !== h.value.conversationId ||
          n[6] !== s
            ? ((e = (0, l.jsx)(w, {
                fileInfoSource: o,
                title: s,
                image: c,
                conversationId: h.value.conversationId,
                navigationDisabled: d,
                readOnly: m,
                children: r,
              })),
              (n[0] = r),
              (n[1] = o),
              (n[2] = c),
              (n[3] = d),
              (n[4] = m),
              (n[5] = h.value.conversationId),
              (n[6] = s),
              (n[7] = e))
            : (e = n[7]),
          e
        )
      }
      return (
        n[8] !== r || n[9] !== s
          ? ((t = (0, l.jsx)(g.jH, { title: s, fileType: "image", children: r })), (n[8] = r), (n[9] = s), (n[10] = t))
          : (t = n[10]),
        t
      )
    }
  },
  arh8(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("Ga65"),
      r = n("on57")
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            o = (0, a.c)(5),
            { number: s, className: c } = e,
            d = void 0 === c ? "size-full" : c
          return (
            o[0] !== d
              ? ((t = (0, r.A)(
                  "font-sans text-[10px] leading-none font-semibold tabular-nums scheme-light [--alpha-10:var(--gray-150)] [--color-border:var(--gray-150)] [--color-surface:white] [--color-text:var(--gray-700)]",
                  d,
                )),
                (o[0] = d),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== s || o[3] !== t
              ? ((n = (0, l.jsx)(i.Sj, { appearance: "avatar", className: t, children: s })),
                (o[2] = s),
                (o[3] = t),
                (o[4] = n))
              : (n = o[4]),
            n
          )
        },
      },
    )
  },
  vywK(e, t, n) {
    var l = n("SZCv"),
      a = n.n(l),
      i = n("qmMi"),
      r = n("OWtl")
    let o = { contentHeight: 0, composerTopFraction: null, toolbar: null },
      s = new WeakMap(),
      c = 0,
      d = (0, i.A4)(
        r.u,
        (e) => !e.hidden,
        (e, { set: t }) => {
          let n = () => t(!e.hidden)
          return (e.addEventListener("visibilitychange", n), n(), () => e.removeEventListener("visibilitychange", n))
        },
        { autoDispose: !0 },
      ),
      u = (0, i.A4)(
        r.u,
        o,
        ({ stage: e, composerElement: t, toolbarRef: n, surface: l }, { set: a }) => {
          if (null == e) return
          let i = l?.firstElementChild,
            r = null,
            o = () => {
              let l = n?.current ?? null
              l !== r && (r && s.unobserve(r), (r = l) && s.observe(r))
              let o = e.getBoundingClientRect(),
                c = r?.getBoundingClientRect(),
                d = t?.getBoundingClientRect(),
                u = i instanceof HTMLElement ? i.offsetHeight : 0,
                m =
                  d && d.width > 0 && d.height > 0 && o.height > 0
                    ? Math.min(1, Math.max(0, (d.top - o.top) / o.height))
                    : null
              if (
                !c ||
                c.width <= 0 ||
                c.height <= 0 ||
                o.width <= 0 ||
                o.height <= 0 ||
                c.right <= o.left ||
                c.left >= o.right ||
                c.bottom <= o.top ||
                c.top >= o.bottom
              )
                return void a({ contentHeight: u, composerTopFraction: m, toolbar: null })
              let g = c.top + c.height / 2 >= o.top + o.height / 2
              a({
                contentHeight: u,
                composerTopFraction: m,
                toolbar: {
                  left: c.left - o.left,
                  right: c.right - o.left,
                  top: g ? 0 : Math.min(o.height, c.bottom - o.top),
                  bottom: g ? Math.min(o.height, o.bottom - c.top) : 0,
                  stageWidth: o.width,
                  stageHeight: o.height,
                },
              })
            },
            s = new ResizeObserver(o)
          return (s.observe(e), t && s.observe(t), i && s.observe(i), o(), () => s.disconnect())
        },
        {
          autoDispose: !0,
          isEqual: a(),
          key: ({ stage: e, composerElement: t, toolbarRef: n, surface: l, windowZoom: a }) =>
            JSON.stringify([m(e), m(t), m(n), m(l), a]),
        },
      )
    function m(e) {
      if (null == e) return 0
      let t = s.get(e)
      return (null == t && ((t = ++c), s.set(e, t)), t)
    }
    n.d(t, {}, { Or: d, ui: o, v6: u })
  },
  oIzB(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("ucA4"),
      r = n("on57"),
      o = n("DBCl"),
      s = n("zd8w"),
      c = n("Wf1j"),
      d = n("wD9O")
    n("dVA2")
    var u = n("JjB1"),
      m = n("YwjY"),
      g = n("KScZi"),
      h = n("Sm6l"),
      f = n("QnK7"),
      p = n("nsuH"),
      v = n("HgLj")
    function x(e) {
      return e + 1
    }
    function b(e) {
      let t = e.currentTarget.getBoundingClientRect(),
        n = e.currentTarget.parentElement
      return null == n || t.width <= 0 || t.height <= 0
        ? null
        : { ...C(n), x: (e.clientX - t.left) / t.width, y: (e.clientY - t.top) / t.height }
    }
    function C(e) {
      let t = e.parentElement
      return {
        editorMaxX: (t?.clientWidth ?? e.clientWidth) - e.offsetLeft - 8,
        editorMaxY: (t?.clientHeight ?? e.clientHeight) - e.offsetTop - 8,
        editorMinX: 8 - e.offsetLeft,
        editorMinY: 8 - e.offsetTop,
        surfaceHeight: e.clientHeight,
        surfaceWidth: e.clientWidth,
      }
    }
    function y(e, t) {
      let n = e.x * e.surfaceWidth,
        l = e.y * e.surfaceHeight,
        a = Math.min(o.D3l, e.editorMaxX - e.editorMinX),
        i = t ? o.bUX : o.tuv,
        r = e.editorMaxX - a,
        s = e.editorMaxY - i,
        c = Math.min(Math.max(l - i / 2, e.editorMinY), s),
        d = n + 27
      if (d <= r) return { height: i, left: d, top: c, width: a }
      let u = n - 27 - a
      if (u >= e.editorMinX) return { height: i, left: u, top: c, width: a }
      let m = Math.min(Math.max(n - a / 2, e.editorMinX), r),
        g = l + 27
      return g <= s
        ? { height: i, left: m, top: g, width: a }
        : { height: i, left: m, top: Math.max(l - 27 - i, e.editorMinY), width: a }
    }
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            o,
            w,
            S,
            M,
            j,
            I,
            P,
            E,
            A,
            k,
            N,
            T,
            _,
            R,
            L,
            D,
            z,
            H,
            O,
            F,
            G,
            B,
            Y,
            V,
            Z,
            K = (0, a.c)(115),
            {
              ref: X,
              alt: U,
              comments: W,
              imageRef: $,
              isDraftActive: q,
              isFullscreen: Q,
              layout: J,
              onDraftActiveChange: ee,
              onCommentActivate: et,
              onDeleteComment: en,
              onImageLoad: el,
              onSubmitComment: ea,
              referrerPolicy: ei,
              src: er,
              viewport: eo,
            } = e,
            es = void 0 === q || q,
            ec = void 0 !== Q && Q,
            ed = void 0 === J ? "panel" : J,
            eu = (0, c.A)(),
            em = (0, d.dz)(),
            [eg, eh] = (0, p.Xl)(),
            ef = (0, s.useRef)(null),
            ep = (0, s.useRef)(null),
            [ev, ex] = (0, s.useState)(null),
            [eb, eC] = (0, s.useState)(0),
            [ey, ew] = (0, s.useState)(null),
            [eS, eM] = (0, s.useState)("")
          K[0] !== eo || K[1] !== em
            ? ((t =
                null == eo
                  ? null
                  : {
                      left: eo.imageRect.left / em,
                      top: eo.imageRect.top / em,
                      width: eo.imageRect.width / em,
                      height: eo.imageRect.height / em,
                    }),
              (K[0] = eo),
              (K[1] = em),
              (K[2] = t))
            : (t = K[2])
          let ej = t
          K[3] !== ej || K[4] !== es || K[5] !== ev || K[6] !== eh
            ? (null != (n = es ? ev : null) &&
                null != ej &&
                null != eh.width &&
                null != eh.height &&
                (n = {
                  ...n,
                  editorMaxX: eh.width - ej.left - 8,
                  editorMaxY: eh.height - ej.top - 8,
                  editorMinX: 8 - ej.left,
                  editorMinY: 8 - ej.top,
                  surfaceHeight: ej.height,
                  surfaceWidth: ej.width,
                }),
              (K[3] = ej),
              (K[4] = es),
              (K[5] = ev),
              (K[6] = eh),
              (K[7] = n))
            : (n = K[7])
          let eI = eo?.isInteracting || eo?.isPanReady
          ;(K[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = () => ({
                onViewportInteractionStart() {
                  ;((ep.current = null), ew(null))
                  let e = ef.current
                  e?.parentElement?.contains(e.ownerDocument.activeElement) && e.focus({ preventScroll: !0 })
                },
              })),
              (K[8] = o))
            : (o = K[8]),
            (0, s.useImperativeHandle)(X, o),
            K[9] !== W || K[10] !== n
              ? ((w = n?.id == null ? -1 : W.findIndex((e) => e.id === n.id)), (K[9] = W), (K[10] = n), (K[11] = w))
              : (w = K[11]))
          let eP = w,
            eE = -1 === eP ? null : W[eP]
          K[12] !== ee
            ? ((S = () => {
                ;(ex(null), eM(""), ee?.(!1))
              }),
              (K[12] = ee),
              (K[13] = S))
            : (S = K[13])
          let eA = S
          K[14] !== eA || K[15] !== eS || K[16] !== ea || K[17] !== n
            ? ((M = () => {
                let e = eS.trim()
                null != n && 0 !== e.length && (ea({ id: n.id, text: e, x: n.x, y: n.y }), eA())
              }),
              (K[14] = eA),
              (K[15] = eS),
              (K[16] = ea),
              (K[17] = n),
              (K[18] = M))
            : (M = K[18])
          let ek = M
          K[19] !== et || K[20] !== ee
            ? ((j = (e) => {
                let t = b(e)
                null != t && (ew(null), et?.("pin"), ee?.(!0), ex(t), eM(""), eC(x))
              }),
              (K[19] = et),
              (K[20] = ee),
              (K[21] = j))
            : (j = K[21])
          let eN = j,
            eT = null == eo ? void 0 : eg,
            e_ = null != eo && "absolute inset-0",
            eR = null == eo && "relative",
            eL =
              null == eo &&
              ("panel" === ed
                ? "[container-type:size] flex h-0 min-h-0 flex-1 items-center justify-center overflow-hidden p-4"
                : "block max-w-full shrink-0")
          ;(K[22] !== e_ || K[23] !== eR || K[24] !== eL
            ? ((I = (0, r.A)(e_, eR, eL)), (K[22] = e_), (K[23] = eR), (K[24] = eL), (K[25] = I))
            : (I = K[25]),
            K[26] !== eo || K[27] !== em
              ? ((P = null == eo ? void 0 : { zoom: em }), (K[26] = eo), (K[27] = em), (K[28] = P))
              : (P = K[28]),
            K[29] !== eA || K[30] !== n
              ? ((E = (e) => {
                  "Escape" === e.key && null != n && (e.preventDefault(), eA())
                }),
                (K[29] = eA),
                (K[30] = n),
                (K[31] = E))
              : (E = K[31]))
          let eD = null != eo ? "absolute" : "relative max-w-full",
            ez = null == eo && "panel" === ed && "max-h-[100cqh]"
          K[32] !== eD || K[33] !== ez ? ((A = (0, r.A)(eD, ez)), (K[32] = eD), (K[33] = ez), (K[34] = A)) : (A = K[34])
          let eH = ej ?? void 0
          ;(K[35] !== U || K[36] !== ec || K[37] !== ed || K[38] !== el || K[39] !== ei || K[40] !== er || K[41] !== eo
            ? ((k =
                null == eo
                  ? (0, l.jsx)("img", {
                      ref: (e) => {
                        e?.complete && e.naturalWidth > 0 && el?.(e)
                      },
                      className: (0, r.A)(
                        "block max-w-full object-contain",
                        !ec && "rounded-xl",
                        "panel" === ed ? "!max-h-[100cqh]" : "h-auto !max-h-[292px] w-auto",
                      ),
                      alt: U,
                      referrerPolicy: ei,
                      src: er,
                      onLoad: (e) => el?.(e.currentTarget),
                    })
                  : null),
              (K[35] = U),
              (K[36] = ec),
              (K[37] = ed),
              (K[38] = el),
              (K[39] = ei),
              (K[40] = er),
              (K[41] = eo),
              (K[42] = k))
            : (k = K[42]),
            K[43] !== $ ? ((N = (0, v.P)($, ef)), (K[43] = $), (K[44] = N)) : (N = K[44]))
          let eO = !ec && null == eo && "rounded-xl",
            eF = eI && "cursor-grab",
            eG = !eI && (null != ey ? "cursor-none" : "cursor-interaction")
          K[45] !== eO || K[46] !== eF || K[47] !== eG
            ? ((T = (0, r.A)(
                "absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                eO,
                eF,
                eG,
              )),
              (K[45] = eO),
              (K[46] = eF),
              (K[47] = eG),
              (K[48] = T))
            : (T = K[48])
          let eB = null == eo ? void 0 : ""
          if (
            (K[49] !== U || K[50] !== eu || K[51] !== ed
              ? ((_ =
                  "playground" === ed
                    ? eu.formatMessage(
                        { id: "imagePlayground.commentSurface", defaultMessage: "Comment on {imageName}" },
                        { imageName: U },
                      )
                    : eu.formatMessage({
                        id: "imageSidePanel.commentSurface",
                        defaultMessage: "Image comment surface",
                      })),
                (K[49] = U),
                (K[50] = eu),
                (K[51] = ed),
                (K[52] = _))
              : (_ = K[52]),
            K[53] !== eN || K[54] !== eo
              ? ((R = (e) => {
                  null == eo && 0 !== e.detail && eN(e)
                }),
                (K[53] = eN),
                (K[54] = eo),
                (K[55] = R))
              : (R = K[55]),
            K[56] !== eI || K[57] !== eo
              ? ((L = (e) => {
                  if (null == eo || 0 !== e.button || e.defaultPrevented || eI) {
                    ep.current = null
                    return
                  }
                  ep.current = { pointerId: e.pointerId, clientX: e.clientX, clientY: e.clientY }
                }),
                (K[56] = eI),
                (K[57] = eo),
                (K[58] = L))
              : (L = K[58]),
            K[59] !== eI || K[60] !== eN
              ? ((D = (e) => {
                  let t = ep.current
                  ;((ep.current = null),
                    null == t ||
                      t.pointerId !== e.pointerId ||
                      e.defaultPrevented ||
                      eI ||
                      Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > 8 ||
                      eN(e))
                }),
                (K[59] = eI),
                (K[60] = eN),
                (K[61] = D))
              : (D = K[61]),
            K[62] === Symbol.for("react.memo_cache_sentinel")
              ? ((z = () => {
                  ;((ep.current = null), ew(null))
                }),
                (K[62] = z))
              : (z = K[62]),
            K[63] !== eI || K[64] !== n
              ? ((H = (e) => {
                  let t = ep.current
                  ;(null != t && Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > 8 && (ep.current = null),
                    null != n || eI || ew(b(e)))
                }),
                (K[63] = eI),
                (K[64] = n),
                (K[65] = H))
              : (H = K[65]),
            K[66] === Symbol.for("react.memo_cache_sentinel")
              ? ((O = () => {
                  ;((ep.current = null), ew(null))
                }),
                (K[66] = O))
              : (O = K[66]),
            K[67] !== N ||
            K[68] !== T ||
            K[69] !== eB ||
            K[70] !== _ ||
            K[71] !== R ||
            K[72] !== L ||
            K[73] !== D ||
            K[74] !== H
              ? ((F = (0, l.jsx)("button", {
                  ref: N,
                  type: "button",
                  className: T,
                  "data-sketch-comment": eB,
                  "aria-label": _,
                  onClick: R,
                  onPointerDown: L,
                  onPointerUp: D,
                  onPointerCancel: z,
                  onPointerMove: H,
                  onPointerLeave: O,
                })),
                (K[67] = N),
                (K[68] = T),
                (K[69] = eB),
                (K[70] = _),
                (K[71] = R),
                (K[72] = L),
                (K[73] = D),
                (K[74] = H),
                (K[75] = F))
              : (F = K[75]),
            K[76] !== W || K[77] !== eu || K[78] !== et || K[79] !== ee || K[80] !== n)
          ) {
            let e
            ;(K[82] !== eu || K[83] !== et || K[84] !== ee || K[85] !== n
              ? ((e = (e, t) =>
                  e.id === n?.id
                    ? null
                    : (0, l.jsx)(
                        i.T3,
                        {
                          ariaDescription: e.text,
                          ariaLabel: eu.formatMessage(
                            { id: "imageSidePanel.editComment", defaultMessage: "Edit comment {number}" },
                            { number: t + 1 },
                          ),
                          label: t + 1,
                          pageSize: { height: 1, width: 1 },
                          point: { x: e.x, y: e.y },
                          testId: "image-comment-marker",
                          onClick: (t) => {
                            let n = t.currentTarget.parentElement
                            null == n ||
                              n.clientHeight <= 0 ||
                              n.clientWidth <= 0 ||
                              (et?.("marker"), ee?.(!0), ex({ ...e, ...C(n) }), eM(e.text))
                          },
                        },
                        e.id,
                      )),
                (K[82] = eu),
                (K[83] = et),
                (K[84] = ee),
                (K[85] = n),
                (K[86] = e))
              : (e = K[86]),
              (G = W.map(e)),
              (K[76] = W),
              (K[77] = eu),
              (K[78] = et),
              (K[79] = ee),
              (K[80] = n),
              (K[81] = G))
          } else G = K[81]
          return (
            K[87] !== eE ||
            K[88] !== eP ||
            K[89] !== eA ||
            K[90] !== W.length ||
            K[91] !== eb ||
            K[92] !== eS ||
            K[93] !== eu ||
            K[94] !== en ||
            K[95] !== ek ||
            K[96] !== n
              ? ((B =
                  null != n
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(i.T3, {
                            draft: !0,
                            draftTestId: "image-comment-draft-marker",
                            label: (-1 === eP ? W.length : eP) + 1,
                            pageSize: { height: 1, width: 1 },
                            point: { x: n.x, y: n.y },
                            testId: "image-comment-marker",
                          }),
                          null == eE
                            ? (0, l.jsx)("div", {
                                className: "absolute",
                                "data-annotation-control": "",
                                style: y(n, !1),
                                children: (0, l.jsx)(
                                  g.P,
                                  {
                                    ariaLabel: eu.formatMessage({
                                      id: "imageSidePanel.addComment",
                                      defaultMessage: "Add comment",
                                    }),
                                    multiline: !1,
                                    name: "image-comment-instruction",
                                    placeholder: eu.formatMessage({
                                      id: "imageSidePanel.addCommentPlaceholder",
                                      defaultMessage: "Add a comment\u2026",
                                    }),
                                    submitLabel: eu.formatMessage({
                                      id: "imageSidePanel.addComment",
                                      defaultMessage: "Add comment",
                                    }),
                                    value: eS,
                                    onChange: eM,
                                    onSubmit: ek,
                                  },
                                  eb,
                                ),
                              })
                            : (0, l.jsxs)(m.o, {
                                className: "absolute",
                                "data-annotation-control": "",
                                style: y(n, !0),
                                children: [
                                  (0, l.jsx)("div", {
                                    className: (0, r.A)(u.Fn, "top-2 right-4 bottom-[52px]"),
                                    children: (0, l.jsx)("div", {
                                      className: "h-full min-h-0 translate-y-0.5",
                                      children: (0, l.jsx)("textarea", {
                                        autoFocus: !0,
                                        className: (0, r.A)(
                                          u.Eb,
                                          "h-full resize-none border-0 bg-transparent !outline-none",
                                        ),
                                        name: "image-comment-instruction",
                                        value: eS,
                                        onChange: (e) => {
                                          eM(e.target.value)
                                        },
                                        onKeyDown: (e) => {
                                          "Enter" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(), ek())
                                        },
                                      }),
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: (0, r.A)(u.xB, "justify-between"),
                                    children: [
                                      (0, l.jsx)(h.$, {
                                        "aria-label": eu.formatMessage({
                                          id: "imageSidePanel.deleteComment",
                                          defaultMessage: "Delete comment",
                                        }),
                                        color: "ghostMuted",
                                        size: "composer",
                                        uniform: !0,
                                        onClick: () => {
                                          ;(en(eE.id), eA())
                                        },
                                        children: (0, l.jsx)(f.A, { className: "icon-sm" }),
                                      }),
                                      (0, l.jsxs)("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                          (0, l.jsx)(h.$, {
                                            color: "outline",
                                            size: "composer",
                                            onClick: eA,
                                            children: eu.formatMessage({
                                              id: "imageSidePanel.cancelCommentEdit",
                                              defaultMessage: "Cancel",
                                            }),
                                          }),
                                          (0, l.jsx)(h.$, {
                                            color: "primary",
                                            disabled: 0 === eS.trim().length,
                                            size: "composer",
                                            onClick: ek,
                                            children: eu.formatMessage({
                                              id: "imageSidePanel.saveCommentEdit",
                                              defaultMessage: "Save",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        ],
                      })
                    : null),
                (K[87] = eE),
                (K[88] = eP),
                (K[89] = eA),
                (K[90] = W.length),
                (K[91] = eb),
                (K[92] = eS),
                (K[93] = eu),
                (K[94] = en),
                (K[95] = ek),
                (K[96] = n),
                (K[97] = B))
              : (B = K[97]),
            K[98] !== ey || K[99] !== eI
              ? ((Y =
                  null == ey || eI
                    ? null
                    : (0, l.jsx)(i.T3, {
                        draft: !0,
                        draftTestId: "image-comment-hover-marker",
                        label: "",
                        pageSize: { height: 1, width: 1 },
                        point: { x: ey.x, y: ey.y },
                        testId: "image-comment-marker",
                      })),
                (K[98] = ey),
                (K[99] = eI),
                (K[100] = Y))
              : (Y = K[100]),
            K[101] !== A ||
            K[102] !== eH ||
            K[103] !== k ||
            K[104] !== F ||
            K[105] !== G ||
            K[106] !== B ||
            K[107] !== Y
              ? ((V = (0, l.jsxs)("div", { className: A, style: eH, children: [k, F, G, B, Y] })),
                (K[101] = A),
                (K[102] = eH),
                (K[103] = k),
                (K[104] = F),
                (K[105] = G),
                (K[106] = B),
                (K[107] = Y),
                (K[108] = V))
              : (V = K[108]),
            K[109] !== eT || K[110] !== I || K[111] !== P || K[112] !== E || K[113] !== V
              ? ((Z = (0, l.jsx)("div", { ref: eT, className: I, style: P, onKeyDownCapture: E, children: V })),
                (K[109] = eT),
                (K[110] = I),
                (K[111] = P),
                (K[112] = E),
                (K[113] = V),
                (K[114] = Z))
              : (Z = K[114]),
            Z
          )
        },
      },
    )
  },
  pxT8(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("on57"),
      r = n("Wf1j"),
      o = n("oyxz"),
      s = n("q3HK"),
      c = n("Sm6l"),
      d = n("bVeK"),
      u = n("SziE"),
      m = n("I0AH")
    n.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            n,
            g,
            h,
            f,
            p,
            v,
            x,
            b,
            C,
            y = (0, a.c)(34),
            {
              ariaLabel: w,
              commentCount: S,
              emptyMessage: M,
              isSubmitting: j,
              onCancel: I,
              onSubmit: P,
              variant: E,
            } = e,
            A = void 0 !== j && j,
            k = void 0 === E ? "compact" : E,
            N = (0, r.A)(),
            T = "compact" !== k ? "px-2.5 text-sm" : "px-1.5 text-base",
            _ = 0 === S ? "text-tertiary" : "text-default"
          ;(y[0] !== T || y[1] !== _
            ? ((t = (0, i.A)("min-w-0 truncate leading-[18px]", T, _)), (y[0] = T), (y[1] = _), (y[2] = t))
            : (t = y[2]),
            y[3] !== S || y[4] !== M
              ? ((n =
                  0 === S
                    ? M
                    : (0, l.jsx)(o.A, {
                        id: "imageSidePanel.commentCount",
                        defaultMessage: "{count, plural, one {# comment} other {# comments}}",
                        values: { count: S },
                      })),
                (y[3] = S),
                (y[4] = M),
                (y[5] = n))
              : (n = y[5]),
            y[6] !== t || y[7] !== n
              ? ((g = (0, l.jsx)("span", { className: t, children: n })), (y[6] = t), (y[7] = n), (y[8] = g))
              : (g = y[8]))
          let R = 0 === S || A,
            L = "compact" !== k ? "toolbar" : "composerSm"
          ;(y[9] !== P
            ? ((h = () => {
                null != P ? P() : (0, s.d1)("composer.submit", "image_comment_toolbar")
              }),
              (y[9] = P),
              (y[10] = h))
            : (h = y[10]),
            y[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, l.jsx)(o.A, { id: "imageSidePanel.sendComments", defaultMessage: "Send" })), (y[11] = f))
              : (f = y[11]),
            y[12] !== A || y[13] !== h || y[14] !== R || y[15] !== L
              ? ((p = (0, l.jsx)(c.$, {
                  color: "accent",
                  radius: "large",
                  disabled: R,
                  loading: A,
                  size: L,
                  onClick: h,
                  children: f,
                })),
                (y[12] = A),
                (y[13] = h),
                (y[14] = R),
                (y[15] = L),
                (y[16] = p))
              : (p = y[16]))
          let D = "embedded" === k ? "large" : "default",
            z = "compact" !== k ? "imageToolbar" : "composerSm"
          return (
            y[17] !== N
              ? ((v = N.formatMessage({ id: "imageSidePanel.cancelCommentMode", defaultMessage: "Cancel" })),
                (y[17] = N),
                (y[18] = v))
              : (v = y[18]),
            y[19] !== k
              ? ((x =
                  "compact" !== k
                    ? (0, l.jsx)(d.pgK, {})
                    : (0, l.jsx)(u.A, { "aria-hidden": !0, className: "icon-2xs" })),
                (y[19] = k),
                (y[20] = x))
              : (x = y[20]),
            y[21] !== A || y[22] !== I || y[23] !== D || y[24] !== z || y[25] !== v || y[26] !== x
              ? ((b = (0, l.jsx)(c.$, {
                  color: "ghostActive",
                  radius: D,
                  disabled: A,
                  size: z,
                  uniform: !0,
                  "aria-label": v,
                  onClick: I,
                  children: x,
                })),
                (y[21] = A),
                (y[22] = I),
                (y[23] = D),
                (y[24] = z),
                (y[25] = v),
                (y[26] = x),
                (y[27] = b))
              : (b = y[27]),
            y[28] !== w || y[29] !== p || y[30] !== b || y[31] !== g || y[32] !== k
              ? ((C = (0, l.jsxs)(m.b, { ariaLabel: w, variant: k, children: [g, p, b] })),
                (y[28] = w),
                (y[29] = p),
                (y[30] = b),
                (y[31] = g),
                (y[32] = k),
                (y[33] = C))
              : (C = y[33]),
            C
          )
        },
      },
    )
  },
  Vc4w(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("Qgfj"),
      r = n("oyxz"),
      o = n("Sm6l"),
      s = n("JNtf"),
      c = n("mUDD")
    let d = {
      discardTextEdits: (0, i.YK)({
        title: { id: "imageTextEditing.discardTitle", defaultMessage: "Discard all text edits?" },
        description: {
          id: "imageTextEditing.discardDescription",
          defaultMessage: "This discards the unsaved edits and comments on this image.",
        },
      }),
      discardComments: (0, i.YK)({
        title: { id: "imageSidePanel.discardComments.title", defaultMessage: "Discard comments?" },
        description: {
          id: "imageSidePanel.discardComments.description",
          defaultMessage: "Your unsent comments on this image will be lost.",
        },
      }),
      saveCopy: (0, i.YK)({
        title: { id: "imageTextEditing.saveAnotherTitle", defaultMessage: "Save another copy?" },
        description: {
          id: "imageTextEditing.saveAnotherDescription",
          defaultMessage:
            "An earlier save may already exist in Library. This will save your current text edits as another copy",
        },
      }),
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            i,
            u,
            m,
            g,
            h,
            f,
            p,
            v,
            x,
            b,
            C,
            y = (0, a.c)(34),
            { kind: w, onConfirm: S, onCancel: M, returnFocusTo: j } = e,
            I = "saveCopy" !== w
          ;(y[0] !== j
            ? ((t = {
                onCloseAutoFocus: (e) => {
                  j instanceof HTMLElement && j.isConnected && (e.preventDefault(), j.focus({ preventScroll: !0 }))
                },
              }),
              (y[0] = j),
              (y[1] = t))
            : (t = y[1]),
            y[2] !== M
              ? ((n = (e) => {
                  e || M()
                }),
                (y[2] = M),
                (y[3] = n))
              : (n = y[3]))
          let P = "discardTextEdits" === w || void 0,
            E = "discardComments" === w || void 0
          y[4] !== S
            ? ((i = (e) => {
                ;(e.preventDefault(), S())
              }),
              (y[4] = S),
              (y[5] = i))
            : (i = y[5])
          let A = d[w]
          y[6] !== A.title
            ? ((u = (0, l.jsx)(s.L3, { children: (0, l.jsx)(r.A, { ...A.title }) })), (y[6] = A.title), (y[7] = u))
            : (u = y[7])
          let k = d[w]
          ;(y[8] !== k.description
            ? ((m = (0, l.jsx)(s.rr, { children: (0, l.jsx)(r.A, { ...k.description }) })),
              (y[8] = k.description),
              (y[9] = m))
            : (m = y[9]),
            y[10] !== u || y[11] !== m
              ? ((g = (0, l.jsx)(c.OO, { children: (0, l.jsx)(c.c7, { title: u, subtitle: m }) })),
                (y[10] = u),
                (y[11] = m),
                (y[12] = g))
              : (g = y[12]),
            y[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, l.jsx)(r.A, { id: "imageTextEditing.keepEditing", defaultMessage: "Keep editing" })),
                (y[13] = h))
              : (h = y[13]),
            y[14] !== M
              ? ((f = (0, l.jsx)(o.$, { type: "button", color: "secondary", autoFocus: !0, onClick: M, children: h })),
                (y[14] = M),
                (y[15] = f))
              : (f = y[15]))
          let N = I ? "danger" : "primary"
          return (
            y[16] !== I
              ? ((p = I
                  ? (0, l.jsx)(r.A, { id: "imageTextEditing.discardChanges", defaultMessage: "Discard changes" })
                  : (0, l.jsx)(r.A, { id: "imageTextEditing.saveAnotherCopy", defaultMessage: "Save another copy" })),
                (y[16] = I),
                (y[17] = p))
              : (p = y[17]),
            y[18] !== N || y[19] !== p
              ? ((v = (0, l.jsx)(o.$, { type: "submit", color: N, children: p })),
                (y[18] = N),
                (y[19] = p),
                (y[20] = v))
              : (v = y[20]),
            y[21] !== f || y[22] !== v
              ? ((x = (0, l.jsx)(c.OO, { children: (0, l.jsxs)(c.Es, { children: [f, v] }) })),
                (y[21] = f),
                (y[22] = v),
                (y[23] = x))
              : (x = y[23]),
            y[24] !== g || y[25] !== x || y[26] !== P || y[27] !== E || y[28] !== i
              ? ((b = (0, l.jsxs)(c.R4, {
                  as: "form",
                  "data-image-text-discard": P,
                  "data-image-comment-control": E,
                  onSubmit: i,
                  children: [g, x],
                })),
                (y[24] = g),
                (y[25] = x),
                (y[26] = P),
                (y[27] = E),
                (y[28] = i),
                (y[29] = b))
              : (b = y[29]),
            y[30] !== t || y[31] !== b || y[32] !== n
              ? ((C = (0, l.jsx)(s.lG, { open: !0, size: "compact", contentProps: t, onOpenChange: n, children: b })),
                (y[30] = t),
                (y[31] = b),
                (y[32] = n),
                (y[33] = C))
              : (C = y[33]),
            C
          )
        },
      },
    )
  },
  pDKn(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("on57"),
      r = n("v7qY"),
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
            d,
            u = (0, a.c)(15),
            { children: m, container: g, ref: h, zoom: f } = e,
            p = null == g && "absolute start-button-toolbar-inline top-1/2 z-30 -translate-y-1/2"
          ;(u[0] !== p ? ((t = (0, i.A)("pointer-events-none", p)), (u[0] = p), (u[1] = t)) : (t = u[1]),
            u[2] !== g || u[3] !== f
              ? ((n = null == g ? { zoom: f } : void 0), (u[2] = g), (u[3] = f), (u[4] = n))
              : (n = u[4]),
            u[5] !== m
              ? ((s = (0, l.jsx)(o.b, { className: "pointer-events-auto", children: m })), (u[5] = m), (u[6] = s))
              : (s = u[6]),
            u[7] !== h || u[8] !== t || u[9] !== n || u[10] !== s
              ? ((c = (0, l.jsx)("div", {
                  ref: h,
                  className: t,
                  style: n,
                  "data-annotation-control": "",
                  children: s,
                })),
                (u[7] = h),
                (u[8] = t),
                (u[9] = n),
                (u[10] = s),
                (u[11] = c))
              : (c = u[11]))
          let v = c
          return (
            u[12] !== g || u[13] !== v
              ? ((d = null == g ? v : (0, r.createPortal)(v, g)), (u[12] = g), (u[13] = v), (u[14] = d))
              : (d = u[14]),
            d
          )
        },
      },
    )
  },
  qUfL(e, t, n) {
    n.d(t, { I: () => V })
    var l = n("ABep"),
      a = n("QosV"),
      i = n("eHJT"),
      r = n("zd8w"),
      o = "Stage-Mxf0Ut",
      s = "Image-wmW9sJ",
      c = "ZoomControlButton-wbCK5g",
      d = "CanvasImageButton-Zztyms"
    let u = { x: 0, y: 0 },
      m = { maxOffsetX: 1 / 0, maxOffsetY: 1 / 0 },
      g = { maxOffsetX: 0, maxOffsetY: 0 }
    function h(e, t, n) {
      return Math.min(Math.max(e, t), n)
    }
    function f(e, t) {
      return { x: h(e.x, -t.maxOffsetX, t.maxOffsetX), y: h(e.y, -t.maxOffsetY, t.maxOffsetY) }
    }
    function p(e, t) {
      return e.x === t.x && e.y === t.y
    }
    function v(e, t) {
      let n = e - t
      return n > 0 ? n / 2 + 24 : 0
    }
    function x(e) {
      return Math.round(e)
    }
    function b(e) {
      return e <= 0 ? 1 : Math.min(1, 10 / e)
    }
    function C(e, t) {
      return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY)
    }
    function y(e, t) {
      return { clientX: (e.clientX + t.clientX) / 2, clientY: (e.clientY + t.clientY) / 2 }
    }
    let w = (0, r.createContext)(null)
    function S() {
      let e = (0, r.useContext)(w)
      if (null == e) throw Error("ImageViewer components must be rendered inside ImageViewer")
      return e
    }
    function M({
      image: e,
      imageRef: t,
      zoomedImageLabel: n,
      defaultZoomPercent: a,
      onZoomPercentChange: i,
      unpadded: d = !1,
      minimumFitHeight: w,
      renderOverlay: S,
      panOnDrag: I = !1,
      panBeyondImage: P = !1,
      overflowViewportRef: E,
      onViewportInteractionStart: A,
      shouldPanOnPointerDown: k,
      ...N
    }) {
      let T = null != S,
        _ = (0, r.useRef)(null),
        R = (0, r.useRef)(null),
        L = (0, r.useRef)(1),
        D = (0, r.useRef)(1),
        z = (0, r.useRef)(u),
        H = (0, r.useRef)(u),
        O = (0, r.useRef)(g),
        F = (0, r.useRef)(null),
        G = (0, r.useRef)(null),
        B = (0, r.useRef)(u),
        Y = (0, r.useRef)(u),
        V = (0, r.useRef)(null),
        Z = (0, r.useRef)(null),
        K = (0, r.useRef)(null),
        [X, U] = (0, r.useState)(1),
        [W, $] = (0, r.useState)(u),
        [q, Q] = (0, r.useState)(!1),
        [J, ee] = (0, r.useState)(!1),
        et = (0, r.useRef)(100),
        en = (0, r.useRef)(a),
        el = (0, r.useRef)(i)
      el.current = i
      let [ea, ei] = (0, r.useState)(100),
        [er, eo] = (0, r.useState)(null),
        [es, ec] = (0, r.useState)(null),
        ed = (0, r.useRef)(!1),
        [eu, em] = (0, r.useState)(!1),
        eg = (0, r.useCallback)((e) => {
          ;((ed.current = e), em(e))
        }, []),
        eh = (0, r.useRef)(0),
        ef = (0, r.useRef)(A)
      ef.current = A
      let ep =
          null == er
            ? null
            : {
                fitImageRect: er,
                imageRect: {
                  left: er.left + W.x + (er.width * (1 - X)) / 2,
                  top: er.top + W.y + (er.height * (1 - X)) / 2,
                  width: er.width * X,
                  height: er.height * X,
                },
                isInteracting: q || J,
                isDragging: q,
                isPanReady: eu,
                adjustViewport: (e, t) => {
                  Number.isFinite(e) &&
                    e > 0 &&
                    Number.isFinite(t.x) &&
                    Number.isFinite(t.y) &&
                    eS(L.current * e, void 0, t)
                },
              },
        ev = (0, r.useCallback)(
          (e) => {
            R.current = e
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
              ;((R.current = null), n?.())
            }
          },
          [t],
        ),
        ex = (0, r.useCallback)((e) => {
          ;((H.current = e), $((t) => (p(t, e) ? t : e)))
        }, []),
        eb = (0, r.useCallback)(
          (e) => {
            let t = P
              ? m
              : (function ({ nextScale: e, renderedScale: t, viewportElement: n, imageElement: l }) {
                  if (e <= 1 || null == n || null == l) return g
                  let a = n.clientWidth,
                    i = n.clientHeight,
                    r = l.getBoundingClientRect(),
                    o = t > 0 ? t : 1,
                    s = r.width / o,
                    c = r.height / o
                  return a <= 0 || i <= 0 || s <= 0 || c <= 0 ? g : { maxOffsetX: v(s * e, a), maxOffsetY: v(c * e, i) }
                })({ nextScale: e, renderedScale: D.current, viewportElement: _.current, imageElement: R.current })
            return ((O.current = t), t)
          },
          [P],
        ),
        eC = (0, r.useCallback)(() => {
          var e
          let t = R.current,
            n = _.current
          if (null != t && null != n) {
            let e = n.ownerDocument.defaultView
            if (null != e && null != w && t.naturalWidth > 0 && t.naturalHeight > 0) {
              let l = e.getComputedStyle(n),
                a = e.getComputedStyle(t),
                i = Number.parseFloat(a.borderLeftWidth || "0") + Number.parseFloat(a.borderRightWidth || "0"),
                r = Number.parseFloat(a.borderTopWidth || "0") + Number.parseFloat(a.borderBottomWidth || "0"),
                o =
                  n.clientWidth -
                  Number.parseFloat(l.paddingLeft || "0") -
                  Number.parseFloat(l.paddingRight || "0") -
                  i,
                s =
                  n.clientHeight -
                  Number.parseFloat(l.paddingTop || "0") -
                  Number.parseFloat(l.paddingBottom || "0") -
                  r,
                c = Math.max(0, Math.min(Math.max(1, w / t.naturalHeight), o / t.naturalWidth, s / t.naturalHeight))
              ;((t.style.width = `${t.naturalWidth * c + i}px`), (t.style.height = `${t.naturalHeight * c + r}px`))
            } else (t.style.removeProperty("width"), t.style.removeProperty("height"))
          }
          if (T && null != t && null != n) {
            let e = t.getBoundingClientRect(),
              l = n.getBoundingClientRect(),
              a = E?.current?.getBoundingClientRect(),
              i = null == a ? null : { left: a.left - l.left, top: a.top - l.top, width: a.width, height: a.height }
            ec((e) =>
              e?.left === i?.left && e?.top === i?.top && e?.width === i?.width && e?.height === i?.height ? e : i,
            )
            let r = t.ownerDocument.defaultView?.getComputedStyle(t),
              o = Number.parseFloat(r?.borderLeftWidth || "0"),
              s = Number.parseFloat(r?.borderTopWidth || "0"),
              c = e.width / D.current,
              d = e.height / D.current,
              u = {
                left: e.left - l.left - z.current.x + (e.width - c) / 2 + o,
                top: e.top - l.top - z.current.y + (e.height - d) / 2 + s,
                width: c - 2 * o,
                height: d - 2 * s,
              }
            eo((e) => (e?.left === u.left && e.top === u.top && e.width === u.width && e.height === u.height ? e : u))
          }
          let l =
            null == (e = R.current) ||
            e.naturalWidth <= 0 ||
            e.naturalHeight <= 0 ||
            e.clientWidth <= 0 ||
            e.clientHeight <= 0
              ? null
              : 100 * Math.min(e.clientWidth / e.naturalWidth, e.clientHeight / e.naturalHeight)
          if (null == l) return
          let a = et.current,
            i = L.current,
            r = en.current
          if (((et.current = l), (en.current = null), null != r || (1 !== i && a > 0 && Math.abs(a - l) >= 0.01))) {
            let e = h((r ?? a * i) / l, b(l), 5)
            e !== i && ((L.current = e), U(e))
          }
          ei((e) => (0.01 > Math.abs(e - l) ? e : l))
        }, [T, w, E]),
        ey = (0, r.useCallback)(() => {
          let e = F.current,
            t = _.current
          ;((F.current = null),
            (G.current = null),
            null != e && t?.hasPointerCapture(e) === !0 && t.releasePointerCapture(e),
            Q(!1))
        }, []),
        ew = (0, r.useCallback)(() => {
          if ((eC(), !P && L.current <= 1)) {
            ;((O.current = g), ex(u), ey())
            return
          }
          let e = eb(L.current)
          ex(f(H.current, e))
        }, [eb, P, ey, eC, ex]),
        eS = (0, r.useCallback)(
          (e, t, n = u) => {
            let l = L.current,
              a = h(e, b(et.current), 5),
              i = n.x !== u.x || n.y !== u.y
            if (a !== l || i) {
              if (((L.current = a), !P && a <= 1)) ((O.current = g), ex(u), ey())
              else {
                let e = eb(a),
                  i = R.current,
                  r = { x: H.current.x + n.x, y: H.current.y + n.y }
                if (null != t && null != i) {
                  let e = i.getBoundingClientRect(),
                    n = e.left + e.width / 2,
                    o = e.top + e.height / 2,
                    s = a / l
                  r = { x: r.x + (1 - s) * (t.clientX - n), y: r.y + (1 - s) * (t.clientY - o) }
                }
                ex(f(r, e))
              }
              ;(U(a), a !== l && el.current?.(a * et.current))
            }
          },
          [eb, P, ey, ex],
        ),
        eM = (0, r.useCallback)(
          (e) => {
            ;(ef.current?.(), eS(L.current + ("in" === e ? 0.25 : -0.25)))
          },
          [eS],
        ),
        ej = (0, r.useCallback)(() => {
          ;(ef.current?.(),
            (L.current = 1),
            (O.current = g),
            ex(u),
            ey(),
            U((e) => (1 === e ? e : 1)),
            el.current?.(null))
        }, [ey, ex]),
        eI = (0, r.useCallback)(
          (e) => {
            if (!Number.isFinite(e)) return
            let t = et.current
            t <= 0 || (ef.current?.(), eS(e / t))
          },
          [eS],
        ),
        eP = (0, r.useCallback)(
          (e) => {
            if (
              (e.target instanceof Node && !e.currentTarget.contains(e.target)) ||
              ((Z.current = { clientX: e.clientX, clientY: e.clientY }), j(e.target) || "touch" === e.pointerType)
            )
              return
            let t = 1 === e.button || ed.current,
              n = 0 === e.button && null != ep && k?.(e, ep) === !0
            if (((I && !n) || (P && n)) && null != S && "mouse" === e.pointerType && 0 === e.button && !t) {
              ;(P && n && e.preventDefault(),
                (G.current = e.pointerId),
                (B.current = { x: e.clientX, y: e.clientY }),
                (Y.current = H.current))
              return
            }
            ;(null != S && t && (e.preventDefault(), e.stopPropagation()),
              (P || !(L.current <= 1)) &&
                (null == S || t || n) &&
                (0 === e.button || 1 === e.button) &&
                (e.preventDefault(),
                null != S && e.stopPropagation(),
                ef.current?.(),
                (F.current = e.pointerId),
                (B.current = { x: e.clientX, y: e.clientY }),
                (Y.current = H.current),
                eb(L.current),
                e.currentTarget.setPointerCapture(e.pointerId),
                Q(!0)))
          },
          [eb, ep, P, I, S, k],
        ),
        eE = (0, r.useCallback)(
          (e) => {
            if (((Z.current = { clientX: e.clientX, clientY: e.clientY }), e.pointerId === G.current)) {
              if (e.buttons % 2 == 0) {
                G.current = null
                return
              }
              if (4 > Math.hypot(e.clientX - B.current.x, e.clientY - B.current.y)) return
              ;((G.current = null),
                ef.current?.(),
                (F.current = e.pointerId),
                eb(L.current),
                e.currentTarget.setPointerCapture(e.pointerId),
                Q(!0))
            }
            if (e.pointerId !== F.current) {
              "touch" === e.pointerType && null != V.current && e.stopPropagation()
              return
            }
            ;(e.preventDefault(), null != S && e.stopPropagation())
            let t = e.clientX - B.current.x,
              n = e.clientY - B.current.y
            ex(f({ x: Y.current.x + t, y: Y.current.y + n }, O.current))
          },
          [eb, S, ex],
        ),
        eA = (0, r.useCallback)(
          (e) => {
            if (e.pointerId === G.current) {
              ;((G.current = null),
                "pointerup" === e.type &&
                  Math.hypot(e.clientX - B.current.x, e.clientY - B.current.y) >= 4 &&
                  (ef.current?.(), e.preventDefault(), e.stopPropagation()))
              return
            }
            e.pointerId === F.current && (e.preventDefault(), null != S && e.stopPropagation(), ey())
          },
          [S, ey],
        ),
        ek = (0, r.useCallback)(
          (e) => {
            if (!P && L.current <= 1) return
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
            ;(e.preventDefault(), e.stopPropagation(), ef.current?.())
            let l = eb(L.current)
            ex(f({ x: H.current.x + t, y: H.current.y + n }, l))
          },
          [eb, P, ex],
        ),
        eN = (0, r.useCallback)(() => {
          let e = R.current
          if (null == e) return null
          let t = e.getBoundingClientRect()
          return { clientX: t.left + t.width / 2, clientY: t.top + t.height / 2 }
        }, []),
        eT = (0, r.useCallback)(() => {
          ;(null != K.current && (clearTimeout(K.current), (K.current = null)), ee(!1))
        }, []),
        e_ = (0, r.useCallback)(() => {
          ;(null == K.current && ef.current?.(),
            null != K.current && clearTimeout(K.current),
            ee(!0),
            (K.current = setTimeout(() => {
              ;((K.current = null), ee(!1))
            }, 150)))
        }, []),
        eR = (0, r.useCallback)(
          (e) => {
            if (!j(e.target, { allowTextInput: e.ctrlKey })) {
              if (!e.ctrlKey) {
                if (!P && L.current <= 1) return
                ;(e.preventDefault(), e.stopPropagation(), e_())
                let t = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : 1,
                  n = e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? _.current : null
                eS(L.current, void 0, { x: -e.deltaX * (n?.clientWidth ?? t), y: -e.deltaY * (n?.clientHeight ?? t) })
                return
              }
              ;(e.preventDefault(),
                e.stopPropagation(),
                e_(),
                eS(
                  L.current * Math.exp(-(0.01 * e.deltaY)),
                  (0 === e.clientX && 0 === e.clientY
                    ? (Z.current ?? eN())
                    : { clientX: e.clientX, clientY: e.clientY }) ?? void 0,
                ))
            }
          },
          [e_, eN, P, eS],
        ),
        eL = (0, r.useCallback)((e) => {
          ;(null != V.current && null != e && (eh.current = e.timeStamp), (V.current = null), ee(!1))
        }, []),
        eD = (0, r.useCallback)(
          (e, t) => {
            ;(ef.current?.(),
              eT(),
              ee(!0),
              ey(),
              (V.current = { distance: C(e, t), midpoint: y(e, t), scale: L.current }))
          },
          [ey, eT],
        ),
        ez = (0, r.useCallback)(
          (e, t) => {
            let n = V.current
            if (null == n) return
            let l = C(e, t)
            if (l <= 0 || n.distance <= 0) return
            let a = y(e, t)
            ;(eS(n.scale * (l / n.distance), n.midpoint, {
              x: a.clientX - n.midpoint.clientX,
              y: a.clientY - n.midpoint.clientY,
            }),
              (V.current = { distance: l, midpoint: a, scale: L.current }))
          },
          [eS],
        )
      ;((0, r.useLayoutEffect)(() => {
        z.current = W
      }, [W]),
        (0, r.useLayoutEffect)(() => {
          ;((D.current = X), eC())
        }, [X, eC]),
        (0, r.useEffect)(() => {
          let e = _.current
          if (null == e) return
          let t = (function (e, { canStart: t, onStart: n, onMove: l, onEnd: a }) {
            let i = "pending",
              r = new Set(),
              o = new WeakSet(),
              s = ["touchstart", "touchmove", "touchend", "touchcancel"],
              c = (e) => {
                let t = "image" === i
                ;((i = "browser"), t && a(e))
              },
              d = () => {
                for (let t of s)
                  for (let n of (e.ownerDocument.removeEventListener(t, u, !0), r)) n.removeEventListener(t, u)
                ;(r.clear(), (i = "pending"))
              },
              u = {
                handleEvent(a) {
                  if (o.has(a)) return
                  if ((o.add(a), "touchend" === a.type || "touchcancel" === a.type)) {
                    ;(c(a), 0 === a.touches.length && d())
                    return
                  }
                  if ("touchstart" === a.type) {
                    for (let t of s)
                      "touchmove" !== t &&
                        e.ownerDocument.addEventListener(t, u, { capture: !0, passive: "touchstart" !== t })
                    for (let e of Array.from(a.touches)) {
                      let n = e.target
                      if (null == n) {
                        c(a)
                        continue
                      }
                      if (!r.has(n))
                        for (let l of (t(e) || c(a), r.add(n), s)) n.addEventListener(l, u, { passive: !1 })
                    }
                  }
                  if ("browser" === i) return
                  if (!a.cancelable) return void c(a)
                  let m = a.touches.item(0),
                    g = a.touches.item(1)
                  if (2 !== a.touches.length || null == m || null == g) {
                    ;("touchmove" === a.type || "image" === i || a.touches.length > 2) && c(a)
                    return
                  }
                  "pending" === i && "touchstart" !== a.type
                    ? c(a)
                    : (a.preventDefault(), a.defaultPrevented)
                      ? (a.stopPropagation(),
                        "pending" === i ? ((i = "image"), n(m, g)) : "touchmove" === a.type && l(m, g))
                      : c(a)
                },
              },
              m = {
                handleEvent(e) {
                  u.handleEvent(e)
                },
              }
            return (
              e.addEventListener("touchstart", m, { passive: !1 }),
              () => {
                ;(c(), d(), e.removeEventListener("touchstart", m))
              }
            )
          })(e, {
            canStart: (t) => t.target instanceof Node && e.contains(t.target) && !j(t.target, { allowTextInput: !0 }),
            onStart: eD,
            onMove: ez,
            onEnd: eL,
          })
          return (
            e.addEventListener("wheel", eR, { passive: !1 }),
            () => {
              ;(t(), e.removeEventListener("wheel", eR))
            }
          )
        }, [eL, ez, eD, eR]),
        (0, r.useEffect)(() => {
          let e = _.current,
            t = e?.ownerDocument.defaultView
          if (!T || null == e || null == t) return
          let n = (e) => {
              "Space" === e.code && eg(!0)
            },
            l = (e) => {
              "Space" === e.code && eg(!1)
            },
            a = () => {
              ;(eg(!1), ey())
            }
          return (
            t.addEventListener("keydown", n, !0),
            t.addEventListener("keyup", l, !0),
            t.addEventListener("blur", a),
            () => {
              ;(eg(!1),
                t.removeEventListener("keydown", n, !0),
                t.removeEventListener("keyup", l, !0),
                t.removeEventListener("blur", a))
            }
          )
        }, [T, ey, eg]),
        (0, r.useEffect)(() => {
          let e = _.current,
            t = R.current
          if (null == e || null == t || "u" < typeof ResizeObserver) return
          let n = new ResizeObserver(ew)
          return (
            n.observe(e),
            n.observe(t),
            E?.current != null && n.observe(E.current),
            () => {
              n.disconnect()
            }
          )
        }, [ew, E]),
        (0, r.useEffect)(
          () => () => {
            let e = F.current,
              t = _.current
            ;((F.current = null),
              null != e && t?.hasPointerCapture(e) === !0 && t.releasePointerCapture(e),
              null != K.current && clearTimeout(K.current))
          },
          [],
        ))
      let eH =
          1 === X && p(W, u)
            ? void 0
            : {
                transform: `translate(${W.x}px, ${W.y}px) scale(${X})`,
                transformOrigin: "center center",
                transition: null != S || q || J ? void 0 : "transform 150ms ease-out",
                willChange: q || J ? "transform" : void 0,
              },
        eO = {
          zoomPercent: x(ea * X),
          fitZoomPercent: x(ea),
          minZoomPercent: x(ea * b(ea)),
          maxZoomPercent: x(5 * ea),
          onZoomPercentChange: eI,
          onResetZoom: ej,
        }
      return (0, l.jsxs)("div", {
        ref: _,
        className: `${o} ZoomableStage-xHb8YU${d ? " UnpaddedStage-qNP17o" : ""}`,
        "data-zoomed": X > 1 || void 0,
        "data-overflow-viewport": null != E || void 0,
        "data-pan-ready": (T && eu) || void 0,
        "data-dragging": q || void 0,
        onPointerDown: T ? void 0 : eP,
        onPointerMove: T ? void 0 : eE,
        onPointerUp: T ? void 0 : eA,
        onPointerCancel: T ? void 0 : eA,
        onPointerDownCapture: T ? eP : void 0,
        onPointerMoveCapture: T ? eE : void 0,
        onPointerUpCapture: T ? eA : void 0,
        onPointerCancelCapture: T ? eA : void 0,
        onPointerLeave: (e) => {
          e.pointerId === G.current && (G.current = null)
        },
        onLostPointerCapture: ey,
        onClickCapture: (e) => {
          e.target instanceof Node &&
            e.currentTarget.contains(e.target) &&
            eh.current > 0 &&
            e.timeStamp - eh.current < 500 &&
            (e.preventDefault(), e.stopPropagation())
        },
        onKeyDownCapture: (e) => {
          null != S &&
            "Space" === e.code &&
            e.target instanceof Node &&
            e.currentTarget.contains(e.target) &&
            !j(e.target) &&
            !(e.target instanceof Element && e.target.closest("button")) &&
            (eg(!0), e.preventDefault(), e.stopPropagation())
        },
        onKeyUpCapture: (e) => {
          "Space" === e.code && eg(!1)
        },
        onBlur: (e) => {
          e.currentTarget.contains(e.relatedTarget) || eg(!1)
        },
        children: [
          (0, l.jsx)("img", {
            ref: ev,
            className: `${s} ZoomableImage-Qr3a6q`,
            src: e.src,
            referrerPolicy: e.referrerPolicy,
            alt: e.alt,
            fetchPriority: "high",
            loading: "eager",
            decoding: "async",
            "data-transparent": e.transparentBackground,
            draggable: !1,
            onLoad: ew,
            onKeyDown: ek,
            tabIndex: P || X > 1 ? 0 : void 0,
            "aria-label": P || X > 1 ? n : void 0,
            "aria-keyshortcuts": P || X > 1 ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : void 0,
            style: eH,
          }),
          null != S &&
            null != ep &&
            (0, l.jsx)("div", {
              className: "StageOverlay-qVT1kM",
              style: es ?? void 0,
              children: S(
                null == es
                  ? ep
                  : {
                      ...ep,
                      imageRect: { ...ep.imageRect, left: ep.imageRect.left - es.left, top: ep.imageRect.top - es.top },
                      fitImageRect: {
                        ...ep.fitImageRect,
                        left: ep.fitImageRect.left - es.left,
                        top: ep.fitImageRect.top - es.top,
                      },
                    },
              ),
            }),
          null != N.renderZoomControls
            ? (0, l.jsx)("div", {
                className: "ZoomControlsRenderer-VuPQyE",
                onPointerDown: (e) => {
                  e.stopPropagation()
                },
                children: N.renderZoomControls(eO),
              })
            : (0, l.jsxs)("div", {
                className: "ZoomControls-WpuX7R",
                role: "group",
                "aria-label": N.zoomControlsLabel,
                onPointerDown: (e) => {
                  e.stopPropagation()
                },
                children: [
                  (0, l.jsx)("button", {
                    type: "button",
                    className: c,
                    "aria-label": N.zoomOutLabel,
                    disabled: X <= b(et.current),
                    onClick: () => {
                      eM("out")
                    },
                    children: "\u2212",
                  }),
                  (0, l.jsx)("div", { className: "ZoomControlDivider-S_5iMe" }),
                  (0, l.jsx)("button", {
                    type: "button",
                    className: c,
                    "aria-label": N.zoomInLabel,
                    disabled: X >= 5,
                    onClick: () => {
                      eM("in")
                    },
                    children: "+",
                  }),
                ],
              }),
        ],
      })
    }
    function j(e, { allowTextInput: t = !1 } = {}) {
      return (
        e instanceof Element &&
        (null != e.closest('[data-annotation-control], button:not([data-sketch-comment]), select, [role="slider"]') ||
          (!t && null != e.closest('input, textarea, [contenteditable="true"]')))
      )
    }
    let I = Object.assign(
      function ({ image: e, children: t }) {
        return (0, l.jsx)(w.Provider, {
          value: e,
          children: (0, l.jsx)("div", { className: "ImageViewer-gqgEJR", children: t }),
        })
      },
      {
        Canvas: function ({
          groups: e,
          activeImageId: t,
          activeImageRef: n,
          onSelectImage: a,
          selectedImageIds: i,
          renderImage: r,
        }) {
          return (0, l.jsx)("div", {
            className: "Canvas-Vg0IMr",
            "data-image-viewer-canvas": !0,
            children: e.map((e) =>
              (0, l.jsxs)(
                "div",
                {
                  className: "CanvasGroup-TisUCI",
                  children: [
                    null != e.label
                      ? (0, l.jsx)("div", { className: "CanvasGroupLabel-_cpkrn", children: e.label })
                      : null,
                    (0, l.jsx)("div", {
                      className: "CanvasGroupImages-KBEgwd",
                      children: e.images.map((e) => {
                        let o = (0, l.jsx)("img", {
                            className: "CanvasImage-ftQyku",
                            src: e.src,
                            referrerPolicy: e.referrerPolicy,
                            alt: "",
                            width: e.width,
                            height: e.height,
                            loading: "lazy",
                            decoding: "async",
                          }),
                          s = i?.includes(e.id)
                        return null != r
                          ? (0, l.jsxs)(
                              "div",
                              {
                                className: `${d} CanvasCustomImage-vajD2v`,
                                "data-selected": s || void 0,
                                children: [
                                  o,
                                  (0, l.jsx)("div", { className: "CanvasCustomImageOverlay-Af3EOT", children: r(e) }),
                                ],
                              },
                              e.id,
                            )
                          : (0, l.jsx)(
                              "button",
                              {
                                ref: e.id === t ? n : void 0,
                                type: "button",
                                className: d,
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
          return (0, l.jsx)("div", { className: "Toolbar-gdMFZC", role: "group", "aria-label": t, children: e })
        },
        Stage: function ({ imageRef: e }) {
          let t = S()
          return (0, l.jsx)("div", {
            className: o,
            children: (0, l.jsx)("img", {
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
          let t = S()
          return (0, l.jsx)(M, { image: t, ...e }, t.id)
        },
      },
    )
    var P = n("on57"),
      E = n("v7qY"),
      A = n("oyxz"),
      k = n("wD9O"),
      N = n("Sm6l"),
      T = n("Bbed"),
      _ = n("RNul"),
      R = n("DBCl"),
      L = n("hEYZ")
    function D(e) {
      let t,
        n,
        l,
        i = (0, a.c)(8),
        { zoomPercent: o, fitZoomPercent: s, onZoomPercentChange: c, onResetZoom: d } = e
      i[0] !== s || i[1] !== d || i[2] !== c || i[3] !== o
        ? ((t = (e) => {
            if ("reset-zoom" === e.type) return void d()
            let t = [...R.cfs, s].sort(z),
              n = e.delta > 0 ? t.find((e) => e > o) : t.findLast((e) => e < o)
            null != n && c(n)
          }),
          (i[0] = s),
          (i[1] = d),
          (i[2] = c),
          (i[3] = o),
          (i[4] = t))
        : (t = i[4])
      let u = (0, r.useEffectEvent)(t)
      return (
        i[5] !== u ? ((n = () => (0, L.ou)(u)), (i[5] = u), (i[6] = n)) : (n = i[6]),
        i[7] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (i[7] = l)) : (l = i[7]),
        (0, r.useEffect)(n, l),
        null
      )
    }
    function z(e, t) {
      return e - t
    }
    n("dN0a")
    var H = n("HgLj"),
      O = n("j9wQ"),
      F = n("O4Le"),
      G = n("I0AH"),
      B = n("oD0s")
    let Y = (0, T._)(i.HO, {
      fallback: (0, l.jsx)(_.y, {}),
      errorFallback: ({ onCancel: e }) =>
        (0, l.jsxs)("div", {
          className: "flex h-full flex-col items-center justify-center gap-4 p-4",
          children: [
            (0, l.jsx)(A.A, {
              id: "imageMarkup.loadError",
              defaultMessage: "Could not load markup. Reload to try again",
            }),
            (0, l.jsx)(N.$, {
              color: "secondary",
              onClick: e,
              children: (0, l.jsx)(A.A, { id: "imageMarkup.back", defaultMessage: "Back to image" }),
            }),
          ],
        }),
    })
    function V(e) {
      let t,
        n,
        i,
        o,
        s,
        c,
        d,
        u,
        m,
        g,
        h,
        f,
        p,
        v,
        x,
        b,
        C,
        y,
        w,
        S,
        M,
        j,
        N,
        T,
        _,
        R,
        L,
        z,
        V,
        K = (0, a.c)(145),
        {
          loadingPreview: X,
          pendingImageContent: U,
          mode: W,
          minimumImageHeight: $,
          alt: q,
          clipboardScope: Q,
          src: J,
          hasImageRail: ee,
          hasNavigationGutters: et,
          overlayToolbarHeight: en,
          footerActions: el,
          imageId: ea,
          viewportId: ei,
          viewerId: er,
          imageRef: eo,
          stageRef: es,
          onImageError: ec,
          onImageLoad: ed,
          onImageEditSubmitted: eu,
          previewOverlay: em,
          reserveInlineComposer: eg,
          markupEditorRef: eh,
          standaloneMarkupComposer: ef,
          markupSourceConversationId: ep,
          isSubmitting: ev,
          referrerPolicy: ex,
          renderHeader: eb,
          viewerHeaderHeight: eC,
          renderToolbar: ey,
          keepToolbarMounted: ew,
          renderOverlay: eS,
          showCommentTool: eM,
          sizeControlContainer: ej,
          sourceImage: eI,
          imageEditAttribution: eP,
          chatGptConversationId: eE,
          prepareNativeMarkup: eA,
          onSaveMarkup: ek,
          onMarkupSaved: eN,
          tabId: eT,
          toolbarControls: e_,
          trailingControls: eR,
          toolbarVariant: eL,
          zoom: eD,
          zoomControlContainer: ez,
          viewerZoomControlContainer: eH,
          onCancel: eO,
          onViewportInteractionStart: eF,
        } = e,
        eG = void 0 !== ee && ee,
        eB = void 0 !== et && et,
        eY = void 0 !== em && em,
        eV = void 0 !== ew && ew,
        eZ = void 0 === eL ? "compact" : eL,
        eK = (0, k.dz)(),
        eX = null != eb || void 0 !== eH,
        eU = eX || void 0 !== ez,
        [eW, e$] = (0, r.useState)(null),
        [eq, eQ] = (0, r.useState)(null),
        [eJ, e1] = (0, r.useState)(null),
        [e0, e2] = (0, r.useState)(null),
        e3 = (0, r.useRef)(null),
        e5 = (0, r.useRef)(null),
        e4 =
          eY && (null != ei || null != e_ || "text" === W)
            ? `calc(${null == ei ? (void 0 === en ? 0 : en) : 46}px + var(--spacing) * 8)`
            : "0px",
        e6 = "var(--right-panel-composer-overlay-fit-reserve, 0px)"
      eY
        ? (e6 = "0 0 min(var(--image-preview-fit-footer-height, 118px), 30%)")
        : void 0 !== eg && eg && (e6 = "0 0 min(118px, 30%)")
      let [e7, e8] = (0, r.useState)(null)
      K[0] !== eo ? ((t = (0, H.P)(eo, e8)), (K[0] = eo), (K[1] = t)) : (t = K[1])
      let e9 = t,
        [te, tt] = (0, r.useState)(null),
        [tn, tl] = (0, r.useState)(null),
        ta = tn === J
      K[2] !== ec || K[3] !== J
        ? ((n = () => {
            ;(tl(J), ec?.())
          }),
          (K[2] = ec),
          (K[3] = J),
          (K[4] = n))
        : (n = K[4])
      let ti = (0, r.useEffectEvent)(n)
      ;(K[5] !== e7 || K[6] !== ti
        ? ((i = () => {
            if (null == e7) return
            let e = () => {
                e7.naturalWidth > 0 &&
                  e7.naturalHeight > 0 &&
                  (tl(null),
                  tt((e) =>
                    e?.width === e7.naturalWidth && e.height === e7.naturalHeight
                      ? e
                      : { width: e7.naturalWidth, height: e7.naturalHeight },
                  ))
              },
              t = () => ti()
            return (
              e7.addEventListener("load", e),
              e7.addEventListener("error", t),
              e(),
              e7.complete && 0 === e7.naturalWidth && t(),
              () => {
                ;(e7.removeEventListener("load", e), e7.removeEventListener("error", t))
              }
            )
          }),
          (K[5] = e7),
          (K[6] = ti),
          (K[7] = i))
        : (i = K[7]),
        K[8] !== e7 ? ((o = [e7]), (K[8] = e7), (K[9] = o)) : (o = K[9]),
        (0, r.useLayoutEffect)(i, o))
      let tr = eV ? eJ : eq
      K[10] !== eV || K[11] !== ey || K[12] !== tr
        ? ((s = (e) =>
            null == tr || null == ey
              ? null
              : (0, E.createPortal)(
                  (0, l.jsx)("div", {
                    className: "contents",
                    "data-annotation-control": !0,
                    onPointerDown: Z,
                    children: eV ? e : ey(e),
                  }),
                  tr,
                )),
          (K[10] = eV),
          (K[11] = ey),
          (K[12] = tr),
          (K[13] = s))
        : (s = K[13])
      let to = s,
        ts = null
      if (eV && ("markup" !== W || eU)) {
        let e
        ;(K[14] !== W || K[15] !== ey || K[16] !== e_
          ? ((e =
              null != ey && (null != e_ || "remove" === W || "markup" === W)
                ? ey(
                    (0, l.jsxs)("div", {
                      className: (0, P.A)("contents", "toolbarContents-ul3XSD"),
                      children: [
                        (0, l.jsx)("div", { ref: e1, className: (0, P.A)("contents", "editorControls-cuAYZf") }),
                        (0, l.jsx)("div", {
                          className: "fallbackControls-K6uM1Z",
                          inert: "markup" === W || "remove" === W,
                          children: e_,
                        }),
                      ],
                    }),
                  )
                : e_),
            (K[14] = W),
            (K[15] = ey),
            (K[16] = e_),
            (K[17] = e))
          : (e = K[17]),
          (ts = e))
      } else if (!eV && ("view" === W || "comment" === W || "text" === W) && null != e_) {
        let e
        ;(K[18] !== ey || K[19] !== e_
          ? ((e = null == ey ? e_ : ey(e_)), (K[18] = ey), (K[19] = e_), (K[20] = e))
          : (e = K[20]),
          (ts = e))
      }
      ;(K[21] !== e7 || K[22] !== ed
        ? ((c = (e) => {
            null != e7 && e.target === e7 && ed?.(e7)
          }),
          (K[21] = e7),
          (K[22] = ed),
          (K[23] = c))
        : (c = K[23]),
        K[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (e) => {
              if (
                e.defaultPrevented ||
                e.nativeEvent.isComposing ||
                null == e3.current ||
                e3.current.isReadOnly ||
                (e.target instanceof Element && e.target.closest('input, textarea, [contenteditable="true"]'))
              )
                return
              let t = e.key.toLowerCase(),
                n = (e.metaKey || e.ctrlKey) && "z" === t,
                l = (n && e.shiftKey) || (e.ctrlKey && "y" === t)
              ;(n || l) &&
                (e3.current.commitComment(),
                e3.current.editor.commitPendingTextEdit(),
                (l ? e3.current.editor.redo() : e3.current.editor.undo()) && (e.preventDefault(), e.stopPropagation()))
            }),
            (K[24] = d))
          : (d = K[24]),
        K[25] !== eb
          ? ((u =
              null == eb
                ? null
                : (0, l.jsx)("div", {
                    className: "absolute inset-x-0 top-0 z-30",
                    children: eb(
                      (0, l.jsx)("span", { ref: e$, "data-viewer-zoom-control": !0, className: "contents" }),
                    ),
                  })),
            (K[25] = eb),
            (K[26] = u))
          : (u = K[26]))
      let tc = ts,
        td = null == ei ? "top-0" : "top-[calc(-1*var(--right-panel-composer-overlay-top-reserve,0px))]",
        tu = eG || eB ? "-inset-x-18" : "inset-x-0"
      ;(K[27] !== td || K[28] !== tu
        ? ((m = (0, P.A)(
            "absolute bottom-[calc(-1*(var(--right-panel-composer-overlay-reserve,0px)+var(--image-preview-footer-height,0px)))] overflow-hidden",
            td,
            tu,
          )),
          (K[27] = td),
          (K[28] = tu),
          (K[29] = m))
        : (m = K[29]),
        K[30] !== eX || K[31] !== ez
          ? ((g = !eX && void 0 === ez && (0, l.jsx)("span", { ref: e$, className: "contents" })),
            (K[30] = eX),
            (K[31] = ez),
            (K[32] = g))
          : (g = K[32]))
      let tm = !eG && !eB && "inset-x-0",
        tg = (eG || eB) && (null == ei ? "inset-x-18" : "mx-18")
      K[33] !== tm || K[34] !== tg
        ? ((h = (0, P.A)(
            "absolute top-0 bottom-[calc(var(--right-panel-composer-overlay-reserve,0px)+var(--image-preview-footer-height,0px))]",
            tm,
            tg,
          )),
          (K[33] = tm),
          (K[34] = tg),
          (K[35] = h))
        : (h = K[35])
      let th = null == ei ? void 0 : e6,
        tf = eX && eD?.manualZoomPercent == null ? (void 0 === eC ? 0 : eC) : void 0,
        tp = eX && eD?.manualZoomPercent == null ? e4 : void 0
      K[36] !== th || K[37] !== tf || K[38] !== tp
        ? ((f = { inset: th, marginTop: tf, marginBottom: tp }), (K[36] = th), (K[37] = tf), (K[38] = tp), (K[39] = f))
        : (f = K[39])
      let tv = null != X && !ta && "[&_[data-overflow-viewport]>img]:opacity-0"
      K[40] !== tv
        ? ((p = (0, P.A)("absolute top-0 left-0 h-full w-full", tv)), (K[40] = tv), (K[41] = p))
        : (p = K[41])
      let tx = 1 / eK
      K[42] !== tx ? ((v = { zoom: tx }), (K[42] = tx), (K[43] = v)) : (v = K[43])
      let tb = null == te && !ta && (U ?? X),
        tC = ei ?? ea,
        ty = eI?.transparentBackground
      K[44] !== q || K[45] !== ex || K[46] !== J || K[47] !== tC || K[48] !== ty
        ? ((x = { id: tC, src: J, alt: q, referrerPolicy: ex, transparentBackground: ty }),
          (K[44] = q),
          (K[45] = ex),
          (K[46] = J),
          (K[47] = tC),
          (K[48] = ty),
          (K[49] = x))
        : (x = K[49])
      let tw = null == $ ? void 0 : $ * eK,
        tS = eD?.manualZoomPercent
      K[50] !== eD
        ? ((b = (e) => {
            null == e ? eD?.onZoomToFit() : eD?.onZoomPercentChange(e)
          }),
          (K[50] = eD),
          (K[51] = b))
        : (b = K[51])
      let tM = "comment" === W,
        tj = "text" === W
      return (
        K[52] !== eF
          ? ((C = () => {
              eF?.()
              let e = e3.current
              null == e ||
                e.isReadOnly ||
                (e.commitComment(),
                e.editor.getSnapshot().preview?.replaceObjectId != null
                  ? e.editor.pointerCommit()
                  : e.editor.pointerCancel(void 0, { preserveReleasedErasure: !0 }),
                e.editor.commitPendingTextEdit())
            }),
            (K[52] = eF),
            (K[53] = C))
          : (C = K[53]),
        K[54] !== W || K[55] !== te
          ? ((y = (e, t) => {
              let { imageRect: n } = t
              if ("text" === W) return (0, B.R)(e)
              if ("markup" !== W) return "view" === W
              let l = e3.current
              if (null == l || null == te || l.isReadOnly) return !1
              let a = l.editor,
                i = a.getSnapshot()
              if ("select" !== i.activeTool || null != i.selectionId || i.hasActiveGesture || i.hasPendingTextEdit)
                return !1
              let r = n.width / ((1024 * te.width) / Math.max(te.width, te.height)),
                o = e.currentTarget.getBoundingClientRect()
              return (
                null ==
                a.getObjectAtPoint(
                  { x: (e.clientX - o.left - n.left) / r, y: (e.clientY - o.top - n.top) / r },
                  10 / r,
                  { viewportScale: r },
                )
              )
            }),
            (K[54] = W),
            (K[55] = te),
            (K[56] = y))
          : (y = K[56]),
        K[57] !== ta ||
        K[58] !== eX ||
        K[59] !== eY ||
        K[60] !== te ||
        K[61] !== eZ ||
        K[62] !== eR ||
        K[63] !== eH ||
        K[64] !== ez ||
        K[65] !== eW
          ? ((w = (e) => {
              let { zoomPercent: t, fitZoomPercent: n, onZoomPercentChange: a, onResetZoom: i } = e,
                r = eH
              if ((void 0 === eH && (r = void 0 === ez ? eW : ez), null == te || ta || null == r)) return null
              let o = (0, l.jsx)(G.b, {
                  variant: eZ,
                  children: (0, l.jsx)("span", {
                    "data-viewer-zoom-control": !0,
                    className: "contents",
                    children: (0, l.jsx)(F.h, {
                      variant: eZ,
                      zoomPercent: Math.round(t),
                      onZoomPercentChange: a,
                      fitOption: { selected: t === n, onSelect: i },
                    }),
                  }),
                }),
                s = o
              return (
                eX
                  ? (s = (0, l.jsx)(O.HD, {
                      zoomOptions: [25, 50, 100, 150, 200],
                      zoomPercent: Math.round(t),
                      onZoomPercentChange: a,
                      fitOption: { selected: t === n, onSelect: i },
                    }))
                  : void 0 === ez &&
                    (s = (0, l.jsxs)("div", {
                      className: "absolute top-2 right-2 z-40 flex items-center gap-1",
                      children: [o, eR],
                    })),
                (0, E.createPortal)(
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      eY
                        ? (0, l.jsx)(D, { zoomPercent: t, fitZoomPercent: n, onZoomPercentChange: a, onResetZoom: i })
                        : null,
                      s,
                    ],
                  }),
                  r,
                )
              )
            }),
            (K[57] = ta),
            (K[58] = eX),
            (K[59] = eY),
            (K[60] = te),
            (K[61] = eZ),
            (K[62] = eR),
            (K[63] = eH),
            (K[64] = ez),
            (K[65] = eW),
            (K[66] = w))
          : (w = K[66]),
        K[67] !== q ||
        K[68] !== eE ||
        K[69] !== Q ||
        K[70] !== ta ||
        K[71] !== el ||
        K[72] !== e0 ||
        K[73] !== eP ||
        K[74] !== ea ||
        K[75] !== ev ||
        K[76] !== eX ||
        K[77] !== eh ||
        K[78] !== ep ||
        K[79] !== W ||
        K[80] !== eO ||
        K[81] !== eu ||
        K[82] !== eN ||
        K[83] !== ek ||
        K[84] !== U ||
        K[85] !== eA ||
        K[86] !== to ||
        K[87] !== eS ||
        K[88] !== ey ||
        K[89] !== eM ||
        K[90] !== te ||
        K[91] !== ej ||
        K[92] !== eI ||
        K[93] !== J ||
        K[94] !== ef ||
        K[95] !== eT ||
        K[96] !== eU ||
        K[97] !== eq ||
        K[98] !== er ||
        K[99] !== eK
          ? ((S = (e) =>
              null == te || ta
                ? null
                : null != U
                  ? (0, l.jsx)("div", {
                      className: "[container-type:size] absolute flex items-center justify-center overflow-hidden",
                      style: e.imageRect,
                      children: U,
                    })
                  : "markup" === W
                    ? (0, l.jsx)(
                        Y,
                        {
                          ref: (0, H.P)(e3, eh),
                          alt: q,
                          src: J,
                          sourceImage: eI,
                          imageEditAttribution: eP,
                          chatGptConversationId: eE,
                          standaloneComposer: ef,
                          sourceConversationId: ep,
                          prepareNativeMarkup: eA,
                          onSave: ek,
                          onSaved: eN,
                          tabId: eT,
                          viewerId: er,
                          isSubmitting: ev,
                          imageSize: te,
                          viewport: e,
                          clipboardScope: Q ?? (null == ey ? void 0 : eq),
                          showCommentTool: eM,
                          sizeControlContainer: ej,
                          isUnifiedViewerEnabled: eX,
                          renderToolbar: eU ? to : void 0,
                          onCancel: eO,
                          onImageEditSubmitted: eu,
                        },
                        ea,
                      )
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          eS?.(e, te, to),
                          null != eq && null != e0 && null != el
                            ? (0, E.createPortal)(
                                (0, l.jsx)("div", {
                                  className: "relative",
                                  style: { bottom: eq.clientHeight - (e.imageRect.top + e.imageRect.height) / eK },
                                  children: el,
                                }),
                                e0,
                              )
                            : null,
                        ],
                      })),
            (K[67] = q),
            (K[68] = eE),
            (K[69] = Q),
            (K[70] = ta),
            (K[71] = el),
            (K[72] = e0),
            (K[73] = eP),
            (K[74] = ea),
            (K[75] = ev),
            (K[76] = eX),
            (K[77] = eh),
            (K[78] = ep),
            (K[79] = W),
            (K[80] = eO),
            (K[81] = eu),
            (K[82] = eN),
            (K[83] = ek),
            (K[84] = U),
            (K[85] = eA),
            (K[86] = to),
            (K[87] = eS),
            (K[88] = ey),
            (K[89] = eM),
            (K[90] = te),
            (K[91] = ej),
            (K[92] = eI),
            (K[93] = J),
            (K[94] = ef),
            (K[95] = eT),
            (K[96] = eU),
            (K[97] = eq),
            (K[98] = er),
            (K[99] = eK),
            (K[100] = S))
          : (S = K[100]),
        K[101] !== q ||
        K[102] !== e9 ||
        K[103] !== tw ||
        K[104] !== tS ||
        K[105] !== b ||
        K[106] !== tM ||
        K[107] !== tj ||
        K[108] !== C ||
        K[109] !== y ||
        K[110] !== w ||
        K[111] !== S
          ? ((M = (0, l.jsx)(I.ZoomableStage, {
              imageRef: e9,
              minimumFitHeight: tw,
              overflowViewportRef: e5,
              defaultZoomPercent: tS,
              onZoomPercentChange: b,
              zoomedImageLabel: q,
              unpadded: !0,
              panOnDrag: tM,
              panBeyondImage: tj,
              onViewportInteractionStart: C,
              shouldPanOnPointerDown: y,
              renderZoomControls: w,
              renderOverlay: S,
            })),
            (K[101] = q),
            (K[102] = e9),
            (K[103] = tw),
            (K[104] = tS),
            (K[105] = b),
            (K[106] = tM),
            (K[107] = tj),
            (K[108] = C),
            (K[109] = y),
            (K[110] = w),
            (K[111] = S),
            (K[112] = M))
          : (M = K[112]),
        K[113] !== x || K[114] !== M
          ? ((j = (0, l.jsx)(I, { image: x, children: M })), (K[113] = x), (K[114] = M), (K[115] = j))
          : (j = K[115]),
        K[116] !== p || K[117] !== v || K[118] !== tb || K[119] !== j
          ? ((N = (0, l.jsxs)("div", { className: p, style: v, children: [tb, j] })),
            (K[116] = p),
            (K[117] = v),
            (K[118] = tb),
            (K[119] = j),
            (K[120] = N))
          : (N = K[120]),
        K[121] !== es || K[122] !== h || K[123] !== f || K[124] !== N
          ? ((T = (0, l.jsx)("div", { ref: es, "data-image-text-stage": !0, className: h, style: f, children: N })),
            (K[121] = es),
            (K[122] = h),
            (K[123] = f),
            (K[124] = N),
            (K[125] = T))
          : (T = K[125]),
        K[126] !== m || K[127] !== g || K[128] !== T
          ? ((_ = (0, l.jsxs)("div", { ref: e5, "data-image-text-overflow": !0, className: m, children: [g, T] })),
            (K[126] = m),
            (K[127] = g),
            (K[128] = T),
            (K[129] = _))
          : (_ = K[129]),
        K[130] !== ev || K[131] !== _ || K[132] !== ts
          ? ((R = (0, l.jsxs)("div", { ref: eQ, className: "relative min-h-0 flex-1", inert: ev, children: [tc, _] })),
            (K[130] = ev),
            (K[131] = _),
            (K[132] = ts),
            (K[133] = R))
          : (R = K[133]),
        K[134] !== el || K[135] !== ei
          ? ((L =
              null != el
                ? (0, l.jsx)("div", {
                    ref: e2,
                    className: null == ei ? "shrink-0" : "absolute inset-x-0 bottom-0 z-10",
                  })
                : null),
            (K[134] = el),
            (K[135] = ei),
            (K[136] = L))
          : (L = K[136]),
        K[137] !== ta
          ? ((z =
              ta &&
              (0, l.jsx)("div", {
                role: "alert",
                className: "absolute inset-x-0 bottom-0 p-4 text-sm text-danger",
                children: (0, l.jsx)(A.A, {
                  id: "imageEditViewer.imageLoadError",
                  defaultMessage: "Could not load this image. Close and reopen the image to try again",
                }),
              })),
            (K[137] = ta),
            (K[138] = z))
          : (z = K[138]),
        K[139] !== c || K[140] !== u || K[141] !== R || K[142] !== L || K[143] !== z
          ? ((V = (0, l.jsxs)("div", {
              className: "relative flex min-h-0 flex-1 flex-col",
              role: "presentation",
              onLoadCapture: c,
              onKeyDown: d,
              children: [u, R, L, z],
            })),
            (K[139] = c),
            (K[140] = u),
            (K[141] = R),
            (K[142] = L),
            (K[143] = z),
            (K[144] = V))
          : (V = K[144]),
        V
      )
    }
    function Z(e) {
      return e.stopPropagation()
    }
  },
  YEQY(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("rICf"),
      r = n("qmMi"),
      o = n("zd8w"),
      s = n("Wf1j"),
      c = n("ASxG"),
      d = n("yGJW"),
      u = n("OWtl"),
      m = n("Nwp9"),
      g = n("pyOZ"),
      h = n("j9wQ")
    let f = c.Ikc({ x: c.aig().min(0).max(1), y: c.aig().min(0).max(1) }).nullable(),
      p = (0, m.m3)("image-editing-toolbar-position-v2", null, {
        coerceStoredValue: (e) => f.safeParse(e).data ?? null,
        publishDelayMs: 250,
      })
    n.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            n,
            c,
            m,
            f,
            v,
            x,
            b = (0, a.c)(24),
            { ref: C, children: y, dragBoundary: w, focusOnDrag: S, trackAnalytics: M, variant: j } = e,
            I = void 0 !== M && M,
            P = (0, r.gh)(u.u),
            E = (0, o.useRef)(!1),
            A = (0, o.useRef)(!1)
          ;(b[0] !== P || b[1] !== I
            ? ((t = () => {
                if (I)
                  return P.watch((e) => {
                    let { get: t } = e
                    !E.current &&
                      t(g.Mf) &&
                      ((E.current = !0),
                      (0, d.yy)(P, i.CodexImageEditToolbarShown, { hasSavedPosition: null != P.get(p) }))
                  })
              }),
              (n = [P, I]),
              (b[0] = P),
              (b[1] = I),
              (b[2] = t),
              (b[3] = n))
            : ((t = b[2]), (n = b[3])),
            (0, o.useEffect)(t, n))
          let k = (0, r.Ul)(p),
            N = (0, s.A)()
          b[4] !== N
            ? ((c = N.formatMessage({ id: "imageSidePanel.tools", defaultMessage: "Image editing tools" })),
              (b[4] = N),
              (b[5] = c))
            : (c = b[5])
          let T = c
          return (
            b[6] !== N
              ? ((m = N.formatMessage({ id: "imageSidePanel.moveToolbar", defaultMessage: "Move toolbar" })),
                (b[6] = N),
                (b[7] = m))
              : (m = b[7]),
            b[8] !== N
              ? ((f = N.formatMessage({
                  id: "imageSidePanel.moveToolbarDescription",
                  defaultMessage: "Drag or use arrow keys to move. Press Home to reset.",
                })),
                (b[8] = N),
                (b[9] = f))
              : (f = b[9]),
            b[10] !== P || b[11] !== I
              ? ((v = (e) => {
                  ;(P.set(p, e), I && !A.current && ((A.current = !0), (0, d.yy)(P, i.CodexImageEditToolbarMoved, {})))
                }),
                (b[10] = P),
                (b[11] = I),
                (b[12] = v))
              : (v = b[12]),
            b[13] !== y ||
            b[14] !== w ||
            b[15] !== S ||
            b[16] !== T ||
            b[17] !== k ||
            b[18] !== C ||
            b[19] !== m ||
            b[20] !== f ||
            b[21] !== v ||
            b[22] !== j
              ? ((x = (0, l.jsx)(h.ZR, {
                  ref: C,
                  variant: j,
                  dragBoundary: w,
                  focusOnDrag: S,
                  label: T,
                  dragHandleLabel: m,
                  dragHandleDescription: f,
                  position: k,
                  onPositionChange: v,
                  children: y,
                })),
                (b[13] = y),
                (b[14] = w),
                (b[15] = S),
                (b[16] = T),
                (b[17] = k),
                (b[18] = C),
                (b[19] = m),
                (b[20] = f),
                (b[21] = v),
                (b[22] = j),
                (b[23] = x))
              : (x = b[23]),
            x
          )
        },
      },
    )
  },
  wxik(e, t, n) {
    function* l(e, t, n) {
      yield e
      for (let t = e + 30; t <= n; t += 30) yield t
      for (let n = e - 30; n >= t; n -= 30) yield n
    }
    n.d(
      t,
      {},
      {
        U: function (e, t, n) {
          let a = Math.min(17, n.width / 2),
            i = Math.min(17, n.height / 2),
            r = n.width - a,
            o = n.height - i,
            s = { left: Math.max(a, Math.min(e.left, r)), top: Math.max(i, Math.min(e.top, o)) }
          for (let e of l(s.left, a, r))
            for (let n of l(s.top, i, o))
              if (!t.some((t) => 30 > Math.abs(t.left - e) && 30 > Math.abs(t.top - n))) return { left: e, top: n }
          return s
        },
      },
    )
  },
  H0ju(e, t, n) {
    var l = n("ABep"),
      a = n("QosV")
    function i(e) {
      e?.focus({ preventScroll: !0 })
    }
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            r = (0, a.c)(8),
            { children: o, label: s, list: c, onClose: d } = e,
            u = "region-comments" === c ? void 0 : c,
            m = "region-comments" === c || void 0
          return (
            r[0] !== d
              ? ((t = (e) => {
                  "Escape" === e.key &&
                    e.target instanceof Node &&
                    e.currentTarget.contains(e.target) &&
                    !e.nativeEvent.isComposing &&
                    (e.preventDefault(), e.stopPropagation(), d())
                }),
                (r[0] = d),
                (r[1] = t))
              : (t = r[1]),
            r[2] !== o || r[3] !== s || r[4] !== u || r[5] !== m || r[6] !== t
              ? ((n = (0, l.jsx)("div", {
                  ref: i,
                  tabIndex: -1,
                  role: "group",
                  "aria-label": s,
                  "data-codex-escape-boundary": !0,
                  "data-image-text-list-panel": u,
                  "data-image-comment-list": m,
                  className: "flex min-h-0 flex-1 flex-col outline-none",
                  onKeyDown: t,
                  children: o,
                })),
                (r[2] = o),
                (r[3] = s),
                (r[4] = u),
                (r[5] = m),
                (r[6] = t),
                (r[7] = n))
              : (n = r[7]),
            n
          )
        },
      },
    )
  },
  LQxe(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("on57")
    let r = { block: "nearest", container: "nearest" }
    function o(e) {
      e?.scrollIntoView(r)
    }
    n.d(
      t,
      {},
      {
        b: function (e) {
          let t,
            n,
            r = (0, a.c)(5),
            { rows: s, onHoverRow: c } = e
          return (
            r[0] !== c || r[1] !== s
              ? ((t = s.map((e, t) =>
                  (0, l.jsxs)(
                    "li",
                    {
                      ref: e.selected ? o : void 0,
                      children: [
                        t > 0 &&
                          (0, l.jsx)("div", {
                            "aria-hidden": !0,
                            className: (0, i.A)(
                              "mx-2 my-1 h-px bg-border-subtle",
                              (e.selected || s[t - 1].selected) && "invisible",
                            ),
                          }),
                        (0, l.jsxs)("article", {
                          onPointerEnter: (t) => {
                            "touch" !== t.pointerType && c?.(e.key)
                          },
                          onPointerLeave: () => c?.(null),
                          className: (0, i.A)(
                            "group comment-typography relative min-w-0 rounded-lg",
                            e.selected
                              ? "bg-background-secondary-soft"
                              : "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
                          ),
                          children: [
                            (0, l.jsx)("button", {
                              type: "button",
                              "data-image-text-list-action": !0,
                              "aria-label": e.label,
                              "aria-pressed": e.selected,
                              className:
                                "block w-full cursor-interaction rounded-lg text-start focus-visible:outline-2 focus-visible:outline-ring",
                              onClick: e.onOpen,
                              children: e.content,
                            }),
                            e.details,
                            (0, l.jsx)("div", {
                              "data-image-text-list-action": !0,
                              className: (0, i.A)(
                                "absolute end-2 top-2 flex items-center [&_button]:text-secondary",
                                !e.selected &&
                                  "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100",
                              ),
                              children: e.actions,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.key,
                  ),
                )),
                (r[0] = c),
                (r[1] = s),
                (r[2] = t))
              : (t = r[2]),
            r[3] !== t
              ? ((n = (0, l.jsx)("ul", { className: "min-h-0 flex-1 overflow-y-auto px-2 pt-2 pb-2", children: t })),
                (r[3] = t),
                (r[4] = n))
              : (n = r[4]),
            n
          )
        },
      },
    )
  },
  f1zo(e, t, n) {
    n.d(t, { J: () => nM })
    var l = n("ABep"),
      a = n("QosV"),
      i = n("eHJT"),
      r = n("rICf"),
      o = n("slpy"),
      s = n("HGfI"),
      c = n("B8kK"),
      d = n("Z7bw"),
      u = n("irkb"),
      m = n("on57"),
      g = n("qmMi"),
      h = n("ccwJ"),
      f = n("zd8w"),
      p = n("v7qY"),
      v = n("Wf1j"),
      x = n("oyxz"),
      b = n("Ywss"),
      C = n("DD2M"),
      y = n("Y5Sy"),
      w = n("tl5a"),
      S = n("QcW8"),
      M = n("NvrT"),
      j = n("d9FS"),
      I = n("mYNH"),
      P = n("Vc45"),
      E = n("ONnF"),
      A = n("oAoP"),
      k = n("q3HK"),
      N = n("yoOF"),
      T = n("CiLO"),
      _ = n("seW7"),
      R = n("V7vi"),
      L = n("iS3i"),
      D = n("Sm6l"),
      z = n("HOLv"),
      H = n("bVeK"),
      O = n("UxN3"),
      F = n("SGsN"),
      G = n("YXXI"),
      B = n("gOlW"),
      Y = n("gAqY"),
      V = n("an0a"),
      Z = n("ddzD"),
      K = n("NMCC"),
      X = n("oIzB"),
      U = n("Ga65"),
      W = n("YwQ2"),
      $ = n("ucA4"),
      q = n("K4Cx"),
      Q = n("SZCv"),
      J = n.n(Q),
      ee = n("KUdL"),
      et = n.n(ee),
      en = n("wD9O")
    n("dVA2")
    var el = n("T1PX"),
      ea = n("yC2B"),
      ei = n("nsuH"),
      er = n("V8uZ"),
      eo = n("HgLj"),
      es = n("arh8"),
      ec = n("vywK"),
      ed = n("XuaP"),
      eu = n("wxik"),
      em = n("LlLD"),
      eg = n("y8tV"),
      eh = n("D7Ms"),
      ef = n("ASxG"),
      ep = n("OWtl"),
      ev = n("zgGI"),
      ex = n("zHp1")
    let eb = ef.g1P(ef.YjP(), ef.YjP()),
      eC = (0, g.vU)(
        ep.u,
        ({ src: e, resolver: t }) => ({
          queryKey: ["image-comment-contours", ...(0, ex.$S)(e ?? "", t)],
          queryFn: e
            ? ({ signal: n }) =>
                (async function (e, t, n) {
                  let l = await (0, ex.Ci)(e, t)
                  if ((n.throwIfAborted(), "available" !== l.kind)) return null
                  let a = await (0, ex.jE)(l, n, 0x2010000),
                    i = new Uint8Array(await a.slice(0, 2).arrayBuffer()),
                    r =
                      31 === i[0] && 139 === i[1]
                        ? await (0, ev.A)(
                            new Response(a.stream().pipeThrough(new DecompressionStream("gzip"))),
                            0x2000000,
                            n,
                          )
                        : a,
                    o = eb.parse(JSON.parse(await r.text())),
                    s = document.createElement("canvas").getContext("2d")
                  if (!s || "u" < typeof Path2D) return null
                  let c = new Map()
                  for (let [e, t] of Object.entries(o)) t.trim() && c.set(e, new Path2D(t))
                  return (e, t, n) => {
                    let l = c.get(e)
                    return l && s.isPointInPath(l, t, n, "evenodd")
                  }
                })(e, t, n)
            : eh.hT,
          retry: !1,
          staleTime: 1 / 0,
        }),
        { key: ({ src: e, resolver: t }) => (0, eh.EN)((0, ex.$S)(e ?? "", t)) },
      )
    var ey = n("SOEF"),
      ew = n("DBCl"),
      eS = n("CZMt"),
      eM = n("osar")
    let ej = "[data-image-comment-list]",
      eI = `[data-viewer-zoom-control], [data-viewer-toolbar-drag-handle], [data-image-comment-control], ${ej}`
    function eP(e, t) {
      if (!(e instanceof Element)) return !1
      if (e.closest(t)) return !0
      let n = e.closest('[role="menu"]')?.getAttribute("aria-labelledby")
      return null != n && e.ownerDocument.getElementById(n)?.closest(t) != null
    }
    var eE = "stage-rlZQ2G",
      eA = "regionFooter-Ff5QzX",
      ek = "regionOutline-t8gLMX"
    function eN(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        g,
        h,
        p,
        x,
        b,
        C,
        y,
        w,
        S,
        M,
        j,
        I,
        P,
        E,
        A,
        k = (0, a.c)(85),
        {
          ref: N,
          targetControl: T,
          savedTargetChanged: _,
          target: R,
          animatePlacement: L,
          commentId: D,
          body: z,
          style: H,
          surface: O,
          onSurfaceChange: F,
          isPanReady: G,
          draftGuard: B,
          onDirtyChange: Y,
          onSave: V,
          onClose: Z,
        } = e,
        K = (0, v.A)(),
        X = (0, f.useContext)(eM.k),
        U = (0, f.useId)(),
        W = (0, f.useRef)(null),
        [$, Q] = (0, f.useState)(!1),
        [J] = (0, f.useState)(z),
        [ee, et] = (0, f.useState)(J),
        [en, el] = (0, f.useState)()
      k[0] !== ee ? ((t = ee.trim()), (k[0] = ee), (k[1] = t)) : (t = k[1])
      let ea = t
      k[2] !== ea || k[3] !== J || k[4] !== en || k[5] !== _
        ? ((n = _ || (ea !== J.trim() && ea !== en)), (k[2] = ea), (k[3] = J), (k[4] = en), (k[5] = _), (k[6] = n))
        : (n = k[6])
      let ei = n
      k[7] !== D ? ((i = (e) => (0, ey.Uac)(null == D ? e : e.trim())), (k[7] = D), (k[8] = i)) : (i = k[8])
      let eo = i
      ;(k[9] !== K
        ? ((r = () => ({
            prefillTextRegion(e) {
              let t = W.current
              !t || t.getText().trim() || (t.setText((0, ed.h_)(K, e)), el(t.getText().trim()), t.focus("end"))
            },
          })),
          (k[9] = K),
          (k[10] = r))
        : (r = k[10]),
        (0, f.useImperativeHandle)(N, r),
        k[11] !== ei || k[12] !== Y
          ? ((o = () => {
              if (ei && null != Y) return (Y(!0), () => Y(!1))
            }),
            (s = [ei, Y]),
            (k[11] = ei),
            (k[12] = Y),
            (k[13] = o),
            (k[14] = s))
          : ((o = k[13]), (s = k[14])),
        (0, f.useLayoutEffect)(o, s),
        k[15] !== $ ||
        k[16] !== ei ||
        k[17] !== ee ||
        k[18] !== B ||
        k[19] !== ea ||
        k[20] !== eo ||
        k[21] !== G ||
        k[22] !== Z ||
        k[23] !== V ||
        k[24] !== en ||
        k[25] !== O
          ? ((c = (e) => {
              let t = e.target
              return (
                !(
                  ("pointerdown" === e.type && G) ||
                  0 !== e.button ||
                  (null != B &&
                    (function (e, { lightbox: t, viewer: n }) {
                      return (
                        eP(
                          e,
                          "[data-image-preview-navigation], [data-generated-image-rail] [data-image-thumbnail], [data-image-preview-composer] [data-attachment-transition-target][role='button']",
                        ) ||
                        (e instanceof Element &&
                          t?.contains(e) === !0 &&
                          null != n &&
                          !n.contains(e) &&
                          null != e.closest("button") &&
                          !eP(e, ej))
                      )
                    })(t, B)) ||
                  (!(t instanceof Element && null != t.closest(`${ej} li button`)) && eP(t, eI)) ||
                  !O ||
                  e.composedPath().includes(O) ||
                  (t instanceof Element && t.closest("[data-image-comment-draft-pin]"))
                ) &&
                ($ || W.current?.view.composing || !eo(ee)
                  ? (e.preventDefault(), e.stopPropagation(), !0)
                  : ei && ea && ea !== en
                    ? (e.preventDefault(), e.stopPropagation(), "click" === e.type && V(ea, "dismiss"), !0)
                    : (t instanceof Element &&
                        (null != t.closest("[data-sketch-comment]") ||
                          null ==
                            t.closest(
                              "button, a, input, textarea, select, [contenteditable=true], [role=button], [data-annotation-control]",
                            )) &&
                        (e.preventDefault(), e.stopPropagation()),
                      Z(),
                      !1))
              )
            }),
            (k[15] = $),
            (k[16] = ei),
            (k[17] = ee),
            (k[18] = B),
            (k[19] = ea),
            (k[20] = eo),
            (k[21] = G),
            (k[22] = Z),
            (k[23] = V),
            (k[24] = en),
            (k[25] = O),
            (k[26] = c))
          : (c = k[26]))
      let es = (0, f.useEffectEvent)(c)
      ;(k[27] !== es || k[28] !== O
        ? ((d = () => {
            if (!O) return
            let e = O.ownerDocument,
              t = !1,
              n = (e) => {
                t = es(e)
              },
              l = (e) => {
                ;((t || 0 === e.detail) && es(e), (t = !1))
              }
            return (
              e.addEventListener("pointerdown", n, !0),
              e.addEventListener("click", l, !0),
              () => {
                ;(e.removeEventListener("pointerdown", n, !0), e.removeEventListener("click", l, !0))
              }
            )
          }),
          (k[27] = es),
          (k[28] = O),
          (k[29] = d))
        : (d = k[29]),
        k[30] !== O ? ((u = [O]), (k[30] = O), (k[31] = u)) : (u = k[31]),
        (0, f.useEffect)(d, u),
        k[32] !== K
          ? ((g = K.formatMessage({ id: "imageSidePanel.addComment", defaultMessage: "Add comment" })),
            (k[32] = K),
            (k[33] = g))
          : (g = k[33]))
      let ec = g
      k[34] !== eo || k[35] !== V
        ? ((h = (e) => {
            let { body: t } = e
            eo(t) && V(t.trim(), "preview")
          }),
          (k[34] = eo),
          (k[35] = V),
          (k[36] = h))
        : (h = k[36])
      let eu = h,
        em = !!L && "position"
      k[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { layout: { duration: 0.3, ease: er.Wu } }), (k[37] = p))
        : (p = k[37])
      let eg = null != T && eA
      return (
        k[38] !== eg
          ? ((x = (0, m.A)("pointer-events-auto absolute z-10", eg)), (k[38] = eg), (k[39] = x))
          : (x = k[39]),
        k[40] !== Z
          ? ((b = (e) => {
              if ("Escape" === e.key || "Enter" === e.key) {
                if (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode) return void e.stopPropagation()
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), Z())
              }
            }),
            (k[40] = Z),
            (k[41] = b))
          : (b = k[41]),
        k[42] !== X ? ((C = { ...X, appearance: "discussion" }), (k[42] = X), (k[43] = C)) : (C = k[43]),
        k[44] !== ee || k[45] !== eo ? ((y = eo(ee)), (k[44] = ee), (k[45] = eo), (k[46] = y)) : (y = k[46]),
        k[47] !== D
          ? ((w = (e) => {
              ;((W.current = e), null != D && e?.setEnterBehavior("cmdAlways"))
            }),
            (k[47] = D),
            (k[48] = w))
          : (w = k[48]),
        k[49] !== ec || k[50] !== D || k[51] !== K
          ? ((S =
              null == D
                ? ec
                : K.formatMessage({ id: "imageSidePanel.editCommentInput", defaultMessage: "Edit comment" })),
            (k[49] = ec),
            (k[50] = D),
            (k[51] = K),
            (k[52] = S))
          : (S = k[52]),
        k[53] !== K || k[54] !== R
          ? ((M = R
              ? K.formatMessage(
                  {
                    id: "imageTextEditing.addExcerptCommentPlaceholder",
                    defaultMessage: 'Comment on "{excerpt}"\u2026',
                  },
                  { excerpt: R },
                )
              : K.formatMessage({
                  id: "imageSidePanel.pointComment.editInstructionPlaceholder",
                  defaultMessage: "Describe what to change here\u2026",
                })),
            (k[53] = K),
            (k[54] = R),
            (k[55] = M))
          : (M = k[55]),
        k[56] !== D
          ? ((j = null == D ? { mode: "create" } : { mode: "edit", commentId: D }), (k[56] = D), (k[57] = j))
          : (j = k[57]),
        k[58] !== ee || k[59] !== J || k[60] !== U || k[61] !== j
          ? ((I = {
              sessionId: U,
              target: j,
              body: J,
              draftBody: ee,
              cwd: null,
              previewAlignment: "end",
              surfaceMode: "editor",
            }),
            (k[58] = ee),
            (k[59] = J),
            (k[60] = U),
            (k[61] = j),
            (k[62] = I))
          : (I = k[62]),
        k[63] !== ec ||
        k[64] !== ee ||
        k[65] !== Z ||
        k[66] !== eu ||
        k[67] !== y ||
        k[68] !== w ||
        k[69] !== S ||
        k[70] !== M ||
        k[71] !== I ||
        k[72] !== T
          ? ((P = (0, l.jsx)(eS.s, {
              footerStart: T,
              embedded: !0,
              discussion: !0,
              enableSuggestions: !1,
              allowImageAttachments: !1,
              showAdjustEntry: !1,
              dictationProductSurface: "chatgpt",
              defaultCreateSubmitMode: "direct",
              canSubmit: y,
              editorRef: w,
              inputAriaLabel: S,
              placeholder: M,
              submitLabel: ec,
              session: I,
              value: ee,
              windowHeight: ew.bUX + ew.o6c,
              reservedTrayHeight: ew.o6c,
              onBodyChange: et,
              onDictationBusyChange: Q,
              onCancel: Z,
              onEscape: Z,
              onSubmit: eu,
              onDirectSubmit: eu,
            })),
            (k[63] = ec),
            (k[64] = ee),
            (k[65] = Z),
            (k[66] = eu),
            (k[67] = y),
            (k[68] = w),
            (k[69] = S),
            (k[70] = M),
            (k[71] = I),
            (k[72] = T),
            (k[73] = P))
          : (P = k[73]),
        k[74] !== C || k[75] !== P
          ? ((E = (0, l.jsx)("div", {
              "data-comment-layout": "floating",
              className:
                "page-comment-typography [--annotation-comment-editor-height:auto] [--annotation-comment-line-height:1.5] [--annotation-comment-min-height:21px] [--spacing-token-button-composer-sm:calc(var(--spacing)*6.5)] [&_.ProseMirror]:max-h-[min(12rem,40dvh)] [&_.ProseMirror]:overflow-y-auto [&_.ProseMirror]:overscroll-contain",
              children: (0, l.jsx)(eM.k, { value: C, children: P }),
            })),
            (k[74] = C),
            (k[75] = P),
            (k[76] = E))
          : (E = k[76]),
        k[77] !== F || k[78] !== H || k[79] !== em || k[80] !== x || k[81] !== b || k[82] !== E || k[83] !== R
          ? ((A = (0, l.jsx)(q.P.div, {
              layout: em,
              layoutDependency: R,
              transition: p,
              className: x,
              ref: F,
              "data-annotation-control": !0,
              style: H,
              onPointerDown: eT,
              onKeyDownCapture: b,
              children: E,
            })),
            (k[77] = F),
            (k[78] = H),
            (k[79] = em),
            (k[80] = x),
            (k[81] = b),
            (k[82] = E),
            (k[83] = R),
            (k[84] = A))
          : (A = k[84]),
        A
      )
    }
    function eT(e) {
      return e.stopPropagation()
    }
    var e_ = n("QEJB"),
      eR = n("tgP9"),
      eL = n("e4Ws")
    function eD(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        m,
        g = (0, a.c)(30),
        {
          target: h,
          text: p,
          number: x,
          pinId: b,
          lightboxOwnsDismissal: C,
          style: y,
          onSurfaceChange: w,
          onEdit: S,
          onDelete: M,
          onDismiss: j,
        } = e,
        I = (0, v.A)(),
        P = (0, f.useRef)(null)
      g[0] !== w ? ((t = (0, eo.P)(P, w)), (g[0] = w), (g[1] = t)) : (t = g[1])
      let E = t
      return (
        g[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = () => {
              eP(P.current?.ownerDocument.activeElement ?? null, `${ej}, [data-paged-annotation-id]`) ||
                P.current?.focus({ preventScroll: !0 })
            }),
            (i = []),
            (g[2] = n),
            (g[3] = i))
          : ((n = g[2]), (i = g[3])),
        (0, f.useLayoutEffect)(n, i),
        g[4] !== C
          ? ((r = (e) => {
              ;(C || eP(e.target, `${eI}, [data-paged-annotation-id]`)) && e.preventDefault()
            }),
            (g[4] = C),
            (g[5] = r))
          : (r = g[5]),
        g[6] !== j || g[7] !== b
          ? ((o = (e) => {
              if ((e.preventDefault(), !e.isComposing && !eP(e.target, ej))) {
                let e = P.current
                ;(e?.contains(e.ownerDocument.activeElement) &&
                  e.ownerDocument.getElementById(b)?.focus({ preventScroll: !0 }),
                  j())
              }
            }),
            (g[6] = j),
            (g[7] = b),
            (g[8] = o))
          : (o = g[8]),
        g[9] !== I || g[10] !== x
          ? ((s = I.formatMessage(
              { id: "imageTextEditing.numberedComment", defaultMessage: "Comment {number}" },
              { number: x },
            )),
            (g[9] = I),
            (g[10] = x),
            (g[11] = s))
          : (s = g[11]),
        g[12] !== h || g[13] !== p
          ? ((c = h
              ? (0, l.jsx)(eL.T, { body: p, target: h })
              : (0, l.jsx)("div", {
                  dir: "auto",
                  className:
                    "line-clamp-3 min-h-6 min-w-0 flex-1 content-center text-start break-words whitespace-pre-wrap",
                  children: p,
                })),
            (g[12] = h),
            (g[13] = p),
            (g[14] = c))
          : (c = g[14]),
        g[15] !== x || g[16] !== M || g[17] !== S
          ? ((d = (0, l.jsx)("div", {
              className: "shrink-0",
              children: (0, l.jsx)(eR.B, { annotationNumber: x, onEdit: S, onRemove: M }),
            })),
            (g[15] = x),
            (g[16] = M),
            (g[17] = S),
            (g[18] = d))
          : (d = g[18]),
        g[19] !== c || g[20] !== d
          ? ((u = (0, l.jsxs)("div", {
              className:
                "pointer-events-auto flex items-start gap-2 p-3 text-sm leading-5 select-text [&_button]:text-secondary",
              children: [c, d],
            })),
            (g[19] = c),
            (g[20] = d),
            (g[21] = u))
          : (u = g[21]),
        g[22] !== E || g[23] !== j || g[24] !== y || g[25] !== r || g[26] !== o || g[27] !== s || g[28] !== u
          ? ((m = (0, l.jsx)(e_.qW, {
              onDismiss: j,
              onInteractOutside: r,
              onEscapeKeyDown: o,
              ref: E,
              style: y,
              role: "dialog",
              tabIndex: -1,
              "aria-label": s,
              "data-annotation-control": !0,
              className:
                "absolute z-10 rounded-2xl bg-surface-elevated-secondary shadow-lg-stronger ring-1 ring-border-subtle outline-none",
              children: u,
            })),
            (g[22] = E),
            (g[23] = j),
            (g[24] = y),
            (g[25] = r),
            (g[26] = o),
            (g[27] = s),
            (g[28] = u),
            (g[29] = m))
          : (m = g[29]),
        m
      )
    }
    var ez = n("ESTr")
    let eH = (0, ez.a)({
      name: "frame-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.808105, y: 1.807983, width: 12.383789, height: 12.383789 },
        visualBounds: { x: 1.808105, y: 1.807983, width: 12.383789, height: 12.383789 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.808105, y: 1.807983, width: 12.383789, height: 12.383789 },
        center: { x: 8, y: 7.999878 },
        insets: { top: 1.807983, right: 1.808106, bottom: 1.808228, left: 1.808105 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.999878 }, foreground: { x: 8, y: 7.999878 } },
      },
      capabilities: ["icon"],
      body: '<path d="M2.3335 9.47498C2.62345 9.47498 2.85889 9.71042 2.85889 10.0004V11.5336C2.85908 12.4217 3.57915 13.142 4.46729 13.142H6.00049C6.29029 13.1421 6.5249 13.3775 6.5249 13.6674C6.52453 13.9569 6.29006 14.1916 6.00049 14.1918H4.46729C2.99925 14.1918 1.8083 13.0016 1.80811 11.5336V10.0004C1.80811 9.71042 2.04355 9.47498 2.3335 9.47498Z" fill="currentColor"/> <path d="M13.6675 9.47498C13.9571 9.47542 14.1919 9.71069 14.1919 10.0004V11.5336C14.1917 13.0014 13.0015 14.1915 11.5337 14.1918H10.0005C9.71077 14.1918 9.47547 13.957 9.4751 13.6674C9.4751 13.3774 9.71054 13.142 10.0005 13.142H11.5337C12.4216 13.1417 13.1419 12.4215 13.1421 11.5336V10.0004C13.1421 9.71042 13.3775 9.47498 13.6675 9.47498Z" fill="currentColor"/> <path d="M6.00049 1.80798C6.29029 1.80816 6.5249 2.04353 6.5249 2.33337C6.5249 2.62322 6.29029 2.85859 6.00049 2.85876H4.46729C3.57903 2.85876 2.85889 3.5789 2.85889 4.46716V6.00037C2.85871 6.29017 2.62334 6.52478 2.3335 6.52478C2.04366 6.52478 1.80828 6.29017 1.80811 6.00037V4.46716C1.80811 2.99901 2.99913 1.80798 4.46729 1.80798H6.00049Z" fill="currentColor"/> <path d="M11.5337 1.80798C13.0016 1.80825 14.1919 2.99917 14.1919 4.46716V6.00037C14.1917 6.28989 13.9569 6.52434 13.6675 6.52478C13.3776 6.52478 13.1423 6.29017 13.1421 6.00037V4.46716C13.1421 3.57907 12.4217 2.85903 11.5337 2.85876H10.0005C9.71054 2.85876 9.4751 2.62332 9.4751 2.33337C9.4751 2.04342 9.71054 1.80798 10.0005 1.80798H11.5337Z" fill="currentColor"/>',
    })
    var eO = n("gkHQ"),
      eF = n("yf2D")
    function eG(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        g,
        h = (0, a.c)(28),
        { regionTitle: p, expanded: x, onToggle: b } = e,
        C = (0, v.A)(),
        [y, w] = (0, f.useState)(!1)
      h[0] !== x || h[1] !== C || h[2] !== p
        ? ((t = x
            ? C.formatMessage(
                {
                  id: "imageSidePanel.regionComment.returnToPoint",
                  defaultMessage: 'Return to the point in "{regionTitle}"',
                },
                { regionTitle: p },
              )
            : C.formatMessage(
                { id: "imageSidePanel.regionComment.expandToNamedRegion", defaultMessage: 'Expand to "{regionTitle}"' },
                { regionTitle: p },
              )),
          (h[0] = x),
          (h[1] = C),
          (h[2] = p),
          (h[3] = t))
        : (t = h[3])
      let S = t,
        M = x ? void 0 : "",
        j = x ? "accentSubtle" : "ghostMuted",
        I = x ? "max-w-36" : "max-w-44 text-secondary"
      ;(h[4] !== I
        ? ((n = (0, m.A)("group motion-safe:transition-colors motion-safe:duration-basic", I)), (h[4] = I), (h[5] = n))
        : (n = h[5]),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (e) => w(e.currentTarget.matches(":focus-visible"))), (r = () => w(!1)), (h[6] = i), (h[7] = r))
          : ((i = h[6]), (r = h[7])),
        h[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(z.I, { asset: eH, className: "shrink-0" })), (h[8] = o))
          : (o = h[8]))
      let P = x ? "auto" : void 0,
        E = !x && "underline-offset-2 group-hover:underline group-focus-visible:underline"
      h[9] !== E ? ((s = (0, m.A)(E)), (h[9] = E), (h[10] = s)) : (s = h[10])
      let A = x ? p : S
      return (
        h[11] !== s || h[12] !== A
          ? ((c = (0, l.jsx)("span", { className: s, children: A })), (h[11] = s), (h[12] = A), (h[13] = c))
          : (c = h[13]),
        h[14] !== y || h[15] !== c || h[16] !== P
          ? ((d = (0, l.jsx)(eF.E, { animate: y, animateOnGroupHover: !0, scrollMode: "loop", dir: P, children: c })),
            (h[14] = y),
            (h[15] = c),
            (h[16] = P),
            (h[17] = d))
          : (d = h[17]),
        h[18] !== x
          ? ((u = x && (0, l.jsx)(z.I, { asset: eO.Q, className: "shrink-0" })), (h[18] = x), (h[19] = u))
          : (u = h[19]),
        h[20] !== S || h[21] !== b || h[22] !== d || h[23] !== u || h[24] !== M || h[25] !== j || h[26] !== n
          ? ((g = (0, l.jsxs)(D.$, {
              type: "button",
              "data-image-comment-expand": M,
              "aria-label": S,
              size: "compact",
              radius: "full",
              color: j,
              allowShrink: !0,
              className: n,
              onFocus: i,
              onBlur: r,
              onClick: b,
              children: [o, d, u],
            })),
            (h[20] = S),
            (h[21] = b),
            (h[22] = d),
            (h[23] = u),
            (h[24] = M),
            (h[25] = j),
            (h[26] = n),
            (h[27] = g))
          : (g = h[27]),
        g
      )
    }
    let eB = (0, U.u)({ width: 30, height: 30, strokeWidth: 0 }),
      eY = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-1 -1 32 32">
  <path d="${eB}" fill="white" stroke="#dfdfdf" stroke-width="2" paint-order="stroke fill"/>
  <circle cx="15" cy="15" r="13" fill="#dfdfdf"/>
  <path d="M12 15h6 M15 12v6" fill="none" stroke="#303030" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,
      eV = `url("data:image/svg+xml,${encodeURIComponent(eY)}") 16 16, crosshair`
    function eZ(e) {
      var t, n
      let i,
        r,
        o,
        s,
        c,
        d,
        u,
        h,
        p,
        x,
        b,
        C,
        y,
        w,
        S,
        M,
        j,
        I,
        P,
        E,
        A,
        k,
        N,
        T,
        _,
        R,
        L,
        D,
        z,
        H,
        O,
        F,
        G,
        B,
        Y,
        V,
        Z,
        K,
        X = (0, a.c)(179),
        {
          ref: U,
          toolbarRef: Q,
          composerElement: ee,
          comments: eh,
          hoveredCommentId: ef,
          onHoverComment: ep,
          onDismissRegionReveal: ev,
          regions: ex,
          contoursSrc: eb,
          assetResolver: ey,
          imageSize: eS,
          draftGuard: eM,
          onDirtyChange: ej,
          selection: eI,
          onSelectionChange: eP,
          onDeleteComment: eA,
          onSubmitComment: eT,
          viewport: e_,
        } = e,
        eR = (0, v.A)(),
        eL = (0, en.dz)(),
        ez = (0, el.I)(!!ex?.length),
        eH =
          ((t = ex),
          (n = eS),
          (i = (t ?? []).flatMap((e, t) => {
            let [l, a, i, r] = e.bbox
            return i <= l || r <= a || i > n.width || r > n.height
              ? []
              : [
                  {
                    id: String(t),
                    region: e,
                    kind: "text" === e.kind ? "preserved" : "object",
                    text: "text" === e.kind ? e.text : e.label,
                    x: l,
                    y: a,
                    width: i - l,
                    height: r - a,
                    rotation: 0,
                  },
                ]
          })),
          et()(
            i,
            (e) => "object" === e.kind,
            (e) => e.width * e.height,
          )),
        eO = ex?.length ? eb : void 0
      X[0] !== ey || X[1] !== eO ? ((r = { src: eO, resolver: ey }), (X[0] = ey), (X[1] = eO), (X[2] = r)) : (r = X[2])
      let { data: eF } = (0, g._U)(eC, r),
        { imageRect: eB, isInteracting: eY, isPanReady: eZ } = e_,
        eW = eY || eZ,
        [e$, eq] = (0, f.useState)(null),
        [eQ, eJ] = (0, ei.Xl)()
      ;(X[3] !== ep || X[4] !== eP
        ? ((o = (e) => {
            ;(eq(e), null == e && (eP(null), ep(null)))
          }),
          (X[3] = ep),
          (X[4] = eP),
          (X[5] = o))
        : (o = X[5]),
        X[6] !== eQ || X[7] !== o ? ((s = (0, eo.P)(eQ, o)), (X[6] = eQ), (X[7] = o), (X[8] = s)) : (s = X[8]))
      let e1 = s,
        [e0, e2] = (0, f.useState)(null),
        e3 = (0, f.useRef)(null),
        e5 = (0, f.useId)(),
        e4 = (0, f.useRef)(null),
        e6 = (0, f.useRef)(null),
        { fitImageRect: e7 } = e_,
        e8 = Math.max(1, eJ.width ?? (e7.width + 2 * e7.left) / eL),
        e9 = Math.max(1, eJ.height ?? (e7.height + 2 * e7.top) / eL)
      if (
        X[9] !== eh ||
        X[10] !== eB.height ||
        X[11] !== eB.left ||
        X[12] !== eB.top ||
        X[13] !== eB.width ||
        X[14] !== eI ||
        X[15] !== e8 ||
        X[16] !== e9 ||
        X[17] !== eL
      ) {
        let e
        ;((u = { width: e8, height: e9 }),
          (c = eI?.mode === "create" ? eI.comment.id : eI?.id),
          (d = eI?.mode === "create" || eI?.mode === "edit"),
          (h = eB.width / eL),
          (p = eB.height / eL))
        let t = []
        ;(X[24] !== eh || X[25] !== eI
          ? ((e = eI?.mode === "create" ? [...eh, eI.comment] : eh), (X[24] = eh), (X[25] = eI), (X[26] = e))
          : (e = X[26]),
          (x = e.map((e, n) => {
            let l = d && e.id === c ? eI.region : e.region,
              a = l && eU(l),
              i = a ? (0, W.rQ)(a) : { x: e.x, y: e.y },
              r = { left: eB.left / eL + i.x * h, top: eB.top / eL + i.y * p },
              o =
                r.left >= 0 &&
                r.left - (a?.width ?? 0) * h <= u.width &&
                r.top + (a?.height ?? 0) * p >= 0 &&
                r.top <= u.height,
              s = o ? (0, eu.U)(r, t, u) : r
            return (o && t.push(s), { comment: e, pin: s, visible: o, region: l, number: n + 1 })
          })),
          (X[9] = eh),
          (X[10] = eB.height),
          (X[11] = eB.left),
          (X[12] = eB.top),
          (X[13] = eB.width),
          (X[14] = eI),
          (X[15] = e8),
          (X[16] = e9),
          (X[17] = eL),
          (X[18] = c),
          (X[19] = d),
          (X[20] = u),
          (X[21] = h),
          (X[22] = p),
          (X[23] = x))
      } else ((c = X[18]), (d = X[19]), (u = X[20]), (h = X[21]), (p = X[22]), (x = X[23]))
      let te = x
      X[27] !== te || X[28] !== u.height || X[29] !== u.width || X[30] !== e_ || X[31] !== eL
        ? ((b = (e) => {
            let t = te.find((t) => {
              let { comment: n } = t
              return n.id === e
            })
            t &&
              !t.visible &&
              e_.adjustViewport?.(1, { x: (u.width / 2 - t.pin.left) * eL, y: (u.height / 2 - t.pin.top) * eL })
          }),
          (X[27] = te),
          (X[28] = u.height),
          (X[29] = u.width),
          (X[30] = e_),
          (X[31] = eL),
          (X[32] = b))
        : (b = X[32])
      let tt = b
      X[33] !== ev || X[34] !== eP
        ? ((C = (e, t) => {
            ;(ev?.(), eP({ mode: "create", comment: { id: crypto.randomUUID(), x: e, y: t, text: "" } }))
          }),
          (X[33] = ev),
          (X[34] = eP),
          (X[35] = C))
        : (C = X[35])
      let tn = C
      X[36] !== eh || X[37] !== ev || X[38] !== eP || X[39] !== tt
        ? ((y = (e, t) => {
            ;(ev?.(),
              tt(e),
              eP("edit" === t ? { mode: t, id: e, region: eh.find((t) => t.id === e)?.region } : { mode: t, id: e }))
          }),
          (X[36] = eh),
          (X[37] = ev),
          (X[38] = eP),
          (X[39] = tt),
          (X[40] = y))
        : (y = X[40])
      let tl = y
      X[41] !== eP ? ((w = () => eP(null)), (X[41] = eP), (X[42] = w)) : (w = X[42])
      let ta = w
      ;(X[43] !== e$ || X[44] !== ta || X[45] !== ev || X[46] !== tl || X[47] !== eI?.mode
        ? ((S = () => ({
            openComment: tl,
            onClearSelection: eI?.mode !== "view" ? void 0 : () => (ta(), !0),
            onViewportInteractionStart() {
              ;(ev?.(), (e6.current = null))
              let e = e4.current
              e && e$?.contains(e.ownerDocument.activeElement) && e.focus({ preventScroll: !0 })
            },
          })),
          (X[43] = e$),
          (X[44] = ta),
          (X[45] = ev),
          (X[46] = tl),
          (X[47] = eI?.mode),
          (X[48] = S))
        : (S = X[48]),
        (0, f.useImperativeHandle)(U, S),
        X[49] !== tn
          ? ((M = (e) => {
              let t = e.currentTarget.getBoundingClientRect()
              t.width > 0 &&
                t.height > 0 &&
                tn(
                  Math.min(1, Math.max(0, (e.clientX - t.left) / t.width)),
                  Math.min(1, Math.max(0, (e.clientY - t.top) / t.height)),
                )
            }),
            (X[49] = tn),
            (X[50] = M))
          : (M = X[50]))
      let ti = M
      X[51] !== c
        ? ((j = (e) => {
            let { comment: t } = e
            return t.id === c
          }),
          (X[51] = c),
          (X[52] = j))
        : (j = X[52])
      let tr = te.find(j),
        to = tr?.region,
        ts =
          null != ef && ef !== c
            ? eh.find((e) => {
                let { id: t } = e
                return t === ef
              })?.region
            : void 0,
        tc =
          to ??
          (d && tr
            ? (function (e, t, n, l, a) {
                for (let { id: i, region: r } of e) {
                  let e = l?.(i, t, n),
                    [o, s, c, d] = r.bbox
                  if (e ?? (t >= o && t < c && n >= s && n < d))
                    return {
                      kind: r.kind,
                      text: "text" === r.kind ? r.text : r.label,
                      bounds: [o / a.width, s / a.height, c / a.width, d / a.height],
                    }
                }
              })(eH, tr.comment.x * eS.width, tr.comment.y * eS.height, eF ?? void 0, eS)
            : void 0),
        td = tc && (0, ed.Fe)(eR, tc),
        tu = to ? td : void 0,
        tm =
          d && tc && td
            ? (0, l.jsx)(eG, {
                expanded: null != to,
                regionTitle: td,
                onToggle: () => {
                  let e = to ? void 0 : tc
                  ;(eP({ ...eI, region: e }), e?.kind === "text" && e3.current?.prefillTextRegion(e.text))
                },
              })
            : void 0
      X[53] !== e0 || X[54] !== ee || X[55] !== e$ || X[56] !== Q || X[57] !== eL
        ? ((I = { stage: e$, composerElement: ee, toolbarRef: Q, surface: e0, windowZoom: eL }),
          (X[53] = e0),
          (X[54] = ee),
          (X[55] = e$),
          (X[56] = Q),
          (X[57] = eL),
          (X[58] = I))
        : (I = X[58])
      let tg = (0, g._U)(tr && e$ ? ec.v6 : ec.ui, I),
        th = { width: u.width, height: u.height * (tg.composerTopFraction ?? 1) },
        tf = tg.toolbar
      X[59] !== eR.locale ? ((P = (0, ea.b)(eR.locale)), (X[59] = eR.locale), (X[60] = P)) : (P = X[60])
      let tp = "rtl" === P,
        tv = tf
          ? {
              left: (tf.left * u.width) / tf.stageWidth,
              right: (tf.right * u.width) / tf.stageWidth,
              top: (tf.top * u.height) / tf.stageHeight,
              bottom: Math.max(0, (tf.bottom * u.height) / tf.stageHeight - (u.height - th.height)),
            }
          : void 0,
        tx = tc && eU(tc)
      to && tx
        ? (E = (0, em.G)({
            bounds: { editorMinX: 8, editorMaxX: u.width - 8, editorMinY: 8, editorMaxY: th.height - 8 },
            target: {
              left: eB.left / eL + tx.x * h,
              top: eB.top / eL + tx.y * p,
              width: tx.width * h,
              height: tx.height * p,
            },
            isEditing: !1,
            createHeight: tg.contentHeight,
            rtl: tp,
            toolbar: tv,
          }))
        : tr &&
          (E = (function ({ pin: e, viewport: t, rtl: n, toolbar: l, contentHeight: a, preview: i = !1 }) {
            let r = Math.max(1, Math.min(i ? 320 : 336, t.width - 16)),
              o = Math.max(a, ew.tuv),
              s = i ? 24 : 20,
              c = Math.max(8, t.width - r - 8)
            function d(e) {
              let n = null != l && e < l.right && e + r > l.left
              return { top: 8 + (n ? l.top : 0), bottom: t.height - 8 - (n ? l.bottom : 0) }
            }
            let u = e.left - 27 - r,
              m = e.left + 27
            for (let t of n ? [u, m] : [m, u]) {
              let n = d(t)
              if (t >= 8 && t <= c && n.bottom - n.top >= o)
                return { left: t, width: r, top: Math.max(n.top, Math.min(e.top - s, n.bottom - o)) }
            }
            let g = Math.max(8, Math.min(n ? e.left - 15 : e.left + 15 - r, c)),
              h = d(g),
              f = e.top + 12,
              p = e.top - 12,
              v = h.bottom - Math.max(f, h.top),
              x = Math.min(p, h.bottom) - h.top,
              b = v >= o || v >= x,
              C = b ? v : x,
              y = Math.max(1, C >= ew.tuv ? C : h.bottom - h.top)
            return {
              left: g,
              top: Math.max(h.top, Math.min(b ? f : p - Math.min(o, y), h.bottom - Math.min(o, y))),
              width: r,
              ...(o > y ? { maxHeight: y, overflowY: "auto" } : {}),
            }
          })({ pin: tr.pin, viewport: th, rtl: tp, toolbar: tv, preview: !d, contentHeight: tg.contentHeight }))
      let tb = eB.left / eL,
        tC = eB.top / eL,
        ty = eB.width / eL,
        tw = eB.height / eL
      X[61] !== tb || X[62] !== tC || X[63] !== ty || X[64] !== tw || X[65] !== eL
        ? ((A = { zoom: eL, left: tb, top: tC, width: ty, height: tw }),
          (X[61] = tb),
          (X[62] = tC),
          (X[63] = ty),
          (X[64] = tw),
          (X[65] = eL),
          (X[66] = A))
        : (A = X[66])
      let tS = eW ? "grab" : eV
      ;(X[67] !== tS ? ((k = { cursor: tS }), (X[67] = tS), (X[68] = k)) : (k = X[68]),
        X[69] !== eR
          ? ((N = eR.formatMessage({ id: "imageSidePanel.commentSurface", defaultMessage: "Image comment surface" })),
            (X[69] = eR),
            (X[70] = N))
          : (N = X[70]),
        X[71] !== eY || X[72] !== tn
          ? ((T = (e) => {
              0 !== e.detail || eY || tn(0.5, 0.5)
            }),
            (X[71] = eY),
            (X[72] = tn),
            (X[73] = T))
          : (T = X[73]),
        X[74] !== eW
          ? ((_ = (e) => {
              e6.current =
                0 !== e.button || e.defaultPrevented || eW
                  ? null
                  : { pointerId: e.pointerId, clientX: e.clientX, clientY: e.clientY }
            }),
            (X[74] = eW),
            (X[75] = _))
          : (_ = X[75]),
        X[76] !== eW || X[77] !== ti
          ? ((R = (e) => {
              let t = e6.current
              ;((e6.current = null),
                t?.pointerId === e.pointerId &&
                  !e.defaultPrevented &&
                  !eW &&
                  8 >= Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) &&
                  ti(e))
            }),
            (X[76] = eW),
            (X[77] = ti),
            (X[78] = R))
          : (R = X[78]),
        X[79] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (e) => {
              let t = e6.current
              t && Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > 8 && (e6.current = null)
            }),
            (D = () => {
              e6.current = null
            }),
            (z = () => {
              e6.current = null
            }),
            (X[79] = L),
            (X[80] = D),
            (X[81] = z))
          : ((L = X[79]), (D = X[80]), (z = X[81])),
        X[82] !== k || X[83] !== N || X[84] !== T || X[85] !== _ || X[86] !== R
          ? ((H = (0, l.jsx)("button", {
              ref: e4,
              type: "button",
              className: "absolute inset-0 size-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              style: k,
              "data-sketch-comment": !0,
              "aria-label": N,
              onClick: T,
              onPointerDown: _,
              onPointerUp: R,
              onPointerMove: L,
              onPointerLeave: D,
              onPointerCancel: z,
            })),
            (X[82] = k),
            (X[83] = N),
            (X[84] = T),
            (X[85] = _),
            (X[86] = R),
            (X[87] = H))
          : (H = X[87]),
        X[88] !== eS || X[89] !== ev || X[90] !== ez || X[91] !== eH
          ? ((O =
              null != ev &&
              eH.length > 0 &&
              (0, l.jsx)(eg.A, { regions: eH, imageSize: eS, reducedMotion: ez, onFinish: ev })),
            (X[88] = eS),
            (X[89] = ev),
            (X[90] = ez),
            (X[91] = eH),
            (X[92] = O))
          : (O = X[92]))
      let tM =
        ts &&
        !eW &&
        (0, l.jsx)("div", {
          "aria-hidden": !0,
          className: "pointer-events-none absolute inset-0 opacity-60",
          children: (0, l.jsx)($.$I, {
            pageSize: { width: 1, height: 1 },
            rect: eU(ts),
            testId: "image-comment-region-hover-outline",
          }),
        })
      if (
        (X[93] !== tr || X[94] !== tc || X[95] !== tx || X[96] !== eR || X[97] !== ez || X[98] !== td || X[99] !== to
          ? ((F =
              tr &&
              tc &&
              tx &&
              (0, l.jsx)(
                "div",
                {
                  role: to ? "img" : void 0,
                  "aria-hidden": !to,
                  "aria-label": to
                    ? eR.formatMessage(
                        {
                          id: "imageSidePanel.regionComment.selectedBounds",
                          defaultMessage: "Selected region: {name}",
                        },
                        { name: td },
                      )
                    : void 0,
                  className: `pointer-events-none absolute ${ek}`,
                  style: {
                    left: `${100 * tx.x}%`,
                    top: `${100 * tx.y}%`,
                    width: `${100 * tx.width}%`,
                    height: `${100 * tx.height}%`,
                    transformOrigin: `${(100 * (tr.comment.x - tx.x)) / tx.width}% ${(100 * (tr.comment.y - tx.y)) / tx.height}%`,
                    transition: ez
                      ? void 0
                      : "transform var(--transition-duration-relaxed) var(--cubic-enter), opacity var(--transition-duration-basic)",
                  },
                  children: (0, l.jsx)($.$I, {
                    pageSize: tx,
                    rect: { x: 0, y: 0, width: tx.width, height: tx.height },
                    testId: "image-comment-region-outline",
                  }),
                },
                tr.comment.id,
              )),
            (X[93] = tr),
            (X[94] = tc),
            (X[95] = tx),
            (X[96] = eR),
            (X[97] = ez),
            (X[98] = td),
            (X[99] = to),
            (X[100] = F))
          : (F = X[100]),
        X[101] !== A || X[102] !== H || X[103] !== O || X[104] !== tM || X[105] !== F
          ? ((G = (0, l.jsxs)("div", { className: "absolute", style: A, children: [H, O, tM, F] })),
            (X[101] = A),
            (X[102] = H),
            (X[103] = O),
            (X[104] = tM),
            (X[105] = F),
            (X[106] = G))
          : (G = X[106]),
        X[107] !== eL ? ((B = { zoom: eL }), (X[107] = eL), (X[108] = B)) : (B = X[108]),
        X[109] !== c ||
          X[110] !== tc ||
          X[111] !== E ||
          X[112] !== ta ||
          X[113] !== eM?.lightbox ||
          X[114] !== d ||
          X[115] !== ef ||
          X[116] !== eR ||
          X[117] !== e5 ||
          X[118] !== te ||
          X[119] !== eA ||
          X[120] !== ep ||
          X[121] !== tl ||
          X[122] !== u.height ||
          X[123] !== u.width ||
          X[124] !== ez ||
          X[125] !== tt ||
          X[126] !== eI ||
          X[127] !== e2 ||
          X[128] !== tu)
      ) {
        let e
        ;(X[130] !== c ||
        X[131] !== tc ||
        X[132] !== E ||
        X[133] !== ta ||
        X[134] !== eM?.lightbox ||
        X[135] !== d ||
        X[136] !== ef ||
        X[137] !== eR ||
        X[138] !== e5 ||
        X[139] !== eA ||
        X[140] !== ep ||
        X[141] !== tl ||
        X[142] !== u.height ||
        X[143] !== u.width ||
        X[144] !== ez ||
        X[145] !== tt ||
        X[146] !== eI ||
        X[147] !== e2 ||
        X[148] !== tu
          ? ((e = (e) => {
              let { comment: t, pin: n, number: a, visible: i, region: r } = e,
                o = {
                  ...(i ? n : { left: u.width / 2, top: u.height / 2 }),
                  opacity: i ? void 0 : 0,
                  width: 30,
                  height: 30,
                },
                s = {
                  layout: c === t.id && !!tc && !ez && "position",
                  layoutDependency: r,
                  transition: { layout: { duration: 0.3, ease: er.Wu } },
                },
                g = (0, l.jsx)("span", {
                  className: (0, m.A)(
                    "popcorn-paged-annotation-marker-content group-hover:scale-105 group-aria-expanded:scale-105",
                    ef === t.id && "scale-105",
                  ),
                  style: { transformOrigin: "center" },
                  children: (0, l.jsx)(es.Y, { number: a }),
                })
              if (d && c === t.id)
                return (0, f.createElement)(
                  q.P.span,
                  {
                    ...s,
                    key: t.id,
                    "data-image-comment-draft-pin": !0,
                    "data-annotation-control": !0,
                    "data-testid": "image-region-comment-draft-pin",
                    className: "popcorn-paged-annotation-marker group [--cursor-interaction:pointer]",
                    style: { ...o, cursor: "var(--cursor-interaction)", pointerEvents: i ? "auto" : "none" },
                    onPointerDown: eX,
                  },
                  g,
                )
              let h = `${e5}-${a}`,
                p = `${h}-description`
              return (0, l.jsxs)(
                f.Fragment,
                {
                  children: [
                    (0, l.jsxs)(q.P.button, {
                      ...s,
                      id: h,
                      type: "button",
                      className:
                        "popcorn-paged-annotation-marker popcorn-paged-annotation-marker-interactive group rounded-[50%_50%_50%_3px] [--popcorn-paged-annotation-focus-ring:var(--gray-650)] [--popcorn-paged-annotation-interaction-cursor:var(--cursor-interaction)]",
                      style: { ...o, pointerEvents: i ? void 0 : "none" },
                      "data-paged-annotation-id": t.id,
                      "data-annotation-control": !0,
                      "aria-label": eR.formatMessage(
                        { id: "imageTextEditing.viewNumberedComment", defaultMessage: "View comment {number}" },
                        { number: a },
                      ),
                      "aria-describedby": p,
                      "aria-expanded": eI?.mode === "view" && c === t.id,
                      onFocus: () => {
                        ;(tt(t.id), eI?.mode === "view" && eI.id !== t.id && ta())
                      },
                      onPointerDown: eK,
                      onPointerEnter: (e) => {
                        r && "touch" !== e.pointerType && ep(t.id)
                      },
                      onPointerLeave: () => {
                        r && ep(null)
                      },
                      onClick: (e) => {
                        ;(e.preventDefault(), e.stopPropagation(), tl(t.id, "view"))
                      },
                      children: [g, (0, l.jsx)("span", { hidden: !0, id: p, children: t.text })],
                    }),
                    eI?.mode === "view" &&
                      i &&
                      c === t.id &&
                      E &&
                      (0, l.jsx)(eD, {
                        style: E,
                        onSurfaceChange: e2,
                        text: t.text,
                        target: tu,
                        number: a,
                        pinId: h,
                        lightboxOwnsDismissal: eM?.lightbox != null,
                        onEdit: () => tl(t.id, "edit"),
                        onDelete: () => {
                          ;(eA(t.id), ta())
                        },
                        onDismiss: ta,
                      }),
                  ],
                },
                t.id,
              )
            }),
            (X[130] = c),
            (X[131] = tc),
            (X[132] = E),
            (X[133] = ta),
            (X[134] = eM?.lightbox),
            (X[135] = d),
            (X[136] = ef),
            (X[137] = eR),
            (X[138] = e5),
            (X[139] = eA),
            (X[140] = ep),
            (X[141] = tl),
            (X[142] = u.height),
            (X[143] = u.width),
            (X[144] = ez),
            (X[145] = tt),
            (X[146] = eI),
            (X[147] = e2),
            (X[148] = tu),
            (X[149] = e))
          : (e = X[149]),
          (Y = te.map(e)),
          (X[109] = c),
          (X[110] = tc),
          (X[111] = E),
          (X[112] = ta),
          (X[113] = eM?.lightbox),
          (X[114] = d),
          (X[115] = ef),
          (X[116] = eR),
          (X[117] = e5),
          (X[118] = te),
          (X[119] = eA),
          (X[120] = ep),
          (X[121] = tl),
          (X[122] = u.height),
          (X[123] = u.width),
          (X[124] = ez),
          (X[125] = tt),
          (X[126] = eI),
          (X[127] = e2),
          (X[128] = tu),
          (X[129] = Y))
      } else Y = X[129]
      return (
        X[150] !== tr ||
        X[151] !== tc ||
        X[152] !== e0 ||
        X[153] !== E ||
        X[154] !== ta ||
        X[155] !== eM ||
        X[156] !== d ||
        X[157] !== e3 ||
        X[158] !== eZ ||
        X[159] !== ej ||
        X[160] !== eT ||
        X[161] !== tl ||
        X[162] !== ez ||
        X[163] !== to ||
        X[164] !== eI ||
        X[165] !== e2 ||
        X[166] !== tm ||
        X[167] !== tu
          ? ((V =
              d &&
              tr &&
              E &&
              (0, l.jsx)(
                eN,
                {
                  ref: e3,
                  targetControl: tm,
                  savedTargetChanged: "edit" === eI.mode && !J()(to, tr.comment.region),
                  style: E,
                  surface: e0,
                  onSurfaceChange: e2,
                  body: tr.comment.text,
                  target: tu,
                  animatePlacement: !ez && null != tc,
                  commentId: eI?.mode === "edit" ? tr.comment.id : void 0,
                  draftGuard: eM,
                  isPanReady: eZ,
                  onDirtyChange: ej,
                  onSave: (e, t) => {
                    let n = eT({
                      id: eI?.mode === "edit" ? tr.comment.id : void 0,
                      x: tr.comment.x,
                      y: tr.comment.y,
                      region: to,
                      text: e,
                    })
                    "preview" === t ? tl(n, "view") : ta()
                  },
                  onClose: () => {
                    eI?.mode === "edit" ? tl(tr.comment.id, "view") : ta()
                  },
                },
                tr.comment.id,
              )),
            (X[150] = tr),
            (X[151] = tc),
            (X[152] = e0),
            (X[153] = E),
            (X[154] = ta),
            (X[155] = eM),
            (X[156] = d),
            (X[157] = e3),
            (X[158] = eZ),
            (X[159] = ej),
            (X[160] = eT),
            (X[161] = tl),
            (X[162] = ez),
            (X[163] = to),
            (X[164] = eI),
            (X[165] = e2),
            (X[166] = tm),
            (X[167] = tu),
            (X[168] = V))
          : (V = X[168]),
        X[169] !== eY || X[170] !== e1 || X[171] !== B || X[172] !== Y || X[173] !== V
          ? ((Z = (0, l.jsxs)("div", {
              ref: e1,
              inert: eY,
              style: B,
              className: "pointer-events-none absolute inset-0 z-20 overflow-clip",
              children: [Y, V],
            })),
            (X[169] = eY),
            (X[170] = e1),
            (X[171] = B),
            (X[172] = Y),
            (X[173] = V),
            (X[174] = Z))
          : (Z = X[174]),
        X[175] !== eE || X[176] !== G || X[177] !== Z
          ? ((K = (0, l.jsxs)("div", { className: eE, children: [G, Z] })),
            (X[175] = eE),
            (X[176] = G),
            (X[177] = Z),
            (X[178] = K))
          : (K = X[178]),
        K
      )
    }
    function eK(e) {
      return e.stopPropagation()
    }
    function eX(e) {
      0 === e.button && e.preventDefault()
    }
    function eU({ bounds: [e, t, n, l] }) {
      return { x: e, y: t, width: n - e, height: l - t }
    }
    var eW = n("RSwQ"),
      e$ = n("urzV"),
      eq = n("jqMG"),
      eQ = n("px7L"),
      eJ = n("WhoN"),
      e1 = n("mdWu"),
      e0 = n("CBsD"),
      e2 = n("yGJW"),
      e3 = n("f4Vb"),
      e5 = n("Sd8U"),
      e4 = n("tSEg"),
      e6 = n("kfGJ"),
      e7 = n("hZax"),
      e8 = n("O666"),
      e9 = n("XXJV"),
      te = n("Yscs"),
      tt = n("bIvi"),
      tn = n("j9wQ"),
      tl = n("Oco2"),
      ta = n("YeQK"),
      ti = n("TwL3"),
      tr = n("xygx"),
      to = n("SUhA"),
      ts = n("QyRp"),
      tc = n("WLtw"),
      td = n("xG8A")
    function tu(e, t) {
      return e instanceof tc.kP
        ? "file_not_found" === e.errorCode
          ? (0, l.jsx)(x.A, {
              id: "imageSidePanel.imageUnavailable",
              defaultMessage: "This image is no longer available. Try uploading it again",
            })
          : (0, l.jsx)(x.A, {
              id: "imageSidePanel.imageDownloadFailed",
              defaultMessage: "Couldn\u2019t load this image. Please try again",
            })
        : (0, td.WS)(e, t)
    }
    function tm(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c = (0, a.c)(27),
        { ref: d, alt: u, comments: m, onCommentsChange: h, onDraftActiveChange: p, session: v, viewport: x } = e,
        b = (0, g.gh)(ep.u),
        { playback: y, gif: w } = v
      c[0] !== y ? ((t = () => y.getSnapshot().frameIndex), (c[0] = y), (c[1] = t)) : (t = c[1])
      let S = t,
        M = (0, f.useSyncExternalStore)(y.subscribe, S, S)
      if (c[2] !== m || c[3] !== M) {
        let e
        ;(c[5] !== M ? ((e = (e) => e.frameIndex === M), (c[5] = M), (c[6] = e)) : (e = c[6]),
          (n = m.filter(e).map(tg)),
          (c[2] = m),
          (c[3] = M),
          (c[4] = n))
      } else n = c[4]
      let j = w.frames[M]
      return (
        c[7] !== b
          ? ((i = (e) =>
              (0, ts.H)(
                b,
                "pin" === e
                  ? "CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_COMMENT_PIN_CLICKED"
                  : "CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_COMMENT_MARKER_CLICKED",
              )),
            (c[7] = b),
            (c[8] = i))
          : (i = c[8]),
        c[9] !== m || c[10] !== h
          ? ((r = (e) => {
              h(m.filter((t) => t.comment.id !== e))
            }),
            (c[9] = m),
            (c[10] = h),
            (c[11] = r))
          : (r = c[11]),
        c[12] !== m || c[13] !== M || c[14] !== h
          ? ((o = (e) => {
              let t = { frameIndex: M, comment: { ...e, id: e.id ?? (0, C.A)() } }
              h(null == e.id ? [...m, t] : m.map((n) => (n.comment.id === e.id ? t : n)))
            }),
            (c[12] = m),
            (c[13] = M),
            (c[14] = h),
            (c[15] = o))
          : (o = c[15]),
        c[16] !== u ||
        c[17] !== M ||
        c[18] !== p ||
        c[19] !== d ||
        c[20] !== n ||
        c[21] !== j.url ||
        c[22] !== i ||
        c[23] !== r ||
        c[24] !== o ||
        c[25] !== x
          ? ((s = (0, l.jsx)(
              X.D,
              {
                ref: d,
                alt: u,
                comments: n,
                src: j.url,
                viewport: x,
                onDraftActiveChange: p,
                onCommentActivate: i,
                onDeleteComment: r,
                onSubmitComment: o,
              },
              M,
            )),
            (c[16] = u),
            (c[17] = M),
            (c[18] = p),
            (c[19] = d),
            (c[20] = n),
            (c[21] = j.url),
            (c[22] = i),
            (c[23] = r),
            (c[24] = o),
            (c[25] = x),
            (c[26] = s))
          : (s = c[26]),
        s
      )
    }
    function tg(e) {
      return e.comment
    }
    var th = n("sHs0"),
      tf = n("iRMi"),
      tp = n("Qgfj"),
      tv = n("Wefw"),
      tx = n("rmk3"),
      tb = n("ts3W"),
      tC = n("aepO"),
      ty = n("TPR0"),
      tw = n("nrqp"),
      tS = n("I0AH"),
      tM = n("rlbh")
    function tj(e) {
      let t,
        n = (0, a.c)(2)
      return (n[0] !== e ? ((t = (0, l.jsx)(tP, { ...e })), (n[0] = e), (n[1] = t)) : (t = n[1]), t)
    }
    function tI(e) {
      let t,
        n = (0, a.c)(2)
      return (n[0] !== e ? ((t = (0, l.jsx)(tP, { ...e })), (n[0] = e), (n[1] = t)) : (t = n[1]), t)
    }
    function tP(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d,
        u,
        g,
        h,
        f,
        p,
        b,
        C,
        y,
        w,
        S,
        M,
        j,
        I,
        P,
        E,
        A,
        k,
        N,
        T,
        _,
        R,
        L,
        O = (0, a.c)(104),
        F = (0, v.A)(),
        G = "gif" in e ? e : void 0,
        { editControls: B } = e,
        Y = "preview" in e || e.editControls?.disabled,
        V = "gif" in e ? e.gif.frames.length : e.preview.length,
        Z = "gif" in e ? e.playback.speed : e.speed,
        K = G?.playback.frameIndex ?? 0,
        X = G?.playback.playing ?? !0
      O[0] !== X || O[1] !== G
        ? ((t = () =>
            G?.onInteraction?.(
              X ? "CHATGPT_IMAGEGEN_GIF_ACTION_PAUSE_CLICKED" : "CHATGPT_IMAGEGEN_GIF_ACTION_PLAY_CLICKED",
            )),
          (O[0] = X),
          (O[1] = G),
          (O[2] = t))
        : (t = O[2])
      let U = t
      O[3] !== F || O[4] !== X
        ? ((n = X
            ? F.formatMessage({ id: "gifEditor.pause", defaultMessage: "Pause GIF" })
            : F.formatMessage({ id: "gifEditor.play", defaultMessage: "Play GIF" })),
          (O[3] = F),
          (O[4] = X),
          (O[5] = n))
        : (n = O[5])
      let W = n,
        $ = null == G,
        q = null == G,
        Q = B?.active || Y
      ;(O[6] !== U || O[7] !== X || O[8] !== G
        ? ((i = () => {
            ;(U(), G?.onPlayingChange(!X))
          }),
          (O[6] = U),
          (O[7] = X),
          (O[8] = G),
          (O[9] = i))
        : (i = O[9]),
        O[10] !== X
          ? ((r = X ? (0, l.jsx)(z.I, { asset: tw.I }) : (0, l.jsx)(H.Tv9, {})), (O[10] = X), (O[11] = r))
          : (r = O[11]),
        O[12] !== W || O[13] !== Q || O[14] !== i || O[15] !== r
          ? ((s = (0, l.jsx)(D.$, {
              "aria-label": W,
              color: "primary",
              disabled: Q,
              size: "inputControl",
              radius: "full",
              uniform: !0,
              onClick: i,
              children: r,
            })),
            (O[12] = W),
            (O[13] = Q),
            (O[14] = i),
            (O[15] = r),
            (O[16] = s))
          : (s = O[16]),
        O[17] !== W || O[18] !== s
          ? ((c = (0, l.jsx)(o.m, { content: W, children: s })), (O[17] = W), (O[18] = s), (O[19] = c))
          : (c = O[19]))
      let J = Y ? -1 : 0
      O[20] !== F
        ? ((d = F.formatMessage({ id: "gifEditor.frames", defaultMessage: "GIF frames" })), (O[20] = F), (O[21] = d))
        : (d = O[21])
      let ee = K + 1
      if (
        (O[22] !== V || O[23] !== K || O[24] !== F
          ? ((u = F.formatMessage(
              { id: "gifEditor.framePosition", defaultMessage: "Frame {current} of {total}" },
              { current: K + 1, total: V },
            )),
            (O[22] = V),
            (O[23] = K),
            (O[24] = F),
            (O[25] = u))
          : (u = O[25]),
        O[26] !== Y || O[27] !== V || O[28] !== G
          ? ((g = (e) => {
              if (Y) return
              let t = e.currentTarget.getBoundingClientRect(),
                n = (e.clientX - t.left) / t.width
              ;(G?.onScrubbingChange(!0), G?.onSeek(Math.max(0, Math.min(V - 1, Math.floor(n * V)))))
            }),
            (h = (e) => {
              if ((e.stopPropagation(), Y)) return
              ;(e.currentTarget.focus(),
                G?.onInteraction?.("CHATGPT_IMAGEGEN_GIF_ACTION_TIMELINE_SELECTED"),
                G?.onPlayingChange(!1))
              let t = e.currentTarget.getBoundingClientRect()
              G?.onSeek(Math.max(0, Math.min(V - 1, Math.floor(((e.clientX - t.left) / t.width) * V))))
            }),
            (O[26] = Y),
            (O[27] = V),
            (O[28] = G),
            (O[29] = g),
            (O[30] = h))
          : ((g = O[29]), (h = O[30])),
        O[31] !== G
          ? ((f = () => G?.onScrubbingChange(!1)),
            (p = () => G?.onScrubbingChange(!1)),
            (O[31] = G),
            (O[32] = f),
            (O[33] = p))
          : ((f = O[32]), (p = O[33])),
        O[34] !== Y || O[35] !== B?.active || O[36] !== V || O[37] !== K || O[38] !== U || O[39] !== X || O[40] !== G
          ? ((b = (e) => {
              if (Y) return
              let t = K
              if ("ArrowLeft" === e.key) t--
              else if ("ArrowRight" === e.key) t++
              else if ("Home" === e.key) t = 0
              else if ("End" === e.key) t = V - 1
              else {
                if (" " !== e.key) return
                ;(e.preventDefault(), e.stopPropagation(), B?.active || (U(), G?.onPlayingChange(!X)))
                return
              }
              ;(e.preventDefault(),
                e.stopPropagation(),
                G?.onInteraction?.("CHATGPT_IMAGEGEN_GIF_ACTION_TIMELINE_SELECTED"),
                G?.onPlayingChange(!1),
                G?.onSeek(Math.max(0, Math.min(V - 1, t))))
            }),
            (O[34] = Y),
            (O[35] = B?.active),
            (O[36] = V),
            (O[37] = K),
            (O[38] = U),
            (O[39] = X),
            (O[40] = G),
            (O[41] = b))
          : (b = O[41]),
        O[42] !== V || O[43] !== e)
      ) {
        let t
        ;(O[45] !== e
          ? ((t = (t) => {
              let n = "preview" in e ? e.preview[t] : e.gif.frames[t].url
              return (0, l.jsx)(
                "span",
                {
                  className: (0, m.A)("h-full min-w-0 flex-1", null == n && "bg-text/10 motion-safe:animate-pulse"),
                  children:
                    null != n &&
                    (0, l.jsx)("img", { src: n, alt: "", draggable: !1, className: "size-full object-cover" }),
                },
                t,
              )
            }),
            (O[45] = e),
            (O[46] = t))
          : (t = O[46]),
          (C = (0, ty.Kp)(V).map(t)),
          (O[42] = V),
          (O[43] = e),
          (O[44] = C))
      } else C = O[44]
      let et = `${((K + 0.5) / V) * 100}%`
      ;(O[47] !== et
        ? ((y = (0, l.jsx)("span", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-blue",
            style: { left: et },
          })),
          (O[47] = et),
          (O[48] = y))
        : (y = O[48]),
        O[49] !== Y ||
        O[50] !== V ||
        O[51] !== d ||
        O[52] !== ee ||
        O[53] !== u ||
        O[54] !== g ||
        O[55] !== h ||
        O[56] !== f ||
        O[57] !== p ||
        O[58] !== b ||
        O[59] !== C ||
        O[60] !== y ||
        O[61] !== J
          ? ((w = (0, l.jsxs)("div", {
              className:
                "relative flex h-10 w-87.5 min-w-0 cursor-interaction overflow-hidden rounded-lg select-none focus:outline focus:outline-2 focus:outline-text",
              role: "slider",
              tabIndex: J,
              "aria-disabled": Y,
              "aria-label": d,
              "aria-valuemin": 1,
              "aria-valuemax": V,
              "aria-valuenow": ee,
              "aria-valuetext": u,
              onPointerMove: g,
              onPointerDown: h,
              onPointerLeave: f,
              onPointerCancel: p,
              onKeyDown: b,
              children: [C, y],
            })),
            (O[49] = Y),
            (O[50] = V),
            (O[51] = d),
            (O[52] = ee),
            (O[53] = u),
            (O[54] = g),
            (O[55] = h),
            (O[56] = f),
            (O[57] = p),
            (O[58] = b),
            (O[59] = C),
            (O[60] = y),
            (O[61] = J),
            (O[62] = w))
          : (w = O[62]))
      let en = e.availableSpeeds,
        el = G?.speedDisabled || B?.active || Y
      ;(O[63] !== G
        ? ((S = () => G?.onInteraction?.("CHATGPT_IMAGEGEN_GIF_ACTION_SPEED_SELECTOR_CLICKED")),
          (M = (e) => {
            ;(G?.onInteraction?.("CHATGPT_IMAGEGEN_GIF_ACTION_SPEED_SELECTED", e), G?.onSpeedChange(e))
          }),
          (O[63] = G),
          (O[64] = S),
          (O[65] = M))
        : ((S = O[64]), (M = O[65])),
        O[66] !== F
          ? ((j = F.formatMessage({ id: "gifEditor.speed", defaultMessage: "Playback speed" })),
            (O[66] = F),
            (O[67] = j))
          : (j = O[67]))
      let ea = G?.speedDisabled || B?.active || Y,
        ei = String(Z).length > 3 && "text-xs"
      return (
        O[68] !== ei ? ((I = (0, m.A)("tabular-nums", ei)), (O[68] = ei), (O[69] = I)) : (I = O[69]),
        O[70] !== F || O[71] !== Z ? ((P = F.formatNumber(Z)), (O[70] = F), (O[71] = Z), (O[72] = P)) : (P = O[72]),
        O[73] !== P
          ? ((E = (0, l.jsx)(x.A, { id: "gifEditor.speedValue", defaultMessage: "{speed}\xd7", values: { speed: P } })),
            (O[73] = P),
            (O[74] = E))
          : (E = O[74]),
        O[75] !== I || O[76] !== E
          ? ((A = (0, l.jsx)("span", { className: I, children: E })), (O[75] = I), (O[76] = E), (O[77] = A))
          : (A = O[77]),
        O[78] !== j || O[79] !== ea || O[80] !== A
          ? ((k = (0, l.jsx)(D.$, {
              "aria-label": j,
              color: "ghostSecondary",
              disabled: ea,
              size: "iconTouch",
              radius: "full",
              children: A,
            })),
            (O[78] = j),
            (O[79] = ea),
            (O[80] = A),
            (O[81] = k))
          : (k = O[81]),
        O[82] !== e.availableSpeeds || O[83] !== Z || O[84] !== el || O[85] !== S || O[86] !== M || O[87] !== k
          ? ((N = (0, l.jsx)(tM.R, {
              speed: Z,
              availableSpeeds: en,
              disabled: el,
              onOpen: S,
              onSpeedChange: M,
              triggerButton: k,
            })),
            (O[82] = e.availableSpeeds),
            (O[83] = Z),
            (O[84] = el),
            (O[85] = S),
            (O[86] = M),
            (O[87] = k),
            (O[88] = N))
          : (N = O[88]),
        O[89] !== Y || O[90] !== B || O[91] !== G
          ? ((T =
              null != B
                ? (0, l.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, l.jsx)(D.$, {
                        "aria-pressed": B.active,
                        color: B.active ? "secondary" : "ghostSecondary",
                        disabled: Y,
                        size: "dialog",
                        radius: "full",
                        onClick: () => {
                          ;(G?.onInteraction?.("CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_COMMENT_CLICKED"),
                            G?.editControls?.onEdit())
                        },
                        children: (0, l.jsx)(x.A, { id: "gifEditor.edit", defaultMessage: "Edit" }),
                      }),
                      B.commentCount > 0
                        ? (0, l.jsx)(D.$, {
                            color: "primary",
                            disabled: Y,
                            size: "dialog",
                            radius: "full",
                            onClick: () => {
                              ;(G?.onInteraction?.("CHATGPT_IMAGEGEN_GIF_ACTION_COMMENTS_SUBMITTED"),
                                G?.editControls?.onSubmit())
                            },
                            children: (0, l.jsx)(x.A, {
                              id: "gifEditor.sendComments",
                              defaultMessage: "Send ({count})",
                              values: { count: B.commentCount },
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (O[89] = Y),
            (O[90] = B),
            (O[91] = G),
            (O[92] = T))
          : (T = O[92]),
        O[93] !== N || O[94] !== T
          ? ((_ = (0, l.jsxs)("div", { className: "flex shrink-0 items-center", children: [N, T] })),
            (O[93] = N),
            (O[94] = T),
            (O[95] = _))
          : (_ = O[95]),
        O[96] !== w || O[97] !== _ || O[98] !== c
          ? ((R = (0, l.jsxs)(tS.b, { variant: "playback", children: [c, w, _] })),
            (O[96] = w),
            (O[97] = _),
            (O[98] = c),
            (O[99] = R))
          : (R = O[99]),
        O[100] !== $ || O[101] !== q || O[102] !== R
          ? ((L = (0, l.jsx)("div", {
              className: "pointer-events-auto max-w-full min-w-0",
              inert: $,
              "aria-busy": q,
              children: R,
            })),
            (O[100] = $),
            (O[101] = q),
            (O[102] = R),
            (O[103] = L))
          : (L = O[103]),
        L
      )
    }
    function tE(e) {
      let t,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        m,
        h = (0, a.c)(36),
        p = (0, g.gh)(ep.u)
      h[0] !== e.editControls || h[1] !== e.initialSpeed
        ? ((t = (t) => {
            ;(t.playback.setSpeed(e.initialSpeed ?? t.playback.getSnapshot().speed),
              e.editControls?.active && (t.playback.setPlaying(!1), e.editControls.onEdit(t)))
          }),
          (h[0] = e.editControls),
          (h[1] = e.initialSpeed),
          (h[2] = t))
        : (t = h[2])
      let v = (0, tt.K)(t)
      h[3] !== v || h[4] !== e.downloadSrc || h[5] !== e.loadOriginal
        ? ((i = () => {
            var t
            let l, a, i, r, o, s
            return (
              (t =
                e.loadOriginal ??
                (async (t) => {
                  let n = await (0, e$.M2)(e.downloadSrc, { signal: t })
                  if (null == n) throw Error("GIF download unavailable")
                  return n.blob
                })),
              (a = { status: "loading" }),
              (i = null),
              (r = new Set()),
              (o = (e) => {
                for (let t of ((a = e), r)) t()
              }),
              (s = () => {
                let e = new AbortController()
                ;((i = e),
                  o({ status: "loading" }),
                  (async () => {
                    var a
                    let i,
                      r,
                      s,
                      c,
                      d,
                      u,
                      m,
                      g,
                      h,
                      f,
                      p,
                      x,
                      b,
                      C = await t(e.signal),
                      y = await (0, ty.P_)(C, {
                        signal: e.signal,
                        createWorker:
                          "u" < typeof Worker
                            ? void 0
                            : () =>
                                new Worker(
                                  new URL(n.p + n.u(675773), n.b),
                                  Object.assign({}, { type: "module", name: "gif-frame-decoder" }, { type: "module" }),
                                ),
                        onPreview: (e) => o({ status: "loading", preview: e }),
                      })
                    if (e.signal.aborted) return void y?.dispose()
                    if (null == y) return void o({ status: "unavailable" })
                    let w =
                      ((a = y.frames.map((e) => e.durationMs)),
                      (i = { frameIndex: 0, playing: !0, speed: 1, scrubbing: !1 }),
                      (s = (r = a.map((e) => (0, ty.Yb)(e, 1))).reduce((e, t) => e + t, 0)),
                      (c = 0),
                      (d = null),
                      (u = null),
                      (m = new Set()),
                      (g = () => {
                        if (null != d) {
                          let e = performance.now()
                          ;((c = (c + e - d) % s), (d = e))
                        }
                      }),
                      (h = () => {
                        let e = 0
                        for (let t = 0; t < r.length; t++) if (((e += r[t]), c < e)) return t
                        return 0
                      }),
                      (f = () => {
                        for (let e of m) e()
                      }),
                      (p = () => {
                        ;((u = null), g())
                        let e = h()
                        ;(i.frameIndex !== e && ((i = { ...i, frameIndex: e }), f()), x())
                      }),
                      (x = () => {
                        let e = m.size > 0 && i.playing && !i.scrubbing && r.length > 1
                        e && null == u
                          ? ((d = d ?? performance.now()), (u = requestAnimationFrame(p)))
                          : e || (null != u && (cancelAnimationFrame(u), (u = null)), (d = null))
                      }),
                      (b = (e) => {
                        ;((i = { ...i, frameIndex: h(), ...e }), x(), f())
                      }),
                      {
                        getSnapshot: () => i,
                        subscribe: (e) => (
                          m.add(e),
                          x(),
                          () => {
                            ;(g(), m.delete(e), x())
                          }
                        ),
                        setPlaying: (e) => {
                          ;(g(), b({ playing: e }))
                        },
                        setScrubbing: (e) => {
                          ;(g(), b({ scrubbing: e }))
                        },
                        seek: (e) => {
                          Number.isInteger(e) &&
                            null != r[e] &&
                            (g(), (c = r.slice(0, e).reduce((e, t) => e + t, 0)), b({ frameIndex: e }))
                        },
                        setSpeed: (e) => {
                          if (!Number.isFinite(e) || e <= 0) return
                          g()
                          let t = h(),
                            n = r.slice(0, t).reduce((e, t) => e + t, 0),
                            l = (c - n) / r[t]
                          ;((s = (r = a.map((t) => (0, ty.Yb)(t, e))).reduce((e, t) => e + t, 0)),
                            (c = r.slice(0, t).reduce((e, t) => e + t, 0) + l * r[t]),
                            b({ speed: e, frameIndex: t }))
                        },
                      })
                    null != l && (w.setSpeed(l.speed), w.seek(l.frameIndex), w.setPlaying(l.playing))
                    let S = { status: "ready", blob: C, gif: y, playback: w }
                    ;(v?.(S), o(S))
                  })().catch(() => {
                    e.signal.aborted || o({ status: "error" })
                  }))
              }),
              {
                getSnapshot: () => a,
                subscribe: (e) => (
                  r.add(e),
                  1 === r.size && s(),
                  () => {
                    ;(r.delete(e),
                      0 === r.size &&
                        (i?.abort(),
                        "ready" === a.status && ((l = a.playback.getSnapshot()), a.gif.dispose()),
                        (a = { status: "loading" })))
                  }
                ),
                retry: () => {
                  "error" === a.status && s()
                },
              }
            )
          }),
          (h[3] = v),
          (h[4] = e.downloadSrc),
          (h[5] = e.loadOriginal),
          (h[6] = i))
        : (i = h[6])
      let [b] = (0, f.useState)(i),
        C = (0, f.useRef)(null)
      h[7] !== e
        ? ((r = () => {
            if (!1 === e.contextMenuEnabled) return []
            let t = e.getImageContextMenuItems?.() ?? [],
              n = C.current?.()
            return null == n ? t : [...t.filter(tk).map(tA), ...n]
          }),
          (h[7] = e),
          (h[8] = r))
        : (r = h[8])
      let y = (0, tt.K)(r),
        w = (0, f.useSyncExternalStore)(b.subscribe, b.getSnapshot, b.getSnapshot),
        S = !1 === e.contextMenuEnabled || "ready" !== w.status
      return (
        h[9] !== e.getImageContextMenuItems || h[10] !== e.imageRef || h[11] !== w.status
          ? ((o = (t) => {
              ;(("ready" !== w.status && null == e.getImageContextMenuItems) || t.target !== e.imageRef.current) &&
                t.stopPropagation()
            }),
            (h[9] = e.getImageContextMenuItems),
            (h[10] = e.imageRef),
            (h[11] = w.status),
            (h[12] = o))
          : (o = h[12]),
        h[13] !== e.children || h[14] !== o
          ? ((s = (0, l.jsx)("div", {
              className: "contents",
              children: (0, l.jsx)("div", { className: "contents", onContextMenu: o, children: e.children }),
            })),
            (h[13] = e.children),
            (h[14] = o),
            (h[15] = s))
          : (s = h[15]),
        h[16] !== y || h[17] !== S || h[18] !== s
          ? ((c = (0, l.jsx)(tx.t, { getItems: y, preserveBrowserContextMenu: S, children: s })),
            (h[16] = y),
            (h[17] = S),
            (h[18] = s),
            (h[19] = c))
          : (c = h[19]),
        h[20] !== e.availableSpeeds ||
        h[21] !== e.editControls ||
        h[22] !== e.initialSpeed ||
        h[23] !== e.renderToolbar ||
        h[24] !== w.preview ||
        h[25] !== w.status
          ? ((d =
              "loading" === w.status &&
              null != w.preview &&
              e.renderToolbar(
                (0, l.jsx)(tI, {
                  preview: w.preview,
                  speed: e.initialSpeed ?? 1,
                  availableSpeeds: e.availableSpeeds,
                  editControls: e.editControls,
                }),
              )),
            (h[20] = e.availableSpeeds),
            (h[21] = e.editControls),
            (h[22] = e.initialSpeed),
            (h[23] = e.renderToolbar),
            (h[24] = w.preview),
            (h[25] = w.status),
            (h[26] = d))
          : (d = h[26]),
        h[27] !== e || h[28] !== p || h[29] !== b || h[30] !== w
          ? ((u =
              "ready" === w.status
                ? (0, l.jsx)(tN, { ...e, menuRef: C, session: w })
                : "error" === w.status &&
                  e.renderToolbar(
                    (0, l.jsx)(D.$, {
                      color: "secondary",
                      onClick: () => {
                        ;((0, ts.H)(p, "CHATGPT_IMAGEGEN_GIF_ACTION_RETRY_CLICKED"), b.retry())
                      },
                      children: (0, l.jsx)(x.A, {
                        id: "gifEditor.retry",
                        defaultMessage: "Retry loading GIF controls",
                      }),
                    }),
                  )),
            (h[27] = e),
            (h[28] = p),
            (h[29] = b),
            (h[30] = w),
            (h[31] = u))
          : (u = h[31]),
        h[32] !== c || h[33] !== d || h[34] !== u
          ? ((m = (0, l.jsxs)(l.Fragment, { children: [c, d, u] })), (h[32] = c), (h[33] = d), (h[34] = u), (h[35] = m))
          : (m = h[35]),
        m
      )
    }
    function tA(e) {
      return "copy-image-address" === e.id ? { ...e, icon: H.ibM } : e
    }
    function tk(e) {
      return "download-a-copy" !== e.id && "open-image-in-new-tab" !== e.id
    }
    function tN(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        m,
        h,
        p,
        x,
        b,
        C,
        y,
        w,
        S,
        M = (0, a.c)(71),
        {
          ref: j,
          src: I,
          downloadFilename: P,
          downloadTitle: E,
          imageRef: A,
          renderToolbar: k,
          editControls: N,
          onContextMenuDownload: T,
          onDownloaded: _,
          onDownloadClick: R,
          onSpeedChange: L,
          loadExport: D,
          initialSpeed: z,
          availableSpeeds: O,
          session: G,
          menuRef: B,
        } = e
      M[0] !== O ? ((t = void 0 === O ? [1] : O), (M[0] = O), (M[1] = t)) : (t = M[1])
      let Y = t,
        V = (0, g.gh)(ep.u),
        Z = (0, v.A)(),
        { gif: K, blob: X, playback: U } = G
      ;(M[2] !== z || M[3] !== U
        ? ((n = () => {
            null != z && U.setSpeed(z)
          }),
          (i = [z, U]),
          (M[2] = z),
          (M[3] = U),
          (M[4] = n),
          (M[5] = i))
        : ((n = M[4]), (i = M[5])),
        (0, f.useLayoutEffect)(n, i))
      let [W, $] = (0, f.useState)(!1)
      M[6] !== Y || M[7] !== Z || M[8] !== L || M[9] !== U
        ? ((r = async (e) => {
            if (null != L && Y.includes(e)) {
              $(!0)
              try {
                ;(await L(e)) && U.setSpeed(e)
              } catch {
                ;(0, F.RB)().danger(
                  Z.formatMessage({
                    id: "gifEditor.speedChangeFailed",
                    defaultMessage: "Couldn\u2019t change GIF speed. Try again",
                  }),
                  { errorAnalytics: { toastId: "gifEditor.speedChangeFailed" } },
                )
              }
              $(!1)
            }
          }),
          (M[6] = Y),
          (M[7] = Z),
          (M[8] = L),
          (M[9] = U),
          (M[10] = r))
        : (r = M[10])
      let q = r,
        Q = (0, f.useSyncExternalStore)(U.subscribe, U.getSnapshot, U.getSnapshot),
        J = K.frames[Q.frameIndex]
      ;(M[11] !== J.url || M[12] !== A || M[13] !== I
        ? ((o = () => {
            let e = A.current
            if (null != e)
              return (
                (e.src = J.url),
                () => {
                  e.src = I
                }
              )
          }),
          (s = [A, J.url, I]),
          (M[11] = J.url),
          (M[12] = A),
          (M[13] = I),
          (M[14] = o),
          (M[15] = s))
        : ((o = M[14]), (s = M[15])),
        (0, f.useLayoutEffect)(o, s))
      let ee = t_
      M[16] !== P || M[17] !== E || M[18] !== Z || M[19] !== _
        ? ((c = async (e, t, n) => {
            ;(await (0, e$.er)({
              downloadSrc: e,
              suggestedFilename: (0, e$.lO)(Z, t, { filename: P, title: E, gifSpeed: void 0 === n ? 1 : n }),
              onDownloaded: _,
            })) || ee()
          }),
          (M[16] = P),
          (M[17] = E),
          (M[18] = Z),
          (M[19] = _),
          (M[20] = c))
        : (c = M[20])
      let et = c
      M[21] !== X || M[22] !== D || M[23] !== R || M[24] !== U || M[25] !== et
        ? ((d = async () => {
            R?.()
            try {
              let e = U.getSnapshot().speed
              if (1 !== e && null == D) return void ee()
              await et(await (D?.(e) ?? X), "gif", e)
            } catch {
              ee()
            }
          }),
          (M[21] = X),
          (M[22] = D),
          (M[23] = R),
          (M[24] = U),
          (M[25] = et),
          (M[26] = d))
        : (d = M[26])
      let en = d
      ;(M[27] !== en || M[28] !== G
        ? ((u = () => ({ download: en, getSession: () => G })), (M[27] = en), (M[28] = G), (M[29] = u))
        : (u = M[29]),
        (0, f.useImperativeHandle)(j, u),
        M[30] !== V
          ? ((m = () => {
              ;(0, tv.l)(V, {
                action: tf.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE,
                surface: tf.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU,
              })
            }),
            (M[30] = V),
            (M[31] = m))
          : (m = M[31]))
      let el = m
      M[32] !== X ||
      M[33] !== en ||
      M[34] !== K.frames ||
      M[35] !== el ||
      M[36] !== T ||
      M[37] !== R ||
      M[38] !== U ||
      M[39] !== et ||
      M[40] !== V ||
      M[41] !== Q.speed
        ? ((h = () => {
            U.setPlaying(!1)
            let e = K.frames[U.getSnapshot().frameIndex],
              t = []
            return (
              (0, tb.p)() &&
                t.push({
                  id: "copy-frame",
                  message: (0, tp.zR)({ id: "gifEditor.copyFrame", defaultMessage: "Copy frame" }),
                  icon: H.R3B,
                  onSelect: () => {
                    ;((0, ts.H)(V, "CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_COPY_CLICKED", "viewer", Q.speed),
                      (0, tC.lW)({ "image/png": e.blob }).then(tT))
                  },
                }),
              t.push(
                {
                  id: "download-frame",
                  message: (0, tp.zR)({ id: "gifEditor.downloadFrame", defaultMessage: "Download frame" }),
                  icon: H.MxM,
                  onSelect: () => {
                    ;((0, ts.H)(V, "CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_DOWNLOAD_CLICKED", "viewer", Q.speed),
                      T?.(),
                      R?.(),
                      el(),
                      et(e.blob, "png"))
                  },
                },
                {
                  id: "download-gif",
                  message: (0, tp.zR)({ id: "gifEditor.downloadGif", defaultMessage: "Download GIF" }),
                  icon: H.MxM,
                  onSelect: () => {
                    ;((0, ts.H)(V, "CHATGPT_IMAGEGEN_GIF_ACTION_ANIMATION_DOWNLOAD_CLICKED", "viewer", Q.speed),
                      T?.(),
                      el(),
                      en())
                  },
                },
                ...(1 === Q.speed
                  ? []
                  : [
                      {
                        id: "download-original-gif",
                        message: (0, tp.zR)({
                          id: "gifEditor.downloadOriginal",
                          defaultMessage: "Download original GIF",
                        }),
                        icon: H.MxM,
                        onSelect: () => {
                          ;((0, ts.H)(V, "CHATGPT_IMAGEGEN_GIF_ACTION_ORIGINAL_DOWNLOAD_CLICKED", "viewer", Q.speed),
                            T?.(),
                            R?.(),
                            el(),
                            et(X, "gif"))
                        },
                      },
                    ]),
              ),
              t
            )
          }),
          (M[32] = X),
          (M[33] = en),
          (M[34] = K.frames),
          (M[35] = el),
          (M[36] = T),
          (M[37] = R),
          (M[38] = U),
          (M[39] = et),
          (M[40] = V),
          (M[41] = Q.speed),
          (M[42] = h))
        : (h = M[42])
      let ea = h
      return (
        M[43] !== ea ? ((p = () => ea), (M[43] = ea), (M[44] = p)) : (p = M[44]),
        (0, f.useImperativeHandle)(B, p),
        M[45] !== N || M[46] !== U || M[47] !== G || M[48] !== Q.frameIndex
          ? ((x =
              null == N
                ? void 0
                : {
                    ...N,
                    onEdit: () => {
                      ;(U.setPlaying(!1), U.seek(Q.frameIndex), N.onEdit(G))
                    },
                  }),
            (M[45] = N),
            (M[46] = U),
            (M[47] = G),
            (M[48] = Q.frameIndex),
            (M[49] = x))
          : (x = M[49]),
        M[50] !== V || M[51] !== Q.speed
          ? ((b = (e, t) => (0, ts.H)(V, e, "viewer", t ?? Q.speed)), (M[50] = V), (M[51] = Q.speed), (M[52] = b))
          : (b = M[52]),
        M[53] !== q ? ((C = (e) => void q(e)), (M[53] = q), (M[54] = C)) : (C = M[54]),
        M[55] !== Y ||
        M[56] !== K ||
        M[57] !== W ||
        M[58] !== U.seek ||
        M[59] !== U.setPlaying ||
        M[60] !== U.setScrubbing ||
        M[61] !== Q ||
        M[62] !== x ||
        M[63] !== b ||
        M[64] !== C
          ? ((y = (0, l.jsx)(tj, {
              gif: K,
              playback: Q,
              editControls: x,
              onPlayingChange: U.setPlaying,
              onInteraction: b,
              speedDisabled: W,
              availableSpeeds: Y,
              onSpeedChange: C,
              onSeek: U.seek,
              onScrubbingChange: U.setScrubbing,
            })),
            (M[55] = Y),
            (M[56] = K),
            (M[57] = W),
            (M[58] = U.seek),
            (M[59] = U.setPlaying),
            (M[60] = U.setScrubbing),
            (M[61] = Q),
            (M[62] = x),
            (M[63] = b),
            (M[64] = C),
            (M[65] = y))
          : (y = M[65]),
        M[66] !== k || M[67] !== y ? ((w = k(y)), (M[66] = k), (M[67] = y), (M[68] = w)) : (w = M[68]),
        M[69] !== w ? ((S = (0, l.jsx)(l.Fragment, { children: w })), (M[69] = w), (M[70] = S)) : (S = M[70]),
        S
      )
    }
    function tT(e) {
      e && (0, F.RB)().success((0, l.jsx)(x.A, { id: "gifEditor.frameCopied", defaultMessage: "Frame copied" }))
    }
    function t_() {
      ;(0, F.RB)().danger(
        (0, l.jsx)(x.A, { id: "gifEditor.actionFailed", defaultMessage: "Couldn\u2019t download this GIF. Try again" }),
        { errorAnalytics: { toastId: "gifEditor.actionFailed" } },
      )
    }
    var tR = n("tMvB")
    function tL(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        m,
        h,
        p,
        x,
        b,
        C,
        y,
        w,
        S,
        M,
        j,
        I,
        P,
        E,
        k,
        N,
        T,
        _ = (0, a.c)(74)
      _[0] !== e
        ? (({
            ref: h,
            viewerId: x,
            assetSrc: n,
            alt: t,
            enabled: o,
            imageSource: s,
            sourceImage: p,
            onSubmit: u,
            onSubmitted: m,
            children: i,
            initialSpeed: c,
            onSpeedChange: d,
            ...r
          } = e),
          (_[0] = e),
          (_[1] = t),
          (_[2] = n),
          (_[3] = i),
          (_[4] = r),
          (_[5] = o),
          (_[6] = s),
          (_[7] = c),
          (_[8] = d),
          (_[9] = u),
          (_[10] = m),
          (_[11] = h),
          (_[12] = p),
          (_[13] = x))
        : ((t = _[1]),
          (n = _[2]),
          (i = _[3]),
          (r = _[4]),
          (o = _[5]),
          (s = _[6]),
          (c = _[7]),
          (d = _[8]),
          (u = _[9]),
          (m = _[10]),
          (h = _[11]),
          (p = _[12]),
          (x = _[13]))
      let R = (0, g.gh)(e5.PR),
        L = (0, v.A)(),
        D = (0, f.useRef)(!1),
        z = (0, f.useRef)(null),
        H = (0, f.useRef)(null),
        O = (0, g._U)(tR.q8, x)
      _[14] !== n || _[15] !== O ? ((b = O.get(n)), (_[14] = n), (_[15] = O), (_[16] = b)) : (b = _[16])
      let G = b
      _[17] !== G?.comments ? ((C = G?.comments ?? []), (_[17] = G?.comments), (_[18] = C)) : (C = _[18])
      let B = C,
        [Y, V] = (0, f.useState)(null),
        [Z, K] = (0, f.useState)(!1),
        X = o && Y?.active === !0
      _[19] !== n || _[20] !== R || _[21] !== x
        ? ((y = (e) => {
            ;(0, tR.k_)(R, x, n, D.current ? e : { ...e, commentMode: void 0 })
          }),
          (_[19] = n),
          (_[20] = R),
          (_[21] = x),
          (_[22] = y))
        : (y = _[22])
      let U = (0, tt.K)(y)
      _[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = () => {
            H.current?.onViewportInteractionStart()
          }),
          (_[23] = w))
        : (w = _[23])
      let W = (0, tt.K)(w)
      ;(_[24] !== n || _[25] !== R || _[26] !== x
        ? ((S = () => (
            (D.current = !0),
            () => {
              ;((D.current = !1), (0, tR.k_)(R, x, n, { commentMode: void 0 }))
            }
          )),
          (M = [R, x, n]),
          (_[24] = n),
          (_[25] = R),
          (_[26] = x),
          (_[27] = S),
          (_[28] = M))
        : ((S = _[27]), (M = _[28])),
        (0, f.useLayoutEffect)(S, M),
        _[29] !== Z || _[30] !== U
          ? ((j = () => {
              Z || (V(null), U({ commentMode: void 0 }))
            }),
            (_[29] = Z),
            (_[30] = U),
            (_[31] = j))
          : (j = _[31]))
      let $ = j
      ;(_[32] !== $
        ? ((I = () => ({ cancel: $, download: async () => null != z.current && (await z.current.download(), !0) })),
          (_[32] = $),
          (_[33] = I))
        : (I = _[33]),
        (0, f.useImperativeHandle)(h, I),
        _[34] !== X ||
        _[35] !== B ||
        _[36] !== Y?.hasPendingComment ||
        _[37] !== o ||
        _[38] !== s ||
        _[39] !== L ||
        _[40] !== Z ||
        _[41] !== u ||
        _[42] !== m ||
        _[43] !== R ||
        _[44] !== U
          ? ((P = async () => {
              let e = z.current?.getSession()
              if (!(!o || null == e || 0 === B.length || Y?.hasPendingComment) && !Z) {
                ;(K(!0), U({ commentMode: "submitting" }))
                try {
                  ;(await u({ prompt: (0, th.a)(L, B), annotationCount: B.length }))
                    ? (null != s &&
                        (0, tl.xZ)(R, {
                          commentCount: B.length,
                          hasGeneralInstruction: !1,
                          imageSource: s,
                          mode: "comment",
                          selectedImageCount: 1,
                        }),
                      U({ comments: [], commentMode: void 0 }),
                      V(null),
                      m?.())
                    : U({ commentMode: X ? "editing" : void 0 })
                } catch (e) {
                  ;(U({ commentMode: X ? "editing" : void 0 }),
                    R.get(F.Id).danger(tu(e, L), { errorAnalytics: { toastId: "imageSidePanel.submitGifComments" } }))
                }
                K(!1)
              }
            }),
            (_[34] = X),
            (_[35] = B),
            (_[36] = Y?.hasPendingComment),
            (_[37] = o),
            (_[38] = s),
            (_[39] = L),
            (_[40] = Z),
            (_[41] = u),
            (_[42] = m),
            (_[43] = R),
            (_[44] = U),
            (_[45] = P))
          : (P = _[45]))
      let q = P,
        Q = c ?? G?.speed
      return (
        _[46] !== d || _[47] !== U
          ? ((E = async (e) => (null == d || (await d(e)) !== !1) && (U({ speed: e }), !0)),
            (_[46] = d),
            (_[47] = U),
            (_[48] = E))
          : (E = _[48]),
        _[49] !== X ||
        _[50] !== B ||
        _[51] !== Y ||
        _[52] !== o ||
        _[53] !== s ||
        _[54] !== Z ||
        _[55] !== R ||
        _[56] !== p ||
        _[57] !== q ||
        _[58] !== U
          ? ((k = o
              ? {
                  active: X,
                  commentCount: B.length,
                  disabled: Z || Y?.hasPendingComment === !0,
                  onEdit: (e) => {
                    let t
                    X ||
                      ((0, A.E)(R, R.value.routeConversationId, p, "annotation_enter"),
                      null != s && (0, tl.jf)(R, { imageSource: s, mode: "comment", view: "single" }))
                    let n = {
                      session: e,
                      active: Y?.session !== e || !Y.active,
                      hasPendingComment: Y?.hasPendingComment ?? !1,
                    }
                    ;(V(n),
                      Z ? (t = "submitting") : n.active && (t = n.hasPendingComment ? "draft" : "editing"),
                      U({ commentMode: t }))
                  },
                  onSubmit: () => void q(),
                }
              : void 0),
            (_[49] = X),
            (_[50] = B),
            (_[51] = Y),
            (_[52] = o),
            (_[53] = s),
            (_[54] = Z),
            (_[55] = R),
            (_[56] = p),
            (_[57] = q),
            (_[58] = U),
            (_[59] = k))
          : (k = _[59]),
        _[60] !== X || _[61] !== t || _[62] !== i || _[63] !== B || _[64] !== Y || _[65] !== W || _[66] !== U
          ? ((N = i({
              onInteractionStart: W,
              renderOverlay: (e) =>
                X && null != Y
                  ? (0, l.jsx)(tm, {
                      ref: H,
                      alt: t,
                      comments: B,
                      session: Y.session,
                      viewport: e,
                      onCommentsChange: (e) => U({ comments: e }),
                      onDraftActiveChange: (e) => {
                        ;(V((t) => (null == t ? null : { ...t, hasPendingComment: e })),
                          U({ commentMode: e ? "draft" : "editing" }))
                      },
                    })
                  : null,
            })),
            (_[60] = X),
            (_[61] = t),
            (_[62] = i),
            (_[63] = B),
            (_[64] = Y),
            (_[65] = W),
            (_[66] = U),
            (_[67] = N))
          : (N = _[67]),
        _[68] !== r || _[69] !== Q || _[70] !== E || _[71] !== k || _[72] !== N
          ? ((T = (0, l.jsx)(tE, { ...r, ref: z, initialSpeed: Q, onSpeedChange: E, editControls: k, children: N })),
            (_[68] = r),
            (_[69] = Q),
            (_[70] = E),
            (_[71] = k),
            (_[72] = N),
            (_[73] = T))
          : (T = _[73]),
        T
      )
    }
    var tD = n("umQU"),
      tz = n("Sgf9"),
      tH = n("pxT8"),
      tO = n("Vc4w"),
      tF = n("hZ6E"),
      tG = n("qUfL"),
      tB = n("YEQY"),
      tY = n("IDFw"),
      tV = n("i1uX"),
      tZ = n("BsAN"),
      tK = n("SziE"),
      tX = n("pDKn")
    function tU(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        g,
        h,
        p,
        b,
        C,
        y,
        w,
        S,
        M,
        j,
        I,
        P,
        E,
        A,
        k,
        N,
        T,
        _,
        R,
        L,
        F,
        G,
        B,
        Y,
        V,
        Z,
        K,
        X,
        U,
        W = (0, a.c)(130),
        {
          ref: $,
          imageSize: q,
          isSubmitting: Q,
          onCancel: J,
          onSubmit: ee,
          sizeControlContainer: et,
          renderToolbar: el,
          toolbarVariant: ea,
          viewport: ei,
        } = e,
        er = void 0 === ea ? "compact" : ea,
        eo = (0, v.A)(),
        es = (0, en.dz)(),
        ec = "embedded" === er,
        ed = (0, f.useRef)(null),
        eu = (0, f.useRef)(null),
        [em, eg] = (0, f.useState)(70),
        [eh, ef] = (0, f.useState)(null)
      W[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (W[0] = t)) : (t = W[0])
      let [ep, ev] = (0, f.useState)(t)
      W[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (W[1] = n)) : (n = W[1])
      let [ex, eb] = (0, f.useState)(n),
        eC = ep.length > 0 || ex.length > 0,
        ey = ei.imageRect.width > 0 ? (em * ei.fitImageRect.width) / ei.imageRect.width : em,
        ew = (tJ(q, em) * ei.fitImageRect.width) / q.width
      W[2] !== q
        ? ((i = (e, t) => {
            ;(ev(e), eb(t))
            let n = ed.current
            null != n && t$(n, q, e, getComputedStyle(n).color)
          }),
          (W[2] = q),
          (W[3] = i))
        : (i = W[3])
      let eS = i
      W[4] !== q || W[5] !== ep
        ? ((r = () => {
            let e = eu.current
            ;((eu.current = null), ef(null))
            let t = ed.current
            null != e &&
              null != t &&
              (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
              t$(t, q, ep, getComputedStyle(t).color))
          }),
          (W[4] = q),
          (W[5] = ep),
          (W[6] = r))
        : (r = W[6])
      let eM = r
      ;(W[7] !== eM ? ((o = () => ({ onViewportInteractionStart: eM })), (W[7] = eM), (W[8] = o)) : (o = W[8]),
        (0, f.useImperativeHandle)($, o),
        W[9] !== eM || W[10] !== ep || W[11] !== eS || W[12] !== ei.isInteracting || W[13] !== ei.isPanReady
          ? ((s = (e) => {
              let t = eu.current
              if (null != t && t.pointerId === e.pointerId) {
                if (e.defaultPrevented || ei.isInteracting || ei.isPanReady) return void eM()
                ;((eu.current = null),
                  e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId),
                  eS([...ep, t.stroke], []))
              }
            }),
            (W[9] = eM),
            (W[10] = ep),
            (W[11] = eS),
            (W[12] = ei.isInteracting),
            (W[13] = ei.isPanReady),
            (W[14] = s))
          : (s = W[14]))
      let ej = s
      W[15] !== eC || W[16] !== ec
        ? ((c = eC
            ? null
            : (0, l.jsx)("span", {
                className: (0, m.A)(
                  "min-w-0 truncate leading-[18px] text-tertiary",
                  ec ? "px-2.5 text-sm" : "px-1.5 text-base",
                ),
                children: (0, l.jsx)(x.A, {
                  id: "imageSidePanel.removeHelper",
                  defaultMessage: "Brush over what you want to remove",
                }),
              })),
          (W[15] = eC),
          (W[16] = ec),
          (W[17] = c))
        : (c = W[17])
      let eI = Q || 0 === ep.length,
        eP = !eC,
        eE = ec ? "large" : "default",
        eA = ec ? "imageToolbar" : "composerSm"
      ;(W[18] !== eo
        ? ((d = eo.formatMessage({ id: "imageSidePanel.undoRemoveSelection", defaultMessage: "Undo" })),
          (W[18] = eo),
          (W[19] = d))
        : (d = W[19]),
        W[20] !== ep || W[21] !== ex || W[22] !== eS
          ? ((u = () => {
              let e = ep.at(-1)
              null != e && eS(ep.slice(0, -1), [...ex, e])
            }),
            (W[20] = ep),
            (W[21] = ex),
            (W[22] = eS),
            (W[23] = u))
          : (u = W[23]),
        W[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, l.jsx)(z.I, { "aria-hidden": !1, asset: tY.K })), (W[24] = g))
          : (g = W[24]),
        W[25] !== eP || W[26] !== eE || W[27] !== eA || W[28] !== d || W[29] !== u || W[30] !== eI
          ? ((h = (0, l.jsx)(D.$, {
              color: "ghostActive",
              disabled: eI,
              hidden: eP,
              radius: eE,
              size: eA,
              uniform: !0,
              "aria-label": d,
              onClick: u,
              children: g,
            })),
            (W[25] = eP),
            (W[26] = eE),
            (W[27] = eA),
            (W[28] = d),
            (W[29] = u),
            (W[30] = eI),
            (W[31] = h))
          : (h = W[31]))
      let ek = Q || 0 === ex.length,
        eN = !eC,
        eT = ec ? "large" : "default",
        e_ = ec ? "imageToolbar" : "composerSm"
      ;(W[32] !== eo
        ? ((p = eo.formatMessage({ id: "imageSidePanel.redoRemoveSelection", defaultMessage: "Redo" })),
          (W[32] = eo),
          (W[33] = p))
        : (p = W[33]),
        W[34] !== ep || W[35] !== ex || W[36] !== eS
          ? ((b = () => {
              let e = ex.at(-1)
              null != e && eS([...ep, e], ex.slice(0, -1))
            }),
            (W[34] = ep),
            (W[35] = ex),
            (W[36] = eS),
            (W[37] = b))
          : (b = W[37]),
        W[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, l.jsx)(z.I, { className: "-scale-x-100", "aria-hidden": !1, asset: tY.K })), (W[38] = C))
          : (C = W[38]),
        W[39] !== ek || W[40] !== eN || W[41] !== eT || W[42] !== e_ || W[43] !== p || W[44] !== b
          ? ((y = (0, l.jsx)(D.$, {
              color: "ghostActive",
              disabled: ek,
              hidden: eN,
              radius: eT,
              size: e_,
              uniform: !0,
              "aria-label": p,
              onClick: b,
              children: C,
            })),
            (W[39] = ek),
            (W[40] = eN),
            (W[41] = eT),
            (W[42] = e_),
            (W[43] = p),
            (W[44] = b),
            (W[45] = y))
          : (y = W[45]))
      let eR = 0 === ep.length || Q,
        eL = ec ? "toolbar" : "composerSm"
      ;(W[46] !== q || W[47] !== ee || W[48] !== ep
        ? ((w = () => {
            ep.length > 0 &&
              ee(
                (function (e, t) {
                  let n = document.createElement("canvas")
                  ;((n.width = e.width), (n.height = e.height))
                  let l = n.getContext("2d")
                  if (null == l) return ""
                  for (let a of ((l.fillStyle = "black"), l.fillRect(0, 0, e.width, e.height), t)) tq(n, e, a, "white")
                  return n.toDataURL("image/png")
                })(q, ep),
              )
          }),
          (W[46] = q),
          (W[47] = ee),
          (W[48] = ep),
          (W[49] = w))
        : (w = W[49]),
        W[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, l.jsx)(x.A, { id: "imageSidePanel.sendRemoveSelection", defaultMessage: "Send" })), (W[50] = S))
          : (S = W[50]),
        W[51] !== Q || W[52] !== eR || W[53] !== eL || W[54] !== w
          ? ((M = (0, l.jsx)(D.$, {
              color: "accent",
              radius: "large",
              disabled: eR,
              loading: Q,
              size: eL,
              onClick: w,
              children: S,
            })),
            (W[51] = Q),
            (W[52] = eR),
            (W[53] = eL),
            (W[54] = w),
            (W[55] = M))
          : (M = W[55]))
      let eD = ec ? "ghostActive" : "ghostTertiary",
        ez = ec ? "large" : "default",
        eH = ec ? "imageToolbar" : "composerSm"
      ;(W[56] !== eo
        ? ((j = eo.formatMessage({ id: "imageSidePanel.cancelRemoveMode", defaultMessage: "Cancel" })),
          (W[56] = eo),
          (W[57] = j))
        : (j = W[57]),
        W[58] !== ec
          ? ((I = ec
              ? (0, l.jsx)(H.pgK, {})
              : (0, l.jsx)(O.bF, { legacyIcon: tK.A, asset16: tV.Q, legacyClassName: "icon-2xs", "aria-hidden": !0 })),
            (W[58] = ec),
            (W[59] = I))
          : (I = W[59]),
        W[60] !== Q || W[61] !== J || W[62] !== eD || W[63] !== ez || W[64] !== eH || W[65] !== j || W[66] !== I
          ? ((P = (0, l.jsx)(D.$, {
              color: eD,
              disabled: Q,
              radius: ez,
              size: eH,
              uniform: !0,
              "aria-label": j,
              onClick: J,
              children: I,
            })),
            (W[60] = Q),
            (W[61] = J),
            (W[62] = eD),
            (W[63] = ez),
            (W[64] = eH),
            (W[65] = j),
            (W[66] = I),
            (W[67] = P))
          : (P = W[67]),
        W[68] !== h || W[69] !== y || W[70] !== M || W[71] !== P || W[72] !== c
          ? ((E = (0, l.jsxs)(l.Fragment, { children: [c, h, y, M, P] })),
            (W[68] = h),
            (W[69] = y),
            (W[70] = M),
            (W[71] = P),
            (W[72] = c),
            (W[73] = E))
          : (E = W[73]))
      let eO = E
      ;(W[74] !== eO || W[75] !== er
        ? ((A = (0, l.jsx)(tS.b, { className: "pointer-events-auto", variant: er, children: eO })),
          (W[74] = eO),
          (W[75] = er),
          (W[76] = A))
        : (A = W[76]),
        W[77] !== el || W[78] !== A ? ((k = el(A)), (W[77] = el), (W[78] = A), (W[79] = k)) : (k = W[79]))
      let eF = ei.imageRect
      W[80] !== eo
        ? ((N = eo.formatMessage({ id: "imageSidePanel.removeSurface", defaultMessage: "Mark areas to remove" })),
          (W[80] = eo),
          (W[81] = N))
        : (N = W[81])
      let eG = !ei.isPanReady && !ei.isInteracting && "cursor-none"
      return (
        W[82] !== eG
          ? ((T = (0, m.A)("absolute inset-0 h-full w-full touch-none text-info opacity-50", eG)),
            (W[82] = eG),
            (W[83] = T))
          : (T = W[83]),
        W[84] !== ey || W[85] !== q || W[86] !== ei.isInteracting || W[87] !== ei.isPanReady
          ? ((_ = (e) => {
              if (
                e.defaultPrevented ||
                0 !== e.button ||
                ei.isInteracting ||
                ei.isPanReady ||
                ("touch" === e.pointerType && !e.isPrimary)
              )
                return
              let t = tW(e)
              null != t &&
                (ef(t),
                (eu.current = { pointerId: e.pointerId, stroke: { brushSize: ey, points: [t] } }),
                e.currentTarget.setPointerCapture(e.pointerId),
                tQ(e.currentTarget, q, t, t, ey, getComputedStyle(e.currentTarget).color))
            }),
            (W[84] = ey),
            (W[85] = q),
            (W[86] = ei.isInteracting),
            (W[87] = ei.isPanReady),
            (W[88] = _))
          : (_ = W[88]),
        W[89] !== q || W[90] !== ei.isInteracting || W[91] !== ei.isPanReady
          ? ((R = (e) => {
              if (ei.isInteracting || ei.isPanReady) return
              let t = tW(e)
              ef(t)
              let n = eu.current
              if (null == n || n.pointerId !== e.pointerId || null == t) return
              let l = n.stroke.points.at(-1)
              null != l &&
                (n.stroke.points.push(t),
                tQ(e.currentTarget, q, l, t, n.stroke.brushSize, getComputedStyle(e.currentTarget).color))
            }),
            (W[89] = q),
            (W[90] = ei.isInteracting),
            (W[91] = ei.isPanReady),
            (W[92] = R))
          : (R = W[92]),
        W[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = () => {
              ef(null)
            }),
            (W[93] = L))
          : (L = W[93]),
        W[94] !== eM ||
        W[95] !== ej ||
        W[96] !== q.height ||
        W[97] !== q.width ||
        W[98] !== N ||
        W[99] !== T ||
        W[100] !== _ ||
        W[101] !== R
          ? ((F = (0, l.jsx)("canvas", {
              ref: ed,
              "aria-label": N,
              className: T,
              height: q.height,
              width: q.width,
              onPointerDown: _,
              onPointerMove: R,
              onPointerUp: ej,
              onPointerCancel: eM,
              onLostPointerCapture: eM,
              onPointerLeave: L,
            })),
            (W[94] = eM),
            (W[95] = ej),
            (W[96] = q.height),
            (W[97] = q.width),
            (W[98] = N),
            (W[99] = T),
            (W[100] = _),
            (W[101] = R),
            (W[102] = F))
          : (F = W[102]),
        W[103] !== eh || W[104] !== ew || W[105] !== ei.isInteracting || W[106] !== ei.isPanReady
          ? ((G =
              null == eh || ei.isInteracting || ei.isPanReady
                ? null
                : (0, l.jsx)("div", {
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-text/20",
                    style: { height: ew, left: `${100 * eh.x}%`, top: `${100 * eh.y}%`, width: ew },
                  })),
            (W[103] = eh),
            (W[104] = ew),
            (W[105] = ei.isInteracting),
            (W[106] = ei.isPanReady),
            (W[107] = G))
          : (G = W[107]),
        W[108] !== F || W[109] !== G || W[110] !== ei.imageRect
          ? ((B = (0, l.jsxs)("div", { className: "absolute", style: eF, children: [F, G] })),
            (W[108] = F),
            (W[109] = G),
            (W[110] = ei.imageRect),
            (W[111] = B))
          : (B = W[111]),
        W[112] !== Q || W[113] !== B
          ? ((Y = (0, l.jsx)("div", { className: "absolute inset-0 overflow-hidden", inert: Q, children: B })),
            (W[112] = Q),
            (W[113] = B),
            (W[114] = Y))
          : (Y = W[114]),
        W[115] !== eo
          ? ((V = eo.formatMessage({ id: "imageSidePanel.removeBrushSize", defaultMessage: "Brush size" })),
            (W[115] = eo),
            (W[116] = V))
          : (V = W[116]),
        W[117] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (e) => {
              ;(ef(null), eg(e))
            }),
            (W[117] = Z))
          : (Z = W[117]),
        W[118] !== em || W[119] !== Q || W[120] !== V
          ? ((K = (0, l.jsx)(tZ.F, {
              className: "max-h-[100cqh]",
              "aria-label": V,
              disabled: Q,
              max: 130,
              min: 5,
              name: "remove-brush-size",
              value: em,
              onValueChange: Z,
            })),
            (W[118] = em),
            (W[119] = Q),
            (W[120] = V),
            (W[121] = K))
          : (K = W[121]),
        W[122] !== et || W[123] !== K || W[124] !== es
          ? ((X = (0, l.jsx)(tX.W, { container: et, zoom: es, children: K })),
            (W[122] = et),
            (W[123] = K),
            (W[124] = es),
            (W[125] = X))
          : (X = W[125]),
        W[126] !== k || W[127] !== Y || W[128] !== X
          ? ((U = (0, l.jsxs)("div", { className: "relative h-full w-full", children: [k, Y, X] })),
            (W[126] = k),
            (W[127] = Y),
            (W[128] = X),
            (W[129] = U))
          : (U = W[129]),
        U
      )
    }
    function tW(e) {
      let t = e.currentTarget.getBoundingClientRect()
      return t.width <= 0 || t.height <= 0
        ? null
        : { x: (e.clientX - t.left) / t.width, y: (e.clientY - t.top) / t.height }
    }
    function t$(e, t, n, l) {
      for (let a of ((e.width = t.width), (e.height = t.height), n)) tq(e, t, a, l)
    }
    function tq(e, t, n, l) {
      for (let a = 0; a < n.points.length; a += 1) {
        let i = n.points[a]
        null != i && tQ(e, t, n.points[a - 1] ?? i, i, n.brushSize, l)
      }
    }
    function tQ(e, t, n, l, a, i) {
      let r = e.getContext("2d")
      if (null == r) return
      let o = n.x * t.width,
        s = n.y * t.height,
        c = l.x * t.width,
        d = l.y * t.height,
        u = tJ(t, a)
      if (o === c && s === d) {
        ;((r.fillStyle = i), r.beginPath(), r.arc(o, s, u / 2, 0, 2 * Math.PI), r.fill())
        return
      }
      ;((r.strokeStyle = i),
        (r.lineCap = "round"),
        (r.lineJoin = "round"),
        (r.lineWidth = u),
        r.beginPath(),
        r.moveTo(o, s),
        r.lineTo(c, d),
        r.stroke())
    }
    function tJ(e, t) {
      return (Math.min(e.width, e.height) * t) / 500
    }
    var t1 = n("RIJi"),
      t0 = n("YQiI"),
      t2 = n("VJgc"),
      t3 = n("bqtn"),
      t5 = (e) =>
        (0, l.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.667 4.80762C15.6931 4.80779 16.5252 5.63994 16.5254 6.66602V13.333C16.5254 14.3592 15.6932 15.1912 14.667 15.1914H5.33301C4.30683 15.1912 3.47461 14.3592 3.47461 13.333V6.66602C3.47478 5.63994 4.30694 4.80779 5.33301 4.80762H14.667ZM5.33301 5.8584C4.88683 5.85857 4.52557 6.21984 4.52539 6.66602V8.99414C4.76984 8.87578 5.04327 8.80767 5.33301 8.80762H10.667C11.6931 8.80779 12.5252 9.63995 12.5254 10.666V13.333C12.5254 13.6232 12.4566 13.8969 12.3379 14.1416H14.667C15.1133 14.1414 15.4746 13.7793 15.4746 13.333V6.66602C15.4744 6.21984 15.1132 5.85857 14.667 5.8584H5.33301ZM5.33301 9.8584C4.88684 9.85857 4.52557 10.2198 4.52539 10.666V13.333C4.52539 13.7793 4.88673 14.1414 5.33301 14.1416H10.667C11.1133 14.1414 11.4746 13.7793 11.4746 13.333V10.666C11.4744 10.2198 11.1132 9.85857 10.667 9.8584H5.33301Z",
          }),
        })
    let t4 = [
      {
        icon: (e) =>
          (0, l.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, l.jsx)("path", {
              d: "M16.0015 7.33334C16.0015 6.62231 16.0016 6.12897 15.9702 5.74545C15.9472 5.4635 15.9094 5.27399 15.8579 5.13022L15.8022 5.00034C15.6483 4.69823 15.4139 4.4452 15.1265 4.26889L14.9995 4.19858C14.8415 4.11812 14.63 4.0613 14.2544 4.03061C13.8709 3.99929 13.3774 3.99838 12.6665 3.99838H7.3335C6.62246 3.99838 6.12913 3.99928 5.74561 4.03061C5.3699 4.06131 5.1585 4.11807 5.00049 4.19858C4.65524 4.3745 4.37465 4.65509 4.19873 5.00034C4.11822 5.15834 4.06146 5.36975 4.03076 5.74545C3.99943 6.12897 3.99854 6.62231 3.99854 7.33334V12.6664C3.99854 13.3772 3.99945 13.8708 4.03076 14.2542C4.06145 14.6298 4.11827 14.8414 4.19873 14.9994L4.26904 15.1263C4.44535 15.4137 4.69838 15.6482 5.00049 15.8021L5.13037 15.8578C5.27414 15.9092 5.46365 15.947 5.74561 15.9701C6.12912 16.0014 6.62246 16.0013 7.3335 16.0013H12.6665C13.3774 16.0013 13.8709 16.0014 14.2544 15.9701C14.6298 15.9394 14.8415 15.8825 14.9995 15.8021C15.3448 15.6262 15.6263 15.3446 15.8022 14.9994L15.8579 14.8695C15.9093 14.7257 15.9472 14.536 15.9702 14.2542C16.0015 13.8708 16.0015 13.3772 16.0015 12.6664V7.33334ZM17.3315 12.6664C17.3315 13.3554 17.3322 13.9124 17.2954 14.3626C17.2627 14.7636 17.1977 15.1248 17.0532 15.4613L16.9868 15.6039C16.6834 16.1992 16.1993 16.6833 15.604 16.9867C15.2272 17.1786 14.8208 17.2578 14.3628 17.2953C13.9126 17.332 13.3555 17.3314 12.6665 17.3314H7.3335C6.64441 17.3314 6.08745 17.332 5.63721 17.2953C5.23652 17.2625 4.87587 17.1973 4.53955 17.0531L4.39697 16.9867C3.87586 16.7211 3.43936 16.3174 3.13525 15.8216L3.01318 15.6039C2.82122 15.2271 2.74201 14.8206 2.70459 14.3626C2.66782 13.9124 2.66846 13.3553 2.66846 12.6664V7.33334C2.66846 6.64425 2.6678 6.0873 2.70459 5.63706C2.742 5.17926 2.82138 4.77344 3.01318 4.39682C3.31662 3.80129 3.80144 3.31647 4.39697 3.01303C4.77359 2.82123 5.17942 2.74185 5.63721 2.70444C6.08745 2.66765 6.6444 2.66831 7.3335 2.66831H12.6665C13.3555 2.66831 13.9126 2.66767 14.3628 2.70444C14.8208 2.74186 15.2272 2.82106 15.604 3.01303L15.8218 3.1351C16.3176 3.4392 16.7213 3.8757 16.9868 4.39682L17.0532 4.5394C17.1975 4.87572 17.2627 5.23637 17.2954 5.63706C17.3322 6.0873 17.3315 6.64425 17.3315 7.33334V12.6664Z",
            }),
          }),
        label: (0, tp.zR)({ id: "imageSidePanel.aspectRatio.square", defaultMessage: "Square" }),
        ratio: "1:1",
      },
      {
        icon: (e) =>
          (0, l.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, l.jsx)("path", {
              d: "M15.1687 6.5C15.1687 5.78896 15.1678 5.29563 15.1365 4.91211C15.1134 4.6301 15.0756 4.44066 15.0242 4.29688L14.9685 4.16699C14.8145 3.8648 14.5803 3.61186 14.2927 3.43555L14.1667 3.36524C14.0088 3.28475 13.7971 3.22797 13.4216 3.19727C13.0382 3.16594 12.5446 3.16504 11.8337 3.16504H8.16675C7.45571 3.16504 6.96238 3.16593 6.57886 3.19727C6.20315 3.22797 5.99175 3.28473 5.83374 3.36524C5.4885 3.54116 5.2079 3.82175 5.03198 4.16699C4.95147 4.325 4.89472 4.5364 4.86401 4.91211C4.83268 5.29563 4.83179 5.78896 4.83179 6.5V13.5C4.83179 14.211 4.83268 14.7044 4.86401 15.0879C4.89472 15.4636 4.95147 15.675 5.03198 15.833L5.1023 15.959C5.27861 16.2466 5.53148 16.4807 5.83374 16.6348L5.96362 16.6914C6.10737 16.7428 6.297 16.7797 6.57886 16.8027C6.96238 16.8341 7.45571 16.835 8.16675 16.835H11.8337C12.5446 16.835 13.0382 16.8341 13.4216 16.8027C13.7971 16.772 14.0088 16.7153 14.1667 16.6348L14.2927 16.5645C14.5803 16.3881 14.8145 16.1352 14.9685 15.833L15.0242 15.7031C15.0756 15.5593 15.1134 15.3699 15.1365 15.0879C15.1678 14.7044 15.1687 14.211 15.1687 13.5V6.5ZM16.4988 13.5C16.4988 14.1891 16.4985 14.746 16.4617 15.1963C16.4289 15.5969 16.3647 15.9577 16.2205 16.2939L16.1531 16.4365C15.8875 16.9577 15.484 17.3941 14.988 17.6982L14.7703 17.8203C14.3937 18.0122 13.9878 18.0915 13.53 18.1289C13.0799 18.1657 12.5227 18.165 11.8337 18.165H8.16675C7.47766 18.165 6.9207 18.1657 6.47046 18.1289C6.06981 18.0962 5.70909 18.031 5.3728 17.8867L5.23023 17.8203C4.70919 17.5548 4.2726 17.151 3.96851 16.6553L3.84644 16.4365C3.65463 16.0599 3.57525 15.6541 3.53784 15.1963C3.50106 14.746 3.50171 14.1891 3.50171 13.5V6.5C3.50171 5.81091 3.50106 5.25395 3.53784 4.80371C3.57525 4.34592 3.65463 3.94009 3.84644 3.56348C4.14988 2.96794 4.63469 2.48313 5.23023 2.17969C5.60684 1.98788 6.01267 1.90851 6.47046 1.87109C6.9207 1.83431 7.47766 1.83496 8.16675 1.83496H11.8337C12.5227 1.83496 13.0799 1.83431 13.53 1.87109C13.9878 1.90853 14.3937 1.98783 14.7703 2.17969L14.988 2.30176C15.484 2.60587 15.8875 3.04228 16.1531 3.56348L16.2205 3.70606C16.3647 4.0423 16.4289 4.40313 16.4617 4.80371C16.4985 5.25395 16.4988 5.81091 16.4988 6.5V13.5Z",
            }),
          }),
        label: (0, tp.zR)({ id: "imageSidePanel.aspectRatio.portrait", defaultMessage: "Portrait" }),
        ratio: "3:4",
      },
      {
        icon: (e) =>
          (0, l.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, l.jsx)("path", {
              d: "M9.16504 2.33154C8.454 2.33154 7.96067 2.33243 7.57715 2.36377C7.29514 2.38681 7.1057 2.4246 6.96191 2.47607L6.83203 2.53174C6.52984 2.68571 6.2769 2.91997 6.10059 3.20752L6.03027 3.3335C5.94979 3.49146 5.89301 3.70311 5.86231 4.07861C5.83098 4.46207 5.83008 4.95564 5.83008 5.6665V14.3335C5.83008 15.0445 5.83097 15.5379 5.86231 15.9214C5.89301 16.2971 5.94977 16.5085 6.03027 16.6665C6.2062 17.0117 6.48679 17.2923 6.83203 17.4683C6.99004 17.5488 7.20144 17.6055 7.57715 17.6362C7.96067 17.6676 8.454 17.6685 9.16504 17.6685L10.835 17.7056C11.546 17.7056 12.0393 17.7047 12.4229 17.6733C12.7986 17.6426 13.01 17.5859 13.168 17.5054L13.2939 17.4351C13.5816 17.2587 13.8157 17.0059 13.9697 16.7036L14.0264 16.5737C14.0778 16.43 14.1147 16.2404 14.1377 15.9585C14.169 15.575 14.1699 15.0816 14.1699 14.3706V5.70361C14.1699 4.99275 14.169 4.49918 14.1377 4.11572C14.107 3.74022 14.0502 3.52857 13.9697 3.3706L13.8994 3.24463C13.7231 2.95708 13.4702 2.72282 13.168 2.56885L13.0381 2.51318C12.8943 2.46171 12.7049 2.42392 12.4229 2.40088C12.0393 2.36954 11.546 2.36865 10.835 2.36865L9.16504 2.33154ZM10.835 1.03857C11.5241 1.03857 12.081 1.0389 12.5312 1.07568C12.9318 1.10842 13.2927 1.1727 13.6289 1.31689L13.7715 1.38428C14.2927 1.64984 14.7291 2.05339 15.0332 2.54932L15.1553 2.76709C15.3471 3.14369 15.4264 3.54956 15.4639 4.00732C15.5006 4.45749 15.5 5.01467 15.5 5.70361V14.3706C15.5 15.0597 15.5007 15.6167 15.4639 16.0669C15.4311 16.4675 15.3659 16.8283 15.2217 17.1646L15.1553 17.3071C14.8898 17.8282 14.4859 18.2648 13.9902 18.5688L13.7715 18.6909C13.3949 18.8827 12.989 18.9621 12.5312 18.9995C12.081 19.0363 11.5241 19.0356 10.835 19.0356L9.16504 18.9985C8.47595 18.9985 7.91899 18.9992 7.46875 18.9624C7.01096 18.925 6.60513 18.8456 6.22852 18.6538C5.63298 18.3504 5.14817 17.8656 4.84473 17.27C4.65292 16.8934 4.57355 16.4876 4.53613 16.0298C4.49935 15.5795 4.5 15.0226 4.5 14.3335V5.6665C4.5 4.97756 4.49935 4.42038 4.53613 3.97021C4.57356 3.51245 4.65287 3.10658 4.84473 2.72998L4.9668 2.51221C5.2709 2.01628 5.70732 1.61273 6.22852 1.34717L6.37109 1.27979C6.70734 1.13559 7.06817 1.07131 7.46875 1.03857C7.91899 1.00179 8.47595 1.00146 9.16504 1.00146L10.835 1.03857Z",
            }),
          }),
        label: (0, tp.zR)({ id: "imageSidePanel.aspectRatio.story", defaultMessage: "Story" }),
        ratio: "9:16",
      },
      {
        icon: (e) =>
          (0, l.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, l.jsx)("path", {
              d: "M16.835 8.16666C16.835 7.45562 16.8341 6.96229 16.8027 6.57877C16.7797 6.29691 16.7428 6.10728 16.6914 5.96353L16.6348 5.83365C16.4807 5.53139 16.2466 5.27852 15.959 5.1022L15.833 5.03189C15.675 4.95138 15.4636 4.89462 15.0879 4.86392C14.7044 4.83259 14.211 4.8317 13.5 4.8317H6.5C5.78896 4.8317 5.29563 4.83259 4.91211 4.86392C4.5364 4.89462 4.325 4.95138 4.16699 5.03189C3.82175 5.20781 3.54116 5.48841 3.36524 5.83365C3.28473 5.99166 3.22797 6.20306 3.19727 6.57877C3.16593 6.96229 3.16504 7.45562 3.16504 8.16666V11.8336C3.16504 12.5445 3.16594 13.0381 3.19727 13.4215C3.22797 13.797 3.28475 14.0087 3.36524 14.1667L3.43555 14.2926C3.61186 14.5802 3.8648 14.8144 4.16699 14.9684L4.29688 15.0241C4.44066 15.0756 4.6301 15.1133 4.91211 15.1364C5.29563 15.1677 5.78896 15.1686 6.5 15.1686H13.5C14.211 15.1686 14.7044 15.1677 15.0879 15.1364C15.4635 15.1057 15.675 15.0489 15.833 14.9684L15.959 14.8971C16.2464 14.7209 16.4808 14.4687 16.6348 14.1667L16.6914 14.0358C16.7427 13.8922 16.7797 13.7028 16.8027 13.4215C16.8341 13.0381 16.835 12.5445 16.835 11.8336V8.16666ZM18.165 11.8336C18.165 12.5226 18.1657 13.0798 18.1289 13.5299C18.0961 13.9306 18.031 14.2913 17.8867 14.6276L17.8203 14.7702C17.5549 15.2911 17.1509 15.7268 16.6553 16.0309L16.4365 16.153C16.0598 16.3449 15.6542 16.4242 15.1963 16.4616C14.746 16.4984 14.1891 16.4987 13.5 16.4987H6.5C5.81091 16.4987 5.25395 16.4984 4.80371 16.4616C4.40313 16.4288 4.0423 16.3646 3.70606 16.2204L3.56348 16.153C3.04228 15.8874 2.60587 15.4839 2.30176 14.9879L2.17969 14.7702C1.98783 14.3936 1.90853 13.9877 1.87109 13.5299C1.83431 13.0798 1.83496 12.5226 1.83496 11.8336V8.16666C1.83496 7.47757 1.83431 6.92061 1.87109 6.47037C1.90851 6.01258 1.98788 5.60675 2.17969 5.23013C2.48313 4.6346 2.96794 4.14978 3.56348 3.84634C3.94009 3.65454 4.34592 3.57516 4.80371 3.53775C5.25395 3.50096 5.81091 3.50162 6.5 3.50162H13.5C14.1891 3.50162 14.746 3.50096 15.1963 3.53775C15.6541 3.57516 16.0599 3.65454 16.4365 3.84634L16.6553 3.96842C17.151 4.27251 17.5548 4.7091 17.8203 5.23013L17.8867 5.37271C18.031 5.709 18.0962 6.06972 18.1289 6.47037C18.1657 6.92061 18.165 7.47756 18.165 8.16666V11.8336Z",
            }),
          }),
        label: (0, tp.zR)({ id: "imageSidePanel.aspectRatio.landscape", defaultMessage: "Landscape" }),
        ratio: "4:3",
      },
      {
        icon: (e) =>
          (0, l.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, l.jsx)("path", {
              d: "M17.6685 9C17.6685 8.28896 17.6676 7.79563 17.6362 7.41211C17.6132 7.1301 17.5754 6.94066 17.5239 6.79688L17.4683 6.66699C17.3143 6.3648 17.08 6.11186 16.7925 5.93555L16.6665 5.86524C16.5085 5.78475 16.2969 5.72797 15.9214 5.69727C15.5379 5.66594 15.0444 5.66504 14.3335 5.66504H5.6665C4.95547 5.66504 4.46213 5.66593 4.07861 5.69727C3.70291 5.72797 3.4915 5.78473 3.3335 5.86524C2.98825 6.04116 2.70766 6.32175 2.53174 6.66699C2.45123 6.825 2.39447 7.0364 2.36377 7.41211C2.33244 7.79563 2.33154 8.28896 2.33154 9V11C2.33154 11.711 2.33244 12.2044 2.36377 12.5879C2.39447 12.9636 2.45123 13.175 2.53174 13.333L2.60205 13.459C2.77837 13.7466 3.03124 13.9807 3.3335 14.1348L3.46338 14.1914C3.60713 14.2428 3.79676 14.2797 4.07861 14.3027C4.46213 14.3341 4.95547 14.335 5.6665 14.335H14.3335C15.0444 14.335 15.5379 14.3341 15.9214 14.3027C16.2969 14.272 16.5085 14.2153 16.6665 14.1348L16.7925 14.0645C17.08 13.8881 17.3143 13.6352 17.4683 13.333L17.5239 13.2031C17.5754 13.0593 17.6132 12.8699 17.6362 12.5879C17.6676 12.2044 17.6685 11.711 17.6685 11V9ZM18.9985 11C18.9985 11.6891 18.9982 12.246 18.9614 12.6963C18.9287 13.0969 18.8644 13.4577 18.7202 13.7939L18.6528 13.9365C18.3873 14.4577 17.9837 14.8941 17.4878 15.1982L17.27 15.3203C16.8934 15.5122 16.4876 15.5915 16.0298 15.6289C15.5796 15.6657 15.0224 15.665 14.3335 15.665H5.6665C4.97741 15.665 4.42046 15.6657 3.97022 15.6289C3.56957 15.5962 3.20885 15.531 2.87256 15.3867L2.72998 15.3203C2.20895 15.0548 1.77236 14.651 1.46826 14.1553L1.34619 13.9365C1.15439 13.5599 1.07501 13.1541 1.0376 12.6963C1.00081 12.246 1.00147 11.6891 1.00147 11V9C1.00147 8.31091 1.00081 7.75395 1.0376 7.30371C1.07501 6.84592 1.15439 6.44009 1.34619 6.06348C1.64963 5.46794 2.13445 4.98313 2.72998 4.67969C3.1066 4.48788 3.51242 4.40851 3.97022 4.37109C4.42046 4.33431 4.97741 4.33496 5.6665 4.33496H14.3335C15.0224 4.33496 15.5796 4.33431 16.0298 4.37109C16.4876 4.40853 16.8934 4.48783 17.27 4.67969L17.4878 4.80176C17.9837 5.10587 18.3873 5.54228 18.6528 6.06348L18.7202 6.20606C18.8644 6.5423 18.9287 6.90313 18.9614 7.30371C18.9982 7.75395 18.9985 8.31091 18.9985 9V11Z",
            }),
          }),
        label: (0, tp.zR)({ id: "imageSidePanel.aspectRatio.widescreen", defaultMessage: "Widescreen" }),
        ratio: "16:9",
      },
    ]
    function t6(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        g,
        h,
        f,
        p,
        b,
        C = (0, a.c)(80),
        {
          canEditImage: y,
          annotationToolsOnly: w,
          downloadAction: S,
          isLoading: M,
          isSubmittingBackgroundRemoval: j,
          isSubmittingResize: I,
          onComment: P,
          onMarkup: E,
          showComment: A,
          onErase: k,
          onEditText: N,
          onRemoveBackground: T,
          onResize: _,
          resizeMenuOpen: R,
          onResizeMenuOpenChange: L,
          variant: O,
        } = e,
        F = void 0 !== w && w,
        G = void 0 === A || A,
        B = (0, v.A)(),
        Y = "embedded" === O,
        V = "imageTools" === O,
        Z = Y ? "[@container_(max-width:450px)]:sr-only" : "[@container_(max-width:630px)]:sr-only",
        K = Y ? "ghostSecondary" : "ghostActive",
        X = Y || V ? "imageToolbar" : "composerSm",
        U = Y ? "large" : "default"
      C[0] !== K || C[1] !== X || C[2] !== U
        ? ((t = { color: K, size: X, radius: U }), (C[0] = K), (C[1] = X), (C[2] = U), (C[3] = t))
        : (t = C[3])
      let W = t
      C[4] !== B
        ? ((n = B.formatMessage({ id: "imageSidePanel.comment", defaultMessage: "Comment" })), (C[4] = B), (C[5] = n))
        : (n = C[5])
      let $ = n
      C[6] !== B
        ? ((i = B.formatMessage({ id: "imageSidePanel.removeBackground", defaultMessage: "Remove BG" })),
          (C[6] = B),
          (C[7] = i))
        : (i = C[7])
      let q = i
      C[8] !== B
        ? ((r = B.formatMessage({ id: "imageSidePanel.resize", defaultMessage: "Resize" })), (C[8] = B), (C[9] = r))
        : (r = C[9])
      let Q = r
      C[10] !== B || C[11] !== Y || C[12] !== V
        ? ((o =
            Y || V
              ? B.formatMessage({ id: "imageSidePanel.erase", defaultMessage: "Erase" })
              : B.formatMessage({ id: "imageSidePanel.remove", defaultMessage: "Remove" })),
          (C[10] = B),
          (C[11] = Y),
          (C[12] = V),
          (C[13] = o))
        : (o = C[13])
      let J = o,
        ee = Y ? J : void 0,
        et = !y || j
      C[14] !== V
        ? ((s = V ? (0, l.jsx)(H.lRG, {}) : (0, l.jsx)(z.I, { "aria-hidden": !1, asset: t2.O })),
          (C[14] = V),
          (C[15] = s))
        : (s = C[15])
      let en = !Y && !V && "text-base"
      ;(C[16] !== Z || C[17] !== en ? ((c = (0, m.A)(Z, en)), (C[16] = Z), (C[17] = en), (C[18] = c)) : (c = C[18]),
        C[19] !== J || C[20] !== c
          ? ((d = (0, l.jsx)("span", { className: c, children: J })), (C[19] = J), (C[20] = c), (C[21] = d))
          : (d = C[21]),
        C[22] !== W || C[23] !== J || C[24] !== k || C[25] !== ee || C[26] !== et || C[27] !== s || C[28] !== d
          ? ((u = (0, l.jsxs)(D.$, { ...W, "aria-label": J, title: ee, disabled: et, onClick: k, children: [s, d] })),
            (C[22] = W),
            (C[23] = J),
            (C[24] = k),
            (C[25] = ee),
            (C[26] = et),
            (C[27] = s),
            (C[28] = d),
            (C[29] = u))
          : (u = C[29]))
      let el = u,
        ea = Y ? void 0 : "pointer-events-auto"
      return (
        C[30] !== W || C[31] !== y || C[32] !== B || C[33] !== Y || C[34] !== j || C[35] !== Z || C[36] !== E
          ? ((g =
              null != E
                ? (0, l.jsxs)(D.$, {
                    ...W,
                    title: Y ? B.formatMessage({ id: "imageSidePanel.markup", defaultMessage: "Markup" }) : void 0,
                    disabled: !y || j,
                    onClick: E,
                    children: [
                      (0, l.jsx)(H.nQe, {}),
                      (0, l.jsx)("span", {
                        className: Z,
                        children: (0, l.jsx)(x.A, { id: "imageSidePanel.markup", defaultMessage: "Markup" }),
                      }),
                    ],
                  })
                : null),
            (C[30] = W),
            (C[31] = y),
            (C[32] = B),
            (C[33] = Y),
            (C[34] = j),
            (C[35] = Z),
            (C[36] = E),
            (C[37] = g))
          : (g = C[37]),
        C[38] !== W ||
        C[39] !== $ ||
        C[40] !== Y ||
        C[41] !== V ||
        C[42] !== M ||
        C[43] !== j ||
        C[44] !== Z ||
        C[45] !== P ||
        C[46] !== G
          ? ((h = G
              ? (0, l.jsxs)(D.$, {
                  ...W,
                  "aria-label": $,
                  title: Y ? $ : void 0,
                  disabled: M || j,
                  onClick: P,
                  children: [
                    V ? (0, l.jsx)(H.h78, {}) : (0, l.jsx)(z.I, { "aria-hidden": !1, asset: Y ? t0.j : t1.s }),
                    (0, l.jsx)("span", { className: (0, m.A)(Z, !Y && !V && "text-base"), children: $ }),
                  ],
                })
              : null),
            (C[38] = W),
            (C[39] = $),
            (C[40] = Y),
            (C[41] = V),
            (C[42] = M),
            (C[43] = j),
            (C[44] = Z),
            (C[45] = P),
            (C[46] = G),
            (C[47] = h))
          : (h = C[47]),
        C[48] !== F ||
        C[49] !== W ||
        C[50] !== y ||
        C[51] !== el ||
        C[52] !== Y ||
        C[53] !== V ||
        C[54] !== j ||
        C[55] !== I ||
        C[56] !== Z ||
        C[57] !== T ||
        C[58] !== _ ||
        C[59] !== L ||
        C[60] !== q ||
        C[61] !== Q ||
        C[62] !== R
          ? ((f =
              !F &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)(D.$, {
                    ...W,
                    "aria-label": q,
                    title: q,
                    disabled: !y || I,
                    loading: j,
                    onClick: T,
                    children: [
                      V ? (0, l.jsx)(H.vSF, {}) : (0, l.jsx)(H.m9E, {}),
                      (0, l.jsx)("span", {
                        className: Z,
                        children: (0, l.jsx)(x.A, {
                          id: "imageSidePanel.removeBackground",
                          defaultMessage: "Remove BG",
                        }),
                      }),
                    ],
                  }),
                  el,
                  (0, l.jsx)(t3.Ab, {
                    align: "center",
                    contentWidth: "xs",
                    open: R,
                    onOpenChange: L,
                    triggerButton: (0, l.jsxs)(D.$, {
                      ...W,
                      "aria-label": Q,
                      title: Q,
                      disabled: !y || j,
                      loading: I,
                      children: [
                        (0, l.jsx)(t5, { className: V ? "icon-md" : "icon-sm" }),
                        (0, l.jsx)("span", {
                          className: (0, m.A)(Z, !Y && !V && "text-base"),
                          children: (0, l.jsx)(x.A, { id: "imageSidePanel.resize", defaultMessage: "Resize" }),
                        }),
                      ],
                    }),
                    children: t4.map((e) => {
                      let { icon: t, label: n, ratio: a } = e
                      return (0, l.jsx)(
                        t3.ms.Item,
                        {
                          LeftIcon: t,
                          onSelect: () => _(a),
                          children: (0, l.jsxs)("span", {
                            className: "flex w-full items-center justify-between gap-4",
                            children: [
                              (0, l.jsx)(x.A, { ...n }),
                              (0, l.jsx)("span", { className: "text-tertiary", children: a }),
                            ],
                          }),
                        },
                        a,
                      )
                    }),
                  }),
                ],
              })),
            (C[48] = F),
            (C[49] = W),
            (C[50] = y),
            (C[51] = el),
            (C[52] = Y),
            (C[53] = V),
            (C[54] = j),
            (C[55] = I),
            (C[56] = Z),
            (C[57] = T),
            (C[58] = _),
            (C[59] = L),
            (C[60] = q),
            (C[61] = Q),
            (C[62] = R),
            (C[63] = f))
          : (f = C[63]),
        C[64] !== W || C[65] !== B || C[66] !== Y || C[67] !== V || C[68] !== M || C[69] !== Z || C[70] !== N
          ? ((p =
              null != N
                ? (0, l.jsxs)(D.$, {
                    ...W,
                    title: Y ? B.formatMessage({ id: "imageTextEditing.layers", defaultMessage: "Layers" }) : void 0,
                    disabled: M,
                    onClick: N,
                    children: [
                      V ? (0, l.jsx)(H.vxf, {}) : (0, l.jsx)(H.Y3E, {}),
                      (0, l.jsx)("span", {
                        className: (0, m.A)(Z, !Y && !V && "text-base"),
                        children: (0, l.jsx)(x.A, { id: "imageTextEditing.layers", defaultMessage: "Layers" }),
                      }),
                    ],
                  })
                : null),
            (C[64] = W),
            (C[65] = B),
            (C[66] = Y),
            (C[67] = V),
            (C[68] = M),
            (C[69] = Z),
            (C[70] = N),
            (C[71] = p))
          : (p = C[71]),
        C[72] !== S || C[73] !== ea || C[74] !== g || C[75] !== h || C[76] !== f || C[77] !== p || C[78] !== O
          ? ((b = (0, l.jsxs)(tS.b, { className: ea, variant: O, children: [g, h, f, S, p] })),
            (C[72] = S),
            (C[73] = ea),
            (C[74] = g),
            (C[75] = h),
            (C[76] = f),
            (C[77] = p),
            (C[78] = O),
            (C[79] = b))
          : (b = C[79]),
        b
      )
    }
    var t7 = n("bJkS"),
      t8 = n("c9K0"),
      t9 = n("T0Rc"),
      ne = n("JNtf"),
      nt = n("RNul"),
      nn = n("LulU")
    let nl = (0, ez.a)({
      name: "minus-md-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.25, y: 7.25, width: 11.5, height: 1.5 },
        visualBounds: { x: 2.25, y: 7.25, width: 11.5, height: 1.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.25, y: 7.25, width: 11.5, height: 1.5 },
        center: { x: 8, y: 8 },
        insets: { top: 7.25, right: 2.25, bottom: 7.25, left: 2.25 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75Z" fill="currentColor"/>',
    })
    var na = n("vVh3")
    function ni(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d,
        u,
        m,
        g,
        h,
        p,
        b,
        C,
        y,
        w,
        S,
        M = (0, a.c)(40),
        { viewerRef: j, zoomLevel: I } = e,
        P = (0, v.A)(),
        E = (0, el.I)(),
        A = (0, f.useRef)(null),
        k = (0, f.useRef)(!1),
        N = 100 + Math.round(I)
      M[0] !== P
        ? ((t = P.formatMessage({ id: "imagePreviewDialog.panorama.zoomIn", defaultMessage: "Zoom in" })),
          (M[0] = P),
          (M[1] = t))
        : (t = M[1])
      let T = t
      M[2] !== P
        ? ((n = P.formatMessage({ id: "imagePreviewDialog.panorama.zoomOut", defaultMessage: "Zoom out" })),
          (M[2] = P),
          (M[3] = n))
        : (n = M[3])
      let _ = n
      M[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            ;(A.current?.(), (A.current = null))
          }),
          (M[4] = i))
        : (i = M[4])
      let R = i
      M[5] !== j
        ? ((r = function (e, t) {
            let n, l
            if ("mouse" === e.pointerType && 0 !== e.button) return
            ;(e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), R(), (k.current = !1))
            let a = window.setTimeout(() => {
              k.current = !0
              let e = performance.now()
              n = window.requestAnimationFrame(function a(i) {
                let r = j.current
                if (null == r) return void R()
                let o = Math.min(50, i - (l ?? i))
                if (((l = i), o <= 0)) {
                  n = window.requestAnimationFrame(a)
                  return
                }
                let s = Math.min(1, Math.max(0.35, (i - e) / 180)),
                  c = Math.min(100, Math.max(0, r.getZoomLevel() + 46 * t * (o / 1e3) * s))
                ;(r.zoom(c), 0 === c || 100 === c) ? R() : (n = window.requestAnimationFrame(a))
              })
            }, 120)
            A.current = () => {
              ;(window.clearTimeout(a), null != n && window.cancelAnimationFrame(n))
            }
          }),
          (M[5] = j),
          (M[6] = r))
        : (r = M[6])
      let L = r
      ;(M[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e) => (null == e ? void 0 : R)), (M[7] = s))
        : (s = M[7]),
        M[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { opacity: 0 }), (d = { opacity: 1 }), (M[8] = c), (M[9] = d))
          : ((c = M[8]), (d = M[9])))
      let H = 0.3 * !E
      M[10] !== H ? ((u = { duration: H, ease: "easeOut" }), (M[10] = H), (M[11] = u)) : (u = M[11])
      let O = I >= 100
      M[12] !== O || M[13] !== T
        ? ((m = { direction: 1, label: T, iconAsset: na.R, disabled: O }), (M[12] = O), (M[13] = T), (M[14] = m))
        : (m = M[14])
      let F = I <= 0
      ;(M[15] !== F || M[16] !== _
        ? ((g = { direction: -1, label: _, iconAsset: nl, disabled: F }), (M[15] = F), (M[16] = _), (M[17] = g))
        : (g = M[17]),
        M[18] !== m || M[19] !== g ? ((h = [m, g]), (M[18] = m), (M[19] = g), (M[20] = h)) : (h = M[20]))
      let G = h
      return (
        M[21] !== E || M[22] !== L || M[23] !== G || M[24] !== j
          ? ((p = G.map((e) => {
              let { direction: t, label: n, iconAsset: a, disabled: i } = e
              return (0, l.jsx)(
                o.m,
                {
                  content: n,
                  children: (0, l.jsx)(D.$, {
                    color: "ghostActive",
                    size: "imageToolbar",
                    uniform: !0,
                    "aria-label": n,
                    disabled: i,
                    onClick: (e) => {
                      let n = k.current && 0 !== e.detail
                      k.current = !1
                      let l = j.current
                      if (!n && null != l) {
                        let e = Math.min(100, Math.max(0, l.getZoomLevel() + 12 * t))
                        E ? l.zoom(e) : l.animate({ zoom: e, speed: 180 })
                      }
                    },
                    onPointerDown: (e) => L(e, t),
                    onPointerUp: R,
                    onPointerLeave: R,
                    onPointerCancel: R,
                    onLostPointerCapture: R,
                    onBlur: R,
                    children: (0, l.jsx)(z.I, { asset: a }),
                  }),
                },
                t,
              )
            })),
            (M[21] = E),
            (M[22] = L),
            (M[23] = G),
            (M[24] = j),
            (M[25] = p))
          : (p = M[25]),
        M[26] !== P || M[27] !== N
          ? ((b = P.formatMessage(
              { id: "imagePanorama.currentZoom", defaultMessage: "Current zoom {zoomPercent}%" },
              { zoomPercent: N },
            )),
            (M[26] = P),
            (M[27] = N),
            (M[28] = b))
          : (b = M[28]),
        M[29] !== N
          ? ((C = (0, l.jsx)(x.A, {
              id: "imagePanorama.zoomPercent",
              defaultMessage: "{zoomPercent}%",
              values: { zoomPercent: N },
            })),
            (M[29] = N),
            (M[30] = C))
          : (C = M[30]),
        M[31] !== b || M[32] !== C
          ? ((y = (0, l.jsx)("div", {
              className: "px-2.5 text-sm text-default tabular-nums",
              "aria-label": b,
              children: C,
            })),
            (M[31] = b),
            (M[32] = C),
            (M[33] = y))
          : (y = M[33]),
        M[34] !== p || M[35] !== y
          ? ((w = (0, l.jsxs)(tS.b, { variant: "imageTools", children: [p, y] })),
            (M[34] = p),
            (M[35] = y),
            (M[36] = w))
          : (w = M[36]),
        M[37] !== w || M[38] !== u
          ? ((S = (0, l.jsx)(q.P.div, {
              ref: s,
              className: "pointer-events-auto absolute start-1/2 bottom-11 ltr:-translate-x-1/2 rtl:translate-x-1/2",
              initial: c,
              animate: d,
              transition: u,
              onPointerDown: no,
              onWheel: nr,
              children: w,
            })),
            (M[37] = w),
            (M[38] = u),
            (M[39] = S))
          : (S = M[39]),
        S
      )
    }
    function nr(e) {
      return e.stopPropagation()
    }
    function no(e) {
      return e.stopPropagation()
    }
    let ns = [0.22, 1, 0.36, 1]
    function nc(e) {
      let t,
        i,
        r,
        o,
        s,
        c,
        d,
        g,
        h,
        p,
        v,
        b,
        C,
        y,
        w,
        S,
        M = (0, a.c)(51),
        {
          conversationId: j,
          absoluteImageFilePath: I,
          hostId: P,
          src: E,
          transitionImage: A,
          onLoaded: k,
          onLoadFailed: N,
        } = e,
        T = (0, u.jE)(),
        _ = (0, el.I)(),
        R = (0, f.useRef)(null),
        [L, D] = (0, f.useState)("loading"),
        [z, H] = (0, f.useState)(0)
      M[0] !== k ? ((t = () => k?.()), (M[0] = k), (M[1] = t)) : (t = M[1])
      let O = (0, tt.K)(t)
      M[2] !== N ? ((i = (e) => N?.(e)), (M[2] = N), (M[3] = i)) : (i = M[3])
      let F = (0, tt.K)(i)
      M[4] !== I ||
      M[5] !== j ||
      M[6] !== P ||
      M[7] !== T ||
      M[8] !== F ||
      M[9] !== O ||
      M[10] !== _ ||
      M[11] !== E ||
      M[12] !== A
        ? ((r = function (e) {
            let t, l, a, i
            if (null == e) return
            let r = !1,
              o = !1,
              s = performance.now(),
              c = new AbortController(),
              d = function (e) {
                let t = 420 * (null != A && !_)
                i = window.setTimeout(
                  () => {
                    r || D(e)
                  },
                  Math.max(0, t - (performance.now() - s)),
                )
              },
              u = function (e) {
                r || o || ((o = !0), d("error"), F(e))
              },
              m = function (e) {
                r || "zoom-updated" !== e.type || H(e.zoomLevel)
              },
              g = (async function (e) {
                try {
                  if (
                    ((t = await (async function () {
                      let [e] = await Promise.all([
                        Promise.all([n.e(910996), n.e(798643)]).then(n.bind(n, "mC1N")),
                        n.e(361772).then(n.bind(n, "gEVP")),
                      ])
                      return e
                    })()),
                    r)
                  )
                    return
                  l = new t.Viewer({ container: e, defaultZoomLvl: 0, maxFov: 110, navbar: !1 })
                } catch {
                  u("dependency_load")
                  return
                }
                ;((R.current = l), l.addEventListener("zoom-updated", m))
                let i = E,
                  s = (0, ex.Jd)(E)
                if (null != I) {
                  let e = await (0, e0.fB)(I, P, T, c.signal, j)
                  if (null == e) return void u("panorama_load")
                  s = (0, nn.bX)(e, "panorama").file
                } else
                  E.startsWith("data:")
                    ? (s = (0, nn.bX)(E, "panorama").file)
                    : E.startsWith("blob:") || (s = await (0, ex.jE)({ downloadUrl: E }, c.signal))
                r ||
                  (null != s && ((i = a = URL.createObjectURL(s)), t.Cache.add(i, i, s)),
                  !(await l.setPanorama(i, { showLoader: !1 })) || r || o || ((o = !0), d("ready"), O()))
              })(e).catch(() => u("panorama_load"))
            return () => {
              ;((r = !0),
                window.clearTimeout(i),
                c.abort(),
                (R.current = null),
                l?.removeEventListener("zoom-updated", m),
                g.then(() => {
                  ;(l?.destroy(), null != a && (t?.Cache.remove(a, a), URL.revokeObjectURL(a)))
                }))
            }
          }),
          (M[4] = I),
          (M[5] = j),
          (M[6] = P),
          (M[7] = T),
          (M[8] = F),
          (M[9] = O),
          (M[10] = _),
          (M[11] = E),
          (M[12] = A),
          (M[13] = r))
        : (r = M[13])
      let G = r,
        B = "loading" === L,
        Y = +!!_
      ;(M[14] !== Y ? ((o = { opacity: Y }), (M[14] = Y), (M[15] = o)) : (o = M[15]),
        M[16] === Symbol.for("react.memo_cache_sentinel") ? ((s = { opacity: 1 }), (M[16] = s)) : (s = M[16]))
      let V = 0.7 * !_
      ;(M[17] !== V ? ((c = { duration: V, ease: ns }), (M[17] = V), (M[18] = c)) : (c = M[18]),
        M[19] !== o || M[20] !== c
          ? ((d = (0, l.jsx)(q.P.div, {
              className: "absolute inset-0 bg-surface",
              initial: o,
              animate: s,
              transition: c,
            })),
            (M[19] = o),
            (M[20] = c),
            (M[21] = d))
          : (d = M[21]))
      let Z = "ready" !== L && "invisible"
      ;(M[22] !== Z ? ((g = (0, m.A)("absolute inset-0 isolate", Z)), (M[22] = Z), (M[23] = g)) : (g = M[23]),
        M[24] === Symbol.for("react.memo_cache_sentinel") ? ((h = { opacity: 0 }), (M[24] = h)) : (h = M[24]))
      let K = +("ready" === L)
      M[25] !== K ? ((p = { opacity: K }), (M[25] = K), (M[26] = p)) : (p = M[26])
      let X = 0.7 * !_
      return (
        M[27] !== X ? ((v = { duration: X, ease: ns }), (M[27] = X), (M[28] = v)) : (v = M[28]),
        M[29] !== G || M[30] !== g || M[31] !== p || M[32] !== v
          ? ((b = (0, l.jsx)(q.P.div, { ref: G, className: g, initial: h, animate: p, transition: v })),
            (M[29] = G),
            (M[30] = g),
            (M[31] = p),
            (M[32] = v),
            (M[33] = b))
          : (b = M[33]),
        M[34] !== _ || M[35] !== L || M[36] !== A
          ? ((C =
              null != A &&
              (0, l.jsx)(q.P.img, {
                className: "pointer-events-none absolute object-cover",
                src: A.src,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                initial: !_ && {
                  top: A.rect.top,
                  left: A.rect.left,
                  width: A.rect.width,
                  height: A.rect.height,
                  borderRadius: A.borderRadius,
                  scale: 1,
                  opacity: 1,
                },
                animate: {
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 0,
                  scale: _ ? 1 : 1.025,
                  opacity: +("loading" === L),
                },
                transition: {
                  duration: 1.1 * !_,
                  ease: ns,
                  opacity: { duration: 1.1 * !_, delay: 0.18 * !_, ease: ns },
                },
              })),
            (M[34] = _),
            (M[35] = L),
            (M[36] = A),
            (M[37] = C))
          : (C = M[37]),
        M[38] !== L || M[39] !== A
          ? ((y =
              ("error" === L || ("loading" === L && null == A)) &&
              (0, l.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center gap-2 bg-surface text-sm text-secondary",
                role: "error" === L ? "alert" : "status",
                children:
                  "error" === L
                    ? (0, l.jsx)(x.A, {
                        id: "imagePreviewDialog.panorama.loadError",
                        defaultMessage: "Could not load 360 viewer",
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(nt.y, {}),
                          (0, l.jsx)(x.A, {
                            id: "imagePreviewDialog.panorama.loading",
                            defaultMessage: "Loading 360 viewer\u2026",
                          }),
                        ],
                      }),
              })),
            (M[38] = L),
            (M[39] = A),
            (M[40] = y))
          : (y = M[40]),
        M[41] !== L || M[42] !== z
          ? ((w = "ready" === L && (0, l.jsx)(ni, { viewerRef: R, zoomLevel: z })),
            (M[41] = L),
            (M[42] = z),
            (M[43] = w))
          : (w = M[43]),
        M[44] !== d || M[45] !== b || M[46] !== C || M[47] !== y || M[48] !== w || M[49] !== B
          ? ((S = (0, l.jsxs)("div", {
              className: "relative isolate flex min-h-0 flex-1 overflow-hidden select-none",
              "aria-busy": B,
              children: [d, b, C, y, w],
            })),
            (M[44] = d),
            (M[45] = b),
            (M[46] = C),
            (M[47] = y),
            (M[48] = w),
            (M[49] = B),
            (M[50] = S))
          : (S = M[50]),
        S
      )
    }
    function nd(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        m,
        g,
        h,
        p,
        v,
        b,
        C = (0, a.c)(41),
        { conversationId: y, hostId: w, image: S, imageRef: M, src: j, toolbarVariant: I, onInteraction: P } = e,
        [E, A] = (0, f.useState)(!1),
        [k, N] = (0, f.useState)(),
        T = (0, en.dz)(),
        _ = ng(S.width, S.height),
        R = !0 !== S.hasPanoramaPrompt || _ ? void 0 : j
      ;(C[0] !== R
        ? ((t = ["image-panorama-dimensions", R]),
          (n =
            null == R
              ? eh.hT
              : async () => {
                  let e = new Image()
                  return ((e.src = R), await e.decode(), { width: e.naturalWidth, height: e.naturalHeight })
                }),
          (C[0] = R),
          (C[1] = t),
          (C[2] = n))
        : ((t = C[1]), (n = C[2])),
        C[3] !== t || C[4] !== n
          ? ((i = { queryKey: t, queryFn: n, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
            (C[3] = t),
            (C[4] = n),
            (C[5] = i))
          : (i = C[5]))
      let { data: L } = (0, t9.I)(i)
      if (!S.hasPanoramaPrompt || !(_ || ng(L?.width, L?.height))) return null
      ;(C[6] !== M || C[7] !== P || C[8] !== T
        ? ((r = (e) => {
            if ((A(e), e)) {
              let e = M.current,
                t = e?.getBoundingClientRect()
              ;(N(
                null != e && null != t
                  ? {
                      src: e.currentSrc || e.src,
                      rect: new DOMRect(t.x / T, t.y / T, t.width / T, t.height / T),
                      borderRadius: getComputedStyle(e).borderRadius,
                    }
                  : void 0,
              ),
                P("360Opened"))
            }
          }),
          (C[6] = M),
          (C[7] = P),
          (C[8] = T),
          (C[9] = r))
        : (r = C[9]),
        C[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(x.A, { id: "imagePanorama.close", defaultMessage: "Close 360 viewer" })),
            (s = { "aria-describedby": void 0, onKeyDown: nm, onEscapeKeyDown: nu }),
            (C[10] = o),
            (C[11] = s))
          : ((o = C[10]), (s = C[11])),
        C[12] !== P
          ? ((c = (e) => {
              null != e && P("360Impression")
            }),
            (C[12] = P),
            (C[13] = c))
          : (c = C[13]))
      let z = "imageTools" === I ? "imageToolbar" : "composerSm"
      C[14] !== I
        ? ((d = "imageTools" === I ? (0, l.jsx)(H.cfl, {}) : (0, l.jsx)(H.ZEl, {})), (C[14] = I), (C[15] = d))
        : (d = C[15])
      let O = "imageTools" === I ? "text-sm" : "text-base"
      return (
        C[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, l.jsx)(x.A, { id: "imagePanorama.enter", defaultMessage: "Enter 360 world" })), (C[16] = u))
          : (u = C[16]),
        C[17] !== O ? ((m = (0, l.jsx)("span", { className: O, children: u })), (C[17] = O), (C[18] = m)) : (m = C[18]),
        C[19] !== m || C[20] !== c || C[21] !== z || C[22] !== d
          ? ((g = (0, l.jsxs)(D.$, { ref: c, color: "ghostActive", size: z, children: [d, m] })),
            (C[19] = m),
            (C[20] = c),
            (C[21] = z),
            (C[22] = d),
            (C[23] = g))
          : (g = C[23]),
        C[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, l.jsx)(ne.L3, {
              className: "sr-only",
              children: (0, l.jsx)(x.A, { id: "imagePanorama.title", defaultMessage: "360 viewer" }),
            })),
            (C[24] = h))
          : (h = C[24]),
        C[25] !== y || C[26] !== w || C[27] !== S.src || C[28] !== P || C[29] !== E || C[30] !== j || C[31] !== k
          ? ((p = E
              ? (0, l.jsx)(
                  nc,
                  {
                    conversationId: y,
                    absoluteImageFilePath: (0, e0.IY)(S.src),
                    hostId: w,
                    src: j,
                    transitionImage: k,
                    onLoaded: () => P("360Loaded"),
                    onLoadFailed: (e) => P("dependency_load" === e ? "360DependencyFailed" : "360ImageFailed"),
                  },
                  j,
                )
              : null),
            (C[25] = y),
            (C[26] = w),
            (C[27] = S.src),
            (C[28] = P),
            (C[29] = E),
            (C[30] = j),
            (C[31] = k),
            (C[32] = p))
          : (p = C[32]),
        C[33] !== E || C[34] !== g || C[35] !== p || C[36] !== r
          ? ((v = (0, l.jsxs)(ne.lG, {
              open: E,
              onOpenChange: r,
              unstyledContent: !0,
              viewportSized: !0,
              variant: "chatgpt",
              contentPosition: "anchored",
              contentClassName: "inset-0 flex flex-col overflow-hidden",
              dialogCloseLabel: o,
              contentProps: s,
              triggerContent: g,
              children: [h, p],
            })),
            (C[33] = E),
            (C[34] = g),
            (C[35] = p),
            (C[36] = r),
            (C[37] = v))
          : (v = C[37]),
        C[38] !== v || C[39] !== I
          ? ((b = (0, l.jsx)("div", {
              className: "flex shrink-0 justify-center px-4 pb-6",
              children: (0, l.jsx)(tS.b, { variant: I, children: v }),
            })),
            (C[38] = v),
            (C[39] = I),
            (C[40] = b))
          : (b = C[40]),
        b
      )
    }
    function nu(e) {
      return e.stopPropagation()
    }
    function nm(e) {
      return e.stopPropagation()
    }
    function ng(e, t) {
      return null != e && null != t && e > 0 && t > 0 && 0.01 >= Math.abs(e / t - 2)
    }
    var nh = n("SCZl"),
      nf = n("SAnh"),
      np = n("H0ju"),
      nv = n("LQxe")
    function nx(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        g = (0, a.c)(36),
        { comments: h, selectedCommentId: p, onHoverComment: x, onOpen: b, onEdit: C, onDelete: y, onClose: w } = e,
        S = (0, v.A)()
      g[0] !== S ? ((t = S.formatMessage(nb.heading)), (g[0] = S), (g[1] = t)) : (t = g[1])
      let M = t
      if (
        (g[2] !== x
          ? ((n = () => () => x(null)), (i = [x]), (g[2] = x), (g[3] = n), (g[4] = i))
          : ((n = g[3]), (i = g[4])),
        (0, f.useEffect)(n, i),
        g[5] !== S ? ((r = S.formatMessage(nb.close)), (g[5] = S), (g[6] = r)) : (r = g[6]),
        g[7] !== w || g[8] !== r || g[9] !== M
          ? ((o = (0, l.jsx)(nf.w, { title: M, closeLabel: r, onClose: w })),
            (g[7] = w),
            (g[8] = r),
            (g[9] = M),
            (g[10] = o))
          : (o = g[10]),
        g[11] !== h || g[12] !== S || g[13] !== y || g[14] !== C || g[15] !== b || g[16] !== p)
      ) {
        let e
        ;(g[18] !== h.length || g[19] !== S || g[20] !== y || g[21] !== C || g[22] !== b || g[23] !== p
          ? ((e = (e, t) => {
              let { id: n, text: a, region: i } = e,
                r = h.length - t
              return {
                key: n,
                selected: n === p,
                label: i ? void 0 : a,
                onOpen: () => b(n),
                content: (0, l.jsx)(nh.y, {
                  hasConnector: !1,
                  avatar: (0, l.jsx)("span", {
                    "aria-hidden": !0,
                    className: "block size-6",
                    children: (0, l.jsx)(es.Y, { number: r }),
                  }),
                  header: (0, l.jsx)("div", {
                    className: (0, m.A)(
                      "flow-root text-base leading-5 before:float-end before:h-5 before:w-13",
                      !i && "min-h-8 content-center",
                    ),
                    children: (0, l.jsx)("span", {
                      dir: "auto",
                      className: "break-words whitespace-pre-wrap",
                      children: a,
                    }),
                  }),
                  children:
                    i &&
                    (0, l.jsx)("div", {
                      dir: "auto",
                      className: "mt-0.5 truncate text-xs text-tertiary",
                      children: (0, ed.Fe)(S, i),
                    }),
                }),
                actions: (0, l.jsx)("div", {
                  className: i ? void 0 : "mt-2",
                  children: (0, l.jsx)(eR.B, { annotationNumber: r, onEdit: () => C(n), onRemove: () => y(n) }),
                }),
              }
            }),
            (g[18] = h.length),
            (g[19] = S),
            (g[20] = y),
            (g[21] = C),
            (g[22] = b),
            (g[23] = p),
            (g[24] = e))
          : (e = g[24]),
          (s = h.toReversed().map(e)),
          (g[11] = h),
          (g[12] = S),
          (g[13] = y),
          (g[14] = C),
          (g[15] = b),
          (g[16] = p),
          (g[17] = s))
      } else s = g[17]
      return (
        g[25] !== x || g[26] !== s
          ? ((c = (0, l.jsx)(nv.b, { onHoverRow: x, rows: s })), (g[25] = x), (g[26] = s), (g[27] = c))
          : (c = g[27]),
        g[28] !== w || g[29] !== o || g[30] !== c || g[31] !== M
          ? ((d = (0, l.jsxs)(np.D, { list: "region-comments", label: M, onClose: w, children: [o, c] })),
            (g[28] = w),
            (g[29] = o),
            (g[30] = c),
            (g[31] = M),
            (g[32] = d))
          : (d = g[32]),
        g[33] !== d || g[34] !== M
          ? ((u = (0, l.jsx)(tn.Io, {
              open: !0,
              size: "compact",
              className: "pointer-events-auto",
              label: M,
              children: d,
            })),
            (g[33] = d),
            (g[34] = M),
            (g[35] = u))
          : (u = g[35]),
        u
      )
    }
    let nb = (0, tp.YK)({
      heading: { id: "artifactComments.heading", defaultMessage: "Comments" },
      close: { id: "artifactComments.close", defaultMessage: "Close comments" },
    })
    function nC(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u = (0, a.c)(25),
        {
          count: m,
          isSubmitting: g,
          sendDisabled: h,
          commentsButtonRef: f,
          commentsOpen: p,
          onToggleComments: b,
          onCancel: C,
          onSubmit: y,
        } = e,
        w = (0, v.A)()
      u[0] !== w
        ? ((t = w.formatMessage({ id: "imageSidePanel.cancelCommentMode", defaultMessage: "Cancel" })),
          (u[0] = w),
          (u[1] = t))
        : (t = u[1])
      let S = t,
        M = p ? "open" : void 0
      ;(u[2] !== m
        ? ((n = (0, l.jsx)(x.A, {
            id: "imageSidePanel.commentCount",
            defaultMessage: "{count, plural, one {# comment} other {# comments}}",
            values: { count: m },
          })),
          (u[2] = m),
          (u[3] = n))
        : (n = u[3]),
        u[4] !== f || u[5] !== p || u[6] !== g || u[7] !== b || u[8] !== M || u[9] !== n
          ? ((i = (0, l.jsx)(D.$, {
              ref: f,
              color: "ghostActive",
              size: "toolbar",
              radius: "large",
              "aria-expanded": p,
              "data-state": M,
              "data-image-comment-control": !0,
              disabled: g,
              onClick: b,
              children: n,
            })),
            (u[4] = f),
            (u[5] = p),
            (u[6] = g),
            (u[7] = b),
            (u[8] = M),
            (u[9] = n),
            (u[10] = i))
          : (i = u[10]))
      let j = g || h
      return (
        u[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)(x.A, { id: "imageSidePanel.sendComments", defaultMessage: "Send" })), (u[11] = r))
          : (r = u[11]),
        u[12] !== g || u[13] !== y || u[14] !== j
          ? ((o = (0, l.jsx)(D.$, {
              color: "accent",
              size: "toolbar",
              radius: "large",
              "data-image-comment-control": !0,
              loading: g,
              disabled: j,
              onClick: y,
              children: r,
            })),
            (u[12] = g),
            (u[13] = y),
            (u[14] = j),
            (u[15] = o))
          : (o = u[15]),
        u[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)(H.Gmf, { "aria-hidden": !0 })), (u[16] = s))
          : (s = u[16]),
        u[17] !== S || u[18] !== g || u[19] !== C
          ? ((c = (0, l.jsx)(D.$, {
              "aria-label": S,
              color: "ghostActive",
              size: "toolbar",
              radius: "large",
              uniform: !0,
              "data-image-comment-control": !0,
              disabled: g,
              onClick: C,
              children: s,
            })),
            (u[17] = S),
            (u[18] = g),
            (u[19] = C),
            (u[20] = c))
          : (c = u[20]),
        u[21] !== i || u[22] !== o || u[23] !== c
          ? ((d = (0, l.jsxs)("div", { className: "flex min-w-0 items-center gap-1", children: [i, o, c] })),
            (u[21] = i),
            (u[22] = o),
            (u[23] = c),
            (u[24] = d))
          : (d = u[24]),
        d
      )
    }
    var ny = n("O4Le"),
      nw = n("m5LN")
    function nS(e) {
      let t,
        n,
        i,
        r,
        o,
        s,
        c,
        d,
        u,
        g,
        h,
        v,
        x,
        b,
        C,
        y,
        w,
        S,
        M,
        j,
        I,
        P,
        E,
        A,
        k,
        N,
        T,
        _,
        R,
        L,
        D,
        z,
        H,
        O = (0, a.c)(122),
        {
          alt: F,
          hasImageRail: G,
          imageRef: B,
          isFullscreen: Y,
          onImageError: V,
          onImageLoad: Z,
          referrerPolicy: K,
          renderHeader: X,
          src: U,
          trailingControls: W,
          toolbar: $,
          toolbarVariant: q,
          viewerHeaderHeight: Q,
          viewerZoomControlContainer: J,
          zoom: ee,
          zoomControlContainer: et,
        } = e,
        el = void 0 !== G && G,
        ea = void 0 !== Y && Y,
        ei = void 0 === q ? "compact" : q,
        er = void 0 === Q ? 0 : Q,
        es = (0, en.dz)(),
        ec = (0, f.useRef)(null),
        ed = (0, f.useRef)(!1),
        eu = (0, f.useRef)(null),
        em = (0, f.useRef)(null),
        [eg, eh] = (0, f.useState)(!1),
        [ef, ep] = (0, f.useState)(null),
        [ev, ex] = (0, f.useState)(null),
        [eb, eC] = (0, f.useState)(null),
        [ey, ew] = (0, f.useState)(null),
        eS = 72 * !!el,
        eM = eS + 16
      O[0] !== ey || O[1] !== eM || O[2] !== ef
        ? ((t = (function ({ naturalImageSize: e, viewportSize: t }) {
            if (null == e || null == t) return null
            let n = Math.min(1, t.width / e.width, t.height / e.height)
            return !Number.isFinite(n) || n <= 0 ? null : 100 * n
          })({
            naturalImageSize: ef,
            viewportSize: null == ey ? null : { height: ey.height, width: Math.max(ey.width - eM, 1) },
          })),
          (O[0] = ey),
          (O[1] = eM),
          (O[2] = ef),
          (O[3] = t))
        : (t = O[3])
      let ej = t,
        eI = ee.manualZoomPercent ?? ej,
        eP = ea && null != eI && null != ej && eI > ej,
        eE = eM + (eP ? eS : 0)
      O[4] !== ef || O[5] !== ee
        ? ((n = (e) => {
            ;(null != ef && (ed.current = !0), ee.onZoomPercentChange(e))
          }),
          (O[4] = ef),
          (O[5] = ee),
          (O[6] = n))
        : (n = O[6])
      let eA = n,
        ek = eP ? 0 : -eS / 2,
        eN = eI ?? 100
      O[7] !== eA || O[8] !== ek || O[9] !== eN
        ? ((i = { onZoomPercentChange: eA, viewportCenterInlineOffset: ek, zoomPercent: eN }),
          (O[7] = eA),
          (O[8] = ek),
          (O[9] = eN),
          (O[10] = i))
        : (i = O[10])
      let {
        zoomTargetRef: eT,
        handleClickCapture: e_,
        handlePointerMoveCapture: eR,
        setScrollContainerRef: eL,
        setZoomAtViewportCenter: eD,
      } = (0, nw.V)(i)
      O[11] !== ee
        ? ((r = () => {
            ee.onZoomToFit()
            let e = em.current
            null != e && ((e.scrollLeft = 0), (e.scrollTop = 0))
          }),
          (O[11] = ee),
          (O[12] = r))
        : (r = O[12])
      let ez = r
      O[13] !== ef || O[14] !== ee.manualZoomPercent
        ? ((o =
            null == ee.manualZoomPercent
              ? null
              : (function ({ naturalImageSize: e, zoomPercent: t }) {
                  if (null == e) return null
                  let n = t / 100
                  return !Number.isFinite(n) || n <= 0 ? null : { height: e.height * n, width: e.width * n }
                })({ naturalImageSize: ef, zoomPercent: ee.manualZoomPercent })),
          (O[13] = ef),
          (O[14] = ee.manualZoomPercent),
          (O[15] = o))
        : (o = O[15])
      let eH = o,
        eO = eP && null == X ? (ey?.topInset ?? 0) : 0,
        eF = eP ? (ey?.bottomInset ?? 0) : 0
      O[16] !== eF || O[17] !== eE || O[18] !== eO || O[19] !== eH
        ? ((s =
            null == eH
              ? null
              : { height: eH.height + eO + eF, width: eH.width + eE, paddingTop: eO, paddingBottom: eF }),
          (O[16] = eF),
          (O[17] = eE),
          (O[18] = eO),
          (O[19] = eH),
          (O[20] = s))
        : (s = O[20])
      let eG = s,
        eB = null != eH && null != eb && (eH.height + eO + eF > eb.height || eH.width + eE > eb.width)
      O[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (e) => {
            let t = { height: e.clientHeight, width: e.clientWidth }
            if (t.height <= 0 || t.width <= 0) return
            eC((e) => (e?.height === t.height && e.width === t.width ? e : t))
            let n = eu.current
            if (null != n && n.offsetParent instanceof HTMLElement) {
              let e = {
                height: n.clientHeight,
                width: n.clientWidth,
                topInset: n.offsetTop,
                bottomInset: n.offsetParent.clientHeight - n.offsetTop - n.clientHeight,
              }
              ew((t) =>
                t?.height === e.height &&
                t.width === e.width &&
                t.topInset === e.topInset &&
                t.bottomInset === e.bottomInset
                  ? t
                  : e,
              )
            }
          }),
          (O[21] = c))
        : (c = O[21])
      let eY = c
      O[22] !== eL
        ? ((d = (e) => {
            ;(eL(e), (em.current = e), ex(e), null != e && eY(e))
          }),
          (O[22] = eL),
          (O[23] = d))
        : (d = O[23])
      let eV = d
      ;(O[24] !== ev
        ? ((u = () => {
            if (null == ev || "u" < typeof ResizeObserver) return
            let e = new ResizeObserver(() => {
              eY(ev)
            })
            return (
              e.observe(ev),
              null != eu.current && e.observe(eu.current),
              () => {
                e.disconnect()
              }
            )
          }),
          (g = [ev, eY]),
          (O[24] = ev),
          (O[25] = u),
          (O[26] = g))
        : ((u = O[25]), (g = O[26])),
        (0, f.useEffect)(u, g),
        O[27] !== eB || O[28] !== ev || O[29] !== ee.manualZoomPercent || O[30] !== eH
          ? ((h = () => {
              let e = em.current
              !ed.current &&
                null != ee.manualZoomPercent &&
                null != ev &&
                null != e &&
                null != eH &&
                eB &&
                ((ed.current = !0),
                (e.scrollLeft = Math.max((e.scrollWidth - e.clientWidth) / 2, 0)),
                (e.scrollTop = Math.max((e.scrollHeight - e.clientHeight) / 2, 0)))
            }),
            (v = [eB, ev, ee.manualZoomPercent, eH]),
            (O[27] = eB),
            (O[28] = ev),
            (O[29] = ee.manualZoomPercent),
            (O[30] = eH),
            (O[31] = h),
            (O[32] = v))
          : ((h = O[31]), (v = O[32])),
        (0, f.useLayoutEffect)(h, v),
        O[33] !== eB
          ? ((x = (e) => {
              let t = em.current
              eB &&
                null != t &&
                "touch" !== e.pointerType &&
                0 === e.button &&
                (e.preventDefault(),
                (ec.current = {
                  clientX: e.clientX,
                  clientY: e.clientY,
                  pointerId: e.pointerId,
                  scrollLeft: t.scrollLeft,
                  scrollTop: t.scrollTop,
                }),
                eh(!0),
                "function" == typeof e.currentTarget.setPointerCapture &&
                  e.currentTarget.setPointerCapture(e.pointerId))
            }),
            (O[33] = eB),
            (O[34] = x))
          : (x = O[34]))
      let eZ = x
      O[35] !== es
        ? ((b = (e) => {
            let t = ec.current,
              n = em.current
            null != t &&
              null != n &&
              t.pointerId === e.pointerId &&
              (e.preventDefault(),
              (n.scrollLeft = t.scrollLeft - (0, en.Ud)(e.clientX - t.clientX, es)),
              (n.scrollTop = t.scrollTop - (0, en.Ud)(e.clientY - t.clientY, es)))
          }),
          (O[35] = es),
          (O[36] = b))
        : (b = O[36])
      let eK = b
      O[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e) => {
            let t = ec.current
            null != t &&
              t.pointerId === e.pointerId &&
              ((ec.current = null),
              eh(!1),
              "function" == typeof e.currentTarget.hasPointerCapture &&
                "function" == typeof e.currentTarget.releasePointerCapture &&
                e.currentTarget.hasPointerCapture(e.pointerId) &&
                e.currentTarget.releasePointerCapture(e.pointerId))
          }),
          (O[37] = C))
        : (C = O[37])
      let eX = C
      O[38] !== ez || O[39] !== eD || O[40] !== ei || O[41] !== ee.manualZoomPercent || O[42] !== eI
        ? ((y =
            null == eI
              ? null
              : (0, l.jsx)(tS.b, {
                  variant: ei,
                  children: (0, l.jsx)(ny.h, {
                    variant: ei,
                    fitOption: { selected: null == ee.manualZoomPercent, onSelect: ez },
                    zoomPercent: Math.round(eI),
                    onZoomPercentChange: eD,
                  }),
                })),
          (O[38] = ez),
          (O[39] = eD),
          (O[40] = ei),
          (O[41] = ee.manualZoomPercent),
          (O[42] = eI),
          (O[43] = y))
        : (y = O[43])
      let eU = y
      O[44] !== ez || O[45] !== eD || O[46] !== ee.manualZoomPercent || O[47] !== eI
        ? ((w =
            null == eI
              ? null
              : (0, l.jsx)(tn.HD, {
                  zoomOptions: [25, 50, 100, 150, 200],
                  fitOption: { selected: null == ee.manualZoomPercent, onSelect: ez },
                  zoomPercent: Math.round(eI),
                  onZoomPercentChange: eD,
                })),
          (O[44] = ez),
          (O[45] = eD),
          (O[46] = ee.manualZoomPercent),
          (O[47] = eI),
          (O[48] = w))
        : (w = O[48])
      let eW = w,
        e$ = null != X || void 0 !== J
      if (null != X) {
        let e
        ;(O[49] !== X || O[50] !== eW ? ((e = X(eW)), (O[49] = X), (O[50] = eW), (O[51] = e)) : (e = O[51]), (S = e))
      } else if (void 0 !== J) {
        let e
        ;(O[52] !== eW || O[53] !== J
          ? ((e = null == J ? null : (0, p.createPortal)(eW, J)), (O[52] = eW), (O[53] = J), (O[54] = e))
          : (e = O[54]),
          (S = e))
      } else if (void 0 !== et) {
        let e
        ;(O[55] !== eU || O[56] !== et
          ? ((e = null == et ? null : (0, p.createPortal)(eU, et)), (O[55] = eU), (O[56] = et), (O[57] = e))
          : (e = O[57]),
          (S = e))
      } else {
        let e
        ;(O[58] !== eU || O[59] !== W
          ? ((e = (0, l.jsxs)("div", {
              className: "absolute top-2 right-2 z-40 flex items-center gap-1",
              children: [eU, W],
            })),
            (O[58] = eU),
            (O[59] = W),
            (O[60] = e))
          : (e = O[60]),
          (S = e))
      }
      let eq = null == X ? S : null,
        eQ = e$ ? "relative flex min-h-0 flex-1 flex-col" : "contents"
      O[61] !== S || O[62] !== X
        ? ((M = null == X ? null : (0, l.jsx)("div", { className: "absolute inset-x-0 top-0 z-30", children: S })),
          (O[61] = S),
          (O[62] = X),
          (O[63] = M))
        : (M = O[63])
      let eJ = el && "-me-18"
      ;(O[64] !== eJ ? ((j = (0, m.A)("min-h-0 min-w-0 flex-1 py-4", eJ)), (O[64] = eJ), (O[65] = j)) : (j = O[65]),
        O[66] !== e$ || O[67] !== er || O[68] !== ee.manualZoomPercent
          ? ((I = e$ && null == ee.manualZoomPercent ? { marginTop: er } : void 0),
            (O[66] = e$),
            (O[67] = er),
            (O[68] = ee.manualZoomPercent),
            (O[69] = I))
          : (I = O[69]))
      let e1 = eP ? "absolute inset-y-0 end-0" : "w-full",
        e0 = eP && (el ? "-start-18" : "start-0"),
        e2 = null != ee.manualZoomPercent && eB ? "overflow-auto" : "overflow-hidden"
      O[70] !== e1 || O[71] !== e0 || O[72] !== e2
        ? ((P = (0, m.A)("h-full min-h-0 min-w-0", e1, e0, e2)), (O[70] = e1), (O[71] = e0), (O[72] = e2), (O[73] = P))
        : (P = O[73])
      let e3 = el && "pe-20",
        e5 = eP && el && "ps-20",
        e4 = null == eG ? "h-full w-full" : "shrink-0"
      O[74] !== e3 || O[75] !== e5 || O[76] !== e4
        ? ((E = (0, m.A)("flex min-h-full min-w-full items-center justify-center px-2", e3, e5, e4)),
          (O[74] = e3),
          (O[75] = e5),
          (O[76] = e4),
          (O[77] = E))
        : (E = O[77])
      let e6 = eG ?? void 0
      O[78] !== B || O[79] !== eT ? ((A = (0, eo.P)(B, eT)), (O[78] = B), (O[79] = eT), (O[80] = A)) : (A = O[80])
      let e7 = !ea && "rounded-xl",
        e8 = null == eH ? "max-h-full max-w-full" : "max-w-none",
        e9 = eB && (eg ? "cursor-grabbing" : "cursor-grab")
      return (
        O[81] !== e7 || O[82] !== e8 || O[83] !== e9
          ? ((k = (0, m.A)("block shrink-0 object-contain", e7, e8, e9)),
            (O[81] = e7),
            (O[82] = e8),
            (O[83] = e9),
            (O[84] = k))
          : (k = O[84]),
        O[85] !== eH
          ? ((N = null == eH ? void 0 : { height: eH.height, width: eH.width }), (O[85] = eH), (O[86] = N))
          : (N = O[86]),
        O[87] !== Z
          ? ((T = (e) => {
              let { naturalHeight: t, naturalWidth: n } = e.currentTarget
              if (0 === t || 0 === n) return
              Z?.(e.currentTarget)
              let l = em.current
              ;(null != l && eY(l), ep({ height: t, width: n }))
            }),
            (O[87] = Z),
            (O[88] = T))
          : (T = O[88]),
        O[89] !== F ||
        O[90] !== eZ ||
        O[91] !== V ||
        O[92] !== eK ||
        O[93] !== K ||
        O[94] !== U ||
        O[95] !== A ||
        O[96] !== k ||
        O[97] !== N ||
        O[98] !== T
          ? ((_ = (0, l.jsx)("img", {
              ref: A,
              alt: F,
              className: k,
              draggable: !1,
              referrerPolicy: K,
              src: U,
              onError: V,
              style: N,
              onLoad: T,
              onLostPointerCapture: eX,
              onPointerCancel: eX,
              onPointerDown: eZ,
              onPointerMove: eK,
              onPointerUp: eX,
            })),
            (O[89] = F),
            (O[90] = eZ),
            (O[91] = V),
            (O[92] = eK),
            (O[93] = K),
            (O[94] = U),
            (O[95] = A),
            (O[96] = k),
            (O[97] = N),
            (O[98] = T),
            (O[99] = _))
          : (_ = O[99]),
        O[100] !== E || O[101] !== e6 || O[102] !== _
          ? ((R = (0, l.jsx)("div", { className: E, style: e6, children: _ })),
            (O[100] = E),
            (O[101] = e6),
            (O[102] = _),
            (O[103] = R))
          : (R = O[103]),
        O[104] !== e_ || O[105] !== eR || O[106] !== eV || O[107] !== P || O[108] !== R
          ? ((L = (0, l.jsx)("div", {
              ref: eu,
              className: "h-full min-h-0 w-full min-w-0",
              children: (0, l.jsx)("div", {
                ref: eV,
                className: P,
                onClickCapture: e_,
                onPointerMoveCapture: eR,
                children: R,
              }),
            })),
            (O[104] = e_),
            (O[105] = eR),
            (O[106] = eV),
            (O[107] = P),
            (O[108] = R),
            (O[109] = L))
          : (L = O[109]),
        O[110] !== j || O[111] !== I || O[112] !== L
          ? ((D = (0, l.jsx)("div", { className: j, style: I, children: L })),
            (O[110] = j),
            (O[111] = I),
            (O[112] = L),
            (O[113] = D))
          : (D = O[113]),
        O[114] !== eQ || O[115] !== M || O[116] !== D || O[117] !== $
          ? ((z = (0, l.jsxs)("div", { className: eQ, children: [M, $, D] })),
            (O[114] = eQ),
            (O[115] = M),
            (O[116] = D),
            (O[117] = $),
            (O[118] = z))
          : (z = O[118]),
        O[119] !== eq || O[120] !== z
          ? ((H = (0, l.jsxs)(l.Fragment, { children: [eq, z] })), (O[119] = eq), (O[120] = z), (O[121] = H))
          : (H = O[121]),
        H
      )
    }
    function nM(e) {
      var t, n
      let U,
        W,
        $,
        q,
        Q,
        J,
        ee,
        et,
        en,
        el,
        ea,
        er,
        es,
        ec,
        eu,
        em,
        eg,
        eh,
        ef,
        ep,
        ev,
        eb,
        eC,
        ey,
        ew,
        eS,
        eM,
        ej,
        eI,
        eP,
        eE,
        eA,
        ek,
        eN,
        eT,
        e_,
        eR,
        eL,
        eD,
        ez,
        eH,
        eO,
        eF,
        eG,
        eB,
        eY,
        eV,
        eK,
        eX,
        eU,
        tc,
        td,
        tm,
        tg,
        th,
        tf,
        tp,
        tv,
        tx,
        tb,
        tC,
        ty,
        tw,
        tM,
        tj,
        tI,
        tP,
        tE,
        tA,
        tk,
        tN,
        tT,
        t_,
        tY,
        tV,
        tZ,
        tK,
        tX,
        tW,
        t$,
        tq,
        tQ,
        tJ,
        t1,
        t0 = (0, a.c)(413),
        {
          alt: t2,
          attachmentId: t3,
          attachmentSrc: t5,
          chatGptConversationId: t4,
          contextMenuEnabled: t9,
          readOnly: ne,
          referrerPolicy: nt,
          src: nn,
          downloadAriaLabel: nl,
          downloadFilename: na,
          downloadSrc: ni,
          imageRail: nr,
          hasImageRail: no,
          hasNavigationGutters: ns,
          overlayToolbarHeight: nc,
          lightboxContainer: nu,
          onDismissRegionReveal: nm,
          loadingContent: ng,
          imageSource: nh,
          imageEditAttribution: nf,
          imageRef: np,
          toolbarRef: nv,
          toolbarDragBoundary: nb,
          imageId: ny,
          viewportId: nw,
          imageAssetResolver: nM,
          initialEditTool: nE,
          onInitialEditToolApplied: nA,
          onImageEditSubmit: nk,
          onSaveMarkup: nN,
          onImageEditSubmitted: nT,
          onImageEditSubmitStatusChange: n_,
          onEditToolSelected: nR,
          editInOverlay: nL,
          editStateRef: nD,
          onOpenInSidePanel: nz,
          onImageError: nH,
          onImageLoad: nO,
          presentation: nF,
          onDownloadClick: nG,
          onDownloadInitiated: nB,
          onDownloaded: nY,
          onPanoramaInteraction: nV,
          panoramaImage: nZ,
          sourceImage: nK,
          sourceConversationId: nX,
          isAnimated: nU,
          renderHeaderActions: nW,
          viewerId: n$,
          renderHeaderMenuActions: nq,
          footerActions: nQ,
          textEditing: nJ,
          viewerToolbarStatus: n1,
          onTextSubmitTarget: n0,
          onEditText: n2,
          fileInfo: n3,
          clipboardScope: n5,
          renderComposer: n4,
          composerVisibilityTarget: n6,
          markupMode: n7,
          removeMode: n8,
          sizeControlContainer: n9,
          standalone: le,
          tabId: lt,
          title: ln,
          renderHeaderTitle: ll,
          belowHeader: la,
          headerViewControl: li,
          renderHeaderLeadingControls: lr,
          buildCommentPrompt: lo,
          headerWindowControls: ls,
          onClose: lc,
          zoom: ld,
        } = e,
        lu = void 0 === t9 || t9,
        lm = void 0 !== ne && ne,
        lg = void 0 === ni ? nn : ni,
        lh = void 0 !== ns && ns,
        lf = void 0 !== nL && nL,
        lp = void 0 === nF ? "panel" : nF,
        lv = void 0 === ln ? t2 : ln,
        lx = (0, g.gh)(e5.PR),
        lb = (0, g.gh)(e4.GD),
        lC = (void 0 !== no && no) || null != nr
      t0[0] !== t4 || t0[1] !== n3?.source || t0[2] !== lb || t0[3] !== nK || t0[4] !== lv
        ? (($ =
            n3?.source ?? (0, E.eb)(nK, "chatgpt-thread" === lb.value.routeKind ? lb.value.conversationId : t4, lv)),
          (t0[0] = t4),
          (t0[1] = n3?.source),
          (t0[2] = lb),
          (t0[3] = nK),
          (t0[4] = lv),
          (t0[5] = $))
        : ($ = t0[5])
      let ly = $,
        lw = (0, Z.R)({ isAnimated: nU ?? nK?.isAnimated, mimeType: nK?.chatGptImageMetadata?.mimeType }),
        { isAnimated: lS } = lw,
        lM = nK?.displayVariantId != null && nK.spritesheet?.src === nK.src,
        lj = (0, e7.Zj)(!!lS && "3380420130"),
        lI = (0, f.useRef)(null),
        lP = (0, f.useId)(),
        lE = n$ ?? lP
      t0[6] !== t4 || t0[7] !== nM || t0[8] !== nK
        ? ((q = { image: nK, conversationId: t4, imageAssetResolver: nM }),
          (t0[6] = t4),
          (t0[7] = nM),
          (t0[8] = nK),
          (t0[9] = q))
        : (q = t0[9])
      let { playback: lA, previewSrc: lk, image: lN, originalSrc: lT, canControl: l_ } = (0, g._U)(tD.ez, q),
        lR = lS && lj && l_,
        lL = (lS ? lk : void 0) ?? nn,
        lD = !lS && !lM && "gif" !== (0, e$.TP)(t5) && "gif" !== (0, e$.TP)(lL),
        lz = (lS ? lk : void 0) ?? lg,
        lH = lT ?? lg
      t0[10] !== nM || t0[11] !== lH || t0[12] !== lx.value.routeConversationId
        ? ((Q = {
            src: lH,
            conversationId: lx.value.routeConversationId,
            imageAssetResolver: nM,
            shouldLoadFileDataUrl: !1,
          }),
          (t0[10] = nM),
          (t0[11] = lH),
          (t0[12] = lx.value.routeConversationId),
          (t0[13] = Q))
        : (Q = t0[13])
      let { downloadSrc: lO } = (0, to.D)(Q)
      t0[14] !== t5 || t0[15] !== lE
        ? ((J = { viewerId: lE, assetSrc: t5 }), (t0[14] = t5), (t0[15] = lE), (t0[16] = J))
        : (J = t0[16])
      let lF = (0, g._U)(tR.L0, J),
        lG = lm || !lw.canEdit,
        lB = (0, g.Ul)(y.Nk),
        lY = lG || lB,
        lV = le ?? "overlay" === lp,
        lZ = (0, f.useRef)(null),
        lK = (0, f.useRef)(null),
        lX = (0, f.useRef)(null),
        [lU, lW] = (0, f.useState)(!1),
        l$ = (0, f.useRef)(!1),
        [lq, lQ] = (0, f.useState)(null),
        lJ = (0, f.useRef)(null),
        l1 = (0, f.useRef)(null),
        [l0, l2] = (0, f.useState)(!1),
        [l3, l5] = (0, f.useState)(null),
        [l4, l6] = (0, f.useState)(null),
        [l7, l8] = (0, f.useState)(null),
        l9 = (0, f.useRef)(null),
        ae = (0, f.useRef)(null)
      t0[17] !== n7?.editorRef
        ? ((ee = (e) => (0, eo.P)(ae, n7?.editorRef)(e)), (t0[17] = n7?.editorRef), (t0[18] = ee))
        : (ee = t0[18])
      let at = (0, tt.K)(ee),
        an = (0, f.useRef)(!1)
      t0[19] !== lx || t0[20] !== lt
        ? ((et = null != lt && "right" === (0, e9.KE)(lx, lt)), (t0[19] = lx), (t0[20] = lt), (t0[21] = et))
        : (et = t0[21])
      let al = et,
        aa = (0, g.Ul)(al ? S.kF : "overlay" === lp),
        ai = (0, g.Ul)(eJ.t)
      t0[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = { disableExposureLog: !0 }), (t0[22] = en))
        : (en = t0[22])
      let ar = (0, e7.Ou)("2983946247", en)
      t0[23] !== ar ? ((el = ar.get("image_overlay_enabled", !1)), (t0[23] = ar), (t0[24] = el)) : (el = t0[24])
      let ao = el,
        as = lV || ao,
        ac = "overlay" === lp || lV || (ai && null != lt),
        ad = al && !ac,
        [au, am] = (0, f.useState)(null),
        [ag, ah] = (0, f.useState)(null),
        [af, ap] = (0, f.useState)(null),
        [av, ax] = (0, f.useState)(null),
        [ab, aC] = (0, f.useState)(null),
        [ay, aw] = (0, f.useState)(0)
      t0[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((ea = (e) => {
            let { height: t } = (0, e3.q)(e)
            aw((e) => (e === t ? e : t))
          }),
          (t0[25] = ea))
        : (ea = t0[25])
      let aS = (0, ei.wY)(ea)
      t0[26] !== aS
        ? ((er = (e) => {
            if ((aS(e), null != e)) {
              let t = e.offsetHeight
              aw((e) => (e === t ? e : t))
            }
          }),
          (t0[26] = aS),
          (t0[27] = er))
        : (er = t0[27])
      let aM = er,
        aj = null != nk,
        aI = aj ? "imageTools" : "compact"
      ;(t0[28] !== aI || t0[29] !== ac
        ? ((es = aI), ac && (es = "embedded"), (t0[28] = aI), (t0[29] = ac), (t0[30] = es))
        : (es = t0[30]),
        t0[31] !== t4 || t0[32] !== nk || t0[33] !== lb || t0[34] !== lV
          ? ((ec =
              null != nk &&
              (lV ||
                null != t4 ||
                "chatgpt-thread" === lb.value.routeKind ||
                null != (0, b.B6)("/s/:postId", lb.value.pathname))),
            (t0[31] = t4),
            (t0[32] = nk),
            (t0[33] = lb),
            (t0[34] = lV),
            (t0[35] = ec))
          : (ec = t0[35]))
      let aP = ec,
        aE = null != ng && !(lR && null != lO)
      t0[36] !== t3 ? ((eu = t3?.startsWith("image-playground:")), (t0[36] = t3), (t0[37] = eu)) : (eu = t0[37])
      let aA = !0 === eu,
        ak = (0, g.Ul)(T.JX),
        aN = (0, g.Ul)(T.YH),
        aT = nX ?? lx.value.routeConversationId,
        a_ = aT === lx.value.routeConversationId,
        aR = aP || a_,
        aL = aA ? "generated" : nh,
        aD = (0, u.jE)(),
        az = (0, v.A)()
      t0[38] !== az
        ? ((em = az.formatMessage({ id: "imagePreview.openInSidePanel", defaultMessage: "Open in side panel" })),
          (t0[38] = az),
          (t0[39] = em))
        : (em = t0[39])
      let aH = em
      t0[40] !== aT || t0[41] !== az || t0[42] !== lx
        ? ((eg = { scope: lx, conversationId: aT, intl: az }),
          (t0[40] = aT),
          (t0[41] = az),
          (t0[42] = lx),
          (t0[43] = eg))
        : (eg = t0[43])
      let { supportsImageInputs: aO } = (0, G.I)(eg),
        aF = (0, g._U)(w.Qk, aT) ?? e6.fI,
        aG = (0, e6.Qz)(aF),
        aB = (0, V.K5)(aT),
        { activeMode: aY } = (0, R.c)(aT)
      t0[44] !== aT || t0[45] !== aB.hostId
        ? ((eh = { conversationId: aT, hostId: aB.hostId }), (t0[44] = aT), (t0[45] = aB.hostId), (t0[46] = eh))
        : (eh = t0[46])
      let { agentMode: aV, permissionProfileId: aZ, shouldSendPermissionOverrides: aK } = (0, L.Ap)(eh),
        { mode: aX } = (0, B.C)(),
        { serviceTierSettings: aU } = (0, Y.k)(aT),
        [aW, a$] = (0, f.useState)(!1),
        aq = aW || lF.isSubmitting,
        [aQ, aJ] = (0, f.useState)(null),
        [a1, a0] = (0, f.useState)(!1),
        [a2, a3] = (0, f.useState)(!1),
        [a5, a4] = (0, f.useState)(!1),
        [a6, a7] = (0, f.useState)(!1),
        a8 = n8?.active ?? a6,
        a9 = n8?.onActiveChange ?? a7,
        [ie, it] = (0, f.useState)(null),
        il = (0, e7.Ou)("1873790768"),
        ia =
          a_ &&
          null == t4 &&
          ("local-thread" === lb.value.routeKind ||
            "client-local-thread" === lb.value.routeKind ||
            "home" === lb.value.routeKind ||
            "new-thread-panel" === lb.value.routeKind) &&
          "cloud" !== aN &&
          aO &&
          (("local" === lx.value.kind && "main" === lx.value.placement) ||
            ("new" === lx.value.kind && "library-preview" !== lx.value.entrypoint))
      t0[47] !== ia ||
      t0[48] !== t4 ||
      t0[49] !== il ||
      t0[50] !== n7 ||
      t0[51] !== nk ||
      t0[52] !== lp ||
      t0[53] !== lb ||
      t0[54] !== nK ||
      t0[55] !== lV ||
      t0[56] !== lt
        ? ((ef =
            ((lV && (null != n7 || ("overlay" === lp && null != nk && null != nK))) ||
              ((((null != t4 || "chatgpt-thread" === lb.value.routeKind) && null != nk && null != nK) || ia) &&
                (null != lt || "overlay" === lp))) &&
            il.get("lightbox_markup_enabled", !1)),
          (t0[47] = ia),
          (t0[48] = t4),
          (t0[49] = il),
          (t0[50] = n7),
          (t0[51] = nk),
          (t0[52] = lp),
          (t0[53] = lb),
          (t0[54] = nK),
          (t0[55] = lV),
          (t0[56] = lt),
          (t0[57] = ef))
        : (ef = t0[57])
      let ii = ef
      t0[58] !== il || t0[59] !== ii
        ? ((ep = ii && il.get("lightbox_unified_comment_enabled", !1)), (t0[58] = il), (t0[59] = ii), (t0[60] = ep))
        : (ep = t0[60])
      let ir = ep,
        io = !lY && !aE && null == nJ,
        is = io && aR && !ir,
        ic = !lY && !aE && ii && (n7?.active ?? ie === t5),
        [id, iu] = (0, f.useState)(!1),
        im = (0, f.useRef)(null),
        ig = (0, f.useRef)(!1)
      t0[61] !== n_
        ? ((ev = () => {
            let e = im.current
            null != e && ((im.current = null), e.abort(), n_?.("idle"))
          }),
          (t0[61] = n_),
          (t0[62] = ev))
        : (ev = t0[62])
      let ih = (0, f.useEffectEvent)(ev)
      ;(t0[63] !== ih
        ? ((eb = () => () => {
            ig.current || ih()
          }),
          (t0[63] = ih),
          (t0[64] = eb))
        : (eb = t0[64]),
        t0[65] === Symbol.for("react.memo_cache_sentinel") ? ((eC = []), (t0[65] = eC)) : (eC = t0[65]),
        (0, f.useEffect)(eb, eC))
      let [ip, iv] = (0, f.useState)(nP)
      t0[66] !== t5 || t0[67] !== aT || t0[68] !== lY || t0[69] !== aB.cwd || t0[70] !== aE || t0[71] !== nk
        ? ((ey = !lY && !aE && t5.trim().length > 0 && ((null != aT && null != aB.cwd) || null != nk)),
          (t0[66] = t5),
          (t0[67] = aT),
          (t0[68] = lY),
          (t0[69] = aB.cwd),
          (t0[70] = aE),
          (t0[71] = nk),
          (t0[72] = ey))
        : (ey = t0[72])
      let ix = ey,
        ib = lR && !lm && !lB && !aE && t5.trim().length > 0 && (null != nk || (null != aT && null != aB.cwd && aO)),
        iC = ib && lF.active,
        iy =
          ((t = lL),
          (n = t2),
          (U = (function (e) {
            if (e.startsWith("data:")) return null
            let t = e.split(/[?#]/, 1)[0].split(/[\\/]/).at(-1)
            if (null == t || 0 === t.length) return null
            try {
              return decodeURIComponent(t)
            } catch {
              return t
            }
          })(t)),
          (W = n.trim().length > 0 ? n.trim() : (U ?? "image")),
          null != (0, e$.TP)(W) ? W : `${W}.${(0, e$.TP)(U ?? t) ?? "png"}`),
        iw = (0, e$.lO)(az, lw.downloadExtension ?? (0, e$.TP)(lz) ?? "png", {
          filename: na,
          title: nK?.chatGptDisplayTitle,
          gifSpeed: lS ? lN?.gifPlayback?.speed : void 0,
        }),
        iS = (0, e0.IY)(t5),
        iM = "local" === aG.kind && aG.id === aF && null != iS,
        ij = "cloud" === aN,
        iI = async (e, t) => {
          let { createLocalMarkupPreview: n } = await (0, i.yO)(),
            l = null == iS ? lz : await (0, e0.fB)(iS, aF, aD, t, aT)
          t.throwIfAborted()
          let a = null == l ? null : await n(l, e, t, lZ.current ?? void 0)
          return (
            null != a ||
              t.aborted ||
              null != nN ||
              lx
                .get(F.Id)
                .danger(
                  az.formatMessage({
                    id: "imageMarkup.prepareError",
                    defaultMessage: "Could not prepare markup. Try again",
                  }),
                  { errorAnalytics: { toastId: "imageMarkup.prepareError" } },
                ),
            a
          )
        }
      t0[73] !== t3 || t0[74] !== t5 || t0[75] !== a_ || t0[76] !== ak
        ? ((ew = a_ ? ak.find((e) => (null == t3 ? e.attachmentSrc === t5 : e.attachmentId === t3)) : void 0),
          (t0[73] = t3),
          (t0[74] = t5),
          (t0[75] = a_),
          (t0[76] = ak),
          (t0[77] = ew))
        : (ew = t0[77])
      let iP = ew
      t0[78] !== aQ || t0[79] !== iP?.comments || t0[80] !== aP
        ? ((eS = (aP ? aQ : iP?.comments) ?? []), (t0[78] = aQ), (t0[79] = iP?.comments), (t0[80] = aP), (t0[81] = eS))
        : (eS = t0[81])
      let iE = eS
      t0[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((eM = { layer: "2023018368", parameter: "enable_default_comments" }), (t0[82] = eM))
        : (eM = t0[82])
      let iA = (0, g._U)(!!lD && !!is && e8.H$, eM),
        ik = iA && iE.length > 0,
        iN = ik && !a8 && !ic
      t0[83] !== nD || t0[84] !== ic || t0[85] !== a8 || t0[86] !== nu || t0[87] !== iA || t0[88] !== nb
        ? ((ej = !iA || null == nD || a8 || ic ? void 0 : { lightbox: nu, viewer: nb }),
          (t0[83] = nD),
          (t0[84] = ic),
          (t0[85] = a8),
          (t0[86] = nu),
          (t0[87] = iA),
          (t0[88] = nb),
          (t0[89] = ej))
        : (ej = t0[89])
      let iT = ej,
        i_ = ("overlay" !== lp || lf || iA) && !lY && !aE && (aP ? null != aQ : null != iP),
        iR = (0, f.useContext)(eQ.a)
      ;(0, f.useLayoutEffect)(() =>
        iR?.registerBlocker(
          () =>
            aE ||
            0 === lL.trim().length ||
            0 === t5.trim().length ||
            a2 ||
            lU ||
            i_ ||
            lF.hasComments ||
            iC ||
            a8 ||
            null != ie ||
            n7?.active === !0 ||
            n7?.isSubmitting === !0 ||
            aq ||
            a1 ||
            a5 ||
            id ||
            lx.get(T.mX) ||
            lx.get(T.JX).some((e) => (null == t3 ? e.attachmentSrc === t5 : e.attachmentId === t3)) ||
            lx.get(T.gy).some((e) => e.id === t3 || e.src === t5),
        ),
      )
      let iL = iP?.attachmentId ?? t3 ?? ip
      t0[90] !== t5 || t0[91] !== iL || t0[92] !== lx || t0[93] !== aP
        ? ((eI = () => {
            ;(l2(!1), l6(null), aP ? aJ(null) : (0, K.ec)(lx, iL, t5))
          }),
          (t0[90] = t5),
          (t0[91] = iL),
          (t0[92] = lx),
          (t0[93] = aP),
          (t0[94] = eI))
        : (eI = t0[94])
      let iD = eI
      t0[95] !== ab
        ? ((eP = () => {
            let e = ab?.closest('[role="tabpanel"], [role="dialog"]')
            requestAnimationFrame(() => {
              e?.isConnected && null == e.closest("[inert]") && e.focus({ preventScroll: !0 })
            })
          }),
          (t0[95] = ab),
          (t0[96] = eP))
        : (eP = t0[96])
      let iz = eP,
        iH = (e, t) => {
          l$.current
            ? e()
            : aq ||
              (0, eq.J7)(
                iE.length > 0 || lU,
                () => {
                  ;(iD(), e())
                },
                (e) => {
                  let n = ab?.ownerDocument.activeElement ?? null
                  lQ((l) => l ?? { onDiscard: e, onKeepEditing: t, returnFocusTo: n })
                },
              )
        },
        iO = (e) => {
          let t = void 0 === e ? "editor" : e
          if (null != nJ) return void ("viewer" === t ? lc?.() : nJ.onCancel())
          if (null != iT) {
            aq || ("viewer" === t && null != lc ? lc() : iH(iz))
            return
          }
          let n = (e) => {
            "viewer" === t && null != lc ? lc(e) : (e(), iz())
          }
          lf && ic
            ? ae.current?.requestClose("viewer" === t ? lc : void 0)
            : iC
              ? aq || n(() => lI.current?.cancel())
              : a8
                ? id || n(() => a9(!1))
                : i_
                  ? aq || (aP && null != lc && "overlay" !== lp ? (iD(), lc()) : n(iD))
                  : lc?.()
        },
        iF = () => {
          ;(lx
            .get(F.Id)
            .danger(
              az.formatMessage({
                id: "imageSidePanel.commentUploadFailure",
                defaultMessage: "Failed to add image comment",
              }),
              { errorAnalytics: { toastId: "imageSidePanel.commentUploadFailure" } },
            ),
            iG([]))
        },
        iG = (e) => {
          ;(0 === e.length && l2(!1), aP)
            ? aJ(0 === e.length ? null : e)
            : (0, K.CB)(
                {
                  composerScope: lx,
                  absoluteImageFilePath: iS,
                  conversationId: aT,
                  attachmentId: iL,
                  attachmentSrc: t5,
                  downloadFileName: iy,
                  downloadSrc: lz,
                  excludeFromImageAnalytics: null == aL,
                  hostId: aF,
                  isCloudComposer: ij,
                  onUploadFailure: iF,
                  queryClient: aD,
                  src: lL,
                },
                e,
              )
        },
        iB = (e) => {
          null != e.id && (0, A.E)(lx, aT, nK, "annotation_edit")
          let t = { ...e, id: e.id ?? (0, C.A)() }
          return (
            iA && !aP && null == iP && (0, K.E$)(lx, iL, t5),
            iG(null == e.id ? [...iE, t] : iE.map((n) => (n.id === e.id ? t : n))),
            t.id
          )
        },
        iY = (e) => {
          iG(iE.filter((t) => t.id !== e))
        }
      t0[97] === Symbol.for("react.memo_cache_sentinel")
        ? ((eE = () => {
            ;(l2(!1), l1.current?.focus({ preventScroll: !0 }))
          }),
          (t0[97] = eE))
        : (eE = t0[97])
      let iV = eE,
        iZ = async (e, t) => {
          if (t?.aborted || lx.get(y.Nk)) return !1
          let { prompt: n, maskSrc: l } = e,
            a = new AbortController(),
            i = null == t ? a.signal : AbortSignal.any([a.signal, t])
          return (
            (im.current = a),
            n_?.("pending"),
            (async () => {
              if (null != nk) return (await nk({ ...e, attribution: nf }, i)) !== !1
              if (null != aT && null != aB.cwd) {
                let t = t5
                if (e.textEditSource?.pixels != null)
                  ((t = await (0, te.G)(e.textEditSource.pixels)), i.throwIfAborted())
                else if (/^(https?:|blob:)/i.test(t5)) {
                  let e = await (0, e$.M2)(lz, { signal: i })
                  if (null == e || !e.blob.type.startsWith("image/")) throw Error("Could not prepare image attachment")
                  ;((t = await (0, te.G)(e.blob)), i.throwIfAborted())
                }
                return (
                  !lx.get(y.Nk) &&
                  ((im.current = null),
                  await (async function ({
                    scope: e,
                    conversationId: t,
                    hostId: n,
                    attachmentSrcs: l,
                    attachmentPreviewSrc: a,
                    cwd: i,
                    agentMode: r,
                    permissionProfileId: o,
                    serviceTier: s,
                    shouldSendPermissionOverrides: c,
                    activeCollaborationMode: d,
                    followUpSubmitAction: u,
                    prompt: m,
                    signal: g,
                  }) {
                    g.throwIfAborted()
                    let h = {
                        prompt: m,
                        addedFiles: [],
                        fileAttachments: [],
                        ideContext: null,
                        inAppBrowserContext: null,
                        imageAttachments: l.map((e, t) => ({
                          id: (0, C.A)(),
                          previewSrc: 0 === t ? a : void 0,
                          src: e,
                        })),
                        isImageEditFollowUp: !0,
                        turnTrigger: "image_edit",
                        selectedTextAttachments: [],
                        pullRequestChecks: [],
                        pullRequestMergeConflict: null,
                      },
                      f = !0 === e.get(w.uF, t),
                      p = (0, _.jo)({ context: h, cwd: i, text: m }),
                      v = f ? void 0 : p.id,
                      x = "queue" === u ? "queue" : "send-now"
                    ;(null != e.get(e1.db, t) && (x = "queue-only"), (0, t8.c7)(e, t, p.id))
                    let b = (0, w.q8)(e, t)
                    try {
                      let l = await (0, _.h)(
                        {
                          scope: e,
                          turnTrigger: "image_edit",
                          managerHostId: b,
                          hostId: n,
                          context: h,
                          targetConversationId: t,
                          cwd: i,
                          agentMode: r,
                          permissionProfileId: o,
                          serviceTier: s,
                          shouldSendPermissionOverrides: c,
                          activeCollaborationMode: d,
                          restoreMessage: p,
                          clientUserMessageId: v,
                          isSubmissionCurrent: () => !e.get(y.Nk),
                          signal: g,
                        },
                        { queueModeOverride: x },
                      )
                      if ("queued" === l.status) return void (0, t8.sr)(e, t, p.id)
                      ;(0, t8.AF)(e, t, p.id, l.turnId, (e) => e(w.BP, { hostId: b, threadId: t }))
                    } catch (n) {
                      throw ((0, t8.sr)(e, t, p.id), n)
                    }
                  })({
                    scope: lx,
                    conversationId: aT,
                    hostId: aB.hostId,
                    cwd: aB.cwd,
                    agentMode: aV,
                    permissionProfileId: aZ,
                    serviceTier: aU.serviceTierForRequest,
                    shouldSendPermissionOverrides: aK,
                    activeCollaborationMode: aY,
                    attachmentSrcs: null == l ? [t] : [t, l],
                    attachmentPreviewSrc: e.textEditSource?.pixels == null ? lL : t,
                    followUpSubmitAction: aX,
                    prompt: n,
                    signal: i,
                  }),
                  null != e.textEditSource ||
                    (aA
                      ? (0, tr.i3)(lx)
                      : null != t3 && (0, T.Rh)(lx, "imageAttachments", (e) => e.filter((e) => e.id !== t3)),
                    !0))
                )
              }
              return !1
            })().then(
              (e) => (
                im.current === a && (im.current = null),
                a.signal.aborted ||
                  (function (e, t, n) {
                    t.current = e
                    try {
                      n?.(e ? "submitted" : "idle")
                    } finally {
                      t.current = !1
                    }
                  })(e, l$, n_),
                e
              ),
              (e) => {
                if (
                  (im.current === a && (im.current = null),
                  a.signal.aborted || n_?.("idle"),
                  i.aborted || (e instanceof Error && "StaleComposerSubmissionError" === e.name))
                )
                  return !1
                throw e
              },
            )
          )
        }
      t0[98] !== az || t0[99] !== lx
        ? ((eA = () => {
            lx.get(F.Id).danger(
              az.formatMessage({ id: "imageSidePanel.downloadFailure", defaultMessage: "Could not download image" }),
              { errorAnalytics: { toastId: "imageSidePanel.downloadFailure" } },
            )
          }),
          (t0[98] = az),
          (t0[99] = lx),
          (t0[100] = eA))
        : (eA = t0[100])
      let iK = eA,
        iX = (0, tt.K)(async () => {
          if ((nB?.(ny), !(lR && null != lI.current && (await lI.current.download())))) {
            nG?.()
            try {
              let e = lS && lN?.isAnimated && null != lN.gifPlayback ? await lA.imageForExport(lN) : void 0,
                t =
                  (e?.gifPlayback?.speed === 1 ? (lO ?? lg) : e?.src) ??
                  (null == iS ? lz : await (0, e0.r2)({ path: iS, hostId: aF, conversationId: aT }))
              if (
                null != t &&
                (await (0, e$.er)({
                  downloadSrc: t,
                  onDownloaded: () => nY?.(ny, { alt: t2, image: e ?? nK, src: e?.src ?? lL }),
                  suggestedFilename:
                    null == e
                      ? iw
                      : (0, e$.lO)(az, "gif", {
                          filename: na,
                          title: nK?.chatGptDisplayTitle,
                          gifSpeed: e.gifPlayback?.speed,
                        }),
                }))
              )
                return
            } catch {}
            iK()
          }
        }),
        iU = nl ?? az.formatMessage(lw.downloadLabel),
        iW = (0, l.jsx)(o.m, {
          content: iU,
          children:
            aE || null != nJ
              ? (0, l.jsx)(D.$, {
                  "aria-label": iU,
                  color: "ghostActive",
                  disabled: !0,
                  size: aj ? "imageToolbar" : "composerSm",
                  uniform: !0,
                  children: (0, l.jsx)(z.I, { "aria-hidden": !1, asset: d.Y }),
                })
              : (0, l.jsx)("a", {
                  className: (0, m.A)(
                    "flex aspect-square cursor-interaction items-center justify-center gap-1 rounded-full border border-default border-transparent p-0 whitespace-nowrap !text-default select-none no-drag visited:!text-default hover:bg-secondary-ghost-hover hover:!text-default focus:!text-default focus:outline-none",
                    aj ? "h-9" : "h-token-button-composer-sm",
                  ),
                  href: lz,
                  download: iw,
                  "aria-label": iU,
                  onClick: (e) => {
                    ;(aA && (0, e2.yy)(lx, r.CodexGeneratedImageDownloadClicked, {}), e.preventDefault(), iX())
                  },
                  children: aj ? (0, l.jsx)(H.EYt, {}) : (0, l.jsx)(z.I, { "aria-hidden": !1, asset: d.Y }),
                }),
        })
      ac ? (ek = "viewer") : ad && (ek = aI)
      let i$ = iM
        ? (0, l.jsx)(j.jT, {
            disabled: aE,
            hostId: aF,
            onDownload: () => {
              ;(aA && (0, e2.yy)(lx, r.CodexGeneratedImageDownloadClicked, {}), iX())
            },
            onBeforeOpen: () => {
              aA && (0, e2.yy)(lx, r.CodexGeneratedImageOpenInClicked, {})
            },
            path: iS,
            showLabel: !0,
            variant: ek,
          })
        : iW
      t0[101] !== i$
        ? ((eN = (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("div", { className: "flex items-center", children: i$ }),
          })),
          (t0[101] = i$),
          (t0[102] = eN))
        : (eN = t0[102])
      let iq = eN
      t0[103] !== iq || t0[104] !== iM || t0[105] !== es
        ? ((eT = iM ? (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(tS.b, { variant: es, children: iq }) }) : null),
          (t0[103] = iq),
          (t0[104] = iM),
          (t0[105] = es),
          (t0[106] = eT))
        : (eT = t0[106])
      let iQ = aE || null != nJ,
        iJ = aj ? "imageToolbar" : "composerSm"
      t0[107] !== iX || t0[108] !== aA || t0[109] !== lx
        ? ((e_ = () => {
            ;(aA && (0, e2.yy)(lx, r.CodexGeneratedImageDownloadClicked, {}), iX())
          }),
          (t0[107] = iX),
          (t0[108] = aA),
          (t0[109] = lx),
          (t0[110] = e_))
        : (e_ = t0[110])
      let i1 = aj ? c.u : s.R
      ;(t0[111] !== i1 ? ((eR = (0, l.jsx)(z.I, { asset: i1 })), (t0[111] = i1), (t0[112] = eR)) : (eR = t0[112]),
        t0[113] !== iU || t0[114] !== iQ || t0[115] !== iJ || t0[116] !== e_ || t0[117] !== eR
          ? ((eL = (0, l.jsx)(D.$, {
              "aria-label": iU,
              color: "ghostActive",
              disabled: iQ,
              size: iJ,
              radius: "full",
              uniform: !0,
              onClick: e_,
              children: eR,
            })),
            (t0[113] = iU),
            (t0[114] = iQ),
            (t0[115] = iJ),
            (t0[116] = e_),
            (t0[117] = eR),
            (t0[118] = eL))
          : (eL = t0[118]),
        t0[119] !== iU || t0[120] !== eL
          ? ((eD = (0, l.jsx)(o.m, { content: iU, children: eL })), (t0[119] = iU), (t0[120] = eL), (t0[121] = eD))
          : (eD = t0[121]),
        t0[122] !== eD || t0[123] !== es
          ? ((ez = (0, l.jsx)(tS.b, { variant: es, children: eD })), (t0[122] = eD), (t0[123] = es), (t0[124] = ez))
          : (ez = t0[124]),
        t0[125] !== eT || t0[126] !== ez
          ? ((eH = (0, l.jsxs)(l.Fragment, { children: [eT, ez] })), (t0[125] = eT), (t0[126] = ez), (t0[127] = eH))
          : (eH = t0[127]))
      let i0 = eH,
        i2 = null == nJ && !aE && !ic && !a8 && !i_ && !a5 && lw.canShop,
        i3 = null != nJ || a8 || i_ || iC
      ;(t0[128] !== n6 || t0[129] !== i3
        ? ((eO = () => {
            if (null != n6)
              return (
                n6.classList.toggle("invisible", i3),
                n6.toggleAttribute("inert", i3),
                () => {
                  ;(n6.classList.remove("invisible"), n6.removeAttribute("inert"))
                }
              )
          }),
          (eF = [n6, i3]),
          (t0[128] = n6),
          (t0[129] = i3),
          (t0[130] = eO),
          (t0[131] = eF))
        : ((eO = t0[130]), (eF = t0[131])),
        (0, f.useLayoutEffect)(eO, eF))
      let i5 = iM ? iq : null,
        i4 = aE || null != nJ
      ;(t0[132] !== iX || t0[133] !== aA || t0[134] !== lx
        ? ((eG = () => {
            ;(aA && (0, e2.yy)(lx, r.CodexGeneratedImageDownloadClicked, {}), iX())
          }),
          (t0[132] = iX),
          (t0[133] = aA),
          (t0[134] = lx),
          (t0[135] = eG))
        : (eG = t0[135]),
        t0[136] === Symbol.for("react.memo_cache_sentinel")
          ? ((eB = (0, l.jsx)(O.b5, { icon: { assets: { 16: s.R, 20: c.u } } })), (t0[136] = eB))
          : (eB = t0[136]),
        t0[137] !== iU || t0[138] !== i4 || t0[139] !== eG
          ? ((eY = (0, l.jsx)(tn.DW, { "aria-label": iU, disabled: i4, uniform: !0, onClick: eG, children: eB })),
            (t0[137] = iU),
            (t0[138] = i4),
            (t0[139] = eG),
            (t0[140] = eY))
          : (eY = t0[140]),
        t0[141] !== iU || t0[142] !== eY
          ? ((eV = (0, l.jsx)(o.m, { content: iU, children: eY })), (t0[141] = iU), (t0[142] = eY), (t0[143] = eV))
          : (eV = t0[143]),
        t0[144] !== i5 || t0[145] !== eV
          ? ((eK = (0, l.jsxs)(l.Fragment, { children: [i5, eV] })), (t0[144] = i5), (t0[145] = eV), (t0[146] = eK))
          : (eK = t0[146]))
      let i6 = eK
      ;(t0[147] !== t5 || t0[148] !== aL || t0[149] !== n7 || t0[150] !== lx
        ? ((eX = () => {
            ;(null != aL && (0, tl.jf)(lx, { imageSource: aL, mode: "markup", view: "single" }),
              null != n7 ? n7.onActiveChange(!0) : it(t5))
          }),
          (t0[147] = t5),
          (t0[148] = aL),
          (t0[149] = n7),
          (t0[150] = lx),
          (t0[151] = eX))
        : (eX = t0[151]),
        t0[152] !== t5 ||
        t0[153] !== aT ||
        t0[154] !== iL ||
        t0[155] !== aL ||
        t0[156] !== lx ||
        t0[157] !== nK ||
        t0[158] !== aP
          ? ((eU = () => {
              ;((0, A.E)(lx, aT, nK, "annotation_enter"),
                null != aL && (0, tl.jf)(lx, { imageSource: aL, mode: "comment", view: "single" }),
                aP ? aJ([]) : (iv((0, C.A)()), (0, K.E$)(lx, iL, t5)))
            }),
            (t0[152] = t5),
            (t0[153] = aT),
            (t0[154] = iL),
            (t0[155] = aL),
            (t0[156] = lx),
            (t0[157] = nK),
            (t0[158] = aP),
            (t0[159] = eU))
          : (eU = t0[159]),
        t0[160] !== aL || t0[161] !== lx || t0[162] !== a9
          ? ((tc = () => {
              ;(null != aL && (0, tl.jf)(lx, { imageSource: aL, mode: "remove", view: "single" }), a9(!0))
            }),
            (t0[160] = aL),
            (t0[161] = lx),
            (t0[162] = a9),
            (t0[163] = tc))
          : (tc = t0[163]),
        t0[164] !== aL || t0[165] !== lx
          ? ((td = () => {
              ;(null != aL && (0, tl.jf)(lx, { imageSource: aL, mode: "resize", view: "single" }), a3(!0))
            }),
            (t0[164] = aL),
            (t0[165] = lx),
            (t0[166] = td))
          : (td = t0[166]))
      let i7 = {
        markup: eX,
        comment: eU,
        erase: tc,
        "remove-background": () => {
          ;(null != aL && (0, tl.jf)(lx, { imageSource: aL, mode: "remove_background", view: "single" }),
            a4(!0),
            iZ({
              prompt: az.formatMessage({
                id: "imageSidePanel.removeBackgroundPrompt",
                defaultMessage:
                  "Remove the background from this image. Keep all foreground subjects unchanged and fully intact, with clean, smooth edges. Make the background transparent.",
              }),
              editMode: "remove_background",
            })
              .then((e) => {
                e && null != aL && (0, tl.xZ)(lx, { imageSource: aL, mode: "remove_background", selectedImageCount: 1 })
              })
              .catch((e) => {
                lx.get(F.Id).danger(tu(e, az), { errorAnalytics: { toastId: "imageSidePanel.ImageSidePanel" } })
              })
              .finally(() => a4(!1)))
        },
        resize: td,
      }
      t0[167] !== aR ||
      t0[168] !== ix ||
      t0[169] !== lY ||
      t0[170] !== lM ||
      t0[171] !== aE ||
      t0[172] !== a5 ||
      t0[173] !== a1 ||
      t0[174] !== ii
        ? ((tm = (e) =>
            (!lM || "markup" === e || "comment" === e) &&
            !lY &&
            !aE &&
            !a5 &&
            ("comment" === e ? aR : ix) &&
            ("markup" !== e || ii) &&
            (("resize" !== e && "remove-background" !== e) || !a1)),
          (t0[167] = aR),
          (t0[168] = ix),
          (t0[169] = lY),
          (t0[170] = lM),
          (t0[171] = aE),
          (t0[172] = a5),
          (t0[173] = a1),
          (t0[174] = ii),
          (t0[175] = tm))
        : (tm = t0[175])
      let i8 = tm,
        i9 = (e) =>
          !!i8(e) &&
          (i_ && iD(), "comment" !== e || i_ || "embedded" !== es || (0, N.O)(lx, { surface: "image" }), i7[e](), !0),
        re = (e) => {
          null == nE || an.current || ((an.current = !0), nA?.())
          let t = () => {
            nR?.(e) !== !0 && i9(e)
          }
          iA && lU ? iH(t) : t()
        },
        rt = (0, tt.K)((e) => {
          i9(e) ? nA?.() : (an.current = !1)
        })
      t0[176] !== i8 || t0[177] !== nE
        ? ((tg = null != nE && i8(nE)), (t0[176] = i8), (t0[177] = nE), (t0[178] = tg))
        : (tg = t0[178])
      let rn = tg,
        rl = (0, tt.K)((e) => {
          lZ.current = e
        })
      t0[179] !== rl ||
      t0[180] !== rn ||
      t0[181] !== np ||
      t0[182] !== nE ||
      t0[183] !== nO ||
      t0[184] !== rt ||
      t0[185] !== nw
        ? ((th = (e) => {
            let t = (0, eo.P)(np, rl)(e)
            if (
              (e?.complete && e.naturalWidth > 0 && (null == nw || e.currentSrc === e.src) && nO?.(e),
              null == e || null == nE || !rn || an.current)
            )
              return t
            let n = () => {
              an.current || 0 === e.naturalWidth || 0 === e.naturalHeight || ((an.current = !0), rt(nE))
            }
            return (
              e.addEventListener("load", n),
              n(),
              () => {
                ;(e.removeEventListener("load", n), t?.())
              }
            )
          }),
          (t0[179] = rl),
          (t0[180] = rn),
          (t0[181] = np),
          (t0[182] = nE),
          (t0[183] = nO),
          (t0[184] = rt),
          (t0[185] = nw),
          (t0[186] = th))
        : (th = t0[186])
      let ra = th,
        ri = ls ?? void 0
      if (null == ri && null != lc) {
        let e = (0, l.jsx)(tn.pU, {
          onClick: () => iO(lf || null != iT || ("overlay" === lp && null != nJ) ? "viewer" : "editor"),
        })
        ri = iT ? (0, l.jsx)("span", { className: "contents", "data-image-preview-navigation": !0, children: e }) : e
      }
      let rr = ic || a8 || (iC && lF.hasPendingComment) || aq || a1 || a5,
        ro = rr || i_,
        rs = rr || (i_ && null == iT) || null != lq || a2 || iC,
        rc = ix && (null != nk || aO) && !ro && !id && !n7?.isSubmitting,
        rd = (0, tt.K)((e, t) =>
          !rc || ig.current || null != im.current || lx.get(T.mX)
            ? Promise.resolve(!1)
            : ((ig.current = !0),
              n0?.(e.textEditSource?.operationId ?? null),
              iZ(e, t)
                .then(
                  (e) => (e || n0?.(null), e),
                  (e) => {
                    throw (n0?.(null), e)
                  },
                )
                .finally(() => {
                  ig.current = !1
                })),
        )
      ;((0, f.useImperativeHandle)(nD, () => ({
        isEditing: rs,
        cancelEditing: iO,
        requestClose: nJ?.requestClose ?? (null == iT || rr || a2 ? void 0 : iH),
        getClearSelectionHandler: () => nJ?.onClearSelection ?? (null == iT ? void 0 : lX.current?.onClearSelection),
      })),
        t0[187] !== lY ||
        t0[188] !== ly ||
        t0[189] !== ny ||
        t0[190] !== aE ||
        t0[191] !== ro ||
        t0[192] !== nK ||
        t0[193] !== lv ||
        t0[194] !== nw
          ? ((tf = (e) =>
              (0, l.jsx)(
                tz.A,
                {
                  fileInfoSource: ly,
                  title: lv,
                  image: aE ? void 0 : nK,
                  navigationDisabled: ro,
                  readOnly: lY,
                  children: e,
                },
                null == nw ? void 0 : ny,
              )),
            (t0[187] = lY),
            (t0[188] = ly),
            (t0[189] = ny),
            (t0[190] = aE),
            (t0[191] = ro),
            (t0[192] = nK),
            (t0[193] = lv),
            (t0[194] = nw),
            (t0[195] = tf))
          : (tf = t0[195]))
      let ru = tf,
        rm = (e) => {
          if (lR)
            return null == au
              ? null
              : (0, p.createPortal)(
                  (0, l.jsx)("div", {
                    className: "flex shrink-0 justify-center px-2 pt-10 pb-2",
                    role: "toolbar",
                    "aria-label": az.formatMessage({
                      id: "gifEditor.playbackControls",
                      defaultMessage: "GIF playback controls",
                    }),
                    children: e,
                  }),
                  au,
                )
          if (ac || null != nJ || iN) {
            let t = (0, l.jsx)("div", {
              className: "contents",
              "data-image-preview-toolbar": "overlay" === lp ? "" : void 0,
              children: (0, l.jsx)(tB.x, {
                ref: nv,
                variant: iN ? "annotation" : void 0,
                focusOnDrag: null == l4 && void 0,
                trackAnalytics: !0,
                dragBoundary: nb ?? ab,
                children: e,
              }),
            })
            return null != nJ && null != nu
              ? (0, p.createPortal)(
                  (0, l.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-x-0 top-0 bottom-[var(--image-preview-footer-height,0px)] z-40",
                    children: t,
                  }),
                  nu,
                )
              : t
          }
          return ad
            ? null == af
              ? null
              : (0, p.createPortal)(
                  (0, l.jsx)("div", {
                    className: "pointer-events-none flex min-w-0 justify-center gap-2",
                    children: e,
                  }),
                  af,
                )
            : (0, l.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-x-0 top-2 z-40 flex justify-center gap-2 px-4 [@container_(max-width:630px)]:hidden",
                children: e,
              })
        },
        rg = null
      if (io && (as || (!a8 && !ic))) {
        let e = () => {
            iA ? iH(iz) : (iD(), iz())
          },
          t = () => {
            ;(lM && (0, ts.H)(lx, "CHATGPT_IMAGEGEN_GIF_ACTION_COMMENTS_SUBMITTED", "spritesheet"),
              aP
                ? (async () => {
                    if (aP && 0 !== iE.length && !aq) {
                      a$(!0)
                      try {
                        let e =
                          null == lo
                            ? (0, ed.Ki)({
                                imageCommentGroups: [{ comments: iE, imageNumber: 1 }],
                                intl: az,
                                prompt: "",
                              })
                            : await lo(iE)
                        ;(await iZ({ prompt: e, annotationCount: iE.length })) &&
                          (null != aL &&
                            (0, tl.xZ)(lx, {
                              commentCount: iE.length,
                              hasGeneralInstruction: !1,
                              imageSource: aL,
                              mode: "comment",
                              selectedImageCount: 1,
                            }),
                          iD(),
                          nT?.())
                      } catch (e) {
                        lx.get(F.Id).danger(tu(e, az), { errorAnalytics: { toastId: "imageSidePanel.submitComments" } })
                      }
                      a$(!1)
                    }
                  })()
                : null != nT || lM
                  ? (0, k.d1)("composer.submit", "image_comment_toolbar", { onComposerSubmitted: nT })
                  : (0, k.d1)("composer.submit", "image_comment_toolbar"))
          }
        rg = i_
          ? (0, l.jsx)("div", {
              ref: lJ,
              className: "pointer-events-auto min-w-0",
              children: iN
                ? (0, l.jsx)(nC, {
                    count: iE.length,
                    isSubmitting: aq,
                    sendDisabled: lU,
                    commentsButtonRef: l1,
                    commentsOpen: l0,
                    onToggleComments: () => l2(nI),
                    onCancel: e,
                    onSubmit: t,
                  })
                : (0, l.jsx)(tH.G, {
                    variant: es,
                    commentCount: iE.length,
                    emptyMessage: (0, l.jsx)(x.A, {
                      id: "imageSidePanel.commentHelperDesktop",
                      defaultMessage: "Click on the image to add comments",
                    }),
                    isSubmitting: aq,
                    onCancel: e,
                    onSubmit: t,
                  }),
            })
          : (0, l.jsx)(
              t6,
              {
                variant: es,
                canEditImage: ix,
                annotationToolsOnly: lM,
                isLoading: aE,
                isSubmittingBackgroundRemoval: a5,
                isSubmittingResize: a1,
                onMarkup: ii ? () => re("markup") : void 0,
                showComment: lM ? aR : is && !iA,
                onComment: () => {
                  ;(lM && (0, ts.H)(lx, "CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_COMMENT_CLICKED", "spritesheet"),
                    re("comment"))
                },
                onEditText: n2,
                onErase: () => re("erase"),
                onRemoveBackground: () => re("remove-background"),
                onResize: (e) => {
                  ;(async (e) => {
                    ix &&
                      (null != aL && (0, tl.xZ)(lx, { imageSource: aL, mode: "resize", selectedImageCount: 1 }),
                      a0(!0),
                      await (async () => {
                        try {
                          let t = az.formatMessage(
                            {
                              id: "imageSidePanel.resizePrompt",
                              defaultMessage: "Make the aspect ratio {aspectRatio}",
                            },
                            { aspectRatio: e },
                          )
                          await iZ({ prompt: t, editMode: "resize" })
                        } catch (e) {
                          lx.get(F.Id).danger(tu(e, az), { errorAnalytics: { toastId: "imageSidePanel.submitResize" } })
                        }
                      })().finally(() => {
                        a0(!1)
                      }))
                  })(e)
                },
                resizeMenuOpen: a2,
                onResizeMenuOpenChange: (e) => {
                  e ? re("resize") : a3(!1)
                },
                downloadAction: null,
              },
              null == nw ? void 0 : ny,
            )
      }
      ;(!lB || lG || ac || (rg = null),
        null != n1 && null == nJ && (rg = (0, l.jsxs)(l.Fragment, { children: [n1, rg] })))
      let rh = (0, f.useContext)(eW.f)
      t0[196] !== lL || t0[197] !== nw
        ? ((tp = null != nw && lL.trim().length > 0), (t0[196] = lL), (t0[197] = nw), (t0[198] = tp))
        : (tp = t0[198])
      let rf = tp,
        rp = (null != nw || null != nJ || !lG || lR || "overlay" === lp || (i2 && null != nQ)) && (!aE || rf),
        rv = !rp && !aE && null != ld,
        rx = rp || null == rg || a8 || ic ? null : rm(rg)
      ;(t0[199] !== i3 || t0[200] !== aj || t0[201] !== lb || t0[202] !== lt
        ? ((tv = aj && i3 && null != lt ? (e) => (null == e ? void 0 : (0, tF.N)(lb, lt)) : void 0),
          (t0[199] = i3),
          (t0[200] = aj),
          (t0[201] = lb),
          (t0[202] = lt),
          (t0[203] = tv))
        : (tv = t0[203]),
        t0[204] !== tv ? ((tx = (0, eo.P)(aC, tv)), (t0[204] = tv), (t0[205] = tx)) : (tx = t0[205]))
      let rb = tx,
        rC = i2 && nQ
      if ((lR && (rC = (0, l.jsx)("div", { ref: am, className: "contents" })), null != nJ && (rC = null), rp)) {
        let e = iA ? "comment" : "view"
        null != nJ ? (e = "text") : a8 ? (e = "remove") : i_ || iC ? (e = "comment") : ic && (e = "markup")
        let t = (t) =>
          (0, l.jsx)(
            tG.I,
            {
              minimumImageHeight: lS ? 480 : void 0,
              hasImageRail: lC,
              hasNavigationGutters: lh,
              overlayToolbarHeight: nc,
              footerActions: rC,
              mode: e,
              loadingPreview: nJ?.loadingPreview ?? (aE ? nJ?.recovery : void 0),
              pendingImageContent: aE && nJ?.loadingPreview == null && nJ?.recovery == null ? ng : void 0,
              clipboardScope: n5,
              sizeControlContainer: n9,
              imageId: null == nw ? t5 : (ny ?? t5),
              viewportId: nw,
              viewerId: n$,
              imageRef: ra,
              stageRef: iA ? l8 : void 0,
              onImageError: nH,
              onImageLoad: nO,
              previewOverlay: "overlay" === lp,
              reserveInlineComposer: null == n4 && (null == lt || rh?.composerHost == null),
              markupEditorRef: at,
              standaloneMarkupComposer: n7?.standaloneComposer ?? lf,
              markupSourceConversationId: n7?.sourceConversationId,
              isSubmitting: aq || n7?.isSubmitting,
              referrerPolicy: nt,
              sourceImage: nK,
              imageEditAttribution: nf,
              chatGptConversationId: t4,
              onImageEditSubmitted: () => {
                ;(null != aL && (0, tl.xZ)(lx, { imageSource: aL, mode: "markup", selectedImageCount: 1 }), nT?.())
              },
              prepareNativeMarkup: ia ? iI : void 0,
              onSaveMarkup:
                null == nN
                  ? void 0
                  : async (e, t) => {
                      let n = await iI(e, t)
                      return null != n && (await nN({ ...n, document: e }, t))
                    },
              onMarkupSaved: lc ?? nT,
              alt: t2,
              src: lL,
              showCommentTool: null == nJ && ir,
              viewerHeaderHeight: ay,
              viewerZoomControlContainer: ac ? av : void 0,
              renderToolbar: rm,
              keepToolbarMounted: null == nJ && as,
              toolbarControls: rg,
              trailingControls: al ? null : iq,
              toolbarVariant: aj ? "imageTools" : "compact",
              tabId: lt,
              zoom: ld,
              zoomControlContainer: ad ? ag : void 0,
              onCancel: () => {
                ;(null != n7 ? n7.onActiveChange(!1) : it(null), iz())
              },
              onViewportInteractionStart: () => {
                ;(t?.onInteractionStart(),
                  lK.current?.onViewportInteractionStart(),
                  lX.current?.onViewportInteractionStart(),
                  l9.current?.onViewportInteractionStart())
              },
              renderOverlay: (n, a, i) =>
                null != nJ
                  ? nJ.renderOverlay(
                      n,
                      i,
                      rc ? rd : void 0,
                      !aj || ("chatgpt-thread" !== lb.value.routeKind && null == t4),
                    )
                  : null != t
                    ? t.renderOverlay(n)
                    : a8
                      ? (0, l.jsx)(tU, {
                          ref: l9,
                          viewport: n,
                          imageSize: a,
                          sizeControlContainer: n9,
                          renderToolbar: i,
                          toolbarVariant: es,
                          isSubmitting: id,
                          onCancel: () => {
                            ;(a9(!1), iz())
                          },
                          onSubmit: (e) => {
                            ;(async (e) => {
                              ix &&
                                0 !== e.length &&
                                (null != aL &&
                                  (0, tl.xZ)(lx, { imageSource: aL, mode: "remove", selectedImageCount: 1 }),
                                iu(!0),
                                await (async () => {
                                  try {
                                    let t = aj
                                      ? az.formatMessage({
                                          id: "imageSidePanel.removeSelectionPrompt",
                                          defaultMessage: "Remove the selected area from this image",
                                        })
                                      : az.formatMessage({
                                          id: "imageSidePanel.removePrompt",
                                          defaultMessage:
                                            "Remove the area marked in the second image from the first image",
                                        })
                                    ;(await iZ({ prompt: t, maskSrc: e, editMode: "remove" })) && (a9(!1), nT?.())
                                  } catch (e) {
                                    lx.get(F.Id).danger(tu(e, az), {
                                      errorAnalytics: { toastId: "imageSidePanel.submitRemove" },
                                    })
                                  }
                                })().finally(() => {
                                  iu(!1)
                                }))
                            })(e)
                          },
                        })
                      : iA && "comment" === e
                        ? (0, l.jsx)(
                            eZ,
                            {
                              onDismissRegionReveal: nm,
                              regions: nK?.displayVariantId == null ? nK?.chatGptImageMetadata?.objectRegions : void 0,
                              contoursSrc:
                                nK?.displayVariantId == null ? nK?.chatGptImageMetadata?.objectContoursSrc : void 0,
                              assetResolver: nM,
                              imageSize: nK?.width && nK.height ? { width: nK.width, height: nK.height } : a,
                              ref: lX,
                              toolbarRef: lJ,
                              composerElement: i3 ? null : n6,
                              viewport: n,
                              comments: iE,
                              draftGuard: iT,
                              hoveredCommentId: l3,
                              onHoverComment: l5,
                              onDirtyChange: lW,
                              selection: l4,
                              onSelectionChange: l6,
                              onDeleteComment: iY,
                              onSubmitComment: iB,
                            },
                            nK?.id ?? ny ?? lL,
                          )
                        : i_
                          ? (0, l.jsx)(X.D, {
                              ref: lK,
                              viewport: n,
                              alt: t2,
                              comments: iE,
                              referrerPolicy: nt,
                              onCommentActivate: (e) => {
                                lM &&
                                  (0, ts.H)(
                                    lx,
                                    "pin" === e
                                      ? "CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_COMMENT_PIN_CLICKED"
                                      : "CHATGPT_IMAGEGEN_GIF_ACTION_FRAME_COMMENT_MARKER_CLICKED",
                                    "spritesheet",
                                  )
                              },
                              src: lL,
                              onDeleteComment: iY,
                              onSubmitComment: iB,
                            })
                          : null,
            },
            nw ?? t5,
          )
        ;((tC = t), (tb = t()))
      } else if (aE) {
        let e
        ;(t0[206] !== ng
          ? ((e = (0, l.jsx)("div", {
              className: "[container-type:size] flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4",
              children: ng,
            })),
            (t0[206] = ng),
            (t0[207] = e))
          : (e = t0[207]),
          (tb = e))
      } else if (null == ld) {
        let e,
          t,
          n,
          a = lS ? 480 : void 0,
          i = lS ? 480 : void 0,
          r = lS && "size-120",
          o = !aa && "rounded-xl"
        ;(t0[208] !== r || t0[209] !== o
          ? ((e = (0, m.A)("max-h-full max-w-full object-contain", r, o)), (t0[208] = r), (t0[209] = o), (t0[210] = e))
          : (e = t0[210]),
          t0[211] !== nO ? ((t = (e) => nO?.(e.currentTarget)), (t0[211] = nO), (t0[212] = t)) : (t = t0[212]),
          t0[213] !== t2 ||
          t0[214] !== ra ||
          t0[215] !== nH ||
          t0[216] !== nt ||
          t0[217] !== lL ||
          t0[218] !== a ||
          t0[219] !== i ||
          t0[220] !== e ||
          t0[221] !== t
            ? ((n = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center p-4",
                children: (0, l.jsx)("img", {
                  ref: ra,
                  alt: t2,
                  width: a,
                  height: i,
                  className: e,
                  referrerPolicy: nt,
                  src: lL,
                  onError: nH,
                  onLoad: t,
                }),
              })),
              (t0[213] = t2),
              (t0[214] = ra),
              (t0[215] = nH),
              (t0[216] = nt),
              (t0[217] = lL),
              (t0[218] = a),
              (t0[219] = i),
              (t0[220] = e),
              (t0[221] = t),
              (t0[222] = n))
            : (n = t0[222]),
          (tb = n))
      } else {
        let e,
          t = al ? null : iq,
          n = aj ? "imageTools" : "compact",
          a = ac ? rx : void 0,
          i = ac ? av : void 0,
          r = ad ? ag : void 0
        ;(t0[223] !== t2 ||
        t0[224] !== ra ||
        t0[225] !== lC ||
        t0[226] !== aa ||
        t0[227] !== nH ||
        t0[228] !== nO ||
        t0[229] !== nt ||
        t0[230] !== lL ||
        t0[231] !== t ||
        t0[232] !== n ||
        t0[233] !== a ||
        t0[234] !== i ||
        t0[235] !== r ||
        t0[236] !== ay ||
        t0[237] !== ld
          ? ((e = (0, l.jsx)(nS, {
              alt: t2,
              hasImageRail: lC,
              imageRef: ra,
              isFullscreen: aa,
              onImageLoad: nO,
              referrerPolicy: nt,
              src: lL,
              onImageError: nH,
              trailingControls: t,
              toolbarVariant: n,
              toolbar: a,
              zoom: ld,
              viewerHeaderHeight: ay,
              viewerZoomControlContainer: i,
              zoomControlContainer: r,
            })),
            (t0[223] = t2),
            (t0[224] = ra),
            (t0[225] = lC),
            (t0[226] = aa),
            (t0[227] = nH),
            (t0[228] = nO),
            (t0[229] = nt),
            (t0[230] = lL),
            (t0[231] = t),
            (t0[232] = n),
            (t0[233] = a),
            (t0[234] = i),
            (t0[235] = r),
            (t0[236] = ay),
            (t0[237] = ld),
            (t0[238] = e))
          : (e = t0[238]),
          (tb = e))
      }
      let ry = () =>
        lu && null == nJ
          ? (0, ta.getGeneratedImageContextMenuItems)(lx, {
              chatGptConversationId: t4,
              displaySrc: lL,
              hostId: aF,
              image:
                null == ny
                  ? { alt: t2, isAnimated: lS, kind: "generic", src: (0, ex.fi)(t5) ? lz : t5 }
                  : { alt: t2, id: ny, isAnimated: lS, previewSrc: lL, sourceImage: nK, src: t5, tabTitle: lv },
              imageAssetResolver: nM,
              intl: az,
              onAddedToChat: "overlay" === lp ? lc : void 0,
              onDownload: lS ? iX : void 0,
              onDownloadClick: nG,
              onDownloadInitiated: () => nB?.(ny),
              onDownloaded: () => nY?.(ny, { alt: t2, image: nK, src: lL }),
              onOpenedInNewTab: "overlay" === lp ? lc : void 0,
            })
          : []
      if (lR && null != lO) {
        let e,
          t,
          n,
          a,
          i = l_ ? lA.loadExport : void 0,
          r = l_ ? lA.loadOriginal : void 0,
          o = nK?.chatGptDisplayTitle,
          s = lN?.gifPlayback?.speed,
          c = lN?.gifPlayback?.variants
        t0[239] !== c ? ((e = (0, h.Hv)(c)), (t0[239] = c), (t0[240] = e)) : (e = t0[240])
        let d = l_ ? lA.changeSpeed : void 0
        ;(t0[241] !== t2 || t0[242] !== ny || t0[243] !== nY || t0[244] !== nK || t0[245] !== lL
          ? ((t = () => nY?.(ny, { alt: t2, image: nK, src: lL })),
            (t0[241] = t2),
            (t0[242] = ny),
            (t0[243] = nY),
            (t0[244] = nK),
            (t0[245] = lL),
            (t0[246] = t))
          : (t = t0[246]),
          t0[247] !== ny || t0[248] !== nB
            ? ((n = () => nB?.(ny)), (t0[247] = ny), (t0[248] = nB), (t0[249] = n))
            : (n = t0[249]))
        let u = (e) => (0, l.jsx)("div", { className: "contents", children: tC?.(e) })
        ;(t0[250] !== t2 ||
        t0[251] !== t5 ||
        t0[252] !== ib ||
        t0[253] !== lu ||
        t0[254] !== ry ||
        t0[255] !== lI ||
        t0[256] !== lE ||
        t0[257] !== aL ||
        t0[258] !== nG ||
        t0[259] !== nT ||
        t0[260] !== lO ||
        t0[261] !== lH ||
        t0[262] !== lZ ||
        t0[263] !== na ||
        t0[264] !== rm ||
        t0[265] !== nK ||
        t0[266] !== lL ||
        t0[267] !== iZ ||
        t0[268] !== i ||
        t0[269] !== r ||
        t0[270] !== o ||
        t0[271] !== s ||
        t0[272] !== e ||
        t0[273] !== d ||
        t0[274] !== t ||
        t0[275] !== n ||
        t0[276] !== u
          ? ((a = (0, l.jsx)(
              tL,
              {
                ref: lI,
                src: lL,
                downloadSrc: lO,
                loadExport: i,
                loadOriginal: r,
                downloadFilename: na,
                downloadTitle: o,
                initialSpeed: s,
                availableSpeeds: e,
                onSpeedChange: d,
                imageRef: lZ,
                viewerId: lE,
                assetSrc: t5,
                alt: t2,
                enabled: ib,
                sourceImage: nK,
                imageSource: aL,
                onSubmit: iZ,
                onSubmitted: nT,
                renderToolbar: rm,
                contextMenuEnabled: lu,
                getImageContextMenuItems: ry,
                onDownloaded: t,
                onContextMenuDownload: n,
                onDownloadClick: nG,
                children: u,
              },
              lH,
            )),
            (t0[250] = t2),
            (t0[251] = t5),
            (t0[252] = ib),
            (t0[253] = lu),
            (t0[254] = ry),
            (t0[255] = lI),
            (t0[256] = lE),
            (t0[257] = aL),
            (t0[258] = nG),
            (t0[259] = nT),
            (t0[260] = lO),
            (t0[261] = lH),
            (t0[262] = lZ),
            (t0[263] = na),
            (t0[264] = rm),
            (t0[265] = nK),
            (t0[266] = lL),
            (t0[267] = iZ),
            (t0[268] = i),
            (t0[269] = r),
            (t0[270] = o),
            (t0[271] = s),
            (t0[272] = e),
            (t0[273] = d),
            (t0[274] = t),
            (t0[275] = n),
            (t0[276] = u),
            (t0[277] = a))
          : (a = t0[277]),
          (tb = a))
      }
      t0[278] !== i3 || t0[279] !== n4
        ? ((ty = n4?.(!i3)), (t0[278] = i3), (t0[279] = n4), (t0[280] = ty))
        : (ty = t0[280])
      let rw = ty
      if (null != rw && !lf) {
        let e
        ;(t0[281] !== i3 || t0[282] !== rw
          ? ((e = (0, l.jsx)(I.L, { composerOnly: !0, isHidden: i3, reserveFullComposerHeight: !0, children: rw })),
            (t0[281] = i3),
            (t0[282] = rw),
            (t0[283] = e))
          : (e = t0[283]),
          (rw = e))
      }
      let rS =
          ik && l0
            ? (0, l.jsx)(t7.V, {
                open: !0,
                stageElement: l7,
                toolbarRef: lJ,
                children: (0, l.jsx)(nx, {
                  comments: iE,
                  onHoverComment: l5,
                  selectedCommentId: l4?.mode === "create" ? null : (l4?.id ?? null),
                  onOpen: (e) => lX.current?.openComment(e, "view"),
                  onEdit: (e) => lX.current?.openComment(e, "edit"),
                  onDelete: (e) => {
                    ;(l6(null), iY(e))
                  },
                  onClose: iV,
                }),
              })
            : null,
        rM = nJ?.propertiesPanel ?? rS
      t0[284] !== rS || t0[285] !== aq || t0[286] !== nu || t0[287] !== rM || t0[288] !== ay
        ? ((tw =
            null != rM
              ? (0, l.jsx)("div", {
                  className: (0, m.A)(
                    "pointer-events-none absolute inset-x-0 z-30 grid min-h-0 justify-items-end overflow-clip",
                    null == nu ? "bottom-[var(--right-panel-composer-overlay-reserve,0px)]" : "bottom-0",
                  ),
                  style: { top: ay },
                  "data-annotation-control": !0,
                  inert: null != rS && aq,
                  onPointerDown: nj,
                  children: rM,
                })
              : null),
          (t0[284] = rS),
          (t0[285] = aq),
          (t0[286] = nu),
          (t0[287] = rM),
          (t0[288] = ay),
          (t0[289] = tw))
        : (tw = t0[289])
      let rj = tw
      t0[290] !== lq
        ? ((tM =
            null != lq &&
            (0, l.jsx)(tO.Z, {
              kind: "discardComments",
              returnFocusTo: lq.returnFocusTo,
              onCancel: () => {
                ;(lQ(null), lq.onKeepEditing?.())
              },
              onConfirm: () => {
                ;(lQ(null), lq.onDiscard())
              },
            })),
          (t0[290] = lq),
          (t0[291] = tM))
        : (tM = t0[291])
      let rI = M.Z,
        rP = n3?.accountId,
        rE = "overlay" === lp || lC || lh ? "visible" : "hidden"
      t0[292] !== ly ? ((tj = null == ly ? void 0 : (0, P.xd)(ly)), (t0[292] = ly), (t0[293] = tj)) : (tj = t0[293])
      let rA = n3?.userId,
        rk = ac
          ? (0, l.jsx)("div", {
              className: (0, m.A)("@container absolute inset-x-0 top-0 z-30", lC && "pe-18"),
              children:
                ((t1 =
                  null == nr
                    ? (0, l.jsx)("span", { ref: ax, "data-viewer-zoom-control": !0, className: "contents" })
                    : (0, l.jsxs)("div", {
                        className: "stackZoomControl-P1Y7K0",
                        children: [
                          (0, l.jsx)("span", { ref: ax, "data-viewer-zoom-control": !0 }),
                          (0, l.jsxs)(tn.DW, {
                            className: "loadingZoomControl-t2ZBfd",
                            variant: "zoom",
                            disabled: !0,
                            "aria-label": az.formatMessage({ id: "viewerHeader.zoom", defaultMessage: "Zoom" }),
                            children: [
                              (0, l.jsx)("span", {
                                "aria-hidden": "true",
                                className: "tabular-nums",
                                children: (0, l.jsx)(x.A, {
                                  id: "imageViewer.zoomUnavailable",
                                  defaultMessage: "\u2014",
                                }),
                              }),
                              (0, l.jsx)(H.HIf, {}),
                            ],
                          }),
                        ],
                      })),
                (0, l.jsxs)(tn.Uq, {
                  ref: aM,
                  className: lC || lh ? "-ms-18 -me-18" : void 0,
                  enabled: "overlay" === lp,
                  children: [
                    (0, l.jsx)(tn.Yi, {
                      density: "surface",
                      leading: [
                        {
                          id: "title",
                          content:
                            ll?.({ navigationDisabled: ro }) ??
                            nq?.({
                              image: aE ? void 0 : nK,
                              imageId: ny,
                              isImageActionsDisabled: aE || ro || null != nJ,
                              navigationDisabled: ro || null != nJ,
                              isUnifiedViewerEnabled: ac,
                              renderMenu: ru,
                            }) ??
                            ru(null),
                          hidePriority: 4,
                        },
                        { id: "view-controls", content: li, hidePriority: 5 },
                        { id: "leading-controls", content: lr?.({ navigationDisabled: ro }) },
                      ],
                      trailing: [
                        { id: "zoom", content: t1, hidePriority: 3 },
                        {
                          id: "actions",
                          content:
                            nW?.({
                              viewerId: n$,
                              alt: t2,
                              image: nK,
                              imageId: ny,
                              isImageActionsDisabled: aE || ro || null != nJ,
                              isUnifiedViewerEnabled: ac,
                              navigationDisabled: ro,
                              onDownload: iX,
                              saveAction: i6,
                              src: lL,
                            }) ?? i6,
                        },
                        {
                          id: "open-in-side-panel",
                          collapsePriority: 1,
                          collapsedTitle: aH,
                          content:
                            null == nz
                              ? null
                              : (0, l.jsxs)(tn.DW, {
                                  "aria-label": aH,
                                  "data-image-preview-navigation": null != iT || void 0,
                                  disabled: aE || ro || a2 || iC,
                                  onClick: null != iT ? () => iH(nz) : nz,
                                  children: [
                                    (0, l.jsx)(O.b5, { icon: { 16: H.Zdv, 20: H.Zji } }),
                                    (0, l.jsx)("span", {
                                      "data-viewer-header-collapsible": !0,
                                      children: (0, l.jsx)(x.A, {
                                        id: "imagePreview.openInSidePanel",
                                        defaultMessage: "Open in side panel",
                                      }),
                                    }),
                                  ],
                                }),
                        },
                        { id: "window-controls", content: ri },
                      ],
                    }),
                    null != la ? (0, l.jsx)("div", { className: "relative z-30 flex px-2 pb-2", children: la }) : null,
                  ],
                })),
            })
          : null,
        rN = ac ? "overlay" : void 0,
        rT = "overlay" !== lp && "bg-surface-secondary",
        r_ = lC && "pe-18"
      ;(t0[294] !== rT || t0[295] !== r_
        ? ((tI = (0, m.A)(
            "@container relative flex h-full min-h-0 w-full min-w-0 flex-col pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]",
            rT,
            r_,
          )),
          (t0[294] = rT),
          (t0[295] = r_),
          (t0[296] = tI))
        : (tI = t0[296]),
        t0[297] !== iD ||
        t0[298] !== iz ||
        t0[299] !== i_ ||
        t0[300] !== lc ||
        t0[301] !== lp ||
        t0[302] !== iT ||
        t0[303] !== iA ||
        t0[304] !== lb ||
        t0[305] !== lx ||
        t0[306] !== lt ||
        t0[307] !== aP
          ? ((tP = (e) => {
              aP &&
                null == iT &&
                i_ &&
                "Escape" === e.key &&
                !(
                  iA &&
                  e.target instanceof Element &&
                  e.target.closest("[data-codex-escape-boundary], [data-annotation-control]")
                ) &&
                !e.nativeEvent.isComposing &&
                (e.preventDefault(),
                e.stopPropagation(),
                iD(),
                null != (null == lt ? null : (0, e9.KE)(lx, lt)) && null != lt
                  ? iz()
                  : null != lc && "overlay" !== lp
                    ? lc()
                    : iz())
            }),
            (t0[297] = iD),
            (t0[298] = iz),
            (t0[299] = i_),
            (t0[300] = lc),
            (t0[301] = lp),
            (t0[302] = iT),
            (t0[303] = iA),
            (t0[304] = lb),
            (t0[305] = lx),
            (t0[306] = lt),
            (t0[307] = aP),
            (t0[308] = tP))
          : (tP = t0[308]),
        t0[309] !== iO || t0[310] !== i_ || t0[311] !== iC || t0[312] !== a8 || t0[313] !== lV
          ? ((tE = (e) => {
              lV &&
                (a8 || i_ || iC) &&
                "Escape" === e.key &&
                !e.defaultPrevented &&
                !e.nativeEvent.isComposing &&
                (e.preventDefault(), e.stopPropagation(), iO())
            }),
            (t0[309] = iO),
            (t0[310] = i_),
            (t0[311] = iC),
            (t0[312] = a8),
            (t0[313] = lV),
            (t0[314] = tE))
          : (tE = t0[314]),
        t0[315] !== t2 ||
        t0[316] !== iX ||
        t0[317] !== aI ||
        t0[318] !== ad ||
        t0[319] !== lC ||
        t0[320] !== i0 ||
        t0[321] !== ny ||
        t0[322] !== az ||
        t0[323] !== aE ||
        t0[324] !== aq ||
        t0[325] !== ac ||
        t0[326] !== n7?.isSubmitting ||
        t0[327] !== ro ||
        t0[328] !== nW ||
        t0[329] !== ap ||
        t0[330] !== ah ||
        t0[331] !== nK ||
        t0[332] !== lL ||
        t0[333] !== nJ ||
        t0[334] !== n$
          ? ((tA = ad
              ? (0, l.jsx)("div", {
                  className: (0, m.A)("pointer-events-none relative z-40 h-0 shrink-0", lC && "-me-18"),
                  children: (0, l.jsxs)("div", {
                    className: "absolute inset-x-2 top-2 flex items-start justify-end gap-2",
                    children: [
                      (0, l.jsx)("div", {
                        ref: ap,
                        className:
                          "@container flex min-w-0 flex-1 justify-center [@container_(max-width:630px)]:hidden",
                        inert: aq || n7?.isSubmitting,
                      }),
                      (0, l.jsxs)("div", {
                        className: "pointer-events-auto flex shrink-0 items-center gap-1",
                        role: "group",
                        "aria-label": az.formatMessage({
                          id: "imagePreview.headerActions",
                          defaultMessage: "Image actions",
                        }),
                        children: [
                          nW?.({
                            viewerId: n$,
                            alt: t2,
                            image: nK,
                            imageId: ny,
                            isImageActionsDisabled: aE || ro || null != nJ,
                            isUnifiedViewerEnabled: ac,
                            navigationDisabled: ro,
                            floatingToolbarVariant: aI,
                            onDownload: iX,
                            saveAction: i0,
                            src: lL,
                          }) ?? i0,
                          (0, l.jsx)("span", { ref: ah, className: "contents", inert: aq || n7?.isSubmitting }),
                        ],
                      }),
                    ],
                  }),
                })
              : null),
            (t0[315] = t2),
            (t0[316] = iX),
            (t0[317] = aI),
            (t0[318] = ad),
            (t0[319] = lC),
            (t0[320] = i0),
            (t0[321] = ny),
            (t0[322] = az),
            (t0[323] = aE),
            (t0[324] = aq),
            (t0[325] = ac),
            (t0[326] = n7?.isSubmitting),
            (t0[327] = ro),
            (t0[328] = nW),
            (t0[329] = ap),
            (t0[330] = ah),
            (t0[331] = nK),
            (t0[332] = lL),
            (t0[333] = nJ),
            (t0[334] = n$),
            (t0[335] = tA))
          : (tA = t0[335]))
      let rR = !ac && aq,
        rL = ac ? "relative flex min-h-0 flex-1 flex-col" : "contents"
      t0[336] !== ac || t0[337] !== rp || t0[338] !== rv || t0[339] !== ay
        ? ((tk = !ac || rv || rp ? void 0 : { paddingTop: ay }),
          (t0[336] = ac),
          (t0[337] = rp),
          (t0[338] = rv),
          (t0[339] = ay),
          (t0[340] = tk))
        : (tk = t0[340])
      let rD = !rp && ac && aq
      t0[341] !== iq || t0[342] !== al || t0[343] !== aE || t0[344] !== ac
        ? ((tN =
            !aE || al || ac
              ? null
              : (0, l.jsx)("div", { className: "absolute top-2 right-2 flex h-8 items-center", children: iq })),
          (t0[341] = iq),
          (t0[342] = al),
          (t0[343] = aE),
          (t0[344] = ac),
          (t0[345] = tN))
        : (tN = t0[345])
      let rz = rp || (ac && rv) ? null : rx
      ;(t0[346] !== aE || t0[347] !== ro
        ? ((tT = (e) => {
            ;(!aE && !ro && e.target instanceof HTMLImageElement) || e.stopPropagation()
          }),
          (t0[346] = aE),
          (t0[347] = ro),
          (t0[348] = tT))
        : (tT = t0[348]),
        t0[349] !== tb || t0[350] !== tT
          ? ((t_ = (0, l.jsx)("div", {
              className: "contents",
              children: (0, l.jsx)("div", { className: "contents", onContextMenu: tT, children: tb }),
            })),
            (t0[349] = tb),
            (t0[350] = tT),
            (t0[351] = t_))
          : (t_ = t0[351]),
        t0[352] !== ry || t0[353] !== t_
          ? ((tY = (0, l.jsx)(ti.J, { getItems: ry, children: t_ })), (t0[352] = ry), (t0[353] = t_), (t0[354] = tY))
          : (tY = t0[354]),
        t0[355] !== rL || t0[356] !== tk || t0[357] !== rD || t0[358] !== tN || t0[359] !== rz || t0[360] !== tY
          ? ((tV = (0, l.jsxs)("div", { className: rL, style: tk, inert: rD, children: [tN, rz, tY] })),
            (t0[355] = rL),
            (t0[356] = tk),
            (t0[357] = rD),
            (t0[358] = tN),
            (t0[359] = rz),
            (t0[360] = tY),
            (t0[361] = tV))
          : (tV = t0[361]),
        t0[362] !== aT ||
        t0[363] !== lz ||
        t0[364] !== aF ||
        t0[365] !== ny ||
        t0[366] !== aj ||
        t0[367] !== i_ ||
        t0[368] !== aE ||
        t0[369] !== ic ||
        t0[370] !== a8 ||
        t0[371] !== nV ||
        t0[372] !== nZ ||
        t0[373] !== lZ ||
        t0[374] !== lG ||
        t0[375] !== nw
          ? ((tZ =
              lG || aE || null == nZ
                ? null
                : (0, l.jsx)("div", {
                    className: (0, m.A)(
                      null == nw
                        ? "relative z-10 shrink-0"
                        : "pointer-events-none absolute inset-x-0 bottom-[var(--right-panel-composer-overlay-reserve,0px)] z-10 [&_button]:pointer-events-auto",
                      (a8 || ic || i_) && "invisible",
                    ),
                    children: (0, l.jsx)(
                      nd,
                      {
                        conversationId: aT,
                        hostId: aF,
                        image: nZ,
                        imageRef: lZ,
                        src: lz,
                        toolbarVariant: aj ? "imageTools" : "compact",
                        onInteraction: (e) => nV?.(nZ.id, e),
                      },
                      null == nw ? void 0 : ny,
                    ),
                  })),
            (t0[362] = aT),
            (t0[363] = lz),
            (t0[364] = aF),
            (t0[365] = ny),
            (t0[366] = aj),
            (t0[367] = i_),
            (t0[368] = aE),
            (t0[369] = ic),
            (t0[370] = a8),
            (t0[371] = nV),
            (t0[372] = nZ),
            (t0[373] = lZ),
            (t0[374] = lG),
            (t0[375] = nw),
            (t0[376] = tZ))
          : (tZ = t0[376]),
        t0[377] !== rw || t0[378] !== tV || t0[379] !== tZ || t0[380] !== rR
          ? ((tK = (0, l.jsxs)("div", { className: "contents", inert: rR, children: [tV, tZ, rw] })),
            (t0[377] = rw),
            (t0[378] = tV),
            (t0[379] = tZ),
            (t0[380] = rR),
            (t0[381] = tK))
          : (tK = t0[381]),
        t0[382] !== nu || t0[383] !== rj
          ? ((tX = null != nu && null != rj ? (0, p.createPortal)(rj, nu) : rj),
            (t0[382] = nu),
            (t0[383] = rj),
            (t0[384] = tX))
          : (tX = t0[384]),
        t0[385] !== rb ||
        t0[386] !== tK ||
        t0[387] !== tX ||
        t0[388] !== tI ||
        t0[389] !== tP ||
        t0[390] !== tE ||
        t0[391] !== tA
          ? ((tW = (0, l.jsxs)("div", {
              ref: rb,
              className: tI,
              role: "presentation",
              onKeyDownCapture: tP,
              onKeyDown: tE,
              children: [tA, tK, tX],
            })),
            (t0[385] = rb),
            (t0[386] = tK),
            (t0[387] = tX),
            (t0[388] = tI),
            (t0[389] = tP),
            (t0[390] = tE),
            (t0[391] = tA),
            (t0[392] = tW))
          : (tW = t0[392]),
        t0[393] !== tW || t0[394] !== rk || t0[395] !== rN
          ? ((t$ = { header: rk, headerPlacement: rN, content: tW }),
            (t0[393] = tW),
            (t0[394] = rk),
            (t0[395] = rN),
            (t0[396] = t$))
          : (t$ = t0[396]),
        t0[397] !== rI ||
        t0[398] !== ly ||
        t0[399] !== t$ ||
        t0[400] !== rP ||
        t0[401] !== rE ||
        t0[402] !== tj ||
        t0[403] !== rA
          ? ((tq = (0, l.jsx)(rI, {
              accountId: rP,
              contentOverflow: rE,
              fileInfoSource: ly,
              ownerId: tj,
              userId: rA,
              layout: t$,
            })),
            (t0[397] = rI),
            (t0[398] = ly),
            (t0[399] = t$),
            (t0[400] = rP),
            (t0[401] = rE),
            (t0[402] = tj),
            (t0[403] = rA),
            (t0[404] = tq))
          : (tq = t0[404]),
        t0[405] !== tq || t0[406] !== tM
          ? ((tQ = (0, l.jsxs)("div", {
              className: "relative flex h-full min-h-0 min-w-0 flex-1",
              children: [tM, tq],
            })),
            (t0[405] = tq),
            (t0[406] = tM),
            (t0[407] = tQ))
          : (tQ = t0[407]))
      let rH = tQ
      return (
        t0[408] !== nr || t0[409] !== rs || t0[410] !== n7?.isSubmitting || t0[411] !== rH
          ? ((tJ =
              null == nr
                ? rH
                : (0, l.jsxs)("div", {
                    className: "flex h-full min-h-0 min-w-0 flex-1",
                    children: [
                      (0, l.jsx)("div", {
                        className: (0, m.A)(
                          "pointer-events-none relative flex h-full w-18 shrink-0",
                          (rs || n7?.isSubmitting) && "invisible",
                        ),
                        inert: rs || n7?.isSubmitting,
                        children: (0, l.jsx)(f.Activity, {
                          mode: rs || n7?.isSubmitting ? "hidden" : "visible",
                          children: nr,
                        }),
                      }),
                      rH,
                    ],
                  })),
            (t0[408] = nr),
            (t0[409] = rs),
            (t0[410] = n7?.isSubmitting),
            (t0[411] = rH),
            (t0[412] = tJ))
          : (tJ = t0[412]),
        tJ
      )
    }
    function nj(e) {
      return e.stopPropagation()
    }
    function nI(e) {
      return !e
    }
    function nP() {
      return (0, C.A)()
    }
  },
  bJkS(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("zd8w"),
      r = n("Wf1j"),
      o = n("yC2B")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            s,
            c,
            d = (0, a.c)(10),
            { open: u, stageElement: m, toolbarRef: g, children: h } = e,
            f = (0, r.A)()
          d[0] !== f.locale ? ((t = (0, o.b)(f.locale)), (d[0] = f.locale), (d[1] = t)) : (t = d[1])
          let p = "rtl" === t,
            v = (0, i.useRef)(null),
            x = (0, i.useRef)(null)
          return (
            d[2] !== u || d[3] !== p || d[4] !== m || d[5] !== g
              ? ((n = () => {
                  let e = v.current,
                    t = x.current,
                    n = m?.closest("[data-image-text-stage]")
                  if (!u || null == e || null == t || null == n || n.contains(e)) return
                  let l = p ? "marginLeft" : "marginRight",
                    a = n.style[l],
                    i = n.style.marginBottom,
                    r = getComputedStyle(n),
                    o = Number.parseFloat(r[l]) || 0,
                    s = Number.parseFloat(r.marginBottom) || 0,
                    c = 0,
                    d = 0,
                    h = () => {
                      let r = e.getBoundingClientRect(),
                        u = n.getBoundingClientRect(),
                        m = t.getBoundingClientRect(),
                        h = r.height / e.clientHeight,
                        f = u.width / n.offsetWidth
                      if (!Number.isFinite(f) || f <= 0 || !Number.isFinite(h) || h <= 0) return
                      let v = "bottom" === getComputedStyle(t).getPropertyValue("--image-text-dock").trim(),
                        x = 0
                      if (v) {
                        let t = g.current
                        if (null != t && !n.contains(t)) {
                          let n = t.getBoundingClientRect(),
                            l = r.bottom - m.height
                          n.width > 0 &&
                            n.bottom > l &&
                            n.top < r.bottom &&
                            n.right > m.left &&
                            n.left < m.right &&
                            (x = Math.min(e.clientHeight / 2, Math.max(0, (r.bottom - n.top) / h + 8)))
                        }
                      }
                      let b = 0,
                        C = 0
                      if (v) {
                        let e = r.bottom - x * h,
                          t = u.left - (p ? c * f : 0),
                          n = u.right + (p ? 0 : c * f)
                        if (m.right > t && m.left < n && e > u.top) {
                          let t = e - m.height - 8 * h
                          C = Math.max(0, Math.round((u.bottom - t) / f + d))
                        }
                      } else
                        m.bottom > u.top &&
                          m.top < u.bottom + d * f &&
                          (p ? m.left < u.right : m.right > u.left) &&
                          (b = Math.max(0, Math.round(((p ? m.right - u.left : u.right - m.left) + 8 * h) / f + c)))
                      ;(t.style.setProperty("--image-text-toolbar-lane", `${x}px`),
                        b !== c && ((n.style[l] = 0 === b ? a : `${o + b}px`), (c = b)),
                        C !== d && ((n.style.marginBottom = 0 === C ? i : `${s + C}px`), (d = C)))
                    }
                  h()
                  let f = new ResizeObserver(h)
                  return (
                    f.observe(e),
                    f.observe(t),
                    null != n.parentElement && f.observe(n.parentElement),
                    null == g.current || n.contains(g.current) || f.observe(g.current),
                    () => {
                      ;(f.disconnect(), (n.style[l] = a), (n.style.marginBottom = i))
                    }
                  )
                }),
                (s = [u, p, m, g]),
                (d[2] = u),
                (d[3] = p),
                (d[4] = m),
                (d[5] = g),
                (d[6] = n),
                (d[7] = s))
              : ((n = d[6]), (s = d[7])),
            (0, i.useLayoutEffect)(n, s),
            d[8] !== h
              ? ((c = (0, l.jsx)("div", {
                  ref: v,
                  className: "@container/text-inspector pointer-events-none absolute inset-0 overflow-clip",
                  children: (0, l.jsx)("div", {
                    ref: x,
                    className:
                      "absolute inset-y-0 end-0 grid min-h-0 w-max max-w-[55%] grid-cols-1 [--image-text-dock:side] @max-[620px]/text-inspector:top-auto @max-[620px]/text-inspector:h-[min(42%,16rem)] @max-[620px]/text-inspector:w-full @max-[620px]/text-inspector:max-w-full @max-[620px]/text-inspector:[--image-text-dock:bottom] @max-[620px]/text-inspector:has-[aside]:bottom-[var(--image-text-toolbar-lane,0px)] @max-[620px]/text-inspector:[&_aside]:w-full",
                    children: h,
                  }),
                })),
                (d[8] = h),
                (d[9] = c))
              : (c = d[9]),
            c
          )
        },
      },
    )
  },
  LlLD(e, t, n) {
    var l = n("DBCl")
    function a(e, t, n) {
      return e < n.right && e + t > n.left
    }
    n.d(
      t,
      {},
      {
        G: function ({ bounds: e, isEditing: t, target: n, rtl: i = !1, toolbar: r, createHeight: o }) {
          let { editorMinX: s, editorMaxX: c, editorMinY: d, editorMaxY: u } = e,
            m = Math.min(t ? l.D3l : 336, Math.max(1, c - s)),
            g = t ? l.bUX : Math.max(l.tuv, o ?? 0),
            h = t ? { width: m, height: g } : { width: m },
            f = Math.max(s, c - m),
            p = Math.min(Math.max(i ? n.left : n.left + n.width - m, s), f),
            v = (e) => (r && a(e, m, r) ? { minY: d + r.top, maxY: u - r.bottom } : { minY: d, maxY: u }),
            { minY: x, maxY: b } = v(p),
            C = Math.max(x, b - g),
            y = n.top + n.height + 12,
            w = n.top - 12,
            S = w - g
          if (y >= x && y + g <= b) return { left: p, top: y, ...h }
          if (S >= x && w <= b) return { left: p, top: S, ...h }
          for (let e of [n.left + n.width + 12, n.left - 12 - m]) {
            if (e < s || e > f) continue
            let t = v(e)
            if (!(t.maxY - t.minY < g))
              return { left: e, top: Math.min(Math.max(n.top - g / 2, t.minY), Math.max(t.minY, t.maxY - g)), ...h }
          }
          let M = b - Math.max(x, y),
            j = Math.min(b, w) - x,
            I = Math.max(M, j)
          return I >= l.tuv
            ? {
                left: p,
                top: M >= j ? Math.max(y, x) : Math.min(b, w) - Math.min(g, I),
                ...h,
                ...(I < g ? { maxHeight: I, overflowY: "auto" } : {}),
              }
            : {
                left: p,
                top: Math.min(C, Math.max(x, y <= C || y - C < x - S ? y : S)),
                ...h,
                ...(b - x < g ? { maxHeight: Math.max(1, b - x), overflowY: "auto" } : {}),
              }
        },
        W: a,
      },
    )
  },
  y8tV(e, t, n) {
    n.d(t, { A: () => g })
    var l = n("ABep"),
      a = n("QosV"),
      i = n("oR1P"),
      r = n("on57"),
      o = n("NFGs"),
      s = n.n(o),
      c = n("KUdL"),
      d = n.n(c),
      u = n("zd8w"),
      m = n("aqd9")
    function g(e) {
      let t,
        n,
        o,
        c,
        g,
        v,
        x,
        b,
        C = (0, a.c)(26),
        { regions: y, imageSize: w, reducedMotion: S, onFinish: M } = e
      C[0] !== y ? ((t = s()(y.filter(f), p) ?? s()(y.filter(h), p) ?? s()(y, p)), (C[0] = y), (C[1] = t)) : (t = C[1])
      let j = t,
        I = j?.id,
        P = (0, u.useEffectEvent)(M)
      if (
        (C[2] !== P || C[3] !== I || C[4] !== S
          ? ((n = () => {
              S && null != I && P(I)
            }),
            (C[2] = P),
            (C[3] = I),
            (C[4] = S),
            (C[5] = n))
          : (n = C[5]),
        C[6] !== I || C[7] !== S ? ((o = [I, S]), (C[6] = I), (C[7] = S), (C[8] = o)) : (o = C[8]),
        (0, u.useLayoutEffect)(n, o),
        null == j || S)
      )
        return null
      if (C[9] !== j || C[10] !== y) {
        let e
        ;(C[12] !== j ? ((e = (e) => e !== j), (C[12] = j), (C[13] = e)) : (e = C[13]),
          (c = [...d()(y.filter(e), ["y", "x"]), j]),
          (C[9] = j),
          (C[10] = y),
          (C[11] = c))
      } else c = C[11]
      let E = c,
        A = E.length > 1 ? 350 / (E.length - 1) : 0
      C[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, r.A)("pointer-events-none absolute inset-0 h-full w-full overflow-visible", "reveal-uB2mBR")),
          (C[14] = g))
        : (g = C[14])
      let k = `0 0 ${w.width} ${w.height}`
      return (
        C[15] !== M || C[16] !== j
          ? ((v = (e) => {
              e.target === e.currentTarget && M(j.id)
            }),
            (C[15] = M),
            (C[16] = j),
            (C[17] = v))
          : (v = C[17]),
        C[18] !== E || C[19] !== j || C[20] !== A
          ? ((x = E.map((e, t) => {
              let { id: n, x: a, y: i, width: r, height: o, rotation: s } = e
              return (0, l.jsx)(
                "rect",
                {
                  x: a,
                  y: i,
                  width: r,
                  height: o,
                  transform: `rotate(${s} ${a + r / 2} ${i + o / 2})`,
                  vectorEffect: "non-scaling-stroke",
                  strokeOpacity: n === j.id ? 1 : void 0,
                  className: "box-Yz_phO",
                  style: { animationDelay: `${t * A}ms` },
                },
                n,
              )
            })),
            (C[18] = E),
            (C[19] = j),
            (C[20] = A),
            (C[21] = x))
          : (x = C[21]),
        C[22] !== k || C[23] !== v || C[24] !== x
          ? ((b = (0, l.jsx)("svg", {
              ref: m.d,
              "aria-hidden": !0,
              className: g,
              viewBox: k,
              fill: i.l,
              fillOpacity: 0.1,
              stroke: i.l,
              strokeWidth: 1.25,
              onAnimationEnd: v,
              children: x,
            })),
            (C[22] = k),
            (C[23] = v),
            (C[24] = x),
            (C[25] = b))
          : (b = C[25]),
        b
      )
    }
    function h(e) {
      return "object" === e.kind
    }
    function f(e) {
      return null == e.kind
    }
    function p(e) {
      return e.width * e.height
    }
  },
  e4Ws(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      i = n("yf2D")
    n.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            n,
            r,
            o = (0, a.c)(7),
            { body: s, target: c } = e
          return (
            o[0] !== s
              ? ((t = (0, l.jsx)("div", { dir: "auto", className: "break-words whitespace-pre-wrap", children: s })),
                (o[0] = s),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== c
              ? ((n = (0, l.jsx)(i.E, {
                  dir: "auto",
                  animateOnGroupHover: !0,
                  className: "text-xs text-tertiary",
                  children: c,
                })),
                (o[2] = c),
                (o[3] = n))
              : (n = o[3]),
            o[4] !== t || o[5] !== n
              ? ((r = (0, l.jsxs)("div", {
                  className: "group flex min-w-0 flex-1 flex-col gap-0.5 text-start",
                  children: [t, n],
                })),
                (o[4] = t),
                (o[5] = n),
                (o[6] = r))
              : (r = o[6]),
            r
          )
        },
      },
    )
  },
  oD0s(e, t, n) {
    n.d(
      t,
      {},
      {
        O: function (e, { pointerId: t, pointerType: n }, l) {
          let a = "mouse" === n ? e.closest("[data-image-text-stage]") : null,
            i = e.ownerDocument.defaultView,
            r = (e) => {
              ;(e.preventDefault(), e.stopPropagation())
            }
          return (
            e.setPointerCapture(t),
            a?.addEventListener("wheel", r, { capture: !0, passive: !1 }),
            i?.addEventListener("blur", l),
            () => {
              ;(a?.removeEventListener("wheel", r, !0),
                i?.removeEventListener("blur", l),
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
  Hjmv(e, t, n) {
    var l = n("ABep"),
      a = n("QosV")
    n.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            n = (0, a.c)(6),
            { header: i, headerPlacement: r, content: o, panels: s, renderLayout: c } = e
          return (
            n[0] !== o || n[1] !== i || n[2] !== r || n[3] !== s || n[4] !== c
              ? ((t =
                  null == c
                    ? (0, l.jsxs)(l.Fragment, { children: [i, o] })
                    : c({ header: i, headerPlacement: r, content: o, panels: s })),
                (n[0] = o),
                (n[1] = i),
                (n[2] = r),
                (n[3] = s),
                (n[4] = c),
                (n[5] = t))
              : (t = n[5]),
            t
          )
        },
      },
    )
  },
}
//# sourceMappingURL=915524.f8563bce31.js.map
