const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./inline-impl-2d9e799b2f2d.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./execution-policy-status-30311e210db4.js",
      "./code-execution-account-policy-dfe8d762999e.js",
      "./visualization-sandbox-config-193a3a874c91.js",
      "./visualization-directive-renderer-b4ccc1360170.js",
      "./mcp-sandbox-rpc-ca8003ff80ff.js",
      "./open-appgen-share-dialog-8d437cfd3c67.js",
      "./sites-share-query-8b03740b1df6.js",
      "./mcp-app-follow-up-message-6745dc3197d3.js",
      "./widget-follow-up-request-a0e70ac59eed.js",
      "./mcp-app-follow-up-confirmation-dialog-4d62a209cf2f.js",
      "./mcp-sandbox-element-10552eb147d8.js",
      "./protocol-732738b49eb3.js",
      "./navigation-e563145573d8.js",
      "./state-55dfdbd546ff.js",
      "./publication-a57abcd6565c.js",
      "./visualization-theme-bedd32a367a0.js",
      "./visualization-sandbox-runtime-95a625b0fe0d.js",
      "./visualization-sandbox-broker-7c13a568fb4f.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { B4 as t, fPt as n, pPt as r, xMt as i, z4 as a } from "./app-shared-bbfeca5e5737.js";
import { No as o, Po as s } from "./app-initial-5851df3f6cb1.js";
var c, l;
function u() {
  return (u = e(() => {
    (a(),
      s(),
      (c = i()),
      r(),
      (l = t(
        async () =>
          (
            await n(
              async () => {
                let { InlineAppBlock: e } = await import(`./inline-impl-2d9e799b2f2d.js`);
                return { InlineAppBlock: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
              ]),
              import.meta.url,
            )
          ).InlineAppBlock,
        { errorFallback: (0, c.jsx)(o, {}) },
      )));
  }))();
}
export { u as n, l as t };
//# sourceMappingURL=inline-1d98feb8d7b7.js.map
