import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  Qst as r,
  ZSt as i,
  fCt as a,
  mCt as o,
  zst as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  bLr as c,
  iRr as l,
  mlt as u,
  plt as d,
  tyr as f,
  wLr as p,
  zRr as m,
} from "./app-initial-ad16eaadf81f.js";
import { i as h, r as g } from "./workspace-agent-apps-b1c524ac4449.js";
var _, v, y;
function b() {
  return (b = e(() => {
    (i(),
      h(),
      p(),
      f(),
      t(),
      n(),
      d(),
      (_ = o(r, (e, { get: t }) => {
        let n = t(m),
          r = t(c);
        return {
          enabled: n != null && r != null && t(u) === !0,
          queryKey: [`workspace-agent`, `detail`, n, e, r],
          queryFn: ({ signal: t }) => {
            if (n == null || r == null) throw Error(`Missing workspace identity`);
            return l.safeGet(`/hermes/agent/{agent_id}/detail-view`, {
              parameters: { path: { agent_id: e } },
              signal: t,
              expectedIdentity: { accountId: n, userId: r },
            });
          },
          retry: !1,
          staleTime: s.ONE_MINUTE,
        };
      })),
      (v = a(r, (e, { get: t }) => {
        let n = t(m),
          r = t(c);
        return {
          enabled: n != null && r != null && t(u) === !0,
          initialPageParam: null,
          queryKey: [`workspace-agent`, `activity`, n, e, r],
          queryFn: ({ pageParam: t, signal: i }) => {
            if (n == null || r == null)
              throw Error(`Cannot load Workspace Agent activity without an identity`);
            return l.safeGet(`/hermes/agent/{agent_id}/conversations`, {
              parameters: { path: { agent_id: e }, query: { cursor: t, limit: 25 } },
              expectedIdentity: { accountId: n, userId: r },
              signal: i,
            });
          },
          getNextPageParam: (e) => e.cursor ?? void 0,
          retry: !1,
          staleTime: s.ONE_MINUTE,
        };
      })),
      (y = o(r, (e, { get: t }) => {
        let n = t(m);
        return {
          ...g({ accountId: n ?? ``, userId: t(c), connectorIds: e }),
          enabled: n != null && t(c) != null && e.length > 0 && t(u) === !0,
        };
      })));
  }))();
}
export { _ as i, v as n, y as r, b as t };
//# sourceMappingURL=workspace-agent-detail-query-e90126e3ca29.js.map
