import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  ZSt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as c, r as l } from "./pca-connector-action-e4a9b762a947.js";
import { n as u, t as d } from "./app-connect-modal-by-id-ee9e7bc8d7c4.js";
import { n as f, t as p } from "./use-app-connect-flow-7fc070fa8fd7.js";
function m(e) {
  let n = (0, h.c)(16),
    { connectorId: r, onOpenChange: i, pcaResumeTarget: a } = e,
    s = t(o),
    [c, u] = (0, g.useState)(!1),
    { handleAppConnectOAuthStarted: p } = f(),
    m = a == null,
    v;
  n[0] !== a || n[1] !== s
    ? ((v =
        a == null
          ? void 0
          : async () => {
              (u(!0), await l(s, a).finally(() => u(!1)));
            }),
      (n[0] = a),
      (n[1] = s),
      (n[2] = v))
    : (v = n[2]);
  let y;
  n[3] === a ? (y = n[4]) : ((y = () => ({ resumeTarget: a })), (n[3] = a), (n[4] = y));
  let b;
  n[5] === p ? (b = n[6]) : ((b = (e) => p({ ...e })), (n[5] = p), (n[6] = b));
  let x = a != null,
    S;
  return (
    n[7] !== r ||
    n[8] !== c ||
    n[9] !== i ||
    n[10] !== m ||
    n[11] !== v ||
    n[12] !== y ||
    n[13] !== b ||
    n[14] !== x
      ? ((S = (0, _.jsx)(d, {
          oauthReferrer: `home_beacon`,
          allowBrowserFallback: m,
          connectorId: r,
          isCompletingConnection: c,
          onOpenChange: i,
          onConnected: v,
          getOAuthResumeContext: y,
          onOAuthStarted: b,
          waitForConnectedHandler: x,
        })),
        (n[7] = r),
        (n[8] = c),
        (n[9] = i),
        (n[10] = m),
        (n[11] = v),
        (n[12] = y),
        (n[13] = b),
        (n[14] = x),
        (n[15] = S))
      : (S = n[15]),
    S
  );
}
var h, g, _;
function v() {
  return (v = e(() => {
    ((h = a()), s(), (g = r()), u(), p(), c(), n(), (_ = i()));
  }))();
}
v();
export { m as CodexAppHomeBeaconConnectModal };
//# sourceMappingURL=codex-app-home-beacon-connect-modal-d983b8adee89.js.map
