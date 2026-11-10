import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  DIt as n,
  EPt as r,
  TLt as i,
  _It as a,
  pIt as o,
  pLt as s,
} from "./app-shared-bbfeca5e5737.js";
function c(e) {
  let t = u.safeParse(e);
  return t.success ? t.data[`codex/toolSurface`].webMcpCalls : [];
}
var l, u;
function d() {
  return (d = e(() => {
    (r(),
      (l = n(`kind`, [
        s({
          kind: t(`listTools`),
          name: t(`webmcp_list_tools`),
          title: i()
            .transform((e) => e || void 0)
            .optional(),
          description: i().optional(),
          readOnlyHint: a().optional(),
          sourceHostname: i().min(1).optional(),
          outputJson: i().optional(),
          outputTruncated: t(!0).optional(),
        }),
        s({
          kind: t(`invokeTool`),
          name: i().refine((e) => e.trim().length > 0),
          title: i()
            .transform((e) => e || void 0)
            .optional(),
          description: i().optional(),
          readOnlyHint: a().optional(),
          sourceHostname: i().min(1).optional(),
          inputJson: i().optional(),
          inputTruncated: t(!0).optional(),
          outputJson: i().optional(),
          outputTruncated: t(!0).optional(),
        }),
      ])),
      (u = s({ "codex/toolSurface": s({ kind: t(`browserUse`), webMcpCalls: o(l) }) })));
  }))();
}
export { d as n, c as t };
//# sourceMappingURL=webmcp-tool-calls-ca5a1d70fd15.js.map
