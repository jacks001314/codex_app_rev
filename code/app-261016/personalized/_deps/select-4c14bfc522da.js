import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Akt as n,
  Dkt as r,
  Ekt as i,
  FBt as a,
  LNt as o,
  Ljt as s,
  MNt as c,
  NNt as l,
  Okt as u,
  Rjt as d,
  Skt as f,
  Tkt as p,
  Vjt as m,
  Zjt as h,
  Zkt as g,
  _kt as _,
  aMt as v,
  bkt as y,
  cMt as b,
  dMt as x,
  eAt as ee,
  gkt as S,
  iMt as C,
  lMt as te,
  nAt as ne,
  oMt as w,
  pkt as T,
  rAt as re,
  sMt as E,
  tAt as ie,
  uMt as D,
  vkt as O,
  zjt as k,
} from "./app-shared-2feb3d4c6fcc.js";
import { SU as A, xU as j } from "./app-initial-ad16eaadf81f.js";
import { a as M, i as N, n as ae, t as P } from "./select-control-661f8ec490d1.js";
function oe(e) {
  let t = (0, F.useRef)(e);
  return ((t.current = e), (0, F.useCallback)((...e) => t.current(...e), []));
}
var F;
function I() {
  return (I = e(() => {
    F = a();
  }))();
}
var L, se;
function R() {
  return (R = e(() => {
    ((L = o()),
      (se = (e) =>
        (0, L.jsxs)(`svg`, {
          width: `1em`,
          height: `1em`,
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          ...e,
          children: [
            (0, L.jsx)(`path`, {
              d: `M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm-1-2.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5Z`,
            }),
            (0, L.jsx)(`path`, {
              fillRule: `evenodd`,
              d: `M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z`,
              clipRule: `evenodd`,
            }),
          ],
        })));
  }))();
}
var z, B;
function ce() {
  return (ce = e(() => {
    ((z = o()),
      (B = (e) =>
        (0, z.jsx)(`svg`, {
          width: `1em`,
          height: `1em`,
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          ...e,
          children: (0, z.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M10.875 4.5C7.35418 4.5 4.5 7.35418 4.5 10.875C4.5 14.3958 7.35418 17.25 10.875 17.25C14.3958 17.25 17.25 14.3958 17.25 10.875C17.25 7.35418 14.3958 4.5 10.875 4.5ZM2.5 10.875C2.5 6.24962 6.24962 2.5 10.875 2.5C15.5004 2.5 19.25 6.24962 19.25 10.875C19.25 12.8273 18.582 14.6236 17.462 16.0478L21.2071 19.7929C21.5976 20.1834 21.5976 20.8166 21.2071 21.2071C20.8166 21.5976 20.1834 21.5976 19.7929 21.2071L16.0478 17.462C14.6236 18.582 12.8273 19.25 10.875 19.25C6.24962 19.25 2.5 15.5004 2.5 10.875Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
var V, H, le, ue, de, U;
function W() {
  return (W = e(() => {
    ((V = `_Container_1bc1a_2`),
      (H = `_Tag_1bc1a_2`),
      (le = `_Input_1bc1a_2`),
      (ue = `_TagValue_1bc1a_2`),
      (de = `_TagRemove_1bc1a_2`),
      (U = { Container: V, Tag: H, Input: le, TagValue: ue, TagRemove: de }));
  }))();
}
var G, K, fe, pe, q;
function me() {
  return (me = e(() => {
    (l(),
      (G = a()),
      M(),
      j(),
      W(),
      (K = o()),
      (fe = ({ label: e }) => (0, K.jsx)(K.Fragment, { children: e })),
      (pe = (e) => `Remove ${e.label}`),
      (q = ({
        tags: e,
        onRemoveTag: t,
        TagView: n = fe,
        getRemoveLabel: r = pe,
        ref: i,
        className: a,
        inputClassName: o,
        disabled: s,
        placeholder: l,
        onKeyDown: u,
        startAdornment: d,
        ...f
      }) => {
        let p = (0, G.useRef)(null),
          m = (0, G.useRef)(new Map()),
          g = (t) => {
            let n = e[t];
            n
              ? m.current.get(n.value)?.focus({ preventScroll: !0 })
              : p.current?.focus({ preventScroll: !0 });
          },
          _ = (e) => {
            (t(e), p.current?.focus({ preventScroll: !0 }));
          };
        return (0, K.jsx)(A, {
          ...f,
          ref: h([p, i]),
          className: c(U.Container, a),
          inputClassName: c(U.Input, o),
          disabled: s,
          placeholder: e.length === 0 ? l : void 0,
          startAdornment: (0, K.jsxs)(K.Fragment, {
            children: [
              d,
              e.map((e, t) =>
                (0, K.jsxs)(
                  `div`,
                  {
                    ref: (t) => {
                      t ? m.current.set(e.value, t) : m.current.delete(e.value);
                    },
                    className: U.Tag,
                    tabIndex: -1,
                    role: `group`,
                    "aria-label": e.label,
                    onClick: () => {
                      s || g(t);
                    },
                    onKeyDown: (n) => {
                      if (!(s || n.target !== n.currentTarget || n.nativeEvent.isComposing))
                        switch (n.key) {
                          case `ArrowLeft`:
                            (n.preventDefault(), g(Math.max(0, t - 1)));
                            break;
                          case `ArrowRight`:
                            (n.preventDefault(), g(t + 1));
                            break;
                          case `Backspace`:
                          case `Delete`:
                            (n.preventDefault(), _(e));
                        }
                    },
                    children: [
                      (0, K.jsx)(`span`, { className: U.TagValue, children: (0, K.jsx)(n, { ...e }) }),
                      (0, K.jsx)(`button`, {
                        className: U.TagRemove,
                        type: `button`,
                        tabIndex: -1,
                        disabled: s,
                        "aria-label": r(e),
                        onClick: (t) => {
                          (t.stopPropagation(), _(e));
                        },
                        children: (0, K.jsx)(N, { width: 14, height: 14 }),
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
              t.currentTarget.selectionStart === 0 &&
              t.currentTarget.selectionEnd === 0 &&
              (t.key === `ArrowLeft` || t.key === `Backspace`)
            ) {
              (t.preventDefault(), g(e.length - 1));
              return;
            }
            u?.(t);
          },
        });
      }));
  }))();
}
function he() {
  return (he = e(() => {
    me();
  }))();
}
var ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, J;
function Le() {
  return (Le = e(() => {
    ((ge = `_MenuList_irfjj_2`),
      (_e = `_Menu_irfjj_2`),
      (ve = `_MenuInner_irfjj_2`),
      (ye = `_OptionsList_irfjj_2`),
      (be = `_PaginationSentinel_irfjj_2`),
      (xe = `_Option_irfjj_2`),
      (Se = `_PressableInner_irfjj_2`),
      (Ce = `_OptionInner_irfjj_2`),
      (we = `_OptionCheck_irfjj_2`),
      (Te = `_OptionIndicatorSlot_irfjj_2`),
      (Ee = `_OptionGroupHeading_irfjj_2`),
      (De = `_OptionHardLimitHeading_irfjj_2`),
      (Oe = `_OptionsLimit_irfjj_2`),
      (ke = `_Action_irfjj_2`),
      (Ae = `_ActionInner_irfjj_2`),
      (je = `_ActionsContainer_irfjj_2`),
      (Me = `_SearchControl_irfjj_2`),
      (Ne = `_SearchGhost_irfjj_2`),
      (Pe = `_SearchSelection_irfjj_2`),
      (Fe = `_SearchEmpty_irfjj_2`),
      (Ie = `_NativeSelect_irfjj_2`),
      (J = {
        MenuList: ge,
        Menu: _e,
        MenuInner: ve,
        OptionsList: ye,
        PaginationSentinel: be,
        Option: xe,
        PressableInner: Se,
        OptionInner: Ce,
        OptionCheck: we,
        OptionIndicatorSlot: Te,
        OptionGroupHeading: Ee,
        OptionHardLimitHeading: De,
        OptionsLimit: Oe,
        Action: ke,
        ActionInner: Ae,
        ActionsContainer: je,
        SearchControl: Me,
        SearchGhost: Ne,
        SearchSelection: Pe,
        SearchEmpty: Fe,
        NativeSelect: Ie,
      }));
  }))();
}
var Y,
  X,
  Re,
  Z,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  Q,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  $,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct;
function wt() {
  return (wt = e(() => {
    (l(),
      n(),
      (Y = t(a(), 1)),
      x(),
      p(),
      r(),
      I(),
      b(),
      C(),
      T(),
      y(),
      d(),
      R(),
      ce(),
      M(),
      j(),
      P(),
      he(),
      _(),
      S(),
      Le(),
      (X = o()),
      (Re = (0, Y.createContext)(null)),
      (Z = () => {
        let e = (0, Y.use)(Re);
        if (!e) throw Error(`Select components must be wrapped in <Select />`);
        return e;
      }),
      (ze = ({ label: e }) => (0, X.jsx)(X.Fragment, { children: e })),
      (Be = ({ label: e }) => (0, X.jsx)(X.Fragment, { children: e })),
      (Ve = ({ values: e, selectedAll: t }) => {
        let n = t
          ? `All selected`
          : e.length === 0
            ? `Select...`
            : e.length === 1
              ? e[0]?.label
              : `${e.length} selected`;
        return (0, X.jsx)(X.Fragment, { children: n });
      }),
      (He = (e) => {
        let {
            id: t,
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            required: a,
            value: o,
            name: s,
            multiple: c,
            variant: l = `outline`,
            size: d = `md`,
            dropdownIconType: f = `dropdown`,
            loading: p = !1,
            open: m,
            onOpenChange: h,
            clearable: g = !1,
            disabled: _ = !1,
            invalid: v = !1,
            placeholder: y = `Select...`,
            loadingPlaceholder: b = `Loading...`,
            pill: x = D.pill,
            disablePressable: ee,
            listWidth: S,
            options: C,
            pagination: ne,
            actions: w = [],
            side: T = `bottom`,
            avoidCollisions: re = !0,
            onChange: E,
            optionClassName: ie,
            optionIndicatorPosition: O = `start`,
            OptionView: k = ze,
            TriggerStartIcon: A,
            endAdornment: j,
            triggerClassName: M,
            onTriggerClickCapture: N,
            opticallyAlign: ae,
            TriggerView: P,
            searchPlaceholder: F = ``,
            searchValue: I,
            searchPredicate: L = ft,
            searchEmptyMessage: se = `No results found.`,
            onSearchChange: R,
            searchable: z,
            listMaxWidth: B = `auto`,
            __isWidget: ce = !1,
            forceNativeSelect: V = !1,
          } = e,
          H = e.block ?? l !== `ghost`,
          le = e.align ?? (H ? `center` : `start`),
          ue = e.alignOffset ?? (le === `center` ? 0 : -5),
          de = e.listMinWidth ?? (H ? `auto` : 300);
        if (V && c && te)
          throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.");
        let U = c ? (e.selectedOptions ?? gt(C, o)) : gt(C, [o]),
          W = c ? e.getTagRemoveLabel : void 0,
          G = u((e, t) => {
            c ? (e.value ? E(t ? U.filter((t) => t.value !== e.value) : U.concat(e)) : E([])) : E(e);
          }),
          K = oe((e) => h?.(e)),
          fe = h ? K : void 0,
          pe = oe((e) => R?.(e)),
          q = R ? pe : void 0,
          me = oe((e) => N?.(e)),
          he = N ? me : void 0,
          ge = (0, Y.useRef)(L);
        ge.current = L;
        let _e = (0, Y.useMemo)(() => w, [w.length]),
          ve = (0, Y.useRef)(w);
        ve.current = w;
        let ye = (0, Y.useCallback)((e) => {
            ve.current.find((t) => t.id === e)?.onSelect(e);
          }, []),
          be = (0, Y.useMemo)(() => (Qe(C) ? C.reduce((e, t) => e + t.options.length, 0) : C.length), [C]),
          xe = `select-trigger-${(0, Y.useId)()}`,
          Se = z ?? be > 15,
          Ce = (0, Y.useMemo)(
            () => ({ "aria-label": n, "aria-labelledby": r, "aria-describedby": i }),
            [i, n, r],
          ),
          we = (0, Y.useMemo)(
            () =>
              c
                ? { multiple: !0, value: o, TriggerView: P ?? Ve }
                : { multiple: !1, value: o, TriggerView: P ?? Be },
            [c, o, P],
          ),
          Te = (0, Y.useMemo)(
            () => ({
              ...we,
              triggerId: xe,
              id: t,
              name: s,
              required: a,
              options: C,
              pagination: ne,
              selectedOptions: U,
              getTagRemoveLabel: W,
              endAdornment: j,
              placeholder: y,
              loadingPlaceholder: b,
              loading: p,
              open: m,
              onOpenChange: fe,
              clearable: g,
              variant: l,
              pill: x,
              disablePressable: ee,
              size: d,
              dropdownIconType: f,
              block: H,
              align: le,
              alignOffset: ue,
              side: T,
              avoidCollisions: re,
              listWidth: S,
              listMinWidth: de,
              listMaxWidth: B,
              searchPlaceholder: F,
              searchEmptyMessage: se,
              onSearchChange: q,
              TriggerStartIcon: A,
              triggerClassName: M,
              onTriggerClickCapture: he,
              opticallyAlign: ae,
              optionClassName: ie,
              optionIndicatorPosition: O,
              OptionView: k,
              actions: _e,
              onActionSelect: ye,
              onSelectRef: G,
              searchPredicateRef: ge,
              searchable: Se,
              disabled: _,
              invalid: v,
              __isWidget: ce,
              forceNativeSelect: V,
            }),
            [
              we,
              xe,
              t,
              a,
              s,
              C,
              ne,
              U,
              W,
              j,
              y,
              b,
              p,
              m,
              fe,
              g,
              l,
              x,
              ee,
              d,
              f,
              H,
              le,
              ue,
              T,
              re,
              S,
              de,
              B,
              F,
              se,
              q,
              A,
              M,
              he,
              ae,
              ie,
              O,
              k,
              _e,
              ye,
              G,
              Se,
              _,
              v,
              ce,
              V,
            ],
          );
        return (0, X.jsx)(Re.Provider, {
          value: Te,
          children: V ? (0, X.jsx)(We, { ariaProps: Ce }) : (0, X.jsx)(qe, { ariaProps: Ce, searchValue: I }),
        });
      }),
      (Ue = (e) => {
        let {
            triggerId: t,
            id: n,
            required: r,
            value: i,
            multiple: a,
            options: o,
            selectedOptions: s,
            loading: c,
            disabled: l,
            invalid: u,
            clearable: d,
            name: f,
            variant: p,
            pill: m,
            disablePressable: h,
            size: g,
            dropdownIconType: _,
            placeholder: v,
            loadingPlaceholder: y,
            block: b,
            opticallyAlign: x,
            triggerClassName: ee,
            onTriggerClickCapture: S,
            TriggerStartIcon: C,
            TriggerView: te,
            onSelectRef: ne,
            __isWidget: w,
            forceNativeSelect: T,
          } = Z(),
          { onOpenChange: re, ariaProps: E, ...ie } = e,
          D = E?.[`aria-label`],
          O = E?.[`aria-labelledby`],
          k = E?.[`aria-describedby`],
          A = a ? i[0] : i,
          j = c ? y : v,
          M = (f || n) && !T,
          N = (0, Y.useId)(),
          P = (0, Y.useId)(),
          oe = (0, Y.useMemo)(() => ht(o, A) || { value: ``, label: j }, [A, o, j]),
          F = a ? i.length > 0 : !!i,
          I = c || !F,
          L = (0, Y.useMemo)(() => xt(), []),
          se = (0, Y.useMemo)(() => {
            if (!a) return { values: [], selectedAll: !1 };
            let e = o.flatMap((e) => (`options` in e ? e.options : e));
            return {
              values: s.length ? s : [{ value: ``, label: j }],
              selectedAll: e.length > 0 && e.length <= i.length,
            };
          }, [a, o, s, i, j]),
          R = (e) => {
            let t = e.key;
            if (!a && St(t)) {
              let n = L(t);
              e.stopPropagation();
              let r = Ct(o, n, A);
              r && ne.current(r);
            }
          },
          z = () => {
            (ne.current({ value: ``, label: `` }), re?.(!1));
          },
          B = (0, Y.useMemo)(() => {
            if (O) return `${O} ${N}`;
            if (D) return `${P} ${N}`;
          }, [P, D, O, N]);
        return (0, X.jsxs)(ae, {
          id: t,
          "aria-labelledby": B,
          "aria-describedby": k,
          className: ee,
          selected: !I,
          variant: p,
          pill: m,
          disablePressable: h,
          block: b,
          size: g,
          disabled: l,
          invalid: u,
          loading: c,
          StartIcon: C,
          opticallyAlign: x,
          onClickCapture: S,
          dropdownIconType: _,
          onClearClick: d ? z : void 0,
          onInteract: re,
          onKeyDown: R,
          "data-w-component": w ? `select` : void 0,
          ...ie,
          children: [
            D &&
              !O &&
              (0, X.jsx)(`span`, {
                id: P,
                className: `sr-only w-full h-0 left-0 bottom-0 pointer-events-none`,
                children: D,
              }),
            (0, X.jsx)(`span`, {
              id: N,
              children: a ? (0, X.jsx)(te, { ...se }) : (0, X.jsx)(te, { ...oe }),
            }),
            M &&
              (0, X.jsx)(`input`, {
                id: n,
                name: f,
                value: A,
                tabIndex: -1,
                onFocus: () => {
                  document.getElementById(t)?.focus({ preventScroll: !0 });
                },
                onChange: () => {},
                required: r,
                inert: !0,
                className: `sr-only w-full h-0 left-0 bottom-0 pointer-events-none`,
                "aria-hidden": `true`,
              }),
          ],
        });
      }),
      (We = ({ ariaProps: e }) => {
        let {
          value: t,
          multiple: n,
          name: r,
          options: i,
          placeholder: a,
          block: o,
          loading: s,
          onSelectRef: l,
          onTriggerClickCapture: u,
        } = Z();
        if (n) throw Error("Rendered native select while using `multiple` selection mode.");
        return (0, X.jsx)(`div`, {
          className: `flex min-w-0`,
          children: (0, X.jsxs)(`div`, {
            className: c(`relative max-w-full`, o && `w-full`),
            children: [
              (0, X.jsxs)(`select`, {
                name: r,
                "aria-label": e[`aria-label`],
                "aria-labelledby": e[`aria-labelledby`],
                "aria-describedby": e[`aria-describedby`],
                className: J.NativeSelect,
                value: t,
                onClickCapture: u,
                onKeyDown: (e) => {
                  e.stopPropagation();
                },
                onChange: (e) => {
                  let t = e.target.value,
                    n = ht(i, t);
                  n && l.current(n);
                },
                disabled: s,
                "data-native-selectcontrol": ``,
                children: [
                  !t && (0, X.jsx)(`option`, { value: ``, children: a }),
                  i.map((e) =>
                    Ze(e) ? (0, X.jsx)(Ge, { ...e }, e.label) : (0, X.jsx)(Ke, { ...e }, e.value),
                  ),
                ],
              }),
              (0, X.jsx)(Ue, { ariaProps: e, tabIndex: -1, "aria-hidden": `true` }),
            ],
          }),
        });
      }),
      (Ge = ({ label: e, options: t }) =>
        (0, X.jsx)(`optgroup`, { label: e, children: t.map((e) => (0, X.jsx)(Ke, { ...e }, e.value)) })),
      (Ke = ({ value: e, label: t, disabled: n }) =>
        (0, X.jsx)(`option`, { value: e, disabled: n, children: t })),
      (qe = ({ ariaProps: e, searchValue: t }) => {
        let {
            triggerId: n,
            loading: r,
            open: a,
            onOpenChange: o,
            side: s,
            align: c,
            alignOffset: l,
            avoidCollisions: d,
            listWidth: p,
            listMinWidth: h,
            listMaxWidth: _,
            block: y,
            onTriggerClickCapture: b,
            multiple: x,
            value: S,
            options: C,
            pagination: te,
            searchable: T,
            searchPredicateRef: O,
            onSearchChange: k,
          } = Z(),
          [A, j] = (0, Y.useState)(!1),
          M = (0, Y.useRef)(null),
          N = (0, Y.useRef)(null),
          ae = f(),
          P = u(() => {
            (R(``), k?.(``));
          }),
          oe = u(() => q(!1)),
          F = (0, Y.useRef)(null),
          I = (0, Y.useRef)(null),
          L = (0, Y.useRef)(null),
          [se, R] = (0, Y.useState)(``),
          z = T ? (t ?? se) : ``,
          B = (0, Y.useRef)(z),
          ce = !T || !k || C.some((e) => (`options` in e ? e.options.length > 0 : !0)),
          V = ce || !!z.trim(),
          H = (a ?? A) && V,
          le = (0, Y.useMemo)(() => xt(), []),
          ue = `select-list-${(0, Y.useId)()}`,
          de = (0, Y.useRef)(x ? `` : S),
          U = (0, Y.useMemo)(() => pt(C, z, O.current), [C, z, O]),
          W = mt(U),
          [G, K] = (0, Y.useState)(() => {
            let e = x ? S[0] : S;
            return ht(U, e)?.value ?? W?.value ?? ``;
          }),
          fe = (e) => {
            if (e.nativeEvent.isComposing) return;
            let t = e.key,
              n = x ? S[0] : S,
              r = G || W?.value || n,
              i = document.activeElement === L.current,
              a = F.current;
            if (!a) return;
            let o = () => {
                let e = new PointerEvent(`pointerup`, { bubbles: !0, cancelable: !0, pointerType: `mouse` });
                $(G, a)?.dispatchEvent(e);
              },
              s = (e, t) => {
                (K(e), t.scrollIntoView({ block: `nearest` }));
              },
              c = () => {
                let e = x ? S[0] : S;
                if (e) {
                  let t = $(e, a);
                  if (t) {
                    s(e, t);
                    return;
                  }
                }
                if (W) {
                  let e = $(W.value, a);
                  e && s(W.value, e);
                }
              };
            switch (t) {
              case `ArrowDown`: {
                if ((e.preventDefault(), !G || !$(G, a))) {
                  c();
                  return;
                }
                let t = yt(G, a),
                  n = t?.getAttribute(`data-option-id`);
                t && n && s(n, t);
                return;
              }
              case `ArrowUp`: {
                if ((e.preventDefault(), !G || !$(G, a))) {
                  c();
                  return;
                }
                let t = bt(r, a),
                  n = t?.getAttribute(`data-option-id`);
                t && n && s(n, t);
                return;
              }
              case `Enter`:
                (e.preventDefault(), o());
                return;
              case ` `:
                if (i) return;
                (e.preventDefault(), o());
                return;
            }
            if (St(t)) {
              if (i) return;
              let n = le(t);
              e.stopPropagation();
              let r = Ct(C, n, G);
              if (r) {
                let e = $(r.value, a);
                e && (K(r.value), e.scrollIntoView({ block: `nearest` }));
              }
            }
          },
          pe = (0, Y.useMemo)(
            () => ({
              valueRef: de,
              listId: ue,
              highlightedValue: G,
              setHighlightedValue: K,
              requestCloseRef: oe,
              resetSearchRef: P,
              searchTerm: z,
              listRef: I,
            }),
            [ue, G, z, oe, P],
          );
        ((0, Y.useLayoutEffect)(() => {
          H &&
            ((de.current = x ? `` : S),
            K(ht(U, x ? S[0] : S)?.value ?? W?.value ?? ``),
            E(() => {
              let e = F.current,
                t = I.current;
              if (!e || !t) return;
              let n = $(G, t);
              if (n) {
                let e = t.clientHeight,
                  r = n.offsetTop,
                  i = n.offsetHeight,
                  a = r - e / 2 + i / 2,
                  o = t.scrollHeight - e;
                t.scrollTop = Math.max(0, Math.min(a, o));
              }
            }),
            (L.current || I.current || F.current)?.focus({ preventScroll: !0 }));
        }, [H]),
          (0, Y.useLayoutEffect)(() => {
            let e = te != null && B.current === z;
            if (((B.current = z), !H || !I.current)) return;
            let t = ht(U, G);
            (e && t && !t.disabled) || (e || (I.current.scrollTop = 0), K(mt(U)?.value ?? ``));
          }, [U, z, te != null]));
        let q = (e) => {
          let t = (e === void 0 ? !H : e) && V;
          t !== H &&
            (t || (R(``), z && k?.(``)),
            a === void 0 && j(t),
            o?.(t),
            t ||
              setTimeout(() => {
                if (!M.current) return;
                let e = document.activeElement;
                (!e || M.current.contains(e)) && document.getElementById(n)?.focus({ preventScroll: !0 });
              }));
        };
        return (
          i(H, () => {
            q(!1);
          }),
          (0, X.jsx)(Je, {
            value: pe,
            children: (0, X.jsxs)(ne, {
              open: H,
              onOpenChange: (e) => {
                (r && e) || q(e);
              },
              modal: !1,
              children: [
                T
                  ? (0, X.jsx)(g, {
                      asChild: !0,
                      children: (0, X.jsx)(`div`, {
                        ref: N,
                        className: J.SearchControl,
                        "data-block": y ? `` : void 0,
                        onClickCapture: b,
                        children: (0, X.jsx)(Xe, {
                          ariaProps: e,
                          searchInputRef: L,
                          open: H,
                          searchTerm: z,
                          onFocus: () => q(!0),
                          onKeyDown: (e) => {
                            !H && (e.key === `ArrowDown` || e.key === `ArrowUp`)
                              ? (e.preventDefault(), q(!0))
                              : H && fe(e);
                          },
                          onChange: (e) => {
                            let t = ce || !!e.trim();
                            if (H && !t) {
                              q(!1);
                              return;
                            }
                            (R(e), k?.(e), a === void 0 && j(t), !H && t && o?.(!0));
                          },
                        }),
                      }),
                    })
                  : (0, X.jsx)(re, {
                      asChild: !0,
                      children: (0, X.jsx)(Ue, { ariaProps: e, onOpenChange: q }),
                    }),
                (0, X.jsx)(ie, {
                  forceMount: !0,
                  container: ae,
                  children: (0, X.jsx)(m, {
                    className: J.Menu,
                    enterDuration: 350,
                    exitDuration: 200,
                    children:
                      H &&
                      (0, X.jsx)(
                        ee,
                        {
                          ref: M,
                          forceMount: !0,
                          className: J.MenuList,
                          side: s,
                          sideOffset: 5,
                          align: c,
                          alignOffset: l,
                          avoidCollisions: d,
                          collisionPadding: { bottom: 30, top: 30 },
                          onOpenAutoFocus: (e) => {
                            (e.preventDefault(),
                              (L.current || I.current || F.current)?.focus({ preventScroll: !0 }));
                          },
                          onCloseAutoFocus: v,
                          onEscapeKeyDown: v,
                          onInteractOutside: (e) => {
                            e.target instanceof Node && N.current?.contains(e.target) && e.preventDefault();
                          },
                          onMouseDown: (e) => {
                            T && e.preventDefault();
                          },
                          style: w({
                            scale: D.pressable ? void 0 : `1`,
                            "select-list-width": p,
                            "select-list-min-width": h,
                            "select-list-max-width": _,
                          }),
                          children: (0, X.jsxs)(`div`, {
                            className: J.MenuInner,
                            onKeyDown: fe,
                            ref: F,
                            tabIndex: T ? -1 : 0,
                            children: [(0, X.jsx)(tt, { filteredOptions: U }), (0, X.jsx)(ut, {})],
                          }),
                        },
                        `dropdown`,
                      ),
                  }),
                }),
              ],
            }),
          })
        );
      }),
      (Je = (0, Y.createContext)(null)),
      (Ye = () => {
        let e = (0, Y.use)(Je);
        if (!e) throw Error(`Select menu components must be wrapped in <CustomSelect />`);
        return e;
      }),
      (Xe = ({
        ariaProps: e,
        searchInputRef: t,
        open: n,
        searchTerm: r,
        onChange: i,
        onFocus: a,
        onKeyDown: o,
      }) => {
        let {
            triggerId: s,
            id: l,
            name: u,
            required: d,
            value: f,
            multiple: p,
            selectedOptions: m,
            getTagRemoveLabel: h,
            size: g,
            pill: _,
            variant: v,
            disabled: y,
            invalid: b,
            loading: x,
            loadingPlaceholder: ee,
            placeholder: S,
            searchPlaceholder: C,
            triggerClassName: te,
            opticallyAlign: ne,
            TriggerStartIcon: w,
            TriggerView: T,
            clearable: re,
            onSelectRef: E,
            endAdornment: ie,
          } = Z(),
          { listId: D, highlightedValue: O } = Ye(),
          j = m[0],
          M = !p && !r && j != null,
          ae = (0, Y.useId)(),
          P = {
            ...e,
            id: s,
            ref: t,
            className: c(te, v === `ghost` && J.SearchGhost),
            size: g,
            pill: _,
            variant: v === `ghost` ? `outline` : v,
            disabled: y || x,
            invalid: b,
            opticallyAlign: ne,
            value: r,
            placeholder: x ? ee : C || S,
            onChange: (e) => i(e.target.value),
            onFocus: a,
            onClick: a,
            onKeyDown: o,
            autoComplete: `off`,
            autoCorrect: `off`,
            spellCheck: !1,
            "aria-busy": x || void 0,
            "aria-autocomplete": `list`,
            role: `combobox`,
            "aria-controls": n ? D : void 0,
            "aria-expanded": n,
            "aria-activedescendant": n && O ? et(O) : void 0,
            endAdornment: ie,
          };
        return (0, X.jsxs)(X.Fragment, {
          children: [
            p
              ? (0, X.jsx)(q, {
                  ...P,
                  tags: m,
                  getRemoveLabel: h,
                  onRemoveTag: (e) => E.current(e, !0),
                  startAdornment: w ? (0, X.jsx)(w, {}) : void 0,
                })
              : (0, X.jsx)(A, {
                  ...P,
                  placeholder: M ? `` : P.placeholder,
                  "aria-describedby":
                    [e[`aria-describedby`], M ? ae : void 0].filter(Boolean).join(` `) || void 0,
                  startAdornment: M
                    ? (0, X.jsx)(`span`, {
                        id: ae,
                        className: J.SearchSelection,
                        children: (0, X.jsx)(T, { ...j }),
                      })
                    : w
                      ? (0, X.jsx)(w, {})
                      : (0, X.jsx)(B, { width: 16, height: 16, className: `fill-secondary` }),
                  endAdornment:
                    re && m.length > 0
                      ? (0, X.jsx)(k, {
                          color: `secondary`,
                          variant: `ghost`,
                          size: `3xs`,
                          uniform: !0,
                          "aria-label": `Clear current value`,
                          disabled: y || x,
                          onClick: () => {
                            (E.current({ value: ``, label: `` }), i(``), t.current?.focus());
                          },
                          children: (0, X.jsx)(N, {}),
                        })
                      : ie,
                }),
            (u || l) &&
              (0, X.jsx)(`input`, {
                id: l,
                name: u,
                value: p ? (f[0] ?? ``) : f,
                required: d,
                tabIndex: -1,
                inert: !0,
                "aria-hidden": `true`,
                className: `sr-only`,
                onChange: () => {},
                onFocus: () => t.current?.focus(),
              }),
          ],
        });
      }),
      (Ze = (e) => `options` in e),
      (Qe = (e) => !!e[0] && Ze(e[0])),
      ($e = 300),
      (et = (e) => `select-option-${encodeURIComponent(e)}`),
      (tt = ({ filteredOptions: e }) => {
        let { searchEmptyMessage: t, multiple: n, searchable: r, pagination: i } = Z(),
          { listId: a, highlightedValue: o, listRef: s } = Ye(),
          c = o ? et(o) : void 0,
          l = e.reduce((e, t) => e + (`options` in t ? t.options.length : 1), 0);
        if (!e.length)
          return (0, X.jsxs)(`div`, {
            id: a,
            ref: s,
            role: `listbox`,
            "aria-multiselectable": n || void 0,
            children: [
              (0, X.jsx)(`div`, {
                className: J.SearchEmpty,
                "data-text-only": typeof t == `string` ? `` : void 0,
                role: `status`,
                children: t,
              }),
              i && (0, X.jsx)(nt, { pagination: i }),
            ],
          });
        let u = Qe(e),
          d = i == null && !u && e.length > $e,
          f = u
            ? e.map((e) => (0, X.jsx)(it, { ...e }, e.label))
            : e.slice(0, i == null ? $e : void 0).map((e) => (0, X.jsx)(lt, { ...e }, e.value));
        return (0, X.jsxs)(`div`, {
          id: a,
          className: J.OptionsList,
          ref: s,
          role: `listbox`,
          tabIndex: r ? -1 : 0,
          "aria-activedescendant": c,
          "aria-multiselectable": n || void 0,
          children: [
            f,
            d && (0, X.jsx)(at, { numHidden: e.length - $e }),
            i && (0, X.jsx)(nt, { pagination: i }, l),
          ],
        });
      }),
      (nt = ({ pagination: e }) => {
        let t = oe(e.onLoadMore),
          n = (0, Y.useCallback)(
            (e) => {
              if (e == null) return;
              let n = !0,
                r = new IntersectionObserver(
                  (e) => {
                    n && e.some((e) => e.isIntersecting) && ((n = !1), r.disconnect(), t());
                  },
                  { root: e.parentElement },
                );
              return (
                r.observe(e),
                () => {
                  ((n = !1), r.disconnect());
                }
              );
            },
            [t],
          );
        return e.hasNextPage && !e.isFetching
          ? (0, X.jsx)(`div`, { className: J.PaginationSentinel, "aria-hidden": !0, ref: n })
          : null;
      }),
      (rt = { limit: 100, label: `Show all` }),
      (it = ({ label: e, options: t, optionsLimit: n = rt }) => {
        let r = (0, Y.useId)(),
          { optionIndicatorPosition: i, pagination: a } = Z(),
          { searchTerm: o, setHighlightedValue: s } = Ye(),
          [c, l] = (0, Y.useState)(!1),
          u = a == null && n.limit < t.length && !o && !c,
          d = a == null && $e < t.length && !u,
          f = t;
        return (
          u ? (f = t.slice(0, n.limit)) : d && (f = t.slice(0, $e)),
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`div`, {
                className: J.OptionGroupHeading,
                children: [
                  i === `start` && (0, X.jsx)(Q, { position: i }),
                  e,
                  i === `end` && (0, X.jsx)(Q, { position: i }),
                ],
              }),
              f.map((e) => (0, X.jsx)(lt, { ...e }, e.value)),
              u &&
                (0, X.jsx)(ot, {
                  value: `group-limit-${r}`,
                  label: n.label,
                  onPointerUp: () => {
                    (l(!0), s(t[n.limit]?.value ?? ``));
                  },
                }),
              d && (0, X.jsx)(at, { numHidden: t.length - $e }),
            ],
          })
        );
      }),
      (at = ({ numHidden: e }) => {
        let { optionIndicatorPosition: t } = Z();
        return (0, X.jsxs)(`div`, {
          className: J.OptionHardLimitHeading,
          children: [
            t === `start` && (0, X.jsx)(Q, { position: t }),
            `…and ${e.toLocaleString()} more options. Use search to refine results further.`,
            t === `end` && (0, X.jsx)(Q, { position: t }),
          ],
        });
      }),
      (ot = ({ value: e, label: t, onPointerUp: n }) => {
        let { optionIndicatorPosition: r } = Z(),
          { highlightedValue: i, setHighlightedValue: a } = Ye(),
          o = e === i;
        return (0, X.jsx)(`div`, {
          className: c(J.Option, J.OptionsLimit),
          id: et(e),
          "data-option-id": e,
          "data-highlight": o ? `` : void 0,
          role: `option`,
          "aria-selected": !1,
          onPointerUp: n,
          onPointerMove: () => {
            o || a(e);
          },
          onPointerLeave: () => {
            a((t) => (t === e ? `` : t));
          },
          children: (0, X.jsxs)(`div`, {
            className: c(J.PressableInner, J.OptionInner),
            children: [
              r === `start` && (0, X.jsx)(Q, { position: r }),
              t,
              r === `end` && (0, X.jsx)(Q, { position: r }),
            ],
          }),
        });
      }),
      (st = `data-option-id`),
      (Q = ({ children: e, indicator: t = !1, position: n }) =>
        (0, X.jsx)(`div`, {
          className: J.OptionIndicatorSlot,
          "data-option-indicator-position": n,
          "data-select-option-indicator": t ? `` : void 0,
          children: e,
        })),
      (ct = ({ isSelected: e, position: t }) =>
        (0, X.jsx)(Q, {
          indicator: !0,
          position: t,
          children: e && (0, X.jsx)(s, { className: J.OptionCheck }),
        })),
      (lt = (e) => {
        let {
            optionClassName: t,
            OptionView: n,
            value: r,
            multiple: i,
            searchable: a,
            onSelectRef: o,
            optionIndicatorPosition: s,
          } = Z(),
          {
            valueRef: l,
            requestCloseRef: u,
            resetSearchRef: d,
            highlightedValue: f,
            setHighlightedValue: p,
          } = Ye(),
          { value: m, disabled: h, tooltip: g } = e,
          _ = l.current,
          v = i ? r.includes(m) : m === _,
          y = m === f,
          b = () => {
            i ? (o.current(e, v), a && d.current()) : (o.current(e), u.current?.());
          },
          x = () => {
            y || p(m);
          },
          ee = () => {
            p((e) => (e === m ? `` : e));
          };
        return (0, X.jsx)(`div`, {
          className: c(J.Option, t),
          id: et(m),
          "data-highlight": y ? `` : void 0,
          role: `option`,
          "aria-selected": v,
          "data-selected": v ? `` : void 0,
          [st]: m,
          onPointerUp: h ? void 0 : b,
          onPointerMove: h ? void 0 : x,
          onPointerLeave: h ? void 0 : ee,
          "aria-disabled": h,
          "data-disabled": h ? `` : void 0,
          children: (0, X.jsxs)(`div`, {
            className: J.PressableInner,
            children: [
              (0, X.jsxs)(`div`, {
                className: J.OptionInner,
                children: [
                  s === `start` && (0, X.jsx)(ct, { isSelected: v, position: s }),
                  (0, X.jsx)(n, { ...e }),
                  g &&
                    (0, X.jsx)(O, {
                      content: g.content,
                      maxWidth: g.maxWidth,
                      side: `right`,
                      children: (0, X.jsx)(se, {}),
                    }),
                  s === `end` && (0, X.jsx)(ct, { isSelected: v, position: s }),
                ],
              }),
              e.description &&
                (0, X.jsxs)(`div`, {
                  className: J.OptionInner,
                  children: [
                    s === `start` && (0, X.jsx)(Q, { position: s }),
                    e.description,
                    s === `end` && (0, X.jsx)(Q, { position: s }),
                  ],
                }),
            ],
          }),
        });
      }),
      (ut = () => {
        let { actions: e } = Z();
        return e.length === 0
          ? null
          : (0, X.jsx)(`div`, {
              className: J.ActionsContainer,
              children: e.map((e) => (0, X.jsx)(dt, { ...e }, e.id)),
            });
      }),
      (dt = ({ id: e, label: t, Icon: n, className: r }) => {
        let { onActionSelect: i } = Z(),
          { requestCloseRef: a } = Ye(),
          o = (e) => {
            switch (e.key) {
              case `Tab`:
                break;
              case `Enter`:
              case ` `:
                (e.stopPropagation(), s());
                break;
              default:
                e.stopPropagation();
            }
          },
          s = () => {
            (i(e), a.current?.());
          };
        return (0, X.jsx)(`div`, {
          className: J.Action,
          onPointerUp: s,
          onKeyDown: o,
          tabIndex: 0,
          children: (0, X.jsxs)(`div`, {
            className: c(J.ActionInner, r),
            children: [n && (0, X.jsx)(n, { role: `presentation` }), t],
          }),
        });
      }),
      (ft = (e, t) => e.label.toLowerCase().includes(t)),
      (pt = (e, t, n) => {
        let r = t.trim().toLocaleLowerCase();
        if (!r) return e;
        let i = (e) => n(e, r);
        return Qe(e)
          ? e.reduce((e, t) => {
              let n = t.options.filter(i);
              return (n.length && e.push({ ...t, options: n }), e);
            }, [])
          : e.reduce((e, t) => (i(t) && e.push(t), e), []);
      }),
      (mt = (e) => {
        if (!e.length) return;
        let t;
        for (let n of e)
          if (Ze(n)) {
            let e = n.options.find((e) => !e.disabled);
            if (e) {
              t = e;
              break;
            }
          } else if (!n.disabled) {
            t = n;
            break;
          }
        return t;
      }),
      (ht = (e, t) => {
        let n;
        for (let r of e)
          if (Ze(r)) {
            let e = r.options.find((e) => e.value === t);
            if (e) {
              n = e;
              break;
            }
          } else if (r.value === t) {
            n = r;
            break;
          }
        return n;
      }),
      (gt = (e, t) => {
        let n = [],
          r = new Set(t);
        for (let t of e)
          if (Ze(t)) {
            let e = t.options.filter((e) => r.has(e.value));
            n = n.concat(e);
          } else r.has(t.value) && n.push(t);
        return n;
      }),
      (_t = 40),
      ($ = (e, t) => t.querySelector(`[data-option-id="${e}"]`)),
      (vt = (e) => e.matches(`[data-option-id]:not([data-disabled])`)),
      (yt = (e, t) => {
        let n = $(e, t)?.nextElementSibling,
          r = 0;
        for (; n && r < _t;) {
          if (vt(n)) return n;
          ((n = n.nextElementSibling), (r += 1));
        }
      }),
      (bt = (e, t) => {
        let n = $(e, t)?.previousElementSibling,
          r = 0;
        for (; n && r < _t;) {
          if (vt(n)) return n;
          ((n = n.previousElementSibling), (r += 1));
        }
      }),
      (xt = () => {
        let e = ``,
          t;
        return (n) => {
          let r = n.toLowerCase();
          return (
            (e += r),
            t && clearTimeout(t),
            (t = setTimeout(() => {
              e = ``;
            }, 500)),
            r.repeat(e.length) === e ? r : e
          );
        };
      }),
      (St = (e) => /^[a-zA-Z0-9]$/.test(e)),
      (Ct = (e, t, n) => {
        if (!e.length) return;
        let r,
          i,
          a = !n,
          o = ({ disabled: e, label: r, value: i }) =>
            i === n ? ((a = !0), !1) : !e && r.toLowerCase().startsWith(t);
        for (let t of e)
          if (Ze(t)) {
            for (let e of t.options)
              if (o(e)) {
                if (a) {
                  i = e;
                  break;
                }
                r ||= e;
              }
          } else if (o(t)) {
            if (a) {
              i = t;
              break;
            }
            r ||= t;
          }
        return i || r;
      }));
  }))();
}
function Tt() {
  return (Tt = e(() => {
    wt();
  }))();
}
export { He as n, wt as r, Tt as t };
//# sourceMappingURL=select-4c14bfc522da.js.map
