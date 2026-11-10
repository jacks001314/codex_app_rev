import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bpt as t,
  CPt as n,
  Cot as r,
  Crt as i,
  Fat as a,
  Pat as o,
  Pxt as s,
  SPt as c,
  Trt as ee,
  Zxt as l,
  brt as te,
  fpt as ne,
  hrt as u,
  mit as d,
  rst as f,
  vrt as p,
  wot as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  $_n as h,
  ABn as re,
  BJt as g,
  Bjn as ie,
  CJt as _,
  DHn as ae,
  FAn as oe,
  FJt as se,
  GJt as ce,
  GMr as le,
  GVn as ue,
  Hjn as de,
  IJt as v,
  Ijn as fe,
  JZn as pe,
  Jjn as me,
  Jyr as y,
  KAn as he,
  KJt as b,
  LJt as ge,
  LQn as _e,
  Ljn as x,
  M4t as S,
  MBn as ve,
  MIr as C,
  N4t as w,
  QDr as T,
  QMr as E,
  Q_n as ye,
  RJt as be,
  RQn as xe,
  Rjn as Se,
  SAn as D,
  SRn as Ce,
  SZn as O,
  SZt as k,
  UAn as we,
  UZn as A,
  VQn as j,
  VZn as Te,
  Vyr as M,
  WQn as N,
  XDr as P,
  XMr as Ee,
  XUn as F,
  Xjn as De,
  Xyr as Oe,
  YUn as ke,
  Ymr as Ae,
  Zjn as je,
  _$n as I,
  _At as L,
  _Rn as Me,
  a$t as Ne,
  aIr as R,
  bJt as Pe,
  bNn as Fe,
  bRn as Ie,
  bZn as z,
  c$n as B,
  d$t as Le,
  dRn as Re,
  dZn as ze,
  ehr as V,
  ejn as Be,
  fRn as H,
  g$n as Ve,
  gZn as U,
  hHn as W,
  hRn as He,
  hzn as G,
  i$t as K,
  iRn as q,
  jBn as Ue,
  jIr as J,
  jjn as We,
  kHn as Y,
  kZn as X,
  l$t as Ge,
  mRn as Z,
  mYt as Q,
  mzn as Ke,
  o$n as qe,
  o$t as Je,
  oIr as Ye,
  ovn as Xe,
  pRn as Ze,
  pYt as Qe,
  qVn as $e,
  qyr as et,
  r$n as tt,
  r$t as nt,
  svn as rt,
  tNr as it,
  tRn as at,
  tjn as ot,
  u$t as st,
  vAt as ct,
  vHn as lt,
  vRn as ut,
  vZt as dt,
  xNn as ft,
  xRn as pt,
  xZt as mt,
  yJt as ht,
  yRn as gt,
  yVn as _t,
  yZt as vt,
  yjn as yt,
  zJt as bt,
  zQn as xt,
  zjn as St,
} from "./app-initial-5851df3f6cb1.js";
async function Ct(e, n, r) {
  let i = t(),
    a = () => i.resolve(!1),
    o = e.get(E),
    s = e.watch((t) => {
      let a = t.get(E),
        s =
          a.userId !== o.userId ||
          a.accountId !== o.accountId ||
          a.authenticatedAccountId !== o.authenticatedAccountId ||
          a.authMethod !== o.authMethod,
        c = t.get(A, n) != null || t.get(j, n) || t.get(N, n) || t.get(U, n);
      s || r.aborted ? i.resolve(!1) : c ? (ge(e, n, null), i.resolve(!1)) : wt(t, n) && i.resolve(!0);
    });
  r.addEventListener(`abort`, a, { once: !0 });
  try {
    return await i.promise;
  } finally {
    (s(), r.removeEventListener(`abort`, a));
  }
}
function wt(e, t) {
  let n = e.get(X, t),
    r = e.get(O, t);
  if (n == null || r == null) return !1;
  let i = M({ mapping: n, current_node: r })[0];
  return i?.author.role === `user` && i.id != null;
}
function Tt() {
  return (Tt = e(() => {
    (f(), y(), it(), ft(), yt(), g());
  }))();
}
async function Et(e, t, n, r = new AbortController().signal) {
  if (
    (!wt(e, t) && !(await Ct(e, t, AbortSignal.any([r, AbortSignal.timeout($)])))) ||
    r.aborted ||
    e.get(j, t)
  )
    return;
  let i = e.get(X, t),
    a = e.get(O, t);
  i != null &&
    a != null &&
    (await Dt(
      e,
      {
        ...e.query.getData(D, t),
        conversation_id: t,
        current_node: a,
        mapping: i,
        conversation_origin: e.get(z, t),
      },
      r,
      n,
    ));
}
async function Dt(e, r, a, o) {
  let s = He(e),
    c = e.get(le),
    ee = e.get(Ee),
    l = r.conversation_id;
  if (Ot(e, l) || (o == null && rt(e, l))) return r;
  let d = se(e, r.is_temporary_chat === !0),
    f = M(r),
    p = f[0];
  if (p?.author.role !== `user` || p.id == null || r.is_read_only === !0 || a.aborted) return r;
  let m = bt(e, l, p.id, r.is_temporary_chat === !0),
    h = o ?? m?.voiceContinuation,
    g = new Set(Object.keys(r.mapping));
  for (let e of f) e.id != null && e !== p && !e.end_turn && g.delete(e.id);
  if (
    h == null &&
    r.async_status !== _e.STREAMING &&
    f.at(-1)?.author.role !== `user` &&
    (r.async_status === _e.UNREAD || f.at(-1)?.end_turn === !0)
  )
    return r;
  let _ = m?.turnTraceId ?? C(),
    oe = be(e, p.id, r.is_temporary_chat === !0, _),
    v = e.get(ke);
  if (h == null) {
    let t = new AbortController(),
      i = AbortSignal.any([a, t.signal, AbortSignal.timeout($)]),
      o = e.watch((e) => {
        let { get: n } = e,
          i = n(X, l),
          a = i == null ? null : M({ mapping: i, current_node: n(O, l) });
        (n(le) !== c ||
          n(Ee) !== ee ||
          n(j, l) ||
          Ot(e, l) ||
          n(Te, l) === `streaming` ||
          rt(e, l) ||
          a?.[0]?.id !== p.id ||
          !a?.some(({ id: e }) => e === r.current_node)) &&
          t.abort();
      });
    try {
      if (i.aborted) return r;
      let { status: t } = await Ae.safeGet(`/conversation/{conversation_id}/stream_status`, {
        parameters: { path: { conversation_id: l } },
        additionalHeaders: _ == null ? void 0 : { "x-oai-turn-trace-id": _ },
        signal: i,
      });
      if (i.aborted) return r;
      if (t === `COMPLETE`) {
        let t = await we(e, l, {
          additionalHeaders: _ == null ? void 0 : { "x-oai-turn-trace-id": _ },
          signal: i,
        });
        if (!i.aborted) {
          (We(e, t, { mergeActiveBranch: !0 }), w(e, l));
          let n = M(t);
          !i.aborted &&
            n[0]?.id === p.id &&
            vt({
              scope: e,
              conversationOrigin: t.conversation_origin,
              isTemporaryChat: t.is_temporary_chat === !0,
              messages: n,
              threadId: l,
            });
          let r = t.mapping[t.current_node]?.message;
          return (
            !i.aborted &&
              r?.id === p.id &&
              r.author.role === `user` &&
              r.status != null &&
              !Oe(r) &&
              !Object.hasOwn(r.metadata ?? {}, `voice_mode_message`) &&
              !Be(e).getState().isVoiceModeActive &&
              t.is_read_only !== !0 &&
              t.conversation_origin !== `tpp` &&
              t.conversation_origin !== `flora` &&
              !xt(t.async_status) &&
              e.get(O, l) === t.current_node &&
              !pe(e.get(Te, l)) &&
              de(e, l, p.id),
            t
          );
        }
        return r;
      }
      if (t !== `IS_STREAMING` && t !== `FAILURE`) return r;
    } catch (e) {
      return (
        i.aborted ||
          n.debug(`chatgpt_conversation_resume_status_unavailable`, {
            safe: {},
            sensitive: { conversationId: l, error: e },
          }),
        r
      );
    } finally {
      o();
    }
  }
  let y = t(),
    he = performance.now(),
    b = C();
  ae(e, l, b);
  let S = r.default_model_slug,
    xe = S == null ? void 0 : e.query.getData(tt)?.modelConfigBySlug?.[S],
    D = {
      conversationId: l,
      id: p.id,
      isTemporaryChat: r.is_temporary_chat === !0,
      model: r.default_model_slug ?? `auto`,
      requestProductExperience: h?.requestProductExperience ?? gt(r.conversation_origin, xe?.isWorkModeModel),
      resumeAttemptCount: 0,
      serverConversationId: l,
      serverMetadata: null,
      systemHints: et(p.metadata?.system_hints),
      successfulResumeCount: 0,
      totalResumeAttemptCount: 0,
      turnSessionId: C(),
      turnTraceId: _,
      userMessageId: p.id,
    },
    k = {},
    N = 0,
    P = null,
    F = !1,
    I = new Qe(
      e,
      l,
      p.id,
      D.turnSessionId,
      async () => {
        if (e.get(A, l) != null)
          throw Error(
            e
              .get(Ye)
              .formatMessage({
                id: `chatgpt.editParagen.waitForResponse`,
                defaultMessage: `Wait for this response to finish before sending another message`,
                description: `Composer error when the current response cannot be stopped for a follow-up because its original request identity is unavailable`,
              }),
          );
      },
      r.conversation_origin !== `tpp` && r.conversation_origin !== `flora`,
    ),
    L,
    R = () => !F && e.get(A, l) === P,
    z = () => {
      P != null && R() && ze(e, l, P);
    },
    B = new mt({
      scope: e,
      conversationId: l,
      conversationOrigin: r.conversation_origin,
      isTemporaryChat: r.is_temporary_chat === !0,
      promptId: p.id,
      requestId: b,
      turnAnalytics: D,
      initialMessageId: r.current_node,
      streamingBoundaryId: p.id,
      getResponseHeaders: () => k,
      getStreamRequestId: () => P,
      ownsStream: R,
      isTerminal: () => F,
      editParagen: I,
      recordSearchConversation: d,
      source: { type: `resume`, previousMessageIds: g, isContinuation: h != null, needsWorkFinal: () => K() },
    }),
    V = (t) => {
      T(e, Ke, { conversationId: l, turnTraceId: _, requestId: Ie(D, k), result: t, isResume: !0 });
    },
    H = (t) => {
      T(
        e,
        Ue,
        Me({
          isResume: D.totalResumeAttemptCount > 0,
          record: D,
          streamProtocol: `sse`,
          turnCompletionStatus: t,
        }),
      );
    },
    U = (t) => {
      let n = t.responseStatus,
        r = Re(t, n);
      T(
        e,
        ve,
        ut({
          errorCode: n != null && n >= 300 ? n : void 0,
          errorMessage: r.errorReason,
          errorReason: r.errorReason,
          errorType: r.errorType,
          offset: N,
          record: D,
        }),
      );
    },
    W = () => {
      if ((B.flush(), B.discard(), L?.(), F)) return;
      let t = R();
      (t && w(e, l),
        B.streamingOrder?.finish(`completed`),
        (F = !0),
        Q(),
        y.resolve(void 0),
        I.finish(!0),
        x(e, l, _),
        P != null && Je(P),
        B.receivedModelMessage ||
          U({ result: `error`, error: `empty_response`, errorReason: `empty_response` }),
        V(
          B.receivedModelMessage
            ? G.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_SUCCESS
            : G.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR,
        ),
        B.receivedModelMessage && H(re.CHATGPT_TURN_COMPLETION_STATUS_SUCCESS),
        t &&
          (B.receivedModelMessage &&
            vt({
              scope: e,
              conversationOrigin: r.conversation_origin,
              isTemporaryChat: r.is_temporary_chat === !0,
              messages: M({ current_node: B.lastMessageId, mapping: e.get(X, l) ?? r.mapping }),
              threadId: l,
              turnId: D.serverMetadata?.turn_exchange_id ?? void 0,
            }),
          Se({ scope: e, conversationId: l, markUnread: !B.messageStreamCompleted }),
          B.messageStreamCompleted ||
            e.get(ye)?.complete({ conversationId: l, isTemporaryChat: r.is_temporary_chat === !0 }),
          d(l),
          ie(e, l, b)));
    },
    K = () => h != null && !B.hasAsyncHandoff && Ge(e.get(ue, l), p.id ?? null, g)?.outcome !== `success`,
    q = (t, n = !1) => {
      e.get(Ve).log(
        Ze({
          redact: s,
          diagnostics: t.diagnostics ?? i(t.error),
          record: D,
          isAuthenticated: e.get(E).authMethod === `chatgpt`,
          isTerminalPollingError: n,
        }),
      );
    },
    J = (t, n = !1, r) => {
      if ((B.flush(), B.discard(), L?.(), F)) return;
      let i = R();
      (i && w(e, l),
        B.streamingOrder?.finish(`error`),
        (F = !0),
        Q(),
        y.resolve(void 0),
        I.finish(!1),
        x(e, l, _),
        P != null && Je(P));
      let a = {
        result: `error`,
        error: t.error,
        isNetworkError: t.errorKind === `network`,
        responseStatus: t.responseStatus,
      };
      if (
        (r != null && (a.errorReason = r === `unconfirmed` ? `recovery_unconfirmed` : `recovery_terminal`),
        U(a),
        V(G.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR),
        q(t, n),
        !i)
      )
        return;
      let o = ce(t);
      (o != null && lt(e, l, o),
        St({
          scope: e,
          conversationId: l,
          error: qe(t.error, `Unknown error`),
          canRetry: t.canRetry,
          isTerminalPollingError: n,
          recoveryOutcome: r,
          paragenPromptMessageId: B.paragenPromptMessageId,
          errorMetadata: at({
            completion: a,
            errorCode: t.errorCode,
            streamError: t,
            messageId: e.get(O, l),
            record: D,
            responseHeaders: k,
          }),
        }),
        ie(e, l, b));
    },
    Y = (t) => {
      if ((B.flush(), !R())) {
        J(t);
        return;
      }
      (q(t),
        B.streamingOrder?.finish(`recovery`),
        Le({
          scope: e,
          productExperience: D.serverMetadata?.product_experience,
          conversationOrigin: r.conversation_origin,
          isCurrent: R,
          conversationId: l,
          error: t,
          expectedMessageId: p.id ?? null,
          previousMessageIds: g,
          requireWorkFinal: h != null && !B.hasAsyncHandoff,
          messages: M({ current_node: e.get(O, l), mapping: e.get(X, l) ?? r.mapping }),
          model: r.default_model_slug ?? `auto`,
          turnTraceId: _,
          onRecoveredMessage: (e, t) => {
            (t === `success` && (B.lastMessageId = e.id ?? B.lastMessageId), Ce(D, e));
          },
          onComplete: (e) => {
            e === `success` ? ((B.receivedModelMessage = !0), W()) : J(t, !0, e);
          },
          onError: (e) => J(e, !0),
        }));
    },
    Z = () => {
      (Q(!0),
        (o == null || !a.aborted) && B.flush(),
        B.discard(),
        B.streamingOrder?.finish(`stopped`),
        (F = !0),
        y.resolve(void 0),
        I.finish(!1),
        x(e, l, _),
        L?.());
    };
  De(e, l, _);
  let Q = Pe(e, l, D.turnSessionId, { promptSentAtMs: he, submitSurface: ht.ROOT });
  (je({ scope: e, conversationId: l, streamRequestId: null }),
    I.start(),
    fe(e, {
      conversationId: l,
      isTemporaryChat: r.is_temporary_chat === !0,
      promptMessageId: p.id,
      requestId: b,
      requestModel: r.default_model_slug ?? `auto`,
      systemHints: Fe(e.get, l),
    }));
  try {
    (ge(e, l, p.id),
      (P = v.resumeCompletionStream({
        projectId: r.gizmo_id,
        topicId: h?.topicId,
        conduitToken: h?.resumeToken ?? bt(e, l, p.id, r.is_temporary_chat === !0)?.token,
        turnTraceId: _,
        onResumeToken: (e) => {
          R() && oe?.(e);
        },
        request: { conversation_id: l, offset: 0 },
        onComplete: (e) => {
          if ((B.flush(), !F && R() && K())) {
            Y({
              type: `fetch-stream-error`,
              requestId: e.requestId,
              error: te,
              errorCode: `incomplete_work_continuation`,
              canRetry: !0,
            });
            return;
          }
          W();
        },
        onTransportClose: () => {
          (B.flush(), I.transportClosed());
        },
        onError: J,
        onResponse: (e) => {
          R() && ((k = e.headers), e.isEventStream && z());
        },
        onStreamData: ({ eventCount: e }) => {
          N += e;
        },
        onResume: (e) => {
          F ||
            (e.type === `attempted`
              ? ((D.resumeAttemptCount = e.attemptCount), (D.totalResumeAttemptCount += 1))
              : e.type === `succeeded`
                ? ((D.resumeAttemptCount = 0), (D.successfulResumeCount += 1))
                : e.type === `response` && ((k = e.response.headers), e.response.isEventStream && z()));
        },
        onRecoverableError: Y,
        onDecodedEvent: (e) => {
          (z(), B.onEvent(e));
        },
      })),
      F ||
        ((L = Ne(P, {
          conduitToken: null,
          logCancellation: () => {
            (V(G.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_CANCELED),
              H(re.CHATGPT_TURN_COMPLETION_STATUS_CANCELED));
          },
          markTerminal: Z,
          refetchAfterStop: !1,
        })),
        h != null && ct(e, l, P),
        me({ scope: e, conversationId: l, streamRequestId: P })));
  } catch (e) {
    let t = e instanceof Error ? e.message : String(e);
    J({
      error: t,
      canRetry: ne(t),
      errorCode: e instanceof u ? e.errorCode : void 0,
      responseStatus: e instanceof u ? (e.responseStatus ?? void 0) : void 0,
      diagnostics: i(e instanceof u ? (e.diagnosticError ?? e) : e),
      requestId: P ?? ``,
      type: `fetch-stream-error`,
    });
  }
  if (h != null) {
    let t = () => {
      F || P == null || (R() ? nt(e, l) : (Z(), Je(P), v.cancelStream(P)));
    };
    o != null && (a.addEventListener(`abort`, t, { once: !0 }), a.aborted && t());
    try {
      await y.promise;
    } finally {
      a.removeEventListener(`abort`, t);
    }
  }
  return r;
}
function Ot(e, t) {
  return e.get(A, t) != null || e.get(N, t) || e.get(U, t);
}
var $, kt;
function At() {
  return (At = e(() => {
    (_t(),
      s(),
      f(),
      y(),
      J(),
      I(),
      it(),
      V(),
      ee(),
      R(),
      P(),
      m(),
      c(),
      a(),
      L(),
      ot(),
      Xe(),
      p(),
      B(),
      K(),
      k(),
      st(),
      xe(),
      F(),
      ft(),
      $e(),
      oe(),
      q(),
      dt(),
      d(),
      yt(),
      H(),
      pt(),
      Y(),
      S(),
      h(),
      he(),
      Q(),
      W(),
      b(),
      g(),
      v(),
      _(),
      Z(),
      Tt(),
      ($ = 3e4),
      (kt = l(r, (e, { get: t, scope: n }) => {
        let { data: r } = t(D, e, { enabled: !1 });
        return {
          enabled: r != null,
          queryFn: async ({ signal: t }) => {
            if (r != null) {
              let i = await Dt(n, r, t);
              i !== r && n.query.setData(D, e, i);
            }
            return null;
          },
          queryKey: [`chatgpt-completion-resume`, e, r?.current_node],
          retry: !1,
          staleTime: o.ONE_MINUTE,
        };
      })));
  }))();
}
export { At as n, Et as r, kt as t };
//# sourceMappingURL=resume-chatgpt-completion-43010f4e838d.js.map
