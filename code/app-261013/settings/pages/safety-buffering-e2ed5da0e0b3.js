import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  SPt as o,
  Vxt as s,
  aSt as c,
  hot as l,
  jDt as u,
  lot as d,
  vzt as f,
  wot as p,
  xMt as m,
  yMt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as _,
  ALt as v,
  ELt as y,
  TLt as b,
  iNr as x,
  jLt as S,
  rNr as C,
  v8n as w,
} from "./app-initial-5851df3f6cb1.js";
import { Iy as T, Ly as E, Oy as D, ky as O } from "./app-primary-fe8a450b3b04.js";
function k(e) {
  let t = (0, M.c)(11),
    { children: n, conversationId: r } = e,
    i = g(_, r),
    a;
  if (
    (t[0] !== r || t[1] !== i
      ? ((a = { conversationId: r, hostId: i }), (t[0] = r), (t[1] = i), (t[2] = a))
      : (a = t[2]),
    g(E, a) == null)
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
  let a = (0, M.c)(23),
    { children: o, conversationId: s, hostId: c } = e,
    u = i(n),
    d;
  a[0] !== s || a[1] !== c
    ? ((d = { conversationId: s, hostId: c }), (a[0] = s), (a[1] = c), (a[2] = d))
    : (d = a[2]);
  let f = g(E, d);
  if (f == null) {
    let e;
    return (a[3] === o ? (e = a[4]) : ((e = o == null ? null : o(null)), (a[3] = o), (a[4] = e)), e);
  }
  let p;
  a[5] !== s || a[6] !== c || a[7] !== f.canRetry || a[8] !== f.turnId || a[9] !== u
    ? ((p = async (e) => {
        f.canRetry &&
          f.turnId != null &&
          (await S(u, c, s, f.turnId, e).catch((e) => {
            (t.error(`Failed to retry safety-buffered turn`, { safe: {}, sensitive: { error: e } }),
              u
                .get(l)
                .danger(
                  (0, P.jsx)(r, {
                    id: `safetyBuffering.retryFailed`,
                    defaultMessage: `Couldn’t retry with the faster model`,
                    description: `Error shown when a safety-buffered request cannot be retried with the suggested faster model`,
                  }),
                  { errorAnalytics: { toastId: `safetyBuffering.retryFailed` } },
                ));
          }));
      }),
      (a[5] = s),
      (a[6] = c),
      (a[7] = f.canRetry),
      (a[8] = f.turnId),
      (a[9] = u),
      (a[10] = p))
    : (p = a[10]);
  let m;
  return (
    a[11] !== o ||
    a[12] !== s ||
    a[13] !== c ||
    a[14] !== f.canRetry ||
    a[15] !== f.fasterModel ||
    a[16] !== f.isVisible ||
    a[17] !== f.reasons ||
    a[18] !== f.turnId ||
    a[19] !== f.turnKey ||
    a[20] !== f.useCases ||
    a[21] !== p
      ? ((m = (0, P.jsx)(j, {
          canRetry: f.canRetry,
          conversationId: s,
          fasterModel: f.fasterModel,
          hostId: c,
          isVisible: f.isVisible,
          onRetry: p,
          reasons: f.reasons,
          turnKey: f.turnKey,
          turnId: f.turnId,
          useCases: f.useCases,
          children: o,
        })),
        (a[11] = o),
        (a[12] = s),
        (a[13] = c),
        (a[14] = f.canRetry),
        (a[15] = f.fasterModel),
        (a[16] = f.isVisible),
        (a[17] = f.reasons),
        (a[18] = f.turnId),
        (a[19] = f.turnKey),
        (a[20] = f.useCases),
        (a[21] = p),
        (a[22] = m))
      : (m = a[22]),
    m
  );
}
function j(e) {
  let t = (0, M.c)(38),
    {
      children: r,
      canRetry: a,
      conversationId: o,
      fasterModel: c,
      hostId: l,
      isVisible: u,
      onRetry: d,
      reasons: f,
      turnKey: p,
      turnId: m,
      useCases: h,
    } = e,
    _ = i(n),
    v;
  t[0] !== o || t[1] !== p
    ? ((v = { conversationId: o, turnKey: p }), (t[0] = o), (t[1] = p), (t[2] = v))
    : (v = t[2]);
  let b = v,
    x = g(F, b),
    S = s(I),
    C = y(o),
    w = u && !x && S === !1;
  if (C == null || (r != null && !w)) {
    let e;
    return (t[3] === r ? (e = t[4]) : ((e = r == null ? null : r(null)), (t[3] = r), (t[4] = e)), e);
  }
  let T;
  if (
    t[5] !== a ||
    t[6] !== r ||
    t[7] !== o ||
    t[8] !== b ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== d ||
    t[12] !== f ||
    t[13] !== _ ||
    t[14] !== C ||
    t[15] !== m ||
    t[16] !== p ||
    t[17] !== h ||
    t[18] !== w
  ) {
    let e;
    t[20] !== b || t[21] !== _
      ? ((e = () => {
          _.set(F, b, !0);
        }),
        (t[20] = b),
        (t[21] = _),
        (t[22] = e))
      : (e = t[22]);
    let n;
    t[23] === _
      ? (n = t[24])
      : ((n = () => {
          _.set(I, !0);
        }),
        (t[23] = _),
        (t[24] = n));
    let i;
    t[25] !== a ||
    t[26] !== o ||
    t[27] !== c ||
    t[28] !== l ||
    t[29] !== d ||
    t[30] !== f ||
    t[31] !== e ||
    t[32] !== n ||
    t[33] !== m ||
    t[34] !== p ||
    t[35] !== h ||
    t[36] !== w
      ? ((i = (0, P.jsx)(
          D,
          {
            canRetry: a,
            fasterModel: c,
            hostId: l,
            isVisible: w,
            onDismissForTurn: e,
            onDismissPermanently: n,
            onRetry: d,
            reasons: f,
            threadId: o,
            turnId: m,
            useCases: h,
          },
          p,
        )),
        (t[25] = a),
        (t[26] = o),
        (t[27] = c),
        (t[28] = l),
        (t[29] = d),
        (t[30] = f),
        (t[31] = e),
        (t[32] = n),
        (t[33] = m),
        (t[34] = p),
        (t[35] = h),
        (t[36] = w),
        (t[37] = i))
      : (i = t[37]);
    let s = (0, N.createPortal)(i, C);
    ((T = r == null ? s : r(s)),
      (t[5] = a),
      (t[6] = r),
      (t[7] = o),
      (t[8] = b),
      (t[9] = c),
      (t[10] = l),
      (t[11] = d),
      (t[12] = f),
      (t[13] = _),
      (t[14] = C),
      (t[15] = m),
      (t[16] = p),
      (t[17] = h),
      (t[18] = w),
      (t[19] = T));
  } else T = t[19];
  return T;
}
var M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((M = f()),
      a(),
      (N = h()),
      u(),
      w(),
      v(),
      b(),
      d(),
      T(),
      O(),
      p(),
      o(),
      C(),
      (P = m()),
      (F = c(n, (e) => !1)),
      (I = x(`safety-buffering-banner-dismissed-v1`, !1)));
  }))();
}
L();
export { k as UnifiedSafetyBufferingAnnouncement };
//# sourceMappingURL=safety-buffering-e2ed5da0e0b3.js.map
