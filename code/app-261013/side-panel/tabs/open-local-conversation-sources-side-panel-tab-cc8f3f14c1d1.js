const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./local-conversation-sources-side-panel-tab-a3c969879cce.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./thread-summary-panel-components-7e14b3bbe8fe.js",
      "./bullet-separator-9aa986eaf7a4.js",
      "./summary-panel-expandable-list-7e5eade158bb.js",
      "./thread-summary-panel-components-c162310c9992.css",
      "./local-conversation-webmcp-tools-model-a5b27ecc68d1.js",
      "./webmcp-tool-calls-ca5a1d70fd15.js",
      "./mcp-tool-item-content-12f3ac06395e.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./resource-5df84eaadd7b.js",
      "./widget-ea192a210472.js",
      "./mcp-app-host-styles-55af4a679ef7.js",
      "./mcp-sandbox-rpc-ca8003ff80ff.js",
      "./sandbox-origin-6479c97e7d45.js",
      "./mcp-app-follow-up-message-6745dc3197d3.js",
      "./widget-follow-up-request-a0e70ac59eed.js",
      "./mcp-app-follow-up-confirmation-dialog-4d62a209cf2f.js",
      "./mcp-sandbox-element-10552eb147d8.js",
      "./observe-layout-motion-cdda8b68cb96.js",
      "./message-submission-43662f2770ed.js",
      "./new-thread-toast-d8f4508f3402.js",
      "./back-forward-navigation-buttons-93aa83d145f3.js",
      "./viewer-header-6e3f79044bac.js",
      "./inline-height-de22080375ee.js",
      "./widget-e4bfe9e3f201.css",
      "./open-button-966628744c22.js",
      "./mcp-tool-activity-label-220d2d98d4ad.js",
      "./generated-image-context-menu-c17f000c3733.js",
      "./copy-generated-image-to-clipboard-bbf8cd2a0fd7.js",
      "./navigation-source-616199fd6291.js",
      "./conversation-gap-f75c434d4ee7.js",
      "./display-3cc835c1813c.js",
      "./cloud-automation-actions-3a594ba7517b.js",
      "./automation-delete-confirmation-dialog-c8c0c59ec586.js",
      "./use-measured-element-height-8385c1491b39.js",
      "./timeline-activity-body-20adff28ef8e.js",
      "./mcp-tool-call-approval-2041ceff5519.js",
      "./computer-use-native-app-metadata-2ef89a9c1d5a.js",
      "./automatic-approval-review-details-d0acb2472248.js",
      "./use-local-conversation-sources-5dbb8ee22e75.js",
      "./local-conversation-summary-panel-sources-model-a2fb0c4f9590.js",
      "./mcp-app-analytics-7a30d3890ba8.js",
      "./registered-sources-280588e1d06a.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Mz as n,
  Nz as r,
  Sf as i,
  fPt as a,
  pPt as o,
  xMt as s,
  xf as c,
  z4 as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ifr as u,
  Lfr as d,
  Mwn as f,
  dwn as p,
  dxn as m,
  jwn as h,
  pwn as g,
  uxn as _,
} from "./app-initial-5851df3f6cb1.js";
function v({ open: e }) {
  return f(u.SOURCES, b, {
    dropDestinations: [`left`, `right`, `bottom`],
    getId: () => u.SOURCES,
    isAvailable: (e) => e.value.routeKind === `local-thread`,
    open: e,
    renderThumbnail: (e, t) =>
      (0, y.jsx)(x, { conversationId: e.conversationId, hostId: e.hostId, title: t.title }),
  });
}
var y, b, x;
function S() {
  return (S = e(() => {
    (h(),
      l(),
      d(),
      (y = s()),
      o(),
      (b = t(
        async () => {
          let { LocalConversationSourcesSidePanelTab: e } = await a(
            async () => {
              let { LocalConversationSourcesSidePanelTab: e } = await import(
                `./local-conversation-sources-side-panel-tab-a3c969879cce.js`
              );
              return { LocalConversationSourcesSidePanelTab: e };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
            ]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0 },
      )),
      (x = t(
        async () => {
          let { RegisteredLocalSourcesThumbnail: e } = await a(
            async () => {
              let { RegisteredLocalSourcesThumbnail: e } = await import(
                `./registered-sources-280588e1d06a.js`
              );
              return { RegisteredLocalSourcesThumbnail: e };
            },
            __vite__mapDeps([48, 1, 2, 3, 4, 5, 10, 11, 46, 32, 47]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0 },
      )));
  }))();
}
function C(e, t, r, a, o, s) {
  let c = _(e, u.SOURCES) ?? (o == null ? null : _(e, o)) ?? `right`;
  g(e, t, {
    revealAndFocus: !0,
    icon: (0, w.jsx)(n, { className: `shrink-0`, "aria-hidden": !1, asset: i }),
    id: u.SOURCES,
    kind: u.SOURCES,
    openerTabId: o,
    props: r,
    target: c,
    title: a,
    trailingContent: s,
  });
}
var w;
function T() {
  return (T = e(() => {
    (c(), p(), r(), m(), d(), (w = s()));
  }))();
}
function E(e, t, n, r) {
  C(e, D, t, n, r);
}
var D;
function O() {
  return (O = e(() => {
    (S(), T(), (D = v({ open: E })));
  }))();
}
export { E as n, O as t };
//# sourceMappingURL=open-local-conversation-sources-side-panel-tab-cc8f3f14c1d1.js.map
