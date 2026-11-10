import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as t, b_t as n, sct as r, zst as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  $Dt as a,
  BRr as o,
  Emr as s,
  HBr as c,
  LMr as l,
  RMr as u,
  Rmr as d,
  S6n as f,
  Xmr as p,
  _6n as m,
  b6n as h,
  bmr as g,
  eOt as _,
  eer as v,
  g6n as y,
  v6n as b,
  w6n as x,
  wLr as S,
  wmr as C,
  ymr as w,
  zRr as T,
} from "./app-initial-ad16eaadf81f.js";
import { i as E, o as D, r as O } from "./microsoft-oauth-bundle-ca8e0d4a5995.js";
async function k({
  scope: e,
  appId: t,
  browserAccountId: r,
  freshLinkChecks: s = !1,
  getAvailableCompanions: u,
  getCompanionConnectorIds: f,
  hostId: p,
  primaryLink: m,
  productSku: h,
  queryClient: g,
}) {
  if (m != null) return [];
  let _ = C({ accountId: r ?? l(e) ?? e.get(T), userId: e.get(o), productSku: h });
  if (!_.enabled) return [];
  let v = f(t),
    [x, S, E, D] = await Promise.all([
      g.fetchQuery({ ..._, staleTime: s ? 0 : i.FIVE_MINUTES }).catch(() => void 0),
      b(p)
        ? g
            .fetchQuery(
              w({ userId: e.get(o), accountId: r ?? l(e) ?? null, productSku: h, appIds: v, enabled: !0 }),
            )
            .then(y)
            .catch(() => new Set())
        : g
            .fetchQuery(
              a({
                scope: e,
                appIds: v,
                browserAccountId: r,
                hostId: p,
                queryClient: g,
                supportsAppRead: n(e.get(c, p), `appRead`),
              }),
            )
            .then((e) => new Set(e.map(({ id: e }) => e)))
            .catch(() => new Set()),
      g.fetchQuery(d(t, { productSku: h })).catch(() => null),
      Promise.all(v.map((e) => g.fetchQuery(d(e)).catch(() => null))),
    ]);
  return x == null || x.some((e) => e.connector_id === t) || E == null
    ? []
    : u({
        availableAppIds: S,
        companionConnectorIds: v,
        companionConnectors: D,
        companionLinks: v.map((e) => x.find((t) => t.connector_id === e) ?? null),
      });
}
function A() {
  return (A = e(() => {
    (r(), v(), p(), m(), _(), g(), s(), u(), S(), t());
  }))();
}
function j(e) {
  return k({
    ...e,
    getAvailableCompanions: (t) => h({ ...t, connectors: e.connectors }),
    getCompanionConnectorIds: (t) => f(t, e.connectors),
  });
}
function M() {
  return (M = e(() => {
    (A(), x());
  }))();
}
function N(e) {
  return k({ ...e, getAvailableCompanions: O, getCompanionConnectorIds: E });
}
function P() {
  return (P = e(() => {
    (A(), D());
  }))();
}
export { j as i, N as n, M as r, P as t };
//# sourceMappingURL=availability-e0ac6f935d38.js.map
