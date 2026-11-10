import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, ZSt as r, nCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { R0n as a, VPn as o, n0n as s, z0n as c } from "./app-initial-ad16eaadf81f.js";
import { r as l, t as u } from "./quick-chat-writing-block-adapter-5b8731f75f65.js";
function d(e) {
  let t = (0, f.c)(7),
    { state: n, sourceMessageId: r, turnContext: a } = e,
    o = i(s, a.conversationId),
    l = r ?? a.messageId,
    d;
  if (t[0] !== o || t[1] !== l || t[2] !== r || t[3] !== n.email || t[4] !== n.message || t[5] !== a) {
    let e = c(l == null ? void 0 : o?.[l]?.message?.metadata),
      i = [
        { block: n.email, index: 0, variant: `email`, subject: n.email.subject },
        { block: n.message, index: 1, variant: `chat_message`, subject: void 0 },
      ];
    ((d = (0, p.jsx)(p.Fragment, {
      children: i.map((t) => {
        let { block: n, index: i, variant: o, subject: s } = t;
        return Object.hasOwn(e, n.id)
          ? (0, p.jsx)(
              u,
              {
                id: n.id,
                directive: {
                  id: n.id,
                  bodyContent: n.content,
                  content: n.content,
                  emailMetadata: { bcc: void 0, cc: void 0, recipient: void 0, subject: s },
                  metadata: void 0,
                  title: void 0,
                  toneSections: null,
                  variant: o,
                },
                index: i,
                isLastNodeInMessage: i === 1,
                readOnly: !0,
                sourceMessageId: r,
                turnContext: a,
              },
              n.id,
            )
          : null;
      }),
    })),
      (t[0] = o),
      (t[1] = l),
      (t[2] = r),
      (t[3] = n.email),
      (t[4] = n.message),
      (t[5] = a),
      (t[6] = d));
  } else d = t[6];
  return d;
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = n()), a(), r(), l(), o(), (p = t()));
  }))();
}
m();
export { d as RestrictedOnboardingWritingDrafts };
//# sourceMappingURL=saved-drafts-66dabbfdc86e.js.map
