import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BO as t,
  HO as n,
  LNt as r,
  PBt as i,
  Pit as a,
  XOt as o,
  Y3 as s,
  Z3 as c,
  jit as l,
  tkt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { XF as d, ZF as f } from "./app-initial-ad16eaadf81f.js";
function p(e) {
  let n = (0, m.c)(15),
    { kind: r, loading: i, error: a, onRetry: o } = e;
  if (i) {
    let e;
    return (
      n[0] === r
        ? (e = n[1])
        : ((e = (0, h.jsx)(d, {
            children: (0, h.jsx)(u, {
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
  let c;
  if (a instanceof l && a.status === 429) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(u, {
          id: `settings.consumerBilling.paymentFormRateLimit`,
          defaultMessage: `Too many payment method attempts. Please try again later.`,
          description: `Warning when initializing another payment form is rate limited`,
        })),
        (n[2] = e))
      : (e = n[2]),
      (c = e));
  } else if (a?.name === `TimeoutError`) {
    let e;
    (n[3] === r
      ? (e = n[4])
      : ((e = (0, h.jsx)(u, {
          id: `settings.consumerBilling.secureFormTimeout`,
          defaultMessage: `{kind, select, billing {The billing form took too long to load. Please try again.} other {The payment form took too long to load. Please try again.}}`,
          description: `Shown when secure form initialization times out; the nearby Retry button starts a new attempt`,
          values: { kind: r },
        })),
        (n[3] = r),
        (n[4] = e)),
      (c = e));
  } else {
    let e;
    (n[5] === r
      ? (e = n[6])
      : ((e = (0, h.jsx)(u, {
          id: `settings.consumerBilling.secureFormLoadError`,
          defaultMessage: `{kind, select, billing {Unable to load billing form. Please try again.} other {Unable to load payment form. Please try again.}}`,
          description: `Error when the secure Stripe editor cannot initialize. kind selects billing information or saved payment methods.`,
          values: { kind: r },
        })),
        (n[5] = r),
        (n[6] = e)),
      (c = e));
  }
  let f;
  n[7] === c
    ? (f = n[8])
    : ((f = (0, h.jsx)(`p`, { role: `alert`, className: `text-sm text-warning`, children: c })),
      (n[7] = c),
      (n[8] = f));
  let p;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, h.jsx)(u, {
        id: `settings.consumerBilling.retryPaymentForm`,
        defaultMessage: `Retry`,
        description: `Retry initializing the secure billing or payment-method form`,
      })),
      (n[9] = p))
    : (p = n[9]);
  let g;
  n[10] === o
    ? (g = n[11])
    : ((g = (0, h.jsx)(`div`, {
        className: `flex`,
        children: (0, h.jsx)(s, { color: `secondary`, onClick: o, children: p }),
      })),
      (n[10] = o),
      (n[11] = g));
  let _;
  return (
    n[12] !== f || n[13] !== g
      ? ((_ = (0, h.jsxs)(t, { children: [f, g] })), (n[12] = f), (n[13] = g), (n[14] = _))
      : (_ = n[14]),
    _
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = i()), o(), c(), n(), f(), a(), (h = r()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=secure-form-status-1e957f282453.js.map
