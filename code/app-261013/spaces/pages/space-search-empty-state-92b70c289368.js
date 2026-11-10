import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EQ as t,
  IDt as n,
  Mz as r,
  Nz as i,
  TQ as a,
  jDt as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import { ACn as l, jCn as u } from "./app-initial-5851df3f6cb1.js";
function d(e) {
  let i = (0, p.c)(4),
    { query: a } = e,
    o,
    s;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, m.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft`,
        children: (0, m.jsx)(r, { asset: t }),
      })),
      (s = (0, m.jsx)(`h2`, {
        children: (0, m.jsx)(n, {
          id: `search.empty.title`,
          defaultMessage: `No results found`,
          description: `Heading when a search in a content collection has no matching items`,
        }),
      })),
      (i[0] = o),
      (i[1] = s))
    : ((o = i[0]), (s = i[1]));
  let c;
  return (
    i[2] === a
      ? (c = i[3])
      : ((c = (0, m.jsx)(l, {
          className: `max-w-80 self-center wrap-anywhere select-none`,
          layout: `page`,
          spacing: `default`,
          illustration: o,
          title: s,
          description: (0, m.jsx)(n, {
            id: `spaceSearch.empty.descriptionWithQuery`,
            defaultMessage: `No matches for “{query}”. <guidance>Try a different search.</guidance>`,
            description: `Guidance when a Space or Sites search has no matching items. query is the text the user searched for. The guidance tag places the suggestion on a separate line below the no-matches sentence.`,
            values: { query: a, guidance: f },
          }),
        })),
        (i[2] = a),
        (i[3] = c)),
    c
  );
}
function f(e) {
  return (0, m.jsx)(`span`, { className: `block`, children: e });
}
var p, m;
function h() {
  return (h = e(() => {
    ((p = s()), a(), o(), i(), u(), (m = c()));
  }))();
}
export { h as n, d as t };
//# sourceMappingURL=space-search-empty-state-92b70c289368.js.map
