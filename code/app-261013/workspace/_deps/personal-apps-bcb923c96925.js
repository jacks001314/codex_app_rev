import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  EPt as r,
  GE as i,
  IDt as a,
  Ixt as o,
  JC as s,
  Pxt as c,
  VDt as l,
  Vxt as u,
  WE as d,
  Zxt as f,
  _It as p,
  _xt as m,
  i3 as h,
  iw as g,
  jDt as _,
  lgt as v,
  pLt as y,
  qC as b,
  r3 as x,
  rst as S,
  t3 as C,
  tw as w,
  vzt as T,
  wot as E,
  wxt as D,
  xMt as O,
  yzt as k,
  zxt as A,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as j,
  YMr as M,
  akn as N,
  nT as P,
  okn as F,
  rT as ee,
  tNr as I,
} from "./app-initial-5851df3f6cb1.js";
import { n as L, t as R } from "./app-connect-modal-by-id-a3e486d4397f.js";
import { n as z, r as B } from "./apps-query-410f7e452f43.js";
function V(e) {
  let t = (0, W.c)(5),
    { agentId: n, returnTo: r } = e,
    i = u(j),
    a = u(M),
    o;
  return (
    t[0] !== i || t[1] !== n || t[2] !== r || t[3] !== a
      ? ((o =
          i == null || a == null
            ? (0, K.jsx)(x, {})
            : (0, K.jsx)(H, { accountId: i, userId: a, agentId: n, returnTo: r }, `${i}:${a}:${n}`)),
        (t[0] = i),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function H(e) {
  let r = (0, W.c)(42),
    { accountId: i, userId: s, agentId: c, returnTo: u } = e,
    f = o(n),
    p = l(),
    m = ee(),
    h = D(),
    { data: g, isPending: _, isError: y, refetch: S } = A(q, c),
    [C, T] = (0, G.useState)(null),
    E;
  r[0] === h.state
    ? (E = r[1])
    : ((E = J.safeParse(h.state).data?.workspaceAgentPersonalConnectionFailed ?? !1),
      (r[0] = h.state),
      (r[1] = E));
  let [O, k] = (0, G.useState)(E),
    { markAppConnectOAuthPending: N } = F(),
    P;
  r[2] !== i || r[3] !== m || r[4] !== f || r[5] !== s
    ? ((P = () => m() && f.get(j) === i && f.get(M) === s),
      (r[2] = i),
      (r[3] = m),
      (r[4] = f),
      (r[5] = s),
      (r[6] = P))
    : (P = r[6]);
  let I = P,
    L;
  r[7] === u
    ? (L = r[8])
    : ((L = () => ({
        returnTo: u,
        resumeTarget: {
          kind: `return-to-location-state`,
          successState: { workspaceAgentPersonalConnectionFailed: !1 },
          failureState: { workspaceAgentPersonalConnectionFailed: !0 },
        },
      })),
      (r[7] = u),
      (r[8] = L));
  let z = L;
  if (_) {
    let e;
    return (
      r[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsxs)(`div`, {
            role: `status`,
            children: [
              (0, K.jsx)(x, {}),
              (0, K.jsx)(a, {
                id: `workspaceAgents.connections.loading`,
                defaultMessage: `Checking app connections…`,
                description: `Status while required personal app connections are loading for an agent`,
              }),
            ],
          })),
          (r[9] = e))
        : (e = r[9]),
      e
    );
  }
  if (y) {
    let e;
    r[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(a, {
          id: `workspaceAgents.connections.loadError`,
          defaultMessage: `Unable to check app connections`,
          description: `Error when required app connections for an agent could not be loaded`,
        })),
        (r[10] = e))
      : (e = r[10]);
    let n;
    r[11] === S ? (n = r[12]) : ((n = () => void S()), (r[11] = S), (r[12] = n));
    let i;
    r[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, K.jsx)(a, {
          id: `workspaceAgents.connections.retry`,
          defaultMessage: `Retry`,
          description: `Button that retries loading app connections for an agent`,
        })),
        (r[13] = i))
      : (i = r[13]);
    let o;
    return (
      r[14] === n
        ? (o = r[15])
        : ((o = (0, K.jsx)(d, {
            type: `error`,
            content: e,
            customCtas: (0, K.jsx)(t, { color: `secondary`, onClick: n, children: i }),
          })),
          (r[14] = n),
          (r[15] = o)),
      o
    );
  }
  let B, V, H, Y;
  if (r[16] !== C || r[17] !== g || r[18] !== p) {
    let e = g?.filter(U);
    ((V = C?.link_status === `missing_link` ? void 0 : (C?.link_id ?? void 0)),
      (Y =
        e?.length === 0
          ? (0, K.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, K.jsx)(a, {
                id: `workspaceAgents.connections.none`,
                defaultMessage: `This agent does not need a personal app connection`,
                description: `Message when a published agent does not require the user to connect an app`,
              }),
            })
          : null),
      (B = b),
      (H = e?.map((e) => {
        let n = e.needs_binding || e.link_status !== `healthy`,
          r = (0, K.jsx)(a, {
            id: `workspaceAgents.connections.connected`,
            defaultMessage: `Connected`,
            description: `Status when the server confirms that an app connection is ready for an agent`,
          });
        return (
          n &&
            (r =
              e.fixability === `self`
                ? (0, K.jsx)(t, {
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: C != null,
                    onClick: () => {
                      (k(!1), T(e));
                    },
                    children:
                      e.link_status === `missing_link`
                        ? (0, K.jsx)(a, {
                            id: `workspaceAgents.connections.connect`,
                            defaultMessage: `Connect`,
                            description: `Button that connects a personal app for use by an agent`,
                          })
                        : (0, K.jsx)(a, {
                            id: `workspaceAgents.connections.reconnect`,
                            defaultMessage: `Reconnect`,
                            description: `Button that repairs the selected app account connection for an agent`,
                          }),
                  })
                : (0, K.jsx)(a, {
                    id: `workspaceAgents.connections.unavailable`,
                    defaultMessage: `Unavailable`,
                    description: `Status when the user cannot repair an app connection required by an agent`,
                  })),
          (0, K.jsx)(
            w,
            {
              description: e.account_label,
              label:
                e.connector_name?.trim() ||
                p.formatMessage({
                  id: `workspaceAgents.connections.unnamed`,
                  defaultMessage: `Unnamed app`,
                  description: `Fallback name of an app required by an agent`,
                }),
              control: r,
            },
            e.connector_id,
          )
        );
      })),
      (r[16] = C),
      (r[17] = g),
      (r[18] = p),
      (r[19] = B),
      (r[20] = V),
      (r[21] = H),
      (r[22] = Y));
  } else ((B = r[19]), (V = r[20]), (H = r[21]), (Y = r[22]));
  let X;
  r[23] !== B || r[24] !== H
    ? ((X = (0, K.jsx)(B, { children: H })), (r[23] = B), (r[24] = H), (r[25] = X))
    : (X = r[25]);
  let Z;
  r[26] === O
    ? (Z = r[27])
    : ((Z = O
        ? (0, K.jsx)(d, {
            type: `error`,
            content: (0, K.jsx)(a, {
              id: `workspaceAgents.connections.failed`,
              defaultMessage: `Unable to connect the app. Try again`,
              description: `Error when a required personal app connection did not complete for an agent`,
            }),
          })
        : null),
      (r[26] = O),
      (r[27] = Z));
  let Q;
  r[28] !== c ||
  r[29] !== C ||
  r[30] !== z ||
  r[31] !== I ||
  r[32] !== N ||
  r[33] !== V ||
  r[34] !== S ||
  r[35] !== f
    ? ((Q =
        C == null
          ? null
          : (0, K.jsx)(R, {
              connectorId: C.connector_id,
              hostId: v,
              appConnectOptions: { connectorId: C.connector_id, productSku: `HERMES` },
              reauthLinkId: V,
              isReconnecting: V != null,
              beforeConnect: async () => I(),
              getOAuthResumeContext: z,
              postConnectSource: null,
              showConnectedToast: !1,
              waitForConnectedHandler: !0,
              onOAuthStarted: (e) => {
                (N({
                  ...e,
                  ...z(),
                  hostId: v,
                  appConnectOptions: { connectorId: C.connector_id, productSku: `HERMES` },
                }),
                  f.query.invalidate(q, c));
              },
              onConnected: async () => {
                if (!I()) throw Error(`The active account changed during app connection`);
                let e = await S();
                if (I()) {
                  if (e.isError) throw e.error;
                  (k(!1), T(null));
                }
              },
              onConnectFailed: () => {
                I() && k(!0);
              },
              onOpenChange: (e) => {
                e || T(null);
              },
            })),
      (r[28] = c),
      (r[29] = C),
      (r[30] = z),
      (r[31] = I),
      (r[32] = N),
      (r[33] = V),
      (r[34] = S),
      (r[35] = f),
      (r[36] = Q))
    : (Q = r[36]);
  let $;
  return (
    r[37] !== Y || r[38] !== X || r[39] !== Z || r[40] !== Q
      ? (($ = (0, K.jsxs)(K.Fragment, { children: [Y, X, Z, Q] })),
        (r[37] = Y),
        (r[38] = X),
        (r[39] = Z),
        (r[40] = Q),
        (r[41] = $))
      : ($ = r[41]),
    $
  );
}
function U(e) {
  return e.auth_type === `PERSONAL`;
}
var W, G, K, q, J;
function Y() {
  return (Y = e(() => {
    ((W = T()),
      c(),
      S(),
      (G = k()),
      _(),
      m(),
      r(),
      L(),
      N(),
      I(),
      i(),
      C(),
      h(),
      E(),
      g(),
      s(),
      P(),
      B(),
      (K = O()),
      (q = f(n, (e, { get: t }) => {
        let n = t(j),
          r = t(M);
        return z({
          accountId: n ?? ``,
          userId: r,
          agentId: e,
          versionScope: `published`,
          enabled: n != null && r != null,
        });
      })),
      (J = y({ workspaceAgentPersonalConnectionFailed: p() })));
  }))();
}
export { Y as n, V as t };
//# sourceMappingURL=personal-apps-bcb923c96925.js.map
