import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n } from "./app-shared-2feb3d4c6fcc.js";
import { _B as r, vB as i } from "./app-initial-ad16eaadf81f.js";
import "./terminal-panel-c0ca9a862516.js";
function a(e) {
  let t = (0, s.c)(7),
    { title: n, outputTail: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i?.length
        ? {
            kind: `text`,
            content: (0, c.jsx)(`span`, {
              className: `text-codex-terminal-foreground`,
              "data-codex-xterm": !0,
              children: i.map(o),
            }),
            lines: 8,
            variant: `code`,
          }
        : null),
      (t[0] = i),
      (t[1] = a));
  let l;
  t[2] === a ? (l = t[3]) : ((l = [a]), (t[2] = a), (t[3] = l));
  let u;
  return (
    t[4] !== l || t[5] !== n
      ? ((u = (0, c.jsx)(r, { icon: null, subtitle: null, title: n, sections: l })),
        (t[4] = l),
        (t[5] = n),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function o(e, t) {
  return (0, c.jsx)(`span`, { style: e.style, children: e.text }, t);
}
var s, c;
function l() {
  return (l = e(() => {
    ((s = n()), i(), (c = t()));
  }))();
}
export { l as n, a as t };
//# sourceMappingURL=thumbnail-4151c9869941.js.map
