import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, TLt as n, pLt as r } from "./app-shared-bbfeca5e5737.js";
import {
  BPr as i,
  Cyn as a,
  GMr as o,
  Kjn as s,
  VPr as c,
  iPr as l,
  sPr as u,
  tNr as d,
  wyn as f,
  yjn as p,
} from "./app-initial-5851df3f6cb1.js";
function m({ automation: e }) {
  let t = g.safeParse(e).data;
  return (t?.source_conversation_id ?? t?.initial_conversation_id ?? e.conversation_id) || null;
}
async function h(e, t) {
  let n = m(t);
  if (n == null) return;
  let r = e.get(o);
  if (r != null) {
    if (e.get(f, n) === !0) {
      if (
        (await l.safePost(`/wham/tasks/{task_id}/mark_read`, { parameters: { path: { task_id: n } } }),
        e.get(o) !== r)
      )
        return;
      await Promise.all([
        c(e.queryClient, [`tasks`]),
        c(e.queryClient, [`task`, n]),
        c(e.queryClient, [`sidebar-custom-section-cloud-tasks`]),
      ]);
    }
    e.get(o) === r && s(e, n, !1);
  }
}
var g;
function _() {
  return (_ = e(() => {
    (t(),
      d(),
      p(),
      i(),
      a(),
      u(),
      (g = r({ source_conversation_id: n().nullish(), initial_conversation_id: n().nullish() })));
  }))();
}
export { _ as n, h as r, m as t };
//# sourceMappingURL=task-unread-7620ebd43694.js.map
