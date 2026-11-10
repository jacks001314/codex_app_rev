import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  vzt as a,
  wot as o,
  xMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as l,
  JMr as u,
  QOt as d,
  Vpr as f,
  WMr as p,
  XMr as m,
  XR as h,
  YR as g,
  ZOt as _,
  lK as v,
  tNr as y,
  uK as b,
  zpr as x,
} from "./app-initial-5851df3f6cb1.js";
function S(e) {
  let r = (0, T.c)(17),
    { roomId: a, messageId: o, bodyText: s } = e,
    c = n(t),
    d = i(x),
    f = i(u),
    h = i(l),
    g = i(m),
    y = i(p),
    b = i(_),
    S = y.status === `loaded` && y.structure === `personal` ? g : b?.accountUserId;
  if (!d || !f || y.status !== `loaded` || h == null || g == null || S == null) return null;
  let w;
  r[0] !== h || r[1] !== S || r[2] !== o || r[3] !== a || r[4] !== g
    ? ((w = JSON.stringify([h, g, S, a, o])),
      (r[0] = h),
      (r[1] = S),
      (r[2] = o),
      (r[3] = a),
      (r[4] = g),
      (r[5] = w))
    : (w = r[5]);
  let E;
  r[6] !== h || r[7] !== S || r[8] !== a || r[9] !== c || r[10] !== g
    ? ((E = v(c, { accountId: h, userId: g, accountUserId: S, roomId: a }, `orbit`)),
      (r[6] = h),
      (r[7] = S),
      (r[8] = a),
      (r[9] = c),
      (r[10] = g),
      (r[11] = E))
    : (E = r[11]);
  let O;
  return (
    r[12] !== s || r[13] !== o || r[14] !== w || r[15] !== E
      ? ((O = (0, D.jsx)(C, { performance: E, messageId: o, bodyText: s }, w)),
        (r[12] = s),
        (r[13] = o),
        (r[14] = w),
        (r[15] = E),
        (r[16] = O))
      : (O = r[16]),
    O
  );
}
function C(e) {
  let t = (0, T.c)(15),
    { performance: n, messageId: r, bodyText: i } = e,
    [a] = (0, E.useState)(w),
    o,
    s;
  (t[0] !== a || t[1] !== n
    ? ((o = () => () => n.release(a)), (s = [a, n]), (t[0] = a), (t[1] = n), (t[2] = o), (t[3] = s))
    : ((o = t[2]), (s = t[3])),
    (0, E.useLayoutEffect)(o, s));
  let c;
  t[4] !== i || t[5] !== r || t[6] !== a || t[7] !== n
    ? ((c = () => {
        (n.setActive(!0, a), n.observeRenderedMessage(r, i), n.committed(r));
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = a),
      (t[7] = n),
      (t[8] = c))
    : (c = t[8]);
  let l;
  t[9] !== r || t[10] !== n
    ? ((l = () => n.paintOpportunity(r)), (t[9] = r), (t[10] = n), (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] !== c || t[13] !== l
      ? ((u = (0, D.jsx)(g, { onCommit: c, onPaint: l, requireVisibleAtPaint: !0 })),
        (t[12] = c),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function w() {
  return {};
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = a()), r(), (E = c()), y(), d(), h(), o(), f(), b(), (D = s()));
  }))();
}
export { O as n, S as t };
//# sourceMappingURL=observed-message-performance-marker-47108f484504.js.map
