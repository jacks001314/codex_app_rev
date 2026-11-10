import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { sct as t } from "./app-shared-2feb3d4c6fcc.js";
import { OBr as n } from "./app-initial-ad16eaadf81f.js";
import { n as r } from "./chronicle-settings-d16251f05467.js";
function i(e) {
  return (
    e.stage === `beta` &&
    e.name !== `memories` &&
    e.name !== `multi_agent` &&
    e.name !== `plugins` &&
    e.name !== `plugin` &&
    e.name !== `remote_control` &&
    !e.name.startsWith(`realtime_`) &&
    e.name !== `chronicle` &&
    e.name !== `workspace_dependencies`
  );
}
function a() {
  return (a = e(() => {
    (t(), n(), r());
  }))();
}
export { i as n, a as t };
//# sourceMappingURL=experimental-feature-visibility-2c33544b3214.js.map
