import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Pxt as n,
  Vxt as r,
  iot as i,
  oot as a,
  vzt as o,
  xMt as s,
  yzt as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  F2t as u,
  Fin as d,
  Fjt as f,
  HHn as p,
  Hin as m,
  I2t as h,
  MHn as g,
  MHt as _,
  Mrr as v,
  NHn as y,
  NHt as b,
  Pjt as x,
  UHn as S,
  VHn as C,
  WHn as w,
  c4t as T,
  fur as E,
  gCr as D,
  hHt as O,
  jrr as k,
  kHt as A,
  l4t as j,
  pHt as M,
  pur as N,
  sCr as P,
  yCr as F,
} from "./app-initial-5851df3f6cb1.js";
import { F_ as I, I_ as L, L_ as R, P_ as z, R_ as B, z_ as V } from "./app-primary-fe8a450b3b04.js";
function H(e) {
  let t = (0, U.c)(7),
    { accountId: n, userId: r } = N(),
    { data: i, isError: a, isLoading: o } = m(),
    s;
  return (
    t[0] !== i || t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== o || t[5] !== e
      ? ((s =
          e != null &&
          j({
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
    ((U = o()), E(), d(), T());
  }))();
}
function G(e) {
  let t = (0, q.c)(31),
    {
      canShowUsageBanners: n,
      hostId: r,
      imageGenerationLimit: a,
      onDismissImageGenerationLimit: o,
      rateLimit: s,
      rateLimitWarningThreshold: c,
      selectedModel: u,
      sendBlocked: d,
      showLunaReserveNotice: f,
      workCreditConversationId: p,
    } = e,
    m = r === void 0 ? i : r,
    _ = c === void 0 ? null : c,
    v = f === void 0 || f,
    { accountId: y, userId: b } = N(),
    S = l(k, y),
    C = (0, J.useRef)(null),
    w;
  t[0] !== y || t[1] !== a || t[2] !== S || t[3] !== b
    ? ((w = a != null && S != null ? JSON.stringify([y, b, S.threadId, S.turnId, S.completedAtMs]) : void 0),
      (t[0] = y),
      (t[1] = a),
      (t[2] = S),
      (t[3] = b),
      (t[4] = w))
    : (w = t[4]);
  let T = w,
    E;
  t[5] !== y || t[6] !== u || t[7] !== b
    ? ((E = { accountId: y, userId: b, selectedModel: u }), (t[5] = y), (t[6] = u), (t[7] = b), (t[8] = E))
    : (E = t[8]);
  let D = n && a != null,
    O;
  t[9] === D ? (O = t[10]) : ((O = { enabled: D }), (t[9] = D), (t[10] = O));
  let { data: A } = l(g, E, O),
    j = a != null && !d ? (A ?? s) : s,
    M = j?.rate_limit_upsell?.banner_type === `image_generation_limit_reached`,
    P = l(h, m),
    F = j?.rate_limit_upsell,
    I = F?.banner_type !== `luna_reserve` && d,
    L;
  t[11] !== j || t[12] !== F || t[13] !== m || t[14] !== u || t[15] !== I || t[16] !== p
    ? ((L = {
        sendBlocked: I,
        banner: F,
        hostId: m,
        rateLimitStatus: j,
        selectedModel: u,
        workCreditConversationId: p,
      }),
      (t[11] = j),
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
    j != null &&
    F != null &&
    R != null &&
    (!M || (a != null && !d)) &&
    (F.banner_type !== `luna_reserve` || (v && P))
  ) {
    let e;
    t[18] !== R || t[19] !== j || t[20] !== F || t[21] !== T || t[22] !== M || t[23] !== o || t[24] !== p
      ? ((e = M
          ? (0, Y.jsx)(
              x,
              {
                banner: F,
                lastImpressionKeyRef: C,
                onDismiss: o ?? void 0,
                presentationKey: T,
                rateLimitStatus: j,
                workCreditConversationId: p,
              },
              T,
            )
          : R),
        (t[18] = R),
        (t[19] = j),
        (t[20] = F),
        (t[21] = T),
        (t[22] = M),
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
  if (s != null && _ != null) {
    let e;
    return (
      t[28] !== s || t[29] !== _
        ? ((e = (0, Y.jsx)(`div`, {
            className: `empty:hidden [[data-composer-placement=home]>&]:pb-2`,
            children: (0, Y.jsx)(B, { rateLimit: s, warningThreshold: _ }),
          })),
          (t[28] = s),
          (t[29] = _),
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
      sendBlocked: i,
      banner: a,
      hostId: o,
      rateLimitStatus: s,
      selectedModel: c,
      workCreditConversationId: u,
    } = e,
    d = t(P),
    f = r(z),
    m;
  n[0] !== o || n[1] !== s || n[2] !== d || n[3] !== f
    ? ((m = s == null ? null : p(d, s, f == null ? null : JSON.stringify([o, f]))),
      (n[0] = o),
      (n[1] = s),
      (n[2] = d),
      (n[3] = f),
      (n[4] = m))
    : (m = n[4]);
  let h = m,
    g = l(C, h),
    _;
  n[5] === d ? (_ = n[6]) : ((_ = D(d)), (n[5] = d), (n[6] = _));
  let v = _,
    y = l(b, v),
    S;
  n[7] !== v || n[8] !== o ? ((S = [v, o]), (n[7] = v), (n[8] = o), (n[9] = S)) : (S = n[9]);
  let T = l(A, S),
    E;
  n[10] === o ? (E = n[11]) : ((E = { enabled: !1, hostId: o }), (n[10] = o), (n[11] = E));
  let { data: k } = O(E),
    j = H(s);
  if (
    a == null ||
    s == null ||
    !j ||
    (a.presentation === `dismissible` && a.dismissal_policy?.scope === `thread` && h == null)
  )
    return null;
  let M;
  n[12] !== a || n[13] !== h || n[14] !== g || n[15] !== s || n[16] !== d || n[17] !== i || n[18] !== u
    ? ((M = g
        ? null
        : (0, Y.jsx)(x, {
            sendBlocked: i,
            banner: a,
            onDismiss:
              h == null
                ? void 0
                : () => {
                    d.set(C, h, !0);
                  },
            onShown: () => {
              w(d, h);
            },
            presentationKey: h,
            rateLimitStatus: s,
            workCreditConversationId: u,
          })),
      (n[12] = a),
      (n[13] = h),
      (n[14] = g),
      (n[15] = s),
      (n[16] = d),
      (n[17] = i),
      (n[18] = u),
      (n[19] = M))
    : (M = n[19]);
  let N = M,
    F = a.model_slug == null || a.model_slug === c ? N : null;
  if (a.blocked_model_slug == null) return F;
  let I;
  n[20] !== a.blocked_model_slug ||
  n[21] !== a.fallback_model_slugs ||
  n[22] !== T ||
  n[23] !== h ||
  n[24] !== y ||
  n[25] !== k?.models ||
  n[26] !== c
    ? ((I =
        c != null &&
        c !== a.blocked_model_slug &&
        a.fallback_model_slugs?.includes(c) &&
        T === c &&
        k?.models.some((e) => e.model === c && e.hidden !== !0) === !0 &&
        y != null &&
        !(h != null && y.notice?.key === h && y.notice.dismissed)),
      (n[20] = a.blocked_model_slug),
      (n[21] = a.fallback_model_slugs),
      (n[22] = T),
      (n[23] = h),
      (n[24] = y),
      (n[25] = k?.models),
      (n[26] = c),
      (n[27] = I))
    : (I = n[27]);
  let R = I,
    B;
  return (
    n[28] !== a || n[29] !== R || n[30] !== N || n[31] !== h || n[32] !== o || n[33] !== s || n[34] !== c
      ? ((B = R
          ? (0, Y.jsx)(L, {
              banner: a,
              bannerKey: h,
              blockedModel: a.blocked_model_slug,
              fallbackContent: null,
              hostId: o,
              rateLimitStatus: s,
              selectedModel: c,
              children: N,
            })
          : null),
        (n[28] = a),
        (n[29] = R),
        (n[30] = N),
        (n[31] = h),
        (n[32] = o),
        (n[33] = s),
        (n[34] = c),
        (n[35] = B))
      : (B = n[35]),
    B
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = o()),
      n(),
      (J = c()),
      W(),
      E(),
      V(),
      v(),
      u(),
      R(),
      _(),
      y(),
      f(),
      S(),
      I(),
      M(),
      F(),
      a(),
      (Y = s()));
  }))();
}
export { G as n, X as t };
//# sourceMappingURL=usage-1fdc4b842956.js.map
