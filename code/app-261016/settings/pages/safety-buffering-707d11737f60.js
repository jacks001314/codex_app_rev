import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FNt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  RFt as s,
  SCt as c,
  Vrt as l,
  XOt as u,
  ZSt as d,
  iCt as f,
  nCt as p,
  qrt as m,
  tkt as h,
  zFt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as _,
  Fer as v,
  LPt as y,
  MPt as b,
  NPt as x,
  RPt as S,
  eer as C,
  kLr as w,
} from "./app-initial-ad16eaadf81f.js";
import { Xy as T, Zy as E, ab as D, ib as O } from "./app-primary-3e00728c2a4c.js";
function k(e) {
  let t = (0, M.c)(11),
    { children: n, conversationId: r } = e,
    i = p(v, r),
    a;
  if (
    (t[0] !== r || t[1] !== i
      ? ((a = { conversationId: r, hostId: i }), (t[0] = r), (t[1] = i), (t[2] = a))
      : (a = t[2]),
    p(D, a) == null)
  ) {
    let e;
    return (t[3] === n ? (e = t[4]) : ((e = n(null, !1)), (t[3] = n), (t[4] = e)), e);
  }
  let o;
  t[5] === n ? (o = t[6]) : ((o = (e) => n(e, e != null)), (t[5] = n), (t[6] = o));
  let s;
  return (
    t[7] !== r || t[8] !== i || t[9] !== o
      ? ((s = (0, P.jsx)(A, { conversationId: r, hostId: i, children: o })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
function A(e) {
  let n = (0, M.c)(23),
    { children: r, conversationId: i, hostId: a } = e,
    s = t(o),
    c;
  n[0] !== i || n[1] !== a
    ? ((c = { conversationId: i, hostId: a }), (n[0] = i), (n[1] = a), (n[2] = c))
    : (c = n[2]);
  let l = p(D, c);
  if (l == null) {
    let e;
    return (n[3] === r ? (e = n[4]) : ((e = r == null ? null : r(null)), (n[3] = r), (n[4] = e)), e);
  }
  let u;
  n[5] !== i || n[6] !== a || n[7] !== l.canRetry || n[8] !== l.turnId || n[9] !== s
    ? ((u = async (e) => {
        l.canRetry &&
          l.turnId != null &&
          (await S(s, a, i, l.turnId, e).catch((e) => {
            (g.error(`Failed to retry safety-buffered turn`, { safe: {}, sensitive: { error: e } }),
              s
                .get(m)
                .danger(
                  (0, P.jsx)(h, {
                    id: `safetyBuffering.retryFailed`,
                    defaultMessage: `Couldn’t retry with the faster model`,
                    description: `Error shown when a safety-buffered request cannot be retried with the suggested faster model`,
                  }),
                  { errorAnalytics: { toastId: `safetyBuffering.retryFailed` } },
                ));
          }));
      }),
      (n[5] = i),
      (n[6] = a),
      (n[7] = l.canRetry),
      (n[8] = l.turnId),
      (n[9] = s),
      (n[10] = u))
    : (u = n[10]);
  let d;
  return (
    n[11] !== r ||
    n[12] !== i ||
    n[13] !== a ||
    n[14] !== l.canRetry ||
    n[15] !== l.fasterModel ||
    n[16] !== l.isVisible ||
    n[17] !== l.reasons ||
    n[18] !== l.turnId ||
    n[19] !== l.turnKey ||
    n[20] !== l.useCases ||
    n[21] !== u
      ? ((d = (0, P.jsx)(j, {
          canRetry: l.canRetry,
          conversationId: i,
          fasterModel: l.fasterModel,
          hostId: a,
          isVisible: l.isVisible,
          onRetry: u,
          reasons: l.reasons,
          turnKey: l.turnKey,
          turnId: l.turnId,
          useCases: l.useCases,
          children: r,
        })),
        (n[11] = r),
        (n[12] = i),
        (n[13] = a),
        (n[14] = l.canRetry),
        (n[15] = l.fasterModel),
        (n[16] = l.isVisible),
        (n[17] = l.reasons),
        (n[18] = l.turnId),
        (n[19] = l.turnKey),
        (n[20] = l.useCases),
        (n[21] = u),
        (n[22] = d))
      : (d = n[22]),
    d
  );
}
function j(e) {
  let n = (0, M.c)(38),
    {
      children: r,
      canRetry: i,
      conversationId: a,
      fasterModel: s,
      hostId: c,
      isVisible: l,
      onRetry: u,
      reasons: d,
      turnKey: m,
      turnId: h,
      useCases: g,
    } = e,
    _ = t(o),
    v;
  n[0] !== a || n[1] !== m
    ? ((v = { conversationId: a, turnKey: m }), (n[0] = a), (n[1] = m), (n[2] = v))
    : (v = n[2]);
  let y = v,
    b = p(F, y),
    S = f(I),
    C = x(a),
    w = l && !b && S === !1;
  if (C == null || (r != null && !w)) {
    let e;
    return (n[3] === r ? (e = n[4]) : ((e = r == null ? null : r(null)), (n[3] = r), (n[4] = e)), e);
  }
  let E;
  if (
    n[5] !== i ||
    n[6] !== r ||
    n[7] !== a ||
    n[8] !== y ||
    n[9] !== s ||
    n[10] !== c ||
    n[11] !== u ||
    n[12] !== d ||
    n[13] !== _ ||
    n[14] !== C ||
    n[15] !== h ||
    n[16] !== m ||
    n[17] !== g ||
    n[18] !== w
  ) {
    let e;
    n[20] !== y || n[21] !== _
      ? ((e = () => {
          _.set(F, y, !0);
        }),
        (n[20] = y),
        (n[21] = _),
        (n[22] = e))
      : (e = n[22]);
    let t;
    n[23] === _
      ? (t = n[24])
      : ((t = () => {
          _.set(I, !0);
        }),
        (n[23] = _),
        (n[24] = t));
    let o;
    n[25] !== i ||
    n[26] !== a ||
    n[27] !== s ||
    n[28] !== c ||
    n[29] !== u ||
    n[30] !== d ||
    n[31] !== e ||
    n[32] !== t ||
    n[33] !== h ||
    n[34] !== m ||
    n[35] !== g ||
    n[36] !== w
      ? ((o = (0, P.jsx)(
          T,
          {
            canRetry: i,
            fasterModel: s,
            hostId: c,
            isVisible: w,
            onDismissForTurn: e,
            onDismissPermanently: t,
            onRetry: u,
            reasons: d,
            threadId: a,
            turnId: h,
            useCases: g,
          },
          m,
        )),
        (n[25] = i),
        (n[26] = a),
        (n[27] = s),
        (n[28] = c),
        (n[29] = u),
        (n[30] = d),
        (n[31] = e),
        (n[32] = t),
        (n[33] = h),
        (n[34] = m),
        (n[35] = g),
        (n[36] = w),
        (n[37] = o))
      : (o = n[37]);
    let l = (0, N.createPortal)(o, C);
    ((E = r == null ? l : r(l)),
      (n[5] = i),
      (n[6] = r),
      (n[7] = a),
      (n[8] = y),
      (n[9] = s),
      (n[10] = c),
      (n[11] = u),
      (n[12] = d),
      (n[13] = _),
      (n[14] = C),
      (n[15] = h),
      (n[16] = m),
      (n[17] = g),
      (n[18] = w),
      (n[19] = E));
  } else E = n[19];
  return E;
}
var M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((M = a()),
      d(),
      (N = r()),
      u(),
      C(),
      y(),
      b(),
      l(),
      O(),
      E(),
      n(),
      s(),
      w(),
      (P = i()),
      (F = c(o, (e) => !1)),
      (I = _(`safety-buffering-banner-dismissed-v1`, !1)));
  }))();
}
L();
export { k as UnifiedSafetyBufferingAnnouncement };
//# sourceMappingURL=safety-buffering-707d11737f60.js.map
