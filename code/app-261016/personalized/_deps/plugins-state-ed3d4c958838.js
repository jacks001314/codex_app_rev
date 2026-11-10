import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as n,
  Bst as r,
  CCt as i,
  CNt as a,
  Qst as o,
  ZSt as s,
  _Nt as c,
  fCt as l,
  mCt as u,
  uCt as d,
  zst as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bhr as p,
  GNr as m,
  KNr as h,
  Mmr as g,
  Nfr as _,
  Nmr as v,
  Pfr as y,
  X4 as b,
  XNr as x,
  Y4 as S,
  bIr as C,
  iRr as w,
  lBr as T,
  sRr as E,
  snn as D,
  tPr as O,
  uBr as k,
  vhr as A,
  xIr as j,
} from "./app-initial-ad16eaadf81f.js";
function M(e) {
  return e != null && p(e.replace(/^plugin_/, ``)) === p(`asdk_app_69a1d78e929881919bba0dbda1f6436d`);
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
    (s(),
      A(),
      S(),
      n(),
      C(),
      (F = `connector_bd313622bce5485cb3d0b338715f7108`),
      (I = [`asdk_app_`, `connector_`, `plugin_asdk_app_`, `plugin_connector_`]),
      (L = i(o, ({ get: e }) => new Set(b(e(j, `1349514884`)?.value).hiddenPluginIds))));
  }))();
}
var z, B;
function V() {
  return (V = e(() => {
    (s(),
      n(),
      R(),
      m(),
      r(),
      E(),
      (z = u(o, (e, { get: t, scope: n }) => ({
        enabled: t(O, e.accountId),
        queryFn: async ({ signal: t }) => {
          x(n, e.accountId);
          let r = await w.safeGet(`/ps/v2/service_accounts/{account_user_id}/workspace_connections`, {
            surface: `workspace_agents`,
            parameters: {
              path: { account_user_id: encodeURIComponent(e.serviceAccountId) },
              query: { team_id: e.teamId },
            },
            signal: t,
          });
          return (t.throwIfAborted(), x(n, e.accountId), r);
        },
        queryKey: [`team-connections`, e.accountId, e.teamId, e.serviceAccountId],
        select: (e) => ({
          ...e,
          links: e.links.filter((e) => !M(e.connector_id) && !M(e.canonical_plugin_id)),
        }),
        refetchOnMount: `always`,
        retry: !1,
        staleTime: f.ONE_MINUTE,
      }))),
      (B = d(o, (e, { scope: t }) => ({
        mutationFn: async ({ linkId: n, enabled: r }) => {
          (x(t, e.accountId), await t.query.cancel(z, e), x(t, e.accountId));
          try {
            let i = await w.safePatch(
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
            await Promise.all([t.query.invalidate(z, e), h(t, e.accountId, e.teamId)]);
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
  let n = [e.connector_id, e.canonical_app_id, ...(e.release.app_ids ?? [])].filter((e) => e != null).map(p);
  return t.filter((t) => t.canonical_plugin_id === e.id || n.includes(p(t.connector_id)));
}
var W, G, K, q, J, Y, X, Z;
function Q() {
  return (Q = e(() => {
    ((W = t(c(), 1)),
      (G = t(a(), 1)),
      s(),
      v(),
      y(),
      n(),
      T(),
      R(),
      V(),
      m(),
      r(),
      E(),
      (K = 50),
      (q = g(`codex`)),
      (J = u(o, (e, { get: t, scope: n }) => {
        let r = t(k, `2794040019`);
        return {
          enabled: t(O, e.accountId),
          queryFn: async ({ signal: t }) => {
            x(n, e.accountId);
            let [r, { links: i }] = await Promise.all([
              w.safeGet(`/service-accounts/{service_account_user_id}/plugins/installed`, {
                parameters: { path: { service_account_user_id: H(e) }, query: { team_id: e.teamId } },
                signal: t,
              }),
              w.safePost(`/aip/connectors/service_accounts/links/list`, {
                surface: `workspace_agents`,
                requestBody: { service_account_account_user_id: e.serviceAccountId },
                additionalHeaders: q,
                signal: t,
              }),
            ]);
            return (
              t.throwIfAborted(),
              x(n, e.accountId),
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
            ownerIdentityByLinkId: Object.fromEntries(e.links.map((e) => [e.id, D(e)])),
          }),
          refetchOnMount: `always`,
          retry: !1,
          staleTime: f.ONE_MINUTE,
        };
      })),
      (Y = l(o, ({ view: e, query: t, ...n }, { get: r, scope: i }) => {
        let a = r(L),
          o = r(k, `2794040019`),
          { data: s, isError: c } = r(J, n),
          l = r(k, `971852422`) ? r(z, n) : void 0,
          u = l?.data?.links.flatMap((e) => (e.canonical_plugin_id == null ? [] : [e.canonical_plugin_id])),
          d =
            s == null
              ? void 0
              : [
                  ...new Set([...s.plugins.items.filter((e) => e.enabled).map((e) => e.id), ...(u ?? [])]),
                ].sort(),
          m = s?.links.map((e) => e.connector_id).sort(),
          h = d == null || m == null ? void 0 : [...new Set([...d, ...m])],
          g = new Set(l?.data?.links.filter((e) => e.enabled).map((e) => p(e.connector_id))),
          v = new Set(
            l?.data?.links.flatMap((e) =>
              e.enabled && e.canonical_plugin_id != null ? [e.canonical_plugin_id] : [],
            ),
          ),
          y = l?.data?.available
            ? l.data.links.filter(
                (e) =>
                  (e.canonical_plugin_id == null || !v.has(e.canonical_plugin_id)) &&
                  !g.has(p(e.connector_id)),
              )
            : [],
          b =
            e === `all`
              ? [
                  ...new Set([
                    ...y.flatMap((e) => (e.canonical_plugin_id == null ? [] : [e.canonical_plugin_id])),
                    ...(d ?? []),
                  ]),
                ]
              : d,
          S =
            e === `all`
              ? [
                  ...new Set([
                    ...y.flatMap((e) => (e.canonical_plugin_id == null ? [e.connector_id] : [])),
                    ...(m ?? []),
                  ]),
                ]
              : m,
          C = e === `all` ? [...(b ?? []), ...(S ?? [])] : h,
          T = { scope: `GLOBAL`, pageToken: null };
        return (
          (e === `installed` && (t.length === 0 || h?.length === 0)) ||
          (e === `all` && t.length === 0 && C != null && C.length > 0)
            ? (T = { offset: 0 })
            : t.length > 0 &&
              (T = {
                searchPages: [
                  { scope: `GLOBAL`, pageToken: null },
                  { scope: `WORKSPACE`, pageToken: null },
                ],
              }),
          {
            enabled: r(O, n.accountId) && d != null && !c && (l == null || l.data != null) && !l?.isError,
            initialPageParam: T,
            getNextPageParam: (n, r) => {
              if (e === `installed` && t.length > 0) {
                let e = new Set(
                  r.flatMap((e) =>
                    e.plugins.flatMap((e) => (e.connector_id == null ? [e.id] : [e.id, e.connector_id])),
                  ),
                );
                if (h?.every((t) => e.has(t))) return;
              }
              return n.nextPage;
            },
            queryFn: async ({ pageParam: r, signal: a }) => {
              x(i, n.accountId);
              let o;
              if (`offset` in r) {
                let t = C?.slice(r.offset, r.offset + K),
                  n = t?.filter((e) => b?.includes(e)),
                  [i, s] = await Promise.all([
                    n == null || n.length === 0
                      ? null
                      : w.safePost(`/ps/plugins/batch`, {
                          surface: `workspace_agents`,
                          requestBody: { plugin_ids: n },
                          additionalHeaders: q,
                          signal: _(a),
                        }),
                    Promise.all(
                      (t?.filter((e) => S?.includes(e)) ?? []).map(async (e) => {
                        let { plugin: t } = await w.safeGet(`/ps/plugins/canonical-app/{app_id}`, {
                          surface: `workspace_agents`,
                          parameters: { path: { app_id: encodeURIComponent(e) } },
                          additionalHeaders: q,
                          signal: _(a),
                        });
                        return t;
                      }),
                    ),
                  ]).catch((t) => {
                    if (e !== `all`) throw t;
                    return [null, []];
                  }),
                  c;
                (C != null && r.offset + K < C.length
                  ? (c = { offset: r.offset + K })
                  : e === `all` && (c = { scope: `GLOBAL`, pageToken: null }),
                  (o = {
                    plugins: [
                      ...(0, W.default)(i?.results, ({ requested_plugin_id: e }) => n?.indexOf(e)).map(
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
                            ? await w.safeGet(`/ps/plugins/list`, {
                                surface: `workspace_agents`,
                                parameters: n,
                                additionalHeaders: q,
                                signal: _(a),
                              })
                            : await w.safeGet(`/ps/plugins/search`, {
                                surface: `workspace_agents`,
                                parameters: { query: { ...n.query, q: t } },
                                additionalHeaders: q,
                                signal: _(a),
                              }),
                        i;
                      return (
                        r.pagination.next_page_token == null
                          ? t.length === 0 &&
                            e.scope === `GLOBAL` &&
                            (i = { scope: `WORKSPACE`, pageToken: null })
                          : (i = { scope: e.scope, pageToken: r.pagination.next_page_token }),
                        { plugins: r.plugins, nextPage: i }
                      );
                    }),
                  ),
                  i = n.flatMap((e) => (e.nextPage == null ? [] : [e.nextPage])),
                  s = n.flatMap((e) => e.plugins);
                o = {
                  plugins:
                    e === `installed`
                      ? s.filter(
                          (e) => d?.includes(e.id) || (e.connector_id != null && m?.includes(e.connector_id)),
                        )
                      : s,
                  nextPage: t.length > 0 && i.length > 0 ? { searchPages: i } : i[0],
                };
              }
              return (a.throwIfAborted(), x(i, n.accountId), o);
            },
            queryKey: [
              `team-plugin-directory`,
              n.accountId,
              n.teamId,
              n.serviceAccountId,
              e,
              t,
              ...(C ?? []),
            ],
            retry: !1,
            select: (e) =>
              (0, G.default)(
                e.pages.flatMap((e) => e.plugins).filter((e) => P(e, o) && !a.has(e.id)),
                `id`,
              ),
            staleTime: f.ONE_MINUTE,
          }
        );
      })),
      (X = d(o, (e, { scope: t }) => ({
        mutationFn: async ({ pluginId: n, enabled: r, linkIds: i }) => {
          (x(t, e.accountId), await t.query.cancel(J, e), x(t, e.accountId));
          try {
            let t = {
              path: { service_account_user_id: H(e), plugin_id: encodeURIComponent(n) },
              query: { team_id: e.teamId },
            };
            if (i != null) {
              let e = (
                await Promise.allSettled(
                  i.map((e) =>
                    w.safeDelete(`/aip/connectors/service_accounts/links/{link_id}`, {
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
                ? await w.safePost(
                    `/service-accounts/{service_account_user_id}/plugins/{plugin_id}/install`,
                    { parameters: t },
                  )
                : await w.safePost(
                    `/service-accounts/{service_account_user_id}/plugins/{plugin_id}/uninstall`,
                    { parameters: t },
                  );
          } finally {
            await Promise.all([t.query.invalidate(J, e), h(t, e.accountId, e.teamId)]);
          }
        },
        mutationKey: [`team-plugins`, e.accountId, e.teamId, e.serviceAccountId],
      }))),
      (Z = d(o, (e, { scope: t }) => ({
        mutationFn: async ({ linkId: n, readOnly: r }) => {
          (x(t, e.accountId), await t.query.cancel(J, e), x(t, e.accountId));
          try {
            let i = await w.safePatch(`/ps/v2/links/{link_id}`, {
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
//# sourceMappingURL=plugins-state-ed3d4c958838.js.map
