import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $It as t, EPt as n, TLt as r, pLt as i } from "./app-shared-bbfeca5e5737.js";
function a(e) {
  return s.safeParse(e).data ?? null;
}
var o, s;
function c() {
  return (c = e(() => {
    (n(),
      (o = `connector_246af0940da3457da0e751171dc1ce60`),
      (s = i({
        orbitContactSetup: t(!0).optional(),
        orbitTeamsSetup: i({
          accountId: r(),
          userId: r(),
          threadId: r(),
          linkId: r().optional(),
          displayName: r().optional(),
          originalDisplayName: r().optional(),
        }),
      })));
  }))();
}
export { a as n, c as r, o as t };
//# sourceMappingURL=oauth-resume-2fd1853f367b.js.map
