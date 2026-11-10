import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Xt as n,
  A3t as r,
  AKt as i,
  AMt as a,
  Amn as o,
  CJt as s,
  Cpn as c,
  Dc as l,
  Dmn as u,
  FKt as d,
  Hu as f,
  Jrt as p,
  M6t as m,
  NH as h,
  O3t as g,
  Oc as _,
  Omn as v,
  Opn as ee,
  P6t as y,
  PH as b,
  Pc as x,
  Qrt as te,
  RKt as S,
  S3t as ne,
  SJt as C,
  Spn as w,
  TW as T,
  Trn as E,
  Vu as D,
  Xdt as O,
  Xrt as k,
  Xu as A,
  Yrt as re,
  Zrt as j,
  _H as M,
  a3t as ie,
  aYt as N,
  b3t as P,
  d3t as ae,
  dbt as F,
  drn as I,
  eit as L,
  gH as R,
  hmn as z,
  iYt as oe,
  iit as B,
  jG as V,
  jXt as se,
  kG as H,
  kKt as U,
  kMt as ce,
  kXt as le,
  kc as ue,
  kmn as W,
  krn as de,
  lYt as fe,
  llt as G,
  nZt as pe,
  o3t as K,
  qu as q,
  rit as me,
  rrn as he,
  s3t as ge,
  tit as _e,
  uYt as ve,
  ubt as ye,
  wW as be,
  wc as xe,
  xpn as Se,
} from "./app-initial-f094ef01c64d.js";
import { n as Ce, r as we } from "./pricing-a70e18580c5f.js";
import { n as Te, t as Ee } from "./subscription-update-dialog-47ff984f1157.js";
import {
  c as De,
  d as Oe,
  i as ke,
  l as Ae,
  o as je,
  p as Me,
  s as Ne,
  t as Pe,
} from "./queries-d729b9d20ea6.js";
import { i as Fe, n as Ie, r as Le, t as Re } from "./format-amount-47aa133b47a5.js";
import { n as ze, r as Be } from "./stripe-client-1366773f0ed5.js";
import { n as Ve, r as He } from "./billing-state-ce45584c1590.js";
import { n as Ue, r as We, t as Ge } from "./events-7d2329d3e619.js";
async function Ke({
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
var qe = e(() => {});
function Je(e) {
  let t = (0, Xe.c)(113),
    { account: n, accountId: i, targetPlan: a, onBack: o, onClose: s } = e,
    l = r(ie),
    u = ee(),
    d = ve(),
    f = b(),
    m = (0, Ze.useRef)(!1),
    h;
  t[0] === l
    ? (h = t[1])
    : ((h = () => {
        m.current ||
          ((m.current = !0),
          We(l, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !0 } }));
      }),
      (t[0] = l),
      (t[1] = h));
  let g = h,
    v;
  t[2] === l
    ? (v = t[3])
    : ((v = (e) => {
        (m.current &&
          ((m.current = !1),
          We(l, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !1 } })),
          e());
      }),
      (t[2] = l),
      (t[3] = v));
  let y = v,
    x = (0, Ze.useRef)(null),
    te = a === U.GO ? `chatgptgoplan` : `chatgptprolite`,
    S = a === U.GO ? `plus` : `pro`,
    C,
    w;
  (t[4] === i
    ? ((C = t[5]), (w = t[6]))
    : ((C = () => () => {
        let e = x.current;
        e != null && Ye(i, e);
      }),
      (w = [i]),
      (t[4] = i),
      (t[5] = C),
      (t[6] = w)),
    (0, Ze.useEffect)(C, w));
  let T;
  t[7] !== n || t[8] !== i || t[9] !== S
    ? ((T =
        n.account.account_id === i &&
        n.account.structure === `personal` &&
        n.account.plan_type === S &&
        n.entitlement.has_active_subscription === !0 &&
        Ve(n) == null),
      (t[7] = n),
      (t[8] = i),
      (t[9] = S),
      (t[10] = T))
    : (T = t[10]);
  let E = T,
    D;
  t[11] !== i || t[12] !== te
    ? ((D = _({ accountId: i, updatedPlan: te })), (t[11] = i), (t[12] = te), (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] !== E || t[15] !== D
    ? ((O = { ...D, enabled: E, staleTime: 0, retry: !1 }), (t[14] = E), (t[15] = D), (t[16] = O))
    : (O = t[16]);
  let { data: A, isError: M, isPending: N, isFetching: P, refetch: F } = ne(O),
    I = A?.currency,
    L;
  t[17] !== i || t[18] !== I
    ? ((L = [`consumer-billing`, i, `downgrade-pricing`, I]), (t[17] = i), (t[18] = I), (t[19] = L))
    : (L = t[19]);
  let R;
  t[20] !== A || t[21] !== d
    ? ((R = async (e) => {
        let { signal: t } = e;
        return A == null
          ? null
          : Pe.parse(
              await Ne({
                currency: A.currency,
                isPricingEnabled: (e) => oe(d, `3768341700`).get(e, !1),
                signal: t,
              }),
            );
      }),
      (t[20] = A),
      (t[21] = d),
      (t[22] = R))
    : (R = t[22]);
  let z = E && A != null,
    B;
  t[23] !== R || t[24] !== z || t[25] !== L
    ? ((B = { queryKey: L, queryFn: R, enabled: z, staleTime: 0, retry: !1 }),
      (t[23] = R),
      (t[24] = z),
      (t[25] = L),
      (t[26] = B))
    : (B = t[26]);
  let { data: V, isError: H, isPending: le, refetch: W } = ne(B),
    de;
  t[27] !== i || t[28] !== f || t[29] !== l || t[30] !== te
    ? ((de = async () => {
        let e = await ue({ accountId: i, updatedPlan: te });
        if (e.status == null) return { status: `complete`, cleanupFailed: !1 };
        if (e.status === `pending`) return { status: `pending`, cleanupFailed: !1 };
        if (e.status === `setup_required`)
          return { status: `payment_method_failed`, cleanupFailed: !1 };
        if (e.status === `payment_method_failed`) {
          let t = e.pending_update_payment_intent_id;
          if (t == null) return { status: `payment_method_failed`, cleanupFailed: !1 };
          let n = {
            paymentIntentId: t,
            invoiceId: e.pending_update_invoice_id ?? void 0,
            cleanup: null,
          };
          return (
            (x.current = n), { status: `payment_method_failed`, cleanupFailed: !(await Ye(i, n)) }
          );
        }
        let t = {
          paymentIntentId: e.payment_intent.id,
          invoiceId: e.pending_update_invoice_id ?? void 0,
          cleanup: null,
        };
        if (((x.current = t), !f())) return { status: `closed`, cleanupFailed: !(await Ye(i, t)) };
        let n;
        try {
          let { stripe: r } = await l.queryClient.fetchQuery(Be(i));
          n = await Ke({
            confirmPaymentIntent: () => r.confirmCardPayment(e.payment_intent.client_secret),
            expectedPaymentIntentId: e.payment_intent.id,
            isOpen: f,
            cleanupPendingPayment: () => Ye(i, t),
          });
        } catch {
          n = { status: `unknown`, cleanupFailed: !(await Ye(i, t)) };
        }
        return ((n.status === `complete` || n.status === `pending`) && (x.current = null), n);
      }),
      (t[27] = i),
      (t[28] = f),
      (t[29] = l),
      (t[30] = te),
      (t[31] = de))
    : (de = t[31]);
  let fe;
  t[32] !== i ||
  t[33] !== S ||
  t[34] !== u ||
  t[35] !== f ||
  t[36] !== y ||
  t[37] !== s ||
  t[38] !== A ||
  t[39] !== l ||
  t[40] !== a
    ? ((fe = async (e) => {
        (await Me(l, i),
          f() &&
            (e.status === `pending`
              ? (l.get(se).info(
                  u.formatMessage({
                    id: `settings.consumerBilling.downgradePending`,
                    defaultMessage: `Your payment is processing. We'll update your subscription once it's confirmed.`,
                    description: `Notification after a retention plan-change request is accepted but still processing; this is not a confirmed subscription change.`,
                  }),
                ),
                y(s))
              : e.status === `complete`
                ? (We(l, {
                    name: `chatgpt_downgrade_plan_success`,
                    metadata: { fromPlan: S, toPlan: a },
                  }),
                  A?.renewal_date == null
                    ? l.get(se).success(
                        u.formatMessage(
                          {
                            id: `settings.consumerBilling.downgradeSucceededWithoutDate`,
                            defaultMessage: `Your subscription has been updated. Your subscription will change to {plan, select, go {Go} other {Pro 5x}} at the end of your current billing period.`,
                            description: `Success notification after the server confirms a scheduled retention plan change without an exact renewal date. plan selects the new Go or Pro 5x subscription.`,
                          },
                          { plan: a },
                        ),
                      )
                    : l.get(se).success(
                        u.formatMessage(
                          {
                            id: `settings.consumerBilling.downgradeSucceeded`,
                            defaultMessage: `Your subscription has been updated. Your subscription will change to {plan, select, go {Go} other {Pro 5x}} on {date}.`,
                            description: `Success notification after the server confirms a scheduled retention plan change. plan selects Go or Pro 5x; date is the actual localized renewal date from the reviewed preview.`,
                          },
                          {
                            plan: a,
                            date: u.formatDate(A.renewal_date, {
                              year: `numeric`,
                              month: `long`,
                              day: `numeric`,
                            }),
                          },
                        ),
                      ),
                  y(s))
                : e.status === `payment_method_failed` &&
                  We(l, {
                    name: `chatgpt_plan_management_modal_handle_update_error`,
                    metadata: { error_type: `payment_method_failed` },
                  })));
      }),
      (t[32] = i),
      (t[33] = S),
      (t[34] = u),
      (t[35] = f),
      (t[36] = y),
      (t[37] = s),
      (t[38] = A),
      (t[39] = l),
      (t[40] = a),
      (t[41] = fe))
    : (fe = t[41]);
  let G;
  t[42] !== i || t[43] !== f || t[44] !== l
    ? ((G = async (e) => {
        (await Me(l, i), f() && Ue(l, e));
      }),
      (t[42] = i),
      (t[43] = f),
      (t[44] = l),
      (t[45] = G))
    : (G = t[45]);
  let pe;
  t[46] !== de || t[47] !== fe || t[48] !== G
    ? ((pe = { mutationFn: de, onSuccess: fe, onError: G, retry: !1 }),
      (t[46] = de),
      (t[47] = fe),
      (t[48] = G),
      (t[49] = pe))
    : (pe = t[49]);
  let { mutate: K, data: q, status: he, isPending: ge, isError: ye } = ae(pe),
    be = V?.currency_config[a]?.month?.amount,
    xe =
      be != null &&
      Number.isFinite(be) &&
      be >= 0 &&
      V?.currency_config.symbol_code.toUpperCase() === A?.currency.toUpperCase(),
    Se = M || H || (!N && !le && !xe);
  if (!E || A == null || !xe) {
    let e;
    if (!E) {
      let n;
      (t[50] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Qe.jsx)(`p`, {
            role: `alert`,
            children: (0, Qe.jsx)(c, {
              id: `settings.consumerBilling.downgradeUnavailable`,
              defaultMessage: `This plan change is no longer available for your subscription`,
              description: `Shown when the personal web-managed account is no longer on the original Plus or Pro plan required for the selected retention plan change.`,
            }),
          })),
          (t[50] = n))
        : (n = t[50]),
        (e = n));
    } else if (Se) {
      let n;
      (t[51] !== A || t[52] !== F || t[53] !== W
        ? ((n = (0, Qe.jsx)(Le, {
            onRetry: () => {
              (F(), A != null && W());
            },
          })),
          (t[51] = A),
          (t[52] = F),
          (t[53] = W),
          (t[54] = n))
        : (n = t[54]),
        (e = n));
    } else {
      let n;
      (t[55] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Qe.jsx)(`p`, {
            role: `status`,
            children: (0, Qe.jsx)(c, {
              id: `settings.consumerBilling.downgradeLoading`,
              defaultMessage: `Checking your billing details…`,
              description: `Loading status while a retention plan change retrieves the actual subscription preview and target plan price.`,
            }),
          })),
          (t[55] = n))
        : (n = t[55]),
        (e = n));
    }
    let n;
    t[56] === g ? (n = t[57]) : ((n = { onOpenAutoFocus: g }), (t[56] = g), (t[57] = n));
    let r;
    t[58] !== y || t[59] !== s
      ? ((r = (e) => {
          e || y(s);
        }),
        (t[58] = y),
        (t[59] = s),
        (t[60] = r))
      : (r = t[60]);
    let i;
    t[61] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Qe.jsx)(j, {
          children: (0, Qe.jsx)(k, {
            title: (0, Qe.jsx)(me, {
              children: (0, Qe.jsx)(c, {
                id: `settings.consumerBilling.downgradeTitle`,
                defaultMessage: `Confirm plan changes`,
                description: `Title of the retention subscription plan-change confirmation while billing details are loading or unavailable.`,
              }),
            }),
          }),
        })),
        (t[61] = i))
      : (i = t[61]);
    let a;
    t[62] === e ? (a = t[63]) : ((a = (0, Qe.jsx)(j, { children: e })), (t[62] = e), (t[63] = a));
    let l;
    t[64] !== y || t[65] !== o
      ? ((l = () => y(o)), (t[64] = y), (t[65] = o), (t[66] = l))
      : (l = t[66]);
    let u;
    t[67] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Qe.jsx)(c, {
          id: `settings.consumerBilling.downgradeBack`,
          defaultMessage: `Back`,
          description: `Returns from the plan-change confirmation to the cancellation retention offer without changing the subscription.`,
        })),
        (t[67] = u))
      : (u = t[67]);
    let d;
    t[68] === l
      ? (d = t[69])
      : ((d = (0, Qe.jsx)(j, {
          children: (0, Qe.jsx)(re, {
            children: (0, Qe.jsx)(ce, {
              color: `secondary`,
              type: `button`,
              onClick: l,
              children: u,
            }),
          }),
        })),
        (t[68] = l),
        (t[69] = d));
    let f;
    t[70] !== a || t[71] !== d
      ? ((f = (0, Qe.jsxs)(p, { children: [i, a, d] })), (t[70] = a), (t[71] = d), (t[72] = f))
      : (f = t[72]);
    let m;
    return (
      t[73] !== n || t[74] !== r || t[75] !== f
        ? ((m = (0, Qe.jsx)(_e, { open: !0, contentProps: n, onOpenChange: r, children: f })),
          (t[73] = n),
          (t[74] = r),
          (t[75] = f),
          (t[76] = m))
        : (m = t[76]),
      m
    );
  }
  let we = he !== `idle` || P,
    Te;
  t[77] !== ye || t[78] !== q
    ? ((Te =
        ye || (q != null && q.status !== `complete` && q.status !== `pending`)
          ? (0, Qe.jsx)(`p`, {
              role: `alert`,
              children: (0, Qe.jsx)(c, {
                id: `settings.consumerBilling.downgradePaymentError`,
                defaultMessage: `{kind, select, cleanup_failed {We couldn't confirm that the pending payment update was cleared. Review your subscription in Billing before trying again.} payment_method_failed {Your payment method couldn't complete this plan change. Review your payment method in Billing before trying again.} other {We couldn't confirm this plan change. It may still be processing. Review your subscription in Billing before trying again.}}`,
                description: `Explains an unresolved retention plan change without claiming success or permitting another submission. kind identifies correlated cleanup failure, a payment-method rejection, or an unknown confirmation/request outcome.`,
                values: { kind: q?.cleanupFailed ? `cleanup_failed` : (q?.status ?? `unknown`) },
              }),
            })
          : void 0),
      (t[77] = ye),
      (t[78] = q),
      (t[79] = Te))
    : (Te = t[79]);
  let De = be ?? null,
    Oe = V?.currency_config.symbol_code ?? A.currency,
    ke = V?.currency_config.minor_unit_exponent ?? null,
    Ae;
  t[80] !== u || t[81] !== De || t[82] !== Oe || t[83] !== ke
    ? ((Ae = Ce({ amount: De, currencyCode: Oe, minorUnitExponent: ke, intl: u })),
      (t[80] = u),
      (t[81] = De),
      (t[82] = Oe),
      (t[83] = ke),
      (t[84] = Ae))
    : (Ae = t[84]);
  let je;
  t[85] !== A || t[86] !== te
    ? ((je = { kind: `scheduled_downgrade`, updatedPlan: te, preview: A }),
      (t[85] = A),
      (t[86] = te),
      (t[87] = je))
    : (je = t[87]);
  let Fe;
  t[88] !== y || t[89] !== o
    ? ((Fe = () => y(o)), (t[88] = y), (t[89] = o), (t[90] = Fe))
    : (Fe = t[90]);
  let Ie;
  t[91] !== y || t[92] !== s
    ? ((Ie = () => y(s)), (t[91] = y), (t[92] = s), (t[93] = Ie))
    : (Ie = t[93]);
  let Re;
  t[94] !== P || t[95] !== he || t[96] !== K
    ? ((Re = () => {
        he === `idle` && !P && K();
      }),
      (t[94] = P),
      (t[95] = he),
      (t[96] = K),
      (t[97] = Re))
    : (Re = t[97]);
  let ze;
  t[98] !== ge || t[99] !== y || t[100] !== s
    ? ((ze = (e) => {
        !e && !ge && y(s);
      }),
      (t[98] = ge),
      (t[99] = y),
      (t[100] = s),
      (t[101] = ze))
    : (ze = t[101]);
  let He;
  return (
    t[102] !== ge ||
    t[103] !== g ||
    t[104] !== we ||
    t[105] !== Te ||
    t[106] !== Ae ||
    t[107] !== je ||
    t[108] !== Fe ||
    t[109] !== Ie ||
    t[110] !== Re ||
    t[111] !== ze
      ? ((He = (0, Qe.jsx)(Ee, {
          disableConfirm: we,
          error: Te,
          isUpdating: ge,
          pricingInfo: null,
          scheduledPrice: Ae,
          subscriptionUpdate: je,
          onBack: Fe,
          onCancel: Ie,
          onConfirm: Re,
          onOpenChange: ze,
          onShown: g,
        })),
        (t[102] = ge),
        (t[103] = g),
        (t[104] = we),
        (t[105] = Te),
        (t[106] = Ae),
        (t[107] = je),
        (t[108] = Fe),
        (t[109] = Ie),
        (t[110] = Re),
        (t[111] = ze),
        (t[112] = He))
      : (He = t[112]),
    He
  );
}
function Ye(e, t) {
  return (
    (t.cleanup ??= xe({
      accountId: e,
      expectedPaymentIntentId: t.paymentIntentId,
      pendingUpdateInvoiceId: t.invoiceId,
    }).then(
      () => !0,
      () => (v.warning(`Consumer Billing pending subscription update cleanup failed`), !1),
    )),
    t.cleanup
  );
}
var Xe,
  Ze,
  Qe,
  $e = e(() => {
    ((Xe = W()),
      ge(),
      g(),
      (Ze = t(o(), 1)),
      w(),
      a(),
      B(),
      L(),
      le(),
      we(),
      Te(),
      l(),
      K(),
      N(),
      u(),
      i(),
      h(),
      De(),
      He(),
      Oe(),
      Fe(),
      ze(),
      qe(),
      Ge(),
      ke(),
      (Qe = z()));
  });
function et(e) {
  let t = (0, nt.c)(19),
    { title: n, children: r, busy: i, onClose: a, onShown: o, onSubmit: s } = e,
    c = i !== void 0 && i,
    l = (0, rt.useRef)(!1),
    u = !c,
    d;
  t[0] === o
    ? (d = t[1])
    : ((d = {
        onOpenAutoFocus: () => {
          l.current || ((l.current = !0), o?.());
        },
      }),
      (t[0] = o),
      (t[1] = d));
  let f;
  t[2] !== c || t[3] !== a
    ? ((f = (e) => {
        !e && !c && a();
      }),
      (t[2] = c),
      (t[3] = a),
      (t[4] = f))
    : (f = t[4]);
  let m;
  t[5] !== c || t[6] !== s
    ? ((m = (e) => {
        (e.preventDefault(), c || s?.());
      }),
      (t[5] = c),
      (t[6] = s),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] === n
    ? (h = t[9])
    : ((h = (0, it.jsx)(j, {
        children: (0, it.jsx)(k, {
          titleClassName: `break-words pe-8`,
          title: (0, it.jsx)(me, { children: n }),
        }),
      })),
      (t[8] = n),
      (t[9] = h));
  let g;
  t[10] !== r || t[11] !== m || t[12] !== h
    ? ((g = (0, it.jsxs)(p, {
        as: `form`,
        className: `select-none`,
        onSubmit: m,
        children: [h, r],
      })),
      (t[10] = r),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== u || t[15] !== d || t[16] !== f || t[17] !== g
      ? ((_ = (0, it.jsx)(_e, {
          open: !0,
          showDialogClose: u,
          contentProps: d,
          onOpenChange: f,
          children: g,
        })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function tt() {
  let e = (0, nt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, it.jsx)(`p`, {
          role: `status`,
          children: (0, it.jsx)(c, {
            id: `settings.consumerBilling.cancellation.loading`,
            defaultMessage: `Checking your subscription…`,
            description: `Loading status while the cancellation flow retrieves current billing details or available retention offers`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var nt,
  rt,
  it,
  at = e(() => {
    ((nt = W()), (rt = t(o(), 1)), w(), B(), L(), (it = z()));
  });
function ot(e) {
  let t = (0, st.c)(3),
    { result: n } = e;
  if (n === `success`) return null;
  if (n === `pending`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, ct.jsx)(`p`, {
            role: `status`,
            children: (0, ct.jsx)(c, {
              id: `settings.consumerBilling.cancellation.promotionPending`,
              defaultMessage: `Your payment is processing. Review your subscription in Billing before trying again.`,
              description: `An offer claim was accepted for processing but has not yet completed; another submission is disabled`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r;
  return (
    t[1] === n
      ? (r = t[2])
      : ((r = (0, ct.jsx)(`p`, {
          role: `alert`,
          children: (0, ct.jsx)(c, {
            id: `settings.consumerBilling.cancellation.promotionUnresolved`,
            defaultMessage: `{kind, select, card_declined {Payment error. Your card may be invalid or authentication may be needed.} cleanup_failed {We couldn't confirm that the pending payment update was cleared. Review your subscription in Billing before trying again.} requires_action {This offer needs payment verification, which isn't supported in this dialog. Review your subscription in Billing before trying again.} setup_required {This offer needs a payment method update that isn't supported in this dialog. Review your subscription in Billing before trying again.} payment_method_failed {Your payment method couldn't complete this offer. Review your payment method in Billing before trying again.} other {We couldn't confirm whether this offer was applied. Review your subscription in Billing before trying again.}}`,
            description: `An unresolved retention offer cannot be resubmitted. kind distinguishes a declined card, correlated cleanup failure, unsupported verification/setup, a failed payment method, and an uncertain request outcome.`,
            values: { kind: n },
          }),
        })),
        (t[1] = n),
        (t[2] = r)),
    r
  );
}
var st,
  ct,
  lt = e(() => {
    ((st = W()), w(), (ct = z()));
  });
function ut(e, t, n) {
  if (e.entitlement.discount?.promo_campaign_id === `students-2026-four-month-free`)
    return { page: `confirm`, skipPromotion: !0 };
  if (ft(e)) return { page: `go_trial` };
  if (e.account.plan_type === `pro` && n.checkGate(`2238071649`)) return { page: `pro_offer` };
  if (e.account.plan_type === `plus` && n.checkGate(`3600660324`)) {
    let e = St.parse(n.getLayer(`2866267857`).get(`variant`, `control`));
    if (e !== `control` && e !== `premium_retention_visual_refresh`)
      return { page: e.startsWith(`things_you_lose`) ? `things_you_lose` : `survey`, variant: e };
  }
  return dt(e, t, n);
}
function dt(e, t, n) {
  return e.account.plan_type === `plus` &&
    n.getLayer(`2090377145`).get(`show_plus_offer_else_go`, !1)
    ? { page: ht(t) ? `plus_offer` : `go_offer` }
    : { page: `confirm`, skipPromotion: !1 };
}
function ft(e, t = Date.now()) {
  let n = e.entitlement,
    r = n.trial;
  return (
    e.account.plan_type === `plus` &&
    n.subscription_plan === `chatgptplusplan` &&
    n.billing_period === `monthly` &&
    e.last_active_subscription.will_renew === !0 &&
    r?.is_trialing === !0 &&
    r.promo_campaign_id === `plus-1-month-free-for-go` &&
    r.trial_ends_at != null &&
    Date.parse(r.trial_ends_at) >= t
  );
}
function pt(e) {
  let t = e.entitlement.discount;
  return (
    e.entitlement.is_delinquent === !0 ||
    (t?.cancellation_policy === `immediate` && !t.discount_start_in_num_periods) ||
    ft(e)
  );
}
function mt(e) {
  let t = e.account.plan_type;
  return t === `pro` || t === `prolite`
    ? `Pro`
    : t === `go`
      ? `Go`
      : t === `plus`
        ? `Plus`
        : `ChatGPT`;
}
function ht(e) {
  return (
    e != null &&
    `percentage` in e.discount &&
    e.discount.percentage === 100 &&
    (e.duration?.num_periods ?? 1) === 1
  );
}
function gt(e, t, n, r) {
  if (e === `survey` && n === `too_expensive`)
    return {
      entry: e,
      variant: t,
      reason: n,
      route: `go_lower_tier`,
      promoEligible: `not_checked`,
    };
  let i = ht(r);
  return {
    entry: e,
    variant: t,
    reason: n,
    route: i ? `plus_trial` : `go_lower_tier`,
    promoEligible: i ? `true` : `false`,
  };
}
function _t(e, t, n, r) {
  let i = r?.trim().length,
    a = `empty`;
  return (
    i != null && i > 0 && (a = i <= 50 ? `1_50` : i <= 200 ? `51_200` : `201_plus`),
    {
      source_flow: `cancel_subscription_plus_downgrade_survey`,
      current_plan_type: e.account.plan_type ?? `unknown`,
      experiment_variant: t,
      ...(n?.reason == null ? {} : { survey_reason: n.reason }),
      ...(n == null ? {} : { route_decision: n.route, promo_eligible: n.promoEligible }),
      ...(i == null ? {} : { freeform_present: String(i > 0), freeform_length_bucket: a }),
    }
  );
}
function vt(e, t, n = Date.now()) {
  try {
    let r = Number(t.getItem(Ct + e));
    return !Number.isFinite(r) || r <= 0
      ? (t.removeItem(Ct + e), `none`)
      : n - r >= wt
        ? `expired`
        : `active`;
  } catch {
    return `unavailable`;
  }
}
function yt(e, t, n = Date.now()) {
  try {
    return (t.setItem(Ct + e, String(n)), !0);
  } catch {
    return !1;
  }
}
function bt(e, t) {
  t.removeItem(Ct + e);
}
function xt(e) {
  if (
    e?.status !== `ready` ||
    !Array.isArray(e.available_windows) ||
    !e.available_windows.includes(7) ||
    !Number.isSafeInteger(e.total_feature_uses_7d) ||
    e.total_feature_uses_7d <= 0
  )
    return [];
  let t = e.available_windows.includes(28),
    n = e.features
      .flatMap((e, n) => {
        if (
          ![
            `advanced_reasoning`,
            `agent`,
            `image_generation`,
            `file_uploads`,
            `deep_research`,
            `data_analysis`,
          ].includes(e.feature)
        )
          return [];
        let r = e.feature === `agent` ? `unavailable` : `limited`;
        return e.free_access !== r ||
          !Number.isSafeInteger(e.uses_7d) ||
          e.uses_7d < 0 ||
          (t && (e.uses_28d == null || !Number.isSafeInteger(e.uses_28d) || e.uses_7d > e.uses_28d))
          ? []
          : [{ feature: e, index: n }];
      })
      .sort(
        (e, t) =>
          Number(e.feature.free_access === `limited`) -
            Number(t.feature.free_access === `limited`) ||
          t.feature.uses_7d - e.feature.uses_7d ||
          e.index - t.index,
      )
      .map(({ feature: e }) => ({ feature: e.feature, count: e.uses_7d > 0 ? e.uses_7d : void 0 })),
    r = e.standard_free_limit_exceeded_action_count_28d,
    i = (
      t && r != null && Number.isSafeInteger(r) && r > 0
        ? [{ feature: `standard_free_limit_exceeded_actions`, count: r }, ...n]
        : n
    ).slice(0, 4);
  return i.some((e) => e.feature !== `standard_free_limit_exceeded_actions` && e.count != null)
    ? i
    : [];
}
var St,
  Ct,
  wt,
  Tt = e(() => {
    (he(),
      (St = I([
        `control`,
        `survey`,
        `things_you_lose`,
        `survey_then_control`,
        `things_you_lose_then_control`,
        `premium_retention_visual_refresh`,
      ]).catch(`control`)),
      (Ct = `go-origin-plus-trial-return-request:`),
      (wt = 300 * 1e3));
  });
function Et(e) {
  return P({
    queryKey: [`consumer-billing`, e, `cancellation-promotion`],
    queryFn: async ({ signal: t }) => {
      let n = await d.safeGet(`/promotions/cp`, {
        parameters: { query: { account_id: e } },
        signal: t,
      });
      return n.metadata?.duration?.period === `month` ? n.metadata : null;
    },
    staleTime: 0,
    retry: !1,
  });
}
function Dt(e, t, n) {
  return P({
    queryKey: [`consumer-billing`, e, `cancellation-pricing`, t],
    queryFn: async ({ signal: e }) => {
      let r = await Ne({
          currency: t ?? void 0,
          isPricingEnabled: (e) => n.getLayer(`3768341700`).get(e, !1),
          signal: e,
        }),
        i = Pe.safeParse(r);
      return i.success &&
        (t == null || i.data.currency_config.symbol_code.toUpperCase() === t.toUpperCase())
        ? i.data
        : null;
    },
    staleTime: 0,
    retry: !1,
  });
}
function Ot(e, t) {
  return P({
    queryKey: [`consumer-billing`, e, `cancellation-promotion-preview`, t.campaign_id],
    queryFn: ({ signal: n }) =>
      d.safeGet(`/subscriptions/update/preview`, {
        parameters: { query: { account_id: e, updated_promo_id: t.campaign_id } },
        signal: n,
      }),
    staleTime: 0,
    retry: !1,
  });
}
function kt(e) {
  return P({
    queryKey: [`consumer-billing`, e, `premium-usage-summary`, `v2`],
    queryFn: ({ signal: e }) => d.safeGet(`/premium-usage/summary/v2`, { signal: e }),
    staleTime: 0,
    retry: !1,
    refetchOnMount: `always`,
  });
}
async function At(e, t) {
  try {
    let n = await d.safePost(`/subscriptions/update`, {
      requestBody: { account_id: e, updated_promo_id: t.campaign_id },
    });
    if (n.status == null) return `success`;
    let r, i;
    if (
      (n.status === `requires_action`
        ? ((r = n.payment_intent.id), (i = n.pending_update_invoice_id ?? void 0))
        : n.status === `payment_method_failed` &&
          ((r = n.pending_update_payment_intent_id ?? void 0),
          (i = n.pending_update_invoice_id ?? void 0)),
      r != null)
    )
      try {
        await xe({ accountId: e, expectedPaymentIntentId: r, pendingUpdateInvoiceId: i });
      } catch {
        return `cleanup_failed`;
      }
    return n.status;
  } catch (e) {
    let t = Nt.safeParse(e);
    if (e instanceof C)
      try {
        t = Nt.safeParse(JSON.parse(e.message));
      } catch {
        return `unknown`;
      }
    return t.success && t.data.detail?.error_type === `card_declined` ? `card_declined` : `unknown`;
  }
}
async function jt(e, t) {
  let n = Ae(t);
  await e.cancelQueries({ queryKey: n.queryKey, exact: !0 });
  let r = (await e.fetchQuery(n)).accounts[t];
  return r?.account.account_id === t ? r : void 0;
}
async function Mt({ accountId: e, account: t, returnToGo: n, queryClient: r, storage: i }) {
  let a = ft(t);
  if (n) {
    if (!a || i == null) return `storage_unavailable`;
    let t = vt(e, i);
    if (t === `unavailable`) return `storage_unavailable`;
    if (t !== `none`)
      try {
        let n = await jt(r, e);
        return n == null
          ? `reload`
          : n.account.plan_type === `go`
            ? `returned_to_go`
            : t === `expired`
              ? (bt(e, i), ft(n) ? `return_ready` : `state_changed`)
              : `return_pending`;
      } catch {
        return `reload`;
      }
    if (!yt(e, i)) return `storage_unavailable`;
  }
  try {
    if (
      (await d.safePost(`/subscriptions/cancel`, {
        requestBody: { account_id: e, cancellation_outcome: a && !n ? `deactivate` : void 0 },
      }),
      !a)
    )
      return `canceled`;
  } catch {
    if (!a) return `failed`;
  }
  try {
    let t = await jt(r, e);
    return t == null
      ? `reload`
      : n && t.account.plan_type === `go`
        ? `returned_to_go`
        : !n && t.account.plan_type === `free`
          ? `deactivated`
          : ft(t)
            ? `failed`
            : `state_changed`;
  } catch {
    return `reload`;
  }
}
var Nt,
  Pt = e(() => {
    (ge(),
      he(),
      l(),
      S(),
      s(),
      De(),
      ke(),
      Oe(),
      Tt(),
      (Nt = E({ detail: E({ error_type: de().optional() }).optional() })));
  });
function Ft(e) {
  let t = (0, Bt.c)(100),
    {
      account: n,
      accountId: r,
      promotion: i,
      busy: a,
      disabled: o,
      claimError: s,
      cancellationError: l,
      onCancel: u,
      onClaim: d,
      onBack: f,
      onClose: p,
      onShown: m,
    } = e,
    h = ee(),
    { client: g } = fe(),
    _;
  t[0] === r ? (_ = t[1]) : ((_ = je(r)), (t[0] = r), (t[1] = _));
  let { data: v } = ne(_),
    y;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { enabled: !0 }), (t[2] = y))
    : (y = t[2]);
  let { data: b, isPending: te, isError: S } = x(y),
    C;
  t[3] !== n.entitlement.billing_currency || t[4] !== r || t[5] !== g
    ? ((C = Dt(r, n.entitlement.billing_currency, g)),
      (t[3] = n.entitlement.billing_currency),
      (t[4] = r),
      (t[5] = g),
      (t[6] = C))
    : (C = t[6]);
  let w = i != null && `percentage` in i.discount && i.discount.percentage !== 100,
    T;
  t[7] !== C || t[8] !== w
    ? ((T = { ...C, enabled: w, staleTime: 0 }), (t[7] = C), (t[8] = w), (t[9] = T))
    : (T = t[9]);
  let { data: E } = ne(T),
    D;
  t[10] === n ? (D = t[11]) : ((D = pt(n)), (t[10] = n), (t[11] = D));
  let O = D,
    k;
  t[12] === n ? (k = t[13]) : ((k = ft(n)), (t[12] = n), (t[13] = k));
  let A = k,
    M = n.entitlement.discount,
    ie = n.entitlement.expires_at ?? v?.active_until,
    N;
  t[14] !== ie || t[15] !== h
    ? ((N =
        ie != null && Number.isFinite(Date.parse(ie))
          ? h.formatDate(ie, { year: `numeric`, month: `short`, day: `numeric` })
          : null),
      (t[14] = ie),
      (t[15] = h),
      (t[16] = N))
    : (N = t[16]);
  let P = N,
    ae;
  t[17] === n ? (ae = t[18]) : ((ae = mt(n)), (t[17] = n), (t[18] = ae));
  let F = ae,
    I = i?.duration?.num_periods ?? 1,
    L = i != null && `percentage` in i.discount && i.discount.percentage === 100,
    R;
  t[19] !== g || t[20] !== h
    ? ((R = (g.getContext().user?.country ?? new Intl.Locale(h.locale).region)
        ?.trim()
        .toUpperCase()),
      (t[19] = g),
      (t[20] = h),
      (t[21] = R))
    : (R = t[21]);
  let z = R,
    oe = !a && !o && !te,
    B;
  if (i != null) {
    let e;
    (t[22] !== F || t[23] !== i
      ? ((e = (0, J.jsx)(zt, { promotion: i, planName: F })), (t[22] = F), (t[23] = i), (t[24] = e))
      : (e = t[24]),
      (B = e));
  } else if (A) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(c, {
          id: `cancelSubscriptionModal.plusFreeForGoOffer.title`,
          defaultMessage: `Cancel Plus and return to Free?`,
          description: `Confirms immediately ending a Go-origin Plus trial and returning to Free instead of restoring Go`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (B = e));
  } else if (M != null && O) {
    let e;
    (t[26] === F
      ? (e = t[27])
      : ((e = (0, J.jsx)(c, {
          id: `cancelSubscriptionModal.hasDiscount.titleImmediate`,
          defaultMessage: `End {planName} access immediately?`,
          description: `Cancellation heading for a discounted subscription whose cancellation ends access immediately`,
          values: { planName: F },
        })),
        (t[26] = F),
        (t[27] = e)),
      (B = e));
  } else if (M != null && P != null) {
    let e;
    (t[28] !== P || t[29] !== F
      ? ((e = (0, J.jsx)(c, {
          id: `cancelSubscriptionModal.hasDiscount.title`,
          defaultMessage: `End {planName} access on {expirationDate}?`,
          description: `Cancellation heading for a discounted subscription; expirationDate is its actual localized access end date`,
          values: { planName: F, expirationDate: P },
        })),
        (t[28] = P),
        (t[29] = F),
        (t[30] = e))
      : (e = t[30]),
      (B = e));
  } else {
    let e;
    (t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(c, {
          id: `cancelSubscriptionModal.title`,
          defaultMessage: `Subscription Cancellation`,
          description: `Title for the consumer subscription cancellation confirmation`,
        })),
        (t[31] = e))
      : (e = t[31]),
      (B = e));
  }
  let V = n.account.plan_type,
    se =
      V === `plus` || V === `go` || V === `pro` || V === `prolite`
        ? E?.currency_config[V]?.month?.amount
        : void 0,
    H;
  t[32] !== h || t[33] !== I || t[34] !== se || t[35] !== E || t[36] !== i
    ? ((H =
        se != null && i != null && `percentage` in i.discount && E != null
          ? h.formatNumber(Math.max(0, se * I * (1 - i.discount.percentage / 100)), {
              style: `currency`,
              currency: E.currency_config.symbol_code,
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })
          : null),
      (t[32] = h),
      (t[33] = I),
      (t[34] = se),
      (t[35] = E),
      (t[36] = i),
      (t[37] = H))
    : (H = t[37]);
  let U = H,
    le;
  t[38] !== n || t[39] !== P
    ? ((le = (0, J.jsx)(Rt, { account: n, expirationDate: P })),
      (t[38] = n),
      (t[39] = P),
      (t[40] = le))
    : (le = t[40]);
  let ue = le;
  if (i != null && ((ue = i.summary), U != null))
    if (n.account.plan_type === `pro`) {
      let e;
      (t[41] !== U || t[42] !== I
        ? ((e = (0, J.jsx)(c, {
            id: `cancelSubscriptionModal.percentOffSummary`,
            defaultMessage: `We’d love for you to stay — how about {formattedDiscountedCost} for {numPeriods, plural, one {one month} other {{numPeriods} months}} on us? You'll keep maximizing your productivity with the most advanced Pro models, unlimited messages, and maximum memory.`,
            description: `Explains the total discounted Pro price and benefits of accepting a cancellation retention promotion`,
            values: { formattedDiscountedCost: U, numPeriods: I },
          })),
          (t[41] = U),
          (t[42] = I),
          (t[43] = e))
        : (e = t[43]),
        (ue = e));
    } else {
      let e;
      (t[44] !== U || t[45] !== I
        ? ((e = (0, J.jsx)(c, {
            id: `cancelSubscriptionModal.percentOffPlusSummary`,
            defaultMessage: `We’d love for you to stay — how about {formattedDiscountedCost} for {numPeriods, plural, one {one month} other {{numPeriods} months}} on us? You'll keep the full experience - advanced models for complex problems, extended limits, and more memory to pick up right where you left off`,
            description: `Explains the total discounted Plus price and benefits of accepting a cancellation retention promotion`,
            values: { formattedDiscountedCost: U, numPeriods: I },
          })),
          (t[44] = U),
          (t[45] = I),
          (t[46] = e))
        : (e = t[46]),
        (ue = e));
    }
  let W;
  if (O) {
    let e;
    (t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(c, {
          id: `cancelSubscriptionModal.promo.canceledSubscriptionBottomImmediate`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end immediately`,
          description: `Cancellation consequence shown alongside a retention offer when access ends immediately`,
        })),
        (t[47] = e))
      : (e = t[47]),
      (W = e));
  } else if (P != null) {
    let e;
    (t[48] === P
      ? (e = t[49])
      : ((e = (0, J.jsx)(c, {
          id: `cancelSubscriptionModal.promo.canceledSubscriptionBottom`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end on {expirationDate}`,
          description: `Cancellation consequence alongside a retention offer; expirationDate is the actual localized access end date`,
          values: { expirationDate: P },
        })),
        (t[48] = P),
        (t[49] = e)),
      (W = e));
  } else {
    let e;
    (t[50] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(c, {
          id: `settings.consumerBilling.cancellation.offerTermsWithoutDate`,
          defaultMessage: `If you'd rather cancel now, your access to advanced features will end at the end of your current billing period`,
          description: `Cancellation consequence alongside a retention offer when the account did not provide an exact access end date`,
        })),
        (t[50] = e))
      : (e = t[50]),
      (W = e));
  }
  let de;
  t[51] !== oe || t[52] !== u
    ? ((de = () => {
        oe && u();
      }),
      (t[51] = oe),
      (t[52] = u),
      (t[53] = de))
    : (de = t[53]);
  let G;
  t[54] === ue
    ? (G = t[55])
    : ((G = (0, J.jsx)(j, {
        children: (0, J.jsx)(`p`, { className: `text-secondary`, children: ue }),
      })),
      (t[54] = ue),
      (t[55] = G));
  let pe;
  t[56] !== W || t[57] !== i
    ? ((pe =
        i == null
          ? null
          : (0, J.jsx)(j, {
              children: (0, J.jsx)(`p`, { className: `text-secondary`, children: W }),
            })),
      (t[56] = W),
      (t[57] = i),
      (t[58] = pe))
    : (pe = t[58]);
  let K;
  t[59] !== b?.isEnabled || t[60] !== S
    ? ((K =
        b?.isEnabled === !0 || S
          ? (0, J.jsx)(j, {
              children: (0, J.jsx)(`p`, {
                className: `text-secondary`,
                children: (0, J.jsx)(c, {
                  id: `chatgpt.subscription.cancellation.modal.body.auto_reload_notice`,
                  defaultMessage: `Auto-reload of credits will also be turned off when your subscription ends`,
                  description: `Warns that canceling a consumer subscription also turns off automatic credit reload when access ends; shown when reload is enabled or its state could not be checked`,
                }),
              }),
            })
          : null),
      (t[59] = b?.isEnabled),
      (t[60] = S),
      (t[61] = K))
    : (K = t[61]);
  let q;
  t[62] !== z || t[63] !== O
    ? ((q =
        z === `KR`
          ? (0, J.jsx)(j, {
              children: (0, J.jsx)(`p`, {
                className: `text-secondary`,
                children: O
                  ? (0, J.jsx)(c, {
                      id: `cancelSubscriptionModal.koreanImmediateRefundDisclosure`,
                      defaultMessage: `You may also request a refund subject to our <refundPolicyLink>Refund Policy</refundPolicyLink>`,
                      description: `Refund policy disclosure for a Korean subscriber whose cancellation takes effect immediately; the linked policy opens externally`,
                      values: { refundPolicyLink: Lt },
                    })
                  : (0, J.jsx)(c, {
                      id: `cancelSubscriptionModal.koreanTermEndRefundDisclosure`,
                      defaultMessage: `You may also request a refund subject to our <refundPolicyLink>Refund Policy</refundPolicyLink>, in which case the cancellation of your subscription will take effect immediately`,
                      description: `Refund policy disclosure for a Korean subscriber whose ordinary cancellation would take effect at term end; a refund instead ends access immediately`,
                      values: { refundPolicyLink: It },
                    }),
              }),
            })
          : null),
      (t[62] = z),
      (t[63] = O),
      (t[64] = q))
    : (q = t[64]);
  let me;
  t[65] === s
    ? (me = t[66])
    : ((me = s == null ? null : (0, J.jsx)(j, { children: (0, J.jsx)(ot, { result: s }) })),
      (t[65] = s),
      (t[66] = me));
  let he;
  t[67] === l
    ? (he = t[68])
    : ((he = l == null ? null : (0, J.jsx)(j, { children: l })), (t[67] = l), (t[68] = he));
  let ge = i == null ? `dangerSolid` : `danger`,
    _e = !oe,
    ve;
  t[69] === A
    ? (ve = t[70])
    : ((ve = A
        ? (0, J.jsx)(c, {
            id: `cancelSubscriptionModal.plusFreeForGoOffer.cancelPlus`,
            defaultMessage: `Cancel Plus`,
            description: `Immediately ends the Go-origin Plus trial and returns the user to Free`,
          })
        : (0, J.jsx)(c, {
            id: `cancelSubscriptionModal.cancel`,
            defaultMessage: `Cancel subscription`,
            description: `Confirms cancellation of the current consumer subscription`,
          })),
      (t[69] = A),
      (t[70] = ve));
  let ye;
  t[71] !== a || t[72] !== ge || t[73] !== _e || t[74] !== ve
    ? ((ye = (0, J.jsx)(ce, { color: ge, disabled: _e, loading: a, type: `submit`, children: ve })),
      (t[71] = a),
      (t[72] = ge),
      (t[73] = _e),
      (t[74] = ve),
      (t[75] = ye))
    : (ye = t[75]);
  let be;
  t[76] !== a ||
  t[77] !== o ||
  t[78] !== L ||
  t[79] !== f ||
  t[80] !== d ||
  t[81] !== F ||
  t[82] !== i
    ? ((be =
        i == null
          ? (0, J.jsx)(ce, {
              color: `secondary`,
              disabled: a || o,
              type: `button`,
              onClick: f,
              children: (0, J.jsx)(c, {
                id: `cancelSubscriptionModal.goBack`,
                defaultMessage: `Go back`,
                description: `Returns from cancellation confirmation without canceling the subscription`,
              }),
            })
          : (0, J.jsx)(ce, {
              disabled: a || o,
              type: `button`,
              onClick: d,
              children:
                L && !i.is_immediately_invoiced
                  ? (0, J.jsx)(c, {
                      id: `cancelSubscriptionModal.keepPlanForFreeButton`,
                      defaultMessage: `Keep {planName} for free`,
                      description: `Accepts a scheduled free retention promotion on the current plan`,
                      values: { planName: F },
                    })
                  : (0, J.jsx)(c, {
                      id: `cancelSubscriptionModal.getOfferButton`,
                      defaultMessage: `Get offer`,
                      description: `Opens or accepts the current cancellation retention promotion`,
                    }),
            })),
      (t[76] = a),
      (t[77] = o),
      (t[78] = L),
      (t[79] = f),
      (t[80] = d),
      (t[81] = F),
      (t[82] = i),
      (t[83] = be))
    : (be = t[83]);
  let xe;
  t[84] !== ye || t[85] !== be
    ? ((xe = (0, J.jsx)(j, {
        children: (0, J.jsxs)(re, { className: `flex-wrap`, children: [ye, be] }),
      })),
      (t[84] = ye),
      (t[85] = be),
      (t[86] = xe))
    : (xe = t[86]);
  let Se;
  return (
    t[87] !== a ||
    t[88] !== p ||
    t[89] !== m ||
    t[90] !== de ||
    t[91] !== G ||
    t[92] !== pe ||
    t[93] !== K ||
    t[94] !== q ||
    t[95] !== me ||
    t[96] !== he ||
    t[97] !== xe ||
    t[98] !== B
      ? ((Se = (0, J.jsxs)(et, {
          title: B,
          busy: a,
          onClose: p,
          onShown: m,
          onSubmit: de,
          children: [G, pe, K, q, me, he, xe],
        })),
        (t[87] = a),
        (t[88] = p),
        (t[89] = m),
        (t[90] = de),
        (t[91] = G),
        (t[92] = pe),
        (t[93] = K),
        (t[94] = q),
        (t[95] = me),
        (t[96] = he),
        (t[97] = xe),
        (t[98] = B),
        (t[99] = Se))
      : (Se = t[99]),
    Se
  );
}
function It(e) {
  return (0, J.jsx)(H, {
    href: Vt,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Lt(e) {
  return (0, J.jsx)(H, {
    href: Vt,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
function Rt(e) {
  let t = (0, Bt.c)(17),
    { account: n, expirationDate: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = mt(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o = pt(n);
  if (ft(n)) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(c, {
            id: `cancelSubscriptionModal.plusFreeForGoOffer.body`,
            defaultMessage: `Canceling Plus will end your trial immediately and return you to Free`,
            description: `Explains the immediate consequence of declining Go and canceling a Go-origin Plus trial`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n.entitlement.discount != null) {
    if (
      !o &&
      r != null &&
      n.account.plan_type === `plus` &&
      n.entitlement.discount.promo_campaign_id === `students-2026-four-month-free`
    ) {
      let e;
      return (
        t[3] === r
          ? (e = t[4])
          : ((e = (0, J.jsx)(c, {
              id: `chatgpt.students.back_to_school_2026.cancellation.confirmation.body`,
              defaultMessage: `If you cancel your free student offer, your Plus access will end on {expirationDate}. Any discounts applied will be removed, and can’t be used again.`,
              description: `Cancellation terms for the 2026 four-month-free Plus student offer; expirationDate is the actual localized access end date`,
              values: { expirationDate: r },
            })),
            (t[3] = r),
            (t[4] = e)),
        e
      );
    }
    if (o) {
      let e;
      return (
        t[5] === a
          ? (e = t[6])
          : ((e = (0, J.jsx)(c, {
              id: `cancelSubscriptionModal.hasDiscount.canceledSubscriptionImmediate`,
              defaultMessage: `If you cancel your subscription now, your {planName} access will end immediately. Any discounts applied will be removed, and can't be used again.`,
              description: `Warns that canceling an immediately ending discounted plan removes access and the reusable discount`,
              values: { planName: a },
            })),
            (t[5] = a),
            (t[6] = e)),
        e
      );
    }
    if (r != null) {
      let e;
      return (
        t[7] !== r || t[8] !== a
          ? ((e = (0, J.jsx)(c, {
              id: `cancelSubscriptionModal.hasDiscount.canceledSubscription`,
              defaultMessage: `If you cancel your subscription now, your {planName} access will end on {expirationDate}. Any discounts applied will be removed, and can't be used again.`,
              description: `Warns that canceling a discounted plan ends access on expirationDate and removes discounts permanently`,
              values: { planName: a, expirationDate: r },
            })),
            (t[7] = r),
            (t[8] = a),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    let e;
    return (
      t[10] === a
        ? (e = t[11])
        : ((e = (0, J.jsx)(c, {
            id: `settings.consumerBilling.cancellation.discountedTermsWithoutDate`,
            defaultMessage: `Your {planName} access will end at the end of your current billing period. Any discounts applied will be removed, and can't be used again.`,
            description: `Discounted cancellation terms when the account has not supplied an exact access end date`,
            values: { planName: a },
          })),
          (t[10] = a),
          (t[11] = e)),
      e
    );
  }
  if (o) {
    let e;
    return (
      t[12] === a
        ? (e = t[13])
        : ((e = (0, J.jsx)(c, {
            id: `cancelSubscriptionModal.canceledSubscriptionImmediate`,
            defaultMessage: `If you cancel your subscription now, your {planName} access will end immediately`,
            description: `Cancellation terms when access ends immediately`,
            values: { planName: a },
          })),
          (t[12] = a),
          (t[13] = e)),
      e
    );
  }
  let s;
  return (
    t[14] !== r || t[15] !== a
      ? ((s =
          r == null
            ? (0, J.jsx)(c, {
                id: `settings.consumerBilling.cancellation.termsWithoutDate`,
                defaultMessage: `Your {planName} subscription will be canceled but will remain active until the end of your current billing period`,
                description: `Cancellation terms when the account has not supplied an exact access end date`,
                values: { planName: a },
              })
            : (0, J.jsx)(c, {
                id: `cancelSubscriptionModal.canceledSubscription`,
                defaultMessage: `Your {planName} subscription will be canceled but will remain active until the end of your billing period on {expirationDate}`,
                description: `Cancellation terms for an ordinary subscription; expirationDate is the actual localized end of access`,
                values: { planName: a, expirationDate: r },
              })),
        (t[14] = r),
        (t[15] = a),
        (t[16] = s))
      : (s = t[16]),
    s
  );
}
function zt(e) {
  let t = (0, Bt.c)(15),
    { promotion: n, planName: r } = e,
    i = ee(),
    a = n.duration?.num_periods ?? 1;
  if (`percentage` in n.discount) {
    let e;
    return (
      t[0] !== a || t[1] !== r || t[2] !== n.discount.percentage
        ? ((e =
            n.discount.percentage === 100
              ? (0, J.jsx)(c, {
                  id: `cancelSubscriptionModal.freeTitle`,
                  defaultMessage: `Get {numPeriods, plural, one {one month} other {{numPeriods} months}} of {planName}, free`,
                  description: `Title of a free-month cancellation retention promotion`,
                  values: { planName: r, numPeriods: a },
                })
              : (0, J.jsx)(c, {
                  id: `cancelSubscriptionModal.percentageOffTitle`,
                  defaultMessage: `Get {percentage}% off {planName} for {numPeriods, plural, one {one month} other {{numPeriods} months}}`,
                  description: `Title of a percentage-off cancellation retention promotion`,
                  values: { planName: r, numPeriods: a, percentage: n.discount.percentage },
                })),
          (t[0] = a),
          (t[1] = r),
          (t[2] = n.discount.percentage),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (`value` in n.discount) {
    let e;
    t[4] !== i || t[5] !== n.discount.currency_code || t[6] !== n.discount.value
      ? ((e = i.formatNumber(n.discount.value, {
          style: `currency`,
          currency: n.discount.currency_code,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })),
        (t[4] = i),
        (t[5] = n.discount.currency_code),
        (t[6] = n.discount.value),
        (t[7] = e))
      : (e = t[7]);
    let o;
    return (
      t[8] !== a || t[9] !== r || t[10] !== e
        ? ((o = (0, J.jsx)(c, {
            id: `settings.consumerBilling.cancellation.valueOffTitle`,
            defaultMessage: `Get {valueOff} off {planName} for {numPeriods, plural, one {one month} other {{numPeriods} months}}`,
            description: `Title of a fixed-value retention discount; valueOff is the actual localized discount with currency`,
            values: { planName: r, numPeriods: a, valueOff: e },
          })),
          (t[8] = a),
          (t[9] = r),
          (t[10] = e),
          (t[11] = o))
        : (o = t[11]),
      o
    );
  }
  let o;
  return (
    t[12] !== r || t[13] !== n.title
      ? ((o =
          n.title == null
            ? (0, J.jsx)(c, {
                id: `settings.consumerBilling.cancellation.promotionTitle`,
                defaultMessage: `Keep {planName} with this offer`,
                description: `Title of a cancellation retention promotion whose metadata supplies no localized title`,
                values: { planName: r },
              })
            : (0, J.jsx)(J.Fragment, { children: n.title })),
        (t[12] = r),
        (t[13] = n.title),
        (t[14] = o))
      : (o = t[14]),
    o
  );
}
var Bt,
  J,
  Vt,
  Ht = e(() => {
    ((Bt = W()),
      ge(),
      w(),
      a(),
      L(),
      V(),
      l(),
      N(),
      ke(),
      at(),
      lt(),
      Pt(),
      Tt(),
      (J = z()),
      (Vt = `https://help.openai.com/articles/7232895-how-do-i-request-a-refund-for-my-chatgpt-subscription`));
  });
function Y(e, t, n) {
  e.get(pe).logEventWithStatsig?.(t, n);
}
var Ut = e(() => {
    n();
  }),
  X,
  Wt = e(() => {
    (w(),
      (X = Se({
        surveyTitle: {
          id: `cancelSubscriptionDowngradeSurveyModal.title`,
          defaultMessage: `We're sorry to see you go`,
          description: `Title for the Plus cancellation survey modal shown in the downgrade survey experiment.`,
        },
        surveyPrompt: {
          id: `cancelSubscriptionDowngradeSurveyModal.prompt`,
          defaultMessage: `Why are you canceling your Plus subscription?`,
          description: `Prompt asking Plus subscribers why they are canceling before routing them to a retention offer.`,
        },
        surveyReasonTooExpensive: {
          id: `cancelSubscriptionDowngradeSurveyModal.reason.tooExpensive`,
          defaultMessage: `Too expensive`,
          description: `Survey option for a Plus subscriber canceling due to price.`,
        },
        surveyReasonNotUsingItAnymore: {
          id: `cancelSubscriptionDowngradeSurveyModal.reason.notUsingItAnymore`,
          defaultMessage: `Not using it anymore`,
          description: `Survey option for a Plus subscriber canceling because they are not using the product.`,
        },
        surveyReasonNotUsefulEnough: {
          id: `cancelSubscriptionDowngradeSurveyModal.reason.notUsefulEnough`,
          defaultMessage: `Not useful enough`,
          description: `Survey option for a Plus subscriber canceling because the product is not useful enough.`,
        },
        surveyReasonSomethingElse: {
          id: `cancelSubscriptionDowngradeSurveyModal.reason.somethingElse`,
          defaultMessage: `Something else`,
          description: `Survey option for a Plus subscriber canceling for another reason.`,
        },
        tellUsMoreLabel: {
          id: `cancelSubscriptionDowngradeSurveyModal.tellUsMoreLabel`,
          defaultMessage: `Tell us more`,
          description: `Label for the optional freeform text field in the Plus cancellation survey.`,
        },
        tellUsMorePlaceholder: {
          id: `cancelSubscriptionDowngradeSurveyModal.tellUsMorePlaceholder`,
          defaultMessage: `Optional`,
          description: `Placeholder for the optional freeform text field in the Plus cancellation survey.`,
        },
        skipButtonLabel: {
          id: `cancelSubscriptionDowngradeSurveyModal.skipButtonLabel`,
          defaultMessage: `Skip`,
          description: `Button label to skip the cancellation survey.`,
        },
        submitButtonLabel: {
          id: `cancelSubscriptionDowngradeSurveyModal.submitButtonLabel`,
          defaultMessage: `Submit`,
          description: `Button label to submit the cancellation survey.`,
        },
        thingsYouLoseTitle: {
          id: `cancelSubscriptionThingsYouLoseModal.title`,
          defaultMessage: `Are you sure?`,
          description: `Title for the Plus cancellation things-you-lose modal shown in the downgrade experiment.`,
        },
        thingsYouLoseBody: {
          id: `cancelSubscriptionThingsYouLoseModal.body`,
          defaultMessage: `If you cancel, your plan will stay active until the end of this billing cycle. After that, you'll continue on the Free plan.`,
          description: `Body text explaining what happens after canceling Plus in the things-you-lose modal.`,
        },
        thingsYouLoseCardTitle: {
          id: `cancelSubscriptionThingsYouLoseModal.cardTitle`,
          defaultMessage: `You'll no longer have:`,
          description: `Heading for the list of Plus benefits the user loses after canceling.`,
        },
        thingsYouLosePersonalizedCardTitle: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedCardTitle`,
          defaultMessage: `What changes on Free:`,
          description: `Heading above a personalized list in the Plus cancellation Things You Lose modal, shown only after a fresh usage summary produces at least one visible positive seven-day usage row. The list may also contain generic entitlement copy for supported zero-use features. It introduces a mix of features that become unavailable and features that remain on Free with lower limits, so the wording must stay neutral and truthful. Short heading above a compact list; no placeholders or markup.`,
        },
        thingsYouLosePersonalizedStandardFreeLimitExceededActions: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.standardFreeLimitExceededActions`,
          defaultMessage: `Your plan covered at least {count, plural, one {# action} other {# actions}} beyond standard Free-plan limits in the past 28 days`,
          description: `Optional first bullet in the personalized Plus cancellation Things You Lose modal, shown only after a fresh server response provides a positive conservative lower bound and at least one positive seven-day personalized feature row remains visible after the four-row cap. The server supplies the lower bound; the client must not derive it by summing feature rows. “At least” is intentional because the count does not claim an exact all-feature Free-plan counterfactual. Placeholder {count} is a positive safe integer from the past 28 days; ICU renders action for 1 and actions otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLoseExtendedLimits: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.extendedLimits`,
          defaultMessage: `Advanced models and image creation with Thinking`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseVoiceMode: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.voiceMode`,
          defaultMessage: `Extended limits on messages, files, images, and data analysis`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseModelAccess: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.modelAccess`,
          defaultMessage: `Advanced voice mode`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseCustomGpts: {
          id: `cancelSubscriptionThingsYouLoseModal.loss.customGpts`,
          defaultMessage: `Extended memory across chats`,
          description: `Benefit loss bullet in the Plus things-you-lose modal.`,
        },
        thingsYouLoseGenericAdvancedReasoning: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.advancedReasoning`,
          defaultMessage: `Reasoning models with lower limits on Free`,
          description: `Generic reasoning-model bullet in the Plus cancellation Things You Lose modal, shown only for a supported feature with an exact zero seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used reasoning models. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericAgent: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.agent`,
          defaultMessage: `Agent mode won’t be available on Free`,
          description: `Generic agent-mode bullet in the Plus cancellation Things You Lose modal, shown only for a supported feature with an exact zero seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used agent mode. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericImageGeneration: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.imageGeneration`,
          defaultMessage: `Image generation with lower limits on Free`,
          description: `Generic image-generation bullet in the Plus cancellation Things You Lose modal, shown only for a supported feature with an exact zero seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used image generation. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericFileUploads: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.fileUploads`,
          defaultMessage: `File uploads with lower limits on Free`,
          description: `Generic file-upload bullet in the Plus cancellation Things You Lose modal, shown only for a supported feature with an exact zero seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user uploaded files. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericDeepResearch: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.deepResearch`,
          defaultMessage: `Deep research with lower limits on Free`,
          description: `Generic deep-research bullet in the Plus cancellation Things You Lose modal, shown only for a supported feature with an exact zero seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used deep research. Compact list-item copy with no markup.`,
        },
        thingsYouLoseGenericDataAnalysis: {
          id: `cancelSubscriptionThingsYouLoseModal.genericLoss.dataAnalysis`,
          defaultMessage: `Data analysis with lower limits on Free`,
          description: `Generic data-analysis bullet in the Plus cancellation Things You Lose modal, shown only for a supported feature with an exact zero seven-day count and only alongside at least one positive personalized seven-day row. It states the entitlement change without implying the user used data analysis. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedAdvancedReasoning: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.advancedReasoning`,
          defaultMessage: `You used reasoning models {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of up to four ranked bullets in the Plus cancellation Things You Lose modal, shown only when a fresh summary reports a positive server-counted reasoning-model use total from the past 7 days. The tone should be factual, not alarming; Free still includes reasoning models with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedAgent: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.agent`,
          defaultMessage: `You used agent mode {count, plural, one {once} other {# times}} in the past 7 days; it won’t be available on Free`,
          description: `One of up to four ranked bullets in the Plus cancellation Things You Lose modal, shown only when a fresh summary reports a positive server-counted agent-mode use total from the past 7 days and the backend marks the feature unavailable on Free. The tone should be factual, not alarming. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedImageGeneration: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.imageGeneration`,
          defaultMessage: `You used image generation {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of up to four ranked bullets in the Plus cancellation Things You Lose modal, shown only when a fresh summary reports a positive server-counted image-generation use total from the past 7 days. The tone should be factual, not alarming; Free still includes image generation with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedFileUploads: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.fileUploads`,
          defaultMessage: `You used file uploads {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of up to four ranked bullets in the Plus cancellation Things You Lose modal, shown only when a fresh summary reports a positive server-counted file-upload use total from the past 7 days. The tone should be factual, not alarming; Free still includes file uploads with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedDeepResearch: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.deepResearch`,
          defaultMessage: `You used deep research {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of up to four ranked bullets in the Plus cancellation Things You Lose modal, shown only when a fresh summary reports a positive server-counted deep-research use total from the past 7 days. The tone should be factual, not alarming; Free still includes deep research with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        thingsYouLosePersonalizedDataAnalysis: {
          id: `cancelSubscriptionThingsYouLoseModal.personalizedLoss.dataAnalysis`,
          defaultMessage: `You used data analysis {count, plural, one {once} other {# times}} in the past 7 days; Free includes lower limits`,
          description: `One of up to four ranked bullets in the Plus cancellation Things You Lose modal, shown only when a fresh summary reports a positive server-counted data-analysis use total from the past 7 days. The tone should be factual, not alarming; Free still includes data analysis with lower limits, so do not imply total loss of access or a historical-plan counterfactual. Placeholder {count} is a positive integer count of actual uses; ICU renders once for 1 and # times otherwise. Compact list-item copy with no markup.`,
        },
        continueButtonLabel: {
          id: `cancelSubscriptionThingsYouLoseModal.continueButtonLabel`,
          defaultMessage: `Continue`,
          description: `Primary button in the things-you-lose modal that continues to retention options.`,
        },
        plusTrialTitle: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.title`,
          defaultMessage: `Try Plus free before you cancel`,
          description: `Title for the treatment-only Plus free-trial destination modal in the cancellation survey experiment.`,
        },
        plusTrialBody: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.body`,
          defaultMessage: `Keep your Plus benefits for another month at no cost. You can cancel anytime before the trial ends.`,
          description: `Body text for the treatment-only Plus free-trial destination modal.`,
        },
        plusPlanLabel: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.planLabel`,
          defaultMessage: `Plus`,
          description: `Plan name label for the Plus trial destination plan card.`,
        },
        plusPlanPrice: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.planPrice`,
          defaultMessage: `{monthlyPrice}/month`,
          description: `Localized standard Plus monthly price shown in the Plus trial destination plan card. Example: $20/month.`,
        },
        plusTrialEyebrow: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.trialEyebrow`,
          defaultMessage: `Free for 30 days`,
          description: `Badge shown in the Plus trial destination plan card.`,
        },
        plusPlanSubtitle: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.planSubtitle`,
          defaultMessage: `Keep your access to premium features`,
          description: `Short subtitle describing the Plus plan in the Plus trial destination card.`,
        },
        plusFeatureAdvancedModels: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.feature.advancedModels`,
          defaultMessage: `Advanced models with Thinking`,
          description: `Plus trial plan card feature bullet.`,
        },
        plusFeatureExpandedMessages: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.feature.expandedMessages`,
          defaultMessage: `Expanded messages and uploads`,
          description: `Plus trial plan card feature bullet.`,
        },
        plusFeatureImageCreation: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.feature.imageCreation`,
          defaultMessage: `More complex and accurate image creation`,
          description: `Plus trial plan card feature bullet.`,
        },
        goLowerTierTitle: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.title`,
          defaultMessage: `We're sorry to see you go`,
          description: `Title for the treatment-only Go lower-tier destination modal in the cancellation survey experiment.`,
        },
        goLowerTierBody: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.body`,
          defaultMessage: `You can switch to a lower-cost plan instead of canceling`,
          description: `Body text for the treatment-only Go lower-tier destination modal.`,
        },
        goPlanLabel: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.planLabel`,
          defaultMessage: `Go`,
          description: `Plan name label for the Go lower-tier destination plan card.`,
        },
        goPlanSavingsEyebrow: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.savingsEyebrow`,
          defaultMessage: `Save {monthlySavings}/month`,
          description: `Savings badge shown in the Go lower-tier destination plan card. monthlySavings is a localized monthly price difference between Plus and Go.`,
        },
        goPlanPrice: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.planPrice`,
          defaultMessage: `{monthlyPrice}/month`,
          description: `Monthly Go price shown in the Go lower-tier destination plan card. Placeholder is the localized price with currency symbol.`,
        },
        goPlanPriceUnavailable: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.planPriceUnavailable`,
          defaultMessage: `Lower-cost plan`,
          description: `Fallback Go plan price label shown when localized monthly pricing is unavailable.`,
        },
        goPlanSubtitle: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.planSubtitle`,
          defaultMessage: `Standard intelligence with extended usage`,
          description: `Short subtitle describing the Go plan in the Go lower-tier destination card.`,
        },
        goFeatureCoreModel: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.feature.coreModel`,
          defaultMessage: `Core model`,
          description: `Go lower-tier plan card feature bullet.`,
        },
        goFeatureMessagesUploads: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.feature.messagesUploads`,
          defaultMessage: `More messages and uploads than Free plan`,
          description: `Go lower-tier plan card feature bullet.`,
        },
        goFeatureImageCreation: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.feature.imageCreation`,
          defaultMessage: `More image creation than Free plan`,
          description: `Go lower-tier plan card feature bullet.`,
        },
        startTrialButton: {
          id: `cancelSubscriptionPlusTrialPlanCardModal.startTrialButton`,
          defaultMessage: `Start trial`,
          description: `Primary button in the Plus trial destination modal to claim the cancellation promotion.`,
        },
        switchToGoButton: {
          id: `cancelSubscriptionGoLowerTierPlanCardModal.switchToGoButton`,
          defaultMessage: `Switch to Go`,
          description: `Primary button in the Go lower-tier destination modal to switch from Plus to Go.`,
        },
        backButtonLabel: {
          id: `cancelSubscriptionDowngradeSurveyDestinationModal.backButtonLabel`,
          defaultMessage: `Back`,
          description: `Button label to return from a destination modal to the survey modal.`,
        },
        declineAndContinueButtonLabel: {
          id: `cancelSubscriptionDowngradeSurveyDestinationModal.declineAndContinueButtonLabel`,
          defaultMessage: `Decline and continue`,
          description: `Button label to decline the displayed cancellation retention offer and continue to the cancellation confirmation modal.`,
        },
      })));
  });
function Gt(e) {
  let t = (0, qt.c)(91),
    {
      accountId: n,
      account: r,
      kind: i,
      busy: a,
      disabled: o,
      error: s,
      cancellationError: l,
      onAccept: u,
      onDecline: d,
      onClose: f,
      onShown: p,
    } = e,
    m = ee(),
    { client: h } = fe(),
    g;
  t[0] !== r.entitlement.billing_currency || t[1] !== n || t[2] !== h
    ? ((g = Dt(n, r.entitlement.billing_currency, h)),
      (t[0] = r.entitlement.billing_currency),
      (t[1] = n),
      (t[2] = h),
      (t[3] = g))
    : (g = t[3]);
  let _ = i !== `plus_offer`,
    v;
  t[4] !== g || t[5] !== _
    ? ((v = { ...g, enabled: _, staleTime: 0 }), (t[4] = g), (t[5] = _), (t[6] = v))
    : (v = t[6]);
  let { data: y, isPending: b } = ne(v),
    x = y?.currency_config,
    S = `go`;
  i === `pro_offer` ? (S = `prolite`) : i === `plus_trial` && (S = `plus`);
  let C = x?.[S]?.month?.amount,
    w;
  t[7] !== C || t[8] !== x || t[9] !== m
    ? ((w =
        C != null && x != null
          ? m.formatNumber(C, {
              style: `currency`,
              currency: x.symbol_code,
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          : null),
      (t[7] = C),
      (t[8] = x),
      (t[9] = m),
      (t[10] = w))
    : (w = t[10]);
  let T = w,
    E =
      x?.plus?.month != null && x.go?.month != null
        ? x.plus.month.amount - x.go.month.amount
        : null,
    O = i === `plus_trial` || i === `go_card`,
    k,
    A,
    M;
  bb0: switch (i) {
    case `plus_offer`: {
      let e;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(c, {
            id: `cancelSubscriptionPlusOfferModal.title`,
            defaultMessage: `Keep your Plus benefits — free for 1 month`,
            description: `Headline introducing the one-month free Plus retention offer when a subscriber starts cancellation`,
          })),
          (t[11] = e))
        : (e = t[11]),
        (k = e));
      let n;
      (t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(c, {
            id: `cancelSubscriptionPlusOfferModal.body`,
            defaultMessage: `We’d love for you to keep extended access to advanced models, increased file uploads, and more personalization — so we’re making it all free for the next 30 days`,
            description: `Explains the one-month Plus retention offer shown during subscription cancellation`,
          })),
          (t[12] = n))
        : (n = t[12]),
        (A = n));
      let r;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Z.jsx)(c, {
            id: `cancelSubscriptionPlusOfferModal.claimOfferButtonLabel`,
            defaultMessage: `Claim offer`,
            description: `Accepts the one-month free Plus retention offer or opens its immediate payment confirmation`,
          })),
          (t[13] = r))
        : (r = t[13]),
        (M = r));
      break bb0;
    }
    case `go_trial`: {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(c, {
            id: `cancelSubscriptionGoUpsellModal.goTrialReturnTitle`,
            defaultMessage: `Switch back to ChatGPT Go?`,
            description: `Offers a user on a Go-origin Plus trial an immediate return to Go`,
          })),
          (t[14] = e))
        : (e = t[14]),
        (k = e));
      let n;
      (t[15] === T
        ? (n = t[16])
        : ((n =
            T == null
              ? (0, Z.jsx)(c, {
                  id: `cancelSubscriptionGoUpsellModal.goTrialReturnBodyFallback`,
                  defaultMessage: `Keep expanded messages and image creation with less powerful intelligence`,
                  description: `Describes returning to Go when its localized monthly price is unavailable`,
                })
              : (0, Z.jsx)(c, {
                  id: `cancelSubscriptionGoUpsellModal.goTrialReturnBody`,
                  defaultMessage: `Keep expanded messages and image creation with less powerful intelligence for just {monthlyPrice}/month`,
                  description: `Describes returning immediately to Go; monthlyPrice is the actual localized monthly Go price`,
                  values: { monthlyPrice: T },
                })),
          (t[15] = T),
          (t[16] = n)),
        (A = n));
      let r;
      (t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Z.jsx)(c, {
            id: `cancelSubscriptionGoUpsellModal.continueWithGoButtonLabel`,
            defaultMessage: `Continue with Go`,
            description: `Ends the Go-origin Plus trial immediately and restores the user's Go subscription`,
          })),
          (t[17] = r))
        : (r = t[17]),
        (M = r));
      break bb0;
    }
    case `go_offer`: {
      let e;
      (t[18] === T
        ? (e = t[19])
        : ((e =
            T == null
              ? (0, Z.jsx)(c, {
                  id: `cancelSubscriptionGoUpsellModal.titleFallback`,
                  defaultMessage: `Switch to ChatGPT Go?`,
                  description: `Offers a Go downgrade during cancellation when its monthly price is unavailable`,
                })
              : (0, Z.jsx)(c, {
                  id: `cancelSubscriptionGoUpsellModal.title`,
                  defaultMessage: `Switch to ChatGPT Go for only {monthlyPrice}?`,
                  description: `Offers a lower-cost Go plan during cancellation; monthlyPrice is the actual localized monthly Go price`,
                  values: { monthlyPrice: T },
                })),
          (t[18] = T),
          (t[19] = e)),
        (k = e));
      let n;
      (t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(c, {
            id: `cancelSubscriptionGoUpsellModal.body`,
            defaultMessage: `Keep expanded messages and image creation with less powerful intelligence at a lower monthly price`,
            description: `Describes the Go plan offered as an alternative to canceling Plus`,
          })),
          (t[20] = n))
        : (n = t[20]),
        (A = n));
      let r;
      (t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Z.jsx)(c, {
            id: `cancelSubscriptionGoUpsellModal.switchToGoButtonLabel`,
            defaultMessage: `Try ChatGPT Go`,
            description: `Opens the normal subscription plan-change confirmation for a Plus-to-Go downgrade`,
          })),
          (t[21] = r))
        : (r = t[21]),
        (M = r));
      break bb0;
    }
    case `pro_offer`: {
      let e;
      (t[22] === T
        ? (e = t[23])
        : ((e =
            T == null
              ? (0, Z.jsx)(c, {
                  id: `settings.consumerBilling.cancellation.proOfferPriceUnavailable`,
                  defaultMessage: `Keep Pro at a lower price?`,
                  description: `Fallback heading for a Pro subscriber offered the lower Pro tier when its current price is unavailable`,
                })
              : (0, Z.jsx)(c, {
                  id: `cancelSubscriptionProLiteDowngradeModal.title`,
                  defaultMessage: `Keep Pro for {price}/month?`,
                  description: `Offers a Pro subscriber the lower Pro tier before cancellation; price is the actual localized monthly price`,
                  values: { price: T },
                })),
          (t[22] = T),
          (t[23] = e)),
        (k = e));
      let n;
      (t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(c, {
            id: `cancelSubscriptionProLiteDowngradeModal.description`,
            defaultMessage: `Keep all your Pro features with reduced usage limits for a lower price`,
            description: `Describes the lower Pro tier offered during cancellation`,
          })),
          (t[24] = n))
        : (n = t[24]),
        (A = n));
      let r;
      (t[25] === T
        ? (r = t[26])
        : ((r =
            T == null
              ? (0, Z.jsx)(c, {
                  id: `settings.consumerBilling.cancellation.reviewProOffer`,
                  defaultMessage: `Review plan change`,
                  description: `Opens the actual Pro downgrade preview when the interception card could not display its price`,
                })
              : (0, Z.jsx)(c, {
                  id: `cancelSubscriptionProLiteDowngradeModal.downgradeButtonLabel`,
                  defaultMessage: `Switch to {price}`,
                  description: `Opens the Pro downgrade confirmation; price is the actual localized monthly price of the lower tier`,
                  values: { price: T },
                })),
          (t[25] = T),
          (t[26] = r)),
        (M = r));
      break bb0;
    }
    case `plus_trial`: {
      let e;
      (t[27] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(c, { ...X.plusTrialTitle })), (t[27] = e))
        : (e = t[27]),
        (k = e));
      let n;
      (t[28] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(c, { ...X.plusTrialBody })), (t[28] = n))
        : (n = t[28]),
        (A = n));
      let r;
      (t[29] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Z.jsx)(c, { ...X.startTrialButton })), (t[29] = r))
        : (r = t[29]),
        (M = r));
      break bb0;
    }
    case `go_card`: {
      let e;
      (t[30] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(c, { ...X.goLowerTierTitle })), (t[30] = e))
        : (e = t[30]),
        (k = e));
      let n;
      (t[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(c, { ...X.goLowerTierBody })), (t[31] = n))
        : (n = t[31]),
        (A = n));
      let r;
      (t[32] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Z.jsx)(c, { ...X.switchToGoButton })), (t[32] = r))
        : (r = t[32]),
        (M = r));
    }
  }
  let ie;
  t[33] === i
    ? (ie = t[34])
    : ((ie =
        i === `plus_trial`
          ? [X.plusFeatureAdvancedModels, X.plusFeatureExpandedMessages, X.plusFeatureImageCreation]
          : [X.goFeatureCoreModel, X.goFeatureMessagesUploads, X.goFeatureImageCreation]),
      (t[33] = i),
      (t[34] = ie));
  let N = ie,
    P = null;
  if (i === `plus_trial`) {
    let e;
    (t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(R, {
          variant: `promotion`,
          children: (0, Z.jsx)(c, { ...X.plusTrialEyebrow }),
        })),
        (t[35] = e))
      : (e = t[35]),
      (P = e));
  } else if (E != null && E > 0 && x != null) {
    let e;
    t[36] !== x.symbol_code || t[37] !== m || t[38] !== E
      ? ((e = m.formatNumber(E, {
          style: `currency`,
          currency: x.symbol_code,
          maximumFractionDigits: 2,
          minimumFractionDigits: 0,
        })),
        (t[36] = x.symbol_code),
        (t[37] = m),
        (t[38] = E),
        (t[39] = e))
      : (e = t[39]);
    let n;
    (t[40] === e
      ? (n = t[41])
      : ((n = (0, Z.jsx)(R, {
          variant: `promotion`,
          children: (0, Z.jsx)(c, { ...X.goPlanSavingsEyebrow, values: { monthlySavings: e } }),
        })),
        (t[40] = e),
        (t[41] = n)),
      (P = n));
  }
  let ae = null;
  if (T != null) {
    let e = i === `plus_trial` ? X.plusPlanPrice : X.goPlanPrice,
      n;
    t[42] === T ? (n = t[43]) : ((n = { monthlyPrice: T }), (t[42] = T), (t[43] = n));
    let r;
    (t[44] !== e || t[45] !== n
      ? ((r = (0, Z.jsx)(c, { ...e, values: n })), (t[44] = e), (t[45] = n), (t[46] = r))
      : (r = t[46]),
      (ae = r));
  } else if (i === `go_card`) {
    let e;
    (t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, { ...X.goPlanPriceUnavailable })), (t[47] = e))
      : (e = t[47]),
      (ae = e));
  }
  let F;
  t[48] !== o || t[49] !== u
    ? ((F = () => {
        o || u();
      }),
      (t[48] = o),
      (t[49] = u),
      (t[50] = F))
    : (F = t[50]);
  let I;
  t[51] === A
    ? (I = t[52])
    : ((I = (0, Z.jsx)(j, {
        children: (0, Z.jsx)(`p`, { className: `text-secondary`, children: A }),
      })),
      (t[51] = A),
      (t[52] = I));
  let L;
  t[53] !== P || t[54] !== N || t[55] !== O || t[56] !== i || t[57] !== ae
    ? ((L = O
        ? (0, Z.jsx)(j, {
            children: (0, Z.jsxs)(D, {
              children: [
                (0, Z.jsx)(q, {
                  label: (0, Z.jsx)(c, {
                    ...(i === `plus_trial` ? X.plusPlanLabel : X.goPlanLabel),
                  }),
                  description: (0, Z.jsx)(c, {
                    ...(i === `plus_trial` ? X.plusPlanSubtitle : X.goPlanSubtitle),
                  }),
                  control: (0, Z.jsxs)(te, {
                    children: [P, i === `plus_trial` ? (0, Z.jsx)(`s`, { children: ae }) : ae],
                  }),
                }),
                N.map(Kt),
              ],
            }),
          })
        : null),
      (t[53] = P),
      (t[54] = N),
      (t[55] = O),
      (t[56] = i),
      (t[57] = ae),
      (t[58] = L))
    : (L = t[58]);
  let z;
  t[59] !== i || t[60] !== b
    ? ((z = i === `pro_offer` && b ? (0, Z.jsx)(j, { children: (0, Z.jsx)(tt, {}) }) : null),
      (t[59] = i),
      (t[60] = b),
      (t[61] = z))
    : (z = t[61]);
  let oe;
  t[62] === s
    ? (oe = t[63])
    : ((oe = s == null ? null : (0, Z.jsx)(j, { children: (0, Z.jsx)(ot, { result: s }) })),
      (t[62] = s),
      (t[63] = oe));
  let B;
  t[64] === l
    ? (B = t[65])
    : ((B = l == null ? null : (0, Z.jsx)(j, { children: l })), (t[64] = l), (t[65] = B));
  let V = a || o,
    se;
  t[66] === O
    ? (se = t[67])
    : ((se = O
        ? (0, Z.jsx)(c, { ...X.declineAndContinueButtonLabel })
        : (0, Z.jsx)(c, {
            id: `cancelSubscriptionRetentionModal.noThanks`,
            defaultMessage: `No thanks`,
            description: `Continues cancellation without accepting the retention offer`,
          })),
      (t[66] = O),
      (t[67] = se));
  let H;
  t[68] !== d || t[69] !== V || t[70] !== se
    ? ((H = (0, Z.jsx)(ce, {
        color: `secondary`,
        disabled: V,
        type: `button`,
        onClick: d,
        children: se,
      })),
      (t[68] = d),
      (t[69] = V),
      (t[70] = se),
      (t[71] = H))
    : (H = t[71]);
  let U;
  t[72] !== M || t[73] !== a || t[74] !== o
    ? ((U = (0, Z.jsx)(ce, { disabled: o, loading: a, type: `submit`, children: M })),
      (t[72] = M),
      (t[73] = a),
      (t[74] = o),
      (t[75] = U))
    : (U = t[75]);
  let le;
  t[76] !== H || t[77] !== U
    ? ((le = (0, Z.jsx)(j, { children: (0, Z.jsxs)(re, { children: [H, U] }) })),
      (t[76] = H),
      (t[77] = U),
      (t[78] = le))
    : (le = t[78]);
  let ue;
  return (
    t[79] !== a ||
    t[80] !== f ||
    t[81] !== p ||
    t[82] !== oe ||
    t[83] !== B ||
    t[84] !== le ||
    t[85] !== F ||
    t[86] !== I ||
    t[87] !== L ||
    t[88] !== z ||
    t[89] !== k
      ? ((ue = (0, Z.jsxs)(et, {
          title: k,
          busy: a,
          onClose: f,
          onShown: p,
          onSubmit: F,
          children: [I, L, z, oe, B, le],
        })),
        (t[79] = a),
        (t[80] = f),
        (t[81] = p),
        (t[82] = oe),
        (t[83] = B),
        (t[84] = le),
        (t[85] = F),
        (t[86] = I),
        (t[87] = L),
        (t[88] = z),
        (t[89] = k),
        (t[90] = ue))
      : (ue = t[90]),
    ue
  );
}
function Kt(e) {
  return (0, Z.jsx)(
    q,
    { icon: (0, Z.jsx)(G, {}), label: (0, Z.jsx)(c, { ...e }), control: null },
    e.id,
  );
}
var qt,
  Z,
  Jt = e(() => {
    ((qt = W()), ge(), w(), M(), a(), L(), O(), A(), f(), N(), at(), lt(), Pt(), Wt(), (Z = z()));
  });
function Yt(e) {
  let t = (0, Xt.c)(118),
    {
      account: n,
      accountId: i,
      promotion: a,
      onBack: o,
      onClose: s,
      onShown: l,
      onPay: u,
      onAccepted: d,
    } = e,
    f = r(ie),
    p = ee(),
    { client: m } = fe(),
    h = (0, Zt.useRef)(!1),
    g;
  t[0] !== i || t[1] !== a ? ((g = Ot(i, a)), (t[0] = i), (t[1] = a), (t[2] = g)) : (g = t[2]);
  let { data: _, isPending: v, isFetching: y, isError: b, refetch: x } = ne(g),
    te;
  t[3] !== n.entitlement.billing_currency || t[4] !== i || t[5] !== m
    ? ((te = Dt(i, n.entitlement.billing_currency, m)),
      (t[3] = n.entitlement.billing_currency),
      (t[4] = i),
      (t[5] = m),
      (t[6] = te))
    : (te = t[6]);
  let { data: S, isPending: C, isError: w, refetch: T } = ne(te),
    E;
  t[7] !== i || t[8] !== a || t[9] !== f
    ? ((E = {
        mutationFn: async () => {
          let e = await At(i, a);
          return (await Me(f, i), e);
        },
        retry: !1,
      }),
      (t[7] = i),
      (t[8] = a),
      (t[9] = f),
      (t[10] = E))
    : (E = t[10]);
  let { mutate: O, data: k, isPending: A, isError: M } = ae(E),
    N = n.account.plan_type,
    P =
      N === `plus` || N === `go` || N === `pro` || N === `prolite`
        ? S?.currency_config[N]?.month?.amount
        : void 0,
    F;
  t[11] !== P || t[12] !== _ || t[13] !== S
    ? ((F =
        S != null &&
        P != null &&
        _ != null &&
        _.currency.toUpperCase() === S.currency_config.symbol_code.toUpperCase()),
      (t[11] = P),
      (t[12] = _),
      (t[13] = S),
      (t[14] = F))
    : (F = t[14]);
  let I = F,
    L = I && !v && !C && !y && !b && !w,
    R = M ? `unknown` : k,
    z;
  t[15] === n ? (z = t[16]) : ((z = mt(n)), (t[15] = n), (t[16] = z));
  let oe = z,
    B = a.duration?.num_periods ?? 1,
    V = _?.default_payment_method,
    H,
    U,
    le,
    ue,
    W,
    de,
    G,
    pe,
    K,
    me;
  if (
    t[17] !== I ||
    t[18] !== p ||
    t[19] !== A ||
    t[20] !== O ||
    t[21] !== B ||
    t[22] !== d ||
    t[23] !== s ||
    t[24] !== u ||
    t[25] !== l ||
    t[26] !== R ||
    t[27] !== V ||
    t[28] !== P ||
    t[29] !== oe ||
    t[30] !== _ ||
    t[31] !== b ||
    t[32] !== v ||
    t[33] !== S ||
    t[34] !== w ||
    t[35] !== C ||
    t[36] !== a.campaign_id ||
    t[37] !== a.discount ||
    t[38] !== a.summary ||
    t[39] !== L ||
    t[40] !== x ||
    t[41] !== T ||
    t[42] !== f
  ) {
    let e = V?.card_brand?.trim(),
      n;
    t[53] === V?.card_last4
      ? (n = t[54])
      : ((n = V?.card_last4?.trim()), (t[53] = V?.card_last4), (t[54] = n));
    let r = n;
    U = L && !A && R == null;
    let i;
    t[55] !== U ||
    t[56] !== p ||
    t[57] !== O ||
    t[58] !== d ||
    t[59] !== s ||
    t[60] !== u ||
    t[61] !== a.campaign_id ||
    t[62] !== f
      ? ((i = () => {
          !U ||
            h.current ||
            ((h.current = !0),
            Y(f, `chatgpt_claim_subscription_cancellation_promotion_modal_pay_now_button_clicked`),
            u(),
            O(void 0, {
              onSuccess: (e) => {
                if (e !== `success`) {
                  e !== `pending` &&
                    Y(f, `chatgpt_claim_subscription_cancellation_promotion_error`, {
                      promo_id: a.campaign_id,
                      ...(e === `card_declined` ? { error_type: `card_declined` } : {}),
                    });
                  return;
                }
                (Y(f, `chatgpt_claim_subscription_cancellation_promotion_success`, {
                  promo_id: a.campaign_id,
                }),
                  f.get(se).success(
                    p.formatMessage({
                      id: `cancelPromoClaimModal.successfullyClaimedPromotion`,
                      defaultMessage: `You've successfully claimed your promotion`,
                      description: `Notification after the server confirms an immediately invoiced cancellation promotion`,
                    }),
                  ),
                  d(),
                  s());
              },
            }));
        }),
        (t[55] = U),
        (t[56] = p),
        (t[57] = O),
        (t[58] = d),
        (t[59] = s),
        (t[60] = u),
        (t[61] = a.campaign_id),
        (t[62] = f),
        (t[63] = i))
      : (i = t[63]);
    let o = i,
      m = b || w || (!v && !C && !I),
      g = a.summary;
    if (`percentage` in a.discount) {
      let e;
      (t[64] !== B || t[65] !== a.discount.percentage
        ? ((e = (0, Q.jsx)(c, {
            id: `cancelPromoClaimModal.percentageDiscountInfo`,
            defaultMessage: `{discountPercentage}% off for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
            description: `Percentage discount and duration in the retention offer invoice preview`,
            values: { discountPercentage: a.discount.percentage, numPeriods: B },
          })),
          (t[64] = B),
          (t[65] = a.discount.percentage),
          (t[66] = e))
        : (e = t[66]),
        (g = e));
    } else if (`value` in a.discount) {
      let e;
      t[67] !== p || t[68] !== a.discount.currency_code || t[69] !== a.discount.value
        ? ((e = p.formatNumber(a.discount.value, {
            style: `currency`,
            currency: a.discount.currency_code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })),
          (t[67] = p),
          (t[68] = a.discount.currency_code),
          (t[69] = a.discount.value),
          (t[70] = e))
        : (e = t[70]);
      let n;
      (t[71] !== B || t[72] !== e
        ? ((n = (0, Q.jsx)(c, {
            id: `cancelPromoClaimModal.valueDiscountInfo`,
            defaultMessage: `{valueOff} off for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
            description: `Fixed discount and duration in the retention offer invoice preview; valueOff is localized with currency`,
            values: { valueOff: e, numPeriods: B },
          })),
          (t[71] = B),
          (t[72] = e),
          (t[73] = n))
        : (n = t[73]),
        (g = n));
    }
    ((H = et),
      t[74] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((G = (0, Q.jsx)(c, {
            id: `cancelPromoClaimModal.title`,
            defaultMessage: `Confirm changes`,
            description: `Title for modal claiming a subscription cancellation promotion`,
          })),
          (t[74] = G))
        : (G = t[74]),
      (pe = A),
      t[75] !== s || t[76] !== f
        ? ((K = () => {
            (Y(f, `chatgpt_claim_subscription_cancellation_promotion_modal_close`), s());
          }),
          (t[75] = s),
          (t[76] = f),
          (t[77] = K))
        : (K = t[77]),
      t[78] !== l || t[79] !== f
        ? ((me = () => {
            (Y(f, `chatgpt_claim_subscription_cancellation_promotion_modal_shown`), l());
          }),
          (t[78] = l),
          (t[79] = f),
          (t[80] = me))
        : (me = t[80]),
      (le = o),
      t[81] !== m || t[82] !== x || t[83] !== T
        ? ((ue = m
            ? (0, Q.jsx)(j, {
                children: (0, Q.jsx)(Le, {
                  onRetry: () => {
                    (x(), T());
                  },
                }),
              })
            : null),
          (t[81] = m),
          (t[82] = x),
          (t[83] = T),
          (t[84] = ue))
        : (ue = t[84]),
      t[85] !== m || t[86] !== P || t[87] !== _ || t[88] !== S
        ? ((W =
            !m && (_ == null || S == null || P == null)
              ? (0, Q.jsx)(j, { children: (0, Q.jsx)(tt, {}) })
              : null),
          (t[85] = m),
          (t[86] = P),
          (t[87] = _),
          (t[88] = S),
          (t[89] = W))
        : (W = t[89]),
      (de =
        !m && _ != null && S != null && P != null
          ? (0, Q.jsx)(Q.Fragment, {
              children: (0, Q.jsx)(j, {
                children: (0, Q.jsxs)(D, {
                  children: [
                    (0, Q.jsx)(q, {
                      label: (0, Q.jsx)(c, {
                        id: `cancelPromoClaimModal.subscription`,
                        defaultMessage: `ChatGPT {planName} for {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
                        description: `Subscription plan and number of months covered by an immediately invoiced retention offer`,
                        values: { planName: oe, numPeriods: B },
                      }),
                      description: (0, Q.jsx)(c, {
                        id: `settings.consumerBilling.cancellation.promotionBillingCycle`,
                        defaultMessage: `One-time payment, then {planCost}/month after {numPeriods, plural, one {1 month} other {{numPeriods} months}}`,
                        description: `Ongoing billing terms for an immediately invoiced retention offer; planCost includes the actual billing currency`,
                        values: {
                          planCost: p.formatNumber(P, {
                            style: `currency`,
                            currency: S.currency_config.symbol_code,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          }),
                          numPeriods: B,
                        },
                      }),
                      control: Re(p, _.positive_line_item_total_excluding_tax, _.currency),
                    }),
                    _.negative_line_item_total === 0
                      ? null
                      : (0, Q.jsx)(q, {
                          label: (0, Q.jsx)(c, {
                            id: `cancelPromoClaimModal.adjustment`,
                            defaultMessage: `Adjustment`,
                            description: `Prorated credit line in the retention offer invoice preview`,
                          }),
                          description: (0, Q.jsx)(c, {
                            id: `cancelPromoClaimModal.proratedCreditInfo`,
                            defaultMessage: `Prorated credit for the remainder of your {planName} subscription`,
                            description: `Explains the prorated adjustment in a retention invoice preview`,
                            values: { planName: oe },
                          }),
                          control: Re(p, -Math.abs(_.negative_line_item_total), _.currency),
                        }),
                    _.discount_amount === 0
                      ? null
                      : (0, Q.jsx)(q, {
                          label: (0, Q.jsx)(c, {
                            id: `cancelPromoClaimModal.discount`,
                            defaultMessage: `Discount`,
                            description: `Discount line in the retention offer invoice preview`,
                          }),
                          description: g,
                          control: Re(p, -Math.abs(_.discount_amount), _.currency),
                        }),
                    _.amount_due.tax_amount > 0
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(q, {
                              label: (0, Q.jsx)(c, {
                                id: `settings.consumerBilling.cancellation.promotionSubtotal`,
                                defaultMessage: `Subtotal`,
                                description: `Actual subtotal due before tax in the retention invoice preview`,
                              }),
                              control: Re(p, _.amount_due.amount_excluding_tax, _.currency),
                            }),
                            (0, Q.jsx)(q, {
                              label: (0, Q.jsx)(c, {
                                id: `settings.consumerBilling.cancellation.promotionTax`,
                                defaultMessage: `Tax {taxPercent}%`,
                                description: `Tax rate on the retention offer; taxPercent is the rounded rate calculated from actual tax and subtotal`,
                                values: {
                                  taxPercent:
                                    _.amount_due.amount_excluding_tax > 0
                                      ? Math.round(
                                          (_.amount_due.tax_amount /
                                            _.amount_due.amount_excluding_tax) *
                                            100,
                                        )
                                      : 0,
                                },
                              }),
                              control: Re(p, _.amount_due.tax_amount, _.currency),
                            }),
                          ],
                        })
                      : null,
                    (0, Q.jsx)(q, {
                      label: (0, Q.jsx)(c, {
                        id: `settings.consumerBilling.cancellation.promotionDueToday`,
                        defaultMessage: `Total due today`,
                        description: `Actual amount due now, including any credits and tax, in a retention invoice preview`,
                      }),
                      control: Re(p, _.amount_due.amount, _.currency),
                    }),
                    V == null
                      ? null
                      : (0, Q.jsx)(q, {
                          label: (0, Q.jsx)(c, {
                            id: `settings.consumerBilling.cancellation.promotionPaymentMethod`,
                            defaultMessage: `Payment method`,
                            description: `Saved payment method that will be used for the retention offer`,
                          }),
                          control:
                            e && r
                              ? (0, Q.jsx)(c, {
                                  id: `settings.consumerBilling.cancellation.promotionCard`,
                                  defaultMessage: `{brand} ending in {last4}`,
                                  description: `Saved card used for a retention offer; brand is the actual card brand and last4 are only the final four digits`,
                                  values: { brand: e.toUpperCase(), last4: r },
                                })
                              : e || r,
                        }),
                  ],
                }),
              }),
            })
          : null),
      (t[17] = I),
      (t[18] = p),
      (t[19] = A),
      (t[20] = O),
      (t[21] = B),
      (t[22] = d),
      (t[23] = s),
      (t[24] = u),
      (t[25] = l),
      (t[26] = R),
      (t[27] = V),
      (t[28] = P),
      (t[29] = oe),
      (t[30] = _),
      (t[31] = b),
      (t[32] = v),
      (t[33] = S),
      (t[34] = w),
      (t[35] = C),
      (t[36] = a.campaign_id),
      (t[37] = a.discount),
      (t[38] = a.summary),
      (t[39] = L),
      (t[40] = x),
      (t[41] = T),
      (t[42] = f),
      (t[43] = H),
      (t[44] = U),
      (t[45] = le),
      (t[46] = ue),
      (t[47] = W),
      (t[48] = de),
      (t[49] = G),
      (t[50] = pe),
      (t[51] = K),
      (t[52] = me));
  } else
    ((H = t[43]),
      (U = t[44]),
      (le = t[45]),
      (ue = t[46]),
      (W = t[47]),
      (de = t[48]),
      (G = t[49]),
      (pe = t[50]),
      (K = t[51]),
      (me = t[52]));
  let he;
  t[90] === R
    ? (he = t[91])
    : ((he = R == null ? null : (0, Q.jsx)(j, { children: (0, Q.jsx)(ot, { result: R }) })),
      (t[90] = R),
      (t[91] = he));
  let ge = A || R != null,
    _e;
  t[92] !== o || t[93] !== f
    ? ((_e = () => {
        (Y(f, `chatgpt_claim_subscription_cancellation_promotion_modal_back_button_clicked`), o());
      }),
      (t[92] = o),
      (t[93] = f),
      (t[94] = _e))
    : (_e = t[94]);
  let ve;
  t[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, Q.jsx)(c, {
        id: `cancelPromoClaimModal.cancel`,
        defaultMessage: `Cancel`,
        description: `Returns from the retention offer invoice preview without claiming the offer`,
      })),
      (t[95] = ve))
    : (ve = t[95]);
  let ye;
  t[96] !== ge || t[97] !== _e
    ? ((ye = (0, Q.jsx)(ce, {
        color: `secondary`,
        disabled: ge,
        type: `button`,
        onClick: _e,
        children: ve,
      })),
      (t[96] = ge),
      (t[97] = _e),
      (t[98] = ye))
    : (ye = t[98]);
  let be = !U,
    xe;
  t[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, Q.jsx)(c, {
        id: `cancelPromoClaimModal.payNow`,
        defaultMessage: `Pay now`,
        description: `Applies the immediately invoiced retention offer after review of the actual payment amount`,
      })),
      (t[99] = xe))
    : (xe = t[99]);
  let Se;
  t[100] !== A || t[101] !== be
    ? ((Se = (0, Q.jsx)(ce, { disabled: be, loading: A, type: `submit`, children: xe })),
      (t[100] = A),
      (t[101] = be),
      (t[102] = Se))
    : (Se = t[102]);
  let Ce;
  t[103] !== ye || t[104] !== Se
    ? ((Ce = (0, Q.jsx)(j, { children: (0, Q.jsxs)(re, { children: [ye, Se] }) })),
      (t[103] = ye),
      (t[104] = Se),
      (t[105] = Ce))
    : (Ce = t[105]);
  let we;
  return (
    t[106] !== H ||
    t[107] !== le ||
    t[108] !== ue ||
    t[109] !== W ||
    t[110] !== de ||
    t[111] !== he ||
    t[112] !== Ce ||
    t[113] !== G ||
    t[114] !== pe ||
    t[115] !== K ||
    t[116] !== me
      ? ((we = (0, Q.jsxs)(H, {
          title: G,
          busy: pe,
          onClose: K,
          onShown: me,
          onSubmit: le,
          children: [ue, W, de, he, Ce],
        })),
        (t[106] = H),
        (t[107] = le),
        (t[108] = ue),
        (t[109] = W),
        (t[110] = de),
        (t[111] = he),
        (t[112] = Ce),
        (t[113] = G),
        (t[114] = pe),
        (t[115] = K),
        (t[116] = me),
        (t[117] = we))
      : (we = t[117]),
    we
  );
}
var Xt,
  Zt,
  Q,
  Qt = e(() => {
    ((Xt = W()),
      ge(),
      g(),
      (Zt = t(o(), 1)),
      w(),
      a(),
      L(),
      le(),
      K(),
      A(),
      f(),
      N(),
      Ie(),
      Oe(),
      Fe(),
      Ut(),
      at(),
      lt(),
      Pt(),
      Tt(),
      (Q = z()));
  });
function $t(e) {
  let t = (0, an.c)(30),
    { initialReason: n, onClose: r, onShown: i, onSkip: a, onSubmit: o } = e,
    s = ee(),
    [l, u] = (0, on.useState)(n),
    [d, f] = (0, on.useState)(``),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(c, { ...X.surveyTitle })), (t[0] = p))
    : (p = t[0]);
  let m;
  t[1] !== o || t[2] !== l || t[3] !== d
    ? ((m = () => {
        l != null && o(l, l === `something_else` ? d.trim() : ``);
      }),
      (t[1] = o),
      (t[2] = l),
      (t[3] = d),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(j, {
        children: (0, $.jsx)(`p`, {
          className: `text-secondary`,
          children: (0, $.jsx)(c, { ...X.surveyPrompt }),
        }),
      })),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] === l
    ? (g = t[7])
    : ((g = sn.map((e) =>
        (0, $.jsx)(
          ce,
          {
            "aria-pressed": l === e.value,
            color: l === e.value ? `outlineActive` : `outline`,
            size: `dialog`,
            type: `button`,
            onClick: () => u(e.value),
            children: (0, $.jsx)(c, { ...e.message }),
          },
          e.value,
        ),
      )),
      (t[6] = l),
      (t[7] = g));
  let _;
  t[8] === g
    ? (_ = t[9])
    : ((_ = (0, $.jsx)(j, { children: (0, $.jsx)(te, { children: g }) })), (t[8] = g), (t[9] = _));
  let v;
  t[10] !== s || t[11] !== l || t[12] !== d
    ? ((v =
        l === `something_else`
          ? (0, $.jsx)(j, {
              children: (0, $.jsx)(`label`, {
                children: (0, $.jsxs)(te, {
                  children: [
                    (0, $.jsx)(`span`, { children: (0, $.jsx)(c, { ...X.tellUsMoreLabel }) }),
                    (0, $.jsx)(be, {
                      placeholder: s.formatMessage(X.tellUsMorePlaceholder),
                      value: d,
                      onChange: (e) => f(e.currentTarget.value),
                    }),
                  ],
                }),
              }),
            })
          : null),
      (t[10] = s),
      (t[11] = l),
      (t[12] = d),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(c, { ...X.skipButtonLabel })), (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] === a
    ? (b = t[16])
    : ((b = (0, $.jsx)(ce, { color: `secondary`, type: `button`, onClick: a, children: y })),
      (t[15] = a),
      (t[16] = b));
  let x = l == null,
    S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(c, { ...X.submitButtonLabel })), (t[17] = S))
    : (S = t[17]);
  let ne;
  t[18] === x
    ? (ne = t[19])
    : ((ne = (0, $.jsx)(ce, { disabled: x, type: `submit`, children: S })),
      (t[18] = x),
      (t[19] = ne));
  let C;
  t[20] !== ne || t[21] !== b
    ? ((C = (0, $.jsx)(j, { children: (0, $.jsxs)(re, { children: [b, ne] }) })),
      (t[20] = ne),
      (t[21] = b),
      (t[22] = C))
    : (C = t[22]);
  let w;
  return (
    t[23] !== r || t[24] !== i || t[25] !== C || t[26] !== m || t[27] !== _ || t[28] !== v
      ? ((w = (0, $.jsxs)(et, {
          title: p,
          onClose: r,
          onShown: i,
          onSubmit: m,
          children: [h, _, v, C],
        })),
        (t[23] = r),
        (t[24] = i),
        (t[25] = C),
        (t[26] = m),
        (t[27] = _),
        (t[28] = v),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function en(e) {
  let t = (0, an.c)(50),
    { accountId: n, onBack: r, onClose: i, onContinue: a, onShown: o } = e,
    { client: s } = fe(),
    l;
  t[0] === n ? (l = t[1]) : ((l = kt(n)), (t[0] = n), (t[1] = l));
  let { data: u, isSuccess: d, isFetchedAfterMount: f, isFetching: p } = ne(l),
    m,
    h,
    g,
    _,
    v,
    ee,
    y,
    b,
    x,
    S,
    C;
  if (
    t[2] !== s ||
    t[3] !== u ||
    t[4] !== f ||
    t[5] !== p ||
    t[6] !== d ||
    t[7] !== i ||
    t[8] !== a ||
    t[9] !== o
  ) {
    let e = d && f && !p ? xt(u) : [],
      n =
        e.length > 0 &&
        s.getLayer(`3763354965`).get(`web_personalized_things_you_lose_enabled`, !1),
      r = [
        X.thingsYouLoseExtendedLimits,
        X.thingsYouLoseVoiceMode,
        X.thingsYouLoseModelAccess,
        X.thingsYouLoseCustomGpts,
      ];
    ((_ = et),
      t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((y = (0, $.jsx)(c, { ...X.thingsYouLoseTitle })), (t[21] = y))
        : (y = t[21]),
      (b = i),
      (x = o),
      (S = a),
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((C = (0, $.jsx)(j, {
            children: (0, $.jsx)(`p`, {
              className: `text-secondary`,
              children: (0, $.jsx)(c, { ...X.thingsYouLoseBody }),
            }),
          })),
          (t[22] = C))
        : (C = t[22]),
      (g = j),
      (h = te));
    let l = n ? X.thingsYouLosePersonalizedCardTitle : X.thingsYouLoseCardTitle;
    (t[23] === l
      ? (ee = t[24])
      : ((ee = (0, $.jsx)(`p`, { children: (0, $.jsx)(c, { ...l }) })), (t[23] = l), (t[24] = ee)),
      (m = D),
      (v = n ? e.map(nn) : r.map(tn)),
      (t[2] = s),
      (t[3] = u),
      (t[4] = f),
      (t[5] = p),
      (t[6] = d),
      (t[7] = i),
      (t[8] = a),
      (t[9] = o),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v),
      (t[15] = ee),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S),
      (t[20] = C));
  } else
    ((m = t[10]),
      (h = t[11]),
      (g = t[12]),
      (_ = t[13]),
      (v = t[14]),
      (ee = t[15]),
      (y = t[16]),
      (b = t[17]),
      (x = t[18]),
      (S = t[19]),
      (C = t[20]));
  let w;
  t[25] !== m || t[26] !== v
    ? ((w = (0, $.jsx)(m, { children: v })), (t[25] = m), (t[26] = v), (t[27] = w))
    : (w = t[27]);
  let T;
  t[28] !== h || t[29] !== ee || t[30] !== w
    ? ((T = (0, $.jsxs)(h, { children: [ee, w] })),
      (t[28] = h),
      (t[29] = ee),
      (t[30] = w),
      (t[31] = T))
    : (T = t[31]);
  let E;
  t[32] !== g || t[33] !== T
    ? ((E = (0, $.jsx)(g, { children: T })), (t[32] = g), (t[33] = T), (t[34] = E))
    : (E = t[34]);
  let O;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(c, { ...X.backButtonLabel })), (t[35] = O))
    : (O = t[35]);
  let k;
  t[36] === r
    ? (k = t[37])
    : ((k = (0, $.jsx)(ce, { color: `secondary`, type: `button`, onClick: r, children: O })),
      (t[36] = r),
      (t[37] = k));
  let A;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(ce, {
        type: `submit`,
        children: (0, $.jsx)(c, { ...X.continueButtonLabel }),
      })),
      (t[38] = A))
    : (A = t[38]);
  let M;
  t[39] === k
    ? (M = t[40])
    : ((M = (0, $.jsx)(j, { children: (0, $.jsxs)(re, { children: [k, A] }) })),
      (t[39] = k),
      (t[40] = M));
  let ie;
  return (
    t[41] !== _ ||
    t[42] !== E ||
    t[43] !== M ||
    t[44] !== y ||
    t[45] !== b ||
    t[46] !== x ||
    t[47] !== S ||
    t[48] !== C
      ? ((ie = (0, $.jsxs)(_, {
          title: y,
          onClose: b,
          onShown: x,
          onSubmit: S,
          children: [C, E, M],
        })),
        (t[41] = _),
        (t[42] = E),
        (t[43] = M),
        (t[44] = y),
        (t[45] = b),
        (t[46] = x),
        (t[47] = S),
        (t[48] = C),
        (t[49] = ie))
      : (ie = t[49]),
    ie
  );
}
function tn(e) {
  return (0, $.jsx)(q, { label: (0, $.jsx)(c, { ...e }), control: null }, e.id);
}
function nn(e) {
  return (0, $.jsx)(q, { label: (0, $.jsx)(rn, { loss: e }), control: null }, e.feature);
}
function rn(e) {
  let t = (0, an.c)(8),
    { loss: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = {
        advanced_reasoning: {
          generic: X.thingsYouLoseGenericAdvancedReasoning,
          counted: X.thingsYouLosePersonalizedAdvancedReasoning,
        },
        agent: { generic: X.thingsYouLoseGenericAgent, counted: X.thingsYouLosePersonalizedAgent },
        image_generation: {
          generic: X.thingsYouLoseGenericImageGeneration,
          counted: X.thingsYouLosePersonalizedImageGeneration,
        },
        file_uploads: {
          generic: X.thingsYouLoseGenericFileUploads,
          counted: X.thingsYouLosePersonalizedFileUploads,
        },
        deep_research: {
          generic: X.thingsYouLoseGenericDeepResearch,
          counted: X.thingsYouLosePersonalizedDeepResearch,
        },
        data_analysis: {
          generic: X.thingsYouLoseGenericDataAnalysis,
          counted: X.thingsYouLosePersonalizedDataAnalysis,
        },
      }),
      (t[0] = r))
    : (r = t[0]);
  let i = r;
  if (n.feature === `standard_free_limit_exceeded_actions`) {
    let e;
    return (
      t[1] === n.count
        ? (e = t[2])
        : ((e = (0, $.jsx)(c, {
            ...X.thingsYouLosePersonalizedStandardFreeLimitExceededActions,
            values: { count: n.count },
          })),
          (t[1] = n.count),
          (t[2] = e)),
      e
    );
  }
  let a = i[n.feature],
    o = n.count == null ? a.generic : a.counted,
    s;
  t[3] === n.count ? (s = t[4]) : ((s = { count: n.count }), (t[3] = n.count), (t[4] = s));
  let l;
  return (
    t[5] !== o || t[6] !== s
      ? ((l = (0, $.jsx)(c, { ...o, values: s })), (t[5] = o), (t[6] = s), (t[7] = l))
      : (l = t[7]),
    l
  );
}
var an,
  on,
  $,
  sn,
  cn = e(() => {
    ((an = W()),
      ge(),
      (on = t(o(), 1)),
      w(),
      a(),
      L(),
      T(),
      A(),
      f(),
      N(),
      at(),
      Pt(),
      Tt(),
      Wt(),
      ($ = z()),
      (sn = [
        { value: `too_expensive`, message: X.surveyReasonTooExpensive },
        { value: `not_using_it_anymore`, message: X.surveyReasonNotUsingItAnymore },
        { value: `not_useful_enough`, message: X.surveyReasonNotUsefulEnough },
        { value: `something_else`, message: X.surveyReasonSomethingElse },
      ]));
  });
function ln(e) {
  let t = (0, fn.c)(22),
    { account: n, accountId: r, onClose: i } = e,
    a = F(),
    o;
  t[0] !== n || t[1] !== r || t[2] !== a.accountId || t[3] !== a.authMethod
    ? ((o =
        a.authMethod === `chatgpt` &&
        a.accountId === r &&
        n.account.account_id === r &&
        n.account.structure === `personal` &&
        n.entitlement.has_active_subscription === !0 &&
        Ve(n) == null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a.accountId),
      (t[3] = a.authMethod),
      (t[4] = o))
    : (o = t[4]);
  let s = o,
    l;
  t[5] !== n || t[6] !== s
    ? ((l =
        s &&
        n.entitlement.is_eligible_for_cp === !0 &&
        n.entitlement.discount?.promo_campaign_id !== `students-2026-four-month-free` &&
        !ft(n)),
      (t[5] = n),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u = l,
    d;
  t[8] === r ? (d = t[9]) : ((d = Et(r)), (t[8] = r), (t[9] = d));
  let f;
  t[10] !== u || t[11] !== d
    ? ((f = { ...d, enabled: u, staleTime: 0 }), (t[10] = u), (t[11] = d), (t[12] = f))
    : (f = t[12]);
  let { data: p, isPending: m } = ne(f);
  if (!s || (u && m)) {
    let e;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, mn.jsx)(c, {
          id: `cancelSubscriptionModal.title`,
          defaultMessage: `Subscription Cancellation`,
          description: `Title for the consumer subscription cancellation confirmation`,
        })),
        (t[13] = e))
      : (e = t[13]);
    let n;
    t[14] === s
      ? (n = t[15])
      : ((n = (0, mn.jsx)(j, {
          children: s
            ? (0, mn.jsx)(tt, {})
            : (0, mn.jsx)(`p`, {
                role: `alert`,
                children: (0, mn.jsx)(c, {
                  id: `settings.consumerBilling.cancellation.unavailable`,
                  defaultMessage: `This subscription can no longer be canceled here. Review your subscription in Billing.`,
                  description: `Shown when the account or subscription no longer matches the web-managed consumer cancellation entry`,
                }),
              }),
        })),
        (t[14] = s),
        (t[15] = n));
    let r;
    return (
      t[16] !== i || t[17] !== n
        ? ((r = (0, mn.jsx)(et, { title: e, onClose: i, children: n })),
          (t[16] = i),
          (t[17] = n),
          (t[18] = r))
        : (r = t[18]),
      r
    );
  }
  let h = u ? (p ?? null) : null,
    g;
  return (
    t[19] !== e || t[20] !== h
      ? ((g = (0, mn.jsx)(un, { ...e, promotion: h })), (t[19] = e), (t[20] = h), (t[21] = g))
      : (g = t[21]),
    g
  );
}
function un(e) {
  let t = (0, fn.c)(153),
    { accountId: n, account: i, promotion: a, onClose: o } = e,
    s = r(ie),
    l = ee(),
    u = F(),
    { client: d } = fe(),
    f;
  t[0] !== i || t[1] !== d || t[2] !== a
    ? ((f = () => ({ step: ut(i, a, d), previous: [] })),
      (t[0] = i),
      (t[1] = d),
      (t[2] = a),
      (t[3] = f))
    : (f = t[3]);
  let [p, m] = (0, pn.useState)(f),
    h = (0, pn.useRef)(!1),
    { step: g, previous: _ } = p,
    v;
  t[4] !== n || t[5] !== s
    ? ((v = {
        mutationFn: async (e) => {
          let t = await At(n, e);
          return (await Me(s, n), t);
        },
        retry: !1,
      }),
      (t[4] = n),
      (t[5] = s),
      (t[6] = v))
    : (v = t[6]);
  let { mutate: b, data: x, isPending: te, isError: S } = ae(v),
    ne;
  t[7] !== i || t[8] !== n || t[9] !== s
    ? ((ne = {
        mutationFn: (e) => {
          let { returnToGo: t, storage: r } = e;
          return Mt({
            accountId: n,
            account: i,
            returnToGo: t,
            storage: r,
            queryClient: s.queryClient,
          });
        },
        retry: !1,
      }),
      (t[7] = i),
      (t[8] = n),
      (t[9] = s),
      (t[10] = ne))
    : (ne = t[10]);
  let { mutate: C, data: w, isPending: T, reset: E } = ae(ne),
    D = S ? `unknown` : x,
    O = te || T,
    k = D != null,
    A;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e, t) => {
        let n = t === void 0 || t;
        m((t) => {
          let { step: r, previous: i } = t;
          return { step: e, previous: n ? [...i, r] : [] };
        });
      }),
      (t[11] = A))
    : (A = t[11]);
  let re = A,
    j,
    M;
  t[12] !== i ||
  t[13] !== O ||
  t[14] !== k ||
  t[15] !== o ||
  t[16] !== _ ||
  t[17] !== s ||
  t[18] !== g.destination ||
  t[19] !== g.page ||
  t[20] !== g.reason ||
  t[21] !== g.variant
    ? ((j = () => {
        if (O || k) return;
        let e = _.at(-1);
        if (e == null) {
          M();
          return;
        }
        m({ step: e, previous: _.slice(0, -1) });
      }),
      (M = () => {
        if (!O) {
          bb41: switch (g.page) {
            case `confirm`:
              _.some(dn) || Y(s, `chatgpt_cancel_subscription_modal_dismissed`);
              break bb41;
            case `plus_offer`:
              Y(s, `chatgpt_cancel_subscription_plus_offer_modal_dismissed`);
              break bb41;
            case `go_offer`:
            case `go_trial`:
              Y(s, `chatgpt_cancel_subscription_go_upsell_modal_dismissed`);
              break bb41;
            case `survey`:
              Y(s, `chatgpt_cancel_subscription_downgrade_survey_modal_dismissed`, {
                ..._t(i, g.variant),
                ...(g.reason == null ? {} : { survey_reason: g.reason }),
              });
              break bb41;
            case `things_you_lose`:
              Y(s, `chatgpt_cancel_subscription_things_you_lose_modal_dismissed`, _t(i, g.variant));
              break bb41;
            case `plus_trial`:
              Y(
                s,
                `chatgpt_cancel_subscription_plus_trial_plan_card_modal_dismissed`,
                _t(i, g.destination.variant, g.destination),
              );
              break bb41;
            case `go_card`:
              Y(
                s,
                `chatgpt_cancel_subscription_go_lower_tier_plan_card_modal_dismissed`,
                _t(i, g.destination.variant, g.destination),
              );
              break bb41;
            case `claim`:
            case `go_change`:
            case `pro_change`:
            case `pro_offer`:
          }
          o();
        }
      }),
      (t[12] = i),
      (t[13] = O),
      (t[14] = k),
      (t[15] = o),
      (t[16] = _),
      (t[17] = s),
      (t[18] = g.destination),
      (t[19] = g.page),
      (t[20] = g.reason),
      (t[21] = g.variant),
      (t[22] = j),
      (t[23] = M))
    : ((j = t[22]), (M = t[23]));
  let N;
  t[24] !== i ||
  t[25] !== a ||
  t[26] !== s ||
  t[27] !== g.page ||
  t[28] !== g.reason ||
  t[29] !== g.skipPromotion ||
  t[30] !== g.variant
    ? ((N = () => {
        bb75: switch (g.page) {
          case `confirm`:
            (Y(s, `chatgpt_cancel_subscription_modal_shown`),
              !g.skipPromotion &&
                a != null &&
                Y(s, `chatgpt_cancel_subscription_modal_with_cancellation_promo_shown`, {
                  promo_id: a.campaign_id,
                }));
            break bb75;
          case `plus_offer`:
            Y(s, `chatgpt_cancel_subscription_plus_offer_modal_shown`);
            break bb75;
          case `go_offer`:
          case `go_trial`:
            Y(s, `chatgpt_cancel_subscription_go_upsell_modal_shown`);
            break bb75;
          case `survey`:
            Y(s, `chatgpt_cancel_subscription_downgrade_survey_modal_shown`, {
              ..._t(i, g.variant),
              ...(g.reason == null ? {} : { survey_reason: g.reason }),
            });
            break bb75;
          case `things_you_lose`:
            Y(s, `chatgpt_cancel_subscription_things_you_lose_modal_shown`, _t(i, g.variant));
            break bb75;
          case `claim`:
          case `go_card`:
          case `go_change`:
          case `plus_trial`:
          case `pro_change`:
          case `pro_offer`:
        }
      }),
      (t[24] = i),
      (t[25] = a),
      (t[26] = s),
      (t[27] = g.page),
      (t[28] = g.reason),
      (t[29] = g.skipPromotion),
      (t[30] = g.variant),
      (t[31] = N))
    : (N = t[31]);
  let P = N,
    I;
  t[32] !== i ||
  t[33] !== O ||
  t[34] !== b ||
  t[35] !== k ||
  t[36] !== l ||
  t[37] !== o ||
  t[38] !== a ||
  t[39] !== s ||
  t[40] !== g.destination ||
  t[41] !== g.page
    ? ((I = () => {
        if (O || k || h.current) return;
        if (a == null) {
          re({ page: `confirm`, skipPromotion: !0 }, !1);
          return;
        }
        let e = g.page === `plus_trial` ? g.destination : void 0;
        if (
          (e != null &&
            Y(
              s,
              `chatgpt_cancel_subscription_plus_trial_plan_card_modal_start_trial_clicked`,
              _t(i, e.variant, e),
            ),
          a.is_immediately_invoiced)
        ) {
          (g.page === `confirm` &&
            Y(s, `chatgpt_cancel_subscription_modal_claim_offer_offer_button_clicked`),
            g.page === `plus_offer`
              ? m({
                  step: { page: `claim`, promotion: a },
                  previous: [{ page: `confirm`, skipPromotion: !1 }],
                })
              : re({ page: `claim`, promotion: a, destination: e }));
          return;
        }
        ((h.current = !0),
          b(a, {
            onSuccess: (t) => {
              if (t !== `success`) {
                t !== `pending` &&
                  Y(s, `chatgpt_claim_subscription_cancellation_promotion_error`, {
                    promo_id: a.campaign_id,
                  });
                return;
              }
              (Y(s, `chatgpt_claim_subscription_cancellation_promotion_success`, {
                promo_id: a.campaign_id,
              }),
                e != null &&
                  Y(
                    s,
                    `chatgpt_cancel_subscription_plus_trial_plan_card_modal_trial_accepted`,
                    _t(i, e.variant, e),
                  ));
              let n = `percentage` in a.discount && a.discount.percentage === 100;
              (s.get(se).success(
                n
                  ? l.formatMessage({
                      id: `cancelSubscriptionModal.successfullyUpdatedSubscriptionWithFreePromo`,
                      defaultMessage: `Your subscription has been updated and will auto-renew for free during your next billing cycle`,
                      description: `Success notification after a scheduled free retention promotion is applied`,
                    })
                  : l.formatMessage({
                      id: `cancelSubscriptionModal.successfullyUpdatedSubscriptionWithScheduledDiscountPromo`,
                      defaultMessage: `Your subscription has been updated and will auto-renew at the discounted rate during your next billing cycle`,
                      description: `Success notification after a scheduled discounted retention promotion is applied`,
                    }),
              ),
                o());
            },
            onSettled: () => {
              h.current = !1;
            },
          }));
      }),
      (t[32] = i),
      (t[33] = O),
      (t[34] = b),
      (t[35] = k),
      (t[36] = l),
      (t[37] = o),
      (t[38] = a),
      (t[39] = s),
      (t[40] = g.destination),
      (t[41] = g.page),
      (t[42] = I))
    : (I = t[42]);
  let L = I,
    R;
  t[43] !== i ||
  t[44] !== n ||
  t[45] !== u ||
  t[46] !== O ||
  t[47] !== C ||
  t[48] !== k ||
  t[49] !== d ||
  t[50] !== l ||
  t[51] !== o ||
  t[52] !== s
    ? ((R = (e) => {
        if (O || k || h.current) return;
        let t = i.last_active_subscription.subscription_id ?? i.entitlement.subscription_id;
        if (t == null) return;
        e || Y(s, `chatgpt_cancel_subscription_modal_confirmation_button_clicked`);
        let r;
        if (e)
          try {
            r = window.sessionStorage;
          } catch {}
        let a = performance.now();
        ((h.current = !0),
          C(
            { returnToGo: e, storage: r },
            {
              onSuccess: (r) => {
                if (r === `reload` || (e && r === `failed`)) {
                  window.location.reload();
                  return;
                }
                if (r === `state_changed`) {
                  (o(), Me(s, n));
                  return;
                }
                if (r === `returned_to_go`) {
                  (s.get(se).info(
                    l.formatMessage({
                      id: `cancelSubscriptionGoUpsellModal.returnToGoSuccess`,
                      defaultMessage: `You returned to Go`,
                      description: `Notification after an authoritative account read confirms the Go-origin Plus trial ended and Go was restored`,
                    }),
                  ),
                    o());
                  return;
                }
                if (r !== `canceled` && r !== `deactivated`) {
                  r === `failed` && Y(s, `chatgpt_cancel_subscription_modal_cancel_failed`);
                  return;
                }
                if (
                  (Y(s, `chatgpt_cancel_subscription_modal_cancel_success`),
                  s.get(se).info(
                    r === `deactivated`
                      ? l.formatMessage({
                          id: `cancelSubscriptionModal.cancelPlusTrialSuccess`,
                          defaultMessage: `Your Plus trial has ended. You are now on Free.`,
                          description: `Notification after an authoritative account read confirms immediate deactivation of a Go-origin Plus trial`,
                        })
                      : l.formatMessage({
                          id: `settings.consumerBilling.cancellation.succeeded`,
                          defaultMessage: `Your subscription has been canceled`,
                          description: `Notification after the backend confirms cancellation of a consumer subscription`,
                        }),
                  ),
                  Me(s, n),
                  d.checkGate(`3376055906`))
                ) {
                  let e = new URL(`https://openai.qualtrics.com/jfe/form/SV_eW3mdeRdMrpnPLw`);
                  (e.searchParams.set(`subscription_id`, t),
                    i.account.plan_type != null &&
                      e.searchParams.set(`plan_type`, i.account.plan_type),
                    u.userId != null && e.searchParams.set(`oai_user`, u.userId),
                    y({
                      href: e.toString(),
                      disposition: `new-tab`,
                      initiator: `open_in_browser_bridge`,
                      openTarget: `external-browser`,
                    }),
                    Y(s, `chatgpt_subscription_cancellation_survey_shown`, {
                      cancel_to_window_open_ms: Math.round(performance.now() - a),
                    }));
                }
                o();
              },
              onSettled: () => {
                h.current = !1;
              },
            },
          ));
      }),
      (t[43] = i),
      (t[44] = n),
      (t[45] = u),
      (t[46] = O),
      (t[47] = C),
      (t[48] = k),
      (t[49] = d),
      (t[50] = l),
      (t[51] = o),
      (t[52] = s),
      (t[53] = R))
    : (R = t[53]);
  let z = R,
    oe;
  t[54] !== i ||
  t[55] !== d ||
  t[56] !== a ||
  t[57] !== s ||
  t[58] !== g.page ||
  t[59] !== g.reason ||
  t[60] !== g.variant
    ? ((oe = (e, t) => {
        let n = t === void 0 ? `` : t;
        if (g.page !== `survey` && g.page !== `things_you_lose`) return;
        let r = _t(i, g.variant);
        if (
          (g.page === `things_you_lose`
            ? Y(s, `chatgpt_cancel_subscription_things_you_lose_modal_continue_clicked`, r)
            : e == null
              ? Y(s, `chatgpt_cancel_subscription_downgrade_survey_modal_skipped`, {
                  ...r,
                  ...(g.reason == null ? {} : { survey_reason: g.reason }),
                })
              : Y(s, `chatgpt_cancel_subscription_downgrade_survey_modal_submitted`, {
                  ..._t(i, g.variant, void 0, n),
                  survey_reason: e,
                }),
          g.variant === `survey_then_control` || g.variant === `things_you_lose_then_control`)
        ) {
          re(e === `too_expensive` ? { page: `go_offer` } : dt(i, a, d), !1);
          return;
        }
        let o = gt(g.page, g.variant, e, a);
        (Y(
          s,
          g.page === `survey`
            ? `chatgpt_cancel_subscription_downgrade_survey_route_decided`
            : `chatgpt_cancel_subscription_things_you_lose_route_decided`,
          _t(i, g.variant, o, n),
        ),
          Y(
            s,
            o.route === `plus_trial`
              ? `chatgpt_cancel_subscription_plus_trial_plan_card_modal_shown`
              : `chatgpt_cancel_subscription_go_lower_tier_plan_card_modal_shown`,
            _t(i, g.variant, o),
          ),
          re({ page: o.route === `plus_trial` ? `plus_trial` : `go_card`, destination: o }));
      }),
      (t[54] = i),
      (t[55] = d),
      (t[56] = a),
      (t[57] = s),
      (t[58] = g.page),
      (t[59] = g.reason),
      (t[60] = g.variant),
      (t[61] = oe))
    : (oe = t[61]);
  let B = oe,
    V;
  t[62] === w
    ? (V = t[63])
    : ((V =
        w != null && ![`canceled`, `deactivated`, `returned_to_go`].includes(w)
          ? (0, mn.jsx)(`p`, {
              role: `alert`,
              children: (0, mn.jsx)(c, {
                id: `settings.consumerBilling.cancellation.requestFailed`,
                defaultMessage: `{kind, select, return_pending {Your earlier request may still be processing. Reload Billing to check your subscription before trying again.} storage_unavailable {We couldn't safely record your request in this browser. Enable browser storage before returning to Go.} return_ready {Your subscription is unchanged. You can try returning to Go again.} other {We couldn't cancel your subscription. Please try again.}}`,
                description: `Failure or reconciliation status in cancellation. A pending Go-trial request must not be resent; unavailable browser storage prevents sending it.`,
                values: { kind: w },
              }),
            })
          : null),
      (t[62] = w),
      (t[63] = V));
  let H = V;
  switch (g.page) {
    case `survey`: {
      let e;
      t[64] === B ? (e = t[65]) : ((e = () => B()), (t[64] = B), (t[65] = e));
      let n;
      return (
        t[66] !== M || t[67] !== B || t[68] !== P || t[69] !== g.reason || t[70] !== e
          ? ((n = (0, mn.jsx)(
              $t,
              { initialReason: g.reason, onClose: M, onShown: P, onSkip: e, onSubmit: B },
              `survey`,
            )),
            (t[66] = M),
            (t[67] = B),
            (t[68] = P),
            (t[69] = g.reason),
            (t[70] = e),
            (t[71] = n))
          : (n = t[71]),
        n
      );
    }
    case `things_you_lose`: {
      let e;
      t[72] === B ? (e = t[73]) : ((e = () => B()), (t[72] = B), (t[73] = e));
      let r;
      t[74] !== i || t[75] !== o || t[76] !== s || t[77] !== g.variant
        ? ((r = () => {
            (Y(
              s,
              `chatgpt_cancel_subscription_things_you_lose_modal_back_clicked`,
              _t(i, g.variant),
            ),
              o());
          }),
          (t[74] = i),
          (t[75] = o),
          (t[76] = s),
          (t[77] = g.variant),
          (t[78] = r))
        : (r = t[78]);
      let a;
      return (
        t[79] !== n || t[80] !== M || t[81] !== P || t[82] !== e || t[83] !== r
          ? ((a = (0, mn.jsx)(
              en,
              { accountId: n, onClose: M, onShown: P, onContinue: e, onBack: r },
              `things_you_lose`,
            )),
            (t[79] = n),
            (t[80] = M),
            (t[81] = P),
            (t[82] = e),
            (t[83] = r),
            (t[84] = a))
          : (a = t[84]),
        a
      );
    }
    case `confirm`: {
      let e = g.skipPromotion ? null : a,
        r =
          k ||
          (i.last_active_subscription.subscription_id == null &&
            i.entitlement.subscription_id == null),
        o;
      t[85] === z ? (o = t[86]) : ((o = () => z(!1)), (t[85] = z), (t[86] = o));
      let s;
      return (
        t[87] !== L ||
        t[88] !== i ||
        t[89] !== n ||
        t[90] !== j ||
        t[91] !== O ||
        t[92] !== H ||
        t[93] !== D ||
        t[94] !== M ||
        t[95] !== P ||
        t[96] !== e ||
        t[97] !== r ||
        t[98] !== o
          ? ((s = (0, mn.jsx)(
              Ft,
              {
                account: i,
                accountId: n,
                promotion: e,
                busy: O,
                disabled: r,
                claimError: D,
                cancellationError: H,
                onCancel: o,
                onClaim: L,
                onBack: j,
                onClose: M,
                onShown: P,
              },
              `confirm`,
            )),
            (t[87] = L),
            (t[88] = i),
            (t[89] = n),
            (t[90] = j),
            (t[91] = O),
            (t[92] = H),
            (t[93] = D),
            (t[94] = M),
            (t[95] = P),
            (t[96] = e),
            (t[97] = r),
            (t[98] = o),
            (t[99] = s))
          : (s = t[99]),
        s
      );
    }
    case `claim`: {
      let e, r, a;
      t[100] !== i || t[101] !== s || t[102] !== g.destination
        ? ((e = () => {
            g.destination != null &&
              Y(
                s,
                `chatgpt_cancel_subscription_plus_trial_confirmation_modal_shown`,
                _t(i, g.destination.variant, g.destination),
              );
          }),
          (r = () => {
            g.destination != null &&
              Y(
                s,
                `chatgpt_cancel_subscription_plus_trial_confirmation_modal_pay_now_clicked`,
                _t(i, g.destination.variant, g.destination),
              );
          }),
          (a = () => {
            g.destination != null &&
              Y(
                s,
                `chatgpt_cancel_subscription_plus_trial_confirmation_modal_trial_accepted`,
                _t(i, g.destination.variant, g.destination),
              );
          }),
          (t[100] = i),
          (t[101] = s),
          (t[102] = g.destination),
          (t[103] = e),
          (t[104] = r),
          (t[105] = a))
        : ((e = t[103]), (r = t[104]), (a = t[105]));
      let c;
      return (
        t[106] !== i ||
        t[107] !== n ||
        t[108] !== j ||
        t[109] !== o ||
        t[110] !== g.promotion ||
        t[111] !== e ||
        t[112] !== r ||
        t[113] !== a
          ? ((c = (0, mn.jsx)(
              Yt,
              {
                account: i,
                accountId: n,
                promotion: g.promotion,
                onBack: j,
                onClose: o,
                onShown: e,
                onPay: r,
                onAccepted: a,
              },
              g.promotion.campaign_id,
            )),
            (t[106] = i),
            (t[107] = n),
            (t[108] = j),
            (t[109] = o),
            (t[110] = g.promotion),
            (t[111] = e),
            (t[112] = r),
            (t[113] = a),
            (t[114] = c))
          : (c = t[114]),
        c
      );
    }
    case `go_change`: {
      let e;
      return (
        t[115] !== i || t[116] !== n || t[117] !== j || t[118] !== o
          ? ((e = (0, mn.jsx)(Je, {
              account: i,
              accountId: n,
              targetPlan: U.GO,
              onBack: j,
              onClose: o,
            })),
            (t[115] = i),
            (t[116] = n),
            (t[117] = j),
            (t[118] = o),
            (t[119] = e))
          : (e = t[119]),
        e
      );
    }
    case `pro_change`: {
      let e;
      return (
        t[120] !== i || t[121] !== n || t[122] !== j || t[123] !== o
          ? ((e = (0, mn.jsx)(Je, {
              account: i,
              accountId: n,
              targetPlan: U.PROLITE,
              onBack: j,
              onClose: o,
            })),
            (t[120] = i),
            (t[121] = n),
            (t[122] = j),
            (t[123] = o),
            (t[124] = e))
          : (e = t[124]),
        e
      );
    }
    case `go_card`:
    case `go_offer`:
    case `go_trial`:
    case `plus_offer`:
    case `plus_trial`:
    case `pro_offer`: {
      let e;
      t[125] !== i ||
      t[126] !== d ||
      t[127] !== a ||
      t[128] !== s ||
      t[129] !== g.destination ||
      t[130] !== g.page
        ? ((e = () => {
            g.page === `plus_trial` || g.page === `go_card`
              ? (Y(
                  s,
                  g.page === `plus_trial`
                    ? `chatgpt_cancel_subscription_plus_trial_plan_card_modal_decline_clicked`
                    : `chatgpt_cancel_subscription_go_lower_tier_plan_card_modal_decline_clicked`,
                  _t(i, g.destination.variant, g.destination),
                ),
                re({ page: `confirm`, skipPromotion: !0 }))
              : g.page === `pro_offer`
                ? re(dt(i, a, d), !1)
                : re({ page: `confirm`, skipPromotion: !0 }, g.page === `go_trial`);
          }),
          (t[125] = i),
          (t[126] = d),
          (t[127] = a),
          (t[128] = s),
          (t[129] = g.destination),
          (t[130] = g.page),
          (t[131] = e))
        : (e = t[131]);
      let r;
      t[132] !== L ||
      t[133] !== i ||
      t[134] !== w ||
      t[135] !== E ||
      t[136] !== s ||
      t[137] !== g.destination ||
      t[138] !== g.page ||
      t[139] !== z
        ? ((r = () => {
            bb288: switch (g.page) {
              case `plus_offer`:
              case `plus_trial`:
                L();
                break bb288;
              case `go_trial`:
                (w === `return_ready` && E(), z(!0));
                break bb288;
              case `pro_offer`:
                re({ page: `pro_change` });
                break bb288;
              case `go_card`:
                (Y(
                  s,
                  `chatgpt_cancel_subscription_go_lower_tier_plan_card_modal_switch_clicked`,
                  _t(i, g.destination.variant, g.destination),
                ),
                  re({ page: `go_change` }));
                break bb288;
              case `go_offer`:
                re({ page: `go_change` });
            }
          }),
          (t[132] = L),
          (t[133] = i),
          (t[134] = w),
          (t[135] = E),
          (t[136] = s),
          (t[137] = g.destination),
          (t[138] = g.page),
          (t[139] = z),
          (t[140] = r))
        : (r = t[140]);
      let o;
      return (
        t[141] !== i ||
        t[142] !== n ||
        t[143] !== O ||
        t[144] !== H ||
        t[145] !== D ||
        t[146] !== k ||
        t[147] !== M ||
        t[148] !== P ||
        t[149] !== g.page ||
        t[150] !== e ||
        t[151] !== r
          ? ((o = (0, mn.jsx)(
              Gt,
              {
                account: i,
                accountId: n,
                kind: g.page,
                busy: O,
                disabled: k,
                error: D,
                cancellationError: H,
                onShown: P,
                onClose: M,
                onDecline: e,
                onAccept: r,
              },
              g.page,
            )),
            (t[141] = i),
            (t[142] = n),
            (t[143] = O),
            (t[144] = H),
            (t[145] = D),
            (t[146] = k),
            (t[147] = M),
            (t[148] = P),
            (t[149] = g.page),
            (t[150] = e),
            (t[151] = r),
            (t[152] = o))
          : (o = t[152]),
        o
      );
    }
  }
}
function dn(e) {
  return e.page === `plus_trial` || e.page === `go_card`;
}
var fn, pn, mn;
e(() => {
  ((fn = W()),
    ge(),
    g(),
    (pn = t(o(), 1)),
    w(),
    ye(),
    L(),
    m(),
    le(),
    K(),
    N(),
    i(),
    He(),
    $e(),
    Oe(),
    Ht(),
    Ut(),
    at(),
    Jt(),
    Qt(),
    Pt(),
    Tt(),
    cn(),
    (mn = z()));
})();
export { ln as CancellationDialog };
//# sourceMappingURL=dialog-ac1180167d3a.js.map
