import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Tt as t,
  $wt as n,
  ZTt as r,
  i3t as i,
  nTt as a,
  r3t as o,
  rTt as s,
} from "./app-initial-f094ef01c64d.js";
import { Dt as c, Ot as l } from "./app-primary-4c40d73a1074.js";
function u(
  e,
  {
    hostId: i,
    hydrateMissingAncestors: s = !1,
    parentConversationId: c,
    selectedConversationId: d,
  },
) {
  if (d === c) return !1;
  let f = new Set(),
    p = d;
  for (; p !== c;) {
    if (f.has(p) || e.get(t, i).includes(p)) return !1;
    f.add(p);
    let m = e.get(a, p);
    if (m != null && m !== i) return !1;
    let h = e.get(n, p),
      g = h ? e.get(r, p) : null;
    if (!h || g == null) {
      let t = e.get(r, d);
      if (e.get(n, d) && t != null && t !== c) {
        let t = e.get(l, { conversationId: c, hostId: i });
        if (t?.descendantThreads.some((e) => e.id === d) !== !0 && (!s || t?.isComplete === !0))
          return !1;
      }
      return o(e, i)
        .hydrateBackgroundThreads([p], { includeTurns: p === d || h })
        .then(() =>
          !e.get(n, p) || e.get(r, p) == null
            ? !1
            : u(e, {
                hostId: i,
                hydrateMissingAncestors: s,
                parentConversationId: c,
                selectedConversationId: d,
              }),
        );
    }
    p = g;
  }
  return !0;
}
var d = e(() => {
  (i(), s(), c());
});
export { u as n, d as t };
//# sourceMappingURL=verify-descendant-79c03f806412.js.map
