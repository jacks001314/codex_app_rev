import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, XOt as n, tkt as r } from "./app-shared-2feb3d4c6fcc.js";
import { _p as i, gp as a, lb as o, ub as s } from "./app-initial-ad16eaadf81f.js";
import { a as c, t as l } from "./surface-experience-c26605784604.js";
function u(e, t, n, i) {
  return e === `loading`
    ? (0, d.jsx)(o, { filePreviewKind: t })
    : e === `error`
      ? (0, d.jsxs)(a, {
          className: `h-full flex-col gap-3`,
          children: [
            (0, d.jsx)(l, { tracker: i, kind: `render` }),
            (0, d.jsx)(r, {
              id: `artifactTab.previewError`,
              defaultMessage: `Couldn’t load this preview`,
              description: `Error state shown when an artifact preview fails to load`,
            }),
            n,
          ],
        })
      : null;
}
var d;
function f() {
  return (f = e(() => {
    (n(), c(), i(), s(), (d = t()));
  }))();
}
export { u as n, f as t };
//# sourceMappingURL=artifact-preview-status-5e6617ccf3e2.js.map
