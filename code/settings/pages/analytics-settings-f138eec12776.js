import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AKt as t,
  BS as n,
  Cpn as r,
  F3t as i,
  JS as a,
  KS as o,
  NKt as s,
  O3t as c,
  OL as l,
  Spn as u,
  VS as d,
  XS as f,
  hmn as p,
  kL as m,
  kmn as h,
  oAt as g,
  qS as _,
  sAt as v,
} from "./app-initial-f094ef01c64d.js";
import { Ah as y, Eh as b, Th as x, jh as S } from "./app-primary-4c40d73a1074.js";
import { n as C, t as w } from "./billing-analytics-3bae5ee4e65b.js";
function T() {
  let e = (0, E.c)(15),
    { data: t } = i(v),
    {
      canViewCreditSettings: c,
      isUsageSettingsAccessLoading: l,
      plan: u,
    } = b(t?.credits?.balance != null),
    d = m(),
    f;
  e[0] === u ? (f = e[1]) : ((f = S(u)), (e[0] = u), (e[1] = f));
  let p = f,
    h = `consumer`;
  p ? (h = `workspace`) : s(u) && (h = `business`);
  let g;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, D.jsx)(n, { slug: `analytics` })), (e[2] = g))
    : (g = e[2]);
  let _;
  e[3] === p
    ? (_ = e[4])
    : ((_ = p
        ? (0, D.jsx)(r, {
            id: `settings.usage.enterprise.analytics.subtitle`,
            defaultMessage: `See where your usage goes and how your activity changes over time`,
            description: `Description of enterprise usage and activity analytics`,
          })
        : void 0),
      (e[3] = p),
      (e[4] = _));
  let y;
  e[5] !== c || e[6] !== p || e[7] !== l || e[8] !== u || e[9] !== d || e[10] !== h
    ? ((y =
        u == null && l
          ? (0, D.jsx)(o, {})
          : (0, D.jsx)(w, { canViewCreditSettings: p || c, reduceMotion: d, scope: h })),
      (e[5] = c),
      (e[6] = p),
      (e[7] = l),
      (e[8] = u),
      (e[9] = d),
      (e[10] = h),
      (e[11] = y))
    : (y = e[11]);
  let x;
  return (
    e[12] !== _ || e[13] !== y
      ? ((x = (0, D.jsx)(a, {
          title: g,
          subtitle: _,
          subtitleClassName: `whitespace-normal`,
          children: y,
        })),
        (e[12] = _),
        (e[13] = y),
        (e[14] = x))
      : (x = e[14]),
    x
  );
}
var E, D;
e(() => {
  ((E = h()), c(), u(), x(), g(), l(), f(), _(), d(), y(), t(), C(), (D = p()));
})();
export { T as UsageAnalyticsSettings };
//# sourceMappingURL=analytics-settings-f138eec12776.js.map
