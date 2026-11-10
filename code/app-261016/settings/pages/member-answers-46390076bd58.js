import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, mCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { IMr as a, RMr as o, bLr as s, iRr as c, tyr as l, wLr as u } from "./app-initial-ad16eaadf81f.js";
import { n as d, t as f } from "./identity-d36f6d1aa0ef.js";
var p;
function m() {
  return (m = e(() => {
    (r(),
      o(),
      u(),
      l(),
      t(),
      d(),
      (p = i(n, (e, { get: t }) => ({
        queryKey: [`owner-onboarding`, `member-answers`, e.userId, e.workspaceId],
        enabled: t(s) === e.userId && t(a) === e.workspaceId,
        staleTime: 0,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async ({ signal: t }) => {
          f(e);
          let n = await c.safeGet(`/accounts/{account_id}/users/{user_id}/onboarding_answers`, {
            parameters: { path: { account_id: e.workspaceId, user_id: e.userId } },
            additionalHeaders: { "ChatGPT-Account-ID": e.workspaceId },
            signal: t,
          });
          return (f(e), n);
        },
      }))));
  }))();
}
export { p as n, m as t };
//# sourceMappingURL=member-answers-46390076bd58.js.map
