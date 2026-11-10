import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IO as n,
  JO as r,
  LNt as i,
  PBt as a,
  RO as o,
  WO as s,
  XOt as c,
  okt as l,
  qO as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import { r as f, t as p } from "./appgen-settings-page-63b694c76908.js";
function m(e) {
  let t = (0, h.c)(14),
    { onClose: r, projectId: i } = e,
    a = l(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, g.jsx)(d, {
        id: `appgenSettings.dialog.title`,
        defaultMessage: `Site settings`,
        description: `Title for the Site settings dialog`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let f = c,
    m;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { "aria-describedby": void 0 }), (t[1] = m))
    : (m = t[1]);
  let _;
  t[2] === a
    ? (_ = t[3])
    : ((_ = a.formatMessage({
        id: `appgenSettings.dialog.close`,
        defaultMessage: `Close Site settings`,
        description: `Accessible label for closing the Site settings dialog`,
      })),
      (t[2] = a),
      (t[3] = _));
  let v;
  t[4] === r
    ? (v = t[5])
    : ((v = (e) => {
        e || r();
      }),
      (t[4] = r),
      (t[5] = v));
  let y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, g.jsxs)(`div`, {
        className: `flex w-full flex-col px-4 pt-3`,
        children: [
          (0, g.jsx)(u, { className: `sr-only`, children: f }),
          (0, g.jsx)(o, { title: f, titleClassName: `truncate pe-8` }),
        ],
      })),
      (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] !== r || t[8] !== i
    ? ((b = (0, g.jsxs)(n, {
        className: `!px-1 !py-1`,
        size: `full`,
        children: [y, (0, g.jsx)(p, { projectId: i, onDeleted: r, onTransferred: r })],
      })),
      (t[7] = r),
      (t[8] = i),
      (t[9] = b))
    : (b = t[9]);
  let x;
  return (
    t[10] !== _ || t[11] !== v || t[12] !== b
      ? ((x = (0, g.jsx)(s, {
          open: !0,
          contentClassName: `h-[720px] max-h-[92vh]`,
          contentProps: m,
          dialogCloseLabel: _,
          size: `xwide`,
          onOpenChange: v,
          children: b,
        })),
        (t[10] = _),
        (t[11] = v),
        (t[12] = b),
        (t[13] = x))
      : (x = t[13]),
    x
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = a()), c(), r(), t(), f(), (g = i()));
  }))();
}
_();
export { m as AppgenSettingsDialog };
//# sourceMappingURL=appgen-settings-dialog-566020a8f6f6.js.map
