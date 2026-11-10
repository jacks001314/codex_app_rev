import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as ee,
  AMt as n,
  Amn as r,
  Cpn as i,
  FKt as te,
  Hu as a,
  Jrt as ne,
  O3t as o,
  Opn as re,
  RKt as s,
  S3t as ie,
  Spn as c,
  Vu as ae,
  Xrt as oe,
  Xu as l,
  Yrt as se,
  Zrt as u,
  _H as d,
  a3t as ce,
  d3t as le,
  eit as ue,
  gH as de,
  hmn as f,
  iit as p,
  jXt as fe,
  kMt as pe,
  kXt as m,
  kmn as h,
  nit as me,
  o3t as g,
  qu as he,
  rit as ge,
  s3t as _,
  tit as _e,
} from "./app-initial-f094ef01c64d.js";
import { Qu as v, Zu as ve } from "./app-primary-4c40d73a1074.js";
import { d as y, p as ye } from "./queries-d729b9d20ea6.js";
import {
  a as be,
  c as xe,
  n as Se,
  o as b,
  r as Ce,
  t as we,
} from "./cadence-events-65227a5e872f.js";
function x(e) {
  let t = (0, Te.c)(96),
    { accountId: n, state: r, entryPoint: a, onClose: o } = e,
    s = ee(ce),
    c = re(),
    l = a === `manage_billing_schedule`,
    [d, ue] = (0, Ee.useState)(r.effectiveNextCadence),
    f = `yearly`;
  l && (f = d === r.effectiveNextCadence ? null : d);
  let {
      data: p,
      error: m,
      isFetching: h,
      refetch: g,
    } = ie({
      queryKey: [`consumer-billing`, n, `cadence-preview`, f],
      queryFn: (e) => {
        let { signal: t } = e;
        return te.safeGet(`/subscriptions/update/preview`, {
          parameters: {
            query: { account_id: n, updated_price_interval: f === `yearly` ? `year` : `month` },
          },
          signal: t,
        });
      },
      enabled: f != null && f !== r.effectiveNextCadence,
      staleTime: 0,
      retry: !1,
    }),
    _;
  t[0] === n
    ? (_ = t[1])
    : ((_ = async (e) => ({
        target: e,
        result: await te.safePost(`/subscriptions/update`, {
          requestBody: { account_id: n, updated_price_interval: e === `yearly` ? `year` : `month` },
        }),
      })),
      (t[0] = n),
      (t[1] = _));
  let {
      mutate: v,
      data: y,
      isPending: b,
      error: we,
      reset: x,
    } = le({
      mutationFn: _,
      onSuccess: async (e) => {
        let { target: t, result: ee } = e;
        if (ee.status != null) {
          await ye(s, n);
          return;
        }
        (Se(s, {
          accountId: n,
          state: r,
          entryPoint: a,
          action: `succeeded`,
          fromCadence: r.effectiveNextCadence,
          toCadence: t,
        }),
          await ye(s, n),
          s.get(fe).success(
            c.formatMessage(
              {
                id: `settings.consumerBilling.cadenceUpdateSucceeded`,
                defaultMessage: `{kind, select, change_to_annual {Your billing will change to annual on {date}} change_to_monthly {Your billing will change to monthly on {date}} annual_will_continue {Annual billing will continue on {date}} other {Monthly billing will continue on {date}}}`,
                description: `Success notification after the server confirms a personal Plus billing-frequency change. kind distinguishes a new annual/monthly schedule from removing a pending change; date is the localized next renewal date.`,
              },
              { kind: be(r, t), date: O },
            ),
          ),
          o());
      },
      retry: !1,
    }),
    C;
  t[2] === p ? (C = t[3]) : ((C = xe(p)), (t[2] = p), (t[3] = C));
  let w = C,
    T = y?.result.status != null,
    E = f != null && p != null && !w,
    D = we ?? m,
    De = D != null && f != null ? Ce(D, f) : null,
    Oe = w && p?.renewal_date != null ? new Date(p.renewal_date) : r.renewalDate,
    O = c.formatDate(Oe, { year: `numeric`, month: `long`, day: `numeric` }),
    k = f ?? r.effectiveNextCadence,
    A = k === `yearly` ? r.annualPrice : r.monthlyPrice,
    j;
  t[4] !== k || t[5] !== c || t[6] !== r.billingCurrency || t[7] !== A.amount
    ? ((j = c.formatNumber(k === `yearly` ? Math.round(A.amount * 12) : A.amount, {
        style: `currency`,
        currency: r.billingCurrency,
      })),
      (t[4] = k),
      (t[5] = c),
      (t[6] = r.billingCurrency),
      (t[7] = A.amount),
      (t[8] = j))
    : (j = t[8]);
  let M = j,
    N = f != null && f !== r.effectiveNextCadence && w && m == null && !h && !b && !T,
    P;
  t[9] !== k || t[10] !== r ? ((P = be(r, k)), (t[9] = k), (t[10] = r), (t[11] = P)) : (P = t[11]);
  let ke = P,
    F;
  if (f == null && r.requiresReactivation) {
    let e;
    (t[12] === O
      ? (e = t[13])
      : ((e = (0, S.jsx)(i, {
          id: `settings.consumerBilling.cadencePendingCancellation`,
          defaultMessage: `Your plan will be canceled on {date}`,
          description: `Current status in the Plus billing schedule selector when renewal is disabled and the subscriber has not selected a change.`,
          values: { date: O },
        })),
        (t[12] = O),
        (t[13] = e)),
      (F = e));
  } else if (f == null) {
    let e;
    (t[14] !== M || t[15] !== k || t[16] !== O || t[17] !== A.tax
      ? ((e = (0, S.jsx)(i, {
          id: `settings.consumerBilling.cadenceCurrentRenewal`,
          defaultMessage: `Your {period, select, yearly {annual} other {monthly}} plan will renew on {date} for {amount}/{period, select, yearly {year} other {month}} {tax, select, inclusive {including tax} other {+ tax}}`,
          description: `Current scheduled renewal in the Plus billing schedule dialog. period is the effective next cadence, date is the actual next renewal date, amount is the localized renewal price, and tax is its tax treatment.`,
          values: { period: k, date: O, amount: M, tax: A.tax },
        })),
        (t[14] = M),
        (t[15] = k),
        (t[16] = O),
        (t[17] = A.tax),
        (t[18] = e))
      : (e = t[18]),
      (F = e));
  } else {
    let e;
    (t[19] !== M || t[20] !== k || t[21] !== O || t[22] !== ke || t[23] !== A.tax
      ? ((e = (0, S.jsx)(i, {
          id: `settings.consumerBilling.cadenceChangeSummary`,
          defaultMessage: `{kind, select, annual_will_continue {Annual billing will continue} monthly_will_continue {Monthly billing will continue} change_to_annual {Your plan will switch to annual} other {Your plan will switch to monthly}} on {date} for {amount}/{period, select, yearly {year} other {month}} {tax, select, inclusive {including tax} other {+ tax}}`,
          description: `Review of the selected Plus billing change before confirmation. kind distinguishes a new cadence from removing an existing schedule; date is the preview's renewal date, amount is the verified display price, period is the new cadence, and tax reflects the price's tax treatment.`,
          values: { kind: ke, date: O, amount: M, period: k, tax: A.tax },
        })),
        (t[19] = M),
        (t[20] = k),
        (t[21] = O),
        (t[22] = ke),
        (t[23] = A.tax),
        (t[24] = e))
      : (e = t[24]),
      (F = e));
  }
  let Ae = !b,
    I;
  t[25] !== b || t[26] !== o
    ? ((I = (e) => {
        !e && !b && o();
      }),
      (t[25] = b),
      (t[26] = o),
      (t[27] = I))
    : (I = t[27]);
  let L;
  t[28] !== N || t[29] !== o || t[30] !== f || t[31] !== v
    ? ((L = (e) => {
        (e.preventDefault(), f == null ? o() : N && v(f));
      }),
      (t[28] = N),
      (t[29] = o),
      (t[30] = f),
      (t[31] = v),
      (t[32] = L))
    : (L = t[32]);
  let je = String(l),
    R;
  t[33] === je
    ? (R = t[34])
    : ((R = (0, S.jsx)(ge, {
        children: (0, S.jsx)(i, {
          id: `settings.consumerBilling.cadenceDialogTitle`,
          defaultMessage: `{manage, select, true {Manage billing schedule} other {Confirm billing change}}`,
          description: `Title of the personal Plus billing-frequency dialog. manage selects the Monthly/Annual selector; otherwise this is confirmation of the annual savings offer.`,
          values: { manage: je },
        }),
      })),
      (t[33] = je),
      (t[34] = R));
  let z;
  t[35] !== O || t[36] !== l
    ? ((z = l
        ? (0, S.jsx)(me, {
            children: (0, S.jsx)(i, {
              id: `settings.consumerBilling.cadenceDialogDescription`,
              defaultMessage: `Review or update your billing schedule. Any change will take effect at your next renewal on {date}.`,
              description: `Explains when changes in the Plus Monthly/Annual billing selector take effect. date is the actual localized next renewal date.`,
              values: { date: O },
            }),
          })
        : null),
      (t[35] = O),
      (t[36] = l),
      (t[37] = z))
    : (z = t[37]);
  let B;
  t[38] !== R || t[39] !== z
    ? ((B = (0, S.jsx)(u, { children: (0, S.jsx)(oe, { title: R, subtitle: z }) })),
      (t[38] = R),
      (t[39] = z),
      (t[40] = B))
    : (B = t[40]);
  let V;
  t[41] !== n ||
  t[42] !== a ||
  t[43] !== c ||
  t[44] !== l ||
  t[45] !== T ||
  t[46] !== b ||
  t[47] !== x ||
  t[48] !== s ||
  t[49] !== d ||
  t[50] !== r
    ? ((V = (0, S.jsx)(u, {
        children: l
          ? (0, S.jsx)(S.Fragment, {
              children: [`monthly`, `yearly`].map((e) => {
                let t = e === `monthly` ? r.monthlyPrice : r.annualPrice;
                return (0, S.jsx)(
                  ve,
                  {
                    ariaCurrent: d === e ? `true` : void 0,
                    isSelected: d === e,
                    isDisabled: b || T,
                    onSelect: () => {
                      e !== d &&
                        (Se(s, {
                          accountId: n,
                          state: r,
                          entryPoint: a,
                          action: `selected`,
                          fromCadence: d,
                          toCadence: e,
                        }),
                        ue(e),
                        x());
                    },
                    title: (0, S.jsx)(i, {
                      id: `settings.consumerBilling.cadenceOption`,
                      defaultMessage: `{period, select, yearly {Annual} other {Monthly}}`,
                      description: `An option for personal Plus payment frequency in the billing schedule dialog.`,
                      values: { period: e },
                    }),
                    titleAdornment:
                      e === `yearly` && r.annualSavingsPercentage > 0
                        ? (0, S.jsx)(de, {
                            variant: `promotion`,
                            children: (0, S.jsx)(i, {
                              id: `settings.consumerBilling.annualSavingsPercent`,
                              defaultMessage: `Save {percentage}%`,
                              description: `Savings badge on the annual Plus billing option. percentage is the whole-number savings versus twelve monthly payments.`,
                              values: { percentage: r.annualSavingsPercentage },
                            }),
                          })
                        : null,
                    rightText: (0, S.jsx)(i, {
                      id: `settings.consumerBilling.cadenceOptionPrice`,
                      defaultMessage: `{price}/{period, select, yearly {year} other {month}} {tax, select, inclusive {including tax} other {+ tax}}`,
                      description: `Price of a Plus billing-frequency option. price is localized annual total or monthly price, period selects the interval, and tax reflects the real price's tax treatment.`,
                      values: {
                        price: c.formatNumber(
                          e === `yearly` ? Math.round(t.amount * 12) : t.amount,
                          {
                            style: `currency`,
                            currency: r.billingCurrency,
                          },
                        ),
                        period: e,
                        tax: t.tax,
                      },
                    }),
                  },
                  e,
                );
              }),
            })
          : (0, S.jsx)(ae, {
              children: (0, S.jsx)(he, {
                label: (0, S.jsx)(i, {
                  id: `settings.consumerBilling.annualConfirmationPlan`,
                  defaultMessage: `ChatGPT Plus · Annual`,
                  description: `Plan title in the confirmation of annual Plus billing.`,
                }),
                description: (0, S.jsx)(i, {
                  id: `settings.consumerBilling.annualConfirmationCadence`,
                  defaultMessage: `billed annually`,
                  description: `Explains that the effective monthly price in the annual Plus confirmation is charged once per year.`,
                }),
                control: (0, S.jsx)(i, {
                  id: `settings.consumerBilling.annualConfirmationMonthlyPrice`,
                  defaultMessage: `{price}/month`,
                  description: `Effective monthly amount of annual Plus billing, not a monthly charge. price is the actual localized annual monthly-equivalent amount.`,
                  values: {
                    price: c.formatNumber(r.annualPrice.amount, {
                      style: `currency`,
                      currency: r.billingCurrency,
                    }),
                  },
                }),
              }),
            }),
      })),
      (t[41] = n),
      (t[42] = a),
      (t[43] = c),
      (t[44] = l),
      (t[45] = T),
      (t[46] = b),
      (t[47] = x),
      (t[48] = s),
      (t[49] = d),
      (t[50] = r),
      (t[51] = V))
    : (V = t[51]);
  let H;
  t[52] === F ? (H = t[53]) : ((H = (0, S.jsx)(`p`, { children: F })), (t[52] = F), (t[53] = H));
  let U;
  t[54] !== O || t[55] !== r.requiresReactivation || t[56] !== f
    ? ((U =
        r.requiresReactivation && f != null
          ? (0, S.jsx)(`p`, {
              children: (0, S.jsx)(i, {
                id: `settings.consumerBilling.cadenceReactivationDisclosure`,
                defaultMessage: `Confirming this change will reactivate your subscription. Your plan will renew on {date}.`,
                description: `Required disclosure before a billing-frequency change also restores renewal for a canceled Plus subscription. date is the server-preview renewal date.`,
                values: { date: O },
              }),
            })
          : null),
      (t[54] = O),
      (t[55] = r.requiresReactivation),
      (t[56] = f),
      (t[57] = U))
    : (U = t[57]);
  let W;
  t[58] !== H || t[59] !== U
    ? ((W = (0, S.jsxs)(u, { children: [H, U] })), (t[58] = H), (t[59] = U), (t[60] = W))
    : (W = t[60]);
  let G;
  t[61] === h
    ? (G = t[62])
    : ((G = h
        ? (0, S.jsx)(u, {
            children: (0, S.jsx)(`p`, {
              role: `status`,
              children: (0, S.jsx)(i, {
                id: `settings.consumerBilling.cadencePreviewLoading`,
                defaultMessage: `Checking your billing details…`,
                description: `Loading status while the server verifies a selected Plus billing-frequency change.`,
              }),
            }),
          })
        : null),
      (t[61] = h),
      (t[62] = G));
  let K;
  t[63] !== D ||
  t[64] !== De ||
  t[65] !== E ||
  t[66] !== T ||
  t[67] !== m ||
  t[68] !== g ||
  t[69] !== y?.result
    ? ((K =
        D != null || E || T
          ? (0, S.jsxs)(u, {
              children: [
                (0, S.jsx)(`p`, {
                  role: `alert`,
                  children: (0, S.jsx)(i, {
                    id: `settings.consumerBilling.cadenceError`,
                    defaultMessage: `{kind, select, stale_state {Your billing schedule changed. Review the latest details and try again.} conflicting_plan_change {Your billing cadence can’t be changed while another plan change is scheduled} missing_price_configuration {This billing option isn’t available for your subscription} eligibility_changed {Annual billing is no longer available for your account} update_processing {Another billing update is still processing. Try again shortly.} other {Something went wrong. Try again.}}`,
                    description: `Error in the personal Plus billing schedule dialog. kind maps the server rejection to stale billing details, a conflicting plan change, missing price, lost eligibility, a processing update, or a generic failure. The selection remains intact.`,
                    values: {
                      kind:
                        y?.result.status === `pending` ? `update_processing` : (De ?? `unknown`),
                    },
                  }),
                }),
                m != null || E
                  ? (0, S.jsx)(pe, {
                      color: `secondary`,
                      size: `toolbar`,
                      type: `button`,
                      onClick: () => {
                        g();
                      },
                      children: (0, S.jsx)(i, {
                        id: `settings.consumerBilling.cadencePreviewRetry`,
                        defaultMessage: `Retry`,
                        description: `Retries the read-only preview of the selected billing-frequency change.`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[63] = D),
      (t[64] = De),
      (t[65] = E),
      (t[66] = T),
      (t[67] = m),
      (t[68] = g),
      (t[69] = y?.result),
      (t[70] = K))
    : (K = t[70]);
  let q;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, S.jsx)(i, {
        id: `settings.consumerBilling.cadenceCancel`,
        defaultMessage: `Cancel`,
        description: `Closes the Plus billing-frequency dialog without changing the subscription.`,
      })),
      (t[71] = q))
    : (q = t[71]);
  let J;
  t[72] !== b || t[73] !== o
    ? ((J = (0, S.jsx)(pe, {
        color: `secondary`,
        type: `button`,
        disabled: b,
        onClick: o,
        children: q,
      })),
      (t[72] = b),
      (t[73] = o),
      (t[74] = J))
    : (J = t[74]);
  let Me = b || (f != null && !N),
    Ne = String(f != null),
    Y;
  t[75] === Ne
    ? (Y = t[76])
    : ((Y = (0, S.jsx)(i, {
        id: `settings.consumerBilling.cadenceConfirm`,
        defaultMessage: `{hasChange, select, true {Confirm} other {Done}}`,
        description: `Primary action in the Plus billing schedule dialog. Confirm applies a server-reviewed selected change; Done closes when nothing changed.`,
        values: { hasChange: Ne },
      })),
      (t[75] = Ne),
      (t[76] = Y));
  let X;
  t[77] !== b || t[78] !== Me || t[79] !== Y
    ? ((X = (0, S.jsx)(pe, {
        color: `primary`,
        type: `submit`,
        disabled: Me,
        loading: b,
        children: Y,
      })),
      (t[77] = b),
      (t[78] = Me),
      (t[79] = Y),
      (t[80] = X))
    : (X = t[80]);
  let Z;
  t[81] !== J || t[82] !== X
    ? ((Z = (0, S.jsx)(u, { children: (0, S.jsxs)(se, { children: [J, X] }) })),
      (t[81] = J),
      (t[82] = X),
      (t[83] = Z))
    : (Z = t[83]);
  let Q;
  t[84] !== B ||
  t[85] !== V ||
  t[86] !== W ||
  t[87] !== G ||
  t[88] !== K ||
  t[89] !== Z ||
  t[90] !== L
    ? ((Q = (0, S.jsxs)(ne, { as: `form`, onSubmit: L, children: [B, V, W, G, K, Z] })),
      (t[84] = B),
      (t[85] = V),
      (t[86] = W),
      (t[87] = G),
      (t[88] = K),
      (t[89] = Z),
      (t[90] = L),
      (t[91] = Q))
    : (Q = t[91]);
  let $;
  return (
    t[92] !== Q || t[93] !== Ae || t[94] !== I
      ? (($ = (0, S.jsx)(_e, { open: !0, showDialogClose: Ae, onOpenChange: I, children: Q })),
        (t[92] = Q),
        (t[93] = Ae),
        (t[94] = I),
        (t[95] = $))
      : ($ = t[95]),
    $
  );
}
var Te, Ee, S;
e(() => {
  ((Te = h()),
    _(),
    o(),
    (Ee = t(r(), 1)),
    c(),
    d(),
    n(),
    p(),
    ue(),
    v(),
    m(),
    g(),
    l(),
    a(),
    s(),
    y(),
    b(),
    we(),
    (S = f()));
})();
export { x as BillingCadenceDialog };
//# sourceMappingURL=cadence-dialog-857e209dc1e9.js.map
