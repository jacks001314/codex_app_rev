import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Xt as n,
  $et as r,
  A3t as i,
  Amn as a,
  Cpn as o,
  F3t as ee,
  KYt as s,
  Kht as te,
  M3t as ne,
  N3t as c,
  Nmt as l,
  O3t as u,
  Opn as re,
  Pmt as ie,
  Qgt as ae,
  Qht as oe,
  Rht as se,
  Spn as d,
  Wht as ce,
  Zet as le,
  Zht as ue,
  _gt as f,
  _ht as p,
  a3t as de,
  e4t as m,
  e_t as h,
  hmn as g,
  htt as fe,
  iR as _,
  kmn as v,
  lV as y,
  mtt as b,
  nZt as pe,
  not as x,
  o3t as me,
  ogt as he,
  oht as ge,
  qht as _e,
  rR as ve,
  rgt as ye,
  tot as be,
  uV as S,
  vgt as xe,
} from "./app-initial-f094ef01c64d.js";
import {
  Ad as C,
  Al as Se,
  Ol as w,
  _a as T,
  dl as E,
  jl as D,
  kd as Ce,
  kl as O,
  ll as we,
  va as k,
} from "./app-primary-4c40d73a1074.js";
import { a as Te, o as A } from "./safety-buffering-status-transition-32d2dc8853a3.js";
import {
  d as Ee,
  f as De,
  i as j,
  l as Oe,
  n as M,
  p as N,
  r as ke,
  t as Ae,
  u as P,
} from "./viewer-96aa1026c85b.js";
function F(e) {
  let t = (0, I.c)(28),
    {
      browserConversationId: n,
      conversationId: r,
      emptyState: a,
      onHandoffSuccess: s,
      pendingSubmission: l,
      paragenEnabled: u,
      paragenPortalContainer: ie,
      renderInitialContentAsComplete: d,
      renderMode: f,
      trackShownImpressions: p,
    } = e,
    h = l === void 0 ? null : l,
    g = u === void 0 || u,
    _ = d !== void 0 && d,
    v = f === void 0 ? `sidebar` : f,
    y = p === void 0 || p,
    b = i(de),
    x = re(),
    me = c(le, r),
    S = g && v === `conversation` ? me : null,
    C = c(se, r);
  c(Oe, C);
  let Se = c(te, r),
    w = c(ce, r),
    E = c(_e, r),
    D = c(ue, r),
    O = c(oe, r),
    k = c(he, r),
    A = c(ye, r),
    j = ee(ne(ge, C)),
    M = D != null,
    N = xe(k),
    P = (j.data?.conversation_origin ?? w) === `tpp` || !1,
    F;
  t[0] === b ? (F = t[1]) : ((F = (e) => be(b.get, e)), (t[0] = b), (t[1] = F));
  let {
      renderedConversation: z,
      renderedTurns: B,
      showPendingLoadingMessage: V,
    } = Ee({
      conversation: j.data,
      getRenderTelemetry: F,
      isStreaming: N,
      mode: P ? `conversation` : v,
      moderationDisclaimersByMessageId: O,
      pendingSubmission: h,
      threadCurrentNode: Se,
      threadMapping: D,
    }),
    H = B.length > 0,
    U;
  t[2] !== H || t[3] !== _
    ? ((U = () => !_ || !H), (t[2] = H), (t[3] = _), (t[4] = U))
    : (U = t[4]);
  let [je] = (0, L.useState)(U),
    Me = De({
      paragen: S,
      browserConversationId: n,
      conversationId: r,
      errorMessage: E,
      isWorkConversation: P,
      onEditUserMessage: void 0,
      onFork: void 0,
      renderedTurns:
        S == null || z == null
          ? B
          : ae(
              { ...z, current_node: S.promptMessageId },
              { getRenderTelemetry: (e) => be(b.get, e) },
            ),
      safetyReview: A,
      showPendingLoadingMessage: V,
    }),
    W;
  t[5] === x
    ? (W = t[6])
    : ((W = x.formatMessage({
        id: `chatgptConversations.loadingConversation`,
        defaultMessage: `Loading ChatGPT conversation`,
        description: `Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop`,
      })),
      (t[5] = x),
      (t[6] = W));
  let Ne = W,
    Pe = C != null && j.isLoading && !M,
    G = j.isError && !M,
    K = (0, L.useRef)(null),
    q;
  t[7] !== r ||
  t[8] !== j.data ||
  t[9] !== j.error ||
  t[10] !== G ||
  t[11] !== b ||
  t[12] !== C ||
  t[13] !== w ||
  t[14] !== y
    ? ((q = () => {
        if (!G) {
          K.current = null;
          return;
        }
        if (!y || (K.current?.conversationId === r && K.current.error === j.error)) return;
        K.current = { conversationId: r, error: j.error };
        let e = j.data?.conversation_origin ?? w;
        fe(b.get(pe).logProductEvent, {
          conversationId: C,
          error: j.error,
          isWorkConversation: e == null && j.data == null ? null : e === `tpp` || e === `flora`,
        });
      }),
      (t[7] = r),
      (t[8] = j.data),
      (t[9] = j.error),
      (t[10] = G),
      (t[11] = b),
      (t[12] = C),
      (t[13] = w),
      (t[14] = y),
      (t[15] = q))
    : (q = t[15]);
  let J = (0, L.useEffectEvent)(q),
    Y;
  t[16] === J
    ? (Y = t[17])
    : ((Y = () => {
        J();
      }),
      (t[16] = J),
      (t[17] = Y));
  let X;
  (t[18] !== r || t[19] !== j.error || t[20] !== G || t[21] !== y
    ? ((X = [r, j.error, G, y]),
      (t[18] = r),
      (t[19] = j.error),
      (t[20] = G),
      (t[21] = y),
      (t[22] = X))
    : (X = t[22]),
    (0, L.useEffect)(Y, X));
  let Z;
  t[23] === r
    ? (Z = t[24])
    : ((Z = (0, R.jsx)(we, { conversationId: r })), (t[23] = r), (t[24] = Z));
  let Q = G
      ? (0, R.jsx)(`div`, {
          className: `rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default`,
          children: (0, R.jsx)(o, {
            id: `chatgptConversations.loadError`,
            defaultMessage: `Could not load this ChatGPT conversation`,
            description: `Error state when a ChatGPT conversation fetch fails`,
          }),
        })
      : Pe
        ? (0, R.jsx)(`div`, {
            "aria-busy": `true`,
            "aria-label": Ne,
            className: `relative min-h-0 flex-1`,
            role: `status`,
            children: (0, R.jsx)(ve, {
              debugName: `ChatGptConversationTranscript`,
              fillParent: !0,
            }),
          })
        : !H && !V
          ? a === void 0
            ? (0, R.jsx)(`div`, {
                className: `rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description`,
                children: (0, R.jsx)(o, {
                  id: `chatgptConversations.emptyConversation`,
                  defaultMessage: `No renderable ChatGPT messages were found in this conversation`,
                  description: `Empty state when a ChatGPT conversation has no user or assistant text messages`,
                }),
              })
            : a
          : (0, R.jsxs)(R.Fragment, {
              children: [
                Me.map((e) =>
                  (0, R.jsxs)(
                    `div`,
                    {
                      className: `flex flex-col gap-1.5`,
                      "data-chatgpt-conversation-turn": `true`,
                      "data-chatgpt-conversation-turn-id": e.turnKey,
                      children: [
                        e.timestampSeparatorAtMs == null
                          ? null
                          : (0, R.jsx)(Te, { sentAtMs: e.timestampSeparatorAtMs }),
                        (0, R.jsxs)(Ce, {
                          value: je,
                          children: [
                            (0, R.jsx)(ke, {
                              browserConversationId: e.browserConversationId,
                              conversationId: e.conversationId,
                              hostId: m,
                              isMostRecentTurn: e.isMostRecentTurn,
                              isTemporaryChat: e.isTemporaryChat,
                              isParagen: e.paragen != null,
                              isWorkConversation: e.isWorkConversation,
                              readAloudEnabled: e.readAloudEnabled,
                              onEditUserMessage: e.onEditUserMessage,
                              onFork: e.onFork,
                              onHandoffSuccess: s,
                              pendingSubmissionAttachments: e.isMostRecentTurn
                                ? h?.attachments
                                : void 0,
                              safetyReview: e.safetyReview,
                              trackShownImpressions: y,
                              turn: e.turn,
                              turnId: e.id,
                            }),
                            e.paragen == null
                              ? null
                              : (0, R.jsx)(
                                  Ae,
                                  {
                                    compact: !0,
                                    comparison: e.paragen,
                                    conversationId: e.conversationId,
                                    hostId: m,
                                    isTemporaryChat: e.isTemporaryChat,
                                    isWorkConversation: e.isWorkConversation,
                                    portalContainer: ie,
                                  },
                                  e.paragen.promptMessageId,
                                ),
                          ],
                        }),
                        e.isMostRecentTurn
                          ? (0, R.jsx)(T, {
                              conversationId: r,
                              errorMessage: e.errorMessage,
                              isWorkConversation: e.isWorkConversation,
                              showPendingLoadingMessage: e.showPendingLoadingMessage,
                              trackShownImpressions: y,
                            })
                          : null,
                      ],
                    },
                    e.turnKey,
                  ),
                ),
                H
                  ? null
                  : (0, R.jsx)(T, {
                      conversationId: r,
                      errorMessage: E,
                      isWorkConversation: P,
                      showPendingLoadingMessage: V,
                      trackShownImpressions: y,
                    }),
              ],
            }),
    $;
  return (
    t[25] !== Z || t[26] !== Q
      ? (($ = (0, R.jsxs)(`div`, {
          className: `flex min-h-full flex-1 flex-col gap-1.5`,
          children: [Z, Q],
        })),
        (t[25] = Z),
        (t[26] = Q),
        (t[27] = $))
      : ($ = t[27]),
    $
  );
}
var I,
  L,
  R,
  z = e(() => {
    ((I = v()),
      u(),
      (L = t(a(), 1)),
      d(),
      A(),
      _(),
      n(),
      me(),
      s(),
      h(),
      p(),
      N(),
      k(),
      P(),
      j(),
      b(),
      C(),
      f(),
      r(),
      M(),
      E(),
      x(),
      (R = g()));
  });
function B(e) {
  let t = (0, V.c)(4),
    { conversationId: n } = e,
    r = (0, H.useContext)(y),
    i = c(l, n),
    a = c(O, n),
    o;
  return (
    t[0] !== a || t[1] !== r || t[2] !== i
      ? ((o =
          a == null
            ? null
            : (0, U.jsx)(y, {
                value: i ? `restricted` : r,
                children: (0, U.jsx)(Se, { business: a, isOptimistic: !0 }),
              })),
        (t[0] = a),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
var V,
  H,
  U,
  je = e(() => {
    ((V = v()), u(), (H = t(a(), 1)), S(), ie(), D(), w(), (U = g()));
  });
export { z as i, je as n, F as r, B as t };
//# sourceMappingURL=optimistic-metadata-a01dfc49514b.js.map
