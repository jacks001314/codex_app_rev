const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-96d101373ddd.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./dialog-7ca11e3d5620.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  fPt as n,
  hot as r,
  jDt as i,
  lot as a,
  pPt as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
import { G4n as c, GMr as l, J4n as u, tNr as d, xPn as f, yPn as p } from "./app-initial-5851df3f6cb1.js";
function m(e, i, a) {
  let o = e
    .get(r)
    .success(
      a
        ? (0, h.jsx)(t, {
            id: `chatgptConversations.share.workspaceLinkCopied`,
            defaultMessage: `Link copied to your clipboard`,
            description: `Success toast after copying a conversation link restricted to workspace members`,
          })
        : (0, h.jsx)(t, {
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
        description: a
          ? (0, h.jsx)(t, {
              id: `chatgptConversations.share.workspaceAudience`,
              defaultMessage: `Links are visible to workspace members only`,
              description: `Share confirmation explaining that only workspace members can view the copied conversation link`,
            })
          : (0, h.jsx)(t, {
              id: `chatgptConversations.share.publicAudienceWithLearnMore`,
              defaultMessage: `Anyone with the link can view this conversation. <learnMore>Learn more</learnMore>`,
              description: `Share confirmation explaining public access, with a link to the shared links help article`,
              values: {
                learnMore: (e) =>
                  (0, h.jsx)(p, {
                    className: `text-inherit underline`,
                    href: `https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq`,
                    initiator: `open_in_browser_bridge`,
                    children: e,
                  }),
              },
            }),
        primaryAction:
          i == null
            ? void 0
            : {
                label: (0, h.jsx)(t, {
                  id: `chatgptConversations.share.manageLinks`,
                  defaultMessage: `Manage links`,
                  description: `Action in the conversation link copied toast that opens the shared links management dialog`,
                }),
                onClick: async () => {
                  o.close();
                  let { SharedLinksModal: t } = await n(
                    async () => {
                      let { SharedLinksModal: e } = await import(`./dialog-96d101373ddd.js`);
                      return { SharedLinksModal: e };
                    },
                    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
                    import.meta.url,
                  );
                  e.get(l) === i && u(e, t, { accountId: i });
                },
              },
      },
    );
}
var h;
function g() {
  return (g = e(() => {
    (i(), d(), f(), c(), a(), (h = s()), o());
  }))();
}
g();
export { m as showConversationShareCopiedToast };
//# sourceMappingURL=chatgpt-conversation-share-toast-5189281954bb.js.map
