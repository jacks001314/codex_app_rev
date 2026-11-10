import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Qpn as r,
  Rpn as i,
  Upn as a,
  Vpn as o,
  emn as s,
  hmn as c,
  imn as l,
  lmn as u,
  omn as d,
  smn as f,
  zpn as p,
} from "./app-initial-f094ef01c64d.js";
import {
  $t as m,
  A as h,
  Er as g,
  N as _,
  Qn as v,
  Yn as y,
  dn as b,
  dr as x,
  er as S,
  gr as C,
  h as w,
  j as T,
  nr as E,
  rn as D,
  xr as O,
} from "./presentation-a54016a6a2f7.js";
import {
  $ as k,
  $t as A,
  A as j,
  At as M,
  B as ee,
  C as te,
  Ct as ne,
  D as N,
  Dt as re,
  E as ie,
  Et as ae,
  F as P,
  Ft as oe,
  G as se,
  Gt as ce,
  H as F,
  I,
  It as L,
  Jt as R,
  K as z,
  Kt as B,
  L as le,
  Lt as ue,
  M as de,
  Mt as fe,
  N as pe,
  Nt as me,
  O as V,
  Ot as he,
  P as H,
  Pt as ge,
  Qt as _e,
  R as ve,
  Rt as ye,
  S as be,
  St as xe,
  T as Se,
  Tt as Ce,
  U as we,
  V as Te,
  W as Ee,
  Wt as U,
  Xt as De,
  Yt as Oe,
  Zt as ke,
  _ as Ae,
  _t as je,
  b as Me,
  bt as Ne,
  ct as Pe,
  d as Fe,
  dt as Ie,
  en as W,
  et as Le,
  f as Re,
  ft as ze,
  g as Be,
  gt as Ve,
  h as He,
  ht as Ue,
  it as We,
  j as Ge,
  jt as Ke,
  k as qe,
  kt as Je,
  lt as Ye,
  m as Xe,
  mt as Ze,
  nt as Qe,
  p as $e,
  pt as et,
  q as tt,
  qt as nt,
  rt,
  st as it,
  tn as at,
  tt as ot,
  ut as st,
  v as ct,
  vt as lt,
  w as ut,
  wt as dt,
  x as ft,
  xt as pt,
  yt as mt,
  z as ht,
  zt as gt,
} from "./workbook-92b6031c5f2c.js";
import {
  A as _t,
  C as vt,
  D as yt,
  E as bt,
  M as xt,
  O as St,
  S as Ct,
  T as wt,
  U as Tt,
  W as Et,
  Z as Dt,
  _ as Ot,
  a as kt,
  b as At,
  c as jt,
  d as Mt,
  g as Nt,
  h as Pt,
  i as Ft,
  j as It,
  k as Lt,
  l as Rt,
  lt as zt,
  m as Bt,
  n as Vt,
  o as Ht,
  p as Ut,
  r as Wt,
  t as Gt,
  u as Kt,
  v as qt,
  w as Jt,
  x as Yt,
  y as Xt,
} from "./artifact-source-bootstrap-b7ba40702025.js";
import { a as Zt, n as Qt, o as $t, t as en } from "./PopcornChartHoverTooltip-adcf79d91386.js";
import { n as tn, t as nn } from "./PopcornPageNumberNavigation-a4529764704f.js";
import { C as rn, o as an, w as on } from "./document-8592358b88eb.js";
import {
  a as sn,
  i as cn,
  n as ln,
  o as un,
  p as dn,
  r as fn,
  s as pn,
  u as mn,
} from "./drawing-frame-geometry-edc4f489bcf8.js";
function hn({
  artifactLabel: e,
  title: t,
  className: n,
  header: r,
  toolbar: a,
  sidebar: o,
  footer: s,
  children: c,
}) {
  return (0, gn.jsxs)(`div`, {
    className: i(
      `bg-token-bg-primary text-token-text-primary relative isolate flex h-full min-h-0 flex-col`,
      n,
    ),
    children: [
      r ??
        (0, gn.jsxs)(`header`, {
          className: `border-token-border-light flex items-center justify-between border-b px-4 py-3`,
          children: [
            (0, gn.jsxs)(`div`, {
              className: `min-w-0`,
              children: [
                (0, gn.jsx)(`div`, {
                  className: `text-token-text-tertiary text-xs font-medium uppercase tracking-[0.12em]`,
                  children: e,
                }),
                (0, gn.jsx)(`div`, { className: `truncate text-sm font-semibold`, children: t }),
              ],
            }),
            a
              ? (0, gn.jsx)(`div`, {
                  className: `ms-4 flex shrink-0 items-center gap-2`,
                  children: a,
                })
              : null,
          ],
        }),
      (0, gn.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 overflow-hidden`,
        children: [
          o
            ? (0, gn.jsx)(`aside`, {
                className: `border-token-border-light bg-token-bg-secondary min-h-0 w-[240px] shrink-0 overflow-auto border-e`,
                children: o,
              })
            : null,
          (0, gn.jsx)(`div`, { className: `min-h-0 min-w-0 flex-1`, children: c }),
        ],
      }),
      s
        ? (0, gn.jsx)(`footer`, {
            className: `border-token-border-light bg-token-bg-secondary border-t`,
            children: s,
          })
        : null,
    ],
  });
}
var gn,
  _n = e(() => {
    (p(), (gn = c()));
  });
function vn({ onClick: e }) {
  return (0, yn.jsxs)(`button`, {
    type: `button`,
    onClick: e,
    className: `border-token-border-light text-token-text-primary hover:bg-token-bg-tertiary inline-flex h-8 items-center gap-1 rounded-full border px-3 text-sm font-medium`,
    "data-testid": `popcorn-focused-back`,
    children: [(0, yn.jsx)(Et, { className: `size-4` }), `Back`],
  });
}
var yn,
  bn = e(() => {
    (zt(), (yn = c()));
  });
function xn(e) {
  let [t, n] = (0, Sn.useState)({ width: 0, height: 0 });
  return (
    (0, Sn.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let r = () => {
        let e = t.getBoundingClientRect(),
          r = {
            width: Math.max(0, Math.round(e.width)),
            height: Math.max(0, Math.round(e.height)),
          };
        n((e) => (e.width === r.width && e.height === r.height ? e : r));
      };
      r();
      let i = new ResizeObserver(r);
      return (
        i.observe(t),
        () => {
          i.disconnect();
        }
      );
    }),
    t
  );
}
var Sn,
  Cn = e(() => {
    Sn = t(n());
  }),
  wn,
  Tn = e(() => {
    wn = [`line`, `area`, `bar`, `scatter`, `pie`, `doughnut`];
  }),
  En = e(() => {});
function Dn(e, t) {
  let n = (0, Pn.useRef)(null),
    r = (0, Pn.useRef)(null),
    i = (0, Pn.useRef)(e),
    [a, o] = (0, Pn.useState)(e),
    [s, c] = (0, Pn.useState)(`opening`);
  (0, Pn.useEffect)(() => {
    i.current = e;
  }, [e]);
  function l() {
    return Array.from(
      r.current?.querySelectorAll(`[role="menuitem"], [role="menuitemradio"], .chart-option`) ?? [],
    ).filter((e) => !e.disabled);
  }
  function u(e) {
    window.requestAnimationFrame(() => {
      let t = l();
      t.length &&
        t[
          e === `first` ? 0 : e === `last` ? t.length - 1 : Math.max(0, Math.min(t.length - 1, e))
        ]?.focus();
    });
  }
  function d() {
    (o(!0), c(`opening`), t(!0));
  }
  function f() {
    t(!1);
  }
  function p() {
    let e = !i.current;
    return (e ? d() : f(), e);
  }
  ((0, Pn.useEffect)(() => {
    if (e) {
      (o(!0), c(`opening`));
      return;
    }
    if (!a) return;
    c(`closing`);
    let t = window.setTimeout(() => {
      o(!1);
    }, Fn);
    return () => {
      window.clearTimeout(t);
    };
  }, [e, a]),
    (0, Pn.useEffect)(() => {
      if (!e) return;
      function t(e) {
        let t = e.target;
        t instanceof Node && !r.current?.contains(t) && !n.current?.contains(t) && f();
      }
      function i(e) {
        e.key === `Escape` && (f(), n.current?.focus());
      }
      return (
        document.addEventListener(`pointerdown`, t),
        document.addEventListener(`keydown`, i),
        () => {
          (document.removeEventListener(`pointerdown`, t),
            document.removeEventListener(`keydown`, i));
        }
      );
    }, [e, t]));
  function m(e) {
    (e.key === `ArrowDown` || e.key === `ArrowUp`) &&
      (e.preventDefault(), d(), u(e.key === `ArrowDown` ? `first` : `last`));
  }
  function h(e) {
    if (
      e.key !== `ArrowDown` &&
      e.key !== `ArrowUp` &&
      e.key !== `Home` &&
      e.key !== `End` &&
      e.key !== `Escape`
    )
      return;
    if ((e.preventDefault(), e.key === `Escape`)) {
      (f(), n.current?.focus());
      return;
    }
    let t = l();
    if (!t.length) return;
    let r = t.findIndex((e) => e === document.activeElement);
    if (e.key === `Home`) {
      u(`first`);
      return;
    }
    if (e.key === `End`) {
      u(`last`);
      return;
    }
    let i = e.key === `ArrowDown` ? 1 : -1;
    u(r === -1 ? (e.key === `ArrowDown` ? 0 : t.length - 1) : (r + i + t.length) % t.length);
  }
  return {
    closeMenu: f,
    handleMenuButtonKeyDown: m,
    handleMenuKeyDown: h,
    menuButtonRef: n,
    menuMotionClass: s,
    menuRef: r,
    shouldRenderMenu: a,
    toggleMenu: p,
  };
}
function On({
  disabled: e,
  label: t = `Chart type`,
  onChange: n,
  options: r,
  testId: i,
  value: a,
}) {
  let [o, s] = (0, Pn.useState)(!1),
    {
      closeMenu: c,
      handleMenuButtonKeyDown: l,
      handleMenuKeyDown: u,
      menuButtonRef: d,
      menuMotionClass: f,
      menuRef: p,
      shouldRenderMenu: m,
      toggleMenu: h,
    } = Dn(o, s),
    g = r.find((e) => e.value === a) ?? r[0],
    _ = (0, Pn.useMemo)(() => Mn(r), [r]);
  return (0, G.jsxs)(`div`, {
    className: `chart-picker`,
    ref: p,
    children: [
      (0, G.jsxs)(`button`, {
        "aria-expanded": o,
        "aria-haspopup": `true`,
        "aria-label": `${t} ${g?.label ?? a}`,
        className: `chart-picker-button`,
        "data-testid": i,
        disabled: e,
        onClick: h,
        onKeyDown: l,
        ref: d,
        type: `button`,
        children: [
          (0, G.jsxs)(`span`, { children: [t, `: `, g?.label ?? a] }),
          (0, G.jsx)(`span`, {
            className: `dropdown-caret`,
            "aria-hidden": `true`,
            children: (0, G.jsx)(Tt, {}),
          }),
        ],
      }),
      m
        ? (0, G.jsx)(`div`, {
            className: `chart-picker-popover menu-surface ${f}`,
            onKeyDown: u,
            children: _.map((e) =>
              (0, G.jsxs)(
                `section`,
                {
                  className: `chart-picker-section`,
                  children: [
                    (0, G.jsx)(`h2`, { className: `chart-picker-heading`, children: e.title }),
                    (0, G.jsx)(`div`, {
                      className: `chart-option-grid`,
                      children: e.options.map((e) =>
                        (0, G.jsxs)(
                          `button`,
                          {
                            "aria-pressed": e.value === a,
                            className: `chart-option`,
                            onClick: () => {
                              (c(), e.value !== a && n(e.value));
                            },
                            type: `button`,
                            children: [
                              (0, G.jsx)(`span`, {
                                className: `chart-option-label`,
                                children: e.label,
                              }),
                              (0, G.jsx)(`span`, {
                                className: `chart-option-check`,
                                "aria-hidden": `true`,
                                children: (0, G.jsx)(Nn, {}),
                              }),
                            ],
                          },
                          e.value,
                        ),
                      ),
                    }),
                  ],
                },
                e.title,
              ),
            ),
          })
        : null,
    ],
  });
}
function kn({ disabled: e = !1, label: t }) {
  return (0, G.jsx)(`button`, {
    className: `field-pill`,
    disabled: e,
    type: `button`,
    children: (0, G.jsx)(`span`, { className: `field-pill-role`, children: t }),
  });
}
function An({ children: e, disabled: t = !1 }) {
  return (0, G.jsx)(`button`, {
    className: `clear-button`,
    disabled: t,
    type: `button`,
    children: e,
  });
}
function jn({ onChange: e, options: t, value: n }) {
  return (0, G.jsx)(`div`, {
    className: `data-mode-segmented`,
    "data-active-mode": n === t[1]?.value ? `query` : `table`,
    role: `group`,
    "aria-label": `Source data view`,
    children: t.map((t) =>
      (0, G.jsx)(
        `button`,
        {
          "aria-pressed": t.value === n,
          className: `data-mode-option`,
          onClick: () => e(t.value),
          type: `button`,
          children: t.label,
        },
        t.value,
      ),
    ),
  });
}
function Mn(e) {
  let t = new Map(e.map((e) => [e.value, e])),
    n = In.flatMap((e) => {
      let n = e.types.flatMap((e) => {
        let n = t.get(e);
        return n ? (t.delete(e), [n]) : [];
      });
      return n.length ? [{ title: e.title, options: n }] : [];
    }),
    r = Array.from(t.values());
  return r.length ? [...n, { title: `Other`, options: r }] : n;
}
function Nn() {
  return (0, G.jsx)(`svg`, {
    "aria-hidden": `true`,
    fill: `none`,
    height: `16`,
    viewBox: `0 0 24 24`,
    width: `16`,
    children: (0, G.jsx)(`path`, {
      d: `M20 6 9 17l-5-5`,
      stroke: `currentColor`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      strokeWidth: `2`,
    }),
  });
}
var Pn,
  G,
  Fn,
  In,
  Ln = e(() => {
    ((Pn = t(n())),
      zt(),
      En(),
      (G = c()),
      (Fn = 100),
      (In = [
        { title: `Trends`, types: [`line`, `area`, `stackedArea`, `sparkline`] },
        { title: `Comparison`, types: [`bar`, `leaderboard`] },
        { title: `Distribution`, types: [`histogram`, `boxPlot`] },
        { title: `Relationships`, types: [`scatter`, `heatmap`] },
        { title: `Composition`, types: [`pie`] },
        { title: `Progression`, types: [`funnel`, `waterfall`] },
      ]));
  });
function Rn({ controller: e, view: t, modelVersion: n, onSourceViewModeChange: r }) {
  let i = (0, Gn.useRef)(null),
    a = (0, Gn.useRef)(null),
    o = xn(a),
    [s, c] = (0, Gn.useState)(null),
    [l, u] = (0, Gn.useState)(!0),
    [d, f] = (0, Gn.useState)(null),
    [p, m] = (0, Gn.useState)(null),
    h = (0, Gn.useCallback)(() => {
      let n = !1;
      return (
        u(!0),
        f(null),
        e
          .requestFocusedElementSnapshot(t.ref)
          .then((e) => {
            n || (c(e.chart), u(!1));
          })
          .catch((e) => {
            n || (f(e instanceof Error ? e.message : String(e)), u(!1));
          }),
        () => {
          n = !0;
        }
      );
    }, [e, t.ref]);
  ((0, Gn.useEffect)(() => h(), [n, h]),
    (0, Gn.useLayoutEffect)(() => {
      let n = i.current,
        r = Math.floor(o.width),
        a = Math.floor(o.height);
      if (!n || r <= 0 || a <= 0 || !s) return;
      let c = window.devicePixelRatio || 1,
        l = Math.max(1, Math.round(r * c)),
        u = Math.max(1, Math.round(a * c));
      ((n.width = l), (n.height = u), (n.style.width = `${r}px`), (n.style.height = `${a}px`));
      let d = !1;
      return (
        e
          .requestFocusedElementFrame({ ref: t.ref, width: r, height: a, dpr: c })
          .then((e) => {
            if (d) {
              e.bitmap.close();
              return;
            }
            let t = n.getContext(`2d`);
            if (!t) {
              e.bitmap.close();
              return;
            }
            (t.setTransform(1, 0, 0, 1, 0, 0),
              t.clearRect(0, 0, n.width, n.height),
              t.setTransform(e.dpr, 0, 0, e.dpr, 0, 0),
              t.drawImage(e.bitmap, 0, 0, e.width, e.height),
              e.bitmap.close());
          })
          .catch((e) => {
            d || f(e instanceof Error ? e.message : String(e));
          }),
        () => {
          d = !0;
        }
      );
    }, [s, s?.chartType, o.height, o.width, e, n, t.ref]));
  let g = s?.sourceData.rows ?? [],
    _ = s?.sourceData.columns ?? [],
    v = (0, Gn.useMemo)(() => Vn(_, g), [_, g]),
    y = (0, Gn.useCallback)(
      async (n) => {
        let r = n;
        (m(r), f(null));
        try {
          let n = await e.setFocusedChartType(t.ref, r);
          c(n.chart);
        } catch (e) {
          f(e instanceof Error ? e.message : String(e));
        } finally {
          m(null);
        }
      },
      [e, t.ref],
    );
  return (0, K.jsx)(`div`, {
    className: `popcorn-focused-ds bg-token-main-surface-primary absolute inset-0 z-30 flex min-h-0 flex-col overflow-auto px-4 py-8 sm:px-6`,
    "data-testid": `popcorn-focused-view`,
    children: l
      ? (0, K.jsx)(`div`, {
          className: `text-token-text-secondary mx-auto w-full max-w-[900px] text-sm`,
          children: `Loading chart...`,
        })
      : d
        ? (0, K.jsx)(`div`, {
            className: `text-token-text-error mx-auto w-full max-w-[900px] text-sm`,
            children: d,
          })
        : s
          ? (0, K.jsxs)(`div`, {
              className: `mx-auto flex w-full max-w-[900px] flex-col`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `mb-6`,
                  children: (0, K.jsx)(`h1`, {
                    className: `text-token-text-primary m-0 text-4xl font-semibold leading-tight`,
                    children: s.title,
                  }),
                }),
                (0, K.jsxs)(`div`, {
                  className: `controls mb-4`,
                  children: [
                    (0, K.jsx)(On, {
                      label: `Chart type`,
                      value: p ?? s.chartType,
                      disabled: p != null,
                      onChange: y,
                      testId: `popcorn-focused-chart-type-select`,
                      options: (s.supportedChartTypes.length > 0 ? s.supportedChartTypes : wn).map(
                        (e) => ({
                          value: e,
                          label: Wn(e),
                        }),
                      ),
                    }),
                    (0, K.jsx)(kn, { label: `X axis`, disabled: !0 }),
                    (0, K.jsx)(kn, { label: `Y axis`, disabled: !0 }),
                    (0, K.jsx)(kn, { label: `Stack by`, disabled: !0 }),
                    (0, K.jsx)(An, { disabled: !0, children: `Reset filters` }),
                  ],
                }),
                (0, K.jsx)(`div`, {
                  ref: a,
                  className: `border-token-border-light h-[420px] min-h-[280px] border-t`,
                  children: (0, K.jsx)(`canvas`, { ref: i, className: `block size-full` }),
                }),
                (0, K.jsxs)(`div`, {
                  className: `data-section-header mt-10`,
                  children: [
                    (0, K.jsx)(`div`, {
                      className: `data-section-name`,
                      children: (0, K.jsx)(`span`, { children: `Source data` }),
                    }),
                    (0, K.jsx)(`div`, {
                      "data-testid": `popcorn-focused-source-mode`,
                      children: (0, K.jsx)(jn, {
                        value: t.sourceViewMode,
                        onChange: r,
                        options: [
                          { value: `table`, label: `Table` },
                          { value: `workbook`, label: `Workbook` },
                        ],
                      }),
                    }),
                  ],
                }),
                t.sourceViewMode === `workbook`
                  ? (0, K.jsx)(Bn, { grid: v })
                  : (0, K.jsx)(zn, { columns: _, rows: g }),
              ],
            })
          : (0, K.jsx)(`div`, {
              className: `text-token-text-secondary mx-auto w-full max-w-[900px] text-sm`,
              children: `This focused element is no longer available.`,
            }),
  });
}
function zn({ columns: e, rows: t }) {
  let n = e.map((e, n) => t.some((e) => typeof e[n] == `number`));
  return (0, K.jsx)(`div`, {
    className: `shared-table-shell mt-4`,
    children: (0, K.jsx)(`div`, {
      className: `table-wrap table-density-dense`,
      children: (0, K.jsxs)(`table`, {
        className: `data-table data-table-dense`,
        children: [
          (0, K.jsx)(`thead`, {
            children: (0, K.jsx)(`tr`, {
              children: e.map((e, t) =>
                (0, K.jsx)(`th`, { className: n[t] ? `numeric` : void 0, children: e }, e),
              ),
            }),
          }),
          (0, K.jsx)(`tbody`, {
            children: t.map((t, r) =>
              (0, K.jsx)(
                `tr`,
                {
                  children: e.map((e, r) =>
                    (0, K.jsx)(
                      `td`,
                      { className: n[r] ? `table-cell-number` : void 0, children: Un(t[r]) },
                      e,
                    ),
                  ),
                },
                r,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
function Bn({ grid: e }) {
  return (0, K.jsx)(`div`, {
    className: `shared-table-shell mt-4`,
    "data-testid": `popcorn-focused-workbook-grid`,
    children: (0, K.jsx)(`div`, {
      className: `table-wrap table-density-dense`,
      children: (0, K.jsx)(`table`, {
        className: `data-table data-table-dense`,
        children: (0, K.jsx)(`tbody`, {
          children: e.map((e, t) =>
            (0, K.jsx)(
              `tr`,
              {
                children: e.map((e, n) =>
                  (0, K.jsx)(
                    `td`,
                    {
                      className: i(
                        `border-token-border-light break-words border px-3 py-2`,
                        t === 0 || n === 0
                          ? `bg-token-bg-secondary text-token-text-secondary text-center font-medium`
                          : t === 1
                            ? `bg-token-bg-secondary text-token-text-primary font-medium`
                            : `text-token-text-primary bg-token-main-surface-primary`,
                      ),
                      children: Un(e),
                    },
                    n,
                  ),
                ),
              },
              t,
            ),
          ),
        }),
      }),
    }),
  });
}
function Vn(e, t) {
  return [[``, ...e.map((e, t) => Hn(t))], [1, ...e], ...t.map((e, t) => [t + 2, ...e])];
}
function Hn(e) {
  let t = e + 1,
    n = ``;
  for (; t > 0;) {
    let e = (t - 1) % 26;
    ((n = String.fromCharCode(65 + e) + n), (t = Math.floor((t - 1) / 26)));
  }
  return n;
}
function Un(e) {
  return e == null
    ? ``
    : typeof e == `number`
      ? Number.isInteger(e)
        ? String(e)
        : e.toLocaleString(void 0, { maximumFractionDigits: 2 })
      : String(e);
}
function Wn(e) {
  return e.replace(/([A-Z])/g, ` $1`).replace(/^./, (e) => e.toLocaleUpperCase());
}
var Gn,
  K,
  Kn = e(() => {
    (p(), (Gn = t(n())), Cn(), Tn(), Ln(), (K = c()));
  });
function qn() {
  return new Yn();
}
var Jn,
  Yn,
  Xn = e(() => {
    ((Jn = { activeView: null }),
      (Yn = class {
        #e = Jn;
        #t = new Set();
        subscribe(e) {
          return (
            this.#t.add(e),
            () => {
              this.#t.delete(e);
            }
          );
        }
        getSnapshot() {
          return this.#e;
        }
        open(e) {
          ((this.#e = { activeView: { ref: { ...e }, sourceViewMode: `table` } }), this.#n());
        }
        close() {
          this.#e.activeView && ((this.#e = Jn), this.#n());
        }
        setSourceViewMode(e) {
          let t = this.#e.activeView;
          !t ||
            t.sourceViewMode === e ||
            ((this.#e = { activeView: { ...t, sourceViewMode: e } }), this.#n());
        }
        #n() {
          for (let e of this.#t) e();
        }
      }));
  });
function Zn() {
  return (
    (Qn ??= Promise.all([
      Ut(),
      Promise.resolve().then(() => {
        Nt();
      }),
    ]).then(() => {})),
    Qn
  );
}
var Qn,
  $n = e(() => {
    (Pt(), Bt(), (Qn = null));
  });
function er(e) {
  return typeof e == `object` && !!e && `$$type` in e && e.$$type === tr;
}
var tr,
  nr,
  rr = e(() => {
    ((tr = Symbol.for(`@oai/granola/document-jsx.element`)),
      (nr = Symbol.for(`@oai/granola/document-jsx.fragment`)));
  });
function q(e, t) {
  return ir(e, t);
}
function J(e, t) {
  return ir(e, t);
}
function ir(e, t) {
  return typeof e == `function` ? e(t) : { $$type: tr, type: e, props: t };
}
var ar = e(() => {
  rr();
});
function or(e) {
  if (!e) return;
  let t = new B();
  return (nt(t, e), t.toProto());
}
function sr(e) {
  let t = e.paragraphStyle
    ? { ...e.paragraphStyle, tabStops: e.paragraphStyle.tabStops ?? [] }
    : void 0;
  return {
    id: e.id,
    name: e.name,
    basedOn: e.basedOn,
    textStyle: or(e.textStyle),
    paragraphStyle: t,
    spaceBefore: e.spaceBefore,
    spaceAfter: e.spaceAfter,
    tags: [],
  };
}
function cr() {
  let e = new Ze({ stub: () => {} }, void 0);
  return ((e.colorScheme = { name: `Office`, themeColors: { ...fr } }), e.toProto());
}
function lr() {
  return [
    { name: `Aptos`, family: `swiss`, embeddedFonts: [] },
    { name: `Aptos Display`, family: `swiss`, embeddedFonts: [] },
    { name: `Times New Roman`, family: `roman`, embeddedFonts: [] },
    { name: `Cambria Math`, family: `roman`, embeddedFonts: [] },
  ];
}
function ur() {
  return { defaultTabStop: 720 };
}
function dr() {
  return [
    sr({
      id: `Normal`,
      name: `Normal`,
      textStyle: { typeface: `Aptos`, fontSize: `12pt` },
      paragraphStyle: { lineSpacingPercent: 115833 },
      spaceAfter: 160,
    }),
    sr({
      id: `Title`,
      name: `Title`,
      basedOn: `Normal`,
      textStyle: { typeface: `Aptos Display`, fontSize: `28pt`, color: `#1F1F1F` },
      paragraphStyle: { lineSpacingPercent: 1e5 },
      spaceAfter: 80,
    }),
    sr({
      id: `Subtitle`,
      name: `Subtitle`,
      basedOn: `Normal`,
      textStyle: { typeface: `Aptos`, fontSize: `14pt`, color: `#6B7280` },
      paragraphStyle: { lineSpacingPercent: 1e5 },
      spaceAfter: 80,
    }),
    sr({
      id: `Heading1`,
      name: `Heading 1`,
      basedOn: `Normal`,
      textStyle: { typeface: `Aptos Display`, fontSize: `20pt`, color: `#156082` },
      paragraphStyle: { lineSpacingPercent: 1e5 },
      spaceBefore: 360,
      spaceAfter: 80,
    }),
    sr({
      id: `Heading2`,
      name: `Heading 2`,
      basedOn: `Normal`,
      textStyle: { typeface: `Aptos Display`, fontSize: `16pt`, color: `#156082` },
      paragraphStyle: { lineSpacingPercent: 1e5 },
      spaceBefore: 160,
      spaceAfter: 80,
    }),
    sr({
      id: `Quote`,
      name: `Quote`,
      basedOn: `Normal`,
      textStyle: { italic: !0, color: `#6B7280` },
      paragraphStyle: { lineSpacingPercent: 115833 },
      spaceBefore: 80,
      spaceAfter: 80,
    }),
    sr({
      id: `IntenseQuote`,
      name: `Intense Quote`,
      basedOn: `Quote`,
      textStyle: { bold: !0, color: `#156082` },
      paragraphStyle: { lineSpacingPercent: 115833 },
      spaceBefore: 80,
      spaceAfter: 80,
    }),
    sr({
      id: `ListParagraph`,
      name: `List Paragraph`,
      basedOn: `Normal`,
      paragraphStyle: { marginLeft: 457200, indent: -228600 },
    }),
    sr({
      id: `Caption`,
      name: `Caption`,
      basedOn: `Normal`,
      textStyle: { fontSize: `9pt`, italic: !0, color: `#6B7280` },
      paragraphStyle: { lineSpacingPercent: 1e5 },
      spaceAfter: 80,
    }),
  ];
}
var fr,
  pr = e(() => {
    (Ue(),
      Oe(),
      (fr = {
        accent1: `#156082`,
        accent2: `#E97132`,
        accent3: `#196B24`,
        accent4: `#0F9ED5`,
        accent5: `#A02B93`,
        accent6: `#4EA72E`,
        bg1: `#FFFFFF`,
        bg2: `#000000`,
        tx1: `#1F1F1F`,
        tx2: `#FFFFFF`,
        dk1: `#000000`,
        lt1: `#FFFFFF`,
        dk2: `#0E2841`,
        lt2: `#E8E8E8`,
        hlink: `#467886`,
        folHlink: `#96607D`,
      }));
  });
function mr() {
  return {
    id: `doc-paragraph-1`,
    runs: [
      {
        id: `doc-run-1`,
        text: `Start writing here...`,
        textStyle: void 0,
        hyperlink: void 0,
        citations: [],
        reviewMarkIds: [],
      },
    ],
    inlineNodes: [],
    textStyle: void 0,
    styleId: `Normal`,
  };
}
function hr() {
  return {
    id: `doc-element-1`,
    type: T.ELEMENT_TYPE_TEXT,
    paragraphs: [mr()],
    bbox: void 0,
    zIndex: 0,
    innerXml: ``,
    outerXml: ``,
    shape: void 0,
    image: void 0,
    chartReference: void 0,
    video: void 0,
    table: void 0,
    name: ``,
    placeholderIndex: 0,
    placeholderType: ``,
    effects: [],
    children: [],
    levelsStyles: [],
    fill: void 0,
    lineReference: void 0,
    fillReference: void 0,
    effectReference: void 0,
    fontReference: void 0,
    hyperlink: void 0,
    textStyle: void 0,
    citations: [],
  };
}
function gr() {
  let e = hr(),
    t = hr(),
    n = 12240,
    r = 15840;
  return {
    id: `walnut-document`,
    name: `New document`,
    widthEmu: n,
    heightEmu: r,
    charts: [],
    elements: [e],
    images: [],
    footnotes: [],
    comments: [],
    commentReferences: [],
    textStyles: dr(),
    reviewMarks: [],
    tableStyleDefinitions: [],
    endnotes: [],
    settings: ur(),
    theme: cr(),
    fonts: lr(),
    sections: [
      {
        id: `doc-section-1`,
        breakType: rn.SECTION_BREAK_TYPE_UNSPECIFIED,
        pageSetup: { widthEmu: n, heightEmu: r, pageMargin: void 0 },
        columns: { count: 1, space: 0, widths: [], hasSeparatorLine: !1 },
        elements: [t],
        header: void 0,
        footer: void 0,
        startsWithPageBreak: !1,
        differentFirstPage: void 0,
        firstHeader: void 0,
        firstFooter: void 0,
      },
    ],
    numberingDefinitions: [],
    paragraphNumberings: [],
  };
}
var _r = e(() => {
    (on(), m(), pr());
  }),
  vr,
  yr,
  br = e(() => {
    (g(),
      (vr = class {
        #e;
        constructor(e = []) {
          this.#e = e.map((e) => new yr(e));
        }
        get items() {
          return [...this.#e];
        }
        add(e = {}) {
          let t = new yr({
            id: e.id ?? ``,
            tetherId: e.tetherId ?? ``,
            targetId: e.targetId ?? ``,
            type: e.type ?? S.CONTENT_REFERENCE_TYPE_UNSPECIFIED,
            ...e,
          });
          return (this.#e.push(t), t);
        }
        replace(e) {
          this.#e = e.map((e) => new yr(e));
        }
        toProto() {
          return this.#e.map((e) => e.toProto());
        }
      }),
      (yr = class {
        #e;
        constructor(e) {
          this.#e = {
            ...e,
            id: e.id ?? ``,
            tetherId: e.tetherId ?? ``,
            targetId: e.targetId ?? ``,
            type: e.type ?? S.CONTENT_REFERENCE_TYPE_UNSPECIFIED,
          };
        }
        get id() {
          return this.#e.id;
        }
        set id(e) {
          this.#e.id = e;
        }
        get title() {
          return this.#e.title ?? ``;
        }
        set title(e) {
          this.#e.title = e;
        }
        get uri() {
          return this.#e.uri ?? ``;
        }
        set uri(e) {
          this.#e.uri = e;
        }
        get locator() {
          return this.#e.locator ?? ``;
        }
        set locator(e) {
          this.#e.locator = e;
        }
        get evidence() {
          return this.#e.evidence ?? ``;
        }
        set evidence(e) {
          this.#e.evidence = e;
        }
        get note() {
          return this.#e.note ?? ``;
        }
        set note(e) {
          this.#e.note = e;
        }
        toProto() {
          return structuredClone(this.#e);
        }
      }));
  });
function Y(e) {
  return structuredClone(e);
}
var xr = e(() => {}),
  Sr,
  Cr = e(() => {
    (xr(),
      (Sr = class {
        #e;
        #t;
        constructor(e = [], t = {}) {
          ((this.#e = Y(e)), (this.#t = t.onMutated));
        }
        get items() {
          return Y(this.#e);
        }
        getById(e) {
          if (!e) return;
          let t = this.#e.find((t) => t.id === e);
          return t ? Y(t) : void 0;
        }
        set(e) {
          let t = Y(e),
            n = this.#e.findIndex((e) => e.id === t.id);
          return (n >= 0 ? (this.#e[n] = t) : this.#e.push(t), this.#t?.(), Y(t));
        }
        delete(e) {
          let t = this.#e.findIndex((t) => t.id === e);
          return t < 0 ? !1 : (this.#e.splice(t, 1), this.#t?.(), !0);
        }
        replace(e) {
          ((this.#e = Y(e)), this.#t?.());
        }
        toProto() {
          return Y(this.#e);
        }
      }));
  }),
  wr,
  Tr = e(() => {
    (xr(),
      (wr = class {
        #e;
        #t;
        constructor(e = [], t = {}) {
          ((this.#e = Y(e)), (this.#t = t.onMutated));
        }
        get items() {
          return Y(this.#e);
        }
        getByCommentId(e) {
          if (!e) return;
          let t = this.#e.find((t) => t.commentId === e);
          return t ? Y(t) : void 0;
        }
        set(e) {
          let t = Y(e),
            n = this.#e.findIndex((e) => e.commentId === t.commentId);
          return (n >= 0 ? (this.#e[n] = t) : this.#e.push(t), this.#t?.(), Y(t));
        }
        delete(e) {
          let t = this.#e.findIndex((t) => t.commentId === e);
          return t < 0 ? !1 : (this.#e.splice(t, 1), this.#t?.(), !0);
        }
        replace(e) {
          ((this.#e = Y(e)), this.#t?.());
        }
        toProto() {
          return Y(this.#e);
        }
      }));
  }),
  Er,
  Dr = e(() => {
    (Be(),
      (Er = class {
        #e;
        #t;
        #n;
        #r;
        constructor(e) {
          ((this.#e = new He({ people: e.people ?? [], threads: e.threads ?? [] })),
            (this.#t = e.documentId ?? ``),
            (this.#n = e.textElementId ?? ``),
            (this.#r = e.resolveTextRange));
        }
        get people() {
          return this.#e.people;
        }
        get threads() {
          return this.#e.threads;
        }
        setSelf(e) {
          return this.#e.setSelf(e);
        }
        addThread(e, t, n = {}) {
          let r = this.#i(e.textRange);
          return this.#e.addThread({ proto: r }, t, n);
        }
        toProto() {
          return this.#e.toProto();
        }
        #i(e) {
          let t = this.#r(e),
            n = t?.startCp ?? 0,
            r = t?.length ?? 0;
          return { textRange: { slideId: this.#t, elementId: this.#n, startCp: n, length: r } };
        }
      }));
  });
function Or(e, t) {
  return t instanceof ArrayBuffer
    ? `ArrayBuffer:${t.byteLength}`
    : ArrayBuffer.isView(t)
      ? `${t.constructor.name}:${t.byteLength}`
      : t;
}
function kr(e) {
  return JSON.stringify(e, Or);
}
var Ar,
  jr = e(() => {
    Ar = class {
      #e;
      #t;
      reset() {
        ((this.#e = void 0), (this.#t = void 0));
      }
      getPages(e, t, n = `default`) {
        let r = `${n}:${kr(e)}`;
        if (r === this.#e && this.#t) return this.#t;
        let i = t(e);
        return ((this.#e = r), (this.#t = i), i);
      }
    };
  }),
  Mr,
  Nr,
  Pr = e(() => {
    (We(),
      Pe(),
      (Mr = class {
        #e;
        constructor(e, t) {
          ((this.#e = structuredClone(e)), t?.addParagraphs(e.paragraphs));
        }
        get id() {
          return this.#e.id ?? ``;
        }
        toProto() {
          return structuredClone(this.#e);
        }
      }),
      (Nr = class {
        #e = [];
        #t;
        #n;
        #r;
        #i;
        constructor(e) {
          ((this.#t = e.documentId ?? ``),
            (this.#n = e.textElementId ?? ``),
            (this.#r = e.resolveTextRange),
            (this.#i = e.onMutated));
          let t = e.endnotes ?? [];
          this.#e = t.map((t) => new Mr(t, e.fontFamilyCache));
        }
        get items() {
          return [...this.#e];
        }
        add(e, t) {
          let n = this.#a(e),
            r = this.#o(t.range),
            i = { id: rt(), paragraphs: n, referenceTextRange: r, referenceRunIds: [] },
            a = new Mr(i);
          return (this.#e.push(a), this.#i?.(), a);
        }
        replace(e) {
          ((this.#e = e.map((e) => new Mr(e))), this.#i?.());
        }
        toProto() {
          return this.#e.map((e) => e.toProto());
        }
        #a(e) {
          return Ye(e) ? it(e) : it([String(e)]);
        }
        #o(e) {
          let t = this.#r(e);
          if (t)
            return { slideId: this.#t, elementId: this.#n, startCp: t.startCp, length: t.length };
        }
      }));
  }),
  Fr,
  Ir = e(() => {
    (xr(),
      (Fr = class {
        #e;
        #t;
        constructor(e = [], t = {}) {
          ((this.#e = Y(e)), (this.#t = t.onMutated));
        }
        get items() {
          return Y(this.#e);
        }
        getByName(e) {
          if (!e) return;
          let t = this.#e.find((t) => t.name === e);
          return t ? Y(t) : void 0;
        }
        set(e) {
          let t = Y(e),
            n = this.#e.findIndex((e) => e.name === t.name);
          return (n >= 0 ? (this.#e[n] = t) : this.#e.push(t), this.#t?.(), Y(t));
        }
        delete(e) {
          let t = this.#e.findIndex((t) => t.name === e);
          return t < 0 ? !1 : (this.#e.splice(t, 1), this.#t?.(), !0);
        }
        replace(e) {
          ((this.#e = Y(e)), this.#t?.());
        }
        toProto() {
          return Y(this.#e);
        }
      }));
  }),
  Lr,
  Rr,
  zr = e(() => {
    (We(),
      Pe(),
      (Lr = class {
        #e;
        constructor(e, t) {
          ((this.#e = e), t?.addParagraphs(e.paragraphs));
        }
        get id() {
          return this.#e.id ?? ``;
        }
        toProto() {
          return {
            ...this.#e,
            referenceRunIds: this.#e.referenceRunIds ?? [],
            paragraphs: this.#e.paragraphs
              ? this.#e.paragraphs.map((e) => ({
                  ...e,
                  runs: e.runs?.map((e) => ({ ...e })) ?? [],
                }))
              : [],
          };
        }
      }),
      (Rr = class {
        #e = [];
        #t;
        #n;
        #r;
        #i;
        constructor(e) {
          ((this.#t = e.documentId ?? ``),
            (this.#n = e.textElementId ?? ``),
            (this.#r = e.resolveTextRange),
            (this.#i = e.onMutated));
          let t = e.footnotes ?? [];
          this.#e = t.map((t) => new Lr(t, e.fontFamilyCache));
        }
        add(e, t) {
          let n = this.#a(e),
            r = this.#o(t.range),
            i = { id: rt(), paragraphs: n, referenceTextRange: r, referenceRunIds: [] },
            a = new Lr(i);
          return (this.#e.push(a), this.#i?.(), a);
        }
        toProto() {
          return this.#e.map((e) => e.toProto());
        }
        #a(e) {
          return Ye(e) ? it(e) : it([String(e)]);
        }
        #o(e) {
          let t = this.#r(e);
          if (t)
            return { slideId: this.#t, elementId: this.#n, startCp: t.startCp, length: t.length };
        }
      }));
  });
function Br(e) {
  let t = e === void 0 ? 1 : Math.floor(e);
  return t > 1 ? t : 1;
}
function Vr(e) {
  for (let t of e)
    for (let e of t.cells ?? []) if (e.horizontalMerge === !1 || e.verticalMerge === !1) return !0;
  return !1;
}
function Hr(e) {
  return e.map((e) => ({ ...e, cells: e.cells.map((e) => ({ ...e })) }));
}
function Ur(e) {
  for (let t of e)
    for (let e = 0; e < t.cells.length; e += 1) {
      let n = t.cells[e];
      if (!n || n.horizontalMerge !== !0) {
        n?.horizontalMerge === !1 && (n.horizontalMerge = !0);
        continue;
      }
      let r = Br(n.gridSpan),
        i = e + 1;
      for (; i < t.cells.length;) {
        let e = t.cells[i];
        if (!e || e.horizontalMerge !== !1) break;
        ((r += Br(e.gridSpan)), (e.horizontalMerge = !0), (i += 1));
      }
      (r > 1 && (n.gridSpan = r), (n.horizontalMerge = void 0));
    }
}
function Wr(e) {
  let t = [],
    n = 0;
  for (let r of e.cells ?? []) {
    if (!r || r.horizontalMerge === !0) continue;
    let e = Br(r.gridSpan);
    (t.push({ cell: r, columnIndex: n, columnSpan: e }), (n += e));
  }
  return t;
}
function Gr(e) {
  let t = new Map(),
    n = new Set();
  for (let r of e) {
    let e = Wr(r);
    for (let r of e) {
      let { cell: e, columnIndex: i, columnSpan: a } = r;
      if (e.verticalMerge === !0) {
        let r = { cell: e, rowSpan: 1 };
        n.add(r);
        for (let e = 0; e < a; e += 1) t.set(i + e, r);
        e.verticalMerge = void 0;
        continue;
      }
      if (e.verticalMerge === !1) {
        let n = t.get(i);
        if (n) {
          n.rowSpan += 1;
          for (let e = 0; e < a; e += 1) t.set(i + e, n);
        }
        e.verticalMerge = !0;
        continue;
      }
      for (let e = 0; e < a; e += 1) t.delete(i + e);
    }
  }
  let r = new Set();
  for (let e of n)
    r.has(e.cell) ||
      (r.add(e.cell), e.rowSpan > 1 && (e.cell.rowSpan = Math.max(Br(e.cell.rowSpan), e.rowSpan)));
}
function Kr(e) {
  let t = e.table;
  if (!t || t.rows.length === 0 || !Vr(t.rows)) return e;
  let n = Hr(t.rows);
  return (Ur(n), Gr(n), { ...e, table: { ...t, rows: n } });
}
var qr = e(() => {});
function Jr(e) {
  return xe(e, Zr);
}
function Yr(e) {
  return Jr(new Ze({ stub: () => {} }, e));
}
function Xr(e, t, n, r = Qr) {
  return !e.paragraphs || e.paragraphs.length === 0
    ? 0
    : (Ve(e, t, r, void 0, {
        mode: `layout`,
        bboxPx: { x: 0, y: 0, width: Math.max(1, n), height: 1e5 },
        paddingPx: { left: 0, right: 0, top: 0, bottom: 0 },
        wrap: !0,
        paragraphSpacingUnit: `twips`,
      })?.height ?? Math.max(18, e.paragraphs.length * 18));
}
var Zr,
  Qr,
  $r = e(() => {
    (ne(),
      je(),
      Ue(),
      (Zr = {
        accent1: `accent1`,
        accent2: `accent2`,
        accent3: `accent3`,
        accent4: `accent4`,
        accent5: `accent5`,
        accent6: `accent6`,
        bg1: `lt1`,
        tx1: `dk1`,
        bg2: `lt2`,
        tx2: `dk2`,
        hlink: `hlink`,
        folHlink: `folHlink`,
      }),
      (Qr = xe(new Ze({ stub: () => {} }, void 0), Zr)));
  }),
  ei,
  ti,
  ni = e(() => {
    ((ei = `__docxField:PAGE__`), (ti = `__docxField:NUMPAGES__`));
  });
function ri(e) {
  if (!(e === void 0 || e <= 0)) return e * U;
}
function ii(e) {
  if (!(e === void 0 || !Number.isFinite(e))) return e * U;
}
function ai(e, t) {
  if (e) {
    for (let n of e.split(`;`)) if (n.startsWith(t)) return n.slice(t.length);
  }
}
function oi(e, t, n) {
  return e.placement?.type === t && e.placement.anchorParagraphId
    ? e.placement.anchorParagraphId
    : ai(e.id, n);
}
function si(e, t = { widthPx: mi, heightPx: hi }) {
  if (!e.bbox) return t;
  let n = ri(e.bbox.widthEmu),
    r = ri(e.bbox.heightEmu);
  return n !== void 0 && r !== void 0
    ? { widthPx: n, heightPx: r }
    : n === void 0
      ? r === void 0
        ? t
        : { widthPx: 1, heightPx: r }
      : { widthPx: n, heightPx: 1 };
}
function ci(e, t) {
  return ii(e.bbox?.xEmu) ?? t;
}
function li(e, t) {
  return ii(e.bbox?.yEmu) ?? t;
}
function ui(e, t) {
  let n = oi(e, _i, vi),
    r = ii(e.placement?.yOffsetEmu) ?? ii(e.bbox?.yEmu) ?? 0;
  if (e.placement?.verticalRelativeFrom?.trim().toLowerCase() === `page`) return r;
  if (!n) return;
  let i = t.get(n);
  if (i !== void 0) return i + r;
}
function di(e, t) {
  let n = oi(e, gi, yi);
  if (!n) return;
  let r = t.get(n);
  if (r !== void 0) return r + (ii(e.bbox?.yEmu) ?? 0);
}
function fi(e) {
  return oi(e, gi, yi) !== void 0;
}
function pi(e) {
  return si(e);
}
var mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi = e(() => {
    (ce(),
      (mi = 180),
      (hi = 120),
      (gi = 1),
      (_i = 2),
      (vi = `__docxAnchorParagraphId:`),
      (yi = `__docxInlineParagraphId:`));
  });
function xi(e) {
  return Ke(e);
}
function Si(e) {
  return e / U;
}
var Ci = e(() => {
  (M(), ce());
});
function wi(e) {
  let t = e.table;
  if (!t || t.rows.length === 0) return 0;
  let n = 0;
  for (let e of t.rows) e.heightEmu && e.heightEmu > 0 ? (n += e.heightEmu * U) : (n += ji);
  return Math.max(n, t.rows.length * ji);
}
function Ti(e, t) {
  let n = e.bbox?.widthEmu !== void 0 && e.bbox.widthEmu > 0 ? e.bbox.widthEmu * U : void 0;
  return n && Number.isFinite(n) && n > 0 ? n : t;
}
function Ei(e, t) {
  let n = e.bbox?.xEmu === void 0 ? void 0 : e.bbox.xEmu * U;
  return n !== void 0 && Number.isFinite(n) ? n : t;
}
function Di(e, t, n, r = Qr, i) {
  return Ai(e, t, n, r, i).heightPx;
}
function Oi(e, t, n, r, i) {
  let a = e.table;
  if (!(!a || a.rows.length === 0))
    return F(
      Kr({
        ...e,
        type: T.ELEMENT_TYPE_TABLE,
        bbox: { xEmu: 0, yEmu: 0, widthEmu: Si(Math.max(1, n)), heightEmu: e.bbox?.heightEmu },
      }),
      t,
      r,
      {
        paragraphSpacingUnit: `twips`,
        explicitRowHeightBehavior: `atLeast`,
        autoRowMinimumHeightPx: 0,
        fitColumnWidthsToFrame: !0,
        drawDefaultCellBorders: !1,
        collapseParagraphBoundarySpacing: !1,
        documentGridLinePitchTwips: i,
      },
    );
}
function ki(e) {
  let t = e.table;
  return t ? t.rows.map((e) => (e.heightEmu && e.heightEmu > 0 ? e.heightEmu * U : ji)) : [];
}
function Ai(e, t, n, r = Qr, i) {
  let a = e.table;
  if (!a || a.rows.length === 0) return { widthPx: n, heightPx: 0, rowHeightsPx: [] };
  let o = Oi(e, t, n, r, i),
    s = ki(e),
    c = o?.rowHeightsPx.length === a.rows.length ? o.rowHeightsPx : s,
    l = wi(e),
    u = o && o.heightPx > 0 ? o.heightPx : c.reduce((e, t) => e + t, 0);
  return { widthPx: n, heightPx: u > 0 ? u : l, rowHeightsPx: c };
}
var ji,
  Mi = e(() => {
    (m(), we(), ce(), $r(), Ci(), qr(), (ji = 24));
  });
function Ni() {
  return [];
}
function Pi(e) {
  return e.map((e) => ({ ...e }));
}
function Fi(e, t, n, r) {
  return e < r - 0.01 && n < t - 0.01;
}
function Ii(e, t) {
  return (
    e.emptyTextOnly === t.emptyTextOnly &&
    Fi(e.leftPx, e.rightPx, t.leftPx, t.rightPx) &&
    Fi(e.topPx, e.bottomPx, t.topPx, t.bottomPx)
  );
}
function Li(e, t) {
  return !e.emptyTextOnly || t;
}
function Ri(e, t) {
  let n = { ...t },
    r = !0;
  for (; r;) {
    r = !1;
    for (let t = e.length - 1; t >= 0; --t) {
      let i = e[t];
      !i ||
        !Ii(i, n) ||
        ((n.leftPx = Math.min(n.leftPx, i.leftPx)),
        (n.rightPx = Math.max(n.rightPx, i.rightPx)),
        (n.topPx = Math.min(n.topPx, i.topPx)),
        (n.bottomPx = Math.max(n.bottomPx, i.bottomPx)),
        e.splice(t, 1),
        (r = !0));
    }
  }
  (e.push(n),
    e.sort((e, t) =>
      Math.abs(e.topPx - t.topPx) > 0.01 ? e.topPx - t.topPx : e.leftPx - t.leftPx,
    ));
}
function zi(e, t, n, r, i, a = 0, o = !1) {
  let s = t + n,
    c = r,
    l = Math.max(0, a);
  for (;;) {
    let n = e.find(
      (e) =>
        Li(e, o) && Fi(t, s, e.leftPx, e.rightPx) && c >= e.topPx - 0.01 && c < e.bottomPx - 0.01,
    );
    if (!n) {
      let n = e
          .filter((e) => Li(e, o) && Fi(t, s, e.leftPx, e.rightPx) && e.topPx > c + 0.01)
          .sort((e, t) => e.topPx - t.topPx)[0],
        r = Math.min(i, n?.topPx ?? i);
      if (!n || r - c >= l - 0.01) return { currentY: c, boundaryBottomPx: r };
      c = n.bottomPx;
      continue;
    }
    c = n.bottomPx;
  }
}
var Bi = e(() => {});
function Vi(e) {
  return e.type === T.ELEMENT_TYPE_TABLE || e.table
    ? `table`
    : e.type === T.ELEMENT_TYPE_CHART ||
        e.type === T.ELEMENT_TYPE_CHART_REFERENCE ||
        e.chartReference
      ? `chart`
      : e.type === T.ELEMENT_TYPE_IMAGE ||
          e.type === T.ELEMENT_TYPE_IMAGE_REFERENCE ||
          e.imageReference ||
          e.image
        ? `image`
        : e.type === T.ELEMENT_TYPE_SHAPE || e.shape
          ? `shape`
          : e.type === T.ELEMENT_TYPE_GROUP || (e.children?.length ?? 0) > 0
            ? `group`
            : `text`;
}
function Hi(e, t) {
  let n = e.columns.widths.map(() => t);
  return n.length > 0 ? n : [t];
}
function Ui(e, t = 0) {
  let n = e.columns.widths.map(() => 0);
  return n.length === 0 ? [t] : ((n[0] = t), n);
}
function Wi(e, t = !1) {
  let n = e.columns.widths.map(() => !1);
  return n.length === 0 ? [t] : ((n[0] = t), n);
}
function Gi(e, t) {
  let n = e.columns.widths.map(() => void 0);
  return n.length === 0 ? [t] : ((n[0] = t), n);
}
function Ki(e, t) {
  let n = e.columns.widths.map(() => void 0);
  return n.length === 0 ? [t] : ((n[0] = t), n);
}
function qi(e, t) {
  return {
    xPx: e.columns.xPositions[t] ?? e.contentLeftPx,
    yPx: e.contentTopPx,
    widthPx: e.columns.widths[t] ?? e.contentWidthPx,
    heightPx: e.contentBottomPx - e.contentTopPx,
  };
}
function Ji({
  settings: e,
  sectionIndex: t,
  sourceElementIndex: n,
  fragmentIndex: r,
  columnIndex: i,
  lineStartIndex: a,
  lineEndIndex: o,
  rowStartIndex: s,
  rowEndIndex: c,
  balanced: l,
}) {
  return {
    sectionIndex: t + 1,
    sourceElementIndex: n + 1,
    fragmentIndex: r,
    columnIndex: i + 1,
    columnFrame: qi(e, i),
    lineStartIndex: a,
    lineEndIndex: o,
    rowStartIndex: s,
    rowEndIndex: c,
    balanced: l,
    documentGridLinePitchTwips: e.documentGridLinePitchTwips,
    documentGridLinePitchPx:
      e.documentGridLinePitchTwips === void 0 ? void 0 : xi(e.documentGridLinePitchTwips),
  };
}
function Yi(e, t) {
  let n = (e.get(t) ?? 0) + 1;
  return (e.set(t, n), n);
}
function Xi(e, t) {
  let n = e?.trim().toLowerCase(),
    r = t?.trim().toLowerCase();
  return !!n && n === r;
}
function Zi({
  previousParagraphStyleId: e,
  currentParagraphStyleId: t,
  currentParagraphUsesContextualSpacing: n,
}) {
  return n && Xi(e, t);
}
function Qi(e, t, n) {
  for (let r of e.paragraphs ?? []) r.id && !n.has(r.id) && n.set(r.id, t);
}
function $i(e) {
  return e === `image` || e === `shape` || e === `group` || e === `chart`;
}
function ea(e) {
  return $i(e) || e === `table`;
}
function ta(e) {
  return e.placement?.behindDocument === !0;
}
function na(e) {
  return e.placement?.type === gs && e.placement.wrap?.type === _s;
}
function ra(e) {
  return e.placement?.type === gs && e.placement.wrap?.type === vs;
}
function ia(e) {
  if (!aa(e)) return !1;
  let t = e.placement?.horizontalAlignment?.trim().toLowerCase();
  return t === `left` || t === `center` || t === `right`;
}
function aa(e) {
  return e.placement?.type === fs && !fi(e);
}
function oa(e, t, n, r, i = 0) {
  if (ea(e.kind)) {
    let a = di(e.element, n);
    if (a !== void 0) return a;
    if (aa(e.element)) return t + se(e.element).topPx;
    if (fi(e.element) && r !== void 0) return r + (e.element.bbox?.yEmu ?? 0) * U;
    let o = ui(e.element, n);
    if (o !== void 0) return ca(e.element) ? i + o : o;
    let s = li(e.element, t);
    return sa(e.element) ? i + s : s;
  }
  return t;
}
function sa(e) {
  return e.bbox?.yEmu !== void 0 && Number.isFinite(e.bbox.yEmu);
}
function ca(e) {
  return (
    e.placement?.type === gs && e.placement.verticalRelativeFrom?.trim().toLowerCase() === `page`
  );
}
function la(e, t) {
  return Math.max(0, t - e.contentTopPx);
}
function ua(e, t, n, r) {
  return ea(e.kind) && (ta(e.element) || ra(e.element) || na(e.element))
    ? t
    : Math.max(t, n + r + da(e.element));
}
function da(e) {
  return aa(e) ? se(e).bottomPx : 0;
}
function fa(e, t) {
  if (e.widths.length !== t.widths.length) return !0;
  for (let n = 0; n < e.widths.length; n += 1)
    if (
      Math.abs((e.widths[n] ?? 0) - (t.widths[n] ?? 0)) > 0.5 ||
      Math.abs((e.xPositions[n] ?? 0) - (t.xPositions[n] ?? 0)) > 0.5
    )
      return !0;
  return !1;
}
function pa(e) {
  return e.sections.length > 0 ? e.sections.flatMap((e) => e.elements ?? []) : (e.elements ?? []);
}
function ma(e, t) {
  for (let n of e.paragraphs ?? []) t(n);
  let n = e.table;
  if (n)
    for (let e of n.rows)
      for (let n of e.cells) {
        for (let e of n.paragraphs ?? []) t(e);
        for (let e of n.elements ?? []) ma(e, t);
      }
}
function ha(e, t, n) {
  let r = e,
    i = new Set();
  for (; r && !i.has(r);) {
    i.add(r);
    let e = t.get(r);
    if (e) return e;
    r = n.get(r);
  }
}
function ga(e) {
  let t = e?.replace(/%[0-9]+/g, ``).trim();
  if (!t) return;
  if (t === `o`) return `◦`;
  let n = t.codePointAt(0);
  return n === 61623 ? `•` : n === 61607 ? `▪` : t;
}
function _a(e, t) {
  let n = t ?? ``,
    r = n.startsWith(`[`) && n.endsWith(`]`),
    i = n.endsWith(`)`),
    a = n.endsWith(`.`);
  switch (e) {
    case `decimal`:
      return r ? `arabicBracketBoth` : !a && !i ? `arabicPlain` : `arabicPeriod`;
    case `lowerLetter`:
      return i ? `alphaLcParenR` : `alphaLcPeriod`;
    case `upperLetter`:
      return i ? `alphaUcParenR` : `alphaUcPeriod`;
    case `lowerRoman`:
      return `romanLcPeriod`;
    case `upperRoman`:
      return `romanUcPeriod`;
    default:
      return;
  }
}
function va(e, t, n) {
  let r = e?.levels?.find((e) => (e.level ?? 0) === t);
  if (!r) return;
  if (r.numberFormat === `bullet`) {
    let e = ga(r.levelText);
    return e ? { startAt: n, paragraphStyle: { bulletCharacter: e, tabStops: [] } } : void 0;
  }
  let i = _a(r.numberFormat, r.levelText);
  if (i)
    return {
      startAt: n,
      paragraphStyle: { autoNumberType: i, autoNumberStartAt: n, tabStops: [] },
    };
}
function ya(e, t, n) {
  let r = e?.autoNumberStartAt;
  if (typeof r == `number` && r > 0) return r;
  let i = t?.levels?.find((e) => (e.level ?? 0) === n)?.startAt;
  return typeof i == `number` && i > 0 ? i : 1;
}
function ba(e) {
  let t = new Map(),
    n = new Map(),
    r = new Map(),
    i = new Map(),
    a = new Map(),
    o = new Map(),
    s = new Set();
  for (let t of e.textStyles ?? []) t.id && r.set(t.id, t.basedOn);
  for (let t of e.numberingDefinitions ?? []) {
    t?.numId && i.set(t.numId, t);
    for (let e of t?.levels ?? [])
      e?.paragraphStyleId &&
        t?.numId &&
        n.set(e.paragraphStyleId, { numId: t.numId, level: Math.max(0, e.level ?? 0) });
  }
  for (let n of e.paragraphNumberings ?? []) n?.paragraphId && n.numId && t.set(n.paragraphId, n);
  for (let c of pa(e))
    ma(c, (e) => {
      if (!e.id || s.has(e.id)) return;
      s.add(e.id);
      let c = t.get(e.id) ?? ha(e.styleId, n, r);
      if (!c?.numId) return;
      let l = Math.max(0, c.level ?? 0),
        u = i.get(c.numId),
        d = a.get(c.numId) ?? [];
      for (let e = l + 1; e < d.length; e += 1) d[e] = void 0;
      d[l] === void 0 && (d[l] = ya(e.paragraphStyle, u, l));
      let f = d[l] ?? 1;
      (o.set(e.id, { startAt: f, paragraphStyle: va(u, l, f)?.paragraphStyle }),
        (d[l] = f + 1),
        a.set(c.numId, d));
    });
  return o;
}
function xa(e, t, n) {
  let r = Je(e, t);
  if (r)
    return (
      e?.autoNumberType &&
        (e.marginLeft === void 0 && (r.marginLeft = void 0),
        e.indent === void 0 && (r.indent = void 0)),
      n !== void 0 && (r.autoNumberStartAt = n),
      r
    );
}
function Sa(e, t, n) {
  let r = e.paragraphs ?? [];
  if (r.length === 0) return e;
  let i = Ca(r, t, n);
  return i.changed ? { ...e, paragraphs: i.paragraphs } : e;
}
function Ca(e, t, n, r = {}) {
  let i = !1;
  return {
    paragraphs: e.map((e) => {
      let a = e.id ? n.get(e.id) : void 0,
        o = a?.startAt,
        s = t(e.styleId);
      if (!s) {
        if (o === void 0) return e;
        let t = xa(e.paragraphStyle, void 0, void 0),
          n = Je(a?.paragraphStyle, t);
        return (
          n && o !== void 0 && n.autoNumberType && (n.autoNumberStartAt = o),
          n === e.paragraphStyle ? e : ((i = !0), { ...e, paragraphStyle: n })
        );
      }
      let c = wa(e.textStyle, s.textStyle, r.preserveDirectTextStyle === !0),
        l = s.contextualSpacing ? Ce(c) : c,
        u = xa(e.paragraphStyle, s.paragraphStyle, void 0),
        d = Je(a?.paragraphStyle, u);
      d && o !== void 0 && d.autoNumberType && (d.autoNumberStartAt = o);
      let f = Ta(e.runs, r.preserveDirectTextStyle === !0 ? c : s.textStyle),
        p = e.spaceBefore ?? s.spaceBefore,
        m = e.spaceAfter ?? s.spaceAfter,
        h = {
          ...e,
          textStyle: l,
          paragraphStyle: d,
          runs: f,
          ...(p === void 0 ? {} : { spaceBefore: p }),
          ...(m === void 0 ? {} : { spaceAfter: m }),
        };
      return (
        (h.textStyle !== e.textStyle ||
          h.paragraphStyle !== e.paragraphStyle ||
          h.runs !== e.runs ||
          h.spaceBefore !== e.spaceBefore ||
          h.spaceAfter !== e.spaceAfter) &&
          (i = !0),
        h
      );
    }),
    changed: i,
  };
}
function wa(e, t, n = !1) {
  if (!n) {
    let n = {};
    return (
      e?.alignment !== void 0 && (n.alignment = e.alignment),
      e?.scheme !== void 0 && (n.scheme = e.scheme),
      Object.keys(n).length === 0 ? t : he(n, t)
    );
  }
  return he(e, t);
}
function Ta(e, t) {
  if (!e || !t) return e;
  let { alignment: n, ...r } = t;
  if (Object.keys(r).length === 0) return e;
  let i = !1,
    a = e.map((e) => {
      let t = he(e.textStyle, r);
      return t === e.textStyle ? e : ((i = !0), { ...e, textStyle: t });
    });
  return i ? a : e;
}
function Ea(e, t, n) {
  let r = e.table;
  if (!r || r.rows.length === 0) return e;
  let i = !1,
    a = r.rows.map((e) => {
      let r = !1,
        a = e.cells.map((e) => {
          let i = e.paragraphs ?? [];
          if (i.length === 0) return e;
          let a = Ca(i, t, n, { preserveDirectTextStyle: !0 });
          return a.changed ? ((r = !0), { ...e, paragraphs: a.paragraphs }) : e;
        });
      return r ? ((i = !0), { ...e, cells: a }) : e;
    });
  return i ? { ...e, table: { ...r, rows: a } } : e;
}
function Da(e, t, n) {
  return Ea(e.paragraphs && e.paragraphs.length > 0 ? Sa(e, t, n) : e, t, n);
}
function Oa(e, t, n) {
  return e.map((e) => Da(e, t, n));
}
function ka(e, t, n, r) {
  return e.map((e) => {
    let i = Da(e, t, n),
      a = i.paragraphs ?? [],
      o =
        a.length > 0
          ? mt({ element: i, unit: `twips` })
          : { firstParagraphSpaceBeforePx: 0, lastParagraphSpaceAfterPx: 0 },
      s = a[0],
      c = a[a.length - 1];
    return {
      element: i,
      kind: Vi(i),
      linesByWidth: new Map(),
      measurementsByWidth: new Map(),
      tableMeasurementsByWidth: new Map(),
      defaultTabStopTwips: r,
      docxSectionBreakCarrier: so(i),
      firstParagraphSpaceBeforePx: o.firstParagraphSpaceBeforePx,
      lastParagraphSpaceAfterPx: o.lastParagraphSpaceAfterPx,
      firstParagraphStyleId: s?.styleId,
      lastParagraphStyleId: c?.styleId,
      firstParagraphUsesContextualSpacing: ae(s?.textStyle),
    };
  });
}
function Aa(e, t) {
  return {
    id: e,
    type: T.ELEMENT_TYPE_TEXT,
    paragraphs: t,
    effects: [],
    children: [],
    levelsStyles: [],
    citations: [],
  };
}
function ja(e, t, n, r) {
  let i = new Map(),
    a = new Map();
  for (let o of e.footnotes ?? []) {
    if (o.id === void 0 || o.id.length === 0) continue;
    let e = ka([Aa(`docx-footnote-${o.id}`, o.paragraphs ?? [])], t, n, r)[0];
    if (e) {
      i.set(o.id, e.element);
      for (let e of o.referenceRunIds ?? []) {
        let t = a.get(e);
        if (t) {
          t.push(o.id);
          continue;
        }
        a.set(e, [o.id]);
      }
    }
  }
  return { elementById: i, idsByReferenceRunId: a, layoutByKey: new Map() };
}
function Ma() {
  return { ids: [], idSet: new Set() };
}
function Na(e, t) {
  if (!e) return [];
  let n = [],
    r = new Set();
  for (let i of e.segments) {
    let e = i.run.id;
    if (e === void 0) continue;
    let a = t.idsByReferenceRunId.get(e);
    if (a) for (let e of a) r.has(e) || (r.add(e), n.push(e));
  }
  return n;
}
function Pa(e, t, n, r) {
  let i = [],
    a = new Set();
  for (let o = t; o < n; o += 1) for (let t of Na(e[o], r)) a.has(t) || (a.add(t), i.push(t));
  return i;
}
function Fa(e, t) {
  return `${Math.round(t * 1e3)}|${e.join(`,`)}`;
}
function Ia(e, t) {
  return `${Math.round(e * 1e3)}|${t ?? ``}`;
}
function La(e, t, n, r) {
  let i = Fa(t, n),
    a = e.layoutByKey.get(i);
  if (a) return a;
  let o = [];
  for (let n of t) {
    let t = e.elementById.get(n);
    t && o.push(...(t.paragraphs ?? []));
  }
  let s = Aa(`docx-footnotes-${t.join(`-`)}`, o),
    c = zo(s, n, r),
    l = c.reduce((e, t) => e + Math.max(1, t.heightPx), 0),
    u = { element: s, lines: c, textHeightPx: l, reservedHeightPx: l > 0 ? l + ys : 0 };
  return (e.layoutByKey.set(i, u), u);
}
function Ra(e, t, n, r) {
  return e.ids.length === 0 ? 0 : La(t, e.ids, n.contentWidthPx, r).reservedHeightPx;
}
function za(e, t, n, r) {
  return n.contentBottomPx - Ra(e, t, n, r);
}
function Ba(e, t, n = Qr, r) {
  let i = Ia(t, r),
    a = e.linesByWidth.get(i);
  if (a) return a;
  let o = e.kind === `text` ? zo(e.element, t, n, e.defaultTabStopTwips, r) : [];
  return (e.linesByWidth.set(i, o), o);
}
function Va(e, t, n, r = Qr, i) {
  let a = Ia(n, i),
    o = e.measurementsByWidth.get(a);
  if (o) return o;
  let s = ko(e.element, e.kind, t, n, r, i);
  return (e.measurementsByWidth.set(a, s), s);
}
function Ha(e, t, n, r = Qr, i) {
  let a = Ti(e.element, n),
    o = Ia(a, i),
    s = e.tableMeasurementsByWidth.get(o);
  if (s) return s;
  let c = Ai(e.element, t, a, r, i);
  return (e.tableMeasurementsByWidth.set(o, c), c);
}
function Ua(e, t, n) {
  let r = t.columns.xPositions[n] ?? t.contentLeftPx,
    i = t.columns.widths[n] ?? t.contentWidthPx;
  if (e.kind === `table`) {
    let n = Ka(e.element, t);
    if (n !== void 0) return n;
    let a = Wa(e.element, r, i);
    return a === void 0 ? Ei(e.element, r) : a;
  }
  if ($i(e.kind)) {
    let n = Ka(e.element, t);
    if (n !== void 0) return n;
    let a = Wa(e.element, r, i);
    return a === void 0 ? ci(e.element, r) : a;
  }
  return r;
}
function Wa(e, t, n) {
  if (!ia(e)) return;
  let r = e.placement;
  if (r === void 0) return;
  let i = r.horizontalAlignment?.trim().toLowerCase();
  if (!i) return;
  let a = si(e).widthPx;
  return i === `center` ? t + Math.max(0, (n - a) / 2) : i === `right` ? t + Math.max(0, n - a) : t;
}
function Ga(e, t, n) {
  let r = na(t.element) && !ta(t.element);
  if (!r && !ra(t.element)) return;
  let { leftPx: i, rightPx: a, topPx: o, bottomPx: s } = se(t.element);
  Ri(e, {
    leftPx: n.xPx - i,
    rightPx: n.xPx + n.widthPx + a,
    topPx: n.yPx - o,
    bottomPx: n.yPx + n.heightPx + s,
    emptyTextOnly: r,
  });
}
function Ka(e, t) {
  if (e.placement?.type !== gs) return;
  let n = e.placement.horizontalRelativeFrom?.trim().toLowerCase(),
    r = e.bbox?.widthEmu !== void 0 && e.bbox.widthEmu > 0 ? e.bbox.widthEmu * U : 0;
  if (e.placement.xOffsetEmu !== void 0 && Number.isFinite(e.placement.xOffsetEmu)) {
    let r = e.placement.xOffsetEmu * U;
    return n === `page` ? r : t.contentLeftPx + r;
  }
  let i = e.placement.horizontalAlignment?.trim().toLowerCase();
  if (!i) return;
  let a = n === `page`,
    o = a ? 0 : t.contentLeftPx,
    s = a ? t.pageWidthPx : t.contentWidthPx;
  return i === `center` ? o + Math.max(0, (s - r) / 2) : i === `right` ? o + Math.max(0, s - r) : o;
}
function qa(e) {
  return e.firstParagraphSpaceBeforePx > 0 || e.lastParagraphSpaceAfterPx > 0;
}
function Ja({ lineIndex: e, trailingSpaceAfterPx: t, firstParagraphSpaceBeforePx: n }) {
  return e === 0 ? Ne(t, n) : 0;
}
function Ya(e) {
  return e ? e.segments.some((e) => (e.text ?? ``).trim().length > 0) : !1;
}
function Xa(e, t, n) {
  let r = (r) => {
      let i = t,
        a = 0,
        o = !1;
      for (; i < e.length;) {
        let t = e[i],
          s = Math.max(1, t?.heightPx ?? 0);
        if (a + s > n + ds) break;
        if (((a += s), (i += 1), r && t?.flowBreakAfter)) {
          o = !0;
          break;
        }
      }
      return { nextLineIndex: i, fragmentHeightPx: a, endsWithFlowBreak: o };
    },
    i = r(!0);
  if (!i.endsWithFlowBreak) return i;
  let a = r(!1);
  return a.nextLineIndex < e.length ? a : i;
}
function Za({
  lines: e,
  startIndex: t,
  currentY: n,
  boundaryBottomPx: r,
  pageContentBottomPx: i,
  pageFootnoteIds: a,
  preparedFootnotes: o,
  footnoteWidthPx: s,
  theme: c,
}) {
  if (o.idsByReferenceRunId.size === 0) return Xa(e, t, Math.max(0, r - n));
  let l = t,
    u = 0,
    d = !1,
    f = [...a],
    p = new Set(f);
  for (; l < e.length;) {
    let t = e[l],
      a = [...f],
      m = new Set(p);
    for (let e of Na(t, o)) m.has(e) || (a.push(e), m.add(e));
    let h = a.length > 0 ? La(o, a, s, c).reservedHeightPx : 0,
      g = Math.min(r, i - h),
      _ = Math.max(0, g - n),
      v = Math.max(1, t?.heightPx ?? 0);
    if (u + v > _ + ds) break;
    if (((u += v), (l += 1), (f = a), (p = m), t?.flowBreakAfter)) {
      d = !0;
      break;
    }
  }
  return { nextLineIndex: l, fragmentHeightPx: u, endsWithFlowBreak: d };
}
function Qa(e) {
  return typeof e == `number` && Number.isFinite(e) && e > 1 ? Math.floor(e) : 1;
}
function $a(e, t, n) {
  let r = 0;
  for (let i = t; i < n; i += 1) r += Math.max(1, e[i] ?? 0);
  return r;
}
function eo(e, t, n) {
  if (n <= t) return !1;
  for (let r = t; r < n; r += 1) {
    let t = e[r];
    if (t)
      for (let i of t.cells) {
        let t = Qa(i.rowSpan);
        if (Math.min(e.length, r + t) > n) return !1;
      }
  }
  return !0;
}
function to(e, t, n) {
  let r = e.length - t,
    i = Math.max(1, Math.min(n, r));
  for (let n = t + i; n <= e.length; n += 1) if (eo(e, t, n)) return n - t;
  return i;
}
function no(e) {
  let t = e.table;
  if (!t || t.rows.length <= 1 || t.properties?.firstRow !== !0) return 0;
  let n = t.rows[0];
  return n ? +!n.cells.some((e) => Qa(e.rowSpan) > 1) : 0;
}
function ro(e, t, n, r) {
  let i = e.table;
  if (!i) return e;
  let a = t > 0 && r > 0 ? i.rows.slice(0, r) : [],
    o = i.rows.slice(t, t + n);
  return {
    ...e,
    bbox: e.bbox ? { ...e.bbox, heightEmu: void 0 } : e.bbox,
    table: { ...i, rows: [...a, ...o] },
  };
}
function io({
  preparedElement: e,
  rowOffset: t,
  availableHeight: n,
  isFreshPageSlot: r,
  ctx: i,
  widthPx: a,
  theme: o,
  documentGridLinePitchTwips: s,
}) {
  let c = e.element.table;
  if (!c || c.rows.length === 0 || t >= c.rows.length)
    return { rowCount: 0, widthPx: a, heightPx: 0 };
  let l = c.rows,
    u = Ha(e, i, a, o, s),
    d = c.properties?.keepTogether === !0,
    f = no(e.element),
    p = t > 0 ? $a(u.rowHeightsPx, 0, f) : 0,
    m = t === 0 && f > 0 && c.rows.length > f ? f + 1 : 1,
    h = Math.min(m, c.rows.length - t);
  if (d) {
    let s = c.rows.length - t,
      l = p + $a(u.rowHeightsPx, t, c.rows.length);
    if (!r && l > n + ds) return { rowCount: 0, widthPx: u.widthPx, heightPx: 0 };
    let d = ro(e.element, t, s, f),
      m = ko(d, `table`, i, a, o);
    return {
      element: d,
      rowCount: s,
      widthPx: m.widthPx,
      heightPx: m.heightPx > 0 ? m.heightPx : l,
    };
  }
  let g = p,
    _ = 0,
    v = 0;
  for (let e = t; e < c.rows.length; e += 1) {
    g += Math.max(1, u.rowHeightsPx[e] ?? 0);
    let r = e - t + 1;
    if (g > n + ds) break;
    r >= h && eo(l, t, e + 1) && ((_ = r), (v = g));
  }
  if (_ === 0) {
    if (!r) return { rowCount: 0, widthPx: u.widthPx, heightPx: 0 };
    ((_ = to(l, t, h)), (v = p + $a(u.rowHeightsPx, t, t + _)));
  }
  let y = ro(e.element, t, _, f),
    b = ko(y, `table`, i, a, o);
  return { element: y, rowCount: _, widthPx: b.widthPx, heightPx: b.heightPx > 0 ? b.heightPx : v };
}
function ao(e) {
  if ((e.paragraphs?.length ?? 0) !== 1) return !1;
  let t = e.paragraphs?.[0];
  return t ? (t.runs ?? []).every((e) => (e.text ?? ``).trim().length === 0) : !1;
}
function oo(e, t) {
  return ao(e) ? t.length > 0 && t.every((e) => !Ya(e)) : !1;
}
function so(e) {
  let t = e.paragraphs ?? [];
  return t.length === 1 && t[0]?.docxSectionBreakCarrier === !0 && ao(e);
}
function co(e) {
  return e
    ? e.segments.length === 0 &&
        e.widthPx === 0 &&
        e.baselineOffsetPx === 0 &&
        e.maxAscentPx === 0 &&
        e.maxDescentPx === 0
    : !1;
}
function lo({
  lineIndex: e,
  lines: t,
  previousElementWasEmptyParagraph: n,
  previousEmptyParagraphHasSpacing: r,
  firstParagraphSpaceBeforePx: i,
}) {
  return e !== 0 || i <= 0 || !co(t[0]) ? !1 : n && r;
}
function uo(e, t) {
  let n = e[t];
  return n
    ? !ea(n.kind) || !(ta(n.element) || na(n.element) || (ra(n.element) && !fi(n.element)))
    : !1;
}
function fo(e, t, n, r, i, a = Qr, o) {
  let s = 0;
  for (let c = n + 1; c < t.length; c += 1) {
    let n = t[c];
    if (!n || !uo(t, c)) continue;
    if (n.kind !== `text`) return s + Va(n, r, i, a, o).heightPx;
    let l = Ba(n, i, a, o),
      u = oo(n.element, l),
      d = Zi({
        previousParagraphStyleId: e.lastParagraphStyleId,
        currentParagraphStyleId: n.firstParagraphStyleId,
        currentParagraphUsesContextualSpacing: n.firstParagraphUsesContextualSpacing,
      });
    if (!u && n.firstParagraphSpaceBeforePx <= 0 && s <= 0) return;
    let f =
      lo({
        lineIndex: 0,
        lines: l,
        previousElementWasEmptyParagraph: !0,
        previousEmptyParagraphHasSpacing: qa(e),
        firstParagraphSpaceBeforePx: n.firstParagraphSpaceBeforePx,
      }) || d
        ? 1
        : 0;
    if (f >= l.length) return s;
    let p = l.slice(f).reduce((e, t) => e + Math.max(1, t.heightPx), 0);
    if (u) {
      s += p;
      continue;
    }
    return s + p;
  }
}
function po({
  preparedElements: e,
  settings: t,
  sectionStartY: n,
  columnBottomPx: r,
  initialOccupiedRegions: i,
  sectionIndex: a,
  ctx: o,
  theme: s,
}) {
  if (r <= n) return;
  let c = [],
    l = 0,
    u = Hi(t, n),
    d = Ui(t),
    f = Wi(t),
    p = Wi(t),
    m = Gi(t),
    h = new Map(),
    g = Ki(t),
    _ = Pi(i),
    v = 0,
    y = !1,
    b = !1,
    x,
    S = new Map();
  for (let i = 0; i < e.length; i += 1) {
    let C = e[i];
    if (C.docxSectionBreakCarrier) {
      ((d[l] = C.lastParagraphSpaceAfterPx),
        (f[l] = !1),
        (p[l] = !1),
        (m[l] = void 0),
        (v = C.lastParagraphSpaceAfterPx),
        (y = !1),
        (b = !1),
        (x = void 0));
      continue;
    }
    if (C.kind !== `text`) {
      let e = !1;
      for (; !e;) {
        let w = t.columns.widths[l] ?? t.contentWidthPx,
          T = u[l] ?? n,
          E = T === n,
          D = T + (d[l] ?? 0),
          O = Va(C, o, w, s, t.documentGridLinePitchTwips),
          k = oa(C, D, h, g[l]),
          A = ua(C, D, k, O.heightPx);
        if (A > r) {
          if (!E && l < t.columns.widths.length - 1) {
            l += 1;
            continue;
          }
          return;
        }
        (c.push({
          kind: C.kind,
          element: C.element,
          xPx: Ua(C, t, l),
          yPx: k,
          widthPx: O.widthPx,
          heightPx: O.heightPx,
          flow: Ji({
            settings: t,
            sectionIndex: a,
            sourceElementIndex: i,
            fragmentIndex: Yi(S, i),
            columnIndex: l,
            balanced: !0,
          }),
        }),
          Ga(_, C, { xPx: Ua(C, t, l), yPx: k, widthPx: O.widthPx, heightPx: O.heightPx }),
          (u[l] = A),
          (d[l] = 0),
          (f[l] = !1),
          (p[l] = !1),
          (m[l] = void 0),
          (v = 0),
          (y = !1),
          (b = !1),
          (x = void 0),
          (e = !0));
      }
      continue;
    }
    let w = 0,
      T = !1;
    for (; !T;) {
      let e = t.columns.widths[l] ?? t.contentWidthPx,
        o = u[l] ?? n,
        E = Ba(C, e, s, t.documentGridLinePitchTwips);
      if (E.length === 0 || w >= E.length) {
        (Qi(C.element, o, h), (g[l] = o), (T = !0));
        break;
      }
      let D = f[l] ?? !1,
        O = p[l] ?? !1,
        k = lo({
          lineIndex: w,
          lines: E,
          previousElementWasEmptyParagraph: D,
          previousEmptyParagraphHasSpacing: O,
          firstParagraphSpaceBeforePx: C.firstParagraphSpaceBeforePx,
        }),
        A = Zi({
          previousParagraphStyleId: m[l],
          currentParagraphStyleId: C.firstParagraphStyleId,
          currentParagraphUsesContextualSpacing: C.firstParagraphUsesContextualSpacing,
        }),
        j = k || (A && w === 0 && co(E[0])),
        M = j && w === 0 ? 1 : w;
      if (M >= E.length) {
        (Qi(C.element, o, h), (g[l] = o), (T = !0));
        break;
      }
      let ee = oo(C.element, E),
        te = Ja({
          lineIndex: M,
          trailingSpaceAfterPx: A ? 0 : (d[l] ?? 0),
          firstParagraphSpaceBeforePx: j ? 0 : C.firstParagraphSpaceBeforePx,
        }),
        ne = zi(
          _,
          t.columns.xPositions[l] ?? t.contentLeftPx,
          e,
          o - te,
          r,
          Math.max(1, E[M]?.heightPx ?? 0),
          ee,
        ),
        N = ne.currentY,
        re = Math.max(0, ne.boundaryBottomPx - N),
        ie = o === n,
        { nextLineIndex: ae, fragmentHeightPx: P, endsWithFlowBreak: oe } = Xa(E, M, re);
      if (ae === M) {
        if (!ie) {
          if (l < t.columns.widths.length - 1) {
            l += 1;
            continue;
          }
          return;
        }
        if (((P = Math.max(1, E[M]?.heightPx ?? 0)), P > re)) return;
        ((ae = Math.min(E.length, M + 1)), (oe = !1));
      }
      if (
        (c.push({
          kind: `text`,
          element: C.element,
          xPx: t.columns.xPositions[l] ?? t.contentLeftPx,
          yPx: N,
          widthPx: e,
          heightPx: P,
          flow: Ji({
            settings: t,
            sectionIndex: a,
            sourceElementIndex: i,
            fragmentIndex: Yi(S, i),
            columnIndex: l,
            lineStartIndex: M + 1,
            lineEndIndex: ae,
            balanced: !0,
          }),
          textLines: E.slice(M, ae),
        }),
        w === 0 && (Qi(C.element, N, h), (g[l] = N)),
        (u[l] = N + P),
        (w = ae),
        (d[l] = 0),
        oe && w < E.length)
      ) {
        if (l < t.columns.widths.length - 1) {
          l += 1;
          continue;
        }
        return;
      }
      if (w >= E.length) {
        let e = (C.element.paragraphs?.length ?? 0) > 1 ? us : 0;
        ((u[l] = (u[l] ?? n) + e),
          (d[l] = e > 0 ? 0 : C.lastParagraphSpaceAfterPx),
          (f[l] = oo(C.element, E)),
          (p[l] = f[l] === !0 && qa(C)),
          (m[l] = C.lastParagraphStyleId),
          (v = d[l] ?? 0),
          (y = f[l] ?? !1),
          (b = p[l] ?? !1),
          (x = C.lastParagraphStyleId),
          (T = !0));
        break;
      }
      if ((u[l] ?? n) >= r) {
        if (l < t.columns.widths.length - 1) {
          l += 1;
          continue;
        }
        return;
      }
    }
  }
  return {
    bodyElements: c,
    endY: Math.max(...u),
    trailingSpaceAfterPx: v,
    previousEmptyParagraph: y,
    previousEmptyParagraphHasSpacing: b,
    previousParagraphStyleId: x,
    occupiedRegions: _,
  };
}
function mo({
  preparedElements: e,
  settings: t,
  sectionStartY: n,
  initialOccupiedRegions: r,
  sectionIndex: i,
  ctx: a,
  theme: o,
}) {
  if (e.length === 0)
    return {
      bodyElements: [],
      endY: n,
      trailingSpaceAfterPx: 0,
      previousEmptyParagraph: !1,
      previousEmptyParagraphHasSpacing: !1,
      previousParagraphStyleId: void 0,
      occupiedRegions: Pi(r),
    };
  let s = Math.floor(t.contentBottomPx - n);
  if (s <= 0) return;
  let c = 1,
    l = s,
    u,
    d;
  for (; c <= l;) {
    let s = Math.floor((c + l) / 2),
      f = po({
        preparedElements: e,
        settings: t,
        sectionStartY: n,
        columnBottomPx: Math.min(t.contentBottomPx, n + s),
        initialOccupiedRegions: r,
        sectionIndex: i,
        ctx: a,
        theme: o,
      });
    f ? ((u = f), (d = s), (l = s - 1)) : (c = s + 1);
  }
  if (!(!u || d === void 0)) return u;
}
function ho(e) {
  let t = e.pageSetup?.pageMargin ?? ls;
  return {
    topPx: xi(t.top ?? ls.top),
    bottomPx: xi(t.bottom ?? ls.bottom),
    leftPx: xi(t.left ?? ls.left),
    rightPx: xi(t.right ?? ls.right),
    headerPx: xi(t.header ?? ls.header),
    footerPx: xi(t.footer ?? ls.footer),
  };
}
function go(e) {
  return (e ?? ``).includes(ps);
}
function _o(e, t, n) {
  return n % 2 != 0 || !go(e) ? 0 : t.margins.rightPx - t.margins.leftPx;
}
function vo(e, t = 0) {
  return {
    key: e.key,
    margins: {
      topPx: e.margins.topPx,
      bottomPx: e.margins.bottomPx,
      leftPx: e.margins.leftPx,
      rightPx: e.margins.rightPx,
      headerPx: e.margins.headerPx,
      footerPx: e.margins.footerPx,
    },
    contentFrame: {
      xPx: e.contentLeftPx + t,
      yPx: e.contentTopPx,
      widthPx: e.contentWidthPx,
      heightPx: e.contentBottomPx - e.contentTopPx,
    },
    columns: e.columns.widths.map((n, r) => ({
      index: r + 1,
      frame: {
        xPx: (e.columns.xPositions[r] ?? e.contentLeftPx) + t,
        yPx: e.contentTopPx,
        widthPx: n,
        heightPx: e.contentBottomPx - e.contentTopPx,
      },
    })),
    documentGrid: e.documentGrid,
    mirrorMarginXOffsetPx: t,
  };
}
function yo(e, t) {
  return { ...e, xPx: e.xPx + t };
}
function bo(e, t) {
  return e?.columnFrame ? { ...e, columnFrame: yo(e.columnFrame, t) } : e;
}
function xo(e, t) {
  return { ...e, xPx: e.xPx + t, flow: bo(e.flow, t), children: e.children?.map((e) => xo(e, t)) };
}
function So(e, t, n, r = {}) {
  let i = _o(e.sectionId, t, n),
    a =
      Math.abs(i) < 0.01
        ? e
        : {
            ...e,
            layout: vo(t, i),
            headerElements: e.headerElements.map((e) => xo(e, i)),
            bodyElements: e.bodyElements.map((e) => xo(e, i)),
            footerElements: e.footerElements.map((e) => xo(e, i)),
            pageNumberElement: e.pageNumberElement ? xo(e.pageNumberElement, i) : void 0,
          };
  return r.layoutMode === `pageless` ? Co(a, t, r) : a;
}
function Co(e, t, n) {
  let r = wo(e.bodyElements),
    i = Math.max(t.contentTopPx, r),
    a = Math.ceil(Math.max(t.basePageHeightPx, n.pagelessMinHeightPx ?? 0, i + t.margins.bottomPx)),
    o = Math.max(1, a - t.contentTopPx - t.margins.bottomPx);
  return {
    ...e,
    heightPx: a,
    layout: {
      ...e.layout,
      contentFrame: { ...e.layout.contentFrame, heightPx: o },
      columns: e.layout.columns.map((e) => ({ ...e, frame: { ...e.frame, heightPx: o } })),
    },
  };
}
function wo(e) {
  let t = 0,
    n = (e) => {
      t = Math.max(t, e.yPx + e.heightPx);
      for (let t of e.children ?? []) n(t);
    };
  for (let t of e) n(t);
  return t;
}
function To(e, t, n) {
  let r = Math.max(1, e.columns?.count ?? 1),
    i = xi(e.columns?.space ?? 0),
    a = (e.columns?.widths ?? []).map((e) => Math.max(0, xi(e))),
    o = [],
    s = [];
  if (a.length >= r && a.some((e) => e > 0)) {
    let e = a.slice(0, r).reduce((e, t) => e + t, 0),
      t = Math.max(1, n - i * (r - 1)),
      s = e > 0 ? t / e : 1;
    for (let e = 0; e < r; e += 1) {
      let t = a[e] ?? 0;
      o.push(Math.max(1, t * s));
    }
  } else {
    let e = Math.max(1, n - i * (r - 1)) / r;
    for (let t = 0; t < r; t += 1) o.push(e);
  }
  let c = t;
  for (let e of o) (s.push(c), (c += e + i));
  return { xPositions: s, widths: o };
}
function Eo(e) {
  switch (e) {
    case `lines`:
    case `linesAndChars`:
    case `snapToChars`:
      return !0;
    default:
      return !1;
  }
}
function Do(e) {
  let t = e.documentGrid;
  if (!t) return;
  let n = t.linePitch !== void 0 && t.linePitch > 0 ? t.linePitch : void 0,
    r = n !== void 0 && Eo(t.type) ? n : void 0;
  return {
    type: t.type,
    linePitchTwips: n,
    linePitchPx: n === void 0 ? void 0 : xi(n),
    charSpaceTwips: t.charSpace,
    activeLinePitchTwips: r,
    activeLinePitchPx: r === void 0 ? void 0 : xi(r),
  };
}
function Oo(e) {
  if (e?.activeLinePitchTwips !== void 0) return e.activeLinePitchTwips;
}
function ko(e, t, n, r, i, a) {
  if (t === `table`) {
    let t = Ti(e, r);
    return { widthPx: t, heightPx: Di(e, n, t, i, a) };
  }
  if (t === `image`) {
    let t = pi(e);
    return { widthPx: t.widthPx, heightPx: t.heightPx };
  }
  return t === `shape` || t === `chart` || t === `group`
    ? si(e, { widthPx: Math.max(1, Math.min(r, 180)), heightPx: 120 })
    : { widthPx: r, heightPx: Xr(e, n, r, i) };
}
function Ao(e, t) {
  return e.bbox?.widthEmu !== void 0 && e.bbox.widthEmu > 0
    ? Math.max(1, e.bbox.widthEmu * U)
    : Math.max(1, t);
}
function jo(e, t, n, r, i, a) {
  return (e.children ?? []).map((e) => {
    let o = Vi(e),
      s = ko(e, o, i, Ao(e, r), a),
      c = {
        kind: o,
        element: e,
        xPx: t + ci(e, 0),
        yPx: n + li(e, 0),
        widthPx: s.widthPx,
        heightPx: s.heightPx,
      };
    return (o === `group` && (c.children = jo(e, c.xPx, c.yPx, c.widthPx, i, a)), c);
  });
}
function Mo(e) {
  return e.type === T.ELEMENT_TYPE_TEXT || e.type === T.ELEMENT_TYPE_TEXT_GROUP;
}
function No(e) {
  let t = new Map();
  for (let n of e.table?.rows ?? [])
    for (let e of n.cells ?? [])
      for (let n of e.elements ?? []) Mo(n) || (n.id && n.id.length > 0 && t.set(n.id, n));
  return t;
}
function Po(e, t) {
  let n = e.bbox?.widthEmu === 0,
    r = e.bbox?.heightEmu === 0;
  return {
    ...e,
    bbox: {
      ...e.bbox,
      xEmu: Si(t.xPx),
      yEmu: Si(t.yPx),
      widthEmu: n ? 0 : Si(t.widthPx),
      heightEmu: r ? 0 : Si(t.heightPx),
    },
  };
}
function Fo(e, t, n, r, i, a, o, s) {
  if (!e.table || e.table.rows.length === 0) return [];
  let c = F(
      Kr({ ...Po(e, { xPx: t, yPx: n, widthPx: r, heightPx: i }), type: T.ELEMENT_TYPE_TABLE }),
      a,
      o,
      {
        paragraphSpacingUnit: `twips`,
        explicitRowHeightBehavior: `atLeast`,
        autoRowMinimumHeightPx: 0,
        fitColumnWidthsToFrame: !0,
        drawDefaultCellBorders: !1,
        collapseParagraphBoundarySpacing: !1,
        documentGridLinePitchTwips: s?.documentGridLinePitchTwips,
      },
    ),
    l = No(e),
    u = [];
  if (!c) return u;
  for (let e of c.cellElementFrames ?? []) {
    let t = l.get(e.elementId);
    if (!t) continue;
    let n = Vi(t);
    u.push(Io(t, n, e.xPx, e.yPx, e.widthPx, e.heightPx, a, o, void 0, s));
  }
  return u;
}
function Io(e, t, n, r, i, a, o, s, c, l) {
  let u = { kind: t, element: e, xPx: n, yPx: r, widthPx: i, heightPx: a, flow: l, textLines: c };
  return (
    t === `group` && (u.children = jo(e, n, r, i, o, s)),
    t === `table` && (u.children = Fo(e, n, r, i, a, o, s, l)),
    u
  );
}
function Lo(e, t, n, r, i, a) {
  if (
    ((e.bodyElements = e.bodyElements.filter((e) => e.flow?.noteKind !== `footnote`)),
    t.ids.length === 0)
  )
    return;
  let o = La(n, t.ids, r.contentWidthPx, a);
  o.textHeightPx <= 0 ||
    e.bodyElements.push(
      Io(
        o.element,
        `text`,
        r.contentLeftPx,
        r.contentBottomPx - o.textHeightPx,
        r.contentWidthPx,
        o.textHeightPx,
        i,
        a,
        o.lines,
        { noteKind: `footnote`, noteIds: [...t.ids] },
      ),
    );
}
function Ro(e, t, n, r, i, a, o, s, c) {
  let l = !1;
  for (let e of Pa(r, i, a, n)) t.idSet.has(e) || (t.idSet.add(e), t.ids.push(e), (l = !0));
  l && Lo(e, t, n, o, s, c);
}
function zo(e, t, n = Qr, r, i) {
  return (
    lt(e, n, {
      bboxPx: { x: 0, y: 0, width: Math.max(1, t), height: 1e5 },
      paddingPx: { left: 0, right: 0, top: 0, bottom: 0 },
      wrap: !0,
      paragraphSpacingUnit: `twips`,
      defaultTabStopTwips: r,
      documentGridLinePitchTwips: i,
    })?.lines ?? []
  );
}
function Bo(e, t, n, r, i) {
  let a = [],
    o = t,
    s = new Map(),
    c;
  for (let [t, l] of e.entries()) {
    let u = Vi(l),
      d = ko(l, u, r, n.contentWidthPx, i),
      f =
        u === `table`
          ? (Ka(l, n) ?? Ei(l, n.contentLeftPx))
          : $i(u)
            ? (Ka(l, n) ?? ci(l, n.contentLeftPx))
            : n.contentLeftPx,
      p = u === `text` ? o : oa({ element: l, kind: u }, o, s, c);
    if ((a.push(Io(l, u, f, p, d.widthPx, d.heightPx, r, i)), u === `text`)) {
      (Qi(l, p, s), (c = p), (o += d.heightPx), t < e.length - 1 && (o += us));
      continue;
    }
    let m = ua({ element: l, kind: u }, o, p, d.heightPx);
    m > o && ((o = m), t < e.length - 1 && (o += us));
  }
  return { elements: a, totalHeightPx: Math.max(0, o - t) };
}
function Vo(e, t, n = {}) {
  let r = e.pageSetup?.widthEmu || t.widthEmu || os,
    i = e.pageSetup?.heightEmu || t.heightEmu || ss,
    a = Math.max(1, xi(r)),
    o = Math.max(1, xi(i)),
    s = n.layoutMode === `pageless` ? Math.max(o, cs) : o,
    c = ho(e),
    l = c.leftPx,
    u = Math.max(1, a - c.leftPx - c.rightPx),
    d = c.topPx,
    f = Math.max(d, s - c.bottomPx),
    p = To(e, l, u),
    m = Do(e),
    h = Oo(m),
    g = e.pageSetup?.pageMargin ?? ls;
  return {
    pageWidthPx: a,
    pageHeightPx: s,
    basePageHeightPx: o,
    margins: c,
    contentLeftPx: l,
    contentWidthPx: u,
    contentTopPx: d,
    contentBottomPx: f,
    columns: p,
    documentGrid: m,
    documentGridLinePitchTwips: h,
    key: [
      n.layoutMode ?? `paged`,
      r,
      n.layoutMode === `pageless` ? s : i,
      g.top ?? ls.top,
      g.bottom ?? ls.bottom,
      g.left ?? ls.left,
      g.right ?? ls.right,
      g.header ?? ls.header,
      g.footer ?? ls.footer,
      m?.type ?? `no-grid-type`,
      m?.linePitchTwips ?? `no-grid-line-pitch`,
      m?.charSpaceTwips ?? `no-grid-char-space`,
      h ?? `no-grid`,
      go(e.id) ? `mirror` : `plain`,
    ].join(`:`),
  };
}
function Ho(e) {
  return (
    e.startsWithPageBreak === !0 ||
    e.breakType === rn.SECTION_BREAK_TYPE_NEXT_PAGE ||
    e.breakType === rn.SECTION_BREAK_TYPE_EVEN_PAGE ||
    e.breakType === rn.SECTION_BREAK_TYPE_ODD_PAGE
  );
}
function Uo(e) {
  return (e.elements ?? []).some(
    (e) =>
      Vi(e) !== `text` ||
      (e.paragraphs ?? []).some((e) =>
        (e.runs ?? []).some((e) => (e.text ?? ``).trim().length > 0),
      ),
  );
}
function Wo(e) {
  return !Ho(e) || Uo(e) ? !1 : (e.elements?.length ?? 0) > 0;
}
function Go(e, t) {
  let n = [],
    r = !1;
  for (let i of e) {
    if (Wo(i)) {
      r ||= Ho(i);
      continue;
    }
    let e = n[n.length - 1],
      a = e ? Vo(e, t) : void 0,
      o = Vo(i, t),
      s =
        !r &&
        e !== void 0 &&
        Ho(i) &&
        a?.key === o.key &&
        !fa(a.columns, o.columns) &&
        !i.pageSetup &&
        !i.header &&
        !i.footer &&
        !i.firstHeader &&
        !i.firstFooter &&
        !i.differentFirstPage;
    (n.push(s ? { ...i, breakType: rn.SECTION_BREAK_TYPE_UNSPECIFIED } : i), (r = !1));
  }
  return n;
}
function Ko(e, t) {
  if (e) {
    for (let n of e.split(`;`)) if (n.startsWith(t)) return n.slice(t.length);
  }
}
function qo(e) {
  switch (e) {
    case `decimal`:
    case `upperRoman`:
    case `lowerRoman`:
    case `upperLetter`:
    case `lowerLetter`:
      return e;
    default:
      return;
  }
}
function Jo(e) {
  let t = e.pageSetup;
  if (t?.pageNumbers) return t.pageNumbers;
  let n = Ko(e.id, ms),
    r = n ? Number.parseInt(n, 10) : void 0,
    i = r !== void 0 && Number.isFinite(r) && r > 0 ? r : void 0,
    a = qo(Ko(e.id, hs));
  return i !== void 0 || a !== void 0 ? { start: i, formatType: a } : void 0;
}
function Yo(e, t) {
  let n = Jo(t);
  n &&
    (n.formatType && (e.formatType = n.formatType),
    n.start === void 0 ? e.nextValue === void 0 && (e.nextValue = 1) : (e.nextValue = n.start));
}
function Xo(e, t) {
  let n = t ?? `decimal`;
  return n === `upperRoman`
    ? Zo(e).toUpperCase()
    : n === `lowerRoman`
      ? Zo(e).toLowerCase()
      : n === `upperLetter`
        ? Qo(e).toUpperCase()
        : n === `lowerLetter`
          ? Qo(e).toLowerCase()
          : String(e);
}
function Zo(e) {
  let t = [
      [1e3, `M`],
      [900, `CM`],
      [500, `D`],
      [400, `CD`],
      [100, `C`],
      [90, `XC`],
      [50, `L`],
      [40, `XL`],
      [10, `X`],
      [9, `IX`],
      [5, `V`],
      [4, `IV`],
      [1, `I`],
    ],
    n = Math.max(1, Math.floor(e)),
    r = ``;
  for (let [e, i] of t) for (; n >= e;) ((r += i), (n -= e));
  return r;
}
function Qo(e) {
  let t = Math.max(1, Math.floor(e)),
    n = ``;
  for (; t > 0;) (--t, (n = String.fromCharCode(65 + (t % 26)) + n), (t = Math.floor(t / 26)));
  return n;
}
function $o(e, t) {
  return e.some((e) => es(e, t));
}
function es(e, t) {
  return (e.paragraphs ?? []).some((e) => (e.runs ?? []).some((e) => (e.text ?? ``).includes(t))) ||
    (e.children ?? []).some((e) => es(e, t))
    ? !0
    : (e.table?.rows ?? []).some((e) =>
        e.cells.some((e) =>
          (e.text ?? ``).includes(t) ||
          (e.paragraphs ?? []).some((e) => (e.runs ?? []).some((e) => (e.text ?? ``).includes(t)))
            ? !0
            : (e.elements ?? []).some((e) => es(e, t)),
        ),
      );
}
function ts(e, t) {
  let n = (e) => e.replaceAll(ei, t.currentPageText ?? ``).replaceAll(ti, t.totalPagesText ?? ``);
  return e.map((e) => ns(e, n));
}
function ns(e, t) {
  return {
    ...e,
    paragraphs: (e.paragraphs ?? []).map((e) => ({
      ...e,
      runs: (e.runs ?? []).map((e) => ({ ...e, text: t(e.text ?? ``) })),
    })),
    children: (e.children ?? []).map((e) => ns(e, t)),
    table: e.table
      ? {
          ...e.table,
          rows: e.table.rows.map((e) => ({
            ...e,
            cells: e.cells.map((e) => ({
              ...e,
              text: e.text ? t(e.text) : e.text,
              paragraphs: (e.paragraphs ?? []).map((e) => ({
                ...e,
                runs: (e.runs ?? []).map((e) => ({ ...e, text: t(e.text ?? ``) })),
              })),
              elements: (e.elements ?? []).map((e) => ns(e, t)),
            })),
          })),
        }
      : e.table,
  };
}
function rs(e, t) {
  let n = Math.max(t.contentTopPx, t.pageHeightPx - t.margins.footerPx - 18);
  return {
    kind: `text`,
    element: {
      id: ``,
      type: T.ELEMENT_TYPE_TEXT,
      paragraphs: [
        {
          id: ``,
          runs: [{ id: ``, text: e, citations: [], reviewMarkIds: [] }],
          textStyle: {
            alignment: y.ALIGNMENT_TYPE_CENTER,
            fontSize: 1e3,
            name: `Times New Roman`,
            typeface: `Times New Roman`,
          },
          inlineNodes: [],
        },
      ],
      effects: [],
      children: [],
      levelsStyles: [],
      citations: [],
    },
    xPx: t.contentLeftPx,
    yPx: n,
    widthPx: t.contentWidthPx,
    heightPx: 18,
  };
}
function is(e, t, n, r, i, a, o, s) {
  let c = $o(n, `__docxField:PAGE__`) || $o(r, `__docxField:PAGE__`),
    l = c ? Xo(a.nextValue ?? 1, a.formatType) : void 0;
  c && (a.nextValue = (a.nextValue ?? 1) + 1);
  let u = ts(n, { currentPageText: l }),
    d = ts(r, { currentPageText: l }),
    f = Bo(u, Math.max(0, t.margins.headerPx), t, o, s),
    p = Bo(d, 0, t, o, s),
    m = Bo(
      d,
      Math.max(t.contentTopPx, t.pageHeightPx - t.margins.footerPx - p.totalHeightPx),
      t,
      o,
      s,
    ),
    h;
  return (
    i &&
      !c &&
      a.nextValue !== void 0 &&
      ((h = rs(Xo(a.nextValue, a.formatType), t)), (a.nextValue += 1)),
    {
      sectionId: e,
      widthPx: t.pageWidthPx,
      heightPx: t.pageHeightPx,
      layout: vo(t),
      headerElements: f.elements,
      bodyElements: [],
      footerElements: m.elements,
      pageNumberElement: h,
    }
  );
}
function as(e, t, n = Qr, r = {}) {
  let i = r.layoutMode === `pageless`,
    a = Go(
      e.sections.length > 0
        ? e.sections
        : [
            {
              id: `doc-section-1`,
              breakType: 0,
              pageSetup: void 0,
              columns: void 0,
              elements: e.elements,
              header: void 0,
              footer: void 0,
              firstHeader: void 0,
              firstFooter: void 0,
              differentFirstPage: void 0,
              startsWithPageBreak: !1,
            },
          ],
      e,
    ),
    o = [],
    s = [],
    c = [],
    l = [],
    u = [],
    d = {},
    f,
    p,
    m,
    h = 0,
    g = 0,
    _ = !1,
    v = !1,
    y,
    b = Ni(),
    x = new Map(),
    S = Ma(),
    C = new dt(e.textStyles ?? []),
    w = (e) => C.resolve(e),
    T = ba(e),
    E = ja(e, w, T, e.settings?.defaultTabStop),
    D = a.map((t) => ({ section: t, settings: Vo(t, e, r) }));
  for (let a = 0; a < D.length; a += 1) {
    let { section: C, settings: O } = D[a],
      k = D[a - 1],
      A = D[a + 1];
    Yo(d, C);
    let j = Oa(C.header?.elements ?? s, w, T),
      M = Oa(C.footer?.elements ?? c, w, T),
      ee = Oa(C.firstHeader?.elements ?? l, w, T),
      te = Oa(C.firstFooter?.elements ?? u, w, T),
      ne = !!C.pageSetup?.pageNumbers;
    (C.header && (s = j),
      C.footer && (c = M),
      C.firstHeader && (l = ee),
      C.firstFooter && (u = te));
    let N = ka(C.elements ?? [], w, T, e.settings?.defaultTabStop),
      re = C.id || `doc-section`,
      ie = (e) =>
        is(
          re,
          O,
          i ? [] : e && C.differentFirstPage ? ee : j,
          i ? [] : e && C.differentFirstPage ? te : M,
          !i && ne,
          d,
          t,
          n,
        ),
      ae = !f || !m || (!i && (p !== O.key || Ho(C)));
    ae &&
      (f && o.push(So(f, m ?? O, o.length + 1, r)),
      (f = ie(!0)),
      (x = new Map()),
      (S = Ma()),
      (p = O.key),
      (m = O),
      (h = O.contentTopPx),
      (g = 0),
      (_ = !1),
      (v = !1),
      (y = void 0),
      (b = Ni()));
    let P = Math.max(h, O.contentTopPx),
      oe = !ae && (i || !Ho(C)) && P > O.contentTopPx + 0.01,
      se =
        k !== void 0 &&
        C.breakType === rn.SECTION_BREAK_TYPE_CONTINUOUS &&
        fa(k.settings.columns, O.columns),
      ce = oe && _ && (!se || !v);
    if (
      f !== void 0 &&
      A !== void 0 &&
      O.columns.widths.length > 1 &&
      A.settings.key === O.key &&
      (i || !Ho(A.section)) &&
      fa(O.columns, A.settings.columns) &&
      f
    ) {
      let e = mo({
        preparedElements: N,
        settings: O,
        sectionStartY: P,
        initialOccupiedRegions: b,
        sectionIndex: a,
        ctx: t,
        theme: n,
      });
      if (e) {
        (f.bodyElements.push(...e.bodyElements),
          (h = e.endY),
          (g = e.trailingSpaceAfterPx),
          (_ = e.previousEmptyParagraph),
          (v = e.previousEmptyParagraphHasSpacing),
          (y = e.previousParagraphStyleId),
          (b = e.occupiedRegions));
        continue;
      }
    }
    let F = 0,
      I = Hi(O, P),
      L = Ui(O, oe ? g : 0),
      R = Wi(O, ce ? _ : !1),
      z = Wi(O, ce ? v : !1),
      B = Gi(O, oe ? y : void 0),
      le = Ki(O),
      ue = Pi(b),
      de = () => {
        (f && o.push(So(f, m ?? O, o.length + 1, r)),
          (f = ie(!1)),
          (x = new Map()),
          (S = Ma()),
          (p = O.key),
          (m = O),
          (P = O.contentTopPx),
          (g = 0),
          (_ = !1),
          (v = !1),
          (y = void 0),
          (F = 0),
          (I = Hi(O, P)),
          (L = Ui(O)),
          (R = Wi(O)),
          (z = Wi(O)),
          (B = Gi(O)),
          (le = Ki(O)),
          (ue = Ni()));
      },
      fe = () => {
        if (F < O.columns.widths.length - 1) {
          F += 1;
          return;
        }
        de();
      },
      pe = new Map();
    for (let e = 0; e < N.length; e += 1) {
      let s = N[e];
      if (s.docxSectionBreakCarrier) {
        ((L[F] = s.lastParagraphSpaceAfterPx),
          (R[F] = !1),
          (z[F] = !1),
          (B[F] = void 0),
          (g = s.lastParagraphSpaceAfterPx),
          (_ = !1),
          (v = !1),
          (y = void 0));
        continue;
      }
      if (s.kind === `table` && uo(N, e)) {
        let r = s.element.table;
        if (!r || r.rows.length === 0) continue;
        let o = 0;
        for (; o < r.rows.length;) {
          let c = O.columns.widths[F] ?? O.contentWidthPx,
            l = I[F] ?? P,
            u = l + (L[F] ?? 0),
            d = oa(s, u, x, le[F], i ? la(O, P) : 0),
            p = l === O.contentTopPx,
            m = Math.max(0, O.contentBottomPx - d),
            h = io({
              preparedElement: s,
              rowOffset: o,
              availableHeight: m,
              isFreshPageSlot: p,
              ctx: t,
              widthPx: c,
              theme: n,
              documentGridLinePitchTwips: O.documentGridLinePitchTwips,
            });
          if (!h.element || h.rowCount <= 0) {
            fe();
            continue;
          }
          f || ((f = ie(!1)), (x = new Map()), (S = Ma()));
          let b = Ua(s, O, F);
          (f.bodyElements.push(
            Io(
              h.element,
              `table`,
              b,
              d,
              h.widthPx,
              h.heightPx,
              t,
              n,
              void 0,
              Ji({
                settings: O,
                sectionIndex: a,
                sourceElementIndex: e,
                fragmentIndex: Yi(pe, e),
                columnIndex: F,
                rowStartIndex: o + 1,
                rowEndIndex: o + h.rowCount,
              }),
            ),
          ),
            Ga(
              ue,
              { ...s, element: h.element },
              { xPx: b, yPx: d, widthPx: h.widthPx, heightPx: h.heightPx },
            ),
            (o += h.rowCount),
            (I[F] = Math.max(u, d + h.heightPx)),
            (L[F] = 0),
            (R[F] = !1),
            (z[F] = !1),
            (B[F] = void 0),
            (g = 0),
            (_ = !1),
            (v = !1),
            (y = void 0),
            o < r.rows.length && fe());
        }
        continue;
      }
      if (s.kind !== `text`) {
        let c = !1;
        for (; !c;) {
          let l = O.columns.widths[F] ?? O.contentWidthPx,
            u = I[F] ?? P,
            d = u + (L[F] ?? 0),
            h = Va(s, t, l, n, O.documentGridLinePitchTwips),
            b = oa(s, d, x, le[F], i ? la(O, P) : 0),
            C = ua(s, d, b, h.heightPx),
            w = u === O.contentTopPx;
          if (C > O.contentBottomPx && !w) {
            if (F < O.columns.widths.length - 1) {
              F += 1;
              continue;
            }
            (f && o.push(So(f, m ?? O, o.length + 1, r)),
              (f = ie(!1)),
              (x = new Map()),
              (S = Ma()),
              (p = O.key),
              (m = O),
              (P = O.contentTopPx),
              (g = 0),
              (_ = !1),
              (v = !1),
              (y = void 0),
              (F = 0),
              (I = Hi(O, P)),
              (L = Ui(O)),
              (R = Wi(O)),
              (z = Wi(O)),
              (B = Gi(O)),
              (le = Ki(O)),
              (ue = Ni()));
            continue;
          }
          f || ((f = ie(!1)), (x = new Map()), (S = Ma()));
          let T = Ua(s, O, F);
          (f.bodyElements.push(
            Io(
              s.element,
              s.kind,
              T,
              b,
              h.widthPx,
              h.heightPx,
              t,
              n,
              void 0,
              Ji({
                settings: O,
                sectionIndex: a,
                sourceElementIndex: e,
                fragmentIndex: Yi(pe, e),
                columnIndex: F,
              }),
            ),
          ),
            Ga(ue, s, { xPx: T, yPx: b, widthPx: h.widthPx, heightPx: h.heightPx }),
            (I[F] = C),
            (L[F] = 0),
            (R[F] = !1),
            (z[F] = !1),
            (B[F] = void 0),
            (g = 0),
            (_ = !1),
            (v = !1),
            (y = void 0),
            (c = !0));
        }
        continue;
      }
      let c = 0,
        l = !1;
      for (; !l;) {
        let u = O.columns.widths[F] ?? O.contentWidthPx,
          d = I[F] ?? P,
          h = Ba(s, u, n, O.documentGridLinePitchTwips);
        if (h.length === 0 || c >= h.length) {
          (Qi(s.element, d, x), (le[F] = d), (l = !0));
          break;
        }
        let b = R[F] ?? !1,
          C = z[F] ?? !1,
          w = lo({
            lineIndex: c,
            lines: h,
            previousElementWasEmptyParagraph: b,
            previousEmptyParagraphHasSpacing: C,
            firstParagraphSpaceBeforePx: s.firstParagraphSpaceBeforePx,
          }),
          T = Zi({
            previousParagraphStyleId: B[F],
            currentParagraphStyleId: s.firstParagraphStyleId,
            currentParagraphUsesContextualSpacing: s.firstParagraphUsesContextualSpacing,
          }),
          D = w || (T && c === 0 && co(h[0])),
          k = D && c === 0 ? 1 : c;
        if (k >= h.length) {
          (Qi(s.element, d, x), (le[F] = d), (l = !0));
          break;
        }
        let A = oo(s.element, h),
          j =
            d -
            Ja({
              lineIndex: k,
              trailingSpaceAfterPx: T ? 0 : (L[F] ?? 0),
              firstParagraphSpaceBeforePx: D ? 0 : s.firstParagraphSpaceBeforePx,
            }),
          M = za(S, E, O, n),
          ee = zi(
            ue,
            O.columns.xPositions[F] ?? O.contentLeftPx,
            u,
            j,
            M,
            Math.max(1, h[k]?.heightPx ?? 0),
            A,
          );
        j = ee.currentY;
        let te = Math.max(0, ee.boundaryBottomPx - j),
          ne = d === O.contentTopPx,
          {
            nextLineIndex: re,
            fragmentHeightPx: ae,
            endsWithFlowBreak: oe,
          } = Za({
            lines: h,
            startIndex: k,
            currentY: j,
            boundaryBottomPx: ee.boundaryBottomPx,
            pageContentBottomPx: O.contentBottomPx,
            pageFootnoteIds: S.ids,
            preparedFootnotes: E,
            footnoteWidthPx: O.contentWidthPx,
            theme: n,
          });
        if (A && re > k && !ne) {
          let r = fo(s, N, e, t, u, n, O.documentGridLinePitchTwips);
          r !== void 0 && ae + r > te + ds && ((re = k), (ae = 0), (oe = !1));
        }
        if (re === k) {
          if (!ne) {
            if (F < O.columns.widths.length - 1) {
              F += 1;
              continue;
            }
            (f && o.push(So(f, m ?? O, o.length + 1, r)),
              (f = ie(!1)),
              (x = new Map()),
              (S = Ma()),
              (p = O.key),
              (m = O),
              (P = O.contentTopPx),
              (g = 0),
              (_ = !1),
              (v = !1),
              (y = void 0),
              (F = 0),
              (I = Hi(O, P)),
              (L = Ui(O)),
              (R = Wi(O)),
              (z = Wi(O)),
              (B = Gi(O)),
              (le = Ki(O)),
              (ue = Ni()));
            continue;
          }
          ((ae = Math.max(1, h[k]?.heightPx ?? 0)), (re = Math.min(h.length, k + 1)), (oe = !1));
        }
        if (
          (f || ((f = ie(!1)), (x = new Map()), (S = Ma())),
          f.bodyElements.push({
            kind: `text`,
            element: s.element,
            xPx: O.columns.xPositions[F] ?? O.contentLeftPx,
            yPx: j,
            widthPx: u,
            heightPx: ae,
            flow: Ji({
              settings: O,
              sectionIndex: a,
              sourceElementIndex: e,
              fragmentIndex: Yi(pe, e),
              columnIndex: F,
              lineStartIndex: k + 1,
              lineEndIndex: re,
            }),
            textLines: h.slice(k, re),
          }),
          i || Ro(f, S, E, h, k, re, O, t, n),
          c === 0 && (Qi(s.element, j, x), (le[F] = j)),
          (I[F] = j + ae),
          (c = re),
          (L[F] = 0),
          oe && c < h.length)
        ) {
          if (F < O.columns.widths.length - 1) {
            F += 1;
            continue;
          }
          (f && o.push(So(f, m ?? O, o.length + 1, r)),
            (f = ie(!1)),
            (x = new Map()),
            (S = Ma()),
            (p = O.key),
            (m = O),
            (P = O.contentTopPx),
            (g = 0),
            (_ = !1),
            (v = !1),
            (y = void 0),
            (F = 0),
            (I = Hi(O, P)),
            (L = Ui(O)),
            (R = Wi(O)),
            (z = Wi(O)),
            (B = Gi(O)),
            (le = Ki(O)),
            (ue = Ni()));
          continue;
        }
        if (c >= h.length) {
          let e = (s.element.paragraphs?.length ?? 0) > 1 ? us : 0;
          ((I[F] = (I[F] ?? P) + e),
            (L[F] = e > 0 ? 0 : s.lastParagraphSpaceAfterPx),
            (R[F] = oo(s.element, h)),
            (z[F] = R[F] === !0 && qa(s)),
            (B[F] = s.lastParagraphStyleId),
            (g = L[F] ?? 0),
            (_ = R[F] ?? !1),
            (v = z[F] ?? !1),
            (y = s.lastParagraphStyleId),
            (l = !0));
          break;
        }
        if ((I[F] ?? P) >= O.contentBottomPx) {
          if (F < O.columns.widths.length - 1) {
            F += 1;
            continue;
          }
          (f && o.push(So(f, m ?? O, o.length + 1, r)),
            (f = ie(!1)),
            (x = new Map()),
            (S = Ma()),
            (p = O.key),
            (m = O),
            (P = O.contentTopPx),
            (g = 0),
            (_ = !1),
            (v = !1),
            (y = void 0),
            (F = 0),
            (I = Hi(O, P)),
            (L = Ui(O)),
            (R = Wi(O)),
            (z = Wi(O)),
            (B = Gi(O)),
            (le = Ki(O)),
            (ue = Ni()));
        }
      }
    }
    ((h = Math.max(...I)), (b = Pi(ue)));
  }
  return (f && m ? o.push(So(f, m, o.length + 1, r)) : f && o.push(f), o);
}
var os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs = e(() => {
    (on(),
      m(),
      g(),
      je(),
      we(),
      Ee(),
      ni(),
      pt(),
      bi(),
      $r(),
      Mi(),
      re(),
      ce(),
      Ci(),
      qr(),
      Bi(),
      (os = 12240),
      (ss = 15840),
      (cs = 1e5),
      (ls = {
        top: 1440,
        bottom: 1440,
        left: 1440,
        right: 1440,
        header: 720,
        footer: 720,
        gutter: 0,
      }),
      (us = 8),
      (ds = 0.5),
      (fs = 1),
      (ps = `__docxMirrorMargins:1`),
      (ms = `__docxPageNumberStart:`),
      (hs = `__docxPageNumberFormat:`),
      (gs = 2),
      (_s = 1),
      (vs = 5),
      (ys = 6),
      (bs = { layoutDocumentFlow: as }));
  });
function Ss(e) {
  let t = e.table;
  if (!t || t.rows.length === 0) return e;
  let n = !1,
    r = t.rows.map((e) => {
      let t = !1,
        r = e.cells.map((e) =>
          e.marginLeft === ks.leftEmu &&
          e.marginRight === ks.rightEmu &&
          e.marginTop === ks.topEmu &&
          e.marginBottom === ks.bottomEmu
            ? ((t = !0),
              {
                ...e,
                marginLeft: void 0,
                marginRight: void 0,
                marginTop: void 0,
                marginBottom: void 0,
              })
            : e,
        );
      return t ? ((n = !0), { ...e, cells: r }) : e;
    });
  return n ? { ...e, table: { ...t, rows: r } } : e;
}
function Cs(e) {
  let t = (e.sections ?? []).map((e) => ({ ...e, elements: (e.elements ?? []).map(Ss) }));
  return { ...e, sections: t, elements: t.flatMap((e) => e.elements ?? []) };
}
function ws(e) {
  return Ts(e.element, { xPx: e.xPx, yPx: e.yPx, widthPx: e.widthPx, heightPx: e.heightPx });
}
function Ts(e, t) {
  let n = e.bbox?.widthEmu === 0,
    r = e.bbox?.heightEmu === 0;
  return {
    ...e,
    bbox: {
      ...e.bbox,
      xEmu: Si(t.xPx),
      yEmu: Si(t.yPx),
      widthEmu: n ? 0 : Si(t.widthPx),
      heightEmu: r ? 0 : Si(t.heightPx),
    },
  };
}
function Es(e) {
  return [e.layoutMode ?? `paged`, e.pagelessMinHeightPx ?? `default-min-height`].join(`:`);
}
function Ds(e, t, n = {}) {
  return e.resolveLayoutPages((e) => {
    let r = Cs(e);
    return Os(r, t, Yr(r.theme), n);
  }, Es(n));
}
var Os,
  ks,
  As,
  js = e(() => {
    (m(),
      Re(),
      $r(),
      xs(),
      Ci(),
      ({ layoutDocumentFlow: Os } = bs),
      (ks = { leftEmu: 91440, rightEmu: 91440, topEmu: 45720, bottomEmu: 45720 }),
      (As = Fe.load({
        id: ``,
        slides: [],
        theme: void 0,
        layouts: [],
        charts: [],
        images: [],
        contentReferences: [],
        textStyles: [],
        fonts: [],
        people: [],
        threads: [],
      })),
      As.slides.add());
  });
function Ms(e, t) {
  if (typeof OffscreenCanvas > `u`)
    throw Error(`OffscreenCanvas API is not available for document layout export.`);
  return new OffscreenCanvas(e, t);
}
function Ns(e, t, n, r) {
  return { left: e, top: t, width: n, height: r };
}
function Ps(e) {
  return (e * 72) / 96;
}
function Fs(e) {
  if (!(e === void 0 || !Number.isFinite(e))) return Math.round(e * 100) / 100;
}
function Is(e) {
  return e === void 0 ? void 0 : Fs(Ke(e));
}
function Ls(e) {
  return e === void 0 ? void 0 : Fs(e * U);
}
function Rs(e) {
  if (!e || e.length === 0) return;
  let t = [];
  for (let [n, r] of e.entries()) {
    let e = r.paragraphStyle,
      i = (e?.tabStops ?? []).map((e) => Ls(e.position)).filter((e) => e !== void 0),
      a = {
        index: n + 1,
        id: r.id || void 0,
        styleId: r.styleId,
        bulletCharacter: e?.bulletCharacter ?? r.bulletCharacter,
        autoNumberType: e?.autoNumberType,
        autoNumberStartAt: e?.autoNumberStartAt,
        directMarginLeftTwips: r.marginLeft,
        directIndentTwips: r.indent,
        styleMarginLeftEmu: e?.marginLeft,
        styleIndentEmu: e?.indent,
        marginLeftPx: Is(r.marginLeft) ?? Ls(e?.marginLeft),
        indentPx: Is(r.indent) ?? Ls(e?.indent),
        spaceBeforeTwips: r.spaceBefore,
        spaceAfterTwips: r.spaceAfter,
        spaceBeforePx: Is(r.spaceBefore),
        spaceAfterPx: Is(r.spaceAfter),
        lineSpacingPercent: e?.lineSpacingPercent,
        tabStopsPx: i.length > 0 ? i : void 0,
      };
    (a.bulletCharacter !== void 0 ||
      a.autoNumberType !== void 0 ||
      a.autoNumberStartAt !== void 0 ||
      a.directMarginLeftTwips !== void 0 ||
      a.directIndentTwips !== void 0 ||
      a.styleMarginLeftEmu !== void 0 ||
      a.styleIndentEmu !== void 0 ||
      a.spaceBeforeTwips !== void 0 ||
      a.spaceAfterTwips !== void 0 ||
      a.lineSpacingPercent !== void 0 ||
      a.tabStopsPx !== void 0) &&
      t.push(a);
  }
  return t.length > 0 ? t : void 0;
}
function zs(e) {
  if (e)
    return {
      left: e.xEmu ?? 0,
      top: e.yEmu ?? 0,
      width: e.widthEmu ?? 0,
      height: e.heightEmu ?? 0,
    };
}
function Bs(e) {
  return Ns(e.xPx, e.yPx, e.widthPx, e.heightPx);
}
function Vs(e, t) {
  return Ns(e.left - t.left, e.top - t.top, e.width, e.height);
}
function Hs(e, t, n) {
  if (!t) return;
  let r = Bs(t.contentFrame),
    i = n?.columnFrame ? Bs(n.columnFrame) : void 0;
  return {
    pageFrame: e,
    contentRelativeFrame: Vs(e, r),
    columnRelativeFrame: i ? Vs(e, i) : void 0,
  };
}
function Us(e) {
  if (e)
    return {
      type: e.type,
      anchorParagraphId: e.anchorParagraphId,
      horizontalRelativeFrom: e.horizontalRelativeFrom,
      verticalRelativeFrom: e.verticalRelativeFrom,
      xOffsetEmu: e.xOffsetEmu,
      yOffsetEmu: e.yOffsetEmu,
      horizontalAlignment: e.horizontalAlignment,
      verticalAlignment: e.verticalAlignment,
      behindDocument: e.behindDocument,
      layoutInCell: e.layoutInCell,
      allowOverlap: e.allowOverlap,
      relativeHeight: e.relativeHeight,
      locked: e.locked,
      distanceTopEmu: e.distanceTopEmu,
      distanceBottomEmu: e.distanceBottomEmu,
      distanceLeftEmu: e.distanceLeftEmu,
      distanceRightEmu: e.distanceRightEmu,
      wrapType: e.wrap?.type,
      wrapSide: e.wrap?.side,
    };
}
function Ws(e) {
  switch (e) {
    case E.FILL_TYPE_UNSPECIFIED:
      return `unspecified`;
    case E.FILL_TYPE_SOLID:
      return `solid`;
    case E.FILL_TYPE_GRADIENT:
      return `gradient`;
    case E.FILL_TYPE_PICTURE:
      return `picture`;
    case E.FILL_TYPE_PATTERN:
      return `pattern`;
    default:
      return `unknown`;
  }
}
function Gs(e) {
  switch (e) {
    case v.COLOR_TYPE_UNSPECIFIED:
      return `unspecified`;
    case v.COLOR_TYPE_RGB:
      return `rgb`;
    case v.COLOR_TYPE_SCHEME:
      return `scheme`;
    case v.COLOR_TYPE_SYSTEM:
      return `system`;
    default:
      return `unknown`;
  }
}
function Ks(e, t) {
  if (!e) return;
  let n = e.color;
  return {
    type: Ws(e.type),
    color: n && t ? ke(n, t) : void 0,
    colorValue: n?.value,
    colorType: n?.type === void 0 ? void 0 : Gs(n.type),
    lastColor: n?.lastColor,
    transform: n?.transform,
    gradientStopCount:
      e.gradientStops && e.gradientStops.length > 0 ? e.gradientStops.length : void 0,
    imageAssetId: e.imageReference?.id,
  };
}
function qs(e) {
  switch (e) {
    case x.LINE_STYLE_UNSPECIFIED:
      return `unspecified`;
    case x.LINE_STYLE_SOLID:
      return `solid`;
    case x.LINE_STYLE_DASHED:
      return `dashed`;
    case x.LINE_STYLE_DOTTED:
      return `dotted`;
    case x.LINE_STYLE_DASH_DOT:
      return `dash-dot`;
    case x.LINE_STYLE_DASH_DOT_DOT:
      return `dash-dot-dot`;
    default:
      return `unknown`;
  }
}
function Js(e, t) {
  if (e)
    return {
      style: e.style === void 0 ? void 0 : qs(e.style),
      widthPx: e.widthEmu === void 0 ? void 0 : Fs(e.widthEmu * U),
      color: e.fill?.color && t ? ke(e.fill.color, t) : void 0,
      fill: Ks(e.fill, t),
    };
}
function Ys(e) {
  let t = e.flow;
  if (t)
    return {
      sectionIndex: t.sectionIndex,
      sourceElementIndex: t.sourceElementIndex,
      fragmentIndex: t.fragmentIndex,
      columnIndex: t.columnIndex,
      columnFrame: t.columnFrame ? Bs(t.columnFrame) : void 0,
      lineStartIndex: t.lineStartIndex,
      lineEndIndex: t.lineEndIndex,
      rowStartIndex: t.rowStartIndex,
      rowEndIndex: t.rowEndIndex,
      balanced: t.balanced,
      noteKind: t.noteKind,
      noteIds: t.noteIds,
      documentGridLinePitchTwips: t.documentGridLinePitchTwips,
      documentGridLinePitchPx: t.documentGridLinePitchPx,
    };
}
function Xs(e) {
  if (e.textLines && e.textLines.length > 0) {
    let t = e.textLines.map((e) => e.segments.map((e) => e.text).join(``)).join(`
`);
    if (t.length > 0) return t;
  }
  let t = (e.element.paragraphs ?? []).map((e) => (e.runs ?? []).map((e) => e.text ?? ``).join(``))
    .join(`
`);
  return t.length > 0 ? t : void 0;
}
function Zs(e, t, n, r, i, a) {
  let o = r + (e.xPx ?? n.x ?? 0);
  return {
    index: t + 1,
    text: e.text,
    frame: Ns(o, i + a, e.widthPx, n.heightPx),
    font: e.font,
    fontKey: e.fontKey,
    fill: e.fill,
    highlight: e.highlight,
    underline: e.underline,
    fontSizePx: e.px,
    fontSizePt: Ps(e.px),
    paraIndex: e.paraIndex,
    runIndex: e.runIndex,
    charStart: e.charStart,
    charEnd: e.charEnd,
  };
}
function Qs(e, t, n = 0, r = 0, i = e.topY ?? 0) {
  let a = e.segments.map((t, a) => Zs(t, a, e, n, r, i));
  return {
    index: t + 1,
    text: e.segments.map((e) => e.text).join(``),
    frame: Ns(n + (e.x ?? 0), r + i, e.widthPx, e.heightPx),
    align: e.align,
    baselineY: r + (e.baselineY ?? i + e.baselineOffsetPx),
    availableWidthPx: e.availableWidthPx,
    contentHeightPx: e.contentHeightPx,
    naturalHeightPx: e.naturalHeightPx,
    leadingBeforePx: e.leadingBeforePx,
    leadingAfterPx: e.leadingAfterPx,
    maxAscentPx: e.maxAscentPx,
    maxDescentPx: e.maxDescentPx,
    segments: a,
  };
}
function $s(e, t = 0, n = 0) {
  let r = 0;
  return e.map((e, i) => {
    let a = e.topY ?? r,
      o = Qs(e, i, t, n, a);
    return ((r = a + e.heightPx), o);
  });
}
function ec(e, t) {
  return `${e}:${t}`;
}
function tc(e) {
  let t = new Map();
  for (let n of e.cellLayouts ?? []) t.set(ec(n.row, n.col), $s(n.block.lines));
  return t;
}
function nc(e) {
  let t = new Map();
  for (let n of e.cellElementFrames ?? []) {
    let e = ec(n.row, n.col),
      r = t.get(e) ?? [];
    (r.push({ elementId: n.elementId, frame: Ns(n.xPx, n.yPx, n.widthPx, n.heightPx) }),
      t.set(e, r));
  }
  return t;
}
function rc(e) {
  if (!e) return;
  let t = {
    left: e.marginLeft === void 0 ? void 0 : Fs(e.marginLeft * U),
    right: e.marginRight === void 0 ? void 0 : Fs(e.marginRight * U),
    top: e.marginTop === void 0 ? void 0 : Fs(e.marginTop * U),
    bottom: e.marginBottom === void 0 ? void 0 : Fs(e.marginBottom * U),
  };
  return t.left !== void 0 || t.right !== void 0 || t.top !== void 0 || t.bottom !== void 0
    ? t
    : void 0;
}
function ic(e, t, n, r) {
  if (e.kind !== `table` || !e.element.table) return;
  let i = Kr({ ...ws(e), type: T.ELEMENT_TYPE_TABLE }),
    a = F(i, t, n, {
      paragraphSpacingUnit: `twips`,
      explicitRowHeightBehavior: `atLeast`,
      autoRowMinimumHeightPx: 0,
      fitColumnWidthsToFrame: !0,
      drawDefaultCellBorders: !1,
      collapseParagraphBoundarySpacing: !1,
      documentGridLinePitchTwips: e.flow?.documentGridLinePitchTwips,
    });
  if (!a) return;
  let o = tc(a),
    s = nc(a),
    c = e.yPx,
    l = a.rowHeightsPx.map((t, l) => {
      let u = a.cellRects
          .filter((e) => e.row === l)
          .map((t) => {
            let a = ec(t.row, t.col),
              c = o.get(a),
              l = s.get(a),
              u = i.table?.rows?.[t.row]?.cells?.[t.col],
              d = Rs(u?.paragraphs),
              f = Ns(t.xPx, t.yPx, t.widthPx, t.heightPx);
            return {
              row: t.row + 1,
              col: t.col + 1,
              frame: f,
              coordinateHints: Hs(f, r, e.flow),
              textLines: c && c.length > 0 ? c : void 0,
              paragraphs: d,
              fill: Ks(u?.fill, n),
              marginsPx: rc(u),
              elementFrames: l && l.length > 0 ? l : void 0,
            };
          }),
        d = { index: l + 1, frame: Ns(e.xPx, c, e.widthPx, t), cells: u };
      return ((c += t), d);
    });
  return {
    frame: Ns(e.xPx, e.yPx, e.widthPx, e.heightPx),
    height: a.heightPx,
    rowHeights: a.rowHeightsPx,
    rows: l,
  };
}
function ac(e, t, n, r, i, a, o) {
  let s = Xs(e),
    c = e.textLines ? $s(e.textLines, e.xPx, e.yPx) : void 0,
    l = Rs(e.element.paragraphs),
    u = Ns(e.xPx, e.yPx, e.widthPx, e.heightPx);
  return {
    path: n,
    order: r,
    region: t,
    kind: e.kind,
    id: e.element.id || void 0,
    name: e.element.name || void 0,
    frame: u,
    coordinateHints: Hs(u, i, e.flow),
    flow: Ys(e),
    bboxEmu: zs(e.element.bbox),
    placement: Us(e.element.placement),
    text: s,
    textLines: c,
    paragraphs: l,
    shapeType: e.element.shape?.geometry?.toString(),
    shapeFill: Ks(e.element.shape?.fill, o),
    shapeLine: Js(e.element.shape?.line, o),
    imageAssetId: e.element.imageReference?.id,
    chartReferenceId: e.element.chartReference?.id,
    tableRows: e.element.table?.rows.length,
    tableColumns: Math.max(0, ...(e.element.table?.rows.map((e) => e.cells.length) ?? [0])),
    tableLayout: a && o ? ic(e, a, o, i) : void 0,
    children: (e.children ?? []).map((e, r) => ac(e, t, `${n}.children.${r + 1}`, r + 1, i, a, o)),
  };
}
function oc(e) {
  return {
    key: e.key,
    margins: {
      top: e.margins.topPx,
      bottom: e.margins.bottomPx,
      left: e.margins.leftPx,
      right: e.margins.rightPx,
      header: e.margins.headerPx,
      footer: e.margins.footerPx,
    },
    contentFrame: Bs(e.contentFrame),
    columns: e.columns.map((e) => ({ index: e.index, frame: Bs(e.frame) })),
    documentGrid: e.documentGrid,
    mirrorMarginXOffsetPx: e.mirrorMarginXOffsetPx,
  };
}
function sc(e, t, n, r, i) {
  return e.map((e, a) => ac(e, t, `${t}.${a + 1}`, a + 1, n, r, i));
}
function cc(e, t, n) {
  let r = e.toProto(),
    i = n ? Yr(r.theme) : void 0;
  return {
    schema: dc,
    unit: `px`,
    document: {
      id: e.id,
      name: e.name,
      widthEmu: r.widthEmu,
      heightEmu: r.heightEmu,
      pageCount: t.length,
    },
    pages: t.map((e, t) => ({
      index: t + 1,
      sectionId: e.sectionId,
      frame: Ns(0, 0, e.widthPx, e.heightPx),
      layout: oc(e.layout),
      headerElements: sc(e.headerElements, `header`, e.layout, n, i),
      bodyElements: sc(e.bodyElements, `body`, e.layout, n, i),
      footerElements: sc(e.footerElements, `footer`, e.layout, n, i),
      pageNumberElement: e.pageNumberElement
        ? ac(e.pageNumberElement, `pageNumber`, `pageNumber.1`, 1, e.layout, n, i)
        : void 0,
    })),
  };
}
function lc(e) {
  let t = Ms(1, 1).getContext(`2d`);
  if (!t) throw Error(`Canvas 2D context unavailable for document layout export.`);
  return cc(e, Ds(e, t), t);
}
function uc(e, t) {
  let n = t ? cc(e, t) : lc(e);
  return new Blob([JSON.stringify(n, null, 2)], { type: fc });
}
var dc,
  fc,
  pc = e(() => {
    (m(),
      g(),
      js(),
      qr(),
      $r(),
      we(),
      M(),
      ce(),
      De(),
      (dc = `openai.document.layout/v1`),
      (fc = `application/vnd.openai.document-layout+json`));
  }),
  mc,
  hc = e(() => {
    mc = class {
      #e;
      #t;
      constructor(e = [], t = []) {
        ((this.#e = new Map()), (this.#t = new Map()));
        for (let t of e) this.define(t);
        for (let e of t) this.assignParagraph(e.paragraphId, e.numId, e.level);
      }
      get definitions() {
        return Array.from(this.#e.values());
      }
      get paragraphBindings() {
        return Array.from(this.#t.values());
      }
      define(e) {
        e?.numId && this.#e.set(e.numId, { ...e, levels: [...(e.levels ?? [])] });
      }
      removeDefinition(e) {
        this.#e.delete(e);
      }
      assignParagraph(e, t, n = 0) {
        !e || !t || this.#t.set(e, { paragraphId: e, numId: t, level: n });
      }
      clearParagraphBinding(e) {
        this.#t.delete(e);
      }
      toProto() {
        return {
          numberingDefinitions: this.definitions,
          paragraphNumberings: this.paragraphBindings,
        };
      }
    };
  }),
  gc,
  _c,
  vc,
  yc = e(() => {
    (g(),
      We(),
      (gc = { insertion: C.REVIEW_MARK_TYPE_INSERTION, deletion: C.REVIEW_MARK_TYPE_DELETION }),
      (_c = class {
        #e;
        constructor(e) {
          this.#e = { ...e };
        }
        get id() {
          return this.#e.id;
        }
        toProto() {
          return { ...this.#e };
        }
      }),
      (vc = class {
        #e = [];
        constructor(e = []) {
          this.#e = e.map((e) => new _c(e));
        }
        add(e) {
          let t = {
              id: rt(),
              type: gc[e.type],
              author: e.author,
              initials: e.initials,
              createdAt: e.createdAt,
            },
            n = new _c(t);
          return (this.#e.push(n), n);
        }
        toProto() {
          return this.#e.map((e) => e.toProto());
        }
      }));
  }),
  bc,
  xc = e(() => {
    (m(),
      Qe(),
      (bc = class extends ot {
        type = `text`;
        constructor(e, t) {
          (super(e, { ...(t ?? {}), type: T.ELEMENT_TYPE_TEXT }),
            (this.data.type = T.ELEMENT_TYPE_TEXT));
        }
        get id() {
          return this.data.id;
        }
        toProto() {
          return super.toProto();
        }
      }));
  }),
  Sc,
  Cc = e(() => {
    (Pe(),
      (Sc = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        add(e = {}) {
          let { text: t, style: n } = e,
            r;
          if ((this.#t() && this.#e.clear(), t !== void 0 && Ye(t))) {
            let e = it(t);
            if (e.length === 0) r = this.#e.add();
            else {
              r = this.#e.append(e[0]);
              for (let t = 1; t < e.length; t += 1) this.#e.append(e[t]);
            }
          } else ((r = this.#e.add()), t !== void 0 && r.setPlainText(String(t)));
          return (n && (r.style = n), r);
        }
        #t() {
          if (this.#e.length !== 1) return !1;
          let e = this.#e.getItem(0);
          return e ? e.toPlainText().trim() === `Start writing here...` : !1;
        }
      }));
  }),
  wc,
  Tc = e(() => {
    wc = {
      "Normal Table": {
        styleId: `TableNormal`,
        name: `Normal Table`,
        uiPriority: `99`,
        default: `1`,
        tblPr: {
          cellMargins: {
            top: { w: `0`, type: `dxa` },
            left: { w: `108`, type: `dxa` },
            bottom: { w: `0`, type: `dxa` },
            right: { w: `108`, type: `dxa` },
          },
        },
      },
      "Table Grid": {
        styleId: `TableGrid`,
        name: `Table Grid`,
        basedOn: `TableNormal`,
        uiPriority: `39`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `auto` },
            left: { val: `single`, sz: `4`, space: `0`, color: `auto` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `auto` },
            right: { val: `single`, sz: `4`, space: `0`, color: `auto` },
            insideH: { val: `single`, sz: `4`, space: `0`, color: `auto` },
            insideV: { val: `single`, sz: `4`, space: `0`, color: `auto` },
          },
        },
      },
      "Grid Table Light": {
        styleId: `TableGridLight`,
        name: `Grid Table Light`,
        basedOn: `TableNormal`,
        uiPriority: `40`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
          },
        },
      },
      "Plain Table 1": {
        styleId: `PlainTable1`,
        name: `Plain Table 1`,
        basedOn: `TableNormal`,
        uiPriority: `41`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `BFBFBF`,
              themeColor: `background1`,
              themeShade: `BF`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `BFBFBF`,
                  themeColor: `background1`,
                  themeShade: `BF`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
        ],
      },
      "Plain Table 2": {
        styleId: `PlainTable2`,
        name: `Plain Table 2`,
        basedOn: `TableNormal`,
        uiPriority: `42`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `7F7F7F`,
              themeColor: `text1`,
              themeTint: `80`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `7F7F7F`,
              themeColor: `text1`,
              themeTint: `80`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
            },
          },
        ],
      },
      "Plain Table 3": {
        styleId: `PlainTable3`,
        name: `Plain Table 3`,
        basedOn: `TableNormal`,
        uiPriority: `43`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
            },
          },
          { type: `lastRow`, rPr: { bold: !0 }, tcPr: { borders: { top: { val: `nil` } } } },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
            },
          },
          { type: `lastCol`, rPr: { bold: !0 }, tcPr: { borders: { left: { val: `nil` } } } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
      "Plain Table 4": {
        styleId: `PlainTable4`,
        name: `Plain Table 4`,
        basedOn: `TableNormal`,
        uiPriority: `44`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
        ],
      },
      "Plain Table 5": {
        styleId: `PlainTable5`,
        name: `Plain Table 5`,
        basedOn: `TableNormal`,
        uiPriority: `45`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `7F7F7F`,
                  themeColor: `text1`,
                  themeTint: `80`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `F2F2F2`,
                themeFill: `background1`,
                themeFillShade: `F2`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
      "Grid Table 1 Light": {
        styleId: `GridTable1Light`,
        name: `Grid Table 1 Light`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `999999`,
              themeColor: `text1`,
              themeTint: `66`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `999999`,
              themeColor: `text1`,
              themeTint: `66`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `999999`,
              themeColor: `text1`,
              themeTint: `66`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `999999`,
              themeColor: `text1`,
              themeTint: `66`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `999999`,
              themeColor: `text1`,
              themeTint: `66`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `999999`,
              themeColor: `text1`,
              themeTint: `66`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
        ],
      },
      "Grid Table 1 Light Accent 1": {
        styleId: `GridTable1Light-Accent1`,
        name: `Grid Table 1 Light Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `83CAEB`,
              themeColor: `accent1`,
              themeTint: `66`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `83CAEB`,
              themeColor: `accent1`,
              themeTint: `66`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `83CAEB`,
              themeColor: `accent1`,
              themeTint: `66`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `83CAEB`,
              themeColor: `accent1`,
              themeTint: `66`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `83CAEB`,
              themeColor: `accent1`,
              themeTint: `66`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `83CAEB`,
              themeColor: `accent1`,
              themeTint: `66`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
        ],
      },
      "Grid Table 1 Light Accent 2": {
        styleId: `GridTable1Light-Accent2`,
        name: `Grid Table 1 Light Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F6C5AC`,
              themeColor: `accent2`,
              themeTint: `66`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F6C5AC`,
              themeColor: `accent2`,
              themeTint: `66`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F6C5AC`,
              themeColor: `accent2`,
              themeTint: `66`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F6C5AC`,
              themeColor: `accent2`,
              themeTint: `66`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F6C5AC`,
              themeColor: `accent2`,
              themeTint: `66`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F6C5AC`,
              themeColor: `accent2`,
              themeTint: `66`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `F1A983`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `F1A983`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
        ],
      },
      "Grid Table 1 Light Accent 3": {
        styleId: `GridTable1Light-Accent3`,
        name: `Grid Table 1 Light Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `84E290`,
              themeColor: `accent3`,
              themeTint: `66`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `84E290`,
              themeColor: `accent3`,
              themeTint: `66`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `84E290`,
              themeColor: `accent3`,
              themeTint: `66`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `84E290`,
              themeColor: `accent3`,
              themeTint: `66`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `84E290`,
              themeColor: `accent3`,
              themeTint: `66`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `84E290`,
              themeColor: `accent3`,
              themeTint: `66`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `47D459`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `47D459`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
        ],
      },
      "Grid Table 1 Light Accent 4": {
        styleId: `GridTable1Light-Accent4`,
        name: `Grid Table 1 Light Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `95DCF7`,
              themeColor: `accent4`,
              themeTint: `66`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `95DCF7`,
              themeColor: `accent4`,
              themeTint: `66`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `95DCF7`,
              themeColor: `accent4`,
              themeTint: `66`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `95DCF7`,
              themeColor: `accent4`,
              themeTint: `66`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `95DCF7`,
              themeColor: `accent4`,
              themeTint: `66`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `95DCF7`,
              themeColor: `accent4`,
              themeTint: `66`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `60CAF3`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `60CAF3`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
        ],
      },
      "Grid Table 1 Light Accent 5": {
        styleId: `GridTable1Light-Accent5`,
        name: `Grid Table 1 Light Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `E59EDC`,
              themeColor: `accent5`,
              themeTint: `66`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `E59EDC`,
              themeColor: `accent5`,
              themeTint: `66`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `E59EDC`,
              themeColor: `accent5`,
              themeTint: `66`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `E59EDC`,
              themeColor: `accent5`,
              themeTint: `66`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `E59EDC`,
              themeColor: `accent5`,
              themeTint: `66`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `E59EDC`,
              themeColor: `accent5`,
              themeTint: `66`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `D86DCB`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `D86DCB`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
        ],
      },
      "Grid Table 2": {
        styleId: `GridTable2`,
        name: `Grid Table 2`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 3": {
        styleId: `GridTable3`,
        name: `Grid Table 3`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 4": {
        styleId: `GridTable4`,
        name: `Grid Table 4`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                left: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `000000`,
                  themeColor: `text1`,
                },
                right: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 5 Dark": {
        styleId: `GridTable5Dark`,
        name: `Grid Table 5 Dark`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `FFFFFF`, themeColor: `background1` },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
          },
        },
        tcPr: {
          shading: {
            val: `clear`,
            color: `auto`,
            fill: `CCCCCC`,
            themeFill: `text1`,
            themeFillTint: `33`,
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `999999`,
                themeFill: `text1`,
                themeFillTint: `66`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `999999`,
                themeFill: `text1`,
                themeFillTint: `66`,
              },
            },
          },
        ],
      },
      "Grid Table 6 Colorful": {
        styleId: `GridTable6Colorful`,
        name: `Grid Table 6 Colorful`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `000000`, themeColor: `text1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 7 Colorful": {
        styleId: `GridTable7Colorful`,
        name: `Grid Table 7 Colorful`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `000000`, themeColor: `text1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "List Table 1 Light": {
        styleId: `ListTable1Light`,
        name: `List Table 1 Light`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 2": {
        styleId: `ListTable2`,
        name: `List Table 2`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 3": {
        styleId: `ListTable3`,
        name: `List Table 3`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
            left: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
            right: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: { shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` } },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { right: { val: `nil` } },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { left: { val: `nil` } },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                right: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `000000`,
                  themeColor: `text1`,
                },
                insideH: { val: `nil` },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` }, bottom: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { bottom: { val: `nil` }, right: { val: `nil` } } } },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                left: { val: `nil` },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                right: { val: `nil` },
              },
            },
          },
        ],
      },
      "List Table 4": {
        styleId: `ListTable4`,
        name: `List Table 4`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `666666`,
              themeColor: `text1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                left: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `000000`,
                  themeColor: `text1`,
                },
                right: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
                insideH: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `666666`,
                  themeColor: `text1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 5 Dark": {
        styleId: `ListTable5Dark`,
        name: `List Table 5 Dark`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `FFFFFF`, themeColor: `background1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `24`, space: `0`, color: `000000`, themeColor: `text1` },
            left: { val: `single`, sz: `24`, space: `0`, color: `000000`, themeColor: `text1` },
            bottom: { val: `single`, sz: `24`, space: `0`, color: `000000`, themeColor: `text1` },
            right: { val: `single`, sz: `24`, space: `0`, color: `000000`, themeColor: `text1` },
          },
        },
        tcPr: { shading: { val: `clear`, color: `auto`, fill: `000000`, themeFill: `text1` } },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `18`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { top: { val: `nil` }, left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { top: { val: `nil` }, right: { val: `nil` } } } },
        ],
      },
      "List Table 6 Colorful": {
        styleId: `ListTable6Colorful`,
        name: `List Table 6 Colorful`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `000000`, themeColor: `text1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `000000`,
                  themeColor: `text1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 7 Colorful": {
        styleId: `ListTable7Colorful`,
        name: `List Table 7 Colorful`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `000000`, themeColor: `text1` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `000000`,
                  themeColor: `text1`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: { val: `single`, sz: `4`, space: `0`, color: `000000`, themeColor: `text1` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `CCCCCC`,
                themeFill: `text1`,
                themeFillTint: `33`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
      "List Table 7 Colorful Accent 1": {
        styleId: `ListTable7Colorful-Accent1`,
        name: `List Table 7 Colorful Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent1`, themeShade: `BF` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
    };
  }),
  Ec,
  Dc = e(() => {
    Ec = {
      "List Table 6 Colorful Accent 1": {
        styleId: `ListTable6Colorful-Accent1`,
        name: `List Table 6 Colorful Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent1`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 5 Dark Accent 1": {
        styleId: `ListTable5Dark-Accent1`,
        name: `List Table 5 Dark Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `FFFFFF`, themeColor: `background1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `24`, space: `0`, color: `156082`, themeColor: `accent1` },
            left: { val: `single`, sz: `24`, space: `0`, color: `156082`, themeColor: `accent1` },
            bottom: { val: `single`, sz: `24`, space: `0`, color: `156082`, themeColor: `accent1` },
            right: { val: `single`, sz: `24`, space: `0`, color: `156082`, themeColor: `accent1` },
          },
        },
        tcPr: { shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` } },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `18`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { top: { val: `nil` }, left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { top: { val: `nil` }, right: { val: `nil` } } } },
        ],
      },
      "List Table 4 Accent 1": {
        styleId: `ListTable4-Accent1`,
        name: `List Table 4 Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                insideH: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 3 Accent 1": {
        styleId: `ListTable3-Accent1`,
        name: `List Table 3 Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
            left: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
            right: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { right: { val: `nil` } },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { left: { val: `nil` } },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                insideH: { val: `nil` },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` }, bottom: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { bottom: { val: `nil` }, right: { val: `nil` } } } },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
                left: { val: `nil` },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
                right: { val: `nil` },
              },
            },
          },
        ],
      },
      "List Table 2 Accent 1": {
        styleId: `ListTable2-Accent1`,
        name: `List Table 2 Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 1 Light Accent 1": {
        styleId: `ListTable1Light-Accent1`,
        name: `List Table 1 Light Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 7 Colorful Accent 1": {
        styleId: `GridTable7Colorful-Accent1`,
        name: `Grid Table 7 Colorful Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent1`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 6 Colorful Accent 1": {
        styleId: `GridTable6Colorful-Accent1`,
        name: `Grid Table 6 Colorful Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent1`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 5 Dark Accent 1": {
        styleId: `GridTable5Dark-Accent1`,
        name: `Grid Table 5 Dark Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `FFFFFF`, themeColor: `background1` },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
          },
        },
        tcPr: {
          shading: {
            val: `clear`,
            color: `auto`,
            fill: `C1E4F5`,
            themeFill: `accent1`,
            themeFillTint: `33`,
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `83CAEB`,
                themeFill: `accent1`,
                themeFillTint: `66`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `83CAEB`,
                themeFill: `accent1`,
                themeFillTint: `66`,
              },
            },
          },
        ],
      },
      "Grid Table 4 Accent 1": {
        styleId: `GridTable4-Accent1`,
        name: `Grid Table 4 Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `156082`,
                  themeColor: `accent1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `156082`, themeFill: `accent1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `156082`, themeColor: `accent1` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 3 Accent 1": {
        styleId: `GridTable3-Accent1`,
        name: `Grid Table 3 Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `45B0E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `auto`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `auto`,
                fill: `C1E4F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `45B0E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 1 Light Accent 6": {
        styleId: `GridTable1Light-Accent6`,
        name: `Grid Table 1 Light Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `B4E5A2`,
              themeColor: `accent6`,
              themeTint: `66`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `B4E5A2`,
              themeColor: `accent6`,
              themeTint: `66`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `B4E5A2`,
              themeColor: `accent6`,
              themeTint: `66`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `B4E5A2`,
              themeColor: `accent6`,
              themeTint: `66`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `B4E5A2`,
              themeColor: `accent6`,
              themeTint: `66`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `B4E5A2`,
              themeColor: `accent6`,
              themeTint: `66`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
        ],
      },
      "Grid Table 2 Accent 1": {
        styleId: `GridTable2-Accent1`,
        name: `Grid Table 2 Accent 1`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `46B1E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `46B1E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `46B1E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `46B1E1`,
              themeColor: `accent1`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `46B1E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `46B1E1`,
                  themeColor: `accent1`,
                  themeTint: `99`,
                },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C1E5F5`,
                fill: `C1E5F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C1E5F5`,
                fill: `C1E5F5`,
                themeFill: `accent1`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 2 Accent 2": {
        styleId: `GridTable2-Accent2`,
        name: `Grid Table 2 Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 2 Accent 3": {
        styleId: `GridTable2-Accent3`,
        name: `Grid Table 2 Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 2 Accent 4": {
        styleId: `GridTable2-Accent4`,
        name: `Grid Table 2 Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 2 Accent 5": {
        styleId: `GridTable2-Accent5`,
        name: `Grid Table 2 Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 2 Accent 6": {
        styleId: `GridTable2-Accent6`,
        name: `Grid Table 2 Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `2`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `2`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 3 Accent 2": {
        styleId: `GridTable3-Accent2`,
        name: `Grid Table 3 Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 3 Accent 3": {
        styleId: `GridTable3-Accent3`,
        name: `Grid Table 3 Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 3 Accent 4": {
        styleId: `GridTable3-Accent4`,
        name: `Grid Table 3 Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
    };
  }),
  Oc,
  kc = e(() => {
    Oc = {
      "Grid Table 3 Accent 5": {
        styleId: `GridTable3-Accent5`,
        name: `Grid Table 3 Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 3 Accent 6": {
        styleId: `GridTable3-Accent6`,
        name: `Grid Table 3 Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 4 Accent 2": {
        styleId: `GridTable4-Accent2`,
        name: `Grid Table 4 Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 4 Accent 3": {
        styleId: `GridTable4-Accent3`,
        name: `Grid Table 4 Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 4 Accent 4": {
        styleId: `GridTable4-Accent4`,
        name: `Grid Table 4 Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 4 Accent 5": {
        styleId: `GridTable4-Accent5`,
        name: `Grid Table 4 Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 4 Accent 6": {
        styleId: `GridTable4-Accent6`,
        name: `Grid Table 4 Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 5 Dark Accent 2": {
        styleId: `GridTable5Dark-Accent2`,
        name: `Grid Table 5 Dark Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `FFFFFF`, themeColor: `background1` },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
          },
        },
        tcPr: {
          shading: {
            val: `clear`,
            color: `FBE3D6`,
            fill: `FBE3D6`,
            themeFill: `accent2`,
            themeFillTint: `33`,
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F6C6AD`,
                fill: `F6C6AD`,
                themeFill: `accent2`,
                themeFillTint: `66`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F6C6AD`,
                fill: `F6C6AD`,
                themeFill: `accent2`,
                themeFillTint: `66`,
              },
            },
          },
        ],
      },
      "Grid Table 5 Dark Accent 3": {
        styleId: `GridTable5Dark-Accent3`,
        name: `Grid Table 5 Dark Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `FFFFFF`, themeColor: `background1` },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
          },
        },
        tcPr: {
          shading: {
            val: `clear`,
            color: `C2F1C8`,
            fill: `C2F1C8`,
            themeFill: `accent3`,
            themeFillTint: `33`,
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `84E291`,
                fill: `84E291`,
                themeFill: `accent3`,
                themeFillTint: `66`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `84E291`,
                fill: `84E291`,
                themeFill: `accent3`,
                themeFillTint: `66`,
              },
            },
          },
        ],
      },
      "Grid Table 5 Dark Accent 4": {
        styleId: `GridTable5Dark-Accent4`,
        name: `Grid Table 5 Dark Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `FFFFFF`, themeColor: `background1` },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
          },
        },
        tcPr: {
          shading: {
            val: `clear`,
            color: `CAEEFB`,
            fill: `CAEEFB`,
            themeFill: `accent4`,
            themeFillTint: `33`,
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `96DCF8`,
                fill: `96DCF8`,
                themeFill: `accent4`,
                themeFillTint: `66`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `96DCF8`,
                fill: `96DCF8`,
                themeFill: `accent4`,
                themeFillTint: `66`,
              },
            },
          },
        ],
      },
      "Grid Table 5 Dark Accent 5": {
        styleId: `GridTable5Dark-Accent5`,
        name: `Grid Table 5 Dark Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `FFFFFF`, themeColor: `background1` },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
          },
        },
        tcPr: {
          shading: {
            val: `clear`,
            color: `F2CFEE`,
            fill: `F2CFEE`,
            themeFill: `accent5`,
            themeFillTint: `33`,
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `E59EDD`,
                fill: `E59EDD`,
                themeFill: `accent5`,
                themeFillTint: `66`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `E59EDD`,
                fill: `E59EDD`,
                themeFill: `accent5`,
                themeFillTint: `66`,
              },
            },
          },
        ],
      },
      "Grid Table 5 Dark Accent 6": {
        styleId: `GridTable5Dark-Accent6`,
        name: `Grid Table 5 Dark Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `FFFFFF`, themeColor: `background1` },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `FFFFFF`,
              themeColor: `background1`,
            },
          },
        },
        tcPr: {
          shading: {
            val: `clear`,
            color: `D9F2D0`,
            fill: `D9F2D0`,
            themeFill: `accent6`,
            themeFillTint: `33`,
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `B4E5A2`,
                fill: `B4E5A2`,
                themeFill: `accent6`,
                themeFillTint: `66`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `B4E5A2`,
                fill: `B4E5A2`,
                themeFill: `accent6`,
                themeFillTint: `66`,
              },
            },
          },
        ],
      },
      "Grid Table 6 Colorful Accent 2": {
        styleId: `GridTable6Colorful-Accent2`,
        name: `Grid Table 6 Colorful Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent2`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 6 Colorful Accent 3": {
        styleId: `GridTable6Colorful-Accent3`,
        name: `Grid Table 6 Colorful Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent3`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 6 Colorful Accent 4": {
        styleId: `GridTable6Colorful-Accent4`,
        name: `Grid Table 6 Colorful Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent4`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 6 Colorful Accent 5": {
        styleId: `GridTable6Colorful-Accent5`,
        name: `Grid Table 6 Colorful Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent5`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 6 Colorful Accent 6": {
        styleId: `GridTable6Colorful-Accent6`,
        name: `Grid Table 6 Colorful Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent6`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `12`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "Grid Table 7 Colorful Accent 2": {
        styleId: `GridTable7Colorful-Accent2`,
        name: `Grid Table 7 Colorful Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent2`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
    };
  }),
  Ac,
  jc = e(() => {
    Ac = {
      "Grid Table 7 Colorful Accent 3": {
        styleId: `GridTable7Colorful-Accent3`,
        name: `Grid Table 7 Colorful Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent3`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 7 Colorful Accent 4": {
        styleId: `GridTable7Colorful-Accent4`,
        name: `Grid Table 7 Colorful Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent4`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 7 Colorful Accent 5": {
        styleId: `GridTable7Colorful-Accent5`,
        name: `Grid Table 7 Colorful Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent5`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "Grid Table 7 Colorful Accent 6": {
        styleId: `GridTable7Colorful-Accent6`,
        name: `Grid Table 7 Colorful Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent6`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideV: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                left: { val: `nil` },
                bottom: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `nil` },
                bottom: { val: `nil` },
                right: { val: `nil` },
                insideH: { val: `nil` },
                insideV: { val: `nil` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `neCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `nwCell`,
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
        ],
      },
      "List Table 1 Light Accent 2": {
        styleId: `ListTable1Light-Accent2`,
        name: `List Table 1 Light Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 1 Light Accent 3": {
        styleId: `ListTable1Light-Accent3`,
        name: `List Table 1 Light Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 1 Light Accent 4": {
        styleId: `ListTable1Light-Accent4`,
        name: `List Table 1 Light Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 1 Light Accent 5": {
        styleId: `ListTable1Light-Accent5`,
        name: `List Table 1 Light Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 1 Light Accent 6": {
        styleId: `ListTable1Light-Accent6`,
        name: `List Table 1 Light Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `46`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 2 Accent 2": {
        styleId: `ListTable2-Accent2`,
        name: `List Table 2 Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 2 Accent 3": {
        styleId: `ListTable2-Accent3`,
        name: `List Table 2 Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 2 Accent 4": {
        styleId: `ListTable2-Accent4`,
        name: `List Table 2 Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 2 Accent 5": {
        styleId: `ListTable2-Accent5`,
        name: `List Table 2 Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 2 Accent 6": {
        styleId: `ListTable2-Accent6`,
        name: `List Table 2 Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `47`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          { type: `firstRow`, rPr: { bold: !0 } },
          { type: `lastRow`, rPr: { bold: !0 } },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 3 Accent 2": {
        styleId: `ListTable3-Accent2`,
        name: `List Table 3 Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
            left: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
            right: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { right: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { left: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                insideH: { val: `nil` },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` }, bottom: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { bottom: { val: `nil` }, right: { val: `nil` } } } },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
                left: { val: `nil` },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
                right: { val: `nil` },
              },
            },
          },
        ],
      },
      "List Table 3 Accent 3": {
        styleId: `ListTable3-Accent3`,
        name: `List Table 3 Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
            left: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
            right: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { right: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { left: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                insideH: { val: `nil` },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` }, bottom: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { bottom: { val: `nil` }, right: { val: `nil` } } } },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
                left: { val: `nil` },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
                right: { val: `nil` },
              },
            },
          },
        ],
      },
      "List Table 3 Accent 4": {
        styleId: `ListTable3-Accent4`,
        name: `List Table 3 Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
            left: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
            right: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { right: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { left: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                insideH: { val: `nil` },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` }, bottom: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { bottom: { val: `nil` }, right: { val: `nil` } } } },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
                left: { val: `nil` },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
                right: { val: `nil` },
              },
            },
          },
        ],
      },
      "List Table 3 Accent 5": {
        styleId: `ListTable3-Accent5`,
        name: `List Table 3 Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
            left: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
            right: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { right: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { left: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                insideH: { val: `nil` },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` }, bottom: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { bottom: { val: `nil` }, right: { val: `nil` } } } },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
                left: { val: `nil` },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
                right: { val: `nil` },
              },
            },
          },
        ],
      },
      "List Table 3 Accent 6": {
        styleId: `ListTable3-Accent6`,
        name: `List Table 3 Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `48`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
            left: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
            right: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { right: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: { left: { val: `nil` } },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                insideH: { val: `nil` },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` }, bottom: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { bottom: { val: `nil` }, right: { val: `nil` } } } },
          {
            type: `seCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
                left: { val: `nil` },
              },
            },
          },
          {
            type: `swCell`,
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
                right: { val: `nil` },
              },
            },
          },
        ],
      },
      "List Table 4 Accent 2": {
        styleId: `ListTable4-Accent2`,
        name: `List Table 4 Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `F2AA84`,
              themeColor: `accent2`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
                insideH: { val: `nil` },
              },
              shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `F2AA84`,
                  themeColor: `accent2`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 4 Accent 3": {
        styleId: `ListTable4-Accent3`,
        name: `List Table 4 Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `47D45A`,
              themeColor: `accent3`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
                insideH: { val: `nil` },
              },
              shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `47D45A`,
                  themeColor: `accent3`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 4 Accent 4": {
        styleId: `ListTable4-Accent4`,
        name: `List Table 4 Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `61CBF4`,
              themeColor: `accent4`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
                insideH: { val: `nil` },
              },
              shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `61CBF4`,
                  themeColor: `accent4`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 4 Accent 5": {
        styleId: `ListTable4-Accent5`,
        name: `List Table 4 Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `D86ECC`,
              themeColor: `accent5`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
                insideH: { val: `nil` },
              },
              shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `D86ECC`,
                  themeColor: `accent5`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 4 Accent 6": {
        styleId: `ListTable4-Accent6`,
        name: `List Table 4 Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `49`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            left: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            bottom: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            right: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
            insideH: {
              val: `single`,
              sz: `4`,
              space: `0`,
              color: `8ED973`,
              themeColor: `accent6`,
              themeTint: `99`,
            },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0, color: { val: `FFFFFF`, themeColor: `background1` } },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
                insideH: { val: `nil` },
              },
              shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `double`,
                  sz: `4`,
                  space: `0`,
                  color: `8ED973`,
                  themeColor: `accent6`,
                  themeTint: `99`,
                },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
    };
  }),
  Mc,
  Nc = e(() => {
    Mc = {
      "List Table 5 Dark Accent 2": {
        styleId: `ListTable5Dark-Accent2`,
        name: `List Table 5 Dark Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `FFFFFF`, themeColor: `background1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `24`, space: `0`, color: `E97132`, themeColor: `accent2` },
            left: { val: `single`, sz: `24`, space: `0`, color: `E97132`, themeColor: `accent2` },
            bottom: { val: `single`, sz: `24`, space: `0`, color: `E97132`, themeColor: `accent2` },
            right: { val: `single`, sz: `24`, space: `0`, color: `E97132`, themeColor: `accent2` },
          },
        },
        tcPr: { shading: { val: `clear`, color: `E97132`, fill: `E97132`, themeFill: `accent2` } },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `18`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { top: { val: `nil` }, left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { top: { val: `nil` }, right: { val: `nil` } } } },
        ],
      },
      "List Table 5 Dark Accent 3": {
        styleId: `ListTable5Dark-Accent3`,
        name: `List Table 5 Dark Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `FFFFFF`, themeColor: `background1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `24`, space: `0`, color: `196B24`, themeColor: `accent3` },
            left: { val: `single`, sz: `24`, space: `0`, color: `196B24`, themeColor: `accent3` },
            bottom: { val: `single`, sz: `24`, space: `0`, color: `196B24`, themeColor: `accent3` },
            right: { val: `single`, sz: `24`, space: `0`, color: `196B24`, themeColor: `accent3` },
          },
        },
        tcPr: { shading: { val: `clear`, color: `196B24`, fill: `196B24`, themeFill: `accent3` } },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `18`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { top: { val: `nil` }, left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { top: { val: `nil` }, right: { val: `nil` } } } },
        ],
      },
      "List Table 5 Dark Accent 4": {
        styleId: `ListTable5Dark-Accent4`,
        name: `List Table 5 Dark Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `FFFFFF`, themeColor: `background1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `24`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
            left: { val: `single`, sz: `24`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
            bottom: { val: `single`, sz: `24`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
            right: { val: `single`, sz: `24`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
          },
        },
        tcPr: { shading: { val: `clear`, color: `0F9ED5`, fill: `0F9ED5`, themeFill: `accent4` } },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `18`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { top: { val: `nil` }, left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { top: { val: `nil` }, right: { val: `nil` } } } },
        ],
      },
      "List Table 5 Dark Accent 5": {
        styleId: `ListTable5Dark-Accent5`,
        name: `List Table 5 Dark Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `FFFFFF`, themeColor: `background1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `24`, space: `0`, color: `A02B93`, themeColor: `accent5` },
            left: { val: `single`, sz: `24`, space: `0`, color: `A02B93`, themeColor: `accent5` },
            bottom: { val: `single`, sz: `24`, space: `0`, color: `A02B93`, themeColor: `accent5` },
            right: { val: `single`, sz: `24`, space: `0`, color: `A02B93`, themeColor: `accent5` },
          },
        },
        tcPr: { shading: { val: `clear`, color: `A02B93`, fill: `A02B93`, themeFill: `accent5` } },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `18`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { top: { val: `nil` }, left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { top: { val: `nil` }, right: { val: `nil` } } } },
        ],
      },
      "List Table 5 Dark Accent 6": {
        styleId: `ListTable5Dark-Accent6`,
        name: `List Table 5 Dark Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `50`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `FFFFFF`, themeColor: `background1` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `24`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
            left: { val: `single`, sz: `24`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
            bottom: { val: `single`, sz: `24`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
            right: { val: `single`, sz: `24`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
          },
        },
        tcPr: { shading: { val: `clear`, color: `4EA72E`, fill: `4EA72E`, themeFill: `accent6` } },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `18`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `firstCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `lastCol`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band2Vert`,
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              borders: {
                top: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `FFFFFF`,
                  themeColor: `background1`,
                },
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { top: { val: `nil` }, left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { top: { val: `nil` }, right: { val: `nil` } } } },
        ],
      },
      "List Table 6 Colorful Accent 2": {
        styleId: `ListTable6Colorful-Accent2`,
        name: `List Table 6 Colorful Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent2`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 6 Colorful Accent 3": {
        styleId: `ListTable6Colorful-Accent3`,
        name: `List Table 6 Colorful Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent3`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 6 Colorful Accent 4": {
        styleId: `ListTable6Colorful-Accent4`,
        name: `List Table 6 Colorful Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent4`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 6 Colorful Accent 5": {
        styleId: `ListTable6Colorful-Accent5`,
        name: `List Table 6 Colorful Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent5`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 6 Colorful Accent 6": {
        styleId: `ListTable6Colorful-Accent6`,
        name: `List Table 6 Colorful Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `51`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent6`, themeShade: `BF` } },
        tblPr: {
          rowBandSize: `1`,
          colBandSize: `1`,
          borders: {
            top: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
            bottom: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
          },
        },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
              },
            },
          },
          {
            type: `lastRow`,
            rPr: { bold: !0 },
            tcPr: {
              borders: {
                top: { val: `double`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
              },
            },
          },
          { type: `firstCol`, rPr: { bold: !0 } },
          { type: `lastCol`, rPr: { bold: !0 } },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
        ],
      },
      "List Table 7 Colorful Accent 2": {
        styleId: `ListTable7Colorful-Accent2`,
        name: `List Table 7 Colorful Accent 2`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent2`, themeShade: `BF` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `E97132`, themeColor: `accent2` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `E97132`,
                  themeColor: `accent2`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `FBE3D6`,
                fill: `FBE3D6`,
                themeFill: `accent2`,
                themeFillTint: `33`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
      "List Table 7 Colorful Accent 3": {
        styleId: `ListTable7Colorful-Accent3`,
        name: `List Table 7 Colorful Accent 3`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent3`, themeShade: `BF` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `196B24`, themeColor: `accent3` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `196B24`,
                  themeColor: `accent3`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `C2F1C8`,
                fill: `C2F1C8`,
                themeFill: `accent3`,
                themeFillTint: `33`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
      "List Table 7 Colorful Accent 4": {
        styleId: `ListTable7Colorful-Accent4`,
        name: `List Table 7 Colorful Accent 4`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent4`, themeShade: `BF` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `0F9ED5`, themeColor: `accent4` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `0F9ED5`,
                  themeColor: `accent4`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `CAEEFB`,
                fill: `CAEEFB`,
                themeFill: `accent4`,
                themeFillTint: `33`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
      "List Table 7 Colorful Accent 5": {
        styleId: `ListTable7Colorful-Accent5`,
        name: `List Table 7 Colorful Accent 5`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent5`, themeShade: `BF` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `A02B93`, themeColor: `accent5` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `A02B93`,
                  themeColor: `accent5`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `F2CFEE`,
                fill: `F2CFEE`,
                themeFill: `accent5`,
                themeFillTint: `33`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
      "List Table 7 Colorful Accent 6": {
        styleId: `ListTable7Colorful-Accent6`,
        name: `List Table 7 Colorful Accent 6`,
        basedOn: `TableNormal`,
        uiPriority: `52`,
        pPr: { spacing: { after: `0`, line: `240`, lineRule: `auto` } },
        rPr: { color: { val: `0F4761`, themeColor: `accent6`, themeShade: `BF` } },
        tblPr: { rowBandSize: `1`, colBandSize: `1` },
        tblStylePr: [
          {
            type: `firstRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                bottom: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastRow`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                top: { val: `single`, sz: `4`, space: `0`, color: `4EA72E`, themeColor: `accent6` },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `firstCol`,
            pPr: { alignment: `right` },
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                right: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `lastCol`,
            rPr: { italic: !0 },
            tcPr: {
              borders: {
                left: {
                  val: `single`,
                  sz: `4`,
                  space: `0`,
                  color: `4EA72E`,
                  themeColor: `accent6`,
                },
              },
              shading: { val: `clear`, color: `FFFFFF`, fill: `FFFFFF`, themeFill: `background1` },
            },
          },
          {
            type: `band1Vert`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          {
            type: `band1Horz`,
            tcPr: {
              shading: {
                val: `clear`,
                color: `D9F2D0`,
                fill: `D9F2D0`,
                themeFill: `accent6`,
                themeFillTint: `33`,
              },
            },
          },
          { type: `neCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `nwCell`, tcPr: { borders: { right: { val: `nil` } } } },
          { type: `seCell`, tcPr: { borders: { left: { val: `nil` } } } },
          { type: `swCell`, tcPr: { borders: { right: { val: `nil` } } } },
        ],
      },
    };
  }),
  Pc,
  Fc,
  Ic,
  Lc = e(() => {
    (Tc(),
      Dc(),
      kc(),
      jc(),
      Nc(),
      (Pc =
        `Normal Table.Table Grid.Grid Table Light.Plain Table 1.Plain Table 2.Plain Table 3.Plain Table 4.Plain Table 5.Grid Table 1 Light.Grid Table 1 Light Accent 1.Grid Table 1 Light Accent 2.Grid Table 1 Light Accent 3.Grid Table 1 Light Accent 4.Grid Table 1 Light Accent 5.Grid Table 2.Grid Table 3.Grid Table 4.Grid Table 5 Dark.Grid Table 6 Colorful.Grid Table 7 Colorful.List Table 1 Light.List Table 2.List Table 3.List Table 4.List Table 5 Dark.List Table 6 Colorful.List Table 7 Colorful.List Table 7 Colorful Accent 1.List Table 6 Colorful Accent 1.List Table 5 Dark Accent 1.List Table 4 Accent 1.List Table 3 Accent 1.List Table 2 Accent 1.List Table 1 Light Accent 1.Grid Table 7 Colorful Accent 1.Grid Table 6 Colorful Accent 1.Grid Table 5 Dark Accent 1.Grid Table 4 Accent 1.Grid Table 3 Accent 1.Grid Table 1 Light Accent 6.Grid Table 2 Accent 1.Grid Table 2 Accent 2.Grid Table 2 Accent 3.Grid Table 2 Accent 4.Grid Table 2 Accent 5.Grid Table 2 Accent 6.Grid Table 3 Accent 2.Grid Table 3 Accent 3.Grid Table 3 Accent 4.Grid Table 3 Accent 5.Grid Table 3 Accent 6.Grid Table 4 Accent 2.Grid Table 4 Accent 3.Grid Table 4 Accent 4.Grid Table 4 Accent 5.Grid Table 4 Accent 6.Grid Table 5 Dark Accent 2.Grid Table 5 Dark Accent 3.Grid Table 5 Dark Accent 4.Grid Table 5 Dark Accent 5.Grid Table 5 Dark Accent 6.Grid Table 6 Colorful Accent 2.Grid Table 6 Colorful Accent 3.Grid Table 6 Colorful Accent 4.Grid Table 6 Colorful Accent 5.Grid Table 6 Colorful Accent 6.Grid Table 7 Colorful Accent 2.Grid Table 7 Colorful Accent 3.Grid Table 7 Colorful Accent 4.Grid Table 7 Colorful Accent 5.Grid Table 7 Colorful Accent 6.List Table 1 Light Accent 2.List Table 1 Light Accent 3.List Table 1 Light Accent 4.List Table 1 Light Accent 5.List Table 1 Light Accent 6.List Table 2 Accent 2.List Table 2 Accent 3.List Table 2 Accent 4.List Table 2 Accent 5.List Table 2 Accent 6.List Table 3 Accent 2.List Table 3 Accent 3.List Table 3 Accent 4.List Table 3 Accent 5.List Table 3 Accent 6.List Table 4 Accent 2.List Table 4 Accent 3.List Table 4 Accent 4.List Table 4 Accent 5.List Table 4 Accent 6.List Table 5 Dark Accent 2.List Table 5 Dark Accent 3.List Table 5 Dark Accent 4.List Table 5 Dark Accent 5.List Table 5 Dark Accent 6.List Table 6 Colorful Accent 2.List Table 6 Colorful Accent 3.List Table 6 Colorful Accent 4.List Table 6 Colorful Accent 5.List Table 6 Colorful Accent 6.List Table 7 Colorful Accent 2.List Table 7 Colorful Accent 3.List Table 7 Colorful Accent 4.List Table 7 Colorful Accent 5.List Table 7 Colorful Accent 6`.split(
          `.`,
        )),
      (Fc = { ...wc, ...Ec, ...Oc, ...Ac, ...Mc }),
      (Ic = {
        TableNormal: `Normal Table`,
        TableGrid: `Table Grid`,
        TableGridLight: `Grid Table Light`,
        PlainTable1: `Plain Table 1`,
        PlainTable2: `Plain Table 2`,
        PlainTable3: `Plain Table 3`,
        PlainTable4: `Plain Table 4`,
        PlainTable5: `Plain Table 5`,
        GridTable1Light: `Grid Table 1 Light`,
        "GridTable1Light-Accent1": `Grid Table 1 Light Accent 1`,
        "GridTable1Light-Accent2": `Grid Table 1 Light Accent 2`,
        "GridTable1Light-Accent3": `Grid Table 1 Light Accent 3`,
        "GridTable1Light-Accent4": `Grid Table 1 Light Accent 4`,
        "GridTable1Light-Accent5": `Grid Table 1 Light Accent 5`,
        GridTable2: `Grid Table 2`,
        GridTable3: `Grid Table 3`,
        GridTable4: `Grid Table 4`,
        GridTable5Dark: `Grid Table 5 Dark`,
        GridTable6Colorful: `Grid Table 6 Colorful`,
        GridTable7Colorful: `Grid Table 7 Colorful`,
        ListTable1Light: `List Table 1 Light`,
        ListTable2: `List Table 2`,
        ListTable3: `List Table 3`,
        ListTable4: `List Table 4`,
        ListTable5Dark: `List Table 5 Dark`,
        ListTable6Colorful: `List Table 6 Colorful`,
        ListTable7Colorful: `List Table 7 Colorful`,
        "ListTable7Colorful-Accent1": `List Table 7 Colorful Accent 1`,
        "ListTable6Colorful-Accent1": `List Table 6 Colorful Accent 1`,
        "ListTable5Dark-Accent1": `List Table 5 Dark Accent 1`,
        "ListTable4-Accent1": `List Table 4 Accent 1`,
        "ListTable3-Accent1": `List Table 3 Accent 1`,
        "ListTable2-Accent1": `List Table 2 Accent 1`,
        "ListTable1Light-Accent1": `List Table 1 Light Accent 1`,
        "GridTable7Colorful-Accent1": `Grid Table 7 Colorful Accent 1`,
        "GridTable6Colorful-Accent1": `Grid Table 6 Colorful Accent 1`,
        "GridTable5Dark-Accent1": `Grid Table 5 Dark Accent 1`,
        "GridTable4-Accent1": `Grid Table 4 Accent 1`,
        "GridTable3-Accent1": `Grid Table 3 Accent 1`,
        "GridTable1Light-Accent6": `Grid Table 1 Light Accent 6`,
        "GridTable2-Accent1": `Grid Table 2 Accent 1`,
        "GridTable2-Accent2": `Grid Table 2 Accent 2`,
        "GridTable2-Accent3": `Grid Table 2 Accent 3`,
        "GridTable2-Accent4": `Grid Table 2 Accent 4`,
        "GridTable2-Accent5": `Grid Table 2 Accent 5`,
        "GridTable2-Accent6": `Grid Table 2 Accent 6`,
        "GridTable3-Accent2": `Grid Table 3 Accent 2`,
        "GridTable3-Accent3": `Grid Table 3 Accent 3`,
        "GridTable3-Accent4": `Grid Table 3 Accent 4`,
        "GridTable3-Accent5": `Grid Table 3 Accent 5`,
        "GridTable3-Accent6": `Grid Table 3 Accent 6`,
        "GridTable4-Accent2": `Grid Table 4 Accent 2`,
        "GridTable4-Accent3": `Grid Table 4 Accent 3`,
        "GridTable4-Accent4": `Grid Table 4 Accent 4`,
        "GridTable4-Accent5": `Grid Table 4 Accent 5`,
        "GridTable4-Accent6": `Grid Table 4 Accent 6`,
        "GridTable5Dark-Accent2": `Grid Table 5 Dark Accent 2`,
        "GridTable5Dark-Accent3": `Grid Table 5 Dark Accent 3`,
        "GridTable5Dark-Accent4": `Grid Table 5 Dark Accent 4`,
        "GridTable5Dark-Accent5": `Grid Table 5 Dark Accent 5`,
        "GridTable5Dark-Accent6": `Grid Table 5 Dark Accent 6`,
        "GridTable6Colorful-Accent2": `Grid Table 6 Colorful Accent 2`,
        "GridTable6Colorful-Accent3": `Grid Table 6 Colorful Accent 3`,
        "GridTable6Colorful-Accent4": `Grid Table 6 Colorful Accent 4`,
        "GridTable6Colorful-Accent5": `Grid Table 6 Colorful Accent 5`,
        "GridTable6Colorful-Accent6": `Grid Table 6 Colorful Accent 6`,
        "GridTable7Colorful-Accent2": `Grid Table 7 Colorful Accent 2`,
        "GridTable7Colorful-Accent3": `Grid Table 7 Colorful Accent 3`,
        "GridTable7Colorful-Accent4": `Grid Table 7 Colorful Accent 4`,
        "GridTable7Colorful-Accent5": `Grid Table 7 Colorful Accent 5`,
        "GridTable7Colorful-Accent6": `Grid Table 7 Colorful Accent 6`,
        "ListTable1Light-Accent2": `List Table 1 Light Accent 2`,
        "ListTable1Light-Accent3": `List Table 1 Light Accent 3`,
        "ListTable1Light-Accent4": `List Table 1 Light Accent 4`,
        "ListTable1Light-Accent5": `List Table 1 Light Accent 5`,
        "ListTable1Light-Accent6": `List Table 1 Light Accent 6`,
        "ListTable2-Accent2": `List Table 2 Accent 2`,
        "ListTable2-Accent3": `List Table 2 Accent 3`,
        "ListTable2-Accent4": `List Table 2 Accent 4`,
        "ListTable2-Accent5": `List Table 2 Accent 5`,
        "ListTable2-Accent6": `List Table 2 Accent 6`,
        "ListTable3-Accent2": `List Table 3 Accent 2`,
        "ListTable3-Accent3": `List Table 3 Accent 3`,
        "ListTable3-Accent4": `List Table 3 Accent 4`,
        "ListTable3-Accent5": `List Table 3 Accent 5`,
        "ListTable3-Accent6": `List Table 3 Accent 6`,
        "ListTable4-Accent2": `List Table 4 Accent 2`,
        "ListTable4-Accent3": `List Table 4 Accent 3`,
        "ListTable4-Accent4": `List Table 4 Accent 4`,
        "ListTable4-Accent5": `List Table 4 Accent 5`,
        "ListTable4-Accent6": `List Table 4 Accent 6`,
        "ListTable5Dark-Accent2": `List Table 5 Dark Accent 2`,
        "ListTable5Dark-Accent3": `List Table 5 Dark Accent 3`,
        "ListTable5Dark-Accent4": `List Table 5 Dark Accent 4`,
        "ListTable5Dark-Accent5": `List Table 5 Dark Accent 5`,
        "ListTable5Dark-Accent6": `List Table 5 Dark Accent 6`,
        "ListTable6Colorful-Accent2": `List Table 6 Colorful Accent 2`,
        "ListTable6Colorful-Accent3": `List Table 6 Colorful Accent 3`,
        "ListTable6Colorful-Accent4": `List Table 6 Colorful Accent 4`,
        "ListTable6Colorful-Accent5": `List Table 6 Colorful Accent 5`,
        "ListTable6Colorful-Accent6": `List Table 6 Colorful Accent 6`,
        "ListTable7Colorful-Accent2": `List Table 7 Colorful Accent 2`,
        "ListTable7Colorful-Accent3": `List Table 7 Colorful Accent 3`,
        "ListTable7Colorful-Accent4": `List Table 7 Colorful Accent 4`,
        "ListTable7Colorful-Accent5": `List Table 7 Colorful Accent 5`,
        "ListTable7Colorful-Accent6": `List Table 7 Colorful Accent 6`,
      }));
  });
function Rc(e) {
  if (e) return wl[e];
}
function zc(e) {
  if (e) return Vc(e) ? e : Hc(e) ? Ic[e] : void 0;
}
function Bc() {
  return Pc.map((e) => Uc(Fc[e]));
}
function Vc(e) {
  return Object.prototype.hasOwnProperty.call(Fc, e);
}
function Hc(e) {
  return Object.prototype.hasOwnProperty.call(Ic, e);
}
function Uc(e) {
  return {
    id: e.styleId,
    name: e.name,
    basedOn: e.basedOn,
    wholeTable: Kc(e),
    conditionalStyles: (e.tblStylePr ?? []).flatMap((e) => {
      let t = Gc(e.type),
        n = Kc(e);
      return t === void 0 || n === void 0 ? [] : [{ condition: t, style: n }];
    }),
  };
}
function Wc(e) {
  return Fc[e].styleId;
}
function Gc(e) {
  switch (e) {
    case `wholeTable`:
      return w.CONDITION_WHOLE_TABLE;
    case `firstRow`:
      return w.CONDITION_FIRST_ROW;
    case `lastRow`:
      return w.CONDITION_LAST_ROW;
    case `firstCol`:
      return w.CONDITION_FIRST_COLUMN;
    case `lastCol`:
      return w.CONDITION_LAST_COLUMN;
    case `band1Horz`:
      return w.CONDITION_BANDED_ROW_ODD;
    case `band2Horz`:
      return w.CONDITION_BANDED_ROW_EVEN;
    case `band1Vert`:
      return w.CONDITION_BANDED_COLUMN_ODD;
    case `band2Vert`:
      return w.CONDITION_BANDED_COLUMN_EVEN;
    case `nwCell`:
      return w.CONDITION_TOP_LEFT_CELL;
    case `neCell`:
      return w.CONDITION_TOP_RIGHT_CELL;
    case `swCell`:
      return w.CONDITION_BOTTOM_LEFT_CELL;
    case `seCell`:
      return w.CONDITION_BOTTOM_RIGHT_CELL;
    default:
      return;
  }
}
function Kc(e) {
  let t = qc(e),
    n = Jc(e),
    r = Yc(e),
    i = ul(e.pPr?.spacing?.after);
  if (!(t === void 0 && n === void 0 && r === void 0 && i === void 0))
    return { tableProperties: t, cellStyle: n, textStyle: r, spaceAfter: i };
}
function qc(e) {
  let t = Qc(e.tblPr?.shading),
    n = Xc(e.tblPr?.alignment),
    r = tl(e.tblPr?.borders),
    i = cl(e.tblPr?.cellMargins);
  if (!(t === void 0 && n === void 0 && r === void 0 && i === void 0))
    return { fill: t, alignment: n, borders: r, cellMargins: i, effects: [] };
}
function Jc(e) {
  let t = Qc(e.tcPr?.shading),
    n = ll(e.tcPr?.margins?.left),
    r = ll(e.tcPr?.margins?.right),
    i = ll(e.tcPr?.margins?.top),
    a = ll(e.tcPr?.margins?.bottom),
    o = el(e.tcPr?.borders),
    s = nl(e.tcPr?.borders),
    c = e.tcPr?.verticalAlignment,
    l = e.tcPr?.textDirection;
  if (
    !(
      t === void 0 &&
      o === void 0 &&
      s === void 0 &&
      n === void 0 &&
      r === void 0 &&
      i === void 0 &&
      a === void 0 &&
      c === void 0 &&
      l === void 0
    )
  )
    return {
      fill: t,
      lines: o,
      borders: s,
      marginLeft: n,
      marginRight: r,
      marginTop: i,
      marginBottom: a,
      anchor: c,
      textDirection: l,
    };
}
function Yc(e) {
  let t = e.rPr,
    n = $c(t?.color),
    r = Zc(e.pPr?.alignment);
  if (!(n === void 0 && r === void 0 && t?.bold !== !0 && t?.italic !== !0))
    return { bold: t?.bold, italic: t?.italic, fill: n, alignment: r };
}
function Xc(e) {
  switch (e) {
    case `left`:
      return y.ALIGNMENT_TYPE_LEFT;
    case `center`:
      return y.ALIGNMENT_TYPE_CENTER;
    case `right`:
      return y.ALIGNMENT_TYPE_RIGHT;
    default:
      return;
  }
}
function Zc(e) {
  switch (e) {
    case `left`:
      return y.ALIGNMENT_TYPE_LEFT;
    case `center`:
      return y.ALIGNMENT_TYPE_CENTER;
    case `right`:
      return y.ALIGNMENT_TYPE_RIGHT;
    default:
      return;
  }
}
function Qc(e) {
  let t = dl(e);
  return t ? new _e({ type: `solid`, color: t }).toProto() : void 0;
}
function $c(e) {
  let t = pl(e);
  return t ? new _e({ type: `solid`, color: t }).toProto() : void 0;
}
function el(e) {
  if (!e) return;
  let t = {
    top: ol(e.top),
    right: ol(e.right),
    bottom: ol(e.bottom),
    left: ol(e.left),
    diagonalDown: ol(e.tl2br),
    diagonalUp: ol(e.tr2bl),
  };
  if (
    !(
      t.top === void 0 &&
      t.right === void 0 &&
      t.bottom === void 0 &&
      t.left === void 0 &&
      t.diagonalDown === void 0 &&
      t.diagonalUp === void 0
    )
  )
    return t;
}
function tl(e) {
  if (!e) return;
  let t = {
    top: al(e.top),
    right: al(e.right),
    bottom: al(e.bottom),
    left: al(e.left),
    insideHorizontal: al(e.insideH),
    insideVertical: al(e.insideV),
  };
  return rl(t) ? t : void 0;
}
function nl(e) {
  if (!e) return;
  let t = {
    top: al(e.top),
    right: al(e.right),
    bottom: al(e.bottom),
    left: al(e.left),
    diagonalDown: al(e.tl2br),
    diagonalUp: al(e.tr2bl),
  };
  return il(t) ? t : void 0;
}
function rl(e) {
  return (
    e.top !== void 0 ||
    e.right !== void 0 ||
    e.bottom !== void 0 ||
    e.left !== void 0 ||
    e.insideHorizontal !== void 0 ||
    e.insideVertical !== void 0
  );
}
function il(e) {
  return (
    e.top !== void 0 ||
    e.right !== void 0 ||
    e.bottom !== void 0 ||
    e.left !== void 0 ||
    e.diagonalDown !== void 0 ||
    e.diagonalUp !== void 0
  );
}
function al(e) {
  if (!e) return;
  if (e.val === `nil`) return { none: !0 };
  let t = ol(e);
  return t ? { line: t } : void 0;
}
function ol(e) {
  if (!(!e || e.val === `nil`))
    return ut({ color: fl(e), width: sl(e), style: `solid` })?.toProto();
}
function sl(e) {
  let t = Number(e.sz);
  return !Number.isFinite(t) || t <= 0 ? 1 : t / 6;
}
function cl(e) {
  if (!e) return;
  let t = { left: ll(e.left), right: ll(e.right), top: ll(e.top), bottom: ll(e.bottom) };
  if (!(t.left === void 0 && t.right === void 0 && t.top === void 0 && t.bottom === void 0))
    return t;
}
function ll(e) {
  if (!(!e || e.type !== `dxa`)) return ul(e.w);
}
function ul(e) {
  if (e === void 0) return;
  let t = Number(e);
  return Number.isFinite(t) ? Math.round(t * 635) : void 0;
}
function dl(e) {
  if (!(!e || e.val === `nil`))
    return pl({
      val: e.val,
      color: e.fill,
      themeColor: e.themeFill,
      themeTint: e.themeFillTint,
      themeShade: e.themeFillShade,
    });
}
function fl(e) {
  if (e.val !== `nil`)
    return pl({
      color: e.color,
      themeColor: e.themeColor,
      themeTint: e.themeTint,
      themeShade: e.themeShade,
    });
}
function pl(e) {
  if (!e || e.val === `nil`) return;
  let t = ml(e.themeColor),
    n = hl(e),
    r = e.color ?? e.val;
  return t
    ? { type: `proto`, proto: { type: v.COLOR_TYPE_SCHEME, value: t, transform: n, lastColor: r } }
    : r
      ? `#${r}`
      : void 0;
}
function ml(e) {
  switch (e) {
    case `accent1`:
      return `accent1`;
    case `accent2`:
      return `accent2`;
    case `accent3`:
      return `accent3`;
    case `accent4`:
      return `accent4`;
    case `accent5`:
      return `accent5`;
    case `accent6`:
      return `accent6`;
    case `background1`:
      return `bg1`;
    case `background2`:
      return `bg2`;
    case `text1`:
      return `tx1`;
    case `text2`:
      return `tx2`;
    default:
      return;
  }
}
function hl(e) {
  if (e.themeTint !== void 0) {
    let t = Number.parseInt(e.themeTint, 16) / 255;
    return { lumMod: Math.round(t * 1e5), lumOff: Math.round((1 - t) * 1e5) };
  }
  if (e.themeShade !== void 0) {
    let t = Number.parseInt(e.themeShade, 16) / 255;
    return { lumMod: Math.round(t * 1e5) };
  }
}
function gl(e, t) {
  switch (t) {
    case `TableStyleLight1`:
      _l(e);
      break;
  }
}
function _l(e) {
  if (e.rowCount === 0 || e.columnCount === 0) return;
  let t = e.styleOptions,
    n = e.cells.block({ row: 0, column: 0, rowCount: e.rowCount, columnCount: e.columnCount });
  (n.forEachCell((e) => {
    e.margins = El;
  }),
    (n.borders = { top: Tl, bottom: Tl, insideHorizontal: Tl }),
    (n.textStyle.color = `#111111`),
    vl(e, t),
    yl(e, t),
    bl(e, t),
    xl(e, t),
    Sl(e, t));
}
function vl(e, t) {
  if (!t.headerRow) return;
  let n = e.cells.block({ row: 0, column: 0, rowCount: 1, columnCount: e.columnCount });
  ((n.textStyle.bold = !0), (n.borders = { bottom: Tl }));
}
function yl(e, t) {
  if (!t.totalRow) return;
  let n = e.cells.block({
    row: e.rowCount - 1,
    column: 0,
    rowCount: 1,
    columnCount: e.columnCount,
  });
  ((n.textStyle.bold = !0), (n.borders = { top: Tl }));
}
function bl(e, t) {
  (t.firstColumn &&
    (e.cells.block({ row: 0, column: 0, rowCount: e.rowCount, columnCount: 1 }).textStyle.bold =
      !0),
    t.lastColumn &&
      (e.cells.block({
        row: 0,
        column: e.columnCount - 1,
        rowCount: e.rowCount,
        columnCount: 1,
      }).textStyle.bold = !0));
}
function xl(e, t) {
  if (!t.bandedRows) return;
  let n = +!!t.headerRow,
    r = t.totalRow ? e.rowCount - 2 : e.rowCount - 1;
  for (let t = n; t <= r; t += 1)
    (t - n) % 2 == 0 &&
      (e.cells.block({
        row: t,
        column: 0,
        rowCount: 1,
        columnCount: e.columnCount,
      }).fill = `#D9D9D9`);
}
function Sl(e, t) {
  if (!t.bandedColumns) return;
  let n = +!!t.firstColumn,
    r = t.lastColumn ? e.columnCount - 2 : e.columnCount - 1;
  for (let t = n; t <= r; t += 1)
    (t - n) % 2 == 0 &&
      (e.cells.block({ row: 0, column: t, rowCount: e.rowCount, columnCount: 1 }).fill = `#D9D9D9`);
}
var Cl,
  wl,
  Tl,
  El,
  Dl = e(() => {
    (m(),
      g(),
      A(),
      Se(),
      Lc(),
      (Cl = { tableStyleLight1: `TableStyleLight1` }),
      (wl = { TableStyleLight1: Cl.tableStyleLight1, "Table Style Light 1": Cl.tableStyleLight1 }),
      (Tl = { color: `#111111`, width: 0.35, style: `solid` }),
      (El = { left: 7.2, right: 7.2, top: 2.4, bottom: 2.4 }));
  });
function Ol(e) {
  if (!(e === void 0 || !Number.isFinite(e))) return e;
}
function kl(e) {
  if (!(e === void 0 || !Number.isFinite(e) || e <= 0)) return e;
}
function Al(e, t = {}) {
  let n = { left: Ol(e.left), top: Ol(e.top), width: kl(e.width), height: kl(e.height) };
  return (t.inline && ((n.left = void 0), (n.top = void 0)), n);
}
function jl(e, t, n) {
  let r = Nl(t, n);
  if (!(!e && !Pl(r)))
    return { type: h.ELEMENT_PLACEMENT_TYPE_INLINE, horizontalAlignment: e, ...r };
}
function Ml(e, t, n) {
  if (e?.wrap === `inline`) return jl(e.alignment, e, n);
  let r = t.left !== void 0 || t.top !== void 0,
    i = n?.spaceBefore !== void 0 || n?.spaceAfter !== void 0;
  if (!e?.wrap && !r) return i ? jl(void 0, e, n) : void 0;
  let a = Fl(e, n),
    o = Il(e, n);
  return {
    type: h.ELEMENT_PLACEMENT_TYPE_ANCHORED,
    anchorParagraphId: e?.anchorParagraphId,
    horizontalRelativeFrom: e?.horizontalRelativeFrom ?? `page`,
    verticalRelativeFrom: e?.verticalRelativeFrom ?? `page`,
    xOffsetEmu: t.left === void 0 ? void 0 : W(t.left),
    yOffsetEmu: t.top === void 0 ? void 0 : W(t.top),
    horizontalAlignment:
      t.left === void 0 ? (e?.horizontalAlignment ?? e?.alignment) : e?.horizontalAlignment,
    verticalAlignment: e?.verticalAlignment,
    wrap: { type: Ll(e?.wrap), side: e?.wrapSide },
    distanceTopEmu: a === void 0 ? void 0 : W(a),
    distanceBottomEmu: o === void 0 ? void 0 : W(o),
    distanceLeftEmu: e?.distanceLeft === void 0 ? void 0 : W(e.distanceLeft),
    distanceRightEmu: e?.distanceRight === void 0 ? void 0 : W(e.distanceRight),
    behindDocument: e?.behindDocument,
    layoutInCell: e?.layoutInCell,
    allowOverlap: e?.allowOverlap,
    relativeHeight: e?.relativeHeight,
    locked: e?.locked,
  };
}
function Nl(e, t) {
  let n = Fl(e, t),
    r = Il(e, t);
  return {
    distanceTopEmu: n === void 0 ? void 0 : W(n),
    distanceBottomEmu: r === void 0 ? void 0 : W(r),
    distanceLeftEmu: e?.distanceLeft === void 0 ? void 0 : W(e.distanceLeft),
    distanceRightEmu: e?.distanceRight === void 0 ? void 0 : W(e.distanceRight),
  };
}
function Pl(e) {
  return (
    e.distanceTopEmu !== void 0 ||
    e.distanceBottomEmu !== void 0 ||
    e.distanceLeftEmu !== void 0 ||
    e.distanceRightEmu !== void 0
  );
}
function Fl(e, t) {
  return e?.distanceTop ?? t?.spaceBefore;
}
function Il(e, t) {
  return e?.distanceBottom ?? t?.spaceAfter;
}
function Ll(e) {
  return e === `none`
    ? _.ELEMENT_WRAP_TYPE_NONE
    : e === `tight`
      ? _.ELEMENT_WRAP_TYPE_TIGHT
      : e === `through`
        ? _.ELEMENT_WRAP_TYPE_THROUGH
        : e === `topAndBottom`
          ? _.ELEMENT_WRAP_TYPE_TOP_AND_BOTTOM
          : _.ELEMENT_WRAP_TYPE_SQUARE;
}
var Rl = e(() => {
  (m(), at());
});
function zl(e) {
  return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
function Bl(e) {
  return e
    ? e
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ``) === `tablegrid`
    : !1;
}
var Vl,
  Hl,
  Ul,
  Wl,
  Gl = e(() => {
    (Dl(),
      Rl(),
      (Vl = {
        headerRow: !1,
        totalRow: !1,
        firstColumn: !1,
        lastColumn: !1,
        bandedRows: !1,
        bandedColumns: !1,
      }),
      (Hl = 7.68),
      (Ul = { left: Hl, right: Hl, top: Hl, bottom: Hl }),
      (Wl = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        add(e) {
          if (Array.isArray(e)) {
            let t = this.#e.add(e);
            return ((t.cellMargins = Ul), t);
          }
          let { position: t, style: n, columnWidths: r, cellMargins: i, keepTogether: a, ...o } = e,
            s = Al({ left: t?.left, top: t?.top, width: t?.width, height: t?.height }),
            c = s.left !== void 0 || s.top !== void 0 || s.width !== void 0 || s.height !== void 0,
            l = {
              ...o,
              left: c ? s.left : void 0,
              top: c ? s.top : void 0,
              width: c ? s.width : void 0,
              height: c ? s.height : void 0,
            },
            u = this.#e.add(l);
          ((u.cellMargins = i ?? Ul), (u.keepTogether = a), (u.placement = Ml(void 0, s)));
          let d = typeof n == `string` ? { preset: n } : n,
            f = d?.preset;
          if (d) {
            let { preset: e, ...t } = d,
              n = Rc(e),
              r = zc(e);
            (n ? (u.styleId = n) : r ? (u.styleId = Wc(r)) : e && (u.styleId = e),
              (u.styleOptions = { ...Vl, ...zl(u.styleOptions), ...zl(t) }));
          }
          Bl(f) &&
            u.rowCount > 0 &&
            u.columnCount > 0 &&
            u.cells
              .block({ row: 0, column: 0, rowCount: u.rowCount, columnCount: u.columnCount })
              .applyBorders({
                outside: { color: `#000000`, width: 1, style: `solid` },
                inside: { color: `#000000`, width: 1, style: `solid` },
              });
          let p = Rc(f);
          return (p && gl(u, p), r !== void 0 && (u.columnWidths = r), u);
        }
      }));
  });
function Kl(e) {
  let t = e.size,
    n = e.position ?? {};
  return Al(
    { left: n.left, top: n.top, width: n.width ?? t?.width, height: n.height ?? t?.height },
    { inline: e.style?.wrap === `inline` },
  );
}
function ql(e, t) {
  let n = { alt: e.alt, fit: e.fit, position: t, contentType: e.contentType, prompt: e.prompt };
  return `blob` in e
    ? { ...n, blob: Jl(e.blob), contentType: e.contentType }
    : `path` in e
      ? { ...n, path: e.path }
      : `dataUrl` in e
        ? { ...n, dataUrl: e.dataUrl }
        : `uri` in e
          ? { ...n, uri: e.uri }
          : { ...n, prompt: e.prompt };
}
function Jl(e) {
  if (e instanceof ArrayBuffer) return e;
  let t = e.buffer;
  if (t instanceof ArrayBuffer && e.byteOffset === 0 && e.byteLength === t.byteLength) return t;
  let n = new Uint8Array(e.byteLength);
  return (n.set(e), n.buffer);
}
var Yl,
  Xl = e(() => {
    (Rl(),
      (Yl = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        get items() {
          return this.#e.items;
        }
        add(e) {
          let t = Kl(e),
            n = ql(e, t),
            r = this.#e.add(n);
          return (
            (r.placement = Ml(e.style, t, {
              spaceBefore: e.spaceBefore,
              spaceAfter: e.spaceAfter,
            })),
            r
          );
        }
      }));
  });
function Zl(e) {
  let t = e.size,
    n = e.position ?? {},
    r = { left: n.left, top: n.top, width: n.width ?? t?.width, height: n.height ?? t?.height };
  return (e.style?.wrap === `inline` && ((r.left = void 0), (r.top = void 0)), r);
}
var Ql,
  $l = e(() => {
    (Rl(),
      (Ql = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        add(e) {
          let t = Zl(e),
            n = this.#e.add({
              geometry: e.geometry,
              position: t,
              adjustmentList: e.adjustmentList,
              fill: e.fill,
              line: e.line,
            });
          return (
            e.text !== void 0 && (n.text = e.text),
            (n.placement = Ml(e.style, t, {
              spaceBefore: e.spaceBefore,
              spaceAfter: e.spaceAfter,
            })),
            n
          );
        }
      }));
  });
function eu(e) {
  let t = e.size,
    n = e.position ?? {};
  return Al(
    { left: n.left, top: n.top, width: n.width ?? t?.width, height: n.height ?? t?.height },
    { inline: e.style?.wrap === `inline` },
  );
}
function tu(e) {
  if (e)
    return e.map((e, t) =>
      e.fill || e.line || e.stroke
        ? { ...e }
        : { ...e, fill: ru[t % ru.length], line: iu[t % iu.length] },
    );
}
var nu,
  ru,
  iu,
  au = e(() => {
    (Rl(),
      (nu = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        add(e) {
          let t = eu(e),
            n = this.#e.add(e.chartType, {
              ...e.config,
              series: tu(e.config?.series),
              position: t,
            });
          e.config?.chartLine === void 0 && (n.chartLine.visible = !1);
          let r = n.chart;
          return (
            r && !r.chartSpaceLine.isSet && (r.chartSpaceLine.visible = !1),
            (n.placement = Ml(e.style, t, {
              spaceBefore: e.spaceBefore,
              spaceAfter: e.spaceAfter,
            })),
            n
          );
        }
      }),
      (ru = [
        { type: `solid`, color: { type: `theme`, value: `accent1`, transform: { lighten: 0.8 } } },
        { type: `solid`, color: { type: `theme`, value: `accent1`, transform: { lighten: 0.6 } } },
        { type: `solid`, color: { type: `theme`, value: `accent1`, transform: { lighten: 0.4 } } },
        { type: `solid`, color: { type: `theme`, value: `accent1`, transform: { darken: 0.1 } } },
        { type: `solid`, color: { type: `theme`, value: `accent1`, transform: { darken: 0.25 } } },
        { type: `solid`, color: { type: `theme`, value: `accent1`, transform: { darken: 0.5 } } },
      ]),
      (iu = [
        {
          style: `solid`,
          width: 1,
          fill: { type: `solid`, color: { type: `theme`, value: `accent1` } },
        },
        {
          style: `solid`,
          width: 1,
          fill: {
            type: `solid`,
            color: { type: `theme`, value: `accent1`, transform: { darken: 0.1 } },
          },
        },
        {
          style: `solid`,
          width: 1,
          fill: {
            type: `solid`,
            color: { type: `theme`, value: `accent1`, transform: { darken: 0.2 } },
          },
        },
        {
          style: `solid`,
          width: 1,
          fill: {
            type: `solid`,
            color: { type: `theme`, value: `accent1`, transform: { darken: 0.3 } },
          },
        },
        {
          style: `solid`,
          width: 1,
          fill: {
            type: `solid`,
            color: { type: `theme`, value: `accent1`, transform: { darken: 0.4 } },
          },
        },
        {
          style: `solid`,
          width: 1,
          fill: {
            type: `solid`,
            color: { type: `theme`, value: `accent1`, transform: { darken: 0.5 } },
          },
        },
      ]));
  }),
  ou,
  su = e(() => {
    (Qe(),
      (ou = class extends ot {
        constructor(e, t) {
          super(e, t);
        }
        get id() {
          return this.data.id;
        }
        toProto() {
          return super.toProto();
        }
      }));
  });
function cu(e, t) {
  let n = e?.alignment ?? t?.alignment;
  return n === void 0 ? t : he({ alignment: n }, t);
}
var lu,
  uu = e(() => {
    (re(),
      (lu = class {
        #e;
        constructor(e = []) {
          this.#e = new dt(e);
        }
        resolveTextStyleByName(e) {
          return this.#e.resolveByName(e)?.textStyle;
        }
        resolveParagraphTextStyle(e, t) {
          let n = this.resolveParagraphStyleDefinition(e.styleId)?.textStyle;
          return he(he(e.textStyle, n), t);
        }
        resolveParagraphStyle(e) {
          let t = this.resolveParagraphStyleDefinition(e.styleId)?.paragraphStyle;
          return Je(e.paragraphStyle, t);
        }
        resolveRunTextStyle(e, t, n) {
          let r = this.resolveParagraphStyleDefinition(e.styleId)?.textStyle,
            i = he(cu(e.textStyle, r), n);
          return he(t.textStyle, i);
        }
        resolveParagraphStyleDefinition(e) {
          return this.#e.resolve(e);
        }
      }));
  }),
  du,
  fu = e(() => {
    (m(),
      Oe(),
      te(),
      N(),
      qe(),
      ft(),
      Ge(),
      at(),
      ee(),
      xc(),
      Cc(),
      Gl(),
      Xl(),
      $l(),
      au(),
      su(),
      Rl(),
      uu(),
      (du = class e {
        #e;
        #t;
        #n = [];
        #r = new Map();
        #i;
        #a;
        #o;
        #s;
        #c;
        #l;
        #u;
        constructor(e) {
          ((this.#u = e.context), (this.#e = this.#d()));
          let { bodyElement: t, remainingElements: n } = this.#v(e.elements ?? []);
          ((this.#i = new bc(this.#e, t)), this.#h(this.#i));
          let r = new ie(this.#e, []),
            i = new V(this.#e, []),
            a = new Me(this.#e, []),
            o = new j(this.#e, []);
          ((this.#c = new Ql(r)),
            (this.#s = new Yl(i)),
            (this.#o = new Wl(a)),
            (this.#l = new nu(o)),
            (this.#a = new Sc(this.#i.paragraphs)));
          for (let e of n) this.#y(e, r, i, a, o);
        }
        get text() {
          return this.#i.text;
        }
        get textElements() {
          return this.#n.map((e) => this.#r.get(e)).filter((e) => e instanceof bc);
        }
        getElementById(e) {
          if (e) return this.#r.get(e);
        }
        removeElementById(e) {
          return !e || e === this.#i.id || !this.#r.get(e) ? !1 : (this.#_(e), !0);
        }
        resolveTextBlock(e) {
          let t = Te(e);
          if (t) {
            let e = this.getElementById(t.tableId);
            return e instanceof be ? (e.getCellById(t.cellId)?.text ?? null) : null;
          }
          let n = this.getElementById(e);
          return n && (n instanceof bc || `text` in n) ? n.text : null;
        }
        set text(e) {
          this.#i.text.set(e);
        }
        get paragraphs() {
          return this.#a;
        }
        startParagraphBlock(e = !1) {
          if (!e && this.#n.length === 1 && this.#n[0] === this.#i.id) return this.#a;
          let t = new bc(this.#e);
          return (this.#g(t), new Sc(t.paragraphs));
        }
        get tables() {
          return this.#o;
        }
        get images() {
          return this.#s;
        }
        get shapes() {
          return this.#c;
        }
        get charts() {
          return this.#l;
        }
        createChildBody(t = []) {
          return new e({ elements: t, context: this.#u });
        }
        addGroup(e) {
          let t = Al(
              {
                left: e.position?.left,
                top: e.position?.top,
                width: e.position?.width ?? e.size?.width,
                height: e.position?.height ?? e.size?.height,
              },
              { inline: e.style?.wrap === `inline` },
            ),
            n = new ou(this.#e, {
              id: e.id,
              name: e.name ?? ``,
              type: T.ELEMENT_TYPE_GROUP,
              children: e.children,
              bbox: {
                xEmu: t.left === void 0 ? void 0 : W(t.left),
                yEmu: t.top === void 0 ? void 0 : W(t.top),
                widthEmu: t.width === void 0 ? void 0 : W(t.width),
                heightEmu: t.height === void 0 ? void 0 : W(t.height),
              },
            });
          return (
            (n.placement = Ml(e.style, t, {
              spaceBefore: e.spaceBefore,
              spaceAfter: e.spaceAfter,
            })),
            this.#g(n),
            n
          );
        }
        get textElementId() {
          return this.#i.id;
        }
        toProto() {
          return this.#n
            .map((e) => this.#r.get(e))
            .filter((e) => !!e)
            .map((e) => (e instanceof bc, e.toProto()));
        }
        #d() {
          return {
            fontFamilyCache: this.#u.fontFamilyCache,
            stub: () => {},
            getTextStyleByName: (e) => this.#p(e),
            getListPresetProfile: () => `document`,
            onElementMutated: () => this.#u.invalidateLayout(),
            getExistingElementIds: () => this.#u.getExistingElementIds(),
            getResolvedParagraphTextStyle: (e, t) => {
              let n = this.#m().resolveParagraphTextStyle(e.toProto(), t?.toProto());
              return n ? new B(n) : void 0;
            },
            getResolvedParagraphStyle: (e) => this.#m().resolveParagraphStyle(e.toProto()),
            getResolvedRunTextStyle: (e, t, n) => {
              let r = this.#m().resolveRunTextStyle(e.toProto(), t.toProto(), n?.toProto());
              return r ? new B(r) : void 0;
            },
            getSlide: () => this.#f(),
            getImageById: (e) => this.#u.images.getById(e),
            createImageAsset: (e) => this.#u.images.add(e),
            getChartById: (e) => this.#u.charts.getById(e),
            createChartAsset: (e) => this.#u.charts.add(e),
            attachChartAsset: (e) => this.#u.charts.attach(e),
            _register: (e, t) => this.#g(e, t),
            _unregister: (e) => this.#_(e),
          };
        }
        #f() {
          if (this.#t) return this.#t;
          let e = () => [...this.#r.values()],
            t = {
              id: void 0,
              elements: {
                get items() {
                  return e();
                },
              },
            };
          return ((this.#t = t), t);
        }
        #p(e) {
          let t = this.#m().resolveTextStyleByName(e);
          if (t) return new B(t);
        }
        #m() {
          return new lu(this.#u.readTextStyleDefinitions());
        }
        #h(e) {
          (this.#u.registerElementId(e.id), this.#r.set(e.id, e), (this.#n = [e.id]));
        }
        #g(e, t) {
          let n = e.id;
          if (!n) return;
          (this.#u.registerElementId(n), this.#r.set(n, e));
          let r = this.#n.indexOf(n);
          r >= 0 && this.#n.splice(r, 1);
          let i = this.#n.indexOf(this.#i.id),
            a = i >= 0 ? i + 1 : 0,
            o = t?.index ?? this.#n.length,
            s = Math.max(a, o);
          (this.#n.splice(s, 0, n), this.#u.invalidateLayout());
        }
        #_(e) {
          this.#r.delete(e);
          let t = this.#n.indexOf(e);
          (t >= 0 && this.#n.splice(t, 1), this.#u.invalidateLayout());
        }
        #v(e) {
          let t = e.findIndex(
            (e) => e.type === T.ELEMENT_TYPE_TEXT || e.type === T.ELEMENT_TYPE_TEXT_GROUP,
          );
          return t >= 0
            ? { bodyElement: e[t], remainingElements: e.filter((e, n) => n !== t) }
            : { bodyElement: void 0, remainingElements: e };
        }
        #y(e, t, n, r, i) {
          if (e.type === T.ELEMENT_TYPE_TEXT || e.type === T.ELEMENT_TYPE_TEXT_GROUP) {
            let t = new bc(this.#e, e);
            this.#g(t);
            return;
          }
          if (e.type === T.ELEMENT_TYPE_TABLE || e.table) {
            r.add({ proto: e });
            return;
          }
          if (
            e.type === T.ELEMENT_TYPE_CHART ||
            e.type === T.ELEMENT_TYPE_CHART_REFERENCE ||
            e.chartReference
          ) {
            i.add({ proto: e });
            return;
          }
          if (
            e.type === T.ELEMENT_TYPE_IMAGE ||
            e.type === T.ELEMENT_TYPE_IMAGE_REFERENCE ||
            e.imageReference
          ) {
            n.add({ proto: e });
            return;
          }
          if (e.type === T.ELEMENT_TYPE_SHAPE || e.shape !== void 0) {
            t.add({ proto: e });
            return;
          }
          (e.type === T.ELEMENT_TYPE_GROUP || (e.children?.length ?? 0) > 0) &&
            this.#g(new ou(this.#e, e));
        }
      }));
  });
function pu(e) {
  if (!e) return;
  let t = e.pageNumbers ? { ...e.pageNumbers } : void 0;
  return { ...e, pageMargin: e.pageMargin ? { ...e.pageMargin } : void 0, pageNumbers: t };
}
function mu(e) {
  if (e) return { ...e, widths: [...(e.widths ?? [])] };
}
function hu(e) {
  if (e) return { ...e };
}
function gu(e) {
  let t = e.paragraphs ?? [];
  for (let e of t) {
    let t = e.runs ?? [];
    for (let e of t) if ((e.text ?? ``).length > 0) return !0;
  }
  return !1;
}
function _u(e) {
  for (let t of e)
    if (t && (!(t.type === T.ELEMENT_TYPE_TEXT || t.type === T.ELEMENT_TYPE_TEXT_GROUP) || gu(t)))
      return !0;
  return !1;
}
var vu,
  yu = e(() => {
    (on(),
      m(),
      fu(),
      (vu = class {
        #e;
        #t;
        #n;
        #r;
        #i;
        #a;
        #o;
        #s;
        #c;
        #l;
        #u;
        #d;
        #f;
        #p;
        #m;
        #h;
        #g;
        #_;
        #v;
        constructor(e) {
          let t = e.section;
          ((this.#m = e.context),
            (this.#e = t?.id || e.defaultId),
            (this.#t = t?.breakType ?? rn.SECTION_BREAK_TYPE_UNSPECIFIED),
            (this.#n = pu(t?.pageSetup)),
            (this.#r = mu(t?.columns)),
            (this.#h = t?.startsWithPageBreak ?? !1),
            (this.#g = t?.pageNumberStart),
            (this.#_ = t?.pageNumberFormat),
            (this.#v = hu(t?.documentGrid)),
            (this.#p = t?.differentFirstPage ?? !1),
            (this.#i = new du({
              elements: t?.elements ?? e.fallbackElements ?? [],
              context: e.context,
            })),
            (this.#a = new du({ elements: t?.header?.elements ?? [], context: e.context })),
            (this.#o = new du({ elements: t?.footer?.elements ?? [], context: e.context })),
            (this.#s = new du({ elements: t?.firstHeader?.elements ?? [], context: e.context })),
            (this.#c = new du({ elements: t?.firstFooter?.elements ?? [], context: e.context })),
            (this.#l = !!t?.header),
            (this.#u = !!t?.footer),
            (this.#d = !!t?.firstHeader),
            (this.#f = !!t?.firstFooter));
        }
        get id() {
          return this.#e;
        }
        get breakType() {
          return this.#t;
        }
        set breakType(e) {
          ((this.#t = e), this.#m.invalidateLayout());
        }
        get body() {
          return this.#i;
        }
        get pageSetup() {
          return this.#n ? pu(this.#n) : void 0;
        }
        set pageSetup(e) {
          ((this.#n = pu(e)), this.#m.invalidateLayout());
        }
        get columns() {
          return this.#r ? mu(this.#r) : void 0;
        }
        set columns(e) {
          ((this.#r = mu(e)), this.#m.invalidateLayout());
        }
        get header() {
          return ((this.#l = !0), this.#a);
        }
        get footer() {
          return ((this.#u = !0), this.#o);
        }
        get firstHeader() {
          return ((this.#d = !0), this.#s);
        }
        get firstFooter() {
          return ((this.#f = !0), this.#c);
        }
        get differentFirstPage() {
          return this.#p;
        }
        set differentFirstPage(e) {
          ((this.#p = e), this.#m.invalidateLayout());
        }
        get startsWithPageBreak() {
          return this.#h;
        }
        set startsWithPageBreak(e) {
          ((this.#h = e), this.#m.invalidateLayout());
        }
        get pageNumberStart() {
          return this.#g;
        }
        set pageNumberStart(e) {
          ((this.#g = e), this.#m.invalidateLayout());
        }
        get pageNumberFormat() {
          return this.#_;
        }
        set pageNumberFormat(e) {
          ((this.#_ = e), this.#m.invalidateLayout());
        }
        get documentGrid() {
          return hu(this.#v);
        }
        set documentGrid(e) {
          ((this.#v = hu(e)), this.#m.invalidateLayout());
        }
        clearHeader() {
          ((this.#l = !1), this.#m.invalidateLayout());
        }
        clearFooter() {
          ((this.#u = !1), this.#m.invalidateLayout());
        }
        toProto() {
          let e = {
              id: this.#e,
              breakType: this.#t,
              pageSetup: pu(this.#n),
              columns: mu(this.#r),
              elements: this.#i.toProto(),
              header: void 0,
              footer: void 0,
              startsWithPageBreak: this.#h,
              pageNumberStart: this.#g,
              pageNumberFormat: this.#_,
              differentFirstPage: this.#p || void 0,
              firstHeader: void 0,
              firstFooter: void 0,
              documentGrid: hu(this.#v),
            },
            t = this.#a.toProto();
          this.#l && _u(t) && (e.header = this.#y(t));
          let n = this.#o.toProto();
          this.#u && _u(n) && (e.footer = this.#y(n));
          let r = this.#s.toProto();
          this.#d && _u(r) && (e.firstHeader = this.#y(r));
          let i = this.#c.toProto();
          return (this.#f && _u(i) && (e.firstFooter = this.#y(i)), e);
        }
        #y(e) {
          return { elements: e };
        }
      }));
  }),
  bu,
  xu = e(() => {
    (on(),
      yu(),
      (bu = class {
        #e = [];
        #t;
        #n;
        constructor(e) {
          this.#n = e.context;
          let t = e.sections ?? [];
          (t.length > 0
            ? (this.#e = t.map(
                (e, t) =>
                  new vu({ section: e, context: this.#n, defaultId: `doc-section-${t + 1}` }),
              ))
            : (this.#e = [
                new vu({
                  fallbackElements: e.fallbackElements ?? [],
                  context: this.#n,
                  defaultId: `doc-section-1`,
                }),
              ]),
            (this.#t = this.#e.length + 1));
        }
        get items() {
          return [...this.#e];
        }
        get first() {
          return this.#e[0];
        }
        add(e = {}) {
          let t = {
              id: e.id || this.#r(),
              breakType: e.breakType ?? rn.SECTION_BREAK_TYPE_UNSPECIFIED,
              pageSetup: e.pageSetup,
              columns: e.columns,
              elements: e.elements ?? [],
              header: e.header,
              footer: e.footer,
              differentFirstPage: e.differentFirstPage,
              firstHeader: e.firstHeader,
              firstFooter: e.firstFooter,
              startsWithPageBreak: e.startsWithPageBreak ?? !1,
              pageNumberStart: e.pageNumberStart,
              pageNumberFormat: e.pageNumberFormat,
            },
            n = new vu({ section: t, context: this.#n, defaultId: t.id });
          return (this.#e.push(n), this.#n.invalidateLayout(), n);
        }
        toProto() {
          return this.#e.map((e) => e.toProto());
        }
        #r() {
          let e = `doc-section-${this.#t}`;
          return ((this.#t += 1), e);
        }
      }));
  });
function Su(e) {
  return (
    e.numberingFormat === void 0 &&
    e.defaultNoteIds.length === 0 &&
    e.numberingStart === void 0 &&
    e.numberingRestart === void 0 &&
    e.position === void 0
  );
}
var Cu,
  wu,
  Tu = e(() => {
    (xr(),
      A(),
      (Cu = class {
        #e;
        #t;
        constructor(e, t) {
          ((this.#e = Y(e ?? { defaultNoteIds: [] })), (this.#t = t));
        }
        get numberingFormat() {
          return this.#e.numberingFormat;
        }
        set numberingFormat(e) {
          ((this.#e.numberingFormat = e), this.#t?.());
        }
        get defaultNoteIds() {
          return [...(this.#e.defaultNoteIds ?? [])];
        }
        set defaultNoteIds(e) {
          ((this.#e.defaultNoteIds = [...e]), this.#t?.());
        }
        get numberingStart() {
          return this.#e.numberingStart;
        }
        set numberingStart(e) {
          ((this.#e.numberingStart = e), this.#t?.());
        }
        get numberingRestart() {
          return this.#e.numberingRestart;
        }
        set numberingRestart(e) {
          ((this.#e.numberingRestart = e), this.#t?.());
        }
        get position() {
          return this.#e.position;
        }
        set position(e) {
          ((this.#e.position = e), this.#t?.());
        }
        replace(e) {
          ((this.#e = Y(e ?? { defaultNoteIds: [] })), this.#t?.());
        }
        toProto() {
          return Su(this.#e) ? void 0 : Y(this.#e);
        }
      }),
      (wu = class {
        #e;
        #t;
        #n;
        #r;
        #i;
        constructor(e, t = {}) {
          ((this.#e = Y(e ?? {})), (this.#i = t.onMutated));
        }
        get defaultTabStop() {
          return this.#e.defaultTabStop;
        }
        set defaultTabStop(e) {
          ((this.#e.defaultTabStop = e), this.#i?.());
        }
        get autoHyphenation() {
          return this.#e.autoHyphenation;
        }
        set autoHyphenation(e) {
          ((this.#e.autoHyphenation = e), this.#i?.());
        }
        get mirrorMargins() {
          return this.#e.mirrorMargins;
        }
        set mirrorMargins(e) {
          ((this.#e.mirrorMargins = e), this.#i?.());
        }
        get displayBackgroundShape() {
          return this.#e.displayBackgroundShape;
        }
        set displayBackgroundShape(e) {
          ((this.#e.displayBackgroundShape = e), this.#i?.());
        }
        get backgroundFill() {
          return ((this.#r ||= new _e({ type: `proto`, proto: this.#e.backgroundFill })), this.#r);
        }
        set backgroundFill(e) {
          ((this.#r = e === void 0 ? void 0 : new _e(e)),
            (this.#e.backgroundFill = void 0),
            this.#i?.());
        }
        clearBackgroundFill() {
          ((this.#r = void 0), (this.#e.backgroundFill = void 0), this.#i?.());
        }
        resolveRenderBackgroundFill() {
          return this.#r ? this.#r.toProto() : this.#e.backgroundFill;
        }
        get footnoteProperties() {
          return ((this.#t ||= new Cu(this.#e.footnoteProperties, this.#i)), this.#t);
        }
        get endnoteProperties() {
          return ((this.#n ||= new Cu(this.#e.endnoteProperties, this.#i)), this.#n);
        }
        clearFootnoteProperties() {
          ((this.#t = void 0), (this.#e.footnoteProperties = void 0), this.#i?.());
        }
        clearEndnoteProperties() {
          ((this.#n = void 0), (this.#e.endnoteProperties = void 0), this.#i?.());
        }
        replace(e) {
          ((this.#e = Y(e ?? {})),
            (this.#t = void 0),
            (this.#n = void 0),
            (this.#r = void 0),
            this.#i?.());
        }
        toProto() {
          let e = this.#t?.toProto(),
            t = this.#n?.toProto(),
            n = this.#r?.toProto(),
            r = {
              ...Y(this.#e),
              footnoteProperties: this.#t ? e : this.#e.footnoteProperties,
              endnoteProperties: this.#n ? t : this.#e.endnoteProperties,
              backgroundFill: this.#r ? n : this.#e.backgroundFill,
            };
          if (
            !(
              r.defaultTabStop === void 0 &&
              r.autoHyphenation === void 0 &&
              r.mirrorMargins === void 0 &&
              r.displayBackgroundShape === void 0 &&
              r.footnoteProperties === void 0 &&
              r.endnoteProperties === void 0 &&
              r.backgroundFill === void 0
            )
          )
            return r;
        }
      }));
  });
function Eu(e) {
  if (!e) return;
  let t = Y(e);
  return ((t.tabStops = t.tabStops ?? []), t);
}
function Du(e) {
  return {
    ...e,
    wholeTable: e.wholeTable
      ? { ...e.wholeTable, paragraphStyle: Eu(e.wholeTable.paragraphStyle) }
      : void 0,
    conditionalStyles: (e.conditionalStyles ?? []).map((e) => ({
      ...e,
      style: e.style ? { ...e.style, paragraphStyle: Eu(e.style.paragraphStyle) } : void 0,
    })),
  };
}
var Ou,
  ku = e(() => {
    (xr(),
      Dl(),
      (Ou = class {
        #e;
        #t;
        #n;
        constructor(e = [], t = {}) {
          ((this.#n = t.fontFamilyCache), (this.#e = Y(e).map(Du)));
          for (let e of this.#e) this.#r(e);
          this.#t = t.onMutated;
        }
        get items() {
          return Y(this.#e).map(Du);
        }
        getById(e) {
          if (!e) return;
          let t = this.#e.find((t) => t.id === e);
          return t ? Du(Y(t)) : void 0;
        }
        getByName(e) {
          if (!e) return;
          let t = this.#e.find((t) => t.name === e);
          return t ? Du(Y(t)) : void 0;
        }
        set(e) {
          let t = Du(Y(e));
          this.#r(t);
          let n = this.#e.findIndex((e) => e.id === t.id || e.name === t.name);
          return (n >= 0 ? (this.#e[n] = t) : this.#e.push(t), this.#t?.(), Du(Y(t)));
        }
        addOfficeWordDefaults() {
          let e = Bc(),
            t = Y(this.#e);
          for (let n of e) {
            let e = Du(Y(n));
            this.#r(e);
            let r = t.findIndex((t) => t.id === e.id || t.name === e.name);
            r >= 0 ? (t[r] = e) : t.push(e);
          }
          return ((this.#e = t), this.#t?.(), Y(e).map(Du));
        }
        delete(e) {
          let t = this.#e.findIndex((t) => t.id === e || t.name === e);
          return t < 0 ? !1 : (this.#e.splice(t, 1), this.#t?.(), !0);
        }
        replace(e) {
          this.#e = Y(e).map(Du);
          for (let e of this.#e) this.#r(e);
          this.#t?.();
        }
        toProto() {
          return Y(this.#e).map(Du);
        }
        #r(e) {
          this.#n?.addTextStyle(e.wholeTable?.textStyle);
          for (let t of e.conditionalStyles ?? []) this.#n?.addTextStyle(t.style?.textStyle);
        }
      }));
  });
function Au(e) {
  if (!e) return;
  let t = Y(e);
  return ((t.tabStops = t.tabStops ?? []), t);
}
function ju(e) {
  return { ...e, paragraphStyle: Au(e.paragraphStyle) };
}
var Mu,
  Nu = e(() => {
    (xr(),
      (Mu = class {
        #e;
        #t;
        #n;
        constructor(e = [], t = {}) {
          ((this.#n = t.fontFamilyCache), (this.#e = Y(e).map(ju)));
          for (let e of this.#e) this.#n?.addTextStyle(e.textStyle);
          this.#t = t.onMutated;
        }
        get items() {
          return Y(this.#e).map(ju);
        }
        getById(e) {
          if (!e) return;
          let t = this.#e.find((t) => t.id === e);
          return t ? ju(Y(t)) : void 0;
        }
        getByName(e) {
          if (!e) return;
          let t = this.#e.find((t) => t.name === e);
          return t ? ju(Y(t)) : void 0;
        }
        set(e) {
          let t = ju(Y(e));
          this.#n?.addTextStyle(t.textStyle);
          let n = this.#e.findIndex((e) => e.id === t.id || e.name === t.name);
          return (n >= 0 ? (this.#e[n] = t) : this.#e.push(t), this.#t?.(), ju(Y(t)));
        }
        delete(e) {
          let t = this.#e.findIndex((t) => t.id === e || t.name === e);
          return t < 0 ? !1 : (this.#e.splice(t, 1), this.#t?.(), !0);
        }
        replace(e) {
          this.#e = Y(e).map(ju);
          for (let e of this.#e) this.#n?.addTextStyle(e.textStyle);
          this.#t?.();
        }
        toProto() {
          return Y(this.#e).map(ju);
        }
      }));
  }),
  Pu,
  Fu = e(() => {
    ($r(),
      Ue(),
      (Pu = class {
        #e;
        #t;
        #n;
        constructor(e, t = {}) {
          ((this.#t = e !== void 0),
            (this.#n = t.onMutated),
            (this.#e = new Ze(
              {
                stub: () => {},
                queueCollaborativePublish: () => {
                  ((this.#t = !0), this.#n?.());
                },
              },
              e,
            )));
        }
        get colorScheme() {
          let e = this.#e.colorScheme;
          return {
            name: e.name,
            themeColors: {
              accent1: e.themeColors.accent1.hex,
              accent2: e.themeColors.accent2.hex,
              accent3: e.themeColors.accent3.hex,
              accent4: e.themeColors.accent4.hex,
              accent5: e.themeColors.accent5.hex,
              accent6: e.themeColors.accent6.hex,
              bg1: e.themeColors.bg1.hex,
              bg2: e.themeColors.bg2.hex,
              tx1: e.themeColors.tx1.hex,
              tx2: e.themeColors.tx2.hex,
              dk1: e.themeColors.dk1.hex,
              lt1: e.themeColors.lt1.hex,
              dk2: e.themeColors.dk2.hex,
              lt2: e.themeColors.lt2.hex,
              hlink: e.themeColors.hlink.hex,
              folHlink: e.themeColors.folHlink.hex,
            },
          };
        }
        set colorScheme(e) {
          ((this.#t = !0), (this.#e.colorScheme = e));
        }
        get hexColorMap() {
          return this.#e.hexColorMap;
        }
        resolveThemeColorHex(e) {
          return this.#e.resolveThemeColorHex(e);
        }
        resolveRenderThemeMap() {
          return Jr(this.#e);
        }
        replace(e) {
          ((this.#t = e !== void 0), this.#e.replaceFromProto(e), this.#n?.());
        }
        clear() {
          ((this.#t = !1), this.#e.replaceFromProto(void 0), this.#n?.());
        }
        toProto() {
          return this.#t ? this.#e.toProto() : void 0;
        }
      }));
  });
function Iu(e) {
  let t = e.buffer;
  if (t instanceof ArrayBuffer && e.byteOffset === 0 && e.byteLength === t.byteLength)
    return new Uint8Array(t);
  let n = new Uint8Array(e.byteLength);
  return (n.set(e), n);
}
function Lu(e, t) {
  if (Array.isArray(e)) {
    for (let n of e) Lu(n, t);
    return;
  }
  if (typeof e != `object` || !e) return;
  let n = e;
  if (n.type === v.COLOR_TYPE_SCHEME && typeof n.value == `string` && n.lastColor === void 0) {
    let e = t[n.value] ?? fr[n.value];
    e !== void 0 && (n.lastColor = e.replace(/^#/, ``));
  }
  for (let e of Object.values(n)) Lu(e, t);
}
var Ru,
  zu = e(() => {
    (on(),
      g(),
      le(),
      P(),
      br(),
      _r(),
      pr(),
      Cr(),
      Tr(),
      Dr(),
      jr(),
      Pr(),
      Ir(),
      zr(),
      pc(),
      hc(),
      yc(),
      xu(),
      Tu(),
      ku(),
      Nu(),
      Fu(),
      Xe(),
      (Ru = class e {
        #e;
        #t;
        #n;
        #r = new $e();
        #i = new Set();
        #a;
        charts;
        textStyles;
        tableStyleDefinitions;
        fonts;
        settings;
        theme;
        commentContents;
        commentReferences;
        sections;
        numbering;
        comments;
        citations;
        footnotes;
        endnotes;
        revisions;
        constructor(e) {
          let t = e;
          ((this.#e = {
            id: e.id ?? ``,
            name: e.name ?? `Untitled document`,
            widthEmu: e.widthEmu ?? 0,
            heightEmu: e.heightEmu ?? 0,
          }),
            (this.#t = new Ar()),
            (this.charts = new I({ fontFamilyCache: this.#r, stub: () => {} }, e.charts ?? [])),
            (this.#n = new H({ stub: () => {} }, e.images ?? [])),
            (this.textStyles = new Mu(e.textStyles ?? [], {
              fontFamilyCache: this.#r,
              onMutated: () => this.invalidateLayoutCache(),
            })),
            (this.tableStyleDefinitions = new Ou(e.tableStyleDefinitions ?? [], {
              fontFamilyCache: this.#r,
              onMutated: () => this.invalidateLayoutCache(),
            })),
            (this.fonts = new Fr(e.fonts ?? [], { onMutated: () => this.invalidateLayoutCache() })),
            (this.settings = new wu(e.settings, { onMutated: () => this.invalidateLayoutCache() })),
            (this.theme = new Pu(e.theme, { onMutated: () => this.invalidateLayoutCache() })),
            this.#r.addThemeFontScheme(e.theme?.fontScheme),
            (this.commentContents = new Sr(e.comments ?? [], {
              onMutated: () => this.invalidateLayoutCache(),
            })),
            (this.commentReferences = new wr(e.commentReferences ?? [], {
              onMutated: () => this.invalidateLayoutCache(),
            })),
            (this.#a = {
              fontFamilyCache: this.#r,
              charts: this.charts,
              images: this.#n,
              getExistingElementIds: () => [...this.#i],
              registerElementId: (e) => {
                e.length > 0 && this.#i.add(e);
              },
              readTextStyleDefinitions: () => this.textStyles.toProto(),
              invalidateLayout: () => this.invalidateLayoutCache(),
            }),
            (this.sections = new bu({
              sections: e.sections ?? [],
              fallbackElements: e.elements ?? [],
              context: this.#a,
            })),
            (this.numbering = new mc(e.numberingDefinitions ?? [], e.paragraphNumberings ?? [])));
          let n = this.sections.first.body,
            r = this.sections.first.pageSetup;
          (r?.widthEmu && (this.#e.widthEmu = r.widthEmu),
            r?.heightEmu && (this.#e.heightEmu = r.heightEmu),
            (this.comments = new Er({
              people: [],
              threads: [],
              documentId: this.#e.id,
              textElementId: n.textElementId,
              resolveTextRange: (e) => e.getTextRange(),
            })),
            (this.citations = new vr(t.contentReferences ?? [])),
            (this.footnotes = new Rr({
              footnotes: e.footnotes ?? [],
              fontFamilyCache: this.#r,
              documentId: this.#e.id,
              textElementId: n.textElementId,
              resolveTextRange: (e) => e.getTextRange(),
              onMutated: () => this.invalidateLayoutCache(),
            })),
            (this.endnotes = new Nr({
              endnotes: e.endnotes ?? [],
              fontFamilyCache: this.#r,
              documentId: this.#e.id,
              textElementId: n.textElementId,
              resolveTextRange: (e) => e.getTextRange(),
              onMutated: () => this.invalidateLayoutCache(),
            })),
            (this.revisions = new vc(e.reviewMarks ?? [])));
        }
        static create() {
          return new e(gr());
        }
        static load(t) {
          return new e(t);
        }
        static fromDocumentBytes(t) {
          return e.load(an.decode(t));
        }
        get id() {
          return this.#e.id;
        }
        get images() {
          return this.#n;
        }
        get fontFamilies() {
          return this.#r.fontFamilies;
        }
        get name() {
          return this.#e.name;
        }
        set name(e) {
          this.#e.name = e ?? ``;
        }
        get body() {
          return this.sections.first.body;
        }
        invalidateLayoutCache() {
          this.#t.reset();
        }
        resolveLayoutPages(e, t) {
          return this.#t.getPages(this.toProto(), e, t);
        }
        get pagePaintContext() {
          return {
            chartsById: new Map(
              this.charts
                .toProto()
                .filter((e) => !!e.id)
                .map((e) => [e.id, e]),
            ),
            pageBackgroundFill:
              this.settings.displayBackgroundShape === !1
                ? void 0
                : this.settings.resolveRenderBackgroundFill(),
            themeMap: this.theme.resolveRenderThemeMap(),
          };
        }
        toProto() {
          let e = this.comments.toProto(),
            t = this.sections.toProto(),
            n = t.flatMap((e) => e.elements ?? []),
            r = this.numbering.toProto(),
            i = t[0]?.pageSetup,
            a = {
              id: this.#e.id,
              name: this.#e.name,
              widthEmu: i?.widthEmu ?? this.#e.widthEmu,
              heightEmu: i?.heightEmu ?? this.#e.heightEmu,
              charts: this.charts.toProto(),
              elements: n,
              images: this.#n.toProto(),
              footnotes: this.footnotes.toProto(),
              comments: this.commentContents.toProto(),
              commentReferences: this.commentReferences.toProto(),
              textStyles: this.textStyles.toProto(),
              reviewMarks: this.revisions.toProto(),
              sections: t,
              numberingDefinitions: r.numberingDefinitions,
              paragraphNumberings: r.paragraphNumberings,
              tableStyleDefinitions: this.tableStyleDefinitions.toProto(),
              endnotes: this.endnotes.toProto(),
              settings: this.settings.toProto(),
              theme: this.theme.toProto(),
              fonts: this.fonts.toProto(),
            };
          return (
            (a.people = e.people),
            (a.threads = e.threads),
            (a.contentReferences = this.citations.toProto()),
            Lu(a, this.theme.hexColorMap),
            a
          );
        }
        toDocumentBytes() {
          return Iu(an.encode(this.toProto()).finish());
        }
        save() {}
        export(e = { format: `layout` }) {
          let t = e.format ?? `layout`;
          if (t === `layout`) return Promise.resolve(uc(this));
          throw Error(`Unsupported document export format: ${t}`);
        }
      }));
  });
function Bu(e, t) {
  return Vu(e, t);
}
function Vu(e, t) {
  if (typeof e == `number`) {
    if (!Number.isFinite(e)) throw Error(`${t} must be a finite px value.`);
    return e;
  }
  let n = /^(-?(?:\d+|\d*\.\d+))px$/.exec(e.trim());
  if (!n) throw Error(`${t} must be a number or a "[number]px" string.`);
  let r = Number(n[1]);
  if (!Number.isFinite(r)) throw Error(`${t} must be a finite px value.`);
  return r;
}
function X(e, t) {
  return e === void 0 ? void 0 : Bu(e, t);
}
function Hu(e, t) {
  return Math.round(Vu(e, t) * nd);
}
function Uu(e, t) {
  return e === void 0 ? void 0 : Hu(e, t);
}
function Wu(e, t) {
  if (typeof e == `number`) {
    if (!Number.isFinite(e)) throw Error(`${t} must be a finite document spacing value.`);
    return Math.round(e);
  }
  return Hu(e, t);
}
function Gu(e, t) {
  return e === void 0 ? void 0 : Wu(e, t);
}
function Ku(e, t) {
  if (typeof e == `number`) {
    if (!Number.isFinite(e)) throw Error(`${t} must be a finite document length value.`);
    return e;
  }
  return Hu(e, t);
}
function qu(e, t) {
  return e?.map((e, n) => Ku(e, `${t}[${n}]`));
}
function Ju(e, t) {
  if (e !== void 0)
    return {
      left: X(e.left, `${t}.left`),
      top: X(e.top, `${t}.top`),
      width: X(e.width, `${t}.width`),
      height: X(e.height, `${t}.height`),
    };
}
function Yu(e, t) {
  if (e !== void 0) return { width: X(e.width, `${t}.width`), height: X(e.height, `${t}.height`) };
}
function Xu(e, t) {
  if (e !== void 0)
    return {
      width: e.width === `content` ? `content` : X(e.width, `${t}.width`),
      height: X(e.height, `${t}.height`),
    };
}
function Zu(e, t) {
  if (e !== void 0)
    return {
      left: X(e.left, `${t}.left`),
      right: X(e.right, `${t}.right`),
      top: X(e.top, `${t}.top`),
      bottom: X(e.bottom, `${t}.bottom`),
    };
}
function Qu(e, t) {
  return e?.map((e, n) => Bu(e, `${t}[${n}]`));
}
function $u(e, t) {
  if (e === void 0) return;
  let n = X(e.width, `${t}.width`),
    r = { color: e.color, fill: e.fill, style: e.style, compound: e.compound };
  return n === void 0 ? r : { ...r, width: n };
}
function ed(e, t) {
  return e === void 0 || e === `none`
    ? e
    : {
        top: $u(e.top, `${t}.top`),
        right: $u(e.right, `${t}.right`),
        bottom: $u(e.bottom, `${t}.bottom`),
        left: $u(e.left, `${t}.left`),
        diagonalUp: $u(e.diagonalUp, `${t}.diagonalUp`),
        diagonalDown: $u(e.diagonalDown, `${t}.diagonalDown`),
      };
}
function td(e, t) {
  if (e === void 0 || e === `none`) return e;
  let n = ed(e, t);
  return {
    ...(n === void 0 || n === `none` ? {} : n),
    inside: $u(e.inside, `${t}.inside`),
    insideHorizontal: $u(e.insideHorizontal, `${t}.insideHorizontal`),
    insideVertical: $u(e.insideVertical, `${t}.insideVertical`),
    outside: $u(e.outside, `${t}.outside`),
  };
}
var nd,
  rd = e(() => {
    nd = 15;
  });
function id(e) {
  if (e) return { ...e, tabStops: e.tabStops ?? [] };
}
function ad(e) {
  return e.trim().toLowerCase();
}
function od(e, t) {
  if (!e) return t ? { ...t } : void 0;
  if (!t) return { ...e };
  let n = { ...e };
  for (let [e, r] of Object.entries(t)) r !== void 0 && Object.assign(n, { [e]: r });
  return n;
}
function sd(e) {
  if (e === void 0) return;
  let t = R(e);
  if (!t) throw Error(`Unsupported document JSX named style text config.`);
  return t;
}
function cd(e, t, n) {
  if (!t && !n) return;
  let r = n?.styleId ?? t?.styleId ?? e,
    i = n?.name ?? t?.name ?? r,
    a = od(t?.textStyle, sd(n?.textStyle)),
    o = Je(id(n?.paragraphStyle), id(t?.paragraphStyle));
  return {
    alias: e,
    styleId: r,
    name: i,
    basedOn: n?.basedOn ?? t?.basedOn,
    type: n?.type ?? t?.type,
    textStyle: a,
    paragraphStyle: o,
    spaceBefore: Gu(n?.spaceBefore, `namedStyles.${e}.spaceBefore`) ?? t?.spaceBefore,
    spaceAfter: Gu(n?.spaceAfter, `namedStyles.${e}.spaceAfter`) ?? t?.spaceAfter,
    tags: n?.tags ?? t?.tags ?? [],
  };
}
function ld(e) {
  if (!e) return;
  let t = new B();
  return (nt(t, e), t.toProto());
}
function ud(...e) {
  let t = {};
  for (let n of e)
    if (n)
      for (let [e, r] of Object.entries(n)) {
        let n = ad(e),
          i = t[n];
        if (!i) {
          t[n] = { ...r };
          continue;
        }
        t[n] = {
          ...i,
          ...r,
          textStyle: od(sd(i.textStyle), sd(r.textStyle)),
          paragraphStyle: Je(id(r.paragraphStyle), id(i.paragraphStyle)),
          tags: r.tags ?? i.tags,
        };
      }
  return t;
}
function dd(e) {
  let t = ud(pd, e),
    n = {};
  for (let [e, r] of Object.entries(t)) {
    let t = ad(e),
      i = cd(t, pd[t] ? cd(t, void 0, pd[t]) : void 0, r);
    i && (n[t] = i);
  }
  return n;
}
function fd(e, t) {
  let n = new Map();
  for (let e of Object.values(t)) {
    let t = n.get(e.styleId);
    if (!t) {
      n.set(e.styleId, e);
      continue;
    }
    n.set(e.styleId, {
      ...t,
      textStyle: od(t.textStyle, e.textStyle),
      paragraphStyle: Je(e.paragraphStyle, t.paragraphStyle),
      spaceBefore: e.spaceBefore ?? t.spaceBefore,
      spaceAfter: e.spaceAfter ?? t.spaceAfter,
      tags: e.tags.length > 0 ? e.tags : t.tags,
      basedOn: e.basedOn ?? t.basedOn,
      type: e.type ?? t.type,
      name: e.name || t.name,
    });
  }
  for (let t of n.values()) {
    let n = e.textStyles.getById(t.styleId);
    e.textStyles.set({
      id: t.styleId,
      name: t.name || n?.name || t.styleId,
      basedOn: t.basedOn ?? n?.basedOn,
      description: n?.description,
      type: t.type ?? n?.type,
      textStyle: he(ld(t.textStyle), n?.textStyle),
      paragraphStyle: Je(id(t.paragraphStyle), n?.paragraphStyle),
      spaceBefore: t.spaceBefore ?? n?.spaceBefore,
      spaceAfter: t.spaceAfter ?? n?.spaceAfter,
      tags: t.tags.length > 0 ? t.tags : (n?.tags ?? []),
    });
  }
}
var pd,
  md = e(() => {
    (g(),
      re(),
      Oe(),
      rd(),
      (pd = {
        normal: {
          styleId: `Normal`,
          name: `Normal`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 10,
            alignment: `justify`,
            color: `#111827`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 11e4 },
        },
        title: {
          styleId: `Title`,
          name: `Title`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 18,
            bold: !0,
            alignment: `center`,
            color: `#111827`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceAfter: 120,
        },
        byline: {
          styleId: `Byline`,
          name: `Byline`,
          basedOn: `Normal`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 10,
            alignment: `center`,
            color: `#111827`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceAfter: 40,
        },
        affiliation: {
          styleId: `Affiliation`,
          name: `Affiliation`,
          basedOn: `Normal`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 8.5,
            alignment: `center`,
            color: `#6B7280`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceAfter: 20,
        },
        eyebrow: {
          styleId: `Eyebrow`,
          name: `Eyebrow`,
          basedOn: `Normal`,
          textStyle: {
            typeface: `Aptos`,
            fontSizePt: 8.5,
            bold: !0,
            alignment: `center`,
            color: `#156082`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceAfter: 60,
        },
        abstractlabel: {
          styleId: `AbstractLabel`,
          name: `Abstract Label`,
          basedOn: `Normal`,
          textStyle: { typeface: `Times New Roman`, fontSizePt: 9, bold: !0 },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceAfter: 20,
        },
        abstract: {
          styleId: `Abstract`,
          name: `Abstract`,
          basedOn: `Normal`,
          textStyle: { typeface: `Times New Roman`, fontSizePt: 9, alignment: `justify` },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 108e3 },
          spaceAfter: 40,
        },
        keywords: {
          styleId: `Keywords`,
          name: `Keywords`,
          basedOn: `Normal`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 9,
            italic: !0,
            alignment: `justify`,
            color: `#4B5563`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 108e3 },
          spaceAfter: 80,
        },
        heading1: {
          styleId: `Heading1`,
          name: `Heading 1`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 11,
            bold: !0,
            alignment: `left`,
            color: `#111827`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceBefore: 120,
          spaceAfter: 40,
        },
        heading2: {
          styleId: `Heading2`,
          name: `Heading 2`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 10,
            bold: !0,
            italic: !0,
            alignment: `left`,
            color: `#111827`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceBefore: 80,
          spaceAfter: 20,
        },
        caption: {
          styleId: `Caption`,
          name: `Caption`,
          textStyle: {
            typeface: `Times New Roman`,
            fontSizePt: 8.5,
            alignment: `center`,
            color: `#6B7280`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceBefore: 20,
          spaceAfter: 80,
        },
        tabletitle: {
          styleId: `TableTitle`,
          name: `Table Title`,
          basedOn: `Normal`,
          textStyle: { typeface: `Times New Roman`, fontSizePt: 8.5, bold: !0, alignment: `left` },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceBefore: 80,
          spaceAfter: 20,
        },
        reference: {
          styleId: `Reference`,
          name: `Reference`,
          basedOn: `Normal`,
          textStyle: { typeface: `Times New Roman`, fontSizePt: 8.5, alignment: `justify` },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 105e3 },
          spaceAfter: 20,
        },
        equation: {
          styleId: `Equation`,
          name: `Equation`,
          basedOn: `Normal`,
          textStyle: {
            typeface: `Cambria Math`,
            fontSizePt: 10.5,
            alignment: `center`,
            color: `#111827`,
          },
          paragraphStyle: { tabStops: [], lineSpacingPercent: 1e5 },
          spaceBefore: 40,
          spaceAfter: 80,
        },
        pre: {
          styleId: `Pre`,
          name: `Pre`,
          basedOn: `Normal`,
          type: O.TEXT_STYLE_DEFINITION_TYPE_CHARACTER,
          textStyle: { typeface: `Courier New`, fontSizePt: 9, color: `#111827` },
        },
      }));
  });
function hd(e) {
  return {
    ...e,
    hyperlink: e.hyperlink ? { ...e.hyperlink } : void 0,
    citations: [...e.citations],
    reviewMarkIds: [...e.reviewMarkIds],
  };
}
function gd(e, t) {
  let n = ``,
    r = !1;
  for (let i of vd(e)) {
    if (typeof i == `string` || typeof i == `number`) {
      ((n += String(i)), (r = !0));
      continue;
    }
    throw Error(`${t} only accepts raw text and fragments.`);
  }
  return r ? n : void 0;
}
function _d(e) {
  let t = [],
    n = !1;
  function r(e) {
    if (!(e == null || typeof e == `boolean`)) {
      if (Array.isArray(e)) {
        ((n = !0), e.forEach(r));
        return;
      }
      if (typeof e == `string` || typeof e == `number`) {
        if (bd(e)) return;
        t.push(String(e));
        return;
      }
      if (er(e) && e.type === nr) {
        r(e.props.children);
        return;
      }
      throw Error(`<code> only accepts raw text, string arrays, and fragments.`);
    }
  }
  if ((r(e), t.length !== 0)) return n ? t : t.join(``);
}
function vd(e) {
  let t = [];
  return (yd(e, t), t);
}
function yd(e, t) {
  if (!(e == null || typeof e == `boolean`)) {
    if (Array.isArray(e)) {
      e.forEach((e) => yd(e, t));
      return;
    }
    if (er(e) && e.type === nr) {
      yd(e.props.children, t);
      return;
    }
    bd(e) || t.push(e);
  }
}
function Z(e, t) {
  return er(e) && e.type === t;
}
function bd(e) {
  return typeof e == `string` && e.trim().length === 0 && /[\n\r\t]/.test(e);
}
var xd = e(() => {
  rr();
});
function Sd(e, t) {
  let n = (e.sections ?? []).map((e, n) => Cd(e, t.sections[n]));
  return { ...e, elements: n.flatMap((e) => e.elements ?? []), sections: n };
}
function Cd(e, t) {
  let n = t?.body.hasParagraphContent ? [...(e.elements ?? [])] : wd(e.elements ?? []),
    r = t?.header.hasParagraphContent
      ? [...(e.header?.elements ?? [])]
      : wd(e.header?.elements ?? []),
    i = t?.footer.hasParagraphContent
      ? [...(e.footer?.elements ?? [])]
      : wd(e.footer?.elements ?? []),
    a = t?.firstHeader.hasParagraphContent
      ? [...(e.firstHeader?.elements ?? [])]
      : wd(e.firstHeader?.elements ?? []),
    o = t?.firstFooter.hasParagraphContent
      ? [...(e.firstFooter?.elements ?? [])]
      : wd(e.firstFooter?.elements ?? []);
  return {
    ...e,
    elements: n,
    header: r.length > 0 ? { elements: r } : void 0,
    footer: i.length > 0 ? { elements: i } : void 0,
    firstHeader: a.length > 0 ? { elements: a } : void 0,
    firstFooter: o.length > 0 ? { elements: o } : void 0,
  };
}
function wd(e) {
  return e.filter((e) => !Td(e));
}
function Td(e) {
  if (!(e.type === T.ELEMENT_TYPE_TEXT || e.type === T.ELEMENT_TYPE_TEXT_GROUP)) return !1;
  let t = e.paragraphs ?? [];
  return t.length === 0 || t.every(Ed);
}
function Ed(e) {
  return (
    !(e.runs ?? []).some((e) => (e.text ?? ``).length > 0) && (e.inlineNodes?.length ?? 0) === 0
  );
}
function Dd(e, t, n) {
  (t.ref && (t.ref.current = e),
    t.sections.forEach((t, n) => {
      t.ref && (t.ref.current = e.sections.items[n] ?? null);
    }));
  for (let t of n) {
    let n = e.sections.items[t.sectionIndex],
      r = (n ? Od(n, t.slot) : void 0)?.getElementById(t.id);
    if (t.kind === `image`) {
      t.ref.current = r instanceof k ? r : null;
      continue;
    }
    if (t.kind === `table`) {
      t.ref.current = r instanceof be ? r : null;
      continue;
    }
    if (t.kind === `chart`) {
      t.ref.current = r instanceof de ? r : null;
      continue;
    }
    if (t.kind === `tableOrShape`) {
      t.ref.current = r instanceof be || r instanceof z ? r : null;
      continue;
    }
    if (t.kind === `group`) {
      t.ref.current = r instanceof ou ? r : null;
      continue;
    }
    t.ref.current = r instanceof z ? r : null;
  }
}
function Od(e, t) {
  return t === `body`
    ? e.body
    : t === `header`
      ? e.header
      : t === `footer`
        ? e.footer
        : t === `firstHeader`
          ? e.firstHeader
          : e.firstFooter;
}
var kd = e(() => {
  (m(), su(), pe(), Le(), tt(), te());
});
function Ad(e) {
  let t = e.pageSetup,
    n = t?.widthEmu ?? Md,
    r = t?.pageMargin,
    i = r?.left ?? Nd,
    a = r?.right ?? Pd,
    o = n - i - a,
    s = o > 0 ? o / Fd : void 0;
  return s === void 0 ? {} : { contentWidth: s };
}
function jd(e, t) {
  if (e.contentWidth === void 0) throw Error(`${t} requires section page setup.`);
  return e.contentWidth;
}
var Md,
  Nd,
  Pd,
  Fd,
  Id = e(() => {
    ((Md = 12240), (Nd = 1440), (Pd = 1440), (Fd = 15));
  });
function Q(e, t, n) {
  for (let r of Object.keys(t))
    if (r !== `key` && !n.has(r)) throw Error(`Unsupported document JSX prop \`${r}\` on <${e}>.`);
}
function Ld(e, t, n) {
  if (n(t).length > 0) throw Error(`<${e}> does not accept children.`);
}
function Rd(e) {
  if (
    [`path`, `blob`, `dataUrl`, `uri`, `prompt`].reduce(
      (t, n) => t + (e[n] === void 0 ? 0 : 1),
      0,
    ) !== 1
  )
    throw Error(
      "<image> requires exactly one source: `path`, `blob`, `dataUrl`, `uri`, or `prompt`.",
    );
}
function zd(e) {
  return typeof e == `string` || (Array.isArray(e) && e.every((e) => typeof e == `string`));
}
function Bd(e, t) {
  let n = {};
  for (let [r, i] of Object.entries(e)) r === `key` || t.includes(r) || (n[r] = i);
  return n;
}
var Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df = e(() => {
    ((Vd = new Set([
      `name`,
      `fonts`,
      `theme`,
      `namedStyles`,
      `tableStyles`,
      `citations`,
      `children`,
      `ref`,
    ])),
      (Hd = new Set([
        `breakType`,
        `pageSetup`,
        `columns`,
        `differentFirstPage`,
        `startsWithPageBreak`,
        `pageNumberStart`,
        `pageNumberFormat`,
        `children`,
        `ref`,
      ])),
      (Ud = new Set([
        `breakType`,
        `pageSetup`,
        `count`,
        `space`,
        `widths`,
        `hasSeparatorLine`,
        `differentFirstPage`,
        `startsWithPageBreak`,
        `pageNumberStart`,
        `pageNumberFormat`,
        `children`,
        `ref`,
      ])),
      (Wd = new Set([`children`])),
      (Gd = new Set([
        `style`,
        `styleProps`,
        `styleId`,
        `paragraphStyle`,
        `bulletCharacter`,
        `marginLeft`,
        `indent`,
        `spaceBefore`,
        `spaceAfter`,
        `children`,
        `ref`,
      ])),
      (Kd = new Set([`run`, `textStyle`, `link`, `href`, `children`])),
      (qd = new Set([`run`, `textStyle`, `children`])),
      (Jd = new Set([`children`])),
      (Yd = new Set([`id`, `textStyle`, `children`])),
      (Xd = new Set([
        `latex`,
        `mathml`,
        `math`,
        `node`,
        `paragraphProperties`,
        `displayMode`,
        `textStyle`,
        `children`,
      ])),
      (Zd = new Set([
        `path`,
        `blob`,
        `dataUrl`,
        `uri`,
        `prompt`,
        `alt`,
        `fit`,
        `size`,
        `position`,
        `style`,
        `spaceBefore`,
        `spaceAfter`,
        `contentType`,
        `ref`,
      ])),
      (Qd = new Set([
        `chartType`,
        `config`,
        `position`,
        `size`,
        `style`,
        `spaceBefore`,
        `spaceAfter`,
        `ref`,
      ])),
      ($d = new Set([
        `rows`,
        `columns`,
        `values`,
        `columnWidths`,
        `style`,
        `position`,
        `width`,
        `borders`,
        `cellTextStyle`,
        `columnTextStyles`,
        `cellMargins`,
        `cellBorders`,
        `keepTogether`,
        `ref`,
        `children`,
      ])),
      (ef = new Set([`width`, `height`, `color`, `lineWidth`, `position`, `ref`])),
      (tf = new Set([`height`, `width`, `ref`])),
      (nf = new Set([
        `children`,
        `textStyle`,
        `fill`,
        `borders`,
        `margins`,
        `anchor`,
        `anchorCenter`,
        `horizontalOverflow`,
        `textDirection`,
      ])),
      (rf = new Set([
        `children`,
        `textStyle`,
        `fill`,
        `borders`,
        `colSpan`,
        `margins`,
        `anchor`,
        `anchorCenter`,
        `horizontalOverflow`,
        `textDirection`,
      ])),
      (af = new Set([
        `geometry`,
        `position`,
        `size`,
        `style`,
        `fill`,
        `line`,
        `adjustmentList`,
        `text`,
        `spaceBefore`,
        `spaceAfter`,
        `children`,
        `ref`,
      ])),
      (of = new Set([
        `id`,
        `name`,
        `position`,
        `size`,
        `style`,
        `spaceBefore`,
        `spaceAfter`,
        `children`,
        `ref`,
      ])),
      (sf = new Set([
        `code`,
        `position`,
        `size`,
        `style`,
        `options`,
        `name`,
        `surface`,
        `children`,
      ])),
      (cf = new Set([
        `code`,
        `language`,
        `fileName`,
        `showHeader`,
        `fit`,
        `syntaxHighlighting`,
        `position`,
        `size`,
        `textStyle`,
        `headerTextStyle`,
        `tableStyle`,
        `style`,
        `surface`,
        `children`,
        `ref`,
      ])),
      (lf = new Set([`string`, `source`, `config`, `children`])),
      (uf = new Set([
        `includeUncited`,
        `width`,
        `columnWidths`,
        `tableStyle`,
        `textStyle`,
        `headerTextStyle`,
        `ref`,
        `children`,
      ])));
  });
function ff(e) {
  let t = pf(e, `text style`);
  if (!t) return;
  let n = new B();
  return (nt(n, t), n);
}
function pf(e, t) {
  if (e === void 0) return;
  let n = R(e);
  if (!n) throw Error(`Unsupported ${t}.`);
  return n;
}
function mf(e, t, n) {
  if (e === void 0) return;
  let r = R(e);
  if (r) return r;
  if (typeof e == `string`) {
    let n = t[e.trim().toLowerCase()];
    if (n?.textStyle) return { ...n.textStyle };
  }
  throw Error(`Unsupported ${n}.`);
}
function hf(e, t, n) {
  if (e !== void 0) return e.map((e, r) => mf(e, t, `${n}[${r}]`));
}
function gf(e, t) {
  if (!e) return t ? { ...t } : void 0;
  if (!t) return { ...e };
  let n = { ...e };
  for (let [e, r] of Object.entries(t)) r !== void 0 && Object.assign(n, { [e]: r });
  return n;
}
function _f(e, t) {
  if (typeof e == `string` && !R(e)) return t[e.trim().toLowerCase()];
}
var vf = e(() => {
  Oe();
});
function yf(e, t) {
  let n = Bc(),
    r = {};
  for (let e of n) ((r[Nf(e.id)] = e.id), (r[Nf(e.name)] = e.id));
  for (let [i, a] of Object.entries(e ?? {})) {
    if (typeof a == `string`) {
      let e = zc(a),
        t = e ? Mf(e, r) : a;
      r[Nf(i)] = t;
      continue;
    }
    let e = a.id ?? i,
      o = a.name ?? e,
      s = a.baseTableStyle ? Mf(a.baseTableStyle, r) : a.basedOn;
    (n.push(bf(i, e, o, s, a, t)), (r[Nf(i)] = e), (r[Nf(e)] = e), (r[Nf(o)] = e));
  }
  return { definitions: n, aliases: r };
}
function bf(e, t, n, r, i, a) {
  let o = Pf.flatMap(({ key: t, condition: n }) => {
    let r = i[t];
    if (!xf(r)) return [];
    let o = Sf(r, a, `tableStyles.${e}.${t}`);
    return o ? [{ condition: n, style: o }] : [];
  });
  return {
    id: t,
    name: n,
    basedOn: r,
    wholeTable: i.wholeTable ? Sf(i.wholeTable, a, `tableStyles.${e}.wholeTable`) : void 0,
    conditionalStyles: o,
  };
}
function xf(e) {
  return typeof e == `object` && !!e;
}
function Sf(e, t, n) {
  let r = ff(mf(e.textStyle, t, `${n}.textStyle`))?.toProto(),
    i = Cf(e, n),
    a = wf(e, n),
    o = Gu(e.spaceBefore, `${n}.spaceBefore`),
    s = Gu(e.spaceAfter, `${n}.spaceAfter`);
  if (
    !(
      i === void 0 &&
      a === void 0 &&
      r === void 0 &&
      e.paragraphStyle === void 0 &&
      o === void 0 &&
      s === void 0
    )
  )
    return {
      tableProperties: i,
      cellStyle: a,
      textStyle: r,
      paragraphStyle: e.paragraphStyle
        ? { ...e.paragraphStyle, tabStops: e.paragraphStyle.tabStops ?? [] }
        : void 0,
      spaceBefore: o,
      spaceAfter: s,
    };
}
function Cf(e, t) {
  if (!e.table) return;
  let n = e.table.fill === void 0 ? void 0 : new _e(e.table.fill).toProto(),
    r = Ef(e.table.borders, `${t}.table.borders`),
    i = Zu(e.table.cellMargins, `${t}.table.cellMargins`);
  if (!(n === void 0 && e.table.alignment === void 0 && r === void 0 && i === void 0))
    return {
      fill: n,
      alignment: e.table.alignment,
      borders: r,
      cellMargins:
        i === void 0
          ? void 0
          : {
              left: i.left === void 0 ? void 0 : W(i.left),
              right: i.right === void 0 ? void 0 : W(i.right),
              top: i.top === void 0 ? void 0 : W(i.top),
              bottom: i.bottom === void 0 ? void 0 : W(i.bottom),
            },
      effects: [],
    };
}
function wf(e, t) {
  let n = e.cell;
  if (!n) return;
  let r = n.fill === void 0 ? void 0 : new _e(n.fill).toProto(),
    i = Zu(n.margins, `${t}.cell.margins`),
    a = Tf(n.borders, `${t}.cell.borders`),
    o = Df(n.borders, `${t}.cell.borders`);
  if (
    !(
      r === void 0 &&
      a === void 0 &&
      o === void 0 &&
      i === void 0 &&
      n.anchor === void 0 &&
      n.textDirection === void 0
    )
  )
    return {
      fill: r,
      lines: a,
      borders: o,
      marginLeft: i?.left === void 0 ? void 0 : W(i.left),
      marginRight: i?.right === void 0 ? void 0 : W(i.right),
      marginTop: i?.top === void 0 ? void 0 : W(i.top),
      marginBottom: i?.bottom === void 0 ? void 0 : W(i.bottom),
      anchor: n.anchor,
      textDirection: n.textDirection,
    };
}
function Tf(e, t) {
  if (e === void 0 || e === `none`) return;
  let n = {
    top: kf(e.top, `${t}.top`),
    right: kf(e.right, `${t}.right`),
    bottom: kf(e.bottom, `${t}.bottom`),
    left: kf(e.left, `${t}.left`),
    diagonalDown: kf(e.diagonalDown, `${t}.diagonalDown`),
    diagonalUp: kf(e.diagonalUp, `${t}.diagonalUp`),
  };
  if (
    !(
      n.top === void 0 &&
      n.right === void 0 &&
      n.bottom === void 0 &&
      n.left === void 0 &&
      n.diagonalDown === void 0 &&
      n.diagonalUp === void 0
    )
  )
    return n;
}
function Ef(e, t) {
  if (e === void 0) return;
  if (e === `none`)
    return {
      top: { none: !0 },
      right: { none: !0 },
      bottom: { none: !0 },
      left: { none: !0 },
      insideHorizontal: { none: !0 },
      insideVertical: { none: !0 },
    };
  let n = Of(e.outside, `${t}.outside`),
    r = Of(e.inside, `${t}.inside`),
    i = {
      top: Of(e.top, `${t}.top`) ?? n,
      right: Of(e.right, `${t}.right`) ?? n,
      bottom: Of(e.bottom, `${t}.bottom`) ?? n,
      left: Of(e.left, `${t}.left`) ?? n,
      insideHorizontal: Of(e.insideHorizontal, `${t}.insideHorizontal`) ?? r,
      insideVertical: Of(e.insideVertical, `${t}.insideVertical`) ?? r,
    };
  return Af(i) ? i : void 0;
}
function Df(e, t) {
  if (e === void 0) return;
  if (e === `none`)
    return {
      top: { none: !0 },
      right: { none: !0 },
      bottom: { none: !0 },
      left: { none: !0 },
      diagonalDown: { none: !0 },
      diagonalUp: { none: !0 },
    };
  let n = {
    top: Of(e.top, `${t}.top`),
    right: Of(e.right, `${t}.right`),
    bottom: Of(e.bottom, `${t}.bottom`),
    left: Of(e.left, `${t}.left`),
    diagonalDown: Of(e.diagonalDown, `${t}.diagonalDown`),
    diagonalUp: Of(e.diagonalUp, `${t}.diagonalUp`),
  };
  return jf(n) ? n : void 0;
}
function Of(e, t) {
  if (e === void 0) return;
  if (e === `none`) return { none: !0 };
  let n = kf(e, t);
  return n ? { line: n } : void 0;
}
function kf(e, t) {
  if (e === void 0 || e === `none`) return;
  let n = td({ top: e }, t);
  if (!(n === void 0 || n === `none`)) return ut(n.top)?.toProto();
}
function Af(e) {
  return (
    e.top !== void 0 ||
    e.right !== void 0 ||
    e.bottom !== void 0 ||
    e.left !== void 0 ||
    e.insideHorizontal !== void 0 ||
    e.insideVertical !== void 0
  );
}
function jf(e) {
  return (
    e.top !== void 0 ||
    e.right !== void 0 ||
    e.bottom !== void 0 ||
    e.left !== void 0 ||
    e.diagonalDown !== void 0 ||
    e.diagonalUp !== void 0
  );
}
function Mf(e, t) {
  return t[Nf(e)] ?? e;
}
function Nf(e) {
  return e.trim().toLowerCase();
}
var Pf,
  Ff = e(() => {
    (m(),
      A(),
      Se(),
      at(),
      Dl(),
      rd(),
      vf(),
      (Pf = [
        { key: `band1Horz`, condition: w.CONDITION_BANDED_ROW_ODD },
        { key: `bandedRowOdd`, condition: w.CONDITION_BANDED_ROW_ODD },
        { key: `band2Horz`, condition: w.CONDITION_BANDED_ROW_EVEN },
        { key: `bandedRowEven`, condition: w.CONDITION_BANDED_ROW_EVEN },
        { key: `band1Vert`, condition: w.CONDITION_BANDED_COLUMN_ODD },
        { key: `bandedColumnOdd`, condition: w.CONDITION_BANDED_COLUMN_ODD },
        { key: `band2Vert`, condition: w.CONDITION_BANDED_COLUMN_EVEN },
        { key: `bandedColumnEven`, condition: w.CONDITION_BANDED_COLUMN_EVEN },
        { key: `firstColumn`, condition: w.CONDITION_FIRST_COLUMN },
        { key: `lastColumn`, condition: w.CONDITION_LAST_COLUMN },
        { key: `headerRow`, condition: w.CONDITION_FIRST_ROW },
        { key: `firstRow`, condition: w.CONDITION_FIRST_ROW },
        { key: `totalRow`, condition: w.CONDITION_LAST_ROW },
        { key: `lastRow`, condition: w.CONDITION_LAST_ROW },
        { key: `topLeftCell`, condition: w.CONDITION_TOP_LEFT_CELL },
        { key: `nwCell`, condition: w.CONDITION_TOP_LEFT_CELL },
        { key: `topRightCell`, condition: w.CONDITION_TOP_RIGHT_CELL },
        { key: `neCell`, condition: w.CONDITION_TOP_RIGHT_CELL },
        { key: `bottomLeftCell`, condition: w.CONDITION_BOTTOM_LEFT_CELL },
        { key: `swCell`, condition: w.CONDITION_BOTTOM_LEFT_CELL },
        { key: `bottomRightCell`, condition: w.CONDITION_BOTTOM_RIGHT_CELL },
        { key: `seCell`, condition: w.CONDITION_BOTTOM_RIGHT_CELL },
      ]));
  });
function If() {
  let e = 1;
  return { nextParagraphId: () => `doc-paragraph-${e++}` };
}
function Lf(e) {
  return e === void 0
    ? []
    : Array.isArray(e)
      ? e.map((e) => ({ ...e }))
      : Object.entries(e).map(([e, t]) => ({ ...t, id: e }));
}
function Rf(e) {
  let t = new Map(),
    n = [];
  for (let r of Lf(e)) {
    if (!r.id) throw Error("<document> citation definitions require non-empty `id`.");
    (t.has(r.id) || n.push(r.id), t.set(r.id, { ...r }));
  }
  let r = new Map(),
    i = [],
    a = (e) => {
      let r = t.get(e);
      if (r) return r;
      let i = { id: e, title: e };
      return (t.set(e, i), n.push(e), i);
    };
  return {
    cite: (e) => {
      if (!e) throw Error("<citation> requires a non-empty `id`.");
      let t = a(e),
        n = r.get(e);
      return (
        n === void 0 && ((n = i.length + 1), i.push(e), r.set(e, n)),
        { id: e, number: n, definition: t }
      );
    },
    entries: (e = {}) => {
      let t = [...i];
      if (e.includeUncited) {
        for (let e of n) r.has(e) || (r.set(e, i.length + 1), i.push(e));
        t.splice(0, t.length, ...i);
      }
      return t.map((e) => ({ id: e, number: r.get(e) ?? 0, definition: a(e) }));
    },
    definitions: () => n.map((e) => a(e)),
  };
}
function zf(e) {
  let t = [`⁰`, `¹`, `²`, `³`, `⁴`, `⁵`, `⁶`, `⁷`, `⁸`, `⁹`];
  return String(e)
    .split(``)
    .map((e) => t[Number(e)] ?? e)
    .join(``);
}
function Bf(e) {
  return Vf(e);
}
function Vf(e) {
  let t = Jf(e),
    n = Jp(),
    r = [],
    i = If();
  (t.props.name && (n.name = t.props.name),
    Uf(n, t.props.fonts),
    Hf(n, t.props.theme),
    fd(n, t.namedStyles),
    Wf(n, t.citationDefinitions),
    Kf(n, t.tableStyleDefinitions),
    t.sections.forEach((e, t) => {
      let a = t === 0 ? n.sections.first : n.sections.add();
      (t > 0 && e.props.pageSetup === void 0 && (a.pageSetup = n.sections.items[t - 1]?.pageSetup),
        Yp(a, e.props));
      let o = Ad(a);
      (Qp(a.body, e.body, t, `body`, r, o, i),
        Qp(a.header, e.header, t, `header`, r, o, i),
        Qp(a.footer, e.footer, t, `footer`, r, o, i),
        Qp(a.firstHeader, e.firstHeader, t, `firstHeader`, r, o, i),
        Qp(a.firstFooter, e.firstFooter, t, `firstFooter`, r, o, i));
    }));
  let a = qf(Sd(n.toProto(), t), t.tableStyleDefinitions);
  Cm(a, n.theme.hexColorMap);
  let o = Ru.load(a);
  return (Dd(o, t, r), o);
}
function Hf(e, t) {
  t?.colorScheme !== void 0 && (e.theme.colorScheme = t.colorScheme);
}
function Uf(e, t) {
  if (t !== void 0) for (let n of t) e.fonts.set(n);
}
function Wf(e, t) {
  e.citations.replace(t.map(Gf));
}
function Gf(e) {
  return {
    id: e.id,
    tetherId: e.tetherId ?? ``,
    targetId: e.targetId ?? ``,
    uri: e.uri,
    title: e.title,
    type: e.type ?? S.CONTENT_REFERENCE_TYPE_EXTERNAL,
    sourceType: e.sourceType,
    contentLineRange: e.contentLineRange,
    contentId: e.contentId,
    locator: e.locator,
    evidence: e.evidence,
    note: e.note,
  };
}
function Kf(e, t) {
  for (let n of t) e.tableStyleDefinitions.set(n);
}
function qf(e, t) {
  if (t.length === 0) return e;
  let n = (e.sections ?? []).map((e) => ({
    ...e,
    elements: ve(e.elements ?? [], t),
    header: e.header ? { ...e.header, elements: ve(e.header.elements ?? [], t) } : void 0,
    footer: e.footer ? { ...e.footer, elements: ve(e.footer.elements ?? [], t) } : void 0,
    firstHeader: e.firstHeader
      ? { ...e.firstHeader, elements: ve(e.firstHeader.elements ?? [], t) }
      : void 0,
    firstFooter: e.firstFooter
      ? { ...e.firstFooter, elements: ve(e.firstFooter.elements ?? [], t) }
      : void 0,
  }));
  return { ...e, sections: n, elements: n.flatMap((e) => e.elements ?? []) };
}
function Jf(e) {
  return er(e) && e.type === `document`
    ? (Q(`document`, e.props, Vd), Yf(e.props, e.props.children))
    : Yf({}, e);
}
function Yf(e, t) {
  let n = dd(e.namedStyles),
    r = yf(e.tableStyles, n),
    i = Rf(e.citations),
    a = vd(t),
    o = a.some((e) => Z(e, `section`) || Z(e, `columns`));
  if (o) {
    for (let e of a)
      if (!Z(e, `section`) && !Z(e, `columns`))
        throw Error(`<document> cannot mix <section>/<columns> children with direct body content.`);
  }
  let s = o ? a.map((e) => ep(e, n, i)) : [np(a, n, i)];
  return (
    Cp(s, r.aliases),
    {
      props: {
        name: e.name,
        fonts: e.fonts,
        theme: e.theme,
        namedStyles: e.namedStyles,
        tableStyles: e.tableStyles,
        citations: e.citations,
      },
      ref: e.ref,
      namedStyles: n,
      tableStyleDefinitions: r.definitions,
      tableStyleAliases: r.aliases,
      citationDefinitions: i.definitions(),
      sections: s,
    }
  );
}
function Xf(e) {
  return `widthPx` in e || `heightPx` in e;
}
function Zf(e, t) {
  if (e !== void 0)
    return {
      top: Hu(e.top, `${t}.top`),
      right: Hu(e.right, `${t}.right`),
      bottom: Hu(e.bottom, `${t}.bottom`),
      left: Hu(e.left, `${t}.left`),
      header: Hu(e.header, `${t}.header`),
      footer: Hu(e.footer, `${t}.footer`),
      gutter: Hu(e.gutter, `${t}.gutter`),
    };
}
function Qf(e, t) {
  if (e === void 0) return;
  if (!Xf(e)) return e;
  let { widthPx: n, heightPx: r, pageMargin: i, ...a } = e;
  return {
    ...a,
    widthEmu: Hu(n, `${t}.widthPx`),
    heightEmu: Hu(r, `${t}.heightPx`),
    pageMargin: Zf(i, `${t}.pageMargin`),
  };
}
function $f(e, t) {
  if (e !== void 0)
    return {
      ...e,
      space: e.space === void 0 ? 420 : Ku(e.space, `${t}.space`),
      widths: qu(e.widths, `${t}.widths`) ?? [],
      hasSeparatorLine: e.hasSeparatorLine ?? !1,
    };
}
function ep(e, t, n) {
  if (!er(e) || (e.type !== `section` && e.type !== `columns`))
    throw Error(`Expected a <section> or <columns> element.`);
  if (e.type === `columns`) return tp(e.props, t, n);
  Q(`section`, e.props, Hd);
  let r = [],
    i,
    a,
    o,
    s;
  for (let t of vd(e.props.children)) {
    if (Z(t, `header`)) {
      if (i !== void 0) throw Error(`<section> accepts at most one <header> child.`);
      (Q(`header`, t.props, Wd), (i = t.props.children));
      continue;
    }
    if (Z(t, `footer`)) {
      if (a !== void 0) throw Error(`<section> accepts at most one <footer> child.`);
      (Q(`footer`, t.props, Wd), (a = t.props.children));
      continue;
    }
    if (Z(t, `first-header`)) {
      if (o !== void 0) throw Error(`<section> accepts at most one <first-header> child.`);
      (Q(`first-header`, t.props, Wd), (o = t.props.children));
      continue;
    }
    if (Z(t, `first-footer`)) {
      if (s !== void 0) throw Error(`<section> accepts at most one <first-footer> child.`);
      (Q(`first-footer`, t.props, Wd), (s = t.props.children));
      continue;
    }
    r.push(t);
  }
  return {
    props: {
      breakType: e.props.breakType,
      pageSetup: Qf(e.props.pageSetup, `<section>.pageSetup`),
      columns: $f(e.props.columns, `<section>.columns`),
      differentFirstPage: e.props.differentFirstPage,
      startsWithPageBreak: e.props.startsWithPageBreak,
      pageNumberStart: e.props.pageNumberStart,
      pageNumberFormat: e.props.pageNumberFormat,
    },
    ref: e.props.ref,
    body: rp(r, `<section>`, t, n),
    header: rp(i, `<header>`, t, n),
    footer: rp(a, `<footer>`, t, n),
    firstHeader: rp(o, `<first-header>`, t, n),
    firstFooter: rp(s, `<first-footer>`, t, n),
  };
}
function tp(e, t, n) {
  Q(`columns`, e, Ud);
  let r = e.count ?? 2;
  if (!Number.isInteger(r) || r <= 0) throw Error("<columns> `count` must be a positive integer.");
  return {
    props: {
      breakType: e.breakType ?? rn.SECTION_BREAK_TYPE_CONTINUOUS,
      pageSetup: Qf(e.pageSetup, `<columns>.pageSetup`),
      columns: {
        count: r,
        space: e.space === void 0 ? 420 : Ku(e.space, `<columns>.space`),
        widths: qu(e.widths, `<columns>.widths`) ?? [],
        hasSeparatorLine: e.hasSeparatorLine ?? !1,
      },
      differentFirstPage: e.differentFirstPage,
      startsWithPageBreak: e.startsWithPageBreak,
      pageNumberStart: e.pageNumberStart,
      pageNumberFormat: e.pageNumberFormat,
    },
    ref: e.ref,
    body: rp(e.children, `<columns>`, t, n),
    header: Em(),
    footer: Em(),
    firstHeader: Em(),
    firstFooter: Em(),
  };
}
function np(e, t, n) {
  return {
    props: {},
    body: rp(e, `<document>`, t, n),
    header: Em(),
    footer: Em(),
    firstHeader: Em(),
    firstFooter: Em(),
  };
}
function rp(e, t, n, r) {
  let i = vd(e),
    a = [];
  for (let e of i) {
    let i = ip(e, t, n, r);
    Array.isArray(i) ? a.push(...i) : a.push(i);
  }
  return { nodes: a, hasParagraphContent: a.some((e) => e.kind === `paragraph`) };
}
function ip(e, t, n, r) {
  if (typeof e == `string` || typeof e == `number`)
    return {
      kind: `paragraph`,
      props: { styleId: n.normal?.styleId },
      children: [{ kind: `run`, text: String(e) }],
    };
  if (!er(e) || typeof e.type != `string`)
    throw Error(
      `${t} only accepts text, <paragraph>, <page-number>, <math>, <image>, <chart>, <table>, <rule>, <spacer>, <shape>, <group>, <mermaid>, <code>, <markdown>, and <references> children.`,
    );
  if (e.type === `references`) return Op(e.props, n, r);
  if (e.type === `markdown`) return op(e.props, n);
  if (e.type === `paragraph`) return Ap(e.props, n, r);
  if (e.type === `page-number`)
    return { kind: `paragraph`, props: { styleId: n.normal?.styleId }, children: [Np(e.props)] };
  if (e.type === `math`)
    return {
      kind: `paragraph`,
      props: { styleId: n.equation?.styleId },
      children: [Kp(e.props, `block`, n)],
    };
  if (e.type === `image`) {
    (Q(`image`, e.props, Zd), Tm(`image`, e.props.children), Rd(e.props));
    let t = Bd(e.props, [`ref`, `children`]);
    return {
      kind: `image`,
      props: {
        ...t,
        position: Ju(t.position, `<image> position`),
        size: Yu(t.size, `<image> size`),
        spaceBefore: X(t.spaceBefore, `<image> spaceBefore`),
        spaceAfter: X(t.spaceAfter, `<image> spaceAfter`),
      },
      ref: e.props.ref,
    };
  }
  if (e.type === `chart`) {
    (Q(`chart`, e.props, Qd), Tm(`chart`, e.props.children));
    let t = Bd(e.props, [`ref`, `children`]);
    return {
      kind: `chart`,
      props: {
        ...t,
        position: Ju(t.position, `<chart> position`),
        size: Yu(t.size, `<chart> size`),
        spaceBefore: X(t.spaceBefore, `<chart> spaceBefore`),
        spaceAfter: X(t.spaceAfter, `<chart> spaceAfter`),
      },
      ref: e.props.ref,
    };
  }
  if (e.type === `table`) return Rp(e.props, n, r);
  if (e.type === `rule`) {
    (Q(`rule`, e.props, ef), Tm(`rule`, e.props.children));
    let t = Bd(e.props, [`ref`, `children`]);
    return {
      kind: `rule`,
      props: {
        ...t,
        width: t.width === `content` ? t.width : X(t.width, `<rule> width`),
        height: X(t.height, `<rule> height`),
        lineWidth: X(t.lineWidth, `<rule> lineWidth`),
        position: Ju(t.position, `<rule> position`),
      },
      ref: e.props.ref,
    };
  }
  if (e.type === `spacer`) {
    (Q(`spacer`, e.props, tf), Tm(`spacer`, e.props.children));
    let t = Bd(e.props, [`ref`, `children`]),
      n = Bu(t.height, `<spacer> height`);
    if (n <= 0) throw Error("<spacer> `height` must be a positive px value.");
    let r = t.width === `content` ? t.width : X(t.width, `<spacer> width`);
    return { kind: `spacer`, props: { ...t, height: n, width: r }, ref: e.props.ref };
  }
  if (e.type === `shape`) {
    Q(`shape`, e.props, af);
    let t = e.props.children ? qp(e.props.children, `<shape>`, n, r) : void 0;
    if (e.props.text !== void 0 && t)
      throw Error("<shape> accepts text either as children or as the `text` prop.");
    let i = Bd(e.props, [`ref`, `children`]);
    return {
      kind: `shape`,
      props: {
        ...i,
        position: Ju(i.position, `<shape> position`),
        size: Yu(i.size, `<shape> size`),
        spaceBefore: X(i.spaceBefore, `<shape> spaceBefore`),
        spaceAfter: X(i.spaceAfter, `<shape> spaceAfter`),
      },
      ref: e.props.ref,
      childParagraphs: t,
    };
  }
  if (e.type === `group`) {
    Q(`group`, e.props, of);
    let t = e.props.children
        ? rp(e.props.children, `<group>`, n, r)
        : { nodes: [], hasParagraphContent: !1 },
      i = Bd(e.props, [`ref`, `children`]);
    return {
      kind: `group`,
      props: {
        ...i,
        position: Ju(i.position, `<group> position`),
        size: Yu(i.size, `<group> size`),
        spaceBefore: X(i.spaceBefore, `<group> spaceBefore`),
        spaceAfter: X(i.spaceAfter, `<group> spaceAfter`),
      },
      ref: e.props.ref,
      children: t.nodes,
    };
  }
  if (e.type === `mermaid`) {
    if ((Q(`mermaid`, e.props, sf), Tm(`mermaid`, e.props.children), !zd(e.props.code)))
      throw Error("<mermaid> requires `code` as a string or string array.");
    let t = Bd(e.props, [`children`]);
    return {
      kind: `mermaid`,
      props: {
        ...t,
        position: Ju(t.position, `<mermaid> position`),
        size: Xu(t.size, `<mermaid> size`),
      },
    };
  }
  if (e.type === `code`) return Dp(e.props, n);
  throw e.type === `header` ||
    e.type === `footer` ||
    e.type === `first-header` ||
    e.type === `first-footer` ||
    e.type === `section` ||
    e.type === `columns` ||
    e.type === `document` ||
    e.type === `run` ||
    e.type === `pre` ||
    e.type === `page-number` ||
    e.type === `citation` ||
    e.type === `references` ||
    e.type === `rule` ||
    e.type === `spacer` ||
    e.type === `markdown` ||
    e.type === `row` ||
    e.type === `cell`
    ? Error(`${t} does not accept <${e.type}> as body content.`)
    : Error(`Unsupported document JSX tag <${String(e.type)}>.`);
}
function ap(e) {
  return {
    ...Am,
    ...e,
    table: { ...Am.table, ...e?.table },
    codeBlock: { ...Am.codeBlock, ...e?.codeBlock },
    mathBlock: { ...Am.mathBlock, ...e?.mathBlock },
    mermaid: { ...Am.mermaid, ...e?.mermaid },
    thematicBreak: { ...Am.thematicBreak, ...e?.thematicBreak },
  };
}
function op(e, t) {
  if ((Q(`markdown`, e, lf), e.string !== void 0 && typeof e.string != `string`))
    throw Error("<markdown> `string` must be a string when provided.");
  if (e.source !== void 0 && typeof e.source != `string`)
    throw Error("<markdown> `source` must be a string when provided.");
  let n = gd(e.children, `<markdown>`);
  if ([e.string !== void 0, e.source !== void 0, n !== void 0].filter(Boolean).length !== 1)
    throw Error("<markdown> requires exactly one source: children, `string`, or `source`.");
  let r = e.string ?? e.source ?? n;
  if (r === void 0) throw Error(`<markdown> requires markdown source text.`);
  let i = ap(e.config);
  return sp(Dm.parse(r).children, i, t, 0);
}
function sp(e, t, n, r) {
  let i = [];
  for (let a of e) i.push(...cp(a, t, n, r));
  return i;
}
function cp(e, t, n, r) {
  if (e.type === `paragraph`) return [up(e, t.paragraph, t, n, {})];
  if (e.type === `heading`) return [up(e, lp(e, t), t, n, {})];
  if (e.type === `list`) return dp(e, t, n, r);
  if (e.type === `blockquote`) return pp(e.children, t, n, r);
  if (e.type === `code`) return [mp(e, t, n)];
  if (e.type === `table`) return [_p(e, t, n)];
  if (e.type === `thematicBreak`) return [vp(t)];
  if (e.type === `definition` || e.type === `footnoteDefinition`) return [];
  let i = d(e).trim();
  return i.length === 0 ? [] : [jp({ style: t.paragraph }, [Sp(i, void 0)], n)];
}
function lp(e, t) {
  return e.depth === 1
    ? t.heading1
    : e.depth === 2
      ? t.heading2
      : e.depth === 3
        ? t.heading3
        : e.depth === 4
          ? t.heading4
          : e.depth === 5
            ? t.heading5
            : t.heading6;
}
function up(e, t, n, r, i) {
  return jp({ ...i, style: t }, yp(e.children, n, r, void 0), r);
}
function dp(e, t, n, r) {
  let i = [],
    a = e.start ?? 1;
  for (let [o, s] of e.children.entries()) i.push(...fp(s, t, n, r, e.ordered === !0, a + o));
  return i;
}
function fp(e, t, n, r, i, a) {
  let o = [],
    s = !0;
  for (let c of e.children) {
    if (c.type === `paragraph`) {
      let e = yp(c.children, t, n, void 0);
      (i && s && e.unshift(Sp(`${a}. `, void 0)),
        o.push(
          jp(
            {
              style: i ? t.orderedListItem : t.listItem,
              bulletCharacter: i ? void 0 : `•`,
              marginLeft: `${22 + r * 18}px`,
              indent: i ? void 0 : `-14px`,
            },
            e,
            n,
          ),
        ),
        (s = !1));
      continue;
    }
    if (c.type === `list`) {
      o.push(...dp(c, t, n, r + 1));
      continue;
    }
    o.push(...cp(c, t, n, r));
  }
  return o;
}
function pp(e, t, n, r) {
  let i = [];
  for (let a of e) {
    if (a.type === `paragraph`) {
      i.push(up(a, t.blockquote, t, n, { marginLeft: `16px` }));
      continue;
    }
    i.push(...cp(a, t, n, r));
  }
  return i;
}
function mp(e, t, n) {
  let r = e.lang?.trim(),
    i = r?.toLowerCase();
  if (i === `mermaid` || i === `mmd`) return hp(e, t);
  if (i === `math` || i === `latex` || i === `tex`) return gp(e, t, n);
  let a = t.codeBlock;
  return Dp(
    { ...a, code: e.value, language: r ?? a?.language, fileName: e.meta ?? a?.fileName },
    n,
  );
}
function hp(e, t) {
  let n = t.mermaid,
    r = { ...n, code: e.value, name: e.meta ?? n?.name };
  return {
    kind: `mermaid`,
    props: {
      ...r,
      position: Ju(r.position, `<markdown> mermaid position`),
      size: Xu(r.size, `<markdown> mermaid size`),
    },
  };
}
function gp(e, t, n) {
  let r = t.mathBlock;
  return jp(
    { style: `equation` },
    [Kp({ ...r, latex: e.value, displayMode: r?.displayMode ?? `block` }, `block`, n)],
    n,
  );
}
function _p(e, t, n) {
  let r = e.children.map((e) => e.children.map((e) => d(e).replace(/\s+/g, ` `).trim())),
    i = r.reduce((e, t) => Math.max(e, t.length), 0);
  return Rp(
    { ...t.table, rows: Math.max(1, r.length), columns: Math.max(1, i), values: r },
    n,
    Rf(void 0),
  );
}
function vp(e) {
  let t = e.thematicBreak;
  return {
    kind: `rule`,
    props: {
      ...t,
      width: t?.width === `content` ? t.width : X(t?.width, `<markdown> thematicBreak width`),
      height: X(t?.height, `<markdown> thematicBreak height`),
      lineWidth: X(t?.lineWidth, `<markdown> thematicBreak lineWidth`),
      position: Ju(t?.position, `<markdown> thematicBreak position`),
    },
  };
}
function yp(e, t, n, r) {
  let i = [];
  for (let a of e) {
    if (a.type === `text`) {
      i.push(Sp(a.value, r));
      continue;
    }
    if (a.type === `inlineCode`) {
      let e = mf(t.inlineCode, n, `<markdown> inlineCode`);
      i.push(Sp(a.value, gf(r, e)));
      continue;
    }
    if (a.type === `strong`) {
      i.push(...yp(a.children, t, n, gf(r, { bold: !0 })));
      continue;
    }
    if (a.type === `emphasis`) {
      i.push(...yp(a.children, t, n, gf(r, { italic: !0 })));
      continue;
    }
    if (a.type === `link`) {
      i.push(...bp(a, t, n, r));
      continue;
    }
    if (a.type === `break`) {
      i.push(
        Sp(
          `
`,
          r,
        ),
      );
      continue;
    }
    if (a.type === `html`) {
      i.push(...xp(a, r));
      continue;
    }
    let e = d(a);
    e.length > 0 && i.push(Sp(e, r));
  }
  return i;
}
function bp(e, t, n, r) {
  let i = mf(t.link, n, `<markdown> link`),
    a = yp(e.children, t, n, gf(r, i));
  for (let t of a) t.kind === `run` && (t.hyperlink = { uri: e.url, isExternal: !0, action: `` });
  return a;
}
function xp(e, t) {
  return /^<br\s*\/?>$/i.test(e.value.trim())
    ? [
        Sp(
          `
`,
          t,
        ),
      ]
    : [];
}
function Sp(e, t) {
  let n = { kind: `run`, text: e };
  return (t !== void 0 && (n.textStyle = t), n);
}
function Cp(e, t) {
  if (Object.keys(t).length !== 0)
    for (let n of e)
      (wp(n.body, t), wp(n.header, t), wp(n.footer, t), wp(n.firstHeader, t), wp(n.firstFooter, t));
}
function wp(e, t) {
  for (let n of e.nodes) Tp(n, t);
}
function Tp(e, t) {
  if (e.kind === `code`) {
    e.props.tableStyle = Ep(e.props.tableStyle, t);
    return;
  }
  if (e.kind === `table`) {
    e.props.style = Ep(e.props.style, t);
    for (let n of e.rows ?? []) for (let e of n.cells) for (let n of e.nodes ?? []) Tp(n, t);
  }
}
function Ep(e, t) {
  if (e !== void 0)
    return typeof e == `string`
      ? Mf(e, t)
      : e.preset === void 0
        ? e
        : { ...e, preset: Mf(e.preset, t) };
}
function Dp(e, t) {
  Q(`code`, e, cf);
  let n = _d(e.children);
  if ([e.code !== void 0, n !== void 0].filter(Boolean).length !== 1)
    throw Error("<code> requires exactly one source: children or `code`.");
  let r = e.syntaxHighlighting ?? `color`;
  if (r !== `color` && r !== `monochrome` && r !== `none`)
    throw Error('<code> `syntaxHighlighting` must be "color", "monochrome", or "none".');
  return {
    kind: `code`,
    props: {
      code: e.code ?? n,
      language: e.language,
      fileName: e.fileName,
      showHeader: e.showHeader,
      fit: e.fit,
      syntaxHighlighting: r,
      position: Ju(e.position, `<code> position`),
      size: Xu(e.size, `<code> size`),
      textStyle: mf(e.textStyle, t, "<code> `textStyle`"),
      headerTextStyle: mf(e.headerTextStyle, t, "<code> `headerTextStyle`"),
      tableStyle: e.tableStyle,
      style: e.style,
      surface: e.surface,
    },
    ref: e.ref,
  };
}
function Op(e, t, n) {
  (Q(`references`, e, uf), Tm(`references`, e.children));
  let r = n.entries({ includeUncited: e.includeUncited ?? !1 }),
    i = e.headerTextStyle ?? { bold: !0, fontSize: `10px`, color: `#111827` },
    a = e.textStyle ?? { fontSize: `10px`, color: `#111827`, lineSpacing: 1.12 },
    o = (e, n = {}) => ({ value: e, props: Gp(n, t) }),
    s = [
      {
        props: Hp({ textStyle: i }, t),
        cells: [o(`#`), o(`Source`), o(`Evidence`), o(`Location`)],
      },
      ...r.map((e) => ({
        props: Hp({ textStyle: a }, t),
        cells: [
          o(String(e.number)),
          o(e.definition.title ?? e.id),
          o(e.definition.evidence ?? e.definition.note ?? ``),
          o(kp(e.definition)),
        ],
      })),
    ];
  return (
    r.length === 0 &&
      s.push({
        props: Hp({ textStyle: a }, t),
        cells: [
          o(``),
          o(`No cited references`),
          o(`Add <citation id="..." /> nodes or pass includeUncited.`),
          o(``),
        ],
      }),
    {
      kind: `table`,
      props: zp(
        {
          rows: s.length,
          columns: 4,
          values: s.map((e) => e.cells.map((e) => e.value)),
          width: e.width ?? `content`,
          columnWidths: e.columnWidths ?? [`34px`, `168px`, `318px`, `162px`],
          style: e.tableStyle ?? {
            preset: `Grid Table 1 Light`,
            headerRow: !0,
            firstColumn: !0,
            bandedRows: !1,
          },
          cellMargins: { top: `3px`, right: `4px`, bottom: `3px`, left: `4px` },
        },
        t,
      ),
      ref: e.ref,
      rows: s,
    }
  );
}
function kp(e) {
  return [e.locator, e.uri].filter(Boolean).join(` | `);
}
function Ap(e, t, n) {
  return (Q(`paragraph`, e, Gd), jp(e, Mp(e.children, t, n), t));
}
function jp(e, t, n) {
  let r =
      t.length === 1 && t[0]?.kind === `math` && t[0].displayMode === `block`
        ? (n.equation ?? n.normal)
        : n.normal,
    i = _f(e.style, n) ?? r,
    a = typeof e.style == `string` ? (R(e.style) ?? void 0) : e.style,
    o = pf(e.styleProps, "<paragraph> `styleProps`"),
    s = gf(i?.textStyle, gf(a, o)),
    c =
      typeof e.style == `string` && !a
        ? (i?.styleId ?? e.style)
        : e.style === void 0
          ? i?.styleId
          : void 0,
    l =
      e.bulletCharacter !== void 0 ||
      e.paragraphStyle?.bulletCharacter !== void 0 ||
      e.paragraphStyle?.autoNumberType !== void 0,
    u = l && e.marginLeft === void 0 && e.indent === void 0 ? Om : void 0,
    d = l && e.marginLeft === void 0 && e.indent === void 0 ? km : void 0;
  return {
    kind: `paragraph`,
    props: {
      style: s,
      styleId: e.styleId ?? c,
      paragraphStyle: e.paragraphStyle,
      bulletCharacter: e.bulletCharacter,
      marginLeft: Uu(e.marginLeft ?? u, `<paragraph> marginLeft`),
      indent: Uu(e.indent ?? d, `<paragraph> indent`),
      spaceBefore: Gu(e.spaceBefore ?? i?.spaceBefore, `<paragraph> spaceBefore`),
      spaceAfter: Gu(e.spaceAfter ?? i?.spaceAfter, `<paragraph> spaceAfter`),
    },
    children: t,
  };
}
function Mp(e, t, n) {
  let r = [];
  for (let i of vd(e)) {
    if (typeof i == `string` || typeof i == `number`) {
      r.push({ kind: `run`, text: String(i) });
      continue;
    }
    if (Z(i, `run`)) {
      r.push(Fp(i.props, t));
      continue;
    }
    if (Z(i, `b`) || Z(i, `bold`)) {
      let e = Z(i, `b`) ? `b` : `bold`;
      r.push(Ip(i.props, t, e));
      continue;
    }
    if (Z(i, `pre`)) {
      r.push(Lp(i.props, t));
      continue;
    }
    if (Z(i, `page-number`)) {
      r.push(Np(i.props));
      continue;
    }
    if (Z(i, `citation`)) {
      r.push(Pp(i.props, t, n));
      continue;
    }
    if (Z(i, `math`)) {
      r.push(Kp(i.props, `inline`, t));
      continue;
    }
    throw Error(
      `<paragraph> only accepts raw text, <run>, <b>, <bold>, <pre>, <page-number>, <citation>, and <math> children.`,
    );
  }
  let i = r.filter((e) => e.kind === `math` && e.displayMode === `block`).length;
  if (i > 0 && (r.length !== 1 || i !== 1))
    throw Error(`<paragraph> block math must be the only authored child in the paragraph.`);
  return r;
}
function Np(e) {
  return (Q(`page-number`, e, Jd), Tm(`page-number`, e.children), { kind: `run`, text: ei });
}
function Pp(e, t, n) {
  (Q(`citation`, e, Yd), Tm(`citation`, e.children));
  let r = n.cite(e.id);
  return {
    kind: `run`,
    text: zf(r.number),
    textStyle: mf(e.textStyle, t, "<citation> `textStyle`"),
    citations: [r.id],
  };
}
function Fp(e, t, n = `run`) {
  Q(n, e, Kd);
  let r = `<${n}>`,
    i = gd(e.children, r),
    a = e.run;
  if (a !== void 0 && typeof a != `string`)
    throw Error(`${r} \`run\` must be a string when provided.`);
  if (a !== void 0 && i !== void 0)
    throw Error(`${r} accepts text either as children or as the \`run\` prop, not both.`);
  let o = i ?? a;
  if (o === void 0) throw Error(`${r} requires text as children or a string \`run\` prop.`);
  if (e.link && e.href) throw Error(`${r} accepts either \`href\` or \`link\`, not both.`);
  return {
    kind: `run`,
    text: o,
    textStyle: mf(e.textStyle, t, `${r} \`textStyle\``),
    hyperlink: e.link
      ? { ...e.link }
      : e.href
        ? { uri: e.href, isExternal: !0, action: `` }
        : void 0,
  };
}
function Ip(e, t, n) {
  let r = Fp(e, t, n);
  return { ...r, textStyle: gf(r.textStyle, { bold: !0 }) };
}
function Lp(e, t) {
  Q(`pre`, e, qd);
  let n = gd(e.children, `<pre>`),
    r = e.run;
  if (r !== void 0 && typeof r != `string`)
    throw Error("<pre> `run` must be a string when provided.");
  if (r !== void 0 && n !== void 0)
    throw Error("<pre> accepts text either as children or as the `run` prop, not both.");
  let i = n ?? r;
  if (i === void 0) throw Error("<pre> requires text as children or a string `run` prop.");
  let a = t.pre,
    o = typeof e.textStyle == `string` ? _f(e.textStyle, t) : void 0,
    s = gf(a?.textStyle, mf(e.textStyle, t, "<pre> `textStyle`"));
  return { kind: `run`, text: i, styleId: o?.styleId ?? a?.styleId, textStyle: s };
}
function Rp(e, t, n) {
  Q(`table`, e, $d);
  let r = e.children ? Bp(e.children, t, n) : void 0;
  if (r && (e.rows !== void 0 || e.columns !== void 0 || e.values !== void 0))
    throw Error(
      "<table> accepts either `rows`/`columns`/`values` props or <row>/<cell> children, not both.",
    );
  if (!r) return (Tm(`table`, e.children), { kind: `table`, props: zp(e, t), ref: e.ref });
  let i = {
    rows: Math.max(1, r.length),
    columns: Math.max(
      1,
      r.reduce((e, t) => Math.max(e, t.cells.length), 0),
    ),
    values: r.map((e) => e.cells.map((e) => e.value)),
  };
  return (
    e.columnWidths !== void 0 && (i.columnWidths = e.columnWidths),
    e.style !== void 0 && (i.style = e.style),
    e.position !== void 0 && (i.position = e.position),
    e.width !== void 0 && (i.width = e.width),
    e.borders !== void 0 && (i.borders = e.borders),
    e.cellTextStyle !== void 0 && (i.cellTextStyle = e.cellTextStyle),
    e.columnTextStyles !== void 0 && (i.columnTextStyles = e.columnTextStyles),
    e.cellMargins !== void 0 && (i.cellMargins = e.cellMargins),
    e.cellBorders !== void 0 && (i.cellBorders = e.cellBorders),
    e.keepTogether !== void 0 && (i.keepTogether = e.keepTogether),
    { kind: `table`, props: zp(i, t), ref: e.ref, rows: r }
  );
}
function zp(e, t) {
  let n = Bd(e, [
      `ref`,
      `children`,
      `rows`,
      `columns`,
      `columnWidths`,
      `position`,
      `width`,
      `borders`,
      `cellMargins`,
      `cellBorders`,
      `cellTextStyle`,
      `columnTextStyles`,
    ]),
    r = e.rows,
    i = e.columns;
  if (
    (e.values !== void 0 &&
      (r === void 0 && (r = e.values.length),
      i === void 0 && (i = e.values.reduce((e, t) => Math.max(e, t.length), 0))),
    r === void 0 || i === void 0)
  )
    throw Error(
      "<table> requires <row>/<cell> children, `values`, or both `rows` and `columns` props.",
    );
  let a = mf(e.cellTextStyle, t, "<table> `cellTextStyle`"),
    o = hf(e.columnTextStyles, t, "<table> `columnTextStyles`"),
    s = { ...n, rows: r, columns: i };
  return (
    (s.columnWidths = Qu(e.columnWidths, `<table> columnWidths`)),
    (s.position = Ju(e.position, `<table> position`)),
    (s.width = e.width === `content` ? e.width : X(e.width, `<table> width`)),
    (s.borders = td(e.borders, `<table> borders`)),
    (s.cellMargins = Zu(e.cellMargins, `<table> cellMargins`)),
    (s.cellBorders = ed(e.cellBorders, `<table> cellBorders`)),
    a !== void 0 && (s.cellTextStyle = a),
    o !== void 0 && (s.columnTextStyles = o),
    s
  );
}
function Bp(e, t, n) {
  let r = vd(e);
  if (r.length === 0) throw Error(`<table> row syntax requires at least one <row> child.`);
  let i = [];
  for (let e of r) {
    if (!Z(e, `row`)) throw Error(`<table> only accepts <row> children.`);
    i.push(Vp(e.props, t, n));
  }
  return i;
}
function Vp(e, t, n) {
  Q(`row`, e, nf);
  let r = vd(e.children);
  if (r.length === 0) return { props: Hp(e, t), cells: [] };
  if (r.every((e) => typeof e == `string` || typeof e == `number`))
    return { props: Hp(e, t), cells: r.map((e) => ({ value: String(e), props: {} })) };
  let i = [];
  for (let e of r) {
    if (!Z(e, `cell`)) throw Error(`<row> only accepts <cell> children.`);
    i.push(Up(e.props, t, n));
  }
  return { props: Hp(e, t), cells: i };
}
function Hp(e, t) {
  let n = Bd(e, [`children`, `textStyle`, `borders`, `margins`]),
    r = mf(e.textStyle, t, "<row> `textStyle`");
  return (
    r !== void 0 && (n.textStyle = r),
    (n.borders = ed(e.borders, `<row> borders`)),
    (n.margins = Zu(e.margins, `<row> margins`)),
    n
  );
}
function Up(e, t, n) {
  if ((Q(`cell`, e, rf), e.colSpan !== void 0 && (!Number.isInteger(e.colSpan) || e.colSpan < 1)))
    throw Error("<cell> `colSpan` must be a positive integer.");
  let r = e.children,
    i = Wp(vd(r));
  return i.length === 0
    ? { value: ``, props: Gp(e, t) }
    : i.every(
          (e) =>
            typeof e == `string` ||
            typeof e == `number` ||
            Z(e, `run`) ||
            Z(e, `b`) ||
            Z(e, `bold`) ||
            Z(e, `pre`) ||
            Z(e, `page-number`) ||
            Z(e, `citation`) ||
            Z(e, `math`) ||
            Z(e, `paragraph`),
        )
      ? { value: ``, props: Gp(e, t), paragraphs: qp(i, `<cell>`, t, n) }
      : { value: ``, props: Gp(e, t), nodes: rp(i, `<cell>`, t, n).nodes };
}
function Wp(e) {
  let t = !1,
    n = [];
  for (let r of e) {
    if (Z(r, `spacer`)) {
      t = !0;
      continue;
    }
    n.push(r);
  }
  return (
    t &&
      console.warn(
        `<cell> ignores <spacer> children because DOCX table cells export spacing through row height, margins, or paragraph spacing.`,
      ),
    n
  );
}
function Gp(e, t) {
  let n = Bd(e, [`children`, `textStyle`, `borders`, `margins`]);
  ((n.borders = ed(e.borders, `<cell> borders`)), (n.margins = Zu(e.margins, `<cell> margins`)));
  let r = mf(e.textStyle, t, "<cell> `textStyle`");
  return r === void 0 ? n : { ...n, textStyle: r };
}
function Kp(e, t, n) {
  Q(`math`, e, Xd);
  let r = gd(e.children, `<math>`);
  if (
    [
      e.latex !== void 0,
      e.mathml !== void 0,
      e.math !== void 0,
      e.node !== void 0,
      r !== void 0,
    ].filter(Boolean).length !== 1
  )
    throw Error(
      "<math> requires exactly one source: children, `latex`, `mathml`, `math`, or `node`.",
    );
  let i = e.displayMode ?? t,
    a;
  if (
    (e.math === void 0
      ? (a =
          e.node === void 0
            ? e.mathml === void 0
              ? L(ye({ latex: e.latex ?? r ?? ``, displayMode: i }))
              : L(oe({ mathml: e.mathml, displayMode: i }))
            : Ie({ root: e.node, displayMode: i, paragraphProperties: e.paragraphProperties }))
      : ((a = st(e.math)),
        (e.displayMode !== void 0 || a.displayMode === void 0) && (a.displayMode = et(i)),
        e.paragraphProperties !== void 0 &&
          (a.paragraphProperties = structuredClone(e.paragraphProperties))),
    !a?.root)
  )
    throw Error(`<math> requires content that produces a math root.`);
  let o = a.displayMode === D.MATH_DISPLAY_MODE_BLOCK ? `block` : `inline`;
  return {
    kind: `math`,
    math: a,
    displayText: gt(a),
    displayMode: o,
    textStyle: mf(e.textStyle, n, "<math> `textStyle`"),
  };
}
function qp(e, t, n, r) {
  let i = vd(e);
  if (i.length === 0) return [];
  if (!i.some((e) => Z(e, `paragraph`)))
    return [{ kind: `paragraph`, props: { styleId: n.normal?.styleId }, children: Mp(i, n, r) }];
  let a = [];
  for (let e of i) {
    if (!Z(e, `paragraph`))
      throw Error(
        `${t} accepts either raw text/<run>/<b>/<bold>/<pre> children or <paragraph> children, not both.`,
      );
    a.push(Ap(e.props, n, r));
  }
  return a;
}
function Jp() {
  let e = gr(),
    t = e.sections[0];
  return Ru.load({
    ...e,
    elements: [],
    sections: t
      ? [
          {
            ...t,
            elements: [],
            header: void 0,
            footer: void 0,
            firstHeader: void 0,
            firstFooter: void 0,
          },
        ]
      : [],
  });
}
function Yp(e, t) {
  (t.breakType !== void 0 && (e.breakType = t.breakType),
    t.pageSetup !== void 0 && (e.pageSetup = t.pageSetup),
    t.columns !== void 0 && (e.columns = t.columns),
    t.differentFirstPage !== void 0 && (e.differentFirstPage = t.differentFirstPage),
    t.startsWithPageBreak !== void 0 && (e.startsWithPageBreak = t.startsWithPageBreak),
    t.pageNumberStart !== void 0 && (e.pageNumberStart = t.pageNumberStart),
    t.pageNumberFormat !== void 0 && (e.pageNumberFormat = t.pageNumberFormat));
}
function Xp(e, t, n, r) {
  let i = e.createChildBody();
  return (
    Qp(
      i,
      { nodes: t.children, hasParagraphContent: t.children.some((e) => e.kind === `paragraph`) },
      0,
      `body`,
      [],
      n,
      r,
    ),
    e.addGroup({ ...t.props, children: Zp(i.toProto()) })
  );
}
function Zp(e) {
  return e.filter((e) =>
    e.type === T.ELEMENT_TYPE_TEXT || e.type === T.ELEMENT_TYPE_TEXT_GROUP
      ? (e.paragraphs ?? []).some(
          (e) =>
            (e.runs ?? []).some((e) => (e.text ?? ``).length > 0) ||
            (e.inlineNodes?.length ?? 0) > 0,
        )
      : !0,
  );
}
function Qp(e, t, n, r, i, a, o) {
  let s;
  for (let c of t.nodes) {
    if (c.kind === `paragraph`) {
      let t = Sm(c);
      (t && (s = void 0), (s ||= e.startParagraphBlock(t)), wm(s.add(), c, o), t && (s = void 0));
      continue;
    }
    if (((s = void 0), c.kind === `image`)) {
      let t = e.images.add(c.props);
      c.ref && i.push({ kind: `image`, ref: c.ref, sectionIndex: n, slot: r, id: t.id });
      continue;
    }
    if (c.kind === `chart`) {
      let t = e.charts.add(c.props);
      c.ref && i.push({ kind: `chart`, ref: c.ref, sectionIndex: n, slot: r, id: t.id });
      continue;
    }
    if (c.kind === `table`) {
      let t = e.tables.add($p(c.props, a));
      (am(t, c.props),
        vm(e, t, c.rows, a, c.props, o),
        im(t, c.props.borders),
        c.ref && i.push({ kind: `table`, ref: c.ref, sectionIndex: n, slot: r, id: t.id }));
      continue;
    }
    if (c.kind === `rule`) {
      let t = dm(e, c, a);
      c.ref && i.push({ kind: `table`, ref: c.ref, sectionIndex: n, slot: r, id: t.id });
      continue;
    }
    if (c.kind === `spacer`) {
      let t = fm(e, c, a);
      c.ref && i.push({ kind: `table`, ref: c.ref, sectionIndex: n, slot: r, id: t.id });
      continue;
    }
    if (c.kind === `mermaid`)
      throw Error(`<mermaid> requires createDocumentAsync() or materializeDocumentJsxAsync().`);
    if (c.kind === `code`) {
      let t = pm(e, c, a);
      c.ref && i.push({ kind: `tableOrShape`, ref: c.ref, sectionIndex: n, slot: r, id: t.id });
      continue;
    }
    if (c.kind === `group`) {
      let t = Xp(e, c, a, o);
      c.ref && i.push({ kind: `group`, ref: c.ref, sectionIndex: n, slot: r, id: t.id });
      continue;
    }
    let t = e.shapes.add(c.props);
    if (c.childParagraphs) {
      t.text.paragraphs.clear();
      for (let e of c.childParagraphs) wm(t.text.paragraphs.add(), e, o);
    }
    c.ref && i.push({ kind: `shape`, ref: c.ref, sectionIndex: n, slot: r, id: t.id });
  }
}
function $p(e, t) {
  let n = { rows: e.rows, columns: e.columns };
  (e.values !== void 0 && (n.values = e.values),
    e.style !== void 0 && (n.style = e.style),
    e.position !== void 0 && (n.position = e.position),
    e.keepTogether !== void 0 && (n.keepTogether = e.keepTogether));
  let r = t.contentWidth,
    i = tm(e.columnWidths),
    a = em(e.width, i, r),
    o = a === void 0 || a === `content` ? r : a;
  if (o === void 0) throw Error(`<table> width="content" requires section page setup.`);
  let s = n.position?.width ?? o;
  return (
    e.columnWidths !== void 0 && (n.columnWidths = nm(e.columnWidths, s)),
    { ...n, position: { ...n.position, width: s } }
  );
}
function em(e, t, n) {
  return e !== void 0 && e !== `content`
    ? e
    : t === void 0
      ? (e ?? `content`)
      : n === void 0
        ? t
        : Math.min(t, n);
}
function tm(e) {
  if (!(e === void 0 || e.length === 0)) return e.reduce((e, t) => e + t, 0);
}
function nm(e, t) {
  let n = tm(e);
  if (n === void 0 || n <= t) return e;
  let r = t / n;
  return e.map((e) => e * r);
}
function rm(e, t, n) {
  return e === `content` ? jd(t, n) : e;
}
function im(e, t) {
  if (!t || e.rowCount === 0 || e.columnCount === 0) return;
  let n = xm(t);
  e.cells.block({ row: 0, column: 0, rowCount: e.rowCount, columnCount: e.columnCount }).borders =
    n;
}
function am(e, t) {
  if (!(e.rowCount === 0 || e.columnCount === 0)) {
    t.cellMargins !== void 0 && (e.cellMargins = t.cellMargins);
    for (let n = 0; n < e.rowCount; n += 1)
      for (let r = 0; r < e.columnCount; r += 1) {
        let i = e.getCell(n, r);
        t.cellTextStyle !== void 0 && om(i, t.cellTextStyle);
        let a = t.columnTextStyles?.[r];
        (a !== void 0 && om(i, a),
          t.cellBorders !== void 0 && (i.borders = bm(t.cellBorders)),
          sm(i));
      }
  }
}
function om(e, t) {
  nt(e.textStyle, t);
  for (let n of e.paragraphs.items) {
    let e = n.textStyle ?? new B();
    (nt(e, t), (n.textStyle = e));
  }
}
function sm(e) {
  let t = e.paragraphs.items,
    n = t[0];
  n && (n.spaceBefore = 0);
  let r = t[t.length - 1];
  r && (r.spaceAfter = 0);
}
function cm(e, t) {
  (t.fill !== void 0 && (e.fill = t.fill),
    t.borders !== void 0 && (e.borders = bm(t.borders)),
    t.margins !== void 0 && (e.margins = t.margins),
    t.anchor !== void 0 && (e.anchor = t.anchor),
    t.anchorCenter !== void 0 && (e.anchorCenter = t.anchorCenter),
    t.horizontalOverflow !== void 0 && (e.horizontalOverflow = t.horizontalOverflow),
    t.textDirection !== void 0 && (e.textDirection = t.textDirection));
}
function lm(e, t) {
  (t.fill !== void 0 && (e.fill = t.fill),
    t.borders !== void 0 && (e.borders = bm(t.borders)),
    t.colSpan !== void 0 && (e.gridSpan = t.colSpan),
    t.margins !== void 0 && (e.margins = t.margins),
    t.anchor !== void 0 && (e.anchor = t.anchor),
    t.anchorCenter !== void 0 && (e.anchorCenter = t.anchorCenter),
    t.horizontalOverflow !== void 0 && (e.horizontalOverflow = t.horizontalOverflow),
    t.textDirection !== void 0 && (e.textDirection = t.textDirection));
}
function um(e, t, n, r, i) {
  t.cellTextStyle !== void 0 && om(e, t.cellTextStyle);
  let a = t.columnTextStyles?.[i];
  (a !== void 0 && om(e, a),
    n.textStyle !== void 0 && om(e, n.textStyle),
    r.textStyle !== void 0 && om(e, r.textStyle));
}
function dm(e, t, n) {
  let r = t.props.width ?? `content`,
    i = r === `content` ? n.contentWidth : r;
  if (i === void 0) throw Error(`<rule> width="content" requires section page setup.`);
  let a = e.tables.add({
    rows: 1,
    columns: 1,
    values: [[``]],
    position: {
      ...t.props.position,
      width: t.props.position?.width ?? i,
      height: t.props.position?.height ?? t.props.height ?? 1,
    },
  });
  a.name = `document.rule`;
  let o = a.getCell(0, 0);
  return (
    (o.margins = { left: 0, right: 0, top: 0, bottom: 0 }),
    (o.borders = ym()),
    (a.cells.block({ row: 0, column: 0, rowCount: 1, columnCount: 1 }).borders = {
      top: { color: t.props.color ?? `#0F1720`, width: t.props.lineWidth ?? 1, style: `solid` },
    }),
    a
  );
}
function fm(e, t, n) {
  let r = t.props.width ?? 1,
    i = r === `content` ? n.contentWidth : r;
  if (i === void 0) throw Error(`<spacer> width="content" requires section page setup.`);
  let a = e.tables.add({
    rows: 1,
    columns: 1,
    values: [[``]],
    position: { width: i, height: t.props.height },
  });
  a.name = `document.spacer`;
  let o = a.getCell(0, 0);
  return ((o.margins = { left: 0, right: 0, top: 0, bottom: 0 }), (o.borders = bm(`none`)), a);
}
function pm(e, t, n) {
  return t.props.surface === `shape` ? _m(e, t, n) : gm(e, t, n);
}
function mm(e) {
  if (e === void 0) return;
  let t = {};
  return (
    e.bold !== void 0 && (t.bold = e.bold),
    e.italic !== void 0 && (t.italic = e.italic),
    e.underline !== void 0 && (t.underline = e.underline),
    e.fontSize !== void 0 &&
      (t.fontSize = typeof e.fontSize == `number` ? `${e.fontSize}px` : e.fontSize),
    e.typeface !== void 0 && (t.typeface = e.typeface),
    e.color !== void 0 &&
      (t.color =
        typeof e.color == `string`
          ? e.color
          : e.color.type === `proto`
            ? void 0
            : { type: `solid`, color: e.color }),
    Object.keys(t).length === 0 ? void 0 : t
  );
}
function hm(e, t, n) {
  if (n === `none`) return t;
  if (n === `monochrome`) {
    let { color: n, ...r } = e ?? {};
    return t.color === void 0 ? { ...r, ...t } : { ...r, ...t, color: t.color };
  }
  return { ...(e ?? {}), ...t, color: e?.color ?? t.color };
}
function gm(e, t, n) {
  let r = ct({ code: t.props.code ?? ``, language: t.props.language, fileName: t.props.fileName }),
    i = mm(t.props.textStyle) ?? { fontSize: `12.5px`, typeface: `Noto Mono` },
    a = r.paragraphs.map((e) => ({
      ...e,
      runs: e.runs?.map((e) => {
        if (typeof e == `string` || typeof e == `number`) return { run: String(e), textStyle: i };
        if (`run` in e) {
          let n = e.textStyle ?? {};
          return { ...e, textStyle: hm(n, i, t.props.syntaxHighlighting) };
        }
        return e;
      }),
      spaceAfter: e.spaceAfter ?? 0,
    })),
    o = t.props.showHeader ?? r.label !== void 0,
    s = mm(t.props.headerTextStyle) ?? {
      bold: !1,
      color: `#3F3F3F`,
      fontSize: `13.33px`,
      typeface: `Noto Sans`,
    },
    c = {
      runs: [{ run: r.label ?? `code`, textStyle: s }],
      paragraphStyle: { tabStops: [] },
      spaceAfter: 0,
    },
    l =
      rm(t.props.position?.width ?? t.props.size?.width, n, `<code> width`) ??
      jd(n, `<code> default width`),
    u = o ? [[[c]], [a]] : [[a]],
    d = t.props.tableStyle;
  d !== void 0 &&
    (typeof d == `string`
      ? (d = { preset: d, headerRow: o })
      : o && d.headerRow === void 0 && (d = { ...d, headerRow: !0 }));
  let f = e.tables.add({
    rows: u.length,
    columns: 1,
    values: u,
    columnWidths: [l],
    style: d,
    position: {
      left: t.props.position?.left,
      top: t.props.position?.top,
      width: l,
      height: t.props.position?.height ?? t.props.size?.height,
    },
  });
  f.name = `code.block`;
  for (let e = 0; e < u.length; e += 1) f.getCell(e, 0).anchor = `top`;
  if (t.props.tableStyle === void 0) {
    for (let e = 0; e < u.length; e += 1) {
      let t = f.getCell(e, 0);
      ((t.fill = `#F9F9F9`),
        (t.borders = {
          top: { color: `#E5E5E5`, width: 0.7, style: `solid` },
          right: { color: `#E5E5E5`, width: 0.7, style: `solid` },
          bottom: { color: `#E5E5E5`, width: 0.7, style: `solid` },
          left: { color: `#E5E5E5`, width: 0.7, style: `solid` },
        }),
        (t.margins = {
          left: 12,
          right: 12,
          top: e === 0 && o ? 6 : 8,
          bottom: e === 0 && o ? 4 : 8,
        }));
    }
    let e = f.getCell(+!!o, 0);
    if (
      ((e.textStyle.typeface = `Noto Mono`),
      (e.textStyle.fontSize = 12.5),
      (e.textStyle.color = `#1F2937`),
      o)
    ) {
      let e = f.getCell(0, 0);
      ((e.textStyle.typeface = `Noto Sans`),
        (e.textStyle.fontSize = 13.33),
        (e.textStyle.color = `#3F3F3F`),
        (e.borders = {
          top: { color: `#B8CBC7`, width: 0.7, style: `solid` },
          right: { color: `#B8CBC7`, width: 0.7, style: `solid` },
          bottom: { color: `#B8CBC7`, width: 0.7, style: `solid` },
          left: { color: `#B8CBC7`, width: 0.7, style: `solid` },
        }));
    }
  }
  return f;
}
function _m(e, t, n) {
  let r = ct({ code: t.props.code ?? ``, language: t.props.language, fileName: t.props.fileName }),
    i = t.props.showHeader ?? r.label !== void 0,
    a = mm(t.props.textStyle),
    o = r.paragraphs.map((e) => ({
      ...e,
      runs: e.runs?.map((e) => {
        if (a === void 0 || typeof e == `string` || typeof e == `number`) return e;
        if (`run` in e) {
          let n = e.textStyle ?? {};
          return { ...e, textStyle: hm(n, a, t.props.syntaxHighlighting) };
        }
        return e;
      }),
    })),
    s = mm(t.props.headerTextStyle) ?? {
      bold: !0,
      color: `#173E3A`,
      fontSize: `11px`,
      typeface: `Aptos`,
    },
    c = [
      ...(i
        ? [
            {
              runs: [{ run: r.label ?? `code`, textStyle: s }],
              paragraphStyle: { tabStops: [] },
              spaceAfter: 4,
            },
          ]
        : []),
      ...o,
    ],
    l = Math.max(
      1,
      r.code.split(`
`).length,
    ),
    u = rm(t.props.position?.width ?? t.props.size?.width, n, `<code> width`),
    d = t.props.position?.height ?? t.props.size?.height,
    f = u ?? jd(n, `<code> default width`),
    p = (i ? 34 : 14) + l * 18 + 28,
    m = (t.props.fit, d ?? p),
    h = e.shapes.add({
      geometry: `roundRect`,
      position: { left: t.props.position?.left, top: t.props.position?.top, width: f, height: m },
      style: t.props.style ?? { wrap: `inline`, alignment: `center` },
      fill: `#F7FAF9`,
      line: { style: `solid`, fill: `#B8CBC7`, width: 1 },
      text: c,
    });
  return (
    (h.name = `code.block`),
    (h.text.typeface = `Atkinson Hyperlegible Mono`),
    (h.text.fontSize = 11),
    (h.text.color = `#1F2937`),
    (h.text.lineSpacing = 1.18),
    (h.text.wrap = `none`),
    (h.text.verticalAlignment = `top`),
    (h.text.insets = { left: 12, right: 12, top: 8, bottom: 10 }),
    h
  );
}
function vm(e, t, n, r, i, a) {
  n &&
    n.forEach((n, o) => {
      n.cells.forEach((s, c) => {
        let l = t.getCell(o, c);
        if ((cm(l, n.props), lm(l, s.props), s.paragraphs)) {
          (l.paragraphs.clear(), (l.elements = []));
          for (let e of s.paragraphs) wm(l.paragraphs.add(), e, a);
        }
        if (s.nodes) {
          let t = e.createChildBody();
          (Qp(
            t,
            { nodes: s.nodes, hasParagraphContent: s.nodes.some((e) => e.kind === `paragraph`) },
            0,
            `body`,
            [],
            r,
            a,
          ),
            l.paragraphs.clear(),
            (l.elements = t.toProto()));
        }
        (um(l, i, n.props, s.props, c), sm(l));
      });
    });
}
function ym() {
  let e = { color: `#FFFFFF`, width: 0.1, style: `solid` };
  return { top: e, right: e, bottom: e, left: e };
}
function bm(e) {
  return e === `none` ? ym() : e;
}
function xm(e) {
  if (e !== `none`) return e;
  let t = ym();
  return {
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    left: t.left,
    insideHorizontal: t.bottom,
    insideVertical: t.right,
  };
}
function Sm(e) {
  return (
    e.children.length === 1 &&
    e.children[0]?.kind === `math` &&
    e.children[0].displayMode === `block`
  );
}
function Cm(e, t) {
  if (e == null) return;
  if (Array.isArray(e)) {
    for (let n of e) Cm(n, t);
    return;
  }
  if (typeof e != `object`) return;
  let n = e;
  if (n.type === v.COLOR_TYPE_SCHEME && typeof n.value == `string` && n.lastColor === void 0) {
    let e = t[n.value] ?? fr[n.value];
    e !== void 0 && (n.lastColor = e.replace(/^#/, ``));
  }
  for (let e of Object.values(n)) Cm(e, t);
}
function wm(e, t, n) {
  ((e.id ||= n.nextParagraphId()), e.runs.clear());
  let r = [],
    i = !1,
    a =
      t.children.length === 1 &&
      t.children[0]?.kind === `math` &&
      t.children[0].displayMode === `block`
        ? t.children[0]
        : void 0,
    o = gf(t.props.style, a?.textStyle),
    s = ff(o);
  s && (e.textStyle = s);
  for (let n of t.children) {
    if (n.kind === `math`) {
      let t = e.addRun(n.displayText),
        a = ff(gf(gf(o, n.textStyle), { typeface: fe }));
      (a && (t.textStyle = a), r.push({ math: n.math }), (i ||= n.displayMode === `block`));
      continue;
    }
    let a = e.addRun(n.text);
    n.styleId !== void 0 && (a.styleId = n.styleId);
    let s = ff(gf(t.props.style, n.textStyle));
    (s && (a.textStyle = s),
      n.hyperlink && (a.hyperlink = n.hyperlink),
      n.citations !== void 0 && (a.citations = n.citations),
      r.push({ textRun: hd(a.toProto()) }));
  }
  if (
    ((e.inlineNodes = r),
    t.props.bulletCharacter !== void 0 && (e.bulletCharacter = t.props.bulletCharacter),
    t.props.marginLeft !== void 0 && (e.marginLeft = t.props.marginLeft),
    t.props.indent !== void 0 && (e.indent = t.props.indent),
    t.props.spaceBefore !== void 0 && (e.spaceBefore = t.props.spaceBefore),
    t.props.spaceAfter !== void 0 && (e.spaceAfter = t.props.spaceAfter),
    t.props.styleId !== void 0 && (e.styleId = t.props.styleId),
    t.props.paragraphStyle &&
      (e.paragraphStyle = {
        ...(e.paragraphStyle ?? {}),
        ...t.props.paragraphStyle,
        tabStops: t.props.paragraphStyle.tabStops ?? [],
      }),
    i)
  ) {
    let t = e.textStyle ?? new B();
    (t.alignment === void 0 && (t.alignment = `center`),
      t.typeface === void 0 && (t.typeface = fe),
      (e.textStyle = t));
  }
}
function Tm(e, t) {
  Ld(e, t, vd);
}
function Em() {
  return { nodes: [], hasParagraphContent: !1 };
}
var Dm,
  Om,
  km,
  Am,
  jm = e(() => {
    (on(),
      l(),
      o(),
      r(),
      f(),
      g(),
      m(),
      _r(),
      pr(),
      zu(),
      ue(),
      ge(),
      ze(),
      Oe(),
      me(),
      Ae(),
      md(),
      ht(),
      ni(),
      rr(),
      b(),
      xd(),
      kd(),
      rd(),
      Id(),
      df(),
      vf(),
      Ff(),
      (Dm = u().use(s).use(a)),
      (Om = `48px`),
      (km = `-24px`),
      (Am = {
        paragraph: `normal`,
        heading1: `heading1`,
        heading2: `heading2`,
        heading3: `heading2`,
        heading4: `heading2`,
        heading5: `heading2`,
        heading6: `heading2`,
        listItem: `normal`,
        orderedListItem: `normal`,
        blockquote: `abstract`,
        inlineCode: { typeface: `Courier New` },
        link: { color: `#0563C1`, underline: `single` },
        table: {
          width: `content`,
          style: { preset: `Grid Table 1 Light`, headerRow: !0, bandedRows: !1 },
        },
        codeBlock: { surface: `table`, size: { width: `content` } },
        mathBlock: { displayMode: `block` },
        mermaid: { size: { width: `content` } },
        thematicBreak: { width: `content`, height: `1px`, color: `#E5E7EB`, lineWidth: `1px` },
      }));
  }),
  Mm = e(() => {
    jm();
  }),
  Nm = e(() => {
    (ar(), rr(), Mm(), md(), Dl());
  }),
  Pm = e(() => {
    ar();
  });
function Fm() {
  return Bf(
    J(`document`, {
      name: `Golden Retrievers at Play`,
      namedStyles: Dh,
      children: [
        J(`section`, {
          pageSetup: Jm,
          pageNumberStart: 1,
          children: [
            q(Im, {}),
            q(Lm, {}),
            q(`paragraph`, { style: `reportTitle`, children: `Golden Retrievers at Play` }),
            q(`paragraph`, {
              style: `body`,
              children: `Across three months of autumn outings, volunteers welcomed four times as many Golden Retrievers at the weekly gatherings. The headcount rose from 1.25K on 2025-09-05 to 5.00K on 2025-12-04, while weekly retrieves climbed from 40.0K to 164.0K.`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `The dogs did not suddenly become fetch fanatics. Retrieves per dog edged from 32.0 to 32.8, so roughly 97% of the extra returns came from having more Goldens at each gathering.`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `Maple Park and Cedar Trail hosted the busiest games. They added 31.12K and 25.92K weekly retrieves, respectively, or 46% of the total increase recorded across the ten venues.`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `Walking distance rose from 1.36K to 7.84K miles. At the closing outing, Maple Park accounted for 2.18K miles, followed by Cedar Trail, Day Camp, Willow Pond, and Dog Run.`,
            }),
            q(`paragraph`, { style: `sectionHeading`, children: `The season at a glance` }),
            q(`paragraph`, {
              style: `tableSubtitle`,
              children: `Opening and closing outing totals`,
            }),
            q(Rm, {
              headers: [`Activity`, `Opening week`, `Closing week`, `Change`, `Percent change`],
              rows: Nh,
              columnWidths: [`188px`, `120px`, `120px`, `124px`, `132px`],
              greenColumns: [3, 4],
            }),
            q(`paragraph`, {
              style: `tableResultCount`,
              children: `Attendance, play, treats, and walking all increased`,
            }),
            q(`paragraph`, {
              style: `sectionHeading`,
              children: `Attendance across the ten venues grew fourfold`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `Weekly attendance grew by 3.75K Golden Retrievers from the opening outing to the closing one. Each dog returned an average of 32.8 balls at the finale versus 32.0 at the opener, a small change beside the much larger rise in attendance.`,
            }),
            q(zm, {
              leftTitle: `Golden Retrievers seen`,
              leftSubtitle: `Weekly headcount across fourteen outings`,
              left: q(`chart`, {
                chartType: `line`,
                size: { width: Xm, height: 205 },
                style: { wrap: `inline`, alignment: `center` },
                config: Km({
                  categories: Oh,
                  values: kh,
                  seriesName: `Golden Retrievers`,
                  color: `#3B82F6`,
                  yAxisMax: 5.6,
                  yAxisMajorUnit: 1.4,
                  numberFormatCode: `0.0"K"`,
                }),
              }),
              rightTitle: `Retrieves per Golden Retriever`,
              rightSubtitle: `Play stayed steady as the crowd grew`,
              right: q(`chart`, {
                chartType: `line`,
                size: { width: Xm, height: 205 },
                style: { wrap: `inline`, alignment: `center` },
                config: Km({
                  categories: Oh,
                  values: Ah,
                  seriesName: `Retrieves per dog`,
                  color: `#B45309`,
                  yAxisMax: 36,
                  yAxisMajorUnit: 9,
                  numberFormatCode: `0`,
                }),
              }),
            }),
            q(`paragraph`, { style: `sectionHeading`, children: `The ball basket emptied faster` }),
            q(`paragraph`, {
              style: `body`,
              children: `Weekly retrieves climbed from 40.0K at the opening outing to 164.0K at the closing one. The rise was gradual through autumn, then became more noticeable as the final gatherings welcomed larger crowds.`,
            }),
            q(Wm, {
              title: `Weekly retrieves`,
              subtitle: `Ball returns logged at each outing`,
              children: q(`chart`, {
                chartType: `line`,
                size: { width: Ym, height: 260 },
                style: { wrap: `inline`, alignment: `center` },
                config: Km({
                  categories: Oh,
                  values: jh,
                  seriesName: `Weekly retrieves`,
                  color: `#0F9D58`,
                  yAxisMax: 180,
                  yAxisMajorUnit: 45,
                  numberFormatCode: `0"K"`,
                }),
              }),
            }),
            q(`paragraph`, {
              style: `sectionHeading`,
              children: `Maple Park and Cedar Trail stayed busiest`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `Together, Maple Park and Cedar Trail added 57.04K weekly retrieves. Day Camp and Backyards came next, while every venue contributed at least a small share of the new play.`,
            }),
            q(Bm, {
              leftTitle: `Added retrieves by venue`,
              leftSubtitle: `Change from the opening to closing outing`,
              leftCategories: Fh,
              leftValues: Ih,
              leftMax: 35,
              rightTitle: `Retrieves at the closing outing`,
              rightSubtitle: `Weekly returns logged on 2025-12-04`,
              rightCategories: Lh,
              rightValues: Rh,
              rightMax: 45,
            }),
            q(`paragraph`, { style: `sectionHeading`, children: `What happened at each venue` }),
            q(`paragraph`, {
              style: `tableSubtitle`,
              children: `Venue totals at the closing outing`,
            }),
            q(Rm, {
              headers: [
                `Venue`,
                `Dogs present`,
                `New dogs`,
                `Weekly retrieves`,
                `Added retrieves`,
                `Share of added play`,
                `Miles walked`,
              ],
              rows: Ph,
              columnWidths: [`88px`, `92px`, `88px`, `94px`, `92px`, `128px`, `102px`],
              small: !0,
              greenColumns: [2, 4, 5],
            }),
            q(`paragraph`, {
              style: `tableResultCount`,
              children: `Ten venues hosted outings throughout the season`,
            }),
            q(`paragraph`, {
              style: `sectionHeading`,
              children: `Longer walks followed the larger gatherings`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `Volunteers logged 6.48K more walking miles at the closing outing than at the opener. Of the closing total, 2.18K miles came from Maple Park; Cedar Trail, Day Camp, Willow Pond, and Dog Run also offered plenty of ground to explore.`,
            }),
            q(Wm, {
              title: `Miles walked`,
              subtitle: `Weekly distance across the autumn season`,
              children: q(`chart`, {
                chartType: `line`,
                size: { width: Ym, height: 285 },
                style: { wrap: `inline`, alignment: `center` },
                config: Km({
                  categories: Oh,
                  values: Mh,
                  seriesName: `Miles walked`,
                  color: `#0F9D58`,
                  yAxisMax: 8.4,
                  yAxisMajorUnit: 2.1,
                  numberFormatCode: `0.0"K"`,
                }),
              }),
            }),
            q(`paragraph`, { style: `sectionHeading`, children: `Ideas for the next outing` }),
            q(Gm, {
              children: `Bring extra water bowls and ball baskets to Maple Park and Cedar Trail before the next large gathering.`,
            }),
            q(Gm, {
              children: `Keep separate swim-and-fetch notes at Willow Pond and Harbor Bay so water play is easier to compare with field games.`,
            }),
            q(Gm, {
              children: `Add weather, shade, and rest-break notes next time; those details may explain why some outings last longer than others.`,
            }),
          ],
        }),
        J(`section`, {
          startsWithPageBreak: !0,
          pageSetup: Jm,
          pageNumberStart: 4,
          children: [
            q(Im, {}),
            q(Lm, {}),
            q(`paragraph`, {
              style: `sectionHeading`,
              children: `A season built around good play`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `Each gathering opened with an easy welcome lap, giving the dogs time to greet one another before the tennis balls came out. Water stations and shaded rest areas stayed open throughout the day.`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `Maple Park offered the broadest lawns for long retrieves, while Cedar Trail drew dogs that preferred a brisk walk between games. Willow Pond and Harbor Bay were favorites on warmer afternoons.`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `New arrivals usually began in smaller play groups before joining the busier fields. Volunteers kept spare leads, towels, and tennis balls close by so every dog could settle in at its own pace.`,
            }),
            q(`paragraph`, {
              style: `body`,
              children: `By the closing outing, familiar pairs were meeting at the same gates each week. The season ended with longer walks, fuller ball baskets, and plenty of tired Golden Retrievers heading home.`,
            }),
          ],
        }),
      ],
    }),
  );
}
function Im() {
  return J(`header`, {
    children: [
      q(`table`, {
        width: `content`,
        columnWidths: [`430px`, `254px`],
        borders: `none`,
        cellBorders: `none`,
        cellTextStyle: `footer`,
        cellMargins: lh,
        style: { preset: `TableGrid` },
        children: J(`row`, {
          children: [
            q(`cell`, { children: `Golden Retrievers at Play` }),
            q(`cell`, { textStyle: { alignment: `right` }, children: `Autumn outings · 2025` }),
          ],
        }),
      }),
      q(`rule`, { width: `content`, color: `#E5E5E5`, lineWidth: `1px` }),
    ],
  });
}
function Lm() {
  return J(`footer`, {
    children: [
      q(`rule`, { width: `content`, color: `#E5E5E5`, lineWidth: `1px` }),
      q(`table`, {
        width: `content`,
        columnWidths: [`430px`, `254px`],
        borders: `none`,
        cellBorders: `none`,
        cellTextStyle: `footer`,
        cellMargins: lh,
        style: { preset: `TableGrid` },
        children: J(`row`, {
          children: [
            q(`cell`, { children: `Play, walks, and plenty of tennis balls` }),
            J(`cell`, {
              textStyle: { alignment: `right` },
              children: [`Page `, q(`page-number`, {})],
            }),
          ],
        }),
      }),
    ],
  });
}
function Rm({ headers: e, rows: t, columnWidths: n, small: r, greenColumns: i = [] }) {
  let a = r ? `tableSmall` : `tableBody`,
    o = r ? `tableSmallRight` : `tableBodyRight`,
    s = r ? `tableSmallPositiveRight` : `tablePositiveRight`;
  return J(`table`, {
    width: `content`,
    columnWidths: n,
    borders: oh,
    cellBorders: `none`,
    cellMargins: r ? ch : sh,
    cellTextStyle: a,
    children: [
      q(`row`, {
        children: e.map((e, t) =>
          q(`cell`, { textStyle: t === 0 ? `tableHeader` : `tableHeaderRight`, children: e }, e),
        ),
      }),
      t.map((e) =>
        q(
          `row`,
          {
            children: e.map((t, n) =>
              q(
                `cell`,
                { textStyle: n === 0 ? a : i.includes(n) ? s : o, children: t },
                `${e[0]}-${t}-${n}`,
              ),
            ),
          },
          e.join(`:`),
        ),
      ),
    ],
  });
}
function zm({ leftTitle: e, leftSubtitle: t, left: n, rightTitle: r, rightSubtitle: i, right: a }) {
  return q(`table`, {
    width: `content`,
    columnWidths: [`${Xm}px`, `${Zm}px`, `${Xm}px`],
    borders: `none`,
    cellBorders: `none`,
    cellMargins: uh,
    keepTogether: !0,
    style: { preset: `TableGrid` },
    children: J(`row`, {
      children: [
        J(`cell`, {
          margins: dh,
          children: [
            q(`paragraph`, { style: `chartTitle`, children: e }),
            q(`paragraph`, { style: `chartSubtitle`, children: t }),
            n,
          ],
        }),
        q(`cell`, {}),
        J(`cell`, {
          margins: dh,
          children: [
            q(`paragraph`, { style: `chartTitle`, children: r }),
            q(`paragraph`, { style: `chartSubtitle`, children: i }),
            a,
          ],
        }),
      ],
    }),
  });
}
function Bm({
  leftTitle: e,
  leftSubtitle: t,
  leftCategories: n,
  leftValues: r,
  leftMax: i,
  rightTitle: a,
  rightSubtitle: o,
  rightCategories: s,
  rightValues: c,
  rightMax: l,
}) {
  return q(`table`, {
    width: `content`,
    columnWidths: [`${Xm}px`, `${Zm}px`, `${Xm}px`],
    borders: `none`,
    cellBorders: `none`,
    cellMargins: fh,
    keepTogether: !0,
    style: { preset: `TableGrid` },
    children: J(`row`, {
      children: [
        q(`cell`, {
          children: q(Vm, {
            name: `added-retrieves-by-venue-bars`,
            title: e,
            subtitle: t,
            categories: n,
            values: r,
            max: i,
          }),
        }),
        q(`cell`, {}),
        q(`cell`, {
          children: q(Vm, {
            name: `closing-retrieves-by-venue-bars`,
            title: a,
            subtitle: o,
            categories: s,
            values: c,
            max: l,
          }),
        }),
      ],
    }),
  });
}
function Vm({ name: e, title: t, subtitle: n, categories: r, values: i, max: a }) {
  return J(`group`, {
    name: e,
    size: { width: Xm, height: yh },
    style: { wrap: `inline`, alignment: `center` },
    children: [
      q(Um, { text: t, style: `barPanelTitle`, x: 0, y: 0, width: Xm, height: ph }),
      q(Um, { text: n, style: `barPanelSubtitle`, x: 0, y: mh, width: Xm, height: hh }),
      r.map((t, n) => {
        let r = i[n] ?? 0,
          o = gh + n * vh,
          s = Math.max(_h, Math.min(bh, (r / a) * bh));
        return q(Hm, { category: t, value: qm(r), y: o, barWidth: s }, `${e}-${t}`);
      }),
    ],
  });
}
function Hm({ category: e, value: t, y: n, barWidth: r }) {
  return J(nr, {
    children: [
      q(`shape`, {
        geometry: `roundRect`,
        position: { left: 0, top: n, width: r, height: _h },
        fill: Eh,
        line: ih,
      }),
      q(Um, { text: e, style: `barPanelLabel`, x: Sh, y: n + xh, width: Ch, height: _h }),
      q(Um, { text: t, style: `barPanelValue`, x: wh, y: n + xh, width: Th, height: _h }),
    ],
  });
}
function Um({ text: e, style: t, x: n, y: r, width: i, height: a }) {
  return q(`shape`, {
    geometry: `rect`,
    position: { left: n, top: r, width: i, height: a },
    fill: th,
    line: ih,
    children: q(`paragraph`, { style: t, children: e }),
  });
}
function Wm({ title: e, subtitle: t, children: n }) {
  return q(`table`, {
    width: `content`,
    columnWidths: [`${Ym}px`],
    borders: `none`,
    cellBorders: `none`,
    cellMargins: dh,
    keepTogether: !0,
    style: { preset: `TableGrid` },
    children: q(`row`, {
      children: J(`cell`, {
        children: [
          q(`paragraph`, { style: `chartTitle`, children: e }),
          q(`paragraph`, { style: `chartSubtitle`, children: t }),
          n,
        ],
      }),
    }),
  });
}
function Gm({ children: e }) {
  return q(`paragraph`, {
    style: `bullet`,
    bulletCharacter: `•`,
    marginLeft: `18px`,
    indent: `10px`,
    children: e,
  });
}
function Km({
  categories: e,
  values: t,
  seriesName: n,
  color: r,
  yAxisMax: i,
  yAxisMajorUnit: a,
  numberFormatCode: o,
}) {
  return {
    categories: e,
    series: [
      {
        name: n,
        values: t,
        line: { style: `solid`, width: 1.25, fill: r },
        marker: { symbol: `none`, size: 0 },
      },
    ],
    chartFill: `#FFFFFF`,
    plotAreaFill: `#FFFFFF`,
    hasLegend: !1,
    xAxis: {
      tickLabelInterval: e.length - 1,
      tickMarkInterval: e.length - 1,
      line: eh,
      majorGridlines: null,
      textStyle: $m,
    },
    yAxis: {
      min: 0,
      max: i,
      majorUnit: a,
      numberFormatCode: o,
      line: nh,
      majorGridlines: rh,
      textStyle: Qm,
    },
    lineOptions: { smooth: !0 },
  };
}
function qm(e) {
  return `${e.toFixed(1)}K`;
}
var Jm,
  Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  _h,
  vh,
  yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh = e(() => {
    (Nm(),
      Pm(),
      (Jm = {
        widthPx: `816px`,
        heightPx: `1056px`,
        pageMargin: {
          top: `60px`,
          right: `66px`,
          bottom: `64px`,
          left: `66px`,
          header: `30px`,
          footer: `30px`,
          gutter: `0px`,
        },
      }),
      (Ym = 684),
      (Xm = 332),
      (Zm = 20),
      (Qm = { typeface: `Arial`, fontSize: `8pt`, color: `#8A8A8A` }),
      ($m = { ...Qm, rotation: 0 }),
      (eh = { style: `solid`, width: 0.35, fill: `#DADADA` }),
      (th = { type: `none` }),
      (nh = { style: `solid`, width: 0, fill: th }),
      (rh = { style: `solid`, width: 0.25, fill: `#EFEFEF` }),
      (ih = { style: `solid`, width: 0, fill: th }),
      (ah = { style: `solid`, width: 0.5, color: `#DADADA` }),
      (oh = { top: ah, bottom: ah, insideHorizontal: ah }),
      (sh = { top: `7px`, right: `10px`, bottom: `7px`, left: `10px` }),
      (ch = { top: `5px`, right: `5px`, bottom: `5px`, left: `5px` }),
      (lh = { top: `2px`, right: `0px`, bottom: `2px`, left: `0px` }),
      (uh = { top: `0px`, right: `0px`, bottom: `2px`, left: `0px` }),
      (dh = { top: `4px`, right: `0px`, bottom: `4px`, left: `0px` }),
      (fh = { top: `4px`, right: `0px`, bottom: `10px`, left: `0px` }),
      (ph = 19),
      (mh = 26),
      (hh = 18),
      (gh = 58),
      (_h = 25),
      (vh = 33),
      (yh = 314),
      (bh = 304),
      (xh = 5),
      (Sh = 12),
      (Ch = 154),
      (wh = 228),
      (Th = 100),
      (Eh = `#F3F3F3`),
      (Dh = {
        normal: {
          textStyle: { typeface: `Arial`, fontSize: `11pt`, color: `#222222` },
          paragraphStyle: { lineSpacingPercent: 128e3, tabStops: [] },
          spaceAfter: `8px`,
        },
        reportTitle: {
          textStyle: {
            typeface: `Arial`,
            fontSize: `15.5pt`,
            bold: !0,
            color: `#111111`,
            alignment: `left`,
          },
          paragraphStyle: { lineSpacingPercent: 112e3, tabStops: [] },
          spaceAfter: `14px`,
        },
        sectionHeading: {
          textStyle: { typeface: `Arial`, fontSize: `15pt`, bold: !0, color: `#111111` },
          paragraphStyle: { lineSpacingPercent: 114e3, tabStops: [] },
          spaceBefore: `36px`,
          spaceAfter: `10px`,
        },
        tableTitle: {
          textStyle: { typeface: `Arial`, fontSize: `11pt`, bold: !0, color: `#3A3A3A` },
          spaceAfter: `2px`,
        },
        tableSubtitle: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#777777` },
          spaceAfter: `6px`,
        },
        tableResultCount: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#777777` },
          spaceBefore: `14px`,
          spaceAfter: `6px`,
        },
        body: {
          textStyle: { typeface: `Arial`, fontSize: `11pt`, color: `#222222` },
          paragraphStyle: { lineSpacingPercent: 132e3, tabStops: [] },
          spaceAfter: `10px`,
        },
        bullet: {
          textStyle: { typeface: `Arial`, fontSize: `11pt`, color: `#222222` },
          paragraphStyle: { lineSpacingPercent: 128e3, tabStops: [] },
          spaceAfter: `6px`,
        },
        chartTitle: {
          textStyle: { typeface: `Arial`, fontSize: `11pt`, bold: !0, color: `#3A3A3A` },
          spaceBefore: `8px`,
          spaceAfter: `2px`,
        },
        chartSubtitle: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#777777` },
          spaceAfter: `8px`,
        },
        tableHeader: {
          textStyle: {
            typeface: `Arial`,
            fontSize: `10pt`,
            bold: !0,
            color: `#666666`,
            alignment: `left`,
          },
          paragraphStyle: { lineSpacingPercent: 112e3, tabStops: [] },
          spaceAfter: `0px`,
        },
        tableHeaderRight: {
          textStyle: {
            typeface: `Arial`,
            fontSize: `10pt`,
            bold: !0,
            color: `#666666`,
            alignment: `right`,
          },
          paragraphStyle: { lineSpacingPercent: 112e3, tabStops: [] },
          spaceAfter: `0px`,
        },
        tableBody: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#222222`, alignment: `left` },
          paragraphStyle: { lineSpacingPercent: 112e3, tabStops: [] },
          spaceAfter: `0px`,
        },
        tableBodyRight: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#222222`, alignment: `right` },
          paragraphStyle: { lineSpacingPercent: 112e3, tabStops: [] },
          spaceAfter: `0px`,
        },
        tablePositiveRight: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#188038`, alignment: `right` },
          paragraphStyle: { lineSpacingPercent: 112e3, tabStops: [] },
          spaceAfter: `0px`,
        },
        tableSmall: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#222222`, alignment: `left` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        tableSmallRight: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#222222`, alignment: `right` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        tableSmallPositiveRight: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#188038`, alignment: `right` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        barLabel: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#666666`, alignment: `right` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        barValue: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#666666`, alignment: `left` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        barPanelTitle: {
          textStyle: {
            typeface: `Arial`,
            fontSize: `12pt`,
            bold: !0,
            color: `#111111`,
            alignment: `left`,
          },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        barPanelSubtitle: {
          textStyle: { typeface: `Arial`, fontSize: `10.5pt`, color: `#666666`, alignment: `left` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        barPanelLabel: {
          textStyle: { typeface: `Arial`, fontSize: `10.5pt`, color: `#222222`, alignment: `left` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        barPanelValue: {
          textStyle: {
            typeface: `Arial`,
            fontSize: `10.5pt`,
            bold: !0,
            color: `#111111`,
            alignment: `right`,
          },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
        footer: {
          textStyle: { typeface: `Arial`, fontSize: `10pt`, color: `#666666` },
          paragraphStyle: { lineSpacingPercent: 1e5, tabStops: [] },
          spaceAfter: `0px`,
        },
      }),
      (Oh = [
        `2025-09-05`,
        `2025-09-12`,
        `2025-09-19`,
        `2025-09-26`,
        `2025-10-03`,
        `2025-10-10`,
        `2025-10-17`,
        `2025-10-24`,
        `2025-10-31`,
        `2025-11-07`,
        `2025-11-14`,
        `2025-11-21`,
        `2025-11-28`,
        `2025-12-04`,
      ]),
      (kh = [1.25, 1.46, 1.62, 1.78, 1.96, 2.19, 2.45, 2.71, 3.02, 3.31, 3.67, 4.08, 4.54, 5]),
      (Ah = [32, 31.6, 32.3, 32.1, 32.5, 32.2, 31.8, 32, 32.4, 32.1, 32.6, 32.9, 32.5, 32.8]),
      (jh = [40, 46.1, 52.3, 57.1, 63.7, 70.5, 77.9, 86.7, 97.8, 106.3, 119.6, 134.2, 147.6, 164]),
      (Mh = [1.36, 1.57, 1.83, 2.09, 2.38, 2.69, 3.08, 3.53, 3.91, 4.39, 4.94, 5.61, 6.47, 7.84]),
      (Nh = [
        [`Golden Retrievers seen`, `1.25K`, `5.00K`, `+3.75K`, `+300%`],
        [`Weekly retrieves`, `40.0K`, `164.0K`, `+124.0K`, `+310%`],
        [`Retrieves per dog`, `32.0`, `32.8`, `+0.8`, `+2.5%`],
        [`Biscuits shared`, `2.78K`, `9.46K`, `+6.68K`, `+240%`],
        [`Miles walked`, `1.36K`, `7.84K`, `+6.48K`, `+476%`],
      ]),
      (Ph = [
        [`Maple Park`, `1.15K`, `870`, `41.52K`, `31.12K`, `25.1%`, `2.18K`],
        [`Cedar Trail`, `980`, `730`, `34.12K`, `25.92K`, `20.9%`, `1.74K`],
        [`Willow Pond`, `420`, `315`, `13.14K`, `10.04K`, `8.1%`, `710`],
        [`Backyards`, `760`, `540`, `19.38K`, `13.52K`, `10.9%`, `420`],
        [`Day Camp`, `610`, `470`, `20.68K`, `16.24K`, `13.1%`, `940`],
        [`Dog Run`, `400`, `300`, `12.22K`, `9.42K`, `7.6%`, `660`],
        [`Harbor Bay`, `260`, `195`, `8.60K`, `6.70K`, `5.4%`, `490`],
        [`Oak Yard`, `180`, `135`, `6.34K`, `4.84K`, `3.9%`, `310`],
        [`Creek Camp`, `140`, `110`, `4.96K`, `3.84K`, `3.1%`, `260`],
        [`Dune Beach`, `100`, `85`, `3.04K`, `2.36K`, `1.9%`, `130`],
      ]),
      (Fh = [
        `Maple Park`,
        `Cedar Trail`,
        `Day Camp`,
        `Backyards`,
        `Willow Pond`,
        `Dog Run`,
        `Harbor Bay`,
        `Oak Yard`,
      ]),
      (Ih = [31.12, 25.92, 16.24, 13.52, 10.04, 9.42, 6.7, 4.84]),
      (Lh = [
        `Maple Park`,
        `Cedar Trail`,
        `Day Camp`,
        `Backyards`,
        `Willow Pond`,
        `Dog Run`,
        `Harbor Bay`,
        `Oak Yard`,
      ]),
      (Rh = [41.52, 34.12, 20.68, 19.38, 13.14, 12.22, 8.6, 6.34]));
  }),
  Bh = e(() => {
    zh();
  }),
  Vh = e(() => {});
function Hh() {
  return new Worker(
    new URL(
      `` + new URL(`runtime.worker-2a7ae6b89700.js`, import.meta.url).href,
      `` + import.meta.url,
    ),
    { type: `module`, name: `popcorn-document-worker` },
  );
}
var Uh = e(() => {
    Vh();
  }),
  Wh,
  Gh = e(() => {
    Wh = {
      documentVersion: 0,
      title: `Untitled document`,
      bodyText: ``,
      layoutMode: `paged`,
      zoom: 1,
      pageIndex: 0,
      pageCount: 0,
      pageLayouts: [],
      chartHoverTargets: [],
      selectedTextBlockId: null,
      selectedObjectId: null,
      selectedObjectKind: null,
      textEditState: null,
      findOpen: !1,
      findQuery: ``,
      findResultCount: 0,
      findActiveResultIndex: -1,
      findSummary: ``,
      findFocusToken: 0,
    };
  });
function Kh(e = Wh) {
  return new Kt(e);
}
var qh = e(() => {
  (Mt(), Gh());
});
function Jh() {
  return (
    typeof window < `u` &&
    typeof Worker < `u` &&
    typeof HTMLCanvasElement < `u` &&
    typeof OffscreenCanvas < `u`
  );
}
function Yh(e, t) {
  let n = Math.max(1, Math.round(t.width * t.dpr)),
    r = Math.max(1, Math.round(t.height * t.dpr));
  (e.width !== n && (e.width = n), e.height !== r && (e.height = r));
}
function Xh(e, t) {
  return e.width === t.width && e.height === t.height && e.dpr === t.dpr;
}
function Zh(e) {
  return e.documentProto ? e.documentProto : e.document ? e.document.toProto() : Fm().toProto();
}
function Qh() {
  return Hh();
}
function $h(e = {}) {
  return new tg(e);
}
var eg,
  tg,
  ng = e(() => {
    (wt(),
      Ct(),
      qt(),
      $n(),
      Bh(),
      Uh(),
      qh(),
      (eg = 1),
      (tg = class {
        id = eg++;
        #e = Ot(`document-main-controller`);
        #t = Kh();
        #n;
        #r;
        #i = new Set();
        #a = new Map();
        #o = new Map();
        #s = new Set();
        #c = new Set();
        #l = [];
        #u = [];
        #d = !1;
        #f = null;
        #p = 0;
        #m = [];
        #h = { searchFragments: [], objectTargets: [] };
        #g;
        #_;
        #v = !1;
        #y = !1;
        constructor(e = {}) {
          ((this.#g = e.onImportError), (this.#_ = e.onImportReady));
          let t = (e.workerFactory ?? Qh)();
          this.#n = new Yt(
            t,
            (e) => this.#T(e),
            (e) => {
              let t = Error(e);
              if (!this.#y && this.#g) {
                this.#g(t);
                return;
              }
              throw t;
            },
          );
          let n = {
            initialPageIndex: e.initialPageIndex,
            initialZoom: e.initialZoom,
            initialLayoutMode: e.initialLayoutMode,
          };
          if (e.bootstrapSource) {
            let t = e.bootstrapSource;
            this.#n.bootstrap(
              { ...n, bootstrapSource: t },
              t.kind === `source-bytes` ? [t.bytes] : void 0,
            );
          } else this.#n.bootstrap({ ...n, documentProto: Zh(e) });
          this.#r = Zn()
            .then(() => {
              let e = vt();
              (this.#e.debug(`font-render-deps-ready`, { fontCount: e.length, fontDebug: Jt() }),
                e.length !== 0 && this.#n.dispatch({ kind: `install-font-faces`, fonts: e }));
            })
            .catch(() => {});
        }
        subscribe(e) {
          return this.#t.subscribe(e);
        }
        getState() {
          return this.#t.getState();
        }
        getSnapshot() {
          return this.#t.getState();
        }
        dispatch(e) {}
        attachViewport() {
          return () => {};
        }
        attachPageCanvas(e) {
          this.#x(e.surfaceId);
          let t = e.dpr ?? window.devicePixelRatio ?? 1,
            n = { width: e.width, height: e.height, dpr: t };
          if (!Jh()) return (Yh(e.canvas, n), !1);
          let r = this.#a.get(e.surfaceId);
          if (r?.canvas === e.canvas) {
            let n = r.pageIndex !== e.pageIndex;
            return (
              (r.pageIndex = e.pageIndex),
              this.resizePageCanvas({
                surfaceId: e.surfaceId,
                width: e.width,
                height: e.height,
                pageTop: e.pageTop,
                dpr: t,
              }),
              n && ((r.revision = ++this.#p), this.#S(e.surfaceId, r)),
              !0
            );
          }
          Yh(e.canvas, n);
          let i = e.canvas.getContext(`2d`);
          return i
            ? (this.#a.set(e.surfaceId, {
                canvas: e.canvas,
                ctx: i,
                pageIndex: e.pageIndex,
                pageTop: e.pageTop ?? 0,
                metrics: n,
                revision: ++this.#p,
              }),
              this.#s.delete(e.surfaceId),
              this.#S(e.surfaceId, this.#a.get(e.surfaceId)),
              !0)
            : !1;
        }
        resizePageCanvas(e) {
          let t = e.dpr ?? window.devicePixelRatio ?? 1,
            n = { width: e.width, height: e.height, dpr: t },
            r = this.#a.get(e.surfaceId);
          if (!r) return;
          let i = e.pageTop ?? 0;
          (Xh(r.metrics, n) && r.pageTop === i) ||
            ((r.metrics = n), (r.pageTop = i), (r.revision = ++this.#p), this.#S(e.surfaceId, r));
        }
        detachPageCanvas(e) {
          (this.#x(e),
            this.#c.add(e),
            (this.#f ??= window.setTimeout(() => {
              this.#f = null;
              let e = Array.from(this.#c);
              this.#c.clear();
              for (let t of e) (this.#a.delete(t), this.#o.delete(t), this.#s.add(t));
              this.#v || this.#C();
            }, 0)));
        }
        subscribeRenderedPages(e) {
          return (
            this.#i.add(e),
            () => {
              this.#i.delete(e);
            }
          );
        }
        getRenderedPages() {
          return this.#m;
        }
        getSearchFragments() {
          return this.#h.searchFragments;
        }
        getObjectTargets() {
          return this.#h.objectTargets;
        }
        requestExport(e) {
          return this.#n.request({ kind: `export`, format: e?.format ?? `proto` }).then((e) => {
            if (e.kind !== `export`) throw Error(`Unexpected export response: ${e.kind}`);
            return e.result;
          });
        }
        exportDocumentProto() {
          return this.requestExport({ format: `proto` }).then((e) => e.documentProto);
        }
        replaceFromProto(e) {
          return this.#n.request({ kind: `replace-from-proto`, documentProto: e }).then((e) => {
            if (e.kind !== `replace-from-proto`)
              throw Error(`Unexpected replace response: ${e.kind}`);
          });
        }
        replaceDocument(e) {
          return this.replaceFromProto(e.toProto());
        }
        requestFocusedElementSnapshot(e) {
          return this.#n.request({ kind: `focused-element-snapshot`, ref: e }).then((e) => {
            if (e.kind !== `focused-element-snapshot`)
              throw Error(`Unexpected focused snapshot response: ${e.kind}`);
            return e.snapshot;
          });
        }
        requestFocusedElementFrame(e) {
          return this.#n.request({ kind: `focused-element-frame`, ...e }).then((e) => {
            if (e.kind !== `focused-element-frame`)
              throw Error(`Unexpected focused frame response: ${e.kind}`);
            return e;
          });
        }
        setFocusedChartType(e, t) {
          return this.#n
            .request({ kind: `set-focused-chart-type`, ref: e, chartType: t })
            .then((e) => {
              if (e.kind !== `set-focused-chart-type`)
                throw Error(`Unexpected focused chart type response: ${e.kind}`);
              return e.snapshot;
            });
        }
        dispose() {
          this.#v ||
            ((this.#v = !0),
            this.#f != null && (window.clearTimeout(this.#f), (this.#f = null)),
            this.#c.clear(),
            this.#o.clear(),
            this.#s.clear(),
            (this.#l.length = 0),
            (this.#u.length = 0),
            this.#i.clear(),
            this.#a.clear(),
            this.#n.dispose());
        }
        setZoom(e) {
          let t = Math.max(0.25, Math.min(e, 3));
          (this.#l.push(t),
            this.#t.patch({ zoom: t }),
            this.#n.dispatch({ kind: `set-zoom`, zoom: t }));
        }
        setLayoutMode(e) {
          this.#n.dispatch({ kind: `set-layout-mode`, layoutMode: e });
        }
        setPageIndex(e, t) {
          let n = e;
          if (t?.origin === `scroll`) {
            let t = this.getSnapshot().pageCount;
            n = t > 0 ? Math.max(0, Math.min(e, t - 1)) : e;
            let r = this.#u.at(-1);
            if (r === n || (r === void 0 && this.getSnapshot().pageIndex === n)) return;
            (this.#u.push(n), this.#t.patch({ pageIndex: n }));
          }
          this.#n.dispatch({ kind: `set-page-index`, pageIndex: n, origin: t?.origin });
        }
        goToPreviousPage() {
          this.setPageIndex(this.getSnapshot().pageIndex - 1, { origin: `navigation` });
        }
        goToNextPage() {
          this.setPageIndex(this.getSnapshot().pageIndex + 1, { origin: `navigation` });
        }
        setSelectedTextBlockId(e, t) {
          this.#n.dispatch({ kind: `select-text-block`, blockId: e, pageIndex: t?.pageIndex });
        }
        setSelectedObject(e) {
          this.#n.dispatch({ kind: `select-object`, target: e });
        }
        clearSelection() {
          this.#n.dispatch({ kind: `clear-selection` });
        }
        deleteSelectedObject() {
          this.#n.dispatch({ kind: `delete-selected-object` });
        }
        appendParagraph(e) {
          this.#n.dispatch({ kind: `append-paragraph`, text: e });
        }
        openFind() {
          this.#n.dispatch({ kind: `open-find` });
        }
        closeFind() {
          this.#n.dispatch({ kind: `close-find` });
        }
        setFindQuery(e) {
          this.#n.dispatch({ kind: `set-find-query`, query: e });
        }
        goToNextFindResult() {
          this.#n.dispatch({ kind: `go-to-next-find-result` });
        }
        goToPreviousFindResult() {
          this.#n.dispatch({ kind: `go-to-previous-find-result` });
        }
        textPointerDown(e, t, n) {
          return (
            this.#n.dispatch({
              kind: `text-pointer-down`,
              pageIndex: e,
              point: t,
              shiftKey: n?.shiftKey,
            }),
            !0
          );
        }
        textPointerMove(e) {
          return (this.#n.dispatch({ kind: `text-pointer-move`, point: e }), !0);
        }
        textPointerUp() {
          this.#n.dispatch({ kind: `text-pointer-up` });
        }
        textSelectWordAtPoint(e, t) {
          return (
            this.#n.dispatch({ kind: `text-select-word-at-point`, pageIndex: e, point: t }), !0
          );
        }
        textSelectParagraphAtPoint(e, t) {
          return (
            this.#n.dispatch({ kind: `text-select-paragraph-at-point`, pageIndex: e, point: t }), !0
          );
        }
        textActivateBlockEnd(e) {
          return (this.#n.dispatch({ kind: `text-activate-block-end`, blockId: e }), !0);
        }
        textClear() {
          this.#n.dispatch({ kind: `text-clear` });
        }
        textHandleKeyDown(e) {
          return (this.#n.dispatch({ kind: `text-keydown`, event: e }), !0);
        }
        textHandleBeforeInput(e) {
          return (this.#n.dispatch({ kind: `text-before-input`, event: e }), !0);
        }
        textHandleInput(e) {
          return (this.#n.dispatch({ kind: `text-input`, event: e }), !0);
        }
        textHandleCompositionEnd(e) {
          return (this.#n.dispatch({ kind: `text-composition-end`, event: e }), !0);
        }
        #b() {
          for (let e of this.#i) e();
        }
        #x(e) {
          this.#c.delete(e) &&
            this.#c.size === 0 &&
            this.#f != null &&
            (window.clearTimeout(this.#f), (this.#f = null), this.#C());
        }
        #S(e, t) {
          (this.#s.delete(e),
            this.#o.set(e, {
              surfaceId: e,
              pageIndex: t.pageIndex,
              width: t.metrics.width,
              height: t.metrics.height,
              dpr: t.metrics.dpr,
              pageTop: t.pageTop,
              revision: t.revision,
            }),
            this.#C());
        }
        #C() {
          this.#d ||
            ((this.#d = !0),
            this.#r.then(() => {
              if (((this.#d = !1), this.#v)) {
                (this.#o.clear(), this.#s.clear());
                return;
              }
              if (this.#f != null) return;
              let e = Array.from(this.#o.values()),
                t = Array.from(this.#s);
              (this.#o.clear(),
                this.#s.clear(),
                !(e.length === 0 && t.length === 0) &&
                  this.#n.dispatch({
                    kind: `sync-page-canvases`,
                    surfaces: e,
                    detachedSurfaceIds: t,
                  }));
            }));
        }
        #w(e) {
          let t = this.#a.get(e.surfaceId),
            n = { width: e.width, height: e.height, dpr: e.dpr };
          if (
            !t ||
            t.pageIndex !== e.pageIndex ||
            t.pageTop !== e.pageTop ||
            t.revision !== e.revision ||
            !Xh(t.metrics, n)
          ) {
            e.bitmap.close();
            return;
          }
          let { canvas: r, ctx: i } = t;
          (Yh(r, n),
            i.setTransform(1, 0, 0, 1, 0, 0),
            i.clearRect(0, 0, r.width, r.height),
            i.setTransform(e.dpr, 0, 0, e.dpr, 0, 0),
            i.drawImage(e.bitmap, 0, 0, e.width, e.height),
            e.bitmap.close());
        }
        #T(e) {
          switch (e.kind) {
            case `bootstrap-status`:
              e.status === `ready` && !this.#y && ((this.#y = !0), this.#_?.());
              return;
            case `meta`:
            case `selection`:
            case `editor`:
            case `find`:
            case `hover`:
              this.#t.patch(e.state);
              return;
            case `navigation`: {
              let t = { ...e.state },
                n = this.#l[0];
              n !== void 0 &&
                (Math.abs(e.state.zoom - n) < 1e-4 && this.#l.shift(),
                this.#l.length > 0 && delete t.zoom);
              let r = this.#u[0];
              (r !== void 0 &&
                (e.state.pageIndex === r && this.#u.shift(),
                this.#u.length > 0 && delete t.pageIndex),
                this.#t.patch(t));
              return;
            }
            case `layout`:
              ((this.#h = e.metadata),
                this.#t.patch({ pageCount: e.pageLayouts.length, pageLayouts: e.pageLayouts }));
              return;
            case `rendered-pages`:
              ((this.#m = e.pages), this.#b());
              return;
            case `page-frame`:
              this.#w(e);
              return;
            case `debug-log`:
              Ot(e.namespace).debug(e.message, e.details);
              return;
            default:
              return e;
          }
        }
      }));
  }),
  rg = e(() => {
    ng();
  });
function ig(e, t) {
  if (e.length === 0 || t.viewportHeight <= 0) return [];
  let n = Math.max(0, t.overscanPx ?? 0),
    r = t.scrollTop - n,
    i = t.scrollTop + t.viewportHeight + n;
  return e.filter((e) => e.top + e.height >= r && e.top <= i);
}
var ag = e(() => {});
function og() {
  return typeof window > `u` ? null : window;
}
function sg(e) {
  if (!At()) return () => {};
  let t = og();
  if (!t) return () => {};
  let n = {
    controller: e.controller,
    getSnapshot: () => e.controller.getSnapshot(),
    exportDocumentProto: () => e.controller.exportDocumentProto(),
    getBodyText: () => e.controller.getSnapshot().bodyText,
    getTextLayoutBlocks: () => e.getTextLayoutBlocks(),
    getTextEditState: () => e.getTextEditState(),
    getFindState: () => {
      let t = e.controller.getSnapshot();
      return {
        open: t.findOpen,
        query: t.findQuery,
        summary: t.findSummary,
        resultCount: t.findResultCount,
        activeResultIndex: t.findActiveResultIndex,
        selectedTextBlockId: t.selectedTextBlockId,
      };
    },
    getSearchFragments: () => e.controller.getSearchFragments(),
    getObjectTargets: () => e.controller.getObjectTargets(),
    getPageState: () => {
      let t = e.controller.getSnapshot();
      return {
        pageIndex: t.pageIndex,
        pageCount: t.pageCount,
        pageLayouts: t.pageLayouts,
        pageRects: e.getPageRects(),
        renderedPages: e.getRenderedPages(),
        textLayoutBlockCount: e.getTextLayoutBlocks().length,
      };
    },
    captureState: () => {
      let n = e.controller.getSnapshot();
      return {
        snapshot: n,
        pageState: {
          pageIndex: n.pageIndex,
          pageCount: n.pageCount,
          pageLayouts: n.pageLayouts,
          pageRects: e.getPageRects(),
          renderedPages: e.getRenderedPages(),
          textLayoutBlockCount: e.getTextLayoutBlocks().length,
        },
        bodyText: n.bodyText,
        textLayoutBlocks: e.getTextLayoutBlocks(),
        textEditState: e.getTextEditState(),
        findState: {
          open: n.findOpen,
          query: n.findQuery,
          summary: n.findSummary,
          resultCount: n.findResultCount,
          activeResultIndex: n.findActiveResultIndex,
          selectedTextBlockId: n.selectedTextBlockId,
        },
        searchFragments: e.controller.getSearchFragments(),
        objectTargets: e.controller.getObjectTargets(),
        logCount: (t.__POPCORN_LOGS__ ?? []).length,
      };
    },
    getLogs: () => [...(t.__POPCORN_LOGS__ ?? [])],
    clearLogs: () => {
      t.__POPCORN_LOGS__ = [];
    },
  };
  return (
    (t.__POPCORN_DOCUMENT_DEVTOOLS__ = n),
    () => {
      t.__POPCORN_DOCUMENT_DEVTOOLS__ === n && delete t.__POPCORN_DOCUMENT_DEVTOOLS__;
    }
  );
}
var cg = e(() => {
  Xt();
});
function lg(e) {
  return { left: e.hitBox.x, top: e.hitBox.y, width: e.hitBox.width, height: e.hitBox.height };
}
var ug = e(() => {});
function dg(e, t) {
  for (let n = e.length - 1; n >= 0; --n) {
    let r = e[n];
    if (r && pn(lg(r), t)) return r;
  }
  return null;
}
function fg(e, t) {
  return t ? (e.find((e) => e.id === t) ?? null) : null;
}
var pg = e(() => {
  (sn(), ug());
});
function mg(e, t) {
  let n = t.scale,
    r = (e) => (e === void 0 ? void 0 : e * n);
  return {
    ...e,
    hitBox: {
      x: t.left + e.hitBox.x * n,
      y: t.top + e.hitBox.y * n,
      width: e.hitBox.width * n,
      height: e.hitBox.height * n,
    },
    layout: {
      x: t.left + e.layout.x * n,
      y: t.top + e.layout.y * n,
      width: e.layout.width * n,
      height: e.layout.height * n,
      unrotatedWidth: r(e.layout.unrotatedWidth),
      unrotatedHeight: r(e.layout.unrotatedHeight),
      linkRects: e.layout.linkRects.map((e) => ({
        ...e,
        x: t.left + e.x * n,
        y: t.top + e.y * n,
        width: e.width * n,
        height: e.height * n,
      })),
      lines: e.layout.lines.map((e) => ({
        ...e,
        widthPx: e.widthPx * n,
        heightPx: e.heightPx * n,
        contentHeightPx: e.contentHeightPx * n,
        offsetPx: e.offsetPx * n,
        availableWidthPx: r(e.availableWidthPx),
        baselineOffsetPx: e.baselineOffsetPx * n,
        maxAscentPx: e.maxAscentPx * n,
        maxDescentPx: e.maxDescentPx * n,
        maxPx: e.maxPx * n,
        hardBreakAfter: e.hardBreakAfter
          ? { ...e.hardBreakAfter, px: e.hardBreakAfter.px * n }
          : void 0,
        segments: e.segments.map((e) => ({
          ...e,
          xPx: e.xPx === void 0 ? void 0 : t.left + e.xPx * n,
          widthPx: e.widthPx * n,
          px: e.px * n,
          ascentPx: e.ascentPx * n,
          descentPx: e.descentPx * n,
          advance: Float32Array.from(e.advance, (e) => e * n),
        })),
      })),
    },
  };
}
var hg = e(() => {});
function gg(e, t, n) {
  let r = Math.max(n.zoom, 1e-4),
    i = n.strokeStyle ?? `#2563eb`,
    a = un(t.rotation),
    o = { ...t, rotation: a },
    s = fn(o),
    c = [s.nw, s.ne, s.se, s.sw];
  (e.save(),
    (e.strokeStyle = i),
    (e.lineWidth = 1.25 / r),
    e.setLineDash([]),
    e.beginPath(),
    e.moveTo(c[0].x, c[0].y));
  for (let t = 1; t < c.length; t += 1) e.lineTo(c[t].x, c[t].y);
  if (
    (e.closePath(),
    e.stroke(),
    n.showRotationHandle !== !1 && _g(e, o, { zoom: r, strokeStyle: i }),
    n.showResizeHandles !== !1)
  ) {
    let { halfVisibleSize: t, visibleSize: n } = mn(r);
    e.fillStyle = `#ffffff`;
    for (let r of c) (e.beginPath(), e.rect(r.x - t, r.y - t, n, n), e.fill(), e.stroke());
  }
  e.restore();
}
function _g(e, t, n) {
  let r = ln(t),
    i = (un(t.rotation) * Math.PI) / 180,
    a = Math.cos(i),
    o = Math.sin(i),
    s = 4 / n.zoom,
    c = vg({ center: r, cos: a, sin: o, dx: 0, dy: -t.height / 2 }),
    l = cn(t, n.zoom);
  (e.beginPath(),
    e.moveTo(c.x, c.y),
    e.lineTo(l.x, l.y),
    e.stroke(),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(l.x, l.y, s, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = n.strokeStyle),
    e.stroke());
}
function vg(e) {
  return {
    x: e.center.x + e.dx * e.cos - e.dy * e.sin,
    y: e.center.y + e.dx * e.sin + e.dy * e.cos,
  };
}
var yg = e(() => {
  (dn(), sn());
});
function bg(e, t, n) {
  t && gg(e, lg(t), { zoom: n.zoom, strokeStyle: `#2563eb`, showRotationHandle: !1 });
}
var xg = e(() => {
  (yg(), ug());
});
function Sg({
  controller: e,
  surfaceId: t,
  rect: n,
  renderScale: r,
  pageObjectTargets: i,
  selectedObjectId: a,
  textEditSession: o,
  overlayVersion: s,
  enableWorker: c = !0,
  onPointerDown: l,
  onPointerMove: u,
  onPointerUp: d,
  onClick: f,
  onDoubleClick: p,
}) {
  let m = (0, Cg.useRef)(null),
    h = (0, Cg.useRef)(null),
    g = window.devicePixelRatio || 1,
    _ = Math.max(1, Math.round(n.logicalWidth * r)),
    v = Math.max(1, Math.round(n.logicalHeight * r)),
    y = (0, Cg.useRef)({ width: _, height: v, pageTop: n.pageTop });
  y.current = { width: _, height: v, pageTop: n.pageTop };
  let b = (0, Cg.useMemo)(() => fg(i, a), [i, a]);
  return (
    (0, Cg.useLayoutEffect)(() => {
      let r = m.current;
      if (!r || !c) return;
      let i = y.current;
      if (
        e.attachPageCanvas({
          surfaceId: t,
          pageIndex: n.pageIndex,
          canvas: r,
          width: i.width,
          height: i.height,
          pageTop: i.pageTop,
          dpr: g,
        })
      )
        return () => {
          e.detachPageCanvas(t);
        };
    }, [e, g, c, n.pageIndex, t]),
    (0, Cg.useLayoutEffect)(() => {
      let r = m.current;
      if (r) {
        if (!c) {
          ((r.width = Math.max(1, Math.round(_ * g))), (r.height = Math.max(1, Math.round(v * g))));
          return;
        }
        e.resizePageCanvas({ surfaceId: t, width: _, height: v, pageTop: n.pageTop, dpr: g });
      }
    }, [e, g, c, n.pageTop, v, _, t]),
    (0, Cg.useLayoutEffect)(() => {
      let e = h.current;
      if (!e) return;
      let t = Math.max(1, Math.round(n.width * g)),
        r = Math.max(1, Math.round(n.height * g));
      (e.width !== t || e.height !== r) && ((e.width = t), (e.height = r));
      let i = `${n.width}px`,
        a = `${n.height}px`;
      (e.style.width !== i && (e.style.width = i), e.style.height !== a && (e.style.height = a));
      let s = e.getContext(`2d`);
      s &&
        (s.setTransform(g, 0, 0, g, 0, 0),
        s.clearRect(0, 0, n.width, n.height),
        s.save(),
        s.scale(n.scale, n.scale),
        s.translate(0, -n.pageTop),
        bg(s, b, { zoom: n.scale }),
        s.restore(),
        s.save(),
        s.translate(-n.left, -n.top),
        o.drawOverlay(s),
        s.restore());
    }, [g, s, n.height, n.left, n.pageTop, n.scale, n.top, n.width, b, o]),
    (0, wg.jsxs)(`div`, {
      className: `absolute`,
      style: { left: n.left, top: n.top, width: n.width, height: n.height },
      "data-testid": `popcorn-document-page-${n.pageIndex}`,
      "data-popcorn-document-page-top": n.pageTop,
      "data-popcorn-document-surface-id": t,
      children: [
        (0, wg.jsx)(`div`, { className: `absolute inset-0 bg-white` }),
        (0, wg.jsx)(`canvas`, {
          ref: m,
          className: `absolute inset-0 outline-none`,
          style: { width: n.width, height: n.height },
          "data-testid": `popcorn-document-page-canvas-${n.pageIndex}`,
          "data-popcorn-document-surface-id": t,
          onPointerDown: l,
          onPointerMove: u,
          onPointerUp: d,
          onPointerCancel: d,
          onClick: f,
          onDoubleClick: p,
        }),
        (0, wg.jsx)(`canvas`, {
          ref: h,
          className: `pointer-events-none absolute inset-0 outline-none`,
          "data-testid": `popcorn-document-page-overlay-${n.pageIndex}`,
          "data-popcorn-document-surface-id": t,
        }),
      ],
    })
  );
}
var Cg,
  wg,
  Tg = e(() => {
    ((Cg = t(n())), xg(), pg(), (wg = c()));
  });
function Eg({
  controller: e,
  snapshot: t,
  enableWorker: n = !0,
  artifactSearchEnabled: r = !0,
  bottomScrollReservePx: i = 0,
  pageless: a = !1,
  onOpenFocusedElement: o,
  onGestureZoomChange: s,
  scrollContainerRef: c,
}) {
  let l = (0, $.useRef)(null),
    u = c ?? l,
    d = (0, $.useRef)(!1),
    f = (0, $.useRef)([]),
    p = (0, $.useRef)(null),
    m = (0, $.useRef)(new Map()),
    h = (0, $.useRef)(new Map()),
    g = (0, $.useRef)(null),
    _ = (0, $.useRef)({ width: 0, height: 0 }),
    v = (0, $.useRef)(t.pageLayouts),
    y = (0, $.useRef)({ viewportWidth: 0, bottomScrollReservePx: i, pageless: a }),
    b = (0, $.useRef)(t.zoom),
    x = (0, $.useRef)(t.zoom),
    S = (0, $.useRef)(t.zoom),
    C = (0, $.useRef)(!1),
    w = (0, $.useRef)(!1),
    T = (0, $.useRef)(null),
    E = (0, $.useRef)(null),
    D = (0, $.useRef)(!1),
    O = (0, $.useRef)(null),
    k = (0, $.useRef)(t.pageIndex),
    [A, j] = (0, $.useState)(0),
    [M, ee] = (0, $.useState)(0),
    [te, ne] = (0, $.useState)(!1),
    [N, re] = (0, $.useState)(t.zoom),
    [ie, ae] = (0, $.useState)(t.zoom),
    P = xn(u),
    oe = u.current?.clientWidth || P.width,
    se = u.current?.clientHeight || P.height,
    ce = (0, $.useSyncExternalStore)(
      (t) => e.subscribeRenderedPages(t),
      () => e.getRenderedPages(),
      () => e.getRenderedPages(),
    ),
    F = (0, $.useMemo)(() => {
      let t = new Map();
      for (let n of e.getObjectTargets()) {
        let e = t.get(n.pageIndex);
        e ? e.push(n) : t.set(n.pageIndex, [n]);
      }
      return t;
    }, [e, t.documentVersion, t.pageLayouts, ce]),
    {
      contentHeight: I,
      contentWidth: L,
      pageRects: R,
    } = (0, $.useMemo)(
      () =>
        kg({
          pageLayouts: t.pageLayouts,
          zoom: N,
          viewportWidth: oe,
          bottomScrollReservePx: i,
          pageless: a,
        }),
      [i, a, t.pageLayouts, oe, N],
    ),
    z = (0, $.useMemo)(() => new Map(R.map((e) => [e.pageIndex, e])), [R]),
    B = (0, $.useMemo)(
      () =>
        a
          ? R.flatMap((e) => {
              let t = e.logicalHeight,
                n = Gg,
                r = [];
              for (let i = 0, a = 0; ; i += n, a += 1) {
                let o = Math.min(n, Math.max(2 ** -52, t - i));
                if (
                  (r.push({
                    ...e,
                    surfaceId: `${e.surfaceId}-tile-${a}`,
                    top: e.top + i * e.scale,
                    height: o * e.scale,
                    logicalHeight: o,
                    pageTop: i,
                  }),
                  i + n >= t)
                )
                  break;
              }
              return r;
            })
          : R,
      [R, a],
    ),
    le = (0, $.useMemo)(
      () => B.map((e, t) => ({ key: e.surfaceId, index: t, top: e.top, height: e.height })),
      [B],
    ),
    ue = (0, $.useMemo)(
      () => ig(le, { scrollTop: M, viewportHeight: se, overscanPx: Yg }),
      [M, le, se],
    ),
    de = (0, $.useMemo)(() => {
      let e = new Map(B.map((e) => [e.surfaceId, e]));
      return ue.map((t) => e.get(t.key)).filter((e) => !!e);
    }, [B, ue]),
    fe = (0, $.useMemo)(() => {
      let e = [];
      for (let n of t.chartHoverTargets) {
        let t = z.get(n.pageIndex);
        t && e.push(Bg(n, t));
      }
      return e;
    }, [z, t.chartHoverTargets]);
  ((b.current = t.zoom),
    (x.current = N),
    (S.current = ie),
    (v.current = t.pageLayouts),
    (y.current = { viewportWidth: oe, bottomScrollReservePx: i, pageless: a }),
    (_.current = { width: oe, height: se }));
  let pe = (0, $.useCallback)((e) => {
      let t = u.current;
      if (!t) return e;
      let n = Lg(t, e);
      ((t.scrollLeft = n.left), (t.scrollTop = n.top));
      let r = { left: t.scrollLeft, top: t.scrollTop };
      return ((E.current = r), ee(r.top), r);
    }, []),
    me = (0, $.useCallback)(
      (e) => {
        if (D.current) {
          T.current = null;
          return;
        }
        let t = Dg(e.k, Kg, qg),
          n = { left: Math.max(0, -e.x), top: Math.max(0, -e.y) };
        if (((T.current = n), Math.abs(t - x.current) > Jg)) {
          (w.current || (C.current = !0), ee(n.top), re(t));
          return;
        }
        (pe(n), (T.current = null));
      },
      [pe],
    ),
    V = (0, $.useMemo)(
      () =>
        new kt({
          enabled: !0,
          initialCamera: { x: 0, y: 0, k: b.current },
          minZoom: Kg,
          maxZoom: qg,
          getViewportSize: () => Og(u.current, _.current),
          getWorldSize: () => Ag({ pageLayouts: v.current, zoom: x.current, ...y.current }),
          projectZoom: (e) => Ng({ ...e, pageLayouts: v.current, ...y.current }),
          clampCamera: (e) =>
            Fg(e, { pageLayouts: v.current, viewportSize: Og(u.current, _.current), ...y.current }),
          requestDraw: () => {
            let e = g.current?.getCamera();
            e && me(e);
          },
          onCameraSettled: (t) => {
            ((C.current = !1),
              ae(t.k),
              !(Math.abs(t.k - b.current) <= Jg) && (s ? s(t.k) : e.setZoom(t.k)));
          },
        }),
      [me, e, s],
    ),
    he = (0, $.useMemo)(() => {
      let e = new Map(),
        t = [],
        n = new Set();
      for (let r of ce) {
        let i = z.get(r.pageIndex);
        if (i)
          for (let a of r?.textLayoutBlocks ?? [])
            n.has(a.id) || (n.add(a.id), e.set(a.id, i.pageIndex), t.push(mg(a, i)));
      }
      return ((m.current = e), t);
    }, [z, ce]),
    H = (0, $.useMemo)(
      () =>
        new Wt(
          {
            onPointerDown: (t, n) => {
              let r = Ug(t, n?.blockId ?? null, p.current, m.current, h.current);
              r &&
                ((p.current = r.pageIndex),
                e.textPointerDown(r.pageIndex, r.pagePoint, { shiftKey: n?.shiftKey }));
            },
            onPointerMove: (t) => {
              let n = Ug(t, null, p.current, m.current, h.current);
              n && e.textPointerMove(n.pagePoint);
            },
            onPointerUp: () => {
              e.textPointerUp();
            },
            onSelectWordAtPoint: (t, n) => {
              let r = Ug(t, n?.blockId ?? null, p.current, m.current, h.current);
              r && ((p.current = r.pageIndex), e.textSelectWordAtPoint(r.pageIndex, r.pagePoint));
            },
            onSelectParagraphAtPoint: (t, n) => {
              let r = Ug(t, n?.blockId ?? null, p.current, m.current, h.current);
              r &&
                ((p.current = r.pageIndex), e.textSelectParagraphAtPoint(r.pageIndex, r.pagePoint));
            },
            onActivateBlockEnd: (t) => {
              e.textActivateBlockEnd(t);
            },
            onClear: () => {
              e.textClear();
            },
            onKeyDown: (t) => {
              e.textHandleKeyDown(t);
            },
            onBeforeInput: (t) => {
              e.textHandleBeforeInput(t);
            },
            onInput: (t) => {
              e.textHandleInput(t);
            },
            onCompositionEnd: (t) => {
              e.textHandleCompositionEnd(t);
            },
          },
          {
            onChange: () => {
              j((e) => e + 1);
            },
            onUnhandledKeyDown: (t) => {
              if (r && (t.metaKey || t.ctrlKey) && t.key.toLowerCase() === `f`) {
                (e.openFind(), t.preventDefault());
                return;
              }
            },
          },
        ),
      [r, e],
    );
  ((0, $.useEffect)(
    () => (
      (g.current = V),
      () => {
        (g.current === V && (g.current = null), V.destroy());
      }
    ),
    [V],
  ),
    (0, $.useEffect)(
      () => (
        V.attach(u.current),
        () => {
          V.attach(null);
        }
      ),
      [V],
    ),
    (0, $.useLayoutEffect)(() => {
      let e = T.current;
      e && (pe(e), (T.current = null));
    }, [pe, I, L, N]),
    (0, $.useEffect)(() => {
      if (!C.current) {
        (ae(t.zoom), (w.current = !0));
        try {
          V.setCamera(Ig(u.current, t.zoom));
        } finally {
          w.current = !1;
        }
      }
    }, [t.zoom, V]),
    (0, $.useEffect)(() => {
      V.setCamera(V.getCamera());
    }, [I, L, V]),
    (0, $.useEffect)(() => {
      h.current = z;
    }, [z]),
    (0, $.useEffect)(() => {
      f.current = fe;
    }, [fe]),
    (0, $.useEffect)(() => {
      let e = t.textEditState?.activeBlockId ?? null;
      if (!e) {
        p.current = null;
        return;
      }
      let n = m.current.get(e);
      n !== void 0 && (p.current = n);
    }, [t.textEditState]),
    (0, $.useEffect)(
      () => (
        H.attachContainer(u.current),
        () => {
          H.dispose();
        }
      ),
      [H],
    ),
    (0, $.useEffect)(() => {
      H.updateState({ state: t.textEditState, blocks: he });
    }, [t.textEditState, H, he]),
    (0, $.useEffect)(
      () =>
        sg({
          controller: e,
          getTextLayoutBlocks: () => he,
          getTextEditState: () => t.textEditState,
          getPageRects: () => R,
          getRenderedPages: () => ce,
        }),
      [e, R, ce, t.textEditState, he],
    ),
    (0, $.useEffect)(() => {
      if (k.current !== t.pageIndex) {
        if (((k.current = t.pageIndex), C.current)) {
          O.current = null;
          return;
        }
        zg(R, M, se) !== t.pageIndex && (O.current = t.pageIndex);
      }
    }, [R, M, t.pageIndex, se]),
    (0, $.useEffect)(() => {
      if (C.current) return;
      let n = zg(R, M, se);
      O.current !== t.pageIndex &&
        (n == null || n === t.pageIndex || e.setPageIndex(n, { origin: `scroll` }));
    }, [e, R, ie, M, t.pageIndex, se]),
    (0, $.useEffect)(() => {
      if (!u.current || O.current !== t.pageIndex) return;
      if (zg(R, M, se) === t.pageIndex) {
        O.current = null;
        return;
      }
      let e = R.find((e) => e.pageIndex === t.pageIndex);
      if (!e) return;
      let n = Math.max(0, e.top - (a ? 0 : 32));
      O.current = t.pageIndex;
      let r = pe({ left: u.current.scrollLeft, top: n });
      D.current = !0;
      try {
        V.setCamera({ x: -r.left, y: -r.top, k: V.getCamera().k });
      } finally {
        D.current = !1;
      }
      O.current = null;
    }, [pe, R, a, t.pageIndex, se, V]));
  let ge = (0, $.useCallback)(() => {
      let e = u.current;
      if (!e) return;
      let t = { left: e.scrollLeft, top: e.scrollTop },
        n = E.current;
      if (n && Rg(n, t)) {
        ((E.current = null), ee(t.top));
        return;
      }
      if (((E.current = null), C.current || T.current != null)) return;
      (ee(t.top), (O.current = null), (D.current = !0));
      try {
        V.setCamera(Ig(e, V.getCamera().k));
      } finally {
        D.current = !1;
      }
      let r = V.getCamera(),
        i = { left: Math.max(0, -r.x), top: Math.max(0, -r.y) };
      Rg(t, i) || pe(i);
    }, [pe, V]),
    _e = (0, $.useCallback)(
      (t) => (n) => {
        if (n.pointerType === `touch` || V.shouldSuppressMouseInteractions()) return;
        u.current?.focus();
        let r = Vg(n, t),
          i = Hg(r, t);
        if (!i) {
          e.clearSelection();
          return;
        }
        let a = dg(F.get(t.pageIndex) ?? [], i);
        if (a && a.kind !== `table`) {
          (H.isActive() && H.clear(),
            e.setSelectedObject({ id: a.id, kind: a.kind, pageIndex: t.pageIndex }));
          return;
        }
        if (H.tryPointerDown(r, { shiftKey: n.shiftKey })) {
          ((d.current = !0), ne(!0), (p.current = t.pageIndex));
          try {
            n.currentTarget.setPointerCapture(n.pointerId);
          } catch {}
          return;
        }
        if (a) {
          (H.isActive() && H.clear(),
            e.setSelectedObject({ id: a.id, kind: a.kind, pageIndex: t.pageIndex }));
          return;
        }
        if (H.isActive()) {
          H.clear();
          return;
        }
        e.clearSelection();
      },
      [e, F, H, V],
    ),
    ve = (0, $.useCallback)(
      (e) => (n) => {
        if (n.pointerType === `touch` || V.shouldSuppressMouseInteractions()) {
          n.currentTarget.style.cursor = ``;
          return;
        }
        let r = Vg(n, e),
          i = Hg(r, e);
        if (!d.current) {
          let a = F.get(e.pageIndex) ?? [],
            o = i ? dg(a, i) : null;
          if (o && o.kind !== `table`) {
            n.currentTarget.style.cursor = t.selectedObjectId === o.id ? `move` : `pointer`;
            return;
          }
          if (H.hasTextCursorAtPoint(r)) {
            n.currentTarget.style.cursor = `text`;
            return;
          }
          n.currentTarget.style.cursor = o ? `pointer` : ``;
          return;
        }
        H.pointerMove(r);
      },
      [F, t.selectedObjectId, H, V],
    ),
    ye = (0, $.useCallback)(
      (e) => (e) => {
        if (e.pointerType !== `touch` && d.current) {
          if (e.currentTarget.hasPointerCapture?.(e.pointerId))
            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {}
          ((d.current = !1), ne(!1), H.pointerUp());
        }
      },
      [H],
    ),
    be = (0, $.useCallback)(
      (e) => (t) => {
        if (V.shouldSuppressMouseInteractions() || t.detail < 3) return;
        let n = Vg(t, e);
        H.selectParagraphAtPoint(n) && ((p.current = e.pageIndex), t.preventDefault());
      },
      [H, V],
    ),
    xe = (0, $.useCallback)(
      (e) => (t) => {
        if (V.shouldSuppressMouseInteractions()) return;
        let n = Vg(t, e),
          r = Hg(n, e),
          i = r ? dg(F.get(e.pageIndex) ?? [], r) : null;
        if (o && i?.kind === `chart`) {
          (o({
            artifactKind: `document`,
            elementKind: `chart`,
            elementId: i.id,
            chartId: i.chartId,
            pageIndex: e.pageIndex,
          }),
            t.preventDefault());
          return;
        }
        (H.selectWordAtPoint(n) || H.tryPointerDown(n)) &&
          ((p.current = e.pageIndex), t.preventDefault());
      },
      [F, o, H, V],
    );
  return (0, Wg.jsx)(`div`, {
    ref: u,
    className: `relative h-full min-h-0 overflow-auto outline-none ${a ? `bg-token-bg-primary` : `bg-token-bg-tertiary`}`,
    tabIndex: 0,
    "data-testid": `popcorn-document-stage`,
    style: { overflowAnchor: `none`, touchAction: `none` },
    onKeyDown: (n) => {
      if (r && (n.metaKey || n.ctrlKey) && n.key.toLowerCase() === `f`) {
        (n.preventDefault(), e.openFind());
        return;
      }
      if ((n.key === `Backspace` || n.key === `Delete`) && !H.isActive() && t.selectedObjectId) {
        (e.deleteSelectedObject(), n.preventDefault());
        return;
      }
      if (n.key === `Escape`) {
        if (H.isActive()) {
          (H.clear(), n.preventDefault());
          return;
        }
        if (t.findOpen) {
          (e.closeFind(), n.preventDefault());
          return;
        }
        (t.selectedTextBlockId || t.selectedObjectId) && (e.clearSelection(), n.preventDefault());
        return;
      }
      n.key === `Enter` &&
        !H.isActive() &&
        t.selectedObjectId == null &&
        t.selectedTextBlockId &&
        e.textActivateBlockEnd(t.selectedTextBlockId) &&
        n.preventDefault();
    },
    onScroll: ge,
    children: (0, Wg.jsxs)(`div`, {
      className: `relative min-w-full`,
      style: { height: Math.max(I, se), width: Math.max(L, oe) },
      children: [
        de.map((r) =>
          (0, Wg.jsx)(
            Sg,
            {
              controller: e,
              surfaceId: r.surfaceId,
              rect: r,
              renderScale: ie,
              pageObjectTargets: F.get(r.pageIndex) ?? [],
              selectedObjectId: t.selectedObjectId,
              textEditSession: H,
              overlayVersion: A,
              enableWorker: n,
              onPointerDown: _e(r),
              onPointerMove: ve(r),
              onPointerUp: ye(r),
              onClick: be(r),
              onDoubleClick: xe(r),
            },
            r.surfaceId,
          ),
        ),
        (0, Wg.jsx)(en, {
          canvasRef: u,
          viewportRef: u,
          chartTargetsRef: f,
          getCamera: () => ({ x: 0, y: 0, k: 1 }),
          suppressHover: te,
          screenToWorld: (e) => {
            let t = u.current;
            return { x: e.x + (t?.scrollLeft ?? 0), y: e.y + (t?.scrollTop ?? 0) };
          },
          worldToScreen: (e) => {
            let t = u.current;
            return { x: e.x - (t?.scrollLeft ?? 0), y: e.y - (t?.scrollTop ?? 0) };
          },
          subscribeToCameraChanges: (e) => {
            let t = u.current,
              n = V.subscribeToCameraChanges(e);
            return t
              ? (t.addEventListener(`scroll`, e),
                () => {
                  (n(), t.removeEventListener(`scroll`, e));
                })
              : n;
          },
        }),
      ],
    }),
  });
}
function Dg(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Og(e, t) {
  if (!e) return t;
  let n = e.getBoundingClientRect();
  return {
    width: Math.max(0, e.clientWidth || t.width || n.width),
    height: Math.max(0, e.clientHeight || t.height || n.height),
  };
}
function kg({ pageLayouts: e, zoom: t, viewportWidth: n, bottomScrollReservePx: r, pageless: i }) {
  let a = Dg(t, Kg, qg),
    o = i ? 24 : 40,
    s = i ? 0 : 32,
    c = i ? 0 : 28,
    l = e.reduce((e, t) => Math.max(e, t.width * a), 0),
    u = Math.max(n, l + o * 2),
    d = s,
    f = e.map((e) => {
      let t = Math.max(1, e.width * a),
        n = Math.max(1, e.height * a),
        r = {
          surfaceId: `document-page-${e.pageIndex}`,
          pageIndex: e.pageIndex,
          left: (u - t) / 2,
          top: d,
          width: t,
          height: n,
          logicalWidth: e.width,
          logicalHeight: e.height,
          scale: a,
          pageTop: 0,
        };
      return ((d += n + c), r);
    }),
    p = f.at(-1);
  return {
    zoom: a,
    pageRects: f,
    maxPageWidth: l,
    contentWidth: u,
    contentHeight: (p ? p.top + p.height : 0) + s + Math.max(0, r),
  };
}
function Ag(e) {
  let t = kg(e);
  return {
    width: Math.max(1, t.contentWidth / t.zoom),
    height: Math.max(1, t.contentHeight / t.zoom),
  };
}
function jg(e, t) {
  let n = e.reduce((e, t) => Math.max(e, t.width), 0);
  return n <= 0 || t <= 0 ? Kg : Dg(t / n, Kg, qg);
}
function Mg(e, t) {
  if (t <= 0) return { minX: 0, maxX: 0 };
  if (e.maxPageWidth <= t) {
    let n = (t - e.contentWidth) / 2;
    return { minX: n, maxX: n };
  }
  let n = (e.contentWidth - e.maxPageWidth) / 2;
  return { minX: t - (n + e.maxPageWidth), maxX: -n };
}
function Ng({
  sourceCamera: e,
  sourceScreen: t,
  targetScreen: n,
  nextZoom: r,
  pageLayouts: i,
  viewportWidth: a,
  bottomScrollReservePx: o,
  pageless: s,
}) {
  let c = kg({
      pageLayouts: i,
      zoom: e.k,
      viewportWidth: a,
      bottomScrollReservePx: o,
      pageless: s,
    }),
    l = kg({ pageLayouts: i, zoom: r, viewportWidth: a, bottomScrollReservePx: o, pageless: s }),
    u = Pg({ x: t.x - e.x, y: t.y - e.y }, c, l),
    d = u.x;
  if (c.maxPageWidth <= a && l.maxPageWidth > a) {
    let e = kg({
        pageLayouts: i,
        zoom: jg(i, a),
        viewportWidth: a,
        bottomScrollReservePx: o,
        pageless: s,
      }),
      t = e.pageRects[u.pageSlot],
      r = l.pageRects[u.pageSlot];
    if (t && r) {
      let i = Mg(e, a).minX,
        o = n.x - i;
      d = r.left + ((o - t.left) / e.zoom) * l.zoom;
    }
  }
  return { k: l.zoom, x: n.x - d, y: n.y - u.y };
}
function Pg(e, t, n) {
  let r = Math.min(t.pageRects.length, n.pageRects.length);
  if (r === 0) {
    let r = n.zoom / t.zoom;
    return { x: e.x * r, y: e.y * r, pageSlot: 0 };
  }
  let i = 0,
    a = null;
  for (let o = 0; o < r; o += 1) {
    let s = t.pageRects[o],
      c = n.pageRects[o],
      l = s.top + s.height,
      u = c.top + c.height;
    if (((i = o), e.y < s.top)) {
      if (o === 0) a = c.top + (e.y - s.top);
      else {
        let r = t.pageRects[o - 1],
          i = n.pageRects[o - 1];
        a = i.top + i.height + (e.y - (r.top + r.height));
      }
      break;
    }
    if (e.y <= l) {
      a = c.top + ((e.y - s.top) / t.zoom) * n.zoom;
      break;
    }
    o === r - 1 && (a = u + (e.y - l));
  }
  let o = t.pageRects[i];
  return { x: n.pageRects[i].left + ((e.x - o.left) / t.zoom) * n.zoom, y: a ?? e.y, pageSlot: i };
}
function Fg(e, t) {
  let n = kg({
      pageLayouts: t.pageLayouts,
      zoom: e.k,
      viewportWidth: t.viewportWidth,
      bottomScrollReservePx: t.bottomScrollReservePx,
      pageless: t.pageless,
    }),
    { minX: r, maxX: i } = Mg(n, t.viewportSize.width),
    a = Math.min(0, t.viewportSize.height - n.contentHeight);
  return { ...e, k: n.zoom, x: Dg(e.x, r, i), y: Dg(e.y, a, 0) };
}
function Ig(e, t) {
  return { x: -(e?.scrollLeft ?? 0), y: -(e?.scrollTop ?? 0), k: Dg(t, Kg, qg) };
}
function Lg(e, t) {
  let n = Math.max(0, e.scrollWidth - e.clientWidth),
    r = Math.max(0, e.scrollHeight - e.clientHeight);
  return { left: Dg(t.left, 0, n), top: Dg(t.top, 0, r) };
}
function Rg(e, t) {
  return Math.abs(e.left - t.left) < 0.5 && Math.abs(e.top - t.top) < 0.5;
}
function zg(e, t, n) {
  if (e.length === 0 || n <= 0) return null;
  let r = t + n / 2,
    i = e[0]?.pageIndex ?? null,
    a = 1 / 0;
  for (let t of e) {
    let e = t.top + t.height / 2,
      n = Math.abs(e - r);
    n < a && ((a = n), (i = t.pageIndex));
  }
  return i;
}
function Bg(e, t) {
  let n = t.scale,
    r = { ...e, anchorX: t.left + e.anchorX * n, anchorY: t.top + e.anchorY * n };
  return (
    e.x !== void 0 && (r.x = t.left + e.x * n),
    e.y !== void 0 && (r.y = t.top + e.y * n),
    e.width !== void 0 && (r.width = e.width * n),
    e.height !== void 0 && (r.height = e.height * n),
    e.cx !== void 0 && (r.cx = t.left + e.cx * n),
    e.cy !== void 0 && (r.cy = t.top + e.cy * n),
    e.rOuter !== void 0 && (r.rOuter = e.rOuter * n),
    e.rInner !== void 0 && (r.rInner = e.rInner * n),
    r
  );
}
function Vg(e, t) {
  let n = jt(e.currentTarget, e.clientX, e.clientY);
  return { x: t.left + n.x, y: t.top + n.y };
}
function Hg(e, t) {
  let n = e.x - t.left,
    r = e.y - t.top;
  return n < 0 || r < 0 || n > t.width || r > t.height
    ? null
    : { x: n / t.scale, y: t.pageTop + r / t.scale };
}
function Ug(e, t, n, r, i) {
  let a = (t ? r.get(t) : void 0) ?? n;
  if (a == null) return null;
  let o = i.get(a);
  if (!o) return null;
  let s = Hg(e, o);
  return s ? { pageIndex: a, pagePoint: s } : null;
}
var $,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg = e(() => {
    (($ = t(n())),
      Qt(),
      Ht(),
      Ft(),
      Cn(),
      Rt(),
      ag(),
      cg(),
      pg(),
      hg(),
      Tg(),
      (Wg = c()),
      (Gg = 1024),
      (Kg = 0.25),
      (qg = 3),
      (Jg = 1e-4),
      (Yg = 1600));
  });
function Zg({
  controller: e,
  fileMenuContent: t,
  headerTitleContent: n,
  headerRightContent: r,
  zoomToFitLabel: i,
  renderHeaderZoomControl: a,
  title: o,
  className: s,
  onClose: c,
  enableWorker: l = !0,
  enableFocusedView: u = !1,
  enablePageNavigation: d,
  theme: f = `web`,
  artifactSearchEnabled: p = !0,
  bottomScrollReservePx: m,
  pageless: h = !1,
}) {
  let g = h ? `pageless` : `paged`,
    _ = yt(
      e,
      (0, n_.useCallback)(() => $h({ initialLayoutMode: g }), [g]),
    ),
    v = (0, n_.useMemo)(() => qn(), []);
  if (!_) return null;
  let y = (0, n_.useSyncExternalStore)(
      (e) => _.subscribe(e),
      () => _.getSnapshot(),
      () => _.getSnapshot(),
    ),
    b = (0, n_.useSyncExternalStore)(
      (e) => v.subscribe(e),
      () => v.getSnapshot(),
      () => v.getSnapshot(),
    ),
    x = u ? b.activeView : null,
    [S, C] = (0, n_.useState)(!0),
    w = (0, n_.useRef)(null),
    T = xn(w),
    E = w.current?.clientWidth || T.width,
    D = w.current?.clientHeight || T.height,
    O =
      E > 0 && y.pageLayouts.length > 0
        ? Qg({ pageLayouts: y.pageLayouts, viewportWidth: E })
        : null,
    k = O != null && i != null,
    A = (0, n_.useCallback)(
      (e) => {
        (C(!1), _.setZoom(e));
      },
      [_],
    );
  (0, n_.useEffect)(() => {
    _.setLayoutMode(g);
  }, [_, g]);
  let j = k
    ? {
        label: i,
        selected: S && Math.abs(y.zoom - O) < o_,
        onSelect: () => {
          let e = e_({
            pageIndex: y.pageIndex,
            pageLayouts: y.pageLayouts,
            viewportHeight: D,
            zoom: O,
          });
          (C(!0),
            _.setZoom(O),
            e != null &&
              window.requestAnimationFrame(() => {
                t_(w.current, e);
              }));
        },
      }
    : void 0;
  (0, n_.useEffect)(() => {
    !S || !k || Math.abs(y.zoom - O) < o_ || _.setZoom(O);
  }, [k, _, O, S, y.zoom]);
  let M =
    a?.({
      fitOption: j,
      onZoomPercentChange: (e) => {
        (C(!1), _.setZoom(e / 100));
      },
      triggerTestId: `popcorn-document-zoom-select`,
      zoomPercent: Math.round(y.zoom * 100),
    }) ??
    (0, r_.jsx)(St, {
      zoom: y.zoom,
      onZoomChange: A,
      fitOption: j,
      testId: `popcorn-document-zoom-select`,
    });
  return (
    (0, n_.useEffect)(() => {
      p || !y.findOpen || _.closeFind();
    }, [p, _, y.findOpen]),
    (0, r_.jsx)(hn, {
      artifactLabel: `Document`,
      title: o ?? y.title,
      className: s,
      header: (0, r_.jsx)(_t, {
        title: o ?? y.title,
        headerTitleContent: n,
        closeLabel: `Close document`,
        fileMenuContent: t,
        onClose: c,
        testId: `popcorn-document-header`,
        compactTitle: f === `codex`,
        navigationContent: x ? (0, r_.jsx)(vn, { onClick: () => v.close() }) : null,
        centeredContent:
          !x && !h && (d ?? f === `codex`) && y.pageCount > 1
            ? (0, r_.jsx)(nn, {
                currentIndex: y.pageIndex,
                totalCount: y.pageCount,
                itemLabel: `page`,
                onChangeIndex: (e) => _.setPageIndex(e),
                testId: `popcorn-document-page-navigation`,
              })
            : null,
        actions: (0, r_.jsxs)(It, {
          compact: f === `codex`,
          testId: `popcorn-document-header-action-row`,
          children: [M, r],
        }),
        icon: (0, r_.jsx)(Dt, {
          className: `shrink-0`,
          "data-testid": `popcorn-document-file-icon`,
        }),
      }),
      children: (0, r_.jsxs)(`div`, {
        className: `relative h-full min-h-0`,
        children: [
          p
            ? (0, r_.jsx)(Zt, {
                open: y.findOpen,
                query: y.findQuery,
                summary: y.findSummary,
                focusToken: y.findFocusToken,
                onQueryChange: (e) => _.setFindQuery(e),
                onNavigatePrevious: () => _.goToPreviousFindResult(),
                onNavigateNext: () => _.goToNextFindResult(),
                onClose: () => _.closeFind(),
              })
            : null,
          (0, r_.jsx)(Eg, {
            controller: _,
            snapshot: y,
            enableWorker: l,
            artifactSearchEnabled: p,
            bottomScrollReservePx: m,
            pageless: h,
            onGestureZoomChange: A,
            onOpenFocusedElement: u ? (e) => v.open(e) : void 0,
            scrollContainerRef: w,
          }),
          x
            ? (0, r_.jsx)(Rn, {
                controller: _,
                view: x,
                modelVersion: y.documentVersion,
                onSourceViewModeChange: (e) => v.setSourceViewMode(e),
              })
            : null,
        ],
      }),
    })
  );
}
function Qg({ pageLayouts: e, viewportWidth: t }) {
  let n = e.reduce((e, t) => Math.max(e, t.width), 0);
  return n <= 0 ? 1 : $g((t - 80) / n);
}
function $g(e) {
  return Math.max(i_, Math.min(a_, e));
}
function e_({ pageIndex: e, pageLayouts: t, viewportHeight: n, zoom: r }) {
  let i = 32;
  for (let a of t) {
    let t = Math.max(1, a.height * r);
    if (a.pageIndex === e) return Math.max(0, i + t / 2 - n / 2);
    i += t + 28;
  }
  return null;
}
function t_(e, t) {
  if (e != null) {
    if (typeof e.scrollTo == `function`) {
      e.scrollTo({ top: t, behavior: `auto` });
      return;
    }
    e.scrollTop = t;
  }
}
var n_,
  r_,
  i_,
  a_,
  o_,
  s_ = e(() => {
    ((n_ = t(n())),
      $t(),
      zt(),
      _n(),
      xt(),
      tn(),
      Lt(),
      bt(),
      bn(),
      Kn(),
      Xn(),
      Cn(),
      rg(),
      Xg(),
      (r_ = c()),
      (i_ = 0.25),
      (a_ = 3),
      (o_ = 1e-4));
  });
function c_() {
  return Fm().toProto();
}
function l_({
  className: e,
  documentProtoVersion: t = 0,
  headerTitleContent: n,
  headerRightContent: r,
  zoomToFitLabel: a,
  renderHeaderZoomControl: o,
  initialDocumentProto: s,
  initialSourceBytes: c,
  initialSourceFormat: l = `docx`,
  initialPageIndex: u,
  initialZoom: d,
  onImportReady: f,
  onImportError: p,
  title: m = `codex-popcorn-demo.docx`,
  theme: h = `codex`,
  isEditing: g = !1,
  bottomScrollReservePx: _,
  annotationsEnabled: v = !1,
  drawingAnnotationsEnabled: y = !1,
  enablePageNavigation: b,
  navigationTarget: x,
  artifactSearchEnabled: S = !1,
  commentThreadsEnabled: C = !1,
}) {
  let w = (0, u_.useRef)(t),
    T = (0, u_.useRef)(null),
    E = yt(
      void 0,
      () =>
        new tg({
          documentProto: c == null ? (s ?? c_()) : void 0,
          bootstrapSource: c == null ? void 0 : { kind: `source-bytes`, format: l, bytes: Gt(c) },
          initialPageIndex: u,
          initialZoom: d,
          onImportReady: f,
          onImportError: p,
        }),
    );
  return (
    (0, u_.useEffect)(() => {
      E && c == null && t !== w.current && ((w.current = t), E.replaceFromProto(s ?? c_()));
    }, [E, t, s, c]),
    (0, u_.useEffect)(() => {
      !E ||
        x == null ||
        (x.requestId !== T.current &&
          ((T.current = x.requestId), E.setPageIndex(x.pageNumber - 1, { origin: `navigation` })));
    }, [E, x]),
    E
      ? (0, d_.jsx)(`section`, {
          className: i(`no-drag h-full min-h-0 bg-token-bg-primary`, e),
          "data-codex-popcorn-editor": !0,
          "data-testid": `popcorn-electron-document-panel`,
          children: (0, d_.jsx)(Zg, {
            className: `h-full min-h-0`,
            controller: E,
            headerTitleContent: n,
            headerRightContent: r,
            zoomToFitLabel: a,
            renderHeaderZoomControl: o,
            title: m,
            theme: h,
            isEditing: g,
            bottomScrollReservePx: _,
            annotationsEnabled: v,
            drawingAnnotationsEnabled: y,
            enablePageNavigation: b,
            artifactSearchEnabled: S,
            commentThreadsEnabled: C,
          }),
        })
      : null
  );
}
var u_, d_;
e(() => {
  (p(), (u_ = t(n())), s_(), rg(), Bh(), Vt(), bt(), (d_ = c()));
})();
export { l_ as PopcornElectronDocumentPanel };
//# sourceMappingURL=PopcornElectronDocumentPanel-5d398f8ff53f.js.map
