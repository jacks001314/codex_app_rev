import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  FBt as a,
  HFt as o,
  LNt as s,
  NLt as c,
  NSt as l,
  PBt as u,
  Qst as d,
  VSt as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  e6 as _,
  ew as v,
  iCt as y,
  kRt as b,
  mCt as x,
  nCt as S,
  okt as ee,
  sct as C,
  sw as w,
  tkt as T,
  uw as E,
  vD as D,
  w_t as O,
  yD as k,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  DMn as A,
  MT as j,
  OMn as M,
  bLr as N,
  jT as P,
  wLr as F,
  zRr as I,
} from "./app-initial-ad16eaadf81f.js";
import { n as L, t as R } from "./app-connect-modal-by-id-ee9e7bc8d7c4.js";
import { n as z, r as B } from "./apps-query-4cb3d9532588.js";
function V(e) {
  let n = (0, W.c)(5),
    { agentId: r, returnTo: i } = e,
    a = y(I),
    o = y(N),
    s;
  return (
    n[0] !== a || n[1] !== r || n[2] !== i || n[3] !== o
      ? ((s =
          a == null || o == null
            ? (0, K.jsx)(t, {})
            : (0, K.jsx)(H, { accountId: a, userId: o, agentId: r, returnTo: i }, `${a}:${o}:${r}`)),
        (n[0] = a),
        (n[1] = r),
        (n[2] = i),
        (n[3] = o),
        (n[4] = s))
      : (s = n[4]),
    s
  );
}
function H(e) {
  let i = (0, W.c)(42),
    { accountId: a, userId: o, agentId: s, returnTo: c } = e,
    l = r(d),
    u = ee(),
    p = j(),
    h = f(),
    { data: g, isPending: _, isError: v, refetch: y } = S(q, s),
    [b, x] = (0, G.useState)(null),
    C;
  i[0] === h.state
    ? (C = i[1])
    : ((C = J.safeParse(h.state).data?.workspaceAgentPersonalConnectionFailed ?? !1),
      (i[0] = h.state),
      (i[1] = C));
  let [E, k] = (0, G.useState)(C),
    { markAppConnectOAuthPending: A } = M(),
    P;
  i[2] !== a || i[3] !== p || i[4] !== l || i[5] !== o
    ? ((P = () => p() && l.get(I) === a && l.get(N) === o),
      (i[2] = a),
      (i[3] = p),
      (i[4] = l),
      (i[5] = o),
      (i[6] = P))
    : (P = i[6]);
  let F = P,
    L;
  i[7] === c
    ? (L = i[8])
    : ((L = () => ({
        returnTo: c,
        resumeTarget: {
          kind: `return-to-location-state`,
          successState: { workspaceAgentPersonalConnectionFailed: !1 },
          failureState: { workspaceAgentPersonalConnectionFailed: !0 },
        },
      })),
      (i[7] = c),
      (i[8] = L));
  let z = L;
  if (_) {
    let e;
    return (
      i[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsxs)(`div`, {
            role: `status`,
            children: [
              (0, K.jsx)(t, {}),
              (0, K.jsx)(T, {
                id: `workspaceAgents.connections.loading`,
                defaultMessage: `Checking app connections…`,
                description: `Status while required personal app connections are loading for an agent`,
              }),
            ],
          })),
          (i[9] = e))
        : (e = i[9]),
      e
    );
  }
  if (v) {
    let e;
    i[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(T, {
          id: `workspaceAgents.connections.loadError`,
          defaultMessage: `Unable to check app connections`,
          description: `Error when required app connections for an agent could not be loaded`,
        })),
        (i[10] = e))
      : (e = i[10]);
    let t;
    i[11] === y ? (t = i[12]) : ((t = () => void y()), (i[11] = y), (i[12] = t));
    let n;
    i[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, K.jsx)(T, {
          id: `workspaceAgents.connections.retry`,
          defaultMessage: `Retry`,
          description: `Button that retries loading app connections for an agent`,
        })),
        (i[13] = n))
      : (n = i[13]);
    let r;
    return (
      i[14] === t
        ? (r = i[15])
        : ((r = (0, K.jsx)(D, {
            type: `error`,
            content: e,
            customCtas: (0, K.jsx)(m, { color: `secondary`, onClick: t, children: n }),
          })),
          (i[14] = t),
          (i[15] = r)),
      r
    );
  }
  let B, V, H, Y;
  if (i[16] !== b || i[17] !== g || i[18] !== u) {
    let e = g?.filter(U);
    ((V = b?.link_status === `missing_link` ? void 0 : (b?.link_id ?? void 0)),
      (Y =
        e?.length === 0
          ? (0, K.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, K.jsx)(T, {
                id: `workspaceAgents.connections.none`,
                defaultMessage: `This agent does not need a personal app connection`,
                description: `Message when a published agent does not require the user to connect an app`,
              }),
            })
          : null),
      (B = n),
      (H = e?.map((e) => {
        let t = e.needs_binding || e.link_status !== `healthy`,
          n = (0, K.jsx)(T, {
            id: `workspaceAgents.connections.connected`,
            defaultMessage: `Connected`,
            description: `Status when the server confirms that an app connection is ready for an agent`,
          });
        return (
          t &&
            (n =
              e.fixability === `self`
                ? (0, K.jsx)(m, {
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: b != null,
                    onClick: () => {
                      (k(!1), x(e));
                    },
                    children:
                      e.link_status === `missing_link`
                        ? (0, K.jsx)(T, {
                            id: `workspaceAgents.connections.connect`,
                            defaultMessage: `Connect`,
                            description: `Button that connects a personal app for use by an agent`,
                          })
                        : (0, K.jsx)(T, {
                            id: `workspaceAgents.connections.reconnect`,
                            defaultMessage: `Reconnect`,
                            description: `Button that repairs the selected app account connection for an agent`,
                          }),
                  })
                : (0, K.jsx)(T, {
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
                u.formatMessage({
                  id: `workspaceAgents.connections.unnamed`,
                  defaultMessage: `Unnamed app`,
                  description: `Fallback name of an app required by an agent`,
                }),
              control: n,
            },
            e.connector_id,
          )
        );
      })),
      (i[16] = b),
      (i[17] = g),
      (i[18] = u),
      (i[19] = B),
      (i[20] = V),
      (i[21] = H),
      (i[22] = Y));
  } else ((B = i[19]), (V = i[20]), (H = i[21]), (Y = i[22]));
  let X;
  i[23] !== B || i[24] !== H
    ? ((X = (0, K.jsx)(B, { children: H })), (i[23] = B), (i[24] = H), (i[25] = X))
    : (X = i[25]);
  let Z;
  i[26] === E
    ? (Z = i[27])
    : ((Z = E
        ? (0, K.jsx)(D, {
            type: `error`,
            content: (0, K.jsx)(T, {
              id: `workspaceAgents.connections.failed`,
              defaultMessage: `Unable to connect the app. Try again`,
              description: `Error when a required personal app connection did not complete for an agent`,
            }),
          })
        : null),
      (i[26] = E),
      (i[27] = Z));
  let Q;
  i[28] !== s ||
  i[29] !== b ||
  i[30] !== z ||
  i[31] !== F ||
  i[32] !== A ||
  i[33] !== V ||
  i[34] !== y ||
  i[35] !== l
    ? ((Q =
        b == null
          ? null
          : (0, K.jsx)(R, {
              connectorId: b.connector_id,
              hostId: O,
              appConnectOptions: { connectorId: b.connector_id, productSku: `HERMES` },
              reauthLinkId: V,
              isReconnecting: V != null,
              beforeConnect: async () => F(),
              getOAuthResumeContext: z,
              postConnectSource: null,
              showConnectedToast: !1,
              waitForConnectedHandler: !0,
              onOAuthStarted: (e) => {
                (A({
                  ...e,
                  ...z(),
                  hostId: O,
                  appConnectOptions: { connectorId: b.connector_id, productSku: `HERMES` },
                }),
                  l.query.invalidate(q, s));
              },
              onConnected: async () => {
                if (!F()) throw Error(`The active account changed during app connection`);
                let e = await y();
                if (F()) {
                  if (e.isError) throw e.error;
                  (k(!1), x(null));
                }
              },
              onConnectFailed: () => {
                F() && k(!0);
              },
              onOpenChange: (e) => {
                e || x(null);
              },
            })),
      (i[28] = s),
      (i[29] = b),
      (i[30] = z),
      (i[31] = F),
      (i[32] = A),
      (i[33] = V),
      (i[34] = y),
      (i[35] = l),
      (i[36] = Q))
    : (Q = i[36]);
  let $;
  return (
    i[37] !== Y || i[38] !== X || i[39] !== Z || i[40] !== Q
      ? (($ = (0, K.jsxs)(K.Fragment, { children: [Y, X, Z, Q] })),
        (i[37] = Y),
        (i[38] = X),
        (i[39] = Z),
        (i[40] = Q),
        (i[41] = $))
      : ($ = i[41]),
    $
  );
}
function U(e) {
  return e.auth_type === `PERSONAL`;
}
var W, G, K, q, J;
function Y() {
  return (Y = e(() => {
    ((W = u()),
      g(),
      C(),
      (G = a()),
      p(),
      l(),
      o(),
      L(),
      A(),
      F(),
      k(),
      h(),
      _(),
      i(),
      E(),
      v(),
      P(),
      B(),
      (K = s()),
      (q = x(d, (e, { get: t }) => {
        let n = t(I),
          r = t(N);
        return z({
          accountId: n ?? ``,
          userId: r,
          agentId: e,
          versionScope: `published`,
          enabled: n != null && r != null,
        });
      })),
      (J = b({ workspaceAgentPersonalConnectionFailed: c() })));
  }))();
}
export { Y as n, V as t };
//# sourceMappingURL=personal-apps-2ee58ab9049d.js.map
