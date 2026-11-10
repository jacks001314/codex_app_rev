import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { C_ as t, dNt as n, pNt as r, w_ as i } from "./app-initial-f094ef01c64d.js";
import { i as a, n as o } from "./codex-micro-commands-86f6cdcdb48d.js";
function s(e, r, i) {
  switch (e.type) {
    case `command`: {
      let n = o(e.commandId);
      return n == null ? e.commandId : t(n, i);
    }
    case `skill`: {
      let t = r.find((t) => t.name === e.skillName && t.path === e.skillPath);
      return `$${t == null ? e.skillName : n(t)}`;
    }
  }
}
var c = e(() => {
  (a(), i(), r());
});
export { c as n, s as t };
//# sourceMappingURL=codex-micro-analog-action-title-dd9a4b370f08.js.map
