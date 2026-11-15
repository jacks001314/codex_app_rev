export const __rspack_esm_ids = [696716]
export const __webpack_modules__ = {
  rloG(e, t) {
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
  E2yB(e, t, n) {
    let a =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
    function i(e, t) {
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
            i = n.length > 0 && a.test(n)
          return { checkoutEmail: n, hasCheckoutEmail: i, defaultEmail: i ? "" : (t ?? "") }
        },
        Ub: i,
        WL: a,
        ob: function (e, t, n) {
          if (!e || !a.test(e) || !t || !["professional", "education", "government", "unknown"].includes(t)) return
          let r = e.slice(e.lastIndexOf("@") + 1).toLowerCase()
          return i(r, n) ? r : void 0
        },
      },
    )
  },
  LA5s(e, t, n) {
    var a = n("ABep"),
      i = n("zd8w"),
      r = n("oyxz"),
      o = n("E2yB")
    n.d(
      t,
      {},
      {
        M: function ({ value: e, domain: t, isValidEmail: n = (e) => o.WL.test(e.trim()), onAccept: s, children: l }) {
          let [d, c] = (0, i.useState)(!1),
            [u, p] = (0, i.useState)(!1),
            m =
              t && d && !u && e.length > 0 && !n(e)
                ? (function (e, t) {
                    let n = e.indexOf("@"),
                      a = -1 === n ? "" : e.slice(n),
                      i = "@" + t
                    if (a.length >= i.length || !i.startsWith(a.toLowerCase())) return
                    let r = e + i.slice(a.length)
                    return o.WL.test(r) ? r : void 0
                  })(e, t)
                : void 0,
            v = null != m,
            f = (0, i.useRef)(null),
            [g, h] = (0, i.useState)(!1)
          return (
            (0, i.useLayoutEffect)(() => {
              let e = f.current
              if (!v || !e) return
              let t = () => h(e.scrollWidth > e.clientWidth)
              t()
              let n = new ResizeObserver(t)
              for (let t of (n.observe(e), e.children)) n.observe(t)
              return () => n.disconnect()
            }, [v]),
            (0, a.jsxs)("div", {
              className: "min-w-0",
              onFocus: () => c(!0),
              onBlur: () => {
                ;(c(!1), p(!1))
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
                        style: v && g ? { visibility: "hidden" } : void 0,
                        children: [
                          (0, a.jsx)("span", { className: "shrink-0 whitespace-nowrap", children: m.slice(e.length) }),
                          (0, a.jsx)("kbd", {
                            className: "ms-1 shrink-0 rounded border border-current px-1 font-sans text-xs leading-4",
                            children: (0, a.jsx)(r.A, {
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
                    className: v && g ? "mt-1 block text-xs [overflow-wrap:anywhere]" : "sr-only",
                    role: "status",
                    children: (0, a.jsx)(r.A, {
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
      i = n("on57"),
      r = n("zd8w"),
      o = n("UIGa")
    let s = (e) => {
      let t = (0, r.useRef)(null),
        n = (0, r.useId)(),
        s = `search-ui-input-${n}`,
        {
          id: l,
          name: d,
          type: c = "text",
          variant: u = "outline",
          size: p = "md",
          gutterSize: m,
          className: v,
          autoComplete: f,
          disabled: g = !1,
          readOnly: h = !1,
          invalid: w = !1,
          allowAutofillExtensions: b = "password" === c || !!d || (!!f && "off" !== f),
          onFocus: y,
          onBlur: x,
          onAnimationStart: k,
          onAutofill: C,
          autoSelect: j,
          startAdornment: A,
          endAdornment: _,
          inputClassName: S,
          pill: I = !1,
          opticallyAlign: O,
          ref: T,
          __isWidget: M,
          ...E
        } = e,
        [L, N] = (0, r.useState)(!1)
      return (
        (0, r.useEffect)(() => {
          j && t.current?.select()
        }, [j]),
        (0, a.jsxs)("div", {
          className: (0, i.A)("Container-IlLvT8", v),
          "data-w-component": M ? "input" : "",
          "data-variant": u,
          "data-size": p,
          "data-gutter-size": m,
          "data-focused": L,
          "data-disabled": g ? "" : void 0,
          "data-readonly": h ? "" : void 0,
          "data-invalid": w ? "" : void 0,
          "data-pill": I ? "" : void 0,
          "data-optically-align": O,
          "data-has-start-adornment": A ? "" : void 0,
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
            let { left: a, top: i } = n.getBoundingClientRect(),
              { clientX: r, clientY: o } = e,
              s = o < i || r < a
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
            A,
            (0, a.jsx)("input", {
              ...E,
              ref: (0, o.P)([T, t]),
              id: l || (b ? void 0 : s),
              className: (0, i.A)("Input-yfTWZr", S),
              type: c,
              name: d,
              autoComplete: f,
              readOnly: h,
              disabled: g,
              onFocus: (e) => {
                ;(N(!0), y?.(e))
              },
              onBlur: (e) => {
                ;(N(!1), x?.(e))
              },
              onAnimationStart: (e) => {
                ;(k?.(e), "native-autofill-in" === e.animationName && C?.())
              },
              "data-lpignore": !b || void 0,
              "data-1p-ignore": !b || void 0,
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
      i = n("on57"),
      r = n("zd8w"),
      o = n("UIGa"),
      s = n("pZwg"),
      l = n("fZ4G"),
      d = n("hwkA")
    let c = (e) =>
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
      u = (e) =>
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
      v = "DropdownIcon-hjJBCI"
    let f = ({
        ref: e,
        onPointerDown: t,
        onKeyDown: n,
        onPointerEnter: c,
        onInteract: u,
        invalid: v,
        disabled: f,
        children: h,
        className: w,
        variant: b = "outline",
        size: y = "md",
        block: x,
        disablePressable: k,
        opticallyAlign: C,
        pill: j = s.N.pill,
        loading: A,
        onClearClick: _,
        selected: S = !1,
        StartIcon: I,
        dropdownIconType: O = "dropdown",
        ...T
      }) => {
        let M = (0, r.useRef)(null),
          E = !!_ && S && !A && !f,
          L = O && "none" !== O && !A,
          N = E || A || L,
          R = !A && !f
        return (0, a.jsxs)("span", {
          ref: (0, o.P)([M, e]),
          className: (0, i.A)("SelectControl-GhTNXd", w),
          role: "button",
          tabIndex: f ? -1 : 0,
          onPointerEnter: (e) => {
            ;(k || (0, l.Ny)(e), c?.(e))
          },
          onPointerDown: R
            ? (e) => {
                2 !== e.button && ((e.stopPropagation(), u) ? (e.preventDefault(), u()) : (t?.(e), T.onClick?.(e)))
              }
            : void 0,
          onKeyDown: R
            ? (e) => {
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                  case " ":
                    ;(e.stopPropagation(),
                      e.preventDefault(),
                      u
                        ? u()
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
          "data-variant": b,
          "data-block": x ? "" : void 0,
          "data-disable-pressable": k ? "" : void 0,
          "data-pill": j ? "" : void 0,
          "data-size": y,
          "data-optically-align": C,
          "aria-busy": A ? "true" : void 0,
          "data-selected": S,
          "data-loading": A ? "" : void 0,
          "data-invalid": v ? "" : void 0,
          "data-disabled": f ? "" : void 0,
          "aria-disabled": f,
          ...T,
          onClick: void 0,
          children: [
            I && (0, a.jsx)(I, { className: "StartIcon-Ja6YRO" }),
            (0, a.jsx)("span", { className: "TriggerText-KJGu4X", children: h }),
            N &&
              (0, a.jsxs)("div", {
                className: "IndicatorWrapper-pRcpwW",
                children: [
                  E &&
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
                      pill: j,
                      "data-only-child": L ? void 0 : "",
                      children: (0, a.jsx)(p.X, {}),
                    }),
                  A && (0, a.jsx)(m.I, { className: "LoadingIndicator-zQ4zI3" }),
                  L && (0, a.jsx)(g, { iconType: O }),
                ],
              }),
          ],
        })
      },
      g = ({ iconType: e }) =>
        "chevronDown" === e
          ? (0, a.jsx)(c, { className: (0, i.A)(v, "DropdownIconChevron-sAyN5s") })
          : (0, a.jsx)(u, { className: v })
  },
  AEu9(e, t, n) {
    n.d(t, { l: () => R })
    var a = n("ABep"),
      i = n("on57"),
      r = n("YLKE"),
      o = n("zd8w"),
      s = n("pZwg"),
      l = n("BAKu"),
      d = n("We8q")
    function c(e) {
      let t = (0, o.useRef)(e)
      return ((t.current = e), (0, o.useCallback)((...e) => t.current(...e), []))
    }
    var u = n("o4M9"),
      p = n("fZ4G"),
      m = n("hwkA"),
      v = n("EYJV"),
      f = n("cfIY")
    let g = (e) =>
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
      b = n("Z0qE"),
      y = n("crcI"),
      x = n("UIGa")
    let k = ({ label: e }) => (0, a.jsx)(a.Fragment, { children: e }),
      C = (e) => `Remove ${e.label}`,
      j = ({
        tags: e,
        onRemoveTag: t,
        TagView: n = k,
        getRemoveLabel: r = C,
        ref: s,
        className: l,
        inputClassName: d,
        disabled: c,
        placeholder: u,
        onKeyDown: p,
        startAdornment: m,
        ...v
      }) => {
        let f = (0, o.useRef)(null),
          g = (0, o.useRef)(new Map()),
          h = (t) => {
            let n = e[t]
            n ? g.current.get(n.value)?.focus({ preventScroll: !0 }) : f.current?.focus({ preventScroll: !0 })
          },
          y = (e) => {
            ;(t(e), f.current?.focus({ preventScroll: !0 }))
          }
        return (0, a.jsx)(b.p, {
          ...v,
          ref: (0, x.P)([f, s]),
          className: (0, i.A)("Container-ii4nGw", l),
          inputClassName: (0, i.A)("Input-TqEwAO", d),
          disabled: c,
          placeholder: 0 === e.length ? u : void 0,
          startAdornment: (0, a.jsxs)(a.Fragment, {
            children: [
              m,
              e.map((e, t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    ref: (t) => {
                      t ? g.current.set(e.value, t) : g.current.delete(e.value)
                    },
                    className: "Tag-zH19Nb",
                    tabIndex: -1,
                    role: "group",
                    "aria-label": e.label,
                    onClick: () => {
                      c || h(t)
                    },
                    onKeyDown: (n) => {
                      if (!c && n.target === n.currentTarget && !n.nativeEvent.isComposing)
                        switch (n.key) {
                          case "ArrowLeft":
                            ;(n.preventDefault(), h(Math.max(0, t - 1)))
                            break
                          case "ArrowRight":
                            ;(n.preventDefault(), h(t + 1))
                            break
                          case "Backspace":
                          case "Delete":
                            ;(n.preventDefault(), y(e))
                        }
                    },
                    children: [
                      (0, a.jsx)("span", { className: "TagValue-uql1s_", children: (0, a.jsx)(n, { ...e }) }),
                      (0, a.jsx)("button", {
                        className: "TagRemove-Jvbgpl",
                        type: "button",
                        tabIndex: -1,
                        disabled: c,
                        "aria-label": r(e),
                        onClick: (t) => {
                          ;(t.stopPropagation(), y(e))
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
    var A = n("slpy"),
      _ = n("DL3o"),
      S = "Option-Tm0uqE",
      I = "PressableInner-EsxCsQ",
      O = "OptionInner-dam4fB"
    let T = (0, o.createContext)(null),
      M = () => {
        let e = (0, o.use)(T)
        if (!e) throw Error("Select components must be wrapped in <Select />")
        return e
      },
      E = ({ label: e }) => (0, a.jsx)(a.Fragment, { children: e }),
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
      R = (e) => {
        let {
            id: t,
            "aria-label": n,
            "aria-labelledby": i,
            "aria-describedby": r,
            required: l,
            value: p,
            name: m,
            multiple: v,
            variant: f = "outline",
            size: g = "md",
            dropdownIconType: h = "dropdown",
            loading: w = !1,
            open: b,
            onOpenChange: y,
            clearable: x = !1,
            disabled: k = !1,
            invalid: C = !1,
            placeholder: j = "Select...",
            loadingPlaceholder: A = "Loading...",
            pill: _ = s.N.pill,
            disablePressable: S,
            listWidth: I,
            options: O,
            pagination: M,
            footer: R,
            actions: P = [],
            side: q = "bottom",
            avoidCollisions: z = !0,
            onChange: W,
            optionClassName: B,
            optionIndicatorPosition: F = "start",
            OptionView: $ = E,
            TriggerStartIcon: Z,
            endAdornment: V,
            triggerClassName: G,
            onTriggerClickCapture: H,
            opticallyAlign: Q,
            TriggerView: Y,
            searchPlaceholder: X = "",
            searchValue: J,
            searchPredicate: ee = ei,
            searchEmptyMessage: et = "No results found.",
            onSearchChange: en,
            searchable: ea,
            listMaxWidth: er = "auto",
            __isWidget: eo = !1,
            forceNativeSelect: es = !1,
          } = e,
          ed = e.block ?? "ghost" !== f,
          ec = e.align ?? (ed ? "center" : "start"),
          eu = e.alignOffset ?? ("center" === ec ? 0 : -5),
          ep = e.listMinWidth ?? (ed ? "auto" : 300)
        if (es && v && u.Cu) throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.")
        let em = v ? (e.selectedOptions ?? el(O, p)) : el(O, [p]),
          ev = v ? e.getTagRemoveLabel : void 0,
          ef = (0, d.Y)((e, t) => {
            v ? (e.value ? (t ? W(em.filter((t) => t.value !== e.value)) : W(em.concat(e))) : W([])) : W(e)
          }),
          eg = c((e) => y?.(e)),
          eh = y ? eg : void 0,
          ew = c((e) => en?.(e)),
          eb = en ? ew : void 0,
          ey = c((e) => H?.(e)),
          ex = H ? ey : void 0,
          ek = (0, o.useRef)(ee)
        ek.current = ee
        let eC = (0, o.useMemo)(() => P, [P.length]),
          ej = (0, o.useRef)(P)
        ej.current = P
        let eA = (0, o.useCallback)((e) => {
            ej.current.find((t) => t.id === e)?.onSelect(e)
          }, []),
          e_ = (0, o.useMemo)(() => (U(O) ? O.reduce((e, t) => e + t.options.length, 0) : O.length), [O]),
          eS = (0, o.useId)(),
          eI = `select-trigger-${eS}`,
          eO = ea ?? e_ > 15,
          eT = (0, o.useMemo)(() => ({ "aria-label": n, "aria-labelledby": i, "aria-describedby": r }), [r, n, i]),
          eM = (0, o.useMemo)(
            () =>
              v ? { multiple: !0, value: p, TriggerView: Y ?? N } : { multiple: !1, value: p, TriggerView: Y ?? L },
            [v, p, Y],
          ),
          eE = (0, o.useMemo)(
            () => ({
              ...eM,
              triggerId: eI,
              id: t,
              name: m,
              required: l,
              options: O,
              pagination: M,
              selectedOptions: em,
              getTagRemoveLabel: ev,
              endAdornment: V,
              placeholder: j,
              loadingPlaceholder: A,
              loading: w,
              open: b,
              onOpenChange: eh,
              clearable: x,
              variant: f,
              pill: _,
              disablePressable: S,
              size: g,
              dropdownIconType: h,
              block: ed,
              align: ec,
              alignOffset: eu,
              side: q,
              avoidCollisions: z,
              listWidth: I,
              listMinWidth: ep,
              listMaxWidth: er,
              searchPlaceholder: X,
              searchEmptyMessage: et,
              onSearchChange: eb,
              TriggerStartIcon: Z,
              triggerClassName: G,
              onTriggerClickCapture: ex,
              opticallyAlign: Q,
              optionClassName: B,
              optionIndicatorPosition: F,
              OptionView: $,
              footer: R,
              actions: eC,
              onActionSelect: eA,
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
              ev,
              V,
              j,
              A,
              w,
              b,
              eh,
              x,
              f,
              _,
              S,
              g,
              h,
              ed,
              ec,
              eu,
              q,
              z,
              I,
              ep,
              er,
              X,
              et,
              eb,
              Z,
              G,
              ex,
              Q,
              B,
              F,
              $,
              R,
              eC,
              eA,
              ef,
              eO,
              k,
              C,
              eo,
              es,
            ],
          )
        return (0, a.jsx)(T.Provider, {
          value: eE,
          children: es ? (0, a.jsx)(D, { ariaProps: eT }) : (0, a.jsx)(K, { ariaProps: eT, searchValue: J }),
        })
      },
      P = (e) => {
        let {
            triggerId: t,
            id: n,
            required: i,
            value: r,
            multiple: s,
            options: l,
            selectedOptions: d,
            loading: c,
            disabled: u,
            invalid: p,
            clearable: m,
            name: v,
            variant: f,
            pill: g,
            disablePressable: h,
            size: w,
            dropdownIconType: b,
            placeholder: x,
            loadingPlaceholder: k,
            block: C,
            opticallyAlign: j,
            triggerClassName: A,
            onTriggerClickCapture: _,
            TriggerStartIcon: S,
            TriggerView: I,
            onSelectRef: O,
            __isWidget: T,
            forceNativeSelect: E,
          } = M(),
          { onOpenChange: L, ariaProps: N, ...R } = e,
          P = N?.["aria-label"],
          D = N?.["aria-labelledby"],
          q = N?.["aria-describedby"],
          z = s ? r[0] : r,
          K = c ? k : x,
          W = (v || n) && !E,
          B = (0, o.useId)(),
          F = (0, o.useId)(),
          $ = (0, o.useMemo)(() => es(l, z) || { value: "", label: K }, [z, l, K]),
          U = s ? r.length > 0 : !!r,
          Z = c || !U,
          V = (0, o.useMemo)(() => em(), []),
          G = (0, o.useMemo)(() => {
            if (!s) return { values: [], selectedAll: !1 }
            let e = l.flatMap((e) => ("options" in e ? e.options : e))
            return {
              values: d.length ? d : [{ value: "", label: K }],
              selectedAll: e.length > 0 && e.length <= r.length,
            }
          }, [s, l, d, r, K]),
          H = (0, o.useMemo)(() => (D ? `${D} ${B}` : P ? `${F} ${B}` : void 0), [F, P, D, B])
        return (0, a.jsxs)(y.Y, {
          id: t,
          "aria-labelledby": H,
          "aria-describedby": q,
          className: A,
          selected: !Z,
          variant: f,
          pill: g,
          disablePressable: h,
          block: C,
          size: w,
          disabled: u,
          invalid: p,
          loading: c,
          StartIcon: S,
          opticallyAlign: j,
          onClickCapture: _,
          dropdownIconType: b,
          onClearClick: m
            ? () => {
                ;(O.current({ value: "", label: "" }), L?.(!1))
              }
            : void 0,
          onInteract: L,
          onKeyDown: (e) => {
            let t = e.key
            if (!s && ev(t)) {
              let n = V(t)
              e.stopPropagation()
              let a = ef(l, n, z)
              a && O.current(a)
            }
          },
          "data-w-component": T ? "select" : void 0,
          ...R,
          children: [
            P &&
              !D &&
              (0, a.jsx)("span", {
                id: F,
                className: "sr-only w-full h-0 left-0 bottom-0 pointer-events-none",
                children: P,
              }),
            (0, a.jsx)("span", { id: B, children: s ? (0, a.jsx)(I, { ...G }) : (0, a.jsx)(I, { ...$ }) }),
            W &&
              (0, a.jsx)("input", {
                id: n,
                name: v,
                value: z,
                tabIndex: -1,
                onFocus: () => {
                  document.getElementById(t)?.focus({ preventScroll: !0 })
                },
                onChange: () => {},
                required: i,
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
          name: r,
          options: o,
          placeholder: s,
          block: l,
          loading: d,
          onSelectRef: c,
          onTriggerClickCapture: u,
        } = M()
        if (n) throw Error("Rendered native select while using `multiple` selection mode.")
        return (0, a.jsx)("div", {
          className: "flex min-w-0",
          children: (0, a.jsxs)("div", {
            className: (0, i.A)("relative max-w-full", l && "w-full"),
            children: [
              (0, a.jsxs)("select", {
                name: r,
                "aria-label": e["aria-label"],
                "aria-labelledby": e["aria-labelledby"],
                "aria-describedby": e["aria-describedby"],
                className: "NativeSelect-Q02mo4",
                value: t,
                onClickCapture: u,
                onKeyDown: (e) => {
                  e.stopPropagation()
                },
                onChange: (e) => {
                  let t = es(o, e.target.value)
                  t && c.current(t)
                },
                disabled: d,
                "data-native-selectcontrol": "",
                children: [
                  !t && (0, a.jsx)("option", { value: "", children: s }),
                  o.map((e) => ($(e) ? (0, a.jsx)(q, { ...e }, e.label) : (0, a.jsx)(z, { ...e }, e.value))),
                ],
              }),
              (0, a.jsx)(P, { ariaProps: e, tabIndex: -1, "aria-hidden": "true" }),
            ],
          }),
        })
      },
      q = ({ label: e, options: t }) =>
        (0, a.jsx)("optgroup", { label: e, children: t.map((e) => (0, a.jsx)(z, { ...e }, e.value)) }),
      z = ({ value: e, label: t, disabled: n }) => (0, a.jsx)("option", { value: e, disabled: n, children: t }),
      K = ({ ariaProps: e, searchValue: t }) => {
        let {
            triggerId: n,
            loading: i,
            open: c,
            onOpenChange: u,
            side: m,
            align: f,
            alignOffset: g,
            avoidCollisions: h,
            listWidth: w,
            listMinWidth: b,
            listMaxWidth: y,
            block: x,
            onTriggerClickCapture: k,
            multiple: C,
            value: j,
            options: A,
            pagination: S,
            searchable: I,
            searchPredicateRef: O,
            onSearchChange: T,
            footer: E,
          } = M(),
          [L, N] = (0, o.useState)(!1),
          R = (0, o.useRef)(null),
          D = (0, o.useRef)(null),
          q = (0, v.jS)(),
          z = (0, d.Y)(() => {
            ;(H(""), T?.(""))
          }),
          K = (0, d.Y)(() => ex(!1)),
          B = (0, o.useRef)(null),
          $ = (0, o.useRef)(null),
          U = (0, o.useRef)(null),
          Z = (0, o.useRef)(null),
          [G, H] = (0, o.useState)(""),
          Q = I ? (t ?? G) : "",
          Y = (0, o.useRef)(Q),
          X = !I || !!E || !T || A.some((e) => !("options" in e) || e.options.length > 0),
          J = X || !!Q.trim(),
          ee = (c ?? L) && J,
          et = (0, o.useMemo)(() => em(), []),
          ea = (0, o.useId)(),
          ei = `select-list-${ea}`,
          el = (0, o.useRef)(C ? "" : j),
          ec = (0, o.useMemo)(() => er(A, Q, O.current), [A, Q, O]),
          eg = eo(ec),
          [eh, ew] = (0, o.useState)(() => {
            let e = C ? j[0] : j
            return es(ec, e)?.value ?? eg?.value ?? ""
          }),
          eb = (e) => {
            if (e.nativeEvent.isComposing) return
            let t = e.key,
              n = C ? j[0] : j,
              a = eh || eg?.value || n,
              i = document.activeElement === U.current,
              r = B.current
            if (!r) return
            let o = () => {
                let e = new PointerEvent("pointerup", { bubbles: !0, cancelable: !0, pointerType: "mouse" }),
                  t = ed(eh, r)
                t?.dispatchEvent(e)
              },
              s = (e, t) => {
                ;(ew(e), t.scrollIntoView({ block: "nearest" }))
              },
              l = () => {
                let e = C ? j[0] : j
                if (e) {
                  let t = ed(e, r)
                  if (t) return void s(e, t)
                }
                if (eg) {
                  let e = ed(eg.value, r)
                  e && s(eg.value, e)
                }
              }
            switch (t) {
              case "ArrowDown": {
                if ((e.preventDefault(), !eh || !ed(eh, r))) return void l()
                let t = eu(eh, r),
                  n = t?.getAttribute("data-option-id")
                t && n && s(n, t)
                return
              }
              case "ArrowUp": {
                if ((e.preventDefault(), !eh || !ed(eh, r))) return void l()
                let t = ep(a, r),
                  n = t?.getAttribute("data-option-id")
                t && n && s(n, t)
                return
              }
              case "Enter":
                ;(e.preventDefault(), o())
                return
              case " ":
                if (i) return
                ;(e.preventDefault(), o())
                return
            }
            if (ev(t)) {
              if (i) return
              let n = et(t)
              e.stopPropagation()
              let a = ef(A, n, eh)
              if (a) {
                let e = ed(a.value, r)
                e && (ew(a.value), e.scrollIntoView({ block: "nearest" }))
              }
            }
          },
          ey = (0, o.useMemo)(
            () => ({
              valueRef: el,
              listId: ei,
              highlightedValue: eh,
              setHighlightedValue: ew,
              requestCloseRef: K,
              resetSearchRef: z,
              searchTerm: Q,
              listRef: $,
            }),
            [ei, eh, Q, K, z],
          )
        ;((0, o.useLayoutEffect)(() => {
          if (!ee) return
          ;((el.current = C ? "" : j),
            ew(es(ec, C ? j[0] : j)?.value ?? eg?.value ?? ""),
            (0, p.yQ)(() => {
              let e = B.current,
                t = $.current
              if (!e || !t) return
              let n = ed(eh, t)
              if (n) {
                let e = t.clientHeight,
                  a = n.offsetTop,
                  i = n.offsetHeight,
                  r = t.scrollHeight - e
                t.scrollTop = Math.max(0, Math.min(a - e / 2 + i / 2, r))
              }
            }))
          let e = U.current || $.current || B.current
          e?.focus({ preventScroll: !0 })
        }, [ee]),
          (0, o.useLayoutEffect)(() => {
            let e = null != S && Y.current === Q
            if (((Y.current = Q), !ee || !$.current)) return
            let t = es(ec, eh)
            ;(e && t && !t.disabled) || (e || ($.current.scrollTop = 0), ew(eo(ec)?.value ?? ""))
          }, [ec, Q, null != S]))
        let ex = (e) => {
          let t = (void 0 === e ? !ee : e) && J
          t !== ee &&
            (!t && (H(""), Q && T?.("")),
            void 0 === c && N(t),
            u?.(t),
            t ||
              setTimeout(() => {
                if (!R.current) return
                let e = document.activeElement
                ;(!e || R.current.contains(e)) && document.getElementById(n)?.focus({ preventScroll: !0 })
              }))
        }
        return (
          (0, l.r)(ee, () => {
            ex(!1)
          }),
          (0, a.jsx)(W, {
            value: ey,
            children: (0, a.jsxs)(r.bL, {
              open: ee,
              onOpenChange: (e) => {
                ;(i && e) || ex(e)
              },
              modal: !1,
              children: [
                I
                  ? (0, a.jsx)(r.Mz, {
                      asChild: !0,
                      children: (0, a.jsx)("div", {
                        ref: D,
                        className: "SearchControl-Vayh_U",
                        "data-block": x ? "" : void 0,
                        onClickCapture: k,
                        children: (0, a.jsx)(F, {
                          ariaProps: e,
                          searchInputRef: U,
                          open: ee,
                          searchTerm: Q,
                          onFocus: () => ex(!0),
                          onKeyDown: (e) => {
                            if (ee && E && "Tab" === e.key && !e.shiftKey) {
                              let t = R.current?.querySelector("[data-select-footer]")
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
                                  ;((Z.current = n), e.preventDefault())
                                  return
                                }
                            }
                            ee || ("ArrowDown" !== e.key && "ArrowUp" !== e.key)
                              ? ee && eb(e)
                              : (e.preventDefault(), ex(!0))
                          },
                          onChange: (e) => {
                            let t = X || !!e.trim()
                            ee && !t ? ex(!1) : (H(e), T?.(e), void 0 === c && N(t), !ee && t && u?.(!0))
                          },
                        }),
                      }),
                    })
                  : (0, a.jsx)(r.l9, { asChild: !0, children: (0, a.jsx)(P, { ariaProps: e, onOpenChange: ex }) }),
                (0, a.jsx)(r.ZL, {
                  forceMount: !0,
                  container: q,
                  children: (0, a.jsx)(_.F, {
                    className: "Menu-rg4fYu",
                    enterDuration: 350,
                    exitDuration: 200,
                    children:
                      ee &&
                      (0, a.jsx)(
                        r.UC,
                        {
                          onKeyDownCapture: (e) => {
                            "Tab" === e.key &&
                              e.shiftKey &&
                              e.target === Z.current &&
                              (U.current?.focus(), e.preventDefault(), e.stopPropagation())
                          },
                          ref: R,
                          forceMount: !0,
                          className: "MenuList-k4HoiO",
                          side: m,
                          sideOffset: 5,
                          align: f,
                          alignOffset: g,
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
                            "select-list-min-width": b,
                            "select-list-max-width": y,
                          }),
                          children: (0, a.jsxs)("div", {
                            className: "MenuInner-nggNzl",
                            onKeyDown: eb,
                            ref: B,
                            tabIndex: I ? -1 : 0,
                            children: [(0, a.jsx)(V, { filteredOptions: ec }), (0, a.jsx)(en, {})],
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
      W = (0, o.createContext)(null),
      B = () => {
        let e = (0, o.use)(W)
        if (!e) throw Error("Select menu components must be wrapped in <CustomSelect />")
        return e
      },
      F = ({ ariaProps: e, searchInputRef: t, open: n, searchTerm: r, onChange: s, onFocus: l, onKeyDown: d }) => {
        let {
            triggerId: c,
            id: u,
            name: p,
            required: v,
            value: f,
            multiple: g,
            selectedOptions: y,
            getTagRemoveLabel: x,
            size: k,
            pill: C,
            variant: A,
            disabled: _,
            invalid: S,
            loading: I,
            loadingPlaceholder: O,
            placeholder: T,
            searchPlaceholder: E,
            triggerClassName: L,
            opticallyAlign: N,
            TriggerStartIcon: R,
            TriggerView: P,
            clearable: D,
            onSelectRef: q,
            endAdornment: z,
          } = M(),
          { listId: K, highlightedValue: W } = B(),
          F = y[0],
          $ = !g && !r && null != F,
          U = (0, o.useId)(),
          V = {
            ...e,
            id: c,
            ref: t,
            className: (0, i.A)(L, "ghost" === A && "SearchGhost-E3QlXU"),
            size: k,
            pill: C,
            variant: "ghost" === A ? "outline" : A,
            disabled: _ || I,
            invalid: S,
            opticallyAlign: N,
            value: r,
            placeholder: I ? O : E || T,
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
            "aria-controls": n ? K : void 0,
            "aria-expanded": n,
            "aria-activedescendant": n && W ? Z(W) : void 0,
            endAdornment: z,
          }
        return (0, a.jsxs)(a.Fragment, {
          children: [
            g
              ? (0, a.jsx)(j, {
                  ...V,
                  tags: y,
                  getRemoveLabel: x,
                  onRemoveTag: (e) => q.current(e, !0),
                  startAdornment: R ? (0, a.jsx)(R, {}) : void 0,
                })
              : (0, a.jsx)(b.p, {
                  ...V,
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
                  placeholder: $ ? "" : V.placeholder,
                  "aria-describedby": [e["aria-describedby"], $ ? U : void 0].filter(Boolean).join(" ") || void 0,
                  startAdornment: $
                    ? (0, a.jsx)("span", {
                        id: U,
                        className: "SearchSelection-BN1yuT",
                        children: (0, a.jsx)(P, { ...F }),
                      })
                    : R
                      ? (0, a.jsx)(R, {})
                      : (0, a.jsx)(h, { width: 16, height: 16, className: "fill-secondary" }),
                  endAdornment:
                    D && y.length > 0
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
                      : z,
                }),
            (p || u) &&
              (0, a.jsx)("input", {
                id: u,
                name: p,
                value: g ? (f[0] ?? "") : f,
                required: v,
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
      V = ({ filteredOptions: e }) => {
        let { searchEmptyMessage: t, multiple: n, searchable: i, pagination: r } = M(),
          { listId: o, highlightedValue: s, listRef: l } = B(),
          d = s ? Z(s) : void 0,
          c = e.reduce((e, t) => e + ("options" in t ? t.options.length : 1), 0)
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
              r && (0, a.jsx)(G, { pagination: r }),
            ],
          })
        let u = U(e),
          p = null == r && !u && e.length > 300,
          m = u
            ? e.map((e) => (0, a.jsx)(Q, { ...e }, e.label))
            : e.slice(0, null == r ? 300 : void 0).map((e) => (0, a.jsx)(et, { ...e }, e.value))
        return (0, a.jsxs)("div", {
          id: o,
          className: "OptionsList-tSiCXf",
          ref: l,
          role: "listbox",
          tabIndex: i ? -1 : 0,
          "aria-activedescendant": d,
          "aria-multiselectable": n || void 0,
          children: [m, p && (0, a.jsx)(Y, { numHidden: e.length - 300 }), r && (0, a.jsx)(G, { pagination: r }, c)],
        })
      },
      G = ({ pagination: e }) => {
        let t = c(e.onLoadMore),
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
      H = { limit: 100, label: "Show all" },
      Q = ({ label: e, options: t, optionsLimit: n = H }) => {
        let i = (0, o.useId)(),
          { optionIndicatorPosition: r, pagination: s } = M(),
          { searchTerm: l, setHighlightedValue: d } = B(),
          [c, u] = (0, o.useState)(!1),
          p = null == s && n.limit < t.length && !l && !c,
          m = null == s && 300 < t.length && !p,
          v = t
        return (
          p ? (v = t.slice(0, n.limit)) : m && (v = t.slice(0, 300)),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "OptionGroupHeading-c0U5nA",
                children: [
                  "start" === r && (0, a.jsx)(J, { position: r }),
                  e,
                  "end" === r && (0, a.jsx)(J, { position: r }),
                ],
              }),
              v.map((e) => (0, a.jsx)(et, { ...e }, e.value)),
              p &&
                (0, a.jsx)(X, {
                  value: `group-limit-${i}`,
                  label: n.label,
                  onPointerUp: () => {
                    ;(u(!0), d(t[n.limit]?.value ?? ""))
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
            `…and ${e.toLocaleString()} more options. Use search to refine results further.`,
            "end" === t && (0, a.jsx)(J, { position: t }),
          ],
        })
      },
      X = ({ value: e, label: t, onPointerUp: n }) => {
        let { optionIndicatorPosition: r } = M(),
          { highlightedValue: o, setHighlightedValue: s } = B(),
          l = e === o
        return (0, a.jsx)("div", {
          className: (0, i.A)(S, "OptionsLimit-SDgq93"),
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
            className: (0, i.A)(I, O),
            children: [
              "start" === r && (0, a.jsx)(J, { position: r }),
              t,
              "end" === r && (0, a.jsx)(J, { position: r }),
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
            value: r,
            multiple: o,
            searchable: s,
            onSelectRef: l,
            optionIndicatorPosition: d,
          } = M(),
          { valueRef: c, requestCloseRef: u, resetSearchRef: p, highlightedValue: m, setHighlightedValue: v } = B(),
          { value: f, disabled: h, tooltip: w } = e,
          b = "" === r ? "" : c.current,
          y = o ? r.includes(f) : f === b,
          x = f === m
        return (0, a.jsx)("div", {
          className: (0, i.A)(S, t),
          id: Z(f),
          "data-highlight": x ? "" : void 0,
          role: "option",
          "aria-selected": y,
          "data-selected": y ? "" : void 0,
          "data-option-id": f,
          onPointerUp: h
            ? void 0
            : () => {
                o ? (l.current(e, y), s && p.current()) : (l.current(e), u.current?.())
              },
          onPointerMove: h
            ? void 0
            : () => {
                x || v(f)
              },
          onPointerLeave: h
            ? void 0
            : () => {
                v((e) => (e !== f ? e : ""))
              },
          "aria-disabled": h,
          "data-disabled": h ? "" : void 0,
          children: (0, a.jsxs)("div", {
            className: I,
            children: [
              (0, a.jsxs)("div", {
                className: O,
                children: [
                  "start" === d && (0, a.jsx)(ee, { isSelected: y, position: d }),
                  (0, a.jsx)(n, { ...e }),
                  w &&
                    (0, a.jsx)(A.m, {
                      content: w.content,
                      maxWidth: w.maxWidth,
                      side: "right",
                      children: (0, a.jsx)(g, {}),
                    }),
                  "end" === d && (0, a.jsx)(ee, { isSelected: y, position: d }),
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
      ea = ({ id: e, label: t, Icon: n, className: r }) => {
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
            className: (0, i.A)("ActionInner-bAgfXn", r),
            children: [n && (0, a.jsx)(n, { role: "presentation" }), t],
          }),
        })
      },
      ei = (e, t) => e.label.toLowerCase().includes(t),
      er = (e, t, n) => {
        let a = t.trim().toLocaleLowerCase()
        if (!a) return e
        let i = (e) => n(e, a)
        return U(e)
          ? e.reduce((e, t) => {
              let n = t.options.filter(i)
              return (n.length && e.push({ ...t, options: n }), e)
            }, [])
          : e.reduce((e, t) => (i(t) && e.push(t), e), [])
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
      ec = (e) => e.matches("[data-option-id]:not([data-disabled])"),
      eu = (e, t) => {
        let n = ed(e, t),
          a = n?.nextElementSibling,
          i = 0
        for (; a && i < 40;) {
          if (ec(a)) return a
          ;((a = a.nextElementSibling), (i += 1))
        }
      },
      ep = (e, t) => {
        let n = ed(e, t),
          a = n?.previousElementSibling,
          i = 0
        for (; a && i < 40;) {
          if (ec(a)) return a
          ;((a = a.previousElementSibling), (i += 1))
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
      ev = (e) => /^[a-zA-Z0-9]$/.test(e),
      ef = (e, t, n) => {
        let a, i
        if (!e.length) return
        let r = !n,
          o = ({ disabled: e, label: a, value: i }) => (i === n ? ((r = !0), !1) : !e && a.toLowerCase().startsWith(t))
        for (let t of e)
          if ($(t)) {
            for (let e of t.options)
              if (o(e))
                if (r) {
                  i = e
                  break
                } else a = a || e
          } else if (o(t))
            if (r) {
              i = t
              break
            } else a = a || t
        return i || a
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
          let i = a(t)
          if (i?.workspace_id !== e || "boolean" != typeof i.allow_external_domain_invites) return
          if (i.allow_external_domain_invites) return { allowExternal: !0 }
          let r = a(n)
          return {
            allowExternal: !1,
            verifiedDomains: (r?.workspace_verified_domains ?? r?.domains)
              ?.filter((e) => "verified" === e.status)
              .map((e) => e.hostname),
          }
        },
      },
    )
  },
  J3fE(e, t, n) {
    var a = n("QosV"),
      i = n("zd8w"),
      r = n("hZax"),
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
        ((0, o.Hw)(a) || "free_workspace" === a) && (0, r.XM)(e, "1911551839", n).get("show_invite_link_sharing", !1)
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
            isStatsigLoading: i,
            statsigClient: o,
            statsigWorkspaceId: d,
          },
        ) {
          var c, u, p
          let m
          return (
            a &&
            "chatgpt" === t.authMethod &&
            e?.id === t.accountId &&
            e.structure?.toLowerCase() === "workspace" &&
            !i &&
            d === t.accountId &&
            (s(e) || (null == n && l(o, e, { disableExposureLog: !1 }))) &&
            ((c = o),
            (u = e),
            (p = n ?? "dropdown_row_enabled"),
            (m = (0, r.XM)(c, "1900043180")).get(p, !1) &&
              m.get("account-owner" === u.account_user_role ? "owner_enabled" : "member_enabled", !0))
          )
        },
        nU: function (e, t) {
          let n,
            o,
            s = (0, a.c)(7),
            { getLayer: l } = (0, r.cn)()
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
            (0, i.useEffect)(n, o))
        },
        ok: l,
        p9: function (e, t) {
          let n,
            i,
            s,
            l = (0, a.c)(10),
            { client: c, getLayer: u, isLoading: p } = (0, r.cn)()
          l[0] !== c || l[1] !== u || l[2] !== p || l[3] !== t || l[4] !== e
            ? ((n =
                !p && (0, o.Hw)(t) && c.getContext().user.customIDs?.workspace_id === e
                  ? u(d, { disableExposureLog: !0 })
                  : void 0),
              (i = n?.get("enabled", !1)),
              (l[0] = c),
              (l[1] = u),
              (l[2] = p),
              (l[3] = t),
              (l[4] = e),
              (l[5] = n),
              (l[6] = i))
            : ((n = l[5]), (i = l[6]))
          let m = !0 === i,
            v = n?.__evaluation,
            f =
              m || (!!v?.allocated_experiment_name && v?.is_user_in_experiment !== !1 && v?.is_experiment_active !== !1)
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
  BzGI(e, t, n) {
    var a = n("E2yB")
    function i(e, t) {
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
    function r(e, t) {
      let n = e.subscription?.seat_capacity,
        a = new Set(
          e.members.flatMap((e) =>
            null == e.deactivated_time && null != e.email ? [e.email.trim().toLowerCase()] : [],
          ),
        ),
        i = e.invitations.filter(
          (e) =>
            [2, 5, 6].includes(e.status) && null != e.email_address && !a.has(e.email_address.trim().toLowerCase()),
        ),
        r = { default: null, prolite: null }
      if (null == n || 0 === n.length || i.some((e) => null == e.seat_type)) return r
      for (let e of ["default", "prolite"]) {
        let o = n.find((t) => t.type === e)
        if (null == o) {
          r[e] = 0
          continue
        }
        if (null == o.available) continue
        let s = new Set(
          i
            .filter((t) => t.seat_type === e)
            .flatMap((e) => (null == e.email_address ? [] : [e.email_address.trim().toLowerCase()])),
        )
        for (let n of t)
          n.seatType !== e ||
            ("invited" !== n.status && ("failed" !== n.status || null == n.pendingInviteId)) ||
            a.has(n.email) ||
            i.some((e) => e.email_address?.trim().toLowerCase() === n.email) ||
            s.add(n.email)
        r[e] = Math.max(0, o.available - s.size)
      }
      return r
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
          let [i, r = "", o] = n.split("@")
          if (null != o || !t.startsWith(r.toLowerCase())) return
          let s = `${i}@${t}`
          return a.WL.test(s) ? s : void 0
        },
        H: function (e, t) {
          let n = e.map((e) => ({ email: "", status: "ready", seatType: null, ...e }))
          if (null == t) return n
          let a = i(
              n.map((e) => ({ ...e, email: e.email.trim().toLowerCase(), seatType: e.seatType ?? "default" })),
              t,
            ),
            o = r(t, a),
            l = { prolite: o.prolite ?? 0, default: o.default ?? 0 },
            d = []
          for (let [e, i] of a.entries()) {
            let a = n[e]
            null != a && i.email && s(i, t) && (null == a.seatType ? d.push(a) : l[a.seatType]--)
          }
          function c() {
            return l.prolite > 0 ? "prolite" : l.default > 0 ? "default" : null
          }
          for (let e of d) {
            let t = c()
            null != t && ((e.seatType = t), l[t]--)
          }
          let u = c()
          for (let e of n) !e.email.trim() && null != e.seatType && l[e.seatType]--
          return n.map((e, t) => {
            let n = a[t]?.status
            if ("member" === n || "pending" === n) return { ...e, seatType: u }
            if (!e.email.trim() && null == e.seatType) {
              let t = c()
              return (null != t && l[t]--, { ...e, seatType: t })
            }
            return e
          })
        },
        L8: r,
        QZ: function (e, t) {
          let n = i(t, e),
            a = r(e, n)
          for (let e of n) "uncertain" === e.status && (a[e.seatType] = null)
          return a
        },
        Tn: o,
        Wx: function (e) {
          let t = [],
            n = new Map(),
            i = e.map(() => void 0)
          return (
            e.forEach((e, r) => {
              let o = e?.email.trim().toLowerCase()
              if (null == e || !o) return
              if (!a.WL.test(o)) {
                i[r] = "invalid"
                return
              }
              let s = n.get(o)
              if (null != s) {
                ;((i[s] = "duplicate"), (i[r] = "duplicate"))
                return
              }
              ;(n.set(o, r), t.push({ ...e, email: o }))
            }),
            { rows: t, rowErrors: i }
          )
        },
        Zp: function (e) {
          if (null == e) return 4
          let t = r(e, []),
            n = (t.default ?? 0) + (t.prolite ?? 0)
          return Math.min(null == t.default || null == t.prolite ? Math.max(n, 4) : n, 50)
        },
        _t: function (e, t, n) {
          let a = [...new Set(e.map((e) => e.toLowerCase()))],
            i = t?.split("@")[1]?.toLowerCase()
          return 1 === a.length
            ? a[0]
            : (a.find((e) => e === i) ??
                (0 === a.length && null != n && "social" !== n && "missing" !== n && "personal" !== n ? i : void 0))
        },
        bo: function (e) {
          let t,
            n = new Set(e.map((e) => e.email.trim().toLowerCase())),
            i = new Map(),
            r = 1
          for (let e of n) {
            if (!a.WL.test(e)) continue
            let n = e.slice(e.lastIndexOf("@") + 1),
              o = (i.get(n) ?? 0) + 1
            ;(i.set(n, o), o > r ? ((r = o), (t = n)) : o === r && (t = void 0))
          }
          return t
        },
        q$: s,
        zf: i,
      },
    )
  },
  prlK(e, t, n) {
    n.d(t, { OwnerInvitationsPage: () => ef })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("E2yB"),
      o = n("M6da"),
      s = n("irkb"),
      l = n("T0Rc"),
      d = n("zTeN"),
      c = n("zd8w"),
      u = n("EOo5"),
      p = n("tvcH"),
      m = n("Ghh3"),
      v = n("aTcy"),
      f = n("Ot7V"),
      g = n("uwX5"),
      h = n("J3fE"),
      w = n("lc7X"),
      b = n("yGJW"),
      y = n("OWtl"),
      x = n("gWdV"),
      k = n("zdnx"),
      C = n("KpEg"),
      j = n("BzGI"),
      A = n("oyxz"),
      _ = n("Sm6l"),
      S = n("JNtf"),
      I = n("mUDD")
    function O(e) {
      let t,
        n,
        r,
        o,
        s,
        l,
        d,
        c,
        u,
        p,
        m,
        v,
        f,
        g = (0, i.c)(31),
        h = !e.pending
      return (
        g[0] !== e
          ? ((t = (t) => {
              t || e.pending || e.onClose()
            }),
            (g[0] = e),
            (g[1] = t))
          : (t = g[1]),
        g[2] !== e
          ? ((n = (t) => {
              ;(t.preventDefault(), e.pending || e.onConfirm())
            }),
            (g[2] = e),
            (g[3] = n))
          : (n = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(I.OO, {
              children: (0, a.jsx)(I.c7, {
                variant: "chatgptConfirmation",
                title: (0, a.jsx)(S.L3, {
                  children: (0, a.jsx)(A.A, {
                    id: "workspaceOwnerOnboarding.invitations.autoApprove.confirmTitle",
                    defaultMessage: "Are you sure?",
                    description:
                      "Heading for confirmation before enabling automatic workspace join approval, which may purchase additional seats",
                  }),
                }),
              }),
            })),
            (g[4] = r))
          : (r = g[4]),
        g[5] !== e.domain
          ? ((o = (0, a.jsx)(S.rr, {
              className: "text-sm leading-5 text-secondary",
              children: (0, a.jsx)(A.A, {
                id: "workspaceOwnerOnboarding.invitations.autoApprove.confirmDescription",
                defaultMessage:
                  "Turning on auto-approve will automatically add all users from {domain} who request to join the workspace. You will be billed for any additional seats.",
                description:
                  "Billing disclosure before enabling automatic join approval during owner onboarding. Domain is an eligible organization email domain such as example.com. Users must still request to join; future additional seats are billed. Enabling this setting alone does not buy seats.",
                values: { domain: e.domain },
              }),
            })),
            (g[5] = e.domain),
            (g[6] = o))
          : (o = g[6]),
        g[7] !== e.error
          ? ((s = e.error
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, a.jsx)(A.A, {
                    id: "workspaceOwnerOnboarding.invitations.autoApprove.confirmError",
                    defaultMessage: "Couldn't enable automatic approval. Please try again.",
                    description:
                      "Error in the automatic workspace join approval confirmation dialog when saving fails; the owner may retry Confirm or cancel without enabling it",
                  }),
                })
              : null),
            (g[7] = e.error),
            (g[8] = s))
          : (s = g[8]),
        g[9] !== o || g[10] !== s
          ? ((l = (0, a.jsxs)(I.OO, { children: [o, s] })), (g[9] = o), (g[10] = s), (g[11] = l))
          : (l = g[11]),
        g[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(A.A, {
              id: "workspaceOwnerOnboarding.invitations.autoApprove.cancel",
              defaultMessage: "Cancel",
              description: "Dismisses automatic join approval confirmation without changing the workspace setting",
            })),
            (g[12] = d))
          : (d = g[12]),
        g[13] !== e.onClose || g[14] !== e.pending
          ? ((c = (0, a.jsx)(_.$, {
              className: "flex-1 justify-center",
              color: "outlineGhost",
              size: "dialogAction",
              radius: "full",
              type: "button",
              disabled: e.pending,
              onClick: e.onClose,
              children: d,
            })),
            (g[13] = e.onClose),
            (g[14] = e.pending),
            (g[15] = c))
          : (c = g[15]),
        g[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(A.A, {
              id: "workspaceOwnerOnboarding.invitations.autoApprove.confirm",
              defaultMessage: "Confirm",
              description:
                "Saves automatic join approval after the workspace owner acknowledges possible additional seat charges",
            })),
            (g[16] = u))
          : (u = g[16]),
        g[17] !== e.pending
          ? ((p = (0, a.jsx)(_.$, {
              className: "flex-1 justify-center",
              color: "primary",
              size: "dialogAction",
              radius: "full",
              type: "submit",
              loading: e.pending,
              children: u,
            })),
            (g[17] = e.pending),
            (g[18] = p))
          : (p = g[18]),
        g[19] !== p || g[20] !== c
          ? ((m = (0, a.jsx)(I.OO, {
              children: (0, a.jsxs)(I.Es, { variant: "chatgptConfirmation", children: [c, p] }),
            })),
            (g[19] = p),
            (g[20] = c),
            (g[21] = m))
          : (m = g[21]),
        g[22] !== m || g[23] !== n || g[24] !== l
          ? ((v = (0, a.jsxs)(I.R4, { as: "form", variant: "chatgptConfirmation", onSubmit: n, children: [r, l, m] })),
            (g[22] = m),
            (g[23] = n),
            (g[24] = l),
            (g[25] = v))
          : (v = g[25]),
        g[26] !== e.pending || g[27] !== h || g[28] !== t || g[29] !== v
          ? ((f = (0, a.jsx)(S.lG, {
              open: !0,
              size: "medium",
              variant: "chatgptConfirmation",
              showDialogClose: h,
              shouldIgnoreClickOutside: e.pending,
              onOpenChange: t,
              children: v,
            })),
            (g[26] = e.pending),
            (g[27] = h),
            (g[28] = t),
            (g[29] = v),
            (g[30] = f))
          : (f = g[30]),
        f
      )
    }
    var T = n("otI6"),
      M = n("ASxG"),
      E = n("LA5s"),
      L = n("AEu9"),
      N = n("Wf1j"),
      R = n("Qgfj"),
      P = n("djbx"),
      D = n("bVeK"),
      q = n("zLIa"),
      z = n("Pk3g")
    function K(e) {
      let t,
        n = (0, i.c)(56),
        o = (0, N.A)(),
        s = (0, c.useId)(),
        l = (0, c.useRef)(null),
        d = e.pending || !0 === e.disabled,
        u = d || !0 === e.retryingCompletion
      if (n[0] !== d || n[1] !== u || n[2] !== s || n[3] !== o || n[4] !== e) {
        let i,
          c,
          p,
          m,
          v,
          f,
          g,
          h,
          w,
          b,
          y,
          x,
          k,
          C,
          S,
          I,
          O,
          T,
          M,
          N,
          R,
          K,
          Z = e.rows.map($),
          V = null == e.inventory ? Z : (0, j.zf)(Z, e.inventory),
          G = (0, j.Wx)(V).rows,
          H = null == e.inventory ? null : (0, j.L8)(e.inventory, G),
          Q = (0, j.bo)(G),
          Y =
            !e.completionTreatment || (null == e.completionDomain && null != Q && (0, r.Ub)(Q, e.completionPolicy))
              ? Q
              : void 0,
          X = V.some(F)
        n[6] === Symbol.for("react.memo_cache_sentinel") ? ((i = ["default", "prolite"]), (n[6] = i)) : (i = n[6])
        let J = i,
          ee = { default: 0, prolite: 0 }
        for (let t of G) (0, j.q$)(t, e.inventory) && (ee[t.seatType] = ee[t.seatType] + 1)
        let et = J.some((e) => {
          let t = H?.[e]
          return null != t && ee[e] > t
        })
        n[7] !== o
          ? ((c = J.map((e) => ({ value: e, label: o.formatMessage(U[e]) }))), (n[7] = o), (n[8] = c))
          : (c = n[8])
        let en = c
        ;(n[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(A.A, {
              id: "workspaceOwnerOnboarding.invitations.title",
              defaultMessage: "Invite your team",
              description: "Heading for inviting teammates to the owner's new workspace",
            })),
            (m = (0, a.jsx)(A.A, {
              id: "workspaceOwnerOnboarding.invitations.description",
              defaultMessage: "Add teammates to your workspace",
              description: "Subtitle for email invitations during workspace owner onboarding",
            })),
            (n[9] = p),
            (n[10] = m))
          : ((p = n[9]), (m = n[10])),
          n[11] !== e
            ? ((v = (t) => {
                ;(t.preventDefault(), e.onSubmit())
              }),
              (n[11] = e),
              (n[12] = v))
            : (v = n[12]),
          n[13] !== e.error
            ? ((f =
                null == e.error
                  ? null
                  : (0, a.jsx)(A.A, { ...U["uncertain" === e.error ? "uncertainError" : e.error] })),
              (n[13] = e.error),
              (n[14] = f))
            : (f = n[14]),
          n[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = () => l.current?.click()), (h = (0, a.jsx)(A.A, { ...U.uploadCsv })), (n[15] = g), (n[16] = h))
            : ((g = n[15]), (h = n[16])),
          n[17] !== u
            ? ((w = (0, a.jsx)(_.$, {
                type: "button",
                color: "outlineSurface",
                size: "setupAction",
                radius: "full",
                disabled: u,
                onClick: g,
                children: h,
              })),
              (n[17] = u),
              (n[18] = w))
            : (w = n[18]),
          n[19] !== e.canContinue || n[20] !== e.continueLabel
            ? ((b = e.canContinue
                ? e.continueLabel
                : (0, a.jsx)(A.A, {
                    id: "workspaceOwnerOnboarding.invitations.sendInvites",
                    defaultMessage: "Send invites",
                    description: "Sends the entered email invitations after the owner reviews them",
                  })),
              (n[19] = e.canContinue),
              (n[20] = e.continueLabel),
              (n[21] = b))
            : (b = n[21]),
          n[22] !== o ? ((y = o.formatMessage(U.uploadCsv)), (n[22] = o), (n[23] = y)) : (y = n[23]),
          n[24] !== e
            ? ((x = (t) => {
                let n = t.currentTarget.files?.[0]
                ;((t.currentTarget.value = ""), null != n && e.onCsv(n))
              }),
              (n[24] = e),
              (n[25] = x))
            : (x = n[25]),
          n[26] !== y || n[27] !== x
            ? ((k = (0, a.jsx)("input", {
                ref: l,
                "aria-label": y,
                type: "file",
                accept: ".csv,text/csv",
                hidden: !0,
                onChange: x,
              })),
              (n[26] = y),
              (n[27] = x),
              (n[28] = k))
            : (k = n[28]),
          n[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, a.jsx)(D.D_h, {})),
              (S = (0, a.jsx)(A.A, {
                id: "workspaceOwnerOnboarding.invitations.addMore",
                defaultMessage: "Add more",
                description: "Adds another teammate email and seat row in workspace owner onboarding",
              })),
              (n[29] = C),
              (n[30] = S))
            : ((C = n[29]), (S = n[30])),
          n[31] !== u || n[32] !== e.onAddRow
            ? ((I = (0, a.jsxs)(_.$, {
                color: "outlineSurface",
                size: "actionSm",
                radius: "full",
                disabled: u,
                onClick: e.onAddRow,
                children: [C, S],
              })),
              (n[31] = u),
              (n[32] = e.onAddRow),
              (n[33] = I))
            : (I = n[33]),
          n[34] !== e.csvFeedback
            ? ((O =
                null != e.csvFeedback &&
                ("error" in e.csvFeedback
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, a.jsx)(A.A, { ...U[e.csvFeedback.error], values: { limit: 50 } }),
                    })
                  : (0, a.jsxs)("div", {
                      role: "status",
                      className: "flex flex-col text-sm text-secondary",
                      children: [
                        (0, a.jsx)(A.A, {
                          id: "workspaceOwnerOnboarding.invitations.csvResult",
                          defaultMessage: "{count, plural, one {# email added} other {# emails added}}",
                          description: "Number of new editable rows imported from a CSV",
                          values: { count: e.csvFeedback.count },
                        }),
                        e.csvFeedback.duplicateCount > 0 &&
                          (0, a.jsx)(A.A, {
                            id: "workspaceOwnerOnboarding.invitations.csvDuplicates",
                            defaultMessage: "{count, plural, one {# duplicate skipped} other {# duplicates skipped}}",
                            description: "Number of repeated email addresses skipped during CSV import",
                            values: { count: e.csvFeedback.duplicateCount },
                          }),
                        e.csvFeedback.invalidLines.length > 0 &&
                          (0, a.jsx)(A.A, {
                            id: "workspaceOwnerOnboarding.invitations.csvInvalidLines",
                            defaultMessage: "Check CSV lines {lines} for invalid entries",
                            description: "Lists original CSV line numbers that did not contain one valid email",
                            values: { lines: e.csvFeedback.invalidLines.join(", ") },
                          }),
                      ],
                    }))),
              (n[34] = e.csvFeedback),
              (n[35] = O))
            : (O = n[35]),
          n[36] !== u ||
          n[37] !== s ||
          n[38] !== e.autoApprove ||
          n[39] !== e.autoApproveError ||
          n[40] !== e.onAutoApproveChange ||
          n[41] !== e.suggestedDomain
            ? ((T =
                e.autoApprove?.canEnable || e.autoApprove?.enabled
                  ? (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "relative flex items-start gap-3 select-none",
                          children: [
                            (0, a.jsx)(P.S, {
                              id: `${s}-auto-approve`,
                              checked: e.autoApprove.enabled,
                              disabled: u,
                              onCheckedChange: e.onAutoApproveChange,
                            }),
                            (0, a.jsx)("label", {
                              htmlFor: `${s}-auto-approve`,
                              className: "text-sm text-secondary",
                              children:
                                null != e.suggestedDomain
                                  ? (0, a.jsx)(A.A, {
                                      id: "workspaceOwnerOnboarding.invitations.autoApprove.domain",
                                      defaultMessage: "Auto-approve join requests from members on {domain}",
                                      description:
                                        "Checkbox in owner onboarding to automatically approve people requesting to join the workspace. Domain is an eligible organizational email domain, such as example.com. Enabling opens a billing confirmation.",
                                      values: { domain: e.suggestedDomain },
                                    })
                                  : (0, a.jsx)(A.A, {
                                      id: "workspaceOwnerOnboarding.invitations.autoApprove.generic",
                                      defaultMessage: "Auto-approve join requests from eligible email domains",
                                      description:
                                        "Checkbox for an already-enabled automatic workspace join approval setting when no single eligible email domain can be displayed. The owner may turn the setting off.",
                                    }),
                            }),
                          ],
                        }),
                        e.autoApproveError
                          ? (0, a.jsx)("p", {
                              role: "alert",
                              className: "text-sm text-danger",
                              children: (0, a.jsx)(A.A, {
                                id: "workspaceOwnerOnboarding.invitations.autoApprove.saveError",
                                defaultMessage: "Couldn't update automatic approval. Please try again.",
                                description:
                                  "Error when saving the owner's automatic join approval preference fails. The checkbox retains the last saved state and can be retried.",
                              }),
                            })
                          : null,
                      ],
                    })
                  : null),
              (n[36] = u),
              (n[37] = s),
              (n[38] = e.autoApprove),
              (n[39] = e.autoApproveError),
              (n[40] = e.onAutoApproveChange),
              (n[41] = e.suggestedDomain),
              (n[42] = T))
            : (T = n[42]),
          n[43] !== u || n[44] !== e.autoApproveReadError || n[45] !== e.onRetryAutoApprove
            ? ((M = e.autoApproveReadError
                ? (0, a.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, a.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children: (0, a.jsx)(A.A, {
                          id: "workspaceOwnerOnboarding.invitations.autoApprove.readError",
                          defaultMessage: "Couldn't load automatic approval settings",
                          description:
                            "Error when the workspace's current automatic join approval preference and eligibility cannot be loaded during owner onboarding. Individual invitations remain available.",
                        }),
                      }),
                      (0, a.jsx)(_.$, {
                        color: "ghostSecondary",
                        disabled: u,
                        onClick: e.onRetryAutoApprove,
                        children: (0, a.jsx)(A.A, {
                          id: "workspaceOwnerOnboarding.invitations.autoApprove.retryRead",
                          defaultMessage: "Try loading settings again",
                          description:
                            "Retries reading automatic join approval settings during workspace owner onboarding",
                        }),
                      }),
                    ],
                  })
                : null),
              (n[43] = u),
              (n[44] = e.autoApproveReadError),
              (n[45] = e.onRetryAutoApprove),
              (n[46] = M))
            : (M = n[46]),
          n[47] !== e.readState
            ? ((N =
                "error" === e.readState
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, a.jsx)(A.A, { ...U.read }),
                    })
                  : null),
              (n[47] = e.readState),
              (n[48] = N))
            : (N = n[48]),
          n[49] !== u || n[50] !== e.error || n[51] !== e.onRetryLoad || n[52] !== e.readState
            ? ((R =
                "error" === e.readState || "uncertain" === e.error || "read" === e.error || "capacity" === e.error
                  ? (0, a.jsx)(_.$, {
                      color: "ghostSecondary",
                      disabled: u,
                      onClick: e.onRetryLoad,
                      children: (0, a.jsx)(A.A, {
                        id: "workspaceOwnerOnboarding.invitations.refresh",
                        defaultMessage: "Try again",
                        description:
                          "Rechecks purchased seat capacity, existing members and pending invitations before retrying invitations",
                      }),
                    })
                  : null),
              (n[49] = u),
              (n[50] = e.error),
              (n[51] = e.onRetryLoad),
              (n[52] = e.readState),
              (n[53] = R))
            : (R = n[53]),
          n[54] !== et
            ? ((K = et
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, a.jsx)(A.A, { ...U.capacity }),
                  })
                : null),
              (n[54] = et),
              (n[55] = K))
            : (K = n[55]),
          (t = (0, a.jsxs)(z.E, {
            title: p,
            description: m,
            noValidate: !0,
            onSubmit: v,
            error: f,
            actions: (0, a.jsx)(z.o, {
              isPending: e.pending,
              secondaryAction: w,
              continueLabel: b,
              disabled: d || (!e.canContinue && (e.rows.every(B) || et || (X && "ready" !== e.readState))),
              onSkip: e.onSkip,
            }),
            children: [
              k,
              (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col items-start gap-4",
                children: [
                  e.rows.map((t, n) => {
                    let i = V[n] ?? t,
                      r = n + 1,
                      l = `${s}-row-${r}`,
                      d = e.rowErrors[n],
                      c = i.status,
                      p =
                        u ||
                        "invited" === t.status ||
                        "uncertain" === t.status ||
                        ("failed" === t.status && null != i.pendingInviteId),
                      m = (0, j.Am)(t.email, Y)
                    return (0, a.jsxs)(
                      "div",
                      {
                        className: "flex w-full flex-col gap-1",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "grid grid-cols-[minmax(0,1fr)_9.5rem] items-start gap-3",
                            children: [
                              (0, a.jsx)(E.M, {
                                value: t.email,
                                domain: e.completionDomain,
                                onAccept: (t) => {
                                  ;(e.onRowChange(n, { email: t }), e.onCompletionAccepted?.())
                                },
                                children: (i) =>
                                  (0, a.jsx)(q.pd, {
                                    id: `${l}-email`,
                                    variant: "onboarding",
                                    type: "email",
                                    autoComplete: "off",
                                    autoFocus: n === e.autoFocusRow && !t.email,
                                    spellCheck: !1,
                                    value: t.email,
                                    "aria-label": o.formatMessage(U.emailLabel, { number: r }),
                                    "aria-invalid": null != d || void 0,
                                    "aria-describedby": null != d || "ready" !== c ? `${l}-feedback` : void 0,
                                    placeholder: o.formatMessage(U.emailPlaceholder),
                                    disabled: p,
                                    valueSuffix: (0, a.jsx)("span", {
                                      "aria-hidden": "true",
                                      className: "min-w-0 truncate text-tertiary has-[kbd]:flex-1",
                                      children: i ?? m?.slice(t.email.trim().length),
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
                              }),
                              (0, j.q$)(i, e.inventory) &&
                                (0, a.jsx)(L.l, {
                                  id: `${l}-seat`,
                                  "aria-label": o.formatMessage(U.seatLabel, { number: r }),
                                  size: "xl",
                                  triggerClassName: "font-normal",
                                  optionIndicatorPosition: "end",
                                  dropdownIconType: "chevronDown",
                                  pill: !1,
                                  block: !0,
                                  disabled: p,
                                  value: t.seatType,
                                  options: en,
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
                                children: (0, a.jsx)(A.A, { ...U[d] }),
                              })
                            : null,
                          null == d && "ready" !== c
                            ? (0, a.jsx)("p", {
                                id: `${l}-feedback`,
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(A.A, { ...U[c] }),
                              })
                            : null,
                          null == d && "ready" === c && null != m
                            ? (0, a.jsx)("span", {
                                role: "status",
                                className: "sr-only",
                                children: (0, a.jsx)(A.A, {
                                  id: "workspaceOwnerOnboarding.invitations.rowSuggestion",
                                  defaultMessage: "Suggested email: {email}. Press Enter or Tab to accept.",
                                  description:
                                    "Announces a suggested address for this teammate and the keys that accept it",
                                  values: { email: m },
                                }),
                              })
                            : null,
                        ],
                      },
                      l,
                    )
                  }),
                  I,
                ],
              }),
              O,
              e.inviteLink,
              T,
              M,
              N,
              R,
              K,
              V.some(W)
                ? (0, a.jsx)(_.$, {
                    color: "ghostSecondary",
                    disabled: u,
                    onClick: e.onManageInvitations,
                    children: (0, a.jsx)(A.A, {
                      id: "workspaceOwnerOnboarding.invitations.manageInvitations",
                      defaultMessage: "Manage invitations",
                      description:
                        "Opens workspace member management so the owner can deliberately resend saved invitations whose email failed",
                    }),
                  })
                : null,
            ],
          })),
          (n[0] = d),
          (n[1] = u),
          (n[2] = s),
          (n[3] = o),
          (n[4] = e),
          (n[5] = t))
      } else t = n[5]
      return t
    }
    function W(e) {
      return "failed" === e.status
    }
    function B(e) {
      return !e.email.trim()
    }
    function F(e) {
      return "" !== e.email && !(0, j.Tn)(e)
    }
    function $(e) {
      return { ...e, email: e.email.trim().toLowerCase() }
    }
    let U = (0, R.YK)({
      uploadCsv: {
        id: "workspaceOwnerOnboarding.invitations.uploadCsv",
        defaultMessage: "Upload a CSV",
        description: "Opens a local CSV to import email addresses for review before sending",
      },
      size: {
        id: "workspaceOwnerOnboarding.invitations.csvSize",
        defaultMessage: "Choose a CSV file no larger than 25 MB",
        description: "Selected invitation file exceeds the size limit",
      },
      type: {
        id: "workspaceOwnerOnboarding.invitations.csvType",
        defaultMessage: "Choose a CSV file",
        description: "Selected invitation file has an unsupported type",
      },
      parse: {
        id: "workspaceOwnerOnboarding.invitations.csvParse",
        defaultMessage: "We couldn’t read that CSV. Check the file and try again",
        description: "A selected invitation file could not be read or parsed",
      },
      records: {
        id: "workspaceOwnerOnboarding.invitations.csvRecordLimit",
        defaultMessage: "No emails added. Choose a CSV with no more than {limit} data rows.",
        description: "The selected CSV has too many records, excluding its optional header",
      },
      rows: {
        id: "workspaceOwnerOnboarding.invitations.csvFormLimit",
        defaultMessage: "No emails added. This CSV would put the invitation form over {limit} rows.",
        description: "Adding the new CSV recipients would exceed the editable invitation row limit",
      },
      default: {
        id: "workspaceOwnerOnboarding.invitations.standardSeat",
        defaultMessage: "Standard Seat",
        description: "Standard paid seat option for a single teammate invitation",
      },
      prolite: {
        id: "workspaceOwnerOnboarding.invitations.premiumSeat",
        defaultMessage: "Premium Seat",
        description: "Premium paid seat option for a single teammate invitation",
      },
      emailLabel: {
        id: "workspaceOwnerOnboarding.invitations.rowEmail",
        defaultMessage: "Email {number}",
        description: "Accessible name of the email field in a numbered teammate invitation row",
      },
      emailPlaceholder: {
        id: "workspaceOwnerOnboarding.invitations.rowEmailPlaceholder",
        defaultMessage: "Email",
        description: "Placeholder for one teammate's email address",
      },
      seatLabel: {
        id: "workspaceOwnerOnboarding.invitations.rowSeatType",
        defaultMessage: "Seat type {number}",
        description: "Accessible name of the seat selector in a numbered teammate invitation row",
      },
      invalid: {
        id: "workspaceOwnerOnboarding.invitations.invalidEmail",
        defaultMessage: "Enter a complete email address",
        description: "Inline error for malformed manually entered invitation email addresses",
      },
      duplicate: {
        id: "workspaceOwnerOnboarding.invitations.duplicateRow",
        defaultMessage: "This email is already in the list",
        description: "Inline error when another teammate row already contains this email address",
      },
      invited: {
        id: "workspaceOwnerOnboarding.invitations.sent",
        defaultMessage: "Invitation sent",
        description: "Status for a teammate whose invitation was sent successfully",
      },
      member: {
        id: "workspaceOwnerOnboarding.invitations.member",
        defaultMessage: "Already a member",
        description:
          "Status of an invitation recipient who already belongs to the workspace and will not be invited again",
      },
      pending: {
        id: "workspaceOwnerOnboarding.invitations.pendingInvite",
        defaultMessage: "Already invited",
        description: "Status of a recipient with an existing pending workspace invitation",
      },
      failed: {
        id: "workspaceOwnerOnboarding.invitations.failed",
        defaultMessage: "Invitation failed",
        description: "Status of a recipient whose invitation email failed, even if a pending invitation was saved",
      },
      uncertain: {
        id: "workspaceOwnerOnboarding.invitations.uncertain",
        defaultMessage: "Confirming result",
        description: "Status of an invitation whose request outcome must be checked before retrying",
      },
      read: {
        id: "workspaceOwnerOnboarding.invitations.readError",
        defaultMessage: "We couldn’t confirm your seats and invitations. Try again, or skip for now.",
        description: "A read failure prevents sending invitations; the optional onboarding step can still be skipped",
      },
      capacity: {
        id: "workspaceOwnerOnboarding.invitations.capacityError",
        defaultMessage:
          "We couldn’t confirm enough available seats for these invitations. Remove recipients or try again.",
        description:
          "Prevents invitations above purchased Standard or Premium capacity, including existing pending invitations",
      },
      partial: {
        id: "workspaceOwnerOnboarding.invitations.partialError",
        defaultMessage:
          "Some invitations failed. Try sending again for unsaved recipients, or manage invitations to resend saved ones.",
        description: "Explains how to retry unsaved recipients and recover a saved invitation in member management",
      },
      inventoryChanged: {
        id: "workspaceOwnerOnboarding.invitations.inventoryChanged",
        defaultMessage: "Some recipients now need an invitation. Review their seats before sending.",
        description: "Shown when a recipient is no longer a workspace member or no longer has a pending invitation",
      },
      uncertainError: {
        id: "workspaceOwnerOnboarding.invitations.uncertainError",
        defaultMessage:
          "We couldn’t confirm every invitation. Try again to confirm availability; confirmed invitations won’t be resent.",
        description:
          "Some invitation responses are uncertain and a fresh member and invitation read is required before retrying",
      },
      continue: {
        id: "workspaceOwnerOnboarding.invitations.continueError",
        defaultMessage: "We couldn’t finish setup. Try again; saved invitations won’t be resent.",
        description:
          "Completion callback failed after invitation writes succeeded; retrying does not resend those invitations",
      },
    })
    function Z(e) {
      let t,
        n,
        o,
        s,
        l,
        d,
        u,
        p,
        m,
        v,
        f,
        g,
        h,
        w,
        b,
        y,
        x,
        k,
        C,
        A,
        _,
        S,
        I,
        E,
        L,
        N,
        R = (0, i.c)(98)
      R[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (R[0] = t)) : (t = R[0])
      let [P, D] = (0, c.useState)(t),
        [q, z] = (0, c.useState)(),
        [W, B] = (0, c.useState)(null),
        [F, $] = (0, c.useState)(!1),
        [U, Z] = (0, c.useState)(null),
        [et, en] = (0, c.useState)(!1),
        ea = (0, c.useRef)(null),
        [ei, er] = (0, c.useState)(!1),
        [eo, es] = (0, c.useState)(!1),
        el = (0, j.Zp)(e.inventory)
      if (R[1] !== P || R[2] !== el || R[3] !== e.inventory || R[4] !== e.linkCopied || R[5] !== W) {
        let t
        ;(R[13] !== P ? ((t = (e, t) => P[t] ?? null), (R[13] = P), (R[14] = t)) : (t = R[14]),
          (p = Array.from({ length: Math.max(el, P.length) }, t)),
          (d = (n = (0, j.H)(p, e.inventory)).map(ee)),
          (s = (0, j.Wx)(d)),
          (l = null == e.inventory ? s.rows : (0, j.zf)(s.rows, e.inventory)),
          (o = d.some(J)),
          (u = null != W || (o ? !s.rowErrors.some(Boolean) && l.every(j.Tn) : !0 === e.linkCopied)),
          (R[1] = P),
          (R[2] = el),
          (R[3] = e.inventory),
          (R[4] = e.linkCopied),
          (R[5] = W),
          (R[6] = n),
          (R[7] = o),
          (R[8] = s),
          (R[9] = l),
          (R[10] = d),
          (R[11] = u),
          (R[12] = p))
      } else ((n = R[6]), (o = R[7]), (s = R[8]), (l = R[9]), (d = R[10]), (u = R[11]), (p = R[12]))
      let ed = u
      R[15] !== ed || R[16] !== e.inventory || R[17] !== d
        ? ((m = { rows: d, inventory: e.inventory, canContinue: ed }),
          (R[15] = ed),
          (R[16] = e.inventory),
          (R[17] = d),
          (R[18] = m))
        : (m = R[18])
      let ec = m,
        [eu, ep] = (0, c.useState)(null),
        em = et || null != eu,
        ev = em || e.isAdvancePending || ei
      ;(R[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = () => () => ea.current?.abort()), (f = []), (R[19] = v), (R[20] = f))
        : ((v = R[19]), (f = R[20])),
        (0, c.useEffect)(v, f),
        R[21] !== ev || R[22] !== P || R[23] !== e || R[24] !== W
          ? ((g = async function (t) {
              if (ev || null != ea.current || null != W) return
              if (t.size > 0x1900000) return void z({ error: "size" })
              if (!t.name.toLowerCase().endsWith(".csv") && "text/csv" !== t.type) return void z({ error: "type" })
              let n = new AbortController()
              ;((ea.current = n), en(!0), e.onPendingChange?.(!0))
              try {
                let e = await t.text()
                if (!n.signal.aborted) {
                  let t = (function (e, t) {
                      let n = M.array(
                          M.object({ record: M.array(M.string()), info: M.object({ lines: M.number().int() }) }),
                        ).parse(
                          (0, T.parse)(t, {
                            info: !0,
                            bom: !0,
                            trim: !0,
                            skip_empty_lines: !0,
                            relax_column_count: !0,
                            to: 52,
                          }),
                        ),
                        a = ["email", "email address", "email_address"].includes(
                          n[0]?.record[0]?.trim().toLowerCase() ?? "",
                        )
                          ? n.slice(1)
                          : n
                      if (a.length > 50) return null
                      let i = new Set(e.map((e) => e?.email.trim().toLowerCase())),
                        o = [],
                        s = [],
                        l = 0
                      for (let { record: e, info: t } of a) {
                        let n = e[0]?.trim().toLowerCase() ?? ""
                        !r.WL.test(n) || e.slice(1).some((e) => "" !== e.trim())
                          ? s.push(t.lines)
                          : i.has(n)
                            ? l++
                            : (i.add(n), o.push(n))
                      }
                      return { emails: o, invalidLines: s, duplicateCount: l }
                    })(P, e),
                    n = P.findLastIndex(X) + 1
                  if (null == t) z({ error: "records" })
                  else if (t.emails.length > 0 && n + t.emails.length > 50) z({ error: "rows" })
                  else {
                    let { emails: e, duplicateCount: a, invalidLines: i } = t
                    z({ count: e.length, duplicateCount: a, invalidLines: i })
                    let r = e.map(Y)
                    ;(D([...P.slice(0, n), ...r, ...P.slice(n + r.length)]), Z(null))
                  }
                }
              } catch {
                n.signal.aborted || z({ error: "parse" })
              }
              ;(e.onPendingChange?.(!1), n.signal.aborted || ((ea.current = null), en(!1)))
            }),
            (R[21] = ev),
            (R[22] = P),
            (R[23] = e),
            (R[24] = W),
            (R[25] = g))
          : (g = R[25]))
      let ef = g
      R[26] !== e
        ? ((h = async function (t) {
            if (null != ea.current || e.isAdvancePending || (t && !e.autoApprove?.canEnable)) return
            let n = new AbortController()
            ;((ea.current = n), en(!0), es(!1))
            try {
              ;(await e.onAutoApproveChange(t, n.signal), n.signal.aborted || er(!1))
            } catch {
              n.signal.aborted || es(!0)
            }
            n.signal.aborted || ((ea.current = null), en(!1))
          }),
          (R[26] = e),
          (R[27] = h))
        : (h = R[27])
      let eg = h
      R[28] !== em
        ? ((w = function () {
            em || (er(!1), es(!1))
          }),
          (R[28] = em),
          (R[29] = w))
        : (w = R[29])
      let eh = w
      R[30] !== ev ||
      R[31] !== ed ||
      R[32] !== ec ||
      R[33] !== o ||
      R[34] !== s ||
      R[35] !== e ||
      R[36] !== l ||
      R[37] !== W ||
      R[38] !== d
        ? ((b = async function (t) {
            if (ev || null != ea.current || (!t && !ed && !o)) return
            if (!t && !W && s.rowErrors.some(Boolean)) return void $(!0)
            t && e.onSkip?.(d)
            let n = l,
              a = new AbortController()
            ;((ea.current = a), ep(ec), e.onPendingChange?.(!0), Z(null))
            let i = !1
            try {
              let r = null
              if (!t && W?.skipped !== !0 && ed && s.rows.some(Q)) {
                let t = await e.onRefreshInventory()
                null == t ? (r = "read") : (n = (0, j.zf)(s.rows, t)).every(j.Tn) || (r = "inventoryChanged")
              } else if (null == W && !t && n.some(H)) {
                let t = await e.onSend(n, a.signal)
                if (((n = t.rows), (r = t.error), !a.signal.aborted)) {
                  let e = new Map(n.map(G))
                  D((t) => t.map((t) => (null == t ? null : (e.get(t.email.trim().toLowerCase()) ?? t))))
                }
              }
              if (!a.signal.aborted && (Z(r), "inventoryChanged" === r && B(null), null == r)) {
                i = !0
                let r = W ?? { step: "invitations", skipped: t, invitedCount: (t ? d : n).filter(V).length }
                ;(B(r), await e.onContinue(r), a.signal.aborted || B(null))
              }
            } catch {
              a.signal.aborted || Z(i ? "continue" : "read")
            }
            ;(e.onPendingChange?.(!1), a.signal.aborted || ((ea.current = null), ep(null)))
          }),
          (R[30] = ev),
          (R[31] = ed),
          (R[32] = ec),
          (R[33] = o),
          (R[34] = s),
          (R[35] = e),
          (R[36] = l),
          (R[37] = W),
          (R[38] = d),
          (R[39] = b))
        : (b = R[39])
      let ew = b,
        eb = eu ?? ec,
        ey = null != W
      R[40] !== ef ? ((y = (e) => void ef(e)), (R[40] = ef), (R[41] = y)) : (y = R[41])
      let ex = eo && !ei
      R[42] !== ev || R[43] !== e.autoApprove?.canEnable || R[44] !== eg
        ? ((x = (t) => {
            !ev && (es(!1), t && e.autoApprove?.canEnable ? er(!0) : t || eg(!1))
          }),
          (R[42] = ev),
          (R[43] = e.autoApprove?.canEnable),
          (R[44] = eg),
          (R[45] = x))
        : (x = R[45])
      let ek = P.length > el ? P.length - 1 : void 0
      R[46] !== s || R[47] !== F ? ((k = F ? s.rowErrors : []), (R[46] = s), (R[47] = F), (R[48] = k)) : (k = R[48])
      let eC = em || e.isAdvancePending
      return (
        R[49] !== n || R[50] !== ev
          ? ((C = (e, t) => {
              let a = n[e]
              if (ev || null == a) return
              let i =
                t.email?.trim() === ""
                  ? null
                  : { email: t.email ?? a.email, seatType: t.seatType ?? a.seatType, status: "ready" }
              ;(D((t) =>
                Array.from({ length: Math.max(t.length, e + 1) }, (a, r) => {
                  if (r === e) return i
                  let o = t[r] ?? null,
                    s = n[r]?.seatType
                  return null != o && null == o.seatType && null != s ? { ...o, seatType: s } : o
                }),
              ),
                Z(null))
            }),
            (R[49] = n),
            (R[50] = ev),
            (R[51] = C))
          : (C = R[51]),
        R[52] !== p ? ((A = () => D([...p, null])), (R[52] = p), (R[53] = A)) : (A = R[53]),
        R[54] !== e ? ((_ = () => void e.onRefreshInventory()), (R[54] = e), (R[55] = _)) : (_ = R[55]),
        R[56] !== ew
          ? ((S = () => {
              ew(!1)
            }),
            (I = () => {
              ew(!0)
            }),
            (R[56] = ew),
            (R[57] = S),
            (R[58] = I))
          : ((S = R[57]), (I = R[58])),
        R[59] !== ei ||
        R[60] !== q ||
        R[61] !== U ||
        R[62] !== e.autoApprove ||
        R[63] !== e.autoApproveReadError ||
        R[64] !== e.completionDomain ||
        R[65] !== e.completionPolicy ||
        R[66] !== e.completionTreatment ||
        R[67] !== e.continueLabel ||
        R[68] !== e.inviteLink ||
        R[69] !== e.onCompletionAccepted ||
        R[70] !== e.onManageInvitations ||
        R[71] !== e.onRetryAutoApprove ||
        R[72] !== e.readState ||
        R[73] !== e.suggestedDomain ||
        R[74] !== ey ||
        R[75] !== y ||
        R[76] !== ex ||
        R[77] !== x ||
        R[78] !== ek ||
        R[79] !== k ||
        R[80] !== eC ||
        R[81] !== C ||
        R[82] !== A ||
        R[83] !== _ ||
        R[84] !== S ||
        R[85] !== I ||
        R[86] !== eb
          ? ((E = (0, a.jsx)(K, {
              continueLabel: e.continueLabel,
              inviteLink: e.inviteLink,
              ...eb,
              retryingCompletion: ey,
              csvFeedback: q,
              onCsv: y,
              suggestedDomain: e.suggestedDomain,
              completionPolicy: e.completionPolicy,
              completionTreatment: e.completionTreatment,
              completionDomain: e.completionDomain,
              onCompletionAccepted: e.onCompletionAccepted,
              autoApprove: e.autoApprove,
              autoApproveReadError: e.autoApproveReadError,
              autoApproveError: ex,
              onRetryAutoApprove: e.onRetryAutoApprove,
              onAutoApproveChange: x,
              autoFocusRow: ek,
              rowErrors: k,
              readState: e.readState,
              pending: eC,
              disabled: ei,
              error: U,
              onRowChange: C,
              onAddRow: A,
              onRetryLoad: _,
              onManageInvitations: e.onManageInvitations,
              onSubmit: S,
              onSkip: I,
            })),
            (R[59] = ei),
            (R[60] = q),
            (R[61] = U),
            (R[62] = e.autoApprove),
            (R[63] = e.autoApproveReadError),
            (R[64] = e.completionDomain),
            (R[65] = e.completionPolicy),
            (R[66] = e.completionTreatment),
            (R[67] = e.continueLabel),
            (R[68] = e.inviteLink),
            (R[69] = e.onCompletionAccepted),
            (R[70] = e.onManageInvitations),
            (R[71] = e.onRetryAutoApprove),
            (R[72] = e.readState),
            (R[73] = e.suggestedDomain),
            (R[74] = ey),
            (R[75] = y),
            (R[76] = ex),
            (R[77] = x),
            (R[78] = ek),
            (R[79] = k),
            (R[80] = eC),
            (R[81] = C),
            (R[82] = A),
            (R[83] = _),
            (R[84] = S),
            (R[85] = I),
            (R[86] = eb),
            (R[87] = E))
          : (E = R[87]),
        R[88] !== eo || R[89] !== eh || R[90] !== ei || R[91] !== em || R[92] !== e.suggestedDomain || R[93] !== eg
          ? ((L =
              ei && null != e.suggestedDomain
                ? (0, a.jsx)(O, {
                    domain: e.suggestedDomain,
                    pending: em,
                    error: eo,
                    onClose: eh,
                    onConfirm: () => void eg(!0),
                  })
                : null),
            (R[88] = eo),
            (R[89] = eh),
            (R[90] = ei),
            (R[91] = em),
            (R[92] = e.suggestedDomain),
            (R[93] = eg),
            (R[94] = L))
          : (L = R[94]),
        R[95] !== E || R[96] !== L
          ? ((N = (0, a.jsxs)(a.Fragment, { children: [E, L] })), (R[95] = E), (R[96] = L), (R[97] = N))
          : (N = R[97]),
        N
      )
    }
    function V(e) {
      return "invited" === e.status
    }
    function G(e) {
      return [e.email, e]
    }
    function H(e) {
      return "ready" === e.status || "failed" === e.status || "uncertain" === e.status
    }
    function Q(e) {
      return "invited" !== e.status
    }
    function Y(e) {
      return { email: e, seatType: null, status: "ready" }
    }
    function X(e) {
      return null != e
    }
    function J(e) {
      return "" !== e.email.trim()
    }
    function ee(e) {
      return { ...e, seatType: e.seatType ?? "default" }
    }
    var et = n("Bbed"),
      en = n("RNul"),
      ea = n("hZax"),
      ei = n("rloG")
    let er = (0, et._)(async () => (await Promise.all([n.e(753405), n.e(695234)]).then(n.bind(n, "uvSx"))).InviteAll, {
      fallback: (0, a.jsx)(function () {
        let e,
          t,
          n = (0, i.c)(2)
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("span", {
                className: "sr-only",
                children: (0, a.jsx)(A.A, {
                  id: "onboarding.inviteAll.loading",
                  defaultMessage: "Loading workspace invitations…",
                  description: "Announced while the eligible owner's invitation page loads.",
                }),
              })),
              (n[0] = e))
            : (e = n[0]),
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsxs)("section", {
                className: ei.A.invite,
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
    function eo(e) {
      let t,
        n,
        r,
        o,
        s,
        d,
        u,
        p,
        v = (0, i.c)(35),
        { identity: f, disabled: g, onContinue: h, onPendingChange: w, onBulkSubmissionStarted: b, children: y } = e,
        { userId: x, workspaceId: C } = f
      v[0] !== x || v[1] !== C ? ((t = { accountId: C, userId: x }), (v[0] = x), (v[1] = C), (v[2] = t)) : (t = v[2])
      let j = t,
        A = (0, ea.AS)()
      v[3] !== f || v[4] !== A || v[5] !== x || v[6] !== C
        ? ((n = () => {
            let e = A.getContext().user
            return (0, k.L)(f) && e.userID === x && (e.customIDs?.workspace_id ?? e.customIDs?.account_id) === C
          }),
          (v[3] = f),
          (v[4] = A),
          (v[5] = x),
          (v[6] = C),
          (v[7] = n))
        : (n = v[7])
      let _ = n
      v[8] !== _ || v[9] !== A
        ? ((r = () => {
            if (!_()) return null
            let e = (0, ea.hW)(A, "698452771", { disableExposureLog: !0 })
            return null == e.groupName || e.__evaluation?.is_user_in_experiment === !1 ? null : e.get("enabled", !1)
          }),
          (v[8] = _),
          (v[9] = A),
          (v[10] = r))
        : (r = v[10])
      let [S] = (0, c.useState)(r)
      v[11] !== x || v[12] !== C
        ? ((o = ["onboarding-domain-members", C, x]), (v[11] = x), (v[12] = C), (v[13] = o))
        : (o = v[13])
      let I = null != S
      ;(v[14] !== S || v[15] !== j || v[16] !== _ || v[17] !== A || v[18] !== C
        ? ((s = async (e) => {
            let t = AbortSignal.timeout(5e3),
              n = S ? AbortSignal.any([e.signal, t]) : t,
              a = await m.Request.safeGet("/referrals/workspace/domain-members", {
                expectedIdentity: j,
                parameters: { query: { source: "onboarding" } },
                additionalHeaders: { "x-openai-use-sheep": "1" },
                signal: n,
              })
            n.throwIfAborted()
            let i = a.domain_member_count ?? 0
            return a.eligible && a.workspace_id === C && a.domain && !(i <= 0) && _()
              ? ((0, ea.hW)(A, "698452771"), { domain: a.domain, count: i })
              : null
          }),
          (v[14] = S),
          (v[15] = j),
          (v[16] = _),
          (v[17] = A),
          (v[18] = C),
          (v[19] = s))
        : (s = v[19]),
        v[20] !== o || v[21] !== I || v[22] !== s
          ? ((d = {
              queryKey: o,
              enabled: I,
              queryFn: s,
              networkMode: "always",
              staleTime: 1 / 0,
              retry: !1,
              gcTime: 0,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
            }),
            (v[20] = o),
            (v[21] = I),
            (v[22] = s),
            (v[23] = d))
          : (d = v[23]))
      let { data: O, isLoading: T } = (0, l.I)(d)
      if (S && T) {
        let e
        return (
          v[24] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(en.y, {})), (v[24] = e)) : (e = v[24]),
          e
        )
      }
      return S && O
        ? (v[25] !== j || v[26] !== b
            ? ((u = (e) => (
                b?.(),
                m.Request.safePost("/referrals/workspace/domain-members/invite", {
                  parameters: { query: { source: "onboarding", auto_approve_join_requests: e } },
                  requestBody: null,
                  expectedIdentity: j,
                  retry: "never",
                })
              )),
              (v[25] = j),
              (v[26] = b),
              (v[27] = u))
            : (u = v[27]),
          v[28] !== y || v[29] !== O || v[30] !== g || v[31] !== h || v[32] !== w || v[33] !== u
            ? ((p = (0, a.jsx)("main", {
                className: ei.A.page,
                children: (0, a.jsx)(er, {
                  ...O,
                  manualForm: y,
                  disabled: g,
                  onPendingChange: w,
                  onContinue: h,
                  onSend: u,
                }),
              })),
              (v[28] = y),
              (v[29] = O),
              (v[30] = g),
              (v[31] = h),
              (v[32] = w),
              (v[33] = u),
              (v[34] = p))
            : (p = v[34]),
          p)
        : y
    }
    var es = n("dHYa"),
      el = n("rrA6"),
      ed = n("aepO"),
      ec = n("HFSu"),
      eu = n("QORo")
    function ep(e) {
      let t,
        n,
        r,
        o,
        s,
        l,
        d,
        u,
        p,
        m,
        v,
        f,
        g,
        h,
        w,
        b,
        y = (0, i.c)(68),
        { identity: x, checkoutSessionId: C, query: j, onCopied: S } = e
      y[0] !== C || y[1] !== x
        ? ((t = { identity: x, checkoutSessionId: C }), (y[0] = C), (y[1] = x), (y[2] = t))
        : (t = y[2])
      let I = (0, eu.m)(t),
        O = (0, N.A)(),
        T = (0, c.useId)(),
        [M, E] = (0, c.useState)(!1),
        [L, R] = (0, c.useState)(!1),
        [q, z] = (0, c.useState)(!1),
        K = (0, ea.Zj)("3461971912"),
        W = (0, ea.Zj)("3227049108")
      y[3] !== j.data || y[4] !== K || y[5] !== W
        ? ((n = j.data && (0, es.vc)(j.data, { socialSharing: K, workDomainOpenAccess: W })),
          (y[3] = j.data),
          (y[4] = K),
          (y[5] = W),
          (y[6] = n))
        : (n = y[6])
      let B = n,
        F = "unavailable" === B || B?.sharing_disabled ? null : B,
        $ = !j.isError && F?.invite_url ? F.expires_at : null
      y[7] !== C || y[8] !== x || y[9] !== I || y[10] !== $
        ? ((r = () => {
            null == C ||
              null == $ ||
              Date.parse($) <= Date.now() ||
              (0, el.p)(
                x,
                C,
                `inviteLinkShown:${$}`,
                () => (0, k.L)(x),
                () => I("SHOWN"),
              )
          }),
          (y[7] = C),
          (y[8] = x),
          (y[9] = I),
          (y[10] = $),
          (y[11] = r))
        : (r = y[11])
      let U = (0, c.useEffectEvent)(r)
      if (
        (y[12] !== U
          ? ((o = () => {
              U()
            }),
            (y[12] = U),
            (y[13] = o))
          : (o = y[13]),
        y[14] !== C || y[15] !== x.userId || y[16] !== x.workspaceId || y[17] !== $
          ? ((s = [C, x.userId, x.workspaceId, $]),
            (y[14] = C),
            (y[15] = x.userId),
            (y[16] = x.workspaceId),
            (y[17] = $),
            (y[18] = s))
          : (s = y[18]),
        (0, c.useEffect)(o, s),
        j.isError)
      ) {
        let e, t, n
        return (
          y[19] !== j ? ((e = () => void j.refetch()), (y[19] = j), (y[20] = e)) : (e = y[20]),
          y[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(A.A, {
                id: "workspaceOwnerOnboarding.inviteLink.retry",
                defaultMessage: "Try loading invite link again",
                description: "Retries preparing a shareable link during owner onboarding.",
              })),
              (y[21] = t))
            : (t = y[21]),
          y[22] !== e
            ? ((n = (0, a.jsx)(_.$, { color: "ghostSecondary", onClick: e, children: t })), (y[22] = e), (y[23] = n))
            : (n = y[23]),
          n
        )
      }
      if (!F?.invite_url || !F.expires_at) return null
      let Z = F.invite_url,
        V = Date.parse(F.expires_at)
      y[24] !== O
        ? ((l = O.formatMessage({
            id: "workspace.members.inviteLink.copy.action",
            defaultMessage: "Copy link",
            description: "Button that copies the workspace invitation URL so a member can send it to teammates.",
          })),
          (y[24] = O),
          (y[25] = l))
        : (l = y[25])
      let G = l
      y[26] !== x || y[27] !== I || y[28] !== j
        ? ((d = async function (e) {
            ;(R(!0), z(!1))
            try {
              ;((0, k.M)(x),
                await ec.Kd.safePatch("/accounts/{account_id}/invite-link", {
                  parameters: { path: { account_id: x.workspaceId } },
                  expectedIdentity: { accountId: x.workspaceId, userId: x.userId },
                  requestBody: { auto_approve_requests: e },
                  retry: "never",
                }),
                I(e ? "AUTO_APPROVAL_ENABLED" : "AUTO_APPROVAL_DISABLED"))
            } catch {
              z(!0)
            }
            ;(await j.refetch(), R(!1))
          }),
          (y[26] = x),
          (y[27] = I),
          (y[28] = j),
          (y[29] = d))
        : (d = y[29])
      let H = d
      return (
        y[30] !== I || y[31] !== S || y[32] !== Z
          ? ((u = (e) => {
              let t = e.currentTarget
              e.isTrusted &&
                !e.defaultPrevented &&
                0 === t.selectionStart &&
                t.selectionEnd === Z.length &&
                (e.clipboardData.setData("text/plain", Z), e.preventDefault(), I("SHARED", { linkCopyButton: !1 }), S())
            }),
            (y[30] = I),
            (y[31] = S),
            (y[32] = Z),
            (y[33] = u))
          : (u = y[33]),
        y[34] !== G || y[35] !== u || y[36] !== Z
          ? ((p = (0, a.jsx)("input", {
              "aria-label": G,
              className: "min-w-0 flex-1 truncate bg-transparent text-secondary",
              readOnly: !0,
              dir: "ltr",
              value: Z,
              onFocus: em,
              onCopy: u,
            })),
            (y[34] = G),
            (y[35] = u),
            (y[36] = Z),
            (y[37] = p))
          : (p = y[37]),
        y[38] !== C || y[39] !== V || y[40] !== I || y[41] !== S || y[42] !== j || y[43] !== Z
          ? ((m = (e) => {
              ;(V <= Date.now()
                ? j.refetch()
                : (0, ed.E)(Z, e).then((e) => {
                    ;(E(e), e && (I("SHARED", { linkCopyButton: !0 }), S()))
                  }),
                null != C && I("COPY_CLICKED"))
            }),
            (y[38] = C),
            (y[39] = V),
            (y[40] = I),
            (y[41] = S),
            (y[42] = j),
            (y[43] = Z),
            (y[44] = m))
          : (m = y[44]),
        y[45] !== M ? ((v = M ? (0, a.jsx)(D.ALZ, {}) : (0, a.jsx)(D.yDG, {})), (y[45] = M), (y[46] = v)) : (v = y[46]),
        y[47] !== G || y[48] !== m || y[49] !== v
          ? ((f = (0, a.jsx)(_.$, { color: "ghostSecondary", "aria-label": G, title: G, onClick: m, children: v })),
            (y[47] = G),
            (y[48] = m),
            (y[49] = v),
            (y[50] = f))
          : (f = y[50]),
        y[51] !== f || y[52] !== p
          ? ((g = (0, a.jsxs)("div", {
              className: "bg-secondary flex items-center gap-2 rounded-xl p-3",
              "data-dd-privacy": "mask",
              children: [p, f],
            })),
            (y[51] = f),
            (y[52] = p),
            (y[53] = g))
          : (g = y[53]),
        y[54] !== T ||
        y[55] !== F.auto_approve_requests ||
        y[56] !== F.can_change_auto_approve_requests ||
        y[57] !== F.has_social_owner ||
        y[58] !== F.workspace_domains ||
        y[59] !== L ||
        y[60] !== H
          ? ((h =
              !1 === F.has_social_owner &&
              F.workspace_domains[0] &&
              F.can_change_auto_approve_requests &&
              "boolean" == typeof F.auto_approve_requests &&
              (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [
                  (0, a.jsx)(P.S, {
                    id: T,
                    checked: F.auto_approve_requests,
                    disabled: L,
                    onCheckedChange: (e) => void H(e),
                  }),
                  (0, a.jsx)("label", {
                    htmlFor: T,
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(A.A, {
                      id: "workspaceOwnerOnboarding.inviteLink.autoApprove",
                      defaultMessage:
                        "Auto-approve requests from {domain} through this link and buy extra seats when needed.",
                      description:
                        "Checkbox on the Business owner onboarding invitation page. The domain is the owner’s work email domain, such as example.com. Checking this authorizes seat purchases for eligible link requests.",
                      values: { domain: F.workspace_domains[0] },
                    }),
                  }),
                ],
              })),
            (y[54] = T),
            (y[55] = F.auto_approve_requests),
            (y[56] = F.can_change_auto_approve_requests),
            (y[57] = F.has_social_owner),
            (y[58] = F.workspace_domains),
            (y[59] = L),
            (y[60] = H),
            (y[61] = h))
          : (h = y[61]),
        y[62] !== q
          ? ((w =
              q &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, a.jsx)(A.A, {
                  id: "workspaceOwnerOnboarding.invitations.autoApprove.saveError",
                  defaultMessage: "Couldn't update automatic approval. Please try again.",
                  description:
                    "Error when saving the owner's automatic join approval preference fails. The checkbox retains the last saved state and can be retried.",
                }),
              })),
            (y[62] = q),
            (y[63] = w))
          : (w = y[63]),
        y[64] !== g || y[65] !== h || y[66] !== w
          ? ((b = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [g, h, w] })),
            (y[64] = g),
            (y[65] = h),
            (y[66] = w),
            (y[67] = b))
          : (b = y[67]),
        b
      )
    }
    function em(e) {
      return e.currentTarget.select()
    }
    var ev = n("dNSZ")
    function ef(e) {
      let t,
        n,
        r,
        o,
        s,
        l,
        u = (0, i.c)(18),
        p = (0, d.gh)(y.u),
        m = (0, c.useRef)(!1)
      ;(u[0] !== e.inviteTelemetry || u[1] !== p
        ? ((t = () => {
            null == e.inviteTelemetry ||
              m.current ||
              ((m.current = !0), (0, w.mc)(p, e.inviteTelemetry, "workspace_invite_shown"))
          }),
          (n = [p, e.inviteTelemetry]),
          (u[0] = e.inviteTelemetry),
          (u[1] = p),
          (u[2] = t),
          (u[3] = n))
        : ((t = u[2]), (n = u[3])),
        (0, c.useEffect)(t, n))
      let v = `${e.identity.userId}:${e.identity.workspaceId}`
      return (
        u[4] !== e || u[5] !== p
          ? ((r = () => {
              ;(e.onSubmissionStarted?.(),
                (0, w.mc)(p, e.inviteTelemetry, "workspace_invite_submission_started", void 0, crypto.randomUUID()))
            }),
            (o = (t, n) => (
              (0, k.M)(e.identity),
              n && (0, w.d_)(p, e.inviteTelemetry, eg),
              e.onContinue({ step: "invitations", invitedCount: t, skipped: n })
            )),
            (u[4] = e),
            (u[5] = p),
            (u[6] = r),
            (u[7] = o))
          : ((r = u[6]), (o = u[7])),
        u[8] !== e ? ((s = (0, a.jsx)(eh, { ...e })), (u[8] = e), (u[9] = s)) : (s = u[9]),
        u[10] !== e.identity ||
        u[11] !== e.isAdvancePending ||
        u[12] !== e.onPendingChange ||
        u[13] !== v ||
        u[14] !== r ||
        u[15] !== o ||
        u[16] !== s
          ? ((l = (0, a.jsx)(
              eo,
              {
                identity: e.identity,
                disabled: e.isAdvancePending,
                onPendingChange: e.onPendingChange,
                onBulkSubmissionStarted: r,
                onContinue: o,
                children: s,
              },
              v,
            )),
            (u[10] = e.identity),
            (u[11] = e.isAdvancePending),
            (u[12] = e.onPendingChange),
            (u[13] = v),
            (u[14] = r),
            (u[15] = o),
            (u[16] = s),
            (u[17] = l))
          : (l = u[17]),
        l
      )
    }
    async function eg() {}
    function eh(e) {
      let t,
        n,
        A,
        _,
        S,
        I,
        O,
        T,
        M,
        E,
        L,
        N,
        R,
        P,
        D,
        q,
        z,
        K,
        W,
        B,
        F = (0, i.c)(86),
        $ = (0, d.gh)(y.u),
        [U, V] = (0, c.useState)(!1),
        G = e.identity
      F[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { active: !0, invitePage: !0 }), (F[0] = t)) : (t = F[0])
      let H = (0, ev.d)(G, t),
        Q = (0, s.jE)(),
        { accountId: Y, email: X, userId: J } = (0, u.As)()
      F[1] !== Y || F[2] !== J ? ((n = { accountId: Y, userId: J }), (F[1] = Y), (F[2] = J), (F[3] = n)) : (n = F[3])
      let { data: ee } = (0, d._U)(p.chatGptCurrentUserQuery$, n),
        et = (0, d._U)(C.j, G),
        { data: en, error: ea, isFetchedAfterMount: ei, refetch: er } = et,
        eo = ei && null == ea ? en : void 0
      ;(F[4] !== G.userId || F[5] !== G.workspaceId
        ? ((A = ["business-onboarding-invite", G.workspaceId, "identity", G.userId]),
          (F[4] = G.userId),
          (F[5] = G.workspaceId),
          (F[6] = A))
        : (A = F[6]),
        F[7] !== G.userId || F[8] !== G.workspaceId
          ? ((_ = (e) => {
              let { signal: t } = e
              return m.Request.safeGet("/accounts/{account_id}/identity", {
                parameters: { path: { account_id: G.workspaceId } },
                expectedIdentity: { accountId: G.workspaceId, userId: G.userId },
                signal: t,
              })
            }),
            (F[7] = G.userId),
            (F[8] = G.workspaceId),
            (F[9] = _))
          : (_ = F[9]),
        F[10] !== A || F[11] !== _
          ? ((S = { queryKey: A, staleTime: 0, queryFn: _ }), (F[10] = A), (F[11] = _), (F[12] = S))
          : (S = F[12]))
      let es = (0, l.I)(S),
        el = null != e.inviteTelemetry
      F[13] !== G || F[14] !== Q || F[15] !== el
        ? ((I = (0, x._)(G, Q, { finishAfterUnmount: el })), (F[13] = G), (F[14] = Q), (F[15] = el), (F[16] = I))
        : (I = F[16])
      let ed = I
      F[17] !== ed.queryKey || F[18] !== Q
        ? ((O = () => Q.getQueryState(ed.queryKey)?.dataUpdateCount ?? 0),
          (F[17] = ed.queryKey),
          (F[18] = Q),
          (F[19] = O))
        : (O = F[19])
      let [ec] = (0, c.useState)(O),
        { data: eu, error: em, isFetchedAfterMount: ef, refetch: eg } = (0, l.I)(ed),
        eh = ef && null == em ? eu : void 0,
        ey = "loading"
      null != em ? (ey = "error") : null != eh && (ey = "ready")
      let ex = es.data,
        ek = (0, g.n)(G.workspaceId, et, es),
        eC = (0, h.p9)(G.workspaceId, e.planType),
        ej = (0, r.ob)(ee?.email ?? X, ee?.email_domain_type, ek)
      ;((0, h.nU)(G.workspaceId, eC.enrolled && null != ej),
        F[20] !== X || F[21] !== ee?.email_domain_type || F[22] !== ex
          ? ((T = null == ex ? void 0 : (0, j._t)(ex.domains.filter(eb).map(ew), X, ee?.email_domain_type)),
            (F[20] = X),
            (F[21] = ee?.email_domain_type),
            (F[22] = ex),
            (F[23] = T))
          : (T = F[23]))
      let eA = T
      F[24] !== ec || F[25] !== ed.queryKey || F[26] !== Q || F[27] !== eg
        ? ((M = async function (e) {
            Q.getQueryState(ed.queryKey)?.fetchStatus === "fetching" && (await eg({ cancelRefetch: !1 }))
            let t = Q.getQueryState(ed.queryKey)
            return t?.status === "success" && t.dataUpdateCount > ec && null != t.data ? (0, j.QZ)(t.data, e) : void 0
          }),
          (F[24] = ec),
          (F[25] = ed.queryKey),
          (F[26] = Q),
          (F[27] = eg),
          (F[28] = M))
        : (M = F[28])
      let e_ = M,
        eS = H.enabled && U
      ;(F[29] !== G || F[30] !== H.enabled || F[31] !== H.query || F[32] !== e.inviteTelemetry?.checkoutSessionId
        ? ((E = H.enabled
            ? (0, a.jsx)(ep, {
                identity: G,
                checkoutSessionId: e.inviteTelemetry?.checkoutSessionId,
                query: H.query,
                onCopied: () => V(!0),
              })
            : void 0),
          (F[29] = G),
          (F[30] = H.enabled),
          (F[31] = H.query),
          (F[32] = e.inviteTelemetry?.checkoutSessionId),
          (F[33] = E))
        : (E = F[33]),
        F[34] !== G || F[35] !== $
          ? ((L = () => {
              ;(0, k.L)(G) &&
                (0, b.yy)($, o.we, {
                  action: o.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_DOMAIN_COMPLETION_ACCEPTED,
                  entryPoint: "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_OWNER_ONBOARDING",
                })
            }),
            (F[34] = G),
            (F[35] = $),
            (F[36] = L))
          : (L = F[36]))
      let eI = eC.treatment ? ej : void 0
      F[37] !== eo || F[38] !== H.enabled || F[39] !== eA
        ? ((N =
            H.enabled || null == eo
              ? void 0
              : {
                  enabled: !0 === eo.auto_accept_requests,
                  canEnable: !0 === eo.support_workspace_discovery && null != eA,
                }),
          (F[37] = eo),
          (F[38] = H.enabled),
          (F[39] = eA),
          (F[40] = N))
        : (N = F[40])
      let eO = !H.enabled && null != ea
      return (
        F[41] !== er
          ? ((R = () => {
              er()
            }),
            (F[41] = er),
            (F[42] = R))
          : (R = F[42]),
        F[43] !== G || F[44] !== $.query || F[45] !== $.queryClient
          ? ((P = async (e, t) => {
              ;((0, k.M)(G),
                await m.Request.safePost("/accounts/{account_id}/settings/auto_accept_requests", {
                  parameters: { path: { account_id: G.workspaceId } },
                  expectedIdentity: { accountId: G.workspaceId, userId: G.userId },
                  requestBody: { value: e },
                  signal: t,
                }),
                (0, k.M)(G))
              let n = $.query.getData(C.j, G)
              ;(null != n && $.query.setData(C.j, G, { ...n, auto_accept_requests: e }),
                $.queryClient.invalidateQueries({ queryKey: ["workspace-settings", G.workspaceId] }))
            }),
            (F[43] = G),
            (F[44] = $.query),
            (F[45] = $.queryClient),
            (F[46] = P))
          : (P = F[46]),
        F[47] !== eg
          ? ((D = async () => {
              let e = await eg()
              return e.isSuccess ? e.data : void 0
            }),
            (F[47] = eg),
            (F[48] = D))
          : (D = F[48]),
        F[49] !== G || F[50] !== e.inviteTelemetry || F[51] !== e.onSubmissionStarted || F[52] !== Q || F[53] !== $
          ? ((q = (t, n) =>
              (async function ({
                identity: e,
                queryClient: t,
                inputRows: n,
                signal: a,
                onSubmissionStarted: i,
                onSubmission: r,
              }) {
                let o
                function s() {
                  ;(a.throwIfAborted(), (0, k.M)(e))
                }
                let l = [...n],
                  d = (0, x._)(e, t)
                for (let n of ["default", "prolite"]) {
                  let c = l.filter((e) => e.seatType === n && !(0, j.Tn)(e))
                  for (let u = 0; u < c.length; u += 50) {
                    let p
                    s()
                    try {
                      p = await t.fetchQuery(d)
                    } catch {
                      return { rows: l, error: "read" }
                    }
                    ;(s(), (l = (0, j.zf)(l, p)))
                    let v = (0, j.L8)(p, l)
                    for (let e of ["default", "prolite"]) {
                      let t = l.filter((t) => t.seatType === e && (0, j.q$)(t, p)).length,
                        n = v[e]
                      if (t > 0 && (null == n || t > n)) return { rows: l, error: "capacity" }
                    }
                    let f = new Set(c.slice(u, u + 50).map((e) => e.email)),
                      g = l.filter((e) => f.has(e.email) && (0, j.q$)(e, p)).map((e) => e.email)
                    if (0 === g.length) continue
                    ;(s(), i?.(), null == o && ((o = crypto.randomUUID()), r?.(o, (0, j.QZ)(p, l))))
                    let h = new Set(g)
                    l = l.map((e) => (h.has(e.email) ? { ...e, status: "uncertain" } : e))
                    try {
                      let t = await m.Request.safePost("/accounts/{account_id}/invites", {
                        signal: a,
                        parameters: { path: { account_id: e.workspaceId } },
                        expectedIdentity: { accountId: e.workspaceId, userId: e.userId },
                        requestBody: {
                          email_addresses: g,
                          role: "standard-user",
                          seat_type: n,
                          resend_emails: !1,
                          submission_id: o,
                        },
                      })
                      s()
                      let i = new Map(
                          t.account_invites
                            .filter((e) => [2, 3, 5, 6].includes(e.status))
                            .flatMap((e) =>
                              null == e.email_address ? [] : [[e.email_address.trim().toLowerCase(), e.id]],
                            ),
                        ),
                        r = new Set((t.already_member_emails ?? []).map((e) => e.trim().toLowerCase())),
                        d = new Set(t.errored_emails.map((e) => e.email_address.trim().toLowerCase()))
                      l = l.map((e) =>
                        h.has(e.email)
                          ? r.has(e.email)
                            ? { ...e, status: "member" }
                            : d.has(e.email)
                              ? { ...e, status: "failed", pendingInviteId: i.get(e.email) ?? e.pendingInviteId }
                              : i.has(e.email)
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
                identity: G,
                queryClient: Q,
                inputRows: t,
                signal: n,
                onSubmissionStarted: e.onSubmissionStarted,
                onSubmission: (t, n) => {
                  ;(0, w.mc)($, e.inviteTelemetry, "workspace_invite_submission_started", n, t)
                },
              })),
            (F[49] = G),
            (F[50] = e.inviteTelemetry),
            (F[51] = e.onSubmissionStarted),
            (F[52] = Q),
            (F[53] = $),
            (F[54] = q))
          : (q = F[54]),
        F[55] !== e.inviteTelemetry || F[56] !== e_ || F[57] !== $
          ? ((z = (t) => {
              ;(0, w.d_)($, e.inviteTelemetry, () => e_(t))
            }),
            (F[55] = e.inviteTelemetry),
            (F[56] = e_),
            (F[57] = $),
            (F[58] = z))
          : (z = F[58]),
        F[59] !== G || F[60] !== e
          ? ((K = async (t) => {
              ;((0, k.M)(G), await e.onContinue(t))
            }),
            (F[59] = G),
            (F[60] = e),
            (F[61] = K))
          : (K = F[61]),
        F[62] !== G
          ? ((W = (e) => {
              ;(0, k.M)(G)
              let t = new URL("/admin/members", v.e)
              ;(t.searchParams.set("account_id", G.workspaceId),
                (0, f.PQ)({
                  event: e,
                  href: t.toString(),
                  disposition: "new-tab",
                  initiator: "open_in_browser_bridge",
                }))
            }),
            (F[62] = G),
            (F[63] = W))
          : (W = F[63]),
        F[64] !== eC.treatment ||
        F[65] !== ek ||
        F[66] !== eh ||
        F[67] !== e.continueLabel ||
        F[68] !== e.isAdvancePending ||
        F[69] !== e.onPendingChange ||
        F[70] !== ey ||
        F[71] !== eA ||
        F[72] !== eS ||
        F[73] !== E ||
        F[74] !== L ||
        F[75] !== eI ||
        F[76] !== N ||
        F[77] !== eO ||
        F[78] !== R ||
        F[79] !== P ||
        F[80] !== D ||
        F[81] !== q ||
        F[82] !== z ||
        F[83] !== K ||
        F[84] !== W
          ? ((B = (0, a.jsx)(Z, {
              linkCopied: eS,
              inviteLink: E,
              suggestedDomain: eA,
              onCompletionAccepted: L,
              completionPolicy: ek,
              completionTreatment: eC.treatment,
              completionDomain: eI,
              autoApprove: N,
              autoApproveReadError: eO,
              onRetryAutoApprove: R,
              onAutoApproveChange: P,
              inventory: eh,
              readState: ey,
              continueLabel: e.continueLabel,
              isAdvancePending: e.isAdvancePending,
              onPendingChange: e.onPendingChange,
              onRefreshInventory: D,
              onSend: q,
              onSkip: z,
              onContinue: K,
              onManageInvitations: W,
            })),
            (F[64] = eC.treatment),
            (F[65] = ek),
            (F[66] = eh),
            (F[67] = e.continueLabel),
            (F[68] = e.isAdvancePending),
            (F[69] = e.onPendingChange),
            (F[70] = ey),
            (F[71] = eA),
            (F[72] = eS),
            (F[73] = E),
            (F[74] = L),
            (F[75] = eI),
            (F[76] = N),
            (F[77] = eO),
            (F[78] = R),
            (F[79] = P),
            (F[80] = D),
            (F[81] = q),
            (F[82] = z),
            (F[83] = K),
            (F[84] = W),
            (F[85] = B))
          : (B = F[85]),
        B
      )
    }
    function ew(e) {
      return e.hostname
    }
    function eb(e) {
      return "verified" === e.status
    }
  },
  KpEg(e, t, n) {
    var a = n("zTeN"),
      i = n("CLax"),
      r = n("OiCI"),
      o = n("SPnB"),
      s = n("Ghh3"),
      l = n("OWtl"),
      d = n("zdnx")
    let c = (0, a.vU)(l.u, (e, { get: t }) => ({
        queryKey: ["owner-onboarding", "workspace-settings", e.userId, e.workspaceId],
        enabled: t(o.o8) === e.userId && t(r.Sk) === e.workspaceId,
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
      u = (0, a.vU)(l.u, (e, { get: t, scope: n }) => ({
        queryKey: ["owner-onboarding", "workspace", e.userId, e.workspaceId],
        enabled: t(o.o8) === e.userId && t(r.Sk) === e.workspaceId,
        staleTime: 0,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async ({ signal: t }) => {
          ;(0, d.M)(e)
          let [a, r, o] = await Promise.all([
            n.queryClient.fetchQuery({ ...n.query.getOptions(i.sE, e.workspaceId), staleTime: 0 }),
            s.Request.safeGet("/accounts/{account_id}/onboarding_metadata", {
              parameters: { path: { account_id: e.workspaceId } },
              additionalHeaders: { "ChatGPT-Account-ID": e.workspaceId },
              signal: t,
            }),
            n.queryClient.fetchQuery(n.query.getOptions(c, e)),
          ])
          ;(0, d.M)(e)
          let l = a.accounts[e.workspaceId]?.account
          if (null == l || l.account_id !== e.workspaceId || "account-owner" !== l.account_user_role)
            throw Error("Owner workspace access unavailable")
          return { account: l, metadata: r, settings: o }
        },
      }))
    n.d(
      t,
      {},
      {
        j: c,
        prepareOwnerWorkspacePage: async function (e, t) {
          await e.queryClient.fetchQuery(e.query.getOptions(u, t))
        },
        y: u,
      },
    )
  },
  gWdV(e, t, n) {
    var a = n("S2r0")
    n.d(
      t,
      {},
      {
        _: function (e, t, { finishAfterUnmount: i = !1 } = {}) {
          return (0, a.j)({
            queryKey: ["workspace-owner-invitations", e.userId, e.workspaceId],
            queryFn: async (a) => {
              let r = i ? void 0 : a.signal,
                { readInvitationInventory: o } = await n.e(14459).then(n.bind(n, "VQa3"))
              return o(e, t, r)
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
}
//# sourceMappingURL=696716.eb951d6a77.js.map
