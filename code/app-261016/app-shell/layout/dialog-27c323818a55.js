import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  Ept as r,
  FBt as i,
  JO as a,
  LNt as o,
  PBt as s,
  WO as c,
  XOt as l,
  Y3 as u,
  Yst as d,
  Z3 as f,
  ZSt as p,
  e6 as m,
  nCt as h,
  okt as g,
  qO as _,
  sct as v,
  tkt as y,
  uSt as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BN as x,
  GK as S,
  K3t as C,
  KBr as w,
  MOr as T,
  NOr as E,
  O2n as D,
  T2n as O,
  VN as k,
  WK as A,
  oxt as j,
  s6t as M,
  sxt as N,
  zOr as P,
} from "./app-initial-ad16eaadf81f.js";
import { i as F, t as I } from "./chatgpt-ecosystem-widget-f627221f36cd.js";
import { n as L, r as R } from "./chatgpt-ecosystem-widget-resource-14d53e34c162.js";
function z(e) {
  let t = (0, V.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, U.jsx)(A, { route: W, children: (0, U.jsx)(x, { children: (0, U.jsx)(B, { ...e }) }) })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function B(e) {
  let i = (0, V.c)(38),
    {
      accountId: a,
      connectorId: o,
      widget: s,
      widgetOwnsCloseButton: l,
      widthHint: f,
      source: p,
      signal: m,
      onClose: v,
    } = e,
    x = l !== void 0 && l,
    S = n(T),
    C = g(),
    [w] = (0, H.useState)(O),
    [E] = (0, H.useState)(r),
    D = h(M, E),
    k = `connectors://${o}`,
    A;
  i[0] !== a || i[1] !== o || i[2] !== E || i[3] !== k || i[4] !== s.template
    ? ((A = { mcpAppId: E, accountId: a, connectorId: o, hostId: d, appUri: k, template: s.template }),
      (i[0] = a),
      (i[1] = o),
      (i[2] = E),
      (i[3] = k),
      (i[4] = s.template),
      (i[5] = A))
    : (A = i[5]);
  let { data: N, isError: P, refetch: F } = h(L, A),
    R;
  i[6] === C
    ? (R = i[7])
    : ((R = C.formatMessage({
        id: `connector.postConnect.widget.title`,
        defaultMessage: `Set up app`,
        description: `Accessible title of the optional app setup dialog shown after connecting an app`,
      })),
      (i[6] = C),
      (i[7] = R));
  let z = R,
    B;
  i[8] !== a || i[9] !== o || i[10] !== v || i[11] !== S || i[12] !== m
    ? ((B = j({
        scope: S,
        appUri: `connectors://${o}`,
        chatGptConversationId: null,
        accountId: a,
        signal: m,
        messageId: null,
        originMetadata: { attribution_id: o },
      })),
      (B.onRequestClose = v),
      (B.displayMode = `modal`),
      (i[8] = a),
      (i[9] = o),
      (i[10] = v),
      (i[11] = S),
      (i[12] = m),
      (i[13] = B))
    : (B = i[13]);
  let W;
  i[14] !== p || i[15] !== s.viewParams
    ? ((W = { ...s.viewParams, onboardingSource: p }), (i[14] = p), (i[15] = s.viewParams), (i[16] = W))
    : (W = i[16]);
  let G = W,
    K = !x || !D,
    q;
  i[17] === v
    ? (q = i[18])
    : ((q = (e) => {
        e || v();
      }),
      (i[17] = v),
      (i[18] = q));
  let J;
  i[19] !== N || i[20] !== z
    ? ((J = N == null && (0, U.jsx)(_, { className: `sr-only`, children: z })),
      (i[19] = N),
      (i[20] = z),
      (i[21] = J))
    : (J = i[21]);
  let Y;
  i[22] !== B ||
  i[23] !== o ||
  i[24] !== w ||
  i[25] !== N ||
  i[26] !== P ||
  i[27] !== E ||
  i[28] !== G ||
  i[29] !== F ||
  i[30] !== s.template
    ? ((Y =
        N == null
          ? (0, U.jsx)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-3`,
              role: `status`,
              children: P
                ? (0, U.jsxs)(U.Fragment, {
                    children: [
                      (0, U.jsx)(y, {
                        id: `connector.postConnect.loadError`,
                        defaultMessage: `Couldn’t load app setup`,
                        description: `Error shown when the optional setup widget fails to load after connecting an app`,
                      }),
                      (0, U.jsx)(u, {
                        color: `secondary`,
                        onClick: () => void F(),
                        children: (0, U.jsx)(y, {
                          id: `connector.postConnect.retry`,
                          defaultMessage: `Try again`,
                          description: `Retries loading the optional post-connect setup widget`,
                        }),
                      }),
                    ],
                  })
                : (0, U.jsx)(t, {}),
            })
          : (0, U.jsx)(I, {
              inDialog: !0,
              lifetime: `component`,
              conversationId: b(w),
              hostId: d,
              mcpAppId: E,
              result: {
                ...N,
                toolResult: { content: [], structuredContent: G },
                mcpAppHostAdapter: B,
                request: {
                  appUri: `connectors://${o}`,
                  chatGptThreadId: w,
                  template: s.template,
                  toolName: ``,
                  toolInput: {},
                  viewParams: G,
                },
              },
            })),
      (i[22] = B),
      (i[23] = o),
      (i[24] = w),
      (i[25] = N),
      (i[26] = P),
      (i[27] = E),
      (i[28] = G),
      (i[29] = F),
      (i[30] = s.template),
      (i[31] = Y))
    : (Y = i[31]);
  let X;
  return (
    i[32] !== K || i[33] !== q || i[34] !== J || i[35] !== Y || i[36] !== f
      ? ((X = (0, U.jsxs)(c, {
          open: !0,
          size: `editor`,
          widthHint: f,
          shouldIgnoreClickOutside: !0,
          showDialogClose: K,
          onOpenChange: q,
          children: [J, Y],
        })),
        (i[32] = K),
        (i[33] = q),
        (i[34] = J),
        (i[35] = Y),
        (i[36] = f),
        (i[37] = X))
      : (X = i[37]),
    X
  );
}
var V, H, U, W;
function G() {
  return (G = e(() => {
    ((V = s()),
      p(),
      v(),
      (H = i()),
      l(),
      F(),
      R(),
      D(),
      N(),
      f(),
      a(),
      m(),
      C(),
      k(),
      P(),
      S(),
      w(),
      (U = o()),
      (W = E({ pathname: `/plugins`, routeTemplate: `/plugins` })));
  }))();
}
export { G as n, z as t };
//# sourceMappingURL=dialog-27c323818a55.js.map
