export const __rspack_esm_ids = [310423]
export const __webpack_modules__ = {
  tFRt(e, t, a) {
    var l = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, l.jsxs)("svg", {
          width: 21,
          height: 21,
          viewBox: "0 0 21 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, l.jsx)("path", {
              d: "M15.6981 9.04712C16.5255 9.04712 17.1959 9.71781 17.1961 10.5452C17.1961 11.3727 16.5256 12.0442 15.6981 12.0442C14.8706 12.0442 14.2 11.3727 14.2 10.5452C14.2002 9.71781 14.8707 9.04712 15.6981 9.04712Z",
              fill: "currentColor",
            }),
            (0, l.jsx)("path", {
              d: "M4.69806 9.04712C5.52546 9.04712 6.19691 9.71781 6.19708 10.5452C6.19708 11.3727 5.52557 12.0442 4.69806 12.0442C3.8707 12.044 3.20001 11.3726 3.20001 10.5452C3.20019 9.71792 3.87081 9.04729 4.69806 9.04712Z",
              fill: "currentColor",
            }),
            (0, l.jsx)("path", {
              d: "M10.2003 9.04712C11.0276 9.0473 11.6982 9.71792 11.6984 10.5452C11.6984 11.3726 11.0277 12.044 10.2003 12.0442C9.37284 12.0442 8.70132 11.3727 8.70132 10.5452C8.7015 9.71781 9.37295 9.04712 10.2003 9.04712Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  aoV0(e, t, a) {
    a.d(t, { a: () => w, t: () => v })
    var l = a("ABep"),
      n = a("on57"),
      i = a("NKwT"),
      r = a("zd8w"),
      o = a("Cmnu"),
      s = a("pZwg"),
      d = a("BAKu"),
      c = a("We8q"),
      u = a("fZ4G"),
      m = a("EYJV"),
      h = a("DL3o")
    let f = (0, r.createContext)(null),
      p = () => {
        let e = (0, r.use)(f)
        if (!e) throw Error("Modal components or hooks must be wrapped in <Modal />")
        return e
      }
    var g = a("v7qY")
    let x = () => {
        let { setOpen: e } = p()
        return (0, r.useCallback)(() => e(!1), [e])
      },
      v = ({ onRequestClose: e } = {}) => {
        let t,
          a = (() => {
            let { setShake: e } = p()
            return (0, r.useCallback)(() => {
              ;((0, g.flushSync)(() => {
                e(!1)
              }),
                (0, u.yQ)(() => e(!0)))
            }, [e])
          })(),
          l = x()
        return (
          (t = p()),
          (0, r.useEffect)(() => {
            if (e)
              return (
                t.checkAllowClose.current.add(e),
                () => {
                  t.checkAllowClose.current.delete(e)
                }
              )
          }, [e, t.checkAllowClose]),
          { close: l, shake: a }
        )
      },
      w = ({ open: e, defaultOpen: t = !1, onOpenChange: a, children: n }) => {
        let [o, s] = (0, r.useState)(t),
          [d, u] = (0, r.useState)(!1),
          m = (0, r.useRef)(new Set()),
          h = e ?? o,
          p = (0, c.Y)(a),
          g = (0, r.useCallback)(
            (t) => {
              h !== t && (t || u(!1), p.current?.(t), "boolean" != typeof e && s(t))
            },
            [h, e, p],
          ),
          x = (0, r.useMemo)(() => ({ open: h, setOpen: g, shake: d, setShake: u, checkAllowClose: m }), [h, g, d, u])
        return (0, l.jsx)(f, {
          value: x,
          children: (0, l.jsx)(i.Root, { open: h, onOpenChange: g, modal: !1, children: n }),
        })
      }
    ;((w.Trigger = ({ children: e, ref: t }) => (0, l.jsx)(i.Trigger, { asChild: !0, ref: t, children: e })),
      (w.Content = ({
        children: e,
        className: t,
        portalClassName: a,
        maxWidth: f,
        scroll: g = "inside",
        backdrop: x = s.N.backdropStyle,
        onCloseAutoFocus: v,
        onAfterClose: w,
        animateOnMount: b = !1,
        ...y
      }) => {
        let j = !(0, o.Ub)("(min-width: 48rem)"),
          { open: k, setOpen: C, shake: S, checkAllowClose: A } = p(),
          M = (0, c.Y)({ open: k, onAfterClose: w }),
          [N, I] = (0, r.useState)(null),
          E = (0, m.jS)()
        ;((0, d.r)(k, () => {
          for (let e of A.current) if ("deny" === e()) return
          C(!1)
        }),
          (0, r.useEffect)(() => {
            !N || N?.contains(document.activeElement) || N.focus({ preventScroll: !0 })
          }, [N]))
        let T = (0, r.useCallback)(
          (e) => {
            if (
              ((e) => {
                if (!(e instanceof Element)) return !1
                let t = e.hasAttribute("data-grammarly-shadow-root"),
                  a = "COM-1PASSWORD-BUTTON" === e.tagName,
                  l = null != e.closest("[data-sonner-toast], [data-sonner-toaster]"),
                  n = null != e.closest("[data-puik-ignore-outside-interaction]")
                return t || a || l || n
              })(e.target) ||
              "dismissableLayer.focusOutside" === e.type ||
              "dismissableLayer.blurOutside" === e.type
            )
              return void e.preventDefault()
            for (let t of A.current) if ("deny" === t()) return void e.preventDefault()
          },
          [A],
        )
        return (0, l.jsx)(i.Portal, {
          forceMount: !0,
          container: E,
          children: (0, l.jsx)(h.F, {
            preventInitialTransition: !b,
            enterDuration: 600,
            exitDuration: 300,
            className: (0, n.A)("ModalPortal-SfHSoH", a),
            children:
              k &&
              (0, l.jsxs)(
                "div",
                {
                  className: "ModalPortalInner-UJ1jZR",
                  "data-backdrop": x,
                  children: [
                    (0, l.jsx)("div", { className: "ModalBackdrop-BHqQZp" }, "overlay"),
                    (0, l.jsx)("div", {
                      className: "ModalContainer-RzHv2l",
                      "data-modal-scroll": j ? "inside" : g,
                      children: (0, l.jsx)("div", {
                        className: "ModalContainerInner-Jq9PqX",
                        children: (0, l.jsx)(i.Content, {
                          forceMount: !0,
                          ...y,
                          ref: I,
                          className: (0, n.A)("Modal-y3c45j", t),
                          style: (0, u.mW)({ "modal-max-width": f }),
                          "data-animate": S ? "shake" : void 0,
                          onCloseAutoFocus: (e) => {
                            ;(v?.(e), M.current.open || M.current.onAfterClose?.())
                          },
                          onOpenAutoFocus: u.iB,
                          onEscapeKeyDown: u.iB,
                          onKeyDown: (e) => {
                            if (N && e.target === N && "Tab" === e.key && e.shiftKey) {
                              ;(e.preventDefault(), e.stopPropagation())
                              let t = (0, u.mr)(N),
                                a = t[t.length - 1]
                              a?.focus()
                            }
                          },
                          onPointerDownOutside: T,
                          onInteractOutside: T,
                          children: e,
                        }),
                      }),
                    }),
                  ],
                },
                "modal",
              ),
          }),
        })
      }),
      (w.Form = ({ children: e, className: t, ...a }) =>
        (0, l.jsx)("form", { className: (0, n.A)("Form-fJjvb5", t), ...a, children: e })),
      (w.Header = ({ children: e }) => (0, l.jsx)("div", { className: "Header-kJ21jW", children: e })),
      (w.Body = ({ children: e, className: t, ...a }) => {
        let i = (0, r.useRef)(null),
          { isScrollable: o, isAtStart: s } = ((e) => {
            let [t, a] = (0, r.useState)(!1),
              [l, n] = (0, r.useState)(!0),
              [i, o] = (0, r.useState)(!1)
            return (
              (0, r.useEffect)(() => {
                let t = e.current
                if (!t) return
                let l = () => {
                  let { scrollHeight: e, clientHeight: l, scrollTop: i } = t
                  ;(a(e > l), n(0 === i), o(i + l >= e))
                }
                ;(l(), t.addEventListener("scroll", l, { passive: !0 }))
                let i = new ResizeObserver(l)
                return (
                  i.observe(t),
                  () => {
                    ;(t.removeEventListener("scroll", l), i.disconnect())
                  }
                )
              }, [e]),
              { isScrollable: t, isAtStart: l, isAtEnd: i }
            )
          })(i)
        return (0, l.jsx)("div", {
          ref: i,
          className: (0, n.A)("Body-Rc9KSO", t),
          "data-scrollable": o,
          "data-scroll-at-top": s,
          ...a,
          children: e,
        })
      }),
      (w.Footer = ({ children: e, className: t, ...a }) =>
        (0, l.jsx)("div", { className: (0, n.A)("Footer-Pa3SZt", t), ...a, children: e })),
      (w.Title = ({ children: e, className: t, ...a }) =>
        (0, l.jsx)(i.Title, { className: (0, n.A)("Title-FU9Iik", t), ...a, children: e })),
      (w.Description = ({ visuallyHidden: e = !1, children: t, className: a }) =>
        (0, l.jsx)(i.Description, {
          className: (0, n.A)("Description-TM02JO", a),
          "data-visually-hidden": e ? "" : void 0,
          children: t,
        })),
      (w.Close = ({ children: e }) => {
        let t = x()
        return "function" == typeof e
          ? (0, l.jsx)(l.Fragment, { children: e({ close: t }) })
          : (0, l.jsx)(i.Close, { asChild: !0, children: e })
      }))
  },
  gpMO(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      i = a("Wf1j"),
      r = a("oyxz"),
      o = a("DcH0"),
      s = a("uw7U")
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a = (0, n.c)(5),
            { isStreaming: d } = e,
            c = (0, i.A)()
          if (!d) {
            let e, t
            return (
              a[0] !== c
                ? ((e = c.formatMessage({
                    id: "mermaidDiagram.loading",
                    defaultMessage: "Loading Mermaid diagram",
                    description: "Accessible label for a Mermaid diagram loading placeholder",
                  })),
                  (a[0] = c),
                  (a[1] = e))
                : (e = a[1]),
              a[2] !== e
                ? ((t = (0, l.jsx)(o._, {
                    className: "aspect-video min-h-60 w-full rounded-lg",
                    variant: "solid",
                    role: "status",
                    "aria-label": e,
                  })),
                  (a[2] = e),
                  (a[3] = t))
                : (t = a[3]),
              t
            )
          }
          return (
            a[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)("div", {
                  className: "w-full",
                  "data-mermaid-streaming": !0,
                  role: "status",
                  children: (0, l.jsx)(s.w, {
                    message: (0, l.jsx)(r.A, {
                      id: "codeBlock.mermaid.loadingDiagram",
                      defaultMessage: "Loading diagram",
                      description: "Shimmering status text shown while a Mermaid diagram response is waiting to render",
                    }),
                  }),
                })),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  NkEl(e, t, a) {
    let l = new WeakMap(),
      n = "data-search-result-target"
    a.d(
      t,
      {},
      {
        k: function (e) {
          return [e, ...e.querySelectorAll(`[${n}]`)].flatMap((e) => {
            let t = l.get(e)
            return null == t ? [] : [{ element: e, target: t }]
          })
        },
        y: function (e, t) {
          return (
            l.set(e, t),
            e.setAttribute(n, ""),
            () => {
              ;(l.delete(e), e.removeAttribute(n))
            }
          )
        },
      },
    )
  },
  nAYi(e, t, a) {
    a.d(t, { Y: () => v })
    var l = a("ABep"),
      n = a("QosV"),
      i = a("fK6E"),
      r = a("esQs"),
      o = a("on57"),
      s = a("zd8w"),
      d = a("Wf1j"),
      c = a("oyxz"),
      u = a("ygO2"),
      m = a("HOLv"),
      h = a("VL1D"),
      f = a("RNul"),
      p = (e) =>
        (0, l.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, l.jsx)("path", { fill: "#4784E1", d: "M20 9.178a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#6196E9", d: "M16 5.178a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0v-12a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#7BA9F0", d: "M12 7.178a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#94BBF8", d: "M8 3.178a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-16a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#AECDFF", d: "M4 9.178a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" }),
          ],
        }),
      g = (e) =>
        (0, l.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, l.jsx)("path", { fill: "#3C5CD8", d: "M20 9.178a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#4C6EE2", d: "M16 5.178a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0v-12a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#5D7FEC", d: "M12 7.178a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#6D91F5", d: "M8 3.178a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-16a1 1 0 0 1 1-1Z" }),
            (0, l.jsx)("path", { fill: "#7DA2FF", d: "M4 9.178a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z" }),
          ],
        }),
      x = a("S7UD")
    function v(e) {
      var t
      let a,
        p,
        g,
        v,
        j,
        k,
        C,
        S,
        A,
        M,
        N,
        I,
        E,
        T,
        B,
        P,
        F = (0, n.c)(52),
        { className: R, actions: L, label: O, onError: _, onLoadedMetadata: D, src: z, status: U, title: V } = e,
        W = (0, d.A)(),
        H = (0, s.useRef)(null),
        [Z, Q] = (0, s.useState)(0),
        [q, K] = (0, s.useState)(0),
        [G, $] = (0, s.useState)(!1),
        J = (0, x.ax)(z) ? z : void 0
      F[0] !== _ ? ((p = () => _?.()), (F[0] = _), (F[1] = p)) : (p = F[1])
      let X = (0, s.useEffectEvent)(p)
      ;(F[2] !== J || F[3] !== X
        ? ((g = () => {
            let e = H.current
            if (null != e && null != J) return (0, x.Kr)(e, J, () => X())
          }),
          (F[2] = J),
          (F[3] = X),
          (F[4] = g))
        : (g = F[4]),
        F[5] !== J || F[6] !== U ? ((v = [J, U]), (F[5] = J), (F[6] = U), (F[7] = v)) : (v = F[7]),
        (0, s.useEffect)(g, v))
      let Y = V || O
      F[8] !== Y
        ? ((t = Y),
          (j = null == (a = t.match(/\.([a-z0-9]+)$/i)?.[1]) ? null : a.toUpperCase()),
          (F[8] = Y),
          (F[9] = j))
        : (j = F[9])
      let ee = j
      F[10] !== Y || F[11] !== W
        ? ((k = W.formatMessage(
            {
              id: "markdown.audio.play",
              defaultMessage: "Play {filename}",
              description: "Accessible label for playing an inline audio file",
            },
            { filename: Y },
          )),
          (F[10] = Y),
          (F[11] = W),
          (F[12] = k))
        : (k = F[12])
      let et = k
      F[13] !== Y || F[14] !== W
        ? ((C = W.formatMessage(
            {
              id: "markdown.audio.pause",
              defaultMessage: "Pause {filename}",
              description: "Accessible label for pausing an inline audio file",
            },
            { filename: Y },
          )),
          (F[13] = Y),
          (F[14] = W),
          (F[15] = C))
        : (C = F[15])
      let ea = C
      F[16] !== Y || F[17] !== W
        ? ((S = W.formatMessage(
            {
              id: "markdown.audio.seek",
              defaultMessage: "Seek in {filename}",
              description: "Accessible label for the timeline of an inline audio file",
            },
            { filename: Y },
          )),
          (F[16] = Y),
          (F[17] = W),
          (F[18] = S))
        : (S = F[18])
      let el = S
      return (
        F[19] !== R ? ((A = (0, o.A)("w-full", R)), (F[19] = R), (F[20] = A)) : (A = F[20]),
        F[21] === Symbol.for("react.memo_cache_sentinel") ? ((M = (0, l.jsx)(w, {})), (F[21] = M)) : (M = F[21]),
        F[22] !== ee || F[23] !== U
          ? ((N =
              "ready" === U
                ? null == ee
                  ? (0, l.jsx)(c.A, {
                      id: "markdown.audio.fileType",
                      defaultMessage: "Audio",
                      description: "File type shown for an inline audio attachment",
                    })
                  : (0, l.jsx)(c.A, {
                      id: "markdown.audio.formattedFileType",
                      defaultMessage: "{format} audio",
                      description: "File type shown for an inline audio attachment",
                      values: { format: ee },
                    })
                : "loading" === U
                  ? (0, l.jsx)(c.A, {
                      id: "markdown.audio.loading",
                      defaultMessage: "Loading audio…",
                      description: "Loading state for an inline audio attachment",
                    })
                  : (0, l.jsx)(c.A, {
                      id: "markdown.audio.unavailable",
                      defaultMessage: "Audio unavailable",
                      description: "Error state for an inline audio attachment",
                    })),
            (F[22] = ee),
            (F[23] = U),
            (F[24] = N))
          : (N = F[24]),
        F[25] !== G || F[26] !== ea || F[27] !== et || F[28] !== U
          ? ((I =
              "loading" === U
                ? (0, l.jsx)(f.y, { className: "icon-sm shrink-0" })
                : "ready" === U
                  ? (0, l.jsx)(u.$, {
                      color: "secondary",
                      size: "iconCircle",
                      uniform: !0,
                      "aria-label": G ? ea : et,
                      onClick: () => {
                        let e = H.current
                        null != e &&
                          (e.paused
                            ? e.play().catch(() => {
                                $(!1)
                              })
                            : e.pause())
                      },
                      children: G ? (0, l.jsx)(m.I, { asset: i.F }) : (0, l.jsx)(m.I, { asset: r.n }),
                    })
                  : null),
            (F[25] = G),
            (F[26] = ea),
            (F[27] = et),
            (F[28] = U),
            (F[29] = I))
          : (I = F[29]),
        F[30] !== L || F[31] !== I
          ? ((E = (0, l.jsxs)("span", { className: "flex shrink-0 items-center gap-1", children: [I, L] })),
            (F[30] = L),
            (F[31] = I),
            (F[32] = E))
          : (E = F[32]),
        F[33] !== Y || F[34] !== N || F[35] !== E
          ? ((T = (0, l.jsx)(h.Ni, {
              icon: M,
              padding: "compact",
              title: Y,
              titleTooltip: Y,
              subtitle: N,
              trailing: E,
            })),
            (F[33] = Y),
            (F[34] = N),
            (F[35] = E),
            (F[36] = T))
          : (T = F[36]),
        F[37] !== Z ||
        F[38] !== J ||
        F[39] !== q ||
        F[40] !== O ||
        F[41] !== _ ||
        F[42] !== D ||
        F[43] !== el ||
        F[44] !== z ||
        F[45] !== U ||
        F[46] !== V
          ? ((B =
              "ready" === U && null != z
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("span", {
                        className: "flex items-center gap-2 border-t border-default px-3 py-2",
                        children: [
                          (0, l.jsx)("input", {
                            type: "range",
                            className:
                              "h-5 min-w-0 flex-1 cursor-interaction disabled:cursor-default disabled:opacity-40",
                            "aria-label": el,
                            disabled: q <= 0,
                            max: q > 0 ? q : 1,
                            min: 0,
                            step: 0.1,
                            value: Math.min(Z, q > 0 ? q : 1),
                            onChange: (e) => {
                              let t = e.currentTarget.valueAsNumber,
                                a = H.current
                              null != a && ((a.currentTime = t), Q(t))
                            },
                          }),
                          (0, l.jsx)("span", {
                            className: "shrink-0 text-size-chat-sm text-secondary tabular-nums",
                            children: (0, l.jsx)(c.A, {
                              id: "markdown.audio.progress",
                              defaultMessage: "{currentTime} / {duration}",
                              description: "Current time and total duration for an inline audio attachment",
                              values: { currentTime: y(Z), duration: y(q) },
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("audio", {
                        ref: H,
                        className: "hidden",
                        src: null == J ? z : void 0,
                        title: V,
                        "aria-label": O,
                        controls: !0,
                        preload: "metadata",
                        onLoadedMetadata: (e) => D?.(e.currentTarget),
                        onDurationChange: (e) => {
                          K(b(e.currentTarget.duration))
                        },
                        onEnded: () => {
                          $(!1)
                        },
                        onError: _,
                        onPause: () => {
                          $(!1)
                        },
                        onPlay: () => {
                          $(!0)
                        },
                        onTimeUpdate: (e) => {
                          Q(e.currentTarget.currentTime)
                        },
                      }),
                    ],
                  })
                : null),
            (F[37] = Z),
            (F[38] = J),
            (F[39] = q),
            (F[40] = O),
            (F[41] = _),
            (F[42] = D),
            (F[43] = el),
            (F[44] = z),
            (F[45] = U),
            (F[46] = V),
            (F[47] = B))
          : (B = F[47]),
        F[48] !== T || F[49] !== B || F[50] !== A
          ? ((P = (0, l.jsxs)(h.zU, { as: "span", className: A, children: [T, B] })),
            (F[48] = T),
            (F[49] = B),
            (F[50] = A),
            (F[51] = P))
          : (P = F[51]),
        P
      )
    }
    function w() {
      let e,
        t = (0, n.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsxs)(h.y7, {
              children: [
                (0, l.jsx)(g, { "aria-hidden": !0, className: "size-6 dark:hidden" }),
                (0, l.jsx)(p, { "aria-hidden": !0, className: "hidden size-6 dark:block" }),
              ],
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function b(e) {
      return Number.isFinite(e) && e > 0 ? e : 0
    }
    function y(e) {
      let t = Math.max(0, Math.floor(b(e))),
        a = Math.floor(t / 60)
      return `${a}:${(t % 60).toString().padStart(2, "0")}`
    }
  },
  X4Bv(e, t, a) {
    a.d(t, { N: () => C })
    var l = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      r = a("zd8w"),
      o = a("Wf1j"),
      s = a("PSdF"),
      d = a("GO7r"),
      c = (e) =>
        (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          ...e,
          children: (0, l.jsx)("path", {
            d: "M10.33 12.668c.367 0 .665.298.665.665l.002 3.333a.665.665 0 0 1-1.33.001l-.002-3.334c0-.367.298-.665.665-.665Zm3.364-5.639a.665.665 0 0 1 .94 0l2.5 2.5c.26.26.26.682 0 .942l-2.5 2.5a.666.666 0 0 1-.94-.942l1.365-1.364H3.33a.665.665 0 1 1 0-1.33h11.728l-1.365-1.364a.666.666 0 0 1 0-.942ZM10.33 2.668c.367 0 .665.298.665.665l.002 3.333a.665.665 0 0 1-1.33.001l-.002-3.334c0-.367.298-.665.665-.665Z",
          }),
        }),
      u = (e) =>
        (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          ...e,
          children: (0, l.jsx)("path", {
            d: "M15.672 2.668c.367 0 .665.298.665.665l-.002 13.333a.665.665 0 0 1-1.33 0l.002-13.333c0-.367.298-.665.665-.665ZM9.586 6.002a3.582 3.582 0 0 1 0 7.163H5.777l.949.948a.665.665 0 1 1-.94.94l-2.084-2.082a.667.667 0 0 1 0-.94l2.083-2.085a.666.666 0 0 1 .94.942l-.947.947h3.808a2.251 2.251 0 0 0 0-4.503H4.169a.666.666 0 0 1 0-1.33h5.417Z",
          }),
        }),
      m = a("aepO"),
      h = a("a6Zv"),
      f = a("ygO2"),
      p = a("uuN8"),
      g = a("CqQF"),
      x = a("Rv71"),
      v = a("oyxz"),
      w = a("zKCW"),
      b = a("rVvC"),
      y = "CodeSurface-UAMd1A"
    function j(e) {
      let t,
        a,
        i,
        r,
        o,
        s = (0, n.c)(9),
        { source: d } = e
      s[0] !== d
        ? ((t = (a = d.trim()).startsWith("\\[") || a.startsWith("\\(") ? (0, x.J)(a) : void 0),
          (s[0] = d),
          (s[1] = t),
          (s[2] = a))
        : ((t = s[1]), (a = s[2]))
      let c = t,
        u = c?.raw === a && "string" == typeof c.text ? c.text : d
      return (
        s[3] !== u || s[4] !== d
          ? ((i = { type: "math", raw: d, text: u, display: !0 }), (s[3] = u), (s[4] = d), (s[5] = i))
          : (i = s[5]),
        s[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)("div", {
              className: "PreviewError-_CR6f8",
              children: (0, l.jsx)(w.l, {
                density: "compact",
                type: "error",
                role: "alert",
                content: (0, l.jsx)(v.A, {
                  id: "pageCodeBlock.latexPreviewFailed",
                  defaultMessage: "LaTeX is invalid",
                  description: "Message shown when a LaTeX code block cannot be rendered as an equation",
                }),
              }),
            })),
            (s[6] = r))
          : (r = s[6]),
        s[7] !== i ? ((o = (0, l.jsx)(b.mJ, { token: i, errorFallback: r })), (s[7] = i), (s[8] = o)) : (o = s[8]),
        o
      )
    }
    var k = a("sxZX")
    function C(e) {
      let t,
        a,
        x,
        v,
        w,
        b,
        C,
        M,
        N,
        I,
        E = (0, n.c)(79),
        {
          ref: T,
          source: B,
          sourceRef: P,
          title: F,
          content: R,
          clipboardContent: L,
          language: O,
          allowPreview: _,
          codeCopyText: D,
          actionButtons: z,
          trailingActionButtons: U,
          alternateContent: V,
          previewContent: W,
          isShowingPreview: H,
          preview: Z,
          shouldWrapCode: Q,
          onToggleWrapCode: q,
          wrapCodeDisabled: K,
          showCopyButton: G,
          copyButtonText: $,
          onCopyCode: J,
          className: X,
          sourceClassName: Y,
          removeTopBorderRadius: ee,
          showActionBar: et,
          showStickyRightContent: ea,
          stickyHeader: el,
          variant: en,
        } = e,
        ei = void 0 !== _ && _,
        er = void 0 !== H && H,
        eo = void 0 !== Q && Q,
        es = void 0 !== K && K,
        ed = void 0 === G || G,
        ec = void 0 === et || et,
        eu = void 0 === ea || ea,
        em = void 0 !== el && el,
        eh = void 0 === en ? "default" : en,
        ef = (0, h.Y)(),
        ep = (0, o.A)(),
        [eg, ex] = (0, r.useState)(!1)
      E[0] !== ei || E[1] !== R || E[2] !== O
        ? ((t =
            ei &&
            null != O &&
            "latex" === (0, s.dc)(O) &&
            R.trim().length > 0 &&
            !/\\(?:documentclass\b|begin\s*\{document\})/.test(R)),
          (E[0] = ei),
          (E[1] = R),
          (E[2] = O),
          (E[3] = t))
        : (t = E[3])
      let ev = t,
        ew = Z?.sourceVisible ?? eg,
        eb = Z?.setSourceVisible ?? ex,
        ey = L ?? R
      E[4] !== ep || E[5] !== eo
        ? ((a = eo
            ? ep.formatMessage({
                id: "codeSnippet.wrap.disable",
                defaultMessage: "Disable word wrap",
                description: "Button to disable word wrap for a code snippet",
              })
            : ep.formatMessage({
                id: "codeSnippet.wrap.enable",
                defaultMessage: "Enable word wrap",
                description: "Button to enable word wrap for a code snippet",
              })),
          (E[4] = ep),
          (E[5] = eo),
          (E[6] = a))
        : (a = E[6])
      let ej = a,
        ek = eo ? u : c,
        eC = "icon",
        eS = "default"
      E[7] !== ek ? ((x = (0, l.jsx)(ek, { className: "icon-2xs" })), (E[7] = ek), (E[8] = x)) : (x = E[8])
      let eA = x
      if (ev) {
        let e
        ;((eC = "composerSm"),
          (eS = "codeBlock"),
          E[9] !== eo
            ? ((e = eo ? (0, l.jsx)(d.RM5, {}) : (0, l.jsx)(d.hBl, {})), (E[9] = eo), (E[10] = e))
            : (e = E[10]),
          (eA = e))
      } else if ("default" === eh) {
        let e
        ;((eC = "imageToolbar"),
          (eS = "toolbar"),
          E[11] !== eo
            ? ((e = (0, l.jsxs)(l.Fragment, {
                children: [
                  null,
                  (0, l.jsx)(l.Fragment, { children: eo ? (0, l.jsx)(d.RM5, {}) : (0, l.jsx)(d.hBl, {}) }),
                ],
              })),
              (E[11] = eo),
              (E[12] = e))
            : (e = E[12]),
          (eA = e))
      }
      E[13] !== $ || E[14] !== ep
        ? ((v =
            $ ??
            ep.formatMessage({
              id: "copyButton.copyCode",
              defaultMessage: "Copy code",
              description: "Button to copy the contents of the code snippet to the clipboard",
            })),
          (E[13] = $),
          (E[14] = ep),
          (E[15] = v))
        : (v = E[15])
      let eM = v
      E[16] !== ey || E[17] !== J
        ? ((w = (e) => {
            let t = (0, m.E)(ey, e)
            return (J?.(), t)
          }),
          (E[16] = ey),
          (E[17] = J),
          (E[18] = w))
        : (w = E[18])
      let eN = w,
        eI = ev ? ew : void 0,
        eE = D ?? (ev ? R : void 0),
        eT = ef ? "dark" : "light",
        eB = "hover" === eh ? "w-auto overflow-visible bg-transparent" : "w-full min-w-0 contain-inline-size",
        eP = !ev && "hover" !== eh && "overflow-clip",
        eF = !ev && "preview" === eh && "group/code-snippet rounded-lg border border-default bg-surface text-default",
        eR = !ev && "default" === eh && "rounded-(--radius-3xl-base) border border-subtle text-default",
        eL = !ev && "default" === eh && (er ? "bg-transparent" : y),
        eO = !ev && "default" === eh && "Surface-BCuIs1",
        e_ = ev && "WithPreview-LsgDtz",
        eD = ef ? "dark" : "light"
      return (
        E[19] !== X ||
        E[20] !== eB ||
        E[21] !== eP ||
        E[22] !== eF ||
        E[23] !== eR ||
        E[24] !== eL ||
        E[25] !== eO ||
        E[26] !== e_ ||
        E[27] !== eD
          ? ((b = (0, i.A)("relative", "Root-iW7ipz", eB, eP, eF, eR, eL, eO, e_, eD, X)),
            (E[19] = X),
            (E[20] = eB),
            (E[21] = eP),
            (E[22] = eF),
            (E[23] = eR),
            (E[24] = eL),
            (E[25] = eO),
            (E[26] = e_),
            (E[27] = eD),
            (E[28] = b))
          : (b = E[28]),
        E[29] !== z ||
        E[30] !== eM ||
        E[31] !== eS ||
        E[32] !== ev ||
        E[33] !== eN ||
        E[34] !== er ||
        E[35] !== q ||
        E[36] !== ee ||
        E[37] !== eb ||
        E[38] !== eo ||
        E[39] !== ec ||
        E[40] !== ed ||
        E[41] !== eu ||
        E[42] !== ew ||
        E[43] !== em ||
        E[44] !== F ||
        E[45] !== U ||
        E[46] !== eh ||
        E[47] !== eC ||
        E[48] !== ej ||
        E[49] !== es ||
        E[50] !== eA
          ? ((C =
              ec &&
              (0, l.jsxs)(A, {
                floating: ev,
                removeTopBorderRadius: ee,
                sticky: em && !er && !ev,
                variant: eh,
                children: [
                  ev || "default" !== eh || null == F ? null : (0, l.jsx)(d.u1Q, {}),
                  (0, l.jsx)("div", {
                    className: (0, i.A)(
                      "min-w-0 flex-1 truncate",
                      (ev || "preview" === eh) && "flex h-token-button-composer-sm items-center",
                    ),
                    children: F,
                  }),
                  (0, l.jsx)("div", {
                    className: (0, i.A)(
                      "ms-auto flex items-center",
                      "default" === eh ? "min-w-0 max-w-full" : "shrink-0",
                    ),
                    children:
                      eu &&
                      (0, l.jsxs)("div", {
                        "data-code-block-controls": !0,
                        role: "presentation",
                        className: (0, i.A)(
                          "flex items-center gap-px print:hidden",
                          ev && "FloatingControls-z00cNh",
                          !ev && "default" === eh && "flex-wrap justify-end",
                          !ev &&
                            "preview" === eh &&
                            "opacity-0 group-hover/code-snippet:opacity-100 group-focus-within/code-snippet:opacity-100",
                        ),
                        onMouseDown: ev ? S : void 0,
                        children: [
                          ev && (0, l.jsx)(k.f, { sourceVisible: ew, onToggle: () => eb(!ew) }),
                          "default" !== eh ? z : null,
                          null != q &&
                            (0, l.jsx)(g.m, {
                              tooltipContent: ej,
                              children: (0, l.jsx)(f.$, {
                                "aria-label": ej,
                                "aria-pressed": eo,
                                disabled: es,
                                color: ev || "default" !== eh ? "ghost" : "ghostActive",
                                size: eC,
                                uniform: ev || "default" === eh,
                                className: !ev && eo ? "hover:text-default" : void 0,
                                onClick: q,
                                children: eA,
                              }),
                            }),
                          "default" === eh ? z : null,
                          ed &&
                            (0, l.jsx)(p.i, {
                              variant: eS,
                              ariaLabel: eM,
                              iconClassName: "icon-xs",
                              iconOnly: !0,
                              buttonText: eM,
                              onCopy: eN,
                            }),
                          U,
                        ],
                      }),
                  }),
                ],
              })),
            (E[29] = z),
            (E[30] = eM),
            (E[31] = eS),
            (E[32] = ev),
            (E[33] = eN),
            (E[34] = er),
            (E[35] = q),
            (E[36] = ee),
            (E[37] = eb),
            (E[38] = eo),
            (E[39] = ec),
            (E[40] = ed),
            (E[41] = eu),
            (E[42] = ew),
            (E[43] = em),
            (E[44] = F),
            (E[45] = U),
            (E[46] = eh),
            (E[47] = eC),
            (E[48] = ej),
            (E[49] = es),
            (E[50] = eA),
            (E[51] = C))
          : (C = E[51]),
        E[52] !== V ||
        E[53] !== ev ||
        E[54] !== er ||
        E[55] !== W ||
        E[56] !== eo ||
        E[57] !== ec ||
        E[58] !== B ||
        E[59] !== Y ||
        E[60] !== P ||
        E[61] !== ew ||
        E[62] !== eh
          ? ((M =
              er && null != W
                ? null
                : (V ??
                  (0, l.jsx)("div", {
                    ref: P,
                    "data-code-block-source": !0,
                    hidden: ev && !ew,
                    inert: ev && !ew,
                    className: (0, i.A)(
                      "text-size-chat overflow-auto outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                      "Source-kILllF",
                      eo ? "wrap-anywhere whitespace-pre-wrap" : "whitespace-pre",
                      ev && "FloatingSource-LdBIiI",
                      ev && y,
                      !ev && "hover" === eh && "p-0",
                      !ev && "default" === eh && (ec ? "px-4 pt-0 pb-3 md:px-5" : "p-4 md:px-5"),
                      !ev && "preview" === eh && "max-h-[calc(15lh+var(--spacing)*4)] p-2",
                      Y,
                    ),
                    tabIndex: "preview" === eh ? 0 : void 0,
                    dir: "ltr",
                    children: B,
                  }))),
            (E[52] = V),
            (E[53] = ev),
            (E[54] = er),
            (E[55] = W),
            (E[56] = eo),
            (E[57] = ec),
            (E[58] = B),
            (E[59] = Y),
            (E[60] = P),
            (E[61] = ew),
            (E[62] = eh),
            (E[63] = M))
          : (M = E[63]),
        E[64] !== R || E[65] !== ev || E[66] !== Z?.source || E[67] !== ew
          ? ((N =
              ev &&
              (0, l.jsx)("div", {
                "data-code-block-preview": !0,
                "data-markdown-copy": ew ? "exclude" : "contents",
                contentEditable: !1,
                className: (0, i.A)("Preview-NSYmns", ew && "PreviewHidden-rvND7_"),
                inert: ew,
                children: (0, l.jsx)(j, { source: Z?.source ?? R }),
              })),
            (E[64] = R),
            (E[65] = ev),
            (E[66] = Z?.source),
            (E[67] = ew),
            (E[68] = N))
          : (N = E[68]),
        E[69] !== W ||
        E[70] !== T ||
        E[71] !== eI ||
        E[72] !== eE ||
        E[73] !== eT ||
        E[74] !== b ||
        E[75] !== C ||
        E[76] !== M ||
        E[77] !== N
          ? ((I = (0, l.jsxs)("div", {
              ref: T,
              "data-code-block": !0,
              "data-source-visible": eI,
              "data-markdown-copy": "code-block",
              "data-markdown-copy-text": eE,
              "data-theme": eT,
              className: b,
              children: [C, M, N, W],
            })),
            (E[69] = W),
            (E[70] = T),
            (E[71] = eI),
            (E[72] = eE),
            (E[73] = eT),
            (E[74] = b),
            (E[75] = C),
            (E[76] = M),
            (E[77] = N),
            (E[78] = I))
          : (I = E[78]),
        I
      )
    }
    function S(e) {
      e.target instanceof Node && e.currentTarget.contains(e.target) && e.preventDefault()
    }
    function A(e) {
      let t,
        a,
        r,
        o,
        s,
        d,
        c,
        u = (0, n.c)(15)
      u[0] !== e
        ? (({ floating: t, removeTopBorderRadius: r, sticky: o, variant: s, ...a } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = a),
          (u[3] = r),
          (u[4] = o),
          (u[5] = s))
        : ((t = u[1]), (a = u[2]), (r = u[3]), (o = u[4]), (s = u[5]))
      let m = void 0 !== r && r,
        h = void 0 !== o && o,
        f = "px-2 py-1 text-codex-description"
      t
        ? (f = "FloatingActionBar-N62vMF")
        : "default" === s && (f = "min-h-12 gap-2 py-1.5 ps-4 pe-1.5 font-medium text-default md:ps-5")
      let p = h && "sticky z-10",
        g = h && "default" !== s && "border-b border-default",
        x = h && "StickyActionBar-RZfVQh",
        v = !t && !m && "default" !== s && "rounded-t-lg"
      return (
        u[6] !== f || u[7] !== p || u[8] !== g || u[9] !== x || u[10] !== v
          ? ((d = (0, i.A)("flex items-center font-sans text-sm select-none", "ActionBar-KWWAct", f, p, g, x, v)),
            (u[6] = f),
            (u[7] = p),
            (u[8] = g),
            (u[9] = x),
            (u[10] = v),
            (u[11] = d))
          : (d = u[11]),
        u[12] !== a || u[13] !== d
          ? ((c = (0, l.jsx)("div", { "data-markdown-copy": "exclude", contentEditable: !1, className: d, ...a })),
            (u[12] = a),
            (u[13] = d),
            (u[14] = c))
          : (c = u[14]),
        c
      )
    }
  },
  sxZX(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      i = a("slpy"),
      r = a("oyxz"),
      o = a("ygO2")
    function s(e) {
      return e.preventDefault()
    }
    a.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            a,
            d,
            c,
            u = (0, n.c)(11),
            { sourceVisible: m, onToggle: h, previewLabel: f } = e
          u[0] !== f || u[1] !== m
            ? ((t = m
                ? (f ??
                  (0, l.jsx)(r.A, {
                    id: "pageCodeBlock.showPreview",
                    defaultMessage: "Show preview",
                    description: "Button to preview a LaTeX code block as a typeset equation",
                  }))
                : (0, l.jsx)(r.A, {
                    id: "pageCodeBlock.showSource",
                    defaultMessage: "Show source",
                    description: "Button to show the source of a code block instead of its rendered preview",
                  })),
              (u[0] = f),
              (u[1] = m),
              (u[2] = t))
            : (t = u[2])
          let p = t
          return (
            u[3] !== p
              ? ((a = (0, l.jsx)("span", { className: "truncate", "data-tooltip-enablement-target": !0, children: p })),
                (u[3] = p),
                (u[4] = a))
              : (a = u[4]),
            u[5] !== h || u[6] !== a
              ? ((d = (0, l.jsx)(o.$, {
                  allowShrink: !0,
                  color: "ghost",
                  size: "composerSm",
                  onMouseDown: s,
                  onClick: h,
                  children: a,
                })),
                (u[5] = h),
                (u[6] = a),
                (u[7] = d))
              : (d = u[7]),
            u[8] !== p || u[9] !== d
              ? ((c = (0, l.jsx)(i.m, { enabledWhen: "target-overflows", content: p, children: d })),
                (u[8] = p),
                (u[9] = d),
                (u[10] = c))
              : (c = u[10]),
            c
          )
        },
      },
    )
  },
  KV8i(e, t, a) {
    a.d(
      t,
      {},
      {
        Q: function (e, t) {
          return "svg" === t || (("xml" === t || "html" === t) && /^\s*<svg/.test(e))
        },
      },
    )
  },
  la9L(e, t, a) {
    a.d(t, { CodeSnippet: () => S })
    var l = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      r = a("zd8w"),
      o = a("Wf1j"),
      s = a("NycP"),
      d = a("aepO"),
      c = a("X4Bv"),
      u = a("KV8i"),
      m = a("CuLE"),
      h = a("rBG6")
    let f = new Set(),
      p = null,
      g = !1,
      x = null,
      v = null,
      w = (0, m.A)(() =>
        Promise.all([a.e(534886), a.e(64918), a.e(983645)])
          .then(a.bind(a, "cVab"))
          .catch(
            (e) => (
              (0, h.dk)(e instanceof Error ? e : Error("Failed to load code highlighting", { cause: e }), {
                tags: { operation: "code-snippet-highlighter-load" },
              }),
              null
            ),
          ),
      )
    function b() {
      if (null != x) return
      let e = f.values().next().value
      if (null == e) {
        null != p &&
          (v = setTimeout(() => {
            ;(p?.terminate(), (p = null), (v = null))
          }, 3e4))
        return
      }
      if ((f.delete(e), (x = e), !g && null == p))
        try {
          ;(((p = new Worker(
            new URL(a.p + a.u(700732), a.b),
            Object.assign({}, { type: "module" }, { type: "module" }),
          )).onmessage = (e) => {
            null == e.data ? (y(), null != x && j(x)) : k(e.data)
          }),
            (p.onerror = (e) => {
              ;(e.preventDefault(), y(), null != x && j(x))
            }))
        } catch {
          y()
        }
      null == p ? j(e) : p.postMessage(e.args)
    }
    function y() {
      ;(null != p && ((p.onmessage = null), (p.onerror = null), p.terminate(), (p = null)), (g = !0))
    }
    function j(e) {
      w()
        .then(async (t) => {
          k(null != e.onResult && null != t ? await t.highlightCode(...e.args) : null)
        })
        .catch(() => {
          ;((0, h.dk)(Error("Code highlighting failed"), { tags: { operation: "code-snippet-highlighter" } }), k(null))
        })
    }
    function k(e) {
      let t = x
      ;((x = null), null != e && t?.onResult?.(e), b())
    }
    let C = r.memo(function (e) {
      let t,
        a = (0, n.c)(2),
        { html: i } = e
      return (
        a[0] !== i
          ? ((t = (0, l.jsx)("span", { dangerouslySetInnerHTML: { __html: i } })), (a[0] = i), (a[1] = t))
          : (t = a[1]),
        t
      )
    })
    function S(e) {
      var t
      let a,
        d,
        m,
        h,
        p,
        g,
        x,
        w,
        y,
        j,
        k,
        S,
        N,
        I,
        E,
        T,
        B,
        P,
        F,
        R,
        L,
        O,
        _,
        D,
        z,
        U,
        V,
        W,
        H,
        Z,
        Q,
        q = (0, n.c)(74)
      q[0] !== e
        ? (({
            ref: L,
            wrapperClassName: R,
            alternateContent: h,
            previewContent: S,
            isShowingPreview: N,
            isStreaming: I,
            codeClassName: x,
            clipboardContent: p,
            codeCopyText: y,
            language: k,
            renderSvgAsImage: E,
            content: j,
            shouldWrapCode: T,
            codeContainerClassName: w,
            title: F,
            deferEnhancementsUntilVisible: B,
            variant: P,
            ...g
          } = e),
          (q[0] = e),
          (q[1] = h),
          (q[2] = p),
          (q[3] = g),
          (q[4] = x),
          (q[5] = w),
          (q[6] = y),
          (q[7] = j),
          (q[8] = k),
          (q[9] = S),
          (q[10] = N),
          (q[11] = I),
          (q[12] = E),
          (q[13] = T),
          (q[14] = B),
          (q[15] = P),
          (q[16] = F),
          (q[17] = R),
          (q[18] = L))
        : ((h = q[1]),
          (p = q[2]),
          (g = q[3]),
          (x = q[4]),
          (w = q[5]),
          (y = q[6]),
          (j = q[7]),
          (k = q[8]),
          (S = q[9]),
          (N = q[10]),
          (I = q[11]),
          (E = q[12]),
          (T = q[13]),
          (B = q[14]),
          (P = q[15]),
          (F = q[16]),
          (R = q[17]),
          (L = q[18]))
      let K = void 0 !== N && N,
        G = void 0 !== I && I,
        $ = void 0 === E || E,
        J = void 0 !== T && T,
        X = void 0 !== B && B,
        Y = void 0 === P ? "default" : P,
        ee = (0, r.useRef)(null),
        et = (function (e, t) {
          let a,
            l,
            i = (0, n.c)(4),
            [o, s] = (0, r.useState)(!1),
            d = !t || o
          return (
            i[0] !== d || i[1] !== e
              ? ((a = () => {
                  if (d) return
                  let t = e.current
                  if (null == t) return
                  if ("u" < typeof IntersectionObserver) {
                    let e = setTimeout(() => {
                      s(!0)
                    }, 0)
                    return () => {
                      clearTimeout(e)
                    }
                  }
                  let a = new IntersectionObserver(
                    (e) => {
                      e.some(A) && (s(!0), a.disconnect())
                    },
                    { rootMargin: "600px 0px" },
                  )
                  return (
                    a.observe(t),
                    () => {
                      a.disconnect()
                    }
                  )
                }),
                (l = [d, e]),
                (i[0] = d),
                (i[1] = e),
                (i[2] = a),
                (i[3] = l))
              : ((a = i[2]), (l = i[3])),
            (0, r.useEffect)(a, l),
            d
          )
        })(ee, X),
        ea = (0, o.A)(),
        [el, en] = (0, r.useState)(null)
      q[19] !== j || q[20] !== G || q[21] !== k
        ? ((O = {
            disposed: !1,
            latestContent: j,
            latestLanguage: k,
            latestIsStreaming: G,
            lastStartedAtMs: null,
            timeoutHandle: null,
            cancelHighlight: null,
          }),
          (q[19] = j),
          (q[20] = G),
          (q[21] = k),
          (q[22] = O))
        : (O = q[22])
      let ei = (0, r.useRef)(O)
      q[23] !== k ? ((_ = k?.trim().toLowerCase()), (q[23] = k), (q[24] = _)) : (_ = q[24])
      let er = "plaintext" === _
      q[25] !== j || q[26] !== k || q[27] !== $
        ? ((D = $ && (0, u.Q)(j, k)), (q[25] = j), (q[26] = k), (q[27] = $), (q[28] = D))
        : (D = q[28])
      let eo = D,
        es = et && null == h && !(K && null != S) && !eo && !er
      ;(q[29] !== j || q[30] !== G || q[31] !== k || q[32] !== es
        ? ((z = () => {
            let e = ei.current
            if (((e.latestContent = j), (e.latestLanguage = k), (e.latestIsStreaming = G), !es)) {
              ;(e.cancelHighlight?.(),
                (e.cancelHighlight = null),
                null != e.timeoutHandle && (clearTimeout(e.timeoutHandle), (e.timeoutHandle = null)))
              return
            }
            if (null != e.timeoutHandle) return
            let t = performance.now(),
              a = Math.max(0, 120 - (null == e.lastStartedAtMs ? 120 : t - e.lastStartedAtMs)),
              l = () => {
                let t
                if (((e.timeoutHandle = null), e.disposed)) return
                let a = e.latestContent,
                  l = e.latestLanguage,
                  n = e.latestIsStreaming
                ;((e.lastStartedAtMs = performance.now()),
                  e.cancelHighlight?.(),
                  null != v && (clearTimeout(v), (v = null)),
                  (t = { args: [a, l, { cache: !n }], onResult: en }),
                  f.add(t),
                  b(),
                  (e.cancelHighlight = () => {
                    ;(f.delete(t), (t.onResult = null))
                  }))
              }
            0 === a ? l() : (e.timeoutHandle = setTimeout(l, a))
          }),
          (U = [j, k, G, es]),
          (q[29] = j),
          (q[30] = G),
          (q[31] = k),
          (q[32] = es),
          (q[33] = z),
          (q[34] = U))
        : ((z = q[33]), (U = q[34])),
        (0, r.useEffect)(z, U),
        (t = ei),
        (m = (0, n.c)(3))[0] !== t
          ? ((a = () => {
              let e = t.current
              return (
                (e.disposed = !1),
                () => {
                  ;((e.disposed = !0),
                    e.cancelHighlight?.(),
                    (e.cancelHighlight = null),
                    null != e.timeoutHandle && (clearTimeout(e.timeoutHandle), (e.timeoutHandle = null)))
                }
              )
            }),
            (d = [t]),
            (m[0] = t),
            (m[1] = a),
            (m[2] = d))
          : ((a = m[1]), (d = m[2])),
        (0, r.useEffect)(a, d),
        q[35] !== j || q[36] !== el || q[37] !== er
          ? ((V = !er && null != el && j.startsWith(el.code) ? el : null),
            (q[35] = j),
            (q[36] = el),
            (q[37] = er),
            (q[38] = V))
          : (V = q[38]))
      let ed = V
      if (q[39] !== j || q[40] !== ea || q[41] !== et || q[42] !== er || q[43] !== ed || q[44] !== eo) {
        let e,
          t = er && et ? j.split("\n") : ed?.html.split("\n")
        q[46] !== j || q[47] !== ed
          ? ((e = null != ed ? j.slice(ed.code.length) : j), (q[46] = j), (q[47] = ed), (q[48] = e))
          : (e = q[48])
        let a = e
        ;((W = eo
          ? (0, l.jsx)(s.t, {
              className: "max-h-96 w-full",
              alt: ea.formatMessage({
                id: "codex.codeSnippet.svgImageAlt",
                defaultMessage: "Image generated by the assistant",
                description: "Accessible description for an SVG preview inside a code snippet",
              }),
              svgString: j,
            })
          : null != t
            ? (0, l.jsxs)("span", {
                children: [
                  t.map((e, a) =>
                    (0, l.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          er ? (0, l.jsx)("span", { children: e }) : (0, l.jsx)(C, { html: e }),
                          a < t.length - 1 ? "\n" : null,
                        ],
                      },
                      a,
                    ),
                  ),
                  !er && a ? (0, l.jsx)("span", { children: a }) : null,
                ],
              })
            : (0, l.jsx)("span", { children: j })),
          (q[39] = j),
          (q[40] = ea),
          (q[41] = et),
          (q[42] = er),
          (q[43] = ed),
          (q[44] = eo),
          (q[45] = W))
      } else W = q[45]
      let ec = W,
        eu = F ?? k,
        em = y ?? (eo ? j : void 0),
        eh = J ? "whitespace-pre-wrap!" : "whitespace-pre!",
        ef = "default" === Y && "block text-size-code",
        ep = "default" === Y && "CodeContent-ybJ8Tl",
        eg = "hover" === Y && "text-xs"
      return (
        q[49] !== x || q[50] !== eh || q[51] !== ef || q[52] !== ep || q[53] !== eg
          ? ((H = (0, i.A)(eh, ef, ep, eg, x)),
            (q[49] = x),
            (q[50] = eh),
            (q[51] = ef),
            (q[52] = ep),
            (q[53] = eg),
            (q[54] = H))
          : (H = q[54]),
        q[55] !== ec || q[56] !== H
          ? ((Z = (0, l.jsx)("code", { className: H, onCopy: M, children: ec })),
            (q[55] = ec),
            (q[56] = H),
            (q[57] = Z))
          : (Z = q[57]),
        q[58] !== h ||
        q[59] !== p ||
        q[60] !== g ||
        q[61] !== w ||
        q[62] !== j ||
        q[63] !== K ||
        q[64] !== k ||
        q[65] !== S ||
        q[66] !== J ||
        q[67] !== eu ||
        q[68] !== em ||
        q[69] !== Z ||
        q[70] !== Y ||
        q[71] !== R ||
        q[72] !== L
          ? ((Q = (0, l.jsx)(c.N, {
              ref: L,
              className: R,
              ...g,
              sourceRef: ee,
              title: eu,
              content: j,
              clipboardContent: p,
              language: k,
              codeCopyText: em,
              shouldWrapCode: J,
              alternateContent: h,
              previewContent: S,
              isShowingPreview: K,
              sourceClassName: w,
              variant: Y,
              source: Z,
            })),
            (q[58] = h),
            (q[59] = p),
            (q[60] = g),
            (q[61] = w),
            (q[62] = j),
            (q[63] = K),
            (q[64] = k),
            (q[65] = S),
            (q[66] = J),
            (q[67] = eu),
            (q[68] = em),
            (q[69] = Z),
            (q[70] = Y),
            (q[71] = R),
            (q[72] = L),
            (q[73] = Q))
          : (Q = q[73]),
        Q
      )
    }
    function A(e) {
      return e.isIntersecting
    }
    function M(e) {
      if (e.defaultPrevented) return
      ;(e.preventDefault(), e.stopPropagation())
      let t = window.getSelection()?.toString()
      t && (0, d.E)(t, e)
    }
  },
  ikiV(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      r = a("njfI"),
      o = a("BEzz"),
      s = a("tt6P")
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            d,
            c = (0, n.c)(9),
            { className: u, href: m, loadRemote: h } = e,
            f = void 0 !== h && h
          if (c[0] !== m) {
            let e = (0, r.P)(m)
            ;((t = null == e ? null : (0, o.r)(e)), (c[0] = m), (c[1] = t))
          } else t = c[1]
          let p = t
          c[2] !== u ? ((a = (0, i.A)("rounded-2xs", u)), (c[2] = u), (c[3] = a)) : (a = c[3])
          let g = a
          return (
            c[4] !== p || c[5] !== m || c[6] !== g || c[7] !== f
              ? ((d =
                  null == p
                    ? (0, l.jsx)(s.a, { className: g, href: m, loadRemote: f })
                    : (0, l.jsx)(p, { "aria-hidden": !0, className: g })),
                (c[4] = p),
                (c[5] = m),
                (c[6] = g),
                (c[7] = f),
                (c[8] = d))
              : (d = c[8]),
            d
          )
        },
      },
    )
  },
  uw7U(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      i = a("on57"),
      r = a("oyxz"),
      o = a("umSm"),
      s = a("q5qu")
    a.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            a,
            d,
            c,
            u,
            m,
            h = (0, n.c)(16),
            { isVisible: f, icon: p, message: g } = e,
            x = void 0 === f || f,
            v = null != p && "gap-1.5"
          ;(h[0] !== v
            ? ((t = (0, i.A)(
                "inline-flex max-w-full min-w-0 items-center overflow-hidden text-text/60 [&_*:not(button)]:!text-text/60",
                v,
              )),
              (h[0] = v),
              (h[1] = t))
            : (t = h[1]),
            h[2] !== p
              ? ((a = p ?? (0, l.jsx)("span", { "aria-hidden": !0, className: "h-4 w-0 shrink-0" })),
                (h[2] = p),
                (h[3] = a))
              : (a = h[3]))
          let w = !x,
            b = !x && "invisible"
          return (
            h[4] !== b
              ? ((d = (0, i.A)("min-w-0 flex-1 truncate select-none", b)), (h[4] = b), (h[5] = d))
              : (d = h[5]),
            h[6] !== g
              ? ((c =
                  g ??
                  (0, l.jsx)(r.A, {
                    id: "thinkingShimmer.default",
                    defaultMessage: "Thinking",
                    description: "Default placeholder shown while the assistant is thinking",
                  })),
                (h[6] = g),
                (h[7] = c))
              : (c = h[7]),
            h[8] !== w || h[9] !== d || h[10] !== c
              ? ((u = (0, l.jsx)(o.N, { "aria-hidden": w, className: d, children: c })),
                (h[8] = w),
                (h[9] = d),
                (h[10] = c),
                (h[11] = u))
              : (u = h[11]),
            h[12] !== t || h[13] !== a || h[14] !== u
              ? ((m = (0, l.jsx)(s.D, {
                  className: "leading-normal",
                  children: (0, l.jsxs)("div", { className: t, children: [a, u] }),
                })),
                (h[12] = t),
                (h[13] = a),
                (h[14] = u),
                (h[15] = m))
              : (m = h[15]),
            m
          )
        },
      },
    )
  },
  hMRX(e, t, a) {
    let l = (0, a("zd8w").createContext)(!1)
    a.d(t, {}, { x: l })
  },
  GgAx(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      i = a("zd8w"),
      r = a("Wf1j"),
      o = a("gpMO"),
      s = a("Fl60"),
      d = a("PSdF"),
      c = a("la9L"),
      u = a("KV8i"),
      m = a("hMRX"),
      h = a("mZuD"),
      f = a("Lydu")
    function p(e) {
      let { renderImmediately: t, ...a } = e,
        n = (0, i.useContext)(s.b)
      return t || null != n ? a.renderVisible() : (0, l.jsx)(g, { ...a })
    }
    function g(e) {
      let t,
        a,
        r,
        o = (0, n.c)(7),
        { fallback: s, renderVisible: d } = e,
        c = (0, i.useRef)(null),
        [u, m] = (0, i.useState)(!1)
      if (
        (o[0] !== u
          ? ((t = () => {
              if (u) return
              let e = c.current
              if (null == e) return
              if ("u" < typeof IntersectionObserver) {
                let e = setTimeout(() => {
                  m(!0)
                }, 0)
                return () => {
                  clearTimeout(e)
                }
              }
              let t = new IntersectionObserver(
                (e) => {
                  e.some(x) && (m(!0), t.disconnect())
                },
                { rootMargin: "600px 0px" },
              )
              return (
                t.observe(e),
                () => {
                  t.disconnect()
                }
              )
            }),
            (a = [u]),
            (o[0] = u),
            (o[1] = t),
            (o[2] = a))
          : ((t = o[1]), (a = o[2])),
        (0, i.useEffect)(t, a),
        u)
      ) {
        let e
        return (o[3] !== d ? ((e = d()), (o[3] = d), (o[4] = e)) : (e = o[4]), e)
      }
      return (o[5] !== s ? ((r = (0, l.jsx)("div", { ref: c, children: s })), (o[5] = s), (o[6] = r)) : (r = o[6]), r)
    }
    function x(e) {
      return e.isIntersecting
    }
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            s,
            g,
            x,
            v = (0, n.c)(55),
            {
              allowPreview: w,
              allowWideBlocks: b,
              clipboardContent: y,
              codeSnippet: j,
              content: k,
              forceCodeBlockWordWrap: C,
              isCodeFenceOpen: S,
              language: A,
              mermaidDiagram: M,
              onAddSelectedTextToChat: N,
              renderImmediately: I,
              stickyHeader: E,
              writingBlock: T,
            } = e,
            B = void 0 === j ? c.CodeSnippet : j,
            P = void 0 !== E && E,
            F = (0, r.A)(),
            R = (0, i.useContext)(m.x)
          v[0] !== F || v[1] !== A
            ? ((t = null == A ? void 0 : (0, d.AB)(A, F)), (v[0] = F), (v[1] = A), (v[2] = t))
            : (t = v[2])
          let L = t,
            O = L?.label ?? A ?? (S ? "" : void 0),
            _ = A ?? (S ? "plaintext" : void 0),
            D = R ? "preview" : "default",
            z = null == A || "text" === A || "md" === A || "markdown" === A,
            U = "off"
          ;(R || (0, u.Q)(k, A) || (U = C ? "always" : "user-controlled"),
            v[3] !== k
              ? ((a = (0, l.jsx)("pre", {
                  className: f.A.CodeBlockPlaceholder,
                  "data-horizontal-scroll": !0,
                  children: (0, l.jsx)("code", { children: k }),
                })),
                (v[3] = k),
                (v[4] = a))
              : (a = v[4]),
            v[5] !== k || v[6] !== a
              ? ((s = (0, l.jsx)("div", {
                  className: f.A.CodeBlock,
                  "data-markdown-copy": "code-block",
                  "data-markdown-copy-text": k,
                  children: a,
                })),
                (v[5] = k),
                (v[6] = a),
                (v[7] = s))
              : (s = v[7]))
          let V = s
          if (null != T && z) {
            let e, t
            return (
              v[8] !== T || v[9] !== k || v[10] !== S || v[11] !== N
                ? ((e = () =>
                    (0, l.jsx)(T, {
                      className: f.A.CodeBlock,
                      content: k,
                      onAddSelectedTextToChat: N,
                      showCopyButton: !S,
                    })),
                  (v[8] = T),
                  (v[9] = k),
                  (v[10] = S),
                  (v[11] = N),
                  (v[12] = e))
                : (e = v[12]),
              v[13] !== I || v[14] !== V || v[15] !== e
                ? ((t = (0, l.jsx)(p, { fallback: V, renderImmediately: I, renderVisible: e })),
                  (v[13] = I),
                  (v[14] = V),
                  (v[15] = e),
                  (v[16] = t))
                : (t = v[16]),
              t
            )
          }
          if (null != M && (0, h.I)(A, S)) {
            let e,
              t,
              a,
              n,
              i = S ? "exclude" : "code-block",
              r = `\`\`\`mermaid
${k}
\`\`\``
            return (
              v[17] !== S ? ((e = (0, l.jsx)(o.H, { isStreaming: S })), (v[17] = S), (v[18] = e)) : (e = v[18]),
              v[19] !== i || v[20] !== r || v[21] !== e
                ? ((t = (0, l.jsx)("div", {
                    className: f.A.CodeBlock,
                    "data-markdown-copy": i,
                    "data-markdown-copy-text": r,
                    children: e,
                  })),
                  (v[19] = i),
                  (v[20] = r),
                  (v[21] = e),
                  (v[22] = t))
                : (t = v[22]),
              v[23] !== M ||
              v[24] !== b ||
              v[25] !== y ||
              v[26] !== O ||
              v[27] !== D ||
              v[28] !== k ||
              v[29] !== S ||
              v[30] !== P
                ? ((a = () =>
                    (0, l.jsx)(M, {
                      className: f.A.CodeBlock,
                      allowWideBlocks: b,
                      clipboardContent: y,
                      code: k,
                      isCodeFenceOpen: S,
                      fallback: (0, l.jsx)(c.CodeSnippet, {
                        wrapperClassName: f.A.CodeBlock,
                        clipboardContent: y,
                        content: k,
                        language: "plaintext",
                        stickyHeader: P && "default" === D,
                        title: O,
                        variant: D,
                      }),
                      wideBlockKind: b ? "mermaid" : void 0,
                    })),
                  (v[23] = M),
                  (v[24] = b),
                  (v[25] = y),
                  (v[26] = O),
                  (v[27] = D),
                  (v[28] = k),
                  (v[29] = S),
                  (v[30] = P),
                  (v[31] = a))
                : (a = v[31]),
              v[32] !== I || v[33] !== t || v[34] !== a
                ? ((n = (0, l.jsx)(p, { fallback: t, renderImmediately: I, renderVisible: a })),
                  (v[32] = I),
                  (v[33] = t),
                  (v[34] = a),
                  (v[35] = n))
                : (n = v[35]),
              n
            )
          }
          let W = (void 0 === w || w) && !S,
            H = !S,
            Z = "always" === U,
            Q = P && "default" === D
          v[36] !== B ||
          v[37] !== y ||
          v[38] !== O ||
          v[39] !== U ||
          v[40] !== D ||
          v[41] !== k ||
          v[42] !== _ ||
          v[43] !== S ||
          v[44] !== Q ||
          v[45] !== W ||
          v[46] !== H ||
          v[47] !== Z
            ? ((g = (0, l.jsx)(B, {
                wrapperClassName: f.A.CodeBlock,
                clipboardContent: y,
                content: k,
                allowPreview: W,
                isStreaming: S,
                language: _,
                showCopyButton: H,
                codeBlockWordWrap: U,
                shouldWrapCode: Z,
                deferEnhancementsUntilVisible: !0,
                stickyHeader: Q,
                title: O,
                variant: D,
              })),
              (v[36] = B),
              (v[37] = y),
              (v[38] = O),
              (v[39] = U),
              (v[40] = D),
              (v[41] = k),
              (v[42] = _),
              (v[43] = S),
              (v[44] = Q),
              (v[45] = W),
              (v[46] = H),
              (v[47] = Z),
              (v[48] = g))
            : (g = v[48])
          let q = g
          return (
            v[49] !== k || v[50] !== A || v[51] !== I || v[52] !== q || v[53] !== V
              ? ((x = (0, u.Q)(k, A)
                  ? (0, l.jsx)(p, { fallback: V, renderImmediately: I, renderVisible: () => q })
                  : q),
                (v[49] = k),
                (v[50] = A),
                (v[51] = I),
                (v[52] = q),
                (v[53] = V),
                (v[54] = x))
              : (x = v[54]),
            x
          )
        },
        v: p,
      },
    )
  },
  pcnI(e, t, a) {
    a.d(t, { fg: () => ej, oJ: () => eC, i3: () => ek })
    var l = a("ABep"),
      n = a("QosV"),
      i = a("iRMi")
    let r = (0, a("nkTT").a)({
      name: "photo-light-28",
      canvas: {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        frame: { x: 0, y: 0, width: 28, height: 28 },
        inkBounds: { x: 2.669922, y: 3.669922, width: 22.660156, height: 20.660156 },
        visualBounds: { x: 2.669922, y: 3.669922, width: 22.660156, height: 20.660156 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.669922, y: 3.669922, width: 22.660156, height: 20.660156 },
        center: { x: 14, y: 14 },
        insets: { top: 3.669922, right: 2.669922, bottom: 3.669922, left: 2.669922 },
        anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
      },
      capabilities: ["icon"],
      body: '<path d="M17.6475 7.73242C19.5416 7.73242 21.0778 9.26806 21.0781 11.1621C21.0781 13.0564 19.5418 14.5928 17.6475 14.5928C15.7534 14.5924 14.2178 13.0562 14.2178 11.1621C14.2181 9.26828 15.7536 7.73276 17.6475 7.73242ZM17.6475 9.39258C16.6704 9.39292 15.8783 10.1851 15.8779 11.1621C15.8779 12.1394 16.6702 12.9323 17.6475 12.9326C18.625 12.9326 19.418 12.1397 19.418 11.1621C19.4176 10.1849 18.6248 9.39258 17.6475 9.39258Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M21.2002 3.66992C23.481 3.67003 25.33 5.51902 25.3301 7.7998V20.2002C25.33 22.481 23.481 24.33 21.2002 24.3301H6.7998C4.51902 24.33 2.67003 22.481 2.66992 20.2002V7.7998C2.67003 5.51902 4.51902 3.67003 6.7998 3.66992H21.2002ZM6.7998 5.33008C5.43582 5.33018 4.33018 6.43582 4.33008 7.7998V16.623L5.93848 15.0146C7.43418 13.5193 9.85889 13.5192 11.3545 15.0146L19.0088 22.6699H21.2002C22.5642 22.6698 23.6698 21.5642 23.6699 20.2002V7.7998C23.6698 6.43582 22.5642 5.33018 21.2002 5.33008H6.7998ZM10.1807 16.1885C9.33333 15.3413 7.95973 15.3414 7.1123 16.1885L4.41797 18.8828L4.33008 18.7949V20.2002C4.33018 21.5642 5.43582 22.6698 6.7998 22.6699H16.6621L10.1807 16.1885Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var o = a("on57"),
      s = a("LPKZ"),
      d = a.n(s),
      c = a("zTeN"),
      u = a("DBCl"),
      m = a("ZIaK"),
      h = a("soyF"),
      f = a("zd8w"),
      p = a("Wf1j"),
      g = a("oyxz"),
      x = a("Wefw"),
      v = a("O0M0"),
      w = a("TUMj"),
      b = a("TjgH"),
      y = a("ygO2"),
      j = a("rmk3"),
      k = a("ZtSy"),
      C = a("HOLv"),
      S = a("Bbed"),
      A = a("RNul"),
      M = a("fGzQ"),
      N = a("JwGC"),
      I = a("T1PX"),
      E = a("AdZa"),
      T = a("Sd8U"),
      B = a("Oj9r"),
      P = a("hZax")
    let F = (0, S._)(
      async () => (await Promise.all([a.e(800306), a.e(377132)]).then(a.bind(a, "Zvr9"))).ChatGptImageLightbox,
    )
    function R(e) {
      let t,
        a,
        i,
        r,
        o,
        s,
        u,
        m = (0, n.c)(20),
        { children: h, onDownloadClick: p } = e,
        g = (0, c.gh)(T.PR),
        x = !(0, c.Ul)(B.Rj) && ("local" === g.value.kind || "chatgpt" === g.value.kind),
        v = !x
      m[0] !== v ? ((t = { disableExposureLog: v }), (m[0] = v), (m[1] = t)) : (t = m[1])
      let w = (0, P.Ou)("2983946247", t),
        [b, y] = (0, f.useState)(null),
        j = b?.gallery
      m[2] !== j ? ((a = (e) => j?.subscribe(e) ?? d()), (m[2] = j), (m[3] = a)) : (a = m[3])
      let k = a
      m[4] !== j ? ((i = () => j?.getSnapshot() ?? null), (m[4] = j), (m[5] = i)) : (i = m[5])
      let C = i,
        S = (0, f.useSyncExternalStore)(k, C, O),
        A = (0, I.I)()
      m[6] !== x || m[7] !== w || m[8] !== A
        ? ((r = function (e) {
            return (
              !!(x && w.get("image_overlay_enabled", !1)) &&
              ((0, E.Vy)({
                source: e.getThumbnail?.(e.index) ?? null,
                reducedMotion: A,
                open: (t) => y({ gallery: e, imageRef: t }),
              }),
              !0)
            )
          }),
          (m[6] = x),
          (m[7] = w),
          (m[8] = A),
          (m[9] = r))
        : (r = m[9])
      let M = r
      return (
        m[10] !== h || m[11] !== M ? ((o = h(M)), (m[10] = h), (m[11] = M), (m[12] = o)) : (o = m[12]),
        m[13] !== b || m[14] !== S || m[15] !== p
          ? ((s =
              null == b || null == S
                ? null
                : (0, l.jsx)(F, {
                    request: { images: S.map(L), selectedIndex: b.gallery.index },
                    imageRef: b.imageRef,
                    getThumbnail: b.gallery.getThumbnail,
                    onClose: () => y(null),
                    onDownloadClick: p,
                  })),
            (m[13] = b),
            (m[14] = S),
            (m[15] = p),
            (m[16] = s))
          : (s = m[16]),
        m[17] !== o || m[18] !== s
          ? ((u = (0, l.jsxs)(l.Fragment, { children: [o, s] })), (m[17] = o), (m[18] = s), (m[19] = u))
          : (u = m[19]),
        u
      )
    }
    function L(e) {
      return { attribution: null, destinationUrl: null, downloadFileName: e.downloadFileName, src: e.src, title: e.alt }
    }
    function O() {
      return null
    }
    var _ = a("OWtl"),
      D = a("kfGJ"),
      z = a("gTKF"),
      U = a("YeiR"),
      V = a("bnxy"),
      W = a("rvFo"),
      H = a("Klk8"),
      Z = a("SRbQ"),
      Q = a("Wj9p"),
      q = a("x0Bm"),
      K = a("Fkn8"),
      G = a("nAYi"),
      $ = a("bqtn"),
      J = a("SGsN"),
      X = a("tFRt"),
      Y = a("GaA7"),
      ee = a("t45s"),
      et = a("aepO"),
      ea = a("S7UD")
    let el = {
      "audio/aac": "aac",
      "audio/flac": "flac",
      "audio/mp4": "m4a",
      "audio/mpeg": "mp3",
      "audio/ogg": "ogg",
      "audio/wav": "wav",
      "audio/webm": "webm",
    }
    function en(e) {
      let t,
        a,
        i,
        r,
        s = (0, n.c)(19),
        { className: d, hostId: c, label: u, onError: m, sourcePath: h, src: f, status: p, title: g } = e
      s[0] !== u || s[1] !== h || s[2] !== g
        ? ((t = (function (e, t, a) {
            if (null != t && t.length > 0) return t
            if (!(0, ea.ax)(e)) {
              let t = (e.split(/[?#]/, 1)[0] ?? e).split(/[\\/]/).pop()
              if (null != t && t.length > 0)
                try {
                  return decodeURIComponent(t)
                } catch {
                  return t
                }
            }
            return a
          })(h, g, u)),
          (s[0] = u),
          (s[1] = h),
          (s[2] = g),
          (s[3] = t))
        : (t = s[3])
      let x = t
      s[4] !== d ? ((a = (0, o.A)("my-3 max-w-lg", d)), (s[4] = d), (s[5] = a)) : (a = s[5])
      let v = "ready" === p ? f : void 0
      return (
        s[6] !== x || s[7] !== c || s[8] !== h || s[9] !== v
          ? ((i = (0, l.jsx)(ei, { displayName: x, hostId: c, sourcePath: h, src: v })),
            (s[6] = x),
            (s[7] = c),
            (s[8] = h),
            (s[9] = v),
            (s[10] = i))
          : (i = s[10]),
        s[11] !== x || s[12] !== u || s[13] !== m || s[14] !== f || s[15] !== p || s[16] !== a || s[17] !== i
          ? ((r = (0, l.jsx)(G.Y, { className: a, label: u, onError: m, src: f, status: p, title: x, actions: i })),
            (s[11] = x),
            (s[12] = u),
            (s[13] = m),
            (s[14] = f),
            (s[15] = p),
            (s[16] = a),
            (s[17] = i),
            (s[18] = r))
          : (r = s[18]),
        r
      )
    }
    function ei(e) {
      let t,
        a,
        i,
        r,
        o,
        s,
        d = (0, n.c)(17),
        { displayName: c, hostId: u, sourcePath: m, src: h } = e,
        f = (0, p.A)()
      d[0] !== c || d[1] !== f
        ? ((t = f.formatMessage(
            {
              id: "markdown.audio.actions",
              defaultMessage: "More options for {filename}",
              description: "Accessible label for inline audio attachment actions",
            },
            { filename: c },
          )),
          (d[0] = c),
          (d[1] = f),
          (d[2] = t))
        : (t = d[2])
      let x = t
      return (
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, l.jsx)(X.A, { "aria-hidden": !0, className: "icon-sm" })), (d[3] = a))
          : (a = d[3]),
        d[4] !== x
          ? ((i = (0, l.jsx)(y.$, { color: "ghostTertiary", size: "icon", uniform: !0, "aria-label": x, children: a })),
            (d[4] = x),
            (d[5] = i))
          : (i = d[5]),
        d[6] !== m
          ? ((r = (0, ea.ax)(m)
              ? null
              : (0, l.jsx)($.ms.Item, {
                  leftIconAsset: q.r,
                  onSelect: () => {
                    ;(0, et.E)(m)
                  },
                  children: (0, l.jsx)(g.A, {
                    id: "markdown.audio.copyPath",
                    defaultMessage: "Copy path",
                    description: "Menu action to copy the path of an inline audio attachment",
                  }),
                })),
            (d[6] = m),
            (d[7] = r))
          : (r = d[7]),
        d[8] !== c || d[9] !== u || d[10] !== m || d[11] !== h
          ? ((o =
              null != h
                ? (0, l.jsx)($.ms.Item, {
                    leftIconAsset: Q.Y,
                    onSelect: () => {
                      ;(async function ({ displayName: e, hostId: t, sourcePath: a, src: l }) {
                        let n = (0, ea.ax)(l) ? await (0, ea.Gp)(l, "audio") : null,
                          i = null == n ? null : el[n.type],
                          r = null == i || /\.[a-z0-9]+$/i.test(e) ? e : `${e}.${i}`
                        {
                          let e = r.replace(/[<>:"/\\|?*]/g, "_")
                          if (null != n) {
                            let t = { stack: [], error: void 0, hasError: !1 }
                            try {
                              let a = (0, Z.mS)(t, await Promise.resolve(Y.appServices.workspaceFiles.saveStream), !1)
                              if (null == a) throw Error("Saving files is unavailable")
                              let l = (0, Z.mS)(t, new K.AX(new ee.B(n)), !1)
                              ;(0, Z.mS)(
                                t,
                                await Y.appServices.workspaceFiles.saveStream?.({ fileName: e, source: l }),
                                !1,
                              )
                            } catch (e) {
                              ;((t.error = e), (t.hasError = !0))
                            } finally {
                              ;(0, Z.hk)(t)
                            }
                          } else {
                            let l = { stack: [], error: void 0, hasError: !1 }
                            try {
                              let n = (0, Z.mS)(l, await Promise.resolve(Y.appServices.workspaceFiles.saveCopy), !1)
                              if (null == n) throw Error("Saving files is unavailable")
                              ;(0, Z.mS)(
                                l,
                                await Y.appServices.workspaceFiles.saveCopy?.({ fileName: e, hostId: t, path: a }),
                                !1,
                              )
                            } catch (e) {
                              ;((l.error = e), (l.hasError = !0))
                            } finally {
                              ;(0, Z.hk)(l)
                            }
                          }
                          return
                        }
                      })({ displayName: c, hostId: u, sourcePath: m, src: h }).catch(er)
                    },
                    children: (0, l.jsx)(g.A, {
                      id: "markdown.audio.saveCopy",
                      defaultMessage: "Save a copy…",
                      description: "Menu action to save a local copy of an inline audio attachment",
                    }),
                  })
                : null),
            (d[8] = c),
            (d[9] = u),
            (d[10] = m),
            (d[11] = h),
            (d[12] = o))
          : (o = d[12]),
        d[13] !== i || d[14] !== r || d[15] !== o
          ? ((s = (0, l.jsxs)($.Ab, { align: "end", contentWidth: "xs", triggerButton: i, children: [r, o] })),
            (d[13] = i),
            (d[14] = r),
            (d[15] = o),
            (d[16] = s))
          : (s = d[16]),
        s
      )
    }
    function er() {
      ;(0, J.RB)().danger(
        (0, l.jsx)(g.A, {
          id: "markdown.audio.saveFailed",
          defaultMessage: "Couldn’t save audio",
          description: "Error shown when saving an inline audio attachment fails",
        }),
        { errorAnalytics: { toastId: "markdown.audio.saveFailed" } },
      )
    }
    var eo = a("SqqO"),
      es = a("JNtf"),
      ed = a("mUDD")
    function ec(e) {
      let t,
        a,
        i,
        r,
        o,
        s,
        d,
        c,
        u,
        m,
        h,
        f,
        p,
        x,
        v = (0, n.c)(29),
        { host: w, onClose: b, onConfirm: j, src: k } = e
      v[0] !== w
        ? ((t = (0, l.jsx)(g.A, {
            id: "markdown.imageConsent.title",
            defaultMessage: "Load image from {host}?",
            description:
              "Title of a dialog asking permission to load an unverified external image. The host value is the website's hostname, including a nonstandard port if present.",
            values: { host: w },
          })),
          (v[0] = w),
          (v[1] = t))
        : (t = v[1])
      let C = t
      v[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, l.jsx)(g.A, {
            id: "markdown.imageConsent.description",
            defaultMessage:
              "Loading contacts this website. It may receive your IP address and information included in the image URL.",
            description:
              "Explains the privacy implications of loading an unverified external image before the user chooses whether to load it.",
          })),
          (v[2] = a))
        : (a = v[2])
      let S = a
      return (
        v[3] !== b
          ? ((i = (e) => {
              e || b()
            }),
            (v[3] = b),
            (v[4] = i))
          : (i = v[4]),
        v[5] !== j
          ? ((r = (e) => {
              ;(e.preventDefault(), j())
            }),
            (v[5] = j),
            (v[6] = r))
          : (r = v[6]),
        v[7] !== C
          ? ((o = (0, l.jsx)(es.L3, { className: "sr-only", children: C })), (v[7] = C), (v[8] = o))
          : (o = v[8]),
        v[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)(es.rr, { className: "sr-only", children: S })), (v[9] = s))
          : (s = v[9]),
        v[10] !== C
          ? ((d = (0, l.jsx)(ed.OO, { children: (0, l.jsx)(ed.c7, { title: C, subtitle: S }) })),
            (v[10] = C),
            (v[11] = d))
          : (d = v[11]),
        v[12] !== k
          ? ((c = (0, l.jsx)(ed.OO, {
              children: (0, l.jsx)("div", {
                className: "rounded-md bg-surface-secondary/92 p-3 text-sm break-all text-secondary",
                children: k,
              }),
            })),
            (v[12] = k),
            (v[13] = c))
          : (c = v[13]),
        v[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, l.jsx)(g.A, {
              id: "markdown.imageConsent.cancel",
              defaultMessage: "Cancel",
              description:
                "Closes the external image permission dialog without loading the image or remembering any permission.",
            })),
            (v[14] = u))
          : (u = v[14]),
        v[15] !== b
          ? ((m = (0, l.jsx)(y.$, { color: "secondary", onClick: b, type: "button", children: u })),
            (v[15] = b),
            (v[16] = m))
          : (m = v[16]),
        v[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, l.jsx)(y.$, {
              type: "submit",
              children: (0, l.jsx)(g.A, {
                id: "markdown.imageConsent.load",
                defaultMessage: "Load image",
                description: "Confirms permission to load this external image once.",
              }),
            })),
            (v[17] = h))
          : (h = v[17]),
        v[18] !== m
          ? ((f = (0, l.jsx)(ed.OO, { children: (0, l.jsxs)(ed.Es, { children: [m, h] }) })), (v[18] = m), (v[19] = f))
          : (f = v[19]),
        v[20] !== f || v[21] !== r || v[22] !== o || v[23] !== d || v[24] !== c
          ? ((p = (0, l.jsxs)(ed.R4, { as: "form", onSubmit: r, children: [o, s, d, c, f] })),
            (v[20] = f),
            (v[21] = r),
            (v[22] = o),
            (v[23] = d),
            (v[24] = c),
            (v[25] = p))
          : (p = v[25]),
        v[26] !== p || v[27] !== i
          ? ((x = (0, l.jsx)(es.lG, { open: !0, onOpenChange: i, size: "compact", children: p })),
            (v[26] = p),
            (v[27] = i),
            (v[28] = x))
          : (x = v[28]),
        x
      )
    }
    var eu = a("ue8o"),
      em = a("zSQm"),
      eh = a("ripK")
    let ef = {
      "video/mp4": "mp4",
      "video/ogg": "ogv",
      "video/quicktime": "mov",
      "video/webm": "webm",
      "video/x-matroska": "mkv",
    }
    var ep = a("Lydu")
    let eg = (0, c.vU)(_.u, ({ params: e, cacheKey: t, isPlayableMedia: a }) => ({
        ...(0, M.VP)(e, t),
        gcTime: a ? 0 : W.D.FIFTEEN_SECONDS,
        staleTime: 1 / 0,
      })),
      ex = (0, S._)(async () => (await a.e(587250).then(a.bind(a, "rHMG"))).MarkdownVideoPlayer, {
        suspendToParent: !0,
        errorFallback: ({ loadErrorFallback: e }) => e,
      }),
      ev = "my-3 block h-auto rounded-md object-contain",
      ew = (0, o.A)(ev, "border border-default"),
      eb = "max-h-[10rem] w-auto max-w-full",
      ey = (0, f.createContext)(null)
    function ej(e) {
      let t,
        a,
        i = (0, n.c)(7),
        { children: r, currentFilePath: o, hostId: s, environmentId: d } = e
      i[0] !== o || i[1] !== d || i[2] !== s
        ? ((t = { currentFilePath: o, hostId: s, environmentId: d }), (i[0] = o), (i[1] = d), (i[2] = s), (i[3] = t))
        : (t = i[3])
      let c = t
      return (
        i[4] !== r || i[5] !== c
          ? ((a = (0, l.jsx)(ey.Provider, { value: c, children: r })), (i[4] = r), (i[5] = c), (i[6] = a))
          : (a = i[6]),
        a
      )
    }
    function ek(e) {
      let t,
        a = (0, n.c)(19),
        {
          allowWide: i,
          alt: r,
          animateEnter: o,
          className: s,
          height: d,
          mediaPresentation: c,
          imagePreviewsRef: u,
          src: m,
          title: h,
          width: f,
        } = e,
        g = void 0 !== i && i,
        x = void 0 !== o && o,
        v = void 0 === c ? "default" : c,
        w = (0, p.A)(),
        b = m ?? ""
      if (0 === b.length) return null
      if (!(0, em.N5)(b) && !(0, eo.Ws)(b)) {
        let e, t
        return (
          a[0] !== r || a[1] !== w
            ? ((e =
                r ||
                w.formatMessage({
                  id: "markdown.imageUnavailable",
                  defaultMessage: "Image unavailable",
                  description:
                    "Accessible label for a markdown image fallback when the image fails to load and no alt text is provided",
                })),
              (a[0] = r),
              (a[1] = w),
              (a[2] = e))
            : (e = a[2]),
          a[3] !== g || a[4] !== v || a[5] !== e || a[6] !== h
            ? ((t = (0, l.jsx)(eI, { allowWide: g, label: e, mediaPresentation: v, title: h })),
              (a[3] = g),
              (a[4] = v),
              (a[5] = e),
              (a[6] = h),
              (a[7] = t))
            : (t = a[7]),
          t
        )
      }
      let y = r ?? ""
      return (
        a[8] !== g ||
        a[9] !== x ||
        a[10] !== s ||
        a[11] !== d ||
        a[12] !== u ||
        a[13] !== v ||
        a[14] !== b ||
        a[15] !== y ||
        a[16] !== h ||
        a[17] !== f
          ? ((t = (0, l.jsx)(eA, {
              allowWide: g,
              alt: y,
              animateEnter: x,
              className: s,
              height: d,
              mediaPresentation: v,
              imagePreviewsRef: u,
              src: b,
              title: h,
              width: f,
            })),
            (a[8] = g),
            (a[9] = x),
            (a[10] = s),
            (a[11] = d),
            (a[12] = u),
            (a[13] = v),
            (a[14] = b),
            (a[15] = y),
            (a[16] = h),
            (a[17] = f),
            (a[18] = t))
          : (t = a[18]),
        t
      )
    }
    function eC(e) {
      let t,
        a,
        i,
        r,
        s,
        d,
        g,
        x,
        y,
        j,
        k = (0, n.c)(79),
        {
          allowPlayableMedia: C,
          allowWide: S,
          alt: A,
          animateEnter: M,
          blockRemoteMedia: N,
          className: I,
          conversationId: E,
          downloadFileName: T,
          hostId: B,
          environmentId: F,
          maxFileBytes: R,
          mediaCacheKey: L,
          imageSizing: O,
          isInsideLink: _,
          mediaPresentation: W,
          videoSizing: Q,
          imagePreviewsRef: q,
          src: K,
          title: G,
        } = e,
        $ = void 0 === C || C,
        J = void 0 !== S && S,
        X = void 0 !== M && M,
        ee = void 0 === O ? "thumbnail" : O,
        et = (0, f.useContext)(v.c),
        el = (0, p.A)(),
        ei = (0, f.useContext)(ey),
        er = (0, w.Rn)(),
        [es, ed] = (0, f.useState)(null),
        [em, ep] = (0, f.useState)(null),
        ev = K ?? ""
      k[0] !== ev ? ((t = (0, eo.sJ)(ev)), (k[0] = ev), (k[1] = t)) : (t = k[1])
      let ew = t,
        eb = "audio" === ew,
        ej = "image" === ew,
        ek = null != ei ? (0, H.zj)(ei.currentFilePath, ev) : null,
        eC = ek?.path ?? ev,
        eA = ei?.hostId ?? B
      k[2] !== E || k[3] !== eA
        ? ((a = eA === u.iwv && null != E ? { kind: "app-server", conversationId: (0, u.JXB)(E) } : null),
          (k[2] = E),
          (k[3] = eA),
          (k[4] = a))
        : (a = k[4])
      let eM = (0, c._U)(z.threadExecutorTargetByThread$, a),
        eN = ei?.environmentId ?? F ?? eM?.environmentId,
        eE = null != ek && (0, m.cx)(eC) ? (0, m.kq)(eC) : (0, h.cQ)(eC),
        eT = ev.length > 0,
        eB = (0, eo.EL)(eC),
        eP = "video" === ew,
        eF = eb || eP,
        eR = eC.startsWith("//"),
        eL = null != eE && !eR,
        eO = null != et && !et.isLoading && "chatgpt" === et.authMethod,
        e_ = void 0 !== N && N && !(ej && er?.renderRestrictedImages),
        eD = eO && !e_ && null == eB && eT && ej && !eL && (0, eo.Ws)(eC),
        ez = (0, P.Zj)(eD && "363701231"),
        eU = (0, eu.kU)(eC, eD),
        eV = ez && eU.canRequestConsent && !(void 0 !== _ && _) ? URL.parse(eC) : null,
        eW = eV?.protocol === "https:",
        eH = JSON.stringify([et?.authMethod, et?.accountId, et?.userId, eA, E, eN, eC]),
        eZ = em?.key === eH && em.auth === et,
        eQ = eW && eZ && em.approved,
        eq = null == eB && eT && !eL && (0, eo.M0)(eC) && (e_ || (null == eU.safeUrl && !eU.isPending && !eQ)),
        eK = eL && eF && !0,
        eG = eK && eA === D.fI ? (0, U.B)(eE) : null,
        e$ = eL && ($ || !eF) && (!eF || (eK && null == eG))
      ;(null != L && (i = ["markdown-media", ...(Array.isArray(L) ? L : [L])]),
        null != eN && (i = [eA, eN, ...(i ?? [])]),
        k[5] !== e$ ? ((r = { enabled: e$ }), (k[5] = e$), (k[6] = r)) : (r = k[6]))
      let { data: eJ, isLoading: eX } = (0, c._U)(
        eg,
        {
          params: {
            path: e$ ? (eE ?? eC) : "",
            conversationId: E,
            hostId: eA,
            environmentId: eN ?? void 0,
            maxBytes: R,
          },
          cacheKey: i,
          isPlayableMedia: eF,
        },
        r,
      )
      if (!eT) return null
      if (null != eB)
        return (0, l.jsx)(b.E, {
          className: (0, o.A)(
            (0, eo.KO)(eB),
            "size-6 justify-center rounded-md p-0 align-bottom text-sm leading-none font-normal tabular-nums whitespace-nowrap uppercase",
          ),
          children: eB,
        })
      let eY = eJ?.contentsBase64 ?? null,
        e0 =
          eU.safeUrl ??
          eG ??
          (e$ && null != eY ? (0, eo.X9)({ contentsBase64: eY, mimeType: eJ?.mimeType ?? null, path: eE ?? eC }) : eC),
        e1 = A ?? "",
        e2 = eL && ej,
        e6 = eL && eF && !eK,
        e4 = (!$ && eF) || eq || (e$ && null == eY && !eX) || es === e0
      k[7] !== el || k[8] !== e1
        ? ((s =
            e1 ||
            el.formatMessage({
              id: "markdown.videoPlayer",
              defaultMessage: "Video",
              description: "Accessible label for a markdown video when no alt text is provided",
            })),
          (k[7] = el),
          (k[8] = e1),
          (k[9] = s))
        : (s = k[9])
      let e3 = s
      k[10] !== el || k[11] !== e1
        ? ((d =
            e1 ||
            el.formatMessage({
              id: "markdown.audioPlayer",
              defaultMessage: "Audio",
              description: "Accessible label for markdown audio when no alt text is provided",
            })),
          (k[10] = el),
          (k[11] = e1),
          (k[12] = d))
        : (d = k[12])
      let e5 = d
      k[13] !== el || k[14] !== e1
        ? ((g =
            e1 ||
            el.formatMessage({
              id: "markdown.videoUnavailable",
              defaultMessage: "Video unavailable",
              description:
                "Accessible label for a markdown video fallback when the video fails to load and no alt text is provided",
            })),
          (k[13] = el),
          (k[14] = e1),
          (k[15] = g))
        : (g = k[15])
      let e7 = g
      k[16] !== el || k[17] !== e1
        ? ((x =
            e1 ||
            el.formatMessage({
              id: "markdown.imageUnavailable",
              defaultMessage: "Image unavailable",
              description:
                "Accessible label for a markdown image fallback when the image fails to load and no alt text is provided",
            })),
          (k[16] = el),
          (k[17] = e1),
          (k[18] = x))
        : (x = k[18])
      let e8 = x
      k[19] !== el || k[20] !== e1
        ? ((y =
            e1 ||
            el.formatMessage({
              id: "markdown.imageLoading",
              defaultMessage: "Image loading",
              description:
                "Accessible label for a markdown image placeholder while image bytes are loading and no alt text is provided",
            })),
          (k[19] = el),
          (k[20] = e1),
          (k[21] = y))
        : (y = k[21])
      let e9 = y
      if ((e$ && eX && null == eY) || eU.isPending) {
        let e
        if (eb) {
          let e
          return (
            k[22] !== e5 || k[23] !== I || k[24] !== eA || k[25] !== eC || k[26] !== G
              ? ((e = (0, l.jsx)(en, {
                  className: I,
                  hostId: eA,
                  label: e5,
                  sourcePath: eC,
                  status: "loading",
                  title: G,
                })),
                (k[22] = e5),
                (k[23] = I),
                (k[24] = eA),
                (k[25] = eC),
                (k[26] = G),
                (k[27] = e))
              : (e = k[27]),
            e
          )
        }
        if ("scrollable" !== W) return null
        let t = eP ? e3 : e9
        return (
          k[28] !== J || k[29] !== W || k[30] !== e2 || k[31] !== t || k[32] !== G
            ? ((e = (0, l.jsx)(eI, {
                allowWide: J,
                isLoading: !0,
                label: t,
                mediaPresentation: W,
                title: G,
                useDefaultImageSize: e2,
              })),
              (k[28] = J),
              (k[29] = W),
              (k[30] = e2),
              (k[31] = t),
              (k[32] = G),
              (k[33] = e))
            : (e = k[33]),
          e
        )
      }
      if (e6 || e4) {
        let e, t, a
        if (eb) {
          let e
          return (
            k[34] !== e5 || k[35] !== I || k[36] !== eA || k[37] !== eC || k[38] !== G
              ? ((e = (0, l.jsx)(en, {
                  className: I,
                  hostId: eA,
                  label: e5,
                  sourcePath: eC,
                  status: "unavailable",
                  title: G,
                })),
                (k[34] = e5),
                (k[35] = I),
                (k[36] = eA),
                (k[37] = eC),
                (k[38] = G),
                (k[39] = e))
              : (e = k[39]),
            e
          )
        }
        let n = eP ? e7 : e8
        ;(k[40] !== et || k[41] !== eW || k[42] !== eH
          ? ((e = eW
              ? () => {
                  ep({ auth: et, key: eH, approved: !1 })
                }
              : void 0),
            (k[40] = et),
            (k[41] = eW),
            (k[42] = eH),
            (k[43] = e))
          : (e = k[43]),
          k[44] !== J || k[45] !== W || k[46] !== e2 || k[47] !== n || k[48] !== e || k[49] !== G
            ? ((t = (0, l.jsx)(eI, {
                allowWide: J,
                label: n,
                mediaPresentation: W,
                onLoadImage: e,
                title: G,
                useDefaultImageSize: e2,
              })),
              (k[44] = J),
              (k[45] = W),
              (k[46] = e2),
              (k[47] = n),
              (k[48] = e),
              (k[49] = G),
              (k[50] = t))
            : (t = k[50]))
        let i =
          eW && eZ && !em.approved
            ? (0, l.jsx)(ec, {
                host: eV.host,
                onClose: () => ep(null),
                onConfirm: () => {
                  ep({ auth: et, key: eH, approved: !0 })
                },
                src: eC,
              })
            : null
        return (
          k[51] !== t || k[52] !== i
            ? ((a = (0, l.jsxs)(l.Fragment, { children: [t, i] })), (k[51] = t), (k[52] = i), (k[53] = a))
            : (a = k[53]),
          a
        )
      }
      if (eb)
        return (0, l.jsx)(en, {
          className: I,
          hostId: eA,
          label: e5,
          onError: () => {
            ed(e0)
          },
          sourcePath: eC,
          src: e0,
          status: "ready",
          title: G,
        })
      if (eP) {
        let e, t
        return (
          k[54] !== J || k[55] !== W || k[56] !== G || k[57] !== e3
            ? ((e = (0, l.jsx)(eI, { allowWide: J, isLoading: !0, label: e3, mediaPresentation: W, title: G })),
              (k[54] = J),
              (k[55] = W),
              (k[56] = G),
              (k[57] = e3),
              (k[58] = e))
            : (e = k[58]),
          k[59] !== J || k[60] !== W || k[61] !== G || k[62] !== e7
            ? ((t = (0, l.jsx)(eI, { allowWide: J, label: e7, mediaPresentation: W, title: G })),
              (k[59] = J),
              (k[60] = W),
              (k[61] = G),
              (k[62] = e7),
              (k[63] = t))
            : (t = k[63]),
          (0, l.jsx)(f.Suspense, {
            fallback: e,
            children: (0, l.jsx)(
              ex,
              {
                className: I,
                allowWide: J,
                label: e3,
                loadErrorFallback: t,
                sizing: void 0 === Q ? "content" : Q,
                src: e0,
                title: G,
                onError: () => {
                  ed(e0)
                },
                onSaveCopy: () =>
                  (async function ({ hostId: e, sourcePath: t, src: a }) {
                    let l = { stack: [], error: void 0, hasError: !1 }
                    try {
                      let n,
                        i = (0, h.cQ)(t),
                        r = Y.appServices?.workspaceFiles,
                        o = (0, Z.mS)(l, await Promise.resolve(r?.saveCopy), !1)
                      if (null != i && !(0, ea.ax)(a) && null != o) {
                        let t = { stack: [], error: void 0, hasError: !1 }
                        try {
                          ;(0, Z.mS)(t, await r?.saveCopy?.({ hostId: e, path: i }), !1)
                          return
                        } catch (e) {
                          ;((t.error = e), (t.hasError = !0))
                        } finally {
                          ;(0, Z.hk)(t)
                        }
                      }
                      if ((0, ea.ax)(a)) n = await (0, ea.Gp)(a, "video")
                      else {
                        let e = await fetch(a)
                        if (!e.ok) throw Error("Video file contents are unavailable")
                        n = await e.blob()
                      }
                      let s = ef[n.type],
                        d = null != i ? (0, V.Q0)(i) : `video${null == s ? "" : `.${s}`}`
                      if (null != o) {
                        let e = { stack: [], error: void 0, hasError: !1 }
                        try {
                          ;(0, Z.mS)(
                            e,
                            await r?.saveCopy?.({ bytes: new Uint8Array(await n.arrayBuffer()), fileName: d }),
                            !1,
                          )
                          return
                        } catch (t) {
                          ;((e.error = t), (e.hasError = !0))
                        } finally {
                          ;(0, Z.hk)(e)
                        }
                      }
                      ;(0, eh.W)(n, d)
                    } catch (e) {
                      ;((l.error = e), (l.hasError = !0))
                    } finally {
                      ;(0, Z.hk)(l)
                    }
                  })({ hostId: eA, sourcePath: eC, src: e0 }),
              },
              e0,
            ),
          })
        )
      }
      let te = T ?? (null == eE ? void 0 : (0, V.Q0)(eE)),
        tt = eA === D.fI ? (eE ?? e0) : e0
      return (
        k[64] !== eS ||
        k[65] !== J ||
        k[66] !== X ||
        k[67] !== I ||
        k[68] !== q ||
        k[69] !== ee ||
        k[70] !== e1 ||
        k[71] !== eA ||
        k[72] !== W ||
        k[73] !== e0 ||
        k[74] !== e2 ||
        k[75] !== te ||
        k[76] !== tt ||
        k[77] !== G
          ? ((j = (0, l.jsx)(eS, {
              allowWide: J,
              alt: e1,
              animateEnter: X,
              className: I,
              hostId: eA,
              imageSizing: ee,
              mediaPresentation: W,
              imagePreviewsRef: q,
              sourceFilename: te,
              sourceSrc: tt,
              src: e0,
              title: G,
              useDefaultImageSize: e2,
            })),
            (k[64] = eS),
            (k[65] = J),
            (k[66] = X),
            (k[67] = I),
            (k[68] = q),
            (k[69] = ee),
            (k[70] = e1),
            (k[71] = eA),
            (k[72] = W),
            (k[73] = e0),
            (k[74] = e2),
            (k[75] = te),
            (k[76] = tt),
            (k[77] = G),
            (k[78] = j))
          : (j = k[78]),
        j
      )
    }
    function eS(e) {
      let t,
        r,
        o,
        s,
        d,
        u,
        m,
        h = (0, n.c)(19)
      h[0] !== e
        ? (({ hostId: t, sourceFilename: o, sourceSrc: s, ...r } = e),
          (h[0] = e),
          (h[1] = t),
          (h[2] = r),
          (h[3] = o),
          (h[4] = s))
        : ((t = h[1]), (r = h[2]), (o = h[3]), (s = h[4]))
      let f = (0, c.gh)(T.PR),
        g = (0, p.A)(),
        v = (0, w.Rn)()
      h[5] !== f
        ? ((d = () => {
            ;(0, x.l)(f, {
              action: i.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE,
              surface: i.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_IMAGE_PREVIEW,
            })
          }),
          (h[5] = f),
          (h[6] = d))
        : (d = h[6])
      let b = d
      return (
        h[7] !== v ||
        h[8] !== t ||
        h[9] !== g ||
        h[10] !== b ||
        h[11] !== r ||
        h[12] !== f ||
        h[13] !== o ||
        h[14] !== s
          ? ((u = (e) =>
              (0, l.jsx)(eA, {
                ...r,
                downloadFileName: o,
                onOpenImagePreview: e,
                getImageContextMenuItems:
                  "other" === f.value.kind && null == v
                    ? void 0
                    : async () =>
                        (await a.e(259110).then(a.bind(a, "YeQK"))).getGeneratedImageContextMenuItems(f, {
                          chatGptConversationId: v?.conversationId,
                          displaySrc: r.src,
                          hostId: t,
                          image: { kind: "generic", src: s, alt: r.alt, filename: o },
                          intl: g,
                        }),
                onDownloadClick: b,
              })),
            (h[7] = v),
            (h[8] = t),
            (h[9] = g),
            (h[10] = b),
            (h[11] = r),
            (h[12] = f),
            (h[13] = o),
            (h[14] = s),
            (h[15] = u))
          : (u = h[15]),
        h[16] !== b || h[17] !== u
          ? ((m = (0, l.jsx)(R, { onDownloadClick: b, children: u })), (h[16] = b), (h[17] = u), (h[18] = m))
          : (m = h[18]),
        m
      )
    }
    function eA(e) {
      let t,
        a,
        i,
        r,
        s,
        c,
        u,
        m,
        h,
        g,
        x,
        v,
        w,
        b,
        y,
        k,
        C,
        S,
        A,
        M,
        I,
        E,
        T,
        B,
        P = (0, n.c)(114),
        {
          allowWide: F,
          alt: R,
          animateEnter: L,
          className: O,
          downloadFileName: _,
          height: D,
          getImageContextMenuItems: z,
          imageSizing: U,
          mediaPresentation: V,
          imagePreviewsRef: W,
          src: H,
          title: Z,
          useDefaultImageSize: Q,
          onDownloadClick: q,
          onOpenImagePreview: K,
          width: G,
        } = e,
        $ = void 0 === U ? "thumbnail" : U,
        J = void 0 !== Q && Q,
        X = (0, p.A)(),
        Y = (0, f.useRef)(null),
        [ee, et] = (0, f.useState)(null),
        [ea, el] = (0, f.useState)(!1),
        [en, ei] = (0, f.useState)(null),
        er = ea ? en : null
      P[0] !== er ? ((t = (e) => er?.subscribe(e) ?? d()), (P[0] = er), (P[1] = t)) : (t = P[1])
      let es = t
      P[2] !== er ? ((a = () => er?.getSnapshot() ?? null), (P[2] = er), (P[3] = a)) : (a = P[3])
      let ed = a,
        ec = (0, f.useSyncExternalStore)(es, ed, eN),
        [eu, em] = (0, f.useState)(null)
      P[4] !== R || P[5] !== X
        ? ((i =
            R ||
            X.formatMessage({
              id: "markdown.imagePreviewButton",
              defaultMessage: "Open image preview",
              description: "Accessible label for a markdown image button when no alt text is provided",
            })),
          (P[4] = R),
          (P[5] = X),
          (P[6] = i))
        : (i = P[6])
      let eh = i,
        ef = null == en ? null : ec?.[en.index],
        eg = ef?.src ?? H,
        ex = ef?.alt ?? R,
        ev = null != en && en.index > 0 ? en.index - 1 : null,
        ey = null != en && null != ec && en.index + 1 < ec.length ? en.index + 1 : null
      P[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (e) => {
            ei((t) => (null == t ? null : { ...t, index: e }))
          }),
          (P[7] = r))
        : (r = P[7])
      let ej = r
      if (eu === H) {
        let e,
          t,
          a = (0, eo.Ws)(H) ? H : void 0
        return (
          P[8] !== R || P[9] !== X
            ? ((e =
                R ||
                X.formatMessage({
                  id: "markdown.imageUnavailable",
                  defaultMessage: "Image unavailable",
                  description:
                    "Accessible label for a markdown image fallback when the image fails to load and no alt text is provided",
                })),
              (P[8] = R),
              (P[9] = X),
              (P[10] = e))
            : (e = P[10]),
          P[11] !== F || P[12] !== V || P[13] !== a || P[14] !== e || P[15] !== Z || P[16] !== J
            ? ((t = (0, l.jsx)(eI, {
                allowWide: F,
                href: a,
                label: e,
                mediaPresentation: V,
                title: Z,
                useDefaultImageSize: J,
              })),
              (P[11] = F),
              (P[12] = V),
              (P[13] = a),
              (P[14] = e),
              (P[15] = Z),
              (P[16] = J),
              (P[17] = t))
            : (t = P[17]),
          t
        )
      }
      if (
        P[18] !== F ||
        P[19] !== R ||
        P[20] !== L ||
        P[21] !== O ||
        P[22] !== _ ||
        P[23] !== D ||
        P[24] !== W ||
        P[25] !== $ ||
        P[26] !== ea ||
        P[27] !== V ||
        P[28] !== ey ||
        P[29] !== q ||
        P[30] !== ee ||
        P[31] !== ex ||
        P[32] !== ef ||
        P[33] !== ec ||
        P[34] !== eg ||
        P[35] !== ev ||
        P[36] !== H ||
        P[37] !== Z ||
        P[38] !== J ||
        P[39] !== G
      ) {
        let e, t, a, n, i, r, d
        ;("scrollable" === V
          ? ((e = "max-h-none !max-w-none w-auto"),
            (t = "block max-h-[min(70vh,40rem)] max-w-full overflow-auto rounded-md"))
          : "conversation" === $
            ? ((e = "max-h-none w-full max-w-full"),
              (t = (0, o.A)("block w-full", ee === H ? "max-w-100" : "max-w-120")))
            : ((e = F && J ? eb : (0, o.A)("max-h-[12.5rem] max-w-[12.5rem]", "h-auto w-auto")),
              (t = F ? "inline-block max-w-full" : "inline-block max-w-[min(100%,44rem)]")),
          P[56] !== R || P[57] !== _ || P[58] !== W || P[59] !== H
            ? ((a = (e) => {
                if (((Y.current = e), null != e))
                  return (
                    W?.current.images.set(e, { src: H, alt: R, downloadFileName: _ }),
                    () => {
                      ;((Y.current = null),
                        W?.current.images.delete(e),
                        queueMicrotask(() => {
                          W?.current.listeners.forEach(eM)
                        }))
                    }
                  )
              }),
              (P[56] = R),
              (P[57] = _),
              (P[58] = W),
              (P[59] = H),
              (P[60] = a))
            : (a = P[60]))
        let f = (0, o.A)(ew, e, L && ep.A.ImageEnter, O)
        ;(P[61] !== D || P[62] !== G
          ? ((n =
              "number" == typeof G && "number" == typeof D
                ? { height: D > G ? D : void 0, width: G >= D ? G : void 0 }
                : void 0),
            (P[61] = D),
            (P[62] = G),
            (P[63] = n))
          : (n = P[63]),
          P[64] !== $ || P[65] !== H
            ? ((i = (e) => {
                if ("conversation" === $) {
                  let { naturalWidth: t, naturalHeight: a } = e.currentTarget
                  et(a > t ? H : null)
                }
              }),
              (P[64] = $),
              (P[65] = H),
              (P[66] = i))
            : (i = P[66]),
          P[67] !== H
            ? ((r = () => {
                em(H)
              }),
              (P[67] = H),
              (P[68] = r))
            : (r = P[68]),
          P[69] !== R ||
          P[70] !== D ||
          P[71] !== H ||
          P[72] !== a ||
          P[73] !== f ||
          P[74] !== n ||
          P[75] !== i ||
          P[76] !== r ||
          P[77] !== Z ||
          P[78] !== G
            ? ((d = (0, l.jsx)("img", {
                ref: a,
                className: f,
                src: H,
                alt: R,
                height: D,
                style: n,
                title: Z,
                width: G,
                loading: "lazy",
                referrerPolicy: "no-referrer",
                onLoad: i,
                onError: r,
              })),
              (P[69] = R),
              (P[70] = D),
              (P[71] = H),
              (P[72] = a),
              (P[73] = f),
              (P[74] = n),
              (P[75] = i),
              (P[76] = r),
              (P[77] = Z),
              (P[78] = G),
              (P[79] = d))
            : (d = P[79]),
          (c = d),
          (s = N.C),
          (u = eg),
          (m = ex),
          (h = "no-referrer"),
          (g = ea && null != ec),
          (x = el),
          (v = ex),
          (w = eg),
          (b = null == ef ? _ : ef.downloadFileName),
          (y = q),
          P[80] !== ev
            ? ((k =
                null == ev
                  ? void 0
                  : () => {
                      ej(ev)
                    }),
              (P[80] = ev),
              (P[81] = k))
            : (k = P[81]),
          P[82] !== ey
            ? ((C =
                null == ey
                  ? void 0
                  : () => {
                      ej(ey)
                    }),
              (P[82] = ey),
              (P[83] = C))
            : (C = P[83]),
          (S = "button"),
          (A = "original"),
          (M = (0, o.A)("cursor-zoom-in border-0 bg-transparent p-0 align-top", t)),
          (P[18] = F),
          (P[19] = R),
          (P[20] = L),
          (P[21] = O),
          (P[22] = _),
          (P[23] = D),
          (P[24] = W),
          (P[25] = $),
          (P[26] = ea),
          (P[27] = V),
          (P[28] = ey),
          (P[29] = q),
          (P[30] = ee),
          (P[31] = ex),
          (P[32] = ef),
          (P[33] = ec),
          (P[34] = eg),
          (P[35] = ev),
          (P[36] = H),
          (P[37] = Z),
          (P[38] = J),
          (P[39] = G),
          (P[40] = s),
          (P[41] = c),
          (P[42] = u),
          (P[43] = m),
          (P[44] = h),
          (P[45] = g),
          (P[46] = x),
          (P[47] = v),
          (P[48] = w),
          (P[49] = b),
          (P[50] = y),
          (P[51] = k),
          (P[52] = C),
          (P[53] = S),
          (P[54] = A),
          (P[55] = M))
      } else
        ((s = P[40]),
          (c = P[41]),
          (u = P[42]),
          (m = P[43]),
          (h = P[44]),
          (g = P[45]),
          (x = P[46]),
          (v = P[47]),
          (w = P[48]),
          (b = P[49]),
          (y = P[50]),
          (k = P[51]),
          (C = P[52]),
          (S = P[53]),
          (A = P[54]),
          (M = P[55]))
      return (
        P[84] !== R || P[85] !== _ || P[86] !== W || P[87] !== K || P[88] !== H
          ? ((I = (e) => {
              if (e.target instanceof Node && !e.currentTarget.contains(e.target)) return void e.preventDefault()
              let t = (function ({ fallbackItem: e, imagePreviewsRef: t, selectedImage: a }) {
                let l = t?.current,
                  n = () =>
                    Array.from(l?.images ?? [])
                      .filter(([e]) => e.isConnected)
                      .sort(([e], [t]) => (e.compareDocumentPosition(t) === Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)),
                  i = n(),
                  r = i.findIndex(([e]) => e === a)
                if (-1 === r) {
                  let t = [{ ...e, src: a?.currentSrc || a?.src || e.src }]
                  return { index: 0, getThumbnail: () => a, getSnapshot: () => t, subscribe: () => d() }
                }
                let o = i.map(([e, t]) => ({ ...t, src: e.currentSrc || e.src }))
                return {
                  index: r,
                  getThumbnail: (e) => i[e]?.[0] ?? null,
                  getSnapshot: () => {
                    if (null == o) return null
                    let e = o,
                      t = n()
                    return t.length !== i.length ||
                      t.some(
                        ([t, a], l) => t !== i[l][0] || a.src !== i[l][1].src || (t.currentSrc || t.src) !== e[l].src,
                      )
                      ? ((o = null), null)
                      : (t.some(([, t], a) => t.alt !== e[a].alt || t.downloadFileName !== e[a].downloadFileName) &&
                          (o = t.map(([, t], a) => ({ ...t, src: e[a].src }))),
                        o)
                  },
                  subscribe: (e) => (l?.listeners.add(e), () => l?.listeners.delete(e)),
                }
              })({
                fallbackItem: { src: H, alt: R, downloadFileName: _ },
                imagePreviewsRef: W,
                selectedImage: Y.current,
              })
              K?.(t) ? (e.preventDefault(), e.currentTarget.focus()) : ei(t)
            }),
            (P[84] = R),
            (P[85] = _),
            (P[86] = W),
            (P[87] = K),
            (P[88] = H),
            (P[89] = I))
          : (I = P[89]),
        P[90] !== z || P[91] !== c
          ? ((E = null == z ? c : (0, l.jsx)(j.t, { getItems: z, children: c })), (P[90] = z), (P[91] = c), (P[92] = E))
          : (E = P[92]),
        P[93] !== eh || P[94] !== I || P[95] !== E || P[96] !== S || P[97] !== A || P[98] !== M
          ? ((T = (0, l.jsx)("button", {
              type: S,
              "data-message-image": A,
              className: M,
              "aria-label": eh,
              onClick: I,
              children: E,
            })),
            (P[93] = eh),
            (P[94] = I),
            (P[95] = E),
            (P[96] = S),
            (P[97] = A),
            (P[98] = M),
            (P[99] = T))
          : (T = P[99]),
        P[100] !== s ||
        P[101] !== u ||
        P[102] !== m ||
        P[103] !== h ||
        P[104] !== g ||
        P[105] !== x ||
        P[106] !== v ||
        P[107] !== w ||
        P[108] !== b ||
        P[109] !== y ||
        P[110] !== k ||
        P[111] !== C ||
        P[112] !== T
          ? ((B = (0, l.jsx)(s, {
              src: u,
              alt: m,
              imageReferrerPolicy: h,
              open: g,
              onOpenChange: x,
              caption: v,
              downloadSrc: w,
              downloadFileName: b,
              onDownloadClick: y,
              onPreviousImage: k,
              onNextImage: C,
              triggerContent: T,
            })),
            (P[100] = s),
            (P[101] = u),
            (P[102] = m),
            (P[103] = h),
            (P[104] = g),
            (P[105] = x),
            (P[106] = v),
            (P[107] = w),
            (P[108] = b),
            (P[109] = y),
            (P[110] = k),
            (P[111] = C),
            (P[112] = T),
            (P[113] = B))
          : (B = P[113]),
        B
      )
    }
    function eM(e) {
      return e()
    }
    function eN() {
      return null
    }
    function eI(e) {
      let t,
        a,
        i,
        s = (0, n.c)(28),
        {
          allowWide: d,
          href: c,
          isLoading: u,
          label: m,
          mediaPresentation: h,
          onLoadImage: f,
          title: p,
          useDefaultImageSize: x,
        } = e,
        v = void 0 !== u && u,
        w =
          "scrollable" === h
            ? "w-full min-h-40 max-h-[min(70vh,40rem)]"
            : d
              ? void 0 !== x && x
                ? eb
                : "max-h-[var(--markdown-wide-block-max-height)] w-fit max-w-full"
              : "max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]"
      s[0] !== w
        ? ((t = (0, o.A)(
            ev,
            w,
            "bg-primary-ghost-hover text-codex-description inline-flex min-h-24 min-w-24 max-w-full cursor-interaction items-center justify-center border-0 p-0 disabled:cursor-default",
          )),
          (s[0] = w),
          (s[1] = t))
        : (t = s[1])
      let b = t
      s[2] !== v
        ? ((a = v ? (0, l.jsx)(A.y, { className: "icon-md" }) : (0, l.jsx)(C.I, { "aria-hidden": !1, asset: r })),
          (s[2] = v),
          (s[3] = a))
        : (a = s[3])
      let j = a
      if (null != f) {
        let e, t, a, n, i, o, d
        return (
          s[4] !== m
            ? ((e = (0, l.jsx)("span", { className: "sr-only", children: m })), (s[4] = m), (s[5] = e))
            : (e = s[5]),
          s[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)(C.I, { asset: r })),
              (a = (0, l.jsx)("span", {
                children: (0, l.jsx)(g.A, {
                  id: "markdown.imageUnverified",
                  defaultMessage: "Unverified image",
                  description:
                    "Explains why an external Markdown image was not loaded. The URL safety check did not verify the link or could not complete. This does not mean the image was found to be malicious.",
                }),
              })),
              (s[6] = t),
              (s[7] = a))
            : ((t = s[6]), (a = s[7])),
          s[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)(g.A, {
                id: "markdown.imageUnverified.load",
                defaultMessage: "Load image",
                description:
                  "Action on an unverified external Markdown image. Opens a privacy confirmation dialog before loading the original image inline.",
              })),
              (s[8] = n))
            : (n = s[8]),
          s[9] !== f
            ? ((i = (0, l.jsx)(y.$, {
                "aria-haspopup": "dialog",
                color: "secondary",
                onClick: f,
                size: "compact",
                type: "button",
                children: n,
              })),
              (s[9] = f),
              (s[10] = i))
            : (i = s[10]),
          s[11] !== i || s[12] !== e
            ? ((o = (0, l.jsxs)("span", {
                className: "flex flex-col items-center gap-2 p-3 text-center text-sm select-none",
                "data-markdown-copy": "exclude",
                children: [e, t, a, i],
              })),
              (s[11] = i),
              (s[12] = e),
              (s[13] = o))
            : (o = s[13]),
          (j = o),
          s[14] !== b || s[15] !== j
            ? ((d = (0, l.jsx)("span", { className: b, children: j })), (s[14] = b), (s[15] = j), (s[16] = d))
            : (d = s[16]),
          d
        )
      }
      if (null != c) {
        let e
        return (
          s[17] !== b || s[18] !== j || s[19] !== c || s[20] !== m || s[21] !== p
            ? ((e = (0, l.jsx)(k.G, {
                className: b,
                "aria-label": m,
                href: c,
                initiator: "markdown_link_click",
                title: p,
                children: j,
              })),
              (s[17] = b),
              (s[18] = j),
              (s[19] = c),
              (s[20] = m),
              (s[21] = p),
              (s[22] = e))
            : (e = s[22]),
          e
        )
      }
      return (
        s[23] !== b || s[24] !== j || s[25] !== m || s[26] !== p
          ? ((i = (0, l.jsx)("button", {
              type: "button",
              disabled: !0,
              className: b,
              "aria-label": m,
              title: p,
              children: j,
            })),
            (s[23] = b),
            (s[24] = j),
            (s[25] = m),
            (s[26] = p),
            (s[27] = i))
          : (i = s[27]),
        i
      )
    }
  },
  ue8o(e, t, a) {
    var l = a("QosV"),
      n = a("D7Ms"),
      i = a("T0Rc"),
      r = a("zd8w"),
      o = a("RZi8"),
      s = a("ciEf")
    let d = new Set(["openai.com", "chatgpt.com", "chat.com"])
    function c(e, t) {
      if (null == e) return !1
      if (t?.includes(e)) return !0
      try {
        let t = (0, o.qg)(new URL(e).hostname).domain
        return null != t && d.has(t)
      } catch {
        return !1
      }
    }
    function u(e, t, a) {
      let l = t ? e : void 0
      return {
        queryKey: ["markdown-safe-url", l],
        queryFn: () => {
          if (null == l) throw Error("Unexpected missing safe markdown URL input")
          return (0, s.p)(l)
        },
        enabled: t && null != e && !c(e, a),
        retry: !1,
        staleTime: 1 / 0,
      }
    }
    function m(e, t) {
      let a,
        n,
        i = (0, l.c)(4),
        [o, s] = (0, r.useState)(void 0)
      return (
        i[0] !== t || i[1] !== e
          ? ((a = () => {
              let a = window.setTimeout(() => {
                s(e)
              }, t)
              return () => {
                window.clearTimeout(a)
              }
            }),
            (n = [t, e]),
            (i[0] = t),
            (i[1] = e),
            (i[2] = a),
            (i[3] = n))
          : ((a = i[2]), (n = i[3])),
        (0, r.useEffect)(a, n),
        o === e ? e : void 0
      )
    }
    a.d(
      t,
      {},
      {
        gl: c,
        kU: function (e, t) {
          let a,
            r,
            o,
            d,
            c = (0, l.c)(10),
            u = m(t ? e : void 0, 500)
          ;(c[0] !== u
            ? ((a = ["markdown-image-url-safety", u]),
              (r = null == u ? n.hT : () => (0, s.U)(u)),
              (c[0] = u),
              (c[1] = a),
              (c[2] = r))
            : ((a = c[1]), (r = c[2])),
            c[3] !== a || c[4] !== r
              ? ((o = { queryKey: a, queryFn: r, refetchOnMount: !0, refetchOnReconnect: !0, retry: !1, staleTime: 0 }),
                (c[3] = a),
                (c[4] = r),
                (c[5] = o))
              : (o = c[5]))
          let { data: h, fetchStatus: f, isSuccess: p } = (0, i.I)(o),
            g = t && (null == u || "idle" !== f),
            x = t && !g && p ? h : null,
            v = "safe" === x ? u : void 0,
            w = "unsafe" === x
          return (
            c[6] !== g || c[7] !== v || c[8] !== w
              ? ((d = { safeUrl: v, isPending: g, canRequestConsent: w }),
                (c[6] = g),
                (c[7] = v),
                (c[8] = w),
                (c[9] = d))
              : (d = c[9]),
            d
          )
        },
        lo: function (e, t, a, n) {
          let r,
            o,
            s,
            d,
            h = (0, l.c)(15),
            f = void 0 !== a && a,
            p = m(e, 500)
          h[0] !== n || h[1] !== e
            ? ((r = null != e && n?.includes(e) === !0), (h[0] = n), (h[1] = e), (h[2] = r))
            : (r = h[2])
          let g = r,
            x = f || g ? e : p
          h[3] !== n || h[4] !== x || h[5] !== t
            ? ((o = u(x, t, n)), (h[3] = n), (h[4] = x), (h[5] = t), (h[6] = o))
            : (o = h[6])
          let { data: v, isLoading: w } = (0, i.I)(o)
          h[7] !== n || h[8] !== x || h[9] !== t || h[10] !== v
            ? ((s = t && (c(x, n) || !0 === v) ? x : void 0),
              (h[7] = n),
              (h[8] = x),
              (h[9] = t),
              (h[10] = v),
              (h[11] = s))
            : (s = h[11])
          let b = t && !g && (w || (!f && null != e && p !== e))
          return (
            h[12] !== s || h[13] !== b
              ? ((d = { safeUrl: s, isPending: b }), (h[12] = s), (h[13] = b), (h[14] = d))
              : (d = h[14]),
            d
          )
        },
        u_: u,
      },
    )
  },
  CsDP(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      i = a("aoV0"),
      r = a("on57"),
      o = a("mUDD"),
      s = a("v0Gf")
    a.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            a,
            d,
            c,
            u,
            m,
            h,
            f = (0, n.c)(32),
            {
              children: p,
              header: g,
              headerContent: x,
              footer: v,
              collapseEmptyContent: w,
              reserveSuggestionsSpace: b,
              variant: y,
              onSubmit: j,
            } = e,
            k = void 0 !== b && b,
            C = void 0 === y ? "default" : y,
            S = void 0 !== w && w && null == p
          f[0] !== v || f[1] !== k
            ? ((t = k
                ? (0, l.jsx)("div", { "data-share-dialog-suggestions-space": !0, hidden: null == v, "aria-hidden": !0 })
                : null),
              (f[0] = v),
              (f[1] = k),
              (f[2] = t))
            : (t = f[2])
          let A = t
          f[3] !== p || f[4] !== g || f[5] !== x || f[6] !== S || f[7] !== A || f[8] !== C
            ? ((a = (0, l.jsx)(l.Fragment, {
                children:
                  "compact" === C
                    ? (0, l.jsxs)(s.Q, {
                        className: "relative -mx-5 -mt-2 flex min-h-0 flex-col",
                        fade: "divider",
                        scrollClassName: "min-h-0 overflow-y-auto overscroll-contain px-5 pt-2 pb-5",
                        children: [
                          g,
                          null != x && (0, l.jsx)("div", { className: "pt-5", children: x }),
                          null != p && (0, l.jsx)("div", { className: "pt-5", children: p }),
                          A,
                        ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsxs)("div", {
                            className: (0, r.A)(
                              "min-h-0 overflow-y-auto overscroll-contain",
                              "default" === C && "-mt-2 pt-2",
                            ),
                            children: [
                              (0, l.jsx)("div", {
                                className: (0, r.A)("sectioned" === C && "ps-6 pe-4 pt-4"),
                                children: g,
                              }),
                              null != x && (0, l.jsx)("div", { className: "px-6 pt-4 empty:hidden", children: x }),
                              S && A,
                            ],
                          }),
                          S
                            ? null
                            : (0, l.jsx)(s.Q, {
                                className: (0, r.A)(
                                  "relative flex flex-col",
                                  "default" === C && "-mx-5 min-h-24",
                                  "sectioned" === C && "min-h-0",
                                ),
                                fade: "divider",
                                scrollClassName: (0, r.A)(
                                  "min-h-0 overflow-y-auto overscroll-contain",
                                  "sectioned" === C && "px-6",
                                  "default" === C && "px-5",
                                ),
                                children: (0, l.jsxs)("div", {
                                  className: (0, r.A)(
                                    "sectioned" === C && (0, r.A)("pb-6", null == x ? "pt-4" : "pt-6"),
                                    "default" === C && "py-5",
                                  ),
                                  children: [p, A],
                                }),
                              }),
                        ],
                      }),
              })),
              (f[3] = p),
              (f[4] = g),
              (f[5] = x),
              (f[6] = S),
              (f[7] = A),
              (f[8] = C),
              (f[9] = a))
            : (a = f[9])
          let M = a,
            N = (k || "compact" === C) && "grid-rows-[minmax(0,1fr)_auto]",
            I =
              !k &&
              "compact" !== C &&
              (S ? "grid-rows-[minmax(0,max-content)_auto]" : "grid-rows-[minmax(0,max-content)_1fr_auto]")
          f[10] !== N || f[11] !== I
            ? ((d = (0, r.A)("grid grid-cols-1", N, I)), (f[10] = N), (f[11] = I), (f[12] = d))
            : (d = f[12])
          let E = null == j ? "div" : "form",
            T = "sectioned" === C ? "chatgpt" : "default"
          return (
            f[13] !== M || f[14] !== S || f[15] !== k || f[16] !== C
              ? ((c = k
                  ? (0, l.jsx)("div", {
                      "data-share-dialog-content": !0,
                      className: (0, r.A)(
                        "min-h-0",
                        "compact" === C ? "flex flex-col" : "grid grid-cols-1",
                        "compact" !== C && !S && "grid-rows-[minmax(0,max-content)_1fr]",
                      ),
                      children: M,
                    })
                  : M),
                (f[13] = M),
                (f[14] = S),
                (f[15] = k),
                (f[16] = C),
                (f[17] = c))
              : (c = f[17]),
            f[18] !== v || f[19] !== C
              ? ((u =
                  "sectioned" === C && null != v && (0, l.jsx)(i.a.Footer, { className: "flex-wrap", children: v })),
                (f[18] = v),
                (f[19] = C),
                (f[20] = u))
              : (u = f[20]),
            f[21] !== v || f[22] !== C
              ? ((m =
                  "sectioned" !== C &&
                  (0, l.jsx)(o.Es, { className: "shrink-0 flex-wrap", expandSingleButton: !1, children: v })),
                (f[21] = v),
                (f[22] = C),
                (f[23] = m))
              : (m = f[23]),
            f[24] !== j || f[25] !== T || f[26] !== c || f[27] !== u || f[28] !== m || f[29] !== d || f[30] !== E
              ? ((h = (0, l.jsxs)(o.R4, {
                  className: d,
                  as: E,
                  size: "scrollable",
                  variant: T,
                  onSubmit: j,
                  children: [c, u, m],
                })),
                (f[24] = j),
                (f[25] = T),
                (f[26] = c),
                (f[27] = u),
                (f[28] = m),
                (f[29] = d),
                (f[30] = E),
                (f[31] = h))
              : (h = f[31]),
            h
          )
        },
      },
    )
  },
  Rxyo(e, t, a) {
    var l = a("zTeN"),
      n = a("CWeU"),
      i = a("OWtl"),
      r = a("Qg7S"),
      o = a("OMIV")
    let s = c(!0),
      d = c(!1)
    function c(e) {
      return (0, l.SZ)(
        i.u,
        () => !1,
        ({ get: t, set: a }) => {
          let l = t(o.M9),
            i = t(o.RS),
            s = t(n.PO),
            d = () => {
              let t = l?.getContext().user
              a(
                !i &&
                  !s.authLoading &&
                  "chatgpt" === s.authMethod &&
                  !0 === s.hasChatGptToken &&
                  null != s.authenticatedAccountId &&
                  null != s.authenticatedUserId &&
                  t?.userID === s.authenticatedUserId &&
                  t.custom?.account_id === s.authenticatedAccountId &&
                  l?.loadingStatus === "Ready" &&
                  (0, r.z)(l) &&
                  !0 === l.getExperiment("2727645498", { disableExposureLog: e }).get("enabled", !1),
              )
            }
          return (
            d(),
            l?.on("values_updated", d),
            () => {
              l?.off("values_updated", d)
            }
          )
        },
      )
    }
    a.d(t, {}, { A: d, y: s })
  },
  S7UD(e, t, a) {
    var l = a("Siqm"),
      n = a("yI91")
    let i = {
      audio: [
        ["audio/aac"],
        ["audio/flac", "audio/x-flac"],
        ["audio/mp4", "audio/m4a", "audio/x-m4a"],
        ["audio/mpeg", "audio/mp3"],
        ["audio/ogg", "audio/opus"],
        ["audio/wav", "audio/wave", "audio/vnd.wave", "audio/x-wav"],
        ["audio/webm"],
      ],
      video: [
        ["video/mp4"],
        ["video/ogg"],
        ["video/quicktime"],
        ["video/webm"],
        ["video/x-matroska", "video/matroska"],
      ],
    }
    async function r(e, t) {
      let {
          mimeType: a,
          data: r,
          isBase64: o,
        } = "string" == typeof e
          ? (function (e) {
              let t = /^data:([^,#]+),/i.exec(e)
              if (null == t) throw Error("Invalid media data URL")
              let a = t[1] ?? "",
                l = a.replace(/;base64$/i, ""),
                n = e.indexOf("#", t[0].length)
              return { mimeType: l, data: e.slice(t[0].length, -1 === n ? void 0 : n), isBase64: l !== a }
            })(e)
          : { ...e, isBase64: !0 },
        s = /^([\w.+/-]+)(?:;[ \t]*codecs=(?:[\w.-]+|"[\w.-]+(?:, *[\w.-]+)*"))?$/i.exec(a)?.[1]?.toLowerCase(),
        d = i[t].find((e) => e.includes(s ?? ""))
      if (null == d) throw Error("Unsupported media type")
      let c = (function (e, t) {
          if (t && !e.includes("%")) return (0, n.K)(e)
          let a = new TextEncoder().encode(e),
            l = 0
          for (let e = 0; e < a.length; e += 1) {
            if (37 === a[e]) {
              let t = String.fromCharCode(a[e + 1] ?? 0, a[e + 2] ?? 0)
              if (/^[\da-f]{2}$/i.test(t)) {
                ;((a[l++] = Number.parseInt(t, 16)), (e += 2))
                continue
              }
            }
            a[l++] = a[e] ?? 0
          }
          let i = new Uint8Array(a.buffer, a.byteOffset, l)
          return t ? (0, n.K)(new TextDecoder().decode(i)) : i
        })(r, o),
        u = (await (0, l.V)(c))?.split(";")[0],
        [m] = d
      if (
        ("audio/mp4" !== m || "video/mp4" !== u) &&
        ("audio/webm" !== m || "video/webm" !== u) &&
        (null == u || !d.includes(u))
      )
        throw Error("Media data does not match its declared type")
      return new Blob([c], { type: m })
    }
    a.d(
      t,
      {},
      {
        Gp: r,
        Kr: function (e, t, a) {
          let l,
            n = "string" == typeof t ? t.indexOf("#") : -1,
            i = "string" == typeof t && -1 !== n ? t.slice(n) : "",
            o = "video" === e.localName ? "video" : "audio",
            s = !0
          return (
            r(t, o)
              .then((t) => {
                s && (e.src = (l = URL.createObjectURL(t)) + i)
              })
              .catch(() => {
                s && a()
              }),
            () => {
              ;((s = !1),
                null != l &&
                  (e.getAttribute("src") === l + i && (e.removeAttribute("src"), e.load()), URL.revokeObjectURL(l)))
            }
          )
        },
        ax: function (e) {
          return null != e && /^data:/i.test(e)
        },
      },
    )
  },
  fK6E(e, t, a) {
    let l = (0, a("nkTT").a)({
      name: "pause-sm-fill-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.807861, y: 4.141113, width: 8.384766, height: 7.716797 },
        visualBounds: { x: 3.807861, y: 4.141113, width: 8.384766, height: 7.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.807861, y: 4.141113, width: 8.384766, height: 7.716797 },
        center: { x: 8.000244, y: 7.999512 },
        insets: { top: 4.141113, right: 3.807373, bottom: 4.14209, left: 3.807861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000244, y: 7.999512 }, foreground: { x: 8.000244, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M5.89966 4.14111C6.42893 4.14111 6.85864 4.57082 6.85864 5.1001V10.8999C6.85861 11.4291 6.42891 11.8579 5.89966 11.8579H4.76685C4.23759 11.8579 3.8079 11.4291 3.80786 10.8999V5.1001C3.80786 4.57082 4.23757 4.14111 4.76685 4.14111H5.89966Z" fill="currentColor"/> <path d="M11.2336 4.14111C11.7627 4.14138 12.1926 4.57099 12.1926 5.1001V10.8999C12.1926 11.429 11.7627 11.8576 11.2336 11.8579H10.1008C9.57158 11.8579 9.14188 11.4291 9.14185 10.8999V5.1001C9.14185 4.57082 9.57156 4.14111 10.1008 4.14111H11.2336Z" fill="currentColor"/>',
    })
    a.d(t, {}, { F: l })
  },
  esQs(e, t, a) {
    let l = (0, a("nkTT").a)({
      name: "play-sm-fill-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 5.058105, y: 3.731934, width: 7.038086, height: 8.535645 },
        visualBounds: { x: 5.058105, y: 3.731934, width: 7.038086, height: 8.535645 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 5.058105, y: 3.731934, width: 7.038086, height: 8.535645 },
        center: { x: 8.577148, y: 7.999757 },
        insets: { top: 3.731934, right: 3.903809, bottom: 3.732421, left: 5.058105 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.577148, y: 7.999757 }, foreground: { x: 8.577148, y: 7.999757 } },
      },
      capabilities: ["icon"],
      body: '<path d="M5.05811 4.68954C5.05869 3.97963 5.79615 3.53383 6.4126 3.81942L6.53369 3.88681L11.6587 7.19638C12.2422 7.57321 12.242 8.42688 11.6587 8.8038L6.53369 12.1134C5.8972 12.5241 5.05821 12.0672 5.05811 11.3097V4.68954Z" fill="currentColor"/>',
    })
    a.d(t, {}, { n: l })
  },
}
//# sourceMappingURL=310423.2ed8d20af4.js.map
