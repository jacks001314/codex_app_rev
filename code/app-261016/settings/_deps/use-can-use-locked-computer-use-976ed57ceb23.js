import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { Byn as a, Jbr as o, Wbr as s, lBr as c, uBr as l, zyn as u } from "./app-initial-ad16eaadf81f.js";
import { n as d, r as f } from "./remote-control-connections-visibility-bb0e6da8d966.js";
var p;
function m() {
  return (m = e(() => {
    (r(),
      o(),
      d(),
      t(),
      a(),
      c(),
      (p = i(
        n,
        (e, { get: t }) =>
          t(l, `2296472986`) &&
          f({
            remoteControlConnectionsState: u(t, `remote_control_connections_state`),
            slingshotEnabled: t(l, `1042620455`),
          }) &&
          t(s, { hostId: e }).data?.requirements?.computerUse?.allowLockedComputerUse !== !1,
      )));
  }))();
}
export { m as n, p as t };
//# sourceMappingURL=use-can-use-locked-computer-use-976ed57ceb23.js.map
