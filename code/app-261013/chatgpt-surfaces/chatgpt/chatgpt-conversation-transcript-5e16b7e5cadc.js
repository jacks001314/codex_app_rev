import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as ee,
  Ixt as te,
  Pxt as n,
  Rxt as ne,
  VDt as re,
  Vxt as r,
  _Mt as ie,
  gMt as ae,
  iot as oe,
  jDt as se,
  vzt as i,
  wot as a,
  xMt as o,
  yzt as ce,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Jt as le,
  AZn as ue,
  CZn as de,
  CZt as c,
  FAn as l,
  JZn as fe,
  LZn as pe,
  SAn as me,
  SZn as he,
  VZn as ge,
  YJt as _e,
  ZDr as u,
  aWn as d,
  bTn as f,
  bZn as ve,
  dYt as p,
  eOr as ye,
  eYt as be,
  fYt as xe,
  iNn as Se,
  iRn as m,
  kZn as Ce,
  lYt as we,
  oFr as h,
  oRn as Te,
  pZn as Ee,
  qJt as De,
  rWn as Oe,
  uYt as ke,
  wZt as Ae,
  xNn as g,
  yTn as je,
  yjn as _,
} from "./app-initial-5851df3f6cb1.js";
import { Mi as Me, Ni as v, gy as Ne, hy as Pe } from "./app-primary-fe8a450b3b04.js";
import { a as Fe, o as Ie, r as Le, s as y } from "./chatgpt-assistant-message-content-657f67d40f20.js";
import { n as Re, r as ze } from "./timestamp-separator-ed5adecdcb04.js";
import { g as Be, h as b, n as Ve, t as He } from "./chatgpt-conversation-turn-content-5befb8be879e.js";
import {
  a as Ue,
  i as x,
  n as S,
  o as We,
  r as Ge,
  s as C,
  t as Ke,
} from "./suggestion-bindings-5f4e7dcae7ac.js";
import { n as w, t as qe } from "./chatgpt-conversation-runtime-61505fa1e4f0.js";
function T(e) {
  let n = (0, Je.c)(30),
    {
      browserConversationId: ie,
      canRequestQuote: se,
      conversationId: i,
      emptyState: a,
      flushTop: o,
      imageEngagementContext: ce,
      loadHistory: c,
      internalActionsEnabled: l,
      onHandoffSuccess: _e,
      onRetry: u,
      pendingSubmission: d,
      pendingState: f,
      paragenEnabled: p,
      paragenPortalContainer: be,
      renderInitialContentAsComplete: m,
      renderMode: h,
      showRequestUserInputStatus: g,
      trackShownImpressions: _,
      turnActions: v,
      renderAdditionalTurnActions: Pe,
    } = e,
    Fe = o !== void 0 && o,
    y = c === void 0 || c,
    ze = l === void 0 || l,
    b = d === void 0 ? null : d,
    Ve = p === void 0 || p,
    x = m !== void 0 && m,
    S = h === void 0 ? `sidebar` : h,
    C = g !== void 0 && g,
    w = _ === void 0 || _,
    T = te(t),
    k = s(Ae, i),
    Ye = s(Ne, i),
    A = re(),
    Xe = s(De, i),
    Ze = s(Se, i),
    j = Ve && S === `conversation` ? Xe : null,
    M = s(Ee, i);
  s(qe, y ? M : null);
  let Qe = s(he, i),
    N = s(ve, i),
    P = s(de, i),
    $e = s(Ce, i),
    et = s(ue, i),
    tt = s(ge, i),
    nt = s(pe, i),
    rt = ne(me, y ? M : null),
    F = r(rt),
    it = $e != null,
    at = fe(tt),
    I = F.data?.conversation_origin ?? N,
    L = I === `tpp` || !1,
    R = L || S === `conversation` ? `primary` : `sidebar`,
    ot = r(L ? null : ke) === !0,
    st = r(I === `tpp` || I === `flora` ? xe : we),
    z;
  n[0] === T ? (z = n[1]) : ((z = (e) => le(T.get, e)), (n[0] = T), (n[1] = z));
  let {
      renderedConversation: ct,
      renderedTurns: lt,
      showPendingLoadingMessage: B,
    } = Ue({
      conversation: F.data,
      clinicalSearchEnabled: ot,
      clinicalCitationsEnabled: st,
      conversationOrigin: I,
      getRenderTelemetry: z,
      isStreaming: at,
      isWorkConversation: L,
      mode: L ? `conversation` : S,
      moderationDisclaimersByMessageId: et,
      streamingOrders: k,
      pendingSubmission: b == null ? null : { ...b, renderMarkdown: Ze },
      threadCurrentNode: Qe,
      threadMapping: $e,
    }),
    V = lt.length > 0,
    H;
  n[2] !== V || n[3] !== x ? ((H = () => !x || !V), (n[2] = V), (n[3] = x), (n[4] = H)) : (H = n[4]);
  let [ut] = (0, E.useState)(H),
    dt = We({
      paragen: j,
      browserConversationId: ie,
      conversationId: i,
      errorMessage: P,
      isReadOnly: S === `sidebar`,
      isWorkConversation: L,
      onEditUserMessage: void 0,
      onFork: void 0,
      renderedTurns:
        j == null || ct == null
          ? lt
          : Oe(
              { ...ct, current_node: j.promptMessageId },
              {
                clinicalSearchEnabled: ot,
                clinicalCitationsEnabled: st,
                streamingOrders: k,
                isWorkConversation: L,
                getRenderTelemetry: (e) => le(T.get, e),
              },
            ),
      safetyReview: nt,
      showPendingLoadingMessage: B,
      showRequestUserInputStatus: C,
    }),
    ft = s(Be, i),
    U;
  n[5] === A
    ? (U = n[6])
    : ((U = A.formatMessage({
        id: `chatgptConversations.loadingConversation`,
        defaultMessage: `Loading ChatGPT conversation`,
        description: `Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop`,
      })),
      (n[5] = A),
      (n[6] = U));
  let pt = U,
    mt = M != null && F.isLoading && !it,
    W = F.isError && !it,
    G;
  n[7] !== F.data ||
  n[8] !== F.error ||
  n[9] !== W ||
  n[10] !== T ||
  n[11] !== M ||
  n[12] !== N ||
  n[13] !== w
    ? ((G = () => {
        if (!W || !w || F.error == null || O.has(F.error)) return;
        O.add(F.error);
        let e = F.data?.conversation_origin ?? N;
        Te(T.get(ye).logProductEvent, {
          conversationId: M,
          error: F.error,
          isWorkConversation: e == null && F.data == null ? null : e === `tpp` || e === `flora`,
        });
      }),
      (n[7] = F.data),
      (n[8] = F.error),
      (n[9] = W),
      (n[10] = T),
      (n[11] = M),
      (n[12] = N),
      (n[13] = w),
      (n[14] = G))
    : (G = n[14]);
  let K = (0, E.useEffectEvent)(G),
    q;
  n[15] === K
    ? (q = n[16])
    : ((q = () => {
        K();
      }),
      (n[15] = K),
      (n[16] = q));
  let J;
  (n[17] !== i || n[18] !== F.error || n[19] !== W || n[20] !== w
    ? ((J = [i, F.error, W, w]), (n[17] = i), (n[18] = F.error), (n[19] = W), (n[20] = w), (n[21] = J))
    : (J = n[21]),
    (0, E.useEffect)(q, J));
  let Y = R === `primary` ? `gap-3` : `gap-1.5`,
    X;
  n[22] === Y ? (X = n[23]) : ((X = ae(`flex min-h-full flex-1 flex-col`, Y)), (n[22] = Y), (n[23] = X));
  let Z;
  n[24] === i ? (Z = n[25]) : ((Z = (0, D.jsx)(Le, { conversationId: i })), (n[24] = i), (n[25] = Z));
  let Q = W
      ? (0, D.jsx)(`div`, {
          className: `rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default`,
          children: (0, D.jsx)(ee, {
            id: `chatgptConversations.loadError`,
            defaultMessage: `Could not load this ChatGPT conversation`,
            description: `Error state when a ChatGPT conversation fetch fails`,
          }),
        })
      : mt
        ? (0, D.jsx)(`div`, {
            "aria-busy": `true`,
            "aria-label": pt,
            className: `relative min-h-0 flex-1`,
            role: `status`,
            children: (0, D.jsx)(je, { debugName: `ChatGptConversationTranscript`, fillParent: !0 }),
          })
        : !V && at && P == null && f !== void 0
          ? f
          : !V && !B && P == null
            ? a === void 0
              ? !Ye &&
                (0, D.jsx)(`div`, {
                  className: `rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description`,
                  children: (0, D.jsx)(ee, {
                    id: `chatgptConversations.emptyConversation`,
                    defaultMessage: `No renderable ChatGPT messages were found in this conversation`,
                    description: `Empty state when a ChatGPT conversation has no user or assistant text messages`,
                  }),
                })
              : a
            : (0, D.jsxs)(D.Fragment, {
                children: [
                  Ke(dt, ft, i).map((e, t) =>
                    (0, D.jsxs)(
                      `div`,
                      {
                        className: ae(`flex flex-col`, R === `sidebar` && `gap-1.5`),
                        "data-chatgpt-conversation-turn": `true`,
                        "data-chatgpt-conversation-turn-id": e.id,
                        children: [
                          e.timestampSeparatorAtMs == null
                            ? null
                            : (0, D.jsx)(Re, { sentAtMs: e.timestampSeparatorAtMs }),
                          (0, D.jsxs)(`div`, {
                            className: `flex flex-col gap-1.5`,
                            children: [
                              (0, D.jsxs)(Ie, {
                                value: ut,
                                children: [
                                  (0, D.jsx)(He, {
                                    browserConversationId: e.browserConversationId,
                                    canRequestQuote: se,
                                    conversationId: e.conversationId,
                                    conversationType: R,
                                    flushTop: Fe && t === 0,
                                    hasLaterSitesPreview: e.hasLaterSitesPreview,
                                    hostId: oe,
                                    imageEngagementContext: ce,
                                    isMostRecentTurn: e.isMostRecentTurn,
                                    isReadOnly: e.isReadOnly,
                                    isTemporaryChat: e.isTemporaryChat,
                                    isParagen: e.paragen != null,
                                    isWorkConversation: e.isWorkConversation,
                                    readAloudEnabled: e.readAloudEnabled,
                                    onEditUserMessage: e.onEditUserMessage,
                                    onFork: e.onFork,
                                    onHandoffSuccess: _e,
                                    pendingSubmissionAttachments: e.isMostRecentTurn
                                      ? b?.attachments
                                      : void 0,
                                    referenceImageSuggestionActionInput:
                                      e.referenceImageSuggestionActionInput,
                                    safetyReview: e.safetyReview,
                                    trackShownImpressions: w,
                                    internalActionsEnabled: ze,
                                    renderAdditionalTurnActions: e.isMostRecentTurn ? Pe : void 0,
                                    turnActions: v === void 0 || t === dt.length - 1 ? v : null,
                                    turn: e.turn,
                                    turnId: e.id,
                                  }),
                                  e.paragen == null
                                    ? null
                                    : (0, D.jsx)(
                                        Ge,
                                        {
                                          compact: !0,
                                          comparison: e.paragen,
                                          conversationId: e.conversationId,
                                          hostId: oe,
                                          isTemporaryChat: e.isTemporaryChat,
                                          isWorkConversation: e.isWorkConversation,
                                          portalContainer: be,
                                          trackTaskViews: w,
                                        },
                                        e.paragen.promptMessageId,
                                      ),
                                ],
                              }),
                              e.isMostRecentTurn
                                ? (0, D.jsx)(Me, {
                                    conversationId: i,
                                    errorMessage: e.errorMessage,
                                    onRetry: u,
                                    isWorkConversation: e.isWorkConversation,
                                    showPendingLoadingMessage: e.showPendingLoadingMessage,
                                    showRequestUserInputStatus: e.showRequestUserInputStatus,
                                    trackShownImpressions: w,
                                  })
                                : null,
                            ],
                          }),
                        ],
                      },
                      e.turnKey,
                    ),
                  ),
                  V
                    ? null
                    : (0, D.jsx)(Me, {
                        conversationId: i,
                        errorMessage: P,
                        onRetry: u,
                        isWorkConversation: L,
                        showPendingLoadingMessage: B,
                        showRequestUserInputStatus: C,
                        trackShownImpressions: w,
                      }),
                ],
              }),
    $;
  return (
    n[26] !== X || n[27] !== Z || n[28] !== Q
      ? (($ = (0, D.jsxs)(`div`, { className: X, children: [Z, Q] })),
        (n[26] = X),
        (n[27] = Z),
        (n[28] = Q),
        (n[29] = $))
      : ($ = n[29]),
    $
  );
}
var Je, E, D, O;
function k() {
  return (k = e(() => {
    ((Je = i()),
      ie(),
      n(),
      (E = ce()),
      se(),
      ze(),
      f(),
      u(),
      p(),
      a(),
      h(),
      Pe(),
      g(),
      d(),
      l(),
      C(),
      v(),
      w(),
      Ve(),
      m(),
      y(),
      _(),
      x(),
      _e(),
      S(),
      b(),
      c(),
      Fe(),
      be(),
      (D = o()),
      (O = new WeakSet()));
  }))();
}
export { k as n, T as t };
//# sourceMappingURL=chatgpt-conversation-transcript-5e16b7e5cadc.js.map
