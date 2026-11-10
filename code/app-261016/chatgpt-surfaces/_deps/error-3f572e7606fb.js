import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HFt as t,
  Pit as n,
  SLt as r,
  VRt as i,
  XOt as a,
  YOt as o,
  jit as s,
  kRt as c,
} from "./app-shared-2feb3d4c6fcc.js";
function l(e) {
  if (
    !(e instanceof s) ||
    e.status < 400 ||
    e.status >= 500 ||
    e.errorCode !== `confirmation_token_requires_new_token`
  )
    return m.save;
  try {
    let t = f.safeParse(JSON.parse(e.message));
    if (!t.success) return m.save;
    let { stripe_error_code: n, stripe_decline_code: r } = t.data.detail;
    if (n == null && r == null) return m.save;
    for (let e of [r, n]) {
      let t = p.safeParse(e);
      if (t.success) return m[t.data];
    }
    return [r, n].some(
      (e) =>
        e != null &&
        [
          `authentication_required`,
          `payment_intent_authentication_failure`,
          `setup_intent_authentication_failure`,
        ].includes(e),
    )
      ? m.authentication_failed
      : [
            `approve_with_id`,
            `do_not_honor`,
            `generic_decline`,
            `lost_card`,
            `pickup_card`,
            `restricted_card`,
            `revocation_of_all_authorizations`,
            `revocation_of_authorization`,
            `stolen_card`,
          ].includes(r ?? ``) || [`card_declined`, `payment_intent_payment_attempt_failed`].includes(n ?? ``)
        ? m.payment_method_declined
        : m.other;
  } catch {
    return m.save;
  }
}
function u(e) {
  return m[e];
}
var d, f, p, m;
function h() {
  return (h = e(() => {
    (a(),
      t(),
      n(),
      (d = class extends Error {
        code;
        constructor(e, t) {
          (super(e), (this.code = t));
        }
      }),
      (f = c({ detail: c({ stripe_error_code: i().nullish(), stripe_decline_code: i().nullish() }) })),
      (p = r([
        `insufficient_funds`,
        `expired_card`,
        `incorrect_number`,
        `incorrect_cvc`,
        `invalid_cvc`,
        `missing_payment_method`,
        `authentication_failed`,
        `payment_method_unavailable`,
        `payment_method_declined`,
        `other`,
      ])),
      (m = o({
        save: {
          id: `settings.consumerBilling.addCardError`,
          defaultMessage: `Unable to save payment method. Please try again.`,
          description: `Error after Stripe or the billing server cannot save a new payment method`,
        },
        insufficient_funds: {
          id: `settings.consumerBilling.paymentFailure.insufficient_funds`,
          defaultMessage: `This payment method has insufficient funds. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        expired_card: {
          id: `settings.consumerBilling.paymentFailure.expired_card`,
          defaultMessage: `This payment method has expired. Update your payment method to continue.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        incorrect_number: {
          id: `settings.consumerBilling.paymentFailure.incorrect_number`,
          defaultMessage: `Check your card number and try again`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        incorrect_cvc: {
          id: `settings.consumerBilling.paymentFailure.incorrect_cvc`,
          defaultMessage: `Check your card's security code and try again`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        invalid_cvc: {
          id: `settings.consumerBilling.paymentFailure.invalid_cvc`,
          defaultMessage: `Check your card's security code and try again`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        missing_payment_method: {
          id: `settings.consumerBilling.paymentFailure.missing_payment_method`,
          defaultMessage: `Add a payment method to continue`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        authentication_failed: {
          id: `settings.consumerBilling.paymentFailure.authentication_failed`,
          defaultMessage: `This payment method couldn't be authorized. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        payment_method_unavailable: {
          id: `settings.consumerBilling.paymentFailure.payment_method_unavailable`,
          defaultMessage: `This payment method can't be used for this payment. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        payment_method_declined: {
          id: `settings.consumerBilling.paymentFailure.payment_method_declined`,
          defaultMessage: `This payment method was declined. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        other: {
          id: `settings.consumerBilling.paymentFailure.other`,
          defaultMessage: `We couldn't process this payment. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
      })));
  }))();
}
export { h as i, u as n, l as r, d as t };
//# sourceMappingURL=error-3f572e7606fb.js.map
