import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  PBt as r,
  Qst as i,
  Yst as a,
  ZSt as o,
  ast as s,
  iCt as c,
  ist as l,
  mCt as u,
  nCt as d,
  zst as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as p,
  G4n as m,
  Ghr as h,
  Hfr as g,
  Ipr as _,
  Jfr as v,
  K4n as y,
  KBr as b,
  Khr as x,
  Lpr as S,
  Wfr as C,
  XLr as w,
  fxr as T,
  gxr as E,
  njr as D,
  qfr as O,
  tjr as k,
  xjr as A,
} from "./app-initial-ad16eaadf81f.js";
function j({ buildFlavor: e, codexHome: t, isOpenAICuratedRemoteMarketplaceEnabled: n, workspaceRoots: r }) {
  return {
    buildFlavor: e,
    cwds: O({ codexHome: t, hostId: a, workspaceRoots: r }),
    hiddenMarketplaceNames: g({ isOpenAICuratedRemoteMarketplaceEnabled: n }),
    marketplaceKinds: C({
      additionalMarketplaceKinds: [],
      includeRemoteCatalog: !0,
      includeVerticalCatalog: !n,
    }),
  };
}
var M;
function N() {
  return (N = e(() => {
    (o(),
      v(),
      s(),
      t(),
      b(),
      n(),
      y(),
      (M = u(i, (e) => ({
        queryKey: [...m, e],
        queryFn: () => {
          let t = l.pluginScheduledTasks;
          if (t == null) throw Error(`Plugin scheduled tasks are unavailable`);
          return t.list(e);
        },
        staleTime: f.ONE_MINUTE,
      }))));
  }))();
}
function P(e) {
  let t = (0, F.c)(14),
    { hostId: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { name: `automations.local` }), (t[0] = r))
    : (r = t[0]);
  let i = d(k, r).isCapable,
    o = p(`3309093858`),
    s = p(`4218407052`),
    u;
  t[1] !== i || t[2] !== n
    ? ((u = { enabled: i, hostId: n }), (t[1] = i), (t[2] = n), (t[3] = u))
    : (u = t[3]);
  let f = S(u),
    m;
  t[4] === i ? (m = t[5]) : ((m = { enabled: i }), (t[4] = i), (t[5] = m));
  let h = x(a, m),
    g;
  t[6] === i ? (g = t[7]) : ((g = { enabled: i }), (t[6] = i), (t[7] = g));
  let _ = c(E, g),
    v = i && n === `local` && o && f && l.pluginScheduledTasks != null,
    y;
  t[8] !== h || t[9] !== s || t[10] !== _.data?.roots
    ? ((y = j({
        buildFlavor: w(),
        codexHome: h,
        isOpenAICuratedRemoteMarketplaceEnabled: s,
        workspaceRoots: _.data?.roots,
      })),
      (t[8] = h),
      (t[9] = s),
      (t[10] = _.data?.roots),
      (t[11] = y))
    : (y = t[11]);
  let b = v && _.isFetched,
    C;
  t[12] === b ? (C = t[13]) : ((C = { enabled: b }), (t[12] = b), (t[13] = C));
  let T = d(M, y, C);
  return v ? T.data : void 0;
}
var F;
function I() {
  return (I = e(() => {
    ((F = r()), o(), D(), h(), _(), s(), T(), b(), A(), N());
  }))();
}
export { P as n, I as t };
//# sourceMappingURL=use-plugin-scheduled-tasks-59ede7b03fe2.js.map
