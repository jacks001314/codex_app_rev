import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  USt as a,
  Zxt as o,
  aSt as s,
  frt as c,
  hot as l,
  hrt as u,
  lot as d,
  nSt as f,
  wot as p,
  zSt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  NDr as h,
  Ymr as g,
  a$n as _,
  aIr as v,
  c$n as y,
  ehr as b,
  iPr as x,
  oIr as S,
  pOr as C,
  sPr as w,
} from "./app-initial-5851df3f6cb1.js";
import { n as T, t as E } from "./chatgpt-memory-source-feedback-2f818b93aa99.js";
async function D(e, t) {
  try {
    if (
      !(
        await g.safeDelete(`/memories/{memory_id}`, {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          parameters: { path: { memory_id: e.trim() } },
        })
      ).success
    )
      throw Error(`Memory deletion failed`);
    return `deleted`;
  } catch (e) {
    if (!O(e)) throw e;
    return `already_deleted`;
  }
}
function O(e) {
  return e instanceof u && (e.status === 404 || _(e)?.toLowerCase() === `memory_not_found`);
}
async function k(e, { accountId: t, conversationId: n, messageId: r, source: i, onDeleteFailed: a }) {
  let o = i.memoryId;
  if (!(o == null || e.get(C) !== t || e.get(j, t).includes(o))) {
    e.set(j, t, (e) => [...e, o]);
    try {
      let a = await D(o, t);
      (await e.query.cancel(A, t),
        e.query.setData(A, t, (e) =>
          e == null ? e : { ...e, memories: e.memories.filter((e) => e.id.trim() !== o) },
        ));
      let s = [
        e.query.invalidate(A, t),
        e.queryClient.invalidateQueries({ queryKey: [`chatgpt-saved-memory-history`, t] }),
      ];
      if (
        n != null &&
        (s.push(
          e.queryClient.invalidateQueries({ queryKey: [`chatgpt-conversation-context-sources`, n, r] }),
        ),
        i.citationUuid != null)
      ) {
        let a = e.get(E, { accountId: t, conversationId: n, messageId: r, citationUuid: i.citationUuid });
        s.push(
          g.safePost(`/sidebar/conversation_context_citation_feedback`, {
            additionalHeaders: { "ChatGPT-Account-ID": t },
            requestBody: {
              citation_uuid: i.citationUuid,
              conversation_id: n,
              deleted: !0,
              feedback: a == null ? (i.feedback ?? null) : a.feedback,
              message_id: r,
            },
          }),
        );
      }
      (Promise.all(s).catch(() => void 0),
        e.get(C) === t &&
          e
            .get(l)
            .success(
              a === `already_deleted`
                ? e
                    .get(S)
                    .formatMessage({
                      id: `chatgptConversations.summaryPanel.sources.memory.delete.alreadyDeleted`,
                      defaultMessage: `Memory already deleted`,
                      description: `Success toast when a memory deleted from Sources was already absent on the server.`,
                    })
                : e
                    .get(S)
                    .formatMessage({
                      id: `chatgptConversations.summaryPanel.sources.memory.delete.success`,
                      defaultMessage: `Memory deleted`,
                      description: `Success toast after an end user permanently deletes a cited saved account memory from the ChatGPT Sources side panel.`,
                    }),
            ));
    } catch {
      e.get(C) === t &&
        (e
          .get(l)
          .danger(
            e
              .get(S)
              .formatMessage({
                id: `chatgptConversations.summaryPanel.sources.memory.delete.failed`,
                defaultMessage: `Failed to forget memory`,
                description: `Error toast when deleting a memory from Sources fails; the saved memories manager opens to let the user manage it there.`,
              }),
            { errorAnalytics: { toastId: `memory_delete_failed` } },
          ),
        a());
    } finally {
      e.set(j, t, (e) => e.filter((e) => e !== o));
    }
  }
}
var A, j, M;
function N() {
  return (N = e(() => {
    (m(),
      i(),
      d(),
      v(),
      p(),
      n(),
      w(),
      c(),
      y(),
      T(),
      b(),
      h(),
      (A = o(t, (e) => ({
        enabled: e != null,
        queryFn:
          e == null
            ? a
            : () =>
                x.safeGet(`/memories`, {
                  additionalHeaders: { "ChatGPT-Account-ID": e },
                  parameters: { query: { include_memory_entries: !0 } },
                }),
        queryKey: [`chatgpt-saved-memories`, e],
        staleTime: r.THIRTY_SECONDS,
        refetchOnMount: !0,
      }))),
      (j = s(t, (e) => [])),
      (M = f(t, ({ accountId: e, memoryId: t }, { get: n }) => {
        if (t == null) return !1;
        let { data: r, isSuccess: i } = n(A, e);
        return n(j, e).includes(t) || (i && !r.memories.some((e) => e.id.trim() === t));
      })));
  }))();
}
export { O as a, N as i, M as n, k as r, A as t };
//# sourceMappingURL=chatgpt-saved-memory-state-4d665a109b5e.js.map
