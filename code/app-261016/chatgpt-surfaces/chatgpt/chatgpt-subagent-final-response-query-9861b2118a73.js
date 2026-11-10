import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Bst as n, Qst as r, ZSt as i, mCt as a, zst as o } from "./app-shared-2feb3d4c6fcc.js";
import { iRr as s, tyr as c } from "./app-initial-ad16eaadf81f.js";
function l(e) {
  let t = e.data[0];
  if (t == null) return null;
  let n = null;
  for (let e = t.items.length - 1; e >= 0; e--) {
    let r = t.items[e];
    if (
      r != null &&
      `type` in r &&
      r.type === `agentMessage` &&
      r.text.trim().length !== 0 &&
      ((n ??= r), r.phase === `final_answer`)
    )
      return r.text;
  }
  return n?.text ?? null;
}
var u, d, f, p, m;
function h() {
  return (h = e(() => {
    (i(),
      c(),
      t(),
      n(),
      (u = 2),
      (d = 250),
      (f = 100),
      (p = class extends Error {}),
      (m = a(r, ({ activationId: e, conversationId: t, isTurnLive: n, threadId: r }) => ({
        enabled: e != null && t != null && r != null,
        queryFn: async () => {
          if (t == null || r == null) return null;
          let e = l(
            await s.safeGet(`/flora/subagent/thread/turns`, {
              parameters: { query: { conversationId: t, threadId: r, limit: 1 } },
            }),
          );
          if (e == null) throw new p(`Subagent final response is not available yet`);
          return e;
        },
        queryKey: [`chatgpt-subagent-final-response`, t, r, e],
        refetchOnWindowFocus: !1,
        retryOnMount: !n,
        retry: (e, t) => t instanceof p && e < u,
        retryDelay: (e) => Math.min(d * 2 ** e + Math.random() * f, 1e3),
        staleTime: o.INFINITE,
      }))));
  }))();
}
export { h as n, m as t };
//# sourceMappingURL=chatgpt-subagent-final-response-query-9861b2118a73.js.map
