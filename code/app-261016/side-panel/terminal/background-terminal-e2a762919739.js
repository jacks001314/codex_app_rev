import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, LNt as n, PBt as r } from "./app-shared-2feb3d4c6fcc.js";
import { n as i, t as a } from "./thumbnail-4151c9869941.js";
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
    ((s = r()), (c = t()), i(), (l = n()));
  }))();
}
u();
export { o as BackgroundTerminalThumbnail };
//# sourceMappingURL=background-terminal-e2a762919739.js.map
