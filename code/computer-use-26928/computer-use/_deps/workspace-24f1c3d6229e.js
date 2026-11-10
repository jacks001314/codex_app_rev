import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Ot as t,
  Fun as n,
  Qun as r,
  Skt as i,
  Wun as a,
  bkt as o,
  bun as s,
  fjt as c,
  hkt as l,
  lkt as u,
  okt as d,
  pjt as f,
  rkt as p,
  tkt as m,
  wkt as h,
} from "./app-shared-7552fc8d5d82.js";
import { HD as g, VD as _, dO as v, uO as ee } from "./app-initial-3916b423772b.js";
import { a as te, i as y } from "./logout-engine-f18fa83948b6.js";
import { n as ne, t as re } from "./session-d2cb0349007d.js";
async function b(e, t, n, r) {
  if (u()) throw Error(`Workspace switch already in progress`);
  let i = S(e).find(
    (e) =>
      !e.isDeactivated && (t === `personal` ? e.isPersonalWorkspace : e.workspaceAccountId === t),
  );
  if (i == null) throw Error(`Workspace unavailable`);
  await x(i, n, r);
}
async function x(e, n, r, i) {
  if ((i?.throwIfAborted(), u())) throw Error(`Workspace switch already in progress`);
  let a = r == null ? void 0 : V(r),
    o = t();
  try {
    let { willRedirect: t } = await C(e, P(n), a, void 0, i);
    t || (await I(a ?? V(), i));
  } finally {
    o();
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
async function C(e, n, r, i, a) {
  a?.throwIfAborted();
  let o = t();
  try {
    if (e.canAccessWithSession === !1) {
      let t = E();
      k(e, n, !0);
      try {
        await F(e.ssoConnectionName ?? null, r ?? V(), a);
      } catch (e) {
        throw (D(t), e);
      }
      return { willRedirect: !0 };
    }
    let t = E();
    O(e, n);
    try {
      await w(e);
    } catch (e) {
      throw (D(t), e);
    }
    return (
      k(e, n, !0, i),
      (t.workspace ?? `personal`) === (h(`_account`) ?? `personal`)
        ? { willRedirect: !1 }
        : (await I(r ?? V(), a), { willRedirect: !0 })
    );
  } finally {
    o();
  }
}
async function w(e) {
  let t = p()?.accessToken;
  l(t ?? ``)?.accountId !== e.workspaceAccountId && (await y(), await T(e.workspaceAccountId));
}
async function T(e) {
  await o(async () => {
    let t = new URL(U, window.location.origin);
    (t.searchParams.set(`exchange_workspace_token`, `true`),
      t.searchParams.set(`workspace_id`, e),
      t.searchParams.set(`reason`, `setCurrentAccount`));
    let n = await fetch(t, {
        credentials: `include`,
        headers: { [Y]: c(), [W]: t.pathname, [G]: U },
      }),
      r = await n.json().catch(() => null),
      a = X.safeParse(r),
      o = a.success ? a.data.workspaceTokenExchangeError : void 0;
    if (o != null)
      throw new Q(
        o.code,
        o.message ?? `Your IP is not authorized to access this workspace.`,
        o.workspaceId,
      );
    let s = a.success ? a.data.accessToken : void 0;
    if (
      n.status !== 200 ||
      !a.success ||
      a.data.error != null ||
      a.data.workspaceTokenExchangeError != null ||
      s == null ||
      l(s)?.accountId !== e
    )
      throw Error(
        `Workspace token exchange did not return an access token for the requested workspace.`,
      );
    i(s);
  });
}
function E() {
  return {
    workspace: h(`_account`),
    residencyRegion: h(`_account_residency_region`),
    routingOverride: h(`_account_routing_override`),
    isFedrampCompliant: h(`_account_is_fedramp`),
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
    (L(
      `_account_is_fedramp`,
      String(e.isPersonalWorkspace !== !0 && e.isFedrampCompliantWorkspace === !0),
    ),
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
async function F(e, n = V(), r) {
  r?.throwIfAborted();
  let i = t();
  try {
    let t = new URL(n, window.location.origin);
    if (e != null) {
      let n = await ne(t.toString(), { connection: e });
      if ((r?.throwIfAborted(), !n.ok)) throw Error(`Failed to start workspace authentication`);
      window.location.assign(n.url);
      return;
    }
    let i = m(`login`);
    (i.searchParams.set(`next`, t.pathname + t.search + t.hash),
      window.location.assign(i.toString()));
  } catch (e) {
    throw (i(), e);
  }
}
async function I(e, n) {
  let r = t();
  try {
    (await _(() => {}), ee(), n?.aborted ? window.location.reload() : window.location.assign(e));
  } catch (e) {
    throw (r(), e);
  }
}
function L(e, t, n = q) {
  let r = window.location.protocol === `https:` ? `; Secure` : ``;
  document.cookie =
    e + `=` + encodeURIComponent(t) + `; Max-Age=` + n + `; Path=/; SameSite=Lax` + r;
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
    (s(),
      d(),
      g(),
      te(),
      f(),
      re(),
      v(),
      (U = `/api/auth/session`),
      (W = `X-OpenAI-Target-Path`),
      (G = `X-OpenAI-Target-Route`),
      (K = `personal`),
      (q = 7776e3),
      (J = 86400),
      (Y = `OAI-Device-Id`),
      (X = a({
        accessToken: r().min(1).optional(),
        error: r().nullish(),
        workspaceTokenExchangeError: a({
          code: r().optional(),
          message: r().optional(),
          workspaceId: r().optional(),
        }).nullish(),
      })),
      (Z = a({
        account_residency_region: r().optional(),
        can_access_with_session: n().optional(),
        is_deactivated: n().optional(),
        is_fedramp_compliant_workspace: n().optional(),
        sso_connection_name: r().nullable().optional(),
      })),
      (Q = class extends Error {
        code;
        workspaceId;
        constructor(e, t, n) {
          (super(t),
            (this.code = e),
            (this.workspaceId = n),
            (this.name = `WorkspaceTokenExchangeError`));
        }
      }));
  }))();
}
export {
  V as a,
  H as c,
  x as d,
  b as f,
  P as i,
  j as l,
  Q as n,
  I as o,
  S as r,
  $ as s,
  K as t,
  C as u,
};
//# sourceMappingURL=workspace-24f1c3d6229e.js.map
