import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, VRt as n, kRt as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  OSn as i,
  SBr as a,
  VPn as o,
  gFn as s,
  iRr as c,
  kSn as l,
  sRr as u,
  wLr as d,
  xBr as f,
  zRr as p,
} from "./app-initial-ad16eaadf81f.js";
function m({ automation: e }) {
  let t = g.safeParse(e).data;
  return (t?.source_conversation_id ?? t?.initial_conversation_id ?? e.conversation_id) || null;
}
async function h(e, t) {
  let n = m(t);
  if (n == null) return;
  let r = e.get(p);
  if (r != null) {
    if (e.get(l, n) === !0) {
      if (
        (await c.safePost(`/wham/tasks/{task_id}/mark_read`, { parameters: { path: { task_id: n } } }),
        e.get(p) !== r)
      )
        return;
      await Promise.all([
        a(e.queryClient, [`tasks`]),
        a(e.queryClient, [`task`, n]),
        a(e.queryClient, [`sidebar-custom-section-cloud-tasks`]),
      ]);
    }
    e.get(p) === r && s(e, n, !1);
  }
}
var g;
function _() {
  return (_ = e(() => {
    (t(),
      d(),
      o(),
      f(),
      i(),
      u(),
      (g = r({ source_conversation_id: n().nullish(), initial_conversation_id: n().nullish() })));
  }))();
}
export { _ as n, h as r, m as t };
//# sourceMappingURL=task-unread-edc42e4e5066.js.map
