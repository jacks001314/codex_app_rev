import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ASt as t,
  BSt as n,
  FBt as r,
  HFt as i,
  LNt as a,
  Mst as o,
  NSt as s,
  PBt as c,
  PSt as l,
  SSt as u,
  TSt as d,
  VRt as f,
  VSt as p,
  YRt as m,
  hRt as h,
  jst as g,
  kLt as _,
  kRt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BN as y,
  Bft as b,
  EAr as x,
  Ejr as S,
  GK as C,
  Gj as w,
  HOn as ee,
  NOr as T,
  UOn as E,
  VN as D,
  WK as O,
  Wj as k,
  YRr as A,
  gAr as te,
  iRr as j,
  imr as M,
  nzr as N,
  pzr as P,
  rmr as F,
  tyr as I,
  wAr as L,
  xjr as R,
  zOr as z,
  zft as B,
} from "./app-initial-ad16eaadf81f.js";
import { d as V, l as H, o as U, s as W } from "./workspace-2b6b070f8f00.js";
function G(e) {
  let r = (0, J.c)(31),
    { accountId: i, destination: a, documentHandoff: s, reloadOnSelection: c, unavailablePath: f } = e,
    m = c !== void 0 && c,
    { userId: h, accountId: g } = M(),
    _ = p(),
    v = (0, Y.useContext)(d).matches.at(-1)?.route.children,
    b = n(a),
    x = n(s?.returnTo ?? a),
    C = n(f),
    w = S(),
    E;
  r[0] !== i ||
  r[1] !== b ||
  r[2] !== s ||
  r[3] !== _.key ||
  r[4] !== m ||
  r[5] !== x ||
  r[6] !== C ||
  r[7] !== h
    ? ((E = [`workspace-link-account`, _.key, h, i, b, C, m, s, x]),
      (r[0] = i),
      (r[1] = b),
      (r[2] = s),
      (r[3] = _.key),
      (r[4] = m),
      (r[5] = x),
      (r[6] = C),
      (r[7] = h),
      (r[8] = E))
    : (E = r[8]);
  let D;
  r[9] !== i ||
  r[10] !== g ||
  r[11] !== a ||
  r[12] !== s ||
  r[13] !== _.pathname ||
  r[14] !== _.search ||
  r[15] !== m ||
  r[16] !== x ||
  r[17] !== w ||
  r[18] !== C
    ? ((D = async (e) => {
        let { signal: n } = e,
          r = await j.safeGet(`/accounts/check/{version}`, {
            parameters: { path: { version: `v4-2023-04-27` } },
            signal: n,
          });
        n.throwIfAborted();
        let o = i === `personal` && s == null ? Object.values(r.accounts).find(K) : r.accounts[i],
          c = o?.account;
        if (o == null || c?.account_id == null || c.is_deactivated === !0)
          return m
            ? (H(P(A()?.accessToken ?? ``)?.accountId ?? void 0), await U(C, n), `switching`)
            : `unavailable`;
        if (
          !m &&
          g === c.account_id &&
          o.can_access_with_session !== !1 &&
          (s == null || P(A()?.accessToken ?? ``)?.accountId === c.account_id)
        )
          return s == null
            ? `selected`
            : (window.location.replace(typeof a == `string` ? a : t(a)), `switching`);
        if (
          s?.attempted === `select` ||
          (s?.attempted === `authenticate` && o.can_access_with_session === !1)
        )
          return `unavailable`;
        let u = l(te, _.pathname)?.params.projectId,
          d = L(new URLSearchParams(_.search));
        if (u != null && d != null && o.can_access_with_session !== !1) {
          try {
            await j.safeGet(`/websites/{project_id}/access_request`, {
              additionalHeaders: { "ChatGPT-Account-ID": c.account_id },
              parameters: { path: { project_id: u }, query: { token: d } },
              signal: n,
            });
          } catch {
            return (n.throwIfAborted(), `selected`);
          }
          n.throwIfAborted();
        }
        let f = x;
        if (s != null) {
          let e = new URL(x, window.location.origin);
          (e.searchParams.set(
            `handoff_attempt`,
            o.can_access_with_session === !1 ? `authenticate` : `select`,
          ),
            (f = e.toString()));
        }
        return (
          await V(
            {
              workspaceAccountId: c.account_id,
              workspaceName: c.name ?? null,
              workspaceImageUrl: c.profile_picture_url ?? null,
              isPersonalWorkspace: c.structure === `personal`,
              isDeactivated: c.is_deactivated,
              accountResidencyRegion: c.account_residency_region,
              isFedrampCompliantWorkspace: c.is_fedramp_compliant_workspace,
              canAccessWithSession: o.can_access_with_session,
              ssoConnectionName: o.sso_connection_name,
            },
            w,
            f,
            n,
          ),
          `switching`
        );
      }),
      (r[9] = i),
      (r[10] = g),
      (r[11] = a),
      (r[12] = s),
      (r[13] = _.pathname),
      (r[14] = _.search),
      (r[15] = m),
      (r[16] = x),
      (r[17] = w),
      (r[18] = C),
      (r[19] = D))
    : (D = r[19]);
  let N;
  r[20] !== E || r[21] !== D
    ? ((N = {
        queryKey: E,
        queryFn: D,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (r[20] = E),
      (r[21] = D),
      (r[22] = N))
    : (N = r[22]);
  let { data: F, error: I } = o(N);
  if (I) throw I;
  if (F === `unavailable`) {
    let e;
    return (
      r[23] === f ? (e = r[24]) : ((e = (0, X.jsx)(u, { to: f, replace: !0 })), (r[23] = f), (r[24] = e)),
      e
    );
  }
  if (F === `selected`) {
    let e;
    return (
      r[25] === a ? (e = r[26]) : ((e = (0, X.jsx)(u, { to: a, replace: !0 })), (r[25] = a), (r[26] = e)),
      e
    );
  }
  let R = O,
    z = T({ ..._, routeTemplate: v == null ? _.pathname : B(v, _.pathname) }),
    W;
  r[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, X.jsxs)(y, { children: [(0, X.jsx)(k, {}), (0, X.jsx)(ee, {})] })), (r[27] = W))
    : (W = r[27]);
  let G;
  return (
    r[28] !== R || r[29] !== z
      ? ((G = (0, X.jsx)(R, { route: z, children: W })), (r[28] = R), (r[29] = z), (r[30] = G))
      : (G = r[30]),
    G
  );
}
function K(e) {
  return e.account.structure === `personal`;
}
function q() {
  let e = (0, J.c)(14),
    t = p(),
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
          ? ((t = (0, X.jsx)(u, { to: `/settings/plugins-settings`, replace: !0 })), (e[6] = t))
          : (t = e[6]),
          (o = t));
        break bb0;
      }
      let l = new URLSearchParams({ "product-sku": `CODEX` }),
        d = c.data.connectorId[0];
      (d != null && l.set(`connector`, d),
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
    ((J = c()),
      g(),
      (Y = r()),
      s(),
      i(),
      b(),
      x(),
      N(),
      F(),
      I(),
      E(),
      D(),
      z(),
      C(),
      W(),
      R(),
      w(),
      (X = a()),
      (Z = f().regex(/^[a-zA-Z0-9_-]{1,255}$/)),
      (Q = v({ source: m([h(`codex-code-attribution`)]), accountId: m([Z]), connectorId: _(Z).max(1) })));
  }))();
}
$();
export { q as CodeAttributionConnectorAccountRoute, G as WorkspaceLinkRoute };
//# sourceMappingURL=workspace-link-route.browser-853861a1c6b7.js.map
