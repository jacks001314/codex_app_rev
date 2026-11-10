import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Fat as t, Pat as n } from "./app-shared-bbfeca5e5737.js";
import {
  Kur as r,
  Xur as i,
  gdr as a,
  iPr as o,
  idr as s,
  sPr as c,
  xdr as l,
  ydr as u,
} from "./app-initial-5851df3f6cb1.js";
function d(e, t) {
  return {
    queryKey: [`mcp-settings`, `app-connect`, `tos`, e, t],
    staleTime: n.FIVE_MINUTES,
    queryFn: ({ signal: n }) =>
      o.safeGet(`/aip/connectors/{connector_id}/tos`, {
        surface: `connector_setup`,
        parameters: { path: { connector_id: e } },
        additionalHeaders: { [a]: t },
        signal: n,
      }),
  };
}
function f(e, t, n) {
  return {
    queryKey: [`app-connect-mfa-requirement`, t, n, e],
    enabled: t != null && n != null,
    staleTime: 0,
    retry: !1,
    refetchOnMount: `always`,
    refetchOnWindowFocus: `always`,
    queryFn: async ({ signal: r }) => {
      if (t == null || n == null) throw Error(`Connection requires an active account`);
      return (
        await o.safeGet(`/aip/connectors/{connector_id}/mfa_requirement`, {
          surface: `connector_setup`,
          parameters: { path: { connector_id: e } },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedIdentity: { accountId: t, userId: n },
          signal: r,
        })
      ).requirement;
    },
  };
}
function p(e, t, n) {
  let a = u(t, n);
  (e.prefetchQuery(r(t, { productSku: a?.productSku })), e.prefetchQuery(d(t, a?.productSku ?? i())));
}
function m() {
  return (m = e(() => {
    (t(), c(), s(), l());
  }))();
}
export { p as i, d as n, m as r, f as t };
//# sourceMappingURL=app-connect-queries-d683cc7b9c3b.js.map
