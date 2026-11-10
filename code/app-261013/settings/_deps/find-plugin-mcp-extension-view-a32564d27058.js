import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { gyt as t, rst as n } from "./app-shared-bbfeca5e5737.js";
import { Cjr as r, Ejr as i, _0n as a, x0n as o } from "./app-initial-5851df3f6cb1.js";
function s(e, n) {
  return e == null
    ? null
    : (n.find((n) => {
        if (`readTool` in n && n.transport.type === `hosted` && n.pluginId != null)
          return t(n.pluginId, e.summary.remotePluginId ?? e.summary.id);
        let i = `readTool` in n ? n.connectorId : r(n);
        if (i != null) return e.apps.some((e) => e.id === i);
        if (n.pluginId !== void 0) return n.pluginId === e.summary.id;
        let o = a(n.server);
        return e.mcpServers.some((e) => a(e) === o);
      }) ?? null);
}
function c() {
  return (c = e(() => {
    (n(), i(), o());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=find-plugin-mcp-extension-view-a32564d27058.js.map
