import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Kot as t } from "./app-shared-bbfeca5e5737.js";
import { iPr as n, sPr as r } from "./app-initial-5851df3f6cb1.js";
import { t as i } from "./payment-methods-36911f01af71.js";
function a(e) {
  return t({
    queryKey: [`consumer-billing`, e, `billing-info`],
    queryFn: ({ signal: t }) =>
      n.safeGet(`/payments/billing_info`, { parameters: { query: { account_id: e } }, signal: t }),
    staleTime: 0,
    retry: !1,
  });
}
async function o(e, t) {
  await Promise.all([
    e.queryClient.invalidateQueries({ queryKey: [`consumer-billing`, t] }),
    e.queryClient.invalidateQueries({ queryKey: [`accounts`] }),
    e.queryClient.invalidateQueries({ queryKey: [`usage-settings`] }),
  ]);
}
function s() {
  return (s = e(() => {
    (r(), i());
  }))();
}
export { s as n, o as r, a as t };
//# sourceMappingURL=queries-a0c4a0375be0.js.map
