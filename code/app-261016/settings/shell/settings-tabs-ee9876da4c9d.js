import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  NSt as n,
  PBt as r,
  USt as i,
  XOt as a,
  okt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { do as c, uo as l } from "./app-initial-ad16eaadf81f.js";
function u(e) {
  let t = (0, d.c)(10),
    { selectedTab: n } = e,
    r = o(),
    a = i(),
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = r.formatMessage({
        id: `settings.worktrees.tabs`,
        defaultMessage: `Worktrees settings`,
        description: `Accessible label for worktree settings tabs`,
      })),
      (t[0] = r),
      (t[1] = c));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        key: `general`,
        name: (0, f.jsx)(s, {
          id: `settings.worktrees.general`,
          defaultMessage: `General`,
          description: `Tab showing worktree management and cleanup settings`,
        }),
      }),
      (t[2] = u))
    : (u = t[2]);
  let p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = [
        u,
        {
          key: `environments`,
          name: (0, f.jsx)(s, {
            id: `settings.worktrees.environments`,
            defaultMessage: `Environments`,
            description: `Tab showing local environment setup for worktrees`,
          }),
        },
      ]),
      (t[3] = p))
    : (p = t[3]);
  let m;
  t[4] === a
    ? (m = t[5])
    : ((m = (e) => void a(e === `general` ? `/settings/worktrees` : `/settings/worktrees?tab=environments`)),
      (t[4] = a),
      (t[5] = m));
  let h;
  return (
    t[6] !== n || t[7] !== c || t[8] !== m
      ? ((h = (0, f.jsx)(l, { ariaLabel: c, selectedKey: n, tabs: p, variant: `toolbar`, onSelect: m })),
        (t[6] = n),
        (t[7] = c),
        (t[8] = m),
        (t[9] = h))
      : (h = t[9]),
    h
  );
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = r()), a(), n(), c(), (f = t()));
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=settings-tabs-ee9876da4c9d.js.map
