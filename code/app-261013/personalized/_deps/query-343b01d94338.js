import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Cot as n,
  EPt as r,
  Fat as i,
  Pat as a,
  Pxt as o,
  RLt as s,
  TLt as c,
  Zxt as l,
  fLt as u,
  oIt as d,
  pIt as f,
  pLt as p,
  wot as m,
  xLt as h,
} from "./app-shared-bbfeca5e5737.js";
import { hgn as g, ygn as _ } from "./app-initial-5851df3f6cb1.js";
function v(e, t, n = Date.now()) {
  let r = y(e, t),
    i = Math.floor((n - C) / S) * S + C;
  return {
    endTimeMs: r === `daily` ? i + S : Math.ceil(n / x) * x,
    interval: r,
    startTimeMs: i - (w[e] - 1) * S,
  };
}
function y(e, t) {
  switch (t) {
    case `auto`:
      return e === `7d` ? `hourly` : `daily`;
    case `hourly`:
    case `daily`:
      return t;
  }
}
function b(e, t) {
  if (t == null || t === 0) return;
  let n = ((e - t) / t) * 100;
  return Number.isFinite(n) ? n : void 0;
}
var x, S, C, w, T, E, D, O, k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    (r(),
      (x = 36e5),
      (S = 24 * x),
      (C = 8 * x),
      (w = { "7d": 7, "30d": 30 }),
      (T = p({
        start_time_ms: u().int().nonnegative(),
        end_time_ms: u().int().nonnegative(),
        granularity: d([`1h`, `1d`]),
      })),
      (E = p({
        request_traffic: p({
          total_requests: u().nonnegative(),
          unique_visitors: u().nonnegative(),
          points: f(
            p({
              timestamp_ms: u().int().nonnegative(),
              requests: u().nonnegative(),
              unique_visitors: u().nonnegative(),
              requests_by_type: h(c(), u().nonnegative()),
            }),
          ),
          top_paths: f(
            p({ path: c().min(1), requests: u().nonnegative(), unique_visitors: u().nonnegative() }),
          ),
        }).nullish(),
        project_id: c(),
        window: T,
        overall: p({
          page_views: p({ value: u().nonnegative() }),
          unique_visitors: p({ value: u().nonnegative() }),
        }),
        timeseries: p({
          points: f(
            p({
              requests_by_type: h(c(), u().nonnegative()).optional(),
              timestamp_ms: u().int().nonnegative(),
              page_views: u().nonnegative(),
              unique_visitors: u().nonnegative(),
            }),
          ),
        }),
        top_pages: f(
          p({ path: c().min(1), page_views: u().nonnegative(), unique_visitors: u().nonnegative() }),
        ),
      })),
      (D = p({ project_id: c(), event_names: f(c().min(1).max(64)) })),
      (O = p({
        project_id: c(),
        event_name: c().min(1).max(64),
        window: T.extend({ granularity: t(`1d`) }),
        overall: p({
          occurrences: p({ value: u().nonnegative() }),
          unique_visitors: p({ value: u().nonnegative() }),
        }),
        timeseries: p({
          points: f(p({ timestamp_ms: u().int().nonnegative(), occurrences: u().nonnegative() })),
        }),
      })),
      (k = [`7d`, `30d`]),
      (A = `Etc/GMT+8`),
      (j = E.transform((e) => ({
        endTimeMs: e.window.end_time_ms,
        interval: e.window.granularity === `1h` ? `hourly` : `daily`,
        projectId: e.project_id,
        startTimeMs: e.window.start_time_ms,
        hasRequestBreakdown: e.request_traffic != null,
        summary: {
          pageViews: e.request_traffic?.total_requests ?? e.overall.page_views.value,
          uniqueVisitors: e.request_traffic?.unique_visitors ?? e.overall.unique_visitors.value,
        },
        topPages:
          e.request_traffic == null
            ? e.top_pages.map(({ page_views: e, path: t, unique_visitors: n }) => ({
                pageViews: e,
                path: t,
                uniqueVisitors: n,
              }))
            : e.request_traffic.top_paths.map(({ requests: e, path: t, unique_visitors: n }) => ({
                pageViews: e,
                path: t,
                uniqueVisitors: n,
              })),
        traffic:
          e.request_traffic == null
            ? e.timeseries.points.map(({ page_views: e, timestamp_ms: t, unique_visitors: n }) => ({
                requestsByType: void 0,
                pageViews: e,
                timestampMs: t,
                uniqueVisitors: n,
              }))
            : e.request_traffic.points.map(
                ({ requests: e, timestamp_ms: t, unique_visitors: n, requests_by_type: r }) => ({
                  pageViews: e,
                  timestampMs: t,
                  uniqueVisitors: n,
                  requestsByType: r,
                }),
              ),
      }))),
      (M = E.omit({ request_traffic: !0 }).transform((e) => j.parse(e))),
      (N = D.transform((e) => ({ eventNames: e.event_names, projectId: e.project_id }))),
      (P = O.transform((e) => ({
        endTimeMs: e.window.end_time_ms,
        eventName: e.event_name,
        interval: `daily`,
        occurrences: e.timeseries.points.map(({ occurrences: e, timestamp_ms: t }) => ({
          count: e,
          timestampMs: t,
        })),
        projectId: e.project_id,
        startTimeMs: e.window.start_time_ms,
        totalOccurrences: e.overall.occurrences.value,
        uniqueVisitors: e.overall.unique_visitors.value,
      }))));
  }))();
}
function I() {
  return v(`30d`, `daily`).endTimeMs - Date.now() + 1e3 + Math.random() * a.FIVE_MINUTES;
}
function L(e) {
  return v(`30d`, `daily`, e).endTimeMs !== v(`30d`, `daily`).endTimeMs;
}
function R({ includeRequestBreakdown: e, granularity: t, projectId: n, range: r }) {
  return [...V, n, r, y(r, t), ...(e ? [`request-breakdown`] : [])];
}
function z(e) {
  return [...H, e];
}
function B({ eventName: e, projectId: t, range: n }) {
  return [...U, t, e, n];
}
var V, H, U, W, G, K, q;
function J() {
  return (J = e(() => {
    (o(),
      r(),
      m(),
      i(),
      _(),
      F(),
      (V = [`appgen`, `analytics`, `overview`]),
      (H = [`appgen`, `analytics`, `events`]),
      (U = [`appgen`, `analytics`, `event`]),
      (W = l(n, (e) => ({
        queryKey: R(e),
        queryFn: async () => {
          let { endTimeMs: t, interval: n, startTimeMs: r } = v(e.range, e.granularity);
          return (e.includeRequestBreakdown ? j : M).parse(
            await g(
              `sites.get_site_analytics_overview`,
              {
                project_id: e.projectId,
                start_time_ms: r,
                end_time_ms: t,
                granularity: n === `hourly` ? `1h` : `1d`,
              },
              s(),
            ),
          );
        },
        retry: !1,
        refetchInterval: I,
        refetchIntervalInBackground: !0,
        refetchOnMount: (e) => !L(e.state.dataUpdatedAt) || `always`,
        staleTime: a.FIVE_MINUTES,
      }))),
      (G = l(n, (e) => ({
        queryKey: z(e),
        queryFn: async () => {
          let { endTimeMs: t, startTimeMs: n } = v(`30d`, `daily`);
          return N.parse(
            await g(
              `sites.list_site_analytics_events`,
              { project_id: e, start_time_ms: n, end_time_ms: t },
              s(),
            ),
          );
        },
        retry: !1,
        refetchInterval: I,
        refetchIntervalInBackground: !0,
        refetchOnMount: (e) => !L(e.state.dataUpdatedAt) || `always`,
        staleTime: a.FIVE_MINUTES,
      }))),
      (K = l(n, (e) => ({
        queryKey: B(e),
        queryFn: async () => {
          let { endTimeMs: t, startTimeMs: n } = v(e.range, `daily`);
          return P.parse(
            await g(
              `sites.query_site_analytics_event`,
              { project_id: e.projectId, event_name: e.eventName, start_time_ms: n, end_time_ms: t },
              s(),
            ),
          );
        },
        retry: !1,
        refetchInterval: I,
        refetchIntervalInBackground: !0,
        refetchOnMount: (e) => !L(e.state.dataUpdatedAt) || `always`,
        staleTime: a.FIVE_MINUTES,
      }))),
      (q = l(n, (e) => ({
        queryKey: [
          ...V,
          e.projectId,
          `comparison`,
          e.startTimeMs,
          e.endTimeMs,
          e.interval,
          e.includeRequestBreakdown,
        ],
        queryFn: async () =>
          (e.includeRequestBreakdown ? j : M).parse(
            await g(
              `sites.get_site_analytics_overview`,
              {
                project_id: e.projectId,
                start_time_ms: e.startTimeMs - 6048e5,
                end_time_ms: e.endTimeMs - 6048e5,
                granularity: e.interval === `hourly` ? `1h` : `1d`,
              },
              s(),
            ),
          ),
        retry: !1,
        staleTime: a.FIVE_MINUTES,
      }))));
  }))();
}
export { J as a, b as c, W as i, F as l, K as n, k as o, G as r, A as s, q as t };
//# sourceMappingURL=query-343b01d94338.js.map
