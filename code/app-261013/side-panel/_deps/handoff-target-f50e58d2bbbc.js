import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Bbt as n,
  EPt as r,
  Jbt as i,
  TLt as a,
  pLt as o,
  rst as s,
} from "./app-shared-bbfeca5e5737.js";
function c(e, t) {
  if (
    t.type !== `mcpToolCall` ||
    t.status !== `completed` ||
    t.error != null ||
    !n(t.server) ||
    t.tool !== `js`
  )
    return null;
  let r = p.safeParse(t.result?._meta);
  return r.success
    ? { requestId: t.id, threadId: e, tabId: r.data[`codex/toolSurface`].manualHandoffTabId }
    : null;
}
function l(e, t) {
  let n = f.safeParse(t);
  if (!n.success) return null;
  let r = n.data.cloud_browser_handoff;
  return {
    requestId: e,
    threadId: i(r.browser_conversation_id),
    connectionThreadId: i(r.connection_thread_id),
    tabId: r.tab_id,
  };
}
var u, d, f, p;
function m() {
  return (m = e(() => {
    (s(),
      r(),
      (u = a()
        .regex(/^[1-9]\d*$/)
        .refine((e) => Number.isSafeInteger(Number(e)))),
      (d = a().refine((e) => e.trim().length > 0 && new TextEncoder().encode(e).length <= 128)),
      (f = o({
        cloud_browser_handoff: o({ tab_id: u, browser_conversation_id: d, connection_thread_id: d }),
      })),
      (p = o({
        "codex/toolSurface": o({ kind: t(`browserUse`), backend: t(`cdp`), manualHandoffTabId: u }),
      })));
  }))();
}
export { l as n, m as r, c as t };
//# sourceMappingURL=handoff-target-f50e58d2bbbc.js.map
