export const __rspack_esm_ids = [867815]
export const __webpack_modules__ = {
  BPFy(e, t, n) {
    var l = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, l.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, l.jsx)("path", { d: "M3.25 3.25H11.25V11.25H3.25V3.25Z", fill: "#F35325" }),
            (0, l.jsx)("path", { d: "M12.75 3.25H20.75V11.25H12.75V3.25Z", fill: "#81BC06" }),
            (0, l.jsx)("path", { d: "M3.25 12.75H11.25V20.75H3.25V12.75Z", fill: "#05A6F0" }),
            (0, l.jsx)("path", { d: "M12.75 12.75H20.75V20.75H12.75V12.75Z", fill: "#FFBA08" }),
          ],
        })))
  },
  bm6U(e, t, n) {
    var l = n("ABep")
    n.d(
      t,
      {},
      {
        X: (e) =>
          (0, l.jsx)("svg", {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e,
            children: (0, l.jsx)("path", {
              fillRule: "evenodd",
              d: "M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414Z",
              clipRule: "evenodd",
            }),
          }),
      },
    )
  },
  crcI(e, t, n) {
    n.d(t, { Y: () => m })
    var l = n("ABep"),
      r = n("on57"),
      a = n("zd8w"),
      i = n("UIGa"),
      o = n("pZwg"),
      s = n("fZ4G"),
      c = n("hwkA")
    let d = (e) =>
        (0, l.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 9",
          fill: "currentColor",
          ...e,
          children: (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292894C14.6834 -0.0976305 15.3166 -0.0976304 15.7071 0.292894C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z",
          }),
        }),
      u = (e) =>
        (0, l.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 10 16",
          fill: "currentColor",
          ...e,
          children: (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.34151 0.747423C4.71854 0.417526 5.28149 0.417526 5.65852 0.747423L9.65852 4.24742C10.0742 4.61111 10.1163 5.24287 9.75259 5.6585C9.38891 6.07414 8.75715 6.11626 8.34151 5.75258L5.00001 2.82877L1.65852 5.75258C1.24288 6.11626 0.61112 6.07414 0.247438 5.6585C-0.116244 5.24287 -0.0741267 4.61111 0.34151 4.24742L4.34151 0.747423ZM0.246065 10.3578C0.608879 9.94139 1.24055 9.89795 1.65695 10.2608L5.00001 13.1737L8.34308 10.2608C8.75948 9.89795 9.39115 9.94139 9.75396 10.3578C10.1168 10.7742 10.0733 11.4058 9.65695 11.7687L5.65695 15.2539C5.28043 15.582 4.7196 15.582 4.34308 15.2539L0.343082 11.7687C-0.0733128 11.4058 -0.116749 10.7742 0.246065 10.3578Z",
          }),
        })
    var g = n("bm6U"),
      f = n("WjNJ"),
      p = "DropdownIcon-hjJBCI"
    let m = ({
        ref: e,
        onPointerDown: t,
        onKeyDown: n,
        onPointerEnter: d,
        onInteract: u,
        invalid: p,
        disabled: m,
        children: x,
        className: b,
        variant: y = "outline",
        size: v = "md",
        block: w,
        disablePressable: j,
        opticallyAlign: S,
        pill: k = o.N.pill,
        loading: A,
        onClearClick: C,
        selected: _ = !1,
        StartIcon: M,
        dropdownIconType: N = "dropdown",
        ...I
      }) => {
        let E = (0, a.useRef)(null),
          L = !!C && _ && !A && !m,
          R = N && "none" !== N && !A,
          P = L || A || R,
          D = !A && !m
        return (0, l.jsxs)("span", {
          ref: (0, i.P)([E, e]),
          className: (0, r.A)("SelectControl-GhTNXd", b),
          role: "button",
          tabIndex: m ? -1 : 0,
          onPointerEnter: (e) => {
            ;(j || (0, s.Ny)(e), d?.(e))
          },
          onPointerDown: D
            ? (e) => {
                2 !== e.button && ((e.stopPropagation(), u) ? (e.preventDefault(), u()) : (t?.(e), I.onClick?.(e)))
              }
            : void 0,
          onKeyDown: D
            ? (e) => {
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                  case " ":
                    ;(e.stopPropagation(),
                      e.preventDefault(),
                      u
                        ? u()
                        : E.current?.dispatchEvent(
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
          "data-block": w ? "" : void 0,
          "data-disable-pressable": j ? "" : void 0,
          "data-pill": k ? "" : void 0,
          "data-size": v,
          "data-optically-align": S,
          "aria-busy": A ? "true" : void 0,
          "data-selected": _,
          "data-loading": A ? "" : void 0,
          "data-invalid": p ? "" : void 0,
          "data-disabled": m ? "" : void 0,
          "aria-disabled": m,
          ...I,
          onClick: void 0,
          children: [
            M && (0, l.jsx)(M, { className: "StartIcon-Ja6YRO" }),
            (0, l.jsx)("span", { className: "TriggerText-KJGu4X", children: x }),
            P &&
              (0, l.jsxs)("div", {
                className: "IndicatorWrapper-pRcpwW",
                children: [
                  L &&
                    (0, l.jsx)(c.$, {
                      "aria-label": "Clear current value",
                      className: "Clear-rIcDRI",
                      onPointerDown: (e) => {
                        e.stopPropagation()
                      },
                      onClick: (e) => {
                        ;(e.stopPropagation(), e.preventDefault(), C())
                      },
                      color: "secondary",
                      variant: R ? "ghost" : "solid",
                      size: "3xs",
                      uniform: !0,
                      pill: k,
                      "data-only-child": R ? void 0 : "",
                      children: (0, l.jsx)(g.X, {}),
                    }),
                  A && (0, l.jsx)(f.I, { className: "LoadingIndicator-zQ4zI3" }),
                  R && (0, l.jsx)(h, { iconType: N }),
                ],
              }),
          ],
        })
      },
      h = ({ iconType: e }) =>
        "chevronDown" === e
          ? (0, l.jsx)(d, { className: (0, r.A)(p, "DropdownIconChevron-sAyN5s") })
          : (0, l.jsx)(u, { className: p })
  },
  AEu9(e, t, n) {
    n.d(t, { l: () => D })
    var l = n("ABep"),
      r = n("on57"),
      a = n("YLKE"),
      i = n("zd8w"),
      o = n("pZwg"),
      s = n("BAKu"),
      c = n("We8q")
    function d(e) {
      let t = (0, i.useRef)(e)
      return ((t.current = e), (0, i.useCallback)((...e) => t.current(...e), []))
    }
    var u = n("o4M9"),
      g = n("fZ4G"),
      f = n("hwkA"),
      p = n("EYJV"),
      m = n("cfIY")
    let h = (e) =>
        (0, l.jsxs)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: [
            (0, l.jsx)("path", {
              d: "M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm-1-2.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5Z",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
              clipRule: "evenodd",
            }),
          ],
        }),
      x = (e) =>
        (0, l.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.875 4.5C7.35418 4.5 4.5 7.35418 4.5 10.875C4.5 14.3958 7.35418 17.25 10.875 17.25C14.3958 17.25 17.25 14.3958 17.25 10.875C17.25 7.35418 14.3958 4.5 10.875 4.5ZM2.5 10.875C2.5 6.24962 6.24962 2.5 10.875 2.5C15.5004 2.5 19.25 6.24962 19.25 10.875C19.25 12.8273 18.582 14.6236 17.462 16.0478L21.2071 19.7929C21.5976 20.1834 21.5976 20.8166 21.2071 21.2071C20.8166 21.5976 20.1834 21.5976 19.7929 21.2071L16.0478 17.462C14.6236 18.582 12.8273 19.25 10.875 19.25C6.24962 19.25 2.5 15.5004 2.5 10.875Z",
            fill: "currentColor",
          }),
        })
    var b = n("bm6U"),
      y = n("Z0qE"),
      v = n("crcI"),
      w = n("UIGa")
    let j = ({ label: e }) => (0, l.jsx)(l.Fragment, { children: e }),
      S = (e) => `Remove ${e.label}`,
      k = ({
        tags: e,
        onRemoveTag: t,
        TagView: n = j,
        getRemoveLabel: a = S,
        ref: o,
        className: s,
        inputClassName: c,
        disabled: d,
        placeholder: u,
        onKeyDown: g,
        startAdornment: f,
        ...p
      }) => {
        let m = (0, i.useRef)(null),
          h = (0, i.useRef)(new Map()),
          x = (t) => {
            let n = e[t]
            n ? h.current.get(n.value)?.focus({ preventScroll: !0 }) : m.current?.focus({ preventScroll: !0 })
          },
          v = (e) => {
            ;(t(e), m.current?.focus({ preventScroll: !0 }))
          }
        return (0, l.jsx)(y.p, {
          ...p,
          ref: (0, w.P)([m, o]),
          className: (0, r.A)("Container-ii4nGw", s),
          inputClassName: (0, r.A)("Input-TqEwAO", c),
          disabled: d,
          placeholder: 0 === e.length ? u : void 0,
          startAdornment: (0, l.jsxs)(l.Fragment, {
            children: [
              f,
              e.map((e, t) =>
                (0, l.jsxs)(
                  "div",
                  {
                    ref: (t) => {
                      t ? h.current.set(e.value, t) : h.current.delete(e.value)
                    },
                    className: "Tag-zH19Nb",
                    tabIndex: -1,
                    role: "group",
                    "aria-label": e.label,
                    onClick: () => {
                      d || x(t)
                    },
                    onKeyDown: (n) => {
                      if (!d && n.target === n.currentTarget && !n.nativeEvent.isComposing)
                        switch (n.key) {
                          case "ArrowLeft":
                            ;(n.preventDefault(), x(Math.max(0, t - 1)))
                            break
                          case "ArrowRight":
                            ;(n.preventDefault(), x(t + 1))
                            break
                          case "Backspace":
                          case "Delete":
                            ;(n.preventDefault(), v(e))
                        }
                    },
                    children: [
                      (0, l.jsx)("span", { className: "TagValue-uql1s_", children: (0, l.jsx)(n, { ...e }) }),
                      (0, l.jsx)("button", {
                        className: "TagRemove-Jvbgpl",
                        type: "button",
                        tabIndex: -1,
                        disabled: d,
                        "aria-label": a(e),
                        onClick: (t) => {
                          ;(t.stopPropagation(), v(e))
                        },
                        children: (0, l.jsx)(b.X, { width: 14, height: 14 }),
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
              ;(t.preventDefault(), x(e.length - 1))
              return
            }
            g?.(t)
          },
        })
      }
    var A = n("slpy"),
      C = n("DL3o"),
      _ = "Option-Tm0uqE",
      M = "PressableInner-EsxCsQ",
      N = "OptionInner-dam4fB"
    let I = (0, i.createContext)(null),
      E = () => {
        let e = (0, i.use)(I)
        if (!e) throw Error("Select components must be wrapped in <Select />")
        return e
      },
      L = ({ label: e }) => (0, l.jsx)(l.Fragment, { children: e }),
      R = ({ label: e }) => (0, l.jsx)(l.Fragment, { children: e }),
      P = ({ values: e, selectedAll: t }) => {
        let n = t
          ? "All selected"
          : 0 === e.length
            ? "Select..."
            : 1 === e.length
              ? e[0]?.label
              : `${e.length} selected`
        return (0, l.jsx)(l.Fragment, { children: n })
      },
      D = (e) => {
        let {
            id: t,
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": a,
            required: s,
            value: g,
            name: f,
            multiple: p,
            variant: m = "outline",
            size: h = "md",
            dropdownIconType: x = "dropdown",
            loading: b = !1,
            open: y,
            onOpenChange: v,
            clearable: w = !1,
            disabled: j = !1,
            invalid: S = !1,
            placeholder: k = "Select...",
            loadingPlaceholder: A = "Loading...",
            pill: C = o.N.pill,
            disablePressable: _,
            listWidth: M,
            options: N,
            pagination: E,
            footer: D,
            actions: T = [],
            side: z = "bottom",
            avoidCollisions: O = !0,
            onChange: U,
            optionClassName: G,
            optionIndicatorPosition: V = "start",
            OptionView: F = L,
            TriggerStartIcon: q,
            endAdornment: $,
            triggerClassName: H,
            onTriggerClickCapture: Z,
            opticallyAlign: Y,
            TriggerView: X,
            searchPlaceholder: J = "",
            searchValue: Q,
            searchPredicate: ee = er,
            searchEmptyMessage: et = "No results found.",
            onSearchChange: en,
            searchable: el,
            listMaxWidth: ea = "auto",
            __isWidget: ei = !1,
            forceNativeSelect: eo = !1,
          } = e,
          ec = e.block ?? "ghost" !== m,
          ed = e.align ?? (ec ? "center" : "start"),
          eu = e.alignOffset ?? ("center" === ed ? 0 : -5),
          eg = e.listMinWidth ?? (ec ? "auto" : 300)
        if (eo && p && u.Cu) throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.")
        let ef = p ? (e.selectedOptions ?? es(N, g)) : es(N, [g]),
          ep = p ? e.getTagRemoveLabel : void 0,
          em = (0, c.Y)((e, t) => {
            p ? (e.value ? (t ? U(ef.filter((t) => t.value !== e.value)) : U(ef.concat(e))) : U([])) : U(e)
          }),
          eh = d((e) => v?.(e)),
          ex = v ? eh : void 0,
          eb = d((e) => en?.(e)),
          ey = en ? eb : void 0,
          ev = d((e) => Z?.(e)),
          ew = Z ? ev : void 0,
          ej = (0, i.useRef)(ee)
        ej.current = ee
        let eS = (0, i.useMemo)(() => T, [T.length]),
          ek = (0, i.useRef)(T)
        ek.current = T
        let eA = (0, i.useCallback)((e) => {
            ek.current.find((t) => t.id === e)?.onSelect(e)
          }, []),
          eC = (0, i.useMemo)(() => (W(N) ? N.reduce((e, t) => e + t.options.length, 0) : N.length), [N]),
          e_ = (0, i.useId)(),
          eM = `select-trigger-${e_}`,
          eN = el ?? eC > 15,
          eI = (0, i.useMemo)(() => ({ "aria-label": n, "aria-labelledby": r, "aria-describedby": a }), [a, n, r]),
          eE = (0, i.useMemo)(
            () =>
              p ? { multiple: !0, value: g, TriggerView: X ?? P } : { multiple: !1, value: g, TriggerView: X ?? R },
            [p, g, X],
          ),
          eL = (0, i.useMemo)(
            () => ({
              ...eE,
              triggerId: eM,
              id: t,
              name: f,
              required: s,
              options: N,
              pagination: E,
              selectedOptions: ef,
              getTagRemoveLabel: ep,
              endAdornment: $,
              placeholder: k,
              loadingPlaceholder: A,
              loading: b,
              open: y,
              onOpenChange: ex,
              clearable: w,
              variant: m,
              pill: C,
              disablePressable: _,
              size: h,
              dropdownIconType: x,
              block: ec,
              align: ed,
              alignOffset: eu,
              side: z,
              avoidCollisions: O,
              listWidth: M,
              listMinWidth: eg,
              listMaxWidth: ea,
              searchPlaceholder: J,
              searchEmptyMessage: et,
              onSearchChange: ey,
              TriggerStartIcon: q,
              triggerClassName: H,
              onTriggerClickCapture: ew,
              opticallyAlign: Y,
              optionClassName: G,
              optionIndicatorPosition: V,
              OptionView: F,
              footer: D,
              actions: eS,
              onActionSelect: eA,
              onSelectRef: em,
              searchPredicateRef: ej,
              searchable: eN,
              disabled: j,
              invalid: S,
              __isWidget: ei,
              forceNativeSelect: eo,
            }),
            [
              eE,
              eM,
              t,
              s,
              f,
              N,
              E,
              ef,
              ep,
              $,
              k,
              A,
              b,
              y,
              ex,
              w,
              m,
              C,
              _,
              h,
              x,
              ec,
              ed,
              eu,
              z,
              O,
              M,
              eg,
              ea,
              J,
              et,
              ey,
              q,
              H,
              ew,
              Y,
              G,
              V,
              F,
              D,
              eS,
              eA,
              em,
              eN,
              j,
              S,
              ei,
              eo,
            ],
          )
        return (0, l.jsx)(I.Provider, {
          value: eL,
          children: eo ? (0, l.jsx)(K, { ariaProps: eI }) : (0, l.jsx)(B, { ariaProps: eI, searchValue: Q }),
        })
      },
      T = (e) => {
        let {
            triggerId: t,
            id: n,
            required: r,
            value: a,
            multiple: o,
            options: s,
            selectedOptions: c,
            loading: d,
            disabled: u,
            invalid: g,
            clearable: f,
            name: p,
            variant: m,
            pill: h,
            disablePressable: x,
            size: b,
            dropdownIconType: y,
            placeholder: w,
            loadingPlaceholder: j,
            block: S,
            opticallyAlign: k,
            triggerClassName: A,
            onTriggerClickCapture: C,
            TriggerStartIcon: _,
            TriggerView: M,
            onSelectRef: N,
            __isWidget: I,
            forceNativeSelect: L,
          } = E(),
          { onOpenChange: R, ariaProps: P, ...D } = e,
          T = P?.["aria-label"],
          K = P?.["aria-labelledby"],
          z = P?.["aria-describedby"],
          O = o ? a[0] : a,
          B = d ? j : w,
          U = (p || n) && !L,
          G = (0, i.useId)(),
          V = (0, i.useId)(),
          F = (0, i.useMemo)(() => eo(s, O) || { value: "", label: B }, [O, s, B]),
          W = o ? a.length > 0 : !!a,
          q = d || !W,
          $ = (0, i.useMemo)(() => ef(), []),
          H = (0, i.useMemo)(() => {
            if (!o) return { values: [], selectedAll: !1 }
            let e = s.flatMap((e) => ("options" in e ? e.options : e))
            return {
              values: c.length ? c : [{ value: "", label: B }],
              selectedAll: e.length > 0 && e.length <= a.length,
            }
          }, [o, s, c, a, B]),
          Z = (0, i.useMemo)(() => (K ? `${K} ${G}` : T ? `${V} ${G}` : void 0), [V, T, K, G])
        return (0, l.jsxs)(v.Y, {
          id: t,
          "aria-labelledby": Z,
          "aria-describedby": z,
          className: A,
          selected: !q,
          variant: m,
          pill: h,
          disablePressable: x,
          block: S,
          size: b,
          disabled: u,
          invalid: g,
          loading: d,
          StartIcon: _,
          opticallyAlign: k,
          onClickCapture: C,
          dropdownIconType: y,
          onClearClick: f
            ? () => {
                ;(N.current({ value: "", label: "" }), R?.(!1))
              }
            : void 0,
          onInteract: R,
          onKeyDown: (e) => {
            let t = e.key
            if (!o && ep(t)) {
              let n = $(t)
              e.stopPropagation()
              let l = em(s, n, O)
              l && N.current(l)
            }
          },
          "data-w-component": I ? "select" : void 0,
          ...D,
          children: [
            T &&
              !K &&
              (0, l.jsx)("span", {
                id: V,
                className: "sr-only w-full h-0 left-0 bottom-0 pointer-events-none",
                children: T,
              }),
            (0, l.jsx)("span", { id: G, children: o ? (0, l.jsx)(M, { ...H }) : (0, l.jsx)(M, { ...F }) }),
            U &&
              (0, l.jsx)("input", {
                id: n,
                name: p,
                value: O,
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
      K = ({ ariaProps: e }) => {
        let {
          value: t,
          multiple: n,
          name: a,
          options: i,
          placeholder: o,
          block: s,
          loading: c,
          onSelectRef: d,
          onTriggerClickCapture: u,
        } = E()
        if (n) throw Error("Rendered native select while using `multiple` selection mode.")
        return (0, l.jsx)("div", {
          className: "flex min-w-0",
          children: (0, l.jsxs)("div", {
            className: (0, r.A)("relative max-w-full", s && "w-full"),
            children: [
              (0, l.jsxs)("select", {
                name: a,
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
                  let t = eo(i, e.target.value)
                  t && d.current(t)
                },
                disabled: c,
                "data-native-selectcontrol": "",
                children: [
                  !t && (0, l.jsx)("option", { value: "", children: o }),
                  i.map((e) => (F(e) ? (0, l.jsx)(z, { ...e }, e.label) : (0, l.jsx)(O, { ...e }, e.value))),
                ],
              }),
              (0, l.jsx)(T, { ariaProps: e, tabIndex: -1, "aria-hidden": "true" }),
            ],
          }),
        })
      },
      z = ({ label: e, options: t }) =>
        (0, l.jsx)("optgroup", { label: e, children: t.map((e) => (0, l.jsx)(O, { ...e }, e.value)) }),
      O = ({ value: e, label: t, disabled: n }) => (0, l.jsx)("option", { value: e, disabled: n, children: t }),
      B = ({ ariaProps: e, searchValue: t }) => {
        let {
            triggerId: n,
            loading: r,
            open: d,
            onOpenChange: u,
            side: f,
            align: m,
            alignOffset: h,
            avoidCollisions: x,
            listWidth: b,
            listMinWidth: y,
            listMaxWidth: v,
            block: w,
            onTriggerClickCapture: j,
            multiple: S,
            value: k,
            options: A,
            pagination: _,
            searchable: M,
            searchPredicateRef: N,
            onSearchChange: I,
            footer: L,
          } = E(),
          [R, P] = (0, i.useState)(!1),
          D = (0, i.useRef)(null),
          K = (0, i.useRef)(null),
          z = (0, p.jS)(),
          O = (0, c.Y)(() => {
            ;(Y(""), I?.(""))
          }),
          B = (0, c.Y)(() => ek(!1)),
          G = (0, i.useRef)(null),
          F = (0, i.useRef)(null),
          W = (0, i.useRef)(null),
          q = (0, i.useRef)(!1),
          H = (0, i.useRef)(null),
          [Z, Y] = (0, i.useState)(""),
          X = M ? (t ?? Z) : "",
          J = (0, i.useRef)(X),
          Q = (0, i.useRef)(null),
          ee = _?.mode === "manual" && _.isFetching,
          et = !M || !!L || !I || A.some((e) => !("options" in e) || e.options.length > 0),
          el = et || !!X.trim(),
          er = (d ?? R) && el,
          es = (0, i.useMemo)(() => ef(), []),
          ed = (0, i.useId)(),
          eh = `select-list-${ed}`,
          ex = (0, i.useRef)(S ? "" : k),
          eb = (0, i.useMemo)(() => ea(A, X, N.current), [A, X, N]),
          ey = ei(eb),
          [ev, ew] = (0, i.useState)(() => {
            let e = S ? k[0] : k
            return eo(eb, e)?.value ?? ey?.value ?? ""
          }),
          ej = (e) => {
            if (e.nativeEvent.isComposing) return
            let t = e.key,
              n = S ? k[0] : k,
              l = ev || ey?.value || n,
              r = document.activeElement === W.current,
              a = G.current
            if (!a) return
            let i = () => {
                let e = new PointerEvent("pointerup", { bubbles: !0, cancelable: !0, pointerType: "mouse" }),
                  t = ec(ev, a)
                t?.dispatchEvent(e)
              },
              o = (e, t) => {
                ;(ew(e), t.scrollIntoView({ block: "nearest" }))
              },
              s = () => {
                let e = S ? k[0] : k
                if (e) {
                  let t = ec(e, a)
                  if (t) return void o(e, t)
                }
                if (ey) {
                  let e = ec(ey.value, a)
                  e && o(ey.value, e)
                }
              }
            switch (t) {
              case "ArrowDown": {
                if ((e.preventDefault(), !ev || !ec(ev, a))) return void s()
                let t = eu(ev, a),
                  n = t?.getAttribute("data-option-id")
                t && n && o(n, t)
                return
              }
              case "ArrowUp": {
                if ((e.preventDefault(), !ev || !ec(ev, a))) return void s()
                let t = eg(l, a),
                  n = t?.getAttribute("data-option-id")
                t && n && o(n, t)
                return
              }
              case "Enter":
                ;(e.preventDefault(), i())
                return
              case " ":
                if (r) return
                ;(e.preventDefault(), i())
                return
            }
            if (ep(t)) {
              if (r) return
              let n = es(t)
              e.stopPropagation()
              let l = em(A, n, ev)
              if (l) {
                let e = ec(l.value, a)
                e && (ew(l.value), e.scrollIntoView({ block: "nearest" }))
              }
            }
          },
          eS = (0, i.useMemo)(
            () => ({
              valueRef: ex,
              listId: eh,
              highlightedValue: ev,
              setHighlightedValue: ew,
              requestCloseRef: B,
              resetSearchRef: O,
              searchTerm: X,
              listRef: F,
            }),
            [eh, ev, X, B, O],
          )
        ;((0, i.useLayoutEffect)(() => {
          if (!er) return
          ;((ex.current = S ? "" : k),
            ew(eo(eb, S ? k[0] : k)?.value ?? ey?.value ?? ""),
            (0, g.yQ)(() => {
              let e = G.current,
                t = F.current
              if (!e || !t) return
              let n = ec(ev, t)
              if (n) {
                let e = t.clientHeight,
                  l = n.offsetTop,
                  r = n.offsetHeight,
                  a = t.scrollHeight - e
                t.scrollTop = Math.max(0, Math.min(l - e / 2 + r / 2, a))
              }
            }))
          let e = W.current || F.current || G.current
          e?.focus({ preventScroll: !0 })
        }, [er]),
          (0, i.useLayoutEffect)(() => {
            er || (Q.current = null)
          }, [er]),
          (0, i.useLayoutEffect)(() => {
            let e = null != _ && J.current === X
            if (((J.current = X), !er || !F.current)) {
              Q.current = null
              return
            }
            if (_?.mode === "manual") {
              let e = eb.flatMap((e) => ("options" in e ? e.options : [e]))
              if (_.isFetching && !Q.current)
                Q.current = { values: new Set(e.map((e) => e.value)), searchTerm: X, highlightedValue: ev }
              else if (!_.isFetching && Q.current) {
                let t = Q.current
                Q.current = null
                let n = document.activeElement,
                  l = n === W.current || n === F.current || n === G.current,
                  r =
                    t.searchTerm === X && t.highlightedValue === ev
                      ? e.find((e) => !e.disabled && !t.values.has(e.value))
                      : void 0
                if (l && r) {
                  ew(r.value)
                  let e = ec(r.value, F.current)
                  if (e) {
                    let t = e.getBoundingClientRect(),
                      n = F.current.getBoundingClientRect()
                    t.top < n.top
                      ? (F.current.scrollTop -= n.top - t.top)
                      : t.bottom > n.bottom && (F.current.scrollTop += t.bottom - n.bottom)
                  }
                }
                if ((l && t.searchTerm === X && (W.current ?? F.current)?.focus({ preventScroll: !0 }), l && r)) return
              }
            } else Q.current = null
            let t = eo(eb, ev)
            ;(e && t && !t.disabled) || (e || (F.current.scrollTop = 0), ew(ei(eb)?.value ?? ""))
          }, [eb, X, null != _, ee]))
        let ek = (e) => {
          let t = (void 0 === e ? !er : e) && el
          if (t === er) return
          let l = !!D.current?.contains(document.activeElement)
          ;(!t && (Y(""), X && I?.("")),
            void 0 === d && P(t),
            u?.(t),
            t ||
              setTimeout(() => {
                let e = document.activeElement,
                  t = !!D.current?.contains(e),
                  r = l && e === document.body
                ;(t || r) &&
                  ((q.current = !0), document.getElementById(n)?.focus({ preventScroll: !0 }), (q.current = !1))
              }))
        }
        return (
          (0, s.r)(er, () => {
            ek(!1)
          }),
          (0, l.jsx)(U, {
            value: eS,
            children: (0, l.jsxs)(a.bL, {
              open: er,
              onOpenChange: (e) => {
                ;(r && e) || ek(e)
              },
              modal: !1,
              children: [
                M
                  ? (0, l.jsx)(a.Mz, {
                      asChild: !0,
                      children: (0, l.jsx)("div", {
                        ref: K,
                        className: "SearchControl-Vayh_U",
                        "data-block": w ? "" : void 0,
                        onClickCapture: j,
                        children: (0, l.jsx)(V, {
                          ariaProps: e,
                          searchInputRef: W,
                          open: er,
                          searchTerm: X,
                          onOpen: () => {
                            q.current || ek(!0)
                          },
                          onKeyDown: (e) => {
                            if (er && L && "Tab" === e.key && !e.shiftKey) {
                              let t = D.current?.querySelector("[data-select-footer]")
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
                                  ;((H.current = n), e.preventDefault())
                                  return
                                }
                            }
                            er || ("ArrowDown" !== e.key && "ArrowUp" !== e.key)
                              ? er && ej(e)
                              : (e.preventDefault(), ek(!0))
                          },
                          onChange: (e) => {
                            let t = et || !!e.trim()
                            er && !t ? ek(!1) : (Y(e), I?.(e), void 0 === d && P(t), !er && t && u?.(!0))
                          },
                        }),
                      }),
                    })
                  : (0, l.jsx)(a.l9, { asChild: !0, children: (0, l.jsx)(T, { ariaProps: e, onOpenChange: ek }) }),
                (0, l.jsx)(a.ZL, {
                  forceMount: !0,
                  container: z,
                  children: (0, l.jsx)(C.F, {
                    className: "Menu-rg4fYu",
                    enterDuration: 350,
                    exitDuration: 200,
                    children:
                      er &&
                      (0, l.jsx)(
                        a.UC,
                        {
                          onKeyDownCapture: (e) => {
                            "Tab" === e.key &&
                              e.shiftKey &&
                              e.target === H.current &&
                              (W.current?.focus(), e.preventDefault(), e.stopPropagation())
                          },
                          ref: D,
                          forceMount: !0,
                          className: "MenuList-k4HoiO",
                          side: f,
                          sideOffset: 5,
                          align: m,
                          alignOffset: h,
                          avoidCollisions: x,
                          collisionPadding: { bottom: 30, top: 30 },
                          onOpenAutoFocus: (e) => {
                            e.preventDefault()
                            let t = W.current || F.current || G.current
                            t?.focus({ preventScroll: !0 })
                          },
                          onCloseAutoFocus: g.iB,
                          onEscapeKeyDown: g.iB,
                          onInteractOutside: (e) => {
                            e.target instanceof Node && K.current?.contains(e.target) && e.preventDefault()
                          },
                          onMouseDown: (e) => {
                            M &&
                              !(e.target instanceof Element && e.target.closest("[data-select-footer]")) &&
                              e.preventDefault()
                          },
                          style: (0, g.mW)({
                            scale: o.N.pressable ? void 0 : "1",
                            "select-list-width": b,
                            "select-list-min-width": y,
                            "select-list-max-width": v,
                          }),
                          children: (0, l.jsxs)("div", {
                            className: "MenuInner-nggNzl",
                            onKeyDown: ej,
                            ref: G,
                            tabIndex: M ? -1 : 0,
                            children: [(0, l.jsx)($, { filteredOptions: eb }), (0, l.jsx)(en, {})],
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
      U = (0, i.createContext)(null),
      G = () => {
        let e = (0, i.use)(U)
        if (!e) throw Error("Select menu components must be wrapped in <CustomSelect />")
        return e
      },
      V = ({ ariaProps: e, searchInputRef: t, open: n, searchTerm: a, onChange: o, onOpen: s, onKeyDown: c }) => {
        let {
            triggerId: d,
            id: u,
            name: g,
            required: p,
            value: m,
            multiple: h,
            selectedOptions: v,
            getTagRemoveLabel: w,
            size: j,
            pill: S,
            variant: A,
            disabled: C,
            invalid: _,
            loading: M,
            loadingPlaceholder: N,
            placeholder: I,
            searchPlaceholder: L,
            triggerClassName: R,
            opticallyAlign: P,
            TriggerStartIcon: D,
            TriggerView: T,
            clearable: K,
            onSelectRef: z,
            endAdornment: O,
          } = E(),
          { listId: B, highlightedValue: U } = G(),
          V = v[0],
          F = !h && !a && null != V,
          W = (0, i.useId)(),
          $ = {
            ...e,
            id: d,
            ref: t,
            className: (0, r.A)(R, "ghost" === A && "SearchGhost-E3QlXU"),
            size: j,
            pill: S,
            variant: "ghost" === A ? "outline" : A,
            disabled: C || M,
            invalid: _,
            opticallyAlign: P,
            value: a,
            placeholder: M ? N : L || I,
            onChange: (e) => o(e.target.value),
            onFocus: s,
            onClick: s,
            onKeyDown: c,
            autoComplete: "off",
            autoCorrect: "off",
            spellCheck: !1,
            "aria-busy": M || void 0,
            "aria-autocomplete": "list",
            role: "combobox",
            "aria-controls": n ? B : void 0,
            "aria-expanded": n,
            "aria-activedescendant": n && U ? q(U) : void 0,
            endAdornment: O,
          }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            h
              ? (0, l.jsx)(k, {
                  ...$,
                  tags: v,
                  getRemoveLabel: w,
                  onRemoveTag: (e) => z.current(e, !0),
                  startAdornment: D ? (0, l.jsx)(D, {}) : void 0,
                })
              : (0, l.jsx)(y.p, {
                  ...$,
                  inputClassName: "SearchInput-nkxre0",
                  onKeyDown: (e) => {
                    if (
                      "Backspace" === e.key &&
                      K &&
                      F &&
                      !e.nativeEvent.isComposing &&
                      !e.altKey &&
                      !e.ctrlKey &&
                      !e.metaKey
                    ) {
                      ;(e.preventDefault(), z.current({ value: "", label: "" }))
                      return
                    }
                    c(e)
                  },
                  placeholder: F ? "" : $.placeholder,
                  "aria-describedby": [e["aria-describedby"], F ? W : void 0].filter(Boolean).join(" ") || void 0,
                  startAdornment: F
                    ? (0, l.jsx)("span", {
                        id: W,
                        className: "SearchSelection-BN1yuT",
                        role: "presentation",
                        onClick: C || M ? void 0 : s,
                        children: (0, l.jsx)(T, { ...V }),
                      })
                    : D
                      ? (0, l.jsx)(D, {})
                      : (0, l.jsx)(x, { width: 16, height: 16, className: "fill-secondary" }),
                  endAdornment:
                    K && v.length > 0
                      ? (0, l.jsx)(f.$, {
                          color: "secondary",
                          variant: "ghost",
                          size: "3xs",
                          uniform: !0,
                          "aria-label": "Clear current value",
                          disabled: C || M,
                          onClick: () => {
                            ;(z.current({ value: "", label: "" }), o(""), t.current?.focus())
                          },
                          children: (0, l.jsx)(b.X, {}),
                        })
                      : O,
                }),
            (g || u) &&
              (0, l.jsx)("input", {
                id: u,
                name: g,
                value: h ? (m[0] ?? "") : m,
                required: p,
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
      F = (e) => "options" in e,
      W = (e) => !!e[0] && F(e[0]),
      q = (e) => `select-option-${encodeURIComponent(e)}`,
      $ = ({ filteredOptions: e }) => {
        let { searchEmptyMessage: t, multiple: n, searchable: r, pagination: a } = E(),
          { listId: i, highlightedValue: o, listRef: s } = G(),
          c = o ? q(o) : void 0,
          d = e.reduce((e, t) => e + ("options" in t ? t.options.length : 1), 0)
        if (!e.length)
          return (0, l.jsxs)("div", {
            id: i,
            ref: s,
            role: "listbox",
            "aria-multiselectable": n || void 0,
            children: [
              (0, l.jsx)("div", {
                className: "SearchEmpty-llQB5a",
                "data-text-only": "string" == typeof t ? "" : void 0,
                role: "status",
                children: t,
              }),
              a && "manual" !== a.mode && (0, l.jsx)(H, { pagination: a }),
            ],
          })
        let u = W(e),
          g = null == a && !u && e.length > 300,
          f = u
            ? e.map((e) => (0, l.jsx)(Y, { ...e }, e.label))
            : e.slice(0, null == a ? 300 : void 0).map((e) => (0, l.jsx)(et, { ...e }, e.value))
        return (0, l.jsxs)("div", {
          id: i,
          className: "OptionsList-tSiCXf",
          ref: s,
          role: "listbox",
          tabIndex: r ? -1 : 0,
          "aria-activedescendant": c,
          "aria-multiselectable": n || void 0,
          children: [
            f,
            g && (0, l.jsx)(X, { numHidden: e.length - 300 }),
            a && "manual" !== a.mode && (0, l.jsx)(H, { pagination: a }, d),
          ],
        })
      },
      H = ({ pagination: e }) => {
        let t = d(e.onLoadMore),
          n = (0, i.useCallback)(
            (e) => {
              if (null == e) return
              let n = !0,
                l = new IntersectionObserver(
                  (e) => {
                    n && e.some((e) => e.isIntersecting) && ((n = !1), l.disconnect(), t())
                  },
                  { root: e.parentElement },
                )
              return (
                l.observe(e),
                () => {
                  ;((n = !1), l.disconnect())
                }
              )
            },
            [t],
          )
        return e.hasNextPage && !e.isFetching
          ? (0, l.jsx)("div", { className: "PaginationSentinel-FkZCvf", "aria-hidden": !0, ref: n })
          : null
      },
      Z = { limit: 100, label: "Show all" },
      Y = ({ label: e, options: t, optionsLimit: n = Z }) => {
        let r = (0, i.useId)(),
          { optionIndicatorPosition: a, pagination: o } = E(),
          { searchTerm: s, setHighlightedValue: c } = G(),
          [d, u] = (0, i.useState)(!1),
          g = null == o && n.limit < t.length && !s && !d,
          f = null == o && 300 < t.length && !g,
          p = t
        return (
          g ? (p = t.slice(0, n.limit)) : f && (p = t.slice(0, 300)),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: "OptionGroupHeading-c0U5nA",
                children: [
                  "start" === a && (0, l.jsx)(Q, { position: a }),
                  e,
                  "end" === a && (0, l.jsx)(Q, { position: a }),
                ],
              }),
              p.map((e) => (0, l.jsx)(et, { ...e }, e.value)),
              g &&
                (0, l.jsx)(J, {
                  value: `group-limit-${r}`,
                  label: n.label,
                  onPointerUp: () => {
                    ;(u(!0), c(t[n.limit]?.value ?? ""))
                  },
                }),
              f && (0, l.jsx)(X, { numHidden: t.length - 300 }),
            ],
          })
        )
      },
      X = ({ numHidden: e }) => {
        let { optionIndicatorPosition: t } = E()
        return (0, l.jsxs)("div", {
          className: "OptionHardLimitHeading-UmEIsY",
          children: [
            "start" === t && (0, l.jsx)(Q, { position: t }),
            `\u{2026}and ${e.toLocaleString()} more options. Use search to refine results further.`,
            "end" === t && (0, l.jsx)(Q, { position: t }),
          ],
        })
      },
      J = ({ value: e, label: t, onPointerUp: n }) => {
        let { optionIndicatorPosition: a } = E(),
          { highlightedValue: i, setHighlightedValue: o } = G(),
          s = e === i
        return (0, l.jsx)("div", {
          className: (0, r.A)(_, "OptionsLimit-SDgq93"),
          id: q(e),
          "data-option-id": e,
          "data-highlight": s ? "" : void 0,
          role: "option",
          "aria-selected": !1,
          onPointerUp: n,
          onPointerMove: () => {
            s || o(e)
          },
          onPointerLeave: () => {
            o((t) => (t !== e ? t : ""))
          },
          children: (0, l.jsxs)("div", {
            className: (0, r.A)(M, N),
            children: [
              "start" === a && (0, l.jsx)(Q, { position: a }),
              t,
              "end" === a && (0, l.jsx)(Q, { position: a }),
            ],
          }),
        })
      },
      Q = ({ children: e, indicator: t = !1, position: n }) =>
        (0, l.jsx)("div", {
          className: "OptionIndicatorSlot-BWd0M4",
          "data-option-indicator-position": n,
          "data-select-option-indicator": t ? "" : void 0,
          children: e,
        }),
      ee = ({ isSelected: e, position: t }) =>
        (0, l.jsx)(Q, {
          indicator: !0,
          position: t,
          children: e && (0, l.jsx)(m.J, { className: "OptionCheck-XJTh51" }),
        }),
      et = (e) => {
        let {
            optionClassName: t,
            OptionView: n,
            value: a,
            multiple: i,
            searchable: o,
            onSelectRef: s,
            optionIndicatorPosition: c,
          } = E(),
          { valueRef: d, requestCloseRef: u, resetSearchRef: g, highlightedValue: f, setHighlightedValue: p } = G(),
          { value: m, disabled: x, tooltip: b } = e,
          y = "" === a ? "" : d.current,
          v = i ? a.includes(m) : m === y,
          w = m === f
        return (0, l.jsx)("div", {
          className: (0, r.A)(_, t),
          id: q(m),
          "data-highlight": w ? "" : void 0,
          role: "option",
          "aria-selected": v,
          "data-selected": v ? "" : void 0,
          "data-option-id": m,
          onPointerUp: x
            ? void 0
            : () => {
                i ? (s.current(e, v), o && g.current()) : (s.current(e), u.current?.())
              },
          onPointerMove: x
            ? void 0
            : () => {
                w || p(m)
              },
          onPointerLeave: x
            ? void 0
            : () => {
                p((e) => (e !== m ? e : ""))
              },
          "aria-disabled": x,
          "data-disabled": x ? "" : void 0,
          children: (0, l.jsxs)("div", {
            className: M,
            children: [
              (0, l.jsxs)("div", {
                className: N,
                children: [
                  "start" === c && (0, l.jsx)(ee, { isSelected: v, position: c }),
                  (0, l.jsx)(n, { ...e }),
                  b &&
                    (0, l.jsx)(A.m, {
                      content: b.content,
                      maxWidth: b.maxWidth,
                      side: "right",
                      children: (0, l.jsx)(h, {}),
                    }),
                  "end" === c && (0, l.jsx)(ee, { isSelected: v, position: c }),
                ],
              }),
              e.description &&
                (0, l.jsxs)("div", {
                  className: N,
                  children: [
                    "start" === c && (0, l.jsx)(Q, { position: c }),
                    e.description,
                    "end" === c && (0, l.jsx)(Q, { position: c }),
                  ],
                }),
            ],
          }),
        })
      },
      en = () => {
        let { actions: e, footer: t } = E()
        return 0 !== e.length || t
          ? (0, l.jsxs)("div", {
              className: "ActionsContainer-_9uLn5",
              children: [
                t
                  ? (0, l.jsx)("div", {
                      "data-select-footer": "",
                      onKeyDown: (e) => {
                        "Escape" !== e.key && "Tab" !== e.key && e.stopPropagation()
                      },
                      children: t,
                    })
                  : null,
                e.map((e) => (0, l.jsx)(el, { ...e }, e.id)),
              ],
            })
          : null
      },
      el = ({ id: e, label: t, Icon: n, className: a }) => {
        let { onActionSelect: i } = E(),
          { requestCloseRef: o } = G(),
          s = () => {
            ;(i(e), o.current?.())
          }
        return (0, l.jsx)("div", {
          className: "Action-sDvHYl",
          onPointerUp: s,
          onKeyDown: (e) => {
            switch (e.key) {
              case "Tab":
                break
              case "Enter":
              case " ":
                ;(e.stopPropagation(), s())
                break
              default:
                e.stopPropagation()
            }
          },
          tabIndex: 0,
          children: (0, l.jsxs)("div", {
            className: (0, r.A)("ActionInner-bAgfXn", a),
            children: [n && (0, l.jsx)(n, { role: "presentation" }), t],
          }),
        })
      },
      er = (e, t) => e.label.toLowerCase().includes(t),
      ea = (e, t, n) => {
        let l = t.trim().toLocaleLowerCase()
        if (!l) return e
        let r = (e) => n(e, l)
        return W(e)
          ? e.reduce((e, t) => {
              let n = t.options.filter(r)
              return (n.length && e.push({ ...t, options: n }), e)
            }, [])
          : e.reduce((e, t) => (r(t) && e.push(t), e), [])
      },
      ei = (e) => {
        let t
        if (e.length) {
          for (let n of e)
            if (F(n)) {
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
      eo = (e, t) => {
        let n
        for (let l of e)
          if (F(l)) {
            let e = l.options.find((e) => e.value === t)
            if (e) {
              n = e
              break
            }
          } else if (l.value === t) {
            n = l
            break
          }
        return n
      },
      es = (e, t) => {
        let n = [],
          l = new Set(t)
        for (let t of e)
          if (F(t)) {
            let e = t.options.filter((e) => l.has(e.value))
            n = n.concat(e)
          } else l.has(t.value) && n.push(t)
        return n
      },
      ec = (e, t) => t.querySelector(`[data-option-id="${e}"]`),
      ed = (e) => e.matches("[data-option-id]:not([data-disabled])"),
      eu = (e, t) => {
        let n = ec(e, t),
          l = n?.nextElementSibling,
          r = 0
        for (; l && r < 40;) {
          if (ed(l)) return l
          ;((l = l.nextElementSibling), (r += 1))
        }
      },
      eg = (e, t) => {
        let n = ec(e, t),
          l = n?.previousElementSibling,
          r = 0
        for (; l && r < 40;) {
          if (ed(l)) return l
          ;((l = l.previousElementSibling), (r += 1))
        }
      },
      ef = () => {
        let e,
          t = ""
        return (n) => {
          let l = n.toLowerCase()
          return (
            (t += l),
            e && clearTimeout(e),
            (e = setTimeout(() => {
              t = ""
            }, 500)),
            l.repeat(t.length) === t ? l : t
          )
        }
      },
      ep = (e) => /^[a-zA-Z0-9]$/.test(e),
      em = (e, t, n) => {
        let l, r
        if (!e.length) return
        let a = !n,
          i = ({ disabled: e, label: l, value: r }) => (r === n ? ((a = !0), !1) : !e && l.toLowerCase().startsWith(t))
        for (let t of e)
          if (F(t)) {
            for (let e of t.options)
              if (i(e))
                if (a) {
                  r = e
                  break
                } else l = l || e
          } else if (i(t))
            if (a) {
              r = t
              break
            } else l = l || t
        return r || l
      }
  },
  toKG(e, t, n) {
    n.d(
      t,
      {},
      {
        N: function (e) {
          return new URL("/codex/desktop-session", e?.trim() || "https://chatgpt.com").toString()
        },
      },
    )
  },
  zTZF(e, t, n) {
    n.d(t, { OnboardingLoginPage: () => tp })
    var l = n("ABep"),
      r = n("QosV"),
      a = n("iRMi"),
      i = n("irkb"),
      o = n("qmMi"),
      s = n("DBCl"),
      c = n("zd8w"),
      d = n("Wf1j"),
      u = n("oyxz"),
      g = n("Ywss"),
      f = n("GLfw"),
      p = n("CfsC"),
      m = n("w0gB"),
      h = n("ZHMx"),
      x = n("Wd6S"),
      b = n("VloC"),
      y = n("ld84"),
      v = n("UOa8"),
      w = n("Sm6l"),
      j = n("JNtf"),
      S = n("mUDD"),
      k = n("Ot7V"),
      A = n("RNul"),
      C = n("SGsN"),
      _ = n("nlNF"),
      M = n("v9XN"),
      N = n("DIsA"),
      I = n("bdDz"),
      E = n("yGJW"),
      L = n("GaA7"),
      R = n("OWtl"),
      P = n("kfGJ"),
      D = n("D1V6"),
      T = n("hZax"),
      K = n("aepO"),
      z = n("SzCH"),
      O = n("vvrk"),
      B = n("nsuH"),
      U = n("HgLj")
    let G = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } },
      V = { up: "down", down: "up", left: "right", right: "left" }
    function F(e) {
      let t,
        n,
        a,
        i,
        o,
        s,
        d,
        u,
        g,
        f,
        p,
        m,
        h,
        x,
        b,
        y = (0, r.c)(22),
        { onExit: v, audioContextRef: w } = e,
        j = (0, c.useRef)(null),
        S = (0, c.useRef)(null),
        k = (0, c.useRef)(null)
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (y[0] = t)) : (t = y[0])
      let A = (0, c.useRef)(t)
      y[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = { x: 0, y: 0 }), (y[1] = n)) : (n = y[1])
      let C = (0, c.useRef)(n),
        _ = (0, c.useRef)("right"),
        M = (0, c.useRef)("right")
      y[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { columns: 12, rows: 12, cellSize: 18, width: 216, height: 216 }), (y[2] = a))
        : (a = y[2])
      let N = (0, c.useRef)(a),
        I = (0, c.useRef)(null),
        E = (0, c.useEffectEvent)(v)
      y[3] !== w
        ? ((i = (e, t, n) => {
            if (null == w.current) return
            let l = w.current
            "suspended" === l.state && l.resume()
            let r = t / 1e3,
              a = l.createOscillator(),
              i = l.createGain()
            ;((a.type = n),
              (a.frequency.value = e),
              i.gain.setValueAtTime(1e-4, l.currentTime),
              i.gain.exponentialRampToValueAtTime(0.18, l.currentTime + 0.01),
              i.gain.exponentialRampToValueAtTime(1e-4, l.currentTime + r),
              a.connect(i),
              i.connect(l.destination),
              a.start(),
              a.stop(l.currentTime + r),
              (a.onended = () => {
                ;(a.disconnect(), i.disconnect())
              }))
          }),
          (y[3] = w),
          (y[4] = i))
        : (i = y[4])
      let L = (0, c.useEffectEvent)(i)
      y[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => {
            null != k.current && (window.clearInterval(k.current), (k.current = null))
          }),
          (y[5] = o))
        : (o = y[5])
      let R = o
      y[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => {
            if (I.current) return I.current
            let e = j.current
            if (null == e) return { snake: "#ffffff", food: "#f97316" }
            let t = getComputedStyle(e).color || "#ffffff",
              n = getComputedStyle(document.documentElement),
              l = {
                snake: t,
                food:
                  n.getPropertyValue("--color-chart-red").trim() ||
                  n.getPropertyValue("--color-chart-orange").trim() ||
                  "#f97316",
              }
            return ((I.current = l), l)
          }),
          (y[6] = s))
        : (s = y[6])
      let P = s
      y[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => {
            if (null == j.current) return null
            let e = Math.max(1, Math.floor(window.devicePixelRatio || 1))
            ;((j.current.width = Math.max(1, Math.floor(N.current.width * e))),
              (j.current.height = Math.max(1, Math.floor(N.current.height * e))),
              (j.current.style.width = `${N.current.width}px`),
              (j.current.style.height = `${N.current.height}px`))
            let t = j.current.getContext("2d")
            return null == t ? null : (t.setTransform(e, 0, 0, e, 0, 0), (t.imageSmoothingEnabled = !1), t)
          }),
          (y[7] = d))
        : (d = y[7])
      let D = d
      y[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e) => {
            let t = { x: Math.floor(Math.random() * N.current.columns), y: Math.floor(Math.random() * N.current.rows) }
            for (; e.some((e) => e.x === t.x && e.y === t.y);)
              t = { x: Math.floor(Math.random() * N.current.columns), y: Math.floor(Math.random() * N.current.rows) }
            return t
          }),
          (y[8] = u))
        : (u = y[8])
      let T = u
      y[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = () => {
            let e = D()
            if (null == e) return
            let t = P()
            for (let n of (e.clearRect(0, 0, N.current.width, N.current.height), (e.fillStyle = t.snake), A.current))
              e.fillRect(n.x * N.current.cellSize, n.y * N.current.cellSize, N.current.cellSize, N.current.cellSize)
            ;((e.fillStyle = t.food),
              e.fillRect(
                C.current.x * N.current.cellSize,
                C.current.y * N.current.cellSize,
                N.current.cellSize,
                N.current.cellSize,
              ))
          }),
          (y[9] = g))
        : (g = y[9])
      let K = g,
        z = (0, c.useEffectEvent)(K)
      y[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = () => {
            let e, t
            if (null == S.current) return
            let n = Math.max(1, S.current.clientWidth),
              l = Math.max(1, S.current.clientHeight)
            if (n === N.current.width && l === N.current.height && A.current.length > 0) return
            let r = Math.min(n, l),
              a = r / Math.max(12, Math.floor(r / 18))
            ;((N.current = {
              columns: Math.max(12, Math.floor(n / a)),
              rows: Math.max(12, Math.floor(l / a)),
              cellSize: a,
              width: n,
              height: l,
            }),
              (e = Math.floor(N.current.columns / 2)),
              (A.current = [
                { x: e, y: (t = Math.floor(N.current.rows / 2)) },
                { x: e - 1, y: t },
                { x: e - 2, y: t },
              ]),
              (_.current = "right"),
              (M.current = "right"),
              (C.current = T(A.current)),
              K())
          }),
          (y[10] = f))
        : (f = y[10])
      let O = f,
        F = (0, c.useEffectEvent)(O),
        W = (0, B.wY)(O)
      return (
        y[11] !== z || y[12] !== E || y[13] !== L || y[14] !== F
          ? ((p = () => {
              F()
              let e = (e) => {
                let t = null
                ;("ArrowUp" === e.key || "w" === e.key || "W" === e.key
                  ? (t = "up")
                  : "ArrowDown" === e.key || "s" === e.key || "S" === e.key
                    ? (t = "down")
                    : "ArrowLeft" === e.key || "a" === e.key || "A" === e.key
                      ? (t = "left")
                      : ("ArrowRight" === e.key || "d" === e.key || "D" === e.key) && (t = "right"),
                  null == t || (e.preventDefault(), V[_.current] !== t && (M.current = t)))
              }
              return (
                window.addEventListener("keydown", e),
                (k.current = window.setInterval(() => {
                  let e = A.current,
                    t = e[0],
                    n = M.current,
                    l = G[n],
                    r = { x: t.x + l.x, y: t.y + l.y }
                  if (r.x < 0 || r.y < 0 || r.x >= N.current.columns || r.y >= N.current.rows) {
                    ;(R(), L(140, 220, "sawtooth"), E())
                    return
                  }
                  let a = r.x === C.current.x && r.y === C.current.y
                  if ((a ? e : e.slice(0, -1)).some((e) => e.x === r.x && e.y === r.y)) {
                    ;(R(), L(160, 220, "sawtooth"), E())
                    return
                  }
                  let i = a ? [r, ...e] : [r, ...e.slice(0, -1)]
                  ;((A.current = i), (_.current = n), a && ((C.current = T(i)), L(660, 120, "square")), z())
                }, 120)),
                () => {
                  ;(R(), window.removeEventListener("keydown", e))
                }
              )
            }),
            (y[11] = z),
            (y[12] = E),
            (y[13] = L),
            (y[14] = F),
            (y[15] = p))
          : (p = y[15]),
        y[16] === Symbol.for("react.memo_cache_sentinel") ? ((m = []), (y[16] = m)) : (m = y[16]),
        (0, c.useEffect)(p, m),
        y[17] !== W ? ((h = (0, U.P)(S, W)), (y[17] = W), (y[18] = h)) : (h = y[18]),
        y[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, l.jsx)("canvas", { className: "h-full w-full text-default", ref: j })), (y[19] = x))
          : (x = y[19]),
        y[20] !== h
          ? ((b = (0, l.jsx)("div", { ref: h, className: "h-full w-full", children: x })), (y[20] = h), (y[21] = b))
          : (b = y[21]),
        b
      )
    }
    var W = n("ztxw"),
      q = n("AEu9"),
      $ = n("Qgfj"),
      H = n("bVeK"),
      Z = n.p + "assets/c41ab3a754ce.svg",
      Y = n("Wl9D"),
      X = n("aqd9"),
      J = n("T1PX"),
      Q = n.p + "assets/ac32a15625d4.svg",
      ee = n("K4Cx")
    n("V8uZ")
    function et(e) {
      let t,
        n,
        a,
        i,
        o,
        s,
        d,
        u,
        g,
        f,
        p,
        m,
        h,
        x = (0, r.c)(31),
        { source: b, target: y, connector: v } = e,
        w = (0, J.I)(),
        [j, S] = (0, c.useState)(w),
        [k, A] = (0, c.useState)(w)
      ;(x[0] !== w || x[1] !== j
        ? ((t = () => {
            if (!j || w) return
            let e = setTimeout(() => A(!0), 150)
            return () => clearTimeout(e)
          }),
          (n = [j, w]),
          (x[0] = w),
          (x[1] = j),
          (x[2] = t),
          (x[3] = n))
        : ((t = x[2]), (n = x[3])),
        (0, c.useEffect)(t, n),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { position: "relative", width: 170.5, height: 48, flexShrink: 0 }), (x[4] = a))
          : (a = x[4]),
        x[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = {
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: -24,
              marginTop: -24,
              width: 48,
              height: 48,
              display: "grid",
              placeItems: "center",
              zIndex: 2,
            }),
            (x[5] = i))
          : (i = x[5]),
        x[6] !== w ? ((o = !w && { x: 0 }), (x[6] = w), (x[7] = o)) : (o = x[7]),
        x[8] === Symbol.for("react.memo_cache_sentinel") ? ((s = { x: -61.25 }), (x[8] = s)) : (s = x[8]))
      let C = 0.5 * !w
      return (
        x[9] === Symbol.for("react.memo_cache_sentinel") ? ((d = [0.4, 0, 0.2, 1]), (x[9] = d)) : (d = x[9]),
        x[10] !== C ? ((u = { duration: C, ease: d }), (x[10] = C), (x[11] = u)) : (u = x[11]),
        x[12] !== j
          ? ((g = (e) => {
              let { x: t } = e
              !j && "number" == typeof t && t <= -60.75 && S(!0)
            }),
            (x[12] = j),
            (x[13] = g))
          : (g = x[13]),
        x[14] !== b || x[15] !== g || x[16] !== o || x[17] !== u
          ? ((f = (0, l.jsx)(ee.P.div, { style: i, initial: o, animate: s, transition: u, onUpdate: g, children: b })),
            (x[14] = b),
            (x[15] = g),
            (x[16] = o),
            (x[17] = u),
            (x[18] = f))
          : (f = x[18]),
        x[19] !== w || x[20] !== y || x[21] !== j
          ? ((p =
              (j || w) &&
              (0, l.jsx)(ee.P.div, {
                style: {
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginLeft: -24,
                  marginTop: -24,
                  width: 48,
                  height: 48,
                  display: "grid",
                  placeItems: "center",
                  zIndex: 1,
                },
                initial: !w && { scale: 0, opacity: 0, x: 61.25 },
                animate: { scale: w ? 1 : [0, 1.1, 1], opacity: 1, x: 61.25 },
                transition: { duration: 0.3 * !w, ease: "easeOut" },
                children: y,
              })),
            (x[19] = w),
            (x[20] = y),
            (x[21] = j),
            (x[22] = p))
          : (p = x[22]),
        x[23] !== v || x[24] !== k || x[25] !== w
          ? ((m =
              (k || w) &&
              (0, l.jsx)("div", {
                style: { position: "absolute", inset: 0, display: "grid", placeItems: "center" },
                children: (0, l.jsx)(ee.P.div, {
                  initial: !w && { opacity: 0, y: 12, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: w ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 26 },
                  children: v,
                }),
              })),
            (x[23] = v),
            (x[24] = k),
            (x[25] = w),
            (x[26] = m))
          : (m = x[26]),
        x[27] !== f || x[28] !== p || x[29] !== m
          ? ((h = (0, l.jsxs)("div", { "aria-hidden": "true", style: a, children: [f, p, m] })),
            (x[27] = f),
            (x[28] = p),
            (x[29] = m),
            (x[30] = h))
          : (h = x[30]),
        h
      )
    }
    var en = n.p + "assets/e51e44bbaeb5.svg"
    function el(e) {
      let t,
        n,
        a,
        i,
        o,
        s = (0, r.c)(13),
        { target: c, openaiLogoSize: d } = e,
        u = (0, J.I)()
      s[0] !== d
        ? ((t = (0, l.jsx)("img", { alt: "", className: "invert-5 dark:invert-95", width: d, height: d, src: Q })),
          (s[0] = d),
          (s[1] = t))
        : (t = s[1])
      let g = u ? void 0 : "opacity-24"
      return (
        s[2] !== g ? ((n = (0, l.jsx)("img", { alt: "", className: g, src: en })), (s[2] = g), (s[3] = n)) : (n = s[3]),
        s[4] !== u
          ? ((a = u ? null : (0, l.jsx)("span", { ref: X.d, className: "dots-Qf_9QK" })), (s[4] = u), (s[5] = a))
          : (a = s[5]),
        s[6] !== n || s[7] !== a
          ? ((i = (0, l.jsxs)("span", { className: "relative block", children: [n, a] })),
            (s[6] = n),
            (s[7] = a),
            (s[8] = i))
          : (i = s[8]),
        s[9] !== t || s[10] !== i || s[11] !== c
          ? ((o = (0, l.jsx)(et, { source: t, target: c, connector: i })),
            (s[9] = t),
            (s[10] = i),
            (s[11] = c),
            (s[12] = o))
          : (o = s[12]),
        o
      )
    }
    function er(e) {
      let t,
        n,
        a,
        i,
        o,
        s,
        c,
        d = (0, r.c)(21),
        {
          providerLogo: u,
          openaiLogoSize: g,
          title: f,
          errorMessage: p,
          children: m,
          backLabel: h,
          backDisabled: x,
          onBack: b,
        } = e
      return (
        d[0] !== g || d[1] !== u
          ? ((t = (0, l.jsx)(el, { target: u, openaiLogoSize: g })), (d[0] = g), (d[1] = u), (d[2] = t))
          : (t = d[2]),
        d[3] !== f
          ? ((n = (0, l.jsx)("h1", {
              className: "w-full text-center text-xl leading-9 font-normal text-default",
              children: f,
            })),
            (d[3] = f),
            (d[4] = n))
          : (n = d[4]),
        d[5] !== t || d[6] !== n
          ? ((a = (0, l.jsxs)("div", {
              className: "flex w-full shrink-0 flex-col items-center gap-4 select-none",
              children: [t, n],
            })),
            (d[5] = t),
            (d[6] = n),
            (d[7] = a))
          : (a = d[7]),
        d[8] !== p
          ? ((i =
              null != p
                ? (0, l.jsx)("p", {
                    role: "alert",
                    className: "text-center text-[14px] leading-5 font-normal text-codex-description",
                    children: p,
                  })
                : null),
            (d[8] = p),
            (d[9] = i))
          : (i = d[9]),
        d[10] !== x || d[11] !== h || d[12] !== b
          ? ((o = (0, l.jsx)(w.$, {
              className: "w-full shrink-0 justify-center",
              color: "ghostTertiary",
              size: "large",
              type: "button",
              disabled: x,
              onClick: b,
              children: h,
            })),
            (d[10] = x),
            (d[11] = h),
            (d[12] = b),
            (d[13] = o))
          : (o = d[13]),
        d[14] !== m || d[15] !== i || d[16] !== o
          ? ((s = (0, l.jsxs)("div", { className: "flex min-h-0 w-full flex-col gap-3", children: [i, m, o] })),
            (d[14] = m),
            (d[15] = i),
            (d[16] = o),
            (d[17] = s))
          : (s = d[17]),
        d[18] !== a || d[19] !== s
          ? ((c = (0, l.jsx)("div", {
              className: "flex h-full w-full justify-center overflow-y-auto bg-surface px-6 py-4 text-default",
              children: (0, l.jsxs)("div", {
                className: "my-auto flex max-h-full w-full max-w-lg shrink-0 flex-col items-center gap-8",
                children: [a, s],
              }),
            })),
            (d[18] = a),
            (d[19] = s),
            (d[20] = c))
          : (c = d[20]),
        c
      )
    }
    let ea = ["profile", "accessKeys", "apiKey"]
    function ei(e) {
      let t,
        n = (0, r.c)(60),
        {
          detectedCredentials: a,
          supportsAwsCredentials: i,
          supportsAccessKeys: o,
          isDetecting: s,
          isSubmitting: g,
          errorMessage: f,
          onBack: p,
          onClearError: m,
          onDetectCredentials: h,
          onSubmit: x,
        } = e,
        b = (0, d.A)(),
        y = (0, c.useId)(),
        v = (0, c.useId)(),
        [j, S] = (0, c.useState)(null),
        [k, A] = (0, c.useState)(null),
        [C, _] = (0, c.useState)(""),
        [M, N] = (0, c.useState)(""),
        [I, E] = (0, c.useState)(""),
        [L, R] = (0, c.useState)(""),
        [P, D] = (0, c.useState)(""),
        [T, K] = (0, c.useState)(""),
        z = i && s,
        O = a?.activeProfile ?? "default"
      if (
        n[0] !== I ||
        n[1] !== T ||
        n[2] !== a ||
        n[3] !== v ||
        n[4] !== k ||
        n[5] !== f ||
        n[6] !== b ||
        n[7] !== z ||
        n[8] !== g ||
        n[9] !== y ||
        n[10] !== p ||
        n[11] !== m ||
        n[12] !== h ||
        n[13] !== x ||
        n[14] !== O ||
        n[15] !== C ||
        n[16] !== M ||
        n[17] !== L ||
        n[18] !== j ||
        n[19] !== P ||
        n[20] !== o ||
        n[21] !== i
      ) {
        let e,
          r,
          s,
          c,
          d,
          B,
          U,
          G,
          V = a?.profiles.slice().sort((e, t) => Number(t.name === O) - Number(e.name === O)),
          F =
            V?.find((e) => {
              let { name: t } = e
              return t === k
            }) ?? V?.[0],
          W = (null != V && V.length > 0) || a?.environmentCredentialsAvailable === !0,
          $ = i ? (j ?? (W ? null : "profile")) : "apiKey"
        n[23] !== m
          ? ((e = (e) => {
              ;(m(), S(e))
            }),
            (n[23] = m),
            (n[24] = e))
          : (e = n[24])
        let X = e
        ;(n[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)("img", { alt: "", className: "w-12 dark:hue-rotate-180 dark:invert", src: Z })),
            (n[25] = r))
          : (r = n[25]),
          n[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.bedrock.title",
                defaultMessage: "Set up Amazon Bedrock",
              })),
              (n[26] = s))
            : (s = n[26]),
          n[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, l.jsx)(u.A, { id: "electron.onboarding.login.bedrock.back", defaultMessage: "Back" })),
              (n[27] = c))
            : (c = n[27]),
          n[28] !== W || n[29] !== $ || n[30] !== p || n[31] !== X || n[32] !== i
            ? ((d = () => {
                ;(X(null), (null != $ && i && W) || p())
              }),
              (n[28] = W),
              (n[29] = $),
              (n[30] = p),
              (n[31] = X),
              (n[32] = i),
              (n[33] = d))
            : (d = n[33]),
          n[34] !== z
            ? ((B = z
                ? (0, l.jsx)("p", {
                    className: "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                    children: (0, l.jsx)(u.A, {
                      id: "electron.onboarding.login.bedrock.detecting",
                      defaultMessage: "Checking for AWS credentials\u2026",
                    }),
                  })
                : null),
              (n[34] = z),
              (n[35] = B))
            : (B = n[35]),
          n[36] !== a || n[37] !== f || n[38] !== W || n[39] !== z || n[40] !== i
            ? ((U =
                z || !i || null == a || null != f || W
                  ? null
                  : (0, l.jsx)("p", {
                      className: "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                      children: (0, l.jsx)(u.A, {
                        id: "electron.onboarding.login.bedrock.noCredentials",
                        defaultMessage: "No AWS credentials found",
                      }),
                    })),
              (n[36] = a),
              (n[37] = f),
              (n[38] = W),
              (n[39] = z),
              (n[40] = i),
              (n[41] = U))
            : (U = n[41]),
          n[42] !== I ||
          n[43] !== T ||
          n[44] !== b ||
          n[45] !== z ||
          n[46] !== g ||
          n[47] !== $ ||
          n[48] !== y ||
          n[49] !== m ||
          n[50] !== h ||
          n[51] !== x ||
          n[52] !== C ||
          n[53] !== M ||
          n[54] !== L ||
          n[55] !== P ||
          n[56] !== X ||
          n[57] !== o ||
          n[58] !== i
            ? ((G =
                z || null == $
                  ? null
                  : (0, l.jsxs)("form", {
                      className: "flex w-full flex-col gap-4",
                      onChange: m,
                      onSubmit: (e) => {
                        switch ((e.preventDefault(), $)) {
                          case "profile":
                            x({ method: $, profile: C.trim(), region: M.trim() })
                            break
                          case "accessKeys":
                            x({
                              method: $,
                              accessKeyId: I,
                              secretAccessKey: L,
                              sessionToken: 0 === P.trim().length ? null : P,
                              region: M.trim(),
                            })
                            break
                          case "environment":
                            x({ method: $, region: M.trim() })
                            break
                          case "apiKey":
                            x({ method: $, apiKey: T, region: M.trim() })
                        }
                      },
                      children: [
                        i && "environment" !== $
                          ? (0, l.jsxs)("div", {
                              className: "flex flex-col gap-2 border-b border-default pb-4",
                              children: [
                                (0, l.jsx)("span", {
                                  id: y,
                                  className: "text-sm text-default select-none",
                                  children: (0, l.jsx)(u.A, {
                                    id: "electron.onboarding.login.bedrock.method.label",
                                    defaultMessage: "Choose sign-in method",
                                  }),
                                }),
                                (0, l.jsx)(q.l, {
                                  "aria-labelledby": y,
                                  disabled: g,
                                  size: "3xl",
                                  value: $,
                                  options: ea
                                    .filter((e) => "accessKeys" !== e || o)
                                    .map((e) => ({ value: e, label: b.formatMessage(es[e]) })),
                                  onChange: (e) => {
                                    let { value: t } = e
                                    return X(t)
                                  },
                                }),
                              ],
                            })
                          : null,
                        "profile" === $
                          ? (0, l.jsx)(Y.P, {
                              value: C,
                              onChange: _,
                              children: (0, l.jsx)(u.A, {
                                id: "electron.onboarding.login.bedrock.profile.label",
                                defaultMessage: "AWS profile",
                              }),
                            })
                          : null,
                        "accessKeys" === $
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(Y.P, {
                                  placeholder: b.formatMessage({
                                    id: "electron.onboarding.login.bedrock.accessKeyId.placeholder",
                                    defaultMessage: "e.g. AKIAIOSFODNN7EXAMPLE",
                                  }),
                                  value: I,
                                  onChange: E,
                                  children: (0, l.jsx)(u.A, {
                                    id: "electron.onboarding.login.bedrock.accessKeyId.label",
                                    defaultMessage: "AWS access key ID",
                                  }),
                                }),
                                (0, l.jsx)(Y.P, {
                                  type: "password",
                                  placeholder: b.formatMessage({
                                    id: "electron.onboarding.login.bedrock.secretAccessKey.placeholder",
                                    defaultMessage: "40-character secret access key",
                                  }),
                                  value: L,
                                  onChange: R,
                                  children: (0, l.jsx)(u.A, {
                                    id: "electron.onboarding.login.bedrock.secretAccessKey.label",
                                    defaultMessage: "AWS secret access key",
                                  }),
                                }),
                                (0, l.jsx)(Y.P, {
                                  type: "password",
                                  required: !1,
                                  placeholder: b.formatMessage({
                                    id: "electron.onboarding.login.bedrock.sessionToken.placeholder",
                                    defaultMessage: "Add session token, if required",
                                  }),
                                  value: P,
                                  onChange: D,
                                  children: (0, l.jsx)(u.A, {
                                    id: "electron.onboarding.login.bedrock.sessionToken.label",
                                    defaultMessage: "AWS session token (optional)",
                                  }),
                                }),
                              ],
                            })
                          : null,
                        "environment" === $
                          ? (0, l.jsx)("p", {
                              className:
                                "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                              children: (0, l.jsx)(u.A, {
                                id: "electron.onboarding.login.bedrock.environment.instructions",
                                defaultMessage: "AWS credentials detected. Enter your AWS Region to continue.",
                              }),
                            })
                          : null,
                        "apiKey" === $
                          ? (0, l.jsx)(Y.P, {
                              autoFocus: !i,
                              type: "password",
                              placeholder: b.formatMessage({
                                id: "electron.onboarding.login.bedrock.apiKey.placeholder",
                                defaultMessage: "Paste your Amazon Bedrock API key",
                              }),
                              value: T,
                              onChange: K,
                              children: (0, l.jsx)(u.A, {
                                id: "electron.onboarding.login.bedrock.apiKey.label",
                                defaultMessage: "Bedrock API key",
                              }),
                            })
                          : null,
                        (0, l.jsx)(Y.P, {
                          autoFocus: "environment" === $,
                          value: M,
                          onChange: N,
                          help: (0, l.jsx)(u.A, {
                            id: "electron.onboarding.login.bedrock.region.example",
                            defaultMessage: "For example, us-east-2",
                          }),
                          children: (0, l.jsx)(u.A, {
                            id: "electron.onboarding.login.bedrock.region.label",
                            defaultMessage: "AWS region",
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex w-full flex-col gap-3",
                          children: [
                            (0, l.jsx)(w.$, {
                              className: "w-full justify-center",
                              radius: "full",
                              size: "onboardingAction",
                              type: "submit",
                              disabled:
                                g ||
                                0 === M.trim().length ||
                                ("profile" === $ && 0 === C.trim().length) ||
                                ("accessKeys" === $ && (0 === I.trim().length || 0 === L.trim().length)) ||
                                ("apiKey" === $ && 0 === T.trim().length),
                              loading: g,
                              children: (0, l.jsx)(u.A, {
                                id: "electron.onboarding.login.bedrock.continue",
                                defaultMessage: "Continue",
                              }),
                            }),
                            "environment" === $
                              ? (0, l.jsx)(w.$, {
                                  className: "w-full justify-center",
                                  color: "secondary",
                                  size: "large",
                                  type: "button",
                                  disabled: g,
                                  onClick: () => {
                                    ;(X(null), h())
                                  },
                                  children: (0, l.jsx)(u.A, {
                                    id: "electron.onboarding.login.bedrock.environment.retry",
                                    defaultMessage: "Check for credentials again",
                                  }),
                                })
                              : null,
                          ],
                        }),
                      ],
                    })),
              (n[42] = I),
              (n[43] = T),
              (n[44] = b),
              (n[45] = z),
              (n[46] = g),
              (n[47] = $),
              (n[48] = y),
              (n[49] = m),
              (n[50] = h),
              (n[51] = x),
              (n[52] = C),
              (n[53] = M),
              (n[54] = L),
              (n[55] = P),
              (n[56] = X),
              (n[57] = o),
              (n[58] = i),
              (n[59] = G))
            : (G = n[59]),
          (t = (0, l.jsxs)(er, {
            providerLogo: r,
            openaiLogoSize: 48,
            title: s,
            errorMessage: f,
            backLabel: c,
            backDisabled: g,
            onBack: d,
            children: [
              B,
              U,
              G,
              z || null != $
                ? null
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      null != V && null != F
                        ? (0, l.jsxs)("div", {
                            className: "flex w-full flex-col gap-2",
                            children: [
                              (0, l.jsx)("p", {
                                id: v,
                                className: "text-sm font-normal text-default select-none",
                                children: (0, l.jsx)(u.A, {
                                  id: "electron.onboarding.login.bedrock.profiles.detected",
                                  defaultMessage: "AWS profile",
                                }),
                              }),
                              (0, l.jsx)(q.l, {
                                "aria-labelledby": v,
                                searchEmptyMessage: (0, l.jsx)(u.A, {
                                  id: "electron.onboarding.login.bedrock.profile.noMatches",
                                  defaultMessage: "No matching profiles",
                                }),
                                disabled: g,
                                size: "3xl",
                                value: F.name,
                                options: V.map(eo),
                                onChange: (e) => {
                                  let { value: t } = e
                                  ;(m(), A(t))
                                },
                                actions: [
                                  {
                                    id: "other-profile",
                                    Icon: H.D_h,
                                    label: b.formatMessage({
                                      id: "electron.onboarding.login.bedrock.profile.other",
                                      defaultMessage: "Enter another profile",
                                    }),
                                    onSelect: () => {
                                      ;(_(""), N(""), X("profile"))
                                    },
                                  },
                                ],
                              }),
                              (0, l.jsx)(w.$, {
                                className: "mt-4 w-full justify-center",
                                radius: "full",
                                size: "onboardingAction",
                                disabled: g,
                                loading: g,
                                onClick: () => {
                                  let e = F.region
                                  if (null == e) {
                                    ;(_(F.name), N(""), X("profile"))
                                    return
                                  }
                                  x({ method: "profile", profile: F.name, region: e })
                                },
                                children: (0, l.jsx)(u.A, {
                                  id: "electron.onboarding.login.bedrock.continue",
                                  defaultMessage: "Continue",
                                }),
                              }),
                            ],
                          })
                        : null,
                      a?.environmentCredentialsAvailable === !0
                        ? (0, l.jsx)(w.$, {
                            className: "w-full justify-center",
                            color: null == F ? "primary" : "ghostTertiary",
                            size: null == F ? "large" : "default",
                            disabled: g,
                            onClick: () => {
                              ;(N(a.environmentRegion ?? ""), X("environment"))
                            },
                            children: (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.bedrock.environment.continue",
                              defaultMessage: "Continue with detected credentials",
                            }),
                          })
                        : null,
                      (0, l.jsx)(w.$, {
                        className: "w-full justify-center",
                        color: "outlineSurface",
                        radius: "full",
                        size: "onboardingAction",
                        disabled: g,
                        onClick: () => {
                          ;(_(F?.name ?? ""), N(null != F ? (F.region ?? "") : (a?.region ?? "")), X("profile"))
                        },
                        children: (0, l.jsx)(u.A, {
                          id: "electron.onboarding.login.bedrock.otherMethods",
                          defaultMessage: "Other AWS sign-in methods",
                        }),
                      }),
                    ],
                  }),
            ],
          })),
          (n[0] = I),
          (n[1] = T),
          (n[2] = a),
          (n[3] = v),
          (n[4] = k),
          (n[5] = f),
          (n[6] = b),
          (n[7] = z),
          (n[8] = g),
          (n[9] = y),
          (n[10] = p),
          (n[11] = m),
          (n[12] = h),
          (n[13] = x),
          (n[14] = O),
          (n[15] = C),
          (n[16] = M),
          (n[17] = L),
          (n[18] = j),
          (n[19] = P),
          (n[20] = o),
          (n[21] = i),
          (n[22] = t))
      } else t = n[22]
      return t
    }
    function eo(e) {
      let { name: t, region: n } = e
      return {
        value: t,
        label: t,
        description:
          null == n
            ? void 0
            : (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.bedrock.profile.region",
                defaultMessage: "Region: {region}",
                values: { region: n },
              }),
      }
    }
    let es = (0, $.YK)({
      profile: { id: "electron.onboarding.login.bedrock.profile.method", defaultMessage: "AWS profile" },
      accessKeys: { id: "electron.onboarding.login.bedrock.accessKeys.method", defaultMessage: "AWS access keys" },
      apiKey: { id: "electron.onboarding.login.bedrock.apiKey.method", defaultMessage: "Bedrock API key" },
    })
    var ec = n("ZjI6"),
      ed = n("iiY7"),
      eu = n("Przp"),
      eg = n("eO2m"),
      ef = n("slpy"),
      ep = n("bqtn"),
      em = n("q4Sp5"),
      eh = n("vTR8"),
      ex = n("rB0G"),
      eb = n("ocvj"),
      ey = n("ASxG"),
      ev = n("p4kj"),
      ew = n("B81s"),
      ej = n("uSOC"),
      eS = n("X5YM")
    let ek = ey.Ikc({
      data: ey.Ikc({ config_write_error_code: ey.euz("configValidationError") }),
      message: ey.YjP().min(1),
    })
    class eA extends Error {}
    let eC = (0, o.vU)(R.u, (e, { scope: t }) => ({
        queryKey: ["config", "onboarding-gateways", P.fI, e],
        staleTime: 0,
        retry: !1,
        queryFn: () => eM(t, e),
      })),
      e_ = (0, o.un)(R.u, ({ get: e }) => {
        if (!e(b.uC, "gateway")) return !1
        let t = e(eS.Q, P.fI)
        return "ready" === t.status && (t.api || (e(eC, !1).data?.data.length ?? 0) > 0)
      })
    async function eM(e, t, n) {
      let l = (0, f.ls)(e, P.fI),
        { data: r, defaultProviderId: a, canChangeDefault: i } = await l.sendRequest("modelProvider/list", {}),
        o = t ? null : (n ?? (await l.sendRequest("config/read", { includeLayers: !1, cwd: null }))),
        s = (0, eh.YV)(o?.config.model_providers)
      return {
        data: r.filter(
          ({ id: e, settings: n }) =>
            "customGateway" === n.type && (i || e === a) && (t || !0 === (0, eh.YV)(s[e]).requires_openai_auth),
        ),
        defaultProviderId: a,
        canChangeDefault: i,
      }
    }
    async function eN(e, t) {
      let [n, l] = await Promise.all([(0, f.ls)(e, P.fI).getAccount(), (0, b.fz)(e)])
      if (l?.providerId !== t) throw Error("The selected gateway is not active")
      if ((e.set(b.ql, !1), (0, ev.k)(n))) return "primary"
      if (l.required && "succeeded" !== l.status) {
        await (0, h.$f)(e)
        let n = e.get(b.C4).data
        if (n?.providerId !== t || "succeeded" !== n.status) return "cancelled"
      }
      return (await (0, ej.q)(e, P.fI, !0), "ready")
    }
    function eI(e) {
      let t,
        n,
        a,
        i,
        s,
        g,
        f,
        p,
        m,
        h,
        x,
        b,
        y = (0, r.c)(66),
        { allowApiKey: v, busy: j, onBack: S, onCreate: k, onSelect: A } = e,
        C = (0, d.A)(),
        { data: _, isError: M, isPending: N, refetch: I } = (0, o._U)(eC, v),
        [E, L] = (0, c.useState)(null),
        [R, P] = (0, c.useState)(!1),
        D = (0, c.useRef)(!1),
        [T, K] = (0, c.useState)(!1)
      y[0] !== _?.data ? ((t = _?.data ?? []), (y[0] = _?.data), (y[1] = t)) : (t = y[1])
      let z = t,
        O = v && _?.canChangeDefault,
        B = R && O
      y[2] !== C || y[3] !== A || y[4] !== I
        ? ((n = async (e) => {
            L(null)
            try {
              await A(e)
            } catch {
              ;(L(
                C.formatMessage({
                  id: "electron.onboarding.login.gateway.connectError",
                  defaultMessage: "Couldn\u2019t connect. Check your provider configuration and try again.",
                }),
              ),
                I())
            }
          }),
          (y[2] = C),
          (y[3] = A),
          (y[4] = I),
          (y[5] = n))
        : (n = y[5])
      let U = n
      y[6] !== j || y[7] !== C || y[8] !== k || y[9] !== I || y[10] !== T || y[11] !== U || y[12] !== B
        ? ((a = async (e) => {
            if (B && !j && !T) {
              ;(K(!0), L(null))
              try {
                let t = await k((0, eh.Li)(e))
                ;(P(!1), I(), await U(t))
              } catch (e) {
                e instanceof eA
                  ? L(e.message)
                  : (P(!1),
                    L(
                      C.formatMessage({
                        id: "electron.onboarding.login.gateway.createError",
                        defaultMessage:
                          "Couldn\u2019t confirm the provider was saved. Check the list before adding it again.",
                      }),
                    ),
                    await I())
              }
              K(!1)
            }
          }),
          (y[6] = j),
          (y[7] = C),
          (y[8] = k),
          (y[9] = I),
          (y[10] = T),
          (y[11] = U),
          (y[12] = B),
          (y[13] = a))
        : (a = y[13])
      let G = a
      if (B) {
        let e,
          t,
          n,
          r = j || T
        ;(y[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => L(null)), (y[14] = e)) : (e = y[14]),
          y[15] !== G ? ((t = (e) => void G(e)), (y[15] = G), (y[16] = t)) : (t = y[16]),
          y[17] !== r || y[18] !== t
            ? ((n = (0, l.jsx)(eE, { busy: r, onChange: e, onSave: t })), (y[17] = r), (y[18] = t), (y[19] = n))
            : (n = y[19]),
          (i = n))
      } else if (M) {
        let e
        ;(y[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("p", {
              role: "alert",
              className: "text-center",
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.gateway.loadError",
                defaultMessage: "Couldn\u2019t load your providers",
              }),
            })),
            (y[20] = e))
          : (e = y[20]),
          (i = e))
      } else if (N) {
        let e
        ;(y[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("p", {
              role: "status",
              className: "text-center",
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.gateway.loading",
                defaultMessage: "Loading providers\u2026",
              }),
            })),
            (y[21] = e))
          : (e = y[21]),
          (i = e))
      } else if (0 === z.length) {
        let e
        ;(y[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("p", {
              className: "text-center text-secondary",
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.gateway.empty",
                defaultMessage: "No saved providers available",
              }),
            })),
            (y[22] = e))
          : (e = y[22]),
          (i = e))
      } else {
        let e,
          t,
          n,
          r,
          a,
          o = j || T,
          s = j || T
        if (
          (y[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.gateway.selectProvider",
                defaultMessage: "Select a model provider",
              })),
              (t = (0, l.jsx)(H.Aq_, {})),
              (y[23] = e),
              (y[24] = t))
            : ((e = y[23]), (t = y[24])),
          y[25] !== s
            ? ((n = (0, l.jsxs)(w.$, {
                className: "w-full",
                color: "outlineSurface",
                radius: "full",
                size: "onboardingAction",
                disabled: s,
                children: [e, t],
              })),
              (y[25] = s),
              (y[26] = n))
            : (n = y[26]),
          y[27] !== z || y[28] !== U)
        ) {
          let e
          ;(y[30] !== U
            ? ((e = (e) => {
                let { id: t, name: n } = e
                return (0, l.jsx)(
                  ep.ms.Item,
                  {
                    SubText: t !== n ? (0, l.jsx)("span", { children: t }) : void 0,
                    onClick: () => void U(t),
                    children: n,
                  },
                  t,
                )
              }),
              (y[30] = U),
              (y[31] = e))
            : (e = y[31]),
            (r = z.map(e)),
            (y[27] = z),
            (y[28] = U),
            (y[29] = r))
        } else r = y[29]
        ;(y[32] !== o || y[33] !== n || y[34] !== r
          ? ((a = (0, l.jsx)(ep.Ab, {
              matchTriggerWidth: !0,
              contentMaxHeight: "list",
              disabled: o,
              triggerButton: n,
              children: r,
            })),
            (y[32] = o),
            (y[33] = n),
            (y[34] = r),
            (y[35] = a))
          : (a = y[35]),
          (i = a))
      }
      ;(y[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, l.jsx)(ex.s3, { type: "custom", size: "large" })), (y[36] = s))
        : (s = y[36]),
        y[37] !== B
          ? ((g = B
              ? (0, l.jsx)(u.A, {
                  id: "electron.onboarding.login.gateway.createTitle",
                  defaultMessage: "Add a provider",
                })
              : (0, l.jsx)(u.A, {
                  id: "electron.onboarding.login.gateway.title",
                  defaultMessage: "Choose a model provider",
                })),
            (y[37] = B),
            (y[38] = g))
          : (g = y[38]),
        y[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, l.jsx)(u.A, { id: "electron.onboarding.login.gateway.back", defaultMessage: "Back" })),
            (y[39] = f))
          : (f = y[39]))
      let V = j || T
      return (
        y[40] !== S || y[41] !== B
          ? ((p = B
              ? () => {
                  ;((D.current = !0), L(null), P(!1))
                }
              : S),
            (y[40] = S),
            (y[41] = B),
            (y[42] = p))
          : (p = y[42]),
        y[43] !== j || y[44] !== O || y[45] !== M || y[46] !== T || y[47] !== B
          ? ((m =
              B || !O || M
                ? null
                : (0, l.jsxs)(w.$, {
                    ref: (e) => {
                      null != e && D.current && (e.focus(), (D.current = !1))
                    },
                    className: "shrink-0",
                    color: "primary",
                    radius: "full",
                    size: "onboardingAction",
                    disabled: j || T,
                    onClick: () => {
                      ;(L(null), P(!0))
                    },
                    children: [
                      (0, l.jsx)(H.D_h, {}),
                      (0, l.jsx)(u.A, {
                        id: "electron.onboarding.login.gateway.add",
                        defaultMessage: "Add a new model provider",
                      }),
                    ],
                  })),
            (y[43] = j),
            (y[44] = O),
            (y[45] = M),
            (y[46] = T),
            (y[47] = B),
            (y[48] = m))
          : (m = y[48]),
        y[49] !== j
          ? ((h = j
              ? (0, l.jsx)("p", {
                  role: "status",
                  className: "text-center",
                  children: (0, l.jsx)(u.A, {
                    id: "electron.onboarding.login.gateway.connecting",
                    defaultMessage: "Connecting\u2026",
                  }),
                })
              : null),
            (y[49] = j),
            (y[50] = h))
          : (h = y[50]),
        y[51] !== j || y[52] !== M || y[53] !== I || y[54] !== T || y[55] !== B
          ? ((x =
              !B && M
                ? (0, l.jsx)(w.$, {
                    color: "outlineSurface",
                    radius: "full",
                    disabled: j || T,
                    onClick: () => void I(),
                    children: (0, l.jsx)(u.A, {
                      id: "electron.onboarding.login.gateway.refresh",
                      defaultMessage: "Refresh",
                    }),
                  })
                : null),
            (y[51] = j),
            (y[52] = M),
            (y[53] = I),
            (y[54] = T),
            (y[55] = B),
            (y[56] = x))
          : (x = y[56]),
        y[57] !== i ||
        y[58] !== E ||
        y[59] !== h ||
        y[60] !== x ||
        y[61] !== g ||
        y[62] !== V ||
        y[63] !== p ||
        y[64] !== m
          ? ((b = (0, l.jsxs)(er, {
              providerLogo: s,
              openaiLogoSize: 28,
              title: g,
              errorMessage: E,
              backLabel: f,
              backDisabled: V,
              onBack: p,
              children: [i, m, h, x],
            })),
            (y[57] = i),
            (y[58] = E),
            (y[59] = h),
            (y[60] = x),
            (y[61] = g),
            (y[62] = V),
            (y[63] = p),
            (y[64] = m),
            (y[65] = b))
          : (b = y[65]),
        b
      )
    }
    function eE(e) {
      let t,
        n,
        a,
        i,
        o,
        s,
        d,
        g,
        f,
        p,
        m = (0, r.c)(30),
        { busy: h, onChange: x, onSave: b } = e,
        [y, v] = (0, c.useState)(eL)
      m[0] !== y ? ((t = (0, eh.T$)(y, "create")), (m[0] = y), (m[1] = t)) : (t = m[1])
      let j = t
      ;(m[2] !== h || m[3] !== y || m[4] !== j.length || m[5] !== b
        ? ((n = (e) => {
            ;(e.preventDefault(), h || 0 !== j.length || b(y))
          }),
          (m[2] = h),
          (m[3] = y),
          (m[4] = j.length),
          (m[5] = b),
          (m[6] = n))
        : (n = m[6]),
        m[7] !== y || m[8] !== x
          ? ((a = (e) => {
              ;(x(), v({ ...y, ...e }))
            }),
            (m[7] = y),
            (m[8] = x),
            (m[9] = a))
          : (a = m[9]),
        m[10] !== h || m[11] !== y || m[12] !== a
          ? ((i = (0, l.jsx)("div", {
              className: "flex flex-col gap-4",
              children: (0, l.jsx)(em.yA, { autoFocusName: !0, draft: y, disabled: h, onChange: a }),
            })),
            (m[10] = h),
            (m[11] = y),
            (m[12] = a),
            (m[13] = i))
          : (i = m[13]),
        m[14] !== h || m[15] !== i
          ? ((o = (0, l.jsx)("fieldset", { disabled: h, className: "min-w-0", children: i })),
            (m[14] = h),
            (m[15] = i),
            (m[16] = o))
          : (o = m[16]),
        m[17] !== j ? ((s = j.length ? (0, l.jsx)(eb.A, { issues: j }) : null), (m[17] = j), (m[18] = s)) : (s = m[18]))
      let S = j.length > 0 || void 0
      return (
        m[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.gateway.saveAndContinue",
              defaultMessage: "Save and continue",
            })),
            (m[19] = d))
          : (d = m[19]),
        m[20] !== h || m[21] !== S
          ? ((g = (0, l.jsx)(w.$, {
              className: "w-full",
              radius: "full",
              size: "onboardingAction",
              type: "submit",
              loading: h,
              disabled: h,
              "aria-disabled": S,
              children: d,
            })),
            (m[20] = h),
            (m[21] = S),
            (m[22] = g))
          : (g = m[22]),
        m[23] !== s || m[24] !== g
          ? ((f = (0, l.jsx)(ef.m, { content: s, children: g })), (m[23] = s), (m[24] = g), (m[25] = f))
          : (f = m[25]),
        m[26] !== f || m[27] !== n || m[28] !== o
          ? ((p = (0, l.jsxs)("form", {
              className: "group/settings flex flex-col gap-4",
              "data-density": "form",
              onSubmit: n,
              children: [o, f],
            })),
            (m[26] = f),
            (m[27] = n),
            (m[28] = o),
            (m[29] = p))
          : (p = m[29]),
        p
      )
    }
    function eL() {
      return (0, eh.AT)()
    }
    var eR = n("Q4Fx"),
      eP = n("S5i1")
    function eD(e) {
      let t,
        n,
        a,
        i,
        o,
        d,
        g,
        f,
        p,
        m,
        h,
        x,
        b,
        y,
        v = (0, r.c)(33),
        { onBack: j, onSubmit: S } = e
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { projectId: "", location: null, credentialFile: null }), (v[0] = t))
        : (t = v[0])
      let [k, A] = (0, c.useState)(t),
        [C, _] = (0, c.useState)(!1),
        [M, N] = (0, c.useState)(null)
      return (
        v[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsx)(eR.A, { "aria-hidden": "true", className: "size-full" })), (v[1] = n))
          : (n = v[1]),
        v[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.gcp.title",
              defaultMessage: "Set up Google Cloud",
            })),
            (v[2] = a))
          : (a = v[2]),
        v[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(u.A, { id: "electron.onboarding.login.gcp.back", defaultMessage: "Back" })), (v[3] = i))
          : (i = v[3]),
        v[4] === Symbol.for("react.memo_cache_sentinel") ? ((o = () => N(null)), (v[4] = o)) : (o = v[4]),
        v[5] !== k.credentialFile || v[6] !== k.location || v[7] !== k.projectId || v[8] !== C || v[9] !== S
          ? ((d = (e) => {
              e.preventDefault()
              let t = k.projectId.trim()
              t &&
                !C &&
                (N(null),
                _(!0),
                S({
                  projectId: t,
                  location: k.location?.trim() || null,
                  credentialFile: k.credentialFile?.trim() || null,
                })
                  .catch((e) => N((0, s.Rt_)(e)))
                  .finally(() => _(!1)))
            }),
            (v[5] = k.credentialFile),
            (v[6] = k.location),
            (v[7] = k.projectId),
            (v[8] = C),
            (v[9] = S),
            (v[10] = d))
          : (d = v[10]),
        v[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (e) => {
              ;(A((t) => ({ ...t, ...e })), N(null))
            }),
            (v[11] = g))
          : (g = v[11]),
        v[12] !== k
          ? ((f = (0, l.jsx)(eP.d, { fields: k, onChange: g, onError: N })), (v[12] = k), (v[13] = f))
          : (f = v[13]),
        v[14] !== k.projectId || v[15] !== C
          ? ((p = C || !k.projectId.trim()), (v[14] = k.projectId), (v[15] = C), (v[16] = p))
          : (p = v[16]),
        v[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, l.jsx)(u.A, { id: "electron.onboarding.login.gcp.continue", defaultMessage: "Continue" })),
            (v[17] = m))
          : (m = v[17]),
        v[18] !== C || v[19] !== p
          ? ((h = (0, l.jsx)(w.$, {
              className: "w-full justify-center",
              radius: "full",
              size: "onboardingAction",
              type: "submit",
              disabled: p,
              loading: C,
              children: m,
            })),
            (v[18] = C),
            (v[19] = p),
            (v[20] = h))
          : (h = v[20]),
        v[21] !== C || v[22] !== h || v[23] !== f
          ? ((x = (0, l.jsxs)("fieldset", { className: "flex w-full flex-col gap-4", disabled: C, children: [f, h] })),
            (v[21] = C),
            (v[22] = h),
            (v[23] = f),
            (v[24] = x))
          : (x = v[24]),
        v[25] !== x || v[26] !== d
          ? ((b = (0, l.jsx)("form", { onChange: o, onSubmit: d, children: x })), (v[25] = x), (v[26] = d), (v[27] = b))
          : (b = v[27]),
        v[28] !== M || v[29] !== C || v[30] !== j || v[31] !== b
          ? ((y = (0, l.jsx)(er, {
              providerLogo: n,
              openaiLogoSize: 48,
              title: a,
              errorMessage: M,
              backLabel: i,
              backDisabled: C,
              onBack: j,
              children: b,
            })),
            (v[28] = M),
            (v[29] = C),
            (v[30] = j),
            (v[31] = b),
            (v[32] = y))
          : (y = v[32]),
        y
      )
    }
    function eT(e) {
      let t,
        n,
        a,
        i = (0, r.c)(4),
        { onClick: o } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(eR.A, { "aria-hidden": "true", className: "size-4" })),
            (n = (0, l.jsx)(u.A, { id: "electron.onboarding.login.gcp.open", defaultMessage: "Google Cloud" })),
            (i[0] = t),
            (i[1] = n))
          : ((t = i[0]), (n = i[1])),
        i[2] !== o
          ? ((a = (0, l.jsxs)(w.$, {
              className: "w-full",
              color: "outlineSurface",
              contentLayout: "balanced",
              radius: "full",
              size: "onboardingAction",
              type: "button",
              onClick: o,
              children: [t, n],
            })),
            (i[2] = o),
            (i[3] = a))
          : (a = i[3]),
        a
      )
    }
    var eK = n("J3WM"),
      ez = n("LH8k"),
      eO = n("GDNt")
    let eB = new Set([
        "EAI_AGAIN",
        "ECONNREFUSED",
        "ECONNRESET",
        "ENOTFOUND",
        "ETIMEDOUT",
        "ERR_CONNECTION_RESET",
        "ERR_NETWORK_CHANGED",
        "ERR_TIMED_OUT",
      ]),
      eU = new Set(["authentication_error", "forbidden", "invalid_api_key", "token_invalidated", "unauthorized"]),
      eG = new Set([
        "failed to fetch",
        "fetch failed",
        "load failed",
        "network request failed",
        "networkerror when attempting to fetch resource.",
        "request timed out",
      ])
    function eV(e) {
      if (e instanceof Error && "AbortError" === e.name) return "abort"
      if (e instanceof Error && "TimeoutError" === e.name) return "network"
      if (e instanceof eO.fk) {
        if (401 === e.status || 403 === e.status) return "auth"
        if (0 === e.status || 408 === e.status || 504 === e.status || (null != e.errorCode && eB.has(e.errorCode)))
          return "network"
        let t = (0, ez.d)(e)
        return (t?.type != null && eU.has(t.type)) || (null != e.errorCode && eU.has(e.errorCode)) ? "auth" : "unknown"
      }
      if (e instanceof Error && "code" in e && "string" == typeof e.code && eB.has(e.code)) return "network"
      let t = ("string" == typeof e ? e : e instanceof Error ? e.message : "").trim().toLowerCase()
      return eG.has(t) ? "network" : eU.has(t) || "auth failed" === t || "invalid api key" === t ? "auth" : "unknown"
    }
    var eF = n("x2lX"),
      eW = n("on57"),
      eq = n("JIuM"),
      e$ = n("LhhH"),
      eH = n("HOLv"),
      eZ = n("BPFy"),
      eY = n("wq58"),
      eX = n("afqi"),
      eJ = n("iv8n"),
      eQ = n("dJBt"),
      e0 = n("IO5C"),
      e1 = n("XYHU")
    let e2 = (0, o.un)(R.u, ({ get: e }) => null != L.appServices.chatGptBrowserSession && "windows" === e(e1.IU)),
      e4 = (0, o.un)(R.u, ({ get: e }) => (e(e2) ? "504848717" : "1504988142"))
    var e5 = n("ClGD"),
      e3 = n("RHhA")
    let e6 = s.x1u.allowDebugMenu((0, e3.t)()),
      e7 = [],
      e8 = new Set()
    function e9(e, t = {}) {
      e6 && te({ source: "renderer", stage: e, details: t })
    }
    function te(e) {
      if (e6)
        for (let t of (console.log(`[browser-session] ${JSON.stringify(e)}`), (e7 = [...e7.slice(-49), e]), e8)) t()
    }
    var tt = n("toKG")
    let tn = (0, o.RD)(R.u, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: t }) => {
          if (e6) for (let e of ((e7 = []), e8)) e()
          e9("eligibility_query_started", { serviceAvailable: null != L.appServices.chatGptBrowserSession })
          let n = (await L.appServices.chatGptBrowserSession?.getLookupEligibility()) ?? null
          return t.aborted
            ? null
            : (e9("eligibility_query_completed", { eligible: n?.eligible ?? !1, resultAvailable: null != n }),
              null != n &&
                (0, E.yy)(e, e5.CodexDesktopLoginBrowserSessionLookupEligibilityEvaluated, {
                  arm64CheckPassed: n.arm64,
                  browserHasVisibleWindow: n.browserHasVisibleWindow,
                  browserIsRunning: n.browserIsRunning,
                  eligible: n.eligible,
                  macosCheckPassed: n.macOS,
                }),
              n)
        },
        queryKey: ["chatgpt-browser-session-lookup-eligibility"],
        retry: !1,
        staleTime: 1 / 0,
      })),
      tl = (0, o.vU)(R.u, (e, { scope: t }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: n }) => {
          let l = L.appServices.chatGptBrowserSession
          if ((e9("profile_query_started", { serviceAvailable: null != l }), null == l))
            return (e9("profile_query_skipped", { reason: "service_unavailable" }), null)
          let r = crypto.randomUUID(),
            a = () => {
              l.cancelProbe(r)
            }
          if ((n.addEventListener("abort", a, { once: !0 }), n.aborted))
            return (e9("profile_query_aborted_before_probe"), a(), null)
          try {
            let { chatGptDesktopAuthOrigin: a } = await L.appServices.appInfo.get()
            if (n.aborted) return (e9("profile_query_aborted_before_probe"), null)
            let i = performance.now(),
              o = await l.probe(r, (0, tt.N)(a), e, e6 ? te : void 0),
              s = (o?.length ?? 0) > 0
            return (
              n.aborted ||
                (0, E.yy)(t, e5.CodexDesktopLoginBrowserSessionLookupCompleted, {
                  latencyMs: Math.round(performance.now() - i),
                  profileFound: s,
                }),
              e9("profile_query_completed", { profileFound: s, signedOut: o?.length === 0 }),
              o
            )
          } catch (e) {
            throw (e9("profile_query_failed"), e)
          } finally {
            n.removeEventListener("abort", a)
          }
        },
        queryKey: ["chatgpt-browser-session-profiles", e],
        retry: !1,
        staleTime: 1 / 0,
      }))
    var tr = n("ZtSy")
    function ta() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("p", {
              className: "pb-3 text-start text-sm text-secondary select-none",
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.apikey.createKey",
                defaultMessage: "Don\u2019t have an API key? <createKey>Create one here.</createKey>",
                values: { createKey: ti },
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function ti(e) {
      return (0, l.jsx)(tr.G, {
        href: "https://platform.openai.com/api-keys",
        initiator: "open_in_browser_bridge",
        isBrowserEnabled: !1,
        openTarget: "external-browser",
        underline: "always",
        children: e,
      })
    }
    var to = n("K1N8"),
      ts = n("zLIa")
    function tc(e) {
      let t,
        n,
        a,
        i,
        o,
        s,
        c,
        g,
        f,
        p,
        m,
        h,
        x,
        b,
        y,
        v,
        j,
        S,
        k,
        A,
        C,
        _,
        M,
        N,
        I,
        E,
        L,
        R = (0, r.c)(46),
        { allowOtherSignInMethods: P, onChatGptSignIn: D, onShowOtherSignInMethods: T } = e,
        K = (0, d.A)()
      return (
        R[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(eX.A, { className: "shrink-0" })), (R[0] = t))
          : (t = R[0]),
        R[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsxs)("div", {
              className: "flex flex-col items-center gap-4 text-center",
              children: [
                t,
                (0, l.jsx)("h1", {
                  className: "text-3xl font-normal",
                  children: (0, l.jsx)(u.A, {
                    id: "electron.onboarding.login.fallback.title",
                    defaultMessage: "Log in or sign up",
                  }),
                }),
              ],
            })),
            (R[1] = n))
          : (n = R[1]),
        R[2] !== D ? ((a = () => void D("signin")), (R[2] = D), (R[3] = a)) : (a = R[3]),
        R[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(eY.A, { "aria-hidden": "true", className: "size-5 shrink-0" })),
            (o = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.fallback.chatgpt",
              defaultMessage: "Continue with ChatGPT",
            })),
            (R[4] = i),
            (R[5] = o))
          : ((i = R[4]), (o = R[5])),
        R[6] !== a
          ? ((s = (0, l.jsxs)(w.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: a,
              children: [i, o],
            })),
            (R[6] = a),
            (R[7] = s))
          : (s = R[7]),
        R[8] !== D ? ((c = () => void D("google")), (R[8] = D), (R[9] = c)) : (c = R[9]),
        R[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, l.jsx)(eR.A, { "aria-hidden": "true", className: "size-5 shrink-0" })),
            (f = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.google.signIn",
              defaultMessage: "Continue with Google",
            })),
            (R[10] = g),
            (R[11] = f))
          : ((g = R[10]), (f = R[11])),
        R[12] !== c
          ? ((p = (0, l.jsxs)(w.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: c,
              children: [g, f],
            })),
            (R[12] = c),
            (R[13] = p))
          : (p = R[13]),
        R[14] !== D ? ((m = () => void D("apple")), (R[14] = D), (R[15] = m)) : (m = R[15]),
        R[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, l.jsx)(H.YEY, {})),
            (x = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.apple.signIn",
              defaultMessage: "Continue with Apple",
            })),
            (R[16] = h),
            (R[17] = x))
          : ((h = R[16]), (x = R[17])),
        R[18] !== m
          ? ((b = (0, l.jsxs)(w.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: m,
              children: [h, x],
            })),
            (R[18] = m),
            (R[19] = b))
          : (b = R[19]),
        R[20] !== p || R[21] !== b || R[22] !== s
          ? ((y = (0, l.jsxs)("div", { className: "flex w-full flex-col gap-3", children: [s, p, b] })),
            (R[20] = p),
            (R[21] = b),
            (R[22] = s),
            (R[23] = y))
          : (y = R[23]),
        R[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, l.jsxs)("div", {
              className: "flex items-center gap-6 py-1 text-xs text-secondary",
              "aria-hidden": "true",
              children: [
                (0, l.jsx)("div", { className: "h-px flex-1 bg-border" }),
                (0, l.jsx)(u.A, { id: "electron.onboarding.login.fallback.or", defaultMessage: "OR" }),
                (0, l.jsx)("div", { className: "h-px flex-1 bg-border" }),
              ],
            })),
            (R[24] = v))
          : (v = R[24]),
        R[25] !== D
          ? ((j = (e) => {
              e.preventDefault()
              let t = new FormData(e.currentTarget).get("username")
              "string" == typeof t && D("email", t.trim())
            }),
            (R[25] = D),
            (R[26] = j))
          : (j = R[26]),
        R[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, l.jsx)("span", {
              className: "sr-only",
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.fallback.emailLabel",
                defaultMessage: "Email address",
              }),
            })),
            (R[27] = S))
          : (S = R[27]),
        R[28] !== K
          ? ((k = K.formatMessage({
              id: "electron.onboarding.login.fallback.emailPlaceholder",
              defaultMessage: "Email",
            })),
            (R[28] = K),
            (R[29] = k))
          : (k = R[29]),
        R[30] !== k
          ? ((A = (0, l.jsxs)("label", {
              children: [
                S,
                (0, l.jsx)(ts.pd, {
                  variant: "auth",
                  name: "username",
                  type: "email",
                  autoComplete: "email",
                  maxLength: 320,
                  required: !0,
                  placeholder: k,
                }),
              ],
            })),
            (R[30] = k),
            (R[31] = A))
          : (A = R[31]),
        R[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, l.jsx)(w.$, {
              color: "primary",
              radius: "full",
              size: "auth",
              type: "submit",
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.fallback.continue",
                defaultMessage: "Continue",
              }),
            })),
            (R[32] = C))
          : (C = R[32]),
        R[33] !== j || R[34] !== A
          ? ((_ = (0, l.jsxs)("form", { className: "flex w-full flex-col gap-5", onSubmit: j, children: [A, C] })),
            (R[33] = j),
            (R[34] = A),
            (R[35] = _))
          : (_ = R[35]),
        R[36] !== P || R[37] !== T
          ? ((M = P
              ? (0, l.jsx)(w.$, {
                  className: "self-center",
                  color: "ghostMuted",
                  size: "inline",
                  type: "button",
                  onClick: T,
                  children: (0, l.jsx)(u.A, {
                    id: "electron.onboarding.login.apikey.open.welcomeV2",
                    defaultMessage: "Sign in another way",
                  }),
                })
              : null),
            (R[36] = P),
            (R[37] = T),
            (R[38] = M))
          : (M = R[38]),
        R[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, l.jsx)(tr.G, {
              appearance: "secondary",
              href: "https://openai.com/policies/terms-of-use/",
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.fallback.terms",
                defaultMessage: "Terms of use",
              }),
            })),
            (I = (0, l.jsx)("div", { "aria-hidden": "true", className: "h-3 w-px bg-border" })),
            (R[39] = N),
            (R[40] = I))
          : ((N = R[39]), (I = R[40])),
        R[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, l.jsxs)("div", {
              className: "flex flex-wrap items-center justify-center gap-3 text-xs text-secondary",
              children: [
                N,
                I,
                (0, l.jsx)(tr.G, {
                  appearance: "secondary",
                  href: "https://openai.com/policies/privacy-policy/",
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                  children: (0, l.jsx)(u.A, {
                    id: "electron.onboarding.login.fallback.privacy",
                    defaultMessage: "Privacy policy",
                  }),
                }),
              ],
            })),
            (R[41] = E))
          : (E = R[41]),
        R[42] !== y || R[43] !== _ || R[44] !== M
          ? ((L = (0, l.jsx)("div", {
              "data-desktop-login-surface": "",
              className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
              children: (0, l.jsx)("main", {
                className: "flex w-full shrink-0 grow flex-col items-center justify-center px-6 py-4",
                children: (0, l.jsxs)("div", {
                  className: "flex w-full max-w-sm flex-col gap-5",
                  children: [n, y, v, _, M, E],
                }),
              }),
            })),
            (R[42] = y),
            (R[43] = _),
            (R[44] = M),
            (R[45] = L))
          : (L = R[45]),
        L
      )
    }
    function td(e) {
      let t,
        n,
        a,
        i = (0, r.c)(6),
        { children: o, description: s } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(eX.A, { className: "size-10 shrink-0" })), (i[0] = t))
          : (t = i[0]),
        i[1] !== s
          ? ((n = (0, l.jsx)("p", {
              className: "text-center text-base leading-5 font-normal text-codex-description select-none",
              children: s,
            })),
            (i[1] = s),
            (i[2] = n))
          : (n = i[2]),
        i[3] !== o || i[4] !== n
          ? ((a = (0, l.jsx)("div", {
              "data-desktop-login-surface": "",
              className: "flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-12 text-default",
              children: (0, l.jsxs)("div", {
                className: "flex w-[340px] flex-col items-center gap-8",
                children: [t, n, o],
              }),
            })),
            (i[3] = o),
            (i[4] = n),
            (i[5] = a))
          : (a = i[5]),
        a
      )
    }
    function tu(e) {
      let t,
        n,
        a,
        i,
        s,
        g,
        f,
        p,
        m,
        h,
        x,
        b,
        y,
        v,
        j,
        S,
        k,
        C,
        _,
        M,
        N,
        I = (0, r.c)(97),
        {
          allowApiKey: E,
          allowChatGpt: R,
          apiKeyHelpVariant: P,
          apiKeyValue: D,
          browserSessionProfiles: K,
          canCopySignInLink: z,
          isApiKeyEntryVisible: O,
          isOtherSignInMethodsVisible: B,
          isApiKeySignInPending: U,
          isChatGptSignInPending: G,
          showAmazonBedrockSignIn: V,
          showChatGptProviderSignIn: F,
          onApiKeySubmit: W,
          onApiKeyValueChange: q,
          onChatGptSignIn: $,
          onChatGptSignUp: Y,
          onCopySignInLink: X,
          onPlaySnake: J,
          onResetApiKeyEntry: ee,
          onShowApiKeyEntry: et,
          onShowOtherSignInMethods: en,
          onHideOtherSignInMethods: el,
          onShowBedrockSetup: er,
          onShowGcpSetup: ea,
          onShowGatewaySetup: ei,
        } = e,
        eo = (0, d.A)(),
        es = E && O,
        ec = (E && (V || null != ea)) || null != ei,
        ed = E || ec,
        eu = ec && B && !es,
        eg = (0, T.Zj)(!!G && !es && "2502927686"),
        ef = L.appServices.chatGptBrowserSession,
        ep = R && void 0 === K && null != ef
      I[0] !== ep ? ((t = { enabled: ep }), (I[0] = ep), (I[1] = t)) : (t = I[1])
      let { data: em, isPending: eh } = (0, o.Ul)(tn, t),
        ex = em?.eligible ?? !1,
        eb = ep && eh,
        ey = (0, o.Ul)(e2),
        ev = (0, T.Ou)((0, o.Ul)(e4)),
        ew = ep && ex
      I[2] !== ev || I[3] !== ey || I[4] !== ew
        ? ((n = (function ({ eligible: e, isWindows: t, lookupLayer: n }) {
            if (!e) return { experience: "existing", enabled: !1, listAllAccounts: !1 }
            let l = n.get("experience", "existing")
            switch (l) {
              case "browser_lookup":
              case "browser_lookup_with_fallback":
                return { experience: l, enabled: !0, listAllAccounts: !0 }
              case "control":
                return { experience: l, enabled: !1, listAllAccounts: !1 }
              case "existing": {
                let e = n.get("enabled", !1)
                return { experience: l, enabled: e, listAllAccounts: e && (t || n.get("list_all_accounts", !1)) }
              }
              default:
                return { experience: "control", enabled: !1, listAllAccounts: !1 }
            }
          })({ eligible: ew, isWindows: ey, lookupLayer: ev })),
          (I[2] = ev),
          (I[3] = ey),
          (I[4] = ew),
          (I[5] = n))
        : (n = I[5])
      let { experience: ej, enabled: eS, listAllAccounts: ek } = n,
        eA = (0, T.Ou)("1561420571"),
        eC = !eb && "existing" === ej && (F ?? eA.get("enabled", !1)),
        e_ = (0, T.Ou)("1072464827")
      I[6] !== e_ || I[7] !== P || I[8] !== es
        ? ((a = P ?? (es ? e_.get("api_key_help_variant", "control") : "control")),
          (I[6] = e_),
          (I[7] = P),
          (I[8] = es),
          (I[9] = a))
        : (a = I[9])
      let eM = a,
        eN = "link" === eM || "explanation" === eM || "explanation-with-chatgpt" === eM ? eM : "control",
        eI = es && ("explanation" === eN || "explanation-with-chatgpt" === eN),
        eE = !ey && ev.get("update_cta_for_sign_in_with_api_key", !1),
        eL = ep && ex,
        eP = !ey && eL && ev.get("update_cta_for_sign_in_with_api_key_with_browser_lookup", !1)
      I[10] !== eS ? ((i = { enabled: eS }), (I[10] = eS), (I[11] = i)) : (i = I[11])
      let { data: eD, isPending: eK, isFetching: ez, isSuccess: eO } = (0, o._U)(tl, ek, i),
        eB = void 0 === eD ? null : eD,
        eU = eS && eK,
        eG = R ? (K ?? null) : null
      R && eS && void 0 === K && !eU && (eG = eB)
      let eV = eG?.slice(0, 3),
        eq = (eV?.length ?? 0) > 0 && !es && !eu
      if (eu) {
        let e
        ;(I[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.otherMethods.title",
              defaultMessage: "Sign in another way",
            })),
            (I[12] = e))
          : (e = I[12]),
          (s = e))
      } else if (!R || eI) {
        let e
        ;(I[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.welcomeV2.title.apiKey",
              defaultMessage: "Sign in with an API key",
            })),
            (I[13] = e))
          : (e = I[13]),
          (s = e))
      } else {
        let e
        ;(I[14] !== eq
          ? ((e = eq
              ? (0, l.jsx)(u.A, {
                  id: "electron.onboarding.login.browserSession.welcomeBack",
                  defaultMessage: "Welcome back",
                })
              : (0, l.jsx)(u.A, {
                  id: "electron.onboarding.login.welcomeV2.title.chatgptSignIn",
                  defaultMessage: "Sign in to ChatGPT",
                })),
            (I[14] = eq),
            (I[15] = e))
          : (e = I[15]),
          (s = e))
      }
      let e$ = R && G && !es,
        e1 = !e$ && !es && (eb || eU)
      if (
        (I[16] !== e1
          ? ((g = () => {
              e1 || (0, e0.Q4)()
            }),
            (f = [e1]),
            (I[16] = e1),
            (I[17] = g),
            (I[18] = f))
          : ((g = I[17]), (f = I[18])),
        (0, c.useLayoutEffect)(g, f),
        e$)
      ) {
        let e, t, n, r, a, i
        return (
          I[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.browserPending.welcomeV2",
                defaultMessage: "Continue signing in with your browser",
              })),
              (I[19] = e))
            : (e = I[19]),
          I[20] !== $ ? ((t = () => void $()), (I[20] = $), (I[21] = t)) : (t = I[21]),
          I[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.chatgpt.cancel.welcomeV2",
                defaultMessage: "Cancel sign-in",
              })),
              (I[22] = n))
            : (n = I[22]),
          I[23] !== t
            ? ((r = (0, l.jsx)("button", {
                className:
                  "flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-codex-description hover:bg-secondary-ghost-hover",
                type: "button",
                onClick: t,
                children: n,
              })),
              (I[23] = t),
              (I[24] = r))
            : (r = I[24]),
          I[25] !== z || I[26] !== X || I[27] !== eg
            ? ((a = eg
                ? (0, l.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-center gap-2",
                    children: [
                      (0, l.jsx)("span", {
                        className: "py-2 text-sm leading-5 font-normal text-codex-description select-none",
                        children: (0, l.jsx)(u.A, {
                          id: "electron.onboarding.login.browserDidNotOpen",
                          defaultMessage: "Browser didn't open?",
                        }),
                      }),
                      (0, l.jsxs)(w.$, {
                        color: "ghost",
                        disabled: !z,
                        size: "dialog",
                        onClick: () => void X(),
                        children: [
                          (0, l.jsx)(H.yDG, {}),
                          (0, l.jsx)(u.A, {
                            id: "electron.onboarding.login.copyLink",
                            defaultMessage: "Copy sign-in link",
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
              (I[25] = z),
              (I[26] = X),
              (I[27] = eg),
              (I[28] = a))
            : (a = I[28]),
          I[29] !== r || I[30] !== a
            ? ((i = (0, l.jsx)(td, {
                description: e,
                children: (0, l.jsxs)("div", {
                  className: "flex w-full flex-col items-center gap-6",
                  children: [r, a],
                }),
              })),
              (I[29] = r),
              (I[30] = a),
              (I[31] = i))
            : (i = I[31]),
          i
        )
      }
      if (e1) {
        let e
        return (
          I[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsxs)("div", {
                "data-desktop-login-surface": "",
                className:
                  "flex h-full w-full flex-col items-center justify-center gap-3 bg-surface text-codex-description",
                children: [
                  (0, l.jsx)(A.y, { className: "h-4 w-4 text-default" }),
                  (0, l.jsx)(u.A, { id: "electron.onboarding.login.loading", defaultMessage: "Loading\u2026" }),
                ],
              })),
              (I[32] = e))
            : (e = I[32]),
          e
        )
      }
      I[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = eJ.Uo.isRecording() ? (0, l.jsx)(eQ.X, { requireVisibleAtPaint: !0, onPaint: tg }) : null), (I[33] = p))
        : (p = I[33])
      let e5 = p
      if ("browser_lookup_with_fallback" === ej && eS && eO && !ez && eB?.length === 0 && !es && !eu) {
        let e,
          t,
          n = ec ? en : et
        return (
          I[34] !== ed || I[35] !== $ || I[36] !== n
            ? ((e = (0, l.jsx)(tc, { allowOtherSignInMethods: ed, onChatGptSignIn: $, onShowOtherSignInMethods: n })),
              (I[34] = ed),
              (I[35] = $),
              (I[36] = n),
              (I[37] = e))
            : (e = I[37]),
          I[38] !== e5 || I[39] !== e
            ? ((t = (0, l.jsxs)(l.Fragment, { children: [e5, e] })), (I[38] = e5), (I[39] = e), (I[40] = t))
            : (t = I[40]),
          t
        )
      }
      let e3 = eu && "px-6"
      I[41] !== e3
        ? ((m = (0, eW.A)(
            "flex h-full w-full scroll-pt-(--height-toolbar-sm) flex-col overflow-y-auto bg-surface pb-6 text-default",
            e3,
          )),
          (I[41] = e3),
          (I[42] = m))
        : (m = I[42])
      let e6 = eI ? "gap-5" : "gap-4"
      ;(I[43] !== e6
        ? ((h = (0, eW.A)("flex w-full flex-col items-center", e6)), (I[43] = e6), (I[44] = h))
        : (h = I[44]),
        I[45] !== eo
          ? ((x = eo.formatMessage({ id: "electron.onboarding.login.snake.start", defaultMessage: "Play Snake" })),
            (I[45] = eo),
            (I[46] = x))
          : (x = I[46]),
        I[47] !== eu
          ? ((b = eu
              ? (0, l.jsx)("img", { alt: "", className: "size-12 invert-5 dark:invert-95", src: Q })
              : (0, l.jsx)(eX.A, { className: "shrink-0" })),
            (I[47] = eu),
            (I[48] = b))
          : (b = I[48]),
        I[49] !== J || I[50] !== x || I[51] !== b
          ? ((y = (0, l.jsx)(w.$, {
              className: "group justify-center",
              color: "ghostMuted",
              radius: "full",
              size: "inline",
              type: "button",
              "aria-label": x,
              onClick: J,
              children: b,
            })),
            (I[49] = J),
            (I[50] = x),
            (I[51] = b),
            (I[52] = y))
          : (y = I[52]),
        I[53] !== s
          ? ((v = (0, l.jsx)("h1", {
              className: "w-[316px] max-w-full text-center text-[28px] leading-9 font-normal text-default",
              children: s,
            })),
            (I[53] = s),
            (I[54] = v))
          : (v = I[54]),
        I[55] !== eI
          ? ((j = eI
              ? (0, l.jsx)("p", {
                  className: "text-center text-base leading-6 text-secondary select-none",
                  children: (0, l.jsx)(u.A, {
                    id: "electron.onboarding.login.apikey.explanation",
                    defaultMessage: "Use OpenAI\u2019s developer platform with separate, usage-based billing",
                  }),
                })
              : null),
            (I[55] = eI),
            (I[56] = j))
          : (j = I[56]),
        I[57] !== eq
          ? ((S = eq
              ? (0, l.jsx)("p", {
                  className: "text-center text-[14px] leading-5 text-codex-description",
                  children: (0, l.jsx)(u.A, {
                    id: "electron.onboarding.login.browserSession.chooseAccount",
                    defaultMessage: "Choose an account to continue to ChatGPT",
                  }),
                })
              : null),
            (I[57] = eq),
            (I[58] = S))
          : (S = I[58]),
        I[59] !== h || I[60] !== y || I[61] !== v || I[62] !== j || I[63] !== S
          ? ((k = (0, l.jsxs)("div", { className: h, children: [y, v, j, S] })),
            (I[59] = h),
            (I[60] = y),
            (I[61] = v),
            (I[62] = j),
            (I[63] = S),
            (I[64] = k))
          : (k = I[64]),
        I[65] !== E ||
        I[66] !== R ||
        I[67] !== eN ||
        I[68] !== D ||
        I[69] !== O ||
        I[70] !== U ||
        I[71] !== G ||
        I[72] !== W ||
        I[73] !== q ||
        I[74] !== $ ||
        I[75] !== ee ||
        I[76] !== et ||
        I[77] !== es
          ? ((C = es
              ? (0, l.jsxs)("div", {
                  className: "flex w-full flex-col gap-8",
                  children: [
                    (0, l.jsx)(to.c, {
                      allowApiKey: E,
                      allowChatGpt: R,
                      apiKeyHelp: "control" !== eN ? (0, l.jsx)(ta, {}) : null,
                      apiKeyValue: D,
                      isApiKeyEntryVisible: O,
                      isApiKeySignInPending: U,
                      isChatGptSignInPending: G,
                      onApiKeySecondaryAction: () => ee("cancel"),
                      onApiKeySubmit: W,
                      onApiKeyValueChange: q,
                      onChatGptSignIn: $,
                      onShowApiKeyEntry: et,
                      apiKeySecondaryActionLabel: (0, l.jsx)(u.A, {
                        id: "electron.onboarding.login.apikey.cancel",
                        defaultMessage: "Cancel",
                      }),
                    }),
                    "explanation-with-chatgpt" === eN && R
                      ? (0, l.jsxs)("div", {
                          className: "flex flex-col items-center gap-2 text-center text-sm text-secondary select-none",
                          children: [
                            (0, l.jsx)("p", {
                              children: (0, l.jsx)(u.A, {
                                id: "electron.onboarding.login.apikey.chatGptAlternative",
                                defaultMessage: "Want to use your ChatGPT account?",
                              }),
                            }),
                            (0, l.jsx)(w.$, {
                              className: "underline",
                              color: "ghostMuted",
                              size: "inline",
                              type: "button",
                              disabled: U || G,
                              onClick: () => {
                                ;(ee("switch-to-chatgpt"), $())
                              },
                              children: (0, l.jsx)(u.A, {
                                id: "electron.onboarding.login.apikey.signInWithChatGpt",
                                defaultMessage: "Sign in with ChatGPT",
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : null),
            (I[65] = E),
            (I[66] = R),
            (I[67] = eN),
            (I[68] = D),
            (I[69] = O),
            (I[70] = U),
            (I[71] = G),
            (I[72] = W),
            (I[73] = q),
            (I[74] = $),
            (I[75] = ee),
            (I[76] = et),
            (I[77] = es),
            (I[78] = C))
          : (C = I[78]),
        I[79] !== E ||
        I[80] !== el ||
        I[81] !== et ||
        I[82] !== er ||
        I[83] !== ei ||
        I[84] !== ea ||
        I[85] !== V ||
        I[86] !== eu
          ? ((_ = eu
              ? (0, l.jsxs)("div", {
                  className: "flex w-full flex-col items-center gap-3",
                  children: [
                    E
                      ? (0, l.jsxs)(w.$, {
                          className: "w-full",
                          color: "outlineSurface",
                          contentLayout: "balanced",
                          radius: "full",
                          size: "onboardingAction",
                          type: "button",
                          onClick: et,
                          children: [
                            (0, l.jsx)(eY.A, { "aria-hidden": "true", className: "size-4" }),
                            (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.otherMethods.openaiApiKey",
                              defaultMessage: "OpenAI API Key",
                            }),
                          ],
                        })
                      : null,
                    E && V
                      ? (0, l.jsxs)(w.$, {
                          className: "w-full",
                          color: "outlineSurface",
                          contentLayout: "balanced",
                          radius: "full",
                          size: "onboardingAction",
                          type: "button",
                          onClick: er,
                          children: [
                            (0, l.jsx)("img", { alt: "", className: "h-2.5 dark:hue-rotate-180 dark:invert", src: Z }),
                            (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.bedrock.open.welcomeV2",
                              defaultMessage: "Amazon Bedrock",
                            }),
                          ],
                        })
                      : null,
                    E && null != ea ? (0, l.jsx)(eT, { onClick: ea }) : null,
                    null != ei
                      ? (0, l.jsxs)(w.$, {
                          className: "w-full",
                          color: "outlineSurface",
                          radius: "full",
                          size: "onboardingAction",
                          type: "button",
                          contentLayout: "balanced",
                          onClick: ei,
                          children: [
                            (0, l.jsx)(eH.I, { asset: eF.K, className: "shrink-0" }),
                            (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.gateway.open",
                              defaultMessage: "Gateway or custom provider",
                            }),
                          ],
                        })
                      : null,
                    (0, l.jsx)(w.$, {
                      color: "ghostTertiary",
                      onClick: el,
                      children: (0, l.jsx)(u.A, {
                        id: "electron.onboarding.login.otherMethods.back",
                        defaultMessage: "Back",
                      }),
                    }),
                  ],
                })
              : null),
            (I[79] = E),
            (I[80] = el),
            (I[81] = et),
            (I[82] = er),
            (I[83] = ei),
            (I[84] = ea),
            (I[85] = V),
            (I[86] = eu),
            (I[87] = _))
          : (_ = I[87]))
      let e7 =
        es || eu
          ? null
          : (0, l.jsxs)("div", {
              className: "flex w-full flex-col items-center gap-3",
              children: [
                R &&
                  (null != eV && eV.length > 0
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          eV.map((e) => (0, l.jsx)(tf, { profile: e, onChatGptSignIn: $ }, e.email)),
                          (0, l.jsxs)("div", {
                            className: "flex w-full items-center gap-4 py-2",
                            "aria-hidden": "true",
                            children: [
                              (0, l.jsx)("span", { className: "h-px flex-1 bg-border" }),
                              (0, l.jsx)("span", {
                                className: "text-[12px] font-medium text-codex-description",
                                children: (0, l.jsx)(u.A, {
                                  id: "electron.onboarding.login.browserSession.or",
                                  defaultMessage: "OR",
                                }),
                              }),
                              (0, l.jsx)("span", { className: "h-px flex-1 bg-border" }),
                            ],
                          }),
                          (0, l.jsx)("button", {
                            className:
                              "flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                            type: "button",
                            onClick: () => $("other-account"),
                            children: (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.browserSession.otherAccount",
                              defaultMessage: "Use another account",
                            }),
                          }),
                        ],
                      })
                    : (0, l.jsxs)("button", {
                        className:
                          "flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-primary-solid text-[14px] leading-5 font-medium text-primary-solid hover:bg-primary-solid-hover",
                        type: "button",
                        onClick: () => $(),
                        children: [
                          (0, l.jsx)(eY.A, { className: "size-6 shrink-0 text-primary-solid" }),
                          (0, l.jsx)(u.A, {
                            id: "electron.onboarding.login.chatgpt.continueToSignIn",
                            defaultMessage: "Continue to sign in",
                          }),
                        ],
                      })),
                R && eC
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)("button", {
                          className:
                            "flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                          type: "button",
                          onClick: () => $("google"),
                          children: [
                            (0, l.jsx)(eR.A, { className: "size-5 shrink-0", "aria-hidden": "true" }),
                            (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.google.signIn",
                              defaultMessage: "Continue with Google",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("button", {
                          className:
                            "flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                          type: "button",
                          onClick: () => $("microsoft"),
                          children: [
                            (0, l.jsx)(eZ.A, { className: "size-5 shrink-0", "aria-hidden": "true" }),
                            (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.microsoft.signIn",
                              defaultMessage: "Continue with Microsoft",
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
                ed
                  ? (0, l.jsx)("button", {
                      className:
                        "flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-secondary-ghost-hover",
                      type: "button",
                      onClick: ec ? en : et,
                      children:
                        ec || (R && !(eE || eP))
                          ? (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.apikey.open.welcomeV2",
                              defaultMessage: "Sign in another way",
                            })
                          : (0, l.jsx)(u.A, {
                              id: "electron.onboarding.login.apikey.open.explicit.welcomeV2",
                              defaultMessage: "Sign in with an API key",
                            }),
                    })
                  : null,
                R
                  ? (0, l.jsx)("button", {
                      className:
                        "flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-codex-description underline hover:text-default",
                      type: "button",
                      onClick: Y,
                      children: (0, l.jsx)(u.A, {
                        id: "electron.onboarding.login.signup.welcomeV2",
                        defaultMessage: "Sign up",
                      }),
                    })
                  : null,
              ],
            })
      return (
        I[88] !== k || I[89] !== C || I[90] !== _ || I[91] !== e7
          ? ((M = (0, l.jsxs)("div", {
              className:
                "flex w-[340px] max-w-full shrink-0 grow flex-col items-center justify-center gap-8 self-center py-(--height-toolbar-sm)",
              children: [k, C, _, e7],
            })),
            (I[88] = k),
            (I[89] = C),
            (I[90] = _),
            (I[91] = e7),
            (I[92] = M))
          : (M = I[92]),
        I[93] !== e5 || I[94] !== m || I[95] !== M
          ? ((N = (0, l.jsxs)("div", { "data-desktop-login-surface": "", className: m, children: [e5, M] })),
            (I[93] = e5),
            (I[94] = m),
            (I[95] = M),
            (I[96] = N))
          : (N = I[96]),
        N
      )
    }
    function tg() {
      return eJ.Uo.markSignInVisible()
    }
    function tf(e) {
      let t,
        n,
        a,
        i,
        o,
        s,
        u,
        g,
        f = (0, r.c)(28),
        { profile: p, onChatGptSignIn: m } = e,
        h = (0, d.A)(),
        x = (0, eq.Dv)(p.avatarUrl),
        [b, y] = (0, c.useState)(null)
      f[0] !== p.name ? ((t = p.name?.trim() || null), (f[0] = p.name), (f[1] = t)) : (t = f[1])
      let v = t,
        j = v ?? p.email
      return (
        f[2] !== j || f[3] !== h || f[4] !== p.email || f[5] !== v
          ? ((n =
              null == v
                ? h.formatMessage(
                    {
                      id: "electron.onboarding.login.browserSession.continueAs",
                      defaultMessage: "Continue as {accountName}",
                    },
                    { accountName: j },
                  )
                : h.formatMessage(
                    {
                      id: "electron.onboarding.login.browserSession.continueAsWithEmail",
                      defaultMessage: "Continue as {accountName}, {email}",
                    },
                    { accountName: j, email: p.email },
                  )),
            (f[2] = j),
            (f[3] = h),
            (f[4] = p.email),
            (f[5] = v),
            (f[6] = n))
          : (n = f[6]),
        f[7] !== m || f[8] !== p.email
          ? ((a = () => m("signin", p.email)), (f[7] = m), (f[8] = p.email), (f[9] = a))
          : (a = f[9]),
        f[10] !== j || f[11] !== b || f[12] !== p.email || f[13] !== x
          ? ((i =
              null != x && x !== b
                ? (0, l.jsx)("img", {
                    src: x,
                    alt: "",
                    className: "size-10 shrink-0 rounded-full",
                    onError: () => {
                      y(x)
                    },
                  })
                : (0, l.jsx)(e$.e, { alt: "", colorKey: p.email, name: j, size: "row", src: null })),
            (f[10] = j),
            (f[11] = b),
            (f[12] = p.email),
            (f[13] = x),
            (f[14] = i))
          : (i = f[14]),
        f[15] !== j
          ? ((o = (0, l.jsx)("span", {
              className: "block truncate text-[14px] leading-5 font-medium text-default",
              children: j,
            })),
            (f[15] = j),
            (f[16] = o))
          : (o = f[16]),
        f[17] !== p.email || f[18] !== v
          ? ((s =
              null == v
                ? null
                : (0, l.jsx)("span", {
                    className: "block truncate text-[13px] leading-5 text-codex-description",
                    children: p.email,
                  })),
            (f[17] = p.email),
            (f[18] = v),
            (f[19] = s))
          : (s = f[19]),
        f[20] !== o || f[21] !== s
          ? ((u = (0, l.jsxs)("span", { className: "min-w-0 flex-1", children: [o, s] })),
            (f[20] = o),
            (f[21] = s),
            (f[22] = u))
          : (u = f[22]),
        f[23] !== n || f[24] !== a || f[25] !== i || f[26] !== u
          ? ((g = (0, l.jsxs)(w.$, {
              className: "w-full justify-start text-start",
              color: "outlineSurface",
              radius: "large",
              size: "auth",
              type: "button",
              "aria-label": n,
              onClick: a,
              children: [i, u],
            })),
            (f[23] = n),
            (f[24] = a),
            (f[25] = i),
            (f[26] = u),
            (f[27] = g))
          : (g = f[27]),
        g
      )
    }
    function tp(e) {
      let t,
        n,
        B,
        U,
        G,
        V,
        q,
        $,
        H,
        Z,
        Y,
        X,
        J,
        Q,
        ee,
        et,
        en,
        el,
        er,
        ea,
        eo,
        es,
        ef,
        ep,
        em,
        eh,
        ex,
        eb,
        ey,
        ev,
        ej,
        eC,
        eE,
        eL,
        eR,
        eP,
        eT,
        ez,
        eO = (0, r.c)(178),
        { workspaceRecovery: eB } = e,
        eU = void 0 !== eB && eB,
        eG = (0, o.gh)(R.u),
        eF = (0, v.KD)(),
        eW = (0, g.Zp)(),
        eq = (0, d.A)()
      eO[0] !== eG
        ? ((t = (e) => {
            let t = eG.get(_.x2)
            return null != t ? (0, M.l8)(e, t.pathname, t.search) : e
          }),
          (eO[0] = eG),
          (eO[1] = t))
        : (t = eO[1])
      let e$ = t,
        eH = (0, i.jE)(),
        eZ = (0, o._U)(m.bV, P.fI),
        [eY, eX] = (0, c.useState)(null),
        eJ = (0, o._U)(eS.Q, P.fI),
        eQ = "ready" === eJ.status && eJ.chatgpt,
        e0 = "ready" === eJ.status && eJ.api,
        e1 = (0, o.Ul)(I.$f)
      eO[2] !== e1
        ? ((n = null == e1 ? null : { hasPreviouslyCompletedOnboarding: e1 }), (eO[2] = e1), (eO[3] = n))
        : (n = eO[3])
      let e2 = n,
        e4 = (0, T.AS)(),
        e5 = (0, o._U)(b.uC, "gcp")
      eO[4] !== eq || eO[5] !== eG
        ? ((B = (e) => {
            eG.get(C.Id).warning(
              eq.formatMessage(
                { id: "electron.onboarding.login.error", defaultMessage: "Sign-in failed: {rawMessage}" },
                { rawMessage: e },
              ),
            )
          }),
          (eO[4] = eq),
          (eO[5] = eG),
          (eO[6] = B))
        : (B = eO[6])
      let e3 = B,
        [e6, e7] = (0, c.useState)(null),
        e8 = (0, o._U)(y.b, P.fI),
        e9 = (0, o.Ul)(x.f2),
        te = null != e9 ? e9.authUrl : e8?.authUrl,
        tt = null != e6 || null != e9,
        tn = (0, c.useRef)(null)
      ;(eO[7] !== eG.node
        ? ((U = () => () => {
            x.UL.has(eG.node) || tn.current?.abort()
          }),
          (eO[7] = eG.node),
          (eO[8] = U))
        : (U = eO[8]),
        eO[9] !== eG ? ((G = [eG]), (eO[9] = eG), (eO[10] = G)) : (G = eO[10]),
        (0, c.useEffect)(U, G),
        eO[11] !== eQ
          ? ((V = () => {
              eQ || tn.current?.abort()
            }),
            (q = [eQ]),
            (eO[11] = eQ),
            (eO[12] = V),
            (eO[13] = q))
          : ((V = eO[12]), (q = eO[13])),
        (0, c.useEffect)(V, q))
      let [tl, tr] = (0, c.useState)(!1),
        [ta, ti] = (0, c.useState)(!1),
        [to, ts] = (0, c.useState)(!1),
        [tc, td] = (0, c.useState)(""),
        [tg, tf] = (0, c.useState)(null),
        tp = null != tg
      ;(eO[14] !== tg
        ? ((H = () => () => tg?.abort()), ($ = [tg]), (eO[14] = tg), (eO[15] = $), (eO[16] = H))
        : (($ = eO[15]), (H = eO[16])),
        (0, c.useEffect)(H, $),
        eO[17] !== e0 || eO[18] !== tg
          ? ((Z = () => {
              e0 || tg?.abort()
            }),
            (Y = [e0, tg]),
            (eO[17] = e0),
            (eO[18] = tg),
            (eO[19] = Z),
            (eO[20] = Y))
          : ((Z = eO[19]), (Y = eO[20])),
        (0, c.useEffect)(Z, Y))
      let [tb, ty] = (0, c.useState)(!1),
        tv = (0, o.Ul)(b.em),
        tw = (0, o.Ul)(e_),
        tj = (0, o.Ul)(b.mN),
        tS = tj && "object" == typeof tv ? tv?.primaryProviderId : void 0,
        [tk, tA] = (0, c.useState)(null),
        tC = (0, o.Ul)(ec.sW),
        t_ = (0, c.useRef)(0),
        tM = (0, c.useRef)(null)
      eO[21] !== eG
        ? ((X = () => {
            ;(eG.set(I.gR, !1), eG.set(I.rz, !0))
          }),
          (eO[21] = eG),
          (eO[22] = X))
        : (X = eO[22])
      let tN = X
      eO[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = () => {
            ;(tr(!1), tf(null), td(""))
          }),
          (eO[23] = J))
        : (J = eO[23])
      let tI = J
      eO[24] !== eJ.api || eO[25] !== eJ.status || eO[26] !== e2 || eO[27] !== eG
        ? ((Q = () => {
            null != e2 &&
              "ready" === eJ.status &&
              eJ.api &&
              ((0, E.yy)(eG, a.CodexLoginMethodSelected, { method: "apikey", ...e2 }), tr(!0))
          }),
          (eO[24] = eJ.api),
          (eO[25] = eJ.status),
          (eO[26] = e2),
          (eO[27] = eG),
          (eO[28] = Q))
        : (Q = eO[28])
      let tE = Q
      eO[29] !== eq || eO[30] !== eG
        ? ((ee = async () => {
            let e = (t_.current = t_.current + 1)
            if (null == L.appServices.appServerLifecycle)
              return void tA((e) =>
                null == e
                  ? null
                  : {
                      ...e,
                      isDetecting: !1,
                      errorMessage: eq.formatMessage({
                        id: "electron.onboarding.login.bedrock.unavailable",
                        defaultMessage: "Amazon Bedrock sign-in is unavailable on this host",
                      }),
                    },
              )
            tA(tx)
            try {
              let t = await (0, W.Y_)(eG)
              tA((n) => (null == n || e !== t_.current ? n : { ...n, detectedCredentials: t, isDetecting: !1 }))
            } catch (t) {
              tA((n) =>
                null == n || e !== t_.current
                  ? n
                  : (0, s.Rg6)(t, "account/bedrock/discover")
                    ? { ...n, errorMessage: null, isDetecting: !1, supportsAwsCredentials: !1 }
                    : { ...n, errorMessage: (0, s.Rt_)(t), isDetecting: !1 },
              )
            }
          }),
          (eO[29] = eq),
          (eO[30] = eG),
          (eO[31] = ee))
        : (ee = eO[31])
      let tL = ee
      eO[32] !== tL || eO[33] !== eG
        ? ((et = () => {
            ;(tA({
              detectedCredentials: null,
              errorMessage: null,
              isDetecting: !0,
              isSubmitting: !1,
              supportsAwsCredentials: !0,
              supportsAccessKeys: (0, s.JFB)(eG.get(p.B, P.fI), "bedrockAccessKeysLogin"),
            }),
              tL())
          }),
          (eO[32] = tL),
          (eO[33] = eG),
          (eO[34] = et))
        : (et = eO[34])
      let tR = et
      eO[35] !== e$ || eO[36] !== eW || eO[37] !== eG || eO[38] !== tN || eO[39] !== eF || eO[40] !== eU
        ? ((en = async () => {
            if (eU) {
              ;(eF(), await eW(e$("/"), { replace: !0 }))
              return
            }
            ;(tN(), eG.set(I.pi, !0), eG.set(N.Z, void 0), eF(), await eW(e$("/welcome"), { replace: !0 }))
          }),
          (eO[35] = e$),
          (eO[36] = eW),
          (eO[37] = eG),
          (eO[38] = tN),
          (eO[39] = eF),
          (eO[40] = eU),
          (eO[41] = en))
        : (en = eO[41])
      let tP = en
      eO[42] !== tP
        ? ((el = async () => {
            ;(0, ec.iM)()?.status === "pending" && ((0, ec.EN)({ status: "complete" }), await tP())
          }),
          (eO[42] = tP),
          (eO[43] = el))
        : (el = eO[43])
      let tD = el,
        tT = (0, c.useEffectEvent)(tD)
      ;(eO[44] !== tT || eO[45] !== eG
        ? ((er = () =>
            eG.watch((e) => {
              let { get: t } = e,
                n = t(ec.sW)
              n?.status === "pending" && null != n.warning && t(ec.sL) && tT()
            })),
          (eO[44] = tT),
          (eO[45] = eG),
          (eO[46] = er))
        : (er = eO[46]),
        eO[47] !== eG ? ((ea = [eG]), (eO[47] = eG), (eO[48] = ea)) : (ea = eO[48]),
        (0, c.useEffect)(er, ea),
        eO[49] !== tD || eO[50] !== eG
          ? ((eo = async () => {
              let e = L.appServices.appServerLifecycle,
                t = eG.get(ec.sW)
              if (t?.status !== "pending" || t.isChecking || null == e) return
              let n = { ...t, isChecking: !0 }
              ;(0, ec.EN)(n)
              let l = await (0, W.Wj)(e, t.region)
              if ((0, ec.iM)() === n) {
                if (null == l) return void (await tD())
                ;(0, ec.EN)({ ...t, warning: l, isChecking: !1 })
              }
            }),
            (eO[49] = tD),
            (eO[50] = eG),
            (eO[51] = eo))
          : (eo = eO[51]))
      let tK = eo
      eO[52] !== e0 || eO[53] !== tD || eO[54] !== eq || eO[55] !== eG
        ? ((es = async (e) => {
            if (!e0) return
            let t = L.appServices.appServerLifecycle
            if (null == t)
              return void tA((e) =>
                null == e
                  ? null
                  : {
                      ...e,
                      errorMessage: eq.formatMessage({
                        id: "electron.onboarding.login.bedrock.unavailable",
                        defaultMessage: "Amazon Bedrock sign-in is unavailable on this host",
                      }),
                    },
              )
            tA(th)
            let n = { status: "pending", warning: null, region: e.region, isChecking: !0 }
            ;(0, ec.EN)(n)
            try {
              let l = await (0, W.$_)(eG, t, e)
              if ((0, ec.iM)() !== n) return
              if (null != l && !eG.get(ec.sL))
                return void (0, ec.EN)({ status: "pending", warning: l, region: e.region, isChecking: !1 })
              await tD()
            } catch (t) {
              if ((0, ec.iM)() !== n) return
              ;((0, ec.EN)(null),
                tA((n) => {
                  if (null == n) return null
                  let l = (0, s.Rt_)(t),
                    r =
                      "profile" === e.method &&
                      l.startsWith(`failed to load credentials for AWS profile \`${e.profile.trim()}\`:`)
                        ? eq.formatMessage(
                            {
                              id: "electron.onboarding.login.bedrock.profileCredentialsError",
                              defaultMessage:
                                "Couldn\u2019t load credentials for AWS profile \u201C{profile}\u201D. Check your AWS sign-in and try again.",
                            },
                            { profile: e.profile.trim() },
                          )
                        : l
                  return { ...n, errorMessage: r, isSubmitting: !1 }
                }))
            }
          }),
          (eO[52] = e0),
          (eO[53] = tD),
          (eO[54] = eq),
          (eO[55] = eG),
          (eO[56] = es))
        : (es = eO[56])
      let tz = es
      eO[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((ef = () => {
            ts(!1)
          }),
          (eO[57] = ef))
        : (ef = eO[57])
      let tO = ef
      eO[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((ep = () => {
            ;(null != tM.current ||
              "u" < typeof window ||
              ("AudioContext" in window &&
                ((tM.current = new window.AudioContext()), "suspended" === tM.current.state && tM.current.resume())),
              ts(!0))
          }),
          (eO[58] = ep))
        : (ep = eO[58])
      let tB = ep
      eO[59] !== te || eO[60] !== eq || eO[61] !== eG
        ? ((em = async () => {
            null != te &&
              (await (0, K.lW)(te)) &&
              eG
                .get(C.Id)
                .success(
                  eq.formatMessage({
                    id: "electron.onboarding.login.linkCopied",
                    defaultMessage: "Sign-in link copied",
                  }),
                )
          }),
          (eO[59] = te),
          (eO[60] = eq),
          (eO[61] = eG),
          (eO[62] = em))
        : (em = eO[62])
      let tU = em
      eO[63] !== eq || eO[64] !== tS || eO[65] !== eG
        ? ((eh = async () => {
            if (null == tS) return !0
            eG.set(b.em, "connecting")
            try {
              let e = (await eN(eG, tS)) === "ready"
              return (eG.set(b.em, e ? null : "choose"), e)
            } catch {
              throw (
                eG.set(b.em, "choose"),
                Error(
                  eq.formatMessage({
                    id: "electron.onboarding.login.gateway.finishError",
                    defaultMessage: "Couldn\u2019t finish connecting to the gateway",
                  }),
                )
              )
            }
          }),
          (eO[63] = eq),
          (eO[64] = tS),
          (eO[65] = eG),
          (eO[66] = eh))
        : (eh = eO[66])
      let tG = eh
      eO[67] !== tG ||
      eO[68] !== e$ ||
      eO[69] !== eJ.chatgpt ||
      eO[70] !== eJ.status ||
      eO[71] !== e2 ||
      eO[72] !== eW ||
      eO[73] !== tS ||
      eO[74] !== eH ||
      eO[75] !== eG ||
      eO[76] !== e3 ||
      eO[77] !== tN ||
      eO[78] !== e4 ||
      eO[79] !== eF ||
      eO[80] !== eU
        ? ((ex = async (e, t) => {
            let n = void 0 === e ? "signin" : e
            if (x.UL.has(eG.node)) return void x.UL.get(eG.node)?.cancel()
            if (null != tn.current) {
              ;(tn.current.abort(), (tn.current = null), e7(null))
              return
            }
            if (null == e2 || "ready" !== eJ.status || !eJ.chatgpt) return
            let l = "signin" === n || "signup" === n || "other-account" === n ? "chatgpt" : n
            ;(0, E.yy)(eG, a.CodexLoginMethodSelected, { method: l, ...e2 })
            let r = (0, s.JFB)(eG.get(p.B, P.fI), "gatewayOAuth") ? (0, eu.W)() : null,
              i = new AbortController()
            ;((tn.current = i), e7(i))
            let o = !1,
              c = !1
            await (async () => {
              try {
                var e
                let c,
                  { useDesktopAuth: d, useStreamlinedLoginUx: u } =
                    ((c = (e = (0, T.XM)(e4, "3446609779")).get("enabled", !1)),
                    {
                      useDesktopAuth: e.get("use_desktop_auth", c),
                      useStreamlinedLoginUx: e.get("use_streamlined_login_ux", c),
                    }),
                  {
                    authUrl: g,
                    completion: f,
                    setBrowserUrl: p,
                  } = await (0, h.NR)({
                    scope: eG,
                    signal: i.signal,
                    useHostedLoginSuccessPage: !0,
                    useStreamlinedLogin: u,
                  })
                if (g && !i.signal.aborted) {
                  let e = !d || eU ? void 0 : (await L.appServices.appInfo.get()).chatGptDesktopAuthOrigin
                  if (i.signal.aborted) return
                  let l = (function (e, t) {
                      if ("signin" === t) return e
                      try {
                        let n = new URL(e),
                          l = "/codex/desktop-auth" === n.pathname ? n.searchParams.get("authorize_url") : null,
                          r = null == l ? n : new URL(l)
                        switch (t) {
                          case "signup":
                            r.searchParams.set("screen_hint", "signup")
                            break
                          case "google":
                            ;(r.searchParams.set("screen_hint", "login_or_signup"),
                              r.searchParams.set("connection", "google-oauth2"))
                            break
                          case "microsoft":
                            ;(r.searchParams.set("screen_hint", "login_or_signup"),
                              r.searchParams.set("connection", "windowslive"))
                            break
                          case "apple":
                            ;(r.searchParams.set("screen_hint", "login_or_signup"),
                              r.searchParams.set("connection", "apple"))
                            break
                          case "email":
                            r.searchParams.set("screen_hint", "login_or_signup")
                            break
                          case "other-account":
                            r.searchParams.set("prompt", "select_account")
                        }
                        return (null != l && n.searchParams.set("authorize_url", r.toString()), n.toString())
                      } catch {
                        return e
                      }
                    })(g, n),
                    r = (0, D.Z)({
                      authUrl: l,
                      codexAppVersion: (0, D.y)(eG),
                      desktopAuthOrigin: e,
                      includeCodexOriginStableId: !0,
                      loginHint: t,
                      useDesktopAuth: d && !eU,
                      useStreamlinedLoginUx: u,
                    })
                  p(r) && (0, k.E0)({ href: r, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
                }
                let m = await f
                if (i.signal.aborted) return
                if (m.success) {
                  if (!(await tG())) return
                  o = !0
                  let e = { method: l, ...e2, ...(0, z.tY)(m.onboardingEntrypoint) }
                  if (
                    (null != r ? r(e) : (0, E.yy)(eG, a.CodexLoginSuccess, e),
                    eH.removeQueries({ queryKey: ["vscode", "account-info"], exact: !0 }),
                    eU)
                  ) {
                    ;(eF(), await eW(e$("/"), { replace: !0 }))
                    return
                  }
                  ;(tN(),
                    eG.set(I.pi, !0),
                    null != m.onboardingEntrypoint && (0, z.mU)(eG, m.onboardingEntrypoint),
                    eG.set(N.Z, m.onboardingEntrypoint),
                    eF(),
                    eW(e$("/welcome"), { replace: !0 }))
                } else
                  ((0, E.yy)(eG, a.CodexLoginFailure, { method: l, errorKind: eV(m.error), ...e2 }),
                    e3((0, s.Rt_)(m.error ?? "Unknown error")))
              } catch (e) {
                if (e instanceof Error && "AbortError" === e.name) {
                  ;(null != tS && (eG.set(b.em, "choose"), ti(!0)),
                    (c = !0),
                    (0, E.yy)(eG, a.CodexLoginFailure, { method: l, errorKind: "abort", ...e2 }))
                  return
                }
                ;((0, E.yy)(eG, a.CodexLoginFailure, { method: l, errorKind: eV(e), ...e2 }), e3((0, s.Rt_)(e)))
              }
            })().finally(() => {
              let e = ["chatgpt-browser-session-profiles", !0]
              ;(o ||
                c ||
                i.signal.aborted ||
                (null != tn.current && tn.current !== i) ||
                eH.getQueryData(e)?.length !== 0 ||
                eH.resetQueries({ queryKey: e, exact: !0 }),
                tn.current === i && (tn.current = null),
                e7((e) => (e === i ? null : e)))
            })
          }),
          (eO[67] = tG),
          (eO[68] = e$),
          (eO[69] = eJ.chatgpt),
          (eO[70] = eJ.status),
          (eO[71] = e2),
          (eO[72] = eW),
          (eO[73] = tS),
          (eO[74] = eH),
          (eO[75] = eG),
          (eO[76] = e3),
          (eO[77] = tN),
          (eO[78] = e4),
          (eO[79] = eF),
          (eO[80] = eU),
          (eO[81] = ex))
        : (ex = eO[81])
      let tV = ex
      eO[82] !== tc ||
      eO[83] !== tG ||
      eO[84] !== e$ ||
      eO[85] !== tp ||
      eO[86] !== eJ.api ||
      eO[87] !== eJ.status ||
      eO[88] !== e2 ||
      eO[89] !== eW ||
      eO[90] !== eG ||
      eO[91] !== e3 ||
      eO[92] !== tN ||
      eO[93] !== eF ||
      eO[94] !== eU
        ? ((eb = async () => {
            let e = tc.trim()
            if (!e || tp || null == e2 || "ready" !== eJ.status || !eJ.api) return
            let t = new AbortController()
            ;(tf(t),
              await (async () => {
                try {
                  if ((await (0, f.ls)(eG, P.fI).loginWithApiKey(e), t.signal.aborted || !(await tG()))) return
                  if (((0, E.yy)(eG, a.CodexLoginSuccess, { method: "apikey", ...e2 }), eU)) {
                    ;(eF(), await eW(e$("/"), { replace: !0 }))
                    return
                  }
                  ;(tN(), eG.set(I.pi, !0), eG.set(N.Z, void 0), eF(), eW(e$("/welcome"), { replace: !0 }))
                } catch (e) {
                  if (t.signal.aborted) return
                  ;((0, E.yy)(eG, a.CodexLoginFailure, { method: "apikey", errorKind: eV(e), ...e2 }),
                    e3((0, s.Rt_)(e)))
                }
              })().finally(() => {
                tf((e) => (e === t ? null : e))
              }))
          }),
          (eO[82] = tc),
          (eO[83] = tG),
          (eO[84] = e$),
          (eO[85] = tp),
          (eO[86] = eJ.api),
          (eO[87] = eJ.status),
          (eO[88] = e2),
          (eO[89] = eW),
          (eO[90] = eG),
          (eO[91] = e3),
          (eO[92] = tN),
          (eO[93] = eF),
          (eO[94] = eU),
          (eO[95] = eb))
        : (eb = eO[95])
      let tF = eb
      if (tC?.status === "pending") {
        let e
        return (
          eO[96] !== tC.isChecking || eO[97] !== tC.warning || eO[98] !== tD || eO[99] !== tK || eO[100] !== eG
            ? ((e = (0, l.jsx)(O.cI, {
                children:
                  null == tC.warning
                    ? (0, l.jsxs)("div", {
                        className:
                          "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description",
                        children: [
                          (0, l.jsx)(A.y, { className: "h-4 w-4 text-default" }),
                          (0, l.jsx)(u.A, {
                            id: "electron.onboarding.login.bedrock.finishing",
                            defaultMessage: "Finishing Amazon Bedrock sign-in\u2026",
                          }),
                        ],
                      })
                    : (0, l.jsx)(ed.o, {
                        unverified: "unverified" === tC.warning,
                        isChecking: tC.isChecking,
                        onRetry: tK,
                        onContinue: async () => {
                          ;(eG.set(ec.sL, !0), await tD())
                        },
                      }),
              })),
              (eO[96] = tC.isChecking),
              (eO[97] = tC.warning),
              (eO[98] = tD),
              (eO[99] = tK),
              (eO[100] = eG),
              (eO[101] = e))
            : (e = eO[101]),
          e
        )
      }
      if (null != e9 && "chatgpt" !== e9.stage) {
        let e
        return (
          eO[102] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(eg.m, {})), (eO[102] = e))
            : (e = eO[102]),
          e
        )
      }
      if ("ready" !== eJ.status || (!eJ.api && !eJ.chatgpt)) {
        let e,
          t,
          n = "loading" !== eJ.status
        return (
          eO[103] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(eK.G, { hostId: P.fI })), (eO[103] = e))
            : (e = eO[103]),
          eO[104] !== n
            ? ((t = (0, l.jsx)(O.cI, { contentReady: n, children: e })), (eO[104] = n), (eO[105] = t))
            : (t = eO[105]),
          t
        )
      }
      if (null == e2) {
        let e
        return (
          eO[106] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(O.cI, {
                contentReady: !1,
                children: (0, l.jsxs)("div", {
                  className: "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description",
                  children: [
                    (0, l.jsx)(A.y, { className: "h-4 w-4 text-default" }),
                    (0, l.jsx)(u.A, { id: "electron.onboarding.login.loading", defaultMessage: "Loading\u2026" }),
                  ],
                }),
              })),
              (eO[106] = e))
            : (e = eO[106]),
          e
        )
      }
      let tW = L.appServices?.appServerLifecycle
      if (tj && null != tW && ("connecting" === tv || "choose" === tv)) {
        let e,
          t,
          n,
          r,
          a = "connecting" === tv
        return (
          eO[107] !== eG
            ? ((e = () => eG.set(b.em, null)),
              (t = (e) =>
                (async function (e, t) {
                  try {
                    let { provider: n } = await (0, f.ls)(e, P.fI).createCustomGateway(t)
                    return n.id
                  } catch (t) {
                    let e = ek.safeParse(t)
                    if (e.success) throw new eA(e.data.message, { cause: t })
                    throw t
                  }
                })(eG, e)),
              (eO[107] = eG),
              (eO[108] = e),
              (eO[109] = t))
            : ((e = eO[108]), (t = eO[109])),
          eO[110] !== tP || eO[111] !== eG
            ? ((n = async (e) => {
                if ("choose" === eG.get(b.em) && eG.get(b.mN)) {
                  eG.set(b.em, "connecting")
                  try {
                    let t = await (async function (e, t, n) {
                      let l = (0, f.ls)(e, P.fI),
                        r = await l.sendRequest("config/read", { includeLayers: !0, cwd: null }),
                        a = e.get(eS.Q, P.fI)
                      if ("ready" !== a.status || (!a.api && !a.chatgpt)) throw Error("Gateway sign-in is unavailable")
                      let { data: i, defaultProviderId: o } = await eM(e, a.api, r)
                      if (!i.some(({ id: e }) => e === n)) throw Error("Gateway is no longer available")
                      if (o !== n) {
                        let e = (0, ew.uy)(r.layers)
                        if (!e?.expectedVersion) throw Error("The user configuration version is unavailable")
                        if (
                          null !=
                          (
                            await l.setDefaultModelProvider(n, {
                              filePath: e.filePath,
                              expectedVersion: e.expectedVersion,
                            })
                          ).overriddenMetadata
                        )
                          throw Error("The default model provider is managed")
                      }
                      return (await t.restart(P.fI), eN(e, n))
                    })(eG, tW, e)
                    if ("cancelled" === t) return void eG.set(b.em, "choose")
                    if ("primary" === t) {
                      ;(eG.set(b.em, { primaryProviderId: e }), ti(!1))
                      return
                    }
                    ;(eG.set(b.em, null), await tP())
                  } catch (e) {
                    throw (eG.set(b.em, "choose"), e)
                  }
                }
              }),
              (eO[110] = tP),
              (eO[111] = eG),
              (eO[112] = n))
            : (n = eO[112]),
          eO[113] !== e0 || eO[114] !== a || eO[115] !== e || eO[116] !== t || eO[117] !== n
            ? ((r = (0, l.jsx)(O.cI, {
                fullBleed: !0,
                children: (0, l.jsx)(eI, { allowApiKey: e0, busy: a, onBack: e, onCreate: t, onSelect: n }),
              })),
              (eO[113] = e0),
              (eO[114] = a),
              (eO[115] = e),
              (eO[116] = t),
              (eO[117] = n),
              (eO[118] = r))
            : (r = eO[118]),
          r
        )
      }
      if (e5 && tb && null != tW) {
        let e, t
        return (
          eO[119] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => ty(!1)), (eO[119] = e)) : (e = eO[119]),
          eO[120] !== tP || eO[121] !== eq || eO[122] !== eG
            ? ((t = (0, l.jsx)(O.cI, {
                fullBleed: !0,
                children: (0, l.jsx)(eD, {
                  onBack: e,
                  onSubmit: async (e) => {
                    try {
                      await (0, f.ls)(eG, P.fI).sendRequest("account/gcp/setup", e)
                    } catch (e) {
                      if (!(0, s.Rg6)(e, "account/gcp/setup")) throw e
                      throw Error(
                        eq.formatMessage({
                          id: "electron.onboarding.login.gcp.unsupported",
                          defaultMessage: "This app server does not support Google Cloud setup",
                        }),
                      )
                    }
                    ;(await tW.restart(P.fI), await tP())
                  },
                }),
              })),
              (eO[120] = tP),
              (eO[121] = eq),
              (eO[122] = eG),
              (eO[123] = t))
            : (t = eO[123]),
          t
        )
      }
      if (e0 && null != tk) {
        let e, t, n
        return (
          eO[124] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = () => {
                ;((t_.current = t_.current + 1), tA(null))
              }),
              (t = () => {
                tA(tm)
              }),
              (eO[124] = e),
              (eO[125] = t))
            : ((e = eO[124]), (t = eO[125])),
          eO[126] !== tk.detectedCredentials ||
          eO[127] !== tk.errorMessage ||
          eO[128] !== tk.isDetecting ||
          eO[129] !== tk.isSubmitting ||
          eO[130] !== tk.supportsAccessKeys ||
          eO[131] !== tk.supportsAwsCredentials ||
          eO[132] !== tL ||
          eO[133] !== tz
            ? ((n = (0, l.jsx)(O.cI, {
                fullBleed: !0,
                children: (0, l.jsx)(ei, {
                  detectedCredentials: tk.detectedCredentials,
                  errorMessage: tk.errorMessage,
                  isDetecting: tk.isDetecting,
                  isSubmitting: tk.isSubmitting,
                  supportsAwsCredentials: tk.supportsAwsCredentials,
                  supportsAccessKeys: tk.supportsAccessKeys,
                  onBack: e,
                  onClearError: t,
                  onDetectCredentials: tL,
                  onSubmit: tz,
                }),
              })),
              (eO[126] = tk.detectedCredentials),
              (eO[127] = tk.errorMessage),
              (eO[128] = tk.isDetecting),
              (eO[129] = tk.isSubmitting),
              (eO[130] = tk.supportsAccessKeys),
              (eO[131] = tk.supportsAwsCredentials),
              (eO[132] = tL),
              (eO[133] = tz),
              (eO[134] = n))
            : (n = eO[134]),
          n
        )
      }
      let tq,
        t$ = eZ?.governmentWorkspaceRequired === !0 && eZ !== eY
      ;(eO[135] !== eZ ? ((ey = () => eX(eZ)), (eO[135] = eZ), (eO[136] = ey)) : (ey = eO[136]),
        eO[137] !== eQ || eO[138] !== eZ || eO[139] !== tV || eO[140] !== tt
          ? ((ev = (e) => {
              ;(e.preventDefault(), eQ && !tt && (eX(eZ), tV()))
            }),
            (eO[137] = eQ),
            (eO[138] = eZ),
            (eO[139] = tV),
            (eO[140] = tt),
            (eO[141] = ev))
          : (ev = eO[141]),
        eO[142] === Symbol.for("react.memo_cache_sentinel")
          ? ((ej = (0, l.jsx)(j.L3, {
              children: (0, l.jsx)(u.A, {
                id: "electron.onboarding.login.governmentWorkspaceRequired.title",
                defaultMessage: "Government workspace required",
              }),
            })),
            (eO[142] = ej))
          : (ej = eO[142]),
        eO[143] === Symbol.for("react.memo_cache_sentinel")
          ? ((eC = (0, l.jsx)(S.c7, {
              title: ej,
              subtitle: (0, l.jsx)(j.rr, {
                children: (0, l.jsx)(u.A, {
                  id: "electron.onboarding.login.governmentWorkspaceRequired.description",
                  defaultMessage:
                    "This app is configured for government use. Sign in again and select your government workspace.",
                }),
              }),
            })),
            (eO[143] = eC))
          : (eC = eO[143]))
      let tH = !eQ || tt
      return (
        eO[144] === Symbol.for("react.memo_cache_sentinel")
          ? ((eE = (0, l.jsx)(u.A, {
              id: "electron.onboarding.login.governmentWorkspaceRequired.signIn",
              defaultMessage: "Sign in",
            })),
            (eO[144] = eE))
          : (eE = eO[144]),
        eO[145] !== tH
          ? ((eL = (0, l.jsx)(S.Es, { children: (0, l.jsx)(w.$, { type: "submit", disabled: tH, children: eE }) })),
            (eO[145] = tH),
            (eO[146] = eL))
          : (eL = eO[146]),
        eO[147] !== ev || eO[148] !== eL
          ? ((eR = (0, l.jsxs)(S.R4, { variant: "confirmation", as: "form", onSubmit: ev, children: [eC, eL] })),
            (eO[147] = ev),
            (eO[148] = eL),
            (eO[149] = eR))
          : (eR = eO[149]),
        eO[150] !== t$ || eO[151] !== ey || eO[152] !== eR
          ? ((eP = (0, l.jsx)(j.lG, { open: t$, onOpenChange: ey, children: eR })),
            (eO[150] = t$),
            (eO[151] = ey),
            (eO[152] = eR),
            (eO[153] = eP))
          : (eP = eO[153]),
        eO[154] !== eQ ||
        eO[155] !== tc ||
        eO[156] !== te ||
        eO[157] !== tF ||
        eO[158] !== tV ||
        eO[159] !== tU ||
        eO[160] !== tl ||
        eO[161] !== tp ||
        eO[162] !== tt ||
        eO[163] !== ta ||
        eO[164] !== to ||
        eO[165] !== eJ.api ||
        eO[166] !== eJ.chatgpt ||
        eO[167] !== tS ||
        eO[168] !== eG ||
        eO[169] !== tE ||
        eO[170] !== tR ||
        eO[171] !== tw ||
        eO[172] !== e5
          ? ((eT = to
              ? (0, l.jsx)("div", {
                  className: "flex h-full w-full",
                  children: (0, l.jsx)(F, { onExit: tO, audioContextRef: tM }),
                })
              : (0, l.jsx)(tu, {
                  allowApiKey: eJ.api,
                  allowChatGpt: eJ.chatgpt,
                  apiKeyHelpVariant:
                    "link" === tq || "explanation" === tq || "explanation-with-chatgpt" === tq ? tq : void 0,
                  apiKeyValue: tc,
                  canCopySignInLink: null != te,
                  isApiKeyEntryVisible: tl || (null != tS && !eQ),
                  isOtherSignInMethodsVisible: ta,
                  isApiKeySignInPending: tp,
                  isChatGptSignInPending: tt,
                  showAmazonBedrockSignIn: null == tS,
                  onApiKeySubmit: tF,
                  onApiKeyValueChange: td,
                  onChatGptSignIn: tV,
                  onChatGptSignUp: () => tV("signup"),
                  onCopySignInLink: tU,
                  onPlaySnake: tB,
                  onResetApiKeyEntry: (e) => {
                    ;(tI(), "cancel" === e && null != tS && (eG.set(b.em, "choose"), ti(!0)))
                  },
                  onShowApiKeyEntry: tE,
                  onShowOtherSignInMethods: () => ti(!0),
                  onHideOtherSignInMethods: () => ti(!1),
                  onShowBedrockSetup: tR,
                  onShowGatewaySetup: null == tS && tw ? () => eG.set(b.em, "choose") : void 0,
                  onShowGcpSetup: null == tS && e5 ? () => ty(!0) : void 0,
                })),
            (eO[154] = eQ),
            (eO[155] = tc),
            (eO[156] = te),
            (eO[157] = tF),
            (eO[158] = tV),
            (eO[159] = tU),
            (eO[160] = tl),
            (eO[161] = tp),
            (eO[162] = tt),
            (eO[163] = ta),
            (eO[164] = to),
            (eO[165] = eJ.api),
            (eO[166] = eJ.chatgpt),
            (eO[167] = tS),
            (eO[168] = eG),
            (eO[169] = tE),
            (eO[170] = tR),
            (eO[171] = tw),
            (eO[172] = e5),
            (eO[173] = eT))
          : (eT = eO[173]),
        eO[174] !== to || eO[175] !== eP || eO[176] !== eT
          ? ((ez = (0, l.jsxs)(O.cI, { fullBleed: !0, hideHeader: to, contentReady: to, children: [eP, eT] })),
            (eO[174] = to),
            (eO[175] = eP),
            (eO[176] = eT),
            (eO[177] = ez))
          : (ez = eO[177]),
        ez
      )
    }
    function tm(e) {
      return e?.errorMessage == null ? e : { ...e, errorMessage: null }
    }
    function th(e) {
      return null == e ? null : { ...e, errorMessage: null, isSubmitting: !0 }
    }
    function tx(e) {
      return null == e ? null : { ...e, errorMessage: null, isDetecting: !0 }
    }
  },
  SzCH(e, t, n) {
    n.d(t, { tY: () => c, n6: () => u, zO: () => h, mU: () => d, cX: () => f, og: () => p, _T: () => g, $P: () => m })
    var l = n("iRMi")
    let r = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointLoginSucceeded" },
      a = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointStarted" },
      i = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointCompleted" }
    var o = n("yGJW")
    let s = { life_sciences: l.CodexOnboardingEntrypoint.CODEX_ONBOARDING_ENTRYPOINT_LIFE_SCIENCES }
    function c(e) {
      return null == e ? {} : { onboardingEntrypoint: s[e] }
    }
    function d(e, t) {
      ;(0, o.yy)(e, r, { onboardingEntrypoint: s[t] })
    }
    function u(e, t) {
      ;((0, o.yy)(e, l.CodexOnboardingEntered, { ...c(t) }),
        null != t && (0, o.yy)(e, a, { onboardingEntrypoint: s[t] }))
    }
    function g(e, t, n) {
      ;(0, o.yy)(e, l.CodexOnboardingStepViewed, { step: t, ...c(n) })
    }
    function f(e, t, n) {
      ;(0, o.yy)(e, l.CodexOnboardingStepContinueClicked, { step: t, ...c(n) })
    }
    function p(e, t, n) {
      ;(0, o.yy)(e, l.CodexOnboardingStepSkipped, { step: t, ...c(n) })
    }
    function m(e, t, n) {
      ;(0, o.yy)(e, l.CodexOnboardingWizardStep, { phase: t, action: n })
    }
    function h(e, t) {
      ;(0, o.yy)(e, i, { onboardingEntrypoint: s[t] })
    }
  },
  DIsA(e, t, n) {
    let l = (0, n("Nwp9").m3)("electron:onboarding-login-entrypoint", void 0)
    n.d(t, {}, { Z: l })
  },
}
//# sourceMappingURL=867815.d8ff1378d3.js.map
