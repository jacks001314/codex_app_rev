import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  Dmt as r,
  Iit as i,
  Pit as a,
  Qst as o,
  RFt as s,
  Vit as c,
  ZSt as l,
  jat as u,
  jit as d,
  mCt as f,
  sct as p,
  tht as ee,
  zFt as te,
  zit as ne,
  zst as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $bn as re,
  AKt as h,
  AVn as ie,
  AZt as g,
  BRr as ae,
  CIr as oe,
  CKt as se,
  CPn as _,
  Cbn as ce,
  EVr as v,
  FGn as le,
  FVn as ue,
  G2n as de,
  GCr as y,
  GIn as b,
  I2n as x,
  IVn as fe,
  IWn as pe,
  JUn as me,
  KGn as S,
  LVn as he,
  MGn as C,
  MHn as w,
  MVn as ge,
  OVn as _e,
  OYt as ve,
  P2n as ye,
  PVn as be,
  QCr as T,
  R1n as xe,
  RVn as E,
  SIr as D,
  SKt as Se,
  SPn as Ce,
  TVr as O,
  Tbn as k,
  U1n as A,
  VPn as j,
  VRr as M,
  W2n as we,
  WGn as Te,
  WIn as Ee,
  WNn as N,
  Xbn as P,
  Y1n as F,
  YUn as De,
  ZCr as Oe,
  _2n as I,
  _Qt as L,
  bFn as ke,
  bKt as R,
  cFn as Ae,
  cGn as je,
  cxn as z,
  d2n as B,
  dPn as Me,
  eDt as V,
  eKt as Ne,
  eqt as Pe,
  ewr as Fe,
  exn as H,
  f2n as Ie,
  fFn as Le,
  g0n as U,
  gQt as Re,
  i1t as ze,
  iKt as W,
  iRr as Be,
  j2n as Ve,
  jHn as He,
  jVn as G,
  jZt as K,
  kKt as Ue,
  kVn as q,
  kYt as We,
  lFn as Ge,
  lxn as Ke,
  m0n as qe,
  m2n as J,
  mPn as Y,
  mqn as X,
  n0n as Z,
  n1t as Je,
  oFn as Ye,
  pqn as Xe,
  q1n as Ze,
  qUn as Qe,
  r1t as $e,
  rPn as et,
  sFn as Q,
  tDt as tt,
  tFn as nt,
  tKt as rt,
  tqt as it,
  txn as at,
  tyr as ot,
  u2n as st,
  uFn as ct,
  uGn as lt,
  vFn as ut,
  vVn as dt,
  wKt as ft,
  wLr as pt,
  x0n as mt,
  xFn as ht,
  xKt as gt,
  xMr as $,
  xVn as _t,
  yKt as vt,
  yMr as yt,
  zRr as bt,
  zVn as xt,
} from "./app-initial-ad16eaadf81f.js";
async function St(e, t, n) {
  let r = ee(),
    i = () => r.resolve(!1),
    a = e.get(M),
    o = e.watch((i) => {
      let o = i.get(M),
        s =
          o.userId !== a.userId ||
          o.accountId !== a.accountId ||
          o.authenticatedAccountId !== a.authenticatedAccountId ||
          o.authMethod !== a.authMethod,
        c = i.get(U, t) != null || i.get(J, t) || i.get(I, t) || i.get(A, t);
      s || n.aborted ? r.resolve(!1) : c ? (gt(e, t, null), r.resolve(!1)) : Ct(i, t) && r.resolve(!0);
    });
  n.addEventListener(`abort`, i, { once: !0 });
  try {
    return await r.promise;
  } finally {
    (o(), n.removeEventListener(`abort`, i));
  }
}
function Ct(e, t) {
  let n = e.get(Z, t),
    r = e.get(F, t);
  if (n == null || r == null) return !1;
  let i = y({ mapping: n, current_node: r })[0];
  return i?.author.role === `user` && i.id != null;
}
function wt() {
  return (wt = e(() => {
    (p(), T(), pt(), b(), j(), ft());
  }))();
}
async function Tt(e, t, n, r = new AbortController().signal) {
  if (
    (!Ct(e, t) && !(await St(e, t, AbortSignal.any([r, AbortSignal.timeout(Ot)])))) ||
    r.aborted ||
    e.get(J, t)
  )
    return;
  let i = e.get(Z, t),
    a = e.get(F, t);
  i != null &&
    a != null &&
    (await Et(
      e,
      {
        ...e.query.getData(N, t),
        conversation_id: t,
        current_node: a,
        mapping: i,
        conversation_origin: e.get(Ze, t),
      },
      r,
      n,
    ));
}
async function Et(e, t, n, a) {
  let o = ge(e),
    s = e.get(bt),
    c = e.get(ae),
    l = t.conversation_id;
  if (Dt(e, l) || (a == null && Ke(e, l))) return t;
  let u = vt(e, t.is_temporary_chat === !0),
    f = y(t),
    p = f[0];
  if (p?.author.role !== `user` || p.id == null || t.is_read_only === !0 || n.aborted) return t;
  let m = se(e, l, p.id, t.is_temporary_chat === !0),
    h = a ?? m?.voiceContinuation,
    g = new Set(Object.keys(t.mapping));
  for (let e of f) e.id != null && e !== p && !e.end_turn && g.delete(e.id);
  if (
    h == null &&
    t.async_status !== st.STREAMING &&
    f.at(-1)?.author.role !== `user` &&
    (t.async_status === st.UNREAD || f.at(-1)?.end_turn === !0)
  )
    return t;
  let _ = m?.turnTraceId ?? v(),
    de = Se(e, p.id, t.is_temporary_chat === !0, _),
    b = e.get(Xe);
  if (h == null) {
    let r = new AbortController(),
      i = AbortSignal.any([n, r.signal, AbortSignal.timeout(Ot)]),
      a = e.watch((e) => {
        let { get: n } = e,
          i = n(Z, l),
          a = i == null ? null : y({ mapping: i, current_node: n(F, l) });
        (n(bt) !== s ||
          n(ae) !== c ||
          n(J, l) ||
          Dt(e, l) ||
          n(qe, l) === `streaming` ||
          Ke(e, l) ||
          a?.[0]?.id !== p.id ||
          !a?.some(({ id: e }) => e === t.current_node)) &&
          r.abort();
      });
    try {
      if (i.aborted) return t;
      let { status: n } = await Be.safeGet(`/conversation/{conversation_id}/stream_status`, {
        parameters: { path: { conversation_id: l } },
        additionalHeaders: _ == null ? void 0 : { "x-oai-turn-trace-id": _ },
        signal: i,
      });
      if (i.aborted) return t;
      if (n === `COMPLETE`) {
        let n = await Me(e, l, {
          additionalHeaders: _ == null ? void 0 : { "x-oai-turn-trace-id": _ },
          signal: i,
        });
        if (!i.aborted) {
          (nt(e, n, { mergeActiveBranch: !0 }), K(e, l));
          let t = y(n);
          !i.aborted &&
            t[0]?.id === p.id &&
            We({
              scope: e,
              conversationOrigin: n.conversation_origin,
              isTemporaryChat: n.is_temporary_chat === !0,
              messages: t,
              threadId: l,
            });
          let r = n.mapping[n.current_node]?.message;
          return (
            !i.aborted &&
              r?.id === p.id &&
              r.author.role === `user` &&
              r.status != null &&
              !Fe(r) &&
              !Object.hasOwn(r.metadata ?? {}, `voice_mode_message`) &&
              !Ce(e).getState().isVoiceModeActive &&
              n.is_read_only !== !0 &&
              n.conversation_origin !== `tpp` &&
              n.conversation_origin !== `flora` &&
              !Ie(n.async_status) &&
              e.get(F, l) === n.current_node &&
              !mt(e.get(qe, l)) &&
              Le(e, l, p.id),
            n
          );
        }
        return t;
      }
      if (n !== `IS_STREAMING` && n !== `FAILURE`) return t;
    } catch (e) {
      return (
        i.aborted ||
          te.debug(`chatgpt_conversation_resume_status_unavailable`, {
            safe: {},
            sensitive: { conversationId: l, error: e },
          }),
        t
      );
    } finally {
      a();
    }
  }
  let x = ee(),
    pe = performance.now(),
    S = v();
  Te(e, l, S);
  let C = t.default_model_slug,
    ve = C == null ? void 0 : e.query.getData(Ve)?.modelConfigBySlug?.[C],
    T = {
      conversationId: l,
      id: p.id,
      isTemporaryChat: t.is_temporary_chat === !0,
      model: t.default_model_slug ?? `auto`,
      requestProductExperience: h?.requestProductExperience ?? fe(t.conversation_origin, ve?.isWorkModeModel),
      resumeAttemptCount: 0,
      serverConversationId: l,
      serverMetadata: null,
      systemHints: Oe(p.metadata?.system_hints),
      successfulResumeCount: 0,
      totalResumeAttemptCount: 0,
      turnSessionId: v(),
      turnTraceId: _,
      userMessageId: p.id,
    },
    E = {},
    D = 0,
    O = null,
    k = !1,
    A = new Pe(
      e,
      l,
      p.id,
      T.turnSessionId,
      async () => {
        if (e.get(U, l) != null)
          throw Error(
            e
              .get(oe)
              .formatMessage({
                id: `chatgpt.editParagen.waitForResponse`,
                defaultMessage: `Wait for this response to finish before sending another message`,
                description: `Composer error when the current response cannot be stopped for a follow-up because its original request identity is unavailable`,
              }),
          );
      },
      t.conversation_origin !== `tpp` && t.conversation_origin !== `flora`,
    ),
    j,
    N = () => !k && e.get(U, l) === O,
    I = () => {
      O != null && N() && xe(e, l, O);
    },
    L = new Re({
      scope: e,
      conversationId: l,
      conversationOrigin: t.conversation_origin,
      isTemporaryChat: t.is_temporary_chat === !0,
      promptId: p.id,
      requestId: S,
      turnAnalytics: T,
      initialMessageId: t.current_node,
      streamingBoundaryId: p.id,
      getResponseHeaders: () => E,
      getStreamRequestId: () => O,
      ownsStream: N,
      isTerminal: () => k,
      editParagen: A,
      recordSearchConversation: u,
      source: { type: `resume`, previousMessageIds: g, isContinuation: h != null, needsWorkFinal: () => H() },
    }),
    R = (t) => {
      $(e, He, { conversationId: l, turnTraceId: _, requestId: he(T, E), result: t, isResume: !0 });
    },
    z = (t) => {
      $(
        e,
        me,
        be({
          isResume: T.totalResumeAttemptCount > 0,
          record: T,
          streamProtocol: `sse`,
          turnCompletionStatus: t,
        }),
      );
    },
    B = (t) => {
      let n = t.responseStatus,
        r = _e(t, n);
      $(
        e,
        De,
        ue({
          errorCode: n != null && n >= 300 ? n : void 0,
          errorMessage: r.errorReason,
          errorReason: r.errorReason,
          errorType: r.errorType,
          offset: D,
          record: T,
        }),
      );
    },
    V = () => {
      if ((L.flush(), L.discard(), j?.(), k)) return;
      let n = N();
      (n && K(e, l),
        L.streamingOrder?.finish(`completed`),
        (k = !0),
        X(),
        x.resolve(void 0),
        A.finish(!0),
        Q(e, l, _),
        O != null && P(O),
        L.receivedModelMessage ||
          B({ result: `error`, error: `empty_response`, errorReason: `empty_response` }),
        R(
          L.receivedModelMessage
            ? w.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_SUCCESS
            : w.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR,
        ),
        L.receivedModelMessage && z(Qe.CHATGPT_TURN_COMPLETION_STATUS_SUCCESS),
        n &&
          (L.receivedModelMessage &&
            We({
              scope: e,
              conversationOrigin: t.conversation_origin,
              isTemporaryChat: t.is_temporary_chat === !0,
              messages: y({ current_node: L.lastMessageId, mapping: e.get(Z, l) ?? t.mapping }),
              threadId: l,
              turnId: T.serverMetadata?.turn_exchange_id ?? void 0,
            }),
          Ae({ scope: e, conversationId: l, markUnread: !L.messageStreamCompleted }),
          L.messageStreamCompleted ||
            e.get(ce)?.complete({ conversationId: l, isTemporaryChat: t.is_temporary_chat === !0 }),
          u(l),
          ct(e, l, S)));
    },
    H = () => h != null && !L.hasAsyncHandoff && re(e.get(je, l), p.id ?? null, g)?.outcome !== `success`,
    W = (t, n = !1) => {
      e.get(we).log(
        ie({
          redact: o,
          diagnostics: t.diagnostics ?? ne(t.error),
          record: T,
          isAuthenticated: e.get(M).authMethod === `chatgpt`,
          isTerminalPollingError: n,
        }),
      );
    },
    G = (t, n = !1, r) => {
      if ((L.flush(), L.discard(), j?.(), k)) return;
      let i = N();
      (i && K(e, l),
        L.streamingOrder?.finish(`error`),
        (k = !0),
        X(),
        x.resolve(void 0),
        A.finish(!1),
        Q(e, l, _),
        O != null && P(O));
      let a = {
        result: `error`,
        error: t.error,
        isNetworkError: t.errorKind === `network`,
        responseStatus: t.responseStatus,
      };
      if (
        (r != null && (a.errorReason = r === `unconfirmed` ? `recovery_unconfirmed` : `recovery_terminal`),
        B(a),
        R(w.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_ERROR),
        W(t, n),
        !i)
      )
        return;
      let o = Ue(t);
      (o != null && le(e, l, o),
        Ge({
          scope: e,
          conversationId: l,
          error: ye(t.error, `Unknown error`),
          canRetry: t.canRetry,
          isTerminalPollingError: n,
          recoveryOutcome: r,
          paragenPromptMessageId: L.paragenPromptMessageId,
          errorMetadata: dt({
            completion: a,
            errorCode: t.errorCode,
            streamError: t,
            messageId: e.get(F, l),
            record: T,
            responseHeaders: E,
          }),
        }),
        ct(e, l, S));
    },
    q = (n) => {
      if ((L.flush(), !N())) {
        G(n);
        return;
      }
      (W(n),
        L.streamingOrder?.finish(`recovery`),
        at({
          scope: e,
          productExperience: T.serverMetadata?.product_experience,
          conversationOrigin: t.conversation_origin,
          isCurrent: N,
          conversationId: l,
          error: n,
          expectedMessageId: p.id ?? null,
          previousMessageIds: g,
          requireWorkFinal: h != null && !L.hasAsyncHandoff,
          messages: y({ current_node: e.get(F, l), mapping: e.get(Z, l) ?? t.mapping }),
          model: t.default_model_slug ?? `auto`,
          turnTraceId: _,
          onRecoveredMessage: (e, t) => {
            (t === `success` && (L.lastMessageId = e.id ?? L.lastMessageId), xt(T, e));
          },
          onComplete: (e) => {
            e === `success` ? ((L.receivedModelMessage = !0), V()) : G(n, !0, e);
          },
          onError: (e) => G(e, !0),
        }));
    },
    Y = () => {
      (X(!0),
        (a == null || !n.aborted) && L.flush(),
        L.discard(),
        L.streamingOrder?.finish(`stopped`),
        (k = !0),
        x.resolve(void 0),
        A.finish(!1),
        Q(e, l, _),
        j?.());
    };
  ke(e, l, _);
  let X = rt(e, l, T.turnSessionId, { promptSentAtMs: pe, submitSurface: Ne.ROOT });
  (ht({ scope: e, conversationId: l, streamRequestId: null }),
    A.start(),
    Ye(e, {
      conversationId: l,
      isTemporaryChat: t.is_temporary_chat === !0,
      promptMessageId: p.id,
      requestId: S,
      requestModel: t.default_model_slug ?? `auto`,
      systemHints: Ee(e.get, l),
    }));
  try {
    (gt(e, l, p.id),
      (O = b.resumeCompletionStream({
        projectId: t.gizmo_id,
        topicId: h?.topicId,
        conduitToken: h?.resumeToken ?? se(e, l, p.id, t.is_temporary_chat === !0)?.token,
        turnTraceId: _,
        onResumeToken: (e) => {
          N() && de?.(e);
        },
        request: { conversation_id: l, offset: 0 },
        onComplete: (e) => {
          if ((L.flush(), !k && N() && H())) {
            q({
              type: `fetch-stream-error`,
              requestId: e.requestId,
              error: i,
              errorCode: `incomplete_work_continuation`,
              canRetry: !0,
            });
            return;
          }
          V();
        },
        onTransportClose: () => {
          (L.flush(), A.transportClosed());
        },
        onError: G,
        onResponse: (e) => {
          N() && ((E = e.headers), e.isEventStream && I());
        },
        onStreamData: ({ eventCount: e }) => {
          D += e;
        },
        onResume: (e) => {
          k ||
            (e.type === `attempted`
              ? ((T.resumeAttemptCount = e.attemptCount), (T.totalResumeAttemptCount += 1))
              : e.type === `succeeded`
                ? ((T.resumeAttemptCount = 0), (T.successfulResumeCount += 1))
                : e.type === `response` && ((E = e.response.headers), e.response.isEventStream && I()));
        },
        onRecoverableError: q,
        onDecodedEvent: (e) => {
          (I(), L.onEvent(e));
        },
      })),
      k ||
        ((j = ze(O, {
          conduitToken: null,
          logCancellation: () => {
            (R(w.CHATGPT_CONVERSATION_STREAM_COMPLETION_RESULT_CANCELED),
              z(Qe.CHATGPT_TURN_COMPLETION_STATUS_CANCELED));
          },
          markTerminal: Y,
          refetchAfterStop: !1,
        })),
        h != null && tt(e, l, O),
        ut({ scope: e, conversationId: l, streamRequestId: O })));
  } catch (e) {
    let t = e instanceof Error ? e.message : String(e);
    G({
      error: t,
      canRetry: r(t),
      errorCode: e instanceof d ? e.errorCode : void 0,
      responseStatus: e instanceof d ? (e.responseStatus ?? void 0) : void 0,
      diagnostics: ne(e instanceof d ? (e.diagnosticError ?? e) : e),
      requestId: O ?? ``,
      type: `fetch-stream-error`,
    });
  }
  if (h != null) {
    let t = () => {
      k || O == null || (N() ? Je(e, l) : (Y(), P(O), b.cancelStream(O)));
    };
    a != null && (n.addEventListener(`abort`, t, { once: !0 }), n.aborted && t());
    try {
      await x.promise;
    } finally {
      n.removeEventListener(`abort`, t);
    }
  }
  return t;
}
function Dt(e, t) {
  return e.get(U, t) != null || e.get(I, t) || e.get(A, t);
}
var Ot, kt;
function At() {
  return (At = e(() => {
    (pe(),
      l(),
      p(),
      T(),
      O(),
      de(),
      pt(),
      ot(),
      c(),
      D(),
      yt(),
      t(),
      s(),
      n(),
      V(),
      _(),
      z(),
      a(),
      x(),
      $e(),
      L(),
      H(),
      B(),
      X(),
      b(),
      lt(),
      et(),
      _t(),
      ve(),
      u(),
      j(),
      q(),
      E(),
      S(),
      g(),
      k(),
      Y(),
      it(),
      C(),
      h(),
      ft(),
      R(),
      W(),
      G(),
      wt(),
      (Ot = 3e4),
      (kt = f(o, (e, { get: t, scope: n }) => {
        let { data: r } = t(N, e, { enabled: !1 });
        return {
          enabled: r != null,
          queryFn: async ({ signal: t }) => {
            if (r != null) {
              let i = await Et(n, r, t);
              i !== r && n.query.setData(N, e, i);
            }
            return null;
          },
          queryKey: [`chatgpt-completion-resume`, e, r?.current_node],
          retry: !1,
          staleTime: m.ONE_MINUTE,
        };
      })));
  }))();
}
export { At as n, Tt as r, kt as t };
//# sourceMappingURL=resume-chatgpt-completion-3c085d352474.js.map
