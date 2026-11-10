import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Ost as n, Qst as r, ZSt as i, mCt as a } from "./app-shared-2feb3d4c6fcc.js";
import { dLr as o, iRr as s, lLr as c, tyr as l } from "./app-initial-ad16eaadf81f.js";
function u(e, t) {
  return n({
    ...e.query.getOptions(c, t),
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
    (i(), o(), l(), t(), (f = a(r, (e, { scope: t }) => u(t, e))), (p = a(r, d)));
  }))();
}
export { m as i, u as n, p as r, f as t };
//# sourceMappingURL=queries-ea9f18d3fc31.js.map
