import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { aD as t, az as n, iD as r, oz as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { Idn as s, Ldn as c, hzt as l, mzt as u } from "./app-initial-5851df3f6cb1.js";
function d(e) {
  let t = (0, f.c)(9),
    { plugin: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, p.jsx)(`span`, {
        className: `flex size-14 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-sm`,
        children: (0, p.jsx)(n, { className: `size-12` }),
      })),
      (t[0] = a))
    : (a = t[0]);
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
  let c;
  t[2] === i ? (c = t[3]) : ((c = s(i)), (t[2] = i), (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, p.jsx)(r, { className: `icon-md text-secondary` })), (t[4] = l))
    : (l = t[4]);
  let d;
  return (
    t[5] !== i.logoDarkPath || t[6] !== i.logoPath || t[7] !== c
      ? ((d = (0, p.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            a,
            o,
            (0, p.jsx)(`span`, {
              className: `flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-default shadow-sm`,
              children: (0, p.jsx)(u, {
                alt: c,
                className: `size-full object-contain`,
                logoDarkUrl: i.logoDarkPath,
                logoUrl: i.logoPath,
                fallback: l,
              }),
            }),
          ],
        })),
        (t[5] = i.logoDarkPath),
        (t[6] = i.logoPath),
        (t[7] = c),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = a()), c(), l(), t(), i(), (p = o()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=plugin-install-logo-row-ae4a9223315e.js.map
