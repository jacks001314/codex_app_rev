import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { hot as t, lot as n } from "./app-shared-bbfeca5e5737.js";
import { AMr as r, FMr as i, IMr as a } from "./app-initial-5851df3f6cb1.js";
function o(e, t, n, r, o = `onboarding`) {
  let s = e.accounts[t],
    c = Object.values(e.accounts).find(({ account: e }) => e.structure === `personal` && !e.is_deactivated);
  if (s?.account.structure === `personal`) return { accounts: null, reason: `select-workspace` };
  if (
    s?.account.structure !== `workspace` ||
    s.account.is_deactivated ||
    s.can_access_with_session === !1 ||
    s.features?.includes(`codex_only`) ||
    s.account.started_as_free_workspace ||
    (o === `settings` && (!i(s.account.plan_type) || a(s.account.plan_type)))
  )
    return { accounts: null, reason: `unavailable` };
  if (c?.account.account_id == null) return { accounts: null, reason: `no-personal-workspace` };
  let l = s.account.account_residency_region;
  return l !== `` && l !== `no_constraint` && (!n || !r)
    ? { accounts: null, reason: `data-residency` }
    : { accounts: { destination: s.account, personalAccountId: c.account.account_id }, reason: null };
}
var s;
function c() {
  return (c = e(() => {
    (r(), (s = `oai/apps/hasSeenMigrationOnboarding`));
  }))();
}
function l(e, n) {
  e.get(t).success(
    n.formatMessage({
      id: `chatgpt.account_transfer.toast.migration_started`,
      defaultMessage: `Your data is being migrated into this workspace. It will appear gradually, and the full process may take some time to finish.`,
      description: `Success toast shown after the app switches to the destination workspace for a personal workspace merge or an internal test copy from a personal account or workspace. The migration runs asynchronously, so this message confirms that copying started rather than claiming it finished. Shown to the signed-in user; no placeholders.`,
    }),
    { id: `personal-migration-started`, duration: 1 / 0, hasCloseButton: !0 },
  );
}
function u() {
  return (u = e(() => {
    n();
  }))();
}
export { c as a, o as i, l as n, s as r, u as t };
//# sourceMappingURL=started-toast-a5d7b9a4a671.js.map
