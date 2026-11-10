import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  PBt as n,
  XOt as r,
  ZSt as i,
  ast as a,
  iCt as o,
  ist as s,
  pbt as c,
  sct as l,
  tkt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { Ysn as d, Zsn as f, ekn as p, tkn as m } from "./app-initial-ad16eaadf81f.js";
import { Uf as h, Vf as g, _, al as v, b as y, rl as b, v as x, y as S } from "./app-primary-3e00728c2a4c.js";
import { n as C, t as w } from "./thread-scroll-layout-d113e24968c3.js";
import { n as T, r as E } from "./use-hotkey-window-detail-layout-b8900124f3e8.js";
function D() {
  let e = (0, k.c)(7),
    t = o(f),
    n = O,
    r;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = {
        title: (0, A.jsx)(`span`, {
          className: `max-w-full truncate`,
          children: (0, A.jsx)(u, {
            id: `threadPage.newThread`,
            defaultMessage: `New chat`,
            description: `Header title for the home page`,
          }),
        }),
        mainWindowPath: `/`,
        canCollapseToHome: !1,
      }),
      (e[0] = r))
    : (r = e[0]),
    E(r));
  let i;
  e[1] === t
    ? (i = e[2])
    : ((i = (0, A.jsx)(g, {
        children: (0, A.jsx)(b, {
          selectedProject: t,
          showWorkspaceDropdownInUtilityBar: !1,
          onLocalConversationCreated: n,
        }),
      })),
      (e[1] = t),
      (e[2] = i));
  let a;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, A.jsx)(`div`, {
        "aria-hidden": `true`,
        children: (0, A.jsx)(S, { className: `h-12 w-12 text-text/20` }),
      })),
      (e[3] = a))
    : (a = e[3]);
  let s;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, A.jsx)(`div`, {
        className: `flex h-full items-center justify-center px-panel`,
        children: (0, A.jsxs)(`div`, {
          className: `flex flex-col items-center gap-3 text-center`,
          children: [
            a,
            (0, A.jsxs)(`div`, {
              className: `flex flex-col items-center gap-1`,
              children: [
                (0, A.jsx)(`div`, {
                  className: `heading-xl mt-2 font-normal text-default select-none`,
                  children: (0, A.jsx)(u, {
                    id: `home.hero.letsBuild`,
                    defaultMessage: `Let’s build`,
                    description: `Label above the workspace name on the electron home page`,
                  }),
                }),
                (0, A.jsx)(_, { variant: `hero` }),
              ],
            }),
          ],
        }),
      })),
      (e[4] = s))
    : (s = e[4]);
  let c;
  return (
    e[5] === i
      ? (c = e[6])
      : ((c = (0, A.jsx)(p, {
          className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
          children: (0, A.jsx)(w, { footer: i, children: s }),
        })),
        (e[5] = i),
        (e[6] = c)),
    c
  );
}
function O(e) {
  s.hotkeyWindowHotkeys?.open({ path: c(e) });
}
var k, A;
function j() {
  return (j = e(() => {
    ((k = n()), i(), l(), r(), v(), h(), x(), y(), a(), d(), m(), C(), T(), (A = t()));
  }))();
}
j();
export { D as HotkeyWindowNewThreadPage };
//# sourceMappingURL=hotkey-window-new-thread-page-48fa32ac8393.js.map
