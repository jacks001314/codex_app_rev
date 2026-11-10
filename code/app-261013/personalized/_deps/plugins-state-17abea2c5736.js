import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Fat as r,
  Pat as i,
  Pxt as a,
  Yxt as o,
  Zxt as s,
  oSt as c,
  qxt as l,
  sMt as u,
  tMt as d,
  wot as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  D2 as p,
  E2 as m,
  Ekr as h,
  Gcr as g,
  Hur as _,
  OPr as v,
  Qjr as y,
  Skr as b,
  Udr as x,
  Vur as S,
  Wcr as C,
  Zjr as w,
  iPr as T,
  jkr as E,
  kPr as D,
  sPr as O,
  vdn as k,
  xdr as A,
  xkr as j,
} from "./app-initial-5851df3f6cb1.js";
function M(e) {
  return e != null && x(e.replace(/^plugin_/, ``)) === x(`asdk_app_69a1d78e929881919bba0dbda1f6436d`);
}
function N(e) {
  return e.status === `DISABLED_BY_ADMIN` || e.installation_policy === `NOT_AVAILABLE`;
}
function P(e, t) {
  return !t && [e.id, e.connector_id, e.canonical_app_id].some(M)
    ? !1
    : e.connector_id != null || !I.some((t) => e.id.startsWith(t));
}
var F, I, L;
function R() {
  return (R = e(() => {
    (a(),
      A(),
      m(),
      f(),
      w(),
      (F = `connector_bd313622bce5485cb3d0b338715f7108`),
      (I = [`asdk_app_`, `connector_`, `plugin_asdk_app_`, `plugin_connector_`]),
      (L = c(n, ({ get: e }) => new Set(p(e(y, `1349514884`)?.value).hiddenPluginIds))));
  }))();
}
var z, B;
function V() {
  return (V = e(() => {
    (a(),
      f(),
      R(),
      j(),
      r(),
      O(),
      (z = s(n, (e, { get: t, scope: n }) => ({
        enabled: t(E, e.accountId),
        queryFn: async ({ signal: t }) => {
          h(n, e.accountId);
          let r = await T.safeGet(`/ps/v2/service_accounts/{account_user_id}/workspace_connections`, {
            surface: `workspace_agents`,
            parameters: {
              path: { account_user_id: encodeURIComponent(e.serviceAccountId) },
              query: { team_id: e.teamId },
            },
            signal: t,
          });
          return (t.throwIfAborted(), h(n, e.accountId), r);
        },
        queryKey: [`team-connections`, e.accountId, e.teamId, e.serviceAccountId],
        select: (e) => ({
          ...e,
          links: e.links.filter((e) => !M(e.connector_id) && !M(e.canonical_plugin_id)),
        }),
        refetchOnMount: `always`,
        retry: !1,
        staleTime: i.ONE_MINUTE,
      }))),
      (B = l(n, (e, { scope: t }) => ({
        mutationFn: async ({ linkId: n, enabled: r }) => {
          (h(t, e.accountId), await t.query.cancel(z, e), h(t, e.accountId));
          try {
            let i = await T.safePatch(
              `/ps/v2/service_accounts/{account_user_id}/workspace_connections/{link_id}`,
              {
                surface: `workspace_agents`,
                parameters: {
                  path: {
                    account_user_id: encodeURIComponent(e.serviceAccountId),
                    link_id: encodeURIComponent(n),
                  },
                  query: { team_id: e.teamId },
                },
                requestBody: { enabled: r },
              },
            );
            return (t.query.setData(z, e, i), i);
          } finally {
            await Promise.all([t.query.invalidate(z, e), b(t, e.accountId, e.teamId)]);
          }
        },
        mutationKey: [`team-connections`, e.accountId, e.teamId, e.serviceAccountId],
      }))));
  }))();
}
function H(e) {
  return encodeURIComponent(e.serviceAccountId.slice(0, -(e.accountId.length + 2)));
}
function U(e, t) {
  let n = [e.connector_id, e.canonical_app_id, ...(e.release.app_ids ?? [])].filter((e) => e != null).map(x);
  return t.filter((t) => t.canonical_plugin_id === e.id || n.includes(x(t.connector_id)));
}
var W, G, K, q, J, Y, X, Z;
function Q() {
  return (Q = e(() => {
    ((W = t(d(), 1)),
      (G = t(u(), 1)),
      a(),
      _(),
      g(),
      f(),
      v(),
      R(),
      V(),
      j(),
      r(),
      O(),
      (K = 50),
      (q = S(`codex`)),
      (J = s(n, (e, { get: t, scope: n }) => {
        let r = t(D, `2794040019`);
        return {
          enabled: t(E, e.accountId),
          queryFn: async ({ signal: t }) => {
            h(n, e.accountId);
            let [r, { links: i }] = await Promise.all([
              T.safeGet(`/service-accounts/{service_account_user_id}/plugins/installed`, {
                parameters: { path: { service_account_user_id: H(e) }, query: { team_id: e.teamId } },
                signal: t,
              }),
              T.safePost(`/aip/connectors/service_accounts/links/list`, {
                surface: `workspace_agents`,
                requestBody: { service_account_account_user_id: e.serviceAccountId },
                additionalHeaders: q,
                signal: t,
              }),
            ]);
            return (
              t.throwIfAborted(),
              h(n, e.accountId),
              { plugins: r, links: i.filter((e) => e.visibility !== `HIDDEN`) }
            );
          },
          queryKey: [`service-account-plugins`, e.accountId, e.serviceAccountId, e.teamId],
          select: (e) => ({
            plugins: {
              ...e.plugins,
              items: e.plugins.items.filter((e) => r || !M(e.id)),
              uninstallable_plugin_ids: e.plugins.uninstallable_plugin_ids?.filter((e) => r || !M(e)),
            },
            links: e.links.filter((e) => r || !M(e.connector_id)),
            ownerIdentityByLinkId: Object.fromEntries(e.links.map((e) => [e.id, k(e)])),
          }),
          refetchOnMount: `always`,
          retry: !1,
          staleTime: i.ONE_MINUTE,
        };
      })),
      (Y = o(n, ({ view: e, query: t, ...n }, { get: r, scope: a }) => {
        let o = r(L),
          s = r(D, `2794040019`),
          { data: c, isError: l } = r(J, n),
          u = r(D, `971852422`) ? r(z, n) : void 0,
          d = u?.data?.links.flatMap((e) => (e.canonical_plugin_id == null ? [] : [e.canonical_plugin_id])),
          f =
            c == null
              ? void 0
              : [
                  ...new Set([...c.plugins.items.filter((e) => e.enabled).map((e) => e.id), ...(d ?? [])]),
                ].sort(),
          p = c?.links.map((e) => e.connector_id).sort(),
          m = f == null || p == null ? void 0 : [...new Set([...f, ...p])],
          g = new Set(u?.data?.links.filter((e) => e.enabled).map((e) => x(e.connector_id))),
          _ = new Set(
            u?.data?.links.flatMap((e) =>
              e.enabled && e.canonical_plugin_id != null ? [e.canonical_plugin_id] : [],
            ),
          ),
          v = u?.data?.available
            ? u.data.links.filter(
                (e) =>
                  (e.canonical_plugin_id == null || !_.has(e.canonical_plugin_id)) &&
                  !g.has(x(e.connector_id)),
              )
            : [],
          y =
            e === `all`
              ? [
                  ...new Set([
                    ...v.flatMap((e) => (e.canonical_plugin_id == null ? [] : [e.canonical_plugin_id])),
                    ...(f ?? []),
                  ]),
                ]
              : f,
          b =
            e === `all`
              ? [
                  ...new Set([
                    ...v.flatMap((e) => (e.canonical_plugin_id == null ? [e.connector_id] : [])),
                    ...(p ?? []),
                  ]),
                ]
              : p,
          S = e === `all` ? [...(y ?? []), ...(b ?? [])] : m,
          w = { scope: `GLOBAL`, pageToken: null };
        return (
          (e === `installed` && (t.length === 0 || m?.length === 0)) ||
          (e === `all` && t.length === 0 && S != null && S.length > 0)
            ? (w = { offset: 0 })
            : t.length > 0 &&
              (w = {
                searchPages: [
                  { scope: `GLOBAL`, pageToken: null },
                  { scope: `WORKSPACE`, pageToken: null },
                ],
              }),
          {
            enabled: r(E, n.accountId) && f != null && !l && (u == null || u.data != null) && !u?.isError,
            initialPageParam: w,
            getNextPageParam: (n, r) => {
              if (e === `installed` && t.length > 0) {
                let e = new Set(
                  r.flatMap((e) =>
                    e.plugins.flatMap((e) => (e.connector_id == null ? [e.id] : [e.id, e.connector_id])),
                  ),
                );
                if (m?.every((t) => e.has(t))) return;
              }
              return n.nextPage;
            },
            queryFn: async ({ pageParam: r, signal: i }) => {
              h(a, n.accountId);
              let o;
              if (`offset` in r) {
                let t = S?.slice(r.offset, r.offset + K),
                  n = t?.filter((e) => y?.includes(e)),
                  [a, s] = await Promise.all([
                    n == null || n.length === 0
                      ? null
                      : T.safePost(`/ps/plugins/batch`, {
                          surface: `workspace_agents`,
                          requestBody: { plugin_ids: n },
                          additionalHeaders: q,
                          signal: C(i),
                        }),
                    Promise.all(
                      (t?.filter((e) => b?.includes(e)) ?? []).map(async (e) => {
                        let { plugin: t } = await T.safeGet(`/ps/plugins/canonical-app/{app_id}`, {
                          surface: `workspace_agents`,
                          parameters: { path: { app_id: encodeURIComponent(e) } },
                          additionalHeaders: q,
                          signal: C(i),
                        });
                        return t;
                      }),
                    ),
                  ]).catch((t) => {
                    if (e !== `all`) throw t;
                    return [null, []];
                  }),
                  c;
                (S != null && r.offset + K < S.length
                  ? (c = { offset: r.offset + K })
                  : e === `all` && (c = { scope: `GLOBAL`, pageToken: null }),
                  (o = {
                    plugins: [
                      ...(0, W.default)(a?.results, ({ requested_plugin_id: e }) => n?.indexOf(e)).map(
                        ({ plugin: e }) => e,
                      ),
                      ...s.filter((e) => e != null),
                    ],
                    nextPage: c,
                  }));
              } else {
                let n = await Promise.all(
                    (`searchPages` in r ? r.searchPages : [r]).map(async (e) => {
                      let n = { query: { scope: e.scope, limit: K, pageToken: e.pageToken ?? void 0 } },
                        r =
                          t.length === 0
                            ? await T.safeGet(`/ps/plugins/list`, {
                                surface: `workspace_agents`,
                                parameters: n,
                                additionalHeaders: q,
                                signal: C(i),
                              })
                            : await T.safeGet(`/ps/plugins/search`, {
                                surface: `workspace_agents`,
                                parameters: { query: { ...n.query, q: t } },
                                additionalHeaders: q,
                                signal: C(i),
                              }),
                        a;
                      return (
                        r.pagination.next_page_token == null
                          ? t.length === 0 &&
                            e.scope === `GLOBAL` &&
                            (a = { scope: `WORKSPACE`, pageToken: null })
                          : (a = { scope: e.scope, pageToken: r.pagination.next_page_token }),
                        { plugins: r.plugins, nextPage: a }
                      );
                    }),
                  ),
                  a = n.flatMap((e) => (e.nextPage == null ? [] : [e.nextPage])),
                  s = n.flatMap((e) => e.plugins);
                o = {
                  plugins:
                    e === `installed`
                      ? s.filter(
                          (e) => f?.includes(e.id) || (e.connector_id != null && p?.includes(e.connector_id)),
                        )
                      : s,
                  nextPage: t.length > 0 && a.length > 0 ? { searchPages: a } : a[0],
                };
              }
              return (i.throwIfAborted(), h(a, n.accountId), o);
            },
            queryKey: [
              `team-plugin-directory`,
              n.accountId,
              n.teamId,
              n.serviceAccountId,
              e,
              t,
              ...(S ?? []),
            ],
            retry: !1,
            select: (e) =>
              (0, G.default)(
                e.pages.flatMap((e) => e.plugins).filter((e) => P(e, s) && !o.has(e.id)),
                `id`,
              ),
            staleTime: i.ONE_MINUTE,
          }
        );
      })),
      (X = l(n, (e, { scope: t }) => ({
        mutationFn: async ({ pluginId: n, enabled: r, linkIds: i }) => {
          (h(t, e.accountId), await t.query.cancel(J, e), h(t, e.accountId));
          try {
            let t = {
              path: { service_account_user_id: H(e), plugin_id: encodeURIComponent(n) },
              query: { team_id: e.teamId },
            };
            if (i != null) {
              let e = (
                await Promise.allSettled(
                  i.map((e) =>
                    T.safeDelete(`/aip/connectors/service_accounts/links/{link_id}`, {
                      surface: `workspace_agents`,
                      parameters: { path: { link_id: encodeURIComponent(e) } },
                      additionalHeaders: q,
                    }),
                  ),
                )
              ).find((e) => e.status === `rejected`);
              if (e != null) throw e.reason;
            } else
              r
                ? await T.safePost(
                    `/service-accounts/{service_account_user_id}/plugins/{plugin_id}/install`,
                    { parameters: t },
                  )
                : await T.safePost(
                    `/service-accounts/{service_account_user_id}/plugins/{plugin_id}/uninstall`,
                    { parameters: t },
                  );
          } finally {
            await Promise.all([t.query.invalidate(J, e), b(t, e.accountId, e.teamId)]);
          }
        },
        mutationKey: [`team-plugins`, e.accountId, e.teamId, e.serviceAccountId],
      }))),
      (Z = l(n, (e, { scope: t }) => ({
        mutationFn: async ({ linkId: n, readOnly: r }) => {
          (h(t, e.accountId), await t.query.cancel(J, e), h(t, e.accountId));
          try {
            let i = await T.safePatch(`/ps/v2/links/{link_id}`, {
              surface: `workspace_agents`,
              parameters: { path: { link_id: encodeURIComponent(n) } },
              requestBody: { is_read_only: r },
              additionalHeaders: q,
            });
            t.query.setData(J, e, (e) =>
              e == null ? e : { ...e, links: e.links.map((e) => (e.id === i.id ? i : e)) },
            );
          } finally {
            await t.query.invalidate(J, e);
          }
        },
        mutationKey: [`team-link-read-only`, e.accountId, e.teamId, e.serviceAccountId],
      }))));
  }))();
}
export {
  J as a,
  B as c,
  L as d,
  R as f,
  P as h,
  X as i,
  z as l,
  N as m,
  Q as n,
  Y as o,
  M as p,
  Z as r,
  V as s,
  U as t,
  F as u,
};
//# sourceMappingURL=plugins-state-17abea2c5736.js.map
