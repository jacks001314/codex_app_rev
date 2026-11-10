import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as ee,
  LNt as te,
  MNt as ne,
  NNt as r,
  PBt as i,
  Qst as re,
  XOt as a,
  Yst as ie,
  ZSt as ae,
  iCt as oe,
  nCt as o,
  okt as se,
  tCt as ce,
  tkt as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Kt as ue,
  B1n as de,
  CMr as fe,
  CVn as pe,
  GIn as s,
  HKt as c,
  HOn as me,
  KBr as he,
  NKt as l,
  OIn as ge,
  Oqn as u,
  QKt as d,
  Tqn as _e,
  UOn as f,
  VKt as ve,
  VPn as ye,
  WNn as be,
  X1n as xe,
  Y1n as Se,
  ZKt as Ce,
  bMr as p,
  jKt as we,
  m0n as Te,
  n0n as Ee,
  q1n as De,
  r0n as Oe,
  rPn as m,
  u0n as ke,
  vQt as h,
  x0n as Ae,
  xVn as g,
  yQt as je,
} from "./app-initial-ad16eaadf81f.js";
import { Fi as Me, Ii as _, Ly as Ne, Ry as Pe } from "./app-primary-3e00728c2a4c.js";
import { a as Fe, o as Ie, r as Le, s as v } from "./chatgpt-assistant-message-content-7e3228434885.js";
import { n as Re, r as ze } from "./timestamp-separator-aa59edf121b2.js";
import { g as Be, h as y, n as Ve, t as He } from "./chatgpt-conversation-turn-content-8beb76dc50bb.js";
import {
  a as Ue,
  c as b,
  i as x,
  n as S,
  r as We,
  s as Ge,
  t as Ke,
} from "./suggestion-bindings-f51c91e7e7f8.js";
import { n as C, t as qe } from "./chatgpt-conversation-runtime-61b099de9e0f.js";
function w(e) {
  let n = (0, Je.c)(31),
    {
      browserConversationId: ee,
      canRequestQuote: te,
      conversationId: r,
      emptyState: i,
      flushTop: a,
      imageEngagementContext: ae,
      loadHistory: s,
      internalActionsEnabled: c,
      onHandoffSuccess: he,
      onRetry: l,
      pendingSubmission: u,
      pendingState: d,
      paragenEnabled: f,
      paragenPortalContainer: ye,
      renderInitialContentAsComplete: p,
      renderMode: m,
      showRequestUserInputStatus: h,
      trackShownImpressions: g,
      turnActions: _,
      renderAdditionalTurnActions: Ne,
    } = e,
    Fe = a !== void 0 && a,
    v = s === void 0 || s,
    ze = c === void 0 || c,
    y = u === void 0 ? null : u,
    Ve = f === void 0 || f,
    b = p !== void 0 && p,
    x = m === void 0 ? `sidebar` : m,
    S = h !== void 0 && h,
    C = g === void 0 || g,
    w = t(re),
    D = o(je, r),
    Xe = o(Pe, r),
    O = se(),
    Ze = o(we, r),
    Qe = o(ge, r),
    k = Ve && x === `conversation` ? Ze : null,
    A = o(de, r);
  o(qe, v ? A : null);
  let $e = o(Se, r),
    j = o(De, r),
    M = o(xe, r),
    et = o(Ee, r),
    tt = o(Oe, r),
    nt = o(Te, r),
    rt = o(ke, r),
    it = ce(be, v ? A : null),
    N = oe(it),
    at = et != null,
    ot = Ae(nt),
    P = N.data?.conversation_origin ?? j,
    F = P === `tpp` || !1,
    I = F || x === `conversation` ? `primary` : `sidebar`,
    L = oe(P === `tpp` || P === `flora` ? ue : Ce),
    st = P !== `tpp` && P !== `flora` && L,
    R;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = Ue()), (n[0] = R)) : (R = n[0]);
  let ct = R,
    z;
  n[1] === w ? (z = n[2]) : ((z = (e) => ve(w.get, e)), (n[1] = w), (n[2] = z));
  let {
      renderedConversation: lt,
      renderedTurns: ut,
      showPendingLoadingMessage: B,
    } = ct({
      conversation: N.data,
      clinicalSearchEnabled: st,
      clinicalCitationsEnabled: L,
      conversationOrigin: P,
      getRenderTelemetry: z,
      isStreaming: ot,
      isWorkConversation: F,
      mode: F ? `conversation` : x,
      moderationDisclaimersByMessageId: tt,
      streamingOrders: D,
      pendingSubmission: y == null ? null : { ...y, renderMarkdown: Qe },
      threadCurrentNode: $e,
      threadMapping: et,
    }),
    V = ut.length > 0,
    H;
  n[3] !== V || n[4] !== b ? ((H = () => !b || !V), (n[3] = V), (n[4] = b), (n[5] = H)) : (H = n[5]);
  let [dt] = (0, T.useState)(H),
    ft = Ge({
      paragen: k,
      browserConversationId: ee,
      conversationId: r,
      errorMessage: M,
      isReadOnly: x === `sidebar`,
      isWorkConversation: F,
      onEditUserMessage: void 0,
      onFork: void 0,
      renderedTurns:
        k == null || lt == null
          ? ut
          : _e(
              { ...lt, current_node: k.promptMessageId },
              {
                clinicalSearchEnabled: st,
                clinicalCitationsEnabled: L,
                streamingOrders: D,
                isWorkConversation: F,
                getRenderTelemetry: (e) => ve(w.get, e),
              },
            ),
      safetyReview: rt,
      showPendingLoadingMessage: B,
      showRequestUserInputStatus: S,
    }),
    pt = o(Be, r),
    U;
  n[6] === O
    ? (U = n[7])
    : ((U = O.formatMessage({
        id: `chatgptConversations.loadingConversation`,
        defaultMessage: `Loading ChatGPT conversation`,
        description: `Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop`,
      })),
      (n[6] = O),
      (n[7] = U));
  let mt = U,
    ht = A != null && N.isLoading && !at,
    W = N.isError && !at,
    G;
  n[8] !== N.data ||
  n[9] !== N.error ||
  n[10] !== W ||
  n[11] !== w ||
  n[12] !== A ||
  n[13] !== j ||
  n[14] !== C
    ? ((G = () => {
        if (!W || !C || N.error == null || Ye.has(N.error)) return;
        Ye.add(N.error);
        let e = N.data?.conversation_origin ?? j;
        pe(w.get(fe).logProductEvent, {
          conversationId: A,
          error: N.error,
          isWorkConversation: e == null && N.data == null ? null : e === `tpp` || e === `flora`,
        });
      }),
      (n[8] = N.data),
      (n[9] = N.error),
      (n[10] = W),
      (n[11] = w),
      (n[12] = A),
      (n[13] = j),
      (n[14] = C),
      (n[15] = G))
    : (G = n[15]);
  let K = (0, T.useEffectEvent)(G),
    q;
  n[16] === K
    ? (q = n[17])
    : ((q = () => {
        K();
      }),
      (n[16] = K),
      (n[17] = q));
  let J;
  (n[18] !== r || n[19] !== N.error || n[20] !== W || n[21] !== C
    ? ((J = [r, N.error, W, C]), (n[18] = r), (n[19] = N.error), (n[20] = W), (n[21] = C), (n[22] = J))
    : (J = n[22]),
    (0, T.useEffect)(q, J));
  let Y = I === `primary` ? `gap-3` : `gap-1.5`,
    X;
  n[23] === Y ? (X = n[24]) : ((X = ne(`flex min-h-full flex-1 flex-col`, Y)), (n[23] = Y), (n[24] = X));
  let Z;
  n[25] === r ? (Z = n[26]) : ((Z = (0, E.jsx)(Le, { conversationId: r })), (n[25] = r), (n[26] = Z));
  let Q = W
      ? (0, E.jsx)(`div`, {
          className: `rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default`,
          children: (0, E.jsx)(le, {
            id: `chatgptConversations.loadError`,
            defaultMessage: `Could not load this ChatGPT conversation`,
            description: `Error state when a ChatGPT conversation fetch fails`,
          }),
        })
      : ht
        ? (0, E.jsx)(`div`, {
            "aria-busy": `true`,
            "aria-label": mt,
            className: `relative min-h-0 flex-1`,
            role: `status`,
            children: (0, E.jsx)(me, { debugName: `ChatGptConversationTranscript`, fillParent: !0 }),
          })
        : !V && ot && M == null && d !== void 0
          ? d
          : !V && !B && M == null
            ? i === void 0
              ? !Xe &&
                (0, E.jsx)(`div`, {
                  className: `rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description`,
                  children: (0, E.jsx)(le, {
                    id: `chatgptConversations.emptyConversation`,
                    defaultMessage: `No renderable ChatGPT messages were found in this conversation`,
                    description: `Empty state when a ChatGPT conversation has no user or assistant text messages`,
                  }),
                })
              : i
            : (0, E.jsxs)(E.Fragment, {
                children: [
                  Ke(ft, pt, r).map((e, t) =>
                    (0, E.jsxs)(
                      `div`,
                      {
                        className: ne(`flex flex-col`, I === `sidebar` && `gap-1.5`),
                        "data-chatgpt-conversation-turn": `true`,
                        "data-chatgpt-conversation-turn-id": e.id,
                        children: [
                          e.timestampSeparatorAtMs == null
                            ? null
                            : (0, E.jsx)(Re, { sentAtMs: e.timestampSeparatorAtMs }),
                          (0, E.jsxs)(`div`, {
                            className: `flex flex-col gap-1.5`,
                            children: [
                              (0, E.jsxs)(Ie, {
                                value: dt,
                                children: [
                                  (0, E.jsx)(He, {
                                    browserConversationId: e.browserConversationId,
                                    canRequestQuote: te,
                                    conversationId: e.conversationId,
                                    conversationType: I,
                                    flushTop: Fe && t === 0,
                                    hasLaterSitesPreview: e.hasLaterSitesPreview,
                                    hostId: ie,
                                    imageEngagementContext: ae,
                                    isMostRecentTurn: e.isMostRecentTurn,
                                    isReadOnly: e.isReadOnly,
                                    isTemporaryChat: e.isTemporaryChat,
                                    isParagen: e.paragen != null,
                                    isWorkConversation: e.isWorkConversation,
                                    readAloudEnabled: e.readAloudEnabled,
                                    onEditUserMessage: e.onEditUserMessage,
                                    onFork: e.onFork,
                                    onHandoffSuccess: he,
                                    pendingSubmissionAttachments: e.isMostRecentTurn
                                      ? y?.attachments
                                      : void 0,
                                    referenceImageSuggestionActionInput:
                                      e.referenceImageSuggestionActionInput,
                                    safetyReview: e.safetyReview,
                                    trackShownImpressions: C,
                                    internalActionsEnabled: ze,
                                    renderAdditionalTurnActions: e.isMostRecentTurn ? Ne : void 0,
                                    turnActions: _ === void 0 || t === ft.length - 1 ? _ : null,
                                    turn: e.turn,
                                    turnId: e.id,
                                  }),
                                  e.paragen == null
                                    ? null
                                    : (0, E.jsx)(
                                        We,
                                        {
                                          compact: !0,
                                          comparison: e.paragen,
                                          conversationId: e.conversationId,
                                          hostId: ie,
                                          isTemporaryChat: e.isTemporaryChat,
                                          isWorkConversation: e.isWorkConversation,
                                          portalContainer: ye,
                                          trackTaskViews: C,
                                        },
                                        e.paragen.promptMessageId,
                                      ),
                                ],
                              }),
                              e.isMostRecentTurn
                                ? (0, E.jsx)(Me, {
                                    conversationId: r,
                                    errorMessage: e.errorMessage,
                                    onRetry: l,
                                    isWorkConversation: e.isWorkConversation,
                                    showPendingLoadingMessage: e.showPendingLoadingMessage,
                                    showRequestUserInputStatus: e.showRequestUserInputStatus,
                                    trackShownImpressions: C,
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
                    : (0, E.jsx)(Me, {
                        conversationId: r,
                        errorMessage: M,
                        onRetry: l,
                        isWorkConversation: F,
                        showPendingLoadingMessage: B,
                        showRequestUserInputStatus: S,
                        trackShownImpressions: C,
                      }),
                ],
              }),
    $;
  return (
    n[27] !== X || n[28] !== Z || n[29] !== Q
      ? (($ = (0, E.jsxs)(`div`, { className: X, children: [Z, Q] })),
        (n[27] = X),
        (n[28] = Z),
        (n[29] = Q),
        (n[30] = $))
      : ($ = n[30]),
    $
  );
}
var Je, T, E, Ye;
function D() {
  return (D = e(() => {
    ((Je = i()),
      r(),
      ae(),
      (T = ee()),
      a(),
      ze(),
      f(),
      p(),
      d(),
      n(),
      he(),
      Ne(),
      s(),
      u(),
      m(),
      b(),
      _(),
      C(),
      Ve(),
      g(),
      v(),
      ye(),
      x(),
      l(),
      S(),
      y(),
      h(),
      Fe(),
      c(),
      (E = te()),
      (Ye = new WeakSet()));
  }))();
}
export { D as n, w as t };
//# sourceMappingURL=chatgpt-conversation-transcript-5d7a9d4bd0dd.js.map
