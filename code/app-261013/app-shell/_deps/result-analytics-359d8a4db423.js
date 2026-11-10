import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Rnt as t, d8 as n, hrt as r, vrt as i } from "./app-shared-bbfeca5e5737.js";
import { HRn as a, QDr as o, XDr as s, yVn as c, zRn as l } from "./app-initial-5851df3f6cb1.js";
function u(e, t, n) {
  let r = {
    checkoutId: t.checkoutId,
    processorEntity: t.processorEntity,
    checkoutPlanType: t.checkoutPlanType,
    checkoutKind: t.checkoutKind,
    entryPoint: t.entryPoint,
    source: t.source,
    isCheckoutModalEnabled: t.isCheckoutModalEnabled,
  };
  try {
    n == null ? o(e, a, r) : o(e, l, { ...r, outcome: n });
  } catch {}
}
function d(e, t) {
  try {
    o(e, n, { action: `enable`, entryPoint: t, source: `standalone_credit_checkout` });
  } catch {}
}
function f(e) {
  return e instanceof r && e.status === 403 && e.errorCode === `checkout_user_mismatch`
    ? `user_mismatch`
    : e instanceof r && e.status === 422
      ? `payment_failed`
      : `other_error`;
}
function p() {
  return (p = e(() => {
    (c(), t(), s(), i());
  }))();
}
export { d as i, p as n, u as r, f as t };
//# sourceMappingURL=result-analytics-359d8a4db423.js.map
