import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, Ost as n, SLt as r, VRt as i, kRt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  AAt as o,
  MAt as s,
  NMt as c,
  YMt as l,
  fMt as u,
  hRr as d,
  iNt as f,
  iRr as p,
  mRr as m,
  tyr as h,
  vRr as g,
  wMt as _,
  wRr as v,
  xMt as y,
  xRr as b,
} from "./app-initial-ad16eaadf81f.js";
import { Lv as x, Rv as S } from "./app-primary-3e00728c2a4c.js";
function C(e) {
  return `${D}/${e}`;
}
function w(e) {
  let t = typeof e == `string` ? new URLSearchParams(e) : e,
    n = new URLSearchParams();
  for (let [e, r] of t.entries()) (/^utm_/i.test(e) || O.has(e)) && n.append(e, r);
  return n;
}
function T(e, t) {
  if (typeof window > `u`) return;
  let n = w(t);
  if (n.size !== 0)
    try {
      window.sessionStorage.setItem(C(e), n.toString());
    } catch {}
}
function E(e, t) {
  if (typeof window > `u`) return t;
  try {
    let n = window.sessionStorage.getItem(C(e));
    if (n == null) return t;
    for (let [e, r] of w(n).entries()) t.append(e, r);
  } catch {}
  return t;
}
var D, O;
function k() {
  return (k = e(() => {
    ((D = `oai/apps/paypalPromoCheckoutAttribution`),
      (O = new Set([
        `ad_id`,
        `campaign_id`,
        `channel_id`,
        `click_id`,
        `is_test_mode`,
        `partner_id`,
        `partner_user_id`,
        `placement_id`,
        `promo_campaign`,
        `promoCode`,
        `referral_ts`,
        `trace_id`,
        `ts`,
        `uuid`,
      ])));
  }))();
}
function A(e) {
  return n({
    queryKey: [`checkout-workspace-members`, e],
    enabled: e != null,
    queryFn: async ({ signal: t }) => {
      if (e == null) throw Error(`Checkout workspace missing`);
      let n = await p.safeGet(`/accounts/{account_id}/users`, {
        parameters: { path: { account_id: e }, query: { limit: 1, offset: 0 } },
        signal: t,
      });
      if (n.total == null) throw Error(`Expected a counted workspace users response`);
      return n;
    },
    staleTime: 0,
    retry: !1,
  });
}
function j(e, t) {
  return n({
    queryKey: [`subscription-checkout`, e, t.processorEntity, t.checkoutSessionId],
    queryFn: ({ signal: e }) =>
      p.safeGet(`/payments/checkout/{processor_entity}/{checkout_session_id}`, {
        parameters: {
          path: { processor_entity: t.processorEntity, checkout_session_id: t.checkoutSessionId },
        },
        signal: e,
      }),
    staleTime: 0,
    gcTime: 0,
    retry: !1,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1,
  });
}
function M(e, t) {
  let n = new URLSearchParams({
      stripe_session_id: e.checkout_session_id,
      processor_entity: e.processor_entity,
      source: m(t),
    }),
    r =
      e.confirm_return_url == null
        ? null
        : new URL(e.confirm_return_url, window.location.origin).searchParams,
    i = r?.get(`account_id`);
  for (let e of [`plan_type`, `campaign`]) {
    let t = r?.get(e);
    t != null && n.set(e, t);
  }
  if ((i != null && n.set(`account_id`, i), t != null)) {
    (b(t, n), S(t, n));
    let r = new URLSearchParams(t).get(`return_to`);
    e.checkout_kind === u.RateLimitReset
      ? r != null && n.set(`return_to`, r)
      : e.checkout_kind === u.StandaloneCredit &&
        r != null &&
        s(r) &&
        n.set(`return_to`, o(r, `/settings/usage`));
  }
  if (e.entry_point === `paypal_promo_checkout`) {
    let r = E(e.checkout_session_id, new URLSearchParams()),
      i = w(t ?? ``),
      a = new Set(i.keys());
    (r.forEach((e, t) => {
      a.has(t) || i.append(t, e);
    }),
      i.forEach((e, t) => n.append(t, e)));
  }
  return (
    v(e.checkout_session_id, n),
    `${e.checkout_kind === u.RateLimitReset && e.status === `complete` ? `/payments/success-rate-limit-reset` : `/checkout/verify`}?${n.toString()}`
  );
}
function N(e, t, n, r) {
  let i = l(e.processor_entity, e.checkout_session_id, t, r && e.entry_point === `paypal_promo_checkout`);
  return `${n.replace(/\/$/, ``)}${i}`;
}
function P(e, t, n) {
  let r = y(e, new URLSearchParams(t), n);
  if (r == null) return M(e, t);
  let i = new URL(r, window.location.origin);
  return (S(t, i.searchParams), `${i.pathname}${i.search}`);
}
function F(e) {
  return e?.credit_payment_state == null ||
    (e.tag === `custom_checkout_session` && e.checkout_kind !== u.StandaloneCredit)
    ? null
    : e.tag === `hosted_checkout_session` &&
        e.credit_payment_state.payment_status === `unpaid` &&
        e.credit_payment_state.payment_intent_status === `succeeded`
      ? `processing`
      : _(e.credit_payment_state);
}
async function I(e, t, n, r) {
  for (let i = 0; ; i++) {
    t.throwIfAborted();
    let a = await p.safeGet(`/payments/checkout/{processor_entity}/{checkout_session_id}`, {
      parameters: { path: { processor_entity: e.processorEntity, checkout_session_id: e.checkoutSessionId } },
      signal: t,
      additionalHeaders: r,
    });
    if (
      a.tag !== `custom_checkout_session` ||
      a.status !== `open` ||
      n ||
      (a.checkout_kind === u.StandaloneCredit &&
        a.credit_payment_state != null &&
        (a.checkout_provider === `open_ai` || _(a.credit_payment_state) !== `succeeded`)) ||
      i === 2
    )
      return a;
    await new Promise((e) => window.setTimeout(e, 500));
  }
}
var L, R, z;
function B() {
  return (B = e(() => {
    (c(),
      g(),
      k(),
      f(),
      t(),
      h(),
      x(),
      d(),
      (L = a({
        processorEntity: r([`openai_llc`, `openai_ie`]),
        checkoutSessionId: i().regex(/^(cs_|oaics_)[A-Za-z0-9_]+$/),
      })),
      (R = r([`plus`, `go`, `pro5x`, `pro`, `team`])),
      (z = {
        plus: `chatgptplusplan`,
        go: `chatgptgoplan`,
        pro5x: `chatgptprolite`,
        pro: `chatgptpro`,
        team: `chatgptteamplan`,
      }));
  }))();
}
export {
  L as a,
  F as c,
  I as d,
  w as f,
  E as h,
  M as i,
  B as l,
  T as m,
  z as n,
  j as o,
  k as p,
  N as r,
  A as s,
  P as t,
  R as u,
};
//# sourceMappingURL=session-aac751f11ab4.js.map
