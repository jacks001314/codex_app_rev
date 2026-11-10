import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { B6t as t, Oi as n, fz as r } from "./app-initial-f094ef01c64d.js";
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
var a = e(() => {
  (t(), r(), n());
});
export { i as n, a as t };
//# sourceMappingURL=experimental-feature-visibility-ceccd69526a3.js.map
