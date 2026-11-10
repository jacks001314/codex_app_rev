import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Cpn as r,
  Jit as i,
  Kit as a,
  MAt as o,
  NAt as s,
  NB as c,
  Opn as l,
  Spn as u,
  cF as d,
  hmn as f,
  jB as p,
  kmn as m,
  sF as h,
  vpn as g,
} from "./app-initial-f094ef01c64d.js";
import { Ah as _, kh as v } from "./app-primary-4c40d73a1074.js";
import { n as y, t as b } from "./model-and-reasoning-effort-translations-550629a13cba.js";
function x(e) {
  let t = (0, D.c)(20),
    { usage: n, title: i, showCostUsd: a } = e,
    o = a === void 0 || a,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s =
        i ??
        (0, k.jsx)(r, {
          id: `usageCenter.thread.breakdown.title`,
          defaultMessage: `Usage in this chat`,
          description: `Title for the current chat's detailed usage breakdown`,
        })),
      (t[0] = i),
      (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, k.jsx)(`span`, {
        className: `min-w-0 truncate font-semibold text-default`,
        children: s,
      })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] !== o || t[5] !== n.costUsd || t[6] !== n.creditsUsed
    ? ((l = (0, k.jsx)(`span`, {
        className: `shrink-0 text-secondary tabular-nums`,
        children:
          o && n.costUsd != null
            ? (0, k.jsx)(r, {
                id: `usageCenter.thread.breakdown.total`,
                defaultMessage: `{creditCount} credits · {cost}`,
                description: `Total estimated credits and dollar cost for the current chat`,
                values: {
                  creditCount: (0, k.jsx)(g, {
                    value: n.creditsUsed,
                    notation: `compact`,
                    maximumFractionDigits: 1,
                  }),
                  cost: (0, k.jsx)(g, {
                    value: n.costUsd,
                    style: `currency`,
                    currency: `USD`,
                    maximumFractionDigits: n.costUsd < 0.01 ? 4 : 2,
                  }),
                },
              })
            : (0, k.jsx)(r, {
                id: `usageCenter.thread.breakdown.totalCreditsOnly`,
                defaultMessage: `{creditCount} credits`,
                description: `Total credits used by a task when dollar amounts are unavailable`,
                values: {
                  creditCount: (0, k.jsx)(g, {
                    value: n.creditsUsed,
                    notation: `compact`,
                    maximumFractionDigits: 1,
                  }),
                },
              }),
      })),
      (t[4] = o),
      (t[5] = n.costUsd),
      (t[6] = n.creditsUsed),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] !== c || t[9] !== l
    ? ((u = (0, k.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [c, l],
      })),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d, f, p;
  t[11] === n
    ? ((d = t[12]), (f = t[13]), (p = t[14]))
    : ((d = (0, k.jsx)(S, { dimension: `model`, usage: n })),
      (f = (0, k.jsx)(S, { dimension: `reasoning_effort`, usage: n })),
      (p = (0, k.jsx)(S, { dimension: `speed`, usage: n })),
      (t[11] = n),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p));
  let m;
  return (
    t[15] !== u || t[16] !== d || t[17] !== f || t[18] !== p
      ? ((m = (0, k.jsxs)(`div`, {
          className: `flex flex-col gap-3 px-3 py-2 text-xs leading-4 select-none`,
          children: [u, d, f, p],
        })),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function S(e) {
  let t = (0, D.c)(38),
    { dimension: n, usage: i } = e,
    o = l(),
    s = (0, O.useId)(),
    c,
    u,
    d,
    f,
    m,
    g,
    _;
  if (t[0] !== n || t[1] !== o || t[2] !== s || t[3] !== i.groups) {
    let e = v(i.groups, n),
      l = e.reduce(C, 0),
      y = l > 0 ? e : [],
      b;
    t[11] === l ? (b = t[12]) : ((b = (e) => Math.round((e / l) * 100)), (t[11] = l), (t[12] = b));
    let x = b;
    ((d = `flex flex-col gap-1.5`), (f = s), (m = `group`));
    let S;
    t[13] === n
      ? (S = t[14])
      : ((S =
          n === `model`
            ? (0, k.jsx)(r, {
                id: `usageCenter.thread.breakdown.model`,
                defaultMessage: `Models`,
                description: `Label for model usage in the current chat breakdown`,
              })
            : n === `reasoning_effort`
              ? (0, k.jsx)(r, {
                  id: `usageCenter.thread.breakdown.reasoning`,
                  defaultMessage: `Reasoning`,
                  description: `Label for reasoning effort usage in the current chat breakdown`,
                })
              : (0, k.jsx)(r, {
                  id: `usageCenter.thread.breakdown.speed`,
                  defaultMessage: `Speed`,
                  description: `Label for response speed usage in the current chat breakdown`,
                })),
        (t[13] = n),
        (t[14] = S));
    let T;
    t[15] !== s || t[16] !== S
      ? ((T = (0, k.jsx)(`span`, { id: s, className: `text-secondary`, children: S })),
        (t[15] = s),
        (t[16] = S),
        (t[17] = T))
      : (T = t[17]);
    let D =
      y.length === 0
        ? (0, k.jsx)(`span`, {
            className: `text-tertiary`,
            children: (0, k.jsx)(r, {
              id: `usageCenter.thread.breakdown.noData`,
              defaultMessage: `Not available`,
              description: `Shown when one current-chat usage breakdown category has no recorded data`,
            }),
          })
        : null;
    t[18] !== T || t[19] !== D
      ? ((g = (0, k.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2`,
          children: [T, D],
        })),
        (t[18] = T),
        (t[19] = D),
        (t[20] = g))
      : (g = t[20]);
    let O;
    (t[21] !== n || t[22] !== x
      ? ((O = (e, t) => {
          let r = x(e.creditsMicros);
          return (0, k.jsx)(
            a,
            {
              color: `inverse`,
              delayDuration: 0,
              tooltipContent: (0, k.jsx)(w, { dimension: n, entry: e, percentage: r }),
              children: (0, k.jsx)(`button`, {
                className: `h-full min-w-1 basis-0 cursor-interaction`,
                "aria-hidden": !0,
                style: { backgroundColor: p[t % p.length], flexGrow: e.creditsMicros },
                tabIndex: -1,
                type: `button`,
              }),
            },
            e.value ?? `unknown`,
          );
        }),
        (t[21] = n),
        (t[22] = x),
        (t[23] = O))
      : (O = t[23]),
      (_ = (0, k.jsx)(`div`, {
        className: `flex h-2 overflow-hidden rounded-full bg-text/10`,
        children: y.map(O),
      })),
      (c = `flex flex-wrap gap-x-4 gap-y-1.5 text-secondary`));
    let A;
    (t[24] !== n || t[25] !== x || t[26] !== o
      ? ((A = (e, t) =>
          (0, k.jsx)(
            a,
            {
              color: `inverse`,
              delayDuration: 0,
              tooltipContent: (0, k.jsx)(w, {
                dimension: n,
                entry: e,
                percentage: x(e.creditsMicros),
              }),
              children: (0, k.jsxs)(`button`, {
                className: `inline-flex cursor-interaction items-center gap-1.5 rounded-sm py-px focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
                "aria-label":
                  e.value == null
                    ? o.formatMessage(
                        {
                          id: `usageCenter.thread.breakdown.segment.unknownAriaLabel`,
                          defaultMessage: `Other: {percentage}% of usage`,
                          description: `Accessible label for an unknown segment of the thread usage breakdown chart`,
                        },
                        { percentage: x(e.creditsMicros) },
                      )
                    : o.formatMessage(
                        {
                          id: `usageCenter.thread.breakdown.segment.localizedAriaLabel`,
                          defaultMessage: `{dimension, select, speed {{value, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} other {{value}}}} reasoning_effort {{value, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} other {{value}}}} other {{value}}}: {percentage}% of usage`,
                          description: `Accessible label for one segment of the thread usage breakdown chart`,
                        },
                        {
                          dimension: n,
                          value: n === `model` ? h(e.value) : e.value,
                          percentage: x(e.creditsMicros),
                        },
                      ),
                type: `button`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: `size-2.5 shrink-0 rounded-full`,
                    style: { backgroundColor: p[t % p.length] },
                  }),
                  (0, k.jsx)(E, { dimension: n, value: e.value }),
                ],
              }),
            },
            e.value ?? `unknown`,
          )),
        (t[24] = n),
        (t[25] = x),
        (t[26] = o),
        (t[27] = A))
      : (A = t[27]),
      (u = y.map(A)),
      (t[0] = n),
      (t[1] = o),
      (t[2] = s),
      (t[3] = i.groups),
      (t[4] = c),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = m),
      (t[9] = g),
      (t[10] = _));
  } else ((c = t[4]), (u = t[5]), (d = t[6]), (f = t[7]), (m = t[8]), (g = t[9]), (_ = t[10]));
  let y;
  t[28] !== c || t[29] !== u
    ? ((y = (0, k.jsx)(`div`, { className: c, children: u })),
      (t[28] = c),
      (t[29] = u),
      (t[30] = y))
    : (y = t[30]);
  let b;
  return (
    t[31] !== d || t[32] !== f || t[33] !== m || t[34] !== g || t[35] !== _ || t[36] !== y
      ? ((b = (0, k.jsxs)(`div`, {
          className: d,
          "aria-labelledby": f,
          role: m,
          children: [g, _, y],
        })),
        (t[31] = d),
        (t[32] = f),
        (t[33] = m),
        (t[34] = g),
        (t[35] = _),
        (t[36] = y),
        (t[37] = b))
      : (b = t[37]),
    b
  );
}
function C(e, t) {
  return e + t.creditsMicros;
}
function w(e) {
  let t = (0, D.c)(18),
    { dimension: n, entry: i, percentage: a } = e,
    o;
  t[0] !== n || t[1] !== i.value || t[2] !== a
    ? ((o = (0, k.jsx)(`span`, {
        className: `font-medium`,
        children: (0, k.jsx)(T, { dimension: n, percentage: a, value: i.value }),
      })),
      (t[0] = n),
      (t[1] = i.value),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== n || t[5] !== i.netNewInputTokens
    ? ((s =
        n === `model` && i.netNewInputTokens != null
          ? (0, k.jsx)(`span`, {
              children: (0, k.jsx)(r, {
                id: `usageCenter.thread.breakdown.tooltip.inputTokens`,
                defaultMessage: `Uncached input tokens: {count}`,
                description: `Uncached input token count for a model usage segment`,
                values: { count: (0, k.jsx)(g, { value: i.netNewInputTokens }) },
              }),
            })
          : null),
      (t[4] = n),
      (t[5] = i.netNewInputTokens),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] !== n || t[8] !== i.cachedInputTokens
    ? ((c =
        n === `model` && i.cachedInputTokens != null
          ? (0, k.jsx)(`span`, {
              children: (0, k.jsx)(r, {
                id: `usageCenter.thread.breakdown.tooltip.cachedInputTokens`,
                defaultMessage: `Cached input tokens: {count}`,
                description: `Cached input token count for a model usage segment`,
                values: { count: (0, k.jsx)(g, { value: i.cachedInputTokens }) },
              }),
            })
          : null),
      (t[7] = n),
      (t[8] = i.cachedInputTokens),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== n || t[11] !== i.outputTokens
    ? ((l =
        n === `model` && i.outputTokens != null
          ? (0, k.jsx)(`span`, {
              children: (0, k.jsx)(r, {
                id: `usageCenter.thread.breakdown.tooltip.outputTokens`,
                defaultMessage: `Output tokens: {count}`,
                description: `Output token count for a model usage segment`,
                values: { count: (0, k.jsx)(g, { value: i.outputTokens }) },
              }),
            })
          : null),
      (t[10] = n),
      (t[11] = i.outputTokens),
      (t[12] = l))
    : (l = t[12]);
  let u;
  return (
    t[13] !== o || t[14] !== s || t[15] !== c || t[16] !== l
      ? ((u = (0, k.jsxs)(`div`, {
          className: `flex flex-col gap-0.5 text-xs`,
          children: [o, s, c, l],
        })),
        (t[13] = o),
        (t[14] = s),
        (t[15] = c),
        (t[16] = l),
        (t[17] = u))
      : (u = t[17]),
    u
  );
}
function T(e) {
  let t = (0, D.c)(13),
    { dimension: n, percentage: i, value: a } = e;
  if (a == null) {
    let e;
    return (
      t[0] === i
        ? (e = t[1])
        : ((e = (0, k.jsx)(r, {
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
  if (n === `speed`) {
    let e;
    return (
      t[2] !== i || t[3] !== a
        ? ((e = (0, k.jsx)(r, {
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
  if (n === `reasoning_effort`) {
    let e;
    return (
      t[5] !== i || t[6] !== a
        ? ((e = (0, k.jsx)(r, {
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
  t[8] === a ? (o = t[9]) : ((o = h(a)), (t[8] = a), (t[9] = o));
  let s;
  return (
    t[10] !== i || t[11] !== o
      ? ((s = (0, k.jsx)(r, {
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
function E(e) {
  let t = (0, D.c)(12),
    { dimension: n, value: i } = e;
  if (i == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, k.jsx)(r, {
            id: `usageCenter.thread.breakdown.other`,
            defaultMessage: `Other`,
            description: `Fallback label for unknown current-chat usage dimensions`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `model`) {
    let e;
    t[1] === i ? (e = t[2]) : ((e = h(i)), (t[1] = i), (t[2] = e));
    let n;
    return (
      t[3] === e
        ? (n = t[4])
        : ((n = (0, k.jsx)(k.Fragment, { children: e })), (t[3] = e), (t[4] = n)),
      n
    );
  }
  if (n === `speed`)
    switch (i) {
      case `fast`: {
        let e;
        return (
          t[5] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, k.jsx)(r, {
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
            ? ((e = (0, k.jsx)(r, {
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
            ? ((e = (0, k.jsx)(r, {
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
          t[8] === i
            ? (e = t[9])
            : ((e = (0, k.jsx)(k.Fragment, { children: i })), (t[8] = i), (t[9] = e)),
          e
        );
      }
    }
  let a;
  return (
    t[10] === i
      ? (a = t[11])
      : ((a = s(i) ? (0, k.jsx)(b, { effort: i }) : (0, k.jsx)(k.Fragment, { children: i })),
        (t[10] = i),
        (t[11] = a)),
    a
  );
}
var D,
  O,
  k,
  A = e(() => {
    ((D = m()), (O = t(n(), 1)), u(), y(), o(), i(), d(), c(), _(), (k = f()));
  });
export { x as n, A as r, E as t };
//# sourceMappingURL=thread-usage-breakdown-f26f6335d0fb.js.map
