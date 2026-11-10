import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as t, Pit as n, jit as r, zst as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  Bhr as a,
  Mmr as o,
  Nfr as s,
  Nmr as c,
  Pfr as l,
  Rmr as u,
  Xmr as d,
  iRr as f,
  sRr as p,
} from "./app-initial-ad16eaadf81f.js";
import { r as m, t as h } from "./plugin-connected-account-links-e850d089d83d.js";
import { f as g, p as _ } from "./plugins-state-ed3d4c958838.js";
function v(e, t) {
  return t.filter((t) => a(t.connector_id) === a(e));
}
function y(e, t, n) {
  return (
    h(t, e).some(
      (e) =>
        e.auth_status !== `REAUTH_REQUIRED` &&
        e.unavailable_reason == null &&
        e.connector_status !== `DISABLED_BY_ADMIN`,
    ) || v(e, n).some((e) => e.enabled && !e.direct_link_conflict)
  );
}
function b(e) {
  if (e.connector_id != null) return [];
  let t = new Set(
      Object.values(e.release.app_manifest?.apps ?? {})
        .filter((e) => e.required === !0)
        .map((e) => e.id),
    ),
    n = [];
  for (let r of e.release.app_templates ?? []) {
    let e = r.materialized_app_ids?.filter((e) => t.has(e));
    if (e != null && e.length > 0) {
      n.push(e);
      for (let n of e) t.delete(n);
    }
  }
  return [...n, ...[...t].map((e) => [e])];
}
function x(e, t, n) {
  return {
    queryKey: [`team-required-app`, e, t, n],
    staleTime: i.ONE_MINUTE,
    retry: !1,
    queryFn: async ({ signal: e, client: i }) => {
      let { plugin: a } = await f.safeGet(`/ps/plugins/canonical-app/{app_id}`, {
        surface: `workspace_agents`,
        parameters: { path: { app_id: encodeURIComponent(t) } },
        additionalHeaders: o(`codex`),
        signal: s(e),
      });
      if ((!n && _(t)) || a?.status === `DISABLED_BY_ADMIN` || a?.installation_policy === `NOT_AVAILABLE`)
        return { plugin: a, connector: null, requiresConnection: !1 };
      let c = await i.fetchQuery(u(t, { productSku: `CODEX` })).catch((e) => {
        if (e instanceof r && e.status === 404) return null;
        throw e;
      });
      return c == null || (!n && _(c.id))
        ? { plugin: a, connector: null, requiresConnection: !1 }
        : {
            plugin: a,
            connector: c,
            requiresConnection:
              c.status !== `DISABLED_BY_ADMIN` &&
              c.supported_auth.length > 0 &&
              c.supported_auth.every((e) => e.type !== `NONE`),
          };
    },
  };
}
function S() {
  return (S = e(() => {
    (d(), m(), c(), l(), g(), t(), p(), n());
  }))();
}
export { y as a, S as i, v as n, x as r, b as t };
//# sourceMappingURL=plugin-required-apps-1ba4b9eb6ed2.js.map
