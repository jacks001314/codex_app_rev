import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { C as t, D as n, M as r, _ as i, d as a, m as o, t as s } from "./zod-d9fcb1c39dba.js";
function c(e) {
  let t = u.safeParse(e);
  return t.success ? t.data[`codex/toolSurface`].webMcpCalls : [];
}
var l,
  u,
  d = e(() => {
    (s(),
      (l = i(`kind`, [
        n({
          kind: t(`listTools`),
          name: t(`webmcp_list_tools`),
          title: r().min(1).optional(),
          description: r().optional(),
          readOnlyHint: o().optional(),
          sourceHostname: r().min(1).optional(),
          outputJson: r().optional(),
          outputTruncated: t(!0).optional(),
        }),
        n({
          kind: t(`invokeTool`),
          name: r().refine((e) => e.trim().length > 0),
          title: r().min(1).optional(),
          description: r().optional(),
          readOnlyHint: o().optional(),
          sourceHostname: r().min(1).optional(),
          inputJson: r().optional(),
          inputTruncated: t(!0).optional(),
          outputJson: r().optional(),
          outputTruncated: t(!0).optional(),
        }),
      ])),
      (u = n({ "codex/toolSurface": n({ kind: t(`browserUse`), webMcpCalls: a(l) }) })));
  });
export { d as n, c as t };
//# sourceMappingURL=webmcp-tool-calls-9d2f2272479b.js.map
