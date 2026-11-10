import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Fat as r,
  Pat as i,
  Pxt as a,
  USt as o,
  Yxt as s,
  Zxt as c,
  sMt as l,
  wot as u,
  zSt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fet as f,
  Gcr as p,
  Hur as m,
  Icr as h,
  Jcr as g,
  Lcr as _,
  Pet as v,
  Vur as y,
  Wcr as b,
  _2 as x,
  __r as S,
  alr as C,
  b2 as w,
  e2 as T,
  f2 as E,
  hOr as D,
  iPr as O,
  l2 as k,
  m_r as A,
  oFr as j,
  r2 as M,
  s2 as N,
  sPr as P,
  t2 as F,
  u2 as I,
} from "./app-initial-5851df3f6cb1.js";
var L, R, z, B, V;
function H() {
  return (H = e(() => {
    (d(),
      (L = t(l(), 1)),
      a(),
      D(),
      v(),
      m(),
      E(),
      C(),
      u(),
      A(),
      j(),
      r(),
      P(),
      k(),
      p(),
      h(),
      T(),
      (R = 50),
      (z = 14),
      (B = c(n, ({ accountId: e, categorySlug: t, hostId: n }) => ({
        queryKey: [...g, `category-metadata`, n, t, n === `local` ? e : null],
        queryFn: o,
        gcTime: 1 / 0,
        staleTime: i.ONE_MINUTE,
      }))),
      (V = s(
        n,
        ({ categorySlug: e, hostId: t, searchQuery: n = ``, visibility: r }, { get: a, scope: o }) => {
          let s = n.trim(),
            c = a(S, { hostId: t }).data?.roots,
            l = a(F, t).data,
            u =
              c == null
                ? void 0
                : a(_, { accountId: null, hostId: t, roots: c, productContext: `catalog` }).data,
            d = l == null ? void 0 : I(l.plugins, r),
            p =
              l == null || d == null
                ? void 0
                : w({ connectedPlugins: [], featuredPluginIds: l.featuredPluginIds, plugins: d }).find(
                    ({ section: t }) => t.id === `plugins-${e}`,
                  )?.plugins,
            m = new Map();
          for (let e of [...(u ?? []), ...(d ?? [])])
            for (let t of [e.plugin.id, e.plugin.remotePluginId, e.plugin.shareContext?.remotePluginId])
              t != null && m.set(t, e);
          let h = new Set(r.hiddenPluginIds);
          return {
            enabled: !0,
            getNextPageParam: (e) => e.pagination.next_page_token ?? void 0,
            initialPageParam: null,
            queryFn: async ({ pageParam: n, signal: r }) => {
              if ((await f(o, t)) !== `chatgpt`)
                return { plugins: [], pagination: { limit: R, next_page_token: null } };
              let i = await O.safeGet(`/ps/plugin-categories/{category_slug}/plugins`, {
                surface: `plugin_directory`,
                parameters: {
                  path: { category_slug: e },
                  query: { scope: `GLOBAL`, q: s || void 0, limit: R, pageToken: n ?? void 0 },
                },
                additionalHeaders: y(),
                signal: b(r),
              });
              return (
                i.category !== void 0 &&
                  o.query.setData(B, { accountId: null, categorySlug: e, hostId: t }, i.category),
                i
              );
            },
            queryKey: [...g, `category`, t, e, ...(s.length === 0 ? [] : [`search`, s])],
            retry: !1,
            select: (e) => {
              if (u == null || l == null) return;
              let t = e.pages.flatMap((e) =>
                e.plugins.flatMap((e) => {
                  let t = m.get(e.id) ?? null;
                  return h.has(e.id) || (t != null && h.has(t.plugin.id)) ? [] : [N(e, t)];
                }),
              );
              return (0, L.default)(
                [
                  ...t.slice(0, z),
                  ...(p == null ? [] : (s.length === 0 ? p : x({ plugins: p, query: s })).map(M)),
                  ...t.slice(z),
                ],
                ({ id: e, remotePluginId: t }) => t ?? e,
              );
            },
            staleTime: i.ONE_MINUTE,
          };
        },
      )));
  }))();
}
export { H as n, B as r, V as t };
//# sourceMappingURL=category-plugins-query-ca6f8ea98615.js.map
