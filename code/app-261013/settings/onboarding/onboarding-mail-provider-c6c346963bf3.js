import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Fat as n, Pat as r, art as i, srt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { AMr as s, EPr as c } from "./app-initial-5851df3f6cb1.js";
function l(e) {
  if (e == null) return null;
  let t = e.lastIndexOf(`@`);
  if (t <= 0) return null;
  let n = e
    .slice(t + 1)
    .trim()
    .toLowerCase();
  return n.length === 0 ? null : n;
}
function u({ debugOverride: e, detectedProvider: t, emailDomain: n, isError: r }) {
  return e ?? t ?? (n == null || r ? `other` : null);
}
function d(e, t) {
  return e === `other` ? (c(t) ? `microsoft` : `google`) : e;
}
function f(e, t) {
  return t === `microsoft` ? (p[e] ?? e) : e;
}
var p, m;
function h() {
  return (h = e(() => {
    (o(),
      n(),
      s(),
      a(),
      (p = {
        gmail: `outlook-email`,
        "google-calendar": `outlook-calendar`,
        "google-drive": `sharepoint`,
        slack: `teams`,
      }),
      (m = i(t, `email-domain-mail-provider`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { domain: e },
        retry: 2,
        staleTime: r.FIVE_MINUTES,
      }))));
  }))();
}
export { d as a, f as i, l as n, h as o, u as r, m as t };
//# sourceMappingURL=onboarding-mail-provider-c6c346963bf3.js.map
