import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, Y3 as i, Z3 as a, tkt as o } from "./app-shared-2feb3d4c6fcc.js";
function s(e) {
  let t = (0, c.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, l.jsx)(o, {
        id: `settings.consumerBilling.loadError`,
        defaultMessage: `Unable to load billing information. Please try again.`,
        description: `Error shown in a consumer Billing settings section when its data request fails. The adjacent Retry button retries that section.`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, l.jsx)(o, {
        id: `settings.consumerBilling.retry`,
        defaultMessage: `Retry`,
        description: `Button that retries a failed request in consumer Billing settings`,
      })),
      (t[1] = a))
    : (a = t[1]);
  let s;
  return (
    t[2] === n
      ? (s = t[3])
      : ((s = (0, l.jsxs)(`div`, {
          className: `flex items-center gap-2 text-sm text-warning`,
          role: `alert`,
          children: [r, (0, l.jsx)(i, { color: `secondary`, size: `toolbar`, onClick: n, children: a })],
        })),
        (t[2] = n),
        (t[3] = s)),
    s
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = n()), r(), a(), (l = t()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=query-error-2df1f6b7fd60.js.map
