import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t } from "./app-shared-2feb3d4c6fcc.js";
import { DWr as n, WKr as r, bKr as i } from "./app-initial-ad16eaadf81f.js";
import { d as a, l as o } from "./codex-diff-css-38be692bb624.js";
function s({
  file: e,
  renderCustomHeader: t,
  renderHeaderPrefix: r,
  renderHeaderFilenameSuffix: a,
  renderHeaderMetadata: s,
  renderAnnotation: l,
  lineAnnotations: u,
  renderGutterUtility: d,
  getHoveredLine: f,
  getAnnotationSlotName: p = n,
}) {
  let m = t?.(e),
    h = r?.(e),
    g = a?.(e),
    _ = s?.(e);
  return (0, c.jsxs)(c.Fragment, {
    children: [
      m == null
        ? (0, c.jsxs)(c.Fragment, {
            children: [
              h != null && (0, c.jsx)(`div`, { slot: `header-prefix`, children: h }),
              g != null && (0, c.jsx)(`div`, { slot: `header-filename-suffix`, children: g }),
              _ != null && (0, c.jsx)(`div`, { slot: `header-metadata`, children: _ }),
            ],
          })
        : (0, c.jsx)(`div`, { slot: i, children: m }),
      l != null && u?.map((e, t) => (0, c.jsx)(`div`, { slot: p(e), children: l(e) }, t)),
      d != null && (0, c.jsx)(`div`, { slot: `gutter-utility-slot`, style: o, children: d(f) }),
    ],
  });
}
var c;
function l() {
  return (l = e(() => {
    (r(), a(), (c = t()));
  }))();
}
export { s as n, l as t };
//# sourceMappingURL=renderFileChildren-516d08134e55.js.map
