import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  VDt as r,
  jDt as i,
  vzt as a,
  xMt as o,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import { CCn as c, TCn as l } from "./app-initial-5851df3f6cb1.js";
import { n as u, t as d } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { r as f, t as p } from "./state-737f67c028aa.js";
import { n as m, t as h } from "./row-ce65df29f18d.js";
function g(e) {
  let n = (0, v.c)(11),
    { parent: i, onClose: a } = e,
    o = r(),
    l = s(f, i),
    u;
  n[0] === o
    ? (u = n[1])
    : ((u = o.formatMessage({
        id: `restricted.aeon.topOfMind.closeTasks`,
        defaultMessage: `Close tasks`,
        description: `Accessible label for closing the side panel listing a dot's tasks`,
      })),
      (n[0] = o),
      (n[1] = u));
  let p;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, y.jsx)(t, {
        id: `restricted.aeon.topOfMind.tasksTitle`,
        defaultMessage: `Tasks`,
        description: `Title of the side panel listing all tasks created by a dot`,
      })),
      (n[2] = p))
    : (p = n[2]);
  let m;
  n[3] === l?.all ? (m = n[4]) : ((m = l?.all.map(_)), (n[3] = l?.all), (n[4] = m));
  let h;
  n[5] === m
    ? (h = n[6])
    : ((h = (0, y.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto p-panel`,
        children: (0, y.jsx)(d.ItemGroup, { className: `select-none`, children: m }),
      })),
      (n[5] = m),
      (n[6] = h));
  let g;
  return (
    n[7] !== a || n[8] !== u || n[9] !== h
      ? ((g = (0, y.jsx)(c, { closeLabel: u, leading: p, onClose: a, children: h })),
        (n[7] = a),
        (n[8] = u),
        (n[9] = h),
        (n[10] = g))
      : (g = n[10]),
    g
  );
}
function _(e) {
  return (0, y.jsx)(h, { ...e }, `${e.hostId}:${e.threadId}`);
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = a()), n(), i(), l(), u(), m(), p(), (y = o()));
  }))();
}
b();
export { g as TopOfMindTasksPanel };
//# sourceMappingURL=panel-aad4bb754884.js.map
