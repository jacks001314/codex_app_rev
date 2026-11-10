import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { TCt as n, ZSt as r, iFt as i, yCt as a } from "./app-shared-2feb3d4c6fcc.js";
import { MOr as o, zOr as s } from "./app-initial-ad16eaadf81f.js";
import { c, o as l, s as u } from "./floating-chat-surface-1eaefa25765a.js";
function d(e) {
  let t = n(o, (t, { scope: n }) => ({ onOpen: () => e.open?.(n, t), onDismiss: () => e.dismiss(n, t) }), {
    autoDispose: 6e4,
  });
  return a(
    o,
    (n, r) => {
      if (n == null) return l;
      let i = [],
        a = !1;
      for (let o of e.conversationIds(r.scope, n)) {
        let n = e.status(r.scope, o);
        if (n.pending) {
          a = !0;
          continue;
        }
        if (!n.unread || !n.completed) continue;
        let s = e.preview(r.scope, o);
        s != null && i.push({ id: o, title: e.title(r.scope, o), preview: s, ...r.get(t, o) });
      }
      return i.length > 0 ? { type: `ready`, value: i } : a ? u : l;
    },
    { isEqual: f.default },
  );
}
var f;
function p() {
  return (p = e(() => {
    ((f = t(i(), 1)), r(), s(), c());
  }))();
}
export { p as n, d as t };
//# sourceMappingURL=notifications-2eb77f3d52ee.js.map
