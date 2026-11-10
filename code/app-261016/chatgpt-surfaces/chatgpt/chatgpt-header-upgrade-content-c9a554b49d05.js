import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  Hu as a,
  LNt as o,
  OB as s,
  PBt as c,
  Qst as l,
  SY as u,
  TY as d,
  Vu as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  nCt as _,
  nd as v,
  okt as y,
  td as b,
  tkt as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as S,
  BQt as C,
  DUn as ee,
  Ejr as w,
  HUn as te,
  IQt as T,
  IWn as E,
  JQt as D,
  JRt as O,
  RQt as k,
  UQt as A,
  VPn as j,
  VUn as ne,
  WUn as M,
  Y1n as N,
  YRt as P,
  dBt as re,
  dGn as F,
  dLr as I,
  dVt as L,
  iVt as ie,
  ic as R,
  l0n as z,
  lLr as ae,
  lVt as B,
  nBt as V,
  rBt as H,
  rVt as U,
  sVt as W,
  sc as G,
  uBt as K,
  wBt as q,
  xBt as oe,
  xGn as se,
  xMr as J,
  xjr as ce,
  yMr as le,
  zUn as Y,
} from "./app-initial-ad16eaadf81f.js";
function ue(e) {
  let t = (0, X.c)(5),
    {
      conversationId: n,
      isHomepage: r,
      bannerInfo: i,
      inlineBannerInfo: a,
      currentAccount: o,
      onDismiss: s,
    } = e,
    c = _(F, n),
    l = _(S, n),
    u = _(C, l ?? n),
    d = u?.beacon,
    f = _(N, n),
    p = _(z, n),
    m = (0, Z.useContext)(R),
    h = i ?? (m == null ? a : null),
    g = _(T, n),
    v = h?.call_to_action?.some(fe),
    y =
      d != null &&
      D(d) &&
      (d.ui_info.dismiss_variant === `persistent` ||
        (!p && (u?.eventMetadata.messageId == null || u.eventMetadata.messageId === f))) &&
      d.action_items.some(de);
  if (g != null || c != null || v || y) return null;
  let b;
  return (
    t[0] !== o.id || t[1] !== o.plan_type || t[2] !== r || t[3] !== s
      ? ((b = (0, Q.jsx)(pe, { accountId: o.id, isHomepage: r, plan: o.plan_type, onDismiss: s })),
        (t[0] = o.id),
        (t[1] = o.plan_type),
        (t[2] = r),
        (t[3] = s),
        (t[4] = b))
      : (b = t[4]),
    b
  );
}
function de(e) {
  let { action_v2: t } = e;
  return t.action_enum != null && [`get_plus`, `get_go`, `get_pro`, `get_team`].includes(t.action_enum);
}
function fe(e) {
  return B(e) != null;
}
function pe(e) {
  let t = (0, X.c)(9),
    { accountId: n, isHomepage: r, plan: i, onDismiss: a } = e,
    o = w(),
    { data: s, isPending: c } = _(ae, n);
  if (c) return null;
  let l = s?.accounts[n]?.eligible_promo_campaigns,
    u;
  t[0] !== l || t[1] !== o || t[2] !== i
    ? ((u = W(i, l, o)), (t[0] = l), (t[1] = o), (t[2] = i), (t[3] = u))
    : (u = t[3]);
  let d = u;
  if (d == null) return null;
  let f;
  return (
    t[4] !== r || t[5] !== d || t[6] !== a || t[7] !== i
      ? ((f = (0, Q.jsx)(O.HeaderAction, {
          actionId: `chatgpt-header-upgrade`,
          align: `end`,
          order: 80,
          children: (0, Q.jsx)(V, {
            source: `chat_header_upgrade`,
            children: (e) => (0, Q.jsx)(me, { isHomepage: r, plan: i, offer: d, discovery: e, onDismiss: a }),
          }),
        })),
        (t[4] = r),
        (t[5] = d),
        (t[6] = a),
        (t[7] = i),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
function me(e) {
  let n = (0, X.c)(36),
    { isHomepage: i, plan: o, offer: s, discovery: c, onDismiss: d } = e,
    f = t(l),
    p = y(),
    h = re(),
    g = c == null,
    { promoCampaignId: _, targetPlan: v, isSpecialOffer: S } = s,
    C =
      _ == null
        ? M.CHATGPT_SUBSCRIPTION_UPSELL_PILL_TYPE_GENERIC
        : M.CHATGPT_SUBSCRIPTION_UPSELL_PILL_TYPE_GENERIC_FREE_TRIAL,
    w;
  n[0] !== C || n[1] !== f
    ? ((w = (e) => {
        J(f, te, {
          action: e,
          entryPoint: ne.CHATGPT_SUBSCRIPTION_UPSELL_ENTRY_POINT_THREAD_HEADER_UPGRADE_PILL,
          pillType: C,
          productExperience: ee.CHATGPT_RATE_LIMIT_BANNER_PRODUCT_EXPERIENCE_CHAT,
        });
      }),
      (n[0] = C),
      (n[1] = f),
      (n[2] = w))
    : (w = n[2]);
  let T = w,
    E;
  n[3] === T
    ? (E = n[4])
    : ((E = () => T(Y.CHATGPT_SUBSCRIPTION_UPSELL_ACTION_PRESENTED)), (n[3] = T), (n[4] = E));
  let D = (0, Z.useEffectEvent)(E),
    O;
  n[5] !== g || n[6] !== D
    ? ((O = () => {
        g && D();
      }),
      (n[5] = g),
      (n[6] = D),
      (n[7] = O))
    : (O = n[7]);
  let k;
  (n[8] !== g || n[9] !== C ? ((k = [g, C]), (n[8] = g), (n[9] = C), (n[10] = k)) : (k = n[10]),
    (0, Z.useEffect)(O, k));
  let A;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(x, {
        id: `chatgptConversations.header.upgrade`,
        defaultMessage: `Upgrade`,
        description: `Button in the chat header that opens available subscription plans`,
      })),
      (n[11] = A))
    : (A = n[11]);
  let j = A;
  if (_ != null) {
    let e;
    (n[12] === S
      ? (e = n[13])
      : ((e = S
          ? (0, Q.jsx)(x, {
              id: `chatgptConversations.header.claimOffer`,
              defaultMessage: `Claim offer`,
              description: `Button in the chat header for an eligible discounted subscription offer`,
            })
          : (0, Q.jsx)(x, {
              id: `chatgptConversations.header.freeOffer`,
              defaultMessage: `Free offer`,
              description: `Button in the chat header for an eligible free subscription trial`,
            })),
        (n[12] = S),
        (n[13] = e)),
      (j = e));
  }
  let N;
  n[14] !== c || n[15] !== T || n[16] !== h || n[17] !== o || n[18] !== _ || n[19] !== v
    ? ((N = (e) => {
        c?.onClick(e) ||
          (T(Y.CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED),
          h({
            currentPlan: oe(o)?.pricePlan ?? null,
            event: e,
            source: `chatgpt_header_upgrade`,
            chatGptContext: { openModalLocation: _ == null ? ie : U, promoCampaignId: _, targetPlan: v },
          }));
      }),
      (n[14] = c),
      (n[15] = T),
      (n[16] = h),
      (n[17] = o),
      (n[18] = _),
      (n[19] = v),
      (n[20] = N))
    : (N = n[20]);
  let P = _ == null ? a : b,
    F;
  n[21] === P ? (F = n[22]) : ((F = (0, Q.jsx)(r, { asset: P })), (n[21] = P), (n[22] = F));
  let I = c?.label ?? j,
    L;
  n[23] !== N || n[24] !== F || n[25] !== I
    ? ((L = (0, Q.jsxs)(m, { color: `headerUpgrade`, size: `headerUpsell`, onClick: N, children: [F, I] })),
      (n[23] = N),
      (n[24] = F),
      (n[25] = I),
      (n[26] = L))
    : (L = n[26]);
  let R;
  n[27] !== p || n[28] !== i || n[29] !== g || n[30] !== T || n[31] !== d
    ? ((R = i
        ? null
        : (0, Q.jsx)(m, {
            "aria-label": p.formatMessage({
              id: `chatgptConversations.header.dismissUpgrade`,
              defaultMessage: `Dismiss upgrade reminder`,
              description: `Dismiss the chat header subscription offer for 24 hours`,
            }),
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            onClick: () => {
              (g && T(Y.CHATGPT_SUBSCRIPTION_UPSELL_ACTION_DISMISSED), d());
            },
            children: (0, Q.jsx)(u, {}),
          })),
      (n[27] = p),
      (n[28] = i),
      (n[29] = g),
      (n[30] = T),
      (n[31] = d),
      (n[32] = R))
    : (R = n[32]);
  let z;
  return (
    n[33] !== L || n[34] !== R
      ? ((z = (0, Q.jsxs)(`div`, { className: `flex items-center gap-1 select-none`, children: [L, R] })),
        (n[33] = L),
        (n[34] = R),
        (n[35] = z))
      : (z = n[35]),
    z
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = c()),
      E(),
      v(),
      f(),
      g(),
      (Z = i()),
      p(),
      P(),
      I(),
      h(),
      s(),
      d(),
      L(),
      q(),
      K(),
      le(),
      n(),
      ce(),
      H(),
      A(),
      se(),
      k(),
      j(),
      G(),
      (Q = o()));
  }))();
}
$();
export { ue as ChatGptHeaderUpgradeContent };
//# sourceMappingURL=chatgpt-header-upgrade-content-c9a554b49d05.js.map
