import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FNt as t, Oit as n, jit as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  Brr as i,
  E2n as a,
  O2n as o,
  VPn as s,
  WNn as c,
  X2n as l,
  ZPn as u,
  aqn as d,
  bPn as f,
  dPn as p,
  fPn as m,
  iRr as h,
  mPn as g,
  oqn as _,
  pPn as v,
  q2n as y,
  rPn as b,
  tFn as x,
  tyr as S,
  xMr as C,
  xPn as w,
  yMr as T,
  zRr as E,
} from "./app-initial-ad16eaadf81f.js";
async function D(e, t, n) {
  if (e.get(d, t)?.complete === !0) return;
  let r = e.get(E),
    i = v(e, t, n);
  (i.assertRequestCurrent(),
    await e.queryClient.fetchQuery({
      queryKey: [`chatgpt-conversation-full`, i.expectedIdentity?.accountId ?? r, t],
      staleTime: 0,
      retry: !1,
      queryFn: async ({ signal: a }) => {
        let o = await p(e, t, { forceFull: !0, signal: n == null ? a : AbortSignal.any([n, a]) });
        return (
          i.assertRequestCurrent(),
          !n?.aborted &&
            e.get(E) === r &&
            ((0, A.flushSync)(() => x(e, o, { mergeActiveBranch: !0, preserveAsyncStatus: !0 })),
            e.query.setData(c, t, o)),
          o
        );
      },
    }));
}
async function O(e, t, n) {
  let i = e.get(d, t);
  if (i == null || i.complete || i.isLoading || i.cursor == null || i.oldestMessageId == null) return;
  let { cursor: o, oldestMessageId: s } = i,
    l = e.get(E),
    f = v(e, t),
    g = { ...i, isLoading: !0, hasError: !1 },
    _ = () => {
      let n = e.get(d, t);
      return e.get(E) === l && n != null && !n.complete && n.cursor === o && n.oldestMessageId === s;
    };
  try {
    (f.assertRequestCurrent(), e.set(d, t, g));
    let p = new Set(),
      v = o,
      b = async () => {
        p.add(v);
        let n = await e.queryClient.fetchQuery({
          queryKey: [`chatgpt-conversation-page`, f.expectedIdentity?.accountId ?? l, t, v],
          staleTime: 0,
          retry: (e, t) =>
            e < 1 && t.name !== `AbortError` && !k(t) && !(t instanceof r && t.responseStatus === 429),
          queryFn: ({ signal: n }) =>
            w(e, `page`, n, () =>
              h
                .safeGet(`/conversations/{conversation_id}/messages`, {
                  ...f,
                  retry: `except-rate-limit`,
                  parameters: {
                    path: { conversation_id: t },
                    query: { before: v, num_turns: i.numTurns, include_has_versions: !0 },
                  },
                  additionalHeaders: { ...m(e, t), ...f.additionalHeaders },
                  signal: n,
                })
                .finally(() => {
                  (n.throwIfAborted(), f.assertRequestCurrent());
                }),
            ),
        });
        return (
          f.assertRequestCurrent(),
          C(e, y, {
            conversationId: t,
            messageCount: n.messages.length,
            hasMoreMessages: n.page_info.has_previous_page,
          }),
          n
        );
      },
      x = await b(),
      S = x.page_info.has_previous_page ? (x.page_info.start_cursor ?? null) : null;
    for (; x.messages.length === 0 && S != null;) {
      if (!_()) return;
      if (p.has(S)) throw Error(`Conversation pagination cursor did not advance`);
      v = S;
      let e = await b();
      ((x = {
        ...e,
        safe_urls: [...(x.safe_urls ?? []), ...(e.safe_urls ?? [])],
        blocked_urls: [...(x.blocked_urls ?? []), ...(e.blocked_urls ?? [])],
      }),
        (S = x.page_info.has_previous_page ? (x.page_info.start_cursor ?? null) : null));
    }
    if (!_()) return;
    if (S != null && p.has(S)) throw Error(`Conversation pagination cursor did not advance`);
    (f.assertRequestCurrent(),
      n(() => {
        let n = u(e, a(t), x.messages, s);
        e.set(d, t, {
          ...i,
          cursor: S,
          oldestMessageId: n,
          isLoading: !1,
          hasError: !1,
          hasLoadedOlderPages: !0,
        });
      }),
      e.query.setData(c, t, (e) =>
        e == null
          ? e
          : {
              ...e,
              safe_urls: [...new Set([...(e.safe_urls ?? []), ...(x.safe_urls ?? [])])],
              blocked_urls: [...new Set([...(e.blocked_urls ?? []), ...(x.blocked_urls ?? [])])],
            },
      ));
  } catch (r) {
    if ((r instanceof Error && r.name === `AbortError`) || !_()) return;
    if (k(r))
      try {
        let r = await p(e, t);
        if ((f.assertRequestCurrent(), !_())) return;
        n(() => {
          (e.set(d, t, { ...i, isLoading: !1, hasLoadedOlderPages: !1 }),
            x(e, r, { preserveAsyncStatus: !0 }));
        });
        return;
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
      }
    _() && e.set(d, t, { ...i, isLoading: !1, hasError: !0 });
  } finally {
    e.get(d, t) === g && e.set(d, t, { ...g, isLoading: !1 });
  }
}
function k(e) {
  return e instanceof r && e.responseStatus === 400 && e.errorCode === `invalid_cursor`;
}
var A;
function j() {
  return (j = e(() => {
    (l(), (A = t()), i(), T(), n(), b(), S(), o(), s(), f(), g(), _());
  }))();
}
export { j as n, O as r, D as t };
//# sourceMappingURL=controller-9c3c81f9854c.js.map
