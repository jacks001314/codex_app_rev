import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  GLt as n,
  HFt as r,
  ORt as i,
  Qst as a,
  ZSt as o,
  fCt as s,
  kRt as c,
  mCt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { Rzr as u, iRr as d, tyr as f, zzr as p } from "./app-initial-ad16eaadf81f.js";
function m(e) {
  return (
    n().safeParse(e.email).success &&
    e.email_domain_type != null &&
    e.email_domain_type !== `social` &&
    e.email_domain_type !== `missing`
  );
}
function h(e, t) {
  if (e == null) return !1;
  try {
    let n = g.safeParse(p(e));
    if (!n.success) return !1;
    let r = n.data.pwd_auth_time,
      i = t - (r < 0xe8d4a51000 ? r * 1e3 : r);
    return i >= 0 && i <= 15e3;
  } catch {
    return !1;
  }
}
var g, _;
function v() {
  return (v = e(() => {
    (u(), r(), (g = c({ pwd_auth_time: i() })), (_ = `oai/apps/hasSeenWorkspaceDiscoveryFirstLogin`));
  }))();
}
var y, b;
function x() {
  return (x = e(() => {
    (o(),
      f(),
      t(),
      (y = 5),
      (b = s(a, ({ userId: e, email: t, query: n }) => ({
        queryKey: [`workspace-discovery-v2`, e, t, n],
        initialPageParam: null,
        queryFn: async ({ pageParam: e, signal: t }) => {
          let r = e,
            i = n.length > 0 ? y : 1;
          for (;;) {
            t.throwIfAborted();
            let e = await d.safeGet(`/accounts/discoverable-workspaces/v2`, {
              parameters: { query: { query: n, cursor: r, include_free_workspaces: !1 } },
              signal: t,
            });
            if (
              (t.throwIfAborted(),
              i--,
              e.workspaces.length > 0 || e.completion !== `more` || e.next_cursor == null || i === 0)
            )
              return e;
            r = e.next_cursor;
          }
        },
        getNextPageParam: (e) => (e.completion === `more` ? e.next_cursor : void 0),
        enabled: e != null && t != null,
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
      }))));
  }))();
}
var S;
function C() {
  return (C = e(() => {
    (o(),
      f(),
      t(),
      x(),
      (S = l(a, ({ userId: e, workspaceId: t }) => ({
        queryKey: [`workspace-member-count`, e, t],
        queryFn: async ({ signal: e }) => {
          let n = await d.safeGet(`/accounts/{account_id}/users`, {
            parameters: { path: { account_id: t }, query: { offset: 0, limit: 1, query: `` } },
            signal: e,
          });
          if (n.total == null) throw Error(`Expected a counted workspace users response`);
          return n.total;
        },
        staleTime: 6e4,
        retry: !1,
      }))));
  }))();
}
export { _ as a, h as c, b as i, S as n, m as o, x as r, v as s, C as t };
//# sourceMappingURL=queries-216aaf6d66eb.js.map
