import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  LNt as r,
  PBt as i,
  Qst as a,
  ZSt as o,
  iCt as s,
  nCt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as l,
  Ddn as u,
  Odn as d,
  VRr as f,
  Xz as p,
  Zz as m,
  gur as h,
  hdn as g,
  pur as _,
  wLr as v,
} from "./app-initial-ad16eaadf81f.js";
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
  let n = (0, S.c)(15),
    { pageId: r } = e,
    i = t(a),
    o = s(h),
    d = s(l),
    { accountUserId: m } = s(f),
    g;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = { enabled: !1 }), (n[0] = g)) : (g = n[0]);
  let { data: _ } = c(u, r, g);
  if (
    o == null ||
    _?.metadata.access.can_read !== !0 ||
    _.metadata.deleted_at != null ||
    _?.metadata.display_metadata_included !== !1
  )
    return null;
  let v;
  n[1] !== o || n[2] !== m || n[3] !== r || n[4] !== d
    ? ((v = JSON.stringify([o, d, m, r])), (n[1] = o), (n[2] = m), (n[3] = r), (n[4] = d), (n[5] = v))
    : (v = n[5]);
  let y;
  n[6] !== o || n[7] !== m || n[8] !== r || n[9] !== i || n[10] !== d
    ? ((y = () => {
        i.get(h) === o && i.get(l) === d && i.get(f).accountUserId === m && i.query.fetch(u, r).catch(x);
      }),
      (n[6] = o),
      (n[7] = m),
      (n[8] = r),
      (n[9] = i),
      (n[10] = d),
      (n[11] = y))
    : (y = n[11]);
  let b;
  return (
    n[12] !== v || n[13] !== y
      ? ((b = (0, C.jsx)(p, { requireVisibleAtPaint: !0, onPaint: y }, v)),
        (n[12] = v),
        (n[13] = y),
        (n[14] = b))
      : (b = n[14]),
    b
  );
}
function x() {}
var S, C;
function w() {
  return (w = e(() => {
    ((S = i()), o(), v(), m(), n(), _(), g(), (C = r()));
  }))();
}
export { w as n, y as t };
//# sourceMappingURL=page-ancestry-completion-11a1b143a7b0.js.map
