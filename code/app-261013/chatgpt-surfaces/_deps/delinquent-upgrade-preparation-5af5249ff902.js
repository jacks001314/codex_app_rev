import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  LLt as n,
  TLt as r,
  hrt as i,
  pLt as a,
  rst as o,
  spt as s,
  vrt as c,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as l, XMr as u, Ymr as d, ehr as f, tNr as p } from "./app-initial-5851df3f6cb1.js";
import { i as m, n as h } from "./queries-9a7ecb201f4e.js";
async function g({
  scope: e,
  accountId: t,
  userId: n,
  initialPlan: r,
  updatedPlan: i,
  hasPromotion: a,
  statsigClient: o,
  signal: c,
  previewError: f,
  pricingInfo: p,
}) {
  if (a || (r !== `go` && r !== `plus` && r !== `prolite` && r !== `pro`)) return null;
  let m = await e.queryClient.fetchQuery(h(e, t));
  c.throwIfAborted();
  let g = m.accounts[t];
  if (
    e.get(l) !== t ||
    e.get(u) !== n ||
    g?.account.structure !== `personal` ||
    g.account.account_id !== t ||
    g.account.account_user_id?.split(`__`)[0] !== n ||
    g.account.plan_type !== r ||
    (g.entitlement.is_delinquent !== !0 && _(f) !== `delinquent_subscription`)
  )
    return null;
  let v = await d.safePost(`/subscriptions/complete_payment/invoice_details`, {
    requestBody: { account_id: t },
    signal: c,
    additionalHeaders: { [s]: t },
  });
  if (
    (c.throwIfAborted(),
    e.get(l) !== t ||
      e.get(u) !== n ||
      !v.available ||
      v.delinquent_upgrade_recovery_supported !== !0 ||
      !v.payment_retry_safe)
  )
    return null;
  let y = o.getLayer(`2797915223`);
  if (
    !y.get(`payment_method_recovery_enabled`, !1) ||
    !o.getLayer(`2626479667`).get(`split_card_recovery_enabled`, !1)
  )
    return null;
  let b = y.get(`mandate_recovery_payment_method_types`, []);
  return {
    accountId: t,
    userId: n,
    initialPlan: r,
    updatedPlan: i,
    invoice: v,
    mandateRecovery: Array.isArray(b) && b.length > 0,
    billingPeriod: g.entitlement.billing_period,
    pricingInfo: p,
    attemptId: crypto.randomUUID(),
    startedAtMs: Date.now(),
  };
}
function _(e) {
  if (e instanceof Error)
    try {
      let t = v.safeParse(JSON.parse(e.message));
      if (!t.success) return;
      let n = t.data.detail;
      if (typeof n != `string`) return n.error_type;
      if (e instanceof i && e.status === 409 && n === `Subscription update already in progress`)
        return `subscription_update_pending`;
      if (
        e instanceof i &&
        e.status === 503 &&
        n === `Delinquent upgrade payment recovery is temporarily unavailable`
      )
        return `unavailable`;
    } catch {}
}
var v;
function y() {
  return (y = e(() => {
    (o(), t(), p(), f(), m(), c(), (v = a({ detail: n([r(), a({ error_type: r() })]) })));
  }))();
}
export { y as n, g as r, _ as t };
//# sourceMappingURL=delinquent-upgrade-preparation-5af5249ff902.js.map
