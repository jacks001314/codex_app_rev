import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bkt as t,
  FBt as n,
  Hkt as r,
  LNt as i,
  MNt as a,
  NNt as o,
  Ukt as ee,
  Vkt as te,
  Wkt as ne,
  XOt as s,
  okt as re,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as c, t as ie } from "./learning-block-katex-0805ca0061e4.js";
import { a as ae, d as l, g as u, i as d, n as oe, u as f } from "./format-number-input-b026fe0339b2.js";
import { n as se, t as ce } from "./input-selector.module-abd07a9383a7.js";
var p, m, h, g, _, le, v, ue, y, b, x, de, fe, pe, me, he, ge, S, _e, ve, ye, C;
function w() {
  return (w = e(() => {
    (ne(),
      o(),
      (p = n()),
      s(),
      d(),
      c(),
      l(),
      ce(),
      (m = i()),
      (h = (e, t, n) => Math.min(Math.max(e, t), n)),
      (g =
        /[+\-−]?(?:\p{Nd}+(?:[.,\u066b\u066c\u00a0\u202f]\p{Nd}+)*|[.,\u066b]\p{Nd}+)(?:e[+\-−]?\p{Nd}+)?/iu),
      (_ = (e, t, n, r) => {
        if (!Number.isFinite(e)) return t;
        let i = h(e, t, n),
          a = t + Math.round((i - t) / r) * r,
          o = f(r),
          ee = u(a, Math.max(1, o));
        return h(ee, t, n);
      }),
      (le = (e, { max: t, min: n, normalizeCommittedValue: r, step: i }) => (r ? r(e) : _(e, n, t, i))),
      (v = (e, t, n) => {
        let r = n(e, t);
        return r.match(g)?.[0] ?? r;
      }),
      (ue = (e, t, n, r) => Math.max(v(e, n, r).length, v(t, n, r).length)),
      (y = 1),
      (b = 4),
      (x = 12),
      (de = (e, t) => e > t + y),
      (fe = ({ availableWidth: e, labelWidth: t, minSliderWidthPx: n = 96, unitWidth: r, valueWidth: i }) => {
        let a = 2 + Number(i > 0) + Number(r > 0);
        return t + i + r + (a - 1) * x + n > e + y;
      }),
      (pe = (e) => Math.ceil(e.getBoundingClientRect().width)),
      (me = ({ boundary: e, menuHeight: t, trigger: n }) => {
        let r = e.bottom - n.bottom - b;
        if (t <= r) return `below`;
        let i = n.top - e.top - b;
        return t <= i || i > r ? `above` : `below`;
      }),
      (he = ({ clippingAncestors: e, viewport: t }) =>
        e.reduce((e, t) => ({ bottom: Math.min(e.bottom, t.bottom), top: Math.max(e.top, t.top) }), t)),
      (ge = (e) => {
        let t = [],
          n = e.parentElement;
        for (; n;) (window.getComputedStyle(n).overflowY !== `visible` && t.push(n), (n = n.parentElement));
        return t;
      }),
      (S = (e) => e),
      (_e = (0, p.createContext)({ isNativeSlider: !1 })),
      (ve = () =>
        (0, m.jsx)(`svg`, {
          "aria-hidden": !0,
          className: `h-4 w-4 flex-none`,
          fill: `none`,
          viewBox: `0 0 16 16`,
          children: (0, m.jsx)(`path`, {
            d: `m5 6 3-3 3 3M5 10l3 3 3-3`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: `1.5`,
          }),
        })),
      (ye = (e, t) =>
        !e || t === `text`
          ? !1
          : t === `katex` || /\\/.test(e)
            ? !0
            : /^[A-Za-zθμσλπΔ](?:[_^][A-Za-z0-9{}]+)?$/.test(e)),
      (C = ({
        min: e,
        max: n,
        step: i,
        value: o,
        displayValue: ne,
        onChange: s,
        onActiveChange: c,
        disabled: l,
        options: u,
        optionLabelFormat: d = `text`,
        sliderStyle: f = `continuous`,
        ariaLabel: ce,
        ariaValueText: g,
        variable: y,
        variableBold: b,
        variableFormat: x,
        unit: S,
        formatValueForInput: C,
        parseInputValue: w,
        normalizeCommittedValue: be,
        minSliderWidthPx: xe,
        showValueInput: Se = !0,
        valueClassName: Ce,
        groupVariableWidthCh: we,
        groupVariableWidthPx: T,
        groupUnitWidthCh: E,
        groupValueWidthCh: Te,
      }) => {
        "use forget";
        let {
            isNativeSlider: D,
            onSliderInteractionEnd: Ee,
            onSliderInteractionStart: De,
          } = (0, p.useContext)(_e),
          O = re(),
          k = C ?? ((e, t) => oe(O, e, t)),
          Oe = w ?? ((e) => ae(O, e)),
          A = _(o, e, n, i),
          j = Number.isFinite(ne) ? ne : !u && Number.isFinite(o) ? h(o, e, n) : A,
          [ke, M] = (0, p.useState)(() => v(j, i, k)),
          [Ae, N] = (0, p.useState)(!1),
          P = (0, p.useRef)(!1),
          F = (0, p.useRef)(!1),
          je = (0, p.useRef)(!1),
          Me = (0, p.useRef)(null),
          Ne = (0, p.useRef)(null),
          I = (0, p.useRef)(null),
          L = (0, p.useRef)(null),
          Pe = (0, p.useRef)(null),
          Fe = (0, p.useRef)(null),
          R = (0, p.useRef)(null),
          z = (0, p.useRef)(null),
          B = (0, p.useRef)(!1),
          [V, Ie] = (0, p.useState)(!1),
          [H, Le] = (0, p.useState)(!1),
          [U, W] = (0, p.useState)(!1),
          [Re, ze] = (0, p.useState)(D ? `above` : `below`),
          G = (e = `blur`) => {
            (e === `blur` && je.current) || (F.current && ((F.current = !1), c?.(!1), Ee?.()));
          },
          Be = () => {
            F.current || ((F.current = !0), c?.(!0), De?.(y));
          },
          Ve = () => {
            ((je.current = !0), Be());
          };
        ((0, p.useEffect)(() => {
          let e = () => {
            ((je.current = !1), G(`pointer-end`));
          };
          return (
            window.addEventListener(`pointerup`, e),
            window.addEventListener(`pointercancel`, e),
            () => {
              (window.removeEventListener(`pointerup`, e), window.removeEventListener(`pointercancel`, e));
            }
          );
        }, [c, Ee]),
          (0, p.useLayoutEffect)(() => {
            let e = Pe.current,
              t = Fe.current;
            if (!u || !e || !t) {
              Ie(!1);
              return;
            }
            let n = () => {
              let n = e.clientWidth,
                r = de(t.scrollWidth, n);
              Ie((e) => (e === r ? e : r));
            };
            n();
            let r = typeof document > `u` ? void 0 : document.fonts;
            if ((r?.addEventListener(`loadingdone`, n), typeof ResizeObserver > `u`))
              return () => r?.removeEventListener(`loadingdone`, n);
            let i = new ResizeObserver(n);
            return (
              i.observe(e),
              i.observe(t),
              () => {
                (r?.removeEventListener(`loadingdone`, n), i.disconnect());
              }
            );
          }, [u, d]),
          (0, p.useEffect)(() => {
            let e = (e) => {
              e.key === `Escape` && B.current && ((B.current = !1), e.preventDefault(), e.stopPropagation());
            };
            return (
              document.addEventListener(`keyup`, e, !0),
              () => document.removeEventListener(`keyup`, e, !0)
            );
          }, []),
          (0, p.useEffect)(() => {
            if (!U) return;
            B.current = !1;
            let e = (e) => {
                let t = e.target;
                t instanceof Node && (R.current?.contains(t) || z.current?.contains(t) || W(!1));
              },
              t = (e) => {
                e.key === `Escape` &&
                  ((B.current = !0), e.preventDefault(), e.stopPropagation(), W(!1), z.current?.focus());
              };
            return (
              document.addEventListener(`pointerdown`, e),
              document.addEventListener(`keydown`, t, !0),
              () => {
                (document.removeEventListener(`pointerdown`, e),
                  document.removeEventListener(`keydown`, t, !0));
              }
            );
          }, [U]),
          (0, p.useEffect)(() => {
            (!V || l) && W(!1);
          }, [l, V]),
          (0, p.useLayoutEffect)(() => {
            if (!U) {
              ze(D ? `above` : `below`);
              return;
            }
            let e = R.current,
              t = z.current;
            if (!e || !t) return;
            let n = () => {
              ze(
                me({
                  boundary: he({
                    clippingAncestors: ge(t).map((e) => e.getBoundingClientRect()),
                    viewport: { bottom: window.innerHeight, top: 0 },
                  }),
                  menuHeight: e.getBoundingClientRect().height,
                  trigger: t.getBoundingClientRect(),
                }),
              );
            };
            if ((n(), window.addEventListener(`resize`, n), typeof ResizeObserver > `u`))
              return () => window.removeEventListener(`resize`, n);
            let r = new ResizeObserver(n);
            return (
              r.observe(e),
              r.observe(t),
              ge(t).forEach((e) => r.observe(e)),
              () => {
                (window.removeEventListener(`resize`, n), r.disconnect());
              }
            );
          }, [U, D]));
        let He = Ae ? ke : v(j, i, k),
          Ue = ue(e, n, i, k),
          We = Te ?? Ue,
          K = y,
          Ge = x,
          Ke = b ?? !1,
          qe = K ? K.replace(/[^\w-]+/g, `_`) : `input-selector-value`,
          q =
            ce ??
            (K
              ? O.formatMessage(
                  { id: `learningBlock.inputSelector.valueAriaLabel`, defaultMessage: `{label} value` },
                  { label: K },
                )
              : void 0),
          Je = ye(K, Ge),
          Ye = u?.find((t) => _(t.value, e, n, i) === A) ?? u?.[0],
          Xe = V
            ? O.formatMessage(
                {
                  id: `learningBlock.inputSelector.overflowMenuAriaLabel`,
                  defaultMessage: `{value}. Show all {label} options`,
                },
                {
                  label:
                    q ??
                    O.formatMessage({
                      id: `learningBlock.inputSelector.selectorAriaLabel`,
                      defaultMessage: `selector`,
                    }),
                  value: Ye?.ariaLabel ?? Ye?.label ?? ``,
                },
              )
            : void 0,
          Ze = (0, p.useId)(),
          J = (e, t) => (t === `katex` ? (0, m.jsx)(ie, { className: `katex`, latex: e }) : e),
          Y = (t) => _(t.value, e, n, i),
          Qe = u?.find((e) => Y(e) === A) ?? u?.[0],
          $e = (t) => {
            let r = Oe(t);
            if (!Number.isFinite(r)) {
              M(v(j, i, k));
              return;
            }
            let a = le(r, { min: e, max: n, step: i, normalizeCommittedValue: be });
            (s(a, `input`), M(v(a, i, k)));
          },
          et = (e) => {
            if (e.key === `Enter`) {
              (e.preventDefault(), (P.current = !0), N(!1), $e(ke), e.currentTarget.blur());
              return;
            }
            e.key === `Escape` &&
              (e.preventDefault(), (P.current = !0), N(!1), M(v(j, i, k)), e.currentTarget.blur());
          },
          tt = K
            ? (0, m.jsx)(`div`, {
                "data-input-selector-variable": !0,
                "data-input-selector-label-layout": H ? `stacked` : `inline`,
                className: a(
                  `text-token-text-primary min-w-0 max-w-full justify-self-start text-sm leading-5 whitespace-normal hyphens-auto [overflow-wrap:anywhere] [&_.katex]:!text-[1em]`,
                  Ke && `font-medium`,
                ),
                children: Je ? (0, m.jsx)(ie, { className: `katex`, latex: K ?? `` }) : K,
              })
            : null,
          nt = S
            ? (0, m.jsx)(`div`, {
                ref: L,
                className: `text-token-text-secondary -ms-3 shrink-0 text-xs leading-4 whitespace-nowrap [&_.katex]:text-inherit`,
                children: S,
              })
            : null,
          rt = !!Te,
          it = `minmax(max(${We}ch,2rem), max(${We}ch,2rem))`,
          at = !!E,
          X = `minmax(${E ?? 0}ch, ${E ?? 0}ch)`,
          ot = !u && at ? (nt ?? (0, m.jsx)(`div`, { ref: L, "aria-hidden": !0 })) : null,
          st = T ? `${T}px` : we ? `${we}ch` : null,
          ct = st ? `minmax(0, min(${st}, 40%))` : `fit-content(40%)`;
        (0, p.useLayoutEffect)(() => {
          let e = Me.current,
            t = Ne.current;
          if (u || !e || !t) {
            Le(!1);
            return;
          }
          let n = () => {
            let n = e.clientWidth;
            if (n === 0) return;
            let r = Math.max(pe(t), T ?? 0),
              i = fe({
                availableWidth: n,
                labelWidth: r,
                minSliderWidthPx: xe,
                unitWidth: L.current?.clientWidth ?? 0,
                valueWidth: I.current?.clientWidth ?? 0,
              });
            Le((e) => (e === i ? e : i));
          };
          n();
          let r = typeof document > `u` ? void 0 : document.fonts;
          if ((r?.addEventListener(`loadingdone`, n), typeof ResizeObserver > `u`))
            return () => r?.removeEventListener(`loadingdone`, n);
          let i = new ResizeObserver(n);
          return (
            i.observe(e),
            i.observe(t),
            I.current && i.observe(I.current),
            L.current && i.observe(L.current),
            () => {
              (r?.removeEventListener(`loadingdone`, n), i.disconnect());
            }
          );
        }, [E, Te, T, xe, u, K, Se, S]);
        let Z = (e) =>
          R.current?.querySelectorAll(`[data-input-selector-discrete-menu-option]`).item(e).focus();
        (0, p.useEffect)(() => {
          if (!U || !u) return;
          let e = u.findIndex((e) => Y(e) === A);
          Z(Math.max(e, 0));
        }, [U, u, A]);
        let lt = (e, t) => {
            if (u)
              switch (e.key) {
                case `ArrowDown`:
                  (e.preventDefault(), Z((t + 1) % u.length));
                  break;
                case `ArrowUp`:
                  (e.preventDefault(), Z((t - 1 + u.length) % u.length));
                  break;
                case `Home`:
                  (e.preventDefault(), Z(0));
                  break;
                case `End`:
                  (e.preventDefault(), Z(u.length - 1));
              }
          },
          ut = u
            ? (0, m.jsx)(`div`, {
                role: `radiogroup`,
                "aria-label": q,
                className: a(
                  `flex h-6 w-full min-w-0 flex-nowrap gap-0.5 overflow-x-auto overflow-y-hidden rounded-full bg-black/7 p-0.5 dark:bg-white/6`,
                  l && `opacity-40`,
                ),
                children: u.map((e) => {
                  let t = Y(e),
                    n = t === A;
                  return (0, m.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `radio`,
                      "aria-checked": n,
                      "aria-label": e.ariaLabel,
                      disabled: l,
                      className: a(
                        `text-token-text-secondary flex h-5 min-w-max flex-1 items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]`,
                        n &&
                          `bg-token-bg-primary !text-token-text-primary shadow-sm dark:bg-white dark:!text-black`,
                        !n && !l && `hover:text-token-text-primary focus-visible:text-token-text-primary`,
                        !l &&
                          `focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
                      ),
                      onClick: () => s(t, `input`),
                      children: (0, m.jsx)(`span`, { className: `min-w-6`, children: J(e.label, d) }),
                    },
                    e.value,
                  );
                }),
              })
            : null,
          dt = u
            ? (0, m.jsxs)(`div`, {
                "data-input-selector-discrete-rail": !0,
                className: a(`relative h-6 w-full min-w-0`, V && `flex justify-end`),
                children: [
                  V && Qe
                    ? (0, m.jsxs)(m.Fragment, {
                        children: [
                          (0, m.jsxs)(`button`, {
                            type: `button`,
                            "aria-controls": Ze,
                            "aria-expanded": U,
                            "aria-haspopup": `listbox`,
                            "aria-label": Xe,
                            disabled: l,
                            "data-input-selector-discrete-menu-trigger": !0,
                            ref: z,
                            className: a(
                              `text-token-text-primary flex h-6 max-w-full min-w-0 items-center gap-1 overflow-hidden rounded-full px-2 text-[15px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]`,
                              !l &&
                                `hover:bg-black/5 focus-visible:bg-black/7 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/7 dark:focus-visible:bg-white/10`,
                            ),
                            onClick: () => W((e) => !e),
                            children: [
                              (0, m.jsx)(`span`, { className: `min-w-0 truncate`, children: J(Qe.label, d) }),
                              (0, m.jsx)(ve, {}),
                            ],
                          }),
                          U
                            ? (0, m.jsx)(`div`, {
                                ref: R,
                                "aria-label": q,
                                className: a(
                                  `border-token-border-default bg-token-bg-primary text-token-text-primary absolute end-0 z-50 flex min-w-max flex-col gap-0.5 overflow-hidden rounded-lg border p-1 shadow-lg`,
                                  Re === `above` ? `bottom-full mb-1` : `top-full mt-1`,
                                ),
                                id: Ze,
                                role: `listbox`,
                                children: u.map((e, t) => {
                                  let n = Y(e),
                                    r = n === A;
                                  return (0, m.jsx)(
                                    `button`,
                                    {
                                      type: `button`,
                                      "aria-selected": r,
                                      "data-input-selector-discrete-menu-option": !0,
                                      role: `option`,
                                      className: a(
                                        `flex min-w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-start text-[15px] leading-5 whitespace-nowrap outline-none [&_.katex]:!text-[1em]`,
                                        r && `bg-black/7 font-medium dark:bg-white/10`,
                                        !r &&
                                          `hover:bg-black/7 focus-visible:bg-black/7 dark:hover:bg-white/10 dark:focus-visible:bg-white/10`,
                                      ),
                                      onClick: () => {
                                        (s(n, `input`), W(!1), z.current?.focus());
                                      },
                                      onKeyDown: (e) => lt(e, t),
                                      children: J(e.label, d),
                                    },
                                    e.value,
                                  );
                                }),
                              })
                            : null,
                        ],
                      })
                    : ut,
                  (0, m.jsx)(`div`, {
                    ref: Fe,
                    "aria-hidden": !0,
                    "data-input-selector-overflow-measure": !0,
                    className: `pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-0`,
                    children: (0, m.jsx)(`div`, {
                      className: `flex h-6 w-max min-w-max gap-0.5 p-0.5`,
                      children: u.map((e) =>
                        (0, m.jsx)(
                          `span`,
                          {
                            className: `flex h-5 min-w-max flex-none items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap [&_.katex]:!text-[1em]`,
                            children: (0, m.jsx)(`span`, { className: `min-w-6`, children: J(e.label, d) }),
                          },
                          e.value,
                        ),
                      ),
                    }),
                  }),
                ],
              })
            : null,
          ft =
            K &&
            !u &&
            Se &&
            (0, m.jsx)(`div`, {
              ref: I,
              className: a(
                `text-token-text-primary grid h-5 min-w-8 grid-cols-1 grid-rows-1 rounded-md px-1.5 text-end text-[11px] leading-none whitespace-nowrap after:invisible after:font-mono after:whitespace-pre after:content-[attr(data-value)] after:[grid-area:1/1]`,
                Ce,
                !l &&
                  `transition-colors focus-within:bg-black/7 hover:bg-black/5 dark:focus-within:bg-white/10 dark:hover:bg-white/7`,
              ),
              "data-value": `0`.repeat(We),
              children: (0, m.jsx)(`input`, {
                "aria-label": q,
                className: `relative h-full min-w-[4ch] border-none bg-transparent p-0 text-end text-[11px] leading-none whitespace-nowrap shadow-[none] outline-none [grid-area:1/1] focus:outline-none`,
                disabled: l,
                inputMode: `decimal`,
                name: qe,
                size: 1,
                type: `text`,
                value: He,
                onBlur: () => {
                  if (P.current) {
                    P.current = !1;
                    return;
                  }
                  (N(!1), $e(ke));
                },
                onChange: (e) => M(e.currentTarget.value),
                onFocus: () => {
                  (N(!0), M(v(j, i, k)));
                },
                onKeyDown: et,
              }),
            }),
          Q = [];
        H
          ? (K && Q.push(`minmax(0, 1fr)`), ft && Q.push(it), ot && Q.push(X))
          : (K && Q.push(ct), ft && Q.push(it), ot && Q.push(X), Q.push(`minmax(0, 1fr)`));
        let $ = [];
        (K && $.push(ct), rt && $.push(it), at && $.push(X), $.push(`minmax(0, 1fr)`));
        let pt = `${$.length} / ${$.length + 1}`,
          mt = K ? `2 / -1` : `1 / -1`,
          ht =
            Number.isFinite(e) && Number.isFinite(n) && Number.isFinite(i) && i > 0 && n >= e
              ? Math.max(0, Math.round((n - e) / i))
              : 0,
          gt = Math.min(ht + 1, 12),
          _t = f === `stepped` && ht > 0 ? Array.from({ length: gt }, (e, t) => t) : [],
          vt = f === `stepped` ? `h-6 w-6` : `h-5 w-5`,
          yt = `relative flex h-6 w-full min-w-0 flex-1 items-center rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]`,
          bt =
            _t.length > 0
              ? (0, m.jsx)(`div`, {
                  "aria-hidden": !0,
                  "data-input-selector-rendered-marker-count": _t.length,
                  className: `pointer-events-none absolute inset-x-4 top-1/2 z-0 flex -translate-y-1/2 justify-between`,
                  children: _t.map((e) =>
                    (0, m.jsx)(
                      `span`,
                      {
                        "data-input-selector-step-marker": !0,
                        className: `h-[3px] w-[3px] rounded-full bg-black/20 dark:bg-white/20`,
                      },
                      e,
                    ),
                  ),
                })
              : null,
          xt = D
            ? (0, m.jsxs)(`div`, {
                "data-input-selector-slider": !0,
                "data-input-selector-slider-style": f,
                className: a(yt, l && `opacity-40`),
                children: [
                  bt,
                  (0, m.jsx)(`input`, {
                    "aria-label": q,
                    "aria-valuetext": g ?? k(j, i),
                    type: `range`,
                    className: a(
                      se.inputSelector,
                      f === `stepped` && se.inputSelectorStepped,
                      `text-token-text-primary relative z-10 flex w-full min-w-0 flex-1 items-center`,
                    ),
                    disabled: l,
                    max: n,
                    min: e,
                    step: i,
                    value: A,
                    onBlur: () => G(`blur`),
                    onChange: (t) => {
                      (Be(), s(_(t.currentTarget.valueAsNumber, e, n, i), `slider`));
                    },
                    onPointerDown: Ve,
                  }),
                ],
              })
            : (0, m.jsxs)(t, {
                "data-input-selector-slider": !0,
                "data-input-selector-slider-style": f,
                className: a(yt, `touch-pan-y`, l && `opacity-40`),
                disabled: l,
                max: n,
                min: e,
                onBlurCapture: () => G(`blur`),
                onPointerDownCapture: Ve,
                step: i,
                value: [A],
                onValueChange: (t) => {
                  (Be(), s(_(t[0], e, n, i), `slider`));
                },
                children: [
                  (0, m.jsx)(ee, {
                    className: `absolute inset-0 rounded-full`,
                    children: (0, m.jsx)(te, { className: `absolute inset-y-0 rounded-full bg-transparent` }),
                  }),
                  bt,
                  (0, m.jsx)(r, {
                    "aria-label": q,
                    "aria-valuetext": g ?? k(j, i),
                    className: a(
                      `border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative block cursor-pointer rounded-full border shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white`,
                      vt,
                    ),
                  }),
                ],
              });
        return u
          ? (0, m.jsxs)(`div`, {
              className: `grid h-full min-w-0 items-center gap-x-3`,
              style: { gridTemplateColumns: $.join(` `) },
              children: [
                tt,
                !V && rt ? (0, m.jsx)(`div`, { "aria-hidden": !0 }) : null,
                !V && at ? (0, m.jsx)(`div`, { "aria-hidden": !0 }) : null,
                (0, m.jsx)(`div`, {
                  className: `h-full min-w-0`,
                  style: { gridColumn: V ? mt : pt, gridRow: 1 },
                  children: dt,
                }),
                (0, m.jsx)(`div`, {
                  ref: Pe,
                  "aria-hidden": !0,
                  "data-input-selector-discrete-width-measure": !0,
                  className: `pointer-events-none h-0 min-w-0 opacity-0`,
                  style: { gridColumn: pt, gridRow: 1 },
                }),
              ],
            })
          : (0, m.jsxs)(`div`, {
              ref: Me,
              className: a(`relative grid min-w-0 items-center gap-x-3`, H && `gap-y-2`),
              style: { gridTemplateColumns: Q.join(` `) },
              children: [
                tt,
                ft,
                ot,
                (0, m.jsx)(`div`, {
                  className: `min-w-0`,
                  style: H ? { gridColumn: `1 / -1` } : void 0,
                  children: xt,
                }),
                K
                  ? (0, m.jsx)(`div`, {
                      ref: Ne,
                      "aria-hidden": !0,
                      "data-input-selector-label-measure": !0,
                      className: a(
                        `pointer-events-none absolute inset-0 h-0 w-max max-w-none overflow-hidden text-sm leading-5 whitespace-nowrap opacity-0 [&_.katex]:!text-[1em]`,
                        Ke && `font-medium`,
                      ),
                      children: Je ? (0, m.jsx)(ie, { className: `katex`, latex: K ?? `` }) : K,
                    })
                  : null,
              ],
            });
      }));
  }))();
}
export { pe as a, v as i, _e as n, w as o, S as r, C as t };
//# sourceMappingURL=input-selector-18dc5f761512.js.map
