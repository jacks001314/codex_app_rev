import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Pxt as r,
  TLt as i,
  nSt as a,
  wot as o,
  xLt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  CFr as c,
  Kdr as l,
  Udr as u,
  bFr as d,
  iNr as f,
  rNr as p,
  xFr as m,
} from "./app-initial-5851df3f6cb1.js";
function h(e, t, n) {
  (c(y, { entries: { [v(t)]: n == null ? null : { value: n } }, maxEntries: 100 }), e.set(x, d(y, {})));
}
function g(e, t) {
  let n = u(t);
  return e.filter(
    (e) => u(e.connector_id) === n && e.visibility !== `HIDDEN` && !e.id.startsWith(`implicit_link::`),
  );
}
function _(e, t, n) {
  return e.some(
    (e) =>
      l(e, t) &&
      e.auth_type === `OAUTH` &&
      e.connector_status !== `DISABLED_BY_ADMIN` &&
      e.unavailable_reason == null &&
      e.owners.some((e) => e.type === `USER` && e.id === n),
  );
}
function v({ accountId: e, userId: t, appId: n }) {
  return JSON.stringify([e, t, n]);
}
var y, b, x, S;
function C() {
  return (C = e(() => {
    (r(),
      n(),
      o(),
      m(),
      p(),
      (y = `selected-plugin-links-v1`),
      (b = s(i(), i().nullable().catch(null)).catch({})),
      (x = f(y, {}, { coerceStoredValue: (e) => b.parse(e) })),
      (S = a(t, (e, { get: t }) => t(x)[v(e)] ?? null)));
  }))();
}
export { h as a, S as i, _ as n, C as r, g as t };
//# sourceMappingURL=plugin-connected-account-links-8dea8c830000.js.map
