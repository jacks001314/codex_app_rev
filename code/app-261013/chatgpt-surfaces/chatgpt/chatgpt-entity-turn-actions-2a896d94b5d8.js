import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  IDt as i,
  Ixt as a,
  NB as o,
  Pxt as s,
  TJ as c,
  TO as l,
  VDt as u,
  Vxt as d,
  cz as f,
  hot as ee,
  hrt as p,
  jDt as m,
  lot as h,
  rJ as g,
  sz as _,
  t3 as v,
  tJ as y,
  vrt as b,
  vzt as x,
  wU as te,
  xMt as S,
  xU as ne,
  yzt as C,
  zxt as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as w,
  QDr as T,
  XDr as E,
  XO as ie,
  YO as D,
  Ymr as ae,
  ehr as O,
  gwr as oe,
  pZn as k,
  yjn as A,
} from "./app-initial-5851df3f6cb1.js";
var j, M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((j = (function (e) {
      return (
        (e.CHATGPT_FEEDBACK_ACTION_UNSPECIFIED = `CHATGPT_FEEDBACK_ACTION_UNSPECIFIED`),
        (e.CHATGPT_FEEDBACK_ACTION_REPORT_SUBMITTED = `CHATGPT_FEEDBACK_ACTION_REPORT_SUBMITTED`),
        (e.CHATGPT_FEEDBACK_ACTION_CONTACT_SUPPORT_CLICKED = `CHATGPT_FEEDBACK_ACTION_CONTACT_SUPPORT_CLICKED`),
        (e.CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED = `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (M = (function (e) {
        return (
          (e.CHATGPT_FEEDBACK_SURFACE_UNSPECIFIED = `CHATGPT_FEEDBACK_SURFACE_UNSPECIFIED`),
          (e.CHATGPT_FEEDBACK_SURFACE_CHAT_MODAL = `CHATGPT_FEEDBACK_SURFACE_CHAT_MODAL`),
          (e.CHATGPT_FEEDBACK_SURFACE_WORK_MODE_MODAL = `CHATGPT_FEEDBACK_SURFACE_WORK_MODE_MODAL`),
          (e.CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR = `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (N = (function (e) {
        return (
          (e.CHATGPT_FEEDBACK_RATING_UNSPECIFIED = `CHATGPT_FEEDBACK_RATING_UNSPECIFIED`),
          (e.CHATGPT_FEEDBACK_RATING_THUMBS_UP = `CHATGPT_FEEDBACK_RATING_THUMBS_UP`),
          (e.CHATGPT_FEEDBACK_RATING_THUMBS_DOWN = `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (P = { $type: `protobuf_analytics_events.v1.ChatgptFeedbackInteraction` }),
      (F = { $type: `protobuf_analytics_events.v1.ChatgptSidebarThumbFeedback` }),
      (I = { $type: `protobuf_analytics_events.v1.ChatgptSidebarMessageRegenerated` }));
  }))();
}
var R, z, B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    ((R = (function (e) {
      return (
        (e.CHATGPT_MESSAGE_FEEDBACK_RATING_UNSPECIFIED = `CHATGPT_MESSAGE_FEEDBACK_RATING_UNSPECIFIED`),
        (e.CHATGPT_MESSAGE_FEEDBACK_RATING_THUMBS_UP = `CHATGPT_MESSAGE_FEEDBACK_RATING_THUMBS_UP`),
        (e.CHATGPT_MESSAGE_FEEDBACK_RATING_THUMBS_DOWN = `CHATGPT_MESSAGE_FEEDBACK_RATING_THUMBS_DOWN`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (z = (function (e) {
        return (
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_UNSPECIFIED = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_UNSPECIFIED`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_DETAILED = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_DETAILED`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (B = (function (e) {
        return (
          (e.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNSPECIFIED = `CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNSPECIFIED`),
          (e.CHATGPT_MESSAGE_FEEDBACK_ROUTE_MESSAGE_FEEDBACK = `CHATGPT_MESSAGE_FEEDBACK_ROUTE_MESSAGE_FEEDBACK`),
          (e.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS = `CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (V = (function (e) {
        return (
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_UNSPECIFIED = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_UNSPECIFIED`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_SUCCESS = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_SUCCESS`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_FAILURE = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_FAILURE`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_UNKNOWN = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_UNKNOWN`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (H = (function (e) {
        return (
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_UNSPECIFIED = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_UNSPECIFIED`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_HTTP_REJECTED = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_HTTP_REJECTED`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_TIMEOUT = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_TIMEOUT`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_TRANSPORT_ERROR = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_TRANSPORT_ERROR`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_CANCELLED = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_CANCELLED`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_INVALID_RESPONSE = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_INVALID_RESPONSE`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_OTHER = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_OTHER`),
          (e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_SERVER_ERROR = `CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_SERVER_ERROR`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (U = { $type: `protobuf_analytics_events.v1.ChatgptMessageFeedbackSubmissionAttempted` }),
      (W = { $type: `protobuf_analytics_events.v1.ChatgptMessageFeedbackSubmissionResult` }),
      (G = { $type: `protobuf_analytics_events.v1.ChatgptMessageFeedbackUndo` }));
  }))();
}
function q(e) {
  let n = (0, J.c)(16),
    r,
    i,
    a,
    o;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]))
    : (({ direction: r, selected: o, label: i, ...a } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o));
  let s = o ? g : y,
    c = r === `down` ? `rotate-180` : void 0,
    l;
  n[5] !== s || n[6] !== c
    ? ((l = (0, Y.jsx)(`span`, { children: (0, Y.jsx)(s, { className: c }) })),
      (n[5] = s),
      (n[6] = c),
      (n[7] = l))
    : (l = n[7]);
  let u;
  n[8] !== i || n[9] !== a || n[10] !== o || n[11] !== l
    ? ((u = (0, Y.jsx)(t, {
        ...a,
        color: `ghost`,
        size: `icon`,
        "aria-pressed": o,
        "aria-label": i,
        children: l,
      })),
      (n[8] = i),
      (n[9] = a),
      (n[10] = o),
      (n[11] = l),
      (n[12] = u))
    : (u = n[12]);
  let d;
  return (
    n[13] !== i || n[14] !== u
      ? ((d = (0, Y.jsx)(_, { tooltipContent: i, children: u })), (n[13] = i), (n[14] = u), (n[15] = d))
      : (d = n[15]),
    d
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = x()), v(), c(), f(), (Y = S()));
  }))();
}
function se(e) {
  let n = (0, Z.c)(33),
    { conversationId: s, message: c, params: f, onRestart: m } = e,
    h = a(oe),
    g = u(),
    v = d(ie),
    y = re(k, s),
    [b, x] = (0, Q.useState)(null),
    [S, C] = (0, Q.useState)(!1),
    w = c.latestMessageId ?? c.messageId,
    E = (c.searchResultSources?.length ?? 0) > 0;
  if (f.extraParams?.disableFooterActions === !0 || y == null || w == null) return null;
  let D;
  n[0] !== g ||
  n[1] !== w ||
  n[2] !== f.category ||
  n[3] !== f.sourceConversationId ||
  n[4] !== b ||
  n[5] !== h ||
  n[6] !== y
    ? ((D = async (e) => {
        let t =
          e === `thumbsUp`
            ? R.CHATGPT_MESSAGE_FEEDBACK_RATING_THUMBS_UP
            : R.CHATGPT_MESSAGE_FEEDBACK_RATING_THUMBS_DOWN;
        if (b === e) {
          (T(h, G, { conversationId: y, messageId: w, rating: t }), x(null));
          return;
        }
        C(!0);
        let n = h.get(k, f.sourceConversationId) ?? f.sourceConversationId;
        (T(h, P, {
          action: j.CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED,
          surface: M.CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR,
          rating:
            e === `thumbsUp` ? N.CHATGPT_FEEDBACK_RATING_THUMBS_UP : N.CHATGPT_FEEDBACK_RATING_THUMBS_DOWN,
          conversationId: y,
          messageId: w,
          originatingConversationId: n,
          category: f.category ?? void 0,
        }),
          T(h, F, {
            conversationId: y,
            messageId: w,
            originatingConversationId: n,
            rating: e,
            category: f.category ?? void 0,
            surface: `web`,
          }));
        let r = {
          conversationId: y,
          messageId: w,
          submissionId: crypto.randomUUID(),
          rating: t,
          submissionType: z.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
          route: B.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS,
        };
        T(h, U, r);
        try {
          (await ae.safePost(`/unified_user_signals`, {
            requestBody: {
              signal_type: `message_feedback`,
              product_surface: `CHAT`,
              signal_metadata: {},
              user_metadata: {},
              signal_detail: {
                common_metadata: { conversation_id: y, message_id: w, originating_conversation_id: n },
                message_feedback: { rating: e === `thumbsUp` ? `thumbs_up` : `thumbs_down` },
              },
            },
          }),
            T(h, W, { ...r, outcome: V.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_SUCCESS }),
            x(e));
        } catch (e) {
          let t = e,
            n =
              t instanceof p &&
              t.errorKind !== `network` &&
              t.responseStatus != null &&
              t.responseStatus >= 400,
            i = t instanceof p ? t.diagnosticError : t,
            a =
              (i instanceof Error && (i.name === `AbortError` || i.name === `TimeoutError`)) ||
              (t instanceof p && t.status === 499),
            o = H.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_TRANSPORT_ERROR;
          (n
            ? (o = H.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_HTTP_REJECTED)
            : a && (o = H.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_FAILURE_REASON_TIMEOUT),
            T(h, W, {
              ...r,
              outcome: n
                ? V.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_FAILURE
                : V.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_OUTCOME_UNKNOWN,
              reason: o,
            }),
            h
              .get(ee)
              .danger(
                g.formatMessage({
                  id: `chatgpt.entity.feedback.error`,
                  defaultMessage: `Couldn't send feedback. Please try again`,
                  description: `Error toast when rating an entity details response fails`,
                }),
                { errorAnalytics: { toastId: `chatgpt.entity.feedback.error` } },
              ));
        }
        C(!1);
      }),
      (n[0] = g),
      (n[1] = w),
      (n[2] = f.category),
      (n[3] = f.sourceConversationId),
      (n[4] = b),
      (n[5] = h),
      (n[6] = y),
      (n[7] = D))
    : (D = n[7]);
  let O = D,
    A;
  n[8] !== m || n[9] !== f || n[10] !== h
    ? ((A = (e) => {
        let t = `default`;
        (e != null && (t = e ? `enabled` : `disabled`),
          T(h, I, {
            conversationId: h.get(k, f.sourceConversationId) ?? f.sourceConversationId,
            messageId: f.messageId,
            category: f.category ?? void 0,
            surface: `web`,
            searchForceStatus: t,
          }),
          m?.({ ...f, forceRegenerate: !0, forceUseSearch: e }, !1));
      }),
      (n[8] = m),
      (n[9] = f),
      (n[10] = h),
      (n[11] = A))
    : (A = n[11]);
  let L = A,
    K;
  n[12] !== v || n[13] !== g || n[14] !== S || n[15] !== O || n[16] !== b
    ? ((K =
        v && b !== `thumbsDown`
          ? (0, $.jsx)(q, {
              direction: `up`,
              selected: b === `thumbsUp`,
              disabled: S,
              label: g.formatMessage({
                id: `chatgpt.entity.feedback.good`,
                defaultMessage: `Good response`,
                description: `Tooltip for the thumbs up button below an entity details response`,
              }),
              onClick: () => void O(`thumbsUp`),
            })
          : null),
      (n[12] = v),
      (n[13] = g),
      (n[14] = S),
      (n[15] = O),
      (n[16] = b),
      (n[17] = K))
    : (K = n[17]);
  let J;
  n[18] !== v || n[19] !== g || n[20] !== S || n[21] !== O || n[22] !== b
    ? ((J =
        v && b !== `thumbsUp`
          ? (0, $.jsx)(q, {
              direction: `down`,
              selected: b === `thumbsDown`,
              disabled: S,
              label: g.formatMessage({
                id: `chatgpt.entity.feedback.bad`,
                defaultMessage: `Bad response`,
                description: `Tooltip for the thumbs down button below an entity details response`,
              }),
              onClick: () => void O(`thumbsDown`),
            })
          : null),
      (n[18] = v),
      (n[19] = g),
      (n[20] = S),
      (n[21] = O),
      (n[22] = b),
      (n[23] = J))
    : (J = n[23]);
  let Y;
  n[24] !== g || n[25] !== m || n[26] !== L || n[27] !== E
    ? ((Y =
        m == null
          ? null
          : (0, $.jsxs)(r, {
              side: `top`,
              triggerButton: (0, $.jsx)(_, {
                cloneCustomTrigger: !0,
                tooltipContent: (0, $.jsx)(i, {
                  id: `chatgptConversations.regenerate.tooltip`,
                  defaultMessage: `Try again…`,
                  description: `Tooltip for the menu beneath a completed ChatGPT response with options to regenerate it`,
                }),
                children: (0, $.jsx)(t, {
                  color: `ghost`,
                  size: `icon`,
                  "aria-label": g.formatMessage({
                    id: `chatgptConversations.regenerate.label`,
                    defaultMessage: `Regenerate response`,
                    description: `Accessible label for the retry menu beneath a completed ChatGPT response`,
                  }),
                  children: (0, $.jsx)(o, {}),
                }),
              }),
              children: [
                (0, $.jsxs)(l.Item, {
                  onSelect: () => L(),
                  children: [
                    (0, $.jsx)(l.ItemIcon, { children: (0, $.jsx)(o, {}) }),
                    (0, $.jsx)(i, {
                      id: `chatgpt.entity.regenerate.tryAgain`,
                      defaultMessage: `Try again`,
                      description: `Menu option to regenerate an entity details response with default settings`,
                    }),
                  ],
                }),
                (0, $.jsxs)(l.Item, {
                  onSelect: () => L(!E),
                  children: [
                    (0, $.jsx)(l.ItemIcon, { children: E ? (0, $.jsx)(te, {}) : (0, $.jsx)(ne, {}) }),
                    E
                      ? (0, $.jsx)(i, {
                          id: `chatgptConversations.regenerate.withoutSearch`,
                          defaultMessage: `Don't search the web`,
                          description: `Retry menu item that regenerates a ChatGPT response without web search`,
                        })
                      : (0, $.jsx)(i, {
                          id: `chatgptConversations.regenerate.withSearch`,
                          defaultMessage: `Search the web`,
                          description: `Retry menu item that regenerates a ChatGPT response with web search`,
                        }),
                  ],
                }),
              ],
            })),
      (n[24] = g),
      (n[25] = m),
      (n[26] = L),
      (n[27] = E),
      (n[28] = Y))
    : (Y = n[28]);
  let X;
  return (
    n[29] !== K || n[30] !== J || n[31] !== Y
      ? ((X = (0, $.jsxs)($.Fragment, { children: [K, J, Y] })),
        (n[29] = K),
        (n[30] = J),
        (n[31] = Y),
        (n[32] = X))
      : (X = n[32]),
    X
  );
}
var Z, Q, $;
function ce() {
  return (ce = e(() => {
    ((Z = x()),
      L(),
      K(),
      s(),
      (Q = C()),
      m(),
      v(),
      n(),
      c(),
      X(),
      h(),
      f(),
      D(),
      E(),
      w(),
      b(),
      O(),
      A(),
      ($ = S()));
  }))();
}
export { X as i, ce as n, q as r, se as t };
//# sourceMappingURL=chatgpt-entity-turn-actions-2a896d94b5d8.js.map
