import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  VDt as n,
  _O as r,
  cO as i,
  fO as a,
  jDt as o,
  mO as s,
  oO as c,
  vO as l,
  vzt as u,
  xMt as d,
} from "./app-shared-bbfeca5e5737.js";
import { r as f, t as p } from "./appgen-settings-page-6bd70fc39161.js";
function m(e) {
  let a = (0, h.c)(14),
    { onClose: o, projectId: l } = e,
    u = n(),
    d;
  a[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, g.jsx)(t, {
        id: `appgenSettings.dialog.title`,
        defaultMessage: `Site settings`,
        description: `Title for the Site settings dialog`,
      })),
      (a[0] = d))
    : (d = a[0]);
  let f = d,
    m;
  a[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { "aria-describedby": void 0 }), (a[1] = m))
    : (m = a[1]);
  let _;
  a[2] === u
    ? (_ = a[3])
    : ((_ = u.formatMessage({
        id: `appgenSettings.dialog.close`,
        defaultMessage: `Close Site settings`,
        description: `Accessible label for closing the Site settings dialog`,
      })),
      (a[2] = u),
      (a[3] = _));
  let v;
  a[4] === o
    ? (v = a[5])
    : ((v = (e) => {
        e || o();
      }),
      (a[4] = o),
      (a[5] = v));
  let y;
  a[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, g.jsxs)(`div`, {
        className: `flex w-full flex-col px-4 pt-3`,
        children: [
          (0, g.jsx)(r, { className: `sr-only`, children: f }),
          (0, g.jsx)(i, { title: f, titleClassName: `truncate pe-8` }),
        ],
      })),
      (a[6] = y))
    : (y = a[6]);
  let b;
  a[7] !== o || a[8] !== l
    ? ((b = (0, g.jsxs)(c, {
        className: `!px-1 !py-1`,
        size: `full`,
        children: [y, (0, g.jsx)(p, { projectId: l, onDeleted: o, onTransferred: o })],
      })),
      (a[7] = o),
      (a[8] = l),
      (a[9] = b))
    : (b = a[9]);
  let x;
  return (
    a[10] !== _ || a[11] !== v || a[12] !== b
      ? ((x = (0, g.jsx)(s, {
          open: !0,
          contentClassName: `h-[720px] max-h-[92vh]`,
          contentProps: m,
          dialogCloseLabel: _,
          size: `xwide`,
          onOpenChange: v,
          children: b,
        })),
        (a[10] = _),
        (a[11] = v),
        (a[12] = b),
        (a[13] = x))
      : (x = a[13]),
    x
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = u()), o(), l(), a(), f(), (g = d()));
  }))();
}
_();
export { m as AppgenSettingsDialog };
//# sourceMappingURL=appgen-settings-dialog-aa03cb9fc9cd.js.map
