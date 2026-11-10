import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, VRt as n, hRt as r, kRt as i } from "./app-shared-2feb3d4c6fcc.js";
function a(e) {
  return s.safeParse(e).data ?? null;
}
var o, s;
function c() {
  return (c = e(() => {
    (t(),
      (o = `connector_246af0940da3457da0e751171dc1ce60`),
      (s = i({
        orbitContactSetup: r(!0).optional(),
        orbitTeamsSetup: i({
          accountId: n(),
          userId: n(),
          threadId: n(),
          linkId: n().optional(),
          displayName: n().optional(),
          originalDisplayName: n().optional(),
        }),
      })));
  }))();
}
export { a as n, c as r, o as t };
//# sourceMappingURL=oauth-resume-5618c8346aa8.js.map
