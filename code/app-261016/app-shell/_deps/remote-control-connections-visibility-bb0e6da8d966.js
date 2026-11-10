import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { PBt as t } from "./app-shared-2feb3d4c6fcc.js";
import { Gsn as n, Jsn as r, KP as i, qP as a } from "./app-initial-ad16eaadf81f.js";
function o() {
  let e = (0, l.c)(3),
    [t] = a(`remote_control_connections_state`),
    n = r(),
    i;
  return (
    e[0] !== t || e[1] !== n
      ? ((i = s({ remoteControlConnectionsState: t, slingshotEnabled: n })),
        (e[0] = t),
        (e[1] = n),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
function s({ remoteControlConnectionsState: e, slingshotEnabled: t }) {
  return t && (e?.available ?? !0) && e?.accessRequired !== !0;
}
function c({
  selectedConnectionsTab: e,
  showControlOtherDevices: t,
  showControlThisMacTab: n,
  showRemoteControlConnectionsSection: r,
  showRemoteSshConnections: i,
  showTabbedSshPage: a,
  isWslConnectionsLoading: o,
  showWslConnections: s,
}) {
  return e === `wsl` && o
    ? `wsl`
    : r
      ? e === `control-this-mac` && !n
        ? t
          ? `access-other-devices`
          : `ssh`
        : e === `access-other-devices` && !t
          ? n
            ? `control-this-mac`
            : `ssh`
          : e === `ssh` && !a
            ? t
              ? `access-other-devices`
              : `control-this-mac`
            : e === `wsl` && !s
              ? `ssh`
              : e
      : e === `wsl` && s
        ? `wsl`
        : i
          ? `ssh`
          : `access-other-devices`;
}
var l;
function u() {
  return (u = e(() => {
    ((l = t()), i(), n());
  }))();
}
export { o as i, u as n, s as r, c as t };
//# sourceMappingURL=remote-control-connections-visibility-bb0e6da8d966.js.map
