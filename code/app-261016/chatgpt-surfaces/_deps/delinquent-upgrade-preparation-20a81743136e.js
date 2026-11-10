import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Rt as t,
  HFt as n,
  Pit as r,
  Smt as i,
  VRt as a,
  jit as o,
  kRt as s,
  sct as c,
} from "./app-shared-2feb3d4c6fcc.js";
import { BRr as l, iRr as u, tyr as d, wLr as f, zRr as p } from "./app-initial-ad16eaadf81f.js";
import { i as m, n as h } from "./queries-ea9f18d3fc31.js";
async function g({
  scope: e,
  accountId: t,
  userId: n,
  initialPlan: r,
  updatedPlan: a,
  hasPromotion: o,
  statsigClient: s,
  signal: c,
  previewError: d,
  pricingInfo: f,
}) {
  if (o || (r !== `go` && r !== `plus` && r !== `prolite` && r !== `pro`)) return null;
  let m = await e.queryClient.fetchQuery(h(e, t));
  c.throwIfAborted();
  let g = m.accounts[t];
  if (
    e.get(p) !== t ||
    e.get(l) !== n ||
    g?.account.structure !== `personal` ||
    g.account.account_id !== t ||
    g.account.account_user_id?.split(`__`)[0] !== n ||
    g.account.plan_type !== r ||
    (g.entitlement.is_delinquent !== !0 && _(d) !== `delinquent_subscription`)
  )
    return null;
  let v = await u.safePost(`/subscriptions/complete_payment/invoice_details`, {
    requestBody: { account_id: t },
    signal: c,
    additionalHeaders: { [i]: t },
  });
  if (
    (c.throwIfAborted(),
    e.get(p) !== t ||
      e.get(l) !== n ||
      !v.available ||
      v.delinquent_upgrade_recovery_supported !== !0 ||
      !v.payment_retry_safe)
  )
    return null;
  let y = s.getLayer(`2797915223`);
  if (
    !y.get(`payment_method_recovery_enabled`, !1) ||
    !s.getLayer(`2626479667`).get(`split_card_recovery_enabled`, !1)
  )
    return null;
  let b = y.get(`mandate_recovery_payment_method_types`, []);
  return {
    accountId: t,
    userId: n,
    initialPlan: r,
    updatedPlan: a,
    invoice: v,
    mandateRecovery: Array.isArray(b) && b.length > 0,
    billingPeriod: g.entitlement.billing_period,
    pricingInfo: f,
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
      if (e instanceof o && e.status === 409 && n === `Subscription update already in progress`)
        return `subscription_update_pending`;
      if (
        e instanceof o &&
        e.status === 503 &&
        n === `Delinquent upgrade payment recovery is temporarily unavailable`
      )
        return `unavailable`;
    } catch {}
}
var v;
function y() {
  return (y = e(() => {
    (c(), n(), f(), d(), m(), r(), (v = s({ detail: t([a(), s({ error_type: a() })]) })));
  }))();
}
export { y as n, g as r, _ as t };
//# sourceMappingURL=delinquent-upgrade-preparation-20a81743136e.js.map
