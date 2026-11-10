import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ext as t,
  IDt as n,
  VDt as r,
  _xt as i,
  jDt as a,
  vzt as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
import { co as c, lo as l } from "./app-initial-5851df3f6cb1.js";
function u(e) {
  let i = (0, d.c)(10),
    { selectedTab: a } = e,
    o = r(),
    s = t(),
    l;
  i[0] === o
    ? (l = i[1])
    : ((l = o.formatMessage({
        id: `settings.worktrees.tabs`,
        defaultMessage: `Worktrees settings`,
        description: `Accessible label for worktree settings tabs`,
      })),
      (i[0] = o),
      (i[1] = l));
  let u;
  i[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        key: `general`,
        name: (0, f.jsx)(n, {
          id: `settings.worktrees.general`,
          defaultMessage: `General`,
          description: `Tab showing worktree management and cleanup settings`,
        }),
      }),
      (i[2] = u))
    : (u = i[2]);
  let p;
  i[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = [
        u,
        {
          key: `environments`,
          name: (0, f.jsx)(n, {
            id: `settings.worktrees.environments`,
            defaultMessage: `Environments`,
            description: `Tab showing local environment setup for worktrees`,
          }),
        },
      ]),
      (i[3] = p))
    : (p = i[3]);
  let m;
  i[4] === s
    ? (m = i[5])
    : ((m = (e) => void s(e === `general` ? `/settings/worktrees` : `/settings/worktrees?tab=environments`)),
      (i[4] = s),
      (i[5] = m));
  let h;
  return (
    i[6] !== a || i[7] !== l || i[8] !== m
      ? ((h = (0, f.jsx)(c, { ariaLabel: l, selectedKey: a, tabs: p, variant: `toolbar`, onSelect: m })),
        (i[6] = a),
        (i[7] = l),
        (i[8] = m),
        (i[9] = h))
      : (h = i[9]),
    h
  );
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = o()), a(), i(), l(), (f = s()));
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=settings-tabs-7db1edf2adfc.js.map
