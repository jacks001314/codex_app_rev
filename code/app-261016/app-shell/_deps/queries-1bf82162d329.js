import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as t, QCt as n, ZCt as r, cwt as i, iwt as a, zst as o } from "./app-shared-2feb3d4c6fcc.js";
import { f as s, l as c } from "./model-96b25fa95571.js";
function l(e, t, r) {
  let a = { refetchOnMount: () => (n.isOnline() ? !0 : `always`), retry: !1 };
  return {
    state: {
      ...a,
      queryKey: c(e, `state`),
      queryFn: ({ signal: e }) => t.getSharingState(e),
      staleTime: (e) => (e.state.status === `error` ? 0 : o.THIRTY_SECONDS),
    },
    shares: {
      ...a,
      queryKey: c(e, `shares`),
      queryFn: r == null ? i : ({ signal: e }) => t.getShares(r.owner.principal, e),
      staleTime: (e) => (e.state.status === `error` ? 0 : o.THIRTY_SECONDS),
    },
    effectiveAccess: {
      ...a,
      queryKey: c(e, `effective-access`),
      queryFn: r == null ? i : ({ signal: e }) => t.getEffectiveAccess(r.owner.principal, e),
      staleTime: (e) => (e.state.status === `error` ? 0 : o.THIRTY_SECONDS),
    },
    collaborators: {
      ...a,
      queryKey: c(e, `collaborators`),
      queryFn: ({ signal: e }) => t.getCollaborators({ signal: e }),
      staleTime: (e) => (e.state.status === `error` ? 0 : o.THIRTY_SECONDS),
    },
  };
}
function u(e, t, n, r) {
  let i = [...c(t, n), `pages`],
    a = e
      .getQueryCache()
      .findAll({ queryKey: i })
      .filter(
        (e) =>
          e.queryKey.length === i.length + 1 &&
          e.state.status === `success` &&
          e.state.fetchStatus === `idle` &&
          !e.isStaleByTime(o.THIRTY_SECONDS),
      )
      .sort((e, t) => t.state.dataUpdatedAt - e.state.dataUpdatedAt)[0]
      ?.queryKey.at(-1);
  return typeof a == `string` ? a : r;
}
function d() {
  return (d = e(() => {
    (r(), a(), t(), s());
  }))();
}
export { l as n, d as r, u as t };
//# sourceMappingURL=queries-1bf82162d329.js.map
