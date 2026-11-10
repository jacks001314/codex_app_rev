import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, JR as n, YR as r, jDt as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { n as s, t as c } from "./billing-analytics-bcdd6f8fa300.js";
function l(e) {
  let n = (0, u.c)(4),
    { isPolling: i } = e,
    a = i === void 0 || i,
    o = r(),
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, d.jsx)(`p`, {
        className: `text-sm text-secondary`,
        children: (0, d.jsx)(t, {
          id: `settings.usage.enterprise.consumerOverride.subtitle`,
          defaultMessage: `Restricted view used solely for OpenAI internal testing. Shows your real usage in this workspace.`,
          description: `Explains that this restricted consumer analytics view is only for OpenAI internal testing and shows the signed-in member's real usage in the active workspace`,
        }),
      })),
      (n[0] = s))
    : (s = n[0]);
  let l;
  return (
    n[1] !== a || n[2] !== o
      ? ((l = (0, d.jsxs)(d.Fragment, {
          children: [
            s,
            (0, d.jsx)(c, {
              isPolling: a,
              canViewCreditSettings: !1,
              reduceMotion: o,
              scope: `consumer`,
              workspaceTaskUsage: !0,
            }),
          ],
        })),
        (n[1] = a),
        (n[2] = o),
        (n[3] = l))
      : (l = n[3]),
    l
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = a()), i(), n(), s(), (d = o()));
  }))();
}
f();
export { l as ConsumerViewSettings };
//# sourceMappingURL=settings-eb357436821d.js.map
