import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as t,
  Jrt as n,
  Opn as r,
  Spn as i,
  Xrt as a,
  eit as o,
  hmn as s,
  iit as c,
  kmn as l,
  rit as u,
  tit as d,
} from "./app-initial-f094ef01c64d.js";
import { r as f, t as p } from "./appgen-settings-page-deb3b5079c3d.js";
function m(e) {
  let i = (0, h.c)(14),
    { onClose: o, projectId: s } = e,
    c = r(),
    l;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, g.jsx)(t, {
        id: `appgenSettings.dialog.title`,
        defaultMessage: `Site settings`,
        description: `Title for the Site settings dialog`,
      })),
      (i[0] = l))
    : (l = i[0]);
  let f = l,
    m;
  i[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { "aria-describedby": void 0 }), (i[1] = m))
    : (m = i[1]);
  let _;
  i[2] === c
    ? (_ = i[3])
    : ((_ = c.formatMessage({
        id: `appgenSettings.dialog.close`,
        defaultMessage: `Close Site settings`,
        description: `Accessible label for closing the Site settings dialog`,
      })),
      (i[2] = c),
      (i[3] = _));
  let v;
  i[4] === o
    ? (v = i[5])
    : ((v = (e) => {
        e || o();
      }),
      (i[4] = o),
      (i[5] = v));
  let y;
  i[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, g.jsxs)(`div`, {
        className: `flex w-full flex-col px-4 pt-3`,
        children: [
          (0, g.jsx)(u, { className: `sr-only`, children: f }),
          (0, g.jsx)(a, { title: f, titleClassName: `truncate pe-8` }),
        ],
      })),
      (i[6] = y))
    : (y = i[6]);
  let b;
  i[7] !== o || i[8] !== s
    ? ((b = (0, g.jsxs)(n, {
        className: `!px-1 !py-1`,
        size: `full`,
        children: [y, (0, g.jsx)(p, { projectId: s, onDeleted: o })],
      })),
      (i[7] = o),
      (i[8] = s),
      (i[9] = b))
    : (b = i[9]);
  let x;
  return (
    i[10] !== _ || i[11] !== v || i[12] !== b
      ? ((x = (0, g.jsx)(d, {
          open: !0,
          contentClassName: `h-[720px] max-h-[92vh]`,
          contentProps: m,
          dialogCloseLabel: _,
          size: `xwide`,
          onOpenChange: v,
          children: b,
        })),
        (i[10] = _),
        (i[11] = v),
        (i[12] = b),
        (i[13] = x))
      : (x = i[13]),
    x
  );
}
var h, g;
e(() => {
  ((h = l()), i(), c(), o(), f(), (g = s()));
})();
export { m as AppgenSettingsDialog };
//# sourceMappingURL=appgen-settings-dialog-2092ca4c6374.js.map
