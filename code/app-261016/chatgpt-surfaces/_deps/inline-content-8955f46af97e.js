import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BSt as ee,
  FBt as r,
  LNt as i,
  NSt as a,
  PBt as o,
  Qst as te,
  USt as ne,
  Vrt as s,
  XOt as c,
  ZSt as re,
  iCt as l,
  nCt as u,
  okt as ie,
  qrt as ae,
  vD as oe,
  yD as se,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A$t as ce,
  BQt as le,
  HQt as ue,
  IIr as de,
  IMr as fe,
  KQt as pe,
  LIr as d,
  UQt as me,
  VPn as he,
  VRr as ge,
  WQt as _e,
  a$t as ve,
  b$t as ye,
  eMr as be,
  i$t as f,
  m0n as xe,
  nMr as p,
  njr as Se,
  tjr as Ce,
  wLr as m,
  x0n as we,
  y$t as h,
} from "./app-initial-ad16eaadf81f.js";
import {
  Av as Te,
  Cv as Ee,
  Dv as g,
  Hv as De,
  Sv as Oe,
  Uv as ke,
  jv as _,
  kv as Ae,
  oy as je,
  ty as v,
} from "./app-primary-3e00728c2a4c.js";
import {
  a as y,
  i as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  s as b,
  t as Ie,
} from "./share-conversation-action-61d6c8ca1283.js";
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
} from "./pca-connector-eligibility-f5d32777bb02.js";
import { n as w, t as Ue } from "./actions-d1a006959109.js";
import { n as We, t as Ge } from "./pca-connector-action-e4a9b762a947.js";
function Ke(e) {
  let n = (0, Xe.c)(65),
    { composerActions: r, beacon: i, beaconState: a, conversationId: o, serverConversationId: s } = e,
    c = t(te),
    {
      actionOverrides: re,
      allowConversationSharing: se,
      allowExternalActions: d,
      allowRemoteImages: me,
      getActionOverride: he,
      isTemporaryChat: f,
      onComposerText: p,
      onStartVoice: Se,
    } = r,
    { eventMetadata: m } = a,
    h = ie(),
    g = l(ge),
    De = u(i.action_items.some(Ye) ? ke : null, m),
    _ = g.authenticatedAccountId,
    v = g.userId,
    y;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { name: `chatgpt.workspace-discovery` }), (n[0] = y))
    : (y = n[0]);
  let b = u(i.action_items.some(je) ? Ce : null, y),
    x;
  n[1] === i.action_items ? (x = n[2]) : ((x = i.action_items.some(Je)), (n[1] = i.action_items), (n[2] = x));
  let S = x,
    C;
  n[3] === i.action_items ? (C = n[4]) : ((C = i.action_items.some(qe)), (n[3] = i.action_items), (n[4] = C));
  let Ve = C,
    w;
  n[5] === S ? (w = n[6]) : ((w = { enabled: S }), (n[5] = S), (n[6] = w));
  let { data: We, isError: Ke, isLoading: O } = l(be, w),
    Ze = l(fe),
    k = _ != null && v != null && g.accountId === _ ? _ : void 0,
    Qe = g.authLoading || g.accountLoading,
    A = k != null && g.accountStructure === `workspace`,
    j = (S || Ve) && A,
    M;
  n[7] === j ? (M = n[8]) : ((M = { enabled: j }), (n[7] = j), (n[8] = M));
  let { data: $e, isError: et, isLoading: tt } = u(de, k ?? ``, M),
    nt = !A || (!et && $e?.beta_settings.sunshine === !0),
    rt = A && tt,
    N;
  n[9] !== h || n[10] !== c
    ? ((N = () => {
        c.get(ae).danger(
          h.formatMessage({
            id: `settings.chatGpt.updateError`,
            defaultMessage: `Could not update this setting`,
            description: `Error toast when a ChatGPT account setting cannot be saved`,
          }),
          { errorAnalytics: { toastId: `settings.chatGpt.updateError` } },
        );
      }),
      (n[9] = h),
      (n[10] = c),
      (n[11] = N))
    : (N = n[11]);
  let P;
  n[12] === c ? (P = n[13]) : ((P = (e) => c.get(ae).success(e)), (n[12] = c), (n[13] = P));
  let F;
  n[14] !== a || n[15] !== o || n[16] !== c || n[17] !== s
    ? ((F = () => c.get(le, s ?? o) === a), (n[14] = a), (n[15] = o), (n[16] = c), (n[17] = s), (n[18] = F))
    : (F = n[18]);
  let it = Le({
      scope: c,
      allowExternalActions: d,
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
    at = l(Te),
    I = ne(),
    ot = ee(`/`),
    L = u(xe, o),
    R;
  n[19] === L ? (R = n[20]) : ((R = we(L)), (n[19] = L), (n[20] = R));
  let st = R,
    ct = Me(i.action_items),
    lt = u(Ie, ct ? o : null),
    ut = (0, T.useRef)(!1),
    [z, B] = (0, T.useState)(null),
    V;
  n[21] !== d || n[22] !== i.action_items
    ? ((V = d ? He(i.action_items) : []), (n[21] = d), (n[22] = i.action_items), (n[23] = V))
    : (V = n[23]);
  let dt = V,
    ft = dt.length > 0,
    H;
  n[24] === ft ? (H = n[25]) : ((H = { enabled: ft }), (n[24] = ft), (n[25] = H));
  let { data: pt, isError: mt, isLoading: ht } = u(Be, dt, H),
    U = a.productExperience,
    gt = {
      placement: `in_conversation`,
      productExperience: U,
      suppressLifecycle: m.suppressLifecycle,
      treatment: `conversation_inline`,
    },
    _t = () => {
      ue(c, o, a) && ye(c, { action: `dismiss`, beacon: i, ...gt });
    },
    W;
  n[26] !== d || n[27] !== B
    ? ((W = d
        ? (e) =>
            e.action_v2.action_enum === `open_connector_oauth_modal` &&
            (B({ action: e, connectorId: e.action_v2.connector_id }),
            { didComplete: !0, eventAccountId: void 0, shouldResolve: !1 })
        : void 0),
      (n[26] = d),
      (n[27] = B),
      (n[28] = W))
    : (W = n[28]);
  let G = {
      ...re,
      regenerate:
        r.allowRegeneration === !1
          ? void 0
          : Pe({
              scope: c,
              allowedModelSlug: r.regenerationModelSlug,
              conversationId: o,
              isTemporaryChat: f,
            }),
      open_connector_oauth_modal: W,
      share_conversation: Ne({ scope: c, canShare: se && d && !f && !st, conversationId: s }),
    },
    vt = (e) => {
      if (je(e)) {
        if (b == null || b.isLoading) return Oe;
        if (!b.isCapable) return Ee;
      }
      let t = Fe({
        action: e,
        getActionOverride: he,
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
            ? Ee
            : () => {
                let t = e.action_v2;
                if (t.action_enum !== `open_pca_connector_auth_modal`) return !1;
                let n = Ge(c, {
                  connectorId: t.connector_id,
                  conversationId: o,
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
  n[29] === I
    ? (K = n[30])
    : ((K = (e) => {
        I(e);
      }),
      (n[29] = I),
      (n[30] = K));
  let yt = {
      scope: c,
      beacon: i,
      appBaseUrl: new URL(ot, window.location.origin),
      actionOverrides: G,
      allowExternalActions: d,
      eventMetadata: m,
      featureAccessInputs: g,
      presencePromptId: De,
      getActionOverride: vt,
      navigate: K,
      onComposerText: p,
      onDismiss: _t,
      onStartVoice: Se,
      upsellHoldoutLayer: at,
      useExternalBrowser: !1,
    },
    q = Re({ actionItems: i.action_items, context: yt, variant: `inline` }),
    J;
  n[31] !== i.action_items || n[32] !== q.status
    ? ((J = i.action_items.slice(0, D).length > 0 && q.status === `supported`),
      (n[31] = i.action_items),
      (n[32] = q.status),
      (n[33] = J))
    : (J = n[33]);
  let Y = J,
    X;
  n[34] !== i ||
  n[35] !== a ||
  n[36] !== Y ||
  n[37] !== o ||
  n[38] !== m ||
  n[39] !== q.diagnostic ||
  n[40] !== q.status ||
  n[41] !== U ||
  n[42] !== c
    ? ((X = () => {
        if (q.status === `unsupported`) {
          (pe(c, o, a),
            ce(c, {
              beacon: i,
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
          ve({ beacon: i, eventType: `view`, metadata: m }),
          ye(c, {
            action: `impression`,
            beacon: i,
            placement: `in_conversation`,
            productExperience: U,
            suppressLifecycle: m.suppressLifecycle,
            treatment: `conversation_inline`,
          }));
      }),
      (n[34] = i),
      (n[35] = a),
      (n[36] = Y),
      (n[37] = o),
      (n[38] = m),
      (n[39] = q.diagnostic),
      (n[40] = q.status),
      (n[41] = U),
      (n[42] = c),
      (n[43] = X))
    : (X = n[43]);
  let Z;
  if (
    (n[44] !== i ||
    n[45] !== a ||
    n[46] !== Y ||
    n[47] !== o ||
    n[48] !== m ||
    n[49] !== q ||
    n[50] !== U ||
    n[51] !== c
      ? ((Z = [i, a, Y, o, m, q, U, c]),
        (n[44] = i),
        (n[45] = a),
        (n[46] = Y),
        (n[47] = o),
        (n[48] = m),
        (n[49] = q),
        (n[50] = U),
        (n[51] = c),
        (n[52] = Z))
      : (Z = n[52]),
    (0, T.useEffect)(X, Z),
    !Y)
  )
    return null;
  let Q;
  n[53] !== a || n[54] !== o || n[55] !== c
    ? ((Q = (e) => {
        Ae(e) && _e(c, o, a);
      }),
      (n[53] = a),
      (n[54] = o),
      (n[55] = c),
      (n[56] = Q))
    : (Q = n[56]);
  let $ = Q;
  if (z != null) {
    let e;
    n[57] !== z.action || n[58] !== $ || n[59] !== B
      ? ((e = (e) => {
          if (!e) {
            let e = z.action;
            (B(null), $(e));
          }
        }),
        (n[57] = z.action),
        (n[58] = $),
        (n[59] = B),
        (n[60] = e))
      : (e = n[60]);
    let t;
    return (
      n[61] !== z.connectorId || n[62] !== z.pcaResumeTarget || n[63] !== e
        ? ((t = (0, E.jsx)(ze, {
            connectorId: z.connectorId,
            pcaResumeTarget: z.pcaResumeTarget,
            onOpenChange: e,
          })),
          (n[61] = z.connectorId),
          (n[62] = z.pcaResumeTarget),
          (n[63] = e),
          (n[64] = t))
        : (t = n[64]),
      t
    );
  }
  let bt = (0, E.jsx)(Ue, {
    actionItems: i.action_items,
    actionOverrides: G,
    allowExternalActions: d,
    allowRemoteImages: me,
    analyticsContext: gt,
    beacon: i,
    eventMetadata: m,
    getActionOverride: vt,
    maxActions: D,
    onActionComplete: $,
    onComposerText: p,
    onDismiss: _t,
    onStartVoice: Se,
    variant: `inline`,
  });
  return i.ui_info.design === `card`
    ? (0, E.jsx)(`div`, {
        className: `mt-3 w-full max-w-sm`,
        children: (0, E.jsx)(oe, {
          content: (0, E.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              i.ui_info.primary_info_text
                ? (0, E.jsx)(`p`, {
                    className: `text-base leading-6 text-default select-none`,
                    children: i.ui_info.primary_info_text,
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
          i.ui_info.primary_info_text
            ? (0, E.jsx)(`p`, {
                className: `text-base leading-6 text-default select-none`,
                children: i.ui_info.primary_info_text,
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
    ((Xe = o()),
      re(),
      (T = r()),
      c(),
      a(),
      Se(),
      m(),
      d(),
      f(),
      S(),
      g(),
      w(),
      h(),
      Ve(),
      De(),
      x(),
      _(),
      v(),
      p(),
      se(),
      s(),
      n(),
      he(),
      We(),
      C(),
      b(),
      y(),
      me(),
      (E = i()),
      (D = 3));
  }))();
}
O();
export { Ke as ChatGptConversationInlineBeaconContent };
//# sourceMappingURL=inline-content-8955f46af97e.js.map
