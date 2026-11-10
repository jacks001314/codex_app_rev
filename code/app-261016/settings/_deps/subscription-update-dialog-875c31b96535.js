import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IO as n,
  JO as r,
  KO as i,
  LNt as a,
  LO as o,
  MNt as s,
  NNt as c,
  PBt as l,
  RO as u,
  WO as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  okt as h,
  qO as g,
  tkt as _,
  zO as v,
} from "./app-shared-2feb3d4c6fcc.js";
import { Xzr as y, dAt as b, tLr as x } from "./app-initial-ad16eaadf81f.js";
import { C as S, b as C, i as ee, w as te } from "./pricing-promotions-5aab26ebeddd.js";
import { r as w, t as ne } from "./plan-names-711c0863dd98.js";
import { n as re } from "./pricing-889ac3693bce.js";
import { n as ie, r as T } from "./subscription-update-plan-b5de7979cb69.js";
import { i as E, n as ae, r as oe } from "./offer-notice-dbcb457511fb.js";
function D(e) {
  let t = (0, ue.c)(159),
    {
      confirmButtonLabel: r,
      disableConfirm: a,
      error: c,
      isUpdating: l,
      onBack: f,
      onCancel: m,
      onConfirm: b,
      onGoToWeb: x,
      onOpenChange: S,
      onShown: C,
      paymentMethodControls: w,
      pricingInfo: T,
      scheduledPrice: E,
      subscriptionUpdate: D,
    } = e,
    A = a !== void 0 && a,
    j = h(),
    M = D.kind !== `saved_card_upgrade`,
    N;
  t[0] !== A || t[1] !== l || t[2] !== b
    ? ((N = (e) => {
        (e.preventDefault(), !l && !A && b());
      }),
      (t[0] = A),
      (t[1] = l),
      (t[2] = b),
      (t[3] = N))
    : (N = t[3]);
  let de = N,
    P,
    F,
    I;
  if (`renewal` in D) {
    P = null;
    let e;
    (t[4] === D.renewal
      ? (e = t[5])
      : ((e = (0, k.jsx)(ae, { ...D.renewal })), (t[4] = D.renewal), (t[5] = e)),
      (F = e));
    let n;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, k.jsx)(_, {
          id: `planRenewalModal.confirm`,
          defaultMessage: `Confirm`,
          description: `Plan renewal modal confirm button`,
        })),
        (t[6] = n))
      : (n = t[6]),
      (I = n));
  } else if (D.kind === `saved_card_upgrade`) {
    let { preview: e } = D,
      n = D.upgrade?.promoCampaign === ee,
      r,
      i,
      a,
      o,
      c;
    if (
      t[7] !== j ||
      t[8] !== n ||
      t[9] !== e.currency ||
      t[10] !== e.positive_line_item_total ||
      t[11] !== e.renewal_date ||
      t[12] !== T ||
      t[13] !== D.fullyCoveredByWallet ||
      t[14] !== D.minorUnitExponent ||
      t[15] !== D.paymentMethod?.card_brand ||
      t[16] !== D.paymentMethod?.card_last4 ||
      t[17] !== D.promotionDisclaimer ||
      t[18] !== D.updatedPlan
    ) {
      let s =
          n && T != null
            ? re({
                intl: j,
                amount: T.monthlyAmounts.plus,
                currencyCode: T.currencyCode,
                minorUnitExponent: T.minorUnitExponent,
              })
            : null,
        l;
      t[25] === D.updatedPlan ? (l = t[26]) : ((l = ie(D.updatedPlan)), (t[25] = D.updatedPlan), (t[26] = l));
      let u = l;
      if (t[27] !== D.paymentMethod?.card_brand || t[28] !== D.paymentMethod?.card_last4) {
        let e = D.paymentMethod?.card_brand?.trim() ?? ``,
          n;
        t[30] === D.paymentMethod?.card_last4
          ? (n = t[31])
          : ((n = D.paymentMethod?.card_last4?.trim() ?? ``),
            (t[30] = D.paymentMethod?.card_last4),
            (t[31] = n));
        let i = n;
        ((r = e),
          e && i ? (r = `${e.toUpperCase()} *${i}`) : i && (r = `*${i}`),
          (t[27] = D.paymentMethod?.card_brand),
          (t[28] = D.paymentMethod?.card_last4),
          (t[29] = r));
      } else r = t[29];
      let d;
      (t[32] !== n || t[33] !== D.fullyCoveredByWallet || t[34] !== D.promotionDisclaimer || t[35] !== u
        ? ((d =
            n || D.fullyCoveredByWallet || D.promotionDisclaimer != null
              ? null
              : (0, k.jsx)(_, {
                  id: `settings.usage.pricingPlanPage.savedCardUpgrade.description.numberedTiers`,
                  defaultMessage: `You're upgrading to ChatGPT {targetPlan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}. This will charge your saved payment method`,
                  description: `Description for a saved-card plan upgrade. targetPlan is the canonical plan type; the Pro tier names are Pro 100, Pro 200, and Pro 500. Pro, Go, Plus, and ChatGPT are product names. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                  values: { targetPlan: u },
                })),
          (t[32] = n),
          (t[33] = D.fullyCoveredByWallet),
          (t[34] = D.promotionDisclaimer),
          (t[35] = u),
          (t[36] = d))
        : (d = t[36]),
        (P = d),
        (o = `flex flex-col text-sm`));
      let f;
      t[37] === u
        ? (f = t[38])
        : ((f = (0, k.jsx)(_, { ...ne.targetPlan, values: { plan: u } })), (t[37] = u), (t[38] = f));
      let p;
      t[39] !== j ||
      t[40] !== e.currency ||
      t[41] !== e.positive_line_item_total ||
      t[42] !== D.minorUnitExponent
        ? ((p = O(j, e.positive_line_item_total, e.currency, D.minorUnitExponent)),
          (t[39] = j),
          (t[40] = e.currency),
          (t[41] = e.positive_line_item_total),
          (t[42] = D.minorUnitExponent),
          (t[43] = p))
        : (p = t[43]);
      let m;
      (t[44] === p ? (m = t[45]) : ((m = (0, k.jsx)(`span`, { children: p })), (t[44] = p), (t[45] = m)),
        t[46] !== m || t[47] !== f
          ? ((c = (0, k.jsxs)(`div`, {
              className: `flex justify-between gap-4 font-semibold`,
              children: [f, m],
            })),
            (t[46] = m),
            (t[47] = f),
            (t[48] = c))
          : (c = t[48]),
        (i = `mt-0.5 text-xs text-secondary`),
        (a =
          D.promotionDisclaimer ??
          (n && s != null && e.renewal_date != null
            ? (0, k.jsx)(_, {
                ...te.goToPlusNativeTrialBillingCycle,
                values: {
                  currencyCode: e.currency.toUpperCase(),
                  currencySign: s.parts.find(le)?.value ?? ``,
                  planCost: s.parts.filter(ce).map(se).join(``).trim(),
                  renewalDateFormatted: j.formatDate(e.renewal_date, {
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`,
                    timeZone: `UTC`,
                  }),
                },
              })
            : (0, k.jsx)(_, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle`,
                defaultMessage: `Billed monthly, starting today`,
                description: `Billing cycle information in the Pro upgrade dialog`,
              }))),
        (t[7] = j),
        (t[8] = n),
        (t[9] = e.currency),
        (t[10] = e.positive_line_item_total),
        (t[11] = e.renewal_date),
        (t[12] = T),
        (t[13] = D.fullyCoveredByWallet),
        (t[14] = D.minorUnitExponent),
        (t[15] = D.paymentMethod?.card_brand),
        (t[16] = D.paymentMethod?.card_last4),
        (t[17] = D.promotionDisclaimer),
        (t[18] = D.updatedPlan),
        (t[19] = r),
        (t[20] = i),
        (t[21] = a),
        (t[22] = o),
        (t[23] = c),
        (t[24] = P));
    } else ((r = t[19]), (i = t[20]), (a = t[21]), (o = t[22]), (c = t[23]), (P = t[24]));
    let l;
    t[49] !== i || t[50] !== a
      ? ((l = (0, k.jsx)(`span`, { className: i, children: a })), (t[49] = i), (t[50] = a), (t[51] = l))
      : (l = t[51]);
    let u;
    t[52] !== j ||
    t[53] !== e.currency ||
    t[54] !== e.negative_line_item_total ||
    t[55] !== D.minorUnitExponent
      ? ((u =
          e.negative_line_item_total === 0
            ? null
            : (0, k.jsxs)(`div`, {
                className: `mt-4`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex justify-between gap-4 font-semibold`,
                    children: [
                      (0, k.jsx)(_, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.adjustment`,
                        defaultMessage: `Adjustment`,
                        description: `Label for the prorated credit deducted from the new subscription price in the plan-upgrade confirmation dialog`,
                      }),
                      (0, k.jsx)(`span`, {
                        children: O(j, e.negative_line_item_total, e.currency, D.minorUnitExponent),
                      }),
                    ],
                  }),
                  (0, k.jsx)(`span`, {
                    className: `text-xs text-secondary`,
                    children: (0, k.jsx)(_, {
                      id: `settings.usage.pricingPlanPage.subscriptionUpdate.proratedCredit.currentSubscription`,
                      defaultMessage: `Prorated credit for the remainder of your current subscription`,
                      description: `Description below the adjustment amount in a plan-upgrade review, including after a past-due payment. Explains the credit for unused time on the current subscription. No placeholders.`,
                    }),
                  }),
                ],
              })),
        (t[52] = j),
        (t[53] = e.currency),
        (t[54] = e.negative_line_item_total),
        (t[55] = D.minorUnitExponent),
        (t[56] = u))
      : (u = t[56]);
    let d;
    t[57] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, k.jsx)(`hr`, { className: `my-4 border-default` })), (t[57] = d))
      : (d = t[57]);
    let f;
    t[58] !== j ||
    t[59] !== e.amount_due.amount_excluding_tax ||
    t[60] !== e.amount_due.tax_amount ||
    t[61] !== e.currency ||
    t[62] !== D.minorUnitExponent
      ? ((f =
          e.amount_due.tax_amount > 0
            ? (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex justify-between gap-4`,
                    children: [
                      (0, k.jsx)(_, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.subtotal`,
                        defaultMessage: `Subtotal`,
                        description: `Subtotal in the Pro upgrade dialog`,
                      }),
                      (0, k.jsx)(`span`, {
                        children: O(j, e.amount_due.amount_excluding_tax, e.currency, D.minorUnitExponent),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `mt-2 flex justify-between gap-4`,
                    children: [
                      (0, k.jsx)(_, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.tax`,
                        defaultMessage: `Tax`,
                        description: `Tax in the Pro upgrade dialog`,
                      }),
                      (0, k.jsx)(`span`, {
                        children: O(j, e.amount_due.tax_amount, e.currency, D.minorUnitExponent),
                      }),
                    ],
                  }),
                ],
              })
            : null),
        (t[58] = j),
        (t[59] = e.amount_due.amount_excluding_tax),
        (t[60] = e.amount_due.tax_amount),
        (t[61] = e.currency),
        (t[62] = D.minorUnitExponent),
        (t[63] = f))
      : (f = t[63]);
    let p = e.amount_due.tax_amount > 0 && `mt-2`,
      m;
    t[64] === p
      ? (m = t[65])
      : ((m = s(`flex justify-between gap-4 font-semibold`, p)), (t[64] = p), (t[65] = m));
    let h;
    t[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, k.jsx)(_, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday`,
          defaultMessage: `Total due today`,
          description: `Total due today in the Pro upgrade dialog`,
        })),
        (t[66] = h))
      : (h = t[66]);
    let g;
    t[67] !== j || t[68] !== e.amount_due.amount || t[69] !== e.currency || t[70] !== D.minorUnitExponent
      ? ((g = O(j, e.amount_due.amount, e.currency, D.minorUnitExponent)),
        (t[67] = j),
        (t[68] = e.amount_due.amount),
        (t[69] = e.currency),
        (t[70] = D.minorUnitExponent),
        (t[71] = g))
      : (g = t[71]);
    let v;
    t[72] === g ? (v = t[73]) : ((v = (0, k.jsx)(`span`, { children: g })), (t[72] = g), (t[73] = v));
    let y;
    t[74] !== m || t[75] !== v
      ? ((y = (0, k.jsxs)(`div`, { className: m, children: [h, v] })), (t[74] = m), (t[75] = v), (t[76] = y))
      : (y = t[76]);
    let b;
    t[77] === w
      ? (b = t[78])
      : ((b =
          w == null
            ? null
            : (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsx)(`hr`, { className: `my-4 border-default` }), w],
              })),
        (t[77] = w),
        (t[78] = b));
    let x;
    t[79] !== w || t[80] !== r || t[81] !== D.paymentMethod || t[82] !== D.paymentMethodLabel
      ? ((x =
          w == null && (D.paymentMethod != null || D.paymentMethodLabel != null)
            ? (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(`hr`, { className: `my-4 border-default` }),
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-4`,
                    children: [
                      (0, k.jsx)(`span`, {
                        className: `font-semibold`,
                        children: (0, k.jsx)(_, {
                          id: `settings.usage.pricingPlanPage.subscriptionUpdate.paymentMethod`,
                          defaultMessage: `Payment method`,
                          description: `Payment method label in the Pro upgrade dialog`,
                        }),
                      }),
                      (0, k.jsx)(`span`, {
                        className: `truncate text-secondary`,
                        children: D.paymentMethodLabel ?? r,
                      }),
                    ],
                  }),
                ],
              })
            : null),
        (t[79] = w),
        (t[80] = r),
        (t[81] = D.paymentMethod),
        (t[82] = D.paymentMethodLabel),
        (t[83] = x))
      : (x = t[83]);
    let S;
    (t[84] !== f ||
    t[85] !== y ||
    t[86] !== b ||
    t[87] !== x ||
    t[88] !== o ||
    t[89] !== c ||
    t[90] !== l ||
    t[91] !== u
      ? ((S = (0, k.jsxs)(`div`, { className: o, children: [c, l, u, d, f, y, b, x] })),
        (t[84] = f),
        (t[85] = y),
        (t[86] = b),
        (t[87] = x),
        (t[88] = o),
        (t[89] = c),
        (t[90] = l),
        (t[91] = u),
        (t[92] = S))
      : (S = t[92]),
      (F = S));
    let C;
    (t[93] === e.amount_due.amount
      ? (C = t[94])
      : ((C =
          e.amount_due.amount > 0
            ? (0, k.jsx)(_, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.payNow`,
                defaultMessage: `Pay now`,
                description: `Button paying for a Pro upgrade using the saved payment method`,
              })
            : (0, k.jsx)(_, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.confirm`,
                defaultMessage: `Confirm`,
                description: `Button confirming a Pro upgrade with no immediate payment due`,
              })),
        (t[93] = e.amount_due.amount),
        (t[94] = C)),
      (I = C));
  } else {
    let { preview: e } = D,
      n = e.renewal_date,
      r;
    t[95] === D.updatedPlan ? (r = t[96]) : ((r = ie(D.updatedPlan)), (t[95] = D.updatedPlan), (t[96] = r));
    let i = r,
      a = D.currentPlan ?? (i === y.GO ? `plus` : `pro`),
      o;
    t[97] !== j || t[98] !== T || t[99] !== E || t[100] !== i
      ? ((o =
          E ??
          (T == null
            ? null
            : re({
                amount: T.monthlyAmounts[i] ?? null,
                currencyCode: T.currencyCode,
                intl: j,
                minorUnitExponent: T.minorUnitExponent,
              }))),
        (t[97] = j),
        (t[98] = T),
        (t[99] = E),
        (t[100] = i),
        (t[101] = o))
      : (o = t[101]);
    let s = o;
    P = null;
    let c;
    t[102] !== j || t[103] !== n
      ? ((c = n == null ? null : j.formatDate(n, { year: `numeric`, month: `long`, day: `numeric` })),
        (t[102] = j),
        (t[103] = n),
        (t[104] = c))
      : (c = t[104]);
    let l = s?.currencyCodeLabel ?? null,
      u = s?.formatted ?? null,
      d;
    (t[105] !== a || t[106] !== c || t[107] !== l || t[108] !== u || t[109] !== i
      ? ((d = (0, k.jsx)(oe, {
          currentPlanType: a,
          planType: i,
          renewalDateFormatted: c,
          currencyCode: l,
          currencySign: ``,
          planCost: u,
        })),
        (t[105] = a),
        (t[106] = c),
        (t[107] = l),
        (t[108] = u),
        (t[109] = i),
        (t[110] = d))
      : (d = t[110]),
      (F = d));
    let f;
    (t[111] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, k.jsx)(_, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.confirm`,
          defaultMessage: `Confirm`,
          description: `Button confirming the reviewed scheduled plan downgrade`,
        })),
        (t[111] = f))
      : (f = t[111]),
      (I = f));
  }
  let L;
  t[112] === C ? (L = t[113]) : ((L = { onOpenAutoFocus: C }), (t[112] = C), (t[113] = L));
  let fe = M ? `chatgptConfirmation` : `default`,
    pe = !l,
    R = M ? `chatgptConfirmation` : `default`,
    z = M ? `chatgptConfirmation` : `default`,
    B;
  t[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, k.jsx)(g, {
        children: (0, k.jsx)(_, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.title`,
          defaultMessage: `Confirm plan changes`,
          description: `Title for the Pro subscription update dialog`,
        }),
      })),
      (t[114] = B))
    : (B = t[114]);
  let V;
  t[115] === P
    ? (V = t[116])
    : ((V = P == null ? void 0 : (0, k.jsx)(i, { children: P })), (t[115] = P), (t[116] = V));
  let H;
  t[117] !== z || t[118] !== V
    ? ((H = (0, k.jsx)(v, { children: (0, k.jsx)(u, { variant: z, title: B, subtitle: V }) })),
      (t[117] = z),
      (t[118] = V),
      (t[119] = H))
    : (H = t[119]);
  let U;
  t[120] === F ? (U = t[121]) : ((U = (0, k.jsx)(v, { children: F })), (t[120] = F), (t[121] = U));
  let W;
  t[122] === c
    ? (W = t[123])
    : ((W = c == null ? null : (0, k.jsx)(v, { children: c })), (t[122] = c), (t[123] = W));
  let G = M ? `chatgptConfirmation` : `default`,
    me = M ? `outlineCard` : `ghost`,
    he = M ? `dialog` : void 0,
    K = f ?? m,
    q;
  t[124] === f
    ? (q = t[125])
    : ((q =
        f == null
          ? (0, k.jsx)(_, {
              id: `settings.usage.pricingPlanPage.subscriptionUpdate.cancel`,
              defaultMessage: `Cancel`,
              description: `Button canceling a Pro subscription update`,
            })
          : (0, k.jsx)(_, {
              id: `settings.usage.pricingPlanPage.subscriptionUpdate.back`,
              defaultMessage: `Back`,
              description: `Returns to the retention offer without confirming the scheduled plan change.`,
            })),
      (t[124] = f),
      (t[125] = q));
  let J;
  t[126] !== l || t[127] !== me || t[128] !== he || t[129] !== K || t[130] !== q
    ? ((J = (0, k.jsx)(p, { color: me, size: he, disabled: l, type: `button`, onClick: K, children: q })),
      (t[126] = l),
      (t[127] = me),
      (t[128] = he),
      (t[129] = K),
      (t[130] = q),
      (t[131] = J))
    : (J = t[131]);
  let Y;
  t[132] !== l || t[133] !== x || t[134] !== D.kind
    ? ((Y =
        D.kind === `scheduled_downgrade` && x != null
          ? (0, k.jsx)(p, {
              color: `secondary`,
              size: `dialog`,
              disabled: l,
              type: `button`,
              onClick: x,
              children: (0, k.jsx)(_, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb`,
                defaultMessage: `Go to web`,
                description: `Button continuing a Pro subscription update on the web`,
              }),
            })
          : null),
      (t[132] = l),
      (t[133] = x),
      (t[134] = D.kind),
      (t[135] = Y))
    : (Y = t[135]);
  let ge = M ? `dialog` : void 0,
    _e = l || A,
    ve = r ?? I,
    X;
  t[136] !== l || t[137] !== ge || t[138] !== _e || t[139] !== ve
    ? ((X = (0, k.jsx)(p, {
        color: `primary`,
        size: ge,
        disabled: _e,
        loading: l,
        type: `submit`,
        children: ve,
      })),
      (t[136] = l),
      (t[137] = ge),
      (t[138] = _e),
      (t[139] = ve),
      (t[140] = X))
    : (X = t[140]);
  let Z;
  t[141] !== G || t[142] !== J || t[143] !== Y || t[144] !== X
    ? ((Z = (0, k.jsx)(v, { children: (0, k.jsxs)(o, { variant: G, children: [J, Y, X] }) })),
      (t[141] = G),
      (t[142] = J),
      (t[143] = Y),
      (t[144] = X),
      (t[145] = Z))
    : (Z = t[145]);
  let Q;
  t[146] !== de || t[147] !== H || t[148] !== U || t[149] !== W || t[150] !== Z || t[151] !== R
    ? ((Q = (0, k.jsxs)(n, {
        as: `form`,
        size: `viewport`,
        variant: R,
        onSubmit: de,
        children: [H, U, W, Z],
      })),
      (t[146] = de),
      (t[147] = H),
      (t[148] = U),
      (t[149] = W),
      (t[150] = Z),
      (t[151] = R),
      (t[152] = Q))
    : (Q = t[152]);
  let $;
  return (
    t[153] !== S || t[154] !== Q || t[155] !== L || t[156] !== fe || t[157] !== pe
      ? (($ = (0, k.jsx)(d, {
          open: !0,
          contentProps: L,
          variant: fe,
          showDialogClose: pe,
          size: `default`,
          onOpenChange: S,
          children: Q,
        })),
        (t[153] = S),
        (t[154] = Q),
        (t[155] = L),
        (t[156] = fe),
        (t[157] = pe),
        (t[158] = $))
      : ($ = t[158]),
    $
  );
}
function se(e) {
  return e.value;
}
function ce(e) {
  return e.type !== `currency`;
}
function le(e) {
  return e.type === `currency`;
}
function O(e, t, n, r) {
  let i = n.toUpperCase();
  return b({ intl: e, amount: t / 10 ** r, currencyCode: i, currencyFractionDigits: r });
}
var ue, k;
function A() {
  return (A = e(() => {
    ((ue = l()), E(), w(), S(), C(), c(), f(), m(), r(), t(), x(), T(), (k = a()));
  }))();
}
export { A as n, D as t };
//# sourceMappingURL=subscription-update-dialog-875c31b96535.js.map
