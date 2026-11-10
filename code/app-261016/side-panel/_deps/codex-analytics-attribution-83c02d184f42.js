import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CCt as t, ZSt as n } from "./app-shared-2feb3d4c6fcc.js";
import { Cer as r, MOr as i, eer as a, zOr as o } from "./app-initial-ad16eaadf81f.js";
var s;
function c() {
  return (c = e(() => {
    (n(),
      a(),
      o(),
      (s = t(i, ({ get: e, scope: t }) => {
        if (t.value.routeKind !== `local-thread`) return null;
        let n = e(r, t.value.conversationId);
        return n == null ? null : { threadId: t.value.conversationId, turnId: n };
      })));
  }))();
}
export { s as n, c as t };
//# sourceMappingURL=codex-analytics-attribution-83c02d184f42.js.map
