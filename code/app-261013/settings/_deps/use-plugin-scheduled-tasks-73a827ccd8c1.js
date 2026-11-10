import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Kat as r,
  Pat as i,
  Pxt as a,
  Vxt as o,
  Zxt as s,
  iot as c,
  qat as l,
  vzt as u,
  wot as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  $cr as p,
  FEr as m,
  Jdr as h,
  Jlr as g,
  PEr as _,
  Ydr as v,
  alr as y,
  dNr as b,
  eDr as x,
  ilr as S,
  m1n as C,
  m_r as w,
  nDr as T,
  oFr as E,
  p1n as D,
  qlr as O,
  tlr as k,
  v_r as A,
} from "./app-initial-5851df3f6cb1.js";
function j({ buildFlavor: e, codexHome: t, isOpenAICuratedRemoteMarketplaceEnabled: n, workspaceRoots: r }) {
  return {
    buildFlavor: e,
    cwds: S({ codexHome: t, hostId: c, workspaceRoots: r }),
    hiddenMarketplaceNames: p({ isOpenAICuratedRemoteMarketplaceEnabled: n }),
    marketplaceKinds: k({
      additionalMarketplaceKinds: [],
      includeRemoteCatalog: !0,
      includeVerticalCatalog: !n,
    }),
  };
}
var M;
function N() {
  return (N = e(() => {
    (a(),
      y(),
      l(),
      d(),
      E(),
      n(),
      C(),
      (M = s(t, (e) => ({
        queryKey: [...D, e],
        queryFn: () => {
          let t = r.pluginScheduledTasks;
          if (t == null) throw Error(`Plugin scheduled tasks are unavailable`);
          return t.list(e);
        },
        staleTime: i.ONE_MINUTE,
      }))));
  }))();
}
function P(e) {
  let t = (0, F.c)(14),
    { hostId: n } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { name: `automations.local` }), (t[0] = i))
    : (i = t[0]);
  let a = f(_, i).isCapable,
    s = T(`3309093858`),
    l = T(`4218407052`),
    u;
  t[1] !== a || t[2] !== n
    ? ((u = { enabled: a, hostId: n }), (t[1] = a), (t[2] = n), (t[3] = u))
    : (u = t[3]);
  let d = g(u),
    p;
  t[4] === a ? (p = t[5]) : ((p = { enabled: a }), (t[4] = a), (t[5] = p));
  let m = v(c, p),
    h;
  t[6] === a ? (h = t[7]) : ((h = { enabled: a }), (t[6] = a), (t[7] = h));
  let y = o(A, h),
    x = a && n === `local` && s && d && r.pluginScheduledTasks != null,
    S;
  t[8] !== m || t[9] !== l || t[10] !== y.data?.roots
    ? ((S = j({
        buildFlavor: b(),
        codexHome: m,
        isOpenAICuratedRemoteMarketplaceEnabled: l,
        workspaceRoots: y.data?.roots,
      })),
      (t[8] = m),
      (t[9] = l),
      (t[10] = y.data?.roots),
      (t[11] = S))
    : (S = t[11]);
  let C = x && y.isFetched,
    w;
  t[12] === C ? (w = t[13]) : ((w = { enabled: C }), (t[12] = C), (t[13] = w));
  let E = f(M, S, w);
  return x ? E.data : void 0;
}
var F;
function I() {
  return (I = e(() => {
    ((F = u()), a(), m(), h(), O(), l(), w(), E(), x(), N());
  }))();
}
export { P as n, I as t };
//# sourceMappingURL=use-plugin-scheduled-tasks-73a827ccd8c1.js.map
