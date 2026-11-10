import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BOt as t,
  G5t as n,
  O5t as r,
  OD as i,
  POt as a,
  X5t as o,
  _jt as s,
  bvt as c,
  dJt as l,
  fJt as u,
  gjt as d,
  hvt as f,
  mD as p,
  vMt as m,
  yD as h,
  yMt as g,
} from "./app-shared-7552fc8d5d82.js";
function _(e, t) {
  if ((h(e, t.accountId), t.userId == null || e.get(a) !== t.userId))
    throw Error(`Authenticated request identity changed or is unavailable`);
  return t.userId;
}
var v, y;
function b() {
  return (b = e(() => {
    (r(),
      t(),
      c(),
      u(),
      m(),
      p(),
      s(),
      (v = o(l, (e, { get: t }) => t(i, e) && t(a) != null && t(g, `971852422`))),
      (y = n(l, (e, { get: t, scope: n }) => ({
        enabled: t(v, e.accountId) && e.userId != null && t(a) === e.userId,
        queryKey: [`workspace-connection-request`, e.accountId, e.pluginId, e.userId],
        queryFn: async ({ signal: t }) => {
          let r = _(n, e),
            i = await f.safePost(`/admin-requests`, {
              additionalHeaders: { "x-openai-use-sheep": `1` },
              expectedIdentity: { accountId: e.accountId, userId: r },
              requestBody: {
                request: {
                  operation: `get_latest`,
                  subject: { request_type: `workspace_connection`, target_id: e.pluginId },
                },
              },
              signal: t,
              retry: !1,
              assertRequestCurrent: () => _(n, e),
            });
          return (t.throwIfAborted(), _(n, e), i);
        },
        refetchOnMount: `always`,
        retry: !1,
        staleTime: d.ONE_MINUTE,
      }))));
  }))();
}
export { v as i, _ as n, y as r, b as t };
//# sourceMappingURL=requests-state-774cb104291f.js.map
