import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  FKt as n,
  Hvt as r,
  KYt as i,
  Nvt as a,
  O3t as o,
  Pvt as s,
  RKt as c,
  RWt as l,
  TJt as u,
  Uvt as d,
  V3t as f,
  Wvt as p,
  Xyt as m,
  Yqt as h,
  Yyt as g,
  a3t as _,
  ayt as v,
  lxt as y,
  o3t as b,
  qqt as x,
  wJt as S,
} from "./app-initial-f094ef01c64d.js";
import {
  $p as C,
  Kp as w,
  Qp as T,
  Up as E,
  Wp as D,
  Xp as O,
  rm as k,
  um as A,
} from "./app-primary-4c40d73a1074.js";
var j,
  M,
  N,
  P,
  F = e(() => {
    ((j = t(l(), 1)),
      o(),
      y(),
      m(),
      k(),
      v(),
      b(),
      x(),
      i(),
      u(),
      c(),
      T(),
      d(),
      a(),
      E(),
      (M = 50),
      (N = 14),
      (P = f(_, ({ categorySlug: e, hostId: t, visibility: i }, { get: a }) => {
        let o = a(h, { hostId: t }).data?.roots,
          c = a(D, t).data,
          l = o == null ? void 0 : a(s, { accountId: null, hostId: t, roots: o }).data,
          u = c == null ? void 0 : C(c.plugins, i),
          d =
            c == null || u == null
              ? void 0
              : A({
                  connectedPlugins: [],
                  featuredPluginIds: c.featuredPluginIds,
                  plugins: u,
                }).find(({ section: t }) => t.id === `plugins-${e}`)?.plugins,
          f = new Map();
        for (let e of [...(l ?? []), ...(u ?? [])])
          for (let t of [
            e.plugin.id,
            e.plugin.remotePluginId,
            e.plugin.shareContext?.remotePluginId,
          ])
            t != null && f.set(t, e);
        let m = new Set(i.hiddenPluginIds);
        return {
          enabled: !0,
          getNextPageParam: (e) => e.pagination.next_page_token ?? void 0,
          initialPageParam: null,
          queryFn: ({ pageParam: t, signal: i }) =>
            n.safeGet(`/ps/plugin-categories/{category_slug}/plugins`, {
              parameters: {
                path: { category_slug: e },
                query: { scope: `GLOBAL`, limit: M, pageToken: t ?? void 0 },
              },
              additionalHeaders: g,
              signal: r(i),
            }),
          queryKey: [...p, `category`, t, e],
          retry: !1,
          select: (e) => {
            if (l == null || c == null) return;
            let t = e.pages.flatMap((e) =>
              e.plugins.flatMap((e) => {
                let t = f.get(e.id) ?? null;
                return m.has(e.id) || (t != null && m.has(t.plugin.id)) ? [] : [O(e, t)];
              }),
            );
            return (0, j.default)(
              [...t.slice(0, N), ...(d?.map(w) ?? []), ...t.slice(N)],
              ({ id: e, remotePluginId: t }) => t ?? e,
            );
          },
          staleTime: S.ONE_MINUTE,
        };
      })));
  });
export { F as n, P as t };
//# sourceMappingURL=category-plugins-query-7ca0a2ae5684.js.map
