import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  FO as r,
  GL as i,
  PO as a,
  Spn as o,
  WL as s,
  hmn as c,
  kMt as l,
  kmn as u,
} from "./app-initial-f094ef01c64d.js";
function d(e) {
  let t = (0, f.c)(11),
    { onClose: r, routeKind: i, routeResourceLabel: o } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, p.jsx)(n, {
        id: `threadTabRoute.unrestored.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Button label that dismisses a tab which could not be restored`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let u;
  t[1] === r
    ? (u = t[2])
    : ((u = (0, p.jsx)(l, { color: `secondary`, onClick: r, children: c })),
      (t[1] = r),
      (t[2] = u));
  let d;
  t[3] !== i || t[4] !== o
    ? ((d =
        o == null
          ? (0, p.jsx)(n, {
              id: `threadTabRoute.unrestored.routeKind`,
              defaultMessage: `Saved tab type: {routeKind}`,
              description: `Description identifying the type of a persisted tab that could not be restored`,
              values: { routeKind: i },
            })
          : (0, p.jsx)(n, {
              id: `threadTabRoute.unrestored.routeResource`,
              defaultMessage: `Saved tab: {routeKind} — {routeResource}`,
              description: `Description identifying the type and resource of a persisted tab that could not be restored`,
              values: { routeKind: i, routeResource: o },
            })),
      (t[3] = i),
      (t[4] = o),
      (t[5] = d))
    : (d = t[5]);
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, p.jsx)(a, {})), (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, p.jsx)(n, {
        id: `threadTabRoute.unrestored.title`,
        defaultMessage: `This tab couldn’t be restored`,
        description: `Title shown when a persisted tab cannot be restored`,
      })),
      (t[7] = h))
    : (h = t[7]);
  let g;
  return (
    t[8] !== u || t[9] !== d
      ? ((g = (0, p.jsx)(s, {
          className: `h-full`,
          actions: u,
          description: d,
          illustration: m,
          illustrationSize: `icon`,
          title: h,
        })),
        (t[8] = u),
        (t[9] = d),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
var f, p;
e(() => {
  ((f = u()), o(), t(), i(), r(), (p = c()));
})();
export { d as UnrestoredThreadTabRoute };
//# sourceMappingURL=unrestored-thread-tab-route-51d605a80a8f.js.map
