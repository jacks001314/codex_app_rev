import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ost as t } from "./app-shared-2feb3d4c6fcc.js";
import { iRr as n, sRr as r } from "./app-initial-ad16eaadf81f.js";
import { t as i } from "./payment-methods-d350525d78a1.js";
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
//# sourceMappingURL=queries-95931bb8c995.js.map
