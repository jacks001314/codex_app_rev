import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as t, Ost as n, zst as r } from "./app-shared-2feb3d4c6fcc.js";
import { iRr as i, tyr as a } from "./app-initial-ad16eaadf81f.js";
function o({ accountId: e, userId: t, agentId: a, versionScope: o, enabled: s = !0 }) {
  return n({
    queryKey: [`workspace-agent`, `connector-readiness`, e, t, a, o],
    queryFn: ({ signal: n }) => {
      if (t == null) throw Error(`Sign in before checking agent connections`);
      return i.safeGet(`/hermes/agent/{agent_id}/list-connector-readiness`, {
        parameters: { path: { agent_id: a }, query: { version_scope: o } },
        expectedIdentity: { accountId: e, userId: t },
        signal: n,
      });
    },
    enabled: s && t != null,
    retry: !1,
    staleTime: r.ONE_MINUTE,
  });
}
function s(e) {
  return e.connector_identifier.type === `CONNECTOR_ID` ? e.connector_identifier.connector_id : null;
}
function c() {
  return (c = e(() => {
    (a(), t());
  }))();
}
export { o as n, c as r, s as t };
//# sourceMappingURL=apps-query-4cb3d9532588.js.map
