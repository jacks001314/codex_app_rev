import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  VDt as r,
  _Mt as i,
  _O as a,
  cO as o,
  fO as s,
  gMt as c,
  gO as l,
  jDt as u,
  lO as d,
  mO as f,
  oO as p,
  sO as m,
  t3 as h,
  vO as g,
  vzt as _,
  xMt as v,
} from "./app-shared-bbfeca5e5737.js";
import { AMr as y, hPr as b, oNt as x } from "./app-initial-5851df3f6cb1.js";
import { C as ee, S, i as te, y as C } from "./pricing-promotions-b1ea6c6fec84.js";
import { r as w, t as ne } from "./plan-names-6d43f40b2723.js";
import { n as re } from "./pricing-889ac3693bce.js";
import { n as ie, r as T } from "./subscription-update-plan-7dcf54a45cb8.js";
import { i as E, n as ae, r as oe } from "./offer-notice-fc65ad117350.js";
function D(e) {
  let i = (0, ue.c)(159),
    {
      confirmButtonLabel: s,
      disableConfirm: u,
      error: h,
      isUpdating: g,
      onBack: _,
      onCancel: v,
      onConfirm: y,
      onGoToWeb: x,
      onOpenChange: S,
      onShown: C,
      paymentMethodControls: w,
      pricingInfo: T,
      scheduledPrice: E,
      subscriptionUpdate: D,
    } = e,
    A = u !== void 0 && u,
    j = r(),
    M = D.kind !== `saved_card_upgrade`,
    N;
  i[0] !== A || i[1] !== g || i[2] !== y
    ? ((N = (e) => {
        (e.preventDefault(), !g && !A && y());
      }),
      (i[0] = A),
      (i[1] = g),
      (i[2] = y),
      (i[3] = N))
    : (N = i[3]);
  let de = N,
    P,
    F,
    I;
  if (`renewal` in D) {
    P = null;
    let e;
    (i[4] === D.renewal
      ? (e = i[5])
      : ((e = (0, k.jsx)(ae, { ...D.renewal })), (i[4] = D.renewal), (i[5] = e)),
      (F = e));
    let t;
    (i[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsx)(n, {
          id: `planRenewalModal.confirm`,
          defaultMessage: `Confirm`,
          description: `Plan renewal modal confirm button`,
        })),
        (i[6] = t))
      : (t = i[6]),
      (I = t));
  } else if (D.kind === `saved_card_upgrade`) {
    let { preview: e } = D,
      t = D.upgrade?.promoCampaign === te,
      r,
      a,
      o,
      s,
      l;
    if (
      i[7] !== j ||
      i[8] !== t ||
      i[9] !== e.currency ||
      i[10] !== e.positive_line_item_total ||
      i[11] !== e.renewal_date ||
      i[12] !== T ||
      i[13] !== D.fullyCoveredByWallet ||
      i[14] !== D.minorUnitExponent ||
      i[15] !== D.paymentMethod?.card_brand ||
      i[16] !== D.paymentMethod?.card_last4 ||
      i[17] !== D.promotionDisclaimer ||
      i[18] !== D.updatedPlan
    ) {
      let c =
          t && T != null
            ? re({
                intl: j,
                amount: T.monthlyAmounts.plus,
                currencyCode: T.currencyCode,
                minorUnitExponent: T.minorUnitExponent,
              })
            : null,
        u;
      i[25] === D.updatedPlan ? (u = i[26]) : ((u = ie(D.updatedPlan)), (i[25] = D.updatedPlan), (i[26] = u));
      let d = u;
      if (i[27] !== D.paymentMethod?.card_brand || i[28] !== D.paymentMethod?.card_last4) {
        let e = D.paymentMethod?.card_brand?.trim() ?? ``,
          t;
        i[30] === D.paymentMethod?.card_last4
          ? (t = i[31])
          : ((t = D.paymentMethod?.card_last4?.trim() ?? ``),
            (i[30] = D.paymentMethod?.card_last4),
            (i[31] = t));
        let n = t;
        ((r = e),
          e && n ? (r = `${e.toUpperCase()} *${n}`) : n && (r = `*${n}`),
          (i[27] = D.paymentMethod?.card_brand),
          (i[28] = D.paymentMethod?.card_last4),
          (i[29] = r));
      } else r = i[29];
      let f;
      (i[32] !== t || i[33] !== D.fullyCoveredByWallet || i[34] !== D.promotionDisclaimer || i[35] !== d
        ? ((f =
            t || D.fullyCoveredByWallet || D.promotionDisclaimer != null
              ? null
              : (0, k.jsx)(n, {
                  id: `settings.usage.pricingPlanPage.savedCardUpgrade.description.numberedTiers`,
                  defaultMessage: `You're upgrading to ChatGPT {targetPlan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}. This will charge your saved payment method`,
                  description: `Description for a saved-card plan upgrade. targetPlan is the canonical plan type; the Pro tier names are Pro 100, Pro 200, and Pro 500. Pro, Go, Plus, and ChatGPT are product names. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                  values: { targetPlan: d },
                })),
          (i[32] = t),
          (i[33] = D.fullyCoveredByWallet),
          (i[34] = D.promotionDisclaimer),
          (i[35] = d),
          (i[36] = f))
        : (f = i[36]),
        (P = f),
        (s = `flex flex-col text-sm`));
      let p;
      i[37] === d
        ? (p = i[38])
        : ((p = (0, k.jsx)(n, { ...ne.targetPlan, values: { plan: d } })), (i[37] = d), (i[38] = p));
      let m;
      i[39] !== j ||
      i[40] !== e.currency ||
      i[41] !== e.positive_line_item_total ||
      i[42] !== D.minorUnitExponent
        ? ((m = O(j, e.positive_line_item_total, e.currency, D.minorUnitExponent)),
          (i[39] = j),
          (i[40] = e.currency),
          (i[41] = e.positive_line_item_total),
          (i[42] = D.minorUnitExponent),
          (i[43] = m))
        : (m = i[43]);
      let h;
      (i[44] === m ? (h = i[45]) : ((h = (0, k.jsx)(`span`, { children: m })), (i[44] = m), (i[45] = h)),
        i[46] !== h || i[47] !== p
          ? ((l = (0, k.jsxs)(`div`, {
              className: `flex justify-between gap-4 font-semibold`,
              children: [p, h],
            })),
            (i[46] = h),
            (i[47] = p),
            (i[48] = l))
          : (l = i[48]),
        (a = `mt-0.5 text-xs text-secondary`),
        (o =
          D.promotionDisclaimer ??
          (t && c != null && e.renewal_date != null
            ? (0, k.jsx)(n, {
                ...ee.goToPlusNativeTrialBillingCycle,
                values: {
                  currencyCode: e.currency.toUpperCase(),
                  currencySign: c.parts.find(le)?.value ?? ``,
                  planCost: c.parts.filter(ce).map(se).join(``).trim(),
                  renewalDateFormatted: j.formatDate(e.renewal_date, {
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`,
                    timeZone: `UTC`,
                  }),
                },
              })
            : (0, k.jsx)(n, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle`,
                defaultMessage: `Billed monthly, starting today`,
                description: `Billing cycle information in the Pro upgrade dialog`,
              }))),
        (i[7] = j),
        (i[8] = t),
        (i[9] = e.currency),
        (i[10] = e.positive_line_item_total),
        (i[11] = e.renewal_date),
        (i[12] = T),
        (i[13] = D.fullyCoveredByWallet),
        (i[14] = D.minorUnitExponent),
        (i[15] = D.paymentMethod?.card_brand),
        (i[16] = D.paymentMethod?.card_last4),
        (i[17] = D.promotionDisclaimer),
        (i[18] = D.updatedPlan),
        (i[19] = r),
        (i[20] = a),
        (i[21] = o),
        (i[22] = s),
        (i[23] = l),
        (i[24] = P));
    } else ((r = i[19]), (a = i[20]), (o = i[21]), (s = i[22]), (l = i[23]), (P = i[24]));
    let u;
    i[49] !== a || i[50] !== o
      ? ((u = (0, k.jsx)(`span`, { className: a, children: o })), (i[49] = a), (i[50] = o), (i[51] = u))
      : (u = i[51]);
    let d;
    i[52] !== j ||
    i[53] !== e.currency ||
    i[54] !== e.negative_line_item_total ||
    i[55] !== D.minorUnitExponent
      ? ((d =
          e.negative_line_item_total === 0
            ? null
            : (0, k.jsxs)(`div`, {
                className: `mt-4`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex justify-between gap-4 font-semibold`,
                    children: [
                      (0, k.jsx)(n, {
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
                    children: (0, k.jsx)(n, {
                      id: `settings.usage.pricingPlanPage.subscriptionUpdate.proratedCredit.currentSubscription`,
                      defaultMessage: `Prorated credit for the remainder of your current subscription`,
                      description: `Description below the adjustment amount in a plan-upgrade review, including after a past-due payment. Explains the credit for unused time on the current subscription. No placeholders.`,
                    }),
                  }),
                ],
              })),
        (i[52] = j),
        (i[53] = e.currency),
        (i[54] = e.negative_line_item_total),
        (i[55] = D.minorUnitExponent),
        (i[56] = d))
      : (d = i[56]);
    let f;
    i[57] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, k.jsx)(`hr`, { className: `my-4 border-default` })), (i[57] = f))
      : (f = i[57]);
    let p;
    i[58] !== j ||
    i[59] !== e.amount_due.amount_excluding_tax ||
    i[60] !== e.amount_due.tax_amount ||
    i[61] !== e.currency ||
    i[62] !== D.minorUnitExponent
      ? ((p =
          e.amount_due.tax_amount > 0
            ? (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex justify-between gap-4`,
                    children: [
                      (0, k.jsx)(n, {
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
                      (0, k.jsx)(n, {
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
        (i[58] = j),
        (i[59] = e.amount_due.amount_excluding_tax),
        (i[60] = e.amount_due.tax_amount),
        (i[61] = e.currency),
        (i[62] = D.minorUnitExponent),
        (i[63] = p))
      : (p = i[63]);
    let m = e.amount_due.tax_amount > 0 && `mt-2`,
      h;
    i[64] === m
      ? (h = i[65])
      : ((h = c(`flex justify-between gap-4 font-semibold`, m)), (i[64] = m), (i[65] = h));
    let g;
    i[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, k.jsx)(n, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday`,
          defaultMessage: `Total due today`,
          description: `Total due today in the Pro upgrade dialog`,
        })),
        (i[66] = g))
      : (g = i[66]);
    let _;
    i[67] !== j || i[68] !== e.amount_due.amount || i[69] !== e.currency || i[70] !== D.minorUnitExponent
      ? ((_ = O(j, e.amount_due.amount, e.currency, D.minorUnitExponent)),
        (i[67] = j),
        (i[68] = e.amount_due.amount),
        (i[69] = e.currency),
        (i[70] = D.minorUnitExponent),
        (i[71] = _))
      : (_ = i[71]);
    let v;
    i[72] === _ ? (v = i[73]) : ((v = (0, k.jsx)(`span`, { children: _ })), (i[72] = _), (i[73] = v));
    let y;
    i[74] !== h || i[75] !== v
      ? ((y = (0, k.jsxs)(`div`, { className: h, children: [g, v] })), (i[74] = h), (i[75] = v), (i[76] = y))
      : (y = i[76]);
    let b;
    i[77] === w
      ? (b = i[78])
      : ((b =
          w == null
            ? null
            : (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsx)(`hr`, { className: `my-4 border-default` }), w],
              })),
        (i[77] = w),
        (i[78] = b));
    let x;
    i[79] !== w || i[80] !== r || i[81] !== D.paymentMethod || i[82] !== D.paymentMethodLabel
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
                        children: (0, k.jsx)(n, {
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
        (i[79] = w),
        (i[80] = r),
        (i[81] = D.paymentMethod),
        (i[82] = D.paymentMethodLabel),
        (i[83] = x))
      : (x = i[83]);
    let S;
    (i[84] !== p ||
    i[85] !== y ||
    i[86] !== b ||
    i[87] !== x ||
    i[88] !== s ||
    i[89] !== l ||
    i[90] !== u ||
    i[91] !== d
      ? ((S = (0, k.jsxs)(`div`, { className: s, children: [l, u, d, f, p, y, b, x] })),
        (i[84] = p),
        (i[85] = y),
        (i[86] = b),
        (i[87] = x),
        (i[88] = s),
        (i[89] = l),
        (i[90] = u),
        (i[91] = d),
        (i[92] = S))
      : (S = i[92]),
      (F = S));
    let C;
    (i[93] === e.amount_due.amount
      ? (C = i[94])
      : ((C =
          e.amount_due.amount > 0
            ? (0, k.jsx)(n, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.payNow`,
                defaultMessage: `Pay now`,
                description: `Button paying for a Pro upgrade using the saved payment method`,
              })
            : (0, k.jsx)(n, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.confirm`,
                defaultMessage: `Confirm`,
                description: `Button confirming a Pro upgrade with no immediate payment due`,
              })),
        (i[93] = e.amount_due.amount),
        (i[94] = C)),
      (I = C));
  } else {
    let { preview: e } = D,
      t = e.renewal_date,
      r;
    i[95] === D.updatedPlan ? (r = i[96]) : ((r = ie(D.updatedPlan)), (i[95] = D.updatedPlan), (i[96] = r));
    let a = r,
      o = D.currentPlan ?? (a === b.GO ? `plus` : `pro`),
      s;
    i[97] !== j || i[98] !== T || i[99] !== E || i[100] !== a
      ? ((s =
          E ??
          (T == null
            ? null
            : re({
                amount: T.monthlyAmounts[a] ?? null,
                currencyCode: T.currencyCode,
                intl: j,
                minorUnitExponent: T.minorUnitExponent,
              }))),
        (i[97] = j),
        (i[98] = T),
        (i[99] = E),
        (i[100] = a),
        (i[101] = s))
      : (s = i[101]);
    let c = s;
    P = null;
    let l;
    i[102] !== j || i[103] !== t
      ? ((l = t == null ? null : j.formatDate(t, { year: `numeric`, month: `long`, day: `numeric` })),
        (i[102] = j),
        (i[103] = t),
        (i[104] = l))
      : (l = i[104]);
    let u = c?.currencyCodeLabel ?? null,
      d = c?.formatted ?? null,
      f;
    (i[105] !== o || i[106] !== l || i[107] !== u || i[108] !== d || i[109] !== a
      ? ((f = (0, k.jsx)(oe, {
          currentPlanType: o,
          planType: a,
          renewalDateFormatted: l,
          currencyCode: u,
          currencySign: ``,
          planCost: d,
        })),
        (i[105] = o),
        (i[106] = l),
        (i[107] = u),
        (i[108] = d),
        (i[109] = a),
        (i[110] = f))
      : (f = i[110]),
      (F = f));
    let p;
    (i[111] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, k.jsx)(n, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.confirm`,
          defaultMessage: `Confirm`,
          description: `Button confirming the reviewed scheduled plan downgrade`,
        })),
        (i[111] = p))
      : (p = i[111]),
      (I = p));
  }
  let L;
  i[112] === C ? (L = i[113]) : ((L = { onOpenAutoFocus: C }), (i[112] = C), (i[113] = L));
  let fe = M ? `chatgptConfirmation` : `default`,
    pe = !g,
    R = M ? `chatgptConfirmation` : `default`,
    z = M ? `chatgptConfirmation` : `default`,
    B;
  i[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, k.jsx)(a, {
        children: (0, k.jsx)(n, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.title`,
          defaultMessage: `Confirm plan changes`,
          description: `Title for the Pro subscription update dialog`,
        }),
      })),
      (i[114] = B))
    : (B = i[114]);
  let V;
  i[115] === P
    ? (V = i[116])
    : ((V = P == null ? void 0 : (0, k.jsx)(l, { children: P })), (i[115] = P), (i[116] = V));
  let H;
  i[117] !== z || i[118] !== V
    ? ((H = (0, k.jsx)(d, { children: (0, k.jsx)(o, { variant: z, title: B, subtitle: V }) })),
      (i[117] = z),
      (i[118] = V),
      (i[119] = H))
    : (H = i[119]);
  let U;
  i[120] === F ? (U = i[121]) : ((U = (0, k.jsx)(d, { children: F })), (i[120] = F), (i[121] = U));
  let W;
  i[122] === h
    ? (W = i[123])
    : ((W = h == null ? null : (0, k.jsx)(d, { children: h })), (i[122] = h), (i[123] = W));
  let G = M ? `chatgptConfirmation` : `default`,
    me = M ? `outlineCard` : `ghost`,
    he = M ? `dialog` : void 0,
    ge = _ ?? v,
    K;
  i[124] === _
    ? (K = i[125])
    : ((K =
        _ == null
          ? (0, k.jsx)(n, {
              id: `settings.usage.pricingPlanPage.subscriptionUpdate.cancel`,
              defaultMessage: `Cancel`,
              description: `Button canceling a Pro subscription update`,
            })
          : (0, k.jsx)(n, {
              id: `settings.usage.pricingPlanPage.subscriptionUpdate.back`,
              defaultMessage: `Back`,
              description: `Returns to the retention offer without confirming the scheduled plan change.`,
            })),
      (i[124] = _),
      (i[125] = K));
  let q;
  i[126] !== g || i[127] !== me || i[128] !== he || i[129] !== ge || i[130] !== K
    ? ((q = (0, k.jsx)(t, { color: me, size: he, disabled: g, type: `button`, onClick: ge, children: K })),
      (i[126] = g),
      (i[127] = me),
      (i[128] = he),
      (i[129] = ge),
      (i[130] = K),
      (i[131] = q))
    : (q = i[131]);
  let J;
  i[132] !== g || i[133] !== x || i[134] !== D.kind
    ? ((J =
        D.kind === `scheduled_downgrade` && x != null
          ? (0, k.jsx)(t, {
              color: `secondary`,
              size: `dialog`,
              disabled: g,
              type: `button`,
              onClick: x,
              children: (0, k.jsx)(n, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb`,
                defaultMessage: `Go to web`,
                description: `Button continuing a Pro subscription update on the web`,
              }),
            })
          : null),
      (i[132] = g),
      (i[133] = x),
      (i[134] = D.kind),
      (i[135] = J))
    : (J = i[135]);
  let Y = M ? `dialog` : void 0,
    _e = g || A,
    ve = s ?? I,
    X;
  i[136] !== g || i[137] !== Y || i[138] !== _e || i[139] !== ve
    ? ((X = (0, k.jsx)(t, {
        color: `primary`,
        size: Y,
        disabled: _e,
        loading: g,
        type: `submit`,
        children: ve,
      })),
      (i[136] = g),
      (i[137] = Y),
      (i[138] = _e),
      (i[139] = ve),
      (i[140] = X))
    : (X = i[140]);
  let Z;
  i[141] !== G || i[142] !== q || i[143] !== J || i[144] !== X
    ? ((Z = (0, k.jsx)(d, { children: (0, k.jsxs)(m, { variant: G, children: [q, J, X] }) })),
      (i[141] = G),
      (i[142] = q),
      (i[143] = J),
      (i[144] = X),
      (i[145] = Z))
    : (Z = i[145]);
  let Q;
  i[146] !== de || i[147] !== H || i[148] !== U || i[149] !== W || i[150] !== Z || i[151] !== R
    ? ((Q = (0, k.jsxs)(p, {
        as: `form`,
        size: `viewport`,
        variant: R,
        onSubmit: de,
        children: [H, U, W, Z],
      })),
      (i[146] = de),
      (i[147] = H),
      (i[148] = U),
      (i[149] = W),
      (i[150] = Z),
      (i[151] = R),
      (i[152] = Q))
    : (Q = i[152]);
  let $;
  return (
    i[153] !== S || i[154] !== Q || i[155] !== L || i[156] !== fe || i[157] !== pe
      ? (($ = (0, k.jsx)(f, {
          open: !0,
          contentProps: L,
          variant: fe,
          showDialogClose: pe,
          size: `default`,
          onOpenChange: S,
          children: Q,
        })),
        (i[153] = S),
        (i[154] = Q),
        (i[155] = L),
        (i[156] = fe),
        (i[157] = pe),
        (i[158] = $))
      : ($ = i[158]),
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
  return x({ intl: e, amount: t / 10 ** r, currencyCode: i, currencyFractionDigits: r });
}
var ue, k;
function A() {
  return (A = e(() => {
    ((ue = _()), E(), w(), S(), C(), i(), u(), h(), g(), s(), y(), T(), (k = v()));
  }))();
}
export { A as n, D as t };
//# sourceMappingURL=subscription-update-dialog-ae71a1680bda.js.map
