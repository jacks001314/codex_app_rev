import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Kot as n, Pxt as r, Zxt as i, wot as a } from "./app-shared-bbfeca5e5737.js";
import { LMr as o, Ymr as s, ehr as c, zMr as l } from "./app-initial-5851df3f6cb1.js";
function u(e, t) {
  return n({
    ...e.query.getOptions(o, t),
    staleTime: 0,
    refetchOnMount: `always`,
    refetchOnWindowFocus: `always`,
    retry: !1,
    retryOnMount: !1,
    select: (e) => e.accounts[t],
  });
}
function d(e) {
  let t = [`consumer-billing`, e, `wallet`];
  return n({
    queryKey: t,
    queryFn: async ({ signal: n, client: r }) => {
      let i = await s.safeGet(`/accounts/{account_id}/customer-balance`, {
        parameters: { path: { account_id: e }, query: { include_redemption_status: !0 } },
        signal: n,
      });
      return r.getQueryData(t)?.has_redeemed_gift_card === !0 && i.has_redeemed_gift_card == null
        ? { ...i, has_redeemed_gift_card: !0 }
        : i;
    },
    staleTime: 0,
    gcTime: 0,
    retry: !1,
    retryOnMount: !1,
    refetchOnMount: `always`,
    refetchOnReconnect: `always`,
    refetchOnWindowFocus: `always`,
  });
}
var f, p;
function m() {
  return (m = e(() => {
    (r(), l(), c(), a(), (f = i(t, (e, { scope: t }) => u(t, e))), (p = i(t, d)));
  }))();
}
export { m as i, u as n, p as r, f as t };
//# sourceMappingURL=queries-9a7ecb201f4e.js.map
