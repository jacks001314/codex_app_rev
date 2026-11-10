import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HC as t,
  LC as n,
  RC as r,
  Rzn as i,
  xMr as a,
  yMr as o,
  zC as s,
  zzn as c,
} from "./app-initial-ad16eaadf81f.js";
function l(e, t, r, o = `sharing_sheet`, s) {
  (a(e, n, { type: d[t], taskId: r, source: f[o], ...s }),
    e
      .get(i)
      .count(`default`, `automations.sharing.event`, {
        type: t,
        source: o === `scheduled_page` ? `tasks_page_task_row` : o,
        ...(s?.success == null ? {} : { success: String(s.success) }),
      }));
}
function u(e, t, r, o) {
  (a(e, n, {
    type: p[t],
    source: s.CHATGPT_TASKS_INTERACTION_SOURCE_SHARED_TASK_SHEET,
    sharePostId: r,
    ...o,
  }),
    e
      .get(i)
      .count(`default`, `automations.sharing.event`, {
        type: t,
        source: `shared_task_sheet`,
        ...(o?.success == null ? {} : { success: String(o.success) }),
      }));
}
var d, f, p;
function m() {
  return (m = e(() => {
    (t(),
      c(),
      o(),
      (d = {
        task_share_button_clicked: r.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_BUTTON_CLICKED,
        task_share_sheet_viewed: r.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_SHEET_VIEWED,
        task_share_link_button_clicked: r.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_BUTTON_CLICKED,
        task_share_link_created: r.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_CREATED,
        task_share_link_refreshed: r.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_REFRESHED,
        task_share_link_delete_button_clicked:
          r.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETE_BUTTON_CLICKED,
        task_share_link_deleted: r.CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETED,
      }),
      (f = {
        site_scheduled_tab: s.CHATGPT_TASKS_INTERACTION_SOURCE_UNSPECIFIED,
        scheduled_page: s.CHATGPT_TASKS_INTERACTION_SOURCE_TASKS_PAGE_TASK_ROW,
        editor: s.CHATGPT_TASKS_INTERACTION_SOURCE_EDITOR,
        sharing_sheet: s.CHATGPT_TASKS_INTERACTION_SOURCE_SHARING_SHEET,
      }),
      (p = {
        shared_task_sheet_viewed: r.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SHEET_VIEWED,
        shared_task_save_button_clicked: r.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_BUTTON_CLICKED,
        shared_task_save_submitted: r.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_SUBMITTED,
        shared_task_report_button_clicked: r.CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_REPORT_BUTTON_CLICKED,
      }));
  }))();
}
export { l as n, u as r, m as t };
//# sourceMappingURL=share-analytics-ccfc9893f573.js.map
