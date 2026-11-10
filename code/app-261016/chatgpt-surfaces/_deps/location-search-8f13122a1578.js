import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, okt as i } from "./app-shared-2feb3d4c6fcc.js";
import { C1n as a, s1n as o, uYn as s } from "./app-initial-ad16eaadf81f.js";
import { i as c, n as l, r as u, t as d } from "./inline-link-1fab6bef5499.js";
function f(e) {
  let t = (0, p.c)(13),
    { reference: n } = e,
    r = i(),
    a;
  t[0] === n ? (a = t[1]) : ((a = u(n)), (t[0] = n), (t[1] = a));
  let c = a,
    l;
  t[2] === n.provider ? (l = t[3]) : ((l = s(n.provider)), (t[2] = n.provider), (t[3] = l));
  let f = l,
    v;
  t[4] !== r || t[5] !== f || t[6] !== n
    ? ((v =
        f === `google_maps`
          ? h
          : (o(n) ??
            r.formatMessage({
              id: `chatgpt.contentReferences.locationSearch.maps`,
              defaultMessage: `Maps`,
              description: `Fallback label for a location search citation link`,
            }))),
      (t[4] = r),
      (t[5] = f),
      (t[6] = n),
      (t[7] = v))
    : (v = t[7]);
  let y = v,
    b = `${g}${y}${_}`;
  if (c == null) {
    let e;
    return (t[8] === b ? (e = t[9]) : ((e = (0, m.jsx)(`span`, { children: b })), (t[8] = b), (t[9] = e)), e);
  }
  let x;
  return (
    t[10] !== c || t[11] !== y
      ? ((x = (0, m.jsxs)(`span`, { children: [g, (0, m.jsx)(d, { href: c, children: y }), _] })),
        (t[10] = c),
        (t[11] = y),
        (t[12] = x))
      : (x = t[12]),
    x
  );
}
var p, m, h, g, _;
function v() {
  return (v = e(() => {
    ((p = n()), a(), r(), c(), l(), (m = t()), (h = `Google Maps`), (g = ` (`), (_ = `) `));
  }))();
}
v();
export { f as ChatGptLocationSearch };
//# sourceMappingURL=location-search-8f13122a1578.js.map
