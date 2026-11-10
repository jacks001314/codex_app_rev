import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n } from "./app-shared-2feb3d4c6fcc.js";
import { Ilt as r, hut as i, mut as a, zlt as o } from "./app-initial-ad16eaadf81f.js";
function s(e) {
  let t = (0, c.c)(17),
    { children: n, navigation: i, search: o, layout: s } = e,
    u = s === void 0 ? `wrap` : s,
    d;
  t[0] !== u || t[1] !== o
    ? ((d =
        o == null
          ? null
          : (0, l.jsx)(a, {
              ...o,
              className: u === `tabs` ? `w-full max-w-full @md:w-40 @md:justify-self-end` : `w-40 max-w-full`,
              variant: `toolbar-action`,
            })),
      (t[0] = u),
      (t[1] = o),
      (t[2] = d))
    : (d = t[2]);
  let f = d;
  if (u === `tabs`) {
    let e;
    t[3] !== n || t[4] !== o || t[5] !== f
      ? ((e =
          o != null || n != null
            ? (0, l.jsxs)(`div`, {
                className: `grid min-w-0 items-center gap-2 @md:grid-cols-[minmax(0,1fr)_auto]`,
                children: [
                  f,
                  (0, l.jsx)(`div`, {
                    className: `flex min-w-0 flex-wrap items-center justify-end gap-2`,
                    children: n,
                  }),
                ],
              })
            : null),
        (t[3] = n),
        (t[4] = o),
        (t[5] = f),
        (t[6] = e))
      : (e = t[6]);
    let r;
    return (
      t[7] !== i || t[8] !== e
        ? ((r = (0, l.jsx)(`div`, {
            className: `@container`,
            children: (0, l.jsxs)(`div`, {
              className: `grid items-start gap-4 pb-2 @2xl:grid-cols-[auto_minmax(0,1fr)]`,
              children: [i, e],
            }),
          })),
          (t[7] = i),
          (t[8] = e),
          (t[9] = r))
        : (r = t[9]),
      r
    );
  }
  let p;
  t[10] !== n || t[11] !== o || t[12] !== f
    ? ((p =
        o != null || n != null
          ? (0, l.jsxs)(`div`, {
              className: `flex min-w-0 flex-wrap items-center justify-end gap-2`,
              children: [f, n],
            })
          : null),
      (t[10] = n),
      (t[11] = o),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== i || t[15] !== p
      ? ((m = (0, l.jsxs)(r, { inset: !1, wrap: !0, children: [i, p] })),
        (t[14] = i),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = n()), i(), o(), (l = t()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=cloud-settings-toolbar-f4dd9fd3b411.js.map
