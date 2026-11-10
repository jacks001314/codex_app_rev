import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { xMt as t } from "./app-shared-bbfeca5e5737.js";
import { EVr as n, Nzr as r, XVr as i } from "./app-initial-5851df3f6cb1.js";
import { d as a, l as o } from "./codex-diff-css-681a898586a0.js";
function s({
  file: e,
  renderCustomHeader: t,
  renderHeaderPrefix: i,
  renderHeaderFilenameSuffix: a,
  renderHeaderMetadata: s,
  renderAnnotation: l,
  lineAnnotations: u,
  renderGutterUtility: d,
  getHoveredLine: f,
  getAnnotationSlotName: p = r,
}) {
  let m = t?.(e),
    h = i?.(e),
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
        : (0, c.jsx)(`div`, { slot: n, children: m }),
      l != null && u?.map((e, t) => (0, c.jsx)(`div`, { slot: p(e), children: l(e) }, t)),
      d != null && (0, c.jsx)(`div`, { slot: `gutter-utility-slot`, style: o, children: d(f) }),
    ],
  });
}
var c;
function l() {
  return (l = e(() => {
    (i(), a(), (c = t()));
  }))();
}
export { s as n, l as t };
//# sourceMappingURL=renderFileChildren-4eb3bc301162.js.map
