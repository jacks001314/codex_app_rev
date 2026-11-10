import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Nt as t, _dn as n, gNt as r } from "./app-shared-7552fc8d5d82.js";
import { Sin as i, Tin as a } from "./app-initial-3916b423772b.js";
function o() {
  let e = (0, l.c)(3),
    [n] = t(`remote_control_connections_state`),
    r = a(),
    i;
  return (
    e[0] !== n || e[1] !== r
      ? ((i = s({ remoteControlConnectionsState: n, slingshotEnabled: r })),
        (e[0] = n),
        (e[1] = r),
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
    ((l = n()), r(), i());
  }))();
}
export { o as i, u as n, s as r, c as t };
//# sourceMappingURL=remote-control-connections-visibility-ea9c5521e811.js.map
