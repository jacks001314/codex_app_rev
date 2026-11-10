import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  EPt as r,
  IDt as i,
  TLt as a,
  fO as o,
  hrt as s,
  jDt as c,
  oIt as l,
  pLt as u,
  t3 as d,
  uO as f,
  vrt as p,
  vzt as m,
  xMt as h,
} from "./app-shared-bbfeca5e5737.js";
import { mF as g, pF as _ } from "./app-initial-5851df3f6cb1.js";
function v(e) {
  let n = (0, y.c)(15),
    { kind: r, loading: a, error: o, onRetry: c } = e;
  if (a) {
    let e;
    return (
      n[0] === r
        ? (e = n[1])
        : ((e = (0, b.jsx)(_, {
            children: (0, b.jsx)(i, {
              id: `settings.consumerBilling.secureFormLoading`,
              defaultMessage: `{kind, select, billing {Loading secure billing form…} other {Loading secure payment form…}}`,
              description: `Loading status in a secure Stripe editor. kind selects billing information or saved payment methods.`,
              values: { kind: r },
            }),
          })),
          (n[0] = r),
          (n[1] = e)),
      e
    );
  }
  let l;
  if (o instanceof s && o.status === 429) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, b.jsx)(i, {
          id: `settings.consumerBilling.paymentFormRateLimit`,
          defaultMessage: `Too many payment method attempts. Please try again later.`,
          description: `Warning when initializing another payment form is rate limited`,
        })),
        (n[2] = e))
      : (e = n[2]),
      (l = e));
  } else if (o?.name === `TimeoutError`) {
    let e;
    (n[3] === r
      ? (e = n[4])
      : ((e = (0, b.jsx)(i, {
          id: `settings.consumerBilling.secureFormTimeout`,
          defaultMessage: `{kind, select, billing {The billing form took too long to load. Please try again.} other {The payment form took too long to load. Please try again.}}`,
          description: `Shown when secure form initialization times out; the nearby Retry button starts a new attempt`,
          values: { kind: r },
        })),
        (n[3] = r),
        (n[4] = e)),
      (l = e));
  } else {
    let e;
    (n[5] === r
      ? (e = n[6])
      : ((e = (0, b.jsx)(i, {
          id: `settings.consumerBilling.secureFormLoadError`,
          defaultMessage: `{kind, select, billing {Unable to load billing form. Please try again.} other {Unable to load payment form. Please try again.}}`,
          description: `Error when the secure Stripe editor cannot initialize. kind selects billing information or saved payment methods.`,
          values: { kind: r },
        })),
        (n[5] = r),
        (n[6] = e)),
      (l = e));
  }
  let u;
  n[7] === l
    ? (u = n[8])
    : ((u = (0, b.jsx)(`p`, { role: `alert`, className: `text-sm text-warning`, children: l })),
      (n[7] = l),
      (n[8] = u));
  let d;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, b.jsx)(i, {
        id: `settings.consumerBilling.retryPaymentForm`,
        defaultMessage: `Retry`,
        description: `Retry initializing the secure billing or payment-method form`,
      })),
      (n[9] = d))
    : (d = n[9]);
  let p;
  n[10] === c
    ? (p = n[11])
    : ((p = (0, b.jsx)(`div`, {
        className: `flex`,
        children: (0, b.jsx)(t, { color: `secondary`, onClick: c, children: d }),
      })),
      (n[10] = c),
      (n[11] = p));
  let m;
  return (
    n[12] !== u || n[13] !== p
      ? ((m = (0, b.jsxs)(f, { children: [u, p] })), (n[12] = u), (n[13] = p), (n[14] = m))
      : (m = n[14]),
    m
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = m()), c(), d(), o(), g(), p(), (b = h()));
  }))();
}
function S(e) {
  if (
    !(e instanceof s) ||
    e.status < 400 ||
    e.status >= 500 ||
    e.errorCode !== `confirmation_token_requires_new_token`
  )
    return O.save;
  try {
    let t = E.safeParse(JSON.parse(e.message));
    if (!t.success) return O.save;
    let { stripe_error_code: n, stripe_decline_code: r } = t.data.detail;
    if (n == null && r == null) return O.save;
    for (let e of [r, n]) {
      let t = D.safeParse(e);
      if (t.success) return O[t.data];
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
      ? O.authentication_failed
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
        ? O.payment_method_declined
        : O.other;
  } catch {
    return O.save;
  }
}
function C(e) {
  return O[e];
}
var w, T, E, D, O;
function k() {
  return (k = e(() => {
    (c(),
      r(),
      p(),
      (w = class extends Error {
        code;
        constructor(e, t) {
          (super(e), (this.code = t));
        }
      }),
      (T = class extends w {}),
      (E = u({ detail: u({ stripe_error_code: a().nullish(), stripe_decline_code: a().nullish() }) })),
      (D = l([
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
      (O = n({
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
export { k as a, S as i, w as n, v as o, C as r, x as s, T as t };
//# sourceMappingURL=error-4216d2e638a8.js.map
