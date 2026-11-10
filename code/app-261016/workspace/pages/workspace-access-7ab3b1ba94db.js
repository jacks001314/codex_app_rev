import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, CCt as n, Qst as r, ZSt as i } from "./app-shared-2feb3d4c6fcc.js";
import { dLr as a, lLr as o, wLr as s, zRr as c } from "./app-initial-ad16eaadf81f.js";
var l;
function u() {
  return (u = e(() => {
    (i(),
      a(),
      s(),
      t(),
      (l = n(r, ({ get: e }) => {
        let t = e(c);
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
//# sourceMappingURL=workspace-access-7ab3b1ba94db.js.map
