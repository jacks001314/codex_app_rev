import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Uot as t, Vot as n } from "./app-shared-2feb3d4c6fcc.js";
import { n as r, t as i } from "./task-unread-edc42e4e5066.js";
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
//# sourceMappingURL=goal-navigation-aa5a402ecd92.js.map
