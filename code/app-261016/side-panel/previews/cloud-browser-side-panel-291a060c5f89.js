const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./cloud-browser-local-live-view-6cd38c59fbd2.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./cloud-browser-view-5fc1ac92089c.js",
      "./o-soft-gradient-gray-fb0db9f05a6a.js",
      "./view-d9f4f0c40cf2.js",
      "./view-2b0f3a0fceee.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Eit as r,
  F3 as i,
  FBt as a,
  I3 as o,
  LNt as s,
  OFt as c,
  Oit as l,
  PBt as u,
  Qst as d,
  TCt as f,
  XOt as p,
  ZSt as m,
  iCt as h,
  kFt as g,
  nCt as _,
  okt as ee,
  tCt as te,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as v,
  TYn as y,
  VPn as b,
  bLr as x,
  non as ne,
  oRr as re,
  ron as S,
  sRr as C,
  wLr as w,
  xYn as T,
  zRr as E,
} from "./app-initial-ad16eaadf81f.js";
import { Gs as D, Js as O, Ks as k, qs as A } from "./app-primary-3e00728c2a4c.js";
import { n as j, t as M } from "./cloud-browser-view-5fc1ac92089c.js";
import { i as N, n as P, r as F, t as I } from "./session-d770dde37db8.js";
import { n as L, t as R } from "./capture-video-frame-25fe4bcccbba.js";
import { n as z, t as B } from "./cloud-browser-preview-5443036c9d74.js";
var V;
function H() {
  return (H = e(() => {
    (m(),
      n(),
      L(),
      (V = f(
        d,
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
    n = h(E),
    r = h(x),
    i = _(v, e.conversationId),
    a = e.browserOwnerConversationId ?? i,
    o = _(k, e.conversationId),
    s,
    c,
    l,
    u;
  if (
    t[0] !== n ||
    t[1] !== e.conversationId ||
    t[2] !== e.targetTabId ||
    t[3] !== o ||
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== r
  ) {
    let d;
    (t[11] !== e.targetTabId || t[12] !== a || t[13] !== i
      ? ((d = (t) =>
          (t.browser_conversation_id ?? i) === a && (e.targetTabId == null || t.tab_id === e.targetTabId)),
        (t[11] = e.targetTabId),
        (t[12] = a),
        (t[13] = i),
        (t[14] = d))
      : (d = t[14]),
      (l = o.findLast(d)),
      (c =
        n == null || r == null || a == null
          ? null
          : {
              accountId: n,
              userId: r,
              conversationId: e.conversationId,
              browserOwnerConversationId: a,
              browserId: l?.browser_id ?? null,
              targetTabId: e.targetTabId ?? null,
              peerUrl: null,
            }),
      (s = G),
      (u = JSON.stringify(c)),
      (t[0] = n),
      (t[1] = e.conversationId),
      (t[2] = e.targetTabId),
      (t[3] = o),
      (t[4] = a),
      (t[5] = i),
      (t[6] = r),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u));
  } else ((s = t[7]), (c = t[8]), (l = t[9]), (u = t[10]));
  let d = c == null ? void 0 : l,
    f;
  return (
    t[15] !== s || t[16] !== c || t[17] !== e.targetTabId || t[18] !== a || t[19] !== u || t[20] !== d
      ? ((f = (0, J.jsx)(
          s,
          { frameKey: c, screenshot: d, serverConversationId: a, targetTabId: e.targetTabId },
          u,
        )),
        (t[15] = s),
        (t[16] = c),
        (t[17] = e.targetTabId),
        (t[18] = a),
        (t[19] = u),
        (t[20] = d),
        (t[21] = f))
      : (f = t[21]),
    f
  );
}
function G(e) {
  let n = (0, K.c)(44),
    { frameKey: i, screenshot: a, serverConversationId: o, targetTabId: s } = e,
    c = t(d),
    l = ee(),
    u = te(V, i),
    f = h(u.frame$),
    p,
    m,
    g,
    _;
  if (
    n[0] !== i?.accountId ||
    n[1] !== i?.userId ||
    n[2] !== a?.image_asset_pointer.asset_pointer ||
    n[3] !== o
  ) {
    let e = ne(o ?? void 0);
    ((g = y),
      (_ = a?.image_asset_pointer.asset_pointer ?? ``),
      (p = e),
      (m = [...e.cacheKey, `cloud-browser`, i?.accountId, i?.userId]),
      (n[0] = i?.accountId),
      (n[1] = i?.userId),
      (n[2] = a?.image_asset_pointer.asset_pointer),
      (n[3] = o),
      (n[4] = p),
      (n[5] = m),
      (n[6] = g),
      (n[7] = _));
  } else ((p = n[4]), (m = n[5]), (g = n[6]), (_ = n[7]));
  let v;
  n[8] !== p || n[9] !== m ? ((v = { ...p, cacheKey: m }), (n[8] = p), (n[9] = m), (n[10] = v)) : (v = n[10]);
  let b = f == null,
    x;
  n[11] === b ? (x = n[12]) : ((x = { enabled: b }), (n[11] = b), (n[12] = x));
  let { dataUrl: S, src: C } = g(_, v, x),
    [w, T] = (0, q.useState)(null),
    [E, D] = (0, q.useState)(!1),
    O = f ?? w,
    k = S ?? C,
    A;
  n[13] === i ? (A = n[14]) : ((A = JSON.stringify(i)), (n[13] = i), (n[14] = A));
  let j = A,
    N;
  n[15] !== o || n[16] !== s
    ? ((N = s != null && o != null ? { requestId: s, threadId: o, tabId: s } : void 0),
      (n[15] = o),
      (n[16] = s),
      (n[17] = N))
    : (N = n[17]);
  let P = N,
    L;
  n[18] !== E || n[19] !== l
    ? ((L = E
        ? l.formatMessage({
            id: `chatgptConversations.cloudBrowser.liveView.tabUnavailable`,
            defaultMessage: `This browser tab is no longer available`,
            description: `Error shown when an assistant's secure cloud-browser handoff targets a tab that has closed or does not belong to this conversation`,
          })
        : l.formatMessage({
            id: `chatgptConversations.cloudBrowser.liveView.unavailable`,
            defaultMessage: `Cloud browser is unavailable`,
            description: `Error shown when an interactive ChatGPT cloud browser session cannot be opened`,
          })),
      (n[18] = E),
      (n[19] = l),
      (n[20] = L))
    : (L = n[20]);
  let R = L,
    z;
  n[21] !== f || n[22] !== a?.image_asset_pointer || n[23] !== k
    ? ((z =
        k != null &&
        f == null &&
        (0, J.jsx)(
          `img`,
          {
            "aria-hidden": !0,
            className: `hidden`,
            alt: ``,
            "data-dd-privacy": `hidden`,
            decoding: `async`,
            src: k,
            onLoad: (e) => {
              let t = e.currentTarget;
              t.decode().then(() => {
                t.isConnected &&
                  t.naturalWidth > 0 &&
                  t.naturalHeight > 0 &&
                  T({ dataUrl: t.currentSrc || t.src, aspectRatio: t.naturalWidth / t.naturalHeight });
              }, ie);
            },
          },
          a?.image_asset_pointer.asset_pointer,
        )),
      (n[21] = f),
      (n[22] = a?.image_asset_pointer),
      (n[23] = k),
      (n[24] = z))
    : (z = n[24]);
  let B;
  n[25] !== j || n[26] !== u || n[27] !== i || n[28] !== P || n[29] !== l || n[30] !== c || n[31] !== o
    ? ((B =
        i != null && o != null
          ? {
              key: j,
              render: (e) =>
                (0, Y.createElement)(F, {
                  ...e,
                  key: j,
                  connectionKey: j,
                  handoff: P,
                  waitForHandoff: !0,
                  onHandoffError: () => D(!0),
                  variant: `expanded`,
                  videoLabel: l.formatMessage({
                    id: `chatgptConversations.cloudBrowser.liveView.ariaLabel`,
                    defaultMessage: `Live cloud browser`,
                    description: `Accessible label for the interactive video of the cloud browser used by a ChatGPT Work task`,
                  }),
                  createConnection: () => {
                    let e = u.startCapture(c),
                      t = ae(o);
                    return {
                      url: t,
                      connect: (e, n) =>
                        r
                          .getInstance()
                          .fetch(t, {
                            method: `POST`,
                            body: e,
                            headers: { ...re(), "Content-Type": `application/sdp` },
                            expectedIdentity: { accountId: i.accountId, userId: i.userId },
                            signal: n,
                            retry: `never`,
                          }),
                      getHandoff: () => P,
                      captureFrame: (t, n) => {
                        e.capture(t, n);
                      },
                      close: () => e.stop(),
                    };
                  },
                }),
            }
          : null),
      (n[25] = j),
      (n[26] = u),
      (n[27] = i),
      (n[28] = P),
      (n[29] = l),
      (n[30] = c),
      (n[31] = o),
      (n[32] = B))
    : (B = n[32]);
  let H = i == null ? `error` : void 0,
    U = O?.aspectRatio,
    W;
  n[33] !== O || n[34] !== R
    ? ((W = (e) =>
        (0, J.jsx)(M, {
          ...e,
          lastFrame: O,
          videoAspectRatio:
            e.connectionState === `streaming` ? e.videoAspectRatio : (O?.aspectRatio ?? e.videoAspectRatio),
          unavailableMessage: R,
        })),
      (n[33] = O),
      (n[34] = R),
      (n[35] = W))
    : (W = n[35]);
  let G;
  n[36] !== B || n[37] !== H || n[38] !== U || n[39] !== W
    ? ((G = (0, J.jsx)(I, { connection: B, connectionState: H, initialAspectRatio: U, renderView: W })),
      (n[36] = B),
      (n[37] = H),
      (n[38] = U),
      (n[39] = W),
      (n[40] = G))
    : (G = n[40]);
  let X;
  return (
    n[41] !== z || n[42] !== G
      ? ((X = (0, J.jsxs)(`div`, {
          className: `flex size-full min-h-0`,
          "data-codex-cloud-browser": !0,
          children: [z, G],
        })),
        (n[41] = z),
        (n[42] = G),
        (n[43] = X))
      : (X = n[43]),
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
    ((K = u()),
      m(),
      (q = a()),
      p(),
      w(),
      N(),
      P(),
      i(),
      n(),
      T(),
      C(),
      l(),
      S(),
      b(),
      H(),
      O(),
      j(),
      (J = s()),
      (Y = a()),
      g(),
      o(
        async () => {
          let { LocalCloudBrowserLiveView: e } = await c(
            async () => {
              let { LocalCloudBrowserLiveView: e } = await import(
                `./cloud-browser-local-live-view-6cd38c59fbd2.js`
              );
              return { LocalCloudBrowserLiveView: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
            import.meta.url,
          );
          return e;
        },
        { fallback: (0, J.jsx)(M, { connectionState: `connecting` }) },
      ));
  }))();
}
function oe(e) {
  let t = (0, Z.c)(18),
    { conversationId: n, browserOwnerConversationId: r, renderSlots: i, targetTabId: a } = e,
    o = _(k, n),
    s = _(D, n),
    c = o[A(s, o)],
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
    ((Z = u()), m(), X(), z(), O(), (Q = s()));
  }))();
}
$();
export { oe as ChatGptCloudBrowserSidePanel };
//# sourceMappingURL=cloud-browser-side-panel-291a060c5f89.js.map
