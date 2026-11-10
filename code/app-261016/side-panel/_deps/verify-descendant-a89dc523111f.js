import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBr as t, IBr as n, Yer as r, eer as i } from "./app-initial-ad16eaadf81f.js";
import { $l as a, Ql as o } from "./app-primary-3e00728c2a4c.js";
async function s(
  e,
  { hostId: n, hydrateMissingAncestors: i = !1, parentConversationId: o, selectedConversationId: c },
) {
  if (c === o) return !1;
  let l = t(e, n),
    u = new Set(),
    d = c;
  for (; d !== o;) {
    if (u.has(d) || e.get(r, n).includes(d)) return !1;
    u.add(d);
    let t = await l.getConversationAncestry(d),
      f = t?.hostId;
    if (f != null && f !== n) return !1;
    let p = t?.parentThreadId;
    if (p == null) {
      let t = (await l.getConversationAncestry(c))?.parentThreadId;
      if (t != null && t !== o) {
        let t = e.get(a, { conversationId: o, hostId: n });
        if (t?.descendantThreads.some((e) => e.id === c) !== !0 && (!i || t?.isComplete === !0)) return !1;
      }
      return (
        await l.hydrateBackgroundThreads([d], { includeTurns: !1, refreshExisting: !0 }),
        (await l.getConversationAncestry(d))?.parentThreadId != null &&
          s(e, { hostId: n, hydrateMissingAncestors: i, parentConversationId: o, selectedConversationId: c })
      );
    }
    d = p;
  }
  return l.ensureConversationFirstPage(c);
}
function c() {
  return (c = e(() => {
    (n(), i(), o());
  }))();
}
export { s as n, c as t };
//# sourceMappingURL=verify-descendant-a89dc523111f.js.map
