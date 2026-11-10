import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, ZSt as r, nCt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  $H as a,
  Ddn as o,
  FH as s,
  IH as c,
  Odn as l,
  ZH as u,
  hdn as d,
  nU as f,
  tU as p,
  vdn as m,
} from "./app-initial-ad16eaadf81f.js";
import { n as h, t as g } from "./sharing-dialog-c0de458ff391.js";
function _(e) {
  let t = (0, v.c)(20),
    n = i(m, e.pageId),
    { space: r, isDriveBacked: a, isSpaceRoot: c } = i(l, e.pageId),
    d = a === !0 ? (n?.drive_space_id ?? r?.id) : void 0,
    f = a == null,
    h;
  t[0] === f ? (h = t[1]) : ((h = { enabled: f }), (t[0] = f), (t[1] = h));
  let _ = i(o, e.pageId, h);
  if (a !== !0 || (d == null && n?.drive_scope !== `personal`)) {
    let n;
    t[2] === e.pageId
      ? (n = t[3])
      : ((n = (0, y.jsx)(s, { kind: `page`, id: e.pageId })), (t[2] = e.pageId), (t[3] = n));
    let r = !_?.isError && a == null,
      i;
    t[4] === _
      ? (i = t[5])
      : ((i = (0, y.jsx)(p, { isLoading: !1, onRetry: () => void _?.refetch() })), (t[4] = _), (t[5] = i));
    let o;
    return (
      t[6] !== n || t[7] !== r || t[8] !== i
        ? ((o = (0, y.jsx)(u, { title: n, isLoading: r, children: i })),
          (t[6] = n),
          (t[7] = r),
          (t[8] = i),
          (t[9] = o))
        : (o = t[9]),
      o
    );
  }
  let b;
  t[10] !== d || t[11] !== c || t[12] !== e.pageId
    ? ((b = d != null && c === !0 ? { type: `space`, id: d } : { type: `page`, id: e.pageId }),
      (t[10] = d),
      (t[11] = c),
      (t[12] = e.pageId),
      (t[13] = b))
    : (b = t[13]);
  let x;
  return (
    t[14] !== e.comments ||
    t[15] !== e.onClose ||
    t[16] !== e.pageId ||
    t[17] !== e.requestAccess ||
    t[18] !== b
      ? ((x = (0, y.jsx)(g, {
          target: b,
          pageId: e.pageId,
          comments: e.comments,
          requestAccess: e.requestAccess,
          onClose: e.onClose,
        })),
        (t[14] = e.comments),
        (t[15] = e.onClose),
        (t[16] = e.pageId),
        (t[17] = e.requestAccess),
        (t[18] = b),
        (t[19] = x))
      : (x = t[19]),
    x
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = n()), r(), h(), c(), d(), a(), f(), (y = t()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=page-sharing-a042ad1212b1.js.map
