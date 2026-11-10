import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  Jbt as n,
  TLt as r,
  pLt as i,
  rst as a,
  vzt as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  AOn as c,
  DOn as l,
  DPr as u,
  FAn as d,
  G4n as f,
  GMr as p,
  J4n as m,
  K4n as h,
  OPr as g,
  SG as _,
  U4n as v,
  XMr as y,
  Ymr as b,
  aXn as x,
  ehr as S,
  iXn as C,
  jDr as w,
  jOn as T,
  kOn as E,
  lJn as D,
  sJn as O,
  tNr as k,
  wOn as A,
  xG as j,
} from "./app-initial-5851df3f6cb1.js";
import { i as M, n as N } from "./chatgpt-ecosystem-widget-86361a1e1747.js";
import { n as P, r as F } from "./chatgpt-ecosystem-widget-launch-2a2c56ed75ca.js";
import { n as I, r as L, t as R } from "./shop-this-image-input-e831e66662e6.js";
function z(e) {
  let t = (0, B.c)(13),
    { conversationId: r, sharedConversationId: i, hostId: a, state: o, onClose: s } = e,
    c;
  t[0] !== r || t[1] !== i
    ? ((c =
        i == null
          ? {
              routeKind: `chatgpt-thread`,
              conversationId: r,
              pathname: `/c/${r}`,
              routeTemplate: `/c/:conversationId`,
            }
          : { routeKind: `other`, pathname: `/share/${i}`, routeTemplate: `/share/:sharedConversationId` }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === r ? (l = t[4]) : ((l = n(r)), (t[3] = r), (t[4] = l));
  let u;
  t[5] !== a || t[6] !== s || t[7] !== o || t[8] !== l
    ? ((u = (0, V.jsx)(N, { conversationId: l, hostId: a, state: o, onClose: s })),
      (t[5] = a),
      (t[6] = s),
      (t[7] = o),
      (t[8] = l),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== c || t[11] !== u
      ? ((d = (0, V.jsx)(j, { route: c, children: u })), (t[10] = c), (t[11] = u), (t[12] = d))
      : (d = t[12]),
    d
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = o()), a(), _(), M(), (V = s()));
  }))();
}
function U(e, t, n, r) {
  let i = W.safeParse(t);
  if (
    !i.success ||
    (n != null && n !== i.data.accountId) ||
    i.data.accountId !== e.get(p) ||
    i.data.userId !== e.get(y) ||
    !T()
  )
    return;
  let {
      conversationId: a,
      sharedConversationId: o,
      messageId: s,
      assetPointer: c,
      appUri: d,
      userId: f,
      accountId: g,
    } = i.data,
    _ = new AbortController(),
    { signal: S } = _,
    C = (t) => {
      S.aborted ||
        m(e, z, {
          conversationId: a,
          sharedConversationId: o,
          hostId: r,
          state: t,
          onClose: () => _.abort(),
        });
    },
    D;
  C({ kind: `loading` });
  let k = e.watch((t) => {
    t.get(p) !== g || t.get(y) !== f ? (_.abort(), v(e, z)) : h(t, z) || _.abort();
  });
  S.addEventListener(`abort`, k, { once: !0 });
  async function A() {
    let t =
      o == null
        ? await b.safeGet(`/conversation/{conversation_id}`, {
            parameters: { path: { conversation_id: a } },
            additionalHeaders: { "ChatGPT-Account-ID": g },
            signal: S,
          })
        : await b.safeGet(`/share/{shared_conversation_id}`, {
            parameters: { path: { shared_conversation_id: o } },
            additionalHeaders: { "ChatGPT-Account-ID": g },
            signal: S,
          });
    (await e.query.fetch(w), S.throwIfAborted(), x(e, a, t.disabled_tool_ids));
    let n = Object.values(t.mapping).find((e) => e.message?.id === s)?.message,
      i = n == null ? void 0 : O(n, { isActiveTurn: !1, isStreaming: !1 }).find((e) => e.src === c),
      f = E();
    if (
      t.is_temporary_chat ||
      (o == null && t.is_read_only) ||
      l(e, a) ||
      i == null ||
      R(i) == null ||
      !u(e, `1970737597`) ||
      (typeof f == `boolean` ? !f : !u(e, f))
    )
      throw Error(`This image is no longer available for shopping`);
    let p = await F({
      scope: e,
      hostId: r,
      onTracking: (e) => {
        ((D = e), C({ kind: `loading`, tracking: D }));
      },
      accountId: g,
      signal: S,
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
      prepareToolInput: (e) => L({ image: i, sharedConversationId: o, appUri: e, accountId: g, signal: S }),
    });
    C({ kind: `ready`, result: p });
  }
  A().catch((e) => C({ kind: `error`, error: e, tracking: D }));
}
var W;
function G() {
  return (G = e(() => {
    (D(),
      t(),
      k(),
      f(),
      c(),
      g(),
      d(),
      P(),
      S(),
      A(),
      C(),
      I(),
      H(),
      (W = i({
        conversationId: r().min(1),
        sharedConversationId: r().min(1).optional(),
        messageId: r().min(1),
        assetPointer: r().startsWith(`sediment://`),
        appUri: r().regex(/^asdk_app_[A-Za-z0-9_-]+$/),
        userId: r().min(1),
        accountId: r().min(1),
      })));
  }))();
}
G();
export { U as resumeShopThisImage };
//# sourceMappingURL=shop-this-image-resume-4791fc739bcb.js.map
