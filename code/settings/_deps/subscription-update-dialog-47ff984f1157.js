import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  Jrt as r,
  Opn as i,
  Rpn as a,
  Spn as o,
  Xrt as s,
  Yrt as c,
  Zrt as l,
  eit as u,
  gpn as d,
  hmn as f,
  iit as p,
  kMt as m,
  kmn as h,
  nit as g,
  rit as _,
  tit as v,
  zpn as y,
} from "./app-initial-f094ef01c64d.js";
import { Sg as b, wg as x } from "./app-primary-4c40d73a1074.js";
import { n as S, r as C } from "./pricing-a70e18580c5f.js";
function w(e) {
  let t = (0, E.c)(114),
    {
      disableConfirm: o,
      error: u,
      isUpdating: f,
      onBack: p,
      onCancel: h,
      onConfirm: y,
      onGoToWeb: b,
      onOpenChange: x,
      onShown: C,
      pricingInfo: w,
      scheduledPrice: O,
      subscriptionUpdate: k,
    } = e,
    A = o !== void 0 && o,
    j = i(),
    { preview: M } = k,
    N;
  t[0] !== A || t[1] !== f || t[2] !== y
    ? ((N = (e) => {
        (e.preventDefault(), !f && !A && y());
      }),
      (t[0] = A),
      (t[1] = f),
      (t[2] = y),
      (t[3] = N))
    : (N = t[3]);
  let P = N,
    F,
    I,
    L;
  if (k.kind === `saved_card_upgrade`) {
    let e;
    bb0: switch (k.updatedPlan) {
      case `chatgptgoplan`:
        e = `Go`;
        break bb0;
      case `chatgptplusplan`:
        e = `Plus`;
        break bb0;
      case `chatgptprolite`:
        e = `Pro 5x`;
        break bb0;
      case `chatgptpro`:
        e = `Pro 20x`;
    }
    let r;
    if (t[4] !== k.paymentMethod.card_brand || t[5] !== k.paymentMethod.card_last4) {
      let e = k.paymentMethod.card_brand?.trim() ?? ``,
        n;
      t[7] === k.paymentMethod.card_last4
        ? (n = t[8])
        : ((n = k.paymentMethod.card_last4?.trim() ?? ``),
          (t[7] = k.paymentMethod.card_last4),
          (t[8] = n));
      let i = n;
      ((r = e),
        e && i ? (r = `${e.toUpperCase()} *${i}`) : i && (r = `*${i}`),
        (t[4] = k.paymentMethod.card_brand),
        (t[5] = k.paymentMethod.card_last4),
        (t[6] = r));
    } else r = t[6];
    let i;
    (t[9] === e
      ? (i = t[10])
      : ((i = (0, D.jsx)(n, {
          id: `settings.usage.pricingPlanPage.savedCardUpgrade.description`,
          defaultMessage: `You're upgrading to ChatGPT {targetPlan}. This will charge your saved payment method.`,
          description: `Description for the dialog confirming a Pro upgrade using a saved credit card`,
          values: { targetPlan: e },
        })),
        (t[9] = e),
        (t[10] = i)),
      (F = i));
    let o;
    t[11] === e
      ? (o = t[12])
      : ((o = (0, D.jsx)(n, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.subscription`,
          defaultMessage: `ChatGPT {targetPlan} subscription`,
          description: `Subscription selected in the Pro plan update dialog`,
          values: { targetPlan: e },
        })),
        (t[11] = e),
        (t[12] = o));
    let s;
    t[13] !== j ||
    t[14] !== M.currency ||
    t[15] !== M.positive_line_item_total ||
    t[16] !== k.minorUnitExponent
      ? ((s = T(j, M.positive_line_item_total, M.currency, k.minorUnitExponent)),
        (t[13] = j),
        (t[14] = M.currency),
        (t[15] = M.positive_line_item_total),
        (t[16] = k.minorUnitExponent),
        (t[17] = s))
      : (s = t[17]);
    let c;
    t[18] === s
      ? (c = t[19])
      : ((c = (0, D.jsx)(`span`, { children: s })), (t[18] = s), (t[19] = c));
    let l;
    t[20] !== o || t[21] !== c
      ? ((l = (0, D.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [o, c],
        })),
        (t[20] = o),
        (t[21] = c),
        (t[22] = l))
      : (l = t[22]);
    let u, d;
    t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, D.jsx)(`span`, {
          className: `mt-0.5 text-xs text-secondary`,
          children: (0, D.jsx)(n, {
            id: `settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle`,
            defaultMessage: `Billed monthly, starting today`,
            description: `Billing cycle information in the Pro upgrade dialog`,
          }),
        })),
        (d = (0, D.jsx)(`hr`, { className: `my-4 border-default` })),
        (t[23] = u),
        (t[24] = d))
      : ((u = t[23]), (d = t[24]));
    let f;
    t[25] !== j ||
    t[26] !== M.amount_due.amount_excluding_tax ||
    t[27] !== M.amount_due.tax_amount ||
    t[28] !== M.currency ||
    t[29] !== k.minorUnitExponent
      ? ((f =
          M.amount_due.tax_amount > 0
            ? (0, D.jsxs)(D.Fragment, {
                children: [
                  (0, D.jsxs)(`div`, {
                    className: `flex justify-between gap-4`,
                    children: [
                      (0, D.jsx)(n, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.subtotal`,
                        defaultMessage: `Subtotal`,
                        description: `Subtotal in the Pro upgrade dialog`,
                      }),
                      (0, D.jsx)(`span`, {
                        children: T(
                          j,
                          M.amount_due.amount_excluding_tax,
                          M.currency,
                          k.minorUnitExponent,
                        ),
                      }),
                    ],
                  }),
                  (0, D.jsxs)(`div`, {
                    className: `mt-2 flex justify-between gap-4`,
                    children: [
                      (0, D.jsx)(n, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.tax`,
                        defaultMessage: `Tax`,
                        description: `Tax in the Pro upgrade dialog`,
                      }),
                      (0, D.jsx)(`span`, {
                        children: T(j, M.amount_due.tax_amount, M.currency, k.minorUnitExponent),
                      }),
                    ],
                  }),
                ],
              })
            : null),
        (t[25] = j),
        (t[26] = M.amount_due.amount_excluding_tax),
        (t[27] = M.amount_due.tax_amount),
        (t[28] = M.currency),
        (t[29] = k.minorUnitExponent),
        (t[30] = f))
      : (f = t[30]);
    let p = M.amount_due.tax_amount > 0 && `mt-2`,
      m;
    t[31] === p
      ? (m = t[32])
      : ((m = a(`flex justify-between gap-4 font-semibold`, p)), (t[31] = p), (t[32] = m));
    let h;
    t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, D.jsx)(n, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday`,
          defaultMessage: `Total due today`,
          description: `Total due today in the Pro upgrade dialog`,
        })),
        (t[33] = h))
      : (h = t[33]);
    let g;
    t[34] !== j ||
    t[35] !== M.amount_due.amount ||
    t[36] !== M.currency ||
    t[37] !== k.minorUnitExponent
      ? ((g = T(j, M.amount_due.amount, M.currency, k.minorUnitExponent)),
        (t[34] = j),
        (t[35] = M.amount_due.amount),
        (t[36] = M.currency),
        (t[37] = k.minorUnitExponent),
        (t[38] = g))
      : (g = t[38]);
    let _;
    t[39] === g
      ? (_ = t[40])
      : ((_ = (0, D.jsx)(`span`, { children: g })), (t[39] = g), (t[40] = _));
    let v;
    t[41] !== m || t[42] !== _
      ? ((v = (0, D.jsxs)(`div`, { className: m, children: [h, _] })),
        (t[41] = m),
        (t[42] = _),
        (t[43] = v))
      : (v = t[43]);
    let y;
    t[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, D.jsx)(`hr`, { className: `my-4 border-default` })), (t[44] = y))
      : (y = t[44]);
    let b;
    t[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, D.jsx)(`span`, {
          className: `font-semibold`,
          children: (0, D.jsx)(n, {
            id: `settings.usage.pricingPlanPage.subscriptionUpdate.paymentMethod`,
            defaultMessage: `Payment method`,
            description: `Payment method label in the Pro upgrade dialog`,
          }),
        })),
        (t[45] = b))
      : (b = t[45]);
    let x;
    t[46] === r
      ? (x = t[47])
      : ((x = (0, D.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [b, (0, D.jsx)(`span`, { className: `truncate text-secondary`, children: r })],
        })),
        (t[46] = r),
        (t[47] = x));
    let S;
    (t[48] !== f || t[49] !== v || t[50] !== x || t[51] !== l
      ? ((S = (0, D.jsxs)(`div`, {
          className: `flex flex-col text-sm`,
          children: [l, u, d, f, v, y, x],
        })),
        (t[48] = f),
        (t[49] = v),
        (t[50] = x),
        (t[51] = l),
        (t[52] = S))
      : (S = t[52]),
      (I = S));
    let C;
    (t[53] === M.amount_due.amount
      ? (C = t[54])
      : ((C =
          M.amount_due.amount > 0
            ? (0, D.jsx)(n, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.payNow`,
                defaultMessage: `Pay now`,
                description: `Button paying for a Pro upgrade using the saved payment method`,
              })
            : (0, D.jsx)(n, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.confirm`,
                defaultMessage: `Confirm`,
                description: `Button confirming a Pro upgrade with no immediate payment due`,
              })),
        (t[53] = M.amount_due.amount),
        (t[54] = C)),
      (L = C));
  } else {
    let e = M.renewal_date,
      r = k.updatedPlan === `chatgptgoplan` ? `go` : `prolite`,
      i;
    t[55] !== j || t[56] !== w || t[57] !== O || t[58] !== r
      ? ((i =
          O ??
          (w == null
            ? null
            : S({
                amount: w.monthlyAmounts[r],
                currencyCode: w.currencyCode,
                intl: j,
                minorUnitExponent: w.minorUnitExponent,
              }))),
        (t[55] = j),
        (t[56] = w),
        (t[57] = O),
        (t[58] = r),
        (t[59] = i))
      : (i = t[59]);
    let a = i,
      o;
    (t[60] !== e || t[61] !== r
      ? ((o =
          e == null
            ? (0, D.jsx)(n, {
                id: `settings.usage.pricingPlanPage.scheduledDowngrade.descriptionWithoutDate`,
                defaultMessage: `Your {targetPlan, select, go {Plus} other {Pro 20x}} subscription will change to {targetPlan, select, go {Go} other {Pro 5x}} at the end of your current billing period`,
                description: `Description of a scheduled plan downgrade when the server has not supplied a renewal date. targetPlan distinguishes Plus to Go from Pro 20x to Pro 5x.`,
                values: { targetPlan: r },
              })
            : (0, D.jsx)(n, {
                id: `settings.usage.pricingPlanPage.scheduledDowngrade.description`,
                defaultMessage: `Your {targetPlan, select, go {Plus} other {Pro 20x}} subscription will remain active until {renewalDate}, when it will change to {targetPlan, select, go {Go} other {Pro 5x}}`,
                description: `Description of a scheduled plan downgrade. targetPlan distinguishes Plus to Go from Pro 20x to Pro 5x; renewalDate is the actual server-provided date the current plan ends.`,
                values: {
                  targetPlan: r,
                  renewalDate: (0, D.jsx)(d, {
                    value: new Date(e),
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`,
                  }),
                },
              })),
        (t[60] = e),
        (t[61] = r),
        (t[62] = o))
      : (o = t[62]),
      (F = o));
    let s;
    t[63] === r
      ? (s = t[64])
      : ((s = (0, D.jsx)(n, {
          id: `settings.usage.pricingPlanPage.scheduledDowngrade.newPlan`,
          defaultMessage: `ChatGPT {targetPlan, select, go {Go} other {Pro 5x}}`,
          description: `New plan in the scheduled downgrade dialog. targetPlan selects the new Go or Pro 5x plan.`,
          values: { targetPlan: r },
        })),
        (t[63] = r),
        (t[64] = s));
    let c;
    t[65] === a
      ? (c = t[66])
      : ((c =
          a == null
            ? null
            : (0, D.jsx)(n, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.newPlanPrice`,
                defaultMessage: `{price} / month`,
                description: `Monthly price of the new plan in the scheduled downgrade dialog`,
                values: { price: a.formatted },
              })),
        (t[65] = a),
        (t[66] = c));
    let l;
    t[67] !== s || t[68] !== c
      ? ((l = (0, D.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [s, c],
        })),
        (t[67] = s),
        (t[68] = c),
        (t[69] = l))
      : (l = t[69]);
    let u;
    t[70] === e
      ? (u = t[71])
      : ((u =
          e == null
            ? (0, D.jsx)(`div`, {
                className: `mt-1 text-xs text-secondary`,
                children: (0, D.jsx)(n, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStartWithoutDate`,
                  defaultMessage: `Billing will start at the end of your current billing period`,
                  description: `Billing start information when the renewal date is unavailable`,
                }),
              })
            : (0, D.jsx)(`div`, {
                className: `mt-1 text-xs text-secondary`,
                children: (0, D.jsx)(n, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStart`,
                  defaultMessage: `Billing will start on {renewalDate}`,
                  description: `Billing start date of the new plan in the scheduled downgrade dialog`,
                  values: {
                    renewalDate: (0, D.jsx)(d, {
                      value: new Date(e),
                      year: `numeric`,
                      month: `long`,
                      day: `numeric`,
                    }),
                  },
                }),
              })),
        (t[70] = e),
        (t[71] = u));
    let f;
    (t[72] !== l || t[73] !== u
      ? ((f = (0, D.jsxs)(`div`, {
          className: `rounded-xl border border-default p-4 text-sm`,
          children: [l, u],
        })),
        (t[72] = l),
        (t[73] = u),
        (t[74] = f))
      : (f = t[74]),
      (I = f));
    let p;
    (t[75] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, D.jsx)(n, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.confirm`,
          defaultMessage: `Confirm`,
          description: `Button confirming the reviewed scheduled plan downgrade`,
        })),
        (t[75] = p))
      : (p = t[75]),
      (L = p));
  }
  let R;
  t[76] === C ? (R = t[77]) : ((R = { onOpenAutoFocus: C }), (t[76] = C), (t[77] = R));
  let z = !f,
    B;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, D.jsx)(_, {
        children: (0, D.jsx)(n, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.title`,
          defaultMessage: `Confirm plan changes`,
          description: `Title for the Pro subscription update dialog`,
        }),
      })),
      (t[78] = B))
    : (B = t[78]);
  let V;
  t[79] === F
    ? (V = t[80])
    : ((V = (0, D.jsx)(l, {
        children: (0, D.jsx)(s, { title: B, subtitle: (0, D.jsx)(g, { children: F }) }),
      })),
      (t[79] = F),
      (t[80] = V));
  let H;
  t[81] === I ? (H = t[82]) : ((H = (0, D.jsx)(l, { children: I })), (t[81] = I), (t[82] = H));
  let U;
  t[83] === u
    ? (U = t[84])
    : ((U = u == null ? null : (0, D.jsx)(l, { children: u })), (t[83] = u), (t[84] = U));
  let W = p ?? h,
    G;
  t[85] === p
    ? (G = t[86])
    : ((G =
        p == null
          ? (0, D.jsx)(n, {
              id: `settings.usage.pricingPlanPage.subscriptionUpdate.cancel`,
              defaultMessage: `Cancel`,
              description: `Button canceling a Pro subscription update`,
            })
          : (0, D.jsx)(n, {
              id: `settings.usage.pricingPlanPage.subscriptionUpdate.back`,
              defaultMessage: `Back`,
              description: `Returns to the retention offer without confirming the scheduled plan change.`,
            })),
      (t[85] = p),
      (t[86] = G));
  let K;
  t[87] !== f || t[88] !== G || t[89] !== W
    ? ((K = (0, D.jsx)(m, {
        color: `ghost`,
        disabled: f,
        type: `button`,
        onClick: W,
        children: G,
      })),
      (t[87] = f),
      (t[88] = G),
      (t[89] = W),
      (t[90] = K))
    : (K = t[90]);
  let q;
  t[91] !== f || t[92] !== b || t[93] !== k.kind
    ? ((q =
        k.kind === `scheduled_downgrade` && b != null
          ? (0, D.jsx)(m, {
              color: `secondary`,
              disabled: f,
              type: `button`,
              onClick: b,
              children: (0, D.jsx)(n, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb`,
                defaultMessage: `Go to web`,
                description: `Button continuing a Pro subscription update on the web`,
              }),
            })
          : null),
      (t[91] = f),
      (t[92] = b),
      (t[93] = k.kind),
      (t[94] = q))
    : (q = t[94]);
  let J = f || A,
    Y;
  t[95] !== L || t[96] !== f || t[97] !== J
    ? ((Y = (0, D.jsx)(m, {
        color: `primary`,
        disabled: J,
        loading: f,
        type: `submit`,
        children: L,
      })),
      (t[95] = L),
      (t[96] = f),
      (t[97] = J),
      (t[98] = Y))
    : (Y = t[98]);
  let X;
  t[99] !== K || t[100] !== q || t[101] !== Y
    ? ((X = (0, D.jsx)(l, { children: (0, D.jsxs)(c, { children: [K, q, Y] }) })),
      (t[99] = K),
      (t[100] = q),
      (t[101] = Y),
      (t[102] = X))
    : (X = t[102]);
  let Z;
  t[103] !== P || t[104] !== X || t[105] !== V || t[106] !== H || t[107] !== U
    ? ((Z = (0, D.jsxs)(r, { as: `form`, onSubmit: P, children: [V, H, U, X] })),
      (t[103] = P),
      (t[104] = X),
      (t[105] = V),
      (t[106] = H),
      (t[107] = U),
      (t[108] = Z))
    : (Z = t[108]);
  let Q;
  return (
    t[109] !== x || t[110] !== Z || t[111] !== R || t[112] !== z
      ? ((Q = (0, D.jsx)(v, {
          open: !0,
          contentProps: R,
          showDialogClose: z,
          size: `default`,
          onOpenChange: x,
          children: Z,
        })),
        (t[109] = x),
        (t[110] = Z),
        (t[111] = R),
        (t[112] = z),
        (t[113] = Q))
      : (Q = t[113]),
    Q
  );
}
function T(e, t, n, r) {
  let i = n.toUpperCase();
  return b({ intl: e, amount: t / 10 ** r, currencyCode: i, currencyFractionDigits: r });
}
var E,
  D,
  O = e(() => {
    ((E = h()), y(), o(), t(), p(), u(), x(), C(), (D = f()));
  });
export { O as n, w as t };
//# sourceMappingURL=subscription-update-dialog-47ff984f1157.js.map
