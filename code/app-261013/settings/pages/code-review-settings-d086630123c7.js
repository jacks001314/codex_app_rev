import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JR as n,
  LT as r,
  Mz as i,
  Nz as a,
  Pxt as o,
  RT as s,
  VDt as c,
  Vxt as l,
  Xot as u,
  YR as d,
  Yot as f,
  cz as p,
  jDt as m,
  sz as h,
  vzt as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as y,
  Ek as b,
  FMr as x,
  NHn as S,
  PHn as C,
  Tk as w,
  eDr as T,
  fur as E,
  nDr as D,
  pur as O,
} from "./app-initial-5851df3f6cb1.js";
import { Ll as k, Rl as A } from "./app-primary-fe8a450b3b04.js";
import { h as j, m as ee, n as M, t as N } from "./activity-chart-d7e6ae6b8d7d.js";
import { n as P, r as te } from "./queries-4983d9ee034f.js";
import { O as ne, j as re, k as F, r as I, t as ie } from "./settings-analytics-telemetry-3391e47ea62e.js";
function L(e) {
  let n = (0, H.c)(35),
    { chart: a, metrics: o, consumerAnalytics: s, scope: l, status: u } = e,
    d = s !== void 0 && s,
    f = c(),
    p = a.key === `priorities`,
    m;
  if (n[0] !== a.fields || n[1] !== a.key || n[2] !== f || n[3] !== p || n[4] !== o) {
    let e = o?.data.map((e) => {
      let t = a.fields.reduce((t, n) => {
          let { field: r } = n;
          return t + e[r];
        }, 0),
        n = t;
      a.key === `reactions` ? (n = e.n_reactions) : p && (n = e.n_comments);
      let r = Object.fromEntries(
        a.fields.map((t) => {
          let { key: r, field: i } = t;
          return [r, a.key === `sentiment` && n > 0 ? (e[i] / n) * 100 : e[i]];
        }),
      );
      return (p && (r.other = Math.max(e.n_comments - t, 0)), { date: e.date, total: n, values: r });
    });
    ((m =
      e == null || o == null
        ? void 0
        : {
            total: e.reduce(V, 0),
            dataFreshnessTimestamp: null,
            series: [
              ...a.fields.map((e) => {
                let { key: t, field: n } = e;
                return {
                  key: t,
                  name: f.formatMessage(
                    {
                      id: `settings.usage.billing.codeReview.series`,
                      defaultMessage: `{series, select, issues {Issues found} reviews {PRs reviewed} p0 {P0} p1 {P1} p2 {P2} plus1 {👍 reactions} minus1 {👎 reactions} other {Other reactions}}`,
                      description: `Localized legend or tooltip label for a Codex code review chart series: total issues, reviewed pull requests, P0 through P2 issue priorities, thumbs-up reactions, thumbs-down reactions, or other reactions`,
                    },
                    { series: t },
                  ),
                  total: o.data.reduce((e, t) => e + t[n], 0),
                };
              }),
              ...(p
                ? [
                    {
                      key: `other`,
                      name: f.formatMessage({
                        id: `settings.usage.billing.codeReview.priorityOther`,
                        defaultMessage: `Other`,
                        description: `Legend and tooltip label for Codex code review issues without a P0, P1, or P2 priority`,
                      }),
                      total: e.reduce(B, 0),
                    },
                  ]
                : []),
            ],
            data: e,
          }),
      (n[0] = a.fields),
      (n[1] = a.key),
      (n[2] = f),
      (n[3] = p),
      (n[4] = o),
      (n[5] = m));
  } else m = n[5];
  let g = m,
    _;
  p ? (_ = `code_review_priority`) : a.key === `reactions` && (_ = `code_review_reactions`);
  let v = `area`;
  p ? (v = `stacked-bar`) : (a.key === `issues` || a.key === `reviews`) && (v = `bar`);
  let y = _,
    b;
  n[6] !== a.key || n[7] !== f
    ? ((b = f.formatMessage(
        {
          id: `settings.usage.billing.codeReview.chartLabel`,
          defaultMessage: `{chart, select, issues {Issues found} reviews {PRs reviewed} priorities {Issues by priority} reactions {Reactions} sentiment {Reaction sentiment} other {Code review}}`,
          description: `Accessible label identifying a Codex code review analytics chart: issues found, pull requests reviewed, issues by priority, reactions, or reaction sentiment`,
        },
        { chart: a.key },
      )),
      (n[6] = a.key),
      (n[7] = f),
      (n[8] = b))
    : (b = n[8]);
  let x = a.key === `sentiment`,
    S;
  n[9] !== a.key || n[10] !== f || n[11] !== o
    ? ((S =
        a.key === `sentiment` && o != null
          ? (0, U.jsx)(t, {
              id: `settings.usage.billing.codeReview.sentiment.summary`,
              defaultMessage: `{percentage} positive`,
              description: `Summary below the reaction sentiment chart title showing the percentage of positive Codex code review reactions during the selected period`,
              values: {
                percentage: f.formatNumber(o.data.reduce(z, 0) / o.data.reduce(R, 0), {
                  maximumFractionDigits: 0,
                  style: `percent`,
                }),
              },
            })
          : void 0),
      (n[9] = a.key),
      (n[10] = f),
      (n[11] = o),
      (n[12] = S))
    : (S = n[12]);
  let C;
  n[13] === a.key
    ? (C = n[14])
    : ((C = (0, U.jsx)(t, {
        id: `settings.usage.billing.codeReview.chart.title`,
        defaultMessage: `{chart, select, issues {Issues found} reviews {PRs reviewed} priorities {Issues by priority} reactions {Reactions} sentiment {Reaction sentiment} other {Code review}}`,
        description: `Title of a desktop Codex code review analytics chart: issues found, pull requests reviewed, issues by priority, reactions, or reaction sentiment`,
        values: { chart: a.key },
      })),
      (n[13] = a.key),
      (n[14] = C));
  let w;
  n[15] !== a.key || n[16] !== d || n[17] !== f || n[18] !== p
    ? ((w =
        d || p
          ? null
          : (0, U.jsx)(h, {
              tooltipContent: (0, U.jsx)(t, {
                id: `settings.usage.billing.codeReview.chart.info`,
                defaultMessage: `{chart, select, issues {Issues found by Codex code review during the selected time period} reviews {Pull requests reviewed by Codex during the selected time period} priorities {Issues found by Codex code review grouped by priority during the selected time period} reactions {Reactions to Codex code review comments during the selected time period} sentiment {Share of code review reactions grouped by reaction type during the selected time period} other {Code review activity during the selected time period}}`,
                description: `Information tooltip explaining what the selected Codex code review analytics chart measures: issues found, reviewed pull requests, issues grouped by priority, reactions, or reaction sentiment`,
                values: { chart: a.key },
              }),
              children: (0, U.jsx)(`button`, {
                "aria-label": f.formatMessage(
                  {
                    id: `settings.usage.billing.codeReview.chart.infoLabel`,
                    defaultMessage: `{chart, select, issues {More information about issues found} reviews {More information about PRs reviewed} priorities {More information about issues by priority} reactions {More information about reactions} sentiment {More information about reaction sentiment} other {More information about code review}}`,
                    description: `Accessible label for the information button explaining a Codex code review analytics chart: issues found, reviewed pull requests, issues by priority, reactions, or reaction sentiment`,
                  },
                  { chart: a.key },
                ),
                className: `cursor-interaction text-tertiary`,
                type: `button`,
                children: (0, U.jsx)(i, { asset: r }),
              }),
            })),
      (n[15] = a.key),
      (n[16] = d),
      (n[17] = f),
      (n[18] = p),
      (n[19] = w))
    : (w = n[19]);
  let T;
  n[20] !== C || n[21] !== w
    ? ((T = (0, U.jsxs)(`span`, { className: `inline-flex items-center gap-1`, children: [C, w] })),
      (n[20] = C),
      (n[21] = w),
      (n[22] = T))
    : (T = n[22]);
  let E;
  return (
    n[23] !== _ ||
    n[24] !== a.unit ||
    n[25] !== d ||
    n[26] !== g ||
    n[27] !== l ||
    n[28] !== u ||
    n[29] !== b ||
    n[30] !== x ||
    n[31] !== S ||
    n[32] !== T ||
    n[33] !== v
      ? ((E = (0, U.jsx)(N, {
          analyticsChart: y,
          consumerAnalytics: d,
          ariaLabel: b,
          data: g,
          hideTotal: x,
          scope: l,
          status: u,
          totalLabel: S,
          title: T,
          unit: a.unit,
          visualization: v,
        })),
        (n[23] = _),
        (n[24] = a.unit),
        (n[25] = d),
        (n[26] = g),
        (n[27] = l),
        (n[28] = u),
        (n[29] = b),
        (n[30] = x),
        (n[31] = S),
        (n[32] = T),
        (n[33] = v),
        (n[34] = E))
      : (E = n[34]),
    E
  );
}
function R(e, t) {
  return e + t.n_reactions;
}
function z(e, t) {
  return e + t.n_reactions_plus1;
}
function B(e, t) {
  return e + (t.values.other ?? 0);
}
function V(e, t) {
  return e + t.total;
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = g()), s(), m(), a(), p(), M(), (U = _()));
  }))();
}
function ae(e) {
  return G.filter(
    ({ key: t }) =>
      (t !== `reactions` && t !== `sentiment`) || e == null || e.data.some(({ n_reactions: e }) => e > 0),
  );
}
var G;
function K() {
  return (K = e(() => {
    G = [
      { key: `issues`, unit: `issues`, fields: [{ key: `issues`, field: `n_comments` }] },
      { key: `reviews`, unit: `reviews`, fields: [{ key: `reviews`, field: `n_reviews` }] },
      {
        key: `priorities`,
        unit: `issues`,
        fields: [
          { key: `p0`, field: `n_comments_p0` },
          { key: `p1`, field: `n_comments_p1` },
          { key: `p2`, field: `n_comments_p2` },
        ],
      },
      {
        key: `reactions`,
        unit: `reactions`,
        fields: [
          { key: `plus1`, field: `n_reactions_plus1` },
          { key: `minus1`, field: `n_reactions_minus1` },
          { key: `other`, field: `n_reactions_other` },
        ],
      },
      {
        key: `sentiment`,
        unit: `percent`,
        fields: [
          { key: `plus1`, field: `n_reactions_plus1` },
          { key: `minus1`, field: `n_reactions_minus1` },
          { key: `other`, field: `n_reactions_other` },
        ],
      },
    ];
  }))();
}
function oe(e) {
  let n = (0, q.c)(41),
    { isActive: r, isPolling: i, reduceMotion: a, scope: o } = e,
    s = i === void 0 || i,
    l = D(o === `business` ? `1014047933` : `393259752`),
    d = (0, J.use)(ne)?.scope ?? null,
    f = O(),
    p = c(),
    [m, h] = (0, J.useState)(30),
    [g, _] = (0, J.useState)(null),
    v;
  n[0] !== f || n[1] !== m || n[2] !== r || n[3] !== s || n[4] !== o
    ? ((v = te({ isPolling: s, auth: f, days: m, enabled: r, scope: o })),
      (n[0] = f),
      (n[1] = m),
      (n[2] = r),
      (n[3] = s),
      (n[4] = o),
      (n[5] = v))
    : (v = n[5]);
  let y = u(v),
    { data: b, isError: x, isLoading: S, refetch: C } = y,
    T = S && !x && b == null && g?.accountId === (f.accountId ?? null) && g.userId === (f.userId ?? null),
    E = T ? g.data : b,
    k =
      !a &&
      b != null &&
      g?.accountId === (f.accountId ?? null) &&
      g.userId === (f.userId ?? null) &&
      g.data !== b,
    A;
  n[6] === C
    ? (A = n[7])
    : ((A = () => {
        C();
      }),
      (n[6] = C),
      (n[7] = A));
  let j;
  n[8] !== T || n[9] !== x || n[10] !== S || n[11] !== a || n[12] !== k || n[13] !== A
    ? ((j = { animateDataChanges: k, isError: x, isLoading: S, isUpdating: T, reduceMotion: a, onRetry: A }),
      (n[8] = T),
      (n[9] = x),
      (n[10] = S),
      (n[11] = a),
      (n[12] = k),
      (n[13] = A),
      (n[14] = j))
    : (j = n[14]);
  let M = j,
    N;
  n[15] !== y || n[16] !== r
    ? ((N = r ? (0, Y.jsx)(ie, { chart: `code_review`, queries: [y] }) : null),
      (n[15] = y),
      (n[16] = r),
      (n[17] = N))
    : (N = n[17]);
  let P;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Y.jsx)(t, {
        id: `settings.usage.billing.codeReview.title`,
        defaultMessage: `Code review`,
        description: `Heading for analytics about the account holder's Codex code reviews, discovered issues, and reactions`,
      })),
      (n[18] = P))
    : (P = n[18]);
  let F;
  n[19] === p
    ? (F = n[20])
    : ((F = p.formatMessage({
        id: `settings.usage.billing.codeReview.periodLabel`,
        defaultMessage: `Code review time range`,
        description: `Accessible label for the seven-day or thirty-day date-range selector shared by all desktop Codex code review analytics charts`,
      })),
      (n[19] = p),
      (n[20] = F));
  let I;
  n[21] !== d || n[22] !== f || n[23] !== m || n[24] !== E
    ? ((I = (e) => {
        (e !== m && re(d, `code_review`, e),
          _(E?.data.some(se) ? { accountId: f.accountId ?? null, data: E, userId: f.userId ?? null } : null),
          h(e));
      }),
      (n[21] = d),
      (n[22] = f),
      (n[23] = m),
      (n[24] = E),
      (n[25] = I))
    : (I = n[25]);
  let R;
  n[26] !== m || n[27] !== F || n[28] !== I
    ? ((R = (0, Y.jsx)(w.Header, {
        actionsAlignment: `end`,
        title: P,
        actions: (0, Y.jsx)(ee, { ariaLabel: F, days: m, onChange: I }),
      })),
      (n[26] = m),
      (n[27] = F),
      (n[28] = I),
      (n[29] = R))
    : (R = n[29]);
  let z;
  n[30] !== l || n[31] !== E || n[32] !== o || n[33] !== M
    ? ((z = ae(E).map((e) =>
        (0, Y.jsx)(L, { consumerAnalytics: l, chart: e, metrics: E, scope: o, status: M }, e.key),
      )),
      (n[30] = l),
      (n[31] = E),
      (n[32] = o),
      (n[33] = M),
      (n[34] = z))
    : (z = n[34]);
  let B;
  n[35] === z
    ? (B = n[36])
    : ((B = (0, Y.jsx)(w.Content, { className: `gap-3`, children: z })), (n[35] = z), (n[36] = B));
  let V;
  return (
    n[37] !== R || n[38] !== B || n[39] !== N
      ? ((V = (0, Y.jsxs)(w, { children: [N, R, B] })), (n[37] = R), (n[38] = B), (n[39] = N), (n[40] = V))
      : (V = n[40]),
    V
  );
}
function se(e) {
  let { n_comments: t, n_reactions: n, n_reviews: r } = e;
  return t > 0 || n > 0 || r > 0;
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = g()), f(), (J = v()), m(), E(), P(), b(), T(), j(), W(), K(), F(), I(), (Y = _()));
  }))();
}
function ce(e) {
  let t = (0, Z.c)(4),
    { isPolling: n } = e,
    r = n === void 0 || n,
    { data: i } = l(C),
    { plan: a } = A(i?.credits?.balance != null),
    o = d(),
    s = x(a) ? `business` : `consumer`,
    c;
  return (
    t[0] !== r || t[1] !== o || t[2] !== s
      ? ((c = (0, Q.jsx)(oe, { isActive: !0, isPolling: r, reduceMotion: o, scope: s })),
        (t[0] = r),
        (t[1] = o),
        (t[2] = s),
        (t[3] = c))
      : (c = t[3]),
    c
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = g()), o(), k(), S(), n(), y(), X(), (Q = _()));
  }))();
}
$();
export { ce as UsageCodeReviewSettings };
//# sourceMappingURL=code-review-settings-d086630123c7.js.map
