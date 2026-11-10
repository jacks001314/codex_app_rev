import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { frt as t, hrt as n, rst as r, spt as i } from "./app-shared-bbfeca5e5737.js";
import {
  CMr as a,
  CPt as o,
  Gjt as s,
  JPn as c,
  Kjt as l,
  TMr as u,
  Wjt as d,
  Ymr as f,
  ZPn as p,
  bPt as m,
  ehr as h,
  qjt as g,
  wPt as _,
} from "./app-initial-5851df3f6cb1.js";
async function v(e, t) {
  let n = await e.queryClient.ensureQueryData({
    queryKey: [`accounts`, `check`],
    queryFn: ({ signal: t }) => a(e, t),
    staleTime: 0,
  });
  t.signal.throwIfAborted();
  let r = n.accounts?.find((e) => e.id === t.expectedIdentity.accountId);
  if (r?.structure !== `workspace`) return null;
  let o = await f.safeGet(`/pageConfigs/billing`, {
    ...t,
    additionalHeaders: { [i]: t.expectedIdentity.accountId },
  });
  t.signal.throwIfAborted();
  let s = o.credits.credit_policy;
  if (o.credits.eligible && s?.kind === `business` && s.can_purchase_credits) return `add`;
  if (r.account_user_role === `account-owner`) return null;
  let c = d({ ...t.expectedIdentity, creditType: `credits` });
  return e.get(g, c) === !0 ? `requested` : `request`;
}
async function y(e, t) {
  let r = await v(e, t);
  if ((t.signal.throwIfAborted(), r === `add`)) {
    let e = new URL(`https://chatgpt.com/pricing/credits`);
    return (
      e.searchParams.set(`audience`, `workspace`),
      e.searchParams.set(`account_id`, t.expectedIdentity.accountId),
      e.searchParams.set(`return_to`, `/admin/billing`),
      p({ href: e.href, initiator: `open_in_browser_bridge` }),
      `opened`
    );
  }
  if (r === `requested`) return `requested`;
  if (r !== `request`) throw Error(`Workspace credits are unavailable`);
  if (e.queryClient.isMutating({ mutationKey: m }) > 0)
    throw Error(`A credit request is already in progress`);
  return e.queryClient
    .getMutationCache()
    .build(e.queryClient, {
      mutationKey: m,
      mutationFn: async () => {
        try {
          await _({ credit_type: `credits` }, t);
        } catch (e) {
          if (e instanceof n && e.status === 429) return `cooldown`;
          throw e;
        }
        let r = d({ ...t.expectedIdentity, creditType: `credits` });
        return (l(e, r), `requested`);
      },
    })
    .execute(void 0);
}
function b() {
  return (b = e(() => {
    (r(), u(), h(), c(), o(), s(), t());
  }))();
}
b();
export { v as getWorkspaceCreditAction, y as manageWorkspaceCredits };
//# sourceMappingURL=workspace-credits-e8e204c694ea.js.map
