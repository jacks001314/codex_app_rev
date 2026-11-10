import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Iot as r,
  Ixt as i,
  Kat as a,
  Lot as o,
  Pxt as s,
  Rxt as c,
  SPt as l,
  Vxt as u,
  frt as d,
  qat as f,
  urt as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dy as y,
  Ey as b,
  GMr as x,
  Opr as S,
  Ty as C,
  XMr as w,
  YMr as T,
  Ymr as ee,
  ehr as E,
  hgr as D,
  oPr as O,
  sPr as k,
  tNr as A,
  vgr as j,
  wpr as M,
  wy as N,
  ygr as P,
} from "./app-initial-5851df3f6cb1.js";
import { i as F, n as I, r as L, t as te } from "./session-b8f2c059bc32.js";
import { a as R, i as z, n as B, t as V } from "./view-49d726ac8ed7.js";
import { a as H, i as ne, n as U, r as W, t as re } from "./last-frame-c4ad7e46e910.js";
function ie(
  { apiBaseUrl: e = `https://chatgpt.com/backend-api`, aeonId: t, threadId: n, expectedIdentity: r },
  i,
  a,
) {
  a.throwIfAborted();
  let o = new URL(e);
  if (
    o.protocol !== `https:` ||
    o.username !== `` ||
    o.password !== `` ||
    o.port !== `` ||
    !/^(chatgpt\.com|chatgpt-staging\.com|dev-ephemeral-pr[0-9]+\.chatgpt-staging\.com)$/.test(o.hostname)
  )
    throw Error(`Unsupported computer backend`);
  let s = new URL(z(e));
  return (
    s.searchParams.set(`source`, `aeon`),
    s.searchParams.set(`thread_id`, n),
    s.searchParams.set(`aeon_id`, t),
    p
      .getInstance()
      .fetch(s.href, {
        method: `POST`,
        body: i,
        headers: { ...O(), "Content-Type": `application/sdp` },
        expectedIdentity: r,
        signal: a,
        retry: `never`,
      })
  );
}
function G() {
  return (G = e(() => {
    (R(), k(), d());
  }))();
}
function ae(e) {
  let r = (0, K.c)(30),
    o,
    s,
    l,
    u,
    d,
    f,
    p,
    m;
  r[0] === e
    ? ((o = r[1]), (s = r[2]), (l = r[3]), (u = r[4]), (d = r[5]), (f = r[6]), (p = r[7]), (m = r[8]))
    : (({
        aeonId: o,
        authenticatedUserId: s,
        conversationId: l,
        environmentId: u,
        frameKey: d,
        handoff: f,
        onConnectionStateChange: p,
        ...m
      } = e),
      (r[0] = e),
      (r[1] = o),
      (r[2] = s),
      (r[3] = l),
      (r[4] = u),
      (r[5] = d),
      (r[6] = f),
      (r[7] = p),
      (r[8] = m));
  let h = i(n),
    g = c(N, l),
    _ = (0, q.useRef)(null),
    { accountId: v, userId: y, conversationId: x } = d,
    S = `${v}:${y}:${s}:${l}:${o}:${u}:${x}`,
    C;
  r[9] !== v ||
  r[10] !== o ||
  r[11] !== s ||
  r[12] !== x ||
  r[13] !== l ||
  r[14] !== u ||
  r[15] !== d ||
  r[16] !== g ||
  r[17] !== h
    ? ((C = () =>
        h.get(g.presentation$)?.variant === `expanded`
          ? {
              connect: async (e, t) => {
                let { chatGptApiBaseUrl: n } = await a.appInfo.get();
                return ie(
                  { apiBaseUrl: n, aeonId: o, threadId: x, expectedIdentity: { accountId: v, userId: s } },
                  e,
                  t,
                );
              },
              getHandoff: () => {
                let e = h.get(g.handoff$);
                return (e?.connectionThreadId ?? l) === x ? e : void 0;
              },
              captureFrame: (e, t) => {
                re(h, d, u, e, t);
              },
              onReady: () => g.reportViewReady(x),
              onHandoffAttempted: (e) => g.clearHandoff(e),
              telemetry: new b(h, x, u),
              localWebAuthn: a?.localWebAuthn,
            }
          : null),
      (r[9] = v),
      (r[10] = o),
      (r[11] = s),
      (r[12] = x),
      (r[13] = l),
      (r[14] = u),
      (r[15] = d),
      (r[16] = g),
      (r[17] = h),
      (r[18] = C))
    : (C = r[18]);
  let w;
  r[19] !== u || r[20] !== d || r[21] !== p || r[22] !== h
    ? ((w = (e) => {
        if (_.current !== e) {
          let n = h.get(U, d);
          (t.info(`Computer viewer state`, {
            safe: {
              previousState: _.current,
              state: e,
              hasCachedFrame: n != null,
              cacheMatchesEnvironment: n?.environmentId === u,
            },
          }),
            (_.current = e));
        }
        p(e);
      }),
      (r[19] = u),
      (r[20] = d),
      (r[21] = p),
      (r[22] = h),
      (r[23] = w))
    : (w = r[23]);
  let T;
  return (
    r[24] !== f || r[25] !== m || r[26] !== S || r[27] !== C || r[28] !== w
      ? ((T = (0, J.jsx)(L, {
          ...m,
          connectionKey: S,
          handoff: f,
          createConnection: C,
          onConnectionStateChange: w,
        })),
        (r[24] = f),
        (r[25] = m),
        (r[26] = S),
        (r[27] = C),
        (r[28] = w),
        (r[29] = T))
      : (T = r[29]),
    T
  );
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = m()), s(), (q = _()), F(), f(), h(), l(), G(), W(), C(), y(), (J = g()));
  }))();
}
function oe(e) {
  let t = (0, X.c)(7),
    { conversationId: n, connectionThreadId: r, variant: i } = e,
    a = i === void 0 ? `expanded` : i,
    o = r ?? n,
    s = u(x),
    c = u(w);
  if (s == null || c == null) return null;
  let l = `${s}:${c}:${n}:${o}`,
    d;
  return (
    t[0] !== s || t[1] !== n || t[2] !== o || t[3] !== l || t[4] !== c || t[5] !== a
      ? ((d = (0, Z.jsx)(
          se,
          { accountId: s, conversationId: n, connectionThreadId: o, userId: c, variant: a },
          l,
        )),
        (t[0] = s),
        (t[1] = n),
        (t[2] = o),
        (t[3] = l),
        (t[4] = c),
        (t[5] = a),
        (t[6] = d))
      : (d = t[6]),
    d
  );
}
function se(e) {
  let t = (0, X.c)(44),
    { accountId: n, conversationId: r, connectionThreadId: i, userId: a, variant: s } = e,
    l = c(N, r),
    d = u(l.takeoverRequested$),
    f = u(l.handoff$),
    p = u(T),
    { data: m, dataUpdatedAt: h, isError: g, refetch: _ } = v(ne, i),
    y = v(M, i)?.data,
    b;
  t[0] !== n || t[1] !== i
    ? ((b = (e) => {
        let { aeonId: t, authenticatedUserId: r } = e;
        return ee.safePost(`/tbo/{tbo_id}/environment/recreate`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          expectedIdentity: { accountId: n, userId: r },
          parameters: { path: { tbo_id: t }, query: { thread_id: i } },
          retry: !1,
        });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = b))
    : (b = t[2]);
  let x;
  t[3] === _ ? (x = t[4]) : ((x = () => _()), (t[3] = _), (t[4] = x));
  let S;
  t[5] !== b || t[6] !== x
    ? ((S = { mutationFn: b, onSettled: x, retry: !1 }), (t[5] = b), (t[6] = x), (t[7] = S))
    : (S = t[7]);
  let { mutate: C, isPending: w } = o(S),
    E;
  t[8] === m?.capabilities
    ? (E = t[9])
    : ((E = m?.capabilities.find(ce)), (t[8] = m?.capabilities), (t[9] = E));
  let D = E,
    O;
  t[10] !== n || t[11] !== i || t[12] !== a
    ? ((O = { accountId: n, userId: a, conversationId: i }),
      (t[10] = n),
      (t[11] = i),
      (t[12] = a),
      (t[13] = O))
    : (O = t[13]);
  let k = O,
    A = v(U, k),
    j = m == null || A?.environmentId === m.environmentId ? A : null,
    P = D?.status === `ready` ? (m?.environmentId ?? null) : null,
    F = s === `expanded` && p != null && P != null && y != null ? `${p}:${y.id}:${P}:${i}` : null,
    I =
      !w &&
      D?.status !== `starting` &&
      ((g && F == null) || (m != null && (m.environmentId == null || D?.status !== `ready`))),
    L;
  t[14] !== y ||
  t[15] !== p ||
  t[16] !== F ||
  t[17] !== r ||
  t[18] !== P ||
  t[19] !== k ||
  t[20] !== f ||
  t[21] !== s
    ? ((L =
        F != null && y != null && p != null && P != null
          ? {
              key: F,
              render: (e) =>
                (0, Q.createElement)(ae, {
                  ...e,
                  key: F,
                  aeonId: y.id,
                  authenticatedUserId: p,
                  conversationId: r,
                  environmentId: P,
                  frameKey: k,
                  handoff: f,
                  variant: s,
                }),
            }
          : null),
      (t[14] = y),
      (t[15] = p),
      (t[16] = F),
      (t[17] = r),
      (t[18] = P),
      (t[19] = k),
      (t[20] = f),
      (t[21] = s),
      (t[22] = L))
    : (L = t[22]);
  let R = I ? `error` : void 0,
    z = j?.aspectRatio,
    B = j != null,
    V;
  t[23] === l ? (V = t[24]) : ((V = () => l.clearTakeoverRequest()), (t[23] = l), (t[24] = V));
  let H;
  t[25] !== y ||
  t[26] !== p ||
  t[27] !== r ||
  t[28] !== w ||
  t[29] !== j ||
  t[30] !== l ||
  t[31] !== C ||
  t[32] !== D ||
  t[33] !== s
    ? ((H = (e) =>
        (0, Z.jsx)(le, {
          ...e,
          conversationId: r,
          lastFrame: j,
          onStartupRetry:
            y != null && p != null
              ? () => {
                  w || (l.clearTakeoverRequest(), C({ aeonId: y.id, authenticatedUserId: p }));
                }
              : void 0,
          isRetryingStartup: w,
          startupError: D?.status === `failed` ? (D.error ?? null) : void 0,
          variant: s,
        })),
      (t[25] = y),
      (t[26] = p),
      (t[27] = r),
      (t[28] = w),
      (t[29] = j),
      (t[30] = l),
      (t[31] = C),
      (t[32] = D),
      (t[33] = s),
      (t[34] = H))
    : (H = t[34]);
  let W;
  return (
    t[35] !== h ||
    t[36] !== V ||
    t[37] !== H ||
    t[38] !== L ||
    t[39] !== R ||
    t[40] !== z ||
    t[41] !== B ||
    t[42] !== d
      ? ((W = (0, Z.jsx)(te, {
          connection: L,
          connectionState: R,
          initialAspectRatio: z,
          hasLastFrame: B,
          statusUpdatedAt: h,
          takeoverRequested: d,
          onTakeoverRequestHandled: V,
          renderView: H,
        })),
        (t[35] = h),
        (t[36] = V),
        (t[37] = H),
        (t[38] = L),
        (t[39] = R),
        (t[40] = z),
        (t[41] = B),
        (t[42] = d),
        (t[43] = W))
      : (W = t[43]),
    W
  );
}
function ce(e) {
  return e.type === `remote_desktop`;
}
function le(e) {
  let t = (0, X.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ conversationId: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = v(M, n)?.data,
    a = v(D, n),
    o = v(P, n),
    s = a?.avatar ?? null,
    c = o ?? `cyan`,
    l = i?.display_name,
    u;
  return (
    t[3] !== n || t[4] !== r || t[5] !== s || t[6] !== c || t[7] !== l
      ? ((u = (0, Z.jsx)(V, { ...r, conversationId: n, orbitAvatar: s, orbitColor: c, orbitName: l })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = m()), r(), s(), A(), E(), I(), j(), S(), H(), W(), Y(), C(), B(), (Z = g()), (Q = _()));
  }))();
}
$();
export { oe as CloudAeonComputerPanel };
//# sourceMappingURL=panel-84e37c2e1229.js.map
