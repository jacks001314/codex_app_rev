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
  GMr as c,
  YMr as l,
  Ymr as u,
  cct as d,
  ehr as f,
  lct as p,
  tNr as m,
} from "./app-initial-5851df3f6cb1.js";
import { i as h, r as g } from "./workspace-agent-apps-6b85a870e5a0.js";
var _, v, y;
function b() {
  return (b = e(() => {
    (i(),
      h(),
      m(),
      f(),
      s(),
      n(),
      d(),
      (_ = o(t, (e, { get: t }) => {
        let n = t(c),
          i = t(l);
        return {
          enabled: n != null && i != null && t(p) === !0,
          queryKey: [`workspace-agent`, `detail`, n, e, i],
          queryFn: ({ signal: t }) => {
            if (n == null || i == null) throw Error(`Missing workspace identity`);
            return u.safeGet(`/hermes/agent/{agent_id}/detail-view`, {
              parameters: { path: { agent_id: e } },
              signal: t,
              expectedIdentity: { accountId: n, userId: i },
            });
          },
          retry: !1,
          staleTime: r.ONE_MINUTE,
        };
      })),
      (v = a(t, (e, { get: t }) => {
        let n = t(c),
          i = t(l);
        return {
          enabled: n != null && i != null && t(p) === !0,
          initialPageParam: null,
          queryKey: [`workspace-agent`, `activity`, n, e, i],
          queryFn: ({ pageParam: t, signal: r }) => {
            if (n == null || i == null)
              throw Error(`Cannot load Workspace Agent activity without an identity`);
            return u.safeGet(`/hermes/agent/{agent_id}/conversations`, {
              parameters: { path: { agent_id: e }, query: { cursor: t, limit: 25 } },
              expectedIdentity: { accountId: n, userId: i },
              signal: r,
            });
          },
          getNextPageParam: (e) => e.cursor ?? void 0,
          retry: !1,
          staleTime: r.ONE_MINUTE,
        };
      })),
      (y = o(t, (e, { get: t }) => {
        let n = t(c);
        return {
          ...g({ accountId: n ?? ``, userId: t(l), connectorIds: e }),
          enabled: n != null && t(l) != null && e.length > 0 && t(p) === !0,
        };
      })));
  }))();
}
export { _ as i, v as n, y as r, b as t };
//# sourceMappingURL=workspace-agent-detail-query-c8301c5fcc0a.js.map
