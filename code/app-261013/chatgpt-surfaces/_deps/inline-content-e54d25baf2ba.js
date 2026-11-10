import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Cxt as n,
  Ext as ee,
  GE as r,
  Ixt as te,
  Pxt as i,
  VDt as ne,
  Vxt as a,
  WE as re,
  _xt as o,
  hot as ie,
  jDt as s,
  lot as c,
  vzt as l,
  wot as u,
  xMt as ae,
  yzt as oe,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  FEr as f,
  FQt as se,
  GZt as ce,
  JZn as le,
  JZt as ue,
  NDr as de,
  PEr as fe,
  QMr as pe,
  TQt as me,
  VZn as he,
  YZt as ge,
  ZZt as _e,
  dMr as ve,
  fMr as p,
  jDr as ye,
  lQt as be,
  pOr as xe,
  qZt as Se,
  tNr as Ce,
  uQt as we,
  wQt as m,
  yjn as h,
} from "./app-initial-5851df3f6cb1.js";
import {
  Nv as g,
  Rv as Te,
  av as Ee,
  bv as _,
  cv as De,
  ev as Oe,
  lv as v,
  sv as ke,
  tv as Ae,
  xv as je,
} from "./app-primary-fe8a450b3b04.js";
import {
  a as y,
  i as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  s as b,
  t as Ie,
} from "./share-conversation-action-deb7f4faa0fd.js";
import {
  a as x,
  c as Le,
  i as Re,
  l as S,
  n as C,
  o as ze,
  r as Be,
  s as Ve,
  t as He,
} from "./pca-connector-eligibility-3c195602e15a.js";
import { n as w, t as Ue } from "./actions-e5d1d3a8760e.js";
import { n as We, t as Ge } from "./pca-connector-action-9318b684dcd3.js";
function Ke(e) {
  let r = (0, Xe.c)(65),
    { composerActions: i, beacon: o, beaconState: s, conversationId: c, serverConversationId: l } = e,
    u = te(t),
    {
      actionOverrides: ae,
      allowConversationSharing: oe,
      allowExternalActions: f,
      allowRemoteImages: ue,
      getActionOverride: de,
      isTemporaryChat: p,
      onComposerText: be,
      onStartVoice: Ce,
    } = i,
    { eventMetadata: m } = s,
    h = ne(),
    g = a(pe),
    Ee = d(o.action_items.some(Ye) ? je : null, m),
    _ = g.authenticatedAccountId,
    v = g.userId,
    y;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { name: `chatgpt.workspace-discovery` }), (r[0] = y))
    : (y = r[0]);
  let b = d(o.action_items.some(Te) ? fe : null, y),
    x;
  r[1] === o.action_items ? (x = r[2]) : ((x = o.action_items.some(Je)), (r[1] = o.action_items), (r[2] = x));
  let S = x,
    C;
  r[3] === o.action_items ? (C = r[4]) : ((C = o.action_items.some(qe)), (r[3] = o.action_items), (r[4] = C));
  let Ve = C,
    w;
  r[5] === S ? (w = r[6]) : ((w = { enabled: S }), (r[5] = S), (r[6] = w));
  let { data: We, isError: Ke, isLoading: O } = a(ye, w),
    Ze = a(xe),
    k = _ != null && v != null && g.accountId === _ ? _ : void 0,
    Qe = g.authLoading || g.accountLoading,
    A = k != null && g.accountStructure === `workspace`,
    j = (S || Ve) && A,
    M;
  r[7] === j ? (M = r[8]) : ((M = { enabled: j }), (r[7] = j), (r[8] = M));
  let { data: $e, isError: et, isLoading: tt } = d(ve, k ?? ``, M),
    nt = !A || (!et && $e?.beta_settings.sunshine === !0),
    rt = A && tt,
    N;
  r[9] !== h || r[10] !== u
    ? ((N = () => {
        u.get(ie).danger(
          h.formatMessage({
            id: `settings.chatGpt.updateError`,
            defaultMessage: `Could not update this setting`,
            description: `Error toast when a ChatGPT account setting cannot be saved`,
          }),
          { errorAnalytics: { toastId: `settings.chatGpt.updateError` } },
        );
      }),
      (r[9] = h),
      (r[10] = u),
      (r[11] = N))
    : (N = r[11]);
  let P;
  r[12] === u ? (P = r[13]) : ((P = (e) => u.get(ie).success(e)), (r[12] = u), (r[13] = P));
  let F;
  r[14] !== s || r[15] !== c || r[16] !== u || r[17] !== l
    ? ((F = () => u.get(ce, l ?? c) === s), (r[14] = s), (r[15] = c), (r[16] = u), (r[17] = l), (r[18] = F))
    : (F = r[18]);
  let it = Le({
      scope: u,
      allowExternalActions: f,
      accountStructure: g.accountStructure,
      isAccountStructurePending: g.accountStructure == null && g.accountLoading,
      isAccountPending: Qe,
      isUserSettingsError: Ke,
      isUserSettingsLoading: O,
      isWorkspaceMemoryLoading: rt,
      onMemoryUpdateError: N,
      onMemoryUpdateSuccess: P,
      trustedAccountId: k,
      userId: v,
      userSettings: We,
      userSettingsAccountId: Ze,
      workspaceMemoryEnabled: nt,
      workspaceRequestPolicy: $e?.usage_limit_increase_request,
      isCurrentPresentation: F,
    }),
    at = a(De),
    I = ee(),
    ot = n(`/`),
    L = d(he, c),
    R;
  r[19] === L ? (R = r[20]) : ((R = le(L)), (r[19] = L), (r[20] = R));
  let st = R,
    ct = Me(o.action_items),
    lt = d(Ie, ct ? c : null),
    ut = (0, T.useRef)(!1),
    [z, B] = (0, T.useState)(null),
    V;
  r[21] !== f || r[22] !== o.action_items
    ? ((V = f ? He(o.action_items) : []), (r[21] = f), (r[22] = o.action_items), (r[23] = V))
    : (V = r[23]);
  let dt = V,
    ft = dt.length > 0,
    H;
  r[24] === ft ? (H = r[25]) : ((H = { enabled: ft }), (r[24] = ft), (r[25] = H));
  let { data: pt, isError: mt, isLoading: ht } = d(Be, dt, H),
    U = s.productExperience,
    gt = {
      placement: `in_conversation`,
      productExperience: U,
      suppressLifecycle: m.suppressLifecycle,
      treatment: `conversation_inline`,
    },
    _t = () => {
      Se(u, c, s) && me(u, { action: `dismiss`, beacon: o, ...gt });
    },
    W;
  r[26] !== f || r[27] !== B
    ? ((W = f
        ? (e) =>
            e.action_v2.action_enum === `open_connector_oauth_modal` &&
            (B({ action: e, connectorId: e.action_v2.connector_id }),
            { didComplete: !0, eventAccountId: void 0, shouldResolve: !1 })
        : void 0),
      (r[26] = f),
      (r[27] = B),
      (r[28] = W))
    : (W = r[28]);
  let G = {
      ...ae,
      regenerate:
        i.allowRegeneration === !1
          ? void 0
          : Pe({
              scope: u,
              allowedModelSlug: i.regenerationModelSlug,
              conversationId: c,
              isTemporaryChat: p,
            }),
      open_connector_oauth_modal: W,
      share_conversation: Ne({ scope: u, canShare: oe && f && !p && !st, conversationId: l }),
    },
    vt = (e) => {
      if (Te(e)) {
        if (b == null || b.isLoading) return Oe;
        if (!b.isCapable) return Ae;
      }
      let t = Fe({
        action: e,
        getActionOverride: de,
        shareConversationEligible: lt,
        shareConversationOverride: G.share_conversation,
      });
      if (t !== void 0) return t;
      let n = it(e);
      if (n !== void 0) return n;
      if (
        G.open_pca_connector_auth_modal == null &&
        e.action_v2.action_enum === `open_pca_connector_auth_modal`
      )
        return ht
          ? Oe
          : mt || pt?.has(e.action_v2.connector_id) !== !0
            ? Ae
            : () => {
                let t = e.action_v2;
                if (t.action_enum !== `open_pca_connector_auth_modal`) return !1;
                let n = Ge(u, {
                  connectorId: t.connector_id,
                  conversationId: c,
                  includeConnectorSystemHint: t.include_connector_system_hint_after_link !== !1,
                  triggerTurnAfterLink: t.trigger_turn_after_link !== !1,
                });
                return (
                  n != null &&
                  (B({ action: e, connectorId: t.connector_id, pcaResumeTarget: n }),
                  { didComplete: !0, eventAccountId: void 0, shouldResolve: !1 })
                );
              };
    },
    K;
  r[29] === I
    ? (K = r[30])
    : ((K = (e) => {
        I(e);
      }),
      (r[29] = I),
      (r[30] = K));
  let yt = {
      scope: u,
      beacon: o,
      appBaseUrl: new URL(ot, window.location.origin),
      actionOverrides: G,
      allowExternalActions: f,
      eventMetadata: m,
      featureAccessInputs: g,
      presencePromptId: Ee,
      getActionOverride: vt,
      navigate: K,
      onComposerText: be,
      onDismiss: _t,
      onStartVoice: Ce,
      upsellHoldoutLayer: at,
      useExternalBrowser: !1,
    },
    q = Re({ actionItems: o.action_items, context: yt, variant: `inline` }),
    J;
  r[31] !== o.action_items || r[32] !== q.status
    ? ((J = o.action_items.slice(0, D).length > 0 && q.status === `supported`),
      (r[31] = o.action_items),
      (r[32] = q.status),
      (r[33] = J))
    : (J = r[33]);
  let Y = J,
    X;
  r[34] !== o ||
  r[35] !== s ||
  r[36] !== Y ||
  r[37] !== c ||
  r[38] !== m ||
  r[39] !== q.diagnostic ||
  r[40] !== q.status ||
  r[41] !== U ||
  r[42] !== u
    ? ((X = () => {
        if (q.status === `unsupported`) {
          (_e(u, c, s),
            se(u, {
              beacon: o,
              diagnostic: q.diagnostic,
              placement: `in_conversation`,
              suppressLifecycle: m.suppressLifecycle,
              treatment: `conversation_inline`,
            }));
          return;
        }
        !ut.current &&
          Y &&
          ((ut.current = !0),
          we({ beacon: o, eventType: `view`, metadata: m }),
          me(u, {
            action: `impression`,
            beacon: o,
            placement: `in_conversation`,
            productExperience: U,
            suppressLifecycle: m.suppressLifecycle,
            treatment: `conversation_inline`,
          }));
      }),
      (r[34] = o),
      (r[35] = s),
      (r[36] = Y),
      (r[37] = c),
      (r[38] = m),
      (r[39] = q.diagnostic),
      (r[40] = q.status),
      (r[41] = U),
      (r[42] = u),
      (r[43] = X))
    : (X = r[43]);
  let Z;
  if (
    (r[44] !== o ||
    r[45] !== s ||
    r[46] !== Y ||
    r[47] !== c ||
    r[48] !== m ||
    r[49] !== q ||
    r[50] !== U ||
    r[51] !== u
      ? ((Z = [o, s, Y, c, m, q, U, u]),
        (r[44] = o),
        (r[45] = s),
        (r[46] = Y),
        (r[47] = c),
        (r[48] = m),
        (r[49] = q),
        (r[50] = U),
        (r[51] = u),
        (r[52] = Z))
      : (Z = r[52]),
    (0, T.useEffect)(X, Z),
    !Y)
  )
    return null;
  let Q;
  r[53] !== s || r[54] !== c || r[55] !== u
    ? ((Q = (e) => {
        ke(e) && ge(u, c, s);
      }),
      (r[53] = s),
      (r[54] = c),
      (r[55] = u),
      (r[56] = Q))
    : (Q = r[56]);
  let $ = Q;
  if (z != null) {
    let e;
    r[57] !== z.action || r[58] !== $ || r[59] !== B
      ? ((e = (e) => {
          if (!e) {
            let e = z.action;
            (B(null), $(e));
          }
        }),
        (r[57] = z.action),
        (r[58] = $),
        (r[59] = B),
        (r[60] = e))
      : (e = r[60]);
    let t;
    return (
      r[61] !== z.connectorId || r[62] !== z.pcaResumeTarget || r[63] !== e
        ? ((t = (0, E.jsx)(ze, {
            connectorId: z.connectorId,
            pcaResumeTarget: z.pcaResumeTarget,
            onOpenChange: e,
          })),
          (r[61] = z.connectorId),
          (r[62] = z.pcaResumeTarget),
          (r[63] = e),
          (r[64] = t))
        : (t = r[64]),
      t
    );
  }
  let bt = (0, E.jsx)(Ue, {
    actionItems: o.action_items,
    actionOverrides: G,
    allowExternalActions: f,
    allowRemoteImages: ue,
    analyticsContext: gt,
    beacon: o,
    eventMetadata: m,
    getActionOverride: vt,
    maxActions: D,
    onActionComplete: $,
    onComposerText: be,
    onDismiss: _t,
    onStartVoice: Ce,
    variant: `inline`,
  });
  return o.ui_info.design === `card`
    ? (0, E.jsx)(`div`, {
        className: `mt-3 w-full max-w-sm`,
        children: (0, E.jsx)(re, {
          content: (0, E.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              o.ui_info.primary_info_text
                ? (0, E.jsx)(`p`, {
                    className: `text-base leading-6 text-default select-none`,
                    children: o.ui_info.primary_info_text,
                  })
                : null,
              (0, E.jsx)(`div`, { className: `flex flex-wrap gap-2`, children: bt }),
            ],
          }),
        }),
      })
    : (0, E.jsxs)(`section`, {
        className: `mt-4 w-full border-t border-default pt-4 pb-2`,
        children: [
          o.ui_info.primary_info_text
            ? (0, E.jsx)(`p`, {
                className: `text-base leading-6 text-default select-none`,
                children: o.ui_info.primary_info_text,
              })
            : null,
          (0, E.jsx)(`div`, { className: `mt-4 flex flex-col items-start gap-2`, children: bt }),
        ],
      });
}
function qe(e) {
  return e.action_v2.action_enum === `request_workspace_credits`;
}
function Je(e) {
  return e.action_v2.action_enum === `update_user_personalization_setting`;
}
function Ye(e) {
  return e.action_v2.action_enum === `create_presence_session`;
}
var Xe, T, E, D;
function O() {
  return (O = e(() => {
    ((Xe = l()),
      i(),
      (T = oe()),
      s(),
      o(),
      f(),
      Ce(),
      p(),
      be(),
      S(),
      Ee(),
      w(),
      m(),
      Ve(),
      _(),
      x(),
      v(),
      g(),
      de(),
      r(),
      c(),
      u(),
      h(),
      We(),
      C(),
      b(),
      y(),
      ue(),
      (E = ae()),
      (D = 3));
  }))();
}
O();
export { Ke as ChatGptConversationInlineBeaconContent };
//# sourceMappingURL=inline-content-e54d25baf2ba.js.map
