import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  PBt as n,
  XOt as r,
  ZSt as i,
  nCt as a,
  okt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { HEn as c, WEn as l } from "./app-initial-ad16eaadf81f.js";
import { n as u, t as d } from "./thread-summary-panel-components-10c7926d4688.js";
import { r as f, t as p } from "./state-62d1b2b1cb7d.js";
import { n as m, t as h } from "./row-d3a8d6ca54f2.js";
function g(e) {
  let t = (0, v.c)(11),
    { parent: n, onClose: r } = e,
    i = o(),
    l = a(f, n),
    u;
  t[0] === i
    ? (u = t[1])
    : ((u = i.formatMessage({
        id: `restricted.aeon.topOfMind.closeTasks`,
        defaultMessage: `Close tasks`,
        description: `Accessible label for closing the side panel listing a dot's tasks`,
      })),
      (t[0] = i),
      (t[1] = u));
  let p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, y.jsx)(s, {
        id: `restricted.aeon.topOfMind.tasksTitle`,
        defaultMessage: `Tasks`,
        description: `Title of the side panel listing all tasks created by a dot`,
      })),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] === l?.all ? (m = t[4]) : ((m = l?.all.map(_)), (t[3] = l?.all), (t[4] = m));
  let h;
  t[5] === m
    ? (h = t[6])
    : ((h = (0, y.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto p-panel`,
        children: (0, y.jsx)(d.ItemGroup, { className: `select-none`, children: m }),
      })),
      (t[5] = m),
      (t[6] = h));
  let g;
  return (
    t[7] !== r || t[8] !== u || t[9] !== h
      ? ((g = (0, y.jsx)(c, { closeLabel: u, leading: p, onClose: r, children: h })),
        (t[7] = r),
        (t[8] = u),
        (t[9] = h),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
function _(e) {
  return (0, y.jsx)(h, { ...e }, `${e.hostId}:${e.threadId}`);
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = n()), i(), r(), l(), u(), m(), p(), (y = t()));
  }))();
}
b();
export { g as TopOfMindTasksPanel };
//# sourceMappingURL=panel-a387483f0b00.js.map
