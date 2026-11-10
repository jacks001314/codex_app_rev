const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-956c0c5a8033.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./dialog-5cdea715fc49.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  OFt as n,
  Vrt as r,
  XOt as i,
  kFt as a,
  qrt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { A5n as c, D5n as l, GLn as u, qLn as d, wLr as f, zRr as p } from "./app-initial-ad16eaadf81f.js";
function m(e, t, r) {
  let i = e
    .get(o)
    .success(
      r
        ? (0, h.jsx)(s, {
            id: `chatgptConversations.share.workspaceLinkCopied`,
            defaultMessage: `Link copied to your clipboard`,
            description: `Success toast after copying a conversation link restricted to workspace members`,
          })
        : (0, h.jsx)(s, {
            id: `chatgptConversations.share.publicLinkCopied`,
            defaultMessage: `Public link copied`,
            description: `Success toast after publishing and copying a public conversation link`,
          }),
      {
        id: `chatgpt-conversation-share-copied`,
        actionPlacement: `inline`,
        variant: `chatgptSuccess`,
        duration: 5,
        position: `top-center-content`,
        description: r
          ? (0, h.jsx)(s, {
              id: `chatgptConversations.share.workspaceAudience`,
              defaultMessage: `Links are visible to workspace members only`,
              description: `Share confirmation explaining that only workspace members can view the copied conversation link`,
            })
          : (0, h.jsx)(s, {
              id: `chatgptConversations.share.publicAudienceWithLearnMore`,
              defaultMessage: `Anyone with the link can view this conversation. <learnMore>Learn more</learnMore>`,
              description: `Share confirmation explaining public access, with a link to the shared links help article`,
              values: {
                learnMore: (e) =>
                  (0, h.jsx)(u, {
                    className: `text-inherit underline`,
                    href: `https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq`,
                    initiator: `open_in_browser_bridge`,
                    children: e,
                  }),
              },
            }),
        primaryAction:
          t == null
            ? void 0
            : {
                label: (0, h.jsx)(s, {
                  id: `chatgptConversations.share.manageLinks`,
                  defaultMessage: `Manage links`,
                  description: `Action in the conversation link copied toast that opens the shared links management dialog`,
                }),
                onClick: async () => {
                  i.close();
                  let { SharedLinksModal: r } = await n(
                    async () => {
                      let { SharedLinksModal: e } = await import(`./dialog-956c0c5a8033.js`);
                      return { SharedLinksModal: e };
                    },
                    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
                    import.meta.url,
                  );
                  e.get(p) === t && c(e, r, { accountId: t });
                },
              },
      },
    );
}
var h;
function g() {
  return (g = e(() => {
    (i(), f(), d(), l(), r(), (h = t()), a());
  }))();
}
g();
export { m as showConversationShareCopiedToast };
//# sourceMappingURL=chatgpt-conversation-share-toast-5023ff554fb6.js.map
