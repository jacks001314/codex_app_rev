import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { AMr as t, CGt as n, OGt as r, TGt as i, hPr as a, wGt as o } from "./app-initial-5851df3f6cb1.js";
function s(e) {
  let t = i(e.account.plan_type),
    r = e.last_active_subscription.purchase_origin_platform;
  if (
    e.account.structure !== `personal` ||
    !e.entitlement.has_active_subscription ||
    e.entitlement.is_active_subscription_gratis ||
    t == null ||
    t.pricePlan === a.FREE ||
    r === `chatgpt_no_payment_trial` ||
    r === `partner_managed` ||
    n(r) != null
  )
    return !1;
  let s = i(e.entitlement.scheduled_plan_change?.plan_type),
    c = s != null && o({ currentPlan: t.pricePlan, targetPlan: s.pricePlan }) === `downgrade`;
  return !e.last_active_subscription.will_renew || e.entitlement.cancels_at != null || c;
}
function c() {
  return (c = e(() => {
    (t(), r());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=beacon-renewal-eligibility-2a3d162ee4ea.js.map
