import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A8 as t,
  BRr as n,
  CFn as r,
  S3 as i,
  VPn as a,
  VRr as o,
  _ur as s,
  b3 as c,
  gdn as l,
  gur as u,
  hdn as d,
  iRr as f,
  k8 as p,
  lBr as m,
  pur as h,
  tyr as g,
  uBr as _,
  wLr as v,
} from "./app-initial-ad16eaadf81f.js";
import { Ca as y, wa as b } from "./app-primary-3e00728c2a4c.js";
async function x(
  e,
  { blockId: t, conversationId: i, messageId: a, serverConversationId: d, writingBlock: m },
) {
  let h = e.get(u),
    g = e.get(n);
  if (h == null || g == null) return !1;
  let v = s(e, h, g, e.get(o).accountUserId ?? null);
  try {
    if ((await y(e, i), v.signal.throwIfAborted(), !e.get(_, `711121807`) || !e.get(_, `4117608041`)))
      return !1;
    c(e);
    let n = await f.safePost(`/writing-blocks/page`, {
      expectedIdentity: { accountId: h, userId: g },
      signal: v.signal,
      requestBody: {
        conversation_id: d,
        message_id: a,
        id: t,
        index: String(m.index),
        writing_block: {
          content: m.content,
          id: t,
          index: String(m.index),
          metadata: m.metadata,
          title: m.title ?? p(m.content),
          variant: m.variant,
        },
      },
    });
    return (
      v.signal.throwIfAborted(),
      r({
        scope: e,
        blockId: t,
        conversationId: i,
        messageId: a,
        fallbackWritingBlock: m,
        update: { page_id: n.page_id },
      }),
      await Promise.all([
        l(e),
        e.queryClient.invalidateQueries({ queryKey: [`library-api`, h, g, `browse`] }),
      ]),
      !0
    );
  } finally {
    v.stop();
  }
}
function S() {
  return (S = e(() => {
    (t(), v(), g(), a(), h(), i(), d(), m(), b());
  }))();
}
S();
export { x as promoteWritingBlockToPage };
//# sourceMappingURL=promote-to-page-ea682059b81a.js.map
