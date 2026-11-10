import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { t } from "./compiler-runtime-292acb85cdd3.js";
import {
  A6t as n,
  C6t as r,
  EW as i,
  Got as a,
  HNt as o,
  IYt as s,
  Kot as c,
  LPt as l,
  MNt as u,
  Nqt as d,
  O6t as f,
  PNt as p,
  Pqt as m,
  R6t as h,
  RPt as g,
  TW as _,
  _Ft as v,
  bJt as y,
  cYt as b,
  e6t as x,
  gFt as S,
  gU as C,
  hKt as w,
  hU as T,
  t3t as E,
  t6t as D,
  uYt as O,
  xJt as k,
  yKt as A,
  zNt as j,
} from "./app-initial-bcc2ff475eb6.js";
function M({
  buildFlavor: e,
  codexHome: t,
  isOpenAICuratedRemoteMarketplaceEnabled: n,
  workspaceRoots: r,
}) {
  return {
    buildFlavor: e,
    cwds: j({ codexHome: t, hostId: E, workspaceRoots: r }),
    hiddenMarketplaceNames: u({ isOpenAICuratedRemoteMarketplaceEnabled: n }),
    marketplaceKinds: p({
      additionalMarketplaceKinds: [],
      includeRemoteCatalog: !0,
      includeVerticalCatalog: !n,
    }),
  };
}
var N,
  P = e(() => {
    (r(),
      o(),
      i(),
      D(),
      s(),
      k(),
      c(),
      (N = h(x, (e) => ({
        queryKey: [...a, e],
        queryFn: () => {
          let t = _.pluginScheduledTasks;
          if (t == null) throw Error(`Plugin scheduled tasks are unavailable`);
          return t.list(e);
        },
        staleTime: y.ONE_MINUTE,
      }))));
  });
function F(e) {
  let t = (0, I.c)(14),
    { hostId: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { name: `automations.local` }), (t[0] = i))
    : (i = t[0]);
  let a = f(T, i).isCapable,
    o = O(`3309093858`),
    s = O(`4218407052`),
    c;
  t[1] !== a || t[2] !== r
    ? ((c = { enabled: a, hostId: r }), (t[1] = a), (t[2] = r), (t[3] = c))
    : (c = t[3]);
  let l = g(c),
    u;
  t[4] === a ? (u = t[5]) : ((u = { enabled: a }), (t[4] = a), (t[5] = u));
  let p = v(E, u),
    m;
  t[6] === a ? (m = t[7]) : ((m = { enabled: a }), (t[6] = a), (t[7] = m));
  let h = n(A, m),
    y = a && r === `local` && o && l && _.pluginScheduledTasks != null,
    b;
  t[8] !== p || t[9] !== s || t[10] !== h.data?.roots
    ? ((b = M({
        buildFlavor: d(),
        codexHome: p,
        isOpenAICuratedRemoteMarketplaceEnabled: s,
        workspaceRoots: h.data?.roots,
      })),
      (t[8] = p),
      (t[9] = s),
      (t[10] = h.data?.roots),
      (t[11] = b))
    : (b = t[11]);
  let x = y && h.isFetched,
    S;
  t[12] === x ? (S = t[13]) : ((S = { enabled: x }), (t[12] = x), (t[13] = S));
  let C = f(N, b, S);
  return y ? C.data : void 0;
}
var I,
  L = e(() => {
    ((I = t()), r(), C(), S(), l(), i(), w(), s(), b(), m(), P());
  });
export { F as n, L as t };
//# sourceMappingURL=use-plugin-scheduled-tasks-1060a7e67f6b.js.map
