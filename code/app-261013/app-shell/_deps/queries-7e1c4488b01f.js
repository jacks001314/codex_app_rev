import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Fat as n, Pat as r, Pxt as i, Zxt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { GMr as s, YMr as c, Ymr as l, ehr as u, tNr as d } from "./app-initial-5851df3f6cb1.js";
var f, p;
function m() {
  return (m = e(() => {
    (i(),
      d(),
      u(),
      o(),
      n(),
      (f = a(t, (e, { get: t }) => {
        let n = t(s),
          i = t(c);
        return {
          queryKey: [`workspace-agent`, `mention-files`, n, e, i],
          enabled: e != null && n != null && i != null,
          staleTime: r.ONE_MINUTE,
          retry: !1,
          queryFn: ({ signal: t }) => {
            if (e == null || n == null || i == null) throw Error(`Missing agent identity`);
            return l.safeGet(`/hermes/agent/{agent_id}/files/tree`, {
              parameters: { path: { agent_id: e } },
              expectedIdentity: { accountId: n, userId: i },
              signal: t,
            });
          },
        };
      })),
      (p = a(t, ({ agentId: e, skillId: t }, { get: n }) => {
        let i = n(s),
          a = n(c);
        return {
          queryKey: [`workspace-agent`, `skill-definition`, i, a, e, t],
          enabled: i != null && a != null,
          queryFn: ({ signal: n }) => {
            if (i == null || a == null) throw Error(`Missing workspace identity`);
            return l.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/definition`, {
              parameters: { path: { agent_id: e, skill_id: t } },
              signal: n,
              expectedIdentity: { accountId: i, userId: a },
            });
          },
          staleTime: r.ONE_MINUTE,
          retry: !1,
        };
      })));
  }))();
}
export { m as n, p as r, f as t };
//# sourceMappingURL=queries-7e1c4488b01f.js.map
