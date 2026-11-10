import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  FKt as t,
  RKt as n,
  S3t as r,
  TJt as i,
  b3t as a,
  dbt as o,
  kmn as s,
  s3t as c,
  ubt as l,
  wJt as u,
} from "./app-initial-f094ef01c64d.js";
function d(e) {
  let n = (0, L.c)(10),
    { credits: i, enabled: a } = e,
    { accountId: s, authMethod: c, userId: l } = o(),
    d = Math.round(i * 1e6) / 1e6,
    f;
  n[0] !== s || n[1] !== d || n[2] !== l
    ? ((f = [...R, `credit-estimate`, s, l, d]), (n[0] = s), (n[1] = d), (n[2] = l), (n[3] = f))
    : (f = n[3]);
  let p;
  n[4] === d
    ? (p = n[5])
    : ((p = async () => {
        try {
          return await t.safePost(`/wham/usage/credits/estimate`, { requestBody: { credits: d } });
        } catch {
          return null;
        }
      }),
      (n[4] = d),
      (n[5] = p));
  let m = a && d > 0 && c === `chatgpt` && s != null && l != null,
    h;
  return (
    n[6] !== f || n[7] !== p || n[8] !== m
      ? ((h = {
          queryKey: f,
          queryFn: p,
          enabled: m,
          refetchInterval: u.THIRTY_SECONDS,
          staleTime: u.THIRTY_SECONDS,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (n[6] = f),
        (n[7] = p),
        (n[8] = m),
        (n[9] = h))
      : (h = n[9]),
    r(h)
  );
}
function f(e) {
  let n = (0, L.c)(23),
    { breakdown: i, days: a, enabled: s, scope: c } = e,
    l = c === void 0 ? `workspace` : c,
    { accountId: d, authMethod: f, userId: p } = o(),
    m;
  n[0] === a ? (m = n[1]) : ((m = P(a)), (n[0] = a), (n[1] = m));
  let { endDate: h, startDate: g } = m,
    _;
  n[2] !== d || n[3] !== i || n[4] !== h || n[5] !== l || n[6] !== g || n[7] !== p
    ? ((_ =
        l === `business`
          ? [...R, `business-usage`, d, p, g, h]
          : [...R, `credit-history`, d, p, l, ...(l === `consumer` ? [] : [g, h, i])]),
      (n[2] = d),
      (n[3] = i),
      (n[4] = h),
      (n[5] = l),
      (n[6] = g),
      (n[7] = p),
      (n[8] = _))
    : (_ = n[8]);
  let v;
  n[9] !== i || n[10] !== h || n[11] !== l || n[12] !== g
    ? ((v = () =>
        l === `consumer`
          ? t.safeGet(`/wham/usage/credit-usage-events`)
          : l === `business`
            ? x(g, h)
            : t.safeGet(`/wham/usage/daily-workspace-user-credit-usage`, {
                parameters: {
                  query: {
                    start_date: g,
                    end_date: h,
                    breakdown: i === `reasoning` ? `reasoning_effort` : i,
                  },
                },
              })),
      (n[9] = i),
      (n[10] = h),
      (n[11] = l),
      (n[12] = g),
      (n[13] = v))
    : (v = n[13]);
  let y;
  n[14] !== i || n[15] !== h || n[16] !== g
    ? ((y = (e) => S(e, g, h, i)), (n[14] = i), (n[15] = h), (n[16] = g), (n[17] = y))
    : (y = n[17]);
  let b = s && f === `chatgpt` && d != null && p != null,
    C;
  return (
    n[18] !== _ || n[19] !== v || n[20] !== y || n[21] !== b
      ? ((C = {
          queryKey: _,
          queryFn: v,
          select: y,
          enabled: b,
          refetchInterval: u.ONE_MINUTE,
          staleTime: u.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (n[18] = _),
        (n[19] = v),
        (n[20] = y),
        (n[21] = b),
        (n[22] = C))
      : (C = n[22]),
    r(C)
  );
}
function p(e) {
  let n = (0, L.c)(14),
    { days: i, enabled: a } = e,
    { accountId: s, authMethod: c, userId: l } = o(),
    d;
  n[0] === i ? (d = n[1]) : ((d = P(i)), (n[0] = i), (n[1] = d));
  let { endDate: f, startDate: p } = d,
    m;
  n[2] !== s || n[3] !== f || n[4] !== p || n[5] !== l
    ? ((m = [...R, `personal-history`, s, l, p, f]),
      (n[2] = s),
      (n[3] = f),
      (n[4] = p),
      (n[5] = l),
      (n[6] = m))
    : (m = n[6]);
  let h;
  n[7] !== f || n[8] !== p
    ? ((h = () =>
        t.safeGet(`/wham/usage/daily-token-usage-breakdown`, {
          parameters: { query: { start_date: p, end_date: f, group_by: `day` } },
        })),
      (n[7] = f),
      (n[8] = p),
      (n[9] = h))
    : (h = n[9]);
  let g = a && c === `chatgpt` && s != null && l != null,
    _;
  return (
    n[10] !== m || n[11] !== h || n[12] !== g
      ? ((_ = {
          queryKey: m,
          queryFn: h,
          select: C,
          enabled: g,
          refetchInterval: u.ONE_MINUTE,
          staleTime: u.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (n[10] = m),
        (n[11] = h),
        (n[12] = g),
        (n[13] = _))
      : (_ = n[13]),
    r(_)
  );
}
function m(e) {
  let n = (0, L.c)(18),
    { days: i, enabled: a, scope: s } = e,
    c = s === void 0 ? `workspace` : s,
    { accountId: l, authMethod: d, userId: f } = o(),
    p;
  n[0] === i ? (p = n[1]) : ((p = P(i)), (n[0] = i), (n[1] = p));
  let { endDate: m, startDate: h } = p,
    g;
  n[2] !== l || n[3] !== m || n[4] !== c || n[5] !== h || n[6] !== f
    ? ((g =
        c === `business`
          ? [...R, `business-usage`, l, f, h, m]
          : [...R, `token-history`, l, f, c, h, m]),
      (n[2] = l),
      (n[3] = m),
      (n[4] = c),
      (n[5] = h),
      (n[6] = f),
      (n[7] = g))
    : (g = n[7]);
  let _, v;
  n[8] !== m || n[9] !== c || n[10] !== h
    ? ((_ = () =>
        c === `business`
          ? x(h, m)
          : t.safeGet(`/wham/usage/daily-workspace-user-token-usage-breakdown`, {
              parameters: {
                query: {
                  start_date: h,
                  end_date: m,
                  group_by: `day`,
                  breakdown_by: [`model`],
                  modes: [`codex`, `work`],
                },
              },
            })),
      (v = (e) => T(e, h, m, c !== `workspace`)),
      (n[8] = m),
      (n[9] = c),
      (n[10] = h),
      (n[11] = _),
      (n[12] = v))
    : ((_ = n[11]), (v = n[12]));
  let y = a && c !== `consumer` && d === `chatgpt` && l != null && f != null,
    b;
  return (
    n[13] !== g || n[14] !== _ || n[15] !== v || n[16] !== y
      ? ((b = {
          queryKey: g,
          queryFn: _,
          select: v,
          enabled: y,
          refetchInterval: u.ONE_MINUTE,
          staleTime: u.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (n[13] = g),
        (n[14] = _),
        (n[15] = v),
        (n[16] = y),
        (n[17] = b))
      : (b = n[17]),
    r(b)
  );
}
function h(e) {
  let { query: n, ...r } = O(e, `turns`);
  return a({
    ...r,
    queryFn: () =>
      t.safeGet(`/wham/analytics/daily-workspace-usage-counts`, { parameters: { query: n } }),
    select: (e) => k(e, n.start_date, n.end_date),
    enabled: r.enabled && e.scope !== `workspace`,
  });
}
function g(e) {
  let { query: n, ...r } = O(e, `lines-of-code`);
  return a({
    ...r,
    queryFn: () =>
      t.safeGet(`/wham/analytics/code-attribution`, {
        parameters: { query: { ...n, group: `workspace` } },
      }),
    select: (e) =>
      N(
        e.data.map(({ code_attribution: e, date: t }) => ({
          date: t,
          total: e.lines_of_code.added,
          values: { linesOfCode: e.lines_of_code.added },
        })),
        [`linesOfCode`],
      ),
    enabled: r.enabled && e.scope === `business`,
  });
}
function _(e) {
  let { query: n, ...r } = O(e, `code-review`);
  return a({
    ...r,
    queryFn: () =>
      t.safeGet(`/wham/analytics/daily-code-review-metrics`, { parameters: { query: n } }),
    enabled: r.enabled && e.scope !== `workspace`,
  });
}
function v(e) {
  return b(`skills`, e);
}
function y(e) {
  return b(`plugins`, e);
}
function b(e, n) {
  let i = (0, L.c)(23),
    { days: a, enabled: s, scope: c } = n,
    l = c === void 0 ? `workspace` : c,
    { accountId: d, authMethod: f, userId: p } = o(),
    m;
  i[0] === a ? (m = i[1]) : ((m = P(a)), (i[0] = a), (i[1] = m));
  let { endDate: h, startDate: g } = m,
    _;
  i[2] !== d || i[3] !== e || i[4] !== h || i[5] !== l || i[6] !== g || i[7] !== p
    ? ((_ = [...R, e, d, p, l, g, h]),
      (i[2] = d),
      (i[3] = e),
      (i[4] = h),
      (i[5] = l),
      (i[6] = g),
      (i[7] = p),
      (i[8] = _))
    : (_ = i[8]);
  let v;
  i[9] !== e || i[10] !== h || i[11] !== l || i[12] !== g
    ? ((v = () =>
        e === `skills`
          ? t.safeGet(`/wham/analytics/daily-skill-usage-metrics`, {
              parameters: {
                query: {
                  start_date: g,
                  end_date: h,
                  group_by: `day`,
                  top_skill_limit: l === `workspace` ? 6 : z,
                  workspace_user: !0,
                },
              },
            })
          : t.safeGet(`/wham/analytics/daily-plugin-usage-metrics`, {
              parameters: {
                query: {
                  start_date: g,
                  end_date: h,
                  group_by: `day`,
                  top_plugin_limit: l === `workspace` ? 8 : z,
                  workspace_user: !0,
                },
              },
            })),
      (i[9] = e),
      (i[10] = h),
      (i[11] = l),
      (i[12] = g),
      (i[13] = v))
    : (v = i[13]);
  let y;
  i[14] !== h || i[15] !== l || i[16] !== g
    ? ((y = (e) => E(e, g, h, l)), (i[14] = h), (i[15] = l), (i[16] = g), (i[17] = y))
    : (y = i[17]);
  let b = s && f === `chatgpt` && d != null && p != null,
    x;
  return (
    i[18] !== _ || i[19] !== v || i[20] !== y || i[21] !== b
      ? ((x = {
          queryKey: _,
          queryFn: v,
          select: y,
          enabled: b,
          refetchInterval: u.ONE_MINUTE,
          staleTime: u.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (i[18] = _),
        (i[19] = v),
        (i[20] = y),
        (i[21] = b),
        (i[22] = x))
      : (x = i[22]),
    r(x)
  );
}
function x(e, n) {
  return t.safeGet(`/wham/usage/daily-workspace-user-token-usage-breakdown`, {
    parameters: { query: { start_date: e, end_date: n, group_by: `day` } },
  });
}
function S(e, t, n, r) {
  if (`series` in e) {
    let r = new Map(e.data.map((e) => [e.date, e.values]));
    return {
      total: e.series.reduce((e, t) => e + t.total, 0),
      dataFreshnessTimestamp: e.data_freshness_ts ?? null,
      series: e.series,
      data: F(t, n).map((e) => ({ date: e, values: r.get(e) ?? {} })),
    };
  }
  let i = new Map(),
    a;
  for (let o of e.data) {
    let e = o.date.slice(0, 10);
    if (e < t || e > n) continue;
    let s = i.get(e) ?? {};
    if (`credit_amount` in o) {
      let e = A(o.product_surface);
      s[e] = (s[e] ?? 0) + o.credit_amount;
    } else if (
      ((a = (a ?? 0) + (o.models?.reduce((e, t) => e + (t.on_demand_credits ?? 0), 0) ?? 0)),
      r === `product`)
    )
      for (let [e, t] of Object.entries(o.premium_usage_values?.credit_usage_credits ?? {})) {
        let n = A(e);
        s[n] = (s[n] ?? 0) + t;
      }
    else
      for (let e of o.models ?? []) {
        let t = r === `speed` ? (e.speed ?? `unknown`) : e.model;
        s[t] = (s[t] ?? 0) + (e.on_demand_credits ?? 0);
      }
    i.set(e, s);
  }
  let o = w(
    F(t, n).map((e) => ({ date: e, values: i.get(e) ?? {} })),
    `credits`,
    `data_freshness_ts` in e ? (e.data_freshness_ts ?? null) : null,
  );
  return a == null ? o : { ...o, paidModelTotal: a };
}
function C(e) {
  let t = w(
      e.data.map(({ date: e, models: t }) => {
        let n = {};
        for (let { credits: e, model: r } of t ?? []) n[r] = (n[r] ?? 0) + e;
        return { date: e, values: n };
      }),
      e.units,
      e.data_freshness_ts ?? null,
    ),
    n = new Set(
      e.units === `credits`
        ? []
        : t.series
            .filter(
              ({ key: e, total: n }) => n > 0 && (e.toLowerCase() === `other` || n * 100 < t.total),
            )
            .map(({ key: e }) => e),
    ),
    r =
      n.size === 0
        ? t
        : w(
            t.data.map(({ date: e, values: t }) => {
              let r = {};
              for (let [e, i] of Object.entries(t)) {
                let t = n.has(e) ? `other` : e;
                r[t] = (r[t] ?? 0) + i;
              }
              return { date: e, values: r };
            }),
            t.units,
            t.dataFreshnessTimestamp,
          );
  return {
    attribution: e.data,
    ...w(
      e.data.map(({ date: e, product_surface_usage_values: t }) => {
        let n = {};
        for (let [e, r] of Object.entries(t)) {
          let t = A(e);
          n[t] = (n[t] ?? 0) + r;
        }
        return { date: e, values: n };
      }),
      e.units,
      e.data_freshness_ts ?? null,
    ),
    byModel: {
      ...r,
      series: r.series
        .filter(({ total: e }) => e > 0)
        .sort(
          (e, t) =>
            Number(n.size > 0 && e.key === `other`) - Number(n.size > 0 && t.key === `other`) ||
            t.total - e.total ||
            e.key.localeCompare(t.key),
        ),
    },
  };
}
function w(e, t, n) {
  let r = {};
  for (let { values: t } of e) for (let [e, n] of Object.entries(t)) r[e] = (r[e] ?? 0) + n;
  return {
    total: I(r),
    units: t,
    dataFreshnessTimestamp: n,
    series: Object.entries(r).map(([e, t]) => ({ key: e, label: e, total: t })),
    data: e,
  };
}
function T(e, t, n, r) {
  let i = {},
    a = new Map(e.data.map((e) => [e.date, e])),
    o = 0,
    s = F(t, n).map((e) => {
      let t = a.get(e),
        n = t?.groups ?? t?.models ?? [],
        s = {},
        c = 0,
        l = 0,
        u = 0;
      for (let e of n) {
        let t;
        ((t = `model` in e ? e.model : e.is_other ? `other` : e.dimensions.model), r && (t = j(t)));
        let n = s[t] ?? {
            uncachedInputTokens: 0,
            cachedInputTokens: 0,
            outputTokens: 0,
            totalTokens: 0,
          },
          a = e.uncached_text_input_tokens ?? 0,
          d = e.cached_text_input_tokens ?? 0,
          f = e.text_output_tokens ?? 0,
          p = (`model` in e ? e.text_total_tokens : void 0) || a + d + f;
        ((n.uncachedInputTokens += a),
          (n.cachedInputTokens += d),
          (n.outputTokens += f),
          (n.totalTokens += p),
          (s[t] = n),
          (i[t] = (i[t] ?? 0) + p),
          (o += p),
          (c += a),
          (l += d),
          (u += f));
      }
      return {
        date: e,
        uncachedInputTokens: c,
        cachedInputTokens: l,
        outputTokens: u,
        tokensByModel: s,
      };
    });
  return {
    total: o,
    dataFreshnessTimestamp: e.data_freshness_ts ?? null,
    models: Object.entries(i)
      .map(([e, t]) => ({ key: e, total: t }))
      .sort(
        (e, t) =>
          Number(r && e.key === `other`) - Number(r && t.key === `other`) || t.total - e.total,
      ),
    data: s,
  };
}
function E(e, t, n, r) {
  let i = new Map(),
    a = new Map(),
    o = new Map(e.data.map((e) => [e.date, e])),
    s = F(t, n).map((e) => {
      let t = o.get(e);
      if (t == null) return { date: e, total: 0, values: {} };
      let n = `skill_usage_overviews` in t ? t.skill_usage_overviews : t.plugin_usage_overviews,
        s = {};
      for (let e of n) {
        if (r !== `workspace` && e.invocation_counts === 0) continue;
        let t = r !== `workspace` && `skill_name` in e ? e.skill_name : e.display_name;
        if (r !== `workspace`) {
          let n = D(e.display_name);
          ((t =
            n === `` || n === `other` || t.toLowerCase() === `other` ? `other` : (a.get(n) ?? t)),
            a.set(n, t));
        }
        let n = i.get(t);
        ((s[t] = (s[t] ?? 0) + e.invocation_counts),
          i.set(t, {
            key: t,
            name: n?.name ?? e.display_name,
            total: (n?.total ?? 0) + e.invocation_counts,
          }));
      }
      return { date: t.date, total: I(s), values: s };
    });
  return {
    total: s.reduce((e, t) => e + t.total, 0),
    dataFreshnessTimestamp: e.data_freshness_ts ?? null,
    series: Array.from(i.values()).sort(
      (e, t) =>
        Number(r !== `workspace` && e.key === `other`) -
          Number(r !== `workspace` && t.key === `other`) ||
        t.total - e.total ||
        (r === `workspace` ? 0 : e.key.localeCompare(t.key)),
    ),
    data: s,
  };
}
function D(e) {
  let t = e
      .normalize(`NFKC`)
      .replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069]/gu, ``)
      .replace(/^connector\s+/iu, ``)
      .replace(/\s+/gu, ` `)
      .trim()
      .toLowerCase(),
    n = t.indexOf(`:`);
  if (n < 0) return t;
  let r = t.slice(0, n).trim(),
    i = t.slice(n + 1).trim();
  return i === r ||
    i.startsWith(`${r.split(` `)[0]} `) ||
    (r === `openai library` && i === `library`)
    ? i
    : t;
}
function O(
  { auth: e, days: t, enabled: n = !0, refetchInterval: r = u.ONE_MINUTE, retry: i = !1, scope: a },
  o,
) {
  let { endDate: s, startDate: c } = P(t);
  return {
    query: { start_date: c, end_date: s, group_by: `day`, workspace_user: !0 },
    queryKey: [...R, o, e.accountId, e.userId, a, c, s],
    enabled: n && e.authMethod === `chatgpt` && e.accountId != null && e.userId != null,
    refetchInterval: r,
    staleTime: u.ONE_MINUTE,
    refetchOnWindowFocus: !1,
    retry: i,
  };
}
function k(e, t, n) {
  let r = new Map(e.data.map((e) => [e.date, e])),
    i = F(t, n).filter((e) => e !== n || r.has(e)),
    a = {},
    o = new Map();
  for (let t of e.data) {
    let e = {};
    for (let n of t.models ?? []) {
      let t = j(n.model);
      e[t] = (e[t] ?? 0) + (n.turns ?? 0);
    }
    (M(e, t.totals?.turns), o.set(t.date, e));
    for (let [t, n] of Object.entries(e)) a[t] = (a[t] ?? 0) + n;
  }
  let s = Object.entries(a)
      .filter(([, e]) => e > 0)
      .sort(
        ([e, t], [n, r]) =>
          Number(e === `other`) - Number(n === `other`) || r - t || e.localeCompare(n),
      )
      .map(([e]) => e),
    c = i.map((e) => {
      let t = o.get(e),
        n = Object.fromEntries(s.map((e) => [e, t?.[e] ?? 0]));
      return { date: e, total: I(n), values: n };
    }),
    l = i.map((e) => {
      let t = r.get(e),
        n = Object.fromEntries(
          Object.entries(B).map(([e, n]) => [
            e,
            t?.clients.reduce((e, t) => e + (n.includes(t.client_id) ? t.turns : 0), 0) ?? 0,
          ]),
        );
      return (M(n, t?.totals?.turns), { date: e, total: I(n), values: n });
    }),
    u = Object.keys(B);
  return (
    l.some(({ values: e }) => e.other != null) && u.push(`other`),
    { byModel: N(c, s), bySurface: N(l, u) }
  );
}
function A(e) {
  return e.startsWith(`work_`) ? `work` : `codex`;
}
function j(e) {
  let t = e.trim().toLowerCase();
  return t === `codex-auto-review` || t === `other` ? `other` : e;
}
function M(e, t) {
  let n = I(e),
    r = Math.max(0, (t ?? n) - n);
  r > 0 && (e.other = (e.other ?? 0) + r);
}
function N(e, t) {
  return {
    total: e.reduce((e, t) => e + t.total, 0),
    dataFreshnessTimestamp: null,
    series: t
      .map((t) => ({ key: t, name: t, total: e.reduce((e, n) => e + (n.values[t] ?? 0), 0) }))
      .filter(({ total: e }) => e > 0),
    data: e,
  };
}
function P(e) {
  let t = new Date(),
    n = new Date(t);
  return (
    n.setUTCDate(n.getUTCDate() - e + 1),
    { endDate: t.toISOString().slice(0, 10), startDate: n.toISOString().slice(0, 10) }
  );
}
function F(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`),
    r = [];
  for (; n.toISOString().slice(0, 10) <= t;)
    (r.push(n.toISOString().slice(0, 10)), n.setUTCDate(n.getUTCDate() + 1));
  return r;
}
function I(e) {
  return Object.values(e).reduce((e, t) => e + t, 0);
}
var L,
  R,
  z,
  B,
  V = e(() => {
    ((L = s()),
      c(),
      l(),
      i(),
      n(),
      (R = [`usage-settings`, `usage-billing`]),
      (z = 10),
      (B = {
        desktop: [`CODEX_DESKTOP_APP`, `CODEX_WORK_DESKTOP`],
        cli: [`CODEX_CLI`],
        vscode: [`CODEX_IDE_VSCODE`],
        web: [`CODEX_WEB`],
        workWeb: [`CODEX_WORK_WEB`],
        mobile: [`CODEX_WORK_MOBILE`],
        codeReview: [`CODEX_GITHUB`],
      }));
  });
export { d as a, y as c, h as i, v as l, _ as n, f as o, g as r, p as s, V as t, m as u };
//# sourceMappingURL=queries-82a0d88b0673.js.map
