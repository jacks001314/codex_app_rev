import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { Jbr as a, Xbr as o, Ybr as s, eer as c, ftr as l } from "./app-initial-ad16eaadf81f.js";
var u, d;
function f() {
  return (f = e(() => {
    (r(),
      a(),
      t(),
      c(),
      (u = i(n, ({ hostId: e, conversationId: t }, { get: n }) => {
        if (t.startsWith(`chatgpt:`)) return null;
        let r = n(l, { hostId: e, threadId: t });
        return r != null && r.type !== `notLoaded` ? t : null;
      })),
      (d = i(n, (e, { get: t }) => {
        let n = t(u, { hostId: e.hostId, conversationId: e.threadId }),
          { data: r } =
            n == null ? t(s, e.hostId) : t(o, { hostId: e.hostId, threadId: n, serverName: e.serverName });
        return r?.data.find((t) => t.name === e.serverName)?.serverInfo ?? null;
      })));
  }))();
}
export { d as n, u as r, f as t };
//# sourceMappingURL=mcp-server-status-signals-624da44163ce.js.map
