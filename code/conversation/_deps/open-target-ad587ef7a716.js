import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  C2t as t,
  Hzt as n,
  JTt as r,
  MTt as i,
  T2t as a,
  Vzt as o,
  ZTt as s,
  rTt as c,
  t0t as l,
} from "./app-initial-f094ef01c64d.js";
import { Dt as u, Et as d } from "./app-primary-4c40d73a1074.js";
function f(e, t, n, r) {
  return (
    e.get(d, { conversationId: t, hostId: n }).find((e) => e.conversationId === r) ?? p(e, t, r)
  );
}
function p(e, n, c) {
  let l = e.get(i, n) ?? [];
  for (let i of l)
    for (let l of i.items) {
      if (
        l.type === `collabAgentToolCall` &&
        l.tool === `spawnAgent` &&
        l.senderThreadId === n &&
        l.receiverThreadIds.includes(c)
      ) {
        let i = l.receiverThreads.find((e) => e.threadId === c)?.thread,
          o = a(i?.source ?? e.get(r, c)),
          u = e.get(s, c);
        if ((o?.parentThreadId != null && o.parentThreadId !== n) || (u != null && u !== n))
          continue;
        let d = t(i) ?? o?.agentNickname?.trim();
        if (d == null || d.length === 0) continue;
        return { canInteract: !0, conversationId: c, displayName: d };
      }
      if (l.type === `subAgentActivity` && l.kind === `started` && l.agentThreadId === c) {
        let e = o(l.agentPath);
        if (e != null) return { canInteract: !1, conversationId: c, displayName: e };
      }
    }
  return null;
}
var m = e(() => {
  (l(), c(), u(), n());
});
export { p as n, m as r, f as t };
//# sourceMappingURL=open-target-ad587ef7a716.js.map
