import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, TJ as n, jDt as r, vU as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { MRt as s, NRt as c } from "./app-initial-5851df3f6cb1.js";
function l(e) {
  let n = (0, u.c)(7),
    { ref: r, credits: a, showRequirements: o } = e,
    c = o !== void 0 && o,
    l;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, d.jsx)(i, {})), (n[0] = l)) : (l = n[0]);
  let f;
  n[1] !== a || n[2] !== c
    ? ((f = (0, d.jsxs)(`span`, {
        className: `inline-flex items-center gap-2 whitespace-normal`,
        children: [
          l,
          c
            ? (0, d.jsx)(t, {
                id: `plugins.incentive.installAndUseRewardBadge`,
                defaultMessage: `Get {credits, plural, one {# credit} other {# credits}} for installing and using`,
                description: `Reward badge on a plugin's own detail page. The page identifies the plugin, so its name is intentionally omitted. Installation and successful use are both required; credits is the server-provided reward amount.`,
                values: { credits: a },
              })
            : (0, d.jsx)(t, {
                id: `plugins.incentive.rewardBadge`,
                defaultMessage: `{credits, plural, one {# credit} other {# credits}}`,
                description: `Promotional workspace credit amount on a plugin offer pill; credits is the server-provided credit count`,
                values: { credits: a },
              }),
        ],
      })),
      (n[1] = a),
      (n[2] = c),
      (n[3] = f))
    : (f = n[3]);
  let p;
  return (
    n[4] !== r || n[5] !== f
      ? ((p = (0, d.jsx)(s, { ref: r, variant: `tip`, children: f })), (n[4] = r), (n[5] = f), (n[6] = p))
      : (p = n[6]),
    p
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = a()), r(), c(), n(), (d = o()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=badge-c44d63c703d3.js.map
