import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fnr as t,
  XPr as n,
  YPr as r,
  fvr as i,
  gSr as a,
  gvr as o,
  l5n as s,
  mSr as c,
  o5n as l,
  ubr as u,
  v8n as d,
  wvr as f,
} from "./app-initial-5851df3f6cb1.js";
import { Bl as p, Vl as m } from "./app-primary-fe8a450b3b04.js";
async function h(e, t, n, i) {
  let a = e.get(p, { conversationId: t, hostId: n }).find((e) => e.conversationId === i);
  if (a != null) return a;
  let o = g(e, t, i, n);
  if (o != null) return o;
  let s = await r(e, n)
    .getConversationAncestry(i)
    .catch(() => null);
  return s?.hostId != null && s.hostId !== n ? null : g(e, t, i, n, s);
}
function g(e, n, r, i, u) {
  let d = { hostId: i, threadId: n },
    p = (e.get(f, d) ?? []).flatMap((t) => {
      let n = o(e, t);
      return n == null ? [] : [n];
    });
  for (let i of p)
    for (let o of i.items) {
      if (
        o.type === `collabAgentToolCall` &&
        o.tool === `spawnAgent` &&
        o.senderThreadId === n &&
        o.receiverThreadIds.includes(r)
      ) {
        let t = o.receiverThreads.find((e) => e.threadId === r)?.thread,
          i = a(t?.source ?? e.get(l, r)),
          d = u?.parentThreadId ?? e.get(s, r);
        if ((i?.parentThreadId != null && i.parentThreadId !== n) || (d != null && d !== n)) continue;
        let f = c(t) ?? i?.agentNickname?.trim() ?? u?.agentNickname;
        if (f == null || f.length === 0) continue;
        return { canInteract: !0, conversationId: r, displayName: f };
      }
      if (o.type === `subAgentActivity` && o.kind === `started` && o.agentThreadId === r) {
        let e = t(o.agentPath);
        if (e != null) return { canInteract: !1, conversationId: r, displayName: e };
      }
    }
  return null;
}
function _(e, t, n, r) {
  return e.get(p, { conversationId: t, hostId: n }).some((e) => e.conversationId === r)
    ? !0
    : (e.get(f, { hostId: n, threadId: t }) ?? []).some((n) =>
        o(e, n)?.items.some(
          (e) =>
            (e.type === `collabAgentToolCall` &&
              e.tool === `spawnAgent` &&
              e.senderThreadId === t &&
              e.receiverThreadIds.includes(r)) ||
            (e.type === `subAgentActivity` && e.kind === `started` && e.agentThreadId === r),
        ),
      );
}
function v() {
  return (v = e(() => {
    (u(), n(), d(), i(), m());
  }))();
}
export { v as i, h as n, g as r, _ as t };
//# sourceMappingURL=open-target-c28262e3c35c.js.map
