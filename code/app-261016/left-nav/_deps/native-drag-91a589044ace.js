import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CCt as t, ZSt as n, yCt as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  CH as i,
  HU as a,
  Nmt as o,
  SH as s,
  Yfn as c,
  mlr as l,
  qU as u,
  vH as d,
  xH as f,
  ylr as p,
} from "./app-initial-ad16eaadf81f.js";
function m(e, t, n, r = !1) {
  return {
    onDragStartCapture: (n) => _.start(e, n, t),
    onDragEndCapture: () => _.end(e, t),
    ...i(e, t, {
      onExpand: n?.expanded === !1 && n.onToggle != null ? () => n.onToggle?.(!0) : void 0,
      allowPosition: r,
    }),
  };
}
var h, g, _;
function v() {
  return (v = e(() => {
    (n(),
      o(),
      l(),
      a(),
      f(),
      (h = r(c, (e, { get: t, scope: n }) => t(p) && !n.value.deleted && !t(u, e) && !t(d, e))),
      (g = t(
        c,
        ({ get: e, scope: t }) =>
          e(p) &&
          (t.value.pageCollection != null || t.value.selectionPages != null) &&
          !t.value.deleted &&
          t.value.search === `` &&
          t.value.sources.length === 0,
      )),
      (_ = {
        ...s,
        start(e, t, n) {
          if (e.value.deleted) {
            t.preventDefault();
            return;
          }
          s.start(e, t, n);
        },
        root(e, t) {
          e.value.pageCollection != null &&
            e.value.directoryId == null &&
            !e.value.deleted &&
            e.value.search === `` &&
            s.root(e, t);
        },
      }));
  }))();
}
export { m as a, _ as i, g as n, v as r, h as t };
//# sourceMappingURL=native-drag-91a589044ace.js.map
