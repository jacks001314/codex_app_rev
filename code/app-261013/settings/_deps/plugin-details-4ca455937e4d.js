import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Avt as t,
  _O as n,
  iot as r,
  mO as i,
  oot as a,
  rst as o,
  vO as s,
  vzt as c,
  xMt as l,
} from "./app-shared-bbfeca5e5737.js";
import { n as u, r as d } from "./plugin-detail-page-fa557e91a236.js";
function f(e) {
  let a = (0, p.c)(16),
    { invocation: o, plugin: s, onClose: c, onCloseAutoFocus: l } = e,
    d = s.remotePluginId == null ? s.remoteMarketplaceName : t,
    f;
  a[0] === c
    ? (f = a[1])
    : ((f = (e) => {
        e || c();
      }),
      (a[0] = c),
      (a[1] = f));
  let h;
  a[2] === l
    ? (h = a[3])
    : ((h = { "aria-describedby": void 0, onCloseAutoFocus: l }), (a[2] = l), (a[3] = h));
  let g;
  a[4] === o.plugin_name
    ? (g = a[5])
    : ((g = (0, m.jsx)(n, { className: `sr-only`, children: o.plugin_name })),
      (a[4] = o.plugin_name),
      (a[5] = g));
  let _ = s.marketplacePath == null ? (s.remotePluginId ?? s.id) : s.name,
    v = s.marketplacePath == null ? d : null,
    y;
  a[6] !== c || a[7] !== s.marketplacePath || a[8] !== _ || a[9] !== v
    ? ((y = (0, m.jsx)(u, {
        pluginName: _,
        marketplacePath: s.marketplacePath,
        remoteMarketplaceName: v,
        hostId: r,
        presentation: `dialog`,
        onBeforeOpenInstall: c,
      })),
      (a[6] = c),
      (a[7] = s.marketplacePath),
      (a[8] = _),
      (a[9] = v),
      (a[10] = y))
    : (y = a[10]);
  let b;
  return (
    a[11] !== f || a[12] !== h || a[13] !== g || a[14] !== y
      ? ((b = (0, m.jsxs)(i, {
          open: !0,
          size: `editor`,
          contentClassName: `flex flex-col`,
          onOpenChange: f,
          contentProps: h,
          children: [g, y],
        })),
        (a[11] = f),
        (a[12] = h),
        (a[13] = g),
        (a[14] = y),
        (a[15] = b))
      : (b = a[15]),
    b
  );
}
var p, m;
function h() {
  return (h = e(() => {
    ((p = c()), o(), s(), d(), a(), (m = l()));
  }))();
}
h();
export { f as ProfilePluginDetails };
//# sourceMappingURL=plugin-details-4ca455937e4d.js.map
