import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Cit as r,
  Rpn as i,
  Xst as a,
  Zst as o,
  dct as s,
  fct as c,
  hct as l,
  hmn as u,
  kmn as d,
  mct as f,
  pct as p,
  uct as m,
  xit as h,
  zpn as g,
} from "./app-initial-f094ef01c64d.js";
function _(e) {
  let t = (0, v.c)(8),
    { className: n, resourceKind: r } = e;
  switch (r) {
    case `document`: {
      let e;
      return (
        t[0] === n ? (e = t[1]) : ((e = (0, y.jsx)(f, { className: n })), (t[0] = n), (t[1] = e)), e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[2] === n ? (e = t[3]) : ((e = (0, y.jsx)(c, { className: n })), (t[2] = n), (t[3] = e)), e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[4] === n ? (e = t[5]) : ((e = (0, y.jsx)(m, { className: n })), (t[4] = n), (t[5] = e)), e
      );
    }
    case `drive`: {
      let e;
      return (
        t[6] === n ? (e = t[7]) : ((e = (0, y.jsx)(a, { className: n })), (t[6] = n), (t[7] = e)), e
      );
    }
  }
}
var v,
  y,
  b = e(() => {
    ((v = d()), l(), p(), s(), o(), (y = u()));
  });
function x(e) {
  let t = (0, S.c)(18),
    { getImagePreviewSrc: n, iconClassName: r, imageClassName: a, path: o } = e,
    s;
  t[0] !== n || t[1] !== o
    ? ((s = n?.(o) ?? null), (t[0] = n), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let c = s,
    [l, u] = (0, C.useState)(null);
  if (c != null && c !== l) {
    let e;
    t[3] === a ? (e = t[4]) : ((e = i(`shrink-0 object-cover`, a)), (t[3] = a), (t[4] = e));
    let n;
    t[5] === c ? (n = t[6]) : ((n = () => u(c)), (t[5] = c), (t[6] = n));
    let r;
    return (
      t[7] !== c || t[8] !== e || t[9] !== n
        ? ((r = (0, w.jsx)(`img`, { alt: ``, className: e, src: c, onError: n })),
          (t[7] = c),
          (t[8] = e),
          (t[9] = n),
          (t[10] = r))
        : (r = t[10]),
      r
    );
  }
  let d;
  t[11] === o ? (d = t[12]) : ((d = h(o)), (t[11] = o), (t[12] = d));
  let f = d,
    p;
  t[13] === r ? (p = t[14]) : ((p = i(`shrink-0`, r)), (t[13] = r), (t[14] = p));
  let m;
  return (
    t[15] !== f || t[16] !== p
      ? ((m = (0, w.jsx)(f, { className: p })), (t[15] = f), (t[16] = p), (t[17] = m))
      : (m = t[17]),
    m
  );
}
var S,
  C,
  w,
  T = e(() => {
    ((S = d()), g(), (C = t(n(), 1)), r(), (w = u()));
  });
export { b as i, T as n, _ as r, x as t };
//# sourceMappingURL=artifact-file-preview-icon-70a3fde11749.js.map
