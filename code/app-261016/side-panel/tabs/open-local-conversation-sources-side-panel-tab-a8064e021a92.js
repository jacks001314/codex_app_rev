const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./local-conversation-sources-side-panel-tab-3ae42394bf07.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./thread-summary-panel-components-10c7926d4688.js",
      "./bullet-separator-fdae8fc4d5e0.js",
      "./summary-panel-expandable-list-9f195a77e973.js",
      "./thread-summary-panel-components-c162310c9992.css",
      "./local-conversation-webmcp-tools-model-dcbfecb89837.js",
      "./webmcp-tool-calls-2815582d91b4.js",
      "./mcp-tool-item-content-ebb3be978329.js",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./resource-88825e0ab028.js",
      "./widget-99db50d86406.js",
      "./mcp-app-host-styles-feb07f83d29c.js",
      "./mcp-sandbox-rpc-251a9f57e376.js",
      "./sandbox-origin-aa6844200a73.js",
      "./mcp-server-status-signals-624da44163ce.js",
      "./mcp-app-follow-up-message-1e1ce85efd65.js",
      "./widget-follow-up-request-6dd4483be247.js",
      "./mcp-app-follow-up-confirmation-dialog-74f4e721bdcc.js",
      "./mcp-sandbox-element-e1c5ac2ed0f6.js",
      "./observe-layout-motion-3c80574e2b68.js",
      "./message-submission-67f579a872bc.js",
      "./back-forward-navigation-buttons-fadf9016822e.js",
      "./viewer-header-e24c04d958ef.js",
      "./inline-height-de22080375ee.js",
      "./widget-e4bfe9e3f201.css",
      "./open-button-590e357513e6.js",
      "./mcp-tool-activity-label-1110f61411ea.js",
      "./generated-image-context-menu-f31af82c03a2.js",
      "./copy-generated-image-to-clipboard-5a5ad412650e.js",
      "./navigation-source-8346601e255e.js",
      "./conversation-gap-345d1fbb056a.js",
      "./display-48c3b1cb784f.js",
      "./cloud-automation-actions-9f7b3ed7556e.js",
      "./automation-delete-confirmation-dialog-7c5af9220f0a.js",
      "./use-measured-element-height-da625a6f9bc1.js",
      "./timeline-activity-body-68fa32c758c7.js",
      "./mcp-tool-call-approval-b94fbe680732.js",
      "./computer-use-native-app-metadata-9f2a13208dca.js",
      "./automatic-approval-review-details-8b71aa41c079.js",
      "./use-local-conversation-sources-cbe6d4d0f86c.js",
      "./local-conversation-summary-panel-sources-model-c02f64349e93.js",
      "./mcp-app-analytics-7a30d3890ba8.js",
      "./source-provider-disclosure-97423eacd922.js",
      "./registered-sources-2e2d71ee33fc.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DB as t,
  F3 as n,
  I3 as r,
  LNt as i,
  OB as a,
  OFt as o,
  Qf as s,
  Zf as c,
  kFt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as u,
  Fgr as d,
  MDn as f,
  Pgr as p,
  Swn as m,
  XDn as h,
  ZDn as g,
  xwn as _,
} from "./app-initial-ad16eaadf81f.js";
function v({ open: e }) {
  return g(p.SOURCES, b, {
    dropDestinations: [`left`, `right`, `bottom`],
    getId: () => p.SOURCES,
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
      n(),
      d(),
      (y = i()),
      l(),
      (b = r(
        async () => {
          let { LocalConversationSourcesSidePanelTab: e } = await o(
            async () => {
              let { LocalConversationSourcesSidePanelTab: e } = await import(
                `./local-conversation-sources-side-panel-tab-3ae42394bf07.js`
              );
              return { LocalConversationSourcesSidePanelTab: e };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
            ]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0 },
      )),
      (x = r(
        async () => {
          let { RegisteredLocalSourcesThumbnail: e } = await o(
            async () => {
              let { RegisteredLocalSourcesThumbnail: e } = await import(
                `./registered-sources-2e2d71ee33fc.js`
              );
              return { RegisteredLocalSourcesThumbnail: e };
            },
            __vite__mapDeps([49, 1, 2, 3, 4, 5, 10, 11, 46, 32, 47]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0 },
      )));
  }))();
}
function C(e, n, r, i, a, o) {
  let c = _(e, p.SOURCES) ?? (a == null ? null : _(e, a)) ?? `right`;
  f(e, n, {
    revealAndFocus: !0,
    icon: (0, w.jsx)(t, { className: `shrink-0`, "aria-hidden": !1, asset: s }),
    id: p.SOURCES,
    kind: p.SOURCES,
    openerTabId: a,
    props: r,
    target: c,
    title: i,
    trailingContent: o,
  });
}
var w;
function T() {
  return (T = e(() => {
    (c(), u(), a(), m(), d(), (w = i()));
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
//# sourceMappingURL=open-local-conversation-sources-side-panel-tab-a8064e021a92.js.map
