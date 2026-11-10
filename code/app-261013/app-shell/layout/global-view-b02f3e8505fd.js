import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, vzt as n, xMt as r, zxt as i } from "./app-shared-bbfeca5e5737.js";
import { Ocr as a, kcr as o, wcr as s } from "./app-initial-5851df3f6cb1.js";
import { r as c, t as l } from "./document-title-1619f32b59ec.js";
function u(e) {
  let t = (0, d.c)(16),
    { title: n, nativeTitle: r, isActive: a, isVisible: c, source: u, children: p } = e,
    m = r === void 0 ? n : r,
    h = a === void 0 || a,
    g = c === void 0 || c,
    _ = u.pluginId ?? null,
    v;
  t[0] !== u.hostId || t[1] !== _
    ? ((v = s({ hostId: u.hostId, pluginId: _ })), (t[0] = u.hostId), (t[1] = _), (t[2] = v))
    : (v = t[2]);
  let y = u.pluginId != null,
    b;
  t[3] === y ? (b = t[4]) : ((b = { enabled: y }), (t[3] = y), (t[4] = b));
  let { data: x } = i(o, v, b),
    S = x?.summary.interface?.displayName ?? x?.summary.name,
    C;
  t[5] !== h || t[6] !== g || t[7] !== m || t[8] !== S || t[9] !== n
    ? ((C = h && g && (0, f.jsx)(l, { title: S ?? n, nativeTitle: S ?? m })),
      (t[5] = h),
      (t[6] = g),
      (t[7] = m),
      (t[8] = S),
      (t[9] = n),
      (t[10] = C))
    : (C = t[10]);
  let w;
  t[11] === p
    ? (w = t[12])
    : ((w = (0, f.jsx)(`div`, { className: `min-h-0 flex-1`, children: p })), (t[11] = p), (t[12] = w));
  let T;
  return (
    t[13] !== C || t[14] !== w
      ? ((T = (0, f.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface text-default`,
          "data-mcp-extension-surface": !0,
          children: [C, w],
        })),
        (t[13] = C),
        (t[14] = w),
        (t[15] = T))
      : (T = t[15]),
    T
  );
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = n()), t(), c(), a(), (f = r()));
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=global-view-b02f3e8505fd.js.map
