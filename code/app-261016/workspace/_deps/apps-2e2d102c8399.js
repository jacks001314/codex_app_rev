const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./app-settings-c82159a48275.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./read-error-b0681ff43794.js",
      "./detail-section-state-45be9ee036ee.js",
      "./workspace-agent-apps-b1c524ac4449.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  I3 as r,
  LNt as i,
  Mst as a,
  NSt as o,
  OFt as s,
  PBt as c,
  TY as l,
  USt as u,
  VSt as d,
  XOt as f,
  Y3 as ee,
  Z3 as p,
  ZSt as m,
  iCt as h,
  jst as g,
  kFt as _,
  nCt as te,
  tkt as v,
  zK as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  JOr as ne,
  M6t as b,
  N6t as x,
  ZOr as S,
  bLr as re,
  cA as C,
  sA as w,
  wLr as T,
  zRr as ie,
} from "./app-initial-ad16eaadf81f.js";
import { n as E, t as ae } from "./card-tile-50cbf58d3a76.js";
import { n as D, t as O } from "./detail-section-state-45be9ee036ee.js";
import { n as k, t as A } from "./read-error-b0681ff43794.js";
import { i as j, n as oe } from "./workspace-agent-apps-b1c524ac4449.js";
import { r as M, t as N } from "./apps-query-4cb3d9532588.js";
import { r as se, t as P } from "./workspace-agent-detail-query-e90126e3ca29.js";
import { n as F, t as I } from "./personal-apps-2ee58ab9049d.js";
function L(e) {
  let t = (0, V.c)(63),
    { agentId: n, canEdit: r, connectors: i } = e,
    o = u(),
    s = d(),
    [c, l] = (0, H.useState)(null),
    f;
  t[0] === i ? (f = t[1]) : ((f = i.flatMap(ue)), (t[0] = i), (t[1] = f));
  let p = f,
    { data: m, error: g, isPending: _, refetch: x } = te(se, p),
    S = h(ie),
    C = h(re),
    T = S ?? `signed-out`,
    E = S != null && p.length > 0,
    D;
  t[2] !== T || t[3] !== E || t[4] !== C
    ? ((D = oe(T, C, E)), (t[2] = T), (t[3] = E), (t[4] = C), (t[5] = D))
    : (D = t[5]);
  let { data: k, error: j, refetch: M } = a(D),
    P;
  t[6] !== x || t[7] !== M
    ? ((P = () => {
        Promise.all([x(), M()]);
      }),
      (t[6] = x),
      (t[7] = M),
      (t[8] = P))
    : (P = t[8]);
  let F = P;
  if (i.length === 0) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(O, {
            children: (0, U.jsx)(v, {
              id: `workspaceAgents.detail.apps.empty`,
              defaultMessage: `No connected apps yet`,
              description: `Empty state shown when a Workspace Agent has no connected apps`,
            }),
          })),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (p.length > 0 && _) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(de, {})), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let L, G, K, q, J, Y, X, Z;
  if (
    t[11] !== n ||
    t[12] !== r ||
    t[13] !== k ||
    t[14] !== j ||
    t[15] !== i ||
    t[16] !== m?.apps ||
    t[17] !== g ||
    t[18] !== s ||
    t[19] !== o ||
    t[20] !== F ||
    t[21] !== c
  ) {
    q = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Map(m?.apps.map(le)),
        a = new Map(k?.map(ce)),
        u = i.flatMap((t) => {
          let n = N(t),
            r = n == null ? null : (e.get(n) ?? null),
            i = n == null ? null : a.get(n),
            o = r?.name ?? i?.name ?? t.server_label?.trim();
          return o == null || o.length === 0 ? [] : [{ app: r, catalogApp: i, connector: t, name: o }];
        });
      if ((g != null || j != null) && u.length === 0) {
        let e;
        (t[30] === F ? (e = t[31]) : ((e = (0, U.jsx)(A, { onRetry: F })), (t[30] = F), (t[31] = e)),
          (q = e));
        break bb0;
      }
      if (u.length === 0) {
        let e;
        (t[32] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(O, {
              children: (0, U.jsx)(v, {
                id: `workspaceAgents.detail.apps.unavailable`,
                defaultMessage: `App details aren't available`,
                description: `State shown when app details for a Workspace Agent cannot be read`,
              }),
            })),
            (t[32] = e))
          : (e = t[32]),
          (q = e));
        break bb0;
      }
      let d;
      (t[33] === c
        ? (d = t[34])
        : ((d = (e) => {
            let { connector: t } = e;
            return B(t) === c;
          }),
          (t[33] = c),
          (t[34] = d)),
        (L = u.find(d)),
        (G = L?.app ?? L?.catalogApp),
        (J = `flex flex-col gap-4`));
      let f;
      t[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((f = (0, U.jsx)(w.Header, {
            title: (0, U.jsx)(v, {
              id: `workspaceAgents.detail.apps.personal`,
              defaultMessage: `Your connections`,
              description: `Heading for the app accounts that the current user needs to connect to use an agent`,
            }),
          })),
          (t[35] = f))
        : (f = t[35]);
      let p = `${s.pathname}${s.search}`;
      (t[36] !== n || t[37] !== p
        ? ((Y = (0, U.jsxs)(w, { children: [f, (0, U.jsx)(I, { agentId: n, returnTo: p })] })),
          (t[36] = n),
          (t[37] = p),
          (t[38] = Y))
        : (Y = t[38]),
        t[39] !== n || t[40] !== r || t[41] !== o
          ? ((X = r
              ? (0, U.jsx)(ee, {
                  color: `secondary`,
                  onClick: () => void o(ne(n)),
                  children: (0, U.jsx)(v, {
                    id: `workspaceAgents.detail.apps.edit`,
                    defaultMessage: `Edit app permissions`,
                    description: `Button that opens the agent Studio to edit app actions, approvals, and shared accounts`,
                  }),
                })
              : null),
            (t[39] = n),
            (t[40] = r),
            (t[41] = o),
            (t[42] = X))
          : (X = t[42]),
        t[43] !== j || t[44] !== g || t[45] !== F
          ? ((Z = (g != null || j != null) && (0, U.jsx)(A, { onRetry: F })),
            (t[43] = j),
            (t[44] = g),
            (t[45] = F),
            (t[46] = Z))
          : (Z = t[46]));
      let h;
      (t[47] !== j || t[48] !== g
        ? ((h = (e) => {
            let { app: t, catalogApp: n, connector: r, name: i } = e;
            return (0, U.jsx)(
              ae,
              {
                description: t?.description ?? n?.description,
                descriptionClassName: `line-clamp-1`,
                icon: (0, U.jsx)(b, {
                  alt: i,
                  className: `size-full object-contain`,
                  fallback: (0, U.jsx)(y, { className: `text-secondary` }),
                  knownAppId: t?.id,
                  logoDarkUrl: t?.logoDarkUrl ?? n?.logoDarkUrl,
                  logoUrl: t?.logoUrl ?? n?.logoUrl,
                }),
                presentation: `row`,
                title: i,
                disabled: g != null || j != null || (t == null && n == null),
                onClick: () => l(B(r)),
              },
              B(r),
            );
          }),
          (t[47] = j),
          (t[48] = g),
          (t[49] = h))
        : (h = t[49]),
        (K = u.map(h)));
    }
    ((t[11] = n),
      (t[12] = r),
      (t[13] = k),
      (t[14] = j),
      (t[15] = i),
      (t[16] = m?.apps),
      (t[17] = g),
      (t[18] = s),
      (t[19] = o),
      (t[20] = F),
      (t[21] = c),
      (t[22] = L),
      (t[23] = G),
      (t[24] = K),
      (t[25] = q),
      (t[26] = J),
      (t[27] = Y),
      (t[28] = X),
      (t[29] = Z));
  } else
    ((L = t[22]), (G = t[23]), (K = t[24]), (q = t[25]), (J = t[26]), (Y = t[27]), (X = t[28]), (Z = t[29]));
  if (q !== Symbol.for(`react.early_return_sentinel`)) return q;
  let Q;
  t[50] !== j || t[51] !== g || t[52] !== L || t[53] !== G || t[54] !== c
    ? ((Q =
        L != null && G != null && g == null && j == null
          ? (0, U.jsx)(
              W,
              {
                app: G,
                tool: L.connector,
                disabled: !0,
                canManageSharedConnections: !1,
                requiresSharedConnection: !1,
                onChange: z,
                onConnect: R,
                onClose: () => l(null),
              },
              c,
            )
          : null),
      (t[50] = j),
      (t[51] = g),
      (t[52] = L),
      (t[53] = G),
      (t[54] = c),
      (t[55] = Q))
    : (Q = t[55]);
  let $;
  return (
    t[56] !== K || t[57] !== Q || t[58] !== J || t[59] !== Y || t[60] !== X || t[61] !== Z
      ? (($ = (0, U.jsxs)(`div`, { className: J, children: [Y, X, Z, K, Q] })),
        (t[56] = K),
        (t[57] = Q),
        (t[58] = J),
        (t[59] = Y),
        (t[60] = X),
        (t[61] = Z),
        (t[62] = $))
      : ($ = t[62]),
    $
  );
}
function R() {}
function z() {}
function ce(e) {
  return [e.id, e];
}
function le(e) {
  return [e.id, e];
}
function ue(e) {
  let t = N(e);
  return t == null ? [] : [t];
}
function B(e) {
  let t = e.connector_identifier;
  return t.type === `CONNECTOR_ID` ? t.connector_id : t.server_url;
}
function de() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, U.jsx)(O, {
          children: (0, U.jsx)(v, {
            id: `workspaceAgents.detail.loading`,
            defaultMessage: `Loading…`,
            description: `Loading state for Workspace Agent detail tabs`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var V, H, U, W;
function G() {
  return (G = e(() => {
    ((V = c()),
      g(),
      m(),
      (H = n()),
      f(),
      o(),
      j(),
      T(),
      x(),
      p(),
      D(),
      l(),
      t(),
      E(),
      C(),
      M(),
      F(),
      k(),
      S(),
      P(),
      (U = i()),
      _(),
      (W = r(
        async () =>
          (
            await s(
              async () => {
                let { WorkspaceAgentAppSettings: e } = await import(`./app-settings-c82159a48275.js`);
                return { WorkspaceAgentAppSettings: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).WorkspaceAgentAppSettings,
      )));
  }))();
}
G();
export { L as WorkspaceAgentApps };
//# sourceMappingURL=apps-2e2d102c8399.js.map
