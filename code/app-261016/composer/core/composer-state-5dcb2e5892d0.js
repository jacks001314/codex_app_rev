import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ACt as t, CCt as n, ZSt as r, kCt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as a,
  Dfr as o,
  FDr as s,
  Fer as c,
  Hon as l,
  MOr as u,
  NAn as d,
  NDr as f,
  Tfr as p,
  Uon as m,
  eer as h,
  vBr as g,
  wAn as _,
  wfr as v,
  yBr as y,
  zOr as b,
} from "./app-initial-ad16eaadf81f.js";
import { i as x, r as S } from "./hosted-template-catalog-f2a814015bfa.js";
import { a as C, o as w, r as T, s as E } from "./policy-7a95f76d2f92.js";
import { a as D, c as O, d as k, n as A, s as j, u as M } from "./state-3908339c33b0.js";
async function N(e, n, r, i, s) {
  let c = t(e, a, f(n));
  c?.set(P, !1);
  let u = l(i);
  if (u.length === 0) return (await s()) !== !1;
  if (c == null) return !1;
  let d = c.get(k),
    p = u.filter((e) => e.accountId === d?.accountId && e.userId === (d?.userId ?? null)).map((e) => e.id);
  if (d == null || p.length !== u.length) return (await s([])) !== !1;
  let m = c.get(F),
    h = r === `tpp` && o(m) && c.get(g, m).data?.find((e) => e.name === `plugins`)?.enabled !== !1,
    [_, y] = await Promise.allSettled([
      c.get(j) === !0 ? c.query.getOrFetch(M, `installed`) : [],
      h ? v(c, { accountId: d.accountId, hostId: m, roots: void 0 }, `composer`) : [],
    ]);
  if (c.get(k)?.accountId !== d.accountId || c.get(k)?.userId !== d.userId) return !1;
  let b = c.get(D),
    x = c.get(O),
    w = new Set([
      ...S(y.status === `fulfilled` ? y.value : []).map(({ skill: e }) => e.plugin_release_skill_id),
      ...(_.status === `fulfilled` ? _.value : [])
        .filter(
          (e) =>
            c.get(j) === !0 &&
            e.enabled &&
            e.permissions?.can_read !== !1 &&
            E(e, r) &&
            T(e, x) &&
            C(e, b) == null,
        )
        .map((e) => e.id),
    ]);
  return (_.status === `rejected` || y.status === `rejected`) && p.some((e) => !w.has(e))
    ? (c.set(P, !0), !1)
    : (await s([...new Set(p.filter((e) => w.has(e)))])) !== !1;
}
var P, F;
function I() {
  return (I = e(() => {
    (r(),
      h(),
      x(),
      m(),
      p(),
      y(),
      s(),
      b(),
      _(),
      w(),
      A(),
      (P = i(a, !1)),
      (F = n(u, ({ get: e, scope: t }) => (t.value.routeKind === `other` ? e(c, null) : e(d)))));
  }))();
}
export { N as i, I as n, P as r, F as t };
//# sourceMappingURL=composer-state-5dcb2e5892d0.js.map
