import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $It as t, EPt as n, TLt as r, pIt as i, pLt as a } from "./app-shared-bbfeca5e5737.js";
import { Ymr as o, ehr as s } from "./app-initial-5851df3f6cb1.js";
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
    (n(),
      s(),
      a({ recommended_factors: i(t(`sms`)) }),
      (l = a({
        decision_id: r()
          .optional()
          .catch(void 0),
        policy_version: r()
          .optional()
          .catch(void 0),
        recommendations: i(a({ id: r().min(1) })).max(3),
      })));
  }))();
}
export { c as n, u as t };
//# sourceMappingURL=recommendation-status-aa79be77981b.js.map
