import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Cxt as n,
  EPt as r,
  NLt as i,
  TLt as a,
  Xot as o,
  Yot as s,
  _xt as c,
  lxt as l,
  mxt as u,
  oxt as d,
  pIt as f,
  pLt as p,
  vxt as m,
  vzt as h,
  wxt as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  Adt as y,
  Cwr as b,
  NNr as x,
  QTr as S,
  SG as C,
  TNr as w,
  Ymr as T,
  _wr as E,
  aDr as D,
  aj as O,
  bTn as k,
  cEr as A,
  eDr as j,
  ehr as M,
  fur as N,
  iN as P,
  ij as F,
  jdt as I,
  oEr as L,
  pur as R,
  rN as ee,
  xG as te,
  yNr as z,
  yTn as B,
} from "./app-initial-5851df3f6cb1.js";
import { d as V, l as H, o as U, s as W } from "./workspace-621c2c3096f1.js";
function G(e) {
  let t = (0, J.c)(31),
    { accountId: r, destination: i, documentHandoff: a, reloadOnSelection: s, unavailablePath: c } = e,
    f = s !== void 0 && s,
    { userId: p, accountId: h } = R(),
    _ = g(),
    v = (0, Y.useContext)(l).matches.at(-1)?.route.children,
    b = n(i),
    C = n(a?.returnTo ?? i),
    w = n(c),
    O = D(),
    k;
  t[0] !== r ||
  t[1] !== b ||
  t[2] !== a ||
  t[3] !== _.key ||
  t[4] !== f ||
  t[5] !== C ||
  t[6] !== w ||
  t[7] !== p
    ? ((k = [`workspace-link-account`, _.key, p, r, b, w, f, a, C]),
      (t[0] = r),
      (t[1] = b),
      (t[2] = a),
      (t[3] = _.key),
      (t[4] = f),
      (t[5] = C),
      (t[6] = w),
      (t[7] = p),
      (t[8] = k))
    : (k = t[8]);
  let A;
  t[9] !== r ||
  t[10] !== h ||
  t[11] !== i ||
  t[12] !== a ||
  t[13] !== _.pathname ||
  t[14] !== _.search ||
  t[15] !== f ||
  t[16] !== C ||
  t[17] !== O ||
  t[18] !== w
    ? ((A = async (e) => {
        let { signal: t } = e,
          n = await T.safeGet(`/accounts/check/{version}`, {
            parameters: { path: { version: `v4-2023-04-27` } },
            signal: t,
          });
        t.throwIfAborted();
        let o = r === `personal` && a == null ? Object.values(n.accounts).find(K) : n.accounts[r],
          s = o?.account;
        if (o == null || s?.account_id == null || s.is_deactivated === !0)
          return f
            ? (H(x(z()?.accessToken ?? ``)?.accountId ?? void 0), await U(w, t), `switching`)
            : `unavailable`;
        if (
          !f &&
          h === s.account_id &&
          o.can_access_with_session !== !1 &&
          (a == null || x(z()?.accessToken ?? ``)?.accountId === s.account_id)
        )
          return a == null
            ? `selected`
            : (window.location.replace(typeof i == `string` ? i : u(i)), `switching`);
        if (
          a?.attempted === `select` ||
          (a?.attempted === `authenticate` && o.can_access_with_session === !1)
        )
          return `unavailable`;
        let c = m(S, _.pathname)?.params.projectId,
          l = L(new URLSearchParams(_.search));
        if (c != null && l != null && o.can_access_with_session !== !1) {
          try {
            await T.safeGet(`/websites/{project_id}/access_request`, {
              additionalHeaders: { "ChatGPT-Account-ID": s.account_id },
              parameters: { path: { project_id: c }, query: { token: l } },
              signal: t,
            });
          } catch {
            return (t.throwIfAborted(), `selected`);
          }
          t.throwIfAborted();
        }
        let d = C;
        if (a != null) {
          let e = new URL(C, window.location.origin);
          (e.searchParams.set(
            `handoff_attempt`,
            o.can_access_with_session === !1 ? `authenticate` : `select`,
          ),
            (d = e.toString()));
        }
        return (
          await V(
            {
              workspaceAccountId: s.account_id,
              workspaceName: s.name ?? null,
              workspaceImageUrl: s.profile_picture_url ?? null,
              isPersonalWorkspace: s.structure === `personal`,
              isDeactivated: s.is_deactivated,
              accountResidencyRegion: s.account_residency_region,
              isFedrampCompliantWorkspace: s.is_fedramp_compliant_workspace,
              canAccessWithSession: o.can_access_with_session,
              ssoConnectionName: o.sso_connection_name,
            },
            O,
            d,
            t,
          ),
          `switching`
        );
      }),
      (t[9] = r),
      (t[10] = h),
      (t[11] = i),
      (t[12] = a),
      (t[13] = _.pathname),
      (t[14] = _.search),
      (t[15] = f),
      (t[16] = C),
      (t[17] = O),
      (t[18] = w),
      (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] !== k || t[21] !== A
    ? ((j = {
        queryKey: k,
        queryFn: A,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[20] = k),
      (t[21] = A),
      (t[22] = j))
    : (j = t[22]);
  let { data: M, error: N } = o(j);
  if (N) throw N;
  if (M === `unavailable`) {
    let e;
    return (
      t[23] === c ? (e = t[24]) : ((e = (0, X.jsx)(d, { to: c, replace: !0 })), (t[23] = c), (t[24] = e)),
      e
    );
  }
  if (M === `selected`) {
    let e;
    return (
      t[25] === i ? (e = t[26]) : ((e = (0, X.jsx)(d, { to: i, replace: !0 })), (t[25] = i), (t[26] = e)),
      e
    );
  }
  let P = te,
    I = E({ ..._, routeTemplate: v == null ? _.pathname : y(v, _.pathname) }),
    W;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, X.jsxs)(ee, { children: [(0, X.jsx)(F, {}), (0, X.jsx)(B, {})] })), (t[27] = W))
    : (W = t[27]);
  let G;
  return (
    t[28] !== P || t[29] !== I
      ? ((G = (0, X.jsx)(P, { route: I, children: W })), (t[28] = P), (t[29] = I), (t[30] = G))
      : (G = t[30]),
    G
  );
}
function K(e) {
  return e.account.structure === `personal`;
}
function q() {
  let e = (0, J.c)(14),
    t = g(),
    n,
    r,
    i,
    a,
    o;
  if (e[0] !== t.search) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let s = new URLSearchParams(t.search),
        c = Q.safeParse({
          source: s.getAll(`source`),
          accountId: s.getAll(`account_id`),
          connectorId: s.getAll(`connector`),
        });
      if (!c.success) {
        let t;
        (e[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, X.jsx)(d, { to: `/settings/plugins-settings`, replace: !0 })), (e[6] = t))
          : (t = e[6]),
          (o = t));
        break bb0;
      }
      let l = new URLSearchParams({ "product-sku": `CODEX` }),
        u = c.data.connectorId[0];
      (u != null && l.set(`connector`, u),
        (n = G),
        (a = c.data.accountId[0]),
        (r = `/settings/connectors`),
        (i = l.toString()));
    }
    ((e[0] = t.search), (e[1] = n), (e[2] = r), (e[3] = i), (e[4] = a), (e[5] = o));
  } else ((n = e[1]), (r = e[2]), (i = e[3]), (a = e[4]), (o = e[5]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s;
  e[7] !== r || e[8] !== i
    ? ((s = { pathname: r, search: i }), (e[7] = r), (e[8] = i), (e[9] = s))
    : (s = e[9]);
  let c;
  return (
    e[10] !== n || e[11] !== a || e[12] !== s
      ? ((c = (0, X.jsx)(n, { accountId: a, destination: s, unavailablePath: `/settings/plugins-settings` })),
        (e[10] = n),
        (e[11] = a),
        (e[12] = s),
        (e[13] = c))
      : (c = e[13]),
    c
  );
}
var J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((J = h()),
      s(),
      (Y = v()),
      c(),
      r(),
      I(),
      A(),
      w(),
      N(),
      M(),
      k(),
      P(),
      b(),
      C(),
      W(),
      j(),
      O(),
      (X = _()),
      (Z = a().regex(/^[a-zA-Z0-9_-]{1,255}$/)),
      (Q = p({ source: i([t(`codex-code-attribution`)]), accountId: i([Z]), connectorId: f(Z).max(1) })));
  }))();
}
$();
export { q as CodeAttributionConnectorAccountRoute, G as WorkspaceLinkRoute };
//# sourceMappingURL=workspace-link-route.browser-f275355ffb4b.js.map
