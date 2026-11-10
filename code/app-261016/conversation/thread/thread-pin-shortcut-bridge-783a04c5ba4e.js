import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { NFt as t, PBt as n, jFt as r } from "./app-shared-2feb3d4c6fcc.js";
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
    ((a = n()), r());
  }))();
}
export { o as n, i as t };
//# sourceMappingURL=thread-pin-shortcut-bridge-783a04c5ba4e.js.map
