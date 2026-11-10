import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Pxt as n,
  _xt as r,
  dft as i,
  fSt as a,
  rst as o,
  vzt as s,
  wot as c,
  wxt as l,
  xMt as u,
  yzt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bur as p,
  Fur as m,
  G4n as h,
  IWn as g,
  J1n as _,
  J4n as v,
  Kyt as y,
  LWn as b,
  N4n as x,
  Nur as S,
  Rur as C,
  SG as w,
  U4n as T,
  Udr as E,
  Y1n as D,
  dMn as O,
  fMn as k,
  j4n as A,
  mMn as j,
  pZn as M,
  qyt as N,
  uMn as P,
  xG as F,
  yjn as I,
  zur as L,
} from "./app-initial-5851df3f6cb1.js";
import { n as R, r as z } from "./chatgpt-ecosystem-widget-resource-9c3e6a125c8e.js";
async function B(e, t, n) {
  let { result: r, signal: i } = t,
    a = D.parse(t.payload),
    o = r.modalOwner ?? { result: r, signal: i },
    s = () => {
      if (
        (i.throwIfAborted(), r.mcpAppHostAdapter.assertActive?.(), e.get(j, r.resourceIdentity) !== `current`)
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
    C(e.queryClient, L({ accountId: c, appIds: [a.app], enabled: !0, productContext: `chatgpt` })),
    e.queryClient.fetchQuery(S({ accountId: c, userId: l })),
  ]);
  s();
  let f = E(a.app),
    p = u.find((e) => E(e.id) === f);
  if (p == null) throw Error(`The requested app is unavailable`);
  let m = d.filter((e) => E(e.connector_id) === f),
    h = m.find(
      (e) =>
        e.connector_status !== `DISABLED_BY_ADMIN` &&
        e.unavailable_reason == null &&
        e.auth_status !== `REAUTH_REQUIRED`,
    ),
    g = h?.connector_id ?? m[0]?.connector_id ?? p.id,
    _ = n?.linkId ?? h?.id;
  if (h == null && n?.didConnect !== !0) {
    let n = await x(e, {
      connectorId: g,
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
        sourceConversationId: e.get(M, o.result.request.chatGptThreadId),
        returnTo: e.value.pathname,
        payload: { ...a, app: g, template: a.template },
      },
    });
    if ((s(), !n.didConnect)) return;
    _ = n.linkId;
  }
  let v = `connectors://${g}`,
    b = {
      hostId: t.hostId,
      server: `codex_apps`,
      accountSource: r.resourceIdentity.context.accountSource,
      threadId: r.request.threadId ?? null,
      connectorTarget: { connectorId: g, targetId: _ ?? null },
    },
    w = e.get(k, b);
  if (w == null) throw Error(`The app connection is unavailable`);
  V(e, {
    ...t,
    payload: a,
    signal: o.signal,
    result: {
      ...r,
      modalOwner: o,
      distributionChannel: void 0,
      redirectDomains: void 0,
      attributionId: g,
      widgetSessionId: void 0,
      widgetStatePersistence: void 0,
      resourceIdentity: { context: b, identity: w },
      request: { ...r.request, appUri: v, template: a.template },
      mcpAppHostAdapter: {
        ...y({
          scope: e,
          accountId: c,
          accountSource: r.resourceIdentity.context.accountSource,
          signal: o.signal,
          appUri: v,
          chatGptConversationId: r.request.chatGptThreadId,
          threadId: r.request.threadId,
          productSku: r.request.productSku,
          messageId: r.request.sourceMessageId ?? null,
          originMetadata: { "openai/connector_id": g, "openai/link_id": _ },
        }),
        assertActive: () => {
          (o.signal.throwIfAborted(), o.result.mcpAppHostAdapter.assertActive?.());
        },
      },
    },
  });
}
function V(e, { payload: t, ...n }, r) {
  let a = D.parse(t);
  (n.signal.throwIfAborted(),
    e.set(X, r),
    v(e, U, {
      ...n,
      signal: n.result.modalOwner?.signal ?? n.signal,
      result: { ...n.result, modalOwner: n.result.modalOwner ?? { result: n.result, signal: n.signal } },
      route: e.value,
      payload: a,
      modalId: i(),
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
      ? ((a = (0, Y.jsx)(F, { route: r.route, children: i })), (t[6] = r.route), (t[7] = i), (t[8] = a))
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
  let s = f(k, a.resourceIdentity.context),
    c;
  t[6] !== s || t[7] !== a.resourceIdentity.identity
    ? ((c = O(s, a.resourceIdentity.identity)), (t[6] = s), (t[7] = a.resourceIdentity.identity), (t[8] = c))
    : (c = t[8]);
  let u = c,
    { pathname: d } = l(),
    p,
    m;
  if (
    (t[9] !== u || t[10] !== n || t[11] !== d || t[12] !== i.route.pathname || t[13] !== o
      ? ((p = () => {
          if (o.aborted || !u || d !== i.route.pathname) {
            n();
            return;
          }
          return (o.addEventListener(`abort`, n, { once: !0 }), () => o.removeEventListener(`abort`, n));
        }),
        (m = [o, n, u, d, i.route.pathname]),
        (t[9] = u),
        (t[10] = n),
        (t[11] = d),
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
    } = f(R, {
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
  let d = u;
  if (b(l) || (c && s == null) || (s != null && !O(s.resourceIdentity.identity, i.identity))) {
    let e = c ? l : null,
      n;
    (t[1] === e ? (n = t[2]) : ((n = { kind: `error`, error: e }), (t[1] = e), (t[2] = n)), (d = n));
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
      (d = i));
  }
  let p;
  return (
    t[10] !== r || t[11] !== d
      ? ((p = (0, Y.jsx)(K, { ...r, state: d })), (t[10] = r), (t[11] = d), (t[12] = p))
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
    ((q = s()),
      n(),
      o(),
      (J = d()),
      r(),
      P(),
      A(),
      p(),
      m(),
      h(),
      c(),
      w(),
      z(),
      I(),
      g(),
      N(),
      _(),
      (Y = u()),
      (X = a(t, () => void 0)));
  }))();
}
export { B as i, Z as n, V as r, H as t };
//# sourceMappingURL=chatgpt-ecosystem-widget-modal-78b0f8d9ccae.js.map
