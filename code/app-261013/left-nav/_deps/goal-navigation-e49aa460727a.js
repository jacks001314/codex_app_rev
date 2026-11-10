import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cat as t, xat as n } from "./app-shared-bbfeca5e5737.js";
import { n as r, t as i } from "./task-unread-7620ebd43694.js";
function a(e, t) {
  let r = i(e);
  return e.automation.plan_type == null || e.teamId != null || !r
    ? null
    : {
        to: n(r),
        state: {
          sidebarArea: `scheduled`,
          sidebarAutomationId: e.automation.id,
          sidebarAutomationSource: `cloud`,
          sidebarAutomationAccountId: t,
          openGoalPlan: !0,
          navigationSource: `scheduled_page`,
        },
      };
}
function o() {
  return (o = e(() => {
    (t(), r());
  }))();
}
export { o as n, a as t };
//# sourceMappingURL=goal-navigation-e49aa460727a.js.map
