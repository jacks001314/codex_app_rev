import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, ORt as n, Ost as r, SLt as i, VRt as a, kRt as o } from "./app-shared-2feb3d4c6fcc.js";
import { n as s, t as c } from "./pricing-config-8656df60ca94.js";
function l(e, t, n) {
  let i = u(t);
  return r({
    queryKey: [`consumer-billing`, e, `subscription-pricing`, i, t?.billing_currency],
    queryFn: async ({ signal: e }) => {
      if (i == null) return null;
      let r = await c({
          country: t?.pricing_scope === `country` ? (t.price_country ?? void 0) : void 0,
          currency: t?.billing_currency,
          isPricingEnabled: n,
          signal: e,
        }),
        a = m.safeParse(r);
      if (!a.success) return null;
      let o = a.data;
      return o.currency_config.symbol_code === t?.billing_currency ? o : null;
    },
    enabled: i != null,
    staleTime: 0,
    retry: !1,
  });
}
function u(e) {
  return e?.pricing_scope === `country` && e.price_country != null
    ? e.price_country
    : e?.pricing_scope === "default" && e.price_country === null
      ? e.billing_currency
      : null;
}
function d(e, t) {
  return (
    e != null &&
    u(e) != null &&
    t.currency_config.symbol_code === e.billing_currency &&
    (e.pricing_scope !== `country` || t.country_code === e.price_country)
  );
}
var f, p, m;
function h() {
  return (h = e(() => {
    (t(),
      s(),
      (f = o({ amount: n().nonnegative(), tax: i([`inclusive`, `exclusive`]).optional() })),
      (p = o({ month: f.optional(), year: f.optional() })),
      (m = o({
        country_code: a(),
        currency_config: o({
          symbol_code: a().min(1),
          minor_unit_exponent: n().int().nonnegative().nullish(),
          pricing_rollout_gate: a().nullish(),
          go: p.optional(),
          plus: p.optional(),
          prolite: p.optional(),
          pro: p.optional(),
          promax: p.optional(),
          business: p.optional(),
          business_prolite: p.optional(),
          business_non_profit: p.optional(),
        }),
      })));
  }))();
}
export { l as a, d as i, u as n, h as r, m as t };
//# sourceMappingURL=subscription-pricing-e06aacd9b52d.js.map
