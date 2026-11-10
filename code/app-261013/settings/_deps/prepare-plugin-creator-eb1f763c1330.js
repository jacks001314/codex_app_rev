import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Avt as t, rst as n } from "./app-shared-bbfeca5e5737.js";
import {
  Edn as r,
  Ocr as i,
  Tdn as a,
  dat as o,
  gOr as s,
  hOr as c,
  kcr as l,
  oFr as u,
  uat as d,
  vkn as f,
  ykn as p,
} from "./app-initial-5851df3f6cb1.js";
async function m(e, n, i) {
  let a = e.get(s),
    o = () => !n.aborted && e.get(s) === a;
  if (a == null || !o()) return null;
  let c = i?.hostId ?? `durable`,
    u = { hostedAccountId: a, origin: `plugin_creator`, requestedConnectorId: h, requiresAppSetup: !0 },
    f = p(u),
    m = await e.queryClient.fetchQuery(d(h, a)).catch(() => null);
  if (!o()) return null;
  if (m?.plugin_id == null) throw Error(`Plugin Creator could not be loaded`);
  let [g, _] = await Promise.all([
    e.query.fetch(l, { hostId: c, marketplacePath: null, pluginName: m.plugin_id, remoteMarketplaceName: t }),
    f,
  ]);
  if (!o()) return null;
  let v = g.summary.remotePluginId ?? m.plugin_id;
  return g.summary.installed &&
    g.summary.enabled &&
    g.summary.disabledReason == null &&
    g.summary.availability !== `DISABLED_BY_ADMIN` &&
    _.kind === `ready`
    ? { pluginId: v, setupStarted: !1 }
    : new Promise((t, a) => {
        let s = (e) => {
            (n.removeEventListener(`abort`, l), t(e && o() ? { pluginId: v, setupStarted: !0 } : null));
          },
          l = () => s(!1);
        (n.addEventListener(`abort`, l, { once: !0 }),
          r(
            e,
            {
              connectionAppId: h,
              displayName: g.summary.interface?.displayName ?? g.summary.name,
              remotePluginId: v,
              remoteMarketplaceName: `chatgpt-workspace`,
            },
            {
              ...i,
              ...u,
              hostId: c,
              onSuccess: () => s(!0),
              onCancel: l,
              onError: () => {
                if (!o()) {
                  l();
                  return;
                }
                (n.removeEventListener(`abort`, l), a(Error(`Plugin Creator setup failed`)));
              },
            },
          ) || l());
      });
}
var h;
function g() {
  return (g = e(() => {
    (n(), c(), o(), i(), u(), f(), a(), (h = `connector_openai_plugin_creator`));
  }))();
}
export { m as n, g as t };
//# sourceMappingURL=prepare-plugin-creator-eb1f763c1330.js.map
