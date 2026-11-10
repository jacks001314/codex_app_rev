import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, Y3 as i, Z3 as a, tkt as o } from "./app-shared-2feb3d4c6fcc.js";
import { XEn as s, YEn as c } from "./app-initial-ad16eaadf81f.js";
function l(e) {
  let t = (0, u.c)(6),
    { title: n, onRetry: r } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, d.jsx)(o, {
        id: `chatgptConversations.retryHistory`,
        defaultMessage: `Retry`,
        description: `Button that retries loading conversation history after a failed request`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let s;
  t[1] === r
    ? (s = t[2])
    : ((s = (0, d.jsx)(i, { color: `secondary`, onClick: r, children: a })), (t[1] = r), (t[2] = s));
  let l;
  return (
    t[3] !== s || t[4] !== n
      ? ((l = (0, d.jsx)(c, { title: n, actions: s })), (t[3] = s), (t[4] = n), (t[5] = l))
      : (l = t[5]),
    l
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), r(), a(), s(), (d = t()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=conversation-load-error-84e365dc6012.js.map
