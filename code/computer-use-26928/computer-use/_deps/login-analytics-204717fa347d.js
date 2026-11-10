import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { SRt as t, _Rt as n, yRt as r } from "./app-shared-7552fc8d5d82.js";
import {
  $E as i,
  Fxt as a,
  Ixt as o,
  QE as s,
  eD as c,
  tD as l,
  uD as u,
} from "./app-initial-3916b423772b.js";
function d(e) {
  let t = e.pathname.split(`/`).filter(Boolean);
  if (t.length !== 2 || t[0] !== `purchase`) return null;
  switch (t[1]) {
    case `go`:
    case `plus`:
    case `pro`:
    case `pro5x`:
      return t[1];
    default:
      return null;
  }
}
async function f(e) {
  await e
    .get(t)
    .flush(1e3)
    .catch(() => {});
}
async function p(e) {
  (r(e, s, {
    authSessionLoggingId: crypto.randomUUID(),
    actionType: i.ACCESS_FLOW_ENTRY_ACTION_TYPE_LOGIN,
    entryPoint: c.ACCESS_FLOW_ENTRY_POINT_CHAT_HEADER,
    entryTrigger: l.ACCESS_FLOW_ENTRY_TRIGGER_CTA,
  }),
    await f(e));
}
function m(e, t, n) {
  (r(e, s, {
    authSessionLoggingId: t,
    actionType: i.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
    entryPoint: c.ACCESS_FLOW_ENTRY_POINT_AUTH_LOGIN_PAGE,
    entryTrigger: l.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
    cta: n == null || n === `none` ? `auto-triggerred` : `selected-plan-intent:${n}`,
    selectedPlanType: n,
  }),
    a.count(`default`, `business.auth_entrypoint_opened`, {
      action: `page_loaded`,
      entry_point: `auth_login_page`,
      entry_trigger: `automatic`,
      surface: `core_web`,
    }));
}
function h() {
  return (h = e(() => {
    (u(), o(), n());
  }))();
}
export { m as a, p as i, d as n, h as r, f as t };
//# sourceMappingURL=login-analytics-204717fa347d.js.map
