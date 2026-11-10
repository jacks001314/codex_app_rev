const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-8887d7259bbe.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./payment-method-display-f5e9bf4fbbce.js",
      "./payment-method-assets-a65a422e942b.js",
      "./payment-methods-36911f01af71.js",
      "./format-amount-e8f6a81b6cbb.js",
      "./queries-a0c4a0375be0.js",
      "./query-error-f06ec25b6ac2.js",
      "./error-4216d2e638a8.js",
      "./stripe-client-65fa98e77e53.js",
      "./pure-b84c4c3484c4.js",
      "./billing-state-dcaaf3e0b18a.js",
      "./add-method-d517281a01bd.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./stripe-elements-appearance-5ef60c7c8897.js",
      "./prop-types-1ebacf647ac7.js",
      "./add-method-bdc9cf36a997.css",
      "./edit-method-6b2494c0f75e.js",
      "./edit-method-99ea742132e4.css",
      "./stripe-payment-confirmation-ff492adf70b6.js",
      "./confirm-subscription-upgrade-cf8012c4bfe6.js",
      "./subscription-update-plan-7dcf54a45cb8.js",
      "./delinquent-upgrade-preparation-5af5249ff902.js",
      "./queries-9a7ecb201f4e.js",
      "./selector-dd5e11ba2e4a.js",
      "./display-98c41463d9ba.js",
      "./events-cbcc77149e45.js",
      "./chatgpt_subscription-521a9ceb1ea2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  GE as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  TJ as s,
  VDt as c,
  Vxt as l,
  WE as u,
  fPt as d,
  jDt as f,
  pPt as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  z4 as v,
  zH as y,
  zxt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as x,
  FMr as S,
  Fin as C,
  Hin as w,
  JPn as T,
  K5t as E,
  OGt as ee,
  XMr as D,
  XPn as te,
  Y5t as O,
  kGt as k,
  tNr as ne,
} from "./app-initial-5851df3f6cb1.js";
import { Df as A, Ef as j, by as M, xy as N } from "./app-primary-fe8a450b3b04.js";
import { i as P, n as re, r as ie, t as ae } from "./state-255f3b7248c2.js";
import { n as oe, t as se } from "./workspace-billing-url-f5a0b078d3d4.js";
import { n as F, t as ce } from "./events-cbcc77149e45.js";
import { a as I, i as L, n as R, o as z, r as B, s as V } from "./state-39766b639a17.js";
function H(e) {
  let t = (0, W.c)(28),
    { entries: n, renderSlot: r, trackVisibility: i } = e,
    a = i === void 0 || i,
    { data: o, isLoading: s } = w(),
    c;
  t[0] === o
    ? (c = t[1])
    : ((c =
        o?.structure === `workspace` && o.account_user_role === `account-owner` && S(o.plan_type)
          ? o.id
          : null),
      (t[0] = o),
      (t[1] = c));
  let l = c,
    { data: u, isLoading: d } = b(P, l),
    f;
  t[2] === u
    ? (f = t[3])
    : ((f = u?.grace_period_end_timestamp == null ? null : Date.parse(u.grace_period_end_timestamp)),
      (t[2] = u),
      (t[3] = f));
  let p = O(f),
    m = b(ie, l),
    h;
  t[4] !== m.length || t[5] !== p || t[6] !== u
    ? ((h = m.length > 0 ? null : ae(u, p)), (t[4] = m.length), (t[5] = p), (t[6] = u), (t[7] = h))
    : (h = t[7]);
  let g = h;
  if (n == null) {
    let e;
    return (
      t[8] !== l || t[9] !== g
        ? ((e = g == null || l == null ? null : (0, K.jsx)(U, { accountId: l, gracePeriodEnd: g })),
          (t[8] = l),
          (t[9] = g),
          (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let _;
  t[11] !== l || t[12] !== g
    ? ((_ = g == null || l == null ? null : (0, K.jsx)(U, { accountId: l, gracePeriodEnd: g })),
      (t[11] = l),
      (t[12] = g),
      (t[13] = _))
    : (_ = t[13]);
  let v = l != null && g != null,
    y = s || (l != null && d),
    x,
    C,
    T;
  if (t[14] !== n || t[15] !== g || t[16] !== r || t[17] !== _ || t[18] !== v || t[19] !== y || t[20] !== a) {
    let e = [{ content: _, isEligible: v, isLoading: y }, ...n];
    ((x = G.Fragment),
      (C = g),
      (T = r?.(e) ?? (0, K.jsx)(j, { entries: e, trackVisibility: a })),
      (t[14] = n),
      (t[15] = g),
      (t[16] = r),
      (t[17] = _),
      (t[18] = v),
      (t[19] = y),
      (t[20] = a),
      (t[21] = x),
      (t[22] = C),
      (t[23] = T));
  } else ((x = t[21]), (C = t[22]), (T = t[23]));
  let E;
  return (
    t[24] !== x || t[25] !== C || t[26] !== T
      ? ((E = (0, K.jsx)(x, { children: T }, C)), (t[24] = x), (t[25] = C), (t[26] = T), (t[27] = E))
      : (E = t[27]),
    E
  );
}
function U(e) {
  let t = (0, W.c)(12),
    { accountId: n, gracePeriodEnd: r } = e,
    a = c(),
    o;
  t[0] !== r || t[1] !== a
    ? ((o = a.formatDate(r, { month: `long`, day: `numeric` })), (t[0] = r), (t[1] = a), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === o
    ? (s = t[4])
    : ((s = (0, K.jsx)(i, {
        id: `codex.workspaceRenewalPaymentBanner.description`,
        defaultMessage: `Update your payment method before {date} to keep access to your workspace`,
        description: `Warning that a Business workspace payment must be updated before {date}, when the grace period ends`,
        values: { date: o },
      })),
      (t[3] = o),
      (t[4] = s));
  let l;
  t[5] === n
    ? (l = t[6])
    : ((l = (e) => {
        te({ event: e, href: se(n), initiator: `open_in_browser_bridge` });
      }),
      (t[5] = n),
      (t[6] = l));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, K.jsx)(i, {
        id: `codex.workspaceRenewalPaymentBanner.updatePayment`,
        defaultMessage: `Update payment`,
        description: `Opens workspace billing settings to update the payment method`,
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, K.jsx)(i, {
        id: `codex.workspaceRenewalPaymentBanner.title`,
        defaultMessage: `Workspace renewal failed`,
        description: `Title shown when a Business workspace renewal payment fails`,
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== s || t[10] !== l
      ? ((p = (0, K.jsx)(u, {
          ariaLive: `polite`,
          content: s,
          Icon: M,
          layout: `warningCallout`,
          onPrimaryCtaClick: l,
          primaryCtaText: d,
          role: `status`,
          stackOnNarrow: !0,
          title: f,
          type: `warning`,
        })),
        (t[9] = s),
        (t[10] = l),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = m()), o(), (G = _()), f(), C(), r(), T(), E(), A(), N(), x(), re(), oe(), (K = g()));
  }))();
}
function le(e) {
  let t = (0, Y.c)(4),
    { data: n } = w(),
    r = l(D),
    i;
  return (
    t[0] !== n || t[1] !== e || t[2] !== r
      ? ((i =
          n?.structure === `personal` && k(n.plan_type)
            ? (0, Z.jsx)(ue, { ...e, accountId: n.id }, `${r}:${n.id}`)
            : (0, Z.jsx)(H, { ...e })),
        (t[0] = n),
        (t[1] = e),
        (t[2] = r),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
function ue(e) {
  let t = (0, Y.c)(10),
    { accountId: n, entries: r, renderSlot: i, trackVisibility: a } = e,
    o = a === void 0 || a,
    s = J(n);
  if (r == null) {
    let e;
    return (
      t[0] === s.content
        ? (e = t[1])
        : ((e = (0, Z.jsx)(Z.Fragment, { children: s.content })), (t[0] = s.content), (t[1] = e)),
      e
    );
  }
  let c = s.isEligible ? `recovery` : `fallback`,
    l;
  t[2] !== s || t[3] !== r || t[4] !== i || t[5] !== o
    ? ((l = i?.([s, ...r]) ?? (0, Z.jsx)(j, { entries: [s, ...r], trackVisibility: o })),
      (t[2] = s),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== c || t[8] !== l
      ? ((u = (0, Z.jsx)(X.Fragment, { children: l }, c)), (t[7] = c), (t[8] = l), (t[9] = u))
      : (u = t[9]),
    u
  );
}
function de(e) {
  let t = (0, Y.c)(3),
    { accountId: n, children: r } = e,
    i = J(n),
    a;
  return (t[0] !== r || t[1] !== i ? ((a = r(i)), (t[0] = r), (t[1] = i), (t[2] = a)) : (a = t[2]), a);
}
function J(e) {
  let t = (0, Y.c)(16),
    { data: n, isPending: r } = b(V, e),
    i = l(z),
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = n?.grace_period_end_timestamp == null ? null : Date.parse(n.grace_period_end_timestamp)),
      (t[0] = n),
      (t[1] = a));
  let o = O(a),
    s;
  t[2] !== i || t[3] !== o || t[4] !== n
    ? ((s = L(n, o) && (i == null || o.getTime() > i + 864e5)),
      (t[2] = i),
      (t[3] = o),
      (t[4] = n),
      (t[5] = s))
    : (s = t[5]);
  let c = s,
    u;
  t[6] === c ? (u = t[7]) : ((u = { enabled: c }), (t[6] = c), (t[7] = u));
  let { data: d, isPending: f } = b(I, e, u),
    p = c && d?.recovery_surface === `payment_recovery_banner`,
    m;
  t[8] !== e || t[9] !== p || t[10] !== n
    ? ((m = p && n != null ? (0, Z.jsx)(fe, { accountId: e, planName: R(n.plan_type) }) : null),
      (t[8] = e),
      (t[9] = p),
      (t[10] = n),
      (t[11] = m))
    : (m = t[11]);
  let h = m,
    g = r || (c && f),
    _;
  return (
    t[12] !== h || t[13] !== p || t[14] !== g
      ? ((_ = { content: h, isEligible: p, isLoading: g }),
        (t[12] = h),
        (t[13] = p),
        (t[14] = g),
        (t[15] = _))
      : (_ = t[15]),
    _
  );
}
function fe(e) {
  let t = (0, Y.c)(30),
    { accountId: r, planName: o } = e,
    s = a(n),
    { data: c } = w(),
    [l, d] = (0, X.useState)(!1),
    f,
    p;
  (t[0] !== c || t[1] !== s
    ? ((f = () => {
        c != null && F(s, `shown`);
      }),
      (p = [c, s]),
      (t[0] = c),
      (t[1] = s),
      (t[2] = f),
      (t[3] = p))
    : ((f = t[2]), (p = t[3])),
    (0, X.useEffect)(f, p));
  let m;
  t[4] === s
    ? (m = t[5])
    : ((m = () => {
        (s.set(z, Date.now()), d(!1));
      }),
      (t[4] = s),
      (t[5] = m));
  let h = m,
    g;
  t[6] === o
    ? (g = t[7])
    : ((g = (0, Z.jsx)(i, {
        id: `codex.subscriptionPaymentRecovery.banner.title`,
        defaultMessage: `{planName} plan failed to renew`,
        description: `Warning banner for a personal subscriber whose renewal payment failed. planName is their short branded plan name, such as Plus or Pro.`,
        values: { planName: o },
      })),
      (t[6] = o),
      (t[7] = g));
  let _;
  t[8] === o
    ? (_ = t[9])
    : ((_ = (0, Z.jsx)(i, {
        id: `codex.subscriptionPaymentRecovery.banner.description`,
        defaultMessage: `Update your payment method to continue using ChatGPT {planName}`,
        description: `Recovery banner explaining how a personal subscriber can keep access after a failed renewal. planName is the short branded plan name.`,
        values: { planName: o },
      })),
      (t[8] = o),
      (t[9] = _));
  let v;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(i, {
        id: `codex.subscriptionPaymentRecovery.banner.review`,
        defaultMessage: `Review payment`,
        description: `Short button in the failed personal renewal banner that opens the invoice and saved payment methods for review before payment.`,
      })),
      (t[10] = v))
    : (v = t[10]);
  let b;
  t[11] === s
    ? (b = t[12])
    : ((b = () => {
        (F(s, `cta_clicked`), d(!0));
      }),
      (t[11] = s),
      (t[12] = b));
  let x;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(i, {
        id: `codex.subscriptionPaymentRecovery.banner.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Dismisses the personal subscription payment recovery banner for one day without changing the subscription or making a payment.`,
      })),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] !== h || t[15] !== s
    ? ((S = () => {
        (F(s, `dismissed`), h());
      }),
      (t[14] = h),
      (t[15] = s),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] !== g || t[18] !== _ || t[19] !== b || t[20] !== S
    ? ((C = (0, Z.jsx)(u, {
        ariaLive: `polite`,
        role: `status`,
        type: `warning`,
        layout: `warningCallout`,
        stackOnNarrow: !0,
        Icon: y,
        title: g,
        content: _,
        primaryCtaText: v,
        onPrimaryCtaClick: b,
        secondaryCtaText: x,
        secondaryCtaColor: `ghost`,
        onSecondaryCtaClick: S,
      })),
      (t[17] = g),
      (t[18] = _),
      (t[19] = b),
      (t[20] = S),
      (t[21] = C))
    : (C = t[21]);
  let T;
  t[22] !== r || t[23] !== h || t[24] !== l || t[25] !== o
    ? ((T = l ? (0, Z.jsx)(Q, { accountId: r, planName: o, onClose: h, onComplete: h }) : null),
      (t[22] = r),
      (t[23] = h),
      (t[24] = l),
      (t[25] = o),
      (t[26] = T))
    : (T = t[26]);
  let E;
  return (
    t[27] !== C || t[28] !== T
      ? ((E = (0, Z.jsxs)(Z.Fragment, { children: [C, T] })), (t[27] = C), (t[28] = T), (t[29] = E))
      : (E = t[29]),
    E
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = m()),
      o(),
      (X = _()),
      f(),
      q(),
      ne(),
      C(),
      r(),
      s(),
      v(),
      E(),
      ee(),
      A(),
      h(),
      ce(),
      B(),
      (Z = g()),
      p(),
      (Q = t(
        async () =>
          (
            await d(
              async () => {
                let { RecoveryDialog: e } = await import(`./dialog-8887d7259bbe.js`);
                return { RecoveryDialog: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                26, 27, 28, 29, 30, 31, 32,
              ]),
              import.meta.url,
            )
          ).RecoveryDialog,
      )));
  }))();
}
$();
export { de as PersonalPaymentRecoverySource, le as SubscriptionPaymentAnnouncement };
//# sourceMappingURL=announcement-7f6a4bb27759.js.map
