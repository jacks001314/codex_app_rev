import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  O3t as t,
  TJt as n,
  U3t as r,
  a3t as i,
  fxt as a,
  mxt as o,
  o3t as s,
  wJt as c,
} from "./app-initial-f094ef01c64d.js";
function l(e) {
  let t = e.data[0];
  if (t == null) return null;
  let n = null;
  for (let e = t.items.length - 1; e >= 0; e--) {
    let r = t.items[e];
    if (
      !(r == null || !(`type` in r) || r.type !== `agentMessage` || r.text.trim().length === 0) &&
      ((n ??= r), r.phase === `final_answer`)
    )
      return r.text;
  }
  return n?.text ?? null;
}
var u,
  d,
  f,
  p,
  m,
  h = e(() => {
    (t(),
      s(),
      n(),
      o(),
      (u = 2),
      (d = 250),
      (f = 100),
      (p = class extends Error {}),
      (m = r(
        i,
        ({ activationId: e, conversationId: t, isTurnLive: n, threadId: r }, { scope: i }) => ({
          enabled: e != null && t != null && r != null,
          queryFn: async () => {
            if (t == null || r == null) return null;
            let e = l(await i.get(a).getSubagentThreadTurns({ conversationId: t, threadId: r }));
            if (e == null) throw new p(`Subagent final response is not available yet`);
            return e;
          },
          queryKey: [`chatgpt-subagent-final-response`, t, r, e],
          refetchOnWindowFocus: !1,
          retryOnMount: !n,
          retry: (e, t) => t instanceof p && e < u,
          retryDelay: (e) => Math.min(d * 2 ** e + Math.random() * f, 1e3),
          staleTime: c.INFINITE,
        }),
      )));
  });
export { h as n, m as t };
//# sourceMappingURL=chatgpt-subagent-final-response-query-25bc28e7c92f.js.map
