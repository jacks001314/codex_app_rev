import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HFt as t,
  LNt as n,
  PBt as r,
  VRt as i,
  kRt as a,
  sct as o,
  uSt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $jn as c,
  A5n as l,
  BRr as u,
  C$n as d,
  D5n as f,
  GK as p,
  IZn as m,
  O5n as h,
  PZn as g,
  Qjn as _,
  T5n as v,
  WK as y,
  Xjn as b,
  cBr as x,
  eMn as S,
  eMr as C,
  iRr as w,
  lBr as T,
  qjn as E,
  rPn as D,
  tyr as O,
  w$n as k,
  wLr as A,
  zRr as j,
} from "./app-initial-ad16eaadf81f.js";
import { i as M, n as N } from "./chatgpt-ecosystem-widget-f627221f36cd.js";
import { n as P, r as F } from "./chatgpt-ecosystem-widget-launch-53c875439c23.js";
import { n as I, r as L, t as R } from "./shop-this-image-input-56157b01b29a.js";
function z(e) {
  let t = (0, B.c)(13),
    { conversationId: n, sharedConversationId: r, hostId: i, state: a, onClose: o } = e,
    c;
  t[0] !== n || t[1] !== r
    ? ((c =
        r == null
          ? {
              routeKind: `chatgpt-thread`,
              conversationId: n,
              pathname: `/c/${n}`,
              routeTemplate: `/c/:conversationId`,
            }
          : { routeKind: `other`, pathname: `/share/${r}`, routeTemplate: `/share/:sharedConversationId` }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === n ? (l = t[4]) : ((l = s(n)), (t[3] = n), (t[4] = l));
  let u;
  t[5] !== i || t[6] !== o || t[7] !== a || t[8] !== l
    ? ((u = (0, V.jsx)(N, { conversationId: l, hostId: i, state: a, onClose: o })),
      (t[5] = i),
      (t[6] = o),
      (t[7] = a),
      (t[8] = l),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== c || t[11] !== u
      ? ((d = (0, V.jsx)(y, { route: c, children: u })), (t[10] = c), (t[11] = u), (t[12] = d))
      : (d = t[12]),
    d
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = r()), o(), p(), M(), (V = n()));
  }))();
}
function U(e, t, n, r) {
  let i = W.safeParse(t);
  if (
    !i.success ||
    (n != null && n !== i.data.accountId) ||
    i.data.accountId !== e.get(j) ||
    i.data.userId !== e.get(u) ||
    !S()
  )
    return;
  let {
      conversationId: a,
      sharedConversationId: o,
      messageId: s,
      assetPointer: c,
      appUri: d,
      userId: f,
      accountId: p,
    } = i.data,
    m = new AbortController(),
    { signal: y } = m,
    T = (t) => {
      y.aborted ||
        l(
          e,
          z,
          { conversationId: a, sharedConversationId: o, hostId: r, state: t, onClose: () => m.abort() },
          {
            blocksOtherModals:
              t.kind === `error` || (t.kind === `ready` && t.result.request.mode !== `fullscreen`),
          },
        );
    },
    E;
  T({ kind: `loading`, nonModal: !0 });
  let D = e.watch((t) => {
    t.get(j) !== p || t.get(u) !== f ? (m.abort(), v(e, z)) : h(t, z) || m.abort();
  });
  y.addEventListener(`abort`, D, { once: !0 });
  async function O() {
    let t =
      o == null
        ? await w.safeGet(`/conversation/{conversation_id}`, {
            parameters: { path: { conversation_id: a } },
            additionalHeaders: { "ChatGPT-Account-ID": p },
            signal: y,
          })
        : await w.safeGet(`/share/{shared_conversation_id}`, {
            parameters: { path: { shared_conversation_id: o } },
            additionalHeaders: { "ChatGPT-Account-ID": p },
            signal: y,
          });
    (await e.query.fetch(C), y.throwIfAborted(), k(e, a, t.disabled_tool_ids));
    let n = Object.values(t.mapping).find((e) => e.message?.id === s)?.message,
      i = n == null ? void 0 : g(n, { isActiveTurn: !1, isStreaming: !1 }).find((e) => e.src === c),
      l = _();
    if (
      t.is_temporary_chat ||
      (o == null && t.is_read_only) ||
      b(e, a) ||
      i == null ||
      R(i) == null ||
      !x(e, `1970737597`) ||
      (typeof l == `boolean` ? !l : !x(e, l))
    )
      throw Error(`This image is no longer available for shopping`);
    let u = await F({
      scope: e,
      hostId: r,
      onTracking: (e) => {
        ((E = e), T({ kind: `loading`, nonModal: !0, tracking: E }));
      },
      accountId: p,
      signal: y,
      chatGptConversationId: o == null ? a : null,
      sourceMessageId: s,
      payload: {
        appUri: d,
        mode: `modal`,
        template: `ui://widget/checkout-session.html`,
        toolName: `checkout_session`,
        toolInput: {},
        logging: {
          entityId: c,
          entityType: `product`,
          entrypointLabel: `Shop this design`,
          entrypointType: `button`,
          intentType: `checkout`,
          surface: `image_generation`,
        },
      },
      prepareToolInput: (e) => L({ image: i, sharedConversationId: o, appUri: e, accountId: p, signal: y }),
    });
    T({ kind: `ready`, result: u });
  }
  O().catch((e) => T({ kind: `error`, error: e, tracking: E }));
}
var W;
function G() {
  return (G = e(() => {
    (m(),
      t(),
      A(),
      f(),
      c(),
      T(),
      D(),
      P(),
      O(),
      E(),
      d(),
      I(),
      H(),
      (W = a({
        conversationId: i().min(1),
        sharedConversationId: i().min(1).optional(),
        messageId: i().min(1),
        assetPointer: i().startsWith(`sediment://`),
        appUri: i().regex(/^asdk_app_[A-Za-z0-9_-]+$/),
        userId: i().min(1),
        accountId: i().min(1),
      })));
  }))();
}
G();
export { U as resumeShopThisImage };
//# sourceMappingURL=shop-this-image-resume-3bb0a8872576.js.map
