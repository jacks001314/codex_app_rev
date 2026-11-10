import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Bst as n, Qst as r, ZSt as i, mCt as a, zst as o } from "./app-shared-2feb3d4c6fcc.js";
import { bLr as s, iRr as c, tyr as l, wLr as u, zRr as d } from "./app-initial-ad16eaadf81f.js";
var f, p;
function m() {
  return (m = e(() => {
    (i(),
      u(),
      l(),
      t(),
      n(),
      (f = a(r, (e, { get: t }) => {
        let n = t(d),
          r = t(s);
        return {
          queryKey: [`workspace-agent`, `mention-files`, n, e, r],
          enabled: e != null && n != null && r != null,
          staleTime: o.ONE_MINUTE,
          retry: !1,
          queryFn: ({ signal: t }) => {
            if (e == null || n == null || r == null) throw Error(`Missing agent identity`);
            return c.safeGet(`/hermes/agent/{agent_id}/files/tree`, {
              parameters: { path: { agent_id: e } },
              expectedIdentity: { accountId: n, userId: r },
              signal: t,
            });
          },
        };
      })),
      (p = a(r, ({ agentId: e, skillId: t }, { get: n }) => {
        let r = n(d),
          i = n(s);
        return {
          queryKey: [`workspace-agent`, `skill-definition`, r, i, e, t],
          enabled: r != null && i != null,
          queryFn: ({ signal: n }) => {
            if (r == null || i == null) throw Error(`Missing workspace identity`);
            return c.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/definition`, {
              parameters: { path: { agent_id: e, skill_id: t } },
              signal: n,
              expectedIdentity: { accountId: r, userId: i },
            });
          },
          staleTime: o.ONE_MINUTE,
          retry: !1,
        };
      })));
  }))();
}
export { m as n, p as r, f as t };
//# sourceMappingURL=queries-36c7e90bb702.js.map
