import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { n as t, r as n } from "./text-file-storage-b2e57fb6ac22.js";
async function r({ hostId: e, path: t, save: r }) {
  if (r != null && !(await r())) throw Error(`Could not save the edited plan`);
  return (await n({ filePath: t, hostId: e })).content;
}
function i() {
  return (i = e(() => {
    t();
  }))();
}
export { r as n, i as t };
//# sourceMappingURL=read-saved-plan-content-e6e77b31f824.js.map
