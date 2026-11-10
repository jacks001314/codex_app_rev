import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ost as t, cwt as n, iwt as r } from "./app-shared-2feb3d4c6fcc.js";
import { iRr as i, sRr as a } from "./app-initial-ad16eaadf81f.js";
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
//# sourceMappingURL=payment-methods-d350525d78a1.js.map
