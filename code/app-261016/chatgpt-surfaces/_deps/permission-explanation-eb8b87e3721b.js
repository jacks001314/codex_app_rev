import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  LNt as n,
  PBt as r,
  Pit as i,
  Qst as a,
  XOt as o,
  ZSt as s,
  jit as c,
  mCt as l,
  tkt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as d,
  CRn as f,
  Mmr as p,
  Nfr as m,
  Nmr as h,
  Pfr as g,
  RMr as _,
  Xmr as v,
  bRn as y,
  iRr as b,
  lLr as x,
  lNr as S,
  oOt as C,
  phr as w,
  sOt as T,
  sRr as E,
  tyr as D,
  wLr as O,
  zMr as k,
} from "./app-initial-ad16eaadf81f.js";
import { r as A } from "./workspace-plugin-permissions-4ff2558a0323.js";
function j({ account: e, rbacEnabled: t, permissions: n, isPending: r, isError: i }) {
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
function M(e) {
  return (e.allowMigrated === !0 || e.gptPermission === `allowed`) && N(e);
}
function N({
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
    !F(e, o) ||
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
function P({ resource: e, remigration: t, account: n, accountId: r, permissions: i, rbacEnabled: a }) {
  return (
    A(n, a) &&
    n?.structure === `workspace` &&
    n.id === r &&
    e.gizmo.workspace_id === n.id &&
    e.gizmo.author.user_id === n.account_user_id &&
    F(e, t) &&
    i != null &&
    !i.includes(`chatgpt.workspace_plugins.use`)
  );
}
function F({ gizmo: e }, t) {
  return (
    e.gizmo_type === `gpt` &&
    e.current_user_permission?.can_preview_business_agent_tools == null &&
    ((e.live_version ?? 0) > 0 || t != null)
  );
}
function I() {
  return (I = e(() => {}))();
}
function L(e, t, n) {
  if (t.type === `admin`) {
    let n = new URL(`/admin/plugins/${encodeURIComponent(e)}`, `https://chatgpt.com`);
    (n.searchParams.set(`catalog`, `WORKSPACE`),
      n.searchParams.set(`account_id`, t.accountId),
      f({ href: n.toString(), initiator: `open_in_browser_bridge` }));
    return;
  }
  T(e, n);
}
var R;
function z() {
  return (z = e(() => {
    (s(),
      v(),
      _(),
      O(),
      S(),
      D(),
      y(),
      C(),
      h(),
      g(),
      t(),
      E(),
      i(),
      (R = l(a, (e, { get: t, scope: n }) => {
        let r = t(k),
          i = t(d);
        return {
          enabled: r != null && i != null,
          queryKey: [`plugins`, `gpt-migration-access`, e, r, i],
          queryFn: async ({ signal: t }) => {
            if (r == null || i == null) return null;
            let { results: a } = await b.safePost(`/ps/plugins/batch`, {
                surface: `other`,
                requestBody: { plugin_ids: [e] },
                additionalHeaders: { ...p(`chatgpt`), "ChatGPT-Account-Id": r },
                signal: m(t),
              }),
              o = a.find(({ plugin: t }) => t.id === e)?.plugin;
            if (o != null)
              return o.status === `ENABLED` && o.installation_policy !== `NOT_AVAILABLE`
                ? { type: `plugin` }
                : null;
            let s = await n.query.fetch(x, r);
            t.throwIfAborted();
            let l = s.accounts[r]?.account;
            if (
              l?.account_id !== r ||
              l.structure !== `workspace` ||
              (l.account_user_role !== `account-admin` && l.account_user_role !== `account-owner`)
            )
              return null;
            try {
              let n = await b.safeGet(`/ps/plugins/admin/{plugin_id}`, {
                surface: `plugin_management`,
                parameters: { path: { plugin_id: e } },
                additionalHeaders: { "ChatGPT-Account-Id": r, [w]: `ADMIN_SETTING` },
                signal: m(t),
                expectedErrorStatuses: [403, 404],
              });
              return n.id === e && n.scope === `WORKSPACE` && n.workspace_id === r
                ? { type: `admin`, accountId: r }
                : null;
            } catch (e) {
              if (e instanceof c && (e.status === 403 || e.status === 404)) return null;
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
function B(e) {
  let t = (0, V.c)(3),
    { permission: n } = e;
  if (n === `allowed`) return null;
  if (n === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, H.jsx)(u, {
            id: `chatgptConversations.gpts.migration.checkingGptPermission`,
            defaultMessage: `Checking your workspace permissions…`,
            description: `Status on a disabled GPT migration button or in its confirmation dialog while the user's workspace permissions are loading`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `unavailable`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, H.jsx)(u, {
            id: `chatgptConversations.gpts.migration.gptPermissionUnavailable`,
            defaultMessage: `We couldn’t check your workspace permissions. Try again later.`,
            description: `Explanation on a disabled GPT migration button or in its confirmation dialog when workspace permissions could not be loaded; migration cannot proceed until permissions are verified`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, H.jsx)(u, {
          id: `chatgptConversations.gpts.migration.gptPermissionRequired`,
          defaultMessage: `You need Create and manage GPTs permission to migrate this GPT. Ask a workspace admin for access.`,
          description: `Explanation on a disabled GPT migration button or in its confirmation dialog when the acting user's role lacks the required workspace permission, including administrators migrating another user's GPT. Create and manage GPTs is the exact permission label in Admin Console that a workspace admin must enable for the user's role.`,
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = r()), o(), (H = n()));
  }))();
}
export { L as a, j as c, R as i, I as l, U as n, M as o, z as r, N as s, B as t, P as u };
//# sourceMappingURL=permission-explanation-eb8b87e3721b.js.map
