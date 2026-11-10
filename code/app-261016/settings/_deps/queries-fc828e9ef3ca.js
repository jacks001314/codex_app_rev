import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ajt as t, TBt as n, wBt as r } from "./app-initial-ad16eaadf81f.js";
import { i, r as a } from "./subscription-pricing-e06aacd9b52d.js";
function o(e, t, r, a = Date.now()) {
  let o = e.entitlement.discount?.discount_expires_at,
    s = e.entitlement.renews_at;
  if (o == null || s == null || t == null || r == null) return;
  let c = Math.ceil((Date.parse(o) - a) / 864e5),
    l = Math.ceil((Date.parse(s) - a) / 864e5);
  if (!Number.isFinite(c) || !Number.isFinite(l) || Math.abs(c - l) > 1) return;
  let u = e.account.plan_type;
  if (!n(u)) return;
  let d = t.scheduled_billing_period ?? t.billing_period ?? e.entitlement.billing_period;
  if (d == null || !i(t, r)) return;
  let f = d === `yearly` ? r.currency_config[u]?.year : r.currency_config[u]?.month;
  if (f != null)
    return {
      amount: d === `yearly` ? Math.round(f.amount * 12) : f.amount,
      currency: t.billing_currency,
      period: d,
    };
}
function s() {
  return (s = e(() => {
    (r(), a(), t());
  }))();
}
export { s as n, o as t };
//# sourceMappingURL=queries-fc828e9ef3ca.js.map
