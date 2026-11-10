import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, xMt as r } from "./app-shared-bbfeca5e5737.js";
import { Hy as i, Vy as a, hp as o, mp as s } from "./app-initial-5851df3f6cb1.js";
import { a as c, t as l } from "./surface-experience-689b6f263218.js";
function u(e, n, r, i) {
  return e === `loading`
    ? (0, d.jsx)(a, { filePreviewKind: n })
    : e === `error`
      ? (0, d.jsxs)(s, {
          className: `h-full flex-col gap-3`,
          children: [
            (0, d.jsx)(l, { tracker: i, kind: `render` }),
            (0, d.jsx)(t, {
              id: `artifactTab.previewError`,
              defaultMessage: `Couldn’t load this preview`,
              description: `Error state shown when an artifact preview fails to load`,
            }),
            r,
          ],
        })
      : null;
}
var d;
function f() {
  return (f = e(() => {
    (n(), c(), o(), i(), (d = r()));
  }))();
}
export { u as n, f as t };
//# sourceMappingURL=artifact-preview-status-c9c48d8baae3.js.map
