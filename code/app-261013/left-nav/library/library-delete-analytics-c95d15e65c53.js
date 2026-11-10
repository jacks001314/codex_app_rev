import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Rrt as t } from "./app-shared-bbfeca5e5737.js";
import {
  $ft as n,
  AFn as r,
  QDr as i,
  XDr as a,
  Zx as o,
  eIn as s,
  fS as c,
  hFn as l,
  hpt as u,
  jFn as d,
  lS as f,
  mpt as p,
  ocr as m,
  tpt as h,
  uS as g,
} from "./app-initial-5851df3f6cb1.js";
function _(e, a, s, u, f, m = n) {
  let h = a.filter((e) => !c(e) && !g(e) && (f || o(e)));
  if (h.length === 0) return;
  let _ = Array.from(new Set(h.flatMap(({ node: e }) => (e.kind === `file` ? [e.id] : [])))),
    v = Array.from(new Set(h.flatMap(({ node: e }) => (e.kind === `directory` ? [e.id] : [])))),
    y = { libraryFileIds: _.length > 0 ? _ : void 0, folderIds: v.length > 0 ? v : void 0 },
    b = new Set(h.map(({ node: e }) => p(e.id)));
  i(e, l, {
    ...s,
    interactionType: u,
    operation:
      !f && _.length > 0
        ? r.CHATGPT_FILE_LIBRARY_OPERATION_MOVE_TO_RECENTLY_DELETED
        : r.CHATGPT_FILE_LIBRARY_OPERATION_PERMANENT_DELETE,
    ...(JSON.stringify(y).length <= 2e3 ? y : {}),
    selectedCount: t(_.length),
    provider: b.size === 1 ? b.values().next().value : void 0,
    libraryOrigin: f ? d.CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN : m,
  });
}
function v() {
  return (v = e(() => {
    (m(), s(), a(), h(), u(), f());
  }))();
}
export { _ as n, v as t };
//# sourceMappingURL=library-delete-analytics-c95d15e65c53.js.map
