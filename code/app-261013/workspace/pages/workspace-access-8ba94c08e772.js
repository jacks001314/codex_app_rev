import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, oSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { GMr as a, LMr as o, tNr as s, zMr as c } from "./app-initial-5851df3f6cb1.js";
var l;
function u() {
  return (u = e(() => {
    (n(),
      c(),
      s(),
      i(),
      (l = r(t, ({ get: e }) => {
        let t = e(a);
        if (t == null) return `loading`;
        let { data: n, status: r } = e(o, t);
        if (r === `pending`) return `loading`;
        let i = n?.accounts[t]?.account;
        return r === `error` || i?.structure == null
          ? `error`
          : i.structure === `personal` || i.tbo_config?.tbo_available
            ? `continue`
            : i.plan_type === `team` && i.tbo_config?.plan_eligible === !1
              ? i.account_user_role === `account-owner`
                ? `business-owner`
                : `business-member`
              : `unavailable`;
      })));
  }))();
}
export { l as n, u as t };
//# sourceMappingURL=workspace-access-8ba94c08e772.js.map
