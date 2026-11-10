import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  i3 as r,
  jDt as i,
  r3 as a,
  t3 as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
function l(e) {
  let r = (0, u.c)(5),
    { ref: i, onRetry: o } = e,
    s;
  r[0] === o
    ? (s = r[1])
    : ((s =
        o == null
          ? (0, d.jsxs)(`div`, {
              role: `status`,
              children: [
                (0, d.jsx)(a, {}),
                (0, d.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, d.jsx)(n, {
                    id: `chatgpt.pagination.loading`,
                    defaultMessage: `Loading older messages…`,
                    description: `Accessible status while an older page of conversation messages loads`,
                  }),
                }),
              ],
            })
          : (0, d.jsx)(t, {
              color: `secondary`,
              onClick: o,
              children: (0, d.jsx)(n, {
                id: `chatgpt.pagination.retry`,
                defaultMessage: `Try again`,
                description: `Button to retry loading older conversation messages after a failure`,
              }),
            })),
      (r[0] = o),
      (r[1] = s));
  let c;
  return (
    r[2] !== i || r[3] !== s
      ? ((c = (0, d.jsx)(`div`, { ref: i, className: `flex justify-center py-4`, children: s })),
        (r[2] = i),
        (r[3] = s),
        (r[4] = c))
      : (c = r[4]),
    c
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = s()), i(), o(), r(), (d = c()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=thread-history-loading-bc09ef1d62df.js.map
