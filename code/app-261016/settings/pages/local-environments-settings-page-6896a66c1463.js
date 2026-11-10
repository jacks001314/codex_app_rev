import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, NSt as n, PBt as r, SSt as i, VSt as a } from "./app-shared-2feb3d4c6fcc.js";
import { Cjr as o, KBr as s, iat as c, oat as l, xjr as u } from "./app-initial-ad16eaadf81f.js";
import { n as d, t as f } from "./local-environments-settings-content-5bc177910d1e.js";
function p() {
  let e = (0, m.c)(13),
    t = a(),
    { selectedHostId: n } = l(),
    r = o(`375130565`),
    s;
  if (
    e[0] !== r ||
    e[1] !== t.hash ||
    e[2] !== t.pathname ||
    e[3] !== t.search ||
    e[4] !== t.state ||
    e[5] !== n
  ) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let a = new URLSearchParams(t.search);
      if (
        n === `local` &&
        r &&
        t.pathname === `/settings/local-environments` &&
        (t.search === `` || a.get(`view`) === `personal-vault`)
      ) {
        a.get(`view`) === `personal-vault` && (a.delete(`view`), a.set(`tab`, `personal-vault`));
        let n = { pathname: `/settings/codex-cloud`, search: a.toString(), hash: t.hash },
          r;
        (e[7] !== t.state || e[8] !== n
          ? ((r = (0, h.jsx)(i, { to: n, state: t.state, replace: !0 })),
            (e[7] = t.state),
            (e[8] = n),
            (e[9] = r))
          : (r = e[9]),
          (s = r));
        break bb0;
      }
    }
    ((e[0] = r),
      (e[1] = t.hash),
      (e[2] = t.pathname),
      (e[3] = t.search),
      (e[4] = t.state),
      (e[5] = n),
      (e[6] = s));
  } else s = e[6];
  if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
  let c = `${n}:${t.key}`,
    u;
  return (
    e[10] !== n || e[11] !== c
      ? ((u = (0, h.jsx)(f, { settingsHostId: n }, c)), (e[10] = n), (e[11] = c), (e[12] = u))
      : (u = e[12]),
    u
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = r()), n(), c(), s(), u(), d(), (h = t()));
  }))();
}
g();
export { p as LocalEnvironmentsSettings };
//# sourceMappingURL=local-environments-settings-page-6896a66c1463.js.map
