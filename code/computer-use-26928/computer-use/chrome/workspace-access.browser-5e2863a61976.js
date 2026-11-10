import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ODt as t,
  bvt as n,
  dkt as r,
  hkt as i,
  hvt as a,
  kDt as o,
  okt as s,
  rkt as c,
} from "./app-shared-7552fc8d5d82.js";
import { i as l, s as u, u as d } from "./workspace-24f1c3d6229e.js";
function f(e, t) {
  return (
    t.throwIfAborted(),
    new Promise((n, r) => {
      let i = () => {
        (t.removeEventListener(`abort`, i),
          r(
            t.reason instanceof Error
              ? t.reason
              : new DOMException(`Workspace setup aborted`, `AbortError`),
          ));
      };
      (t.addEventListener(`abort`, i, { once: !0 }),
        e().then(
          (e) => {
            (t.removeEventListener(`abort`, i), n(e));
          },
          (e) => {
            (t.removeEventListener(`abort`, i), r(e instanceof Error ? e : Error(String(e))));
          },
        ));
    })
  );
}
async function p({
  scope: e,
  statsig: n,
  userId: o,
  workspaceId: s,
  workspaceAccount: u,
  returnUrl: p,
  signal: m,
  onStageChange: h,
}) {
  let g = () => {
    if ((m.throwIfAborted(), c()?.userId !== o))
      throw new DOMException(`Checkout user changed`, `AbortError`);
  };
  (g(), h?.(`account_refresh_failed`));
  let _ = await f(r, m);
  if (_ == null || _.userId !== o) throw Error(`Checkout session unavailable`);
  if (
    (g(),
    u != null &&
      (u.account.account_id !== s || u.account.is_deactivated || !u.can_access_with_session))
  )
    throw Error(`Checkout returned an inaccessible workspace account`);
  let v = t(_.accountId);
  h?.(`account_discovery_failed`);
  let y =
    u == null || e.queryClient.getQueryData(v) == null
      ? await a.safeGet(`/accounts/check/{version}`, {
          parameters: { path: { version: `v4-2023-04-27` } },
          signal: m,
        })
      : null;
  (g(), await e.queryClient.cancelQueries({ queryKey: v, exact: !0 }), g());
  let b = e.queryClient.setQueryData(v, (e) => {
      let t = y ?? e;
      return t == null || u == null
        ? t
        : {
            ...t,
            accounts: { ...t.accounts, [s]: u },
            account_ordering: t.account_ordering.includes(s)
              ? t.account_ordering
              : [...t.account_ordering, s],
          };
    }),
    x = b?.accounts[s];
  if (x == null || x.account.is_deactivated) return null;
  h?.(`workspace_switch_failed`);
  let { willRedirect: S } = await f(
    () =>
      d(
        {
          workspaceAccountId: s,
          workspaceName: x.account.name ?? null,
          workspaceImageUrl: x.account.profile_picture_url ?? null,
          accountResidencyRegion: x.account.account_residency_region,
          canAccessWithSession: x.can_access_with_session,
          isDeactivated: x.account.is_deactivated,
          isPersonalWorkspace: !1,
          isFedrampCompliantWorkspace: x.account.is_fedramp_compliant_workspace,
          ssoConnectionName: x.sso_connection_name,
        },
        l(n),
        p,
      ),
    m,
  );
  if ((g(), S)) return null;
  let C = [`accounts`, `full`, s];
  (await e.queryClient.cancelQueries({ queryKey: C, exact: !0 }), g());
  let w = c();
  return w?.accountId !== s || i(w.accessToken)?.accountId !== s
    ? null
    : (e.queryClient.setQueryData(t(s), b), e.queryClient.setQueryData(C, b), x);
}
function m() {
  return (m = e(() => {
    (o(), s(), n(), u());
  }))();
}
m();
export { p as prepareWorkspaceAccess };
//# sourceMappingURL=workspace-access.browser-5e2863a61976.js.map
