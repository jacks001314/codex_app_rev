import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n, yzt as r } from "./app-shared-bbfeca5e5737.js";
import { n as i, t as a } from "./thumbnail-8fa927af70d1.js";
function o(e) {
  let t = (0, s.c)(5),
    { title: n, readState: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = () => r()?.readOutput?.() ?? null), (t[0] = r), (t[1] = i));
  let [o] = (0, c.useState)(i),
    u;
  return (
    t[2] !== o || t[3] !== n
      ? ((u = (0, l.jsx)(a, { title: n, outputTail: o })), (t[2] = o), (t[3] = n), (t[4] = u))
      : (u = t[4]),
    u
  );
}
var s, c, l;
function u() {
  return (u = e(() => {
    ((s = t()), (c = r()), i(), (l = n()));
  }))();
}
u();
export { o as BackgroundTerminalThumbnail };
//# sourceMappingURL=background-terminal-149ce561556d.js.map
