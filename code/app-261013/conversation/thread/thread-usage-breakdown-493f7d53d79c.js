import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DDt as t,
  IDt as n,
  VDt as r,
  cz as i,
  jDt as a,
  sz as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import { EXt as u, Fjr as d, Pjr as f } from "./app-initial-5851df3f6cb1.js";
import { n as p, t as m } from "./model-and-reasoning-effort-translations-96be4f100801.js";
import { a as h, r as g } from "./visualization-theme-bedd32a367a0.js";
import { n as _, t as v } from "./usage-data-188598c9d599.js";
function y(e) {
  let r = (0, T.c)(30),
    { usage: i, title: a, showCostUsd: o } = e,
    s = o === void 0 || o,
    c;
  if (i.balanceUnit === `usd`) {
    let e;
    (r[0] === i.costUsd
      ? (e = r[1])
      : ((e =
          i.costUsd == null
            ? null
            : (0, D.jsx)(t, {
                value: i.costUsd,
                style: `currency`,
                currency: `USD`,
                maximumFractionDigits: Math.abs(i.costUsd) < 0.01 ? 6 : 2,
              })),
        (r[0] = i.costUsd),
        (r[1] = e)),
      (c = e));
  } else if (s && i.costUsd != null) {
    let e;
    r[2] === i.creditsUsed
      ? (e = r[3])
      : ((e = (0, D.jsx)(t, { value: i.creditsUsed, notation: `compact`, maximumFractionDigits: 1 })),
        (r[2] = i.creditsUsed),
        (r[3] = e));
    let a = i.costUsd < 0.01 ? 4 : 2,
      o;
    r[4] !== a || r[5] !== i.costUsd
      ? ((o = (0, D.jsx)(t, {
          value: i.costUsd,
          style: `currency`,
          currency: `USD`,
          maximumFractionDigits: a,
        })),
        (r[4] = a),
        (r[5] = i.costUsd),
        (r[6] = o))
      : (o = r[6]);
    let s;
    (r[7] !== e || r[8] !== o
      ? ((s = (0, D.jsx)(n, {
          id: `usageCenter.thread.breakdown.total`,
          defaultMessage: `{creditCount} credits · {cost}`,
          description: `Total estimated credits and dollar cost for the current chat`,
          values: { creditCount: e, cost: o },
        })),
        (r[7] = e),
        (r[8] = o),
        (r[9] = s))
      : (s = r[9]),
      (c = s));
  } else {
    let e;
    (r[10] === i.creditsUsed
      ? (e = r[11])
      : ((e = (0, D.jsx)(n, {
          id: `usageCenter.thread.breakdown.totalCreditsOnly`,
          defaultMessage: `{creditCount} credits`,
          description: `Total credits used by a task when dollar amounts are unavailable`,
          values: {
            creditCount: (0, D.jsx)(t, {
              value: i.creditsUsed,
              notation: `compact`,
              maximumFractionDigits: 1,
            }),
          },
        })),
        (r[10] = i.creditsUsed),
        (r[11] = e)),
      (c = e));
  }
  let l;
  r[12] === a
    ? (l = r[13])
    : ((l =
        a ??
        (0, D.jsx)(n, {
          id: `usageCenter.thread.breakdown.title`,
          defaultMessage: `Usage in this chat`,
          description: `Title for the current chat's detailed usage breakdown`,
        })),
      (r[12] = a),
      (r[13] = l));
  let u;
  r[14] === l
    ? (u = r[15])
    : ((u = (0, D.jsx)(`span`, { className: `min-w-0 truncate font-semibold text-default`, children: l })),
      (r[14] = l),
      (r[15] = u));
  let d;
  r[16] === c
    ? (d = r[17])
    : ((d = (0, D.jsx)(`span`, { className: `shrink-0 text-secondary tabular-nums`, children: c })),
      (r[16] = c),
      (r[17] = d));
  let f;
  r[18] !== u || r[19] !== d
    ? ((f = (0, D.jsxs)(`div`, { className: `flex items-center justify-between gap-3`, children: [u, d] })),
      (r[18] = u),
      (r[19] = d),
      (r[20] = f))
    : (f = r[20]);
  let p, m, h;
  r[21] === i
    ? ((p = r[22]), (m = r[23]), (h = r[24]))
    : ((p = (0, D.jsx)(b, { dimension: `model`, usage: i })),
      (m = (0, D.jsx)(b, { dimension: `reasoning_effort`, usage: i })),
      (h = (0, D.jsx)(b, { dimension: `speed`, usage: i })),
      (r[21] = i),
      (r[22] = p),
      (r[23] = m),
      (r[24] = h));
  let g;
  return (
    r[25] !== f || r[26] !== p || r[27] !== m || r[28] !== h
      ? ((g = (0, D.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-3 px-3 py-2 text-xs leading-4 select-none`,
          children: [f, p, m, h],
        })),
        (r[25] = f),
        (r[26] = p),
        (r[27] = m),
        (r[28] = h),
        (r[29] = g))
      : (g = r[29]),
    g
  );
}
function b(e) {
  let t = (0, T.c)(39),
    { dimension: i, usage: a } = e,
    s = r(),
    c = (0, E.useId)(),
    l,
    d,
    f,
    p,
    m,
    h,
    _;
  if (t[0] !== i || t[1] !== s || t[2] !== c || t[3] !== a.balanceUnit || t[4] !== a.groups) {
    let e = v(a.groups, i, a.balanceUnit),
      r = e.reduce(x, 0),
      y = r > 0 ? e : [],
      b;
    t[12] === r ? (b = t[13]) : ((b = (e) => Math.round((e / r) * 100)), (t[12] = r), (t[13] = b));
    let C = b;
    ((f = `flex flex-col gap-1.5`), (p = c), (m = `group`));
    let T;
    t[14] === i
      ? (T = t[15])
      : ((T =
          i === `model`
            ? (0, D.jsx)(n, {
                id: `usageCenter.thread.breakdown.model`,
                defaultMessage: `Models`,
                description: `Label for model usage in the current chat breakdown`,
              })
            : i === `reasoning_effort`
              ? (0, D.jsx)(n, {
                  id: `usageCenter.thread.breakdown.reasoning`,
                  defaultMessage: `Reasoning`,
                  description: `Label for reasoning effort usage in the current chat breakdown`,
                })
              : (0, D.jsx)(n, {
                  id: `usageCenter.thread.breakdown.speed`,
                  defaultMessage: `Speed`,
                  description: `Label for response speed usage in the current chat breakdown`,
                })),
        (t[14] = i),
        (t[15] = T));
    let E;
    t[16] !== c || t[17] !== T
      ? ((E = (0, D.jsx)(`span`, { id: c, className: `text-secondary`, children: T })),
        (t[16] = c),
        (t[17] = T),
        (t[18] = E))
      : (E = t[18]);
    let O =
      y.length === 0
        ? (0, D.jsx)(`span`, {
            className: `text-tertiary`,
            children: (0, D.jsx)(n, {
              id: `usageCenter.thread.breakdown.noData`,
              defaultMessage: `Not available`,
              description: `Shown when one current-chat usage breakdown category has no recorded data`,
            }),
          })
        : null;
    t[19] !== E || t[20] !== O
      ? ((h = (0, D.jsxs)(`div`, { className: `flex items-center justify-between gap-2`, children: [E, O] })),
        (t[19] = E),
        (t[20] = O),
        (t[21] = h))
      : (h = t[21]);
    let k;
    (t[22] !== i || t[23] !== C
      ? ((k = (e, t) => {
          let n = C(e.amountMicros);
          return (0, D.jsx)(
            o,
            {
              color: `inverse`,
              delayDuration: 0,
              tooltipContent: (0, D.jsx)(S, { dimension: i, entry: e, percentage: n }),
              children: (0, D.jsx)(`button`, {
                className: `h-full min-w-1 basis-0 cursor-interaction`,
                "aria-hidden": !0,
                style: { backgroundColor: g[t % g.length], flexGrow: e.amountMicros },
                tabIndex: -1,
                type: `button`,
              }),
            },
            e.value ?? `unknown`,
          );
        }),
        (t[22] = i),
        (t[23] = C),
        (t[24] = k))
      : (k = t[24]),
      (_ = (0, D.jsx)(`div`, {
        className: `flex h-2 overflow-hidden rounded-full bg-text/10`,
        children: y.map(k),
      })),
      (l = `flex flex-wrap gap-x-4 gap-y-1.5 text-secondary`));
    let A;
    (t[25] !== i || t[26] !== C || t[27] !== s
      ? ((A = (e, t) =>
          (0, D.jsx)(
            o,
            {
              color: `inverse`,
              delayDuration: 0,
              tooltipContent: (0, D.jsx)(S, { dimension: i, entry: e, percentage: C(e.amountMicros) }),
              children: (0, D.jsxs)(`button`, {
                className: `inline-flex cursor-interaction items-center gap-1.5 rounded-sm py-px focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
                "aria-label":
                  e.value == null
                    ? s.formatMessage(
                        {
                          id: `usageCenter.thread.breakdown.segment.unknownAriaLabel`,
                          defaultMessage: `Other: {percentage}% of usage`,
                          description: `Accessible label for an unknown segment of the thread usage breakdown chart`,
                        },
                        { percentage: C(e.amountMicros) },
                      )
                    : s.formatMessage(
                        {
                          id: `usageCenter.thread.breakdown.segment.localizedAriaLabel`,
                          defaultMessage: `{dimension, select, speed {{value, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} other {{value}}}} reasoning_effort {{value, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} other {{value}}}} other {{value}}}: {percentage}% of usage`,
                          description: `Accessible label for one segment of the thread usage breakdown chart`,
                        },
                        {
                          dimension: i,
                          value: i === `model` ? u(e.value) : e.value,
                          percentage: C(e.amountMicros),
                        },
                      ),
                type: `button`,
                children: [
                  (0, D.jsx)(`span`, {
                    className: `size-2.5 shrink-0 rounded-full`,
                    style: { backgroundColor: g[t % g.length] },
                  }),
                  (0, D.jsx)(w, { dimension: i, value: e.value }),
                ],
              }),
            },
            e.value ?? `unknown`,
          )),
        (t[25] = i),
        (t[26] = C),
        (t[27] = s),
        (t[28] = A))
      : (A = t[28]),
      (d = y.map(A)),
      (t[0] = i),
      (t[1] = s),
      (t[2] = c),
      (t[3] = a.balanceUnit),
      (t[4] = a.groups),
      (t[5] = l),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = _));
  } else ((l = t[5]), (d = t[6]), (f = t[7]), (p = t[8]), (m = t[9]), (h = t[10]), (_ = t[11]));
  let y;
  t[29] !== l || t[30] !== d
    ? ((y = (0, D.jsx)(`div`, { className: l, children: d })), (t[29] = l), (t[30] = d), (t[31] = y))
    : (y = t[31]);
  let b;
  return (
    t[32] !== f || t[33] !== p || t[34] !== m || t[35] !== h || t[36] !== _ || t[37] !== y
      ? ((b = (0, D.jsxs)(`div`, { className: f, "aria-labelledby": p, role: m, children: [h, _, y] })),
        (t[32] = f),
        (t[33] = p),
        (t[34] = m),
        (t[35] = h),
        (t[36] = _),
        (t[37] = y),
        (t[38] = b))
      : (b = t[38]),
    b
  );
}
function x(e, t) {
  return e + t.amountMicros;
}
function S(e) {
  let r = (0, T.c)(18),
    { dimension: i, entry: a, percentage: o } = e,
    s;
  r[0] !== i || r[1] !== a.value || r[2] !== o
    ? ((s = (0, D.jsx)(`span`, {
        className: `font-medium`,
        children: (0, D.jsx)(C, { dimension: i, percentage: o, value: a.value }),
      })),
      (r[0] = i),
      (r[1] = a.value),
      (r[2] = o),
      (r[3] = s))
    : (s = r[3]);
  let c;
  r[4] !== i || r[5] !== a.netNewInputTokens
    ? ((c =
        i === `model` && a.netNewInputTokens != null
          ? (0, D.jsx)(`span`, {
              children: (0, D.jsx)(n, {
                id: `usageCenter.thread.breakdown.tooltip.inputTokens`,
                defaultMessage: `Uncached input tokens: {count}`,
                description: `Uncached input token count for a model usage segment`,
                values: { count: (0, D.jsx)(t, { value: a.netNewInputTokens }) },
              }),
            })
          : null),
      (r[4] = i),
      (r[5] = a.netNewInputTokens),
      (r[6] = c))
    : (c = r[6]);
  let l;
  r[7] !== i || r[8] !== a.cachedInputTokens
    ? ((l =
        i === `model` && a.cachedInputTokens != null
          ? (0, D.jsx)(`span`, {
              children: (0, D.jsx)(n, {
                id: `usageCenter.thread.breakdown.tooltip.cachedInputTokens`,
                defaultMessage: `Cached input tokens: {count}`,
                description: `Cached input token count for a model usage segment`,
                values: { count: (0, D.jsx)(t, { value: a.cachedInputTokens }) },
              }),
            })
          : null),
      (r[7] = i),
      (r[8] = a.cachedInputTokens),
      (r[9] = l))
    : (l = r[9]);
  let u;
  r[10] !== i || r[11] !== a.outputTokens
    ? ((u =
        i === `model` && a.outputTokens != null
          ? (0, D.jsx)(`span`, {
              children: (0, D.jsx)(n, {
                id: `usageCenter.thread.breakdown.tooltip.outputTokens`,
                defaultMessage: `Output tokens: {count}`,
                description: `Output token count for a model usage segment`,
                values: { count: (0, D.jsx)(t, { value: a.outputTokens }) },
              }),
            })
          : null),
      (r[10] = i),
      (r[11] = a.outputTokens),
      (r[12] = u))
    : (u = r[12]);
  let d;
  return (
    r[13] !== s || r[14] !== c || r[15] !== l || r[16] !== u
      ? ((d = (0, D.jsxs)(`div`, { className: `flex flex-col gap-0.5 text-xs`, children: [s, c, l, u] })),
        (r[13] = s),
        (r[14] = c),
        (r[15] = l),
        (r[16] = u),
        (r[17] = d))
      : (d = r[17]),
    d
  );
}
function C(e) {
  let t = (0, T.c)(13),
    { dimension: r, percentage: i, value: a } = e;
  if (a == null) {
    let e;
    return (
      t[0] === i
        ? (e = t[1])
        : ((e = (0, D.jsx)(n, {
            id: `usageCenter.thread.breakdown.tooltip.otherPercentage`,
            defaultMessage: `Other: {percentage}%`,
            description: `Percentage attributed to an unknown current-chat usage dimension`,
            values: { percentage: i },
          })),
          (t[0] = i),
          (t[1] = e)),
      e
    );
  }
  if (r === `speed`) {
    let e;
    return (
      t[2] !== i || t[3] !== a
        ? ((e = (0, D.jsx)(n, {
            id: `usageCenter.thread.breakdown.tooltip.speedPercentage`,
            defaultMessage: `{speed, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} other {{speed}}}: {percentage}%`,
            description: `Response speed and its percentage of the current chat's usage`,
            values: { percentage: i, speed: a },
          })),
          (t[2] = i),
          (t[3] = a),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (r === `reasoning_effort`) {
    let e;
    return (
      t[5] !== i || t[6] !== a
        ? ((e = (0, D.jsx)(n, {
            id: `usageCenter.thread.breakdown.tooltip.reasoningPercentage`,
            defaultMessage: `{effort, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} other {{effort}}}: {percentage}%`,
            description: `Reasoning effort and its percentage of the current chat's usage`,
            values: { effort: a, percentage: i },
          })),
          (t[5] = i),
          (t[6] = a),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let o;
  t[8] === a ? (o = t[9]) : ((o = u(a)), (t[8] = a), (t[9] = o));
  let s;
  return (
    t[10] !== i || t[11] !== o
      ? ((s = (0, D.jsx)(n, {
          id: `usageCenter.thread.breakdown.tooltip.modelPercentage`,
          defaultMessage: `{model}: {percentage}%`,
          description: `Model and its percentage of the current chat's usage`,
          values: { model: o, percentage: i },
        })),
        (t[10] = i),
        (t[11] = o),
        (t[12] = s))
      : (s = t[12]),
    s
  );
}
function w(e) {
  let t = (0, T.c)(12),
    { dimension: r, value: i } = e;
  if (i == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(n, {
            id: `usageCenter.thread.breakdown.other`,
            defaultMessage: `Other`,
            description: `Fallback label for unknown current-chat usage dimensions`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r === `model`) {
    let e;
    t[1] === i ? (e = t[2]) : ((e = u(i)), (t[1] = i), (t[2] = e));
    let n;
    return (
      t[3] === e ? (n = t[4]) : ((n = (0, D.jsx)(D.Fragment, { children: e })), (t[3] = e), (t[4] = n)),
      n
    );
  }
  if (r === `speed`)
    switch (i) {
      case `fast`: {
        let e;
        return (
          t[5] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, D.jsx)(n, {
                id: `usageCenter.thread.breakdown.fast`,
                defaultMessage: `Fast mode`,
                description: `Label for fast-mode speed in the current-chat usage breakdown`,
              })),
              (t[5] = e))
            : (e = t[5]),
          e
        );
      }
      case `ultrafast`: {
        let e;
        return (
          t[6] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, D.jsx)(n, {
                id: `usageCenter.thread.breakdown.ultrafast`,
                defaultMessage: `Ultrafast`,
                description: `Label for ultrafast speed in the current-chat usage breakdown`,
              })),
              (t[6] = e))
            : (e = t[6]),
          e
        );
      }
      case `standard`: {
        let e;
        return (
          t[7] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, D.jsx)(n, {
                id: `usageCenter.thread.breakdown.standard`,
                defaultMessage: `Standard`,
                description: `Label for standard speed in the current-chat usage breakdown`,
              })),
              (t[7] = e))
            : (e = t[7]),
          e
        );
      }
      default: {
        let e;
        return (
          t[8] === i ? (e = t[9]) : ((e = (0, D.jsx)(D.Fragment, { children: i })), (t[8] = i), (t[9] = e)),
          e
        );
      }
    }
  let a;
  return (
    t[10] === i
      ? (a = t[11])
      : ((a = d(i) ? (0, D.jsx)(m, { effort: i }) : (0, D.jsx)(D.Fragment, { children: i })),
        (t[10] = i),
        (t[11] = a)),
    a
  );
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = s()), f(), (E = l()), a(), p(), i(), h(), _(), (D = c()));
  }))();
}
export { y as n, O as r, w as t };
//# sourceMappingURL=thread-usage-breakdown-493f7d53d79c.js.map
