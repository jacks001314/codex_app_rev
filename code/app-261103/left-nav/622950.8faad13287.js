export const __rspack_esm_ids = [622950]
export const __webpack_modules__ = {
  bFOP(e, t, n) {
    n.d(t, { A: () => f })
    var a = n("ABep"),
      o = n("on57"),
      s = n("YLKE"),
      l = n("zd8w"),
      i = n("Cmnu"),
      r = n("BAKu"),
      d = n("We8q"),
      u = n("fZ4G"),
      c = n("EYJV"),
      m = n("DL3o"),
      h = n("vliF")
    let f = ({ open: e, onOpenChange: t, showOnHover: n = !1, hoverOpenDelay: o = 150, children: r }) => {
        let [u, c] = (0, l.useState)(!1),
          [m, f] = (0, l.useState)(!1),
          g = (0, l.useRef)(null),
          [p, x] = (0, l.useState)(null),
          b = (0, l.useRef)(null),
          y = (0, l.useRef)(void 0),
          v = (0, l.useRef)(!1),
          _ = (0, l.useRef)(!1),
          w = e ?? u,
          [j, k] = (0, l.useState)(!1)
        ;(0, i.Z3)(() => k(!1), j ? 500 : null)
        let T = (0, d.Y)(t),
          A = (0, d.Y)((e) => {
            ;(clearTimeout(y.current),
              w !== e &&
                (e || (f(!1), n && v.current && g.current?.focus(), (v.current = !1)), T.current?.(e), c(e), n && k(e)))
          }),
          S = (0, l.useCallback)(
            (e) => {
              A.current(e)
            },
            [A],
          ),
          M = (0, l.useCallback)(() => {
            y.current = setTimeout(() => S(!0), o)
          }, [S, o]),
          C = (0, l.useCallback)(() => {
            clearTimeout(y.current)
          }, [])
        ;(0, l.useEffect)(
          () => () => {
            clearTimeout(y.current)
          },
          [],
        )
        let E = (0, l.useMemo)(
          () => ({
            open: w,
            setOpen: S,
            shake: m,
            setShake: f,
            showOnHover: n,
            temporarilyPreventClickToClose: j,
            onTriggerEnter: M,
            onTriggerLeave: C,
            isPointerInTransitRef: _,
            triggerRef: g,
            triggerElement: p,
            setTriggerElement: x,
            contentRef: b,
            hoverOpenFocusedWithTab: v,
          }),
          [w, S, m, f, n, j, v, _, p, M, C],
        )
        return (0, a.jsx)(h.n, {
          value: E,
          children: (0, a.jsx)(s.bL, { open: w, onOpenChange: S, modal: !1, children: r }),
        })
      },
      g = ({
        children: e,
        avoidCollisions: t,
        width: n,
        minWidth: l,
        maxWidth: i,
        side: r,
        sideOffset: d = 8,
        align: c,
        alignOffset: m,
        translucent: f,
        className: g,
        autoFocus: p = !0,
        onCloseAutoFocus: x,
        preventCloseOnFocusOutside: b = !1,
      }) => {
        let { showOnHover: y, shake: v, contentRef: _ } = (0, h.C)()
        return (0, a.jsx)(s.UC, {
          forceMount: !0,
          ref: _,
          className: (0, o.A)("Popover-x1v5UD", g),
          style: (0, u.mW)({ "popover-width": n, "popover-min-width": l, "popover-max-width": i }),
          onCloseAutoFocus: x ?? (y ? u.iB : void 0),
          "data-animate": v ? "shake" : void 0,
          "data-translucent": f ? "true" : void 0,
          side: r,
          sideOffset: d,
          align: c,
          alignOffset: m ?? ("center" === c ? 0 : -5),
          avoidCollisions: t ?? !0,
          hideWhenDetached: !0,
          collisionPadding: 20,
          onFocusOutside: b ? u.iB : void 0,
          onOpenAutoFocus: (e) => {
            e.preventDefault()
            let t = _.current
            p && !y && t && !t.contains(document.activeElement) && t.focus({ preventScroll: !0 })
          },
          onEscapeKeyDown: u.iB,
          onKeyDown: (e) => {
            let t = _.current
            if (t && e.target === t && "Tab" === e.key && e.shiftKey) {
              ;(e.preventDefault(), e.stopPropagation())
              let n = (0, u.mr)(t),
                a = n[n.length - 1]
              a?.focus()
            }
          },
          children: e,
        })
      },
      p = (e) => {
        let {
            setOpen: t,
            triggerRef: n,
            contentRef: o,
            isPointerInTransitRef: s,
            hoverOpenFocusedWithTab: i,
          } = (0, h.C)(),
          [r, d] = (0, l.useState)(null),
          c = (0, l.useCallback)(() => {
            ;(d(null), (s.current = !1))
          }, [s]),
          m = (0, l.useCallback)(
            (e, t) => {
              ;(d(
                ((e, t) => {
                  let n,
                    a = e.currentTarget
                  if (!(a instanceof HTMLElement)) return []
                  let o = { x: e.clientX, y: e.clientY },
                    s = (function (e, t) {
                      let n = Math.abs(t.top - e.y),
                        a = Math.abs(t.bottom - e.y),
                        o = Math.abs(t.right - e.x),
                        s = Math.abs(t.left - e.x)
                      switch (Math.min(n, a, o, s)) {
                        case s:
                          return "left"
                        case o:
                          return "right"
                        case n:
                          return "top"
                        case a:
                          return "bottom"
                        default:
                          throw Error("unreachable")
                      }
                    })(o, a.getBoundingClientRect()),
                    l = (function (e, t, n = 5) {
                      let a = []
                      switch (t) {
                        case "top":
                          a.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n })
                          break
                        case "bottom":
                          a.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n })
                          break
                        case "left":
                          a.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n })
                          break
                        case "right":
                          a.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n })
                      }
                      return a
                    })(o, s),
                    i = (function (e) {
                      let { top: t, right: n, bottom: a, left: o } = e
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: a },
                        { x: o, y: a },
                      ]
                    })(t.getBoundingClientRect())
                  return (
                    (n = [...l, ...i].slice()).sort((e, t) =>
                      e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y),
                    ),
                    (function (e) {
                      if (e.length <= 1) return e.slice()
                      let t = []
                      for (let n of e) {
                        for (; t.length >= 2;) {
                          let e = t.at(-1),
                            a = t.at(-2)
                          if (e && a && (e.x - a.x) * (n.y - a.y) >= (e.y - a.y) * (n.x - a.x)) t.pop()
                          else break
                        }
                        t.push(n)
                      }
                      t.pop()
                      let n = []
                      for (let t of [...e].reverse()) {
                        for (; n.length >= 2;) {
                          let e = n.at(-1),
                            a = n.at(-2)
                          if (e && a && (e.x - a.x) * (t.y - a.y) >= (e.y - a.y) * (t.x - a.x)) n.pop()
                          else break
                        }
                        n.push(t)
                      }
                      return (n.pop(), 1 === t.length && 1 === n.length && t[0]?.x === n[0]?.x && t[0]?.y === n[0]?.y)
                        ? t
                        : t.concat(n)
                    })(n)
                  )
                })(e, t),
              ),
                (s.current = !0))
            },
            [s],
          )
        return (
          (0, l.useEffect)(() => () => c(), [c]),
          (0, l.useEffect)(() => {
            let e = n.current,
              t = o.current
            if (!e || !t) return
            let a = (e) => m(e, t),
              s = (t) => m(t, e)
            return (
              e.addEventListener("pointerleave", a),
              t.addEventListener("pointerleave", s),
              () => {
                ;(e.removeEventListener("pointerleave", a), t.removeEventListener("pointerleave", s))
              }
            )
          }, [o, n, m, c]),
          (0, l.useEffect)(() => {
            if (!r) return
            let e = (e) => {
              let a = n.current,
                s = o.current,
                l = e.target
              if (!(l instanceof Element)) return
              let i = { x: e.clientX, y: e.clientY },
                d = a?.contains(l) || s?.contains(l),
                u = !(function (e, t) {
                  let { x: n, y: a } = e,
                    o = !1,
                    s = t.at(-1)
                  for (let e of t)
                    (s && e.y > a != s.y > a && n < ((s.x - e.x) * (a - e.y)) / (s.y - e.y) + e.x && (o = !o), (s = e))
                  return o
                })(i, r),
                m = l.hasAttribute("aria-haspopup")
              d ? c() : (u || m) && (c(), t(!1))
            }
            return (document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e))
          }, [r, t, c, n, o]),
          (0, l.useEffect)(() => {
            let e = (t) => {
              if (o.current && "Tab" === t.key && !t.shiftKey) {
                let [n] = (0, u.mr)(o.current)
                n && (t.preventDefault(), n.focus(), (i.current = !0), document.removeEventListener("keydown", e))
              }
            }
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e)
              }
            )
          }, [o, i]),
          (0, a.jsx)(g, { ...e })
        )
      }
    ;((f.Trigger = ({ children: e, onPointerDown: t, onClick: n }) => {
      let {
          setOpen: o,
          showOnHover: i,
          temporarilyPreventClickToClose: r,
          onTriggerEnter: d,
          onTriggerLeave: u,
          isPointerInTransitRef: c,
          triggerRef: m,
          setTriggerElement: f,
          contentRef: g,
        } = (0, h.C)(),
        p = (0, l.useRef)(!1),
        x = (0, l.useCallback)(
          (e) => {
            ;((m.current = e), f(e))
          },
          [m, f],
        ),
        b = (e) => {
          "a" !== e.currentTarget.nodeName.toLocaleLowerCase() && r && (e.preventDefault(), e.stopPropagation())
        }
      return (0, a.jsx)(s.l9, {
        asChild: !0,
        ref: x,
        onPointerDown: (e) => {
          ;(b(e), t?.(e))
        },
        onClick: (e) => {
          ;(b(e), n?.(e))
        },
        onPointerMove: i
          ? (e) => {
              "touch" !== e.pointerType && (p.current || c.current || (d(), (p.current = !0)))
            }
          : void 0,
        onPointerLeave: i
          ? () => {
              p.current && (u(), (p.current = !1))
            }
          : void 0,
        onFocus: i ? () => o(!0) : void 0,
        onBlur: i
          ? () => {
              setTimeout(() => {
                g.current?.contains(document.activeElement) || o(!1)
              }, 50)
            }
          : void 0,
        children: e,
      })
    }),
      (f.Content = (e) => {
        let { open: t, showOnHover: n, setOpen: o, triggerElement: l } = (0, h.C)(),
          i = (0, c.jS)() ?? l?.closest('[role="dialog"]') ?? void 0
        return (
          (0, r.r)(t, () => {
            o(!1)
          }),
          (0, a.jsx)(s.ZL, {
            forceMount: !0,
            container: i,
            children: (0, a.jsx)(m.F, {
              enterDuration: 600,
              exitDuration: 300,
              className: "Transition-TpKe3L",
              children: t && (n ? (0, a.jsx)(p, { ...e }, "popover-hover") : (0, a.jsx)(g, { ...e }, "popover")),
            }),
          })
        )
      }),
      n("U8Jh"))
  },
  vliF(e, t, n) {
    var a = n("zd8w")
    let o = (0, a.createContext)(null)
    n.d(
      t,
      {},
      {
        C: () => {
          let e = (0, a.use)(o)
          if (!e) throw Error("Popover components must be wrapped in <Popover />")
          return e
        },
        n: o,
      },
    )
  },
  U8Jh(e, t, n) {
    var a = n("zd8w")
    ;(n("v7qY"), n("fZ4G"))
    var o = n("vliF")
    n.d(
      t,
      {},
      {
        X_: () => {
          let { setOpen: e } = (0, o.C)()
          return (0, a.useCallback)(() => e(!1), [e])
        },
      },
    )
  },
  p2tp(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("zd8w"),
      l = n("oyxz"),
      i = n("FvYa"),
      r = n("GO7r"),
      d = n("AWNZ"),
      u = n("ZEx5"),
      c = n("sn2N")
    function m(e) {
      let t,
        n,
        s,
        m,
        f,
        g,
        p,
        x,
        b,
        y = (0, o.c)(45),
        { trigger: v, isAutomationEnabled: _, onOpenTrigger: w, showUnavailableConditions: j, variant: k } = e,
        T = v?.presentation
      y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)("span", { children: (0, a.jsx)(r.o1J, {}) })), (y[0] = t))
        : (t = y[0])
      let A = v?.connector_type,
        S = T?.icon_url
      y[1] !== A || y[2] !== S
        ? ((n = (0, a.jsx)(i.R, { size: 20, alt: "", fallback: t, knownAppId: A, logoUrl: S })),
          (y[1] = A),
          (y[2] = S),
          (y[3] = n))
        : (n = y[3])
      let M = n
      ;(y[4] !== T?.display_name || y[5] !== v?.connector_type
        ? ((s =
            T?.display_name ??
            v?.connector_type ??
            (0, a.jsx)(l.A, {
              id: "inbox.automations.cloud.webhook.fallback",
              defaultMessage: "Webhook",
              description:
                "Fallback name for a cloud task's event trigger when its connected app is unavailable in the details panel",
            })),
          (y[4] = T?.display_name),
          (y[5] = v?.connector_type),
          (y[6] = s))
        : (s = y[6]),
        y[7] !== s
          ? ((m = (0, a.jsx)("span", { className: "break-words select-text", children: s })), (y[7] = s), (y[8] = m))
          : (m = y[8]))
      let C = m
      y[9] !== _ || y[10] !== v?.is_enabled
        ? ((f =
            _ && v?.is_enabled === !1
              ? (0, a.jsx)(l.A, {
                  id: "inbox.automations.cloud.webhook.inactive",
                  defaultMessage: "Trigger inactive — this trigger won’t start the task",
                  description:
                    "Warning that this connected-app trigger cannot start the active task; other enabled triggers may still start it",
                })
              : null),
          (y[9] = _),
          (y[10] = v?.is_enabled),
          (y[11] = f))
        : (f = y[11])
      let E = f
      if ("form" === k) {
        let e,
          t,
          n,
          o,
          s,
          i,
          r,
          c = C
        if (v?.connector_type === "slack" && "message" === v.webhook_name) {
          let e
          ;(y[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "automations.configuration.slackTask",
                defaultMessage: "New Slack message",
                description: "Trigger option for a new Slack message",
              })),
              (y[12] = e))
            : (e = y[12]),
            (c = e))
        } else if (v?.connector_type === "gmail" && "message" === v.webhook_name) {
          let e
          ;(y[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "automations.configuration.gmailTask",
                defaultMessage: "New email",
                description: "Trigger option for new Gmail email",
              })),
              (y[13] = e))
            : (e = y[13]),
            (c = e))
        } else if (v?.connector_type === "github" && "pull_request" === v.webhook_name) {
          let e
          ;(y[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "automations.configuration.githubEvent",
                defaultMessage: "GitHub event",
                description: "Trigger option for a GitHub event",
              })),
              (y[14] = e))
            : (e = y[14]),
            (c = e))
        }
        return (
          y[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "automations.configuration.schedule",
                defaultMessage: "Trigger",
                description: "Label identifying the scheduled task trigger",
              })),
              (y[15] = e))
            : (e = y[15]),
          y[16] !== c
            ? ((t = (0, a.jsx)("span", { className: "min-w-0 text-end break-words", children: c })),
              (y[16] = c),
              (y[17] = t))
            : (t = y[17]),
          y[18] !== M
            ? ((n = (0, a.jsx)("span", { className: "shrink-0 text-default", children: M })), (y[18] = M), (y[19] = n))
            : (n = y[19]),
          y[20] !== n || y[21] !== t
            ? ((o = (0, a.jsx)(d.ic, {
                variant: "nested",
                labelSizing: "content",
                label: e,
                control: (0, a.jsxs)("span", {
                  className: "flex min-w-0 items-center gap-1.5 text-tertiary",
                  children: [t, n],
                }),
              })),
              (y[20] = n),
              (y[21] = t),
              (y[22] = o))
            : (o = y[22]),
          y[23] !== E
            ? ((s = null != E ? (0, a.jsx)(d.ic, { variant: "nested", label: E, control: null }) : null),
              (y[23] = E),
              (y[24] = s))
            : (s = y[24]),
          y[25] !== T || y[26] !== v?.connector_type
            ? ((i =
                null == T
                  ? (0, a.jsx)(d.ic, {
                      variant: "nested",
                      label: (0, a.jsx)(l.A, {
                        id: "inbox.automations.cloud.webhook.unavailable",
                        defaultMessage: "Trigger details unavailable",
                        description:
                          "Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters",
                      }),
                      control: null,
                    })
                  : T.condition_rows.map((e) => {
                      let { id: t, label: n, value: o } = e
                      return (0, a.jsx)(
                        d.ic,
                        {
                          variant: "nested",
                          labelSizing: "content",
                          label:
                            v?.connector_type === "slack" && "channels" === t
                              ? (0, a.jsx)(l.A, {
                                  id: "automations.configuration.channels",
                                  defaultMessage: "In channels",
                                  description: "Slack channels to monitor for new messages",
                                })
                              : n,
                          control: (0, a.jsx)("span", {
                            className: "min-w-0 text-end break-words text-tertiary select-text",
                            children: o,
                          }),
                        },
                        t,
                      )
                    })),
              (y[25] = T),
              (y[26] = v?.connector_type),
              (y[27] = i))
            : (i = y[27]),
          y[28] !== o || y[29] !== s || y[30] !== i
            ? ((r = (0, a.jsxs)(u.t, { variant: "form", children: [o, s, i] })),
              (y[28] = o),
              (y[29] = s),
              (y[30] = i),
              (y[31] = r))
            : (r = y[31]),
          r
        )
      }
      return (
        y[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("span", {
              className: "select-none",
              children: (0, a.jsx)(l.A, {
                id: "inbox.automations.cloud.webhook.trigger",
                defaultMessage: "Trigger",
                description:
                  "Section heading above the connected app that can trigger a cloud webhook task in its details panel",
              }),
            })),
            (y[32] = g))
          : (g = y[32]),
        y[33] !== M || y[34] !== E || y[35] !== C || y[36] !== w || y[37] !== v
          ? ((p = (0, a.jsx)(c.C, {
              title: g,
              children: (0, a.jsx)(u.t, {
                children:
                  null != v && null != w
                    ? (0, a.jsx)(d.kG, {
                        description: E,
                        edgeRounding: "surface",
                        icon: M,
                        label: C,
                        trailing: (0, a.jsx)(r.uM3, {}),
                        onClick: () => w(v),
                      })
                    : (0, a.jsx)(d.ic, {
                        control:
                          null != E
                            ? (0, a.jsx)("span", { className: "text-sm text-secondary select-none", children: E })
                            : null,
                        icon: M,
                        label: C,
                      }),
              }),
            })),
            (y[33] = M),
            (y[34] = E),
            (y[35] = C),
            (y[36] = w),
            (y[37] = v),
            (y[38] = p))
          : (p = y[38]),
        y[39] !== T || y[40] !== j
          ? ((x =
              (null == T && j) || (T?.condition_rows.length ?? 0) > 0
                ? (0, a.jsx)(c.C, {
                    title: (0, a.jsx)("span", {
                      className: "select-none",
                      children: (0, a.jsx)(l.A, {
                        id: "inbox.automations.cloud.webhook.condition",
                        defaultMessage: "Condition",
                        description:
                          "Section heading above the read-only event filters for a cloud webhook task in its details panel",
                      }),
                    }),
                    children: (0, a.jsx)(u.t, {
                      children:
                        null == T
                          ? (0, a.jsx)(d.ic, {
                              control: null,
                              label: (0, a.jsx)("span", {
                                className: "select-none",
                                children: (0, a.jsx)(l.A, {
                                  id: "inbox.automations.cloud.webhook.unavailable",
                                  defaultMessage: "Trigger details unavailable",
                                  description:
                                    "Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters",
                                }),
                              }),
                              variant: "nested",
                            })
                          : T.condition_rows.map(h),
                    }),
                  })
                : null),
            (y[39] = T),
            (y[40] = j),
            (y[41] = x))
          : (x = y[41]),
        y[42] !== x || y[43] !== p
          ? ((b = (0, a.jsxs)(a.Fragment, { children: [p, x] })), (y[42] = x), (y[43] = p), (y[44] = b))
          : (b = y[44]),
        b
      )
    }
    function h(e) {
      let { id: t, label: n, value: o } = e
      return (0, a.jsx)(
        d.ic,
        {
          control: (0, a.jsx)("span", {
            className: "max-w-64 text-end text-base break-words text-default select-text",
            children: o,
          }),
          label: (0, a.jsx)("span", { className: "select-none", children: n }),
          labelSizing: "content",
          variant: "nested",
        },
        t,
      )
    }
    n.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            n,
            i = (0, o.c)(17),
            { triggers: r, isAutomationEnabled: d, onOpenTrigger: u, showUnavailableConditions: c, variant: h } = e,
            f = void 0 === c || c,
            g = void 0 === h ? "default" : h
          if (null == r || 0 === r.length) {
            let e
            return (
              i[0] !== d || i[1] !== f || i[2] !== g
                ? ((e = (0, a.jsx)(m, {
                    variant: g,
                    trigger: void 0,
                    isAutomationEnabled: d,
                    showUnavailableConditions: f,
                  })),
                  (i[0] = d),
                  (i[1] = f),
                  (i[2] = g),
                  (i[3] = e))
                : (e = i[3]),
              e
            )
          }
          if (i[4] !== d || i[5] !== u || i[6] !== f || i[7] !== r || i[8] !== g) {
            let e
            ;(i[10] !== d || i[11] !== u || i[12] !== f || i[13] !== g
              ? ((e = (e, t) =>
                  (0, a.jsxs)(
                    s.Fragment,
                    {
                      children: [
                        t > 0
                          ? (0, a.jsx)("div", {
                              className: "text-center text-sm text-tertiary select-none",
                              children: (0, a.jsx)(l.A, {
                                id: "inbox.automations.cloud.webhook.or",
                                defaultMessage: "Or",
                                description:
                                  "Separator between alternative triggers in a cloud webhook task's details panel; any one of the triggers can start the task",
                              }),
                            })
                          : null,
                        (0, a.jsx)(m, {
                          variant: g,
                          trigger: e,
                          isAutomationEnabled: d,
                          showUnavailableConditions: f,
                          onOpenTrigger: u,
                        }),
                      ],
                    },
                    e.id,
                  )),
                (i[10] = d),
                (i[11] = u),
                (i[12] = f),
                (i[13] = g),
                (i[14] = e))
              : (e = i[14]),
              (t = r.map(e)),
              (i[4] = d),
              (i[5] = u),
              (i[6] = f),
              (i[7] = r),
              (i[8] = g),
              (i[9] = t))
          } else t = i[9]
          return (
            i[15] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[15] = t), (i[16] = n)) : (n = i[16]),
            n
          )
        },
      },
    )
  },
  nWtQ(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("Wf1j"),
      l = n("oyxz"),
      i = n("dMTK"),
      r = n("KIKs"),
      d = n("fGpH"),
      u = n("mmmg"),
      c = n("ZlGh")
    let m = new Set(u.GR)
    function h(e) {
      return !m.has(e)
    }
    function f(e) {
      return e.trim()
    }
    function g(e, t, n) {
      let a = { hour: "numeric", minute: "2-digit" },
        o = t.formatTimeToParts(e, a),
        s = o.find((e) => "dayPeriod" === e.type)?.value
      n &&
        null != s &&
        o.find((e) => "minute" === e.type)?.value === t.formatNumber(0, { minimumIntegerDigits: 2, useGrouping: !1 }) &&
        (a.minute = void 0)
      let l = t.formatTime(e, a)
      return null == s ? l : l.replace(s, s.toLocaleLowerCase(t.locale))
    }
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n,
            u,
            m = (0, o.c)(40),
            { automation: p, teamId: x, variant: b } = e,
            y = void 0 === b ? "editor" : b,
            v = (0, s.A)(),
            _ = (0, r.wv)()
          m[0] !== p ? ((t = (0, d.Xr)(p)), (m[0] = p), (m[1] = t)) : (t = m[1])
          let w = t,
            j = p.schedule_components
          m[2] !== p || m[3] !== x
            ? ((n = (0, d.mZ)({ automation: p, teamId: x })), (m[2] = p), (m[3] = x), (m[4] = n))
            : (n = m[4])
          let k = n,
            T = "recurring",
            A = "",
            S = "",
            M = "",
            C = 1
          if ("active" !== w) T = w
          else if (null != k && "condition_watch" !== p.timing_mode) T = "everyMinutes"
          else if ("summary" === y && p.display_schedule) {
            let e
            return (
              m[5] !== p.display_schedule
                ? ((e = (0, a.jsx)(a.Fragment, { children: p.display_schedule })),
                  (m[5] = p.display_schedule),
                  (m[6] = e))
                : (e = m[6]),
              e
            )
          } else if ("condition_watch" === p.timing_mode) T = "monitoring"
          else {
            let e
            m[7] !== p ? ((e = (0, c.qz)(p)), (m[7] = p), (m[8] = e)) : (e = m[8])
            let t = e.scheduleConfig
            if (null != t.oneTimeDate)
              if (
                m[9] !== p.schedule_time_of_day ||
                m[10] !== t.oneTimeDate ||
                m[11] !== t.time ||
                m[12] !== v ||
                m[13] !== _ ||
                m[14] !== y
              ) {
                let e = new Date(`${t.oneTimeDate}T${t.time}:00`),
                  n = (0, i.f$)(e, _),
                  a = p.schedule_time_of_day
                ;(0 === n
                  ? ((T = a ?? "time"), (S = g(e, v, "summary" === y)))
                  : n > 0 && n < 7
                    ? ((T = null == a ? "weekdayTime" : "weekday"),
                      (M = v.formatDate(e, { weekday: null == a ? "short" : "long" })),
                      (S = g(e, v, "summary" === y)))
                    : ((T = "date"), (A = v.formatDate(e, { day: "numeric", month: "short" }))),
                  (m[9] = p.schedule_time_of_day),
                  (m[10] = t.oneTimeDate),
                  (m[11] = t.time),
                  (m[12] = v),
                  (m[13] = _),
                  (m[14] = y),
                  (m[15] = T),
                  (m[16] = S),
                  (m[17] = M),
                  (m[18] = A))
              } else ((T = m[15]), (S = m[16]), (M = m[17]), (A = m[18]))
            else if ("hourly" === t.mode) T = 1 === (C = t.intervalHours ?? 1) ? "hourly" : "everyHours"
            else {
              let e = /(?:^|\r?\n)RRULE:([^\r\n]+)/.exec(p.schedule)?.[1],
                t = /(?:^|;)INTERVAL=([^;]+)/.exec(e ?? "")?.[1]
              if (null == t || "1" === t)
                switch (j.frequency) {
                  case "custom":
                  case "once":
                  case "yearly":
                    break
                  case "hourly":
                  case "monthly":
                    T = j.frequency
                    break
                  case "daily": {
                    let e = j.by_hour,
                      t = j.by_minute
                    if ("flexible_schedule" === p.timing_mode) T = "daily"
                    else if (
                      null != e &&
                      null != t &&
                      Number.isInteger(e) &&
                      Number.isInteger(t) &&
                      e >= 0 &&
                      e <= 23 &&
                      t >= 0 &&
                      t <= 59
                    ) {
                      let n
                      ;((T = "dailyTime"),
                        m[19] !== e || m[20] !== v || m[21] !== t || m[22] !== y
                          ? ((n = g(new Date(2e3, 0, 1, e, t), v, "summary" === y)),
                            (m[19] = e),
                            (m[20] = v),
                            (m[21] = t),
                            (m[22] = y),
                            (m[23] = n))
                          : (n = m[23]),
                        (S = n))
                    }
                    break
                  }
                  case "weekly": {
                    let e, t
                    if (
                      (m[24] !== j.by_day
                        ? ((e = 0 === (t = new Set(j.by_day?.split(",").map(f))).size || [...t].some(h)),
                          (m[24] = j.by_day),
                          (m[25] = e),
                          (m[26] = t))
                        : ((e = m[25]), (t = m[26])),
                      e)
                    )
                      break
                    if (1 === t.size) {
                      let e
                      ;(m[27] !== t ? ((e = [...t][0] ?? "recurring"), (m[27] = t), (m[28] = e)) : (e = m[28]), (T = e))
                    } else
                      T =
                        5 === t.size && ["MO", "TU", "WE", "TH", "FR"].every((e) => t.has(e))
                          ? "weekdays"
                          : 2 === t.size && t.has("SA") && t.has("SU")
                            ? "weekends"
                            : "weekly"
                  }
                }
            }
          }
          if ("summary" === y && ("dailyTime" === T || "weekdayTime" === T)) {
            let e
            return (
              m[29] !== T || m[30] !== S || m[31] !== M
                ? ((e = (0, a.jsx)(l.A, {
                    id: "automations.scheduled.summary.compactCadenceWithTime",
                    defaultMessage: "{cadence, select, dailyTime {Daily · {time}} other {{weekday} · {time}}}",
                    description:
                      "Compact schedule in a conversation's Scheduled summary row. dailyTime means a daily recurrence; otherwise weekday is a locale-formatted weekday. time is a locale-formatted exact time. The middle dot separates the cadence or weekday from the time; adapt punctuation and order for the locale.",
                    values: { cadence: T, time: S, weekday: M },
                  })),
                  (m[29] = T),
                  (m[30] = S),
                  (m[31] = M),
                  (m[32] = e))
                : (e = m[32]),
              e
            )
          }
          return (
            m[33] !== T || m[34] !== A || m[35] !== C || m[36] !== k || m[37] !== S || m[38] !== M
              ? ((u = (0, a.jsx)(l.A, {
                  id: "automations.scheduled.editor.compactCadenceWithMinutes",
                  defaultMessage:
                    "{cadence, select, completed {Completed} paused {Paused} monitoring {Monitoring} daily {Daily} dailyTime {Daily {time}} everyMinutes {Every {minutes, number} min} hourly {Hourly} everyHours {Every {hours, plural, one {hour} other {# hours}}} weekly {Weekly} weekdays {Weekdays} weekends {Weekends} monthly {Monthly} MO {Mondays} TU {Tuesdays} WE {Wednesdays} TH {Thursdays} FR {Fridays} SA {Saturdays} SU {Sundays} morning {Morning} afternoon {Afternoon} evening {Evening} night {Night} time {{time}} weekday {{weekday}} weekdayTime {{weekday} {time}} date {{date}} other {Recurring}}",
                  description:
                    "Compact schedule or status above the task title in the Scheduled task editor. cadence selects the schedule type or paused/completed status. time is a locale-formatted exact time, minutes and hours are the recurrence intervals in their respective units, weekday is a locale-formatted weekday, and date is a locale-formatted month and day. Keep the label short.",
                  values: { cadence: T, date: A, time: S, weekday: M, hours: C, minutes: k },
                })),
                (m[33] = T),
                (m[34] = A),
                (m[35] = C),
                (m[36] = k),
                (m[37] = S),
                (m[38] = M),
                (m[39] = u))
              : (u = m[39]),
            u
          )
        },
      },
    )
  },
  ELci(e, t, n) {
    n.d(t, { M: () => ed, Q: () => ei })
    var a = n("ABep"),
      o = n("QosV"),
      s = n("ULZ9"),
      l = n("on57"),
      i = n("SZCv"),
      r = n.n(i),
      d = n("zTeN"),
      u = n("DBCl"),
      c = n("zd8w"),
      m = n("Wf1j"),
      h = n("oyxz"),
      f = n("HZfM"),
      g = n("SPnB"),
      p = n("GIgU"),
      x = n("UeCG"),
      b = n("LTLZ"),
      y = n("jov5"),
      v = n("MOM4"),
      _ = n("R2L4"),
      w = n("rL0w"),
      j = n("SV27"),
      k = n("jAnS"),
      T = n("ygO2"),
      A = n("JNtf"),
      S = n("mUDD"),
      M = n("SGsN"),
      C = n("KIKs"),
      E = n("hlym"),
      D = n("OWtl"),
      I = n("soaw"),
      N = n("aa4G"),
      R = n("fyx9"),
      P = n("odKs"),
      L = n("sn2N"),
      O = n("ED7I"),
      U = n("fGpH"),
      z = n("Ro2M"),
      q = n("p2tp"),
      G = n("nWtQ"),
      K = n("c7WY"),
      H = n("k7o2"),
      F = n("sujc"),
      W = n("nvO1"),
      $ = n("sK0R")
    let B = (0, d.i1)(D.u, (e, { get: t }) => {
      let n = e.cloudTeam
      if (null != n && !t(W.lc, n.accountId)) return !0
      let a = t($.LN, { draft: e, personal: null == n })
      if (null == n) return a?.status !== "loading"
      let o = t(W.Bn, n)
      if (null == o.data) return null != o.error
      let s = (0, W.id)(o.data)
      if (null == s) return !0
      let l = { ...n, serviceAccountId: s },
        i = t(H.WD, l),
        r = t(F.T, l),
        d = t(H.Ys, { ...l, view: "installed", query: "" }),
        u =
          (null != i.data || null != i.error) &&
          (null != r.data || null != r.error) &&
          (null != i.error || null != r.error || null != d.data || null != d.error)
      return a?.status !== "loading" && u
    })
    var V = n("qjUD"),
      Y = n("ZlGh"),
      Z = n("xA2X"),
      Q = n("lBzi"),
      J = n("AWNZ"),
      X = n("ZEx5"),
      ee = n("OMIV"),
      et = n("HFSu"),
      en = n("GDNt")
    let ea = (0, d.vU)(D.u, (e, { get: t, scope: n }) => {
      let a = t(g.chatGptAuthenticatedAccountId$)
      return {
        enabled: "allowed" === t(g.m0).status && null != a,
        queryKey: ["cloud-automations", "webhook-batch", a, e],
        queryFn: async ({ signal: t }) => {
          let o = await et.CodexRequest.safeGet("/automation/{automation_id}/webhook_batch_state", {
            parameters: { path: { automation_id: e } },
            signal: t,
          })
          if ((t.throwIfAborted(), null != o.is_enabled && n.get(g.chatGptAuthenticatedAccountId$) === a)) {
            let t = o.is_enabled
            ;(n.queryClient.setQueriesData({ queryKey: ["cloud-automations", "scheduled-page", a] }, (n) => {
              if (null == n) return n
              let a = n.pages.map((n) =>
                n.items.some((n) => n.id === e && n.is_enabled !== t)
                  ? {
                      ...n,
                      items: n.items.map((n) => (n.id === e && n.is_enabled !== t ? { ...n, is_enabled: t } : n)),
                    }
                  : n,
              )
              return a.some((e, t) => e !== n.pages[t]) ? { ...n, pages: a } : void 0
            }),
              n.query.setData(z._x, (n) =>
                n?.accountId === a && n?.items.some(({ automation: n }) => n.id === e && n.is_enabled !== t)
                  ? {
                      ...n,
                      items: n.items.map((n) =>
                        n.automation.id === e ? { ...n, automation: { ...n.automation, is_enabled: t } } : n,
                      ),
                    }
                  : n,
              ),
              n.query.setData(z.jv, e, (e) =>
                null == e || e.automation.is_enabled === t
                  ? e
                  : { ...e, automation: { ...e.automation, is_enabled: t } },
              ))
          }
          return o
        },
        refetchInterval: 5e3,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        retry: !1,
        staleTime: 0,
      }
    })
    function eo(e) {
      let t,
        n,
        s,
        l,
        i,
        r,
        u,
        f,
        p,
        x,
        b = (0, o.c)(39),
        { automation: y, disabled: v, hasChanges: _, isRunning: w, onRunningChange: j, onStarted: k } = e,
        A = (0, d.gh)(D.u),
        S = (0, d._U)(ee.JW, "1159770884"),
        C = (0, m.A)(),
        E = (0, c.useRef)(null)
      b[0] !== S ? ((t = { enabled: S }), (b[0] = S), (b[1] = t)) : (t = b[1])
      let { data: I, isPending: N, error: R, refetch: P } = (0, d._U)(ea, y.id, t),
        { isPending: L } = (0, d.Ul)(z.x2),
        O = R instanceof en.fk ? R.status : null,
        U = 404 === O || 410 === O,
        q = 401 === O || 403 === O,
        G = (I?.is_enabled ?? y.is_enabled) === !1 && !U && !q && null != I && I.pending_event_count > 0,
        K = !G && !_ && null == R && null != I && I.pending_event_count > 0
      if (
        (b[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = () => () => E.current?.abort()), (s = []), (b[2] = n), (b[3] = s))
          : ((n = b[2]), (s = b[3])),
        (0, c.useEffect)(n, s),
        !S)
      )
        return null
      b[4] !== y.conversation_id ||
      b[5] !== y.id ||
      b[6] !== v ||
      b[7] !== C ||
      b[8] !== j ||
      b[9] !== k ||
      b[10] !== P ||
      b[11] !== A
        ? ((l = (e) => {
            if (v || null != E.current) return
            let t = A.get(g.chatGptAuthenticatedAccountId$),
              n = new AbortController()
            ;((E.current = n),
              j(!0),
              ("resume" === e
                ? A.get(z.x2).mutateAsync({ automationId: y.id, isEnabled: !0 }).then(el)
                : et.CodexRequest.safePost("/automation/{automation_id}/webhook_batch/run_now", {
                    parameters: { path: { automation_id: y.id } },
                    requestBody: { request_id: globalThis.crypto.randomUUID() },
                    signal: n.signal,
                  }).then(es)
              )
                .then((e) => {
                  n.signal.aborted ||
                    A.get(g.chatGptAuthenticatedAccountId$) !== t ||
                    0 === e ||
                    (A.get(M.Id).success(
                      C.formatMessage(
                        {
                          id: "automations.editor.webhook.runNowSuccessWithCount",
                          defaultMessage: "Running {count, plural, one {# pending event} other {# pending events}}",
                          description:
                            "Success toast after the Scheduled task editor starts a queued webhook-event batch. The count is the number of events started.",
                        },
                        { count: e },
                      ),
                    ),
                    null != y.conversation_id && A.query.invalidate(Q.chatGptConversationQueryById$, y.conversation_id),
                    k())
                })
                .catch(() => {
                  n.signal.aborted ||
                    A.get(g.chatGptAuthenticatedAccountId$) !== t ||
                    A.get(M.Id).danger(
                      "resume" === e
                        ? C.formatMessage({
                            id: "automations.scheduled.webhook.resumeError",
                            defaultMessage: "Couldn’t resume task",
                            description:
                              "Error toast when resuming a paused webhook task from the Scheduled editor fails.",
                          })
                        : C.formatMessage({
                            id: "automations.editor.webhook.runNowFailure",
                            defaultMessage: "Couldn’t run pending events",
                            description:
                              "Error toast when the Scheduled task editor cannot start the queued webhook-event batch.",
                          }),
                      {
                        errorAnalytics: {
                          toastId: "resume" === e ? "toggle_automation_status" : "automation_editor_webhook_run_now",
                        },
                      },
                    )
                })
                .finally(() => {
                  ;((E.current = null),
                    n.signal.aborted || A.get(g.chatGptAuthenticatedAccountId$) !== t || (j(!1), P()))
                }))
          }),
          (b[4] = y.conversation_id),
          (b[5] = y.id),
          (b[6] = v),
          (b[7] = C),
          (b[8] = j),
          (b[9] = k),
          (b[10] = P),
          (b[11] = A),
          (b[12] = l))
        : (l = b[12])
      let H = l
      if (N) {
        let e
        ;(b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsLoading",
              defaultMessage: "Checking pending events…",
              description:
                "Loading status while the Scheduled task editor checks the queue of webhook events waiting to run.",
            })),
            (b[13] = e))
          : (e = b[13]),
          (i = e))
      } else if (U) {
        let e
        ;(b[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsTerminal",
              defaultMessage: "This task has ended and can’t process pending events",
              description:
                "Status in the Scheduled editor when a webhook task no longer exists or has ended and cannot process queued events.",
            })),
            (b[14] = e))
          : (e = b[14]),
          (i = e))
      } else if (null != R) {
        let e
        ;(b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsError",
              defaultMessage: "Unable to check pending events",
              description:
                "Error status in the Scheduled task editor when the queue of webhook events cannot be loaded.",
            })),
            (b[15] = e))
          : (e = b[15]),
          (i = e))
      } else {
        let e,
          t = I?.pending_event_count
        ;(b[16] !== t
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEvents",
              defaultMessage: "{count, plural, one {# event waiting} other {# events waiting}}",
              description:
                "Queue count in the Scheduled task editor. The count is the number of webhook events waiting to run.",
              values: { count: t },
            })),
            (b[16] = t),
            (b[17] = e))
          : (e = b[17]),
          (i = e))
      }
      if (L) {
        let e
        ;(b[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsStatusUpdating",
              defaultMessage: "Updating task status…",
              description: "Progress label while the Scheduled editor resumes a paused webhook task.",
            })),
            (b[18] = e))
          : (e = b[18]),
          (r = e))
      } else if (w) {
        let e
        ;(b[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsStarting",
              defaultMessage: "Starting pending events…",
              description: "Progress label while the Scheduled editor starts queued webhook events.",
            })),
            (b[19] = e))
          : (e = b[19]),
          (r = e))
      } else if (G) {
        let e
        ;(b[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsPaused",
              defaultMessage: "Task is paused. Resume to process pending events.",
              description:
                "Explanation in the Scheduled task editor that a paused webhook task must be resumed before its queued events can run.",
            })),
            (b[20] = e))
          : (e = b[20]),
          (r = e))
      }
      return (
        b[21] !== K || b[22] !== R || b[23] !== q || b[24] !== G || b[25] !== U
          ? ((u = null),
            G ? (u = "resume") : null == R || q || U ? K && (u = "run") : (u = "retry"),
            (b[21] = K),
            (b[22] = R),
            (b[23] = q),
            (b[24] = G),
            (b[25] = U),
            (b[26] = u))
          : (u = b[26]),
        b[27] !== i
          ? ((f = (0, a.jsx)("span", { "aria-live": "polite", className: "select-none", children: i })),
            (b[27] = i),
            (b[28] = f))
          : (f = b[28]),
        b[29] !== u || b[30] !== v || b[31] !== w || b[32] !== P || b[33] !== H
          ? ((p =
              null == u
                ? null
                : (0, a.jsxs)(T.$, {
                    color: "secondary",
                    disabled: v,
                    loading: w,
                    type: "button",
                    onClick: () => {
                      "retry" === u ? P() : null != u && H(u)
                    },
                    children: [
                      "resume" === u &&
                        (0, a.jsx)(h.A, {
                          id: "automations.editor.webhook.resume",
                          defaultMessage: "Resume",
                          description:
                            "Button in the Scheduled editor that resumes a paused webhook task so queued events can be processed.",
                        }),
                      "retry" === u &&
                        (0, a.jsx)(h.A, {
                          id: "automations.editor.webhook.retry",
                          defaultMessage: "Retry",
                          description:
                            "Button in the Scheduled editor that retries loading the queue of webhook events after a temporary error.",
                        }),
                      "run" === u &&
                        (0, a.jsx)(h.A, {
                          id: "automations.editor.webhook.runNow",
                          defaultMessage: "Run now",
                          description:
                            "Button in the Scheduled editor that immediately starts the pending webhook-event batch.",
                        }),
                    ],
                  })),
            (b[29] = u),
            (b[30] = v),
            (b[31] = w),
            (b[32] = P),
            (b[33] = H),
            (b[34] = p))
          : (p = b[34]),
        b[35] !== r || b[36] !== f || b[37] !== p
          ? ((x = (0, a.jsx)(X.t, {
              children: (0, a.jsx)(J.ic, { size: "compact", label: f, description: r, control: p }),
            })),
            (b[35] = r),
            (b[36] = f),
            (b[37] = p),
            (b[38] = x))
          : (x = b[38]),
        x
      )
    }
    function es(e) {
      return e.flushed_event_count ?? 0
    }
    function el() {
      return 0
    }
    function ei(e) {
      let t,
        n,
        i,
        N,
        H,
        F,
        W,
        $,
        Q,
        J,
        X,
        ee,
        et,
        en,
        ea,
        es,
        el,
        ei,
        eu,
        ec,
        em,
        eh,
        ef,
        eg,
        ep,
        ex,
        eb,
        ey,
        ev,
        e_,
        ew,
        ej,
        ek,
        eT,
        eA,
        eS,
        eM,
        eC,
        eE,
        eD,
        eI,
        eN,
        eR,
        eP,
        eL,
        eO,
        eU,
        ez,
        eq,
        eG,
        eK,
        eH,
        eF,
        eW,
        e$,
        eB = (0, o.c)(259),
        { ref: eV, item: eY, relatedActions: eZ, waitForInitialData: eQ, onOpen: eJ, onClose: eX } = e,
        e0 = (0, d.gh)(D.u),
        e1 = (0, m.A)(),
        e2 = (0, f.Zp)(),
        e3 = (0, f.zy)(),
        e4 = (0, C.wv)(),
        e5 = (0, d.Ul)(y.e),
        e6 = (0, c.useId)(),
        e7 = (0, c.useId)(),
        e8 = (0, c.useId)(),
        e9 = (0, I.a)(),
        te = (0, c.useRef)(null),
        tt = (0, c.useRef)(!1),
        tn = (0, c.useRef)(null),
        ta = (0, c.useRef)(null),
        { automation: to } = eY
      eB[0] !== e5 || eB[1] !== eY.teamId || eB[2] !== e0
        ? ((t = (e) => {
            let t = e0.get(g.chatGptAuthenticatedAccountId$),
              n = eY.teamId ?? e.team_id,
              a = {
                ...(0, Y.qz)(e, e5 ? "configuration" : void 0),
                cloudTeam: null != t && null != n ? { accountId: t, teamId: n } : null,
              }
            return e5 ? (0, j.$6)(a) : a
          }),
          (eB[0] = e5),
          (eB[1] = eY.teamId),
          (eB[2] = e0),
          (eB[3] = t))
        : (t = eB[3])
      let ts = t
      eB[4] !== to || eB[5] !== ts ? ((n = () => ts(to)), (eB[4] = to), (eB[5] = ts), (eB[6] = n)) : (n = eB[6])
      let [tl] = (0, c.useState)(n),
        [ti, tr] = (0, c.useState)(!1),
        td = (0, d._U)(!(void 0 !== eQ && eQ) || !e5 || B, tl)
      eB[7] !== ti || eB[8] !== eJ
        ? ((i = () => {
            ti || (tr(!0), eJ?.())
          }),
          (eB[7] = ti),
          (eB[8] = eJ),
          (eB[9] = i))
        : (i = eB[9])
      let tu = i
      eB[10] !== to.id || eB[11] !== tl || eB[12] !== e3.search || eB[13] !== e0
        ? ((N = () => {
            let e = (0, w.R4)(e0, new URLSearchParams(e3.search), to.id)
            return e?.draft.cloudTeam?.teamId === tl.cloudTeam?.teamId ? (e?.draft ?? tl) : tl
          }),
          (eB[10] = to.id),
          (eB[11] = tl),
          (eB[12] = e3.search),
          (eB[13] = e0),
          (eB[14] = N))
        : (N = eB[14])
      let [tc, tm] = (0, c.useState)(N)
      eB[15] !== tc.scheduleConfig.oneTimeDate || eB[16] !== tc.scheduleConfig.time
        ? ((H = (e) => {
            tm(
              e.scheduleConfig.oneTimeDate !== tc.scheduleConfig.oneTimeDate ||
                e.scheduleConfig.time !== tc.scheduleConfig.time
                ? { ...e, scheduleConfig: { ...e.scheduleConfig, oneTimeSeconds: 0 } }
                : e,
            )
          }),
          (eB[15] = tc.scheduleConfig.oneTimeDate),
          (eB[16] = tc.scheduleConfig.time),
          (eB[17] = H))
        : (H = eB[17])
      let th = H,
        [tf, tg] = (0, c.useState)(!1),
        [tp, tx] = (0, c.useState)(null),
        [tb, ty] = (0, c.useState)(!1),
        [tv, t_] = (0, c.useState)(null),
        [tw, tj] = (0, c.useState)(!1),
        { isPending: tk } = (0, d.Ul)(z.x2),
        { isPending: tT } = (0, d.Ul)(z.lu),
        tA = tb || tw || tk || tT,
        tS = tv ?? to
      eB[18] !== tS ? ((F = (0, U.Xr)(tS)), (eB[18] = tS), (eB[19] = F)) : (F = eB[19])
      let tM = "completed" === F
      eB[20] !== tS || eB[21] !== tM
        ? ((W = (0, U.RQ)(tS).canManage && !tM), (eB[20] = tS), (eB[21] = tM), (eB[22] = W))
        : (W = eB[22])
      let tC = W,
        tE = "condition_watch" === to.timing_mode
      eB[23] !== to ? (($ = (0, U.nT)(to)), (eB[23] = to), (eB[24] = $)) : ($ = eB[24])
      let tD = $
      eB[25] !== ts || eB[26] !== tl || eB[27] !== tv
        ? ((Q = null == tv ? tl : ts(tv)), (eB[25] = ts), (eB[26] = tl), (eB[27] = tv), (eB[28] = Q))
        : (Q = eB[28])
      let tI = Q
      eB[29] !== tS || eB[30] !== tc
        ? ((J = (0, Y.tV)(tS, tc)), (eB[29] = tS), (eB[30] = tc), (eB[31] = J))
        : (J = eB[31])
      let tN = J
      eB[32] !== tc || eB[33] !== tI
        ? ((X =
            tc.name !== tI.name ||
            (0, p.Tj)(tc) !== (0, p.Tj)(tI) ||
            (tc.eventTrigger?.when ?? "") !== (tI.eventTrigger?.when ?? "")),
          (eB[32] = tc),
          (eB[33] = tI),
          (eB[34] = X))
        : (X = eB[34])
      let tR = X
      eB[35] !== tS || eB[36] !== tc || eB[37] !== e4
        ? ((ee = (0, Y.Rd)(tS, tc, e4)), (eB[35] = tS), (eB[36] = tc), (eB[37] = e4), (eB[38] = ee))
        : (ee = eB[38])
      let tP = ee
      eB[39] !== tC ||
      eB[40] !== tS ||
      eB[41] !== tP ||
      eB[42] !== tc ||
      eB[43] !== tN ||
      eB[44] !== e5 ||
      eB[45] !== eY.teamId
        ? ((et =
            tC &&
            tN &&
            (null != eY.teamId || null != tS.team_id || r()(tc.environments, tS.environments) || (0, p.y5)(tc)) &&
            tc.name.trim().length > 0 &&
            tc.prompt.trim().length > 0 &&
            (!e5 || (tc.name.length <= 250 && !(0, u.wPy)((0, p.Tj)(tc, tS.prompt)))) &&
            null == tP &&
            (!tc.scheduleDirty || (0, P.SK)(tc.scheduleConfig))),
          (eB[39] = tC),
          (eB[40] = tS),
          (eB[41] = tP),
          (eB[42] = tc),
          (eB[43] = tN),
          (eB[44] = e5),
          (eB[45] = eY.teamId),
          (eB[46] = et))
        : (et = eB[46])
      let tL = et
      eB[47] !== to.id || eB[48] !== e3.search || eB[49] !== e0
        ? ((en = () => {
            ;(0, w.iP)(e0, new URLSearchParams(e3.search), to.id)
          }),
          (eB[47] = to.id),
          (eB[48] = e3.search),
          (eB[49] = e0),
          (eB[50] = en))
        : (en = eB[50])
      let tO = en
      eB[51] !== to.id ||
      eB[52] !== tc ||
      eB[53] !== tl ||
      eB[54] !== e3.pathname ||
      eB[55] !== e3.search ||
      eB[56] !== e0
        ? ((ea = () => {
            let e = (0, w.uU)(
              e0,
              { draft: tc, initialDraft: tl, hasSelectedSchedule: !0 },
              `${(0, R.d0)()}?${new URLSearchParams({ automationId: to.id, automationSource: "cloud", edit_modal: "true" })}`,
            )
            return null != e ? ((tn.current = tc), e) : e3.pathname + e3.search
          }),
          (eB[51] = to.id),
          (eB[52] = tc),
          (eB[53] = tl),
          (eB[54] = e3.pathname),
          (eB[55] = e3.search),
          (eB[56] = e0),
          (eB[57] = ea))
        : (ea = eB[57])
      let tU = ea
      eB[58] !== tO || eB[59] !== eX
        ? ((es = () => {
            let e = ta.current
            ;((ta.current = null), (tt.current = !0), tO(), eX(), e?.(!0))
          }),
          (eB[58] = tO),
          (eB[59] = eX),
          (eB[60] = es))
        : (es = eB[60])
      let tz = es
      eB[61] !== tz || eB[62] !== tR || eB[63] !== tA
        ? ((el = () => {
            tA || (tR ? tg(!0) : tz())
          }),
          (eB[61] = tz),
          (eB[62] = tR),
          (eB[63] = tA),
          (eB[64] = el))
        : (el = eB[64])
      let tq = el
      ;(eB[65] !== tA || eB[66] !== tq
        ? ((ei = () => ({
            requestClose: () =>
              tA || null != ta.current
                ? Promise.resolve(!1)
                : new Promise((e) => {
                    ;((ta.current = e), tq())
                  }),
          })),
          (eB[65] = tA),
          (eB[66] = tq),
          (eB[67] = ei))
        : (ei = eB[67]),
        (0, c.useImperativeHandle)(eV, ei),
        eB[68] !== tL ||
        eB[69] !== tO ||
        eB[70] !== tS ||
        eB[71] !== tc ||
        eB[72] !== e1 ||
        eB[73] !== e9 ||
        eB[74] !== tA ||
        eB[75] !== eX ||
        eB[76] !== e0
          ? ((eu = () => {
              if (tA || null != te.current || !tL) return
              let e = e0.get(g.chatGptAuthenticatedAccountId$),
                t = new AbortController()
              ;((te.current = t), ty(!0))
              let n = () => !t.signal.aborted && e9() && e0.get(g.chatGptAuthenticatedAccountId$) === e
              ;(0, K.CN)(e0, { automation: tS, draft: tc, signal: t.signal })
                .then(() => {
                  n() && ((tt.current = !0), tO(), eX())
                })
                .catch((e) => {
                  n() &&
                    e0
                      .get(M.Id)
                      .danger(
                        e1.formatMessage({
                          id: "automations.scheduled.editor.saveError",
                          defaultMessage: "Couldn’t save task",
                          description:
                            "Error toast when a Scheduled task edit could not be saved; the editor stays open with the user's draft intact",
                        }),
                        {
                          errorAnalytics: { toastId: "automations.scheduled.editor.saveError" },
                          description: e instanceof Error ? e.message : void 0,
                        },
                      )
                })
                .finally(() => {
                  ;((te.current = null), e9() && ty(!1))
                })
            }),
            (eB[68] = tL),
            (eB[69] = tO),
            (eB[70] = tS),
            (eB[71] = tc),
            (eB[72] = e1),
            (eB[73] = e9),
            (eB[74] = tA),
            (eB[75] = eX),
            (eB[76] = e0),
            (eB[77] = eu))
          : (eu = eB[77]))
      let tG = eu
      ;(eB[78] === Symbol.for("react.memo_cache_sentinel")
        ? ((ec = () => () => {
            ;(te.current?.abort(), ta.current?.(!1))
          }),
          (em = []),
          (eB[78] = ec),
          (eB[79] = em))
        : ((ec = eB[78]), (em = eB[79])),
        (0, c.useEffect)(ec, em),
        eB[80] !== tc
          ? ((eh = (e) => {
              tn.current !== tc && e.preventDefault()
            }),
            (eB[80] = tc),
            (eB[81] = eh))
          : (eh = eB[81]))
      let tK = (0, c.useEffectEvent)(eh)
      ;(eB[82] !== tR || eB[83] !== tK
        ? ((ef = () => {
            if (tR)
              return (window.addEventListener("beforeunload", tK), () => window.removeEventListener("beforeunload", tK))
          }),
          (eB[82] = tR),
          (eB[83] = tK),
          (eB[84] = ef))
        : (ef = eB[84]),
        eB[85] !== tR ? ((eg = [tR]), (eB[85] = tR), (eB[86] = eg)) : (eg = eB[86]),
        (0, c.useEffect)(ef, eg))
      let tH = tE ? "text-sm leading-5 font-medium uppercase" : "text-base leading-7 font-normal",
        tF = tE || (tS.is_enabled && !tM) ? "text-info" : "text-tertiary"
      ;(eB[87] !== tH || eB[88] !== tF
        ? ((ep = (0, l.A)("select-none", tH, tF)), (eB[87] = tH), (eB[88] = tF), (eB[89] = ep))
        : (ep = eB[89]),
        eB[90] !== tS || eB[91] !== tE || eB[92] !== eY.teamId
          ? ((ex = tE
              ? (0, a.jsx)(h.A, {
                  id: "automations.scheduled.editor.monitoring",
                  defaultMessage: "Monitoring",
                  description: "Task type in the Scheduled editor for a task watching for changes",
                })
              : (0, a.jsx)(G.p, { automation: tS, teamId: eY.teamId })),
            (eB[90] = tS),
            (eB[91] = tE),
            (eB[92] = eY.teamId),
            (eB[93] = ex))
          : (ex = eB[93]),
        eB[94] !== ep || eB[95] !== ex
          ? ((eb = (0, a.jsx)("p", { className: ep, children: ex })), (eB[94] = ep), (eB[95] = ex), (eB[96] = eb))
          : (eb = eB[96]),
        eB[97] !== e1
          ? ((ey = e1.formatMessage({
              id: "automations.editor.title",
              defaultMessage: "Title",
              description: "Accessible label for the editable title in the Scheduled task editor",
            })),
            (eB[97] = e1),
            (eB[98] = ey))
          : (ey = eB[98]))
      let tW = !tC
      ;(eB[99] === Symbol.for("react.memo_cache_sentinel")
        ? ((ev = (e) => tm((t) => ({ ...t, name: e.target.value }))), (eB[99] = ev))
        : (ev = eB[99]),
        eB[100] !== tc.name || eB[101] !== tA || eB[102] !== ey || eB[103] !== tW || eB[104] !== e6
          ? ((e_ = (0, a.jsx)("textarea", {
              id: e6,
              className:
                "m-0 block field-sizing-content w-full min-w-0 resize-none overflow-hidden rounded-lg border-0 bg-transparent p-0 text-lg leading-7 font-medium wrap-anywhere text-default outline-none",
              name: "title",
              "aria-label": ey,
              rows: 1,
              readOnly: tW,
              disabled: tA,
              value: tc.name,
              onChange: ev,
              onKeyDown: er,
            })),
            (eB[100] = tc.name),
            (eB[101] = tA),
            (eB[102] = ey),
            (eB[103] = tW),
            (eB[104] = e6),
            (eB[105] = e_))
          : (e_ = eB[105]),
        eB[106] !== eb || eB[107] !== e_
          ? ((ew = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [eb, e_] })),
            (eB[106] = eb),
            (eB[107] = e_),
            (eB[108] = ew))
          : (ew = eB[108]))
      let t$ = ew
      eB[109] !== tC || eB[110] !== tS || eB[111] !== e5 || eB[112] !== tA || eB[113] !== eY
        ? ((ej = tC
            ? (0, a.jsx)(O.s, {
                item: { ...eY, automation: tS },
                statusMutation: z.x2,
                onStatusChanged: t_,
                renderActions: (e) => {
                  let { isPaused: t, isStatusPending: n, pauseAction: o, resumeAction: s } = e
                  return (0, a.jsx)(V.Q, {
                    isPaused: t,
                    isPending: n ?? !1,
                    disabled: tA || !0 === (t ? s : o).disabled,
                    disabledReason: t ? s.disabledReason : void 0,
                    onClick: (t ? s : o).onSelect,
                    size: e5 ? "dialogAction" : "medium",
                  })
                },
              })
            : null),
          (eB[109] = tC),
          (eB[110] = tS),
          (eB[111] = e5),
          (eB[112] = tA),
          (eB[113] = eY),
          (eB[114] = ej))
        : (ej = eB[114])
      let tB = ej,
        tV = !tL || tA
      ;(eB[115] === Symbol.for("react.memo_cache_sentinel")
        ? ((ek = (0, a.jsx)(h.A, {
            id: "automations.scheduled.editor.save",
            defaultMessage: "Save",
            description: "Button that saves edited Scheduled task instructions and schedule",
          })),
          (eB[115] = ek))
        : (ek = eB[115]),
        eB[116] !== e8 || eB[117] !== tb || eB[118] !== tV
          ? ((eT = (0, a.jsx)(T.$, { disabled: tV, loading: tb, form: e8, type: "submit", children: ek })),
            (eB[116] = e8),
            (eB[117] = tb),
            (eB[118] = tV),
            (eB[119] = eT))
          : (eT = eB[119]),
        eB[120] !== tB || eB[121] !== eT
          ? ((eA = (0, a.jsxs)(S.Es, { expandSingleButton: !1, children: [tB, eT] })),
            (eB[120] = tB),
            (eB[121] = eT),
            (eB[122] = eA))
          : (eA = eB[122]))
      let tY = eA
      ;(eB[123] !== tG
        ? ((eS = (e) => (0, E.k)(e, () => tG())),
          (eM = (e) => {
            ;(e.preventDefault(), tG())
          }),
          (eB[123] = tG),
          (eB[124] = eS),
          (eB[125] = eM))
        : ((eS = eB[124]), (eM = eB[125])),
        eB[126] === Symbol.for("react.memo_cache_sentinel")
          ? ((eC = (0, a.jsx)(A.L3, {
              className: "sr-only",
              children: (0, a.jsx)(h.A, {
                id: "automations.scheduled.editor.title",
                defaultMessage: "Edit task",
                description: "Accessible title of the Scheduled task editor dialog",
              }),
            })),
            (eB[126] = eC))
          : (eC = eB[126]),
        eB[127] !== t$
          ? ((eE = (0, a.jsxs)(S.OO, { children: [eC, t$] })), (eB[127] = t$), (eB[128] = eE))
          : (eE = eB[128]),
        eB[129] !== tu
          ? ((eD = (e) => {
              null != e && tu()
            }),
            (eB[129] = tu),
            (eB[130] = eD))
          : (eD = eB[130]))
      let tZ = !tC || tA
      eB[131] !== tS || eB[132] !== tD || eB[133] !== e2
        ? ((eI = tD
            ? (0, a.jsx)(q.C, {
                triggers: tS.webhook_triggers,
                isAutomationEnabled: tS.is_enabled,
                showUnavailableConditions: !1,
                onOpenTrigger: (e) => {
                  e2(`/settings/connectors?${new URLSearchParams({ connector: e.connector_id })}`)
                },
              })
            : null),
          (eB[131] = tS),
          (eB[132] = tD),
          (eB[133] = e2),
          (eB[134] = eI))
        : (eI = eB[134])
      let tQ = `${e7}-label`
      ;(eB[135] === Symbol.for("react.memo_cache_sentinel")
        ? ((eN = (0, a.jsx)(h.A, {
            id: "automations.editor.promptSectionLabel",
            defaultMessage: "Prompt",
            description: "Label above the editable instructions in the Scheduled task editor",
          })),
          (eB[135] = eN))
        : (eN = eB[135]),
        eB[136] !== e7 || eB[137] !== tQ
          ? ((eR = (0, a.jsx)("label", { id: tQ, className: "uppercase select-none", htmlFor: e7, children: eN })),
            (eB[136] = e7),
            (eB[137] = tQ),
            (eB[138] = eR))
          : (eR = eB[138]))
      let tJ = `${e7}-label`,
        tX = `${e7}-label`,
        t0 = !tC
      ;(eB[139] === Symbol.for("react.memo_cache_sentinel")
        ? ((eP = (e) => tm((t) => ({ ...t, prompt: e.target.value }))), (eB[139] = eP))
        : (eP = eB[139]),
        eB[140] !== tc.prompt || eB[141] !== e7 || eB[142] !== tX || eB[143] !== t0
          ? ((eL = (0, a.jsx)("textarea", {
              id: e7,
              className:
                "m-0 block field-sizing-content max-h-56 min-h-28 w-full min-w-0 resize-none overflow-y-auto border-0 bg-transparent p-0 text-base leading-7 font-normal wrap-anywhere text-default outline-none",
              "aria-labelledby": tX,
              name: "prompt",
              readOnly: t0,
              rows: 1,
              value: tc.prompt,
              onChange: eP,
            })),
            (eB[140] = tc.prompt),
            (eB[141] = e7),
            (eB[142] = tX),
            (eB[143] = t0),
            (eB[144] = eL))
          : (eL = eB[144]),
        eB[145] !== tJ || eB[146] !== eL
          ? ((eO = (0, a.jsx)("label", {
              className: "block cursor-text rounded-[20px] border border-default p-6 focus-within:border-ring",
              "aria-labelledby": tJ,
              children: eL,
            })),
            (eB[145] = tJ),
            (eB[146] = eL),
            (eB[147] = eO))
          : (eO = eB[147]),
        eB[148] !== eR || eB[149] !== eO
          ? ((eU = (0, a.jsx)(L.C, { title: eR, children: eO })), (eB[148] = eR), (eB[149] = eO), (eB[150] = eU))
          : (eU = eB[150]),
        eB[151] !== to.conversation_id ||
        eB[152] !== to.source_conversation_is_work_mode ||
        eB[153] !== tC ||
        eB[154] !== tS ||
        eB[155] !== tN ||
        eB[156] !== tA ||
        eB[157] !== tw ||
        eB[158] !== tD ||
        eB[159] !== e2 ||
        eB[160] !== eX
          ? ((ez =
              tD && !0 === to.source_conversation_is_work_mode
                ? (0, a.jsx)(eo, {
                    automation: tS,
                    disabled: !tC || tA,
                    hasChanges: tN,
                    isRunning: tw,
                    onRunningChange: tj,
                    onStarted: () => {
                      ;((tt.current = !0), eX(), null != to.conversation_id && e2((0, k.mv)(to.conversation_id)))
                    },
                  })
                : null),
            (eB[151] = to.conversation_id),
            (eB[152] = to.source_conversation_is_work_mode),
            (eB[153] = tC),
            (eB[154] = tS),
            (eB[155] = tN),
            (eB[156] = tA),
            (eB[157] = tw),
            (eB[158] = tD),
            (eB[159] = e2),
            (eB[160] = eX),
            (eB[161] = ez))
          : (ez = eB[161]),
        eB[162] !== tS || eB[163] !== tc || eB[164] !== tD
          ? ((eq = tD ? null : (0, a.jsx)(Z.V, { automation: tS, draft: tc, onChange: tm })),
            (eB[162] = tS),
            (eB[163] = tc),
            (eB[164] = tD),
            (eB[165] = eq))
          : (eq = eB[165]),
        eB[166] !== tP
          ? ((eG =
              null == tP
                ? null
                : (0, a.jsxs)("p", {
                    className: "text-sm text-danger select-none",
                    role: "alert",
                    children: [
                      "too-far" === tP &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.dateTooFar",
                          defaultMessage: "Choose a date within the next two years",
                          description:
                            "Validation error in the Scheduled task editor when a one-time task is scheduled two years or more in the future",
                        }),
                      "end-past" === tP &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.endDateInPast",
                          defaultMessage: "Choose an end date today or later",
                          description:
                            "Validation error in the Scheduled task editor when a recurrence end date is in the past",
                        }),
                      "past" === tP &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.dateInPast",
                          defaultMessage: "Choose a date and time in the future",
                          description:
                            "Validation error in the Scheduled task editor when a one-time task is scheduled in the past",
                        }),
                    ],
                  })),
            (eB[166] = tP),
            (eB[167] = eG))
          : (eG = eB[167]),
        eB[168] !== eD ||
        eB[169] !== tZ ||
        eB[170] !== eI ||
        eB[171] !== eU ||
        eB[172] !== ez ||
        eB[173] !== eq ||
        eB[174] !== eG
          ? ((eK = (0, a.jsxs)("fieldset", {
              ref: eD,
              className: "flex min-w-0 flex-col gap-6",
              disabled: tZ,
              children: [eI, eU, ez, eq, eG],
            })),
            (eB[168] = eD),
            (eB[169] = tZ),
            (eB[170] = eI),
            (eB[171] = eU),
            (eB[172] = ez),
            (eB[173] = eq),
            (eB[174] = eG),
            (eB[175] = eK))
          : (eK = eB[175]),
        eB[176] !== tY ? ((eH = (0, a.jsx)(S.OO, { children: tY })), (eB[176] = tY), (eB[177] = eH)) : (eH = eB[177]),
        eB[178] !== e8 ||
        eB[179] !== eZ ||
        eB[180] !== eS ||
        eB[181] !== eM ||
        eB[182] !== eE ||
        eB[183] !== eK ||
        eB[184] !== eH
          ? ((eF = (0, a.jsxs)(S.R4, {
              as: "form",
              id: e8,
              size: "viewport",
              onKeyDown: eS,
              onSubmit: eM,
              children: [eE, eZ, eK, eH],
            })),
            (eB[178] = e8),
            (eB[179] = eZ),
            (eB[180] = eS),
            (eB[181] = eM),
            (eB[182] = eE),
            (eB[183] = eK),
            (eB[184] = eH),
            (eB[185] = eF))
          : (eF = eB[185]))
      let t1 = eF
      if (e5) {
        let e, t, n, o, s, l, i
        if (tD) {
          let t
          ;(eB[186] !== tS.is_enabled || eB[187] !== tS.webhook_triggers
            ? ((t = (0, a.jsx)(q.C, {
                variant: "form",
                triggers: tS.webhook_triggers,
                isAutomationEnabled: tS.is_enabled,
                showUnavailableConditions: !1,
              })),
              (eB[186] = tS.is_enabled),
              (eB[187] = tS.webhook_triggers),
              (eB[188] = t))
            : (t = eB[188]),
            (e = t))
        } else if (tE) {
          let t
          ;(eB[189] !== tS || eB[190] !== tc
            ? ((t = (0, a.jsx)(Z.V, { form: !0, automation: tS, draft: tc, onChange: tm })),
              (eB[189] = tS),
              (eB[190] = tc),
              (eB[191] = t))
            : (t = eB[191]),
            (e = t))
        } else {
          let t,
            n,
            o,
            s = null == tc.cloudTeam && null == eY.teamId
          ;(eB[192] !== to || eB[193] !== ts || eB[194] !== th || eB[195] !== tc.scheduleConfig.oneTimeDate
            ? ((t = (e) => {
                if (
                  null != tc.scheduleConfig.oneTimeDate &&
                  null == e.scheduleConfig.oneTimeDate &&
                  null == e.webhookTriggers
                ) {
                  let { untilDate: t, untilTime: n } = ts(to).scheduleConfig
                  th({ ...e, scheduleConfig: { ...e.scheduleConfig, untilDate: t, untilTime: n } })
                  return
                }
                th(e)
              }),
              (eB[192] = to),
              (eB[193] = ts),
              (eB[194] = th),
              (eB[195] = tc.scheduleConfig.oneTimeDate),
              (eB[196] = t))
            : (t = eB[196]),
            eB[197] !== th || eB[198] !== tc
              ? ((n = (e) => {
                  th({
                    ...tc,
                    rawRrule: null,
                    scheduleDirty: !0,
                    scheduleConfig: { ...tc.scheduleConfig, untilDate: e, untilTime: null == e ? void 0 : "23:59:59" },
                  })
                }),
                (eB[197] = th),
                (eB[198] = tc),
                (eB[199] = n))
              : (n = eB[199]),
            eB[200] !== tc || eB[201] !== s || eB[202] !== t || eB[203] !== n
              ? ((o = (0, a.jsx)(v.q, {
                  personal: s,
                  draft: tc,
                  onChange: t,
                  onChangeEndDate: n,
                  executionLocation: "cloud",
                })),
                (eB[200] = tc),
                (eB[201] = s),
                (eB[202] = t),
                (eB[203] = n),
                (eB[204] = o))
              : (o = eB[204]),
            (e = o))
        }
        eB[205] !== tC || eB[206] !== tl || eB[207] !== tE || eB[208] !== tD
          ? ((t = tC
              ? {
                  executionLocation: "cloud",
                  hasSelectedSchedule: !0,
                  initialDraft: tl,
                  triggerMode: tD || tE ? "read-only" : "time",
                }
              : void 0),
            (eB[205] = tC),
            (eB[206] = tl),
            (eB[207] = tE),
            (eB[208] = tD),
            (eB[209] = t))
          : (t = eB[209])
        let r = tb || tw || tT,
          d = !tC
        eB[210] !== tG
          ? ((n = (e) => {
              ;(e.preventDefault(), tG())
            }),
            (eB[210] = tG),
            (eB[211] = n))
          : (n = eB[211])
        let u = null == tS.aeon_id && "local" !== tS.executor
        ;(eB[212] !== tc || eB[213] !== eY.teamId || eB[214] !== u
          ? ((o = (0, a.jsx)(x.u, {
              draft: tc,
              setDraft: tm,
              executionLocation: "cloud",
              teamId: eY.teamId,
              supportsRemoteExecutors: u,
            })),
            (eB[212] = tc),
            (eB[213] = eY.teamId),
            (eB[214] = u),
            (eB[215] = o))
          : (o = eB[215]),
          eB[216] !== tc || eB[217] !== eY.teamId
            ? ((s =
                null == tc.cloudTeam && null == eY.teamId
                  ? null
                  : (0, a.jsx)(_.j, { draft: tc, onChange: tm, teamId: eY.teamId })),
              (eB[216] = tc),
              (eB[217] = eY.teamId),
              (eB[218] = s))
            : (s = eB[218]),
          eB[219] !== tc || eB[220] !== tU || eB[221] !== eY.teamId
            ? ((l = (0, a.jsx)(_.n, { draft: tc, teamId: eY.teamId, getOAuthReturnTo: tU })),
              (eB[219] = tc),
              (eB[220] = tU),
              (eB[221] = eY.teamId),
              (eB[222] = l))
            : (l = eB[222]),
          eB[223] !== tL ||
          eB[224] !== th ||
          eB[225] !== tP ||
          eB[226] !== tc ||
          eB[227] !== tU ||
          eB[228] !== tu ||
          eB[229] !== tk ||
          eB[230] !== tq ||
          eB[231] !== e ||
          eB[232] !== tB ||
          eB[233] !== t ||
          eB[234] !== r ||
          eB[235] !== d ||
          eB[236] !== n ||
          eB[237] !== o ||
          eB[238] !== s ||
          eB[239] !== l
            ? ((i = (0, a.jsx)(b.L, {
                onOpen: tu,
                executionLocation: "cloud",
                setup: t,
                getOAuthReturnTo: tU,
                draft: tc,
                onChange: th,
                onClose: tq,
                canSave: tL,
                isSaving: r,
                isChangingStatus: tk,
                disabled: d,
                statusAction: tB,
                onSubmit: n,
                dateError: tP,
                schedule: e,
                advanced: o,
                owner: s,
                plugins: l,
              })),
              (eB[223] = tL),
              (eB[224] = th),
              (eB[225] = tP),
              (eB[226] = tc),
              (eB[227] = tU),
              (eB[228] = tu),
              (eB[229] = tk),
              (eB[230] = tq),
              (eB[231] = e),
              (eB[232] = tB),
              (eB[233] = t),
              (eB[234] = r),
              (eB[235] = d),
              (eB[236] = n),
              (eB[237] = o),
              (eB[238] = s),
              (eB[239] = l),
              (eB[240] = i))
            : (i = eB[240]),
          (eW = i))
      } else {
        let e, t, n, o
        eB[241] !== tq
          ? ((e = (e) => {
              e || tq()
            }),
            (eB[241] = tq),
            (eB[242] = e))
          : (e = eB[242])
        let l = tp ?? void 0
        ;(eB[243] !== t1 || eB[244] !== l
          ? ((t = (0, a.jsx)(s.z, { radixPortalContainer: l, children: t1 })),
            (eB[243] = t1),
            (eB[244] = l),
            (eB[245] = t))
          : (t = eB[245]),
          eB[246] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("div", { ref: tx })), (eB[246] = n))
            : (n = eB[246]),
          eB[247] !== e || eB[248] !== t
            ? ((o = (0, a.jsxs)(A.lG, {
                contentOverflow: "visible",
                open: !0,
                size: "xwide",
                variant: "chatgpt",
                onOpenChange: e,
                children: [t, n],
              })),
              (eB[247] = e),
              (eB[248] = t),
              (eB[249] = o))
            : (o = eB[249]),
          (eW = o))
      }
      return (
        eB[250] !== tO ||
        eB[251] !== eW ||
        eB[252] !== tz ||
        eB[253] !== ti ||
        eB[254] !== tR ||
        eB[255] !== td ||
        eB[256] !== tA ||
        eB[257] !== tf
          ? ((e$ =
              ti || td
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      eW,
                      (0, a.jsx)(ed, {
                        isPending: tA,
                        shouldBlock: () => (tR || tA) && !tt.current,
                        onDiscardNavigation: tO,
                        dismissal: tf
                          ? {
                              onCancel: () => {
                                ;(tg(!1), ta.current?.(!1), (ta.current = null))
                              },
                              onDiscard: tz,
                            }
                          : null,
                      }),
                    ],
                  })
                : null),
            (eB[250] = tO),
            (eB[251] = eW),
            (eB[252] = tz),
            (eB[253] = ti),
            (eB[254] = tR),
            (eB[255] = td),
            (eB[256] = tA),
            (eB[257] = tf),
            (eB[258] = e$))
          : (e$ = eB[258]),
        e$
      )
    }
    function er(e) {
      "Enter" !== e.key ||
        e.shiftKey ||
        e.nativeEvent.isComposing ||
        (e.preventDefault(), e.currentTarget.form?.requestSubmit())
    }
    function ed(e) {
      let t,
        n = (0, o.c)(3),
        s = (0, c.useContext)(f.hf)
      return (
        n[0] !== s || n[1] !== e
          ? ((t = null == s ? (0, a.jsx)(ec, { ...e }) : (0, a.jsx)(eu, { ...e })), (n[0] = s), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function eu(e) {
      let t,
        n = (0, o.c)(3),
        s = (0, N.e)(e.shouldBlock)
      return (
        n[0] !== s || n[1] !== e
          ? ((t = (0, a.jsx)(ec, { ...e, blocker: s })), (n[0] = s), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function ec(e) {
      let t,
        n,
        s,
        l,
        i,
        r,
        d,
        u,
        c,
        m,
        f,
        g,
        p,
        x,
        b = (0, o.c)(30),
        { blocker: y, dismissal: v, isPending: _, onDiscardNavigation: w } = e,
        j = y?.state === "blocked" ? y : null
      if (j?.isCommitting || (null == j && null == v)) return null
      let k = null == j ? (v?.isPending ?? _) : _
      b[0] !== v || b[1] !== j
        ? ((t = () => {
            ;(v?.onCancel(), j?.reset())
          }),
          (b[0] = v),
          (b[1] = j),
          (b[2] = t))
        : (t = b[2])
      let M = t
      b[3] !== v || b[4] !== j || b[5] !== w
        ? ((n = () => {
            null == j ? v?.onDiscard() : (v?.onCancel(), w?.(), j.proceed())
          }),
          (b[3] = v),
          (b[4] = j),
          (b[5] = w),
          (b[6] = n))
        : (n = b[6])
      let C = n
      return (
        b[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { shouldStopPointerDownPropagation: !1 }), (b[7] = s))
          : (s = b[7]),
        b[8] !== M
          ? ((l = (e) => {
              e || M()
            }),
            (b[8] = M),
            (b[9] = l))
          : (l = b[9]),
        b[10] !== C || b[11] !== k
          ? ((i = (e) => {
              ;(e.preventDefault(), k || C())
            }),
            (b[10] = C),
            (b[11] = k),
            (b[12] = i))
          : (i = b[12]),
        b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(A.L3, {
              className: "text-form-title",
              children: (0, a.jsx)(h.A, {
                id: "automations.editor.discardChangesTitle",
                defaultMessage: "Discard changes?",
                description: "Confirmation title when closing the Scheduled task editor with unsaved changes",
              }),
            })),
            (b[13] = r))
          : (r = b[13]),
        b[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(S.OO, {
              children: (0, a.jsx)(S.c7, {
                subtitleSize: "sm",
                subtitleTone: "secondary",
                title: r,
                subtitle: (0, a.jsx)(A.rr, {
                  className: "text-form-body font-normal",
                  children: (0, a.jsx)(h.A, {
                    id: "automations.scheduled.editor.discardDescription",
                    defaultMessage: "Your changes will not be saved",
                    description: "Warning in the discard confirmation for the Scheduled task editor",
                  }),
                }),
              }),
            })),
            (b[14] = d))
          : (d = b[14]),
        b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(h.A, {
              id: "automations.editor.keepEditing",
              defaultMessage: "Keep editing",
              description: "Button that returns to the Scheduled task editor without discarding the draft",
            })),
            (b[15] = u))
          : (u = b[15]),
        b[16] !== M
          ? ((c = (0, a.jsx)(T.$, {
              color: "secondary",
              focusRing: "surface",
              size: "dialogAction",
              type: "button",
              onClick: M,
              children: u,
            })),
            (b[16] = M),
            (b[17] = c))
          : (c = b[17]),
        b[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(h.A, {
              id: "automations.editor.discardChanges",
              defaultMessage: "Discard changes",
              description: "Button that closes the Scheduled task editor and discards unsaved changes",
            })),
            (b[18] = m))
          : (m = b[18]),
        b[19] !== k
          ? ((f = (0, a.jsx)(T.$, { color: "danger", disabled: k, size: "dialogAction", type: "submit", children: m })),
            (b[19] = k),
            (b[20] = f))
          : (f = b[20]),
        b[21] !== f || b[22] !== c
          ? ((g = (0, a.jsx)(S.OO, { children: (0, a.jsxs)(S.Es, { children: [c, f] }) })),
            (b[21] = f),
            (b[22] = c),
            (b[23] = g))
          : (g = b[23]),
        b[24] !== g || b[25] !== i
          ? ((p = (0, a.jsxs)(S.R4, { as: "form", onSubmit: i, children: [d, g] })),
            (b[24] = g),
            (b[25] = i),
            (b[26] = p))
          : (p = b[26]),
        b[27] !== p || b[28] !== l
          ? ((x = (0, a.jsx)(A.lG, {
              open: !0,
              showDialogClose: !1,
              size: "narrow",
              variant: "form",
              contentProps: s,
              onOpenChange: l,
              children: p,
            })),
            (b[27] = p),
            (b[28] = l),
            (b[29] = x))
          : (x = b[29]),
        x
      )
    }
  },
  qjUD(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("slpy"),
      l = n("oyxz"),
      i = n("ygO2")
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            n,
            r,
            d = (0, o.c)(13),
            { isPaused: u, isPending: c, disabled: m, disabledReason: h, onClick: f, size: g } = e,
            p = void 0 === g ? "dialogAction" : g,
            x = c || void 0,
            b = m || void 0,
            y = m && null == h,
            v = m ? void 0 : f
          return (
            d[0] !== u
              ? ((t = u
                  ? (0, a.jsx)(l.A, {
                      id: "inbox.automations.resumeTooltip",
                      defaultMessage: "Resume",
                      description: "Tooltip label for resuming an automation",
                    })
                  : (0, a.jsx)(l.A, {
                      id: "inbox.automations.pauseTooltip",
                      defaultMessage: "Pause",
                      description: "Tooltip label for pausing an automation",
                    })),
                (d[0] = u),
                (d[1] = t))
              : (t = d[1]),
            d[2] !== c || d[3] !== p || d[4] !== x || d[5] !== b || d[6] !== y || d[7] !== v || d[8] !== t
              ? ((n = (0, a.jsx)(i.$, {
                  "aria-busy": x,
                  "aria-disabled": b,
                  color: "secondary",
                  radius: "full",
                  size: p,
                  type: "button",
                  disabled: y,
                  loading: c,
                  onClick: v,
                  children: t,
                })),
                (d[2] = c),
                (d[3] = p),
                (d[4] = x),
                (d[5] = b),
                (d[6] = y),
                (d[7] = v),
                (d[8] = t),
                (d[9] = n))
              : (n = d[9]),
            d[10] !== h || d[11] !== n
              ? ((r = (0, a.jsx)(s.m, { content: h, children: n })), (d[10] = h), (d[11] = n), (d[12] = r))
              : (r = d[12]),
            r
          )
        },
      },
    )
  },
  R2L4(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("bFOP"),
      l = n("slpy"),
      i = n("fxCc"),
      r = n("i5ac"),
      d = n.n(r),
      u = n("zTeN"),
      c = n("oyxz"),
      m = n("hOO0"),
      h = n("FpcZ"),
      f = n("SPnB"),
      g = n("fcqj"),
      p = n("FvYa"),
      x = n("ygO2"),
      b = n("GO7r"),
      y = n("RNul"),
      v = n("AWNZ"),
      _ = n("ZEx5"),
      w = n("rCoD"),
      j = n("k7o2"),
      k = n("sujc"),
      T = n("nvO1")
    function A(e) {
      let t,
        n,
        s = (0, o.c)(13),
        { team: l, getOAuthReturnTo: i } = e,
        { data: r, error: d, refetch: m } = (0, u._U)(T.Bn, l)
      s[0] !== r ? ((t = null == r ? null : (0, T.id)(r)), (s[0] = r), (s[1] = t)) : (t = s[1])
      let h = t
      if (null != h) {
        let e
        return (
          s[2] !== i || s[3] !== h || s[4] !== l
            ? ((e = (0, a.jsx)(S, { getOAuthReturnTo: i, ...l, serviceAccountId: h }, h)),
              (s[2] = i),
              (s[3] = h),
              (s[4] = l),
              (s[5] = e))
            : (e = s[5]),
          e
        )
      }
      s[6] !== r ? ((n = null == r ? (0, a.jsx)(y.y, {}) : (0, a.jsx)(O, {})), (s[6] = r), (s[7] = n)) : (n = s[7])
      let f = n
      if (null != d) {
        let e, t, n
        ;(s[8] !== m ? ((e = () => void m()), (s[8] = m), (s[9] = e)) : (e = s[9]),
          s[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(c.A, {
                id: "automations.configuration.retryPlugins",
                defaultMessage: "Couldn’t load plugins. Retry",
                description: "Retries loading team plugins after a request fails",
              })),
              (s[10] = t))
            : (t = s[10]),
          s[11] !== e
            ? ((n = (0, a.jsx)(x.$, { color: "ghost", size: "toolbar", onClick: e, children: t })),
              (s[11] = e),
              (s[12] = n))
            : (n = s[12]),
          (f = n))
      }
      return f
    }
    function S(e) {
      let t,
        n,
        s,
        l,
        r,
        f,
        v,
        _,
        w,
        A = (0, o.c)(22)
      A[0] !== e ? (({ getOAuthReturnTo: t, ...n } = e), (A[0] = e), (A[1] = t), (A[2] = n)) : ((t = A[1]), (n = A[2]))
      let S = (0, u._U)(T.rN, n.accountId),
        { data: R, error: P, isLoading: L, refetch: U } = (0, u._U)(k.T, n),
        { error: z, isPending: q, refetch: G } = (0, u._U)(j.WD, n)
      A[3] !== n ? ((s = { ...n, view: "installed", query: "" }), (A[3] = n), (A[4] = s)) : (s = A[4])
      let { data: K, error: H, isLoading: F, refetch: W, hasNextPage: $ } = (0, u._U)(j.Ys, s),
        B = d()(R?.links.filter(I), D),
        { data: V } = (0, i.E)(
          (0, h.getHostedAppsContentQueriesOptions)({ accountId: n.accountId, appIds: B.map(E), enabled: S }),
        )
      A[5] !== V ? ((l = new Map(V?.map(C))), (A[5] = V), (A[6] = l)) : (l = A[6])
      let Y = l
      A[7] !== Y
        ? ((r = (e) => ({
            id: e.link_id,
            name: (0, a.jsx)(c.A, {
              id: "automations.configuration.workspacePluginName",
              defaultMessage: "{connectionName} · Workspace",
              description: "Name of a plugin connection provided by the workspace, followed by its source",
              values: { connectionName: e.name },
            }),
            logo: (0, a.jsx)(p.R, {
              alt: e.connector_name,
              connectorId: e.connector_id,
              knownAppId: e.connector_name,
              logoUrl: Y.get((0, m.$)(e.connector_id))?.light,
              logoDarkUrl: Y.get((0, m.$)(e.connector_id))?.dark,
              size: 20,
              fallback: (0, a.jsx)(b.wdY, {}),
            }),
          })),
          (A[7] = Y),
          (A[8] = r))
        : (r = A[8])
      let Z = [
        ...B.map(r),
        ...(K ?? [])
          .filter(
            (e) => !B.some((t) => null != e.connector_id && (0, m.$)(t.connector_id) === (0, m.$)(e.connector_id)),
          )
          .map(M),
      ]
      A[9] !== q || A[10] !== F || A[11] !== L
        ? ((f = q || F || L ? (0, a.jsx)(y.y, {}) : null), (A[9] = q), (A[10] = F), (A[11] = L), (A[12] = f))
        : (f = A[12])
      let Q =
        null != z || null != H || null != P
          ? (0, a.jsx)(x.$, {
              color: "ghost",
              size: "toolbar",
              onClick: () => {
                ;(U(), G(), W())
              },
              children: (0, a.jsx)(c.A, {
                id: "automations.configuration.retryPlugins",
                defaultMessage: "Couldn’t load plugins. Retry",
                description: "Retries loading team plugins after a request fails",
              }),
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(N, { plugins: Z, hasNextPage: $ }),
                null == K || L || 0 !== Z.length ? null : (0, a.jsx)(O, {}),
              ],
            })
      return (
        A[13] !== f || A[14] !== Q
          ? ((v = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [f, Q] })),
            (A[13] = f),
            (A[14] = Q),
            (A[15] = v))
          : (v = A[15]),
        A[16] !== t || A[17] !== n
          ? ((_ = (0, a.jsx)(g.f, { ...n, getOAuthReturnTo: t })), (A[16] = t), (A[17] = n), (A[18] = _))
          : (_ = A[18]),
        A[19] !== v || A[20] !== _
          ? ((w = (0, a.jsxs)(a.Fragment, { children: [v, _] })), (A[19] = v), (A[20] = _), (A[21] = w))
          : (w = A[21]),
        w
      )
    }
    function M(e) {
      return {
        id: e.id,
        name: e.release.display_name,
        logo: (0, a.jsx)(p.R, {
          alt: e.release.display_name,
          size: 20,
          logoUrl: e.release.interface.logo_url,
          logoDarkUrl: e.release.interface.logo_url_dark,
          fallback: (0, a.jsx)(b.wdY, {}),
        }),
      }
    }
    function C(e) {
      return [(0, m.$)(e.id), { light: e.icon_url, dark: e.icon_dark_url }]
    }
    function E(e) {
      return e.connector_id
    }
    function D(e) {
      return (0, m.$)(e.connector_id)
    }
    function I(e) {
      return e.enabled
    }
    function N(e) {
      let t,
        n,
        l,
        i = (0, o.c)(8),
        { plugins: r, hasNextPage: d } = e,
        u = void 0 !== d && d
      return (
        i[0] !== r ? ((t = r.slice(0, 4).map(P)), (i[0] = r), (i[1] = t)) : (t = i[1]),
        i[2] !== u || i[3] !== r
          ? ((n =
              r.length > 4
                ? (0, a.jsxs)(s.A, {
                    showOnHover: !0,
                    children: [
                      (0, a.jsx)(s.A.Trigger, {
                        children: (0, a.jsx)(x.$, {
                          className: "shrink-0",
                          color: "ghost",
                          radius: "full",
                          size: "toolbar",
                          type: "button",
                          children: (0, a.jsx)(c.A, {
                            id: "automations.routine.morePlugins",
                            defaultMessage: "+{count}{more}",
                            description:
                              "Number of additional plugins available to the team; a trailing plus means another page is available",
                            values: { count: r.length - 4, more: u ? "+" : "" },
                          }),
                        }),
                      }),
                      (0, a.jsx)(s.A.Content, {
                        minWidth: "auto",
                        align: "end",
                        side: "bottom",
                        sideOffset: 5,
                        maxWidth: 320,
                        children: (0, a.jsx)("div", {
                          className: "min-w-48 p-2",
                          children: (0, a.jsx)("div", {
                            className: "flex max-h-64 flex-col overflow-y-auto",
                            children: r.slice(4).map(R),
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (i[2] = u),
            (i[3] = r),
            (i[4] = n))
          : (n = i[4]),
        i[5] !== t || i[6] !== n
          ? ((l = (0, a.jsxs)(a.Fragment, { children: [t, n] })), (i[5] = t), (i[6] = n), (i[7] = l))
          : (l = i[7]),
        l
      )
    }
    function R(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex items-center gap-2 px-2 py-1.5 text-sm text-default",
          children: [
            (0, a.jsx)("span", { className: "inline-flex shrink-0", children: e.logo }),
            (0, a.jsx)("span", { className: "min-w-0", children: e.name }),
          ],
        },
        e.id,
      )
    }
    function P(e) {
      return (0, a.jsx)(
        l.m,
        {
          content: e.name,
          children: (0, a.jsx)(l.m.TriggerDecorator, {
            unstyled: !0,
            children: (0, a.jsx)("span", { className: "inline-flex shrink-0", children: e.logo }),
          }),
        },
        e.id,
      )
    }
    function L(e) {
      let t,
        n,
        s = (0, o.c)(3),
        { children: l } = e
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(c.A, {
              id: "automations.routine.availablePlugins",
              defaultMessage: "Plugins",
              description: "Label for plugins available to the selected team routine",
            })),
            (s[0] = t))
          : (t = s[0]),
        s[1] !== l
          ? ((n = (0, a.jsx)(v.ic, {
              variant: "nested",
              label: t,
              control: (0, a.jsx)("div", { className: "flex min-w-0 items-center justify-end gap-2", children: l }),
            })),
            (s[1] = l),
            (s[2] = n))
          : (n = s[2]),
        n
      )
    }
    function O() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              className: "text-secondary",
              children: (0, a.jsx)(c.A, {
                id: "automations.routine.noPlugins",
                defaultMessage: "None connected",
                description: "Shown when no plugins are available for a team routine",
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    n.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            n,
            s,
            l = (0, o.c)(16),
            { draft: i, onChange: r, teamId: d } = e,
            m = (0, u.Ul)(f.chatGptAuthenticatedAccountId$),
            h = (0, u._U)(T.lc, m)
          l[0] !== m || l[1] !== i.cloudTeam || l[2] !== d
            ? ((t = i.cloudTeam ?? (null != m && null != d ? { accountId: m, teamId: d } : null)),
              (l[0] = m),
              (l[1] = i.cloudTeam),
              (l[2] = d),
              (l[3] = t))
            : (t = l[3])
          let g = t
          if (null == i.id && (h || null != i.cloudTeam)) {
            let e,
              t,
              o = i.cloudTeam?.teamId ?? "personal"
            ;(l[4] !== i || l[5] !== r
              ? ((e = (e) => r({ ...i, cloudTeam: e, webhookTriggers: void 0 })), (l[4] = i), (l[5] = r), (l[6] = e))
              : (e = l[6]),
              l[7] !== i.cloudTeam || l[8] !== o || l[9] !== e
                ? ((t = (0, a.jsx)(w.v, { variant: "form", selection: i.cloudTeam, onSelect: e }, o)),
                  (l[7] = i.cloudTeam),
                  (l[8] = o),
                  (l[9] = e),
                  (l[10] = t))
                : (t = l[10]),
              (n = t))
          } else if (null != g) {
            let e
            ;(l[11] !== g.teamId
              ? ((e = (0, a.jsx)(w.W, { teamId: g.teamId, variant: "form" })), (l[11] = g.teamId), (l[12] = e))
              : (e = l[12]),
              (n = e))
          } else {
            let e
            ;(l[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(v.ic, {
                  label: (0, a.jsx)(c.A, {
                    id: "automations.configuration.runsAs",
                    defaultMessage: "Run as",
                    description: "Label identifying whose account runs this scheduled task",
                  }),
                  control: (0, a.jsx)(c.A, {
                    id: "settings.teams.automation.me",
                    defaultMessage: "Me",
                    description: "Selected value for a cloud scheduled task that runs as the current user",
                  }),
                  variant: "nested",
                })),
                (l[13] = e))
              : (e = l[13]),
              (n = e))
          }
          return (
            l[14] !== n
              ? ((s = (0, a.jsx)(_.t, { variant: "outlined", children: n })), (l[14] = n), (l[15] = s))
              : (s = l[15]),
            s
          )
        },
        n: function (e) {
          let t,
            n,
            s = (0, o.c)(7),
            { draft: l, getOAuthReturnTo: i, teamId: r } = e,
            d = (0, u.Ul)(f.chatGptAuthenticatedAccountId$)
          s[0] !== d || s[1] !== l.cloudTeam || s[2] !== r
            ? ((t = l.cloudTeam ?? (null != d && null != r ? { accountId: d, teamId: r } : null)),
              (s[0] = d),
              (s[1] = l.cloudTeam),
              (s[2] = r),
              (s[3] = t))
            : (t = s[3])
          let c = t
          return (
            s[4] !== i || s[5] !== c
              ? ((n =
                  null == c
                    ? null
                    : (0, a.jsx)(_.t, {
                        variant: "outlined",
                        children: (0, a.jsx)(L, { children: (0, a.jsx)(A, { team: c, getOAuthReturnTo: i }) }),
                      })),
                (s[4] = i),
                (s[5] = c),
                (s[6] = n))
              : (n = s[6]),
            n
          )
        },
      },
    )
  },
  o791(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("MArJ"),
      l = n("RXRl"),
      i = n("zTeN"),
      r = n("zd8w"),
      d = n("Wf1j"),
      u = n("oyxz"),
      c = n("YJm0"),
      m = n("OAko"),
      h = n("bqtn"),
      f = n("HOLv"),
      g = n("GO7r"),
      p = n("X6Vn"),
      x = n("f38C"),
      b = n("RNul"),
      y = n("OWtl"),
      v = n("OMIV"),
      _ = n("ED7I"),
      w = n("fGpH"),
      j = n("Ro2M"),
      k = n("u0nx"),
      T = n("FLVF"),
      A = n("TzXS")
    function S(e) {
      let t,
        s,
        l,
        r,
        d = (0, o.c)(17),
        { item: f, source: x, disabled: b } = e,
        _ = (0, i.gh)(y.u),
        { data: j } = (0, m.YL)(),
        k = (0, i._U)(v.JW, "1431301099"),
        S = null == f.teamId && k && j?.structure === "workspace"
      d[0] !== S ? ((t = { enabled: S }), (d[0] = S), (d[1] = t)) : (t = d[1])
      let { data: M } = (0, i._U)(c.t, j?.id ?? null, t)
      d[2] !== f.automation || d[3] !== x
        ? ((s = "editor" === x ? (0, w.Xr)(f.automation) : (0, A.jv)(f.automation)),
          (d[2] = f.automation),
          (d[3] = x),
          (d[4] = s))
        : (s = d[4])
      let C = s
      d[5] !== j || d[6] !== M?.features || d[7] !== f.teamId || d[8] !== k || d[9] !== C
        ? ((l =
            null == f.teamId &&
            k &&
            "completed" !== C &&
            null != j &&
            "quorum" !== j.plan_type &&
            ("workspace" !== j.structure || M?.features?.includes("workspace_share_links"))),
          (d[5] = j),
          (d[6] = M?.features),
          (d[7] = f.teamId),
          (d[8] = k),
          (d[9] = C),
          (d[10] = l))
        : (l = d[10])
      let E = l
      return (
        d[11] !== E || d[12] !== b || d[13] !== f || d[14] !== _ || d[15] !== x
          ? ((r = E
              ? (0, a.jsx)(h.ms.Item, {
                  disabled: b,
                  leftIcon: (0, a.jsx)(g._Ui, {}),
                  onSelect: () => {
                    !(async function (e, t, a) {
                      let { ScheduledTaskShareDialog: o } = await n.e(655368).then(n.bind(n, "JoAv"))
                      ;((0, T.I)(e, "task_share_button_clicked", t.automation.id, a),
                        (0, p.qf)(e, o, { automation: t.automation }))
                    })(_, f, x)
                  },
                  children: (0, a.jsx)(u.A, {
                    id: "automations.tasks.row.action.share",
                    defaultMessage: "Share",
                    description: "Opens a dialog for sharing a copy of this task's instructions and schedule",
                  }),
                })
              : null),
            (d[11] = E),
            (d[12] = b),
            (d[13] = f),
            (d[14] = _),
            (d[15] = x),
            (d[16] = r))
          : (r = d[16]),
        r
      )
    }
    n.d(
      t,
      {},
      {
        Y: S,
        i: function (e) {
          let t,
            n,
            c,
            m,
            p,
            y,
            v,
            T = (0, o.c)(39),
            {
              item: M,
              onDeleted: C,
              onPaused: E,
              onResumed: D,
              onRunNow: I,
              onRunNowAsync: N,
              runNowIcon: R,
              isRunNowPending: P,
              source: L,
              rowRef: O,
              additionalMenuItems: U,
              shareMenuItem: z,
              statusFirst: q,
              menuProps: G,
              menuTriggerSize: K,
              onMenuOpenChange: H,
            } = e,
            F = void 0 === L ? "scheduled_page" : L,
            W = void 0 !== q && q,
            { isPending: $ } = (0, i._U)(k.F, M.automation.id),
            B = P || $,
            [V, Y] = (0, r.useState)(!1)
          T[0] !== H
            ? ((t = () => {
                ;(Y(!1), H?.(!1))
              }),
              (T[0] = H),
              (T[1] = t))
            : (t = T[1])
          let Z = t,
            Q = (0, i.Ul)(j.x2),
            J = Q.isPending && Q.variables?.automationId === M.automation.id,
            X = (0, r.useRef)(null)
          ;(T[2] !== V || T[3] !== J || T[4] !== O
            ? ((n = () => {
                let e
                if (!V || J || null == O) return
                let t = () => {
                    ;(clearTimeout(e), (e = void 0))
                  },
                  n = (n) => {
                    n.target instanceof Node &&
                      (O.current?.contains(n.target) || X.current?.contains(n.target)
                        ? t()
                        : null == e && (e = setTimeout(() => Y(!1), 150)))
                  }
                return (
                  document.addEventListener("pointermove", n, { passive: !0 }),
                  () => {
                    ;(document.removeEventListener("pointermove", n), t())
                  }
                )
              }),
              (c = [V, J, O]),
              (T[2] = V),
              (T[3] = J),
              (T[4] = O),
              (T[5] = n),
              (T[6] = c))
            : ((n = T[5]), (c = T[6])),
            (0, r.useEffect)(n, c))
          let ee = (0, d.A)()
          T[7] !== M.automation || T[8] !== F
            ? ((m = "editor" === F ? (0, w.Xr)(M.automation) : (0, A.jv)(M.automation)),
              (T[7] = M.automation),
              (T[8] = F),
              (T[9] = m))
            : (m = T[9])
          let et = m
          T[10] !== M.automation ? ((p = (0, w.nT)(M.automation)), (T[10] = M.automation), (T[11] = p)) : (p = T[11])
          let en = p
          return (
            T[12] !== U ||
            T[13] !== Z ||
            T[14] !== ee ||
            T[15] !== V ||
            T[16] !== B ||
            T[17] !== J ||
            T[18] !== en ||
            T[19] !== M ||
            T[20] !== G ||
            T[21] !== K ||
            T[22] !== H ||
            T[23] !== I ||
            T[24] !== N ||
            T[25] !== R ||
            T[26] !== z ||
            T[27] !== F ||
            T[28] !== et ||
            T[29] !== W
              ? ((y = (e) => {
                  let { deleteAction: t, pauseAction: n, resumeAction: o } = e,
                    i =
                      "completed" !== et
                        ? (0, a.jsx)(h.ms.Item, {
                            "aria-busy": J || void 0,
                            disabled: "paused" === et ? o.disabled : n.disabled,
                            focusableWhenDisabled: J || ("paused" === et && null != o.disabledReason),
                            tooltipText: "paused" === et ? o.disabledReason : void 0,
                            rightIcon: J ? (0, a.jsx)(b.y, { className: "icon-xs" }) : void 0,
                            leftIcon:
                              "paused" === et ? (0, a.jsx)(f.I, { asset: l.j }) : (0, a.jsx)(f.I, { asset: s.D }),
                            onSelect: (e) => {
                              ;(e.preventDefault(), ("paused" === et ? o : n).onSelect())
                            },
                            children:
                              "paused" === et
                                ? (0, a.jsx)(u.A, {
                                    id: "inbox.automations.resumeTooltip",
                                    defaultMessage: "Resume",
                                    description: "Tooltip label for resuming an automation",
                                  })
                                : (0, a.jsx)(u.A, {
                                    id: "inbox.automations.pauseTooltip",
                                    defaultMessage: "Pause",
                                    description: "Tooltip label for pausing an automation",
                                  }),
                          })
                        : null
                  return (0, a.jsxs)(h.Ab, {
                    ...G,
                    contentRef: X,
                    open: V,
                    onOpenChange: (e) => {
                      ;(Y(e), H?.(e))
                    },
                    align: "end",
                    contentWidth: G?.contentWidth ?? "xs",
                    triggerButton: (0, a.jsx)(x.p, {
                      size: K,
                      label: ee.formatMessage({
                        id: "automations.tasks.row.moreActions",
                        defaultMessage: "More task actions",
                        description: "Accessible label for the menu of actions on a scheduled task",
                      }),
                    }),
                    children: [
                      W ? i : null,
                      (null != I || null != N) && "completed" !== et
                        ? (0, a.jsx)(h.ms.Item, {
                            disabled: B || J || en,
                            "aria-busy": B || void 0,
                            focusableWhenDisabled: B || en,
                            tooltipText: en
                              ? (0, a.jsx)("div", {
                                  className: "max-w-48 text-balance",
                                  children: (0, a.jsx)(u.A, {
                                    id: "automations.actions.runNow.triggerBasedTooltip",
                                    defaultMessage: "Automations triggered by events can’t be run manually",
                                    description:
                                      "Tooltip on the disabled Run now menu action for automations that run only when an external event triggers them",
                                  }),
                                })
                              : void 0,
                            leftIcon: R ?? (0, a.jsx)(g.Tv9, {}),
                            rightIcon: B ? (0, a.jsx)(b.y, { className: "icon-xs" }) : void 0,
                            onSelect: (e) => {
                              null != N ? (e.preventDefault(), N().then(Z, Z)) : I?.()
                            },
                            children: (0, a.jsx)(u.A, {
                              id: "automations.actions.runNow",
                              defaultMessage: "Run now",
                              description: "Menu action on the Scheduled page that runs the selected task immediately",
                            }),
                          })
                        : null,
                      U,
                      z ?? (0, a.jsx)(S, { item: M, source: F, disabled: !1 }),
                      W ? null : i,
                      null != t
                        ? (0, a.jsx)(h.ms.Group, {
                            children: (0, a.jsx)(h.ms.Item, {
                              tone: "danger",
                              disabled: t.disabled,
                              leftIcon: (0, a.jsx)(g.zwW, {}),
                              onSelect: t.onSelect,
                              children: (0, a.jsx)(u.A, {
                                id: "settings.automations.delete",
                                defaultMessage: "Delete",
                                description: "Menu item for deleting a scheduled task",
                              }),
                            }),
                          })
                        : null,
                    ],
                  })
                }),
                (T[12] = U),
                (T[13] = Z),
                (T[14] = ee),
                (T[15] = V),
                (T[16] = B),
                (T[17] = J),
                (T[18] = en),
                (T[19] = M),
                (T[20] = G),
                (T[21] = K),
                (T[22] = H),
                (T[23] = I),
                (T[24] = N),
                (T[25] = R),
                (T[26] = z),
                (T[27] = F),
                (T[28] = et),
                (T[29] = W),
                (T[30] = y))
              : (y = T[30]),
            T[31] !== Z || T[32] !== M || T[33] !== C || T[34] !== E || T[35] !== D || T[36] !== et || T[37] !== y
              ? ((v = (0, a.jsx)(_.s, {
                  item: M,
                  onDeleted: C,
                  onPaused: E,
                  onResumed: D,
                  onStatusChanged: Z,
                  status: et,
                  statusMutation: j.x2,
                  renderActions: y,
                })),
                (T[31] = Z),
                (T[32] = M),
                (T[33] = C),
                (T[34] = E),
                (T[35] = D),
                (T[36] = et),
                (T[37] = y),
                (T[38] = v))
              : (v = T[38]),
            v
          )
        },
      },
    )
  },
  rL0w(e, t, n) {
    var a = n("SPnB"),
      o = n("fyx9"),
      s = n("SV27")
    let l = (0, n("Nwp9").m3)("scheduled-task-oauth-draft-v1", null)
    function i(e, t, n = null) {
      let o = e.get(l)
      return o?.draft.id === n &&
        (null == n
          ? "create" === t.get("automationMode")
          : "create" !== t.get("automationMode") && t.get("automationId") === n) &&
        t.get("automationDraftId") === o.id &&
        o.accountId === e.get(a.chatGptAuthenticatedAccountId$) &&
        o.userId === e.get(a.chatGptAuthenticatedUserId$) &&
        o.expiresAt > Date.now()
        ? { ...o, draft: (0, s.$6)(o.draft), initialDraft: (0, s.$6)(o.initialDraft) }
        : null
    }
    n.d(
      t,
      {},
      {
        R4: i,
        iP: function (e, t, n = null) {
          null != i(e, t, n) && e.set(l, null)
        },
        uU: function (e, t, n) {
          let s = e.get(a.chatGptAuthenticatedAccountId$),
            i = e.get(a.chatGptAuthenticatedUserId$)
          if (null == s || null == i) return null
          let r = crypto.randomUUID()
          e.set(l, {
            ...t,
            draft: { ...t.draft, eventTrigger: t.draft.eventTrigger ?? { selected: !1, when: "" } },
            initialDraft: {
              ...t.initialDraft,
              eventTrigger: t.initialDraft.eventTrigger ?? { selected: !1, when: "" },
            },
            id: r,
            accountId: s,
            userId: i,
            expiresAt: Date.now() + 36e5,
          })
          let d = new URL(n, "https://chatgpt.com")
          return (
            null == t.draft.id &&
              "create" !== d.searchParams.get("automationMode") &&
              ((d.pathname = (0, o.d0)()), (d.search = "automationMode=create")),
            d.searchParams.set("automationDraftId", r),
            d.pathname + d.search
          )
        },
      },
    )
  },
  xA2X(e, t, n) {
    n.d(t, { V: () => E })
    var a = n("ABep"),
      o = n("QosV"),
      s = n("zTeN"),
      l = n("Wf1j"),
      i = n("oyxz"),
      r = n("Qgfj"),
      d = n("ASxG"),
      u = n("AWNZ"),
      c = n("ZEx5"),
      m = n("OMIV"),
      h = n("oVAd"),
      f = n("odKs"),
      g = n("cOBD"),
      p = n("BCU4"),
      x = n("gM9O"),
      b = n("dUCV"),
      y = n("sn2N"),
      v = n("fGpH"),
      _ = n("zd8w"),
      w = n("ygO2"),
      j = n("GO7r"),
      k = n("nzx4")
    function T(e) {
      let t,
        n,
        s,
        r,
        d,
        u,
        c,
        m,
        h,
        f,
        g,
        p,
        x,
        b,
        y,
        v,
        T,
        M,
        C = (0, o.c)(85),
        { value: E, onChange: D } = e,
        I = (0, l.A)(),
        [N, R] = (0, _.useState)(!1),
        [P, L] = (0, _.useState)(S)
      if (C[0] !== I || C[1] !== P || C[2] !== D || C[3] !== N || C[4] !== E) {
        let e,
          o,
          l,
          y,
          v,
          _,
          T,
          S,
          M,
          O,
          U,
          z,
          q,
          G,
          K,
          H = new Date(P.getFullYear(), P.getMonth() + 1, 0).getDate()
        ;((n = k.AM),
          (r = N),
          C[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (e) => {
                if (e) {
                  let e = new Date()
                  L(new Date(e.getFullYear(), e.getMonth(), 1))
                }
                R(e)
              }),
              (C[19] = d))
            : (d = C[19]),
          C[20] !== I
            ? ((e = I.formatMessage({
                id: "automations.editor.schedule.monthlyDate",
                defaultMessage: "Monthly date",
                description: "Label for the monthly day-of-month calendar control",
              })),
              (C[20] = I),
              (C[21] = e))
            : (e = C[21]),
          C[22] !== E
            ? ((o = (0, a.jsx)("span", {
                className: "truncate",
                children: (0, a.jsx)(i.A, {
                  id: "automations.editor.schedule.everyMonthOnDay",
                  defaultMessage: "Every month on the {day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
                  description: "Summary text for a monthly schedule day selection",
                  values: { day: E },
                }),
              })),
              (C[22] = E),
              (C[23] = o))
            : (o = C[23]),
          C[24] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, a.jsx)(j.Aq_, {})), (C[24] = l)) : (l = C[24]),
          C[25] !== e || C[26] !== o
            ? ((u = (0, a.jsx)(k.Wv, {
                asChild: !0,
                children: (0, a.jsxs)(w.$, { color: "ghost", size: "composerPill", "aria-label": e, children: [o, l] }),
              })),
              (C[25] = e),
              (C[26] = o),
              (C[27] = u))
            : (u = C[27]),
          (t = k.hl),
          (p = "end"),
          (x = "content"),
          (b = "menu"),
          (f = "flex flex-col gap-3 text-sm select-none"),
          C[28] !== I || C[29] !== P
            ? ((y = I.formatDate(P, { month: "long", year: "numeric" })), (C[28] = I), (C[29] = P), (C[30] = y))
            : (y = C[30]),
          C[31] !== y
            ? ((v = (0, a.jsx)("span", { className: "font-medium", children: y })), (C[31] = y), (C[32] = v))
            : (v = C[32]),
          C[33] !== I
            ? ((_ = I.formatMessage({
                id: "automations.editor.schedule.previousMonth",
                defaultMessage: "Previous month",
                description: "Accessible label for moving the monthly calendar backward",
              })),
              (C[33] = I),
              (C[34] = _))
            : (_ = C[34]),
          C[35] !== P
            ? ((T = () => L(new Date(P.getFullYear(), P.getMonth() - 1, 1))), (C[35] = P), (C[36] = T))
            : (T = C[36]),
          C[37] === Symbol.for("react.memo_cache_sentinel") ? ((S = (0, a.jsx)(j.z_d, {})), (C[37] = S)) : (S = C[37]),
          C[38] !== _ || C[39] !== T
            ? ((M = (0, a.jsx)(w.$, {
                color: "ghost",
                radius: "full",
                size: "iconCircle",
                "aria-label": _,
                onClick: T,
                children: S,
              })),
              (C[38] = _),
              (C[39] = T),
              (C[40] = M))
            : (M = C[40]),
          C[41] !== I
            ? ((O = I.formatMessage({
                id: "automations.editor.schedule.nextMonth",
                defaultMessage: "Next month",
                description: "Accessible label for moving the monthly calendar forward",
              })),
              (C[41] = I),
              (C[42] = O))
            : (O = C[42]),
          C[43] !== P
            ? ((U = () => L(new Date(P.getFullYear(), P.getMonth() + 1, 1))), (C[43] = P), (C[44] = U))
            : (U = C[44]),
          C[45] === Symbol.for("react.memo_cache_sentinel") ? ((z = (0, a.jsx)(j.uM3, {})), (C[45] = z)) : (z = C[45]),
          C[46] !== O || C[47] !== U
            ? ((q = (0, a.jsx)(w.$, {
                color: "ghost",
                radius: "full",
                size: "iconCircle",
                "aria-label": O,
                onClick: U,
                children: z,
              })),
              (C[46] = O),
              (C[47] = U),
              (C[48] = q))
            : (q = C[48]),
          C[49] !== M || C[50] !== q
            ? ((G = (0, a.jsxs)("div", { className: "flex gap-1", children: [M, q] })),
              (C[49] = M),
              (C[50] = q),
              (C[51] = G))
            : (G = C[51]),
          C[52] !== v || C[53] !== G
            ? ((g = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [v, G] })),
              (C[52] = v),
              (C[53] = G),
              (C[54] = g))
            : (g = C[54]),
          (s = "grid grid-cols-7 gap-1"),
          C[55] !== I
            ? ((c = Array.from({ length: 7 }, (e, t) =>
                (0, a.jsx)(
                  "span",
                  {
                    className: "flex size-8 items-center justify-center text-xs text-secondary",
                    children: I.formatDate(new Date(2021, 0, 3 + t), { weekday: "narrow" }),
                  },
                  t,
                ),
              )),
              (C[55] = I),
              (C[56] = c))
            : (c = C[56]),
          C[57] !== P ? ((m = Array.from({ length: P.getDay() }, A)), (C[57] = P), (C[58] = m)) : (m = C[58]),
          C[59] !== I || C[60] !== P || C[61] !== D || C[62] !== E
            ? ((K = (e, t) => {
                let n = t + 1
                return (0, a.jsx)(
                  w.$,
                  {
                    "aria-label": I.formatDate(new Date(P.getFullYear(), P.getMonth(), n), { dateStyle: "long" }),
                    "aria-pressed": n === E,
                    color: n === E ? "primary" : "ghostActive",
                    radius: "full",
                    size: "iconCircle",
                    onClick: () => {
                      ;(D(n), R(!1))
                    },
                    children: n,
                  },
                  n,
                )
              }),
              (C[59] = I),
              (C[60] = P),
              (C[61] = D),
              (C[62] = E),
              (C[63] = K))
            : (K = C[63]),
          (h = Array.from({ length: H }, K)),
          (C[0] = I),
          (C[1] = P),
          (C[2] = D),
          (C[3] = N),
          (C[4] = E),
          (C[5] = t),
          (C[6] = n),
          (C[7] = s),
          (C[8] = r),
          (C[9] = d),
          (C[10] = u),
          (C[11] = c),
          (C[12] = m),
          (C[13] = h),
          (C[14] = f),
          (C[15] = g),
          (C[16] = p),
          (C[17] = x),
          (C[18] = b))
      } else
        ((t = C[5]),
          (n = C[6]),
          (s = C[7]),
          (r = C[8]),
          (d = C[9]),
          (u = C[10]),
          (c = C[11]),
          (m = C[12]),
          (h = C[13]),
          (f = C[14]),
          (g = C[15]),
          (p = C[16]),
          (x = C[17]),
          (b = C[18]))
      return (
        C[64] !== s || C[65] !== c || C[66] !== m || C[67] !== h
          ? ((y = (0, a.jsxs)("div", { className: s, children: [c, m, h] })),
            (C[64] = s),
            (C[65] = c),
            (C[66] = m),
            (C[67] = h),
            (C[68] = y))
          : (y = C[68]),
        C[69] !== y || C[70] !== f || C[71] !== g
          ? ((v = (0, a.jsxs)("div", { className: f, children: [g, y] })),
            (C[69] = y),
            (C[70] = f),
            (C[71] = g),
            (C[72] = v))
          : (v = C[72]),
        C[73] !== t || C[74] !== v || C[75] !== p || C[76] !== x || C[77] !== b
          ? ((T = (0, a.jsx)(t, { align: p, size: x, variant: b, children: v })),
            (C[73] = t),
            (C[74] = v),
            (C[75] = p),
            (C[76] = x),
            (C[77] = b),
            (C[78] = T))
          : (T = C[78]),
        C[79] !== n || C[80] !== r || C[81] !== d || C[82] !== u || C[83] !== T
          ? ((M = (0, a.jsxs)(n, { open: r, onOpenChange: d, children: [u, T] })),
            (C[79] = n),
            (C[80] = r),
            (C[81] = d),
            (C[82] = u),
            (C[83] = T),
            (C[84] = M))
          : (M = C[84]),
        M
      )
    }
    function A(e, t) {
      return (0, a.jsx)("span", {}, `blank-${t}`)
    }
    function S() {
      return new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    }
    var M = n("ZlGh")
    let C = d.object({ allowed_frequencies: d.array(d.unknown()).optional() })
    function E(e) {
      let t,
        n,
        r,
        d,
        _,
        w,
        j,
        k,
        A,
        S,
        E,
        P,
        L,
        O,
        U,
        z,
        q,
        G,
        K,
        H,
        F,
        W,
        $,
        B,
        V,
        Y,
        Z = (0, o.c)(126),
        {
          afterScheduleRows: Q,
          automation: J,
          draft: X,
          onChange: ee,
          sharedPreview: et,
          weekdayLabelFormat: en,
          form: ea,
        } = e,
        eo = void 0 !== et && et,
        es = void 0 !== ea && ea,
        el = (0, l.A)(),
        ei = (0, s.Ul)(m.M9)
      if (
        Z[0] !== J ||
        Z[1] !== ei ||
        Z[2] !== X ||
        Z[3] !== es ||
        Z[4] !== el ||
        Z[5] !== ee ||
        Z[6] !== eo ||
        Z[7] !== en
      ) {
        k = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            o,
            s,
            l,
            m,
            y,
            H,
            F,
            W,
            $,
            B = C.safeParse(ei?.getDynamicConfig("208167308").get("automation_capabilities", null)),
            V = B.success ? B.data.allowed_frequencies?.filter(I) : void 0
          ;((n = X.scheduleConfig),
            (d = "condition_watch" === J.timing_mode),
            Z[27] !== n.time ? ((e = n.time.split(":")), (Z[27] = n.time), (Z[28] = e)) : (e = Z[28]))
          let Y = Number(e[0])
          ;(Z[29] !== Y ? ((o = (0, f.C_)(Y)), (Z[29] = Y), (Z[30] = o)) : (o = Z[30]),
            (z = o),
            (r =
              "daily" === n.mode ||
              "weekdays" === n.mode ||
              "weekly" === n.mode ||
              "monthly" === n.mode ||
              (null != n.oneTimeDate && "flexible_schedule" === J.timing_mode)))
          let Q =
              "custom" === (0, M.qz)(J).scheduleConfig.mode &&
              !["daily", "weekly", "monthly"].includes(J.schedule_components.frequency),
            et = "custom" === n.mode ? (0, f.RD)(n.customRrule) : null,
            ea = "custom" === n.mode && !Q && null != et
          ;(Z[31] !== X || Z[32] !== ee
            ? ((s = (e) => ee({ ...X, scheduleConfig: e, scheduleDirty: !0, rawRrule: null })),
              (Z[31] = X),
              (Z[32] = ee),
              (Z[33] = s))
            : (s = Z[33]),
            (K = s),
            Z[34] !== n || Z[35] !== K
              ? ((l = (e) =>
                  K({ ...n, time: e.time, weekdays: e.weekdays, monthDay: e.monthDays[0], customRrule: (0, f.vQ)(e) })),
                (Z[34] = n),
                (Z[35] = K),
                (Z[36] = l))
              : (l = Z[36]))
          let er = l
          Z[37] !== J || Z[38] !== n || Z[39] !== K
            ? ((m = (e) => {
                e !== n.mode && K((0, M.iB)(J, n, e))
              }),
              (Z[37] = J),
              (Z[38] = n),
              (Z[39] = K),
              (Z[40] = m))
            : (m = Z[40])
          let ed = m
          Z[41] !== n.mode ? ((y = (e) => e.id === n.mode), (Z[41] = n.mode), (Z[42] = y)) : (y = Z[42])
          let eu = g.TJ.find(y),
            ec = g.TJ.filter((e) => null == V || V.includes("weekdays" === e.id ? "weekly" : e.id))
          if (
            (Z[43] === Symbol.for("react.memo_cache_sentinel")
              ? ((H = new Intl.DateTimeFormat("sv-SE", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hourCycle: "h23",
                }).format(new Date())),
                (Z[43] = H))
              : (H = Z[43]),
            (G = H),
            Z[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = ["morning", "afternoon", "evening", "night"]), (Z[44] = F))
              : (F = Z[44]),
            Z[45] !== n.oneTimeDate
              ? ((W = F.filter((e) => null == n.oneTimeDate || `${n.oneTimeDate} ${M.nT[e]}` >= G)),
                (Z[45] = n.oneTimeDate),
                (Z[46] = W))
              : (W = Z[46]),
            Z[47] !== el || Z[48] !== W
              ? (($ = W.map((e) => ({ id: e, label: el.formatMessage(R[e]) }))), (Z[47] = el), (Z[48] = W), (Z[49] = $))
              : ($ = Z[49]),
            (q = $),
            es && d)
          ) {
            let e, t
            ;(Z[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(i.A, { ...R.repeat })), (Z[50] = e))
              : (e = Z[50]),
              Z[51] !== J
                ? ((t = (0, a.jsx)(c.t, {
                    variant: "input",
                    children: (0, a.jsx)(u.ic, {
                      variant: "nested",
                      label: e,
                      control: (0, a.jsx)("span", {
                        className: "text-tertiary",
                        children: (0, a.jsx)(N, { automation: J }),
                      }),
                    }),
                  })),
                  (Z[51] = J),
                  (Z[52] = t))
                : (t = Z[52]),
              (k = t))
            break e
          }
          ;((j = "flex flex-col gap-5"),
            (t = c.t),
            (A = eo ? "outlined" : "default"),
            Z[53] !== J || Z[54] !== d
              ? ((S = d
                  ? (0, a.jsx)(u.ic, {
                      label: (0, a.jsx)(i.A, { ...R.repeat }),
                      control: (0, a.jsx)(N, { automation: J }),
                    })
                  : null),
                (Z[53] = J),
                (Z[54] = d),
                (Z[55] = S))
              : (S = Z[55]),
            Z[56] !== J || Z[57] !== el || Z[58] !== d || Z[59] !== eo
              ? ((E = d && eo ? (0, a.jsx)(u.ic, { label: (0, v.AT)({ automation: J }, el), control: null }) : null),
                (Z[56] = J),
                (Z[57] = el),
                (Z[58] = d),
                (Z[59] = eo),
                (Z[60] = E))
              : (E = Z[60]),
            (P =
              d || null != n.oneTimeDate || null == eu
                ? null
                : (0, a.jsx)(u.ic, {
                    label: (0, a.jsx)(i.A, { ...R.repeat }),
                    control: (0, a.jsx)(x.H, {
                      ariaLabel: el.formatMessage(R.repeat),
                      options: ec.map((e) => ({ id: e.id, label: el.formatMessage(e.labelMessage) })),
                      selectedId: n.mode,
                      selectedLabel: el.formatMessage(eu.labelMessage),
                      onSelect: ed,
                    }),
                  })),
            Z[61] !== n || Z[62] !== el || Z[63] !== d || Z[64] !== K
              ? ((L =
                  d || null == n.oneTimeDate
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(i.A, { ...R.date }),
                        control: (0, a.jsx)(h.h, {
                          ariaLabel: el.formatMessage(R.date),
                          value: n.oneTimeDate,
                          onChange: (e) => K({ ...n, oneTimeDate: e }),
                        }),
                      })),
                (Z[61] = n),
                (Z[62] = el),
                (Z[63] = d),
                (Z[64] = K),
                (Z[65] = L))
              : (L = Z[65]),
            Z[66] !== n || Z[67] !== el || Z[68] !== d || Z[69] !== K
              ? ((O =
                  d || null != n.oneTimeDate || "hourly" !== n.mode
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(i.A, { ...R.every }),
                        control: (0, a.jsx)(x.H, {
                          ariaLabel: el.formatMessage(R.every),
                          options: Array.from({ length: 23 }, (e, t) => ({
                            id: String(t + 1),
                            label: el.formatMessage(R.hours, { hours: t + 1 }),
                          })),
                          selectedId: String(n.intervalHours),
                          selectedLabel: el.formatMessage(R.hours, { hours: n.intervalHours }),
                          onSelect: (e) => K({ ...n, intervalHours: Number(e), intervalMinutes: null }),
                        }),
                      })),
                (Z[66] = n),
                (Z[67] = el),
                (Z[68] = d),
                (Z[69] = K),
                (Z[70] = O))
              : (O = Z[70]),
            Z[71] !== n || Z[72] !== d || Z[73] !== K || Z[74] !== en
              ? ((U =
                  d || "weekly" !== n.mode || null != n.oneTimeDate
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(i.A, { ...R.daysOfWeek }),
                        control: (0, a.jsx)(b.l, {
                          value: n.weekdays,
                          onChange: (e) => K({ ...n, weekdays: e }),
                          weekdayLabelFormat: en,
                        }),
                      })),
                (Z[71] = n),
                (Z[72] = d),
                (Z[73] = K),
                (Z[74] = en),
                (Z[75] = U))
              : (U = Z[75]),
            Z[76] !== n || Z[77] !== d || Z[78] !== K
              ? ((_ =
                  d || "monthly" !== n.mode || null != n.oneTimeDate
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(i.A, { ...R.monthlyDate }),
                        control: (0, a.jsx)(T, { value: n.monthDay ?? 1, onChange: (e) => K({ ...n, monthDay: e }) }),
                      })),
                (Z[76] = n),
                (Z[77] = d),
                (Z[78] = K),
                (Z[79] = _))
              : (_ = Z[79]),
            (w =
              !d && ea && null != et
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(i.A, { ...R.frequency }),
                        control: (0, a.jsx)(x.H, {
                          ariaLabel: el.formatMessage(R.frequency),
                          options: g.TJ.filter(D).map((e) => ({ id: e.id, label: el.formatMessage(e.labelMessage) })),
                          selectedId: et.frequency,
                          selectedLabel: el.formatMessage(R.customFrequency, { frequency: et.frequency }),
                          onSelect: (e) => {
                            ;("daily" === e || "weekly" === e || "monthly" === e) &&
                              er({ ...et, frequency: e, interval: 1 })
                          },
                        }),
                      }),
                      "weekly" === et.frequency
                        ? (0, a.jsx)(u.ic, {
                            label: (0, a.jsx)(i.A, { ...R.daysOfWeek }),
                            control: (0, a.jsx)(b.l, {
                              value: et.weekdays,
                              onChange: (e) => er({ ...et, weekdays: e }),
                              weekdayLabelFormat: en,
                            }),
                          })
                        : null,
                      "monthly" === et.frequency
                        ? (0, a.jsx)(u.ic, {
                            label: (0, a.jsx)(i.A, { ...R.monthlyDate }),
                            control: (0, a.jsx)(T, {
                              value: et.monthDays[0] ?? 1,
                              onChange: (e) => er({ ...et, monthDays: [e] }),
                            }),
                          })
                        : null,
                      (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(i.A, { ...R.time }),
                        control: (0, a.jsx)(p.b, { value: et.time, onChange: (e) => er({ ...et, time: e }) }),
                      }),
                    ],
                  })
                : null))
        }
        ;((Z[0] = J),
          (Z[1] = ei),
          (Z[2] = X),
          (Z[3] = es),
          (Z[4] = el),
          (Z[5] = ee),
          (Z[6] = eo),
          (Z[7] = en),
          (Z[8] = t),
          (Z[9] = n),
          (Z[10] = r),
          (Z[11] = d),
          (Z[12] = _),
          (Z[13] = w),
          (Z[14] = j),
          (Z[15] = k),
          (Z[16] = A),
          (Z[17] = S),
          (Z[18] = E),
          (Z[19] = P),
          (Z[20] = L),
          (Z[21] = O),
          (Z[22] = U),
          (Z[23] = z),
          (Z[24] = q),
          (Z[25] = G),
          (Z[26] = K))
      } else
        ((t = Z[8]),
          (n = Z[9]),
          (r = Z[10]),
          (d = Z[11]),
          (_ = Z[12]),
          (w = Z[13]),
          (j = Z[14]),
          (k = Z[15]),
          (A = Z[16]),
          (S = Z[17]),
          (E = Z[18]),
          (P = Z[19]),
          (L = Z[20]),
          (O = Z[21]),
          (U = Z[22]),
          (z = Z[23]),
          (q = Z[24]),
          (G = Z[25]),
          (K = Z[26]))
      if (k !== Symbol.for("react.early_return_sentinel")) return k
      ;(Z[80] !== n || Z[81] !== r || Z[82] !== el || Z[83] !== d || Z[84] !== z || Z[85] !== q || Z[86] !== K
        ? ((H =
            !d && r
              ? (0, a.jsx)(u.ic, {
                  label: (0, a.jsx)(i.A, { ...R.time }),
                  control: (0, a.jsx)(x.H, {
                    ariaLabel: el.formatMessage(R.time),
                    options: q,
                    selectedId: z,
                    selectedLabel: el.formatMessage(R[z]),
                    onSelect: (e) => K({ ...n, time: M.nT[e], oneTimeSeconds: 0 }),
                  }),
                })
              : null),
          (Z[80] = n),
          (Z[81] = r),
          (Z[82] = el),
          (Z[83] = d),
          (Z[84] = z),
          (Z[85] = q),
          (Z[86] = K),
          (Z[87] = H))
        : (H = Z[87]),
        Z[88] !== n || Z[89] !== r || Z[90] !== d || Z[91] !== G || Z[92] !== K
          ? ((F =
              d || null == n.oneTimeDate || r
                ? null
                : (0, a.jsx)(u.ic, {
                    label: (0, a.jsx)(i.A, { ...R.time }),
                    control: (0, a.jsx)(p.b, {
                      value: n.time,
                      isOptionVisible: (e) => null == n.oneTimeDate || `${n.oneTimeDate} ${e}` >= G,
                      onChange: (e) => K({ ...n, time: e, oneTimeSeconds: 0 }),
                    }),
                  })),
            (Z[88] = n),
            (Z[89] = r),
            (Z[90] = d),
            (Z[91] = G),
            (Z[92] = K),
            (Z[93] = F))
          : (F = Z[93]),
        Z[94] !== t ||
        Z[95] !== Q ||
        Z[96] !== _ ||
        Z[97] !== w ||
        Z[98] !== H ||
        Z[99] !== F ||
        Z[100] !== A ||
        Z[101] !== S ||
        Z[102] !== E ||
        Z[103] !== P ||
        Z[104] !== L ||
        Z[105] !== O ||
        Z[106] !== U
          ? ((W = (0, a.jsxs)(t, { variant: A, children: [S, E, P, L, O, U, _, w, H, F, Q] })),
            (Z[94] = t),
            (Z[95] = Q),
            (Z[96] = _),
            (Z[97] = w),
            (Z[98] = H),
            (Z[99] = F),
            (Z[100] = A),
            (Z[101] = S),
            (Z[102] = E),
            (Z[103] = P),
            (Z[104] = L),
            (Z[105] = O),
            (Z[106] = U),
            (Z[107] = W))
          : (W = Z[107]),
        Z[108] !== J.default_timezone || Z[109] !== n || Z[110] !== el || Z[111] !== d || Z[112] !== eo || Z[113] !== K
          ? (($ =
              d || null != n.oneTimeDate
                ? null
                : (0, a.jsxs)(c.t, {
                    variant: eo ? "outlined" : "default",
                    children: [
                      (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(i.A, { ...R.endRepeat }),
                        control: (0, a.jsx)(x.H, {
                          ariaLabel: el.formatMessage(R.endRepeat),
                          options: [
                            { id: "never", label: el.formatMessage(R.never) },
                            { id: "on-date", label: el.formatMessage(R.onDate) },
                          ],
                          selectedId: null == n.untilDate ? "never" : "on-date",
                          selectedLabel: el.formatMessage(null == n.untilDate ? R.never : R.onDate),
                          onSelect: (e) => {
                            if ("never" === e) return void K({ ...n, untilDate: void 0, untilTime: void 0 })
                            if (null != n.untilDate) return
                            let t = new Date()
                            ;(t.setMonth(t.getMonth() + 1),
                              K({
                                ...n,
                                untilTime: "23:59:59",
                                untilDate: new Intl.DateTimeFormat("en-CA", {
                                  timeZone: J.default_timezone,
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                }).format(t),
                              }))
                          },
                        }),
                      }),
                      null != n.untilDate
                        ? (0, a.jsx)(u.ic, {
                            label: (0, a.jsx)(i.A, { ...R.date }),
                            control: (0, a.jsx)(h.h, {
                              ariaLabel: el.formatMessage(R.date),
                              value: n.untilDate,
                              timeZone: J.default_timezone,
                              onChange: (e) => K({ ...n, untilDate: e, untilTime: "23:59:59" }),
                            }),
                          })
                        : null,
                    ],
                  })),
            (Z[108] = J.default_timezone),
            (Z[109] = n),
            (Z[110] = el),
            (Z[111] = d),
            (Z[112] = eo),
            (Z[113] = K),
            (Z[114] = $))
          : ($ = Z[114]),
        Z[115] !== d || Z[116] !== eo
          ? ((B =
              d && eo
                ? (0, a.jsx)(c.t, {
                    variant: "outlined",
                    children: (0, a.jsx)(u.ic, {
                      label: (0, a.jsx)(i.A, { ...R.time }),
                      control: (0, a.jsx)(i.A, { ...R.custom }),
                    }),
                  })
                : null),
            (Z[115] = d),
            (Z[116] = eo),
            (Z[117] = B))
          : (B = Z[117]),
        Z[118] !== j || Z[119] !== W || Z[120] !== $ || Z[121] !== B
          ? ((V = (0, a.jsxs)("div", { className: j, children: [W, $, B] })),
            (Z[118] = j),
            (Z[119] = W),
            (Z[120] = $),
            (Z[121] = B),
            (Z[122] = V))
          : (V = Z[122]))
      let er = V
      return (
        Z[123] !== er || Z[124] !== eo
          ? ((Y = eo
              ? er
              : (0, a.jsx)(y.C, {
                  title: (0, a.jsx)("span", {
                    className: "text-xs uppercase select-none",
                    children: (0, a.jsx)(i.A, { ...R.frequency }),
                  }),
                  children: er,
                })),
            (Z[123] = er),
            (Z[124] = eo),
            (Z[125] = Y))
          : (Y = Z[125]),
        Y
      )
    }
    function D(e) {
      return "daily" === e.id || "weekly" === e.id || "monthly" === e.id
    }
    function I(e) {
      return "string" == typeof e
    }
    function N(e) {
      let t,
        n,
        s,
        l = (0, o.c)(9),
        { automation: r } = e
      if (l[0] !== r.schedule) {
        let e = r.schedule.match(/^RRULE:(.+)$/m)?.[1]
        ;((t = Number(e?.match(/(?:^|;)INTERVAL=(\d+)/)?.[1] ?? 1)),
          (n = e?.match(/(?:^|;)FREQ=(\w+)/)?.[1]),
          (l[0] = r.schedule),
          (l[1] = t),
          (l[2] = n))
      } else ((t = l[1]), (n = l[2]))
      let d = n
      if ("custom" === r.schedule_components.frequency && Number.isSafeInteger(t) && t > 0) {
        if ("MINUTELY" === d) {
          let e
          return (
            l[3] !== t
              ? ((e = (0, a.jsx)(i.A, { ...R.minutes, values: { minutes: t } })), (l[3] = t), (l[4] = e))
              : (e = l[4]),
            e
          )
        }
        if ("HOURLY" === d) {
          let e
          return (
            l[5] !== t
              ? ((e = (0, a.jsx)(i.A, { ...R.everyHours, values: { hours: t } })), (l[5] = t), (l[6] = e))
              : (e = l[6]),
            e
          )
        }
      }
      return (
        l[7] !== r.schedule_components.frequency
          ? ((s = (0, a.jsx)(i.A, { ...R.repeatValue, values: { frequency: r.schedule_components.frequency } })),
            (l[7] = r.schedule_components.frequency),
            (l[8] = s))
          : (s = l[8]),
        s
      )
    }
    let R = (0, r.YK)({
      frequency: {
        id: "automations.editor.schedule.frequencySectionLabel",
        defaultMessage: "Frequency",
        description: "Section label for the schedule controls in the Scheduled task editor",
      },
      repeat: {
        id: "automations.editor.schedule.repeat",
        defaultMessage: "Repeat",
        description: "Row label for the repeat frequency in the Scheduled task editor",
      },
      date: {
        id: "automations.editor.schedule.date",
        defaultMessage: "Date",
        description: "Row label for choosing the scheduled date in the Scheduled task editor",
      },
      every: {
        id: "automations.editor.schedule.every",
        defaultMessage: "Every",
        description: "Row label for an hourly interval in the Scheduled task editor",
      },
      hours: {
        id: "automations.editor.schedule.hourInterval",
        defaultMessage: "{hours, plural, one {# hour} other {# hours}}",
        description: "Choice of hourly interval in the Scheduled editor; hours is the number between runs",
      },
      daysOfWeek: {
        id: "automations.editor.schedule.daysOfWeek",
        defaultMessage: "Days of the week",
        description: "Row label for weekdays in the Scheduled task editor",
      },
      monthlyDate: {
        id: "automations.editor.schedule.monthlyDate",
        defaultMessage: "Monthly date",
        description: "Row label for choosing a day of the month in the Scheduled task editor",
      },
      time: {
        id: "automations.editor.schedule.time",
        defaultMessage: "Time",
        description: "Row label for task time in the Scheduled editor",
      },
      morning: {
        id: "automations.editor.schedule.morning",
        defaultMessage: "Morning",
        description: "Flexible task time option in the Scheduled editor, represented by 9 AM",
      },
      afternoon: {
        id: "automations.editor.schedule.afternoon",
        defaultMessage: "Afternoon",
        description: "Flexible task time option in the Scheduled editor, represented by 2 PM",
      },
      evening: {
        id: "automations.editor.schedule.evening",
        defaultMessage: "Evening",
        description: "Flexible task time option in the Scheduled editor, represented by 6 PM",
      },
      night: {
        id: "automations.editor.schedule.night",
        defaultMessage: "Night",
        description: "Flexible task time option in the Scheduled editor, represented by 10 PM",
      },
      customFrequency: {
        id: "automations.scheduled.custom.frequency",
        defaultMessage: "{frequency, select, daily {Daily} weekly {Weekly} monthly {Monthly} other {Custom}}",
        description: "Selected structured custom frequency in the Scheduled editor",
      },
      endRepeat: {
        id: "automations.editor.schedule.until",
        defaultMessage: "End repeat",
        description: "Row label for when a repeating scheduled task stops",
      },
      never: {
        id: "automations.editor.schedule.untilNever",
        defaultMessage: "Never",
        description: "End-repeat option for a scheduled task that does not expire",
      },
      onDate: {
        id: "automations.editor.schedule.untilOnDate",
        defaultMessage: "On date",
        description: "End-repeat option that enables choosing an end date",
      },
      custom: {
        id: "automations.sharing.preview.dialog.custom_task_time",
        defaultMessage: "Custom",
        description: "Read-only time value for a shared monitoring task",
      },
      minutes: {
        id: "automations.scheduled.monitoring.minutes",
        defaultMessage: "Every {minutes, plural, one {minute} other {# minutes}}",
        description: "Monitoring interval shown in the Scheduled editor; minutes is the interval length",
      },
      everyHours: {
        id: "automations.scheduled.monitoring.hours",
        defaultMessage: "Every {hours, plural, one {hour} other {# hours}}",
        description: "Monitoring interval shown in the Scheduled editor; hours is the interval length",
      },
      repeatValue: {
        id: "automations.sharing.preview.repeatValue",
        defaultMessage:
          "{frequency, select, once {Once} hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Annually} other {Custom}}",
        description: "Repeat frequency of a shared monitoring task",
      },
    })
  },
  FLVF(e, t, n) {
    var a = n("l8z4"),
      o = n("PFjh"),
      s = n("yGJW")
    let l = {
        task_share_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_BUTTON_CLICKED",
        task_share_sheet_viewed: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_SHEET_VIEWED",
        task_share_link_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_BUTTON_CLICKED",
        task_share_link_created: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_CREATED",
        task_share_link_refreshed: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_REFRESHED",
        task_share_link_delete_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETE_BUTTON_CLICKED",
        task_share_link_deleted: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETED",
      },
      i = {
        site_scheduled_tab: "CHATGPT_TASKS_INTERACTION_SOURCE_UNSPECIFIED",
        scheduled_page: "CHATGPT_TASKS_INTERACTION_SOURCE_TASKS_PAGE_TASK_ROW",
        editor: "CHATGPT_TASKS_INTERACTION_SOURCE_EDITOR",
        sharing_sheet: "CHATGPT_TASKS_INTERACTION_SOURCE_SHARING_SHEET",
      },
      r = {
        shared_task_sheet_viewed: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SHEET_VIEWED",
        shared_task_save_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_BUTTON_CLICKED",
        shared_task_save_submitted: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_SUBMITTED",
        shared_task_report_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_REPORT_BUTTON_CLICKED",
      }
    n.d(
      t,
      {},
      {
        I: function (e, t, n, r = "sharing_sheet", d) {
          ;((0, s.yy)(e, a.AS, { type: l[t], taskId: n, source: i[r], ...d }),
            e
              .get(o.T$)
              .count("default", "automations.sharing.event", {
                type: t,
                source: "scheduled_page" === r ? "tasks_page_task_row" : r,
                ...(d?.success == null ? {} : { success: String(d.success) }),
              }))
        },
        u: function (e, t, n, l) {
          ;((0, s.yy)(e, a.AS, {
            type: r[t],
            source: "CHATGPT_TASKS_INTERACTION_SOURCE_SHARED_TASK_SHEET",
            sharePostId: n,
            ...l,
          }),
            e
              .get(o.T$)
              .count("default", "automations.sharing.event", {
                type: t,
                source: "shared_task_sheet",
                ...(l?.success == null ? {} : { success: String(l.success) }),
              }))
        },
      },
    )
  },
  TzXS(e, t, n) {
    var a = n("fGpH")
    function o(e) {
      return (0, a.nT)(e) || 0 !== e.next_run_times.length ? (e.is_enabled ? "active" : "paused") : "completed"
    }
    function s({ automation: e }, t) {
      let n = t?.[e.id] ?? Date.parse(e.updated_at)
      return Number.isNaN(n) ? 0 : n
    }
    n.d(
      t,
      {},
      {
        jv: o,
        pK: function (...e) {
          let t = new Map()
          for (let n of e)
            for (let e of n ?? []) {
              let n = t.get(e.id)
              ;(null == n || e.updated_at >= n.updated_at) && t.set(e.id, e)
            }
          return Array.from(t.values(), (e) => ({ automation: e }))
        },
        rk: function (e, t, n) {
          let a = { active: [], recent: [], paused: [], completed: [] }
          for (let l of e) {
            let e = o(l.automation)
            ;(a[e].push(l), "active" !== e && s(l, "paused" === e ? n : void 0) >= t - 864e5 && a.recent.push(l))
          }
          for (let e of [a.paused, a.completed]) e.sort((e, t) => s(t) - s(e))
          return (a.recent.sort((e, t) => s(t, n) - s(e, n)), a)
        },
      },
    )
  },
  dMTK(e, t, n) {
    function a(e, t) {
      return (
        (Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())) /
        864e5
      )
    }
    function o(e, t) {
      let n = e.formatRelativeTime(t, "day", { numeric: "auto" })
      return e.locale.startsWith("en") ? n.charAt(0).toUpperCase() + n.slice(1) : n
    }
    n.d(
      t,
      {},
      {
        AR: function (e, t = Date.now()) {
          let n = null,
            a = !1
          return e.map((e) => {
            if (null == e) return ((n = null), (a = !0), null)
            let o = null
            for (let s of e)
              (s.breaksPreviousAdjacency && (n = null),
                null == o &&
                  (function ({ current: e, previous: t, isFirstUserTurn: n, nowMs: a }) {
                    return (
                      null != e.sentAtMs &&
                      !!Number.isFinite(e.sentAtMs) &&
                      ((!!n && a - e.sentAtMs > 36e5) ||
                        (t?.role === "assistant" &&
                          null != t.sentAtMs &&
                          Number.isFinite(t.sentAtMs) &&
                          e.sentAtMs - t.sentAtMs > ("user" === e.role ? 36e5 : 6e5)))
                    )
                  })({ current: s, previous: n, isFirstUserTurn: "user" === s.role && !a, nowMs: t }) &&
                  (o = s.sentAtMs),
                (a = a || "user" === s.role),
                (n = s))
            return o
          })
        },
        a7: function (e, t, n) {
          let s = Math.max(a(n, t), 0)
          return {
            date:
              s <= 1
                ? o(e, -s)
                : s <= 7
                  ? e.formatDate(t, { weekday: "long" })
                  : s <= 365
                    ? e.formatDate(t, { weekday: "short", month: "short", day: "numeric" })
                    : e.formatDate(t, { month: "short", day: "numeric", year: "numeric" }),
            time: e.formatTime(t, { hour: "numeric", minute: "2-digit" }),
            includeAt: s > 7,
          }
        },
        f$: a,
        gE: o,
      },
    )
  },
  rCoD(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("Ks4B"),
      l = n("iG6x"),
      i = n("zTeN"),
      r = n("Wf1j"),
      d = n("oyxz"),
      u = n("Qgfj"),
      c = n("SPnB"),
      m = n("ygO2"),
      h = n("bqtn"),
      f = n("HOLv"),
      g = n("AWNZ"),
      p = n("OMIV"),
      x = n("oyQi"),
      b = n("nvO1")
    let y = (0, u.YK)({
      me: {
        id: "settings.teams.automation.me",
        defaultMessage: "Me",
        description: "Selected value for a cloud scheduled task that runs as the current user",
      },
      personal: {
        id: "settings.teams.automation.personal",
        defaultMessage: "Me",
        description: "Option that creates a cloud scheduled task for the current user rather than a workspace team",
      },
      unavailable: {
        id: "settings.teams.automation.unavailable",
        defaultMessage: "Unavailable team",
        description:
          "Selected value when a new cloud scheduled task's team is no longer available in the current workspace",
      },
      chooseTeam: {
        id: "settings.teams.automation.chooseTeam",
        defaultMessage: "Choose team",
        description: "Placeholder before a team is selected for a scheduled task",
      },
    })
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            s,
            l,
            r,
            u,
            m,
            h = (0, o.c)(24),
            { teamId: f, variant: y } = e,
            v = void 0 === y ? "nested" : y,
            _ = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
            w = (0, i._U)(p.JW, "881731870"),
            j = (0, i._U)(b.rN, _ ?? ""),
            k = w && j
          h[0] !== k ? ((t = { enabled: k }), (h[0] = k), (h[1] = t)) : (t = h[1])
          let { data: T, error: A } = (0, i._U)(b.IB, _ ?? "", t)
          h[2] !== _ || h[3] !== A || h[4] !== j || h[5] !== w || h[6] !== f || h[7] !== T
            ? ((n = null != _ && w && j && null == A ? T?.find((e) => e.workspace_id === _ && e.id === f) : void 0),
              (h[2] = _),
              (h[3] = A),
              (h[4] = j),
              (h[5] = w),
              (h[6] = f),
              (h[7] = T),
              (h[8] = n))
            : (n = h[8])
          let S = n
          if (null == S) return null
          let M =
            "form" === v
              ? "flex min-w-0 items-center gap-1.5 text-tertiary"
              : "max-w-64 text-end text-base break-words text-default select-text"
          return (
            h[9] !== S.name || h[10] !== v
              ? ((s = "form" === v ? (0, a.jsx)("span", { className: "truncate", children: S.name }) : S.name),
                (h[9] = S.name),
                (h[10] = v),
                (h[11] = s))
              : (s = h[11]),
            h[12] !== S.avatar || h[13] !== v
              ? ((l = "form" === v ? (0, a.jsx)(x.n, { avatar: S.avatar, size: "small" }) : null),
                (h[12] = S.avatar),
                (h[13] = v),
                (h[14] = l))
              : (l = h[14]),
            h[15] !== M || h[16] !== s || h[17] !== l
              ? ((r = (0, a.jsxs)("span", { className: M, children: [s, l] })),
                (h[15] = M),
                (h[16] = s),
                (h[17] = l),
                (h[18] = r))
              : (r = h[18]),
            h[19] !== v
              ? ((u =
                  "form" === v
                    ? (0, a.jsx)(d.A, {
                        id: "automations.configuration.team",
                        defaultMessage: "Team",
                        description: "Label for the team that owns a scheduled task",
                      })
                    : (0, a.jsx)(d.A, {
                        id: "settings.teams.automation.label",
                        defaultMessage: "Run as",
                        description: "Label identifying the team whose account runs this scheduled task",
                      })),
                (h[19] = v),
                (h[20] = u))
              : (u = h[20]),
            h[21] !== r || h[22] !== u
              ? ((m = (0, a.jsx)(g.ic, { control: r, label: u, variant: "nested" })),
                (h[21] = r),
                (h[22] = u),
                (h[23] = m))
              : (m = h[23]),
            m
          )
        },
        v: function (e) {
          let t,
            n,
            u,
            v,
            _,
            w,
            j,
            k,
            T,
            A,
            S,
            M,
            C,
            E,
            D,
            I,
            N,
            R,
            P,
            L,
            O,
            U,
            z,
            q,
            G = (0, o.c)(69),
            { includePersonal: K, variant: H, open: F, onOpenChange: W, selection: $, onSelect: B } = e,
            V = void 0 === K || K,
            Y = void 0 === H ? "nested" : H,
            Z = (0, r.A)(),
            Q = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
            J = (0, i._U)(p.JW, "881731870"),
            X = (0, i._U)(b.rN, Q ?? "")
          G[0] !== J ? ((t = { enabled: J }), (G[0] = J), (G[1] = t)) : (t = G[1])
          let { data: ee, error: et, refetch: en } = (0, i._U)(b.IB, Q ?? "", t)
          if (null == Q || !X || !J) return null
          let ea = null == et ? ee : void 0
          if (G[2] !== Q || G[3] !== V || G[4] !== Z || G[5] !== W || G[6] !== F || G[7] !== $ || G[8] !== ea) {
            _ = $?.accountId === Q ? ea?.find((e) => e.id === $.teamId) : void 0
            let e = "unavailable"
            if (
              (null == $ && (e = V ? "personal" : "choose"),
              null != _ && (e = "team"),
              (v = _?.name ?? (0, a.jsx)(d.A, { ...y.unavailable })),
              null == $)
            ) {
              let e
              ;(G[19] !== V
                ? ((e = V ? (0, a.jsx)(d.A, { ...y.me }) : (0, a.jsx)(d.A, { ...y.chooseTeam })),
                  (G[19] = V),
                  (G[20] = e))
                : (e = G[20]),
                (v = e))
            }
            ;((u = h.Ab),
              (k = "end"),
              (T = "menu"),
              (A = F),
              (S = W),
              (n = m.$),
              (w = "w-full text-start"),
              (j = Z.formatMessage(
                {
                  id: "settings.teams.automation.selectedAriaLabel",
                  defaultMessage:
                    "Run as: {selection, select, personal {Me} team {{teamName}} choose {Choose team} other {Unavailable team}}",
                  description:
                    "Accessible label identifying the current personal or team owner selected for a new cloud scheduled task",
                },
                { selection: e, teamName: _?.name ?? "" },
              )),
              (G[2] = Q),
              (G[3] = V),
              (G[4] = Z),
              (G[5] = W),
              (G[6] = F),
              (G[7] = $),
              (G[8] = ea),
              (G[9] = n),
              (G[10] = u),
              (G[11] = v),
              (G[12] = _),
              (G[13] = w),
              (G[14] = j),
              (G[15] = k),
              (G[16] = T),
              (G[17] = A),
              (G[18] = S))
          } else
            ((n = G[9]),
              (u = G[10]),
              (v = G[11]),
              (_ = G[12]),
              (w = G[13]),
              (j = G[14]),
              (k = G[15]),
              (T = G[16]),
              (A = G[17]),
              (S = G[18]))
          return (
            G[21] !== v
              ? ((M = (0, a.jsx)("span", { className: "truncate text-start text-tertiary", children: v })),
                (G[21] = v),
                (G[22] = M))
              : (M = G[22]),
            G[23] !== _
              ? ((C = null == _ ? null : (0, a.jsx)(x.n, { avatar: _.avatar, size: "small" })),
                (G[23] = _),
                (G[24] = C))
              : (C = G[24]),
            G[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = (0, a.jsx)(f.I, { className: "text-tertiary", asset: l.K })), (G[25] = E))
              : (E = G[25]),
            G[26] !== M || G[27] !== C
              ? ((D = (0, a.jsxs)("span", {
                  className: "flex max-w-full min-w-0 items-center gap-1.5",
                  children: [M, C, E],
                })),
                (G[26] = M),
                (G[27] = C),
                (G[28] = D))
              : (D = G[28]),
            G[29] !== Y
              ? ((I =
                  "form" === Y
                    ? (0, a.jsx)(d.A, {
                        id: "automations.configuration.team",
                        defaultMessage: "Team",
                        description: "Label for the team running the scheduled task",
                      })
                    : (0, a.jsx)(d.A, {
                        id: "settings.teams.automation.teamIdentityLabel",
                        defaultMessage: "Run as",
                        description:
                          "Label for choosing whose identity runs a new cloud scheduled task: the current user or a workspace team",
                      })),
                (G[29] = Y),
                (G[30] = I))
              : (I = G[30]),
            G[31] !== D || G[32] !== I
              ? ((N = (0, a.jsx)(g.ic, { className: "w-full select-none", control: D, label: I, variant: "nested" })),
                (G[31] = D),
                (G[32] = I),
                (G[33] = N))
              : (N = G[33]),
            G[34] !== n || G[35] !== N || G[36] !== w || G[37] !== j
              ? ((R = (0, a.jsx)(n, {
                  className: w,
                  "aria-label": j,
                  size: "inline",
                  color: "ghostActive",
                  children: N,
                })),
                (G[34] = n),
                (G[35] = N),
                (G[36] = w),
                (G[37] = j),
                (G[38] = R))
              : (R = G[38]),
            G[39] !== V || G[40] !== B || G[41] !== $
              ? ((P = V
                  ? (0, a.jsx)(h.ms.Item, {
                      rightIconAsset: null == $ ? s.G : void 0,
                      onSelect: () => B(null),
                      children: (0, a.jsx)(d.A, { ...y.personal }),
                    })
                  : null),
                (G[39] = V),
                (G[40] = B),
                (G[41] = $),
                (G[42] = P))
              : (P = G[42]),
            G[43] !== Q || G[44] !== B || G[45] !== _?.id || G[46] !== ea
              ? ((L = ea?.map((e) =>
                  (0, a.jsx)(
                    h.ms.Item,
                    {
                      leftIcon: (0, a.jsx)(x.n, { avatar: e.avatar, size: "small" }),
                      rightIconAsset: _?.id === e.id ? s.G : void 0,
                      onSelect: () => B({ accountId: Q, teamId: e.id }),
                      children: e.name,
                    },
                    e.id,
                  ),
                )),
                (G[43] = Q),
                (G[44] = B),
                (G[45] = _?.id),
                (G[46] = ea),
                (G[47] = L))
              : (L = G[47]),
            G[48] !== et || G[49] !== en
              ? ((O =
                  null != et
                    ? (0, a.jsx)(h.ms.Item, {
                        onSelect: () => void en(),
                        children: (0, a.jsx)(d.A, {
                          id: "settings.teams.automation.retry",
                          defaultMessage: "Unable to load teams—retry",
                          description:
                            "Menu action that retries loading the teams available for a new cloud scheduled task",
                        }),
                      })
                    : null),
                (G[48] = et),
                (G[49] = en),
                (G[50] = O))
              : (O = G[50]),
            G[51] !== et || G[52] !== ee
              ? ((U =
                  null == et && null == ee
                    ? (0, a.jsx)(h.ms.Item, {
                        disabled: !0,
                        children: (0, a.jsx)(d.A, {
                          id: "settings.teams.automation.loading",
                          defaultMessage: "Loading teams…",
                          description: "Menu status while loading teams for a new cloud scheduled task",
                        }),
                      })
                    : null),
                (G[51] = et),
                (G[52] = ee),
                (G[53] = U))
              : (U = G[53]),
            G[54] !== et || G[55] !== ee?.length
              ? ((z =
                  ee?.length === 0 && null == et
                    ? (0, a.jsx)(h.ms.Item, {
                        disabled: !0,
                        children: (0, a.jsx)(d.A, {
                          id: "settings.teams.automation.empty",
                          defaultMessage: "No teams available",
                          description:
                            "Menu status when the current workspace has no teams available for a new cloud scheduled task",
                        }),
                      })
                    : null),
                (G[54] = et),
                (G[55] = ee?.length),
                (G[56] = z))
              : (z = G[56]),
            G[57] !== u ||
            G[58] !== R ||
            G[59] !== P ||
            G[60] !== L ||
            G[61] !== O ||
            G[62] !== U ||
            G[63] !== z ||
            G[64] !== k ||
            G[65] !== T ||
            G[66] !== A ||
            G[67] !== S
              ? ((q = (0, a.jsxs)(u, {
                  align: k,
                  contentWidth: T,
                  open: A,
                  onOpenChange: S,
                  triggerButton: R,
                  children: [P, L, O, U, z],
                })),
                (G[57] = u),
                (G[58] = R),
                (G[59] = P),
                (G[60] = L),
                (G[61] = O),
                (G[62] = U),
                (G[63] = z),
                (G[64] = k),
                (G[65] = T),
                (G[66] = A),
                (G[67] = S),
                (G[68] = q))
              : (q = G[68]),
            q
          )
        },
      },
    )
  },
}
//# sourceMappingURL=622950.8faad13287.js.map
