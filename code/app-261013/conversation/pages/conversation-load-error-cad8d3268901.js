import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $4 as t, IDt as n, jDt as r, t3 as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { ACn as s, jCn as c } from "./app-initial-5851df3f6cb1.js";
function l(e) {
  let r = (0, u.c)(6),
    { title: i, onRetry: a } = e,
    o;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, d.jsx)(n, {
        id: `chatgptConversations.retryHistory`,
        defaultMessage: `Retry`,
        description: `Button that retries loading conversation history after a failed request`,
      })),
      (r[0] = o))
    : (o = r[0]);
  let c;
  r[1] === a
    ? (c = r[2])
    : ((c = (0, d.jsx)(t, { color: `secondary`, onClick: a, children: o })), (r[1] = a), (r[2] = c));
  let l;
  return (
    r[3] !== c || r[4] !== i
      ? ((l = (0, d.jsx)(s, { title: i, actions: c })), (r[3] = c), (r[4] = i), (r[5] = l))
      : (l = r[5]),
    l
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = a()), r(), i(), c(), (d = o()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=conversation-load-error-cad8d3268901.js.map
