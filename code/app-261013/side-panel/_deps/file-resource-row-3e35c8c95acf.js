import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  PA as n,
  WA as r,
  _Mt as i,
  dk as a,
  gMt as o,
  jDt as s,
  lk as c,
  qA as l,
  vzt as u,
  xMt as d,
} from "./app-shared-bbfeca5e5737.js";
import { _Pn as f, hPn as p, vPn as m } from "./app-initial-5851df3f6cb1.js";
function h(e) {
  let n = (0, _.c)(21),
    { fileName: r, fallbackSubtitle: i, subtitle: a, showOpenPreview: s, trailing: l } = e,
    u = s === void 0 || s,
    d;
  n[0] === r ? (d = n[1]) : ((d = c(r)), (n[0] = r), (n[1] = d));
  let m = d,
    h =
      u &&
      `peer-hover/resource-card:[&_.end-resource-default-subtitle]:hidden peer-hover/resource-card:[&_.end-resource-hover-subtitle]:inline-flex`,
    y;
  n[2] === h ? (y = n[3]) : ((y = o(`pointer-events-none relative z-10`, h)), (n[2] = h), (n[3] = y));
  let b;
  n[4] === m
    ? (b = n[5])
    : ((b = (0, v.jsx)(p, { children: (0, v.jsx)(m, { className: `size-6` }) })), (n[4] = m), (n[5] = b));
  let x;
  n[6] !== i || n[7] !== r || n[8] !== a
    ? ((x = a ?? (0, v.jsx)(g, { fileName: r, fallback: i })), (n[6] = i), (n[7] = r), (n[8] = a), (n[9] = x))
    : (x = n[9]);
  let S;
  n[10] === x
    ? (S = n[11])
    : ((S = (0, v.jsx)(`span`, { className: `end-resource-default-subtitle`, children: x })),
      (n[10] = x),
      (n[11] = S));
  let C;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, v.jsx)(`span`, {
        className: `end-resource-hover-subtitle hidden items-center gap-1`,
        children: (0, v.jsx)(t, {
          id: `localConversation.endResource.openPreview`,
          defaultMessage: `Open preview`,
          description: `Hover subtitle for opening a conversation resource preview`,
        }),
      })),
      (n[12] = C))
    : (C = n[12]);
  let w;
  n[13] === S ? (w = n[14]) : ((w = (0, v.jsxs)(v.Fragment, { children: [S, C] })), (n[13] = S), (n[14] = w));
  let T;
  return (
    n[15] !== r || n[16] !== y || n[17] !== b || n[18] !== w || n[19] !== l
      ? ((T = (0, v.jsx)(f, { className: y, icon: b, title: r, subtitle: w, trailing: l })),
        (n[15] = r),
        (n[16] = y),
        (n[17] = b),
        (n[18] = w),
        (n[19] = l),
        (n[20] = T))
      : (T = n[20]),
    T
  );
}
function g(e) {
  let n = (0, _.c)(8),
    { fileName: i, fallback: a } = e,
    o,
    s,
    c;
  if (n[0] !== a || n[1] !== i) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = l({ fileName: i });
      if (e.category === `file` && a != null) {
        c = a;
        break bb0;
      }
      ((o = t), (s = r(e.category, e.iconKey)));
    }
    ((n[0] = a), (n[1] = i), (n[2] = o), (n[3] = s), (n[4] = c));
  } else ((o = n[2]), (s = n[3]), (c = n[4]));
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  let u;
  return (
    n[5] !== o || n[6] !== s
      ? ((u = (0, v.jsx)(o, { ...s })), (n[5] = o), (n[6] = s), (n[7] = u))
      : (u = n[7]),
    u
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = u()), n(), i(), s(), m(), a(), (v = d()));
  }))();
}
export { y as n, h as t };
//# sourceMappingURL=file-resource-row-3e35c8c95acf.js.map
