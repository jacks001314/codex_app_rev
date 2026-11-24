export const __rspack_esm_ids = [443855]
export const __webpack_modules__ = {
  fGdi(e, t) {
    t.A = {
      page: "page-R5F4tl",
      invite: "invite-mlWTMx",
      greenAvatar: "greenAvatar-rHMs7w",
      blueAvatar: "blueAvatar-Ynbvpo",
      purpleAvatar: "purpleAvatar-lTvru3",
      domain: "domain-kIb7Rz",
      heading: "heading-V0T334",
      subtitle: "subtitle-U9MdN2",
      count: "count-Q9ecN9",
      skip: "skip-drMJ2P",
      avatarCard: "avatarCard-QOOMZ4",
      approvalCard: "approvalCard-xT57Gw",
      recommended: "recommended-tAdWVS",
      switch: "switch-aWKCZk",
      setting: "setting-p_9k1l",
      disclosure: "disclosure-wp4sBT",
      send: "send-DoDueH",
    }
  },
  IPpC(e, t, n) {
    n.d(t, { K: () => i, i: () => o })
    var a = n("zd8w")
    function r(e, t) {
      return new Promise((n, a) => {
        if (t.aborted) return void a(t.reason instanceof Error ? t.reason : new DOMException("Aborted", "AbortError"))
        let r = globalThis.setTimeout(() => {
            ;(t.removeEventListener("abort", i), n())
          }, e),
          i = () => {
            ;(globalThis.clearTimeout(r),
              a(t.reason instanceof Error ? t.reason : new DOMException("Aborted", "AbortError")))
          }
        t.addEventListener("abort", i, { once: !0 })
      })
    }
    async function i({ read: e, start: t }, n, a) {
      let o = AbortSignal.any([n, AbortSignal.timeout(3e5)])
      o.throwIfAborted()
      let s = await t(o),
        l = !1
      for (; "pending" === s.status;) {
        ;(await r(2e3, o),
          document.hidden &&
            (await (function (e) {
              return (
                e.throwIfAborted(),
                new Promise((t, n) => {
                  let a = () => {
                      document.hidden ||
                        (document.removeEventListener("visibilitychange", a), e.removeEventListener("abort", r), t())
                    },
                    r = () => {
                      ;(document.removeEventListener("visibilitychange", a), n(e.reason))
                    }
                  ;(document.addEventListener("visibilitychange", a), e.addEventListener("abort", r, { once: !0 }))
                })
              )
            })(o)),
          o.throwIfAborted())
        try {
          s = await e(o)
        } catch (e) {
          if ((o.throwIfAborted(), !a(e))) throw e
          continue
        }
        "available" !== s.status || l || ((l = !0), o.throwIfAborted(), (s = await t(o)))
      }
      return (o.throwIfAborted(), s)
    }
    function o(e, t, n) {
      let i = (0, a.useRef)(null),
        [o, s] = (0, a.useState)("idle")
      return (
        (0, a.useEffect)(
          () => () => {
            i.current && (i.current.abort(), (i.current = null), n(!1))
          },
          [n],
        ),
        {
          status: o,
          suggest: async function () {
            if (i.current) return
            let a = new AbortController()
            ;((i.current = a), s("loading"), n(!0))
            try {
              let n = await (async function (e, t) {
                let n = performance.now()
                try {
                  return await e(t)
                } finally {
                  let e = Math.ceil(n + 6e3 - performance.now())
                  ;(e > 0 && (await r(e, t)), t.throwIfAborted())
                }
              })(e, a.signal)
              a.signal.aborted || s(t(n) > 0 ? "ready" : "empty")
            } catch {
              a.signal.aborted || s("error")
            } finally {
              i.current === a && ((i.current = null), n(!1))
            }
          },
          cancel: function () {
            ;(i.current?.abort(), (i.current = null), s("idle"), n(!1))
          },
        }
      )
    }
  },
  E2yB(e, t, n) {
    let a =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
    function r(e, t) {
      return (
        t?.allowExternal === !0 ||
        (t?.allowExternal === !1 && t.verifiedDomains?.some((t) => t.toLowerCase() === e.toLowerCase()) === !0)
      )
    }
    n.d(
      t,
      {},
      {
        H8: function (e, t) {
          let n = e?.trim() ?? "",
            r = n.length > 0 && a.test(n)
          return { checkoutEmail: n, hasCheckoutEmail: r, defaultEmail: r ? "" : (t ?? "") }
        },
        Ub: r,
        WL: a,
        ob: function (e, t, n) {
          if (!e || !a.test(e) || !t || !["professional", "education", "government", "unknown"].includes(t)) return
          let i = e.slice(e.lastIndexOf("@") + 1).toLowerCase()
          return r(i, n) ? i : void 0
        },
      },
    )
  },
  LA5s(e, t, n) {
    var a = n("ABep"),
      r = n("zd8w"),
      i = n("oyxz"),
      o = n("E2yB")
    n.d(
      t,
      {},
      {
        M: function ({ value: e, domain: t, isValidEmail: n = (e) => o.WL.test(e.trim()), onAccept: s, children: l }) {
          let [d, u] = (0, r.useState)(!1),
            [c, p] = (0, r.useState)(!1),
            m =
              t && d && !c && e.length > 0 && !n(e)
                ? (function (e, t) {
                    let n = e.indexOf("@"),
                      a = -1 === n ? "" : e.slice(n),
                      r = "@" + t
                    if (a.length >= r.length || !r.startsWith(a.toLowerCase())) return
                    let i = e + r.slice(a.length)
                    return o.WL.test(i) ? i : void 0
                  })(e, t)
                : void 0,
            g = null != m,
            f = (0, r.useRef)(null),
            [v, h] = (0, r.useState)(!1)
          return (
            (0, r.useLayoutEffect)(() => {
              let e = f.current
              if (!g || !e) return
              let t = () => h(e.scrollWidth > e.clientWidth)
              t()
              let n = new ResizeObserver(t)
              for (let t of (n.observe(e), e.children)) n.observe(t)
              return () => n.disconnect()
            }, [g]),
            (0, a.jsxs)("div", {
              className: "min-w-0",
              onFocus: () => u(!0),
              onBlur: () => {
                ;(u(!1), p(!1))
              },
              onCompositionStart: () => p(!0),
              onCompositionEnd: () => p(!1),
              onKeyDown: (e) => {
                !m ||
                  "Tab" !== e.key ||
                  e.defaultPrevented ||
                  e.shiftKey ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.nativeEvent.isComposing ||
                  s(m)
              },
              children: [
                l(
                  null == m
                    ? null
                    : (0, a.jsxs)("span", {
                        "aria-hidden": "true",
                        ref: f,
                        className: "inline-flex min-w-0 max-w-full items-center",
                        style: g && v ? { visibility: "hidden" } : void 0,
                        children: [
                          (0, a.jsx)("span", { className: "shrink-0 whitespace-nowrap", children: m.slice(e.length) }),
                          (0, a.jsx)("kbd", {
                            className: "ms-1 shrink-0 rounded border border-current px-1 font-sans text-xs leading-4",
                            children: (0, a.jsx)(i.A, {
                              id: "admin-invite.domainCompletion.key",
                              defaultMessage: "Tab",
                              description:
                                "Small keyboard key label after a suggested email domain in workspace invites. Use the local name of the Tab key.",
                            }),
                          }),
                        ],
                      }),
                ),
                null != m &&
                  (0, a.jsx)("span", {
                    className: g && v ? "mt-1 block text-xs [overflow-wrap:anywhere]" : "sr-only",
                    role: "status",
                    children: (0, a.jsx)(i.A, {
                      id: "admin-invite.domainCompletion.hint",
                      defaultMessage: "Press Tab to complete the email address with @{domain}.",
                      description:
                        "Screen reader hint while entering a workspace invitation. The domain is the part of the inviter's email after the at sign. Tab accepts the suggested address.",
                      values: { domain: t },
                    }),
                  }),
              ],
            })
          )
        },
      },
    )
  },
  bm6U(e, t, n) {
    var a = n("ABep")
    n.d(
      t,
      {},
      {
        X: (e) =>
          (0, a.jsx)("svg", {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e,
            children: (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414Z",
              clipRule: "evenodd",
            }),
          }),
      },
    )
  },
  Z0qE(e, t, n) {
    n.d(t, { p: () => s })
    var a = n("ABep"),
      r = n("on57"),
      i = n("zd8w"),
      o = n("UIGa")
    let s = (e) => {
      let t = (0, i.useRef)(null),
        n = (0, i.useId)(),
        s = `search-ui-input-${n}`,
        {
          id: l,
          name: d,
          type: u = "text",
          variant: c = "outline",
          size: p = "md",
          gutterSize: m,
          className: g,
          autoComplete: f,
          disabled: v = !1,
          readOnly: h = !1,
          invalid: w = !1,
          allowAutofillExtensions: y = "password" === u || !!d || (!!f && "off" !== f),
          onFocus: b,
          onBlur: x,
          onAnimationStart: k,
          onAutofill: C,
          autoSelect: A,
          startAdornment: j,
          endAdornment: _,
          inputClassName: S,
          pill: I = !1,
          opticallyAlign: O,
          ref: E,
          __isWidget: M,
          ...T
        } = e,
        [L, N] = (0, i.useState)(!1)
      return (
        (0, i.useEffect)(() => {
          A && t.current?.select()
        }, [A]),
        (0, a.jsxs)("div", {
          className: (0, r.A)("Container-IlLvT8", g),
          "data-w-component": M ? "input" : "",
          "data-variant": c,
          "data-size": p,
          "data-gutter-size": m,
          "data-focused": L,
          "data-disabled": v ? "" : void 0,
          "data-readonly": h ? "" : void 0,
          "data-invalid": w ? "" : void 0,
          "data-pill": I ? "" : void 0,
          "data-optically-align": O,
          "data-has-start-adornment": j ? "" : void 0,
          "data-has-end-adornment": _ ? "" : void 0,
          onMouseDown: (e) => {
            let n = t.current
            if (
              !e.target ||
              !(e.target instanceof Element) ||
              !n ||
              n.contains(e.target) ||
              e.target.closest("button, [type='button'], [role='button'], [role='menuitem']")
            )
              return
            ;(e.preventDefault(), document.activeElement !== n && n.focus())
            let { left: a, top: r } = n.getBoundingClientRect(),
              { clientX: i, clientY: o } = e,
              s = o < r || i < a
            if (1 === e.detail)
              if (s) n.setSelectionRange(0, 0)
              else {
                let e = n.value.length
                n.setSelectionRange(e, e)
              }
            else if (2 === e.detail) {
              let e = n.value.match(/\w+|[^\w\s]/g) || [],
                t = s ? e.at(0) : e.at(-1)
              if (t) {
                let e = s ? n.value.indexOf(t) : n.value.lastIndexOf(t)
                n.setSelectionRange(e, e + t.length)
              }
            } else n.select()
          },
          children: [
            j,
            (0, a.jsx)("input", {
              ...T,
              ref: (0, o.P)([E, t]),
              id: l || (y ? void 0 : s),
              className: (0, r.A)("Input-yfTWZr", S),
              type: u,
              name: d,
              autoComplete: f,
              readOnly: h,
              disabled: v,
              onFocus: (e) => {
                ;(N(!0), b?.(e))
              },
              onBlur: (e) => {
                ;(N(!1), x?.(e))
              },
              onAnimationStart: (e) => {
                ;(k?.(e), "native-autofill-in" === e.animationName && C?.())
              },
              "data-lpignore": !y || void 0,
              "data-1p-ignore": !y || void 0,
            }),
            _,
          ],
        })
      )
    }
  },
  crcI(e, t, n) {
    n.d(t, { Y: () => f })
    var a = n("ABep"),
      r = n("on57"),
      i = n("zd8w"),
      o = n("UIGa"),
      s = n("pZwg"),
      l = n("fZ4G"),
      d = n("hwkA")
    let u = (e) =>
        (0, a.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 9",
          fill: "currentColor",
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292894C14.6834 -0.0976305 15.3166 -0.0976304 15.7071 0.292894C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z",
          }),
        }),
      c = (e) =>
        (0, a.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 10 16",
          fill: "currentColor",
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.34151 0.747423C4.71854 0.417526 5.28149 0.417526 5.65852 0.747423L9.65852 4.24742C10.0742 4.61111 10.1163 5.24287 9.75259 5.6585C9.38891 6.07414 8.75715 6.11626 8.34151 5.75258L5.00001 2.82877L1.65852 5.75258C1.24288 6.11626 0.61112 6.07414 0.247438 5.6585C-0.116244 5.24287 -0.0741267 4.61111 0.34151 4.24742L4.34151 0.747423ZM0.246065 10.3578C0.608879 9.94139 1.24055 9.89795 1.65695 10.2608L5.00001 13.1737L8.34308 10.2608C8.75948 9.89795 9.39115 9.94139 9.75396 10.3578C10.1168 10.7742 10.0733 11.4058 9.65695 11.7687L5.65695 15.2539C5.28043 15.582 4.7196 15.582 4.34308 15.2539L0.343082 11.7687C-0.0733128 11.4058 -0.116749 10.7742 0.246065 10.3578Z",
          }),
        })
    var p = n("bm6U"),
      m = n("WjNJ"),
      g = "DropdownIcon-hjJBCI"
    let f = ({
        ref: e,
        onPointerDown: t,
        onKeyDown: n,
        onPointerEnter: u,
        onInteract: c,
        invalid: g,
        disabled: f,
        children: h,
        className: w,
        variant: y = "outline",
        size: b = "md",
        block: x,
        disablePressable: k,
        opticallyAlign: C,
        pill: A = s.N.pill,
        loading: j,
        onClearClick: _,
        selected: S = !1,
        StartIcon: I,
        dropdownIconType: O = "dropdown",
        ...E
      }) => {
        let M = (0, i.useRef)(null),
          T = !!_ && S && !j && !f,
          L = O && "none" !== O && !j,
          N = T || j || L,
          P = !j && !f
        return (0, a.jsxs)("span", {
          ref: (0, o.P)([M, e]),
          className: (0, r.A)("SelectControl-GhTNXd", w),
          role: "button",
          tabIndex: f ? -1 : 0,
          onPointerEnter: (e) => {
            ;(k || (0, l.Ny)(e), u?.(e))
          },
          onPointerDown: P
            ? (e) => {
                2 !== e.button && ((e.stopPropagation(), c) ? (e.preventDefault(), c()) : (t?.(e), E.onClick?.(e)))
              }
            : void 0,
          onKeyDown: P
            ? (e) => {
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                  case " ":
                    ;(e.stopPropagation(),
                      e.preventDefault(),
                      c
                        ? c()
                        : M.current?.dispatchEvent(
                            new PointerEvent("pointerdown", { bubbles: !0, cancelable: !0, pointerType: "mouse" }),
                          ))
                    break
                  case "Enter":
                    break
                  default:
                    n?.(e)
                }
              }
            : void 0,
          "data-variant": y,
          "data-block": x ? "" : void 0,
          "data-disable-pressable": k ? "" : void 0,
          "data-pill": A ? "" : void 0,
          "data-size": b,
          "data-optically-align": C,
          "aria-busy": j ? "true" : void 0,
          "data-selected": S,
          "data-loading": j ? "" : void 0,
          "data-invalid": g ? "" : void 0,
          "data-disabled": f ? "" : void 0,
          "aria-disabled": f,
          ...E,
          onClick: void 0,
          children: [
            I && (0, a.jsx)(I, { className: "StartIcon-Ja6YRO" }),
            (0, a.jsx)("span", { className: "TriggerText-KJGu4X", children: h }),
            N &&
              (0, a.jsxs)("div", {
                className: "IndicatorWrapper-pRcpwW",
                children: [
                  T &&
                    (0, a.jsx)(d.$, {
                      "aria-label": "Clear current value",
                      className: "Clear-rIcDRI",
                      onPointerDown: (e) => {
                        e.stopPropagation()
                      },
                      onClick: (e) => {
                        ;(e.stopPropagation(), e.preventDefault(), _())
                      },
                      color: "secondary",
                      variant: L ? "ghost" : "solid",
                      size: "3xs",
                      uniform: !0,
                      pill: A,
                      "data-only-child": L ? void 0 : "",
                      children: (0, a.jsx)(p.X, {}),
                    }),
                  j && (0, a.jsx)(m.I, { className: "LoadingIndicator-zQ4zI3" }),
                  L && (0, a.jsx)(v, { iconType: O }),
                ],
              }),
          ],
        })
      },
      v = ({ iconType: e }) =>
        "chevronDown" === e
          ? (0, a.jsx)(u, { className: (0, r.A)(g, "DropdownIconChevron-sAyN5s") })
          : (0, a.jsx)(c, { className: g })
  },
  AEu9(e, t, n) {
    n.d(t, { l: () => P })
    var a = n("ABep"),
      r = n("on57"),
      i = n("YLKE"),
      o = n("zd8w"),
      s = n("pZwg"),
      l = n("BAKu"),
      d = n("We8q")
    function u(e) {
      let t = (0, o.useRef)(e)
      return ((t.current = e), (0, o.useCallback)((...e) => t.current(...e), []))
    }
    var c = n("o4M9"),
      p = n("fZ4G"),
      m = n("hwkA"),
      g = n("EYJV"),
      f = n("cfIY")
    let v = (e) =>
        (0, a.jsxs)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: [
            (0, a.jsx)("path", {
              d: "M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm-1-2.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5Z",
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
              clipRule: "evenodd",
            }),
          ],
        }),
      h = (e) =>
        (0, a.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.875 4.5C7.35418 4.5 4.5 7.35418 4.5 10.875C4.5 14.3958 7.35418 17.25 10.875 17.25C14.3958 17.25 17.25 14.3958 17.25 10.875C17.25 7.35418 14.3958 4.5 10.875 4.5ZM2.5 10.875C2.5 6.24962 6.24962 2.5 10.875 2.5C15.5004 2.5 19.25 6.24962 19.25 10.875C19.25 12.8273 18.582 14.6236 17.462 16.0478L21.2071 19.7929C21.5976 20.1834 21.5976 20.8166 21.2071 21.2071C20.8166 21.5976 20.1834 21.5976 19.7929 21.2071L16.0478 17.462C14.6236 18.582 12.8273 19.25 10.875 19.25C6.24962 19.25 2.5 15.5004 2.5 10.875Z",
            fill: "currentColor",
          }),
        })
    var w = n("bm6U"),
      y = n("Z0qE"),
      b = n("crcI"),
      x = n("UIGa")
    let k = ({ label: e }) => (0, a.jsx)(a.Fragment, { children: e }),
      C = (e) => `Remove ${e.label}`,
      A = ({
        tags: e,
        onRemoveTag: t,
        TagView: n = k,
        getRemoveLabel: i = C,
        ref: s,
        className: l,
        inputClassName: d,
        disabled: u,
        placeholder: c,
        onKeyDown: p,
        startAdornment: m,
        ...g
      }) => {
        let f = (0, o.useRef)(null),
          v = (0, o.useRef)(new Map()),
          h = (t) => {
            let n = e[t]
            n ? v.current.get(n.value)?.focus({ preventScroll: !0 }) : f.current?.focus({ preventScroll: !0 })
          },
          b = (e) => {
            ;(t(e), f.current?.focus({ preventScroll: !0 }))
          }
        return (0, a.jsx)(y.p, {
          ...g,
          ref: (0, x.P)([f, s]),
          className: (0, r.A)("Container-ii4nGw", l),
          inputClassName: (0, r.A)("Input-TqEwAO", d),
          disabled: u,
          placeholder: 0 === e.length ? c : void 0,
          startAdornment: (0, a.jsxs)(a.Fragment, {
            children: [
              m,
              e.map((e, t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    ref: (t) => {
                      t ? v.current.set(e.value, t) : v.current.delete(e.value)
                    },
                    className: "Tag-zH19Nb",
                    tabIndex: -1,
                    role: "group",
                    "aria-label": e.label,
                    onClick: () => {
                      u || h(t)
                    },
                    onKeyDown: (n) => {
                      if (!u && n.target === n.currentTarget && !n.nativeEvent.isComposing)
                        switch (n.key) {
                          case "ArrowLeft":
                            ;(n.preventDefault(), h(Math.max(0, t - 1)))
                            break
                          case "ArrowRight":
                            ;(n.preventDefault(), h(t + 1))
                            break
                          case "Backspace":
                          case "Delete":
                            ;(n.preventDefault(), b(e))
                        }
                    },
                    children: [
                      (0, a.jsx)("span", { className: "TagValue-uql1s_", children: (0, a.jsx)(n, { ...e }) }),
                      (0, a.jsx)("button", {
                        className: "TagRemove-Jvbgpl",
                        type: "button",
                        tabIndex: -1,
                        disabled: u,
                        "aria-label": i(e),
                        onClick: (t) => {
                          ;(t.stopPropagation(), b(e))
                        },
                        children: (0, a.jsx)(w.X, { width: 14, height: 14 }),
                      }),
                    ],
                  },
                  e.value,
                ),
              ),
            ],
          }),
          onKeyDown: (t) => {
            if (
              !t.nativeEvent.isComposing &&
              !t.altKey &&
              !t.ctrlKey &&
              !t.metaKey &&
              e.length > 0 &&
              0 === t.currentTarget.selectionStart &&
              0 === t.currentTarget.selectionEnd &&
              ("ArrowLeft" === t.key || "Backspace" === t.key)
            ) {
              ;(t.preventDefault(), h(e.length - 1))
              return
            }
            p?.(t)
          },
        })
      }
    var j = n("slpy"),
      _ = n("DL3o"),
      S = "Option-Tm0uqE",
      I = "PressableInner-EsxCsQ",
      O = "OptionInner-dam4fB"
    let E = (0, o.createContext)(null),
      M = () => {
        let e = (0, o.use)(E)
        if (!e) throw Error("Select components must be wrapped in <Select />")
        return e
      },
      T = ({ label: e }) => (0, a.jsx)(a.Fragment, { children: e }),
      L = ({ label: e }) => (0, a.jsx)(a.Fragment, { children: e }),
      N = ({ values: e, selectedAll: t }) => {
        let n = t
          ? "All selected"
          : 0 === e.length
            ? "Select..."
            : 1 === e.length
              ? e[0]?.label
              : `${e.length} selected`
        return (0, a.jsx)(a.Fragment, { children: n })
      },
      P = (e) => {
        let {
            id: t,
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            required: l,
            value: p,
            name: m,
            multiple: g,
            variant: f = "outline",
            size: v = "md",
            dropdownIconType: h = "dropdown",
            loading: w = !1,
            open: y,
            onOpenChange: b,
            clearable: x = !1,
            disabled: k = !1,
            invalid: C = !1,
            placeholder: A = "Select...",
            loadingPlaceholder: j = "Loading...",
            pill: _ = s.N.pill,
            disablePressable: S,
            listWidth: I,
            options: O,
            pagination: M,
            footer: P,
            actions: R = [],
            side: q = "bottom",
            avoidCollisions: W = !0,
            onChange: F,
            optionClassName: B,
            optionIndicatorPosition: K = "start",
            OptionView: $ = T,
            TriggerStartIcon: Z,
            endAdornment: H,
            triggerClassName: G,
            onTriggerClickCapture: V,
            opticallyAlign: Q,
            TriggerView: Y,
            searchPlaceholder: X = "",
            searchValue: J,
            searchPredicate: ee = er,
            searchEmptyMessage: et = "No results found.",
            onSearchChange: en,
            searchable: ea,
            listMaxWidth: ei = "auto",
            __isWidget: eo = !1,
            forceNativeSelect: es = !1,
          } = e,
          ed = e.block ?? "ghost" !== f,
          eu = e.align ?? (ed ? "center" : "start"),
          ec = e.alignOffset ?? ("center" === eu ? 0 : -5),
          ep = e.listMinWidth ?? (ed ? "auto" : 300)
        if (es && g && c.Cu) throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.")
        let em = g ? (e.selectedOptions ?? el(O, p)) : el(O, [p]),
          eg = g ? e.getTagRemoveLabel : void 0,
          ef = (0, d.Y)((e, t) => {
            g ? (e.value ? (t ? F(em.filter((t) => t.value !== e.value)) : F(em.concat(e))) : F([])) : F(e)
          }),
          ev = u((e) => b?.(e)),
          eh = b ? ev : void 0,
          ew = u((e) => en?.(e)),
          ey = en ? ew : void 0,
          eb = u((e) => V?.(e)),
          ex = V ? eb : void 0,
          ek = (0, o.useRef)(ee)
        ek.current = ee
        let eC = (0, o.useMemo)(() => R, [R.length]),
          eA = (0, o.useRef)(R)
        eA.current = R
        let ej = (0, o.useCallback)((e) => {
            eA.current.find((t) => t.id === e)?.onSelect(e)
          }, []),
          e_ = (0, o.useMemo)(() => (U(O) ? O.reduce((e, t) => e + t.options.length, 0) : O.length), [O]),
          eS = (0, o.useId)(),
          eI = `select-trigger-${eS}`,
          eO = ea ?? e_ > 15,
          eE = (0, o.useMemo)(() => ({ "aria-label": n, "aria-labelledby": r, "aria-describedby": i }), [i, n, r]),
          eM = (0, o.useMemo)(
            () =>
              g ? { multiple: !0, value: p, TriggerView: Y ?? N } : { multiple: !1, value: p, TriggerView: Y ?? L },
            [g, p, Y],
          ),
          eT = (0, o.useMemo)(
            () => ({
              ...eM,
              triggerId: eI,
              id: t,
              name: m,
              required: l,
              options: O,
              pagination: M,
              selectedOptions: em,
              getTagRemoveLabel: eg,
              endAdornment: H,
              placeholder: A,
              loadingPlaceholder: j,
              loading: w,
              open: y,
              onOpenChange: eh,
              clearable: x,
              variant: f,
              pill: _,
              disablePressable: S,
              size: v,
              dropdownIconType: h,
              block: ed,
              align: eu,
              alignOffset: ec,
              side: q,
              avoidCollisions: W,
              listWidth: I,
              listMinWidth: ep,
              listMaxWidth: ei,
              searchPlaceholder: X,
              searchEmptyMessage: et,
              onSearchChange: ey,
              TriggerStartIcon: Z,
              triggerClassName: G,
              onTriggerClickCapture: ex,
              opticallyAlign: Q,
              optionClassName: B,
              optionIndicatorPosition: K,
              OptionView: $,
              footer: P,
              actions: eC,
              onActionSelect: ej,
              onSelectRef: ef,
              searchPredicateRef: ek,
              searchable: eO,
              disabled: k,
              invalid: C,
              __isWidget: eo,
              forceNativeSelect: es,
            }),
            [
              eM,
              eI,
              t,
              l,
              m,
              O,
              M,
              em,
              eg,
              H,
              A,
              j,
              w,
              y,
              eh,
              x,
              f,
              _,
              S,
              v,
              h,
              ed,
              eu,
              ec,
              q,
              W,
              I,
              ep,
              ei,
              X,
              et,
              ey,
              Z,
              G,
              ex,
              Q,
              B,
              K,
              $,
              P,
              eC,
              ej,
              ef,
              eO,
              k,
              C,
              eo,
              es,
            ],
          )
        return (0, a.jsx)(E.Provider, {
          value: eT,
          children: es ? (0, a.jsx)(D, { ariaProps: eE }) : (0, a.jsx)(z, { ariaProps: eE, searchValue: J }),
        })
      },
      R = (e) => {
        let {
            triggerId: t,
            id: n,
            required: r,
            value: i,
            multiple: s,
            options: l,
            selectedOptions: d,
            loading: u,
            disabled: c,
            invalid: p,
            clearable: m,
            name: g,
            variant: f,
            pill: v,
            disablePressable: h,
            size: w,
            dropdownIconType: y,
            placeholder: x,
            loadingPlaceholder: k,
            block: C,
            opticallyAlign: A,
            triggerClassName: j,
            onTriggerClickCapture: _,
            TriggerStartIcon: S,
            TriggerView: I,
            onSelectRef: O,
            __isWidget: E,
            forceNativeSelect: T,
          } = M(),
          { onOpenChange: L, ariaProps: N, ...P } = e,
          R = N?.["aria-label"],
          D = N?.["aria-labelledby"],
          q = N?.["aria-describedby"],
          W = s ? i[0] : i,
          z = u ? k : x,
          F = (g || n) && !T,
          B = (0, o.useId)(),
          K = (0, o.useId)(),
          $ = (0, o.useMemo)(() => es(l, W) || { value: "", label: z }, [W, l, z]),
          U = s ? i.length > 0 : !!i,
          Z = u || !U,
          H = (0, o.useMemo)(() => em(), []),
          G = (0, o.useMemo)(() => {
            if (!s) return { values: [], selectedAll: !1 }
            let e = l.flatMap((e) => ("options" in e ? e.options : e))
            return {
              values: d.length ? d : [{ value: "", label: z }],
              selectedAll: e.length > 0 && e.length <= i.length,
            }
          }, [s, l, d, i, z]),
          V = (0, o.useMemo)(() => (D ? `${D} ${B}` : R ? `${K} ${B}` : void 0), [K, R, D, B])
        return (0, a.jsxs)(b.Y, {
          id: t,
          "aria-labelledby": V,
          "aria-describedby": q,
          className: j,
          selected: !Z,
          variant: f,
          pill: v,
          disablePressable: h,
          block: C,
          size: w,
          disabled: c,
          invalid: p,
          loading: u,
          StartIcon: S,
          opticallyAlign: A,
          onClickCapture: _,
          dropdownIconType: y,
          onClearClick: m
            ? () => {
                ;(O.current({ value: "", label: "" }), L?.(!1))
              }
            : void 0,
          onInteract: L,
          onKeyDown: (e) => {
            let t = e.key
            if (!s && eg(t)) {
              let n = H(t)
              e.stopPropagation()
              let a = ef(l, n, W)
              a && O.current(a)
            }
          },
          "data-w-component": E ? "select" : void 0,
          ...P,
          children: [
            R &&
              !D &&
              (0, a.jsx)("span", {
                id: K,
                className: "sr-only w-full h-0 left-0 bottom-0 pointer-events-none",
                children: R,
              }),
            (0, a.jsx)("span", { id: B, children: s ? (0, a.jsx)(I, { ...G }) : (0, a.jsx)(I, { ...$ }) }),
            F &&
              (0, a.jsx)("input", {
                id: n,
                name: g,
                value: W,
                tabIndex: -1,
                onFocus: () => {
                  document.getElementById(t)?.focus({ preventScroll: !0 })
                },
                onChange: () => {},
                required: r,
                inert: !0,
                className: "sr-only w-full h-0 left-0 bottom-0 pointer-events-none",
                "aria-hidden": "true",
              }),
          ],
        })
      },
      D = ({ ariaProps: e }) => {
        let {
          value: t,
          multiple: n,
          name: i,
          options: o,
          placeholder: s,
          block: l,
          loading: d,
          onSelectRef: u,
          onTriggerClickCapture: c,
        } = M()
        if (n) throw Error("Rendered native select while using `multiple` selection mode.")
        return (0, a.jsx)("div", {
          className: "flex min-w-0",
          children: (0, a.jsxs)("div", {
            className: (0, r.A)("relative max-w-full", l && "w-full"),
            children: [
              (0, a.jsxs)("select", {
                name: i,
                "aria-label": e["aria-label"],
                "aria-labelledby": e["aria-labelledby"],
                "aria-describedby": e["aria-describedby"],
                className: "NativeSelect-Q02mo4",
                value: t,
                onClickCapture: c,
                onKeyDown: (e) => {
                  e.stopPropagation()
                },
                onChange: (e) => {
                  let t = es(o, e.target.value)
                  t && u.current(t)
                },
                disabled: d,
                "data-native-selectcontrol": "",
                children: [
                  !t && (0, a.jsx)("option", { value: "", children: s }),
                  o.map((e) => ($(e) ? (0, a.jsx)(q, { ...e }, e.label) : (0, a.jsx)(W, { ...e }, e.value))),
                ],
              }),
              (0, a.jsx)(R, { ariaProps: e, tabIndex: -1, "aria-hidden": "true" }),
            ],
          }),
        })
      },
      q = ({ label: e, options: t }) =>
        (0, a.jsx)("optgroup", { label: e, children: t.map((e) => (0, a.jsx)(W, { ...e }, e.value)) }),
      W = ({ value: e, label: t, disabled: n }) => (0, a.jsx)("option", { value: e, disabled: n, children: t }),
      z = ({ ariaProps: e, searchValue: t }) => {
        let {
            triggerId: n,
            loading: r,
            open: u,
            onOpenChange: c,
            side: m,
            align: f,
            alignOffset: v,
            avoidCollisions: h,
            listWidth: w,
            listMinWidth: y,
            listMaxWidth: b,
            block: x,
            onTriggerClickCapture: k,
            multiple: C,
            value: A,
            options: j,
            pagination: S,
            searchable: I,
            searchPredicateRef: O,
            onSearchChange: E,
            footer: T,
          } = M(),
          [L, N] = (0, o.useState)(!1),
          P = (0, o.useRef)(null),
          D = (0, o.useRef)(null),
          q = (0, g.jS)(),
          W = (0, d.Y)(() => {
            ;(Q(""), E?.(""))
          }),
          z = (0, d.Y)(() => eA(!1)),
          B = (0, o.useRef)(null),
          $ = (0, o.useRef)(null),
          U = (0, o.useRef)(null),
          Z = (0, o.useRef)(!1),
          G = (0, o.useRef)(null),
          [V, Q] = (0, o.useState)(""),
          Y = I ? (t ?? V) : "",
          X = (0, o.useRef)(Y),
          J = (0, o.useRef)(null),
          ee = S?.mode === "manual" && S.isFetching,
          et = !I || !!T || !E || j.some((e) => !("options" in e) || e.options.length > 0),
          ea = et || !!Y.trim(),
          er = (u ?? L) && ea,
          el = (0, o.useMemo)(() => em(), []),
          eu = (0, o.useId)(),
          ev = `select-list-${eu}`,
          eh = (0, o.useRef)(C ? "" : A),
          ew = (0, o.useMemo)(() => ei(j, Y, O.current), [j, Y, O]),
          ey = eo(ew),
          [eb, ex] = (0, o.useState)(() => {
            let e = C ? A[0] : A
            return es(ew, e)?.value ?? ey?.value ?? ""
          }),
          ek = (e) => {
            if (e.nativeEvent.isComposing) return
            let t = e.key,
              n = C ? A[0] : A,
              a = eb || ey?.value || n,
              r = document.activeElement === U.current,
              i = B.current
            if (!i) return
            let o = () => {
                let e = new PointerEvent("pointerup", { bubbles: !0, cancelable: !0, pointerType: "mouse" }),
                  t = ed(eb, i)
                t?.dispatchEvent(e)
              },
              s = (e, t) => {
                ;(ex(e), t.scrollIntoView({ block: "nearest" }))
              },
              l = () => {
                let e = C ? A[0] : A
                if (e) {
                  let t = ed(e, i)
                  if (t) return void s(e, t)
                }
                if (ey) {
                  let e = ed(ey.value, i)
                  e && s(ey.value, e)
                }
              }
            switch (t) {
              case "ArrowDown": {
                if ((e.preventDefault(), !eb || !ed(eb, i))) return void l()
                let t = ec(eb, i),
                  n = t?.getAttribute("data-option-id")
                t && n && s(n, t)
                return
              }
              case "ArrowUp": {
                if ((e.preventDefault(), !eb || !ed(eb, i))) return void l()
                let t = ep(a, i),
                  n = t?.getAttribute("data-option-id")
                t && n && s(n, t)
                return
              }
              case "Enter":
                ;(e.preventDefault(), o())
                return
              case " ":
                if (r) return
                ;(e.preventDefault(), o())
                return
            }
            if (eg(t)) {
              if (r) return
              let n = el(t)
              e.stopPropagation()
              let a = ef(j, n, eb)
              if (a) {
                let e = ed(a.value, i)
                e && (ex(a.value), e.scrollIntoView({ block: "nearest" }))
              }
            }
          },
          eC = (0, o.useMemo)(
            () => ({
              valueRef: eh,
              listId: ev,
              highlightedValue: eb,
              setHighlightedValue: ex,
              requestCloseRef: z,
              resetSearchRef: W,
              searchTerm: Y,
              listRef: $,
            }),
            [ev, eb, Y, z, W],
          )
        ;((0, o.useLayoutEffect)(() => {
          if (!er) return
          ;((eh.current = C ? "" : A),
            ex(es(ew, C ? A[0] : A)?.value ?? ey?.value ?? ""),
            (0, p.yQ)(() => {
              let e = B.current,
                t = $.current
              if (!e || !t) return
              let n = ed(eb, t)
              if (n) {
                let e = t.clientHeight,
                  a = n.offsetTop,
                  r = n.offsetHeight,
                  i = t.scrollHeight - e
                t.scrollTop = Math.max(0, Math.min(a - e / 2 + r / 2, i))
              }
            }))
          let e = U.current || $.current || B.current
          e?.focus({ preventScroll: !0 })
        }, [er]),
          (0, o.useLayoutEffect)(() => {
            er || (J.current = null)
          }, [er]),
          (0, o.useLayoutEffect)(() => {
            let e = null != S && X.current === Y
            if (((X.current = Y), !er || !$.current)) {
              J.current = null
              return
            }
            if (S?.mode === "manual") {
              let e = ew.flatMap((e) => ("options" in e ? e.options : [e]))
              if (S.isFetching && !J.current)
                J.current = { values: new Set(e.map((e) => e.value)), searchTerm: Y, highlightedValue: eb }
              else if (!S.isFetching && J.current) {
                let t = J.current
                J.current = null
                let n = document.activeElement,
                  a = n === U.current || n === $.current || n === B.current,
                  r =
                    t.searchTerm === Y && t.highlightedValue === eb
                      ? e.find((e) => !e.disabled && !t.values.has(e.value))
                      : void 0
                if (a && r) {
                  ex(r.value)
                  let e = ed(r.value, $.current)
                  if (e) {
                    let t = e.getBoundingClientRect(),
                      n = $.current.getBoundingClientRect()
                    t.top < n.top
                      ? ($.current.scrollTop -= n.top - t.top)
                      : t.bottom > n.bottom && ($.current.scrollTop += t.bottom - n.bottom)
                  }
                }
                if ((a && t.searchTerm === Y && (U.current ?? $.current)?.focus({ preventScroll: !0 }), a && r)) return
              }
            } else J.current = null
            let t = es(ew, eb)
            ;(e && t && !t.disabled) || (e || ($.current.scrollTop = 0), ex(eo(ew)?.value ?? ""))
          }, [ew, Y, null != S, ee]))
        let eA = (e) => {
          let t = (void 0 === e ? !er : e) && ea
          if (t === er) return
          let a = !!P.current?.contains(document.activeElement)
          ;(!t && (Q(""), Y && E?.("")),
            void 0 === u && N(t),
            c?.(t),
            t ||
              setTimeout(() => {
                let e = document.activeElement,
                  t = !!P.current?.contains(e),
                  r = a && e === document.body
                ;(t || r) &&
                  ((Z.current = !0), document.getElementById(n)?.focus({ preventScroll: !0 }), (Z.current = !1))
              }))
        }
        return (
          (0, l.r)(er, () => {
            eA(!1)
          }),
          (0, a.jsx)(F, {
            value: eC,
            children: (0, a.jsxs)(i.bL, {
              open: er,
              onOpenChange: (e) => {
                ;(r && e) || eA(e)
              },
              modal: !1,
              children: [
                I
                  ? (0, a.jsx)(i.Mz, {
                      asChild: !0,
                      children: (0, a.jsx)("div", {
                        ref: D,
                        className: "SearchControl-Vayh_U",
                        "data-block": x ? "" : void 0,
                        onClickCapture: k,
                        children: (0, a.jsx)(K, {
                          ariaProps: e,
                          searchInputRef: U,
                          open: er,
                          searchTerm: Y,
                          onOpen: () => {
                            Z.current || eA(!0)
                          },
                          onKeyDown: (e) => {
                            if (er && T && "Tab" === e.key && !e.shiftKey) {
                              let t = P.current?.querySelector("[data-select-footer]")
                              for (let n of Array.from(
                                t?.querySelectorAll(
                                  "a[href], button, input, select, textarea, [tabindex], [contenteditable='true']",
                                ) ?? [],
                              ).filter(
                                (e) =>
                                  e.tabIndex >= 0 &&
                                  !e.matches(":disabled, input[type='hidden']") &&
                                  !e.closest("[hidden], [inert]"),
                              ))
                                if ((n.focus(), n.ownerDocument.activeElement === n)) {
                                  ;((G.current = n), e.preventDefault())
                                  return
                                }
                            }
                            er || ("ArrowDown" !== e.key && "ArrowUp" !== e.key)
                              ? er && ek(e)
                              : (e.preventDefault(), eA(!0))
                          },
                          onChange: (e) => {
                            let t = et || !!e.trim()
                            er && !t ? eA(!1) : (Q(e), E?.(e), void 0 === u && N(t), !er && t && c?.(!0))
                          },
                        }),
                      }),
                    })
                  : (0, a.jsx)(i.l9, { asChild: !0, children: (0, a.jsx)(R, { ariaProps: e, onOpenChange: eA }) }),
                (0, a.jsx)(i.ZL, {
                  forceMount: !0,
                  container: q,
                  children: (0, a.jsx)(_.F, {
                    className: "Menu-rg4fYu",
                    enterDuration: 350,
                    exitDuration: 200,
                    children:
                      er &&
                      (0, a.jsx)(
                        i.UC,
                        {
                          onKeyDownCapture: (e) => {
                            "Tab" === e.key &&
                              e.shiftKey &&
                              e.target === G.current &&
                              (U.current?.focus(), e.preventDefault(), e.stopPropagation())
                          },
                          ref: P,
                          forceMount: !0,
                          className: "MenuList-k4HoiO",
                          side: m,
                          sideOffset: 5,
                          align: f,
                          alignOffset: v,
                          avoidCollisions: h,
                          collisionPadding: { bottom: 30, top: 30 },
                          onOpenAutoFocus: (e) => {
                            e.preventDefault()
                            let t = U.current || $.current || B.current
                            t?.focus({ preventScroll: !0 })
                          },
                          onCloseAutoFocus: p.iB,
                          onEscapeKeyDown: p.iB,
                          onInteractOutside: (e) => {
                            e.target instanceof Node && D.current?.contains(e.target) && e.preventDefault()
                          },
                          onMouseDown: (e) => {
                            I &&
                              !(e.target instanceof Element && e.target.closest("[data-select-footer]")) &&
                              e.preventDefault()
                          },
                          style: (0, p.mW)({
                            scale: s.N.pressable ? void 0 : "1",
                            "select-list-width": w,
                            "select-list-min-width": y,
                            "select-list-max-width": b,
                          }),
                          children: (0, a.jsxs)("div", {
                            className: "MenuInner-nggNzl",
                            onKeyDown: ek,
                            ref: B,
                            tabIndex: I ? -1 : 0,
                            children: [(0, a.jsx)(H, { filteredOptions: ew }), (0, a.jsx)(en, {})],
                          }),
                        },
                        "dropdown",
                      ),
                  }),
                }),
              ],
            }),
          })
        )
      },
      F = (0, o.createContext)(null),
      B = () => {
        let e = (0, o.use)(F)
        if (!e) throw Error("Select menu components must be wrapped in <CustomSelect />")
        return e
      },
      K = ({ ariaProps: e, searchInputRef: t, open: n, searchTerm: i, onChange: s, onOpen: l, onKeyDown: d }) => {
        let {
            triggerId: u,
            id: c,
            name: p,
            required: g,
            value: f,
            multiple: v,
            selectedOptions: b,
            getTagRemoveLabel: x,
            size: k,
            pill: C,
            variant: j,
            disabled: _,
            invalid: S,
            loading: I,
            loadingPlaceholder: O,
            placeholder: E,
            searchPlaceholder: T,
            triggerClassName: L,
            opticallyAlign: N,
            TriggerStartIcon: P,
            TriggerView: R,
            clearable: D,
            onSelectRef: q,
            endAdornment: W,
          } = M(),
          { listId: z, highlightedValue: F } = B(),
          K = b[0],
          $ = !v && !i && null != K,
          U = (0, o.useId)(),
          H = {
            ...e,
            id: u,
            ref: t,
            className: (0, r.A)(L, "ghost" === j && "SearchGhost-E3QlXU"),
            size: k,
            pill: C,
            variant: "ghost" === j ? "outline" : j,
            disabled: _ || I,
            invalid: S,
            opticallyAlign: N,
            value: i,
            placeholder: I ? O : T || E,
            onChange: (e) => s(e.target.value),
            onFocus: l,
            onClick: l,
            onKeyDown: d,
            autoComplete: "off",
            autoCorrect: "off",
            spellCheck: !1,
            "aria-busy": I || void 0,
            "aria-autocomplete": "list",
            role: "combobox",
            "aria-controls": n ? z : void 0,
            "aria-expanded": n,
            "aria-activedescendant": n && F ? Z(F) : void 0,
            endAdornment: W,
          }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            v
              ? (0, a.jsx)(A, {
                  ...H,
                  tags: b,
                  getRemoveLabel: x,
                  onRemoveTag: (e) => q.current(e, !0),
                  startAdornment: P ? (0, a.jsx)(P, {}) : void 0,
                })
              : (0, a.jsx)(y.p, {
                  ...H,
                  inputClassName: "SearchInput-nkxre0",
                  onKeyDown: (e) => {
                    if (
                      "Backspace" === e.key &&
                      D &&
                      $ &&
                      !e.nativeEvent.isComposing &&
                      !e.altKey &&
                      !e.ctrlKey &&
                      !e.metaKey
                    ) {
                      ;(e.preventDefault(), q.current({ value: "", label: "" }))
                      return
                    }
                    d(e)
                  },
                  placeholder: $ ? "" : H.placeholder,
                  "aria-describedby": [e["aria-describedby"], $ ? U : void 0].filter(Boolean).join(" ") || void 0,
                  startAdornment: $
                    ? (0, a.jsx)("span", {
                        id: U,
                        className: "SearchSelection-BN1yuT",
                        role: "presentation",
                        onClick: _ || I ? void 0 : l,
                        children: (0, a.jsx)(R, { ...K }),
                      })
                    : P
                      ? (0, a.jsx)(P, {})
                      : (0, a.jsx)(h, { width: 16, height: 16, className: "fill-secondary" }),
                  endAdornment:
                    D && b.length > 0
                      ? (0, a.jsx)(m.$, {
                          color: "secondary",
                          variant: "ghost",
                          size: "3xs",
                          uniform: !0,
                          "aria-label": "Clear current value",
                          disabled: _ || I,
                          onClick: () => {
                            ;(q.current({ value: "", label: "" }), s(""), t.current?.focus())
                          },
                          children: (0, a.jsx)(w.X, {}),
                        })
                      : W,
                }),
            (p || c) &&
              (0, a.jsx)("input", {
                id: c,
                name: p,
                value: v ? (f[0] ?? "") : f,
                required: g,
                tabIndex: -1,
                inert: !0,
                "aria-hidden": "true",
                className: "sr-only",
                onChange: () => {},
                onFocus: () => t.current?.focus(),
              }),
          ],
        })
      },
      $ = (e) => "options" in e,
      U = (e) => !!e[0] && $(e[0]),
      Z = (e) => `select-option-${encodeURIComponent(e)}`,
      H = ({ filteredOptions: e }) => {
        let { searchEmptyMessage: t, multiple: n, searchable: r, pagination: i } = M(),
          { listId: o, highlightedValue: s, listRef: l } = B(),
          d = s ? Z(s) : void 0,
          u = e.reduce((e, t) => e + ("options" in t ? t.options.length : 1), 0)
        if (!e.length)
          return (0, a.jsxs)("div", {
            id: o,
            ref: l,
            role: "listbox",
            "aria-multiselectable": n || void 0,
            children: [
              (0, a.jsx)("div", {
                className: "SearchEmpty-llQB5a",
                "data-text-only": "string" == typeof t ? "" : void 0,
                role: "status",
                children: t,
              }),
              i && "manual" !== i.mode && (0, a.jsx)(G, { pagination: i }),
            ],
          })
        let c = U(e),
          p = null == i && !c && e.length > 300,
          m = c
            ? e.map((e) => (0, a.jsx)(Q, { ...e }, e.label))
            : e.slice(0, null == i ? 300 : void 0).map((e) => (0, a.jsx)(et, { ...e }, e.value))
        return (0, a.jsxs)("div", {
          id: o,
          className: "OptionsList-tSiCXf",
          ref: l,
          role: "listbox",
          tabIndex: r ? -1 : 0,
          "aria-activedescendant": d,
          "aria-multiselectable": n || void 0,
          children: [
            m,
            p && (0, a.jsx)(Y, { numHidden: e.length - 300 }),
            i && "manual" !== i.mode && (0, a.jsx)(G, { pagination: i }, u),
          ],
        })
      },
      G = ({ pagination: e }) => {
        let t = u(e.onLoadMore),
          n = (0, o.useCallback)(
            (e) => {
              if (null == e) return
              let n = !0,
                a = new IntersectionObserver(
                  (e) => {
                    n && e.some((e) => e.isIntersecting) && ((n = !1), a.disconnect(), t())
                  },
                  { root: e.parentElement },
                )
              return (
                a.observe(e),
                () => {
                  ;((n = !1), a.disconnect())
                }
              )
            },
            [t],
          )
        return e.hasNextPage && !e.isFetching
          ? (0, a.jsx)("div", { className: "PaginationSentinel-FkZCvf", "aria-hidden": !0, ref: n })
          : null
      },
      V = { limit: 100, label: "Show all" },
      Q = ({ label: e, options: t, optionsLimit: n = V }) => {
        let r = (0, o.useId)(),
          { optionIndicatorPosition: i, pagination: s } = M(),
          { searchTerm: l, setHighlightedValue: d } = B(),
          [u, c] = (0, o.useState)(!1),
          p = null == s && n.limit < t.length && !l && !u,
          m = null == s && 300 < t.length && !p,
          g = t
        return (
          p ? (g = t.slice(0, n.limit)) : m && (g = t.slice(0, 300)),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "OptionGroupHeading-c0U5nA",
                children: [
                  "start" === i && (0, a.jsx)(J, { position: i }),
                  e,
                  "end" === i && (0, a.jsx)(J, { position: i }),
                ],
              }),
              g.map((e) => (0, a.jsx)(et, { ...e }, e.value)),
              p &&
                (0, a.jsx)(X, {
                  value: `group-limit-${r}`,
                  label: n.label,
                  onPointerUp: () => {
                    ;(c(!0), d(t[n.limit]?.value ?? ""))
                  },
                }),
              m && (0, a.jsx)(Y, { numHidden: t.length - 300 }),
            ],
          })
        )
      },
      Y = ({ numHidden: e }) => {
        let { optionIndicatorPosition: t } = M()
        return (0, a.jsxs)("div", {
          className: "OptionHardLimitHeading-UmEIsY",
          children: [
            "start" === t && (0, a.jsx)(J, { position: t }),
            `\u{2026}and ${e.toLocaleString()} more options. Use search to refine results further.`,
            "end" === t && (0, a.jsx)(J, { position: t }),
          ],
        })
      },
      X = ({ value: e, label: t, onPointerUp: n }) => {
        let { optionIndicatorPosition: i } = M(),
          { highlightedValue: o, setHighlightedValue: s } = B(),
          l = e === o
        return (0, a.jsx)("div", {
          className: (0, r.A)(S, "OptionsLimit-SDgq93"),
          id: Z(e),
          "data-option-id": e,
          "data-highlight": l ? "" : void 0,
          role: "option",
          "aria-selected": !1,
          onPointerUp: n,
          onPointerMove: () => {
            l || s(e)
          },
          onPointerLeave: () => {
            s((t) => (t !== e ? t : ""))
          },
          children: (0, a.jsxs)("div", {
            className: (0, r.A)(I, O),
            children: [
              "start" === i && (0, a.jsx)(J, { position: i }),
              t,
              "end" === i && (0, a.jsx)(J, { position: i }),
            ],
          }),
        })
      },
      J = ({ children: e, indicator: t = !1, position: n }) =>
        (0, a.jsx)("div", {
          className: "OptionIndicatorSlot-BWd0M4",
          "data-option-indicator-position": n,
          "data-select-option-indicator": t ? "" : void 0,
          children: e,
        }),
      ee = ({ isSelected: e, position: t }) =>
        (0, a.jsx)(J, {
          indicator: !0,
          position: t,
          children: e && (0, a.jsx)(f.J, { className: "OptionCheck-XJTh51" }),
        }),
      et = (e) => {
        let {
            optionClassName: t,
            OptionView: n,
            value: i,
            multiple: o,
            searchable: s,
            onSelectRef: l,
            optionIndicatorPosition: d,
          } = M(),
          { valueRef: u, requestCloseRef: c, resetSearchRef: p, highlightedValue: m, setHighlightedValue: g } = B(),
          { value: f, disabled: h, tooltip: w } = e,
          y = "" === i ? "" : u.current,
          b = o ? i.includes(f) : f === y,
          x = f === m
        return (0, a.jsx)("div", {
          className: (0, r.A)(S, t),
          id: Z(f),
          "data-highlight": x ? "" : void 0,
          role: "option",
          "aria-selected": b,
          "data-selected": b ? "" : void 0,
          "data-option-id": f,
          onPointerUp: h
            ? void 0
            : () => {
                o ? (l.current(e, b), s && p.current()) : (l.current(e), c.current?.())
              },
          onPointerMove: h
            ? void 0
            : () => {
                x || g(f)
              },
          onPointerLeave: h
            ? void 0
            : () => {
                g((e) => (e !== f ? e : ""))
              },
          "aria-disabled": h,
          "data-disabled": h ? "" : void 0,
          children: (0, a.jsxs)("div", {
            className: I,
            children: [
              (0, a.jsxs)("div", {
                className: O,
                children: [
                  "start" === d && (0, a.jsx)(ee, { isSelected: b, position: d }),
                  (0, a.jsx)(n, { ...e }),
                  w &&
                    (0, a.jsx)(j.m, {
                      content: w.content,
                      maxWidth: w.maxWidth,
                      side: "right",
                      children: (0, a.jsx)(v, {}),
                    }),
                  "end" === d && (0, a.jsx)(ee, { isSelected: b, position: d }),
                ],
              }),
              e.description &&
                (0, a.jsxs)("div", {
                  className: O,
                  children: [
                    "start" === d && (0, a.jsx)(J, { position: d }),
                    e.description,
                    "end" === d && (0, a.jsx)(J, { position: d }),
                  ],
                }),
            ],
          }),
        })
      },
      en = () => {
        let { actions: e, footer: t } = M()
        return 0 !== e.length || t
          ? (0, a.jsxs)("div", {
              className: "ActionsContainer-_9uLn5",
              children: [
                t
                  ? (0, a.jsx)("div", {
                      "data-select-footer": "",
                      onKeyDown: (e) => {
                        "Escape" !== e.key && "Tab" !== e.key && e.stopPropagation()
                      },
                      children: t,
                    })
                  : null,
                e.map((e) => (0, a.jsx)(ea, { ...e }, e.id)),
              ],
            })
          : null
      },
      ea = ({ id: e, label: t, Icon: n, className: i }) => {
        let { onActionSelect: o } = M(),
          { requestCloseRef: s } = B(),
          l = () => {
            ;(o(e), s.current?.())
          }
        return (0, a.jsx)("div", {
          className: "Action-sDvHYl",
          onPointerUp: l,
          onKeyDown: (e) => {
            switch (e.key) {
              case "Tab":
                break
              case "Enter":
              case " ":
                ;(e.stopPropagation(), l())
                break
              default:
                e.stopPropagation()
            }
          },
          tabIndex: 0,
          children: (0, a.jsxs)("div", {
            className: (0, r.A)("ActionInner-bAgfXn", i),
            children: [n && (0, a.jsx)(n, { role: "presentation" }), t],
          }),
        })
      },
      er = (e, t) => e.label.toLowerCase().includes(t),
      ei = (e, t, n) => {
        let a = t.trim().toLocaleLowerCase()
        if (!a) return e
        let r = (e) => n(e, a)
        return U(e)
          ? e.reduce((e, t) => {
              let n = t.options.filter(r)
              return (n.length && e.push({ ...t, options: n }), e)
            }, [])
          : e.reduce((e, t) => (r(t) && e.push(t), e), [])
      },
      eo = (e) => {
        let t
        if (e.length) {
          for (let n of e)
            if ($(n)) {
              let e = n.options.find((e) => !e.disabled)
              if (e) {
                t = e
                break
              }
            } else if (!n.disabled) {
              t = n
              break
            }
          return t
        }
      },
      es = (e, t) => {
        let n
        for (let a of e)
          if ($(a)) {
            let e = a.options.find((e) => e.value === t)
            if (e) {
              n = e
              break
            }
          } else if (a.value === t) {
            n = a
            break
          }
        return n
      },
      el = (e, t) => {
        let n = [],
          a = new Set(t)
        for (let t of e)
          if ($(t)) {
            let e = t.options.filter((e) => a.has(e.value))
            n = n.concat(e)
          } else a.has(t.value) && n.push(t)
        return n
      },
      ed = (e, t) => t.querySelector(`[data-option-id="${e}"]`),
      eu = (e) => e.matches("[data-option-id]:not([data-disabled])"),
      ec = (e, t) => {
        let n = ed(e, t),
          a = n?.nextElementSibling,
          r = 0
        for (; a && r < 40;) {
          if (eu(a)) return a
          ;((a = a.nextElementSibling), (r += 1))
        }
      },
      ep = (e, t) => {
        let n = ed(e, t),
          a = n?.previousElementSibling,
          r = 0
        for (; a && r < 40;) {
          if (eu(a)) return a
          ;((a = a.previousElementSibling), (r += 1))
        }
      },
      em = () => {
        let e,
          t = ""
        return (n) => {
          let a = n.toLowerCase()
          return (
            (t += a),
            e && clearTimeout(e),
            (e = setTimeout(() => {
              t = ""
            }, 500)),
            a.repeat(t.length) === t ? a : t
          )
        }
      },
      eg = (e) => /^[a-zA-Z0-9]$/.test(e),
      ef = (e, t, n) => {
        let a, r
        if (!e.length) return
        let i = !n,
          o = ({ disabled: e, label: a, value: r }) => (r === n ? ((i = !0), !1) : !e && a.toLowerCase().startsWith(t))
        for (let t of e)
          if ($(t)) {
            for (let e of t.options)
              if (o(e))
                if (i) {
                  r = e
                  break
                } else a = a || e
          } else if (o(t))
            if (i) {
              r = t
              break
            } else a = a || t
        return r || a
      }
  },
  uwX5(e, t, n) {
    function a(e) {
      return e.isFetchedAfterMount && !e.isFetching && null == e.error ? e.data : void 0
    }
    n.d(
      t,
      {},
      {
        n: function (e, t, n) {
          let r = a(t)
          if (r?.workspace_id !== e || "boolean" != typeof r.allow_external_domain_invites) return
          if (r.allow_external_domain_invites) return { allowExternal: !0 }
          let i = a(n)
          return {
            allowExternal: !1,
            verifiedDomains: (i?.workspace_verified_domains ?? i?.domains)
              ?.filter((e) => "verified" === e.status)
              .map((e) => e.hostname),
          }
        },
      },
    )
  },
  khp7(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("aqd9")
    n.d(
      t,
      {},
      {
        W: function () {
          let e,
            t = (0, r.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("span", {
                  ref: i.d,
                  "aria-hidden": "true",
                  className:
                    "loading-shimmer-mask pointer-events-none absolute start-3 top-1/2 h-2.5 w-1/2 -translate-y-1/2 rounded-full bg-text/10",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  J3fE(e, t, n) {
    var a = n("QosV"),
      r = n("zd8w"),
      i = n("hZax"),
      o = n("UR81")
    function s(e) {
      let { account_user_role: t, plan_type: n } = e
      return (0, o.Hw)(n) || "free_workspace" === n || ("k12" === n && ("account-owner" === t || "account-admin" === t))
    }
    function l(e, t, n) {
      if (
        t?.structure?.toLowerCase() !== "workspace" ||
        t.is_deactivated ||
        t.is_fedramp_compliant_workspace ||
        !1 === t.can_access_with_session ||
        ("standard-user" !== t.account_user_role && "account-admin" !== t.account_user_role)
      )
        return !1
      let a = t.plan_type
      return (
        ((0, o.Hw)(a) || "free_workspace" === a) && (0, i.XM)(e, "1911551839", n).get("show_invite_link_sharing", !1)
      )
    }
    let d = "1294048895"
    n.d(
      t,
      {},
      {
        Ck: function (
          e,
          {
            auth: t,
            sidebarParameter: n,
            isRenderingOnClient: a,
            isStatsigLoading: r,
            statsigClient: o,
            statsigWorkspaceId: d,
          },
        ) {
          var u, c, p
          let m
          return (
            a &&
            "chatgpt" === t.authMethod &&
            e?.id === t.accountId &&
            e.structure?.toLowerCase() === "workspace" &&
            !r &&
            d === t.accountId &&
            (s(e) || (null == n && l(o, e, { disableExposureLog: !1 }))) &&
            ((u = o),
            (c = e),
            (p = n ?? "dropdown_row_enabled"),
            (m = (0, i.XM)(u, "1900043180")).get(p, !1) &&
              m.get("account-owner" === c.account_user_role ? "owner_enabled" : "member_enabled", !0))
          )
        },
        WV: function (e) {
          return "CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_PROFILE_MENU" === e
            ? "profile_menu"
            : "CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_SIDEBAR_FOOTER" === e
              ? "sidebar_footer"
              : void 0
        },
        nU: function (e, t) {
          let n,
            o,
            s = (0, a.c)(7),
            { getLayer: l } = (0, i.cn)()
          ;(s[0] !== t || s[1] !== l
            ? ((n = () => {
                t && l(d).get("enabled", !1)
              }),
              (s[0] = t),
              (s[1] = l),
              (s[2] = n))
            : (n = s[2]),
            s[3] !== t || s[4] !== l || s[5] !== e
              ? ((o = [t, l, e]), (s[3] = t), (s[4] = l), (s[5] = e), (s[6] = o))
              : (o = s[6]),
            (0, r.useEffect)(n, o))
        },
        ok: l,
        p9: function (e, t) {
          let n,
            r,
            s,
            l = (0, a.c)(10),
            { client: u, getLayer: c, isLoading: p } = (0, i.cn)()
          l[0] !== u || l[1] !== c || l[2] !== p || l[3] !== t || l[4] !== e
            ? ((n =
                !p && (0, o.Hw)(t) && u.getContext().user.customIDs?.workspace_id === e
                  ? c(d, { disableExposureLog: !0 })
                  : void 0),
              (r = n?.get("enabled", !1)),
              (l[0] = u),
              (l[1] = c),
              (l[2] = p),
              (l[3] = t),
              (l[4] = e),
              (l[5] = n),
              (l[6] = r))
            : ((n = l[5]), (r = l[6]))
          let m = !0 === r,
            g = n?.__evaluation,
            f =
              m || (!!g?.allocated_experiment_name && g?.is_user_in_experiment !== !1 && g?.is_experiment_active !== !1)
          return (
            l[7] !== f || l[8] !== m
              ? ((s = { enrolled: f, treatment: m }), (l[7] = f), (l[8] = m), (l[9] = s))
              : (s = l[9]),
            s
          )
        },
        vW: s,
      },
    )
  },
  nzdq(e, t, n) {
    var a = n("IPpC"),
      r = n("OHD8")
    n.d(
      t,
      {},
      {
        X: async function (e, t) {
          let n = await (0, a.K)(e, t, (e) => e instanceof Error && (0, r.$)(e))
          if ("ready" !== n.status || null == n.emails) throw Error("Invite suggestions unavailable")
          return n.emails
        },
      },
    )
  },
  EOzk(e, t, n) {
    var a = n("E2yB")
    n.d(
      t,
      {},
      {
        I: function (e, t, n) {
          let r = new Set(t.map((e) => e?.trim().toLowerCase()))
          return [...new Set(e.map((e) => e.trim().toLowerCase()))]
            .filter((e) => a.WL.test(e) && !r.has(e))
            .slice(0, Math.min(5, n ?? 5))
        },
      },
    )
  },
  KxAz(e, t, n) {
    n.d(t, { P: () => o })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("zd8w")
    function o(e) {
      let t,
        n,
        o,
        s = (0, r.c)(8),
        { children: l, className: d, pending: u, rowCount: c } = e,
        p = (0, i.useRef)(null),
        m = (0, i.useRef)(null)
      ;(s[0] !== u || s[1] !== c
        ? ((t = () => {
            let e = p.current
            if (!e) return
            if (u) {
              null == m.current && (m.current = { count: c, width: e.offsetWidth, height: e.offsetHeight })
              return
            }
            let t = m.current
            if (
              ((m.current = null),
              !t ||
                t.count === c ||
                t.width !== e.offsetWidth ||
                t.height === e.offsetHeight ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            )
              return
            let n = e.animate([{ height: `${t.height}px` }, { height: `${e.offsetHeight}px` }], {
              duration: 300,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            })
            return () => n.cancel()
          }),
          (n = [u, c]),
          (s[0] = u),
          (s[1] = c),
          (s[2] = t),
          (s[3] = n))
        : ((t = s[2]), (n = s[3])),
        (0, i.useLayoutEffect)(t, n))
      let g = `${d} rows-Z_Qz7z`,
        f = u || void 0
      return (
        s[4] !== l || s[5] !== g || s[6] !== f
          ? ((o = (0, a.jsx)("div", { ref: p, className: g, "aria-busy": f, children: l })),
            (s[4] = l),
            (s[5] = g),
            (s[6] = f),
            (s[7] = o))
          : (o = s[7]),
        o
      )
    }
  },
  BzGI(e, t, n) {
    var a = n("E2yB")
    function r(e, t) {
      let n = new Set(
          t.members
            .filter((e) => null == e.deactivated_time)
            .flatMap((e) => (null == e.email ? [] : [e.email.trim().toLowerCase()])),
        ),
        a = new Map(
          t.invitations
            .filter((e) => [2, 5, 6].includes(e.status))
            .flatMap((e) => (null == e.email_address ? [] : [[e.email_address.trim().toLowerCase(), e.id]])),
        )
      return e.map((e) =>
        "invited" === e.status
          ? e
          : n.has(e.email)
            ? { ...e, status: "member", pendingInviteId: void 0 }
            : a.has(e.email)
              ? "failed" === e.status
                ? { ...e, pendingInviteId: a.get(e.email) }
                : { ...e, status: "uncertain" === e.status ? "invited" : "pending" }
              : "member" === e.status || "pending" === e.status
                ? { ...e, status: "ready", pendingInviteId: void 0 }
                : e,
      )
    }
    function i(e, t) {
      let n = e.subscription?.seat_capacity,
        a = new Set(
          e.members.flatMap((e) =>
            null == e.deactivated_time && null != e.email ? [e.email.trim().toLowerCase()] : [],
          ),
        ),
        r = e.invitations.filter(
          (e) =>
            [2, 5, 6].includes(e.status) && null != e.email_address && !a.has(e.email_address.trim().toLowerCase()),
        ),
        i = { default: null, prolite: null }
      if (null == n || 0 === n.length || r.some((e) => null == e.seat_type)) return i
      for (let e of ["default", "prolite"]) {
        let o = n.find((t) => t.type === e)
        if (null == o) {
          i[e] = 0
          continue
        }
        if (null == o.available) continue
        let s = new Set(
          r
            .filter((t) => t.seat_type === e)
            .flatMap((e) => (null == e.email_address ? [] : [e.email_address.trim().toLowerCase()])),
        )
        for (let n of t)
          n.seatType !== e ||
            ("invited" !== n.status && ("failed" !== n.status || null == n.pendingInviteId)) ||
            a.has(n.email) ||
            r.some((e) => e.email_address?.trim().toLowerCase() === n.email) ||
            s.add(n.email)
        i[e] = Math.max(0, o.available - s.size)
      }
      return i
    }
    function o(e) {
      return "invited" === e.status || "member" === e.status || "pending" === e.status
    }
    function s(e, t) {
      return (
        !o(e) &&
        ("failed" !== e.status || null == e.pendingInviteId) &&
        !t?.invitations.some((t) => [2, 5, 6].includes(t.status) && t.email_address?.trim().toLowerCase() === e.email)
      )
    }
    n.d(
      t,
      {},
      {
        Am: function (e, t) {
          let n = e.trim()
          if (null == t || a.WL.test(n)) return
          let [r, i = "", o] = n.split("@")
          if (null != o || !t.startsWith(i.toLowerCase())) return
          let s = `${r}@${t}`
          return a.WL.test(s) ? s : void 0
        },
        H: function (e, t) {
          let n = e.map((e) => ({ email: "", status: "ready", seatType: null, ...e }))
          if (null == t) return n
          let a = r(
              n.map((e) => ({ ...e, email: e.email.trim().toLowerCase(), seatType: e.seatType ?? "default" })),
              t,
            ),
            o = i(t, a),
            l = { prolite: o.prolite ?? 0, default: o.default ?? 0 },
            d = []
          for (let [e, r] of a.entries()) {
            let a = n[e]
            null != a && r.email && s(r, t) && (null == a.seatType ? d.push(a) : l[a.seatType]--)
          }
          function u() {
            return l.prolite > 0 ? "prolite" : l.default > 0 ? "default" : null
          }
          for (let e of d) {
            let t = u()
            null != t && ((e.seatType = t), l[t]--)
          }
          let c = u()
          for (let e of n) !e.email.trim() && null != e.seatType && l[e.seatType]--
          return n.map((e, t) => {
            let n = a[t]?.status
            if ("member" === n || "pending" === n) return { ...e, seatType: c }
            if (!e.email.trim() && null == e.seatType) {
              let t = u()
              return (null != t && l[t]--, { ...e, seatType: t })
            }
            return e
          })
        },
        L8: i,
        QZ: function (e, t) {
          let n = r(t, e),
            a = i(e, n)
          for (let e of n) "uncertain" === e.status && (a[e.seatType] = null)
          return a
        },
        Tn: o,
        Wx: function (e) {
          let t = [],
            n = new Map(),
            r = e.map(() => void 0)
          return (
            e.forEach((e, i) => {
              let o = e?.email.trim().toLowerCase()
              if (null == e || !o) return
              if (!a.WL.test(o)) {
                r[i] = "invalid"
                return
              }
              let s = n.get(o)
              if (null != s) {
                ;((r[s] = "duplicate"), (r[i] = "duplicate"))
                return
              }
              ;(n.set(o, i), t.push({ ...e, email: o }))
            }),
            { rows: t, rowErrors: r }
          )
        },
        Zp: function (e, t) {
          if (null == e) return null == t ? 4 : Math.min(t - 1, 50)
          let n = i(e, []),
            a = (n.default ?? 0) + (n.prolite ?? 0)
          return Math.min(null == n.default || null == n.prolite ? Math.max(a, 4) : a, 50)
        },
        _t: function (e, t, n) {
          let a = [...new Set(e.map((e) => e.toLowerCase()))],
            r = t?.split("@")[1]?.toLowerCase()
          return 1 === a.length
            ? a[0]
            : (a.find((e) => e === r) ??
                (0 === a.length && null != n && "social" !== n && "missing" !== n && "personal" !== n ? r : void 0))
        },
        bo: function (e) {
          let t,
            n = new Set(e.map((e) => e.email.trim().toLowerCase())),
            r = new Map(),
            i = 1
          for (let e of n) {
            if (!a.WL.test(e)) continue
            let n = e.slice(e.lastIndexOf("@") + 1),
              o = (r.get(n) ?? 0) + 1
            ;(r.set(n, o), o > i ? ((i = o), (t = n)) : o === i && (t = void 0))
          }
          return t
        },
        q$: s,
        zf: r,
      },
    )
  },
  Dpjf(e, t, n) {
    n.d(t, { OwnerInvitationsPage: () => e_ })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("E2yB"),
      o = n("M6da"),
      s = n("irkb"),
      l = n("T0Rc"),
      d = n("qmMi"),
      u = n("zd8w"),
      c = n("UOa8"),
      p = n("tvcH"),
      m = n("Kwur"),
      g = n("aTcy"),
      f = n("Ot7V"),
      v = n("uwX5"),
      h = n("J3fE"),
      w = n("e4gl"),
      y = n("lc7X"),
      b = n("yGJW"),
      x = n("OWtl"),
      k = n("gWdV"),
      C = n("zdnx"),
      A = n("KpEg"),
      j = n("BzGI"),
      _ = n("EOzk"),
      S = n("oyxz"),
      I = n("Sm6l"),
      O = n("JNtf"),
      E = n("mUDD")
    function M(e) {
      let t,
        n,
        i,
        o,
        s,
        l,
        d,
        u,
        c,
        p,
        m,
        g,
        f,
        v = (0, r.c)(31),
        h = !e.pending
      return (
        v[0] !== e
          ? ((t = (t) => {
              t || e.pending || e.onClose()
            }),
            (v[0] = e),
            (v[1] = t))
          : (t = v[1]),
        v[2] !== e
          ? ((n = (t) => {
              ;(t.preventDefault(), e.pending || e.onConfirm())
            }),
            (v[2] = e),
            (v[3] = n))
          : (n = v[3]),
        v[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(E.OO, {
              children: (0, a.jsx)(E.c7, {
                variant: "chatgptConfirmation",
                title: (0, a.jsx)(O.L3, {
                  children: (0, a.jsx)(S.A, {
                    id: "workspaceOwnerOnboarding.invitations.autoApprove.confirmTitle",
                    defaultMessage: "Are you sure?",
                  }),
                }),
              }),
            })),
            (v[4] = i))
          : (i = v[4]),
        v[5] !== e.domain
          ? ((o = (0, a.jsx)(O.rr, {
              className: "text-sm leading-5 text-secondary",
              children: (0, a.jsx)(S.A, {
                id: "workspaceOwnerOnboarding.invitations.autoApprove.confirmDescription",
                defaultMessage:
                  "Turning on auto-approve will automatically add all users from {domain} who request to join the workspace. You will be billed for any additional seats.",
                values: { domain: e.domain },
              }),
            })),
            (v[5] = e.domain),
            (v[6] = o))
          : (o = v[6]),
        v[7] !== e.error
          ? ((s = e.error
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, a.jsx)(S.A, {
                    id: "workspaceOwnerOnboarding.invitations.autoApprove.confirmError",
                    defaultMessage: "Couldn't enable automatic approval. Please try again.",
                  }),
                })
              : null),
            (v[7] = e.error),
            (v[8] = s))
          : (s = v[8]),
        v[9] !== o || v[10] !== s
          ? ((l = (0, a.jsxs)(E.OO, { children: [o, s] })), (v[9] = o), (v[10] = s), (v[11] = l))
          : (l = v[11]),
        v[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(S.A, {
              id: "workspaceOwnerOnboarding.invitations.autoApprove.cancel",
              defaultMessage: "Cancel",
            })),
            (v[12] = d))
          : (d = v[12]),
        v[13] !== e.onClose || v[14] !== e.pending
          ? ((u = (0, a.jsx)(I.$, {
              className: "flex-1 justify-center",
              color: "outlineGhost",
              size: "dialogAction",
              radius: "full",
              type: "button",
              disabled: e.pending,
              onClick: e.onClose,
              children: d,
            })),
            (v[13] = e.onClose),
            (v[14] = e.pending),
            (v[15] = u))
          : (u = v[15]),
        v[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(S.A, {
              id: "workspaceOwnerOnboarding.invitations.autoApprove.confirm",
              defaultMessage: "Confirm",
            })),
            (v[16] = c))
          : (c = v[16]),
        v[17] !== e.pending
          ? ((p = (0, a.jsx)(I.$, {
              className: "flex-1 justify-center",
              color: "primary",
              size: "dialogAction",
              radius: "full",
              type: "submit",
              loading: e.pending,
              children: c,
            })),
            (v[17] = e.pending),
            (v[18] = p))
          : (p = v[18]),
        v[19] !== p || v[20] !== u
          ? ((m = (0, a.jsx)(E.OO, {
              children: (0, a.jsxs)(E.Es, { variant: "chatgptConfirmation", children: [u, p] }),
            })),
            (v[19] = p),
            (v[20] = u),
            (v[21] = m))
          : (m = v[21]),
        v[22] !== m || v[23] !== n || v[24] !== l
          ? ((g = (0, a.jsxs)(E.R4, { as: "form", variant: "chatgptConfirmation", onSubmit: n, children: [i, l, m] })),
            (v[22] = m),
            (v[23] = n),
            (v[24] = l),
            (v[25] = g))
          : (g = v[25]),
        v[26] !== e.pending || v[27] !== h || v[28] !== t || v[29] !== g
          ? ((f = (0, a.jsx)(O.lG, {
              open: !0,
              size: "medium",
              variant: "chatgptConfirmation",
              showDialogClose: h,
              shouldIgnoreClickOutside: e.pending,
              onOpenChange: t,
              children: g,
            })),
            (v[26] = e.pending),
            (v[27] = h),
            (v[28] = t),
            (v[29] = g),
            (v[30] = f))
          : (f = v[30]),
        f
      )
    }
    var T = n("Wf1j"),
      L = n("bVeK"),
      N = n("RNul")
    let P = (0, d.T1)(
      x.u,
      (e, { scope: t, signal: n }) => {
        let a,
          r = n("idle"),
          i = null
        function o() {
          ;((i = null), a?.(), (a = void 0))
        }
        return {
          status$: r,
          suggest: async function (e, n, s) {
            if (i) return
            let l = new AbortController()
            ;((i = l), (a = () => s(!1)), t.set(r, "loading"), s(!0))
            try {
              let a = await (async function (e, t) {
                let n = performance.now()
                try {
                  return await e(t)
                } finally {
                  let e = Math.ceil(n + 6e3 - performance.now())
                  ;(e > 0 &&
                    (await new Promise((n, a) => {
                      t.throwIfAborted()
                      let r = globalThis.setTimeout(() => {
                          ;(t.removeEventListener("abort", i), n())
                        }, e),
                        i = () => {
                          ;(globalThis.clearTimeout(r),
                            a(t.reason instanceof Error ? t.reason : new DOMException("Aborted", "AbortError")))
                        }
                      t.addEventListener("abort", i, { once: !0 })
                    })),
                    t.throwIfAborted())
                }
              })(e, l.signal)
              l.signal.aborted || t.set(r, n(a) > 0 ? "ready" : "empty")
            } catch {
              l.signal.aborted || t.set(r, "error")
            } finally {
              i === l && o()
            }
          },
          cancel: function () {
            i && (i.abort(), o(), t.set(r, "idle"))
          },
        }
      },
      { autoDispose: !0 },
    )
    function R(e) {
      let t,
        n,
        i,
        o,
        s,
        l,
        c,
        p,
        m,
        g,
        f = (0, r.c)(34),
        { onSuggest: v, onSuggestions: h, onPendingChange: w, suggestedCount: y, disabled: b } = e,
        x = (0, T.A)(),
        k = (0, d.uO)(P, (0, u.useId)()),
        C = (0, d.Ul)(k.status$)
      ;(f[0] !== k.cancel ? ((t = () => k.cancel), (f[0] = k.cancel), (f[1] = t)) : (t = f[1]),
        f[2] !== k ? ((n = [k]), (f[2] = k), (f[3] = n)) : (n = f[3]),
        (0, u.useEffect)(t, n))
      let A = "loading" === C,
        j = "ready" === C && y > 0
      f[4] !== x || f[5] !== A
        ? ((i = A
            ? x.formatMessage({ id: "workspaceInvite.suggestions.manual", defaultMessage: "Enter emails manually" })
            : void 0),
          (f[4] = x),
          (f[5] = A),
          (f[6] = i))
        : (i = f[6])
      let _ = i
      f[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, a.jsx)(S.A, {
            id: "workspaceInvite.suggestions.historyDisclosure",
            defaultMessage: "We\u2019ll use your chat history and plugins to suggest people you should invite.",
          })),
          (f[7] = o))
        : (o = f[7])
      let O = o
      if ("error" === C) {
        let e
        ;(f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(S.A, {
              id: "workspaceInvite.suggestions.error",
              defaultMessage: "Couldn't load suggestions. Try again or enter emails manually.",
            })),
            (f[8] = e))
          : (e = f[8]),
          (O = e))
      } else if ("empty" === C) {
        let e
        ;(f[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(S.A, {
              id: "workspaceInvite.suggestions.empty",
              defaultMessage: "No suggestions found. You can enter emails manually.",
            })),
            (f[9] = e))
          : (e = f[9]),
          (O = e))
      }
      let E = j || void 0
      return (
        f[10] !== _ ||
        f[11] !== b ||
        f[12] !== A ||
        f[13] !== w ||
        f[14] !== v ||
        f[15] !== h ||
        f[16] !== k ||
        f[17] !== C
          ? ((s =
              "empty" !== C &&
              (0, a.jsxs)(I.$, {
                type: "button",
                color: A ? "outlineActive" : "outlineSurface",
                radius: "full",
                size: "actionSm",
                className: "min-w-36",
                disabled: b && !A,
                "aria-label": _,
                title: _,
                onClick: () => (A ? k.cancel() : void k.suggest(v, h, w)),
                children: [
                  A
                    ? (0, a.jsx)(N.y, { as: "span", className: "size-4" })
                    : (0, a.jsx)(L.ZgQ, { "aria-hidden": "true" }),
                  A
                    ? (0, a.jsx)(S.A, {
                        id: "workspaceInvite.suggestions.loading",
                        defaultMessage: "Finding teammates\u2026",
                      })
                    : (0, a.jsx)(S.A, {
                        id: "workspaceInvite.suggestions.action",
                        defaultMessage: "Suggest teammates",
                      }),
                ],
              })),
            (f[10] = _),
            (f[11] = b),
            (f[12] = A),
            (f[13] = w),
            (f[14] = v),
            (f[15] = h),
            (f[16] = k),
            (f[17] = C),
            (f[18] = s))
          : (s = f[18]),
        f[19] !== O
          ? ((l = (0, a.jsx)("p", {
              role: "status",
              className: "max-w-sm text-sm text-balance text-secondary",
              children: O,
            })),
            (f[19] = O),
            (f[20] = l))
          : (l = f[20]),
        f[21] !== s || f[22] !== l
          ? ((c = (0, a.jsx)("div", {
              className: "min-h-0 overflow-hidden",
              children: (0, a.jsxs)("div", {
                className: "flex w-full flex-col items-center gap-2 rounded-2xl border border-default p-4 text-center",
                children: [s, l],
              }),
            })),
            (f[21] = s),
            (f[22] = l),
            (f[23] = c))
          : (c = f[23]),
        f[24] !== j || f[25] !== E || f[26] !== c
          ? ((p = (0, a.jsx)("div", { className: "cardSlot-niHg67", "data-collapsed": E, inert: j, children: c })),
            (f[24] = j),
            (f[25] = E),
            (f[26] = c),
            (f[27] = p))
          : (p = f[27]),
        f[28] !== j || f[29] !== y
          ? ((m =
              j &&
              (0, a.jsx)("span", {
                role: "status",
                className: "sr-only",
                children: (0, a.jsx)(S.A, {
                  id: "workspaceInvite.suggestions.readyCount",
                  defaultMessage: "{count, plural, one {# suggestion ready} other {# suggestions ready}}",
                  values: { count: y },
                }),
              })),
            (f[28] = j),
            (f[29] = y),
            (f[30] = m))
          : (m = f[30]),
        f[31] !== m || f[32] !== p
          ? ((g = (0, a.jsxs)(a.Fragment, { children: [p, m] })), (f[31] = m), (f[32] = p), (f[33] = g))
          : (g = f[33]),
        g
      )
    }
    var D = n("LA5s"),
      q = n("AEu9"),
      W = n("Qgfj"),
      z = n("Sezd"),
      F = n("zLIa"),
      B = n("khp7"),
      K = n("KxAz"),
      $ = n("Pk3g")
    function U(e) {
      let t,
        n = (0, r.c)(54),
        o = (0, T.A)(),
        s = (0, u.useId)(),
        l = (0, u.useRef)(null),
        d = e.pending || !0 === e.disabled || !0 === e.findingSuggestions,
        c = d || !0 === e.retryingCompletion
      if (n[0] !== d || n[1] !== c || n[2] !== s || n[3] !== o || n[4] !== e) {
        let r,
          u,
          p,
          m,
          g,
          f,
          v,
          h,
          w,
          y,
          b,
          x,
          k,
          C,
          A,
          _,
          O,
          E,
          M,
          T,
          N,
          P,
          R = e.rows.map(Q),
          W = null == e.inventory ? R : (0, j.zf)(R, e.inventory),
          U = (0, j.Wx)(W).rows,
          X = null == e.inventory ? null : (0, j.L8)(e.inventory, U),
          J = (0, j.bo)(U),
          ee =
            !e.completionTreatment || (null == e.completionDomain && null != J && (0, i.Ub)(J, e.completionPolicy))
              ? J
              : void 0,
          et = W.some(V)
        n[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = ["default", "prolite"]), (n[6] = r)) : (r = n[6])
        let en = r,
          ea = { default: 0, prolite: 0 }
        for (let t of U) (0, j.q$)(t, e.inventory) && (ea[t.seatType] = ea[t.seatType] + 1)
        let er = en.some((e) => {
          let t = X?.[e]
          return null != t && ea[e] > t
        })
        n[7] !== o
          ? ((u = en.map((e) => ({ value: e, label: o.formatMessage(Y[e]) }))), (n[7] = o), (n[8] = u))
          : (u = n[8])
        let ei = u
        n[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(S.A, {
              id: "workspaceOwnerOnboarding.invitations.sendInvites",
              defaultMessage: "Send invites",
            })),
            (n[9] = p))
          : (p = n[9])
        let eo = p
        e.countRecipients &&
          (eo = (0, a.jsx)(S.A, {
            id: "workspaceOwnerOnboarding.invitations.sendCount",
            defaultMessage: "Send {count, plural, one {# invite} other {# invites}}",
            values: { count: U.filter(G).length },
          }))
        let es = e.timing
        ;(n[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(S.A, {
              id: "workspaceOwnerOnboarding.invitations.title",
              defaultMessage: "Invite your team",
            })),
            (g = (0, a.jsx)(S.A, {
              id: "workspaceOwnerOnboarding.invitations.description",
              defaultMessage: "Add teammates to your workspace",
            })),
            (n[10] = m),
            (n[11] = g))
          : ((m = n[10]), (g = n[11])),
          n[12] !== e
            ? ((f = (t) => {
                ;(t.preventDefault(), e.onSubmit())
              }),
              (n[12] = e),
              (n[13] = f))
            : (f = n[13]),
          n[14] !== e.error
            ? ((v =
                null == e.error
                  ? null
                  : (0, a.jsx)(S.A, { ...Y["uncertain" === e.error ? "uncertainError" : e.error] })),
              (n[14] = e.error),
              (n[15] = v))
            : (v = n[15]),
          n[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = () => l.current?.click()), (h = (0, a.jsx)(S.A, { ...Y.uploadCsv })), (n[16] = h), (n[17] = w))
            : ((h = n[16]), (w = n[17])),
          n[18] !== c
            ? ((y = (0, a.jsx)(I.$, {
                type: "button",
                color: "outlineSurface",
                size: "setupAction",
                radius: "full",
                disabled: c,
                onClick: w,
                children: h,
              })),
              (n[18] = c),
              (n[19] = y))
            : (y = n[19]))
        let el = e.suggestions
        ;(n[20] !== o ? ((b = o.formatMessage(Y.uploadCsv)), (n[20] = o), (n[21] = b)) : (b = n[21]),
          n[22] !== e
            ? ((x = (t) => {
                let n = t.currentTarget.files?.[0]
                ;((t.currentTarget.value = ""), null != n && e.onCsv(n))
              }),
              (n[22] = e),
              (n[23] = x))
            : (x = n[23]),
          n[24] !== b || n[25] !== x
            ? ((k = (0, a.jsx)("input", {
                ref: l,
                "aria-label": b,
                type: "file",
                accept: ".csv,text/csv",
                hidden: !0,
                onChange: x,
              })),
              (n[24] = b),
              (n[25] = x),
              (n[26] = k))
            : (k = n[26]),
          n[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, a.jsx)(L.D_h, {})),
              (A = (0, a.jsx)(S.A, { id: "workspaceOwnerOnboarding.invitations.addMore", defaultMessage: "Add more" })),
              (n[27] = C),
              (n[28] = A))
            : ((C = n[27]), (A = n[28])),
          n[29] !== c || n[30] !== e.onAddRow
            ? ((_ = (0, a.jsxs)(I.$, {
                className: "mt-auto shrink-0",
                color: "outlineSurface",
                size: "actionSm",
                radius: "full",
                disabled: c,
                onClick: e.onAddRow,
                children: [C, A],
              })),
              (n[29] = c),
              (n[30] = e.onAddRow),
              (n[31] = _))
            : (_ = n[31]),
          n[32] !== e.csvFeedback
            ? ((O =
                null != e.csvFeedback &&
                ("error" in e.csvFeedback
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, a.jsx)(S.A, { ...Y[e.csvFeedback.error], values: { limit: 50 } }),
                    })
                  : (0, a.jsxs)("div", {
                      role: "status",
                      className: "flex flex-col text-sm text-secondary",
                      children: [
                        (0, a.jsx)(S.A, {
                          id: "workspaceOwnerOnboarding.invitations.csvResult",
                          defaultMessage: "{count, plural, one {# email added} other {# emails added}}",
                          values: { count: e.csvFeedback.count },
                        }),
                        e.csvFeedback.duplicateCount > 0 &&
                          (0, a.jsx)(S.A, {
                            id: "workspaceOwnerOnboarding.invitations.csvDuplicates",
                            defaultMessage: "{count, plural, one {# duplicate skipped} other {# duplicates skipped}}",
                            values: { count: e.csvFeedback.duplicateCount },
                          }),
                        e.csvFeedback.invalidLines.length > 0 &&
                          (0, a.jsx)(S.A, {
                            id: "workspaceOwnerOnboarding.invitations.csvInvalidLines",
                            defaultMessage: "Check CSV lines {lines} for invalid entries",
                            values: { lines: e.csvFeedback.invalidLines.join(", ") },
                          }),
                      ],
                    }))),
              (n[32] = e.csvFeedback),
              (n[33] = O))
            : (O = n[33]),
          n[34] !== c ||
          n[35] !== s ||
          n[36] !== e.autoApprove ||
          n[37] !== e.autoApproveError ||
          n[38] !== e.onAutoApproveChange ||
          n[39] !== e.suggestedDomain
            ? ((E =
                e.autoApprove?.canEnable || e.autoApprove?.enabled
                  ? (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "relative flex items-start gap-3 select-none",
                          children: [
                            (0, a.jsx)(z.S, {
                              id: `${s}-auto-approve`,
                              checked: e.autoApprove.enabled,
                              disabled: c,
                              onCheckedChange: e.onAutoApproveChange,
                            }),
                            (0, a.jsx)("label", {
                              htmlFor: `${s}-auto-approve`,
                              className: "text-sm text-secondary",
                              children:
                                null != e.suggestedDomain
                                  ? (0, a.jsx)(S.A, {
                                      id: "workspaceOwnerOnboarding.invitations.autoApprove.domain",
                                      defaultMessage: "Auto-approve join requests from members on {domain}",
                                      values: { domain: e.suggestedDomain },
                                    })
                                  : (0, a.jsx)(S.A, {
                                      id: "workspaceOwnerOnboarding.invitations.autoApprove.generic",
                                      defaultMessage: "Auto-approve join requests from eligible email domains",
                                    }),
                            }),
                          ],
                        }),
                        e.autoApproveError
                          ? (0, a.jsx)("p", {
                              role: "alert",
                              className: "text-sm text-danger",
                              children: (0, a.jsx)(S.A, {
                                id: "workspaceOwnerOnboarding.invitations.autoApprove.saveError",
                                defaultMessage: "Couldn't update automatic approval. Please try again.",
                              }),
                            })
                          : null,
                      ],
                    })
                  : null),
              (n[34] = c),
              (n[35] = s),
              (n[36] = e.autoApprove),
              (n[37] = e.autoApproveError),
              (n[38] = e.onAutoApproveChange),
              (n[39] = e.suggestedDomain),
              (n[40] = E))
            : (E = n[40]),
          n[41] !== c || n[42] !== e.autoApproveReadError || n[43] !== e.onRetryAutoApprove
            ? ((M = e.autoApproveReadError
                ? (0, a.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, a.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children: (0, a.jsx)(S.A, {
                          id: "workspaceOwnerOnboarding.invitations.autoApprove.readError",
                          defaultMessage: "Couldn't load automatic approval settings",
                        }),
                      }),
                      (0, a.jsx)(I.$, {
                        color: "ghostSecondary",
                        disabled: c,
                        onClick: e.onRetryAutoApprove,
                        children: (0, a.jsx)(S.A, {
                          id: "workspaceOwnerOnboarding.invitations.autoApprove.retryRead",
                          defaultMessage: "Try loading settings again",
                        }),
                      }),
                    ],
                  })
                : null),
              (n[41] = c),
              (n[42] = e.autoApproveReadError),
              (n[43] = e.onRetryAutoApprove),
              (n[44] = M))
            : (M = n[44]),
          n[45] !== e.readState
            ? ((T =
                "error" === e.readState
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, a.jsx)(S.A, { ...Y.read }),
                    })
                  : null),
              (n[45] = e.readState),
              (n[46] = T))
            : (T = n[46]),
          n[47] !== c || n[48] !== e.error || n[49] !== e.onRetryLoad || n[50] !== e.readState
            ? ((N =
                "error" === e.readState || "uncertain" === e.error || "read" === e.error || "capacity" === e.error
                  ? (0, a.jsx)(I.$, {
                      color: "ghostSecondary",
                      disabled: c,
                      onClick: e.onRetryLoad,
                      children: (0, a.jsx)(S.A, {
                        id: "workspaceOwnerOnboarding.invitations.refresh",
                        defaultMessage: "Try again",
                      }),
                    })
                  : null),
              (n[47] = c),
              (n[48] = e.error),
              (n[49] = e.onRetryLoad),
              (n[50] = e.readState),
              (n[51] = N))
            : (N = n[51]),
          n[52] !== er
            ? ((P = er
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, a.jsx)(S.A, { ...Y.capacity }),
                  })
                : null),
              (n[52] = er),
              (n[53] = P))
            : (P = n[53]),
          (t = (0, a.jsxs)($.E, {
            timing: es,
            interactiveStep: d ? void 0 : "invitations",
            title: m,
            description: g,
            noValidate: !0,
            onSubmit: f,
            error: v,
            actions: (0, a.jsx)($.o, {
              isPending: e.pending,
              secondaryAction: y,
              continueLabel: e.canContinue ? e.continueLabel : eo,
              disabled: d || (!e.canContinue && (e.rows.every(H) || er || (et && "ready" !== e.readState))),
              onSkip: e.onSkip,
            }),
            children: [
              el,
              k,
              (0, a.jsxs)(K.P, {
                className: "flex min-w-0 flex-col items-start gap-4",
                pending: !0 === e.findingSuggestions,
                rowCount: e.rows.length,
                children: [
                  e.rows.map((t, n) => {
                    let r = W[n] ?? t,
                      i = n + 1,
                      l = `${s}-row-${i}`,
                      d = e.rowErrors[n],
                      u = r.status,
                      p =
                        c ||
                        "invited" === t.status ||
                        "uncertain" === t.status ||
                        ("failed" === t.status && null != r.pendingInviteId),
                      m = (0, j.Am)(t.email, ee)
                    return (0, a.jsxs)(
                      "div",
                      {
                        className: "flex w-full flex-col gap-1",
                        "data-suggested": t.suggested || void 0,
                        children: [
                          (0, a.jsxs)("div", {
                            className: "grid grid-cols-[minmax(0,1fr)_9.5rem] items-start gap-3",
                            children: [
                              (0, a.jsx)(D.M, {
                                value: t.email,
                                domain: e.completionDomain,
                                onAccept: (t) => {
                                  ;(e.onRowChange(n, { email: t }), e.onCompletionAccepted?.())
                                },
                                children: (r) =>
                                  (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, a.jsx)(F.pd, {
                                        id: `${l}-email`,
                                        variant: "onboarding",
                                        type: "email",
                                        autoComplete: "off",
                                        autoFocus: n === e.autoFocusRow && !t.email,
                                        spellCheck: !1,
                                        value: t.email,
                                        "aria-label": o.formatMessage(Y.emailLabel, { number: i }),
                                        "aria-invalid": null != d || void 0,
                                        "aria-describedby": null != d || "ready" !== u ? `${l}-feedback` : void 0,
                                        placeholder: e.findingSuggestions
                                          ? void 0
                                          : o.formatMessage(Y.emailPlaceholder),
                                        disabled: p,
                                        valueSuffix: (0, a.jsx)("span", {
                                          "aria-hidden": "true",
                                          className: "min-w-0 truncate text-tertiary has-[kbd]:flex-1",
                                          children: r ?? m?.slice(t.email.trim().length),
                                        }),
                                        onChange: (t) => e.onRowChange(n, { email: t.currentTarget.value }),
                                        onKeyDown: (t) => {
                                          !t.nativeEvent.isComposing &&
                                            ("Enter" === t.key && t.preventDefault(),
                                            null == m ||
                                              ("Enter" !== t.key && "Tab" !== t.key) ||
                                              t.shiftKey ||
                                              t.ctrlKey ||
                                              t.metaKey ||
                                              t.altKey ||
                                              e.onRowChange(n, { email: m }))
                                        },
                                      }),
                                      e.findingSuggestions && !t.email && (0, a.jsx)(B.W, {}),
                                    ],
                                  }),
                              }),
                              (0, j.q$)(r, e.inventory) &&
                                (0, a.jsx)(q.l, {
                                  id: `${l}-seat`,
                                  "aria-label": o.formatMessage(Y.seatLabel, { number: i }),
                                  size: "xl",
                                  triggerClassName: "font-normal",
                                  optionIndicatorPosition: "end",
                                  dropdownIconType: "chevronDown",
                                  pill: !1,
                                  block: !0,
                                  disabled: p,
                                  value: t.seatType,
                                  options: ei,
                                  listMinWidth: 240,
                                  onChange: (t) => {
                                    let { value: a } = t
                                    return e.onRowChange(n, { seatType: a })
                                  },
                                }),
                            ],
                          }),
                          null != d
                            ? (0, a.jsx)("p", {
                                id: `${l}-feedback`,
                                role: "alert",
                                className: "text-sm text-danger",
                                children: (0, a.jsx)(S.A, { ...Y[d] }),
                              })
                            : null,
                          null == d && "ready" !== u
                            ? (0, a.jsx)("p", {
                                id: `${l}-feedback`,
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(S.A, { ...Y[u] }),
                              })
                            : null,
                          null == d && "ready" === u && null != m
                            ? (0, a.jsx)("span", {
                                role: "status",
                                className: "sr-only",
                                children: (0, a.jsx)(S.A, {
                                  id: "workspaceOwnerOnboarding.invitations.rowSuggestion",
                                  defaultMessage: "Suggested email: {email}. Press Enter or Tab to accept.",
                                  values: { email: m },
                                }),
                              })
                            : null,
                        ],
                      },
                      l,
                    )
                  }),
                  _,
                ],
              }),
              O,
              e.inviteLink,
              E,
              M,
              T,
              N,
              P,
              W.some(Z)
                ? (0, a.jsx)(I.$, {
                    color: "ghostSecondary",
                    disabled: c,
                    onClick: e.onManageInvitations,
                    children: (0, a.jsx)(S.A, {
                      id: "workspaceOwnerOnboarding.invitations.manageInvitations",
                      defaultMessage: "Manage invitations",
                    }),
                  })
                : null,
            ],
          })),
          (n[0] = d),
          (n[1] = c),
          (n[2] = s),
          (n[3] = o),
          (n[4] = e),
          (n[5] = t))
      } else t = n[5]
      return t
    }
    function Z(e) {
      return "failed" === e.status
    }
    function H(e) {
      return !e.email.trim()
    }
    function G(e) {
      return !(0, j.Tn)(e)
    }
    function V(e) {
      return "" !== e.email && !(0, j.Tn)(e)
    }
    function Q(e) {
      return { ...e, email: e.email.trim().toLowerCase() }
    }
    let Y = (0, W.YK)({
      uploadCsv: { id: "workspaceOwnerOnboarding.invitations.uploadCsv", defaultMessage: "Upload a CSV" },
      size: {
        id: "workspaceOwnerOnboarding.invitations.csvSize",
        defaultMessage: "Choose a CSV file no larger than 25 MB",
      },
      type: { id: "workspaceOwnerOnboarding.invitations.csvType", defaultMessage: "Choose a CSV file" },
      parse: {
        id: "workspaceOwnerOnboarding.invitations.csvParse",
        defaultMessage: "We couldn\u2019t read that CSV. Check the file and try again",
      },
      records: {
        id: "workspaceOwnerOnboarding.invitations.csvRecordLimit",
        defaultMessage: "No emails added. Choose a CSV with no more than {limit} data rows.",
      },
      rows: {
        id: "workspaceOwnerOnboarding.invitations.csvFormLimit",
        defaultMessage: "No emails added. This CSV would put the invitation form over {limit} rows.",
      },
      default: { id: "workspaceOwnerOnboarding.invitations.standardSeat", defaultMessage: "Standard Seat" },
      prolite: { id: "workspaceOwnerOnboarding.invitations.premiumSeat", defaultMessage: "Premium Seat" },
      emailLabel: { id: "workspaceOwnerOnboarding.invitations.rowEmail", defaultMessage: "Email {number}" },
      emailPlaceholder: { id: "workspaceOwnerOnboarding.invitations.rowEmailPlaceholder", defaultMessage: "Email" },
      seatLabel: { id: "workspaceOwnerOnboarding.invitations.rowSeatType", defaultMessage: "Seat type {number}" },
      invalid: {
        id: "workspaceOwnerOnboarding.invitations.invalidEmail",
        defaultMessage: "Enter a complete email address",
      },
      duplicate: {
        id: "workspaceOwnerOnboarding.invitations.duplicateRow",
        defaultMessage: "This email is already in the list",
      },
      invited: { id: "workspaceOwnerOnboarding.invitations.sent", defaultMessage: "Invitation sent" },
      member: { id: "workspaceOwnerOnboarding.invitations.member", defaultMessage: "Already a member" },
      pending: { id: "workspaceOwnerOnboarding.invitations.pendingInvite", defaultMessage: "Already invited" },
      failed: { id: "workspaceOwnerOnboarding.invitations.failed", defaultMessage: "Invitation failed" },
      uncertain: { id: "workspaceOwnerOnboarding.invitations.uncertain", defaultMessage: "Confirming result" },
      read: {
        id: "workspaceOwnerOnboarding.invitations.readError",
        defaultMessage: "We couldn\u2019t confirm your seats and invitations. Try again, or skip for now.",
      },
      capacity: {
        id: "workspaceOwnerOnboarding.invitations.capacityError",
        defaultMessage:
          "We couldn\u2019t confirm enough available seats for these invitations. Remove recipients or try again.",
      },
      partial: {
        id: "workspaceOwnerOnboarding.invitations.partialError",
        defaultMessage:
          "Some invitations failed. Try sending again for unsaved recipients, or manage invitations to resend saved ones.",
      },
      inventoryChanged: {
        id: "workspaceOwnerOnboarding.invitations.inventoryChanged",
        defaultMessage: "Some recipients now need an invitation. Review their seats before sending.",
      },
      uncertainError: {
        id: "workspaceOwnerOnboarding.invitations.uncertainError",
        defaultMessage:
          "We couldn\u2019t confirm every invitation. Try again to confirm availability; confirmed invitations won\u2019t be resent.",
      },
      continue: {
        id: "workspaceOwnerOnboarding.invitations.continueError",
        defaultMessage: "We couldn\u2019t finish setup. Try again; saved invitations won\u2019t be resent.",
      },
    })
    function X(e) {
      let t,
        i,
        o,
        s,
        l,
        d,
        c,
        p,
        m,
        g,
        f,
        v,
        h,
        w,
        y,
        b,
        x,
        k,
        C = (0, r.c)(77)
      C[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (C[0] = t)) : (t = C[0])
      let [A, S] = (0, u.useState)(t),
        [I, O] = (0, u.useState)(!1),
        [E, T] = (0, u.useState)(!1),
        [L, N] = (0, u.useState)(),
        [P, D] = (0, u.useState)(null),
        [q, W] = (0, u.useState)(!1),
        [z, F] = (0, u.useState)(null),
        [B, K] = (0, u.useState)(!1),
        $ = (0, u.useRef)(null),
        [Z, H] = (0, u.useState)(!1),
        [G, V] = (0, u.useState)(!1),
        Q = (0, j.Zp)(e.inventory, e.checkoutSeatCount)
      C[1] !== A ? ((i = (e, t) => A[t] ?? null), (C[1] = A), (C[2] = i)) : (i = C[2])
      let Y = Array.from({ length: Math.max(E ? 1 : Q, A.length) }, i),
        X = (0, j.H)(Y, e.inventory),
        eu = X.map(ed),
        ec = (0, j.Wx)(eu),
        ep = null == e.inventory ? ec.rows : (0, j.zf)(ec.rows, e.inventory),
        em = eu.some(el),
        eg = null != P || (em ? !ec.rowErrors.some(Boolean) && ep.every(j.Tn) : !0 === e.linkCopied),
        ef = { rows: eu, inventory: e.inventory, canContinue: eg },
        [ev, eh] = (0, u.useState)(null),
        ew = B || null != ev,
        ey = ew || e.isAdvancePending || Z
      ;(C[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => () => $.current?.abort()), (s = []), (C[3] = o), (C[4] = s))
        : ((o = C[3]), (s = C[4])),
        (0, u.useEffect)(o, s),
        C[5] !== ey || C[6] !== A || C[7] !== e || C[8] !== P
          ? ((l = async function (t) {
              if (ey || null != $.current || null != P) return
              if (t.size > 0x1900000) return void N({ error: "size" })
              if (!t.name.toLowerCase().endsWith(".csv") && "text/csv" !== t.type) return void N({ error: "type" })
              let a = new AbortController()
              ;(($.current = a), K(!0), e.onPendingChange?.(!0))
              try {
                let [e, r] = await Promise.all([
                    t.text(),
                    Promise.all([n.e(749940), n.e(174363)]).then(n.bind(n, "Qm5D")),
                  ]),
                  { parseInvitationCsv: i } = r
                if (!a.signal.aborted) {
                  let t = i(A, e),
                    n = A.findLastIndex(es) + 1
                  if (null == t) N({ error: "records" })
                  else if (t.emails.length > 0 && n + t.emails.length > 50) N({ error: "rows" })
                  else {
                    let { emails: e, duplicateCount: a, invalidLines: r } = t
                    N({ count: e.length, duplicateCount: a, invalidLines: r })
                    let i = e.map(eo)
                    ;(S([...A.slice(0, n), ...i, ...A.slice(n + i.length)]), F(null))
                  }
                }
              } catch {
                a.signal.aborted || N({ error: "parse" })
              }
              ;(e.onPendingChange?.(!1), a.signal.aborted || (($.current = null), K(!1)))
            }),
            (C[5] = ey),
            (C[6] = A),
            (C[7] = e),
            (C[8] = P),
            (C[9] = l))
          : (l = C[9]))
      let eb = l
      C[10] !== e
        ? ((d = async function (t) {
            if (null != $.current || e.isAdvancePending || (t && !e.autoApprove?.canEnable)) return
            let n = new AbortController()
            ;(($.current = n), K(!0), V(!1))
            try {
              ;(await e.onAutoApproveChange(t, n.signal), n.signal.aborted || H(!1))
            } catch {
              n.signal.aborted || V(!0)
            }
            n.signal.aborted || (($.current = null), K(!1))
          }),
          (C[10] = e),
          (C[11] = d))
        : (d = C[11])
      let ex = d
      C[12] !== ew
        ? ((c = function () {
            ew || (H(!1), V(!1))
          }),
          (C[12] = ew),
          (C[13] = c))
        : (c = C[13])
      let ek = c,
        eC = async function (t) {
          if (ey || null != $.current || (!t && !eg && !em)) return
          if (!t && !P && ec.rowErrors.some(Boolean)) return void W(!0)
          t && e.onSkip?.(eu)
          let n = ep,
            a = new AbortController()
          ;(($.current = a), eh(ef), e.onPendingChange?.(!0), F(null))
          let r = !1
          try {
            let i = null
            if (!t && P?.skipped !== !0 && eg && ec.rows.some(ei)) {
              let t = await e.onRefreshInventory()
              null == t ? (i = "read") : (n = (0, j.zf)(ec.rows, t)).every(j.Tn) || (i = "inventoryChanged")
            } else if (null == P && !t && n.some(er)) {
              let t = await e.onSend(n, a.signal)
              if (((n = t.rows), (i = t.error), !a.signal.aborted)) {
                let e = new Map(n.map(ea))
                S((t) => t.map((t) => (null == t ? null : (e.get(t.email.trim().toLowerCase()) ?? t))))
              }
            }
            if (!a.signal.aborted && (F(i), "inventoryChanged" === i && D(null), null == i)) {
              r = !0
              let i = P ?? { step: "invitations", skipped: t, invitedCount: (t ? eu : n).filter(en).length }
              ;(D(i), await e.onContinue(i), a.signal.aborted || D(null))
            }
          } catch {
            a.signal.aborted || F(r ? "continue" : "read")
          }
          ;(e.onPendingChange?.(!1), a.signal.aborted || (($.current = null), eh(null)))
        },
        eA =
          null == e.onSuggest
            ? void 0
            : (0, a.jsx)(R, {
                onSuggest: e.onSuggest,
                suggestedCount: eu.filter(et).length,
                disabled: ey || "ready" !== e.readState || em,
                onPendingChange: O,
                onSuggestions: (t) => {
                  let n = (0, _.I)(
                    t,
                    [...(e.inventory?.members.map(ee) ?? []), ...(e.inventory?.invitations.map(J) ?? [])],
                    Q,
                  )
                  return (
                    S(
                      0 === n.length
                        ? A.slice(0, 1)
                        : n.map((e, t) => ({
                            ...X[t],
                            seatType: X[t]?.seatType ?? null,
                            email: e,
                            status: "ready",
                            suggested: !0,
                          })),
                    ),
                    T(!0),
                    n.length
                  )
                },
              }),
        ej = E && em,
        e_ = ev ?? ef,
        eS = null != P
      C[14] !== eb ? ((p = (e) => void eb(e)), (C[14] = eb), (C[15] = p)) : (p = C[15])
      let eI = G && !Z
      C[16] !== ey || C[17] !== e.autoApprove?.canEnable || C[18] !== ex
        ? ((m = (t) => {
            !ey && (V(!1), t && e.autoApprove?.canEnable ? H(!0) : t || ex(!1))
          }),
          (C[16] = ey),
          (C[17] = e.autoApprove?.canEnable),
          (C[18] = ex),
          (C[19] = m))
        : (m = C[19])
      let eO = A.length > Q ? A.length - 1 : void 0
      C[20] !== ec || C[21] !== q ? ((g = q ? ec.rowErrors : []), (C[20] = ec), (C[21] = q), (C[22] = g)) : (g = C[22])
      let eE = ew || e.isAdvancePending
      return (
        C[23] !== X || C[24] !== ey
          ? ((f = (e, t) => {
              let n = X[e]
              if (ey || null == n) return
              let a =
                t.email?.trim() === ""
                  ? null
                  : {
                      email: t.email ?? n.email,
                      suggested: null == t.email ? n.suggested : void 0,
                      seatType: t.seatType ?? n.seatType,
                      status: "ready",
                    }
              ;(S((t) =>
                Array.from({ length: Math.max(t.length, e + 1) }, (n, r) => {
                  if (r === e) return a
                  let i = t[r] ?? null,
                    o = X[r]?.seatType
                  return null != i && null == i.seatType && null != o ? { ...i, seatType: o } : i
                }),
              ),
                F(null))
            }),
            (C[23] = X),
            (C[24] = ey),
            (C[25] = f))
          : (f = C[25]),
        C[26] !== Y ? ((v = () => S([...Y, null])), (C[26] = Y), (C[27] = v)) : (v = C[27]),
        C[28] !== e ? ((h = () => void e.onRefreshInventory()), (C[28] = e), (C[29] = h)) : (h = C[29]),
        C[30] !== eC
          ? ((w = () => {
              eC(!1)
            }),
            (y = () => {
              eC(!0)
            }),
            (C[30] = eC),
            (C[31] = w),
            (C[32] = y))
          : ((w = C[31]), (y = C[32])),
        C[33] !== U ||
        C[34] !== Z ||
        C[35] !== L ||
        C[36] !== z ||
        C[37] !== I ||
        C[38] !== e.autoApprove ||
        C[39] !== e.autoApproveReadError ||
        C[40] !== e.completionDomain ||
        C[41] !== e.completionPolicy ||
        C[42] !== e.completionTreatment ||
        C[43] !== e.continueLabel ||
        C[44] !== e.inviteLink ||
        C[45] !== e.onCompletionAccepted ||
        C[46] !== e.onManageInvitations ||
        C[47] !== e.onRetryAutoApprove ||
        C[48] !== e.readState ||
        C[49] !== e.suggestedDomain ||
        C[50] !== e.timing ||
        C[51] !== eS ||
        C[52] !== p ||
        C[53] !== eI ||
        C[54] !== m ||
        C[55] !== eO ||
        C[56] !== g ||
        C[57] !== eE ||
        C[58] !== f ||
        C[59] !== v ||
        C[60] !== h ||
        C[61] !== w ||
        C[62] !== y ||
        C[63] !== eA ||
        C[64] !== ej ||
        C[65] !== e_
          ? ((b = (0, a.jsx)(U, {
              timing: e.timing,
              suggestions: eA,
              countRecipients: ej,
              findingSuggestions: I,
              continueLabel: e.continueLabel,
              inviteLink: e.inviteLink,
              ...e_,
              retryingCompletion: eS,
              csvFeedback: L,
              onCsv: p,
              suggestedDomain: e.suggestedDomain,
              completionPolicy: e.completionPolicy,
              completionTreatment: e.completionTreatment,
              completionDomain: e.completionDomain,
              onCompletionAccepted: e.onCompletionAccepted,
              autoApprove: e.autoApprove,
              autoApproveReadError: e.autoApproveReadError,
              autoApproveError: eI,
              onRetryAutoApprove: e.onRetryAutoApprove,
              onAutoApproveChange: m,
              autoFocusRow: eO,
              rowErrors: g,
              readState: e.readState,
              pending: eE,
              disabled: Z,
              error: z,
              onRowChange: f,
              onAddRow: v,
              onRetryLoad: h,
              onManageInvitations: e.onManageInvitations,
              onSubmit: w,
              onSkip: y,
            })),
            (C[33] = U),
            (C[34] = Z),
            (C[35] = L),
            (C[36] = z),
            (C[37] = I),
            (C[38] = e.autoApprove),
            (C[39] = e.autoApproveReadError),
            (C[40] = e.completionDomain),
            (C[41] = e.completionPolicy),
            (C[42] = e.completionTreatment),
            (C[43] = e.continueLabel),
            (C[44] = e.inviteLink),
            (C[45] = e.onCompletionAccepted),
            (C[46] = e.onManageInvitations),
            (C[47] = e.onRetryAutoApprove),
            (C[48] = e.readState),
            (C[49] = e.suggestedDomain),
            (C[50] = e.timing),
            (C[51] = eS),
            (C[52] = p),
            (C[53] = eI),
            (C[54] = m),
            (C[55] = eO),
            (C[56] = g),
            (C[57] = eE),
            (C[58] = f),
            (C[59] = v),
            (C[60] = h),
            (C[61] = w),
            (C[62] = y),
            (C[63] = eA),
            (C[64] = ej),
            (C[65] = e_),
            (C[66] = b))
          : (b = C[66]),
        C[67] !== G || C[68] !== ek || C[69] !== Z || C[70] !== ew || C[71] !== e.suggestedDomain || C[72] !== ex
          ? ((x =
              Z && null != e.suggestedDomain
                ? (0, a.jsx)(M, {
                    domain: e.suggestedDomain,
                    pending: ew,
                    error: G,
                    onClose: ek,
                    onConfirm: () => void ex(!0),
                  })
                : null),
            (C[67] = G),
            (C[68] = ek),
            (C[69] = Z),
            (C[70] = ew),
            (C[71] = e.suggestedDomain),
            (C[72] = ex),
            (C[73] = x))
          : (x = C[73]),
        C[74] !== b || C[75] !== x
          ? ((k = (0, a.jsxs)(a.Fragment, { children: [b, x] })), (C[74] = b), (C[75] = x), (C[76] = k))
          : (k = C[76]),
        k
      )
    }
    function J(e) {
      return e.email_address
    }
    function ee(e) {
      return e.email
    }
    function et(e) {
      return e.suggested
    }
    function en(e) {
      return "invited" === e.status
    }
    function ea(e) {
      return [e.email, e]
    }
    function er(e) {
      return "ready" === e.status || "failed" === e.status || "uncertain" === e.status
    }
    function ei(e) {
      return "invited" !== e.status
    }
    function eo(e) {
      return { email: e, seatType: null, status: "ready" }
    }
    function es(e) {
      return null != e
    }
    function el(e) {
      return "" !== e.email.trim()
    }
    function ed(e) {
      return { ...e, seatType: e.seatType ?? "default" }
    }
    var eu = n("Bbed"),
      ec = n("hZax"),
      ep = n("fGdi")
    let em = (0, eu._)(async () => (await Promise.all([n.e(753405), n.e(695234)]).then(n.bind(n, "uvSx"))).InviteAll, {
      fallback: (0, a.jsx)(function () {
        let e,
          t,
          n = (0, r.c)(2)
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("span", {
                className: "sr-only",
                children: (0, a.jsx)(S.A, {
                  id: "onboarding.inviteAll.loading",
                  defaultMessage: "Loading workspace invitations\u2026",
                }),
              })),
              (n[0] = e))
            : (e = n[0]),
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsxs)("section", {
                className: ep.A.invite,
                role: "status",
                children: [
                  e,
                  (0, a.jsxs)("div", {
                    "aria-hidden": "true",
                    className: "flex flex-col items-center",
                    children: [
                      (0, a.jsx)("div", { className: "h-[26px] w-3/4 rounded bg-text/10" }),
                      (0, a.jsx)("div", { className: "mt-1.5 h-5 w-1/2 rounded bg-text/10" }),
                      (0, a.jsx)("div", { className: "mt-6 h-[126px] w-full rounded-xl bg-text/5" }),
                      (0, a.jsx)("div", { className: "mt-3 h-[118px] w-full rounded-[20px] bg-text/5" }),
                      (0, a.jsx)("div", { className: "mt-5 h-10 w-full rounded-full bg-text/10" }),
                      (0, a.jsx)("div", { className: "my-5 h-4 w-20 rounded bg-text/10" }),
                    ],
                  }),
                ],
              })),
              (n[1] = t))
            : (t = n[1]),
          t
        )
      }, {}),
      errorFallback: ({ manualForm: e }) => e,
    })
    function eg(e) {
      let t,
        n,
        i,
        o,
        s,
        d,
        c,
        p,
        g = (0, r.c)(36),
        {
          identity: f,
          disabled: v,
          replay: h,
          onContinue: w,
          timing: y,
          onPendingChange: b,
          onBulkSubmissionStarted: x,
          children: k,
        } = e,
        A = void 0 !== h && h,
        { userId: j, workspaceId: _ } = f
      g[0] !== j || g[1] !== _ ? ((t = { accountId: _, userId: j }), (g[0] = j), (g[1] = _), (g[2] = t)) : (t = g[2])
      let S = t,
        I = (0, ec.AS)()
      g[3] !== f || g[4] !== I || g[5] !== j
        ? ((n = () => (0, C.L)(f) && I.getContext().user.userID === j), (g[3] = f), (g[4] = I), (g[5] = j), (g[6] = n))
        : (n = g[6])
      let O = n
      g[7] !== O || g[8] !== I
        ? ((i = () => {
            if (!O()) return null
            let e = (0, ec.XM)(I, "2462293301"),
              t = e.__evaluation,
              n = e.__value.enabled
            return "boolean" == typeof n &&
              t?.allocated_experiment_name &&
              !0 === t.is_user_in_experiment &&
              !1 !== t.is_experiment_active &&
              t.explicit_parameters?.includes("enabled")
              ? { enabled: n, expose: () => e.get("enabled", !1) }
              : null
          }),
          (g[7] = O),
          (g[8] = I),
          (g[9] = i))
        : (i = g[9])
      let [E] = (0, u.useState)(i),
        M = A ? "onboarding-replay-domain-members" : "onboarding-domain-members"
      g[10] !== M || g[11] !== j || g[12] !== _
        ? ((o = [M, _, j]), (g[10] = M), (g[11] = j), (g[12] = _), (g[13] = o))
        : (o = g[13])
      let T = null != E
      ;(g[14] !== E || g[15] !== S || g[16] !== O || g[17] !== A || g[18] !== _
        ? ((s = async (e) => {
            let t = AbortSignal.timeout(5e3),
              n = E?.enabled ? AbortSignal.any([e.signal, t]) : t,
              a = await m.Request.safeGet("/referrals/workspace/domain-members", {
                expectedIdentity: S,
                parameters: { query: { source: "onboarding" } },
                additionalHeaders: { "x-openai-use-sheep": "1" },
                signal: n,
              })
            n.throwIfAborted()
            let r = a.domain_member_count ?? 0
            return a.eligible && a.workspace_id === _ && a.domain && !(r <= 0) && O()
              ? (A || E?.expose(), { domain: a.domain, count: r })
              : null
          }),
          (g[14] = E),
          (g[15] = S),
          (g[16] = O),
          (g[17] = A),
          (g[18] = _),
          (g[19] = s))
        : (s = g[19]),
        g[20] !== o || g[21] !== T || g[22] !== s
          ? ((d = {
              queryKey: o,
              enabled: T,
              queryFn: s,
              networkMode: "always",
              staleTime: 1 / 0,
              retry: !1,
              gcTime: 0,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
            }),
            (g[20] = o),
            (g[21] = T),
            (g[22] = s),
            (g[23] = d))
          : (d = g[23]))
      let { data: L, isLoading: P } = (0, l.I)(d)
      if (E?.enabled && P) {
        let e
        return (
          g[24] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(N.y, {})), (g[24] = e)) : (e = g[24]),
          e
        )
      }
      return E?.enabled && L
        ? (g[25] !== S || g[26] !== x
            ? ((c = (e) => (
                x?.(),
                m.Request.safePost("/referrals/workspace/domain-members/invite", {
                  parameters: { query: { source: "onboarding", auto_approve_join_requests: e } },
                  requestBody: null,
                  expectedIdentity: S,
                  retry: "never",
                })
              )),
              (g[25] = S),
              (g[26] = x),
              (g[27] = c))
            : (c = g[27]),
          g[28] !== k || g[29] !== L || g[30] !== v || g[31] !== w || g[32] !== b || g[33] !== c || g[34] !== y
            ? ((p = (0, a.jsx)("main", {
                className: ep.A.page,
                children: (0, a.jsx)(em, {
                  timing: y,
                  ...L,
                  manualForm: k,
                  disabled: v,
                  onPendingChange: b,
                  onContinue: w,
                  onSend: c,
                }),
              })),
              (g[28] = k),
              (g[29] = L),
              (g[30] = v),
              (g[31] = w),
              (g[32] = b),
              (g[33] = c),
              (g[34] = y),
              (g[35] = p))
            : (p = g[35]),
          p)
        : k
    }
    var ef = n("dHYa"),
      ev = n("rrA6"),
      eh = n("aepO"),
      ew = n("kK7d"),
      ey = n("QORo")
    function eb(e) {
      let t,
        n,
        i,
        o,
        s,
        l,
        d,
        c,
        p,
        m,
        g,
        f = (0, r.c)(53),
        { identity: v, checkoutSessionId: h, query: w, onCopied: y } = e
      f[0] !== h || f[1] !== v
        ? ((t = { identity: v, checkoutSessionId: h }), (f[0] = h), (f[1] = v), (f[2] = t))
        : (t = f[2])
      let b = (0, ey.m)(t),
        x = (0, T.A)(),
        k = (0, u.useId)(),
        [A, j] = (0, u.useState)(!1),
        [_, O] = (0, u.useState)(!1),
        [E, M] = (0, u.useState)(!1),
        N = (0, ec.Zj)("3461971912"),
        P = (0, ec.Zj)("3227049108")
      f[3] !== w.data || f[4] !== N || f[5] !== P
        ? ((n = w.data && (0, ef.vc)(w.data, { socialSharing: N, workDomainOpenAccess: P })),
          (f[3] = w.data),
          (f[4] = N),
          (f[5] = P),
          (f[6] = n))
        : (n = f[6])
      let R = n,
        D = "unavailable" === R || w.isFetching || w.isPaused ? null : R,
        q = !w.isError && D?.invite_url ? D.expires_at : null
      f[7] !== h || f[8] !== v || f[9] !== b || f[10] !== q
        ? ((i = () => {
            null == h ||
              null == q ||
              Date.parse(q) <= Date.now() ||
              (0, ev.p)(
                v,
                h,
                `inviteLinkShown:${q}`,
                () => (0, C.L)(v),
                () => b("SHOWN"),
              )
          }),
          (f[7] = h),
          (f[8] = v),
          (f[9] = b),
          (f[10] = q),
          (f[11] = i))
        : (i = f[11])
      let W = (0, u.useEffectEvent)(i)
      if (
        (f[12] !== W
          ? ((o = () => {
              W()
            }),
            (f[12] = W),
            (f[13] = o))
          : (o = f[13]),
        f[14] !== h || f[15] !== v.userId || f[16] !== v.workspaceId || f[17] !== q
          ? ((s = [h, v.userId, v.workspaceId, q]),
            (f[14] = h),
            (f[15] = v.userId),
            (f[16] = v.workspaceId),
            (f[17] = q),
            (f[18] = s))
          : (s = f[18]),
        (0, u.useEffect)(o, s),
        w.isError)
      ) {
        let e, t, n
        return (
          f[19] !== w ? ((e = () => void w.refetch()), (f[19] = w), (f[20] = e)) : (e = f[20]),
          f[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(S.A, {
                id: "workspaceOwnerOnboarding.inviteLink.retry",
                defaultMessage: "Try loading invite link again",
              })),
              (f[21] = t))
            : (t = f[21]),
          f[22] !== e
            ? ((n = (0, a.jsx)(I.$, { color: "ghostSecondary", onClick: e, children: t })), (f[22] = e), (f[23] = n))
            : (n = f[23]),
          n
        )
      }
      let F = q ? D?.invite_url : null,
        B = D?.sharing_disabled && D.can_change_auto_approve_requests && D.auto_approve_requests
      if (!D || (!F && !B)) return null
      f[24] !== x
        ? ((l = x.formatMessage({ id: "workspace.members.inviteLink.copy.action", defaultMessage: "Copy link" })),
          (f[24] = x),
          (f[25] = l))
        : (l = f[25])
      let K = l
      f[26] !== v || f[27] !== b || f[28] !== w
        ? ((d = async function (e) {
            ;(O(!0), M(!1))
            try {
              ;((0, C.M)(v),
                await ew.Kd.safePatch("/accounts/{account_id}/invite-link", {
                  parameters: { path: { account_id: v.workspaceId } },
                  expectedIdentity: { accountId: v.workspaceId, userId: v.userId },
                  requestBody: { auto_approve_requests: e },
                  retry: "never",
                }),
                b(e ? "AUTO_APPROVAL_ENABLED" : "AUTO_APPROVAL_DISABLED"))
            } catch {
              M(!0)
            }
            ;(await w.refetch(), O(!1))
          }),
          (f[26] = v),
          (f[27] = b),
          (f[28] = w),
          (f[29] = d))
        : (d = f[29])
      let $ = d
      return (
        f[30] !== h ||
        f[31] !== A ||
        f[32] !== K ||
        f[33] !== b ||
        f[34] !== q ||
        f[35] !== y ||
        f[36] !== w ||
        f[37] !== F
          ? ((c =
              F &&
              (0, a.jsxs)("div", {
                className: "flex items-center gap-2 rounded-xl bg-secondary-soft p-3",
                "data-dd-privacy": "mask",
                children: [
                  (0, a.jsx)("input", {
                    "aria-label": K,
                    className: "min-w-0 flex-1 truncate bg-transparent text-secondary",
                    readOnly: !0,
                    dir: "ltr",
                    value: F,
                    onFocus: ex,
                    onCopy: (e) => {
                      let t = e.currentTarget
                      e.isTrusted &&
                        !e.defaultPrevented &&
                        0 === t.selectionStart &&
                        t.selectionEnd === F.length &&
                        (e.clipboardData.setData("text/plain", F),
                        e.preventDefault(),
                        b("SHARED", { linkCopyButton: !1 }),
                        y())
                    },
                  }),
                  (0, a.jsx)(I.$, {
                    color: "ghostSecondary",
                    "aria-label": K,
                    title: K,
                    onClick: (e) => {
                      ;(null == q || Date.parse(q) <= Date.now()
                        ? w.refetch()
                        : (0, eh.lW)(F, e).then((e) => {
                            ;(j(e), e && (b("SHARED", { linkCopyButton: !0 }), y()))
                          }),
                        null != h && b("COPY_CLICKED"))
                    },
                    children: A ? (0, a.jsx)(L.ALZ, {}) : (0, a.jsx)(L.yDG, {}),
                  }),
                ],
              })),
            (f[30] = h),
            (f[31] = A),
            (f[32] = K),
            (f[33] = b),
            (f[34] = q),
            (f[35] = y),
            (f[36] = w),
            (f[37] = F),
            (f[38] = c))
          : (c = f[38]),
        f[39] !== k ||
        f[40] !== D.auto_approve_requests ||
        f[41] !== D.can_change_auto_approve_requests ||
        f[42] !== D.has_social_owner ||
        f[43] !== D.workspace_domains ||
        f[44] !== _ ||
        f[45] !== $
          ? ((p =
              !1 === D.has_social_owner &&
              D.workspace_domains[0] &&
              D.can_change_auto_approve_requests &&
              "boolean" == typeof D.auto_approve_requests &&
              (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [
                  (0, a.jsx)(z.S, {
                    id: k,
                    checked: D.auto_approve_requests,
                    disabled: _,
                    onCheckedChange: (e) => void $(e),
                  }),
                  (0, a.jsx)("label", {
                    htmlFor: k,
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(S.A, {
                      id: "workspaceOwnerOnboarding.inviteLink.autoApprove",
                      defaultMessage:
                        "Auto-approve requests from {domain} through this link and buy extra seats when needed.",
                      values: { domain: D.workspace_domains[0] },
                    }),
                  }),
                ],
              })),
            (f[39] = k),
            (f[40] = D.auto_approve_requests),
            (f[41] = D.can_change_auto_approve_requests),
            (f[42] = D.has_social_owner),
            (f[43] = D.workspace_domains),
            (f[44] = _),
            (f[45] = $),
            (f[46] = p))
          : (p = f[46]),
        f[47] !== E
          ? ((m =
              E &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, a.jsx)(S.A, {
                  id: "workspaceOwnerOnboarding.invitations.autoApprove.saveError",
                  defaultMessage: "Couldn't update automatic approval. Please try again.",
                }),
              })),
            (f[47] = E),
            (f[48] = m))
          : (m = f[48]),
        f[49] !== m || f[50] !== c || f[51] !== p
          ? ((g = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [c, p, m] })),
            (f[49] = m),
            (f[50] = c),
            (f[51] = p),
            (f[52] = g))
          : (g = f[52]),
        g
      )
    }
    function ex(e) {
      return e.currentTarget.select()
    }
    var ek = n("dNSZ"),
      eC = n("nzdq")
    let eA = "/payments/business-onboarding/teammate-invites",
      ej = (0, d.vU)(x.u, ({ workspaceId: e, userId: t }) => ({
        queryKey: ["onboarding-invite-suggestions", e, t],
        queryFn: async ({ signal: n }) => {
          let { status: a } = await m.Request.safeGet(eA, { expectedIdentity: { accountId: e, userId: t }, signal: n })
          return "available" === a || "ready" === a || "pending" === a
        },
        retry: !1,
        staleTime: 0,
        refetchOnMount: !0,
        retryOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }))
    function e_(e) {
      let t,
        n,
        i,
        o,
        s,
        l,
        c = (0, r.c)(20),
        p = (0, d.gh)(x.u),
        m = (0, u.useRef)(!1)
      ;(c[0] !== e.inviteTelemetry || c[1] !== p
        ? ((t = () => {
            null == e.inviteTelemetry ||
              m.current ||
              ((m.current = !0), (0, y.m)(p, e.inviteTelemetry, "workspace_invite_shown"))
          }),
          (n = [p, e.inviteTelemetry]),
          (c[0] = e.inviteTelemetry),
          (c[1] = p),
          (c[2] = t),
          (c[3] = n))
        : ((t = c[2]), (n = c[3])),
        (0, u.useEffect)(t, n))
      let g = `${e.identity.userId}:${e.identity.workspaceId}`
      return (
        c[4] !== e || c[5] !== p
          ? ((i = () => {
              ;(e.onSubmissionStarted?.(),
                (0, y.m)(p, e.inviteTelemetry, "workspace_invite_submission_started", void 0, crypto.randomUUID()))
            }),
            (o = (t, n) => (
              (0, C.M)(e.identity),
              n && (0, y.d)(p, e.inviteTelemetry, eS),
              e.onContinue({ step: "invitations", invitedCount: t, skipped: n })
            )),
            (c[4] = e),
            (c[5] = p),
            (c[6] = i),
            (c[7] = o))
          : ((i = c[6]), (o = c[7])),
        c[8] !== e ? ((s = (0, a.jsx)(eI, { ...e })), (c[8] = e), (c[9] = s)) : (s = c[9]),
        c[10] !== e.identity ||
        c[11] !== e.isAdvancePending ||
        c[12] !== e.onPendingChange ||
        c[13] !== e.replay ||
        c[14] !== e.timing ||
        c[15] !== g ||
        c[16] !== i ||
        c[17] !== o ||
        c[18] !== s
          ? ((l = (0, a.jsx)(
              eg,
              {
                replay: e.replay,
                identity: e.identity,
                disabled: e.isAdvancePending,
                timing: e.timing,
                onPendingChange: e.onPendingChange,
                onBulkSubmissionStarted: i,
                onContinue: o,
                children: s,
              },
              g,
            )),
            (c[10] = e.identity),
            (c[11] = e.isAdvancePending),
            (c[12] = e.onPendingChange),
            (c[13] = e.replay),
            (c[14] = e.timing),
            (c[15] = g),
            (c[16] = i),
            (c[17] = o),
            (c[18] = s),
            (c[19] = l))
          : (l = c[19]),
        l
      )
    }
    async function eS() {}
    function eI(e) {
      let t,
        n,
        _,
        S,
        I,
        O,
        E,
        M,
        T,
        L,
        N,
        P,
        R,
        D,
        q,
        W,
        z,
        F,
        B,
        K,
        $,
        U,
        Z,
        H = (0, r.c)(98),
        G = (0, d.gh)(x.u),
        V = (0, d.Ul)(w.B),
        [Q, Y] = (0, u.useState)(!1),
        J = e.identity
      H[0] !== J ? ((t = (0, C.L)(J)), (H[0] = J), (H[1] = t)) : (t = H[1])
      let ee = t
      H[2] !== ee ? ((n = { enabled: ee }), (H[2] = ee), (H[3] = n)) : (n = H[3])
      let et = (0, d._U)(ej, J, n)
      H[4] !== e.replay
        ? ((_ = { active: !0, invitePage: !0, replay: e.replay }), (H[4] = e.replay), (H[5] = _))
        : (_ = H[5])
      let en = (0, ek.d)(J, _),
        ea = (0, s.jE)(),
        { accountId: er, email: ei, userId: eo } = (0, c.As)()
      H[6] !== er || H[7] !== eo
        ? ((S = { accountId: er, userId: eo }), (H[6] = er), (H[7] = eo), (H[8] = S))
        : (S = H[8])
      let { data: es } = (0, d._U)(p.km, S),
        el = (0, d._U)(A.j, J),
        { data: ed, error: eu, isFetchedAfterMount: ec, refetch: ep } = el,
        em = ec && null == eu ? ed : void 0
      ;(H[9] !== J.userId || H[10] !== J.workspaceId
        ? ((I = ["business-onboarding-invite", J.workspaceId, "identity", J.userId]),
          (H[9] = J.userId),
          (H[10] = J.workspaceId),
          (H[11] = I))
        : (I = H[11]),
        H[12] !== J.userId || H[13] !== J.workspaceId
          ? ((O = (e) => {
              let { signal: t } = e
              return m.Request.safeGet("/accounts/{account_id}/identity", {
                parameters: { path: { account_id: J.workspaceId } },
                expectedIdentity: { accountId: J.workspaceId, userId: J.userId },
                signal: t,
              })
            }),
            (H[12] = J.userId),
            (H[13] = J.workspaceId),
            (H[14] = O))
          : (O = H[14]),
        H[15] !== I || H[16] !== O
          ? ((E = { queryKey: I, staleTime: 0, queryFn: O }), (H[15] = I), (H[16] = O), (H[17] = E))
          : (E = H[17]))
      let eg = (0, l.I)(E),
        ef = null != e.inviteTelemetry
      H[18] !== J || H[19] !== ea || H[20] !== ef
        ? ((M = (0, k._)(J, ea, { finishAfterUnmount: ef })), (H[18] = J), (H[19] = ea), (H[20] = ef), (H[21] = M))
        : (M = H[21])
      let ev = M
      H[22] !== ev.queryKey || H[23] !== ea
        ? ((T = () => ea.getQueryState(ev.queryKey)?.dataUpdateCount ?? 0),
          (H[22] = ev.queryKey),
          (H[23] = ea),
          (H[24] = T))
        : (T = H[24])
      let [eh] = (0, u.useState)(T),
        { data: ew, error: ey, isFetchedAfterMount: ex, refetch: e_ } = (0, l.I)(ev),
        eS = ex && null == ey ? ew : void 0,
        eI = "loading"
      null != ey ? (eI = "error") : null != eS && (eI = "ready")
      let eM = eg.data,
        eT = (0, v.n)(J.workspaceId, el, eg),
        eL = (0, h.p9)(J.workspaceId, e.planType),
        eN = (0, i.ob)(es?.email ?? ei, es?.email_domain_type, eT)
      ;((0, h.nU)(J.workspaceId, eL.enrolled && null != eN),
        H[25] !== ei || H[26] !== es?.email_domain_type || H[27] !== eM
          ? ((L = null == eM ? void 0 : (0, j._t)(eM.domains.filter(eE).map(eO), ei, es?.email_domain_type)),
            (H[25] = ei),
            (H[26] = es?.email_domain_type),
            (H[27] = eM),
            (H[28] = L))
          : (L = H[28]))
      let eP = L
      H[29] !== eh || H[30] !== ev.queryKey || H[31] !== ea || H[32] !== e_
        ? ((N = async function (e) {
            ea.getQueryState(ev.queryKey)?.fetchStatus === "fetching" && (await e_({ cancelRefetch: !1 }))
            let t = ea.getQueryState(ev.queryKey)
            return t?.status === "success" && t.dataUpdateCount > eh && null != t.data ? (0, j.QZ)(t.data, e) : void 0
          }),
          (H[29] = eh),
          (H[30] = ev.queryKey),
          (H[31] = ea),
          (H[32] = e_),
          (H[33] = N))
        : (N = H[33])
      let eR = N
      H[34] !== ee || H[35] !== et || H[36] !== J
        ? ((P =
            ee && et.isFetchedAfterMount && et.isSuccess && et.data
              ? (e) =>
                  (function ({ workspaceId: e, userId: t }, n) {
                    let a = { accountId: e, userId: t }
                    return (0, eC.X)(
                      {
                        start: (e) => m.Request.safePost(eA, { expectedIdentity: a, signal: e }),
                        read: (e) =>
                          m.Request.safeGet(eA, {
                            expectedIdentity: a,
                            parameters: { query: { include_emails: !0 } },
                            signal: e,
                          }),
                      },
                      n,
                    )
                  })(J, e)
              : void 0),
          (H[34] = ee),
          (H[35] = et),
          (H[36] = J),
          (H[37] = P))
        : (P = H[37])
      let eD = en.enabled && Q
      ;(H[38] !== J || H[39] !== en.enabled || H[40] !== en.query || H[41] !== e.inviteTelemetry?.checkoutSessionId
        ? ((R = en.enabled
            ? (0, a.jsx)(eb, {
                identity: J,
                checkoutSessionId: e.inviteTelemetry?.checkoutSessionId,
                query: en.query,
                onCopied: () => Y(!0),
              })
            : void 0),
          (H[38] = J),
          (H[39] = en.enabled),
          (H[40] = en.query),
          (H[41] = e.inviteTelemetry?.checkoutSessionId),
          (H[42] = R))
        : (R = H[42]),
        H[43] !== J || H[44] !== G
          ? ((D = () => {
              ;(0, C.L)(J) &&
                (0, b.yy)(G, o.we, {
                  action: o.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_DOMAIN_COMPLETION_ACCEPTED,
                  entryPoint: "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_OWNER_ONBOARDING",
                })
            }),
            (H[43] = J),
            (H[44] = G),
            (H[45] = D))
          : (D = H[45]))
      let eq = eL.treatment ? eN : void 0
      H[46] !== em || H[47] !== en.enabled || H[48] !== eP
        ? ((q =
            en.enabled || null == em
              ? void 0
              : {
                  enabled: !0 === em.auto_accept_requests,
                  canEnable: !0 === em.support_workspace_discovery && null != eP,
                }),
          (H[46] = em),
          (H[47] = en.enabled),
          (H[48] = eP),
          (H[49] = q))
        : (q = H[49])
      let eW = !en.enabled && null != eu
      ;(H[50] !== ep
        ? ((W = () => {
            ep()
          }),
          (H[50] = ep),
          (H[51] = W))
        : (W = H[51]),
        H[52] !== J || H[53] !== G.query || H[54] !== G.queryClient
          ? ((z = async (e, t) => {
              ;((0, C.M)(J),
                await m.Request.safePost("/accounts/{account_id}/settings/auto_accept_requests", {
                  parameters: { path: { account_id: J.workspaceId } },
                  expectedIdentity: { accountId: J.workspaceId, userId: J.userId },
                  requestBody: { value: e },
                  signal: t,
                }),
                (0, C.M)(J))
              let n = G.query.getData(A.j, J)
              ;(null != n && G.query.setData(A.j, J, { ...n, auto_accept_requests: e }),
                G.queryClient.invalidateQueries({ queryKey: ["workspace-settings", J.workspaceId] }))
            }),
            (H[52] = J),
            (H[53] = G.query),
            (H[54] = G.queryClient),
            (H[55] = z))
          : (z = H[55]))
      let ez = V?.checkoutSessionId === e.checkoutSessionId ? V.quantity : void 0
      return (
        H[56] !== e_
          ? ((F = async () => {
              let e = await e_()
              return e.isSuccess ? e.data : void 0
            }),
            (H[56] = e_),
            (H[57] = F))
          : (F = H[57]),
        H[58] !== J || H[59] !== e.inviteTelemetry || H[60] !== e.onSubmissionStarted || H[61] !== ea || H[62] !== G
          ? ((B = (t, n) =>
              (async function ({
                identity: e,
                queryClient: t,
                inputRows: n,
                signal: a,
                onSubmissionStarted: r,
                onSubmission: i,
              }) {
                let o
                function s() {
                  ;(a.throwIfAborted(), (0, C.M)(e))
                }
                let l = [...n],
                  d = (0, k._)(e, t)
                for (let n of ["default", "prolite"]) {
                  let u = l.filter((e) => e.seatType === n && !(0, j.Tn)(e))
                  for (let c = 0; c < u.length; c += 50) {
                    let p
                    s()
                    try {
                      p = await t.fetchQuery(d)
                    } catch {
                      return { rows: l, error: "read" }
                    }
                    ;(s(), (l = (0, j.zf)(l, p)))
                    let g = (0, j.L8)(p, l)
                    for (let e of ["default", "prolite"]) {
                      let t = l.filter((t) => t.seatType === e && (0, j.q$)(t, p)).length,
                        n = g[e]
                      if (t > 0 && (null == n || t > n)) return { rows: l, error: "capacity" }
                    }
                    let f = new Set(u.slice(c, c + 50).map((e) => e.email)),
                      v = l.filter((e) => f.has(e.email) && (0, j.q$)(e, p)).map((e) => e.email)
                    if (0 === v.length) continue
                    ;(s(), r?.(), null == o && ((o = crypto.randomUUID()), i?.(o, (0, j.QZ)(p, l))))
                    let h = new Set(v)
                    l = l.map((e) => (h.has(e.email) ? { ...e, status: "uncertain" } : e))
                    try {
                      let t = await m.Request.safePost("/accounts/{account_id}/invites", {
                        signal: a,
                        parameters: { path: { account_id: e.workspaceId } },
                        expectedIdentity: { accountId: e.workspaceId, userId: e.userId },
                        requestBody: {
                          email_addresses: v,
                          role: "standard-user",
                          seat_type: n,
                          resend_emails: !1,
                          submission_id: o,
                        },
                      })
                      s()
                      let r = new Map(
                          t.account_invites
                            .filter((e) => [2, 3, 5, 6].includes(e.status))
                            .flatMap((e) =>
                              null == e.email_address ? [] : [[e.email_address.trim().toLowerCase(), e.id]],
                            ),
                        ),
                        i = new Set((t.already_member_emails ?? []).map((e) => e.trim().toLowerCase())),
                        d = new Set(t.errored_emails.map((e) => e.email_address.trim().toLowerCase()))
                      l = l.map((e) =>
                        h.has(e.email)
                          ? i.has(e.email)
                            ? { ...e, status: "member" }
                            : d.has(e.email)
                              ? { ...e, status: "failed", pendingInviteId: r.get(e.email) ?? e.pendingInviteId }
                              : r.has(e.email)
                                ? { ...e, status: "invited" }
                                : e
                          : e,
                      )
                    } catch {}
                    if ((s(), l.some((e) => h.has(e.email) && !(0, j.Tn)(e)))) {
                      try {
                        p = await t.fetchQuery(d)
                      } catch {
                        return { rows: l, error: "uncertain" }
                      }
                      if ((s(), (l = (0, j.zf)(l, p)).some((e) => h.has(e.email) && !(0, j.Tn)(e))))
                        return { rows: l, error: "partial" }
                    }
                  }
                }
                return { rows: l, error: l.some((e) => !(0, j.Tn)(e)) ? "partial" : null }
              })({
                identity: J,
                queryClient: ea,
                inputRows: t,
                signal: n,
                onSubmissionStarted: e.onSubmissionStarted,
                onSubmission: (t, n) => {
                  ;(0, y.m)(G, e.inviteTelemetry, "workspace_invite_submission_started", n, t)
                },
              })),
            (H[58] = J),
            (H[59] = e.inviteTelemetry),
            (H[60] = e.onSubmissionStarted),
            (H[61] = ea),
            (H[62] = G),
            (H[63] = B))
          : (B = H[63]),
        H[64] !== e.inviteTelemetry || H[65] !== eR || H[66] !== G
          ? ((K = (t) => {
              ;(0, y.d)(G, e.inviteTelemetry, () => eR(t))
            }),
            (H[64] = e.inviteTelemetry),
            (H[65] = eR),
            (H[66] = G),
            (H[67] = K))
          : (K = H[67]),
        H[68] !== J || H[69] !== e
          ? (($ = async (t) => {
              ;((0, C.M)(J), await e.onContinue(t))
            }),
            (H[68] = J),
            (H[69] = e),
            (H[70] = $))
          : ($ = H[70]),
        H[71] !== J
          ? ((U = (e) => {
              ;(0, C.M)(J)
              let t = new URL("/admin/members", g.e)
              ;(t.searchParams.set("account_id", J.workspaceId),
                (0, f.PQ)({
                  event: e,
                  href: t.toString(),
                  disposition: "new-tab",
                  initiator: "open_in_browser_bridge",
                }))
            }),
            (H[71] = J),
            (H[72] = U))
          : (U = H[72]),
        H[73] !== eL.treatment ||
        H[74] !== eT ||
        H[75] !== eS ||
        H[76] !== e.continueLabel ||
        H[77] !== e.isAdvancePending ||
        H[78] !== e.onPendingChange ||
        H[79] !== e.timing ||
        H[80] !== eI ||
        H[81] !== eP ||
        H[82] !== P ||
        H[83] !== eD ||
        H[84] !== R ||
        H[85] !== D ||
        H[86] !== eq ||
        H[87] !== q ||
        H[88] !== eW ||
        H[89] !== W ||
        H[90] !== z ||
        H[91] !== ez ||
        H[92] !== F ||
        H[93] !== B ||
        H[94] !== K ||
        H[95] !== $ ||
        H[96] !== U
          ? ((Z = (0, a.jsx)(X, {
              onSuggest: P,
              linkCopied: eD,
              inviteLink: R,
              suggestedDomain: eP,
              onCompletionAccepted: D,
              completionPolicy: eT,
              completionTreatment: eL.treatment,
              completionDomain: eq,
              autoApprove: q,
              autoApproveReadError: eW,
              onRetryAutoApprove: W,
              onAutoApproveChange: z,
              checkoutSeatCount: ez,
              inventory: eS,
              readState: eI,
              continueLabel: e.continueLabel,
              isAdvancePending: e.isAdvancePending,
              timing: e.timing,
              onPendingChange: e.onPendingChange,
              onRefreshInventory: F,
              onSend: B,
              onSkip: K,
              onContinue: $,
              onManageInvitations: U,
            })),
            (H[73] = eL.treatment),
            (H[74] = eT),
            (H[75] = eS),
            (H[76] = e.continueLabel),
            (H[77] = e.isAdvancePending),
            (H[78] = e.onPendingChange),
            (H[79] = e.timing),
            (H[80] = eI),
            (H[81] = eP),
            (H[82] = P),
            (H[83] = eD),
            (H[84] = R),
            (H[85] = D),
            (H[86] = eq),
            (H[87] = q),
            (H[88] = eW),
            (H[89] = W),
            (H[90] = z),
            (H[91] = ez),
            (H[92] = F),
            (H[93] = B),
            (H[94] = K),
            (H[95] = $),
            (H[96] = U),
            (H[97] = Z))
          : (Z = H[97]),
        Z
      )
    }
    function eO(e) {
      return e.hostname
    }
    function eE(e) {
      return "verified" === e.status
    }
  },
  KpEg(e, t, n) {
    var a = n("qmMi"),
      r = n("CLax"),
      i = n("OiCI"),
      o = n("SPnB"),
      s = n("Kwur"),
      l = n("OWtl"),
      d = n("zdnx")
    let u = (0, a.vU)(l.u, (e, { get: t }) => ({
        queryKey: ["owner-onboarding", "workspace-settings", e.userId, e.workspaceId],
        enabled: t(o.o8) === e.userId && t(i.Sk) === e.workspaceId,
        staleTime: 0,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async ({ signal: t }) => {
          ;(0, d.M)(e)
          let n = await s.Request.safeGet("/accounts/{account_id}/settings", {
            parameters: { path: { account_id: e.workspaceId }, query: { include_workspace_discovery: !0 } },
            expectedIdentity: { accountId: e.workspaceId, userId: e.userId },
            signal: t,
          })
          return ((0, d.M)(e), n)
        },
      })),
      c = (0, a.vU)(l.u, (e, { get: t, scope: n }) => ({
        queryKey: ["owner-onboarding", "workspace", e.userId, e.workspaceId],
        enabled: t(o.o8) === e.userId && t(i.Sk) === e.workspaceId,
        staleTime: 0,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async ({ signal: t }) => {
          ;(0, d.M)(e)
          let [a, i, o] = await Promise.all([
            n.queryClient.fetchQuery({ ...n.query.getOptions(r.sE, e.workspaceId), staleTime: 0 }),
            s.Request.safeGet("/accounts/{account_id}/onboarding_metadata", {
              parameters: { path: { account_id: e.workspaceId } },
              additionalHeaders: { "ChatGPT-Account-ID": e.workspaceId },
              signal: t,
            }),
            n.queryClient.fetchQuery(n.query.getOptions(u, e)),
          ])
          ;(0, d.M)(e)
          let l = a.accounts[e.workspaceId]?.account
          if (null == l || l.account_id !== e.workspaceId || "account-owner" !== l.account_user_role)
            throw Error("Owner workspace access unavailable")
          return { account: l, metadata: i, settings: o }
        },
      }))
    n.d(
      t,
      {},
      {
        j: u,
        prepareOwnerWorkspacePage: async function (e, t) {
          await e.queryClient.fetchQuery(e.query.getOptions(c, t))
        },
        y: c,
      },
    )
  },
  gWdV(e, t, n) {
    var a = n("S2r0")
    n.d(
      t,
      {},
      {
        _: function (e, t, { finishAfterUnmount: r = !1 } = {}) {
          return (0, a.j)({
            queryKey: ["workspace-owner-invitations", e.userId, e.workspaceId],
            queryFn: async (a) => {
              let i = r ? void 0 : a.signal,
                { readInvitationInventory: o } = await n.e(14459).then(n.bind(n, "VQa3"))
              return o(e, t, i)
            },
            staleTime: 0,
            retry: !1,
            refetchOnMount: !0,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          })
        },
      },
    )
  },
  e4gl(e, t, n) {
    var a = n("qmMi"),
      r = n("ASxG"),
      i = n("OWtl")
    let o = "oai/apps/businessCheckoutSeats",
      s = r.Ikc({ checkoutSessionId: r.YjP(), quantity: r.aig().int().positive() }),
      l = (0, a.vP)(
        i.u,
        () => {
          try {
            let e = window.localStorage.getItem(o)
            return null == e ? null : s.parse(JSON.parse(e))
          } catch {
            return null
          }
        },
        { getServerSnapshot: () => null },
      )
    n.d(
      t,
      {},
      {
        B: l,
        a: function (e, t, n) {
          if (!Number.isSafeInteger(n) || n < 1) return
          let a = { checkoutSessionId: t, quantity: n }
          e.set(l, a)
          try {
            window.localStorage.setItem(o, JSON.stringify(a))
          } catch {}
        },
      },
    )
  },
  lc7X(e, t, n) {
    var a = n("MVHH"),
      r = n("D015"),
      i = n("qmMi"),
      o = n("SPnB"),
      s = n("yGJW"),
      l = n("OWtl"),
      d = n("rrA6")
    let u = (0, i.T1)(l.u, (e) => ({}))
    function c(e, t, n, i, l) {
      if (null == t) return
      let { identity: u, checkoutSessionId: c, flow: p } = t,
        m = () => e.get(o.o8) === u.userId && e.get(o.chatGptAuthenticatedAccountId$) === u.workspaceId,
        g = () =>
          (0, s.yy)(e, a.Rh, {
            checkpoint: n,
            checkoutSessionId: c,
            targetWorkspaceId: u.workspaceId,
            flow: p,
            remainingStandardSeatCount: (0, r.PZ)(i?.default),
            remainingPremiumSeatCount: (0, r.PZ)(i?.prolite),
            submissionId: l,
          })
      if ("workspace_invite_skipped" === n) return (0, d.p)(u, c, "inviteSkipped", m, g)
      m() && g()
    }
    n.d(
      t,
      {},
      {
        d: function (e, t, n) {
          if (null == t) return
          let { identity: a, checkoutSessionId: r } = t,
            i = e.get(u, { identity: a, checkoutSessionId: r })
          null == i.pending &&
            (i.pending = n()
              .catch(() => void 0)
              .then((n) => c(e, t, "workspace_invite_skipped", n))
              .catch(() => void 0)
              .finally(() => {
                delete i.pending
              }))
        },
        m: c,
      },
    )
  },
  rrA6(e, t, n) {
    var a = n("ASxG")
    let r = a.g1P(a.YjP(), a.euz(!0))
    n.d(
      t,
      {},
      {
        p: async function (e, t, a, i, o) {
          let s
          if (i()) {
            try {
              let { accessBrowserHostRecordDurably: o } = await Promise.resolve().then(n.bind(n, "YAwS")),
                l = `workspace-owner-measurements:${JSON.stringify([e.workspaceId, e.userId, t])}`
              s = await o(l, (e) => {
                let t = r.parse(e ?? {})
                return t[a] || !i() ? { result: !1 } : { value: { ...t, [a]: !0 }, result: !0 }
              })
            } catch {
              return
            }
            s && i() && o()
          }
        },
      },
    )
  },
}
//# sourceMappingURL=443855.0649a1f046.js.map
