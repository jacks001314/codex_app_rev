import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  COt as t,
  SOt as n,
  TOt as r,
  VDt as i,
  _Mt as a,
  gMt as o,
  jDt as s,
  wOt as ee,
  xMt as te,
  xOt as ne,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import { n as l, t as re } from "./learning-block-katex-a2f6a6b5a485.js";
import { a as ie, d as u, g as d, i as f, n as ae, u as p } from "./format-number-input-b026fe0339b2.js";
import { n as oe, t as se } from "./input-selector.module-cea85c295665.js";
var m, h, g, _, v, ce, y, le, b, x, ue, de, fe, pe, me, he, ge, S, _e, ve, ye, C;
function w() {
  return (w = e(() => {
    (r(),
      a(),
      (m = c()),
      s(),
      f(),
      l(),
      u(),
      se(),
      (h = te()),
      (g = (e, t, n) => Math.min(Math.max(e, t), n)),
      (_ =
        /[+\-−]?(?:\p{Nd}+(?:[.,\u066b\u066c\u00a0\u202f]\p{Nd}+)*|[.,\u066b]\p{Nd}+)(?:e[+\-−]?\p{Nd}+)?/iu),
      (v = (e, t, n, r) => {
        if (!Number.isFinite(e)) return t;
        let i = g(e, t, n),
          a = t + Math.round((i - t) / r) * r,
          o = p(r),
          s = d(a, Math.max(1, o));
        return g(s, t, n);
      }),
      (ce = (e, { max: t, min: n, normalizeCommittedValue: r, step: i }) => (r ? r(e) : v(e, n, t, i))),
      (y = (e, t, n) => {
        let r = n(e, t);
        return r.match(_)?.[0] ?? r;
      }),
      (le = (e, t, n, r) => Math.max(y(e, n, r).length, y(t, n, r).length)),
      (b = 1),
      (x = 4),
      (ue = 12),
      (de = (e, t) => e > t + b),
      (fe = ({ availableWidth: e, labelWidth: t, minSliderWidthPx: n = 96, unitWidth: r, valueWidth: i }) => {
        let a = 2 + Number(i > 0) + Number(r > 0);
        return t + i + r + (a - 1) * ue + n > e + b;
      }),
      (pe = (e) => Math.ceil(e.getBoundingClientRect().width)),
      (me = ({ boundary: e, menuHeight: t, trigger: n }) => {
        let r = e.bottom - n.bottom - x;
        if (t <= r) return `below`;
        let i = n.top - e.top - x;
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
      (_e = (0, m.createContext)({ isNativeSlider: !1 })),
      (ve = () =>
        (0, h.jsx)(`svg`, {
          "aria-hidden": !0,
          className: `h-4 w-4 flex-none`,
          fill: `none`,
          viewBox: `0 0 16 16`,
          children: (0, h.jsx)(`path`, {
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
        max: r,
        step: a,
        value: s,
        displayValue: te,
        onChange: c,
        onActiveChange: l,
        disabled: u,
        options: d,
        optionLabelFormat: f = `text`,
        sliderStyle: p = `continuous`,
        ariaLabel: se,
        ariaValueText: _,
        variable: b,
        variableBold: x,
        variableFormat: ue,
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
          } = (0, m.useContext)(_e),
          O = i(),
          k = C ?? ((e, t) => ae(O, e, t)),
          Oe = w ?? ((e) => ie(O, e)),
          A = v(s, e, r, a),
          j = Number.isFinite(te) ? te : !d && Number.isFinite(s) ? g(s, e, r) : A,
          [ke, M] = (0, m.useState)(() => y(j, a, k)),
          [Ae, N] = (0, m.useState)(!1),
          P = (0, m.useRef)(!1),
          F = (0, m.useRef)(!1),
          I = (0, m.useRef)(!1),
          je = (0, m.useRef)(null),
          Me = (0, m.useRef)(null),
          L = (0, m.useRef)(null),
          R = (0, m.useRef)(null),
          Ne = (0, m.useRef)(null),
          Pe = (0, m.useRef)(null),
          z = (0, m.useRef)(null),
          B = (0, m.useRef)(null),
          V = (0, m.useRef)(!1),
          [H, Fe] = (0, m.useState)(!1),
          [U, Ie] = (0, m.useState)(!1),
          [W, G] = (0, m.useState)(!1),
          [Le, Re] = (0, m.useState)(D ? `above` : `below`),
          ze = (e = `blur`) => {
            (e === `blur` && I.current) || (F.current && ((F.current = !1), l?.(!1), Ee?.()));
          },
          Be = () => {
            F.current || ((F.current = !0), l?.(!0), De?.(b));
          },
          Ve = () => {
            ((I.current = !0), Be());
          };
        ((0, m.useEffect)(() => {
          let e = () => {
            ((I.current = !1), ze(`pointer-end`));
          };
          return (
            window.addEventListener(`pointerup`, e),
            window.addEventListener(`pointercancel`, e),
            () => {
              (window.removeEventListener(`pointerup`, e), window.removeEventListener(`pointercancel`, e));
            }
          );
        }, [l, Ee]),
          (0, m.useLayoutEffect)(() => {
            let e = Ne.current,
              t = Pe.current;
            if (!d || !e || !t) {
              Fe(!1);
              return;
            }
            let n = () => {
              let n = e.clientWidth,
                r = de(t.scrollWidth, n);
              Fe((e) => (e === r ? e : r));
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
          }, [d, f]),
          (0, m.useEffect)(() => {
            let e = (e) => {
              e.key === `Escape` && V.current && ((V.current = !1), e.preventDefault(), e.stopPropagation());
            };
            return (
              document.addEventListener(`keyup`, e, !0),
              () => document.removeEventListener(`keyup`, e, !0)
            );
          }, []),
          (0, m.useEffect)(() => {
            if (!W) return;
            V.current = !1;
            let e = (e) => {
                let t = e.target;
                t instanceof Node && (z.current?.contains(t) || B.current?.contains(t) || G(!1));
              },
              t = (e) => {
                e.key === `Escape` &&
                  ((V.current = !0), e.preventDefault(), e.stopPropagation(), G(!1), B.current?.focus());
              };
            return (
              document.addEventListener(`pointerdown`, e),
              document.addEventListener(`keydown`, t, !0),
              () => {
                (document.removeEventListener(`pointerdown`, e),
                  document.removeEventListener(`keydown`, t, !0));
              }
            );
          }, [W]),
          (0, m.useEffect)(() => {
            (!H || u) && G(!1);
          }, [u, H]),
          (0, m.useLayoutEffect)(() => {
            if (!W) {
              Re(D ? `above` : `below`);
              return;
            }
            let e = z.current,
              t = B.current;
            if (!e || !t) return;
            let n = () => {
              Re(
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
          }, [W, D]));
        let He = Ae ? ke : y(j, a, k),
          Ue = le(e, r, a, k),
          We = Te ?? Ue,
          K = b,
          Ge = ue,
          Ke = x ?? !1,
          qe = K ? K.replace(/[^\w-]+/g, `_`) : `input-selector-value`,
          q =
            se ??
            (K
              ? O.formatMessage(
                  { id: `learningBlock.inputSelector.valueAriaLabel`, defaultMessage: `{label} value` },
                  { label: K },
                )
              : void 0),
          Je = ye(K, Ge),
          Ye = d?.find((t) => v(t.value, e, r, a) === A) ?? d?.[0],
          Xe = H
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
          Ze = (0, m.useId)(),
          J = (e, t) => (t === `katex` ? (0, h.jsx)(re, { className: `katex`, latex: e }) : e),
          Y = (t) => v(t.value, e, r, a),
          Qe = d?.find((e) => Y(e) === A) ?? d?.[0],
          $e = (t) => {
            let n = Oe(t);
            if (!Number.isFinite(n)) {
              M(y(j, a, k));
              return;
            }
            let i = ce(n, { min: e, max: r, step: a, normalizeCommittedValue: be });
            (c(i, `input`), M(y(i, a, k)));
          },
          et = (e) => {
            if (e.key === `Enter`) {
              (e.preventDefault(), (P.current = !0), N(!1), $e(ke), e.currentTarget.blur());
              return;
            }
            e.key === `Escape` &&
              (e.preventDefault(), (P.current = !0), N(!1), M(y(j, a, k)), e.currentTarget.blur());
          },
          tt = K
            ? (0, h.jsx)(`div`, {
                "data-input-selector-variable": !0,
                "data-input-selector-label-layout": U ? `stacked` : `inline`,
                className: o(
                  `text-token-text-primary min-w-0 max-w-full justify-self-start text-sm leading-5 whitespace-normal hyphens-auto [overflow-wrap:anywhere] [&_.katex]:!text-[1em]`,
                  Ke && `font-medium`,
                ),
                children: Je ? (0, h.jsx)(re, { className: `katex`, latex: K ?? `` }) : K,
              })
            : null,
          nt = S
            ? (0, h.jsx)(`div`, {
                ref: R,
                className: `text-token-text-secondary -ms-3 shrink-0 text-xs leading-4 whitespace-nowrap [&_.katex]:text-inherit`,
                children: S,
              })
            : null,
          rt = !!Te,
          it = `minmax(max(${We}ch,2rem), max(${We}ch,2rem))`,
          at = !!E,
          X = `minmax(${E ?? 0}ch, ${E ?? 0}ch)`,
          ot = !d && at ? (nt ?? (0, h.jsx)(`div`, { ref: R, "aria-hidden": !0 })) : null,
          st = T ? `${T}px` : we ? `${we}ch` : null,
          ct = st ? `minmax(0, min(${st}, 40%))` : `fit-content(40%)`;
        (0, m.useLayoutEffect)(() => {
          let e = je.current,
            t = Me.current;
          if (d || !e || !t) {
            Ie(!1);
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
                unitWidth: R.current?.clientWidth ?? 0,
                valueWidth: L.current?.clientWidth ?? 0,
              });
            Ie((e) => (e === i ? e : i));
          };
          n();
          let r = typeof document > `u` ? void 0 : document.fonts;
          if ((r?.addEventListener(`loadingdone`, n), typeof ResizeObserver > `u`))
            return () => r?.removeEventListener(`loadingdone`, n);
          let i = new ResizeObserver(n);
          return (
            i.observe(e),
            i.observe(t),
            L.current && i.observe(L.current),
            R.current && i.observe(R.current),
            () => {
              (r?.removeEventListener(`loadingdone`, n), i.disconnect());
            }
          );
        }, [E, Te, T, xe, d, K, Se, S]);
        let Z = (e) =>
          z.current?.querySelectorAll(`[data-input-selector-discrete-menu-option]`).item(e).focus();
        (0, m.useEffect)(() => {
          if (!W || !d) return;
          let e = d.findIndex((e) => Y(e) === A);
          Z(Math.max(e, 0));
        }, [W, d, A]);
        let lt = (e, t) => {
            if (d)
              switch (e.key) {
                case `ArrowDown`:
                  (e.preventDefault(), Z((t + 1) % d.length));
                  break;
                case `ArrowUp`:
                  (e.preventDefault(), Z((t - 1 + d.length) % d.length));
                  break;
                case `Home`:
                  (e.preventDefault(), Z(0));
                  break;
                case `End`:
                  (e.preventDefault(), Z(d.length - 1));
              }
          },
          ut = d
            ? (0, h.jsx)(`div`, {
                role: `radiogroup`,
                "aria-label": q,
                className: o(
                  `flex h-6 w-full min-w-0 flex-nowrap gap-0.5 overflow-x-auto overflow-y-hidden rounded-full bg-black/7 p-0.5 dark:bg-white/6`,
                  u && `opacity-40`,
                ),
                children: d.map((e) => {
                  let t = Y(e),
                    n = t === A;
                  return (0, h.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `radio`,
                      "aria-checked": n,
                      "aria-label": e.ariaLabel,
                      disabled: u,
                      className: o(
                        `text-token-text-secondary flex h-5 min-w-max flex-1 items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]`,
                        n &&
                          `bg-token-bg-primary !text-token-text-primary shadow-sm dark:bg-white dark:!text-black`,
                        !n && !u && `hover:text-token-text-primary focus-visible:text-token-text-primary`,
                        !u &&
                          `focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
                      ),
                      onClick: () => c(t, `input`),
                      children: (0, h.jsx)(`span`, { className: `min-w-6`, children: J(e.label, f) }),
                    },
                    e.value,
                  );
                }),
              })
            : null,
          dt = d
            ? (0, h.jsxs)(`div`, {
                "data-input-selector-discrete-rail": !0,
                className: o(`relative h-6 w-full min-w-0`, H && `flex justify-end`),
                children: [
                  H && Qe
                    ? (0, h.jsxs)(h.Fragment, {
                        children: [
                          (0, h.jsxs)(`button`, {
                            type: `button`,
                            "aria-controls": Ze,
                            "aria-expanded": W,
                            "aria-haspopup": `listbox`,
                            "aria-label": Xe,
                            disabled: u,
                            "data-input-selector-discrete-menu-trigger": !0,
                            ref: B,
                            className: o(
                              `text-token-text-primary flex h-6 max-w-full min-w-0 items-center gap-1 overflow-hidden rounded-full px-2 text-[15px] leading-5 whitespace-nowrap transition-colors [&_.katex]:!text-[1em]`,
                              !u &&
                                `hover:bg-black/5 focus-visible:bg-black/7 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/7 dark:focus-visible:bg-white/10`,
                            ),
                            onClick: () => G((e) => !e),
                            children: [
                              (0, h.jsx)(`span`, { className: `min-w-0 truncate`, children: J(Qe.label, f) }),
                              (0, h.jsx)(ve, {}),
                            ],
                          }),
                          W
                            ? (0, h.jsx)(`div`, {
                                ref: z,
                                "aria-label": q,
                                className: o(
                                  `border-token-border-default bg-token-bg-primary text-token-text-primary absolute end-0 z-50 flex min-w-max flex-col gap-0.5 overflow-hidden rounded-lg border p-1 shadow-lg`,
                                  Le === `above` ? `bottom-full mb-1` : `top-full mt-1`,
                                ),
                                id: Ze,
                                role: `listbox`,
                                children: d.map((e, t) => {
                                  let n = Y(e),
                                    r = n === A;
                                  return (0, h.jsx)(
                                    `button`,
                                    {
                                      type: `button`,
                                      "aria-selected": r,
                                      "data-input-selector-discrete-menu-option": !0,
                                      role: `option`,
                                      className: o(
                                        `flex min-w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-start text-[15px] leading-5 whitespace-nowrap outline-none [&_.katex]:!text-[1em]`,
                                        r && `bg-black/7 font-medium dark:bg-white/10`,
                                        !r &&
                                          `hover:bg-black/7 focus-visible:bg-black/7 dark:hover:bg-white/10 dark:focus-visible:bg-white/10`,
                                      ),
                                      onClick: () => {
                                        (c(n, `input`), G(!1), B.current?.focus());
                                      },
                                      onKeyDown: (e) => lt(e, t),
                                      children: J(e.label, f),
                                    },
                                    e.value,
                                  );
                                }),
                              })
                            : null,
                        ],
                      })
                    : ut,
                  (0, h.jsx)(`div`, {
                    ref: Pe,
                    "aria-hidden": !0,
                    "data-input-selector-overflow-measure": !0,
                    className: `pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-0`,
                    children: (0, h.jsx)(`div`, {
                      className: `flex h-6 w-max min-w-max gap-0.5 p-0.5`,
                      children: d.map((e) =>
                        (0, h.jsx)(
                          `span`,
                          {
                            className: `flex h-5 min-w-max flex-none items-center justify-center rounded-full px-2 text-[13px] leading-5 whitespace-nowrap [&_.katex]:!text-[1em]`,
                            children: (0, h.jsx)(`span`, { className: `min-w-6`, children: J(e.label, f) }),
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
            !d &&
            Se &&
            (0, h.jsx)(`div`, {
              ref: L,
              className: o(
                `text-token-text-primary grid h-5 min-w-8 grid-cols-1 grid-rows-1 rounded-md px-1.5 text-end text-[11px] leading-none whitespace-nowrap after:invisible after:font-mono after:whitespace-pre after:content-[attr(data-value)] after:[grid-area:1/1]`,
                Ce,
                !u &&
                  `transition-colors focus-within:bg-black/7 hover:bg-black/5 dark:focus-within:bg-white/10 dark:hover:bg-white/7`,
              ),
              "data-value": `0`.repeat(We),
              children: (0, h.jsx)(`input`, {
                "aria-label": q,
                className: `relative h-full min-w-[4ch] border-none bg-transparent p-0 text-end text-[11px] leading-none whitespace-nowrap shadow-[none] outline-none [grid-area:1/1] focus:outline-none`,
                disabled: u,
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
                  (N(!0), M(y(j, a, k)));
                },
                onKeyDown: et,
              }),
            }),
          Q = [];
        U
          ? (K && Q.push(`minmax(0, 1fr)`), ft && Q.push(it), ot && Q.push(X))
          : (K && Q.push(ct), ft && Q.push(it), ot && Q.push(X), Q.push(`minmax(0, 1fr)`));
        let $ = [];
        (K && $.push(ct), rt && $.push(it), at && $.push(X), $.push(`minmax(0, 1fr)`));
        let pt = `${$.length} / ${$.length + 1}`,
          mt = K ? `2 / -1` : `1 / -1`,
          ht =
            Number.isFinite(e) && Number.isFinite(r) && Number.isFinite(a) && a > 0 && r >= e
              ? Math.max(0, Math.round((r - e) / a))
              : 0,
          gt = Math.min(ht + 1, 12),
          _t = p === `stepped` && ht > 0 ? Array.from({ length: gt }, (e, t) => t) : [],
          vt = p === `stepped` ? `h-6 w-6` : `h-5 w-5`,
          yt = `relative flex h-6 w-full min-w-0 flex-1 items-center rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]`,
          bt =
            _t.length > 0
              ? (0, h.jsx)(`div`, {
                  "aria-hidden": !0,
                  "data-input-selector-rendered-marker-count": _t.length,
                  className: `pointer-events-none absolute inset-x-4 top-1/2 z-0 flex -translate-y-1/2 justify-between`,
                  children: _t.map((e) =>
                    (0, h.jsx)(
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
            ? (0, h.jsxs)(`div`, {
                "data-input-selector-slider": !0,
                "data-input-selector-slider-style": p,
                className: o(yt, u && `opacity-40`),
                children: [
                  bt,
                  (0, h.jsx)(`input`, {
                    "aria-label": q,
                    "aria-valuetext": _ ?? k(j, a),
                    type: `range`,
                    className: o(
                      oe.inputSelector,
                      p === `stepped` && oe.inputSelectorStepped,
                      `text-token-text-primary relative z-10 flex w-full min-w-0 flex-1 items-center`,
                    ),
                    disabled: u,
                    max: r,
                    min: e,
                    step: a,
                    value: A,
                    onBlur: () => ze(`blur`),
                    onChange: (t) => {
                      (Be(), c(v(t.currentTarget.valueAsNumber, e, r, a), `slider`));
                    },
                    onPointerDown: Ve,
                  }),
                ],
              })
            : (0, h.jsxs)(ne, {
                "data-input-selector-slider": !0,
                "data-input-selector-slider-style": p,
                className: o(yt, `touch-pan-y`, u && `opacity-40`),
                disabled: u,
                max: r,
                min: e,
                onBlurCapture: () => ze(`blur`),
                onPointerDownCapture: Ve,
                step: a,
                value: [A],
                onValueChange: (t) => {
                  (Be(), c(v(t[0], e, r, a), `slider`));
                },
                children: [
                  (0, h.jsx)(ee, {
                    className: `absolute inset-0 rounded-full`,
                    children: (0, h.jsx)(n, { className: `absolute inset-y-0 rounded-full bg-transparent` }),
                  }),
                  bt,
                  (0, h.jsx)(t, {
                    "aria-label": q,
                    "aria-valuetext": _ ?? k(j, a),
                    className: o(
                      `border-token-border-default bg-token-bg-primary hover:border-token-border-heavy relative block cursor-pointer rounded-full border shadow-sm transition-transform after:absolute after:-inset-1 after:content-[''] hover:scale-105 focus-visible:outline-token-border-heavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none dark:bg-white`,
                      vt,
                    ),
                  }),
                ],
              });
        return d
          ? (0, h.jsxs)(`div`, {
              className: `grid h-full min-w-0 items-center gap-x-3`,
              style: { gridTemplateColumns: $.join(` `) },
              children: [
                tt,
                !H && rt ? (0, h.jsx)(`div`, { "aria-hidden": !0 }) : null,
                !H && at ? (0, h.jsx)(`div`, { "aria-hidden": !0 }) : null,
                (0, h.jsx)(`div`, {
                  className: `h-full min-w-0`,
                  style: { gridColumn: H ? mt : pt, gridRow: 1 },
                  children: dt,
                }),
                (0, h.jsx)(`div`, {
                  ref: Ne,
                  "aria-hidden": !0,
                  "data-input-selector-discrete-width-measure": !0,
                  className: `pointer-events-none h-0 min-w-0 opacity-0`,
                  style: { gridColumn: pt, gridRow: 1 },
                }),
              ],
            })
          : (0, h.jsxs)(`div`, {
              ref: je,
              className: o(`relative grid min-w-0 items-center gap-x-3`, U && `gap-y-2`),
              style: { gridTemplateColumns: Q.join(` `) },
              children: [
                tt,
                ft,
                ot,
                (0, h.jsx)(`div`, {
                  className: `min-w-0`,
                  style: U ? { gridColumn: `1 / -1` } : void 0,
                  children: xt,
                }),
                K
                  ? (0, h.jsx)(`div`, {
                      ref: Me,
                      "aria-hidden": !0,
                      "data-input-selector-label-measure": !0,
                      className: o(
                        `pointer-events-none absolute inset-0 h-0 w-max max-w-none overflow-hidden text-sm leading-5 whitespace-nowrap opacity-0 [&_.katex]:!text-[1em]`,
                        Ke && `font-medium`,
                      ),
                      children: Je ? (0, h.jsx)(re, { className: `katex`, latex: K ?? `` }) : K,
                    })
                  : null,
              ],
            });
      }));
  }))();
}
export { pe as a, y as i, _e as n, w as o, S as r, C as t };
//# sourceMappingURL=input-selector-493983ca2b15.js.map
