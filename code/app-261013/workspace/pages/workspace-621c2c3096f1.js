import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, TLt as n, _It as r, eLt as i } from "./app-shared-bbfeca5e5737.js";
import {
  BNr as a,
  CN as o,
  JN as s,
  LNr as ee,
  NNr as c,
  ONr as l,
  SN as u,
  TNr as d,
  VNr as f,
  YN as p,
  hNr as m,
  mPr as h,
  pPr as g,
  yNr as _,
} from "./app-initial-5851df3f6cb1.js";
import { n as v, t as y } from "./session-594d75fbcc25.js";
async function b(e, t, n, r, i) {
  if (l()) throw Error(`Workspace switch already in progress`);
  let a = S(e).find(
    (e) => !e.isDeactivated && (t === `personal` ? e.isPersonalWorkspace : e.workspaceAccountId === t),
  );
  if (a == null) throw Error(`Workspace unavailable`);
  await x(a, n, r, i);
}
async function x(e, t, n, r) {
  if ((r?.throwIfAborted(), l())) throw Error(`Workspace switch already in progress`);
  let i = n == null ? void 0 : V(n),
    a = m();
  try {
    let { willRedirect: n } = await C(e, P(t), i, void 0, r);
    n || (await I(i ?? V(), r));
  } finally {
    a();
  }
}
function S(e) {
  let t = e?.accounts ?? [],
    n = new Map(t.map((e) => [e.id, e])),
    r = [
      ...(e?.account_ordering ?? []).flatMap((e) => {
        let t = n.get(e);
        return t == null ? [] : [t];
      }),
      ...t.filter((t) => !(e?.account_ordering ?? []).includes(t.id)),
    ],
    i = new Set(),
    a = !1,
    o = [],
    s = [];
  for (let e of r) {
    if (i.has(e.id)) continue;
    i.add(e.id);
    let t = e.structure.toLowerCase() === `personal`;
    if (t && a) continue;
    let n = {
      ...B(e),
      isPersonalWorkspace: t,
      workspaceAccountId: e.id,
      workspaceImageUrl: e.profile_picture_url ?? null,
      workspaceName: e.name?.trim() || null,
    };
    t ? ((a = !0), o.push(n)) : s.push(n);
  }
  return [...s, ...o];
}
async function C(e, t, n, r, i) {
  i?.throwIfAborted();
  let a = m();
  try {
    if (e.canAccessWithSession === !1) {
      let r = E();
      k(e, t, !0);
      try {
        await F(e, n ?? V(), i);
      } catch (e) {
        throw (D(r), e);
      }
      return { willRedirect: !0 };
    }
    let a = E();
    O(e, t);
    try {
      await w(e);
    } catch (e) {
      throw (D(a), e);
    }
    return (
      k(e, t, !0, r),
      (a.workspace ?? `personal`) === (f(`_account`) ?? `personal`)
        ? { willRedirect: !1 }
        : (await I(n ?? V(), i), { willRedirect: !0 })
    );
  } finally {
    a();
  }
}
async function w(e) {
  let t = _()?.accessToken;
  c(t ?? ``)?.accountId !== e.workspaceAccountId && (await T(e.workspaceAccountId));
}
async function T(e) {
  await ee(async () => {
    let t = new URL(U, window.location.origin);
    (t.searchParams.set(`exchange_workspace_token`, `true`),
      t.searchParams.set(`workspace_id`, e),
      t.searchParams.set(`reason`, `setCurrentAccount`));
    let n = await fetch(t, { credentials: `include`, headers: { [Y]: g(), [W]: t.pathname, [G]: U } }),
      r = await n.json().catch(() => null),
      i = X.safeParse(r),
      o = i.success ? i.data.workspaceTokenExchangeError : void 0;
    if (o != null)
      throw new Q(o.code, o.message ?? `Your IP is not authorized to access this workspace.`, o.workspaceId);
    let s = i.success ? i.data.accessToken : void 0;
    if (
      n.status !== 200 ||
      !i.success ||
      i.data.error != null ||
      i.data.workspaceTokenExchangeError != null ||
      s == null ||
      c(s)?.accountId !== e
    )
      throw Error(`Workspace token exchange did not return an access token for the requested workspace.`);
    a(s);
  });
}
function E() {
  return {
    workspace: f(`_account`),
    residencyRegion: f(`_account_residency_region`),
    routingOverride: f(`_account_routing_override`),
    isFedrampCompliant: f(`_account_is_fedramp`),
  };
}
function D(e) {
  (j(e.workspace),
    R(`_account_residency_region`, e.residencyRegion),
    R(`_account_routing_override`, e.routingOverride),
    R(`_account_is_fedramp`, e.isFedrampCompliant));
}
function O(e, t) {
  e.isPersonalWorkspace !== !0 && A(e, t);
}
function k(e, t, n, r) {
  (A(e, t),
    e.isPersonalWorkspace === !0
      ? (N(), n && j(K))
      : (j(e.workspaceAccountId), M(e.accountResidencyRegion ?? `no_constraint`, t)),
    z(`oai-downgrade-account-enabled`),
    e.isPersonalWorkspace && r != null
      ? L(`oai-dogfooding-account-type`, r, J)
      : z(`oai-dogfooding-account-type`));
}
function A(e, t) {
  if (
    (L(`_account_is_fedramp`, String(e.isPersonalWorkspace !== !0 && e.isFedrampCompliantWorkspace === !0)),
    e.isPersonalWorkspace === !0)
  ) {
    N();
    return;
  }
  M(e.accountResidencyRegion ?? `no_constraint`, t);
}
function j(e) {
  if (e == null) {
    (z(`_account`), z(`_account_is_fedramp`));
    return;
  }
  (L(`_account`, e), e === `personal` && L(`_account_is_fedramp`, `false`));
}
function M(e, t) {
  if ((L(`_account_residency_region`, e), t == null)) {
    z(`_account_routing_override`);
    return;
  }
  L(`_account_routing_override`, t);
}
function N() {
  (z(`_account_residency_region`), z(`_account_routing_override`));
}
function P(e) {
  try {
    let t = e.getDynamicConfig(`762342243`)?.value?.override;
    return typeof t == `string` && t.trim().length > 0 ? t.trim().toLowerCase() : null;
  } catch {
    return null;
  }
}
async function F(e, t = V(), n) {
  n?.throwIfAborted();
  let r = m();
  try {
    let r = new URL(t, window.location.origin),
      i = { current_workspace_id: e.workspaceAccountId },
      a = _()?.email;
    (a != null && (i.login_hint = a), e.ssoConnectionName != null && (i.connection = e.ssoConnectionName));
    let o = await v(r.toString(), i, n);
    if ((n?.throwIfAborted(), !o.ok)) throw Error(`Failed to start workspace authentication`);
    (await u(() => {}), window.location.assign(o.url));
  } catch (e) {
    throw (r(), e);
  }
}
async function I(e, t) {
  let n = m();
  try {
    (await u(() => {}), s(), t?.aborted ? window.location.reload() : window.location.assign(e));
  } catch (e) {
    throw (n(), e);
  }
}
function L(e, t, n = q) {
  let r = window.location.protocol === `https:` ? `; Secure` : ``;
  document.cookie = e + `=` + encodeURIComponent(t) + `; Max-Age=` + n + `; Path=/; SameSite=Lax` + r;
}
function R(e, t) {
  if (t == null) {
    z(e);
    return;
  }
  L(e, t);
}
function z(e) {
  document.cookie = e + `=; Max-Age=0; Path=/; SameSite=Lax`;
}
function B(e) {
  let t = Z.safeParse(e);
  return {
    accountResidencyRegion: t.success
      ? (t.data.account_residency_region ?? `no_constraint`)
      : `no_constraint`,
    canAccessWithSession: !t.success || t.data.can_access_with_session !== !1,
    isDeactivated: t.success && t.data.is_deactivated === !0,
    isFedrampCompliantWorkspace: t.success && t.data.is_fedramp_compliant_workspace === !0,
    ssoConnectionName: t.success ? (t.data.sso_connection_name ?? null) : null,
  };
}
function V(e) {
  let t = new URL(e ?? window.location.href, window.location.origin);
  return (
    t.searchParams.delete(`refresh_account`),
    t.searchParams.set(`account_switch`, `true`),
    t.toString()
  );
}
function H(e, t) {
  let n = S(e).find((e) => e.workspaceAccountId === t);
  n != null && j(n.isPersonalWorkspace ? K : n.workspaceAccountId);
}
var U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (t(),
      d(),
      o(),
      h(),
      y(),
      p(),
      (U = `/api/auth/session`),
      (W = `X-OpenAI-Target-Path`),
      (G = `X-OpenAI-Target-Route`),
      (K = `personal`),
      (q = 7776e3),
      (J = 86400),
      (Y = `OAI-Device-Id`),
      (X = i({
        accessToken: n().min(1).optional(),
        error: n().nullish(),
        workspaceTokenExchangeError: i({
          code: n().optional(),
          message: n().optional(),
          workspaceId: n().optional(),
        }).nullish(),
      })),
      (Z = i({
        account_residency_region: n().optional(),
        can_access_with_session: r().optional(),
        is_deactivated: r().optional(),
        is_fedramp_compliant_workspace: r().optional(),
        sso_connection_name: n().nullable().optional(),
      })),
      (Q = class extends Error {
        code;
        workspaceId;
        constructor(e, t, n) {
          (super(t), (this.code = e), (this.workspaceId = n), (this.name = `WorkspaceTokenExchangeError`));
        }
      }));
  }))();
}
export { V as a, H as c, x as d, b as f, P as i, j as l, Q as n, I as o, S as r, $ as s, K as t, C as u };
//# sourceMappingURL=workspace-621c2c3096f1.js.map
