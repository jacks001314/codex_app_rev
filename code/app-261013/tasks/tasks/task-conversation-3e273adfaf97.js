import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, aSt as r, fSt as i, wot as a } from "./app-shared-bbfeca5e5737.js";
import { GMr as o, tNr as s } from "./app-initial-5851df3f6cb1.js";
import { a as c, d as l, l as u, n as d, o as f, p, s as m } from "./state-caaaa75ceb81.js";
import { n as h, t as g } from "./team-state-594fb79319b3.js";
function _(e, t, n) {
  let r = e.get(o);
  (e.set(v, t),
    e.set(y, r, (e) => [t, ...e.filter((e) => e.source !== t.source || e.automationId !== t.automationId)]),
    n == null
      ? (e.set(f, r, !1), e.set(m, { accountId: r, group: `active` }, !1))
      : (e.set(u, r, (e) => (e == null || e.includes(n) ? e : [...e, n])),
        e.set(h, r, (e) => ({ ...e, [n]: !1 }))));
  let i = e.get(l, r);
  p(i).includes(`active`) || e.set(l, r, Array.isArray(i) ? [...i, `active`] : `active`);
  let a = n == null ? `personal` : `team`,
    s = e.get(c, r);
  s !== `all` && s !== a && (typeof s != `object` || s.teamId !== n) && e.set(c, r, `all`);
}
var v, y;
function b() {
  return (b = e(() => {
    (n(), s(), a(), d(), g(), (v = i(t, () => null)), (y = r(t, (e) => [])));
  }))();
}
export { y as i, v as n, _ as r, b as t };
//# sourceMappingURL=task-conversation-3e273adfaf97.js.map
