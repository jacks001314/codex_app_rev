import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  HFt as n,
  NLt as r,
  ORt as i,
  Qst as a,
  SCt as o,
  VRt as s,
  ZSt as c,
  hRt as l,
  kRt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as d,
  CMr as f,
  IWn as p,
  VPn as m,
  VRr as h,
  f0n as g,
  m$n as _,
  n0n as v,
  p$n as y,
  wLr as b,
  xMr as x,
  y$n as S,
  yMr as C,
  zHn as w,
} from "./app-initial-ad16eaadf81f.js";
function T(e, { conversationId: t, messageId: n, assetPointer: r, element: i, isCurrentImage: a }) {
  return D(e, { element: i, isCurrentImage: a }, (e) => {
    let i = e(h).authenticatedAccountId,
      a = e(d, t),
      o = e(v, t)?.[n]?.message,
      s = e(g, t),
      c = O(o, r);
    if (i && a && s == null && c) return { accountId: i, conversationId: a, messageId: n, ...c };
  });
}
function E(e, { result: t, element: n, isCurrentImage: r }) {
  return D(e, { element: n, isCurrentImage: r }, () => t);
}
function D(e, { element: t, isCurrentImage: n }, r) {
  let i = t.ownerDocument,
    a = !1,
    o,
    s,
    c = () => {
      if (
        a ||
        i.visibilityState !== `visible` ||
        !t.isConnected ||
        !t.complete ||
        t.naturalWidth === 0 ||
        !n() ||
        s == null
      )
        return;
      let r = e.get(h);
      if (
        r.authLoading ||
        r.authMethod !== `chatgpt` ||
        !r.userId ||
        r.authenticatedAccountId !== s.accountId
      )
        return;
      let { conversationId: o, messageId: c, asyncCompletionId: u, isDelayed: d } = s,
        f = JSON.stringify([r.userId, r.authenticatedAccountId, u == null ? `message` : `async`, u ?? c]),
        p = e.get(k, o)[f];
      if (p === `viewed`) {
        l();
        return;
      }
      p !== `pending` &&
        (e.set(k, o, (e) => ({ ...e, [f]: `pending` })),
        x(e, w, { conversationId: o, messageId: c, asyncCompletionId: u, isDelayed: d }, (t) => {
          (e.set(k, o, (e) => {
            if (t.status === `sent`) return { ...e, [f]: `viewed` };
            let n = { ...e };
            return (delete n[f], n);
          }),
            t.status === `sent` && l());
        }));
    };
  function l() {
    ((a = !0), o?.(), i.removeEventListener(`visibilitychange`, c), t.removeEventListener(`load`, c));
  }
  return (
    i.addEventListener(`visibilitychange`, c),
    t.addEventListener(`load`, c),
    (o = e.watch(({ get: e }) => {
      (e(h), e(f), (s = r(e)), c());
    })),
    a && o(),
    l
  );
}
function O(e, t) {
  if (
    e?.author.role !== `tool` ||
    !S(e.author.name) ||
    e.content.content_type !== `multimodal_text` ||
    e.metadata?.is_visually_hidden_from_conversation
  )
    return;
  let n = e.metadata?.image_gen_delayed;
  if (n != null && !_(e)) return;
  let r = A.safeParse(e.metadata).data?.async_completion_id ?? void 0;
  if (
    e.content.parts.some((e) => {
      let n = j.safeParse(e);
      return (
        n.success &&
        n.data.asset_pointer === t &&
        !n.data.metadata.is_no_auth_placeholder &&
        n.data.metadata.generation.height >= n.data.height
      );
    })
  )
    return { asyncCompletionId: r, isDelayed: n != null };
}
var k, A, j;
function M() {
  return (M = e(() => {
    (p(),
      c(),
      n(),
      b(),
      C(),
      t(),
      m(),
      y(),
      (k = o(a, (e) => ({}))),
      (A = u({ async_completion_id: s().nullish() })),
      (j = u({
        content_type: l(`image_asset_pointer`),
        asset_pointer: s(),
        height: i(),
        metadata: u({ generation: u({ height: i() }), is_no_auth_placeholder: r().nullish() }),
      })));
  }))();
}
export { T as n, E as r, M as t };
//# sourceMappingURL=image-result-viewed-78a76a94ce71.js.map
