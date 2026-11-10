import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Pt as t, hPt as n, vzt as r } from "./app-shared-bbfeca5e5737.js";
function i(e) {
  let n = (0, a.c)(5),
    { enabled: r, onToggle: i } = e,
    o;
  n[0] !== r || n[1] !== i
    ? ((o = () => {
        r && i();
      }),
      (n[0] = r),
      (n[1] = i),
      (n[2] = o))
    : (o = n[2]);
  let s;
  return (n[3] === r ? (s = n[4]) : ((s = [r]), (n[3] = r), (n[4] = s)), t(`toggle-thread-pin`, o, s), null);
}
var a;
function o() {
  return (o = e(() => {
    ((a = r()), n());
  }))();
}
export { o as n, i as t };
//# sourceMappingURL=thread-pin-shortcut-bridge-fcf90cbec36c.js.map
