import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPr as t,
  NNr as n,
  TNr as r,
  Ymr as i,
  ehr as a,
  kNr as o,
  yNr as s,
  zMr as c,
} from "./app-initial-5851df3f6cb1.js";
import { i as l, s as u, u as d } from "./workspace-621c2c3096f1.js";
function f(e, t) {
  return (
    t.throwIfAborted(),
    new Promise((n, r) => {
      let i = () => {
        (t.removeEventListener(`abort`, i),
          r(
            t.reason instanceof Error ? t.reason : new DOMException(`Workspace setup aborted`, `AbortError`),
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
  statsig: r,
  userId: a,
  workspaceId: c,
  workspaceAccount: u,
  returnUrl: p,
  signal: m,
  onStageChange: h,
}) {
  let g = () => {
    if ((m.throwIfAborted(), s()?.userId !== a))
      throw new DOMException(`Checkout user changed`, `AbortError`);
  };
  (g(), h?.(`account_refresh_failed`));
  let _ = await f(o, m);
  if (_ == null || _.userId !== a) throw Error(`Checkout session unavailable`);
  if (
    (g(), u != null && (u.account.account_id !== c || u.account.is_deactivated || !u.can_access_with_session))
  )
    throw Error(`Checkout returned an inaccessible workspace account`);
  let v = t(_.accountId, a);
  h?.(`account_discovery_failed`);
  let y =
    u == null || e.queryClient.getQueryData(v) == null
      ? await i.safeGet(`/accounts/check/{version}`, {
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
            accounts: { ...t.accounts, [c]: u },
            account_ordering: t.account_ordering.includes(c)
              ? t.account_ordering
              : [...t.account_ordering, c],
          };
    }),
    x = b?.accounts[c];
  if (x == null || x.account.is_deactivated) return null;
  h?.(`workspace_switch_failed`);
  let { willRedirect: S } = await f(
    () =>
      d(
        {
          workspaceAccountId: c,
          workspaceName: x.account.name ?? null,
          workspaceImageUrl: x.account.profile_picture_url ?? null,
          accountResidencyRegion: x.account.account_residency_region,
          canAccessWithSession: x.can_access_with_session,
          isDeactivated: x.account.is_deactivated,
          isPersonalWorkspace: !1,
          isFedrampCompliantWorkspace: x.account.is_fedramp_compliant_workspace,
          ssoConnectionName: x.sso_connection_name,
        },
        l(r),
        p,
      ),
    m,
  );
  if ((g(), S)) return null;
  let C = t(c, a);
  (await e.queryClient.cancelQueries({ queryKey: C, exact: !0 }), g());
  let w = s();
  return w?.accountId !== c || n(w.accessToken)?.accountId !== c
    ? null
    : (e.queryClient.setQueryData(C, b), x);
}
function m() {
  return (m = e(() => {
    (c(), r(), a(), u());
  }))();
}
m();
export { p as prepareWorkspaceAccess };
//# sourceMappingURL=workspace-access.browser-d07a2c088ff8.js.map
