import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, oSt as n } from "./app-shared-bbfeca5e5737.js";
import { Cwr as r, V8n as i, gwr as a, v8n as o } from "./app-initial-5851df3f6cb1.js";
var s;
function c() {
  return (c = e(() => {
    (t(),
      o(),
      r(),
      (s = n(a, ({ get: e, scope: t }) => {
        if (t.value.routeKind !== `local-thread`) return null;
        let n = e(i, t.value.conversationId);
        return n == null ? null : { threadId: t.value.conversationId, turnId: n };
      })));
  }))();
}
export { s as n, c as t };
//# sourceMappingURL=codex-analytics-attribution-da3e14c84e21.js.map
