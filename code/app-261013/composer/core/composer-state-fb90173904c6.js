import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, fSt as n, oSt as r, pSt as i } from "./app-shared-bbfeca5e5737.js";
import {
  $8n as a,
  Cwr as o,
  Fcr as s,
  Icr as c,
  LPr as l,
  RPr as u,
  Rcr as d,
  Srn as f,
  _Cr as p,
  gwr as m,
  sCr as h,
  tDn as g,
  uDn as _,
  v8n as v,
  xrn as y,
  yCr as b,
} from "./app-initial-5851df3f6cb1.js";
import { i as x, r as S } from "./hosted-template-catalog-e317c72cbbc5.js";
import { a as C, o as w, r as T, s as E } from "./policy-7a95f76d2f92.js";
import { a as D, c as O, d as k, n as A, s as j, u as M } from "./state-d523931c59ee.js";
async function N(e, t, n, r, a) {
  let o = i(e, h, p(t));
  o?.set(P, !1);
  let c = y(r);
  if (c.length === 0) return (await a()) !== !1;
  if (o == null) return !1;
  let u = o.get(k),
    f = c.filter((e) => e.accountId === u?.accountId && e.userId === (u?.userId ?? null)).map((e) => e.id);
  if (u == null || f.length !== c.length) return (await a([])) !== !1;
  let m = o.get(F),
    g = n === `tpp` && d(m) && o.get(l, m).data?.find((e) => e.name === `plugins`)?.enabled !== !1,
    [_, v] = await Promise.allSettled([
      o.get(j) === !0 ? o.query.getOrFetch(M, `installed`) : [],
      g ? s(o, { accountId: u.accountId, hostId: m, roots: void 0 }, `composer`) : [],
    ]);
  if (o.get(k)?.accountId !== u.accountId || o.get(k)?.userId !== u.userId) return !1;
  let b = o.get(D),
    x = o.get(O),
    w = new Set([
      ...S(v.status === `fulfilled` ? v.value : []).map(({ skill: e }) => e.plugin_release_skill_id),
      ...(_.status === `fulfilled` ? _.value : [])
        .filter(
          (e) =>
            o.get(j) === !0 &&
            e.enabled &&
            e.permissions?.can_read !== !1 &&
            E(e, n) &&
            T(e, x) &&
            C(e, b) == null,
        )
        .map((e) => e.id),
    ]);
  return (_.status === `rejected` || v.status === `rejected`) && f.some((e) => !w.has(e))
    ? (o.set(P, !0), !1)
    : (await a([...new Set(f.filter((e) => w.has(e)))])) !== !1;
}
var P, F;
function I() {
  return (I = e(() => {
    (t(),
      v(),
      x(),
      f(),
      c(),
      u(),
      b(),
      o(),
      g(),
      w(),
      A(),
      (P = n(h, !1)),
      (F = r(m, ({ get: e, scope: t }) => (t.value.routeKind === `other` ? e(a, null) : e(_)))));
  }))();
}
export { N as i, I as n, P as r, F as t };
//# sourceMappingURL=composer-state-fb90173904c6.js.map
