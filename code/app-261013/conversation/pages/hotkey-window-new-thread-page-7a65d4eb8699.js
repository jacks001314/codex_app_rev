import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Kat as n,
  Pxt as r,
  Vxt as i,
  Zvt as a,
  jDt as o,
  qat as s,
  rst as c,
  vzt as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import { $dn as d, MTn as f, jTn as p, tfn as m } from "./app-initial-5851df3f6cb1.js";
import {
  Af as h,
  Jc as g,
  Kc as _,
  Mf as v,
  g as y,
  h as b,
  m as x,
  p as S,
} from "./app-primary-fe8a450b3b04.js";
import { n as C, t as w } from "./thread-scroll-layout-96ebbe17c836.js";
import { n as T, r as E } from "./use-hotkey-window-detail-layout-b2abbfb40f7f.js";
function D() {
  let e = (0, k.c)(7),
    n = i(m),
    r = O,
    a;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = {
        title: (0, A.jsx)(`span`, {
          className: `max-w-full truncate`,
          children: (0, A.jsx)(t, {
            id: `threadPage.newThread`,
            defaultMessage: `New chat`,
            description: `Header title for the home page`,
          }),
        }),
        mainWindowPath: `/`,
        canCollapseToHome: !1,
      }),
      (e[0] = a))
    : (a = e[0]),
    E(a));
  let o;
  e[1] === n
    ? (o = e[2])
    : ((o = (0, A.jsx)(h, {
        children: (0, A.jsx)(_, {
          selectedProject: n,
          showWorkspaceDropdownInUtilityBar: !1,
          onLocalConversationCreated: r,
        }),
      })),
      (e[1] = n),
      (e[2] = o));
  let s;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, A.jsx)(`div`, {
        "aria-hidden": `true`,
        children: (0, A.jsx)(b, { className: `h-12 w-12 text-text/20` }),
      })),
      (e[3] = s))
    : (s = e[3]);
  let c;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, A.jsx)(`div`, {
        className: `flex h-full items-center justify-center px-panel`,
        children: (0, A.jsxs)(`div`, {
          className: `flex flex-col items-center gap-3 text-center`,
          children: [
            s,
            (0, A.jsxs)(`div`, {
              className: `flex flex-col items-center gap-1`,
              children: [
                (0, A.jsx)(`div`, {
                  className: `heading-xl mt-2 font-normal text-default select-none`,
                  children: (0, A.jsx)(t, {
                    id: `home.hero.letsBuild`,
                    defaultMessage: `Let’s build`,
                    description: `Label above the workspace name on the electron home page`,
                  }),
                }),
                (0, A.jsx)(S, { variant: `hero` }),
              ],
            }),
          ],
        }),
      })),
      (e[4] = c))
    : (c = e[4]);
  let l;
  return (
    e[5] === o
      ? (l = e[6])
      : ((l = (0, A.jsx)(p, {
          className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
          children: (0, A.jsx)(w, { footer: o, children: c }),
        })),
        (e[5] = o),
        (e[6] = l)),
    l
  );
}
function O(e) {
  n.hotkeyWindowHotkeys?.open({ path: a(e) });
}
var k, A;
function j() {
  return (j = e(() => {
    ((k = l()), r(), c(), o(), g(), v(), x(), y(), s(), d(), f(), C(), T(), (A = u()));
  }))();
}
j();
export { D as HotkeyWindowNewThreadPage };
//# sourceMappingURL=hotkey-window-new-thread-page-7a65d4eb8699.js.map
