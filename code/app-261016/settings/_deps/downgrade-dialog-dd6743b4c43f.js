import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  LNt as s,
  LO as ee,
  Mst as c,
  PBt as l,
  Qst as u,
  RFt as d,
  RO as te,
  Vrt as f,
  WO as ne,
  XOt as p,
  Y3 as re,
  Z3 as m,
  ZSt as h,
  jst as g,
  okt as ie,
  qO as ae,
  qrt as oe,
  tkt as _,
  vst as v,
  yst as se,
  zFt as y,
  zO as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ajt as b,
  Ejr as le,
  Fjt as ue,
  MT as de,
  Ojt as x,
  Pjt as fe,
  TBt as pe,
  bBt as me,
  bjr as he,
  jT as S,
  wBt as C,
  xjr as w,
} from "./app-initial-ad16eaadf81f.js";
import { n as ge } from "./pricing-889ac3693bce.js";
import { r as T, t as _e } from "./subscription-update-plan-b5de7979cb69.js";
import { n as E, r as ve } from "./queries-95931bb8c995.js";
import { n as ye, t as be } from "./query-error-2df1f6b7fd60.js";
import { n as xe, r as Se, t as D } from "./events-f53e050a3246.js";
import { t as Ce } from "./pricing-config-8656df60ca94.js";
import { t as we } from "./subscription-pricing-e06aacd9b52d.js";
import { n as O } from "./queries-fc828e9ef3ca.js";
import { t as k } from "./billing-pricing-be9f39772a6a.js";
import { n as A, r as Te } from "./stripe-client-4f7192c20a27.js";
import { n as Ee, r as De } from "./billing-state-a90fb678096b.js";
import { n as j, t as Oe } from "./subscription-update-dialog-875c31b96535.js";
async function ke({
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
function Ae(e) {
  let n = (0, je.c)(125),
    { account: r, accountId: i, targetPlan: o, onBack: s, onClose: l, onSuccess: d } = e,
    f = t(u),
    p = ie(),
    m = le(),
    h = de(),
    g = (0, N.useRef)(!1),
    v;
  n[0] === f
    ? (v = n[1])
    : ((v = () => {
        g.current ||
          ((g.current = !0),
          Se(f, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !0 } }));
      }),
      (n[0] = f),
      (n[1] = v));
  let y = v,
    b;
  n[2] === f
    ? (b = n[3])
    : ((b = (e) => {
        (g.current &&
          ((g.current = !1),
          Se(f, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !1 } })),
          e());
      }),
      (n[2] = f),
      (n[3] = b));
  let x = b,
    S = (0, N.useRef)(null),
    C = _e(o),
    [w] = (0, N.useState)(r.account.plan_type),
    T = r.account.plan_type,
    E;
  n[4] !== T || n[5] !== o
    ? ((E = pe(T) && me({ currentPlan: T, targetPlan: o }) === `downgrade`),
      (n[4] = T),
      (n[5] = o),
      (n[6] = E))
    : (E = n[6]);
  let ye = E,
    D,
    O;
  (n[7] === i
    ? ((D = n[8]), (O = n[9]))
    : ((D = () => () => {
        let e = S.current;
        e != null && M(i, e);
      }),
      (O = [i]),
      (n[7] = i),
      (n[8] = D),
      (n[9] = O)),
    (0, N.useEffect)(D, O));
  let k;
  n[10] !== r || n[11] !== i || n[12] !== T || n[13] !== w || n[14] !== ye
    ? ((k =
        r.account.account_id === i &&
        r.account.structure === `personal` &&
        T === w &&
        ye &&
        r.entitlement.has_active_subscription === !0 &&
        Ee(r) == null),
      (n[10] = r),
      (n[11] = i),
      (n[12] = T),
      (n[13] = w),
      (n[14] = ye),
      (n[15] = k))
    : (k = n[15]);
  let A = k,
    De = fe({ accountId: i, updatedPlan: C }),
    {
      data: j,
      isError: Ae,
      isPending: Me,
      isFetching: F,
      refetch: Ne,
    } = c({ ...De, queryKey: [...De.queryKey, w ?? `unknown`], enabled: A, staleTime: 0, retry: !1 }),
    Pe = j?.currency,
    I;
  n[16] !== i || n[17] !== Pe
    ? ((I = [`consumer-billing`, i, `downgrade-pricing`, Pe]), (n[16] = i), (n[17] = Pe), (n[18] = I))
    : (I = n[18]);
  let L;
  n[19] !== j || n[20] !== m
    ? ((L = async (e) => {
        let { signal: t } = e;
        return j == null
          ? null
          : we.parse(
              await Ce({
                currency: j.currency,
                isPricingEnabled: (e) => he(m, `3768341700`).get(e, !1),
                signal: t,
              }),
            );
      }),
      (n[19] = j),
      (n[20] = m),
      (n[21] = L))
    : (L = n[21]);
  let Fe = A && j != null,
    Ie;
  n[22] !== Fe || n[23] !== I || n[24] !== L
    ? ((Ie = { queryKey: I, queryFn: L, enabled: Fe, staleTime: 0, retry: !1 }),
      (n[22] = Fe),
      (n[23] = I),
      (n[24] = L),
      (n[25] = Ie))
    : (Ie = n[25]);
  let { data: R, isError: Le, isPending: Re, refetch: ze } = c(Ie),
    z;
  n[26] !== i || n[27] !== p || n[28] !== h || n[29] !== f || n[30] !== m || n[31] !== C
    ? ((z = async () => {
        let e = await ue({ accountId: i, updatedPlan: C });
        if (e.status == null) return { status: `complete`, cleanupFailed: !1 };
        if (e.status === `pending`) return { status: `pending`, cleanupFailed: !1 };
        if (e.status === `setup_required`) return { status: `payment_method_failed`, cleanupFailed: !1 };
        if (e.status === `payment_method_failed`) {
          let t = e.pending_update_payment_intent_id;
          if (t == null) return { status: `payment_method_failed`, cleanupFailed: !1 };
          let n = { paymentIntentId: t, invoiceId: e.pending_update_invoice_id ?? void 0, cleanup: null };
          return ((S.current = n), { status: `payment_method_failed`, cleanupFailed: !(await M(i, n)) });
        }
        let t = {
          paymentIntentId: e.payment_intent.id,
          invoiceId: e.pending_update_invoice_id ?? void 0,
          cleanup: null,
        };
        if (((S.current = t), !h())) return { status: `closed`, cleanupFailed: !(await M(i, t)) };
        let n;
        try {
          let { stripe: r } = await f.queryClient.fetchQuery(
            Te(i, p.locale, m.getExperiment(`4048417348`).get(`enabled`, !1)),
          );
          n = await ke({
            confirmPaymentIntent: () => r.confirmCardPayment(e.payment_intent.client_secret),
            expectedPaymentIntentId: e.payment_intent.id,
            isOpen: h,
            cleanupPendingPayment: () => M(i, t),
          });
        } catch {
          n = { status: `unknown`, cleanupFailed: !(await M(i, t)) };
        }
        return ((n.status === `complete` || n.status === `pending`) && (S.current = null), n);
      }),
      (n[26] = i),
      (n[27] = p),
      (n[28] = h),
      (n[29] = f),
      (n[30] = m),
      (n[31] = C),
      (n[32] = z))
    : (z = n[32]);
  let B;
  n[33] !== i ||
  n[34] !== T ||
  n[35] !== p ||
  n[36] !== h ||
  n[37] !== x ||
  n[38] !== l ||
  n[39] !== d ||
  n[40] !== j ||
  n[41] !== f ||
  n[42] !== o
    ? ((B = async (e) => {
        (await ve(f, i),
          h() &&
            T != null &&
            (e.status === `pending`
              ? (f
                  .get(oe)
                  .info(
                    p.formatMessage({
                      id: `settings.consumerBilling.downgradePending`,
                      defaultMessage: `Your payment is processing. We'll update your subscription once it's confirmed.`,
                      description: `Notification after a retention plan-change request is accepted but still processing; this is not a confirmed subscription change.`,
                    }),
                  ),
                x(l))
              : e.status === `complete`
                ? (Se(f, { name: `chatgpt_downgrade_plan_success`, metadata: { fromPlan: T, toPlan: o } }),
                  j?.renewal_date == null
                    ? f
                        .get(oe)
                        .success(
                          p.formatMessage(
                            {
                              id: `settings.consumerBilling.downgradeSucceededWithoutDate.numberedTiers`,
                              defaultMessage: `Your subscription has been updated. Your subscription will change to {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} other {Pro}} at the end of your current billing period`,
                              description: `Success notification after the server confirms a scheduled retention plan change without an exact renewal date. plan is the target canonical plan type: Go, Plus, Pro 100, or Pro 200. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                            },
                            { plan: o },
                          ),
                        )
                    : f
                        .get(oe)
                        .success(
                          p.formatMessage(
                            {
                              id: `settings.consumerBilling.downgradeSucceeded.numberedTiers`,
                              defaultMessage: `Your subscription has been updated. Your subscription will change to {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} other {Pro}} on {date}`,
                              description: `Success notification after the server confirms a scheduled retention plan change. plan is the target canonical plan type: Go, Plus, Pro 100, or Pro 200. date is the localized renewal date from the reviewed preview. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                            },
                            {
                              plan: o,
                              date: p.formatDate(j.renewal_date, {
                                year: `numeric`,
                                month: `long`,
                                day: `numeric`,
                              }),
                            },
                          ),
                        ),
                  x(d ?? l))
                : e.status === `payment_method_failed` &&
                  Se(f, {
                    name: `chatgpt_plan_management_modal_handle_update_error`,
                    metadata: { error_type: `payment_method_failed` },
                  })));
      }),
      (n[33] = i),
      (n[34] = T),
      (n[35] = p),
      (n[36] = h),
      (n[37] = x),
      (n[38] = l),
      (n[39] = d),
      (n[40] = j),
      (n[41] = f),
      (n[42] = o),
      (n[43] = B))
    : (B = n[43]);
  let V;
  n[44] !== i || n[45] !== h || n[46] !== f
    ? ((V = async (e) => {
        (await ve(f, i), h() && xe(f, e));
      }),
      (n[44] = i),
      (n[45] = h),
      (n[46] = f),
      (n[47] = V))
    : (V = n[47]);
  let Be;
  n[48] !== z || n[49] !== B || n[50] !== V
    ? ((Be = { mutationFn: z, onSuccess: B, onError: V, retry: !1 }),
      (n[48] = z),
      (n[49] = B),
      (n[50] = V),
      (n[51] = Be))
    : (Be = n[51]);
  let { mutate: Ve, data: H, status: He, isPending: U, isError: Ue } = se(Be),
    W = R?.currency_config[o]?.month?.amount,
    We;
  n[52] !== j?.currency || n[53] !== W || n[54] !== R?.currency_config
    ? ((We =
        W != null &&
        Number.isFinite(W) &&
        W >= 0 &&
        R?.currency_config.symbol_code.toUpperCase() === j?.currency.toUpperCase()),
      (n[52] = j?.currency),
      (n[53] = W),
      (n[54] = R?.currency_config),
      (n[55] = We))
    : (We = n[55]);
  let Ge = We,
    G = Ae || Le || (!Me && !Re && !Ge);
  if (!A || G || j == null || !Ge) {
    let e;
    if (!A) {
      let t;
      (n[56] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, P.jsx)(`p`, {
            role: `alert`,
            children: (0, P.jsx)(_, {
              id: `settings.consumerBilling.downgradeUnavailable`,
              defaultMessage: `This plan change is no longer available for your subscription`,
              description: `Shown when the personal web-managed account is no longer on the original Plus or Pro plan required for the selected retention plan change.`,
            }),
          })),
          (n[56] = t))
        : (t = n[56]),
        (e = t));
    } else if (G) {
      let t;
      (n[57] !== j || n[58] !== Ne || n[59] !== ze
        ? ((t = (0, P.jsx)(be, {
            onRetry: () => {
              (Ne(), j != null && ze());
            },
          })),
          (n[57] = j),
          (n[58] = Ne),
          (n[59] = ze),
          (n[60] = t))
        : (t = n[60]),
        (e = t));
    } else {
      let t;
      (n[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, P.jsx)(`p`, {
            role: `status`,
            children: (0, P.jsx)(_, {
              id: `settings.consumerBilling.downgradeLoading`,
              defaultMessage: `Checking your billing details…`,
              description: `Loading status while a retention plan change retrieves the actual subscription preview and target plan price.`,
            }),
          })),
          (n[61] = t))
        : (t = n[61]),
        (e = t));
    }
    let t;
    n[62] === y ? (t = n[63]) : ((t = { onOpenAutoFocus: y }), (n[62] = y), (n[63] = t));
    let r;
    n[64] !== x || n[65] !== l
      ? ((r = (e) => {
          e || x(l);
        }),
        (n[64] = x),
        (n[65] = l),
        (n[66] = r))
      : (r = n[66]);
    let i;
    n[67] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, P.jsx)(ce, {
          children: (0, P.jsx)(te, {
            title: (0, P.jsx)(ae, {
              children: (0, P.jsx)(_, {
                id: `settings.consumerBilling.downgradeTitle`,
                defaultMessage: `Confirm plan changes`,
                description: `Title of the retention subscription plan-change confirmation while billing details are loading or unavailable.`,
              }),
            }),
          }),
        })),
        (n[67] = i))
      : (i = n[67]);
    let o;
    n[68] === e ? (o = n[69]) : ((o = (0, P.jsx)(ce, { children: e })), (n[68] = e), (n[69] = o));
    let c;
    n[70] !== x || n[71] !== s || n[72] !== l
      ? ((c = () => x(s ?? l)), (n[70] = x), (n[71] = s), (n[72] = l), (n[73] = c))
      : (c = n[73]);
    let u;
    n[74] === s
      ? (u = n[75])
      : ((u =
          s == null
            ? (0, P.jsx)(_, {
                id: `planDowngradeModal.cancel`,
                defaultMessage: `Cancel`,
                description: `Plan downgrade modal cancel button`,
              })
            : (0, P.jsx)(_, {
                id: `settings.consumerBilling.downgradeBack`,
                defaultMessage: `Back`,
                description: `Returns from the plan-change confirmation to the cancellation retention offer without changing the subscription.`,
              })),
        (n[74] = s),
        (n[75] = u));
    let d;
    n[76] !== c || n[77] !== u
      ? ((d = (0, P.jsx)(ce, {
          children: (0, P.jsx)(ee, {
            children: (0, P.jsx)(re, { color: `secondary`, type: `button`, onClick: c, children: u }),
          }),
        })),
        (n[76] = c),
        (n[77] = u),
        (n[78] = d))
      : (d = n[78]);
    let f;
    n[79] !== o || n[80] !== d
      ? ((f = (0, P.jsxs)(a, { children: [i, o, d] })), (n[79] = o), (n[80] = d), (n[81] = f))
      : (f = n[81]);
    let p;
    return (
      n[82] !== t || n[83] !== r || n[84] !== f
        ? ((p = (0, P.jsx)(ne, { open: !0, contentProps: t, onOpenChange: r, children: f })),
          (n[82] = t),
          (n[83] = r),
          (n[84] = f),
          (n[85] = p))
        : (p = n[85]),
      p
    );
  }
  let Ke = He !== `idle` || F || G,
    K;
  n[86] !== Ue || n[87] !== H
    ? ((K =
        Ue || (H != null && H.status !== `complete` && H.status !== `pending`)
          ? (0, P.jsx)(`p`, {
              role: `alert`,
              children: (0, P.jsx)(_, {
                id: `settings.consumerBilling.downgradePaymentError`,
                defaultMessage: `{kind, select, cleanup_failed {We couldn't confirm that the pending payment update was cleared. Review your subscription in Billing before trying again.} payment_method_failed {Your payment method couldn't complete this plan change. Review your payment method in Billing before trying again.} other {We couldn't confirm this plan change. It may still be processing. Review your subscription in Billing before trying again.}}`,
                description: `Explains an unresolved retention plan change without claiming success or permitting another submission. kind identifies correlated cleanup failure, a payment-method rejection, or an unknown confirmation/request outcome.`,
                values: { kind: H?.cleanupFailed ? `cleanup_failed` : (H?.status ?? `unknown`) },
              }),
            })
          : void 0),
      (n[86] = Ue),
      (n[87] = H),
      (n[88] = K))
    : (K = n[88]);
  let qe = W ?? null,
    Je = R?.currency_config.symbol_code ?? j.currency,
    Ye = R?.currency_config.minor_unit_exponent ?? null,
    q;
  n[89] !== p || n[90] !== qe || n[91] !== Je || n[92] !== Ye
    ? ((q = ge({ amount: qe, currencyCode: Je, minorUnitExponent: Ye, intl: p })),
      (n[89] = p),
      (n[90] = qe),
      (n[91] = Je),
      (n[92] = Ye),
      (n[93] = q))
    : (q = n[93]);
  let J;
  n[94] !== T || n[95] !== j || n[96] !== C
    ? ((J = { kind: `scheduled_downgrade`, updatedPlan: C, currentPlan: T, preview: j }),
      (n[94] = T),
      (n[95] = j),
      (n[96] = C),
      (n[97] = J))
    : (J = n[97]);
  let Y;
  n[98] !== x || n[99] !== s
    ? ((Y = s == null ? void 0 : () => x(s)), (n[98] = x), (n[99] = s), (n[100] = Y))
    : (Y = n[100]);
  let X;
  n[101] !== x || n[102] !== l ? ((X = () => x(l)), (n[101] = x), (n[102] = l), (n[103] = X)) : (X = n[103]);
  let Z;
  n[104] !== G || n[105] !== A || n[106] !== F || n[107] !== He || n[108] !== Ve
    ? ((Z = () => {
        A && He === `idle` && !F && !G && Ve();
      }),
      (n[104] = G),
      (n[105] = A),
      (n[106] = F),
      (n[107] = He),
      (n[108] = Ve),
      (n[109] = Z))
    : (Z = n[109]);
  let Q;
  n[110] !== U || n[111] !== x || n[112] !== l
    ? ((Q = (e) => {
        !e && !U && x(l);
      }),
      (n[110] = U),
      (n[111] = x),
      (n[112] = l),
      (n[113] = Q))
    : (Q = n[113]);
  let $;
  return (
    n[114] !== U ||
    n[115] !== y ||
    n[116] !== Ke ||
    n[117] !== K ||
    n[118] !== q ||
    n[119] !== J ||
    n[120] !== Y ||
    n[121] !== X ||
    n[122] !== Z ||
    n[123] !== Q
      ? (($ = (0, P.jsx)(Oe, {
          disableConfirm: Ke,
          error: K,
          isUpdating: U,
          pricingInfo: null,
          scheduledPrice: q,
          subscriptionUpdate: J,
          onBack: Y,
          onCancel: X,
          onConfirm: Z,
          onOpenChange: Q,
          onShown: y,
        })),
        (n[114] = U),
        (n[115] = y),
        (n[116] = Ke),
        (n[117] = K),
        (n[118] = q),
        (n[119] = J),
        (n[120] = Y),
        (n[121] = X),
        (n[122] = Z),
        (n[123] = Q),
        (n[124] = $))
      : ($ = n[124]),
    $
  );
}
function M(e, t) {
  return (
    (t.cleanup ??= x({
      accountId: e,
      expectedPaymentIntentId: t.paymentIntentId,
      pendingUpdateInvoiceId: t.invoiceId,
    }).then(
      () => !0,
      () => (y.warning(`Consumer Billing pending subscription update cleanup failed`), !1),
    )),
    t.cleanup
  );
}
var je, N, P;
function Me() {
  return (Me = e(() => {
    ((je = l()),
      v(),
      g(),
      h(),
      (N = r()),
      p(),
      m(),
      o(),
      i(),
      f(),
      C(),
      j(),
      T(),
      b(),
      n(),
      w(),
      d(),
      S(),
      k(),
      De(),
      E(),
      ye(),
      A(),
      D(),
      O(),
      (P = s()));
  }))();
}
export { Me as n, Ae as t };
//# sourceMappingURL=downgrade-dialog-dd6743b4c43f.js.map
