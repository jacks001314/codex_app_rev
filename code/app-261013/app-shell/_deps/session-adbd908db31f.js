import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, Kot as n, TLt as r, oIt as i, pLt as a } from "./app-shared-bbfeca5e5737.js";
import {
  CNt as o,
  EFt as s,
  JFr as c,
  QFr as l,
  QFt as u,
  TNt as d,
  UFt as f,
  YFr as ee,
  Ymr as p,
  aFt as m,
  ehr as h,
  iIr as g,
  mFt as _,
  tIr as v,
} from "./app-initial-5851df3f6cb1.js";
import { gv as y, hv as b } from "./app-primary-fe8a450b3b04.js";
function x(e) {
  return typeof e == `string` && e.trim().length > 0;
}
function S(e) {
  return `${j}/${e}`;
}
function C(e) {
  if (typeof window > `u`) return !1;
  try {
    return (window.sessionStorage.removeItem(e), !0);
  } catch {
    return !1;
  }
}
function te(e) {
  if (typeof window > `u`) return null;
  try {
    let t = window.sessionStorage.getItem(e);
    if (t == null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (C(e), null);
    }
  } catch {
    return null;
  }
}
function w(e, t = !1) {
  try {
    let n = new URL(e, window.location.origin),
      r = n.searchParams.getAll(`campaign`),
      i = n.searchParams.getAll(N),
      a = n.searchParams.getAll(P),
      o = a[0];
    if (
      n.origin !== window.location.origin ||
      n.pathname !== `/students/claim` ||
      n.hash !== `` ||
      r.length !== 1 ||
      r[0] !== A ||
      i.length > 1 ||
      a.length > 1 ||
      (o != null && o !== F)
    )
      return null;
    for (let e of n.searchParams.keys()) if (e !== `campaign` && e !== N && e !== P) return null;
    let s = new URLSearchParams({ campaign: A }),
      c = i[0];
    if ((o != null && s.set(P, o), c != null)) {
      if (!t || (c !== `on` && c !== `off`)) return null;
      s.set(N, c);
    }
    return `/students/claim?${s.toString()}`;
  } catch {
    return null;
  }
}
function T(e, t = !1) {
  if (typeof window > `u` || !x(e)) return null;
  let n = S(e),
    r = te(n);
  if (
    typeof r != `object` ||
    !r ||
    !(`campaign` in r) ||
    !(`checkoutSessionId` in r) ||
    !(`accountId` in r) ||
    !(`accountUserId` in r) ||
    !(`returnPath` in r) ||
    r.campaign !== A ||
    r.checkoutSessionId !== e ||
    typeof r.accountId != `string` ||
    !x(r.accountId) ||
    typeof r.accountUserId != `string` ||
    !x(r.accountUserId) ||
    typeof r.returnPath != `string`
  )
    return (C(n), null);
  let i = w(r.returnPath, t);
  return i == null ? (C(n), null) : { accountId: r.accountId, accountUserId: r.accountUserId, returnPath: i };
}
function E(e, t = !1) {
  return T(e, t) != null;
}
function D({ checkoutSessionId: e, accountId: t, accountUserId: n, allowPreview: r = !1 }) {
  if (!x(t) || !x(n)) return null;
  let i = T(e, r);
  return i == null || i.accountId !== t || i.accountUserId !== n ? null : { returnPath: i.returnPath };
}
function O({ accountId: e, accountUserId: t, status: n }) {
  if (typeof window > `u` || !x(e) || !x(t) || (n !== `success` && n !== `failure`)) return !1;
  try {
    return (
      window.sessionStorage.setItem(
        M,
        JSON.stringify({ accountId: e, accountUserId: t, status: n, createdAtMs: Date.now() }),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function k({ checkoutSessionId: e, accountId: t, accountUserId: n, status: r, allowPreview: i = !1 }) {
  let a = D({ checkoutSessionId: e, accountId: t, accountUserId: n, allowPreview: i });
  if (a == null) return null;
  let o = new URL(a.returnPath, window.location.origin);
  return O({ accountId: t, accountUserId: n, status: r })
    ? (o.searchParams.set(I, r), `${o.pathname}${o.search}`)
    : null;
}
var A, j, M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((A = `students_2026`),
      (j = `oai/apps/students2026/checkoutRecovery.v1`),
      (M = `oai/apps/students2026/checkoutResult.v1`),
      (N = `students_2026_preview`),
      (P = `partner_id`),
      (F = `handshake`),
      (I = `students_2026_checkout_result`));
  }))();
}
function R(e) {
  return `${H}/${e}`;
}
function z(e) {
  let t = typeof e == `string` ? new URLSearchParams(e) : e,
    n = new URLSearchParams();
  for (let [e, r] of t.entries()) (/^utm_/i.test(e) || U.has(e)) && n.append(e, r);
  return n;
}
function B(e, t) {
  if (typeof window > `u`) return;
  let n = z(t);
  if (n.size !== 0)
    try {
      window.sessionStorage.setItem(R(e), n.toString());
    } catch {}
}
function V(e, t) {
  if (typeof window > `u`) return t;
  try {
    let n = window.sessionStorage.getItem(R(e));
    if (n == null) return t;
    for (let [e, r] of z(n).entries()) t.append(e, r);
  } catch {}
  return t;
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = `oai/apps/paypalPromoCheckoutAttribution`),
      (U = new Set([
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
function G(e) {
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
function K(e, t) {
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
function q(e, t) {
  let n = new URLSearchParams({
      stripe_session_id: e.checkout_session_id,
      processor_entity: e.processor_entity,
      source: c(t),
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
    (v(t, n), y(t, n));
    let r = new URLSearchParams(t).get(`return_to`);
    e.checkout_kind === m.RateLimitReset
      ? r != null && n.set(`return_to`, r)
      : e.checkout_kind === m.StandaloneCredit &&
        r != null &&
        d(r) &&
        n.set(`return_to`, o(r, `/settings/usage`));
  }
  if (e.entry_point === `paypal_promo_checkout`) {
    let r = V(e.checkout_session_id, new URLSearchParams()),
      i = z(t ?? ``),
      a = new Set(i.keys());
    (r.forEach((e, t) => {
      a.has(t) || i.append(t, e);
    }),
      i.forEach((e, t) => n.append(t, e)));
  }
  return (
    g(e.checkout_session_id, n),
    `${e.checkout_kind === m.RateLimitReset && e.status === `complete` ? `/payments/success-rate-limit-reset` : `/checkout/verify`}?${n.toString()}`
  );
}
function J(e, t, n, r) {
  let i = f(e.processor_entity, e.checkout_session_id, t, r && e.entry_point === `paypal_promo_checkout`);
  return `${n.replace(/\/$/, ``)}${i}`;
}
function Y(e, t, n) {
  let r = _(e, new URLSearchParams(t), n);
  if (r == null) return q(e, t);
  let i = new URL(r, window.location.origin);
  return (y(t, i.searchParams), `${i.pathname}${i.search}`);
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    (s(),
      l(),
      W(),
      u(),
      t(),
      h(),
      b(),
      ee(),
      (X = a({
        processorEntity: i([`openai_llc`, `openai_ie`]),
        checkoutSessionId: r().regex(/^(cs_|oaics_)[A-Za-z0-9_]+$/),
      })),
      (Z = i([`plus`, `go`, `pro5x`, `pro`, `team`])),
      (Q = {
        plus: `chatgptplusplan`,
        go: `chatgptgoplan`,
        pro5x: `chatgptprolite`,
        pro: `chatgptpro`,
        team: `chatgptteamplan`,
      }));
  }))();
}
export {
  L as _,
  X as a,
  $ as c,
  W as d,
  B as f,
  E as g,
  D as h,
  q as i,
  Z as l,
  k as m,
  Q as n,
  K as o,
  V as p,
  J as r,
  G as s,
  Y as t,
  z as u,
};
//# sourceMappingURL=session-adbd908db31f.js.map
