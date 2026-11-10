import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { sNt as t } from "./app-initial-5851df3f6cb1.js";
function n(e, n, r) {
  let i = r.toUpperCase(),
    a = t({ intl: e, currencyCode: i });
  return e.formatNumber(n / 10 ** a, { style: `currency`, currency: i });
}
function r() {
  return (r = e(() => {}))();
}
export { r as n, n as t };
//# sourceMappingURL=format-amount-e8f6a81b6cbb.js.map
