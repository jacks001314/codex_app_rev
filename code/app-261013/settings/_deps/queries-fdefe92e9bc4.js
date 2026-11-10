import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, Kot as n, TLt as r, fLt as i, oIt as a, pLt as o } from "./app-shared-bbfeca5e5737.js";
import { CPt as s, OGt as c, kGt as l } from "./app-initial-5851df3f6cb1.js";
import { n as u, t as d } from "./billing-pricing-e48f68285f93.js";
function f(e, t, r) {
  let i = p(t);
  return n({
    queryKey: [`consumer-billing`, e, `subscription-pricing`, i, t?.billing_currency],
    queryFn: async ({ signal: e }) => {
      if (i == null) return null;
      let n = await d({
          country: t?.pricing_scope === `country` ? (t.price_country ?? void 0) : void 0,
          currency: t?.billing_currency,
          isPricingEnabled: r,
          signal: e,
        }),
        a = v.safeParse(n);
      if (!a.success) return null;
      let o = a.data;
      return o.currency_config.symbol_code === t?.billing_currency ? o : null;
    },
    enabled: i != null,
    staleTime: 0,
    retry: !1,
  });
}
function p(e) {
  return e?.pricing_scope === `country` && e.price_country != null
    ? e.price_country
    : e?.pricing_scope === "default" && e.price_country === null
      ? e.billing_currency
      : null;
}
function m(e, t) {
  return (
    e != null &&
    p(e) != null &&
    t.currency_config.symbol_code === e.billing_currency &&
    (e.pricing_scope !== `country` || t.country_code === e.price_country)
  );
}
function h(e, t, n, r = Date.now()) {
  let i = e.entitlement.discount?.discount_expires_at,
    a = e.entitlement.renews_at;
  if (i == null || a == null || t == null || n == null) return;
  let o = Math.ceil((Date.parse(i) - r) / 864e5),
    s = Math.ceil((Date.parse(a) - r) / 864e5);
  if (!Number.isFinite(o) || !Number.isFinite(s) || Math.abs(o - s) > 1) return;
  let c = e.account.plan_type;
  if (!l(c)) return;
  let u = t.scheduled_billing_period ?? t.billing_period ?? e.entitlement.billing_period;
  if (u == null || !m(t, n)) return;
  let d = u === `yearly` ? n.currency_config[c]?.year : n.currency_config[c]?.month;
  if (d != null)
    return {
      amount: u === `yearly` ? Math.round(d.amount * 12) : d.amount,
      currency: t.billing_currency,
      period: u,
    };
}
var g, _, v;
function y() {
  return (y = e(() => {
    (t(),
      c(),
      u(),
      s(),
      (g = o({ amount: i().nonnegative(), tax: a([`inclusive`, `exclusive`]).optional() })),
      (_ = o({ month: g.optional(), year: g.optional() })),
      (v = o({
        country_code: r(),
        currency_config: o({
          symbol_code: r().min(1),
          minor_unit_exponent: i().int().nonnegative().nullish(),
          pricing_rollout_gate: r().nullish(),
          go: _.optional(),
          plus: _.optional(),
          prolite: _.optional(),
          pro: _.optional(),
          promax: _.optional(),
          business: _.optional(),
          business_prolite: _.optional(),
          business_non_profit: _.optional(),
        }),
      })));
  }))();
}
export { m as a, y as i, h as n, f as o, p as r, v as t };
//# sourceMappingURL=queries-fdefe92e9bc4.js.map
