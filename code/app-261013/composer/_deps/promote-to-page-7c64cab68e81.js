import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $2 as t,
  $jn as n,
  Dor as r,
  OPr as i,
  Oor as a,
  QMr as o,
  Ssn as s,
  XMr as c,
  Ymr as l,
  Z2 as u,
  ehr as d,
  kPr as f,
  o6 as p,
  s6 as m,
  tNr as h,
  wor as g,
  xsn as _,
  yjn as v,
} from "./app-initial-5851df3f6cb1.js";
import { ma as y, pa as b } from "./app-primary-fe8a450b3b04.js";
async function x(
  e,
  { blockId: t, conversationId: i, messageId: d, serverConversationId: m, writingBlock: h },
) {
  let g = e.get(r),
    _ = e.get(c);
  if (g == null || _ == null) return !1;
  let v = a(e, g, _, e.get(o).accountUserId ?? null);
  try {
    if ((await b(e, i), v.signal.throwIfAborted(), !e.get(f, `711121807`) || !e.get(f, `4117608041`)))
      return !1;
    u(e);
    let r = await l.safePost(`/writing-blocks/page`, {
      expectedIdentity: { accountId: g, userId: _ },
      signal: v.signal,
      requestBody: {
        conversation_id: m,
        message_id: d,
        id: t,
        index: String(h.index),
        writing_block: {
          content: h.content,
          id: t,
          index: String(h.index),
          metadata: h.metadata,
          title: h.title ?? p(h.content),
          variant: h.variant,
        },
      },
    });
    return (
      v.signal.throwIfAborted(),
      n({
        scope: e,
        blockId: t,
        conversationId: i,
        messageId: d,
        fallbackWritingBlock: h,
        update: { page_id: r.page_id },
      }),
      await Promise.all([
        s(e),
        e.queryClient.invalidateQueries({ queryKey: [`library-api`, g, _, `browse`] }),
      ]),
      !0
    );
  } finally {
    v.stop();
  }
}
function S() {
  return (S = e(() => {
    (m(), h(), d(), v(), g(), t(), _(), i(), y());
  }))();
}
S();
export { x as promoteWritingBlockToPage };
//# sourceMappingURL=promote-to-page-7c64cab68e81.js.map
