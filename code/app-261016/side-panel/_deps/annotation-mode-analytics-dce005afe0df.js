import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Rrt as t, h6 as n, m6 as r, p6 as i } from "./app-shared-2feb3d4c6fcc.js";
import { xMr as a, yMr as o } from "./app-initial-ad16eaadf81f.js";
function s(e, { surface: t, entrySource: n, isDetached: r }) {
  a(e, i, { surface: c[t], entrySource: n == null ? void 0 : l[n], isDetached: r });
}
var c, l;
function u() {
  return (u = e(() => {
    (t(),
      o(),
      (c = {
        browser_local: n.CODEX_ANNOTATION_MODE_SURFACE_BROWSER_LOCAL,
        browser_remote: n.CODEX_ANNOTATION_MODE_SURFACE_BROWSER_REMOTE,
        file_artifact: n.CODEX_ANNOTATION_MODE_SURFACE_FILE_ARTIFACT,
        artifact_session: n.CODEX_ANNOTATION_MODE_SURFACE_ARTIFACT_SESSION,
        native_page: n.CODEX_ANNOTATION_MODE_SURFACE_NATIVE_PAGE,
        site: n.CODEX_ANNOTATION_MODE_SURFACE_SITE,
        image: n.CODEX_ANNOTATION_MODE_SURFACE_IMAGE,
      }),
      (l = {
        button: r.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_BUTTON,
        keyboard_shortcut: r.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_KEYBOARD_SHORTCUT,
        context_menu: r.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU,
      }));
  }))();
}
export { s as n, u as t };
//# sourceMappingURL=annotation-mode-analytics-dce005afe0df.js.map
