const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-ef627ab43ea6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./payment-method-display-9a3960f9fc88.js",
      "./payment-method-assets-a65a422e942b.js",
      "./payment-methods-d350525d78a1.js",
      "./format-amount-ee20e9ffab40.js",
      "./queries-95931bb8c995.js",
      "./query-error-2df1f6b7fd60.js",
      "./stripe-client-4f7192c20a27.js",
      "./pure-b84c4c3484c4.js",
      "./billing-state-a90fb678096b.js",
      "./add-method-59f4fd8d9a22.js",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./stripe-elements-appearance-809d15977833.js",
      "./prop-types-1ebacf647ac7.js",
      "./secure-form-status-1e957f282453.js",
      "./error-3f572e7606fb.js",
      "./add-method-bdc9cf36a997.css",
      "./edit-method-14d8ba5f8eb3.js",
      "./edit-method-99ea742132e4.css",
      "./delinquent-upgrade-preparation-20a81743136e.js",
      "./queries-ea9f18d3fc31.js",
      "./stripe-payment-confirmation-ff492adf70b6.js",
      "./confirm-subscription-upgrade-c627663bff93.js",
      "./subscription-update-plan-b5de7979cb69.js",
      "./selector-345300544d26.js",
      "./display-901034b4869f.js",
      "./compact-payment-method-picker-ec7855b39424.js",
      "./events-66e17df2dc8d.js",
      "./chatgpt_subscription-521a9ceb1ea2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  FBt as i,
  I3 as a,
  IU as o,
  LNt as s,
  OFt as c,
  PBt as l,
  Qst as u,
  TY as d,
  XOt as f,
  ZSt as p,
  iCt as m,
  kFt as h,
  nCt as g,
  okt as _,
  tkt as v,
  vD as y,
  yD as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as x,
  SRn as S,
  TBt as C,
  bRn as w,
  gen as T,
  jcn as E,
  pen as D,
  sLr as O,
  tLr as ee,
  wBt as te,
  wLr as k,
  wcn as A,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as ne, Lf as j, Rf as M, Uy as re } from "./app-primary-3e00728c2a4c.js";
import { i as N, n as P, r as ie, t as ae } from "./state-2495d1d7742b.js";
import { n as oe, t as se } from "./workspace-billing-url-a7346df3d700.js";
import { n as F, t as ce } from "./events-66e17df2dc8d.js";
import { a as I, i as L, n as R, o as z, r as B, s as V } from "./state-ef4b8c7b1dd6.js";
function H(e) {
  let t = (0, W.c)(28),
    { entries: n, renderSlot: r, trackVisibility: i } = e,
    a = i === void 0 || i,
    { data: o, isLoading: s } = E(),
    c;
  t[0] === o
    ? (c = t[1])
    : ((c =
        o?.structure === `workspace` && o.account_user_role === `account-owner` && O(o.plan_type)
          ? o.id
          : null),
      (t[0] = o),
      (t[1] = c));
  let l = c,
    { data: u, isLoading: d } = g(N, l),
    f;
  t[2] === u
    ? (f = t[3])
    : ((f = u?.grace_period_end_timestamp == null ? null : Date.parse(u.grace_period_end_timestamp)),
      (t[2] = u),
      (t[3] = f));
  let p = T(f),
    m = g(ie, l),
    h;
  t[4] !== m.length || t[5] !== p || t[6] !== u
    ? ((h = m.length > 0 ? null : ae(u, p)), (t[4] = m.length), (t[5] = p), (t[6] = u), (t[7] = h))
    : (h = t[7]);
  let _ = h;
  if (n == null) {
    let e;
    return (
      t[8] !== l || t[9] !== _
        ? ((e = _ == null || l == null ? null : (0, K.jsx)(U, { accountId: l, gracePeriodEnd: _ })),
          (t[8] = l),
          (t[9] = _),
          (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let v;
  t[11] !== l || t[12] !== _
    ? ((v = _ == null || l == null ? null : (0, K.jsx)(U, { accountId: l, gracePeriodEnd: _ })),
      (t[11] = l),
      (t[12] = _),
      (t[13] = v))
    : (v = t[13]);
  let y = l != null && _ != null,
    b = s || (l != null && d),
    x,
    S,
    C;
  if (t[14] !== n || t[15] !== _ || t[16] !== r || t[17] !== v || t[18] !== y || t[19] !== b || t[20] !== a) {
    let e = [{ content: v, isEligible: y, isLoading: b }, ...n];
    ((x = G.Fragment),
      (S = _),
      (C = r?.(e) ?? (0, K.jsx)(j, { entries: e, trackVisibility: a })),
      (t[14] = n),
      (t[15] = _),
      (t[16] = r),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = a),
      (t[21] = x),
      (t[22] = S),
      (t[23] = C));
  } else ((x = t[21]), (S = t[22]), (C = t[23]));
  let w;
  return (
    t[24] !== x || t[25] !== S || t[26] !== C
      ? ((w = (0, K.jsx)(x, { children: C }, S)), (t[24] = x), (t[25] = S), (t[26] = C), (t[27] = w))
      : (w = t[27]),
    w
  );
}
function U(e) {
  let t = (0, W.c)(12),
    { accountId: n, gracePeriodEnd: r } = e,
    i = _(),
    a;
  t[0] !== r || t[1] !== i
    ? ((a = i.formatDate(r, { month: `long`, day: `numeric` })), (t[0] = r), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === a
    ? (o = t[4])
    : ((o = (0, K.jsx)(v, {
        id: `codex.workspaceRenewalPaymentBanner.description`,
        defaultMessage: `Update your payment method before {date} to keep access to your workspace`,
        description: `Warning that a Business workspace payment must be updated before {date}, when the grace period ends`,
        values: { date: a },
      })),
      (t[3] = a),
      (t[4] = o));
  let s;
  t[5] === n
    ? (s = t[6])
    : ((s = (e) => {
        S({ event: e, href: se(n), initiator: `open_in_browser_bridge` });
      }),
      (t[5] = n),
      (t[6] = s));
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, K.jsx)(v, {
        id: `codex.workspaceRenewalPaymentBanner.updatePayment`,
        defaultMessage: `Update payment`,
        description: `Opens workspace billing settings to update the payment method`,
      })),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, K.jsx)(v, {
        id: `codex.workspaceRenewalPaymentBanner.title`,
        defaultMessage: `Workspace renewal failed`,
        description: `Title shown when a Business workspace renewal payment fails`,
      })),
      (t[8] = l))
    : (l = t[8]);
  let u;
  return (
    t[9] !== o || t[10] !== s
      ? ((u = (0, K.jsx)(y, {
          ariaLive: `polite`,
          content: o,
          Icon: ne,
          layout: `warningCallout`,
          onPrimaryCtaClick: s,
          primaryCtaText: c,
          role: `status`,
          stackOnNarrow: !0,
          title: l,
          type: `warning`,
        })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = l()), p(), (G = i()), f(), A(), b(), w(), D(), M(), re(), ee(), P(), oe(), (K = s()));
  }))();
}
function le(e) {
  let t = (0, Y.c)(4),
    { data: n } = E(),
    r = m(x),
    i;
  return (
    t[0] !== n || t[1] !== e || t[2] !== r
      ? ((i =
          n?.structure === `personal` && C(n.plan_type)
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
    { data: n, isPending: r } = g(V, e),
    i = m(z),
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = n?.grace_period_end_timestamp == null ? null : Date.parse(n.grace_period_end_timestamp)),
      (t[0] = n),
      (t[1] = a));
  let o = T(a),
    s;
  t[2] !== i || t[3] !== o || t[4] !== n
    ? ((s = L(n, o) && (i == null || o.getTime() > i + 864e5)),
      (t[2] = i),
      (t[3] = o),
      (t[4] = n),
      (t[5] = s))
    : (s = t[5]);
  let c = s,
    l;
  t[6] === c ? (l = t[7]) : ((l = { enabled: c }), (t[6] = c), (t[7] = l));
  let { data: u, isPending: d } = g(I, e, l),
    f = c && u?.recovery_surface === `payment_recovery_banner`,
    p;
  t[8] !== e || t[9] !== f || t[10] !== n
    ? ((p = f && n != null ? (0, Z.jsx)(fe, { accountId: e, planName: R(n.plan_type) }) : null),
      (t[8] = e),
      (t[9] = f),
      (t[10] = n),
      (t[11] = p))
    : (p = t[11]);
  let h = p,
    _ = r || (c && d),
    v;
  return (
    t[12] !== h || t[13] !== f || t[14] !== _
      ? ((v = { content: h, isEligible: f, isLoading: _ }),
        (t[12] = h),
        (t[13] = f),
        (t[14] = _),
        (t[15] = v))
      : (v = t[15]),
    v
  );
}
function fe(e) {
  let n = (0, Y.c)(30),
    { accountId: r, planName: i } = e,
    a = t(u),
    { data: s } = E(),
    [c, l] = (0, X.useState)(!1),
    d,
    f;
  (n[0] !== s || n[1] !== a
    ? ((d = () => {
        s != null && F(a, `shown`);
      }),
      (f = [s, a]),
      (n[0] = s),
      (n[1] = a),
      (n[2] = d),
      (n[3] = f))
    : ((d = n[2]), (f = n[3])),
    (0, X.useEffect)(d, f));
  let p;
  n[4] === a
    ? (p = n[5])
    : ((p = () => {
        (a.set(z, Date.now()), l(!1));
      }),
      (n[4] = a),
      (n[5] = p));
  let m = p,
    h;
  n[6] === i
    ? (h = n[7])
    : ((h = (0, Z.jsx)(v, {
        id: `codex.subscriptionPaymentRecovery.banner.title`,
        defaultMessage: `{planName} plan failed to renew`,
        description: `Warning banner for a personal subscriber whose renewal payment failed. planName is their short branded plan name, such as Plus or Pro.`,
        values: { planName: i },
      })),
      (n[6] = i),
      (n[7] = h));
  let g;
  n[8] === i
    ? (g = n[9])
    : ((g = (0, Z.jsx)(v, {
        id: `codex.subscriptionPaymentRecovery.banner.description`,
        defaultMessage: `Update your payment method to continue using ChatGPT {planName}`,
        description: `Recovery banner explaining how a personal subscriber can keep access after a failed renewal. planName is the short branded plan name.`,
        values: { planName: i },
      })),
      (n[8] = i),
      (n[9] = g));
  let _;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(v, {
        id: `codex.subscriptionPaymentRecovery.banner.review`,
        defaultMessage: `Review payment`,
        description: `Short button in the failed personal renewal banner that opens the invoice and saved payment methods for review before payment.`,
      })),
      (n[10] = _))
    : (_ = n[10]);
  let b;
  n[11] === a
    ? (b = n[12])
    : ((b = () => {
        (F(a, `cta_clicked`), l(!0));
      }),
      (n[11] = a),
      (n[12] = b));
  let x;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(v, {
        id: `codex.subscriptionPaymentRecovery.banner.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Dismisses the personal subscription payment recovery banner for one day without changing the subscription or making a payment.`,
      })),
      (n[13] = x))
    : (x = n[13]);
  let S;
  n[14] !== m || n[15] !== a
    ? ((S = () => {
        (F(a, `dismissed`), m());
      }),
      (n[14] = m),
      (n[15] = a),
      (n[16] = S))
    : (S = n[16]);
  let C;
  n[17] !== h || n[18] !== g || n[19] !== b || n[20] !== S
    ? ((C = (0, Z.jsx)(y, {
        ariaLive: `polite`,
        role: `status`,
        type: `warning`,
        layout: `warningCallout`,
        stackOnNarrow: !0,
        Icon: o,
        title: h,
        content: g,
        primaryCtaText: _,
        onPrimaryCtaClick: b,
        secondaryCtaText: x,
        secondaryCtaColor: `ghost`,
        onSecondaryCtaClick: S,
      })),
      (n[17] = h),
      (n[18] = g),
      (n[19] = b),
      (n[20] = S),
      (n[21] = C))
    : (C = n[21]);
  let w;
  n[22] !== r || n[23] !== m || n[24] !== c || n[25] !== i
    ? ((w = c ? (0, Z.jsx)(Q, { accountId: r, planName: i, onClose: m, onComplete: m }) : null),
      (n[22] = r),
      (n[23] = m),
      (n[24] = c),
      (n[25] = i),
      (n[26] = w))
    : (w = n[26]);
  let T;
  return (
    n[27] !== C || n[28] !== w
      ? ((T = (0, Z.jsxs)(Z.Fragment, { children: [C, w] })), (n[27] = C), (n[28] = w), (n[29] = T))
      : (T = n[29]),
    T
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = l()),
      p(),
      (X = i()),
      f(),
      q(),
      k(),
      A(),
      b(),
      d(),
      r(),
      D(),
      te(),
      M(),
      n(),
      ce(),
      B(),
      (Z = s()),
      h(),
      (Q = a(
        async () =>
          (
            await c(
              async () => {
                let { RecoveryDialog: e } = await import(`./dialog-ef627ab43ea6.js`);
                return { RecoveryDialog: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                26, 27, 28, 29, 30, 31, 32, 33, 34,
              ]),
              import.meta.url,
            )
          ).RecoveryDialog,
      )));
  }))();
}
$();
export { de as PersonalPaymentRecoverySource, le as SubscriptionPaymentAnnouncement };
//# sourceMappingURL=announcement-d36293e08be3.js.map
