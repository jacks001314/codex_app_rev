import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Trn as t,
  _rn as n,
  grn as r,
  krn as i,
  mrn as a,
  rrn as o,
  xrn as s,
} from "./app-initial-f094ef01c64d.js";
function c(e) {
  let t = u.safeParse(e);
  return t.success ? t.data[`codex/toolSurface`].webMcpCalls : [];
}
var l,
  u,
  d = e(() => {
    (o(),
      (l = n(`kind`, [
        t({
          kind: s(`listTools`),
          name: s(`webmcp_list_tools`),
          title: i().min(1).optional(),
          description: i().optional(),
          readOnlyHint: r().optional(),
          sourceHostname: i().min(1).optional(),
          outputJson: i().optional(),
          outputTruncated: s(!0).optional(),
        }),
        t({
          kind: s(`invokeTool`),
          name: i().refine((e) => e.trim().length > 0),
          title: i().min(1).optional(),
          description: i().optional(),
          readOnlyHint: r().optional(),
          sourceHostname: i().min(1).optional(),
          inputJson: i().optional(),
          inputTruncated: s(!0).optional(),
          outputJson: i().optional(),
          outputTruncated: s(!0).optional(),
        }),
      ])),
      (u = t({ "codex/toolSurface": t({ kind: s(`browserUse`), webMcpCalls: a(l) }) })));
  });
export { d as n, c as t };
//# sourceMappingURL=webmcp-tool-calls-f4b709411704.js.map
