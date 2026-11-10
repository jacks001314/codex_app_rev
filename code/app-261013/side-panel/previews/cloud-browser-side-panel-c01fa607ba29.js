const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./cloud-browser-local-live-view-5b97181dc9e9.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./cloud-browser-view-42d40ec8a73c.js",
      "./o-soft-gradient-gray-fb0db9f05a6a.js",
      "./view-c83a0c93c859.js",
      "./view-2b0f3a0fceee.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  Ixt as r,
  Pxt as i,
  Rxt as a,
  VDt as o,
  Vxt as s,
  cSt as c,
  fPt as l,
  frt as u,
  jDt as d,
  pPt as f,
  urt as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  z4 as v,
  zxt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fnn as ee,
  GMr as b,
  Inn as x,
  QGn as S,
  YMr as C,
  nKn as te,
  oPr as ne,
  pZn as w,
  sPr as T,
  tNr as E,
  yjn as D,
} from "./app-initial-5851df3f6cb1.js";
import { Fs as O, Is as k, Ls as A, Ps as j } from "./app-primary-fe8a450b3b04.js";
import { n as M, t as N } from "./cloud-browser-view-42d40ec8a73c.js";
import { i as P, n as F, r as re, t as I } from "./session-b8f2c059bc32.js";
import { n as L, t as R } from "./capture-video-frame-127b50b205c9.js";
import { n as z, t as B } from "./cloud-browser-preview-fbe930c39e93.js";
var V;
function H() {
  return (H = e(() => {
    (i(),
      h(),
      L(),
      (V = c(
        n,
        (e, { signal: t }) => {
          let n = t(null),
            r = 0;
          return {
            frame$: n,
            startCapture(t) {
              let i = !1;
              return {
                async capture(a, o) {
                  if (e == null || i) return;
                  let s = R(a, { signal: o });
                  if (s == null) return;
                  let c = ++r,
                    l = await s;
                  l != null && !i && !o?.aborted && c === r && t.set(n, l);
                },
                stop() {
                  i = !0;
                },
              };
            },
          };
        },
        { autoDispose: 6e4 },
      )));
  }))();
}
function U(e) {
  let t = (0, K.c)(4),
    n;
  return (t[2] === e ? (n = t[3]) : ((n = (0, J.jsx)(W, { ...e })), (t[2] = e), (t[3] = n)), n);
}
function W(e) {
  let t = (0, K.c)(22),
    n = s(b),
    r = s(C),
    i = y(w, e.conversationId),
    a = e.browserOwnerConversationId ?? i,
    o = y(O, e.conversationId),
    c,
    l,
    u,
    d;
  if (
    t[0] !== n ||
    t[1] !== e.conversationId ||
    t[2] !== e.targetTabId ||
    t[3] !== o ||
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== r
  ) {
    let s;
    (t[11] !== e.targetTabId || t[12] !== a || t[13] !== i
      ? ((s = (t) =>
          (t.browser_conversation_id ?? i) === a && (e.targetTabId == null || t.tab_id === e.targetTabId)),
        (t[11] = e.targetTabId),
        (t[12] = a),
        (t[13] = i),
        (t[14] = s))
      : (s = t[14]),
      (u = o.findLast(s)),
      (l =
        n == null || r == null || a == null
          ? null
          : {
              accountId: n,
              userId: r,
              conversationId: e.conversationId,
              browserOwnerConversationId: a,
              browserId: u?.browser_id ?? null,
              targetTabId: e.targetTabId ?? null,
              peerUrl: null,
            }),
      (c = G),
      (d = JSON.stringify(l)),
      (t[0] = n),
      (t[1] = e.conversationId),
      (t[2] = e.targetTabId),
      (t[3] = o),
      (t[4] = a),
      (t[5] = i),
      (t[6] = r),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d));
  } else ((c = t[7]), (l = t[8]), (u = t[9]), (d = t[10]));
  let f = l == null ? void 0 : u,
    p;
  return (
    t[15] !== c || t[16] !== l || t[17] !== e.targetTabId || t[18] !== a || t[19] !== d || t[20] !== f
      ? ((p = (0, J.jsx)(
          c,
          { frameKey: l, screenshot: f, serverConversationId: a, targetTabId: e.targetTabId },
          d,
        )),
        (t[15] = c),
        (t[16] = l),
        (t[17] = e.targetTabId),
        (t[18] = a),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p))
      : (p = t[21]),
    p
  );
}
function G(e) {
  let t = (0, K.c)(44),
    { frameKey: i, screenshot: c, serverConversationId: l, targetTabId: u } = e,
    d = r(n),
    f = o(),
    m = a(V, i),
    h = s(m.frame$),
    g,
    _,
    v,
    y;
  if (
    t[0] !== i?.accountId ||
    t[1] !== i?.userId ||
    t[2] !== c?.image_asset_pointer.asset_pointer ||
    t[3] !== l
  ) {
    let e = ee(l ?? void 0);
    ((v = te),
      (y = c?.image_asset_pointer.asset_pointer ?? ``),
      (g = e),
      (_ = [...e.cacheKey, `cloud-browser`, i?.accountId, i?.userId]),
      (t[0] = i?.accountId),
      (t[1] = i?.userId),
      (t[2] = c?.image_asset_pointer.asset_pointer),
      (t[3] = l),
      (t[4] = g),
      (t[5] = _),
      (t[6] = v),
      (t[7] = y));
  } else ((g = t[4]), (_ = t[5]), (v = t[6]), (y = t[7]));
  let b;
  t[8] !== g || t[9] !== _ ? ((b = { ...g, cacheKey: _ }), (t[8] = g), (t[9] = _), (t[10] = b)) : (b = t[10]);
  let x = h == null,
    S;
  t[11] === x ? (S = t[12]) : ((S = { enabled: x }), (t[11] = x), (t[12] = S));
  let { dataUrl: C, src: w } = v(y, b, S),
    [T, E] = (0, q.useState)(null),
    [D, O] = (0, q.useState)(!1),
    k = h ?? T,
    A = C ?? w,
    j;
  t[13] === i ? (j = t[14]) : ((j = JSON.stringify(i)), (t[13] = i), (t[14] = j));
  let M = j,
    P;
  t[15] !== l || t[16] !== u
    ? ((P = u != null && l != null ? { requestId: u, threadId: l, tabId: u } : void 0),
      (t[15] = l),
      (t[16] = u),
      (t[17] = P))
    : (P = t[17]);
  let F = P,
    L;
  t[18] !== D || t[19] !== f
    ? ((L = D
        ? f.formatMessage({
            id: `chatgptConversations.cloudBrowser.liveView.tabUnavailable`,
            defaultMessage: `This browser tab is no longer available`,
            description: `Error shown when an assistant's secure cloud-browser handoff targets a tab that has closed or does not belong to this conversation`,
          })
        : f.formatMessage({
            id: `chatgptConversations.cloudBrowser.liveView.unavailable`,
            defaultMessage: `Cloud browser is unavailable`,
            description: `Error shown when an interactive ChatGPT cloud browser session cannot be opened`,
          })),
      (t[18] = D),
      (t[19] = f),
      (t[20] = L))
    : (L = t[20]);
  let R = L,
    z;
  t[21] !== h || t[22] !== c?.image_asset_pointer || t[23] !== A
    ? ((z =
        A != null &&
        h == null &&
        (0, J.jsx)(
          `img`,
          {
            "aria-hidden": !0,
            className: `hidden`,
            alt: ``,
            "data-dd-privacy": `hidden`,
            decoding: `async`,
            src: A,
            onLoad: (e) => {
              let t = e.currentTarget;
              t.decode().then(() => {
                t.isConnected &&
                  t.naturalWidth > 0 &&
                  t.naturalHeight > 0 &&
                  E({ dataUrl: t.currentSrc || t.src, aspectRatio: t.naturalWidth / t.naturalHeight });
              }, ie);
            },
          },
          c?.image_asset_pointer.asset_pointer,
        )),
      (t[21] = h),
      (t[22] = c?.image_asset_pointer),
      (t[23] = A),
      (t[24] = z))
    : (z = t[24]);
  let B;
  t[25] !== M || t[26] !== m || t[27] !== i || t[28] !== F || t[29] !== f || t[30] !== d || t[31] !== l
    ? ((B =
        i != null && l != null
          ? {
              key: M,
              render: (e) =>
                (0, Y.createElement)(re, {
                  ...e,
                  key: M,
                  connectionKey: M,
                  handoff: F,
                  waitForHandoff: !0,
                  onHandoffError: () => O(!0),
                  variant: `expanded`,
                  videoLabel: f.formatMessage({
                    id: `chatgptConversations.cloudBrowser.liveView.ariaLabel`,
                    defaultMessage: `Live cloud browser`,
                    description: `Accessible label for the interactive video of the cloud browser used by a ChatGPT Work task`,
                  }),
                  createConnection: () => {
                    let e = m.startCapture(d),
                      t = ae(l);
                    return {
                      url: t,
                      connect: (e, n) =>
                        p
                          .getInstance()
                          .fetch(t, {
                            method: `POST`,
                            body: e,
                            headers: { ...ne(), "Content-Type": `application/sdp` },
                            expectedIdentity: { accountId: i.accountId, userId: i.userId },
                            signal: n,
                            retry: `never`,
                          }),
                      getHandoff: () => F,
                      captureFrame: (t, n) => {
                        e.capture(t, n);
                      },
                      close: () => e.stop(),
                    };
                  },
                }),
            }
          : null),
      (t[25] = M),
      (t[26] = m),
      (t[27] = i),
      (t[28] = F),
      (t[29] = f),
      (t[30] = d),
      (t[31] = l),
      (t[32] = B))
    : (B = t[32]);
  let H = i == null ? `error` : void 0,
    U = k?.aspectRatio,
    W;
  t[33] !== k || t[34] !== R
    ? ((W = (e) =>
        (0, J.jsx)(N, {
          ...e,
          lastFrame: k,
          videoAspectRatio:
            e.connectionState === `streaming` ? e.videoAspectRatio : (k?.aspectRatio ?? e.videoAspectRatio),
          unavailableMessage: R,
        })),
      (t[33] = k),
      (t[34] = R),
      (t[35] = W))
    : (W = t[35]);
  let G;
  t[36] !== B || t[37] !== H || t[38] !== U || t[39] !== W
    ? ((G = (0, J.jsx)(I, { connection: B, connectionState: H, initialAspectRatio: U, renderView: W })),
      (t[36] = B),
      (t[37] = H),
      (t[38] = U),
      (t[39] = W),
      (t[40] = G))
    : (G = t[40]);
  let X;
  return (
    t[41] !== z || t[42] !== G
      ? ((X = (0, J.jsxs)(`div`, {
          className: `flex size-full min-h-0`,
          "data-codex-cloud-browser": !0,
          children: [z, G],
        })),
        (t[41] = z),
        (t[42] = G),
        (t[43] = X))
      : (X = t[43]),
    X
  );
}
function ie() {}
function ae(e) {
  let t = new URL(
    `https://chatgpt.com/backend-api`.includes(`chatgpt-staging.com`)
      ? `https://realtime.chatgpt-staging.com/v1/cua`
      : `https://realtime.chatgpt.com/v1/cua`,
  );
  return (t.searchParams.set(`cid`, e), t.searchParams.set(`source`, `flora`), t.toString());
}
var K, q, J, Y;
function X() {
  return (X = e(() => {
    ((K = m()),
      i(),
      (q = _()),
      d(),
      E(),
      P(),
      F(),
      v(),
      h(),
      S(),
      T(),
      u(),
      x(),
      D(),
      H(),
      A(),
      M(),
      (J = g()),
      (Y = _()),
      f(),
      t(
        async () => {
          let { LocalCloudBrowserLiveView: e } = await l(
            async () => {
              let { LocalCloudBrowserLiveView: e } = await import(
                `./cloud-browser-local-live-view-5b97181dc9e9.js`
              );
              return { LocalCloudBrowserLiveView: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
            import.meta.url,
          );
          return e;
        },
        { fallback: (0, J.jsx)(N, { connectionState: `connecting` }) },
      ));
  }))();
}
function oe(e) {
  let t = (0, Z.c)(18),
    { conversationId: n, browserOwnerConversationId: r, renderSlots: i, targetTabId: a } = e,
    o = y(O, n),
    s = y(j, n),
    c = o[k(s, o)],
    l;
  if (
    t[0] !== c?.browser_conversation_id ||
    t[1] !== r ||
    t[2] !== n ||
    t[3] !== i ||
    t[4] !== s.mode ||
    t[5] !== o ||
    t[6] !== a
  ) {
    let e;
    t[8] !== c?.browser_conversation_id || t[9] !== r || t[10] !== n || t[11] !== s.mode || t[12] !== a
      ? ((e =
          s.mode === `live`
            ? (0, Q.jsx)(
                U,
                {
                  conversationId: n,
                  browserOwnerConversationId: r ?? c?.browser_conversation_id,
                  targetTabId: a,
                },
                a ?? `active-browser-tab`,
              )
            : void 0),
        (t[8] = c?.browser_conversation_id),
        (t[9] = r),
        (t[10] = n),
        (t[11] = s.mode),
        (t[12] = a),
        (t[13] = e))
      : (e = t[13]);
    let u;
    (t[14] !== n || t[15] !== o || t[16] !== e
      ? ((u = (0, Q.jsx)(B, { conversationId: n, liveView: e, screenshots: o, variant: `expanded` })),
        (t[14] = n),
        (t[15] = o),
        (t[16] = e),
        (t[17] = u))
      : (u = t[17]),
      (l = i({ headerRows: [], content: u })),
      (t[0] = c?.browser_conversation_id),
      (t[1] = r),
      (t[2] = n),
      (t[3] = i),
      (t[4] = s.mode),
      (t[5] = o),
      (t[6] = a),
      (t[7] = l));
  } else l = t[7];
  return l;
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = m()), i(), X(), z(), A(), (Q = g()));
  }))();
}
$();
export { oe as ChatGptCloudBrowserSidePanel };
//# sourceMappingURL=cloud-browser-side-panel-c01fa607ba29.js.map
