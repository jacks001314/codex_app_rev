import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AKt as t,
  MKt as n,
  TJt as r,
  _Jt as i,
  a3t as a,
  hJt as o,
  o3t as s,
  wJt as c,
} from "./app-initial-f094ef01c64d.js";
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
  return e === `other` ? (n(t) ? `microsoft` : `google`) : e;
}
function f(e, t) {
  return t === `microsoft` ? (p[e] ?? e) : e;
}
var p,
  m,
  h = e(() => {
    (s(),
      r(),
      t(),
      i(),
      (p = {
        gmail: `outlook-email`,
        "google-calendar": `outlook-calendar`,
        "google-drive": `sharepoint`,
        slack: `teams`,
      }),
      (m = o(a, `email-domain-mail-provider`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { domain: e },
        retry: 2,
        staleTime: c.FIVE_MINUTES,
      }))));
  });
export { d as a, f as i, l as n, h as o, u as r, m as t };
//# sourceMappingURL=onboarding-mail-provider-6c35f2fbcf24.js.map
