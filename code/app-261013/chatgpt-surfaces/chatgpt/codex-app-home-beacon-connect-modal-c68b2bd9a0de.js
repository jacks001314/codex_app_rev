import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  vzt as i,
  wot as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import { n as c, r as l } from "./pca-connector-action-9318b684dcd3.js";
import { n as u, t as d } from "./app-connect-modal-by-id-a3e486d4397f.js";
import { n as f, t as p } from "./use-app-connect-flow-7088479fda99.js";
function m(e) {
  let r = (0, h.c)(16),
    { connectorId: i, onOpenChange: a, pcaResumeTarget: o } = e,
    s = n(t),
    [c, u] = (0, g.useState)(!1),
    { handleAppConnectOAuthStarted: p } = f(),
    m = o == null,
    v;
  r[0] !== o || r[1] !== s
    ? ((v =
        o == null
          ? void 0
          : async () => {
              (u(!0), await l(s, o).finally(() => u(!1)));
            }),
      (r[0] = o),
      (r[1] = s),
      (r[2] = v))
    : (v = r[2]);
  let y;
  r[3] === o ? (y = r[4]) : ((y = () => ({ resumeTarget: o })), (r[3] = o), (r[4] = y));
  let b;
  r[5] === p ? (b = r[6]) : ((b = (e) => p({ ...e })), (r[5] = p), (r[6] = b));
  let x = o != null,
    S;
  return (
    r[7] !== i ||
    r[8] !== c ||
    r[9] !== a ||
    r[10] !== m ||
    r[11] !== v ||
    r[12] !== y ||
    r[13] !== b ||
    r[14] !== x
      ? ((S = (0, _.jsx)(d, {
          oauthReferrer: `home_beacon`,
          allowBrowserFallback: m,
          connectorId: i,
          isCompletingConnection: c,
          onOpenChange: a,
          onConnected: v,
          getOAuthResumeContext: y,
          onOAuthStarted: b,
          waitForConnectedHandler: x,
        })),
        (r[7] = i),
        (r[8] = c),
        (r[9] = a),
        (r[10] = m),
        (r[11] = v),
        (r[12] = y),
        (r[13] = b),
        (r[14] = x),
        (r[15] = S))
      : (S = r[15]),
    S
  );
}
var h, g, _;
function v() {
  return (v = e(() => {
    ((h = i()), r(), (g = s()), u(), p(), c(), a(), (_ = o()));
  }))();
}
v();
export { m as CodexAppHomeBeaconConnectModal };
//# sourceMappingURL=codex-app-home-beacon-connect-modal-c68b2bd9a0de.js.map
