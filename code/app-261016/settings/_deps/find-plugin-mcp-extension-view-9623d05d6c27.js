import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Mbt as t, sct as n } from "./app-shared-2feb3d4c6fcc.js";
import { KFr as r, YFr as i, Z3n as a, t6n as o } from "./app-initial-ad16eaadf81f.js";
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
//# sourceMappingURL=find-plugin-mcp-extension-view-9623d05d6c27.js.map
