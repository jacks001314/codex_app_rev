import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as n, CNt as r, Ost as i, zst as a } from "./app-shared-2feb3d4c6fcc.js";
import { Whr as o, iRr as s, tyr as c } from "./app-initial-ad16eaadf81f.js";
function l({ accountId: e, userId: t, connectorIds: n, enabled: r = !0 }) {
  let o = [...new Set(n)].sort();
  return i({
    queryKey: [`workspace-agent`, `apps`, e, t, o],
    queryFn: ({ signal: n }) => f(e, t, o, n),
    enabled: r && t != null,
    retry: !1,
    staleTime: a.FIVE_MINUTES,
  });
}
function u(e, t, n) {
  return i({
    queryKey: [`workspace-agent`, `connector-actions`, e, t, n],
    enabled: t != null,
    queryFn: async ({ signal: r }) => {
      if (t == null) throw Error(`Sign in before loading agent app actions`);
      return (
        await s.safeGet(`/aip/connectors/{connector_id}/actions`, {
          expectedIdentity: { accountId: e, userId: t },
          parameters: { path: { connector_id: n } },
          signal: r,
        })
      ).actions.map((e) => ({
        name: e.name,
        title: e.title ?? null,
        description: e.description,
        isEnabled: e.is_enabled !== !1,
        isPrivate: e.visibility === `private`,
        isReadOnly: e.is_read_only === !0,
        isConsequential: e.is_consequential !== !1,
      }));
    },
    retry: !1,
    staleTime: a.FIVE_MINUTES,
  });
}
function d(e, t, n = !0) {
  return i({
    queryKey: [`workspace-agent`, `app-catalog`, e, t],
    enabled: n && t != null,
    queryFn: async ({ signal: n }) => {
      if (t == null) throw Error(`Sign in before loading agent apps`);
      let r = await s.safeGet(`/hermes/apps/browse`, {
          expectedIdentity: { accountId: e, userId: t },
          signal: n,
        }),
        i = [
          [`recommended`, r.recommended_apps],
          [`workspace`, r.workspace_apps],
          [`public`, r.public_apps],
        ];
      return (0, m.default)(
        i.flatMap(([e, t]) =>
          t.map((t) => ({
            id: t.id,
            name: t.display_name,
            description: t.subtitle ?? null,
            logoUrl: t.logo_url ?? null,
            logoDarkUrl: t.logo_dark_url ?? null,
            source: e,
            disabledByAdmin: t.disabled_by_admin === !0,
            connectorType: null,
            status: null,
            supportedAuthTypes: null,
          })),
        ),
        `id`,
      );
    },
    retry: !1,
    staleTime: a.FIVE_MINUTES,
  });
}
async function f(e, t, n, r) {
  if (t == null) throw Error(`Sign in before loading agent apps`);
  let i = await Promise.all(
    (0, p.default)(n, 500).map((n) =>
      s.safePost(`/hermes/apps/content`, {
        requestBody: { app_ids: n },
        expectedIdentity: { accountId: e, userId: t },
        signal: r,
      }),
    ),
  );
  return {
    apps: i.flatMap((e) =>
      e.apps.map((e) => ({
        id: e.id,
        name: e.name,
        description: e.description?.trim() || null,
        logoUrl: e.logo_url ?? null,
        logoDarkUrl: e.logo_url_dark ?? null,
        source: `selected`,
        disabledByAdmin: !1,
        connectorType: e.connector_type ?? null,
        status: e.status ?? null,
        supportedAuthTypes: e.supported_auth_types ?? null,
      })),
    ),
    missingConnectorIds: i.flatMap((e) => e.missing_app_ids),
  };
}
var p, m;
function h() {
  return (h = e(() => {
    ((p = t(o(), 1)), (m = t(r(), 1)), c(), n());
  }))();
}
export { h as i, d as n, l as r, u as t };
//# sourceMappingURL=workspace-agent-apps-b1c524ac4449.js.map
