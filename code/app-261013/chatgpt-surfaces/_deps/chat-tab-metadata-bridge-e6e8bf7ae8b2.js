import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, vzt as r, yzt as i } from "./app-shared-bbfeca5e5737.js";
import { Cwr as a, Gwn as o, Uwn as s, gwr as c, qwn as l } from "./app-initial-5851df3f6cb1.js";
function u(e) {
  let n = (0, d.c)(8),
    { isVisible: r, title: i } = e,
    a = r === void 0 || r,
    s = t(c),
    u,
    p;
  (n[0] !== a || n[1] !== s || n[2] !== i
    ? ((u = () => {
        (s.set(o, i), s.set(l, a));
      }),
      (p = [a, s, i]),
      (n[0] = a),
      (n[1] = s),
      (n[2] = i),
      (n[3] = u),
      (n[4] = p))
    : ((u = n[3]), (p = n[4])),
    (0, f.useLayoutEffect)(u, p));
  let m, h;
  return (
    n[5] === s
      ? ((m = n[6]), (h = n[7]))
      : ((m = () => () => {
          (s.set(o, null), s.set(l, !0));
        }),
        (h = [s]),
        (n[5] = s),
        (n[6] = m),
        (n[7] = h)),
    (0, f.useLayoutEffect)(m, h),
    null
  );
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = r()), n(), (f = i()), a(), s());
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=chat-tab-metadata-bridge-e6e8bf7ae8b2.js.map
