import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Fat as t, Pat as n, agt as r, rst as i } from "./app-shared-bbfeca5e5737.js";
import {
  B0n as a,
  Fur as o,
  GMr as s,
  H0n as c,
  I0n as l,
  Kur as u,
  L0n as d,
  Nur as f,
  Our as p,
  R0n as m,
  W0n as h,
  XMr as g,
  hOr as _,
  idr as v,
  kur as y,
  mOr as b,
  mjt as x,
  nFr as S,
  pjt as C,
  tNr as w,
  v8n as T,
} from "./app-initial-5851df3f6cb1.js";
import { i as E, o as D, r as O } from "./microsoft-oauth-bundle-e77977413c17.js";
async function k({
  scope: e,
  appId: t,
  browserAccountId: i,
  freshLinkChecks: a = !1,
  getAvailableCompanions: o,
  getCompanionConnectorIds: c,
  hostId: d,
  primaryLink: h,
  productSku: _,
  queryClient: v,
}) {
  if (h != null) return [];
  let y = f({ accountId: i ?? b(e) ?? e.get(s), userId: e.get(g), productSku: _ });
  if (!y.enabled) return [];
  let x = c(t),
    [w, T, E, D] = await Promise.all([
      v.fetchQuery({ ...y, staleTime: a ? 0 : n.FIVE_MINUTES }).catch(() => void 0),
      m(d)
        ? v
            .fetchQuery(
              p({ userId: e.get(g), accountId: i ?? b(e) ?? null, productSku: _, appIds: x, enabled: !0 }),
            )
            .then(l)
            .catch(() => new Set())
        : v
            .fetchQuery(
              C({
                scope: e,
                appIds: x,
                browserAccountId: i,
                hostId: d,
                queryClient: v,
                supportsAppRead: r(e.get(S, d), `appRead`),
              }),
            )
            .then((e) => new Set(e.map(({ id: e }) => e)))
            .catch(() => new Set()),
      v.fetchQuery(u(t, { productSku: _ })).catch(() => null),
      Promise.all(x.map((e) => v.fetchQuery(u(e)).catch(() => null))),
    ]);
  return w == null || w.some((e) => e.connector_id === t) || E == null
    ? []
    : o({
        availableAppIds: T,
        companionConnectorIds: x,
        companionConnectors: D,
        companionLinks: x.map((e) => w.find((t) => t.connector_id === e) ?? null),
      });
}
function A() {
  return (A = e(() => {
    (i(), T(), v(), d(), x(), y(), o(), _(), w(), t());
  }))();
}
function j(e) {
  return k({
    ...e,
    getAvailableCompanions: (t) => a({ ...t, connectors: e.connectors }),
    getCompanionConnectorIds: (t) => c(t, e.connectors),
  });
}
function M() {
  return (M = e(() => {
    (A(), h());
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
//# sourceMappingURL=availability-7c47246e0e1c.js.map
