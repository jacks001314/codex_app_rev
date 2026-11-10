import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  YA as t,
  ZA as n,
  _Mt as r,
  gMt as i,
  vzt as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import { GF as c, WF as l, Xl as u, Zl as d, nc as f, rc as p } from "./app-initial-5851df3f6cb1.js";
import { Us as m, Ws as h } from "./app-primary-fe8a450b3b04.js";
function g(e) {
  let t = (0, v.c)(19),
    { imageAspectClassName: n, subtitle: r, thumbnailUrl: a, title: o, url: s } = e,
    c = n === void 0 ? `aspect-[4/3]` : n,
    d = p(),
    f = (0, y.useContext)(u),
    m = d?.shouldBlockExternalEgress === !0 || f === `restricted`,
    h;
  t[0] !== c || t[1] !== m || t[2] !== a || t[3] !== o || t[4] !== s
    ? ((h =
        a == null
          ? (0, b.jsx)(`div`, {
              className: i(
                c,
                `flex w-20 shrink-0 items-center justify-center rounded bg-surface-secondary/85`,
              ),
              children: s == null ? null : (0, b.jsx)(l, { className: `icon-md`, href: s, loadRemote: !m }),
            })
          : m
            ? (0, b.jsx)(`div`, { className: i(c, `w-20 shrink-0 rounded bg-surface-secondary/85`) })
            : (0, b.jsx)(`img`, {
                alt: o,
                className: i(c, `m-0 w-20 shrink-0 rounded object-cover`),
                src: a,
              })),
      (t[0] = c),
      (t[1] = m),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] === o
    ? (g = t[7])
    : ((g = (0, b.jsx)(`div`, { className: `line-clamp-2 font-medium text-default`, children: o })),
      (t[6] = o),
      (t[7] = g));
  let x;
  t[8] === r
    ? (x = t[9])
    : ((x =
        r == null ? null : (0, b.jsx)(`div`, { className: `mt-1 line-clamp-2 text-secondary`, children: r })),
      (t[8] = r),
      (t[9] = x));
  let S;
  t[10] !== g || t[11] !== x
    ? ((S = (0, b.jsxs)(`div`, { className: `min-w-0`, children: [g, x] })),
      (t[10] = g),
      (t[11] = x),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] !== h || t[14] !== S
    ? ((C = (0, b.jsxs)(`div`, {
        className: `flex min-w-0 gap-3 rounded-md border border-subtle bg-surface-secondary p-2`,
        children: [h, S],
      })),
      (t[13] = h),
      (t[14] = S),
      (t[15] = C))
    : (C = t[15]);
  let w = C,
    T;
  return (
    t[16] !== w || t[17] !== s
      ? ((T = s == null ? w : (0, b.jsx)(_, { className: `block no-underline`, href: s, children: w })),
        (t[16] = w),
        (t[17] = s),
        (t[18] = T))
      : (T = t[18]),
    T
  );
}
function _(e) {
  let n = (0, v.c)(9),
    { ref: r, children: a, className: o, href: s } = e,
    c;
  n[0] === s ? (c = n[1]) : ((c = s == null ? null : t(s)), (n[0] = s), (n[1] = c));
  let l = c;
  if (l == null) return null;
  let u;
  n[2] === o ? (u = n[3]) : ((u = i(`cursor-interaction`, o)), (n[2] = o), (n[3] = u));
  let d;
  return (
    n[4] !== a || n[5] !== r || n[6] !== l || n[7] !== u
      ? ((d = (0, b.jsx)(m, {
          ref: r,
          className: u,
          href: l,
          initiator: `markdown_link_click`,
          children: a,
        })),
        (n[4] = a),
        (n[5] = r),
        (n[6] = l),
        (n[7] = u),
        (n[8] = d))
      : (d = n[8]),
    d
  );
}
var v, y, b;
function x() {
  return (x = e(() => {
    ((v = a()), r(), (y = s()), c(), n(), d(), h(), f(), (b = o()));
  }))();
}
export { _ as n, x as r, g as t };
//# sourceMappingURL=linked-reference-91f472d65bce.js.map
