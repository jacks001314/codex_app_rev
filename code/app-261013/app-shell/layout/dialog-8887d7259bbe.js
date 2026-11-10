import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as ee,
  Cxt as r,
  GE as i,
  IDt as a,
  Ixt as o,
  Pxt as s,
  VDt as te,
  Vxt as ne,
  WE as re,
  Xot as ie,
  Yot as ae,
  _O as oe,
  _xt as se,
  cO as ce,
  fO as le,
  hot as ue,
  i3 as c,
  jDt as l,
  lO as u,
  lot as de,
  mO as fe,
  oO as pe,
  r3 as me,
  rst as d,
  sO as he,
  spt as ge,
  t3 as _e,
  vO as ve,
  vzt as ye,
  wot as be,
  xMt as xe,
  yzt as Se,
} from "./app-shared-bbfeca5e5737.js";
import {
  DMr as Ce,
  Fin as f,
  GMr as we,
  Hin as Te,
  TMr as Ee,
  XMr as De,
  Ymr as Oe,
  aDr as ke,
  eDr as Ae,
  ehr as je,
  nDr as Me,
  nT as p,
  oDr as Ne,
  rT as Pe,
  tNr as m,
} from "./app-initial-5851df3f6cb1.js";
import { r as Fe } from "./payment-method-display-f5e9bf4fbbce.js";
import { n as Ie } from "./payment-methods-36911f01af71.js";
import { n as Le, t as Re } from "./format-amount-e8f6a81b6cbb.js";
import { n as h, r as ze } from "./queries-a0c4a0375be0.js";
import { n as g, t as Be } from "./query-error-f06ec25b6ac2.js";
import { a as _, r as Ve } from "./error-4216d2e638a8.js";
import { n as He, r as Ue } from "./stripe-client-65fa98e77e53.js";
import { r as v } from "./billing-state-dcaaf3e0b18a.js";
import { n as y, t as We } from "./add-method-d517281a01bd.js";
import { n as Ge, t as Ke } from "./edit-method-6b2494c0f75e.js";
import { a as qe, n as Je, t as Ye } from "./stripe-payment-confirmation-ff492adf70b6.js";
import { r as Xe } from "./confirm-subscription-upgrade-cf8012c4bfe6.js";
import { n as b, t as Ze } from "./delinquent-upgrade-preparation-5af5249ff902.js";
import { n as Qe, t as $e } from "./selector-dd5e11ba2e4a.js";
import { r as x, t as S } from "./events-cbcc77149e45.js";
function C(e) {
  let n = (0, tt.c)(130),
    { accountId: i, planName: s, onClose: ae, onComplete: se, entryPoint: le } = e,
    c = le === void 0 ? `announcement` : le,
    l = o(ee),
    { data: de } = Te(),
    d = te(),
    _e = ke(),
    ve = r(`/settings/billing?billing_invoice_payment=1`),
    ye = ne(De),
    be = Pe(),
    xe = (0, w.useRef)(!1),
    Se = (0, w.useRef)(!1),
    [f, Ee] = (0, w.useState)(!1),
    [Ae, je] = (0, w.useState)(null),
    [p, m] = (0, w.useState)(null),
    [Le, h] = (0, w.useState)(!1),
    [g, _] = (0, w.useState)(null),
    He = (0, w.useRef)(null),
    v;
  n[0] === i
    ? (v = n[1])
    : ((v = {
        queryKey: [`consumer-billing`, i, `recovery-invoice`],
        queryFn: (e) => {
          let { signal: t } = e;
          return Oe.safePost(`/subscriptions/complete_payment/invoice_details`, {
            requestBody: { account_id: i },
            additionalHeaders: { [ge]: i },
            signal: t,
          });
        },
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        refetchOnReconnect: `always`,
      }),
      (n[0] = i),
      (n[1] = v));
  let { data: y, isPending: Ge, isFetching: Xe, isError: b, refetch: Qe } = ie(v),
    S;
  n[2] === i ? (S = n[3]) : ((S = Ie(i)), (n[2] = i), (n[3] = S));
  let { data: C, isPending: D, isFetching: O, isError: k, refetch: A } = ie(S),
    nt;
  n[4] !== i || n[5] !== d.locale || n[6] !== _e
    ? ((nt = Ue(i, d.locale, _e.getExperiment(`4048417348`).get(`enabled`, !1))),
      (n[4] = i),
      (n[5] = d.locale),
      (n[6] = _e),
      (n[7] = nt))
    : (nt = n[7]);
  let { data: j, isPending: rt, isError: M, refetch: it } = ie(nt),
    at = Me(`200883286`),
    N = y?.available === !0,
    ot = Ge || (N && (D || rt)),
    st,
    ct;
  (n[8] !== de || n[9] !== c || n[10] !== N || n[11] !== l
    ? ((st = () => {
        N && de != null && x(l, `shown`, c);
      }),
      (ct = [de, c, N, l]),
      (n[8] = de),
      (n[9] = c),
      (n[10] = N),
      (n[11] = l),
      (n[12] = st),
      (n[13] = ct))
    : ((st = n[12]), (ct = n[13])),
    (0, w.useEffect)(st, ct));
  let lt = Ne(`225453312`),
    ut;
  n[14] !== y || n[15] !== at || n[16] !== lt
    ? ((ut =
        y?.available === !0 &&
        y.applied_balance < 0 &&
        at &&
        (!lt.get(`redemption_country_restrictions_enabled`, !1) || y.currency.toLowerCase() === `usd`)),
      (n[14] = y),
      (n[15] = at),
      (n[16] = lt),
      (n[17] = ut))
    : (ut = n[17]);
  let dt = ut,
    ft = Ae ?? C?.default_payment_method_id ?? C?.payment_methods[0]?.id,
    P,
    pt;
  n[18] !== j ||
  n[19] !== M ||
  n[20] !== ft ||
  n[21] !== y?.available ||
  n[22] !== b ||
  n[23] !== Xe ||
  n[24] !== C?.payment_methods ||
  n[25] !== k ||
  n[26] !== O
    ? ((P = C?.payment_methods.find((e) => e.id === ft)),
      (pt = y?.available === !0 && !b && !Xe && P != null && !Fe(P) && !k && !O && j != null && !M),
      (n[18] = j),
      (n[19] = M),
      (n[20] = ft),
      (n[21] = y?.available),
      (n[22] = b),
      (n[23] = Xe),
      (n[24] = C?.payment_methods),
      (n[25] = k),
      (n[26] = O),
      (n[27] = P),
      (n[28] = pt))
    : ((P = n[27]), (pt = n[28]));
  let F = pt,
    mt;
  n[29] !== i || n[30] !== be || n[31] !== l || n[32] !== ye
    ? ((mt = () => be() && !xe.current && l.get(we) === i && l.get(De) === ye),
      (n[29] = i),
      (n[30] = be),
      (n[31] = l),
      (n[32] = ye),
      (n[33] = mt))
    : (mt = n[33]);
  let I = mt,
    ht;
  n[34] !== c || n[35] !== ae || n[36] !== l
    ? ((ht = () => {
        xe.current || (x(l, `dismissed`, c), (xe.current = !0), ae());
      }),
      (n[34] = c),
      (n[35] = ae),
      (n[36] = l),
      (n[37] = ht))
    : (ht = n[37]);
  let L = ht,
    gt;
  n[38] !== i || n[39] !== c || n[40] !== d || n[41] !== se || n[42] !== l
    ? ((gt = (e) => {
        (e || x(l, `payment_succeeded`, c),
          l.get(ue).success(d.formatMessage(e ? E.pending : E.success)),
          (xe.current = !0),
          se(),
          Ce(`accounts-check`)
            .then(() => ze(l, i))
            .catch(et));
      }),
      (n[38] = i),
      (n[39] = c),
      (n[40] = d),
      (n[41] = se),
      (n[42] = l),
      (n[43] = gt))
    : (gt = n[43]);
  let _t = gt,
    vt;
  n[44] !== i ||
  n[45] !== I ||
  n[46] !== ve ||
  n[47] !== F ||
  n[48] !== j ||
  n[49] !== L ||
  n[50] !== c ||
  n[51] !== _t ||
  n[52] !== d ||
  n[53] !== l ||
  n[54] !== P
    ? ((vt = async () => {
        if (Se.current || !F || P == null || j == null || !I()) return;
        ((Se.current = !0),
          x(l, `pay_now_clicked`, c, { hasSelectedPaymentMethod: P != null }),
          Ee(!0),
          m(null),
          h(!1));
        let e = { account_id: i, payment_method_id: P.id },
          t = { [ge]: i },
          n = `complete_payment_request`,
          ee = (e) => {
            (x(l, `payment_failed`, c, { paymentMethodFailureReason: e }), m(e));
          };
        return (async () => {
          try {
            let r = await Oe.safePost(`/subscriptions/complete_payment`, {
              requestBody: e,
              additionalHeaders: t,
            });
            if (!I()) return;
            if (r?.status === `requires_action`) {
              x(l, `requires_action`, c);
              let ee = r.payment_intent;
              n = `stripe_confirm`;
              let i = await Ye({
                confirmPaymentIntent: () => j.stripe.confirmCardPayment(ee.client_secret),
                shouldRetry: I,
              });
              if (!I()) return;
              if (i.error != null) {
                let e = qe(i.error);
                (e === `other`
                  ? x(l, `payment_error`, c, { stage: n })
                  : x(l, `payment_failed`, c, { paymentMethodFailureReason: e }),
                  i.error.code === `lock_timeout` ? h(!0) : m(e));
                return;
              }
              let a = i.paymentIntent;
              if (a.id !== ee.id) {
                (x(l, `payment_error`, c, { stage: `stripe_confirm_incomplete` }), h(!0));
                return;
              }
              if (a.status === `processing`) {
                _t(!0);
                return;
              }
              let o = Je(a);
              if (o != null || a.status !== `succeeded`) {
                (o == null
                  ? x(l, `payment_error`, c, { stage: `stripe_confirm_incomplete` })
                  : x(l, `payment_failed`, c, { paymentMethodFailureReason: o }),
                  m(o ?? `other`));
                return;
              }
              ((n = `post_action_complete_payment_request`),
                (r = await Oe.safePost(`/subscriptions/complete_payment`, {
                  requestBody: e,
                  additionalHeaders: t,
                })));
            }
            if (!I()) return;
            r != null && r.status == null
              ? _t(!1)
              : r?.status === `pending`
                ? _t(!0)
                : r?.status === `payment_method_failed`
                  ? ee(r.payment_method_failure_reason ?? `other`)
                  : r?.status === `requires_action`
                    ? ee(`authentication_failed`)
                    : (x(l, `payment_error`, c, {
                        stage:
                          r?.status === `setup_required`
                            ? `unexpected_setup_required`
                            : `unexpected_response`,
                      }),
                      h(!0));
          } catch (e) {
            let t = e;
            I() &&
              (x(l, `payment_error`, c, { stage: n }),
              Ze(t) === `plan_not_available`
                ? (l.get(ue).warning(d.formatMessage(E.planUnavailable)), L())
                : h(!0));
          }
        })().finally(() => {
          ((Se.current = !1), I() && Ee(!1));
        });
      }),
      (n[44] = i),
      (n[45] = I),
      (n[46] = ve),
      (n[47] = F),
      (n[48] = j),
      (n[49] = L),
      (n[50] = c),
      (n[51] = _t),
      (n[52] = d),
      (n[53] = l),
      (n[54] = P),
      (n[55] = vt))
    : (vt = n[55]);
  let yt = vt;
  if (g != null) {
    let e;
    return (
      n[56] !== i || n[57] !== I || n[58] !== g || n[59] !== A
        ? ((e =
            g === `add`
              ? (0, T.jsx)(We, {
                  accountId: i,
                  onCloseAutoFocus: () => He.current?.focus(),
                  onClose: () => _(null),
                  onSuccess: (e) => {
                    let { canonical_payment_method_id: t } = e;
                    I() && t != null && (je(t), m(null));
                  },
                })
              : (0, T.jsx)(Ke, {
                  accountId: i,
                  methodId: g.id,
                  onCloseAutoFocus: () => He.current?.focus(),
                  onClose: () => {
                    (_(null),
                      A().then((e) => {
                        I() && !e.isError && m(null);
                      }));
                  },
                })),
          (n[56] = i),
          (n[57] = I),
          (n[58] = g),
          (n[59] = A),
          (n[60] = e))
        : (e = n[60]),
      e
    );
  }
  let bt;
  n[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = { "aria-describedby": void 0 }), (n[61] = bt))
    : (bt = n[61]);
  let R;
  n[62] === L
    ? (R = n[63])
    : ((R = (e) => {
        e || L();
      }),
      (n[62] = L),
      (n[63] = R));
  let xt = f || ot,
    z;
  n[64] === yt
    ? (z = n[65])
    : ((z = (e) => {
        (e.preventDefault(), yt());
      }),
      (n[64] = yt),
      (n[65] = z));
  let B;
  n[66] === s
    ? (B = n[67])
    : ((B = (0, T.jsx)(ce, {
        title: (0, T.jsx)(oe, {
          children: (0, T.jsx)(a, {
            id: `codex.subscriptionPaymentRecovery.dialog.title`,
            defaultMessage: `Renew your ChatGPT {planName} plan`,
            description: `Title of the payment recovery dialog for an existing failed personal subscription renewal. planName is the short branded plan name, such as Plus or Pro.`,
            values: { planName: s },
          }),
        }),
      })),
      (n[66] = s),
      (n[67] = B));
  let V;
  n[68] !== y?.available || n[69] !== s
    ? ((V =
        y?.available === !1
          ? null
          : (0, T.jsx)(u, {
              children: (0, T.jsx)(re, {
                type: `warning`,
                content: (0, T.jsx)(a, {
                  id: `codex.subscriptionPaymentRecovery.dialog.description`,
                  defaultMessage: `Your last payment failed. Update your payment method to continue using ChatGPT {planName}.`,
                  description: `Explanation in the personal subscription renewal recovery dialog. planName is the subscriber's current short branded plan name.`,
                  values: { planName: s },
                }),
              }),
            })),
      (n[68] = y?.available),
      (n[69] = s),
      (n[70] = V))
    : (V = n[70]);
  let H;
  n[71] === ot
    ? (H = n[72])
    : ((H = ot ? (0, T.jsx)(u, { children: (0, T.jsx)(me, {}) }) : null), (n[71] = ot), (n[72] = H));
  let U;
  n[73] !== M || n[74] !== N || n[75] !== b || n[76] !== k || n[77] !== it || n[78] !== Qe || n[79] !== A
    ? ((U =
        b || (N && (k || M))
          ? (0, T.jsx)(u, {
              children: (0, T.jsx)(Be, {
                onRetry: () => {
                  Promise.all([Qe(), A(), it()]);
                },
              }),
            })
          : null),
      (n[73] = M),
      (n[74] = N),
      (n[75] = b),
      (n[76] = k),
      (n[77] = it),
      (n[78] = Qe),
      (n[79] = A),
      (n[80] = U))
    : (U = n[80]);
  let W;
  n[81] === y?.available
    ? (W = n[82])
    : ((W =
        y?.available === !1
          ? (0, T.jsx)(u, {
              children: (0, T.jsx)(a, {
                id: `codex.subscriptionPaymentRecovery.dialog.invoiceUnavailable`,
                defaultMessage: `Payment details are unavailable. Try again later.`,
                description: `Message in the personal subscription renewal recovery dialog when the server successfully responds that no recoverable invoice is available. No payment has been submitted; the subscriber can close the dialog.`,
              }),
            })
          : null),
      (n[81] = y?.available),
      (n[82] = W));
  let G;
  n[83] !== d || n[84] !== y || n[85] !== s || n[86] !== dt
    ? ((G =
        dt && y?.available
          ? (0, T.jsxs)(u, {
              children: [
                (0, T.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-4`,
                  children: [
                    (0, T.jsx)(a, {
                      id: `codex.subscriptionPaymentRecovery.dialog.subscriptionCharge`,
                      defaultMessage: `ChatGPT {planName}`,
                      description: `Invoice row for the full subscription charge before applied Wallet credit in personal renewal recovery. planName is the subscriber's short branded plan name.`,
                      values: { planName: s },
                    }),
                    Re(d, y.amount_due - y.applied_balance, y.currency),
                  ],
                }),
                (0, T.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-4`,
                  children: [
                    (0, T.jsx)(a, {
                      id: `codex.subscriptionPaymentRecovery.dialog.walletApplied`,
                      defaultMessage: `Wallet balance applied`,
                      description: `Invoice row for Wallet credit already applied to a failed renewal invoice, not the subscriber's current available Wallet balance.`,
                    }),
                    Re(d, y.applied_balance, y.currency),
                  ],
                }),
              ],
            })
          : null),
      (n[83] = d),
      (n[84] = y),
      (n[85] = s),
      (n[86] = dt),
      (n[87] = G))
    : (G = n[87]);
  let K;
  n[88] !== p || n[89] !== Le
    ? ((K =
        p != null || Le
          ? (0, T.jsx)(u, {
              children: (0, T.jsx)(re, {
                type: `warning`,
                role: `alert`,
                content: p == null ? (0, T.jsx)(a, { ...E.error }) : (0, T.jsx)(a, { ...Ve(p) }),
              }),
            })
          : null),
      (n[88] = p),
      (n[89] = Le),
      (n[90] = K))
    : (K = n[90]);
  let q;
  n[91] !== f ||
  n[92] !== d ||
  n[93] !== y?.available ||
  n[94] !== C?.payment_methods ||
  n[95] !== O ||
  n[96] !== D ||
  n[97] !== P
    ? ((q =
        y?.available && !D
          ? (0, T.jsxs)(u, {
              children: [
                (0, T.jsx)($e, {
                  ref: He,
                  methods: C?.payment_methods,
                  selected: P,
                  disabled: f || O,
                  "aria-label": d.formatMessage(E.paymentMethod),
                  onSelect: (e) => {
                    (je(e), m(null));
                  },
                  placeholder: (0, T.jsx)(a, { ...E.paymentMethod }),
                }),
                P != null && Fe(P)
                  ? (0, T.jsx)(re, { type: `warning`, content: (0, T.jsx)(a, { ...Ve(`expired_card`) }) })
                  : null,
                (0, T.jsx)(t, {
                  color: `ghost`,
                  disabled: f,
                  onClick: () => _(`add`),
                  children: (0, T.jsx)(a, {
                    id: `codex.subscriptionPaymentRecovery.dialog.add`,
                    defaultMessage: `Add payment method`,
                    description: `Button in personal subscription renewal recovery that opens the secure form for saving another payment card.`,
                  }),
                }),
                P?.type === `card`
                  ? (0, T.jsx)(t, {
                      color: `ghost`,
                      disabled: f,
                      onClick: () => _(P),
                      children: (0, T.jsx)(a, {
                        id: `codex.subscriptionPaymentRecovery.dialog.edit`,
                        defaultMessage: `Edit payment method`,
                        description: `Button in personal renewal recovery for updating the selected card's expiry and billing address.`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[91] = f),
      (n[92] = d),
      (n[93] = y?.available),
      (n[94] = C?.payment_methods),
      (n[95] = O),
      (n[96] = D),
      (n[97] = P),
      (n[98] = q))
    : (q = n[98]);
  let J;
  n[99] !== d || n[100] !== y
    ? ((J = y?.available
        ? (0, T.jsx)(a, {
            id: `codex.subscriptionPaymentRecovery.dialog.due`,
            defaultMessage: `Due today: {amount}`,
            description: `Amount still due on the existing failed renewal invoice. amount is a localized currency amount after applied credit and including tax.`,
            values: { amount: Re(d, y.amount_due, y.currency) },
          })
        : null),
      (n[99] = d),
      (n[100] = y),
      (n[101] = J))
    : (J = n[101]);
  let St;
  n[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((St = (0, T.jsx)(a, {
        id: `codex.subscriptionPaymentRecovery.dialog.close`,
        defaultMessage: `Close`,
        description: `Closes the personal renewal recovery dialog and dismisses its banner for one day.`,
      })),
      (n[102] = St))
    : (St = n[102]);
  let Y;
  n[103] === L
    ? (Y = n[104])
    : ((Y = (0, T.jsx)(t, { color: `ghost`, onClick: L, children: St })), (n[103] = L), (n[104] = Y));
  let X;
  n[105] !== f || n[106] !== F || n[107] !== y?.available
    ? ((X =
        y?.available === !1
          ? null
          : (0, T.jsx)(t, {
              color: `primary`,
              type: `submit`,
              loading: f,
              disabled: f || !F,
              children: (0, T.jsx)(a, {
                id: `codex.subscriptionPaymentRecovery.dialog.pay`,
                defaultMessage: `Pay now`,
                description: `Confirms payment of the displayed overdue personal subscription invoice with the selected saved payment method.`,
              }),
            })),
      (n[105] = f),
      (n[106] = F),
      (n[107] = y?.available),
      (n[108] = X))
    : (X = n[108]);
  let Z;
  n[109] !== Y || n[110] !== X
    ? ((Z = (0, T.jsxs)(he, { children: [Y, X] })), (n[109] = Y), (n[110] = X), (n[111] = Z))
    : (Z = n[111]);
  let Q;
  n[112] !== J || n[113] !== Z
    ? ((Q = (0, T.jsxs)(u, { children: [J, Z] })), (n[112] = J), (n[113] = Z), (n[114] = Q))
    : (Q = n[114]);
  let $;
  n[115] !== xt ||
  n[116] !== z ||
  n[117] !== B ||
  n[118] !== V ||
  n[119] !== H ||
  n[120] !== U ||
  n[121] !== W ||
  n[122] !== G ||
  n[123] !== K ||
  n[124] !== q ||
  n[125] !== Q
    ? (($ = (0, T.jsxs)(pe, {
        size: `viewport`,
        as: `form`,
        className: `select-none`,
        "aria-busy": xt,
        onSubmit: z,
        children: [B, V, H, U, W, G, K, q, Q],
      })),
      (n[115] = xt),
      (n[116] = z),
      (n[117] = B),
      (n[118] = V),
      (n[119] = H),
      (n[120] = U),
      (n[121] = W),
      (n[122] = G),
      (n[123] = K),
      (n[124] = q),
      (n[125] = Q),
      (n[126] = $))
    : ($ = n[126]);
  let Ct;
  return (
    n[127] !== R || n[128] !== $
      ? ((Ct = (0, T.jsx)(fe, { open: !0, contentProps: bt, onOpenChange: R, children: $ })),
        (n[127] = R),
        (n[128] = $),
        (n[129] = Ct))
      : (Ct = n[129]),
    Ct
  );
}
function et() {}
var tt, w, T, E;
function D() {
  return (D = e(() => {
    ((tt = ye()),
      Xe(),
      ae(),
      s(),
      d(),
      (w = Se()),
      l(),
      se(),
      Ee(),
      m(),
      je(),
      f(),
      i(),
      _e(),
      ve(),
      le(),
      c(),
      de(),
      be(),
      Ae(),
      p(),
      v(),
      Le(),
      y(),
      Ge(),
      _(),
      Qe(),
      b(),
      h(),
      g(),
      He(),
      S(),
      (T = xe()),
      (E = n({
        paymentMethod: {
          id: `codex.subscriptionPaymentRecovery.dialog.paymentMethod`,
          defaultMessage: `Payment method`,
          description: `Accessible name and empty-state label for the saved payment method selector in personal subscription renewal recovery.`,
        },
        error: {
          id: `codex.subscriptionPaymentRecovery.dialog.error`,
          defaultMessage: `We couldn't complete your payment. Please try again.`,
          description: `Generic payment recovery error after a renewal payment request or bank authentication fails unexpectedly. The dialog stays open for retry.`,
        },
        success: {
          id: `codex.subscriptionPaymentRecovery.toast.success`,
          defaultMessage: `Payment completed`,
          description: `Confirmation toast after the existing failed personal subscription renewal invoice has been paid successfully.`,
        },
        pending: {
          id: `codex.subscriptionPaymentRecovery.toast.pending`,
          defaultMessage: `Your payment is processing. Your subscription will update once it's complete.`,
          description: `Toast after the processor accepts a personal renewal recovery payment but has not finished processing it. The recovery dialog closes.`,
        },
        planUnavailable: {
          id: `codex.subscriptionPaymentRecovery.toast.planUnavailable`,
          defaultMessage: `This plan is no longer available. Please choose a different plan.`,
          description: `Toast when the backend reports that the personal subscription plan being recovered is no longer available. The payment dialog closes.`,
        },
      })));
  }))();
}
D();
export { C as RecoveryDialog };
//# sourceMappingURL=dialog-8887d7259bbe.js.map
