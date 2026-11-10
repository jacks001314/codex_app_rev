import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { VDt as t, jDt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { HXn as a, VGn as o, iZn as s } from "./app-initial-5851df3f6cb1.js";
import { i as c, n as l, r as u, t as d } from "./inline-link-aa89c0848eb0.js";
function f(e) {
  let n = (0, p.c)(13),
    { reference: r } = e,
    i = t(),
    s;
  n[0] === r ? (s = n[1]) : ((s = u(r)), (n[0] = r), (n[1] = s));
  let c = s,
    l;
  n[2] === r.provider ? (l = n[3]) : ((l = o(r.provider)), (n[2] = r.provider), (n[3] = l));
  let f = l,
    v;
  n[4] !== i || n[5] !== f || n[6] !== r
    ? ((v =
        f === `google_maps`
          ? h
          : (a(r) ??
            i.formatMessage({
              id: `chatgpt.contentReferences.locationSearch.maps`,
              defaultMessage: `Maps`,
              description: `Fallback label for a location search citation link`,
            }))),
      (n[4] = i),
      (n[5] = f),
      (n[6] = r),
      (n[7] = v))
    : (v = n[7]);
  let y = v,
    b = `${g}${y}${_}`;
  if (c == null) {
    let e;
    return (n[8] === b ? (e = n[9]) : ((e = (0, m.jsx)(`span`, { children: b })), (n[8] = b), (n[9] = e)), e);
  }
  let x;
  return (
    n[10] !== c || n[11] !== y
      ? ((x = (0, m.jsxs)(`span`, { children: [g, (0, m.jsx)(d, { href: c, children: y }), _] })),
        (n[10] = c),
        (n[11] = y),
        (n[12] = x))
      : (x = n[12]),
    x
  );
}
var p, m, h, g, _;
function v() {
  return (v = e(() => {
    ((p = r()), s(), n(), c(), l(), (m = i()), (h = `Google Maps`), (g = ` (`), (_ = `) `));
  }))();
}
v();
export { f as ChatGptLocationSearch };
//# sourceMappingURL=location-search-e7c76651b219.js.map
