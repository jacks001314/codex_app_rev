import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { Ggr as a, OPr as o, Vgr as s, fFr as c, kPr as l, pFr as u } from "./app-initial-5851df3f6cb1.js";
import { n as d, r as f } from "./remote-control-connections-visibility-5c4dc6f33a90.js";
var p;
function m() {
  return (m = e(() => {
    (n(),
      a(),
      d(),
      i(),
      u(),
      o(),
      (p = r(
        t,
        (e, { get: t }) =>
          t(l, `2296472986`) &&
          f({
            remoteControlConnectionsState: c(t, `remote_control_connections_state`),
            slingshotEnabled: t(l, `1042620455`),
          }) &&
          t(s, { hostId: e }).data?.requirements?.computerUse?.allowLockedComputerUse !== !1,
      )));
  }))();
}
export { m as n, p as t };
//# sourceMappingURL=use-can-use-locked-computer-use-5fa01d678ba2.js.map
