import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Oit as t, Smt as n, jit as r, sct as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  Ajt as a,
  BOt as o,
  CRn as s,
  Djt as c,
  HOt as l,
  JIr as u,
  UOt as d,
  VOt as f,
  XIr as p,
  bRn as m,
  iRr as h,
  jjt as g,
  tyr as _,
} from "./app-initial-ad16eaadf81f.js";
async function v(e, t) {
  let r = await e.queryClient.ensureQueryData({
    queryKey: [`accounts`, `check`],
    queryFn: ({ signal: t }) => u(e, t),
    staleTime: 0,
  });
  t.signal.throwIfAborted();
  let i = r.accounts?.find((e) => e.id === t.expectedIdentity.accountId);
  if (i?.structure !== `workspace`) return null;
  let a = await h.safeGet(`/pageConfigs/billing`, {
    ...t,
    additionalHeaders: { [n]: t.expectedIdentity.accountId },
  });
  t.signal.throwIfAborted();
  let s = a.credits.credit_policy;
  if (a.credits.eligible && s?.kind === `business` && s.can_purchase_credits) return `add`;
  if (i.account_user_role === `account-owner`) return null;
  let c = o({ ...t.expectedIdentity, creditType: `credits` });
  return e.get(d, c) === !0 ? `requested` : `request`;
}
async function y(e, t) {
  let n = await v(e, t);
  if ((t.signal.throwIfAborted(), n === `add`)) {
    let e = new URL(`https://chatgpt.com/pricing/credits`);
    return (
      e.searchParams.set(`audience`, `workspace`),
      e.searchParams.set(`account_id`, t.expectedIdentity.accountId),
      e.searchParams.set(`return_to`, `/admin/billing`),
      s({ href: e.href, initiator: `open_in_browser_bridge` }),
      `opened`
    );
  }
  if (n === `requested`) return `requested`;
  if (n !== `request`) throw Error(`Workspace credits are unavailable`);
  if (e.queryClient.isMutating({ mutationKey: c }) > 0)
    throw Error(`A credit request is already in progress`);
  return e.queryClient
    .getMutationCache()
    .build(e.queryClient, {
      mutationKey: c,
      mutationFn: async () => {
        try {
          await g({ credit_type: `credits` }, t);
        } catch (e) {
          if (e instanceof r && e.status === 429) return `cooldown`;
          throw e;
        }
        let n = o({ ...t.expectedIdentity, creditType: `credits` });
        return (l(e, n), `requested`);
      },
    })
    .execute(void 0);
}
function b() {
  return (b = e(() => {
    (i(), p(), _(), m(), a(), f(), t());
  }))();
}
b();
export { v as getWorkspaceCreditAction, y as manageWorkspaceCredits };
//# sourceMappingURL=workspace-credits-a92d87cc435f.js.map
