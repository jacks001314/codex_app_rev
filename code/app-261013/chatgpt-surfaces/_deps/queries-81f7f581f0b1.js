import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  EPt as r,
  Fat as i,
  Pat as a,
  Pxt as o,
  Zxt as s,
  _It as c,
  hrt as l,
  oIt as u,
  pLt as d,
  vrt as f,
  wot as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fur as m,
  Hur as h,
  Jcr as g,
  Llr as _,
  Pur as v,
  Rlr as y,
  Udr as b,
  Uur as x,
  Vur as S,
  alr as C,
  dat as w,
  gOr as T,
  hOr as E,
  iPr as D,
  idr as O,
  jur as k,
  pOr as A,
  sPr as j,
  uat as M,
} from "./app-initial-5851df3f6cb1.js";
function N({ appId: e, links: t, statuses: n, allowLegacyAccountFallback: r }) {
  let i = b(e);
  return n.filter(({ user_connection_details: e }) => {
    if (e.auth_status === `user_connected`)
      return e.backing_link_id == null
        ? r &&
            i === `connector_2128aebfecb84f64a069897515042a44` &&
            e.connection_type === `gmail_sync_connector`
        : t.some((t) => t.id === e.backing_link_id && b(t.connector_id) === i);
    let n = P(e);
    return n == null
      ? e.auth_status === `admin_connected` &&
          r &&
          i === `connector_4aaab2856305417b993eca9a216aaf6e` &&
          e.connection_type === `outlook_admin_sync_connector` &&
          e.backing_link_id == null
      : n === i;
  });
}
function P(e) {
  if (
    (e.auth_status !== `admin_connected` &&
      (e.knowledge_connector_type !== `google_drive_dwd` ||
        e.auth_status === `admin_managed_disconnected` ||
        (e.activation_status !== `activated` && e.activation_status !== `partially_activated`))) ||
    e.connector_id == null
  )
    return null;
  let t = b(e.connector_id);
  return F.get(t) ?? t;
}
var F;
function I() {
  return (I = e(() => {
    F = new Map([
      [`connector_1ee51bd730c272434e1b17c46f8a2397`, `connector_69c18c28f1188191bf5b8445c4ab0a2e`],
      [`connector_bef400199679ee9f67f080058d5c9e89`, `connector_4aaab2856305417b993eca9a216aaf6e`],
      [`connector_5ae2fd76f08447718080f11bc2faac6c`, `connector_1e4f6a44acf14e3ca1d96672f8c945bc`],
      [`connector_601cc22bb3b740599c7274cf7e8084e8`, `connector_246af0940da3457da0e751171dc1ce60`],
    ]);
  }))();
}
async function L(e, t) {
  await D.safePatch(`/aip/connectors/links/{link_id}`, {
    surface: `settings`,
    parameters: { path: { link_id: e } },
    requestBody: { apps_privacy_control: t },
    additionalHeaders: v(),
  });
}
async function R(e, t) {
  if (
    (await Promise.all([
      ...[
        g,
        k,
        x,
        [`apps`, `list`],
        [`apps`, `link`],
        [`plugin-settings-sync`],
        [`chatgpt-system-hints`, `plugins`],
      ].map((t) => e.invalidateQueries({ queryKey: t })),
      e.invalidateQueries({
        predicate: ({ queryKey: e }) => e[0] === `library-api` && e[3] === `mounted-capabilities`,
      }),
    ]),
    t != null)
  ) {
    let n = e.getQueryState(t)?.error;
    if (n != null) throw n;
  }
}
var z, B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (o(),
      r(),
      O(),
      m(),
      E(),
      h(),
      y(),
      w(),
      C(),
      p(),
      i(),
      j(),
      f(),
      I(),
      (z = d({
        settings: d({
          apps_privacy_control: u([
            `always_ask`,
            `ask_before_writes`,
            `review_important_actions`,
            `full_access`,
          ]).nullish(),
          lockdown_mode_enabled: c().optional(),
          h17180r_gmail: c().nullish(),
          h17180r_google_calendar: c().nullish(),
          h17180r_google_contacts: c().nullish(),
        }),
      })),
      (B = s(n, (e, { get: t }) => ({
        queryKey: [`plugins`, `settings`, t(A), e],
        enabled: t(A) != null,
        queryFn: async ({ signal: t }) => {
          let n = _(e);
          if (n == null) throw new l(`Plugin not found`, 404, void 0, null);
          return D.safeGet(`/ps/plugins/{plugin_id}`, {
            surface: `settings`,
            parameters: { path: { plugin_id: n } },
            additionalHeaders: S(),
            signal: t,
          });
        },
        staleTime: a.ONE_MINUTE,
      }))),
      (V = s(n, ({ pluginId: e, skillName: t }, { get: n }) => ({
        queryKey: [`plugins`, `settings`, n(T), e, `skill`, t],
        enabled: n(T) != null,
        retryOnMount: !1,
        queryFn: ({ signal: n }) =>
          D.safeGet(`/ps/plugins/{plugin_id}/skills/{skill_name}`, {
            surface: `settings`,
            parameters: { path: { plugin_id: e, skill_name: t }, query: { includeDownloadUrls: !1 } },
            additionalHeaders: S(`chatgpt`),
            signal: n,
            expectedErrorStatuses: [403, 404],
          }),
        staleTime: a.FIVE_MINUTES,
      }))),
      (H = s(n, (e, { get: t }) => ({
        queryKey: [`plugins`, `settings-app`, t(A), e],
        enabled: t(A) != null,
        queryFn: ({ signal: t }) =>
          D.safeGet(`/aip/connectors/{connector_id}`, {
            surface: `settings`,
            parameters: { path: { connector_id: e }, query: { include_actions: !0 } },
            additionalHeaders: v(),
            signal: t,
          }),
        staleTime: a.FIVE_MINUTES,
      }))),
      (U = s(n, (e, { get: t }) => M(e, t(A)))),
      (W = t(n, ({ get: e }) => ({
        queryKey: [`plugin-settings-user`, e(A)],
        enabled: e(A) != null,
        queryFn: async ({ signal: e }) => z.parse(await D.safeGet(`/settings/user`, { signal: e })),
        staleTime: a.ONE_MINUTE,
      }))),
      (G = t(n, ({ get: e }) => ({
        queryKey: [`plugin-settings-sync`, e(A)],
        enabled: e(A) != null,
        queryFn: ({ signal: e }) => D.safeGet(`/ca/v2/user/connection_status`, { signal: e }),
        staleTime: a.ONE_MINUTE,
      }))),
      t(n, ({ get: e }) => {
        let t = e(A),
          { data: n } = e(G),
          r = [
            ...new Set(
              n?.connection_statuses.flatMap(({ user_connection_details: e }) => {
                let t = P(e);
                return t == null ? [] : [t];
              }),
            ),
          ].sort();
        return {
          queryKey: [`plugins`, `settings-admin-sync`, t, r],
          enabled: t != null && n != null,
          queryFn: async ({ signal: e }) => {
            let n = { ...S(), ...(t == null ? {} : { "ChatGPT-Account-Id": t }) };
            return (
              await Promise.all(
                r.map(async (t) => {
                  let { plugin_id: r } = await D.safeGet(`/ps/plugins/canonical-app/{app_id}`, {
                    surface: `settings`,
                    parameters: { path: { app_id: t } },
                    additionalHeaders: n,
                    signal: e,
                  });
                  return r == null
                    ? []
                    : [
                        await D.safeGet(`/ps/plugins/{plugin_id}`, {
                          surface: `settings`,
                          parameters: { path: { plugin_id: r } },
                          additionalHeaders: n,
                          signal: e,
                        }),
                      ];
                }),
              )
            ).flat();
          },
          staleTime: a.ONE_MINUTE,
        };
      }));
  }))();
}
export { U as a, V as c, I as d, R as i, L as l, W as n, H as o, G as r, B as s, K as t, N as u };
//# sourceMappingURL=queries-81f7f581f0b1.js.map
