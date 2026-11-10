import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { DB as t, LNt as n, OB as r, PBt as i, SX as a, xX as o } from "./app-shared-2feb3d4c6fcc.js";
import { i as s, r as c } from "./writing-block-surface-2bef314d86c0.js";
function l(e) {
  let n = (0, u.c)(13),
    { actions: r, children: i, icon: o, title: s } = e,
    l;
  n[0] === o
    ? (l = n[1])
    : ((l = o ?? (0, d.jsx)(t, { asset: a, className: `text-info` })), (n[0] = o), (n[1] = l));
  let f;
  n[2] === l
    ? (f = n[3])
    : ((f = (0, d.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-secondary/92`,
        children: l,
      })),
      (n[2] = l),
      (n[3] = f));
  let p;
  n[4] === s
    ? (p = n[5])
    : ((p = (0, d.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate text-base leading-6 font-medium text-default`,
        children: s,
      })),
      (n[4] = s),
      (n[5] = p));
  let m;
  n[6] !== r || n[7] !== f || n[8] !== p
    ? ((m = (0, d.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3 p-4 select-none`,
        children: [f, p, r],
      })),
      (n[6] = r),
      (n[7] = f),
      (n[8] = p),
      (n[9] = m))
    : (m = n[9]);
  let h;
  return (
    n[10] !== i || n[11] !== m
      ? ((h = (0, d.jsxs)(c, { className: `my-4`, children: [m, i] })), (n[10] = i), (n[11] = m), (n[12] = h))
      : (h = n[12]),
    h
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = i()), o(), r(), s(), (d = n()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=document-card-68dcf18a748a.js.map
