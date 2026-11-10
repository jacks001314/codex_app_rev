import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  NSt as r,
  PBt as i,
  USt as a,
  VSt as o,
  WSt as s,
  ZSt as c,
  _St as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Vt as u,
  $cr as d,
  ADn as f,
  Bk as p,
  Cnt as m,
  Cy as h,
  Ey as g,
  Ik as _,
  JDr as v,
  MOr as y,
  Oy as b,
  PDn as x,
  Rk as S,
  Snt as C,
  Ty as w,
  Ycr as T,
  ZVt as E,
  bOr as D,
  eOr as O,
  elr as k,
  gur as A,
  hdn as j,
  zOr as M,
  zk as N,
} from "./app-initial-ad16eaadf81f.js";
import { a as P, n as F } from "./actions-e51654d88035.js";
import { n as I, t as L } from "./open-808e0a5a8ffe.js";
function R(e) {
  let n = (0, z.c)(16),
    { navigationKey: r, target: i, preserveRestoredSelection: c } = e,
    d = c === void 0 || c,
    f = t(y),
    g = o(),
    _ = a(),
    C = s(),
    E;
  n[0] !== g || n[1] !== _ || n[2] !== r || n[3] !== C || n[4] !== d || n[5] !== f || n[6] !== i.collection
    ? ((E = (e) => {
        if (f.get(T)?.key !== g.key || !k(f) || f.get(w) === g.key) return;
        let t = g.state?.sidebarPrimaryContent === !0 && C !== l.Pop;
        if (t && f.get(D) !== e) {
          b(f, g, _, null, e);
          return;
        }
        if (
          !(
            (h(g) != null && !t) ||
            f.get(p) ||
            f.get(S).clientThreadId !== f.value.clientThreadId ||
            f.get(N) === r ||
            (d && !t && f.get(m) === r) ||
            (f.get(P)?.clientThreadId === f.value.clientThreadId && f.get(P)?.navigationKey === r)
          ) &&
          I(f, i.collection, {
            addToHistory: !1,
            collectionHref: i.collection === `sites` ? g.pathname + g.search : void 0,
            reuseBrowseTab: i.collection === `all`,
          }) &&
          t
        ) {
          let e = f.get(x.activeTab$);
          e != null && b(f, g, _, e, f.get(D));
        }
      }),
      (n[0] = g),
      (n[1] = _),
      (n[2] = r),
      (n[3] = C),
      (n[4] = d),
      (n[5] = f),
      (n[6] = i.collection),
      (n[7] = E))
    : (E = n[7]);
  let O = (0, B.useEffectEvent)(E),
    j;
  n[8] !== O || n[9] !== f
    ? ((j = () => {
        let e = f.get(D);
        return f.watch((t) => {
          let { get: n } = t;
          n(A) != null && n(u) && n(v) && !n(p) && O(e);
        });
      }),
      (n[8] = O),
      (n[9] = f),
      (n[10] = j))
    : (j = n[10]);
  let M;
  return (
    n[11] !== r || n[12] !== d || n[13] !== f || n[14] !== i.collection
      ? ((M = [r, d, f, i.collection]),
        (n[11] = r),
        (n[12] = d),
        (n[13] = f),
        (n[14] = i.collection),
        (n[15] = M))
      : (M = n[15]),
    (0, B.useLayoutEffect)(j, M),
    null
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = i()), c(), (B = n()), r(), O(), f(), d(), j(), M(), C(), g(), F(), E(), _(), L());
  }))();
}
V();
export { R as SpacesWorkspaceContentRoute };
//# sourceMappingURL=route-view-52eebcc839c0.js.map
