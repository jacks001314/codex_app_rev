import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, MD as n, ND as r, PBt as i, eB as a, tB as o } from "./app-shared-2feb3d4c6fcc.js";
import { Enn as s, M6t as c, N6t as l, Tnn as u } from "./app-initial-ad16eaadf81f.js";
function d(e) {
  let t = (0, f.c)(9),
    { plugin: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, p.jsx)(`span`, {
        className: `flex size-14 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-sm`,
        children: (0, p.jsx)(a, { className: `size-12` }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, p.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [
          (0, p.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, p.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, p.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
        ],
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === r ? (s = t[3]) : ((s = u(r)), (t[2] = r), (t[3] = s));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, p.jsx)(n, { className: `icon-md text-secondary` })), (t[4] = l))
    : (l = t[4]);
  let d;
  return (
    t[5] !== r.logoDarkPath || t[6] !== r.logoPath || t[7] !== s
      ? ((d = (0, p.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            i,
            o,
            (0, p.jsx)(`span`, {
              className: `flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-default shadow-sm`,
              children: (0, p.jsx)(c, {
                alt: s,
                className: `size-full object-contain`,
                logoDarkUrl: r.logoDarkPath,
                logoUrl: r.logoPath,
                fallback: l,
              }),
            }),
          ],
        })),
        (t[5] = r.logoDarkPath),
        (t[6] = r.logoPath),
        (t[7] = s),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = i()), s(), l(), r(), o(), (p = t()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=plugin-install-logo-row-f7ef06c8f492.js.map
