import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { pM as t, uM as n } from "./app-shared-bbfeca5e5737.js";
import { i as r, n as i } from "./codex-micro-commands-fdc168b3622a.js";
import { n as a, r as o } from "./command-messages-54cbbed1e112.js";
function s(e, t, r) {
  switch (e.type) {
    case `command`: {
      let t = i(e.commandId);
      return t == null ? e.commandId : a(t, r);
    }
    case `skill`: {
      let r = t.find((t) => t.name === e.skillName && t.path === e.skillPath);
      return `$${r == null ? e.skillName : n(r)}`;
    }
  }
}
function c() {
  return (c = e(() => {
    (r(), o(), t());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=codex-micro-analog-action-title-56f79effef85.js.map
