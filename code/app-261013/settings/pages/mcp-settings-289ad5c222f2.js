import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { _F as a, eF as o, hF as s, tF as c } from "./app-initial-5851df3f6cb1.js";
import { n as l, t as u } from "./plugins-settings-7cb8fa6a6c92.js";
function d() {
  let e = (0, f.c)(1),
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, p.jsx)(s, {
          title: (0, p.jsx)(o, { slug: `mcp-settings` }),
          subtitle: (0, p.jsx)(t, {
            id: `settings.section.mcp-settings.subtitle`,
            defaultMessage: `Connect external tools and data sources`,
            description: `Subtitle for MCP settings section`,
          }),
          children: (0, p.jsx)(u, { manageOnly: !0 }),
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = r()), n(), a(), c(), l(), (p = i()));
  }))();
}
m();
export { d as McpSettings };
//# sourceMappingURL=mcp-settings-289ad5c222f2.js.map
