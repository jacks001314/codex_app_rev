import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  QDr as t,
  XDr as n,
  cC as r,
  dIn as i,
  lC as a,
  pC as o,
  uC as s,
  uIn as c,
} from "./app-initial-5851df3f6cb1.js";
function l(e, n, i, a = `sharing_sheet`, o) {
  (t(e, r, { type: d[n], taskId: i, source: f[a], ...o }),
    e
      .get(c)
      .count(`default`, `automations.sharing.event`, {
        type: n,
        source: a === `scheduled_page` ? `tasks_page_task_row` : a,
        ...(o?.success == null ? {} : { success: String(o.success) }),
      }));
}
function u(e, n, i, a) {
  (t(e, r, {
    type: p[n],
    source: s.CHATGPT_TASKS_INTERACTION_SOURCE_SHARED_TASK_SHEET,
    sharePostId: i,
    ...a,
  }),
    e
      .get(c)
      .count(`default`, `automations.sharing.event`, {
        type: n,
        source: `shared_task_sheet`,
        ...(a?.success == null ? {} : { success: String(a.success) }),
      }));
}
var d, f, p;
function m() {
  return (m = e(() => {
    (o(),
      i(),
      n(),
      (d = {
        task_share_button_clicked: a.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_BUTTON_CLICKED,
        task_share_sheet_viewed: a.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_SHEET_VIEWED,
        task_share_link_button_clicked: a.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_BUTTON_CLICKED,
        task_share_link_created: a.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_CREATED,
        task_share_link_refreshed: a.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_REFRESHED,
        task_share_link_delete_button_clicked:
          a.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETE_BUTTON_CLICKED,
        task_share_link_deleted: a.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETED,
      }),
      (f = {
        site_scheduled_tab: s.CHATGPT_TASKS_INTERACTION_SOURCE_UNSPECIFIED,
        scheduled_page: s.CHATGPT_TASKS_INTERACTION_SOURCE_TASKS_PAGE_TASK_ROW,
        editor: s.CHATGPT_TASKS_INTERACTION_SOURCE_EDITOR,
        sharing_sheet: s.CHATGPT_TASKS_INTERACTION_SOURCE_SHARING_SHEET,
      }),
      (p = {
        shared_task_sheet_viewed: a.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SHEET_VIEWED,
        shared_task_save_button_clicked: a.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_BUTTON_CLICKED,
        shared_task_save_submitted: a.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_SUBMITTED,
        shared_task_report_button_clicked: a.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_REPORT_BUTTON_CLICKED,
      }));
  }))();
}
export { l as n, u as r, m as t };
//# sourceMappingURL=share-analytics-a4bd985bdaa7.js.map
