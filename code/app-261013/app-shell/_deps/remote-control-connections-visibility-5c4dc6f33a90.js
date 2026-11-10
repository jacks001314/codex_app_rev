import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t } from "./app-shared-bbfeca5e5737.js";
import { afn as n, dFr as r, nfn as i, uFr as a } from "./app-initial-5851df3f6cb1.js";
function o() {
  let e = (0, l.c)(3),
    [t] = r(`remote_control_connections_state`),
    i = n(),
    a;
  return (
    e[0] !== t || e[1] !== i
      ? ((a = s({ remoteControlConnectionsState: t, slingshotEnabled: i })),
        (e[0] = t),
        (e[1] = i),
        (e[2] = a))
      : (a = e[2]),
    a
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
    ((l = t()), a(), i());
  }))();
}
export { o as i, u as n, s as r, c as t };
//# sourceMappingURL=remote-control-connections-visibility-5c4dc6f33a90.js.map
