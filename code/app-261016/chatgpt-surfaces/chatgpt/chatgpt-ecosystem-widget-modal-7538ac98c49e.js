import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Ept as n,
  FBt as r,
  LNt as i,
  NSt as a,
  PBt as o,
  Qst as s,
  VSt as c,
  ZSt as l,
  kCt as u,
  nCt as d,
  sct as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as p,
  Amr as m,
  B1n as h,
  Bhr as g,
  D5n as _,
  Emr as v,
  FFn as y,
  GK as b,
  IFn as x,
  O3n as S,
  PFn as C,
  RFn as w,
  T5n as T,
  VPn as E,
  WK as D,
  aJn as O,
  h5n as k,
  jmr as A,
  k3n as j,
  kmr as M,
  oJn as N,
  oxt as P,
  p5n as F,
  sxt as I,
  wmr as L,
} from "./app-initial-ad16eaadf81f.js";
import { n as R, r as z } from "./chatgpt-ecosystem-widget-resource-14d53e34c162.js";
async function B(e, t, n) {
  let { result: r, signal: i } = t,
    a = j.parse(t.payload),
    o = r.modalOwner ?? { result: r, signal: i },
    s = () => {
      if (
        (i.throwIfAborted(), r.mcpAppHostAdapter.assertActive?.(), e.get(w, r.resourceIdentity) !== `current`)
      )
        throw Error(`The widget connection changed`);
    };
  if ((s(), a.app == null)) {
    V(e, t);
    return;
  }
  if (r.widget.is_verified_first_party !== !0) throw Error(`Cross-app modals require a first-party widget`);
  if (a.template == null) return;
  let { accountId: c, userId: l } = r.resourceIdentity.identity;
  if (c == null || l == null) throw Error(`Sign in before opening another app`);
  let [u, d] = await Promise.all([
    M(e.queryClient, m({ accountId: c, appIds: [a.app], enabled: !0, productContext: `chatgpt` })),
    e.queryClient.fetchQuery(L({ accountId: c, userId: l })),
  ]);
  s();
  let f = g(a.app),
    p = u.find((e) => g(e.id) === f);
  if (p == null) throw Error(`The requested app is unavailable`);
  let _ = d.filter((e) => g(e.connector_id) === f),
    v = _.find(
      (e) =>
        e.connector_status !== `DISABLED_BY_ADMIN` &&
        e.unavailable_reason == null &&
        e.auth_status !== `REAUTH_REQUIRED`,
    ),
    y = v?.connector_id ?? _[0]?.connector_id ?? p.id,
    b = n?.linkId ?? v?.id;
  if (v == null && n?.didConnect !== !0) {
    let n = await k(e, {
      connectorId: y,
      hostId: t.hostId,
      payload: void 0,
      signal: i,
      beforeConnect: async () => (s(), !0),
      widgetModal: {
        accountId: c,
        userId: l,
        sourceAppUri: o.result.request.appUri,
        sourceTemplate: o.result.request.template,
        sourceMessageId: o.result.request.sourceMessageId,
        sourceThreadId: o.result.request.threadId,
        sourceConversationId: e.get(h, o.result.request.chatGptThreadId),
        returnTo: e.value.pathname,
        payload: { ...a, app: y, template: a.template },
      },
    });
    if ((s(), !n.didConnect)) return;
    b = n.linkId;
  }
  let S = `connectors://${y}`,
    C = {
      hostId: t.hostId,
      server: `codex_apps`,
      accountSource: r.resourceIdentity.context.accountSource,
      threadId: r.request.threadId ?? null,
      connectorTarget: { connectorId: y, targetId: b ?? null },
    },
    T = e.get(x, C);
  if (T == null) throw Error(`The app connection is unavailable`);
  V(e, {
    ...t,
    payload: a,
    signal: o.signal,
    result: {
      ...r,
      modalOwner: o,
      distributionChannel: void 0,
      redirectDomains: void 0,
      attributionId: y,
      widgetSessionId: void 0,
      widgetStatePersistence: void 0,
      resourceIdentity: { context: C, identity: T },
      request: { ...r.request, appUri: S, template: a.template },
      mcpAppHostAdapter: {
        ...P({
          scope: e,
          accountId: c,
          accountSource: r.resourceIdentity.context.accountSource,
          signal: o.signal,
          appUri: S,
          chatGptConversationId: r.request.chatGptThreadId,
          threadId: r.request.threadId,
          productSku: r.request.productSku,
          messageId: r.request.sourceMessageId ?? null,
          originMetadata: { "openai/connector_id": y, "openai/link_id": b },
        }),
        assertActive: () => {
          (o.signal.throwIfAborted(), o.result.mcpAppHostAdapter.assertActive?.());
        },
      },
    },
  });
}
function V(e, { payload: t, ...r }, i) {
  let a = j.parse(t);
  (r.signal.throwIfAborted(),
    e.set(X, i),
    p(e, U, {
      ...r,
      signal: r.result.modalOwner?.signal ?? r.signal,
      result: { ...r.result, modalOwner: r.result.modalOwner ?? { result: r.result, signal: r.signal } },
      route: e.value,
      payload: a,
      modalId: n(),
    }));
}
function H(e, t) {
  e.get(X) === t && (e.set(X, void 0), T(e, U));
}
function U(e) {
  let t = (0, q.c)(9),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ modalId: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] !== n || t[4] !== r
    ? ((i = (0, Y.jsx)(W, { modalId: n, ...r }, n)), (t[3] = n), (t[4] = r), (t[5] = i))
    : (i = t[5]);
  let a;
  return (
    t[6] !== r.route || t[7] !== i
      ? ((a = (0, Y.jsx)(D, { route: r.route, children: i })), (t[6] = r.route), (t[7] = i), (t[8] = a))
      : (a = t[8]),
    a
  );
}
function W(e) {
  let t = (0, q.c)(32),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ result: a, payload: r, signal: o, onClose: n, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s = d(x, a.resourceIdentity.context),
    l;
  t[6] !== s || t[7] !== a.resourceIdentity.identity
    ? ((l = y(s, a.resourceIdentity.identity)), (t[6] = s), (t[7] = a.resourceIdentity.identity), (t[8] = l))
    : (l = t[8]);
  let u = l,
    { pathname: f } = c(),
    p,
    m;
  if (
    (t[9] !== u || t[10] !== n || t[11] !== f || t[12] !== i.route.pathname || t[13] !== o
      ? ((p = () => {
          if (o.aborted || !u || f !== i.route.pathname) {
            n();
            return;
          }
          return (o.addEventListener(`abort`, n, { once: !0 }), () => o.removeEventListener(`abort`, n));
        }),
        (m = [o, n, u, f, i.route.pathname]),
        (t[9] = u),
        (t[10] = n),
        (t[11] = f),
        (t[12] = i.route.pathname),
        (t[13] = o),
        (t[14] = p),
        (t[15] = m))
      : ((p = t[14]), (m = t[15])),
    (0, J.useEffect)(p, m),
    u && r.template != null)
  ) {
    let e;
    return (
      t[16] !== n || t[17] !== r || t[18] !== i || t[19] !== a || t[20] !== o
        ? ((e = (0, Y.jsx)(G, { ...i, result: a, payload: r, signal: o, onClose: n, template: r.template })),
          (t[16] = n),
          (t[17] = r),
          (t[18] = i),
          (t[19] = a),
          (t[20] = o),
          (t[21] = e))
        : (e = t[21]),
      e
    );
  }
  let h;
  t[22] !== u || t[23] !== a
    ? ((h = u ? { kind: `ready`, result: a } : { kind: `error`, error: null }),
      (t[22] = u),
      (t[23] = a),
      (t[24] = h))
    : (h = t[24]);
  let g;
  return (
    t[25] !== n || t[26] !== r || t[27] !== i || t[28] !== a || t[29] !== o || t[30] !== h
      ? ((g = (0, Y.jsx)(K, { ...i, result: a, payload: r, signal: o, onClose: n, state: h })),
        (t[25] = n),
        (t[26] = r),
        (t[27] = i),
        (t[28] = a),
        (t[29] = o),
        (t[30] = h),
        (t[31] = g))
      : (g = t[31]),
    g
  );
}
function G(e) {
  let t = (0, q.c)(13),
    { template: n, ...r } = e,
    { resourceIdentity: i, request: a } = r.result,
    o = i.context.connectorTarget,
    {
      data: s,
      isError: c,
      error: l,
    } = d(R, {
      mcpAppId: r.modalId,
      hostId: r.hostId,
      accountId: i.identity.accountId ?? void 0,
      accountSource: i.context.accountSource,
      connectorId: o?.connectorId ?? null,
      targetId: o?.targetId,
      appUri: a.appUri,
      publicMcpLinkId: r.result.resource == null ? void 0 : (a.linkId ?? null),
      productSku: a.productSku,
      productContext: a.productContext,
      template: n,
    }),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = { kind: `loading` }), (t[0] = u)) : (u = t[0]);
  let f = u;
  if (N(l) || (c && s == null) || (s != null && !y(s.resourceIdentity.identity, i.identity))) {
    let e = c ? l : null,
      n;
    (t[1] === e ? (n = t[2]) : ((n = { kind: `error`, error: e }), (t[1] = e), (t[2] = n)), (f = n));
  } else if (s != null) {
    let e;
    t[3] !== a || t[4] !== n ? ((e = { ...a, template: n }), (t[3] = a), (t[4] = n), (t[5] = e)) : (e = t[5]);
    let i;
    (t[6] !== s || t[7] !== r.result || t[8] !== e
      ? ((i = { kind: `ready`, result: { ...r.result, ...s, request: e } }),
        (t[6] = s),
        (t[7] = r.result),
        (t[8] = e),
        (t[9] = i))
      : (i = t[9]),
      (f = i));
  }
  let p;
  return (
    t[10] !== r || t[11] !== f
      ? ((p = (0, Y.jsx)(K, { ...r, state: f })), (t[10] = r), (t[11] = f), (t[12] = p))
      : (p = t[12]),
    p
  );
}
function K(e) {
  let t = (0, q.c)(17),
    {
      WidgetDialog: n,
      recipient: r,
      state: i,
      payload: a,
      onClose: o,
      conversationId: s,
      hostId: c,
      modalId: l,
    } = e,
    u;
  t[0] !== o || t[1] !== a.allowsInteractiveDismissal || t[2] !== a.params || t[3] !== a.title || t[4] !== i
    ? ((u =
        i.kind === `ready`
          ? {
              kind: `ready`,
              result: {
                ...i.result,
                request: { ...i.result.request, mode: `modal`, viewParams: a.params },
                title: a.title,
                mcpAppHostAdapter: {
                  ...i.result.mcpAppHostAdapter,
                  retain: void 0,
                  dispose: void 0,
                  displayMode: `modal`,
                  allowsInteractiveDismissal: a.allowsInteractiveDismissal,
                  onRequestClose: o,
                },
              },
            }
          : i),
      (t[0] = o),
      (t[1] = a.allowsInteractiveDismissal),
      (t[2] = a.params),
      (t[3] = a.title),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] !== n ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== l ||
    t[10] !== o ||
    t[11] !== a.allowsInteractiveDismissal ||
    t[12] !== a.heightHint ||
    t[13] !== a.widthHint ||
    t[14] !== r ||
    t[15] !== u
      ? ((d = (0, Y.jsx)(n, {
          mcpAppId: l,
          conversationId: s,
          hostId: c,
          recipient: r,
          onClose: o,
          heightHint: a.heightHint,
          widthHint: a.widthHint,
          allowsInteractiveDismissal: a.allowsInteractiveDismissal,
          state: u,
        })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l),
        (t[10] = o),
        (t[11] = a.allowsInteractiveDismissal),
        (t[12] = a.heightHint),
        (t[13] = a.widthHint),
        (t[14] = r),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    d
  );
}
var q, J, Y, X;
function Z() {
  return (Z = e(() => {
    ((q = o()),
      l(),
      f(),
      (J = r()),
      a(),
      C(),
      F(),
      A(),
      v(),
      _(),
      t(),
      b(),
      z(),
      E(),
      O(),
      I(),
      S(),
      (Y = i()),
      (X = u(s, () => void 0)));
  }))();
}
export { B as i, Z as n, V as r, H as t };
//# sourceMappingURL=chatgpt-ecosystem-widget-modal-7538ac98c49e.js.map
