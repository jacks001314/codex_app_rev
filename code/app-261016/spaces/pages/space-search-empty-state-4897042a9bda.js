import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  D$ as t,
  DB as n,
  LNt as r,
  O$ as i,
  OB as a,
  PBt as o,
  XOt as s,
  tkt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import { XEn as l, YEn as u } from "./app-initial-ad16eaadf81f.js";
function d(e) {
  let t = (0, p.c)(4),
    { query: r } = e,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, m.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft`,
        children: (0, m.jsx)(n, { asset: i }),
      })),
      (o = (0, m.jsx)(`h2`, {
        children: (0, m.jsx)(c, {
          id: `search.empty.title`,
          defaultMessage: `No results found`,
          description: `Heading when a search in a content collection has no matching items`,
        }),
      })),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s;
  return (
    t[2] === r
      ? (s = t[3])
      : ((s = (0, m.jsx)(u, {
          className: `max-w-80 self-center wrap-anywhere select-none`,
          layout: `page`,
          spacing: `default`,
          illustration: a,
          title: o,
          description: (0, m.jsx)(c, {
            id: `spaceSearch.empty.descriptionWithQuery`,
            defaultMessage: `No matches for “{query}”. <guidance>Try a different search.</guidance>`,
            description: `Guidance when a Space or Sites search has no matching items. query is the text the user searched for. The guidance tag places the suggestion on a separate line below the no-matches sentence.`,
            values: { query: r, guidance: f },
          }),
        })),
        (t[2] = r),
        (t[3] = s)),
    s
  );
}
function f(e) {
  return (0, m.jsx)(`span`, { className: `block`, children: e });
}
var p, m;
function h() {
  return (h = e(() => {
    ((p = o()), t(), s(), a(), l(), (m = r()));
  }))();
}
export { h as n, d as t };
//# sourceMappingURL=space-search-empty-state-4897042a9bda.js.map
