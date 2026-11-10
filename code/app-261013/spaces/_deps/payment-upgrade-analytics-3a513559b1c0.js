import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Fr as t,
  AMr as n,
  Bdt as r,
  JFr as i,
  QDr as a,
  QFr as o,
  XDr as s,
  YFr as c,
  hPr as l,
  kRn as u,
  yVn as d,
  zdt as f,
} from "./app-initial-5851df3f6cb1.js";
var p, m;
function h() {
  return (h = e(() => {
    ((p = (function (e) {
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
      (m = { $type: `protobuf_analytics_events.v1.ChatgptPaymentUpgradeClicked` }));
  }))();
}
function g(e, t, n, r) {
  let i = n === l.PRO || n === l.PROLITE || n === l.PROMAX;
  try {
    a(e, m, {
      ...f(document.referrer, t.accountId, t.computeResidency),
      metricValue: n,
      pricingPlanType: i ? l.PRO : n,
      entryPoint: i
        ? p.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_PLAN_MANAGEMENT
        : p.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRICING_PLAN_MANAGEMENT,
      location: r,
    });
  } catch {}
}
function _(e, n, r, o, s) {
  try {
    let c = i(),
      d = t(s ?? null) ? s : `unknown`;
    if (r === l.GO || r === l.PLUS) {
      a(e, u, {
        ...f(document.referrer, n.accountId, n.computeResidency),
        metricValue: r,
        location: o,
        source: c === `unknown` ? (d ?? void 0) : c,
      });
      return;
    }
    if (r !== l.PRO && r !== l.PROLITE && r !== l.SELF_SERVE_BUSINESS) return;
    let h = r === l.SELF_SERVE_BUSINESS;
    a(e, m, {
      ...f(document.referrer, n.accountId, n.computeResidency),
      metricValue: r,
      pricingPlanType: h ? r : l.PRO,
      entryPoint: h
        ? p.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_TEAM_CHECKOUT
        : p.CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_CHECKOUT,
      location: o,
    });
  } catch {}
}
function v() {
  return (v = e(() => {
    (o(), d(), h(), r(), s(), c(), n());
  }))();
}
export { _ as n, g as r, v as t };
//# sourceMappingURL=payment-upgrade-analytics-3a513559b1c0.js.map
