import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  BS as t,
  Cpn as n,
  JS as r,
  OL as i,
  Spn as a,
  VS as o,
  XS as s,
  hmn as c,
  kL as l,
  kmn as u,
} from "./app-initial-f094ef01c64d.js";
import { n as d, t as f } from "./billing-analytics-3bae5ee4e65b.js";
function p() {
  let e = (0, m.c)(4),
    i = l(),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, h.jsx)(t, { slug: `consumer-view` })),
      (o = (0, h.jsx)(n, {
        id: `settings.usage.enterprise.consumerOverride.subtitle`,
        defaultMessage: `Your usage in this workspace, shown in the consumer dashboard`,
        description: `Explains that the Enterprise consumer-dashboard preview shows only the signed-in member's real usage in the active workspace`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s;
  return (
    e[2] === i
      ? (s = e[3])
      : ((s = (0, h.jsx)(r, {
          title: a,
          subtitle: o,
          children: (0, h.jsx)(f, {
            canViewCreditSettings: !1,
            reduceMotion: i,
            scope: `consumer`,
            workspaceTaskUsage: !0,
          }),
        })),
        (e[2] = i),
        (e[3] = s)),
    s
  );
}
var m, h;
e(() => {
  ((m = u()), a(), i(), s(), o(), d(), (h = c()));
})();
export { p as ConsumerViewSettings };
//# sourceMappingURL=settings-70b07b20c870.js.map
