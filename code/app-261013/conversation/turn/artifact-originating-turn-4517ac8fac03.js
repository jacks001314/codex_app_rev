import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LR as t, VR as n, mht as r } from "./app-shared-bbfeca5e5737.js";
import {
  CC as i,
  SC as a,
  fvr as o,
  gvr as s,
  lir as c,
  uir as l,
  wvr as u,
  xC as d,
  xvr as f,
  yvr as p,
} from "./app-initial-5851df3f6cb1.js";
function m(e, { hostId: t, originatingTurn: n, path: r, threadId: i }) {
  let a = e.value,
    o = a.routeKind === `local-thread` && a.conversationId === i ? a.conversationId : null,
    s = o == null ? void 0 : h(e, { conversationId: o, fallback: n, hostId: t, path: r });
  return {
    threadId: o,
    turnId: s?.turnId ?? null,
    inputMessageId: s?.inputMessageId ?? null,
    messageId: s?.messageId ?? null,
  };
}
function h(e, { conversationId: t, fallback: i, hostId: o, path: l }) {
  let m = e.value;
  if (m.routeKind !== `local-thread` || m.conversationId !== t || (m.hostId != null && m.hostId !== o))
    return;
  let h = { hostId: o, threadId: m.conversationId },
    g = e.get(u, h);
  if (g != null) {
    if (e.get(p, h) !== !0) {
      let t = e.get(f, h);
      if (t?.at(-1)?.type !== `content`) return;
      let n = t[t.findLastIndex((e) => e.type === `gap`) + 1];
      if (n?.type !== `content`) return;
      let r = g.findIndex((e) => e.entityKey === n.value);
      if (r < 0) return;
      g = g.slice(r);
    }
    for (let t = g.length - 1; t >= 0; --t) {
      let o = s(e, g[t]);
      if (o?.status !== `completed` || o.itemsPagination?.hasLoadedOldest === !1) return;
      let u = c(o);
      if (![...u.outputFilePaths, ...u.editedFilePaths].some((e) => r(n(o.params.cwd ?? ``, e), l))) continue;
      if (o.turnId == null) return;
      let f = i?.turnId === o.turnId ? i : void 0;
      return {
        turnId: o.turnId,
        inputMessageId: d(o) ?? f?.inputMessageId ?? null,
        messageId: a(o) ?? f?.messageId ?? null,
      };
    }
  }
}
function g() {
  return (g = e(() => {
    (o(), i(), l(), t());
  }))();
}
export { g as n, h as r, m as t };
//# sourceMappingURL=artifact-originating-turn-4517ac8fac03.js.map
