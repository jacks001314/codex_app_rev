import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { t } from "./compiler-runtime-292acb85cdd3.js";
import {
  DE as n,
  _on as r,
  bE as i,
  gon as a,
  kE as o,
  yE as s,
} from "./app-initial-bcc2ff475eb6.js";
import { t as c } from "./jsx-runtime-a96621a2647a.js";
import { n as l, t as u } from "./plugins-settings-c02739de4e70.js";
function d() {
  let e = (0, f.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, p.jsx)(n, {
          title: (0, p.jsx)(s, { slug: `mcp-settings` }),
          subtitle: (0, p.jsx)(r, {
            id: `settings.section.mcp-settings.subtitle`,
            defaultMessage: `Connect external tools and data sources`,
            description: `Subtitle for MCP settings section`,
          }),
          children: (0, p.jsx)(u, { manageOnly: !0 }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var f, p;
e(() => {
  ((f = t()), a(), o(), i(), l(), (p = c()));
})();
export { d as McpSettings };
//# sourceMappingURL=mcp-settings-da7749534a45.js.map
