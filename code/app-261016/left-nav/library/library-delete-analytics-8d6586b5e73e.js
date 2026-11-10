import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { eat as t } from "./app-shared-2feb3d4c6fcc.js";
import {
  Cmt as n,
  Ozn as r,
  RS as i,
  TS as a,
  US as o,
  VRn as s,
  VS as c,
  Ydr as l,
  cmt as u,
  izn as d,
  rzn as f,
  umt as p,
  wmt as m,
  xMr as h,
  yMr as g,
} from "./app-initial-ad16eaadf81f.js";
function _(e, r, i, l, p, m = u) {
  let g = r.filter((e) => !o(e) && !c(e) && (p || a(e)));
  if (g.length === 0) return;
  let _ = Array.from(new Set(g.flatMap(({ node: e }) => (e.kind === `file` ? [e.id] : [])))),
    v = Array.from(new Set(g.flatMap(({ node: e }) => (e.kind === `directory` ? [e.id] : [])))),
    y = { libraryFileIds: _.length > 0 ? _ : void 0, folderIds: v.length > 0 ? v : void 0 },
    b = new Set(g.map(({ node: e }) => n(e.id)));
  h(e, s, {
    ...i,
    interactionType: l,
    operation:
      !p && _.length > 0
        ? f.CHATGPT_FILE_LIBRARY_OPERATION_MOVE_TO_RECENTLY_DELETED
        : f.CHATGPT_FILE_LIBRARY_OPERATION_PERMANENT_DELETE,
    ...(JSON.stringify(y).length <= 2e3 ? y : {}),
    selectedCount: t(_.length),
    provider: b.size === 1 ? b.values().next().value : void 0,
    libraryOrigin: p ? d.CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN : m,
  });
}
function v() {
  return (v = e(() => {
    (l(), r(), g(), p(), m(), i());
  }))();
}
export { _ as n, v as t };
//# sourceMappingURL=library-delete-analytics-8d6586b5e73e.js.map
