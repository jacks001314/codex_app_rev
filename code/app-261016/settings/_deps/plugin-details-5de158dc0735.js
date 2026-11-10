import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  JO as t,
  Kyt as n,
  LNt as r,
  PBt as i,
  WO as a,
  Yst as o,
  Zst as s,
  qO as c,
  sct as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as u, r as d } from "./plugin-detail-page-985b9607642c.js";
function f(e) {
  let t = (0, p.c)(16),
    { invocation: r, plugin: i, onClose: s, onCloseAutoFocus: l } = e,
    d = i.remotePluginId == null ? i.remoteMarketplaceName : n,
    f;
  t[0] === s
    ? (f = t[1])
    : ((f = (e) => {
        e || s();
      }),
      (t[0] = s),
      (t[1] = f));
  let h;
  t[2] === l
    ? (h = t[3])
    : ((h = { "aria-describedby": void 0, onCloseAutoFocus: l }), (t[2] = l), (t[3] = h));
  let g;
  t[4] === r.plugin_name
    ? (g = t[5])
    : ((g = (0, m.jsx)(c, { className: `sr-only`, children: r.plugin_name })),
      (t[4] = r.plugin_name),
      (t[5] = g));
  let _ = i.marketplacePath == null ? (i.remotePluginId ?? i.id) : i.name,
    v = i.marketplacePath == null ? d : null,
    y;
  t[6] !== s || t[7] !== i.marketplacePath || t[8] !== _ || t[9] !== v
    ? ((y = (0, m.jsx)(u, {
        pluginName: _,
        marketplacePath: i.marketplacePath,
        remoteMarketplaceName: v,
        hostId: o,
        presentation: `dialog`,
        onBeforeOpenInstall: s,
      })),
      (t[6] = s),
      (t[7] = i.marketplacePath),
      (t[8] = _),
      (t[9] = v),
      (t[10] = y))
    : (y = t[10]);
  let b;
  return (
    t[11] !== f || t[12] !== h || t[13] !== g || t[14] !== y
      ? ((b = (0, m.jsxs)(a, {
          open: !0,
          size: `editor`,
          contentClassName: `flex flex-col`,
          onOpenChange: f,
          contentProps: h,
          children: [g, y],
        })),
        (t[11] = f),
        (t[12] = h),
        (t[13] = g),
        (t[14] = y),
        (t[15] = b))
      : (b = t[15]),
    b
  );
}
var p, m;
function h() {
  return (h = e(() => {
    ((p = i()), l(), t(), d(), s(), (m = r()));
  }))();
}
h();
export { f as ProfilePluginDetails };
//# sourceMappingURL=plugin-details-5de158dc0735.js.map
