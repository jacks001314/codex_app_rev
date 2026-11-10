import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { hrt as t, rst as n, spt as r, vrt as i } from "./app-shared-bbfeca5e5737.js";
import {
  CPt as a,
  GM as o,
  GMr as s,
  KM as c,
  OPt as l,
  XMr as u,
  Ymr as d,
  ehr as f,
  qM as p,
  tNr as m,
  xPt as h,
} from "./app-initial-5851df3f6cb1.js";
import { n as g, r as _ } from "./subscription-update-plan-7dcf54a45cb8.js";
import { a as v, n as y, o as b, r as x, t as S } from "./stripe-payment-confirmation-ff492adf70b6.js";
function C({ stripe: e, paymentIntentClientSecret: t, sdkMethod: n }) {
  return n === `confirmPixPayment`
    ? e.confirmPixPayment(t)
    : n === `confirmPayment`
      ? e.confirmPayment({
          clientSecret: t,
          redirect: `if_required`,
          confirmParams: { return_url: window.location.href },
        })
      : e.confirmCardPayment(t);
}
async function w({
  updateResult: e,
  stripePromise: t,
  isStripeClientBootstrapError: n,
  isPaymentMethodRecoveryEnabled: r,
  isOpen: i,
  cleanupPendingSubscriptionUpdate: a,
  onDiagnostic: o,
}) {
  if (e.status !== `requires_action`) return { status: `complete` };
  let s = {
    paymentIntentId: e.payment_intent.id,
    invoiceId: e.pending_update_invoice_id,
    recoveryEnabled: r,
  };
  E(o, { ...s, type: `confirmation_started` });
  let c = (e) => (
      E(o, {
        ...s,
        type: `confirmation_resolved`,
        outcome: e.status,
        failureReason: e.status === `payment_method_failed` ? e.reason : void 0,
      }),
      e
    ),
    l = (t) => (
      a(e.payment_intent.id, e.pending_update_invoice_id),
      c({ status: `payment_method_failed`, reason: t })
    );
  try {
    let u = e.payment_intent?.client_secret,
      d =
        e.payment_intent &&
        `next_action_type` in e.payment_intent &&
        typeof e.payment_intent.next_action_type == `string`
          ? e.payment_intent.next_action_type
          : null;
    if ((E(o, { ...s, type: `phase_started`, phase: `stripe_bootstrap` }), n || !t || !u))
      throw (
        E(o, { ...s, type: `phase_settled`, phase: `stripe_bootstrap`, outcome: `unavailable` }),
        Error(`Payment confirmation is still loading. Please try again.`)
      );
    let f;
    try {
      f = await t;
    } catch (e) {
      throw (E(o, { ...s, type: `phase_settled`, phase: `stripe_bootstrap`, outcome: `rejected` }), e);
    }
    if (
      (E(o, {
        ...s,
        type: `phase_settled`,
        phase: `stripe_bootstrap`,
        outcome: f ? `resolved` : `unavailable`,
      }),
      !f)
    )
      throw Error(`Payment confirmation is still loading. Please try again.`);
    if (!i()) return (a(e.payment_intent.id, e.pending_update_invoice_id), c({ status: `closed` }));
    let p = r && d === O ? `confirmPixPayment` : r && d === D ? `confirmPayment` : `confirmCardPayment`,
      m = 0,
      h = await S({
        confirmPaymentIntent: () => {
          let e = () => C({ stripe: f, paymentIntentClientSecret: u, sdkMethod: p });
          if (!o) return e();
          let t = { ...s, phase: `stripe_confirmation`, sdkCallNumber: ++m, sdkMethod: p, nextActionType: d };
          E(o, { ...t, type: `phase_started` });
          let n;
          try {
            n = e();
          } catch (e) {
            throw (E(o, { ...t, type: `phase_settled`, outcome: `rejected` }), e);
          }
          return n.then(
            (e) => (
              E(o, {
                ...t,
                type: `phase_settled`,
                outcome:
                  e.error?.code === `lock_timeout`
                    ? `returned_lock_timeout`
                    : e.error
                      ? `returned_error`
                      : `resolved`,
                paymentIntentStatus: e.paymentIntent?.status,
                failureReason: e.error ? v(e.error) : void 0,
              }),
              e
            ),
            (e) => {
              throw (E(o, { ...t, type: `phase_settled`, outcome: `rejected` }), e);
            },
          );
        },
        shouldRetry: i,
      });
    if (!i()) return (a(e.payment_intent.id, e.pending_update_invoice_id), c({ status: `closed` }));
    if (h.error) {
      if (h.error.code === `lock_timeout`) throw Error(h.error.message);
      if (r) return l(v(h.error));
      throw Error(h.error.message);
    }
    let g = `paymentIntent` in h ? h.paymentIntent : null;
    if (g?.status === `processing` || (r && g?.status === `requires_action` && d === O))
      return c({ status: `pending` });
    if (g != null) {
      let e = y(g);
      if (e != null && (g.status === `requires_payment_method` || r)) return l(e);
    }
    if (r) {
      if (g?.status === `requires_action`) return l(`authentication_failed`);
      if (g?.status !== `succeeded`) return l(`other`);
    }
  } catch (t) {
    throw (
      E(o, { ...s, type: `confirmation_rejected` }),
      a(e.payment_intent.id, e.pending_update_invoice_id),
      t
    );
  }
  return c({ status: `complete` });
}
async function T({
  updateResult: e,
  stripePromise: t,
  isStripeClientBootstrapError: n,
  isPaymentMethodRecoveryEnabled: r,
  isOpen: i,
  cleanupPendingSubscriptionUpdate: a,
  onDiagnostic: o,
}) {
  if (e.status === `pending`) return { status: `pending` };
  if (e.status === `payment_method_failed`)
    return (
      a(e.pending_update_payment_intent_id, e.pending_update_invoice_id),
      {
        status: `payment_method_failed`,
        reason: e.payment_method_failure_reason ?? `other`,
        detail: e.payment_method_failure_detail ?? null,
        source: `update`,
      }
    );
  if (e.status === `setup_required`)
    return { status: `setup_required`, setupIntentClientSecret: e.setup_intent_client_secret };
  let s = await w({
    updateResult: e,
    stripePromise: t,
    isStripeClientBootstrapError: n,
    isPaymentMethodRecoveryEnabled: r,
    isOpen: i,
    cleanupPendingSubscriptionUpdate: a,
    onDiagnostic: o,
  });
  return s.status === `payment_method_failed` ? { ...s, source: `confirmation` } : s;
}
function E(e, t) {
  try {
    e?.(t);
  } catch {}
}
var D, O;
function k() {
  return (k = e(() => {
    (x(), b(), (D = `upi_handle_redirect_or_display_qr_code`), (O = `pix_display_qr_code`));
  }))();
}
async function A(e, n) {
  let { accountId: i, updatedPlan: a, userId: f } = n,
    p = c(n.signal) ?? o(e, n.signal, { accountId: i, userId: f, targetPlan: g(a) }),
    m = !1,
    _ = !1,
    y = !1,
    b,
    x,
    S = async () => {
      m &&
        e.get(s) === i &&
        e.get(u) === f &&
        ((m = !1),
        await d.safePost(`/subscriptions/cancel`, {
          requestBody: { account_id: i },
          additionalHeaders: { [r]: i },
        }));
    };
  try {
    for (;;) {
      if (((_ = !1), (y = !1), !n.isActive())) return { status: `closed` };
      if (!n.willRenew && !n.promoCode) {
        if (
          (await d.safePost(`/subscriptions/renew`, {
            requestBody: { account_id: i },
            signal: n.signal,
            additionalHeaders: { [r]: i },
          }),
          (m = !0),
          !n.isActive())
        )
          return { status: `closed` };
        if (!(await n.revalidatePaymentMethod()))
          return (
            await S(),
            { status: `payment_method_failed`, reason: `payment_method_unavailable`, source: `update` }
          );
      }
      (n.onSubmit?.(), (_ = !0));
      let t = await l({
        accountId: i,
        updatedPlan: a,
        promoCampaign: n.promoCampaign,
        promoCode: n.promoCode,
        paymentMethodId: b == null ? n.paymentMethodId : void 0,
        setupIntentId: b,
        signal: n.signal,
        expectedAccountId: i,
      });
      y = !0;
      let o = null;
      (t.status === `requires_action`
        ? (o = t.payment_intent.id)
        : t.status === `payment_method_failed` && (o = t.pending_update_payment_intent_id),
        p?.record(
          `update_result_received`,
          { outcome: t.status ?? `complete`, modalOpen: n.isActive() },
          {
            paymentIntentId: o,
            invoiceId: `pending_update_invoice_id` in t ? t.pending_update_invoice_id : null,
          },
        ));
      let c = p?.startPhase(`update_result_handling`),
        g,
        C = await T({
          updateResult: t,
          stripePromise: Promise.resolve(n.stripe),
          isStripeClientBootstrapError: !1,
          isPaymentMethodRecoveryEnabled: n.isPaymentMethodRecoveryEnabled,
          isOpen: n.isActive,
          onDiagnostic: p?.observePayment,
          cleanupPendingSubscriptionUpdate: (t, n) => {
            e.get(s) === i &&
              e.get(u) === f &&
              (g = h({
                accountId: i,
                expectedPaymentIntentId: t ?? void 0,
                pendingUpdateInvoiceId: n ?? void 0,
                expectedAccountId: i,
              }).then(
                () => void 0,
                (e) => {
                  x =
                    e instanceof Error
                      ? e
                      : Error(`Unable to clear pending subscription update`, { cause: e });
                },
              ));
          },
        })
          .finally(() => g)
          .then(
            (e) => (c?.settle(`resolved`), e),
            (e) => {
              throw (c?.settle(`rejected`), e);
            },
          );
      if (!n.isActive()) return { status: `closed` };
      if (x != null) throw x;
      if (C.status === `setup_required`) {
        if ((await S(), !n.isActive())) return { status: `closed` };
        if (!n.mandateRecovery || b != null)
          return { status: `payment_method_failed`, reason: `other`, source: `update` };
        let e = p?.startPhase(`stripe_confirmation`, {
            sdkMethod: `confirmSetup`,
            recoveryEnabled: n.isPaymentMethodRecoveryEnabled,
          }),
          t;
        try {
          t = await n.stripe.confirmSetup({
            clientSecret: C.setupIntentClientSecret,
            redirect: `if_required`,
            confirmParams: { return_url: window.location.href },
          });
        } catch (t) {
          throw (
            e?.settle(`rejected`),
            p?.record(`confirmation_result_rejected`, {
              outcome: `rejected`,
              sdkMethod: `confirmSetup`,
              recoveryEnabled: n.isPaymentMethodRecoveryEnabled,
            }),
            t
          );
        }
        if ((e?.settle(t.error ? `returned_error` : `returned`), !n.isActive()))
          return (
            p?.record(`confirmation_result_resolved`, {
              outcome: `closed`,
              sdkMethod: `confirmSetup`,
              recoveryEnabled: n.isPaymentMethodRecoveryEnabled,
            }),
            { status: `closed` }
          );
        if (t.error) {
          let e = v(t.error);
          return (
            p?.record(`confirmation_result_resolved`, {
              outcome: `payment_method_failed`,
              failureReason: e,
              sdkMethod: `confirmSetup`,
              recoveryEnabled: n.isPaymentMethodRecoveryEnabled,
            }),
            { status: `payment_method_failed`, reason: e, source: `confirmation` }
          );
        }
        if (t.setupIntent?.status !== `succeeded`)
          return (
            p?.record(`confirmation_result_resolved`, {
              outcome: `payment_method_failed`,
              failureReason: `authentication_failed`,
              sdkMethod: `confirmSetup`,
              recoveryEnabled: n.isPaymentMethodRecoveryEnabled,
            }),
            { status: `payment_method_failed`, reason: `authentication_failed`, source: `confirmation` }
          );
        (p?.record(`confirmation_result_resolved`, {
          outcome: `complete`,
          sdkMethod: `confirmSetup`,
          recoveryEnabled: n.isPaymentMethodRecoveryEnabled,
        }),
          (b = t.setupIntent.id));
        continue;
      }
      return (C.status === `payment_method_failed` && (await S()), C);
    }
  } catch (e) {
    if (!n.isActive()) return { status: `closed` };
    if (x != null) return { status: `unknown` };
    let r = e instanceof t && e.status >= 400 && e.status < 500 && e.status !== 408;
    return _ && !y && (n.isPendingUpdateError(e) || !r)
      ? { status: `unknown` }
      : (await S().catch(() => void 0),
        {
          status: `request_failed`,
          error: e instanceof Error ? e : Error(`Unable to confirm subscription update`, { cause: e }),
        });
  } finally {
    _ || (await S().catch(() => void 0));
  }
}
function j() {
  return (j = e(() => {
    (k(), n(), m(), f(), p(), _(), a(), i());
  }))();
}
export { j as n, k as r, A as t };
//# sourceMappingURL=confirm-subscription-upgrade-cf8012c4bfe6.js.map
