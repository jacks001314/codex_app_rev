import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as ee,
  IDt as n,
  Iot as r,
  Ixt as te,
  JC as i,
  Lot as ne,
  Pxt as a,
  VDt as re,
  Xot as ie,
  Yot as o,
  _O as ae,
  cO as oe,
  fO as s,
  gO as se,
  hot as ce,
  iw as c,
  jDt as l,
  lO as u,
  lot as d,
  mO as le,
  oO as ue,
  qC as de,
  sO as fe,
  t3 as f,
  tw as pe,
  vO as me,
  vzt as p,
  wot as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import { $ct as _, MRt as he, NRt as v, Xct as ge, iPr as _e, sPr as y } from "./app-initial-5851df3f6cb1.js";
import { n as b, r as ve } from "./queries-a0c4a0375be0.js";
import { a as ye, c as be, n as xe, o as x, r as Se, t as Ce } from "./cadence-events-40a2bd874f74.js";
function S(e) {
  let r = (0, we.c)(96),
    { accountId: i, state: a, entryPoint: o, onClose: s } = e,
    c = te(ee),
    l = re(),
    d = o === `manage_billing_schedule`,
    [f, me] = (0, Te.useState)(a.effectiveNextCadence),
    p = `yearly`;
  d && (p = f === a.effectiveNextCadence ? null : f);
  let {
      data: m,
      error: h,
      isFetching: g,
      refetch: _,
    } = ie({
      queryKey: [`consumer-billing`, i, `cadence-preview`, p],
      queryFn: (e) => {
        let { signal: t } = e;
        return _e.safeGet(`/subscriptions/update/preview`, {
          parameters: { query: { account_id: i, updated_price_interval: p === `yearly` ? `year` : `month` } },
          signal: t,
        });
      },
      enabled: p != null && p !== a.effectiveNextCadence,
      staleTime: 0,
      retry: !1,
    }),
    v;
  r[0] === i
    ? (v = r[1])
    : ((v = async (e) => ({
        target: e,
        result: await _e.safePost(`/subscriptions/update`, {
          requestBody: { account_id: i, updated_price_interval: e === `yearly` ? `year` : `month` },
        }),
      })),
      (r[0] = i),
      (r[1] = v));
  let {
      mutate: y,
      data: b,
      isPending: x,
      error: Ce,
      reset: S,
    } = ne({
      mutationFn: v,
      onSuccess: async (e) => {
        let { target: t, result: ee } = e;
        if (ee.status != null) {
          await ve(c, i);
          return;
        }
        (xe(c, {
          accountId: i,
          state: a,
          entryPoint: o,
          action: `succeeded`,
          fromCadence: a.effectiveNextCadence,
          toCadence: t,
        }),
          await ve(c, i),
          c
            .get(ce)
            .success(
              l.formatMessage(
                {
                  id: `settings.consumerBilling.cadenceUpdateSucceeded`,
                  defaultMessage: `{kind, select, change_to_annual {Your billing will change to annual on {date}} change_to_monthly {Your billing will change to monthly on {date}} annual_will_continue {Annual billing will continue on {date}} other {Monthly billing will continue on {date}}}`,
                  description: `Success notification after the server confirms a personal Plus billing-frequency change. kind distinguishes a new annual/monthly schedule from removing a pending change; date is the localized next renewal date.`,
                },
                { kind: ye(a, t), date: O },
              ),
            ),
          s());
      },
      retry: !1,
    }),
    w;
  r[2] === m ? (w = r[3]) : ((w = be(m)), (r[2] = m), (r[3] = w));
  let Ee = w,
    T = b?.result.status != null,
    E = p != null && m != null && !Ee,
    D = Ce ?? h,
    De = D != null && p != null ? Se(D, p) : null,
    Oe = Ee && m?.renewal_date != null ? new Date(m.renewal_date) : a.renewalDate,
    O = l.formatDate(Oe, { year: `numeric`, month: `long`, day: `numeric` }),
    k = p ?? a.effectiveNextCadence,
    A = k === `yearly` ? a.annualPrice : a.monthlyPrice,
    j;
  r[4] !== k || r[5] !== l || r[6] !== a.billingCurrency || r[7] !== A.amount
    ? ((j = l.formatNumber(k === `yearly` ? Math.round(A.amount * 12) : A.amount, {
        style: `currency`,
        currency: a.billingCurrency,
      })),
      (r[4] = k),
      (r[5] = l),
      (r[6] = a.billingCurrency),
      (r[7] = A.amount),
      (r[8] = j))
    : (j = r[8]);
  let M = j,
    N = p != null && p !== a.effectiveNextCadence && Ee && h == null && !g && !x && !T,
    P;
  r[9] !== k || r[10] !== a ? ((P = ye(a, k)), (r[9] = k), (r[10] = a), (r[11] = P)) : (P = r[11]);
  let ke = P,
    F;
  if (p == null && a.requiresReactivation) {
    let e;
    (r[12] === O
      ? (e = r[13])
      : ((e = (0, C.jsx)(n, {
          id: `settings.consumerBilling.cadencePendingCancellation`,
          defaultMessage: `Your plan will be canceled on {date}`,
          description: `Current status in the Plus billing schedule selector when renewal is disabled and the subscriber has not selected a change.`,
          values: { date: O },
        })),
        (r[12] = O),
        (r[13] = e)),
      (F = e));
  } else if (p == null) {
    let e;
    (r[14] !== M || r[15] !== k || r[16] !== O || r[17] !== A.tax
      ? ((e = (0, C.jsx)(n, {
          id: `settings.consumerBilling.cadenceCurrentRenewal`,
          defaultMessage: `Your {period, select, yearly {annual} other {monthly}} plan will renew on {date} for {amount}/{period, select, yearly {year} other {month}} {tax, select, inclusive {including tax} other {+ tax}}`,
          description: `Current scheduled renewal in the Plus billing schedule dialog. period is the effective next cadence, date is the actual next renewal date, amount is the localized renewal price, and tax is its tax treatment.`,
          values: { period: k, date: O, amount: M, tax: A.tax },
        })),
        (r[14] = M),
        (r[15] = k),
        (r[16] = O),
        (r[17] = A.tax),
        (r[18] = e))
      : (e = r[18]),
      (F = e));
  } else {
    let e;
    (r[19] !== M || r[20] !== k || r[21] !== O || r[22] !== ke || r[23] !== A.tax
      ? ((e = (0, C.jsx)(n, {
          id: `settings.consumerBilling.cadenceChangeSummary`,
          defaultMessage: `{kind, select, annual_will_continue {Annual billing will continue} monthly_will_continue {Monthly billing will continue} change_to_annual {Your plan will switch to annual} other {Your plan will switch to monthly}} on {date} for {amount}/{period, select, yearly {year} other {month}} {tax, select, inclusive {including tax} other {+ tax}}`,
          description: `Review of the selected Plus billing change before confirmation. kind distinguishes a new cadence from removing an existing schedule; date is the preview's renewal date, amount is the verified display price, period is the new cadence, and tax reflects the price's tax treatment.`,
          values: { kind: ke, date: O, amount: M, period: k, tax: A.tax },
        })),
        (r[19] = M),
        (r[20] = k),
        (r[21] = O),
        (r[22] = ke),
        (r[23] = A.tax),
        (r[24] = e))
      : (e = r[24]),
      (F = e));
  }
  let Ae = !x,
    I;
  r[25] !== x || r[26] !== s
    ? ((I = (e) => {
        !e && !x && s();
      }),
      (r[25] = x),
      (r[26] = s),
      (r[27] = I))
    : (I = r[27]);
  let L;
  r[28] !== N || r[29] !== s || r[30] !== p || r[31] !== y
    ? ((L = (e) => {
        (e.preventDefault(), p == null ? s() : N && y(p));
      }),
      (r[28] = N),
      (r[29] = s),
      (r[30] = p),
      (r[31] = y),
      (r[32] = L))
    : (L = r[32]);
  let je = String(d),
    R;
  r[33] === je
    ? (R = r[34])
    : ((R = (0, C.jsx)(ae, {
        children: (0, C.jsx)(n, {
          id: `settings.consumerBilling.cadenceDialogTitle`,
          defaultMessage: `{manage, select, true {Manage billing schedule} other {Confirm billing change}}`,
          description: `Title of the personal Plus billing-frequency dialog. manage selects the Monthly/Annual selector; otherwise this is confirmation of the annual savings offer.`,
          values: { manage: je },
        }),
      })),
      (r[33] = je),
      (r[34] = R));
  let z;
  r[35] !== O || r[36] !== d
    ? ((z = d
        ? (0, C.jsx)(se, {
            children: (0, C.jsx)(n, {
              id: `settings.consumerBilling.cadenceDialogDescription`,
              defaultMessage: `Review or update your billing schedule. Any change will take effect at your next renewal on {date}.`,
              description: `Explains when changes in the Plus Monthly/Annual billing selector take effect. date is the actual localized next renewal date.`,
              values: { date: O },
            }),
          })
        : null),
      (r[35] = O),
      (r[36] = d),
      (r[37] = z))
    : (z = r[37]);
  let B;
  r[38] !== R || r[39] !== z
    ? ((B = (0, C.jsx)(u, { children: (0, C.jsx)(oe, { title: R, subtitle: z }) })),
      (r[38] = R),
      (r[39] = z),
      (r[40] = B))
    : (B = r[40]);
  let V;
  r[41] !== i ||
  r[42] !== o ||
  r[43] !== l ||
  r[44] !== d ||
  r[45] !== T ||
  r[46] !== x ||
  r[47] !== S ||
  r[48] !== c ||
  r[49] !== f ||
  r[50] !== a
    ? ((V = (0, C.jsx)(u, {
        children: d
          ? (0, C.jsx)(C.Fragment, {
              children: [`monthly`, `yearly`].map((e) => {
                let t = e === `monthly` ? a.monthlyPrice : a.annualPrice;
                return (0, C.jsx)(
                  ge,
                  {
                    ariaCurrent: f === e ? `true` : void 0,
                    isSelected: f === e,
                    isDisabled: x || T,
                    onSelect: () => {
                      e !== f &&
                        (xe(c, {
                          accountId: i,
                          state: a,
                          entryPoint: o,
                          action: `selected`,
                          fromCadence: f,
                          toCadence: e,
                        }),
                        me(e),
                        S());
                    },
                    title: (0, C.jsx)(n, {
                      id: `settings.consumerBilling.cadenceOption`,
                      defaultMessage: `{period, select, yearly {Annual} other {Monthly}}`,
                      description: `An option for personal Plus payment frequency in the billing schedule dialog.`,
                      values: { period: e },
                    }),
                    titleAdornment:
                      e === `yearly` && a.annualSavingsPercentage > 0
                        ? (0, C.jsx)(he, {
                            variant: `promotion`,
                            children: (0, C.jsx)(n, {
                              id: `settings.consumerBilling.annualSavingsPercent`,
                              defaultMessage: `Save {percentage}%`,
                              description: `Savings badge on the annual Plus billing option. percentage is the whole-number savings versus twelve monthly payments.`,
                              values: { percentage: a.annualSavingsPercentage },
                            }),
                          })
                        : null,
                    rightText: (0, C.jsx)(n, {
                      id: `settings.consumerBilling.cadenceOptionPrice`,
                      defaultMessage: `{price}/{period, select, yearly {year} other {month}} {tax, select, inclusive {including tax} other {+ tax}}`,
                      description: `Price of a Plus billing-frequency option. price is localized annual total or monthly price, period selects the interval, and tax reflects the real price's tax treatment.`,
                      values: {
                        price: l.formatNumber(e === `yearly` ? Math.round(t.amount * 12) : t.amount, {
                          style: `currency`,
                          currency: a.billingCurrency,
                        }),
                        period: e,
                        tax: t.tax,
                      },
                    }),
                  },
                  e,
                );
              }),
            })
          : (0, C.jsx)(de, {
              children: (0, C.jsx)(pe, {
                label: (0, C.jsx)(n, {
                  id: `settings.consumerBilling.annualConfirmationPlan`,
                  defaultMessage: `ChatGPT Plus · Annual`,
                  description: `Plan title in the confirmation of annual Plus billing.`,
                }),
                description: (0, C.jsx)(n, {
                  id: `settings.consumerBilling.annualConfirmationCadence`,
                  defaultMessage: `billed annually`,
                  description: `Explains that the effective monthly price in the annual Plus confirmation is charged once per year.`,
                }),
                control: (0, C.jsx)(n, {
                  id: `settings.consumerBilling.annualConfirmationMonthlyPrice`,
                  defaultMessage: `{price}/month`,
                  description: `Effective monthly amount of annual Plus billing, not a monthly charge. price is the actual localized annual monthly-equivalent amount.`,
                  values: {
                    price: l.formatNumber(a.annualPrice.amount, {
                      style: `currency`,
                      currency: a.billingCurrency,
                    }),
                  },
                }),
              }),
            }),
      })),
      (r[41] = i),
      (r[42] = o),
      (r[43] = l),
      (r[44] = d),
      (r[45] = T),
      (r[46] = x),
      (r[47] = S),
      (r[48] = c),
      (r[49] = f),
      (r[50] = a),
      (r[51] = V))
    : (V = r[51]);
  let H;
  r[52] === F ? (H = r[53]) : ((H = (0, C.jsx)(`p`, { children: F })), (r[52] = F), (r[53] = H));
  let U;
  r[54] !== O || r[55] !== a.requiresReactivation || r[56] !== p
    ? ((U =
        a.requiresReactivation && p != null
          ? (0, C.jsx)(`p`, {
              children: (0, C.jsx)(n, {
                id: `settings.consumerBilling.cadenceReactivationDisclosure`,
                defaultMessage: `Confirming this change will reactivate your subscription. Your plan will renew on {date}.`,
                description: `Required disclosure before a billing-frequency change also restores renewal for a canceled Plus subscription. date is the server-preview renewal date.`,
                values: { date: O },
              }),
            })
          : null),
      (r[54] = O),
      (r[55] = a.requiresReactivation),
      (r[56] = p),
      (r[57] = U))
    : (U = r[57]);
  let W;
  r[58] !== H || r[59] !== U
    ? ((W = (0, C.jsxs)(u, { children: [H, U] })), (r[58] = H), (r[59] = U), (r[60] = W))
    : (W = r[60]);
  let G;
  r[61] === g
    ? (G = r[62])
    : ((G = g
        ? (0, C.jsx)(u, {
            children: (0, C.jsx)(`p`, {
              role: `status`,
              children: (0, C.jsx)(n, {
                id: `settings.consumerBilling.cadencePreviewLoading`,
                defaultMessage: `Checking your billing details…`,
                description: `Loading status while the server verifies a selected Plus billing-frequency change.`,
              }),
            }),
          })
        : null),
      (r[61] = g),
      (r[62] = G));
  let K;
  r[63] !== D ||
  r[64] !== De ||
  r[65] !== E ||
  r[66] !== T ||
  r[67] !== h ||
  r[68] !== _ ||
  r[69] !== b?.result
    ? ((K =
        D != null || E || T
          ? (0, C.jsxs)(u, {
              children: [
                (0, C.jsx)(`p`, {
                  role: `alert`,
                  children: (0, C.jsx)(n, {
                    id: `settings.consumerBilling.cadenceError`,
                    defaultMessage: `{kind, select, stale_state {Your billing schedule changed. Review the latest details and try again.} conflicting_plan_change {Your billing cadence can’t be changed while another plan change is scheduled} missing_price_configuration {This billing option isn’t available for your subscription} eligibility_changed {Annual billing is no longer available for your account} update_processing {Another billing update is still processing. Try again shortly.} other {Something went wrong. Try again.}}`,
                    description: `Error in the personal Plus billing schedule dialog. kind maps the server rejection to stale billing details, a conflicting plan change, missing price, lost eligibility, a processing update, or a generic failure. The selection remains intact.`,
                    values: {
                      kind: b?.result.status === `pending` ? `update_processing` : (De ?? `unknown`),
                    },
                  }),
                }),
                h != null || E
                  ? (0, C.jsx)(t, {
                      color: `secondary`,
                      size: `toolbar`,
                      type: `button`,
                      onClick: () => {
                        _();
                      },
                      children: (0, C.jsx)(n, {
                        id: `settings.consumerBilling.cadencePreviewRetry`,
                        defaultMessage: `Retry`,
                        description: `Retries the read-only preview of the selected billing-frequency change.`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (r[63] = D),
      (r[64] = De),
      (r[65] = E),
      (r[66] = T),
      (r[67] = h),
      (r[68] = _),
      (r[69] = b?.result),
      (r[70] = K))
    : (K = r[70]);
  let q;
  r[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, C.jsx)(n, {
        id: `settings.consumerBilling.cadenceCancel`,
        defaultMessage: `Cancel`,
        description: `Closes the Plus billing-frequency dialog without changing the subscription.`,
      })),
      (r[71] = q))
    : (q = r[71]);
  let J;
  r[72] !== x || r[73] !== s
    ? ((J = (0, C.jsx)(t, { color: `secondary`, type: `button`, disabled: x, onClick: s, children: q })),
      (r[72] = x),
      (r[73] = s),
      (r[74] = J))
    : (J = r[74]);
  let Me = x || (p != null && !N),
    Ne = String(p != null),
    Y;
  r[75] === Ne
    ? (Y = r[76])
    : ((Y = (0, C.jsx)(n, {
        id: `settings.consumerBilling.cadenceConfirm`,
        defaultMessage: `{hasChange, select, true {Confirm} other {Done}}`,
        description: `Primary action in the Plus billing schedule dialog. Confirm applies a server-reviewed selected change; Done closes when nothing changed.`,
        values: { hasChange: Ne },
      })),
      (r[75] = Ne),
      (r[76] = Y));
  let X;
  r[77] !== x || r[78] !== Me || r[79] !== Y
    ? ((X = (0, C.jsx)(t, { color: `primary`, type: `submit`, disabled: Me, loading: x, children: Y })),
      (r[77] = x),
      (r[78] = Me),
      (r[79] = Y),
      (r[80] = X))
    : (X = r[80]);
  let Z;
  r[81] !== J || r[82] !== X
    ? ((Z = (0, C.jsx)(u, { children: (0, C.jsxs)(fe, { children: [J, X] }) })),
      (r[81] = J),
      (r[82] = X),
      (r[83] = Z))
    : (Z = r[83]);
  let Q;
  r[84] !== B || r[85] !== V || r[86] !== W || r[87] !== G || r[88] !== K || r[89] !== Z || r[90] !== L
    ? ((Q = (0, C.jsxs)(ue, { as: `form`, onSubmit: L, children: [B, V, W, G, K, Z] })),
      (r[84] = B),
      (r[85] = V),
      (r[86] = W),
      (r[87] = G),
      (r[88] = K),
      (r[89] = Z),
      (r[90] = L),
      (r[91] = Q))
    : (Q = r[91]);
  let $;
  return (
    r[92] !== Q || r[93] !== Ae || r[94] !== I
      ? (($ = (0, C.jsx)(le, { open: !0, showDialogClose: Ae, onOpenChange: I, children: Q })),
        (r[92] = Q),
        (r[93] = Ae),
        (r[94] = I),
        (r[95] = $))
      : ($ = r[95]),
    $
  );
}
var we, Te, C;
function w() {
  return (w = e(() => {
    ((we = p()),
      r(),
      o(),
      a(),
      (Te = g()),
      l(),
      v(),
      f(),
      me(),
      s(),
      _(),
      d(),
      m(),
      c(),
      i(),
      y(),
      b(),
      x(),
      Ce(),
      (C = h()));
  }))();
}
w();
export { S as BillingCadenceDialog };
//# sourceMappingURL=cadence-dialog-286146e297f1.js.map
