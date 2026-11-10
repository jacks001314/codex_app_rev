import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fAt as t } from "./app-initial-ad16eaadf81f.js";
function n(e, n, r) {
  let i = r.toUpperCase(),
    a = t({ intl: e, currencyCode: i });
  return e.formatNumber(n / 10 ** a, { style: `currency`, currency: i });
}
function r() {
  return (r = e(() => {}))();
}
export { r as n, n as t };
//# sourceMappingURL=format-amount-ee20e9ffab40.js.map
