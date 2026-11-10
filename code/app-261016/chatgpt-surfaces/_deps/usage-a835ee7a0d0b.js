import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  LNt as r,
  PBt as i,
  Yst as a,
  ZSt as o,
  Zst as s,
  iCt as c,
  nCt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ARt as u,
  CDr as d,
  DRt as f,
  FDr as p,
  LXt as m,
  MDr as h,
  OOt as g,
  RXt as _,
  XGn as v,
  YGn as y,
  aKn as b,
  asr as x,
  dRt as S,
  dZt as C,
  iKn as w,
  imr as T,
  isr as E,
  jRt as D,
  jcn as O,
  kOt as k,
  oKn as A,
  pRt as j,
  rmr as M,
  sKn as N,
  uZt as P,
  wcn as F,
} from "./app-initial-ad16eaadf81f.js";
import { $_ as I, Q_ as L, ev as R, nv as z, rv as B, tv as V } from "./app-primary-3e00728c2a4c.js";
function H(e) {
  let t = (0, U.c)(7),
    { accountId: n, userId: r } = T(),
    { data: i, isError: a, isLoading: o } = O(),
    s;
  return (
    t[0] !== i || t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== o || t[5] !== e
      ? ((s =
          e != null &&
          C({
            authAccountId: n,
            authUserId: r,
            currentAccountId: i?.id === n ? i.id : null,
            isCurrentAccountError: a,
            isCurrentAccountLoading: o,
            rateLimitStatus: e,
          })),
        (t[0] = i),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a),
        (t[4] = o),
        (t[5] = e),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var U;
function W() {
  return (W = e(() => {
    ((U = i()), M(), F(), P());
  }))();
}
function G(e) {
  let t = (0, q.c)(31),
    {
      canShowUsageBanners: n,
      hostId: r,
      imageGenerationLimit: i,
      onDismissImageGenerationLimit: o,
      rateLimit: s,
      rateLimitWarningThreshold: c,
      selectedModel: u,
      sendBlocked: d,
      showLunaReserveNotice: f,
      workCreditConversationId: p,
    } = e,
    m = r === void 0 ? a : r,
    h = c === void 0 ? null : c,
    v = f === void 0 || f,
    { accountId: b, userId: x } = T(),
    S = l(E, b),
    C = (0, J.useRef)(null),
    w;
  t[0] !== b || t[1] !== i || t[2] !== S || t[3] !== x
    ? ((w = i != null && S != null ? JSON.stringify([b, x, S.threadId, S.turnId, S.completedAtMs]) : void 0),
      (t[0] = b),
      (t[1] = i),
      (t[2] = S),
      (t[3] = x),
      (t[4] = w))
    : (w = t[4]);
  let D = w,
    O;
  t[5] !== b || t[6] !== u || t[7] !== x
    ? ((O = { accountId: b, userId: x, selectedModel: u }), (t[5] = b), (t[6] = u), (t[7] = x), (t[8] = O))
    : (O = t[8]);
  let k = n && i != null,
    A;
  t[9] === k ? (A = t[10]) : ((A = { enabled: k }), (t[9] = k), (t[10] = A));
  let { data: j } = l(y, O, A),
    M = i != null && !d ? (j ?? s) : s,
    N = M?.rate_limit_upsell?.banner_type === `image_generation_limit_reached`,
    P = l(_, m),
    F = M?.rate_limit_upsell,
    I = F?.banner_type !== `luna_reserve` && d,
    L;
  t[11] !== M || t[12] !== F || t[13] !== m || t[14] !== u || t[15] !== I || t[16] !== p
    ? ((L = {
        sendBlocked: I,
        banner: F,
        hostId: m,
        rateLimitStatus: M,
        selectedModel: u,
        workCreditConversationId: p,
      }),
      (t[11] = M),
      (t[12] = F),
      (t[13] = m),
      (t[14] = u),
      (t[15] = I),
      (t[16] = p),
      (t[17] = L))
    : (L = t[17]);
  let R = K(L);
  if (!n) return null;
  if (
    M != null &&
    F != null &&
    R != null &&
    (!N || (i != null && !d)) &&
    (F.banner_type !== `luna_reserve` || (v && P))
  ) {
    let e;
    t[18] !== R || t[19] !== M || t[20] !== F || t[21] !== D || t[22] !== N || t[23] !== o || t[24] !== p
      ? ((e = N
          ? (0, Y.jsx)(
              g,
              {
                banner: F,
                lastImpressionKeyRef: C,
                onDismiss: o ?? void 0,
                presentationKey: D,
                rateLimitStatus: M,
                workCreditConversationId: p,
              },
              D,
            )
          : R),
        (t[18] = R),
        (t[19] = M),
        (t[20] = F),
        (t[21] = D),
        (t[22] = N),
        (t[23] = o),
        (t[24] = p),
        (t[25] = e))
      : (e = t[25]);
    let n;
    return (
      t[26] === e
        ? (n = t[27])
        : ((n = (0, Y.jsx)(`div`, {
            className: `empty:hidden [[data-composer-placement=home]>&]:pb-2`,
            children: e,
          })),
          (t[26] = e),
          (t[27] = n)),
      n
    );
  }
  if (s != null && h != null) {
    let e;
    return (
      t[28] !== s || t[29] !== h
        ? ((e = (0, Y.jsx)(`div`, {
            className: `empty:hidden [[data-composer-placement=home]>&]:pb-2`,
            children: (0, Y.jsx)(z, { rateLimit: s, warningThreshold: h }),
          })),
          (t[28] = s),
          (t[29] = h),
          (t[30] = e))
        : (e = t[30]),
      e
    );
  }
  return null;
}
function K(e) {
  let n = (0, q.c)(36),
    {
      sendBlocked: r,
      banner: i,
      hostId: a,
      rateLimitStatus: o,
      selectedModel: s,
      workCreditConversationId: u,
    } = e,
    p = t(d),
    m = c(L),
    _;
  n[0] !== a || n[1] !== o || n[2] !== p || n[3] !== m
    ? ((_ = o == null ? null : b(p, o, m == null ? null : JSON.stringify([a, m]))),
      (n[0] = a),
      (n[1] = o),
      (n[2] = p),
      (n[3] = m),
      (n[4] = _))
    : (_ = n[4]);
  let v = _,
    y = l(w, v),
    x;
  n[5] === p ? (x = n[6]) : ((x = h(p)), (n[5] = p), (n[6] = x));
  let S = x,
    C = l(D, S),
    T;
  n[7] !== S || n[8] !== a ? ((T = [S, a]), (n[7] = S), (n[8] = a), (n[9] = T)) : (T = n[9]);
  let E = l(f, T),
    O;
  n[10] === a ? (O = n[11]) : ((O = { enabled: !1, hostId: a }), (n[10] = a), (n[11] = O));
  let { data: k } = j(O),
    A = H(o);
  if (
    i == null ||
    o == null ||
    !A ||
    (i.presentation === `dismissible` && i.dismissal_policy?.scope === `thread` && v == null)
  )
    return null;
  let M;
  n[12] !== i || n[13] !== v || n[14] !== y || n[15] !== o || n[16] !== p || n[17] !== r || n[18] !== u
    ? ((M = y
        ? null
        : (0, Y.jsx)(g, {
            sendBlocked: r,
            banner: i,
            onDismiss:
              v == null
                ? void 0
                : () => {
                    p.set(w, v, !0);
                  },
            onShown: () => {
              N(p, v);
            },
            presentationKey: v,
            rateLimitStatus: o,
            workCreditConversationId: u,
          })),
      (n[12] = i),
      (n[13] = v),
      (n[14] = y),
      (n[15] = o),
      (n[16] = p),
      (n[17] = r),
      (n[18] = u),
      (n[19] = M))
    : (M = n[19]);
  let P = M,
    F = i.model_slug == null || i.model_slug === s ? P : null;
  if (i.blocked_model_slug == null) return F;
  let I;
  n[20] !== i.blocked_model_slug ||
  n[21] !== i.fallback_model_slugs ||
  n[22] !== E ||
  n[23] !== v ||
  n[24] !== C ||
  n[25] !== k?.models ||
  n[26] !== s
    ? ((I =
        s != null &&
        s !== i.blocked_model_slug &&
        i.fallback_model_slugs?.includes(s) &&
        E === s &&
        k?.models.some((e) => e.model === s && e.hidden !== !0) === !0 &&
        C != null &&
        !(v != null && C.notice?.key === v && C.notice.dismissed)),
      (n[20] = i.blocked_model_slug),
      (n[21] = i.fallback_model_slugs),
      (n[22] = E),
      (n[23] = v),
      (n[24] = C),
      (n[25] = k?.models),
      (n[26] = s),
      (n[27] = I))
    : (I = n[27]);
  let z = I,
    B;
  return (
    n[28] !== i || n[29] !== z || n[30] !== P || n[31] !== v || n[32] !== a || n[33] !== o || n[34] !== s
      ? ((B = z
          ? (0, Y.jsx)(R, {
              banner: i,
              bannerKey: v,
              blockedModel: i.blocked_model_slug,
              fallbackContent: null,
              hostId: a,
              rateLimitStatus: o,
              selectedModel: s,
              children: P,
            })
          : null),
        (n[28] = i),
        (n[29] = z),
        (n[30] = P),
        (n[31] = v),
        (n[32] = a),
        (n[33] = o),
        (n[34] = s),
        (n[35] = B))
      : (B = n[35]),
    B
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = i()),
      o(),
      (J = n()),
      W(),
      M(),
      B(),
      x(),
      m(),
      V(),
      u(),
      v(),
      k(),
      A(),
      I(),
      S(),
      p(),
      s(),
      (Y = r()));
  }))();
}
export { G as n, X as t };
//# sourceMappingURL=usage-a835ee7a0d0b.js.map
