import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Fat as n, Pat as r, Pxt as i, Zxt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { Ymr as s, ehr as c } from "./app-initial-5851df3f6cb1.js";
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
      o(),
      n(),
      (u = 2),
      (d = 250),
      (f = 100),
      (p = class extends Error {}),
      (m = a(t, ({ activationId: e, conversationId: t, isTurnLive: n, threadId: i }) => ({
        enabled: e != null && t != null && i != null,
        queryFn: async () => {
          if (t == null || i == null) return null;
          let e = l(
            await s.safeGet(`/flora/subagent/thread/turns`, {
              parameters: { query: { conversationId: t, threadId: i, limit: 1 } },
            }),
          );
          if (e == null) throw new p(`Subagent final response is not available yet`);
          return e;
        },
        queryKey: [`chatgpt-subagent-final-response`, t, i, e],
        refetchOnWindowFocus: !1,
        retryOnMount: !n,
        retry: (e, t) => t instanceof p && e < u,
        retryDelay: (e) => Math.min(d * 2 ** e + Math.random() * f, 1e3),
        staleTime: r.INFINITE,
      }))));
  }))();
}
export { h as n, m as t };
//# sourceMappingURL=chatgpt-subagent-final-response-query-a09eb28a8adf.js.map
