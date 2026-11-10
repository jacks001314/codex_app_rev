import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as t,
  Kst as n,
  Spn as r,
  hmn as i,
  kmn as a,
  qst as o,
} from "./app-initial-f094ef01c64d.js";
import { IT as s, LT as c } from "./app-primary-4c40d73a1074.js";
function l(e) {
  let r = (0, u.c)(12),
    { liveUrl: i, title: a } = e,
    o;
  r[0] === i ? (o = r[1]) : ((o = s(i)), (r[0] = i), (r[1] = o));
  let c = o,
    l;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, d.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center`,
        children: (0, d.jsx)(n, { className: `icon-md` }),
      })),
      (r[2] = l))
    : (l = r[2]);
  let f;
  r[3] === a
    ? (f = r[4])
    : ((f = (0, d.jsx)(`div`, {
        className: `truncate text-sm font-medium text-default`,
        children: a,
      })),
      (r[3] = a),
      (r[4] = f));
  let p;
  r[5] === c
    ? (p = r[6])
    : ((p =
        c ??
        (0, d.jsx)(t, {
          id: `appgenShareDialog.site.notPublished`,
          defaultMessage: `Not published yet`,
          description: `Label in a Site card for a site without a published URL`,
        })),
      (r[5] = c),
      (r[6] = p));
  let m;
  r[7] === p
    ? (m = r[8])
    : ((m = (0, d.jsx)(`div`, { className: `truncate text-xs text-tertiary`, children: p })),
      (r[7] = p),
      (r[8] = m));
  let h;
  return (
    r[9] !== f || r[10] !== m
      ? ((h = (0, d.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg bg-surface-secondary/92 p-3`,
          children: [
            l,
            (0, d.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [f, m] }),
          ],
        })),
        (r[9] = f),
        (r[10] = m),
        (r[11] = h))
      : (h = r[11]),
    h
  );
}
var u,
  d,
  f = e(() => {
    ((u = a()), r(), o(), c(), (d = i()));
  });
export { f as n, l as t };
//# sourceMappingURL=appgen-site-card-086b2aabeb08.js.map
