const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./app-settings-46b89c8f3d38.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./read-error-29adc71a8032.js",
      "./detail-section-state-e7774e5ba7f3.js",
      "./workspace-agent-apps-6b85a870e5a0.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Ext as r,
  HG as i,
  IDt as a,
  Pxt as o,
  TJ as s,
  Vxt as c,
  Xot as l,
  Yot as u,
  _xt as d,
  fPt as f,
  jDt as p,
  pPt as m,
  t3 as h,
  vzt as g,
  wxt as _,
  xMt as v,
  yzt as y,
  z4 as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ek as S,
  Fwr as C,
  GMr as ee,
  Mwr as te,
  Tk as w,
  YMr as ne,
  hzt as T,
  mzt as re,
  tNr as E,
} from "./app-initial-5851df3f6cb1.js";
import { n as D, t as ie } from "./card-tile-a92df345e9ab.js";
import { n as O, t as k } from "./detail-section-state-e7774e5ba7f3.js";
import { n as A, t as j } from "./read-error-29adc71a8032.js";
import { i as M, n as ae } from "./workspace-agent-apps-6b85a870e5a0.js";
import { r as N, t as P } from "./apps-query-410f7e452f43.js";
import { r as oe, t as F } from "./workspace-agent-detail-query-c8301c5fcc0a.js";
import { n as I, t as se } from "./personal-apps-bcb923c96925.js";
function L(e) {
  let n = (0, V.c)(63),
    { agentId: o, canEdit: s, connectors: u } = e,
    d = r(),
    f = _(),
    [p, m] = (0, H.useState)(null),
    h;
  n[0] === u ? (h = n[1]) : ((h = u.flatMap(ue)), (n[0] = u), (n[1] = h));
  let g = h,
    { data: v, error: y, isPending: b, refetch: S } = x(oe, g),
    C = c(ee),
    T = c(ne),
    E = C ?? `signed-out`,
    D = C != null && g.length > 0,
    O;
  n[2] !== E || n[3] !== D || n[4] !== T
    ? ((O = ae(E, T, D)), (n[2] = E), (n[3] = D), (n[4] = T), (n[5] = O))
    : (O = n[5]);
  let { data: A, error: M, refetch: N } = l(O),
    F;
  n[6] !== S || n[7] !== N
    ? ((F = () => {
        Promise.all([S(), N()]);
      }),
      (n[6] = S),
      (n[7] = N),
      (n[8] = F))
    : (F = n[8]);
  let I = F;
  if (u.length === 0) {
    let e;
    return (
      n[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(k, {
            children: (0, U.jsx)(a, {
              id: `workspaceAgents.detail.apps.empty`,
              defaultMessage: `No connected apps yet`,
              description: `Empty state shown when a Workspace Agent has no connected apps`,
            }),
          })),
          (n[9] = e))
        : (e = n[9]),
      e
    );
  }
  if (g.length > 0 && b) {
    let e;
    return (
      n[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(de, {})), (n[10] = e))
        : (e = n[10]),
      e
    );
  }
  let L, G, K, q, J, Y, X, Z;
  if (
    n[11] !== o ||
    n[12] !== s ||
    n[13] !== A ||
    n[14] !== M ||
    n[15] !== u ||
    n[16] !== v?.apps ||
    n[17] !== y ||
    n[18] !== f ||
    n[19] !== d ||
    n[20] !== I ||
    n[21] !== p
  ) {
    q = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Map(v?.apps.map(le)),
        r = new Map(A?.map(z)),
        c = u.flatMap((t) => {
          let n = P(t),
            i = n == null ? null : (e.get(n) ?? null),
            a = n == null ? null : r.get(n),
            o = i?.name ?? a?.name ?? t.server_label?.trim();
          return o == null || o.length === 0 ? [] : [{ app: i, catalogApp: a, connector: t, name: o }];
        });
      if ((y != null || M != null) && c.length === 0) {
        let e;
        (n[30] === I ? (e = n[31]) : ((e = (0, U.jsx)(j, { onRetry: I })), (n[30] = I), (n[31] = e)),
          (q = e));
        break bb0;
      }
      if (c.length === 0) {
        let e;
        (n[32] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(k, {
              children: (0, U.jsx)(a, {
                id: `workspaceAgents.detail.apps.unavailable`,
                defaultMessage: `App details aren't available`,
                description: `State shown when app details for a Workspace Agent cannot be read`,
              }),
            })),
            (n[32] = e))
          : (e = n[32]),
          (q = e));
        break bb0;
      }
      let l;
      (n[33] === p
        ? (l = n[34])
        : ((l = (e) => {
            let { connector: t } = e;
            return B(t) === p;
          }),
          (n[33] = p),
          (n[34] = l)),
        (L = c.find(l)),
        (G = L?.app ?? L?.catalogApp),
        (J = `flex flex-col gap-4`));
      let h;
      n[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((h = (0, U.jsx)(w.Header, {
            title: (0, U.jsx)(a, {
              id: `workspaceAgents.detail.apps.personal`,
              defaultMessage: `Your connections`,
              description: `Heading for the app accounts that the current user needs to connect to use an agent`,
            }),
          })),
          (n[35] = h))
        : (h = n[35]);
      let g = `${f.pathname}${f.search}`;
      (n[36] !== o || n[37] !== g
        ? ((Y = (0, U.jsxs)(w, { children: [h, (0, U.jsx)(se, { agentId: o, returnTo: g })] })),
          (n[36] = o),
          (n[37] = g),
          (n[38] = Y))
        : (Y = n[38]),
        n[39] !== o || n[40] !== s || n[41] !== d
          ? ((X = s
              ? (0, U.jsx)(t, {
                  color: `secondary`,
                  onClick: () => void d(te(o)),
                  children: (0, U.jsx)(a, {
                    id: `workspaceAgents.detail.apps.edit`,
                    defaultMessage: `Edit app permissions`,
                    description: `Button that opens the agent Studio to edit app actions, approvals, and shared accounts`,
                  }),
                })
              : null),
            (n[39] = o),
            (n[40] = s),
            (n[41] = d),
            (n[42] = X))
          : (X = n[42]),
        n[43] !== M || n[44] !== y || n[45] !== I
          ? ((Z = (y != null || M != null) && (0, U.jsx)(j, { onRetry: I })),
            (n[43] = M),
            (n[44] = y),
            (n[45] = I),
            (n[46] = Z))
          : (Z = n[46]));
      let _;
      (n[47] !== M || n[48] !== y
        ? ((_ = (e) => {
            let { app: t, catalogApp: n, connector: r, name: a } = e;
            return (0, U.jsx)(
              ie,
              {
                description: t?.description ?? n?.description,
                descriptionClassName: `line-clamp-1`,
                icon: (0, U.jsx)(re, {
                  alt: a,
                  className: `size-full object-contain`,
                  fallback: (0, U.jsx)(i, { className: `text-secondary` }),
                  knownAppId: t?.id,
                  logoDarkUrl: t?.logoDarkUrl ?? n?.logoDarkUrl,
                  logoUrl: t?.logoUrl ?? n?.logoUrl,
                }),
                presentation: `row`,
                title: a,
                disabled: y != null || M != null || (t == null && n == null),
                onClick: () => m(B(r)),
              },
              B(r),
            );
          }),
          (n[47] = M),
          (n[48] = y),
          (n[49] = _))
        : (_ = n[49]),
        (K = c.map(_)));
    }
    ((n[11] = o),
      (n[12] = s),
      (n[13] = A),
      (n[14] = M),
      (n[15] = u),
      (n[16] = v?.apps),
      (n[17] = y),
      (n[18] = f),
      (n[19] = d),
      (n[20] = I),
      (n[21] = p),
      (n[22] = L),
      (n[23] = G),
      (n[24] = K),
      (n[25] = q),
      (n[26] = J),
      (n[27] = Y),
      (n[28] = X),
      (n[29] = Z));
  } else
    ((L = n[22]), (G = n[23]), (K = n[24]), (q = n[25]), (J = n[26]), (Y = n[27]), (X = n[28]), (Z = n[29]));
  if (q !== Symbol.for(`react.early_return_sentinel`)) return q;
  let Q;
  n[50] !== M || n[51] !== y || n[52] !== L || n[53] !== G || n[54] !== p
    ? ((Q =
        L != null && G != null && y == null && M == null
          ? (0, U.jsx)(
              W,
              {
                app: G,
                tool: L.connector,
                disabled: !0,
                canManageSharedConnections: !1,
                requiresSharedConnection: !1,
                onChange: R,
                onConnect: ce,
                onClose: () => m(null),
              },
              p,
            )
          : null),
      (n[50] = M),
      (n[51] = y),
      (n[52] = L),
      (n[53] = G),
      (n[54] = p),
      (n[55] = Q))
    : (Q = n[55]);
  let $;
  return (
    n[56] !== K || n[57] !== Q || n[58] !== J || n[59] !== Y || n[60] !== X || n[61] !== Z
      ? (($ = (0, U.jsxs)(`div`, { className: J, children: [Y, X, Z, K, Q] })),
        (n[56] = K),
        (n[57] = Q),
        (n[58] = J),
        (n[59] = Y),
        (n[60] = X),
        (n[61] = Z),
        (n[62] = $))
      : ($ = n[62]),
    $
  );
}
function ce() {}
function R() {}
function z(e) {
  return [e.id, e];
}
function le(e) {
  return [e.id, e];
}
function ue(e) {
  let t = P(e);
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
      ? ((t = (0, U.jsx)(k, {
          children: (0, U.jsx)(a, {
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
    ((V = g()),
      u(),
      o(),
      (H = y()),
      p(),
      d(),
      M(),
      E(),
      T(),
      h(),
      O(),
      s(),
      b(),
      D(),
      S(),
      N(),
      I(),
      A(),
      C(),
      F(),
      (U = v()),
      m(),
      (W = n(
        async () =>
          (
            await f(
              async () => {
                let { WorkspaceAgentAppSettings: e } = await import(`./app-settings-46b89c8f3d38.js`);
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
//# sourceMappingURL=apps-263d5791a9a3.js.map
