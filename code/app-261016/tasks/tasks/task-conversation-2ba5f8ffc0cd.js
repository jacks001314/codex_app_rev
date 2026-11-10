import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, SCt as r, ZSt as i, kCt as a } from "./app-shared-2feb3d4c6fcc.js";
import { wLr as o, zRr as s } from "./app-initial-ad16eaadf81f.js";
import { a as c, d as l, l as u, n as d, o as f, p, s as m } from "./state-b5960488bc9f.js";
import { n as h, t as g } from "./team-state-2d8a57dd2e66.js";
function _(e, t, n) {
  let r = e.get(s);
  (e.set(v, t),
    e.set(y, r, (e) => [t, ...e.filter((e) => e.source !== t.source || e.automationId !== t.automationId)]),
    n == null
      ? (e.set(f, r, !1), e.set(m, { accountId: r, group: `active` }, !1))
      : (e.set(u, r, (e) => (e == null || e.includes(n) ? e : [...e, n])),
        e.set(h, r, (e) => ({ ...e, [n]: !1 }))));
  let i = e.get(l, r);
  p(i).includes(`active`) || e.set(l, r, Array.isArray(i) ? [...i, `active`] : `active`);
  let a = n == null ? `personal` : `team`,
    o = e.get(c, r);
  o !== `all` && o !== a && (typeof o != `object` || o.teamId !== n) && e.set(c, r, `all`);
}
var v, y;
function b() {
  return (b = e(() => {
    (i(), o(), t(), d(), g(), (v = a(n, () => null)), (y = r(n, (e) => [])));
  }))();
}
export { y as i, v as n, _ as r, b as t };
//# sourceMappingURL=task-conversation-2ba5f8ffc0cd.js.map
