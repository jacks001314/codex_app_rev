import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, tkt as i } from "./app-shared-2feb3d4c6fcc.js";
import { LF as a, QF as o, RF as s, eI as c } from "./app-initial-ad16eaadf81f.js";
import { n as l, t as u } from "./plugins-settings-65fe8d0ee127.js";
function d() {
  let e = (0, f.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, p.jsx)(o, {
          title: (0, p.jsx)(a, { slug: `mcp-settings` }),
          subtitle: (0, p.jsx)(i, {
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
function m() {
  return (m = e(() => {
    ((f = n()), r(), c(), s(), l(), (p = t()));
  }))();
}
m();
export { d as McpSettings };
//# sourceMappingURL=mcp-settings-4e4b15b1e038.js.map
