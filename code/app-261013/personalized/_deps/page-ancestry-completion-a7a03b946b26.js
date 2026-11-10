import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  vzt as a,
  wot as o,
  xMt as s,
  zxt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dor as l,
  Nsn as u,
  Psn as d,
  QMr as f,
  XMr as p,
  XR as m,
  YR as h,
  tNr as g,
  wor as _,
  xsn as v,
} from "./app-initial-5851df3f6cb1.js";
function y(e) {
  let t = (0, S.c)(3),
    { pageId: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = { enabled: !1 }), (t[0] = r)) : (r = t[0]);
  let { missingAncestorPageId: i } = c(d, n, r),
    a = i ?? n,
    o;
  return (t[1] === a ? (o = t[2]) : ((o = (0, C.jsx)(b, { pageId: a })), (t[1] = a), (t[2] = o)), o);
}
function b(e) {
  let r = (0, S.c)(15),
    { pageId: a } = e,
    o = n(t),
    s = i(l),
    d = i(p),
    { accountUserId: m } = i(f),
    g;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = { enabled: !1 }), (r[0] = g)) : (g = r[0]);
  let { data: _ } = c(u, a, g);
  if (
    s == null ||
    _?.metadata.access.can_read !== !0 ||
    _.metadata.deleted_at != null ||
    _?.metadata.display_metadata_included !== !1
  )
    return null;
  let v;
  r[1] !== s || r[2] !== m || r[3] !== a || r[4] !== d
    ? ((v = JSON.stringify([s, d, m, a])), (r[1] = s), (r[2] = m), (r[3] = a), (r[4] = d), (r[5] = v))
    : (v = r[5]);
  let y;
  r[6] !== s || r[7] !== m || r[8] !== a || r[9] !== o || r[10] !== d
    ? ((y = () => {
        o.get(l) === s && o.get(p) === d && o.get(f).accountUserId === m && o.query.fetch(u, a).catch(x);
      }),
      (r[6] = s),
      (r[7] = m),
      (r[8] = a),
      (r[9] = o),
      (r[10] = d),
      (r[11] = y))
    : (y = r[11]);
  let b;
  return (
    r[12] !== v || r[13] !== y
      ? ((b = (0, C.jsx)(h, { requireVisibleAtPaint: !0, onPaint: y }, v)),
        (r[12] = v),
        (r[13] = y),
        (r[14] = b))
      : (b = r[14]),
    b
  );
}
function x() {}
var S, C;
function w() {
  return (w = e(() => {
    ((S = a()), r(), g(), m(), o(), _(), v(), (C = s()));
  }))();
}
export { w as n, y as t };
//# sourceMappingURL=page-ancestry-completion-a7a03b946b26.js.map
