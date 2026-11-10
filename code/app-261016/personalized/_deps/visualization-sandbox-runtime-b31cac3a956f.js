const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./visualization-sandbox-html-c61b6489e1b9.js",
      "./visualization-sandbox-html-eabbc7bb6cee.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./visualization-sandbox-config-d6a8d5057bf3.js",
      "./dist-15e5c1229202.js",
      "./dist-c49309ceeb35.js",
      "./dist-ad7e2bb8433e.js",
      "./protocol-327656160da5.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, OFt as n, ORt as r, _pt as i, fpt as a, kFt as o } from "./app-shared-2feb3d4c6fcc.js";
import { Po as s, qgr as c } from "./app-initial-ad16eaadf81f.js";
import { n as l, u } from "./visualization-sandbox-config-d6a8d5057bf3.js";
import { a as d } from "./visualization-theme-bedd32a367a0.js";
function f({ locale: e, scopeId: t, scheme: n }) {
  return a({
    environment:
      window.location.hostname === `chatgpt-staging.com` ||
      window.location.hostname.endsWith(`.chatgpt-staging.com`)
        ? `staging`
        : `production`,
    locale: e,
    scheme: n,
    subdomain: `codex-inline-visualization-${c(t)}`,
  });
}
async function* p({
  allowAnnotations: e = !1,
  appBlockMessenger: t,
  treatment: r = !1,
  allowInteractions: i,
  canExpand: a,
  downloadCapability: o,
  document: s,
  documentState: c,
  fragment: u,
  locale: d,
  lockDocumentOverflow: f,
  maxHeight: p,
  maxWidth: m,
  sandboxApi: y,
  signal: b,
  styles: x,
  styleVariables: S,
  widgetId: C = crypto.randomUUID(),
  widgetState: w = null,
  widgetStatePersistence: T = `none`,
}) {
  let E = g(),
    D = s?.csp ?? l,
    O = {
      allowAnnotations: e,
      treatment: r,
      downloadCapability: o,
      initialGlobals: {
        statePersistence: T,
        stateModelContext: T === `none` ? `none` : `untrusted`,
        visualizationStyleVariables: S,
        visualizationTheme: E,
      },
      lockDocumentOverflow: f,
      styles: x,
    },
    k =
      s == null
        ? (
            await n(
              async () => {
                let { getVisualizationSandboxHtml: e } = await import(
                  `./visualization-sandbox-html-c61b6489e1b9.js`
                );
                return { getVisualizationSandboxHtml: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
              import.meta.url,
            )
          ).getVisualizationSandboxHtml(u, O)
        : await s.buildHtml(u, O, d, c);
  if (!b.aborted)
    for await (let e of y.runWidgetCode({
      appBlockMessenger: t,
      csp: D,
      displayMode: `inline`,
      features: [],
      hostHandlesFollowUpMessageAuthorization: !0,
      html: k,
      isFirstParty: !1,
      isSidebarOpen: !1,
      isTombstone: !1,
      maxHeight: p,
      maxWidth: m,
      measureWidth: !1,
      mcpApps: {
        hostCapabilities: i ? { openLinks: {}, message: {}, sandbox: { csp: D } } : { sandbox: { csp: D } },
        hostContext: h(m, d, E, p, a, `inline`),
        hostInfo: { name: `chatgpt` },
      },
      safeArea: _(),
      theme: E,
      toolInput: null,
      toolOutput: null,
      toolResponseMetadata: null,
      userAgent: v(),
      viewParams: null,
      widgetId: C,
      widgetState: w,
    })) {
      if (b.aborted) return;
      yield e;
    }
}
async function m({
  canExpand: e,
  contentWidth: t,
  displayMode: n,
  locale: r,
  maxHeight: i,
  sandboxApi: a,
  styleVariables: o,
  theme: s,
}) {
  await Promise.all([
    a.setTheme({ theme: s }),
    a.setAdditionalGlobals({
      additionalGlobals: {
        displayMode: n,
        maxHeight: i,
        maxWidth: t,
        visualizationStyleVariables: o,
        visualizationTheme: s,
      },
    }),
    a.notifyMcpAppsHostContext({ hostContext: h(t, r, s, i, e, n) }),
  ]);
}
function h(e, t, n, r, i, a) {
  let o = v();
  return {
    availableDisplayModes: i ? [`inline`, `fullscreen`] : [`inline`],
    containerDimensions: { maxHeight: r, maxWidth: e },
    deviceCapabilities: o.capabilities,
    displayMode: a,
    locale: t,
    platform: `desktop`,
    safeAreaInsets: _().insets,
    theme: n,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    userAgent: `chatgpt`,
  };
}
function g() {
  return document.documentElement.dataset.theme === `dark` ? `dark` : `light`;
}
function _() {
  return { insets: { bottom: 0, left: 0, right: 0, top: 0 } };
}
function v() {
  return {
    capabilities: {
      hover:
        window.matchMedia?.(`(any-hover: hover)`)?.matches ||
        window.matchMedia?.(`(hover: hover)`)?.matches ||
        !1,
      touch:
        window.matchMedia?.(`(any-pointer: coarse)`)?.matches ||
        window.matchMedia?.(`(pointer: coarse)`)?.matches ||
        !1,
    },
    device: { os: y(), platform: `native`, type: `desktop` },
  };
}
function y() {
  let e = window.navigator.platform.toLowerCase();
  return e.includes(`mac`) ? `macos` : e.includes(`win`) ? `windows` : `unknown`;
}
var b, x, S;
function C() {
  return (C = e(() => {
    (i(),
      t(),
      u(),
      d(),
      s(),
      o(),
      (b = 10),
      (x = 1e4),
      (S = r()
        .nonnegative()
        .transform((e) => Math.min(Math.ceil(e), x))));
  }))();
}
export { C as a, S as c, g as i, x as n, p as o, f as r, m as s, b as t };
//# sourceMappingURL=visualization-sandbox-runtime-b31cac3a956f.js.map
