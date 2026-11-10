import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  Spn as r,
  hmn as i,
  kMt as a,
  kmn as o,
} from "./app-initial-f094ef01c64d.js";
import { Cg as s, wg as c } from "./app-primary-4c40d73a1074.js";
function l(e) {
  let t = (0, u.c)(4),
    { onRetry: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, d.jsx)(n, {
        id: `settings.consumerBilling.loadError`,
        defaultMessage: `Unable to load billing information. Please try again.`,
        description: `Error shown in a consumer Billing settings section when its data request fails. The adjacent Retry button retries that section.`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, d.jsx)(n, {
        id: `settings.consumerBilling.retry`,
        defaultMessage: `Retry`,
        description: `Button that retries a failed request in consumer Billing settings`,
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  return (
    t[2] === r
      ? (s = t[3])
      : ((s = (0, d.jsxs)(`div`, {
          className: `flex items-center gap-2 text-sm text-warning`,
          role: `alert`,
          children: [
            i,
            (0, d.jsx)(a, { color: `secondary`, size: `toolbar`, onClick: r, children: o }),
          ],
        })),
        (t[2] = r),
        (t[3] = s)),
    s
  );
}
var u,
  d,
  f = e(() => {
    ((u = o()), r(), t(), (d = i()));
  });
function p(e, t, n) {
  let r = n.toUpperCase(),
    i = s({ intl: e, currencyCode: r });
  return e.formatNumber(t / 10 ** i, { style: `currency`, currency: r });
}
var m = e(() => {
  c();
});
export { f as i, m as n, l as r, p as t };
//# sourceMappingURL=format-amount-47aa133b47a5.js.map
