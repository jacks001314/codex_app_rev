import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Cot as r,
  DDt as i,
  FD as a,
  IDt as o,
  Ixt as s,
  JC as c,
  ND as l,
  Pxt as u,
  VDt as d,
  Vxt as f,
  _Mt as p,
  c3 as m,
  cz as h,
  gMt as g,
  jDt as _,
  qC as v,
  s3 as y,
  sz as b,
  t3 as x,
  vzt as S,
  wot as C,
  xMt as w,
  yzt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  E6t as E,
  Fin as ee,
  G6t as D,
  HMr as te,
  Hin as O,
  QDr as k,
  T6t as A,
  XDr as ne,
  _fn as j,
  azn as M,
  czn as N,
  fur as re,
  hp as ie,
  mp as ae,
  nzn as oe,
  ozn as P,
  pur as se,
  szn as ce,
  tNr as F,
  tzn as I,
  yVn as le,
} from "./app-initial-5851df3f6cb1.js";
import { m as ue, p as L } from "./chartLayoutContext-9de6b5175cfc.js";
import {
  Ct as de,
  D as fe,
  F as pe,
  N as me,
  P as he,
  Q as ge,
  St as _e,
  Y as ve,
  a as ye,
  dn as be,
  j as R,
  nn as xe,
  o as Se,
  r as Ce,
  rn as we,
  un as Te,
} from "./CartesianChart-f1064596079e.js";
import { a as Ee, r as z } from "./visualization-theme-bedd32a367a0.js";
function De(e, t, n = !1) {
  let r = Math.abs(e);
  return t.formatNumber(e, {
    style: `currency`,
    currency: `USD`,
    notation: n ? `compact` : `standard`,
    minimumFractionDigits: n && r >= 1e3 ? 0 : 2,
    maximumFractionDigits: 2,
    maximumSignificantDigits: r > 0 && r < 0.01 ? 3 : void 0,
  });
}
function Oe() {
  return (Oe = e(() => {}))();
}
function ke(e) {
  let t = (0, H.c)(29),
    {
      hideValues: n,
      orientation: r,
      ticks: i,
      maximumValue: a,
      minimumValue: o,
      showPercentageUnit: s,
      unit: c,
    } = e,
    l = n !== void 0 && n,
    u = r === void 0 ? `left` : r,
    f = o === void 0 ? 0 : o,
    p = s === void 0 || s,
    m = d(),
    h = f,
    g = a;
  if (p && c === `percent`) g = 100;
  else if (a != null && (f !== 0 || a !== 0)) {
    let e;
    if (t[0] !== l || t[1] !== a || t[2] !== f || t[3] !== c) {
      let n = Te([f, a], 4, c === `credits` || c === `usd` || l);
      ((h = n[0] ?? f),
        (e = n.at(-1) ?? a),
        (t[0] = l),
        (t[1] = a),
        (t[2] = f),
        (t[3] = c),
        (t[4] = e),
        (t[5] = h));
    } else ((e = t[4]), (h = t[5]));
    g = e;
  }
  let _ = c === `credits` || c === `usd` || l,
    v;
  t[6] !== g || t[7] !== h
    ? ((v = g == null ? void 0 : [h, g]), (t[6] = g), (t[7] = h), (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] === u
    ? (y = t[10])
    : ((y = {
        className: `text-xs`,
        fill: `var(--color-text-secondary)`,
        textAnchor: `start`,
        ...(u === `left` ? { x: 0 } : {}),
      }),
      (t[9] = u),
      (t[10] = y));
  let b;
  t[11] !== p || t[12] !== i || t[13] !== c
    ? ((b = i ?? (p && c === `percent` ? [0, 33.333333333333336, 66.66666666666667, 100] : void 0)),
      (t[11] = p),
      (t[12] = i),
      (t[13] = c),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] !== l || t[16] !== m || t[17] !== p || t[18] !== c
    ? ((x = (e) =>
        l
          ? ``
          : p && c === `percent`
            ? m.formatNumber(e / 100, { maximumFractionDigits: 0, style: `percent` })
            : c === `usd`
              ? De(e, m, !0)
              : m.formatNumber(e, { maximumFractionDigits: e < 1 ? 2 : 1, notation: `compact` })),
      (t[15] = l),
      (t[16] = m),
      (t[17] = p),
      (t[18] = c),
      (t[19] = x))
    : (x = t[19]);
  let S = l ? 0 : 56,
    C;
  return (
    t[20] !== l ||
    t[21] !== u ||
    t[22] !== S ||
    t[23] !== _ ||
    t[24] !== v ||
    t[25] !== y ||
    t[26] !== b ||
    t[27] !== x
      ? ((C = (0, U.jsx)(ye, {
          orientation: u,
          allowDecimals: _,
          axisLine: !1,
          hide: l,
          domain: v,
          interval: 0,
          tick: y,
          tickCount: 4,
          ticks: b,
          tickFormatter: x,
          tickLine: !1,
          width: S,
        })),
        (t[20] = l),
        (t[21] = u),
        (t[22] = S),
        (t[23] = _),
        (t[24] = v),
        (t[25] = y),
        (t[26] = b),
        (t[27] = x),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
function B(e) {
  let t = (0, H.c)(9),
    { centerLabels: n, index: r, payload: i, tickFormatter: a, visibleTicksCount: o, x: s, y: c } = e,
    l = n !== void 0 && n,
    u = `middle`;
  !l && r === 0 ? (u = `start`) : !l && r === o - 1 && (u = `end`);
  let d;
  t[0] !== r || t[1] !== i.value || t[2] !== a
    ? ((d = a == null ? i.value : a(i.value, r)), (t[0] = r), (t[1] = i.value), (t[2] = a), (t[3] = d))
    : (d = t[3]);
  let f;
  return (
    t[4] !== d || t[5] !== u || t[6] !== s || t[7] !== c
      ? ((f = (0, U.jsx)(`text`, {
          className: `text-xs`,
          dy: 12,
          fill: `var(--color-text-secondary)`,
          textAnchor: u,
          x: s,
          y: c,
          children: d,
        })),
        (t[4] = d),
        (t[5] = u),
        (t[6] = s),
        (t[7] = c),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
function V(e) {
  let t = (0, H.c)(6),
    { height: n, points: r, width: i, x: a, y: o } = e,
    s = r?.[0],
    c;
  t[0] === r ? (c = t[1]) : ((c = r?.at(-1)), (t[0] = r), (t[1] = c));
  let l = c,
    u,
    d,
    f;
  if (s != null && l != null) ((u = s.x), (d = s.y), (f = l.y));
  else if (a != null && o != null && i != null && n != null) ((u = a + i / 2), (d = o), (f = o + n));
  else return null;
  let p;
  return (
    t[2] !== f || t[3] !== d || t[4] !== u
      ? ((p = (0, U.jsx)(`line`, {
          x1: u,
          x2: u,
          y1: d,
          y2: f,
          pointerEvents: `none`,
          stroke: `var(--color-border-strong)`,
        })),
        (t[2] = f),
        (t[3] = d),
        (t[4] = u),
        (t[5] = p))
      : (p = t[5]),
    p
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = S()), _(), be(), Se(), (U = w()));
  }))();
}
function Ae(e, t, n) {
  G(
    e,
    t,
    M.CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_DATE_RANGE_CHANGED,
    n === 7
      ? N.CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SEVEN_DAYS
      : N.CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_THIRTY_DAYS,
  );
}
function je(e, t, n) {
  G(
    e,
    t,
    M.CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_BREAKDOWN_CHANGED,
    {
      model: N.CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_MODEL,
      product: N.CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_PRODUCT,
      surface: N.CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_SURFACE,
    }[n],
  );
}
function Me(e, t, n) {
  G(
    e,
    t,
    M.CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_SERIES_FILTER_CHANGED,
    n == null
      ? N.CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SERIES_CLEARED
      : N.CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SERIES_SELECTED,
  );
}
function G(e, t, n, r) {
  e != null && k(e, ce, { chart: q[t], action: n, selection: r });
}
var K, q, Ne;
function J() {
  return (J = e(() => {
    (le(),
      (K = T()),
      ne(),
      (q = {
        usage_history: P.CHATGPT_CODEX_USAGE_ANALYTICS_CHART_USAGE_HISTORY,
        tokens: P.CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOKENS,
        product_activity: P.CHATGPT_CODEX_USAGE_ANALYTICS_CHART_PRODUCT_ACTIVITY,
        tool_activity: P.CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOOL_ACTIVITY,
        code_review_priority: P.CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_PRIORITY,
        code_review_reactions: P.CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_REACTIONS,
        code_review: P.CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW,
      }),
      (Ne = (0, K.createContext)(null)));
  }))();
}
function Pe(e) {
  let t = (0, Y.c)(3),
    { usd: n } = e,
    r = n > 0 && n < 0.01 ? 6 : 2,
    a;
  return (
    t[0] !== r || t[1] !== n
      ? ((a = (0, X.jsx)(o, {
          id: `settings.usage.billing.estimatedSpend`,
          defaultMessage: `Est. {value}`,
          description: `Estimated US dollar cost for a credit usage amount`,
          values: {
            value: (0, X.jsx)(i, {
              value: n,
              style: `currency`,
              currency: `USD`,
              minimumFractionDigits: 2,
              maximumFractionDigits: r,
            }),
          },
        })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
var Y, X;
function Fe() {
  return (Fe = e(() => {
    ((Y = S()), _(), (X = w()));
  }))();
}
function Ie(e) {
  let t = (0, Le.c)(4),
    { color: n, index: r, variant: i } = e,
    a = i === void 0 ? `dot` : i,
    o = n ?? z[r % z.length];
  if (a === `bar`) {
    let e;
    return (
      t[0] === o
        ? (e = t[1])
        : ((e = (0, Re.jsx)(`svg`, {
            "aria-hidden": `true`,
            className: `h-10 w-1 shrink-0`,
            viewBox: `0 0 4 40`,
            children: (0, Re.jsx)(`rect`, { width: 4, height: 40, rx: 2, fill: o }),
          })),
          (t[0] = o),
          (t[1] = e)),
      e
    );
  }
  let s;
  return (
    t[2] === o
      ? (s = t[3])
      : ((s = (0, Re.jsx)(`svg`, {
          "aria-hidden": `true`,
          className: `size-2.5 shrink-0`,
          viewBox: `0 0 10 10`,
          children: (0, Re.jsx)(`circle`, { cx: 5, cy: 5, fill: o, r: 5 }),
        })),
        (t[2] = o),
        (t[3] = s)),
    s
  );
}
var Le, Re;
function ze() {
  return (ze = e(() => {
    ((Le = S()), Ee(), (Re = w()));
  }))();
}
function Be(e) {
  let t = (0, Z.c)(73),
    {
      actions: n,
      analyticsChart: r,
      balanceHistory: a,
      totalDescription: s,
      activeSeriesKey: c,
      children: l,
      emptyMessage: u,
      dailyLegend: d,
      estimatedSpendUsd: f,
      fillChartHeight: p,
      hasData: m,
      hideTotal: h,
      onChangeSeriesIsolation: _,
      onHoverSeriesChange: y,
      onToggleSeries: x,
      preservePopulatedCardLayout: S,
      consumerAnalytics: C,
      scope: w,
      hiddenSeriesKeys: T,
      series: E,
      singleSelection: ee,
      status: D,
      title: te,
      total: O,
      totalLabel: k,
    } = e,
    A = a !== void 0 && a,
    ne = p !== void 0 && p,
    j = h !== void 0 && h,
    M = S !== void 0 && S,
    N = C !== void 0 && C,
    re = ee !== void 0 && ee,
    ie = (0, Xe.use)(Ne)?.scope ?? null,
    oe = (0, Xe.useRef)(null),
    P = (0, Xe.useRef)(null),
    se = (0, Xe.useRef)(null),
    ce = () => {
      ((P.current = null), y?.(se.current));
    },
    F = N && ne,
    I = F && j && te == null,
    le = D.isLoading && !m,
    ue = !!D.isUpdating,
    L = le || ue,
    de = E.length > 0 || x != null,
    fe = d != null && !m && !D.isLoading;
  if (
    (O != null || (D.isLoading && D.preserveEmptyLayout)) &&
    !m &&
    !D.isError &&
    u != null &&
    !M &&
    (!D.isLoading || D.preserveEmptyLayout)
  ) {
    let e = !D.reduceMotion && `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
      n;
    t[0] === e ? (n = t[1]) : ((n = g(`flex min-h-16 flex-col justify-center`, e)), (t[0] = e), (t[1] = n));
    let r;
    t[2] !== u || t[3] !== D.isLoading || t[4] !== D.reduceMotion
      ? ((r = D.isLoading ? (0, Q.jsx)(Ue, { compact: !0, reduceMotion: D.reduceMotion }) : u),
        (t[2] = u),
        (t[3] = D.isLoading),
        (t[4] = D.reduceMotion),
        (t[5] = r))
      : (r = t[5]);
    let i;
    t[6] === r
      ? (i = t[7])
      : ((i = (0, Q.jsx)(ae, { layout: `settings-row`, children: r })), (t[6] = r), (t[7] = i));
    let a;
    return (
      t[8] !== i || t[9] !== n
        ? ((a = (0, Q.jsx)(v, { children: (0, Q.jsx)(`div`, { className: n, children: i }) })),
          (t[8] = i),
          (t[9] = n),
          (t[10] = a))
        : (a = t[10]),
      a
    );
  }
  let pe = x == null ? `span` : `button`,
    me = E.map(He),
    he = d == null ? me : (0, Ye.default)(me, Ve, `desc`),
    ge =
      d == null
        ? `flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs leading-4 text-secondary`
        : `-mx-2 grid h-25 grid-cols-2 content-start gap-x-6 gap-y-1 overflow-y-auto px-2 @lg:grid-cols-3`,
    _e = !N && `mt-2`,
    ve = !m && `min-h-4`,
    ye = !D.reduceMotion && `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
    be = ue && `opacity-60`,
    R;
  t[11] !== ye || t[12] !== be || t[13] !== ge || t[14] !== _e || t[15] !== ve
    ? ((R = g(ge, _e, ve, ye, be)),
      (t[11] = ye),
      (t[12] = be),
      (t[13] = ge),
      (t[14] = _e),
      (t[15] = ve),
      (t[16] = R))
    : (R = t[16]);
  let xe = d == null ? void 0 : ce,
    Se = he.map((e) => {
      let { entry: t, index: n } = e,
        a = E.length > 1 && !T?.has(t.key) && E.every((e) => e.key === t.key || T?.has(e.key)),
        s = d?.shares?.get(t.key),
        l;
      l =
        s == null
          ? (0, Q.jsx)(o, {
              id: `consumerUsage.legend.unavailableShare`,
              defaultMessage: `-`,
              description: `Placeholder when the selected day has no available usage share`,
            })
          : s > 0 && s < 0.001
            ? (0, Q.jsx)(o, {
                id: `consumerUsage.legend.belowPrecision`,
                defaultMessage: `<{threshold}`,
                description: `A positive share of usage smaller than 0.1 percent, displayed as less than the smallest shown percentage rather than zero`,
                values: {
                  threshold: (0, Q.jsx)(i, { value: 0.001, style: `percent`, maximumFractionDigits: 1 }),
                },
              })
            : (0, Q.jsx)(i, { value: s, style: `percent`, maximumFractionDigits: 1 });
      let u = (0, Q.jsxs)(
        pe,
        {
          className: g(
            d == null
              ? `inline-flex items-center gap-1`
              : `-mx-2 flex h-12 min-w-0 items-center gap-2.5 rounded-md px-2 text-start hover:bg-primary-ghost-hover focus-visible:bg-primary-ghost-hover`,
            x != null && `cursor-interaction`,
            c != null && c !== t.key && `opacity-40`,
            T?.has(t.key) && `opacity-50`,
          ),
          "aria-pressed": x == null ? void 0 : !T?.has(t.key) && (!re || !!T?.size),
          onClick:
            x == null
              ? void 0
              : (e) => {
                  (_ == null || e.detail === 0 || e.detail % 2 == 1) &&
                    ((oe.current = a ? t.key : null),
                    x(t.key),
                    re && r != null && E.length > 1 && Me(ie, r, a ? null : t.key));
                },
          onDoubleClick:
            _ == null
              ? void 0
              : () => {
                  let e = oe.current === t.key ? null : t.key;
                  (_(e), !re && r != null && E.length > 1 && Me(ie, r, e));
                },
          onPointerEnter:
            d == null
              ? void 0
              : (e) => {
                  e.pointerType !== `touch` && ((P.current = t.key), y?.(t.key));
                },
          onPointerLeave: d == null ? void 0 : ce,
          onPointerCancel: d == null ? void 0 : ce,
          onFocus:
            d == null
              ? void 0
              : (e) => {
                  e.currentTarget.matches(`:focus-visible`) && ((se.current = t.key), y?.(t.key));
                },
          onBlur:
            d == null
              ? void 0
              : () => {
                  ((se.current = null), y?.(P.current));
                },
          type: x == null ? void 0 : `button`,
          children: [
            (0, Q.jsx)(Ie, { color: t.color, index: n, variant: d == null ? `dot` : `bar` }),
            d == null
              ? t.name
              : (0, Q.jsxs)(`span`, {
                  className: `flex min-w-0 flex-col`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `truncate text-xs leading-normal font-normal text-default`,
                      children: t.name,
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `text-lg leading-snug font-medium text-default tabular-nums`,
                      children: l,
                    }),
                  ],
                }),
            !N && re && t.total != null
              ? (0, Q.jsx)(`span`, { children: (0, Q.jsx)(i, { value: t.total }) })
              : null,
          ],
        },
        t.key,
      );
      return d != null || (t.tooltip == null && _ == null)
        ? u
        : (0, Q.jsx)(
            b,
            {
              tooltipContent: (0, Q.jsxs)(Q.Fragment, {
                children: [
                  t.tooltip,
                  _ == null
                    ? null
                    : (0, Q.jsx)(`div`, {
                        children: a
                          ? (0, Q.jsx)(o, {
                              id: `settings.usage.billing.chart.legend.showAll`,
                              defaultMessage: `Double-click to show all`,
                              description: `Chart legend tooltip explaining how to restore every series after isolating one`,
                            })
                          : (0, Q.jsx)(o, {
                              id: `settings.usage.billing.chart.legend.isolate`,
                              defaultMessage: `Double-click to isolate`,
                              description: `Chart legend tooltip explaining how to show only this series`,
                            }),
                      }),
                ],
              }),
              children: u,
            },
            t.key,
          );
    }),
    Ce;
  t[17] !== R || t[18] !== xe || t[19] !== Se
    ? ((Ce = (0, Q.jsx)(`div`, { className: R, onScroll: xe, children: Se })),
      (t[17] = R),
      (t[18] = xe),
      (t[19] = Se),
      (t[20] = Ce))
    : (Ce = t[20]);
  let we = Ce,
    Te;
  t[21] !== N || t[22] !== we || t[23] !== D.reduceMotion
    ? ((Te = N ? (0, Q.jsx)(Je, { reduceMotion: D.reduceMotion, children: we }) : we),
      (t[21] = N),
      (t[22] = we),
      (t[23] = D.reduceMotion),
      (t[24] = Te))
    : (Te = t[24]);
  let Ee = Te,
    z = A ? `gap-3` : `gap-2`,
    De = I ? `pt-6` : `pt-3.5`,
    Oe = !F && (!N || de ? `min-h-64` : `min-h-60`),
    ke = !D.reduceMotion && `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
    B;
  t[25] !== z || t[26] !== De || t[27] !== Oe || t[28] !== ke
    ? ((B = g(`@container flex flex-col px-4 pb-3 select-none`, z, De, Oe, ke)),
      (t[25] = z),
      (t[26] = De),
      (t[27] = Oe),
      (t[28] = ke),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== n ||
  t[31] !== A ||
  t[32] !== f ||
  t[33] !== j ||
  t[34] !== le ||
  t[35] !== L ||
  t[36] !== w ||
  t[37] !== D.reduceMotion ||
  t[38] !== te ||
  t[39] !== O ||
  t[40] !== s ||
  t[41] !== k
    ? ((V =
        te != null || n != null || !j || k != null || L
          ? (0, Q.jsxs)(`div`, {
              className: g(`flex flex-col gap-0`, !A && `mb-2`),
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex flex-wrap items-center justify-between gap-2`,
                  children: [
                    (0, Q.jsxs)(`span`, {
                      className: g(`text-xs leading-4 text-default`, L && `inline-flex items-center gap-2`),
                      children: [
                        (0, Q.jsx)(`span`, {
                          className: g(
                            !D.reduceMotion &&
                              `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
                            L && `opacity-60`,
                          ),
                          children: te,
                        }),
                        L ? (0, Q.jsx)(Ge, { reduceMotion: D.reduceMotion }) : null,
                      ],
                    }),
                    n,
                  ],
                }),
                !j || k != null
                  ? (0, Q.jsxs)(`div`, {
                      className: g(
                        `flex items-baseline gap-1`,
                        !D.reduceMotion &&
                          `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
                        L && `opacity-60`,
                      ),
                      children: [
                        le
                          ? (0, Q.jsx)(`div`, { "aria-hidden": !0, className: `h-8` })
                          : (0, Q.jsx)(`span`, {
                              className: `heading-lg font-medium text-default`,
                              children:
                                k ??
                                (O == null
                                  ? null
                                  : (0, Q.jsx)(i, {
                                      value: O,
                                      notation: w === `workspace` ? `compact` : `standard`,
                                      maximumFractionDigits: w === `workspace` && O < 1e3 ? 0 : 1,
                                    })),
                            }),
                        f == null
                          ? null
                          : (0, Q.jsx)(`span`, {
                              className: `text-xs leading-4 text-secondary`,
                              children: (0, Q.jsx)(Pe, { usd: f }),
                            }),
                      ],
                    })
                  : null,
                s == null
                  ? null
                  : (0, Q.jsx)(`div`, { className: `text-xs leading-4 text-secondary`, children: s }),
              ],
            })
          : null),
      (t[30] = n),
      (t[31] = A),
      (t[32] = f),
      (t[33] = j),
      (t[34] = le),
      (t[35] = L),
      (t[36] = w),
      (t[37] = D.reduceMotion),
      (t[38] = te),
      (t[39] = O),
      (t[40] = s),
      (t[41] = k),
      (t[42] = V))
    : (V = t[42]);
  let H = d == null ? `contents` : `relative flex flex-col gap-2`,
    U = N && !fe && `relative z-10`,
    W;
  t[43] !== A ||
  t[44] !== F ||
  t[45] !== L ||
  t[46] !== I ||
  t[47] !== x ||
  t[48] !== M ||
  t[49] !== D.reduceMotion ||
  t[50] !== U
    ? ((W = g(
        U,
        F ? g(`shrink-0`, { "h-48": A, "h-44": !A && I, "h-36": !A && !I }) : `flex-1`,
        M && x != null ? `min-h-36` : `min-h-24`,
        !D.reduceMotion && `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
        L && `opacity-60`,
      )),
      (t[43] = A),
      (t[44] = F),
      (t[45] = L),
      (t[46] = I),
      (t[47] = x),
      (t[48] = M),
      (t[49] = D.reduceMotion),
      (t[50] = U),
      (t[51] = W))
    : (W = t[51]);
  let Ae = ue || void 0,
    je = fe ? `absolute inset-0` : `contents`,
    G;
  t[52] !== l || t[53] !== u || t[54] !== ne || t[55] !== m || t[56] !== D
    ? ((G = (0, Q.jsx)(qe, { emptyMessage: u, fillChartHeight: ne, hasData: m, status: D, children: l })),
      (t[52] = l),
      (t[53] = u),
      (t[54] = ne),
      (t[55] = m),
      (t[56] = D),
      (t[57] = G))
    : (G = t[57]);
  let K;
  t[58] !== je || t[59] !== G
    ? ((K = (0, Q.jsx)(`div`, { className: je, children: G })), (t[58] = je), (t[59] = G), (t[60] = K))
    : (K = t[60]);
  let q;
  t[61] !== W || t[62] !== Ae || t[63] !== K
    ? ((q = (0, Q.jsx)(`div`, { className: W, "aria-busy": Ae, children: K })),
      (t[61] = W),
      (t[62] = Ae),
      (t[63] = K),
      (t[64] = q))
    : (q = t[64]);
  let J = (m && (!N || E.length > 0)) || (M && x != null) ? Ee : null,
    Y;
  t[65] !== H || t[66] !== q || t[67] !== J
    ? ((Y = (0, Q.jsxs)(`div`, { className: H, children: [q, J] })),
      (t[65] = H),
      (t[66] = q),
      (t[67] = J),
      (t[68] = Y))
    : (Y = t[68]);
  let X;
  return (
    t[69] !== B || t[70] !== V || t[71] !== Y
      ? ((X = (0, Q.jsx)(v, {
          contentOverflow: `visible`,
          children: (0, Q.jsxs)(`div`, { className: B, children: [V, Y] }),
        })),
        (t[69] = B),
        (t[70] = V),
        (t[71] = Y),
        (t[72] = X))
      : (X = t[72]),
    X
  );
}
function Ve(e) {
  let { entry: t } = e;
  return t.total ?? -1 / 0;
}
function He(e, t) {
  return { entry: e, index: t };
}
function Ue(e) {
  let t = (0, Z.c)(4),
    { compact: n, reduceMotion: r } = e,
    i = n !== void 0 && n,
    a = r !== void 0 && r;
  if (i) {
    let e;
    return (t[0] === a ? (e = t[1]) : ((e = (0, Q.jsx)(Ge, { reduceMotion: a })), (t[0] = a), (t[1] = e)), e);
  }
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(`div`, { className: `w-11 shrink-0` })), (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Q.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `flex h-36 gap-3`,
          children: [
            o,
            (0, Q.jsx)(`svg`, {
              className: `min-w-0 flex-1`,
              preserveAspectRatio: `none`,
              viewBox: `0 0 100 144`,
              children: [4, 43, 83, 122].map(We),
            }),
          ],
        })),
        (t[3] = s))
      : (s = t[3]),
    s
  );
}
function We(e) {
  return (0, Q.jsx)(
    `line`,
    {
      stroke: `var(--color-border-subtle)`,
      vectorEffect: `non-scaling-stroke`,
      x1: 0,
      x2: 100,
      y1: e,
      y2: e,
    },
    e,
  );
}
function Ge(e) {
  let t = (0, Z.c)(7),
    { reduceMotion: n } = e,
    r = !(n !== void 0 && n) && `motion-safe:animate-spin`,
    i;
  t[0] === r ? (i = t[1]) : ((i = g(`icon-xs text-secondary`, r)), (t[0] = r), (t[1] = i));
  let a;
  t[2] === i
    ? (a = t[3])
    : ((a = (0, Q.jsx)(y, { "aria-hidden": `true`, className: i })), (t[2] = i), (t[3] = a));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Q.jsx)(o, {
          id: `settings.usage.billing.chart.loading`,
          defaultMessage: `Loading usage data…`,
          description: `Loading state for enterprise billing and usage charts`,
        }),
      })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === a
      ? (c = t[6])
      : ((c = (0, Q.jsxs)(`span`, {
          className: `inline-flex items-center`,
          role: `status`,
          children: [a, s],
        })),
        (t[5] = a),
        (t[6] = c)),
    c
  );
}
function Ke(e) {
  let t = (0, Z.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`div`, {
          className: `flex h-full items-center justify-center gap-3 text-sm text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function qe(e) {
  let t = (0, Z.c)(13),
    { children: r, emptyMessage: i, fillChartHeight: a, hasData: s, status: c } = e;
  if (s) {
    let e;
    return (
      t[0] !== r || t[1] !== a
        ? ((e = a ? (0, Q.jsx)(`div`, { className: `absolute inset-0`, children: r }) : r),
          (t[0] = r),
          (t[1] = a),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (c.isLoading) {
    let e;
    return (
      t[3] === c.reduceMotion
        ? (e = t[4])
        : ((e = (0, Q.jsx)(Ue, { reduceMotion: c.reduceMotion })), (t[3] = c.reduceMotion), (t[4] = e)),
      e
    );
  }
  if (c.isError) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`span`, {
          children: (0, Q.jsx)(o, {
            id: `settings.usage.billing.chart.error`,
            defaultMessage: `Could not load usage data`,
            description: `Error state for enterprise billing and usage charts`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]);
    let r;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(o, {
          id: `settings.usage.billing.chart.retry`,
          defaultMessage: `Retry`,
          description: `Retry button for enterprise billing and usage charts`,
        })),
        (t[6] = r))
      : (r = t[6]);
    let i;
    return (
      t[7] === c.onRetry
        ? (i = t[8])
        : ((i = (0, Q.jsxs)(Ke, {
            children: [
              e,
              (0, Q.jsx)(n, { color: `secondary`, size: `toolbar`, onClick: c.onRetry, children: r }),
            ],
          })),
          (t[7] = c.onRetry),
          (t[8] = i)),
      i
    );
  }
  let l;
  t[9] === i
    ? (l = t[10])
    : ((l =
        i ??
        (0, Q.jsx)(o, {
          id: `settings.usage.billing.chart.empty`,
          defaultMessage: `No usage recorded yet`,
          description: `Empty state for enterprise billing and usage charts`,
        })),
      (t[9] = i),
      (t[10] = l));
  let u;
  return (t[11] === l ? (u = t[12]) : ((u = (0, Q.jsx)(Ke, { children: l })), (t[11] = l), (t[12] = u)), u);
}
function Je(e) {
  let t = (0, Z.c)(12),
    { children: n, reduceMotion: r } = e,
    [i, o] = (0, Xe.useState)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (e) => {
        o(e.contentRect.height);
      }),
      (t[0] = s))
    : (s = t[0]);
  let c = a(s),
    l = !r && `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
    u;
  t[1] === l
    ? (u = t[2])
    : ((u = g(`-mx-2 -mb-1 mt-1 box-content shrink-0 overflow-hidden px-2 py-1`, l)), (t[1] = l), (t[2] = u));
  let d;
  t[3] === i ? (d = t[4]) : ((d = i == null ? void 0 : { height: i }), (t[3] = i), (t[4] = d));
  let f;
  t[5] !== n || t[6] !== c
    ? ((f = (0, Q.jsx)(`div`, { ref: c, children: n })), (t[5] = n), (t[6] = c), (t[7] = f))
    : (f = t[7]);
  let p;
  return (
    t[8] !== u || t[9] !== d || t[10] !== f
      ? ((p = (0, Q.jsx)(`div`, { className: u, style: d, children: f })),
        (t[8] = u),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
var Z, Ye, Xe, Q;
function Ze() {
  return (Ze = e(() => {
    ((Z = S()),
      p(),
      (Ye = t(j(), 1)),
      (Xe = T()),
      _(),
      x(),
      ie(),
      h(),
      m(),
      l(),
      c(),
      J(),
      Fe(),
      ze(),
      (Q = w()));
  }))();
}
function Qe(e, t, n = !1) {
  let { relativeX: r, relativeY: i } = Ce(e),
    a = e.currentTarget.querySelector(`.recharts-tooltip-wrapper`),
    o = e.currentTarget.clientWidth,
    s = e.currentTarget.clientHeight,
    c = t || n ? e.currentTarget.getBoundingClientRect() : void 0,
    l = c == null || o === 0 ? 1 : c.width / o || 1,
    u = c == null || s === 0 ? l : c.height / s || 1,
    d = t ? a?.getBoundingClientRect() : void 0,
    f;
  if (n && c != null) {
    let t = 0,
      n = window.innerHeight;
    for (let r = e.currentTarget.parentElement; r != null; r = r.parentElement)
      if (getComputedStyle(r).overflowY !== `visible`) {
        let e = r.getBoundingClientRect();
        ((t = Math.max(t, e.top)), (n = Math.min(n, e.bottom)));
      }
    f = { top: (t - c.top) / u, bottom: (n - c.top) / u };
  }
  return {
    x: r,
    y: i,
    chartWidth: o,
    chartHeight: s,
    tooltipWidth: d == null ? (a?.offsetWidth ?? 0) : d.width / l,
    tooltipHeight: d == null ? (a?.offsetHeight ?? 0) : d.height / u,
    tooltipVerticalBounds: f,
    curveYBySeries: t
      ? Array.from(
          e.currentTarget.querySelectorAll(`.recharts-line:not(.opacity-0) .recharts-line-curve`),
          (e) => tt(e, r),
        )
      : void 0,
  };
}
function $e(e) {
  let t = e.tooltipWidth || 260,
    n = e.tooltipHeight,
    r = e.tooltipVerticalBounds?.top ?? 0,
    i = e.tooltipVerticalBounds?.bottom ?? (e.chartHeight === 0 ? 1 / 0 : e.chartHeight),
    a = e.y + 12,
    o = n === 0 || a + n <= i ? a : e.y - n - 12,
    s = Math.max(r, i - n);
  return { x: Math.max(0, Math.min(e.x + 12, e.chartWidth - t)), y: Math.max(r, Math.min(o, s)) };
}
function et({ data: e, pointer: t, series: n, xScale: r, yScale: i, yInverseScale: a }) {
  if (e == null || e.length === 0) return [];
  let o = e.findIndex((e) => {
    let n = r(e.date, { position: `middle` });
    return n != null && n >= t.x;
  });
  o < 0 && (o = e.length - 1);
  let s = e[Math.max(0, o - 1)],
    c = e[o];
  if (s == null || c == null) return [];
  let l = r(s.date, { position: `middle` }),
    u = r(c.date, { position: `middle` });
  if (l == null || u == null) return [];
  let d = l === u ? 0 : Math.max(0, Math.min(1, (t.x - l) / (u - l)));
  return n.flatMap((e, n) => {
    let r = e.value(s),
      o = e.value(c);
    if (!Number.isFinite(r) || !Number.isFinite(o)) return [];
    let l = r + (o - r) * d,
      u = t.curveYBySeries?.[n] ?? i(l);
    if (u == null || !Number.isFinite(u)) return [];
    let f = t.curveYBySeries == null ? void 0 : a?.(u),
      p = typeof f == `number` && Number.isFinite(f) ? f : l;
    return [{ key: e.key, name: e.name, color: e.color, value: p, y: u }];
  });
}
function tt(e, t) {
  if (typeof e.getTotalLength != `function` || typeof e.getPointAtLength != `function`) return null;
  try {
    let n = 0,
      r = e.getTotalLength();
    if (!Number.isFinite(r) || r === 0) return null;
    let i = e.getPointAtLength(n),
      a = e.getPointAtLength(r);
    if (t <= i.x) return i.y;
    if (t >= a.x) return a.y;
    for (let i = 0; i < 11; i += 1) {
      let i = (n + r) / 2;
      e.getPointAtLength(i).x < t ? (n = i) : (r = i);
    }
    return e.getPointAtLength((n + r) / 2).y;
  } catch {
    return null;
  }
}
var nt, rt, it;
function at() {
  return (at = e(() => {
    (ve(),
      (nt = ge(`date`)),
      (rt = (e, t) => {
        let n = e?.some(
          (e) => e.status !== `matched` || e.prev.x !== e.next.x || e.prev.width !== e.next.width,
        );
        return (
          e?.flatMap((e) => {
            if (e.status === `removed`) return [];
            let r = e.next,
              i = e.status === `added` || n ? null : e.prev,
              a = i?.y ?? r.stackedBarStart,
              o = i?.height ?? 0;
            return [{ ...r, y: a + (r.y - a) * t, height: o + (r.height - o) * t }];
          }) ?? []
        );
      }),
      (it = (e, t) => {
        let n = e?.flatMap((e) => (e.status === `added` ? [] : [e.prev])) ?? [];
        return (
          e?.flatMap((e) => {
            if (e.status === `removed`) return [];
            let r = e.next,
              i = r.x;
            if (i == null || r.y == null || n.length === 0) return [r];
            let a = n.findIndex((e) => e.x != null && e.x >= i),
              o = a === -1 ? n.length - 1 : a,
              s = n[Math.max(0, o - 1)],
              c = n[o];
            if (s.x == null || s.y == null || c.x == null || c.y == null) return [r];
            let l = c.x === s.x ? c.y : s.y + ((c.y - s.y) * (i - s.x)) / (c.x - s.x);
            return [{ ...r, y: l + (r.y - l) * t }];
          }) ?? []
        );
      }));
  }))();
}
function ot(e) {
  let t = (0, ct.c)(17),
    {
      children: n,
      isTooltipDismissed: r,
      onResetHover: i,
      onTooltipDismissedChange: a,
      consumerAnalytics: o,
      scope: s,
    } = e,
    c = o !== void 0 && o,
    l;
  t[0] !== r || t[1] !== a
    ? ((l = r ? () => a(!1) : void 0), (t[0] = r), (t[1] = a), (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== i || t[4] !== a || t[5] !== s
    ? ((d =
        s === `workspace`
          ? void 0
          : () => {
              (a(!0), i());
            }),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s),
      (t[6] = d))
    : (d = t[6]);
  let f = d,
    p;
  t[7] !== c || t[8] !== i || t[9] !== a || t[10] !== u
    ? ((p = c
        ? (e) => {
            if (e.key === `Escape`) {
              let t = e.currentTarget.querySelector(`.recharts-tooltip-wrapper`);
              t?.querySelector(`[role="status"]`) != null &&
                getComputedStyle(t).visibility === `visible` &&
                (e.stopPropagation(), a(!0), i());
            } else u?.();
          }
        : u),
      (t[7] = c),
      (t[8] = i),
      (t[9] = a),
      (t[10] = u),
      (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== n || t[13] !== f || t[14] !== u || t[15] !== p
      ? ((m = (0, lt.jsx)(L, {
          width: `100%`,
          height: `100%`,
          minHeight: 144,
          onFocusCapture: u,
          onKeyDownCapture: p,
          onMouseLeave: f,
          onMouseMoveCapture: u,
          onWheelCapture: f,
          children: n,
        })),
        (t[12] = n),
        (t[13] = f),
        (t[14] = u),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function st(e) {
  let t = (0, ct.c)(29),
    { data: n, pointer: r, series: i } = e,
    a = R(),
    o = me(),
    s = pe(),
    c = he();
  if (
    r == null ||
    a == null ||
    o == null ||
    s == null ||
    r.x < a.x ||
    r.x > a.x + a.width ||
    r.y < a.y ||
    r.y > a.y + a.height
  )
    return null;
  let l, u, d, f, p, m;
  if (
    t[0] !== n ||
    t[1] !== a.height ||
    t[2] !== a.y ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== o ||
    t[6] !== c ||
    t[7] !== s
  ) {
    let e = et({ data: n, pointer: r, series: i, xScale: o, yScale: s, yInverseScale: c });
    ((l = _e), (m = xe.activeDot), (u = `true`), (d = `none`));
    let h = a.y + a.height;
    t[14] !== a.y || t[15] !== r.x || t[16] !== h
      ? ((f = (0, lt.jsx)(`line`, {
          x1: r.x,
          x2: r.x,
          y1: a.y,
          y2: h,
          stroke: `var(--color-border-strong)`,
        })),
        (t[14] = a.y),
        (t[15] = r.x),
        (t[16] = h),
        (t[17] = f))
      : (f = t[17]);
    let g;
    (t[18] === r.x
      ? (g = t[19])
      : ((g = (e) =>
          (0, lt.jsx)(
            `circle`,
            { cx: r.x, cy: e.y, fill: e.color, r: 4, stroke: `var(--color-surface)`, strokeWidth: 2 },
            e.key,
          )),
        (t[18] = r.x),
        (t[19] = g)),
      (p = e.map(g)),
      (t[0] = n),
      (t[1] = a.height),
      (t[2] = a.y),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o),
      (t[6] = c),
      (t[7] = s),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  } else ((l = t[8]), (u = t[9]), (d = t[10]), (f = t[11]), (p = t[12]), (m = t[13]));
  let h;
  t[20] !== u || t[21] !== d || t[22] !== f || t[23] !== p
    ? ((h = (0, lt.jsxs)(`g`, { "aria-hidden": u, pointerEvents: d, children: [f, p] })),
      (t[20] = u),
      (t[21] = d),
      (t[22] = f),
      (t[23] = p),
      (t[24] = h))
    : (h = t[24]);
  let g;
  return (
    t[25] !== l || t[26] !== m || t[27] !== h
      ? ((g = (0, lt.jsx)(l, { zIndex: m, children: h })), (t[25] = l), (t[26] = m), (t[27] = h), (t[28] = g))
      : (g = t[28]),
    g
  );
}
var ct, lt;
function ut() {
  return (ut = e(() => {
    ((ct = S()), we(), ue(), fe(), de(), at(), (lt = w()));
  }))();
}
function dt(e) {
  let t = e.indexOf(`: `);
  if (t === -1) return e;
  let n = e.slice(0, t),
    r = e.slice(t + 2),
    i = `${n} `;
  return (r.startsWith(i) && r.slice(i.length)) || r;
}
function ft(e) {
  return [...z.slice(3), ...z.slice(0, 3)].find((t) => !e.some((e) => e.color === t)) ?? z[3];
}
function pt(e, t) {
  return e != null && t.some(({ key: t }) => e.has(t)) && t.some(({ key: t }) => !e.has(t)) ? e : null;
}
function mt(e, t, n, r) {
  let i = new Set([...(e ?? []), ...[...(r ?? [])].filter((e) => !n.some((t) => t.key === e))]);
  return i.has(t) ? (i.delete(t), i) : n.some((e) => e.key !== t && !i.has(e.key)) ? (i.add(t), i) : (e ?? i);
}
function ht(e, t, n) {
  let r = new Set([...(n ?? []), ...t.map((e) => e.key)]);
  return (r.delete(e), r);
}
var gt, _t;
function vt() {
  return (vt = e(() => {
    (Ee(), (gt = `__other_usage_series__`), (_t = [4, 4, 0, 0]));
  }))();
}
function yt(e) {
  let t = (0, Tt.c)(20),
    { section: n, isSelected: i, children: a } = e,
    o = s(r),
    { accountId: c, userId: l, authMethod: u, isLoading: d } = se(),
    { data: p } = O(),
    m = f(te),
    h;
  t[0] !== c ||
  t[1] !== u ||
  t[2] !== p?.id ||
  t[3] !== p?.plan_type ||
  t[4] !== m ||
  t[5] !== d ||
  t[6] !== i ||
  t[7] !== n ||
  t[8] !== l
    ? ((h = null),
      (t[0] = c),
      (t[1] = u),
      (t[2] = p?.id),
      (t[3] = p?.plan_type),
      (t[4] = m),
      (t[5] = d),
      (t[6] = i),
      (t[7] = n),
      (t[8] = l),
      (t[9] = h))
    : (h = t[9]);
  let g = h,
    _;
  t[10] !== g || t[11] !== o
    ? ((_ = g == null ? null : { scope: o, identity: g }), (t[10] = g), (t[11] = o), (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] !== g || t[14] !== n
    ? ((v = (0, Et.jsx)(bt, { identity: g, section: n })), (t[13] = g), (t[14] = n), (t[15] = v))
    : (v = t[15]);
  let y;
  return (
    t[16] !== a || t[17] !== _ || t[18] !== v
      ? ((y = (0, Et.jsxs)(Ne, { value: _, children: [v, a] })),
        (t[16] = a),
        (t[17] = _),
        (t[18] = v),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
function bt(e) {
  let t = (0, Tt.c)(9),
    { identity: n, section: i } = e,
    a = s(r),
    o = (0, $.useRef)(null),
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = (e) => {
        k(a, E, { tab: e });
      }),
      (t[0] = a),
      (t[1] = c));
  let l = (0, $.useEffectEvent)(c),
    u;
  t[2] !== n || t[3] !== l || t[4] !== i
    ? ((u = () => {
        if (n == null) {
          o.current = null;
          return;
        }
        let e = JSON.stringify([n, i]);
        e !== o.current &&
          ((o.current = e),
          (i === `usage` || i === `analytics`) &&
            l(i === `usage` ? A.CHATGPT_WEB_SETTINGS_TAB_USAGE : A.CHATGPT_WEB_SETTINGS_TAB_ANALYTICS));
      }),
      (t[2] = n),
      (t[3] = l),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] !== n || t[7] !== i ? ((d = [n, i]), (t[6] = n), (t[7] = i), (t[8] = d)) : (d = t[8]),
    (0, $.useEffect)(u, d),
    null
  );
}
function xt(e) {
  let t = (0, Tt.c)(20),
    { chart: n, queries: r } = e,
    i = (0, $.use)(Ne),
    a = i?.identity ?? null,
    o = (0, $.useRef)(null),
    s;
  t[0] === r ? (s = t[1]) : ((s = r.length > 0 && r.every(wt)), (t[0] = r), (t[1] = s));
  let c = s,
    l = r.some(Ct)
      ? I.CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_ERROR
      : I.CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_SUCCESS,
    u;
  t[2] !== n || t[3] !== a || t[4] !== l || t[5] !== r
    ? ((u = JSON.stringify([a, n, l, r.map(St)])), (t[2] = n), (t[3] = a), (t[4] = l), (t[5] = r), (t[6] = u))
    : (u = t[6]);
  let d = u,
    f;
  t[7] !== i || t[8] !== n || t[9] !== l
    ? ((f = () => {
        i != null && k(i.scope, oe, { chart: q[n], outcome: l });
      }),
      (t[7] = i),
      (t[8] = n),
      (t[9] = l),
      (t[10] = f))
    : (f = t[10]);
  let p = (0, $.useEffectEvent)(f),
    m;
  t[11] !== a || t[12] !== p || t[13] !== d || t[14] !== c
    ? ((m = () => {
        a != null && c && o.current !== d && ((o.current = d), p());
      }),
      (t[11] = a),
      (t[12] = p),
      (t[13] = d),
      (t[14] = c),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== a || t[17] !== d || t[18] !== c
      ? ((h = [a, d, c]), (t[16] = a), (t[17] = d), (t[18] = c), (t[19] = h))
      : (h = t[19]),
    (0, $.useEffect)(m, h),
    null
  );
}
function St(e) {
  return [e.dataUpdatedAt, e.errorUpdatedAt];
}
function Ct(e) {
  return e.status === `error`;
}
function wt(e) {
  return e.status !== `pending` && e.fetchStatus === `idle`;
}
var Tt, $, Et;
function Dt() {
  return (Dt = e(() => {
    ((Tt = S()), le(), D(), u(), ($ = T()), F(), re(), ee(), ne(), C(), J(), (Et = w()));
  }))();
}
export {
  je as A,
  Ze as C,
  Fe as D,
  Pe as E,
  ke as F,
  W as I,
  De as L,
  Me as M,
  B as N,
  Ne as O,
  V as P,
  Oe as R,
  Ue as S,
  ze as T,
  at as _,
  _t as a,
  nt as b,
  ht as c,
  vt as d,
  ot as f,
  $e as g,
  Qe as h,
  gt as i,
  Ae as j,
  J as k,
  dt as l,
  ut as m,
  yt as n,
  pt as o,
  st as p,
  Dt as r,
  ft as s,
  xt as t,
  mt as u,
  rt as v,
  Ie as w,
  Be as x,
  it as y,
};
//# sourceMappingURL=settings-analytics-telemetry-3391e47ea62e.js.map
