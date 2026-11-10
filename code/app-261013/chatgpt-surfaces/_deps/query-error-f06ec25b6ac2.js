import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $4 as t, IDt as n, jDt as r, t3 as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
function s(e) {
  let r = (0, c.c)(4),
    { onRetry: i } = e,
    a;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, l.jsx)(n, {
        id: `settings.consumerBilling.loadError`,
        defaultMessage: `Unable to load billing information. Please try again.`,
        description: `Error shown in a consumer Billing settings section when its data request fails. The adjacent Retry button retries that section.`,
      })),
      (r[0] = a))
    : (a = r[0]);
  let o;
  r[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, l.jsx)(n, {
        id: `settings.consumerBilling.retry`,
        defaultMessage: `Retry`,
        description: `Button that retries a failed request in consumer Billing settings`,
      })),
      (r[1] = o))
    : (o = r[1]);
  let s;
  return (
    r[2] === i
      ? (s = r[3])
      : ((s = (0, l.jsxs)(`div`, {
          className: `flex items-center gap-2 text-sm text-warning`,
          role: `alert`,
          children: [a, (0, l.jsx)(t, { color: `secondary`, size: `toolbar`, onClick: i, children: o })],
        })),
        (r[2] = i),
        (r[3] = s)),
    s
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = a()), r(), i(), (l = o()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=query-error-f06ec25b6ac2.js.map
