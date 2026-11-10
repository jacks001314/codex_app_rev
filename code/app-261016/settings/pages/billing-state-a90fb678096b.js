import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { n as t } from "./payment-method-display-9a3960f9fc88.js";
function n(e) {
  if (!e.entitlement.has_active_subscription) return null;
  switch (e.last_active_subscription.purchase_origin_platform) {
    case `chatgpt_mobile_ios`:
    case `sora_mobile_ios`:
      return `app_store`;
    case `chatgpt_mobile_android`:
      return `google_play_store`;
    case `partner_managed`:
      return `partner_managed`;
    case void 0:
      return null;
    default:
      return null;
  }
}
function r({
  paymentMethod: e,
  defaultPaymentMethodId: t,
  defaultPaymentMethods: n,
  autoReloadPaymentMethodId: r,
  autoReloadResolved: i,
}) {
  return i && e.id !== t && e.id !== n?.subscription && e.id !== n?.credit_purchase && e.id !== r;
}
function i() {
  return (i = e(() => {
    t();
  }))();
}
export { n, i as r, r as t };
//# sourceMappingURL=billing-state-a90fb678096b.js.map
