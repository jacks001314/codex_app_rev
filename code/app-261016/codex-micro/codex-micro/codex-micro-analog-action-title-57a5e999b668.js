import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $M as t, nN as n } from "./app-shared-2feb3d4c6fcc.js";
import { i as r, n as i } from "./codex-micro-commands-a9ca1690e672.js";
import { n as a, r as o } from "./command-messages-4a21e8f833a2.js";
function s(e, n, r) {
  switch (e.type) {
    case `command`: {
      let t = i(e.commandId);
      return t == null ? e.commandId : a(t, r);
    }
    case `skill`: {
      let r = n.find((t) => t.name === e.skillName && t.path === e.skillPath);
      return `$${r == null ? e.skillName : t(r)}`;
    }
  }
}
function c() {
  return (c = e(() => {
    (r(), o(), n());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=codex-micro-analog-action-title-57a5e999b668.js.map
