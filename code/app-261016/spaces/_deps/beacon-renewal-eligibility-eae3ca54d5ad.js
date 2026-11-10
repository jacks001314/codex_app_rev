import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Xzr as t, bBt as n, tLr as r, wBt as i, xBt as a, yBt as o } from "./app-initial-ad16eaadf81f.js";
function s(e) {
  let r = a(e.account.plan_type),
    i = e.last_active_subscription.purchase_origin_platform;
  if (
    e.account.structure !== `personal` ||
    !e.entitlement.has_active_subscription ||
    e.entitlement.is_active_subscription_gratis ||
    r == null ||
    r.pricePlan === t.FREE ||
    i === `chatgpt_no_payment_trial` ||
    i === `partner_managed` ||
    o(i) != null
  )
    return !1;
  let s = a(e.entitlement.scheduled_plan_change?.plan_type),
    c = s != null && n({ currentPlan: r.pricePlan, targetPlan: s.pricePlan }) === `downgrade`;
  return !e.last_active_subscription.will_renew || e.entitlement.cancels_at != null || c;
}
function c() {
  return (c = e(() => {
    (r(), i());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=beacon-renewal-eligibility-eae3ca54d5ad.js.map
