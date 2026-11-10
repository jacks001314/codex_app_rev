import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { xMt as t } from "./app-shared-bbfeca5e5737.js";
import { MF as n, NF as r } from "./app-initial-5851df3f6cb1.js";
function i(e) {
  let t = e.findIndex((e) => e.id === `move-to-project`),
    n = e.findIndex((e) => e.type === `separator`),
    r = t === -1 ? n : t + 1;
  return e.toSpliced(r === -1 ? e.length : r, 0, { id: `open-app` });
}
function a(e, t) {
  return e.id === `open-app` ? (0, o.jsx)(n, { onSelect: t }) : void 0;
}
var o;
function s() {
  return (s = e(() => {
    (r(), (o = t()));
  }))();
}
export { s as n, a as r, i as t };
//# sourceMappingURL=thread-panel-plugins-menu-item-dadd3e71802e.js.map
