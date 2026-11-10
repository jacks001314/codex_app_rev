import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $un as t,
  AJt as n,
  Jun as r,
  Mun as i,
  Qun as a,
  Uun as o,
  _5t as s,
  _dn as c,
  a5t as l,
  bun as u,
  bvt as d,
  c$ as f,
  cMt as p,
  d5t as m,
  f5t as h,
  fbt as g,
  hkt as _,
  hvt as v,
  jJt as y,
  lG as b,
  mcn as x,
  n$ as S,
  n5t as C,
  nbt as w,
  okt as T,
  pMt as E,
  rkt as D,
  uG as O,
  ubt as k,
  v5t as A,
  vdn as j,
} from "./app-shared-7552fc8d5d82.js";
import {
  Btt as M,
  CD as N,
  GM as P,
  IT as ee,
  KM as F,
  LT as I,
  NJt as L,
  PJt as R,
  SD as z,
  ztt as B,
} from "./app-initial-3916b423772b.js";
import { d as V, l as H, o as U, s as W } from "./workspace-24f1c3d6229e.js";
function G(e) {
  let t = (0, J.c)(27),
    { accountId: n, destination: r, reloadOnSelection: i, unavailablePath: a } = e,
    o = i !== void 0 && i,
    { userId: c, accountId: u } = O(),
    d = A(),
    f = (0, Y.useContext)(l).matches.at(-1)?.route.children,
    p = s(r),
    m = s(a),
    g = E(),
    b;
  t[0] !== n || t[1] !== p || t[2] !== d.key || t[3] !== o || t[4] !== m || t[5] !== c
    ? ((b = [`workspace-link-account`, d.key, c, n, p, m, o]),
      (t[0] = n),
      (t[1] = p),
      (t[2] = d.key),
      (t[3] = o),
      (t[4] = m),
      (t[5] = c),
      (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== n ||
  t[8] !== u ||
  t[9] !== p ||
  t[10] !== d.pathname ||
  t[11] !== d.search ||
  t[12] !== o ||
  t[13] !== g ||
  t[14] !== m
    ? ((x = async (e) => {
        let { signal: t } = e,
          r = await v.safeGet(`/accounts/check/{version}`, {
            parameters: { path: { version: `v4-2023-04-27` } },
            signal: t,
          });
        t.throwIfAborted();
        let i = n === `personal` ? Object.values(r.accounts).find(K) : r.accounts[n],
          a = i?.account;
        if (i == null || a?.account_id == null || a.is_deactivated === !0)
          return o
            ? (H(_(D()?.accessToken ?? ``)?.accountId ?? void 0), await U(m, t), `switching`)
            : `unavailable`;
        if (!o && u === a.account_id && i.can_access_with_session !== !1) return `selected`;
        let s = h(w, d.pathname)?.params.projectId,
          c = k(new URLSearchParams(d.search));
        if (s != null && c != null && i.can_access_with_session !== !1) {
          try {
            await v.safeGet(`/websites/{project_id}/access_request`, {
              additionalHeaders: { "ChatGPT-Account-ID": a.account_id },
              parameters: { path: { project_id: s }, query: { token: c } },
              signal: t,
            });
          } catch {
            return (t.throwIfAborted(), `selected`);
          }
          t.throwIfAborted();
        }
        return (
          await V(
            {
              workspaceAccountId: a.account_id,
              workspaceName: a.name ?? null,
              workspaceImageUrl: a.profile_picture_url ?? null,
              isPersonalWorkspace: a.structure === `personal`,
              isDeactivated: a.is_deactivated,
              accountResidencyRegion: a.account_residency_region,
              isFedrampCompliantWorkspace: a.is_fedramp_compliant_workspace,
              canAccessWithSession: i.can_access_with_session,
              ssoConnectionName: i.sso_connection_name,
            },
            g,
            p,
          ),
          `switching`
        );
      }),
      (t[7] = n),
      (t[8] = u),
      (t[9] = p),
      (t[10] = d.pathname),
      (t[11] = d.search),
      (t[12] = o),
      (t[13] = g),
      (t[14] = m),
      (t[15] = x))
    : (x = t[15]);
  let T;
  t[16] !== b || t[17] !== x
    ? ((T = {
        queryKey: b,
        queryFn: x,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[16] = b),
      (t[17] = x),
      (t[18] = T))
    : (T = t[18]);
  let { data: j, error: M } = y(T);
  if (M) throw M;
  if (j === `unavailable`) {
    let e;
    return (
      t[19] === a
        ? (e = t[20])
        : ((e = (0, X.jsx)(C, { to: a, replace: !0 })), (t[19] = a), (t[20] = e)),
      e
    );
  }
  if (j === `selected`) {
    let e;
    return (
      t[21] === r
        ? (e = t[22])
        : ((e = (0, X.jsx)(C, { to: r, replace: !0 })), (t[21] = r), (t[22] = e)),
      e
    );
  }
  let N = P,
    F = S({ ...d, routeTemplate: f == null ? d.pathname : B(f, d.pathname) }),
    I;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsxs)(z, { children: [(0, X.jsx)(ee, {}), (0, X.jsx)(L, {})] })), (t[23] = I))
    : (I = t[23]);
  let R;
  return (
    t[24] !== N || t[25] !== F
      ? ((R = (0, X.jsx)(N, { route: F, children: I })), (t[24] = N), (t[25] = F), (t[26] = R))
      : (R = t[26]),
    R
  );
}
function K(e) {
  return e.account.structure === `personal`;
}
function q() {
  let e = (0, J.c)(14),
    t = A(),
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
          ? ((t = (0, X.jsx)(C, { to: `/settings/plugins-settings`, replace: !0 })), (e[6] = t))
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
      ? ((c = (0, X.jsx)(n, {
          accountId: a,
          destination: s,
          unavailablePath: `/settings/plugins-settings`,
        })),
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
    ((J = c()),
      n(),
      (Y = j()),
      m(),
      u(),
      M(),
      g(),
      T(),
      b(),
      d(),
      R(),
      N(),
      f(),
      F(),
      W(),
      p(),
      I(),
      (X = x()),
      (Z = a().regex(/^[a-zA-Z0-9_-]{1,255}$/)),
      (Q = r({
        source: t([o(`codex-code-attribution`)]),
        accountId: t([Z]),
        connectorId: i(Z).max(1),
      })));
  }))();
}
$();
export { q as CodeAttributionConnectorAccountRoute, G as WorkspaceLinkRoute };
//# sourceMappingURL=workspace-link-route.browser-5a58b50295e4.js.map
