import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $it as n,
  $st as r,
  FBt as i,
  HO as a,
  IO as o,
  JO as s,
  LNt as c,
  LO as l,
  MNt as u,
  Mst as d,
  NNt as f,
  OT as p,
  PBt as m,
  Qst as h,
  RO as g,
  Rrt as _,
  Vrt as v,
  WO as y,
  XOt as b,
  Y3 as x,
  Z3 as S,
  ZSt as C,
  d5 as w,
  iCt as T,
  jst as ee,
  kT as E,
  nB as D,
  okt as te,
  p5 as O,
  qO as k,
  qrt as ne,
  rB as A,
  tkt as j,
  vD as re,
  vT as ie,
  vst as M,
  wB as N,
  xB as ae,
  yD as P,
  yT as F,
  yst as I,
  zO as L,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $At as oe,
  Ajt as R,
  CRn as z,
  Cjt as se,
  Ckt as ce,
  Dkt as le,
  Ejr as ue,
  Ejt as B,
  Ijt as de,
  JAt as fe,
  Ljt as pe,
  Mir as V,
  Nir as H,
  Okt as me,
  QAt as U,
  QSt as he,
  Qjt as ge,
  Rjt as _e,
  SRn as ve,
  Sjr as ye,
  Sjt as be,
  Skt as xe,
  Tkt as Se,
  UAt as Ce,
  Vjt as we,
  XGn as Te,
  Xzr as Ee,
  Ydr as De,
  ZAt as Oe,
  ZGn as ke,
  ZSt as Ae,
  bRn as je,
  bkt as Me,
  cjt as Ne,
  djt as Pe,
  ejt as Fe,
  fjt as Ie,
  flt as Le,
  hjt as Re,
  iRr as ze,
  ijt as Be,
  imr as Ve,
  jcn as He,
  kAt as Ue,
  kjt as We,
  kkt as Ge,
  ljt as Ke,
  mjt as qe,
  njt as Je,
  ojt as Ye,
  pjt as Xe,
  qAt as Ze,
  rjt as Qe,
  rmr as $e,
  sRr as et,
  tLr as tt,
  tjt as nt,
  ujt as rt,
  vjr as it,
  wcn as at,
  wkt as ot,
  xMr as st,
  xjr as ct,
  xkt as lt,
  yMr as ut,
  ykt as dt,
  zjt as ft,
} from "./app-initial-ad16eaadf81f.js";
import {
  a as W,
  i as pt,
  n as mt,
  r as ht,
  s as gt,
  t as _t,
} from "./auto-reload-discount-components-6b8962cd1116.js";
import { a as vt, c as yt, i as G, l as K, o as q, r as bt, s as xt } from "./dialog-fields-631df512e31c.js";
function St(e) {
  let t = (0, wt.c)(76),
    {
      intl: n,
      minimumBalance: r,
      monthlyLimit: i,
      pricingInfo: a,
      isDiscountedAutoReloadExperience: o,
      reloadAmountContent: s,
      disabled: c,
      minimumBalanceError: l,
      monthlyLimitError: d,
      immediateTopUpStatus: f,
      immediateTopUpFailureAmount: p,
      isManagePaymentPending: m,
      onMinimumBalanceChange: h,
      onInvalidMinimumBalanceCurrencyDraftChange: g,
      onMinimumBalanceBlur: _,
      onMonthlyLimitChange: v,
      onInvalidMonthlyLimitCurrencyDraftChange: y,
      onMonthlyLimitBlur: b,
      onOpenManagePayment: x,
    } = e,
    S = o !== void 0 && o,
    C = c !== void 0 && c,
    w = (0, Tt.useId)(),
    T = (0, Tt.useId)(),
    [ee, E] = (0, Tt.useState)(!1),
    te;
  t[0] === S
    ? (te = t[1])
    : ((te = S
        ? (0, J.jsx)(j, {
            id: `settings.usage.creditReload.minimumBalance.discounted.v2`,
            defaultMessage: `Minimum balance`,
            description: `Label shown above the balance threshold in the discounted auto-reload modal`,
          })
        : (0, J.jsx)(j, {
            id: `settings.usage.creditReload.minimumBalance`,
            defaultMessage: `Minimum balance`,
            description: `Label shown above the minimum balance input`,
          })),
      (t[0] = S),
      (t[1] = te));
  let O;
  t[2] !== n || t[3] !== S || t[4] !== ee
    ? ((O = S
        ? (0, J.jsx)(D, {
            open: ee,
            onOpenChange: E,
            tooltipContent: (0, J.jsx)(j, {
              id: `settings.usage.creditReload.minimumBalance.discounted.tooltip`,
              defaultMessage: `Automatically purchase credits when my balance drops below this amount`,
              description: `Tooltip explaining when discounted auto-reload starts based on the minimum balance`,
            }),
            children: (0, J.jsx)(`button`, {
              type: `button`,
              "aria-label": n.formatMessage({
                id: `settings.usage.creditReload.minimumBalance.discounted.tooltip.ariaLabel`,
                defaultMessage: `About minimum balance`,
                description: `Accessible label for the discounted auto-reload minimum balance tooltip trigger`,
              }),
              className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent p-0 text-tertiary outline-none hover:text-default focus-visible:ring-2 focus-visible:ring-ring`,
              onClick: () => {
                E(Ct);
              },
              children: (0, J.jsx)(ae, {
                legacyIcon: Ae,
                asset16: ie,
                legacyClassName: `icon-2xs`,
                "aria-hidden": !0,
              }),
            }),
          })
        : null),
      (t[2] = n),
      (t[3] = S),
      (t[4] = ee),
      (t[5] = O))
    : (O = t[5]);
  let k;
  t[6] !== te || t[7] !== O
    ? ((k = (0, J.jsxs)(`div`, {
        className: `flex items-center gap-1 text-sm text-default`,
        children: [te, O],
      })),
      (t[6] = te),
      (t[7] = O),
      (t[8] = k))
    : (k = t[8]);
  let ne = l != null,
    A = l == null ? void 0 : w,
    M;
  t[9] !== n || t[10] !== S
    ? ((M = S
        ? n.formatMessage({
            id: `settings.usage.creditReload.minimumBalance.discounted.ariaLabel.v2`,
            defaultMessage: `Minimum balance`,
            description: `Accessible label for the balance threshold in the discounted auto-reload modal`,
          })
        : n.formatMessage({
            id: `settings.usage.creditReload.minimumBalance.ariaLabel`,
            defaultMessage: `Minimum balance`,
            description: `Accessible label for the minimum balance input`,
          })),
      (t[9] = n),
      (t[10] = S),
      (t[11] = M))
    : (M = t[11]);
  let N;
  t[12] !== C ||
  t[13] !== n ||
  t[14] !== S ||
  t[15] !== r ||
  t[16] !== g ||
  t[17] !== _ ||
  t[18] !== h ||
  t[19] !== a ||
  t[20] !== ne ||
  t[21] !== A ||
  t[22] !== M
    ? ((N = (0, J.jsx)(bt, {
        intl: n,
        value: r,
        pricingInfo: a,
        placeholder: ``,
        hasError: ne,
        disabled: C,
        errorDescriptionId: A,
        ariaLabel: M,
        showCreditQuantity: S,
        showCurrencyPrefixWhenEmpty: S,
        onInvalidCurrencyDraftChange: g,
        onBlur: _,
        onChange: h,
      })),
      (t[12] = C),
      (t[13] = n),
      (t[14] = S),
      (t[15] = r),
      (t[16] = g),
      (t[17] = _),
      (t[18] = h),
      (t[19] = a),
      (t[20] = ne),
      (t[21] = A),
      (t[22] = M),
      (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] !== n || t[25] !== S || t[26] !== l || t[27] !== w || t[28] !== a
    ? ((P =
        l == null
          ? null
          : (0, J.jsx)(G, {
              id: w,
              fieldError: l,
              minimumCurrencyAmount: S ? xt({ intl: n, creditQuantity: 125, pricingInfo: a }) : void 0,
            })),
      (t[24] = n),
      (t[25] = S),
      (t[26] = l),
      (t[27] = w),
      (t[28] = a),
      (t[29] = P))
    : (P = t[29]);
  let F;
  t[30] !== P || t[31] !== k || t[32] !== N
    ? ((F = (0, J.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [k, N, P] })),
      (t[30] = P),
      (t[31] = k),
      (t[32] = N),
      (t[33] = F))
    : (F = t[33]);
  let I;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, J.jsx)(j, {
        id: `settings.usage.creditReload.spendLimit`,
        defaultMessage: `Maximum monthly spend`,
        description: `Label shown above the monthly reload spend limit`,
      })),
      (t[34] = I))
    : (I = t[34]);
  let L;
  t[35] === S
    ? (L = t[36])
    : ((L = (0, J.jsxs)(`label`, {
        className: `flex items-center gap-1 text-sm text-default`,
        children: [
          I,
          (0, J.jsx)(`span`, {
            className: `text-secondary`,
            children: S
              ? (0, J.jsx)(j, {
                  id: `settings.usage.creditReload.spendLimit.optional.discounted`,
                  defaultMessage: `(optional)`,
                  description: `Helper label marking the monthly reload spend limit as optional in the discounted auto-reload modal`,
                })
              : (0, J.jsx)(j, {
                  id: `settings.usage.creditReload.spendLimit.optional`,
                  defaultMessage: `(Optional)`,
                  description: `Helper label marking the monthly reload spend limit as optional`,
                }),
          }),
        ],
      })),
      (t[35] = S),
      (t[36] = L));
  let oe;
  t[37] === n
    ? (oe = t[38])
    : ((oe = n.formatMessage({
        id: `settings.usage.creditReload.spendLimit.placeholder`,
        defaultMessage: `No limit`,
        description: `Placeholder shown when no monthly reload spend limit is set`,
      })),
      (t[37] = n),
      (t[38] = oe));
  let R = d != null,
    z = d == null ? void 0 : T,
    se;
  t[39] !== n || t[40] !== S
    ? ((se = S
        ? n.formatMessage({
            id: `settings.usage.creditReload.spendLimit.discounted.ariaLabel`,
            defaultMessage: `Maximum monthly spend (optional)`,
            description: `Accessible label for the optional maximum monthly spend in the discounted auto-reload modal`,
          })
        : n.formatMessage({
            id: `settings.usage.creditReload.spendLimit.ariaLabel`,
            defaultMessage: `Monthly reload spend limit`,
            description: `Accessible label for the monthly reload spend limit input`,
          })),
      (t[39] = n),
      (t[40] = S),
      (t[41] = se))
    : (se = t[41]);
  let ce;
  t[42] !== C ||
  t[43] !== n ||
  t[44] !== S ||
  t[45] !== i ||
  t[46] !== y ||
  t[47] !== b ||
  t[48] !== v ||
  t[49] !== a ||
  t[50] !== oe ||
  t[51] !== R ||
  t[52] !== z ||
  t[53] !== se
    ? ((ce = (0, J.jsx)(bt, {
        intl: n,
        value: i,
        pricingInfo: a,
        placeholder: oe,
        hasError: R,
        disabled: C,
        errorDescriptionId: z,
        ariaLabel: se,
        showCreditQuantity: !0,
        showCurrencyPrefixWhenEmpty: S,
        onInvalidCurrencyDraftChange: y,
        onBlur: b,
        onChange: v,
      })),
      (t[42] = C),
      (t[43] = n),
      (t[44] = S),
      (t[45] = i),
      (t[46] = y),
      (t[47] = b),
      (t[48] = v),
      (t[49] = a),
      (t[50] = oe),
      (t[51] = R),
      (t[52] = z),
      (t[53] = se),
      (t[54] = ce))
    : (ce = t[54]);
  let le;
  t[55] !== S || t[56] !== d || t[57] !== T
    ? ((le =
        d === `monthly-limit-below-target` && S
          ? (0, J.jsx)(`p`, {
              id: T,
              className: `text-sm text-danger`,
              children: (0, J.jsx)(j, {
                id: `settings.usage.creditReload.spendLimit.discounted.error`,
                defaultMessage: `Maximum monthly spend must cover the minimum balance plus the reload amount`,
                description: `Validation message when the optional maximum monthly spend is below the configured minimum balance plus reload amount`,
              }),
            })
          : d == null
            ? null
            : (0, J.jsx)(G, { id: T, fieldError: d })),
      (t[55] = S),
      (t[56] = d),
      (t[57] = T),
      (t[58] = le))
    : (le = t[58]);
  let ue;
  t[59] !== L || t[60] !== ce || t[61] !== le
    ? ((ue = (0, J.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [L, ce, le] })),
      (t[59] = L),
      (t[60] = ce),
      (t[61] = le),
      (t[62] = ue))
    : (ue = t[62]);
  let B;
  t[63] === f
    ? (B = t[64])
    : ((B =
        f === `failed`
          ? (0, J.jsx)(re, {
              type: `error`,
              layout: `vertical`,
              content: (0, J.jsx)(j, {
                id: `settings.usage.creditReload.immediateTopUpFailure.unconfirmed`,
                defaultMessage: `We couldn’t confirm the initial top-up. Check your transaction history before trying again.`,
                description: `Inline warning in the credit reload dialog after an end user attempts to enable auto-reload but the initial credit purchase outcome is uncertain. Use a calm, cautionary tone: a charge may have occurred, so the user should check transaction history before retrying; this does not mean their card was declined.`,
              }),
            })
          : null),
      (t[63] = f),
      (t[64] = B));
  let de;
  t[65] !== p || t[66] !== f || t[67] !== m || t[68] !== x
    ? ((de =
        f === `payment_declined`
          ? (0, J.jsx)(`div`, {
              className: `rounded-2xl border border-text-danger/20 bg-background-danger-surface/20 px-4 py-3 text-sm leading-5 text-default`,
              children:
                p == null
                  ? (0, J.jsx)(j, {
                      id: `settings.usage.creditReload.immediateTopUpFailure.generic`,
                      defaultMessage: `The initial reload failed. <managePayment>Update your payment method</managePayment>`,
                      description: `Inline error shown when the initial auto reload purchase fails`,
                      values: {
                        managePayment: (e) =>
                          (0, J.jsx)(`button`, {
                            type: `button`,
                            className: u(
                              `cursor-interaction font-medium underline underline-offset-2`,
                              m && `pointer-events-none opacity-60`,
                            ),
                            disabled: m,
                            onClick: x,
                            children: e,
                          }),
                      },
                    })
                  : (0, J.jsx)(j, {
                      id: `settings.usage.creditReload.immediateTopUpFailure.amount`,
                      defaultMessage: `The initial reload for an estimated {amount} failed. <managePayment>Update your payment method</managePayment>`,
                      description: `Inline error shown when the initial auto reload purchase fails with a price estimate`,
                      values: {
                        amount: p,
                        managePayment: (e) =>
                          (0, J.jsx)(`button`, {
                            type: `button`,
                            className: u(
                              `cursor-interaction font-medium underline underline-offset-2`,
                              m && `pointer-events-none opacity-60`,
                            ),
                            disabled: m,
                            onClick: x,
                            children: e,
                          }),
                      },
                    }),
            })
          : null),
      (t[65] = p),
      (t[66] = f),
      (t[67] = m),
      (t[68] = x),
      (t[69] = de))
    : (de = t[69]);
  let fe;
  return (
    t[70] !== s || t[71] !== F || t[72] !== ue || t[73] !== B || t[74] !== de
      ? ((fe = (0, J.jsxs)(J.Fragment, { children: [s, F, ue, B, de] })),
        (t[70] = s),
        (t[71] = F),
        (t[72] = ue),
        (t[73] = B),
        (t[74] = de),
        (t[75] = fe))
      : (fe = t[75]),
    fe
  );
}
function Ct(e) {
  return !e;
}
var wt, Tt, J;
function Et() {
  return (Et = e(() => {
    ((wt = m()), F(), f(), (Tt = i()), b(), P(), N(), A(), he(), q(), K(), qe(), (J = c()));
  }))();
}
function Dt(e) {
  let n = (0, Wt.c)(42),
    { source: r, creditDetails: i, pricingInfo: a, onOpenChange: o, dialogDescriptionId: s } = e,
    c = t(h),
    { email: u } = Ve(),
    d = ue(),
    f = Me(),
    p = te(),
    [m, g] = (0, X.useState)(String(U[0])),
    [_, v] = (0, X.useState)(`preset`),
    [y, b] = (0, X.useState)(!1),
    [S, C] = (0, X.useState)(!1),
    w;
  n[0] !== S || n[1] !== a || n[2] !== m
    ? ((w = S ? `invalid-currency-amount` : Xe({ value: m, pricingInfo: a })),
      (n[0] = S),
      (n[1] = a),
      (n[2] = m),
      (n[3] = w))
    : (w = n[3]);
  let T = w,
    ee;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Z.jsx)(j, {
        id: `settings.usage.creditReload.oneTimePurchase.title`,
        defaultMessage: `One time credit purchase`,
        description: `Title for the one time credit purchase modal`,
      })),
      (n[4] = ee))
    : (ee = n[4]);
  let E = ee,
    D;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(j, {
        id: `settings.usage.creditReload.oneTimePurchase.description`,
        defaultMessage: `Purchase credits to keep working when your included usage runs out. <link>View rate card</link>`,
        description: `Description for the one time credit purchase modal`,
        values: { link: Ot },
      })),
      (n[5] = D))
    : (D = n[5]);
  let O = D,
    k;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(j, {
        id: `settings.usage.creditReload.oneTimePurchase.screenReaderDescription`,
        defaultMessage: `Purchase credits to keep working when your included usage runs out. View rate card`,
        description: `Screen reader description for the one time credit purchase modal`,
      })),
      (n[6] = k))
    : (k = n[6]);
  let ne = k,
    A;
  n[7] !== u ||
  n[8] !== o ||
  n[9] !== m ||
  n[10] !== T ||
  n[11] !== c ||
  n[12] !== r ||
  n[13] !== d ||
  n[14] !== f
    ? ((A = () => {
        (b(!0),
          T ??
            Bt({
              scope: c,
              source: r,
              email: u,
              quantity: m,
              onOpenChange: o,
              statsigClient: d,
              tryOpenEmbeddedCreditCheckout: f,
            }));
      }),
      (n[7] = u),
      (n[8] = o),
      (n[9] = m),
      (n[10] = T),
      (n[11] = c),
      (n[12] = r),
      (n[13] = d),
      (n[14] = f),
      (n[15] = A))
    : (A = n[15]);
  let re = A,
    ie = T != null,
    M;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(j, {
        id: `settings.usage.creditReload.continueToCheckout`,
        defaultMessage: `Continue to checkout`,
        description: `Button label to open checkout from a credit purchase modal`,
      })),
      (n[16] = M))
    : (M = n[16]);
  let N;
  n[17] === ie
    ? (N = n[18])
    : ((N = (0, Z.jsx)(l, {
        className: `w-auto`,
        children: (0, Z.jsx)(x, {
          color: `primary`,
          type: `submit`,
          className: qt,
          disabled: ie,
          children: M,
        }),
      })),
      (n[17] = ie),
      (n[18] = N));
  let ae;
  n[19] !== i || n[20] !== p || n[21] !== a || n[22] !== N
    ? ((ae = (0, Z.jsx)(zt, { intl: p, creditDetails: i, pricingInfo: a, actions: N })),
      (n[19] = i),
      (n[20] = p),
      (n[21] = a),
      (n[22] = N),
      (n[23] = ae))
    : (ae = n[23]);
  let P;
  n[24] === re
    ? (P = n[25])
    : ((P = () => {
        re();
      }),
      (n[24] = re),
      (n[25] = P));
  let F = y ? T : null,
    I;
  n[26] === a ? (I = n[27]) : ((I = Ie(a)), (n[26] = a), (n[27] = I));
  let oe;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (e) => {
        (C(!1), v(e));
      }),
      (n[28] = oe))
    : (oe = n[28]);
  let R;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => {
        b(!0);
      }),
      (n[29] = R))
    : (R = n[29]);
  let z;
  n[30] !== _ || n[31] !== p || n[32] !== a || n[33] !== m || n[34] !== F || n[35] !== I
    ? ((z = (0, Z.jsx)(L, {
        className: `gap-3 pt-4`,
        children: (0, Z.jsx)(vt, {
          intl: p,
          value: m,
          selection: _,
          pricingInfo: a,
          error: F,
          minimumQuantity: I,
          quantityStep: Oe,
          onChange: g,
          onSelectionChange: oe,
          onInvalidCurrencyDraftChange: C,
          onBlur: R,
        }),
      })),
      (n[30] = _),
      (n[31] = p),
      (n[32] = a),
      (n[33] = m),
      (n[34] = F),
      (n[35] = I),
      (n[36] = z))
    : (z = n[36]);
  let se;
  return (
    n[37] !== s || n[38] !== P || n[39] !== z || n[40] !== ae
      ? ((se = (0, Z.jsx)(Ut, {
          dialogDescriptionId: s,
          screenReaderTitle: E,
          screenReaderDescription: ne,
          headerTitle: E,
          headerSubtitle: O,
          footer: ae,
          onSubmit: P,
          children: z,
        })),
        (n[37] = s),
        (n[38] = P),
        (n[39] = z),
        (n[40] = ae),
        (n[41] = se))
      : (se = n[41]),
    se
  );
}
function Ot(e) {
  return (0, Z.jsx)(Lt, { children: e });
}
function kt(e) {
  let n = (0, Wt.c)(214),
    {
      source: r,
      variant: i,
      serverState: a,
      discountOffer: o,
      isDiscountOfferPending: s,
      isDiscountOfferError: c,
      isDiscountOfferFetching: l,
      creditDetails: u,
      pricingInfo: d,
      enableAutoTopUpMutation: f,
      updateAutoTopUpMutation: m,
      disableAutoTopUpMutation: g,
      onRetryDiscountOffer: _,
      onOpenChange: v,
      dialogDescriptionId: y,
    } = e,
    b = t(h),
    { email: x } = Ve(),
    S = ue(),
    C = ye(oe),
    T = Be(C.value),
    ee = Me(),
    E = te(),
    D = lt({ isEnabled: a.isEnabled, offer: o, policy: a.autoReloadCreditDiscountPolicy }),
    O = be(`personal`, S.getContext().user.custom?.plan_type),
    k = i === `setup-auto-reload` && !a.isEnabled && D.kind !== `legacy` && O != null ? S.getLayer(O) : null,
    A;
  n[0] === a.rechargeThreshold
    ? (A = n[1])
    : ((A = Number.parseInt(Re(a.rechargeThreshold ?? ``) || `125`, 10)),
      (n[0] = a.rechargeThreshold),
      (n[1] = A));
  let re = A,
    ie = k
      ? se({
          defaultQuantity: k.get(`auto_reload_default_credit_quantity`, 0),
          presetQuantities: k.get(`auto_reload_preset_credit_quantities`, []),
          minimumCreditQuantity: 125,
          maximumCreditQuantity: T - re,
          creditQuantityStep: 1,
        })
      : null,
    M;
  M =
    i === `add-credits`
      ? rt(a)
      : ie?.defaultCreditQuantity != null && !Re(a.rechargeTarget ?? ``)
        ? String(re + ie.defaultCreditQuantity)
        : ot({ serverState: a, discountExperience: D, maximumQuantity: T });
  let N = i !== `add-credits` && D.kind !== `legacy` ? Re(a.rechargeThreshold ?? ``) || `125` : Ne(a),
    ae = i !== `add-credits` && D.kind !== `legacy` ? Re(a.rechargeMonthlyLimit ?? ``) : Ke(a),
    P = a.isEnabled ? a.rechargeTarget : null,
    F = i !== `add-credits` && D.kind !== `legacy`,
    R = Number.parseInt(M, 10) - Number.parseInt(N, 10),
    [z, le] = (0, X.useState)(M),
    B;
  n[2] === R ? (B = n[3]) : ((B = Number.isFinite(R) && R > 0 ? String(R) : ``), (n[2] = R), (n[3] = B));
  let [de, fe] = (0, X.useState)(B),
    [pe, V] = (0, X.useState)(Ht(M) ? `preset` : `custom`),
    [H, me] = (0, X.useState)(N),
    [U, he] = (0, X.useState)(ae),
    ge;
  n[4] !== S || n[5] !== i
    ? ((ge = () => i !== `add-credits` || !it(S, `2317709095`)), (n[4] = S), (n[5] = i), (n[6] = ge))
    : (ge = n[6]);
  let [_e, ve] = (0, X.useState)(ge),
    [Se, Ce] = (0, X.useState)(!1),
    [we, Te] = (0, X.useState)(
      F && Je({ minimumBalance: N, targetBalance: M, maximumQuantity: T, persistedTargetBalance: P }) != null,
    ),
    Ee;
  n[7] !== N || n[8] !== F ? ((Ee = F && Ye(N) != null), (n[7] = N), (n[8] = F), (n[9] = Ee)) : (Ee = n[9]);
  let [De, ke] = (0, X.useState)(Ee),
    [Ae, je] = (0, X.useState)(F && Pe({ monthlyLimit: ae, targetBalance: M }) != null),
    [Le, ze] = (0, X.useState)(!1),
    [He, Ue] = (0, X.useState)(!1),
    [We, Ge] = (0, X.useState)(!1),
    [qe, Ze] = (0, X.useState)(null),
    [$e, et] = (0, X.useState)(null),
    [tt, at] = (0, X.useState)(!1),
    [ct, ut] = (0, X.useState)(!1),
    dt = f.isPending || m.isPending,
    ft = g.isPending,
    W = dt || ft,
    G = i === `add-credits` && !_e,
    K = i !== `add-credits` && D.kind !== `legacy` ? D : null,
    q = K != null,
    bt = i === `setup-auto-reload` && !a.isEnabled && (s || c),
    xt = K == null ? null : xe({ tiers: K.tiers, reloadAmount: de }),
    Ct = K?.presentation === `boost` ? K.additionalDiscountPercent : xt,
    wt = Le
      ? `invalid-currency-amount`
      : G
        ? Xe({ value: z, pricingInfo: d })
        : Je({ minimumBalance: H, targetBalance: z, maximumQuantity: T, persistedTargetBalance: P }),
    Tt;
  n[10] !== He || n[11] !== H
    ? ((Tt = He ? `invalid-currency-amount` : Ye(H)), (n[10] = He), (n[11] = H), (n[12] = Tt))
    : (Tt = n[12]);
  let J = Tt,
    Et;
  n[13] !== We || n[14] !== U || n[15] !== z
    ? ((Et = We ? `invalid-currency-amount` : Pe({ monthlyLimit: U, targetBalance: z })),
      (n[13] = We),
      (n[14] = U),
      (n[15] = z),
      (n[16] = Et))
    : (Et = n[16]);
  let Dt = Et,
    Ot =
      He || We
        ? null
        : nt({
            minimumBalance: H,
            targetBalance: z,
            monthlyLimit: U,
            maximumQuantity: T,
            persistedTargetBalance: P,
          }),
    kt = Fe({ isEnabled: !0, serverState: a, savePayload: Ot }),
    It = W || (G ? wt != null : kt == null || bt),
    Lt = W || kt == null || bt,
    Rt;
  n[17] !== et || n[18] !== Ze
    ? ((Rt = () => {
        (Ze(null), et(null));
      }),
      (n[17] = et),
      (n[18] = Ze),
      (n[19] = Rt))
    : (Rt = n[19]);
  let Y = Rt,
    Kt;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kt = [`usage-settings`, `credit-reload`, `manage-payment`]), (n[20] = Kt))
    : (Kt = n[20]);
  let qt;
  n[21] !== E || n[22] !== b
    ? ((qt = {
        mutationKey: Kt,
        mutationFn: Mt,
        onSuccess: jt,
        onError: () => {
          b.get(ne).danger(
            E.formatMessage({
              id: `settings.usage.creditReload.managePayment.error`,
              defaultMessage: `Unable to open payment settings right now. Please try again`,
              description: `Error shown when opening the manage payment flow from the combined reload dialog fails`,
            }),
            { ...Gt, errorAnalytics: { toastId: `settings.usage.creditReload.managePayment.error` } },
          );
        },
      }),
      (n[21] = E),
      (n[22] = b),
      (n[23] = qt))
    : (qt = n[23]);
  let Jt = I(qt),
    Yt;
  n[24] !== Y ||
  n[25] !== u ||
  n[26] !== Se ||
  n[27] !== o ||
  n[28] !== x ||
  n[29] !== f ||
  n[30] !== E ||
  n[31] !== W ||
  n[32] !== bt ||
  n[33] !== G ||
  n[34] !== v ||
  n[35] !== d ||
  n[36] !== kt ||
  n[37] !== Ot ||
  n[38] !== b ||
  n[39] !== a ||
  n[40] !== et ||
  n[41] !== Ze ||
  n[42] !== ke ||
  n[43] !== je ||
  n[44] !== Te ||
  n[45] !== r ||
  n[46] !== S ||
  n[47] !== z ||
  n[48] !== wt ||
  n[49] !== ee ||
  n[50] !== m ||
  n[51] !== i
    ? ((Yt = async () => {
        if ((Te(!0), G)) {
          wt ??
            Bt({
              scope: b,
              autoTopUpEnabled: !Se && void 0,
              source: r,
              email: x,
              quantity: z,
              onOpenChange: v,
              statsigClient: S,
              tryOpenEmbeddedCreditCheckout: ee,
            });
          return;
        }
        if ((ke(!0), je(!0), !(kt == null || Ot == null || W || bt)))
          try {
            Y();
            let e = ce({
                discountOffer: i === `setup-auto-reload` ? o : null,
                isEnablingAutoReload: kt === `enable`,
                payload: Ot,
              }),
              t =
                kt === `enable`
                  ? await f.mutateAsync(e)
                  : await m.mutateAsync(Qe({ payload: Ot, serverState: a }));
            if ((st(b, w, { action: kt, source: r }), gt(t.immediate_top_up_status))) {
              (Ze(t.immediate_top_up_status),
                et(
                  yt({
                    intl: E,
                    creditBalance: u?.balance,
                    rechargeTarget: Ot.recharge_target,
                    pricingInfo: d,
                  }),
                ));
              return;
            }
            (Vt({ scope: b, intl: E, intent: kt, kind: `success` }), v(!1));
          } catch {
            Vt({ scope: b, intl: E, intent: kt, kind: `danger` });
          }
      }),
      (n[24] = Y),
      (n[25] = u),
      (n[26] = Se),
      (n[27] = o),
      (n[28] = x),
      (n[29] = f),
      (n[30] = E),
      (n[31] = W),
      (n[32] = bt),
      (n[33] = G),
      (n[34] = v),
      (n[35] = d),
      (n[36] = kt),
      (n[37] = Ot),
      (n[38] = b),
      (n[39] = a),
      (n[40] = et),
      (n[41] = Ze),
      (n[42] = ke),
      (n[43] = je),
      (n[44] = Te),
      (n[45] = r),
      (n[46] = S),
      (n[47] = z),
      (n[48] = wt),
      (n[49] = ee),
      (n[50] = m),
      (n[51] = i),
      (n[52] = Yt))
    : (Yt = n[52]);
  let Xt = Yt,
    Zt;
  n[53] !== g || n[54] !== E || n[55] !== v || n[56] !== b || n[57] !== r
    ? ((Zt = async () => {
        try {
          (await g.mutateAsync(),
            st(b, w, { action: `disable`, source: r }),
            Vt({ scope: b, intl: E, intent: `disable`, kind: `success` }),
            v(!1));
        } catch {
          Vt({ scope: b, intl: E, intent: `disable`, kind: `danger` });
        }
      }),
      (n[53] = g),
      (n[54] = E),
      (n[55] = v),
      (n[56] = b),
      (n[57] = r),
      (n[58] = Zt))
    : (Zt = n[58]);
  let Qt = Zt;
  if (tt && D.kind === `active`) {
    let e;
    n[59] !== at || n[60] !== ut
      ? ((e = () => {
          (at(!1), ut(!0));
        }),
        (n[59] = at),
        (n[60] = ut),
        (n[61] = e))
      : (e = n[61]);
    let t;
    n[62] === Qt
      ? (t = n[63])
      : ((t = () => {
          Qt();
        }),
        (n[62] = Qt),
        (n[63] = t));
    let r;
    return (
      n[64] !== y || n[65] !== D.additionalDiscountPercent || n[66] !== ft || n[67] !== e || n[68] !== t
        ? ((r = (0, Z.jsx)(ht, {
            dialogDescriptionId: y,
            additionalDiscountPercent: D.additionalDiscountPercent,
            isDisablePending: ft,
            onKeepEnabled: e,
            onTurnOff: t,
          })),
          (n[64] = y),
          (n[65] = D.additionalDiscountPercent),
          (n[66] = ft),
          (n[67] = e),
          (n[68] = t),
          (n[69] = r))
        : (r = n[69]),
      r
    );
  }
  let $t, Q, en;
  bb0: switch (i) {
    case `add-credits`: {
      let e;
      (n[70] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(j, {
            id: `settings.usage.creditReload.addCredits.title`,
            defaultMessage: `Add credits`,
            description: `Title for the add credits modal`,
          })),
          (n[70] = e))
        : (e = n[70]),
        ($t = e));
      let t;
      (n[71] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(j, {
            id: `settings.usage.creditReload.addCredits.description`,
            defaultMessage: `Credits let you keep working. Valid for 12 months. <link>View rate card</link>`,
            description: `Description for the add credits modal`,
            values: { link: At },
          })),
          (n[71] = t))
        : (t = n[71]),
        (Q = t));
      let r;
      (n[72] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Z.jsx)(j, {
            id: `settings.usage.creditReload.addCredits.screenReaderDescription`,
            defaultMessage: `Credits let you keep working. Valid for 12 months. View rate card`,
            description: `Screen reader description for the add credits modal`,
          })),
          (n[72] = r))
        : (r = n[72]),
        (en = r));
      break bb0;
    }
    case `setup-auto-reload`: {
      let e;
      (n[73] === q
        ? (e = n[74])
        : ((e = q
            ? (0, Z.jsx)(j, {
                id: `settings.usage.creditReload.autoReload.offer.title`,
                defaultMessage: `Auto-reload`,
                description: `Title for the promotional auto reload modal shown to a user with a server-authorized discount offer`,
              })
            : (0, Z.jsx)(j, {
                id: `settings.usage.creditReload.autoReload.setup.title`,
                defaultMessage: `Set up auto-reload`,
                description: `Title for the auto reload setup modal`,
              })),
          (n[73] = q),
          (n[74] = e)),
        ($t = e));
      let t;
      (n[75] !== E || n[76] !== q || n[77] !== H || n[78] !== U || n[79] !== d || n[80] !== z
        ? ((t = q
            ? (0, Z.jsx)(j, {
                id: `settings.usage.creditReload.autoReload.offer.description.v2`,
                defaultMessage: `Automatically purchase credits when you’re running low`,
                description: `Description in the promotional auto reload modal explaining what auto reload does`,
              })
            : (0, Z.jsx)(Ft, {
                intl: E,
                targetBalance: z,
                minimumBalance: H,
                monthlyLimit: U,
                pricingInfo: d,
              })),
          (n[75] = E),
          (n[76] = q),
          (n[77] = H),
          (n[78] = U),
          (n[79] = d),
          (n[80] = z),
          (n[81] = t))
        : (t = n[81]),
        (Q = t));
      let r;
      (n[82] !== Q || n[83] !== E || n[84] !== q || n[85] !== H || n[86] !== U || n[87] !== d || n[88] !== z
        ? ((r = q
            ? Q
            : (0, Z.jsx)(Ft, {
                intl: E,
                targetBalance: z,
                minimumBalance: H,
                monthlyLimit: U,
                pricingInfo: d,
                rateCardLinkMode: `text`,
              })),
          (n[82] = Q),
          (n[83] = E),
          (n[84] = q),
          (n[85] = H),
          (n[86] = U),
          (n[87] = d),
          (n[88] = z),
          (n[89] = r))
        : (r = n[89]),
        (en = r));
      break bb0;
    }
    case `manage-auto-reload`: {
      let e;
      (n[90] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(j, {
            id: `settings.usage.creditReload.autoReload.manage.title`,
            defaultMessage: `Manage auto-reload`,
            description: `Title for the auto reload management modal`,
          })),
          (n[90] = e))
        : (e = n[90]),
        ($t = e));
      let t;
      (n[91] !== E || n[92] !== q || n[93] !== H || n[94] !== U || n[95] !== d || n[96] !== z
        ? ((t = q
            ? (0, Z.jsx)(j, {
                id: `settings.usage.creditReload.autoReload.offer.description.v2`,
                defaultMessage: `Automatically purchase credits when you’re running low`,
                description: `Description in the promotional auto reload modal explaining what auto reload does`,
              })
            : (0, Z.jsx)(Ft, {
                intl: E,
                targetBalance: z,
                minimumBalance: H,
                monthlyLimit: U,
                pricingInfo: d,
              })),
          (n[91] = E),
          (n[92] = q),
          (n[93] = H),
          (n[94] = U),
          (n[95] = d),
          (n[96] = z),
          (n[97] = t))
        : (t = n[97]),
        (Q = t));
      let r;
      (n[98] !== Q ||
      n[99] !== E ||
      n[100] !== q ||
      n[101] !== H ||
      n[102] !== U ||
      n[103] !== d ||
      n[104] !== z
        ? ((r = q
            ? Q
            : (0, Z.jsx)(Ft, {
                intl: E,
                targetBalance: z,
                minimumBalance: H,
                monthlyLimit: U,
                pricingInfo: d,
                rateCardLinkMode: `text`,
              })),
          (n[98] = Q),
          (n[99] = E),
          (n[100] = q),
          (n[101] = H),
          (n[102] = U),
          (n[103] = d),
          (n[104] = z),
          (n[105] = r))
        : (r = n[105]),
        (en = r));
    }
  }
  let tn;
  n[106] === v
    ? (tn = n[107])
    : ((tn = () => {
        v(!1);
      }),
      (n[106] = v),
      (n[107] = tn));
  let nn;
  n[108] !== D.kind || n[109] !== Qt || n[110] !== at
    ? ((nn = () => {
        if (D.kind === `active`) {
          at(!0);
          return;
        }
        Qt();
      }),
      (n[108] = D.kind),
      (n[109] = Qt),
      (n[110] = at),
      (n[111] = nn))
    : (nn = n[111]);
  let $;
  n[112] !== W ||
  n[113] !== It ||
  n[114] !== Lt ||
  n[115] !== ft ||
  n[116] !== s ||
  n[117] !== q ||
  n[118] !== G ||
  n[119] !== dt ||
  n[120] !== ct ||
  n[121] !== tn ||
  n[122] !== nn ||
  n[123] !== i
    ? (($ = (0, Z.jsx)(Nt, {
        variant: i,
        isOneTimeAddCreditsPurchase: G,
        isSavePending: dt,
        isDisablePending: ft,
        isActionPending: W,
        isAddCreditsSubmitDisabled: It,
        isAutoReloadSettingsSubmitDisabled: Lt,
        isDiscountedAutoReloadExperience: q,
        isDiscountOfferPending: s,
        shouldFocusTurnOff: ct,
        onBack: tn,
        onTurnOff: nn,
      })),
      (n[112] = W),
      (n[113] = It),
      (n[114] = Lt),
      (n[115] = ft),
      (n[116] = s),
      (n[117] = q),
      (n[118] = G),
      (n[119] = dt),
      (n[120] = ct),
      (n[121] = tn),
      (n[122] = nn),
      (n[123] = i),
      (n[124] = $))
    : ($ = n[124]);
  let rn;
  n[125] !== u || n[126] !== E || n[127] !== d || n[128] !== $
    ? ((rn = (0, Z.jsx)(zt, { intl: E, creditDetails: u, pricingInfo: d, actions: $ })),
      (n[125] = u),
      (n[126] = E),
      (n[127] = d),
      (n[128] = $),
      (n[129] = rn))
    : (rn = n[129]);
  let an;
  n[130] === Xt
    ? (an = n[131])
    : ((an = () => {
        Xt();
      }),
      (n[130] = Xt),
      (n[131] = an));
  let on;
  n[132] !== Ct || n[133] !== K
    ? ((on =
        K != null && Ct != null
          ? (0, Z.jsx)(_t, {
              isActive: K.kind === `active`,
              presentation: K.presentation,
              discountPercent: Ct,
            })
          : null),
      (n[132] = Ct),
      (n[133] = K),
      (n[134] = on))
    : (on = n[134]);
  let sn;
  n[135] !== c || n[136] !== l || n[137] !== G || n[138] !== _ || n[139] !== a.isEnabled
    ? ((sn = !a.isEnabled && !G && c ? (0, Z.jsx)(mt, { isRetrying: l, onRetry: _ }) : null),
      (n[135] = c),
      (n[136] = l),
      (n[137] = G),
      (n[138] = _),
      (n[139] = a.isEnabled),
      (n[140] = sn))
    : (sn = n[140]);
  let cn;
  n[141] !== pe ||
  n[142] !== Y ||
  n[143] !== T ||
  n[144] !== K ||
  n[145] !== E ||
  n[146] !== G ||
  n[147] !== d ||
  n[148] !== V ||
  n[149] !== ze ||
  n[150] !== Te ||
  n[151] !== le ||
  n[152] !== we ||
  n[153] !== z ||
  n[154] !== wt
    ? ((cn =
        K == null
          ? (0, Z.jsx)(vt, {
              intl: E,
              value: z,
              selection: pe,
              pricingInfo: d,
              error: we ? wt : null,
              minimumQuantity: G ? Ie(d) : 125,
              maximumQuantity: T,
              quantityStep: G ? Oe : null,
              onChange: (e) => {
                (Y(), le(e));
              },
              onSelectionChange: (e) => {
                (ze(!1), V(e));
              },
              onInvalidCurrencyDraftChange: ze,
              onBlur: () => {
                Te(!0);
              },
            })
          : null),
      (n[141] = pe),
      (n[142] = Y),
      (n[143] = T),
      (n[144] = K),
      (n[145] = E),
      (n[146] = G),
      (n[147] = d),
      (n[148] = V),
      (n[149] = ze),
      (n[150] = Te),
      (n[151] = le),
      (n[152] = we),
      (n[153] = z),
      (n[154] = wt),
      (n[155] = cn))
    : (cn = n[155]);
  let ln;
  n[156] !== Y ||
  n[157] !== E ||
  n[158] !== W ||
  n[159] !== _e ||
  n[160] !== H ||
  n[161] !== U ||
  n[162] !== d ||
  n[163] !== Ce ||
  n[164] !== ve ||
  n[165] !== z ||
  n[166] !== i
    ? ((ln =
        i === `add-credits`
          ? (0, Z.jsxs)(`div`, {
              className: `relative flex min-w-0 items-center gap-3`,
              children: [
                (0, Z.jsx)(p, {
                  id: `credit-reload-add-credits-auto-reload`,
                  className: `!border-text data-[state=checked]:!border-text data-[state=checked]:!bg-primary-solid data-[state=checked]:!text-primary-solid`,
                  checked: _e,
                  disabled: W,
                  onCheckedChange: (e) => {
                    (Y(), Ce(_e && !e), ve(e));
                  },
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex min-w-0 flex-col gap-0.5`,
                  children: [
                    (0, Z.jsx)(`label`, {
                      htmlFor: `credit-reload-add-credits-auto-reload`,
                      className: `cursor-interaction text-sm font-medium text-default`,
                      children: (0, Z.jsx)(j, {
                        id: `settings.usage.creditReload.autoReload.checkbox`,
                        defaultMessage: `Auto-reload`,
                        description: `Checkbox label for adding auto reload while buying credits`,
                      }),
                    }),
                    _e
                      ? (0, Z.jsx)(Pt, {
                          intl: E,
                          targetBalance: z,
                          minimumBalance: H,
                          monthlyLimit: U,
                          pricingInfo: d,
                        })
                      : (0, Z.jsx)(`p`, {
                          className: `text-sm leading-5 text-secondary`,
                          children: (0, Z.jsx)(j, {
                            id: `settings.usage.creditReload.autoReload.checkboxDescription`,
                            defaultMessage: `Automatically add credits when your balance runs low`,
                            description: `Description for the optional auto reload checkbox in the add credits modal`,
                          }),
                        }),
                  ],
                }),
              ],
            })
          : null),
      (n[156] = Y),
      (n[157] = E),
      (n[158] = W),
      (n[159] = _e),
      (n[160] = H),
      (n[161] = U),
      (n[162] = d),
      (n[163] = Ce),
      (n[164] = ve),
      (n[165] = z),
      (n[166] = i),
      (n[167] = ln))
    : (ln = n[167]);
  let un;
  n[168] !== Y ||
  n[169] !== T ||
  n[170] !== K ||
  n[171] !== $e ||
  n[172] !== qe ||
  n[173] !== E ||
  n[174] !== W ||
  n[175] !== q ||
  n[176] !== G ||
  n[177] !== H ||
  n[178] !== J ||
  n[179] !== U ||
  n[180] !== Dt ||
  n[181] !== Jt ||
  n[182] !== d ||
  n[183] !== de ||
  n[184] !== ie?.presetCreditQuantities ||
  n[185] !== Ue ||
  n[186] !== Ge ||
  n[187] !== ze ||
  n[188] !== me ||
  n[189] !== he ||
  n[190] !== fe ||
  n[191] !== ke ||
  n[192] !== je ||
  n[193] !== Te ||
  n[194] !== le ||
  n[195] !== De ||
  n[196] !== Ae ||
  n[197] !== we ||
  n[198] !== wt
    ? ((un = G
        ? null
        : (0, Z.jsx)(St, {
            intl: E,
            minimumBalance: H,
            monthlyLimit: U,
            pricingInfo: d,
            isDiscountedAutoReloadExperience: q,
            reloadAmountContent:
              K == null
                ? null
                : (0, Z.jsx)(pt, {
                    intl: E,
                    value: de,
                    maximumQuantity: T,
                    pricingInfo: d,
                    tiers: K.tiers,
                    presetCreditQuantities: ie?.presetCreditQuantities,
                    error: we ? wt : null,
                    disabled: W,
                    onChange: (e) => {
                      (Y(), fe(e));
                      let t = Number.parseInt(H, 10);
                      if (Number.isFinite(t)) {
                        let n = Number.parseInt(e, 10);
                        le(Number.isFinite(n) ? String(t + n) : ``);
                      }
                    },
                    onInvalidCurrencyDraftChange: ze,
                    onBlur: () => {
                      Te(!0);
                    },
                  }),
            disabled: W,
            minimumBalanceError: De ? J : null,
            monthlyLimitError: Ae ? Dt : null,
            immediateTopUpStatus: qe,
            immediateTopUpFailureAmount: $e,
            isManagePaymentPending: Jt.isPending,
            onMinimumBalanceChange: (e) => {
              if ((Y(), q)) {
                let t = Number.parseInt(e, 10);
                if (Number.isFinite(t)) {
                  let e = Number.parseInt(de, 10);
                  le(Number.isFinite(e) ? String(t + e) : ``);
                }
              }
              me(e);
            },
            onInvalidMinimumBalanceCurrencyDraftChange: Ue,
            onMinimumBalanceBlur: () => {
              (ke(!0), Te(!0));
            },
            onMonthlyLimitChange: (e) => {
              (Y(), he(e));
            },
            onInvalidMonthlyLimitCurrencyDraftChange: Ge,
            onMonthlyLimitBlur: () => {
              je(!0);
            },
            onOpenManagePayment: () => {
              Jt.mutate();
            },
          })),
      (n[168] = Y),
      (n[169] = T),
      (n[170] = K),
      (n[171] = $e),
      (n[172] = qe),
      (n[173] = E),
      (n[174] = W),
      (n[175] = q),
      (n[176] = G),
      (n[177] = H),
      (n[178] = J),
      (n[179] = U),
      (n[180] = Dt),
      (n[181] = Jt),
      (n[182] = d),
      (n[183] = de),
      (n[184] = ie?.presetCreditQuantities),
      (n[185] = Ue),
      (n[186] = Ge),
      (n[187] = ze),
      (n[188] = me),
      (n[189] = he),
      (n[190] = fe),
      (n[191] = ke),
      (n[192] = je),
      (n[193] = Te),
      (n[194] = le),
      (n[195] = De),
      (n[196] = Ae),
      (n[197] = we),
      (n[198] = wt),
      (n[199] = un))
    : (un = n[199]);
  let dn;
  n[200] !== on || n[201] !== sn || n[202] !== cn || n[203] !== ln || n[204] !== un
    ? ((dn = (0, Z.jsxs)(L, { className: `gap-4 pt-4`, children: [on, sn, cn, ln, un] })),
      (n[200] = on),
      (n[201] = sn),
      (n[202] = cn),
      (n[203] = ln),
      (n[204] = un),
      (n[205] = dn))
    : (dn = n[205]);
  let fn;
  return (
    n[206] !== Q ||
    n[207] !== y ||
    n[208] !== en ||
    n[209] !== rn ||
    n[210] !== an ||
    n[211] !== dn ||
    n[212] !== $t
      ? ((fn = (0, Z.jsx)(Ut, {
          dialogDescriptionId: y,
          screenReaderTitle: $t,
          screenReaderDescription: en,
          headerTitle: $t,
          headerSubtitle: Q,
          footer: rn,
          onSubmit: an,
          children: dn,
        })),
        (n[206] = Q),
        (n[207] = y),
        (n[208] = en),
        (n[209] = rn),
        (n[210] = an),
        (n[211] = dn),
        (n[212] = $t),
        (n[213] = fn))
      : (fn = n[213]),
    fn
  );
}
function At(e) {
  return (0, Z.jsx)(Lt, { children: e });
}
function jt(e) {
  z({ href: e.url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
async function Mt() {
  return ze.safeGet(`/payments/customer_portal`);
}
function Nt(e) {
  let t = (0, Wt.c)(28),
    {
      variant: n,
      isOneTimeAddCreditsPurchase: r,
      isSavePending: i,
      isDisablePending: a,
      isActionPending: o,
      isAddCreditsSubmitDisabled: s,
      isAutoReloadSettingsSubmitDisabled: c,
      isDiscountedAutoReloadExperience: u,
      isDiscountOfferPending: d,
      shouldFocusTurnOff: f,
      onBack: p,
      onTurnOff: m,
    } = e;
  if (n === `add-credits`) {
    let e;
    t[0] === r
      ? (e = t[1])
      : ((e = r
          ? (0, Z.jsx)(j, {
              id: `settings.usage.creditReload.continueToCheckout`,
              defaultMessage: `Continue to checkout`,
              description: `Button label to open checkout from a credit purchase modal`,
            })
          : (0, Z.jsx)(j, {
              id: `settings.usage.creditReload.autoReload.enable`,
              defaultMessage: `Enable auto-reload`,
              description: `Button label to enable automatic reload from the add credits modal`,
            })),
        (t[0] = r),
        (t[1] = e));
    let n;
    return (
      t[2] !== s || t[3] !== i || t[4] !== e
        ? ((n = (0, Z.jsx)(l, {
            className: `w-auto`,
            children: (0, Z.jsx)(x, {
              color: `primary`,
              type: `submit`,
              className: qt,
              loading: i,
              disabled: s,
              children: e,
            }),
          })),
          (t[2] = s),
          (t[3] = i),
          (t[4] = e),
          (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let h;
  t[6] !== o || t[7] !== a || t[8] !== u || t[9] !== m || t[10] !== f || t[11] !== n
    ? ((h =
        n === `manage-auto-reload`
          ? (0, Z.jsx)(x, {
              color: `outline`,
              autoFocus: f,
              loading: a,
              disabled: o,
              onClick: m,
              children: u
                ? (0, Z.jsx)(j, {
                    id: `settings.usage.creditReload.autoReload.turnOffDiscounted`,
                    defaultMessage: `Turn auto-reload off`,
                    description: `Button label that opens the confirmation for turning off auto reload with an active discount`,
                  })
                : (0, Z.jsx)(j, {
                    id: `settings.usage.creditReload.autoReload.turnOff`,
                    defaultMessage: `Turn off`,
                    description: `Button label to turn off auto reload`,
                  }),
            })
          : null),
      (t[6] = o),
      (t[7] = a),
      (t[8] = u),
      (t[9] = m),
      (t[10] = f),
      (t[11] = n),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] !== o || t[14] !== u || t[15] !== p
    ? ((g = u
        ? (0, Z.jsx)(x, {
            color: `outline`,
            disabled: o,
            onClick: p,
            children: (0, Z.jsx)(j, {
              id: `settings.usage.creditReload.autoReload.back`,
              defaultMessage: `Back`,
              description: `Button that closes the discounted auto reload modal without saving changes`,
            }),
          })
        : null),
      (t[13] = o),
      (t[14] = u),
      (t[15] = p),
      (t[16] = g))
    : (g = t[16]);
  let _ = i || d,
    v;
  t[17] !== u || t[18] !== n
    ? ((v =
        u && n === `setup-auto-reload`
          ? (0, Z.jsx)(j, {
              id: `settings.usage.creditReload.autoReload.turnOn`,
              defaultMessage: `Turn on auto-reload`,
              description: `Button label to enable automatic reload with a server-authorized discount offer`,
            })
          : (0, Z.jsx)(j, {
              id: `settings.usage.creditReload.autoReload.save`,
              defaultMessage: `Save`,
              description: `Button label to save automatic reload settings`,
            })),
      (t[17] = u),
      (t[18] = n),
      (t[19] = v))
    : (v = t[19]);
  let y;
  t[20] !== c || t[21] !== _ || t[22] !== v
    ? ((y = (0, Z.jsx)(x, {
        color: `primary`,
        type: `submit`,
        className: qt,
        loading: _,
        disabled: c,
        children: v,
      })),
      (t[20] = c),
      (t[21] = _),
      (t[22] = v),
      (t[23] = y))
    : (y = t[23]);
  let b;
  return (
    t[24] !== h || t[25] !== g || t[26] !== y
      ? ((b = (0, Z.jsxs)(l, { className: `w-auto`, children: [h, g, y] })),
        (t[24] = h),
        (t[25] = g),
        (t[26] = y),
        (t[27] = b))
      : (b = t[27]),
    b
  );
}
function Pt(e) {
  let t = (0, Wt.c)(16),
    { intl: n, targetBalance: r, minimumBalance: i, monthlyLimit: a, pricingInfo: o } = e,
    s;
  t[0] !== n || t[1] !== i || t[2] !== o
    ? ((s = xt({ intl: n, creditQuantity: Number.parseInt(Re(i), 10), pricingInfo: o })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l;
  t[4] !== n || t[5] !== o || t[6] !== r
    ? ((l = xt({ intl: n, creditQuantity: Number.parseInt(Re(r), 10), pricingInfo: o })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = r),
      (t[7] = l))
    : (l = t[7]);
  let u = l,
    d;
  t[8] !== n || t[9] !== a || t[10] !== o
    ? ((d = xt({ intl: n, creditQuantity: Number.parseInt(Re(a), 10), pricingInfo: o })),
      (t[8] = n),
      (t[9] = a),
      (t[10] = o),
      (t[11] = d))
    : (d = t[11]);
  let f = d,
    p;
  return (
    t[12] !== f || t[13] !== u || t[14] !== c
      ? ((p = (0, Z.jsx)(`p`, {
          className: `text-sm leading-5 text-secondary`,
          children:
            c == null || u == null
              ? (0, Z.jsx)(j, {
                  id: `settings.usage.creditReload.autoReload.description.pending`,
                  defaultMessage: `If your balance falls below the minimum, your credits will automatically reload`,
                  description: `Fallback description shown while pricing is loading`,
                })
              : f == null
                ? (0, Z.jsx)(j, {
                    id: `settings.usage.creditReload.autoReload.description.noLimit`,
                    defaultMessage: `When my balance hits {thresholdAmount}, top up to {targetAmount}, with no monthly maximum`,
                    description: `Description explaining how automatic reload works without a monthly limit`,
                    values: { thresholdAmount: c, targetAmount: u },
                  })
                : (0, Z.jsx)(j, {
                    id: `settings.usage.creditReload.autoReload.description`,
                    defaultMessage: `When my balance hits {thresholdAmount}, top up to {targetAmount}, up to {monthlyLimitAmount} per month`,
                    description: `Description explaining how automatic reload works`,
                    values: { thresholdAmount: c, targetAmount: u, monthlyLimitAmount: f },
                  }),
        })),
        (t[12] = f),
        (t[13] = u),
        (t[14] = c),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function Ft(e) {
  let t = (0, Wt.c)(11),
    {
      intl: n,
      targetBalance: r,
      minimumBalance: i,
      monthlyLimit: a,
      pricingInfo: o,
      rateCardLinkMode: s,
    } = e,
    c = s === void 0 ? `button` : s,
    l;
  t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== o || t[4] !== r
    ? ((l = (0, Z.jsx)(Pt, {
        intl: n,
        targetBalance: r,
        minimumBalance: i,
        monthlyLimit: a,
        pricingInfo: o,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = r),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === c
    ? (u = t[7])
    : ((u = c === `button` ? (0, Z.jsx)(Lt, { children: (0, Z.jsx)(It, {}) }) : (0, Z.jsx)(It, {})),
      (t[6] = c),
      (t[7] = u));
  let d;
  return (
    t[8] !== l || t[9] !== u
      ? ((d = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [l, u] })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function It() {
  let e = (0, Wt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(j, {
          id: `settings.usage.creditReload.viewRateCard`,
          defaultMessage: `View rate card`,
          description: `Button label to view the credit rate card`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Lt(e) {
  let t = (0, Wt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`button`, {
          type: `button`,
          className: `cursor-interaction text-start text-info`,
          onClick: Rt,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Rt(e) {
  ve({ event: e, href: Kt, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
function zt(e) {
  let t = (0, Wt.c)(12),
    { intl: n, creditDetails: r, pricingInfo: i, actions: a } = e,
    o;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((o = Y({ intl: n, creditDetails: r, pricingInfo: i })), (t[0] = r), (t[1] = n), (t[2] = i), (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] !== r?.unlimited || t[5] !== s
    ? ((c = (0, Z.jsx)(`span`, {
        className: `text-xs text-secondary`,
        children: r?.unlimited
          ? (0, Z.jsx)(j, {
              id: `settings.usage.credit.remaining.unlimited`,
              defaultMessage: `Unlimited credit`,
              description: `Title shown when the account has unlimited credit`,
            })
          : s == null
            ? (0, Z.jsx)(j, {
                id: `settings.usage.creditReload.currentBalance.unavailable`,
                defaultMessage: `Current balance unavailable`,
                description: `Fallback shown when the current credits balance cannot be loaded in a credit reload modal footer`,
              })
            : (0, Z.jsx)(j, {
                id: `settings.usage.creditReload.currentBalance`,
                defaultMessage: `Current balance: {balance}`,
                description: `Current credits balance shown in a credit reload modal footer`,
                values: { balance: s },
              }),
      })),
      (t[4] = r?.unlimited),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === a
    ? (l = t[8])
    : ((l = (0, Z.jsx)(`div`, { className: `shrink-0`, children: a })), (t[7] = a), (t[8] = l));
  let u;
  return (
    t[9] !== c || t[10] !== l
      ? ((u = (0, Z.jsxs)(`div`, { className: `flex items-center justify-between gap-4`, children: [c, l] })),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Y({ intl: e, creditDetails: t, pricingInfo: n }) {
  return t == null || t.unlimited
    ? null
    : (xt({ intl: e, creditQuantity: Math.floor(Number(t.balance ?? 0)), pricingInfo: n }) ??
        e.formatNumber(0));
}
function Bt({
  scope: e,
  autoTopUpEnabled: t,
  source: r,
  email: i,
  quantity: a,
  onOpenChange: o,
  statsigClient: s,
  tryOpenEmbeddedCreditCheckout: c,
}) {
  let l = Re(a);
  if (Le({ browser: !0 })) {
    let { returnLocation: i } = Ue(window.location.href),
      a = new URLSearchParams({
        quantity: l,
        source: `codex_app_embedded`,
        return_to: i.pathname + i.search + i.hash,
      });
    if ((t === !1 && a.set(`auto_top_up_enabled`, `false`), !H(e, `/codex/purchase/credits?${a}`))) return;
    (st(e, O, { creditQuantity: n(l), source: r }), Ze(e), o(!1));
    return;
  }
  if (c({ autoTopUpEnabled: t, quantity: l })) {
    (st(e, O, { creditQuantity: n(l), source: r }), Ze(e), o(!1));
    return;
  }
  (st(e, O, { creditQuantity: n(l), source: r }),
    Ze(e),
    z({
      href: me({ loginHint: i, statsigClient: s, url: fe(l, { autoTopUpEnabled: t }) }),
      initiator: `open_in_browser_bridge`,
    }),
    o(!1));
}
function Vt({ scope: e, intl: t, intent: n, kind: r }) {
  let i;
  switch (n) {
    case `enable`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.enable.success`,
              defaultMessage: `Enabled auto-reload`,
              description: `Toast shown when enabling auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.enable.error`,
              defaultMessage: `Failed to enable auto-reload`,
              description: `Toast shown when enabling auto reload fails`,
            });
      break;
    case `update`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.update.success`,
              defaultMessage: `Updated auto-reload settings`,
              description: `Toast shown when updating auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.update.error`,
              defaultMessage: `Failed to update auto-reload`,
              description: `Toast shown when updating auto reload fails`,
            });
      break;
    case `disable`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.disable.success`,
              defaultMessage: `Disabled auto-reload`,
              description: `Toast shown when disabling auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.disable.error`,
              defaultMessage: `Failed to disable auto-reload`,
              description: `Toast shown when disabling auto reload fails`,
            });
  }
  if (r === `success`) {
    e.get(ne).success(i, Gt);
    return;
  }
  e.get(ne).danger(i, { ...Gt, errorAnalytics: { toastId: `dialogReadyContent.showAutoReloadSaveToast` } });
}
function Ht(e) {
  let t = Re(e);
  return U.some((e) => String(e) === t);
}
function Ut(e) {
  let t = (0, Wt.c)(21),
    {
      dialogDescriptionId: n,
      screenReaderTitle: r,
      screenReaderDescription: i,
      headerTitle: a,
      headerSubtitle: s,
      footer: c,
      onSubmit: l,
      children: u,
    } = e,
    d;
  t[0] === l
    ? (d = t[1])
    : ((d = (e) => {
        (e.preventDefault(), l());
      }),
      (t[0] = l),
      (t[1] = d));
  let f;
  t[2] === r
    ? (f = t[3])
    : ((f = (0, Z.jsx)(k, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, { className: `sr-only`, children: r }),
      })),
      (t[2] = r),
      (t[3] = f));
  let p;
  t[4] !== n || t[5] !== i
    ? ((p = (0, Z.jsx)(`div`, { id: n, className: `sr-only`, children: i })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== s || t[8] !== a
    ? ((m = (0, Z.jsx)(g, { title: a, subtitle: s })), (t[7] = s), (t[8] = a), (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== f || t[11] !== p || t[12] !== m
    ? ((h = (0, Z.jsxs)(L, { children: [f, p, m] })), (t[10] = f), (t[11] = p), (t[12] = m), (t[13] = h))
    : (h = t[13]);
  let _;
  t[14] === c
    ? (_ = t[15])
    : ((_ = (0, Z.jsx)(L, { className: `pt-4`, children: c })), (t[14] = c), (t[15] = _));
  let v;
  return (
    t[16] !== u || t[17] !== d || t[18] !== h || t[19] !== _
      ? ((v = (0, Z.jsxs)(o, { as: `form`, onSubmit: d, children: [h, u, _] })),
        (t[16] = u),
        (t[17] = d),
        (t[18] = h),
        (t[19] = _),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
var Wt, X, Z, Gt, Kt, qt;
function Jt() {
  return (Jt = e(() => {
    ((Wt = m()),
      B(),
      De(),
      _(),
      M(),
      C(),
      (X = i()),
      b(),
      V(),
      $e(),
      S(),
      E(),
      s(),
      a(),
      je(),
      v(),
      Ce(),
      ut(),
      r(),
      ct(),
      Ge(),
      et(),
      Se(),
      W(),
      Et(),
      q(),
      K(),
      qe(),
      dt(),
      (Z = c()),
      (Gt = { duration: 3 }),
      (Kt = `https://help.openai.com/en/articles/20001106-codex-rate-card`),
      (qt = `min-w-[88px] justify-center`));
  }))();
}
function Yt(e) {
  let t = (0, Qt.c)(33),
    n = (0, $t.useId)(),
    r = e.state === `loading` || e.state === `error`,
    i =
      !r &&
      e.variant === `setup-auto-reload` &&
      !e.serverState.isEnabled &&
      e.isDiscountOfferPending &&
      e.discountOffer == null,
    a =
      !r &&
      e.variant !== `one-time-purchase` &&
      (e.enableAutoTopUpMutation.isPending ||
        e.updateAutoTopUpMutation.isPending ||
        e.disableAutoTopUpMutation.isPending),
    o;
  if (r) {
    let r = e.state === `error` ? e.onRetry : void 0,
      i;
    t[0] === e
      ? (i = t[1])
      : ((i = () => {
          e.onOpenChange(!1);
        }),
        (t[0] = e),
        (t[1] = i));
    let a;
    (t[2] !== n || t[3] !== e.state || t[4] !== e.variant || t[5] !== r || t[6] !== i
      ? ((a = (0, Q.jsx)(Zt, {
          variant: e.variant,
          state: e.state,
          dialogDescriptionId: n,
          onRetry: r,
          onClose: i,
        })),
        (t[2] = n),
        (t[3] = e.state),
        (t[4] = e.variant),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
      (o = a));
  } else if (i) {
    let r;
    t[8] === e
      ? (r = t[9])
      : ((r = () => {
          e.onOpenChange(!1);
        }),
        (t[8] = e),
        (t[9] = r));
    let i;
    (t[10] !== n || t[11] !== e.variant || t[12] !== r
      ? ((i = (0, Q.jsx)(Zt, { variant: e.variant, state: `loading`, dialogDescriptionId: n, onClose: r })),
        (t[10] = n),
        (t[11] = e.variant),
        (t[12] = r),
        (t[13] = i))
      : (i = t[13]),
      (o = i));
  } else if (e.variant === `one-time-purchase`) {
    let r;
    (t[14] !== n || t[15] !== e
      ? ((r = (0, Q.jsx)(Dt, { ...e, dialogDescriptionId: n })), (t[14] = n), (t[15] = e), (t[16] = r))
      : (r = t[16]),
      (o = r));
  } else {
    let r =
        e.variant === `setup-auto-reload`
          ? e.discountOffer?.auto_reload == null
            ? `without-auto-reload-offer`
            : `with-auto-reload-offer`
          : void 0,
      i;
    (t[17] !== n || t[18] !== e || t[19] !== r
      ? ((i = (0, Q.jsx)(kt, { ...e, dialogDescriptionId: n }, r)),
        (t[17] = n),
        (t[18] = e),
        (t[19] = r),
        (t[20] = i))
      : (i = t[20]),
      (o = i));
  }
  let s;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(j, {
        id: `settings.usage.creditReload.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the credit reload dialog`,
      })),
      (t[21] = s))
    : (s = t[21]);
  let c;
  t[22] === n
    ? (c = t[23])
    : ((c = { "aria-describedby": n, onOpenAutoFocus: Xt }), (t[22] = n), (t[23] = c));
  let l;
  t[24] !== a || t[25] !== e
    ? ((l = (t) => {
        (!a || t) && e.onOpenChange(t);
      }),
      (t[24] = a),
      (t[25] = e),
      (t[26] = l))
    : (l = t[26]);
  let u;
  return (
    t[27] !== o || t[28] !== a || t[29] !== e.open || t[30] !== c || t[31] !== l
      ? ((u = (0, Q.jsx)(y, {
          open: e.open,
          size: `default`,
          contentClassName: `w-[580px] max-w-[calc(100vw-2rem)]`,
          dialogCloseClassName: `top-[22px]`,
          dialogCloseLabel: s,
          contentProps: c,
          shouldIgnoreClickOutside: a,
          onOpenChange: l,
          children: o,
        })),
        (t[27] = o),
        (t[28] = a),
        (t[29] = e.open),
        (t[30] = c),
        (t[31] = l),
        (t[32] = u))
      : (u = t[32]),
    u
  );
}
function Xt(e) {
  e.preventDefault();
}
function Zt(e) {
  let t = (0, Qt.c)(31),
    { variant: n, state: r, dialogDescriptionId: i, onRetry: a, onClose: s } = e,
    c;
  t[0] === n
    ? (c = t[1])
    : ((c =
        n === `one-time-purchase`
          ? (0, Q.jsx)(j, {
              id: `settings.usage.creditReload.oneTimePurchase.title`,
              defaultMessage: `One time credit purchase`,
              description: `Title for the one time credit purchase modal`,
            })
          : n === `setup-auto-reload`
            ? (0, Q.jsx)(j, {
                id: `settings.usage.creditReload.autoReload.setup.title`,
                defaultMessage: `Set up auto-reload`,
                description: `Title for the auto reload setup modal`,
              })
            : n === `manage-auto-reload`
              ? (0, Q.jsx)(j, {
                  id: `settings.usage.creditReload.autoReload.manage.title`,
                  defaultMessage: `Manage auto-reload`,
                  description: `Title for the auto reload management modal`,
                })
              : (0, Q.jsx)(j, {
                  id: `settings.usage.creditReload.addCredits.title`,
                  defaultMessage: `Add credits`,
                  description: `Title for the add credits modal`,
                })),
      (t[0] = n),
      (t[1] = c));
  let u = c,
    d;
  t[2] === u
    ? (d = t[3])
    : ((d = (0, Q.jsx)(k, {
        asChild: !0,
        children: (0, Q.jsx)(`h2`, { className: `sr-only`, children: u }),
      })),
      (t[2] = u),
      (t[3] = d));
  let f;
  t[4] === n
    ? (f = t[5])
    : ((f =
        n === `one-time-purchase`
          ? (0, Q.jsx)(j, {
              id: `settings.usage.creditReload.oneTimePurchase.screenReaderDescription`,
              defaultMessage: `Purchase credits to keep working when your included usage runs out. View rate card`,
              description: `Screen reader description for the one time credit purchase modal`,
            })
          : n === `add-credits`
            ? (0, Q.jsx)(j, {
                id: `settings.usage.creditReload.addCredits.screenReaderDescription`,
                defaultMessage: `Credits let you keep working. Valid for 12 months. View rate card`,
                description: `Screen reader description for the add credits modal`,
              })
            : (0, Q.jsx)(j, {
                id: `settings.usage.creditReload.autoReload.modalDescription`,
                defaultMessage: `Automatically add credits when your balance runs low`,
                description: `Description for the automatic reload modal`,
              })),
      (t[4] = n),
      (t[5] = f));
  let p;
  t[6] !== i || t[7] !== f
    ? ((p = (0, Q.jsx)(`p`, { id: i, className: `sr-only`, children: f })),
      (t[6] = i),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m = r === `loading` ? `status` : void 0,
    h;
  t[9] === r
    ? (h = t[10])
    : ((h =
        r === `error`
          ? (0, Q.jsx)(j, {
              id: `settings.usage.creditReload.load.error`,
              defaultMessage: `Could not load credit settings`,
              description: `Error shown when the combined credit reload dialog cannot load`,
            })
          : (0, Q.jsx)(j, {
              id: `settings.usage.creditReload.load.loading`,
              defaultMessage: `Loading credit settings…`,
              description: `Loading label shown while the combined credit reload dialog loads`,
            })),
      (t[9] = r),
      (t[10] = h));
  let _;
  t[11] !== h || t[12] !== u
    ? ((_ = (0, Q.jsx)(g, { title: u, subtitle: h })), (t[11] = h), (t[12] = u), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== m || t[15] !== _
    ? ((v = (0, Q.jsx)(L, { children: (0, Q.jsx)(`div`, { role: m, children: _ }) })),
      (t[14] = m),
      (t[15] = _),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== a || t[18] !== r
    ? ((y =
        r === `error` && a != null
          ? (0, Q.jsx)(x, {
              color: `outline`,
              onClick: a,
              children: (0, Q.jsx)(j, {
                id: `settings.usage.creditReload.load.retry`,
                defaultMessage: `Retry`,
                description: `Retry button for the combined credit reload dialog`,
              }),
            })
          : null),
      (t[17] = a),
      (t[18] = r),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(j, {
        id: `settings.usage.creditReload.load.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label to close the combined credit reload dialog`,
      })),
      (t[20] = b))
    : (b = t[20]);
  let S;
  t[21] === s
    ? (S = t[22])
    : ((S = (0, Q.jsx)(x, { color: `outline`, onClick: s, children: b })), (t[21] = s), (t[22] = S));
  let C;
  t[23] !== S || t[24] !== y
    ? ((C = (0, Q.jsx)(L, {
        className: `pt-4`,
        children: (0, Q.jsxs)(l, { expandSingleButton: !1, children: [y, S] }),
      })),
      (t[23] = S),
      (t[24] = y),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== C || t[27] !== d || t[28] !== p || t[29] !== v
      ? ((w = (0, Q.jsxs)(o, { children: [d, p, v, C] })),
        (t[26] = C),
        (t[27] = d),
        (t[28] = p),
        (t[29] = v),
        (t[30] = w))
      : (w = t[30]),
    w
  );
}
var Qt, $t, Q;
function en() {
  return (en = e(() => {
    ((Qt = m()), ($t = i()), b(), S(), s(), a(), Jt(), (Q = c()));
  }))();
}
function tn(e) {
  let t = (0, nn.c)(82),
    { onClose: n, source: r, variant: i } = e,
    { accountId: a, authMethod: o, userId: s } = Ve(),
    { data: c } = He(),
    l = ue(),
    { data: u } = T(ke),
    f = i !== `one-time-purchase`,
    p;
  t[0] === f ? (p = t[1]) : ((p = { enabled: f }), (t[0] = f), (t[1] = p));
  let { data: m, isError: h, refetch: g } = ft(p),
    _ = i !== `one-time-purchase`,
    v;
  t[2] === _ ? (v = t[3]) : ((v = { enabled: _ }), (t[2] = _), (t[3] = v));
  let { data: y, isPending: b } = we(v),
    x =
      (y?.payment_methods.length ?? 0) > 0 ||
      (c?.plan_type === Ee.FREE && y?.default_payment_method_id != null),
    S = i === `setup-auto-reload` && m?.isEnabled === !1 && x,
    C;
  t[4] !== a || t[5] !== o || t[6] !== S || t[7] !== s
    ? ((C = We({ accountId: a, authMethod: o, enabled: S, userId: s })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = S),
      (t[7] = s),
      (t[8] = C))
    : (C = t[8]);
  let { data: w, isError: ee, isFetching: E, isSuccess: D, refetch: te } = d(C),
    O;
  t[9] === r ? (O = t[10]) : ((O = ge(r)), (t[9] = r), (t[10] = O));
  let k;
  t[11] === O ? (k = t[12]) : ((k = { analyticsSurface: O }), (t[11] = O), (t[12] = k));
  let { enableAutoTopUpMutation: ne, updateAutoTopUpMutation: A, disableAutoTopUpMutation: j } = _e(k),
    re;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((re = { enabled: !0 }), (t[13] = re)) : (re = t[13]);
  let { data: ie, isPending: M, isError: N, refetch: ae } = de(re),
    P;
  t[14] !== ie || t[15] !== M || t[16] !== l
    ? ((P = M ? void 0 : (ie ?? l.getContext().user?.country ?? null)),
      (t[14] = ie),
      (t[15] = M),
      (t[16] = l),
      (t[17] = P))
    : (P = t[17]);
  let F = P,
    I;
  t[18] === F ? (I = t[19]) : ((I = { billingCurrency: F, enabled: !0 }), (t[18] = F), (t[19] = I));
  let { data: L, isPending: oe, isError: R, refetch: z } = pe(I),
    se = M || oe,
    ce;
  t[20] !== ae || t[21] !== z
    ? ((ce = () => {
        (ae(), z());
      }),
      (t[20] = ae),
      (t[21] = z),
      (t[22] = ce))
    : (ce = t[22]);
  let B = ce,
    fe;
  t[23] === n
    ? (fe = t[24])
    : ((fe = (e) => {
        e || n();
      }),
      (t[23] = n),
      (t[24] = fe));
  let V = fe;
  if (i === `one-time-purchase`) {
    if (se) {
      let e;
      return (
        t[25] !== V || t[26] !== r || t[27] !== i
          ? ((e = (0, $.jsx)(Yt, { open: !0, source: r, variant: i, state: `loading`, onOpenChange: V })),
            (t[25] = V),
            (t[26] = r),
            (t[27] = i),
            (t[28] = e))
          : (e = t[28]),
        e
      );
    }
    if (N || R || F == null || L == null) {
      let e;
      return (
        t[29] !== V || t[30] !== B || t[31] !== r || t[32] !== i
          ? ((e = (0, $.jsx)(Yt, {
              open: !0,
              source: r,
              variant: i,
              state: `error`,
              onRetry: B,
              onOpenChange: V,
            })),
            (t[29] = V),
            (t[30] = B),
            (t[31] = r),
            (t[32] = i),
            (t[33] = e))
          : (e = t[33]),
        e
      );
    }
    let e = u?.credits ?? null,
      n;
    return (
      t[34] !== L || t[35] !== V || t[36] !== r || t[37] !== e || t[38] !== i
        ? ((n = (0, $.jsx)(Yt, {
            open: !0,
            source: r,
            variant: i,
            creditDetails: e,
            pricingInfo: L,
            onOpenChange: V,
          })),
          (t[34] = L),
          (t[35] = V),
          (t[36] = r),
          (t[37] = e),
          (t[38] = i),
          (t[39] = n))
        : (n = t[39]),
      n
    );
  }
  if (se || b) {
    let e;
    return (
      t[40] !== V || t[41] !== r || t[42] !== i
        ? ((e = (0, $.jsx)(Yt, { open: !0, source: r, variant: i, state: `loading`, onOpenChange: V })),
          (t[40] = V),
          (t[41] = r),
          (t[42] = i),
          (t[43] = e))
        : (e = t[43]),
      e
    );
  }
  if (N || R || F == null || L == null) {
    let e;
    return (
      t[44] !== V || t[45] !== B || t[46] !== r || t[47] !== i
        ? ((e = (0, $.jsx)(Yt, {
            open: !0,
            source: r,
            variant: i,
            state: `error`,
            onRetry: B,
            onOpenChange: V,
          })),
          (t[44] = V),
          (t[45] = B),
          (t[46] = r),
          (t[47] = i),
          (t[48] = e))
        : (e = t[48]),
      e
    );
  }
  if (le({ autoTopUpSettings: m, hasPaymentMethod: x, isManageAutoReload: i === `manage-auto-reload` })) {
    let e = u?.credits ?? null,
      n;
    return (
      t[49] !== L || t[50] !== V || t[51] !== r || t[52] !== e
        ? ((n = (0, $.jsx)(Yt, {
            open: !0,
            source: r,
            variant: `one-time-purchase`,
            creditDetails: e,
            pricingInfo: L,
            onOpenChange: V,
          })),
          (t[49] = L),
          (t[50] = V),
          (t[51] = r),
          (t[52] = e),
          (t[53] = n))
        : (n = t[53]),
      n
    );
  }
  if (m == null) {
    let e;
    return (
      t[54] !== V || t[55] !== h || t[56] !== g || t[57] !== r || t[58] !== i
        ? ((e = h
            ? (0, $.jsx)(Yt, {
                open: !0,
                source: r,
                variant: i,
                state: `error`,
                onRetry: () => {
                  g();
                },
                onOpenChange: V,
              })
            : (0, $.jsx)(Yt, { open: !0, source: r, variant: i, state: `loading`, onOpenChange: V })),
          (t[54] = V),
          (t[55] = h),
          (t[56] = g),
          (t[57] = r),
          (t[58] = i),
          (t[59] = e))
        : (e = t[59]),
      e
    );
  }
  if (i === `add-credits` && m.isEnabled) {
    let e = u?.credits ?? null,
      n;
    return (
      t[60] !== L || t[61] !== V || t[62] !== r || t[63] !== e
        ? ((n = (0, $.jsx)(Yt, {
            open: !0,
            source: r,
            variant: `one-time-purchase`,
            creditDetails: e,
            pricingInfo: L,
            onOpenChange: V,
          })),
          (t[60] = L),
          (t[61] = V),
          (t[62] = r),
          (t[63] = e),
          (t[64] = n))
        : (n = t[64]),
      n
    );
  }
  let H = m.isEnabled ? null : (w ?? null),
    me = i === `setup-auto-reload` && !m.isEnabled && !D && !ee,
    U = !m.isEnabled && ee,
    he = u?.credits ?? null,
    ve;
  t[65] === te
    ? (ve = t[66])
    : ((ve = () => {
        te();
      }),
      (t[65] = te),
      (t[66] = ve));
  let ye;
  return (
    t[67] !== L ||
    t[68] !== m ||
    t[69] !== j ||
    t[70] !== ne ||
    t[71] !== V ||
    t[72] !== E ||
    t[73] !== r ||
    t[74] !== H ||
    t[75] !== me ||
    t[76] !== U ||
    t[77] !== he ||
    t[78] !== ve ||
    t[79] !== A ||
    t[80] !== i
      ? ((ye = (0, $.jsx)(Yt, {
          open: !0,
          source: r,
          variant: i,
          serverState: m,
          discountOffer: H,
          isDiscountOfferPending: me,
          isDiscountOfferError: U,
          isDiscountOfferFetching: E,
          creditDetails: he,
          pricingInfo: L,
          enableAutoTopUpMutation: ne,
          updateAutoTopUpMutation: A,
          disableAutoTopUpMutation: j,
          onRetryDiscountOffer: ve,
          onOpenChange: V,
        })),
        (t[67] = L),
        (t[68] = m),
        (t[69] = j),
        (t[70] = ne),
        (t[71] = V),
        (t[72] = E),
        (t[73] = r),
        (t[74] = H),
        (t[75] = me),
        (t[76] = U),
        (t[77] = he),
        (t[78] = ve),
        (t[79] = A),
        (t[80] = i),
        (t[81] = ye))
      : (ye = t[81]),
    ye
  );
}
var nn, $;
function rn() {
  return (rn = e(() => {
    ((nn = m()), ee(), C(), $e(), at(), R(), Te(), ct(), tt(), Se(), en(), ($ = c()));
  }))();
}
rn();
export { tn as CreditReloadDialogHost };
//# sourceMappingURL=dialog-host-38b1607a2e51.js.map
