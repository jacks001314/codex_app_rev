import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, _xt as r, vzt as i, wxt as a, yzt as o } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as s,
  Dor as c,
  MCr as l,
  RCr as u,
  Xet as d,
  Zet as f,
  ay as p,
  ek as m,
  gwr as h,
  ik as g,
  lqt as _,
  nk as v,
  rk as y,
  ry as b,
  sqt as x,
  xsn as S,
} from "./app-initial-5851df3f6cb1.js";
import { a as C, n as w } from "./actions-2467c5f5431b.js";
import { n as T, t as E } from "./open-60c0170075e3.js";
function D(e) {
  let n = (0, O.c)(14),
    { navigationKey: r, target: i, preserveRestoredSelection: o } = e,
    s = o === void 0 || o,
    u = t(h),
    d = a(),
    p;
  n[0] !== d || n[1] !== r || n[2] !== s || n[3] !== u || n[4] !== i.collection
    ? ((p = () => {
        b(d) != null ||
          u.get(g) ||
          u.get(v).clientThreadId !== u.value.clientThreadId ||
          u.get(y) === r ||
          (s && u.get(f) === r) ||
          (u.get(C)?.clientThreadId === u.value.clientThreadId && u.get(C)?.navigationKey === r) ||
          T(u, i.collection, {
            addToHistory: !1,
            collectionHref: i.collection === `sites` ? d.pathname + d.search : void 0,
            reuseBrowseTab: i.collection === `all`,
          });
      }),
      (n[0] = d),
      (n[1] = r),
      (n[2] = s),
      (n[3] = u),
      (n[4] = i.collection),
      (n[5] = p))
    : (p = n[5]);
  let m = (0, k.useEffectEvent)(p),
    x;
  n[6] !== m || n[7] !== u
    ? ((x = () =>
        u.watch((e) => {
          let { get: t } = e;
          t(c) != null && t(_) && t(l) && !t(g) && m();
        })),
      (n[6] = m),
      (n[7] = u),
      (n[8] = x))
    : (x = n[8]);
  let S;
  return (
    n[9] !== r || n[10] !== s || n[11] !== u || n[12] !== i.collection
      ? ((S = [r, s, u, i.collection]),
        (n[9] = r),
        (n[10] = s),
        (n[11] = u),
        (n[12] = i.collection),
        (n[13] = S))
      : (S = n[13]),
    (0, k.useLayoutEffect)(x, S),
    null
  );
}
var O, k;
function A() {
  return (A = e(() => {
    ((O = i()), n(), (k = o()), r(), u(), S(), s(), d(), p(), w(), x(), m(), E());
  }))();
}
A();
export { D as SpacesWorkspaceContentRoute };
//# sourceMappingURL=route-view-55050b677f26.js.map
