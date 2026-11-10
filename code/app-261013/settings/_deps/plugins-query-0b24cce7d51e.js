import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Fat as n, Pat as r, Pxt as i, Yxt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import {
  Fet as s,
  Gcr as c,
  Hur as l,
  Jcr as u,
  Pet as d,
  Vur as f,
  Wcr as p,
  alr as m,
  hOr as h,
  iPr as g,
  sPr as _,
} from "./app-initial-5851df3f6cb1.js";
var v, y, b;
function x() {
  return (x = e(() => {
    (i(),
      h(),
      d(),
      l(),
      m(),
      o(),
      n(),
      _(),
      c(),
      (v = 50),
      (y = a(t, ({ hostId: e, isWorkspaceAccount: t }, { get: n, scope: i }) => ({
        enabled: !0,
        getNextPageParam: (e) =>
          e.cursor.userPageToken != null || e.cursor.workspaceCreatedPageToken != null ? e.cursor : void 0,
        initialPageParam: null,
        queryFn: async ({ pageParam: n, signal: r }) => {
          if ((await s(i, e)) !== `chatgpt`)
            return { cursor: { userPageToken: null, workspaceCreatedPageToken: null }, plugins: [] };
          let a = p(r),
            [o, c] = await Promise.all([
              t && (n == null || n.workspaceCreatedPageToken != null)
                ? g.safeGet(`/ps/plugins/workspace/created`, {
                    surface: `plugin_directory`,
                    parameters: { query: { limit: v, pageToken: n?.workspaceCreatedPageToken ?? void 0 } },
                    additionalHeaders: f(),
                    signal: a,
                  })
                : void 0,
              n == null || n.userPageToken != null
                ? g.safeGet(`/ps/plugins/list`, {
                    surface: `plugin_directory`,
                    parameters: { query: { scope: `USER`, limit: v, pageToken: n?.userPageToken ?? void 0 } },
                    additionalHeaders: f(),
                    signal: a,
                  })
                : void 0,
            ]);
          return {
            cursor: {
              userPageToken: c?.pagination.next_page_token ?? null,
              workspaceCreatedPageToken: o?.pagination.next_page_token ?? null,
            },
            plugins: [...(o?.plugins ?? []), ...(c?.plugins ?? [])],
          };
        },
        queryKey: [...u, `personal-category`, `created`, e, t ? `workspace` : `user`],
        retry: !1,
        select: (e) => e.pages.flatMap(({ plugins: e }) => e),
        staleTime: r.ONE_MINUTE,
      }))),
      (b = a(t, (e, { get: t, scope: n }) => ({
        enabled: !0,
        getNextPageParam: (e) => e.pagination.next_page_token ?? void 0,
        initialPageParam: null,
        queryFn: async ({ pageParam: t, signal: r }) =>
          (await s(n, e)) === `chatgpt`
            ? g.safeGet(`/ps/plugins/workspace/shared`, {
                surface: `plugin_directory`,
                parameters: { query: { limit: v, pageToken: t ?? void 0 } },
                additionalHeaders: f(),
                signal: p(r),
              })
            : { plugins: [], pagination: { limit: v, next_page_token: null } },
        queryKey: [...u, `personal-category`, `shared`, e],
        retry: !1,
        select: (e) => e.pages.flatMap(({ plugins: e }) => e),
        staleTime: r.ONE_MINUTE,
      }))));
  }))();
}
export { x as n, b as r, y as t };
//# sourceMappingURL=plugins-query-0b24cce7d51e.js.map
