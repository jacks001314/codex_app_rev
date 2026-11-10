import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Pxt as r,
  Yxt as i,
  Zxt as a,
  fLt as o,
  kIt as s,
  pLt as c,
  wot as l,
} from "./app-shared-bbfeca5e5737.js";
import { XNr as u, Ymr as d, ZNr as f, ehr as p } from "./app-initial-5851df3f6cb1.js";
function m(e) {
  return (
    s().safeParse(e.email).success &&
    e.email_domain_type != null &&
    e.email_domain_type !== `social` &&
    e.email_domain_type !== `missing`
  );
}
function h(e, t) {
  if (e == null) return !1;
  try {
    let n = g.safeParse(f(e));
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
    (u(), n(), (g = c({ pwd_auth_time: o() })), (_ = `oai/apps/hasSeenWorkspaceDiscoveryFirstLogin`));
  }))();
}
var y, b, x, S;
function C() {
  return (C = e(() => {
    (r(),
      p(),
      l(),
      (y = 5),
      (b = a(t, (e) => ({
        queryKey: [`workspace-discovery`, e],
        queryFn: ({ signal: e }) =>
          d.safeGet(`/accounts/discoverable-workspaces`, {
            parameters: { query: { use_k12_lookup: !1, include_free_workspaces: !1 } },
            signal: e,
          }),
        enabled: e != null,
        staleTime: 0,
        retry: !1,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
      }))),
      (x = i(t, ({ userId: e, email: t, query: n }) => ({
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
      }))),
      (S = a(t, ({ userId: e, workspaceId: t }) => ({
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
export { _ as a, h as c, S as i, C as n, m as o, x as r, v as s, b as t };
//# sourceMappingURL=queries-2cda695a27c9.js.map
