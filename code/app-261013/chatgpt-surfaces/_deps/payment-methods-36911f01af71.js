import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Kot as t, USt as n, zSt as r } from "./app-shared-bbfeca5e5737.js";
import { iPr as i, sPr as a } from "./app-initial-5851df3f6cb1.js";
function o(e) {
  return t({
    queryKey: [`consumer-billing`, e, `payment-methods`],
    queryFn:
      e == null
        ? n
        : ({ signal: t }) =>
            i.safeGet(`/payments/payment_methods`, { parameters: { query: { account_id: e } }, signal: t }),
    staleTime: 0,
    retry: !1,
  });
}
function s() {
  return (s = e(() => {
    (r(), a());
  }))();
}
export { o as n, s as t };
//# sourceMappingURL=payment-methods-36911f01af71.js.map
