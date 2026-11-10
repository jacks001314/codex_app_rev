import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  Cpn as n,
  F3t as r,
  LX as i,
  O3t as a,
  RX as o,
  Spn as s,
  d5t as c,
  hmn as l,
  hz as u,
  kmn as d,
  mz as f,
} from "./app-initial-f094ef01c64d.js";
import {
  L as p,
  R as m,
  c as h,
  es as g,
  fs as _,
  l as v,
  ps as y,
  s as b,
  ts as x,
  u as S,
} from "./app-primary-4c40d73a1074.js";
import { n as C, t as w } from "./thread-scroll-layout-4583603e4217.js";
import { n as T, r as E } from "./use-hotkey-window-detail-layout-c05db7c47d12.js";
function D() {
  let e = (0, k.c)(7),
    t = r(o),
    i = O,
    a;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = {
        title: (0, A.jsx)(`span`, {
          className: `max-w-full truncate`,
          children: (0, A.jsx)(n, {
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
  let s;
  e[1] === t
    ? (s = e[2])
    : ((s = (0, A.jsx)(_, {
        children: (0, A.jsx)(p, {
          selectedProject: t,
          showWorkspaceDropdownInUtilityBar: !1,
          onLocalConversationCreated: i,
        }),
      })),
      (e[1] = t),
      (e[2] = s));
  let c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, A.jsx)(`div`, {
        "aria-hidden": `true`,
        children: (0, A.jsx)(b, { className: `h-12 w-12 text-text/20` }),
      })),
      (e[3] = c))
    : (c = e[3]);
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, A.jsx)(`div`, {
        className: `flex h-full items-center justify-center px-panel`,
        children: (0, A.jsxs)(`div`, {
          className: `flex flex-col items-center gap-3 text-center`,
          children: [
            c,
            (0, A.jsxs)(`div`, {
              className: `flex flex-col items-center gap-1`,
              children: [
                (0, A.jsx)(`div`, {
                  className: `heading-xl mt-2 font-normal text-default select-none`,
                  children: (0, A.jsx)(n, {
                    id: `home.hero.letsBuild`,
                    defaultMessage: `Let’s build`,
                    description: `Label above the workspace name on the electron home page`,
                  }),
                }),
                (0, A.jsx)(v, { variant: `hero` }),
              ],
            }),
          ],
        }),
      })),
      (e[4] = l))
    : (l = e[4]);
  let u;
  return (
    e[5] === s
      ? (u = e[6])
      : ((u = (0, A.jsx)(g, {
          className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
          children: (0, A.jsx)(w, { footer: s, children: l }),
        })),
        (e[5] = s),
        (e[6] = u)),
    u
  );
}
function O(e) {
  f.hotkeyWindowHotkeys?.open({ path: c(e) });
}
var k, A;
e(() => {
  ((k = d()), a(), t(), s(), m(), y(), S(), h(), u(), i(), x(), C(), T(), (A = l()));
})();
export { D as HotkeyWindowNewThreadPage };
//# sourceMappingURL=hotkey-window-new-thread-page-48ec2a7a4cc4.js.map
