import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  EPt as n,
  TLt as r,
  eLt as i,
  hrt as a,
  pLt as o,
  vrt as s,
} from "./app-shared-bbfeca5e5737.js";
import { iPr as c, rFt as l, sPr as u, tFt as d } from "./app-initial-5851df3f6cb1.js";
async function f({
  country: e,
  currency: t,
  fetchConfig: n,
  isCountryConfigNotFound: r,
  isPricingEnabled: i,
  prefetchedCountryConfig: a,
}) {
  let o = e?.trim().toUpperCase(),
    s = t?.trim().toUpperCase(),
    c = o && (l(o) || p.has(o)) ? `EU` : `US`,
    u = null;
  if (o)
    try {
      u = await (a ?? n(o));
    } catch (e) {
      if (!r(e)) throw e;
    }
  if ((s && u?.currency_config?.symbol_code !== s && (u = await n(s)), u == null)) return n(c);
  let d = u.currency_config?.pricing_rollout_gate;
  return d && !i(d) ? n(c) : u;
}
var p;
function m() {
  return (m = e(() => {
    (d(), (p = new Set([`AD`, `AX`, `CH`, `GB`, `MC`, `ME`, `PF`, `RS`, `SM`, `VA`, `XK`])));
  }))();
}
async function h({ country: e, currency: t, isPricingEnabled: n, prefetchedCountryConfig: r, signal: i }) {
  return f({
    country: e,
    currency: t,
    fetchConfig: (e) => _(e, i),
    isPricingEnabled: n,
    prefetchedCountryConfig: r,
    isCountryConfigNotFound: (e) => {
      if (e instanceof a && e.status === 404)
        try {
          return y.safeParse(JSON.parse(e.message)).success;
        } catch {}
      return !1;
    },
  });
}
function g({ country: e, signal: t }) {
  return _(e.trim().toUpperCase(), t);
}
async function _(e, t) {
  return v.parse(
    await c.safeGet(`/checkout_pricing_config/configs/{country_code}`, {
      parameters: { path: { country_code: e } },
      signal: t,
    }),
  );
}
var v, y;
function b() {
  return (b = e(() => {
    (m(),
      n(),
      u(),
      s(),
      (v = i({
        country_code: r(),
        currency_config: i({ symbol_code: r().nullish(), pricing_rollout_gate: r().nullish() }),
      })),
      (y = o({ detail: t(`Country config not found`) })));
  }))();
}
export { b as n, g as r, h as t };
//# sourceMappingURL=billing-pricing-e48f68285f93.js.map
