import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _xt as t, oxt as n, vzt as r, wxt as i, xMt as a } from "./app-shared-bbfeca5e5737.js";
import { Brt as o, Rrt as s, eDr as c, nDr as l, oFr as u } from "./app-initial-5851df3f6cb1.js";
import { n as d, t as f } from "./local-environments-settings-content-d0ef14df48a6.js";
function p() {
  let e = (0, m.c)(13),
    t = i(),
    { selectedHostId: r } = o(),
    a = l(`375130565`),
    s;
  if (
    e[0] !== a ||
    e[1] !== t.hash ||
    e[2] !== t.pathname ||
    e[3] !== t.search ||
    e[4] !== t.state ||
    e[5] !== r
  ) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let i = new URLSearchParams(t.search);
      if (
        r === `local` &&
        a &&
        t.pathname === `/settings/local-environments` &&
        (t.search === `` || i.get(`view`) === `personal-vault`)
      ) {
        i.get(`view`) === `personal-vault` && (i.delete(`view`), i.set(`tab`, `personal-vault`));
        let r = { pathname: `/settings/codex-cloud`, search: i.toString(), hash: t.hash },
          a;
        (e[7] !== t.state || e[8] !== r
          ? ((a = (0, h.jsx)(n, { to: r, state: t.state, replace: !0 })),
            (e[7] = t.state),
            (e[8] = r),
            (e[9] = a))
          : (a = e[9]),
          (s = a));
        break bb0;
      }
    }
    ((e[0] = a),
      (e[1] = t.hash),
      (e[2] = t.pathname),
      (e[3] = t.search),
      (e[4] = t.state),
      (e[5] = r),
      (e[6] = s));
  } else s = e[6];
  if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
  let c = `${r}:${t.key}`,
    u;
  return (
    e[10] !== r || e[11] !== c
      ? ((u = (0, h.jsx)(f, { settingsHostId: r }, c)), (e[10] = r), (e[11] = c), (e[12] = u))
      : (u = e[12]),
    u
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = r()), t(), s(), u(), c(), d(), (h = a()));
  }))();
}
g();
export { p as LocalEnvironmentsSettings };
//# sourceMappingURL=local-environments-settings-page-29f3cefc14fe.js.map
