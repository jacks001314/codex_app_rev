import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { frt as t, hrt as n, yMt as r } from "./app-shared-bbfeca5e5737.js";
import {
  $An as i,
  FAn as a,
  GAn as o,
  GMr as s,
  HUn as c,
  KAn as l,
  Oer as u,
  Ojn as d,
  QAn as f,
  QDr as p,
  QQn as m,
  S$n as h,
  SAn as g,
  UAn as _,
  UUn as v,
  WAn as y,
  XDr as b,
  Ymr as x,
  e$n as S,
  ehr as C,
  jjn as w,
  y$n as T,
  yjn as E,
} from "./app-initial-5851df3f6cb1.js";
async function D(e, t, n) {
  if (e.get(c, t)?.complete === !0) return;
  let r = e.get(s),
    i = o(e, t, n);
  (i.assertRequestCurrent(),
    await e.queryClient.fetchQuery({
      queryKey: [`chatgpt-conversation-full`, i.expectedIdentity?.accountId ?? r, t],
      staleTime: 0,
      retry: !1,
      queryFn: async ({ signal: a }) => {
        let o = await _(e, t, { forceFull: !0, signal: n == null ? a : AbortSignal.any([n, a]) });
        return (
          i.assertRequestCurrent(),
          !n?.aborted &&
            e.get(s) === r &&
            ((0, A.flushSync)(() => w(e, o, { mergeActiveBranch: !0, preserveAsyncStatus: !0 })),
            e.query.setData(g, t, o)),
          o
        );
      },
    }));
}
async function O(e, t, r) {
  let a = e.get(c, t);
  if (a == null || a.complete || a.isLoading || a.cursor == null || a.oldestMessageId == null) return;
  let { cursor: l, oldestMessageId: u } = a,
    f = e.get(s),
    h = o(e, t),
    v = { ...a, isLoading: !0, hasError: !1 },
    b = () => {
      let n = e.get(c, t);
      return e.get(s) === f && n != null && !n.complete && n.cursor === l && n.oldestMessageId === u;
    };
  try {
    (h.assertRequestCurrent(), e.set(c, t, v));
    let o = new Set(),
      s = l,
      _ = async () => {
        o.add(s);
        let r = await e.queryClient.fetchQuery({
          queryKey: [`chatgpt-conversation-page`, h.expectedIdentity?.accountId ?? f, t, s],
          staleTime: 0,
          retry: (e, t) =>
            e < 1 && t.name !== `AbortError` && !k(t) && !(t instanceof n && t.responseStatus === 429),
          queryFn: ({ signal: n }) =>
            i(e, `page`, n, () =>
              x
                .safeGet(`/conversations/{conversation_id}/messages`, {
                  ...h,
                  retry: `except-rate-limit`,
                  parameters: {
                    path: { conversation_id: t },
                    query: { before: s, num_turns: a.numTurns, include_has_versions: !0 },
                  },
                  additionalHeaders: { ...y(e, t), ...h.additionalHeaders },
                  signal: n,
                })
                .finally(() => {
                  (n.throwIfAborted(), h.assertRequestCurrent());
                }),
            ),
        });
        return (
          h.assertRequestCurrent(),
          p(e, T, {
            conversationId: t,
            messageCount: r.messages.length,
            hasMoreMessages: r.page_info.has_previous_page,
          }),
          r
        );
      },
      S = await _(),
      C = S.page_info.has_previous_page ? (S.page_info.start_cursor ?? null) : null;
    for (; S.messages.length === 0 && C != null;) {
      if (!b()) return;
      if (o.has(C)) throw Error(`Conversation pagination cursor did not advance`);
      s = C;
      let e = await _();
      ((S = {
        ...e,
        safe_urls: [...(S.safe_urls ?? []), ...(e.safe_urls ?? [])],
        blocked_urls: [...(S.blocked_urls ?? []), ...(e.blocked_urls ?? [])],
      }),
        (C = S.page_info.has_previous_page ? (S.page_info.start_cursor ?? null) : null));
    }
    if (!b()) return;
    if (C != null && o.has(C)) throw Error(`Conversation pagination cursor did not advance`);
    (h.assertRequestCurrent(),
      r(() => {
        let n = d(e, m(t), S.messages, u);
        e.set(c, t, {
          ...a,
          cursor: C,
          oldestMessageId: n,
          isLoading: !1,
          hasError: !1,
          hasLoadedOlderPages: !0,
        });
      }),
      e.query.setData(g, t, (e) =>
        e == null
          ? e
          : {
              ...e,
              safe_urls: [...new Set([...(e.safe_urls ?? []), ...(S.safe_urls ?? [])])],
              blocked_urls: [...new Set([...(e.blocked_urls ?? []), ...(S.blocked_urls ?? [])])],
            },
      ));
  } catch (n) {
    if ((n instanceof Error && n.name === `AbortError`) || !b()) return;
    if (k(n))
      try {
        let n = await _(e, t);
        if ((h.assertRequestCurrent(), !b())) return;
        r(() => {
          (e.set(c, t, { ...a, isLoading: !1, hasLoadedOlderPages: !1 }),
            w(e, n, { preserveAsyncStatus: !0 }));
        });
        return;
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
      }
    b() && e.set(c, t, { ...a, isLoading: !1, hasError: !0 });
  } finally {
    e.get(c, t) === v && e.set(c, t, { ...v, isLoading: !1 });
  }
}
function k(e) {
  return e instanceof n && e.responseStatus === 400 && e.errorCode === `invalid_cursor`;
}
var A;
function j() {
  return (j = e(() => {
    (h(), (A = r()), u(), b(), t(), a(), C(), S(), E(), f(), l(), v());
  }))();
}
export { j as n, O as r, D as t };
//# sourceMappingURL=controller-5717fd004098.js.map
