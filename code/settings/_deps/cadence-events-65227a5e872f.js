import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Xt as t,
  $tt as n,
  Itt as r,
  Ltt as i,
  Rtt as a,
  Trn as o,
  jrn as s,
  krn as c,
  nZt as l,
  rnt as u,
  rrn as d,
  wrn as f,
  ztt as p,
} from "./app-initial-f094ef01c64d.js";
import { i as m, r as h } from "./queries-d729b9d20ea6.js";
import { n as g, r as _ } from "./billing-state-ce45584c1590.js";
function v(e) {
  return (
    e.account.structure === `personal` &&
    e.entitlement.has_active_subscription === !0 &&
    !e.entitlement.is_active_subscription_gratis &&
    e.account.plan_type === `plus` &&
    !e.entitlement.is_delinquent &&
    !e.entitlement.trial?.is_trialing &&
    !e.account.reseller_hosted_account &&
    e.entitlement.scheduled_plan_change == null &&
    g(e) == null
  );
}
function y(e, t, n, r = Date.now()) {
  if (
    !v(e) ||
    t == null ||
    n == null ||
    t.plan_type !== `plus` ||
    t.is_delinquent ||
    !t.is_processor_stripe ||
    h(t) == null ||
    t.billing_currency !== n.currency_config.symbol_code
  )
    return null;
  let i = t.billing_period,
    a = t.scheduled_billing_period ?? null,
    o = new Date(t.active_until ?? ``),
    s = !t.will_renew;
  if (i == null || a === i || !Number.isFinite(o.getTime()) || (s && o.getTime() <= r)) return null;
  let c = n.currency_config.plus?.month,
    l = n.currency_config.plus?.year;
  if (c == null || l == null || c.tax == null || l.tax == null || c.amount <= 0 || l.amount <= 0)
    return null;
  let u = (c.amount - l.amount) * 12,
    d = u > 0 ? Math.floor(((c.amount - l.amount) / c.amount) * 100 + 1e-9) : 0;
  return {
    currentCadence: i,
    scheduledCadence: a,
    effectiveNextCadence: a ?? i,
    renewalDate: o,
    requiresReactivation: s,
    billingCurrency: t.billing_currency,
    displayPricingSource: `checkout-pricing:` + n.country_code + `:` + t.billing_currency,
    monthlyPrice: { amount: c.amount, tax: c.tax },
    annualPrice: { amount: l.amount, tax: l.tax },
    annualSavingsAmount: u,
    annualSavingsPercentage: d,
    isAcquisitionCandidate:
      e.is_eligible_for_yearly_plus_existing_user_subscription === !0 &&
      i === `monthly` &&
      a == null &&
      u > 0,
    isRetentionCandidate: i === `yearly` && a === `monthly` && u > 0,
  };
}
function b(e, t) {
  return e.currentCadence === t && e.scheduledCadence != null
    ? t === `monthly`
      ? `monthly_will_continue`
      : `annual_will_continue`
    : t === `monthly`
      ? `change_to_monthly`
      : `change_to_annual`;
}
function x(e) {
  return (
    e?.amount_due.amount === 0 &&
    e.renewal_date != null &&
    Number.isFinite(Date.parse(e.renewal_date))
  );
}
function S(e, t) {
  let n = C.safeParse(e);
  if (!n.success) return `unknown`;
  let { detail: r, status: i, message: a } = n.data;
  if (typeof r == `object` && r.error_type === `subscription_update_pending`)
    return `update_processing`;
  let o = (typeof r == `string` ? r : (r?.message ?? r?.description ?? a ?? ``)).toLowerCase();
  return o.includes(`matches the current subscription`) ||
    o.includes(`matches the scheduled subscription`)
    ? `stale_state`
    : o.includes(`non-cadence future update`) ||
        o.includes(`another plan change`) ||
        o.includes(`future update scheduled`)
      ? `conflicting_plan_change`
      : o.includes(`not configured for this subscription`) ||
          o.includes(`target price`) ||
          o.includes(`target sku`) ||
          o.includes(`unable to resolve`)
        ? `missing_price_configuration`
        : t === `yearly` &&
            (i === 403 ||
              o.includes(`annual plus subscriptions are not enabled`) ||
              o.includes(`trialing subscription`) ||
              o.includes(`policy does not allow`))
          ? `eligibility_changed`
          : `unknown`;
}
var C,
  w = e(() => {
    (d(),
      _(),
      m(),
      (C = o({
        status: f().optional(),
        message: c().optional(),
        detail: s([
          c(),
          o({ error_type: c().optional(), message: c().optional(), description: c().optional() }),
        ]).optional(),
      })));
  });
function T(
  e,
  { accountId: t, state: n, entryPoint: i, action: a = i, fromCadence: o, toCadence: s },
) {
  e.get(l).logProductEvent(r, {
    accountId: t,
    actionType: D[a],
    entryPoint: E[i],
    liveCadence: O[n.currentCadence],
    scheduledCadence: n.scheduledCadence == null ? void 0 : O[n.scheduledCadence],
    effectiveNextCadence: O[n.effectiveNextCadence],
    billingCurrency: n.billingCurrency,
    displayPricingSource: n.displayPricingSource,
    monthlyPrice: n.monthlyPrice.amount,
    annualMonthlyEquivalent: n.annualPrice.amount,
    annualSavingsAmount: n.annualSavingsAmount,
    renewalUtcDate: n.renewalDate.toISOString(),
    requiresReactivation: n.requiresReactivation,
    fromCadence: o == null ? void 0 : O[o],
    toCadence: s == null ? void 0 : O[s],
    updateKind: s == null ? void 0 : k[b(n, s)],
  });
}
var E,
  D,
  O,
  k,
  A = e(() => {
    (u(),
      t(),
      w(),
      (E = {
        annual_offer: a.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ENTRY_POINT_ANNUAL_OFFER,
        keep_saving: a.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ENTRY_POINT_KEEP_SAVING,
        manage_billing_schedule:
          a.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ENTRY_POINT_MANAGE_BILLING_SCHEDULE,
      }),
      (D = {
        annual_offer: i.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_VIEW_OFFER_CLICKED,
        keep_saving: i.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_KEEP_SAVING_CLICKED,
        manage_billing_schedule:
          i.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_MANAGE_SCHEDULE_CLICKED,
        selected: i.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_CADENCE_SELECTED,
        succeeded: i.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_CADENCE_UPDATE_SUCCEEDED,
      }),
      (O = {
        monthly: n.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_MONTH,
        yearly: n.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_YEAR,
      }),
      (k = {
        monthly_will_continue:
          p.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_MONTHLY_WILL_CONTINUE,
        annual_will_continue:
          p.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_ANNUAL_WILL_CONTINUE,
        change_to_monthly: p.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_CHANGE_TO_MONTHLY,
        change_to_annual: p.CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_CHANGE_TO_ANNUAL,
      }));
  });
export { b as a, x as c, y as i, T as n, w as o, S as r, v as s, A as t };
//# sourceMappingURL=cadence-events-65227a5e872f.js.map
