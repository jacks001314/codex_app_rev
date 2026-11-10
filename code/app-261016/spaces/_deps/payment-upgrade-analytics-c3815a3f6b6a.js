import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Gat as t, Kat as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  IWn as r,
  Jft as i,
  KVn as a,
  Xzr as o,
  Yft as s,
  hRr as c,
  mRr as l,
  tLr as u,
  vRr as d,
  xMr as f,
  yMr as p,
  yRr as m,
} from "./app-initial-ad16eaadf81f.js";
import { t as h } from "./marketing-pixels-871dfebeb13e.js";
var g, _;
function v() {
  return (v = e(() => {
    ((g = (function (e) {
      return (
        (e.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_UNSPECIFIED = `CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_UNSPECIFIED`),
        (e.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRICING_PLAN_MANAGEMENT = `CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRICING_PLAN_MANAGEMENT`),
        (e.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_CHECKOUT = `CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_CHECKOUT`),
        (e.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_PLAN_MANAGEMENT = `CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_PLAN_MANAGEMENT`),
        (e.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_TEAM_CHECKOUT = `CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_TEAM_CHECKOUT`),
        (e.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PROMOTION_REDIRECT = `CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PROMOTION_REDIRECT`),
        (e.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_VETERANS_CHECKOUT = `CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_VETERANS_CHECKOUT`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (_ = { $type: `protobuf_analytics_events.v1.ChatgptPaymentUpgradeClicked` }));
  }))();
}
function y(e, t, n, r) {
  let a = n === o.PRO || n === o.PROLITE || n === o.PROMAX;
  try {
    f(e, _, {
      ...i(document.referrer, t.accountId, t.computeResidency),
      metricValue: n,
      pricingPlanType: a ? o.PRO : n,
      entryPoint: a
        ? g.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_PLAN_MANAGEMENT
        : g.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRICING_PLAN_MANAGEMENT,
      location: r,
    });
  } catch {}
}
function b(e, n, r, s, c) {
  t(r ?? ``);
  try {
    let t = l(),
      u = m(c ?? null) ? c : `unknown`;
    if (r === o.GO || r === o.PLUS) {
      f(e, a, {
        ...i(document.referrer, n.accountId, n.computeResidency),
        metricValue: r,
        location: s,
        source: t === `unknown` ? (u ?? void 0) : t,
      });
      return;
    }
    if (r !== o.PRO && r !== o.PROLITE && r !== o.SELF_SERVE_BUSINESS) return;
    let d = r === o.SELF_SERVE_BUSINESS;
    f(e, _, {
      ...i(document.referrer, n.accountId, n.computeResidency),
      metricValue: r,
      pricingPlanType: d ? r : o.PRO,
      entryPoint: d
        ? g.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_TEAM_CHECKOUT
        : g.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_CHECKOUT,
      location: s,
    });
  } catch {}
}
function x() {
  return (x = e(() => {
    (n(), d(), r(), v(), h(), s(), p(), c(), u());
  }))();
}
export { b as n, y as r, x as t };
//# sourceMappingURL=payment-upgrade-analytics-c3815a3f6b6a.js.map
