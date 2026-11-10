import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  Yxt as a,
  Zxt as o,
  wot as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as c,
  Blt as l,
  GMr as u,
  VPr as d,
  Vlt as f,
  Ymr as p,
  bat as m,
  ehr as h,
  tNr as g,
  yat as _,
} from "./app-initial-5851df3f6cb1.js";
async function v(e, t, n) {
  await y(e, t, [n]);
}
async function y(e, t, n) {
  let r = e.get(u);
  if (r == null || !e.get(f)) return;
  let i = await Promise.allSettled(
    n.map((e) =>
      p.safePost(`/automation/{automation_id}/runs/{run_id}/read`, {
        parameters: { path: { automation_id: t, run_id: e.id } },
        requestBody: { read_at: e.updated_at },
        expectedErrorStatuses: [403, 404, 503],
      }),
    ),
  );
  if (e.get(u) !== r) return;
  await Promise.all([
    d(e.queryClient, [`cloud-automations`, `runs`, r, t]),
    d(e.queryClient, [`cloud-automations`, `run-result`, r, t]),
  ]);
  let a = i.find((e) => e.status === `rejected`);
  if (a?.status === `rejected`) throw a.reason;
}
var b, x;
function S() {
  return (S = e(() => {
    (i(),
      g(),
      m(),
      l(),
      h(),
      c(),
      s(),
      n(),
      (b = a(t, (e, { get: t }) => {
        let n = t(u);
        return {
          enabled: n != null && t(f) && t(_).isCapable,
          queryKey: [`cloud-automations`, `runs`, n, e],
          initialPageParam: null,
          queryFn: ({ pageParam: t, signal: n }) =>
            p.safeGet(`/automation/{automation_id}/runs`, {
              parameters: {
                path: { automation_id: e },
                query: { cursor: t ?? void 0, limit: 25, include_chat_ref: !0 },
              },
              signal: n,
              expectedErrorStatuses: [400, 403, 404, 503],
            }),
          getNextPageParam: (e) => e.cursor ?? void 0,
          refetchInterval: r.FIVE_SECONDS,
          refetchOnWindowFocus: `always`,
          retry: !1,
          staleTime: r.ONE_MINUTE,
        };
      })),
      (x = o(t, ({ automationId: e, runId: t }, { get: n }) => {
        let i = n(u);
        return {
          enabled: i != null && n(f) && n(_).isCapable,
          queryKey: [`cloud-automations`, `run-result`, i, e, t],
          queryFn: async ({ signal: n }) => {
            if (t == null)
              return p.safeGet(`/automation/{automation_id}/runs/latest`, {
                parameters: { path: { automation_id: e } },
                signal: n,
                expectedErrorStatuses: [403, 404, 503],
              });
            let r = await p.safeGet(`/automation/{automation_id}/runs/{run_id}`, {
              parameters: { path: { automation_id: e, run_id: t } },
              signal: n,
              expectedErrorStatuses: [403, 404, 503],
            });
            return { latest_update: r, last_run: r.run };
          },
          refetchInterval: (e) => {
            let n = e.state.data?.last_run;
            return e.state.status !== `error` && (t == null || n?.status === `in_progress`) && r.FIVE_SECONDS;
          },
          retry: !1,
          staleTime: t == null ? r.FIVE_SECONDS : r.ONE_MINUTE,
        };
      })));
  }))();
}
export { b as a, x as i, v as n, y as r, S as t };
//# sourceMappingURL=run-results-state-b1592f2a7689.js.map
