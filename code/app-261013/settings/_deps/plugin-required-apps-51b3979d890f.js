import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Fat as t, Pat as n, hrt as r, vrt as i } from "./app-shared-bbfeca5e5737.js";
import {
  Gcr as a,
  Hur as o,
  Kur as s,
  Udr as c,
  Vur as l,
  Wcr as u,
  iPr as d,
  idr as f,
  sPr as p,
} from "./app-initial-5851df3f6cb1.js";
import { r as m, t as h } from "./plugin-connected-account-links-8dea8c830000.js";
import { f as g, p as _ } from "./plugins-state-17abea2c5736.js";
function v(e, t) {
  return t.filter((t) => c(t.connector_id) === c(e));
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
function x(e, t, i) {
  return {
    queryKey: [`team-required-app`, e, t, i],
    staleTime: n.ONE_MINUTE,
    retry: !1,
    queryFn: async ({ signal: e, client: n }) => {
      let { plugin: a } = await d.safeGet(`/ps/plugins/canonical-app/{app_id}`, {
        surface: `workspace_agents`,
        parameters: { path: { app_id: encodeURIComponent(t) } },
        additionalHeaders: l(`codex`),
        signal: u(e),
      });
      if ((!i && _(t)) || a?.status === `DISABLED_BY_ADMIN` || a?.installation_policy === `NOT_AVAILABLE`)
        return { plugin: a, connector: null, requiresConnection: !1 };
      let o = await n.fetchQuery(s(t, { productSku: `CODEX` })).catch((e) => {
        if (e instanceof r && e.status === 404) return null;
        throw e;
      });
      return o == null || (!i && _(o.id))
        ? { plugin: a, connector: null, requiresConnection: !1 }
        : {
            plugin: a,
            connector: o,
            requiresConnection:
              o.status !== `DISABLED_BY_ADMIN` &&
              o.supported_auth.length > 0 &&
              o.supported_auth.every((e) => e.type !== `NONE`),
          };
    },
  };
}
function S() {
  return (S = e(() => {
    (f(), m(), o(), a(), g(), t(), p(), i());
  }))();
}
export { y as a, S as i, v as n, x as r, b as t };
//# sourceMappingURL=plugin-required-apps-51b3979d890f.js.map
