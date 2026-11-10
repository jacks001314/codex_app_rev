import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  CJt as t,
  Dc as n,
  FKt as r,
  RKt as i,
  SJt as a,
  Srn as o,
  Tc as s,
  Trn as c,
  b3t as l,
  drn as u,
  krn as d,
  rrn as f,
  s3t as p,
  wrn as m,
  xrn as h,
} from "./app-initial-f094ef01c64d.js";
function g(e) {
  return l({
    queryKey: s(e),
    queryFn: ({ signal: e }) =>
      r.safeGet(`/accounts/check/{version}`, {
        parameters: { path: { version: `v4-2023-04-27` } },
        signal: e,
      }),
    staleTime: 0,
    refetchOnMount: `always`,
    refetchOnWindowFocus: `always`,
    retry: !1,
    select: (t) => t.accounts[e],
  });
}
function _(e) {
  return l({
    queryKey: [`consumer-billing`, e, `billing-info`],
    queryFn: ({ signal: t }) =>
      r.safeGet(`/payments/billing_info`, { parameters: { query: { account_id: e } }, signal: t }),
    staleTime: 0,
    retry: !1,
  });
}
function v(e) {
  return l({
    queryKey: [`consumer-billing`, e, `payment-methods`],
    queryFn: ({ signal: t }) =>
      r.safeGet(`/payments/payment_methods`, {
        parameters: { query: { account_id: e } },
        signal: t,
      }),
    staleTime: 0,
    retry: !1,
  });
}
function y(e) {
  let t = [`consumer-billing`, e, `wallet`];
  return l({
    queryKey: t,
    queryFn: async ({ signal: n, client: i }) => {
      let a = await r.safeGet(`/accounts/{account_id}/customer-balance`, {
        parameters: { path: { account_id: e }, query: { include_redemption_status: !0 } },
        signal: n,
      });
      return i.getQueryData(t)?.has_redeemed_gift_card === !0 && a.has_redeemed_gift_card == null
        ? { ...a, has_redeemed_gift_card: !0 }
        : a;
    },
    staleTime: 0,
    gcTime: 0,
    retry: !1,
    refetchOnMount: `always`,
    refetchOnReconnect: `always`,
    refetchOnWindowFocus: `always`,
  });
}
async function b(e, t) {
  await Promise.all([
    e.queryClient.invalidateQueries({ queryKey: [`consumer-billing`, t] }),
    e.queryClient.invalidateQueries({ queryKey: [`accounts`] }),
    e.queryClient.invalidateQueries({ queryKey: [`usage-settings`] }),
  ]);
}
var x = e(() => {
  (p(), n(), i());
});
async function S({ country: e, currency: t, isPricingEnabled: n, signal: r }) {
  let i = e?.trim().toUpperCase(),
    a = t?.trim().toUpperCase(),
    o = i && T.has(i) ? `EU` : `US`,
    s = i ? await C(i, r) : null;
  if ((a && s?.currency_config.symbol_code !== a && (s = await w(a, r)), s == null)) return w(o, r);
  let c = s.currency_config.pricing_rollout_gate;
  return c && !n(c) ? w(o, r) : s;
}
async function C(e, t) {
  try {
    return await w(e, t);
  } catch (e) {
    if (e instanceof a && e.status === 404)
      try {
        if (D.safeParse(JSON.parse(e.message)).success) return null;
      } catch {}
    throw e;
  }
}
async function w(e, t) {
  return E.parse(
    await r.safeGet(`/checkout_pricing_config/configs/{country_code}`, {
      parameters: { path: { country_code: e } },
      signal: t,
    }),
  );
}
var T,
  E,
  D,
  O = e(() => {
    (f(),
      i(),
      t(),
      (T = new Set(
        `AD.AT.AX.BE.BG.CH.CY.CZ.DE.DK.EE.ES.FI.FR.GB.GF.GP.GR.HR.HU.IE.IS.IT.LI.LT.LU.LV.MC.ME.MF.MQ.MT.NL.NO.PF.PL.PT.RE.RO.RS.SE.SI.SK.SM.VA.XK.YT`.split(
          `.`,
        ),
      )),
      (E = o({
        country_code: d(),
        currency_config: o({ symbol_code: d().nullish(), pricing_rollout_gate: d().nullish() }),
      })),
      (D = c({ detail: h(`Country config not found`) })));
  });
function k(e) {
  return l({
    queryKey: [`consumer-billing`, e, `subscription`],
    queryFn: ({ signal: t }) =>
      r.safeGet(`/subscriptions`, { parameters: { query: { account_id: e } }, signal: t }),
    staleTime: 0,
    retry: !1,
  });
}
function A(e, t, n) {
  let r = j(t);
  return l({
    queryKey: [`consumer-billing`, e, `subscription-pricing`, r, t?.billing_currency],
    queryFn: async ({ signal: e }) => {
      if (r == null) return null;
      let i = await S({
          country: t?.pricing_scope === `country` ? (t.price_country ?? void 0) : void 0,
          currency: t?.billing_currency,
          isPricingEnabled: n,
          signal: e,
        }),
        a = I.safeParse(i);
      if (!a.success) return null;
      let o = a.data;
      return o.currency_config.symbol_code === t?.billing_currency ? o : null;
    },
    enabled: r != null,
    staleTime: 0,
    retry: !1,
  });
}
function j(e) {
  return e?.pricing_scope === `country` && e.price_country != null
    ? e.price_country
    : e?.pricing_scope === "default" && e.price_country === null
      ? e.billing_currency
      : null;
}
function M(e, t) {
  return (
    e != null &&
    j(e) != null &&
    t.currency_config.symbol_code === e.billing_currency &&
    (e.pricing_scope !== `country` || t.country_code === e.price_country)
  );
}
function N(e, t, n, r = Date.now()) {
  let i = e.entitlement.discount?.discount_expires_at,
    a = e.entitlement.renews_at;
  if (i == null || a == null || t == null || n == null) return;
  let o = Math.ceil((Date.parse(i) - r) / 864e5),
    s = Math.ceil((Date.parse(a) - r) / 864e5);
  if (!Number.isFinite(o) || !Number.isFinite(s) || Math.abs(o - s) > 1) return;
  let c = e.account.plan_type;
  if (c !== `plus` && c !== `prolite` && c !== `pro` && c !== `go`) return;
  let l = t.scheduled_billing_period ?? t.billing_period ?? e.entitlement.billing_period;
  if (l == null || !M(t, n)) return;
  let u = l === `yearly` ? n.currency_config[c]?.year : n.currency_config[c]?.month;
  if (u != null)
    return {
      amount: l === `yearly` ? Math.round(u.amount * 12) : u.amount,
      currency: t.billing_currency,
      period: l,
    };
}
var P,
  F,
  I,
  L = e(() => {
    (p(),
      f(),
      i(),
      O(),
      (P = c({ amount: m().nonnegative(), tax: u([`inclusive`, `exclusive`]).optional() })),
      (F = c({ month: P.optional(), year: P.optional() })),
      (I = c({
        country_code: d(),
        currency_config: c({
          symbol_code: d().min(1),
          minor_unit_exponent: m().int().nonnegative().nullish(),
          pricing_rollout_gate: d().nullish(),
          go: F.optional(),
          plus: F.optional(),
          prolite: F.optional(),
          pro: F.optional(),
        }),
      })));
  });
export {
  A as a,
  O as c,
  x as d,
  v as f,
  L as i,
  g as l,
  y as m,
  N as n,
  k as o,
  b as p,
  j as r,
  S as s,
  I as t,
  _ as u,
};
//# sourceMappingURL=queries-d729b9d20ea6.js.map
