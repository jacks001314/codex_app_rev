import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $0t as n,
  C6t as r,
  DNt as i,
  ENt as a,
  HNt as o,
  I6t as s,
  IYt as c,
  Kqt as l,
  TNt as u,
  Uqt as d,
  _Nt as f,
  _Pt as p,
  bJt as m,
  dFt as h,
  e6t as g,
  gNt as _,
  hKt as v,
  t6t as y,
  vKt as b,
  vPt as x,
  xJt as S,
} from "./app-initial-bcc2ff475eb6.js";
import {
  $h as C,
  Bh as w,
  Hh as T,
  Jh as E,
  Kh as D,
  Yh as O,
  og as k,
  zh as A,
} from "./app-primary-b36a719dba75.js";
var j,
  M,
  N,
  P,
  F = e(() => {
    ((j = t(n(), 1)),
      r(),
      h(),
      x(),
      C(),
      o(),
      y(),
      v(),
      c(),
      S(),
      l(),
      E(),
      a(),
      _(),
      A(),
      (M = 50),
      (N = 14),
      (P = s(g, ({ categorySlug: e, hostId: t, visibility: n }, { get: r }) => {
        let a = r(b, { hostId: t }).data?.roots,
          o = r(w, t).data,
          s = a == null ? void 0 : r(f, { accountId: null, hostId: t, roots: a }).data,
          c = o == null ? void 0 : O(o.plugins, n),
          l =
            o == null || c == null
              ? void 0
              : k({
                  connectedPlugins: [],
                  featuredPluginIds: o.featuredPluginIds,
                  plugins: c,
                }).find(({ section: t }) => t.id === `plugins-${e}`)?.plugins,
          h = new Map();
        for (let e of [...(s ?? []), ...(c ?? [])])
          for (let t of [
            e.plugin.id,
            e.plugin.remotePluginId,
            e.plugin.shareContext?.remotePluginId,
          ])
            t != null && h.set(t, e);
        let g = new Set(n.hiddenPluginIds);
        return {
          enabled: !0,
          getNextPageParam: (e) => e.pagination.next_page_token ?? void 0,
          initialPageParam: null,
          queryFn: ({ pageParam: t, signal: n }) =>
            d.safeGet(`/ps/plugin-categories/{category_slug}/plugins`, {
              parameters: {
                path: { category_slug: e },
                query: { scope: `GLOBAL`, limit: M, pageToken: t ?? void 0 },
              },
              additionalHeaders: p(),
              signal: u(n),
            }),
          queryKey: [...i, `category`, t, e],
          retry: !1,
          select: (e) => {
            if (s == null || o == null) return;
            let t = e.pages.flatMap((e) =>
              e.plugins.flatMap((e) => {
                let t = h.get(e.id) ?? null;
                return g.has(e.id) || (t != null && g.has(t.plugin.id)) ? [] : [D(e, t)];
              }),
            );
            return (0, j.default)(
              [...t.slice(0, N), ...(l?.map(T) ?? []), ...t.slice(N)],
              ({ id: e, remotePluginId: t }) => t ?? e,
            );
          },
          staleTime: m.ONE_MINUTE,
        };
      })));
  });
export { F as n, P as t };
//# sourceMappingURL=category-plugins-query-83e1d3fb8cd4.js.map
