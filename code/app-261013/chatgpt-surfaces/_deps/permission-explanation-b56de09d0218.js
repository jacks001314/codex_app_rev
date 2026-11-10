import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as n,
  Pxt as r,
  Zxt as i,
  hrt as a,
  jDt as o,
  vrt as s,
  vzt as c,
  wot as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Gcr as d,
  Hur as f,
  JPn as p,
  LMr as m,
  Sit as h,
  Vur as g,
  Wcr as _,
  XMr as v,
  Ymr as y,
  ZPn as b,
  ehr as x,
  gOr as S,
  gdr as C,
  hOr as w,
  iPr as T,
  idr as E,
  sPr as D,
  tNr as O,
  xit as k,
  zOr as A,
} from "./app-initial-5851df3f6cb1.js";
import { r as j } from "./workspace-plugin-permissions-a5234cd2a14d.js";
function M({ account: e, rbacEnabled: t, permissions: n, isPending: r, isError: i }) {
  return !t || e?.structure === `personal`
    ? `allowed`
    : e == null || r
      ? `loading`
      : i || n == null
        ? `unavailable`
        : n.includes(`chatgpt.workspace.gpt.crud`)
          ? `allowed`
          : `denied`;
}
function N(e) {
  return (e.allowMigrated === !0 || e.gptPermission === `allowed`) && P(e);
}
function P({
  resource: e,
  account: t,
  accountId: n,
  userId: r,
  enabled: i,
  allowMigrated: a = !1,
  remigration: o,
}) {
  let { gizmo: s } = e;
  return !i ||
    n == null ||
    t?.id !== n ||
    !I(e, o) ||
    (!a && !o && s.migrated_plugin_id != null) ||
    (s.workspace_id ?? null) !== (t.structure === `workspace` ? t.id : null)
    ? !1
    : s.author.user_id === (t.structure === `personal` ? r : t.account_user_id)
      ? s.current_user_permission?.can_view_config === !0 &&
        (s.current_user_permission.can_write === !0 || o != null)
      : t.structure === `workspace` &&
        (t.account_user_role === `account-owner` || t.account_user_role === `account-admin`) &&
        s.share_recipient !== `private` &&
        s.current_user_permission?.can_read === !0;
}
function F({ resource: e, remigration: t, account: n, accountId: r, permissions: i, rbacEnabled: a }) {
  return (
    j(n, a) &&
    n?.structure === `workspace` &&
    n.id === r &&
    e.gizmo.workspace_id === n.id &&
    e.gizmo.author.user_id === n.account_user_id &&
    I(e, t) &&
    i != null &&
    !i.includes(`chatgpt.workspace_plugins.use`)
  );
}
function I({ gizmo: e }, t) {
  return (
    e.gizmo_type === `gpt` &&
    e.current_user_permission?.can_preview_business_agent_tools == null &&
    ((e.live_version ?? 0) > 0 || t != null)
  );
}
function L() {
  return (L = e(() => {}))();
}
function R(e, t, n) {
  if (t.type === `admin`) {
    let n = new URL(`/admin/plugins/${encodeURIComponent(e)}`, `https://chatgpt.com`);
    (n.searchParams.set(`catalog`, `WORKSPACE`),
      n.searchParams.set(`account_id`, t.accountId),
      b({ href: n.toString(), initiator: `open_in_browser_bridge` }));
    return;
  }
  h(e, n);
}
var z;
function B() {
  return (B = e(() => {
    (r(),
      E(),
      w(),
      O(),
      A(),
      x(),
      p(),
      k(),
      f(),
      d(),
      l(),
      D(),
      s(),
      (z = i(t, (e, { get: t, scope: n }) => {
        let r = t(S),
          i = t(v);
        return {
          enabled: r != null && i != null,
          queryKey: [`plugins`, `gpt-migration-access`, e, r, i],
          queryFn: async ({ signal: t }) => {
            if (r == null || i == null) return null;
            let { results: o } = await T.safePost(`/ps/plugins/batch`, {
                surface: `other`,
                requestBody: { plugin_ids: [e] },
                additionalHeaders: { ...g(`chatgpt`), "ChatGPT-Account-Id": r },
                signal: _(t),
              }),
              s = o.find(({ plugin: t }) => t.id === e)?.plugin;
            if (s != null)
              return s.status === `ENABLED` && s.installation_policy !== `NOT_AVAILABLE`
                ? { type: `plugin` }
                : null;
            let c = await n.query.fetch(m, r);
            t.throwIfAborted();
            let l = c.accounts[r]?.account;
            if (
              l?.account_id !== r ||
              l.structure !== `workspace` ||
              (l.account_user_role !== `account-admin` && l.account_user_role !== `account-owner`)
            )
              return null;
            try {
              let n = await y.safeGet(`/ps/plugins/admin/{plugin_id}`, {
                surface: `plugin_management`,
                parameters: { path: { plugin_id: e } },
                additionalHeaders: { "ChatGPT-Account-Id": r, [C]: `ADMIN_SETTING` },
                signal: _(t),
                expectedErrorStatuses: [403, 404],
              });
              return n.id === e && n.scope === `WORKSPACE` && n.workspace_id === r
                ? { type: `admin`, accountId: r }
                : null;
            } catch (e) {
              if (e instanceof a && (e.status === 403 || e.status === 404)) return null;
              throw e;
            }
          },
          staleTime: 0,
          refetchOnMount: `always`,
          refetchOnWindowFocus: !0,
          retry: !1,
        };
      })));
  }))();
}
function V(e) {
  let t = (0, H.c)(3),
    { permission: r } = e;
  if (r === `allowed`) return null;
  if (r === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(n, {
            id: `chatgptConversations.gpts.migration.checkingGptPermission`,
            defaultMessage: `Checking your workspace permissions…`,
            description: `Status on a disabled GPT migration button or in its confirmation dialog while the user's workspace permissions are loading`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r === `unavailable`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(n, {
            id: `chatgptConversations.gpts.migration.gptPermissionUnavailable`,
            defaultMessage: `We couldn’t check your workspace permissions. Try again later.`,
            description: `Explanation on a disabled GPT migration button or in its confirmation dialog when workspace permissions could not be loaded; migration cannot proceed until permissions are verified`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, U.jsx)(n, {
          id: `chatgptConversations.gpts.migration.gptPermissionRequired`,
          defaultMessage: `You need Create and manage GPTs permission to migrate this GPT. Ask a workspace admin for access.`,
          description: `Explanation on a disabled GPT migration button or in its confirmation dialog when the acting user's role lacks the required workspace permission, including administrators migrating another user's GPT. Create and manage GPTs is the exact permission label in Admin Console that a workspace admin must enable for the user's role.`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = c()), o(), (U = u()));
  }))();
}
export { R as a, M as c, z as i, L as l, W as n, N as o, B as r, P as s, V as t, F as u };
//# sourceMappingURL=permission-explanation-b56de09d0218.js.map
