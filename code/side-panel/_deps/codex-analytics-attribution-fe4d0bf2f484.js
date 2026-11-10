import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  O3t as t,
  TTt as n,
  c6t as r,
  gRt as i,
  rTt as a,
  xRt as o,
} from "./app-initial-f094ef01c64d.js";
var s,
  c = e(() => {
    (t(),
      a(),
      o(),
      (s = r(i, ({ get: e, scope: t }) => {
        if (t.value.routeKind !== `local-thread`) return null;
        let r = e(n, t.value.conversationId);
        return r?.turnId == null ? null : { threadId: t.value.conversationId, turnId: r.turnId };
      })));
  });
export { s as n, c as t };
//# sourceMappingURL=codex-analytics-attribution-fe4d0bf2f484.js.map
