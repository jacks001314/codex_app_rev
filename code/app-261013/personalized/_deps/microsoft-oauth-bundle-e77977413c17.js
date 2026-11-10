import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { K0n as t, X0n as n, Y0n as r, q0n as i } from "./app-initial-5851df3f6cb1.js";
function a(e) {
  return f.has(e);
}
function o({ connectorId: e, disableExposureLog: t = !1, statsigClient: r }) {
  return a(e) ? n(r, `enable-bundled-apps-msft`, { disableExposureLog: t }) : !1;
}
function s(e) {
  return i(d, e);
}
function c(e) {
  return f.get(e);
}
function l({ availableAppIds: e, companionConnectorIds: n, companionConnectors: r, companionLinks: i }) {
  return t({
    availableAppIds: e,
    companionConnectorIds: n,
    companionConnectors: r,
    companionLinks: i,
    connectorById: f,
  });
}
var u, d, f;
function p() {
  return (p = e(() => {
    (r(),
      (u = `connector_1e4f6a44acf14e3ca1d96672f8c945bc`),
      (d = [
        { connectorId: `connector_4aaab2856305417b993eca9a216aaf6e`, kind: `outlook-email` },
        { connectorId: `connector_e6a7394682e24467ac68c60696f275a4`, kind: `outlook-calendar` },
        { connectorId: u, kind: `sharepoint` },
        { connectorId: `connector_246af0940da3457da0e751171dc1ce60`, kind: `teams` },
      ]),
      (f = new Map(d.map((e) => [e.connectorId, e]))));
  }))();
}
export { c as a, s as i, u as n, p as o, l as r, o as s, d as t };
//# sourceMappingURL=microsoft-oauth-bundle-e77977413c17.js.map
