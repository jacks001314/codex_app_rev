import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  BS as t,
  Cpn as n,
  JS as r,
  Spn as i,
  VS as a,
  XS as o,
  hmn as s,
  kmn as c,
} from "./app-initial-f094ef01c64d.js";
import { n as l, t as u } from "./plugins-settings-711c233db56c.js";
function d() {
  let e = (0, f.c)(1),
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, p.jsx)(r, {
          title: (0, p.jsx)(t, { slug: `mcp-settings` }),
          subtitle: (0, p.jsx)(n, {
            id: `settings.section.mcp-settings.subtitle`,
            defaultMessage: `Connect external tools and data sources`,
            description: `Subtitle for MCP settings section`,
          }),
          children: (0, p.jsx)(u, { manageOnly: !0 }),
        })),
        (e[0] = i))
      : (i = e[0]),
    i
  );
}
var f, p;
e(() => {
  ((f = c()), i(), o(), a(), l(), (p = s()));
})();
export { d as McpSettings };
//# sourceMappingURL=mcp-settings-6f1dc95531bf.js.map
