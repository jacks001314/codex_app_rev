import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
function t(e) {
  if (
    e != null &&
    !(
      !(
        e.appMetadata != null &&
        `firstPartyType` in e.appMetadata &&
        typeof e.appMetadata.firstPartyType == `string` &&
        e.appMetadata.firstPartyType.trim() !== ``
      ) &&
      e.distributionChannel !== `DEFAULT_OAI_CATALOG` &&
      e.distributionChannel !== `ECOSYSTEM_DIRECTORY`
    )
  )
    return e.name;
}
var n = e(() => {});
export { n, t };
//# sourceMappingURL=mcp-app-analytics-d4aac36ba72c.js.map
