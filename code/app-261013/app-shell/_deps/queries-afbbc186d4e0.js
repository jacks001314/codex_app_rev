import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Fat as t, MSt as n, NSt as r, Pat as i, USt as a, zSt as o } from "./app-shared-bbfeca5e5737.js";
import { f as s, l as c } from "./model-a4d407e1a4c5.js";
function l(e, t, n) {
  let o = { refetchOnMount: () => (r.isOnline() ? !0 : `always`), retry: !1 };
  return {
    state: {
      ...o,
      queryKey: c(e, `state`),
      queryFn: ({ signal: e }) => t.getSharingState(e),
      staleTime: (e) => (e.state.status === `error` ? 0 : i.THIRTY_SECONDS),
    },
    shares: {
      ...o,
      queryKey: c(e, `shares`),
      queryFn: n == null ? a : ({ signal: e }) => t.getShares(n.owner.principal, e),
      staleTime: (e) => (e.state.status === `error` ? 0 : i.THIRTY_SECONDS),
    },
    effectiveAccess: {
      ...o,
      queryKey: c(e, `effective-access`),
      queryFn: n == null ? a : ({ signal: e }) => t.getEffectiveAccess(n.owner.principal, e),
      staleTime: (e) => (e.state.status === `error` ? 0 : i.THIRTY_SECONDS),
    },
    collaborators: {
      ...o,
      queryKey: c(e, `collaborators`),
      queryFn: ({ signal: e }) => t.getCollaborators({ signal: e }),
      staleTime: (e) => (e.state.status === `error` ? 0 : i.THIRTY_SECONDS),
    },
  };
}
function u(e, t, n, r) {
  let a = [...c(t, n), `pages`],
    o = e
      .getQueryCache()
      .findAll({ queryKey: a })
      .filter(
        (e) =>
          e.queryKey.length === a.length + 1 &&
          e.state.status === `success` &&
          e.state.fetchStatus === `idle` &&
          !e.isStaleByTime(i.THIRTY_SECONDS),
      )
      .sort((e, t) => t.state.dataUpdatedAt - e.state.dataUpdatedAt)[0]
      ?.queryKey.at(-1);
  return typeof o == `string` ? o : r;
}
function d() {
  return (d = e(() => {
    (n(), o(), t(), s());
  }))();
}
export { l as n, d as r, u as t };
//# sourceMappingURL=queries-afbbc186d4e0.js.map
