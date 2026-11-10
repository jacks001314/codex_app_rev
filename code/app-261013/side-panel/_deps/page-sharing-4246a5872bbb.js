import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, vzt as n, xMt as r, zxt as i } from "./app-shared-bbfeca5e5737.js";
import {
  CV as a,
  Nsn as o,
  Psn as s,
  SV as c,
  bV as l,
  nV as u,
  rV as d,
  vV as f,
  wsn as p,
  xsn as m,
} from "./app-initial-5851df3f6cb1.js";
import { n as h, t as g } from "./sharing-dialog-184219d7c3ed.js";
function _(e) {
  let t = (0, v.c)(20),
    n = i(p, e.pageId),
    { space: r, isDriveBacked: a, isSpaceRoot: l } = i(s, e.pageId),
    d = a === !0 ? (n?.drive_space_id ?? r?.id) : void 0,
    m = a == null,
    h;
  t[0] === m ? (h = t[1]) : ((h = { enabled: m }), (t[0] = m), (t[1] = h));
  let _ = i(o, e.pageId, h);
  if (a !== !0 || (d == null && n?.drive_scope !== `personal`)) {
    let n;
    t[2] === e.pageId
      ? (n = t[3])
      : ((n = (0, y.jsx)(u, { kind: `page`, id: e.pageId })), (t[2] = e.pageId), (t[3] = n));
    let r = !_?.isError && a == null,
      i;
    t[4] === _
      ? (i = t[5])
      : ((i = (0, y.jsx)(c, { isLoading: !1, onRetry: () => void _?.refetch() })), (t[4] = _), (t[5] = i));
    let o;
    return (
      t[6] !== n || t[7] !== r || t[8] !== i
        ? ((o = (0, y.jsx)(f, { title: n, isLoading: r, children: i })),
          (t[6] = n),
          (t[7] = r),
          (t[8] = i),
          (t[9] = o))
        : (o = t[9]),
      o
    );
  }
  let b;
  t[10] !== d || t[11] !== l || t[12] !== e.pageId
    ? ((b = d != null && l === !0 ? { type: `space`, id: d } : { type: `page`, id: e.pageId }),
      (t[10] = d),
      (t[11] = l),
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
    ((v = n()), t(), h(), d(), m(), l(), a(), (y = r()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=page-sharing-4246a5872bbb.js.map
