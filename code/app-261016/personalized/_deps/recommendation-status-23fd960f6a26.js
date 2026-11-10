import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, VRt as n, hRt as r, kLt as i, kRt as a } from "./app-shared-2feb3d4c6fcc.js";
import { iRr as o, tyr as s } from "./app-initial-ad16eaadf81f.js";
function c(e, t) {
  return {
    queryKey: [`chatgpt-security`, e, `recommendations`, t],
    queryFn: async ({ signal: n }) => {
      if (!t) throw Error(`Cannot load security recommendations without a user`);
      let r = await o.safeGet(`/accounts/security/recommendations`, {
        additionalHeaders: { "ChatGPT-Account-ID": e },
        expectedIdentity: { accountId: e, userId: t },
        signal: n,
        retry: !1,
      });
      return l.parse(r);
    },
    staleTime: 0,
    gcTime: 0,
    retry: !1,
    placeholderData: void 0,
  };
}
var l;
function u() {
  return (u = e(() => {
    (t(),
      s(),
      a({ recommended_factors: i(r(`sms`)) }),
      (l = a({
        decision_id: n()
          .optional()
          .catch(void 0),
        policy_version: n()
          .optional()
          .catch(void 0),
        recommendations: i(a({ id: n().min(1) })).max(3),
      })));
  }))();
}
export { c as n, u as t };
//# sourceMappingURL=recommendation-status-23fd960f6a26.js.map
