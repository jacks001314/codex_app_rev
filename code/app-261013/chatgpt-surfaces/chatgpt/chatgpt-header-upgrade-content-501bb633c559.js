import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Eu as r,
  IDt as i,
  Ixt as a,
  Mz as o,
  Nz as s,
  Pxt as c,
  SJ as l,
  TJ as u,
  Tu as d,
  VDt as f,
  au as p,
  jDt as m,
  ou as h,
  t3 as g,
  vzt as _,
  wot as v,
  xMt as y,
  yzt as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Zt as S,
  $s as C,
  DBn as w,
  GZt as T,
  IZn as E,
  JVn as D,
  JZt as O,
  LMr as k,
  OGt as A,
  QDr as ee,
  SBn as j,
  SZn as M,
  TBn as N,
  TGt as P,
  UZt as F,
  VZt as I,
  XDr as L,
  XHt as R,
  YHt as te,
  aDr as z,
  cKt as ne,
  dKt as re,
  eDr as B,
  hGt as V,
  hKt as H,
  iHn as U,
  mGt as W,
  nc as G,
  pKt as K,
  pZn as q,
  sKt as J,
  uBn as Y,
  wBn as ie,
  yVn as ae,
  yjn as oe,
  zMr as se,
} from "./app-initial-5851df3f6cb1.js";
function ce(e) {
  let t = (0, X.c)(5),
    {
      conversationId: n,
      isHomepage: r,
      bannerInfo: i,
      inlineBannerInfo: a,
      currentAccount: o,
      onDismiss: s,
    } = e,
    c = x(D, n),
    l = x(q, n),
    u = x(T, l ?? n),
    d = u?.beacon,
    f = x(M, n),
    p = x(E, n),
    m = (0, Z.useContext)(C),
    h = i ?? (m == null ? a : null),
    g = x(I, n),
    _ = h?.call_to_action?.some(ue),
    v =
      d != null &&
      S(d) &&
      (d.ui_info.dismiss_variant === `persistent` ||
        (!p && (u?.eventMetadata.messageId == null || u.eventMetadata.messageId === f))) &&
      d.action_items.some(le);
  if (g != null || c != null || _ || v) return null;
  let y;
  return (
    t[0] !== o.id || t[1] !== o.plan_type || t[2] !== r || t[3] !== s
      ? ((y = (0, Q.jsx)(de, { accountId: o.id, isHomepage: r, plan: o.plan_type, onDismiss: s })),
        (t[0] = o.id),
        (t[1] = o.plan_type),
        (t[2] = r),
        (t[3] = s),
        (t[4] = y))
      : (y = t[4]),
    y
  );
}
function le(e) {
  let { action_v2: t } = e;
  return t.action_enum != null && [`get_plus`, `get_go`, `get_pro`, `get_team`].includes(t.action_enum);
}
function ue(e) {
  return K(e) != null;
}
function de(e) {
  let t = (0, X.c)(9),
    { accountId: n, isHomepage: r, plan: i, onDismiss: a } = e,
    o = z(),
    { data: s, isPending: c } = x(k, n);
  if (c) return null;
  let l = s?.accounts[n]?.eligible_promo_campaigns,
    u;
  t[0] !== l || t[1] !== o || t[2] !== i
    ? ((u = re(i, l, o)), (t[0] = l), (t[1] = o), (t[2] = i), (t[3] = u))
    : (u = t[3]);
  let d = u;
  if (d == null) return null;
  let f;
  return (
    t[4] !== r || t[5] !== d || t[6] !== a || t[7] !== i
      ? ((f = (0, Q.jsx)(fe, { isHomepage: r, plan: i, offer: d, onDismiss: a })),
        (t[4] = r),
        (t[5] = d),
        (t[6] = a),
        (t[7] = i),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
function fe(e) {
  let r = (0, X.c)(32),
    { isHomepage: s, plan: c, offer: u, onDismiss: p } = e,
    m = a(n),
    g = f(),
    _ = V(),
    { promoCampaignId: v, targetPlan: y, isSpecialOffer: b } = u,
    x =
      v == null
        ? w.CHATGPT_SUBSCRIPTION_UPSELL_PILL_TYPE_GENERIC
        : w.CHATGPT_SUBSCRIPTION_UPSELL_PILL_TYPE_GENERIC_FREE_TRIAL,
    S;
  r[0] !== x || r[1] !== m
    ? ((S = (e) => {
        ee(m, N, {
          action: e,
          entryPoint: ie.CHATGPT_SUBSCRIPTION_UPSELL_ENTRY_POINT_THREAD_HEADER_UPGRADE_PILL,
          pillType: x,
          productExperience: Y.CHATGPT_RATE_LIMIT_BANNER_PRODUCT_EXPERIENCE_CHAT,
        });
      }),
      (r[0] = x),
      (r[1] = m),
      (r[2] = S))
    : (S = r[2]);
  let C = S,
    T;
  r[3] === C
    ? (T = r[4])
    : ((T = () => C(j.CHATGPT_SUBSCRIPTION_UPSELL_ACTION_PRESENTED)), (r[3] = C), (r[4] = T));
  let E = (0, Z.useEffectEvent)(T),
    D;
  r[5] === E
    ? (D = r[6])
    : ((D = () => {
        E();
      }),
      (r[5] = E),
      (r[6] = D));
  let O;
  (r[7] === x ? (O = r[8]) : ((O = [x]), (r[7] = x), (r[8] = O)), (0, Z.useEffect)(D, O));
  let k;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(i, {
        id: `chatgptConversations.header.upgrade`,
        defaultMessage: `Upgrade`,
        description: `Button in the chat header that opens available subscription plans`,
      })),
      (r[9] = k))
    : (k = r[9]);
  let A = k;
  if (v != null) {
    let e;
    (r[10] === b
      ? (e = r[11])
      : ((e = b
          ? (0, Q.jsx)(i, {
              id: `chatgptConversations.header.claimOffer`,
              defaultMessage: `Claim offer`,
              description: `Button in the chat header for an eligible discounted subscription offer`,
            })
          : (0, Q.jsx)(i, {
              id: `chatgptConversations.header.freeOffer`,
              defaultMessage: `Free offer`,
              description: `Button in the chat header for an eligible free subscription trial`,
            })),
        (r[10] = b),
        (r[11] = e)),
      (A = e));
  }
  let M;
  r[12] !== C || r[13] !== _ || r[14] !== c || r[15] !== v || r[16] !== y
    ? ((M = (e) => {
        (C(j.CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED),
          _({
            currentPlan: P(c)?.pricePlan ?? null,
            event: e,
            source: `chatgpt_header_upgrade`,
            chatGptContext: { openModalLocation: v == null ? ne : J, promoCampaignId: v, targetPlan: y },
          }));
      }),
      (r[12] = C),
      (r[13] = _),
      (r[14] = c),
      (r[15] = v),
      (r[16] = y),
      (r[17] = M))
    : (M = r[17]);
  let F = v == null ? h : d,
    I;
  r[18] === F ? (I = r[19]) : ((I = (0, Q.jsx)(o, { asset: F })), (r[18] = F), (r[19] = I));
  let L;
  r[20] !== A || r[21] !== M || r[22] !== I
    ? ((L = (0, Q.jsxs)(t, { color: `headerUpgrade`, size: `headerUpsell`, onClick: M, children: [I, A] })),
      (r[20] = A),
      (r[21] = M),
      (r[22] = I),
      (r[23] = L))
    : (L = r[23]);
  let R;
  r[24] !== g || r[25] !== s || r[26] !== C || r[27] !== p
    ? ((R = s
        ? null
        : (0, Q.jsx)(t, {
            "aria-label": g.formatMessage({
              id: `chatgptConversations.header.dismissUpgrade`,
              defaultMessage: `Dismiss upgrade reminder`,
              description: `Dismiss the chat header subscription offer for 24 hours`,
            }),
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            onClick: () => {
              (C(j.CHATGPT_SUBSCRIPTION_UPSELL_ACTION_DISMISSED), p());
            },
            children: (0, Q.jsx)(l, {}),
          })),
      (r[24] = g),
      (r[25] = s),
      (r[26] = C),
      (r[27] = p),
      (r[28] = R))
    : (R = r[28]);
  let z;
  return (
    r[29] !== R || r[30] !== L
      ? ((z = (0, Q.jsx)(te.HeaderAction, {
          actionId: `chatgpt-header-upgrade`,
          align: `end`,
          order: 80,
          children: (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-1 select-none`,
            children: [L, R],
          }),
        })),
        (r[29] = R),
        (r[30] = L),
        (r[31] = z))
      : (z = r[31]),
    z
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = _()),
      ae(),
      r(),
      p(),
      c(),
      (Z = b()),
      m(),
      R(),
      se(),
      g(),
      s(),
      u(),
      H(),
      A(),
      W(),
      L(),
      v(),
      B(),
      O(),
      U(),
      F(),
      oe(),
      G(),
      (Q = y()));
  }))();
}
$();
export { ce as ChatGptHeaderUpgradeContent };
//# sourceMappingURL=chatgpt-header-upgrade-content-501bb633c559.js.map
