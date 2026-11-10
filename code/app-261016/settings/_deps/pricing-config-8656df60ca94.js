import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HFt as t,
  Pit as n,
  VRt as r,
  gRt as i,
  hRt as a,
  jit as o,
  kRt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { cMt as c, iRr as l, sRr as u, uMt as d } from "./app-initial-ad16eaadf81f.js";
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
    c = o && (d(o) || p.has(o)) ? `EU` : `US`,
    l = null;
  if (o)
    try {
      l = await (a ?? n(o));
    } catch (e) {
      if (!r(e)) throw e;
    }
  if ((s && l?.currency_config?.symbol_code !== s && (l = await n(s)), l == null)) return n(c);
  let u = l.currency_config?.pricing_rollout_gate;
  return u && !i(u) ? n(c) : l;
}
var p;
function m() {
  return (m = e(() => {
    (c(), (p = new Set([`AD`, `AX`, `CH`, `GB`, `MC`, `ME`, `PF`, `RS`, `SM`, `VA`, `XK`])));
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
      if (e instanceof o && e.status === 404)
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
    await l.safeGet(`/checkout_pricing_config/configs/{country_code}`, {
      parameters: { path: { country_code: e } },
      signal: t,
    }),
  );
}
var v, y;
function b() {
  return (b = e(() => {
    (m(),
      t(),
      u(),
      n(),
      (v = i({
        country_code: r(),
        currency_config: i({ symbol_code: r().nullish(), pricing_rollout_gate: r().nullish() }),
      })),
      (y = s({ detail: a(`Country config not found`) })));
  }))();
}
export { b as n, g as r, h as t };
//# sourceMappingURL=pricing-config-8656df60ca94.js.map
