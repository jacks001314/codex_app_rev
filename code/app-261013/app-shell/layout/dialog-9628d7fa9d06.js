import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Ixt as r,
  Jbt as i,
  Pxt as a,
  VDt as o,
  _O as s,
  dft as c,
  i3 as l,
  iot as u,
  jDt as d,
  mO as f,
  r3 as p,
  rst as m,
  t3 as h,
  vO as g,
  vzt as _,
  xMt as v,
  yzt as y,
  zxt as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as x,
  Kyt as S,
  SG as C,
  TSt as w,
  ZQn as T,
  _wr as E,
  e$n as D,
  gwr as O,
  iN as k,
  oFr as A,
  qyt as j,
  rN as M,
  uSt as N,
  xG as P,
} from "./app-initial-5851df3f6cb1.js";
import { i as F, t as I } from "./chatgpt-ecosystem-widget-86361a1e1747.js";
import { n as L, r as R } from "./chatgpt-ecosystem-widget-resource-9c3e6a125c8e.js";
function z(e) {
  let t = (0, V.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, U.jsx)(P, { route: W, children: (0, U.jsx)(M, { children: (0, U.jsx)(B, { ...e }) }) })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function B(e) {
  let a = (0, V.c)(38),
    {
      accountId: l,
      connectorId: d,
      widget: m,
      widgetOwnsCloseButton: h,
      widthHint: g,
      source: _,
      signal: v,
      onClose: y,
    } = e,
    x = h !== void 0 && h,
    C = r(O),
    E = o(),
    [D] = (0, H.useState)(T),
    [k] = (0, H.useState)(c),
    A = b(w, k),
    j = `connectors://${d}`,
    M;
  a[0] !== l || a[1] !== d || a[2] !== k || a[3] !== j || a[4] !== m.template
    ? ((M = { mcpAppId: k, accountId: l, connectorId: d, hostId: u, appUri: j, template: m.template }),
      (a[0] = l),
      (a[1] = d),
      (a[2] = k),
      (a[3] = j),
      (a[4] = m.template),
      (a[5] = M))
    : (M = a[5]);
  let { data: N, isError: P, refetch: F } = b(L, M),
    R;
  a[6] === E
    ? (R = a[7])
    : ((R = E.formatMessage({
        id: `connector.postConnect.widget.title`,
        defaultMessage: `Set up app`,
        description: `Accessible title of the optional app setup dialog shown after connecting an app`,
      })),
      (a[6] = E),
      (a[7] = R));
  let z = R,
    B;
  a[8] !== l || a[9] !== d || a[10] !== y || a[11] !== C || a[12] !== v
    ? ((B = S({
        scope: C,
        appUri: `connectors://${d}`,
        chatGptConversationId: null,
        accountId: l,
        signal: v,
        messageId: null,
        originMetadata: { attribution_id: d },
      })),
      (B.onRequestClose = y),
      (B.displayMode = `modal`),
      (a[8] = l),
      (a[9] = d),
      (a[10] = y),
      (a[11] = C),
      (a[12] = v),
      (a[13] = B))
    : (B = a[13]);
  let W;
  a[14] !== _ || a[15] !== m.viewParams
    ? ((W = { ...m.viewParams, onboardingSource: _ }), (a[14] = _), (a[15] = m.viewParams), (a[16] = W))
    : (W = a[16]);
  let G = W,
    K = !x || !A,
    q;
  a[17] === y
    ? (q = a[18])
    : ((q = (e) => {
        e || y();
      }),
      (a[17] = y),
      (a[18] = q));
  let J;
  a[19] !== N || a[20] !== z
    ? ((J = N == null && (0, U.jsx)(s, { className: `sr-only`, children: z })),
      (a[19] = N),
      (a[20] = z),
      (a[21] = J))
    : (J = a[21]);
  let Y;
  a[22] !== B ||
  a[23] !== d ||
  a[24] !== D ||
  a[25] !== N ||
  a[26] !== P ||
  a[27] !== k ||
  a[28] !== G ||
  a[29] !== F ||
  a[30] !== m.template
    ? ((Y =
        N == null
          ? (0, U.jsx)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-3`,
              role: `status`,
              children: P
                ? (0, U.jsxs)(U.Fragment, {
                    children: [
                      (0, U.jsx)(n, {
                        id: `connector.postConnect.loadError`,
                        defaultMessage: `Couldn’t load app setup`,
                        description: `Error shown when the optional setup widget fails to load after connecting an app`,
                      }),
                      (0, U.jsx)(t, {
                        color: `secondary`,
                        onClick: () => void F(),
                        children: (0, U.jsx)(n, {
                          id: `connector.postConnect.retry`,
                          defaultMessage: `Try again`,
                          description: `Retries loading the optional post-connect setup widget`,
                        }),
                      }),
                    ],
                  })
                : (0, U.jsx)(p, {}),
            })
          : (0, U.jsx)(I, {
              inDialog: !0,
              lifetime: `component`,
              conversationId: i(D),
              hostId: u,
              mcpAppId: k,
              result: {
                ...N,
                toolResult: { content: [], structuredContent: G },
                mcpAppHostAdapter: B,
                request: {
                  appUri: `connectors://${d}`,
                  chatGptThreadId: D,
                  template: m.template,
                  toolName: ``,
                  toolInput: {},
                  viewParams: G,
                },
              },
            })),
      (a[22] = B),
      (a[23] = d),
      (a[24] = D),
      (a[25] = N),
      (a[26] = P),
      (a[27] = k),
      (a[28] = G),
      (a[29] = F),
      (a[30] = m.template),
      (a[31] = Y))
    : (Y = a[31]);
  let X;
  return (
    a[32] !== K || a[33] !== q || a[34] !== J || a[35] !== Y || a[36] !== g
      ? ((X = (0, U.jsxs)(f, {
          open: !0,
          size: `editor`,
          widthHint: g,
          shouldIgnoreClickOutside: !0,
          showDialogClose: K,
          onOpenChange: q,
          children: [J, Y],
        })),
        (a[32] = K),
        (a[33] = q),
        (a[34] = J),
        (a[35] = Y),
        (a[36] = g),
        (a[37] = X))
      : (X = a[37]),
    X
  );
}
var V, H, U, W;
function G() {
  return (G = e(() => {
    ((V = _()),
      a(),
      m(),
      (H = y()),
      d(),
      F(),
      R(),
      D(),
      j(),
      h(),
      g(),
      l(),
      N(),
      k(),
      x(),
      C(),
      A(),
      (U = v()),
      (W = E({ pathname: `/plugins`, routeTemplate: `/plugins` })));
  }))();
}
export { G as n, z as t };
//# sourceMappingURL=dialog-9628d7fa9d06.js.map
