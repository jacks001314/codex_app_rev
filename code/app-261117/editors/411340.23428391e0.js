export const __rspack_esm_ids = [411340]
export const __webpack_modules__ = {
  Uq8e(e, t, n) {
    let s = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { P: s })
  },
  jV4D(e, t, n) {
    var s = n("zd8w"),
      r = n("Uq8e")
    n.d(
      t,
      {},
      {
        S: function () {
          let e = (0, s.useContext)(r.P)
          if (!e) throw Error("PopcornPresentationEditorProvider is required")
          return e
        },
      },
    )
  },
  UGB7(e, t, n) {
    var s = n("zd8w"),
      r = n("jV4D")
    function l(e, t) {
      return (
        e.imageCrop === t.imageCrop &&
        e.find === t.find &&
        e.displayColors === t.displayColors &&
        e.presentationVersion === t.presentationVersion &&
        e.selectedSlideIdx === t.selectedSlideIdx &&
        e.slideIds === t.slideIds &&
        e.selectedSlideIds === t.selectedSlideIds &&
        e.slideLabels === t.slideLabels &&
        e.hiddenSlideIds === t.hiddenSlideIds &&
        e.slideCount === t.slideCount &&
        e.gridLayout === t.gridLayout &&
        e.zoom === t.zoom &&
        e.fitScale === t.fitScale &&
        e.selectedSlideFrame === t.selectedSlideFrame &&
        e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
        e.hyperlinkTargets === t.hyperlinkTargets &&
        e.selectedElementIds === t.selectedElementIds &&
        e.primarySelectedElementId === t.primarySelectedElementId &&
        e.activeInteractionKind === t.activeInteractionKind &&
        e.notesText === t.notesText &&
        e.canUndo === t.canUndo &&
        e.canRedo === t.canRedo &&
        e.canInsertWidgets === t.canInsertWidgets &&
        e.slideRect === t.slideRect &&
        e.textLayoutBlocks === t.textLayoutBlocks &&
        e.textEditState === t.textEditState &&
        e.inspector === t.inspector &&
        e.commentThreads === t.commentThreads &&
        e.camera === t.camera
      )
    }
    function i(e, t) {
      return a(e, t) && e.zoom === t.zoom && e.fitScale === t.fitScale && e.slideRect?.scale === t.slideRect?.scale
    }
    function a(e, t) {
      return (
        e.canInsertWidgets === t.canInsertWidgets &&
        e.find === t.find &&
        e.displayColors === t.displayColors &&
        e.selectedSlideIdx === t.selectedSlideIdx &&
        e.slideIds === t.slideIds &&
        e.selectedSlideIds === t.selectedSlideIds &&
        e.slideLabels === t.slideLabels &&
        e.hiddenSlideIds === t.hiddenSlideIds &&
        e.slideCount === t.slideCount &&
        e.gridLayout === t.gridLayout &&
        e.notesText.trim().length > 0 == t.notesText.trim().length > 0
      )
    }
    function o(e, t) {
      var n, s, r, l
      return (
        e.imageCrop === t.imageCrop &&
        e.displayColors === t.displayColors &&
        e.presentationVersion === t.presentationVersion &&
        e.selectedSlideIdx === t.selectedSlideIdx &&
        e.gridLayout === t.gridLayout &&
        e.zoom === t.zoom &&
        e.fitScale === t.fitScale &&
        e.selectedSlideFrame === t.selectedSlideFrame &&
        e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
        e.hyperlinkTargets === t.hyperlinkTargets &&
        e.selectedElementIds === t.selectedElementIds &&
        e.primarySelectedElementId === t.primarySelectedElementId &&
        e.hoveredElementId === t.hoveredElementId &&
        e.activeInteractionKind === t.activeInteractionKind &&
        e.previewVersion === t.previewVersion &&
        e.smartGuideIndicators === t.smartGuideIndicators &&
        ((n = e.awarenessCursors),
        (s = t.awarenessCursors),
        n.length === s.length &&
          n.every((e, t) => {
            let n = s[t]
            return (
              null != n &&
              e.presenceId === n.presenceId &&
              e.kind === n.kind &&
              e.color === n.color &&
              e.slideId === n.slideId &&
              e.point.x === n.point.x &&
              e.point.y === n.point.y &&
              e.label === n.label &&
              e.lastClickAt === n.lastClickAt &&
              e.status === n.status
            )
          })) &&
        ((r = e.awarenessSelections),
        (l = t.awarenessSelections),
        r.length === l.length &&
          r.every((e, t) => {
            var n, s
            let r = l[t]
            return (
              null != r &&
              e.presenceId === r.presenceId &&
              e.kind === r.kind &&
              e.color === r.color &&
              e.slideId === r.slideId &&
              e.label === r.label &&
              e.status === r.status &&
              ((n = e.selectedElementIds),
              (s = r.selectedElementIds),
              n.length === s.length && n.every((e, t) => e === s[t]))
            )
          })) &&
        e.slideRect === t.slideRect &&
        e.textLayoutBlocks === t.textLayoutBlocks &&
        e.textEditState === t.textEditState &&
        e.inspector === t.inspector &&
        e.commentThreads === t.commentThreads &&
        e.camera === t.camera
      )
    }
    function d(e, t) {
      return e.notesText === t.notesText
    }
    function c(e, t) {
      return e.commentThreads === t.commentThreads
    }
    function u(e, t) {
      return (
        e.selectedElementIds === t.selectedElementIds &&
        e.primarySelectedElementId === t.primarySelectedElementId &&
        e.inspector === t.inspector
      )
    }
    function f(e, t) {
      let n = (0, s.useRef)(e.getSnapshot()),
        r = (0, s.useCallback)(() => {
          let s = e.getSnapshot(),
            r = n.current
          return t(r, s) ? r : ((n.current = s), s)
        }, [t, e])
      return (0, s.useSyncExternalStore)((t) => e.subscribe(t), r, r)
    }
    function m(e, t) {
      return f(
        e,
        (function (e) {
          switch (e) {
            case "shell":
              return i
            case "stage":
              return o
            case "notes":
              return d
            case "comments":
              return c
            case "inspector":
              return u
            default:
              return l
          }
        })(t),
      )
    }
    n.d(
      t,
      {},
      {
        DP: function (e) {
          return m(e, "stage")
        },
        J0: function (e) {
          return m(e, "editor")
        },
        Zo: function (e, t = {}) {
          return f(e, !1 === t.includeViewport ? a : i)
        },
        ge: function (e) {
          return m(e, "notes")
        },
        k2: function () {
          return m((0, r.S)(), "inspector")
        },
        lO: m,
      },
    )
  },
  G8t1(e, t, n) {
    n.d(t, { PresentationSlideshow: () => W })
    var s = n("ABep"),
      r = n("QosV"),
      l = n("UGB7"),
      i = n("qmMi"),
      a = n("zd8w"),
      o = n("v7qY"),
      d = n("Wf1j"),
      c = n("oyxz"),
      u = n("F5N3"),
      f = n("JNtf"),
      m = n("X6Vn"),
      h = n("SGsN"),
      p = n("OWtl"),
      x = n("hZax"),
      g = n("j9wQ"),
      v = n("slpy"),
      w = n("y5If"),
      b = n("on57"),
      y = n("HOLv"),
      I = n("bVeK")
    function S(e) {
      let t,
        n,
        l,
        i,
        o,
        d = (0, r.c)(20),
        { controller: u, slideIndex: f, snapshot: m, preview: h } = e,
        p = void 0 !== h && h,
        x = (0, a.useRef)(null),
        [g, v] = (0, a.useState)(null),
        [w, b] = (0, a.useState)(!1),
        y = m.slideIds[f],
        I = m.slideLabels[f] ?? ""
      return (
        d[0] !== u || d[1] !== I || d[2] !== p || d[3] !== y
          ? ((t = () => {
              let e = x.current
              if (null == e || null == y) return
              let t = e.ownerDocument,
                n = !1,
                s = 0,
                r = !p,
                l = "",
                i = (i) => {
                  if (!r || "hidden" === t.visibilityState) return
                  let a = i?.width ?? e.clientWidth,
                    o = i?.height ?? e.clientHeight
                  if (a <= 0 || o <= 0) return
                  let d = t.defaultView?.devicePixelRatio ?? 1,
                    c = Math.max(a, o),
                    f = `${c}:${d}`
                  if (f === l) return
                  l = f
                  let m = (s += 1)
                  u.requestSlideThumbnail(y, { cssMaxPx: c, pixelRatio: d })
                    .then(async (e) => {
                      if (n || m !== s) return
                      let t = new Image()
                      ;((t.src = e), await t.decode(), n || m !== s || (v({ src: e, label: I }), b(!1)))
                    })
                    .catch(() => {
                      n || m !== s || ((l = ""), b(!0))
                    })
                },
                a = new (t.defaultView?.ResizeObserver ?? ResizeObserver)((e) => {
                  let [t] = e
                  null != t && i(t.contentRect)
                })
              a.observe(e)
              let o =
                p && "u" > typeof IntersectionObserver
                  ? new IntersectionObserver((e) => {
                      let [t] = e
                      ;((r = t?.isIntersecting ?? !1), i())
                    })
                  : null
              null != o ? o.observe(e) : (r = !0)
              let d = () => {
                  t.hidden ? ((s += 1), (l = "")) : i()
                },
                c = () => i()
              return (
                t.addEventListener("visibilitychange", d),
                t.defaultView?.addEventListener("resize", c),
                i(),
                () => {
                  ;((n = !0),
                    a.disconnect(),
                    o?.disconnect(),
                    t.removeEventListener("visibilitychange", d),
                    t.defaultView?.removeEventListener("resize", c))
                }
              )
            }),
            (d[0] = u),
            (d[1] = I),
            (d[2] = p),
            (d[3] = y),
            (d[4] = t))
          : (t = d[4]),
        d[5] !== u ||
        d[6] !== I ||
        d[7] !== p ||
        d[8] !== y ||
        d[9] !== m.displayColors ||
        d[10] !== m.presentationVersion
          ? ((n = [u, y, I, p, m.presentationVersion, m.displayColors]),
            (d[5] = u),
            (d[6] = I),
            (d[7] = p),
            (d[8] = y),
            (d[9] = m.displayColors),
            (d[10] = m.presentationVersion),
            (d[11] = n))
          : (n = d[11]),
        (0, a.useEffect)(t, n),
        d[12] !== g
          ? ((l =
              null != g &&
              (0, s.jsx)("img", { className: "size-full object-contain", src: g.src, alt: g.label, draggable: !1 })),
            (d[12] = g),
            (d[13] = l))
          : (l = d[13]),
        d[14] !== w || d[15] !== p
          ? ((i =
              w &&
              !p &&
              (0, s.jsx)("div", {
                className: "absolute rounded-lg bg-surface p-4 text-default",
                role: "alert",
                children: (0, s.jsx)(c.A, {
                  id: "artifactViewer.present.slideFailed",
                  defaultMessage: "Could not display this slide",
                }),
              })),
            (d[14] = w),
            (d[15] = p),
            (d[16] = i))
          : (i = d[16]),
        d[17] !== l || d[18] !== i
          ? ((o = (0, s.jsxs)("div", {
              ref: x,
              className: "relative flex size-full min-h-0 min-w-0 items-center justify-center",
              children: [l, i],
            })),
            (d[17] = l),
            (d[18] = i),
            (d[19] = o))
          : (o = d[19]),
        o
      )
    }
    function j(e) {
      let t,
        n,
        l,
        i,
        o,
        u,
        f,
        m,
        h,
        p,
        x,
        j,
        E,
        C,
        N,
        M,
        L,
        V,
        k,
        D,
        A,
        _,
        T,
        P,
        z,
        R,
        F,
        K,
        O,
        W,
        B,
        U,
        H,
        q,
        G,
        Z,
        J,
        X,
        Q,
        Y,
        $ = (0, r.c)(108),
        {
          controller: ee,
          snapshot: et,
          index: en,
          slideIndices: es,
          onNavigate: er,
          onClose: el,
          onKeyDown: ei,
          windowed: ea,
        } = e,
        eo = void 0 !== ea && ea,
        ed = (0, d.A)(),
        [ec, eu] = (0, a.useState)(null),
        ef = (0, a.useRef)(null),
        [em, eh] = (0, a.useState)(!1),
        ep = (0, a.useRef)(!1),
        [ex, eg] = (0, a.useState)(!0),
        [ev, ew] = (0, a.useState)(!1),
        eb = (0, a.useRef)(null)
      $[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            ;(eg(!0), null != eb.current && clearTimeout(eb.current), (eb.current = setTimeout(() => eg(!1), 2e3)))
          }),
          ($[0] = t))
        : (t = $[0])
      let ey = t
      $[1] !== en || $[2] !== er ? ((n = (e) => er(en + e)), ($[1] = en), ($[2] = er), ($[3] = n)) : (n = $[3])
      let eI = (0, a.useEffectEvent)(n)
      $[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => {
            ;(null != eb.current && clearTimeout(eb.current), eg(!0))
          }),
          ($[4] = l))
        : (l = $[4])
      let eS = (0, a.useEffectEvent)(l),
        ej = (0, a.useEffectEvent)(ey),
        eE = (0, a.useEffectEvent)(el)
      ;($[5] !== ej || $[6] !== eS || $[7] !== eI
        ? ((i = () => {
            let e = ef.current
            if (null != e)
              return (function (e, { onSwipe: t, onHold: n, onHoldEnd: s }) {
                let r,
                  l = e.ownerDocument,
                  i = new Set(),
                  a = null,
                  o = !1,
                  d = () => {
                    ;(clearTimeout(r), (r = void 0))
                  },
                  c = () => {
                    ;(d(), a?.held && s(), (a = null), (o = !0))
                  },
                  u = (t) => {
                    if ("touch" !== t.pointerType) {
                      o = !1
                      return
                    }
                    ;(i.add(t.pointerId), e.setPointerCapture(t.pointerId), i.size > 1)
                      ? c()
                      : ((o = !1),
                        (a = { pointerId: t.pointerId, x: t.clientX, y: t.clientY, moved: !1, held: !1 }),
                        (r = setTimeout(() => {
                          ;((r = void 0), null != a && ((a.held = !0), (o = !0), n()))
                        }, 500)))
                  },
                  f = (e) => {
                    null != a &&
                      e.pointerId === a.pointerId &&
                      Math.hypot(e.clientX - a.x, e.clientY - a.y) > 8 &&
                      ((a.moved = !0), (o = !0), d())
                  },
                  m = (n) => {
                    if (!i.delete(n.pointerId)) return
                    let r = a
                    if (r?.pointerId === n.pointerId) {
                      ;(d(), (a = null))
                      let e = n.clientX - r.x,
                        l = n.clientY - r.y,
                        i = r.moved || Math.hypot(e, l) > 8
                      ;((o = o || i || r.held || "pointerup" !== n.type),
                        r.held
                          ? s()
                          : "pointerup" === n.type &&
                            Math.abs(e) >= 40 &&
                            Math.abs(e) > 1.5 * Math.abs(l) &&
                            t(e < 0 ? 1 : -1))
                    }
                    e.hasPointerCapture(n.pointerId) && e.releasePointerCapture(n.pointerId)
                  },
                  h = (e) => {
                    o && 0 !== e.detail && (e.preventDefault(), e.stopImmediatePropagation(), (o = !1))
                  },
                  p = (e) => {
                    ;(i.size > 0 || o) && e.preventDefault()
                  },
                  x = () => {
                    if ("hidden" === l.visibilityState) {
                      for (let t of (c(), i)) e.hasPointerCapture(t) && e.releasePointerCapture(t)
                      i.clear()
                    }
                  }
                return (
                  e.addEventListener("pointerdown", u),
                  e.addEventListener("pointermove", f),
                  e.addEventListener("pointerup", m),
                  e.addEventListener("pointercancel", m),
                  e.addEventListener("lostpointercapture", m),
                  e.addEventListener("click", h, !0),
                  e.addEventListener("contextmenu", p),
                  l.addEventListener("visibilitychange", x),
                  () => {
                    for (let t of (d(),
                    e.removeEventListener("pointerdown", u),
                    e.removeEventListener("pointermove", f),
                    e.removeEventListener("pointerup", m),
                    e.removeEventListener("pointercancel", m),
                    e.removeEventListener("lostpointercapture", m),
                    e.removeEventListener("click", h, !0),
                    e.removeEventListener("contextmenu", p),
                    l.removeEventListener("visibilitychange", x),
                    i))
                      e.hasPointerCapture(t) && e.releasePointerCapture(t)
                  }
                )
              })(e, { onSwipe: eI, onHold: eS, onHoldEnd: ej })
          }),
          ($[5] = ej),
          ($[6] = eS),
          ($[7] = eI),
          ($[8] = i))
        : (i = $[8]),
        $[9] === Symbol.for("react.memo_cache_sentinel") ? ((o = []), ($[9] = o)) : (o = $[9]),
        (0, a.useEffect)(i, o),
        $[10] !== ec?.ownerDocument
          ? ((u = () => {
              let e = ec?.ownerDocument,
                t = () => {
                  ;(null != eb.current && clearTimeout(eb.current),
                    e?.visibilityState !== "hidden" && (eg(!0), (eb.current = setTimeout(() => eg(!1), 2e3))))
                }
              return (
                t(),
                e?.addEventListener("visibilitychange", t),
                () => {
                  ;(null != eb.current && clearTimeout(eb.current), e?.removeEventListener("visibilitychange", t))
                }
              )
            }),
            ($[10] = ec?.ownerDocument),
            ($[11] = u))
          : (u = $[11]),
        $[12] !== ec ? ((f = [ec]), ($[12] = ec), ($[13] = f)) : (f = $[13]),
        (0, a.useEffect)(u, f),
        $[14] !== eE || $[15] !== ec || $[16] !== eo
          ? ((m = () => {
              if (null == ec || !eo) return
              let e = ec.ownerDocument,
                t = (e) => {
                  "Escape" === e.key && (e.preventDefault(), eE())
                },
                n = () => {
                  ;(eh(e.fullscreenElement === ec),
                    null == e.fullscreenElement && (ep.current || eE(), (ep.current = !1)))
                }
              return (
                e.addEventListener("keydown", t),
                e.addEventListener("fullscreenchange", n),
                () => {
                  ;(e.removeEventListener("keydown", t), e.removeEventListener("fullscreenchange", n))
                }
              )
            }),
            ($[14] = eE),
            ($[15] = ec),
            ($[16] = eo),
            ($[17] = m))
          : (m = $[17]),
        $[18] !== ec || $[19] !== eo ? ((h = [ec, eo]), ($[18] = ec), ($[19] = eo), ($[20] = h)) : (h = $[20]),
        (0, a.useEffect)(m, h),
        $[21] !== ec
          ? ((p = async () => {
              if (null == ec) return
              let e = ec.ownerDocument
              ew(!1)
              try {
                e.fullscreenElement === ec
                  ? ((ep.current = !0), await e.exitFullscreen())
                  : await ec.requestFullscreen()
              } catch {
                ;((ep.current = !1), ew(!0))
              }
            }),
            ($[21] = ec),
            ($[22] = p))
          : (p = $[22]))
      let eC = p
      $[23] !== ed || $[24] !== em
        ? ((x = em
            ? ed.formatMessage({ id: "artifactViewer.present.exitFullscreen", defaultMessage: "Exit fullscreen" })
            : ed.formatMessage({ id: "artifactViewer.present.enterFullscreen", defaultMessage: "Enter fullscreen" })),
          ($[23] = ed),
          ($[24] = em),
          ($[25] = x))
        : (x = $[25])
      let eN = x
      $[26] !== ed
        ? ((j = ed.formatMessage({ id: "artifactViewer.present.slideshow", defaultMessage: "Slideshow" })),
          ($[26] = ed),
          ($[27] = j))
        : (j = $[27])
      let eM = eo ? "fixed inset-0" : "relative",
        eL = !ex && "cursor-none"
      ;($[28] !== eM || $[29] !== eL
        ? ((E = (0, b.A)(
            "flex size-full items-center justify-center overflow-hidden bg-surface text-default select-none",
            eM,
            eL,
          )),
          ($[28] = eM),
          ($[29] = eL),
          ($[30] = E))
        : (E = $[30]),
        $[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (e) => {
              "touch" !== e.pointerType && ey()
            }),
            ($[31] = C))
          : (C = $[31]),
        $[32] !== ei
          ? ((N = (e) => {
              ;(ey(), ei(e))
            }),
            ($[32] = ei),
            ($[33] = N))
          : (N = $[33]),
        $[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, b.A)("size-full touch-none", "slide-KDVQ2U")), ($[34] = M))
          : (M = $[34]),
        $[35] !== ed
          ? ((L = ed.formatMessage({ id: "artifactViewer.present.advance", defaultMessage: "Advance slide" })),
            ($[35] = ed),
            ($[36] = L))
          : (L = $[36]),
        $[37] !== en || $[38] !== er ? ((V = () => er(en + 1)), ($[37] = en), ($[38] = er), ($[39] = V)) : (V = $[39]),
        $[40] !== ee || $[41] !== en || $[42] !== es || $[43] !== et
          ? ((k = null != es[en] && (0, s.jsx)(S, { controller: ee, snapshot: et, slideIndex: es[en] })),
            ($[40] = ee),
            ($[41] = en),
            ($[42] = es),
            ($[43] = et),
            ($[44] = k))
          : (k = $[44]),
        $[45] !== L || $[46] !== V || $[47] !== k
          ? ((D = (0, s.jsx)("button", {
              ref: ef,
              type: "button",
              className: M,
              "aria-label": L,
              onClick: V,
              children: k,
            })),
            ($[45] = L),
            ($[46] = V),
            ($[47] = k),
            ($[48] = D))
          : (D = $[48]),
        $[49] !== ev
          ? ((A =
              ev &&
              (0, s.jsx)("div", {
                className: "absolute top-4 rounded-lg bg-surface p-4",
                role: "alert",
                children: (0, s.jsx)(c.A, {
                  id: "artifactViewer.present.fullscreenChangeFailed",
                  defaultMessage: "Could not change fullscreen",
                }),
              })),
            ($[49] = ev),
            ($[50] = A))
          : (A = $[50]))
      let eV = !ex && "pointer-events-none opacity-0"
      ;($[51] !== eV
        ? ((_ = (0, b.A)(
            "absolute bottom-4 left-1/2 -translate-x-1/2 focus-within:pointer-events-auto focus-within:opacity-100",
            eV,
          )),
          ($[51] = eV),
          ($[52] = _))
        : (_ = $[52]),
        $[53] !== ed
          ? ((T = ed.formatMessage({ id: "artifactViewer.present.controls", defaultMessage: "Slideshow controls" })),
            ($[53] = ed),
            ($[54] = T))
          : (T = $[54]))
      let ek = en <= 0
      ;($[55] !== ed
        ? ((P = ed.formatMessage({ id: "artifactViewer.present.previous", defaultMessage: "Previous slide" })),
          ($[55] = ed),
          ($[56] = P))
        : (P = $[56]),
        $[57] !== en || $[58] !== er ? ((z = () => er(en - 1)), ($[57] = en), ($[58] = er), ($[59] = z)) : (z = $[59]),
        $[60] === Symbol.for("react.memo_cache_sentinel") ? ((R = (0, s.jsx)(I.z_d, {})), ($[60] = R)) : (R = $[60]),
        $[61] !== ek || $[62] !== P || $[63] !== z
          ? ((F = (0, s.jsx)(g.K8, { uniform: !0, disabled: ek, "aria-label": P, onClick: z, children: R })),
            ($[61] = ek),
            ($[62] = P),
            ($[63] = z),
            ($[64] = F))
          : (F = $[64]))
      let eD = null == es[en] ? 0 : en + 1
      $[65] !== es.length || $[66] !== eD
        ? ((K = (0, s.jsx)("span", {
            className: "px-2 text-sm tabular-nums",
            "aria-live": "polite",
            children: (0, s.jsx)(c.A, {
              id: "artifactViewer.present.position",
              defaultMessage: "{current} of {total}",
              values: { current: eD, total: es.length },
            }),
          })),
          ($[65] = es.length),
          ($[66] = eD),
          ($[67] = K))
        : (K = $[67])
      let eA = en >= es.length - 1
      return (
        $[68] !== ed
          ? ((O = ed.formatMessage({ id: "artifactViewer.present.next", defaultMessage: "Next slide" })),
            ($[68] = ed),
            ($[69] = O))
          : (O = $[69]),
        $[70] !== en || $[71] !== er ? ((W = () => er(en + 1)), ($[70] = en), ($[71] = er), ($[72] = W)) : (W = $[72]),
        $[73] === Symbol.for("react.memo_cache_sentinel") ? ((B = (0, s.jsx)(I.uM3, {})), ($[73] = B)) : (B = $[73]),
        $[74] !== eA || $[75] !== O || $[76] !== W
          ? ((U = (0, s.jsx)(g.K8, { uniform: !0, disabled: eA, "aria-label": O, onClick: W, children: B })),
            ($[74] = eA),
            ($[75] = O),
            ($[76] = W),
            ($[77] = U))
          : (U = $[77]),
        $[78] !== eN || $[79] !== em || $[80] !== ec || $[81] !== eC || $[82] !== eo
          ? ((H =
              eo &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(g.ff, {}),
                  (0, s.jsx)(v.m, {
                    content: eN,
                    portalContainer: ec,
                    children: (0, s.jsx)(g.K8, {
                      uniform: !0,
                      "aria-label": eN,
                      onClick: () => void eC(),
                      children: em ? (0, s.jsx)(y.I, { asset: w.i }) : (0, s.jsx)(I.Zdv, {}),
                    }),
                  }),
                ],
              })),
            ($[78] = eN),
            ($[79] = em),
            ($[80] = ec),
            ($[81] = eC),
            ($[82] = eo),
            ($[83] = H))
          : (H = $[83]),
        $[84] === Symbol.for("react.memo_cache_sentinel") ? ((q = (0, s.jsx)(g.ff, {})), ($[84] = q)) : (q = $[84]),
        $[85] !== ed
          ? ((G = ed.formatMessage({ id: "artifactViewer.present.exit", defaultMessage: "Exit presentation" })),
            ($[85] = ed),
            ($[86] = G))
          : (G = $[86]),
        $[87] === Symbol.for("react.memo_cache_sentinel") ? ((Z = (0, s.jsx)(I.Gmf, {})), ($[87] = Z)) : (Z = $[87]),
        $[88] !== el || $[89] !== G
          ? ((J = (0, s.jsx)(g.K8, { uniform: !0, "aria-label": G, onClick: el, children: Z })),
            ($[88] = el),
            ($[89] = G),
            ($[90] = J))
          : (J = $[90]),
        $[91] !== T || $[92] !== F || $[93] !== K || $[94] !== U || $[95] !== H || $[96] !== J
          ? ((X = (0, s.jsxs)(g.J5, { label: T, children: [F, K, U, H, q, J] })),
            ($[91] = T),
            ($[92] = F),
            ($[93] = K),
            ($[94] = U),
            ($[95] = H),
            ($[96] = J),
            ($[97] = X))
          : (X = $[97]),
        $[98] !== _ || $[99] !== X
          ? ((Q = (0, s.jsx)("div", { className: _, children: X })), ($[98] = _), ($[99] = X), ($[100] = Q))
          : (Q = $[100]),
        $[101] !== j || $[102] !== E || $[103] !== N || $[104] !== D || $[105] !== A || $[106] !== Q
          ? ((Y = (0, s.jsxs)("div", {
              ref: eu,
              role: "region",
              "aria-label": j,
              "data-theme": "dark",
              className: E,
              tabIndex: -1,
              onPointerMove: C,
              onKeyDownCapture: N,
              children: [D, A, Q],
            })),
            ($[101] = j),
            ($[102] = E),
            ($[103] = N),
            ($[104] = D),
            ($[105] = A),
            ($[106] = Q),
            ($[107] = Y))
          : (Y = $[107]),
        Y
      )
    }
    var E = n("HPtk"),
      C = n("Qgfj"),
      N = n("bqtn"),
      M = n("cszf"),
      L = n("jDEJ")
    function V(e) {
      let t,
        n,
        i = (0, r.c)(6),
        { controller: a, withNotes: o } = e,
        d = (0, l.Zo)(a)
      i[0] !== a || i[1] !== d
        ? ((t = (0, s.jsx)(S, { controller: a, snapshot: d, slideIndex: 0, preview: !0 })),
          (i[0] = a),
          (i[1] = d),
          (i[2] = t))
        : (t = i[2])
      let c = t
      return (
        i[3] !== c || i[4] !== o
          ? ((n = (0, s.jsx)("div", {
              "aria-hidden": !0,
              inert: !0,
              className: "pointer-events-none relative flex h-24 w-full items-center justify-center",
              children: o
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute top-0 right-4 left-0 aspect-video overflow-hidden rounded-md bg-media-background after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:border after:border-secondary-outline after:content-['']",
                        children: c,
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "absolute right-0 bottom-0 grid aspect-video w-2/3 grid-cols-3 items-center gap-2 rounded-md border border-media-foreground/40 bg-media-background p-2",
                        children: [
                          (0, s.jsx)("div", {
                            className: "col-span-2 aspect-video overflow-hidden rounded-sm",
                            children: c,
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, s.jsx)("span", { className: "h-1 rounded-sm bg-media-foreground/40" }),
                              (0, s.jsx)("span", { className: "h-1 rounded-sm bg-media-foreground/40" }),
                              (0, s.jsx)("span", { className: "h-1 w-2/3 rounded-sm bg-media-foreground/40" }),
                              (0, s.jsx)("span", { className: "h-1 rounded-sm bg-media-foreground/40" }),
                              (0, s.jsx)("span", { className: "h-1 w-1/2 rounded-sm bg-media-foreground/40" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, s.jsx)("div", {
                    className:
                      "relative size-full overflow-hidden rounded-md bg-media-background after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:border after:border-secondary-outline after:content-['']",
                    children: c,
                  }),
            })),
            (i[3] = c),
            (i[4] = o),
            (i[5] = n))
          : (n = i[5]),
        n
      )
    }
    var k = n("IDNd"),
      D = n("tO3J")
    let A = "CmdOrCtrl+Alt+Enter",
      _ = "CmdOrCtrl+Alt+Shift+Enter",
      T =
        "input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox'], [role='combobox'], [role='spinbutton'], [data-codex-composer], [data-codex-terminal]"
    function P(e) {
      let t,
        n,
        s,
        l,
        i,
        o = (0, r.c)(13),
        { buttonRef: d, enabled: c, onPresent: u } = e,
        f = (0, a.useContext)(k.Gc)
      o[0] !== d || o[1] !== u
        ? ((t = (e, t) => {
            let n = d.current
            if (
              null == n ||
              !n.isConnected ||
              n.disabled ||
              "visible" !== n.ownerDocument.visibilityState ||
              null != n.closest("[hidden], [inert], [aria-hidden='true']") ||
              e.defaultPrevented ||
              e.isComposing
            )
              return
            let s = n.closest("[data-codex-popcorn-editor]") ?? n.closest("[data-app-shell-tab-panel-controller]") ?? n,
              r = n.getAttribute("aria-controls"),
              l = null == r ? null : n.ownerDocument.getElementById(r)
            e.composedPath().some((e) => e instanceof Node && (s.contains(e) || l?.contains(e))) &&
              (e.preventDefault(), e.stopPropagation(), u(t))
          }),
          (o[0] = d),
          (o[1] = u),
          (o[2] = t))
        : (t = o[2])
      let m = t,
        h = c && f
      ;(o[3] !== m ? ((n = (e) => m(e, !1)), (o[3] = m), (o[4] = n)) : (n = o[4]),
        o[5] !== h || o[6] !== n
          ? ((s = { accelerator: A, enabled: h, ignoreWithin: T, onKeyDown: n }), (o[5] = h), (o[6] = n), (o[7] = s))
          : (s = o[7]),
        (0, D.EE)(s))
      let p = c && f
      return (
        o[8] !== m ? ((l = (e) => m(e, !0)), (o[8] = m), (o[9] = l)) : (l = o[9]),
        o[10] !== p || o[11] !== l
          ? ((i = { accelerator: _, enabled: p, ignoreWithin: T, onKeyDown: l }), (o[10] = p), (o[11] = l), (o[12] = i))
          : (i = o[12]),
        (0, D.EE)(i),
        null
      )
    }
    function z(e) {
      let t,
        n,
        l,
        i,
        o,
        u,
        f,
        m,
        h,
        p,
        x = (0, r.c)(39),
        { controller: g, visual: v, withNotes: w, onSelect: b } = e,
        y = void 0 !== w && w,
        I = (0, d.A)(),
        S = (0, a.useId)(),
        j = (0, a.useId)(),
        E = y ? R.withNotes : R.presentation,
        C = y ? _ : A
      if (!v) {
        let e, t, n
        return (
          x[0] !== C ? ((e = (0, L.X)(C)), (x[0] = C), (x[1] = e)) : (e = x[1]),
          x[2] !== E ? ((t = (0, s.jsx)(c.A, { ...E })), (x[2] = E), (x[3] = t)) : (t = x[3]),
          x[4] !== b || x[5] !== e || x[6] !== t
            ? ((n = (0, s.jsx)(N.ms.Item, { onSelect: b, keyboardShortcut: e, children: t })),
              (x[4] = b),
              (x[5] = e),
              (x[6] = t),
              (x[7] = n))
            : (n = x[7]),
          n
        )
      }
      return (
        x[8] !== I || x[9] !== E ? ((t = I.formatMessage(E)), (x[8] = I), (x[9] = E), (x[10] = t)) : (t = x[10]),
        x[11] !== E ? ((n = (0, s.jsx)(c.A, { ...E })), (x[11] = E), (x[12] = n)) : (n = x[12]),
        x[13] !== n || x[14] !== S
          ? ((l = (0, s.jsx)("span", { id: S, className: "font-medium", children: n })),
            (x[13] = n),
            (x[14] = S),
            (x[15] = l))
          : (l = x[15]),
        x[16] !== C
          ? ((i = (0, s.jsx)("span", {
              className: "text-xs text-secondary",
              children: (0, s.jsx)(M.$, { accelerator: C }),
            })),
            (x[16] = C),
            (x[17] = i))
          : (i = x[17]),
        x[18] !== l || x[19] !== i
          ? ((o = (0, s.jsxs)("div", { className: "flex flex-col gap-1", children: [l, i] })),
            (x[18] = l),
            (x[19] = i),
            (x[20] = o))
          : (o = x[20]),
        x[21] !== g || x[22] !== y
          ? ((u = (0, s.jsx)(V, { controller: g, withNotes: y })), (x[21] = g), (x[22] = y), (x[23] = u))
          : (u = x[23]),
        x[24] !== y
          ? ((f = y
              ? (0, s.jsx)(c.A, {
                  id: "artifactViewer.present.mode.withNotesDescription",
                  defaultMessage: "One view for sharing, another for your notes",
                })
              : (0, s.jsx)(c.A, {
                  id: "artifactViewer.present.mode.presentationDescription",
                  defaultMessage: "One view for your audience, without notes",
                })),
            (x[24] = y),
            (x[25] = f))
          : (f = x[25]),
        x[26] !== j || x[27] !== f
          ? ((m = (0, s.jsx)("span", { id: j, className: "text-xs text-secondary", children: f })),
            (x[26] = j),
            (x[27] = f),
            (x[28] = m))
          : (m = x[28]),
        x[29] !== o || x[30] !== u || x[31] !== m
          ? ((h = (0, s.jsxs)("div", {
              className: "flex w-full min-w-0 flex-col gap-3 py-2 text-start text-sm font-normal select-none",
              children: [o, u, m],
            })),
            (x[29] = o),
            (x[30] = u),
            (x[31] = m),
            (x[32] = h))
          : (h = x[32]),
        x[33] !== j || x[34] !== b || x[35] !== h || x[36] !== t || x[37] !== S
          ? ((p = (0, s.jsx)(N.ms.Item, {
              allowWrap: !0,
              textValue: t,
              onSelect: b,
              "aria-labelledby": S,
              "aria-describedby": j,
              className: "min-w-0 items-stretch",
              children: h,
            })),
            (x[33] = j),
            (x[34] = b),
            (x[35] = h),
            (x[36] = t),
            (x[37] = S),
            (x[38] = p))
          : (p = x[38]),
        p
      )
    }
    let R = (0, C.YK)({
      presentation: { id: "artifactViewer.present.mode.presentation", defaultMessage: "Present" },
      withNotes: { id: "artifactViewer.present.mode.withNotes", defaultMessage: "Present with notes" },
    })
    var F = n("DBCl")
    function K(e) {
      let t,
        n,
        l,
        i,
        o,
        u,
        f,
        m,
        h,
        p,
        x,
        v,
        w,
        y,
        j,
        E,
        C,
        N,
        M,
        L,
        V,
        k,
        D,
        A,
        _,
        T,
        P = (0, r.c)(71),
        { controller: z, snapshot: R, slideIndices: F, index: K, onNavigate: W, onClose: B } = e,
        U = (0, d.A)(),
        H = (0, a.useRef)(null),
        q = F[K]
      ;(P[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            let e = H.current
            if (null == e) return
            let t = e.ownerDocument,
              n = () => {
                t.hidden || e.scrollIntoView({ block: "nearest", inline: "nearest" })
              }
            return (n(), t.addEventListener("visibilitychange", n), () => t.removeEventListener("visibilitychange", n))
          }),
          (P[0] = t))
        : (t = P[0]),
        P[1] !== K ? ((n = [K]), (P[1] = K), (P[2] = n)) : (n = P[2]),
        (0, a.useEffect)(t, n),
        P[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(c.A, { id: "artifactViewer.present.endShow", defaultMessage: "End show" })), (P[3] = l))
          : (l = P[3]),
        P[4] !== B
          ? ((i = (0, s.jsx)(g.Uq, {
              className: "flex items-center justify-end",
              children: (0, s.jsx)(g.DW, { onClick: B, children: l }),
            })),
            (P[4] = B),
            (P[5] = i))
          : (i = P[5]),
        P[6] !== U
          ? ((o = U.formatMessage({ id: "artifactViewer.present.currentSlide", defaultMessage: "Current slide" })),
            (P[6] = U),
            (P[7] = o))
          : (o = P[7]),
        P[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)("h2", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(c.A, { id: "artifactViewer.present.currentSlide", defaultMessage: "Current slide" }),
            })),
            (P[8] = u))
          : (u = P[8]),
        P[9] !== z || P[10] !== q || P[11] !== R
          ? ((f = null != q && (0, s.jsx)(S, { controller: z, slideIndex: q, snapshot: R })),
            (P[9] = z),
            (P[10] = q),
            (P[11] = R),
            (P[12] = f))
          : (f = P[12]),
        P[13] !== f
          ? ((m = (0, s.jsx)("div", { className: "min-h-0 flex-1", children: f })), (P[13] = f), (P[14] = m))
          : (m = P[14]),
        P[15] !== U
          ? ((h = U.formatMessage({ id: "artifactViewer.present.navigation", defaultMessage: "Slide navigation" })),
            (P[15] = U),
            (P[16] = h))
          : (h = P[16]))
      let G = K <= 0
      ;(P[17] !== U
        ? ((p = U.formatMessage({ id: "artifactViewer.present.previous", defaultMessage: "Previous slide" })),
          (P[17] = U),
          (P[18] = p))
        : (p = P[18]),
        P[19] !== K || P[20] !== W ? ((x = () => W(K - 1)), (P[19] = K), (P[20] = W), (P[21] = x)) : (x = P[21]),
        P[22] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, s.jsx)(I.z_d, {})), (P[22] = v)) : (v = P[22]),
        P[23] !== G || P[24] !== p || P[25] !== x
          ? ((w = (0, s.jsx)(g.K8, { uniform: !0, disabled: G, "aria-label": p, onClick: x, children: v })),
            (P[23] = G),
            (P[24] = p),
            (P[25] = x),
            (P[26] = w))
          : (w = P[26]))
      let Z = null == q ? 0 : K + 1
      P[27] !== F.length || P[28] !== Z
        ? ((y = (0, s.jsx)("span", {
            className: "px-2 text-sm tabular-nums",
            "aria-live": "polite",
            children: (0, s.jsx)(c.A, {
              id: "artifactViewer.present.position",
              defaultMessage: "{current} of {total}",
              values: { current: Z, total: F.length },
            }),
          })),
          (P[27] = F.length),
          (P[28] = Z),
          (P[29] = y))
        : (y = P[29])
      let J = K >= F.length - 1
      return (
        P[30] !== U
          ? ((j = U.formatMessage({ id: "artifactViewer.present.next", defaultMessage: "Next slide" })),
            (P[30] = U),
            (P[31] = j))
          : (j = P[31]),
        P[32] !== K || P[33] !== W ? ((E = () => W(K + 1)), (P[32] = K), (P[33] = W), (P[34] = E)) : (E = P[34]),
        P[35] === Symbol.for("react.memo_cache_sentinel") ? ((C = (0, s.jsx)(I.uM3, {})), (P[35] = C)) : (C = P[35]),
        P[36] !== J || P[37] !== j || P[38] !== E
          ? ((N = (0, s.jsx)(g.K8, { uniform: !0, disabled: J, "aria-label": j, onClick: E, children: C })),
            (P[36] = J),
            (P[37] = j),
            (P[38] = E),
            (P[39] = N))
          : (N = P[39]),
        P[40] !== w || P[41] !== y || P[42] !== N || P[43] !== h
          ? ((M = (0, s.jsx)("div", {
              className: "flex shrink-0 justify-center",
              children: (0, s.jsxs)(g.J5, { label: h, children: [w, y, N] }),
            })),
            (P[40] = w),
            (P[41] = y),
            (P[42] = N),
            (P[43] = h),
            (P[44] = M))
          : (M = P[44]),
        P[45] !== M || P[46] !== o || P[47] !== m
          ? ((L = (0, s.jsxs)("section", {
              className: "flex min-h-0 min-w-0 flex-col gap-2",
              "aria-label": o,
              children: [u, m, M],
            })),
            (P[45] = M),
            (P[46] = o),
            (P[47] = m),
            (P[48] = L))
          : (L = P[48]),
        P[49] !== q || P[50] !== R
          ? ((V = (0, s.jsx)(O, { snapshot: R, slideIndex: q })), (P[49] = q), (P[50] = R), (P[51] = V))
          : (V = P[51]),
        P[52] !== L || P[53] !== V
          ? ((k = (0, s.jsxs)("div", {
              className: "grid min-h-0 flex-1 grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1",
              children: [L, V],
            })),
            (P[52] = L),
            (P[53] = V),
            (P[54] = k))
          : (k = P[54]),
        P[55] !== U
          ? ((D = U.formatMessage({ id: "artifactViewer.present.slidePreviews", defaultMessage: "Slide previews" })),
            (P[55] = U),
            (P[56] = D))
          : (D = P[56]),
        P[57] !== z || P[58] !== K || P[59] !== U || P[60] !== W || P[61] !== F || P[62] !== R
          ? ((A = F.map((e, t) =>
              (0, s.jsxs)(
                "button",
                {
                  ref: t === K ? H : void 0,
                  type: "button",
                  "aria-current": t === K ? "true" : void 0,
                  "aria-label": U.formatMessage(
                    { id: "artifactViewer.present.goToSlide", defaultMessage: "Go to slide {number}: {title}" },
                    { number: t + 1, title: R.slideLabels[e] ?? "" },
                  ),
                  className: (0, b.A)(
                    "flex w-44 shrink-0 flex-col gap-1 rounded-lg border p-1",
                    t === K ? "border-strong" : "border-default",
                  ),
                  onClick: () => W(t),
                  children: [
                    (0, s.jsx)("div", {
                      className: "min-h-0 flex-1",
                      children: (0, s.jsx)(S, { controller: z, slideIndex: e, snapshot: R, preview: !0 }),
                    }),
                    (0, s.jsx)("span", { className: "text-xs text-secondary tabular-nums", children: t + 1 }),
                  ],
                },
                R.slideIds[e],
              ),
            )),
            (P[57] = z),
            (P[58] = K),
            (P[59] = U),
            (P[60] = W),
            (P[61] = F),
            (P[62] = R),
            (P[63] = A))
          : (A = P[63]),
        P[64] !== D || P[65] !== A
          ? ((_ = (0, s.jsx)("nav", {
              className:
                "hide-scrollbar flex h-32 min-w-0 shrink-0 gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain",
              "aria-label": D,
              children: A,
            })),
            (P[64] = D),
            (P[65] = A),
            (P[66] = _))
          : (_ = P[66]),
        P[67] !== k || P[68] !== _ || P[69] !== i
          ? ((T = (0, s.jsxs)("div", { className: "flex size-full min-h-0 flex-col gap-4 p-4", children: [i, k, _] })),
            (P[67] = k),
            (P[68] = _),
            (P[69] = i),
            (P[70] = T))
          : (T = P[70]),
        T
      )
    }
    function O(e) {
      let t,
        n,
        l,
        i,
        a,
        o = (0, r.c)(12),
        { snapshot: u, slideIndex: f } = e,
        m = (0, d.A)()
      return (
        o[0] !== m
          ? ((t = m.formatMessage({ id: "artifactViewer.present.speakerNotes", defaultMessage: "Speaker notes" })),
            (o[0] = m),
            (o[1] = t))
          : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)("h2", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(c.A, { id: "artifactViewer.present.speakerNotes", defaultMessage: "Speaker notes" }),
            })),
            (o[2] = n))
          : (n = o[2]),
        o[3] !== u.notesText || o[4] !== u.selectedSlideIdx || o[5] !== f
          ? ((l =
              u.selectedSlideIdx === f &&
              (u.notesText.trim().length > 0
                ? u.notesText
                : (0, s.jsx)("span", {
                    className: "text-secondary",
                    children: (0, s.jsx)(c.A, {
                      id: "artifactViewer.present.noNotes",
                      defaultMessage: "No speaker notes for this slide",
                    }),
                  }))),
            (o[3] = u.notesText),
            (o[4] = u.selectedSlideIdx),
            (o[5] = f),
            (o[6] = l))
          : (l = o[6]),
        o[7] !== l
          ? ((i = (0, s.jsx)("div", {
              "data-presenter-notes": !0,
              className:
                "min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto text-2xl leading-relaxed wrap-anywhere whitespace-pre-wrap select-text",
              children: l,
            })),
            (o[7] = l),
            (o[8] = i))
          : (i = o[8]),
        o[9] !== t || o[10] !== i
          ? ((a = (0, s.jsxs)("section", {
              className: "flex min-h-0 min-w-0 flex-col gap-2",
              "aria-label": t,
              children: [n, i],
            })),
            (o[9] = t),
            (o[10] = i),
            (o[11] = a))
          : (a = o[11]),
        a
      )
    }
    function W(e) {
      let t,
        n,
        c,
        u,
        f,
        m,
        v,
        w,
        b,
        y,
        I,
        S,
        j,
        C,
        N,
        M = (0, r.c)(51),
        { controller: L } = e,
        V = (0, i.gh)(p.u),
        k = (0, d.A)(),
        D = (0, l.Zo)(L),
        A = (0, x.Zj)("684923441"),
        _ = (0, a.useRef)(null),
        T = (0, a.useRef)(null),
        [R, K] = (0, a.useState)(null),
        [O, W] = (0, a.useState)(!1)
      M[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            let e = T.current,
              t = e?.ownerDocument
            ;(t?.fullscreenElement === e && t.exitFullscreen().catch(B), K(null))
          }),
          (M[0] = t))
        : (t = M[0])
      let H = t
      M[1] !== L ||
      M[2] !== k ||
      M[3] !== V ||
      M[4] !== D.hiddenSlideIds ||
      M[5] !== D.selectedSlideIdx ||
      M[6] !== D.slideIds
        ? ((n = async (e) => {
            let t = void 0 !== e && e,
              n = _.current
            if (null == n) return
            let s = D.slideIds.findIndex((e, t) => t >= D.selectedSlideIdx && !D.hiddenSlideIds.includes(e)),
              r = -1 !== s ? s : D.slideIds.findLastIndex((e) => !D.hiddenSlideIds.includes(e))
            if (-1 === r) return
            let l =
              t && null != n.ownerDocument.defaultView
                ? (function (e, t) {
                    let n = e.open(
                      "about:blank",
                      (0, F.X3I)({ windowId: F.ZWF.PRESENTATION_AUDIENCE, sessionId: crypto.randomUUID() }),
                      "popup=yes,width=1280,height=720",
                    )
                    if (null == n) return null
                    try {
                      let s = n.document
                      for (let n of ((s.title = t),
                      (s.documentElement.className = e.document.documentElement.className),
                      e.document.documentElement.attributes))
                        (n.name.startsWith("data-") || "style" === n.name) &&
                          s.documentElement.setAttribute(n.name, n.value)
                      for (let t of (s.documentElement.setAttribute("data-theme", "dark"),
                      e.document.head.querySelectorAll('link[rel="stylesheet"], style')))
                        s.head.appendChild(t.cloneNode(!0))
                      return ((s.body.className = "m-0 h-screen overflow-hidden bg-surface"), n)
                    } catch {
                      return (n.close(), null)
                    }
                  })(
                    n.ownerDocument.defaultView,
                    k.formatMessage({ id: "artifactViewer.present.slideshowWindow", defaultMessage: "Slideshow" }),
                  )
                : null
            if (t && null == l) {
              ;(V.get(h.Id).warning(
                k.formatMessage({
                  id: "artifactViewer.present.popupBlocked",
                  defaultMessage: "Allow pop-up windows to use presenter view",
                }),
              ),
                n.focus())
              return
            }
            ;(L.setSelectedSlideIdx(r),
              (0, o.flushSync)(() => {
                ;(W(!1),
                  K({
                    container:
                      n.closest('[role="tabpanel"][data-app-shell-tab-panel-controller]') ?? n.ownerDocument.body,
                    initialSlideIndex: r,
                    audience: l,
                  }))
              }))
            let i = T.current
            if (null != i && (i.focus(), !t))
              try {
                await i.requestFullscreen()
              } catch {
                ;(H(),
                  V.get(h.Id).warning(
                    k.formatMessage({
                      id: "artifactViewer.present.fullscreenFailed",
                      defaultMessage: "Could not enter fullscreen",
                    }),
                  ))
              }
          }),
          (M[1] = L),
          (M[2] = k),
          (M[3] = V),
          (M[4] = D.hiddenSlideIds),
          (M[5] = D.selectedSlideIdx),
          (M[6] = D.slideIds),
          (M[7] = n))
        : (n = M[7])
      let q = n
      if (M[8] !== D.hiddenSlideIds || M[9] !== D.slideIds) {
        let e
        ;(M[11] !== D.hiddenSlideIds
          ? ((e = (e) => !D.hiddenSlideIds.includes(e)), (M[11] = D.hiddenSlideIds), (M[12] = e))
          : (e = M[12]),
          (c = D.slideIds.some(e)),
          (M[8] = D.hiddenSlideIds),
          (M[9] = D.slideIds),
          (M[10] = c))
      } else c = M[10]
      let G = !c,
        Z = !G && null == R
      ;(M[13] !== q ? ((u = (e) => void q(e)), (M[13] = q), (M[14] = u)) : (u = M[14]),
        M[15] !== Z || M[16] !== u
          ? ((f = (0, s.jsx)(P, { buttonRef: _, enabled: Z, onPresent: u })), (M[15] = Z), (M[16] = u), (M[17] = f))
          : (f = M[17]))
      let J = A ? "panelWide" : "menu"
      ;(M[18] !== R
        ? ((m = (e) => {
            null != R && e.preventDefault()
          }),
          (M[18] = R),
          (M[19] = m))
        : (m = M[19]),
        M[20] !== G ? ((v = (0, s.jsx)(E.v, { ref: _, disabled: G })), (M[20] = G), (M[21] = v)) : (v = M[21]))
      let X = A ? "grid grid-cols-2 gap-1" : void 0
      return (
        M[22] !== q ? ((w = () => void q()), (M[22] = q), (M[23] = w)) : (w = M[23]),
        M[24] !== L || M[25] !== w || M[26] !== A
          ? ((b = (0, s.jsx)(z, { controller: L, visual: A, onSelect: w })),
            (M[24] = L),
            (M[25] = w),
            (M[26] = A),
            (M[27] = b))
          : (b = M[27]),
        M[28] !== q ? ((y = () => void q(!0)), (M[28] = q), (M[29] = y)) : (y = M[29]),
        M[30] !== L || M[31] !== y || M[32] !== A
          ? ((I = (0, s.jsx)(z, { controller: L, visual: A, withNotes: !0, onSelect: y })),
            (M[30] = L),
            (M[31] = y),
            (M[32] = A),
            (M[33] = I))
          : (I = M[33]),
        M[34] !== X || M[35] !== b || M[36] !== I
          ? ((S = (0, s.jsxs)("div", { className: X, children: [b, I] })),
            (M[34] = X),
            (M[35] = b),
            (M[36] = I),
            (M[37] = S))
          : (S = M[37]),
        M[38] !== O || M[39] !== S || M[40] !== J || M[41] !== m || M[42] !== v
          ? ((j = (0, s.jsx)(g.OZ, {
              align: "end",
              contentWidth: J,
              open: O,
              onOpenChange: W,
              onCloseAutoFocus: m,
              triggerButton: v,
              children: S,
            })),
            (M[38] = O),
            (M[39] = S),
            (M[40] = J),
            (M[41] = m),
            (M[42] = v),
            (M[43] = j))
          : (j = M[43]),
        M[44] !== L || M[45] !== R
          ? ((C =
              null != R &&
              (0, o.createPortal)(
                (0, s.jsx)(U, {
                  controller: L,
                  session: R,
                  surfaceRef: T,
                  onClose: H,
                  onDispose: (e) => K((t) => (t === e ? null : t)),
                  onRestoreFocus: () => _.current?.focus(),
                }),
                R.container,
              )),
            (M[44] = L),
            (M[45] = R),
            (M[46] = C))
          : (C = M[46]),
        M[47] !== j || M[48] !== C || M[49] !== f
          ? ((N = (0, s.jsxs)(s.Fragment, { children: [f, j, C] })), (M[47] = j), (M[48] = C), (M[49] = f), (M[50] = N))
          : (N = M[50]),
        N
      )
    }
    function B() {}
    function U(e) {
      let t,
        n,
        d,
        h,
        x,
        g,
        v,
        w,
        b,
        y,
        I,
        S,
        E,
        C,
        N,
        M,
        L,
        V,
        k = (0, r.c)(70),
        { controller: D, session: A, surfaceRef: _, onClose: T, onDispose: P, onRestoreFocus: z } = e,
        R = (0, i.gh)(p.u),
        F = (0, a.useId)(),
        O = (0, l.J0)(D)
      k[0] !== O.hiddenSlideIds
        ? ((t = (e, t) => (O.hiddenSlideIds.includes(e) ? [] : [t])), (k[0] = O.hiddenSlideIds), (k[1] = t))
        : (t = k[1])
      let W = O.slideIds.flatMap(t),
        [B, U] = (0, a.useState)(O.slideIds[A.initialSlideIndex])
      k[2] !== B || k[3] !== O.slideIds
        ? ((n = (e) => O.slideIds[e] === B), (k[2] = B), (k[3] = O.slideIds), (k[4] = n))
        : (n = k[4])
      let q = Math.max(0, W.findIndex(n)),
        G = (0, a.useEffectEvent)(T),
        Z = (0, a.useEffectEvent)(P),
        J = (0, a.useRef)(null)
      ;(k[5] !== F || k[6] !== R
        ? ((d = () => (0, m.wv)(R, F)), (h = [R, F]), (k[5] = F), (k[6] = R), (k[7] = d), (k[8] = h))
        : ((d = k[7]), (h = k[8])),
        (0, a.useEffect)(d, h),
        k[9] !== D || k[10] !== U || k[11] !== W || k[12] !== O.slideIds
          ? ((x = (e) => {
              let t = W[Math.max(0, Math.min(W.length - 1, e))]
              null != t && (U(O.slideIds[t]), D.setSelectedSlideIdx(t))
            }),
            (k[9] = D),
            (k[10] = U),
            (k[11] = W),
            (k[12] = O.slideIds),
            (k[13] = x))
          : (x = k[13]))
      let X = x
      k[14] !== q || k[15] !== X || k[16] !== T || k[17] !== W.length
        ? ((g = (e) => {
            if (e.target instanceof HTMLElement && e.target.closest("[data-presenter-notes]")) return
            let t = {
              ArrowRight: q + 1,
              ArrowDown: q + 1,
              PageDown: q + 1,
              ArrowLeft: q - 1,
              ArrowUp: q - 1,
              PageUp: q - 1,
              Home: 0,
              End: W.length - 1,
            }[e.key]
            "Escape" === e.key
              ? (e.preventDefault(), e.stopPropagation(), T())
              : (null != t || (" " === e.key && e.target === e.currentTarget)) &&
                (e.preventDefault(), e.stopPropagation(), X(t ?? q + 1))
          }),
          (k[14] = q),
          (k[15] = X),
          (k[16] = T),
          (k[17] = W.length),
          (k[18] = g))
        : (g = k[18])
      let Q = g
      ;(k[19] !== G || k[20] !== Z || k[21] !== A || k[22] !== _
        ? ((v = () => {
            ;(J.current?.session === A && J.current.cancel(), (J.current = null))
            let e = _.current,
              t = A.container.ownerDocument,
              n = () => {
                null == A.audience && t.fullscreenElement !== e && G()
              },
              s = () => G()
            ;(t.addEventListener("fullscreenchange", n),
              A.audience?.addEventListener("pagehide", s),
              A.audience?.addEventListener("beforeunload", s))
            let r = t.defaultView,
              l = () => A.audience?.close()
            return (
              r?.addEventListener("pagehide", l),
              () => {
                ;(t.removeEventListener("fullscreenchange", n),
                  A.audience?.removeEventListener("pagehide", s),
                  A.audience?.removeEventListener("beforeunload", s),
                  r?.removeEventListener("pagehide", l),
                  (J.current = {
                    session: A,
                    cancel: (0, u.UO)(null, () => {
                      ;(A.audience?.close(),
                        null != e && t.fullscreenElement === e && t.exitFullscreen().catch(H),
                        Z(A))
                    }),
                  }))
              }
            )
          }),
          (k[19] = G),
          (k[20] = Z),
          (k[21] = A),
          (k[22] = _),
          (k[23] = v))
        : (v = k[23]),
        k[24] !== A || k[25] !== _ ? ((w = [A, _]), (k[24] = A), (k[25] = _), (k[26] = w)) : (w = k[26]),
        (0, a.useEffect)(v, w))
      let Y = null == A.audience ? "inline" : "anchored",
        $ = null != A.audience
      return (
        k[27] !== _
          ? ((b = (e) => {
              ;(e.preventDefault(), _.current?.focus())
            }),
            (k[27] = _),
            (k[28] = b))
          : (b = k[28]),
        k[29] !== z
          ? ((y = (e) => {
              ;(e.preventDefault(), z())
            }),
            (k[29] = z),
            (k[30] = y))
          : (y = k[30]),
        k[31] !== b || k[32] !== y
          ? ((I = { asChild: !0, "aria-describedby": void 0, onOpenAutoFocus: b, onCloseAutoFocus: y }),
            (k[31] = b),
            (k[32] = y),
            (k[33] = I))
          : (I = k[33]),
        k[34] !== T
          ? ((S = (e) => {
              e || T()
            }),
            (k[34] = T),
            (k[35] = S))
          : (S = k[35]),
        k[36] !== A.audience
          ? ((E = (0, s.jsx)(f.L3, {
              className: "sr-only",
              children:
                null == A.audience
                  ? (0, s.jsx)(c.A, { id: "artifactViewer.present.slideshow", defaultMessage: "Slideshow" })
                  : (0, s.jsx)(c.A, { id: "artifactViewer.present.presenterView", defaultMessage: "Presenter view" }),
            })),
            (k[36] = A.audience),
            (k[37] = E))
          : (E = k[37]),
        k[38] !== D ||
        k[39] !== q ||
        k[40] !== X ||
        k[41] !== T ||
        k[42] !== Q ||
        k[43] !== A.audience ||
        k[44] !== W ||
        k[45] !== O
          ? ((C =
              null == A.audience
                ? (0, s.jsx)(j, {
                    controller: D,
                    snapshot: O,
                    index: q,
                    slideIndices: W,
                    onNavigate: X,
                    onClose: T,
                    onKeyDown: Q,
                  })
                : (0, s.jsx)(K, { controller: D, snapshot: O, index: q, slideIndices: W, onNavigate: X, onClose: T })),
            (k[38] = D),
            (k[39] = q),
            (k[40] = X),
            (k[41] = T),
            (k[42] = Q),
            (k[43] = A.audience),
            (k[44] = W),
            (k[45] = O),
            (k[46] = C))
          : (C = k[46]),
        k[47] !== Q || k[48] !== _ || k[49] !== E || k[50] !== C
          ? ((N = (0, s.jsxs)("div", {
              role: "dialog",
              ref: _,
              className: "fixed inset-0 z-50 size-full overflow-hidden bg-surface text-default select-none",
              "data-theme": "dark",
              tabIndex: -1,
              onKeyDown: Q,
              children: [E, C],
            })),
            (k[47] = Q),
            (k[48] = _),
            (k[49] = E),
            (k[50] = C),
            (k[51] = N))
          : (N = k[51]),
        k[52] !== $ || k[53] !== I || k[54] !== S || k[55] !== N || k[56] !== Y
          ? ((M = (0, s.jsx)(f.lG, {
              open: !0,
              contentPosition: Y,
              viewportSized: $,
              showDialogClose: !1,
              unstyledContent: !0,
              contentProps: I,
              onOpenChange: S,
              children: N,
            })),
            (k[52] = $),
            (k[53] = I),
            (k[54] = S),
            (k[55] = N),
            (k[56] = Y),
            (k[57] = M))
          : (M = k[57]),
        k[58] !== D ||
        k[59] !== q ||
        k[60] !== X ||
        k[61] !== T ||
        k[62] !== Q ||
        k[63] !== A.audience ||
        k[64] !== W ||
        k[65] !== O
          ? ((L =
              null != A.audience &&
              (0, o.createPortal)(
                (0, s.jsx)(j, {
                  controller: D,
                  snapshot: O,
                  index: q,
                  slideIndices: W,
                  onNavigate: X,
                  onClose: T,
                  onKeyDown: Q,
                  windowed: !0,
                }),
                A.audience.document.body,
              )),
            (k[58] = D),
            (k[59] = q),
            (k[60] = X),
            (k[61] = T),
            (k[62] = Q),
            (k[63] = A.audience),
            (k[64] = W),
            (k[65] = O),
            (k[66] = L))
          : (L = k[66]),
        k[67] !== M || k[68] !== L
          ? ((V = (0, s.jsxs)(s.Fragment, { children: [M, L] })), (k[67] = M), (k[68] = L), (k[69] = V))
          : (V = k[69]),
        V
      )
    }
    function H() {}
  },
  cszf(e, t, n) {
    var s = n("ABep"),
      r = n("QosV"),
      l = n("H3J8"),
      i = n("Wf1j"),
      a = n("HOLv"),
      o = n("jDEJ")
    function d(e) {
      return "dictation" === e.toLowerCase()
    }
    n.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            n,
            c,
            u,
            f = (0, r.c)(12),
            { accelerator: m, label: h } = e,
            p = (0, i.A)()
          f[0] !== m || f[1] !== h
            ? ((t = h ?? (null == m ? null : (0, o.X)(m))), (f[0] = m), (f[1] = h), (f[2] = t))
            : (t = f[2])
          let x = t
          if (!m?.split("+").some(d)) {
            let e
            return (
              f[3] !== x ? ((e = (0, s.jsx)(s.Fragment, { children: x })), (f[3] = x), (f[4] = e)) : (e = f[4]),
              e
            )
          }
          return (
            f[5] !== p
              ? ((n = p.formatMessage({ id: "settings.hotkeySetter.microphoneKey", defaultMessage: "Microphone key" })),
                (f[5] = p),
                (f[6] = n))
              : (n = f[6]),
            f[7] !== n ? ((c = (0, s.jsx)(a.I, { asset: l.y, "aria-label": n })), (f[7] = n), (f[8] = c)) : (c = f[8]),
            f[9] !== c || f[10] !== x
              ? ((u = (0, s.jsxs)("span", { className: "inline-flex items-center gap-1", children: [c, x] })),
                (f[9] = c),
                (f[10] = x),
                (f[11] = u))
              : (u = f[11]),
            u
          )
        },
      },
    )
  },
  y5If(e, t, n) {
    let s = (0, n("ESTr").a)({
      name: "arrow-down-left-arrow-up-right-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.475098, y: 2.474609, width: 11.049805, height: 11.049805 },
        visualBounds: { x: 2.475098, y: 2.474609, width: 11.049805, height: 11.049805 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.475098, y: 2.474609, width: 11.049805, height: 11.049805 },
        center: { x: 8, y: 7.999512 },
        insets: { top: 2.474609, right: 2.475097, bottom: 2.475586, left: 2.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.999512 }, foreground: { x: 8, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.16622 8.80776C6.73222 8.80776 7.19146 9.26719 7.19161 9.83315V12.6662C7.19161 12.9561 6.95617 13.1915 6.66622 13.1915C6.37644 13.1913 6.14083 12.956 6.14083 12.6662V10.5939L3.37228 13.3703C3.16754 13.5755 2.83441 13.5759 2.62911 13.3712C2.42414 13.1665 2.4237 12.8343 2.62813 12.629L5.39278 9.85756H3.33321C3.04354 9.85737 2.808 9.62283 2.80782 9.33315C2.80798 9.04345 3.04353 8.80796 3.33321 8.80776H6.16622Z" fill="currentColor"/> <path d="M12.6281 2.62905C12.8326 2.42395 13.1649 2.42297 13.3703 2.6271C13.5757 2.83159 13.5766 3.16477 13.3723 3.37026L10.6125 6.14174H12.6662C12.9561 6.14174 13.1914 6.37636 13.1916 6.66616C13.1916 6.95608 12.9562 7.19155 12.6662 7.19155H9.83321C9.26719 7.19148 8.80785 6.73219 8.80782 6.16616V3.33315C8.80782 3.04324 9.04332 2.80783 9.33321 2.80776C9.62316 2.80776 9.8586 3.0432 9.8586 3.33315V5.4103L12.6281 2.62905Z" fill="currentColor"/>',
    })
    n.d(t, {}, { i: s })
  },
}
//# sourceMappingURL=411340.23428391e0.js.map
