import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, tkt as i } from "./app-shared-2feb3d4c6fcc.js";
import { n as a, t as o } from "./o-soft-gradient-gray-fb0db9f05a6a.js";
import { n as s, t as c } from "./view-d9f4f0c40cf2.js";
function l(e) {
  let t = (0, u.c)(4),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, d.jsx)(i, {
        id: `chatgptConversations.cloudBrowser.chatgptControl`,
        defaultMessage: `ChatGPT has control`,
        description: `Status below the live cloud browser while ChatGPT has mouse and keyboard control`,
      })),
      (t[0] = n))
    : (n = t[0]);
  let r;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = {
        background: `var(--color-background-primary-solid)`,
        foreground: `var(--color-text-primary-solid)`,
      }),
      (t[1] = r))
    : (r = t[1]);
  let o;
  return (
    t[2] === e
      ? (o = t[3])
      : ((o = (0, d.jsx)(c, {
          ...e,
          assistantControlLabel: n,
          computerName: `ChatGPT`,
          controlColors: r,
          backdropUrl: a,
        })),
        (t[2] = e),
        (t[3] = o)),
    o
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), r(), o(), s(), (d = t()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=cloud-browser-view-5fc1ac92089c.js.map
