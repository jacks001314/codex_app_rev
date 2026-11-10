import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, Y3 as i, Z3 as a, tkt as o } from "./app-shared-2feb3d4c6fcc.js";
import { XEn as s, YEn as c } from "./app-initial-ad16eaadf81f.js";
import { Hy as l, Uy as u } from "./app-primary-3e00728c2a4c.js";
function d(e) {
  let t = (0, f.c)(11),
    { onClose: n, routeKind: r, routeResourceLabel: a } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, p.jsx)(o, {
        id: `threadTabRoute.unrestored.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Button label that dismisses a tab which could not be restored`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let u;
  t[1] === n
    ? (u = t[2])
    : ((u = (0, p.jsx)(i, { color: `secondary`, onClick: n, children: s })), (t[1] = n), (t[2] = u));
  let d;
  t[3] !== r || t[4] !== a
    ? ((d =
        a == null
          ? (0, p.jsx)(o, {
              id: `threadTabRoute.unrestored.routeKind`,
              defaultMessage: `Saved tab type: {routeKind}`,
              description: `Description identifying the type of a persisted tab that could not be restored`,
              values: { routeKind: r },
            })
          : (0, p.jsx)(o, {
              id: `threadTabRoute.unrestored.routeResource`,
              defaultMessage: `Saved tab: {routeKind} — {routeResource}`,
              description: `Description identifying the type and resource of a persisted tab that could not be restored`,
              values: { routeKind: r, routeResource: a },
            })),
      (t[3] = r),
      (t[4] = a),
      (t[5] = d))
    : (d = t[5]);
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = (0, p.jsx)(l, {})), (t[6] = m)) : (m = t[6]);
  let h;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, p.jsx)(o, {
        id: `threadTabRoute.unrestored.title`,
        defaultMessage: `This tab couldn’t be restored`,
        description: `Title shown when a persisted tab cannot be restored`,
      })),
      (t[7] = h))
    : (h = t[7]);
  let g;
  return (
    t[8] !== u || t[9] !== d
      ? ((g = (0, p.jsx)(c, {
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
function m() {
  return (m = e(() => {
    ((f = n()), r(), a(), s(), u(), (p = t()));
  }))();
}
m();
export { d as UnrestoredThreadTabRoute };
//# sourceMappingURL=unrestored-thread-tab-route-4bc7beb43c76.js.map
