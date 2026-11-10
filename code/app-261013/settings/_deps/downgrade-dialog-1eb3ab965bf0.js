import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CPt as n,
  Cot as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  Lot as s,
  Pxt as c,
  SPt as l,
  VDt as u,
  Xot as d,
  Yot as f,
  _O as ee,
  cO as te,
  fO as p,
  hot as m,
  jDt as ne,
  lO as re,
  lot as h,
  mO as ie,
  oO as ae,
  sO as oe,
  t3 as g,
  vO as _,
  vzt as v,
  wot as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as se,
  CPt as S,
  DPt as ce,
  OGt as C,
  OPt as le,
  aDr as ue,
  eDr as w,
  kGt as de,
  nT as T,
  rT as fe,
  wGt as pe,
  xPt as E,
} from "./app-initial-5851df3f6cb1.js";
import { n as me } from "./pricing-889ac3693bce.js";
import { r as D, t as he } from "./subscription-update-plan-7dcf54a45cb8.js";
import { n as O, r as ge } from "./queries-a0c4a0375be0.js";
import { n as _e, t as ve } from "./query-error-f06ec25b6ac2.js";
import { n as ye, r as be, t as k } from "./events-c330edcaee07.js";
import { n as A, t as xe } from "./billing-pricing-e48f68285f93.js";
import { i as j, t as Se } from "./queries-fdefe92e9bc4.js";
import { n as M, r as Ce } from "./stripe-client-65fa98e77e53.js";
import { n as we, r as Te } from "./billing-state-dcaaf3e0b18a.js";
import { n as N, t as Ee } from "./subscription-update-dialog-ae71a1680bda.js";
async function De({
  confirmPaymentIntent: e,
  expectedPaymentIntentId: t,
  isOpen: n,
  cleanupPendingPayment: r,
}) {
  try {
    if (!n()) return { status: `closed`, cleanupFailed: !(await r()) };
    let i = await e();
    for (let t of [100, 250]) {
      if (
        i.error?.code !== `lock_timeout` ||
        !n() ||
        (await new Promise((e) => window.setTimeout(e, t)), !n())
      )
        break;
      i = await e();
    }
    if (!n()) return { status: `closed`, cleanupFailed: !(await r()) };
    if (i.error != null) return { status: `payment_method_failed`, cleanupFailed: !(await r()) };
    let a = i.paymentIntent;
    return a.id === t
      ? a.status === `processing`
        ? { status: `pending`, cleanupFailed: !1 }
        : a.status === `succeeded`
          ? { status: `complete`, cleanupFailed: !1 }
          : { status: `payment_method_failed`, cleanupFailed: !(await r()) }
      : { status: `unknown`, cleanupFailed: !(await r()) };
  } catch {
    return { status: `unknown`, cleanupFailed: !(await r()) };
  }
}
function Oe(e) {
  let n = (0, ke.c)(125),
    { account: a, accountId: c, targetPlan: l, onBack: f, onClose: p, onSuccess: ne } = e,
    h = o(r),
    g = u(),
    _ = ue(),
    v = fe(),
    y = (0, F.useRef)(!1),
    b;
  n[0] === h
    ? (b = n[1])
    : ((b = () => {
        y.current ||
          ((y.current = !0),
          be(h, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !0 } }));
      }),
      (n[0] = h),
      (n[1] = b));
  let x = b,
    S;
  n[2] === h
    ? (S = n[3])
    : ((S = (e) => {
        (y.current &&
          ((y.current = !1),
          be(h, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !1 } })),
          e());
      }),
      (n[2] = h),
      (n[3] = S));
  let C = S,
    w = (0, F.useRef)(null),
    T = he(l),
    [E] = (0, F.useState)(a.account.plan_type),
    D = a.account.plan_type,
    O;
  n[4] !== D || n[5] !== l
    ? ((O = de(D) && pe({ currentPlan: D, targetPlan: l }) === `downgrade`),
      (n[4] = D),
      (n[5] = l),
      (n[6] = O))
    : (O = n[6]);
  let _e = O,
    k,
    A;
  (n[7] === c
    ? ((k = n[8]), (A = n[9]))
    : ((k = () => () => {
        let e = w.current;
        e != null && P(c, e);
      }),
      (A = [c]),
      (n[7] = c),
      (n[8] = k),
      (n[9] = A)),
    (0, F.useEffect)(k, A));
  let j;
  n[10] !== a || n[11] !== c || n[12] !== D || n[13] !== E || n[14] !== _e
    ? ((j =
        a.account.account_id === c &&
        a.account.structure === `personal` &&
        D === E &&
        _e &&
        a.entitlement.has_active_subscription === !0 &&
        we(a) == null),
      (n[10] = a),
      (n[11] = c),
      (n[12] = D),
      (n[13] = E),
      (n[14] = _e),
      (n[15] = j))
    : (j = n[15]);
  let M = j,
    Te = ce({ accountId: c, updatedPlan: T }),
    {
      data: N,
      isError: Oe,
      isPending: Ae,
      isFetching: je,
      refetch: Me,
    } = d({ ...Te, queryKey: [...Te.queryKey, E ?? `unknown`], enabled: M, staleTime: 0, retry: !1 }),
    Ne = N?.currency,
    L;
  n[16] !== c || n[17] !== Ne
    ? ((L = [`consumer-billing`, c, `downgrade-pricing`, Ne]), (n[16] = c), (n[17] = Ne), (n[18] = L))
    : (L = n[18]);
  let R;
  n[19] !== N || n[20] !== _
    ? ((R = async (e) => {
        let { signal: t } = e;
        return N == null
          ? null
          : Se.parse(
              await xe({
                currency: N.currency,
                isPricingEnabled: (e) => se(_, `3768341700`).get(e, !1),
                signal: t,
              }),
            );
      }),
      (n[19] = N),
      (n[20] = _),
      (n[21] = R))
    : (R = n[21]);
  let Pe = M && N != null,
    Fe;
  n[22] !== Pe || n[23] !== L || n[24] !== R
    ? ((Fe = { queryKey: L, queryFn: R, enabled: Pe, staleTime: 0, retry: !1 }),
      (n[22] = Pe),
      (n[23] = L),
      (n[24] = R),
      (n[25] = Fe))
    : (Fe = n[25]);
  let { data: z, isError: Ie, isPending: Le, refetch: Re } = d(Fe),
    B;
  n[26] !== c || n[27] !== g || n[28] !== v || n[29] !== h || n[30] !== _ || n[31] !== T
    ? ((B = async () => {
        let e = await le({ accountId: c, updatedPlan: T });
        if (e.status == null) return { status: `complete`, cleanupFailed: !1 };
        if (e.status === `pending`) return { status: `pending`, cleanupFailed: !1 };
        if (e.status === `setup_required`) return { status: `payment_method_failed`, cleanupFailed: !1 };
        if (e.status === `payment_method_failed`) {
          let t = e.pending_update_payment_intent_id;
          if (t == null) return { status: `payment_method_failed`, cleanupFailed: !1 };
          let n = { paymentIntentId: t, invoiceId: e.pending_update_invoice_id ?? void 0, cleanup: null };
          return ((w.current = n), { status: `payment_method_failed`, cleanupFailed: !(await P(c, n)) });
        }
        let t = {
          paymentIntentId: e.payment_intent.id,
          invoiceId: e.pending_update_invoice_id ?? void 0,
          cleanup: null,
        };
        if (((w.current = t), !v())) return { status: `closed`, cleanupFailed: !(await P(c, t)) };
        let n;
        try {
          let { stripe: r } = await h.queryClient.fetchQuery(
            Ce(c, g.locale, _.getExperiment(`4048417348`).get(`enabled`, !1)),
          );
          n = await De({
            confirmPaymentIntent: () => r.confirmCardPayment(e.payment_intent.client_secret),
            expectedPaymentIntentId: e.payment_intent.id,
            isOpen: v,
            cleanupPendingPayment: () => P(c, t),
          });
        } catch {
          n = { status: `unknown`, cleanupFailed: !(await P(c, t)) };
        }
        return ((n.status === `complete` || n.status === `pending`) && (w.current = null), n);
      }),
      (n[26] = c),
      (n[27] = g),
      (n[28] = v),
      (n[29] = h),
      (n[30] = _),
      (n[31] = T),
      (n[32] = B))
    : (B = n[32]);
  let V;
  n[33] !== c ||
  n[34] !== D ||
  n[35] !== g ||
  n[36] !== v ||
  n[37] !== C ||
  n[38] !== p ||
  n[39] !== ne ||
  n[40] !== N ||
  n[41] !== h ||
  n[42] !== l
    ? ((V = async (e) => {
        (await ge(h, c),
          v() &&
            D != null &&
            (e.status === `pending`
              ? (h
                  .get(m)
                  .info(
                    g.formatMessage({
                      id: `settings.consumerBilling.downgradePending`,
                      defaultMessage: `Your payment is processing. We'll update your subscription once it's confirmed.`,
                      description: `Notification after a retention plan-change request is accepted but still processing; this is not a confirmed subscription change.`,
                    }),
                  ),
                C(p))
              : e.status === `complete`
                ? (be(h, { name: `chatgpt_downgrade_plan_success`, metadata: { fromPlan: D, toPlan: l } }),
                  N?.renewal_date == null
                    ? h
                        .get(m)
                        .success(
                          g.formatMessage(
                            {
                              id: `settings.consumerBilling.downgradeSucceededWithoutDate.numberedTiers`,
                              defaultMessage: `Your subscription has been updated. Your subscription will change to {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} other {Pro}} at the end of your current billing period`,
                              description: `Success notification after the server confirms a scheduled retention plan change without an exact renewal date. plan is the target canonical plan type: Go, Plus, Pro 100, or Pro 200. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                            },
                            { plan: l },
                          ),
                        )
                    : h
                        .get(m)
                        .success(
                          g.formatMessage(
                            {
                              id: `settings.consumerBilling.downgradeSucceeded.numberedTiers`,
                              defaultMessage: `Your subscription has been updated. Your subscription will change to {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} other {Pro}} on {date}`,
                              description: `Success notification after the server confirms a scheduled retention plan change. plan is the target canonical plan type: Go, Plus, Pro 100, or Pro 200. date is the localized renewal date from the reviewed preview. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                            },
                            {
                              plan: l,
                              date: g.formatDate(N.renewal_date, {
                                year: `numeric`,
                                month: `long`,
                                day: `numeric`,
                              }),
                            },
                          ),
                        ),
                  C(ne ?? p))
                : e.status === `payment_method_failed` &&
                  be(h, {
                    name: `chatgpt_plan_management_modal_handle_update_error`,
                    metadata: { error_type: `payment_method_failed` },
                  })));
      }),
      (n[33] = c),
      (n[34] = D),
      (n[35] = g),
      (n[36] = v),
      (n[37] = C),
      (n[38] = p),
      (n[39] = ne),
      (n[40] = N),
      (n[41] = h),
      (n[42] = l),
      (n[43] = V))
    : (V = n[43]);
  let H;
  n[44] !== c || n[45] !== v || n[46] !== h
    ? ((H = async (e) => {
        (await ge(h, c), v() && ye(h, e));
      }),
      (n[44] = c),
      (n[45] = v),
      (n[46] = h),
      (n[47] = H))
    : (H = n[47]);
  let ze;
  n[48] !== B || n[49] !== V || n[50] !== H
    ? ((ze = { mutationFn: B, onSuccess: V, onError: H, retry: !1 }),
      (n[48] = B),
      (n[49] = V),
      (n[50] = H),
      (n[51] = ze))
    : (ze = n[51]);
  let { mutate: Be, data: U, status: Ve, isPending: W, isError: He } = s(ze),
    G = z?.currency_config[l]?.month?.amount,
    Ue;
  n[52] !== N?.currency || n[53] !== G || n[54] !== z?.currency_config
    ? ((Ue =
        G != null &&
        Number.isFinite(G) &&
        G >= 0 &&
        z?.currency_config.symbol_code.toUpperCase() === N?.currency.toUpperCase()),
      (n[52] = N?.currency),
      (n[53] = G),
      (n[54] = z?.currency_config),
      (n[55] = Ue))
    : (Ue = n[55]);
  let We = Ue,
    K = Oe || Ie || (!Ae && !Le && !We);
  if (!M || K || N == null || !We) {
    let e;
    if (!M) {
      let t;
      (n[56] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, I.jsx)(`p`, {
            role: `alert`,
            children: (0, I.jsx)(i, {
              id: `settings.consumerBilling.downgradeUnavailable`,
              defaultMessage: `This plan change is no longer available for your subscription`,
              description: `Shown when the personal web-managed account is no longer on the original Plus or Pro plan required for the selected retention plan change.`,
            }),
          })),
          (n[56] = t))
        : (t = n[56]),
        (e = t));
    } else if (K) {
      let t;
      (n[57] !== N || n[58] !== Me || n[59] !== Re
        ? ((t = (0, I.jsx)(ve, {
            onRetry: () => {
              (Me(), N != null && Re());
            },
          })),
          (n[57] = N),
          (n[58] = Me),
          (n[59] = Re),
          (n[60] = t))
        : (t = n[60]),
        (e = t));
    } else {
      let t;
      (n[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, I.jsx)(`p`, {
            role: `status`,
            children: (0, I.jsx)(i, {
              id: `settings.consumerBilling.downgradeLoading`,
              defaultMessage: `Checking your billing details…`,
              description: `Loading status while a retention plan change retrieves the actual subscription preview and target plan price.`,
            }),
          })),
          (n[61] = t))
        : (t = n[61]),
        (e = t));
    }
    let r;
    n[62] === x ? (r = n[63]) : ((r = { onOpenAutoFocus: x }), (n[62] = x), (n[63] = r));
    let a;
    n[64] !== C || n[65] !== p
      ? ((a = (e) => {
          e || C(p);
        }),
        (n[64] = C),
        (n[65] = p),
        (n[66] = a))
      : (a = n[66]);
    let o;
    n[67] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, I.jsx)(re, {
          children: (0, I.jsx)(te, {
            title: (0, I.jsx)(ee, {
              children: (0, I.jsx)(i, {
                id: `settings.consumerBilling.downgradeTitle`,
                defaultMessage: `Confirm plan changes`,
                description: `Title of the retention subscription plan-change confirmation while billing details are loading or unavailable.`,
              }),
            }),
          }),
        })),
        (n[67] = o))
      : (o = n[67]);
    let s;
    n[68] === e ? (s = n[69]) : ((s = (0, I.jsx)(re, { children: e })), (n[68] = e), (n[69] = s));
    let c;
    n[70] !== C || n[71] !== f || n[72] !== p
      ? ((c = () => C(f ?? p)), (n[70] = C), (n[71] = f), (n[72] = p), (n[73] = c))
      : (c = n[73]);
    let l;
    n[74] === f
      ? (l = n[75])
      : ((l =
          f == null
            ? (0, I.jsx)(i, {
                id: `planDowngradeModal.cancel`,
                defaultMessage: `Cancel`,
                description: `Plan downgrade modal cancel button`,
              })
            : (0, I.jsx)(i, {
                id: `settings.consumerBilling.downgradeBack`,
                defaultMessage: `Back`,
                description: `Returns from the plan-change confirmation to the cancellation retention offer without changing the subscription.`,
              })),
        (n[74] = f),
        (n[75] = l));
    let u;
    n[76] !== c || n[77] !== l
      ? ((u = (0, I.jsx)(re, {
          children: (0, I.jsx)(oe, {
            children: (0, I.jsx)(t, { color: `secondary`, type: `button`, onClick: c, children: l }),
          }),
        })),
        (n[76] = c),
        (n[77] = l),
        (n[78] = u))
      : (u = n[78]);
    let d;
    n[79] !== s || n[80] !== u
      ? ((d = (0, I.jsxs)(ae, { children: [o, s, u] })), (n[79] = s), (n[80] = u), (n[81] = d))
      : (d = n[81]);
    let m;
    return (
      n[82] !== r || n[83] !== a || n[84] !== d
        ? ((m = (0, I.jsx)(ie, { open: !0, contentProps: r, onOpenChange: a, children: d })),
          (n[82] = r),
          (n[83] = a),
          (n[84] = d),
          (n[85] = m))
        : (m = n[85]),
      m
    );
  }
  let Ge = Ve !== `idle` || je || K,
    q;
  n[86] !== He || n[87] !== U
    ? ((q =
        He || (U != null && U.status !== `complete` && U.status !== `pending`)
          ? (0, I.jsx)(`p`, {
              role: `alert`,
              children: (0, I.jsx)(i, {
                id: `settings.consumerBilling.downgradePaymentError`,
                defaultMessage: `{kind, select, cleanup_failed {We couldn't confirm that the pending payment update was cleared. Review your subscription in Billing before trying again.} payment_method_failed {Your payment method couldn't complete this plan change. Review your payment method in Billing before trying again.} other {We couldn't confirm this plan change. It may still be processing. Review your subscription in Billing before trying again.}}`,
                description: `Explains an unresolved retention plan change without claiming success or permitting another submission. kind identifies correlated cleanup failure, a payment-method rejection, or an unknown confirmation/request outcome.`,
                values: { kind: U?.cleanupFailed ? `cleanup_failed` : (U?.status ?? `unknown`) },
              }),
            })
          : void 0),
      (n[86] = He),
      (n[87] = U),
      (n[88] = q))
    : (q = n[88]);
  let Ke = G ?? null,
    qe = z?.currency_config.symbol_code ?? N.currency,
    Je = z?.currency_config.minor_unit_exponent ?? null,
    J;
  n[89] !== g || n[90] !== Ke || n[91] !== qe || n[92] !== Je
    ? ((J = me({ amount: Ke, currencyCode: qe, minorUnitExponent: Je, intl: g })),
      (n[89] = g),
      (n[90] = Ke),
      (n[91] = qe),
      (n[92] = Je),
      (n[93] = J))
    : (J = n[93]);
  let Y;
  n[94] !== D || n[95] !== N || n[96] !== T
    ? ((Y = { kind: `scheduled_downgrade`, updatedPlan: T, currentPlan: D, preview: N }),
      (n[94] = D),
      (n[95] = N),
      (n[96] = T),
      (n[97] = Y))
    : (Y = n[97]);
  let X;
  n[98] !== C || n[99] !== f
    ? ((X = f == null ? void 0 : () => C(f)), (n[98] = C), (n[99] = f), (n[100] = X))
    : (X = n[100]);
  let Z;
  n[101] !== C || n[102] !== p ? ((Z = () => C(p)), (n[101] = C), (n[102] = p), (n[103] = Z)) : (Z = n[103]);
  let Q;
  n[104] !== K || n[105] !== M || n[106] !== je || n[107] !== Ve || n[108] !== Be
    ? ((Q = () => {
        M && Ve === `idle` && !je && !K && Be();
      }),
      (n[104] = K),
      (n[105] = M),
      (n[106] = je),
      (n[107] = Ve),
      (n[108] = Be),
      (n[109] = Q))
    : (Q = n[109]);
  let $;
  n[110] !== W || n[111] !== C || n[112] !== p
    ? (($ = (e) => {
        !e && !W && C(p);
      }),
      (n[110] = W),
      (n[111] = C),
      (n[112] = p),
      (n[113] = $))
    : ($ = n[113]);
  let Ye;
  return (
    n[114] !== W ||
    n[115] !== x ||
    n[116] !== Ge ||
    n[117] !== q ||
    n[118] !== J ||
    n[119] !== Y ||
    n[120] !== X ||
    n[121] !== Z ||
    n[122] !== Q ||
    n[123] !== $
      ? ((Ye = (0, I.jsx)(Ee, {
          disableConfirm: Ge,
          error: q,
          isUpdating: W,
          pricingInfo: null,
          scheduledPrice: J,
          subscriptionUpdate: Y,
          onBack: X,
          onCancel: Z,
          onConfirm: Q,
          onOpenChange: $,
          onShown: x,
        })),
        (n[114] = W),
        (n[115] = x),
        (n[116] = Ge),
        (n[117] = q),
        (n[118] = J),
        (n[119] = Y),
        (n[120] = X),
        (n[121] = Z),
        (n[122] = Q),
        (n[123] = $),
        (n[124] = Ye))
      : (Ye = n[124]),
    Ye
  );
}
function P(e, t) {
  return (
    (t.cleanup ??= E({
      accountId: e,
      expectedPaymentIntentId: t.paymentIntentId,
      pendingUpdateInvoiceId: t.invoiceId,
    }).then(
      () => !0,
      () => (n.warning(`Consumer Billing pending subscription update cleanup failed`), !1),
    )),
    t.cleanup
  );
}
var ke, F, I;
function Ae() {
  return (Ae = e(() => {
    ((ke = v()),
      a(),
      f(),
      c(),
      (F = x()),
      ne(),
      g(),
      _(),
      p(),
      h(),
      C(),
      N(),
      D(),
      S(),
      y(),
      w(),
      l(),
      T(),
      A(),
      Te(),
      O(),
      _e(),
      M(),
      k(),
      j(),
      (I = b()));
  }))();
}
export { Ae as n, Oe as t };
//# sourceMappingURL=downgrade-dialog-1eb3ab965bf0.js.map
